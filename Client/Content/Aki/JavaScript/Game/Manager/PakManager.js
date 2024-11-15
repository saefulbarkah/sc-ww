
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PakManager=void 0;const UE=require("ue"),Log_1=require("../../Core/Common/Log"),MultiTextLang_1=require("../../Core/Define/ConfigQuery/MultiTextLang"),TimerSystem_1=require("../../Core/Timer/TimerSystem"),AppUtil_1=require("../../Launcher/Update/AppUtil"),PakKeyUpdate_1=require("../../Launcher/Update/PakKeyUpdate"),ConfirmBoxDefine_1=require("../Module/ConfirmBox/ConfirmBoxDefine"),LoginDefine_1=require("../Module/Login/Data/LoginDefine"),LoginController_1=require("../Module/Login/LoginController"),ControllerHolder_1=require("./ControllerHolder");class PakManager{static Init(){void 0!==PakManager.xBe&&(TimerSystem_1.TimerSystem.Remove(PakManager.xBe),PakManager.xBe=void 0),PakManager.Fth(),PakManager.Vth()}static Fth(){var e;PakKeyUpdate_1.PakKeyUpdate.NeedExtPakKeys&&0<PakKeyUpdate_1.PakKeyUpdate.UpdateCheckInterval&&(e=1e3*PakKeyUpdate_1.PakKeyUpdate.UpdateCheckInterval,PakManager.xBe=TimerSystem_1.TimerSystem.Forever(()=>{PakKeyUpdate_1.PakKeyUpdate.CheckPakKey(void 0,void 0).catch(e=>{})},e,1,void 0,void 0,!1))}static Vth(){void 0!==PakManager.Hth&&(TimerSystem_1.TimerSystem.Remove(PakManager.Hth),PakManager.Hth=void 0),0<PakManager.jth&&(PakManager.Hth=TimerSystem_1.TimerSystem.Forever(()=>{PakManager.Wth()},PakManager.jth,1,void 0,void 0,!1))}static Wth(){var e,a;UE.KuroPakMountStatic.IsSha1CheckWorking()||(0<(e=UE.KuroPakMountStatic.GetSha1CheckFailedCount())?(Log_1.Log.CheckError()&&Log_1.Log.Error("ErrorCode",21,"文件Sha1校验失败",["Count",e]),e=new ConfirmBoxDefine_1.ConfirmBoxDataNew(33),a=MultiTextLang_1.configMultiTextLang.GetLocalTextNew("ResourceVerificationFailed_Text"),e.SetTextArgs(a),e.FunctionMap.set(1,()=>{PakManager.Qth()}),ControllerHolder_1.ControllerHolder.ConfirmBoxController.ShowConfirmBoxNew(e)):void 0!==PakManager.Hth&&(TimerSystem_1.TimerSystem.Remove(PakManager.Hth),PakManager.Hth=void 0))}static Qth(){LoginController_1.LoginController.LogLoginProcessLink(LoginDefine_1.ELoginStatus.PatchVerifyFail),UE.KuroPakMountStatic.UnmountAllPaks(),UE.KuroPakMountStatic.DeleteSha1CheckFailedFiles(),AppUtil_1.AppUtil.QuitGame("Pak")}static Clear(){void 0!==PakManager.Hth&&(TimerSystem_1.TimerSystem.Remove(PakManager.Hth),PakManager.Hth=void 0)}}(exports.PakManager=PakManager).xBe=void 0,PakManager.Hth=void 0,PakManager.jth=6e4;
//# sourceMappingURL=PakManager.js.map