
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbLevelPrefabParamsConfig=void 0;const UnionParamsPresetHelper_1=require("../Var/UnionParamsPresetHelper");class FbLevelPrefabParamsConfig{constructor(e){this.FbDataInternal=e,this.MYh=!1,this.EYh=void 0,this.m_h=!1,this.C_h=void 0}static Create(e){if(e)return new FbLevelPrefabParamsConfig(e)}get ReferenceActorKey(){return this.MYh||(this.MYh=!0,this.EYh=this.FbDataInternal.referenceActorKey()),this.EYh}get Params(){var e,s;return!this.m_h&&(this.m_h=!0,e=this.FbDataInternal.paramsType(),s=UnionParamsPresetHelper_1.UnionParamsPresetHelper.GetUnionParamsPresetObject(e))&&(this.C_h=UnionParamsPresetHelper_1.UnionParamsPresetHelper.ReadUnionParamsPreset(e,this.FbDataInternal.params(s))),this.C_h}}exports.FbLevelPrefabParamsConfig=FbLevelPrefabParamsConfig;
//# sourceMappingURL=FbLevelPrefabParamsConfig.js.map