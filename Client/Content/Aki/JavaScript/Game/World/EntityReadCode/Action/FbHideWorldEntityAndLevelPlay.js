
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbHideWorldEntityAndLevelPlay=void 0;class FbHideWorldEntityAndLevelPlay{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.oRh=!1,this.nRh=void 0}static Create(t){if(t)return new FbHideWorldEntityAndLevelPlay(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get ExcludeEntities(){if(!this.oRh){this.oRh=!0,this.nRh=new Array;var i=this.FbDataInternal.excludeEntitiesLength();if(i)for(let t=0;t<i;++t)this.nRh.push(this.FbDataInternal.excludeEntities(t))}return this.nRh}}exports.FbHideWorldEntityAndLevelPlay=FbHideWorldEntityAndLevelPlay;
//# sourceMappingURL=FbHideWorldEntityAndLevelPlay.js.map