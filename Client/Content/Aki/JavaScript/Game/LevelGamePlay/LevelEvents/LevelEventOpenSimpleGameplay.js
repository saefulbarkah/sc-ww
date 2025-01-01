
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LevelEventOpenSimpleGameplay=void 0;const Log_1=require("../../../Core/Common/Log"),EntitySystem_1=require("../../../Core/Entity/EntitySystem"),ControllerHolder_1=require("../../Manager/ControllerHolder"),TsInteractionUtils_1=require("../../Module/Interaction/TsInteractionUtils"),SignalDecodeController_1=require("../../Module/SignalDecode/SignalDecodeController"),UiManager_1=require("../../Ui/UiManager"),BigStuffedDollController_1=require("../BigStuffedDoll/BigStuffedDollController"),CipherController_1=require("../Cipher/CipherController"),LevelGeneralBase_1=require("../LevelGeneralBase"),LevelGeneralNetworks_1=require("../LevelGeneralNetworks"),SignalDeviceController_1=require("../SignalDeviceControl/SignalDeviceController");class LevelEventOpenSimpleGameplay extends LevelGeneralBase_1.LevelEventBase{constructor(){super(...arguments),this.VDe=void 0,this.E0=-1,this.HDe=()=>{this.VDe&&LevelGeneralNetworks_1.LevelGeneralNetworks.RequestEntitySendEvent(this.E0,this.VDe)}}ExecuteNew(e,i){var r=e;if(r){var t=i;if(t)switch(r.GameplayConfig.Type){case"Cipher":TsInteractionUtils_1.TsInteractionUtils.RegisterOpenViewName("CipherView"),this.jDe(r.GameplayConfig.CipherId);break;case"SignalBreak":TsInteractionUtils_1.TsInteractionUtils.RegisterOpenViewName("SignalDecodeView"),UiManager_1.UiManager.OpenView("SignalDecodeView",r.GameplayConfig.SignalBreakId);break;case"SundialPuzzle":TsInteractionUtils_1.TsInteractionUtils.RegisterOpenViewName("SundialControlView"),UiManager_1.UiManager.OpenView("SundialControlView");break;case"SignalDevice":this.VDe=r.FinishSendSelfEvent;var l=EntitySystem_1.EntitySystem.Get(t.EntityId);this.E0=l.GetComponent(0).GetCreatureDataId(),TsInteractionUtils_1.TsInteractionUtils.RegisterOpenViewName("SignalDeviceView"),SignalDeviceController_1.SignalDeviceController.OpenGameplay(r.GameplayConfig.Config,this.HDe);break;case"SignalDevice2":this.VDe=r.FinishSendSelfEvent;l=EntitySystem_1.EntitySystem.Get(t.EntityId);this.E0=l.GetComponent(0).GetCreatureDataId(),TsInteractionUtils_1.TsInteractionUtils.RegisterOpenViewName("SignalDeviceChasingMoonView"),SignalDeviceController_1.SignalDeviceController.OpenGameplayChasingMoon(r.GameplayConfig.Config,this.HDe);break;case"MorseCode":TsInteractionUtils_1.TsInteractionUtils.RegisterOpenViewName("SignalDecodeView"),SignalDecodeController_1.SignalDecodeController.Open(r.GameplayConfig.MorseCodeId);break;case"RenjuChess":ControllerHolder_1.ControllerHolder.LevelPickInteractController.EnterPickInteractModel(r.GameplayConfig);break;case"LifePoint":var l={Config:r.GameplayConfig,EntityId:t.EntityId,Callback:this.HDe},n=(this.VDe=r.FinishSendSelfEvent,EntitySystem_1.EntitySystem.Get(t.EntityId));this.E0=n.GetComponent(0).GetCreatureDataId(),TsInteractionUtils_1.TsInteractionUtils.RegisterOpenViewName("LifePointView"),UiManager_1.UiManager.OpenView("LifePointView",l);break;case"BrokenRock":6!==i.Type?Log_1.Log.CheckError()&&Log_1.Log.Error("Event",29,"大个布偶坚固岩石玩法开启失败：只能由行为中打开"):(this.VDe=r.FinishSendSelfEvent,TsInteractionUtils_1.TsInteractionUtils.RegisterOpenViewName("BigStuffedDollView"),BigStuffedDollController_1.BigStuffedDollController.Open(r.GameplayConfig.Id,i.TreeConfigId,this.HDe))}else Log_1.Log.CheckError()&&Log_1.Log.Error("Event",29,"上下文不合法")}else Log_1.Log.CheckError()&&Log_1.Log.Error("Event",29,"参数不合法")}jDe(e){CipherController_1.CipherController.OpenCipherView(e)}}exports.LevelEventOpenSimpleGameplay=LevelEventOpenSimpleGameplay;
//# sourceMappingURL=LevelEventOpenSimpleGameplay.js.map