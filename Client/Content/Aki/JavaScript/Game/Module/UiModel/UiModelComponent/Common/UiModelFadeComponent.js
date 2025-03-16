
"use strict";var __decorate=this&&this.__decorate||function(t,i,e,s){var o,h=arguments.length,n=h<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,i,e,s);else for(var r=t.length-1;0<=r;r--)(o=t[r])&&(n=(h<3?o(n):3<h?o(i,e,n):o(i,e))||n);return 3<h&&n&&Object.defineProperty(i,e,n),n};Object.defineProperty(exports,"__esModule",{value:!0}),exports.UiModelFadeComponent=void 0;const Log_1=require("../../../../../Core/Common/Log"),UiModelComponentDefine_1=require("../../Define/UiModelComponentDefine"),UiModelComponentBase_1=require("../UiModelComponentBase");let UiModelFadeComponent=class UiModelFadeComponent extends UiModelComponentBase_1.UiModelComponentBase{constructor(){super(...arguments),this.ywr=void 0,this.FHt=0,this.zwr=0,this.gle=0,this.r1t=0,this.kJo=void 0,this.APn=!1,this.CGl=.1,this.gGl=0}OnCreate(){this.APn=!1}OnInit(){this.ywr=this.Owner.CheckGetComponent(0)}OnEnd(){this.NeedTick&&this.ywr?.SetDitherEffect(this.zwr),this.APn=!0,this.av()}Fade(t,i,e,s){this.APn||(this.FHt=t,this.zwr=i,this.gGl=this.FHt,this.r1t=e,this.kJo=s,this.gle=0,this.NeedTick=!0,this.ywr?.SetDitherEffect(t))}Tick(t){this.gle+=1e3*t;var t=this.kJo.GetFloatValue(this.gle/this.r1t)*(this.zwr-this.FHt)+this.FHt,i=0<this.zwr-this.FHt;t>this.gGl&&i&&(Log_1.Log.CheckInfo()&&Log_1.Log.Info("UiComponent",58,"设置Ui模型透明度",["ModelUseWay",this.Owner.UseWay],["Dither",t],["ElapseTime",this.gle],["Duration",this.r1t]),this.gGl+=this.CGl),t<this.gGl&&!i&&(Log_1.Log.CheckInfo()&&Log_1.Log.Info("UiComponent",58,"设置Ui模型透明度",["ModelUseWay",this.Owner.UseWay],["Dither",t],["ElapseTime",this.gle],["Duration",this.r1t]),this.gGl-=this.CGl),this.ywr?.SetDitherEffect(t),this.gle>=this.r1t&&(this.NeedTick=!1,this.av())}av(){this.FHt=0,this.zwr=0,this.r1t=0,this.kJo=void 0,this.gle=0}};UiModelFadeComponent=__decorate([(0,UiModelComponentDefine_1.RegisterUiModelComponent)(8)],UiModelFadeComponent),exports.UiModelFadeComponent=UiModelFadeComponent;
//# sourceMappingURL=UiModelFadeComponent.js.map