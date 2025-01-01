
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configDungeonDetectionById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),DungeonDetection_1=require("../Config/DungeonDetection"),DB="db_adventure_detect.db",FILE="k.开拓探测.xlsx",TABLE="DungeonDetection",COMMAND="select BinData from `DungeonDetection` where Id=?",KEY_PREFIX="DungeonDetectionById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configDungeonDetectionById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configDungeonDetectionById.GetConfig"),CONFIG_STAT_PREFIX="configDungeonDetectionById.GetConfig(";exports.configDungeonDetectionById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(n,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${n})`);if(t=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var e=KEY_PREFIX+`#${n})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(e);if(i)return i}if(t=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,n,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",n])){var t,e=void 0;if([t,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",n]),t){const i=DungeonDetection_1.DungeonDetection.getRootAsDungeonDetection(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));return o&&(t=KEY_PREFIX+`#${n})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=DungeonDetectionById.js.map