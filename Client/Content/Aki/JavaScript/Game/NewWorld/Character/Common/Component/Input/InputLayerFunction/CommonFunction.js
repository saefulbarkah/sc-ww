
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.canResponseInput=exports.createInputCommand=void 0;const UE=require("ue");function createInputCommand(e,t){if(0!==t){var n,o,r,e=e.GetComponent(35);if(e&&e.Valid)return n=e.GetSkillInfo(t),o=e.GetPriority(t),r=e.GetSkillIdWithGroupId(1),(r=e.GetActivePriority(r))<o||e.IsMainSkillReadyEnd||o===r&&e.SkillAcceptInput||n&&1!==n.GroupId?new UE.SInputCommand(1,t,void 0):void 0}}function canResponseInput(e){return!!e.GetComponent(39)?.CanResponseInput()&&!e.GetComponent(194)?.HasAnyTag([-2044964178,855966206,504239013,-2100129479,-1159105522,-648310348,1501154053])}exports.createInputCommand=createInputCommand,exports.canResponseInput=canResponseInput;
//# sourceMappingURL=CommonFunction.js.map