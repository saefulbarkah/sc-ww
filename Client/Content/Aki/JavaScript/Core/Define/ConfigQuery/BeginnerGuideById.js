
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configBeginnerGuideById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),BeginnerGuide_1=require("../Config/BeginnerGuide"),DB="db_beginnerlogreport.db",FILE="x.新手打点.xlsx",TABLE="BeginnerGuide",COMMAND="select BinData from `BeginnerGuide` where Id=?",KEY_PREFIX="BeginnerGuideById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configBeginnerGuideById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configBeginnerGuideById.GetConfig"),CONFIG_STAT_PREFIX="configBeginnerGuideById.GetConfig(";exports.configBeginnerGuideById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(e,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${e})`);if(o=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var i=KEY_PREFIX+`#${e})`;const r=ConfigCommon_1.ConfigCommon.GetConfig(i);if(r)return r}if(o=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",e])){var o,i=void 0;if([o,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",e]),o){const r=BeginnerGuide_1.BeginnerGuide.getRootAsBeginnerGuide(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return n&&(o=KEY_PREFIX+`#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(o,r)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),r}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=BeginnerGuideById.js.map