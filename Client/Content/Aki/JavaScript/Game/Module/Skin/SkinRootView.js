
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SkinRootView=void 0;const UE=require("ue"),UiViewBase_1=require("../../Ui/Base/UiViewBase"),PopupCaptionItem_1=require("../../Ui/Common/PopupCaptionItem"),WeaponSkinTabView_1=require("./Tab/Weapon/WeaponSkinTabView");class SkinRootView extends UiViewBase_1.UiViewBase{constructor(){super(...arguments),this.Cil=void 0,this.lqe=void 0,this.gil=void 0}OnRegisterComponent(){this.Cil=this.OpenParam,this.Cil.RegisterView(this),this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIItem]]}async U3e(){this.lqe=new PopupCaptionItem_1.PopupCaptionItem,this.lqe.SetCloseCallBack(this.Cil.CloseView),await this.lqe.CreateThenShowByActorAsync(this.GetItem(0).GetOwner())}async pil(){this.gil=new WeaponSkinTabView_1.WeaponSkinTabView,this.gil.SetExtraParams(this.Cil),await this.gil.CreateThenShowByActorAsync(this.GetItem(1).GetOwner())}async OnBeforeStartAsync(){await Promise.all([this.U3e(),this.pil()])}OnAddEventListener(){this.Cil.AddEventListener()}OnRemoveEventListener(){this.Cil.RemoveEventListener()}OnBeforeHide(){this.LastHide&&this.Cil.BeforeDestroy()}HideView(){this.lqe.SetUiActive(!1)}ShowView(){this.lqe.SetUiActive(!0)}}exports.SkinRootView=SkinRootView;
//# sourceMappingURL=SkinRootView.js.map