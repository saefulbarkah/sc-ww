
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configRoleSkinByRoleId=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),RoleSkin_1=require("../Config/RoleSkin"),DB="db_role.db",FILE="j.角色.xlsx",TABLE="RoleSkin",COMMAND="select BinData from `RoleSkin` where RoleId=?",KEY_PREFIX="RoleSkinByRoleId",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configRoleSkinByRoleId.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configRoleSkinByRoleId.GetConfigList"),CONFIG_LIST_STAT_PREFIX="configRoleSkinByRoleId.GetConfigList(";exports.configRoleSkinByRoleId={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(o,n=!0)=>{var e;Stats_1.Stat.CreateNoFlameGraph(CONFIG_LIST_STAT_PREFIX+`#${o})`);if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var i=KEY_PREFIX+`#${o})`;const r=ConfigCommon_1.ConfigCommon.GetConfig(i);if(r)return r}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)){const r=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair,["RoleId",o]))break;var t=void 0;if([e,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["RoleId",o]),!e)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);t=RoleSkin_1.RoleSkin.getRootAsRoleSkin(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));r.push(t)}return n&&(i=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,r,r.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),r}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=RoleSkinByRoleId.js.map