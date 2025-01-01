
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configLordGymEntranceSetById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),LordGymEntranceSet_1=require("../Config/LordGymEntranceSet"),DB="db_lordgym.db",FILE="l.领主道馆.xlsx",TABLE="LordGymEntranceSet",COMMAND="select BinData from `LordGymEntranceSet` where Id=?",KEY_PREFIX="LordGymEntranceSetById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configLordGymEntranceSetById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configLordGymEntranceSetById.GetConfig"),CONFIG_STAT_PREFIX="configLordGymEntranceSetById.GetConfig(";exports.configLordGymEntranceSetById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(n,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${n})`);if(t=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var e=KEY_PREFIX+`#${n})`;const r=ConfigCommon_1.ConfigCommon.GetConfig(e);if(r)return r}if(t=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,n,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",n])){var t,e=void 0;if([t,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",n]),t){const r=LordGymEntranceSet_1.LordGymEntranceSet.getRootAsLordGymEntranceSet(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));return o&&(t=KEY_PREFIX+`#${n})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,r)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),r}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=LordGymEntranceSetById.js.map