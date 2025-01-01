
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configCatchSignalGameplayById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),CatchSignalGameplay_1=require("../Config/CatchSignalGameplay"),DB="db_catchsignalgameplay.db",FILE="k.可视化编辑/c.Csv/m.捕获信号玩法配置/*.csv*",TABLE="CatchSignalGameplay",COMMAND="select BinData from `CatchSignalGameplay` where Id=?",KEY_PREFIX="CatchSignalGameplayById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configCatchSignalGameplayById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configCatchSignalGameplayById.GetConfig"),CONFIG_STAT_PREFIX="configCatchSignalGameplayById.GetConfig(";exports.configCatchSignalGameplayById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(a,n=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${a})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var o=KEY_PREFIX+`#${a})`;const e=ConfigCommon_1.ConfigCommon.GetConfig(o);if(e)return e}if(i=ConfigCommon_1.ConfigCommon.BindString(handleId,1,a,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",a])){var i,o=void 0;if([i,o]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",a]),i){const e=CatchSignalGameplay_1.CatchSignalGameplay.getRootAsCatchSignalGameplay(new byte_buffer_1.ByteBuffer(new Uint8Array(o.buffer)));return n&&(i=KEY_PREFIX+`#${a})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,e)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),e}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=CatchSignalGameplayById.js.map