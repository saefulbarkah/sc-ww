
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbCombinedVisibleGroupComponent=void 0;class FbCombinedVisibleGroupComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.g8h=!1,this.f8h=void 0,this.p8h=!1,this.v8h=!1,this.V_h=!1,this.j_h=void 0}static Create(t){if(t)return new FbCombinedVisibleGroupComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get AreaIds(){if(!this.g8h){this.g8h=!0,this.f8h=new Array;var i=this.FbDataInternal.areaIdsLength();if(i)for(let t=0;t<i;++t)this.f8h.push(this.FbDataInternal.areaIds(t))}return this.f8h}get IncludeSubArea(){return this.p8h||(this.p8h=!0,this.v8h=this.FbDataInternal.includeSubArea()),this.v8h}get EntityIds(){if(!this.V_h){this.V_h=!0,this.j_h=new Array;var i=this.FbDataInternal.entityIdsLength();if(i)for(let t=0;t<i;++t)this.j_h.push(this.FbDataInternal.entityIds(t))}return this.j_h}}exports.FbCombinedVisibleGroupComponent=FbCombinedVisibleGroupComponent;
//# sourceMappingURL=FbCombinedVisibleGroupComponent.js.map