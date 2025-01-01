
"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.KuroPushController=void 0;const puerts_1=require("puerts"),UE=require("ue"),Info_1=require("../../Core/Common/Info"),LanguageSystem_1=require("../../Core/Common/LanguageSystem"),Log_1=require("../../Core/Common/Log"),ControllerBase_1=require("../../Core/Framework/ControllerBase"),HotPatchPushSdk_1=require("../../Launcher/HotPatchPushSdk/HotPatchPushSdk"),LauncherStorageLib_1=require("../../Launcher/Util/LauncherStorageLib"),EventDefine_1=require("../Common/Event/EventDefine"),EventSystem_1=require("../Common/Event/EventSystem"),GameSettingsManager_1=require("../GameSettings/GameSettingsManager"),ControllerHolder_1=require("../Manager/ControllerHolder"),ConfirmBoxDefine_1=require("../Module/ConfirmBox/ConfirmBoxDefine"),SELFDEFINESN="push";class KuroPushController extends ControllerBase_1.ControllerBase{static IfCanUsePush(){var t=Info_1.Info.IsMobilePlatform();return!(!UE.KuroStaticLibrary.IsModuleLoaded("KuroPushSdk")||!t)}static OnInit(){return UE.KuroLauncherLibrary.IsFirstIntoLauncher()&&(this.oSe(),this.BindCurrentLanguageTag(),this.Ojs()),this.BindCurrentLanguageTag(),this.nSe(),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Push",27,"current push clientId",["clientId",this.GetClientId()]),!0}static async Ojs(){await this.Njs(),await this.rSe()}static async Njs(){var t;LauncherStorageLib_1.LauncherStorageLib.GetGlobal(LauncherStorageLib_1.ELauncherStorageGlobalKey.AndroidNotFirstTimeOpenPush,!1)||(LauncherStorageLib_1.LauncherStorageLib.SetGlobal(LauncherStorageLib_1.ELauncherStorageGlobalKey.AndroidNotFirstTimeOpenPush,!0),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Push",27,"KuroPush:检查安卓初次权限"),UE.AndroidPermissionFunctionLibrary.CheckPermission("android.permission.POST_NOTIFICATIONS"))||(Log_1.Log.CheckInfo()&&Log_1.Log.Info("Push",27,"KuroPush:安卓没有推送权限，尝试获取"),(t=UE.NewArray(UE.BuiltinString)).Add("android.permission.POST_NOTIFICATIONS"),0<(await this.HSr(t)).length?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("Push",27,"KuroPush:安卓推送权限获取失败"),this.TurnOffPush()):(Log_1.Log.CheckInfo()&&Log_1.Log.Info("Push",27,"KuroPush:安卓推送权限获取成功"),await this.TurnOnPush(!1)))}static async HSr(e){return new Promise(t=>{const n=UE.AndroidPermissionFunctionLibrary.AcquirePermissions(e),a=(e,r)=>{n.OnPermissionsGrantedDynamicDelegate.Remove(a);var o=new Array,s=e.Num();for(let t=0;t<s;t++){var i=e.Get(t);r.Get(t)||o.push(i)}t(o)};n.OnPermissionsGrantedDynamicDelegate.Add(a)})}static BindCurrentLanguageTag(){var t=LanguageSystem_1.LanguageSystem.PackageLanguage;Log_1.Log.CheckInfo()&&Log_1.Log.Info("Push",27,"current push Language Tag",["Tag",t]),UE.KuroPushSdkStaticLibrary.SetTag(t,SELFDEFINESN)}static nSe(){var t=this.GetPushState()?1:0,e=(Log_1.Log.CheckInfo()&&Log_1.Log.Info("KuroSdk",27,"刷新推送状态",["result",t]),GameSettingsManager_1.GameSettingsManager.Get(121));e?.Set(t),e?.RefreshCurrentValue(),e?.Save(),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.RefreshMenuSetting,121)}static async rSe(){this.IfCanUsePush()&&(await this.GetPushNotiPermissionEnableState()?this.TurnOnPush(!1):this.TurnOffPush())}static oSe(){this.sSe||(KuroPushController.PushFunctionDelegate=(0,puerts_1.toManualReleaseDelegate)(KuroPushController.aSe),UE.KuroPushSdkStaticLibrary.GetPushObject()?.PushSdkMessageBluePrintDelegate.Add(KuroPushController.aSe)),this.sSe=!0}static RemovePushDelegate(){KuroPushController.PushFunctionDelegate&&(UE.KuroPushSdkStaticLibrary.GetPushObject()?.IsValid()&&UE.KuroPushSdkStaticLibrary.GetPushObject()?.PushSdkMessageBluePrintDelegate.Remove(KuroPushController.aSe),(0,puerts_1.releaseManualReleaseDelegate)(KuroPushController.aSe),KuroPushController.PushFunctionDelegate=void 0,this.sSe=!1)}static SetPushNotifyCall(t){this.lSe=t}static SendLocalPush(t,e,r){HotPatchPushSdk_1.HotPatchPushSdk.SendLocalPush(t,e,r)}static OpenNotification(){this.IfCanUsePush()?UE.KuroPushSdkStaticLibrary.OpenNotification():Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Push",27," Not OpenNotification")}static async GetPushNotiPermissionEnableState(){return!!this.IfCanUsePush()&&new Promise(e=>{const r=t=>{UE.KuroPushSdkStaticLibrary.GetPushObject()?.AllowedNotificationsDelegate.Remove(r),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Push",27,"当前推送权限状态",["state",t]),e(t)};UE.KuroPushSdkStaticLibrary.GetPushObject()?.AllowedNotificationsDelegate.Add(r),UE.KuroPushSdkStaticLibrary.AreNotificationEnable()})}static GetClientId(){return this.IfCanUsePush()?UE.KuroPushSdkStaticLibrary.GetClientId():""}static async TurnOnPush(t=!0){HotPatchPushSdk_1.HotPatchPushSdk.TurnOnPush(),this.nSe(),t&&!await this.GetPushNotiPermissionEnableState()&&((t=new ConfirmBoxDefine_1.ConfirmBoxDataNew(171)).FunctionMap.set(1,()=>{this.OpenNotification()}),t.IsEscViewTriggerCallBack=!1,ControllerHolder_1.ControllerHolder.ConfirmBoxController.ShowConfirmBoxNew(t))}static TurnOffPush(){HotPatchPushSdk_1.HotPatchPushSdk.TurnOffPush(),this.nSe()}static GetPushState(){var t=LauncherStorageLib_1.LauncherStorageLib.GetGlobal(LauncherStorageLib_1.ELauncherStorageGlobalKey.CachePushOpenState,!1);return void 0!==t&&t}static OnClear(){return this.RemovePushDelegate(),!0}}exports.KuroPushController=KuroPushController,(_a=KuroPushController).sSe=!1,KuroPushController.lSe=void 0,KuroPushController.PushFunctionDelegate=void 0,KuroPushController.aSe=(t,e)=>{_a.lSe?.(t,e),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Push",27,"接收到push回调信息",["functionName",t],["result",e])};
//# sourceMappingURL=KuroPushController.js.map