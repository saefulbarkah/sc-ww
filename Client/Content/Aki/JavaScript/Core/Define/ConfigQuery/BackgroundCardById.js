
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configBackgroundCardById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),BackgroundCard_1=require("../Config/BackgroundCard"),DB="db_personal_card.db",FILE="m.名片.xlsx",TABLE="BackgroundCard",COMMAND="select BinData from `BackgroundCard` where Id = ?",KEY_PREFIX="BackgroundCardById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configBackgroundCardById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configBackgroundCardById.GetConfig"),CONFIG_STAT_PREFIX="configBackgroundCardById.GetConfig(";exports.configBackgroundCardById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(a=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var r=KEY_PREFIX+`#${o})`;const d=ConfigCommon_1.ConfigCommon.GetConfig(r);if(d)return d}if(a=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var a,r=void 0;if([a,r]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),a){const d=BackgroundCard_1.BackgroundCard.getRootAsBackgroundCard(new byte_buffer_1.ByteBuffer(new Uint8Array(r.buffer)));return n&&(a=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(a,d)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),d}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=BackgroundCardById.js.map