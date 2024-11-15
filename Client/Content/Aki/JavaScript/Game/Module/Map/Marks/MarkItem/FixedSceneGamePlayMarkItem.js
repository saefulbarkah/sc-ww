
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FixedSceneGameplayMarkItem=void 0;const EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),ModelManager_1=require("../../../../Manager/ModelManager"),FixedSceneGamePlayMarkItemView_1=require("../MarkItemView/FixedSceneGamePlayMarkItemView"),ConfigMarkItem_1=require("./ConfigMarkItem");class FixedSceneGameplayMarkItem extends ConfigMarkItem_1.ConfigMarkItem{constructor(e,t,i,s,r,a=1){super(e,t,i,s,r,a),this.InnerView=void 0,this.Zbn=e=>{var t=this.LocateInGround();let i=!1;i=t&&0===e?0===e:this.GetMultiMapId()===ModelManager_1.ModelManager.WorldMapModel.WorldMapCurrentMultiMapId,this.IsSelectThisFloor!==i&&(this.IsSelectThisFloor=i,this.crl())}}OnCreateView(){this.InnerView=new FixedSceneGamePlayMarkItemView_1.FixedSceneGamePlayMarkItemView(this)}Initialize(){super.Initialize(),2===this.MapType&&EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.WorldMapSubMapChangedFromUpdate,this.Zbn),this.mrl()}OnDestroy(){super.OnDestroy(),2===this.MapType&&EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.WorldMapSubMapChangedFromUpdate,this.Zbn)}InitIcon(){var e=ModelManager_1.ModelManager.LevelPlayModel.GetLevelPlayInfo(this.MarkConfig.RelativeId);!e||e.IsClose?this.IconPath=this.MarkConfig.LockMarkPic:this.IconPath=this.MarkConfig.UnlockMarkPic}IsMultiMap(){return 0!==this.MarkConfig.MultiMapFloorId}GetMultiMapId(){return this.MarkConfig.MultiMapFloorId}OnUpdate(e){super.OnUpdate(e),1===this.MapType&&this.mrl()}mrl(){var e=this.IsSelectThisFloor;this.IsSelectThisFloor=this.GetIsSelectThisFloor(),e!==this.IsSelectThisFloor&&this.crl()}crl(){var e;this.InnerView&&(e=this.InnerView)&&e.UpdateIcon()}}exports.FixedSceneGameplayMarkItem=FixedSceneGameplayMarkItem;
//# sourceMappingURL=FixedSceneGamePlayMarkItem.js.map