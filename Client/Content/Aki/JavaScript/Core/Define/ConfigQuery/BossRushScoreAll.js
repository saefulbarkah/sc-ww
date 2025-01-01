
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configBossRushScoreAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),BossRushScore_1=require("../Config/BossRushScore"),DB="db_activity.db",FILE="b.bossrush活动.xlsx",TABLE="BossRushScore",COMMAND="select BinData from `BossRushScore`",KEY_PREFIX="BossRushScoreAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configBossRushScoreAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configBossRushScoreAll.GetConfigList");exports.configBossRushScoreAll={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(o=!0)=>{var e;if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var n=KEY_PREFIX+")";const s=ConfigCommon_1.ConfigCommon.GetConfig(n);if(s)return s}const s=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var i=void 0;if([e,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!e)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);i=BossRushScore_1.BossRushScore.getRootAsBossRushScore(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));s.push(i)}return o&&(n=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(n,s,s.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),s}}};
//# sourceMappingURL=BossRushScoreAll.js.map