
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PlotReviewDynamicScrollItem=void 0;const UE=require("ue"),SpeakerById_1=require("../../../../Core/Define/ConfigQuery/SpeakerById"),StringUtils_1=require("../../../../Core/Utils/StringUtils"),PublicUtil_1=require("../../../Common/PublicUtil"),ModelManager_1=require("../../../Manager/ModelManager"),UiPanelBase_1=require("../../../Ui/Base/UiPanelBase"),LguiUtil_1=require("../../Util/LguiUtil");class PlotReviewDynamicScrollItem extends UiPanelBase_1.UiPanelBase{constructor(){super(...arguments),this.Index=-1,this.Pe=void 0,this.Ez_=new PlotReviewTalkItem,this.Iz_=new PlotReviewOptionItem}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIItem]]}async Init(t){await super.CreateByActorAsync(t.GetOwner(),void 0,!0),await this.WZt()}async WZt(){var t=this.GetItem(0),i=(t.SetUIActive(!1),this.GetItem(1));i.SetUIActive(!1),await Promise.all([this.Ez_.CreateByActorAsync(t.GetOwner()),this.Iz_.CreateByActorAsync(i.GetOwner())])}GetUsingItem(t){let i=void 0;switch(t.Type){case 0:i=0;break;case 1:i=1}return this.GetItem(i).GetOwner()}Update(t,i){this.Pe=t,this.Index=i,this.Refresh()}Refresh(){let t=!1,i=!1;switch(this.Pe.Type){case 0:t=!0,this.RefreshTalkItem();break;case 1:i=!0,this.RefreshOptionItem()}this.GetItem(0).SetUIActive(t),this.GetItem(1).SetUIActive(i)}RefreshTalkItem(){var t=this.Pe.Data;this.Ez_.Update(t,this.Index)}RefreshOptionItem(){var t=this.Pe.Data;this.Iz_.Update(t,this.Index)}SetTalkItemToggleClickCallBack(t){this.Ez_.OnToggleClick=t}SetTalkItemToggleState(t){this.Ez_.SetToggleState(t)}ClearItem(){this.Destroy()}}exports.PlotReviewDynamicScrollItem=PlotReviewDynamicScrollItem;class PlotReviewTalkItem extends UiPanelBase_1.UiPanelBase{constructor(){super(...arguments),this.Index=-1,this.Pe=void 0,this.OnToggleClick=void 0,this.Tz_=!1,this.bz_=()=>{this.OnToggleClick?.(this.Index)}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIText],[1,UE.UIText],[2,UE.UISprite],[3,UE.UIExtendToggle]],this.BtnBindInfo=[[3,this.bz_]]}Update(t,i){this.Pe=t,this.Index=i,this.Refresh()}Refresh(){this.RefreshName(),this.RefreshContent(),this.RefreshAudio()}RefreshName(){var t=this.Pe.TalkItem,t=SpeakerById_1.configSpeakerById.GetConfig(t.WhoId),i=t?PublicUtil_1.PublicUtil.GetConfigTextByTable(0,t.Id):void 0,t=t?PublicUtil_1.PublicUtil.GetConfigTextByTable(1,t.Id):void 0,t=StringUtils_1.StringUtils.IsEmpty(i)?t:i;LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(0),"PlotReview_1",t??"")}RefreshContent(){var t=this.Pe.TalkItem.TidTalk;t&&(t=PublicUtil_1.PublicUtil.GetFlowConfigLocalText(t),t=ModelManager_1.ModelManager.PlotModel.PlotTextReplacer.Replace(t))&&this.GetText(1).SetText(t)}RefreshAudio(){var t=this.Pe.TalkItem,t=(this.Tz_=t.PlayVoice??!1,this.GetSprite(2).SetUIActive(this.Tz_),this.Pe.IsPlaying?1:0);this.SetToggleState(t)}SetToggleState(t){this.GetExtendToggle(3).SetToggleState(t)}}class PlotReviewOptionItem extends UiPanelBase_1.UiPanelBase{constructor(){super(...arguments),this.Index=-1,this.Pe=void 0}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIText],[1,UE.UIText]]}OnStart(){LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(0),"PlotReview_2")}Update(t,i){this.Pe=t,this.Index=i,this.Refresh()}Refresh(){var t,i=this.Pe.TalkItem;!i||!(i=i.Options)||(t=this.Pe.OptionIndex)<0||(i=i[t],t=PublicUtil_1.PublicUtil.GetFlowConfigLocalText(i.TidTalkOption),t=ModelManager_1.ModelManager.PlotModel.PlotTextReplacer.Replace(t),this.GetText(1).SetText(t))}}
//# sourceMappingURL=PlotReviewDynamicScrollItem.js.map