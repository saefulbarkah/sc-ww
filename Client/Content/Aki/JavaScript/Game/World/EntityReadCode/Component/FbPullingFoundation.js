
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbPullingFoundation=void 0;const UnionPullingFoundationHelper_1=require("./UnionPullingFoundationHelper");class FbPullingFoundation{constructor(i){this.FbDataInternal=i,this.p_h=!1,this.v_h=!1,this.bSh=!1,this.TAe=void 0}static Create(i){if(i)return new FbPullingFoundation(i)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get Config(){var i,t;return!this.bSh&&(this.bSh=!0,i=this.FbDataInternal.configType(),t=UnionPullingFoundationHelper_1.UnionPullingFoundationHelper.GetUnionPullingFoundationObject(i))&&(this.TAe=UnionPullingFoundationHelper_1.UnionPullingFoundationHelper.ReadUnionPullingFoundation(i,this.FbDataInternal.config(t))),this.TAe}}exports.FbPullingFoundation=FbPullingFoundation;
//# sourceMappingURL=FbPullingFoundation.js.map