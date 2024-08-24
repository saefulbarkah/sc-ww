
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configMainRoleConfigByGender=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),MainRoleConfig_1=require("../Config/MainRoleConfig"),DB="db_main_role_change.db",FILE="z.主角切换.xlsx",TABLE="MainRoleConfig",COMMAND="select BinData from `MainRoleConfig` where Gender = ?",KEY_PREFIX="MainRoleConfigByGender",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=void 0,getConfigListStat=void 0,CONFIG_LIST_STAT_PREFIX="configMainRoleConfigByGender.GetConfigList(";exports.configMainRoleConfigByGender={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(o,n=!0)=>{var e;if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var i=KEY_PREFIX+`#${o})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(i);if(a)return a}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)){const a=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair,["Gender",o]))break;var r=void 0;if([e,r]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Gender",o]),!e)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);r=MainRoleConfig_1.MainRoleConfig.getRootAsMainRoleConfig(new byte_buffer_1.ByteBuffer(new Uint8Array(r.buffer)));a.push(r)}return n&&(i=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,a,a.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),a}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=MainRoleConfigByGender.js.map