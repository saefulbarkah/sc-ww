
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NoUiTimer=void 0;const TimeUtil_1=require("../../../Common/TimeUtil"),LogicTreeTimerBase_1=require("./LogicTreeTimerBase");class NoUiTimer extends LogicTreeTimerBase_1.LogicTreeTimerBase{constructor(){super(...arguments),this.MYt=-0,this.kP_=-0}StartShowTimer(e,i){this.MYt=e,this.kP_=i}GetRemainTime(){var e=(this.MYt-TimeUtil_1.TimeUtil.GetServerStopTimeStamp())/1e3,i=0!==this.kP_?(this.MYt-this.kP_)/1e3:-1;return Math.max(e,i,0)}}exports.NoUiTimer=NoUiTimer;
//# sourceMappingURL=NoUiTimer.js.map