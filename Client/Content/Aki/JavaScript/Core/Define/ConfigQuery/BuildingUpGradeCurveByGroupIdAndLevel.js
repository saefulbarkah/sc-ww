
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configBuildingUpGradeCurveByGroupIdAndLevel=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),BuildingUpGradeCurve_1=require("../Config/BuildingUpGradeCurve"),DB="db_moonchasing.db",FILE="z.追月节.xlsx",TABLE="BuildingUpGradeCurve",COMMAND="select BinData from `BuildingUpGradeCurve` where GroupId=? AND Level=?",KEY_PREFIX="BuildingUpGradeCurveByGroupIdAndLevel",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configBuildingUpGradeCurveByGroupIdAndLevel.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configBuildingUpGradeCurveByGroupIdAndLevel.GetConfig"),CONFIG_STAT_PREFIX="configBuildingUpGradeCurveByGroupIdAndLevel.GetConfig(";exports.configBuildingUpGradeCurveByGroupIdAndLevel={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(e,o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${e}#${o})`);if(r=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var i=KEY_PREFIX+`#${e}#${o})`;const d=ConfigCommon_1.ConfigCommon.GetConfig(i);if(d)return d}if(r=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)&&ConfigCommon_1.ConfigCommon.BindInt(handleId,2,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["GroupId",e],["Level",o])){var r,i=void 0;if([r,i]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["GroupId",e],["Level",o]),r){const d=BuildingUpGradeCurve_1.BuildingUpGradeCurve.getRootAsBuildingUpGradeCurve(new byte_buffer_1.ByteBuffer(new Uint8Array(i.buffer)));return n&&(r=KEY_PREFIX+`#${e}#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(r,d)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),d}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=BuildingUpGradeCurveByGroupIdAndLevel.js.map