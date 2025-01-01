
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LevelAiTaskTurnAndPlayMontage=void 0;const Log_1=require("../../../../Core/Common/Log"),Vector_1=require("../../../../Core/Utils/Math/Vector"),AiContollerLibrary_1=require("../../../AI/Controller/AiContollerLibrary"),ModelManager_1=require("../../../Manager/ModelManager"),BasePerformComponent_1=require("../../../NewWorld/Character/Common/Component/BasePerformComponent"),GravityUtils_1=require("../../../Utils/GravityUtils"),LevelAiTask_1=require("../LevelAiTask"),TURN_SPEED=200,TOLERANCE=10;class LevelAiTaskTurnAndPlayMontage extends LevelAiTask_1.LevelAiTask{constructor(){super(...arguments),this.Tae=void 0,this.WTe=0,this.bTe=0,this.qTe=!1,this.GTe=!1,this.NTe=0,this.OTe=0,this.kTe=!1,this.KTe=0}ExecuteTask(){return this.KTe=1,this.NotifyTick=!0,3}TickTask(t){switch(this.KTe){case 1:this.QTe(),this.KTe=2;break;case 2:GravityUtils_1.GravityUtils.GetAngleOffsetFromCurrentToInputAbs(this.Tae)<TOLERANCE&&(this.Tae.Entity.GetComponent(39).CharacterMovement.MovementMode=this.WTe,this.KTe=3);break;case 3:this.XTe(),this.KTe=4;break;case 4:break;default:Log_1.Log.CheckError()&&Log_1.Log.Error("LevelAi",50,"[TurnToAndPlayMontage] 阶段切换出错",["CurPhase",this.KTe])}}AbortTask(){return this.KTe<3?this.Tae?.ClearInput():(this.kTe=!0,this.CreatureDataComponent.Entity.GetComponent(40).ClearAndStopMontage(this.bTe)),2}OnTaskFinished(t){this.Tae=void 0,this.WTe=0}QTe(){var t,i=this.Params;i?(t=ModelManager_1.ModelManager.CreatureModel.GetEntityByPbDataId(i.EntityId))?(this.Tae=t.Entity.GetComponent(3),(t=t.Entity.GetComponent(39)?.CharacterMovement)?.IsValid()?(this.WTe=t.MovementMode,t.MovementMode=1,t=Vector_1.Vector.Create(i.Pos.X??0,i.Pos.Y??0,i.Pos.Z??0),AiContollerLibrary_1.AiControllerLibrary.TurnToTarget(this.Tae,t,TURN_SPEED)):this.FinishLatentTask(1)):(Log_1.Log.CheckError()&&Log_1.Log.Error("LevelAi",29,"执行转向动作时实体不存在:",["PbDataId",i.EntityId]),this.FinishLatentTask(1)):this.FinishLatentTask(1)}XTe(){var t,i,e=this.Params;e?(this.NTe=e.LoopDuration??0,this.OTe=e.RepeatTimes??0,this.qTe=void 0!==this.NTe&&0!==this.NTe,this.GTe=-1===this.NTe||-1===this.OTe,t=this.CreatureDataComponent.Entity.GetComponent(40),i=new BasePerformComponent_1.PlayMontageConfig(this.OTe,this.NTe,this.qTe,this.GTe),e={IsAbp:e.IsAbpMontage,MontageId:e.MontageId},this.kTe=!1,this.bTe=t.LoadAndPlayMontageById(e,i,void 0,()=>{this.kTe||this.FinishLatentTask(0)},()=>!this.kTe),this.bTe<0&&this.FinishLatentTask(0)):this.FinishLatentTask(1)}}exports.LevelAiTaskTurnAndPlayMontage=LevelAiTaskTurnAndPlayMontage;
//# sourceMappingURL=LevelAiTaskTurnAndPlayMontage.js.map