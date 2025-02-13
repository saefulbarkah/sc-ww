
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DockyardView=void 0;const UE=require("ue"),ModelManager_1=require("../../../../../../Manager/ModelManager"),UiTickViewBase_1=require("../../../../../../Ui/Base/UiTickViewBase"),PopupCaptionItem_1=require("../../../../../../Ui/Common/PopupCaptionItem"),FishingDefine_1=require("../../FishingDefine"),FishingCurrencyItem_1=require("../../FishingDock/FishingCurrencyItem"),DockyardBackpackPanel_1=require("../Bag/DockyardBackpackPanel"),DockyardItemListPanel_1=require("../List/DockyardItemListPanel"),DockyardQuestInfoPanel_1=require("../Tips/DockyardQuestInfoPanel"),DockyardStatePanel_1=require("../Tips/DockyardStatePanel"),DockyardTipsPanel_1=require("../Tips/DockyardTipsPanel");class DockyardView extends UiTickViewBase_1.UiTickViewBase{constructor(){super(...arguments),this.lqe=void 0,this.HXl=void 0,this.VYl=void 0,this.WXl=void 0,this.jYl=void 0,this.R7_=void 0,this.HLn=void 0,this.v9_=1,this.j$_=!1,this.H$_=0}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIItem],[2,UE.UIItem],[3,UE.UIItem],[4,UE.UIItem],[5,UE.UIItem],[6,UE.UIItem]]}QXl(){this.HLn=this.OpenParam,this.HLn.RegisterView(this)}async VD_(){await(new FishingCurrencyItem_1.FishingCurrencyItem).CreateThenShowByResourceIdAsync("UIItem_CommonCurrencyItem",this.lqe.GetCostContent())}async zDn(){this.lqe=new PopupCaptionItem_1.PopupCaptionItem(this.GetItem(0)),this.lqe.SetCloseCallBack(this.HLn.CloseClick),await this.VD_(),await this.lqe.SetCurrencyItemList([FishingDefine_1.FISHING_CURRENCY_ITEMID]);for(const i of this.lqe.GetCurrencyItemList())i.SetTextureClickCheckFunction(this.HLn.CheckCurrencyItemClick)}async $Xl(){this.HXl=new DockyardBackpackPanel_1.DockyardBackpackPanel(this.HLn.BackpackPanelModel),await this.HXl.CreateByActorAsync(this.GetItem(1).GetOwner()),this.AddChild(this.HXl)}async HYl(){this.VYl=new DockyardStatePanel_1.DockyardStatePanel,await this.VYl.CreateThenShowByActorAsync(this.GetItem(3).GetOwner())}async XXl(){this.WXl=new DockyardTipsPanel_1.DockyardTipsPanel,await this.WXl.CreateThenShowByActorAsync(this.GetItem(2).GetOwner())}async OYl(){ModelManager_1.ModelManager.FishingModel?.IsInDock?(this.jYl=new DockyardItemListPanel_1.DockyardItemListPanel,await this.jYl.CreateByActorAsync(this.GetItem(4).GetOwner(),this.HLn.ListPanelModel)):this.GetItem(4).SetUIActive(!1)}async A7_(){this.R7_=new DockyardQuestInfoPanel_1.DockyardQuestInfoPanel,await this.R7_.CreateByResourceIdAsync("PnlNavigationEntrustInfo",this.GetItem(6)),this.R7_.SetButtonExitVisible(!1)}async OnBeforeStartAsync(){this.QXl(),await Promise.all([this.zDn(),this.$Xl(),this.HYl(),this.XXl(),this.OYl(),this.A7_()]),this.HLn.BackpackPanelModel.IsInSelectState=!1}async OnBeforeShowAsyncImplementImplement(){this.HLn.IsInTrawlState&&await this.jYl.RefreshListItem()}OnBeforeShow(){this.R7_.Refresh()}OnTick(i){var t;this.j$_&&(0===this.v9_?(t=this.HLn.GetItemBlockData(this.H$_),this.WXl.Refresh(t),this.WXl.SetPanelVisible(!0),this.R7_.SetPanelVisible(!1)):1===this.v9_&&(this.WXl.SetPanelVisible(!1),this.R7_.SetPanelVisible(!0)),this.j$_=!1,this.H$_=0)}ShowTipsPanel(i){this.j$_=!0,this.v9_=0,this.H$_=i}HideTipsPanel(){this.j$_=!0,this.v9_=1}SetTrawlState(i){this.VYl.SetActive(!i),this.jYl.SetActive(i)}GetQuicklySellPanelParentItem(){return this.GetItem(5)}NotifyQuicklySellActive(i){var t=0===this.v9_?this.WXl:this.R7_;i?(t.SetPanelVisible(!1),this.R7_.LockState=!0,this.WXl.LockState=!0):(this.R7_.LockState=!1,this.WXl.LockState=!1,t.SetPanelVisible(!0))}}exports.DockyardView=DockyardView;
//# sourceMappingURL=DockyardView.js.map