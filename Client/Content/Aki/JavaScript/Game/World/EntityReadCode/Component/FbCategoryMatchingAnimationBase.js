
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbCategoryMatchingAnimationBase=void 0;const FbVectorInfo_1=require("../Var/FbVectorInfo");class FbCategoryMatchingAnimationBase{constructor(t){this.FbDataInternal=t,this.b2h=!1,this.L2h=void 0,this.A2h=!1,this.R2h=void 0,this.x2h=!1,this.w2h=void 0}static Create(t){if(t)return new FbCategoryMatchingAnimationBase(t)}get MatchPos(){return this.b2h||(this.b2h=!0,this.L2h=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.matchPos())),this.L2h}get MatchRot(){return this.A2h||(this.A2h=!0,this.R2h=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.matchRot())),this.R2h}get MatchReferenceKey(){return this.x2h||(this.x2h=!0,this.w2h=this.FbDataInternal.matchReferenceKey()),this.w2h}}exports.FbCategoryMatchingAnimationBase=FbCategoryMatchingAnimationBase;
//# sourceMappingURL=FbCategoryMatchingAnimationBase.js.map