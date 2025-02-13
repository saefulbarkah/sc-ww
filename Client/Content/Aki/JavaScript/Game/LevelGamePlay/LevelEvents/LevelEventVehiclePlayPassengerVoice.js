
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LevelEventVehiclePlayPassengerVoice=void 0;const Log_1=require("../../../Core/Common/Log"),ModelManager_1=require("../../Manager/ModelManager"),LevelGeneralBase_1=require("../LevelGeneralBase");class LevelEventVehiclePlayPassengerVoice extends LevelGeneralBase_1.LevelEventBase{ExecuteNew(e,l){e?(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Vehicle",42,"[LevelEventVehiclePlayPassengerVoice] 进入触发器"),ModelManager_1.ModelManager.GameAudioModel?.CheckRideSharingState()?(ModelManager_1.ModelManager.GameAudioModel.PlayRideSharingPlotAudio(e.TriggerType),this.FinishExecute(!0)):ModelManager_1.ModelManager.FishingModel?.GetShipData().IsShipDriving()?(ModelManager_1.ModelManager.GameAudioModel?.PlayFishingAudio(e.TriggerType),this.FinishExecute(!0)):(this.FinishExecute(!1),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Vehicle",42,"[LevelEventVehiclePlayPassengerVoice] 不在共乘状态，执行播放共乘语音失败"))):(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Vehicle",42,"[LevelEventVehiclePlayPassengerVoice] 参数异常，执行播放共乘语音失败"),this.FinishExecute(!1))}}exports.LevelEventVehiclePlayPassengerVoice=LevelEventVehiclePlayPassengerVoice;
//# sourceMappingURL=LevelEventVehiclePlayPassengerVoice.js.map