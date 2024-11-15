
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DeadReviveController=void 0;const UE=require("ue"),Log_1=require("../../../Core/Common/Log"),Protocol_1=require("../../../Core/Define/Net/Protocol"),Net_1=require("../../../Core/Net/Net"),TimerSystem_1=require("../../../Core/Timer/TimerSystem"),MathUtils_1=require("../../../Core/Utils/MathUtils"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),ControllerHolder_1=require("../../Manager/ControllerHolder"),ModelManager_1=require("../../Manager/ModelManager"),UiControllerBase_1=require("../../Ui/Base/UiControllerBase"),InputDistributeController_1=require("../../Ui/InputDistribute/InputDistributeController"),UiManager_1=require("../../Ui/UiManager"),SceneTeamController_1=require("../SceneTeam/SceneTeamController"),TeleportController_1=require("../Teleport/TeleportController"),TeleportDefine_1=require("../Teleport/TeleportDefine"),TowerDefenceController_1=require("../TowerDefence/TowerDefenceController"),TIME_TO_REVIVE=3e3,LOGIN_REVIVE=1e3,OPEN_FADE_DURATION=.1,CLOSE_FADE_DURATION=.5;class DeadReviveController extends UiControllerBase_1.UiControllerBase{static OnChangeMode(){return DeadReviveController.i0a(),!0}static OnAddEvents(){Net_1.Net.Register(27422,e=>{DeadReviveController.r0a(e)}),Net_1.Net.Register(16317,e=>{DeadReviveController.o0a(e)}),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.PlotNetworkEnd,DeadReviveController.hWe)}static OnRemoveEvents(){Net_1.Net.UnRegister(27422),Net_1.Net.UnRegister(16317),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.PlotNetworkEnd,DeadReviveController.hWe)}static ReviveRequest(e,r){var o;DeadReviveController.n0a||((o=new Protocol_1.Aki.Protocol.z1s).bVn=e,DeadReviveController.n0a=!0,Net_1.Net.Call(28494,o,e=>{DeadReviveController.n0a=!1,e?e.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs?(ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.Q4n,29591),r?.(!1)):r?.(!0):r?.(!1)}))}static r0a(e){var r=ModelManager_1.ModelManager.DeadReviveModel;e.W5n===ModelManager_1.ModelManager.PlayerInfoModel.GetId()&&(r.InitReviveConfig(e.I2s),r.ReviveLimitTime=e.E2s,r.IsShowRevive=e.T2s,r.IsAutoRevive=e.y2s,!e.y2s&&e.T2s&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.ResetToBattleView),e.wVn?EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.WorldDone,DeadReviveController.s0a):r.SkipDeathAnim?DeadReviveController.a0a():r.DeadDelayTimer=TimerSystem_1.TimerSystem.Delay(DeadReviveController.a0a,TIME_TO_REVIVE))}static o0a(e){var r=new UE.Vector(e.P5n?.X??0,e.P5n?.Y??0,e.P5n?.Z??0),o=new UE.Rotator(e.D2s?.Pitch??0,e.D2s?.Yaw??0,e.D2s?.Roll??0);Log_1.Log.CheckInfo()&&Log_1.Log.Info("World",48,"执行复活流程",["PlayerId",e.W5n],["Location",r],["Rotator",o],["ReviveType",e.R2s]),e.W5n===ModelManager_1.ModelManager.PlayerInfoModel.GetId()?DeadReviveController.h0a(e,r,o):DeadReviveController.i$s(e,r,o)}static async h0a(e,r,o){e.P2s&&ControllerHolder_1.ControllerHolder.CreatureController.LoadOrUnloadSubLevel(e.U2s);for(const i of ModelManager_1.ModelManager.SceneTeamModel.GetTeamEntities(!0)){var l=i.Entity?.GetComponent(3);l?.SetInputRotator(o),l?.SetActorLocationAndRotation(r,o,"复活流程",!1)}if(DeadReviveController.i0a(),ModelManager_1.ModelManager.DeadReviveModel.ClearReviveData(),e.R2s<=0)TimerSystem_1.TimerSystem.Delay(DeadReviveController.PlayerReviveEnded,LOGIN_REVIVE);else{var t,n,a;if(DeadReviveController.xFt(r))return Log_1.Log.CheckInfo()&&Log_1.Log.Info("World",48,"播放剧情并进行无加载传送"),(t=ModelManager_1.ModelManager.DeadReviveModel.ReviveConfig?.ReviveSequencePath)&&""!==t?(n=(t=t.split(","))[0],a=Number(t[1]),t=Number(t[2]),ControllerHolder_1.ControllerHolder.LevelLoadingController.OpenLoading(0,3,void 0,OPEN_FADE_DURATION),n=ControllerHolder_1.ControllerHolder.FlowController.StartFlow(n,a,t),ModelManager_1.ModelManager.DeadReviveModel.ReviveFlowIncId=n,ModelManager_1.ModelManager.DeadReviveModel.RevivePosition=r,void(ModelManager_1.ModelManager.DeadReviveModel.ReviveRotator=o)):void DeadReviveController.fFn(r,o,"RevivePerform");e.ZCa?(a=new TeleportDefine_1.TeleportContext(void 0,e.w2s,1),await TeleportController_1.TeleportController.TeleportToPosition(r,o,"SelfRevive",a)||(Log_1.Log.CheckInfo()&&Log_1.Log.Info("World",48,"复活传送失败，复活结束"),DeadReviveController.PlayerReviveEnded())):(Log_1.Log.CheckInfo()&&Log_1.Log.Info("World",48,"复活执行无加载传送"),DeadReviveController.fFn(r,o,"NoLoadingRevive"))}}static xFt(e){if(!ControllerHolder_1.ControllerHolder.GameModeController.IsInInstance())return Log_1.Log.CheckDebug()&&Log_1.Log.Debug("World",48,"非副本中不允许复活表演"),!1;let r=!1;for(const o of ModelManager_1.ModelManager.SceneTeamModel.GetTeamEntities(!0))if((o.Entity?.GetComponent(191))?.HasTag(-58810558)){r=!0;break}return!(!r||!ControllerHolder_1.ControllerHolder.TeleportController.QueryCanTeleportNoLoading(e)&&(Log_1.Log.CheckInfo()&&Log_1.Log.Info("World",48,"复活位置不可无加载传送，不允许复活表演"),1))}static i$s(e,r,o){for(const n of e.A2s){var l=MathUtils_1.MathUtils.LongToNumber(n.F4n),l=ModelManager_1.ModelManager.CreatureModel.GetEntity(l);if(l?.Valid)if(l.IsInit){var t=l.Entity.GetComponent(3);t.SetInputRotator(o),t.SetActorLocationAndRotation(r,o,"复活流程.复活其他角色",!1),l.Entity.GetComponent(60)?.ClearReplaySamples()}else{t=l.Entity.GetComponent(0);t?.SetLivingStatus(Protocol_1.Aki.Protocol.JEs.Proto_Alive);const r=e.P5n;r&&t?.SetInitLocation(r)}}SceneTeamController_1.SceneTeamController.ShowControlledRole(e.W5n)}static l0a(){let e=void 0;if(ModelManager_1.ModelManager.GameModeModel.IsMulti)if(TowerDefenceController_1.TowerDefenseController.CheckInInstanceDungeon()){var r=TowerDefenceController_1.TowerDefenseController.TryGetReviveViewName();if(void 0===r)return;e=r}else e="MultiReviveView";else ModelManager_1.ModelManager.DeadReviveModel.IsShowRevive&&(e="ReviveView");e&&(ModelManager_1.ModelManager.DeadReviveModel.BlockAllInput=!0,InputDistributeController_1.InputDistributeController.RefreshInputTag(),ModelManager_1.ModelManager.DeadReviveModel.OpenedViewName=e,EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.ResetToBattleView),UiManager_1.UiManager.OpenView(e,void 0,()=>{ModelManager_1.ModelManager.DeadReviveModel.BlockAllInput=!1,InputDistributeController_1.InputDistributeController.RefreshInputTag()}))}static i0a(){var e=ModelManager_1.ModelManager.DeadReviveModel.OpenedViewName;e&&UiManager_1.UiManager.IsViewOpen(e)&&UiManager_1.UiManager.CloseView(e),ModelManager_1.ModelManager.DeadReviveModel.OpenedViewName=void 0}static fFn(e,r,o){TeleportController_1.TeleportController.TeleportToPositionNoLoading(e,r,o).finally(()=>{SceneTeamController_1.SceneTeamController.ShowControlledRole(ModelManager_1.ModelManager.PlayerInfoModel.GetId());var e=new Protocol_1.Aki.Protocol.pCs;Net_1.Net.Call(16447,e,()=>{})})}}(exports.DeadReviveController=DeadReviveController).n0a=!1,DeadReviveController.s0a=()=>{EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.WorldDone,DeadReviveController.s0a),ModelManager_1.ModelManager.DeadReviveModel.DeadDelayTimer=TimerSystem_1.TimerSystem.Delay(DeadReviveController.a0a,LOGIN_REVIVE)},DeadReviveController.a0a=()=>{ModelManager_1.ModelManager.DeadReviveModel.DeadDelayTimer=void 0,ModelManager_1.ModelManager.DeadReviveModel.IsAutoRevive?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("World",48,"自动复活"),DeadReviveController.ReviveRequest(!1)):DeadReviveController.l0a()},DeadReviveController.hWe=e=>{var r=ModelManager_1.ModelManager.DeadReviveModel.ReviveFlowIncId;r&&e.FlowIncId===r&&(DeadReviveController.fFn(ModelManager_1.ModelManager.DeadReviveModel.RevivePosition,ModelManager_1.ModelManager.DeadReviveModel.ReviveRotator,"RevivePerform"),ControllerHolder_1.ControllerHolder.LevelLoadingController.CloseLoading(0,void 0,CLOSE_FADE_DURATION),ModelManager_1.ModelManager.DeadReviveModel.ReviveFlowIncId=0)},DeadReviveController.PlayerReviveEnded=()=>{SceneTeamController_1.SceneTeamController.ShowControlledRole(ModelManager_1.ModelManager.PlayerInfoModel.GetId());var e=ModelManager_1.ModelManager.SceneTeamModel.GetTeamItems(!0)[0],r=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentTeamItem;!ModelManager_1.ModelManager.GameModeModel.IsMulti&&e&&e.GetCreatureDataId()!==r?.GetCreatureDataId()&&SceneTeamController_1.SceneTeamController.RequestChangeRole(e.GetCreatureDataId(),{FilterSameRole:!1})};
//# sourceMappingURL=DeadReviveController.js.map