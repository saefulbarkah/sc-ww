
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TowerDefenseModel=void 0;const Log_1=require("../../../Core/Common/Log"),DropPackageById_1=require("../../../Core/Define/ConfigQuery/DropPackageById"),MultiTextLang_1=require("../../../Core/Define/ConfigQuery/MultiTextLang"),TowerDefenceInstanceById_1=require("../../../Core/Define/ConfigQuery/TowerDefenceInstanceById"),TowerDefencePhantomAll_1=require("../../../Core/Define/ConfigQuery/TowerDefencePhantomAll"),TowerDefenceRewardAll_1=require("../../../Core/Define/ConfigQuery/TowerDefenceRewardAll"),TowerDefenceRewardById_1=require("../../../Core/Define/ConfigQuery/TowerDefenceRewardById"),ModelBase_1=require("../../../Core/Framework/ModelBase"),MathUtils_1=require("../../../Core/Utils/MathUtils"),StringUtils_1=require("../../../Core/Utils/StringUtils"),TimeUtil_1=require("../../Common/TimeUtil"),ActivityData_1=require("../Activity/ActivityData"),TowerDefenceController_1=require("./TowerDefenceController"),TowerDefenceDefine_1=require("./TowerDefenceDefine"),TowerDefenceInstanceByInstanceId_1=require("../../../Core/Define/ConfigQuery/TowerDefenceInstanceByInstanceId"),TowerDefencePhantomLevelByGroupId_1=require("../../../Core/Define/ConfigQuery/TowerDefencePhantomLevelByGroupId"),UiResourceById_1=require("../../../Core/Define/ConfigQuery/UiResourceById"),LocalStorage_1=require("../../Common/LocalStorage"),LocalStorageDefine_1=require("../../Common/LocalStorageDefine"),ConfigManager_1=require("../../Manager/ConfigManager"),ModelManager_1=require("../../Manager/ModelManager"),EditFormationDefine_1=require("../EditFormation/EditFormationDefine");class TowerDefenseModel extends ModelBase_1.ModelBase{constructor(){super(...arguments),this.SJs=new Map,this.IsUiFlowOpen=!1,this.IsPhantomViewOpened=!1,this.vDa=void 0,this.EJs=[],this.PhantomMessageCache=new ParsedTowerDefenseMsg,this.CurrentSelfPhantomIdInUiTemp=TowerDefenceDefine_1.DEFAULT_ID,this.PhantomOwnerDataList=[],this.RoleCfgId2PhantomIdMapCache=new Map,this.DelayedEndNotify=void 0,this.yJs=(e,t)=>e.Id-t.Id}get IsEnterInActivityClicked(){if(void 0===this.vDa){let e=LocalStorage_1.LocalStorage.GetPlayer(LocalStorageDefine_1.ELocalStoragePlayerKey.TowerDefenseEntered);void 0===e&&(LocalStorage_1.LocalStorage.SetPlayer(LocalStorageDefine_1.ELocalStoragePlayerKey.TowerDefenseEntered,!1),e=!1),this.vDa=e}return this.vDa}set IsEnterInActivityClicked(e){this.vDa!==e&&(this.vDa=e,LocalStorage_1.LocalStorage.SetPlayer(LocalStorageDefine_1.ELocalStoragePlayerKey.TowerDefenseEntered,e))}get PhantomConfigCache(){return this.SJs}get SortedPhantomConfigCache(){return this.EJs}OnInit(){return this.Eca(),this.ResetCurrentPhantomIdInUiTempToFirstAvailable(),this.ResetPhantomOwnerDataList(),!0}OnLeaveLevel(){return Log_1.Log.CheckDebug()&&Log_1.Log.Debug("TowerDefense",65,"标记真正的离开场景时机，用于还原数据"),this.PhantomMessageCache.OwnPhantomInBattleDataCache.clear(),!0}Eca(){for(const o of TowerDefencePhantomAll_1.configTowerDefencePhantomAll.GetConfigList()){var e=[],t=TowerDefencePhantomLevelByGroupId_1.configTowerDefencePhantomLevelByGroupId.GetConfigList(o.SkillGroup);if(void 0!==t){for(const n of t){var r={Name:n.Title,Description:n.Description,ExpThreshold:n.ExpLevel};e.push(r)}t={Id:o.Id,PhantomItemId:o.PhantomItemId,PhantomNameTextId:o.PhantomName,PhantomTypeTextId:o.TypeTextId,TypeIconPath:UiResourceById_1.configUiResourceById.GetConfig(o.TypeIcon)?.Path??"",SkillDataList:e,MaxLevel:e.length};this.SJs.set(o.Id,t),this.EJs.push(t)}}this.EJs.sort(this.yJs)}GetCurrentPhantomIdInBattle(){var e=TowerDefenceController_1.TowerDefenseController.GetCurrentSceneTeamItem(),t=e.GetPlayerId(),e=e.GetConfigId,r=this.GetOwnerData(t,e);return r?(r.PhantomId<=0&&Log_1.Log.CheckError()&&Log_1.Log.Error("TowerDefense",65,"塔防战斗中获取声骸ID失败：未赋值声骸",["PlayerID",t],["RoleCfgID",e],["Owner Data",r]),r.PhantomId):(Log_1.Log.CheckError()&&Log_1.Log.Error("TowerDefense",65,"塔防战斗中获取声骸ID失败：未获取OwnerData",["PlayerID",t],["RoleCfgID",e],["Owner Data",r]),TowerDefenceDefine_1.DEFAULT_ID)}TJs(e){var t=this.SJs.get(e);return t?t.SkillDataList:(Log_1.Log.CheckError()&&Log_1.Log.Error("TowerDefense",65,"未能获得塔防声骸技能配置",["TowerDefensePhantomId",e]),[])}GetCurrentPhantomSkillCfgListInBattle(){var e=this.GetCurrentPhantomIdInBattle();return this.TJs(e)}GetCurrentPhantomLevelInBattle(){var e=this.GetCurrentPhantomIdInBattle(),e=this.PhantomMessageCache.OwnPhantomInBattleDataCache.get(e);return e?e.P6n:1}GetCurrentPhantomExpPairInBattle(){var e=this.GetCurrentPhantomIdInBattle(),t=this.PhantomMessageCache.OwnPhantomInBattleDataCache.get(e),r={Exp:0,Threshold:0};if(t){var o=this.SJs.get(t.J4n);if(!o)return Log_1.Log.CheckError()&&Log_1.Log.Error("TowerDefense",65,"战斗中声骸ID，协议与配置不匹配，以协议ID找不到配置数据",["协议声骸ID",t.J4n]),r;var n=t.P6n,n=(o.MaxLevel===t.P6n?o.SkillDataList[n-2]:o.SkillDataList[n-1]).ExpThreshold??0;r.Exp=o.MaxLevel===t.P6n?n:t.M8n,r.Threshold=n}else{o=this.SJs.get(e);if(!o)return r;r.Exp=0,r.Threshold=o.SkillDataList[0].ExpThreshold??0}return r}GetCurrentPhantomSkillCfgTemp(){return this.TJs(this.CurrentSelfPhantomIdInUiTemp)}GetOrCreateParsedTowerDefenseMsg(){return this.PhantomMessageCache||(this.PhantomMessageCache=new ParsedTowerDefenseMsg),this.PhantomMessageCache}GetProtocolPhantomIdList(e){if(TowerDefenceController_1.TowerDefenseController.CheckInUiFlow()||TowerDefenceController_1.TowerDefenseController.CheckInInstanceDungeon()){var t=[],r=ModelManager_1.ModelManager.PlayerInfoModel.GetId();for(const n of e){var o=this.GetOwnerData(r,n);t.push(o.PhantomId)}return t}}GetPreviewRewardData(){var e=[];for(const l of TowerDefenceRewardAll_1.configTowerDefenceRewardAll.GetConfigList()){var t,r,o=[];for([t,r]of DropPackageById_1.configDropPackageById.GetConfig(l.RewardId).DropPreview)o.push([{ItemId:t,IncId:0},r]);var n=this.PhantomMessageCache.GetScoreRewardStateById(l.Id),n={NameText:"",NameTextId:"ConditionGroup_12100402_HintText",NameTextArgs:[l.Score.toString()],RewardList:o,RewardState:n,RewardButtonText:this.Nzs(n),RewardButtonRedDot:1===n,ClickFunction:()=>{TowerDefenceController_1.TowerDefenseController.RequestScoreReward(l.Id)}};e.push(n)}var i=[];for(const w of this.PhantomMessageCache.StageListCache){var a,s,f=[],c=TowerDefenceInstanceById_1.configTowerDefenceInstanceById.GetConfig(w.Id),h=c.InstanceId,h=ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetConfig(h),h=MultiTextLang_1.configMultiTextLang.GetLocalTextNew(h.MapName),D=c.RewardId;for([a,s]of DropPackageById_1.configDropPackageById.GetConfig(D).DropPreview)f.push([{ItemId:a,IncId:0},s]);D=this.PhantomMessageCache.GetPassRewardStateById(w.Id),h={NameText:"",NameTextId:"ConditionGroup_12100401_HintText",NameTextArgs:[h,c.RewardScore.toString()],RewardList:f,RewardState:D,RewardButtonText:this.Nzs(D),RewardButtonRedDot:1===D,ClickFunction:()=>{TowerDefenceController_1.TowerDefenseController.RequestInstanceReward(w.Id)}};i.push(h)}var d=MultiTextLang_1.configMultiTextLang.GetLocalTextNew("TowerDefenceFullPoint"),d=d?StringUtils_1.StringUtils.Format(d,this.PhantomMessageCache.TotalScore.toString()):"";return{DataPageList:[{TabName:MultiTextLang_1.configMultiTextLang.GetLocalTextNew("TowerDefenceLevelRewardText"),TabTips:d,DataList:i},{TabName:MultiTextLang_1.configMultiTextLang.GetLocalTextNew("TowerDefenceScoreRewardText"),TabTips:d,DataList:e}]}}Nzs(e){switch(e){case 2:case 1:return MultiTextLang_1.configMultiTextLang.GetLocalTextNew("TowerDefence_Getbt1")??"";case 0:return MultiTextLang_1.configMultiTextLang.GetLocalTextNew("TowerDefence_Getbt3")??"";default:return""}}ResetCurrentPhantomIdInUiTempToFirstAvailable(){this.CurrentSelfPhantomIdInUiTemp=this.EJs[0].Id}ResetPhantomOwnerDataList(){for(let e=this.PhantomOwnerDataList.length=0;e<EditFormationDefine_1.EDITE_FORAMTION_MAX_NUM;e++)this.PhantomOwnerDataList.push({PlayerId:ModelManager_1.ModelManager.PlayerInfoModel.GetId(),IsSelf:!0,RoleCfgId:TowerDefenceDefine_1.DEFAULT_ID,PhantomId:TowerDefenceDefine_1.DEFAULT_ID})}ResetPhantomOwnerDataByIndex(e){this.PhantomOwnerDataList[e].PlayerId=ModelManager_1.ModelManager.PlayerInfoModel.GetId(),this.PhantomOwnerDataList[e].IsSelf=!0,this.PhantomOwnerDataList[e].RoleCfgId=TowerDefenceDefine_1.DEFAULT_ID,this.PhantomOwnerDataList[e].PhantomId=TowerDefenceDefine_1.DEFAULT_ID}ResetAllCache(){this.CurrentSelfPhantomIdInUiTemp=TowerDefenceDefine_1.DEFAULT_ID;for(let e=0;e<this.PhantomOwnerDataList.length;e++)this.ResetPhantomOwnerDataByIndex(e);this.RoleCfgId2PhantomIdMapCache.clear()}CheckHasReward(){return this.CheckHasPassReward()||this.CheckHasScoreReward()}CheckHasScoreReward(){var e=TowerDefenceRewardAll_1.configTowerDefenceRewardAll.GetConfigList(),t=this.PhantomMessageCache;for(const r of e)if(t.TotalScore>r.Score&&!t.ScoreRewardCache.has(r.Id))return!0;return!1}CheckHasPassReward(){for(const e of this.PhantomMessageCache.StageListCache)if(e.RecordOverThreshold&&!e.Rewarded)return!0;return!1}CheckHasNewStage(){var e=TimeUtil_1.TimeUtil.GetServerTimeStamp();for(const t of this.PhantomMessageCache.StageListCache)if(t.UnlockTime<e&&!t.Passed)return!0;return!1}GetOwnerData(e,t){for(const r of this.PhantomOwnerDataList)if(r.PlayerId===e&&r.RoleCfgId===t)return r}GetOwnerDataListByPlayerId(e){var t=[];for(const r of this.PhantomOwnerDataList)r.PlayerId===e&&t.push(r);return t}}exports.TowerDefenseModel=TowerDefenseModel;class ParsedTowerDefenseMsg extends ActivityData_1.ActivityBaseData{constructor(){super(...arguments),this.ScoreRewardCache=new Map,this.StageListCache=[],this.StageMapCache=new Map,this.OwnPhantomInBattleDataCache=new Map,this.OwnPhantomInBattleNewLevelUpFlagCache=new Map,this.TotalScore=0}PhraseEx(e){var t=e.yYs;t?this.ParseTowerDefenseActivityData(t):Log_1.Log.CheckError()&&Log_1.Log.Error("TowerDefense",65,"塔防数据为空，请确认活动协议类型是否正确",["ActivityId",e.J4n],["ActivityType",e.Z4n])}GetExDataRedPointShowState(){return TowerDefenceController_1.TowerDefenseController.CheckHasNewStage()||TowerDefenceController_1.TowerDefenseController.CheckHasReward()}ParseTowerDefenseActivityData(e){Log_1.Log.CheckDebug()&&Log_1.Log.Debug("TowerDefense",65,"解析塔防活动数据",["data",e]),this.ScoreRewardCache.clear(),this.TotalScore=0;for(const r of e.TYs){var t=TowerDefenceRewardById_1.configTowerDefenceRewardById.GetConfig(r);this.ScoreRewardCache.set(r,t)}this.ParseTowerDefenseInstanceDataList(e.IYs),this.TotalScore=e.$ua}ParseTowerDefenseInstanceDataList(e,t=!0){if(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("TowerDefense",65,"解析塔防关卡数据",["dataList",e],["是否全量更新",t]),t){this.TotalScore=0,this.StageListCache.length=0,this.StageMapCache.clear();for(const i of e){var r=TowerDefenceInstanceById_1.configTowerDefenceInstanceById.GetConfig(i.J4n);r?(r={Meta:i,Id:i.J4n,UnlockTime:MathUtils_1.MathUtils.LongToNumber(i.RYs),Passed:i.LYs,Rewarded:i.aLs,Record:i.Qbs,RecordOverThreshold:i.Qbs>=r.RewardScore},this.StageListCache.push(r),this.StageMapCache.set(i.J4n,r)):Log_1.Log.CheckError()&&Log_1.Log.Error("TowerDefense",65,"塔防副本协议数据与配置不匹配，协议ID："+i.J4n)}}else{for(const a of e)if(!this.StageMapCache.has(a.J4n))return void(Log_1.Log.CheckInfo()&&Log_1.Log.Info("TowerDefense",65,"塔防关卡协议存量更新时，出现未缓存的数据，本条协议不更新",["协议数据",e]));for(const s of e){var o=TowerDefenceInstanceById_1.configTowerDefenceInstanceById.GetConfig(s.J4n),n=this.StageMapCache.get(s.J4n);n.Meta=s,n.Id=s.J4n,n.UnlockTime=MathUtils_1.MathUtils.LongToNumber(s.RYs),n.Passed=s.LYs,n.Rewarded=s.aLs,n.Record=s.Qbs,n.RecordOverThreshold=s.Qbs>=o.RewardScore}}}ParseTowerDefenseOwnPhantomDataList(e){Log_1.Log.CheckDebug()&&Log_1.Log.Debug("TowerDefense",65,"解析塔防声骸数据",["infoList",e]);for(const r of e){var t=this.OwnPhantomInBattleDataCache.get(r.J4n);t&&r.P6n>t.P6n&&this.OwnPhantomInBattleNewLevelUpFlagCache.set(r.J4n,!0),this.OwnPhantomInBattleDataCache.set(r.J4n,r)}}GetScoreRewardStateById(e){var t=TowerDefenceRewardById_1.configTowerDefenceRewardById.GetConfig(e);return this.TotalScore<t.Score?0:this.ScoreRewardCache.has(e)?2:1}GetPassRewardStateById(e){e=this.StageMapCache.get(e);return e.RecordOverThreshold?e.Rewarded?2:1:0}UpdateByScoreRewardRequest(e){this.ScoreRewardCache.set(e,TowerDefenceRewardById_1.configTowerDefenceRewardById.GetConfig(e))}UpdateByInstanceRewardRequest(e){e=this.StageMapCache.get(e);e.Rewarded=!0,e.Meta.aLs=!0}IsStageUnLocked(e){e=TowerDefenceInstanceByInstanceId_1.configTowerDefenceInstanceByInstanceId.GetConfig(e);return!!e&&this.IsStageUnlockedByTowerDefenseInstanceId(e.Id)}IsStageUnlockedByTowerDefenseInstanceId(e){var t=TimeUtil_1.TimeUtil.GetServerTimeStamp(),r=this.StageMapCache.get(e);return r?r.UnlockTime<t:(Log_1.Log.CheckError()&&Log_1.Log.Error("TowerDefense",65,"塔防关卡协议数据丢失",["TowerDefenseInstanceId",e],["关卡协议缓存",this.StageMapCache]),!1)}GetSuitableInstanceId(){let e=0;for(const t of this.StageListCache)if(this.IsStageUnlockedByTowerDefenseInstanceId(t.Id)&&(e=TowerDefenceInstanceById_1.configTowerDefenceInstanceById.GetConfig(t.Id)?.InstanceId??0,0===t.Record))break;return e}}
//# sourceMappingURL=TowerDefenceModel.js.map