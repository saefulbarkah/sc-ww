
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPhantomFormationById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PhantomFormation_1=require("../Config/PhantomFormation"),DB="db_formation.db",FILE="b.编队.xlsx",TABLE="PhantomFormation",COMMAND="select BinData from `PhantomFormation` where Id=?",KEY_PREFIX="PhantomFormationById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configPhantomFormationById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configPhantomFormationById.GetConfig"),CONFIG_STAT_PREFIX="configPhantomFormationById.GetConfig(";exports.configPhantomFormationById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var t=KEY_PREFIX+`#${o})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(t);if(a)return a}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var i,t=void 0;if([i,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),i){const a=PhantomFormation_1.PhantomFormation.getRootAsPhantomFormation(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));return n&&(i=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,a)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),a}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=PhantomFormationById.js.map