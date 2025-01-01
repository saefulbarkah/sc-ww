
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbTimePatrolSplinePoint=void 0;const FbVectorInfo_1=require("../Var/FbVectorInfo");class FbTimePatrolSplinePoint{constructor(t){this.FbDataInternal=t,this.dph=!1,this.Cqn=void 0,this.V9h=!1,this.j9h=void 0,this.H9h=!1,this.W9h=void 0,this.Q9h=!1,this.K9h=void 0,this.$9h=!1,this.X9h=void 0,this.ZDh=!1,this.eBh=0,this.tBh=!1,this.iBh=0,this.iHh=!1,this.LTo=0}static Create(t){if(t)return new FbTimePatrolSplinePoint(t)}get Position(){return this.dph||(this.dph=!0,this.Cqn=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.position())),this.Cqn}get ArriveTangent(){return this.V9h||(this.V9h=!0,this.j9h=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.arriveTangent())),this.j9h}get LeaveTangent(){return this.H9h||(this.H9h=!0,this.W9h=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.leaveTangent())),this.W9h}get LineType(){return this.Q9h||(this.Q9h=!0,this.K9h=this.FbDataInternal.lineType()),this.K9h}get Rotation(){return this.$9h||(this.$9h=!0,this.X9h=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.rotation())),this.X9h}get Hours(){return this.ZDh||(this.ZDh=!0,this.eBh=this.FbDataInternal.hours()),this.eBh}get Minutes(){return this.tBh||(this.tBh=!0,this.iBh=this.FbDataInternal.minutes()),this.iBh}get Second(){return this.iHh||(this.iHh=!0,this.LTo=this.FbDataInternal.second()),this.LTo}}exports.FbTimePatrolSplinePoint=FbTimePatrolSplinePoint;
//# sourceMappingURL=FbTimePatrolSplinePoint.js.map