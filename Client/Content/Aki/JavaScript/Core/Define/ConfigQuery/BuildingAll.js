
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configBuildingAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),Building_1=require("../Config/Building"),DB="db_moonchasing.db",FILE="z.追月节.xlsx",TABLE="Building",COMMAND="select BinData from `Building`",KEY_PREFIX="BuildingAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configBuildingAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configBuildingAll.GetConfigList");exports.configBuildingAll={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(i=!0)=>{var n;if(n=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(i){var o=KEY_PREFIX+")";const t=ConfigCommon_1.ConfigCommon.GetConfig(o);if(t)return t}const t=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var e=void 0;if([n,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!n)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);e=Building_1.Building.getRootAsBuilding(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));t.push(e)}return i&&(o=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(o,t,t.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),t}}};
//# sourceMappingURL=BuildingAll.js.map