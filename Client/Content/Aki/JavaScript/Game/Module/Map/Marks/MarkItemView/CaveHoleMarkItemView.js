
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CaveHoleMarkItemView=void 0;const ConfigManager_1=require("../../../../Manager/ConfigManager"),WorldMapDefine_1=require("../../../WorldMap/WorldMapDefine"),ConfigMarkItemView_1=require("./ConfigMarkItemView");class CaveHoleMarkItemView extends ConfigMarkItemView_1.ConfigMarkItemView{constructor(e){super(e),this.drl=void 0,this.drl=e}OnBeforeDestroy(){super.OnBeforeDestroy(),this.drl=void 0}UpdateIcon(){var e=this.MarkConfig.UnlockMarkPic;this.OnIconPathChanged(e)}OnAfterShow(){super.OnAfterShow(),this.UpdateIcon()}OnIconPathChanged(e){if(void 0!==this.drl){var i=this.GetSprite(1);i.SetUIActive(!0),this.LoadIcon(i,e);const r=this.drl.LocateInGround();this.drl.IsMultiMap()?this.GetChildIconComponentAsync().then(e=>{var i;e.IsDestroyOrDestroying||(i=r&&this.drl.IsSelectThisFloor,e.SetUiActive(!i),e.Icon=ConfigManager_1.ConfigManager.UiResourceConfig.GetResourcePath(this.drl.IsSelectThisFloor?WorldMapDefine_1.MULTI_MAP_SELECT_ICON_PATH:WorldMapDefine_1.MULTI_MAP_ICON_PATH))}):this.ChildIconComponentInternal?.SetUiActive(!1)}}}exports.CaveHoleMarkItemView=CaveHoleMarkItemView;
//# sourceMappingURL=CaveHoleMarkItemView.js.map