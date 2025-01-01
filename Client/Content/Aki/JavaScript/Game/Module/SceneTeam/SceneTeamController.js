
"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.SceneTeamController=void 0;const UE=require("ue"),Log_1=require("../../../Core/Common/Log"),Stats_1=require("../../../Core/Common/Stats"),PhantomFormationById_1=require("../../../Core/Define/ConfigQuery/PhantomFormationById"),Protocol_1=require("../../../Core/Define/Net/Protocol"),ControllerBase_1=require("../../../Core/Framework/ControllerBase"),Net_1=require("../../../Core/Net/Net"),TimerSystem_1=require("../../../Core/Timer/TimerSystem"),Vector_1=require("../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../Core/Utils/MathUtils"),IMatch_1=require("../../../UniverseEditor/Interface/IMatch"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),StatDefine_1=require("../../Common/StatDefine"),GlobalData_1=require("../../GlobalData"),ControllerHolder_1=require("../../Manager/ControllerHolder"),ModelManager_1=require("../../Manager/ModelManager"),CharacterNameDefines_1=require("../../NewWorld/Character/Common/CharacterNameDefines"),SkillBehaviorMisc_1=require("../../NewWorld/Character/Common/Component/Skill/SkillBehavior/SkillBehaviorMisc"),GameplayAbilityVisionMisc_1=require("../../NewWorld/Character/Common/Component/Vision/GA/GameplayAbilityVisionMisc"),CombatMessage_1=require("../CombatMessage/CombatMessage"),SceneTeamData_1=require("./SceneTeamData"),SceneTeamDefine_1=require("./SceneTeamDefine"),SceneTeamEvent_1=require("./SceneTeamEvent");class SceneTeamController extends ControllerBase_1.ControllerBase{static OnInit(){return this.Tpo=Stats_1.Stat.Create("SceneTeamController.SwitchRoleRequestStat","",StatDefine_1.BATTLESTAT_GROUP),this.Lpo=Stats_1.Stat.Create("SceneTeamController.SwitchRoleRefreshPosStat","",StatDefine_1.BATTLESTAT_GROUP),this.Dpo=Stats_1.Stat.Create("SceneTeamController.SwitchRoleChangeRoleQTEStat","",StatDefine_1.BATTLESTAT_GROUP),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.AddEntity,SceneTeamController.GUe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.RemoveEntity,SceneTeamController.zpe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.WorldDone,SceneTeamController.Upo),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnFunctionOpenUpdate,this.RQe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnFunctionOpenSet,this.RQe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnBattleStateChanged,this.Zpe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.PanelQteEnd,SceneTeamController.VOi),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnLevelEnvChange,SceneTeamController.PCl),Net_1.Net.Register(21463,SceneTeamController.Apo),Net_1.Net.Register(24847,SceneTeamController.Ppo),Net_1.Net.Register(15318,SceneTeamController.xpo),Net_1.Net.Register(28071,SceneTeamController.r$s),Net_1.Net.Register(22194,SceneTeamController.Bhl),!0}static OnClear(){return EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.AddEntity,SceneTeamController.GUe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.RemoveEntity,SceneTeamController.zpe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.WorldDone,SceneTeamController.Upo),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnFunctionOpenUpdate,this.RQe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnFunctionOpenSet,this.RQe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnBattleStateChanged,this.Zpe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.PanelQteEnd,SceneTeamController.VOi),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnLevelEnvChange,SceneTeamController.PCl),Net_1.Net.UnRegister(21463),Net_1.Net.UnRegister(24847),Net_1.Net.UnRegister(15318),Net_1.Net.UnRegister(28071),Net_1.Net.UnRegister(22194),this.wpo&&(TimerSystem_1.TimerSystem.Remove(this.wpo),this.wpo=void 0),!0}static ShowControlledRole(e){for(const r of ModelManager_1.ModelManager.SceneTeamModel.GetTeamItemsByPlayer(e)){var o,a=r.EntityHandle;a&&(o=a.Entity.GetComponent(93),r.IsControl())&&!o?.IsInGame&&(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneTeam",48,"复活显示角色",["EntityId",a.Id]),r.EntityHandle.Entity?.EnableByKey(1,!0))}}static RequestChangeRole(e,o=void 0){var a=o?.FilterSameRole??!0;const r=o?.GoDownWaitSkillEnd??!1,t=o?.ForceInheritTransform??!0;o=o?.GoBattleInvincible??!1;const n=ModelManager_1.ModelManager.SceneTeamModel;var l,_,i,c=n.GetCurrentTeamItem,m=n.GetTeamItem(e,{ParamType:3});!m||a&&c?.GetCreatureDataId()===e||(a=m.EntityHandle?.Entity)&&((l=SceneTeamController.Bpo())!==Protocol_1.Aki.Protocol.f6s.Proto_SignleWorld||GlobalData_1.GlobalData.Networking()?m.CanControl()?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"请求切换当前角色",["CreatureDataId",e]),n.ChangingRole=!0,_=ModelManager_1.ModelManager.CombatMessageModel.GenMessageId(),(i=new Protocol_1.Aki.Protocol.qis).Q6n=m.GetConfigId,i.$Hn=l,CombatMessage_1.CombatNet.Call(25391,a,i,e=>{var o;n.ChangingRole=!1,e?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"切换当前角色响应"),e.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs&&((e=e.Q6n)&&0!==e?(o=n.GetTeamItem(e,{ParamType:0,OnlyMyRole:!0})?.GetCreatureDataId())?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"请求换人失败，已更换正确角色",["角色Id",e]),this.Cel(o,r,t)):Log_1.Log.CheckError()&&Log_1.Log.Error("SceneTeam",48,"请求换人失败，在队伍中未找到角色",["角色Id",e]):Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"请求换人失败，全角色已死亡",["角色Id",e]))):Log_1.Log.CheckError()&&Log_1.Log.Error("SceneTeam",48,"切换当前角色响应为空，前后端当前角色可能不一致")},void 0,_),this.Cel(e,r,t,o,_)):Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"角色不允许请求切换",["CreatureDataId",e]):(l=!m.EntityHandle?.Entity?.Active,a=(c?.EntityHandle?.Entity?.GetComponent(90))?.IsInQte??!1,i=ModelManager_1.ModelManager.SceneTeamModel.ChangeRoleCooldown,n.ChangeRole(e,{UseGoBattleSkill:!a,CoolDown:i,GoDownWaitSkillEnd:r,AllowRefreshTransform:l,ForceInheritTransform:t})))}static SendSwitchRole(e){var o,a,r,t=e.EntityHandle?.Entity;t&&(o=SceneTeamController.Bpo(),a=ModelManager_1.ModelManager.CombatMessageModel.GenMessageId(),(r=new Protocol_1.Aki.Protocol.qis).Q6n=e.GetConfigId,r.$Hn=o,CombatMessage_1.CombatNet.Call(25391,t,r,()=>{},void 0,a))}static Bpo(){return ModelManager_1.ModelManager.EditBattleTeamModel.IsInInstanceDungeon?Protocol_1.Aki.Protocol.f6s.Proto_FbInstance:ModelManager_1.ModelManager.GameModeModel.IsMulti?Protocol_1.Aki.Protocol.f6s.Proto_MultiWorld:Protocol_1.Aki.Protocol.f6s.Proto_SignleWorld}static Cel(e,o=!1,a=!0,r=!1,t=void 0){var n=ModelManager_1.ModelManager.SceneTeamModel,l=(n.RefreshLastTransform(),n.GetTeamItem(e,{ParamType:3})),_=l?.EntityHandle.Entity;_&&l.IsMyRole()?(l=_.GetComponent(90),n.ChangeRole(e,{UseGoBattleSkill:!l.IsInQte,GoBattleInvincible:r,CoolDown:n.ChangeRoleCooldown,GoDownWaitSkillEnd:o,AllowRefreshTransform:!_.Active,ForceInheritTransform:a,MessageId:t})||(ModelManager_1.ModelManager.SceneTeamModel.ChangingRole=!1)):(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"队伍实体无法获取或非本机",["CreatureDataId",e]),ModelManager_1.ModelManager.SceneTeamModel.ChangingRole=!1)}static GetLivingSate(e){switch(e){case Protocol_1.Aki.Protocol.JEs.Proto_Alive:return 1;case Protocol_1.Aki.Protocol.JEs.Proto_Dead:return 2;default:Protocol_1.Aki.Protocol.JEs.Proto_Init;return 0}}static Evl(e,o,a){var r=e!==ModelManager_1.ModelManager.SceneTeamModel.CurrentGroupType,t=ModelManager_1.ModelManager.CreatureModel.GetPlayerId(),n=ModelManager_1.ModelManager.SceneTeamModel.GetTeamPlayerData(t);if(!n)return Log_1.Log.CheckError()&&Log_1.Log.Error("SceneTeam",48,"玩家编队数据不存在，不允许执行预加载角色入队"),!1;if(!r&&!o)return Log_1.Log.CheckWarn()&&Log_1.Log.Warn("SceneTeam",48,"玩家编队数据无任何变化"),!1;let l=!0;var _=[],i=[],c=n.GetGroup(e);if(o){n=o.size;if(n>SceneTeamDefine_1.SCENE_TEAM_MAX_NUM)return Log_1.Log.CheckError()&&Log_1.Log.Error("SceneTeam",48,"传入角色列表人数超过编队设计上限"),!1;if(c){if(1===e&&2===c.GetLivingState())return Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"玩家战斗编队组已死亡，不允许改变"),!1;if(!a&&n+c.GetRoleList().length>SceneTeamDefine_1.SCENE_TEAM_MAX_NUM)return Log_1.Log.CheckError()&&Log_1.Log.Error("SceneTeam",48,"角色列表人数总和超过编队设计上限"),!1}for(const f of o){var m=ModelManager_1.ModelManager.SceneTeamModel.GetPreloadEntityData(f);if(!m)return Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneTeam",48,"请求更新编队组时，未找到预加载角色",["RoleId",f]),!1;var s,S,g,M=m[0],m=m[1]?.Entity;if(!m?.Valid||!m.IsInit)return Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneTeam",48,"请求更新编队组时，角色实体无效",["RoleId",f]),!1;c&&c.HasRole(M)||(S=(s=m.GetComponent(0)).GetRoleId(),(g=new SceneTeamData_1.SceneTeamRole).CreatureDataId=M,g.RoleSkinId=s.GetSkinId(),g.RoleId=S,_.push(g),i.push(M),m.GetComponent(15)?.IsDead()??!0)||(l=!1)}}var n=SceneTeamController.Ivl(e),o=r,T=[];if(i)for(const d of i)T.push(MathUtils_1.MathUtils.NumberToLong(d));Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"请求更新编队组数据",["GroupType",e],["CreatureDataIdList",i],["ReplaceAll",a],["NeedReserve",o]),ModelManager_1.ModelManager.SceneTeamModel.ChangingTeam=!0;var v=new Protocol_1.Aki.Protocol.UJl;return v.Tvl=a,v.Lvl=n,v.Rvl=o,0<T.length&&(v.PSs=T,n=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentTeamItem,!r&&n?(o=MathUtils_1.MathUtils.NumberToLong(n.GetCreatureDataId()),v.qhl=o):v.qhl=T[0]),Net_1.Net.Call(26018,v,e=>{ModelManager_1.ModelManager.SceneTeamModel.ChangingTeam=!1,e&&e.Q4n===Protocol_1.Aki.Protocol.Q4n.KRs||Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"请求角色入队失败")}),_.length<=0?ModelManager_1.ModelManager.SceneTeamModel.SwitchGroup(t,e,!1,!0):!c||a?(r=_[0].RoleId,n=l?2:1,ModelManager_1.ModelManager.SceneTeamModel.UpdateGroupDataAndSwitchGroup(t,{GroupType:e,GroupRoleList:_,CurrentRoleId:r,LivingState:n})):ModelManager_1.ModelManager.SceneTeamModel.AddRoleAndSwitchGroup(t,e,_),SceneTeamController.uTl(i),!0}static Ivl(e){switch(e){case-1:case 0:return Protocol_1.Aki.Protocol.Z7s.Proto_GroupNone;case 1:return Protocol_1.Aki.Protocol.Z7s.Proto_Battle;case 2:return Protocol_1.Aki.Protocol.Z7s.hxs;case 3:return Protocol_1.Aki.Protocol.Z7s.Proto_Plot;default:return Protocol_1.Aki.Protocol.Z7s.Proto_GroupNone}}static uTl(e){var o=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentTeamItem,a=o?.EntityHandle?.Entity;if(o&&a){var r=[180,0,-90,90],t=Vector_1.Vector.Create(),n=Vector_1.Vector.Create(),a=a.GetComponent(3),l=a.ActorLocationProxy,_=a.ActorForwardProxy,i=o.GetCreatureDataId();for(const g of ModelManager_1.ModelManager.SceneTeamModel.GetTeamItems(!0)){var c=g.GetCreatureDataId();if(g.IsAutoRole()&&c!==i&&e.includes(c)){var m=g.EntityHandle?.Entity?.GetComponent(3);if(m){var s=2*m.ScaledRadius+10;s*=s;let e=!1;for(;0<r.length;){var S=r.pop();if(void 0===S)break;n.DeepCopy(l),_.RotateAngleAxis(S,Vector_1.Vector.UpVectorProxy,t),t.MultiplyEqual(SceneTeamDefine_1.AUTO_ROLE_OFFSET_DISTANCE),n.AdditionEqual(t);S=(0,SkillBehaviorMisc_1.traceWall)(m,l,n,!1);if(S&&(!(S[0]&&Vector_1.Vector.DistSquared2D(l,n)<s)&&m.FixBornLocation("刷新Ai角色入队位置",!0,n))){e=!0;break}}e||(m.SetActorLocation(l.ToUeVector(),"刷新Ai角色入队位置",!1),m.FixBornLocation("刷新Ai角色入队位置"))}}}}}static RegisterPanelQteJoinTeam(e,o){Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"注册角色入队界面QTE",["RoleIdList",o]),ModelManager_1.ModelManager.SceneTeamModel.PanelQteHandleId=e;var a=ModelManager_1.ModelManager.SceneTeamModel.PanelQteRoleIdSet;a.clear();for(const r of o)a.add(r)}static ChangePhantomTeam(e,o=void 0){var a=PhantomFormationById_1.configPhantomFormationById.GetConfig(e);if(a){var r=new Set;for(const n of a.Roles)r.add(n);if(r.size<=0)Log_1.Log.CheckError()&&Log_1.Log.Error("SceneTeam",48,"声骸编队内无角色",["Id",e]);else if(2===ModelManager_1.ModelManager.SceneTeamModel.CurrentGroupType)Log_1.Log.CheckWarn()&&Log_1.Log.Warn("SceneTeam",48,"声骸编队下不允许切换声骸");else if(SceneTeamController.Evl(2,r,!0)){a=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentEntity?.Entity;let e=void 0;if(o&&a){var t=a.GetComponent(194);for(const l of o)if(t.HasTag(l.TagId)){e=l;break}}o=a?.GetComponent(163);o?.AddBuff(GameplayAbilityVisionMisc_1.visionAppearBuffId,{InstigatorId:o.CreatureDataId,Reason:"开始切换声骸编队时，声骸自身的材质和粒子"}),e&&(a?.GetComponent(17))?.SendGameplayEventToActor(e)}}else Log_1.Log.CheckError()&&Log_1.Log.Error("SceneTeam",48,"声骸编队配置不存在",["Id",e])}static RevertPhantomTeam(){var e;2!==ModelManager_1.ModelManager.SceneTeamModel.CurrentGroupType?Log_1.Log.CheckWarn()&&Log_1.Log.Warn("SceneTeam",48,"非声骸编队下不允许还原声骸"):(e=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentEntity,SceneTeamController.Evl(1,void 0,!1),e?.Valid&&(e.Entity?.GetComponent(163))?.RemoveAllDurationBuffs("声骸还原清理持续型buff"))}static TryUseMultiQte(e){var o=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentTeamItem,a=o.EntityHandle.Entity.GetComponent(90);return a.IsQteReady(e)?(e.Entity.GetComponent(90).UseExitSkill(o.EntityHandle),a.ExecuteMultiQte(e),!0):(e.Entity.GetComponent(194).HasTag(166024319)||ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByCode("TeammateQteDisable"),!1)}static IsMatchRoleOption(e){var o=ModelManager_1.ModelManager.SceneTeamModel,a=o.IsPhantomTeam,r=o.GetTeamItems();for(const t of e)switch(t.Type){case IMatch_1.EMatchRoleType.Player:if(a)break;return!0;case IMatch_1.EMatchRoleType.Phantom:if(a)for(const n of r)if(n.GetConfigId===t.Id)return!0}return!1}static EmitEvent(e,o,...a){e&&(EventSystem_1.EventSystem.EmitWithTarget(e,o,...a),e=ModelManager_1.ModelManager.SceneTeamModel.GetTeamItem(e.Id,{ParamType:1}))&&(e.IsMyRole()&&EventSystem_1.EventSystem.EmitWithTarget(SceneTeamEvent_1.SceneTeam.Local,o,...a),EventSystem_1.EventSystem.EmitWithTarget(SceneTeamEvent_1.SceneTeam.All,o,...a))}}exports.SceneTeamController=SceneTeamController,(_a=SceneTeamController).Tpo=void 0,SceneTeamController.Lpo=void 0,SceneTeamController.Dpo=void 0,SceneTeamController.wpo=void 0,SceneTeamController.RQe=(e,o)=>{10036===e&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnConcertoResponseOpen,o)},SceneTeamController.Zpe=e=>{GlobalData_1.GlobalData.BpEventManager.小队战斗状态改变时.Broadcast(e)},SceneTeamController.Upo=()=>{_a.wpo||(_a.wpo=TimerSystem_1.TimerSystem.Forever(_a.qpo,SceneTeamDefine_1.CHECK_ROLE_INTERVAL))},SceneTeamController.GUe=(e,o,a)=>{ModelManager_1.ModelManager.SceneTeamModel.OnAddEntity(o)},SceneTeamController.zpe=(e,o)=>{ModelManager_1.ModelManager.SceneTeamModel.OnRemoveEntity(o)},SceneTeamController.PCl=(e,o,a)=>{if(1===e){var r,t,n=Vector_1.Vector.Create(o),l=SceneTeamDefine_1.DATA_LAYER_CHANGE_RADIUS*SceneTeamDefine_1.DATA_LAYER_CHANGE_RADIUS;for(const _ of ModelManager_1.ModelManager.SceneTeamModel.GetTeamItems(!0))_.IsControl()||(t=_.EntityHandle?.Entity)&&(r=t.GetComponent(85))&&1===r.GetTeamState()&&(t=t.GetComponent(1).ActorLocationProxy,o&&Vector_1.Vector.DistSquared(n,t)>l||r.DisableRoleWithoutEffect())}},SceneTeamController.xpo=e=>{Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",5,"9603 换人同步",["massage",e]);var o=MathUtils_1.MathUtils.LongToNumber(e.mUs),a=ModelManager_1.ModelManager.CreatureModel.GetEntity(o),r=a.Entity.GetComponent(0);if(a?.Valid){var t=r.GetRoleId();if(e.W5n===ModelManager_1.ModelManager.PlayerInfoModel.GetId())Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",5,"通过换人同步切换角色",["massage",e]),SceneTeamController.Cel(o);else{var n=MathUtils_1.MathUtils.LongToNumber(e.CUs),l=ModelManager_1.ModelManager.CreatureModel.GetEntity(n);if(l?.Valid){a.IsInit&&((_=a.Entity.GetComponent(3)).SetActorTransform(l.Entity.GetComponent(3).ActorTransform,"SwitchRoleNotify",!1),l.Entity.GetComponent(194)?.HasAnyTag(SceneTeamDefine_1.needFixLocationTagList))&&_.FixSwitchLocation("模拟端换人地面修正",!0,!0),r.SetVisible(!0),a.Entity?.EnableByKey(1,!0);var _=a.Entity.GetComponent(166).MainAnimInstance,r=l.Entity.GetComponent(166).MainAnimInstance,_=(UE.KuroStaticLibrary.IsObjectClassByName(_,CharacterNameDefines_1.CharacterNameDefines.ABP_BASEROLE)&&UE.KuroStaticLibrary.IsObjectClassByName(r,CharacterNameDefines_1.CharacterNameDefines.ABP_BASEROLE)&&_.替换角色时同步动作数据(r),a.Entity.GetComponent(61)),r=l.Entity.GetComponent(61),i=(_.CloneMoveSampleInfos(r),l.Entity.GetComponent(0));i.SetVisible(!1),ModelManager_1.ModelManager.SceneTeamModel.OtherPlayerChangeRole(e.W5n,o);for(const c of ModelManager_1.ModelManager.SceneTeamModel.GetTeamItemsByPlayer(e.W5n))c.GetConfigId===i.GetRoleId()?c.SetRemoteIsControl(!1):c.GetConfigId===t&&c.SetRemoteIsControl(!0);l.Entity?.DisableByKey(1,!0),GlobalData_1.GlobalData.GameInstance&&GlobalData_1.GlobalData.BpEventManager.当换人完成时.Broadcast(),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnOtherChangeRole,a,l)}else Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",5,"[SceneTeam.SwitchRoleNotify] 不存在下阵的Entity。",["DownCreatureDataId",n])}}else Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",5,"[SceneTeam.SwitchRoleNotify] 不存在上阵的Entity。",["UpCreatureId",o])},SceneTeamController.Ppo=e=>{Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"切换编队组推送"),ModelManager_1.ModelManager.SceneTeamModel.SwitchGroup(e.W5n,e.USs)},SceneTeamController.Apo=e=>{Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"更新编队组推送",["Data",e]);var o=new Array;for(const n of e.yRs){var a=new Array;for(const l of n.ERs){var r=[];for(const _ of l.gRs){var t=new SceneTeamData_1.SceneTeamRole;t.CreatureDataId=MathUtils_1.MathUtils.LongToNumber(_.F4n),t.RoleId=_.Q6n,t.RoleSkinId=_.Or1,t.OnStageWithoutControl=_.Bo1,r.push(t)}a.push({GroupType:l.USs,GroupRoleList:r,CurrentRoleId:l.NVn,LivingState:SceneTeamController.GetLivingSate(l.JEs),IsFixedLocation:l.I0a})}o.push({PlayerId:n.W5n,CurrentGroupType:n.Do1,Groups:a})}ModelManager_1.ModelManager.SceneTeamModel.UpdateAllPlayerData(o,!1)},SceneTeamController.r$s=e=>{var o=e.W5n,e=e.azs,a=(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"更新编队组死亡状态",["PlayerId",o],["States",e]),new Map);for(const t of e){var r=SceneTeamController.GetLivingSate(t.JEs);a.set(t.USs,r)}ModelManager_1.ModelManager.SceneTeamModel.UpdateGroupLivingStates(o,a)},SceneTeamController.Bhl=e=>{for(const a of e.ro1){var o=MathUtils_1.MathUtils.LongToNumber(a);ModelManager_1.ModelManager.SceneTeamModel.AddPreloadEntity(o)}},SceneTeamController.VOi=e=>{e===ModelManager_1.ModelManager.SceneTeamModel.PanelQteHandleId&&(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneTeam",48,"角色入队界面QTE交互完成，开始执行"),e=ModelManager_1.ModelManager.SceneTeamModel.PanelQteRoleIdSet,SceneTeamController.Evl(1,e,!1),e.clear(),ModelManager_1.ModelManager.SceneTeamModel.PanelQteHandleId=0)},SceneTeamController.qpo=()=>{var e,o,a,r;Net_1.Net.IsServerConnected()&&(e=(a=ModelManager_1.ModelManager.SceneTeamModel).GetCurrentTeamItem,o=a.GetCurrentEntity?.Entity,e&&o?(a=a.CurrentGroupType)&&-1!==a?((r=new Protocol_1.Aki.Protocol.Trs).W5n=e.GetPlayerId(),r.YHn=e.GetConfigId,r.JHn=e.GetCreatureDataId(),CombatMessage_1.CombatNet.Call(23378,o,r,()=>{})):Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"检查当前角色，控制特殊角色中",["groupType",a]):Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"检查当前角色，无法获取队伍实例或实体"))};
//# sourceMappingURL=SceneTeamController.js.map