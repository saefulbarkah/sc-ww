
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbCheckHookLockPointCondition=void 0;class FbCheckHookLockPointCondition{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.V_h=!1,this.j_h=void 0}static Create(t){if(t)return new FbCheckHookLockPointCondition(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get EntityIds(){if(!this.V_h){this.V_h=!0,this.j_h=new Array;var i=this.FbDataInternal.entityIdsLength();if(i)for(let t=0;t<i;++t)this.j_h.push(this.FbDataInternal.entityIds(t))}return this.j_h}}exports.FbCheckHookLockPointCondition=FbCheckHookLockPointCondition;
//# sourceMappingURL=FbCheckHookLockPointCondition.js.map