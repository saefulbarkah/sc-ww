
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExtraEffectDestroyBullet=void 0;const Log_1=require("../../../../../../../Core/Common/Log"),StringUtils_1=require("../../../../../../../Core/Utils/StringUtils"),ModelManager_1=require("../../../../../../Manager/ModelManager"),ExtraEffectBase_1=require("./ExtraEffectBase");class ExtraEffectDestroyBullet extends ExtraEffectBase_1.BuffEffect{constructor(){super(...arguments),this.V0l=void 0,this.H0l=0,this.j0l=!1}CheckExecutable(){return this.OwnerBuffComponent?.HasBuffAuthority()??!1}InitParameters(t){var e;void 0===t.ExtraEffectParameters?Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",20,"销毁子弹额外效果参数为空",["Buff",this.BuffId]):!(e=Number(t.ExtraEffectParameters[0]))||isNaN(e)?Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",20,"第一个参数错误",["Buff",this.BuffId],["Param",e]):StringUtils_1.StringUtils.IsEmpty(t.ExtraEffectParameters[1])?Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",20,"第二个参数为空",["Buff",this.BuffId]):(this.H0l=Number(t.ExtraEffectParameters[0]),this.V0l=t.ExtraEffectParameters[1].split("#"),StringUtils_1.StringUtils.IsEmpty(t.ExtraEffectParameters[2])||(this.j0l=1===Number(t.ExtraEffectParameters[2])))}OnExecute(){}OnRemoved(){if(0!==this.H0l&&this.V0l){var t=(1===this.H0l?this.InstigatorEntity:this.OwnerEntity)?.Id;if(t){var e=ModelManager_1.ModelManager.BulletModel,t=e.GetBulletSetByAttacker(t);if(t)for(const s of t)s?.Valid&&this.V0l.includes(s.GetBulletInfo().BulletRowName)&&e.DestroyBullet(s.Id,this.j0l,4);else Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Battle",20,"无法获取子弹集合",["Buff",this.BuffId])}else Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",20,"无法获取子弹拥有者",["Buff",this.BuffId])}}}exports.ExtraEffectDestroyBullet=ExtraEffectDestroyBullet;
//# sourceMappingURL=ExtraEffectDestroyBullet.js.map