
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbPerformerRangeBoundaryActionTrigger=void 0;const fb_action_1=require("../../../../Game/World/EntityFb/fb-action"),FbActionInfo_1=require("./FbActionInfo");class FbPerformerRangeBoundaryActionTrigger{constructor(t){this.FbDataInternal=t,this.o_h=!1,this.n_h=0,this.l_h=!1,this.__h=void 0}static Create(t){if(t)return new FbPerformerRangeBoundaryActionTrigger(t)}get Range(){return this.o_h||(this.o_h=!0,this.n_h=this.FbDataInternal.range()),this.n_h}get Actions(){if(!this.l_h){this.l_h=!0,this.__h=new Array;var r=this.FbDataInternal.actionsLength();if(r)for(let t=0;t<r;++t){var i=this.FbDataInternal.actions(t,new fb_action_1.ActionInfo);this.__h.push(FbActionInfo_1.FbActionInfo.Create(i))}}return this.__h}}exports.FbPerformerRangeBoundaryActionTrigger=FbPerformerRangeBoundaryActionTrigger;
//# sourceMappingURL=FbPerformerRangeBoundaryActionTrigger.js.map