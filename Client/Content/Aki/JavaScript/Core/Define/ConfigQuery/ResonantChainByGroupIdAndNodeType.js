
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configResonantChainByGroupIdAndNodeType=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),ResonantChain_1=require("../Config/ResonantChain"),DB="db_resonate_chain.db",FILE="g.共鸣链.xlsx",TABLE="ResonantChain",COMMAND="select BinData from `ResonantChain` where GroupId=? AND NodeType=?",KEY_PREFIX="ResonantChainByGroupIdAndNodeType",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configResonantChainByGroupIdAndNodeType.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configResonantChainByGroupIdAndNodeType.GetConfigList"),CONFIG_LIST_STAT_PREFIX="configResonantChainByGroupIdAndNodeType.GetConfigList(";exports.configResonantChainByGroupIdAndNodeType={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(n,o,e=!0)=>{var i;Stats_1.Stat.CreateNoFlameGraph(CONFIG_LIST_STAT_PREFIX+`#${n}#${o})`);if(i=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(e){var a=KEY_PREFIX+`#${n}#${o})`;const r=ConfigCommon_1.ConfigCommon.GetConfig(a);if(r)return r}if(i=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,n,...logPair)&&ConfigCommon_1.ConfigCommon.BindInt(handleId,2,o,...logPair)){const r=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair,["GroupId",n],["NodeType",o]))break;var t=void 0;if([i,t]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["GroupId",n],["NodeType",o]),!i)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);t=ResonantChain_1.ResonantChain.getRootAsResonantChain(new byte_buffer_1.ByteBuffer(new Uint8Array(t.buffer)));r.push(t)}return e&&(a=KEY_PREFIX+`#${n}#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(a,r,r.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),r}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=ResonantChainByGroupIdAndNodeType.js.map