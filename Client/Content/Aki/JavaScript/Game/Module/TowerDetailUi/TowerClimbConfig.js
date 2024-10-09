
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TowerClimbConfig=void 0;const MultiTextLang_1=require("../../../Core/Define/ConfigQuery/MultiTextLang"),TowerBuffById_1=require("../../../Core/Define/ConfigQuery/TowerBuffById"),TowerConfigById_1=require("../../../Core/Define/ConfigQuery/TowerConfigById"),TowerConfigBySeason_1=require("../../../Core/Define/ConfigQuery/TowerConfigBySeason"),TowerDifficultyByDifficulty_1=require("../../../Core/Define/ConfigQuery/TowerDifficultyByDifficulty"),TowerTargetById_1=require("../../../Core/Define/ConfigQuery/TowerTargetById"),ConfigBase_1=require("../../../Core/Framework/ConfigBase"),TowerData_1=require("./TowerData");class TowerClimbConfig extends ConfigBase_1.ConfigBase{GetAreaFloorNumber(e,r,o){let t=0;for(const f of TowerConfigBySeason_1.configTowerConfigBySeason.GetConfigList(r===TowerData_1.VARIATION_RISK_DIFFICULTY?e:0))f.Difficulty===r&&f.AreaNum===o&&t++;return t}GetDifficultyFloorNumber(e,r){let o=0;for(const t of TowerConfigBySeason_1.configTowerConfigBySeason.GetConfigList(r===TowerData_1.VARIATION_RISK_DIFFICULTY?e:0))t.Difficulty===r&&o++;return o}GetDifficultyLastFloor(e,r){let o=-1,t=-1,f=-1;for(const i of TowerConfigBySeason_1.configTowerConfigBySeason.GetConfigList(r===TowerData_1.VARIATION_RISK_DIFFICULTY?e:0))i.Difficulty===r&&(o<i.AreaNum&&(o=i.AreaNum,t=-1),t<i.Floor)&&(f=i.Id);return f}GetDifficultyAllFloor(e,r){var o=[];for(const t of TowerConfigBySeason_1.configTowerConfigBySeason.GetConfigList(r===TowerData_1.VARIATION_RISK_DIFFICULTY?e:0))t.Difficulty===r&&o.push(t.Id);return o}GetDifficultyAllAreaFirstFloor(e,r){let o=-1;var t=[];for(const f of TowerConfigBySeason_1.configTowerConfigBySeason.GetConfigList(r===TowerData_1.VARIATION_RISK_DIFFICULTY?e:0))f.Difficulty===r&&o!==f.AreaNum&&(t.push(f.Id),o=f.AreaNum);return t}GetDifficultyAreaAllFloor(e,r,o){var t=[];for(const f of TowerConfigBySeason_1.configTowerConfigBySeason.GetConfigList(r===TowerData_1.VARIATION_RISK_DIFFICULTY?e:0))r===f.Difficulty&&o===f.AreaNum&&t.push(f.Id);return t}GetDifficultyReward(e){return TowerDifficultyByDifficulty_1.configTowerDifficultyByDifficulty.GetConfig(e)?.Reward}GetTowerBuffDesc(e){e=this.GetTowerBuffConfig(e);return MultiTextLang_1.configMultiTextLang.GetLocalTextNew(e.Desc)}GetTowerBuffName(e){e=this.GetTowerBuffConfig(e);return MultiTextLang_1.configMultiTextLang.GetLocalTextNew(e.Name)}GetTowerBuffIcon(e){return this.GetTowerBuffConfig(e)?.Icon}GetTowerBuffConfig(e){e=TowerBuffById_1.configTowerBuffById.GetConfig(BigInt(e));if(e)return e}GetFloorTarget(e){return TowerConfigById_1.configTowerConfigById.GetConfig(e)?.TargetConfig}GetTargetConfig(e){return TowerTargetById_1.configTowerTargetById.GetConfig(e)}GetNextFloorInArea(e){var r=TowerConfigById_1.configTowerConfigById.GetConfig(e);for(const o of TowerConfigBySeason_1.configTowerConfigBySeason.GetConfigList(r.Season))if(o.Difficulty===r.Difficulty&&o.AreaNum===r.AreaNum&&o.Floor>r.Floor)return o.Id;return 0}GetLastFloorInArea(e){var r=TowerConfigById_1.configTowerConfigById.GetConfig(e);if(1===r.Floor)return 0;let o=0;for(const t of TowerConfigBySeason_1.configTowerConfigBySeason.GetConfigList(r.Season))t.Difficulty===r.Difficulty&&t.AreaNum===r.AreaNum&&t.Floor<r.Floor&&(o=t.Id);return o}GetTowerInfo(e){return TowerConfigById_1.configTowerConfigById.GetConfig(e)}GetTowerAreaName(e){e=TowerConfigById_1.configTowerConfigById.GetConfig(e);return MultiTextLang_1.configMultiTextLang.GetLocalTextNew(e.AreaName)}GetNewTowerDifficultTitle(e){switch(e){case TowerData_1.LOW_RISK_DIFFICULTY:return MultiTextLang_1.configMultiTextLang.GetLocalTextNew("NewTower_Diffcult_1")??"";case TowerData_1.HIGH_RISK_DIFFICULTY:return MultiTextLang_1.configMultiTextLang.GetLocalTextNew("NewTower_Diffcult_2")??"";case TowerData_1.VARIATION_RISK_DIFFICULTY:return MultiTextLang_1.configMultiTextLang.GetLocalTextNew("NewTower_Diffcult_3")??"";case TowerData_1.OVERLOCK_RISK_DIFFICULTY:return MultiTextLang_1.configMultiTextLang.GetLocalTextNew("NewTower_Diffcult_4")??"";default:return MultiTextLang_1.configMultiTextLang.GetLocalTextNew("NewTower_Diffcult_1")??""}}}exports.TowerClimbConfig=TowerClimbConfig;
//# sourceMappingURL=TowerClimbConfig.js.map