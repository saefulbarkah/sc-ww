
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPcKeyAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PcKey_1=require("../Config/PcKey"),DB="db_key.db",FILE="a.按键.xlsx",TABLE="PcKey",COMMAND="select BinData from `PcKey`",KEY_PREFIX="PcKeyAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.Create("configPcKeyAll.Init"),getConfigListStat=Stats_1.Stat.Create("configPcKeyAll.GetConfigList");exports.configPcKeyAll={Init:()=>{initStat.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat.Stop()},GetConfigList:(o=!0)=>{var n;if(ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigListStat.Start(),n=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var t=KEY_PREFIX+")";const e=ConfigCommon_1.ConfigCommon.GetConfig(t);if(e)return getConfigListStat.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),e}const e=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var i=void 0;if([n,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!n)return ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),getConfigListStat.Stop(),void ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop();i=PcKey_1.PcKey.getRootAsPcKey(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));e.push(i)}return o&&(t=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(t,e,e.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),getConfigListStat.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),e}getConfigListStat.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=PcKeyAll.js.map