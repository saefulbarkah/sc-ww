
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.InstanceDungeonInfoItem=void 0;const ue_1=require("ue"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),ConfigManager_1=require("../../../Manager/ConfigManager"),ModelManager_1=require("../../../Manager/ModelManager"),UiPanelBase_1=require("../../../Ui/Base/UiPanelBase"),ActivityMowingController_1=require("../../Activity/ActivityContent/Mowing/ActivityMowingController"),RoguelikeBlackFlowerItem_1=require("../../Roguelike/View/RoguelikeBlackFlowerItem"),TowerDefenceController_1=require("../../TowerDefence/TowerDefenceController"),InstanceDungeonEntranceRewardItem_1=require("../InstanceDungeonEntranceRewardItem"),InstanceDungeonEntranceTowerDefenceItem_1=require("../InstanceDungeonEntranceTowerDefenceItem"),InstanceDungeonBuffItem_1=require("./InstanceDungeonBuffItem"),InstanceDungeonCostItem_1=require("./InstanceDungeonCostItem"),InstanceDungeonLockItem_1=require("./InstanceDungeonLockItem"),InstanceDungeonMatchingItem_1=require("./InstanceDungeonMatchingItem"),InstanceDungeonMowingDropDownItem_1=require("./InstanceDungeonMowingDropDownItem"),InstanceDungeonRecommendLevelItem_1=require("./InstanceDungeonRecommendLevelItem"),InstanceDungeonRightTitleItem_1=require("./InstanceDungeonRightTitleItem"),InstanceDungeonStartButtonItem_1=require("./InstanceDungeonStartButtonItem");class InstanceDungeonInfoItem extends UiPanelBase_1.UiPanelBase{constructor(){super(...arguments),this.NUe=0,this.fth=void 0,this.pth=void 0,this.jzs=void 0,this.vth=void 0,this.Mth=void 0,this.gli=void 0,this.Sth=void 0,this.yth=void 0,this.Eth=void 0,this.Ith=void 0,this.odl=void 0,this.QCl=()=>{var e=ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetConfig(this.NUe);e&&this.Ath(e.InstSubType)}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,ue_1.UIItem],[1,ue_1.UIItem],[2,ue_1.UIItem],[3,ue_1.UIItem]]}async OnBeforeStartAsync(){var e=[];this.fth=new InstanceDungeonRightTitleItem_1.InstanceDungeonRightTitleItem,e.push(this.fth.CreateByResourceIdAsync("UiItem_InstanceDungeon_RightTitle",this.GetItem(0))),this.yth=new InstanceDungeonStartButtonItem_1.InstanceDungeonStartButtonItem,e.push(this.yth.CreateByResourceIdAsync("UiItem_InstanceDungeon_StartButton",this.GetItem(2))),this.Eth=new InstanceDungeonMatchingItem_1.InstanceDungeonMatchingItem,e.push(this.Eth.CreateByResourceIdAsync("UiItem_InstanceDungeon_MatchingItem",this.GetItem(2))),this.Ith=new InstanceDungeonLockItem_1.InstanceDungeonLockItem,e.push(this.Ith.CreateByResourceIdAsync("UiItem_InstanceDungeon_Lock",this.GetItem(2))),await Promise.all(e)}OnStart(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnRefreshInstancedRecommendLevel,this.QCl)}OnBeforeDestroy(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnRefreshInstancedRecommendLevel,this.QCl)}InitButton(e,t,n){this.yth.OnClickBtnSoloCallBack=e,this.yth.OnClickBtnMultipleCallBack=t,this.yth.OnClickBtnTeamCallBack=n}RefreshItem(e){this.NUe=e;e=ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetConfig(e);e&&(this.fth.RefreshItem(e.MapName,e.DungeonDesc,e.RecommendElement),this.yth.RefreshItem(e.OnlineType),this.ndl(e),this.Tth(e.MonsterTips,0<e.MonsterPreview.length),this.Lth(e.InstSubType),this.Ath(e.InstSubType),this.Dth(),this.UpdateInstanceDungeonLockItemAndCostItem(),this.Rth(e.InstSubType))}Tth(e,t){""!==e||t?this.pth?(this.pth?.SetActive(!0),this.pth?.RefreshItem(e,t)):(this.pth=new InstanceDungeonBuffItem_1.InstanceDungeonBuffItem,this.pth.CreateThenShowByResourceIdAsync("UiItem_InstanceDungeon_Buff",this.GetItem(0)).then(()=>{this.pth?.RefreshItem(e,t)}).catch(()=>{})):this.pth?.SetActive(!1)}Lth(e){if(21===e){const t=TowerDefenceController_1.TowerDefenseController.BuildPhantomForInstanceDungeonEntranceData(this.NUe);this.jzs?(this.jzs.SetActive(!0),this.jzs.RefreshItem(t)):(this.jzs=new InstanceDungeonEntranceTowerDefenceItem_1.InstanceDungeonEntranceTowerDefenceItem,this.jzs.CreateThenShowByResourceIdAsync("UiItem_InstanceDungeon_Reward",this.GetItem(0)).then(()=>{this.jzs.RefreshItem(t)}).catch(()=>{}))}else this.jzs?.SetActive(!1)}Ath(t){if(21===t||19===t||22===t){let e={TextId:"RecommendLevel",Level:0};21===t?e=TowerDefenceController_1.TowerDefenseController.BuildRecommendLevelForInstanceDungeonEntranceData(this.NUe):(t=ActivityMowingController_1.ActivityMowingController.GetMowingActivityData()?.GetLevelDiffRecommendLevel(this.NUe),e.Level=t??0),this.vth?(this.vth.SetActive(!0),this.vth.RefreshItem(e)):(this.vth=new InstanceDungeonRecommendLevelItem_1.InstanceDungeonRecommendLevelItem,this.vth.CreateThenShowByResourceIdAsync("UiItem_InstanceDungeon_RecommenLevel",this.GetItem(1)).then(()=>{this.vth.RefreshItem(e)}).catch(()=>{}))}else this.vth?.SetActive(!1)}Uth(){var e=ModelManager_1.ModelManager.InstanceDungeonEntranceModel.GetInstancePowerCost(this.NUe);if(!e||e<=0)this.Mth?.SetUiActive(!1);else{const t=ModelManager_1.ModelManager.ExchangeRewardModel.GetExchangeNormalConsume(this.NUe);this.Mth?(this.Mth.SetActive(!0),this.Mth.RefreshItem(t[0])):(this.Mth=new InstanceDungeonCostItem_1.InstanceDungeonCostItem,this.Mth.CreateThenShowByResourceIdAsync("UiItem_InstanceDungeon_Cost",this.GetItem(1)).then(()=>{this.Mth.RefreshItem(t[0])}).catch(()=>{}))}}Dth(){ModelManager_1.ModelManager.InstanceDungeonEntranceModel.GetInstanceDungeonReward(this.NUe)[0].length<=0?this.gli?.SetActive(!1):this.gli?(this.gli.SetActive(!0),this.gli.RefreshItem(this.NUe)):(this.gli=new InstanceDungeonEntranceRewardItem_1.InstanceDungeonEntranceRewardItem,this.gli.CreateThenShowByResourceIdAsync("UiItem_InstanceDungeon_Reward",this.GetItem(1)).then(()=>{this.gli.RefreshItem(this.NUe)}).catch(()=>{}))}Rth(e){var e=19===e,t=ModelManager_1.ModelManager.InstanceDungeonEntranceModel.CheckInstanceUnlock(this.NUe);e&&t?this.Sth?(this.Sth.SetActive(!0),this.Sth.RefreshItem(this.NUe)):(this.Sth=new InstanceDungeonMowingDropDownItem_1.InstanceDungeonMowingDropDownItem,this.Sth.SkipDestroyActor=!0,this.Sth.CreateThenShowByResourceIdAsync("UiItem_InstanceDungeon_DropItem",this.GetItem(1)).then(()=>{this.Sth.RefreshItem(this.NUe),this.AddChild(this.Sth)}).catch(()=>{})):this.Sth?.SetActive(!1)}SetMatchingItemActive(e){var t=ModelManager_1.ModelManager.InstanceDungeonEntranceModel.CheckInstanceUnlock(this.NUe);this.yth?.SetActive(!e&&t),this.Eth?.SetActive(e)}UpdateInstanceDungeonLockItemAndCostItem(){var e=1===ModelManager_1.ModelManager.InstanceDungeonEntranceModel.GetMatchingState(),t=(this.Mth?.SetActive(!1),ModelManager_1.ModelManager.InstanceDungeonEntranceModel.CheckInstanceUnlock(this.NUe));t?(this.Uth(),this.yth.SetActive(!e),this.Ith.SetActive(!1),this.Eth?.SetActive(e)):((t=ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetUnlockConditionGroupHintText(this.NUe))&&this.Ith.RefreshItem(t),this.yth.SetActive(!1),this.Ith.SetActive(!0),this.Eth?.SetActive(!1))}ndl(e){var e=15===e.InstSubType,t=ModelManager_1.ModelManager.RoguelikeModel.HasBlackFlowerExchanged(this.NUe);e&&t?this.odl?this.odl.SetActive(!0):(this.odl=new RoguelikeBlackFlowerItem_1.RoguelikeBlackFlowerInstanceItem,this.odl.CreateThenShowByResourceIdAsync("UiItem_CheckpointsRReward",this.GetItem(3)).then(()=>{this.odl?.GetRootItem().SetHierarchyIndex(0)}).catch(()=>{})):this.odl?.SetActive(!1)}SetLockText(e){this.Ith.SetActive(!0),this.Ith.SetLockText(e)}}exports.InstanceDungeonInfoItem=InstanceDungeonInfoItem;
//# sourceMappingURL=InstanceDungeonInfoItem.js.map