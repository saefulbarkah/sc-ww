
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbNpcStandbyShowLooply=void 0;const FbMontageId_1=require("../Action/FbMontageId"),FbIgnoreEntityIdsCollision_1=require("./FbIgnoreEntityIdsCollision");class FbNpcStandbyShowLooply{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.mgh=!1,this.Cgh=void 0,this.jVh=!1,this.HVh=void 0,this.Qfh=!1,this.Kfh=0,this.WVh=!1,this.QVh=void 0}static Create(t){if(t)return new FbNpcStandbyShowLooply(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get Montage(){return this.mgh||(this.mgh=!0,this.Cgh=this.FbDataInternal.montage()),this.Cgh}get RegisteredMontageId(){return this.jVh||(this.jVh=!0,this.HVh=FbMontageId_1.FbMontageId.Create(this.FbDataInternal.registeredMontageId())),this.HVh}get FaceExpressionId(){return this.Qfh||(this.Qfh=!0,this.Kfh=this.FbDataInternal.faceExpressionId()),this.Kfh}get IgnoreEntityCollision(){return this.WVh||(this.WVh=!0,this.QVh=FbIgnoreEntityIdsCollision_1.FbIgnoreEntityIdsCollision.Create(this.FbDataInternal.ignoreEntityCollision())),this.QVh}}exports.FbNpcStandbyShowLooply=FbNpcStandbyShowLooply;
//# sourceMappingURL=FbNpcStandbyShowLooply.js.map