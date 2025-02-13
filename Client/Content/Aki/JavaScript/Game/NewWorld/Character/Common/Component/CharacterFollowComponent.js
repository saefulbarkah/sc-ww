
"use strict";var __decorate=this&&this.__decorate||function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var h=t.length-1;0<=h;h--)(i=t[h])&&(s=(n<3?i(s):3<n?i(e,o,s):i(e,o))||s);return 3<n&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(exports,"__esModule",{value:!0}),exports.CharacterFollowComponent=void 0;const UE=require("ue"),Log_1=require("../../../../../Core/Common/Log"),SummonCfgById_1=require("../../../../../Core/Define/ConfigQuery/SummonCfgById"),Protocol_1=require("../../../../../Core/Define/Net/Protocol"),EntityComponent_1=require("../../../../../Core/Entity/EntityComponent"),EntitySystem_1=require("../../../../../Core/Entity/EntitySystem"),RegisterComponent_1=require("../../../../../Core/Entity/RegisterComponent"),ModelManager_1=require("../../../../Manager/ModelManager"),PhantomUtil_1=require("../../../../Module/Phantom/PhantomUtil");var EProtoSummonType=Protocol_1.Aki.Protocol.Summon.x3s;let CharacterFollowComponent=class CharacterFollowComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.u1t=void 0,this.v5r=[],this.IJl=0,this.TJl=!1}get FollowIds(){return this.v5r}OnStart(){return this.u1t=this.Entity.GetComponent(0),!0}OnActivate(){return this.fJs(),!0}OnEnd(){return this.DeleteFollowEntity(),!0}FZl(t){this.IJl=t,0!==this.IJl&&(t=EntitySystem_1.EntitySystem.Get(this.IJl)?.GetComponent(93))&&this.Entity.GetComponent(39)?.ResetRoleGrowComponent(t)}GetRoleActor(){var t=EntitySystem_1.EntitySystem.Get(this.IJl);if(t?.Valid)return t.GetComponent(1).Owner}GetFollowActor(){var t=this.v5r,e=UE.NewArray(UE.Actor);if(t)for(const r of t){var o=EntitySystem_1.EntitySystem.Get(r);o?.Valid&&(o=o.GetComponent(1).Owner)&&e.Add(o)}return e}SetFollowId(t){-1!==this.v5r.indexOf(t)?Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Character",22,"Add the Same Summon Id:",["id",t]):this.v5r.push(t)}DeleteFollowEntity(){var t=ModelManager_1.ModelManager.CreatureModel.GetEntity(this.u1t.GetSummonerId());t?.Valid&&t.Entity.GetComponent(55).pJs(this.Entity.Id)}GetAttributeHolder(){if(0!==this.IJl){var t=EntitySystem_1.EntitySystem.Get(this.IJl);if(t?.Valid)return t;Log_1.Log.CheckError()&&Log_1.Log.Error("Character",20,"FollowComp role is inValid",["Id",this.IJl],["SelfId",this.u1t?.GetCreatureDataId()])}}GetAttributeHolderExceptVisionSummon(){if(!this.TJl)return this.GetAttributeHolder()}Reset(t=0){this.pJs(t),this.IJl=0}GetToRoleDistance(){var t;return this.IJl&&(t=EntitySystem_1.EntitySystem.Get(this.IJl))&&this.Entity&&this.Entity.GetComponent(1)&&t.GetComponent(1)?UE.VectorDouble.Dist(this.Entity.GetComponent(1).ActorLocation,t.GetComponent(1).ActorLocation):-1}fJs(){var t=ModelManager_1.ModelManager.CreatureModel.GetEntity(this.u1t.GetSummonerId());if(t?.Valid){this.u1t.SummonType===EProtoSummonType.Proto_ESummonTypeConcomitantVision?((e=this.u1t.GetVisionComponent())&&(e=PhantomUtil_1.PhantomUtil.GetVisionData(e.VisionId))&&(this.TJl=0===e.类型),this.NZl(t)):this.u1t.SummonType===EProtoSummonType.Proto_ESummonTypeConcomitantCustom&&this.u1t.SummonCfgId&&SummonCfgById_1.configSummonCfgById.GetConfig(this.u1t.SummonCfgId)?.ShareDamage&&this.NZl(t);var e,o=this.Entity.GetComponent(200);if(o)switch(o.RemoveTag(-1615796724),this.u1t?.SummonType){case EProtoSummonType.Proto_ESummonTypeConcomitantVision:o.AddTag(-1885259054);break;case EProtoSummonType.Proto_ESummonTypeConcomitantCustom:o.AddTag(231190961);break;case EProtoSummonType.Proto_ESummonTypeConcomitantPhantomRole:o.AddTag(-260700306);break;default:EProtoSummonType.Proto_ESummonTypeDefault;o.AddTag(1450201850)}}}pJs(t){0!==t?-1!==(t=this.v5r.indexOf(t))&&this.v5r.splice(t,1):this.v5r=[]}NZl(t){this.FZl(t.Id),t.Entity.GetComponent(55).SetFollowId(this.Entity.Id)}};CharacterFollowComponent=__decorate([(0,RegisterComponent_1.RegisterComponent)(55)],CharacterFollowComponent),exports.CharacterFollowComponent=CharacterFollowComponent;
//# sourceMappingURL=CharacterFollowComponent.js.map