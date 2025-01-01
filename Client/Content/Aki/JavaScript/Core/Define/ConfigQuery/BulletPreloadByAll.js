
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configBulletPreloadByAll=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),BulletPreload_1=require("../Config/BulletPreload"),DB="db_bullet_preload.db",FILE="Preload/BulletPreload.csv",TABLE="BulletPreload",COMMAND="select BinData from `BulletPreload`",KEY_PREFIX="BulletPreloadByAll",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configBulletPreloadByAll.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configBulletPreloadByAll.GetConfigList");exports.configBulletPreloadByAll={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(o=!0)=>{var e;if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var l=KEY_PREFIX+")";const t=ConfigCommon_1.ConfigCommon.GetConfig(l);if(t)return t}const t=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair))break;var n=void 0;if([e,n]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair),!e)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);n=BulletPreload_1.BulletPreload.getRootAsBulletPreload(new byte_buffer_1.ByteBuffer(new Uint8Array(n.buffer)));t.push(n)}return o&&(l=KEY_PREFIX+")",ConfigCommon_1.ConfigCommon.SaveConfig(l,t,t.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),t}}};
//# sourceMappingURL=BulletPreloadByAll.js.map