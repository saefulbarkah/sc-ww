
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.visionSkill2OnRelease=exports.visionSkill2OnPress=void 0;const Protocol_1=require("../../../../../../../Core/Define/Net/Protocol"),Global_1=require("../../../../../../Global"),PhantomUtil_1=require("../../../../../../Module/Phantom/PhantomUtil"),BlackboardController_1=require("../../../../../../World/Controller/BlackboardController"),CharacterAttributeTypes_1=require("../../Abilities/CharacterAttributeTypes"),InputDefine_1=require("./InputDefine"),InputFunctionCommon_1=require("./InputFunctionCommon");function visionSkill2Function(o){var n=Global_1.Global.BaseCharacter;if(n){var i=n.CharacterActorComponent?.Entity;if(i){var t=i.GetComponent(200);if(t&&t.Valid&&(0,InputFunctionCommon_1.canResponseInput)(i)){n=(0,InputFunctionCommon_1.createInputCommandFromDataTable)(i.Id,9,1);if(n)return n;if(t.HasTag(1427742187)){if(!t.HasTag(40422668)){n=i.GetComponent(168);if(n.GetCurrentValue(CharacterAttributeTypes_1.EAttributeId.Proto_SpecialEnergy4)>=n.GetCurrentValue(CharacterAttributeTypes_1.EAttributeId.Proto_SpecialEnergy4Max))return(0,InputFunctionCommon_1.createSkillCommand)(i,InputDefine_1.SKILL_ID_VISION_CONTROL)}}else{n=PhantomUtil_1.PhantomUtil.GetSummonedEntity(i,Protocol_1.Aki.Protocol.Summon.x3s.Proto_ESummonTypeConcomitantVision);if(n?.Valid){n=n.Entity;if(!n.Active){if(t.HasTag(-851544994))return t.HasTag(693080645)?(0,InputFunctionCommon_1.createSkillCommand)(i,InputDefine_1.SKILL_ID_VISION_ROGUE_2):(0,InputFunctionCommon_1.createSkillCommand)(i,InputDefine_1.SKILL_ID_VISION_ROGUE_1);n=i.GetComponent(42);if(n){var e=n.GetVisionIdList(),r=n.GetVisionLevelList();for(let o=0;o<e.Num();o++){var l=e.Get(o),u=PhantomUtil_1.PhantomUtil.GetVisionData(l);if(u&&2!==u.类型){u=u.空中能否释放;if(u||!t.HasTag(40422668)){var a,s=PhantomUtil_1.PhantomUtil.GetEntityVisionSkillId(i.Id,l);if(s)return a=r.Get(o),BlackboardController_1.BlackboardController.SetIntValueByEntity(i.Id,"VisionLevel",a),BlackboardController_1.BlackboardController.SetIntValueByEntity(i.Id,"VisionID",l),BlackboardController_1.BlackboardController.SetIntValueByEntity(i.Id,"VisionAirSkill",Number(u)),BlackboardController_1.BlackboardController.SetIntValueByEntity(i.Id,"VisionLink",Number(t.HasAnyTag([1408042260,64219164,-488074998,41340438]))),(0,InputFunctionCommon_1.createSkillCommand)(i,s)}}}}}}}}}}}function visionSkill2OnPress(o){return visionSkill2Function(o)}function visionSkill2OnRelease(o){}exports.visionSkill2OnPress=visionSkill2OnPress,exports.visionSkill2OnRelease=visionSkill2OnRelease;
//# sourceMappingURL=InputFunctionVisionSkill2.js.map