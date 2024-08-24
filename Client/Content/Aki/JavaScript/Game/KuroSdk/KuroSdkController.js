'use strict';
var _a;
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.KuroSdkController = void 0);
const puerts_1 = require('puerts'),
  UE = require('ue'),
  Log_1 = require('../../Core/Common/Log'),
  ControllerBase_1 = require('../../Core/Framework/ControllerBase'),
  TimerSystem_1 = require('../../Core/Timer/TimerSystem'),
  StringUtils_1 = require('../../Core/Utils/StringUtils'),
  BaseConfigController_1 = require('../../Launcher/BaseConfig/BaseConfigController'),
  PlatformSdkManagerNew_1 = require('../../Launcher/Platform/PlatformSdk/PlatformSdkManagerNew'),
  EventDefine_1 = require('../Common/Event/EventDefine'),
  EventSystem_1 = require('../Common/Event/EventSystem'),
  PublicUtil_1 = require('../Common/PublicUtil'),
  GlobalData_1 = require('../GlobalData'),
  ConfigManager_1 = require('../Manager/ConfigManager'),
  ControllerHolder_1 = require('../Manager/ControllerHolder'),
  ModelManager_1 = require('../Manager/ModelManager'),
  ChannelController_1 = require('../Module/Channel/ChannelController'),
  ConfirmBoxDefine_1 = require('../Module/ConfirmBox/ConfirmBoxDefine'),
  UiLayer_1 = require('../Ui/UiLayer'),
  KuroSdkData_1 = require('./KuroSdkData'),
  KuroSdkDefine_1 = require('./KuroSdkDefine'),
  PlatformSdkAndroid_1 = require('./PlatformSdk/PlatformSdkAndroid'),
  PlatformSdkAndroidGlobal_1 = require('./PlatformSdk/PlatformSdkAndroidGlobal'),
  PlatformSdkIos_1 = require('./PlatformSdk/PlatformSdkIos'),
  PlatformSdkIosGlobal_1 = require('./PlatformSdk/PlatformSdkIosGlobal'),
  PlatformSdkWindows_1 = require('./PlatformSdk/PlatformSdkWindows'),
  PlatformSdkWindowsGlobal_1 = require('./PlatformSdk/PlatformSdkWindowsGlobal');
class KuroSdkController extends ControllerBase_1.ControllerBase {
  static OnInit() {
    return (
      KuroSdkController.CanUseSdk() &&
        (KuroSdkController._Se(),
        KuroSdkController.uSe(),
        KuroSdkController.cSe?.Init(),
        ControllerHolder_1.ControllerHolder.KuroSdkController.KuroSdkKickBindFunction(),
        ControllerHolder_1.ControllerHolder.KuroSdkController.KuroSdkLogoutBindFunction(
          ControllerHolder_1.ControllerHolder.LoginController.OnLogoutAccount
        ),
        ControllerHolder_1.ControllerHolder.KuroSdkController.KuroSdkLoginBindFunction(
          ControllerHolder_1.ControllerHolder.LoginController.OnSdkLogin
        )),
      this.mSe(),
      (KuroSdkController.sXn = (0, puerts_1.toManualReleaseDelegate)(
        KuroSdkController.aXn
      )),
      UE.KuroStaticAndroidLibrary.AddAndroidScreenChangeDelegate(
        KuroSdkController.sXn
      ),
      !0
    );
  }
  static OnClear() {
    return (
      this.dSe(),
      this.CancelCurrentWaitPayItemTimer(),
      KuroSdkController.sXn &&
        ((0, puerts_1.releaseManualReleaseDelegate)(KuroSdkController.aXn),
        (KuroSdkController.sXn = void 0)),
      UE.KuroStaticAndroidLibrary.ClearAndroidScreenChangeDelegate(),
      !0
    );
  }
  static mSe() {
    EventSystem_1.EventSystem.Add(
      EventDefine_1.EEventName.OnSetLoginServerId,
      this.CSe
    ),
      EventSystem_1.EventSystem.Add(
        EventDefine_1.EEventName.LoginSuccess,
        this.gSe
      );
  }
  static dSe() {
    EventSystem_1.EventSystem.Remove(
      EventDefine_1.EEventName.OnSetLoginServerId,
      this.CSe
    ),
      EventSystem_1.EventSystem.Remove(
        EventDefine_1.EEventName.LoginSuccess,
        this.gSe
      );
  }
  static uSe() {
    var r;
    void 0 === KuroSdkController.cSe &&
      ('Android' !== (r = UE.GameplayStatics.GetPlatformName()) ||
      this.GetIfGlobalSdk()
        ? 'Android' === r && this.GetIfGlobalSdk()
          ? (KuroSdkController.cSe =
              new PlatformSdkAndroidGlobal_1.PlatformSdkAndroidGlobal())
          : 'IOS' === r && this.GetIfGlobalSdk()
          ? (KuroSdkController.cSe =
              new PlatformSdkIosGlobal_1.PlatformSdkIosGlobal())
          : 'IOS' !== r || this.GetIfGlobalSdk()
          ? 'Windows' !== r || this.GetIfGlobalSdk()
            ? 'Windows' === r &&
              this.GetIfGlobalSdk() &&
              (KuroSdkController.cSe =
                new PlatformSdkWindowsGlobal_1.PlatformSdkWindowsGlobal())
            : (KuroSdkController.cSe =
                new PlatformSdkWindows_1.PlatformSdkWindows())
          : (KuroSdkController.cSe = new PlatformSdkIos_1.PlatformSdkIos())
        : (KuroSdkController.cSe =
            new PlatformSdkAndroid_1.PlatformSdkAndroid()));
  }
  static GetIfGlobalSdk() {
    return KuroSdkController.fSe;
  }
  static GetChannelId() {
    return KuroSdkController.cSe.GetChannelId();
  }
  static CheckIfSdkLogin() {
    return !!KuroSdkController.CanUseSdk() && '0' !== this.pSe().Uid;
  }
  static pSe() {
    return UE.KuroSDKManager.GetCurrentLoginInfo();
  }
  static _Se() {
    Log_1.Log.CheckDebug() &&
      Log_1.Log.Debug(
        'KuroSdk',
        28,
        '当前sdkarea!!!' +
          BaseConfigController_1.BaseConfigController.GetPublicValue('SdkArea')
      ),
      (KuroSdkController.fSe = PublicUtil_1.PublicUtil.GetIfGlobalSdk());
  }
  static GetAgreement() {
    return KuroSdkController.cSe?.GetAgreement();
  }
  static TestOpenWnd() {
    KuroSdkController.SdkOpenUrlWnd(
      '用户协议',
      'https://wutheringwaves.kurogame.com/p/agreement_public.html'
    );
  }
  static CanUseSdk() {
    return (
      !PlatformSdkManagerNew_1.PlatformSdkManagerNew.IsSdkOn &&
      UE.KuroStaticLibrary.IsModuleLoaded('KuroSDK') &&
      BaseConfigController_1.BaseConfigController.GetPublicValue('UseSDK') ===
        KuroSdkDefine_1.USESDK
    );
  }
  static PostKuroSdkEvent(r) {
    if (KuroSdkController.cSe)
      switch (r) {
        case 0:
          KuroSdkController.cSe?.SdkLogin();
          break;
        case 1:
          KuroSdkController.cSe?.SdkKick();
          break;
        case 2:
          KuroSdkController.cSe?.SdkSelectRole();
          break;
        case 3:
          KuroSdkController.cSe?.SdkCreateRole();
          break;
        case 4:
          KuroSdkController.cSe?.SdkLevelUpRole();
          break;
        case 5:
          KuroSdkController.cSe?.SdkExit();
          break;
        case 6:
          KuroSdkController.cSe?.SdkLogout();
          break;
        case 7:
          KuroSdkController.cSe?.SdkOpenLoginWnd();
          break;
        case 8:
        case 9:
          break;
        case 10:
          KuroSdkController.cSe?.InitializePostWebView();
          break;
        case 11:
          KuroSdkController.cSe?.OpenPostWebView();
          break;
        case 13:
          KuroSdkController.cSe?.OpenUserCenter();
          break;
        case 14:
          KuroSdkController.cSe?.ReadProductInfo();
          break;
        case 16:
          KuroSdkController.cSe?.NotifyLanguage();
          break;
        case 12:
          KuroSdkController.cSe?.KuroOpenPrivacyClauseWnd();
          break;
        case 15:
          KuroSdkController.cSe?.ShowAgreement();
      }
    else 5 === r && this.vSe();
  }
  static vSe() {
    GlobalData_1.GlobalData.IsPlayInEditor
      ? UE.KismetSystemLibrary.QuitGame(
          GlobalData_1.GlobalData.World,
          void 0,
          0,
          !1
        )
      : KuroSdkController.CanUseSdk() || UE.KuroStaticLibrary.ExitGame(!1);
  }
  static SdkPay(...o) {
    if (KuroSdkController.CanUseSdk()) {
      let r = void 0;
      var e, t, l, n, a;
      (r =
        1 < o.length
          ? ((e = o[0]),
            (t = o[1]),
            (l = o[2]),
            (n = o[3]),
            (a = o[4]),
            KuroSdkData_1.KuroSdkControllerTool.GetSdkPayProduct(e, t, l, n, a))
          : o[0]),
        Log_1.Log.CheckInfo() &&
          Log_1.Log.Info('KuroSdk', 28, 'SdkPay', ['SdkPay', r]),
        this.cSe?.SdkPay(r),
        (ModelManager_1.ModelManager.KuroSdkModel.CurrentPayItemName =
          r.goodsName),
        this.KuroSdkPaymentBindFunction(this.MSe);
    }
  }
  static OpenNotice() {
    KuroSdkController.cSe?.OpenPostWebView();
  }
  static OpenFeedback() {
    KuroSdkController.cSe?.OpenFeedback();
  }
  static SdkOpenUrlWnd(r, o, e = !0, t = !0, l = !0) {
    KuroSdkController.cSe?.SdkOpenUrlWnd(r, o, e, t, l);
  }
  static QueryProduct(r) {
    const o = new Array();
    r.forEach((r) => {
      r = ConfigManager_1.ConfigManager.PayItemConfig.GetPayConfigById(
        Number(r)
      );
      r && o.push(r.ProductId);
    }),
      KuroSdkController.cSe?.QueryProduct(o, this.ESe());
  }
  static QueryProductByProductId(r) {
    KuroSdkController.cSe?.QueryProduct(r, this.ESe());
  }
  static ShareByteData(r, o) {
    KuroSdkController.cSe?.ShareByteData(r, o);
  }
  static Share(r, o) {
    KuroSdkController.cSe?.Share(r, o);
  }
  static ShareTexture(r, o) {
    KuroSdkController.cSe?.ShareTexture(r, o);
  }
  static ESe() {
    return '';
  }
  static OpenWebView(r, o, e, t, l = !0) {
    KuroSdkController.cSe?.OpenWebView(r, o, e, t, l);
  }
  static KuroSdkLoginBindFunction(r) {
    KuroSdkController.cSe?.KuroSdkLoginBindFunction(r);
  }
  static KuroSdkKickBindFunction() {
    KuroSdkController.cSe?.KuroSdkKickBindFunction();
  }
  static KuroSdkLogoutBindFunction(r) {
    KuroSdkController.cSe?.KuroSdkLogoutBindFunction(r);
  }
  KuroSdkExitBindFunction() {
    KuroSdkController.cSe?.KuroSdkExitBindFunction();
  }
  static KuroSdkPaymentBindFunction(r) {
    KuroSdkController.cSe?.KuroSdkPaymentBindFunction(r);
  }
  static SetPostWebViewRedPointState(r) {
    this.SSe = r;
  }
  static GetPostWebViewRedPointState() {
    return KuroSdkController.SSe;
  }
  static NeedShowCustomerService() {
    return ChannelController_1.ChannelController.CheckCustomerServiceOpen();
  }
  static GetCustomerServiceRedPointState() {
    return !!this.cSe && this.cSe.GetCustomerServiceShowState();
  }
  static OpenCustomerService(r) {
    this.cSe?.ResetCustomServerRedDot(), this.cSe?.OpenCustomerService(r);
  }
  static CheckPhotoPermission() {
    return (
      !KuroSdkController.CanUseSdk() ||
      !KuroSdkController.cSe ||
      KuroSdkController.cSe?.CheckPhotoPermission()
    );
  }
  static RequestPhotoPermission(r) {
    KuroSdkController.CanUseSdk() &&
      KuroSdkController.cSe?.RequestPhotoPermission(r);
  }
  static CancelCurrentWaitPayItemTimer(r = !0) {
    r &&
      ((ModelManager_1.ModelManager.KuroSdkModel.CurrentPayItemName = ''),
      Log_1.Log.CheckInfo()) &&
      Log_1.Log.Info(
        'KuroSdk',
        28,
        'CancelCurrentWaitPayItemTimer clearPayItem'
      ),
      void 0 !== this.ySe &&
        (TimerSystem_1.TimerSystem.Remove(this.ySe), (this.ySe = void 0));
  }
  static StartWaitPayItemTimer() {
    this.CancelCurrentWaitPayItemTimer(!1),
      (this.ySe = TimerSystem_1.TimerSystem.Delay(() => {
        var r,
          o = ModelManager_1.ModelManager.KuroSdkModel.CurrentPayItemName;
        StringUtils_1.StringUtils.IsBlank(o) ||
          ((r = new ConfirmBoxDefine_1.ConfirmBoxDataNew(73)).SetTextArgs(o),
          ControllerHolder_1.ControllerHolder.ConfirmBoxController.ShowConfirmBoxNew(
            r
          )),
          (this.ySe = void 0);
      }, ConfigManager_1.ConfigManager.PayItemConfig.GetWaitPaySuccessTime()));
  }
}
(exports.KuroSdkController = KuroSdkController),
  ((_a = KuroSdkController).cSe = void 0),
  (KuroSdkController.fSe = !1),
  (KuroSdkController.SSe = !1),
  (KuroSdkController.IsKick = !1),
  (KuroSdkController.sXn = void 0),
  (KuroSdkController.ySe = void 0),
  (KuroSdkController.aXn = () => {
    Log_1.Log.CheckInfo() &&
      Log_1.Log.Info('KuroSdk', 28, 'AndroidScreenChangeCallBack'),
      EventSystem_1.EventSystem.Emit(
        EventDefine_1.EEventName.OnAndroidConfigurationChange
      );
    var r = UiLayer_1.UiLayer.UiRootItem?.GetRenderCanvas();
    r &&
      Log_1.Log.CheckInfo() &&
      Log_1.Log.Info(
        'KuroSdk',
        28,
        '旋转后LguiCanvasViewPort',
        ['viewPortX', r.GetViewportSize().X],
        ['viewPortY', r.GetViewportSize().Y]
      );
  }),
  (KuroSdkController.gSe = (r) => {
    var o =
      ConfigManager_1.ConfigManager.PayItemConfig.GetCurrentRegionPayConfigList();
    const e = new Array();
    o?.forEach((r) => {
      e.push(r.Id.toString());
    }),
      _a.QueryProduct(e);
  }),
  (KuroSdkController.CSe = () => {
    _a.CanUseSdk() && _a.fSe && _a.PostKuroSdkEvent(10);
  }),
  (KuroSdkController.MSe = (r, o) => {
    r &&
      '' !== ModelManager_1.ModelManager.KuroSdkModel.CurrentPayItemName &&
      _a.StartWaitPayItemTimer();
  });
//# sourceMappingURL=KuroSdkController.js.map
