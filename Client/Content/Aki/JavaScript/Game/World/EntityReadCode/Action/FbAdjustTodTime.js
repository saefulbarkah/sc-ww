
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbAdjustTodTime=void 0;class FbAdjustTodTime{constructor(t){this.FbDataInternal=t,this.q_h=!1,this.k_h=0,this.G_h=!1,this.O_h=0,this.F_h=!1,this.N_h=!1}static Create(t){if(t)return new FbAdjustTodTime(t)}get Hour(){return this.q_h||(this.q_h=!0,this.k_h=this.FbDataInternal.hour()),this.k_h}get Min(){return this.G_h||(this.G_h=!0,this.O_h=this.FbDataInternal.min()),this.O_h}get ShowUi(){return this.F_h||(this.F_h=!0,this.N_h=this.FbDataInternal.showUi()),this.N_h}}exports.FbAdjustTodTime=FbAdjustTodTime;
//# sourceMappingURL=FbAdjustTodTime.js.map