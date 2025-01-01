
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configGongduolaPassengerVoiceConfigByRoleIdAndTriggerType=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),GongduolaPassengerVoiceConfig_1=require("../Config/GongduolaPassengerVoiceConfig"),DB="db_gongduolapassengervoiceconfig.db",FILE="k.可视化编辑/c.Csv/g.贡多拉共乘角色语音配置/*.csv*",TABLE="GongduolaPassengerVoiceConfig",COMMAND="select BinData from `GongduolaPassengerVoiceConfig` where RoleId=? And TriggerType=?",KEY_PREFIX="GongduolaPassengerVoiceConfigByRoleIdAndTriggerType",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configGongduolaPassengerVoiceConfigByRoleIdAndTriggerType.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configGongduolaPassengerVoiceConfigByRoleIdAndTriggerType.GetConfigList"),CONFIG_LIST_STAT_PREFIX="configGongduolaPassengerVoiceConfigByRoleIdAndTriggerType.GetConfigList(";exports.configGongduolaPassengerVoiceConfigByRoleIdAndTriggerType={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(o,e,n=!0)=>{var i;Stats_1.Stat.CreateNoFlameGraph(CONFIG_LIST_STAT_PREFIX+`#${o}#${e})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var g=KEY_PREFIX+`#${o}#${e})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(g);if(a)return a}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&ConfigCommon_1.ConfigCommon.BindInt(handleId,2,e,...logPair)){const a=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair,["RoleId",o],["TriggerType",e]))break;var r=void 0;if([i,r]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["RoleId",o],["TriggerType",e]),!i)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);r=GongduolaPassengerVoiceConfig_1.GongduolaPassengerVoiceConfig.getRootAsGongduolaPassengerVoiceConfig(new byte_buffer_1.ByteBuffer(new Uint8Array(r.buffer)));a.push(r)}return n&&(g=KEY_PREFIX+`#${o}#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(g,a,a.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),a}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=GongduolaPassengerVoiceConfigByRoleIdAndTriggerType.js.map