
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MediumItemGridHalfAreaComponent=void 0;const UE=require("ue"),ConfigManager_1=require("../../../../Manager/ConfigManager"),MediumItemGridComponent_1=require("./MediumItemGridComponent");class MediumItemGridHalfAreaComponent extends MediumItemGridComponent_1.MediumItemGridComponent{GetResourceId(){return"UiItem_ItemTagTeam"}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UISprite]]}OnRefresh(e){0===e?.BelongTo?this.SetSpriteByPath(ConfigManager_1.ConfigManager.UiResourceConfig.GetResourcePath("SP_ComTagTeam1"),this.GetSprite(0),!1):1===e?.BelongTo&&this.SetSpriteByPath(ConfigManager_1.ConfigManager.UiResourceConfig.GetResourcePath("SP_ComTagTeam2"),this.GetSprite(0),!1)}}exports.MediumItemGridHalfAreaComponent=MediumItemGridHalfAreaComponent;
//# sourceMappingURL=MediumItemGridHalfAreaComponent.js.map