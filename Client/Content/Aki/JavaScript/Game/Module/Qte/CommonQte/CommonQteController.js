
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CommonQteController=void 0;const Log_1=require("../../../../Core/Common/Log"),ControllerBase_1=require("../../../../Core/Framework/ControllerBase"),TimerSystem_1=require("../../../../Core/Timer/TimerSystem"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),ModelManager_1=require("../../../Manager/ModelManager"),UiManager_1=require("../../../Ui/UiManager"),GameModeController_1=require("../../../World/Controller/GameModeController"),EXTRA_EXPIRED_TIME=5e3,MAX_EXPIRED_TIME=6e4;class CommonQteController extends ControllerBase_1.ControllerBase{static OnInit(){return!0}static OnLeaveLevel(){return this.IsInQte()&&this.SetQteTimeDilation(1),this.ClearQte(),!0}static StartQte(o,e=void 0,t=void 0,i=0){if(this.IsInQte())Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"当前存在执行中的Qte, 无法开始新的Qte",["HandleId",this.nx?.HandleId],["Id",o]);else{const r=ModelManager_1.ModelManager.CommonQteModel?.StartQte(o,e,t,i);if(r){this.zEl=!0,this.nx=r,Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"通用Qte开始",["HandleId",this.nx.HandleId],["Id",o]);const n=r.GetViewName();if(n)return UiManager_1.UiManager.IsViewOpen(n)?UiManager_1.UiManager.CloseView(n,e=>{e?UiManager_1.UiManager.OpenView(n,r.HandleId):(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"重新打开Qte界面失败, 停止当前Qte",["HandleId",r.HandleId],["Id",o],["ViewName",n]),this.JEl())}):UiManager_1.UiManager.OpenView(n,r.HandleId,(e,t)=>{e?(this.wXl(),e=r.IsPermanent?MAX_EXPIRED_TIME:r.Duration+EXTRA_EXPIRED_TIME,this.UXl=TimerSystem_1.TimerSystem.Delay(()=>{Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"通用Qte超时, 触发保底",["HandleId",r.HandleId],["Id",o]),this.JEl()},e)):(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"打开Qte界面失败, 停止当前Qte",["HandleId",r.HandleId],["Id",o],["ViewName",n]),this.JEl())}),this.AddExtraEffect(r.Config.ExtraConfig),this.SetQteTimeDilation(r.Config.BaseConfig.TimeDilation),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.CommonQteStart,this.nx.HandleId),r;Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"通用Qte开始失败, 无对应的Qte界面",["HandleId",this.nx.HandleId],["Id",o],["ViewName",n]),this.ClearQte()}else Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"通用Qte开始失败, 获取context为空",["Id",o])}}static StopQte(e){e===this.nx?.HandleId&&(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"停止QTE",["HandleId",this.nx?.HandleId],["Id",this.nx?.QteId]),this.JEl())}static StopCurrentQte(){Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"停止当前QTE",["HandleId",this.nx?.HandleId],["Id",this.nx?.QteId]),this.JEl()}static JEl(){Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"通用Qte结束",["HandleId",this.nx?.HandleId],["Id",this.nx?.QteId],["State",this.nx?.State]),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.CommonQteEnd,this.nx?.HandleId),ModelManager_1.ModelManager.CommonQteModel?.ClearQteHandle(),this.ClearQte(),this.SetQteTimeDilation(1)}static IsInQte(){return this.zEl}static ClearQte(){this.RemoveExtraEffect(),this.wXl(),this.zEl=!1,this.nx?.Clear(),this.nx=void 0}static wXl(){this.UXl&&TimerSystem_1.TimerSystem.Remove(this.UXl),this.UXl=void 0}static SetQteTimeDilation(e){ModelManager_1.ModelManager.GameModeModel?.IsMulti||GameModeController_1.GameModeController.SetTimeDilation(e)}static AddExtraEffect(t){if(t.HideAllBattleUi)this.SIl=!0,ModelManager_1.ModelManager.BattleUiModel.ChildViewData.HideBattleView(6,[20]);else{this.SIl=!1;var o=t.HideUIElement.Num();if(0<o){var i=[];for(let e=0;e<o;e++)i.push(t.HideUIElement.Get(e));ModelManager_1.ModelManager.BattleUiModel.ChildViewData.SetChildrenVisible(6,i,!1),this.yIl=i}else this.yIl=void 0}}static RemoveExtraEffect(){var e;this.SIl?(ModelManager_1.ModelManager.BattleUiModel.ChildViewData.ShowBattleView(6),this.SIl=!1):(e=this.yIl)&&(ModelManager_1.ModelManager.BattleUiModel.ChildViewData.SetChildrenVisible(6,e,!0),this.yIl=void 0)}}(exports.CommonQteController=CommonQteController).nx=void 0,CommonQteController.zEl=!1,CommonQteController.SIl=!1,CommonQteController.yIl=void 0,CommonQteController.UXl=void 0;
//# sourceMappingURL=CommonQteController.js.map