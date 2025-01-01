
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbAdjustHorizontalCamera=void 0;const FbBaseCurve_1=require("./FbBaseCurve"),FbCameraDepthOfField_1=require("./FbCameraDepthOfField"),FbVectorInfo_1=require("../Var/FbVectorInfo");class FbAdjustHorizontalCamera{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.NIh=!1,this.cui=0,this.mch=!1,this.Cch=0,this.VIh=!1,this.jIh=void 0,this.pch=!1,this.vch=0,this.HIh=!1,this.WIh=void 0,this.QIh=!1,this.KIh=0,this.$Ih=!1,this.XIh=0,this.YIh=!1,this.zIh=0,this.Kdh=!1,this.$dh=void 0,this.JIh=!1,this.ZIh=void 0,this.Ich=!1,this.Tch=0,this.eTh=!1,this.tTh=!1,this.kuh=!1,this.Guh=0,this.gTh=!1,this.fTh=0,this.pTh=!1,this.vTh=0,this.xTh=!1,this.wTh=void 0}static Create(t){if(t)return new FbAdjustHorizontalCamera(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get Priority(){return this.NIh||(this.NIh=!0,this.cui=this.FbDataInternal.priority()),this.cui}get FadeInTime(){return this.mch||(this.mch=!0,this.Cch=this.FbDataInternal.fadeInTime()),this.Cch}get FadeInCurve(){return this.VIh||(this.VIh=!0,this.jIh=FbBaseCurve_1.FbBaseCurve.Create(this.FbDataInternal.fadeInCurve())),this.jIh}get FadeOutTime(){return this.pch||(this.pch=!0,this.vch=this.FbDataInternal.fadeOutTime()),this.vch}get FadeOutCurve(){return this.HIh||(this.HIh=!0,this.WIh=FbBaseCurve_1.FbBaseCurve.Create(this.FbDataInternal.fadeOutCurve())),this.WIh}get ArmLength(){return this.QIh||(this.QIh=!0,this.KIh=this.FbDataInternal.armLength()),this.KIh}get MinumArmLength(){return this.$Ih||(this.$Ih=!0,this.XIh=this.FbDataInternal.minumArmLength()),this.XIh}get MaxiumArmLength(){return this.YIh||(this.YIh=!0,this.zIh=this.FbDataInternal.maxiumArmLength()),this.zIh}get Offset(){return this.Kdh||(this.Kdh=!0,this.$dh=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.offset())),this.$dh}get ArmOffset(){return this.JIh||(this.JIh=!0,this.ZIh=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.armOffset())),this.ZIh}get Fov(){return this.Ich||(this.Ich=!0,this.Tch=this.FbDataInternal.fov()),this.Tch}get IsDisableResetFocus(){return this.eTh||(this.eTh=!0,this.tTh=this.FbDataInternal.isDisableResetFocus()),this.tTh}get SplineEntityId(){return this.kuh||(this.kuh=!0,this.Guh=this.FbDataInternal.splineEntityId()),this.Guh}get YawAngle(){return this.gTh||(this.gTh=!0,this.fTh=this.FbDataInternal.yawAngle()),this.fTh}get PitchAngle(){return this.pTh||(this.pTh=!0,this.vTh=this.FbDataInternal.pitchAngle()),this.vTh}get DepthOfField(){return this.xTh||(this.xTh=!0,this.wTh=FbCameraDepthOfField_1.FbCameraDepthOfField.Create(this.FbDataInternal.depthOfField())),this.wTh}}exports.FbAdjustHorizontalCamera=FbAdjustHorizontalCamera;
//# sourceMappingURL=FbAdjustHorizontalCamera.js.map