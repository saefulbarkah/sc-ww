
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ActivityRecallMainLineSubView=void 0;const CustomPromise_1=require("../../../../../../Core/Common/CustomPromise"),ModelManager_1=require("../../../../../Manager/ModelManager"),ActivityRecallDefine_1=require("../ActivityRecallDefine"),ActivityRecallTabGroupPanel_1=require("../Panels/ActivityRecallTabGroupPanel"),ActivityRecallMainLineActivityInfoPanel_1=require("./ActivityRecallMainLineActivityInfoPanel");class ActivityRecallMainLineSubView extends ActivityRecallDefine_1.ActivityMainSubViewBase{constructor(){super(...arguments),this.Oda=void 0,this.$da=void 0,this.Gda=void 0,this.Wwn=i=>{i=this.Gda[i].Config,this.$da.RefreshByData(i),this.InvokePassRecallBaseCallBack(i,0),this.SequencePlayer.StopSequenceByKey("Start"),i=new CustomPromise_1.CustomPromise;this.SequencePlayer.PlaySequenceAsync("Start",i)}}OnRegisterComponent(){this.ComponentRegisterInfos=ActivityRecallDefine_1.activityRecallMainViewComponentsInfo}async OnBeforeStartAsync(){var i=this.GetItem(6).GetOwner();this.$da=new ActivityRecallMainLineActivityInfoPanel_1.ActivityRecallMainLineActivityInfoPanel,await this.$da.CreateThenShowByActorAsync(i)}OnStart(){super.OnStart();var i=this.GetHorizontalLayout(0),t=this.GetItem(5);this.Oda=new ActivityRecallTabGroupPanel_1.ActivityRecallTabGroupPanel(i,t,this.Wwn),this.Oda.Init(),this.GetItem(3).SetUIActive(!1)}OnBeforeDestroy(){this.Oda.Destroy(),this.Oda=void 0}OnRefreshByData(i,t){var e=ModelManager_1.ModelManager.ActivityRecallModel.GetRecallBaseConfigNewestList(1);this.Gda=[],e.forEach(i=>{var t=new ActivityRecallDefine_1.ActivityRecallTabSwitchItemCommonData;t.RecallEntryType=1,t.Config=i,t.Title=i.Title,this.Gda.push(t)}),this.GetItem(7).SetUIActive(1<this.Gda.length),this.Oda.RefreshByData(this.Gda,t)}}exports.ActivityRecallMainLineSubView=ActivityRecallMainLineSubView;
//# sourceMappingURL=ActivityRecallMainLineSubView.js.map