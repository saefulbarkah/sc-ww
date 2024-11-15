
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MowingRiskModel=void 0;const MultiTextLang_1=require("../../../../../../Core/Define/ConfigQuery/MultiTextLang"),ModelBase_1=require("../../../../../../Core/Framework/ModelBase"),EventDefine_1=require("../../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../../Common/Event/EventSystem"),ConfigManager_1=require("../../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../../Manager/ModelManager"),ActivityMowingRiskController_1=require("../Controller/ActivityMowingRiskController"),MowingRiskDefine_1=require("../MowingRiskDefine"),MowingRiskConfigContext_1=require("./MowingRiskConfigContext"),MowingRiskProtocolContext_1=require("./MowingRiskProtocolContext"),MowingRiskUiContext_1=require("./MowingRiskUiContext"),RiskHarvestInstById_1=require("../../../../../../Core/Define/ConfigQuery/RiskHarvestInstById"),StringUtils_1=require("../../../../../../Core/Utils/StringUtils"),TimeUtil_1=require("../../../../../Common/TimeUtil");class MowingRiskModel extends ModelBase_1.ModelBase{constructor(){super(...arguments),this.UVa=void 0,this.xVa=void 0,this.PVa=void 0,this.wVa=()=>{EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.RefreshCommonActivityRewardPopUpView,this.BuildActivityRewardViewData())},this.InstanceSubViewResourceId="UiItem_CheckpointsMowing"}OnInit(){return this.UVa=new MowingRiskConfigContext_1.MowingRiskConfigContext,this.UVa.Init(),this.xVa=new MowingRiskProtocolContext_1.MowingRiskProtocolContext,this.PVa=new MowingRiskUiContext_1.MowingRiskUiContext(this),!0}OnClear(){return this.UVa.Dispose(),this.xVa.Dispose(),this.PVa.Dispose(),!0}SyncProtocolRiskHarvestEndNotify(t){this.xVa?.ParseRiskHarvestEndNotify(t)}SyncProtocolRiskHarvestInstUpdateNotify(t){this.xVa?.ParseRiskHarvestInstUpdateNotify(t)}SyncProtocolRiskHarvestArtifactNotify(t){this.xVa?.ParseRiskHarvestArtifactNotify(t)}SyncProtocolRiskHarvestBuffUpdateNotify(t){this.xVa?.ParseRiskHarvestBuffUpdateNotify(t),this.PVa?.SyncNewBuff(t.Qyl)}SyncProtocolRiskHarvestBuffUnlockNotify(t){this.xVa?.ParseRiskHarvestBuffUnlockNotify(t)}SyncProtocolRiskHarvestActivityUpdateNotify(t){this.xVa?.ParseRiskHarvestActivityUpdateNotify(t)}ResetBuffViewCache(){this.CurrentBuffViewType=0,this.CurrentChosenOverviewBuffId=void 0,this.CurrentChosenProgressIndex=void 0,this.PVa.CurrentBasicBuffConfigs.length=0,this.PVa.CurrentSuperBuffConfigs.length=0}ResetCacheInBattle(){this.xVa.ResetCacheInBattle(),this.PVa.ResetCacheInBattle()}GetBuffGroupNameTextIdByBuffType(t){switch(t){case 1:case 2:return"riskharvest_normalbuff";case 3:return"riskharvest_superbuff";default:return""}}GetRecordScoreById(t){return this.xVa.GetScoreById(t)}GetMaxScoreById(t){t=RiskHarvestInstById_1.configRiskHarvestInstById.GetConfig(t);return t?t.MaxScore:0}BuildBuffIntroduceDataInOverviewById(t){var e=this.UVa,i=this.xVa.IsBuffUnlocked(t),r=this.xVa.GetBuffCountInBattleById(t);return{BackgroundPath:e.GetBuffIntroduceBackgroundPath(t),LevelTextId:i&&void 0!==r?"RiskHarvest_LV":void 0,LevelTextArgs:i&&void 0!==r?[r.toString()]:void 0,NameTextId:i?e.GetBuffNameTextIdById(t):"RiskHarvest_TitleUnlock",TipsTextId:i?e.GetBuffDescriptionTextIdById(t):"riskharvest_BuffunlockDesc",TipsArgs:i?e.GetBuffDescriptionArgsById(t):[],IconPath:i?e.GetBuffIconPathById(t):void 0,HexColor:e.GetBuffHexColorById(t),IsUnlock:i}}BuildBuffIntroduceDataInProgressById(t){var e=this.UVa;return{BackgroundPath:e.GetBuffIntroduceBackgroundPath(t),LevelTextId:void 0,LevelTextArgs:void 0,NameTextId:e.GetBuffNameTextIdById(t),TipsTextId:e.GetBuffDescriptionTextIdById(t),TipsArgs:e.GetBuffDescriptionArgsById(t),IconPath:e.GetBuffIconPathById(t),HexColor:e.GetBuffHexColorById(t),IsUnlock:this.xVa.IsBuffUnlocked(t)}}BuildBuffItemDataById(t){var e=this.UVa,i=this.xVa.IsBuffUnlocked(t);return{BuffId:t,QualityPath:e.GetBuffQualityPathById(t),IconPath:i?e.GetBuffIconPathById(t):void 0,NameTextId:i?e.GetBuffNameTextIdById(t):"RiskHarvest_TitleUnlock",IsShowBackground:!0,IsChosen:t===this.CurrentChosenOverviewBuffId,IsUnlock:i,LevelContent:this.sZa(t)}}BuildSuperBuffUnitDataListById(t){var e=this.xVa.ArtifactBasicBuffTotalCount,i=this.UVa,r=i.GetThresholdDataByArtifactId(t),s=[];if(void 0!==r)for(var[n,a]of r.entries()){var o=i.GetBuffThresholdByArtifactIdAndIndex(t,n),n={Index:a.Index,BuffId:a.BuffId,IsChosen:n===this.CurrentChosenProgressIndex,IsActive:o<=e,IconPath:i.GetBuffIconPathById(a.BuffId),NameTextId:i.GetBuffNameTextIdById(a.BuffId),ThresholdCountContent:o.toString()};s.push(n)}return s}BVa(t){var e=[];for(const i of t)e.push(this.BuildBuffItemDataById(i.Id));return{GroupNameTextId:this.GetBuffGroupNameTextIdByBuffType(t[0].BuffType),BuffItemList:e}}BuildOverviewViewData(){var t,e,i;if(void 0!==this.CurrentChosenOverviewBuffId)return t=[],e=(i=this.PVa).CurrentBasicBuffConfigs,0<(i=i.CurrentSuperBuffConfigs).length&&t.push(this.BVa(i)),0<e.length&&t.push(this.BVa(e)),{IntroduceData:this.BuildBuffIntroduceDataInOverviewById(this.CurrentChosenOverviewBuffId),BuffGroupData:t}}BuildProgressViewData(){var t=this.xVa,e=this.UVa,i=t.ArtifactId,t=t.ArtifactBasicBuffTotalCount,r=e.GetBuffMaxCountByArtifactId(i),s=e.GetBuffIdByArtifactIdAndIndex(i,this.CurrentChosenProgressIndex);return{CountTextId:"PrefabTextItem_1333511122_Text",CountTextArgs:[t.toString(),r.toString()],ProgressPercentage:e.GetProgressOverallPercentage(i,t),SuperBuffList:this.BuildSuperBuffUnitDataListById(i),IntroduceData:this.BuildBuffIntroduceDataInProgressById(s)}}BuildCaptionViewData(){var t=ConfigManager_1.ConfigManager.InstanceDungeonEntranceConfig.GetConfig(MowingRiskDefine_1.MOWING_RISK_ENTRANCE_ID);return{TitleTextId:t?.Name??"",IconPath:t?.TitleSprite??""}}BuildInstanceDetailDataByInstanceId(t){var e=ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetConfig(t),i=this.UVa.GetIdByInstanceId(t);return{TitleTextId:e?.MapName??"",ContentTextId:e?.DungeonDesc??"",AttributeList:[{AttributeTextId:e?.MonsterTips}],LockData:void 0!==i&&this.xVa.IsInstanceUnlockedById(i)?void 0:this.BuildInstanceLockDataByInstanceId(t)}}BuildInstanceDetailLockDataByInstanceId(t){var e=this.UVa.GetIdByInstanceId(t);return void 0!==e&&this.xVa.IsInstanceUnlockedById(e)?void 0:this.BuildInstanceLockDataByInstanceId(t)}BuildInstanceLockDataByInstanceId(t){var t=this.UVa.GetIdByInstanceId(t),e={IsUnlock:!1};return void 0!==t&&(e.LockDescriptionTextId=this.Pah(t),e.LockDescriptionTextArgs=this.wah(t)),e}BuildInstanceRecommendDataByInstanceId(t){return{TextId:"RecommendLevel",TextArgs:[ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetRecommendLevel(t,ModelManager_1.ModelManager.WorldLevelModel.CurWorldLevel).toString()]}}BuildInstanceTotalScore(){return""+this.xVa.TotalScore}BuildInBattleBuffDataById(t){var e=this.UVa;return{IconPath:e.GetBuffIconPathById(t),TitleTextId:e.GetBuffNameTextIdById(t)}}BuildInBattleRootData(){var t=this.xVa,e=this.UVa,i=t.ArtifactId,t=t.ArtifactBasicBuffTotalCount;return{LevelText:e.GetProgressLevel(i,t).toString(),ProgressPercentage:e.GetProgressPartialPercentage(i,t)}}BuildActivityRewardViewData(){return{DataPageList:[this.bVa(0),this.bVa(1)],Source:"MowingRisk"}}BuildNewBuffTipsDataById(t){var e=this.UVa;return{IsGolden:e.IsNewBuffGoldenById(t),NameTextId:e.GetBuffNameTextIdById(t),NameHexColor:e.GetNewBuffNameHexColorById(t),IconPath:e.GetBuffIconPathById(t),DescriptionTextId:e.GetBuffDescriptionTextIdById(t),DescriptionArgs:e.GetBuffDescriptionArgsById(t),QualityTexPath:e.GetNewBuffQualityTexPathById(t)}}BuildInstanceSubtitleTextIdByInstanceId(t){t=this.UVa.GetIdByInstanceId(t);if(void 0!==t)return this.Pah(t)}BuildInstanceSubtitleTextArgsByInstanceId(t){t=this.UVa.GetIdByInstanceId(t);if(void 0!==t)return this.wah(t)}IsSuperBuffById(t){return this.UVa.IsSuperBuffByBuffId(t)}IsBuffGottenInBattleById(t){var e=this.xVa;return this.UVa.IsSuperBuffByBuffId(t)?this.UVa.IsSuperBuffAvailable(e.ArtifactId,t,e.ArtifactBasicBuffTotalCount):e.BasicBuffInfoInBattle.has(t)}IsBuffAvailableInActivity(t){return this.xVa.Id===t.ActivityId}IsInstanceUnlockedByInstanceId(t){t=this.UVa.GetIdByInstanceId(t);return void 0!==t&&this.xVa.IsInstanceUnlockedById(t)}IsInstanceNewById(t){return this.UVa.IsInstanceNewCache.get(t)??!1}SetInstanceOldById(t){var e=this.UVa.IsInstanceNewCache;e.set(t,!1),this.UVa.IsInstanceNewCache=e}SetCurrentInstancesOld(){var t,e=this.xVa.InstanceInfo,i=this.UVa.IsInstanceNewCache;for([t]of e)this.xVa.IsInstancePassUnlockTimeById(t)&&i.set(t,!1);this.UVa.IsInstanceNewCache=i}bVa(t){return{TabName:this.qVa(t),TabTips:this.OVa(),DataList:this.GVa(t)}}GVa(t){switch(t){case 0:return this.kVa();case 1:return this.NVa();default:return[]}}kVa(){var t=[];for(const i of this.UVa.RiskHarvestInstAll){var e=this.VVa(i),e={NameText:"",NameTextId:i.Desc,RewardList:ConfigManager_1.ConfigManager.RewardConfig?.GetDropPackagePreviewItemList(i.Reward),RewardState:e,RewardButtonText:this.Vea(e),RewardButtonRedDot:1===e,ClickFunction:()=>{ActivityMowingRiskController_1.ActivityMowingRiskController.Instance.RequestRiskHarvestInstRewardRequest(i.Id).then(this.wVa)}};t.push(e)}return t}NVa(){var t=[];for(const i of this.UVa.RiskHarvestScoreRewardAll){var e=this.HVa(i),e={NameText:"",NameTextId:i.Desc,RewardList:ConfigManager_1.ConfigManager.RewardConfig?.GetDropPackagePreviewItemList(i.Reward),RewardState:e,RewardButtonText:this.Vea(e),RewardButtonRedDot:1===e,ClickFunction:()=>{ActivityMowingRiskController_1.ActivityMowingRiskController.Instance.RequestRiskHarvestScoreRewardRequest(i.Id).then(this.wVa)}};t.push(e)}return t}VVa(t){var e=this.xVa.InstanceInfo.get(t.Id);return void 0===e||!e.K6n||e.SMs<t.RewardScore?0:e.mLs?2:1}HVa(t){var e=this.xVa;return e.TotalScore<t.Score?0:e.HasScoreRewarded(t.Id)?2:1}Vea(t){switch(t){case 2:case 1:return MultiTextLang_1.configMultiTextLang.GetLocalTextNew("TowerDefence_Getbt1")??"";case 0:return MultiTextLang_1.configMultiTextLang.GetLocalTextNew("TowerDefence_Getbt3")??"";default:return""}}qVa(t){switch(t){case 0:return ConfigManager_1.ConfigManager.TextConfig?.GetTextById("BossRushLevelRewardText")??"";case 1:return ConfigManager_1.ConfigManager.TextConfig?.GetTextById("RiskHarvest_PointTap")??"";default:return""}}OVa(){return StringUtils_1.StringUtils.Format(MultiTextLang_1.configMultiTextLang.GetLocalTextNew("RiskHarvest_InstanceToppoint"),this.xVa.TotalScore.toString())}sZa(t){t=this.xVa.GetBuffCountInBattleById(t);if(void 0!==t)return StringUtils_1.StringUtils.Format(ConfigManager_1.ConfigManager.TextConfig.GetTextById("OverSeaServerLv"),t.toString())}Pah(t){return this.xVa.IsInstanceUnlockedById(t)?"RiskHarvest_InstanceToppoint":this.xVa.IsInstancePassUnlockTimeById(t)?"RiskHarvest_Unlock":"Text_ActiveToOpenTime_Text"}wah(t){var e,i,r=[];return this.xVa.IsInstanceUnlockedById(t)?(i=this.xVa.GetScoreById(t),r.push(i.toString())):(i=this.xVa.GetInstanceUnlockTimestampById(t),(e=TimeUtil_1.TimeUtil.GetServerTimeStamp())<i?(i=i-e,e=TimeUtil_1.TimeUtil.GetRemainTimeDataFormat(i*TimeUtil_1.TimeUtil.Millisecond),r.push(e.CountDownText)):(i=this.UVa.GetScoreToUnlockById(t),r.push(i.toString()))),r}get ActivityData(){return this.xVa}get CurrentBuffViewUsage(){return this.PVa.CurrentBuffViewUsage}set CurrentBuffViewUsage(t){this.PVa.CurrentBuffViewUsage=t,this.PVa.SyncCurrentShowingBuffConfigs()}get CurrentBuffViewType(){return this.PVa.CurrentBuffViewType}set CurrentBuffViewType(t){this.PVa.CurrentBuffViewType=t}get EntireBasicBuffConfig(){return this.UVa.BasicBuffConfigs}get EntireSuperBuffConfig(){return this.UVa.SuperBuffConfigs}get CurrentChosenOverviewBuffId(){let t=this.PVa.CurrentChosenOverviewBuffId;var e;return void 0===t&&(e=this.PVa.CurrentBasicBuffConfigs,t=0<e.length?e[0].Id:void 0,this.PVa.CurrentChosenOverviewBuffId=t),t}set CurrentChosenOverviewBuffId(t){this.PVa.CurrentChosenOverviewBuffId=t}get CurrentChosenProgressIndex(){let t=this.PVa.CurrentChosenProgressIndex;return void 0===t&&(t=0,this.PVa.CurrentChosenProgressIndex=t),t}set CurrentChosenProgressIndex(t){this.PVa.CurrentChosenProgressIndex=t}get CurrentHelpButtonId(){return this.xVa.GetHelpId()}get CurrentInstanceId(){return ModelManager_1.ModelManager.InstanceDungeonEntranceModel.SelectInstanceId}get IsNewInstanceOpen(){var t,e,i,r=this.UVa.IsInstanceNewCache,s=new Map;for([t,e]of r){var n=this.xVa.GetInstanceUnlockTimestampById(t),a=s.get(n)??!0,o=this.xVa.IsInstancePassUnlockTimeById(t);s.set(n,a&&!this.xVa.IsInstancePlayedById(t)&&e&&o)}for([,i]of s)if(i)return!0;return!1}get IsPreQuestFinished(){return this.xVa.GetPreGuideQuestFinishState()}get UnFinishPreGuideQuestId(){return this.xVa.GetUnFinishPreGuideQuestId()}get ActivityTitleTextId(){return this.xVa.LocalConfig?.Title??""}get ActivityDescriptionTextId(){return this.xVa.LocalConfig?.Desc??""}get HasAnyReward(){return this.HasAnyInstanceReward||this.HasAnyScoreReward}get HasAnyInstanceReward(){for(const t of this.UVa.RiskHarvestInstAll)if(1===this.VVa(t))return!0;return!1}get HasAnyScoreReward(){for(const t of this.UVa.RiskHarvestScoreRewardAll)if(1===this.HVa(t))return!0;return!1}get MapMarkId(){return MowingRiskDefine_1.MOWING_RISK_MAP_MARK_ID}get MapMarkType(){return 6}get NextNewBuffId(){return this.PVa.NewBuffToShowCache.shift()}}exports.MowingRiskModel=MowingRiskModel;
//# sourceMappingURL=MowingRiskModel.js.map