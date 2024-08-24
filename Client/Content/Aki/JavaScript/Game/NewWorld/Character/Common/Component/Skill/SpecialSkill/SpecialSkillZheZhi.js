
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SpecialSkillZheZhi=void 0;const puerts_1=require("puerts"),UE=require("ue"),Log_1=require("../../../../../../../Core/Common/Log"),GameplayCueById_1=require("../../../../../../../Core/Define/ConfigQuery/GameplayCueById"),Protocol_1=require("../../../../../../../Core/Define/Net/Protocol"),Vector_1=require("../../../../../../../Core/Utils/Math/Vector"),Vector2D_1=require("../../../../../../../Core/Utils/Math/Vector2D"),EffectSystem_1=require("../../../../../../Effect/EffectSystem"),Global_1=require("../../../../../../Global"),ModelManager_1=require("../../../../../../Manager/ModelManager"),PhantomUtil_1=require("../../../../../../Module/Phantom/PhantomUtil"),BlackboardController_1=require("../../../../../../World/Controller/BlackboardController"),SpecialSkillBase_1=require("./SpecialSkillBase"),HE_MAX_COUNT=3,HE_ACTIVE_DIS=3e3,BLACKBOARD_KEY="FlyTargetHe",activeTag=-1285044114,markCueId=1105001040n,lineCueId=1105001041n;class SpecialSkillZheZhi extends SpecialSkillBase_1.SpecialSkillBase{constructor(){super(...arguments),this.xLa=void 0,this.n$t=void 0,this.wLa=new Map,this.BLa=new Set,this.Xte=void 0,this.bLa=void 0,this.qLa=!1,this.GLa=void 0,this.OLa=0,this.gU=!1,this.fii=(0,puerts_1.$ref)(void 0),this.kLa=Vector2D_1.Vector2D.Create(),this.zLa=(0,puerts_1.$ref)(0),this.ZLa=(0,puerts_1.$ref)(0),this.NLa=0,this.FLa=0}OnStart(){this.xLa=this.SpecialSkillComponent.Entity,this.n$t=this.xLa.GetComponent(3);var t=this.xLa.GetComponent(0);if(t.GetPlayerId()===ModelManager_1.ModelManager.CreatureModel.GetPlayerId()){this.Xte=this.xLa?.GetComponent(188);for(let t=1;t<HE_MAX_COUNT+1;t++){const i=PhantomUtil_1.PhantomUtil.GetSummonedEntity(this.xLa,Protocol_1.Aki.Protocol.Summon.L3s.Proto_ESummonTypeConcomitantCustom,t-1);if(!i)return void(Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",4,"折枝伴生物初始化失败"));this.wLa.set(t,i);var e=i.Entity.GetComponent(108);e.SetLogicRange(HE_ACTIVE_DIS),e.CreatePerceptionEvent().Init(HE_ACTIVE_DIS,i.Entity?.GameBudgetManagedToken,()=>{this.BLa.add(i)},()=>{this.BLa.has(i)&&this.BLa.delete(i)})}this.gU=!0}}OnDisable(){this.VLa()}OnTick(t){this.gU&&this.HLa()}HLa(){if(this.wLa){let r=Number.MAX_VALUE,a=0,h=Number.MAX_VALUE,o=0;this.eDa(),this.wLa.forEach((t,e)=>{var i=t.Entity,s=i?.GetComponent(188);i&&i.Active&&this.BLa.has(t)&&s?.HasTag(activeTag)&&(t=i.GetComponent(3),s=UE.GameplayStatics.ProjectWorldToScreen(Global_1.Global.CharacterController,t.ActorLocationProxy.ToUeVector(),this.fii,!0),i=(0,puerts_1.$unref)(this.fii),s&&0<i.X&&i.X<this.NLa&&0<i.Y&&i.Y<this.FLa?(this.kLa.Set(i.X-this.NLa/2,(i.Y-this.FLa/2)/10),(s=this.kLa.SizeSquared())<r&&(a=e,r=s)):(i=Vector_1.Vector.DistSquared(t.ActorLocationProxy,this.n$t.ActorLocationProxy))<h&&(o=e,h=i))});var t=0<a?a:o;0===t&&0!==this.OLa&&this.VLa(),0!==t&&(this.OLa===t?this.jLa():this.WLa(t))}}eDa(){Global_1.Global.CharacterController?.GetViewportSize(this.zLa,this.ZLa),this.NLa=(0,puerts_1.$unref)(this.zLa),this.FLa=(0,puerts_1.$unref)(this.ZLa)}WLa(t){var e=this.wLa.get(t),e=(e&&(this.QLa(e),this.tDa(e),BlackboardController_1.BlackboardController.SetIntValueByEntity(this.xLa.Id,BLACKBOARD_KEY,e.Entity.Id)),this.Xte?.HasTag(activeTag)||this.Xte?.AddTag(activeTag),this.xLa.GetComponent(33));e?.Valid&&e.CallAnimBreakPoint(),this.OLa=t}VLa(){0!==this.OLa&&(BlackboardController_1.BlackboardController.SetIntValueByEntity(this.xLa.Id,BLACKBOARD_KEY,0),this.Xte?.HasTag(activeTag)&&this.Xte?.RemoveTag(activeTag),this.bLa?.Destroy(),this.GLa?.Destroy(),this.OLa=0)}QLa(t){this.bLa?.Destroy();var e=GameplayCueById_1.configGameplayCueById.GetConfig(markCueId);e?(t=t.Entity.GetComponent(19),this.bLa=t?.CreateGameplayCue(e)):Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",4,"无法找到鹤的MarkCue配置！",["cueConfigId",markCueId])}tDa(t){this.GLa?.Destroy();var e,i=GameplayCueById_1.configGameplayCueById.GetConfig(lineCueId);i?(e=this.xLa.GetComponent(19),this.GLa=e?.CreateGameplayCue(i,{Instigator:t})):Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",29,"无法找到鹤的LineCue配置！",["cueConfigId",lineCueId])}jLa(){var t;this.bLa&&EffectSystem_1.EffectSystem.IsValid(this.bLa.EffectViewHandle)&&(t=EffectSystem_1.EffectSystem.GetEffectActor(this.bLa.EffectViewHandle))?.IsValid()&&t instanceof UE.Actor&&(t=t.WasRecentlyRenderedOnScreen(),!this.qLa&&t&&EffectSystem_1.EffectSystem.ReplayEffect(this.bLa.EffectViewHandle,"UpdateHeSelectMark"),this.qLa=t)}}exports.SpecialSkillZheZhi=SpecialSkillZheZhi;
//# sourceMappingURL=SpecialSkillZheZhi.js.map