
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbChangeActorMPC=void 0;class FbChangeActorMPC{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.qLh=!1,this.kLh=void 0}static Create(t){if(t)return new FbChangeActorMPC(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get MpcData(){return this.qLh||(this.qLh=!0,this.kLh=this.FbDataInternal.mpcData()),this.kLh}}exports.FbChangeActorMPC=FbChangeActorMPC;
//# sourceMappingURL=FbChangeActorMPC.js.map