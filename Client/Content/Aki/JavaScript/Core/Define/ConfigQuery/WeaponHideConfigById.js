
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configWeaponHideConfigById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),WeaponHideConfig_1=require("../Config/WeaponHideConfig"),DB="db_weapon_visible.db",FILE="w.武器显示配置.xlsx",TABLE="WeaponHideConfig",COMMAND="select BinData from `WeaponHideConfig` where Id=?",KEY_PREFIX="WeaponHideConfigById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configWeaponHideConfigById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configWeaponHideConfigById.GetConfig"),CONFIG_STAT_PREFIX="configWeaponHideConfigById.GetConfig(";exports.configWeaponHideConfigById={Init:()=>{initStat?.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat?.Stop()},GetConfig:(o,n=!0)=>{ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigStat?.Start();var i=Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`),e=(i?.Start(),ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair));if(e){if(n){var t=KEY_PREFIX+`#${o})`;const C=ConfigCommon_1.ConfigCommon.GetConfig(t);if(C)return i?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),C}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){t=void 0;if([e,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),e){const C=WeaponHideConfig_1.WeaponHideConfig.getRootAsWeaponHideConfig(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));return n&&(e=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,C)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),C}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}i?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=WeaponHideConfigById.js.map