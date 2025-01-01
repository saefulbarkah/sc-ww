
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CameraAssistant=void 0;const UE=require("ue"),ActorSystem_1=require("../../../../../Core/Actor/ActorSystem"),Log_1=require("../../../../../Core/Common/Log"),CameraBlueprintFunctionLibrary_1=require("../../../../Camera/CameraBlueprintFunctionLibrary"),CameraController_1=require("../../../../Camera/CameraController"),ControllerHolder_1=require("../../../../Manager/ControllerHolder"),ModelManager_1=require("../../../../Manager/ModelManager"),UiCameraPostEffectComponent_1=require("../../../UiCamera/UiCameraComponent/UiCameraPostEffectComponent"),UiCameraManager_1=require("../../../UiCamera/UiCameraManager"),SequenceDefine_1=require("../SequenceDefine"),SeqBaseAssistant_1=require("./SeqBaseAssistant");class CameraAssistant extends SeqBaseAssistant_1.SeqBaseAssistant{constructor(){super(...arguments),this.aio=!1,this.dYs=void 0,this.CYs=void 0}PreAllPlay(){var e;this.Model.IsViewTargetControl&&(e=this.Model.SequenceData.CameraBlendInTime,CameraController_1.CameraController.EnterCameraMode(1,e),this.aio=!0,ModelManager_1.ModelManager.PlotModel.PlotConfig.IsPreStreaming)&&(this.dYs||(this.dYs=ActorSystem_1.ActorSystem.Spawn(UE.BP_StreamingSourceActor_C.StaticClass(),new UE.TransformDouble,void 0)),this.CYs||(this.CYs=ActorSystem_1.ActorSystem.Spawn(UE.BP_StreamingSourceActor_C.StaticClass(),new UE.TransformDouble,void 0),e=ModelManager_1.ModelManager.CameraModel.SequenceCamera.DisplayComponent.CineCamera,this.CYs.K2_AttachToActor(e,void 0,2,1,1,!1)))}PreEachPlay(){var e=UE.NewArray(UE.Actor),r=ModelManager_1.ModelManager.CameraModel.SequenceCamera.DisplayComponent.CineCamera;r.ResetSeqCineCamSetting(),e.Add(r),this.Model.CurLevelSeqActor.SetBindingByTag(SequenceDefine_1.CAMERA_TAG,e,!1,!0),CameraController_1.CameraController.SequenceCamera.DisplayComponent.CineCamera.D_K2_SetActorTransform(ModelManager_1.ModelManager.CameraModel.CameraTransform,!1,void 0,!0)}EachStop(){var e,r,a,o=ModelManager_1.ModelManager.CameraModel.SequenceCamera.DisplayComponent.CineCamera;this.Model.Config.KeepCamera&&(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Plot",26,"剧情Seq结束时相机状态: KeepCamera"),this.aio=!1,(e=ModelManager_1.ModelManager.CameraModel).SaveSeqCamera(),(e=e.GetSavedSeqCameraThings())||Log_1.Log.CheckError()&&Log_1.Log.Error("Camera",58,"读取Sequence相机信息时，信息不存在"),(r=UiCameraManager_1.UiCameraManager.Get()).SetWorldLocation(e.CameraLocation),r.SetWorldRotation(e.CameraRotation),(a=r.GetUiCameraComponent(UiCameraPostEffectComponent_1.UiCameraPostEffectComponent)).SetCameraAperture(e.CurrentAperture),a.SetCameraFocalDistance(e.FocusSettings.ManualFocusDistance),a.SetCameraFieldOfView(e.FieldOfView),CameraController_1.CameraController.ExitCameraMode(1),r.Enter()),o.ResetSeqCineCamSetting()}AllStop(){var e;this.Model.IsViewTargetControl&&!this.Model.Config.KeepCamera&&(this.Model.Config.ResetCamera?(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Plot",26,"剧情Seq结束时相机状态: ResetCamera"),CameraBlueprintFunctionLibrary_1.default.ResetFightCameraPitchAndArmLength()):(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Plot",26,"剧情Seq结束时相机状态: 继承seq相机"),(e=CameraController_1.CameraController.SequenceCamera.DisplayComponent.CineCamera.K2_GetActorRotation()).Roll=0,CameraController_1.CameraController.FightCamera.LogicComponent.SetRotation(e)),e=this.Model.SequenceData.CameraBlendOutTime,this.aio=!1,0===e&&ControllerHolder_1.ControllerHolder.SequenceController.DisableMotionBlurAwhile(),CameraController_1.CameraController.ExitCameraMode(1,e,0,0))}End(){this.aio&&CameraController_1.CameraController.ExitCameraMode(1),ModelManager_1.ModelManager.CameraModel.SequenceCamera.DisplayComponent.CineCamera.ResetSeqCineCamSetting(),this.dYs&&this.dYs.WorldPartitionStreamingSource?.DisableStreamingSource(),this.CYs&&this.CYs.WorldPartitionStreamingSource?.DisableStreamingSource()}CalcPreloadLocation(){}}exports.CameraAssistant=CameraAssistant;
//# sourceMappingURL=CameraAssistant.js.map