
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configTravelTaskByActivityId=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),TravelTask_1=require("../Config/TravelTask"),DB="db_activitymaptravel.db",FILE="d.地图主题活动.xlsx",TABLE="TravelTask",COMMAND="select BinData from `TravelTask` where ActivityId=?",KEY_PREFIX="TravelTaskByActivityId",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configTravelTaskByActivityId.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configTravelTaskByActivityId.GetConfigList"),CONFIG_LIST_STAT_PREFIX="configTravelTaskByActivityId.GetConfigList(";exports.configTravelTaskByActivityId={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(i,o=!0)=>{var t;Stats_1.Stat.CreateNoFlameGraph(CONFIG_LIST_STAT_PREFIX+`#${i})`);if(t=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var e=KEY_PREFIX+`#${i})`;const a=ConfigCommon_1.ConfigCommon.GetConfig(e);if(a)return a}if(t=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,i,...logPair)){const a=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair,["ActivityId",i]))break;var n=void 0;if([t,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["ActivityId",i]),!t)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);n=TravelTask_1.TravelTask.getRootAsTravelTask(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));a.push(n)}return o&&(e=KEY_PREFIX+`#${i})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,a,a.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),a}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=TravelTaskByActivityId.js.map