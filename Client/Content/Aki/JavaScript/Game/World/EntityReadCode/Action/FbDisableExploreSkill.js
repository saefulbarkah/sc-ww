
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbDisableExploreSkill=void 0;class FbDisableExploreSkill{constructor(e){this.FbDataInternal=e,this.eSh=!1,this.tSh=!1}static Create(e){if(e)return new FbDisableExploreSkill(e)}get PlaceTemporaryTeleport(){return this.eSh||(this.eSh=!0,this.tSh=this.FbDataInternal.placeTemporaryTeleport()),this.tSh}}exports.FbDisableExploreSkill=FbDisableExploreSkill;
//# sourceMappingURL=FbDisableExploreSkill.js.map