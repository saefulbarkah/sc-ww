
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbPathLineMove=void 0;class FbPathLineMove{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.Dbh=!1,this.Bbh=0,this.qbh=!1,this.kbh=!1}static Create(t){if(t)return new FbPathLineMove(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get MaxOffsetDistance(){return this.Dbh||(this.Dbh=!0,this.Bbh=this.FbDataInternal.maxOffsetDistance()),this.Bbh}get IsOneWay(){return this.qbh||(this.qbh=!0,this.kbh=this.FbDataInternal.isOneWay()),this.kbh}}exports.FbPathLineMove=FbPathLineMove;
//# sourceMappingURL=FbPathLineMove.js.map