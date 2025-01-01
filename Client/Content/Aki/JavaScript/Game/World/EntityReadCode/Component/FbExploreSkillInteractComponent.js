
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbExploreSkillInteractComponent=void 0;const FbIgnoresCollisionCfg_1=require("./FbIgnoresCollisionCfg"),UnionExploreSkillInteractOptionHelper_1=require("./UnionExploreSkillInteractOptionHelper"),UnionExploreSkillSearchTargetCfgHelper_1=require("./UnionExploreSkillSearchTargetCfgHelper"),UnionMatchRoleOptionHelper_1=require("../Match/UnionMatchRoleOptionHelper");class FbExploreSkillInteractComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.t9l=!1,this.i9l=void 0,this.V1h=!1,this.Hye=void 0,this.fGh=!1,this.pGh=0,this.qDh=!1,this.PAe=void 0,this.$Fh=!1,this.XFh=void 0,this.qWh=!1,this.kWh=void 0}static Create(t){if(t)return new FbExploreSkillInteractComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get ExploreSkillUiResource(){return this.t9l||(this.t9l=!0,this.i9l=this.FbDataInternal.exploreSkillUiResource()),this.i9l}get Option(){var t,i;return!this.V1h&&(this.V1h=!0,t=this.FbDataInternal.optionType(),i=UnionExploreSkillInteractOptionHelper_1.UnionExploreSkillInteractOptionHelper.GetUnionExploreSkillInteractOptionObject(t))&&(this.Hye=UnionExploreSkillInteractOptionHelper_1.UnionExploreSkillInteractOptionHelper.ReadUnionExploreSkillInteractOption(t,this.FbDataInternal.option(i))),this.Hye}get PlayerStateRestritionId(){return this.fGh||(this.fGh=!0,this.pGh=this.FbDataInternal.playerStateRestritionId()),this.pGh}get MatchRoleOption(){if(!this.qDh){this.qDh=!0,this.PAe=new Array;var i=this.FbDataInternal.matchRoleOptionLength();if(i)for(let t=0;t<i;++t){var e=this.FbDataInternal.matchRoleOptionType(t),r=UnionMatchRoleOptionHelper_1.UnionMatchRoleOptionHelper.GetUnionMatchRoleOptionObject(e);r&&void 0!==(e=UnionMatchRoleOptionHelper_1.UnionMatchRoleOptionHelper.ReadUnionMatchRoleOption(e,this.FbDataInternal.matchRoleOption(t,r)))&&this.PAe.push(e)}}return this.PAe}get SearchTargetCfg(){var t,i;return!this.$Fh&&(this.$Fh=!0,t=this.FbDataInternal.searchTargetCfgType(),i=UnionExploreSkillSearchTargetCfgHelper_1.UnionExploreSkillSearchTargetCfgHelper.GetUnionExploreSkillSearchTargetCfgObject(t))&&(this.XFh=UnionExploreSkillSearchTargetCfgHelper_1.UnionExploreSkillSearchTargetCfgHelper.ReadUnionExploreSkillSearchTargetCfg(t,this.FbDataInternal.searchTargetCfg(i))),this.XFh}get IgnoresCollisionCfg(){return this.qWh||(this.qWh=!0,this.kWh=FbIgnoresCollisionCfg_1.FbIgnoresCollisionCfg.Create(this.FbDataInternal.ignoresCollisionCfg())),this.kWh}}exports.FbExploreSkillInteractComponent=FbExploreSkillInteractComponent;
//# sourceMappingURL=FbExploreSkillInteractComponent.js.map