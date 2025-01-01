
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbTrampleComponent=void 0;const fb_action_1=require("../../../../Game/World/EntityFb/fb-action"),FbActionInfo_1=require("../Action/FbActionInfo"),FbEnterLeaveRadius_1=require("../Common/FbEnterLeaveRadius"),FbEntityMatch_1=require("./FbEntityMatch"),FbConditionGroup_1=require("../Condition/FbConditionGroup"),UnionMatchRoleOptionHelper_1=require("../Match/UnionMatchRoleOptionHelper");class FbTrampleComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.Z1h=!1,this.X6o=void 0,this.Ukh=!1,this.Dkh=void 0,this.qDh=!1,this.PAe=void 0,this.Q4h=!1,this.K4h=0,this.gch=!1,this.fch=0,this.$4h=!1,this.X4h=!1,this.Y4h=!1,this.z4h=void 0,this.J4h=!1,this.Z4h=!1,this.eVh=!1,this.tVh=void 0,this.iVh=!1,this.rVh=void 0}static Create(t){if(t)return new FbTrampleComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get Condition(){return this.Z1h||(this.Z1h=!0,this.X6o=FbConditionGroup_1.FbConditionGroup.Create(this.FbDataInternal.condition())),this.X6o}get Match(){return this.Ukh||(this.Ukh=!0,this.Dkh=FbEntityMatch_1.FbEntityMatch.Create(this.FbDataInternal.match())),this.Dkh}get MatchRoleOption(){if(!this.qDh){this.qDh=!0,this.PAe=new Array;var i=this.FbDataInternal.matchRoleOptionLength();if(i)for(let t=0;t<i;++t){var s=this.FbDataInternal.matchRoleOptionType(t),h=UnionMatchRoleOptionHelper_1.UnionMatchRoleOptionHelper.GetUnionMatchRoleOptionObject(s);h&&void 0!==(s=UnionMatchRoleOptionHelper_1.UnionMatchRoleOptionHelper.ReadUnionMatchRoleOption(s,this.FbDataInternal.matchRoleOption(t,h)))&&this.PAe.push(s)}}return this.PAe}get DownTime(){return this.Q4h||(this.Q4h=!0,this.K4h=this.FbDataInternal.downTime()),this.K4h}get StayTime(){return this.gch||(this.gch=!0,this.fch=this.FbDataInternal.stayTime()),this.fch}get IsResetGear(){return this.$4h||(this.$4h=!0,this.X4h=this.FbDataInternal.isResetGear()),this.X4h}get ShowLandTipRadius(){return this.Y4h||(this.Y4h=!0,this.z4h=FbEnterLeaveRadius_1.FbEnterLeaveRadius.Create(this.FbDataInternal.showLandTipRadius())),this.z4h}get StopTeleControlMove(){return this.J4h||(this.J4h=!0,this.Z4h=this.FbDataInternal.stopTeleControlMove()),this.Z4h}get EnterActions(){if(!this.eVh){this.eVh=!0,this.tVh=new Array;var i=this.FbDataInternal.enterActionsLength();if(i)for(let t=0;t<i;++t){var s=this.FbDataInternal.enterActions(t,new fb_action_1.ActionInfo);this.tVh.push(FbActionInfo_1.FbActionInfo.Create(s))}}return this.tVh}get ExitActions(){if(!this.iVh){this.iVh=!0,this.rVh=new Array;var i=this.FbDataInternal.exitActionsLength();if(i)for(let t=0;t<i;++t){var s=this.FbDataInternal.exitActions(t,new fb_action_1.ActionInfo);this.rVh.push(FbActionInfo_1.FbActionInfo.Create(s))}}return this.rVh}}exports.FbTrampleComponent=FbTrampleComponent;
//# sourceMappingURL=FbTrampleComponent.js.map