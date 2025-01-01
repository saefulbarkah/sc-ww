
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configAdviceParamsById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),AdviceParams_1=require("../Config/AdviceParams"),DB="db_advice.db",FILE="s.溯言.xlsx",TABLE="AdviceParams",COMMAND="select BinData from `AdviceParams` where Id=?",KEY_PREFIX="AdviceParamsById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configAdviceParamsById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configAdviceParamsById.GetConfig"),CONFIG_STAT_PREFIX="configAdviceParamsById.GetConfig(";exports.configAdviceParamsById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,i=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(n=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(i){var e=KEY_PREFIX+`#${o})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(e);if(a)return a}if(n=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var n,e=void 0;if([n,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),n){const a=AdviceParams_1.AdviceParams.getRootAsAdviceParams(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));return i&&(n=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(n,a)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),a}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=AdviceParamsById.js.map