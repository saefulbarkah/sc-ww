
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BattleLinkModel=void 0;const UE=require("ue"),ActorSystem_1=require("../../../../Core/Actor/ActorSystem"),AudioSystem_1=require("../../../../Core/Audio/AudioSystem"),CustomPromise_1=require("../../../../Core/Common/CustomPromise"),Log_1=require("../../../../Core/Common/Log"),Time_1=require("../../../../Core/Common/Time"),BattleLinkCharacterById_1=require("../../../../Core/Define/ConfigQuery/BattleLinkCharacterById"),RoleInfoById_1=require("../../../../Core/Define/ConfigQuery/RoleInfoById"),ModelBase_1=require("../../../../Core/Framework/ModelBase"),ResourceSystem_1=require("../../../../Core/Resource/ResourceSystem"),DataTableUtil_1=require("../../../../Core/Utils/DataTableUtil"),MathUtils_1=require("../../../../Core/Utils/MathUtils"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),ConfigManager_1=require("../../../Manager/ConfigManager"),ControllerHolder_1=require("../../../Manager/ControllerHolder"),ModelManager_1=require("../../../Manager/ModelManager"),CharacterNameDefines_1=require("../../../NewWorld/Character/Common/CharacterNameDefines"),PreloadConfigStatementPart1_1=require("../../../Preload/PreloadConfigStatementPart1"),SequenceDefine_1=require("../../Plot/Sequence/SequenceDefine"),BattleLinkController_1=require("./BattleLinkController"),BattleLinkDefine_1=require("./BattleLinkDefine"),THREE_ROLE=3,TWO_ROLE=2,ACTIVITY_ID=102600001;class BattleLinkModel extends ModelBase_1.ModelBase{constructor(){super(...arguments),this.swa=void 0,this.hwa=void 0,this.gml=void 0,this.lwa=void 0,this._wa=void 0,this.Ush=void 0,this.F$=void 0,this.Ksl=void 0,this.Ual=void 0,this.Dal=void 0,this.NUe=-1,this.Oll=-1,this.Wke=void 0,this.V1l=!1,this.H1l=!1,this.JKa=void 0,this.kJa=void 0,this.KZa=void 0,this.uul=!1,this.Yul=void 0,this.zul=void 0,this.ZKa=0}OnInit(){return!0}OnLeaveLevel(){return this.swa&&ActorSystem_1.ActorSystem.Put("BattleLinkModel.OnLeaveLevel",this.swa),this.swa=void 0,this.hwa=void 0,this.gml=void 0,this.lwa?.clear(),this._wa?.clear(),this.Ush?.clear(),this.F$?.clear(),this.Ksl?.clear(),this.Ual?.clear(),this.Dal?.clear(),this.NUe=-1,this.Oll=-1,this.V1l=!1,this.H1l=!1,this.zul=void 0,this.uul=!1,this.JKa=void 0,!(this.ZKa=0)}Jul(){var t=ModelManager_1.ModelManager.CreatureModel.GetInstanceId();if(!this.Yul){var e=ConfigManager_1.ConfigManager.DreamLinkConfig?.GetActivityConfig(ACTIVITY_ID);if(!e)return;var i,s,e=e.PreloadRoleIds;this.Yul=new Map;for([i,s]of e.entries()){var o=s.split(";").map(t=>parseInt(t));this.Yul.set(i,o)}}let r=this.Yul.get(t);return r=r||this.Wke}SetRoleIdList(t){Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]设置角色列表",["roleIdList",t]),this.V1l=!1,this.H1l=!1,t.length===THREE_ROLE?(this.Wke=[t[1],t[0],t[2]],this.V1l=!0):t.length===TWO_ROLE?(this.Wke=[t[1],t[0]],this.H1l=!0):this.Wke=t,this.Oll=t[0]}PreloadRes(){const t=new CustomPromise_1.CustomPromise;return this.zul=this.Jul(),this.zul||(this.zul=[]),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]开始预加载资源",["roleIdList",this.zul]),this.$sl(this.zul).then(()=>{this.jll(this.zul).then(()=>{this.$Za(),this.UpdateMainBp(this.Wke),t.SetResult(!0)}).catch(()=>{t.SetResult(!1)})}).catch(()=>{t.SetResult(!1)}),t}async $sl(t){const s=[];t.forEach((t,e)=>{var i=BattleLinkCharacterById_1.configBattleLinkCharacterById.GetConfig(t);i?s.push(this.Wll(t,i.CharacterDataAsset)):Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",67,"[BattleLink]找不到roleId的配置",["roleid",t])}),await Promise.all(s)}async jll(t){const o=[];o.push(this.cwa()),o.push(this.mwa(BattleLinkDefine_1.THREE_ROLE_SEQ_PATH)),o.push(this.mwa(BattleLinkDefine_1.TWO_ROLE_SEQ_PATH)),t.forEach((t,e)=>{var i,s=this.Ksl?.get(t),s=(s?(s.CharacterActorClass&&(i=UE.KismetSystemLibrary.GetPathName(s.CharacterActorClass),o.push(this.dwa(t,i))),s.Cos_Pose_AnimSequence&&(i=UE.KismetSystemLibrary.GetPathName(s.Cos_Pose_AnimSequence),o.push(this.Ral(t,i)))):Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",67,"[BattleLink]找不到角色对应的DA",["roleid",t]),BattleLinkCharacterById_1.configBattleLinkCharacterById.GetConfig(t));s?(1===s.NeedLoadMesh&&(i=RoleInfoById_1.configRoleInfoById.GetConfig(t)?.MeshId)&&(s=DataTableUtil_1.DataTableUtil.GetDataTableRowFromName(0,i.toString())?.网格体?.ToAssetPathName())&&s.length&&"None"!==s&&o.push(this.xsh(t,s)),1105===t&&(o.push(this.xsh(t,BattleLinkDefine_1.ZHEZHI_WEAPON_MESH,!0)),o.push(this.Ral(t,BattleLinkDefine_1.ZHEZHI_WEAPON_ANIM,!0)))):Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",67,"[BattleLink]找不到roleId的配置",["roleid",t])}),await Promise.all(o)}async cwa(){const e=new CustomPromise_1.CustomPromise;return ResourceSystem_1.ResourceSystem.LoadAsync(BattleLinkDefine_1.BATTLE_LINK_BP_PATH,UE.Class,t=>{t?this.swa=ActorSystem_1.ActorSystem.Get(t,MathUtils_1.MathUtils.DefaultTransformDouble):Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",67,"[BattleLink]加载BP_SplitScreen失败"),e.SetResult()},100),e.Promise}async Wll(e,t){const i=new CustomPromise_1.CustomPromise;return ResourceSystem_1.ResourceSystem.LoadAsync(t,UE.BP_SplitScreenCharacterData_C,t=>{t?(this.Ksl||(this.Ksl=new Map),this.Ksl.set(e,t),i.SetResult()):Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",67,"[BattleLink]加载角色DA失败")},100),i.Promise}async Ral(e,i,s=!1){const o=new CustomPromise_1.CustomPromise;return ResourceSystem_1.ResourceSystem.LoadAsync(i,UE.AnimSequence,t=>{t?(s?(this.Ual||(this.Ual=new Map),this.Ual):(this._wa||(this._wa=new Map),this._wa)).set(e,t):Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",67,"[BattleLink]加载anim失败",["roleId",e],["path",i]),o.SetResult()},100),o.Promise}async dwa(e,t){const i=new CustomPromise_1.CustomPromise;return ResourceSystem_1.ResourceSystem.LoadAsync(t,UE.Class,t=>{t?(this.lwa||(this.lwa=new Map),this.lwa.set(e,t)):Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",67,"[BattleLink]加载角色SeqBp失败"),i.SetResult()},100),i.Promise}async mwa(e){const i=new CustomPromise_1.CustomPromise;return ResourceSystem_1.ResourceSystem.LoadAsync(e,UE.LevelSequence,t=>{t?e===BattleLinkDefine_1.THREE_ROLE_SEQ_PATH?this.hwa=t:this.gml=t:Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",67,"[BattleLink]加载Seq失败",["path",e]),i.SetResult()},100),i.Promise}async xsh(e,i,s=!1){const o=new CustomPromise_1.CustomPromise;return ResourceSystem_1.ResourceSystem.LoadAsync(i,UE.SkeletalMesh,t=>{t?(s?(this.Dal||(this.Dal=new Map),this.Dal):(this.Ush||(this.Ush=new Map),this.Ush)).set(e,t):Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",67,"[BattleLink]加载Mesh失败",["roleId",e],["path",i]),o.SetResult()},100),o.Promise}CheckSplitScreenRes(){return this.swa?this.V1l||this.H1l?this.V1l&&!this.hwa?(Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Battle",67,"[BattleLink]播放分屏时资源没准备好: ThreeRoleSeq"),!1):!(this.H1l&&!this.gml&&(Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Battle",67,"[BattleLink]播放分屏时资源没准备好: TwoRoleSeq"),1)):(Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Battle",67,"[BattleLink]非三人或双人队伍, 播放分屏检查seq失败"),!1):(Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Battle",67,"[BattleLink]播放分屏时资源没准备好: MainBp"),!1)}$Za(){this.swa&&(this.swa.End(),this.NUe=ModelManager_1.ModelManager.CreatureModel.GetInstanceId(),this.swa.D_K2_SetActorLocation(this.GetBpLocation(),!1,void 0,!1),this.swa.SetActorHiddenInGame(!0))}UpdateMainBp(t){this.swa&&(this.SetRoleIdList(t),this.swa.Reset(),this.V1l?(this.swa.E_LinkPos_1=0,this.swa.E_LinkPos_2=.5,this.swa.E_LinkPos_3=1):(this.swa.E_LinkPos_1=1,this.swa.E_LinkPos_2=0),t=[this.swa.CharacterActor_1,this.swa.CharacterActor_2],this.V1l&&t.push(this.swa.CharacterActor_3),t.forEach((t,e)=>{var i,s;e>=this.Wke.length||(i=this.Wke[e],s=this.lwa?.get(i),t?.SetChildActorClass(s),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]分屏Bp设置ChildActor",["roleId",i],["class",s]),(s=t?.ChildActor?.GetComponentByClass(UE.SkeletalMeshComponent.StaticClass()))&&((t=this.Ush?.get(i))&&s.SetSkeletalMesh(t),t=this.Dal?.get(i))&&(s=s.GetChildComponent(1))&&(s.SetSkeletalMesh(t),s.SetVisibility(!0),s.SetActive(!0)),(t=this.Ksl?.get(i))&&this.Xsl(e,t))}))}Xsl(t,e){if(this.swa)switch(t){case 0:this.swa.PointLight1_Location=e.PointLight_Location,this.swa.PointLight1_ToonLightColor=e.PointLight_Color,this.swa.EyeLightSimulation_Color1=e.EyeLightSimulation_Color;break;case 1:this.swa.PointLight2_Location=e.PointLight_Location,this.swa.PointLight2_ToonLightColor=e.PointLight_Color,this.swa.EyeLightSimulation_Color2=e.EyeLightSimulation_Color;break;case 2:this.swa.PointLight3_Location=e.PointLight_Location,this.swa.PointLight3_ToonLightColor=e.PointLight_Color,this.swa.EyeLightSimulation_Color3=e.EyeLightSimulation_Color}}XZa(t,e,i){var s,e=e.ChildActor;e?(e=e.GetComponentByClass(UE.SkeletalMeshComponent.StaticClass()))?(s=e.GetLinkedAnimGraphInstanceByTag(CharacterNameDefines_1.CharacterNameDefines.ABP_BASE),i?(i=this._wa?.get(t),(i=s?.PlaySlotAnimationAsDynamicMontage(i,SequenceDefine_1.ABP_Seq_Slot_Name,0,0,1,1))&&(s?.Montage_Pause(i),this.F$||(this.F$=new Map),this.F$.set(t,i))):((i=this.F$?.get(t))&&(s?.Montage_Resume(i),this.F$?.delete(t)),(s=this.Ual?.get(t))&&(i=e.GetChildComponent(1))&&i.PlayAnimation(s,!1))):Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]找不到ChildActor的骨骼网格体",["roleId",t]):Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",67,"[BattleLink]分屏Bp的ChildActor为空",["roleId",t])}PlayRoleAnim(t=!1){this.swa&&(this.XZa(this.Wke[0],this.swa.CharacterActor_1,t),this.XZa(this.Wke[1],this.swa.CharacterActor_2,t),this.V1l)&&this.XZa(this.Wke[2],this.swa.CharacterActor_3,t)}PlayRoleLinkAudio(){var e=ConfigManager_1.ConfigManager.DreamLinkConfig?.GetActivityConfig(ACTIVITY_ID);if(ConfigManager_1.ConfigManager.DreamLinkConfig&&e){var i=e.FirstWhiteCatDungeonId;if(this.V1l&&this.NUe===i){let t=!0;for(const s of this.Wke)t=t&&e.PlotRoleLinkTeam.includes(s);if(t)return i=e.PlotRoleLinkAudio,AudioSystem_1.AudioSystem.PostEvent(i),void(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Audio",42,"[BattleLink]播放剧情Link语音.",["Event",i]))}this._ml()}}_ml(){var t;this.Oll<0?Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Audio",42,"[BattleLink]播放Link语音时获取当前角色失败",["RoleId",this.Oll]):(t=ConfigManager_1.ConfigManager.DreamLinkConfig.GetRoleConfig(this.Oll))?(t=t.RoleLinkAudio,AudioSystem_1.AudioSystem.PostEvent(t),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Audio",42,"[BattleLink]播放主控角色Link语音",["Event",t])):Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Audio",42,"[BattleLink]播放Link语音时获取当前角色配置失败",["RoleId",this.Oll])}GetSplitScreenMainBp(){return this.swa}GetSplitScreenSeq(){return this.V1l?this.hwa:this.H1l?this.gml:void 0}GetLinkDuration(){return this.kJa||(this.kJa=PreloadConfigStatementPart1_1.configCommonParamById.GetIntConfig("LinkPrepareDuration")),this.kJa}GetBpLocation(){return this.KZa||(this.KZa=new UE.VectorDouble(0,0,-3e3)),this.KZa}CheckInBattleLink(){var t,e;return!!ControllerHolder_1.ControllerHolder.GameModeController.IsInInstance()&&(t=ModelManager_1.ModelManager.CreatureModel.GetInstanceId(),23===ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetConfig(t)?.InstSubType||!(!(e=PreloadConfigStatementPart1_1.configCommonParamById.GetIntArrayConfig("LinkInstanceIds"))||!e.includes(t)))}GetLinkStatus(){return this.ZKa}CanUseLinkSkill(t=void 0){if(2!==this.ZKa&&3!==this.ZKa)return!1;if(this.uul)return!1;let e=t;return!(!(e=e||ModelManager_1.ModelManager.SceneTeamModel?.GetCurrentEntity?.Entity?.Id)||this.HasLinkEntityId(e))}ResetLinkSkillStatus(){this.SetLinkSkillInCd(!1),this.JKa=void 0}UpdateLinkStatus(t,e=void 0){this.ZKa=t,this.SetLinkSkillInCd(!1),0===t?(this.JKa=void 0,ControllerHolder_1.ControllerHolder.BattleLinkController.StopLink(),ControllerHolder_1.ControllerHolder.BattleLinkController.SetMessageId(void 0)):2===t?this.JKa=void 0:3===t?(e=MathUtils_1.MathUtils.LongToNumber(e||Time_1.Time.Now),ControllerHolder_1.ControllerHolder.BattleLinkController.StartLink(e)):4===t&&ControllerHolder_1.ControllerHolder.BattleLinkController.StartLinkExplosion(),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnBattleLinkStatusChanged,t)}HandleLinkingStateNotify(t){ControllerHolder_1.ControllerHolder.BattleLinkController.SetMessageId(t._Vn),0===t.rT_?this.UpdateLinkStatus(2):this.V1l||this.H1l?this.V1l&&t.rT_<3||this.H1l&&t.rT_<2?this.UpdateLinkStatus(3,t.J8n):this.UpdateLinkStatus(4):this.UpdateLinkStatus(0)}HandleLinkExitNotify(t){this.UpdateLinkStatus(0)}AddLinkEntityId(t){this.JKa?this.JKa.includes(t)||this.JKa.push(t):this.JKa=[t],this.SetLinkSkillInCd(!0)}HasLinkEntityId(t){return!!this.JKa?.includes(t)}SetLinkSkillInCd(t){this.uul!==t&&(this.uul=t,BattleLinkController_1.BattleLinkController.SetPlayerUltraSkillEnable(!t))}}exports.BattleLinkModel=BattleLinkModel;
//# sourceMappingURL=BattleLinkModel.js.map