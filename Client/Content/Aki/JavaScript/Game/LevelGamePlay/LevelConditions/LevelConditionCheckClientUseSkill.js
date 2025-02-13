
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LevelConditionCheckClientUseSkill=void 0;const Log_1=require("../../../Core/Common/Log"),Global_1=require("../../Global"),LevelGeneralBase_1=require("../LevelGeneralBase"),LevelGeneralDefine_1=require("../LevelGeneralDefine");class LevelConditionCheckClientUseSkill extends LevelGeneralBase_1.LevelConditionBase{Check(e,l){var o,n;return 0===e.LimitParams.size?(Log_1.Log.CheckError()&&Log_1.Log.Error("LevelCondition",16,"配置错误！条件的参数不应该为空",["inConditionInfo.Id",e.Id]),!1):(o=e.LimitParams.get("SkillId"))?!!(n=Global_1.Global.BaseCharacter)&&!!(n=n.GetEntityNoBlueprint()?.GetComponent(39))&&!!n.GetSkill(Number(o))?.Active:(Log_1.Log.CheckError()&&Log_1.Log.Error("LevelCondition",16,`配置错误！条件${e.Id}的参数不符合条件类型${LevelGeneralDefine_1.ELevelGeneralCondition.CheckClientUseSkill}的定义`),!1)}}exports.LevelConditionCheckClientUseSkill=LevelConditionCheckClientUseSkill;
//# sourceMappingURL=LevelConditionCheckClientUseSkill.js.map