
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configSoarById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),Soar_1=require("../Config/Soar"),DB="db_soar.db",FILE="a.翱翔.xlsx",TABLE="Soar",COMMAND="select BinData from `Soar` where Id=?",KEY_PREFIX="SoarById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configSoarById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configSoarById.GetConfig"),CONFIG_STAT_PREFIX="configSoarById.GetConfig(";exports.configSoarById={Init:()=>{initStat?.Start(),handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND),initStat?.Stop()},GetConfig:(o,n=!0)=>{ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Start(),getConfigStat?.Start();var i=Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`),t=(i?.Start(),ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair));if(t){if(n){var e=KEY_PREFIX+`#${o})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(e);if(a)return i?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),a}if(t=ConfigCommon_1.ConfigCommon.BindString(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){e=void 0;if([t,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),t){const a=Soar_1.Soar.getRootAsSoar(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));return n&&(t=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,a)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop(),a}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}i?.Stop(),getConfigStat?.Stop(),ConfigCommon_1.ConfigCommon.AllConfigStatementStat.Stop()}};
//# sourceMappingURL=SoarById.js.map