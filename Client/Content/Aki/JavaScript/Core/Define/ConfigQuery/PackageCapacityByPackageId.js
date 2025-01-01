
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPackageCapacityByPackageId=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PackageCapacity_1=require("../Config/PackageCapacity"),DB="db_bag.db",FILE="b.背包.xlsx",TABLE="PackageCapacity",COMMAND="select BinData from `PackageCapacity` where PackageId=?",KEY_PREFIX="PackageCapacityByPackageId",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configPackageCapacityByPackageId.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configPackageCapacityByPackageId.GetConfig"),CONFIG_STAT_PREFIX="configPackageCapacityByPackageId.GetConfig(";exports.configPackageCapacityByPackageId={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(a,e=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${a})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(e){var o=KEY_PREFIX+`#${a})`;const n=ConfigCommon_1.ConfigCommon.GetConfig(o);if(n)return n}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,a,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["PackageId",a])){var i,o=void 0;if([i,o]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["PackageId",a]),i){const n=PackageCapacity_1.PackageCapacity.getRootAsPackageCapacity(new byte_buffer_1.ByteBuffer(new Uint8Array(o.buffer)));return e&&(i=KEY_PREFIX+`#${a})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,n)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),n}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=PackageCapacityByPackageId.js.map