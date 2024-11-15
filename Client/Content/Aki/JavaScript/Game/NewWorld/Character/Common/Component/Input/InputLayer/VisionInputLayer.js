
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VisionInputLayer=void 0;const Protocol_1=require("../../../../../../../Core/Define/Net/Protocol"),GameplayTagUtils_1=require("../../../../../../../Core/Utils/GameplayTagUtils"),InputEnums_1=require("../../../../../../Input/InputEnums"),InputLayer_1=require("../../../../../../Input/InputLayer"),PhantomUtil_1=require("../../../../../../Module/Phantom/PhantomUtil"),BlackboardController_1=require("../../../../../../World/Controller/BlackboardController"),CharacterAttributeTypes_1=require("../../Abilities/CharacterAttributeTypes"),CommonDefine_1=require("../InputLayerFunction/CommonDefine"),CommonFunction_1=require("../InputLayerFunction/CommonFunction");class VisionInputLayer extends InputLayer_1.InputLayer{constructor(){super(...arguments),this.sDe=void 0,this.won=void 0,this.pZo=void 0,this.Lie=void 0}Init(t){this.sDe=t,this.won=t.Entity?.GetComponent(36),this.pZo=t.Entity?.GetComponent(17),this.Lie=t.Entity?.GetComponent(179)}Clear(){this.sDe=void 0,this.won=void 0,this.pZo=void 0,this.Lie=void 0}GetLayerType(){return 2}HandlePress(t,i){switch(t){case InputEnums_1.EInputAction.攻击:if(this.pZo.SendGameplayEventToActor(GameplayTagUtils_1.GameplayTagUtils.GetGameplayTagById(933547498)),this.won.HandlePress(t,i)??!1)return VisionInputLayer.GetSwallowCommand();break;case InputEnums_1.EInputAction.幻象2:return this.pZo.SendGameplayEventToActor(GameplayTagUtils_1.GameplayTagUtils.GetGameplayTagById(945753440)),this.won.HandlePress(t,i)??!1?VisionInputLayer.GetSwallowCommand():this.eCl()}}HandleRelease(t,i){t===InputEnums_1.EInputAction.幻象2&&this.pZo.SendGameplayEventToActor(GameplayTagUtils_1.GameplayTagUtils.GetGameplayTagById(1688962249))}eCl(){var i=this.sDe.Entity;if((0,CommonFunction_1.canResponseInput)(i)){if(this.Lie.HasTag(1427742187)&&!this.Lie.HasTag(40422668)){var t=i.GetComponent(159);if(t.GetCurrentValue(CharacterAttributeTypes_1.EAttributeId.Proto_SpecialEnergy4)>=t.GetCurrentValue(CharacterAttributeTypes_1.EAttributeId.Proto_SpecialEnergy4Max))return(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_VISION_CONTROL)}t=PhantomUtil_1.PhantomUtil.GetSummonedEntity(i,Protocol_1.Aki.Protocol.Summon.x3s.Proto_ESummonTypeConcomitantVision);if(t?.Valid){t=t.Entity;if(!t.Active){if(this.Lie.HasTag(-851544994))return this.Lie.HasTag(693080645)?(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_VISION_ROGUE_2):(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_VISION_ROGUE_1);var e=this.won.GetVisionIdList(),o=this.won.GetVisionLevelList();for(let t=0;t<e.Num();t++){var r=e.Get(t),n=PhantomUtil_1.PhantomUtil.GetVisionData(r);if(n&&2!==n.类型){n=n.空中能否释放;if(n||!this.Lie.HasTag(40422668)){var s,a=PhantomUtil_1.PhantomUtil.GetEntityVisionSkillId(i.Id,r);if(a)return s=o.Get(t),BlackboardController_1.BlackboardController.SetIntValueByEntity(i.Id,"VisionLevel",s),BlackboardController_1.BlackboardController.SetIntValueByEntity(i.Id,"VisionID",r),BlackboardController_1.BlackboardController.SetIntValueByEntity(i.Id,"VisionAirSkill",Number(n)),BlackboardController_1.BlackboardController.SetIntValueByEntity(i.Id,"VisionLink",Number(this.Lie.HasAnyTag([1408042260,64219164,-488074998,41340438]))),(0,CommonFunction_1.createInputCommand)(i,a)}}}}}}}}exports.VisionInputLayer=VisionInputLayer;
//# sourceMappingURL=VisionInputLayer.js.map