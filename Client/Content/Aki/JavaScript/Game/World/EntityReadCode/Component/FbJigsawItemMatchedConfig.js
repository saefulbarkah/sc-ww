
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbJigsawItemMatchedConfig=void 0;const fb_action_1=require("../../../../Game/World/EntityFb/fb-action"),fb_component_1=require("../../../../Game/World/EntityFb/fb-component"),FbActionInfo_1=require("../Action/FbActionInfo"),FbPieceIndex_1=require("../Action/FbPieceIndex"),FbConditionAction_1=require("./FbConditionAction");class FbJigsawItemMatchedConfig{constructor(t){this.FbDataInternal=t,this.qFh=!1,this.kFh=void 0,this.GFh=!1,this.OFh=void 0,this.l_h=!1,this.__h=void 0,this.FFh=!1,this.NFh=void 0,this.VFh=!1,this.jFh=void 0}static Create(t){if(t)return new FbJigsawItemMatchedConfig(t)}get TargetIndex(){return this.qFh||(this.qFh=!0,this.kFh=FbPieceIndex_1.FbPieceIndex.Create(this.FbDataInternal.targetIndex())),this.kFh}get JigsawItemIds(){if(!this.GFh){this.GFh=!0,this.OFh=new Array;var i=this.FbDataInternal.jigsawItemIdsLength();if(i)for(let t=0;t<i;++t)this.OFh.push(this.FbDataInternal.jigsawItemIds(t))}return this.OFh}get Actions(){if(!this.l_h){this.l_h=!0,this.__h=new Array;var i=this.FbDataInternal.actionsLength();if(i)for(let t=0;t<i;++t){var e=this.FbDataInternal.actions(t,new fb_action_1.ActionInfo);this.__h.push(FbActionInfo_1.FbActionInfo.Create(e))}}return this.__h}get ConditionActions(){if(!this.FFh){this.FFh=!0,this.NFh=new Array;var i=this.FbDataInternal.conditionActionsLength();if(i)for(let t=0;t<i;++t){var e=this.FbDataInternal.conditionActions(t,new fb_component_1.ConditionAction);this.NFh.push(FbConditionAction_1.FbConditionAction.Create(e))}}return this.NFh}get UnmatchedActions(){if(!this.VFh){this.VFh=!0,this.jFh=new Array;var i=this.FbDataInternal.unmatchedActionsLength();if(i)for(let t=0;t<i;++t){var e=this.FbDataInternal.unmatchedActions(t,new fb_action_1.ActionInfo);this.jFh.push(FbActionInfo_1.FbActionInfo.Create(e))}}return this.jFh}}exports.FbJigsawItemMatchedConfig=FbJigsawItemMatchedConfig;
//# sourceMappingURL=FbJigsawItemMatchedConfig.js.map