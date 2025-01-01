
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configGamePlayInformationGroupById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),GamePlayInformationGroup_1=require("../Config/GamePlayInformationGroup"),DB="db_levelgameplay.db",FILE="g.关卡玩法数据.xlsx",TABLE="GamePlayInformationGroup",COMMAND="select BinData from `GamePlayInformationGroup` where Id=?",KEY_PREFIX="GamePlayInformationGroupById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configGamePlayInformationGroupById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configGamePlayInformationGroupById.GetConfig"),CONFIG_STAT_PREFIX="configGamePlayInformationGroupById.GetConfig(";exports.configGamePlayInformationGroupById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(o,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${o})`);if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var a=KEY_PREFIX+`#${o})`;const i=ConfigCommon_1.ConfigCommon.GetConfig(a);if(i)return i}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",o])){var e,a=void 0;if([e,a]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",o]),e){const i=GamePlayInformationGroup_1.GamePlayInformationGroup.getRootAsGamePlayInformationGroup(new byte_buffer_1.ByteBuffer(new Uint8Array(a.buffer)));return n&&(e=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(e,i)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),i}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=GamePlayInformationGroupById.js.map