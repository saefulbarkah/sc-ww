
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ActivityDirectTrainSubView=void 0;const UE=require("ue"),StringUtils_1=require("../../../../../Core/Utils/StringUtils"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),ControllerHolder_1=require("../../../../Manager/ControllerHolder"),ModelManager_1=require("../../../../Manager/ModelManager"),UiManager_1=require("../../../../Ui/UiManager"),ConfirmBoxDefine_1=require("../../../ConfirmBox/ConfirmBoxDefine"),MapDefine_1=require("../../../Map/MapDefine"),ScrollingTipsController_1=require("../../../ScrollingTips/ScrollingTipsController"),ActivitySubViewBase_1=require("../../View/SubView/ActivitySubViewBase"),ActivityDescriptionTypeA_1=require("../UniversalComponents/Content/ActivityDescriptionTypeA"),ActivityRewardList_1=require("../UniversalComponents/Content/ActivityRewardList"),ActivityFunctionalTypeA_1=require("../UniversalComponents/Functional/ActivityFunctionalTypeA"),ActivityTitleTypeA_1=require("../UniversalComponents/Title/ActivityTitleTypeA"),ActivityDirectTrainHelper_1=require("./ActivityDirectTrainHelper"),RecommendQuestTipsSubPanel_1=require("./SubView/RecommendQuestTipsSubPanel");class ActivityDirectTrainSubView extends ActivitySubViewBase_1.ActivitySubViewBase{constructor(){super(...arguments),this.LNe=void 0,this.DNe=void 0,this.UNe=void 0,this.txl=void 0,this.ixl=void 0,this.Nda=()=>{const e=ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.IsGetActivityRewards();this.UNe.GetLayoutItemList().forEach(i=>{i.SetReceivedVisible(e)})},this.rxl=()=>{var i=new ConfirmBoxDefine_1.ConfirmBoxDataNew(237);i.FunctionMap.set(2,()=>{var i=ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.GetRecommendQuestLinkId();UiManager_1.UiManager.OpenView("QuestView",i)}),ControllerHolder_1.ControllerHolder.ConfirmBoxController.ShowConfirmBoxNew(i)},this.oxl=()=>{ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.GetActivityData().HaveDisplayedGotoRedDot=!0;var i=this.MPl(),e=ModelManager_1.ModelManager.ActivityDirectTrainModel.GetSkipQuestId();if(i)if(0===ModelManager_1.ModelManager.QuestNewModel.GetQuestState(e)){if(this._Kl()){const t=ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.GetRecommendQuestLinkId();i={GotoCallBack:()=>{UiManager_1.UiManager.OpenView("QuestView",t)},SkipCallBack:()=>{ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.GetActivityController().RequestThroughTrain(()=>{EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.ResetToBattleView)})}};UiManager_1.UiManager.OpenView("SkipMainQuestWindowView",i)}}else UiManager_1.UiManager.OpenView("QuestView",e);else UiManager_1.UiManager.OpenView("QuestView",e)}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIItem],[2,UE.UIItem],[3,UE.UIItem],[4,UE.UIItem]]}async OnBeforeStartAsync(){var i=this.GetItem(0),i=(this.LNe=new ActivityTitleTypeA_1.ActivityTitleTypeA,await this.LNe.CreateThenShowByActorAsync(i.GetOwner()),this.GetItem(1)),i=(this.DNe=new ActivityDescriptionTypeA_1.ActivityDescriptionTypeA,await this.DNe.CreateThenShowByActorAsync(i.GetOwner()),this.GetItem(2)),i=(this.UNe=new ActivityRewardList_1.ActivityRewardList,await this.UNe.CreateThenShowByActorAsync(i.GetOwner()),this.UNe.InitGridLayout(this.UNe.InitCommonGridItem),ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.GetActivityData()),e=this.GetItem(3),i=(this.txl=new ActivityFunctionalTypeA_1.ActivityFunctionalTypeA(i),await this.txl.CreateThenShowByActorAsync(e.GetOwner()),this.txl.FunctionButton.SetFunction(this.oxl),this.txl.FunctionButton.BindRedDot("ActivityDirectTrain"),this.GetItem(4));this.ixl=new RecommendQuestTipsSubPanel_1.RecommendQuestTipsSubPanel,await this.ixl.CreateThenShowByActorAsync(i.GetOwner()),this.ixl.BindClickBtnTipsCallBack(this.rxl)}OnStart(){this.mGe(),this.ufo(),this.KGt(),this.NDn(),this.nxl()}OnBeforeShow(){ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.GetActivityController().RequestThroughTrainFinishViewAsync()}OnRefreshView(){this.KGt(),this.nxl(),this.NDn()}OnTimer(i){this.sxl()}GetGuideUiItemAndUiItemForShowEx(i){return 0===i.length||"ConfirmBtn"!==i[0]||void 0===(i=this.txl?.FunctionButton?.GetGuideUiItemAndUiItemForShowEx(i))?void 0:i}mGe(){var i=ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.GetActivityData().GetTitle();this.LNe.SetTitleByText(i),this.sxl()}sxl(){var i=ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.GetActivityData(),[i,e]=ModelManager_1.ModelManager.ActivityModel.GetTimeVisibleAndRemainTime(i);this.LNe.SetTimeTextVisible(i),i&&this.LNe.SetTimeTextByText(e)}ufo(){var i=ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.GetActivityData().LocalConfig,e=i.DescTheme,i=i.Desc,t=!StringUtils_1.StringUtils.IsEmpty(e);this.LNe.SetSubTitleVisible(t),t&&this.LNe.SetSubTitleByTextId(e),this.DNe.SetContentByTextId(i)}KGt(){var i=ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.GetActivityData().GetPreviewReward();this.UNe.SetTitleByTextId("CollectActivity_reward"),this.UNe.RefreshItemLayout(i,this.Nda)}MPl(){var i=ModelManager_1.ModelManager.ActivityDirectTrainModel.GetRecommendQuestId();return!ModelManager_1.ModelManager.QuestNewModel.CheckQuestFinished(i)}nxl(){var i=this.MPl();this.ixl.SetUiActive(i),i&&(i=ModelManager_1.ModelManager.ActivityDirectTrainModel.GetRecommendQuestTipsTextId(),this.ixl.SetTipsTxtByTextId(i))}NDn(){var i=ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.GetActivityData(),e=i.IsUnLock(),t=ModelManager_1.ModelManager.ActivityDirectTrainModel.GetSkipQuestId(),t=ModelManager_1.ModelManager.QuestNewModel.GetQuestState(t),i=(e?this.txl.FunctionButton.SetLocalTextNew(0===t?"DirectTrainActivity_Button_Unlock":"DirectTrainActivity_Button_Goto"):this.txl.SetPerformanceConditionLock(i.ConditionGroupId,i.Id),this.txl.SetPanelConditionVisible(!e),3===t);this.txl.FunctionButton.SetUiActive(e&&!i),this.txl.PanelActivate.SetUiActive(e&&i),i&&this.txl.PanelActivate.SetTextByTextId("DirectTrainActivity_Finish")}_Kl(){var i=ModelManager_1.ModelManager.WorldMapModel.IsPlayerInInstanceDungeon();return i||ControllerHolder_1.ControllerHolder.GameModeController.IsInInstance()?(ScrollingTipsController_1.ScrollingTipsController.ShowTipsByTextId("DirectTrainActivity_Intercept_Content"),!1):!(!i&&ModelManager_1.ModelManager.CreatureModel.GetInstanceId()!==MapDefine_1.BIG_WORLD_MAP_ID)||(ScrollingTipsController_1.ScrollingTipsController.ShowTipsByTextId("DirectTrainActivity_LockAdvance_Text"),!1)}}exports.ActivityDirectTrainSubView=ActivityDirectTrainSubView;
//# sourceMappingURL=ActivityDirectTrainSubView.js.map