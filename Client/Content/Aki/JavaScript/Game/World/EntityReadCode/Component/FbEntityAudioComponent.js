
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbEntityAudioComponent=void 0;const UnionAkEventTypeHelper_1=require("./UnionAkEventTypeHelper");class FbEntityAudioComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.Djh=!1,this.Bjh=void 0,this.qjh=!1,this.kjh=void 0}static Create(t){if(t)return new FbEntityAudioComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get AkEventType(){var t,e;return!this.Djh&&(this.Djh=!0,t=this.FbDataInternal.akEventTypeType(),e=UnionAkEventTypeHelper_1.UnionAkEventTypeHelper.GetUnionAkEventTypeObject(t))&&(this.Bjh=UnionAkEventTypeHelper_1.UnionAkEventTypeHelper.ReadUnionAkEventType(t,this.FbDataInternal.akEventType(e))),this.Bjh}get AudioRangeType(){return this.qjh||(this.qjh=!0,this.kjh=this.FbDataInternal.audioRangeType()),this.kjh}}exports.FbEntityAudioComponent=FbEntityAudioComponent;
//# sourceMappingURL=FbEntityAudioComponent.js.map