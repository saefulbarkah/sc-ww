
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FollowShooterInputLayer=void 0;const UE=require("ue"),ResourceSystem_1=require("../../../../../../../Core/Resource/ResourceSystem"),MathUtils_1=require("../../../../../../../Core/Utils/MathUtils"),InputEnums_1=require("../../../../../../Input/InputEnums"),InputLayer_1=require("../../../../../../Input/InputLayer");class FollowShooterInputLayer extends InputLayer_1.InputLayer{constructor(){super(...arguments),this.orl=void 0,this.Aia=void 0,this.nrl=new Set}Start(t){const e=(this.orl=t).Entity.GetComponent(3)?.Actor;e&&e.InputComponentClass&&ResourceSystem_1.ResourceSystem.LoadAsync(e.InputComponentClass.AssetPathName?.toString(),UE.Class,t=>{this.Aia=e.AddComponentByClass(t,!1,MathUtils_1.MathUtils.DefaultTransform,!1),this.Aia.OwnerActor=e})}RegisterInputAction(t){this.nrl.add(t)}Clear(){this.orl=void 0,this.Aia=void 0,this.nrl.clear()}GetLayerType(){return 3}HandlePress(e,s){if(this.srl(e,1)){let t=void 0;switch(e){case InputEnums_1.EInputAction.攻击:t=this.Aia.攻击按下(s);break;case InputEnums_1.EInputAction.技能1:t=this.Aia.技能1按下(s);break;case InputEnums_1.EInputAction.幻象2:t=this.Aia.幻象2按下(s)}return this.orl.ExecuteCommand(t),FollowShooterInputLayer.GetSwallowCommand()}}HandleHold(e,s){if(this.srl(e,3)){let t=void 0;return e===InputEnums_1.EInputAction.攻击&&(t=this.Aia.攻击长按(s)),this.orl.ExecuteCommand(t),FollowShooterInputLayer.GetSwallowCommand()}}HandleRelease(e,s){if(this.srl(e,2)){let t=void 0;return e===InputEnums_1.EInputAction.幻象2&&(t=this.Aia.幻象2抬起(s)),this.orl.ExecuteCommand(t),FollowShooterInputLayer.GetSwallowCommand()}}srl(t,e){if(this.Aia&&this.orl?.Active)for(var[s,r]of this.nrl)if(s===t&&r===e)return!0;return!1}}exports.FollowShooterInputLayer=FollowShooterInputLayer;
//# sourceMappingURL=FollowShooterInputLayer.js.map