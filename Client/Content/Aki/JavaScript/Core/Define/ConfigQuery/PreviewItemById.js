
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPreviewItemById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PreviewItem_1=require("../Config/PreviewItem"),DB="db_item.db",FILE="d.道具.xlsx",TABLE="PreviewItem",COMMAND="select BinData from `PreviewItem` where Id=?",KEY_PREFIX="PreviewItemById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configPreviewItemById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configPreviewItemById.GetConfig"),CONFIG_STAT_PREFIX="configPreviewItemById.GetConfig(";exports.configPreviewItemById={Init:()=>{initStat?.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat?.Stop()},GetConfig:(e,o=!0)=>{ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigStat?.Start();var i=Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${e})`),n=(i?.Start(),ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair));if(n){if(o){var t=KEY_PREFIX+`#${e})`;const C=ConfigCommon_1.ConfigCommon.GetConfig(t);if(C)return i?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),C}if(n=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",e])){t=void 0;if([n,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",e]),n){const C=PreviewItem_1.PreviewItem.getRootAsPreviewItem(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));return o&&(n=KEY_PREFIX+`#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(n,C)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),C}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}i?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=PreviewItemById.js.map