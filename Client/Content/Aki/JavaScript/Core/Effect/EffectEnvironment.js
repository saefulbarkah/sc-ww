
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EffectEnvironment=void 0;const cpp_1=require("cpp"),Info_1=require("../Common/Info");class EffectEnvironment{static get GlobalTimeScale(){return this.ldl}static set GlobalTimeScale(t){this.ldl!==t&&(this.ldl=t,this.OpenTickOptimize)&&cpp_1.FKuroEffectSystemInterface.UpdateGlobalTimeScale(t)}static get OpenTickOptimize(){return!Info_1.Info.IsInEditorTick()&&this.Gdl}static Initialize(){this.UseLog=Info_1.Info.IsBuildDevelopmentOrDebug}static Tick(t,e){this.GameTimeInSeconds+=.001*t}}(exports.EffectEnvironment=EffectEnvironment).GameTimeInSeconds=0,EffectEnvironment.ldl=1,EffectEnvironment.UseLog=!0,EffectEnvironment.DisableOtherEffect=!1,EffectEnvironment.UsePool=!0,EffectEnvironment.EffectQualityBiasRemote=-1,EffectEnvironment.CloseEffectSubStat=!0,EffectEnvironment.OpenVisibilityOptimize=!0,EffectEnvironment.OpenDistanceOptimize=!0,EffectEnvironment.Gdl=!0;
//# sourceMappingURL=EffectEnvironment.js.map