
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PortalController=exports.PortalPairParams=void 0;const puerts_1=require("puerts"),UE=require("ue"),Log_1=require("../../../../Core/Common/Log"),Stack_1=require("../../../../Core/Container/Stack"),ControllerBase_1=require("../../../../Core/Framework/ControllerBase"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),ModelManager_1=require("../../../Manager/ModelManager"),PORTAL_DEBUG_KEY="Portal";class PortalPairParams{constructor(t,e,r,a,i,s){this.Trans=t,this.PairTrans=e,this.Owner=r,this.PairOwner=a,this.PortalBounds=i,this.PairPortalBounds=s,this.ACapture=void 0,this.BCapture=void 0}}exports.PortalPairParams=PortalPairParams;class PortalController extends ControllerBase_1.ControllerBase{static RegisterPair(t,e,r=!1,a=!0){var i,s,o,n,h,l;ModelManager_1.ModelManager.PortalModel?.GetPortal(t)||r&&this.mBn||(i=(ModelManager_1.ModelManager.CreatureModel?.GetEntity(t))?.Entity?.GetComponent(204),s=(ModelManager_1.ModelManager.CreatureModel?.GetEntity(i?.GetPairCreatureDataId()??0))?.Entity?.GetComponent(204),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneItem",39,"传送门: RegisterPair",["EntityId",t],["IsDynamic",r],["IsAddToCache",a],["CreatureDataIdA",i?.GetCreatureDataId()],["CreatureDataIdB",s?.GetCreatureDataId()],["PbDataIdA",i?.GetPbDataId()],["PbDataIdB",s?.GetPbDataId()],["OwnerCreatureDataIdA",i?.GetDynamicPortalCreatorCreatureDataId()],["OwnerCreatureDataIdB",s?.GetDynamicPortalCreatorCreatureDataId()],["PortalBoundsA",e.PortalBounds],["PortalBoundsB",e.PairPortalBounds],["PortalTransA",e.Trans],["PortalTransB",e.PairTrans],["PairMaxViewDisA",i?.GetPairCaptureMaxViewDistance()],["PairMaxViewDisB",s?.GetPairCaptureMaxViewDistance()]),i&&s?(!this.mBn&&this.Hla&&this.UnRegisterPair(this.Hla,!1,!1,!1),!r&&a&&(this.CBn.set(t,e),this.Vla.Delete(t),this.Vla.Push(t)),!r&&this.mBn||(r&&(this.mBn=!0),this.Hla=t,(l=new UE.TransformDouble).SetLocation(e.Trans.GetLocation()),(o=ModelManager_1.ModelManager.PortalModel.GetBpPortalActor()).D_K2_SetActorLocation(l.GetLocation(),!1,void 0,!0),o.SetPortal1Transform(e.Trans,e.Owner.D_GetTransform()),o.SetPortal2Transform(e.PairTrans,e.PairOwner.D_GetTransform()),o.SetPortal1Bounds(e.PortalBounds.ToUeVectorOld()),o.SetPortal2Bounds(e.PairPortalBounds.ToUeVectorOld()),l=UE.NewArray(UE.Actor),e=s.GetPairCaptureForceShowActors()??l,n=i.GetPairCaptureForceShowActors()??l,h=s?.GetPairCaptureIgnoredActors()??l,l=i?.GetPairCaptureIgnoredActors()??l,o.SetCaptureShowingActors(!0,(0,puerts_1.$ref)(h),(0,puerts_1.$ref)(e)),o.SetCaptureShowingActors(!1,(0,puerts_1.$ref)(l),(0,puerts_1.$ref)(n)),o.SetCaptureMaxViewDistance(!0,s.GetPairCaptureMaxViewDistance()),o.SetCaptureMaxViewDistance(!1,i.GetPairCaptureMaxViewDistance()),o.SetCaptureShowFlags(!0,s.GetPairCaptureShowFlags()),o.SetCaptureShowFlags(!1,i.GetPairCaptureShowFlags()),o.EnablePortal1Rendering(),o.EnablePortal2Rendering(),i.PortalCapture?.SetPair(s?.PortalCapture),s.PortalCapture?.SetPair(i?.PortalCapture),ModelManager_1.ModelManager.PortalModel?.AddPortalPair(t,o),i?.AfterRegisterPair(),s?.AfterRegisterPair(),ModelManager_1.ModelManager.SundryModel?.GetModuleDebugLevel(PORTAL_DEBUG_KEY)&&(o.EnableDebugCamera1=!0,o.EnableDebugCamera2=!0))):Log_1.Log.CheckError()&&Log_1.Log.Error("SceneItem",39,"传送门: RegisterPair出错，PortalComp找不到",["EntityId",t],["IsDynamic",r],["IsAddToCache",a],["APortalComp Valid",!!i],["BPortalComp Valid",!!s]))}static UnRegisterPair(t,e=!1,r=!0,a=!1){var i,s,o,n=ModelManager_1.ModelManager.PortalModel?.GetPortal(t);n&&(i=(ModelManager_1.ModelManager.CreatureModel?.GetEntity(t))?.Entity?.GetComponent(204),s=(ModelManager_1.ModelManager.CreatureModel?.GetEntity(i?.GetPairCreatureDataId()??0))?.Entity?.GetComponent(204),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("SceneItem",39,"传送门: UnRegisterPair",["EntityId",t],["IsDynamic",e],["IsRemoveFromCache",r],["RegisterNewFromCache",a],["CreatureDataIdA",i?.GetCreatureDataId()],["CreatureDataIdB",s?.GetCreatureDataId()],["PbDataIdA",i?.GetPbDataId()],["PbDataIdB",s?.GetPbDataId()],["OwnerCreatureDataIdA",i?.GetDynamicPortalCreatorCreatureDataId()],["OwnerCreatureDataIdB",s?.GetDynamicPortalCreatorCreatureDataId()]),n.DisablePortal1Rendering(),n.DisablePortal2Rendering(),o=UE.NewArray(UE.Actor),n.SetCaptureShowingActors(!0,(0,puerts_1.$ref)(o),(0,puerts_1.$ref)(o)),n.SetCaptureShowingActors(!1,(0,puerts_1.$ref)(o),(0,puerts_1.$ref)(o)),n.SetCaptureMaxViewDistance(!0,0),n.SetCaptureMaxViewDistance(!1,0),ModelManager_1.ModelManager.PortalModel?.RemovePortalPair(t),i?.PortalCapture?.SetPair(void 0),s?.PortalCapture?.SetPair(void 0),i?.AfterUnRegisterPair(),s?.AfterUnRegisterPair(),e&&(this.mBn=!1),this.Hla=void 0,r&&!e&&(this.CBn.delete(t),this.Vla.Delete(t)),a)&&(o=this.Vla.Peek())&&(n=this.CBn.get(o))&&this.RegisterPair(o,n,!1,!1)}static RegisterDynamicPortals(){if(this.GSa[0]&&this.GSa[1]){if(this.mBn&&this.Hla){var t=(ModelManager_1.ModelManager.CreatureModel?.GetEntity(this.Hla))?.Entity?.GetComponent(204);if(this.Hla===this.GSa[0]&&t?.GetPairCreatureDataId()===this.GSa[1])return;this.UnRegisterDynamicPortals(!1)}var t=ModelManager_1.ModelManager.CreatureModel?.GetEntity(this.GSa[0])?.Entity,e=t?.GetComponent(204),r=ModelManager_1.ModelManager.CreatureModel?.GetEntity(this.GSa[1])?.Entity,a=r?.GetComponent(204);e?.CanRegisterPortal()&&a?.CanRegisterPortal()&&(t=new PortalPairParams(e.PortalCapture.Plane.D_K2_GetComponentToWorld(),a.PortalCapture.Plane.D_K2_GetComponentToWorld(),t.GetComponent(1).Owner,r.GetComponent(1).Owner,e.PortalBounds,a.PortalBounds),e?.SetPairCreatureDataId(this.GSa[1]),a?.SetPairCreatureDataId(this.GSa[0]),this.RegisterPair(this.GSa[0],t,!0,!1))}}static UnRegisterDynamicPortals(t=!1){var e,r,a;this.mBn&&this.Hla&&(e=this.Hla,r=(ModelManager_1.ModelManager.CreatureModel?.GetEntity(e))?.Entity?.GetComponent(204),a=(ModelManager_1.ModelManager.CreatureModel?.GetEntity(r?.GetPairCreatureDataId()??0))?.Entity?.GetComponent(204),this.UnRegisterPair(e,!0,!1,t),r?.SetPairCreatureDataId(0),a?.SetPairCreatureDataId(0))}static GetPairDynamicPortal(t){var e=t.GetCreatureDataId();switch(t.GetPortalModel()){case"A":if(this.GSa[0]===e&&this.GSa[1])return ModelManager_1.ModelManager.CreatureModel?.GetEntity(this.GSa[1])?.Entity?.GetComponent(204);break;case"B":if(this.GSa[1]===e&&this.GSa[0])return ModelManager_1.ModelManager.CreatureModel?.GetEntity(this.GSa[0])?.Entity?.GetComponent(204)}}static AfterGenerateDynamicPortal(t){var e=t.GetCreatureDataId();switch(t.GetPortalModel()){case"A":this.GSa[0]!==e&&(this.GSa[0]=e);break;case"B":this.GSa[1]!==e&&(this.GSa[1]=e)}}static AfterDeleteDynamicPortal(t){t=t.GetCreatureDataId();this.GSa[0]===t?this.GSa[0]=void 0:this.GSa[1]===t&&(this.GSa[1]=void 0)}static OnInit(){return EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnChangeModuleDebugLevel,this.OnChangeModuleDebugLevel),!0}static OnClear(){return EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnChangeModuleDebugLevel,this.OnChangeModuleDebugLevel),this.CBn.clear(),this.Vla.Clear(),this.GSa.length=0,this.Hla=0,!(this.mBn=!1)}}(exports.PortalController=PortalController).GSa=[],PortalController.CBn=new Map,PortalController.Vla=new Stack_1.Stack,PortalController.Hla=void 0,PortalController.mBn=!1,PortalController.OnChangeModuleDebugLevel=(t,e)=>{t===PORTAL_DEBUG_KEY&&ModelManager_1.ModelManager.PortalModel?.GetPortals().forEach(t=>{t.EnableDebugCamera1=0<e,t.EnableDebugCamera2=0<e})};
//# sourceMappingURL=PortalController.js.map