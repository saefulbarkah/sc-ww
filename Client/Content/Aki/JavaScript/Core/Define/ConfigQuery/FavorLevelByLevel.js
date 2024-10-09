
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configFavorLevelByLevel=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),FavorLevel_1=require("../Config/FavorLevel"),DB="db_favor.db",FILE="h.好感度.xlsx",TABLE="FavorLevel",COMMAND="select BinData from `FavorLevel` where Level=?",KEY_PREFIX="FavorLevelByLevel",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.Create("configFavorLevelByLevel.Init"),getConfigStat=Stats_1.Stat.Create("configFavorLevelByLevel.GetConfig"),CONFIG_STAT_PREFIX="configFavorLevelByLevel.GetConfig(";exports.configFavorLevelByLevel={Init:()=>{initStat.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat.Stop()},GetConfig:(o,e=!0)=>{ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigStat.Start();var n=Stats_1.Stat.Create(CONFIG_STAT_PREFIX+`#${o})`),i=(n.Start(),ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair));if(i){if(e){var t=KEY_PREFIX+`#${o})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(t);if(a)return n.Stop(),getConfigStat.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),a}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Level",o])){t=void 0;if([i,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Level",o]),i){const a=FavorLevel_1.FavorLevel.getRootAsFavorLevel(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));return e&&(i=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,a)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),n.Stop(),getConfigStat.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),a}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}n.Stop(),getConfigStat.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=FavorLevelByLevel.js.map