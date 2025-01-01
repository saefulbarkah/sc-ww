
"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.MenuController=void 0;const Info_1=require("../../../Core/Common/Info"),Log_1=require("../../../Core/Common/Log"),TimerSystem_1=require("../../../Core/Timer/TimerSystem"),MathUtils_1=require("../../../Core/Utils/MathUtils"),PlatformSdkManagerNew_1=require("../../../Launcher/Platform/PlatformSdk/PlatformSdkManagerNew"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),GameSettingsDeviceRender_1=require("../../GameSettings/GameSettingsDeviceRender"),GameSettingsManager_1=require("../../GameSettings/GameSettingsManager"),InputSettings_1=require("../../InputSettings/InputSettings"),InputSettingsManager_1=require("../../InputSettings/InputSettingsManager"),ControllerHolder_1=require("../../Manager/ControllerHolder"),ModelManager_1=require("../../Manager/ModelManager"),PreloadConfigStatementPart4_1=require("../../Preload/PreloadConfigStatementPart4"),UiControllerBase_1=require("../../Ui/Base/UiControllerBase"),MobileSwitchInputController_1=require("../../Ui/Input/Moblie/MobileSwitchInputController"),InputMappingsDefine_1=require("../../Ui/InputDistribute/InputMappingsDefine"),UiManager_1=require("../../Ui/UiManager"),AdviceController_1=require("../Advice/AdviceController"),CommonInputViewController_1=require("../Common/InputView/Controller/CommonInputViewController"),ConfirmBoxController_1=require("../ConfirmBox/ConfirmBoxController"),ConfirmBoxDefine_1=require("../ConfirmBox/ConfirmBoxDefine"),LogReportController_1=require("../LogReport/LogReportController"),LogReportDefine_1=require("../LogReport/LogReportDefine"),CHECK_MENUDATA_SAVE_INTERVAL=6e4;class MenuController extends UiControllerBase_1.UiControllerBase{static OnInit(){return MenuController.MFe(),MenuController.StartCheckEditedMenuDataSave(),MenuController.cXa(),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Menu",64,"设置系统Controller初始化"),!0}static OnClear(){return MenuController.StopCheckEditedMenueDataSave(),!0}static OnAddEvents(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.ControllerConnectChange,MenuController.lWa),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnGameplaySettingsSet,MenuController.JNa)}static OnRemoveEvents(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.ControllerConnectChange,MenuController.lWa),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnGameplaySettingsSet,MenuController.JNa)}static cXa(){var e,t;Info_1.Info.IsMobileInputModel()&&(e=ModelManager_1.ModelManager.PlatformModel.IsGamepadAttached(),(t=GameSettingsManager_1.GameSettingsManager.Get(137))?.Set(e?1:0),t?.Apply(),Log_1.Log.CheckInfo()&&Log_1.Log.Info("MobileInputSwitch",10,"初始化手柄连接状态",["isGamepadAttach",e],["gameSettingHandle",void 0!==t],["MobileGamepadMode",t?.GetCurrentValue()]),e)&&(t=ModelManager_1.ModelManager.PlatformModel.GetCurrentDeviceInputController(),Info_1.Info.SwitchInputControllerType(t,"InitGamepadConnect"))}static RefreshGamepadConnect(){var e,t,n;Info_1.Info.IsMobileInputModel()&&(e=ModelManager_1.ModelManager.PlatformModel.IsGamepadAttached(),n=(t=GameSettingsManager_1.GameSettingsManager.Get(137))?.GetCurrentValue()??0,t?.Set(e?1:0),t?.Apply(),Log_1.Log.CheckInfo()&&Log_1.Log.Info("MobileInputSwitch",10,"刷新手柄连接状态",["isGamepadAttach",e],["gameSettingHandle",void 0!==t],["MobileGamepadMode",t?.GetCurrentValue()]),e||1!==n||(Log_1.Log.CheckInfo()&&Log_1.Log.Info("MobileInputSwitch",10,"手柄重置回触屏模式,手柄断联"),MobileSwitchInputController_1.MobileSwitchInputController.SwitchToTouchByDisconnectGamepad()))}static GetMainTypeList(){return ModelManager_1.ModelManager.MenuModel.GetMainTypeList()}static GetTargetMainInfo(e){return ModelManager_1.ModelManager.MenuModel.GetTargetMainInfo(e)}static GetTargetBaseConfigData(e){return ModelManager_1.ModelManager.MenuModel.GetTargetConfigData(e)}static GetTargetConfig(e){return this.CheckIfServerConfig(e)?this.GetServerConfigValue(e):ModelManager_1.ModelManager.MenuModel.GetGameSettingsHandleEditValue(e)??0}static GetServerConfigValue(e){switch(e){case 59:return ModelManager_1.ModelManager.AdviceModel.GetAdviceShowSetting()?0:1;case 136:return ModelManager_1.ModelManager.KuroSdkModel.PlayStationPlayOnlyState?1:0}return 0}static CheckIfServerConfig(e){switch(e){case 59:case 136:return!0}return!1}static zxi(){var e=this.GetTargetConfig(6);return GameSettingsDeviceRender_1.GameSettingsDeviceRender.GetResolutionByList(e).ToString()}static ReportSettingMenuLogEvent(){var e=new LogReportDefine_1.SettingMenuLogEvent;e.i_image_quality=this.GetTargetConfig(10),e.i_display_mode=this.GetTargetConfig(5),e.s_resolution=this.zxi(),e.i_brightness=this.GetTargetConfig(7),e.i_highest_fps=this.GetTargetConfig(11),e.i_shadow_quality=this.GetTargetConfig(54),e.i_niagara_quality=this.GetTargetConfig(55),e.i_fsr=this.GetTargetConfig(87),e.i_image_detail=this.GetTargetConfig(56),e.i_scene_ao=this.GetTargetConfig(58),e.i_volume_Fog=this.GetTargetConfig(63),e.i_volume_light=this.GetTargetConfig(64),e.i_motion_blur=this.GetTargetConfig(65),e.i_anti_aliasing=this.GetTargetConfig(57),e.i_pcv_sync=this.GetTargetConfig(66),e.i_horizontal_view_sensitivity=this.GetTargetConfig(89),e.i_vertical_view_sensitivity=this.GetTargetConfig(90),e.i_aim_horizontal_view_sensitivity=this.GetTargetConfig(91),e.i_aim_vertical_view_sensitivity=this.GetTargetConfig(92),e.f_camera_shake_strength=this.GetTargetConfig(93),e.i_common_spring_arm_length=this.GetTargetConfig(99),e.i_fight_spring_arm_length=this.GetTargetConfig(100),e.i_reset_focus_enable=this.GetTargetConfig(101),e.i_side_step_camera_enable=this.GetTargetConfig(102),e.i_soft_lock_camera_enable=this.GetTargetConfig(103),e.i_joystick_shake_strength=this.GetTargetConfig(104),e.i_joystick_shake_type=this.GetTargetConfig(105),e.f_walk_or_run_rate=this.GetTargetConfig(106),e.i_advice_setting=this.GetTargetConfig(59),e.i_enemy_id=this.GetTargetConfig(133),LogReportController_1.LogReportController.LogReport(e)}static DoSetServerConfigFunction(e){switch(e){case 59:var t=!ModelManager_1.ModelManager.AdviceModel.GetAdviceShowSetting();AdviceController_1.AdviceController.RequestSetAdviceShowState(t);break;case 136:t=!PlatformSdkManagerNew_1.PlatformSdkManagerNew.GetPlatformSdk()?.PlayOnly();ControllerHolder_1.ControllerHolder.KuroSdkController.RequestChangeServerPlayStationPlayOnlyState(t)}}static NoticeChange(e){}static BeforeViewClose(){GameSettingsManager_1.GameSettingsManager.Apply(83)}static MFe(){this.OpenViewFuncMap.set("LogUploadView",this.ewi),this.OpenViewFuncMap.set("CdKeyInputView",this.twi),this.OpenViewFuncMap.set("MobileSwitchInputView",this._Wa)}static IsInputControllerTypeIncludeKey(e,t){switch(e){case 1:return InputSettings_1.InputSettings.IsKeyboardKey(t)||InputSettings_1.InputSettings.IsMouseButton(t);case 2:return InputSettings_1.InputSettings.IsGamepadKey(t);default:return!1}}static StartCheckEditedMenuDataSave(){ModelManager_1.ModelManager.MenuModel.CheckEditedMenuDataSaveTimerId=TimerSystem_1.TimerSystem.Forever(()=>{ModelManager_1.ModelManager.MenuModel.IsEdited&&GameSettingsManager_1.GameSettingsManager.SaveAll()},CHECK_MENUDATA_SAVE_INTERVAL)}static StopCheckEditedMenueDataSave(){var e=ModelManager_1.ModelManager.MenuModel.CheckEditedMenuDataSaveTimerId;void 0!==e&&(TimerSystem_1.TimerSystem.Remove(e),ModelManager_1.ModelManager.MenuModel.CheckEditedMenuDataSaveTimerId=void 0)}static OpenChangeLockView(){var e,t,n,r=InputSettingsManager_1.InputSettingsManager.GetActionBinding(InputMappingsDefine_1.actionMappings.锁定目标);r&&(t=[],r.GetPcKeyNameList(e=[]),r.GetGamepadKeyNameList(t),r=e[0],e=t[0],r={RowSpriteResourceId:"SP_SwitchType1",DescriptionA:"LockEnemyModeText_1",DescriptionParametersA:[`<texture=${t=InputSettings_1.InputSettings.GetKeyIconPath(r)}/>`],DescriptionB:"LockEnemyModeText_3",DescriptionParametersB:[`<texture=${t}/>`]},t={RowSpriteResourceId:"SP_SwitchType2",DescriptionA:"LockEnemyModeText_2",DescriptionParametersA:[`<texture=${t}/>`],DescriptionB:"LockEnemyModeText_4"},n={RowSpriteResourceId:"SP_SwitchType1",DescriptionA:"LockEnemyModeText_1",DescriptionParametersA:[`<texture=${e=InputSettings_1.InputSettings.GetKeyIconPath(e)}/>`],DescriptionB:"LockEnemyModeText_3",DescriptionParametersB:[`<texture=${e}/>`]},e={RowSpriteResourceId:"SP_SwitchType2",DescriptionA:"LockEnemyModeText_2",DescriptionParametersA:[`<texture=${e}/>`],DescriptionB:"LockEnemyModeText_6"},r={GroupName:"LockEnemyModeType_1",DefaultKeyModeRowIndex:GameSettingsManager_1.GameSettingsManager.GetCurrentValue(129),ChangeKeyModeRowList:[r,t]},t={GroupName:"LockEnemyModeType_2",DefaultKeyModeRowIndex:GameSettingsManager_1.GameSettingsManager.GetCurrentValue(134),ChangeKeyModeRowList:[n,e]},n={TitleName:"LockEnemyModeTitle",DefaultGroupIndex:2===ModelManager_1.ModelManager.MenuModel.KeySettingInputControllerType?1:0,ChangeKeyModeGroupList:[r,t],OnConfirmCallback:this.ita},UiManager_1.UiManager.OpenView("ChangeModeTipsView",n))}static Set(e,t){if(!e.CheckPlatform())return!1;if(!e.CheckDeviceHardware())return!1;if(e.CheckIosReviewShield())return!1;let n=t;switch(e.SetType){case 1:n=MathUtils_1.MathUtils.Clamp(n,e.SliderRange[0],e.SliderRange[1]);break;case 2:n=e.OptionsValueList.includes(t)?t:e.OptionsDefault}var r=GameSettingsManager_1.GameSettingsManager.Get(e.FunctionId);return!!r&&(r.Set(n),this.pMa(e,n),!0)}static Apply(e,t){var n;return!!e.CheckPlatform()&&!(!e.CheckDeviceHardware()||e.CheckIosReviewShield()||!(n=GameSettingsManager_1.GameSettingsManager.Get(e.FunctionId))||(n.Apply(t),this.$Na(e),0))}static Save(e){var t;return!!e.CheckPlatform()&&!(!e.CheckDeviceHardware()||e.CheckIosReviewShield()||!(t=GameSettingsManager_1.GameSettingsManager.Get(e.FunctionId))||(t.Save(),this.XNa(e),0))}static $Na(e){var t=GameSettingsManager_1.GameSettingsManager.Get(e.FunctionId);if(t){t=t.GetCurrentValue();if(e.CanAffectedFunction(t)){Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Menu",64,"[ApplyAffectedMenuData]应用此选项时，应用其他设置项",["functionId",e.FunctionId],["value",t],["affectedFunction",e.AffectedFunction]);var n=ModelManager_1.ModelManager.MenuModel;for(const o of e.AffectedFunction.keys()){var r=n.GetMenuDataByFunctionId(o);if(r)for(const i of r)this.Apply(i)}}}}static XNa(e){var t=GameSettingsManager_1.GameSettingsManager.Get(e.FunctionId);if(t){t=t.GetCurrentValue();if(e.CanAffectedFunction(t)){Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Menu",64,"[SaveAffectedMenuData]保存此选项时，保存其他设置项",["functionId",e.FunctionId],["value",t],["affectedFunction",e.AffectedFunction]);var n=ModelManager_1.ModelManager.MenuModel;for(const o of e.AffectedFunction.keys()){var r=n.GetMenuDataByFunctionId(o);if(r)for(const i of r)this.Save(i)}}}}static QNa(e,t){if(this.CanAffectedFunction(e,t)){Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Menu",64,"[SetAffectedMenuData]设置此选项时，影响其他设置项",["functionId",e.FunctionId],["value",t],["affectedFunction",e.AffectedFunction]);var n,r,o=ModelManager_1.ModelManager.MenuModel;for([n,r]of e.AffectedFunction){var i=o.GetMenuDataByFunctionId(n);if(i){for(const a of i)this.Set(a,r);EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.ChangeConfigValue,n,r)}}}}static KNa(e,t){if(this.HasDisableFunction(e)){var n=!this.IsAffectedDisable(e,t),r=(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Menu",64,"[RefreshAffectedMenuDataEnable]设置此选项时，禁用其他设置项",["functionId",e.FunctionId],["value",t],["disableFunction",e.DisableFunction]),ModelManager_1.ModelManager.MenuModel);for(const i of e.DisableFunction){var o=r.GetMenuDataByFunctionId(i);if(o){for(const a of o)a.SetEnable(n);EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnMenuDataEnableChanged,i,n)}}}}static pMa(e,t){e=e.ValueTipsMap.get(t);void 0!==e&&ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByCode(e)}static CanAffectedFunction(e,t){return e.CanAffectedFunction(t)}static IsAffectedDisable(e,t){return e.DisableValueSet.has(t)}static HasDisableFunction(e){return 0<e.DisableFunction.length}static SetApplySave(e,t,n){return!(!this.Set(e,t)||(e.OnSet(t),!this.Apply(e,n))||(e.OnApply(),!this.Save(e))||(e.OnSave(),0))}static OpenImageOverloadConfirmBox(){1===GameSettingsManager_1.GameSettingsManager.GetCurrentValue(145)?this.OpenImageQualityOverloadConfirmBox():this.wKa()}static wKa(){let t=!1;var e=new ConfirmBoxDefine_1.ConfirmBoxDataNew(221);e.HasToggle=!0,e.ToggleText=PreloadConfigStatementPart4_1.configMultiTextLang.GetLocalTextNew("MenuConfig_145_Set_Tips"),e.IsEscViewTriggerCallBack=!1,e.SetToggleFunction(e=>{t=e}),e.FunctionMap.set(2,()=>{t?GameSettingsManager_1.GameSettingsManager.SetApplySave(145,1):GameSettingsManager_1.GameSettingsManager.SetApplySave(145,0)}),ConfirmBoxController_1.ConfirmBoxController.ShowConfirmBoxNew(e)}static OpenImageQualityOverloadConfirmBox(){var e=new ConfirmBoxDefine_1.ConfirmBoxDataNew(215);ConfirmBoxController_1.ConfirmBoxController.ShowConfirmBoxNew(e)}}exports.MenuController=MenuController,(_a=MenuController).lWa=(e,t,n)=>{Log_1.Log.CheckInfo()&&Log_1.Log.Info("MobileInputSwitch",10,"刷新手柄连接状态",["bIsConnected",e],["platformUserId",t],["controllerId",n]),MenuController.RefreshGamepadConnect()},MenuController.JNa=(e,t,n)=>{e=ModelManager_1.ModelManager.MenuModel?.GetMenuDataByFunctionId(e);if(e&&!n)for(const r of e)_a.QNa(r,t),_a.KNa(r,t)},MenuController.OpenViewFuncMap=new Map,MenuController.ewi=()=>{UiManager_1.UiManager.OpenView("LogUploadView",2)},MenuController.twi=()=>{CommonInputViewController_1.CommonInputViewController.OpenCdKeyInputView()},MenuController._Wa=()=>{MobileSwitchInputController_1.MobileSwitchInputController.SwitchToGamepadByMenuSetting()},MenuController.ita=e=>{for(var[t,n]of e)0===t?GameSettingsManager_1.GameSettingsManager.SetApplySave(129,n):1===t&&GameSettingsManager_1.GameSettingsManager.SetApplySave(134,n)};
//# sourceMappingURL=MenuController.js.map