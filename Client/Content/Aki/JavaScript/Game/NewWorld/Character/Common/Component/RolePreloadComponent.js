
"use strict";var RolePreloadComponent_1,__decorate=this&&this.__decorate||function(e,t,o,i){var r,l=arguments.length,a=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;0<=n;n--)(r=e[n])&&(a=(l<3?r(a):3<l?r(t,o,a):r(t,o))||a);return 3<l&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(exports,"__esModule",{value:!0}),exports.RolePreloadComponent=void 0;const UE=require("ue"),Log_1=require("../../../../../Core/Common/Log"),Stats_1=require("../../../../../Core/Common/Stats"),MonsterBattleConfById_1=require("../../../../../Core/Define/ConfigQuery/MonsterBattleConfById"),Protocol_1=require("../../../../../Core/Define/Net/Protocol"),EntityComponent_1=require("../../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../../Core/Entity/RegisterComponent"),ResourceSystem_1=require("../../../../../Core/Resource/ResourceSystem"),DataTableUtil_1=require("../../../../../Core/Utils/DataTableUtil"),ConfigManager_1=require("../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../Manager/ModelManager"),PreloadDefine_1=require("../../../../Preload/PreloadDefine"),CombatLog_1=require("../../../../Utils/CombatLog"),PreloadControllerNew_1=require("../../../../World/Controller/PreloadControllerNew"),characterCommonSkillSet=new Set([100005,100006,100007]);let RolePreloadComponent=RolePreloadComponent_1=class RolePreloadComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.u1t=void 0,this.tRr=void 0,this.XJr=void 0,this.$Jr=!1,this.fGn=void 0,this.pGn=0,this.PreloadSkillIds=new Set,this.YJr=(e,t)=>{if(t&&!this.$Jr&&this.tRr){t=this.u1t.GetEntityType();if(t===Protocol_1.Aki.Protocol.kks.Proto_Monster){if(CombatLog_1.CombatLog.Warn("Skill",this.Entity,"开始加载技能和子弹"),this.$Jr=!0,RolePreloadComponent_1.inh.Start(),this.JJr(!0),RolePreloadComponent_1.inh.Stop(),RolePreloadComponent_1.rnh.Start(),this.vGn(),RolePreloadComponent_1.rnh.Stop(),RolePreloadComponent_1.onh.Start(),this.tRr.DtSkillInfo){t=new Array;DataTableUtil_1.DataTableUtil.GetDataTableAllRowNamesFromTable(this.tRr.DtSkillInfo,t);for(const i of t){var o=Number(i);this.tRr.LoadedSkills.has(o)||this.LoadSkillAsync(o)}}RolePreloadComponent_1.onh.Stop(),RolePreloadComponent_1.nnh.Start(),this.MGn(),RolePreloadComponent_1.nnh.Stop()}}}}OnInitData(){return PreloadDefine_1.PreloadSetting.UseNewPreload&&(this.tRr=this.Entity.GetComponent(38),this.u1t=this.Entity.GetComponent(0),this.Entity.GetComponent(200).ListenForTagAddOrRemove(1996802261,this.YJr)),!0}InitPreload(e){this.XJr=e,this.tRr&&(this.SGn(),this.EGn(),this.zJr(),this.ZJr())}SGn(){var e=this.XJr?.BlueprintClassPath;e&&(this.fGn=ConfigManager_1.ConfigManager.WorldConfig.GetCharacterFightInfo(e))}EGn(){if(this.u1t.IsAutoRole())this.pGn=2;else{if(this.u1t.IsMonster()){var e=this.u1t.GetMonsterComponent()?.FightConfigId;if(e){e=MonsterBattleConfById_1.configMonsterBattleConfById.GetConfig(e);if(e&&0<e.RoleMappingId)return void(this.pGn=2)}}ModelManager_1.ModelManager.RoguelikeModel.CheckInRoguelikeOnly()||ModelManager_1.ModelManager.BattleLinkModel.CheckInBattleLink()?this.pGn=1:this.pGn=0}}zJr(){var e,t,o;this.tRr&&(o=this.XJr,(e=this.fGn?.SkillDataTable.ToAssetPathName())?.length&&"None"!==e&&((t=ResourceSystem_1.ResourceSystem.GetLoadedAsset(e,UE.DataTable))?.IsValid()||CombatLog_1.CombatLog.Warn("Skill",this.Entity,"SkillComponent中找不到技能表",["ActorPath",o.BlueprintClassPath],["技能表Path",e]),this.tRr.DtSkillInfo=t),0!==this.pGn&&(e=this.fGn?.SkillDataTableMap.Get(this.pGn)?.ToAssetPathName())&&0<e.length&&"None"!==e&&((t=ResourceSystem_1.ResourceSystem.GetLoadedAsset(e,UE.DataTable))?.IsValid()||CombatLog_1.CombatLog.Warn("Skill",this.Entity,"SkillComponent中找不到玩法额外技能表",["加载类型",this.pGn],["ActorPath",o.BlueprintClassPath],["额外技能表Path",e]),this.tRr.DtSkillInfoExtra=t),(o=this.u1t.GetEntityType())===Protocol_1.Aki.Protocol.kks.Proto_Player?this.tzr():o===Protocol_1.Aki.Protocol.kks.Proto_Vision?this.izr():this.u1t?.SummonType!==Protocol_1.Aki.Protocol.Summon.x3s.Proto_ESummonTypeDefault?this.tzr():o===Protocol_1.Aki.Protocol.kks.Proto_Monster?this.ozr():o===Protocol_1.Aki.Protocol.kks.NI_&&this.qHl())}tzr(){if(this.tRr){var e=new Array;DataTableUtil_1.DataTableUtil.GetDataTableAllRowNamesFromTable(this.tRr.DtSkillInfo,e);for(const o of e)this.xk_(Number(o));this.MGn();for(const i of ConfigManager_1.ConfigManager.WorldConfig.GetRoleCommonSkillRowNames()){var t=Number(i);characterCommonSkillSet.has(t)&&!this.PreloadSkillIds.has(t)&&this.xk_(t)}}}LoadSkillAsync(t){var e;this.XJr.FightAssetManager.SkillAssetManager.GetSkill(t)||(e=this.xk_(t))&&PreloadControllerNew_1.PreloadControllerNew.LoadAssetAsync(e,this.XJr.LoadPriority,!1,void 0,e=>{e?Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Preload",4,"技能加载完毕",["SkillId",t]):Log_1.Log.CheckError()&&Log_1.Log.Error("Preload",4,"技能加载失败",["SkillId",t])})}FlushSkill(e){PreloadControllerNew_1.PreloadControllerNew.FlushSkill(this.XJr,e)}RemoveSkill(e){PreloadControllerNew_1.PreloadControllerNew.RemoveSkill(this.XJr,e)}ozr(){if(this.tRr&&this.tRr.DtSkillInfo){var e=new Array;DataTableUtil_1.DataTableUtil.GetDataTableAllRowWithKeysFromTable(this.tRr.DtSkillInfo,e);for(const i of e)if(void 0!==i[0]&&void 0!==i[1]){var t=Number(i[0]),o=i[1];o&&8===o.SkillGenre&&this.xk_(t);for(let e=0;e<o.SkillTag.Num();e++)2057104696===o.SkillTag.Get(e).TagId&&(this.xk_(t),Log_1.Log.CheckDebug())&&Log_1.Log.Debug("Preload",4,"预加载怪物出场技能",["SkillId",t])}}}qHl(){if(this.tRr){var e=new Array;DataTableUtil_1.DataTableUtil.GetDataTableAllRowNamesFromTable(this.tRr.DtSkillInfo,e);for(const t of e)this.xk_(Number(t));this.MGn()}}izr(){if(this.tRr){var e=new Array;if(this.tRr.DtSkillInfo){DataTableUtil_1.DataTableUtil.GetDataTableAllRowNamesFromTable(this.tRr.DtSkillInfo,e);for(const t of e)this.xk_(Number(t))}for(const o of ConfigManager_1.ConfigManager.WorldConfig.GetVisionCommonSkillRowNames())this.xk_(Number(o));this.MGn()}}MGn(){if(this.tRr&&0!==this.pGn){var e=this.tRr.DtSkillInfoExtra;if(e){var t=new Array;DataTableUtil_1.DataTableUtil.GetDataTableAllRowNamesFromTable(e,t);for(const i of t){var o=Number(i);this.xk_(o)}}}}ZJr(){var e=this.u1t.GetEntityType();e===Protocol_1.Aki.Protocol.kks.Proto_Player||e===Protocol_1.Aki.Protocol.kks.Proto_Vision||e===Protocol_1.Aki.Protocol.kks.NI_?this.JJr(!1,!0):this.JJr(!1,!1),this.vGn()}JJr(e=!1,t=!0){var o;this.tRr&&(o=this.fGn?.BulletDataTable?.ToAssetPathName())?.length&&"None"!==o&&(RolePreloadComponent_1.R6l.Start(),o=ResourceSystem_1.ResourceSystem.GetLoadedAsset(o,UE.DataTable),this.IGn(o,e,t)&&(this.tRr.DtBulletInfo=o),RolePreloadComponent_1.R6l.Stop(),RolePreloadComponent_1.w6l.Start(),0!==this.pGn&&(o=this.fGn?.BulletDataTableMap.Get(this.pGn)?.ToAssetPathName())&&0<o.length&&"None"!==o&&(o=ResourceSystem_1.ResourceSystem.GetLoadedAsset(o,UE.DataTable),this.IGn(o,e,t))&&(this.tRr.DtBulletInfoExtra=o),RolePreloadComponent_1.w6l.Stop())}IGn(e,t=!1,o=!0){var i=this.XJr;if(!e?.IsValid())return Log_1.Log.CheckError()&&Log_1.Log.Error("Character",4,"[预加载] 加载角色子弹表失败。",["Path",i.BlueprintClassPath],["子弹表Path",this.fGn?.BulletDataTable?.ToAssetPathName()]),!1;if(!e)return!1;if(o){RolePreloadComponent_1.P6l.Start();var r=new Array,l=(DataTableUtil_1.DataTableUtil.GetDataTableAllRowWithKeysFromTable(e,r),RolePreloadComponent_1.P6l.Stop(),r.length);for(let e=0;e<l;++e){var a=r[e];if(void 0!==a[0]&&void 0!==a[1]){let e=void 0;try{e=BigInt(a[0])}catch(e){Log_1.Log.CheckError()&&Log_1.Log.Error("Editor",4,"子弹ID不合法",["子弹Id",a[0]]);continue}RolePreloadComponent_1.U6l.Start();a=PreloadControllerNew_1.PreloadControllerNew.CollectAssetByBulletId(i,e);RolePreloadComponent_1.U6l.Stop(),t&&a&&(RolePreloadComponent_1.D6l.Start(),PreloadControllerNew_1.PreloadControllerNew.LoadAssetAsync(a,this.XJr.LoadPriority,!1),RolePreloadComponent_1.D6l.Stop())}}}return!0}vGn(){if(this.tRr){const t=this.fGn?.HitEffectTable.ToAssetPathName();var e;if(t&&0<t.length&&"None"!==t&&(e=ResourceSystem_1.ResourceSystem.GetLoadedAsset(t,UE.DataTable),this.tRr.DtHitEffect=e),0!==this.pGn){const t=this.fGn?.HitEffectTableMap.Get(this.pGn)?.ToAssetPathName();t&&0<t.length&&"None"!==t&&(e=ResourceSystem_1.ResourceSystem.GetLoadedAsset(t,UE.DataTable),this.tRr.DtHitEffectExtra=e)}}}xk_(e){return this.PreloadSkillIds.add(e),PreloadControllerNew_1.PreloadControllerNew.CollectAssetBySkillId(this.XJr,e,!1)}};RolePreloadComponent.inh=Stats_1.Stat.Create("Preload.MonsterBeginFight.InitAllBullet"),RolePreloadComponent.R6l=Stats_1.Stat.Create("Preload.PreloadBullet1"),RolePreloadComponent.w6l=Stats_1.Stat.Create("Preload.PreloadBullet2"),RolePreloadComponent.P6l=Stats_1.Stat.Create("Preload.PreloadBulletGetDataTableAllRow"),RolePreloadComponent.U6l=Stats_1.Stat.Create("Preload.PreloadBulletCollectAssetByBulletId"),RolePreloadComponent.D6l=Stats_1.Stat.Create("Preload.PreloadBulletLoadAssetAsync"),RolePreloadComponent.rnh=Stats_1.Stat.Create("Preload.MonsterBeginFight.InitHitEffect"),RolePreloadComponent.onh=Stats_1.Stat.Create("Preload.MonsterBeginFight.InitAllSkill"),RolePreloadComponent.nnh=Stats_1.Stat.Create("Preload.MonsterBeginFight.InitAllExSkill"),RolePreloadComponent=RolePreloadComponent_1=__decorate([(0,RegisterComponent_1.RegisterComponent)(213)],RolePreloadComponent),exports.RolePreloadComponent=RolePreloadComponent;
//# sourceMappingURL=RolePreloadComponent.js.map