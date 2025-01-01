
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configRiskHarvestInstByInstanceID=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),RiskHarvestInst_1=require("../Config/RiskHarvestInst"),DB="db_activity.db",FILE="g.割草冒险活动.xlsx",TABLE="RiskHarvestInst",COMMAND="select BinData from `RiskHarvestInst` where InstanceID = ?",KEY_PREFIX="RiskHarvestInstByInstanceID",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configRiskHarvestInstByInstanceID.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configRiskHarvestInstByInstanceID.GetConfig"),CONFIG_STAT_PREFIX="configRiskHarvestInstByInstanceID.GetConfig(";exports.configRiskHarvestInstByInstanceID={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(n,t=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${n})`);if(o=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(t){var e=KEY_PREFIX+`#${n})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(e);if(i)return i}if(o=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,n,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["InstanceID",n])){var o,e=void 0;if([o,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["InstanceID",n]),o){const i=RiskHarvestInst_1.RiskHarvestInst.getRootAsRiskHarvestInst(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));return t&&(o=KEY_PREFIX+`#${n})`,ConfigCommon_1.ConfigCommon.SaveConfig(o,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=RiskHarvestInstByInstanceID.js.map