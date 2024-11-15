
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const UE=require("ue"),CameraController_1=require("../Camera/CameraController"),CameraUtility_1=require("../Camera/CameraUtility"),TsBaseCharacter_1=require("../Character/TsBaseCharacter"),ModelManager_1=require("../Manager/ModelManager"),CharacterUtils_1=require("../NewWorld/Character/CharacterUtils");class TsAnimNotifyCameraShake extends UE.KuroAnimNotify{constructor(){super(...arguments),this.震动配置=void 0,this.bForSelf=!1,this.Radius=-0}K2_Notify(r,e){var a=r.GetOwner();return a instanceof TsBaseCharacter_1.default&&!!(a=ModelManager_1.ModelManager.CreatureModel.GetEntityById(a.EntityId))?.Valid&&!(!CharacterUtils_1.CharacterUtils.CanCharacterMonsterOrSummonedDisplayEffect(a)||!CameraUtility_1.CameraUtility.CheckCameraShakeCondition(a)||0!==CameraController_1.CameraController.Model.CameraMode||!CameraController_1.CameraController.GetPlayerCameraManager()?.IsValid()||(this.bForSelf?CameraController_1.CameraController.PlayCameraShake(this.震动配置,CameraController_1.CameraController.Model.ShakeModify,0,void 0,!0):CameraController_1.CameraController.PlayWorldCameraShake(this.震动配置,r?.GetOwner()?.K2_GetActorLocation(),this.Radius,this.Radius,1,!0),0))}GetNotifyName(){return"相机震屏"}}exports.default=TsAnimNotifyCameraShake;
//# sourceMappingURL=TsAnimNotifyCameraShake.js.map