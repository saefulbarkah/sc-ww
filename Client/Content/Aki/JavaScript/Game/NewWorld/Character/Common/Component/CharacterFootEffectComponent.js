
"use strict";var CharacterFootEffectComponent_1,__decorate=this&&this.__decorate||function(t,e,i,r){var o,s=arguments.length,h=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;0<=n;n--)(o=t[n])&&(h=(s<3?o(h):3<s?o(e,i,h):o(e,i))||h);return 3<s&&h&&Object.defineProperty(e,i,h),h};Object.defineProperty(exports,"__esModule",{value:!0}),exports.CharacterFootEffectComponent=void 0;const UE=require("ue"),Log_1=require("../../../../../Core/Common/Log"),Time_1=require("../../../../../Core/Common/Time"),QueryTypeDefine_1=require("../../../../../Core/Define/QueryTypeDefine"),EntityComponent_1=require("../../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../../Core/Entity/RegisterComponent"),DataTableUtil_1=require("../../../../../Core/Utils/DataTableUtil"),Rotator_1=require("../../../../../Core/Utils/Math/Rotator"),Vector_1=require("../../../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../../../Core/Utils/MathUtils"),TraceElementCommon_1=require("../../../../../Core/Utils/TraceElementCommon"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),EffectSystem_1=require("../../../../Effect/EffectSystem"),GameSettingsDeviceRender_1=require("../../../../GameSettings/GameSettingsDeviceRender"),GlobalData_1=require("../../../../GlobalData"),ControllerHolder_1=require("../../../../Manager/ControllerHolder"),ModelManager_1=require("../../../../Manager/ModelManager"),VoxelUtils_1=require("../../../../Utils/VoxelUtils"),CharacterNameDefines_1=require("../CharacterNameDefines"),CharacterUnifiedStateTypes_1=require("./Abilities/CharacterUnifiedStateTypes"),PROFILE_KEY="CharacterFootEffectComponent_FootTrace",FOOTPRINT_SPAWN_DURATION=200,FOOTPRINT_SPAWN_MIN_DISTANCE_SQUARED=500,SPRINT_FOOTEFFECT_DETECT_HEIGHT=50,NORMAL_FOOTEFFECT_DETECT_HEIGHT=15,MATERIAL_ID_WAT=6,MATERIAL_ID_SHR=14,FOOTPRINT_FORWARD_OFFSET=5;class CharacterFootEffectConfig{constructor(){this.EffectPath=void 0,this.PriorToGlobal=!1}}let CharacterFootEffectComponent=CharacterFootEffectComponent_1=class CharacterFootEffectComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.oRe=void 0,this.Hte=void 0,this.I5r=void 0,this.T5r=!1,this.L5r=!1,this.D5r=!1,this.R5r=void 0,this._ae=Vector_1.Vector.Create(),this.uae=Vector_1.Vector.Create(),this.U5r=!1,this.A5r=!1,this.P5r=Vector_1.Vector.Create(),this.x5r=Vector_1.Vector.Create(),this.kTn=Vector_1.Vector.Create(),this.Lz=Vector_1.Vector.Create(),this.Tz=Vector_1.Vector.Create(),this.fHo=Vector_1.Vector.Create(),this.Gue=Rotator_1.Rotator.Create(),this.w5r=new Map,this.B5r=0,this.b5r=Vector_1.Vector.Create()}static get Dependencies(){return[3,45,166,164,0]}OnInit(t){return super.OnInit(t),!0}OnStart(){super.OnStart();var t=this.Entity.GetComponent(3);if(!t?.Valid)return!1;var e=this.Entity.GetComponent(166);if(!e?.Valid)return!1;if(!this.Entity.GetComponent(45)?.Valid)return!1;if(!this.Entity.GetComponent(0)?.Valid)return!1;var i=this.Entity.GetComponent(164);if(!i?.Valid)return!1;this.Hte=t,this.oRe=e,this.I5r=i,this.R5r=UE.NewObject(UE.TraceSphereElement.StaticClass()),this.R5r.bIsSingle=!0,this.R5r.bTraceComplex=!1,this.R5r.bIgnoreSelf=!0,this.R5r.WorldContextObject=this.Hte.Actor,this.R5r.Radius=10,this.R5r.SetTraceTypeQuery(QueryTypeDefine_1.KuroTraceTypeQuery.IkGround);for(const o of DataTableUtil_1.DataTableUtil.GetDataTableAllRow(6)){var r=new CharacterFootEffectConfig;r.EffectPath=o.Effect,r.PriorToGlobal=o.PriorToGlobal,this.w5r.set(o.SurfaceType,r)}return!0}OnEnd(){return this.oRe=void 0,this.Hte=void 0,this.R5r?.Dispose(),this.R5r=void 0,this.U5r=!1,this.T5r=!1,this.A5r=!1,this.L5r=!1,this.w5r.clear(),!0}OnTick(t){this.q5r(),this.G5r(),this.k5r()}q5r(){var t;UE.KuroStaticLibrary.IsObjectClassByName(this.oRe.MainAnimInstance,CharacterNameDefines_1.CharacterNameDefines.ABP_BASEROLE)?((t=this.oRe.MainAnimInstance.GetCurveValue(CharacterFootEffectComponent_1.FootstepCurveName))<-.5?this.T5r?this.D5r=!1:(this.T5r=!0,this.D5r=!0):this.T5r=!1,.5<t?this.L5r?this.D5r=!1:(this.L5r=!0,this.D5r=!0):this.L5r=!1):(this.T5r=!1,this.L5r=!1,this.D5r=!1)}FTn(t,e){this._ae.FromUeVector(this.Hte.Actor.Mesh.D_GetSocketLocation(t)),this.Hte.ActorUpProxy.Multiply(this.I5r.MoveState===CharacterUnifiedStateTypes_1.ECharMoveState.Sprint?-SPRINT_FOOTEFFECT_DETECT_HEIGHT:-NORMAL_FOOTEFFECT_DETECT_HEIGHT,this.uae),this.uae.AdditionEqual(this._ae),TraceElementCommon_1.TraceElementCommon.SetStartLocation(this.R5r,this._ae),TraceElementCommon_1.TraceElementCommon.SetEndLocation(this.R5r,this.uae);t=TraceElementCommon_1.TraceElementCommon.SphereTrace(this.R5r,PROFILE_KEY);return t?TraceElementCommon_1.TraceElementCommon.GetHitLocation(this.R5r.HitResult,0,e):Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Test",6,"Detect Footprint Failed",["location",this.Hte?.ActorLocationProxy],["start",this._ae],["end",this.uae]),t}G5r(){(this.Hte?.Actor.Mesh)?.IsValid()&&(this.T5r&&this.D5r?(this.U5r=this.FTn(CharacterFootEffectComponent_1.LeftFootSocketName,this.P5r),this.U5r&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnCharFootOnTheGround)):this.U5r=!1,this.L5r&&this.D5r?(this.A5r=this.FTn(CharacterFootEffectComponent_1.RightFootSocketName,this.x5r),this.A5r&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnCharFootOnTheGround)):this.A5r=!1)}GetFootstepTexture(){var t=this.R5r?.HitResult;if(!t?.IsValid())return"DirtSurface";var e=this.Hte?.Actor;if(!e?.IsValid())return"DirtSurface";let i=!1;return(i=!(!e.CharRenderingComponent?.GetInWater()&&(e=t.Components.Get(0),!(e=UE.KuroRenderingRuntimeBPPluginBPLibrary.GetComponentPhysicalMaterial(e))?.IsValid()||"WaterLightLand"!==e.GetName()))||i)?"WaterSurface":(e=this.kTn,TraceElementCommon_1.TraceElementCommon.GetHitLocation(t,0,e),t=e.ToUeVector(),(e=VoxelUtils_1.VoxelUtils.GetVoxelInfo(GlobalData_1.GlobalData.World,t)).MtlID===MATERIAL_ID_WAT||e.MtlID===MATERIAL_ID_SHR?"DirtSurface":UE.KuroVoxelSystem.GetMtlNameByID(e.MtlID))}UpdateFootprintEffect(){GameSettingsDeviceRender_1.GameSettingsDeviceRender.GameQualitySettingLevel<=1||(this.T5r&&this.D5r&&this.U5r&&this.VTn(this.R5r?.HitResult),this.L5r&&this.D5r&&this.A5r&&this.VTn(this.R5r?.HitResult))}VTn(e){if(e?.bBlockingHit&&!(Time_1.Time.Now-this.B5r<FOOTPRINT_SPAWN_DURATION)){var i=this.kTn;if(TraceElementCommon_1.TraceElementCommon.GetHitLocation(e,0,i),!(Vector_1.Vector.DistSquared(i,this.b5r)<FOOTPRINT_SPAWN_MIN_DISTANCE_SQUARED)){var r=e.PhysMaterials?.Get(0),o=ModelManager_1.ModelManager.SceneTeamModel?.GetPhysMaterial,r=this.w5r.get(r.SurfaceType);let t=void 0;(t=!o||!(o=this.w5r.get(o.SurfaceType))||r&&r.PriorToGlobal?t:o.EffectPath?.ToAssetPathName())||r&&(t=r.EffectPath?.ToAssetPathName()),void 0!==t&&(this.Hte.ActorForwardProxy.Multiply(FOOTPRINT_FORWARD_OFFSET,this.Lz),TraceElementCommon_1.TraceElementCommon.GetImpactNormal(e,0,this.Tz),Vector_1.Vector.VectorPlaneProject(this.Lz,this.Tz,this.fHo),this.fHo.AdditionEqual(i),MathUtils_1.MathUtils.LookRotationUpFirst(this.Hte.ActorForwardProxy,this.Tz,this.Gue),EffectSystem_1.EffectSystem.SpawnUnloopedEffect(GlobalData_1.GlobalData.World,new UE.TransformDouble(this.Gue.ToUeRotator(),this.fHo.ToUeVector(),Vector_1.Vector.OneVectorProxy.ToUeVector()),t,"[SceneCharacterFootprintEffect.SpawnEffect]"),this.B5r=Time_1.Time.Now,this.b5r.DeepCopy(i))}}}TriggerFootprint(t){if(!(Time_1.Time.Now-this.B5r<FOOTPRINT_SPAWN_DURATION)){if(t){if(!this.FTn(CharacterFootEffectComponent_1.LeftFootSocketName,this.kTn))return}else if(!this.FTn(CharacterFootEffectComponent_1.RightFootSocketName,this.kTn))return;t=this.R5r?.HitResult;t&&this.VTn(t)}}k5r(){!ModelManager_1.ModelManager.TeleportModel.IsTeleport&&this.Hte.EnableVoxelDetection&&(this.T5r&&this.D5r&&this.U5r?ControllerHolder_1.ControllerHolder.WorldController.EnvironmentInfoUpdate(this.P5r.ToUeVector(),this.Hte.IsRoleAndCtrlByMe):this.L5r&&this.D5r&&this.A5r?ControllerHolder_1.ControllerHolder.WorldController.EnvironmentInfoUpdate(this.x5r.ToUeVector(),this.Hte.IsRoleAndCtrlByMe):this.Hte&&this.I5r&&this.I5r.MoveState!==CharacterUnifiedStateTypes_1.ECharMoveState.Stand&&ControllerHolder_1.ControllerHolder.WorldController.EnvironmentInfoUpdate(this.Hte.ActorLocation,this.Hte.IsRoleAndCtrlByMe))}};CharacterFootEffectComponent.FootstepCurveName=new UE.FName("Foot_voice"),CharacterFootEffectComponent.LeftFootSocketName=new UE.FName("Bip001LFoot"),CharacterFootEffectComponent.RightFootSocketName=new UE.FName("Bip001RFoot"),CharacterFootEffectComponent=CharacterFootEffectComponent_1=__decorate([(0,RegisterComponent_1.RegisterComponent)(51)],CharacterFootEffectComponent),exports.CharacterFootEffectComponent=CharacterFootEffectComponent;
//# sourceMappingURL=CharacterFootEffectComponent.js.map