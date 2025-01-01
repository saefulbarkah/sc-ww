
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configConditionGroupById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),ConditionGroup_1=require("../Config/ConditionGroup"),DB="db_condition.db",FILE="t.条件.xlsx",TABLE="ConditionGroup",COMMAND="select BinData from `ConditionGroup` where Id=?",KEY_PREFIX="ConditionGroupById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configConditionGroupById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configConditionGroupById.GetConfig"),CONFIG_STAT_PREFIX="configConditionGroupById.GetConfig(";exports.configConditionGroupById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(t=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var i=KEY_PREFIX+`#${o})`;const e=ConfigCommon_1.ConfigCommon.GetConfig(i);if(e)return e}if(t=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var t,i=void 0;if([t,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),t){const e=ConditionGroup_1.ConditionGroup.getRootAsConditionGroup(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return n&&(t=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,e)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),e}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=ConditionGroupById.js.map