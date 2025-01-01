
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configDirectTrainActivityAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),DirectTrainActivity_1=require("../Config/DirectTrainActivity"),DB="db_activity.db",FILE="j.剧情直通车活动.xlsx",TABLE="DirectTrainActivity",COMMAND="select BinData from `DirectTrainActivity`",KEY_PREFIX="DirectTrainActivityAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configDirectTrainActivityAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configDirectTrainActivityAll.GetConfigList");exports.configDirectTrainActivityAll={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(i=!0)=>{var t;if(t=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(i){var n=KEY_PREFIX+")";const r=ConfigCommon_1.ConfigCommon.GetConfig(n);if(r)return r}const r=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var o=void 0;if([t,o]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!t)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);o=DirectTrainActivity_1.DirectTrainActivity.getRootAsDirectTrainActivity(new byte_buffer_1.ByteBuffer(new Uint8Array(o.buffer)));r.push(o)}return i&&(n=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(n,r,r.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),r}}};
//# sourceMappingURL=DirectTrainActivityAll.js.map