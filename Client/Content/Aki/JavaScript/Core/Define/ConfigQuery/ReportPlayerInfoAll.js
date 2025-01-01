
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configReportPlayerInfoAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),ReportPlayerInfo_1=require("../Config/ReportPlayerInfo"),DB="db_report.db",FILE="f.封禁处罚.xlsx",TABLE="ReportPlayerInfo",COMMAND="select BinData from `ReportPlayerInfo`",KEY_PREFIX="ReportPlayerInfoAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configReportPlayerInfoAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configReportPlayerInfoAll.GetConfigList");exports.configReportPlayerInfoAll={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(o=!0)=>{var e;if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var n=KEY_PREFIX+")";const t=ConfigCommon_1.ConfigCommon.GetConfig(n);if(t)return t}const t=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var r=void 0;if([e,r]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!e)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);r=ReportPlayerInfo_1.ReportPlayerInfo.getRootAsReportPlayerInfo(new byte_buffer_1.ByteBuffer(new Uint8Array(r.buffer)));t.push(r)}return o&&(n=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(n,t,t.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),t}}};
//# sourceMappingURL=ReportPlayerInfoAll.js.map