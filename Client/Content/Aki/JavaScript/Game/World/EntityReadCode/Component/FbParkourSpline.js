
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbParkourSpline=void 0;const fb_component_1=require("../../../../Game/World/EntityFb/fb-component"),FbParkourSplinePoint_1=require("./FbParkourSplinePoint");class FbParkourSpline{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.y7h=!1,this.S7h=!1,this.M7h=!1,this.E7h=0,this.I7h=!1,this.T7h=void 0,this.b7h=!1,this.L7h=void 0,this.A7h=!1,this.R7h=void 0,this.x7h=!1,this.w7h=void 0,this.NEh=!1,this.VEh=void 0}static Create(t){if(t)return new FbParkourSpline(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get IsRequireToEnd(){return this.y7h||(this.y7h=!0,this.S7h=this.FbDataInternal.isRequireToEnd()),this.S7h}get CheckPointsRequire(){return this.M7h||(this.M7h=!0,this.E7h=this.FbDataInternal.checkPointsRequire()),this.E7h}get CheckPointResource(){return this.I7h||(this.I7h=!0,this.T7h=this.FbDataInternal.checkPointResource()),this.T7h}get CheckPointsDestroyRes(){return this.b7h||(this.b7h=!0,this.L7h=this.FbDataInternal.checkPointsDestroyRes()),this.L7h}get StartResource(){return this.A7h||(this.A7h=!0,this.R7h=this.FbDataInternal.startResource()),this.R7h}get EndResource(){return this.x7h||(this.x7h=!0,this.w7h=this.FbDataInternal.endResource()),this.w7h}get Points(){if(!this.NEh){this.NEh=!0,this.VEh=new Array;var i=this.FbDataInternal.pointsLength();if(i)for(let t=0;t<i;++t){var s=this.FbDataInternal.points(t,new fb_component_1.ParkourSplinePoint);this.VEh.push(FbParkourSplinePoint_1.FbParkourSplinePoint.Create(s))}}return this.VEh}}exports.FbParkourSpline=FbParkourSpline;
//# sourceMappingURL=FbParkourSpline.js.map