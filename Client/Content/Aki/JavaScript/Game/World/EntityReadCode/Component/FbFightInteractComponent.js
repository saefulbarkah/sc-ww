
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbFightInteractComponent=void 0;const FbVectorInfo_1=require("../Var/FbVectorInfo");class FbFightInteractComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.C5h=!1,this._an=0,this.g5h=!1,this.f5h=void 0}static Create(t){if(t)return new FbFightInteractComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get LockRange(){return this.C5h||(this.C5h=!0,this._an=this.FbDataInternal.lockRange()),this._an}get LockOffset(){return this.g5h||(this.g5h=!0,this.f5h=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.lockOffset())),this.f5h}}exports.FbFightInteractComponent=FbFightInteractComponent;
//# sourceMappingURL=FbFightInteractComponent.js.map