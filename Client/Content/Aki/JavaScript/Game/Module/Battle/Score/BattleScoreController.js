
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BattleScoreController=void 0;const ControllerBase_1=require("../../../../Core/Framework/ControllerBase"),Net_1=require("../../../../Core/Net/Net"),ModelManager_1=require("../../../Manager/ModelManager");class BattleScoreController extends ControllerBase_1.ControllerBase{static OnInit(){return Net_1.Net.Register(28449,this.pIn),Net_1.Net.Register(19959,this.i_l),!0}static OnClear(){return Net_1.Net.UnRegister(28449),Net_1.Net.UnRegister(19959),!0}}(exports.BattleScoreController=BattleScoreController).pIn=e=>{ModelManager_1.ModelManager.BattleScoreModel?.HandleBattleScoreNotify(e)},BattleScoreController.i_l=e=>{ModelManager_1.ModelManager.BattleScoreModel?.HandleBattleScoreEnableNotify(e)};
//# sourceMappingURL=BattleScoreController.js.map