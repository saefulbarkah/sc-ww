
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configBrokenRockConfigById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),BrokenRockConfig_1=require("../Config/BrokenRockConfig"),DB="db_brokenrockconfig.db",FILE="k.可视化编辑/c.Csv/p.破碎岩石配置/*.csv*",TABLE="BrokenRockConfig",COMMAND="select BinData from `BrokenRockConfig` where Id=?",KEY_PREFIX="BrokenRockConfigById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configBrokenRockConfigById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configBrokenRockConfigById.GetConfig"),CONFIG_STAT_PREFIX="configBrokenRockConfigById.GetConfig(";exports.configBrokenRockConfigById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var i=KEY_PREFIX+`#${o})`;const f=ConfigCommon_1.ConfigCommon.GetConfig(i);if(f)return f}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var e,i=void 0;if([e,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),e){const f=BrokenRockConfig_1.BrokenRockConfig.getRootAsBrokenRockConfig(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return n&&(e=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,f)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),f}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=BrokenRockConfigById.js.map