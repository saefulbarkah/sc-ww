
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CharacterDebugUtil=void 0;const UE=require("ue"),Log_1=require("../../../Core/Common/Log"),ResourceSystem_1=require("../../../Core/Resource/ResourceSystem"),DataTableUtil_1=require("../../../Core/Utils/DataTableUtil"),ConfigManager_1=require("../../Manager/ConfigManager"),ModelManager_1=require("../../Manager/ModelManager"),PreloadDefine_1=require("../../Preload/PreloadDefine"),PreloadController_1=require("../../World/Controller/PreloadController"),PreloadControllerNew_1=require("../../World/Controller/PreloadControllerNew"),GameModePromise_1=require("../../World/Define/GameModePromise");class CharacterDebugUtil{static LoadFightDtDebug(e=0){e=ModelManager_1.ModelManager.CharacterModel?.GetHandle(e);let r=[];for(const o of r=e?[e]:ModelManager_1.ModelManager.CreatureModel.GetAllEntities())o.IsInit&&(PreloadDefine_1.PreloadSetting.UseNewPreload?this.LoadCharacterFightDtNewPreload(o.Entity).then(()=>{Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",17,"测试加载战斗DT完成",["entityId",o.Entity.Id])},e=>{}):this.LoadCharacterFightDtOldPreload(o.Entity).then(()=>{Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",17,"测试加载战斗DT完成",["entityId",o.Entity.Id])},e=>{}))}static async LoadCharacterFightDtOldPreload(r){var e=r.GetComponent(0),o=r.GetComponent(35),a=r.GetComponent(1),t=ModelManager_1.ModelManager.PreloadModel.AllEntityAssetMap.get(e.GetCreatureDataId());if(t){var e=UE.KismetSystemLibrary.Conv_ClassToSoftClassReference(a.Actor.GetClass()),a=UE.KismetSystemLibrary.Conv_SoftClassReferenceToString(e),l=ConfigManager_1.ConfigManager.WorldConfig.GetCharacterFightInfo(a);if(l){o.DtSkillInfoMapForDebug.set(0,o.DtSkillInfo);for(let e=0;e<l.SkillDataTableMap.Num();++e){var i=l.SkillDataTableMap.GetKey(e),n=l.SkillDataTableMap.Get(i)?.ToAssetPathName(),n=(n&&0<n.length&&"None"!==n&&(n=ResourceSystem_1.ResourceSystem.Load(n,UE.DataTable),o.DtSkillInfoExtra=n,o.DtSkillInfoMapForDebug.set(i,n)),l?.BulletDataTableMap.Get(i)?.ToAssetPathName()),n=(n&&0<n.length&&"None"!==n&&(n=ResourceSystem_1.ResourceSystem.Load(n,UE.DataTable),o.DtBulletInfoExtra=n),l?.HitEffectTableMap.Get(i)?.ToAssetPathName()),n=(n&&0<n.length&&"None"!==n&&(i=ResourceSystem_1.ResourceSystem.Load(n,UE.DataTable),o.DtHitEffectExtra=i),new Array);if(o.DtSkillInfoExtra){DataTableUtil_1.DataTableUtil.GetDataTableAllRowNamesFromTable(o.DtSkillInfoExtra,n);var s=new Array;for(const m of n){var _=DataTableUtil_1.DataTableUtil.GetDataTableRow(o.DtSkillInfoExtra,m);if(_){PreloadController_1.PreloadController.CollectEntityAbility(t,_),PreloadController_1.PreloadController.CollectEntitySkillMontage(t,m,_);var d=_.SkillStartBuff;if(d?.Num())for(let e=0;e<d.Num();++e){var g=d.Get(e);g&&s.push(g)}var f=_.SkillEndBuff;if(f?.Num())for(let e=0;e<f.Num();++e){var c=f.Get(e);c&&s.push(c)}}}PreloadController_1.PreloadController.CollectAssetByBuffIdList(t,s)}o.DtBulletInfoExtra&&PreloadController_1.PreloadController.CollectAssetByBulletDt(o.DtBulletInfoExtra,t);const P=new GameModePromise_1.GameModePromise;PreloadController_1.PreloadController.CheckPreloadByAssetElement(t,void 0,e=>{P.SetResult(e)}),await P.Promise;var u=r.GetComponent(197);for(const U of n){var C=Number(U),M=o.GetSkillInfo(C);M&&(o.GiveSkillDebug(C,M),u.AddSkillTriggerDebug(C,M))}}}else Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Character",17,"找不到当前角色的FightInfo配置",["actorPath",a])}}static async LoadCharacterFightDtNewPreload(e){var r=e.GetComponent(0),o=e.GetComponent(35),a=e.GetComponent(1),t=e.GetComponent(197),l=ModelManager_1.ModelManager.PreloadModelNew.GetEntityAssetElement(r.GetCreatureDataId());if(l){var e=UE.KismetSystemLibrary.Conv_ClassToSoftClassReference(a.Actor.GetClass()),r=UE.KismetSystemLibrary.Conv_SoftClassReferenceToString(e),i=ConfigManager_1.ConfigManager.WorldConfig.GetCharacterFightInfo(r);if(i){o.DtSkillInfoMapForDebug.set(0,o.DtSkillInfo);for(let e=0;e<i.SkillDataTableMap.Num();++e){var n=i.SkillDataTableMap.GetKey(e),s=i.SkillDataTableMap.Get(n)?.ToAssetPathName(),s=(s&&0<s.length&&"None"!==s&&(s=ResourceSystem_1.ResourceSystem.Load(s,UE.DataTable),o.DtSkillInfoExtra=s,o.DtSkillInfoMapForDebug.set(n,s)),i?.BulletDataTableMap.Get(n)?.ToAssetPathName());if(s&&0<s.length&&"None"!==s&&(s=ResourceSystem_1.ResourceSystem.Load(s,UE.DataTable),o.DtBulletInfoExtra=s),o.DtBulletInfoExtra){s=new Array;DataTableUtil_1.DataTableUtil.GetDataTableAllRowNamesFromTable(o.DtBulletInfoExtra,s);for(const f of s){var _=BigInt(f);PreloadControllerNew_1.PreloadControllerNew.CollectAssetByBulletId(l,_)}}s=i?.HitEffectTableMap.Get(n)?.ToAssetPathName(),s=(s&&0<s.length&&"None"!==s&&(n=ResourceSystem_1.ResourceSystem.Load(s,UE.DataTable),o.DtHitEffectExtra=n),new GameModePromise_1.GameModePromise);if(PreloadControllerNew_1.PreloadControllerNew.LoadAssetAsync(l.MainAsset,l.LoadPriority,!1,s),await s.Promise,o.DtSkillInfoExtra){n=new Array;DataTableUtil_1.DataTableUtil.GetDataTableAllRowNamesFromTable(o.DtSkillInfoExtra,n);for(const c of n){var d=Number(c),g=o.GetSkillInfo(d);g&&(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Battle",17,"【debug】加载额外技能",["skillId",d]),o.GiveSkillDebug(d,g),t.AddSkillTriggerDebug(d,g))}}}}else Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Character",17,"找不到当前角色的FightInfo配置",["actorPath",r])}}}exports.CharacterDebugUtil=CharacterDebugUtil;
//# sourceMappingURL=CharacterDebugUtil.js.map