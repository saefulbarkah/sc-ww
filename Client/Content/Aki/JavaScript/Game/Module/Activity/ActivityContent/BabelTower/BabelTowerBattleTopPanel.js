
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BabelTowerBattleTopPanel=void 0;const UE=require("ue"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),ModelManager_1=require("../../../../Manager/ModelManager"),InputDistributeController_1=require("../../../../Ui/InputDistribute/InputDistributeController"),InputMappingsDefine_1=require("../../../../Ui/InputDistribute/InputMappingsDefine"),UiManager_1=require("../../../../Ui/UiManager"),BattleVisibleChildView_1=require("../../../BattleUi/Views/BattleChildView/BattleVisibleChildView");class BabelTowerBattleTopPanel extends BattleVisibleChildView_1.BattleVisibleChildView{constructor(){super(...arguments),this.Hsc=0,this.Ngc=(e,t)=>{0===t&&this.$sc()},this.$sc=()=>{var e=[],t=[],i=ModelManager_1.ModelManager.BabelTowerModel.CurrentChallengeInstData,r=i?.BuffSelection;if(r)for(const a of r){var s={Id:a,IsDeTerm:!1,CanClick:!0,ShowStar:!0};e.push(s)}r=i?.DeTermIdList;if(r)for(const o of r){var n={Id:o,IsDeTerm:!0,CanClick:!0,ShowStar:!0};t.push(n)}i={BuffDataList:e,DeTermDataList:t};UiManager_1.UiManager.OpenView("BabelTowerBuffView",i)},this.Wsc=()=>{var e=ModelManager_1.ModelManager.BabelTowerModel.GetCurStarNum();this.Update(e)}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIButtonComponent],[1,UE.UIText]],this.BtnBindInfo=[[0,this.$sc]]}Initialize(e){super.Initialize(e),this.InitChildType(4),this.SetVisible(1,!1)}Reset(){super.Reset()}LZs(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnBabelActivityInstInfoUpdate,this.Wsc),InputDistributeController_1.InputDistributeController.BindAction(InputMappingsDefine_1.actionMappings.地图,this.Ngc)}DZs(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnBabelActivityInstInfoUpdate,this.Wsc),InputDistributeController_1.InputDistributeController.UnBindAction(InputMappingsDefine_1.actionMappings.地图,this.Ngc)}Update(e){this.Hsc=e,this.Refresh()}Refresh(){this.GetText(1).SetText(this.Hsc.toString())}StartShow(){var e=ModelManager_1.ModelManager.BabelTowerModel.CurrentChallengeInstData?.CurStarNum??0;this.Update(e),this.SetVisible(1,!0)}EndShow(){this.SetVisible(1,!1)}OnShowBattleChildView(){this.LZs()}OnHideBattleChildView(){this.DZs()}}exports.BabelTowerBattleTopPanel=BabelTowerBattleTopPanel;
//# sourceMappingURL=BabelTowerBattleTopPanel.js.map