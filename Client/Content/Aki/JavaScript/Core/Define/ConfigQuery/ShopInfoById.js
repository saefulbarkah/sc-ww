
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configShopInfoById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),ShopInfo_1=require("../Config/ShopInfo"),DB="db_shop.db",FILE="s.商城.xlsx",TABLE="ShopInfo",COMMAND="select BinData from `ShopInfo` where Id = ?",KEY_PREFIX="ShopInfoById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configShopInfoById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configShopInfoById.GetConfig"),CONFIG_STAT_PREFIX="configShopInfoById.GetConfig(";exports.configShopInfoById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var i=KEY_PREFIX+`#${o})`;const f=ConfigCommon_1.ConfigCommon.GetConfig(i);if(f)return f}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var e,i=void 0;if([e,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),e){const f=ShopInfo_1.ShopInfo.getRootAsShopInfo(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return n&&(e=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,f)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),f}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=ShopInfoById.js.map