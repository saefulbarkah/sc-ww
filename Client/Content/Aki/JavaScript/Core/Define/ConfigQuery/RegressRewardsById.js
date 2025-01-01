
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configRegressRewardsById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),RegressRewards_1=require("../Config/RegressRewards"),DB="db_activity.db",FILE="h.回流活动.xlsx",TABLE="RegressRewards",COMMAND="select BinData from `RegressRewards` where Id=?",KEY_PREFIX="RegressRewardsById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configRegressRewardsById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configRegressRewardsById.GetConfig"),CONFIG_STAT_PREFIX="configRegressRewardsById.GetConfig(";exports.configRegressRewardsById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(e,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${e})`);if(r=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var n=KEY_PREFIX+`#${e})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(n);if(i)return i}if(r=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",e])){var r,n=void 0;if([r,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",e]),r){const i=RegressRewards_1.RegressRewards.getRootAsRegressRewards(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return o&&(r=KEY_PREFIX+`#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(r,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=RegressRewardsById.js.map