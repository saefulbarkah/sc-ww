
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbWait=void 0;class FbWait{constructor(t){this.FbDataInternal=t,this.G_h=!1,this.O_h=0,this.Fph=!1,this.Nph=0,this.bch=!1,this.Lch=!1}static Create(t){if(t)return new FbWait(t)}get Min(){return this.G_h||(this.G_h=!0,this.O_h=this.FbDataInternal.min()),this.O_h}get Time(){return this.Fph||(this.Fph=!0,this.Nph=this.FbDataInternal.time()),this.Nph}get BanInput(){return this.bch||(this.bch=!0,this.Lch=this.FbDataInternal.banInput()),this.Lch}}exports.FbWait=FbWait;
//# sourceMappingURL=FbWait.js.map