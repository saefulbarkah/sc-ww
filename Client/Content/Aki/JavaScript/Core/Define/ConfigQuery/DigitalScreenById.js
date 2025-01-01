
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configDigitalScreenById=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),DigitalScreen_1=require("../Config/DigitalScreen"),DB="db_digital_screen.db",FILE="s.数码界面.xlsx",TABLE="DigitalScreen",COMMAND="select BinData from `DigitalScreen` where Id=?",KEY_PREFIX="DigitalScreenById",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configDigitalScreenById.Init"),getConfigStat=Stats_1.Stat.CreateNoFlameGraph("configDigitalScreenById.GetConfig"),CONFIG_STAT_PREFIX="configDigitalScreenById.GetConfig(";exports.configDigitalScreenById={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfig:(i,e=!0)=>{Stats_1.Stat.CreateNoFlameGraph(CONFIG_STAT_PREFIX+`#${i})`);if(o=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(e){var n=KEY_PREFIX+`#${i})`;const t=ConfigCommon_1.ConfigCommon.GetConfig(n);if(t)return t}if(o=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,i,...logPair)&&0<ConfigCommon_1.ConfigCommon.Step(handleId,!0,...logPair,["Id",i])){var o,n=void 0;if([o,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["Id",i]),o){const t=DigitalScreen_1.DigitalScreen.getRootAsDigitalScreen(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));return e&&(o=KEY_PREFIX+`#${i})`,ConfigCommon_1.ConfigCommon.SaveConfig(o,t)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),t}}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=DigitalScreenById.js.map