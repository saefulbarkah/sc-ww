
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LevelExperienceComponent=void 0;const UE=require("ue"),Log_1=require("../../../Core/Common/Log"),UiPanelBase_1=require("../../Ui/Base/UiPanelBase"),LguiUtil_1=require("../Util/LguiUtil"),ExpTweenComponent_1=require("./ExpTween/ExpTweenComponent"),LevelSequencePlayer_1=require("./LevelSequencePlayer");class LevelExperienceComponent extends UiPanelBase_1.UiPanelBase{constructor(t,i,s=!1){super(),this.ParentTemp=i,this.IsAddUp=s,this.ArrivedLevel=0,this.ArrivedFillAmount=0,this.ArrivedExp=0,this.MaxExpCacheMap=new Map,this.GetMaxExpFunction=void 0,this.NextItem=void 0,this.NextLevelText=void 0,this.CurrentLevelText=void 0,this.AddExp=void 0,this.ExpText=void 0,this.MaxItem=void 0,this.CurrentMaxItem=void 0,this.NextLevelArrow=void 0,this.ExpTweenComponent=void 0,this.ExpTweenFinishFunction=void 0,this.CurrentLevel=0,this.CurrentExp=0,this.CurrentMaxExp=0,this.CurrentMaxLevel=0,this.LimitLevel=0,this.FrontExp=0,this.NeedPreviewTween=!0,this.SPe=void 0,this.wLt=()=>{this.FrontExp=0,this.ExpTweenFinishFunction&&this.ExpTweenFinishFunction(),this.PlayEndLevelUpSequence()},this.CreateThenShowByActor(t.GetOwner())}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIText],[1,UE.UIText],[2,UE.UIItem],[4,UE.UISprite],[5,UE.UISprite],[6,UE.UISprite],[7,UE.UIText],[8,UE.UIText],[3,UE.UIItem],[9,UE.UIItem],[10,UE.UIItem]]}OnStart(){this.ExpTweenComponent=new ExpTweenComponent_1.ExpTweenComponent(this.GetSprite(4),this.GetSprite(5),this.GetSprite(6),this.ParentTemp,this.wLt),this.NextItem=this.GetItem(2),this.CurrentLevelText=this.GetText(0),this.NextLevelText=this.GetText(1),this.AddExp=this.GetText(7),this.ExpText=this.GetText(8),this.MaxItem=this.GetItem(3),this.CurrentMaxItem=this.GetItem(9),this.SPe=new LevelSequencePlayer_1.LevelSequencePlayer(this.RootItem),this.NextLevelArrow=this.GetItem(10)}UpdateCurrentExpState(t){this.ExpTweenComponent.SetCurrentSpriteActive(!0),this.ExpTweenComponent.SetAddFillAmount(t),this.ExpTweenComponent.SetNextSpriteActive(!1)}UpdateNextExp(i,s){if(s>=this.CurrentMaxLevel)this.UpdateNextState(i,i,s);else{let t=this.MaxExpCacheMap.get(s);t||(t=this.GetMaxExpFunction(s),this.MaxExpCacheMap.set(s,t)),i>=t?this.UpdateNextExp(i-t,s+1):this.UpdateNextState(i,t,s)}}PlayStartLevelUpSequence(t){this.ArrivedLevel!==t&&this.SPe.PlayLevelSequenceByName("Sle")}PlayEndLevelUpSequence(){this.SPe.PlayLevelSequenceByName("Sle02")}PlayPreviewExp(t,i){this.ExpTweenComponent.PlayPreviewExpTween(this.CurrentLevel,this.ArrivedLevel,t,this.CurrentMaxLevel,i)}UpdateNextState(t,i,s){this.PlayStartLevelUpSequence(s),this.SetNextLevel(s);i=t/i;this.SetMaxItemActive(s===this.CurrentMaxLevel),this.NeedPreviewTween?this.PlayPreviewExp(s,i):this.UpdateNextExpState(i),this.ArrivedExp=t,this.ArrivedFillAmount=i,this.ArrivedLevel=s}UpdateCurrentExp(t){this.SetNextLevelActive(!1);var t=this.CurrentExp+t,i=t/this.CurrentMaxExp;this.NeedPreviewTween?this.PlayPreviewExp(this.CurrentLevel,i):this.UpdateCurrentExpState(i),this.ArrivedLevel=this.CurrentLevel,this.ArrivedFillAmount=i,this.ArrivedExp=t}UpdateNextExpState(t){this.ExpTweenComponent.SetCurrentSpriteActive(!1),this.ExpTweenComponent.SetAddFillAmount(1),this.ExpTweenComponent.SetNextSpriteActive(!0),this.ExpTweenComponent.SetNextFillAmount(t)}SetNextLevelActive(t){this.NextItem.SetUIActive(t),this.NextLevelArrow&&this.NextLevelArrow.SetUIActive(t)}SetNextLevel(t){this.SetNextLevelActive(!0),this.NextLevelText.SetText(t.toString())}SetMaxItemActive(t){this.MaxItem.SetUIActive(t)}SetCurrentMaxItemActive(t){this.CurrentMaxItem.SetUIActive(t)}StageMaxExp(t){if(!this.GetMaxExpFunction)return Log_1.Log.CheckError()&&Log_1.Log.Error("LevelExperienceComponent",11,"Unregistered SetMaxExpFunction CallBack"),0;let i=this.MaxExpCacheMap.get(t);return i=i||this.GetMaxExpFunction(t)}AddUpMaxExp(i){let s=0;for(let t=1;t<=i;t++)s+=this.StageMaxExp(t);return s}GetMaxExp(t){return this.IsAddUp?this.AddUpMaxExp(t):this.StageMaxExp(t)}UpdateViewState(){var t,i;this.CurrentLevelText.SetText(this.CurrentLevel.toString()),this.ExpTweenComponent.SetCurrentSpriteActive(!0),this.ExpTweenComponent.SetNextSpriteActive(!1),this.SetNextLevelActive(!1),this.AddExp.SetUIActive(!1),this.SetMaxItemActive(!1),this.SetCurrentMaxItemActive(this.CurrentLevel===this.LimitLevel),this.CurrentLevel===this.CurrentMaxLevel?(this.ExpTweenComponent.SetCurrentFillAmount(1),this.ExpTweenComponent.SetAddFillAmount(1),this.CurrentMaxExp=this.StageMaxExp(this.CurrentLevel-1),t=this.GetMaxExp(this.CurrentLevel-1),LguiUtil_1.LguiUtil.SetLocalText(this.ExpText,"ExpShow",t,t)):(this.CurrentMaxExp=this.StageMaxExp(this.CurrentLevel),t=this.CurrentExp/this.CurrentMaxExp,this.ExpTweenComponent.SetCurrentFillAmount(t),this.ExpTweenComponent.SetAddFillAmount(t),t=this.GetMaxExp(this.CurrentLevel),i=this.IsAddUp?this.AddUpMaxExp(this.CurrentLevel-1)+this.CurrentExp:this.CurrentExp,LguiUtil_1.LguiUtil.SetLocalText(this.ExpText,"ExpShow",i,t))}UpdateComponent(t,i,s,h=void 0){this.ArrivedLevel=t,this.CurrentLevel=t,this.CurrentMaxLevel=i,this.CurrentExp=s,this.LimitLevel=h,this.UpdateViewState()}UpdateExp(t,i=!0){return!(this.IsInMax()&&t>this.FrontExp||(this.Wxt(t,i),0))}Wxt(t,i=!0){this.NeedPreviewTween=i,this.FrontExp=t,LguiUtil_1.LguiUtil.SetLocalText(this.AddExp,"AddExp",Math.floor(t)),this.AddExp.SetUIActive(0<t),this.CurrentExp+t>=this.CurrentMaxExp?(i=this.CurrentExp+t-this.CurrentMaxExp,this.UpdateNextExp(i,this.CurrentLevel+1)):this.UpdateCurrentExp(t)}PlayExpTween(){let t=1;var i=this.CurrentExp/this.CurrentMaxExp;this.ArrivedLevel>this.CurrentLevel&&(1!==this.ArrivedFillAmount||0!=i)&&t++,this.ExpTweenComponent.PlayExpTween(t,this.ArrivedFillAmount)}IsInMax(){return this.ArrivedLevel===this.CurrentMaxLevel}GetArrivedExp(){return this.ArrivedExp}GetArrivedLevel(){return this.ArrivedLevel}GetCurrentLevel(){return this.CurrentLevel}GetCurrentMaxLevel(){return this.CurrentMaxLevel}SetTweenFinishFunction(t){this.ExpTweenFinishFunction=t}SetMaxExpFunction(t){this.GetMaxExpFunction=t}ClearMaxExpCache(){this.MaxExpCacheMap.clear()}OnBeforeDestroy(){this.MaxExpCacheMap.clear(),this.ExpTweenComponent&&this.ExpTweenComponent.Destroy(),this.NextItem=void 0,this.NextLevelText=void 0,this.CurrentLevelText=void 0,this.AddExp=void 0,this.ExpText=void 0,this.MaxItem=void 0,this.SPe=void 0}}exports.LevelExperienceComponent=LevelExperienceComponent;
//# sourceMappingURL=LevelExperienceComponent.js.map