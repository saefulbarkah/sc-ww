
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configDreamLinkWorldRunByMarkId=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),DreamLinkWorldRun_1=require("../Config/DreamLinkWorldRun"),DB="db_activity.db",FILE="m.梦境链接活动.xlsx",TABLE="DreamLinkWorldRun",COMMAND="select BinData from `DreamLinkWorldRun` where MarkId=?",KEY_PREFIX="DreamLinkWorldRunByMarkId",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configDreamLinkWorldRunByMarkId.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configDreamLinkWorldRunByMarkId.GetConfig"),CONFIG_STAT_PREFIX="configDreamLinkWorldRunByMarkId.GetConfig(";exports.configDreamLinkWorldRunByMarkId={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(n,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${n})`);if(r=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var i=KEY_PREFIX+`#${n})`;const e=ConfigCommon_1.ConfigCommon.GetConfig(i);if(e)return e}if(r=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,n,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["MarkId",n])){var r,i=void 0;if([r,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["MarkId",n]),r){const e=DreamLinkWorldRun_1.DreamLinkWorldRun.getRootAsDreamLinkWorldRun(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return o&&(r=KEY_PREFIX+`#${n})`,ConfigCommon_1.ConfigCommon.SaveConfig(r,e)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),e}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=DreamLinkWorldRunByMarkId.js.map