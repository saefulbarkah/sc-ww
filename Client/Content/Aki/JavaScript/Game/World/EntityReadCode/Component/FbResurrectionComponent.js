
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbResurrectionComponent=void 0;const FbPosA_1=require("../Action/FbPosA"),UnionTriggerShapeHelper_1=require("../Shape/UnionTriggerShapeHelper");class FbResurrectionComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.V4h=!1,this.j4h=void 0,this.y8h=!1,this.S8h=void 0,this.m0h=!1,this.C0h=void 0}static Create(t){if(t)return new FbResurrectionComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get TeleportPos(){return this.V4h||(this.V4h=!0,this.j4h=FbPosA_1.FbPosA.Create(this.FbDataInternal.teleportPos())),this.j4h}get TriggerShape(){var t,e;return!this.y8h&&(this.y8h=!0,t=this.FbDataInternal.triggerShapeType(),e=UnionTriggerShapeHelper_1.UnionTriggerShapeHelper.GetUnionTriggerShapeObject(t))&&(this.S8h=UnionTriggerShapeHelper_1.UnionTriggerShapeHelper.ReadUnionTriggerShape(t,this.FbDataInternal.triggerShape(e))),this.S8h}get ReviveId(){return this.m0h||(this.m0h=!0,this.C0h=this.FbDataInternal.reviveId()),this.C0h}}exports.FbResurrectionComponent=FbResurrectionComponent;
//# sourceMappingURL=FbResurrectionComponent.js.map