
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configActionMappingByActionType=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),ActionMapping_1=require("../Config/ActionMapping"),DB="db_input_settings.db",FILE="s.输入配置.xlsx",TABLE="ActionMapping",COMMAND="select BinData from `ActionMapping` where ActionType=?",KEY_PREFIX="ActionMappingByActionType",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configActionMappingByActionType.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configActionMappingByActionType.GetConfigList"),CONFIG_LIST_STAT_PREFIX="configActionMappingByActionType.GetConfigList(";exports.configActionMappingByActionType={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(n,o=!0)=>{var i;Stats_1.Stat.CreateNoFlameGraph(CONFIG_LIST_STAT_PREFIX+`#${n})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var t=KEY_PREFIX+`#${n})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(t);if(a)return a}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,n,...logPair)){const a=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair,["ActionType",n]))break;var e=void 0;if([i,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["ActionType",n]),!i)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);e=ActionMapping_1.ActionMapping.getRootAsActionMapping(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));a.push(e)}return o&&(t=KEY_PREFIX+`#${n})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,a,a.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),a}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=ActionMappingByActionType.js.map