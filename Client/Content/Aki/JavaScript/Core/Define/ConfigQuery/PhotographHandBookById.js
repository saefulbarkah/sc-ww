
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPhotographHandBookById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PhotographHandBook_1=require("../Config/PhotographHandBook"),DB="db_handbook.db",FILE="t.图鉴系统.xlsx",TABLE="PhotographHandBook",COMMAND="select BinData from `PhotographHandBook` where Id = ?",KEY_PREFIX="PhotographHandBookById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configPhotographHandBookById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configPhotographHandBookById.GetConfig"),CONFIG_STAT_PREFIX="configPhotographHandBookById.GetConfig(";exports.configPhotographHandBookById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(a=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var t=KEY_PREFIX+`#${o})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(t);if(i)return i}if(a=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var a,t=void 0;if([a,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),a){const i=PhotographHandBook_1.PhotographHandBook.getRootAsPhotographHandBook(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));return n&&(a=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(a,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=PhotographHandBookById.js.map