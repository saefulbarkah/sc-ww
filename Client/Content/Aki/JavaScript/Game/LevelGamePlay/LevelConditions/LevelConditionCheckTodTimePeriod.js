
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LevelConditionCheckTodTimePeriod=void 0;const TimeOfDayController_1=require("../../Module/TimeOfDay/TimeOfDayController"),TimeOfDayDefine_1=require("../../Module/TimeOfDay/TimeOfDayDefine"),LevelGeneralBase_1=require("../LevelGeneralBase"),DAYTIME_HOUR_START=6,DAYTIME_HOUR_END=18,NIGHT_HOUR_START=18,NIGHT_HOUR_END=6;class LevelConditionCheckTodTimePeriod extends LevelGeneralBase_1.LevelConditionBase{CheckNew(e,i){if(!e)return!1;let T=0,_=0;_="DayTime"===e.TimePeriod?(T=DAYTIME_HOUR_START*TimeOfDayDefine_1.TOD_MINUTE_PER_HOUR,DAYTIME_HOUR_END*TimeOfDayDefine_1.TOD_MINUTE_PER_HOUR):(T=NIGHT_HOUR_START*TimeOfDayDefine_1.TOD_MINUTE_PER_HOUR,NIGHT_HOUR_END*TimeOfDayDefine_1.TOD_MINUTE_PER_HOUR);var r=TimeOfDayController_1.TimeOfDayController.CheckInMinuteSpan(T,_);return"Eq"===e.Compare?r:!r}}exports.LevelConditionCheckTodTimePeriod=LevelConditionCheckTodTimePeriod;
//# sourceMappingURL=LevelConditionCheckTodTimePeriod.js.map