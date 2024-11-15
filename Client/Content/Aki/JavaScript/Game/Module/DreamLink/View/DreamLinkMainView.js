
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DreamLinkMainView=void 0;const UE=require("ue"),TimerSystem_1=require("../../../../Core/Timer/TimerSystem"),LevelGeneralCommons_1=require("../../../LevelGamePlay/LevelGeneralCommons"),ModelManager_1=require("../../../Manager/ModelManager"),UiPanelBase_1=require("../../../Ui/Base/UiPanelBase"),UiViewBase_1=require("../../../Ui/Base/UiViewBase"),PopupCaptionItem_1=require("../../../Ui/Common/PopupCaptionItem"),UiManager_1=require("../../../Ui/UiManager"),ScrollingTipsController_1=require("../../ScrollingTips/ScrollingTipsController"),DreamLinkController_1=require("../DreamLinkController"),DreamLinkScoreRewardItem_1=require("./DreamLinkScoreRewardItem"),DreamLinkLimitTimeRewardItem_1=require("./SubView/DreamLinkLimitTimeRewardItem");class DreamLinkMainView extends UiViewBase_1.UiViewBase{constructor(){super(...arguments),this.CaptionComponent=void 0,this.qsi=void 0,this.Vrl=void 0,this.Otl=void 0,this.ktl=void 0,this.Ntl=void 0,this.Pe=void 0,this.Cpl=void 0,this.OZa=()=>{this.Xdl(1,"DreamLinkWorldRunView")},this.GZa=()=>{ModelManager_1.ModelManager.GameModeModel?.IsMulti?ScrollingTipsController_1.ScrollingTipsController.ShowTipsById("MowingTowerMultiTips"):this.Xdl(2,"DreamLinkDungeonView")},this.kZa=()=>{ModelManager_1.ModelManager.GameModeModel?.IsMulti?ScrollingTipsController_1.ScrollingTipsController.ShowTipsById("MowingTowerMultiTips"):this.Xdl(3,"DreamLinkWhiteCatView")}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIItem],[2,UE.UIItem],[3,UE.UIItem],[4,UE.UIItem],[5,UE.UIItem],[6,UE.UIItem],[7,UE.UIItem]]}async OnBeforeStartAsync(){var i;this.Pe=DreamLinkController_1.DreamLinkController.GetCurrentActivityData(),this.Pe&&(i=[],this.qsi=new DreamLinkScoreRewardItem_1.DreamLinkScoreRewardItem(this.Pe),i.push(this.qsi.CreateByActorAsync(this.GetItem(4).GetOwner())),this.AddChild(this.qsi),this.Vrl=new DreamLinkLimitTimeRewardItem_1.DreamLinkLimitTimeRewardItem(this.Pe),i.push(this.Vrl.CreateByActorAsync(this.GetItem(5).GetOwner())),this.CaptionComponent=new PopupCaptionItem_1.PopupCaptionItem,i.push(this.CaptionComponent.CreateThenShowByActorAsync(this.GetItem(0).GetOwner())),this.CaptionComponent.SetCloseCallBack(()=>{this.CloseMe()}),this.Otl=new DreamLinkButton,i.push(this.Otl.CreateThenShowByActorAsync(this.GetItem(1).GetOwner())),this.Otl.BindButtonFunction(this.OZa),this.ktl=new DreamLinkButton,i.push(this.ktl.CreateThenShowByActorAsync(this.GetItem(2).GetOwner())),this.ktl.BindButtonFunction(this.GZa),this.Ntl=new DreamLinkButton,i.push(this.Ntl.CreateThenShowByActorAsync(this.GetItem(3).GetOwner())),this.Ntl.BindButtonFunction(this.kZa),await Promise.all(i))}OnStart(){var i=this.OpenParam;i&&1===i?(this.UiViewSequence.StartSequenceName="Start01",this.UiViewSequence.CloseSequenceName="Close01"):(this.UiViewSequence.StartSequenceName="Start02",this.UiViewSequence.CloseSequenceName="Close02")}OnBeforeShow(){this.Vrl.RefreshActive(),this.Svt(),this.Hrl()}OnBeforeHide(){this.Vrl.SetActive(!1),this.gpl()}Xdl(i,e){var t,s=this.Pe.GetActivityConfig();s&&(t=this.Pe.IsDreamLinkFunctionUnlock(i),s=s.OpenCondition.get(i)??0,t?(this.PlaySequence("SwitchView",void 0,!0),this.gpl(),this.Cpl=TimerSystem_1.TimerSystem.Delay(()=>{UiManager_1.UiManager.OpenView(e),this.Cpl=void 0},320)):ScrollingTipsController_1.ScrollingTipsController.ShowTipsByTextId(LevelGeneralCommons_1.LevelGeneralCommons.GetConditionGroupHintText(s)))}gpl(){this.Cpl&&(TimerSystem_1.TimerSystem.Remove(this.Cpl),this.Cpl=void 0)}Svt(){var e,t,s,r,i=this.Pe.GetActivityConfig();if(i)for([e,t,s,r]of[[1,this.Otl,()=>this.Pe.CheckHasRunRedDot()||this.Pe.CheckHasEnergyReward(),()=>this.Pe.CheckHasRunFinished()],[2,this.ktl,()=>this.Pe.CheckHasEnergyReward()||this.Pe.CheckDungeonRedDotState(),()=>this.Pe.IsAllInstFinished()],[3,this.Ntl,()=>this.Pe.CheckHasBossReward()||this.Pe.CheckAllBossInstRedDotState(),()=>!1]]){var h=this.Pe.IsDreamLinkFunctionUnlock(e);t.SetToggleEnable(h);let i=!1;h&&(i=s()),t.SetRedDotState(i),t.SetFinishedState(r())}}Hrl(){var i=0===this.Pe.GetInstStage();this.GetItem(6).SetUIActive(i),this.GetItem(7).SetUIActive(!i)}}exports.DreamLinkMainView=DreamLinkMainView;class DreamLinkButton extends UiPanelBase_1.UiPanelBase{constructor(){super(...arguments),this.Gke=void 0,this.nqe=()=>{this.Gke?.()}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIExtendToggle],[1,UE.UIItem],[2,UE.UIItem],[3,UE.UIItem],[4,UE.UISprite]]}OnStart(){this.GetItem(1).SetUIActive(!1),this.GetExtendToggle(0).CanExecuteChange.Bind(()=>!1),this.GetExtendToggle(0).OnPointUpCallBack.Bind(this.nqe)}SetRedDotState(i){this.GetItem(1).SetUIActive(i)}SetFinishedState(i){this.GetItem(2).SetUIActive(i)}BindButtonFunction(i){this.Gke=i}SetToggleEnable(i){var e=i?0:2,e=(this.GetExtendToggle(0).SetToggleStateForce(e),this.GetItem(3).SetUIActive(!i),this.GetSprite(4));e.SetChangeColor(!i,e.changeColor)}}
//# sourceMappingURL=DreamLinkMainView.js.map