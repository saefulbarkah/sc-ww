
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbNoRenderPortalComponent=void 0;const UnionNoRenderPortalConfigHelper_1=require("./UnionNoRenderPortalConfigHelper");class FbNoRenderPortalComponent{constructor(e){this.FbDataInternal=e,this.p_h=!1,this.v_h=!1,this.bSh=!1,this.TAe=void 0}static Create(e){if(e)return new FbNoRenderPortalComponent(e)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get Config(){var e,t;return!this.bSh&&(this.bSh=!0,e=this.FbDataInternal.configType(),t=UnionNoRenderPortalConfigHelper_1.UnionNoRenderPortalConfigHelper.GetUnionNoRenderPortalConfigObject(e))&&(this.TAe=UnionNoRenderPortalConfigHelper_1.UnionNoRenderPortalConfigHelper.ReadUnionNoRenderPortalConfig(e,this.FbDataInternal.config(t))),this.TAe}}exports.FbNoRenderPortalComponent=FbNoRenderPortalComponent;
//# sourceMappingURL=FbNoRenderPortalComponent.js.map