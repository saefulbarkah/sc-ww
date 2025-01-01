
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SmallItemGridSkinComponent=void 0;const UE=require("ue"),StringUtils_1=require("../../../../../Core/Utils/StringUtils"),ConfigManager_1=require("../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../Manager/ModelManager"),SmallItemGridComponent_1=require("./SmallItemGridComponent");class SmallItemGridSkinComponent extends SmallItemGridComponent_1.SmallItemGridComponent{GetResourceId(){return"UiItem_ItemBSkin"}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UISprite],[1,UE.UITexture],[2,UE.UIItem],[3,UE.UITexture],[4,UE.UIItem],[5,UE.UIText]]}OnRefresh(e){this.SetActive(!0);var t=ConfigManager_1.ConfigManager.UiResourceConfig.GetResourcePath(this.QSl(e)),t=(this.SetTextureByPath(t,this.GetTexture(1)),this.Q5l(e));this.SetSpriteByPath(t,this.GetSprite(0),!1),this.rbl(e),this.obl(e)}Q5l(e){var e=e.SkinId,e=ConfigManager_1.ConfigManager.InventoryConfig.GetItemConfigData(e);return void 0===e?"":(e=e.QualityId,ConfigManager_1.ConfigManager.CommonConfig.GetItemQualityById(e).SkinItemBg)}QSl(e){var e=e.SkinId,t=ConfigManager_1.ConfigManager.InventoryConfig.GetItemDataTypeByConfigId(e);return 9===t?"T_IconFilterSkin3":10===t?0<ModelManager_1.ModelManager.RoleSkinModel.GetRoleSkinData(e).GetSuitWeaponSkinId()?"T_IconFilterSkin1":"T_IconFilterSkin2":""}rbl(e){var e=e.SkinId;let t=!1;10===ConfigManager_1.ConfigManager.InventoryConfig.GetItemDataTypeByConfigId(e)&&0<ModelManager_1.ModelManager.RoleSkinModel.GetRoleSkinData(e).GetSuitWeaponSkinId()&&(t=!0),this.GetItem(2).SetUIActive(t),t&&(e=ModelManager_1.ModelManager.RoleSkinModel.GetRoleSkinData(e).GetPayShopPreviewBuyRoleSuitWeaponTexturePath(),this.SetTextureByPath(e,this.GetTexture(3)))}obl(e){var e=e.BottomText,t=!StringUtils_1.StringUtils.IsEmpty(e);this.GetItem(4).SetUIActive(t),t&&this.GetText(5).SetText(e)}GetLayoutLevel(){return 1}}exports.SmallItemGridSkinComponent=SmallItemGridSkinComponent;
//# sourceMappingURL=SmallItemGridSkinComponent.js.map