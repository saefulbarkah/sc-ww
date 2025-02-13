
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configAdviceSentenceAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),AdviceSentence_1=require("../Config/AdviceSentence"),DB="db_advice.db",FILE="s.溯言.xlsx",TABLE="AdviceSentence",COMMAND="select BinData from `AdviceSentence`",KEY_PREFIX="AdviceSentenceAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configAdviceSentenceAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configAdviceSentenceAll.GetConfigList");exports.configAdviceSentenceAll={Init:()=>{initStat?.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat?.Stop()},GetConfigList:(n=!0)=>{var e;if(ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigListStat?.Start(),e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var o=KEY_PREFIX+")";const i=ConfigCommon_1.ConfigCommon.GetConfig(o);if(i)return getConfigListStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),i}const i=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var t=void 0;if([e,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!e)return ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),getConfigListStat?.Stop(),void ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop();t=AdviceSentence_1.AdviceSentence.getRootAsAdviceSentence(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));i.push(t)}return n&&(o=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(o,i,i.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),getConfigListStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),i}getConfigListStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=AdviceSentenceAll.js.map