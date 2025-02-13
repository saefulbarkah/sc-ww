
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ActivityDirectTrainController=void 0;const Log_1=require("../../../../../Core/Common/Log"),Protocol_1=require("../../../../../Core/Define/Net/Protocol"),Net_1=require("../../../../../Core/Net/Net"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),ControllerHolder_1=require("../../../../Manager/ControllerHolder"),ModelManager_1=require("../../../../Manager/ModelManager"),QuestController_1=require("../../../QuestNew/Controller/QuestController"),ActivityControllerBase_1=require("../../ActivityControllerBase"),ActivityDirectTrainData_1=require("./ActivityDirectTrainData"),ActivityDirectTrainDefine_1=require("./ActivityDirectTrainDefine"),ActivityDirectTrainHelper_1=require("./ActivityDirectTrainHelper"),ActivityDirectTrainSubView_1=require("./ActivityDirectTrainSubView");class ActivityDirectTrainController extends ActivityControllerBase_1.ActivityControllerBase{constructor(){super(...arguments),this.oU_=void 0,this.nU_=new Map,this.nye=()=>{this.nU_.set(ActivityDirectTrainDefine_1.EDirectTrainStartCondition.WorldDone,!0),this.zca()},this.JDe=()=>{this.nU_.set(ActivityDirectTrainDefine_1.EDirectTrainStartCondition.ActivateBattle,!0),this.zca()},this.itt=e=>{var t=ActivityDirectTrainHelper_1.ActivityDirectTrainHelper.GetActivityData()?.IsUnLock();this.nU_.set(ActivityDirectTrainDefine_1.EDirectTrainStartCondition.ActivityOpen,t),0<ModelManager_1.ModelManager.ActivityModel.GetCurrentShowingActivities().length&&this.zca()},this.sU_=e=>{this.oU_=e.w6n,this.zca()}}OnGetIsOpeningActivityRelativeView(){throw new Error("Method not implemented.")}OnInit(){return Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Activity",63,"[剧情直通车]初始化剧情直通车活动"),!0}OnAddEvents(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.WorldDone,this.nye),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.ActiveBattleView,this.JDe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.RefreshCommonActivityRedDot,this.itt),Net_1.Net.Register(17631,this.sU_)}OnRemoveEvents(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.WorldDone,this.nye),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.ActiveBattleView,this.JDe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.RefreshCommonActivityRedDot,this.itt),Net_1.Net.UnRegister(17631)}OnOpenView(e){}OnCreateActivityData(e){return ModelManager_1.ModelManager.ActivityDirectTrainModel.ActivityId=e.s5n,new ActivityDirectTrainData_1.ActivityDirectTrainData}OnCreateSubPageComponent(e){return new ActivityDirectTrainSubView_1.ActivityDirectTrainSubView}OnGetActivityResource(e){return"UiItem_PlotTrain"}RequestThroughTrain(t){var e=Protocol_1.Aki.Protocol.Kp_.create();e.w6n=ModelManager_1.ModelManager.ActivityDirectTrainModel.ActivityId,Net_1.Net.Call(21409,e,e=>{e&&(e.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs?ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.Q4n,15513):((e=ModelManager_1.ModelManager.ActivityDirectTrainModel.GetSkipQuestId())!==ModelManager_1.ModelManager.QuestNewModel.GetCurTrackedQuest()?.Id&&QuestController_1.QuestNewController.RequestTrackQuest(e,!0,1),t?.()))})}async RequestThroughTrainFinishViewAsync(){var e;(this.nU_.get(ActivityDirectTrainDefine_1.EDirectTrainStartCondition.ServerConditionDone)??!1)&&((e=Protocol_1.Aki.Protocol.eU_.create()).w6n=ModelManager_1.ModelManager.ActivityDirectTrainModel.ActivityId,await Net_1.Net.CallAsync(26409,e),this.nU_.set(ActivityDirectTrainDefine_1.EDirectTrainStartCondition.ServerConditionDone,!1))}zca(){void 0!==this.oU_&&this.oU_===ModelManager_1.ModelManager.ActivityDirectTrainModel.ActivityId&&this.nU_.set(ActivityDirectTrainDefine_1.EDirectTrainStartCondition.ServerConditionDone,!0);let e=!0,t=void 0;for(const n in ActivityDirectTrainDefine_1.EDirectTrainStartCondition){var i=Number(n);if(!isNaN(i))if(!(this.nU_.get(i)??!1)){e=!1,t=ActivityDirectTrainDefine_1.EDirectTrainStartCondition[i];break}}var r;e?ModelManager_1.ModelManager.ActivityDirectTrainModel.AlreadyStartView||(ModelManager_1.ModelManager.ActivityDirectTrainModel.AlreadyStartView=!0,ModelManager_1.ModelManager.ActivityRecallModel.AlreadyStartView=!0,0!==(r=ModelManager_1.ModelManager.ActivityDirectTrainModel.ActivityId)&&ControllerHolder_1.ControllerHolder.ActivityController.OpenActivityById(r)):Log_1.Log.CheckDebug()&&Log_1.Log.Debug("ActivityDirectTrain",63,"[直通车活动]CheckIsStart->",["未满足启动的条件",t])}}exports.ActivityDirectTrainController=ActivityDirectTrainController;
//# sourceMappingURL=ActivityDirectTrainController.js.map