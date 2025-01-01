
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configMowTowerRewardReAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),MowTowerRewardRe_1=require("../Config/MowTowerRewardRe"),DB="db_activity.db",FILE="g.割草爬塔活动.xlsx",TABLE="MowTowerRewardRe",COMMAND="select BinData from `MowTowerRewardRe`",KEY_PREFIX="MowTowerRewardReAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configMowTowerRewardReAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configMowTowerRewardReAll.GetConfigList");exports.configMowTowerRewardReAll={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(o=!0)=>{var e;if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var r=KEY_PREFIX+")";const i=ConfigCommon_1.ConfigCommon.GetConfig(r);if(i)return i}const i=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var n=void 0;if([e,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!e)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);n=MowTowerRewardRe_1.MowTowerRewardRe.getRootAsMowTowerRewardRe(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));i.push(n)}return o&&(r=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(r,i,i.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}};
//# sourceMappingURL=MowTowerRewardReAll.js.map