
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.attackOnRelease=exports.attackOnPress=exports.attackFunction=void 0;const Global_1=require("../../../../../../Global"),CommonDefine_1=require("./CommonDefine"),CommonFunction_1=require("./CommonFunction");function attackFunction(t,o){var e=Global_1.Global.BaseCharacter;if(e){e=e.CharacterActorComponent?.Entity;if(e){var n=e.GetComponent(194);if(n&&n.Valid)return o.通用_攻击按下=!1,n.HasTag(1753576100)?(o.通用_攻击按下=!0,(0,CommonFunction_1.createInputCommand)(e,CommonDefine_1.SKILL_ID_BULLET_RUN)):void 0}}}function attackOnPress(t,o){return attackFunction(t,o)}function attackOnRelease(t,o){}exports.attackFunction=attackFunction,exports.attackOnPress=attackOnPress,exports.attackOnRelease=attackOnRelease;
//# sourceMappingURL=CharacterAttackFunction.js.map