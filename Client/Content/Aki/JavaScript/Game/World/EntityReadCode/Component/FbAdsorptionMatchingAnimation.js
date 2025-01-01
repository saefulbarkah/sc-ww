
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbAdsorptionMatchingAnimation=void 0;const FbVectorInfo_1=require("../Var/FbVectorInfo");class FbAdsorptionMatchingAnimation{constructor(t){this.FbDataInternal=t,this.b2h=!1,this.L2h=void 0,this.A2h=!1,this.R2h=void 0,this.x2h=!1,this.w2h=void 0,this.J2h=!1,this.Z2h=void 0}static Create(t){if(t)return new FbAdsorptionMatchingAnimation(t)}get MatchPos(){return this.b2h||(this.b2h=!0,this.L2h=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.matchPos())),this.L2h}get MatchRot(){return this.A2h||(this.A2h=!0,this.R2h=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.matchRot())),this.R2h}get MatchReferenceKey(){return this.x2h||(this.x2h=!0,this.w2h=this.FbDataInternal.matchReferenceKey()),this.w2h}get MoveCurve(){return this.J2h||(this.J2h=!0,this.Z2h=this.FbDataInternal.moveCurve()),this.Z2h}}exports.FbAdsorptionMatchingAnimation=FbAdsorptionMatchingAnimation;
//# sourceMappingURL=FbAdsorptionMatchingAnimation.js.map