
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RoleElementView=void 0;const UE=require("ue"),AudioSystem_1=require("../../../../Core/Audio/AudioSystem"),CustomPromise_1=require("../../../../Core/Common/CustomPromise"),Log_1=require("../../../../Core/Common/Log"),CommonParamById_1=require("../../../../Core/Define/ConfigCommon/CommonParamById"),ResourceSystem_1=require("../../../../Core/Resource/ResourceSystem"),TimerSystem_1=require("../../../../Core/Timer/TimerSystem"),MathUtils_1=require("../../../../Core/Utils/MathUtils"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),EffectContext_1=require("../../../Effect/EffectContext/EffectContext"),EffectSystem_1=require("../../../Effect/EffectSystem"),Global_1=require("../../../Global"),GlobalData_1=require("../../../GlobalData"),ConfigManager_1=require("../../../Manager/ConfigManager"),ModelManager_1=require("../../../Manager/ModelManager"),CharacterNameDefines_1=require("../../../NewWorld/Character/Common/CharacterNameDefines"),UiViewBase_1=require("../../../Ui/Base/UiViewBase"),UiLayer_1=require("../../../Ui/UiLayer"),EffectUtil_1=require("../../../Utils/EffectUtil"),ScrollingTipsController_1=require("../../ScrollingTips/ScrollingTipsController"),LoadAsyncPromise_1=require("../../UiComponent/LoadAsyncPromise"),UiSceneManager_1=require("../../UiComponent/UiSceneManager"),GenericScrollViewNew_1=require("../../Util/ScrollView/GenericScrollViewNew"),MainRoleController_1=require("../MainRoleController"),RoleController_1=require("../RoleController"),RoleElementItem_1=require("./RoleElementItem");class RoleElementView extends UiViewBase_1.UiViewBase{constructor(){super(...arguments),this.kGe=void 0,this.ypt=void 0,this.nVi=0,this.d1o=void 0,this.g1o=0,this.f1o=0,this.p1o=!1,this.dVi=void 0,this.sGe=()=>{var e=new RoleElementItem_1.RoleElementItem;return e.SetRoleViewAgent(this.d1o),e.OnToggleCallback=this.OnToggleClick,e.CanToggleChange=this.Bpt,e},this.OnToggleClick=e=>{this.v1o(e),RoleController_1.RoleController.PlayRoleMontage(19),this.g1o&&this.M1o()},this.Bpt=e=>e!==this.kGe.GetGenericLayout().GetSelectedGridIndex(),this.OnClickClose=()=>{this.CloseMe()},this.OnClickSwitch=()=>{var e;Global_1.Global.BaseCharacter?.CharacterActorComponent.Entity.GetComponent(194)?.HasTag(1996802261)?ScrollingTipsController_1.ScrollingTipsController.ShowTipsByText(ConfigManager_1.ConfigManager.TextConfig.GetTextById("CanNotTransferInFight")):this.nVi&&(e=ConfigManager_1.ConfigManager.RoleConfig.GetRoleConfig(this.nVi))&&MainRoleController_1.MainRoleController.SendRoleElementChangeRequest(e.ElementId)},this.Y2e=e=>{this.p1o=!0,UiLayer_1.UiLayer.SetShowMaskLayer("RoleElementView",!0),this.d1o.SetCurSelectRoleId(e);var t=this.d1o.GetCurSelectRoleData();(this.dVi?.Model?.CheckGetComponent(12))?.SetRoleDataId(e,t.GetRoleSkinId()),this.E1o(e);for(const i of this.kGe.GetScrollItemList())i.RefreshState();this.Svt()},this.S1o=e=>{e?this.M1o():this.HideElementPreviewEffect()},this.y1o=()=>{UiLayer_1.UiLayer.SetShowMaskLayer("RoleElementView",!1),this.p1o=!1,ScrollingTipsController_1.ScrollingTipsController.ShowTipsById("ElementTransferSuccess")},this.M1o=()=>{var e;this.p1o||(e=ConfigManager_1.ConfigManager.RoleConfig.GetRoleConfig(this.nVi),this.ShowElementPreviewEffectById(e.ElementId))},this.I1o=()=>{}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIButtonComponent],[1,UE.UIScrollViewWithScrollbarComponent],[2,UE.UIButtonComponent]],this.BtnBindInfo=[[0,this.OnClickClose],[2,this.OnClickSwitch]]}async OnBeforeStartAsync(){this.d1o=this.OpenParam,void 0===this.d1o?Log_1.Log.CheckError()&&Log_1.Log.Error("Role",58,"RoleViewAgent为空",["界面名称","RoleElementView"]):(this.dVi=UiSceneManager_1.UiSceneManager.GetRoleSystemRoleActor(),this.kGe=new GenericScrollViewNew_1.GenericScrollViewNew(this.GetScrollViewWithScrollbar(1),this.sGe),await this.RefreshAsync(),RoleController_1.RoleController.PlayRoleMontage(20))}async RefreshAsync(){var e=ModelManager_1.ModelManager.WorldLevelModel.Sex,t=ConfigManager_1.ConfigManager.RoleConfig.GetMainRoleByGender(e),i=t.length,r=[];for(let e=0;e<i;e++){var o=t[e];MainRoleController_1.MainRoleController.IsCanChangeRole(o.Id)&&r.push(o)}this.ypt=r,await this.kGe.RefreshByDataAsync(r);const s=this.d1o.GetCurSelectRoleId();e=r.findIndex(e=>e.Id===s);this.v1o(e)}OnAddEventListener(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.ShowRoleElementChangePreviewEffect,this.S1o)}OnAfterShow(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.RoleSystemChangeRole,this.Y2e)}v1o(e){var t=this.ypt[e];this.nVi=t.Id,this.kGe.GetGenericLayout().SelectGridProxy(e),this.Svt()}Svt(){var e=this.d1o.GetCurSelectRoleId()===this.nVi;this.GetButton(2)?.SetSelfInteractive(!e)}OnBeforeHide(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.RoleSystemChangeRole,this.Y2e),this.HideElementPreviewEffect()}OnRemoveEventListener(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.ShowRoleElementChangePreviewEffect,this.S1o)}E1o(e){var e=ConfigManager_1.ConfigManager.RoleConfig.GetRoleConfig(e),t=ConfigManager_1.ConfigManager.ElementInfoConfig?.GetElementInfo(e.ElementId)?.AudioEvent,t=(t&&AudioSystem_1.AudioSystem.PostEvent(t),RoleController_1.RoleController.PlayRoleMontage(21),ConfigManager_1.ConfigManager.RoleConfig.GetRoleElementSwitchDelayTime());this.ShowElementSuccessEffectById(e.ElementId),TimerSystem_1.TimerSystem.Delay(()=>{this.y1o()},t)}async T1o(e,i,r,t,o,s){let n=!1,a=void 0;const l=new CustomPromise_1.CustomPromise;s&&(s=new LoadAsyncPromise_1.LoadAsyncPromise(s,UE.Texture),a=await s.Promise,n=!0);s=EffectUtil_1.EffectUtil.GetEffectPath(e);return EffectSystem_1.EffectSystem.SpawnEffect(GlobalData_1.GlobalData.World,t??MathUtils_1.MathUtils.DefaultTransformDouble,s,"[RoleAnimStateEffectManager.PlayEffect]",new EffectContext_1.EffectContext(void 0,i),1,void 0,(e,t)=>{0!==e&&(o&&(e=UE.LinearColor.FromSRGBColor(UE.Color.FromHex(o)),this.L1o(t,e,n,a)),i&&r&&EffectSystem_1.EffectSystem.GetEffectActor(t)?.K2_AttachToComponent(i,r,0,0,0,!1),l.SetResult(t))},void 0,!1,!0),l.Promise}L1o(e,t,i,r){var o,e=EffectSystem_1.EffectSystem.GetNiagaraComponent(e);e instanceof UE.NiagaraComponent&&(o=e.Asset,e.SetAsset(void 0),e.SetAsset(o)),e&&(e.SetNiagaraVariableLinearColor("Color",t),i)&&e.SetKuroNiagaraEmitterCustomTexture("Icon","Mask",r)}ShowElementSuccessEffectById(e){var t,i,e=ConfigManager_1.ConfigManager.ElementInfoConfig.GetElementInfo(e);e&&(i=((t=this.dVi).Model?.CheckGetComponent(1))?.MainMeshComponent)&&(this.T1o("AttributeSwitchBodyEffect",t.K2_GetRootComponent(),CharacterNameDefines_1.CharacterNameDefines.ROOT,void 0,e.ElementEffectColor).catch(this.I1o),this.T1o("AttributeSwitchHandEffect",i,CharacterNameDefines_1.CharacterNameDefines.ELEMENT_EFFECT_SOCKET_NAME,void 0,e.ElementEffectColor,e.Icon3).catch(this.I1o))}ShowElementPreviewEffectById(e){e=ConfigManager_1.ConfigManager.ElementInfoConfig.GetElementInfo(e);if(e){if(this.g1o){const o=UE.LinearColor.FromSRGBColor(UE.Color.FromHex(e.ElementEffectColor));ResourceSystem_1.ResourceSystem.LoadAsync(e.Icon3,UE.Texture,e=>{this.L1o(this.g1o,o,!0,e)})}else{var t=this.dVi,i=new UE.TransformDouble(new UE.Rotator(0,0,0),new UE.VectorDouble(0,0,0),new UE.VectorDouble(1,1,1)),t=t.Model?.CheckGetComponent(1);this.T1o("AttributePreviewHandEffect",t?.MainMeshComponent,CharacterNameDefines_1.CharacterNameDefines.ELEMENT_EFFECT_SOCKET_NAME,i,e.ElementEffectColor,e.Icon3).then(e=>{this.g1o=e},this.I1o)}try{var r=UiSceneManager_1.UiSceneManager.GetActorByTag(CommonParamById_1.configCommonParamById.GetStringConfig("RoleElementPreviewEffectCase"));this.f1o||this.T1o("AttributePreviewBodyEffect",void 0,void 0,r.D_GetTransform()).then(e=>{this.f1o=e},this.I1o)}catch(e){Log_1.Log.CheckError()&&Log_1.Log.Error("Role",49,"给角色属性切换预览特效寻找坐标参考case点失败，中断后续流程")}}}HideElementPreviewEffect(){EffectSystem_1.EffectSystem.IsValid(this.g1o)&&(EffectSystem_1.EffectSystem.StopEffectById(this.g1o,"HideElementPreviewEffect",!0,!0),this.g1o=0),this.f1o&&(EffectSystem_1.EffectSystem.StopEffectById(this.f1o,"HideElementPreviewEffect",!0,!0),this.f1o=0)}}exports.RoleElementView=RoleElementView;
//# sourceMappingURL=RoleElementView.js.map