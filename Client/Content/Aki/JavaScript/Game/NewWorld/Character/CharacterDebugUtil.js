
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CharacterDebugUtil=void 0;const UE=require("ue"),Log_1=require("../../../Core/Common/Log"),ResourceSystem_1=require("../../../Core/Resource/ResourceSystem"),DataTableUtil_1=require("../../../Core/Utils/DataTableUtil"),ConfigManager_1=require("../../Manager/ConfigManager"),ModelManager_1=require("../../Manager/ModelManager"),PreloadControllerNew_1=require("../../World/Controller/PreloadControllerNew"),GameModePromise_1=require("../../World/Define/GameModePromise");class CharacterDebugUtil{static LoadFightDtDebug(e=0){e=ModelManager_1.ModelManager.CharacterModel?.GetHandle(e);let r=[];for(const o of r=e?[e]:ModelManager_1.ModelManager.CreatureModel.GetAllEntities())o.IsInit&&this.LoadCharacterFightDtNewPreload(o.Entity).then(()=>{Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",17,"测试加载战斗DT完成",["entityId",o.Entity.Id])},e=>{})}static async LoadCharacterFightDtNewPreload(e){var r=e.GetComponent(0),o=e.GetComponent(39),a=e.GetComponent(1),t=e.GetComponent(203),l=ModelManager_1.ModelManager.PreloadModelNew.GetEntityAssetElement(r.GetCreatureDataId());if(l){var e=UE.KismetSystemLibrary.Conv_ClassToSoftClassReference(a.Actor.GetClass()),r=UE.KismetSystemLibrary.Conv_SoftClassReferenceToString(e),i=ConfigManager_1.ConfigManager.WorldConfig.GetCharacterFightInfo(r);if(i){o.DtSkillInfoMapForDebug.set(0,o.DtSkillInfo);for(let e=0;e<i.SkillDataTableMap.Num();++e){var n=i.SkillDataTableMap.GetKey(e),s=i.SkillDataTableMap.Get(n)?.ToAssetPathName(),s=(s&&0<s.length&&"None"!==s&&(s=ResourceSystem_1.ResourceSystem.Load(s,UE.DataTable),o.DtSkillInfoExtra=s,o.DtSkillInfoMapForDebug.set(n,s)),i?.BulletDataTableMap.Get(n)?.ToAssetPathName());if(s&&0<s.length&&"None"!==s&&(s=ResourceSystem_1.ResourceSystem.Load(s,UE.DataTable),o.DtBulletInfoExtra=s),o.DtBulletInfoExtra){s=new Array;DataTableUtil_1.DataTableUtil.GetDataTableAllRowNamesFromTable(o.DtBulletInfoExtra,s);for(const d of s){var g=BigInt(d);PreloadControllerNew_1.PreloadControllerNew.CollectAssetByBulletId(l,g)}}s=i?.HitEffectTableMap.Get(n)?.ToAssetPathName(),s=(s&&0<s.length&&"None"!==s&&(n=ResourceSystem_1.ResourceSystem.Load(s,UE.DataTable),o.DtHitEffectExtra=n),new GameModePromise_1.GameModePromise);PreloadControllerNew_1.PreloadControllerNew.LoadAssetAsync(l.MainAsset,l.LoadPriority,!1,s),await s.Promise;for(const u of o.GetAllSkillData(4)){var _=o.GetSkillInfo(u);_&&(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",17,"【debug】加载额外技能",["skillId",u]),o.GiveSkillDebug(u),t.AddSkillTriggerDebug(u,_))}}}else Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Character",17,"找不到当前角色的FightInfo配置",["actorPath",r])}}}exports.CharacterDebugUtil=CharacterDebugUtil;
//# sourceMappingURL=CharacterDebugUtil.js.map