
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configLevelPlayInfoMappingConfigById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),LevelPlayInfoMappingConfig_1=require("../Config/LevelPlayInfoMappingConfig"),DB="db_levelplayinfomappingconfig.db",FILE="k.可视化编辑/c.Csv/w.玩法信息映射/*.csv*",TABLE="LevelPlayInfoMappingConfig",COMMAND="select BinData from `LevelPlayInfoMappingConfig` where Id=?",KEY_PREFIX="LevelPlayInfoMappingConfigById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configLevelPlayInfoMappingConfigById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configLevelPlayInfoMappingConfigById.GetConfig"),CONFIG_STAT_PREFIX="configLevelPlayInfoMappingConfigById.GetConfig(";exports.configLevelPlayInfoMappingConfigById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(n,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${n})`);if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var i=KEY_PREFIX+`#${n})`;const f=ConfigCommon_1.ConfigCommon.GetConfig(i);if(f)return f}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,n,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",n])){var e,i=void 0;if([e,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",n]),e){const f=LevelPlayInfoMappingConfig_1.LevelPlayInfoMappingConfig.getRootAsLevelPlayInfoMappingConfig(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return o&&(e=KEY_PREFIX+`#${n})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,f)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),f}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=LevelPlayInfoMappingConfigById.js.map