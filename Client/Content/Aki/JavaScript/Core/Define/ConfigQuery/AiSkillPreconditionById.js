
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configAiSkillPreconditionById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),AiSkillPrecondition_1=require("../Config/AiSkillPrecondition"),DB="db_ai.db",FILE="a.AI随机技能前置条件.xlsx",TABLE="AiSkillPrecondition",COMMAND="select BinData from `AiSkillPrecondition` where Id=?",KEY_PREFIX="AiSkillPreconditionById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configAiSkillPreconditionById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configAiSkillPreconditionById.GetConfig"),CONFIG_STAT_PREFIX="configAiSkillPreconditionById.GetConfig(";exports.configAiSkillPreconditionById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(i,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${i})`);if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var n=KEY_PREFIX+`#${i})`;const t=ConfigCommon_1.ConfigCommon.GetConfig(n);if(t)return t}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,i,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",i])){var e,n=void 0;if([e,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",i]),e){const t=AiSkillPrecondition_1.AiSkillPrecondition.getRootAsAiSkillPrecondition(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return o&&(e=KEY_PREFIX+`#${i})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,t)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),t}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=AiSkillPreconditionById.js.map