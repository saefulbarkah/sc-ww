
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PlatformCloudSdkBase=void 0;const Json_1=require("../../../Core/Common/Json"),LanguageSystem_1=require("../../../Core/Common/LanguageSystem"),Log_1=require("../../../Core/Common/Log"),Time_1=require("../../../Core/Common/Time"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),CloudGameManager_1=require("../../Manager/CloudGameManager"),ControllerHolder_1=require("../../Manager/ControllerHolder"),ModelManager_1=require("../../Manager/ModelManager"),LogReportDefine_1=require("../../Module/LogReport/LogReportDefine"),KuroSdkData_1=require("../KuroSdkData"),KuroSdkReport_1=require("../KuroSdkReport"),PlatformSdkWindows_1=require("./PlatformSdkWindows"),WEBVIEWCD=5e3;class PlatformCloudSdkBase extends PlatformSdkWindows_1.PlatformSdkWindows{constructor(){super(...arguments),this.CustomerServiceResultCallBack=e=>{var o=Json_1.Json.Parse(e);Log_1.Log.CheckInfo()&&Log_1.Log.Info("CloudGame",58,"当前客服红点数量",["num",e]),o&&(Log_1.Log.CheckInfo()&&Log_1.Log.Info("CloudGame",58,"当前客服红点数量",["num",o.isredot]),this.CurrentCustomerShowState=0<o.isredot),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.SdkCustomerRedPointRefresh)},this.Bu_=e=>{e=Json_1.Json.Decode(e);CloudGameManager_1.CloudGameManager.CloudGameTraceId=e.TraceId,ControllerHolder_1.ControllerHolder.LoginController.OnSdkLogin(e)},this.qu_=e=>{0===Json_1.Json.Decode(e).ErrorCode?EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnShareResult,!0):EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnShareResult,!1)},this.ku_=e=>{var o,e=Json_1.Json.Decode(e);ControllerHolder_1.ControllerHolder.KuroSdkController.OnSdkPayEnd(1===e.paymentType,""),1===e.paymentType?((o=new LogReportDefine_1.SuccessSdkPayEvent).s_sdk_pay_order=ModelManager_1.ModelManager.KuroSdkModel.CurrentPayingOrderId,ControllerHolder_1.ControllerHolder.LogReportController.LogReport(o)):((o=new LogReportDefine_1.FailSdkPayEvent).s_sdk_pay_order=ModelManager_1.ModelManager.KuroSdkModel.CurrentPayingOrderId,o.s_reason=3===e.paymentType?"cancel":"fail",ControllerHolder_1.ControllerHolder.LogReportController.LogReport(o)),KuroSdkReport_1.KuroSdkReport.OnSdkPay()}}BindProtocolListener(){}BindShareResultListener(){CloudGameManager_1.CloudGameManager.BindFunction("OnShareResult",this.qu_),CloudGameManager_1.CloudGameManager.BindFunction("OnCloudGameLogin",this.Bu_),CloudGameManager_1.CloudGameManager.BindFunction("OnSDKPayResult",this.ku_)}KuroSdkBindRedPointFunction(e){}KuroSdkExitBindFunction(){}KuroSdkQueryProductBindFunction(){}KuroDeepLinkBindFunction(){}KuroGameWinStateBindFunction(){}SdkLogout(){}SdkLogin(){CloudGameManager_1.CloudGameManager.SendData("RequestLogin"),Log_1.Log.CheckInfo()&&Log_1.Log.Info("CloudGame",58,"请求下发缓存的SDK登录信息")}SdkOpenLoginWnd(){CloudGameManager_1.CloudGameManager.SendData("RequestLogin"),Log_1.Log.CheckInfo()&&Log_1.Log.Info("CloudGame",58,"请求重新下发缓存的SDK登录信息")}OpenUserCenter(){CloudGameManager_1.CloudGameManager.SendData("OpenUserCenter")}ShowAgreement(){CloudGameManager_1.CloudGameManager.SendData("OpenAgreement")}KuroOpenPrivacyClauseWnd(){CloudGameManager_1.CloudGameManager.SendData("OpenPrivacyClause")}OpenPostWebView(){if(0!==this.LastOpenPostViewTime&&Time_1.Time.Now-this.LastOpenPostViewTime<=WEBVIEWCD)return void ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByCode("InDisplayCd");this.LastOpenPostViewTime=Time_1.Time.Now,Log_1.Log.CheckInfo()&&Log_1.Log.Info("CloudGame",58,"打开公告");var e=ModelManager_1.ModelManager.FunctionModel,o=ModelManager_1.ModelManager.PlayerInfoModel,n=ControllerHolder_1.ControllerHolder.KuroSdkController.GetIfGlobalSdk()?"global":"cn",r=new KuroSdkData_1.OpenPostWebViewParam,o=(r.playerId=void 0===o.GetId()?"0":o.GetId().toString(),r.playerLevel=e.GetPlayerLevel()?e.GetPlayerLevel().toString():"1",r.language=LanguageSystem_1.LanguageSystem.PackageLanguage,r.extend="extend",r.gameOrientation="2",r.type=n,Json_1.Json.Stringify(r));Log_1.Log.CheckInfo()&&Log_1.Log.Info("CloudGame",58,"云游戏OpenPostWebView",["data",o]),CloudGameManager_1.CloudGameManager.SendDataByKey("OpenPostWebView",o)}OpenWebView(e,o,n,r,a){if(0!==this.LastOpenTime&&Time_1.Time.Now-this.LastOpenTime<=WEBVIEWCD)return void ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByCode("InDisplayCd");this.LastOpenTime=Time_1.Time.Now;var t=new KuroSdkData_1.OpenWebViewParamCloudGame,e=(t.title=e,t.url=o,t.transparent=r,t.webAccelerated=a,t.isLandscape=n,Json_1.Json.Stringify(t));Log_1.Log.CheckInfo()&&Log_1.Log.Info("CloudGame",58,"OpenWebView",["sdkJson",e??""]),CloudGameManager_1.CloudGameManager.SendDataByKey("OpenWebView",e)}SdkOpenUrlWnd(e,o,n,r,a=!0){this.OpenWebView(e,o,n,r,a)}}exports.PlatformCloudSdkBase=PlatformCloudSdkBase;
//# sourceMappingURL=PlatformCloudSdkBase.js.map