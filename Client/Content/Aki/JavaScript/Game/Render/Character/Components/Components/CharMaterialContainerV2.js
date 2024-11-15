
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CharMaterialContainerV2=void 0;const UE=require("ue"),Stats_1=require("../../../../../Core/Common/Stats"),RenderConfig_1=require("../../../Config/RenderConfig"),CharRenderBase_1=require("../../Manager/CharRenderBase"),charMeshName=new UE.FName("CharacterMesh0");class CharMaterialContainerV2 extends CharRenderBase_1.CharRenderBase{constructor(){super(...arguments),this.fel=void 0,this.xW=void 0,this.IdentifyName="",this.vel=void 0}Start(){var t,e=this.GetRenderingComponent().GetCachedOwner();e&&(this.fel=e.GetComponentByClass(UE.KuroMaterialControllerComponent.StaticClass()),this.fel||(this.fel=e.AddComponentByClass(UE.KuroMaterialControllerComponent.StaticClass(),!1,void 0,!1),6===(t=this.GetRenderingComponent().RenderType)||7===t?this.fel.SetInitTakeOver(!1):this.fel.SetInitTakeOver(!0),this.fel.InitFromOwner()),this.IdentifyName=e.GetClass().GetName(),(t=this.fel.GetRegisteredSkeletalMeshComponent(charMeshName)?.SkeletalMesh)&&(this.IdentifyName=this.IdentifyName+"_"+t.GetName()),this.xW=Stats_1.Stat.CreateNoFlameGraph("CharMaterialContainerV2_Tick_"+this.IdentifyName),this.OnInitSuccess())}Update(){this.xW?.Start();var t=this.RenderComponent.GetTimeDilation(),s=(this.fel.UpdateEffects(),this.fel.ManualTick(this.GetDeltaTime()*t),this.fel.RemoveDeadEffects());if(this.vel)for(let t=0,e=s.Num();t<e;++t)for(const i of this.vel)i(s.Get(t));this.xW?.Stop()}AddSkeletalComponent(t,e,s=!1){this.fel.AddSkeletalMeshComponent(t,new UE.FName(e),s)}GetSkeletalComponent(t){return this.fel.GetRegisteredSkeletalMeshComponent(new UE.FName(t))}RemoveSkeletalComponent(t){this.fel.RemoveSkeletalMeshComponent(new UE.FName(t))}AddEffect(t,e,s,i,a=!1){return this.fel.AddEffect_Ex(t,e,s,i,a)}SetEffectLoop(t,e){this.fel.SetHandleLoop(t,e,!0)}SetEffectPause(t,e){this.fel.SetHandlePause(t,e)}SetEffectProgress(t,e){this.fel.SeekHandleFactor(t,e)}RemoveEffect(t){if(this.fel.RemoveEffect(t),this.vel)for(const e of this.vel)e(t)}OnResetRenderState(){this.fel.RemoveAllEffects(),this.fel.UpdateEffects()}SetFloatUpdateParamPermanent(t,e,s,i,a){this.fel.AddFloatUpdateParamPermanent(t,e,s,i,a||17)}SetColorUpdateParamPermanent(t,e,s,i,a){this.fel.AddColorUpdateParamPermanent(t,e,s,i,a||17)}SetTextureUpdateParamPermanent(t,e,s,i,a){this.fel.AddTextureUpdateParamPermanent(t,e,s,i,a||17)}RemoveFloatUpdateParamPermanent(t,e,s,i){this.fel.RemoveFloatUpdateParamPermanent(t,e,s,i||17)}RemoveColorUpdateParamPermanent(t,e,s,i){this.fel.RemoveColorUpdateParamPermanent(t,e,s,i||17)}RemoveTextureUpdateParamPermanent(t,e,s,i){this.fel.RemoveTextureUpdateParamPermanent(t,e,s,i||17)}AddAlphaTestCount(t){this.fel.AddExternalAlphaTestRefCount(t)}AddOutlineStencilTestCount(t){this.fel.AddExternalOutlineStencilTestRefCount(t)}AddBattleCount(t){this.fel.AddExternalBattleRefCount(t)}AddBattleMaskCount(t){this.fel.AddExternalBattleMaskRefCount(t)}RemoveAlphaTestCount(t){this.fel.RemoveExternalAlphaTestRefCount(t)}RemoveOutlineStencilTestCount(t){this.fel.RemoveExternalOutlineStencilTestRefCount(t)}RemoveBattleCount(t){this.fel.RemoveExternalBattleRefCount(t)}RemoveBattleMaskCount(t){this.fel.RemoveExternalBattleMaskRefCount(t)}AddEffectFinishCallback(t){t&&(this.vel||(this.vel=new Set),this.vel.has(t)||this.vel.add(t))}RemoveEffectFinishCallback(t){t&&this.vel&&this.vel.delete(t)}Destroy(){}GetStatName(){return"CharMaterialContainerV2"}GetComponentId(){return RenderConfig_1.RenderConfig.IdMaterialContainerV2}}exports.CharMaterialContainerV2=CharMaterialContainerV2;
//# sourceMappingURL=CharMaterialContainerV2.js.map