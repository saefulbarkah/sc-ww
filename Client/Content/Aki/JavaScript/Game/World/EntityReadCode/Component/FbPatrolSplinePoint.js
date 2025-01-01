
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbPatrolSplinePoint=void 0;const fb_action_1=require("../../../../Game/World/EntityFb/fb-action"),FbActionInfo_1=require("../Action/FbActionInfo"),FbVectorInfo_1=require("../Var/FbVectorInfo");class FbPatrolSplinePoint{constructor(t){this.FbDataInternal=t,this.dph=!1,this.Cqn=void 0,this.V9h=!1,this.j9h=void 0,this.H9h=!1,this.W9h=void 0,this.Q9h=!1,this.K9h=void 0,this.$9h=!1,this.X9h=void 0,this.Nuh=!1,this.Vuh=void 0,this.p7h=!1,this.v7h=void 0,this.Y9h=!1,this.z9h=0,this.J9h=!1,this.Z9h=!1,this.gch=!1,this.fch=0,this.eHh=!1,this.tHh=!1,this.l_h=!1,this.__h=void 0}static Create(t){if(t)return new FbPatrolSplinePoint(t)}get Position(){return this.dph||(this.dph=!0,this.Cqn=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.position())),this.Cqn}get ArriveTangent(){return this.V9h||(this.V9h=!0,this.j9h=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.arriveTangent())),this.j9h}get LeaveTangent(){return this.H9h||(this.H9h=!0,this.W9h=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.leaveTangent())),this.W9h}get LineType(){return this.Q9h||(this.Q9h=!0,this.K9h=this.FbDataInternal.lineType()),this.K9h}get Rotation(){return this.$9h||(this.$9h=!0,this.X9h=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.rotation())),this.X9h}get MoveState(){return this.Nuh||(this.Nuh=!0,this.Vuh=this.FbDataInternal.moveState()),this.Vuh}get CharPositionState(){return this.p7h||(this.p7h=!0,this.v7h=this.FbDataInternal.charPositionState()),this.v7h}get MoveSpeed(){return this.Y9h||(this.Y9h=!0,this.z9h=this.FbDataInternal.moveSpeed()),this.z9h}get IgnorePoint(){return this.J9h||(this.J9h=!0,this.Z9h=this.FbDataInternal.ignorePoint()),this.Z9h}get StayTime(){return this.gch||(this.gch=!0,this.fch=this.FbDataInternal.stayTime()),this.fch}get IsHide(){return this.eHh||(this.eHh=!0,this.tHh=this.FbDataInternal.isHide()),this.tHh}get Actions(){if(!this.l_h){this.l_h=!0,this.__h=new Array;var i=this.FbDataInternal.actionsLength();if(i)for(let t=0;t<i;++t){var s=this.FbDataInternal.actions(t,new fb_action_1.ActionInfo);this.__h.push(FbActionInfo_1.FbActionInfo.Create(s))}}return this.__h}}exports.FbPatrolSplinePoint=FbPatrolSplinePoint;
//# sourceMappingURL=FbPatrolSplinePoint.js.map