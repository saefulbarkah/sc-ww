
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BattleScoreController=void 0;const ControllerBase_1=require("../../../../Core/Framework/ControllerBase"),Net_1=require("../../../../Core/Net/Net"),ModelManager_1=require("../../../Manager/ModelManager");class BattleScoreController extends ControllerBase_1.ControllerBase{static OnInit(){return Net_1.Net.Register(16586,this.pIn),Net_1.Net.Register(22129,this.ful),!0}static OnClear(){return Net_1.Net.UnRegister(16586),Net_1.Net.UnRegister(22129),!0}}(exports.BattleScoreController=BattleScoreController).pIn=e=>{ModelManager_1.ModelManager.BattleScoreModel?.HandleBattleScoreNotify(e)},BattleScoreController.ful=e=>{ModelManager_1.ModelManager.BattleScoreModel?.HandleBattleScoreEnableNotify(e)};
//# sourceMappingURL=BattleScoreController.js.map