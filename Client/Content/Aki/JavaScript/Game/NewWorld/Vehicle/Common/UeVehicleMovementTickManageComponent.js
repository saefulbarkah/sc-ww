
"use strict";var __decorate=this&&this.__decorate||function(t,e,i,s){var h,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;0<=r;r--)(h=t[r])&&(n=(o<3?h(n):3<o?h(e,i,n):h(e,i))||n);return 3<o&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(exports,"__esModule",{value:!0}),exports.UeVehicleMovementTickManageComponent=void 0;const UE=require("ue"),Time_1=require("../../../../Core/Common/Time"),EntityComponent_1=require("../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../Core/Entity/RegisterComponent"),Rotator_1=require("../../../../Core/Utils/Math/Rotator"),Vector_1=require("../../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../../Core/Utils/MathUtils"),MIN_MODEL_BUFFER_TIME=60;let UeVehicleMovementTickManageComponent=class UeVehicleMovementTickManageComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.ActorComp=void 0,this.VehicleMovement=void 0,this.AnimComp=void 0,this.VehicleMoveComp=void 0,this.DebugComp=void 0,this.CacheActorLocation=Vector_1.Vector.Create(),this.CacheActorRotator=Rotator_1.Rotator.Create(),this.ForbiddenTickPoseInternal=!1,this.Frozen=!1,this.OnEntityBudgetTickEnableChange=t=>{}}static get Dependencies(){return[214]}get ForbiddenTickPose(){return this.ForbiddenTickPoseInternal}set ForbiddenTickPose(t){this.ForbiddenTickPoseInternal!==t&&(this.ForbiddenTickPoseInternal=t)}OnInit(){return!0}OnStart(){if(this.ActorComp=this.Entity.GetComponent(214),this.VehicleMoveComp=this.Entity.GetComponent(216),this.AnimComp=this.Entity.GetComponent(215),this.DebugComp=this.Entity.GetComponent(27),this.VehicleMovement=this.ActorComp.Owner.GetComponentByClass(UE.KuroVehicleMovementComponent.StaticClass()),!this.VehicleMovement)return!1;this.VehicleMovement.SetKuroOnlyTickOutside(!0),this.VehicleMovement.SetComponentTickEnabled(!1);var t=this.ActorComp.Owner.GetComponentByClass(UE.CharacterMovementComponent.StaticClass());return!!t&&(t.SetKuroOnlyTickOutside(!0),t.SetComponentTickEnabled(!1),this.ForbiddenTickPose=1<this.Entity.GetTickInterval(),!0)}OnDisable(){}OnEnable(){}OnTick(t){var e,i,s;this.VehicleMovement&&(this.DebugComp&&this.DebugComp.MarkDebugRecord("移动组件更新前 ",void 0,!0),e=this.ActorComp.Owner.CustomTimeDilation,this.VehicleMoveComp.CanMove()&&!this.VehicleMoveComp.IsSpecialMove&&(i=1<this.Entity.GetTickInterval(),this.ForbiddenTickPose=i||this.Frozen,i&&this.AnimComp?.Valid&&this.ActorComp.Owner.WasRecentlyRenderedOnScreen()?t*e<MIN_MODEL_BUFFER_TIME?this.VehicleMovement.KuroTickComponentOutside(t*MathUtils_1.MathUtils.MillisecondToSecond*e):(s=this.AnimComp.GetMeshTransform(),this.CacheActorLocation.DeepCopy(this.ActorComp.ActorLocationProxy),this.CacheActorRotator.DeepCopy(this.ActorComp.ActorRotationProxy),this.VehicleMovement.KuroTickComponentOutside(t*MathUtils_1.MathUtils.MillisecondToSecond*e),this.ActorComp.ResetAllCachedTime(),this.CacheActorLocation.Equals(this.ActorComp.ActorLocationProxy)&&this.CacheActorRotator.Equals(this.ActorComp.ActorRotationProxy)||this.AnimComp.SetModelBuffer(s,t)):(s=i?t:Time_1.Time.DeltaTime,this.VehicleMovement.KuroTickComponentOutside(s*MathUtils_1.MathUtils.MillisecondToSecond*e),this.ActorComp.ResetAllCachedTime())),this.DebugComp)&&this.DebugComp.MarkDebugRecord("移动组件更新后",void 0,!0)}};UeVehicleMovementTickManageComponent=__decorate([(0,RegisterComponent_1.RegisterComponent)(220)],UeVehicleMovementTickManageComponent),exports.UeVehicleMovementTickManageComponent=UeVehicleMovementTickManageComponent;
//# sourceMappingURL=UeVehicleMovementTickManageComponent.js.map