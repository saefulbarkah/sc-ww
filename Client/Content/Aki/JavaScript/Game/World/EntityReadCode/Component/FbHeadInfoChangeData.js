
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbHeadInfoChangeData=void 0;const FbConditionGroup_1=require("../Condition/FbConditionGroup");class FbHeadInfoChangeData{constructor(t){this.FbDataInternal=t,this.ich=!1,this.rch=void 0,this.bwh=!1,this.Lwh=void 0,this.d_h=!1,this.m_h=void 0,this.Vz_=!1,this.jz_=void 0}static Create(t){if(t)return new FbHeadInfoChangeData(t)}get Conditions(){return this.ich||(this.ich=!0,this.rch=FbConditionGroup_1.FbConditionGroup.Create(this.FbDataInternal.conditions())),this.rch}get TidName(){return this.bwh||(this.bwh=!0,this.Lwh=this.FbDataInternal.tidName()),this.Lwh}get Icon(){return this.d_h||(this.d_h=!0,this.m_h=this.FbDataInternal.icon()),this.m_h}get TidSecondaryName(){return this.Vz_||(this.Vz_=!0,this.jz_=this.FbDataInternal.tidSecondaryName()),this.jz_}}exports.FbHeadInfoChangeData=FbHeadInfoChangeData;
//# sourceMappingURL=FbHeadInfoChangeData.js.map