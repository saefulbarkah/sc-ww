
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbItemFoundation=void 0;const FbAdsortTransform_1=require("./FbAdsortTransform"),FbEntityMatch_1=require("./FbEntityMatch"),FbItemChangeAdsorbateState_1=require("./FbItemChangeAdsorbateState");class FbItemFoundation{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.YOh=!1,this.zOh=void 0,this.JOh=!1,this.ZOh=void 0,this.e2h=!1,this.t2h=void 0,this.i2h=!1,this.r2h=!1,this.bEh=!1,this.LEh=!1,this.o2h=!1,this.n2h=void 0}static Create(t){if(t)return new FbItemFoundation(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get AdsorptionPoint(){return this.YOh||(this.YOh=!0,this.zOh=FbAdsortTransform_1.FbAdsortTransform.Create(this.FbDataInternal.adsorptionPoint())),this.zOh}get AdsorptionMatch(){return this.JOh||(this.JOh=!0,this.ZOh=FbEntityMatch_1.FbEntityMatch.Create(this.FbDataInternal.adsorptionMatch())),this.ZOh}get ActiveMatch(){return this.e2h||(this.e2h=!0,this.t2h=FbEntityMatch_1.FbEntityMatch.Create(this.FbDataInternal.activeMatch())),this.t2h}get IsSilent(){return this.i2h||(this.i2h=!0,this.r2h=this.FbDataInternal.isSilent()),this.r2h}get IsDestroy(){return this.bEh||(this.bEh=!0,this.LEh=this.FbDataInternal.isDestroy()),this.LEh}get ChangeAdsorbateState(){return this.o2h||(this.o2h=!0,this.n2h=FbItemChangeAdsorbateState_1.FbItemChangeAdsorbateState.Create(this.FbDataInternal.changeAdsorbateState())),this.n2h}}exports.FbItemFoundation=FbItemFoundation;
//# sourceMappingURL=FbItemFoundation.js.map