
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScratchTicketActivityView=void 0;const UE=require("ue"),StringUtils_1=require("../../../../../../Core/Utils/StringUtils"),EventDefine_1=require("../../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../../Common/Event/EventSystem"),ControllerHolder_1=require("../../../../../Manager/ControllerHolder"),UiManager_1=require("../../../../../Ui/UiManager"),SkipTaskManager_1=require("../../../../SkipInterface/SkipTaskManager"),GenericLayout_1=require("../../../../Util/Layout/GenericLayout"),ActivitySubViewBase_1=require("../../../View/SubView/ActivitySubViewBase"),ActivityDescriptionTypeA_1=require("../../UniversalComponents/Content/ActivityDescriptionTypeA"),ActivityRewardList_1=require("../../UniversalComponents/Content/ActivityRewardList"),ActivityFunctionalTypeA_1=require("../../UniversalComponents/Functional/ActivityFunctionalTypeA"),ActivityTitleTypeA_1=require("../../UniversalComponents/Title/ActivityTitleTypeA"),ScratchTicketConditionItem_1=require("./Item/ScratchTicketConditionItem"),ScratchTicketProgressItem_1=require("./Item/ScratchTicketProgressItem");class ScratchTicketActivityView extends ActivitySubViewBase_1.ActivitySubViewBase{constructor(){super(...arguments),this.gLt=void 0,this.Yol=void 0,this.zol=void 0,this.Jol=void 0,this.Zol=void 0,this.o8a=void 0,this.pol=void 0,this.DFe=()=>{var t;this.pol.GetIfFirstOpen()&&ControllerHolder_1.ControllerHolder.ActivityController.RequestReadActivity(this.pol),this.pol.GetPreGuideQuestFinishState()?(t=this.pol.GetScratchCardActivityConfig(),SkipTaskManager_1.SkipTaskManager.RunByConfigId(t.JumpId)):UiManager_1.UiManager.OpenView("QuestView",this.pol.GetUnFinishPreGuideQuestId())},this.enl=()=>new ScratchTicketProgressItem_1.ScratchTicketProgressItem,this.n8a=()=>new ScratchTicketConditionItem_1.ScratchTicketConditionItem}OnSetData(){this.pol=this.ActivityBaseData}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIItem],[2,UE.UIItem],[3,UE.UIItem],[4,UE.UIItem],[5,UE.UIHorizontalLayout],[6,UE.UITexture],[7,UE.UIText],[8,UE.UIVerticalLayout],[9,UE.UIItem],[10,UE.UISprite],[11,UE.UIItem]]}async OnBeforeStartAsync(){this.gLt=new ActivityTitleTypeA_1.ActivityTitleTypeA,await this.gLt.CreateThenShowByActorAsync(this.GetItem(0).GetOwner()),this.Yol=new ActivityDescriptionTypeA_1.ActivityDescriptionTypeA,await this.Yol.CreateThenShowByActorAsync(this.GetItem(1).GetOwner()),this.zol=new ActivityRewardList_1.ActivityRewardList,await this.zol.CreateThenShowByActorAsync(this.GetItem(2).GetOwner()),this.Jol=new ActivityFunctionalTypeA_1.ActivityFunctionalTypeA(void 0),await this.Jol.CreateThenShowByActorAsync(this.GetItem(3).GetOwner()),this.Zol=new GenericLayout_1.GenericLayout(this.GetHorizontalLayout(5),this.enl),this.o8a=new GenericLayout_1.GenericLayout(this.GetVerticalLayout(8),this.n8a)}OnStart(){var t,i,e=this.pol.LocalConfig;e&&(this.gLt.SetTitleByText(this.pol.GetTitle()),t=e.DescTheme,i=!StringUtils_1.StringUtils.IsEmpty(t),this.gLt.SetSubTitleVisible(i),i&&this.gLt.SetSubTitleByTextId(t),this.Yol.SetContentByTextId(e.Desc),i=this.pol.GetPreviewReward(),this.zol.SetTitleByTextId("CollectActivity_reward"),this.zol.InitGridLayout(this.zol.InitCommonGridItem),this.zol.RefreshItemLayout(i),this.Jol.FunctionButton.SetFunction(this.DFe))}OnRefreshView(){var t,i,e,s=this.pol.GetScratchCardActivityConfig();s&&(e=this.pol.IsUnLock(),i=this.pol.GetPreGuideQuestFinishState(),t=this.pol.IsAllRoundFinish(),this.Jol.SetPanelConditionVisible(!e),this.FNe(),e||this.Jol.SetPerformanceConditionLock(this.pol.ConditionGroupId,this.pol.Id),this.Jol.FunctionButton.SetUiActive(e),this.Jol.FunctionButton.SetShowText(i?"ScratchCardActivity_JoinIn02":"ScratchCardActivity_JoinIn01"),this.Jol.FunctionButton.SetRedDotVisible(this.pol.RedPointShowState),this.Yol.SetUiActive(!i),this.GetItem(9).SetUIActive(i&&t),this.GetItem(4).SetUIActive(i),e=this.pol.GetRoundDataList(),this.Zol.RefreshByData(e),i&&!t&&(e=this.pol.GetConditionDataList(),this.o8a.RefreshByData(e),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.SetActivityViewCurrency,[s.ItemId])),this.GetItem(11).SetUIActive(!t),i=this.pol.GetFirstProgressRoundData())&&(e=i.Config.TogRoundIcon,this.SetSpriteByPath(e,this.GetSprite(10),!1,void 0))}FNe(){var[,t]=this.GetTimeVisibleAndRemainTime();this.gLt.SetTimeTextByText(t)}OnTimer(t){this.FNe()}}exports.ScratchTicketActivityView=ScratchTicketActivityView;
//# sourceMappingURL=ScratchTicketActivityView.js.map