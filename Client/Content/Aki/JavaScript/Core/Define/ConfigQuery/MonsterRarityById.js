
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configMonsterRarityById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),MonsterRarity_1=require("../Config/MonsterRarity"),DB="db_monster_info.db",FILE="g.怪物信息.xlsx",TABLE="MonsterRarity",COMMAND="select BinData from `MonsterRarity` where Id=?",KEY_PREFIX="MonsterRarityById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=void 0,getConfigStat=void 0,CONFIG_STAT_PREFIX="configMonsterRarityById.GetConfig(";exports.configMonsterRarityById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var e=KEY_PREFIX+`#${o})`;const r=ConfigCommon_1.ConfigCommon.GetConfig(e);if(r)return r}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var i,e=void 0;if([i,e]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),i){const r=MonsterRarity_1.MonsterRarity.getRootAsMonsterRarity(new byte_buffer_1.ByteBuffer(new Uint8Array(e.buffer)));return n&&(i=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,r)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),r}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=MonsterRarityById.js.map