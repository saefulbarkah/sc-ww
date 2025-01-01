
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LevelEventFakePlayerInput=void 0;const Log_1=require("../../../Core/Common/Log"),InputEnums_1=require("../../Input/InputEnums"),PreloadControllerClassPart1_1=require("../../Preload/PreloadControllerClassPart1"),LevelGeneralBase_1=require("../LevelGeneralBase");class LevelEventFakePlayerInput extends LevelGeneralBase_1.LevelEventBase{constructor(){super(...arguments),this.OPt=void 0}ExecuteNew(e,t){e||Log_1.Log.CheckError()&&Log_1.Log.Error("LevelEvent",31,"[LevelEventFakePlayerInput] 参数配置错误"),this.OPt=e;let r=InputEnums_1.EInputAction.None;switch(this.OPt.Input){case 1:r=InputEnums_1.EInputAction.跳跃;break;case 2:r=InputEnums_1.EInputAction.攻击;break;case 3:r=InputEnums_1.EInputAction.闪避;break;case 4:r=InputEnums_1.EInputAction.技能1;break;case 5:r=InputEnums_1.EInputAction.幻象1;break;case 7:r=InputEnums_1.EInputAction.幻象2;break;case 6:r=InputEnums_1.EInputAction.大招}r===InputEnums_1.EInputAction.None?Log_1.Log.CheckError()&&Log_1.Log.Error("LevelEvent",31,"[LevelEventFakePlayerInput] 未知的输入类型",["Input",this.OPt.Input]):(PreloadControllerClassPart1_1.InputController.InputAction(r,1),PreloadControllerClassPart1_1.InputController.InputAction(r,2))}}exports.LevelEventFakePlayerInput=LevelEventFakePlayerInput;
//# sourceMappingURL=LevelEventFakePlayerInput.js.map