
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbNpcLeisureInteract=void 0;const UnionNpcLeisureInteractOpHelper_1=require("./UnionNpcLeisureInteractOpHelper");class FbNpcLeisureInteract{constructor(e){this.FbDataInternal=e,this.V1h=!1,this.Hye=void 0}static Create(e){if(e)return new FbNpcLeisureInteract(e)}get Option(){var e,t;return!this.V1h&&(this.V1h=!0,e=this.FbDataInternal.optionType(),t=UnionNpcLeisureInteractOpHelper_1.UnionNpcLeisureInteractOpHelper.GetUnionNpcLeisureInteractOpObject(e))&&(this.Hye=UnionNpcLeisureInteractOpHelper_1.UnionNpcLeisureInteractOpHelper.ReadUnionNpcLeisureInteractOp(e,this.FbDataInternal.option(t))),this.Hye}}exports.FbNpcLeisureInteract=FbNpcLeisureInteract;
//# sourceMappingURL=FbNpcLeisureInteract.js.map