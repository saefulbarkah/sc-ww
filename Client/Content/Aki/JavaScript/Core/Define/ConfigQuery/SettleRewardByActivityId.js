
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configSettleRewardByActivityId=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),SettleReward_1=require("../Config/SettleReward"),DB="db_activity.db",FILE="c.2.0春节签到.xlsx",TABLE="SettleReward",COMMAND="select BinData from `SettleReward` where ActivityId=?",KEY_PREFIX="SettleRewardByActivityId",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configSettleRewardByActivityId.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configSettleRewardByActivityId.GetConfig"),CONFIG_STAT_PREFIX="configSettleRewardByActivityId.GetConfig(";exports.configSettleRewardByActivityId={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(t,e=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${t})`);if(o=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(e){var i=KEY_PREFIX+`#${t})`;const n=ConfigCommon_1.ConfigCommon.GetConfig(i);if(n)return n}if(o=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,t,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["ActivityId",t])){var o,i=void 0;if([o,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["ActivityId",t]),o){const n=SettleReward_1.SettleReward.getRootAsSettleReward(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return e&&(o=KEY_PREFIX+`#${t})`,ConfigCommon_1.ConfigCommon.SaveConfig(o,n)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),n}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=SettleRewardByActivityId.js.map