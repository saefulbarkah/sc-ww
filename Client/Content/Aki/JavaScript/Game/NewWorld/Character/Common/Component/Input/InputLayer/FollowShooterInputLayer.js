
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FollowShooterInputLayer=void 0;const UE=require("ue"),ResourceSystem_1=require("../../../../../../../Core/Resource/ResourceSystem"),MathUtils_1=require("../../../../../../../Core/Utils/MathUtils"),InputEnums_1=require("../../../../../../Input/InputEnums"),InputLayer_1=require("../../../../../../Input/InputLayer");class FollowShooterInputLayer extends InputLayer_1.InputLayer{constructor(){super(...arguments),this.ltl=void 0,this.Aia=void 0,this.htl=new Set}Start(t){const e=(this.ltl=t).Entity.GetComponent(3)?.Actor;e&&e.InputComponentClass&&ResourceSystem_1.ResourceSystem.LoadAsync(e.InputComponentClass.AssetPathName?.toString(),UE.Class,t=>{this.Aia=e.AddComponentByClass(t,!1,MathUtils_1.MathUtils.DefaultTransform,!1),this.Aia.OwnerActor=e})}RegisterInputAction(t){this.htl.add(t)}Clear(){this.ltl=void 0,this.Aia=void 0,this.htl.clear()}GetLayerType(){return 3}HandlePress(e,s){if(this._tl(e,1)){let t=void 0;switch(e){case InputEnums_1.EInputAction.攻击:t=this.Aia.攻击按下(s);break;case InputEnums_1.EInputAction.技能1:t=this.Aia.技能1按下(s);break;case InputEnums_1.EInputAction.幻象2:t=this.Aia.幻象2按下(s)}return this.ltl.ExecuteCommand(t),FollowShooterInputLayer.GetSwallowCommand()}}HandleHold(e,s){if(this._tl(e,3)){let t=void 0;return e===InputEnums_1.EInputAction.攻击&&(t=this.Aia.攻击长按(s)),this.ltl.ExecuteCommand(t),FollowShooterInputLayer.GetSwallowCommand()}}HandleRelease(e,s){if(this._tl(e,2)){let t=void 0;return e===InputEnums_1.EInputAction.幻象2&&(t=this.Aia.幻象2抬起(s)),this.ltl.ExecuteCommand(t),FollowShooterInputLayer.GetSwallowCommand()}}_tl(t,e){if(this.Aia&&this.ltl?.Active)for(var[s,r]of this.htl)if(s===t&&r===e)return!0;return!1}}exports.FollowShooterInputLayer=FollowShooterInputLayer;
//# sourceMappingURL=FollowShooterInputLayer.js.map