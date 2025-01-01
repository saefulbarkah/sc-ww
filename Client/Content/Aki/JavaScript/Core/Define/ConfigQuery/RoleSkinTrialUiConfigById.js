
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configRoleSkinTrialUiConfigById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),RoleSkinTrialUiConfig_1=require("../Config/RoleSkinTrialUiConfig"),DB="db_activity.db",FILE="j.角色皮肤试用活动.xlsx",TABLE="RoleSkinTrialUiConfig",COMMAND="select BinData from `RoleSkinTrialUiConfig` where Id=?",KEY_PREFIX="RoleSkinTrialUiConfigById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configRoleSkinTrialUiConfigById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configRoleSkinTrialUiConfigById.GetConfig"),CONFIG_STAT_PREFIX="configRoleSkinTrialUiConfigById.GetConfig(";exports.configRoleSkinTrialUiConfigById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(i,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${i})`);if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var n=KEY_PREFIX+`#${i})`;const f=ConfigCommon_1.ConfigCommon.GetConfig(n);if(f)return f}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,i,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",i])){var e,n=void 0;if([e,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",i]),e){const f=RoleSkinTrialUiConfig_1.RoleSkinTrialUiConfig.getRootAsRoleSkinTrialUiConfig(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return o&&(e=KEY_PREFIX+`#${i})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,f)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),f}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=RoleSkinTrialUiConfigById.js.map