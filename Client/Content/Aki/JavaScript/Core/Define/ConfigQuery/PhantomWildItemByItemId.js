
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPhantomWildItemByItemId=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PhantomWildItem_1=require("../Config/PhantomWildItem"),DB="db_phantom.db",FILE="h.幻象.xlsx",TABLE="PhantomWildItem",COMMAND="select BinData from `PhantomWildItem` where ItemId=?",KEY_PREFIX="PhantomWildItemByItemId",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configPhantomWildItemByItemId.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configPhantomWildItemByItemId.GetConfig"),CONFIG_STAT_PREFIX="configPhantomWildItemByItemId.GetConfig(";exports.configPhantomWildItemByItemId={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,t=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(t){var n=KEY_PREFIX+`#${o})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(n);if(i)return i}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["ItemId",o])){var e,n=void 0;if([e,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["ItemId",o]),e){const i=PhantomWildItem_1.PhantomWildItem.getRootAsPhantomWildItem(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return t&&(e=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=PhantomWildItemByItemId.js.map