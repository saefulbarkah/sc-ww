
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbReboundComponent=void 0;const UnionReboundOptionHelper_1=require("./UnionReboundOptionHelper");class FbReboundComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.p0h=!1,this.nXs=0,this.V1h=!1,this.Hye=void 0}static Create(t){if(t)return new FbReboundComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get BulletId(){return this.p0h||(this.p0h=!0,this.nXs=Number(this.FbDataInternal.bulletId())),this.nXs}get Option(){var t,e;return!this.V1h&&(this.V1h=!0,t=this.FbDataInternal.optionType(),e=UnionReboundOptionHelper_1.UnionReboundOptionHelper.GetUnionReboundOptionObject(t))&&(this.Hye=UnionReboundOptionHelper_1.UnionReboundOptionHelper.ReadUnionReboundOption(t,this.FbDataInternal.option(e))),this.Hye}}exports.FbReboundComponent=FbReboundComponent;
//# sourceMappingURL=FbReboundComponent.js.map