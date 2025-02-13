
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CharMaterialControllerV2=void 0;const Log_1=require("../../../../../Core/Common/Log"),Stats_1=require("../../../../../Core/Common/Stats"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),RenderConfig_1=require("../../../Config/RenderConfig"),CharRenderBase_1=require("../../Manager/CharRenderBase");class CharMaterialControllerHandle{constructor(){this.HandleId=0,this.UserData=void 0,this.AssetData=void 0,this.ExtraMeshBodyName=void 0}}class CharMaterialControllerV2 extends CharRenderBase_1.CharRenderBase{constructor(){super(...arguments),this.Uhr=void 0,this.fel=void 0,this.vel=new Map}GetStatName(){return"CharMaterialControllerV2"}Start(){this.Uhr=this.GetRenderingComponent().GetComponent(RenderConfig_1.RenderConfig.IdMaterialContainerV2),this.Uhr.AddEffectFinishCallback(e=>{this.Mel(e)});var e=this.RenderComponent.GetComponent(RenderConfig_1.RenderConfig.IdExtraMesh);this.fel=e,this.OnInitSuccess()}GetEffectCount(){return this.vel.size}GetRuntimeMaterialControllerValid(e){return this.vel.has(e)}SetEffectProgress(e,t){this.vel.has(t)&&this.Uhr?.SetEffectProgress(t,e)}AddMaterialControllerData(e,t,r){var a,i,n,s=Stats_1.Stat.CreateNoFlameGraph("CharMaterialControllerV2_AddData_"+e.GetName()),o=(s.Start(),new CharMaterialControllerHandle);return this.DealWithExtraMesh(e,o)?(n=1===e.DataType,a=2===e.DataType,i=e.HiddenAfterEffect,n=this.Uhr.AddEffect(e,n,a,r,i),o.HandleId=n,o.UserData=t,o.AssetData=e,this.vel.set(n,o),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("RenderCharacter",25,"添加材质控制器",["IdentifyName",this.Uhr.IdentifyName],["AssetData",e.GetName()],["Handle",n]),s.Stop(),n):-1}RemoveMaterialControllerData(e){var t=this.vel.get(e);return!!t&&(this.Uhr?.RemoveEffect(e),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("RenderCharacter",25,"直接移除材质控制器",["IdentifyName",this.Uhr.IdentifyName],["AssetData",t.AssetData?.GetName()],["Handle",e]),!0)}RemoveMaterialControllerDataWithEnding(e){var t=this.vel.get(e);return!!t&&(this.Uhr?.SetEffectLoop(e,!1),this.Uhr?.SetEffectPause(e,!1),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("RenderCharacter",25,"移除材质控制器WithEnding",["IdentifyName",this.Uhr.IdentifyName],["AssetData",t.AssetData?.GetName()],["Handle",e]),!0)}OnResetRenderState(){for(const e of this.vel.keys())EventSystem_1.EventSystem.EmitWithTarget(this,EventDefine_1.EEventName.OnRemoveMaterialController,e);this.vel.clear()}Mel(e){var t=this.vel.get(e);t&&(this.vel.delete(e),t.ExtraMeshBodyName&&this.fel?.RemoveExtraSkeletalMeshUsage(t.ExtraMeshBodyName),EventSystem_1.EventSystem.EmitWithTarget(this.RenderComponent,EventDefine_1.EEventName.OnRemoveMaterialController,e),Log_1.Log.CheckDebug())&&Log_1.Log.Debug("RenderCharacter",25,"自动移除材质控制器",["IdentifyName",this.Uhr.IdentifyName],["AssetData",t.AssetData?.GetName()],["Handle",e])}DealWithExtraMesh(e,t){if(6===e.SpecifiedBodyType){if(!this.fel)return Log_1.Log.CheckError()&&Log_1.Log.Error("RenderCharacter",25,"材质控制器添加失败，ExtraMesh不存在",["Actor",this.GetRenderingComponent().GetOwner().GetName()],["添加的材质控制器名称",e.GetName()]),!1;if(1!==e.MaterialModifyType)return Log_1.Log.CheckError()&&Log_1.Log.Error("RenderCharacter",25,"材质控制器添加失败，ExtraMesh只支持材质替换",["Actor",this.GetRenderingComponent().GetOwner().GetName()],["添加的材质控制器名称",e.GetName()]),!1;if(6!==e.SpecifiedBodyType)return!1;e=RenderConfig_1.RenderConfig.GetBodyNamesByBodyType(1)[0];this.fel.EnsureExtraMesh(e),this.fel.AddExtraSkeletalMeshUsage(e),t.ExtraMeshBodyName=e}return!0}Update(){}LateUpdate(){}Destroy(){}GetComponentId(){return RenderConfig_1.RenderConfig.IdMaterialControllerV2}}exports.CharMaterialControllerV2=CharMaterialControllerV2;
//# sourceMappingURL=CharMaterialControllerV2.js.map