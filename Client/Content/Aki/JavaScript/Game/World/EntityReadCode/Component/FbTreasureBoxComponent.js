
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbTreasureBoxComponent=void 0;class FbTreasureBoxComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.fkh=!1,this.pkh=0}static Create(t){if(t)return new FbTreasureBoxComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get TypeId(){return this.fkh||(this.fkh=!0,this.pkh=this.FbDataInternal.typeId()),this.pkh}}exports.FbTreasureBoxComponent=FbTreasureBoxComponent;
//# sourceMappingURL=FbTreasureBoxComponent.js.map