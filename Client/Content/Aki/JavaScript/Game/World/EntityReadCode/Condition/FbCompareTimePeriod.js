
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbCompareTimePeriod=void 0;class FbCompareTimePeriod{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this._ch=!1,this.cch=void 0,this.vzh=!1,this.yzh=void 0}static Create(t){if(t)return new FbCompareTimePeriod(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get Compare(){return this._ch||(this._ch=!0,this.cch=this.FbDataInternal.compare()),this.cch}get TimePeriod(){return this.vzh||(this.vzh=!0,this.yzh=this.FbDataInternal.timePeriod()),this.yzh}}exports.FbCompareTimePeriod=FbCompareTimePeriod;
//# sourceMappingURL=FbCompareTimePeriod.js.map