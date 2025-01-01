
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configAchievementStarLevelByLevel=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),AchievementStarLevel_1=require("../Config/AchievementStarLevel"),DB="db_achievement.db",FILE="c.成就.xlsx",TABLE="AchievementStarLevel",COMMAND="select BinData from `AchievementStarLevel` where Level=?",KEY_PREFIX="AchievementStarLevelByLevel",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configAchievementStarLevelByLevel.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configAchievementStarLevelByLevel.GetConfig"),CONFIG_STAT_PREFIX="configAchievementStarLevelByLevel.GetConfig(";exports.configAchievementStarLevelByLevel={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(e,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${e})`);if(t=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var o=KEY_PREFIX+`#${e})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(o);if(i)return i}if(t=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Level",e])){var t,o=void 0;if([t,o]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Level",e]),t){const i=AchievementStarLevel_1.AchievementStarLevel.getRootAsAchievementStarLevel(new byte_buffer_1.ByteBuffer(new Uint8Array(o.buffer)));return n&&(t=KEY_PREFIX+`#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=AchievementStarLevelByLevel.js.map