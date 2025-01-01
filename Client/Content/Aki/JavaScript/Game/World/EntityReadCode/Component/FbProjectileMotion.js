
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbProjectileMotion=void 0;const FbSpeedCurveMotion_1=require("./FbSpeedCurveMotion");class FbProjectileMotion{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.RNh=!1,this.xNh=0,this.UNh=!1,this.DNh=0,this.NNh=!1,this.VNh=void 0,this.jNh=!1,this.HNh=void 0}static Create(t){if(t)return new FbProjectileMotion(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get Velocity(){return this.RNh||(this.RNh=!0,this.xNh=this.FbDataInternal.velocity()),this.xNh}get AngularVelocity(){return this.UNh||(this.UNh=!0,this.DNh=this.FbDataInternal.angularVelocity()),this.DNh}get CameraShake(){return this.NNh||(this.NNh=!0,this.VNh=this.FbDataInternal.cameraShake()),this.VNh}get MatchSpeedCurve(){return this.jNh||(this.jNh=!0,this.HNh=FbSpeedCurveMotion_1.FbSpeedCurveMotion.Create(this.FbDataInternal.matchSpeedCurve())),this.HNh}}exports.FbProjectileMotion=FbProjectileMotion;
//# sourceMappingURL=FbProjectileMotion.js.map