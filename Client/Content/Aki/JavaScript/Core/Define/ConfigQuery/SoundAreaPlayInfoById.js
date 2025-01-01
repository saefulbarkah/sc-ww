
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configSoundAreaPlayInfoById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),SoundAreaPlayInfo_1=require("../Config/SoundAreaPlayInfo"),DB="db_soundareaplayinfo.db",FILE="w.无音区玩法信息.xlsx",TABLE="SoundAreaPlayInfo",COMMAND="select BinData from `SoundAreaPlayInfo` where Id=?",KEY_PREFIX="SoundAreaPlayInfoById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configSoundAreaPlayInfoById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configSoundAreaPlayInfoById.GetConfig"),CONFIG_STAT_PREFIX="configSoundAreaPlayInfoById.GetConfig(";exports.configSoundAreaPlayInfoById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(a=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var e=KEY_PREFIX+`#${o})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(e);if(i)return i}if(a=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var a,e=void 0;if([a,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),a){const i=SoundAreaPlayInfo_1.SoundAreaPlayInfo.getRootAsSoundAreaPlayInfo(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));return n&&(a=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(a,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=SoundAreaPlayInfoById.js.map