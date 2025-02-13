
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ShipTowerRewardView=void 0;const UE=require("ue"),Log_1=require("../../../../Core/Common/Log"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),ModelManager_1=require("../../../Manager/ModelManager"),UiViewBase_1=require("../../../Ui/Base/UiViewBase"),PopupCaptionItem_1=require("../../../Ui/Common/PopupCaptionItem"),UiManager_1=require("../../../Ui/UiManager"),LoopScrollView_1=require("../../Util/ScrollView/LoopScrollView"),ShipTowerAreaItem_1=require("./ShipTowerAreaItem"),ShipTowerRewardItem_1=require("./ShipTowerRewardItem");class ShipTowerRewardView extends UiViewBase_1.UiViewBase{constructor(){super(...arguments),this.OpenParam=void 0,this.zJa=void 0,this.wA_=void 0,this.RA_=void 0,this.lA_=void 0,this.iJl=void 0,this.QH_=!0,this.E7_=e=>{"Start"===e&&this.wA_?.SelectGridProxy(this.UA_())},this.AA_=()=>{var e=new ShipTowerAreaItem_1.ShipTowerAreaItem;return e.ClickCallBack=this.PA_,e},this.rOe=()=>{var e=new ShipTowerRewardItem_1.ShipTowerRewardItem;return e.ClickCallBack=this.u6e,e},this.PA_=e=>{this.iJl=e,this.RA_?.RefreshByData(e.RewardList,void 0,void 0,this.QH_),this.QH_=!0},this.u6e=e=>{ModelManager_1.ModelManager.ShipTowerModel.ReceiveAward(e.Id)},this.xA_=e=>{this.iJl&&(this.wA_?.RefreshByData(this.lA_,!0,()=>{this.QH_=!1,this.wA_?.DeselectCurrentGridProxy(),this.wA_?.SelectGridProxy(this.lq_())}),Log_1.Log.CheckDebug())&&Log_1.Log.Debug("Temp",69,"",["EventRewardReceive",e],["SelectId",this.iJl?.Id])}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UILoopScrollViewComponent],[2,UE.UILoopScrollViewComponent],[3,UE.UIItem],[4,UE.UIItem]]}Ss_(){this.lA_=ModelManager_1.ModelManager.ShipTowerModel.GetAreaList(),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Temp",69,"",["DataParam",this.OpenParam])}async OnBeforeStartAsync(){this.Ss_(),await super.OnBeforeStartAsync(),await this.DQ_(),this.zJa=new PopupCaptionItem_1.PopupCaptionItem(this.GetItem(0)),this.zJa.SetCloseCallBack(this.CloseMe.bind(this)),this.zJa.SetHelpBtnActive(!1),this.wA_=new LoopScrollView_1.LoopScrollView(this.GetLoopScrollViewComponent(1),this.GetItem(3).GetOwner(),this.AA_,!0),this.RA_=new LoopScrollView_1.LoopScrollView(this.GetLoopScrollViewComponent(2),this.GetItem(4).GetOwner(),this.rOe,!0),await this.wA_.RefreshByDataAsync(this.lA_)}async DQ_(){UiManager_1.UiManager.IsViewOpen("ShipTowerView")||await ModelManager_1.ModelManager.ShipTowerModel.CheckIsNeedShowSeasonReview()}OnAddEventListener(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.ShipTowerRewardReceive,this.xA_),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnActivitySequenceEmitEvent,this.E7_)}OnRemoveEventListener(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.ShipTowerRewardReceive,this.xA_),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnActivitySequenceEmitEvent,this.E7_)}OnBeforeShow(){}OnBeforeDestroy(){}UA_(){if(!this.OpenParam?.RewardId)return this.lq_();const t=this.OpenParam.RewardId;var e=this.lA_.findIndex(e=>e.RewardList.some(e=>e.Id===t));return this._q_(e)}lq_(){var e=this.lA_.findIndex(e=>e.RewardList.some(e=>e.IsReceive));return this._q_(e)}_q_(e){return-1===e?0:e}}exports.ShipTowerRewardView=ShipTowerRewardView;
//# sourceMappingURL=ShipTowerRewardView.js.map