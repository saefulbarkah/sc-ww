
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbAirPassageMove=void 0;class FbAirPassageMove{constructor(t){this.FbDataInternal=t,this.u_h=!1,this.f8o=void 0,this.Dbh=!1,this.Bbh=0,this.qbh=!1,this.kbh=!1,this.SZ_=!1,this.MZ_=0}static Create(t){if(t)return new FbAirPassageMove(t)}get Type(){return this.u_h||(this.u_h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get MaxOffsetDistance(){return this.Dbh||(this.Dbh=!0,this.Bbh=this.FbDataInternal.maxOffsetDistance()),this.Bbh}get IsOneWay(){return this.qbh||(this.qbh=!0,this.kbh=this.FbDataInternal.isOneWay()),this.kbh}get LayerVerticalLimit(){return this.SZ_||(this.SZ_=!0,this.MZ_=this.FbDataInternal.layerVerticalLimit()),this.MZ_}}exports.FbAirPassageMove=FbAirPassageMove;
//# sourceMappingURL=FbAirPassageMove.js.map