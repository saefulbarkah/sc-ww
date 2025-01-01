
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configRiskHarvestBuffRewardById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),RiskHarvestBuffReward_1=require("../Config/RiskHarvestBuffReward"),DB="db_activity.db",FILE="g.割草冒险活动.xlsx",TABLE="RiskHarvestBuffReward",COMMAND="select BinData from `RiskHarvestBuffReward` where Id = ?",KEY_PREFIX="RiskHarvestBuffRewardById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configRiskHarvestBuffRewardById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configRiskHarvestBuffRewardById.GetConfig"),CONFIG_STAT_PREFIX="configRiskHarvestBuffRewardById.GetConfig(";exports.configRiskHarvestBuffRewardById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(e,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${e})`);if(n=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var i=KEY_PREFIX+`#${e})`;const f=ConfigCommon_1.ConfigCommon.GetConfig(i);if(f)return f}if(n=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",e])){var n,i=void 0;if([n,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",e]),n){const f=RiskHarvestBuffReward_1.RiskHarvestBuffReward.getRootAsRiskHarvestBuffReward(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return o&&(n=KEY_PREFIX+`#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(n,f)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),f}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=RiskHarvestBuffRewardById.js.map