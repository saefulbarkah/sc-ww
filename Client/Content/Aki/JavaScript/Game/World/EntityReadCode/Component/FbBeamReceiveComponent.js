
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbBeamReceiveComponent=void 0;const fb_action_1=require("../../../../Game/World/EntityFb/fb-action"),FbActionInfo_1=require("../Action/FbActionInfo");class FbBeamReceiveComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.s_h=!1,this.y6o=0,this.bKh=!1,this.LKh=void 0,this.AKh=!1,this.RKh=void 0,this.xKh=!1,this.wKh=void 0}static Create(t){if(t)return new FbBeamReceiveComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get Duration(){return this.s_h||(this.s_h=!0,this.y6o=this.FbDataInternal.duration()),this.y6o}get BeginActions(){if(!this.bKh){this.bKh=!0,this.LKh=new Array;var i=this.FbDataInternal.beginActionsLength();if(i)for(let t=0;t<i;++t){var s=this.FbDataInternal.beginActions(t,new fb_action_1.ActionInfo);this.LKh.push(FbActionInfo_1.FbActionInfo.Create(s))}}return this.LKh}get CompleteActions(){if(!this.AKh){this.AKh=!0,this.RKh=new Array;var i=this.FbDataInternal.completeActionsLength();if(i)for(let t=0;t<i;++t){var s=this.FbDataInternal.completeActions(t,new fb_action_1.ActionInfo);this.RKh.push(FbActionInfo_1.FbActionInfo.Create(s))}}return this.RKh}get StopActions(){if(!this.xKh){this.xKh=!0,this.wKh=new Array;var i=this.FbDataInternal.stopActionsLength();if(i)for(let t=0;t<i;++t){var s=this.FbDataInternal.stopActions(t,new fb_action_1.ActionInfo);this.wKh.push(FbActionInfo_1.FbActionInfo.Create(s))}}return this.wKh}}exports.FbBeamReceiveComponent=FbBeamReceiveComponent;
//# sourceMappingURL=FbBeamReceiveComponent.js.map