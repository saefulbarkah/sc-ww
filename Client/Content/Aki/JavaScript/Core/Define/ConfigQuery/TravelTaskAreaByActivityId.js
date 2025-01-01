
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configTravelTaskAreaByActivityId=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),TravelTaskArea_1=require("../Config/TravelTaskArea"),DB="db_activitymaptravel.db",FILE="d.地图主题活动.xlsx",TABLE="TravelTaskArea",COMMAND="select BinData from `TravelTaskArea` where ActivityId=?",KEY_PREFIX="TravelTaskAreaByActivityId",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configTravelTaskAreaByActivityId.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configTravelTaskAreaByActivityId.GetConfigList"),CONFIG_LIST_STAT_PREFIX="configTravelTaskAreaByActivityId.GetConfigList(";exports.configTravelTaskAreaByActivityId={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(i,e=!0)=>{var o;Stats_1.Stat.CreateNoFlameGraph(CONFIG_LIST_STAT_PREFIX+`#${i})`);if(o=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(e){var a=KEY_PREFIX+`#${i})`;const n=ConfigCommon_1.ConfigCommon.GetConfig(a);if(n)return n}if(o=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,i,...logPair)){const n=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair,["ActivityId",i]))break;var t=void 0;if([o,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["ActivityId",i]),!o)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);t=TravelTaskArea_1.TravelTaskArea.getRootAsTravelTaskArea(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));n.push(t)}return e&&(a=KEY_PREFIX+`#${i})`,ConfigCommon_1.ConfigCommon.SaveConfig(a,n,n.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),n}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=TravelTaskAreaByActivityId.js.map