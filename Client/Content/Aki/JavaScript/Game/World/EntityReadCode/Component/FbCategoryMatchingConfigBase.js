
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbCategoryMatchingConfigBase=void 0;const FbCategoryMatchingAnimationBase_1=require("./FbCategoryMatchingAnimationBase"),FbCategoryMatchingCondition_1=require("./FbCategoryMatchingCondition"),FbCategoryMatchingSucceedBase_1=require("./FbCategoryMatchingSucceedBase");class FbCategoryMatchingConfigBase{constructor(t){this.FbDataInternal=t,this.Z1h=!1,this.X6o=void 0,this._2h=!1,this.c2h=void 0,this.u2h=!1,this.d2h=void 0}static Create(t){if(t)return new FbCategoryMatchingConfigBase(t)}get Condition(){return this.Z1h||(this.Z1h=!0,this.X6o=FbCategoryMatchingCondition_1.FbCategoryMatchingCondition.Create(this.FbDataInternal.condition())),this.X6o}get Animation(){return this._2h||(this._2h=!0,this.c2h=FbCategoryMatchingAnimationBase_1.FbCategoryMatchingAnimationBase.Create(this.FbDataInternal.animation())),this.c2h}get Callback(){return this.u2h||(this.u2h=!0,this.d2h=FbCategoryMatchingSucceedBase_1.FbCategoryMatchingSucceedBase.Create(this.FbDataInternal.callback())),this.d2h}}exports.FbCategoryMatchingConfigBase=FbCategoryMatchingConfigBase;
//# sourceMappingURL=FbCategoryMatchingConfigBase.js.map