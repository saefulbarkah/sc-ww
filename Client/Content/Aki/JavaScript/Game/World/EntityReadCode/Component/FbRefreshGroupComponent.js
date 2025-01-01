
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbRefreshGroupComponent=void 0;const FbStateChangeConfig_1=require("./FbStateChangeConfig"),UnionRefreshContentHelper_1=require("./UnionRefreshContentHelper"),UnionRefreshRuleHelper_1=require("./UnionRefreshRuleHelper");class FbRefreshGroupComponent{constructor(e){this.FbDataInternal=e,this.p_h=!1,this.v_h=!1,this.V_h=!1,this.j_h=void 0,this.SBh=!1,this.MBh=void 0,this.KDh=!1,this.$Dh=void 0,this.EBh=!1,this.IBh=void 0}static Create(e){if(e)return new FbRefreshGroupComponent(e)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get EntityIds(){if(!this.V_h){this.V_h=!0,this.j_h=new Array;var t=this.FbDataInternal.entityIdsLength();if(t)for(let e=0;e<t;++e)this.j_h.push(this.FbDataInternal.entityIds(e))}return this.j_h}get RefreshContent(){var e,t;return!this.SBh&&(this.SBh=!0,e=this.FbDataInternal.refreshContentType(),t=UnionRefreshContentHelper_1.UnionRefreshContentHelper.GetUnionRefreshContentObject(e))&&(this.MBh=UnionRefreshContentHelper_1.UnionRefreshContentHelper.ReadUnionRefreshContent(e,this.FbDataInternal.refreshContent(t))),this.MBh}get RefreshRule(){var e,t;return!this.KDh&&(this.KDh=!0,e=this.FbDataInternal.refreshRuleType(),t=UnionRefreshRuleHelper_1.UnionRefreshRuleHelper.GetUnionRefreshRuleObject(e))&&(this.$Dh=UnionRefreshRuleHelper_1.UnionRefreshRuleHelper.ReadUnionRefreshRule(e,this.FbDataInternal.refreshRule(t))),this.$Dh}get StateChangeConfig(){return this.EBh||(this.EBh=!0,this.IBh=FbStateChangeConfig_1.FbStateChangeConfig.Create(this.FbDataInternal.stateChangeConfig())),this.IBh}}exports.FbRefreshGroupComponent=FbRefreshGroupComponent;
//# sourceMappingURL=FbRefreshGroupComponent.js.map