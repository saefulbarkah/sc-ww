
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPhantomCollectTaskDescById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PhantomCollectTaskDesc_1=require("../Config/PhantomCollectTaskDesc"),DB="db_activity.db",FILE="s.声骸收集活动.xlsx",TABLE="PhantomCollectTaskDesc",COMMAND="select BinData from `PhantomCollectTaskDesc` where Id=?",KEY_PREFIX="PhantomCollectTaskDescById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configPhantomCollectTaskDescById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configPhantomCollectTaskDescById.GetConfig"),CONFIG_STAT_PREFIX="configPhantomCollectTaskDescById.GetConfig(";exports.configPhantomCollectTaskDescById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,e=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(t=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(e){var n=KEY_PREFIX+`#${o})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(n);if(a)return a}if(t=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var t,n=void 0;if([t,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),t){const a=PhantomCollectTaskDesc_1.PhantomCollectTaskDesc.getRootAsPhantomCollectTaskDesc(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return e&&(t=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,a)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),a}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=PhantomCollectTaskDescById.js.map