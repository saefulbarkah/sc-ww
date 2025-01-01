
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configCustomerServiceById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),CustomerService_1=require("../Config/CustomerService"),DB="db_platformchannel.db",FILE="p.平台渠道.xlsx",TABLE="CustomerService",COMMAND="select BinData from `CustomerService` where Id=?",KEY_PREFIX="CustomerServiceById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configCustomerServiceById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configCustomerServiceById.GetConfig"),CONFIG_STAT_PREFIX="configCustomerServiceById.GetConfig(";exports.configCustomerServiceById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(e,o=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${e})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var n=KEY_PREFIX+`#${e})`;const r=ConfigCommon_1.ConfigCommon.GetConfig(n);if(r)return r}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",e])){var i,n=void 0;if([i,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",e]),i){const r=CustomerService_1.CustomerService.getRootAsCustomerService(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return o&&(i=KEY_PREFIX+`#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,r)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),r}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=CustomerServiceById.js.map