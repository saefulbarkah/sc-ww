
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configActivityById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),Activity_1=require("../Config/Activity"),DB="db_activity.db",FILE="h.活动.xlsx",TABLE="Activity",COMMAND="select BinData from `Activity` where Id=?",KEY_PREFIX="ActivityById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configActivityById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configActivityById.GetConfig"),CONFIG_STAT_PREFIX="configActivityById.GetConfig(";exports.configActivityById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(i,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${i})`);if(n=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var t=KEY_PREFIX+`#${i})`;const e=ConfigCommon_1.ConfigCommon.GetConfig(t);if(e)return e}if(n=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,i,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",i])){var n,t=void 0;if([n,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",i]),n){const e=Activity_1.Activity.getRootAsActivity(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));return o&&(n=KEY_PREFIX+`#${i})`,ConfigCommon_1.ConfigCommon.SaveConfig(n,e)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),e}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=ActivityById.js.map