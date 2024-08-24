
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configTowerTargetById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),TowerTarget_1=require("../Config/TowerTarget"),DB="db_tower.db",FILE="p.爬塔新.xlsx",TABLE="TowerTarget",COMMAND="select BinData from `TowerTarget` where Id = ?",KEY_PREFIX="TowerTargetById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=void 0,getConfigStat=void 0,CONFIG_STAT_PREFIX="configTowerTargetById.GetConfig(";exports.configTowerTargetById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,e=!0)=>{if(r=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(e){var n=KEY_PREFIX+`#${o})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(n);if(i)return i}if(r=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var r,n=void 0;if([r,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),r){const i=TowerTarget_1.TowerTarget.getRootAsTowerTarget(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return e&&(r=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(r,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=TowerTargetById.js.map