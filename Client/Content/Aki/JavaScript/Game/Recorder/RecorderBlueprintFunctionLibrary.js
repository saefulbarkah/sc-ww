
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BpFxEffectRecorderObject=exports.EFFECT_CREATE_ADVANCE=exports.RECORDER_MAX_EFFECT_SPEED=exports.RECORDER_MAX_SPEED=exports.RECORD_INTERVAL=void 0;const puerts_1=require("puerts"),UE=require("ue"),Log_1=require("../../Core/Common/Log"),Stats_1=require("../../Core/Common/Stats"),Time_1=require("../../Core/Common/Time"),Protocol_1=require("../../Core/Define/Net/Protocol"),EntitySystem_1=require("../../Core/Entity/EntitySystem"),FNameUtil_1=require("../../Core/Utils/FNameUtil"),Vector_1=require("../../Core/Utils/Math/Vector"),CameraController_1=require("../Camera/CameraController"),EventDefine_1=require("../Common/Event/EventDefine"),EventSystem_1=require("../Common/Event/EventSystem"),EffectSystem_1=require("../Effect/EffectSystem"),Global_1=require("../Global"),ModelManager_1=require("../Manager/ModelManager"),SceneInteractionManager_1=require("../Render/Scene/Interaction/SceneInteractionManager"),GameplayCueRecorder_1=require("./GameplayCueRecorder"),RecordCurveObject_1=require("./RecordCurveObject");exports.RECORD_INTERVAL=.016667,exports.RECORDER_MAX_SPEED=3e3,exports.RECORDER_MAX_EFFECT_SPEED=1e5,exports.EFFECT_CREATE_ADVANCE=.1;class MaterialControllerParam{constructor(r,e,t){this.Data=r,this.UserData=e,this.StartTime=t}}class CameraRecorderObject{constructor(r,e,t){this.OC=r,this.Recorder=void 0,Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Start Camera Recorder",["Actor",r.GetName()],["Time",t]),this.Recorder=UE.NewObject(UE.KuroCameraRecorder.StaticClass()),this.Recorder.SetRecordActor(r,exports.RECORD_INTERVAL,exports.RECORDER_MAX_SPEED),this.Recorder.StartRecorder(e,t)}TickRecorder(r){this.Recorder.TickRecorder(r)}StopRecorder(){Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Stop Camera Recorder",["Actor",this.OC?.GetName()],["Time",RecorderBlueprintFunctionLibrary.RecordingTimeNoBlueprint()]),this.Recorder.StopRecorder()}}class CharacterRecorderObject{constructor(r,e,t,i){var n;this.Tae=r,this.ae=t,this.E0=0,this.Recorder=void 0,this.far=new Map,this.par=(r,e,t)=>{this.far.set(t,new MaterialControllerParam(r,e,RecorderBlueprintFunctionLibrary.RecordingTimeNoBlueprint()))},this.var=r=>{var e,t=this.far.get(r);t&&(RecorderBlueprintFunctionLibrary.RecordingTimeNoBlueprint()<t.StartTime&&Log_1.Log.CheckError()&&Log_1.Log.Error("Test",6,`Remove MaterialController: ${r} at `+RecorderBlueprintFunctionLibrary.RecordingTimeNoBlueprint()),(e=this.Recorder.AddNotify(UE.TsAnimNotifyStateAddMaterialController_C.StaticClass(),FNameUtil_1.FNameUtil.EMPTY,t.StartTime,RecorderBlueprintFunctionLibrary.RecordingTimeNoBlueprint()-t.StartTime))&&(e.ControllerData=t.Data,e.UserData=t.UserData),this.far.delete(r))},this.E0=r.GetEntityIdNoBlueprint(),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Start Character Recorder",["Actor",r.GetName()],["EntityId",r.CharacterActorComponent.Entity.Id],["Time",t]),this.Recorder=UE.NewObject(UE.KuroCharacterRecorder.StaticClass()),this.Recorder.bUseClone=!CharacterRecorderObject.NotUseCloneType.has(r.CharacterActorComponent.CreatureData.GetEntityType()),this.Recorder.bUseClone||(n=(0,puerts_1.$ref)(void 0),UE.KuroAnimEdLibrary.CreateNewBlueprint(i+r.GetName(),r,n,void 0),this.Recorder.BaseBlueprint=(0,puerts_1.$unref)(n)),this.Recorder.SetRecordActor(r,exports.RECORD_INTERVAL,exports.RECORDER_MAX_SPEED),this.Recorder.StartRecorder(e,t),this.Recorder.SetNotifiesRecordConfigs(RecorderBlueprintFunctionLibrary.RecordNotifies,RecorderBlueprintFunctionLibrary.ReplaceNotifies),EventSystem_1.EventSystem.AddWithTarget(r.CharRenderingComponent,EventDefine_1.EEventName.OnAddMaterialController,this.par),EventSystem_1.EventSystem.AddWithTarget(r.CharRenderingComponent,EventDefine_1.EEventName.OnRemoveMaterialController,this.var)}static get NotUseCloneType(){return this.gAr||(this.gAr=new Set([Protocol_1.Aki.Protocol.kks.Proto_Player])),this.gAr}TickRecorder(r){this.Recorder.TickRecorder(r)}StopRecorder(){Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Stop Character Recorder",["Actor",this.Tae?.GetName()],["EntityId",this.Tae?.CharacterActorComponent?.Entity.Id],["Time",RecorderBlueprintFunctionLibrary.RecordingTimeNoBlueprint()]);var r,e=this.Recorder.AddNotify(UE.TsAnimNotifyStateAddCharRendering_C.StaticClass(),FNameUtil_1.FNameUtil.EMPTY,this.ae,RecorderBlueprintFunctionLibrary.RecordingTimeNoBlueprint()-this.ae);e&&(e.RenderType=this.Tae.RenderType),EntitySystem_1.EntitySystem.Get(this.E0)&&(EventSystem_1.EventSystem.RemoveWithTarget(this.Tae.CharRenderingComponent,EventDefine_1.EEventName.OnAddMaterialController,this.par),EventSystem_1.EventSystem.RemoveWithTarget(this.Tae.CharRenderingComponent,EventDefine_1.EEventName.OnRemoveMaterialController,this.var));for([r]of this.far)this.var(r);this.Recorder.StopRecorder()}}CharacterRecorderObject.gAr=void 0;class SceneItemRecorderObject{constructor(r,t,i){this.Ear=r,this.Sar=new Array,Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Start SceneItem Recorder",["Name",r.Owner.GetName()],["Path",SceneInteractionManager_1.SceneInteractionManager.Get().GetSceneInteractionLevelName(r.GetSceneInteractionLevelHandleId())],["EntityId",r.Entity.Id],["Time",i]);var e=r.Owner;const n=UE.NewObject(UE.KuroMeshRecorder.StaticClass());this.Sar.push(n),n.SetRecordActor(e,exports.RECORD_INTERVAL,exports.RECORDER_MAX_EFFECT_SPEED),n.StartRecorder(t,i);var o=SceneInteractionManager_1.SceneInteractionManager.Get().GetSceneInteractionAllActorsInLevel(r.GetSceneInteractionLevelHandleId());if(o){var c=new Set;for(let r=0,e=o.Num();r<e;r++){var u=o.Get(r);if(c.has(u))Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Test",6,"Recorder Repetitive SceneItemActor",["Actor",u.GetName()]);else if(Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"  SceneItem Child",["Name",u.GetName()]),c.add(u),!(!u.RootComponent||u instanceof UE.Brush||u instanceof UE.LevelSequenceActor)){const n=UE.NewObject(UE.KuroMeshRecorder.StaticClass());this.Sar.push(n),n.SetRecordActor(u,exports.RECORD_INTERVAL,exports.RECORDER_MAX_SPEED),n.StartRecorder(t,i)}}}}TickRecorder(r){for(const e of this.Sar)e.TickRecorder(r)}StopRecorder(){Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Stop SceneItem Recorder",["LevelName",SceneInteractionManager_1.SceneInteractionManager.Get().GetSceneInteractionLevelName(this.Ear.GetSceneInteractionLevelHandleId())],["EntityId",this.Ear?.Entity?.Id],["Time",RecorderBlueprintFunctionLibrary.RecordingTimeNoBlueprint()]);for(const r of this.Sar)r.StopRecorder()}}class EffectRecorderObject{constructor(r,e,t,i){this.OC=r,this.m$o=e,this.yar=-1,this.Iar=-1,this.Playing=!1,this.iy=void 0,this.n8="",this.klh=void 0,this.Cce=0,Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Start Effect Recorder",["Actor",r.GetName()],["Time",i]),this.Cce=i,this.iy=UE.NewObject(UE.KuroEffectRecorder.StaticClass()),this.iy.SetEffectClass(UE.TsRecordEffect_C.StaticClass(),EffectSystem_1.EffectSystem.GetEffectModel(e).GetName()),this.iy.SetRecordActor(r,exports.RECORD_INTERVAL,exports.RECORDER_MAX_SPEED),this.iy.StartRecorder(t,i);var n,t=this.iy.GetShadow();this.n8=UE.KismetSystemLibrary.GetPathName(EffectSystem_1.EffectSystem.GetEffectModel(e)),this.iy.RecordStringValue(r,new UE.FName("EffectModelDataPath"),i-exports.EFFECT_CREATE_ADVANCE,this.n8),EffectSystem_1.EffectSystem.IsHandleFreeze(e)&&(t.LifeTimeType=3,this.klh||(n=EffectSystem_1.EffectSystem.GetSeekToTargetTime(this.m$o),this.klh=new RecordCurveObject_1.RecordFloatCurveObject(r,"ManualProcessTime",i,n)),this.iy.AddAutoFloatPropertyTrack(t,new UE.FName("ManualProcessTime"),i)),t.EffectModelDataPath=this.n8,t.EffectModelData=EffectSystem_1.EffectSystem.GetEffectModel(e),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Record Effect",["EffectModel",EffectSystem_1.EffectSystem.GetEffectModel(e)?.GetName()],["Path",t.EffectModelDataPath])}TickRecorder(r){let e=!1;var t,i=EffectSystem_1.EffectSystem.GetLastPlayTime(this.m$o),n=EffectSystem_1.EffectSystem.GetLastStopTime(this.m$o);EffectSystem_1.EffectSystem.IsHandleFreeze(this.m$o)&&-1<(t=EffectSystem_1.EffectSystem.GetSeekToTargetTime(this.m$o))&&(this.klh?this.klh.RecordTick(r,t):this.klh=new RecordCurveObject_1.RecordFloatCurveObject(this.OC,"ManualProcessTime",this.Cce,t)),0<i&&i!==this.yar&&(this.yar=i,e=!0,this.Playing=!0),0<n&&n!==this.Iar&&(this.Iar=n,e=!0,this.Playing=!1),e&&(this.yar>this.Iar?this.iy.PlayCommand():this.iy.StopCommand()),this.iy.TickRecorder(r)&&(this.Cce+=r)}StopRecorder(){Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Stop Effect Recorder"),this.klh&&(this.klh.RecordStop(this.Cce,this.iy,1),this.klh=void 0),this.yar>this.Iar&&this.iy.StopCommand(),this.iy.RecordStringValue(this.OC,new UE.FName("EffectModelDataPath"),RecorderBlueprintFunctionLibrary.RecordingTimeNoBlueprint(),this.n8),this.iy.StopRecorder()}}class BpFxEffectRecorderObject{constructor(r,e,t){this.OC=r,this.ae=t,this.Recorder=void 0,Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Start TsBpFxEffect Recorder",["Actor",r.GetName()],["Time",t]),this.Recorder=UE.NewObject(UE.KuroTrackRecorder.StaticClass()),this.Recorder.SetRecordActor(r,exports.RECORD_INTERVAL,exports.RECORDER_MAX_SPEED),this.Recorder.StartRecorder(e,t),(this.OC.Recorder=this).OC.RecorderShadow=this.Shadow,this.Shadow.IsRecorderActor=!0,this.OC.OnRecordStart()}get Shadow(){return this.Recorder.GetShadow()}TickRecorder(r){this.OC.OnRecordTick(r),this.Recorder.TickRecorder(r)}StopRecorder(r){Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Stop TsBpFxEffect Recorder",["Actor",this.OC.GetName()],["Time",RecorderBlueprintFunctionLibrary.RecordingTimeNoBlueprint()]),this.OC.OnRecordStop(),this.Recorder.AddStaticBoolPropertyTrack(this.OC,new UE.FName("IsRecorderActor"),!0,this.ae,r),this.Recorder.StopRecorder(),this.OC.ClearRecorder()}}exports.BpFxEffectRecorderObject=BpFxEffectRecorderObject;class RecorderBlueprintFunctionLibrary extends UE.BlueprintFunctionLibrary{Constructor(){}static get CharacterTypes(){return RecorderBlueprintFunctionLibrary.CharacterTypesInternal||(RecorderBlueprintFunctionLibrary.CharacterTypesInternal=new Set([Protocol_1.Aki.Protocol.kks.Proto_Animal,Protocol_1.Aki.Protocol.kks.Proto_Monster,Protocol_1.Aki.Protocol.kks.Proto_Npc,Protocol_1.Aki.Protocol.kks.Proto_Player,Protocol_1.Aki.Protocol.kks.Proto_Vision])),RecorderBlueprintFunctionLibrary.CharacterTypesInternal}static get SceneItemTypes(){return RecorderBlueprintFunctionLibrary.SceneItemTypesInternal||(RecorderBlueprintFunctionLibrary.SceneItemTypesInternal=new Set([Protocol_1.Aki.Protocol.kks.Proto_SceneItem])),RecorderBlueprintFunctionLibrary.SceneItemTypesInternal}static FindCenterLocation(){var r=RecorderBlueprintFunctionLibrary.CenterLocation;return r.DeepCopy(RecorderBlueprintFunctionLibrary.CenterActor?RecorderBlueprintFunctionLibrary.CenterActor.D_K2_GetActorLocation():Global_1.Global.BaseCharacter.CharacterActorComponent.ActorLocationProxyNoUpdate),r}static Init(){RecorderBlueprintFunctionLibrary.RecordNotifies=UE.NewArray(UE.Class),RecorderBlueprintFunctionLibrary.RecordNotifies.Add(UE.AnimNotifyEffect_C.StaticClass()),RecorderBlueprintFunctionLibrary.RecordNotifies.Add(UE.AnimNotifyStateEffect_C.StaticClass()),RecorderBlueprintFunctionLibrary.RecordNotifies.Add(UE.AnimNotifyStateGhost_C.StaticClass()),RecorderBlueprintFunctionLibrary.RecordNotifies.Add(UE.AnimNotifyAddMaterialControllerData_C.StaticClass()),RecorderBlueprintFunctionLibrary.RecordNotifies.Add(UE.AnimNotifyAddMaterialControllerDataGroup_C.StaticClass()),RecorderBlueprintFunctionLibrary.RecordNotifies.Add(UE.AnimNotifyAddMeshMaterialControllerData_C.StaticClass()),RecorderBlueprintFunctionLibrary.RecordNotifies.Add(UE.AnimNotifyAddMeshMaterialControllerDataGroup_C.StaticClass()),RecorderBlueprintFunctionLibrary.RecordNotifies.Add(UE.AnimNotifyAddMotionVertexOffset_C.StaticClass()),RecorderBlueprintFunctionLibrary.RecordNotifies.Add(UE.AnimNotifyAddTransferEffect_C.StaticClass()),RecorderBlueprintFunctionLibrary.RecordNotifies.Add(UE.AnimNotifyStateAddMaterialControllerData_C.StaticClass()),RecorderBlueprintFunctionLibrary.RecordNotifies.Add(UE.AnimNotifyStateAddMaterialControllerDataGroup_C.StaticClass()),RecorderBlueprintFunctionLibrary.ReplaceNotifies=UE.NewArray(UE.Class),RecorderBlueprintFunctionLibrary.CenterLocation=Vector_1.Vector.Create(),RecorderBlueprintFunctionLibrary.EffectLocation=Vector_1.Vector.Create(),RecorderBlueprintFunctionLibrary.OverrideAttached=UE.NewMap(UE.BuiltinName,UE.Guid),RecorderBlueprintFunctionLibrary.IgnoreClasses=UE.NewSet(UE.Class),RecorderBlueprintFunctionLibrary.IgnoreClasses.Add(UE.BP_Cinematics_Tick_C.StaticClass()),RecorderBlueprintFunctionLibrary.Stat1=Stats_1.Stat.Create("RecorderStat1"),RecorderBlueprintFunctionLibrary.Stat2=Stats_1.Stat.Create("RecorderStat2"),RecorderBlueprintFunctionLibrary.Stat3=Stats_1.Stat.Create("RecorderStat3")}static StartRecord(r,e,t,i,n,o){if((RecorderBlueprintFunctionLibrary.Init(),!RecorderBlueprintFunctionLibrary.Recording)&&(r||Global_1.Global.BaseCharacter))return RecorderBlueprintFunctionLibrary.EnableCharacterRecord=i,RecorderBlueprintFunctionLibrary.EnableSceneItemRecord=n,RecorderBlueprintFunctionLibrary.EnableEffectRecord=o,RecorderBlueprintFunctionLibrary.Recording=!0,RecorderBlueprintFunctionLibrary.RecordingTimeInternal=0,RecorderBlueprintFunctionLibrary.CenterActor=r,RecorderBlueprintFunctionLibrary.RecordDist=e,RecorderBlueprintFunctionLibrary.RecordDistSquared=e*e,RecorderBlueprintFunctionLibrary.CharacterRecorders=new Map,RecorderBlueprintFunctionLibrary.SceneItemRecorders=new Map,RecorderBlueprintFunctionLibrary.EffectRecorders=new Map,RecorderBlueprintFunctionLibrary.BpFxEffectRecorders=new Map,RecorderBlueprintFunctionLibrary.GameplayCueRecorders=new Map,i=(0,puerts_1.$ref)(void 0),RecorderBlueprintFunctionLibrary.OutPath=t,UE.KuroAnimEdLibrary.CreateNewLevelSequence(t+"RecordSequence",i,void 0),RecorderBlueprintFunctionLibrary.OutputSequence=(0,puerts_1.$unref)(i),UE.KuroDataHelperLibrary.SaveObject(RecorderBlueprintFunctionLibrary.OutputSequence),RecorderBlueprintFunctionLibrary.FightCameraRecorder=new CameraRecorderObject(CameraController_1.CameraController.FightCamera.LogicComponent.CameraActor,RecorderBlueprintFunctionLibrary.OutputSequence,RecorderBlueprintFunctionLibrary.RecordingTimeInternal),RecorderBlueprintFunctionLibrary.SequenceCameraRecorder=new CameraRecorderObject(CameraController_1.CameraController.SequenceCamera.DisplayComponent.CineCamera,RecorderBlueprintFunctionLibrary.OutputSequence,RecorderBlueprintFunctionLibrary.RecordingTimeInternal),RecorderBlueprintFunctionLibrary.WidgetCameraRecorder=new CameraRecorderObject(CameraController_1.CameraController.WidgetCamera.DisplayComponent.CineCamera,RecorderBlueprintFunctionLibrary.OutputSequence,RecorderBlueprintFunctionLibrary.RecordingTimeInternal),RecorderBlueprintFunctionLibrary.OverrideAttached.Empty(),RecorderBlueprintFunctionLibrary.OverrideAttached.Set(new UE.FName("SequenceCamera"),RecorderBlueprintFunctionLibrary.SequenceCameraRecorder.Recorder.GetMainGuid()),RecorderBlueprintFunctionLibrary.StartRecordersWhenUpdate(),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.CreateEntity,RecorderBlueprintFunctionLibrary.OnCreateEntity),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.PlayCameraLevelSequence,RecorderBlueprintFunctionLibrary.OnPlayCameraLevelSequence),RecorderBlueprintFunctionLibrary.OutputSequence}static TickRecord(r){if(RecorderBlueprintFunctionLibrary.Recording&&(RecorderBlueprintFunctionLibrary.CenterActor||Global_1.Global.BaseCharacter)){var e,t,i,n,o,c=Time_1.Time.DeltaTimeSeconds;RecorderBlueprintFunctionLibrary.RecordingTimeInternal+=c,RecorderBlueprintFunctionLibrary.Stat3.Start(),RecorderBlueprintFunctionLibrary.StopRecordersWhenUpdate(),RecorderBlueprintFunctionLibrary.FightCameraRecorder?.TickRecorder(c),RecorderBlueprintFunctionLibrary.SequenceCameraRecorder?.TickRecorder(c),RecorderBlueprintFunctionLibrary.WidgetCameraRecorder?.TickRecorder(c);for([,e]of RecorderBlueprintFunctionLibrary.CharacterRecorders)e.TickRecorder(c);for([,t]of RecorderBlueprintFunctionLibrary.SceneItemRecorders)t.TickRecorder(c);for([,i]of RecorderBlueprintFunctionLibrary.EffectRecorders)i.TickRecorder(c);for([,n]of RecorderBlueprintFunctionLibrary.BpFxEffectRecorders)n.TickRecorder(c);for([,o]of RecorderBlueprintFunctionLibrary.GameplayCueRecorders)o.TickRecorder(c);RecorderBlueprintFunctionLibrary.StartRecordersWhenUpdate(),RecorderBlueprintFunctionLibrary.Stat3.Stop()}}static StopRecord(){if(RecorderBlueprintFunctionLibrary.Recording){RecorderBlueprintFunctionLibrary.FightCameraRecorder?.StopRecorder(),RecorderBlueprintFunctionLibrary.SequenceCameraRecorder?.StopRecorder(),RecorderBlueprintFunctionLibrary.WidgetCameraRecorder?.StopRecorder();for(var[,r]of RecorderBlueprintFunctionLibrary.CharacterRecorders)r.StopRecorder();RecorderBlueprintFunctionLibrary.CharacterRecorders.clear();for(var[,e]of RecorderBlueprintFunctionLibrary.SceneItemRecorders)e.StopRecorder();RecorderBlueprintFunctionLibrary.SceneItemRecorders.clear();for(var[,t]of RecorderBlueprintFunctionLibrary.EffectRecorders)t.StopRecorder();RecorderBlueprintFunctionLibrary.EffectRecorders.clear();for(var[,i]of RecorderBlueprintFunctionLibrary.BpFxEffectRecorders)i.StopRecorder(RecorderBlueprintFunctionLibrary.RecordingTimeInternal);RecorderBlueprintFunctionLibrary.BpFxEffectRecorders.clear();for(var[,n]of RecorderBlueprintFunctionLibrary.GameplayCueRecorders)n.StopRecorder(RecorderBlueprintFunctionLibrary.RecordingTimeInternal);RecorderBlueprintFunctionLibrary.GameplayCueRecorders.clear(),RecorderBlueprintFunctionLibrary.Recording=!1,RecorderBlueprintFunctionLibrary.RecordingTimeInternal=0,EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.CreateEntity,RecorderBlueprintFunctionLibrary.OnCreateEntity),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.PlayCameraLevelSequence,RecorderBlueprintFunctionLibrary.OnPlayCameraLevelSequence)}}static IsPlaying(){return RecorderBlueprintFunctionLibrary.Playing}static SetPlaying(r){RecorderBlueprintFunctionLibrary.Playing=r}static GetPlayingLevelSequence(r){if(!RecorderBlueprintFunctionLibrary.LevelSequencePlayer?.IsValid()){var e=(0,puerts_1.$ref)(void 0),t=(UE.GameplayStatics.GetAllActorsOfClass(r,UE.LevelSequenceActor.StaticClass(),e),(0,puerts_1.$unref)(e));for(let r=t.Num()-1;0<=r;--r){var i=t.Get(r);if(i.IsValid()){RecorderBlueprintFunctionLibrary.LevelSequencePlayer=i.SequencePlayer;break}}}return RecorderBlueprintFunctionLibrary.LevelSequencePlayer}static IsRecording(){return RecorderBlueprintFunctionLibrary.Recording}static RecordingTime(){return RecorderBlueprintFunctionLibrary.RecordingTimeInternal||0}static CreateNewDataAsset(r,e){var t=(0,puerts_1.$ref)(void 0);return UE.KuroAnimEdLibrary.CreateNewDataAsset(RecorderBlueprintFunctionLibrary.OutPath+r,e,t,void 0),(0,puerts_1.$unref)(t)}static SaveObject(r){UE.KuroDataHelperLibrary.SaveObject(r)}static RecordingTimeNoBlueprint(){return RecorderBlueprintFunctionLibrary.RecordingTimeInternal||0}static GetRecordingsText(){return RecorderBlueprintFunctionLibrary.RecordingsText}static StopRecordersWhenUpdate(){let r=!1;for(var[e,t]of RecorderBlueprintFunctionLibrary.CharacterRecorders)EntitySystem_1.EntitySystem.Get(e)||(t.StopRecorder(),RecorderBlueprintFunctionLibrary.CharacterRecorders.delete(e),r=!0);for(var[i,n]of RecorderBlueprintFunctionLibrary.SceneItemRecorders)EntitySystem_1.EntitySystem.Get(i)||(n.StopRecorder(),RecorderBlueprintFunctionLibrary.SceneItemRecorders.delete(i),r=!0);for(var[o,c]of RecorderBlueprintFunctionLibrary.EffectRecorders)EffectSystem_1.EffectSystem.IsValid(o)||(c.StopRecorder(),RecorderBlueprintFunctionLibrary.EffectRecorders.delete(o));return r}static StartRecordersWhenUpdate(){var r=this.FindCenterLocation();RecorderBlueprintFunctionLibrary.Stat1.Start();let e=RecorderBlueprintFunctionLibrary.StartEntityRecorders(r);RecorderBlueprintFunctionLibrary.Stat1.Stop(),RecorderBlueprintFunctionLibrary.Stat2.Start(),RecorderBlueprintFunctionLibrary.StartEffectRecorders(r)&&(e=!0),RecorderBlueprintFunctionLibrary.Stat2.Stop(),e}static StartEntityRecorders(r){let e=!1;var t,i,n,o;if(RecorderBlueprintFunctionLibrary.EnableCharacterRecord)for(const c of ModelManager_1.ModelManager.CreatureModel.GetAllEntities())c.Valid&&c.Entity&&(t=c.Entity).Active&&!RecorderBlueprintFunctionLibrary.CharacterRecorders.has(c.Entity.Id)&&(i=t.GetComponent(0))&&RecorderBlueprintFunctionLibrary.CharacterTypes.has(i.GetEntityType())&&(i=t.GetComponent(3))&&i.Actor&&(Vector_1.Vector.DistSquared(i.ActorLocationProxy,r)>RecorderBlueprintFunctionLibrary.RecordDistSquared||(i=new CharacterRecorderObject(i.Actor,RecorderBlueprintFunctionLibrary.OutputSequence,RecorderBlueprintFunctionLibrary.RecordingTimeInternal,RecorderBlueprintFunctionLibrary.OutPath),RecorderBlueprintFunctionLibrary.CharacterRecorders.set(t.Id,i),e=!0));if(RecorderBlueprintFunctionLibrary.EnableSceneItemRecord)for(const u of ModelManager_1.ModelManager.CreatureModel.GetAllEntities())u.Valid&&u.Entity&&(n=u.Entity).Active&&!RecorderBlueprintFunctionLibrary.SceneItemRecorders.has(u.Entity.Id)&&(o=n.GetComponent(0))&&RecorderBlueprintFunctionLibrary.SceneItemTypes.has(o.GetEntityType())&&(!(o=n.GetComponent(197)).GetIsSceneInteractionLoadCompleted()||Vector_1.Vector.DistSquared(o.ActorLocationProxy,r)>RecorderBlueprintFunctionLibrary.RecordDistSquared||(o=new SceneItemRecorderObject(o,RecorderBlueprintFunctionLibrary.OutputSequence,RecorderBlueprintFunctionLibrary.RecordingTimeInternal),RecorderBlueprintFunctionLibrary.SceneItemRecorders.set(n.Id,o),e=!0));return e}static StartEffectRecorders(r){if(RecorderBlueprintFunctionLibrary.EnableEffectRecord){var e,t=RecorderBlueprintFunctionLibrary.EffectLocation;for(const i of EffectSystem_1.EffectSystem.Effects)i&&i.IsRoot()&&i.IsDone()&&i.GetEffectData()?.IsValid()&&(i.GetNotRecord()||RecorderBlueprintFunctionLibrary.EffectRecorders.has(i.Id)||(e=i.GetSureEffectActor())&&(t.FromUeVector(e.D_K2_GetActorLocation()),Vector_1.Vector.DistSquared(t,r)>RecorderBlueprintFunctionLibrary.RecordDistSquared||(e=new EffectRecorderObject(e,i.Id,RecorderBlueprintFunctionLibrary.OutputSequence,RecorderBlueprintFunctionLibrary.RecordingTimeInternal),RecorderBlueprintFunctionLibrary.EffectRecorders.set(i.Id,e))))}return!1}static StartRecordTsBpFxEffect(r){var e,t,i;if(RecorderBlueprintFunctionLibrary.EnableEffectRecord)return(e=RecorderBlueprintFunctionLibrary.BpFxEffectRecorders.get(r))||(t=this.FindCenterLocation(),(i=RecorderBlueprintFunctionLibrary.EffectLocation).FromUeVector(r.D_K2_GetActorLocation()),Vector_1.Vector.DistSquared(t,i)>RecorderBlueprintFunctionLibrary.RecordDistSquared?void(Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Record TsBpFxEffect TooFar",["Name",r.GetName()],["effectLocation",i],["centerLocation",t])):(e=new BpFxEffectRecorderObject(r,RecorderBlueprintFunctionLibrary.OutputSequence,RecorderBlueprintFunctionLibrary.RecordingTimeInternal),RecorderBlueprintFunctionLibrary.BpFxEffectRecorders.set(r,e),e))}static StopRecordTsBpFxEffect(r){var e=RecorderBlueprintFunctionLibrary.BpFxEffectRecorders.get(r);e&&(e.StopRecorder(RecorderBlueprintFunctionLibrary.RecordingTimeInternal),RecorderBlueprintFunctionLibrary.BpFxEffectRecorders.delete(r))}static StartRecordGameplayCueHook(r,e){var t,i,n;if(RecorderBlueprintFunctionLibrary.EnableEffectRecord)return(t=RecorderBlueprintFunctionLibrary.GameplayCueRecorders.get(e))||(i=this.FindCenterLocation(),(n=RecorderBlueprintFunctionLibrary.EffectLocation).FromUeVector(r.D_K2_GetActorLocation()),Vector_1.Vector.DistSquared(i,n)>RecorderBlueprintFunctionLibrary.RecordDistSquared?void(Log_1.Log.CheckInfo()&&Log_1.Log.Info("Test",6,"Record GameplayCue TooFar",["Name",r.GetName()],["actorLocation",n],["centerLocation",i])):((t=new GameplayCueRecorder_1.GameplayCueRecorderHook(r,e,RecorderBlueprintFunctionLibrary.OutputSequence,RecorderBlueprintFunctionLibrary.RecordingTimeInternal)).Start(),RecorderBlueprintFunctionLibrary.GameplayCueRecorders.set(e,t),t))}static StopRecordGameplayCueHook(r){var e=RecorderBlueprintFunctionLibrary.GameplayCueRecorders.get(r);e&&(e.StopRecorder(RecorderBlueprintFunctionLibrary.RecordingTimeInternal),RecorderBlueprintFunctionLibrary.GameplayCueRecorders.delete(r))}static RecorderPlayerInitialize(){RecorderBlueprintFunctionLibrary.RecorderPlayerInitializeTs()}static RecorderPlayerInitializeTs(){RecorderBlueprintFunctionLibrary.RecorderPlayerInitialized||(RecorderBlueprintFunctionLibrary.RecorderPlayerInitialized=!0,EffectSystem_1.EffectSystem.Initialize())}static FindCharacterRecorder(r){if(r)return RecorderBlueprintFunctionLibrary.CharacterRecorders.get(r.GetEntityIdNoBlueprint())?.Recorder}}RecorderBlueprintFunctionLibrary.CharacterTypesInternal=void 0,RecorderBlueprintFunctionLibrary.SceneItemTypesInternal=void 0,RecorderBlueprintFunctionLibrary.Playing=!1,RecorderBlueprintFunctionLibrary.LevelSequencePlayer=void 0,RecorderBlueprintFunctionLibrary.Recording=!1,RecorderBlueprintFunctionLibrary.RecordingTimeInternal=0,RecorderBlueprintFunctionLibrary.OutPath="",RecorderBlueprintFunctionLibrary.OutputSequence=void 0,RecorderBlueprintFunctionLibrary.CenterActor=void 0,RecorderBlueprintFunctionLibrary.RecordDist=0,RecorderBlueprintFunctionLibrary.RecordDistSquared=0,RecorderBlueprintFunctionLibrary.FightCameraRecorder=void 0,RecorderBlueprintFunctionLibrary.SequenceCameraRecorder=void 0,RecorderBlueprintFunctionLibrary.WidgetCameraRecorder=void 0,RecorderBlueprintFunctionLibrary.CharacterRecorders=new Map,RecorderBlueprintFunctionLibrary.SceneItemRecorders=new Map,RecorderBlueprintFunctionLibrary.EffectRecorders=new Map,RecorderBlueprintFunctionLibrary.BpFxEffectRecorders=new Map,RecorderBlueprintFunctionLibrary.GameplayCueRecorders=new Map,RecorderBlueprintFunctionLibrary.RecordingsText="",RecorderBlueprintFunctionLibrary.RecordNotifies=UE.NewArray(UE.Class),RecorderBlueprintFunctionLibrary.ReplaceNotifies=UE.NewArray(UE.Class),RecorderBlueprintFunctionLibrary.EnableCharacterRecord=!1,RecorderBlueprintFunctionLibrary.EnableSceneItemRecord=!1,RecorderBlueprintFunctionLibrary.EnableEffectRecord=!1,RecorderBlueprintFunctionLibrary.CenterLocation=Vector_1.Vector.Create(),RecorderBlueprintFunctionLibrary.OverrideAttached=UE.NewMap(UE.BuiltinName,UE.Guid),RecorderBlueprintFunctionLibrary.IgnoreClasses=UE.NewSet(UE.Class),RecorderBlueprintFunctionLibrary.EffectLocation=void 0,RecorderBlueprintFunctionLibrary.Stat1=void 0,RecorderBlueprintFunctionLibrary.Stat2=void 0,RecorderBlueprintFunctionLibrary.Stat3=void 0,RecorderBlueprintFunctionLibrary.RecorderPlayerInitialized=!1,RecorderBlueprintFunctionLibrary.OnCreateEntity=(r,e)=>{var t,i;RecorderBlueprintFunctionLibrary.CharacterRecorders.has(e.Id)||(i=e.Entity.GetComponent(3))?.Valid&&(t=RecorderBlueprintFunctionLibrary.FindCenterLocation(),Vector_1.Vector.DistSquared(i.ActorLocationProxyNoUpdate,t)>RecorderBlueprintFunctionLibrary.RecordDistSquared||(i=new CharacterRecorderObject(e.Entity.GetComponent(3).Actor,RecorderBlueprintFunctionLibrary.OutputSequence,RecorderBlueprintFunctionLibrary.RecordingTimeInternal,RecorderBlueprintFunctionLibrary.OutPath),RecorderBlueprintFunctionLibrary.CharacterRecorders.set(e.Id,i)))},RecorderBlueprintFunctionLibrary.OnPlayCameraLevelSequence=(r,e,t,i)=>{e=RecorderBlueprintFunctionLibrary.FindCharacterRecorder(e),e&&RecorderBlueprintFunctionLibrary.OverrideAttached.Set(new UE.FName("Role"),e.GetMainGuid()),e=UE.KismetMathLibrary.Conv_TransformDoubleToTransform(i);UE.KuroRecorderLibrary.CopyLevelSequence(r,RecorderBlueprintFunctionLibrary.OutputSequence,RecorderBlueprintFunctionLibrary.RecordingTimeInternal,RecorderBlueprintFunctionLibrary.OverrideAttached,RecorderBlueprintFunctionLibrary.IgnoreClasses,e)},exports.default=RecorderBlueprintFunctionLibrary;
//# sourceMappingURL=RecorderBlueprintFunctionLibrary.js.map