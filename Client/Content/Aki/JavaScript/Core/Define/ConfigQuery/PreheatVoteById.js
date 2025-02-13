
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPreheatVoteById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PreheatVote_1=require("../Config/PreheatVote"),DB="db_preheat.db",FILE="y.预热签到活动.xlsx",TABLE="PreheatVote",COMMAND="select BinData from `PreheatVote` where Id=?",KEY_PREFIX="PreheatVoteById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configPreheatVoteById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configPreheatVoteById.GetConfig"),CONFIG_STAT_PREFIX="configPreheatVoteById.GetConfig(";exports.configPreheatVoteById={Init:()=>{initStat?.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat?.Stop()},GetConfig:(o,e=!0)=>{ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigStat?.Start();var t=Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`),n=(t?.Start(),ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair));if(n){if(e){var i=KEY_PREFIX+`#${o})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(i);if(a)return t?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),a}if(n=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){i=void 0;if([n,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),n){const a=PreheatVote_1.PreheatVote.getRootAsPreheatVote(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return e&&(n=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(n,a)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),t?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),a}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}t?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=PreheatVoteById.js.map