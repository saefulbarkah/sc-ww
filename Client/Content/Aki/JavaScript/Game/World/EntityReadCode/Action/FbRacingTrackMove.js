
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbRacingTrackMove=void 0;class FbRacingTrackMove{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.Dbh=!1,this.Bbh=0,this.qbh=!1,this.kbh=!1,this.Gbh=!1,this.Obh=0}static Create(t){if(t)return new FbRacingTrackMove(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get MaxOffsetDistance(){return this.Dbh||(this.Dbh=!0,this.Bbh=this.FbDataInternal.maxOffsetDistance()),this.Bbh}get IsOneWay(){return this.qbh||(this.qbh=!0,this.kbh=this.FbDataInternal.isOneWay()),this.kbh}get DirectionAngleLimit(){return this.Gbh||(this.Gbh=!0,this.Obh=this.FbDataInternal.directionAngleLimit()),this.Obh}}exports.FbRacingTrackMove=FbRacingTrackMove;
//# sourceMappingURL=FbRacingTrackMove.js.map