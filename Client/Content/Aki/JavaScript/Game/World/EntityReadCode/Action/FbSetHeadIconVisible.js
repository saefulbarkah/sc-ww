
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbSetHeadIconVisible=void 0;const UnionHeadStyleHelper_1=require("./UnionHeadStyleHelper");class FbSetHeadIconVisible{constructor(e){this.FbDataInternal=e,this.xmh=!1,this.wmh=void 0,this.Amh=!1,this.Rmh=!1}static Create(e){if(e)return new FbSetHeadIconVisible(e)}get HeadStyleConfig(){var e,t;return!this.xmh&&(this.xmh=!0,e=this.FbDataInternal.headStyleConfigType(),t=UnionHeadStyleHelper_1.UnionHeadStyleHelper.GetUnionHeadStyleObject(e))&&(this.wmh=UnionHeadStyleHelper_1.UnionHeadStyleHelper.ReadUnionHeadStyle(e,this.FbDataInternal.headStyleConfig(t))),this.wmh}get Visible(){return this.Amh||(this.Amh=!0,this.Rmh=this.FbDataInternal.visible()),this.Rmh}}exports.FbSetHeadIconVisible=FbSetHeadIconVisible;
//# sourceMappingURL=FbSetHeadIconVisible.js.map