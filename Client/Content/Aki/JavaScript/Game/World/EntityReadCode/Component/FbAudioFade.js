
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbAudioFade=void 0;class FbAudioFade{constructor(t){this.FbDataInternal=t,this.$jh=!1,this.Xjh=void 0,this.Yjh=!1,this.zjh=0}static Create(t){if(t)return new FbAudioFade(t)}get FadeCurve(){return this.$jh||(this.$jh=!0,this.Xjh=this.FbDataInternal.fadeCurve()),this.Xjh}get FadeDuration(){return this.Yjh||(this.Yjh=!0,this.zjh=this.FbDataInternal.fadeDuration()),this.zjh}}exports.FbAudioFade=FbAudioFade;
//# sourceMappingURL=FbAudioFade.js.map