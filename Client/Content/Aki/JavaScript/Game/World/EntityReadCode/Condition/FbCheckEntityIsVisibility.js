
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbCheckEntityIsVisibility=void 0;class FbCheckEntityIsVisibility{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.j1h=!1,this.I9o=0,this.tMh=!1,this.ASo=!1}static Create(t){if(t)return new FbCheckEntityIsVisibility(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get EntityId(){return this.j1h||(this.j1h=!0,this.I9o=this.FbDataInternal.entityId()),this.I9o}get IsVisible(){return this.tMh||(this.tMh=!0,this.ASo=this.FbDataInternal.isVisible()),this.ASo}}exports.FbCheckEntityIsVisibility=FbCheckEntityIsVisibility;
//# sourceMappingURL=FbCheckEntityIsVisibility.js.map