
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configRiskHarvestScoreRewardById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),RiskHarvestScoreReward_1=require("../Config/RiskHarvestScoreReward"),DB="db_activity.db",FILE="g.割草冒险活动.xlsx",TABLE="RiskHarvestScoreReward",COMMAND="select BinData from `RiskHarvestScoreReward` where Id = ?",KEY_PREFIX="RiskHarvestScoreRewardById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configRiskHarvestScoreRewardById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configRiskHarvestScoreRewardById.GetConfig"),CONFIG_STAT_PREFIX="configRiskHarvestScoreRewardById.GetConfig(";exports.configRiskHarvestScoreRewardById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(e,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${e})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var r=KEY_PREFIX+`#${e})`;const n=ConfigCommon_1.ConfigCommon.GetConfig(r);if(n)return n}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",e])){var i,r=void 0;if([i,r]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",e]),i){const n=RiskHarvestScoreReward_1.RiskHarvestScoreReward.getRootAsRiskHarvestScoreReward(new byte_buffer_1.ByteBuffer(new Uint8Array(r.buffer)));return o&&(i=KEY_PREFIX+`#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,n)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),n}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=RiskHarvestScoreRewardById.js.map