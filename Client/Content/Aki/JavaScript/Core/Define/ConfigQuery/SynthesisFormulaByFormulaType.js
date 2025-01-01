
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configSynthesisFormulaByFormulaType=void 0;const byte_buffer_1=require("../../../RunTimeLibs/FlatBuffers/byte-buffer"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),SynthesisFormula_1=require("../Config/SynthesisFormula"),DB="db_compose.db",FILE="h.合成.xlsx",TABLE="SynthesisFormula",COMMAND="select BinData from `SynthesisFormula` where FormulaType=?",KEY_PREFIX="SynthesisFormulaByFormulaType",logPair=[["数据库",DB],["文件",FILE],["表名",TABLE],["语句",COMMAND]];let handleId=0;const initStat=Stats_1.Stat.CreateNoFlameGraph("configSynthesisFormulaByFormulaType.Init"),getConfigListStat=Stats_1.Stat.CreateNoFlameGraph("configSynthesisFormulaByFormulaType.GetConfigList"),CONFIG_LIST_STAT_PREFIX="configSynthesisFormulaByFormulaType.GetConfigList(";exports.configSynthesisFormulaByFormulaType={Init:()=>{handleId=ConfigCommon_1.ConfigCommon.InitDataStatement(handleId,DB,COMMAND)},GetConfigList:(o,n=!0)=>{var e;Stats_1.Stat.CreateNoFlameGraph(CONFIG_LIST_STAT_PREFIX+`#${o})`);if(e=ConfigCommon_1.ConfigCommon.CheckStatement(handleId,...logPair)){if(n){var i=KEY_PREFIX+`#${o})`;const t=ConfigCommon_1.ConfigCommon.GetConfig(i);if(t)return t}if(e=ConfigCommon_1.ConfigCommon.BindInt(handleId,1,o,...logPair)){const t=new Array;for(;;){if(1!==ConfigCommon_1.ConfigCommon.Step(handleId,!1,...logPair,["FormulaType",o]))break;var r=void 0;if([e,r]=ConfigCommon_1.ConfigCommon.GetValue(handleId,0,...logPair,["FormulaType",o]),!e)return void ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair);r=SynthesisFormula_1.SynthesisFormula.getRootAsSynthesisFormula(new byte_buffer_1.ByteBuffer(new Uint8Array(r.buffer)));t.push(r)}return n&&(i=KEY_PREFIX+`#${o})`,ConfigCommon_1.ConfigCommon.SaveConfig(i,t,t.length)),ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair),t}ConfigCommon_1.ConfigCommon.Reset(handleId,...logPair)}}};
//# sourceMappingURL=SynthesisFormulaByFormulaType.js.map