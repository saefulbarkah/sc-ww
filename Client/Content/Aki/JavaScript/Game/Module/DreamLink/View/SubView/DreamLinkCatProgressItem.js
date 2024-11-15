
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DreamLinkCatProgressItem=void 0;const puerts_1=require("puerts"),UE=require("ue"),Rotator_1=require("../../../../../Core/Utils/Math/Rotator"),UiPanelBase_1=require("../../../../Ui/Base/UiPanelBase"),DreamLinkController_1=require("../../DreamLinkController");class DreamLinkCatProgressItem extends UiPanelBase_1.UiPanelBase{constructor(){super(...arguments),this.dul=void 0,this.Qgl=void 0,this.Delegate=void 0,this.EffectDelegate=void 0,this.MaxValue=0,this.YFo=t=>{this.GetSprite(0).SetFillAmount(t/this.MaxValue),this.GetSprite(1).SetFillAmount(1-t/this.MaxValue),this.GetText(2).SetText(Math.floor(t).toString()),this.GetText(3).SetText(Math.floor(this.MaxValue-t).toString())},this.Kgl=t=>{this.GetSprite(5).SetFillAmount(t/this.MaxValue),this.GetSprite(4).SetFillAmount(t/this.MaxValue)}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UISprite],[1,UE.UISprite],[2,UE.UIText],[3,UE.UIText],[4,UE.UISprite],[5,UE.UISprite],[6,UE.UIItem]]}OnBeforeShow(){this.Delegate=(0,puerts_1.toManualReleaseDelegate)(this.YFo),this.EffectDelegate=(0,puerts_1.toManualReleaseDelegate)(this.Kgl),this.RefreshView()}OnBeforeDestroy(){this.dul?.IsValid()&&(this.dul.Kill(),this.dul=void 0),this.Qgl?.IsValid()&&(this.Qgl.Kill(),this.Qgl=void 0)}RefreshView(){var t,i=DreamLinkController_1.DreamLinkController.GetCurrentActivityData();i&&(t=i.GetActivityConfig())&&(this.MaxValue=t.DungeonMaxProgress,t=i.DungeonProgressRecord,this.GetSprite(0).SetFillAmount(t/this.MaxValue),this.GetText(2).SetText(t.toString()),this.GetText(3).SetText((this.MaxValue-t).toString()),this.GetSprite(1).SetFillAmount(1-t/this.MaxValue))}PlayAddProgressAnim(){var t=DreamLinkController_1.DreamLinkController.GetCurrentActivityData();if(t){var i=t.DungeonProgressRecord,t=t.GetCurrentCatProgress();if(i!==t){var s=i/this.MaxValue*360,s=Rotator_1.Rotator.Create(0,-s,0),e=this.GetSprite(4).GetOwner(),r=this.GetSprite(5).GetOwner(),h=(e.GetUIItem().SetUIRelativeRotation(s.ToUeRotator()),r.GetUIItem().SetUIRelativeRotation(s.ToUeRotator()),this.GetSprite(5).SetAlpha(1),this.GetSprite(4).SetAlpha(1),this.GetItem(6).GetOwner().K2_GetComponentsByClass(UE.LGUIPlayTweenComponent.StaticClass()));for(let t=0;t<h.Num();t++)h.Get(t).Play();DreamLinkController_1.DreamLinkController.RoguelikeSetDungeonProgressRequest(t),this.dul=UE.LTweenBPLibrary.FloatTo(this.RootActor,this.Delegate,i,t,1,0,0),this.Qgl=UE.LTweenBPLibrary.FloatTo(this.RootActor,this.EffectDelegate,0,t-i,1,0,0)}}}}exports.DreamLinkCatProgressItem=DreamLinkCatProgressItem;
//# sourceMappingURL=DreamLinkCatProgressItem.js.map