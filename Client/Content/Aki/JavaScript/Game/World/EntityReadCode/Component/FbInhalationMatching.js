
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbInhalationMatching=void 0;const FbCategoryMatchingCondition_1=require("./FbCategoryMatchingCondition");class FbInhalationMatching{constructor(t){this.FbDataInternal=t,this.oYh=!1,this.nYh=0,this.g2h=!1,this.f2h=void 0}static Create(t){if(t)return new FbInhalationMatching(t)}get InhalationStrength(){return this.oYh||(this.oYh=!0,this.nYh=this.FbDataInternal.inhalationStrength()),this.nYh}get EntityMatch(){return this.g2h||(this.g2h=!0,this.f2h=FbCategoryMatchingCondition_1.FbCategoryMatchingCondition.Create(this.FbDataInternal.entityMatch())),this.f2h}}exports.FbInhalationMatching=FbInhalationMatching;
//# sourceMappingURL=FbInhalationMatching.js.map