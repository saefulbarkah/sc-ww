
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const EffectParameterBase_1=require("./EffectParameterBase");class EffectMaterialParameters extends EffectParameterBase_1.default{constructor(e=void 0,t=void 0){super(),this.tfl=!1,e&&(this.EffectParameter.FloatCurveMap=e),t&&(this.EffectParameter.LinearColorCurveMap=t),(e||t)&&(this.HasCurveParameters=!0)}CollectFloatCurve(e,t){super.CollectFloatCurve(e,t),this.tfl=!0}CollectVectorCurve(e,t){super.CollectVectorCurve(e,t),this.tfl=!0}CollectLinearColorCurve(e,t){super.CollectLinearColorCurve(e,t),this.tfl=!0}Tick(e,t){this.Apply(e,t,this.tfl),this.tfl=!1}}exports.default=EffectMaterialParameters;
//# sourceMappingURL=EffectMaterialParameter.js.map