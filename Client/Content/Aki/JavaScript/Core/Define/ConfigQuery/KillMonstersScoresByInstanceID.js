
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configKillMonstersScoresByInstanceID=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),KillMonstersScores_1=require("../Config/KillMonstersScores"),DB="db_activity.db",FILE="g.割草活动.xlsx",TABLE="KillMonstersScores",COMMAND="select BinData from `KillMonstersScores` where InstanceID=?",KEY_PREFIX="KillMonstersScoresByInstanceID",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configKillMonstersScoresByInstanceID.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configKillMonstersScoresByInstanceID.GetConfig"),CONFIG_STAT_PREFIX="configKillMonstersScoresByInstanceID.GetConfig(";exports.configKillMonstersScoresByInstanceID={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(t=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var e=KEY_PREFIX+`#${o})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(e);if(i)return i}if(t=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["InstanceID",o])){var t,e=void 0;if([t,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["InstanceID",o]),t){const i=KillMonstersScores_1.KillMonstersScores.getRootAsKillMonstersScores(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));return n&&(t=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=KillMonstersScoresByInstanceID.js.map