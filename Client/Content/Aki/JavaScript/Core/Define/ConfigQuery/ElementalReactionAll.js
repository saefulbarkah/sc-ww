
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configElementalReactionAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),ElementalReaction_1=require("../Config/ElementalReaction"),DB="db_element_info.db",FILE="y.元素属性.xlsx",TABLE="ElementalReaction",COMMAND="select BinData from `ElementalReaction`",KEY_PREFIX="ElementalReactionAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configElementalReactionAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configElementalReactionAll.GetConfigList");exports.configElementalReactionAll={Init:()=>{initStat?.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat?.Stop()},GetConfigList:(n=!0)=>{var o;if(ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigListStat?.Start(),o=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var t=KEY_PREFIX+")";const i=ConfigCommon_1.ConfigCommon.GetConfig(t);if(i)return getConfigListStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),i}const i=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var e=void 0;if([o,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!o)return ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),getConfigListStat?.Stop(),void ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop();e=ElementalReaction_1.ElementalReaction.getRootAsElementalReaction(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));i.push(e)}return n&&(t=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(t,i,i.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),getConfigListStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),i}getConfigListStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=ElementalReactionAll.js.map