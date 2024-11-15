
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExploreInputLayer=void 0;const Info_1=require("../../../../../../../Core/Common/Info"),InputEnums_1=require("../../../../../../Input/InputEnums"),InputLayer_1=require("../../../../../../Input/InputLayer"),ControllerHolder_1=require("../../../../../../Manager/ControllerHolder"),UiBlueprintFunctionLibrary_1=require("../../../../../../Module/BpBridge/UiBlueprintFunctionLibrary"),PhantomUtil_1=require("../../../../../../Module/Phantom/PhantomUtil"),WorldFunctionLibrary_1=require("../../../../../../World/Bridge/WorldFunctionLibrary"),BlackboardController_1=require("../../../../../../World/Controller/BlackboardController"),CommonDefine_1=require("../InputLayerFunction/CommonDefine"),CommonFunction_1=require("../InputLayerFunction/CommonFunction");class ExploreInputLayer extends InputLayer_1.InputLayer{constructor(){super(...arguments),this.sDe=void 0,this.Hte=void 0,this.Lie=void 0}Init(n){this.sDe=n,this.Hte=n.Entity.GetComponent(3),this.Lie=n.Entity.GetComponent(179)}GetLayerType(){return 4}HandlePress(n,e){if(this.sDe?.Valid)if(n===InputEnums_1.EInputAction.幻象1){if(!Info_1.Info.IsInTouch())return this.zdl()}else if(n===InputEnums_1.EInputAction.攻击&&this.Lie.HasTag(1753576100))return(0,CommonFunction_1.createInputCommand)(this.sDe.Entity,CommonDefine_1.SKILL_ID_BULLET_RUN)}HandleRelease(n,e){return!this.sDe?.Valid||n!==InputEnums_1.EInputAction.幻象1||!Info_1.Info.IsInTouch()||UiBlueprintFunctionLibrary_1.default.IsLongPressExploreButton()?void 0:this.zdl()}zdl(){var i=this.sDe.Entity,n=this.Hte.Actor;if(this.Lie.HasTag(-624589333))return(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_MANIPULATE_CANCEL);if(this.Lie.HasTag(-376090703)){if(i.GetComponent(164)?.IsOnGroundOrOnWater())return(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_YUANNIAOZE_TORNADO)}else{if(this.Lie.HasTag(561771029))return(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_SUIGUANG_HOOK);if(this.Lie.HasTag(-1652473093))return this.Lie.HasTag(2081853303)?(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_CHENGXIAOSHAN_TIMEDILATION_STOP):(0,CommonFunction_1.createInputCommand)(i,CommonDefine_1.SKILL_ID_CHENGXIAOSHAN_TIMEDILATION)}if(i.GetComponent(38)?.CanResponseInput()&&!this.Lie.HasTag(-2044964178)&&!this.Lie.HasTag(-2100129479)){let e=0;var o=i.GetComponent(36)?.GetVisionIdList();if(o)for(let n=0;n<o.Num();n++){var r=PhantomUtil_1.PhantomUtil.GetVisionData(o.Get(n));r&&(2===r.类型?e=r.技能ID:BlackboardController_1.BlackboardController.SetIntValueByEntity(i.Id,"VisionID",r.Id))}if(e===CommonDefine_1.SKILL_ID_HOOK)if(i.GetComponent(90)?.CanActivateFixHook())e=this.Lie.HasTag(-1958756056)?CommonDefine_1.SKILL_ID_FIX_HOOK_2:CommonDefine_1.SKILL_ID_FIX_HOOK_1;else{if(this.Lie.HasTag(-1009010563))return;if(this.Lie.HasTag(-1002623896))return void ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByCode("ExploreToolsDisable011007");if(this.Lie.HasTag(-833935142))return}else if(e===CommonDefine_1.SKILL_ID_SHOW_VISION){var t=WorldFunctionLibrary_1.default.GetVisionEntityId(i.Id);if(0===t||WorldFunctionLibrary_1.default.GetEntityEnable(t))return;if(this.Lie.HasAnyTag([40422668,855966206,504239013]))return}else if(e===CommonDefine_1.SKILL_ID_MANIPULATE){if(this.Lie.HasTag(-611134292))e=CommonDefine_1.SKILL_ID_MANIPULATE_EX;else if(this.Lie.HasTag(504239013)||!this.Lie.HasTag(1193763416))return}else if(e===CommonDefine_1.SKILL_ID_FOLLOWSHOOTER_AIM_START){if(!this.Lie.HasTag(-405107291)){if(this.Lie.HasTag(-1488322179)||this.Lie.HasTag(-1036349300))return void ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByCode("ExploreToolsShooterDisable");if(this.Lie.HasAnyTag([1637209445,1769145221,525585922,-307714774,1996624497,-1503953470]))return}}else if(e===CommonDefine_1.SKILL_ID_XA&&!this.Lie.HasTag(-2027866845))return void n.CharacterMovement?.SetMovementMode(3);return 0!==e?(0,CommonFunction_1.createInputCommand)(i,e):void 0}}}exports.ExploreInputLayer=ExploreInputLayer;
//# sourceMappingURL=ExploreInputLayer.js.map