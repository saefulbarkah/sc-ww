
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const UE=require("ue"),Log_1=require("../../../../Core/Common/Log"),TsUiSceneRoleActor_1=require("../../../Module/UiComponent/TsUiSceneRoleActor"),materialControllerStateHandleMap=new Map;class AnimNotifyStateAddMaterialControllerData extends UE.KuroAnimNotifyState{constructor(){super(...arguments),this.MaterialAssetData=void 0}K2_NotifyBegin(t,e,r){let a=-1;if(this.IsAllValid(t,e)&&((e=t.GetOwner())instanceof UE.TsBaseCharacter_C?(e.CharRenderingComponent.CheckInit()||e.CharRenderingComponent.Init(e.RenderType),a=e.CharRenderingComponent.AddMaterialControllerData(this.MaterialAssetData)):e instanceof TsUiSceneRoleActor_1.default&&(a=e.Model.CheckGetComponent(5).AddRenderingMaterialByData(this.MaterialAssetData))),0<=a){let e=materialControllerStateHandleMap.get(t);return e||(e=new Map,materialControllerStateHandleMap.set(t,e)),e.set(this,a),!0}return!1}K2_NotifyEnd(e,t){var r=materialControllerStateHandleMap.get(e);if(!r)return!0;var a=r.get(this);if(!a)return!0;r.delete(this),r.size||materialControllerStateHandleMap.delete(e);try{if(0<=a){var o=e.GetOwner();if(o instanceof UE.TsBaseCharacter_C)return o.CharRenderingComponent.RemoveMaterialControllerDataWithEnding(a),!0;if(o instanceof TsUiSceneRoleActor_1.default)return o.Model.CheckGetComponent(5).RemoveRenderingMaterialWithEnding(a),!0}}catch{Log_1.Log.CheckWarn()&&Log_1.Log.Warn("RenderCharacter",26,"AnimNotifyStateAddMaterialControllerData移除特效失败",["Actor",e?.GetOwner()?.GetName()],["动画",t?.GetName()],["handleId",a])}return!1}IsAllValid(e,t){var r;return UE.KismetSystemLibrary.IsValid(this.MaterialAssetData)?e&&UE.KismetSystemLibrary.IsValid(e)?UE.KismetSystemLibrary.IsValid(e.GetOwner())?(r=e.GetOwner())instanceof UE.TsBaseCharacter_C||r instanceof TsUiSceneRoleActor_1.default||(Log_1.Log.CheckWarn()&&Log_1.Log.Warn("RenderCharacter",14,"错误：必须是TsBaseCharacter或者TsUiSceneRoleActor及其派生类调用",["Actor",e?.GetOwner()?.GetName()],["动画",t?.GetName()]),!1):(Log_1.Log.CheckError()&&Log_1.Log.Error("RenderCharacter",14,"错误：动画Owner不合法",["Actor",e?.GetOwner()?.GetName()],["动画",t?.GetName()]),!1):(Log_1.Log.CheckError()&&Log_1.Log.Error("RenderCharacter",14,"错误：动画Mesh不合法",["Actor",e?.GetOwner()?.GetName()],["动画",t?.GetName()]),!1):(Log_1.Log.CheckError()&&Log_1.Log.Error("RenderCharacter",14,"错误：特效DA不合法",["Actor",e?.GetOwner()?.GetName()],["动画",t?.GetName()]),!1)}GetNotifyName(){var e=this.MaterialAssetData.GetName();return e&&""!==e?"材质控制器:"+UE.BlueprintPathsLibrary.GetBaseFilename(e,!0):"材质控制器"}}exports.default=AnimNotifyStateAddMaterialControllerData;
//# sourceMappingURL=AnimNotifyStateAddMaterialControllerData.js.map