
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.StepBaseItem=void 0;const ue_1=require("ue"),MultiTextLang_1=require("../../../../../../Core/Define/ConfigQuery/MultiTextLang"),Protocol_1=require("../../../../../../Core/Define/Net/Protocol"),StringUtils_1=require("../../../../../../Core/Utils/StringUtils"),IQuest_1=require("../../../../../../UniverseEditor/Interface/IQuest"),EventDefine_1=require("../../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../../Common/Event/EventSystem"),PublicUtil_1=require("../../../../../Common/PublicUtil"),LevelGeneralContextDefine_1=require("../../../../../LevelGamePlay/LevelGeneralContextDefine"),LevelGeneralController_1=require("../../../../../LevelGamePlay/LevelGeneralController"),ConfigManager_1=require("../../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../../Manager/ModelManager"),UiPanelBase_1=require("../../../../../Ui/Base/UiPanelBase"),GeneralLogicTreeController_1=require("../../../../GeneralLogicTree/GeneralLogicTreeController"),MapUtil_1=require("../../../../Map/MapUtil"),QuestUtil_1=require("../../../../QuestNew/QuestUtil"),LguiUtil_1=require("../../../../Util/LguiUtil"),MissionViewStepTextUtil_1=require("../MissionViewStepTextUtil"),StepMotionArtTextController_1=require("./StepMotionArtTextController");class StepBaseItem extends UiPanelBase_1.UiPanelBase{constructor(e,t){super(),this.ViewId=e,this.StepId=t,this.G8_=new Map,this.DescribeTextComp=void 0,this.DistanceTextComp=void 0,this.StepReferenceSource=0,this.ShowData=void 0,this.Config=void 0,this.DescribeTextVisible=!1,this.DistanceTextVisible=!1,this.rs=void 0,this.Qmt=()=>{var e;return!this.G8_.get(0)?.Enable&&!(!this.ShowData||!this.Config||(e=MissionViewStepTextUtil_1.MissionViewStepTextUtil.GetStepTextByConfig(this.ShowData.Id,this.Config),StringUtils_1.StringUtils.IsBlank(e))||(this.DescribeTextComp.SetText(e),0))},this.UpdateDistanceText=()=>{if(!this.ShowData||!this.Config||0!==this.ShowData.DataSource||0!==this.Config.ShowSource)return!1;var t=this.ShowData.Id;if(!GeneralLogicTreeController_1.GeneralLogicTreeController.IsShowTrackDistance(t,this.Config.QuestScheduleType))return!1;t=ModelManager_1.ModelManager.GeneralLogicTreeModel.GetBehaviorTree(t);if(!t)return!1;if(t.IsInTrackRange())return!1;var i=GeneralLogicTreeController_1.GeneralLogicTreeController.GetTitleTrackNodeId(this.Config.QuestScheduleType),s=t.GetNodeDungeonId(),r=ModelManager_1.ModelManager.CreatureModel.GetInstanceId();if(MapUtil_1.MapUtil.IsDungeonDiffWorld(r,s)){if(t.BtType!==Protocol_1.Aki.Protocol.hps.Proto_BtTypeQuest)return!1;r=t.GetTrackAreaInfo(i);let e="";if(r){s=ConfigManager_1.ConfigManager.AreaConfig.GetLevelOneAreaId(r),s=0!==s?s:r,r=ConfigManager_1.ConfigManager.AreaConfig.GetAreaInfo(s);if(!r)return!1;e=PublicUtil_1.PublicUtil.GetConfigTextByKey(r.Title)}else{s=ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetConfig(t.DungeonId);if(!s)return!1;e=MultiTextLang_1.configMultiTextLang.GetLocalTextNew(s.MapName)??s.MapName}r=t.GetNode(i);return this.DescribeTextVisible||"ChildQuest"!==r?.NodeType||r.ChildQuestType!==IQuest_1.EChildQuest.PlayFlow?(LguiUtil_1.LguiUtil.SetLocalTextNew(this.DistanceTextComp,"CrossMapMissionTips",e),!0):(LguiUtil_1.LguiUtil.SetLocalTextNew(this.DescribeTextComp,"CrossMapMissionTips",e),!(this.DescribeTextVisible=!0))}s=t.GetNodeTrackPosition(i);return!!s&&QuestUtil_1.QuestUtil.SetTrackDistanceText(this.DistanceTextComp,s)}}get IsDescribeTextVisible(){var e=this.G8_.get(0);return e?.Enable?e.CheckTextVisible():this.DescribeTextVisible}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,ue_1.UIText],[1,ue_1.UIText]]}async OnBeforeStartAsync(){var e;await super.OnBeforeStartAsync(),this.StepReferenceSource=this.OpenParam,this.DescribeTextComp=this.GetText(0),this.DescribeTextComp.OnSelfLanguageChange.Bind(this.Qmt),this.DistanceTextComp=this.GetText(1),this.DistanceTextComp.SetUIActive(!0),0===this.StepReferenceSource&&(e=new StepMotionArtTextController_1.StepMotionArtTextController(this.DescribeTextComp.GetParentAsUIItem()),this.G8_.set(0,e))}OnAfterHide(){for(var[,e]of this.G8_)e.Hide()}OnBeforeDestroy(){this.DescribeTextComp?.OnSelfLanguageChange.Unbind(),this.ShowData=void 0,this.Config=void 0,this.DescribeTextComp=void 0,this.DistanceTextComp=void 0}OnTick(e){if(this.IsShowOrShowing)for(var[,t]of this.G8_)t.OnTick(e)}CheckVisible(){return!(!this.Config||!this.ShowData)&&LevelGeneralController_1.LevelGeneralController.CheckConditionNew(this.Config.ShowConditions,void 0,this.rs)}async Refresh(e,t){this.ShowData=e,this.Config!==t&&(this.Config=t,this.Config&&(this.Config.CurConditionTextIndex=this.p1c(this.Config)),await this.OnConfigRefresh(this.ShowData,this.Config)),this.UpdateStepInfoAndSetActiveComp()}p1c(t){if(t&&(!t.ShowConditions||!LevelGeneralController_1.LevelGeneralController.CheckConditionNew(t.ShowConditions,void 0,this.rs))&&t.ConditionText)for(let e=0;e<t.ConditionText.length;e++){var i=t.ConditionText[e];if(LevelGeneralController_1.LevelGeneralController.CheckConditionNew(i.Condition,void 0,this.rs))return e}}UpdateByConfig(){var e;this.Config&&this.Config.CurConditionTextIndex!==(e=this.p1c(this.Config))?0===this.StepReferenceSource?EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.MissionPanelStepConditionIndexChange,this.ViewId,this.StepId,e):this.OnStepConditionIndexChange(e):this.UpdateStepInfoAndSetActiveComp()}async OnStepConditionIndexChange(e){this.Config&&(this.Config.CurConditionTextIndex=e),await this.OnConfigRefresh(this.ShowData,this.Config),this.UpdateStepInfoAndSetActiveComp()}UpdateStepInfo(){this.DescribeTextVisible=this.Qmt(),this.DistanceTextVisible=this.UpdateDistanceText()}UpdateStepInfoAndSetActiveComp(){this.UpdateStepInfo(),this.DescribeTextComp.SetUIActive(this.DescribeTextVisible),this.DistanceTextComp.SetUIActive(this.DistanceTextVisible)}CopyStepInfo(e){var t=e.GetDescribeComponentText(),t=(this.DescribeTextComp.SetText(t),this.DescribeTextVisible=!StringUtils_1.StringUtils.IsBlank(t),this.DescribeTextComp.SetUIActive(this.DescribeTextVisible),e.GetDistanceComponentText());this.DistanceTextComp.SetText(t),this.DistanceTextVisible=!StringUtils_1.StringUtils.IsBlank(t),this.DistanceTextComp.SetUIActive(this.DistanceTextVisible)}GetDescribeComponentText(){return this.DescribeTextComp.GetText()}GetDistanceComponentText(){return this.DistanceTextComp.GetText()}async OnConfigRefresh(e,t){0===this.ShowData?.DataSource&&(this.rs=LevelGeneralContextDefine_1.GeneralLogicTreeContext.Create(this.ShowData.BtType,this.ShowData.Id,this.ShowData.TreeConfigId));var i,s=[];for([,i]of this.G8_)s.push(i.OnConfigRefresh(e,t));await Promise.all(s)}async OnReset(){await this.Refresh(void 0,void 0)}}exports.StepBaseItem=StepBaseItem;
//# sourceMappingURL=StepBaseItem.js.map