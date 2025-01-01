
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configNounHandBookById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),NounHandBook_1=require("../Config/NounHandBook"),DB="db_handbook.db",FILE="t.图鉴系统.xlsx",TABLE="NounHandBook",COMMAND="select BinData from `NounHandBook` where Id=?",KEY_PREFIX="NounHandBookById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configNounHandBookById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configNounHandBookById.GetConfig"),CONFIG_STAT_PREFIX="configNounHandBookById.GetConfig(";exports.configNounHandBookById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var i=KEY_PREFIX+`#${o})`;const t=ConfigCommon_1.ConfigCommon.GetConfig(i);if(t)return t}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var e,i=void 0;if([e,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),e){const t=NounHandBook_1.NounHandBook.getRootAsNounHandBook(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return n&&(e=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,t)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),t}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=NounHandBookById.js.map