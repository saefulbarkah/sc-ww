
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configChipHandBookByType=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),ChipHandBook_1=require("../Config/ChipHandBook"),DB="db_handbook.db",FILE="t.图鉴系统.xlsx",TABLE="ChipHandBook",COMMAND="select BinData from `ChipHandBook` where Type=?",KEY_PREFIX="ChipHandBookByType",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configChipHandBookByType.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configChipHandBookByType.GetConfigList"),CONFIG_LIST_STAT_PREFIX="configChipHandBookByType.GetConfigList(";exports.configChipHandBookByType={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(o,n=!0)=>{var i;Stats_1.Stat.CreateNoFlameGraph(CONFIG_LIST_STAT_PREFIX+`#${o})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var e=KEY_PREFIX+`#${o})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(e);if(a)return a}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)){const a=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair,["Type",o]))break;var t=void 0;if([i,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Type",o]),!i)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);t=ChipHandBook_1.ChipHandBook.getRootAsChipHandBook(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));a.push(t)}return n&&(e=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,a,a.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),a}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=ChipHandBookByType.js.map