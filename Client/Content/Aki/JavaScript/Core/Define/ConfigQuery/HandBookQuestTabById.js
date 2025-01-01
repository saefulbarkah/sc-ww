
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configHandBookQuestTabById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),HandBookQuestTab_1=require("../Config/HandBookQuestTab"),DB="db_handbook.db",FILE="t.图鉴系统.xlsx",TABLE="HandBookQuestTab",COMMAND="select BinData from `HandBookQuestTab` where Id=?",KEY_PREFIX="HandBookQuestTabById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configHandBookQuestTabById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configHandBookQuestTabById.GetConfig"),CONFIG_STAT_PREFIX="configHandBookQuestTabById.GetConfig(";exports.configHandBookQuestTabById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(t=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var e=KEY_PREFIX+`#${o})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(e);if(a)return a}if(t=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var t,e=void 0;if([t,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),t){const a=HandBookQuestTab_1.HandBookQuestTab.getRootAsHandBookQuestTab(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));return n&&(t=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,a)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),a}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=HandBookQuestTabById.js.map