
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbFreeAngleItem=void 0;class FbFreeAngleItem{constructor(t){this.FbDataInternal=t,this.cHh=!1,this.uHh=0,this.dHh=!1,this.mHh=0}static Create(t){if(t)return new FbFreeAngleItem(t)}get InitAngle(){return this.cHh||(this.cHh=!0,this.uHh=this.FbDataInternal.initAngle()),this.uHh}get TargetAngle(){return this.dHh||(this.dHh=!0,this.mHh=this.FbDataInternal.targetAngle()),this.mHh}}exports.FbFreeAngleItem=FbFreeAngleItem;
//# sourceMappingURL=FbFreeAngleItem.js.map