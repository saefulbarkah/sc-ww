
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configRogueWhiteCatRewardById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),RogueWhiteCatReward_1=require("../Config/RogueWhiteCatReward"),DB="db_activity.db",FILE="m.梦境链接活动.xlsx",TABLE="RogueWhiteCatReward",COMMAND="select BinData from `RogueWhiteCatReward` where Id=?",KEY_PREFIX="RogueWhiteCatRewardById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configRogueWhiteCatRewardById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configRogueWhiteCatRewardById.GetConfig"),CONFIG_STAT_PREFIX="configRogueWhiteCatRewardById.GetConfig(";exports.configRogueWhiteCatRewardById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(e,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${e})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var t=KEY_PREFIX+`#${e})`;const n=ConfigCommon_1.ConfigCommon.GetConfig(t);if(n)return n}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",e])){var i,t=void 0;if([i,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",e]),i){const n=RogueWhiteCatReward_1.RogueWhiteCatReward.getRootAsRogueWhiteCatReward(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));return o&&(i=KEY_PREFIX+`#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,n)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),n}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=RogueWhiteCatRewardById.js.map