
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LevelPlayController=void 0;const Log_1=require("../../../Core/Common/Log"),CommonParamById_1=require("../../../Core/Define/ConfigCommon/CommonParamById"),MultiTextLang_1=require("../../../Core/Define/ConfigQuery/MultiTextLang"),Protocol_1=require("../../../Core/Define/Net/Protocol"),Net_1=require("../../../Core/Net/Net"),MathUtils_1=require("../../../Core/Utils/MathUtils"),StringUtils_1=require("../../../Core/Utils/StringUtils"),TimeUtil_1=require("../../Common/TimeUtil"),LevelGeneralContextDefine_1=require("../../LevelGamePlay/LevelGeneralContextDefine"),ConfigManager_1=require("../../Manager/ConfigManager"),ControllerHolder_1=require("../../Manager/ControllerHolder"),ModelManager_1=require("../../Manager/ModelManager"),UiManager_1=require("../../Ui/UiManager"),ActivityDoubleRewardController_1=require("../Activity/ActivityContent/DoubleReward/ActivityDoubleRewardController"),ConfirmBoxDefine_1=require("../ConfirmBox/ConfirmBoxDefine"),ControllerWithAssistantBase_1=require("../GeneralLogicTree/ControllerAssistant/ControllerWithAssistantBase"),GeneralLogicTreeUtil_1=require("../GeneralLogicTree/GeneralLogicTreeUtil"),MapController_1=require("../Map/Controller/MapController"),PowerController_1=require("../Power/PowerController"),GuideLineAssistant_1=require("../QuestNew/Controller/GuideLineAssistant"),ScrollingTipsController_1=require("../ScrollingTips/ScrollingTipsController"),LevelPlayDefine_1=require("./LevelPlayDefine"),assistantMap={[0]:void 0};class LevelPlayController extends ControllerWithAssistantBase_1.ControllerWithAssistantBase{static OnRegisterNetEvent(){super.OnRegisterNetEvent(),Net_1.Net.Register(23988,LevelPlayController.Opi),Net_1.Net.Register(24367,LevelPlayController.kpi),Net_1.Net.Register(27874,LevelPlayController.Fpi),Net_1.Net.Register(19778,LevelPlayController.Vpi),Net_1.Net.Register(28327,LevelPlayController.Hpi),Net_1.Net.Register(18892,LevelPlayController.jpi),Net_1.Net.Register(22106,LevelPlayController.oja)}static OnUnRegisterNetEvent(){super.OnRegisterNetEvent(),Net_1.Net.UnRegister(23988),Net_1.Net.UnRegister(24367),Net_1.Net.UnRegister(27874),Net_1.Net.UnRegister(19778),Net_1.Net.UnRegister(28327),Net_1.Net.UnRegister(18892),Net_1.Net.UnRegister(22106)}static RegisterAssistant(){this.AddAssistant(0,new GuideLineAssistant_1.GuideLineAssistant(Protocol_1.Aki.Protocol.hps.Proto_BtTypeLevelPlay))}static cYt(e){if(this.Assistants)return this.Assistants.get(e)}static OnInit(){return this.InitTickOptimize(60,120),super.OnInit()}static Wpi(){const o=GeneralLogicTreeUtil_1.GeneralLogicTreeUtil.GetPlayerLocation();if(o){var e=ModelManager_1.ModelManager.LevelPlayModel,r=e.GetProcessingLevelPlayInfos();if(0===r.size)e.SetTrackLevelPlayId(LevelPlayDefine_1.INVALID_LEVELPLAYID);else{let l=e.GetTrackLevelPlayInfo();!l||l.CanTrack&&(l.UpdateDistanceSquared(o),l.IsInTrackRange())||(l=void 0);const a=e.GetTrackLevelPlayId();r.forEach((e,r)=>{r!==a&&e.CanTrack&&(l?e.TrackPriority<l.TrackPriority||(e.TrackPriority>l.TrackPriority?(e.UpdateDistanceSquared(o),e.IsInTrackRange()&&(l=e)):(e.UpdateDistanceSquared(o),e.IsInTrackRange()&&e.CacheDistanceSquared<l.CacheDistanceSquared&&(l=e))):(e.UpdateDistanceSquared(o),e.IsInTrackRange()&&(l=e)))});r=l?.Id??LevelPlayDefine_1.INVALID_LEVELPLAYID;e.SetTrackLevelPlayId(r)}}}static Kpi(e){ModelManager_1.ModelManager.TrackModel.IsTracking(4,e)&&MapController_1.MapController.RequestTrackMapMark({MarkType:10,MarkId:e,Track:!1})}static ReceiveReward(l,o){if(!ModelManager_1.ModelManager.LevelPlayModel.IsInReceiveReward){var a=ModelManager_1.ModelManager.CreatureModel.GetEntity(l);if(a){a=a.Entity.GetComponent(0).GetPbDataId();const n=ModelManager_1.ModelManager.LevelPlayModel.GetLevelPlayInfoByRewardEntityId(a);if(n){a=ConfigManager_1.ConfigManager.LevelPlayConfig.GetExchangeRewardInfo(n.RewardId);if(a&&a.Cost){const i=a.Cost.get(5);let e=!(ModelManager_1.ModelManager.LevelPlayModel.IsInReceiveReward=!0),r=void 0;if(0<o){const n=ModelManager_1.ModelManager.LevelPlayModel.GetLevelPlayInfo(o);n&&"SilentArea"===n.LevelPlayType&&(r=ActivityDoubleRewardController_1.ActivityDoubleRewardController.GetDungeonUpActivity([3],!1))&&0<r.LeftUpCount&&(e=!0)}o=0<a.SharedId;if(a.SharedId===LevelPlayDefine_1.WEEK_SHARE_ID){var t=ModelManager_1.ModelManager.ExchangeRewardModel.GetExchangeRewardShareCount(a.SharedId);if(ConfigManager_1.ConfigManager.ExchangeRewardConfig.GetShareMaxCount(a.SharedId)<=t)return ScrollingTipsController_1.ScrollingTipsController.ShowTipsById("Week_InstanceDungeonRewardTimeNotEnough_Text"),void(ModelManager_1.ModelManager.LevelPlayModel.IsInReceiveReward=!1)}!e&&!o&&ModelManager_1.ModelManager.FunctionModel.IsOpen(10071)&&CommonParamById_1.configCommonParamById.GetIntArrayConfig("MultiExchangeLevelPlayType")?.includes(n.LevelPlayTypeNumber)?(a={SinglePowerCost:i,RewardCallBack:e=>{LevelPlayController.RequestReceiveReward(l,e,n)},NeedResetLevelPlayModelRewardFlag:!0},UiManager_1.UiManager.OpenView("PowerMagnificationRewardPopView",a)):((t=new ConfirmBoxDefine_1.ConfirmBoxDataNew(64)).ShowPowerItem=!0,t.CanExecuteCloseFunc=e=>2!==e||ModelManager_1.ModelManager.PowerModel.IsPowerEnough(i),t.SetTextArgs(i.toString()),t.FunctionMap.set(2,()=>{LevelPlayController.Qpi(i)&&LevelPlayController.RequestReceiveReward(l,1,n)}),t.DestroyFunction=()=>{ModelManager_1.ModelManager.LevelPlayModel.IsInReceiveReward=!1},e&&r&&(t.Tip=r.GetFullTip()),ControllerHolder_1.ControllerHolder.ConfirmBoxController.ShowConfirmBoxNew(t))}}}}}static RequestReceiveReward(e,r,l){e=Protocol_1.Aki.Protocol.Jns.create({F4n:MathUtils_1.MathUtils.NumberToLong(e),Cal:r});Net_1.Net.Call(15609,e,e=>{e.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs?(e=ConfigManager_1.ConfigManager.ErrorCodeConfig.GetTextByErrorId(e.Q4n),ScrollingTipsController_1.ScrollingTipsController.ShowTipsByText(e)):l.UpdateCanGetReward(!1)})}static Qpi(e){var r;return!!ModelManager_1.ModelManager.PowerModel.IsPowerEnough(e)||(r=ConfigManager_1.ConfigManager.TextConfig.GetTextById("ReceiveLevelPlayPowerNotEnough"),ScrollingTipsController_1.ScrollingTipsController.ShowTipsByText(r),PowerController_1.PowerController.OpenPowerView(2,ModelManager_1.ModelManager.PowerModel.GetCurrentNeedPower(e)),!1)}}(exports.LevelPlayController=LevelPlayController).OnTick=e=>{ModelManager_1.ModelManager.GeneralLogicTreeModel.IsWakeUp&&(LevelPlayController.Wpi(),LevelPlayController.cYt(0)?.Tick(e))},LevelPlayController.Opi=e=>{for(const l of e.Dxs){var r=ModelManager_1.ModelManager.LevelPlayModel.SafeCreateLevelPlayInfo(l.s5n);r.UpdateState(l.Y4n),r.UpdateFirstPass(l.vDs),r.UpdateRefreshTime(l.Lxs),r.IsClose&&void 0!==r.MarkConfig&&0<r.MarkConfig.MarkId&&LevelPlayController.Kpi(r.MarkConfig.MarkId),Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneGameplay",18,"下发已开启的玩法",["玩法id",l.s5n],["玩法状态",LevelPlayDefine_1.levelPlayStatusLogString[l.Y4n]],["是否首通",l.vDs],["开启时间",l.Lxs])}},LevelPlayController.kpi=e=>{var r,e=e.s5n,l=ModelManager_1.ModelManager.LevelPlayModel.GetProcessingLevelPlayInfo(e);l?(l.UpdateFirstPass(!0),l.FirstRewardId&&(r=ConfigManager_1.ConfigManager.GenericPromptConfig.GetPromptInfo(LevelPlayDefine_1.GAMEPLAY_FIRST_PROMPT_TYPE_ID),ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByItsType(r.TypeId,void 0,void 0,void 0,void 0,LevelPlayDefine_1.GAMEPLAY_FIRST_PROMPT_TYPE_ID)),(r=l.LevelPlayFirstPassAction)&&0<r.length&&(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneGameplay",33,"开始执行玩法首通动作"),ControllerHolder_1.ControllerHolder.LevelGeneralController.ExecuteActionsNew(r,LevelGeneralContextDefine_1.LevelPlayContext.Create(l.Id))),Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneGameplay",18,"玩法首通信息推送",["id",e])):Log_1.Log.CheckError()&&Log_1.Log.Error("SceneGameplay",18,"玩法首通时，玩法不存在",["玩法Id",e])},LevelPlayController.Fpi=e=>{var r=e.s5n;switch(e.Y4n){case 1:case 2:var l=ModelManager_1.ModelManager.LevelPlayModel.SafeCreateLevelPlayInfo(r);l.UpdateState(e.Y4n),ModelManager_1.ModelManager.WorldMapModel?.CheckGamePlayIsTracked(l);break;case 0:l=ModelManager_1.ModelManager.LevelPlayModel.GetLevelPlayInfo(r);l&&(ModelManager_1.ModelManager.LevelPlayModel.LevelPlayClose(l),l.MarkConfig)&&0<l.MarkConfig.MarkId&&LevelPlayController.Kpi(l.MarkConfig.MarkId);break;case 3:ModelManager_1.ModelManager.LevelPlayModel.LevelPlayFinish(r)}Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneGameplay",18,"玩法状态改变",["玩法id",r],["玩法状态",LevelPlayDefine_1.levelPlayStatusLogString[e.Y4n]])},LevelPlayController.Hpi=e=>{var r=e.s5n;let l=ModelManager_1.ModelManager.LevelPlayModel.GetProcessingLevelPlayInfo(r);(l=l||ModelManager_1.ModelManager.LevelPlayModel.EnterLevelPlayRange(r)).UpdateState(e.Y4n),l.UpdateCanGetReward(e.Txs);e=l.LevelPlayEnterAction;l.CanExecOpenAction&&e&&0<e.length&&(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneGameplay",33,"开始执行玩法进入动作(Finish状态下不会执行)"),ControllerHolder_1.ControllerHolder.LevelGeneralController.ExecuteActionsNew(e,LevelGeneralContextDefine_1.LevelPlayContext.Create(l.Id))),Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneGameplay",18,"玩法进入",["id",r])},LevelPlayController.jpi=e=>{e=e.s5n;ModelManager_1.ModelManager.LevelPlayModel.LeaveLevelPlayRange(e),Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneGameplay",18,"玩法离开",["id",e])},LevelPlayController.oja=e=>{var r,l=e.s5n,e=MathUtils_1.MathUtils.LongToNumber(e.ZLs),e=Math.floor(e-TimeUtil_1.TimeUtil.GetServerTime());e<=0||(r=MultiTextLang_1.configMultiTextLang.GetLocalTextNew("Levelplay_reflesh"),ScrollingTipsController_1.ScrollingTipsController.ShowTipsByText(StringUtils_1.StringUtils.Format(r,e.toString())),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneGameplay",65,"多人联机获奖提示",["id",l],["countdown",e]))},LevelPlayController.Vpi=e=>{var r=e.s5n;ModelManager_1.ModelManager.LevelPlayModel.SafeCreateLevelPlayInfo(r).UpdateRefreshTime(e.pDs),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneGameplay",18,"玩法开启时间更新",["id",r],["OpenTime",e.pDs])};
//# sourceMappingURL=LevelPlayController.js.map