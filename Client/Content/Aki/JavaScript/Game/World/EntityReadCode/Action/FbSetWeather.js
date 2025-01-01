
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbSetWeather=void 0;class FbSetWeather{constructor(t){this.FbDataInternal=t,this.ebh=!1,this.tbh=0}static Create(t){if(t)return new FbSetWeather(t)}get WeatherId(){return this.ebh||(this.ebh=!0,this.tbh=this.FbDataInternal.weatherId()),this.tbh}}exports.FbSetWeather=FbSetWeather;
//# sourceMappingURL=FbSetWeather.js.map