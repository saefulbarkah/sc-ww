
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configGmOrderConfigAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),GmOrderConfig_1=require("../Config/GmOrderConfig"),DB="db_gm.db",FILE="g.GM.xlsx",TABLE="GmOrderConfig",COMMAND="select BinData from `GmOrderConfig`",KEY_PREFIX="GmOrderConfigAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configGmOrderConfigAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configGmOrderConfigAll.GetConfigList");exports.configGmOrderConfigAll={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(o=!0)=>{var n;if(n=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var i=KEY_PREFIX+")";const e=ConfigCommon_1.ConfigCommon.GetConfig(i);if(e)return e}const e=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var r=void 0;if([n,r]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!n)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);r=GmOrderConfig_1.GmOrderConfig.getRootAsGmOrderConfig(new byte_buffer_1.ByteBuffer(new Uint8Array(r.buffer)));e.push(r)}return o&&(i=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(i,e,e.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),e}}};
//# sourceMappingURL=GmOrderConfigAll.js.map