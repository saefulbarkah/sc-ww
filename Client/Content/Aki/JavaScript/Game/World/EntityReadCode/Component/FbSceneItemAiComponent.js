
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbSceneItemAiComponent=void 0;const UnionSceneItemAiTypeHelper_1=require("./UnionSceneItemAiTypeHelper");class FbSceneItemAiComponent{constructor(e){this.FbDataInternal=e,this.p_h=!1,this.v_h=!1,this.IYh=!1,this.TYh=void 0}static Create(e){if(e)return new FbSceneItemAiComponent(e)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get AiConfig(){var e,t;return!this.IYh&&(this.IYh=!0,e=this.FbDataInternal.aiConfigType(),t=UnionSceneItemAiTypeHelper_1.UnionSceneItemAiTypeHelper.GetUnionSceneItemAiTypeObject(e))&&(this.TYh=UnionSceneItemAiTypeHelper_1.UnionSceneItemAiTypeHelper.ReadUnionSceneItemAiType(e,this.FbDataInternal.aiConfig(t))),this.TYh}}exports.FbSceneItemAiComponent=FbSceneItemAiComponent;
//# sourceMappingURL=FbSceneItemAiComponent.js.map