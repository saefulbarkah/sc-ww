"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncAiPerception = void 0;
const Log_1 = require("../../Core/Common/Log");
const Stats_1 = require("../../Core/Common/Stats");
const Time_1 = require("../../Core/Common/Time");
const JsModelManager_1 = require("../../Core/Model/JsModelManager");
const Vector_1 = require("../../Core/Utils/Math/Vector");
const MathUtils_1 = require("../../Core/Utils/MathUtils");
const TraceElementCommon_1 = require("../../Core/Utils/TraceElementCommon");
const AsyncCommon_1 = require("../AsyncCommon");
const PROFILE_KEY = 'AsyncAiPerception_IsActorInSense';
class AsyncAiPerception {
    constructor() {
        this._private_PerceptionData = undefined;
        this._private_EntityData = undefined;
        this._private_EntityActor = undefined;
        this._private_TmpVector = Vector_1.Vector.Create();
        this._private_LineTrace = undefined;
        this._private_TmpCheckedTraceType = new Set();
    }
    OnTick(perceptionHandle, lineTrace) {
        this._private_PerceptionData = JsModelManager_1.JsModelManager.GetAiPerception(perceptionHandle);
        if (!this._private_PerceptionData) {
            return;
        }
        this._private_EntityData = this._private_PerceptionData.GetEntity();
        this._private_EntityActor = this._private_EntityData?.GetActor();
        if (!this._private_EntityData || !this._private_EntityActor?.IsValid()) {
            return;
        }
        const isInGameThread = global.checkInGameThread();
        if (isInGameThread) {
            if (Log_1.Log.CheckInfo()) {
                Log_1.Log.Info("Test", 36, '[AsyncAiPerceptionTask::Tick] Execute in gameTherad. Error!!!!');
            }
        }
        this._private_LineTrace = lineTrace;
        this._private_LineTrace.WorldContextObject = this._private_EntityActor;
        this._private_FindNewInSenseActor();
        this._private_FindOutSenseActor();
        this._private_PerceptionData = undefined;
        this._private_EntityData = undefined;
        this._private_LineTrace = undefined;
    }
    _private_FindNewInSenseActor() {
        AsyncAiPerception._private_FindNewInSenseActorStat.Start();
        const selfLocation = this._private_EntityActor.D_K2_GetActorLocation();
        this._private_PerceptionData.EntitiesToAdd.Empty();
        if (this._private_PerceptionData.MingZhongZhiGuiLog) {
            const size = this._private_PerceptionData.ActivateAiSenseObjects.Num();
            const entityId = this._private_EntityData?.EntityId;
            if (Log_1.Log.CheckInfo()) {
                Log_1.Log.Info("AI", 36, '[AsyncAIDebug] ActivateAiSenseObjects', ['Id', entityId], ['Size', size]);
            }
            for (let i = 0; i < size; i++) {
                const key = this._private_PerceptionData.ActivateAiSenseObjects.GetKey(i);
                const value = this._private_PerceptionData.ActivateAiSenseObjects.Get(key);
                if (Log_1.Log.CheckInfo()) {
                    Log_1.Log.Info("AI", 36, '[AsyncAIDebug] ActivateObject', ['Id', entityId], ['SensTargetType', key], ['ActivateAiSenseObjectSet.size', value?.Num()]);
                }
                if (value) {
                    const setSize = value.Num();
                    for (let j = 0; j < setSize; j++) {
                        const aiSenseObject = value.Get(j);
                        if (Log_1.Log.CheckInfo()) {
                            Log_1.Log.Info("AI", 36, '[AsyncAIDebug] Active', ['Id', entityId], ['AiSense', aiSenseObject.AiSenseId]);
                        }
                    }
                }
            }
        }
        const size = this._private_PerceptionData.ActivateAiSenseObjects.Num();
        const tempActors = new Array();
        for (let i = 0; i < size; i++) {
            const senseTargetType = this._private_PerceptionData.ActivateAiSenseObjects.GetKey(i);
            const activateAiSenseObjectSet = this._private_PerceptionData.ActivateAiSenseObjects.Get(senseTargetType);
            if (activateAiSenseObjectSet) {
                const setSize = activateAiSenseObjectSet.Num();
                if (setSize === 0) {
                    continue;
                }
                let maxRadius = 0;
                for (let j = 0; j < setSize; j++) {
                    const aiSenseObject = activateAiSenseObjectSet.Get(j);
                    maxRadius = Math.max(maxRadius, aiSenseObject.SenseDistanceRangeMin);
                }
                if (senseTargetType === 0) {
                    AsyncCommon_1.AsyncCommon.GetEntitiesInRangeWithLocation(selfLocation, maxRadius, 62, tempActors);
                }
                else {
                    AsyncCommon_1.AsyncCommon.GetEntitiesInRangeWithLocation(selfLocation, maxRadius, 1, tempActors);
                }
                for (const actor of tempActors) {
                    const entityData = JsModelManager_1.JsModelManager.GetEntityByActor(actor);
                    if (!entityData) {
                        continue;
                    }
                    const type = this._private_PerceptionData.EntitiesInSense.Get(entityData.EntityId);
                    if (type !== undefined) {
                        continue;
                    }
                    if (!this._private_IsActorInSense(entityData, Vector_1.Vector.Create(selfLocation), false, senseTargetType, this._private_PerceptionData.MingZhongZhiGuiLog)) {
                        continue;
                    }
                    if (this._private_PerceptionData.MingZhongZhiGuiLog) {
                        if (Log_1.Log.CheckInfo()) {
                            Log_1.Log.Info("AI", 36, '[AsyncAIDebug] In Sense', ['Id', this._private_EntityData?.EntityId], ['actor', entityData.EntityId]);
                        }
                    }
                    this._private_PerceptionData.EntitiesToAdd.Add(entityData.EntityId, senseTargetType);
                }
            }
        }
        AsyncAiPerception._private_FindNewInSenseActorStat.Stop();
    }
    _private_FindOutSenseActor() {
        if (!this._private_PerceptionData || !this._private_EntityData) {
            return;
        }
        AsyncAiPerception._private_FindOutSenseActorStat.Start();
        const selfLocation = this._private_EntityData.GetActor().D_K2_GetActorLocation();
        const entitiesInSense = this._private_PerceptionData.EntitiesInSense;
        const entitiesToRemove = this._private_PerceptionData.EntitiesToRemove;
        const entitiesRemoveTime = this._private_PerceptionData.EntitiesRemoveTime;
        const entitiesNotSense = this._private_PerceptionData.EntitiesNotSense;
        entitiesToRemove.Empty();
        let size = entitiesInSense.Num();
        if (this._private_PerceptionData.MingZhongZhiGuiLog) {
            const selfEntityId = this._private_EntityData?.EntityId;
            for (let i = 0; i < size; i++) {
                const entityId = entitiesInSense.GetKey(i);
                const senseTargetType = entitiesInSense.Get(entityId);
                if (entityId === this._private_EntityData.EntityId) {
                    continue;
                }
                if (Log_1.Log.CheckInfo()) {
                    Log_1.Log.Info("AI", 36, '[AsyncAIDebug] EntityIn', ['Id', selfEntityId], ['OtherId', entityId], ['type', senseTargetType]);
                }
            }
        }
        for (let i = 0; i < size; i++) {
            const entityId = entitiesInSense.GetKey(i);
            if (entityId === this._private_EntityData.EntityId) {
                continue;
            }
            const senseTargetType = entitiesInSense.Get(entityId);
            const entityData = JsModelManager_1.JsModelManager.GetEntityById(entityId);
            if (!entityData) {
                continue;
            }
            if (this._private_IsActorInSense(entityData, Vector_1.Vector.Create(selfLocation), true, senseTargetType)) {
                this._private_PerceptionData.EntitiesRemoveTime.Remove(entityId);
                continue;
            }
            entitiesToRemove.Add(entityId);
        }
        size = entitiesRemoveTime.Num();
        for (let i = 0; i < size; i++) {
            const entityId = entitiesRemoveTime.GetKey(i);
            const time = entitiesRemoveTime.Get(entityId);
            if (time) {
                if (Time_1.Time.Now > time) {
                    entitiesInSense.Remove(entityId);
                    entitiesRemoveTime.Remove(entityId);
                    entitiesNotSense.Add(entityId);
                }
            }
        }
        size = entitiesToRemove.Num();
        for (let i = 0; i < size; i++) {
            const entityId = entitiesToRemove.Get(i);
            const time = entitiesRemoveTime.Get(entityId);
            if (time === undefined) {
                entitiesRemoveTime.Add(entityId, Time_1.Time.Now +
                    MathUtils_1.MathUtils.GetRandomRange(this._private_PerceptionData.AiSenseGroupLoseDelayRange.X, this._private_PerceptionData.AiSenseGroupLoseDelayRange.Y));
            }
        }
        AsyncAiPerception._private_FindOutSenseActorStat.Stop();
    }
    _private_IsActorInSense(entity, selfLocation, inSenseBefore, senseTargetType, debugLog = false) {
        const otherActor = entity.GetActor();
        if (!otherActor?.IsValid() || !this._private_PerceptionData || !this._private_EntityActor?.IsValid()) {
            return false;
        }
        AsyncAiPerception._private_IsActorInSenseStat.Start();
        const selfRotation = this._private_EntityActor.K2_GetActorRotation();
        const otherLocation = Vector_1.Vector.Create(otherActor.D_K2_GetActorLocation());
        const debugLogAndRole = debugLog && entity.GetCreatureDataComponent().EntityType === 0;
        otherLocation.Subtraction(selfLocation, this._private_TmpVector);
        const squaredDist = this._private_TmpVector.SizeSquared();
        let horizontalAngle = 0;
        let verticalAngle = 0;
        if (this._private_PerceptionData.WithAngleHorizontalCount || this._private_PerceptionData.WithAngleVerticalCount) {
            this._private_TmpVector.FromUeVector(selfRotation.UnrotateVectorDouble(this._private_TmpVector.ToUeVector()));
            if (this._private_PerceptionData.WithAngleHorizontalCount) {
                horizontalAngle = MathUtils_1.MathUtils.RadToDeg * Math.atan2(this._private_TmpVector.Y, this._private_TmpVector.X);
            }
            if (this._private_PerceptionData.WithAngleVerticalCount) {
                verticalAngle = MathUtils_1.MathUtils.RadToDeg * Math.asin(this._private_TmpVector.Z / Math.sqrt(squaredDist));
            }
        }
        const unifiedComp = entity.GetCharacterUnifiedStateComponent();
        const positionState = unifiedComp ? unifiedComp.PositionState : 0;
        const moveState = unifiedComp ? unifiedComp.MoveState : 0;
        TraceElementCommon_1.TraceElementCommon.SetStartLocation(this._private_LineTrace, selfLocation);
        this._private_TmpCheckedTraceType.clear();
        const activateAiSenseObjects = this._private_PerceptionData.ActivateAiSenseObjects.Get(senseTargetType);
        if (!activateAiSenseObjects) {
            AsyncAiPerception._private_IsActorInSenseStat.Stop();
            return false;
        }
        const size = activateAiSenseObjects.Num();
        for (let i = 0; i < size; i++) {
            const aiSenseObject = activateAiSenseObjects.Get(i);
            if (!this._private_InArea(aiSenseObject, squaredDist, horizontalAngle, verticalAngle, positionState, moveState, inSenseBefore)) {
                continue;
            }
            if (debugLogAndRole) {
                if (Log_1.Log.CheckInfo()) {
                    Log_1.Log.Info("AI", 36, '[AsyncAIDebug] Ai InArea', ['Id', this._private_EntityData?.EntityId], ['actor', otherActor?.GetName()], ['CantBeBlock', aiSenseObject.AiSenseCantBeBlock]);
                }
            }
            if (!aiSenseObject.AiSenseCantBeBlock) {
                if (this._private_TmpCheckedTraceType.has(aiSenseObject.AiSenseBlockType)) {
                    continue;
                }
                this._private_LineTrace.SetTraceTypeQuery(aiSenseObject.AiSenseBlockType);
                TraceElementCommon_1.TraceElementCommon.SetEndLocation(this._private_LineTrace, otherLocation);
                if (TraceElementCommon_1.TraceElementCommon.LineTrace(this._private_LineTrace, PROFILE_KEY)) {
                    const hitResult = this._private_LineTrace.HitResult;
                    const actors = hitResult.Actors;
                    if (hitResult.bBlockingHit && actors.Get(0) !== otherActor) {
                        if (debugLogAndRole) {
                            if (Log_1.Log.CheckInfo()) {
                                Log_1.Log.Info("AI", 36, '[AsyncAIDebug] Ai Hit', ['Id', this._private_EntityData?.EntityId], ['actor', actors.Get(0)?.GetName()], ['Comp', hitResult.Components.Get(0)?.GetName()]);
                            }
                        }
                        this._private_TmpCheckedTraceType.add(aiSenseObject.AiSenseBlockType);
                        continue;
                    }
                }
            }
            AsyncAiPerception._private_IsActorInSenseStat.Stop();
            return true;
        }
        AsyncAiPerception._private_IsActorInSenseStat.Stop();
        return false;
    }
    _private_InArea(aiSenseObject, squaredDist, angleHorizontal, angleVertical, positionState, moveState, inSenseBefore) {
        if (aiSenseObject.WithAngleHorizontal) {
            if (!MathUtils_1.MathUtils.InRangeArray(angleHorizontal, [
                aiSenseObject.AiSenseHorizontalAngle.X,
                aiSenseObject.AiSenseHorizontalAngle.Y,
            ])) {
                return false;
            }
        }
        if (aiSenseObject.WithAngleVertical) {
            if (!MathUtils_1.MathUtils.InRangeArray(angleVertical, [
                aiSenseObject.AiSenseVerticalAngle.X,
                aiSenseObject.AiSenseVerticalAngle.Y,
            ])) {
                return false;
            }
        }
        let realSquaredDist = squaredDist;
        if (positionState === 0) {
            if (moveState === 0 ||
                moveState === 1 ||
                moveState === 2 ||
                moveState === 3) {
                realSquaredDist /= aiSenseObject.SquaredWalkSenseRate;
            }
        }
        else if (moveState === 16) {
            realSquaredDist /= aiSenseObject.SquaredAirSenseRate;
        }
        if (inSenseBefore
            ? realSquaredDist > aiSenseObject.SenseDistanceRangeMax * aiSenseObject.SenseDistanceRangeMax
            : realSquaredDist > aiSenseObject.SenseDistanceRangeMin * aiSenseObject.SenseDistanceRangeMin) {
            return false;
        }
        return true;
    }
}
exports.AsyncAiPerception = AsyncAiPerception;
AsyncAiPerception._private_FindNewInSenseActorStat = Stats_1.Stat.Create('AsyncAiPerception.FindNewInSenseActor');
AsyncAiPerception._private_FindOutSenseActorStat = Stats_1.Stat.Create('AsyncAiPerception.FindOutSenseActor');
AsyncAiPerception._private_IsActorInSenseStat = Stats_1.Stat.Create('AsyncAiPerception.IsActorInSense');
//# sourceMappingURL=AsyncAiPerception.js.map