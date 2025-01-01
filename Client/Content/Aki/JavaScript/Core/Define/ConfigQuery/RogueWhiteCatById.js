
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configRogueWhiteCatById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),RogueWhiteCat_1=require("../Config/RogueWhiteCat"),DB="db_activity.db",FILE="m.梦境链接活动.xlsx",TABLE="RogueWhiteCat",COMMAND="select BinData from `RogueWhiteCat` where Id=?",KEY_PREFIX="RogueWhiteCatById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configRogueWhiteCatById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configRogueWhiteCatById.GetConfig"),CONFIG_STAT_PREFIX="configRogueWhiteCatById.GetConfig(";exports.configRogueWhiteCatById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,e=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(e){var t=KEY_PREFIX+`#${o})`;const n=ConfigCommon_1.ConfigCommon.GetConfig(t);if(n)return n}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var i,t=void 0;if([i,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),i){const n=RogueWhiteCat_1.RogueWhiteCat.getRootAsRogueWhiteCat(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));return e&&(i=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,n)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),n}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=RogueWhiteCatById.js.map