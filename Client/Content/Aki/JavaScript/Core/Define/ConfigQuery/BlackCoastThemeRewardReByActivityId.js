
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configBlackCoastThemeRewardReByActivityId=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),BlackCoastThemeRewardRe_1=require("../Config/BlackCoastThemeRewardRe"),DB="db_activity.db",FILE="h.黑海岸主题活动.xlsx",TABLE="BlackCoastThemeRewardRe",COMMAND="select BinData from `BlackCoastThemeRewardRe` where ActivityId=?",KEY_PREFIX="BlackCoastThemeRewardReByActivityId",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configBlackCoastThemeRewardReByActivityId.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configBlackCoastThemeRewardReByActivityId.GetConfigList"),CONFIG_LIST_STAT_PREFIX="configBlackCoastThemeRewardReByActivityId.GetConfigList(";exports.configBlackCoastThemeRewardReByActivityId={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(e,o=!0)=>{var i;Stats_1.Stat.CreateNoFlameGraph(CONFIG_LIST_STAT_PREFIX+`#${e})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(o){var t=KEY_PREFIX+`#${e})`;const n=ConfigCommon_1.ConfigCommon.GetConfig(t);if(n)return n}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,e,...logPair)){const n=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair,["ActivityId",e]))break;var a=void 0;if([i,a]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["ActivityId",e]),!i)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);a=BlackCoastThemeRewardRe_1.BlackCoastThemeRewardRe.getRootAsBlackCoastThemeRewardRe(new byte_buffer_1.ByteBuffer(new Uint8Array(a.buffer)));n.push(a)}return o&&(t=KEY_PREFIX+`#${e})`,ConfigCommon_1.ConfigCommon.SaveConfig(t,n,n.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),n}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=BlackCoastThemeRewardReByActivityId.js.map