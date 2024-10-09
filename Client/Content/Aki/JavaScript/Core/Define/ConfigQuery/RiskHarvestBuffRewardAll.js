
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configRiskHarvestBuffRewardAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),RiskHarvestBuffReward_1=require("../Config/RiskHarvestBuffReward"),DB="db_activity.db",FILE="g.割草冒险活动.xlsx",TABLE="RiskHarvestBuffReward",COMMAND="select BinData from `RiskHarvestBuffReward`",KEY_PREFIX="RiskHarvestBuffRewardAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.Create("configRiskHarvestBuffRewardAll.Init"),getConfigListStat=Stats_1.Stat.Create("configRiskHarvestBuffRewardAll.GetConfigList");exports.configRiskHarvestBuffRewardAll={Init:()=>{initStat.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat.Stop()},GetConfigList:(o=!0)=>{var t;if(ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigListStat.Start(),t=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var i=KEY_PREFIX+")";const e=ConfigCommon_1.ConfigCommon.GetConfig(i);if(e)return getConfigListStat.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),e}const e=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var n=void 0;if([t,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!t)return ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),getConfigListStat.Stop(),void ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop();n=RiskHarvestBuffReward_1.RiskHarvestBuffReward.getRootAsRiskHarvestBuffReward(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));e.push(n)}return o&&(i=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(i,e,e.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),getConfigListStat.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),e}getConfigListStat.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=RiskHarvestBuffRewardAll.js.map