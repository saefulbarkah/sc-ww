
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPayShopGoodsById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PayShopGoods_1=require("../Config/PayShopGoods"),DB="db_payshop.db",FILE="s.商业化商城.xlsx",TABLE="PayShopGoods",COMMAND="select BinData from `PayShopGoods` where Id=?",KEY_PREFIX="PayShopGoodsById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configPayShopGoodsById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configPayShopGoodsById.GetConfig"),CONFIG_STAT_PREFIX="configPayShopGoodsById.GetConfig(";exports.configPayShopGoodsById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var i=KEY_PREFIX+`#${o})`;const t=ConfigCommon_1.ConfigCommon.GetConfig(i);if(t)return t}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var e,i=void 0;if([e,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),e){const t=PayShopGoods_1.PayShopGoods.getRootAsPayShopGoods(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return n&&(e=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,t)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),t}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=PayShopGoodsById.js.map