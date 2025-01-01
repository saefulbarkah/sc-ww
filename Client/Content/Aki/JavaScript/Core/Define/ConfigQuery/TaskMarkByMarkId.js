
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configTaskMarkByMarkId=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),TaskMark_1=require("../Config/TaskMark"),DB="db_map_mark.db",FILE="d.地图标记.xlsx",TABLE="TaskMark",COMMAND="select BinData from `TaskMark` where MarkId = ?",KEY_PREFIX="TaskMarkByMarkId",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configTaskMarkByMarkId.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configTaskMarkByMarkId.GetConfig"),CONFIG_STAT_PREFIX="configTaskMarkByMarkId.GetConfig(";exports.configTaskMarkByMarkId={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,a=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(r=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(a){var n=KEY_PREFIX+`#${o})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(n);if(i)return i}if(r=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["MarkId",o])){var r,n=void 0;if([r,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["MarkId",o]),r){const i=TaskMark_1.TaskMark.getRootAsTaskMark(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return a&&(r=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(r,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=TaskMarkByMarkId.js.map