
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbDurationCondition=void 0;class FbDurationCondition{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.s_h=!1,this.y6o=0,this.zqh=!1,this.Jqh=!1}static Create(t){if(t)return new FbDurationCondition(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get Duration(){return this.s_h||(this.s_h=!0,this.y6o=this.FbDataInternal.duration()),this.y6o}get Refill(){return this.zqh||(this.zqh=!0,this.Jqh=this.FbDataInternal.refill()),this.Jqh}}exports.FbDurationCondition=FbDurationCondition;
//# sourceMappingURL=FbDurationCondition.js.map