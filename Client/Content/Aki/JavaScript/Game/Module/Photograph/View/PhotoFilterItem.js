
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PhotoFilterItem=void 0;const UE=require("ue"),CustomPromise_1=require("../../../../Core/Common/CustomPromise"),ConfigManager_1=require("../../../Manager/ConfigManager"),ModelManager_1=require("../../../Manager/ModelManager"),UiPanelBase_1=require("../../../Ui/Base/UiPanelBase"),LevelSequencePlayer_1=require("../../Common/LevelSequencePlayer"),LguiUtil_1=require("../../Util/LguiUtil"),PhotographController_1=require("../PhotographController"),PhotographDefine_1=require("../PhotographDefine");class PhotoFilterItem extends UiPanelBase_1.UiPanelBase{constructor(){super(...arguments),this.g1_=0,this.mP_=void 0,this.fPi=void 0,this.zW_=void 0,this.p1_=void 0,this.Lrt=!1,this.fP_=()=>{return ModelManager_1.ModelManager.PhotographModel.GetPhotographFilter()!==this.g1_},this.pQi=(e,t=0)=>{PhotographController_1.PhotographController.SetSingleFilterStrength(this.g1_,e);e=Math.floor(e*PhotographDefine_1.FILTER_MAX_STREGNTH);this.GetText(3).SetText(e.toString())},this.OnClicked=e=>{ModelManager_1.ModelManager.PhotographModel.GetPhotographFilter()===this.g1_?this.SetFilterStrengthVisible(1===e):this.fPi&&this.fPi(this,!0)},this.FBt=()=>{this.fP_()||this.zW_&&this.zW_(this)}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIExtendToggle],[1,UE.UIText],[2,UE.UITexture],[3,UE.UIText],[4,UE.UISliderComponent],[5,UE.UISprite],[6,UE.UIItem],[7,UE.UISprite],[8,UE.UIItem],[9,UE.UISprite]],this.BtnBindInfo=[[0,this.OnClicked]]}OnStart(){this.GetSlider(4)?.OnValueChangeCb.Bind(this.pQi),this.mP_=new LevelSequencePlayer_1.LevelSequencePlayer(this.RootItem),this.GetExtendToggle(0).OnPointEnterCallBack.Bind(this.FBt)}OnBeforeDestroy(){this.GetSlider(4)?.OnValueChangeCb.Unbind(),this.mP_=void 0}OnBeforeShow(){var e=!this.fP_();this.SetSelected(e)}Refresh(e){var t;0!==e&&(this.g1_=e,this.p1_=ConfigManager_1.ConfigManager.PhotographConfig.GetPhotoFilterConfigById(e),this.p1_)&&(e=this.p1_.Name,LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(1),e),e=this.p1_.Icon,this.SetTextureByPath(e,this.GetTexture(2)),(e=this.GetSlider(4))?.SetMinValue(0,!1,!1),e?.SetMaxValue(1,!1,!1),t=ModelManager_1.ModelManager.PhotographModel.GetFilterStrengthByFilterId(this.g1_),e?.SetValue(t,!1),e=Math.floor(t*PhotographDefine_1.FILTER_MAX_STREGNTH),this.GetText(3).SetText(e.toString()))}BindOnSelected(e){this.fPi=e}SetSelected(e,t=!1){this.GetSprite(7)?.SetUIActive(e),this.SetFilterStrengthVisible(e,!1);var i=this.GetExtendToggle(0);e?(i.SetToggleStateForce(1,t),ModelManager_1.ModelManager.PhotographModel?.SetPhotographFilter(this.g1_),PhotographController_1.PhotographController.InitPostProcessVolBlendWeight(this.g1_)):i.SetToggleStateForce(0,t)}SetFilterStrengthVisible(e,t=!0){const i=this.GetItem(8);this.g1_===PhotographDefine_1.DEFAULT_FILTER_CONFIGID?(this.GetSprite(9)?.SetUIActive(!1),i?.SetUIActive(!1)):t?e?(i?.SetUIActive(!0),this.zW_&&this.zW_(this),this.mP_?.PlayLevelSequenceByName("Unfold")):this.mP_?.PlaySequenceAsync("Collapse",new CustomPromise_1.CustomPromise).then(()=>{i?.SetUIActive(!1)}):i?.SetUIActive(e)}ShowFilterItem(){this.Lrt=!0,this.SetActive(!0)}GetPhotoFilterId(){return this.g1_}PlayDisappearSequence(e){this.Lrt=!1,e?this.PlayDisappearSequenceAsync():this.SetActive(!1)}async PlayDisappearSequenceAsync(){await this.mP_?.PlaySequenceAsync("SwitchOut",new CustomPromise_1.CustomPromise).then(()=>{var e;this.SetActive(this.Lrt),this.Lrt&&(e=!this.fP_(),this.SetSelected(e))})}BindScrollToSelectedItem(e){this.zW_=e}}exports.PhotoFilterItem=PhotoFilterItem;
//# sourceMappingURL=PhotoFilterItem.js.map