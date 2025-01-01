
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbChangeState=void 0;class FbChangeState{constructor(t){this.FbDataInternal=t,this.A_h=!1,this.R_h=0}static Create(t){if(t)return new FbChangeState(t)}get StateId(){return this.A_h||(this.A_h=!0,this.R_h=this.FbDataInternal.stateId()),this.R_h}}exports.FbChangeState=FbChangeState;
//# sourceMappingURL=FbChangeState.js.map