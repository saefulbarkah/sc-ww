
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbVisionCaptureComponent=void 0;class FbVisionCaptureComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.u4h=!1,this.d4h=0,this.m4h=!1,this.C4h=0}static Create(t){if(t)return new FbVisionCaptureComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get VisionCaptureId(){return this.u4h||(this.u4h=!0,this.d4h=this.FbDataInternal.visionCaptureId()),this.d4h}get VisionCaptureProb(){return this.m4h||(this.m4h=!0,this.C4h=this.FbDataInternal.visionCaptureProb()),this.C4h}}exports.FbVisionCaptureComponent=FbVisionCaptureComponent;
//# sourceMappingURL=FbVisionCaptureComponent.js.map