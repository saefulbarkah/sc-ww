
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LevelEventAdjustPlayerCamera=void 0;const Log_1=require("../../../Core/Common/Log"),CurveUtils_1=require("../../../Core/Utils/Curve/CurveUtils"),GameplayTagUtils_1=require("../../../Core/Utils/GameplayTagUtils"),Rotator_1=require("../../../Core/Utils/Math/Rotator"),Vector_1=require("../../../Core/Utils/Math/Vector"),IAction_1=require("../../../UniverseEditor/Interface/IAction"),CameraController_1=require("../../Camera/CameraController"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),LevelLoadingController_1=require("../../Module/LevelLoading/LevelLoadingController"),RenderUtil_1=require("../../Render/Utils/RenderUtil"),ConfigCurveUtils_1=require("../../Utils/ConfigCurveUtils"),LevelGeneralBase_1=require("../LevelGeneralBase"),IMMEDIATELY_FADE_CAMERA_TIME=.1,noAimGameplayTag=-1036349300;class LevelEventAdjustPlayerCamera extends LevelGeneralBase_1.LevelEventBase{constructor(){super(...arguments),this.yLe=void 0,this.jVl=()=>{this.FinishExecute(!0),EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.AdjustCameraSync,this.jVl)&&EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.AdjustCameraSync,this.jVl)}}ExecuteNew(e,t){const a=e;if(a)if(Log_1.Log.CheckInfo()&&Log_1.Log.Info("Event",38,"进入相机调整"),this.ILe(a)){let r=!1;switch(a.Option.Type){case IAction_1.EAdjustPlayerCamera.Horizontal:this.TLe(a,noAimGameplayTag),CameraController_1.CameraController.FightCamera.LogicComponent.ApplyCameraSpline(a.Option.SplineEntityId,a.Option.YawAngle,a.Option.PitchAngle,a.Option.FadeInTime),void 0!==a.Option.DepthOfField?CameraController_1.CameraController.FightCamera.LogicComponent.ApplyDepthOfField(a.Option.DepthOfField.Fstop,a.Option.DepthOfField.Distance,a.Option.DepthOfField.BlurAmount,a.Option.DepthOfField.BlurRadius):CameraController_1.CameraController.FightCamera.LogicComponent.ExitDepthOfField(),CameraController_1.CameraController.SequenceCamera.PlayerComponent.SetPlayCameraSequenceEnabled(!1),RenderUtil_1.RenderUtil.CloseVelocityScreenSizeCull();break;case IAction_1.EAdjustPlayerCamera.Dialog:this.TLe(a,noAimGameplayTag);let e=a.Option.PitchAngle,t=(void 0!==e&&(e=-e),a.Option.YawAngle);void 0!==t&&(t+=180);var o=this.yLe.DefaultConfig.get(1);CameraController_1.CameraController.FightCamera.LogicComponent.AdjustDialogueCamera(a.Option.CenterPos,e,t,o);break;case IAction_1.EAdjustPlayerCamera.Fixed:this.TLe(a,noAimGameplayTag);var o=Vector_1.Vector.Create(),i=Rotator_1.Rotator.Create();o.Set(a.Option.CenterPos.X??0,a.Option.CenterPos.Y??0,a.Option.CenterPos.Z??0),i.Set(a.Option.CenterRot.Y??0,a.Option.CenterRot.Z??0,a.Option.CenterRot.X??0),CameraController_1.CameraController.SceneCamera.PlayerComponent.EnterFixSceneSubCamera(o,i,a.Option.Fov,a.Option.FadeInTime,a.Option.FadeOutTime,1,void 0,a.Option.BlendIn?.Type,a.Option.BlendIn?.BlendExp,a.Option.BlendOut?.Type,a.Option.BlendOut?.BlendExp);break;case IAction_1.EAdjustPlayerCamera.Basic:a.Option.IsSynchronous&&(r=!0,EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.AdjustCameraSync,this.jVl)),this.TLe(a),a.Option.SightUi&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.SetCameraAimVisible,!0,0,a.Option.SightUi);break;case IAction_1.EAdjustPlayerCamera.AxisLock:o=a.Option.AxisRotate.Y??0,i=a.Option.AxisRotate.Z??0;if(this.yLe.DefaultConfig.set(45,o),this.yLe.DefaultConfig.set(46,o),this.yLe.DefaultConfig.set(60,i),this.yLe.DefaultConfig.set(61,i),a.Option.ScreenConfig)if(Math.abs(CameraController_1.CameraController.CameraRotator.Pitch-o)<=a.Option.ScreenConfig.TriggerAngle&&Math.abs(CameraController_1.CameraController.CameraRotator.Yaw-i)<=a.Option.ScreenConfig.TriggerAngle)this.TLe(a,noAimGameplayTag);else{o=a.Option.ScreenConfig.FadeInTime;const n=a.Option.ScreenConfig.FadeOutTime;LevelLoadingController_1.LevelLoadingController.OpenLoading(0,3,()=>{this.yLe.FadeInTime=IMMEDIATELY_FADE_CAMERA_TIME,this.TLe(a,noAimGameplayTag),LevelLoadingController_1.LevelLoadingController.CloseLoading(0,void 0,n)},o)}else this.TLe(a,noAimGameplayTag);break;case IAction_1.EAdjustPlayerCamera.FirstPerson:this.TLe(a,noAimGameplayTag),CameraController_1.CameraController.SetFirstPersonEnable(!0)}r||this.jVl()}else this.FinishExecute(!1);else this.FinishExecute(!1)}ILe(e){var t,r=CameraController_1.CameraController.FightCamera.LogicComponent.CameraConfigController;return r?(t=e.Option.Type,(r=r.GetCameraConfigByTag(GameplayTagUtils_1.GameplayTagUtils.GetTagIdByName(t)))?((this.yLe=r).Priority=e.Option.Priority,r.FadeInTime=e.Option.FadeInTime,r.FadeOutTime=e.Option.FadeOutTime,e.Option.FadeInCurve?r.FadeInCurve=ConfigCurveUtils_1.ConfigCurveUtils.CreateCurveByBaseCurve(e.Option.FadeInCurve):r.FadeInCurve=CurveUtils_1.CurveUtils.CreateCurve(0),e.Option.FadeOutCurve?r.FadeOutCurve=ConfigCurveUtils_1.ConfigCurveUtils.CreateCurveByBaseCurve(e.Option.FadeOutCurve):r.FadeOutCurve=CurveUtils_1.CurveUtils.CreateCurve(0),e.Option.ArmLength&&0!==e.Option.ArmLength?r.DefaultConfig.set(1,e.Option.ArmLength):r.DefaultConfig.delete(1),e.Option.MinumArmLength&&0!==e.Option.MinumArmLength?r.DefaultConfig.set(2,e.Option.MinumArmLength):r.DefaultConfig.delete(2),e.Option.MaxiumArmLength&&0!==e.Option.MaxiumArmLength?r.DefaultConfig.set(3,e.Option.MaxiumArmLength):r.DefaultConfig.delete(3),e.Option.Offset.X&&0!==e.Option.Offset.X?r.DefaultConfig.set(6,e.Option.Offset.X):r.DefaultConfig.delete(6),e.Option.Offset.Y&&0!==e.Option.Offset.Y?r.DefaultConfig.set(7,e.Option.Offset.Y):r.DefaultConfig.delete(7),e.Option.Offset.Z&&0!==e.Option.Offset.Z?r.DefaultConfig.set(8,e.Option.Offset.Z):r.DefaultConfig.delete(8),e.Option.Fov&&0!==e.Option.Fov?r.DefaultConfig.set(5,e.Option.Fov):r.DefaultConfig.delete(5),void 0===e.Option.IsDisableResetFocus?r.DefaultConfig.delete(56):r.DefaultConfig.set(56,e.Option.IsDisableResetFocus?1:0),!0):(Log_1.Log.CheckError()&&Log_1.Log.Error("Event",38,"没有找到对应Tag的镜头配置",["tag",t]),!1)):(Log_1.Log.CheckError()&&Log_1.Log.Error("Event",38,"CameraConfigController不存在"),!1)}TLe(e,t=void 0){CameraController_1.CameraController.FightCamera.LogicComponent?.CameraConfigController.EnableHookConfig(e.Option.Type,t)}OnUpdateGuarantee(){EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.AddGuaranteeAction,this.Type,this.BaseContext,{Name:"RestorePlayerCameraAdjustment"},!0)}}exports.LevelEventAdjustPlayerCamera=LevelEventAdjustPlayerCamera;
//# sourceMappingURL=LevelEventAdjustPlayerCamera.js.map