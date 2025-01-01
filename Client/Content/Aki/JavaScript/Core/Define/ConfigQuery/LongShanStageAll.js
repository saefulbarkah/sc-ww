
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configLongShanStageAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),LongShanStage_1=require("../Config/LongShanStage"),DB="db_activity.db",FILE="l.龙山主题活动.xlsx",TABLE="LongShanStage",COMMAND="select BinData from `LongShanStage` where ActivityId=?",KEY_PREFIX="LongShanStageAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configLongShanStageAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configLongShanStageAll.GetConfigList"),CONFIG_LIST_STAT_PREFIX="configLongShanStageAll.GetConfigList(";exports.configLongShanStageAll={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(n,o=!0)=>{var i;Stats_1.Stat.CreateNoFlameGraph(CONFIG_LIST_STAT_PREFIX+`#${n})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var t=KEY_PREFIX+`#${n})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(t);if(a)return a}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,n,...logPair)){const a=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair,["ActivityId",n]))break;var e=void 0;if([i,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["ActivityId",n]),!i)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);e=LongShanStage_1.LongShanStage.getRootAsLongShanStage(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));a.push(e)}return o&&(t=KEY_PREFIX+`#${n})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,a,a.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),a}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=LongShanStageAll.js.map