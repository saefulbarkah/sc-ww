
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WeaponSkinTabView=void 0;const UE=require("ue"),ConfigManager_1=require("../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../Manager/ModelManager"),PreloadConfigStatementPart4_1=require("../../../../Preload/PreloadConfigStatementPart4"),UiTabViewBase_1=require("../../../../Ui/Base/UiTabViewBase"),UiLayer_1=require("../../../../Ui/UiLayer"),ConfirmBoxController_1=require("../../../ConfirmBox/ConfirmBoxController"),ConfirmBoxDefine_1=require("../../../ConfirmBox/ConfirmBoxDefine"),ScrollingTipsController_1=require("../../../ScrollingTips/ScrollingTipsController"),UiCameraAnimationManager_1=require("../../../UiCameraAnimation/UiCameraAnimationManager"),UiCameraHandleData_1=require("../../../UiCameraAnimation/UiCameraContext/UiCameraHandleData"),UiSceneManager_1=require("../../../UiComponent/UiSceneManager"),GenericLayout_1=require("../../../Util/Layout/GenericLayout"),LguiUtil_1=require("../../../Util/LguiUtil"),WeaponController_1=require("../../../Weapon/WeaponController"),WeaponSkinController_1=require("./WeaponSkinController"),WeaponSkinDefine_1=require("./WeaponSkinDefine"),WeaponSkinGridItem_1=require("./WeaponSkinGridItem"),WeaponSkinObtainItem_1=require("./WeaponSkinObtainItem");class WeaponSkinTabView extends UiTabViewBase_1.UiTabViewBase{constructor(){super(...arguments),this.Cil=void 0,this.GridLayout=void 0,this.ObtainLayout=void 0,this.N2i=void 0,this.O2i=void 0,this.dmo=void 0,this.W2e=()=>{var e=new WeaponSkinGridItem_1.WeaponSkinGridItem;return e.BindOnExtendToggleStateChanged(this.Cil.GridItemClick),e.BindOnCanExecuteChange(this.Cil.GridItemCanExecuteChange),e},this.Ail=()=>new WeaponSkinObtainItem_1.WeaponSkinObtainItem}OnRegisterComponent(){this.Cil=this.ExtraParams,this.Cil.RegisterWeaponSkinTabView(this),this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UILayoutBase],[2,UE.UIItem],[3,UE.UIExtendToggle],[4,UE.UIExtendToggle],[5,UE.UIButtonComponent],[6,UE.UILayoutBase],[7,UE.UIItem],[8,UE.UIText],[9,UE.UIText]],this.BtnBindInfo=[[3,this.Cil.WeaponHideUiClick],[4,this.Cil.WeaponSwitchShowClick],[5,this.Cil.WeaponConfirmClick]]}async uvt(){this.GridLayout=new GenericLayout_1.GenericLayout(this.GetLayoutBase(1),this.W2e,this.GetItem(2).GetOwner()),await this.GridLayout.RefreshByDataAsync(this.Cil.SkinDataList)}async OnBeforeStartAsync(){await this.uvt()}OnStart(){this.ObtainLayout=new GenericLayout_1.GenericLayout(this.GetLayoutBase(6),this.Ail,this.GetItem(7).GetOwner()),this.Cil.InitGridSelected(),this.GetExtendToggle(3)?.SetToggleState(1);var e=this.Cil.IsInShowWeapon?1:0;this.GetExtendToggle(4)?.SetToggleState(e)}OnBeforeDestroy(){UiLayer_1.UiLayer.SetShowMaskLayer("WeaponSkinCamera",!1)}LKt(){this.N2i&&UiSceneManager_1.UiSceneManager.HideObserver(this.N2i,"ShowHideWeaponEffect"),this.O2i&&UiSceneManager_1.UiSceneManager.HideObserver(this.O2i,"ShowHideWeaponEffect")}xil(e,i){WeaponController_1.WeaponController.SelectedWeaponSkinChange(e,i,this.N2i,this.O2i)}ReleaseWeaponObserver(){this.N2i&&UiSceneManager_1.UiSceneManager.HideObserverWithCallback(this.N2i,"ShowHideWeaponEffect",e=>{UiSceneManager_1.UiSceneManager.DestroyWeaponObserver(e)}),this.O2i&&UiSceneManager_1.UiSceneManager.HideObserverWithCallback(this.O2i,"ShowHideWeaponEffect",e=>{UiSceneManager_1.UiSceneManager.DestroyWeaponScabbardObserver(e)})}RecoverySceneRoleActor(){this.Cil.IsInShowWeapon&&WeaponController_1.WeaponController.RoleFadeOut(UiSceneManager_1.UiSceneManager.GetRoleSystemRoleActor(),"WeaponSkinRoleFadeOutCurve"),this.dmo.Model?.CheckGetComponent(14)?.Refresh()}RecoverySceneRoleActorBySkin(e,i){this.Cil.IsInShowWeapon&&WeaponController_1.WeaponController.RoleFadeOut(UiSceneManager_1.UiSceneManager.GetRoleSystemRoleActor(),"WeaponSkinRoleFadeOutCurve");e=ModelManager_1.ModelManager.WeaponModel.GetWeaponDataByIncId(e);this.dmo.Model?.CheckGetComponent(14)?.SetWeaponByWeaponData(e,i)}SelectedGrid(e){this.GridLayout.DeselectCurrentGridProxy(),this.GridLayout.SelectGridProxy(e,!0)}RefreshText(e,i){LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(8),e),LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(9),i)}RefreshConfirmBox(e){this.GetButton(5)?.SetSelfInteractive(!e)}RefreshGridSelect(e,i){this.GridLayout.GetLayoutItemByIndex(e)?.RefreshVisible(),this.GridLayout.GetLayoutItemByIndex(i)?.RefreshVisible()}RefreshBottom(e,i){var a=e.GetIsLock();this.GetButton(5)?.RootUIComp.SetUIActive(!a),this.ObtainLayout.SetActive(a),a?(a=this.Cil.GetSkinSkipDataList(e.SkinId),this.ObtainLayout.SetActive(0!==a.length),0<a.length&&this.ObtainLayout.RefreshByData(a)):this.GetButton(5)?.SetSelfInteractive(!i)}HideView(){this.GetItem(0)?.SetUIActive(!1),this.GetExtendToggle(4)?.RootUIComp.SetUIActive(!1)}ShowView(){this.GetItem(0)?.SetUIActive(!0),this.GetExtendToggle(4)?.RootUIComp.SetUIActive(!0)}SwitchRoleWeaponShow(e){e===WeaponSkinDefine_1.WEAPON_SKIN_DEFAULT_ID?this.dmo.Model?.CheckGetComponent(14)?.Refresh():(e=ConfigManager_1.ConfigManager.SkinConfig.GetWeaponSkinConfig(e),this.dmo.Model?.CheckGetComponent(14)?.ReplaceWeaponModel(e.Models)),WeaponController_1.WeaponController.RoleFadeOut(UiSceneManager_1.UiSceneManager.GetRoleSystemRoleActor(),"WeaponSkinRoleFadeOutCurve"),this.LKt();e=UiCameraHandleData_1.UiCameraHandleData.NewByView("RoleWeaponTabView");UiLayer_1.UiLayer.SetShowMaskLayer("WeaponSkinCamera",!0),UiCameraAnimationManager_1.UiCameraAnimationManager.PushCameraHandle(e,!0,!0,"1001",!0,()=>{UiLayer_1.UiLayer.SetShowMaskLayer("WeaponSkinCamera",!1)}),ModelManager_1.ModelManager.WeaponModel.SetCurSelectViewName(1)}SwitchWeaponShow(e,i){WeaponController_1.WeaponController.RoleFadeIn(UiSceneManager_1.UiSceneManager.GetRoleSystemRoleActor(),"WeaponSkinRoleFadeInCurve"),UiLayer_1.UiLayer.SetShowMaskLayer("WeaponSkinCamera",!0),UiCameraAnimationManager_1.UiCameraAnimationManager.PushCameraHandleByHandleName("1072",!0,!0,"1001",!0,()=>{UiLayer_1.UiLayer.SetShowMaskLayer("WeaponSkinCamera",!1),ModelManager_1.ModelManager.WeaponModel.SetCurSelectViewName(2),this.xil(e,i)})}Pil(e){var e=ModelManager_1.ModelManager.WeaponModel.GetWeaponDataByIncId(e),i=(this.N2i=UiSceneManager_1.UiSceneManager.InitWeaponObserver(),this.N2i.Model);i.CheckGetComponent(18)?.SetWeaponData(e),i.CheckGetComponent(0)?.SetLoadingIconFollowState(!1)}wil(e){e=ModelManager_1.ModelManager.WeaponModel.GetWeaponDataByIncId(e);this.O2i=UiSceneManager_1.UiSceneManager.InitWeaponScabbardObserver(),this.O2i.Model.CheckGetComponent(18).SetWeaponData(e)}InitWeaponModel(e,i){this.Pil(e),this.wil(e),this.dmo=UiSceneManager_1.UiSceneManager.GetRoleSystemRoleActor()}SwitchWeaponSkinModel(e,i,a){a?WeaponController_1.WeaponController.SelectedWeaponSkinChange(e,i,this.N2i,this.O2i):i===WeaponSkinDefine_1.WEAPON_SKIN_DEFAULT_ID?(a=ModelManager_1.ModelManager.WeaponModel.GetWeaponDataByIncId(e).GetWeaponConfig(),this.dmo.Model?.CheckGetComponent(14)?.ReplaceWeaponModel(a.Models)):(e=ConfigManager_1.ConfigManager.SkinConfig.GetWeaponSkinConfig(i),this.dmo.Model?.CheckGetComponent(14)?.ReplaceWeaponModel(e.Models))}ShowEquipTips(){ScrollingTipsController_1.ScrollingTipsController.ShowTipsById("WeaponSkinReplaceTip")}TrySendPbEquipTakeOnRequest(e,i){var a,n,r=ModelManager_1.ModelManager.WeaponSkinModel.GetRoleIdBySkinId(i),t=()=>{WeaponSkinController_1.WeaponSkinController.SendEquipSkinRequest(e,i)};r?(a=new ConfirmBoxDefine_1.ConfirmBoxDataNew(226),n=ConfigManager_1.ConfigManager.SkinConfig.GetWeaponSkinConfig(i).Name,n=PreloadConfigStatementPart4_1.configMultiTextLang.GetLocalTextNew(n),r=ModelManager_1.ModelManager.RoleModel.GetRoleDataById(r).GetName(),a.SetTextArgs(n,r),a.FunctionMap.set(2,t),ConfirmBoxController_1.ConfirmBoxController.ShowConfirmBoxNew(a)):t()}}exports.WeaponSkinTabView=WeaponSkinTabView;
//# sourceMappingURL=WeaponSkinTabView.js.map