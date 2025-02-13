
"use strict";var SceneItemTurntableControllerComponent_1,__decorate=this&&this.__decorate||function(t,e,i,s){var n,h=arguments.length,r=h<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;0<=o;o--)(n=t[o])&&(r=(h<3?n(r):3<h?n(e,i,r):n(e,i))||r);return 3<h&&r&&Object.defineProperty(e,i,r),r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SceneItemTurntableControllerComponent=void 0;const Log_1=require("../../../../../Core/Common/Log"),CommonDefine_1=require("../../../../../Core/Define/CommonDefine"),Protocol_1=require("../../../../../Core/Define/Net/Protocol"),EntityComponent_1=require("../../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../../Core/Entity/RegisterComponent"),Net_1=require("../../../../../Core/Net/Net"),Rotator_1=require("../../../../../Core/Utils/Math/Rotator"),MathUtils_1=require("../../../../../Core/Utils/MathUtils"),IComponent_1=require("../../../../../UniverseEditor/Interface/IComponent"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem");class RotatingRing{constructor(){this.Index=0,this.ControllerRingActor=void 0,this.RingRotator=void 0,this.CurSpeed=-0,this.AccumulateAngle=-0,this.IsSelected=!1,this.IsAtTarget=!1,this.IsRotating=!1}}let SceneItemTurntableControllerComponent=SceneItemTurntableControllerComponent_1=class SceneItemTurntableControllerComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.p_n=void 0,this.v_n=void 0,this.Rne=void 0,this.Xte=void 0,this.u1t=void 0,this.M_n=!1,this.Rnn=()=>{EventSystem_1.EventSystem.RemoveWithTarget(this.Entity,EventDefine_1.EEventName.OnSceneInteractionLoadCompleted,this.Rnn),this.E_n()&&(this.S_n(),this.M_n=!0,this.UpdateAllRingsAtTarget(!0))&&!this.Xte?.HasTag(1298716444)&&this.y_n()},this.m1n=(t,e)=>{if(this.M_n&&1298716444===t){this.SetAllowRotate(!1);for(const s of this.v_n){var i=this.p_n.ItemConfig[s.Index];s?.IsAtTarget||(this.I_n(s,i.TargetAngle),this.UpdateRingAtTarget(s.Index,!1))}this.UpdateAllRingsAtTargetEffect(),e&&EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnTurntableControllerBusyStateChange,!1,!1)}}}OnInitData(t){var t=t.GetParam(SceneItemTurntableControllerComponent_1)[0],e=this.Entity?.GetComponent(0);if(!e)return!1;if(t){var i=t.Config.ItemConfig?.length;if(void 0===i||i<=0)Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",39,"稷廷开门机关组件创建错误，圈数不对");else{this.u1t=e,this.p_n=t.Config,this.v_n=[];for(let t=0;t<i;t++){var s=new RotatingRing;s.Index=t,s.IsAtTarget=!1,s.IsSelected=!1,s.IsRotating=!1,s.CurSpeed=0,s.AccumulateAngle=0,this.v_n.push(s)}this.M_n=!1}}return!0}OnStart(){return this.Xte=this.Entity.GetComponent(191),this.Xte?(this.p_n&&EventSystem_1.EventSystem.AddWithTarget(this.Entity,EventDefine_1.EEventName.OnSceneInteractionLoadCompleted,this.Rnn),!0):(Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",39,"稷廷开门机关组件初始化错误，找不到LevelTagComponent"),!1)}OnActivate(){this.SetAllowRotate(!1),EventSystem_1.EventSystem.HasWithTarget(this.Entity,EventDefine_1.EEventName.OnSceneItemStateChange,this.m1n)?Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",39,"SceneItemTurntableControllerComponent.OnActivate，重复添加事件",["PbDataId",this.Entity.GetComponent(0)?.GetPbDataId()]):EventSystem_1.EventSystem.AddWithTarget(this.Entity,EventDefine_1.EEventName.OnSceneItemStateChange,this.m1n)}OnTick(t){this.M_n&&(this.GetControlType()===IComponent_1.EControllerType.FixedAngle?this.T_n(t):this.L_n(t),this.D_n(t))}OnEnd(){return EventSystem_1.EventSystem.HasWithTarget(this.Entity,EventDefine_1.EEventName.OnSceneItemStateChange,this.m1n)&&EventSystem_1.EventSystem.RemoveWithTarget(this.Entity,EventDefine_1.EEventName.OnSceneItemStateChange,this.m1n),EventSystem_1.EventSystem.HasWithTarget(this.Entity,EventDefine_1.EEventName.OnSceneInteractionLoadCompleted,this.Rnn)&&EventSystem_1.EventSystem.RemoveWithTarget(this.Entity,EventDefine_1.EEventName.OnSceneInteractionLoadCompleted,this.Rnn),!0}E_n(){var t=this.Entity?.GetComponent(197);if(!t)return Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",39,"稷廷开门机关组件初始化错误，SceneItemActorComponent组件获取失败"),!1;for(const s of this.v_n){var e="Ring"+s.Index,i=t.GetActorInSceneInteraction(e);if(!i?.IsValid())return Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",39,"稷廷开门机关组件初始化错误，对应Actor无效",["key",e]),!1;s.ControllerRingActor=i}return!0}S_n(){var t=this.Xte?.HasTag(1298716444)??!1;for(const i of this.v_n){var e=this.p_n.ItemConfig[i.Index];t?this.I_n(i,e.TargetAngle):this.I_n(i,e.InitAngle)}}DeselectAllRings(t){for(const e of this.v_n)e.IsSelected=!1;t&&this.UpdateAllRingsSelectedEffect()}SelectRingByIndex(t,e){t=this.v_n[t];t&&(t.IsSelected=!0,e)&&this.UpdateRingSelectedEffectByIndex(t.Index)}DeselectRingByIndex(t,e){t=this.v_n[t];t&&(t.IsSelected=!1,e)&&this.UpdateRingSelectedEffectByIndex(t.Index)}R_n(t){switch(t){case 0:return 981971147;case 1:return 965193528;case 2:return 1015526385}return 0}U_n(t){switch(t){case 0:return-639326900;case 1:return-622549281;case 2:return-605771662}return 0}A_n(t,e){t=this.v_n[t];t&&this.M_n&&this.GetRotateAllowed()&&!this.IsBusyRotating()&&(t.AccumulateAngle=0,t.CurSpeed=Math.abs(this.p_n.RotationSpeed)*(e?1:-1)/CommonDefine_1.MILLIONSECOND_PER_SECOND,t.IsRotating=!0)}P_n(t){t=this.v_n[t];t&&this.M_n&&this.GetRotateAllowed()&&(t.AccumulateAngle=0,t.CurSpeed=0,t.IsRotating=!1)}TriggerStartSelectedRingsRotate(){this.p_n.Type===IComponent_1.EControllerType.FixedAngle?this.x_n():this.w_n()}x_n(){this.M_n&&this.GetRotateAllowed()&&this.p_n.Type===IComponent_1.EControllerType.FixedAngle&&(this.v_n.forEach(t=>{var e;t.IsSelected&&(e=0<this.p_n.RotationSpeed,this.A_n(t.Index,e))}),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnTurntableControllerBusyStateChange,!0,!1))}w_n(){this.M_n&&this.GetRotateAllowed()&&this.p_n.Type===IComponent_1.EControllerType.FreeAngle&&(this.v_n.forEach(t=>{var e;t.IsSelected&&(e=0<this.p_n.RotationSpeed,this.A_n(t.Index,e))}),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnTurntableControllerBusyStateChange,!0,!1))}TriggerStopAllRingsRotate(){this.p_n.Type===IComponent_1.EControllerType.FixedAngle?this.B_n():this.b_n()}B_n(){this.M_n&&this.GetRotateAllowed()&&this.IsBusyRotating()&&this.p_n.Type===IComponent_1.EControllerType.FixedAngle&&(this.v_n.forEach(t=>{t.IsRotating&&this.q_n(t,-t.AccumulateAngle),this.P_n(t.Index)}),this.UpdateAllRingsAtTarget(!0)&&this.y_n(),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnTurntableControllerBusyStateChange,!1,this.IsAllRingsAtTarget()))}b_n(){this.M_n&&this.GetRotateAllowed()&&this.IsBusyRotating()&&this.p_n.Type===IComponent_1.EControllerType.FreeAngle&&(this.v_n.forEach(t=>{this.P_n(t.Index)}),this.UpdateAllRingsAtTarget(!0)&&this.y_n(),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnTurntableControllerBusyStateChange,!1,this.IsAllRingsAtTarget()))}TriggerResetAllRingsToInitAngle(t=!1){!this.M_n||!this.GetRotateAllowed()||this.IsBusyRotating()||this.IsAllRingsAtTarget()&&!t||(this.v_n.forEach(t=>{var e=this.p_n.ItemConfig[t.Index];this.I_n(t,e.InitAngle)}),this.UpdateAllRingsAtTarget(!0))}T_n(e){if(this.M_n){var i=this.p_n;if(i)for(const r of this.v_n)if(r.IsRotating){let t=r.CurSpeed*e;var s,n=r.AccumulateAngle+t,h=i.ItemConfig[r.Index].RotateAngle;Math.abs(n)>=Math.abs(h)?(s=0<r.CurSpeed,t-=n-Math.abs(h)*(s?1:-1),this.q_n(r,t),r.AccumulateAngle+=t,this.P_n(r.Index),this.IsBusyRotating()?this.UpdateRingAtTarget(r.Index,!0):(this.UpdateAllRingsAtTarget(!0)&&this.y_n(),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnTurntableControllerBusyStateChange,!1,this.IsAllRingsAtTarget()))):(this.q_n(r,t),r.AccumulateAngle+=t,r.IsAtTarget&&this.UpdateRingAtTarget(r.Index,!0))}}}L_n(t){if(this.M_n)for(const i of this.v_n){var e;i.IsRotating&&(e=i.CurSpeed*t,this.q_n(i,e),i.IsAtTarget)&&this.UpdateRingAtTarget(i.Index,!0)}}D_n(t){if(this.M_n)for(const n of this.v_n){var e,i,s;n.IsRotating||!n.IsAtTarget||(s=this.p_n.ItemConfig[n.Index],s=this.G_n(this.N_n(n),s.TargetAngle),MathUtils_1.MathUtils.IsNearlyZero(s))||(e=0<s,i=this.p_n.RotationSpeed/CommonDefine_1.MILLIONSECOND_PER_SECOND,s=Math.min(Math.abs(s),Math.abs(i*t))*(e?1:-1),this.q_n(n,s))}}N_n(t){if(t?.ControllerRingActor?.IsValid())return t.RingRotator||(t.RingRotator=Rotator_1.Rotator.Create(t.ControllerRingActor.RootComponent.D_GetRelativeTransform().Rotator())),-t.RingRotator.Pitch}I_n(t,e){t.ControllerRingActor?.IsValid()&&(t.RingRotator||(t.RingRotator=Rotator_1.Rotator.Create()),t.RingRotator.Pitch=-e,t.ControllerRingActor.RootComponent.K2_SetRelativeRotation(t.RingRotator.ToUeRotator(),!1,void 0,!1))}q_n(t,e){t.ControllerRingActor?.IsValid()&&(t.RingRotator||(t.RingRotator=Rotator_1.Rotator.Create()),t.RingRotator.Pitch-=e,t.ControllerRingActor.RootComponent.K2_SetRelativeRotation(t.RingRotator.ToUeRotator(),!1,void 0,!1))}UpdateAllRingsAtTarget(t){let e=!0;for(const i of this.v_n)this.UpdateRingAtTarget(i.Index,!1)||(e=!1);return t&&this.UpdateAllRingsAtTargetEffect(),e}UpdateRingAtTarget(t,e){var i,s,n,t=this.v_n[t];return!(!t||!this.M_n||!t?.RingRotator)&&(n=this.N_n(t),i=(s=this.p_n).ItemConfig[t.Index]?.TargetAngle,s=this.p_n.Type===IComponent_1.EControllerType.FixedAngle?1:s.IntervalAngle,n=Math.abs(this.G_n(n,i)),t.IsAtTarget=n<=s,e&&this.UpdateRingAtTargetEffectByIndex(t.Index),t.IsAtTarget)}IsBusyRotating(){for(const t of this.v_n)if(t.IsRotating)return!0;return!1}IsRingRotatingByIndex(t){t=this.v_n[t];return!(!t||!this.M_n)&&t.IsRotating}GetRingsNum(){return this.v_n?.length}GetControlType(){return this.p_n.Type}IsAllRingsAtTarget(){for(const t of this.v_n)if(!t.IsAtTarget)return!1;return!0}IsRingAtTargetByIndex(t){t=this.v_n[t];return!(!t||!this.M_n)&&t.IsAtTarget}IsRingSelectedByIndex(t){t=this.v_n[t];return!(!t||!this.M_n)&&t.IsSelected}UpdateAllRingsAtTargetEffect(){if(this.Xte){this.Xte.NotifyLock++;for(const e of this.v_n){var t;e.IsAtTarget?(t=this.U_n(e.Index),this.Xte.HasTag(t)||this.Xte.AddTag(t)):(t=this.U_n(e.Index),this.Xte.HasTag(t)&&this.Xte.RemoveTag(t))}this.Xte.NotifyLock--}}UpdateRingAtTargetEffectByIndex(t){var e,t=this.v_n[t];t&&this.M_n&&(t.IsAtTarget?(e=this.U_n(t.Index),this.Xte.HasTag(e)||this.Xte.AddTag(e)):(e=this.U_n(t.Index),this.Xte.HasTag(e)&&this.Xte.RemoveTag(e)))}UpdateAllRingsSelectedEffect(){if(this.Xte){this.Xte.NotifyLock++;for(const e of this.v_n){var t;e.IsSelected?(t=this.R_n(e.Index),this.Xte.HasTag(t)||this.Xte.AddTag(t)):(t=this.R_n(e.Index),this.Xte.HasTag(t)&&this.Xte.RemoveTag(t))}this.Xte.NotifyLock--}}UpdateRingSelectedEffectByIndex(t){var e,t=this.v_n[t];t&&this.M_n&&(t.IsSelected?(e=this.R_n(t.Index),this.Xte.HasTag(e)||this.Xte.AddTag(e)):(e=this.R_n(t.Index),this.Xte.HasTag(e)&&this.Xte.RemoveTag(e)))}SetAllowRotate(t){t&&!this.GetRotateAllowed()?(this.Enable(this.Rne,"SceneItemTurntableControllerComponent.SetAllowRotate"),this.Rne=void 0):!t&&this.GetRotateAllowed()&&(this.Rne=this.Disable("稷廷开门主控机关: 旋转被禁止，禁用组件"))}GetRotateAllowed(){return void 0===this.Rne}y_n(){var t;this.u1t&&((t=Protocol_1.Aki.Protocol.f0s.create()).F4n=MathUtils_1.MathUtils.NumberToLong(this.u1t.GetCreatureDataId()),Net_1.Net.Call(20949,t,t=>{t?.G9n!==Protocol_1.Aki.Protocol.Q4n.KRs&&t?.G9n!==Protocol_1.Aki.Protocol.Q4n.Proto_ErrStateEntityStateNoChange&&(this.M_n&&this.GetRotateAllowed()&&this.IsBusyRotating()&&this.TriggerStopAllRingsRotate(),this.TriggerResetAllRingsToInitAngle(!0),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnTurntableControllerBusyStateChange,!1,!1))}))}G_n(t,e){return this.O_n(e-t,-180,180)}O_n(t,e,i){let s=t;for(;s<e;)s+=360;for(;s>=i;)s-=360;return s}};SceneItemTurntableControllerComponent=SceneItemTurntableControllerComponent_1=__decorate([(0,RegisterComponent_1.RegisterComponent)(130)],SceneItemTurntableControllerComponent),exports.SceneItemTurntableControllerComponent=SceneItemTurntableControllerComponent;
//# sourceMappingURL=SceneItemTurntableControllerComponent.js.map