
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BabelTowerQuestView=void 0;const UE=require("ue"),Protocol_1=require("../../../../../Core/Define/Net/Protocol"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),TimeUtil_1=require("../../../../Common/TimeUtil"),ConfigManager_1=require("../../../../Manager/ConfigManager"),UiViewBase_1=require("../../../../Ui/Base/UiViewBase"),PopupCaptionItem_1=require("../../../../Ui/Common/PopupCaptionItem"),LguiUtil_1=require("../../../Util/LguiUtil"),GenericScrollViewNew_1=require("../../../Util/ScrollView/GenericScrollViewNew"),BabelTowerController_1=require("./BabelTowerController"),BabelTowerDailyQuestItem_1=require("./BabelTowerDailyQuestItem"),BabelTowerNormalQuestItem_1=require("./BabelTowerNormalQuestItem"),BabelTowerQuestTabItem_1=require("./BabelTowerQuestTabItem");class BabelTowerQuestView extends UiViewBase_1.UiViewBase{constructor(){super(...arguments),this.lqe=void 0,this.xJ_=void 0,this.UJ_=void 0,this.DJ_=void 0,this.b7t=1,this.BJ_=[],this.kJ_=[],this.qJ_=[],this.Hno=[],this.ebl=void 0,this.C5e=()=>{var e=new BabelTowerQuestTabItem_1.BabelTowerQuestTabItem;return e.OnClickToggleCallBack=this.OJ_,e},this.GJ_=()=>{return new BabelTowerNormalQuestItem_1.BabelTowerNormalQuestItem},this.FJ_=()=>{return new BabelTowerDailyQuestItem_1.BabelTowerDailyQuestItem},this.OJ_=(e,t)=>{this.ebl?.SetToggleState(0),this.ebl=e,this.b7t=t,this.Og()},this.kmc=()=>{this.Omc(),this.Og()}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIScrollViewWithScrollbarComponent],[2,UE.UIItem],[3,UE.UIScrollViewWithScrollbarComponent],[4,UE.UIItem],[5,UE.UIItem],[6,UE.UIText],[7,UE.UIScrollViewWithScrollbarComponent],[8,UE.UIItem]]}OnAddEventListener(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.BabelTowerRefreshQuestState,this.kmc)}OnRemoveEventListener(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.BabelTowerRefreshQuestState,this.kmc)}async OnBeforeStartAsync(){this.lqe=new PopupCaptionItem_1.PopupCaptionItem,await this.lqe.CreateThenShowByActorAsync(this.GetItem(0).GetOwner()),this.lqe.SetCloseCallBack(()=>{this.CloseMe()}),this.xJ_=new GenericScrollViewNew_1.GenericScrollViewNew(this.GetScrollViewWithScrollbar(3),this.C5e),this.UJ_=new GenericScrollViewNew_1.GenericScrollViewNew(this.GetScrollViewWithScrollbar(1),this.GJ_),this.DJ_=new GenericScrollViewNew_1.GenericScrollViewNew(this.GetScrollViewWithScrollbar(7),this.FJ_)}OnStart(){var e,t,i=BabelTowerController_1.BabelTowerController.GetBabelTowerData();for([e]of i.NormalQuest){var r=ConfigManager_1.ConfigManager.BabelTowerConfig.GetBabelTowerNormalQuest(e);(ConfigManager_1.ConfigManager.BabelTowerConfig.GetBabelTowerLevelConfig(r.LevelId).IsDifficult?this.kJ_:this.BJ_).push(e)}for([t]of i.DailyQuest)this.qJ_.push(t);this.Omc(),this.Hno.push(0,1,2),this.xJ_?.RefreshByData(this.Hno,()=>{this.xJ_?.GetScrollItemByIndex(0)?.SelectToggle()})}OnBeforeShow(){this.Og()}Og(){switch(this.b7t){case 1:this.GetItem(5).SetUIActive(!1),this.GetScrollViewWithScrollbar(1).RootUIComp.SetUIActive(!0),this.UJ_.RefreshByData(this.BJ_,()=>{this.UJ_.ScrollTo(this.UJ_.GetItemByIndex(0))}),this.GetScrollViewWithScrollbar(1).Content.GetComponentByClass(UE.UIInturnAnimController.StaticClass())?.Play();break;case 2:this.GetItem(5).SetUIActive(!1),this.GetScrollViewWithScrollbar(1).RootUIComp.SetUIActive(!0),this.UJ_.RefreshByData(this.kJ_,()=>{this.UJ_.ScrollTo(this.UJ_.GetItemByIndex(0))}),this.GetScrollViewWithScrollbar(1).Content.GetComponentByClass(UE.UIInturnAnimController.StaticClass())?.Play();break;case 0:var e=TimeUtil_1.TimeUtil.GetNextDayTimeStamp(),t=TimeUtil_1.TimeUtil.GetServerTimeStamp(),e=TimeUtil_1.TimeUtil.GetRemainTimeDataFormat((e-t)*TimeUtil_1.TimeUtil.Millisecond).CountDownText;LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(6),"BabelTowerQuestRefreshTime",e),this.GetItem(5).SetUIActive(!0),this.GetScrollViewWithScrollbar(1).RootUIComp.SetUIActive(!1),this.DJ_.RefreshByData(this.qJ_),this.GetScrollViewWithScrollbar(7).Content.GetComponentByClass(UE.UIInturnAnimController.StaticClass())?.Play()}}Omc(){const i=BabelTowerController_1.BabelTowerController.GetBabelTowerData();this.BJ_.sort((e,t)=>{e=i.NormalQuest.get(e),e=e?.H6n===Protocol_1.Aki.Protocol.I$s.Proto_ActivityTaskFinish?0:e?.H6n===Protocol_1.Aki.Protocol.I$s.Proto_ActivityTaskRunning?1:2,t=i.NormalQuest.get(t);return e-(t?.H6n===Protocol_1.Aki.Protocol.I$s.Proto_ActivityTaskFinish?0:t?.H6n===Protocol_1.Aki.Protocol.I$s.Proto_ActivityTaskRunning?1:2)}),this.kJ_.sort((e,t)=>{e=i.NormalQuest.get(e),e=e?.H6n===Protocol_1.Aki.Protocol.I$s.Proto_ActivityTaskFinish?0:e?.H6n===Protocol_1.Aki.Protocol.I$s.Proto_ActivityTaskRunning?1:2,t=i.NormalQuest.get(t);return e-(t?.H6n===Protocol_1.Aki.Protocol.I$s.Proto_ActivityTaskFinish?0:t?.H6n===Protocol_1.Aki.Protocol.I$s.Proto_ActivityTaskRunning?1:2)}),this.qJ_.sort((e,t)=>{e=i.DailyQuest.get(e),e=e?.H6n===Protocol_1.Aki.Protocol.I$s.Proto_ActivityTaskFinish?0:e?.H6n===Protocol_1.Aki.Protocol.I$s.Proto_ActivityTaskRunning?1:2,t=i.DailyQuest.get(t);return e-(t?.H6n===Protocol_1.Aki.Protocol.I$s.Proto_ActivityTaskFinish?0:t?.H6n===Protocol_1.Aki.Protocol.I$s.Proto_ActivityTaskRunning?1:2)})}}exports.BabelTowerQuestView=BabelTowerQuestView;
//# sourceMappingURL=BabelTowerQuestView.js.map