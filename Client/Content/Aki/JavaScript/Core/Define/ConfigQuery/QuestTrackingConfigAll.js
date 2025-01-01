
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configQuestTrackingConfigAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),QuestTrackingConfig_1=require("../Config/QuestTrackingConfig"),DB="db_questtrackingconfig.db",FILE="k.可视化编辑/c.Csv/r.任务追踪配置/*.csv*",TABLE="QuestTrackingConfig",COMMAND="select BinData from `QuestTrackingConfig`",KEY_PREFIX="QuestTrackingConfigAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configQuestTrackingConfigAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configQuestTrackingConfigAll.GetConfigList");exports.configQuestTrackingConfigAll={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(n=!0)=>{var o;if(o=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var i=KEY_PREFIX+")";const t=ConfigCommon_1.ConfigCommon.GetConfig(i);if(t)return t}const t=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var e=void 0;if([o,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!o)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);e=QuestTrackingConfig_1.QuestTrackingConfig.getRootAsQuestTrackingConfig(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));t.push(e)}return n&&(i=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(i,t,t.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),t}}};
//# sourceMappingURL=QuestTrackingConfigAll.js.map