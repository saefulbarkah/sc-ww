
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LevelConditionOnSkillButtonDataRefresh=void 0;const ModelManager_1=require("../../Manager/ModelManager"),LevelGeneralBase_1=require("../LevelGeneralBase");class LevelConditionOnSkillButtonDataRefresh extends LevelGeneralBase_1.LevelConditionBase{constructor(){super(...arguments),this.uGl=-1,this.cGl=-1}Check(e,t,...s){var r=ModelManager_1.ModelManager.SkillButtonUiModel,e=e.LimitParams.get("skillId");return void 0!==e&&0!==s.length&&(s=s[0],this.cGl!==s&&(this.cGl=s,this.uGl=-1),s=r.GetSkillButtonIndexByButton(Number(e)),-1===this.uGl?(this.uGl=s,!0):this.uGl===s)}}exports.LevelConditionOnSkillButtonDataRefresh=LevelConditionOnSkillButtonDataRefresh;
//# sourceMappingURL=LevelConditionOnSkillButtonDataRefresh.js.map