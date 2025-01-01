
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbLevelAISpline=void 0;const fb_component_1=require("../../../../Game/World/EntityFb/fb-component"),FbLevelAISplinePoint_1=require("./FbLevelAISplinePoint"),UnionLevelAiCycleOptionHelper_1=require("./UnionLevelAiCycleOptionHelper");class FbLevelAISpline{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.j1h=!1,this.I9o=0,this.u7h=!1,this.d7h=void 0,this.m7h=!1,this.C7h=!1,this.g7h=!1,this.f7h=!1,this.NEh=!1,this.VEh=void 0}static Create(t){if(t)return new FbLevelAISpline(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get EntityId(){return this.j1h||(this.j1h=!0,this.I9o=this.FbDataInternal.entityId()),this.I9o}get CycleOption(){var t,i;return!this.u7h&&(this.u7h=!0,t=this.FbDataInternal.cycleOptionType(),i=UnionLevelAiCycleOptionHelper_1.UnionLevelAiCycleOptionHelper.GetUnionLevelAiCycleOptionObject(t))&&(this.d7h=UnionLevelAiCycleOptionHelper_1.UnionLevelAiCycleOptionHelper.ReadUnionLevelAiCycleOption(t,this.FbDataInternal.cycleOption(i))),this.d7h}get UsePathFinding(){return this.m7h||(this.m7h=!0,this.C7h=this.FbDataInternal.usePathFinding()),this.C7h}get IsPassEveryKeyPoint(){return this.g7h||(this.g7h=!0,this.f7h=this.FbDataInternal.isPassEveryKeyPoint()),this.f7h}get Points(){if(!this.NEh){this.NEh=!0,this.VEh=new Array;var i=this.FbDataInternal.pointsLength();if(i)for(let t=0;t<i;++t){var e=this.FbDataInternal.points(t,new fb_component_1.LevelAISplinePoint);this.VEh.push(FbLevelAISplinePoint_1.FbLevelAISplinePoint.Create(e))}}return this.VEh}}exports.FbLevelAISpline=FbLevelAISpline;
//# sourceMappingURL=FbLevelAISpline.js.map