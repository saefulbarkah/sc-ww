
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbCalculateComponent=void 0;const fb_action_1=require("../../../../Game/World/EntityFb/fb-action"),FbNumberVar_1=require("../Action/FbNumberVar"),FbTypeFunction_1=require("../Action/FbTypeFunction");class FbCalculateComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.xUh=!1,this.wUh=void 0,this.PUh=!1,this.UUh=void 0}static Create(t){if(t)return new FbCalculateComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get Vars(){if(!this.xUh){this.xUh=!0,this.wUh=new Array;var i=this.FbDataInternal.varsLength();if(i)for(let t=0;t<i;++t){var e=this.FbDataInternal.vars(t,new fb_action_1.NumberVar);this.wUh.push(FbNumberVar_1.FbNumberVar.Create(e))}}return this.wUh}get Functions(){if(!this.PUh){this.PUh=!0,this.UUh=new Array;var i=this.FbDataInternal.functionsLength();if(i)for(let t=0;t<i;++t){var e=this.FbDataInternal.functions(t,new fb_action_1.TypeFunction);this.UUh.push(FbTypeFunction_1.FbTypeFunction.Create(e))}}return this.UUh}}exports.FbCalculateComponent=FbCalculateComponent;
//# sourceMappingURL=FbCalculateComponent.js.map