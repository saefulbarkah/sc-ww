
"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.BattleLinkController=void 0;const UE=require("ue"),ActorSystem_1=require("../../../../Core/Actor/ActorSystem"),AudioSystem_1=require("../../../../Core/Audio/AudioSystem"),Info_1=require("../../../../Core/Common/Info"),Log_1=require("../../../../Core/Common/Log"),ControllerBase_1=require("../../../../Core/Framework/ControllerBase"),Net_1=require("../../../../Core/Net/Net"),TimerSystem_1=require("../../../../Core/Timer/TimerSystem"),MathUtils_1=require("../../../../Core/Utils/MathUtils"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),TimeUtil_1=require("../../../Common/TimeUtil"),Global_1=require("../../../Global"),ConfigManager_1=require("../../../Manager/ConfigManager"),ModelManager_1=require("../../../Manager/ModelManager"),BulletController_1=require("../../../NewWorld/Bullet/BulletController"),PreloadConfigStatementPart1_1=require("../../../Preload/PreloadConfigStatementPart1"),PreloadControllerClassPart1_1=require("../../../Preload/PreloadControllerClassPart1"),RenderUtil_1=require("../../../Render/Utils/RenderUtil"),InputDistributeController_1=require("../../../Ui/InputDistribute/InputDistributeController"),InputMappingsDefine_1=require("../../../Ui/InputDistribute/InputMappingsDefine"),UiManager_1=require("../../../Ui/UiManager"),GameModeController_1=require("../../../World/Controller/GameModeController"),BattleUiControl_1=require("../../BattleUi/BattleUiControl"),BattleLinkDefine_1=require("./BattleLinkDefine"),actionNames=[InputMappingsDefine_1.actionMappings.切换角色1,InputMappingsDefine_1.actionMappings.切换角色2,InputMappingsDefine_1.actionMappings.切换角色3,InputMappingsDefine_1.actionMappings.切换角色4,InputMappingsDefine_1.actionMappings.技能1],seqCameraTag=new UE.FName("SequenceCamera"),bgTag=new UE.FName("Character");class BattleLinkController extends ControllerBase_1.ControllerBase{static OnInit(){return Net_1.Net.Register(18163,this.JAl),Net_1.Net.Register(19572,this.ZAl),!0}static OnClear(){return Net_1.Net.UnRegister(18163),Net_1.Net.UnRegister(19572),this.Nmt(),!0}static OnPreload(){var t;if(ModelManager_1.ModelManager.BattleLinkModel?.CheckInBattleLink())return this.yWe(),this.PJa(),(t=ModelManager_1.ModelManager.CreatureModel?.GetPlayerId())&&(t=ModelManager_1.ModelManager.SceneTeamModel.GetTeamPlayerData(t)?.GetCurrentGroup())&&(t=(t?.GetRoleList()).map(t=>ConfigManager_1.ConfigManager.RoleConfig.GetBaseRoleId(t.RoleId)),ModelManager_1.ModelManager.BattleLinkModel.SetRoleIdList(t)),["BattleLinkController",ModelManager_1.ModelManager.BattleLinkModel.PreloadRes()]}static OnLeaveLevel(){return this.Nmt(),this.Zza=!1,this.awa&&(this.awa.SequencePlayer?.IsPlaying()&&this.awa.SequencePlayer?.Stop(),ActorSystem_1.ActorSystem.Put("BattleLinkController.OnLeaveLevel",this.awa)),this.awa=void 0,this.j3&&(TimerSystem_1.TimerSystem.Remove(this.j3),this.j3=void 0,this.eRe()),this.tJa&&BattleUiControl_1.BattleUiControl.SetBattleViewVisible(this.tJa),this.tJa=void 0,this.dgl&&GameModeController_1.GameModeController.SetTimeDilation(1),this.dgl=!1,this.Ash.clear(),this.Dsh=!0}static yWe(){this.zHa||(this.zHa=!0,InputDistributeController_1.InputDistributeController.BindActions(actionNames,this.gTn),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnBattleLinkToggle,this.s5a),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.CharUseSkill,this.BJe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnUpdateSceneTeam,this.dLe))}static Nmt(){this.zHa&&(this.zHa=!1,InputDistributeController_1.InputDistributeController.UnBindActions(actionNames,this.gTn),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnBattleLinkToggle,this.s5a),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.CharUseSkill,this.BJe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnUpdateSceneTeam,this.dLe))}static PJa(){this.awa||(this.awa=ActorSystem_1.ActorSystem.Get(UE.LevelSequenceActor.StaticClass(),MathUtils_1.MathUtils.DefaultTransformDouble,void 0,!1))}static Rsh(e){if(!this.Ash.has(e)){var i=ModelManager_1.ModelManager.CreatureModel.GetPlayerId(),i=ModelManager_1.ModelManager.SceneTeamModel.GetTeamPlayerData(i).GetCurrentGroup().GetRoleList();let t=0;for(const a of i){var n=ModelManager_1.ModelManager.CreatureModel.GetEntity(a.CreatureDataId);n.Entity.Id===e&&(this.Ash.set(n.Entity.Id,n),Log_1.Log.CheckDebug())&&Log_1.Log.Debug("Battle",67,"[BattleLink]缓存Entity成功",["entityId",e]),this.Ash.has(n.Entity.Id)&&(t+=1)}t===i.length&&(this.Dsh=!1)}}static UseLinkSkill(t){var e,i;t&&(this.Zqi?ModelManager_1.ModelManager.BattleLinkModel.HasLinkEntityId(t.Id)?Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]触发队友大招失败, 该entity已触发过",["entityId",t.Id]):(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]触发队友大招成功",["MessageId",this.Zqi],["entityId",t.Id]),t=t.GetComponent(169),e=MathUtils_1.MathUtils.LongToBigInt(this.Zqi),(i=PreloadConfigStatementPart1_1.configCommonParamById.GetLong54Config("LinkSkillNotifyBuff"))&&t.AddBuff(i,{InstigatorId:t.CreatureDataId,Reason:"触发Link大招",PreMessageId:e})):Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]触发队友大招失败",["MessageId",this.Zqi]))}static StartLink(t=0){t=0===t?TimeUtil_1.TimeUtil.GetServerTimeStamp():t;UiManager_1.UiManager.IsViewOpen("BattleLinkView")?EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnBattleLinkRestart,t):UiManager_1.UiManager.OpenView("BattleLinkView",t),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]Link倒计时开始")}static StopLink(){EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnBattleLinkStop),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]Link倒计时结束")}static StartLinkExplosion(){this.StopLink(),this.TryPlaySplitScreen()}static TryPlaySplitScreen(){this.Zza||(ModelManager_1.ModelManager.BattleLinkModel?.CheckSplitScreenRes()&&this.awa?(this.Zza=!0,this.eJa(),ModelManager_1.ModelManager.BattleLinkModel.PlayRoleAnim(!0),this.LinkExplosionStart()):Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]分屏衔接播放失败"))}static eJa(){var t,e=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentEntity.Entity,e=(e&&(e=e.GetComponent(21))&&(t=e?.AddCue(BattleLinkDefine_1.LINK_BURST_POST_EFFECT),this.yta=e?.GetCueByHandle(t)),BattleLinkDefine_1.LINK_POST_EFFECT_DURATION*TimeUtil_1.TimeUtil.InverseMillisecond);this.j3=TimerSystem_1.TimerSystem.Delay(()=>{this.j3=void 0,this.eRe(),this.t$a()},e),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]播放分屏衔接")}static eRe(){this.yta&&(this.yta.Destroy(),this.yta=void 0)}static t$a(){var t=ModelManager_1.ModelManager.BattleLinkModel,e=t?.GetSplitScreenMainBp(),t=t?.GetSplitScreenSeq();e&&t&&this.awa?(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]分屏Seq开始播放"),ModelManager_1.ModelManager.BattleLinkModel.PlayRoleAnim(),AudioSystem_1.AudioSystem.SetState("game_rogue_link_state","in_link"),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",42,"[BattleLink]Link音乐切入"),ModelManager_1.ModelManager.BattleLinkModel.PlayRoleLinkAudio(),PreloadControllerClassPart1_1.CameraController.SequenceCamera.PlayerComponent.SetBlendTime(0,0),PreloadControllerClassPart1_1.CameraController.SequenceCamera.PlayerComponent.StopSequence(),this.awa.SetSequence(t),this.GPe.Add(ModelManager_1.ModelManager.CameraModel.SequenceCamera.DisplayComponent.CineCamera),this.awa.SetBindingByTag(seqCameraTag,this.GPe,!1),this.GPe.Empty(),this.GPe.Add(e),this.awa.SetBindingByTag(bgTag,this.GPe,!1),this.GPe.Empty(),PreloadControllerClassPart1_1.CameraController.EnterCameraMode(1),e.SetActorHiddenInGame(!1),e.Start(),this.awa.SequencePlayer.OnFinished.Clear(),this.awa.SequencePlayer.OnFinished.Add(this.uwa),this.awa.SequencePlayer.Play(),RenderUtil_1.RenderUtil.BeginPSOSyncMode()):(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]分屏Seq播放失败"),this.LinkExplosionEnd())}static LinkExplosionStart(){this.dgl=!0,this.tJa=BattleUiControl_1.BattleUiControl.SetBattleViewInvisible(),GameModeController_1.GameModeController.SetTimeDilation(0),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]分屏假时停开始")}static LinkExplosionEnd(){if(this.dgl=!1,this.tJa&&BattleUiControl_1.BattleUiControl.SetBattleViewVisible(this.tJa),this.tJa=void 0,GameModeController_1.GameModeController.SetTimeDilation(1),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]分屏假时停结束"),ModelManager_1.ModelManager.BattleLinkModel?.ResetLinkSkillStatus(),this.Zqi){var t=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentEntity.Entity,e=PreloadConfigStatementPart1_1.configCommonParamById.GetLong54ArrayConfig("LinkBrustBuffs"),i=PreloadConfigStatementPart1_1.configCommonParamById.GetLong54ArrayConfig("LinkBrustBullets"),n=t.GetComponent(169),a=MathUtils_1.MathUtils.LongToBigInt(this.Zqi);if(e)for(const r of e)n.AddBuff(r,{InstigatorId:n.CreatureDataId,Reason:"Link爆发结束增加buff",PreMessageId:a});if(i)for(const l of i)BulletController_1.BulletController.CreateBulletCustomTarget(t,l.toString(),void 0,{},a)}}static SetPlayerUltraSkillEnable(t){var e=Global_1.Global.BaseCharacter?.CharacterActorComponent?.Entity?.GetComponent(200);e&&(t?e.RemoveTag(-732810197):e.AddTag(-732810197))}static SetMessageId(t){this.Zqi=t}}exports.BattleLinkController=BattleLinkController,(_a=BattleLinkController).a5a=0,BattleLinkController.zHa=!1,BattleLinkController.tJa=void 0,BattleLinkController.Zqi=void 0,BattleLinkController.Zza=!1,BattleLinkController.yta=void 0,BattleLinkController.awa=void 0,BattleLinkController.GPe=UE.NewArray(UE.Actor),BattleLinkController.j3=void 0,BattleLinkController.Ash=new Map,BattleLinkController.Dsh=!0,BattleLinkController.dgl=!1,BattleLinkController.s5a=()=>{_a.a5a=(_a.a5a+1)%2},BattleLinkController.gTn=(t,e)=>{Info_1.Info.IsBuildShipping||0===e&&_a.a5a&&(t===InputMappingsDefine_1.actionMappings.技能1?_a.TryPlaySplitScreen():t===InputMappingsDefine_1.actionMappings.切换角色4&&(UiManager_1.UiManager.IsViewOpen("BattleLinkView")?EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnBattleLinkRestart,TimeUtil_1.TimeUtil.GetServerTimeStamp()):UiManager_1.UiManager.OpenView("BattleLinkView")))},BattleLinkController.BJe=(t,e,i)=>{_a.Dsh&&!_a.Ash.has(t)&&_a.Rsh(t);var n=_a.Ash.get(t);n?3===(n.Entity?.GetComponent(39)?.GetSkillInfo(e))?.SkillGenre&&ModelManager_1.ModelManager.BattleLinkModel.CanUseLinkSkill(t)&&(ModelManager_1.ModelManager.BattleLinkModel.AddLinkEntityId(t),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnBattleLinkStop),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnBattleLinkStatusChanged,3)):Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]EntityCache中找不到entity",["entityId",t])},BattleLinkController.dLe=()=>{var t=ModelManager_1.ModelManager.CreatureModel?.GetPlayerId();t&&(t=ModelManager_1.ModelManager.SceneTeamModel.GetTeamPlayerData(t)?.GetCurrentGroup())&&(t=(t?.GetRoleList()).map(t=>ConfigManager_1.ConfigManager.RoleConfig.GetBaseRoleId(t.RoleId)),ModelManager_1.ModelManager.BattleLinkModel.UpdateMainBp(t)),_a.Ash.clear(),_a.Dsh=!0},BattleLinkController.uwa=()=>{_a.Zza=!1,Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]分屏Seq播放结束");var t=ModelManager_1.ModelManager.BattleLinkModel?.GetSplitScreenMainBp(),t=(t?.End(),t?.SetActorHiddenInGame(!0),ModelManager_1.ModelManager.CameraModel.SequenceCamera.DisplayComponent.CineCamera);t.GetAttachParentActor()&&t.K2_DetachFromActor(),PreloadControllerClassPart1_1.CameraController.ExitCameraMode(1),_a.LinkExplosionEnd(),RenderUtil_1.RenderUtil.EndPSOSyncMode()},BattleLinkController.JAl=t=>{ModelManager_1.ModelManager.BattleLinkModel?.HandleLinkingStateNotify(t),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]接收Link状态改变通知",["status",t.rT_],["msgId",t._Vn])},BattleLinkController.ZAl=t=>{ModelManager_1.ModelManager.BattleLinkModel?.HandleLinkExitNotify(t),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]接收Link退出通知",["status",t.rT_],["reason",t.x9n]),AudioSystem_1.AudioSystem.SetState("game_rogue_link_state","not_in_link"),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",42,"[BattleLink]Link音乐切出")};
//# sourceMappingURL=BattleLinkController.js.map