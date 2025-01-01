
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configStateMachinePreloadById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),StateMachinePreload_1=require("../Config/StateMachinePreload"),DB="db_state_machine_preload.db",FILE="Preload/StateMachinePreload.csv",TABLE="StateMachinePreload",COMMAND="select BinData from `StateMachinePreload` where Id=?",KEY_PREFIX="StateMachinePreloadById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configStateMachinePreloadById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configStateMachinePreloadById.GetConfig"),CONFIG_STAT_PREFIX="configStateMachinePreloadById.GetConfig(";exports.configStateMachinePreloadById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(e,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${e})`);if(a=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var n=KEY_PREFIX+`#${e})`;const t=ConfigCommon_1.ConfigCommon.GetConfig(n);if(t)return t}if(a=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",e])){var a,n=void 0;if([a,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",e]),a){const t=StateMachinePreload_1.StateMachinePreload.getRootAsStateMachinePreload(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return o&&(a=KEY_PREFIX+`#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(a,t)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),t}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=StateMachinePreloadById.js.map