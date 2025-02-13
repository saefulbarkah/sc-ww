
"use strict";var __decorate=this&&this.__decorate||function(e,t,i,s){var r,h=arguments.length,o=h<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;0<=n;n--)(r=e[n])&&(o=(h<3?r(o):3<h?r(t,i,o):r(t,i))||o);return 3<h&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(exports,"__esModule",{value:!0}),exports.CharacterDriveVehicleComponent=void 0;const UE=require("ue"),Log_1=require("../../../../../Core/Common/Log"),EntityComponent_1=require("../../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../../Core/Entity/RegisterComponent"),ResourceSystem_1=require("../../../../../Core/Resource/ResourceSystem"),TimerSystem_1=require("../../../../../Core/Timer/TimerSystem"),Quat_1=require("../../../../../Core/Utils/Math/Quat"),Transform_1=require("../../../../../Core/Utils/Math/Transform"),Vector_1=require("../../../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../../../Core/Utils/MathUtils"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),EffectContext_1=require("../../../../Effect/EffectContext/EffectContext"),EffectSystem_1=require("../../../../Effect/EffectSystem"),GlobalData_1=require("../../../../GlobalData"),ControllerHolder_1=require("../../../../Manager/ControllerHolder"),ModelManager_1=require("../../../../Manager/ModelManager"),VehicleInfoDefines_1=require("../../../Vehicle/Common/VehicleInfoDefines"),CharacterUnifiedStateTypes_1=require("./Abilities/CharacterUnifiedStateTypes"),CustomMovementDefine_1=require("./Move/CustomMovementDefine"),DEFAULT_SITTING_HEIGHT=45,ENTER_VEHICLE_SAFETY_DIST_SQUARED=9e6,PRE_ENTER_EFFECT_PATH="/Game/Aki/Effect/EffectGroup/SB1Gongduola3/DA_Fx_Group_ChuanSong.DA_Fx_Group_ChuanSong",POST_ENTER_EFFECT_PATH="/Game/Aki/Effect/EffectGroup/SB1Gongduola3/DA_Fx_Group_ChuanSongEnd.DA_Fx_Group_ChuanSongEnd",PRE_ENTER_MAT_EFFECT_PATH="/Game/Aki/Effect/MaterialController/Common/SB1GongDuoLa3/DA_Fx_HidePlayer.DA_Fx_HidePlayer",POST_ENTER_MAT_EFFECT_PATH="/Game/Aki/Effect/MaterialController/Common/SB1GongDuoLa3/DA_Fx_Group_ShowPlayer.DA_Fx_Group_ShowPlayer";let CharacterDriveVehicleComponent=class CharacterDriveVehicleComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.ActorComp=void 0,this.MoveComp=void 0,this.UnifiedStateComp=void 0,this.TagComp=void 0,this.VehicleInfo=void 0,this.AttachOffset=Vector_1.Vector.Create(),this.SeatReletiveTrans=Transform_1.Transform.Create(),this.HasWaterEffect=!0,this.PreEnterEffectTime=0,this.PreEnterMatEffect=void 0,this.PostEnterMatEffect=void 0,this.WaitPreEnterEffectHandle=void 0,this.EntityHandle=void 0,this.TmpVector1=Vector_1.Vector.Create(),this.TmpVector2=Vector_1.Vector.Create(),this.TmpQuat=Quat_1.Quat.Create(),this.OnEnterVehicleWrapper=e=>{this.OnEnterVehicle(e)},this.OnLeaveVehicleWrapper=e=>{this.OnLeaveVehicle(e)},this.OnTeleportChangleLocation=()=>{2===this.VehicleInfo?.ExitType&&(this.VehicleInfo.VehicleEntity?.GetComponent(227))?.Leave(this.Entity,1)}}get IsDriver(){return!!this.VehicleInfo?.IsDriver}get IsOnVehicle(){return!!this.VehicleInfo}get VehicleType(){return this.VehicleInfo?.VehicleType}get VehicleEntity(){return this.VehicleInfo?.VehicleEntity}get Seat(){return this.VehicleInfo?.Seat??-1}get CanLeave(){return!!this.VehicleEntity?.GetComponent(231)?.CheckIfCanLeave()}get CanSprint(){return!!this.VehicleEntity?.GetComponent(231)?.CheckIfCanSprint()}get CanRiderSharing(){return!!this.VehicleEntity?.GetComponent(231)?.CheckIfCanRiderSharing()}IsVehicleType(e){return this.VehicleInfo?.VehicleType===e}IsEnableLongPressLeave(){return!0}OnStart(){return this.ActorComp=this.Entity.GetComponent(3),this.MoveComp=this.Entity.GetComponent(44),this.UnifiedStateComp=this.Entity.GetComponent(99),this.TagComp=this.Entity.GetComponent(200),this.EntityHandle=ModelManager_1.ModelManager.CreatureModel.GetEntityById(this.Entity.Id),this.InitEnterEffectAsset(),EventSystem_1.EventSystem.AddWithTarget(this.Entity,EventDefine_1.EEventName.TeleportChangeLocation,this.OnTeleportChangleLocation),EventSystem_1.EventSystem.AddWithTarget(this.Entity,EventDefine_1.EEventName.OnEnterVehicle,this.OnEnterVehicleWrapper),EventSystem_1.EventSystem.AddWithTarget(this.Entity,EventDefine_1.EEventName.OnLeaveVehicle,this.OnLeaveVehicleWrapper),!0}OnEnd(){return EventSystem_1.EventSystem.RemoveWithTarget(this.Entity,EventDefine_1.EEventName.TeleportChangeLocation,this.OnTeleportChangleLocation),EventSystem_1.EventSystem.RemoveWithTarget(this.Entity,EventDefine_1.EEventName.OnEnterVehicle,this.OnEnterVehicleWrapper),EventSystem_1.EventSystem.RemoveWithTarget(this.Entity,EventDefine_1.EEventName.OnLeaveVehicle,this.OnLeaveVehicleWrapper),this.VehicleInfo&&(this.VehicleInfo.VehicleEntity?.GetComponent(227))?.Leave(this.Entity),!0}InitEnterEffectAsset(){ResourceSystem_1.ResourceSystem.LoadAsync(PRE_ENTER_MAT_EFFECT_PATH,UE.PD_CharacterControllerData_C,e=>{e?.IsValid()&&(this.PreEnterMatEffect=e,this.PreEnterEffectTime=e.LoopTime.Start+e.LoopTime.Loop)}),ResourceSystem_1.ResourceSystem.LoadAsync(POST_ENTER_MAT_EFFECT_PATH,UE.PD_CharacterControllerDataGroup_C,e=>{e?.IsValid()&&(this.PostEnterMatEffect=e)})}OnEnterVehicle(e){this.VehicleInfo=e,this.MoveComp.IsSpecialMove=!0,this.SetWaterEffect(!1),this.EnterVehiclePerform(e)}OnLeaveVehicle(e){this.LeaveVehiclePerform(e),this.VehicleInfo=void 0,this.MoveComp.IsSpecialMove=!1,this.SetWaterEffect(!0)}EnterVehiclePerform(e){this.PreEnterVehiclePerform(e),0<this.PreEnterEffectTime?this.WaitPreEnterEffectHandle=TimerSystem_1.TimerSystem.Delay(()=>{this.WaitPreEnterEffectHandle=void 0,this.ClearCurrentState(),this.AttachAndSetPassengerTransform(),this.PostEnterVehiclePerform(e)},this.PreEnterEffectTime*MathUtils_1.MathUtils.SecondToMillisecond):(this.ClearCurrentState(),this.AttachAndSetPassengerTransform(),this.PostEnterVehiclePerform(e))}LeaveVehiclePerform(e){this.WaitPreEnterEffectHandle&&(TimerSystem_1.TimerSystem.Remove(this.WaitPreEnterEffectHandle),this.WaitPreEnterEffectHandle=void 0,this.AttachAndSetPassengerTransform()),this.ActorComp.Actor.K2_DetachFromActor(1,1,1),this.SeatReletiveTrans.Reset(),this.RestoreState()}ClearCurrentState(){this.ActorComp.ClearInput(),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnBeforeAttachVehicle),this.ActorComp.Actor.KuroSetMovementMode({Mode:6,CustomMode:CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_RIDE,Context:"[CharacterDriveVehicleComponent.ClearCurrentState]"}),this.UnifiedStateComp?.SetMoveState(this.GetMoveStateFromVehicleType(this.VehicleType)),this.IgnoreVehicleCollision(!0)}IgnoreVehicleCollision(e){if(this.VehicleInfo){var t=this.VehicleInfo.VehicleEntity;switch(this.VehicleInfo.VehicleType){case"SceneItemAutoMoveVehicle":t.GetComponent(197).Owner?.IgnoreActorWhenMoving(this.ActorComp.Actor,e,!0);break;case"NpcVehicle":t.GetComponent(3).Actor.IgnoreActorWhenMoving(this.ActorComp.Actor,e,!0);break;default:var i=t.GetComponent(228);i.Actor.IgnoreActorWhenMoving(this.ActorComp.Actor,e,!0),i.Actor.PlatformActor?.IgnoreActorWhenMoving(this.ActorComp.Actor,e,!0)}}}RestoreState(){this.ActorComp.Actor.KuroSetMovementMode({Mode:3,Context:"[CharacterDriveVehicleComponent.RestoreState]"}),this.IgnoreVehicleCollision(!1)}SetWaterEffect(e){this.HasWaterEffect!==e&&(this.HasWaterEffect=e,this.ActorComp.Actor.CharRenderingComponent?.SetNoWater(!e))}PreEnterVehiclePerform(e){EffectSystem_1.EffectSystem.SpawnEffect(GlobalData_1.GlobalData.World,this.ActorComp?.ActorTransform,PRE_ENTER_EFFECT_PATH,"CharacterDriveVehicle.PlayPreOnBoardEffect",new EffectContext_1.EffectContext(this.Entity.Id)),this.PreEnterMatEffect?.IsValid()&&this.ActorComp.Actor.CharRenderingComponent.AddMaterialControllerData(this.PreEnterMatEffect)}PostEnterVehiclePerform(e){EffectSystem_1.EffectSystem.SpawnEffect(GlobalData_1.GlobalData.World,this.ActorComp?.ActorTransform,POST_ENTER_EFFECT_PATH,"CharacterDriveVehicle.PlayPostOnBoardEffect",new EffectContext_1.EffectContext(this.Entity.Id)),this.PostEnterMatEffect?.IsValid()&&this.ActorComp.Actor.CharRenderingComponent.AddMaterialControllerDataGroup(this.PostEnterMatEffect)}AttachAndSetPassengerTransform(){if(this.VehicleInfo){var t,i,s,r=this.VehicleInfo.VehicleEntity.GetComponent(1);let e=void 0;switch(this.VehicleInfo.VehicleType){case"NpcVehicle":e=this.VehicleInfo.VehicleEntity.GetComponent(3)?.Actor?.Mesh;break;case"SceneItemAutoMoveVehicle":e=this.VehicleInfo.VehicleEntity.GetComponent(264)?.SkeletonMeshComponent;break;default:e=this.VehicleInfo.VehicleEntity.GetComponent(228)?.Actor?.Mesh}e&&r?(t=VehicleInfoDefines_1.VehicleInfoDefines.GetSeatSocketName(this.VehicleInfo.Seat),i=e.D_GetSocketTransform(t),s=r.ActorTransform.GetRelativeTransform(i),this.SeatReletiveTrans.FromUeTransform(s),this.TmpVector1.FromUeVector(i.GetLocation()),this.TmpVector1.Equals(Vector_1.Vector.ZeroVectorProxy)&&(this.TmpVector1.DeepCopy(r.ActorLocationProxy),Log_1.Log.CheckWarn())&&Log_1.Log.Warn("Vehicle",50,"进入载具设置位置时找不到Socket",["VehiclePbId",r?.CreatureData.GetPbDataId()],["PassengerPbId",this.ActorComp?.CreatureData.GetPbDataId()],["SocketName",t]),this.TmpVector1.Z+=this.ActorComp.HalfHeight-DEFAULT_SITTING_HEIGHT,this.TmpQuat.FromUeQuat(i.GetRotation()),this.TmpQuat.RotateVector(this.AttachOffset,this.TmpVector2),this.TmpVector1.AdditionEqual(this.TmpVector2),this.CheckEnterVehicleSafety(this.TmpVector1),this.ActorComp.SetActorLocationAndRotation(this.TmpVector1.ToUeVector(),this.TmpQuat.Rotator().ToUeRotator(),"进入载具",!1),this.ActorComp.Actor.K2_AttachToComponent(e,t,1,1,1,!0)):Log_1.Log.CheckError()&&Log_1.Log.Error("Vehicle",50,"进入载具设置位置时找不到载具的ActorComp或Mesh",["VehiclePbId",r?.CreatureData.GetPbDataId()],["VehicleType",this.VehicleInfo.VehicleType])}}GetSeatTransform(e){var t,i;return!!this.VehicleInfo&&(i="NpcVehicle"!==this.VehicleInfo.VehicleType?this.VehicleInfo.VehicleEntity.GetComponent(228):this.VehicleInfo.VehicleEntity.GetComponent(3),t=VehicleInfoDefines_1.VehicleInfoDefines.GetSeatSocketName(this.VehicleInfo.Seat),i=i.Actor.Mesh.D_GetSocketTransform(t),e.FromUeTransform(i),!0)}GetMoveStateFromVehicleType(e){switch(e){case"Gongduola":return CharacterUnifiedStateTypes_1.ECharMoveState.Gongduola;case"NpcVehicle":return CharacterUnifiedStateTypes_1.ECharMoveState.NpcVehicle;default:return CharacterUnifiedStateTypes_1.ECharMoveState.Other}}CheckEnterVehicleSafety(e){var t,i;return!UE.KuroStaticLibrary.IsEditor(GlobalData_1.GlobalData.World)||!this.ActorComp?.IsRoleAndCtrlByMe||!(t=GlobalData_1.GlobalData.World.GetWorld())||!(!ControllerHolder_1.ControllerHolder.GameModeController.IsInInstance()||ModelManager_1.ModelManager.GameModeModel.UseWorldPartition)||(this.ActorComp.ActorLocationProxy.Subtraction(e,this.TmpVector2),this.TmpVector2.SizeSquared2D()<ENTER_VEHICLE_SAFETY_DIST_SQUARED)||(e=this.VehicleEntity?.GetComponent(1),i="[Vehicle][YJX]检测到当前从较远位置进入载具，有安全风险请修改配置",i=(i=(i+=`[PassengerId][${this.ActorComp?.CreatureData.GetPbDataId()}]`)+`[VehicleId][${e?.CreatureData.GetPbDataId()}]`)+`[Dist][${this.TmpVector2.Size2D()}]`,UE.KismetSystemLibrary.PrintString(t,i,!0,!1,new UE.LinearColor(1,0,0,1),10),Log_1.Log.CheckError()&&Log_1.Log.Error("Vehicle",50,"检测到当前从较远位置进入载具，有安全风险请修改配置",["PassengerId",this.ActorComp?.CreatureData.GetPbDataId()],["VehicleId",e?.CreatureData.GetPbDataId()],["Dist",this.TmpVector2.Size2D()]),!1)}};CharacterDriveVehicleComponent=__decorate([(0,RegisterComponent_1.RegisterComponent)(223)],CharacterDriveVehicleComponent),exports.CharacterDriveVehicleComponent=CharacterDriveVehicleComponent;
//# sourceMappingURL=CharacterDriveVehicleComponent.js.map