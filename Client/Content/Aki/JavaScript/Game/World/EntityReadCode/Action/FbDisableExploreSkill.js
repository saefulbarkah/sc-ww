
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbDisableExploreSkill=void 0;class FbDisableExploreSkill{constructor(t){this.FbDataInternal=t,this.eSh=!1,this.tSh=!1,this.vh_=!1,this.yh_=!1,this.Sh_=!1,this.Mh_=void 0}static Create(t){if(t)return new FbDisableExploreSkill(t)}get PlaceTemporaryTeleport(){return this.eSh||(this.eSh=!0,this.tSh=this.FbDataInternal.placeTemporaryTeleport()),this.tSh}get IsComplementary(){return this.vh_||(this.vh_=!0,this.yh_=this.FbDataInternal.isComplementary()),this.yh_}get ExploreSkillList(){if(!this.Sh_){this.Sh_=!0,this.Mh_=new Array;var i=this.FbDataInternal.exploreSkillListLength();if(i)for(let t=0;t<i;++t)this.Mh_.push(this.FbDataInternal.exploreSkillList(t))}return this.Mh_}}exports.FbDisableExploreSkill=FbDisableExploreSkill;
//# sourceMappingURL=FbDisableExploreSkill.js.map