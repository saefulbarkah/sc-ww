
"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UiTextTranslationUtils=void 0;const puerts_1=require("puerts"),UE=require("ue"),Info_1=require("../Common/Info"),Log_1=require("../Common/Log"),ConfigDefine_1=require("../Define/ConfigDefine"),MultiTextLang_1=require("../Define/ConfigQuery/MultiTextLang"),PrefabTextItemByItemId_1=require("../Define/ConfigQuery/PrefabTextItemByItemId");class UiTextTranslationUtils{static Kz(t){1===t.overflowType&&(t.bBestFit=!0)}static Initialize(){UE.UIText.SetTextTranslateDelegate((0,puerts_1.toManualReleaseDelegate)(UiTextTranslationUtils.TranslateText)),UE.UIText.SetLocalTextDelegate((0,puerts_1.toManualReleaseDelegate)(UiTextTranslationUtils.GetLocalText)),UE.UIText.SetLocalTextNewDelegate((0,puerts_1.toManualReleaseDelegate)(UiTextTranslationUtils.GetLocalTextNew)),Info_1.Info.IsPlayInEditor&&UE.UIText.SetGmReplaceFontDelegate((0,puerts_1.toManualReleaseDelegate)(UiTextTranslationUtils.GmReplaceText))}static Destroy(){UE.UIText.SetTextTranslateDelegate(void 0),UE.UIText.SetLocalTextDelegate(void 0),UE.UIText.SetLocalTextNewDelegate(void 0),(0,puerts_1.releaseManualReleaseDelegate)(UiTextTranslationUtils.TranslateText),(0,puerts_1.releaseManualReleaseDelegate)(UiTextTranslationUtils.GetLocalText),(0,puerts_1.releaseManualReleaseDelegate)(UiTextTranslationUtils.GetLocalTextNew),Info_1.Info.IsPlayInEditor&&(UE.UIText.SetGmReplaceFontDelegate(void 0),(0,puerts_1.toManualReleaseDelegate)(UiTextTranslationUtils.GmReplaceText))}}exports.UiTextTranslationUtils=UiTextTranslationUtils,(_a=UiTextTranslationUtils).AkiFontData=void 0,UiTextTranslationUtils.TranslateText=e=>{if(e.TranslateId){let t=void 0;(t=0!==e.TranslateId?PrefabTextItemByItemId_1.configPrefabTextItemByItemId.GetConfig(BigInt(e.TranslateId)):t)&&(UiTextTranslationUtils.Kz(e),e.ShowTextNew(t.Text))}else e.text=""},UiTextTranslationUtils.GetLocalText=(t,e,i)=>{let a=void 0;return a=(0,ConfigDefine_1.getLangInterface)(t)?.GetLocalText(e),i?(void 0===a&&(a=i.GetText(),Log_1.Log.CheckWarn())&&Log_1.Log.Warn("TextLanguageSearch",10,"[GetLocalText]配置表文本获取失败，文本控件显示自身文本",["控件Id",i.TranslateId],["控件自身文本",a]),a!==i.GetText()&&UiTextTranslationUtils.Kz(i)):void 0===a&&Log_1.Log.CheckError()&&Log_1.Log.Error("TextLanguageSearch",10,"[GetLocalText]格式化字符串传入的表名与文本id无效",["表名",t],["文本id",e]),a},UiTextTranslationUtils.GetLocalTextNew=(t,e)=>{let i=void 0;return i=MultiTextLang_1.configMultiTextLang.GetLocalTextNew(t),e?(void 0===i&&(i=e.GetText(),Log_1.Log.CheckWarn())&&Log_1.Log.Warn("TextLanguageSearch",10,"[GetLocalTextNew]预制体固定文本多语言切换失败，该文本控件Id还没有收集到，将显示预制体上的文本",["控件Id",e.TranslateId],["控件自身文本",i]),i!==e.GetText()&&UiTextTranslationUtils.Kz(e)):void 0===i&&Log_1.Log.CheckError()&&Log_1.Log.Error("TextLanguageSearch",10,"[GetLocalTextNew]格式化字符串传入的表名与文本id无效",["文本id",t]),i},UiTextTranslationUtils.GmReplaceText=t=>{_a.AkiFontData&&t.SetFont(_a.AkiFontData)};
//# sourceMappingURL=UiTextTranslationUtils.js.map