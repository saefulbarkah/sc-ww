
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbDoCalculate=void 0;const UnionVarHelper_1=require("./UnionVarHelper");class FbDoCalculate{constructor(t){this.FbDataInternal=t,this.H_h=!1,this.W_h=void 0,this.Q_h=!1,this.K_h=void 0,this.$_h=!1,this.X_h=void 0,this.Y_h=!1,this.z_h=void 0}static Create(t){if(t)return new FbDoCalculate(t)}get Var1(){var t,i;return!this.H_h&&(this.H_h=!0,t=this.FbDataInternal.var1Type(),i=UnionVarHelper_1.UnionVarHelper.GetUnionVarObject(t))&&(this.W_h=UnionVarHelper_1.UnionVarHelper.ReadUnionVar(t,this.FbDataInternal.var1(i))),this.W_h}get Op(){return this.Q_h||(this.Q_h=!0,this.K_h=this.FbDataInternal.op()),this.K_h}get Var2(){var t,i;return!this.$_h&&(this.$_h=!0,t=this.FbDataInternal.var2Type(),i=UnionVarHelper_1.UnionVarHelper.GetUnionVarObject(t))&&(this.X_h=UnionVarHelper_1.UnionVarHelper.ReadUnionVar(t,this.FbDataInternal.var2(i))),this.X_h}get Result(){return this.Y_h||(this.Y_h=!0,this.z_h=this.FbDataInternal.result()),this.z_h}}exports.FbDoCalculate=FbDoCalculate;
//# sourceMappingURL=FbDoCalculate.js.map