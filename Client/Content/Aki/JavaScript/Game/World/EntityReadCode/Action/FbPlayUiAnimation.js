
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbPlayUiAnimation=void 0;const UnionPlayUiAnimationTypeHelper_1=require("./UnionPlayUiAnimationTypeHelper");class FbPlayUiAnimation{constructor(i){this.FbDataInternal=i,this.u_h=!1,this.f8o=void 0,this.D0c=!1,this.B0c=void 0}static Create(i){if(i)return new FbPlayUiAnimation(i)}get Type(){return this.u_h||(this.u_h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get PlayUiAnimation(){var i,t;return!this.D0c&&(this.D0c=!0,i=this.FbDataInternal.playUiAnimationType(),t=UnionPlayUiAnimationTypeHelper_1.UnionPlayUiAnimationTypeHelper.GetUnionPlayUiAnimationTypeObject(i))&&(this.B0c=UnionPlayUiAnimationTypeHelper_1.UnionPlayUiAnimationTypeHelper.ReadUnionPlayUiAnimationType(i,this.FbDataInternal.playUiAnimation(t))),this.B0c}}exports.FbPlayUiAnimation=FbPlayUiAnimation;
//# sourceMappingURL=FbPlayUiAnimation.js.map