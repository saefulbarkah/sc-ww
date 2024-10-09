
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WorldMapMultiFloorComponent=void 0;const ConfigCommon_1=require("../../../../Core/Config/ConfigCommon"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),ConfigManager_1=require("../../../Manager/ConfigManager"),ModelManager_1=require("../../../Manager/ModelManager"),ExploreProgressDefine_1=require("../../ExploreProgress/ExploreProgressDefine"),MapComponent_1=require("../../Map/Base/MapComponent");class WorldMapMultiFloorComponent extends MapComponent_1.MapComponent{constructor(){super(...arguments),this.MultiMapFloorLayout=void 0,this.nih=void 0,this.sih=void 0,this.MultiMapFloorContainer=void 0,this.WorldMapViewPlaySequenceFunction=void 0,this.aih=!1,this.OnChangeMultiMapFloor=(e,t)=>{this.hih(e,!0,t)}}get ComponentType(){return 6}get MKa(){var e=this.Parent;if(void 0!==e)return e;this.LogError(64,"[地图系统]->二级界面组件没有附加到容器下！")}get SelectedMultiMapGroupId(){return this.nih}get SelectedMultiMapFloorId(){return this.sih}OnEnable(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.WorldMapSubMapChanged,this.OnChangeMultiMapFloor)}OnDisable(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.WorldMapSubMapChanged,this.OnChangeMultiMapFloor)}InitMultiMap(){var e,t=ModelManager_1.ModelManager.AreaModel.GetCurrentAreaId(),i=ConfigManager_1.ConfigManager.MapConfig.GetSubMapConfigByAreaId(t);i&&(e=i.GroupId,i=i.Floor,this.SelectMultiMapFloor(t,e,i,!1))}UpdateMultiMap(){var e=this.lih(),t=this.MKa.Map.GetSubMapGroupIdByPosition();this.SelectedMultiMapGroupId===t||void 0!==this.SelectedMultiMapFloorId&&0!==this.SelectedMultiMapFloorId||(0===t?this.SelectMultiMapFloor(e,void 0,void 0):this.SelectMultiMapFloor(e,t,0))}lih(){if(this.MKa.ClickedItem?.IsMultiMap()){var e=this.MKa.ClickedItem.GetMultiMapId(),e=ConfigManager_1.ConfigManager.MapConfig.GetSubMapConfigById(e);if(e)return 0<e.Area.length?e.Area[0]:0}return this.MKa.Map.GetWorldMapCenterAreaId()}SelectMultiMapFloor(e,t,n,r=!0){e=ConfigManager_1.ConfigManager.AreaConfig.GetAreaInfo(e),e=e?ModelManager_1.ModelManager.AreaModel.GetAreaId(e,ExploreProgressDefine_1.AREA_LEVEL):0,e=ModelManager_1.ModelManager.MapModel.CheckAreasUnlocked(e);let s=e;if(e&&void 0!==t&&void 0!==n){let e=ConfigCommon_1.ConfigCommon.ToList(ConfigManager_1.ConfigManager.MapConfig.GetSubMapConfigByGroupId(t))??[];if((e=e.filter(e=>ModelManager_1.ModelManager.MapModel.CheckUnlockMultiMapIds(e.Id)||0===e.Floor)).sort((e,t)=>t.Floor-e.Floor),1!==e.length){let i=0,o=0;n&&e.forEach((e,t)=>{e.Floor===n&&(i=t,o=e.Id)}),this.nih=t,0!==(this.sih=i)&&(ModelManager_1.ModelManager.WorldMapModel.WorldMapCurrentMultiMapId=o,EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.WorldMapSelectMultiMap,o),this.hih(i,!1,r)),this.SetMultiMapMenuActive(s),this.MultiMapFloorLayout.RefreshByDataAsync(e,!1),this.MultiMapFloorLayout.SelectGridProxy(i)}}else this.nih=void 0,this.sih=void 0,ModelManager_1.ModelManager.WorldMapModel.WorldMapCurrentMultiMapId=void 0,s=!1,EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.WorldMapSelectMultiMap,0),this.hih(0,!1,r),this.SetMultiMapMenuActive(s)}DeSelectMultiMapFloor(e=!0){var t=this.lih();this.SelectMultiMapFloor(t,void 0,void 0,e)}async SetMultiMapMenuActive(e){return this.aih!==e&&(this.aih=e,this.aih?(this.MultiMapFloorContainer.SetUIActive(!0),await this.WorldMapViewPlaySequenceFunction?.("LevelShow",!1)):await this.WorldMapViewPlaySequenceFunction?.("LevelHide",!1),this.MultiMapFloorContainer.SetUIActive(this.aih)),!0}hih(e,t,i){this.MultiMapFloorLayout.DeselectCurrentGridProxy(),this.MultiMapFloorLayout.SelectGridProxy(e),this.sih=e,void 0===this.SelectedMultiMapGroupId||0===e?(this.MKa.Map.HideSubMapTile(),t&&this.UpdateMultiMap()):this.MKa.Map.ShowSubMapTile(this.SelectedMultiMapGroupId,e,!i)}}exports.WorldMapMultiFloorComponent=WorldMapMultiFloorComponent;
//# sourceMappingURL=WorldMapMultiFloorComponent.js.map