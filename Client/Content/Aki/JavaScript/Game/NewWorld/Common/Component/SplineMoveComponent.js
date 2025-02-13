
"use strict";var SplineMoveComponent_1,__decorate=this&&this.__decorate||function(t,i,s,h){var e,r=arguments.length,o=r<3?i:null===h?h=Object.getOwnPropertyDescriptor(i,s):h;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,i,s,h);else for(var n=t.length-1;0<=n;n--)(e=t[n])&&(o=(r<3?e(o):3<r?e(i,s,o):e(i,s))||o);return 3<r&&o&&Object.defineProperty(i,s,o),o};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SplineMoveComponent=void 0;const UE=require("ue"),Log_1=require("../../../../Core/Common/Log"),Time_1=require("../../../../Core/Common/Time"),Protocol_1=require("../../../../Core/Define/Net/Protocol"),EntityComponent_1=require("../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../Core/Entity/RegisterComponent"),ResourceSystem_1=require("../../../../Core/Resource/ResourceSystem"),CurveUtils_1=require("../../../../Core/Utils/Curve/CurveUtils"),PowerCurve3_1=require("../../../../Core/Utils/Curve/PowerCurve3"),Quat_1=require("../../../../Core/Utils/Math/Quat"),Vector_1=require("../../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../../Core/Utils/MathUtils"),ModelManager_1=require("../../../Manager/ModelManager"),GravityUtils_1=require("../../../Utils/GravityUtils"),CharacterNameDefines_1=require("../../Character/Common/CharacterNameDefines"),CharacterAttributeTypes_1=require("../../Character/Common/Component/Abilities/CharacterAttributeTypes"),CharacterUnifiedStateTypes_1=require("../../Character/Common/Component/Abilities/CharacterUnifiedStateTypes"),MAX_INPUT_COS=.707,FORWARD_BACKWARD_THRESHOLD=.5,FORECAST_DIST=500,MAX_OFFSET_INCREASE=1e5,DAMPING=.96,STANDARD_FPS=60,HEIGHT_LIMIT=1e5;class SplineMoveParams{constructor(t,i,s){this.Id=t,this.Config=i,this.Spline=s,this.CurrentMaxOffsetSquared=0,this.CurrentMaxOffset=0,this.InputLimitCos=0,this.InputLimitSin=0,this.Type="PathLine",this.MaxOffsetDist=0,this.OnlyForward=!1,this.InputLimitAngle=0,this.LayerVerticalLimit=HEIGHT_LIMIT,this.EdgeLimitCurve=CurveUtils_1.CurveUtils.DefaultLinear,this.EarliestLeaveTime=0,this.MaxSoarSplineSpeed=0,this.SoarFriction=0,this.SoarSprintLimit=0,this.SplineAnalyzeData=void 0,this.Type=i.Pattern.Type,this.MaxOffsetDist=i.Pattern.MaxOffsetDistance??0,this.OnlyForward=i.Pattern.IsOneWay??!1,this.LayerVerticalLimit=i.Pattern.LayerVerticalLimit??HEIGHT_LIMIT,"RacingTrack"===i.Pattern.Type?(this.InputLimitAngle=i.Pattern.DirectionAngleLimit,this.InputLimitCos=Math.cos(this.InputLimitAngle*MathUtils_1.MathUtils.DegToRad),this.InputLimitSin=Math.sin(this.InputLimitAngle*MathUtils_1.MathUtils.DegToRad)):"SlideTrack"===i.Pattern.Type?(this.InputLimitAngle=i.Pattern.DirectionAngleLimit,this.EdgeLimitCurve=new PowerCurve3_1.PowerCurve3(i.Pattern.EdgeLimitCurveFactor)):"AirPassage"===i.Pattern.Type&&((s=ModelManager_1.ModelManager.CreatureModel.GetEntityByPbDataId(t)?.Entity?.GetComponent(253))?(this.MaxSoarSplineSpeed=s.SplineData.SpeedLimit,this.SoarFriction=s.SplineData.Resistance,this.SoarSprintLimit=s.SplineData.SprintSpeedLimit):(this.MaxSoarSplineSpeed=3e3,this.SoarFriction=.5,this.SoarSprintLimit=0)),this.CurrentMaxOffset=this.MaxOffsetDist+MAX_OFFSET_INCREASE,this.CurrentMaxOffsetSquared=this.CurrentMaxOffset*this.CurrentMaxOffset,"AirPassage"===this.Type?(this.EarliestLeaveTime=Time_1.Time.NowSeconds+1,this.SplineAnalyzeData=ModelManager_1.ModelManager.GameSplineModel?.GetSplineAnalyzeData(t)):this.EarliestLeaveTime=Time_1.Time.NowSeconds}}let SplineMoveComponent=SplineMoveComponent_1=class SplineMoveComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.Hte=void 0,this.isn=void 0,this.Gce=void 0,this.oRe=void 0,this.rJo=void 0,this.Lie=void 0,this.osn=void 0,this.sxr=void 0,this.rsn=new Map,this.nsn=new Array,this.rCl=void 0,this.Wnr=Vector_1.Vector.Create(),this.asn=0,this.hsn=!0,this.LastRightSpeed=0,this.MinTurnAngle=0,this.MaxTurnAngle=0,this.SplineTimeKey=0,this.SplineDirection=Vector_1.Vector.Create(),this.SplineLocation=Vector_1.Vector.Create(),this._sn=Quat_1.Quat.Create(),this.usn=Vector_1.Vector.Create(),this.csn=Vector_1.Vector.Create(),this.Due=Vector_1.Vector.Create(),this.Aae=Vector_1.Vector.Create(),this.Lz=Vector_1.Vector.Create(),this.az=Quat_1.Quat.Create()}static get SplineMoveConfig(){return this.msn||(this.msn=ResourceSystem_1.ResourceSystem.GetLoadedAsset(this.DaPath,UE.Object)),this.msn}get CurrentSplineMoveType(){return this.rCl?this.rCl.Type:"PathLine"}get CurrentSplineMoveParams(){return this.rCl}OnStart(){return this.sxr=this.Disable("[SplineMoveComponent.OnStart] 默认Disable"),this.Hte=this.Entity.GetComponent(1),(0,RegisterComponent_1.isComponentInstance)(this.Hte,3)&&(this.isn=this.Hte),this.Gce=this.Entity.GetComponent(173),this.oRe=this.Entity.GetComponent(172),this.rJo=this.Entity.GetComponent(170),this.Lie=this.Entity.GetComponent(200),this.osn=this.Entity.GetComponent(168),!0}OnEnd(){for(var[t]of this.rsn)ModelManager_1.ModelManager.GameSplineModel.ReleaseSpline(t,this.Entity.Id,1);return this.rsn.clear(),!(this.nsn.length=0)}OnTick(t){this.CurrentSplineMoveParams?!this.rsn.has(this.CurrentSplineMoveParams.Id)&&this.CurrentSplineMoveParams.EarliestLeaveTime<=Time_1.Time.NowSeconds&&(this.oCl(),!this.CurrentSplineMoveParams)||(this.nCl(),"AirPassage"!==this.CurrentSplineMoveType&&(t=t*MathUtils_1.MathUtils.MillisecondToSecond,this.dsn(this.SplineTimeKey,t),this.Csn()),this.Wnr.DeepCopy(this.Due)):(Log_1.Log.CheckError()&&Log_1.Log.Error("Movement",6,"Tick in No SplineMove!"),this.sxr=this.Disable("[SplineMoveComponent.OnTick] this.CurrentSplineMoveParams为false"))}gsn(s){if(this.isn&&"RacingTrack"===this.rCl.Type){var h=this.isn.InputDirectProxy;this.Lz.X=-this.SplineDirection.Y,this.Lz.Y=this.SplineDirection.X,this.Lz.Z=0;let t=this.Lz.DotProduct(h);t<-this.rCl.InputLimitSin?t=-this.rCl.InputLimitSin:t>this.rCl.InputLimitSin&&(t=this.rCl.InputLimitSin);var h=this.Gce.CharacterMovement.MaxWalkSpeed*t,e=this.Gce.CharacterMovement.MaxAcceleration,r=h-this.LastRightSpeed,e=e*s;let i=0;Math.abs(r)>e?(i=r*this.LastRightSpeed<0?this.LastRightSpeed*Math.pow(DAMPING,s*STANDARD_FPS):this.LastRightSpeed,i+=Math.sign(r)*e):i=h,this.Lz.MultiplyEqual((this.LastRightSpeed+i)/2*s),this.Due.AdditionEqual(this.Lz),this.LastRightSpeed=i}}dsn(t,i){this.Due.DeepCopy(this.Hte.ActorLocationProxy),this.gsn(i),this.Hte.ActorLocationProxy.Subtraction(this.Wnr,this.Lz);var s,h=0<this.Lz.DotProduct(this.SplineDirection),h=(this.rCl.OnlyForward&&!h?(this.Wnr.Subtraction(this.Due,this.Aae),h=this.SplineDirection.DotProduct(this.Aae),this.SplineDirection.Multiply(h,this.Lz),this.Due.AdditionEqual(this.Lz)):(h=this.rCl.Spline,this.csn.FromUeVector(h.GetDirectionAtSplineInputKey(this.asn,1)),this.csn.Z=0,this.csn.Normalize()&&(this.isn&&(this.Lz.DeepCopy(this.isn.ActorVelocityProxy),Quat_1.Quat.FindBetween(this.csn,this.SplineDirection,this.az),this.az.RotateVector(this.Lz,this.Lz),this.isn.SetActorVelocity(this.Lz)),"RacingTrack"===this.rCl.Type)&&(this.usn.FromUeVector(h.D_GetLocationAtSplineInputKey(this.asn,1)),this.Due.Subtraction(this.usn,this.Aae),this.Aae.Z=0,this.csn.Multiply(this.Aae.DotProduct(this.csn),this.Lz),this.Aae.SubtractionEqual(this.Lz),this.az.RotateVector(this.Aae,this.Lz),h=this.Due.Z,this.SplineLocation.Addition(this.Lz,this.Due),this.Due.Z=h),this.asn=t),this.SplineLocation.Subtraction(this.Due,this.Aae),this.Aae.Z=0,this.SplineDirection.Multiply(this.Aae.DotProduct(this.SplineDirection),this.Lz),this.Aae.SubtractionEqual(this.Lz),this.Aae.SizeSquared()),t=this.rCl.CurrentMaxOffset;this.rCl.CurrentMaxOffsetSquared<h?0<t?(s=Math.sqrt(h),this.Aae.Multiply((s-t)/s,this.Lz),this.Due.AdditionEqual(this.Lz)):(this.Aae.Z=0,this.Due.AdditionEqual(this.Aae)):this.rCl.CurrentMaxOffset>this.rCl.MaxOffsetDist&&(h>MathUtils_1.MathUtils.Square(this.rCl.MaxOffsetDist)?(this.rCl.CurrentMaxOffset=Math.sqrt(h),this.rCl.CurrentMaxOffsetSquared=h):(this.rCl.CurrentMaxOffset=this.rCl.MaxOffsetDist,this.rCl.CurrentMaxOffsetSquared=MathUtils_1.MathUtils.Square(this.rCl.MaxOffsetDist))),Vector_1.Vector.DistSquared(this.Hte.ActorLocationProxy,this.Due)>MathUtils_1.MathUtils.SmallNumber&&(this.Gce?(this.Due.Subtraction(this.Hte.ActorLocationProxy,this.Aae),this.Gce.MoveCharacter(this.Aae,i)):this.Hte.SetActorLocation(this.Due.ToUeVector(),"样条移动",!1))}Csn(){var t;this.isn&&(t=this.isn.InputDirectProxy,this.rJo?.PositionState===CharacterUnifiedStateTypes_1.ECharPositionState.Climb?(ModelManager_1.ModelManager.CameraModel.CameraRotator.Quaternion(this.az),this.az.RotateVector(t,this.Lz),this.isn.SetInputDirect(this.Lz),this.fsn(t),this.Hte.ActorQuatProxy.Inverse(this.az),this.az.RotateVector(t,this.Lz),this.Lz.Z=0,this.isn.SetInputDirect(this.Lz)):this.fsn(t))}fsn(i){var s=this.rCl;if("RacingTrack"===s.Type)this.isn.SetInputFacing(this.SplineDirection,!0),i.IsNearlyZero()||(h=this.SplineDirection.DotProduct(i),s.OnlyForward)||h>(this.hsn?-FORWARD_BACKWARD_THRESHOLD:FORWARD_BACKWARD_THRESHOLD)?(this.hsn=!0,this.isn.SetInputDirect(this.SplineDirection)):(this.hsn=!1,this.SplineDirection.UnaryNegation(this.Lz),this.isn.SetInputDirect(this.Lz));else if("PathLine"===s.Type){var h=i.DotProduct(this.SplineDirection);let t=0;if(s.OnlyForward){if(i.DotProduct(this.SplineDirection)<MAX_INPUT_COS)return void this.isn.ClearInput(!0);t=1}else{if(Math.abs(h)<MAX_INPUT_COS)return void this.isn.ClearInput(!0);t=Math.sign(h)}this.SplineDirection.Multiply(t*FORECAST_DIST,this.Lz),this.Lz.AdditionEqual(this.SplineLocation),this.Lz.SubtractionEqual(this.Due),this.Lz.Z=0,this.Lz.Normalize(),this.isn.SetInputDirect(this.Lz),this.isn.SetInputFacing(this.Lz,!0)}else this.psn(i)}psn(t){var i=this.rCl,s=(this._sn.Inverse(this.az),this.Hte.ActorLocationProxy.Subtraction(this.SplineLocation,this.Lz),this.az.RotateVector(this.Lz,this.Lz),i.EdgeLimitCurve.GetCurrentValue(Math.abs(this.Lz.Y)/i.MaxOffsetDist));let h=-i.InputLimitAngle,e=i.InputLimitAngle;this.Lz.Y<0?h*=1-s:e*=1-s,this.MinTurnAngle=h,this.MaxTurnAngle=e,t.IsNearlyZero()?this._sn.RotateVector(Vector_1.Vector.ForwardVectorProxy,this.Lz):(ModelManager_1.ModelManager.CameraModel.CameraRotator.Quaternion(this.az),this.az.RotateVector(Vector_1.Vector.ForwardVectorProxy,this.Lz),this.Lz.Z=0,this.Lz.IsNearlyZero()&&this.az.RotateVector(Vector_1.Vector.UpVectorProxy,this.Lz),MathUtils_1.MathUtils.LookRotationUpFirst(this.Lz,Vector_1.Vector.UpVectorProxy,this.az),this.az.Inverse(this.az),this.az.RotateVector(t,this.Lz),i=this.Lz.HeadingAngle()*MathUtils_1.MathUtils.RadToDeg,s=MathUtils_1.MathUtils.Clamp(i,h,e)*MathUtils_1.MathUtils.DegToRad,this.Lz.Set(Math.cos(s),Math.sin(s),0),this._sn.RotateVector(this.Lz,this.Lz)),this.isn.SetInputDirect(this.Lz),this.isn.SetInputFacing(this.Lz,!0)}Wzl(){this.rCl&&(this.MinTurnAngle=-this.rCl.InputLimitAngle,this.MaxTurnAngle=this.rCl.InputLimitAngle)}StartSplineMove(t,i){var s;this.nsn.length&&this.nsn[this.nsn.length-1]===t||(s=ModelManager_1.ModelManager.GameSplineModel.LoadAndGetSplineComponent(t,this.Entity.Id,1),this.StartSplineMoveInternal(t,i,s))}StartSplineMoveInternal(t,i,s){this.sxr&&(this.Enable(this.sxr,"SplineMoveComponent.StartSplineMoveInternal"),this.sxr=void 0,"SlideTrack"!==i.Pattern.Type)&&(this.Gce?.SetTurnRate(SplineMoveComponent_1.SplineMoveConfig.TurnRate),this.Gce?.SetAirControl(SplineMoveComponent_1.SplineMoveConfig.AirControl),this.Gce?.SetOverrideMaxFallingSpeed(SplineMoveComponent_1.SplineMoveConfig.MaxFlySpeed),this.Lie?.AddTag(-451106150),this.osn?.SetBaseValue(Protocol_1.Aki.Protocol.Vks.Proto_Jump,CharacterAttributeTypes_1.PER_TEN_THOUSAND*SplineMoveComponent_1.SplineMoveConfig.JumpHeightRate),h=this.oRe?.MainAnimInstance,UE.KuroStaticLibrary.IsObjectClassByName(h,CharacterNameDefines_1.CharacterNameDefines.ABP_BASEROLE))&&h.设置跳跃速率(SplineMoveComponent_1.SplineMoveConfig.JumpTimeScale);var h=this.rsn.get(t);h||(h=new SplineMoveParams(t,i,s),this.rsn.set(t,h)),this.nsn.push(t),this.oCl(),this.LastRightSpeed=0,Log_1.Log.CheckInfo()&&Log_1.Log.Info("Movement",6,"StartSplineMove",["Spline Id",t],["Actor",this.Hte.Owner.GetName()],["StackCount",this.nsn.length])}EndSplineMove(t){if(this.rsn.get(t)){for(ModelManager_1.ModelManager.GameSplineModel.ReleaseSpline(t,this.Entity.Id,1),this.rsn.delete(t);this.nsn.length&&!this.rsn.has(this.nsn[this.nsn.length-1]);)this.nsn.length=this.nsn.length-1;Log_1.Log.CheckInfo()&&Log_1.Log.Info("Movement",6,"EndSplineMove",["Spline Id",t],["Actor",this.Hte.Owner.GetName()],["StackCount",this.nsn.length]),this.rCl.EarliestLeaveTime>Time_1.Time.NowSeconds||this.oCl()}}oCl(){var t;this.nsn.length?(this.rCl=this.rsn.get(this.nsn[this.nsn.length-1]),this.nCl()):(this.rCl=void 0,this.sxr||(this.sxr=this.Disable("[SplineMoveComponent.EndSplineMove] 没有下一个SplineMove"),this.Gce?.ResetTurnRate(),this.Gce?.ResetAirControl(),this.Gce?.ResetOverrideMaxFallingSpeed(),this.Lie?.RemoveTag(-451106150),this.osn?.SetBaseValue(Protocol_1.Aki.Protocol.Vks.Proto_Jump,CharacterAttributeTypes_1.PER_TEN_THOUSAND),t=this.oRe?.MainAnimInstance,UE.KuroStaticLibrary.IsObjectClassByName(t,CharacterNameDefines_1.CharacterNameDefines.ABP_BASEROLE)&&t.设置跳跃速率(1))),this.isn?.ClearInput(),this.Wzl(),this.Wnr.DeepCopy(this.Hte.ActorLocationProxy)}nCl(){var t=this.CurrentSplineMoveParams.Spline,i=t.D_FindInputKeyClosestToWorldLocationInGravity(this.Hte.ActorLocationProxy.ToUeVector(),this.Gce.GravityDirect.ToUeVectorOld(),this.CurrentSplineMoveParams.LayerVerticalLimit);this.SplineTimeKey=i,this.SplineLocation.FromUeVector(t.D_GetLocationAtSplineInputKey(i,1)),this.SplineDirection.DeepCopy(t.GetDirectionAtSplineInputKey(i,1)),GravityUtils_1.GravityUtils.ConvertToPlanarVectorForActor(this.Hte,this.SplineDirection),this.SplineDirection.Normalize(),MathUtils_1.MathUtils.LookRotationUpFirst(this.SplineDirection,Vector_1.Vector.UpVectorProxy,this._sn)}};SplineMoveComponent.DaPath="/Game/Aki/Data/Fight/DA_SplineMoveConfig.DA_SplineMoveConfig",SplineMoveComponent.msn=void 0,SplineMoveComponent=SplineMoveComponent_1=__decorate([(0,RegisterComponent_1.RegisterComponent)(105)],SplineMoveComponent),exports.SplineMoveComponent=SplineMoveComponent;
//# sourceMappingURL=SplineMoveComponent.js.map