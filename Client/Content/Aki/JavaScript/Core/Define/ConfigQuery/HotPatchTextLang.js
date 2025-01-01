
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configHotPatchTextLang=void 0;const LanguageSystem_1=require("../../Common/LanguageSystem"),Stats_1=require("../../Common/Stats"),ConfigCommon_1=require("../../Config/ConfigCommon"),DeserializeConfig_1=require("../../Config/DeserializeConfig"),StringUtils_1=require("../../Utils/StringUtils"),CommonDefine_1=require("../CommonDefine"),TEXTNOTFOUNT="text not found",DB="lang_hot_patch.db",TABLE="HotPatchText",COMMAND="select content from `HotPatchText` where id = ?",logPair=[["数据库",DB],["表名",TABLE],["语句",COMMAND]],langCache=new Map,initStat=Stats_1.Stat.CreateNoFlameGraph("configHotPatchTextLang.Init"),getLocalTextStat=Stats_1.Stat.CreateNoFlameGraph("configHotPatchTextLang.GetLocalTextNew"),LOCAL_TEXT_STAT_PREFIX="configHotPatchTextLang.GetLocalTextNew(";exports.configHotPatchTextLang={Init:()=>{ConfigCommon_1.ConfigCommon.GetLangStatementId(TABLE,DB,COMMAND)},GetLocalText:(e,o=0)=>{},GetLocalTextNew:(e,o=void 0)=>{Stats_1.Stat.CreateNoFlameGraph(""+LOCAL_TEXT_STAT_PREFIX+e+`, ${o})`);if(LanguageSystem_1.LanguageSystem.GmShowLanguageKey)return n=LanguageSystem_1.LanguageSystem.GetCultureOrDefault(o),TABLE+`|${e}|`+n;let t=langCache.get(e);t||(t=new Map,langCache.set(e,t));var n=LanguageSystem_1.LanguageSystem.GetCultureOrDefault(o);let i=t.get(n);if(i)return i;var a=ConfigCommon_1.ConfigCommon.GetLangStatementId(TABLE,DB,COMMAND,n);if(r=ConfigCommon_1.ConfigCommon.CheckStatement(a)&&ConfigCommon_1.ConfigCommon.BindString(a,1,e,...logPair,["Id",e])&&0<ConfigCommon_1.ConfigCommon.Step(a,!0,...logPair,["传入语言",o],["查询语言",n],["文本Id",e])){var g=void 0;if([r,g]=ConfigCommon_1.ConfigCommon.GetValue(a,0,...logPair,["传入语言",o],["查询语言",n],["文本Id",e]),r){var r=DeserializeConfig_1.DeserializeConfig.ParseStringRange(g,0,g.byteLength,...logPair,["传入语言",o],["查询语言",n],["文本Id",e]);if(r.Success)return i=r.Value,ConfigCommon_1.ConfigCommon.Reset(a),StringUtils_1.StringUtils.IsEmpty(i)&&o!==CommonDefine_1.CHS&&(g=exports.configHotPatchTextLang.GetLocalTextNew(e,CommonDefine_1.CHS),StringUtils_1.StringUtils.IsEmpty(g)||(r=void 0===o?"":"|"+o,i=TEXTNOTFOUNT+"|"+e+r)),t.set(n,i),i}}ConfigCommon_1.ConfigCommon.Reset(a)}};
//# sourceMappingURL=HotPatchTextLang.js.map