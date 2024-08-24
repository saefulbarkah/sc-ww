
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AiAlertClass=exports.MAX_ALERT=void 0;const Protocol_1=require("../../../Core/Define/Net/Protocol"),EntitySystem_1=require("../../../Core/Entity/EntitySystem"),Vector_1=require("../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../Core/Utils/MathUtils"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),ModelManager_1=require("../../Manager/ModelManager"),CharacterBuffIds_1=require("../../NewWorld/Character/Common/Component/Abilities/CharacterBuffIds"),ALERT_THRESHOLD=(exports.MAX_ALERT=100,1),SHOW_UI_FRAMES=5;class AiAlertClass{constructor(t){this.Bte=t,this.bte=void 0,this.qte=0,this.Gte=-0,this.Nte=-0,this.CallbackEvent=void 0,this.Lz=Vector_1.Vector.Create(),this.Ote=SHOW_UI_FRAMES,this.kte=!1,this.Fte=!1,this.Vte=!1,this.Hte=void 0,this.ExtraModifyAlterValue=t=>{this.qte+=t,this.qte=MathUtils_1.MathUtils.Clamp(this.qte,0,exports.MAX_ALERT),this.jte()}}Init(t){this.Hte=t,EventSystem_1.EventSystem.AddWithTarget(this.Hte.Entity,EventDefine_1.EEventName.SmartObjectAiAlterNotify,this.ExtraModifyAlterValue)}set AiAlertConfig(t){(this.bte=t)&&(180<=t.ForwardAngle?this.Gte=1:this.Gte=Math.cos(t.ForwardAngle*MathUtils_1.MathUtils.DegToRad),0<t.DecreaseByDist?this.Nte=MathUtils_1.MathUtils.Square(t.BaseIncrease/t.DecreaseByDist):(this.Nte=0)<t.MaxDist&&3===t.AlertnessType&&(this.Nte=MathUtils_1.MathUtils.Square(t.MaxDist)),2!==t.AlertnessType&&3!==t.AlertnessType||(ModelManager_1.ModelManager.AlertMarkModel.AlertMarkInit?2===t.AlertnessType?EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.AddStalkAlertMark,this.Hte.Entity?.Id,this.Hte.Owner):3===t.AlertnessType&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.AddEavesdropMark,this.Hte.Entity?.Id,this.Hte.Owner):ModelManager_1.ModelManager.AlertMarkModel?.AddPendingMarkInfo(this.Hte.Entity?.Id,this.Hte.Owner,t.AlertnessType)))}get AiAlertConfig(){return this.bte}get AlertValue(){return this.qte}Clear(){this.qte=0,this.Vte=!1,this.kte=!1,EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.RemoveAlterMark,this.Bte.CharActorComp.Entity.Id);var t=this.Hte.Entity;EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.RemoveStalkAlertMark,t?.Id),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.RemoveEavesdropMark,t?.Id),EventSystem_1.EventSystem.RemoveWithTarget(this.Hte.Entity,EventDefine_1.EEventName.SmartObjectAiAlterNotify,this.ExtraModifyAlterValue)}Tick(t){if(ModelManager_1.ModelManager.GameModeModel?.IsTeleport)this.qte=0,this.Vte=!1,this.kte=!1;else if(this.bte)if(this.qte===exports.MAX_ALERT){if(!this.Bte.AiHateList.GetCurrentTarget()){this.qte=Math.max(0,this.qte-t*this.bte.BaseDecrease*MathUtils_1.MathUtils.MillisecondToSecond);for(const n of this.Bte.AiPerception.Enemies){var e=EntitySystem_1.EntitySystem.GetComponent(n,159);e?.Valid&&e.RemoveBuff(CharacterBuffIds_1.buffId.StealthIgnoreHateBuff,-1,"AiAlterClass MaxValue")}}}else{var s=this.Bte.CharActorComp.ActorLocationProxy,i=this.Bte.CharActorComp.ActorForwardProxy;let e=0;this.Bte.AiPerception.Enemies.size||(this.Vte=!1);for(const _ of this.Bte.AiPerception.Enemies){var h=EntitySystem_1.EntitySystem.Get(_);if(h.GetComponent(0).GetEntityType()!==Protocol_1.Aki.Protocol.wks.Proto_Player)this.Vte=!1;else{h.GetComponent(1).ActorLocationProxy.Subtraction(s,this.Lz);h=this.Lz.SizeSquared();if(0<this.Nte&&h>this.Nte)this.Vte=!1;else{this.Vte=!0;h=Math.sqrt(h);let t=this.bte.BaseIncrease-this.bte.DecreaseByDist*h;t<e||(this.Lz.DotProduct(i)<this.Gte*h&&(t*=this.bte.BackwardRate),t<e)||(e=t)}}}if(e){if(this.qte+=t*e*MathUtils_1.MathUtils.MillisecondToSecond,this.qte>=exports.MAX_ALERT){this.qte=exports.MAX_ALERT;for(const a of this.Bte.AiPerception.Enemies){var r=EntitySystem_1.EntitySystem.GetComponent(a,159);r?.Valid&&r.RemoveBuff(CharacterBuffIds_1.buffId.StealthIgnoreHateBuff,-1,"AiAlterClass MaxValue")}this.CallbackEvent&&this.CallbackEvent.Callback.Broadcast(!0)}}else this.qte=Math.max(0,this.qte-t*this.bte.BaseDecrease*MathUtils_1.MathUtils.MillisecondToSecond);this.jte()}else this.Vte=!1}jte(){switch(this.AiAlertConfig.AlertnessType){case 1:this.Wte();break;case 2:this.Kte();break;case 3:this.c2n()}}Wte(){this.qte>ALERT_THRESHOLD&&!this.kte?0<this.Ote--||(this.Ote=SHOW_UI_FRAMES,this.kte=!0,EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.AddAlterMark,this.Bte.CharActorComp.Entity.Id,Vector_1.Vector.Create(),this.Bte.CharActorComp.Owner)):this.qte<ALERT_THRESHOLD&&(this.kte&&(this.kte=!1,EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.RemoveAlterMark,this.Bte.CharActorComp.Entity.Id)),this.Ote=SHOW_UI_FRAMES)}Kte(){var t=this.Hte.Entity;this.kte?this.qte<ALERT_THRESHOLD?(this.kte=!1,this.Fte=!1,EventSystem_1.EventSystem.EmitWithTarget(t,EventDefine_1.EEventName.OnStalkAlertLifted)):this.qte>=exports.MAX_ALERT&&(this.Fte||(EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnStalkFound,t?.Id),this.Fte=!0)):this.qte>ALERT_THRESHOLD&&(this.kte=!0,EventSystem_1.EventSystem.EmitWithTarget(t,EventDefine_1.EEventName.OnStalkAlert))}c2n(){this.qte>=exports.MAX_ALERT&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnEavesdropFound,this.Hte.Entity?.Id)}CheckInAlertRange(){return this.Vte}}exports.AiAlertClass=AiAlertClass;
//# sourceMappingURL=AiAlertClass.js.map