
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configSignalDecodeTabColorById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),SignalDecodeTabColor_1=require("../Config/SignalDecodeTabColor"),DB="db_signaldecodetabcolor.db",FILE="x.信号破译页签颜色.csv",TABLE="SignalDecodeTabColor",COMMAND="select BinData from `SignalDecodeTabColor` where Id=?",KEY_PREFIX="SignalDecodeTabColorById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configSignalDecodeTabColorById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configSignalDecodeTabColorById.GetConfig"),CONFIG_STAT_PREFIX="configSignalDecodeTabColorById.GetConfig(";exports.configSignalDecodeTabColorById={Init:()=>{initStat?.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat?.Stop()},GetConfig:(o,n=!0)=>{ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigStat?.Start();var e=Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`),i=(e?.Start(),ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair));if(i){if(n){var t=KEY_PREFIX+`#${o})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(t);if(a)return e?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),a}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){t=void 0;if([i,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),i){const a=SignalDecodeTabColor_1.SignalDecodeTabColor.getRootAsSignalDecodeTabColor(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));return n&&(i=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,a)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),e?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),a}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}e?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=SignalDecodeTabColorById.js.map