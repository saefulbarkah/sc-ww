
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPlotAudioById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PlotAudio_1=require("../Config/PlotAudio"),DB="db_plot_audio.db",FILE="j.剧情语音.xlsx",TABLE="PlotAudio",COMMAND="select BinData from `PlotAudio` where Id=?",KEY_PREFIX="PlotAudioById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configPlotAudioById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configPlotAudioById.GetConfig"),CONFIG_STAT_PREFIX="configPlotAudioById.GetConfig(";exports.configPlotAudioById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,i=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(t=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(i){var n=KEY_PREFIX+`#${o})`;const e=ConfigCommon_1.ConfigCommon.GetConfig(n);if(e)return e}if(t=ConfigCommon_1.ConfigCommon.BindString(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var t,n=void 0;if([t,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),t){const e=PlotAudio_1.PlotAudio.getRootAsPlotAudio(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return i&&(t=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,e)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),e}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=PlotAudioById.js.map