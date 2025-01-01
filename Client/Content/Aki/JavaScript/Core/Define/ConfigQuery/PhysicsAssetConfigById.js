
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configPhysicsAssetConfigById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),PhysicsAssetConfig_1=require("../Config/PhysicsAssetConfig"),DB="db_physics_asset.db",FILE="j.角色物理资产.xlsx",TABLE="PhysicsAssetConfig",COMMAND="select BinData from `PhysicsAssetConfig` where id=?",KEY_PREFIX="PhysicsAssetConfigById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configPhysicsAssetConfigById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configPhysicsAssetConfigById.GetConfig"),CONFIG_STAT_PREFIX="configPhysicsAssetConfigById.GetConfig(";exports.configPhysicsAssetConfigById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,i=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(s=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(i){var n=KEY_PREFIX+`#${o})`;const e=ConfigCommon_1.ConfigCommon.GetConfig(n);if(e)return e}if(s=ConfigCommon_1.ConfigCommon.BindString(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var s,n=void 0;if([s,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),s){const e=PhysicsAssetConfig_1.PhysicsAssetConfig.getRootAsPhysicsAssetConfig(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return i&&(s=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(s,e)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),e}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=PhysicsAssetConfigById.js.map