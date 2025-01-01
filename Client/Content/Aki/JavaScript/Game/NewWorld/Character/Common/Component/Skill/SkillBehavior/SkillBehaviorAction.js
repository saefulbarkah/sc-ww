
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SkillBehaviorAction=void 0;const puerts_1=require("puerts"),UE=require("ue"),Protocol_1=require("../../../../../../../Core/Define/Net/Protocol"),EntitySystem_1=require("../../../../../../../Core/Entity/EntitySystem"),Vector_1=require("../../../../../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../../../../../Core/Utils/MathUtils"),CameraController_1=require("../../../../../../Camera/CameraController"),CameraUtility_1=require("../../../../../../Camera/CameraUtility"),TsBaseCharacter_1=require("../../../../../../Character/TsBaseCharacter"),Global_1=require("../../../../../../Global"),GlobalData_1=require("../../../../../../GlobalData"),ModelManager_1=require("../../../../../../Manager/ModelManager"),PhantomUtil_1=require("../../../../../../Module/Phantom/PhantomUtil"),CombatLog_1=require("../../../../../../Utils/CombatLog"),BlackboardController_1=require("../../../../../../World/Controller/BlackboardController"),WorldGlobal_1=require("../../../../../../World/WorldGlobal"),BulletController_1=require("../../../../../Bullet/BulletController"),BulletUtil_1=require("../../../../../Bullet/BulletUtil"),SceneItemReferenceComponent_1=require("../../../../../SceneItem/SceneItemReferenceComponent"),SkillBehaviorMisc_1=require("./SkillBehaviorMisc");class SkillBehaviorAction{static BeginGroup(a,r){if(r.Entity.GetComponent(3).IsAutonomousProxy)for(let e=0;e<a.Num();e++)this.Begin(a.Get(e),r)}static Begin(e,a){try{switch(e.ActionType){case 0:this.tZo(e,a);break;case 1:this.bd(e,a);break;case 2:this.iZo(e,a);break;case 3:this.oZo(e,a);break;case 4:this.rZo(e,a);break;case 5:this.nZo(e,a);break;case 6:this.sZo(e,a);break;case 7:this.aZo(e,a);break;case 8:this.hZo(e,a);break;case 9:this.bst(e,a);break;case 10:this.lZo(e,a);break;case 11:this._Zo(e,a);break;case 12:this.zpl(e,a)}}catch(e){e instanceof Error?CombatLog_1.CombatLog.ErrorWithStack("Skill",a.Entity,"SkillBehaviorAction.Begin异常",e,["技能Id",a.Skill.SkillId],["技能名",a.Skill.SkillName]):CombatLog_1.CombatLog.Error("Skill",a.Entity,"SkillBehaviorAction.Begin异常",["技能Id",a.Skill.SkillId],["技能名",a.Skill.SkillName])}}static End(r){SkillBehaviorMisc_1.paramMap.get(r)?.forEach(a=>{try{switch(a.ActionType){case 2:a.Entity.GetComponent(19).RemoveCueByHandle(a.GameplayCue);break;case 6:a.Entity.GetComponent(167).CharacterMovement.SetMovementMode(a.MovementMode);break;case 7:a.Entity.GetComponent(3).Actor.CapsuleComponent.SetCollisionResponseToChannel(a.CollisionChannel,a.CollisionResponse);break;case 8:a.SummonSkillComponent.EndSkill(a.SummonSkillId,"SkillBehaviorAction.End")}}catch(e){e instanceof Error?CombatLog_1.CombatLog.ErrorWithStack("Skill",a.Entity,"SkillBehaviorAction.End异常",e,["技能Id",r.SkillId],["技能名",r.SkillName],["技能行为",a.ActionType]):CombatLog_1.CombatLog.Error("Skill",a.Entity,"SkillBehaviorAction.End异常",["技能Id",r.SkillId],["技能名",r.SkillName],["技能行为",a.ActionType])}}),SkillBehaviorMisc_1.paramMap.delete(r)}static tZo(r,a){var i=a.Entity.GetComponent(3);let t=i.ActorLocation,e=i.ActorForward;switch(r.LocationType){case 0:break;case 1:if(a.SkillComponent.SkillTarget){[t,e]=(0,SkillBehaviorMisc_1.getLocationAndDirection)(a.SkillComponent.SkillTarget.Entity.GetComponent(1).Owner);var l=a.SkillComponent.GetTargetTransform().GetLocation(),o=(0,SkillBehaviorMisc_1.traceWall)(i,Vector_1.Vector.Create(t),Vector_1.Vector.Create(l),r.DebugTrace);if(o&&o[0])break;t=l}break;case 2:o=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentEntity.Entity.GetComponent(29).GetCurrentTarget();o&&([t,e]=(0,SkillBehaviorMisc_1.getLocationAndDirection)(o.Entity.GetComponent(1).Owner));break;case 3:[t,e]=(0,SkillBehaviorMisc_1.getLocationAndDirection)(Global_1.Global.BaseCharacter);break;case 4:l=ModelManager_1.ModelManager.CreatureModel.GetEntity(a.Entity.GetComponent(0).GetSummonerId())?.Entity?.GetComponent(1);[t,e]=(0,SkillBehaviorMisc_1.getLocationAndDirection)(l.Owner);break;case 5:[t,e]=(0,SkillBehaviorMisc_1.getLocationAndDirection)(ModelManager_1.ModelManager.CameraModel.FightCamera.GetComponent(4).CameraActor);break;case 6:o=BlackboardController_1.BlackboardController.GetVectorValueByEntity(a.Entity.Id,r.BlackboardKey);t=WorldGlobal_1.WorldGlobal.ToUeVector(o);break;case 7:l=BlackboardController_1.BlackboardController.GetIntValueByEntity(a.Entity.Id,r.BlackboardKey),o=EntitySystem_1.EntitySystem.Get(l);o?.Valid&&([t,e]=(0,SkillBehaviorMisc_1.getLocationAndDirection)(o.GetComponent(158).Owner))}switch(r.LocationForwardType){case 0:break;case 1:e=i.Actor.D_GetActorForwardVector();break;case 2:var c=i.ActorLocation.op_Subtraction(t);e.Set(c.X,c.Y,0);break;case 3:c=t.op_Subtraction(Global_1.Global.CharacterCameraManager.D_GetCameraLocation());e.Set(c.X,c.Y,0);break;case 4:(e=Global_1.Global.BaseCharacter.D_K2_GetActorLocation().op_Subtraction(t)).Set(e.X,e.Y,0)}var s,_=Vector_1.Vector.Create(t),n=new UE.TransformDouble(e.Rotation(),t,Vector_1.Vector.OneVectorDouble),k=UE.KismetMathLibrary.Conv_VectorToVectorDouble(r.LocationOffset);if(t=n.TransformPositionNoScale(k),r.Restrict){let e=i.ActorLocation;switch(r.RestrictType){case 0:e=Global_1.Global.BaseCharacter.D_K2_GetActorLocation();break;case 1:break;case 2:a.Entity.GetComponent(0).IsMonster()&&(s=i.GetInitLocation(),e.Set(s.X,s.Y,s.Z))}n=t.op_Subtraction(e).Size2D();n>r.RestrictDistance&&(k=r.RestrictDistance/n,MathUtils_1.MathUtils.LerpVector(e,t,k,t))}let v=Vector_1.Vector.Create(t);if(r.BestSpot){if(3===r.Strategy&&i.SetActorLocation(Global_1.Global.BaseCharacter.D_K2_GetActorLocation(),SkillBehaviorMisc_1.CONTEXT+".QTE设置位置保底",!1),!_.Equals(v))switch(r.Strategy){case 0:var h=(0,SkillBehaviorMisc_1.traceWall)(i,_,v,r.DebugTrace);if(!h)return;v=h[1];break;case 1:case 2:case 3:{let e=!1;var b=Vector_1.Vector.Create(),S=Vector_1.Vector.Create();v.Subtraction(_,b);for(const C of SkillBehaviorMisc_1.angles){b.RotateAngleAxis(C,Vector_1.Vector.UpVectorProxy,S),_.Addition(S,v);var M=(0,SkillBehaviorMisc_1.traceWall)(i,_,v,r.DebugTrace);if(!M)return;if(!M[0]){e=!0,v=M[1];break}}if(!e)return;let a=void 0;if(2===r.Strategy?0!==r.LocationType&&(a=Vector_1.Vector.Create(i.ActorLocation)):3===r.Strategy&&(a=Vector_1.Vector.Create(Global_1.Global.BaseCharacter.D_K2_GetActorLocation())),a){var h=Vector_1.Vector.Create(v),B=(0,SkillBehaviorMisc_1.traceWall)(i,a,h,r.DebugTrace);if(!B)return;var u=B[0];if(u){var d=u.GetHitCount();for(let e=0;e<d;e++)if(-1!==u.Actors.Get(e).Tags.FindIndex(SceneItemReferenceComponent_1.AIR_WALL)){v=B[1];break}}}break}}if(r.OnGround){n=(0,SkillBehaviorMisc_1.traceGround)(i,v,Vector_1.Vector.Create(v.X,v.Y,v.Z+SkillBehaviorMisc_1.DELTA_HEIGHT),r.DebugTrace);if(!n[0])return;(v=n[1]).Z+=r.GroundOffset}}if(t=v.ToUeVector(),0<r.Navigation&&!UE.NavigationSystemV1.D_K2_ProjectPointToNavigation(GlobalData_1.GlobalData.World,t,void 0,void 0,void 0,SkillBehaviorMisc_1.queryExtent)){k=(0,puerts_1.$ref)(void 0);if(!UE.NavigationSystemV1.D_K2_GetRandomLocationInNavigableRadius(GlobalData_1.GlobalData.World,t,k,r.Navigation))return;t=(0,puerts_1.$unref)(k)}i.SetActorLocation(t,SkillBehaviorMisc_1.CONTEXT+".Final",!1)}static bd(e,a){let r=void 0,i=void 0;switch(e.RotationType){case 0:i=a.SkillComponent.SkillTarget;break;case 1:i=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentEntity;break;case 2:var t=a.Entity.GetComponent(0);i=ModelManager_1.ModelManager.CreatureModel.GetEntity(t.GetSummonerId());break;case 3:r=ModelManager_1.ModelManager.CameraModel.FightCamera.GetComponent(4).CameraActor.D_K2_GetActorLocation();break;case 4:a.SkillComponent.SkillTarget===ModelManager_1.ModelManager.SceneTeamModel.GetCurrentEntity?r=ModelManager_1.ModelManager.CameraModel.FightCamera.GetComponent(4).CameraActor.D_K2_GetActorLocation():i=a.SkillComponent.SkillTarget;break;default:i=ModelManager_1.ModelManager.CharacterModel.GetHandleByEntity(a.Entity)}i&&i.Entity!==a.Entity&&(r=i.Entity.GetComponent(1).ActorLocation);var l,o=a.Entity.GetComponent(3);let c=void 0;(c=r?((l=r.op_Subtraction(o.ActorLocation)).Z=0,l.Rotation()):o.ActorRotation).Yaw+=e.DirectionOffset,o.SetActorRotation(c,"SkillBehaviorAction.SetDirection")}static iZo(a,r){var i=r.Entity.GetComponent(19);for(let e=0;e<a.Cues.Num();e++){var t=a.Cues.Get(e),l=i.AddCue(t.CueId,{Sync:!0});t.Stop&&(0,SkillBehaviorMisc_1.getEndSkillBehaviorParamList)(r.Skill).push({Entity:r.Entity,ActionType:a.ActionType,GameplayCue:l})}}static oZo(a,r){for(let e=0;e<a.Bullets.Num();e++){var i,t=a.Bullets.Get(e);for(let e=0;e<t.bulletCount;e++){let e=-1;r.Skill.MontageContextId?(i=r.Entity.GetComponent(3).Actor)instanceof TsBaseCharacter_1.default&&(e=BulletUtil_1.BulletUtil.CreateBulletFromAN(i,t.bulletRowName,r.Entity.GetComponent(3).ActorTransform,r.Skill.SkillId.toString(),!0,void 0)):e=BulletController_1.BulletController.CreateBulletCustomTarget(r.Entity,t.bulletRowName,r.Entity.GetComponent(3).ActorTransform,{SkillId:r.Skill.SkillId,SyncType:1},r.Skill.CombatMessageId).Id,t.BlackboardKey&&BlackboardController_1.BlackboardController.SetIntValueByEntity(r.Entity.Id,t.BlackboardKey,e)}}}static rZo(e,a){a=ModelManager_1.ModelManager.CreatureModel.GetEntityById(a.Entity.Id);CameraUtility_1.CameraUtility.CheckApplyCameraModifyCondition(a,e.CameraModifierSettings,e.CameraEffectiveClientType,e.CameraModifierConditions)&&CameraController_1.CameraController.FightCamera.LogicComponent.ApplyCameraModify(e.Tag,e.Duration,e.BlendInTime,e.BlendOutTime,e.CameraModifierSettings,void 0,e.BreakBlendOutTime,e.BlendInCurve,e.BlendOutCurve,void 0,e.CameraAttachSocket.toString())}static nZo(e,a){CameraController_1.CameraController.SequenceCamera.PlayerComponent.PlayCameraSequence(e.CameraSequenceSettings,e.ResetLockOnCamera,e.AdditiveRotation,a.Entity.GetComponent(3).Actor,e.CameraAttachSocket,e.CameraDetectSocket,e.ExtraSphereLocation,e.ExtraDetectSphereRadius,e.IsShowExtraSphere)}static sZo(e,a){a.Entity.GetComponent(167).CharacterMovement.SetMovementMode(e.BeginMovementMode),(0,SkillBehaviorMisc_1.getEndSkillBehaviorParamList)(a.Skill).push({Entity:a.Entity,ActionType:e.ActionType,MovementMode:e.EndMovementMode})}static aZo(e,a){var r=a.Entity.GetComponent(3).Actor.CapsuleComponent;e.CollisionRestore&&(0,SkillBehaviorMisc_1.getEndSkillBehaviorParamList)(a.Skill).push({Entity:a.Entity,ActionType:e.ActionType,CollisionChannel:e.CollisionChannel,CollisionResponse:r.GetCollisionResponseToChannel(e.CollisionChannel)}),r.SetCollisionResponseToChannel(e.CollisionChannel,e.CollisionResponse)}static hZo(e,a){var r=PhantomUtil_1.PhantomUtil.GetSummonedEntity(a.Entity,Protocol_1.Aki.Protocol.Summon.x3s.Proto_ESummonTypeConcomitantCustom,e.FollowIndex);r&&(r=r.Entity.GetComponent(35),e.StopSummonSkill&&(0,SkillBehaviorMisc_1.getEndSkillBehaviorParamList)(a.Skill).push({Entity:a.Entity,ActionType:e.ActionType,SummonSkillComponent:r,SummonSkillId:e.SummonSkillId}),r.BeginSkill(e.SummonSkillId,{Target:a.SkillComponent.SkillTarget?.Entity,Context:"SkillBehaviorAction.UseSummonSkill"}))}static bst(e,a){let r=void 0;switch(e.BuffTarget){case 0:r=a.Entity.GetComponent(163);break;case 1:r=a.SkillComponent.SkillTarget?.Entity?.GetComponent(163)}var i,t;r&&(e.Add?(i={InstigatorId:ModelManager_1.ModelManager.CreatureModel.GetCreatureDataId(a.Entity.Id),Reason:"从技能行为添加Buff",PreMessageId:a.Skill.CombatMessageId},a.Skill.MontageContextId?(t=a.Entity.GetComponent(163),r.AddBuffFromAnimNotify(e.BuffId,t,i)):r.AddBuff(e.BuffId,i)):r.RemoveBuff(e.BuffId,-1,"从技能行为移除Buff"))}static lZo(e,a){a=EntitySystem_1.EntitySystem.GetComponent(a.Entity.Id,194);a?.Valid&&"None"!==e.Tag.TagName&&(e.Add?a.AddTag(e.Tag.TagId):a.RemoveTag(e.Tag.TagId))}static _Zo(e,a){a=EntitySystem_1.EntitySystem.GetComponent(a.Entity.Id,18);a?.Valid&&a.TryExitWeakTime()}static zpl(e,a){a=EntitySystem_1.EntitySystem.GetComponent(a.Entity.Id,35);a?.Valid&&a.PlaySkillMontageWithEndAbility(e.MontageIndex,e.StartSection,e.StartTime)}}exports.SkillBehaviorAction=SkillBehaviorAction;
//# sourceMappingURL=SkillBehaviorAction.js.map