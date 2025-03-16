
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FlowController=exports.LOCAL_FLOWINCID=void 0;const UiManager_1=require("../../../Ui/UiManager"),ControllerWithAssistantBase_1=require("../../GeneralLogicTree/ControllerAssistant/ControllerWithAssistantBase"),ScrollingTipsController_1=require("../../ScrollingTips/ScrollingTipsController"),FlowActionCenter_1=require("./FlowActionCenter"),FlowActionRunner_1=require("./FlowActionRunner"),FlowLaunchCenter_1=require("./FlowLaunchCenter"),FlowNetworks_1=require("./FlowNetworks"),FlowServerNotifyCenter_1=require("./FlowServerNotifyCenter"),assistantMap=(exports.LOCAL_FLOWINCID=-1,{[0]:void 0,1:void 0,2:void 0,3:void 0});class FlowController extends ControllerWithAssistantBase_1.ControllerWithAssistantBase{static OnInit(){var t=super.OnInit();return FlowNetworks_1.FlowNetworks.Register(),t}static OnClear(){return FlowNetworks_1.FlowNetworks.UnRegister(),super.OnClear()}static RegisterAssistant(){this.AddAssistant(0,new FlowServerNotifyCenter_1.FlowServerNotifyCenter),this.AddAssistant(1,new FlowActionCenter_1.FlowActionCenter),this.AddAssistant(2,new FlowActionRunner_1.FlowActionRunner),this.AddAssistant(3,new FlowLaunchCenter_1.FlowLaunchCenter)}static cYt(t){if(this.Assistants)return this.Assistants.get(t)}static StartNotify(t){this.cYt(0).HandleFlowStartNotify(t)}static EndNotify(t){this.cYt(0).HandleFlowEndNotify(t)}static SkipBlackScreenNotify(t){this.cYt(0).HandleFlowSkipBlackScreenNotify(t)}static ClearOnLeaveOnlineWorld(){}static GetFlowAction(t){return this.cYt(1).GetFlowAction(t)}static ExecuteActions(t,i,e){this.cYt(2).ExecuteActions(t,i,e)}static FinishFlow(t,i,e){this.cYt(2).FinishFlow(t,i,e)}static HasFlow(t,i,e){return this.cYt(2).HasFlow(t,i,e)}static BackgroundFlow(t,i=!0,e=!1){this.cYt(2).BackgroundActions(t,i,e)}static RunNextAction(){this.cYt(2).ExecuteNextAction()}static FinishFlowByGm(){this.cYt(2).ForceFinishActionsByGm()}static GetCurFlowAction(){return this.cYt(2).GetCurActionName()}static IsInShowTalk(){return this.cYt(2).IsInShowTalk()}static ExecuteSubActions(t,i,e=!1){this.cYt(2).ExecuteSubActions(t,i,e)}static GetInteractPoint(){return this.cYt(2).GetInteractPoint()}static AddActionNext(t){this.cYt(2).AddActionNext(t)}static GetRecommendedOption(t){return this.cYt(2).GetOptionToSelect(t)}static SelectOption(t,i){this.cYt(2).RecordOption(t,i)}static RecordTalkItem(t){this.cYt(2).RecordTalkItem(t)}static CreatePlotReviewViewData(){var t,i=[],e=this.cYt(2).GetTalkHistory();if(e&&0<e.length)for(const s of e)s.IsOption?(t={TalkItem:s.TalkItem,OptionIndex:s.OptionIndex},i.push({Type:1,Data:t})):(t={TalkItem:s.TalkItem,IsPlaying:!1},i.push({Type:0,Data:t}));return{PlotReviewItemDataList:i}}static OpenPlotReviewView(){var t=this.cYt(2)?.GetTalkHistory();return t&&0!==t.length?(t=this.CreatePlotReviewViewData(),UiManager_1.UiManager.OpenView("PlotReviewView",t),!0):(ScrollingTipsController_1.ScrollingTipsController.ShowTipsByTextId("PlotView_001"),!1)}static get FlowSequence(){return this.cYt(2).FlowSequence}static get FlowShowTalk(){return this.cYt(2).FlowShowTalk}static EnableSkip(t){this.cYt(2).EnableSkip(t)}static CheckCanSkipTmp(){return this.cYt(2).CheckCanSkipTmp()}static CountDownSkip(t){this.cYt(2).TriggerCountDownSkip(t)}static CheckDisableInput(t){this.cYt(2).HandleInputBeforePlay(t)}static GetNextAction(t=!0){return this.cYt(2).GetNextAction(t)}static LogError(t,...i){this.cYt(2).LogError(t,...i)}static GetFlowIncId(){return this.cYt(2).GetFlowIncId()}static RequestPosition(t,i){this.cYt(2).RequestPosition(t,i)}static CheckViewControlBeginForC(){return this.cYt(2).CheckViewControlBeginForC()}static GetFlowName(){return this.cYt(2).GetFlowName()}static StartFlowByRes(t){}static StartFlow(t,i,e,s,r,o,n,a,c){return this.cYt(3).StartFlow(t,i,e,s,r,o,n,void 0,void 0,a,c)}static StartFlowForView(t,i,e,s,r=!0){return this.cYt(3).StartFlow(t,i,e,void 0,void 0,!1,!1,s,r)}static StartPlotNetworkPending(){this.cYt(3).StartPlotNetworkPending()}static OnTick(t){this.cYt(3).Tick(t)}}(exports.FlowController=FlowController).IsTickEvenPausedInternal=!0;
//# sourceMappingURL=FlowController.js.map