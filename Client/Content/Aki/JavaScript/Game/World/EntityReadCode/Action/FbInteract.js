
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbInteract=void 0;class FbInteract{constructor(t){this.FbDataInternal=t,this.G1h=!1,this.O1h=0,this.F1h=!1,this.N1h=void 0}static Create(t){if(t)return new FbInteract(t)}get Who(){return this.G1h||(this.G1h=!0,this.O1h=this.FbDataInternal.who()),this.O1h}get Param(){return this.F1h||(this.F1h=!0,this.N1h=this.FbDataInternal.param()),this.N1h}}exports.FbInteract=FbInteract;
//# sourceMappingURL=FbInteract.js.map