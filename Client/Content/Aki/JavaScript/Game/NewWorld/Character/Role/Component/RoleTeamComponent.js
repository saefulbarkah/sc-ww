
"use strict";var __decorate=this&&this.__decorate||function(e,t,i,s){var o,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var h=e.length-1;0<=h;h--)(o=e[h])&&(r=(a<3?o(r):3<a?o(t,i,r):o(t,i))||r);return 3<a&&r&&Object.defineProperty(t,i,r),r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.RoleTeamComponent=void 0;const UE=require("ue"),Log_1=require("../../../../../Core/Common/Log"),Time_1=require("../../../../../Core/Common/Time"),EntityComponent_1=require("../../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../../Core/Entity/RegisterComponent"),ResourceSystem_1=require("../../../../../Core/Resource/ResourceSystem"),TimerSystem_1=require("../../../../../Core/Timer/TimerSystem"),FNameUtil_1=require("../../../../../Core/Utils/FNameUtil"),Vector_1=require("../../../../../Core/Utils/Math/Vector"),CameraController_1=require("../../../../Camera/CameraController"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),EffectContext_1=require("../../../../Effect/EffectContext/EffectContext"),EffectSystem_1=require("../../../../Effect/EffectSystem"),Global_1=require("../../../../Global"),GlobalData_1=require("../../../../GlobalData"),ModelManager_1=require("../../../../Manager/ModelManager"),FormationDataController_1=require("../../../../Module/Abilities/FormationDataController"),BattleUiDefine_1=require("../../../../Module/BattleUi/BattleUiDefine"),SceneTeamDefine_1=require("../../../../Module/SceneTeam/SceneTeamDefine"),UiCameraAnimationManager_1=require("../../../../Module/UiCameraAnimation/UiCameraAnimationManager"),EffectUtil_1=require("../../../../Utils/EffectUtil"),CharacterBuffIds_1=require("../../Common/Component/Abilities/CharacterBuffIds"),CharacterUnifiedStateComponent_1=require("../../Common/Component/Abilities/CharacterUnifiedStateComponent"),CharacterUnifiedStateTypes_1=require("../../Common/Component/Abilities/CharacterUnifiedStateTypes"),RoleInheritComponent_1=require("./RoleInheritComponent");let RoleTeamComponent=class RoleTeamComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.Hte=void 0,this.m1t=void 0,this.Xte=void 0,this.mBe=void 0,this.Mrn=void 0,this.cBe=void 0,this.Ern=void 0,this.Gce=void 0,this.Nce=void 0,this.cZr=void 0,this.yGl=void 0,this.EGl=void 0,this.IGl=void 0,this.Srn=void 0,this.yrn=void 0,this.Irn=-1,this.wCl=void 0,this.GoBattleSkill=!1,this.Trn=void 0,this.Lrn=void 0,this.DSa=0,this.Drn=void 0}OnInit(e){return this.m1t=this.Entity.GetComponent(163),this.Xte=this.Entity.GetComponent(194),this.Hte=this.Entity.GetComponent(3),this.mBe=this.Entity.GetComponent(164),this.Mrn=this.Entity.GetComponent(88),this.cBe=this.Entity.GetComponent(35),this.Ern=this.Entity.GetComponent(90),this.Gce=this.Entity.GetComponent(167),this.Nce=this.Entity.GetComponent(55),this.cZr=this.Entity.GetComponent(29),this.yGl=this.Entity.GetComponent(58),this.EGl=this.Entity.GetComponent(59),this.IGl=this.Entity.GetComponent(91),!0}OnStart(){var e=EffectUtil_1.EffectUtil.GetEffectPath(SceneTeamDefine_1.GO_BATTLE_MATERIAL),e=(ResourceSystem_1.ResourceSystem.LoadAsync(e,UE.PD_CharacterControllerDataGroup_C,e=>{e&&(this.Srn=e)}),EffectUtil_1.EffectUtil.GetEffectPath(SceneTeamDefine_1.GO_DOWN_MATERIAL));return ResourceSystem_1.ResourceSystem.LoadAsync(e,UE.PD_CharacterControllerData_C,e=>{e&&(this.yrn=e)}),!0}OnEnd(){return this.Rrn(),!0}Rrn(){this.Trn?.EndTask(),this.Trn=void 0,this.Lrn?.EndTask(),this.Lrn=void 0,this.Drn&&(TimerSystem_1.TimerSystem.Remove(this.Drn),this.Drn=void 0)}static OnChangeRole(e,t,i,s,o,a,r,h,n){Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"执行战斗换人",["Last",e?.Id],["New",t.Id]);var _=e?.Entity?.GetComponent(85),t=t.Entity.GetComponent(85),m=3===ModelManager_1.ModelManager.SceneTeamModel.CurrentGroupType,l=_?.cBe;if(a&&l&&l.CurrentSkill&&!l.IsMainSkillReadyEnd){let e=l.SkillTarget;!e&&FormationDataController_1.FormationDataController.GlobalIsInFight&&((a=_.cZr)?.DetectSoftLockTarget({}),e=a?.GetCurrentTarget());l=_.m1t;e&&l?.HasBuffAuthority()&&l.AddBuff(CharacterBuffIds_1.buffId.GoDown,{InstigatorId:l.CreatureDataId,Reason:"战斗换人"})}let f=!1,c=!1;a=_?.Xte,a&&(c=a.HasTag(504239013)||a.HasTag(855966206),f=a.HasAllTag([40422668,-959917199])),t.Urn(),_&&_!==t&&(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"角色下场",["Entity",_.Entity?.Id]),t.m1t.AddBuff(CharacterBuffIds_1.buffId.WaitRemoveQteInvincible,{InstigatorId:t.m1t.CreatureDataId,Reason:"换人去除QTE无敌"}),GlobalData_1.GlobalData.GameInstance&&GlobalData_1.GlobalData.BpEventManager.当换人完成时.Broadcast(),t.yGl?.SetDataFromOldRole(e),t.EGl?.SetDataFromOldRole(e),t.IGl?.SetDataFromOldRole(e),_.EGl?.ClearTarget(),!m&&_.Xte.HasTag(1144073280)||_.cBe.StopGroup1Skill("RoleTeamComponent.OnChangeRole"),l=_.Xte.HasTag(-1371021686)&&!_.cBe.IsMainSkillReadyEnd,RoleInheritComponent_1.RoleInheritComponent.StateInherit(_.Mrn,t.Mrn,t.Ern.IsInQte?1:0,l),_.Arn(m),_.Prn(o)),a=c||h||m;t.xrn(e,f,r,a),t.wrn(!c&&i,s,n)}Urn(){var e=Global_1.Global.CharacterController,t=this.Hte.Actor;e.Pawn!==t&&(t.Mesh.AddTickPrerequisiteActor(e),e.Possess(t),this.Gce.StopMove(!1),this.Nce?.Active||this.Nce?.SetActive(!0))}xrn(e,t,i,s){var o=void 0===e;ModelManager_1.ModelManager.AutoRunModel?.IsInLogicTreeGmMode()?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"人物上场，GM推进中，继承位置"),this.InheritTransform(o)):i?s?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"人物上场，强制继承位置"),this.InheritTransform(o)):this.Ern.IsInQte?Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"人物上场，角色QTE中，不更新位置"):(i=e?.Entity?.GetComponent(194))?.HasAnyTag([-1388400236,-2100129479,1144073280,-2044964178])?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"人物上场，上个角色还在场，进行寻点"),s=!!t||i.HasTag(40422668),this.Entity.GetComponent(90).SetQtePosition({Rotate:s?SceneTeamDefine_1.SPECIAL_CHANGE_ANGLE_AIR:SceneTeamDefine_1.SPECIAL_CHANGE_ANGLE_LAND,Length:s?SceneTeamDefine_1.SPECIAL_CHANGE_DIS_AIR:SceneTeamDefine_1.SPECIAL_CHANGE_DIS_LAND,Height:s?SceneTeamDefine_1.SPECIAL_CHANGE_HEIGHT_AIR:SceneTeamDefine_1.SPECIAL_CHANGE_HEIGHT_LAND,ReferenceTarget:!1,QteType:s?1:0}),this.Gce?.CharacterMovement?.SetMovementMode(s?3:1)):(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"人物上场，上个角色不在场，继承位置"),this.InheritTransform(o)):Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"人物上场，不允许改变位置")}InheritTransform(e=!1){var t=ModelManager_1.ModelManager.SceneTeamModel.GetSpawnTransform();if(!t)return Log_1.Log.CheckError()&&Log_1.Log.Error("SceneTeam",48,"继承位置失败，获取角色Transform为空"),!1;t.SetRotation(new UE.Rotator(0,t.Rotator().Yaw,0).Quaternion()),Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"继承位置",["Location",t.GetLocation()]),this.Hte.SetActorTransform(t,"换人.上场",!1),e&&this.Hte.SetInputFacing(this.Hte.ActorForwardProxy),ModelManager_1.ModelManager.SceneTeamModel.SetLastTransform(void 0);t=this.mBe;return t.PositionState===CharacterUnifiedStateTypes_1.ECharPositionState.Ground&&ModelManager_1.ModelManager.SceneTeamModel.LastEntityIsOnGround?this.Brn("换人.地面修正"):t.MoveState!==CharacterUnifiedStateTypes_1.ECharMoveState.Slide&&t.MoveState!==CharacterUnifiedStateTypes_1.ECharMoveState.NormalSki||this.Brn("换人.滑行修正"),!0}Brn(e){this.Hte.FixSwitchLocation(e,!0,!0)}wrn(e,t,i){var s,o,a;this.Ern.IsInQte?this.GoBattleSkill=!1:(a=this.Xte.HasTag(1949807524),this.cZr.DetectSoftLockTarget({}),s=void 0!==this.cZr.GetCurrentTarget(),o=this.Xte.HasTag(-1207177910),this.GoBattleSkill=a||e&&o&&s),this.Rrn();for(const r of CharacterUnifiedStateComponent_1.outGameRoleTags)this.Xte.RemoveTag(r);this.SetTeamTag(0),!ModelManager_1.ModelManager.PlotModel.InSeamlessFormation?this.Entity.EnableByKey(1,!0):this.Entity.DisableByKey(1,!0),this.brn(),this.Hte.KuroMoveAlongFloor(Vector_1.Vector.ZeroVector,0,"GoBattle"),t&&i&&this.m1t.AddBuff(CharacterBuffIds_1.buffId.GoBattleInvincible,{InstigatorId:this.m1t.CreatureDataId,PreMessageId:i,Reason:"角色上场短暂无敌"}),UiCameraAnimationManager_1.UiCameraAnimationManager.IsActivate()||CameraController_1.CameraController.ExitCameraMode(2),this.GoBattleSkill&&(a=this.mBe.PositionState===CharacterUnifiedStateTypes_1.ECharPositionState.Air,this.Hte.Actor.FightCommand(a))}brn(){var e,t;3===ModelManager_1.ModelManager.SceneTeamModel.CurrentGroupType?(t=this.Entity.GetComponent(0).GetRoleId(),(e=ModelManager_1.ModelManager.PlotModel.GoBattleMaterial)&&ModelManager_1.ModelManager.RoleModel.IsMainRole(t)&&this.Hte.Actor.CharRenderingComponent.AddMaterialControllerData(e)):(this.Srn&&this.Hte.Actor.CharRenderingComponent.AddMaterialControllerDataGroup(this.Srn),t=EffectSystem_1.EffectSystem.SpawnEffect(GlobalData_1.GlobalData.World,this.Hte.ActorTransform,SceneTeamDefine_1.GO_BATTLE_EFFECT,"[RoleTeamComponent.SpawnGoBattleMaterial]",new EffectContext_1.EffectContext(this.Entity.Id)),EffectSystem_1.EffectSystem.IsValid(t)&&EffectSystem_1.EffectSystem.GetEffectActor(t).K2_AttachToComponent(this.Hte.SkeletalMesh,FNameUtil_1.FNameUtil.NONE,2,2,2,!0))}Arn(e){var t=this.Xte?.HasTag(1144073280),i=this.Xte?.HasTag(-2044964178);e||!t&&!i?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"角色下场，立即隐藏"),this.SetTeamTag(2),this.Entity.DisableByKey(1,!0),this.Hte.RestoreDefaultController(),this.Gce?.StopAllAddMove(),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnRoleGoDownFinish)):(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"角色下场，等待切人不隐藏Tag、硬直时间Tag移除再隐藏角色"),t&&!this.Trn&&(this.Trn=this.Xte.ListenForTagAddOrRemove(1144073280,(e,t)=>{t||(this.Trn?.EndTask(),this.Trn=void 0,this.qrn())})),i&&!this.Lrn&&(this.Lrn=this.Xte.ListenForTagAddOrRemove(-2044964178,(e,t)=>{t||(this.Lrn?.EndTask(),this.Lrn=void 0,this.qrn())})),this.SetTeamTag(1),this.Hte.RestoreDefaultController(),this.Gce?.StopAllAddMove())}qrn(){var e=!this.Trn&&!this.Lrn;Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"角色下场，尝试隐藏角色",["CanGoDown",e]),e&&ModelManager_1.ModelManager.SceneTeamModel.GetCurrentEntity?.Id!==this.Entity.Id&&this.DisableRoleWithEffect()}InterruptDisableWithEffect(){this.Drn&&(TimerSystem_1.TimerSystem.Remove(this.Drn),this.Drn=void 0);var e=this.DSa;e&&(this.Hte.Actor.CharRenderingComponent.RemoveMaterialControllerData(e),this.DSa=0)}DisableRoleWithEffect(){this.Drn?Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"角色下场，正在播放特效等待隐藏"):(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"角色下场，播放特效后再隐藏"),this.yrn&&(this.DSa=this.Hte.Actor.CharRenderingComponent.AddMaterialControllerData(this.yrn)),this.Drn=TimerSystem_1.TimerSystem.Delay(()=>{this.Drn=void 0,this.BCl()},SceneTeamDefine_1.EFFECT_DELAY_QUIT))}DisableRoleWithoutEffect(){Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"角色下场，立刻隐藏"),this.Drn&&(TimerSystem_1.TimerSystem.Remove(this.Drn),this.Drn=void 0),this.BCl()}BCl(){var e=this.DSa;e&&(this.Hte.Actor.CharRenderingComponent.RemoveMaterialControllerData(e),this.DSa=0),this.cBe.StopAllSkills("RoleTeamComponent.DisableRole"),this.QQa(!1),this.SetTeamTag(2),this.Gce.CharacterMovement?.SetDefaultMovementMode(),this.Entity.DisableByKey(1,!0),EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnRoleGoDownFinish)}Prn(e){var t=e*BattleUiDefine_1.SECOND_TO_MILLISECOND;this.Irn=t+Time_1.Time.WorldTime,EventSystem_1.EventSystem.EmitWithTarget(this.Entity,EventDefine_1.EEventName.OnChangeRoleCoolDownChanged,e)}IsChangeRoleCoolDown(){return 0<this.GetChangeRoleCoolDown()||!(this.Irn=-1)}GetChangeRoleCoolDown(){return 0<this.Irn?this.Irn-Time_1.Time.WorldTime:-1}SetTeamTag(e){if(this.Entity.IsInit)switch(this.wCl=e){case 0:this.Xte.AddTag(-1384309247),this.QQa(!1),this.Xte.HasTag(-1207177910)&&this.Xte.RemoveTag(-1207177910),this.Xte.HasTag(-1388400236)&&this.Xte.RemoveTag(-1388400236);break;case 1:this.Xte.AddTag(-1388400236),this.QQa(!0),this.Xte.HasTag(-1207177910)&&this.Xte.RemoveTag(-1207177910),this.Xte.HasTag(-1384309247)&&this.Xte.RemoveTag(-1384309247);break;case 2:this.Hte.IsAutonomousProxy&&this.Xte.AddTag(-1207177910),this.Xte.HasTag(-1384309247)&&this.Xte.RemoveTag(-1384309247),this.Xte.HasTag(-1388400236)&&this.Xte.RemoveTag(-1388400236)}}GetTeamState(){return this.wCl}QQa(e){e?this.m1t.AddBuff(CharacterBuffIds_1.buffId.OnStage,{InstigatorId:this.m1t.CreatureDataId,Reason:"SetTeamTag"}):this.m1t.RemoveBuff(CharacterBuffIds_1.buffId.OnStage,-1,"SetTeamTag")}OutOfControl(){this.SetTeamTag(1),this.cBe.StopAllSkills("RoleTeamComponent.OutOfControl"),this.Nce?.ClearMoveVectorCache(),this.Nce?.SetActive(!1),this.Hte.ClearInput(),this.Gce?.StopMove(!0),this.Hte.RestoreDefaultController(),this.Gce?.StopAllAddMove()}};RoleTeamComponent=__decorate([(0,RegisterComponent_1.RegisterComponent)(85)],RoleTeamComponent),exports.RoleTeamComponent=RoleTeamComponent;
//# sourceMappingURL=RoleTeamComponent.js.map