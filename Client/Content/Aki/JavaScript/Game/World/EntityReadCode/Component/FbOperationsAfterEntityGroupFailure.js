
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbOperationsAfterEntityGroupFailure=void 0;const fb_action_1=require("../../../../Game/World/EntityFb/fb-action"),FbActionInfo_1=require("../Action/FbActionInfo");class FbOperationsAfterEntityGroupFailure{constructor(t){this.FbDataInternal=t,this.P4h=!1,this.U4h=!1,this.l_h=!1,this.__h=void 0}static Create(t){if(t)return new FbOperationsAfterEntityGroupFailure(t)}get IsResetState(){return this.P4h||(this.P4h=!0,this.U4h=this.FbDataInternal.isResetState()),this.U4h}get Actions(){if(!this.l_h){this.l_h=!0,this.__h=new Array;var i=this.FbDataInternal.actionsLength();if(i)for(let t=0;t<i;++t){var e=this.FbDataInternal.actions(t,new fb_action_1.ActionInfo);this.__h.push(FbActionInfo_1.FbActionInfo.Create(e))}}return this.__h}}exports.FbOperationsAfterEntityGroupFailure=FbOperationsAfterEntityGroupFailure;
//# sourceMappingURL=FbOperationsAfterEntityGroupFailure.js.map