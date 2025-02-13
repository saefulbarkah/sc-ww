
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CommonQteView=void 0;const UE=require("ue"),AudioDefine_1=require("../../../../Core/Audio/AudioDefine"),AudioSystem_1=require("../../../../Core/Audio/AudioSystem"),CustomPromise_1=require("../../../../Core/Common/CustomPromise"),Log_1=require("../../../../Core/Common/Log"),ResourceSystem_1=require("../../../../Core/Resource/ResourceSystem"),TimerSystem_1=require("../../../../Core/Timer/TimerSystem"),TimeUtil_1=require("../../../Common/TimeUtil"),ControllerHolder_1=require("../../../Manager/ControllerHolder"),ModelManager_1=require("../../../Manager/ModelManager"),InputDistributeController_1=require("../../../Ui/InputDistribute/InputDistributeController"),UiManager_1=require("../../../Ui/UiManager"),CombineKeyItem_1=require("../../BattleUi/Views/KeyItem/CombineKeyItem"),LevelSequencePlayer_1=require("../../Common/LevelSequencePlayer"),CommonQteViewBase_1=require("./CommonQteViewBase"),STOP_ANIM_TIME=500;class CommonQteView extends CommonQteViewBase_1.CommonQteViewBase{constructor(){super(...arguments),this.Qtt=void 0,this.xOi=void 0,this.OOi=void 0,this.d5l=void 0,this.DOt=void 0,this.SPe=void 0,this.NTe=0,this.NQa=!1,this.FQa="",this.iIl=-1,this.rIl=void 0,this.TYa=!1,this.kOi=()=>{this.IsQteEnd||(this.OOi?.SetUIActive(!0),this.SPe?.PlayLevelSequenceByName("Start"))},this.$xt=t=>{"Start"!==t||this.IsQteEnd||(this.SPe?.PlayLevelSequenceByName("Loop"),!this.IsPause&&0<this.NTe?this.FOi("Loop",1/this.NTe):this.FOi("Loop",0),this.IsMobile||(this.GetItem(1)?.SetUIActive(!0),this.Qtt?.Show()),this.IsQteStart=!0)},this.BOi=(t,i)=>{this.del()?0===i&&this.bOi():Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"通用Qte输入无效")}}GOi(){this.iIl=this.OpenParam,this.rIl=ModelManager_1.ModelManager.CommonQteModel.GetQteContext(this.iIl);var t=this.rIl?.GetAction();t&&(this.FQa=t),this.rIl?this.NTe=Math.max(0,this.rIl.Duration*TimeUtil_1.TimeUtil.Millisecond):this.NTe=0}OnRegisterComponent(){super.OnRegisterComponent(),this.IsMobile?this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIButtonComponent],[2,UE.UISprite]]:this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIItem],[2,UE.UIItem],[3,UE.UISprite],[4,UE.UIButtonComponent]]}async OnBeforeStartAsync(){this.GOi(),this.IsQteStart=!1,this.TYa=!1,this.IsMobile||(i=this.GetItem(2))&&(this.Qtt=new CombineKeyItem_1.CombineKeyItem,await this.Qtt.CreateByActorAsync(i.GetOwner()));var t,i=this.GetSprite(this.IsMobile?2:3);i&&(this.DOt=i,(t=this.rIl?.GetUiConfig())?.Icon&&await this.VQa(t?.Icon.ToAssetPathName()),i.SetUIActive(!0))}OnStart(){super.OnStart(),this.IsMobile?(this.OOi=this.GetItem(0),this.d5l=this.GetButton(1)):(this.OOi=this.GetItem(0),this.d5l=this.GetButton(4)),this.d5l?.OnPointDownCallBack.Bind(()=>{this.qOi()}),this.Hqe(),this.SPe=new LevelSequencePlayer_1.LevelSequencePlayer(this.OOi),this.SPe.BindSequenceCloseEvent(this.$xt),this.TYa=!0}OnAfterPlayStartSequence(){this.kOi()}OnBeforeDestroy(){super.OnBeforeDestroy(),!this.IsQteEnd&&this.rIl?.IsActive()&&ControllerHolder_1.ControllerHolder.CommonQteController.StopQte(this.rIl.HandleId),this.NOi(),this.d5l?.OnPointDownCallBack.Unbind(),this.SPe?.Clear(),this.rIl=void 0,this.iIl=-1,this.FQa=""}NOi(){this.xOi&&(TimerSystem_1.TimerSystem.Remove(this.xOi),this.xOi=void 0)}RefreshOnBattleUiVisibleChanged(){var t;2!==this.rIl?.Source&&(t=ModelManager_1.ModelManager.BattleUiModel.ChildViewData.GetChildVisible(20),this.SetActive(t))}async VQa(i){const e=new CustomPromise_1.CustomPromise;return i?ResourceSystem_1.ResourceSystem.LoadAsync(i,UE.LGUITexturePackerSpriteData,t=>{t?(this.DOt?.SetSprite(t,!1),e.SetResult()):Log_1.Log.CheckError()&&Log_1.Log.Error("CommonQte",67,"QTE加载图标失败",["iconPath",i])},100):(Log_1.Log.CheckError()&&Log_1.Log.Error("CommonQte",67,"QTE图标路径不存在"),e.SetResult()),e.Promise}OnAddEventListener(){super.OnAddEventListener(),this.HQa()}OnRemoveEventListener(){super.OnRemoveEventListener(),this.jQa()}HQa(){this.NQa||(this.NQa=!0,this.IsMobile)||(this.Qtt?.RefreshAction(this.FQa),InputDistributeController_1.InputDistributeController.BindActionIgnoreLimit(this.FQa,this.BOi),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"通用QTE绑定Action",["Action",this.FQa]))}jQa(){this.NQa&&(this.NQa=!1,this.IsMobile||(InputDistributeController_1.InputDistributeController.UnBindActionIgnoreLimit(this.FQa,this.BOi),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"通用QTE解绑Action",["Action",this.FQa])))}del(){return!!this.TYa}qOi(){this.del()?this.bOi():Log_1.Log.CheckDebug()&&Log_1.Log.Debug("CommonQte",67,"通用Qte输入无效")}bOi(){this.rIl&&this.rIl.IsActive()&&this.rIl.IsPending()&&this.rIl.Response()}HandleQteEnd(){this.xOi||(AudioSystem_1.AudioSystem.SetState(AudioDefine_1.STATEGROUP,AudioDefine_1.STATENORMAL),this.IsMobile||this.GetItem(1).SetUIActive(!1),this.SPe?.StopCurrentSequence(),this.rIl?.IsSuccess()?this.SPe?.PlayLevelSequenceByName("Success"):this.SPe?.PlayLevelSequenceByName("Fail"),this.xOi=TimerSystem_1.TimerSystem.Delay(()=>{this.xOi=void 0,UiManager_1.UiManager.CloseView("CommonQteView")},STOP_ANIM_TIME))}FOi(t,i){this.OOi.GetOwner().GetSequencePlayerByKey(t)?.SequencePlayer?.SetPlayRate(i)}OnQtePause(){this.xOi?.Pause(),this.FOi("Loop",0)}OnQteResume(){this.xOi?.IsPause()&&this.xOi?.Resume(),0<this.NTe?this.FOi("Loop",1/this.NTe):this.FOi("Loop",0)}OnTick(t){!this.IsQteStart||this.IsQteEnd||this.IsPause||this.rIl&&(this.rIl.UpdateTime(t),ModelManager_1.ModelManager.CommonQteModel?.IsRefreshMode)&&this.Hqe()}Hqe(){var t;this.rIl&&(t=this.rIl.GetUiConfig())&&(this.OOi.SetAnchorAlign(t.AnchorHAlign,t.AnchorVAlign),this.OOi.SetAnchorOffset(t.AnchorOffset))}}exports.CommonQteView=CommonQteView;
//# sourceMappingURL=CommonQteView.js.map