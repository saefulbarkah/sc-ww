
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configMultiTextLang=void 0;const LanguageSystem_1=require("../../Common/LanguageSystem"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),DeserializeConfig_1=require("../../Config/DeserializeConfig"),StringUtils_1=require("../../Utils/StringUtils"),CommonDefine_1=require("../CommonDefine"),TEXTNOTFOUNT="text not found",DB="lang_multi_text.db",TABLE="MultiText",COMMAND="select content from `MultiText` where id = ?",logPair=[["数据库",DB],["表名",TABLE],["语句",COMMAND]],langCache=new Map,initStat=Stats_1.Stat.CreateNoFlameGraph("configMultiTextLang.Init"),getLocalTextStat=Stats_1.Stat.CreateNoFlameGraph("configMultiTextLang.GetLocalTextNew"),LOCAL_TEXT_STAT_PREFIX="configMultiTextLang.GetLocalTextNew(";exports.configMultiTextLang={Init:()=>{ConfigCommon_1.ConfigCommon.GetLangStatementId(TABLE,DB,COMMAND)},GetLocalText:(e,o=0)=>{},GetLocalTextNew:(e,o=void 0)=>{Stats_1.Stat.CreateNoFlameGraph(""+LOCAL_TEXT_STAT_PREFIX+e+`, ${o})`);if(LanguageSystem_1.LanguageSystem.GmShowLanguageKey)return i=LanguageSystem_1.LanguageSystem.GetCultureOrDefault(o),TABLE+`|${e}|`+i;let t=langCache.get(e);t||(t=new Map,langCache.set(e,t));var i=LanguageSystem_1.LanguageSystem.GetCultureOrDefault(o);let n=t.get(i);if(n)return n;var a=ConfigCommon_1.ConfigCommon.GetLangStatementId(TABLE,DB,COMMAND,i);if(r=ConfigCommon_1.ConfigCommon.CheckStatement(a)&&ConfigCommon_1.ConfigCommon.BindString(a,1,e,...logPair,["Id",e])&&0<ConfigCommon_1.ConfigCommon.Step(a,!0,...logPair,["传入语言",o],["查询语言",i],["文本Id",e])){var g=void 0;if([r,g]=ConfigCommon_1.ConfigCommon.GetValue(a,0,...logPair,["传入语言",o],["查询语言",i],["文本Id",e]),r){var r=DeserializeConfig_1.DeserializeConfig.ParseStringRange(g,0,g.byteLength,...logPair,["传入语言",o],["查询语言",i],["文本Id",e]);if(r.Success)return n=r.Value,ConfigCommon_1.ConfigCommon.Reset(a),StringUtils_1.StringUtils.IsEmpty(n)&&o!==CommonDefine_1.CHS&&(g=exports.configMultiTextLang.GetLocalTextNew(e,CommonDefine_1.CHS),StringUtils_1.StringUtils.IsEmpty(g)||(r=void 0===o?"":"|"+o,n=TEXTNOTFOUNT+"|"+e+r)),t.set(i,n),n}}ConfigCommon_1.ConfigCommon.Reset(a)}};
//# sourceMappingURL=MultiTextLang.js.map