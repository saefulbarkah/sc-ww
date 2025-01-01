
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configEntrustRoleById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),EntrustRole_1=require("../Config/EntrustRole"),DB="db_moonchasing.db",FILE="z.追月节.xlsx",TABLE="EntrustRole",COMMAND="select BinData from `EntrustRole` where Id=?",KEY_PREFIX="EntrustRoleById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configEntrustRoleById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configEntrustRoleById.GetConfig"),CONFIG_STAT_PREFIX="configEntrustRoleById.GetConfig(";exports.configEntrustRoleById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var t=KEY_PREFIX+`#${o})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(t);if(i)return i}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var e,t=void 0;if([e,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),e){const i=EntrustRole_1.EntrustRole.getRootAsEntrustRole(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));return n&&(e=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=EntrustRoleById.js.map