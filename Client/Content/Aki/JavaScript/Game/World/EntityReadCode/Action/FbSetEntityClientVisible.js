
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbSetEntityClientVisible=void 0;class FbSetEntityClientVisible{constructor(t){this.FbDataInternal=t,this.V_h=!1,this.j_h=void 0,this.Amh=!1,this.Rmh=!1}static Create(t){if(t)return new FbSetEntityClientVisible(t)}get EntityIds(){if(!this.V_h){this.V_h=!0,this.j_h=new Array;var i=this.FbDataInternal.entityIdsLength();if(i)for(let t=0;t<i;++t)this.j_h.push(this.FbDataInternal.entityIds(t))}return this.j_h}get Visible(){return this.Amh||(this.Amh=!0,this.Rmh=this.FbDataInternal.visible()),this.Rmh}}exports.FbSetEntityClientVisible=FbSetEntityClientVisible;
//# sourceMappingURL=FbSetEntityClientVisible.js.map