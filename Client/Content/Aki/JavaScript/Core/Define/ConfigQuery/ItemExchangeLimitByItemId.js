
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configItemExchangeLimitByItemId=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),ItemExchangeLimit_1=require("../Config/ItemExchangeLimit"),DB="db_item_exchange.db",FILE="d.道具兑换.xlsx",TABLE="ItemExchangeLimit",COMMAND="select BinData from `ItemExchangeLimit` where ItemId=?",KEY_PREFIX="ItemExchangeLimitByItemId",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configItemExchangeLimitByItemId.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configItemExchangeLimitByItemId.GetConfig"),CONFIG_STAT_PREFIX="configItemExchangeLimitByItemId.GetConfig(";exports.configItemExchangeLimitByItemId={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(e,t=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${e})`);if(n=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(t){var i=KEY_PREFIX+`#${e})`;const o=ConfigCommon_1.ConfigCommon.GetConfig(i);if(o)return o}if(n=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["ItemId",e])){var n,i=void 0;if([n,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["ItemId",e]),n){const o=ItemExchangeLimit_1.ItemExchangeLimit.getRootAsItemExchangeLimit(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return t&&(n=KEY_PREFIX+`#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(n,o)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),o}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=ItemExchangeLimitByItemId.js.map