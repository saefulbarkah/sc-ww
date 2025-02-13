
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UiAssistant=exports.ESequenceEventName=void 0;const UE=require("ue"),CustomPromise_1=require("../../../../../Core/Common/CustomPromise"),LanguageSystem_1=require("../../../../../Core/Common/LanguageSystem"),Log_1=require("../../../../../Core/Common/Log"),Queue_1=require("../../../../../Core/Container/Queue"),Event_1=require("../../../../../Core/Event/Event"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),TimeUtil_1=require("../../../../Common/TimeUtil"),GlobalData_1=require("../../../../GlobalData"),ControllerHolder_1=require("../../../../Manager/ControllerHolder"),ModelManager_1=require("../../../../Manager/ModelManager"),UiManager_1=require("../../../../Ui/UiManager"),SequenceController_1=require("../SequenceController"),SequenceDefine_1=require("../SequenceDefine"),SeqBaseAssistant_1=require("./SeqBaseAssistant"),SUBTITLE_ACTION_PAUSE="Action",OPTION_ACTION_PAUSE="Option";var ESequenceEventName;!function(e){e[e.UpdateSeqSubtitle=0]="UpdateSeqSubtitle",e[e.HandlePlotOptionSelected=1]="HandlePlotOptionSelected",e[e.HandleSeqSubtitleEnd=2]="HandleSeqSubtitleEnd",e[e.HandleSubSequenceStop=3]="HandleSubSequenceStop",e[e.HandleIndependentSeqAudio=4]="HandleIndependentSeqAudio"}(ESequenceEventName=exports.ESequenceEventName||(exports.ESequenceEventName={}));class CacheDialogueData{constructor(e,t,o,r,l,i){this.Show=e,this.DialogueId=t,this.GuardTime=o,this.AudioDelay=r,this.AudioTransitionDuration=l,this.LanguageAudio=i}}class QteManger{constructor(){this.ukl=new Map,this.$El=e=>{ModelManager_1.ModelManager.SequenceModel.CurLevelSeqActor?.SequencePlayer?.SetPlayRate(1),ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.OnQteExecute(this.ukl.get(e.HandleId),!0),ControllerHolder_1.ControllerHolder.FlowController.EnableSkip(!0),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Plot",26,"[FlowSequence][PlotQte] Sequence Qte 结束：成功",["handleId",e.HandleId]),this.ukl.delete(e.HandleId)},this.XEl=e=>{ModelManager_1.ModelManager.SequenceModel.CurLevelSeqActor?.SequencePlayer?.SetPlayRate(1),ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.OnQteExecute(this.ukl.get(e.HandleId),!1),ControllerHolder_1.ControllerHolder.FlowController.EnableSkip(!0),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Plot",26,"[FlowSequence][PlotQte] Sequence Qte 结束：失败",["handleId",e.HandleId]),this.ukl.delete(e.HandleId)}}HandlePlotQte(e){if(0<this.ukl.size){for(const l of this.ukl.keys())ControllerHolder_1.ControllerHolder.CommonQteController.StopQte(l),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Plot",26,"[FlowSequence][PlotQte] sequence qte 重叠",["fail handle id",l]);this.ukl.clear()}var t,o=ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.OnQteStart(e.Id),r=ControllerHolder_1.ControllerHolder.CommonQteController.StartQte(o,this.$El,this.XEl,2);r?(t=r.Config.BaseConfig.TimeDilation??1,ModelManager_1.ModelManager.SequenceModel.CurLevelSeqActor?.SequencePlayer?.SetPlayRate(t),ControllerHolder_1.ControllerHolder.FlowController.EnableSkip(!1),this.ukl.set(r.HandleId,e.Id),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Plot",26,"[FlowSequence][PlotQte] Sequence Qte 开始",["talkId",e.Id],["QteId",o],["handleId",r.HandleId])):Log_1.Log.CheckError()&&Log_1.Log.Error("Plot",26,"[FlowSequence][PlotQte] Sequence Qte 失败",["QteId",o])}HandlePlotQteEnd(e){ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.OnQteEnd(e)}StopQte(){for(const e of this.ukl.keys())ControllerHolder_1.ControllerHolder.CommonQteController.StopQte(e);this.ukl.clear()}}class UiAssistant extends SeqBaseAssistant_1.SeqBaseAssistant{constructor(){super(...arguments),this.Event=new Event_1.Event(ESequenceEventName,8),this.qio=new Queue_1.Queue,this.Gio=!1,this.ckl=new QteManger,this.bZe=e=>{this.Promise?.SetResult(e),this.Promise=void 0},this.OnShowDialogue=(e,t,o,r,l,i)=>{3===this.Model.State&&(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Plot",26,"字幕事件触发",["bShow",e],["id",t],["language",i]),o=o/SequenceDefine_1.FRAME_PER_MILLISECOND,this.qio.Push(new CacheDialogueData(e,t,o,r,l,i)))}}async LoadPromise(){return this.Promise=new CustomPromise_1.CustomPromise,ControllerHolder_1.ControllerHolder.PlotController.WaitViewCallback(this.bZe),this.Promise?this.Promise.Promise:UiManager_1.UiManager.IsViewShow("PlotSubtitleView")}PreAllPlay(){if(this.Model.IsSubtitleUiUse&&this.Nio(),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.PlotDoingTextShow,this.Model.SequenceData.标识为演出制作中),0===this.Model.GetType())switch(LanguageSystem_1.LanguageSystem.PackageAudio){case"zh":this.Model.CurLanguageAudio=1;break;case"ja":this.Model.CurLanguageAudio=3;break;case"ko":this.Model.CurLanguageAudio=4;break;case"en":this.Model.CurLanguageAudio=2;break;default:this.Model.CurLanguageAudio=0}else this.Model.CurLanguageAudio=0}EachStop(){this.Event.Emit(ESequenceEventName.HandleSubSequenceStop)}AllStop(){this.Model.GetLastFadeEnd()&&(ModelManager_1.ModelManager.PlotModel.IsFadeIn=!0,ControllerHolder_1.ControllerHolder.LevelLoadingController.OpenLoading(0,3,void 0,0,ControllerHolder_1.ControllerHolder.LevelLoadingController.CameraFade.ColorSearch()))}End(){this.Model.IsSubtitleUiUse&&this.Oio(),ControllerHolder_1.ControllerHolder.PlotController.RemoveViewCallback(this.bZe),this.ckl.StopQte(),this.Promise&&(this.Promise.SetResult(!1),this.Promise=void 0)}Nio(){var e;!this.Gio&&(this.Gio=!0,e=UE.KuroRenderingRuntimeBPPluginBPLibrary.GetSubsystem(GlobalData_1.GlobalData.World,UE.MovieSceneDialogueSubsystem.StaticClass()))&&e.OnShowDialogue.Add(this.OnShowDialogue)}Oio(){var e;this.Gio&&(this.Gio=!1,e=UE.KuroRenderingRuntimeBPPluginBPLibrary.GetSubsystem(GlobalData_1.GlobalData.World,UE.MovieSceneDialogueSubsystem.StaticClass()))&&e.OnShowDialogue.Remove(this.OnShowDialogue)}TriggerAllSubtitle(){if(!this.Model.IsPaused)for(;0<this.qio.Size;){var e=this.qio.Pop();e&&this.kio(e?.Show,e?.DialogueId,e?.GuardTime,e?.AudioDelay,e?.AudioTransitionDuration,e?.LanguageAudio)}}kio(e,t,o,r,l,i){0!==i&&i!==this.Model.CurLanguageAudio||(e?this.Fio(t,o,r,l):this.Vio(t))}Fio(e,t,o,r){if("None"!==e){var e=parseInt(e),l=ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.CreateSubtitleFromTalkItem(e);if(l)switch(l.Type){case"QTE":this.ckl.HandlePlotQte(l);break;case"NoTextItem":this.mkl(l);break;default:this.HandlePlotSubtitle(l,t,o,r)}}}Vio(e){if("None"!==e){var t=parseInt(e),e=ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.CreateSubtitleFromTalkItem(t);if(e)switch(e.Type){case"QTE":this.ckl.HandlePlotQteEnd(t);break;case"NoTextItem":this.dkl(t);break;default:this.HandlePlotSubtitleEnd(t)}}}Hio(){this.Model.DefaultGuardTime=ModelManager_1.ModelManager.PlotModel.PlotGlobalConfig.GuardTime,this.Model.DefaultAudioDelay=ModelManager_1.ModelManager.PlotModel.PlotGlobalConfig.AudioDelay,this.Model.DefaultAudioTransitionDuration=ModelManager_1.ModelManager.PlotModel.PlotGlobalConfig.AudioTransitionDuration,this.Model.IsSubtitleConfigInit=!0}HandlePlotSubtitle(e,t,o,r){this.Model.IsSubtitleConfigInit||this.Hio(),this.Model.CurSubtitle.Subtitles=e,this.Model.CurSubtitle.GuardTime=t<0?0:0===t?this.Model.DefaultGuardTime*TimeUtil_1.TimeUtil.InverseMillisecond:t,this.Model.CurSubtitle.AudioDelay=o<0?0:0===o?this.Model.DefaultAudioDelay*TimeUtil_1.TimeUtil.InverseMillisecond:o,this.Model.CurSubtitle.AudioTransitionDuration=r<0?0:0===r?this.Model.DefaultAudioTransitionDuration*TimeUtil_1.TimeUtil.InverseMillisecond:r;e=this.Model.CurSubtitle;ControllerHolder_1.ControllerHolder.PlotController.PlotViewManager.OnUpdateSubtitle(e.Subtitles),ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.OnSubtitleStart(e.Subtitles.Id),this.Event.Emit(ESequenceEventName.UpdateSeqSubtitle,e),e.Subtitles?.PlayVoice&&"InnerVoice"!==(t=e.Subtitles).Style?.Type&&!t.NoMouthAnim&&SequenceController_1.SequenceController.TryApplyMouthAnim(e.Subtitles.PlotLineKey,e.Subtitles.WhoId)}async HandlePlotSubtitleEnd(e,t=!1){var o;ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.OnSubtitleEnd(e)&&(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Plot",26,"结束字幕"),ControllerHolder_1.ControllerHolder.PlotController.PlotViewManager.OnSubmitSubtitle(),(o=ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.SubtitleActionPromise?.Promise)?(ControllerHolder_1.ControllerHolder.SequenceController.PauseSequence(SUBTITLE_ACTION_PAUSE),this.Event.Emit(ESequenceEventName.HandleSeqSubtitleEnd,e,t),await o,this.Model.IsPlaying&&ControllerHolder_1.ControllerHolder.SequenceController.ResumeSequence(SUBTITLE_ACTION_PAUSE)):this.Event.Emit(ESequenceEventName.HandleSeqSubtitleEnd,e,t))}async HandleSelectedOption(e,t){this.HandlePlotSubtitleEnd(t,!0),ControllerHolder_1.ControllerHolder.SequenceController.PauseSequence(OPTION_ACTION_PAUSE),this.Event.Emit(ESequenceEventName.HandlePlotOptionSelected,e);var t=ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.SubtitleActionPromise?.Promise;t&&await t,this.Model.IsPlaying&&(ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.OnSelectOption(e),(t=ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.OptionActionPromise?.Promise)&&await t,this.Model.IsPlaying)&&ControllerHolder_1.ControllerHolder.SequenceController.ResumeSequence(OPTION_ACTION_PAUSE)}mkl(e){ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.OnSubtitleStart(e.Id)}dkl(e){ControllerHolder_1.ControllerHolder.FlowController.FlowSequence.OnSubtitleEnd(e)}}exports.UiAssistant=UiAssistant;
//# sourceMappingURL=UiAssistant.js.map