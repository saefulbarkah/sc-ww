
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ActivitySubViewCorniceMeeting=void 0;const UE=require("ue"),ConfigManager_1=require("../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../Manager/ModelManager"),RedDotController_1=require("../../../../RedDot/RedDotController"),UiManager_1=require("../../../../Ui/UiManager"),ScrollingTipsController_1=require("../../../ScrollingTips/ScrollingTipsController"),ActivitySubViewBase_1=require("../../View/SubView/ActivitySubViewBase"),ActivitySubViewGeneralInfo_1=require("../../View/SubView/ActivitySubViewGeneralInfo");class ActivitySubViewCorniceMeeting extends ActivitySubViewBase_1.ActivitySubViewBase{constructor(){super(...arguments),this.Q6a=void 0,this.K6a=()=>{var e;this.ActivityBaseData?.IsUnLock()?(e=ConfigManager_1.ConfigManager.ActivityCorniceMeetingConfig?.GetCorniceMeetingQuest(this.ActivityBaseData.Id))&&(3===ModelManager_1.ModelManager.QuestNewModel?.GetQuestState(e.QuestId)?ScrollingTipsController_1.ScrollingTipsController.ShowTipsByTextId("ActivityCorniceMeetingQuestFinish"):UiManager_1.UiManager.OpenView("QuestView",e.QuestId)):0<(e=this.ActivityBaseData.GetUnFinishPreGuideQuestId())&&(this.ActivityBaseData.SavePreQuestRedDot(e),UiManager_1.UiManager.OpenView("QuestView",e))},this.eje=e=>{var i=this.ActivityBaseData.GetUnFinishPreGuideQuestId();0<i?(this.ActivityBaseData.SavePreQuestRedDot(i),UiManager_1.UiManager.OpenView("QuestView",i)):UiManager_1.UiManager.OpenView("CorniceMeetingMainView")}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIButtonComponent],[2,UE.UIItem]],this.BtnBindInfo=[[1,this.K6a]]}async OnBeforeStartAsync(){this.Q6a=new ActivitySubViewGeneralInfo_1.ActivitySubViewGeneralInfo,this.Q6a.SetData(this.ActivityBaseData),this.Q6a.SetClickFunc(this.eje),await this.Q6a.CreateThenShowByActorAsync(this.GetItem(0).GetOwner())}OnBeforeShow(){0<this.ActivityBaseData.GetUnFinishPreGuideQuestId()?this.Q6a.SetBtnText("ActivityCorniceMeetingGoToQuest"):this.Q6a.SetBtnText("PrefabTextItem_2701983798_Text");var e=this.ActivityBaseData;e.NeedTailQuest&&(e=ConfigManager_1.ConfigManager.ActivityCorniceMeetingConfig?.GetCorniceMeetingQuest(this.ActivityBaseData.Id),RedDotController_1.RedDotController.BindRedDot("QuestViewItem",this.GetItem(2),void 0,e.QuestId))}OnBeforeHide(){RedDotController_1.RedDotController.UnBindGivenUi("QuestViewItem",this.GetItem(2))}OnRefreshView(){var e=this.ActivityBaseData,i=e.GetUnFinishPreGuideQuestId();this.Q6a?.SetFunctionRedDotVisible(e.RedPointShowState),this.GetButton(1)?.RootUIComp.SetUIActive(e.IsUnlockTailQuest()&&e.IsUnLock()&&i<=0)}}exports.ActivitySubViewCorniceMeeting=ActivitySubViewCorniceMeeting;
//# sourceMappingURL=ActivitySubViewCorniceMeeting.js.map