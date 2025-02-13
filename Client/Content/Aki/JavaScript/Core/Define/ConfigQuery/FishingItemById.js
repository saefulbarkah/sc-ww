
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configFishingItemById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),FishingItem_1=require("../Config/FishingItem"),DB="db_fishing.db",FILE="b.捕鱼相关.xlsx",TABLE="FishingItem",COMMAND="select BinData from `FishingItem` where Id=?",KEY_PREFIX="FishingItemById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configFishingItemById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configFishingItemById.GetConfig"),CONFIG_STAT_PREFIX="configFishingItemById.GetConfig(";exports.configFishingItemById={Init:()=>{initStat?.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat?.Stop()},GetConfig:(i,n=!0)=>{ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigStat?.Start();var o=Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${i})`),t=(o?.Start(),ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair));if(t){if(n){var e=KEY_PREFIX+`#${i})`;const g=ConfigCommon_1.ConfigCommon.GetConfig(e);if(g)return o?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),g}if(t=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,i,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",i])){e=void 0;if([t,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",i]),t){const g=FishingItem_1.FishingItem.getRootAsFishingItem(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));return n&&(t=KEY_PREFIX+`#${i})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,g)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),o?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),g}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}o?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=FishingItemById.js.map