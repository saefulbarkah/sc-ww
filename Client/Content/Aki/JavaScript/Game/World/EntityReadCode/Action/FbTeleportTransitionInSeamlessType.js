
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbTeleportTransitionInSeamlessType=void 0;const FbFloorSettings_1=require("./FbFloorSettings");class FbTeleportTransitionInSeamlessType{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.q0h=!1,this.k0h=void 0,this.G0h=!1,this.O0h=0,this.F0h=!1,this.N0h=0,this.V0h=!1,this.j0h=0,this.H0h=!1,this.W0h=void 0}static Create(t){if(t)return new FbTeleportTransitionInSeamlessType(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get EffectDaPath(){return this.q0h||(this.q0h=!0,this.k0h=this.FbDataInternal.effectDaPath()),this.k0h}get LeastTime(){return this.G0h||(this.G0h=!0,this.O0h=this.FbDataInternal.leastTime()),this.O0h}get EffectExpandTime(){return this.F0h||(this.F0h=!0,this.N0h=this.FbDataInternal.effectExpandTime()),this.N0h}get EffectCollapseTime(){return this.V0h||(this.V0h=!0,this.j0h=this.FbDataInternal.effectCollapseTime()),this.j0h}get FloorSettings(){return this.H0h||(this.H0h=!0,this.W0h=FbFloorSettings_1.FbFloorSettings.Create(this.FbDataInternal.floorSettings())),this.W0h}}exports.FbTeleportTransitionInSeamlessType=FbTeleportTransitionInSeamlessType;
//# sourceMappingURL=FbTeleportTransitionInSeamlessType.js.map