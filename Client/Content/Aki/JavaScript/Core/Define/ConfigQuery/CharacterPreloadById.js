
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configCharacterPreloadById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),CharacterPreload_1=require("../Config/CharacterPreload"),DB="db_character_preload.db",FILE="Preload/CharacterPreload.csv",TABLE="CharacterPreload",COMMAND="select BinData from `CharacterPreload` where Id=?",KEY_PREFIX="CharacterPreloadById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configCharacterPreloadById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configCharacterPreloadById.GetConfig"),CONFIG_STAT_PREFIX="configCharacterPreloadById.GetConfig(";exports.configCharacterPreloadById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,e=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(a=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(e){var r=KEY_PREFIX+`#${o})`;const n=ConfigCommon_1.ConfigCommon.GetConfig(r);if(n)return n}if(a=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var a,r=void 0;if([a,r]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),a){const n=CharacterPreload_1.CharacterPreload.getRootAsCharacterPreload(new byte_buffer_1.ByteBuffer(new Uint8Array(r.buffer)));return e&&(a=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(a,n)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),n}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=CharacterPreloadById.js.map