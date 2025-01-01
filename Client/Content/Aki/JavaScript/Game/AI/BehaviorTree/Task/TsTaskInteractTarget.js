
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const Log_1=require("../../../../Core/Common/Log"),Time_1=require("../../../../Core/Common/Time"),GlobalData_1=require("../../../GlobalData"),CharacterController_1=require("../../../NewWorld/Character/CharacterController"),ActorUtils_1=require("../../../Utils/ActorUtils"),WorldFunctionLibrary_1=require("../../../World/Bridge/WorldFunctionLibrary"),BlackboardController_1=require("../../../World/Controller/BlackboardController"),TsTaskAbortImmediatelyBase_1=require("./TsTaskAbortImmediatelyBase");class TsTaskInteractTarget extends TsTaskAbortImmediatelyBase_1.default{constructor(){super(...arguments),this.BlackboardKey="",this.IsInitTsVariables=!1,this.TsBlackboardKey="",this.EndTime=-0,this.AnimComp=void 0,this.OnMontageEnded=void 0}Constructor(){super.Constructor(),this.IsInitTsVariables=!1,this.TsBlackboardKey="",this.EndTime=-0,this.AnimComp=void 0,this.OnMontageEnded=void 0}InitTsVariables(){this.IsInitTsVariables&&!GlobalData_1.GlobalData.IsPlayInEditor||(this.IsInitTsVariables=!0,this.TsBlackboardKey=this.BlackboardKey)}ReceiveExecuteAI(t,r){this.InitTsVariables();var e,i=t.AiController;i?this.TsBlackboardKey&&(this.OnMontageEnded||(this.OnMontageEnded=(t,r)=>{this.EndTime=Time_1.Time.WorldTime}),this.EndTime=Time_1.Time.WorldTime,e=i.CharActorComp.Entity.Id,e=BlackboardController_1.BlackboardController.GetEntityIdByEntity(e,this.TsBlackboardKey))&&(e=WorldFunctionLibrary_1.default.GetDynamicEntity(e))?(this.AnimComp=i.CharActorComp.Entity.GetComponent(166),this.ExecuteInteractTarget(e,i.CharActorComp)):this.FinishExecute(!1):(Log_1.Log.CheckError()&&Log_1.Log.Error("BehaviorTree",6,"错误的Controller类型",["Type",t.GetClass().GetName()]),this.FinishExecute(!1))}ExecuteInteractTarget(t,r){var t=ActorUtils_1.ActorUtils.GetEntityByActor(t),e=CharacterController_1.CharacterController.GetActorComponent(t);let i=e.ActorLocation,s=e.ActorRotation;e=t.Entity.GetComponent(95);e?.IsInit&&((t=e.GetInteractPosition())&&(i=t),(t=e.GetInteractRotator())&&(s=t),r.SetInputRotator(s),r.SetActorLocationAndRotation(i,s,"行为树节点.目标交互.强制切换目前",!1))}ReceiveTickAI(t,r,e){this.EndTime<Time_1.Time.WorldTime&&this.Finish(!0)}OnClear(){this.EndTime=0,this.AnimComp&&(this.AnimComp.MainAnimInstance.OnMontageEnded.Remove(this.OnMontageEnded),this.AnimComp=void 0)}}exports.default=TsTaskInteractTarget;
//# sourceMappingURL=TsTaskInteractTarget.js.map