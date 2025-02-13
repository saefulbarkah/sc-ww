
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPreOpenDetectionAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PreOpenDetection_1=require("../Config/PreOpenDetection"),DB="db_adventure_detect.db",FILE="k.开拓探测.xlsx",TABLE="PreOpenDetection",COMMAND="select BinData from `PreOpenDetection`",KEY_PREFIX="PreOpenDetectionAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configPreOpenDetectionAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configPreOpenDetectionAll.GetConfigList");exports.configPreOpenDetectionAll={Init:()=>{initStat?.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat?.Stop()},GetConfigList:(t=!0)=>{var e;if(ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigListStat?.Start(),e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(t){var n=KEY_PREFIX+")";const i=ConfigCommon_1.ConfigCommon.GetConfig(n);if(i)return getConfigListStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),i}const i=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var o=void 0;if([e,o]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!e)return ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),getConfigListStat?.Stop(),void ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop();o=PreOpenDetection_1.PreOpenDetection.getRootAsPreOpenDetection(new byte_buffer_1.ByteBuffer(new Uint8Array(o.buffer)));i.push(o)}return t&&(n=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(n,i,i.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),getConfigListStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),i}getConfigListStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=PreOpenDetectionAll.js.map