
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configAiTeamLevelNewById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),AiTeamLevelNew_1=require("../Config/AiTeamLevelNew"),DB="db_ai.db",FILE="a.AI集群总表.xlsx",TABLE="AiTeamLevelNew",COMMAND="select BinData from `AiTeamLevelNew` where Id=?",KEY_PREFIX="AiTeamLevelNewById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configAiTeamLevelNewById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configAiTeamLevelNewById.GetConfig"),CONFIG_STAT_PREFIX="configAiTeamLevelNewById.GetConfig(";exports.configAiTeamLevelNewById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(e,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${e})`);if(n=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var i=KEY_PREFIX+`#${e})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(i);if(a)return a}if(n=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",e])){var n,i=void 0;if([n,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",e]),n){const a=AiTeamLevelNew_1.AiTeamLevelNew.getRootAsAiTeamLevelNew(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return o&&(n=KEY_PREFIX+`#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(n,a)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),a}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=AiTeamLevelNewById.js.map