
"use strict";var __decorate=this&&this.__decorate||function(t,e,i,s){var o,n=arguments.length,h=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;0<=r;r--)(o=t[r])&&(h=(n<3?o(h):3<n?o(e,i,h):o(e,i))||h);return 3<n&&h&&Object.defineProperty(e,i,h),h};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SceneItemMoveComponent=exports.SceneItemSplineMoveAtDynamicSpeedEditableParam=exports.SceneItemSplineMoveAtDynamicSpeedParam=exports.SceneItemSplineMoveAtConstantTimeParam=exports.MoveTarget=void 0;const puerts_1=require("puerts"),UE=require("ue"),Info_1=require("../../../../../Core/Common/Info"),Log_1=require("../../../../../Core/Common/Log"),Protocol_1=require("../../../../../Core/Define/Net/Protocol"),EntityComponent_1=require("../../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../../Core/Entity/RegisterComponent"),Net_1=require("../../../../../Core/Net/Net"),CurveFloatHandle_1=require("../../../../../Core/Utils/CurveFloatHandle"),Vector_1=require("../../../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../../../Core/Utils/MathUtils"),IAction_1=require("../../../../../UniverseEditor/Interface/IAction"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),TimeUtil_1=require("../../../../Common/TimeUtil"),ModelManager_1=require("../../../../Manager/ModelManager"),SCENEITEM_MOVE_DEBUG_KEY="SCENEITEM_MOVE_DEBUG",OFFSET=100;class MoveTarget{constructor(t,e,i=0,s=-1,o=-1){this.TargetPosData=t,this.MoveTime=e,this.StayTime=i,this.MaxSpees=s,this.Acceleration=o}}exports.MoveTarget=MoveTarget;class SceneItemSplineMoveBaseParam{constructor(t){this.Spline=t,this.IsCycle=!1,this.IsKeepLookAt=!1,this.StartDis=-1,this.EndDis=-1}}class SceneItemSplineMoveAtConstantTimeParam extends SceneItemSplineMoveBaseParam{constructor(){super(...arguments),this.IsRepeat=!1,this.TimeSec=0,this.TimeDisCurve=void 0,this.StartTimeOffset=0}}exports.SceneItemSplineMoveAtConstantTimeParam=SceneItemSplineMoveAtConstantTimeParam;class SceneItemSplineMoveAtDynamicSpeedParam extends SceneItemSplineMoveBaseParam{constructor(){super(...arguments),this.MaxMoveTimes=-1,this.InitSpeed=0,this.TargetSpeed=0,this.Acceleration=0}}exports.SceneItemSplineMoveAtDynamicSpeedParam=SceneItemSplineMoveAtDynamicSpeedParam;class SceneItemSplineMoveAtDynamicSpeedEditableParam{constructor(){this.CurrentSpeed=void 0,this.TargetSpeed=void 0,this.Acceleration=void 0}Clear(){this.CurrentSpeed=void 0,this.TargetSpeed=void 0,this.Acceleration=void 0}Equals(t){return!!t&&this.CurrentSpeed===t.CurrentSpeed&&this.TargetSpeed===t.TargetSpeed&&this.Acceleration===t.Acceleration}}exports.SceneItemSplineMoveAtDynamicSpeedEditableParam=SceneItemSplineMoveAtDynamicSpeedEditableParam;let SceneItemMoveComponent=class SceneItemMoveComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.ActorComp=void 0,this.o4o=void 0,this.Nln=void 0,this.Oln=void 0,this.kln=!1,this.ZPl=!1,this.Anr=Vector_1.Vector.Create(),this.Fln=[],this._ii=1,this._ae=Vector_1.Vector.Create(),this.Due=Vector_1.Vector.Create(),this.Vln=Vector_1.Vector.Create(),this.Hln=-0,this.jln=!1,this.Wln=!1,this.BNn=!1,this.wNn=[],this.hIn=[],this.OnStopPatrol=()=>{this.jln=!1,this.RemoveStopMoveCallback(this.OnStopPatrol),0<this.Xd_.length&&this.RemoveAllOnArrivePointCallbacks(),Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneItem",39,"SceneItemMoveComponent 样条移动停止",["EntityId",this.Entity.Id]),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnSceneItemSplineMoveStopped,this.Entity)},this.lIn=()=>{this.BNn=!0;for(const t of this.hIn)t(this.Entity);this.BNn=!1;for(const e of this.wNn)this.hIn.push(e);this.wNn.length=0},this.Xd_=[]}static get Dependencies(){return[200,0]}get IsMovingPrepareCompleted(){return this.Wln}get IsMoving(){return Info_1.Info.EnableForceTick?0<this.Fln.length||0===this._ii:this.IsMovingPrepareCompleted?this.o4o.IsMoving():0<this.Fln.length}get ForceSyncing(){return this.ZPl}set ForceSyncing(t){this.ZPl=t,this.ZPl&&this.Nln?.SetEnableMovementSync(!0,"SceneItemMoveComponent ForceSyncing")}IsSplineMoving(){return!!this.IsMovingPrepareCompleted&&0!==this.o4o.GetSplineRunState()}GetDistanceAloneSpline(){return this.IsMovingPrepareCompleted?this.o4o.GetDistanceAlongSpline():0}OnStart(){var t=this.Entity.GetComponent(0);return this.ActorComp=this.Entity.GetComponent(200),this.Nln=this.Entity.GetComponent(156),this.Oln=this.Entity.GetComponent(128),this.Nln?.SetEnableMovementSync(!1,"SceneItemMoveComponent OnStart"),t&&t.GetPbEntityInitData()&&!Info_1.Info.EnableForceTick&&(this.o4o=this.ActorComp.Owner.GetComponentByClass(UE.KuroSceneItemMoveComponent.StaticClass()),this.o4o?.IsValid()||(this.o4o=this.ActorComp.Owner.AddComponentByClass(UE.KuroSceneItemMoveComponent.StaticClass(),!1,new UE.Transform,!1)),this.o4o.Kuro_SetGravityDirect(this.ActorComp.ActorGravityDirectProxy.ToUeVectorOld()),this.o4o.SetTickingMoveEnable(!1)),!0}OnActivate(){if(!Info_1.Info.EnableForceTick&&0<this.Fln.length){for(const t of this.Fln)this.o4o.AddMoveTarget(new UE.VectorDouble(t.TargetPosData.X??0,t.TargetPosData.Y??0,t.TargetPosData.Z??0),t.MoveTime,t.StayTime);this.Fln=[],this.o4o.SetTickingMoveEnable(!0),this.Oln.IsMoving=!0}this.Wln=!0}Kln(){return Vector_1.Vector.DistSquared(this._ae,this.Vln)>=this.Hln}OnTick(t){this.Oln.IsMoving?this.IsMoving&&2!==this.o4o.GetSimpleRunState()||(this.Oln.IsMoving=!1):this.IsMoving&&1===this.o4o.GetSimpleRunState()&&(this.Oln.IsMoving=!0),!this.kln||this.IsMoving||this.ForceSyncing||(this.kln=!1,this.Nln?.GetEnableMovementSync()&&this.Nln?.SetEnableMovementSync(!1,"SceneItemMoveComponent MoveStop"))}OnForceTick(t){var e,i;super.OnTick(t),0===this._ii?(this.Anr.Addition(this.ActorComp.ActorLocationProxy,this.Vln),this.Kln()?(this.ActorComp.SetActorLocation(this.Due.ToUeVector()),this._ii=1):this.ActorComp.SetActorLocation(this.Vln.ToUeVector())):this.Fln&&0!==this.Fln.length&&(e=this.Fln[0],this.Fln.splice(0,1),this.Due=Vector_1.Vector.Create(e.TargetPosData.X,e.TargetPosData.Y,e.TargetPosData.Z),e.MoveTime<=MathUtils_1.MathUtils.KindaSmallNumber?this.ActorComp.SetActorLocation(this.Due.ToUeVector()):(this._ae.DeepCopy(this.ActorComp.ActorLocationProxy),this.Hln=Vector_1.Vector.DistSquared(this._ae,this.Due),i=Vector_1.Vector.Create(),this.Due.Subtraction(this._ae,i),i.Division(e.MoveTime*TimeUtil_1.TimeUtil.InverseMillisecond/t,i),this.Anr=i,this._ii=0))}bSa(t){var e;!Info_1.Info.EnableForceTick&&this.IsMovingPrepareCompleted?(e=Vector_1.Vector.Create(t.TargetPosData.X??0,t.TargetPosData.Y??0,t.TargetPosData.Z??0),this.o4o.AddMoveTarget(e.ToUeVector(),t.MoveTime,t.StayTime,t.MaxSpees,t.Acceleration),this.Oln.IsMoving||this.AddStopMoveCallback(this.lIn),this.o4o.SetTickingMoveEnable(!0),e=Vector_1.Vector.Dist(e,this.ActorComp.ActorLocationProxy),0===this.o4o.GetSimpleRunState()&&e>OFFSET&&(this.Oln.IsMoving=!0)):this.Fln.push(t),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Movement",31,"添加路径点",["moveTargetX",t.TargetPosData.X],["moveTargetY",t.TargetPosData.Y],["moveTargetZ",t.TargetPosData.Z],["Time",t.MoveTime])}AddMoveTarget(e){if(this.jln)Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",31,"当前SceneItem正在巡逻中,不可再添加目标点",["PbDataId",this.Entity.GetComponent(0).GetPbDataId()]);else{let t=void 0;var i;t=e instanceof MoveTarget?e:(i=e.MoveMotion?.Type===IAction_1.EMoveMotion.VariableMotion?-1:e.MoveMotion?.Time??0,new MoveTarget(e.Point,i)),this.bSa(t),ModelManager_1.ModelManager.GameModeModel.IsMulti&&this.RequestMoveToTarget(t)}}AddSimpleRotation(t,e,i,s){this.o4o.InitRotationData(t,!1),this.o4o.AddRotationStep(e.ToUeRotator(),i.ToUeRotator(),s,0,void 0),this.o4o.StartRotate()}RequestMoveToTarget(t){var e=Protocol_1.Aki.Protocol.d0a.create();e.M0a=Protocol_1.Aki.Protocol.E0a.create(),e.M0a.F4n=this.ActorComp.CreatureData.GetCreatureDataId(),e.M0a.P5n={X:t.TargetPosData.X,Y:t.TargetPosData.Y,Z:t.TargetPosData.Z},e.M0a.g0a=t.MoveTime,e.M0a.f0a=t.StayTime,e.M0a.v0a=t.MaxSpees,e.M0a.p0a=t.Acceleration,Net_1.Net.Call(29509,e,t=>{})}HandleMoveToTarget(t){t=new MoveTarget({X:t.M0a.P5n.X,Y:t.M0a.P5n.Y,Z:t.M0a.P5n.Z},t.M0a.g0a,t.M0a.f0a,t.M0a.v0a,t.M0a.p0a);this.bSa(t)}static ParseOldPatrolParamToSplineMoveWithConstantTimeParam(i,s,o,t,e,n,h){var r,a=new SceneItemSplineMoveAtConstantTimeParam(i);a.IsRepeat=t,a.IsCycle=e,a.IsKeepLookAt=n,a.StartTimeOffset=h;let c=i.GetSplineLength();t&&e&&!i.IsClosedLoop()&&(n=i.GetNumberOfSplinePoints()-1,h=i.GetLocationAtSplinePoint(0,0),t=i.GetLeaveTangentAtSplinePoint(n,0),e=i.GetLeaveTangentAtSplinePoint(0,0),h=h.op_Subtraction(t).GetSafeNormal(MathUtils_1.MathUtils.SmallNumber),t=i.GetArriveTangentAtSplinePoint(n,0),r=h,i.SetClosedLoop(!0),i.SetTangentsAtSplinePoint(0,h,e,0),i.SetTangentsAtSplinePoint(n,t,r,0),h=i.GetSplineLength(),c=h);var m=new CurveFloatHandle_1.CurveFloatHandle;let v=0;for(let e=0;e<=i.GetNumberOfSplineSegments();e++){var l=i.GetDistanceAlongSplineAtSplinePoint(e),S=o[e]<0?0:o[e]??0,_=s[e]<0?0:s[e]??0;let t=0;if(e<i.GetNumberOfSplineSegments()&&(p=i.GetDistanceAlongSplineAtSplinePoint(e+1),t=p-l),!t&&!S){m.AddKey(v,l,1);break}if(m.AddKey(v,l),!t){m.AddKey(v+S,l,1),v+=S;break}S&&m.AddKey(v+S,l);var p=_?Math.abs(t/_):0;m.AddKey(v+S+p,l+t,1),v+=S+p}return m.MapRangeClampedTimeAndValue([0,v],[0,1],[0,c],[0,1]),a.TimeSec=v,a.TimeDisCurve=m.ToUeCurveFloat(),a}StartPatrolAtConstantTime(t,e,i=!0){return this.o4o.StartMoveWithSplineAtConstantTime(t.Spline,t.IsRepeat,t.IsCycle,t.IsKeepLookAt,t.TimeSec,t.TimeDisCurve,t.StartTimeOffset,t.StartDis,t.EndDis)?(this.jln=!0,this.kln=i,this.Nln?.SetEnableMovementSync(i,"SceneItemMoveComponent StartPatrolAtConstantTime"),this.AddStopMoveCallback(this.OnStopPatrol),e&&this.AddStopMoveCallback(e),Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneItem",39,"SceneItemMoveComponent 样条移动(ConstantTime)开始",["EntityId",this.Entity.Id]),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnSceneItemSplineMoveStarted,this.Entity),!0):(Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",39,"SceneItemMoveComponent 样条移动(ConstantTime)开始失败",["EntityId",this.Entity.Id]),!1)}StartPatrolAtDynamicSpeed(t,e,i=!0){return this.o4o.StartMoveWithSplineAtDynamicSpeed(t.Spline,t.MaxMoveTimes,t.IsCycle,t.IsKeepLookAt,t.InitSpeed,t.Acceleration,t.TargetSpeed,t.StartDis,t.EndDis)?(this.jln=!0,this.kln=i,this.Nln?.SetEnableMovementSync(i,"SceneItemMoveComponent StartPatrolAtDynamicSpeed"),this.AddStopMoveCallback(this.OnStopPatrol),e&&this.AddStopMoveCallback(e),Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneItem",39,"SceneItemMoveComponent 样条移动(DynamicSpeed)开始",["EntityId",this.Entity.Id]),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnSceneItemSplineMoveStarted,this.Entity),!0):(Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",39,"SceneItemMoveComponent 样条移动(DynamicSpeed)开始失败",["EntityId",this.Entity.Id]),!1)}UpdatePatrolAtDynamicSpeedEditableParam(t){var e,i,s;return!!this.o4o?.IsMoving()&&(s=this.o4o.SplineMoveData.DynamicSpeedData,e=t.CurrentSpeed??s.CurrentSpeed,i=t.Acceleration??s.Acceleration,t=t.TargetSpeed??s.TargetSpeed,(s=this.o4o.UpdateDynamicSpeedSplineMoveParams(e,i,t))?(ModelManager_1.ModelManager.SundryModel?.GetModuleDebugLevel(SCENEITEM_MOVE_DEBUG_KEY)&&Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneItem",39,"SceneItemMoveComponent 更新样条移动参数",["EntityId",this.Entity.Id],["当前速度",e],["加速度",i],["目标速度",t]),s):(Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",39,"SceneItemMoveComponent 更新样条移动动态参数失败",["EntityId",this.Entity.Id]),!1))}GetSplineMoveDynamicSpeedData(){if(this.o4o?.IsMoving())return this.o4o.SplineMoveData.DynamicSpeedData}StopMove(t=!1){var e,i;Info_1.Info.EnableForceTick?(this.Fln=[],this._ii=1):this.IsMovingPrepareCompleted?((this.hIn.length=0)<this.Xd_.length&&this.RemoveAllOnArrivePointCallbacks(),i=!!(e=this.o4o?.IsMoving(!0))&&0!==this.o4o?.GetSimpleRunState(),this.o4o.StopAllMove(t),e&&(i?Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneItem",39,"SceneItemMoveComponent 简单移动中断",["EntityId",this.Entity.Id]):(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneItem",39,"SceneItemMoveComponent 样条移动中断",["EntityId",this.Entity.Id]),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnSceneItemSplineMoveBroken,this.Entity)))):this.Fln=[]}GetNextTarget(){var t,e;return this.o4o?.IsValid()?(t=(0,puerts_1.$ref)(new UE.VectorDouble),e=(0,puerts_1.$ref)(new UE.VectorDouble),{HasTarget:this.o4o.GetNextMoveTarget(t,e),Target:(0,puerts_1.$unref)(t),Velocity:(0,puerts_1.$unref)(e)}):(Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",31,"SceneItemMoveComponent不存在",["PbDataId",this.Entity.GetComponent(0).GetPbDataId()],["IsEntityInit",this.Entity.IsInit]),{HasTarget:!1,Target:new UE.VectorDouble,Velocity:new UE.VectorDouble})}AddStopMoveCallback(t){this.o4o.OnStopCallback.Add(t)}RemoveStopMoveCallback(t){this.o4o.OnStopCallback.Remove(t)}AddOnArrivePointCallback(t){this.Xd_.push(t),this.o4o.OnArrivePointCallback.Add(t)}RemoveOnArrivePointCallback(t){this.o4o.OnArrivePointCallback.Remove(t)}RemoveAllOnArrivePointCallbacks(){for(const t of this.Xd_)this.o4o.OnArrivePointCallback.Remove(t);this.Xd_.length=0}AddStopMoveCallbackWithEntity(t){(this.BNn?this.wNn:this.hIn).push(t)}RemoveStopMoveCallbackWithEntity(t){this.hIn.includes(t)&&this.hIn.splice(this.hIn.indexOf(t),1)}ClearStopMoveCallbackWithEntity(){this.hIn.length=0}GetDebugString(){let t="";var e;return this.o4o?.IsValid()&&(e=this.o4o.IsMoving(!0),t+=`移动中: ${e}
`,e)&&(e=this.o4o.GetSimpleRunState(),t+=`简单移动状态: ${e}
`,e=this.o4o.GetSplineRunState(),t+=`样条移动状态: ${e}
`,0!==e)&&(e=this.o4o.SplineMoveData.DynamicSpeedData,t=(t=(t=(t=(t+=`动态速度参数:
`)+`	CurrentSpeed: ${e.CurrentSpeed.toFixed(2)}
`)+`	TargetSpeed: ${e.TargetSpeed.toFixed(2)}
`)+`	Acceleration: ${e.Acceleration.toFixed(2)}
`)+`	EndDis: ${e.EndDis.toFixed(2)}
`,e=this.o4o.SplineMoveData.StaticTimeDisData,t=(t+=`固定时间参数:
`)+`	TimeDisCurveValid: ${!!e.TimeDisCurve?.IsValid()}
`),t}};SceneItemMoveComponent=__decorate([(0,RegisterComponent_1.RegisterComponent)(126)],SceneItemMoveComponent),exports.SceneItemMoveComponent=SceneItemMoveComponent;
//# sourceMappingURL=SceneItemMoveComponent.js.map