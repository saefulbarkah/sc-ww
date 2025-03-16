
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UiCameraPhotographerStructure=void 0;const UE=require("ue"),ActorSystem_1=require("../../../../Core/Actor/ActorSystem"),CameraController_1=require("../../../Camera/CameraController"),Global_1=require("../../../Global"),PhotographDefine_1=require("../../Photograph/PhotographDefine"),UiCameraStructure_1=require("./UiCameraStructure");class UiCameraPhotographerStructure extends UiCameraStructure_1.UiCameraStructure{constructor(){super(...arguments),this.$Uo=void 0}OnSpawnStructureActor(){var t=new UE.TransformDouble(new UE.Quat(0),new UE.VectorDouble(0),new UE.VectorDouble(1,1,1));return this.$Uo=ActorSystem_1.ActorSystem.Get(UE.TsPhotographer_C.StaticClass(),t,void 0),this.$Uo.SetTickableWhenPaused(!0),this.$Uo.SetActorTickEnabled(!0),this.$Uo.Initialize(),this.$Uo.CameraArm.SetTickableWhenPaused(!0),this.$Uo}OnSetSpringArmComponent(){return this.$Uo.CameraArm}OnDestroy(){this.YUo()}OnActivate(){var t=this.JUo(),r=this.DWi(),e=Global_1.Global.BaseCharacter,r=(r.SetIsDitherEffectEnable(!1),e.SetDitherEffect(1,1),e.Mesh.D_GetSocketLocation(PhotographDefine_1.SPAWN_SOCKET_NAME)),e=t.D_GetTransform();this.$Uo.SetPlayerSourceLocation(r),this.$Uo.SetCameraInitializeTransform(e),this.$Uo.ActivateCamera(this.CameraActor)}OnDeactivate(){this.$Uo.DeactivateCamera()}YUo(){this.$Uo?.IsValid()&&(this.$Uo.DeactivateCamera(),ActorSystem_1.ActorSystem.Put("UiCameraPhotographerStructure.DestroyPhotographer",this.$Uo)),this.$Uo=void 0}DWi(){var t=CameraController_1.CameraController.FightCamera;if(t)return t.GetComponent(5)}JUo(){var t=CameraController_1.CameraController.FightCamera;if(t){t=t.GetComponent(4);if(t.Valid)return t.CameraActor}}SetPlayerSourceLocation(t){this.$Uo.SetPlayerSourceLocation(t)}SetCameraInitializeTransform(t){this.$Uo.SetCameraInitializeTransform(t)}GetCameraInitializeTransform(){return this.$Uo.GetCameraInitializeTransform()}SetCameraTransform(t){this.$Uo.SetCameraTransform(t)}MoveUp(t){this.$Uo.MoveUp(t)}MoveRight(t){this.$Uo.MoveRight(t)}AddCameraArmPitchInput(t){this.$Uo.AddCameraArmPitchInput(t)}AddCameraArmYawInput(t){this.$Uo.AddCameraArmYawInput(t)}SetFov(t){this.$Uo.SetFov(t)}GetFov(){return this.$Uo.GetFov()}ResetCamera(){this.$Uo.ResetCamera()}SetCameraLUT(t){this.$Uo.SetCameraLUT(t)}}exports.UiCameraPhotographerStructure=UiCameraPhotographerStructure;
//# sourceMappingURL=UiCameraPhotographerStructure.js.map