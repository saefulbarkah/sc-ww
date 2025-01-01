
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbAirPassageSpline=void 0;const fb_component_1=require("../../../../Game/World/EntityFb/fb-component"),FbCommonSplinePoint_1=require("./FbCommonSplinePoint");class FbAirPassageSpline{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.I9h=!1,this.T9h=void 0,this.b9h=!1,this.L9h=void 0,this.A9h=!1,this.R9h=void 0,this.x9h=!1,this.w9h=void 0,this.P9h=!1,this.U9h=0,this.D9h=!1,this.B9h=0,this.q9h=!1,this.k9h=0,this.G9h=!1,this.O9h=0,this.F9h=!1,this.N9h=0,this.Hjl=!1,this.Wjl=0,this.NEh=!1,this.VEh=void 0}static Create(t){if(t)return new FbAirPassageSpline(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get MiddleLineEffect(){return this.I9h||(this.I9h=!0,this.T9h=this.FbDataInternal.middleLineEffect()),this.T9h}get TailCircleEffect(){return this.b9h||(this.b9h=!0,this.L9h=this.FbDataInternal.tailCircleEffect()),this.L9h}get MiddleCircleEffect(){return this.A9h||(this.A9h=!0,this.R9h=this.FbDataInternal.middleCircleEffect()),this.R9h}get MiddleCircleOverlyingEffect(){return this.x9h||(this.x9h=!0,this.w9h=this.FbDataInternal.middleCircleOverlyingEffect()),this.w9h}get MiddleCircleSpace(){return this.P9h||(this.P9h=!0,this.U9h=this.FbDataInternal.middleCircleSpace()),this.U9h}get MiddleCircleRadius(){return this.D9h||(this.D9h=!0,this.B9h=this.FbDataInternal.middleCircleRadius()),this.B9h}get MovableRadius(){return this.q9h||(this.q9h=!0,this.k9h=this.FbDataInternal.movableRadius()),this.k9h}get Resistance(){return this.G9h||(this.G9h=!0,this.O9h=this.FbDataInternal.resistance()),this.O9h}get SpeedLimit(){return this.F9h||(this.F9h=!0,this.N9h=this.FbDataInternal.speedLimit()),this.N9h}get SprintSpeedLimit(){return this.Hjl||(this.Hjl=!0,this.Wjl=this.FbDataInternal.sprintSpeedLimit()),this.Wjl}get Points(){if(!this.NEh){this.NEh=!0,this.VEh=new Array;var i=this.FbDataInternal.pointsLength();if(i)for(let t=0;t<i;++t){var s=this.FbDataInternal.points(t,new fb_component_1.CommonSplinePoint);this.VEh.push(FbCommonSplinePoint_1.FbCommonSplinePoint.Create(s))}}return this.VEh}}exports.FbAirPassageSpline=FbAirPassageSpline;
//# sourceMappingURL=FbAirPassageSpline.js.map