
"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.SceneTeamController=void 0;const UE=require("ue"),Log_1=require("../../../Core/Common/Log"),Stats_1=require("../../../Core/Common/Stats"),Protocol_1=require("../../../Core/Define/Net/Protocol"),ControllerBase_1=require("../../../Core/Framework/ControllerBase"),Net_1=require("../../../Core/Net/Net"),TimerSystem_1=require("../../../Core/Timer/TimerSystem"),Vector_1=require("../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../Core/Utils/MathUtils"),IMatch_1=require("../../../UniverseEditor/Interface/IMatch"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),StatDefine_1=require("../../Common/StatDefine"),GlobalData_1=require("../../GlobalData"),ControllerHolder_1=require("../../Manager/ControllerHolder"),ModelManager_1=require("../../Manager/ModelManager"),CharacterNameDefines_1=require("../../NewWorld/Character/Common/CharacterNameDefines"),SkillBehaviorMisc_1=require("../../NewWorld/Character/Common/Component/Skill/SkillBehavior/SkillBehaviorMisc"),CombatMessage_1=require("../CombatMessage/CombatMessage"),SceneTeamData_1=require("./SceneTeamData"),SceneTeamDefine_1=require("./SceneTeamDefine"),SceneTeamEvent_1=require("./SceneTeamEvent");class SceneTeamController extends ControllerBase_1.ControllerBase{static OnInit(){return this.Tpo=Stats_1.Stat.Create("SceneTeamController.SwitchRoleRequestStat","",StatDefine_1.BATTLESTAT_GROUP),this.Lpo=Stats_1.Stat.Create("SceneTeamController.SwitchRoleRefreshPosStat","",StatDefine_1.BATTLESTAT_GROUP),this.Dpo=Stats_1.Stat.Create("SceneTeamController.SwitchRoleChangeRoleQTEStat","",StatDefine_1.BATTLESTAT_GROUP),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.AddEntity,SceneTeamController.GUe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.RemoveEntity,SceneTeamController.zpe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.WorldDone,SceneTeamController.Upo),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnFunctionOpenUpdate,this.RQe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnFunctionOpenSet,this.RQe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnBattleStateChanged,this.Zpe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.PanelQteEnd,SceneTeamController.VOi),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnLevelEnvChange,SceneTeamController.vml),Net_1.Net.Register(27607,SceneTeamController.Apo),Net_1.Net.Register(16128,SceneTeamController.Ppo),Net_1.Net.Register(28456,SceneTeamController.xpo),Net_1.Net.Register(28775,SceneTeamController.r$s),Net_1.Net.Register(26894,SceneTeamController.Vll),!0}static OnClear(){return EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.AddEntity,SceneTeamController.GUe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.RemoveEntity,SceneTeamController.zpe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.WorldDone,SceneTeamController.Upo),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnFunctionOpenUpdate,this.RQe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnFunctionOpenSet,this.RQe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnBattleStateChanged,this.Zpe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.PanelQteEnd,SceneTeamController.VOi),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnLevelEnvChange,SceneTeamController.vml),Net_1.Net.UnRegister(27607),Net_1.Net.UnRegister(16128),Net_1.Net.UnRegister(28456),Net_1.Net.UnRegister(28775),Net_1.Net.UnRegister(26894),this.wpo&&(TimerSystem_1.TimerSystem.Remove(this.wpo),this.wpo=void 0),!0}static ShowControlledRole(e){for(const r of ModelManager_1.ModelManager.SceneTeamModel.GetTeamItemsByPlayer(e)){var t,o=r.EntityHandle;o&&(t=o.Entity.GetComponent(92),r.IsControl())&&!t?.IsInGame&&(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneTeam",48,"复活显示角色",["EntityId",o.Id]),r.EntityHandle.Entity?.EnableByKey(1,!0))}}static RequestChangeRole(e,t=void 0){var o=t?.FilterSameRole??!0;const r=t?.GoDownWaitSkillEnd??!1,a=t?.ForceInheritTransform??!0;t=t?.GoBattleInvincible??!1;const n=ModelManager_1.ModelManager.SceneTeamModel;var l,_,i,c=n.GetCurrentTeamItem,s=n.GetTeamItem(e,{ParamType:3});!s||o&&c?.GetCreatureDataId()===e||(o=s.EntityHandle?.Entity)&&((l=SceneTeamController.Bpo())!==Protocol_1.Aki.Protocol.f6s.Proto_SignleWorld||GlobalData_1.GlobalData.Networking()?s.CanControl()?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"请求切换当前角色",["CreatureDataId",e]),n.ChangingRole=!0,_=ModelManager_1.ModelManager.CombatMessageModel.GenMessageId(),(i=new Protocol_1.Aki.Protocol.qis).Q6n=s.GetConfigId,i.$Hn=l,CombatMessage_1.CombatNet.Call(17838,o,i,e=>{var t;n.ChangingRole=!1,e?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"切换当前角色响应"),e.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs&&((e=e.Q6n)&&0!==e?(t=n.GetTeamItem(e,{ParamType:0,OnlyMyRole:!0})?.GetCreatureDataId())?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"请求换人失败，已更换正确角色",["角色Id",e]),this.Tpo.Start(),this.gel(t,r,a),this.Tpo.Stop()):Log_1.Log.CheckError()&&Log_1.Log.Error("SceneTeam",48,"请求换人失败，在队伍中未找到角色",["角色Id",e]):Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"请求换人失败，全角色已死亡",["角色Id",e]))):Log_1.Log.CheckError()&&Log_1.Log.Error("SceneTeam",48,"切换当前角色响应为空，前后端当前角色可能不一致")},void 0,_),this.Tpo.Start(),this.gel(e,r,a,t,_),this.Tpo.Stop()):Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"角色不允许请求切换",["CreatureDataId",e]):(l=!s.EntityHandle?.Entity?.Active,o=(c?.EntityHandle?.Entity?.GetComponent(89))?.IsInQte??!1,i=ModelManager_1.ModelManager.SceneTeamModel.ChangeRoleCooldown,n.ChangeRole(e,{UseGoBattleSkill:!o,CoolDown:i,GoDownWaitSkillEnd:r,AllowRefreshTransform:l,ForceInheritTransform:a})))}static Bpo(){return ModelManager_1.ModelManager.EditBattleTeamModel.IsInInstanceDungeon?Protocol_1.Aki.Protocol.f6s.Proto_FbInstance:ModelManager_1.ModelManager.GameModeModel.IsMulti?Protocol_1.Aki.Protocol.f6s.Proto_MultiWorld:Protocol_1.Aki.Protocol.f6s.Proto_SignleWorld}static gel(e,t=!1,o=!0,r=!1,a=void 0){var n=ModelManager_1.ModelManager.SceneTeamModel,l=(this.Lpo.Start(),n.RefreshLastTransform(),this.Lpo.Stop(),n.GetTeamItem(e,{ParamType:3})),_=l?.EntityHandle.Entity;_&&l.IsMyRole()?(l=_.GetComponent(89),this.Dpo.Start(),l=n.ChangeRole(e,{UseGoBattleSkill:!l.IsInQte,GoBattleInvincible:r,CoolDown:n.ChangeRoleCooldown,GoDownWaitSkillEnd:t,AllowRefreshTransform:!_.Active,ForceInheritTransform:o,MessageId:a}),this.Dpo.Stop(),l||(ModelManager_1.ModelManager.SceneTeamModel.ChangingRole=!1)):(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"队伍实体无法获取或非本机",["CreatureDataId",e]),ModelManager_1.ModelManager.SceneTeamModel.ChangingRole=!1)}static GetLivingSate(e){switch(e){case Protocol_1.Aki.Protocol.JEs.Proto_Alive:return 1;case Protocol_1.Aki.Protocol.JEs.Proto_Dead:return 2;default:Protocol_1.Aki.Protocol.JEs.Proto_Init;return 0}}static Hll(e){Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"请求角色入队",["creatureDataIdList",e]);var t=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentTeamItem;if(t){var t=MathUtils_1.MathUtils.NumberToLong(t.GetCreatureDataId()),o=[];for(const r of e)o.push(MathUtils_1.MathUtils.NumberToLong(r));ModelManager_1.ModelManager.SceneTeamModel.ChangingTeam=!0;e=new Protocol_1.Aki.Protocol.vMl;e.jll=t,e.PSs=o,Net_1.Net.Call(23106,e,e=>{ModelManager_1.ModelManager.SceneTeamModel.ChangingTeam=!1,e&&e.Q4n===Protocol_1.Aki.Protocol.Q4n.KRs||Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"请求角色入队失败")})}else Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"编队当前角色不存在，不允许请求角色入队")}static kgl(e){var t=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentTeamItem,o=t?.EntityHandle?.Entity;if(t&&o){var r=[180,0,-90,90],a=Vector_1.Vector.Create(),n=Vector_1.Vector.Create(),o=o.GetComponent(3),l=o.ActorLocationProxy,_=o.ActorForwardProxy,i=t.GetCreatureDataId();for(const T of ModelManager_1.ModelManager.SceneTeamModel.GetTeamItems(!0)){var c=T.GetCreatureDataId();if(T.IsAutoRole()&&c!==i&&e.includes(c)){var s=T.EntityHandle?.Entity?.GetComponent(3);if(s){var m=2*s.ScaledRadius+10;m*=m;let e=!1;for(;0<r.length;){var S=r.pop();if(void 0===S)break;n.DeepCopy(l),_.RotateAngleAxis(S,Vector_1.Vector.UpVectorProxy,a),a.MultiplyEqual(SceneTeamDefine_1.AUTO_ROLE_OFFSET_DISTANCE),n.AdditionEqual(a);S=(0,SkillBehaviorMisc_1.traceWall)(s,l,n,!1);if(S&&(!(S[0]&&Vector_1.Vector.DistSquared2D(l,n)<m)&&s.FixBornLocation("刷新Ai角色入队位置",!0,n))){e=!0;break}}e||(s.SetActorLocation(l.ToUeVector(),"刷新Ai角色入队位置",!1),s.FixBornLocation("刷新Ai角色入队位置"))}}}}}static TryUseMultiQte(e){var t=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentTeamItem,o=t.EntityHandle.Entity.GetComponent(89);return o.IsQteReady(e)?(e.Entity.GetComponent(89).UseExitSkill(t.EntityHandle),o.ExecuteMultiQte(e),!0):(e.Entity.GetComponent(191).HasTag(166024319)||ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByCode("TeammateQteDisable"),!1)}static IsMatchRoleOption(e){var t=ModelManager_1.ModelManager.SceneTeamModel,o=t.IsPhantomTeam,r=t.GetTeamItems();for(const a of e)switch(a.Type){case IMatch_1.EMatchRoleType.Player:if(o)break;return!0;case IMatch_1.EMatchRoleType.Phantom:if(o)for(const n of r)if(n.GetConfigId===a.Id)return!0}return!1}static EmitEvent(e,t,...o){e&&(EventSystem_1.EventSystem.EmitWithTarget(e,t,...o),e=ModelManager_1.ModelManager.SceneTeamModel.GetTeamItem(e.Id,{ParamType:1}))&&(e.IsMyRole()&&EventSystem_1.EventSystem.EmitWithTarget(SceneTeamEvent_1.SceneTeam.Local,t,...o),EventSystem_1.EventSystem.EmitWithTarget(SceneTeamEvent_1.SceneTeam.All,t,...o))}}exports.SceneTeamController=SceneTeamController,(_a=SceneTeamController).Tpo=void 0,SceneTeamController.Lpo=void 0,SceneTeamController.Dpo=void 0,SceneTeamController.wpo=void 0,SceneTeamController.RQe=(e,t)=>{10036===e&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnConcertoResponseOpen,t)},SceneTeamController.Zpe=e=>{GlobalData_1.GlobalData.BpEventManager.小队战斗状态改变时.Broadcast(e)},SceneTeamController.Upo=()=>{_a.wpo||(_a.wpo=TimerSystem_1.TimerSystem.Forever(_a.qpo,SceneTeamDefine_1.CHECK_ROLE_INTERVAL))},SceneTeamController.GUe=(e,t,o)=>{ModelManager_1.ModelManager.SceneTeamModel.OnAddEntity(t)},SceneTeamController.zpe=(e,t)=>{ModelManager_1.ModelManager.SceneTeamModel.OnRemoveEntity(t)},SceneTeamController.vml=(e,t,o)=>{if(1===e){var r,a,n=Vector_1.Vector.Create(t),l=SceneTeamDefine_1.DATA_LAYER_CHANGE_RADIUS*SceneTeamDefine_1.DATA_LAYER_CHANGE_RADIUS;for(const _ of ModelManager_1.ModelManager.SceneTeamModel.GetTeamItems(!0))_.IsControl()||(a=_.EntityHandle?.Entity)&&(r=a.GetComponent(84))&&1===r.GetTeamState()&&(a=a.GetComponent(1).ActorLocationProxy,t&&Vector_1.Vector.DistSquared(n,a)>l||r.DisableRoleWithoutEffect())}},SceneTeamController.xpo=e=>{Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",5,"9603 换人同步",["massage",e]);var t=MathUtils_1.MathUtils.LongToNumber(e.mUs),o=ModelManager_1.ModelManager.CreatureModel.GetEntity(t),r=o.Entity.GetComponent(0);if(o?.Valid){var a=r.GetRoleId();if(e.W5n===ModelManager_1.ModelManager.PlayerInfoModel.GetId())Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",5,"通过换人同步切换角色",["massage",e]),SceneTeamController.gel(t);else{var n=MathUtils_1.MathUtils.LongToNumber(e.CUs),l=ModelManager_1.ModelManager.CreatureModel.GetEntity(n);if(l?.Valid){o.IsInit&&((_=o.Entity.GetComponent(3)).SetActorTransform(l.Entity.GetComponent(3).ActorTransform,"SwitchRoleNotify",!1),l.Entity.GetComponent(191)?.HasAnyTag(SceneTeamDefine_1.needFixLocationTagList))&&_.FixSwitchLocation("模拟端换人地面修正",!0,!0),r.SetVisible(!0),o.Entity?.EnableByKey(1,!0);var _=o.Entity.GetComponent(163).MainAnimInstance,r=l.Entity.GetComponent(163).MainAnimInstance,_=(UE.KuroStaticLibrary.IsObjectClassByName(_,CharacterNameDefines_1.CharacterNameDefines.ABP_BASEROLE)&&UE.KuroStaticLibrary.IsObjectClassByName(r,CharacterNameDefines_1.CharacterNameDefines.ABP_BASEROLE)&&_.替换角色时同步动作数据(r),o.Entity.GetComponent(60)),r=l.Entity.GetComponent(60),i=(_.CloneMoveSampleInfos(r),l.Entity.GetComponent(0));i.SetVisible(!1),ModelManager_1.ModelManager.SceneTeamModel.OtherPlayerChangeRole(e.W5n,t);for(const c of ModelManager_1.ModelManager.SceneTeamModel.GetTeamItemsByPlayer(e.W5n))c.GetConfigId===i.GetRoleId()?c.SetRemoteIsControl(!1):c.GetConfigId===a&&c.SetRemoteIsControl(!0);l.Entity?.DisableByKey(1,!0),GlobalData_1.GlobalData.GameInstance&&GlobalData_1.GlobalData.BpEventManager.当换人完成时.Broadcast(),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnOtherChangeRole)}else Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",5,"[SceneTeam.SwitchRoleNotify] 不存在下阵的Entity。",["DownCreatureDataId",n])}}else Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",5,"[SceneTeam.SwitchRoleNotify] 不存在上阵的Entity。",["UpCreatureId",t])},SceneTeamController.Ppo=e=>{Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"切换编队组推送"),ModelManager_1.ModelManager.SceneTeamModel.SwitchGroup(e.W5n,e.USs)},SceneTeamController.Apo=e=>{Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"更新编队组推送",["Data",e]);var t=new Array;for(const n of e.yRs){var o=new Array;for(const l of n.ERs){var r=[];for(const _ of l.gRs){var a=new SceneTeamData_1.SceneTeamRole;a.CreatureDataId=MathUtils_1.MathUtils.LongToNumber(_.F4n),a.RoleId=_.Q6n,r.push(a)}o.push({GroupType:l.USs,GroupRoleList:r,CurrentRoleId:l.NVn,LivingState:SceneTeamController.GetLivingSate(l.JEs),IsFixedLocation:l.I0a,IsRetain:l.MRs})}t.push({PlayerId:n.W5n,CurrentGroupType:n.DEl,Groups:o})}ModelManager_1.ModelManager.SceneTeamModel.UpdateAllPlayerData(t,!1)},SceneTeamController.r$s=e=>{var t=e.W5n,e=e.azs,o=(Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"更新编队组死亡状态",["PlayerId",t],["States",e]),new Map);for(const a of e){var r=SceneTeamController.GetLivingSate(a.JEs);o.set(a.USs,r)}ModelManager_1.ModelManager.SceneTeamModel.UpdateGroupLivingStates(t,o)},SceneTeamController.Vll=e=>{for(const o of e.mEl){var t=MathUtils_1.MathUtils.LongToNumber(o);ModelManager_1.ModelManager.SceneTeamModel.AddPreloadEntity(t)}},SceneTeamController.VOi=e=>{e=ModelManager_1.ModelManager.SceneTeamModel.PanelQteJoinTeam(e);e&&0<e.length&&(SceneTeamController.Hll(e),SceneTeamController.kgl(e))},SceneTeamController.qpo=()=>{var e,t,o,r;Net_1.Net.IsServerConnected()&&(e=(o=ModelManager_1.ModelManager.SceneTeamModel).GetCurrentTeamItem,t=o.GetCurrentEntity?.Entity,e&&t?(o=o.CurrentGroupType)&&-1!==o?((r=new Protocol_1.Aki.Protocol.Trs).W5n=e.GetPlayerId(),r.YHn=e.GetConfigId,r.JHn=e.GetCreatureDataId(),CombatMessage_1.CombatNet.Call(27261,t,r,()=>{})):Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"检查当前角色，控制特殊角色中",["groupType",o]):Log_1.Log.CheckInfo()&&Log_1.Log.Info("SceneTeam",48,"检查当前角色，无法获取队伍实例或实体"))};
//# sourceMappingURL=SceneTeamController.js.map