
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configAdviceSentenceAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),AdviceSentence_1=require("../Config/AdviceSentence"),DB="db_advice.db",FILE="s.溯言.xlsx",TABLE="AdviceSentence",COMMAND="select BinData from `AdviceSentence`",KEY_PREFIX="AdviceSentenceAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configAdviceSentenceAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configAdviceSentenceAll.GetConfigList");exports.configAdviceSentenceAll={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(e=!0)=>{var n;if(n=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(e){var o=KEY_PREFIX+")";const t=ConfigCommon_1.ConfigCommon.GetConfig(o);if(t)return t}const t=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var i=void 0;if([n,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!n)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);i=AdviceSentence_1.AdviceSentence.getRootAsAdviceSentence(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));t.push(i)}return e&&(o=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(o,t,t.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),t}}};
//# sourceMappingURL=AdviceSentenceAll.js.map