
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.visionSkill1OnRelease=exports.visionSkill1OnPress=void 0;const UE=require("ue"),Info_1=require("../../../../../../../Core/Common/Info"),Vector_1=require("../../../../../../../Core/Utils/Math/Vector"),TraceElementCommon_1=require("../../../../../../../Core/Utils/TraceElementCommon"),Global_1=require("../../../../../../Global"),ControllerHolder_1=require("../../../../../../Manager/ControllerHolder"),ModelManager_1=require("../../../../../../Manager/ModelManager"),UiBlueprintFunctionLibrary_1=require("../../../../../../Module/BpBridge/UiBlueprintFunctionLibrary"),PhantomUtil_1=require("../../../../../../Module/Phantom/PhantomUtil"),ScrollingTipsController_1=require("../../../../../../Module/ScrollingTips/ScrollingTipsController"),WorldFunctionLibrary_1=require("../../../../../../World/Bridge/WorldFunctionLibrary"),BlackboardController_1=require("../../../../../../World/Controller/BlackboardController"),CharacterUnifiedStateTypes_1=require("../../Abilities/CharacterUnifiedStateTypes"),CommonDefine_1=require("./CommonDefine"),CommonFunction_1=require("./CommonFunction"),SOAR_HEIGHT_LIMIT=650,soarLandDetectOffset=new UE.VectorDouble(1100,0,-500),PROFILE_KEY="SoarEnterDetect",tmpVector=Vector_1.Vector.Create();function visionSkill1TraceDetectHasGround(e){var o,e=e.GetComponent(3);return!!e&&((o=ModelManager_1.ModelManager.TraceElementModel.GetActorTrace()).WorldContextObject=e.Actor,o.Radius=e.ScaledRadius,TraceElementCommon_1.TraceElementCommon.SetStartLocation(o,e.FloorLocation),tmpVector.FromUeVector(e.ActorTransform.TransformVectorNoScale(soarLandDetectOffset)),tmpVector.AdditionEqual(e.FloorLocation),TraceElementCommon_1.TraceElementCommon.SetEndLocation(o,tmpVector),o.ActorsToIgnore.Empty(),TraceElementCommon_1.TraceElementCommon.ShapeTrace(e.Actor.CapsuleComponent,o,PROFILE_KEY,PROFILE_KEY))}function isFollowerDisable(e){return e.HasAnyTag([1637209445,1769145221,525585922,-307714774,1996624497,-1503953470])}function visionSkill1Function(e){var n=Global_1.Global.BaseCharacter;if(n){var i=n.CharacterActorComponent?.Entity;if(i){var r=i.GetComponent(194);if(r&&r.Valid){if(r.HasTag(-624589333))return(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_MANIPULATE_CANCEL);if(r.HasTag(-376090703)){if(i.GetComponent(167)?.IsOnGroundOrOnWater())return(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_YUANNIAOZE_TORNADO)}else{if(r.HasTag(-1326291748))return(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_RAG_DOLL);if(r.HasTag(-154105489))return(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_RAG_DOLL_QTE);if(r.HasTag(451400799))return(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_MISS_DOLL_TRANSFORM);if(r.HasTag(795459287))return(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_MISS_DOLL_TRANSFORM);if(r.HasTag(561771029))return(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_SUIGUANG_HOOK);if(r.HasTag(-1652473093))return r.HasTag(2081853303)?(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_CHENGXIAOSHAN_TIMEDILATION_STOP):(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_CHENGXIAOSHAN_TIMEDILATION);if(r.HasTag(362533963))return(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_LUOKEKE_QTE_ITEM);if(r.HasTag(-648597304))return isFollowerDisable(r)?void 0:(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_FOLLOWSHOOTER_AIM_START)}if(i.GetComponent(39)?.CanResponseInput()&&!r.HasTag(-2044964178)&&!r.HasTag(-2100129479)){let o=0;var t=i.GetComponent(37)?.GetVisionIdList();if(t)for(let e=0;e<t.Num();e++){var l=PhantomUtil_1.PhantomUtil.GetVisionData(t.Get(e));l&&(2===l.类型?o=l.技能ID:BlackboardController_1.BlackboardController.SetIntValueByEntity(i.Id,"VisionID",l.Id))}if(o===CommonDefine_1.SKILL_ID_HOOK)if(r.HasTag(-1526637662))o=CommonDefine_1.SKILL_ID_XA_KITE;else if(r.HasTag(-1771378495))o=CommonDefine_1.SKILL_ID_XA_MOVABLE;else if(i.GetComponent(91)?.CanActivateFixHook())o=r.HasTag(-1958756056)?CommonDefine_1.SKILL_ID_FIX_HOOK_2:CommonDefine_1.SKILL_ID_FIX_HOOK_1;else{if(r.HasTag(-1009010563))return;if(r.HasTag(-1002623896))return void ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByCode("ExploreToolsDisable011007");if(r.HasTag(-833935142))return}else if(o===CommonDefine_1.SKILL_ID_SHOW_VISION){var m=WorldFunctionLibrary_1.default.GetVisionEntityId(i.Id);if(0===m||WorldFunctionLibrary_1.default.GetEntityEnable(m))return;if(r.HasAnyTag([40422668,855966206,504239013]))return}else if(o===CommonDefine_1.SKILL_ID_MANIPULATE){if(r.HasTag(-611134292))o=CommonDefine_1.SKILL_ID_MANIPULATE_EX;else if(r.HasTag(-2047045017))o=CommonDefine_1.SKILL_ID_STATUE_INTERACT;else if(r.HasTag(504239013)||!r.HasTag(1193763416))return}else if(o===CommonDefine_1.SKILL_ID_FOLLOWSHOOTER_AIM_START){if(!r.HasTag(-405107291)){if(r.HasTag(-1488322179)||r.HasTag(-1036349300))return void ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByCode("ExploreToolsShooterDisable");if(isFollowerDisable(r))return}}else if(o===CommonDefine_1.SKILL_ID_XA){if(r.HasTag(-2027866845))return r.HasTag(-143158229)?void 0:void n.CharacterMovement?.SetMovementMode(3);if(i.GetComponent(93)?.PositionState!==CharacterUnifiedStateTypes_1.ECharPositionState.Air||!r.HasTag(1151923109)||r.HasTag(1226693610))return void ScrollingTipsController_1.ScrollingTipsController.ShowTipsByTextId("Flying_Tip_002");m=i.GetComponent(39)?.GetHeightAboveGround(SOAR_HEIGHT_LIMIT);if((!m||m<SOAR_HEIGHT_LIMIT)&&visionSkill1TraceDetectHasGround(i))return void ScrollingTipsController_1.ScrollingTipsController.ShowTipsByTextId("Flying_Tip");if(r.HasTag(1996802261))return void ScrollingTipsController_1.ScrollingTipsController.ShowTipsByTextId("Flying_Tip_002")}return 0!==o?(0,CommonFunction_1.createInputCommand)(i,o):void 0}}}}}function visionSkill1OnPress(e){if(!Info_1.Info.IsInTouch())return visionSkill1Function(e)}function visionSkill1OnRelease(e){if(Info_1.Info.IsInTouch()&&!UiBlueprintFunctionLibrary_1.default.IsLongPressExploreButton())return visionSkill1Function(e)}exports.visionSkill1OnPress=visionSkill1OnPress,exports.visionSkill1OnRelease=visionSkill1OnRelease;
//# sourceMappingURL=CharacterVisionSkill1Function.js.map