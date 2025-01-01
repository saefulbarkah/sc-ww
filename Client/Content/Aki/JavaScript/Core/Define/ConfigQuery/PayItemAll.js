
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPayItemAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PayItem_1=require("../Config/PayItem"),DB="db_paycurrency.db",FILE="c.充值.xlsx",TABLE="PayItem",COMMAND="select BinData from `PayItem`",KEY_PREFIX="PayItemAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configPayItemAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configPayItemAll.GetConfigList");exports.configPayItemAll={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(o=!0)=>{var e;if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var n=KEY_PREFIX+")";const i=ConfigCommon_1.ConfigCommon.GetConfig(n);if(i)return i}const i=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var t=void 0;if([e,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!e)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);t=PayItem_1.PayItem.getRootAsPayItem(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));i.push(t)}return o&&(n=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(n,i,i.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}};
//# sourceMappingURL=PayItemAll.js.map