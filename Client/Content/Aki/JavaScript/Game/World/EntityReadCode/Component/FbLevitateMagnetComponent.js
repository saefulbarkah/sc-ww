
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbLevitateMagnetComponent=void 0;class FbLevitateMagnetComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.Y9h=!1,this.z9h=0,this.UHh=!1,this.DHh=0}static Create(t){if(t)return new FbLevitateMagnetComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get MoveSpeed(){return this.Y9h||(this.Y9h=!0,this.z9h=this.FbDataInternal.moveSpeed()),this.z9h}get Test(){return this.UHh||(this.UHh=!0,this.DHh=this.FbDataInternal.test()),this.DHh}}exports.FbLevitateMagnetComponent=FbLevitateMagnetComponent;
//# sourceMappingURL=FbLevitateMagnetComponent.js.map