
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbEntityState=void 0;class FbEntityState{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.Bch=!1,this.Cbo=void 0}static Create(t){if(t)return new FbEntityState(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get State(){return this.Bch||(this.Bch=!0,this.Cbo=this.FbDataInternal.state()),this.Cbo}}exports.FbEntityState=FbEntityState;
//# sourceMappingURL=FbEntityState.js.map