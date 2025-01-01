
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CommonGamePlayPanel=void 0;const Protocol_1=require("../../../../../Core/Define/Net/Protocol"),ConfigManager_1=require("../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../Manager/ModelManager"),MapController_1=require("../../../Map/Controller/MapController"),MarkUiUtils_1=require("../../../Map/Mark/Misc/MarkUiUtils"),MapLogger_1=require("../../../Map/Misc/MapLogger"),WorldMapController_1=require("../../WorldMapController"),WorldMapDefine_1=require("../../WorldMapDefine"),WorldMapSecondaryUiLayoutA_1=require("../WorldMapSecondaryUiLayout/WorldMapSecondaryUiLayoutA");class CommonGamePlayPanel extends WorldMapSecondaryUiLayoutA_1.WorldMapSecondaryUiLayoutA{constructor(){super(...arguments),this.u2o=void 0,this.OnConfirmBtnClick=()=>{this.u2o&&(this.u2o.IsLocked?(this.CheckAndShowCrossMapTips(this.u2o),MapLogger_1.MapLogger.Debug(63,"[地图系统]CommonGamePlayPanel->追踪",["markId",this.u2o.MarkId],["IsTracked",this.u2o.IsTracked]),MapController_1.MapController.RequestTrackMapMark(this.u2o.MarkType,this.u2o.MarkId,!this.u2o.IsTracked),this.Close()):(MapLogger_1.MapLogger.Debug(63,"[地图系统]CommonGamePlayPanel->传送",["markId",this.u2o.MarkId],["IsTracked",this.u2o.IsTracked]),WorldMapController_1.WorldMapController.TryTeleport(this.u2o.MarkConfigId)))},this.OnTrackBtnClick=()=>{this.CheckAndShowCrossMapTips(this.u2o);var e=this.u2o;MapLogger_1.MapLogger.Debug(63,"[地图系统]SceneGameplayPanel->追踪标记",["markId",e.MarkId],["IsTracked",e.IsTracked]),MapController_1.MapController.RequestTrackMapMark(e.MarkType,e.MarkId,!e.IsTracked),this.Close()},this.OnGotoBtnClick=()=>{var e=MarkUiUtils_1.MarkUiUtils.FindNearbyValidGotoMark(this.Map,this.u2o);e&&MarkUiUtils_1.MarkUiUtils.QuickGotoTeleport(this.u2o,e,()=>{this.Close()})}}GetResourceId(){return"UiItem_GeneralPanel_Prefab"}OnStart(){this.RootItem.SetRaycastTarget(!1),super.OnStart()}OnShowWorldMapSecondaryUi(e){this.u2o=e;var r=ModelManager_1.ModelManager.MapModel.GetMarkExtraShowState(this.u2o.MarkId).ShowFlag!==Protocol_1.Aki.Protocol.U5s.Proto_ShowDisable,t=!e.IsLocked,a=1===this.u2o.MarkConfig.EnableQuickTransfer,a=(this.ConfirmButton.SetActive(a&&t),this.ConfirmButton.SetEnableClick(t),this.UpdateQuickGotoActive(!a||!t,this.u2o),this.L2o(),this.u2o.GetTitleText());this.GetText(1).SetText(a),this.UpdateAreaTxt(this.u2o.GetAreaText()),this.GetText(4).ShowTextNew(this.u2o.GetLocaleDesc()),this.SetSpriteByPath(this.u2o.IconPath,this.GetSprite(0),!1),this.UpdateMultiMap(e);r?this.UpdateTopRightIconActive(this.u2o):(t=ConfigManager_1.ConfigManager.UiResourceConfig.GetResourcePath(WorldMapDefine_1.BLOCK_MARK_ICON_PATH),this.UpdateTopRightIcon(!0,t)),this.GetVerticalLayout(7).RootUIComp.SetUIActive(!1),this.GetItem(6).SetUIActive(!1),this.GetItem(14).SetUIActive(!1),this.RootItem.SetUIActive(!0)}L2o(){this.u2o&&(this.ConfirmButton.SetLocalText("TeleportFastMove"),this.TrackBtn.SetLocalText(this.u2o.IsTracked?"InstanceDungeonEntranceCancelTrack":"InstanceDungeonEntranceTrack"))}}exports.CommonGamePlayPanel=CommonGamePlayPanel;
//# sourceMappingURL=CommonGamePlayPanel.js.map