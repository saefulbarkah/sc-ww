
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configAutoRoleById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),AutoRole_1=require("../Config/AutoRole"),DB="db_role.db",FILE="j.角色.xlsx",TABLE="AutoRole",COMMAND="select BinData from `AutoRole` where Id = ?",KEY_PREFIX="AutoRoleById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configAutoRoleById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configAutoRoleById.GetConfig"),CONFIG_STAT_PREFIX="configAutoRoleById.GetConfig(";exports.configAutoRoleById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,e=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(t=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(e){var n=KEY_PREFIX+`#${o})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(n);if(i)return i}if(t=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var t,n=void 0;if([t,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),t){const i=AutoRole_1.AutoRole.getRootAsAutoRole(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return e&&(t=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=AutoRoleById.js.map