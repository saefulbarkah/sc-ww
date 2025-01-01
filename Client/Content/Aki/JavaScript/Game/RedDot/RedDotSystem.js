
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RedDotSystem=void 0;const cpp_1=require("cpp"),Log_1=require("../../Core/Common/Log"),List_1=require("../../Core/Container/List"),Macro_1=require("../../Core/Preprocessor/Macro"),ModelManager_1=require("../Manager/ModelManager");class RedDotEventData{constructor(t,e,s){this.Event=t,this.Id=e,this.RedDotName=s}HandleEvent(){this.Event(this.Id)}}const TICK_TOTAL_TIME=500;class RedDotSystem{static PushToEventQueue(t,e,s){var i=s+e;this.jil.has(i)||(this.zah?.RedDotName===s&&this.zah?.Id===e?Log_1.Log.CheckError()&&Log_1.Log.Error("RedDot",69,"红点处理存在循环调用, 详情见堆栈",["红点名",s]):(t=this.GetRedDotEventData(t,e,s),this.Wil.AddTail(t),this.jil.add(i)))}static Qil(){var t=this.Wil.GetHeadNextNode(),e=t.Element;this.zah=e,this.Wil.RemoveNode(t),this.jil.delete(e.RedDotName+e.Id),e.HandleEvent(),this.zah=void 0,this.Jah.push(e)}static Tick(t){if(1===ModelManager_1.ModelManager.GameModeModel?.LoadingPhase){var e=this.Wil.Count;if(!(e<=0)){let t=e;for(;0<this.Kil&&0<t;){var s=cpp_1.KuroTime.GetMicroseconds64(),s=(this.Qil(),cpp_1.KuroTime.GetMicroseconds64()-s);this.Kil-=s,t--}cpp_1.FKuroPerfSightHelper.PostValueFloat1("RedDot","RedDotCostPerFrame",(TICK_TOTAL_TIME-this.Kil)/1e3),this.Kil=TICK_TOTAL_TIME}}}static GetRedDotEventData(t,e,s){var i;return 0<this.Jah.length?((i=this.Jah.pop()).Event=t,i.Id=e,i.RedDotName=s,i):new RedDotEventData(t,e,s)}}(exports.RedDotSystem=RedDotSystem).Wil=new List_1.default(new RedDotEventData(t=>{},0,"")),RedDotSystem.Jah=[],RedDotSystem.jil=new Set,RedDotSystem.zah=void 0,RedDotSystem.Kil=TICK_TOTAL_TIME,RedDotSystem.IsOpenLogCallTime=!1;
//# sourceMappingURL=RedDotSystem.js.map