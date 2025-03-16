
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CameraCollision=void 0;const UE=require("ue"),Log_1=require("../../Core/Common/Log"),QueryTypeDefine_1=require("../../Core/Define/QueryTypeDefine"),Vector_1=require("../../Core/Utils/Math/Vector"),MathUtils_1=require("../../Core/Utils/MathUtils"),TraceElementCommon_1=require("../../Core/Utils/TraceElementCommon"),TsBaseCharacter_1=require("../Character/TsBaseCharacter"),GlobalData_1=require("../GlobalData"),ModelManager_1=require("../Manager/ModelManager"),TsBaseVehicle_1=require("../NewWorld/Vehicle/TsBaseVehicle"),GravityUtils_1=require("../Utils/GravityUtils"),MIN_DITHER=.01,MAX_VALUE=9999999,PROBE_RATIO=4,PLAYER_COLLISION_RADUIS=20,PROFILE_KEY1="FightCameraLogicComponent_CheckCollision_Camera",PROFILE_KEY2="FightCameraLogicComponent_CheckCollision_Npc",PROFILE_KEY3="FightCameraLogicComponent_CheckCollision_Camera_Caught_PlayerLocation",PROFILE_KEY4="FightCameraLogicComponent_CheckCollision_Player";class CameraCollision{constructor(){this.Hh=void 0,this.Tae=void 0,this.Lae=void 0,this.Fse=void 0,this.Hse=void 0,this.jse=void 0,this.Dae=void 0,this.Rae=void 0,this.Wlc=Vector_1.Vector.Create(),this._ae=Vector_1.Vector.Create(),this.uae=Vector_1.Vector.Create(),this.Uae=Vector_1.Vector.Create(),this.Aae=Vector_1.Vector.Create(),this.Pae=Vector_1.Vector.Create(),this.xae=Vector_1.Vector.Create(),this.wae=Vector_1.Vector.Create(),this.Bae=Vector_1.Vector.Create(),this.bae=Vector_1.Vector.Create(),this.Lz=Vector_1.Vector.Create(),this.qae=0,this.Gae=0,this.Nae=0,this.Oae=!1,this.kae=!1,this.IsLeftCollision=!1,this.IsRightCollision=!1,this.IsOpenBlend=!0,this.Zrh=0,this.CurrentBlendState=0,this.Fae=0,this.Vae=0,this.Hae=0,this.jae=0,this.Wae=0,this._pa=0,this.IsNpcDitherEnable=!0,this.IsPlayerXRayEnable=!0,this.Kae=new Set,this.Qae=new Map}Init(t){this.Hh=t}InitTraceElements(){this.Fse=UE.NewObject(UE.TraceSphereElement.StaticClass()),this.Fse.bIsSingle=!1,this.Fse.bTraceComplex=!1,this.Fse.bIgnoreSelf=!0,this.Fse.SetTraceTypeQuery(QueryTypeDefine_1.KuroTraceTypeQuery.Camera),this.jse=UE.NewObject(UE.TraceSphereElement.StaticClass()),this.jse.bIsSingle=!0,this.jse.bTraceComplex=!1,this.jse.bIgnoreSelf=!0,this.jse.SetTraceTypeQuery(QueryTypeDefine_1.KuroTraceTypeQuery.Camera),this.Hse=UE.NewObject(UE.TraceSphereElement.StaticClass()),this.Hse.bIsSingle=!0,this.Hse.bTraceComplex=!1,this.Hse.bIgnoreSelf=!0,this.Hse.SetTraceTypeQuery(QueryTypeDefine_1.KuroTraceTypeQuery.Camera),this.Dae=UE.NewObject(UE.TraceSphereElement.StaticClass()),this.Dae.bIsSingle=!1,this.Dae.bTraceComplex=!1,this.Dae.bIgnoreSelf=!0,this.Dae.AddObjectTypeQuery(QueryTypeDefine_1.KuroObjectTypeQuery.Pawn),this.Dae.AddObjectTypeQuery(QueryTypeDefine_1.KuroObjectTypeQuery.PawnMonster),this.Dae.AddObjectTypeQuery(QueryTypeDefine_1.KuroObjectTypeQuery.PawnPlayer),this.Rae=UE.NewObject(UE.TraceSphereElement.StaticClass()),this.Rae.bIsSingle=!1,this.Rae.bTraceComplex=!1,this.Rae.bIgnoreSelf=!0,this.Rae.AddObjectTypeQuery(QueryTypeDefine_1.KuroObjectTypeQuery.Pawn),this.Rae.AddObjectTypeQuery(QueryTypeDefine_1.KuroObjectTypeQuery.PawnMonster),this.Rae.AddObjectTypeQuery(QueryTypeDefine_1.KuroObjectTypeQuery.PawnPlayer)}SetDrawDebugEnable(t){t?(this.Fse.SetDrawDebugTrace(1),this.Fse.DrawTime=5,this.jse.SetDrawDebugTrace(1),this.jse.DrawTime=5,this.Hse.SetDrawDebugTrace(1),this.Hse.DrawTime=5,this.Dae.SetDrawDebugTrace(1),this.Dae.DrawTime=5,this.Rae.SetDrawDebugTrace(0),this.Rae.DrawTime=5):(this.Fse.SetDrawDebugTrace(0),this.Fse.DrawTime=0,this.jse.SetDrawDebugTrace(0),this.jse.DrawTime=0,this.Hse.SetDrawDebugTrace(0),this.Hse.DrawTime=0,this.Dae.SetDrawDebugTrace(0),this.Dae.DrawTime=0,this.Rae.SetDrawDebugTrace(0),this.Rae.DrawTime=0)}SetCharacter(t){this.Tae=t,this.Fse.ActorsToIgnore.Add(t),this.jse.ActorsToIgnore.Add(t),this.Hse.ActorsToIgnore.Add(t),this.Dae.ActorsToIgnore.Add(t),this.Rae.ActorsToIgnore.Add(t),this.Lae=t?.CharacterActorComponent?.Entity?.GetComponent(76)}SetCameraConfig(t,i){this.Wae=t*t*PROBE_RATIO,this._pa=i}Clear(){this.Fse&&(this.Fse.Dispose(),this.Fse=void 0),this.Hse&&(this.Hse.Dispose(),this.Hse=void 0),this.jse&&(this.jse.Dispose(),this.jse=void 0),this.Dae&&(this.Dae.Dispose(),this.Dae=void 0),this.Rae&&(this.Rae.Dispose(),this.Rae=void 0),this.Oae=!1,this.kae=!1,this.IsLeftCollision=!1,this.IsRightCollision=!1,this.Kae.clear()}ResetBlendData(){this.CurrentBlendState=0}CheckCollision(t,i,s){return this.Pae.DeepCopy(i),this.pae(),this.Xae(t,i),this.$ae(t,i),this.Yae(),this.Jae(t,i),this.zae(t,i,s),this.Zae(),this.ehe(t),this.Pae}Xae(t,i){if(this.Wlc.DeepCopy(this.Hh.GravityDirect),this._ae.DeepCopy(t),this.uae.DeepCopy(i),this.Fse.WorldContextObject=GlobalData_1.GlobalData.World,this.Fse.Radius=this.Hh.CurrentCollisionSize,this.Lae){const s=GravityUtils_1.GravityUtils.GetZnInGravityForDirect(this.Wlc,this._ae);t=this.Lz,i=(t.DeepCopy(this.Lae.GetWaterLocation()),GravityUtils_1.GravityUtils.AddZnInGravityForDirect(this.Wlc,t,this.Hh.CollisionAdditionalHeightInWater),GravityUtils_1.GravityUtils.GetZnInGravityForDirect(this.Wlc,t));this._ae.Z=(s>i?this._ae:t).Z}const s=GravityUtils_1.GravityUtils.GetZnInGravityForDirect(this.Wlc,this._ae);i=this.Lz,i.DeepCopy(this.Hh.Character.CharacterActorComponent.FloorLocation),GravityUtils_1.GravityUtils.AddZnInGravityForDirect(this.Wlc,i,this._pa),t=GravityUtils_1.GravityUtils.GetZnInGravityForDirect(this.Wlc,i),this._ae.Z=(s>t?this._ae:i).Z,TraceElementCommon_1.TraceElementCommon.SetStartLocation(this.Fse,this._ae),TraceElementCommon_1.TraceElementCommon.SetEndLocation(this.Fse,this.uae),this.Oae=!1,t=TraceElementCommon_1.TraceElementCommon.SphereTrace(this.Fse,PROFILE_KEY1);t&&(this.Nae=this.the(this._ae,this.uae,this.Fse.HitResult),0<=this.Nae)&&(TraceElementCommon_1.TraceElementCommon.GetHitLocation(this.Fse.HitResult,this.Nae,this.Pae),this.Oae=!0)}Yae(){var t;this.kae=!1,this.Oae&&(t=this.Fse.HitResult?.Components?.Get(this.Nae))?.IsValid()&&2===t.GetCollisionResponseToChannel(QueryTypeDefine_1.KuroCollisionChannel.Water)&&(GravityUtils_1.GravityUtils.AddZnInGravityForDirect(this.Wlc,this.Pae,this.Hh.CollisionProbeSize+MathUtils_1.MathUtils.KindaSmallNumber),this.kae=!0)}$ae(t,i){var s;this.Oae&&(t.Subtraction(i,this.Uae),this.Uae.Normalize(),s=(this.Hh.CheckWidth+this.Fae)/Vector_1.Vector.Dist(i,this.Pae),s=Vector_1.Vector.Dist(i,t)*s,this.Uae.CrossProduct(this.Wlc,this.Aae),this.Aae.MultiplyEqual(s),t.Addition(this.Aae,this._ae),this.jse.HitResult?.Clear(),this.jse.WorldContextObject=GlobalData_1.GlobalData.World,this.jse.Radius=this.Hh.CheckCollisionProbeSize,this._ae.DeepCopy(this.ihe(this._ae,this.Uae,-this.jse.Radius)),this.uae.DeepCopy(i),TraceElementCommon_1.TraceElementCommon.SetStartLocation(this.jse,this._ae),TraceElementCommon_1.TraceElementCommon.SetEndLocation(this.jse,this.uae),this.IsRightCollision=TraceElementCommon_1.TraceElementCommon.SphereTrace(this.jse,PROFILE_KEY1),this.IsRightCollision||(TraceElementCommon_1.TraceElementCommon.SetStartLocation(this.jse,this.uae),TraceElementCommon_1.TraceElementCommon.SetEndLocation(this.jse,this._ae),this.IsRightCollision=TraceElementCommon_1.TraceElementCommon.SphereTrace(this.jse,PROFILE_KEY1)),this.Aae.UnaryNegation(this.Aae),t.Addition(this.Aae,this._ae),this.Hse.HitResult?.Clear(),this.Hse.WorldContextObject=GlobalData_1.GlobalData.World,this.Hse.Radius=this.Hh.CheckCollisionProbeSize,this._ae.DeepCopy(this.ihe(this._ae,this.Uae,-this.Hse.Radius)),TraceElementCommon_1.TraceElementCommon.SetStartLocation(this.Hse,this._ae),TraceElementCommon_1.TraceElementCommon.SetEndLocation(this.Hse,this.uae),this.IsLeftCollision=TraceElementCommon_1.TraceElementCommon.SphereTrace(this.Hse,PROFILE_KEY1),this.IsLeftCollision||(TraceElementCommon_1.TraceElementCommon.SetStartLocation(this.Hse,this.uae),TraceElementCommon_1.TraceElementCommon.SetEndLocation(this.Hse,this._ae),this.IsLeftCollision=TraceElementCommon_1.TraceElementCommon.SphereTrace(this.Hse,PROFILE_KEY1)))}Jae(t,i){if(this.IsOpenBlend){if(!this.ohe())switch(this.CurrentBlendState){case 0:this.Oae&&(this.IsLeftCollision||this.IsRightCollision)&&(t.Subtraction(this.Hh.CameraLocation,this.wae),t.Subtraction(this.Pae,this.Bae),this.qae=this.wae.Size(),this.Gae=this.Bae.Size(),this.CurrentBlendState=1);break;case 1:if(this.Oae&&this.IsLeftCollision&&this.IsRightCollision)this.CurrentBlendState=2;else if(this.Oae&&(this.IsLeftCollision||this.IsRightCollision)){if(t.Subtraction(this.Hh.CameraLocation,this.wae),t.Subtraction(this.Pae,this.Bae),this.qae=this.wae.Size(),this.Gae=this.Bae.Size(),this.rhe(t,i,this.qae))return void this.ResetBlendData();this.qae<=this.Gae&&(this.CurrentBlendState=2)}else this.Oae?this.CurrentBlendState=1:this.CurrentBlendState=3;break;case 3:if(this.Oae&&(this.IsLeftCollision||this.IsRightCollision))this.CurrentBlendState=1;else{if(t.Subtraction(this.Hh.CameraLocation,this.wae),t.Subtraction(i,this.Bae),this.qae=this.wae.Size(),this.Gae=this.Bae.Size(),this.rhe(t,i,this.qae))return void this.ResetBlendData();(this.qae>=this.Gae||this.qae>=this.Hh.MaxArmLength)&&(this.CurrentBlendState=0)}break;case 2:this.Oae||this.IsLeftCollision||this.IsRightCollision||(t.Subtraction(this.Hh.CameraLocation,this.wae),t.Subtraction(i,this.Bae),this.qae=this.wae.Size(),this.Gae=this.Bae.Size(),this.CurrentBlendState=3)}}else this.CurrentBlendState=this.Oae?2:0}zae(t,i,s){switch(this.CurrentBlendState){case 1:var h=this.qae-this.Hh.InSpeed*s,h=Math.max(this.Gae,h);i.Subtraction(t,this.Uae),this.Uae.Normalize(),this.Uae.Multiply(h,this.bae),t.Addition(this.bae,this.Pae);break;case 3:h=this.qae+this.Hh.OutSpeed*s,h=Math.min(this.Gae,h);h=Math.min(this.Hh.MaxArmLength,h),i.Subtraction(t,this.Uae),this.Uae.Normalize(),this.Uae.Multiply(h,this.bae),t.Addition(this.bae,this.Pae);break;case 0:this.kae||this.Pae.DeepCopy(i)}}Zae(){if(this.IsNpcDitherEnable){this.nhe(),this.she(),this.Dae.HitResult?.Clear(),this.Dae.WorldContextObject=GlobalData_1.GlobalData.World,this.Dae.Radius=this.Vae,TraceElementCommon_1.TraceElementCommon.SetStartLocation(this.Dae,this.Pae),TraceElementCommon_1.TraceElementCommon.SetEndLocation(this.Dae,this.xae);var t=TraceElementCommon_1.TraceElementCommon.SphereTrace(this.Dae,PROFILE_KEY2),i=this.Dae.HitResult.GetHitCount();if(t){this.ahe(this.Dae.HitResult);for(var[s,h]of this.Qae)this.hhe(s)?(s.SetDitherEffect(1,1),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Camera",57,`[NPC Dither] 存在忽略Tag,恢复Npc'${s?.GetName()}'Dither`)):(s.SetDitherEffect(this.lhe(s,h),1),(h=this.Kae.has(s))&&this.Kae.delete(s),this.Kae.add(s),h||Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Camera",57,"[NPC Dither] 应用Npc Dither",["actor?.GetName()",s?.GetName()]))}var e=this.Kae.values();for(let t=0;t<this.Kae.size-i;t++){var r=e.next().value;this.Wx_(r)&&(r.SetDitherEffect(1,1),Log_1.Log.CheckDebug())&&Log_1.Log.Debug("Camera",57,`[NPC Dither] 恢复Npc'${r?.GetName()}'Dither`),this.Kae.delete(r)}}else 0<this.Kae.size&&(this.Kae.forEach(t=>{t?.IsValid()&&(t.SetDitherEffect(1,1),Log_1.Log.CheckDebug())&&Log_1.Log.Debug("Camera",57,`[NPC Dither] 禁用Npc虚化时恢复Npc'${t?.GetName()}'Dither`)}),this.Kae.clear())}ehe(t){this.IsPlayerXRayEnable&&(this.Rae.HitResult?.Clear(),this.Rae.WorldContextObject=GlobalData_1.GlobalData.World,this.Rae.Radius=PLAYER_COLLISION_RADUIS,TraceElementCommon_1.TraceElementCommon.SetStartLocation(this.Rae,this.Pae),TraceElementCommon_1.TraceElementCommon.SetEndLocation(this.Rae,t),TraceElementCommon_1.TraceElementCommon.SphereTrace(this.Rae,PROFILE_KEY4))&&this._he(this.Rae.HitResult)?this.Tae?.CharacterActorComponent?.SetActorXRayState(!0):this.Tae?.CharacterActorComponent?.SetActorXRayState(!1)}ResetAllNpcDither(){for(const t of this.Kae){if(!t?.IsValid())return;t.SetDitherEffect(1,1)}this.Kae.clear()}pae(){var t;this.Hh.NearCollisionProbeSize<=this.Hh.CollisionProbeSize?Log_1.Log.CheckError()&&Log_1.Log.Error("Character",57,"CollisionSize数据错误:NearCollisionProbeSize <= this.CollisionProbeSize",["CollisionProbeSize",this.Hh.CollisionProbeSize],["NearCollisionProbeSize",this.Hh.NearCollisionProbeSize]):(this.Fae=this.Hh.NearCollisionProbeSize-this.Hh.CollisionProbeSize,t=MathUtils_1.MathUtils.Clamp(this.Hh.CameraInputController.InputSpeedPercentage/this.Hh.CollisionSizePercentage,0,1),this.Hh.CurrentCollisionSize=this.Fae*t+this.Hh.CollisionProbeSize,this.Hh.CurrentCollisionSize=MathUtils_1.MathUtils.Clamp(this.Hh.CurrentCollisionSize,this.Hh.CurrentCollisionSize,this.Hh.NearCollisionProbeSize),0!==this.CurrentBlendState&&(this.Hh.CurrentCollisionSize=this.Hh.NearCollisionProbeSize))}ihe(t,i,s){return i.Multiply(s,this.Lz),t.Addition(this.Lz,this.Lz),this.Lz}ohe(){return 0!==this.Hh.CameraDialogueController.State?(this.CurrentBlendState=this.Oae?2:0,!0):ModelManager_1.ModelManager.GameModeModel.IsSilentLogin?!(this.CurrentBlendState=0):2===this.Zrh?(this.CurrentBlendState=this.Oae?2:0,!0):1===this.Zrh&&(this.Zrh=0,this.CurrentBlendState=this.Oae?2:0,!0)}rhe(t,i,s){return t.Subtraction(i,this.Lz).SizeSquared()<s*s}hhe(t){return!!t.GetEntityNoBlueprint()?.GetComponent(203)?.HasTag(-1151151013)}nhe(){var t,i;MathUtils_1.MathUtils.IsNearlyEqual(this.Hae,ModelManager_1.ModelManager.CameraModel.CameraDitherStartHideDistance)&&MathUtils_1.MathUtils.IsNearlyEqual(this.jae,this.Hh.Fov)||(this.Hae=ModelManager_1.ModelManager.CameraModel.CameraDitherStartHideDistance,this.jae=this.Hh.Fov,t=this.Hae,i=this.Hh.CameraActor.CameraComponent.AspectRatio,i=MathUtils_1.MathUtils.VerticalFovToHorizontally(this.Hh.Fov,i),i=Math.sin(i/2*MathUtils_1.MathUtils.DegToRad)*t*2,this.Vae=MathUtils_1.MathUtils.GetTriangleCircumradius(t,t,i))}she(){this.Hh.CameraForward.Normalize(),this.Hh.CameraForward.Multiply(this.Vae,this.Lz),this.Pae.Addition(this.Lz,this.xae)}ahe(i){var s=i.GetHitCount();this.Qae.clear();for(let t=0;t<s;++t){var h,e=i.Actors.Get(t);e&&e instanceof UE.Object&&e.IsValid()&&this.Wx_(e)&&(((e.GetEntityNoBlueprint()?.GetComponent(0))?.GetModelConfig())?.主角蓝透||(TraceElementCommon_1.TraceElementCommon.GetImpactPoint(i,t,this.Lz),(this.Qae.get(e)??MAX_VALUE)<=(h=Vector_1.Vector.Dist(this.Lz,this.Pae)))||this.Qae.set(e,h))}}lhe(t,i){if(!t?.IsValid()||!t.CapsuleComponent)return 1;let s=this.Hh.CompleteHideDistance,h=this.Hh.StartHideDistance,e=this.Hh.StartDitherValue;var r;return t.CapsuleComponent.GetCollisionObjectType()===QueryTypeDefine_1.KuroCollisionChannel.PawnMonster?(r=t.GetEntityNoBlueprint()?.GetComponent(3))&&(s=r.CompleteHideDistance,h=r.StartHideDistance,e=r.StartDitherValue):t.CapsuleComponent.GetCollisionObjectType()===QueryTypeDefine_1.KuroCollisionChannel.Vehicle&&(r=t.GetEntityNoBlueprint()?.GetComponent(231))&&0<r.StartHideDistance&&(s=r.CompleteHideDistance,h=r.StartHideDistance,e=r.StartDitherValue),MathUtils_1.MathUtils.RangeClamp(i,s,h,MIN_DITHER,e)}the(i,t,s){if(i.Z>t.Z)return 0;let h=-1,e=MAX_VALUE;var r=s.GetHitCount();for(let t=0;t<r;++t){var a,o=this.Fse.HitResult?.Components?.Get(t);o?.IsValid()&&(TraceElementCommon_1.TraceElementCommon.GetImpactPoint(s,t,this.Lz),a=Vector_1.Vector.DistSquared(this.Lz,i),2===o.GetCollisionResponseToChannel(QueryTypeDefine_1.KuroCollisionChannel.Water)&&a<=this.Wae||a<e&&(e=a,h=t))}return h}_he(i){var s=i.GetHitCount();for(let t=0;t<s;++t){var h=i.Actors.Get(t);if(h)if(h instanceof UE.Object&&h.IsValid()&&this.Wx_(h))if(((h.GetEntityNoBlueprint()?.GetComponent(0))?.GetModelConfig())?.主角蓝透)return!0}return!1}TraceCheckPlayerLocation(t,i,s){return this.Fse.WorldContextObject=GlobalData_1.GlobalData.World,this.Fse.Radius=this.Hh.CurrentCollisionSize,TraceElementCommon_1.TraceElementCommon.SetStartLocation(this.Fse,t),TraceElementCommon_1.TraceElementCommon.SetEndLocation(this.Fse,i),!!TraceElementCommon_1.TraceElementCommon.SphereTrace(this.Fse,PROFILE_KEY3)&&(TraceElementCommon_1.TraceElementCommon.GetHitLocation(this.Fse.HitResult,0,s),!0)}SetCameraBlendPauseType(t){this.Zrh=t}Wx_(t){return!!t?.IsValid()&&(t instanceof TsBaseCharacter_1.default||t instanceof TsBaseVehicle_1.default)}}exports.CameraCollision=CameraCollision;
//# sourceMappingURL=CameraCollision.js.map