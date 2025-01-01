
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.visionSkill2OnRelease=exports.visionSkill2OnPress=void 0;const Protocol_1=require("../../../../../../../Core/Define/Net/Protocol"),Global_1=require("../../../../../../Global"),PhantomUtil_1=require("../../../../../../Module/Phantom/PhantomUtil"),BlackboardController_1=require("../../../../../../World/Controller/BlackboardController"),CharacterAttributeTypes_1=require("../../Abilities/CharacterAttributeTypes"),CommonDefine_1=require("./CommonDefine"),CommonFunction_1=require("./CommonFunction");function visionSkill2Function(o){var i=Global_1.Global.BaseCharacter;if(i){var e=i.CharacterActorComponent?.Entity;if(e){var r=e.GetComponent(194);if(r&&r.Valid&&(0,CommonFunction_1.canResponseInput)(e))if(r.HasTag(1427742187)){if(!r.HasTag(40422668)){i=e.GetComponent(162);if(i.GetCurrentValue(CharacterAttributeTypes_1.EAttributeId.Proto_SpecialEnergy4)>=i.GetCurrentValue(CharacterAttributeTypes_1.EAttributeId.Proto_SpecialEnergy4Max))return(0,CommonFunction_1.createInputCommand)(e,CommonDefine_1.SKILL_ID_VISION_CONTROL)}}else{i=PhantomUtil_1.PhantomUtil.GetSummonedEntity(e,Protocol_1.Aki.Protocol.Summon.x3s.Proto_ESummonTypeConcomitantVision);if(i?.Valid){i=i.Entity;if(!i.Active){if(r.HasTag(-851544994))return r.HasTag(693080645)?(0,CommonFunction_1.createInputCommand)(e,CommonDefine_1.SKILL_ID_VISION_ROGUE_2):(0,CommonFunction_1.createInputCommand)(e,CommonDefine_1.SKILL_ID_VISION_ROGUE_1);i=e.GetComponent(37);if(i){var n=i.GetVisionIdList(),t=i.GetVisionLevelList();for(let o=0;o<n.Num();o++){var l=n.Get(o),a=PhantomUtil_1.PhantomUtil.GetVisionData(l);if(a&&2!==a.类型){a=a.空中能否释放;if(a||!r.HasTag(40422668)){var u,m=PhantomUtil_1.PhantomUtil.GetEntityVisionSkillId(e.Id,l);if(m)return u=t.Get(o),BlackboardController_1.BlackboardController.SetIntValueByEntity(e.Id,"VisionLevel",u),BlackboardController_1.BlackboardController.SetIntValueByEntity(e.Id,"VisionID",l),BlackboardController_1.BlackboardController.SetIntValueByEntity(e.Id,"VisionAirSkill",Number(a)),BlackboardController_1.BlackboardController.SetIntValueByEntity(e.Id,"VisionLink",Number(r.HasAnyTag([1408042260,64219164,-488074998,41340438]))),(0,CommonFunction_1.createInputCommand)(e,m)}}}}}}}}}}function visionSkill2OnPress(o){return visionSkill2Function(o)}function visionSkill2OnRelease(o){}exports.visionSkill2OnPress=visionSkill2OnPress,exports.visionSkill2OnRelease=visionSkill2OnRelease;
//# sourceMappingURL=CharacterVisionSkill2Function.js.map