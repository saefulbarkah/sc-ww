
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configMonsterRarityById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),MonsterRarity_1=require("../Config/MonsterRarity"),DB="db_monster_info.db",FILE="g.怪物信息.xlsx",TABLE="MonsterRarity",COMMAND="select BinData from `MonsterRarity` where Id=?",KEY_PREFIX="MonsterRarityById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configMonsterRarityById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configMonsterRarityById.GetConfig"),CONFIG_STAT_PREFIX="configMonsterRarityById.GetConfig(";exports.configMonsterRarityById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var t=KEY_PREFIX+`#${o})`;const e=ConfigCommon_1.ConfigCommon.GetConfig(t);if(e)return e}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var i,t=void 0;if([i,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),i){const e=MonsterRarity_1.MonsterRarity.getRootAsMonsterRarity(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));return n&&(i=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,e)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),e}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=MonsterRarityById.js.map