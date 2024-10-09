
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PanelQteResultHandler=void 0;const Log_1=require("../../../Core/Common/Log"),Global_1=require("../../Global"),ModelManager_1=require("../../Manager/ModelManager"),SceneTeamController_1=require("../SceneTeam/SceneTeamController");class PanelQteResultHandler{Handle(a){Log_1.Log.CheckDebug()&&Log_1.Log.Debug("PanelQte",18,"通用界面QTE结算",["qteId",a.QteId],["success",a.Success]);var r=a.Success?a.Config.SuccessActions:a.Config.FailActions,t=r.Num();for(let e=0;e<t;e++){var o=r.Get(e);this.kUe(o,a)}}kUe(e,t){let o=void 0;if(o=0===e.Target?t.GetSourceEntity():this.TOi()){let a=void 0,r=void 0;var l=e.AddTags,n=l.Num();for(let e=0;e<n;e++){var s=l.Get(e);(a=a??o.GetComponent(190)).AddTag(s.TagId)}var i=e.RemoveTags,v=i.Num();for(let e=0;e<v;e++){var d=i.Get(e);(a=a??o.GetComponent(190)).RemoveTag(d.TagId)}var c=e.AddBuffs,_=c.Num();if(0<_){var u=t.GetSourceEntity()?.GetComponent(0).GetCreatureDataId(),f=t.PreMessageId;if(u)if(0<=t.BuffIndex){var g=c.Get(t.BuffIndex);(r=r??o.GetComponent(160)).AddBuff(g,{InstigatorId:u,Reason:"界面QTE结算时添加",PreMessageId:f})}else for(let e=0;e<_;e++){var M=c.Get(e);(r=r??o.GetComponent(160)).AddBuff(M,{InstigatorId:u,Reason:"界面QTE结算时添加",PreMessageId:f})}}var C=e.CustomActions,h=C.Num();for(let e=0;e<h;e++){var H=C.Get(e);this.LOi(H,t,o)}}}LOi(e,a,r){switch(e){case 0:var t=r.GetComponent(160);t&&t.RemoveBuffByEffectType(36,"界面QTE解除冰冻buff");break;case 1:this.DOi();break;case 2:this.TOi()?.GetComponent(34)?.BeginSkill(100001,{Context:"PanelQteResultHandler.HandleCustomAction.Rush"});break;case 3:this.TOi()?.GetComponent(34)?.BeginSkill(100020,{Context:"PanelQteResultHandler.HandleCustomAction.Hook"});break;case 4:this.TOi()?.GetComponent(164)?.TryJumpInFreeRunning()}}DOi(){var e=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentTeamItem;if(0===e?.CanGoDown(!0)){var r=ModelManager_1.ModelManager.SceneTeamModel.GetTeamItems(),t=r.length,o=r.indexOf(e);for(let a=1;a<t;a++){let e=o+a;e>=t&&(e-=t);var l=r[e];if(0===l?.CanGoBattle())return void SceneTeamController_1.SceneTeamController.TryChangeRoleOrQte(l.GetCreatureDataId())}}}TOi(){var e=Global_1.Global.BaseCharacter;if(e?.IsValid())return e.CharacterActorComponent?.Entity}}exports.PanelQteResultHandler=PanelQteResultHandler;
//# sourceMappingURL=PanelQteResultHandler.js.map