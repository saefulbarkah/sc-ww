
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configCharacterPreloadByAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),CharacterPreload_1=require("../Config/CharacterPreload"),DB="db_character_preload.db",FILE="Preload/CharacterPreload.csv",TABLE="CharacterPreload",COMMAND="select BinData from `CharacterPreload`",KEY_PREFIX="CharacterPreloadByAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configCharacterPreloadByAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configCharacterPreloadByAll.GetConfigList");exports.configCharacterPreloadByAll={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(o=!0)=>{var r;if(r=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var e=KEY_PREFIX+")";const n=ConfigCommon_1.ConfigCommon.GetConfig(e);if(n)return n}const n=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var a=void 0;if([r,a]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!r)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);a=CharacterPreload_1.CharacterPreload.getRootAsCharacterPreload(new byte_buffer_1.ByteBuffer(new Uint8Array(a.buffer)));n.push(a)}return o&&(e=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(e,n,n.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),n}}};
//# sourceMappingURL=CharacterPreloadByAll.js.map