
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GameSettingsManager=void 0;const UE=require("ue"),Application_1=require("../../Core/Application/Application"),Info_1=require("../../Core/Common/Info"),LanguageSystem_1=require("../../Core/Common/LanguageSystem"),Log_1=require("../../Core/Common/Log"),StringUtils_1=require("../../Core/Utils/StringUtils"),LauncherGameSettingLib_1=require("../../Launcher/Util/LauncherGameSettingLib"),LocalStorage_1=require("../Common/LocalStorage"),LocalStorageDefine_1=require("../Common/LocalStorageDefine"),PublicUtil_1=require("../Common/PublicUtil"),GlobalData_1=require("../GlobalData"),MenuTool_1=require("../Module/Menu/MenuTool"),GameSettingsDefine_1=require("./GameSettingsDefine"),GameSettingsDeviceRender_1=require("./GameSettingsDeviceRender"),GameSettingsHandle_1=require("./GameSettingsHandle");class GameSettingsManager{static Initialize(){this.VNa(),this.HNa(),this.RefreshFullScreenMode()}static Clear(){this.SaveAll(),this.jNa.clear()}static VNa(){for(const a of GameSettingsDefine_1.gameSettingsRegisterList){let e=void 0;var t=a.GameSettingId,i=a.GameSettingHandleClass;(e=new(i||GameSettingsHandle_1.GameSettingsHandle)(a)).Load(),this.jNa.set(t,e)}}static SetApplySave(e,t){e=this.Get(e);return!!e&&(e.Set(t),!!e.Apply())&&e.Save()}static InitSetApplySave(e,t){e=this.Get(e);if(!e)return!1;if(e.IsInitializeApplied)return!1;let i=t;return void 0!==e.GetDefaultValueCallback&&(i=e.GetDefaultValueCallback()),e.Set(i),!!e.InitializeApply()&&e.Save()}static Set(e,t,i=!1){e=this.Get(e);return!!e&&(e.Set(t,i),!0)}static Save(e){e=this.Get(e);return!!e&&e.Save()}static SaveAll(){for(const e of this.jNa.values())e.Save()}static Apply(e){e=this.Get(e);return!!e&&e.Apply()}static RefreshCurrentValue(e){e=this.Get(e);e&&e.RefreshCurrentValue()}static ReApply(e){e=this.Get(e);return!!e&&e.ReApply()}static Get(e){return this.jNa.get(e)}static GetCurrentValue(e){var t=this.jNa.get(e);return t?t.GetCurrentValue():(Log_1.Log.CheckError()&&Log_1.Log.Error("GameSettings",64,"获得对应设置项的当前值时，设置项找不到",["gameSettingId",e]),0)}static GetEditValue(e){var t=this.jNa.get(e);return t?t.GetEditorValue():(Log_1.Log.CheckError()&&Log_1.Log.Error("GameSettings",64,"获得对应设置项的编辑值时，设置项找不到",["gameSettingId",e]),0)}static GetGameSettingsHandleMap(){return this.jNa}static HNa(){var i=this.Get(51),a=this.Get(52);if(i&&a)if(GlobalData_1.GlobalData.IsPlayInEditor||Application_1.Application.IsPublicationApp()){var n=i.GetCurrentValue(),n=(LanguageSystem_1.LanguageSystem.PackageLanguage=MenuTool_1.MenuTool.GetLanguageCodeById(n),a.GetCurrentValue()),n=MenuTool_1.MenuTool.GetAudioCodeById(n);n&&LanguageSystem_1.LanguageSystem.SetPackageAudio(n,GlobalData_1.GlobalData.World)}else{let e=i.GetCurrentValue(),t=a.GetCurrentValue();i.HasLocalStorageValue&&a.HasLocalStorageValue||(o=(n=LauncherGameSettingLib_1.LauncherGameSettingLib.LoadPlayMenuInfo())?.get(51),n=n?.get(52),t=void 0===o||void 0===n?(LanguageSystem_1.LanguageSystem.FirstTimeSetLanguage(GlobalData_1.GlobalData.World),e=MenuTool_1.MenuTool.GetLanguageIdByCode(LanguageSystem_1.LanguageSystem.PackageLanguage),MenuTool_1.MenuTool.GetSpeechTypeByLanguageType(e)):(e=o,n),Log_1.Log.CheckInfo()&&Log_1.Log.Info("GameSettings",64,"第一次设置语言，得到的数据：",["languageType",e],["speechType",t])),i.Set(e),a.Set(t),LanguageSystem_1.LanguageSystem.PackageLanguage=MenuTool_1.MenuTool.GetLanguageCodeById(e);var o=MenuTool_1.MenuTool.GetAudioCodeById(t);o&&LanguageSystem_1.LanguageSystem.SetPackageAudio(o,GlobalData_1.GlobalData.World),i.RefreshCurrentValue(),a.RefreshCurrentValue(),i.Save(),a.Save(),Log_1.Log.CheckInfo()&&Log_1.Log.Info("GameSettings",64,"[InitLanguage]初始化语言数据",["languageType",e],["speechType",t])}}static RefreshFullScreenMode(){var e=UE.GameUserSettings.GetGameUserSettings().GetFullscreenMode();let t=GameSettingsDefine_1.WINDOWS_RESOLUTION_INDEX;var i=GameSettingsManager.Get(6),i=(void 0!==i&&i.HasLocalStorageValue?t=i.GetCurrentValue():void 0!==(i=UE.GameUserSettings.GetGameUserSettings())&&(t=GameSettingsDeviceRender_1.GameSettingsDeviceRender.GetResolutionIndexByList(i.GetScreenResolution())),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Menu",64,"刷新当前全屏模式",["fullscreenMode",e],["resolutionValue",t]),UE.KismetSystemLibrary.GetCommandLine());if(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Menu",64,"根据命令行判断是否为全屏模式",["commandLine",i]),0<=i.search("-windowed"))Log_1.Log.CheckInfo()&&Log_1.Log.Info("Menu",64,"刷新当前全屏模式-使用-windowed参数启动，将全屏模式设为窗口，并且设置分辨率",["fullscreenMode",e],["resolutionValue",t]),this.fhh(t);else switch(e){case 0:case 1:this.zsl(0);break;case 2:this.fhh(t)}}static fhh(e){this.zsl(1),this.InitSetApplySave(6,e)}static zsl(e){var t=this.Get(5);t&&(t.Set(e,!0),t.InitializeApply(),t.Save())}static ConvertLocalMenuData(){var t=LocalStorage_1.LocalStorage.GetGlobal(LocalStorageDefine_1.ELocalStorageGlobalKey.IsConvertOldMenuData,!1);if(Log_1.Log.CheckInfo()&&Log_1.Log.Info("Menu",64,"[ViewSensitivity]打印是否转化旧的设置本地保存",["IsConvertOldMenuData",t]),!t){let e=void 0;if(!(e=LocalStorage_1.LocalStorage.GetGlobal(LocalStorageDefine_1.ELocalStorageGlobalKey.MenuData))){t=LocalStorage_1.LocalStorage.GetGlobal(LocalStorageDefine_1.ELocalStorageGlobalKey.PlayMenuInfo);if(!(e=StringUtils_1.StringUtils.IsEmpty(t)?e:PublicUtil_1.PublicUtil.ObjToMap(JSON.parse(t))))return}var t=LocalStorage_1.LocalStorage.GetGlobal(LocalStorageDefine_1.ELocalStorageGlobalKey.TextLanguage),i=LocalStorage_1.LocalStorage.GetGlobal(LocalStorageDefine_1.ELocalStorageGlobalKey.VoiceLanguage);void 0!==t&&void 0!==i&&(e.set(51,t),e.set(52,i)),this.IFa(e,93),this.IFa(e,1),this.IFa(e,2),this.IFa(e,3),this.IFa(e,4),this.IFa(e,69),this.IFa(e,70),this.IFa(e,6),this.IFa(e,51),this.IFa(e,52),this.IFa(e,59),this.IFa(e,88),LocalStorage_1.LocalStorage.SetGlobal(LocalStorageDefine_1.ELocalStorageGlobalKey.IsConvertOldMenuData,!0)}}static IFa(e,t){e=e.get(t);e&&this.SetApplySave(t,e)}static ConvertViewSensitivity(){var e=LocalStorage_1.LocalStorage.GetGlobal(LocalStorageDefine_1.ELocalStorageGlobalKey.IsConvertAllViewSensitivity,!1);Log_1.Log.CheckInfo()&&Log_1.Log.Info("Menu",64,"[ViewSensitivity]打印是否转化了灵敏度",["isConvertViewSensitivity",e]),e||(Info_1.Info.IsPcPlatform()&&(Log_1.Log.CheckInfo()&&Log_1.Log.Info("Menu",64," [ViewSensitivity]转化Pc视角灵敏度"),this.wxa(89),this.wxa(90),this.wxa(91),this.wxa(92)),Info_1.Info.IsMobilePlatform()&&(Log_1.Log.CheckInfo()&&Log_1.Log.Info("Menu",64,"[ViewSensitivity]转化Mobile视角灵敏度"),this.wxa(94),this.wxa(95),this.wxa(96),this.wxa(97)),LocalStorage_1.LocalStorage.SetGlobal(LocalStorageDefine_1.ELocalStorageGlobalKey.IsConvertAllViewSensitivity,!0))}static wxa(e){var t,i,a=this.Get(e);a&&void 0!==(t=a.GetCurrentValue())&&t<50&&(i=Math.floor(22.22+.555*t),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Menu",64,"[ViewSensitivity]转化视角灵敏度",["functionId",e],["value",t],["newValue",i]),a.Set(i),a.Apply(),a.Save())}}(exports.GameSettingsManager=GameSettingsManager).jNa=new Map,GameSettingsManager.IsGameSettingsAppliedOnOpenLoading=!1;
//# sourceMappingURL=GameSettingsManager.js.map