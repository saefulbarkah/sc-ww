
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbColorPiece=void 0;class FbColorPiece{constructor(t){this.FbDataInternal=t,this.RIh=!1,this.xIh=void 0}static Create(t){if(t)return new FbColorPiece(t)}get Color(){return this.RIh||(this.RIh=!0,this.xIh=this.FbDataInternal.color()),this.xIh}}exports.FbColorPiece=FbColorPiece;
//# sourceMappingURL=FbColorPiece.js.map