
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configShopInfoById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),ShopInfo_1=require("../Config/ShopInfo"),DB="db_shop.db",FILE="s.商城.xlsx",TABLE="ShopInfo",COMMAND="select BinData from `ShopInfo` where Id = ?",KEY_PREFIX="ShopInfoById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.Create("configShopInfoById.Init"),getConfigStat=Stats_1.Stat.Create("configShopInfoById.GetConfig"),CONFIG_STAT_PREFIX="configShopInfoById.GetConfig(";exports.configShopInfoById={Init:()=>{initStat.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat.Stop()},GetConfig:(o,n=!0)=>{ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigStat.Start();var i=Stats_1.Stat.Create(CONFIG_STAT_PREFIX+`#${o})`),t=(i.Start(),ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair));if(t){if(n){var f=KEY_PREFIX+`#${o})`;const e=ConfigCommon_1.ConfigCommon.GetConfig(f);if(e)return i.Stop(),getConfigStat.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),e}if(t=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){f=void 0;if([t,f]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),t){const e=ShopInfo_1.ShopInfo.getRootAsShopInfo(new byte_buffer_1.ByteBuffer(new Uint8Array(f.buffer)));return n&&(t=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,e)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i.Stop(),getConfigStat.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),e}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}i.Stop(),getConfigStat.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=ShopInfoById.js.map