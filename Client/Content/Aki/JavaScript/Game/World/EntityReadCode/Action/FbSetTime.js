
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbSetTime=void 0;class FbSetTime{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.Fph=!1,this.Nph=0}static Create(t){if(t)return new FbSetTime(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get Time(){return this.Fph||(this.Fph=!0,this.Nph=this.FbDataInternal.time()),this.Nph}}exports.FbSetTime=FbSetTime;
//# sourceMappingURL=FbSetTime.js.map