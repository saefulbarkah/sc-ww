
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbAudioPointNearbyTracking=void 0;class FbAudioPointNearbyTracking{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.I5h=!1,this.T5h=0,this.b5h=!1,this.L5h=0,this.A5h=!1,this.R5h=0}static Create(t){if(t)return new FbAudioPointNearbyTracking(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get NearRadius(){return this.I5h||(this.I5h=!0,this.T5h=this.FbDataInternal.nearRadius()),this.T5h}get MiddleRadius(){return this.b5h||(this.b5h=!0,this.L5h=this.FbDataInternal.middleRadius()),this.L5h}get FarRadius(){return this.A5h||(this.A5h=!0,this.R5h=this.FbDataInternal.farRadius()),this.R5h}}exports.FbAudioPointNearbyTracking=FbAudioPointNearbyTracking;
//# sourceMappingURL=FbAudioPointNearbyTracking.js.map