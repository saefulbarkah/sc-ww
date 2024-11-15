
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ActivityRecallAreaSubView=void 0;const ModelManager_1=require("../../../../../Manager/ModelManager"),ActivityRecallDefine_1=require("../ActivityRecallDefine"),ActivityRecallTabGroupPanel_1=require("../Panels/ActivityRecallTabGroupPanel"),ActivityRecallAreaActivityInfoPanel_1=require("./ActivityRecallAreaActivityInfoPanel");class ActivityRecallAreaSubView extends ActivityRecallDefine_1.ActivityMainSubViewBase{constructor(){super(...arguments),this.Oda=void 0,this.kda=void 0,this.Gda=void 0,this.Wwn=e=>{e=this.Gda[e].Config;this.kda.RefreshByData(e),this.InvokePassRecallBaseCallBack(e,1)}}OnRegisterComponent(){this.ComponentRegisterInfos=ActivityRecallDefine_1.activityRecallMainViewComponentsInfo}async OnBeforeStartAsync(){var e=this.GetItem(6).GetOwner();this.kda=new ActivityRecallAreaActivityInfoPanel_1.ActivityRecallAreaActivityInfoPanel,await this.kda.CreateThenShowByActorAsync(e)}OnStart(){super.OnStart();var e=this.GetHorizontalLayout(0),i=this.GetItem(5);this.Oda=new ActivityRecallTabGroupPanel_1.ActivityRecallTabGroupPanel(e,i,this.Wwn),this.Oda.Init(),this.GetItem(3).SetUIActive(!1)}OnBeforeDestroy(){this.Oda.Destroy(),this.Oda=void 0}OnRefreshByData(e,i){var t=ModelManager_1.ModelManager.ActivityRecallModel.GetRecallBaseConfigNewestList(2);this.Gda=[],t.forEach(e=>{var i=new ActivityRecallDefine_1.ActivityRecallTabSwitchItemCommonData;i.RecallEntryType=2,i.Config=e,i.Title=e.Title,this.Gda.push(i)}),this.GetItem(7).SetUIActive(1<this.Gda.length),this.Oda.RefreshByData(this.Gda,i)}}exports.ActivityRecallAreaSubView=ActivityRecallAreaSubView;
//# sourceMappingURL=ActivityRecallAreaSubView.js.map