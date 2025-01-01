
"use strict";var BatchBulletCasterComponent_1,__decorate=this&&this.__decorate||function(t,e,i,s){var o,r=arguments.length,h=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;0<=n;n--)(o=t[n])&&(h=(r<3?o(h):3<r?o(e,i,h):o(e,i))||h);return 3<r&&h&&Object.defineProperty(e,i,h),h};Object.defineProperty(exports,"__esModule",{value:!0}),exports.BatchBulletCasterComponent=void 0;const Log_1=require("../../../../../Core/Common/Log"),CommonDefine_1=require("../../../../../Core/Define/CommonDefine"),EntityComponent_1=require("../../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../../Core/Entity/RegisterComponent"),TimerSystem_1=require("../../../../../Core/Timer/TimerSystem"),FNameUtil_1=require("../../../../../Core/Utils/FNameUtil"),Transform_1=require("../../../../../Core/Utils/Math/Transform"),Vector_1=require("../../../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../../../Core/Utils/MathUtils"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),EffectContext_1=require("../../../../Effect/EffectContext/EffectContext"),EffectParameterNiagara_1=require("../../../../Effect/EffectParameter/EffectParameterNiagara"),EffectSystem_1=require("../../../../Effect/EffectSystem"),GlobalData_1=require("../../../../GlobalData"),ModelManager_1=require("../../../../Manager/ModelManager"),BulletController_1=require("../../../Bullet/BulletController"),WARNING_EFFECT_LENGTH_KEY="length",WARNING_EFFECT_WIDTH_KEY="width";class BulletCaster{constructor(t,e,i,s){this.OwnerEntity=t,this.CasterConfig=e,this.CasterRelTransform=i,this.BulletContextId=s,this.WarningEffect="",this.sCl=[],this.aCl=new Set,this.lCl=new Map,this.hCl=new Map}Start(){!this.CasterConfig.DelayTime||this.CasterConfig.DelayTime<=TimerSystem_1.MIN_TIME?this._Cl():(t=TimerSystem_1.TimerSystem.Delay(()=>{this.sCl.pop(),this._Cl()},this.CasterConfig.DelayTime))&&this.sCl.push(t);var t=this.OwnerEntity.GetComponent(111),t=this.OwnerEntity.TimeDilation*(t?.CurrentTimeScale??1);this.SetTimeDilation(t)}_Cl(){if(this.CasterConfig.FlyTime<TimerSystem_1.MIN_TIME)Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",39,"Bullet飞行时间<=0",["OwnerEntityId",this.OwnerEntity.Id]);else{var t=this.OwnerEntity.GetComponent(1).ActorTransform,e=this.CasterRelTransform.ToUeTransform().op_Multiply(t),i=MathUtils_1.MathUtils.CommonTempVector,t=(this.CasterRelTransform.GetRotation().GetForwardVector(i).GetSafeNormal(i,MathUtils_1.MathUtils.SmallNumber),i.MultiplyEqual(this.CasterConfig.FlyDistance),t.TransformVector(i.ToUeVector())),i=BulletController_1.BulletController.GetSceneBulletOwner();if(i?.IsInit){t=e.GetLocation().op_Addition(t),i=(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneItem",39,"Bullet生成",["InitLoc",e.GetLocation()],["TargetLoc",t]),BulletController_1.BulletController.CreateBulletCustomTarget(i.Entity,this.CasterConfig.BulletType.toString(),e,{InitTargetLocation:t},this.BulletContextId));if(i?.Valid){const s=i.Id;Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Bullet",39,"创建子弹",["BulletId",s]);e=TimerSystem_1.TimerSystem.Delay(()=>{this.hCl.delete(s),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Bullet",39,"Timer销毁子弹",["BulletId",s]),BulletController_1.BulletController.DestroyBullet(s,!1)},this.CasterConfig.WarningTime+this.CasterConfig.FlyTime);e&&this.hCl.set(s,e);const o=this.CasterConfig.FlyDistance/(this.CasterConfig.FlyTime*CommonDefine_1.SECOND_PER_MILLIONSECOND);if(this.CasterConfig.WarningTime<TimerSystem_1.MIN_TIME)BulletController_1.BulletController.SetBulletSpeedRatio(s,o);else{const r=this.uCl();EffectSystem_1.EffectSystem.IsValid(r)&&this.aCl.add(r),BulletController_1.BulletController.SetBulletSpeedRatio(s,0);t=TimerSystem_1.TimerSystem.Delay(()=>{EffectSystem_1.EffectSystem.IsValid(r)&&EffectSystem_1.EffectSystem.StopEffectById(r,"[BulletCaster] WarnEnd",!1),this.aCl.delete(r),this.lCl.delete(s),BulletController_1.BulletController.SetBulletSpeedRatio(s,o)},this.CasterConfig.WarningTime);t&&this.lCl.set(i.Id,t)}e=this.OwnerEntity.GetComponent(111),i=this.OwnerEntity.TimeDilation*(e?.CurrentTimeScale??1);this.SetTimeDilation(i)}}else Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",39,"Bullet生成错误, 找不到场景子弹owner",["OwnerEntityId",this.OwnerEntity.Id])}}Stop(){for(const s of this.sCl)s.Valid()&&s.Remove();this.sCl.length=0;for(var[,t]of this.lCl)t.Valid()&&t.Remove();this.lCl.clear();for(const o of this.aCl)EffectSystem_1.EffectSystem.IsValid(o)&&EffectSystem_1.EffectSystem.StopEffectById(o,"[BulletCaster] Stop",!1);this.aCl.clear();for(var[e,i]of this.hCl)i.Valid()&&i.Remove(),BulletController_1.BulletController.DestroyBullet(e,!0);this.hCl.clear()}SetTimeDilation(t){for(const h of this.sCl)h.Valid()&&BatchBulletCasterComponent.SetTimerHandleTimeDilation(h,t);for(var[,e]of this.lCl)e.Valid()&&BatchBulletCasterComponent.SetTimerHandleTimeDilation(e,t);var i,s,o=0<this.CasterConfig.WarningTime?1/(this.CasterConfig.WarningTime*CommonDefine_1.SECOND_PER_MILLIONSECOND):1;for(const n of this.aCl)EffectSystem_1.EffectSystem.IsValid(n)&&EffectSystem_1.EffectSystem.SetTimeScale(n,t*o,!0);for([i,s]of this.hCl){var r=ModelManager_1.ModelManager.BulletModel?.GetBulletEntityById(i);r?.Valid&&r.SetTimeDilation(t),s.Valid()&&BatchBulletCasterComponent.SetTimerHandleTimeDilation(s,t)}}uCl(){var t,e;return 0===this.WarningEffect.length?0:(t=this.OwnerEntity.GetComponent(1).ActorTransform,t=this.CasterRelTransform.ToUeTransform().op_Multiply(t),t=EffectSystem_1.EffectSystem.SpawnEffect(GlobalData_1.GlobalData.World,t,this.WarningEffect,"[BatchBulletCasterComponent] PlayWarningEffect",new EffectContext_1.EffectContext(this.OwnerEntity.Id)),(e=new EffectParameterNiagara_1.EffectParameterNiagara).UserParameterFloat=[],e.UserParameterFloat.push([FNameUtil_1.FNameUtil.GetDynamicFName(WARNING_EFFECT_LENGTH_KEY),this.CasterConfig.FlyDistance],[FNameUtil_1.FNameUtil.GetDynamicFName(WARNING_EFFECT_WIDTH_KEY),this.CasterConfig.WarningWidth]),EffectSystem_1.EffectSystem.SetEffectParameterNiagara(t,e),t)}}class BulletCasterBatch{constructor(t,e,i,s){this.OwnerEntity=t,this.BatchConfig=e,this.DelayTime=i,this.LoopInterval=s,this.BulletCasters=[],this.cCl=void 0,this.mCl=void 0,this.dCl=()=>{for(const t of this.BulletCasters)t.Start()}}Start(){this.DelayTime<TimerSystem_1.MIN_TIME?this._Cl():this.cCl=TimerSystem_1.TimerSystem.Delay(()=>{this._Cl()},this.DelayTime);var t=this.OwnerEntity.GetComponent(111),t=this.OwnerEntity.TimeDilation*(t?.CurrentTimeScale??1);this.SetTimeDilation(t)}_Cl(){this.LoopInterval<TimerSystem_1.MIN_TIME?this.dCl():(this.dCl(),this.mCl=TimerSystem_1.TimerSystem.Forever(this.dCl,this.LoopInterval));var t=this.OwnerEntity.GetComponent(111),t=this.OwnerEntity.TimeDilation*(t?.CurrentTimeScale??1);this.SetTimeDilation(t)}Stop(){for(const t of this.BulletCasters)t.Stop();this.mCl?.Valid()&&this.mCl.Remove(),this.mCl=void 0,this.cCl?.Valid()&&this.cCl.Remove(),this.cCl=void 0}SetTimeDilation(t){this.cCl?.Valid()&&BatchBulletCasterComponent.SetTimerHandleTimeDilation(this.cCl,t),this.mCl?.Valid()&&BatchBulletCasterComponent.SetTimerHandleTimeDilation(this.mCl,t);for(const e of this.BulletCasters)e.SetTimeDilation(t)}}let BatchBulletCasterComponent=BatchBulletCasterComponent_1=class BatchBulletCasterComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.EIe=void 0,this.mBe=void 0,this.JUn=BigInt(0),this.R0n=void 0,this.CCl=0,this.gCl=[],this.pCl=!1,this.oFe=()=>{this.mBe.IsInState(2)?this.fCl():this.vCl()}}OnInitData(t){var e=t?.GetParam(BatchBulletCasterComponent_1)?.[0];if(!e)return!1;this.R0n=e,this.EIe=this.Entity.GetComponent(0);t=this.EIe?.ComponentDataMap.get("Wr1");if(!t)return!1;this.JUn=MathUtils_1.MathUtils.LongToBigInt(t.Wr1._Vn);var i=[];for(const _ of e.BulletList){var s=Transform_1.Transform.Create(),o=_.Pos,r=_.Rot;MathUtils_1.MathUtils.CommonTempVector.Set(o.X??0,o.Y??0,o.Z??0),s.SetLocation(MathUtils_1.MathUtils.CommonTempVector),MathUtils_1.MathUtils.CommonTempRotator.Set(r.Y??0,r.Z??0,r.X??0),s.SetRotation(MathUtils_1.MathUtils.CommonTempRotator.Quaternion()),s.SetScale3D(Vector_1.Vector.OneVectorProxy),i.push(s)}this.CCl=0;var h=[];for(const f of e.BatchList)f.Time>this.CCl&&(this.CCl=f.Time),h.push(this.CCl);for(let t=0;t<e.BatchList.length;++t){var n=e.BatchList[t],a=new BulletCasterBatch(this.Entity,n,h[t],this.CCl);this.gCl.push(a);for(const m of n.CasterList){var l=m.BulletIndex-1,l=new BulletCaster(this.Entity,m,i[l],this.JUn);l.WarningEffect=e.WarningEffect,a.BulletCasters.push(l)}}return!0}OnStart(){return this.mBe=this.Entity.GetComponent(122),!0}OnActivate(){EventSystem_1.EventSystem.AddWithTargetUseHoldKey(this,this.Entity,EventDefine_1.EEventName.OnSceneItemStateChange,this.oFe),this.mBe.IsInState(0)||this.oFe()}OnEnd(){return EventSystem_1.EventSystem.RemoveAllTargetUseKey(this),this.vCl(),!0}OnChangeTimeDilation(t){var e=this.Entity.GetComponent(111)?.CurrentTimeScale??1;for(const i of this.gCl)i.SetTimeDilation(t*e)}fCl(){if(!(!this.R0n||this.R0n.BatchList.length<0||this.CCl<=0||this.pCl)){this.pCl=!0,Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneItem",39,"[BatchBulletCasterComponent] StartLoop",["PbDataId",this.EIe?.GetPbDataId()]);for(const t of this.gCl)t.Start()}}vCl(){if(this.pCl){this.pCl=!1,Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneItem",39,"[BatchBulletCasterComponent] StopLoop",["PbDataId",this.EIe?.GetPbDataId()]);for(const t of this.gCl)t.Stop()}}static SetTimerHandleTimeDilation(t,e){t.Valid()&&(0===e?t.IsPause()||t.Pause():0<e&&(t.IsPause()&&t.Resume(),t.ChangeDilation(e)))}};BatchBulletCasterComponent=BatchBulletCasterComponent_1=__decorate([(0,RegisterComponent_1.RegisterComponent)(244)],BatchBulletCasterComponent),exports.BatchBulletCasterComponent=BatchBulletCasterComponent;
//# sourceMappingURL=BatchBulletCasterComponent.js.map