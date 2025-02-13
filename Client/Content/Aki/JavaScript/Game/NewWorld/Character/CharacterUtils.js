
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CharacterUtils=void 0;const MonsterBattleConfByRoleId_1=require("../../../Core/Define/ConfigQuery/MonsterBattleConfByRoleId"),MonsterPerformanceConfById_1=require("../../../Core/Define/ConfigQuery/MonsterPerformanceConfById"),GameplayTagUtils_1=require("../../../Core/Utils/GameplayTagUtils"),ConfigManager_1=require("../../Manager/ConfigManager"),ModelManager_1=require("../../Manager/ModelManager"),PreloadConfigStatementPart4_1=require("../../Preload/PreloadConfigStatementPart4");class CharacterUtils{static IsCharacterMonsterOrSummoned(e){return!!e?.Valid&&!(!(e=e.Entity.GetComponent(0))?.Valid||!e.IsCharacterMonster()&&!e.IsSummonByCharacterMonster())}static CanCharacterMonsterOrSummonedDisplayEffect(e){var r;return!!e?.Valid&&!!(r=e.Entity.GetComponent(0))?.Valid&&(r.IsCharacterMonster()?this.Jil(e):!r.IsSummonByCharacterMonster()||(e=ModelManager_1.ModelManager.CreatureModel.GetEntity(r.GetSummonerId()),this.Jil(e)))}static Jil(r){if(r?.Valid){var a=r.Entity.GetComponent(0),t=r.Entity.GetComponent(39),o=r.Entity.GetComponent(200);let e=void 0;r=a.GetMonsterComponent()?.FightConfigId,r=(r&&(e=PreloadConfigStatementPart4_1.configMonsterBattleConfById.GetConfig(r)),a.GetRoleId()),a=ConfigManager_1.ConfigManager.RoleConfig.GetBaseRoleId(r);if(e=a?MonsterBattleConfByRoleId_1.configMonsterBattleConfByRoleId.GetConfig(a):e){var r=MonsterPerformanceConfById_1.configMonsterPerformanceConfById.GetConfigList(e.MonsterPerformanceId),n=t.CurrentSkill?.SkillId??0;for(const s of r??[])if(s.SkillIds.includes(n)){var i=s.Tag;if(!i)return!0;i=GameplayTagUtils_1.GameplayTagUtils.GetTagIdByName(i);if(i&&o.HasTag(i))return!0}}}return!1}}exports.CharacterUtils=CharacterUtils;
//# sourceMappingURL=CharacterUtils.js.map