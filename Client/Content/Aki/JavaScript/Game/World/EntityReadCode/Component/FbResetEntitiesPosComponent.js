
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbResetEntitiesPosComponent=void 0;const UnionTriggerShapeHelper_1=require("../Shape/UnionTriggerShapeHelper");class FbResetEntitiesPosComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.o_h=!1,this.n_h=void 0,this.V_h=!1,this.j_h=void 0}static Create(t){if(t)return new FbResetEntitiesPosComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get Range(){var t,e;return!this.o_h&&(this.o_h=!0,t=this.FbDataInternal.rangeType(),e=UnionTriggerShapeHelper_1.UnionTriggerShapeHelper.GetUnionTriggerShapeObject(t))&&(this.n_h=UnionTriggerShapeHelper_1.UnionTriggerShapeHelper.ReadUnionTriggerShape(t,this.FbDataInternal.range(e))),this.n_h}get EntityIds(){if(!this.V_h){this.V_h=!0,this.j_h=new Array;var e=this.FbDataInternal.entityIdsLength();if(e)for(let t=0;t<e;++t)this.j_h.push(this.FbDataInternal.entityIds(t))}return this.j_h}}exports.FbResetEntitiesPosComponent=FbResetEntitiesPosComponent;
//# sourceMappingURL=FbResetEntitiesPosComponent.js.map