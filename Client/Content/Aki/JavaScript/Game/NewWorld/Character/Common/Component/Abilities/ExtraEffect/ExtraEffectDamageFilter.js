
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DamageFilter=void 0;const ModelManager_1=require("../../../../../../Manager/ModelManager"),ExtraEffectBase_1=require("./ExtraEffectBase"),ExtraEffectBaseTypes_1=require("./ExtraEffectBaseTypes");class DamageFilter extends ExtraEffectBase_1.BuffEffect{constructor(){super(...arguments),this.lNe=!1}InitParameters(e){e=e.ExtraEffectParameters;this.lNe=Boolean(Number(e[0]))}OnExecute(){return!this.lNe}static ApplyEffects(e,t,r,a,s,f){var c=e.GetComponent(163),t=t.GetComponent(163);if(c&&t){var o=e.GetComponent(35),i=new ExtraEffectBaseTypes_1.RequirementPayload,s=(s&&(i.SkillId=s,o=o.GetSkillInfo(s),i.SkillGenre=o?.SkillGenre??-1),f?ModelManager_1.ModelManager.DamageModel?.GetDamageConfigById(f):void 0);s&&(i.DamageType=s.Type,i.DamageSubTypes=s.SubType,i.CalculateType=s.CalculateType,i.SmashType=s.SmashType,i.ElementType=s.Element),i.BulletId=BigInt(r),i.BulletTags=a??[],i.WeaponType=e.GetComponent(87)?.GetWeaponType()??ExtraEffectBaseTypes_1.DEFAULT_WEAPON_TYPE_NOT_PASS;for(const n of t.BuffEffectManager.FilterById(22))if(n.Check(i,c)===n.Execute())return!0}return!1}}exports.DamageFilter=DamageFilter;
//# sourceMappingURL=ExtraEffectDamageFilter.js.map