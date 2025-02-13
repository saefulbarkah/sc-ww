
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MarkUiUtils=void 0;const Log_1=require("../../../../../Core/Common/Log"),CommonParamById_1=require("../../../../../Core/Define/ConfigCommon/CommonParamById"),Vector_1=require("../../../../../Core/Utils/Math/Vector"),ConfigManager_1=require("../../../../Manager/ConfigManager"),ControllerHolder_1=require("../../../../Manager/ControllerHolder"),ModelManager_1=require("../../../../Manager/ModelManager"),ConfirmBoxDefine_1=require("../../../ConfirmBox/ConfirmBoxDefine"),GeneralLogicTreeUtil_1=require("../../../GeneralLogicTree/GeneralLogicTreeUtil"),TrackHelper_1=require("../../../Track/TrackHelper"),WorldMapController_1=require("../../../WorldMap/WorldMapController"),WorldMapDefine_1=require("../../../WorldMap/WorldMapDefine"),WorldMapSecondaryUiDefine_1=require("../../../WorldMap/WorldMapSecondaryUiDefine"),MapController_1=require("../../Controller/MapController"),MapDefine_1=require("../../MapDefine"),DynamicEntityMarkItem_1=require("../../Marks/MarkItem/DynamicEntityMarkItem"),FixedSceneGamePlayMarkItem_1=require("../../Marks/MarkItem/FixedSceneGamePlayMarkItem"),SceneGameplayMarkItem_1=require("../../Marks/MarkItem/SceneGameplayMarkItem"),TaskMarkItem_1=require("../../Marks/MarkItem/TaskMarkItem"),TeleportMarkItem_1=require("../../Marks/MarkItem/TeleportMarkItem"),TemporaryTeleportMarkItem_1=require("../../Marks/MarkItem/TemporaryTeleportMarkItem");class MarkUiUtils{static IsShowGoto(e){if(e instanceof TeleportMarkItem_1.TeleportMarkItem&&!e.IsActivity)return e.IsLocked;if(24!==e.MarkType){if(e instanceof SceneGameplayMarkItem_1.SceneGameplayMarkItem)return!!e.IsLocked||void 0===(r=ModelManager_1.ModelManager.LevelPlayModel.GetLevelPlayInfo(e.MarkConfig.RelativeId))||r.IsClose;if(e instanceof FixedSceneGamePlayMarkItem_1.FixedSceneGameplayMarkItem)return e.IsLocked}if(e instanceof TaskMarkItem_1.TaskMarkItem)return!0;if(25===e.MarkType||28===e.MarkType)return e.IsLocked;if(this.odl.has(e.MarkType))return!0;if(e instanceof DynamicEntityMarkItem_1.DynamicEntityMarkItem){var r=ConfigManager_1.ConfigManager.MapConfig.GetMonsterDetectionConfig(e.MarkConfigId);if(void 0!==r){r=r.DangerType;if(this.E8a.get(r)??!1)return!0}return"number"==typeof e.TrackTarget?!ModelManager_1.ModelManager.CreatureModel.CheckEntityVisible(e.TrackTarget):!0}return(WorldMapSecondaryUiDefine_1.markPanelTypeMap.get(e.MarkType)??WorldMapDefine_1.ESecondaryPanel.GeneralPanel)===WorldMapDefine_1.ESecondaryPanel.GeneralPanel}static FindNearbyValidGotoMark(e,r){var a=CommonParamById_1.configCommonParamById.GetIntConfig("QuickTransferRange")*MapDefine_1.UNIT,e=e.FindNearbyMarkItems(r.WorldPosition,a,e=>e!==r);for(const[r]of e){if(r instanceof TeleportMarkItem_1.TeleportMarkItem&&!r.IsLocked&&r.CanConditionShowView())return r;if(r instanceof TemporaryTeleportMarkItem_1.TemporaryTeleportMarkItem)return r;if((r instanceof FixedSceneGamePlayMarkItem_1.FixedSceneGameplayMarkItem||r instanceof SceneGameplayMarkItem_1.SceneGameplayMarkItem)&&!r.IsLocked&&!r.IsLordGym()){var o=ModelManager_1.ModelManager.LevelPlayModel.GetLevelPlayInfo(r.MarkConfig.RelativeId);if(o&&!o.IsClose)if(!ModelManager_1.ModelManager.MapModel.IsLevelPlayOccupied(o.Id).IsOccupied)return r}if(1===r.MarkItemType){o=r;if(1===o.MarkConfig.EnableQuickTransfer&&!o.IsLocked&&o.CanConditionShowView())return o}}}static QuickGotoTeleport(r,a,o){const n=GeneralLogicTreeUtil_1.GeneralLogicTreeUtil.GetPlayerLocation();if(n){let e=!0;if(e=a instanceof TeleportMarkItem_1.TeleportMarkItem?!a.IsLocked:e){const t=()=>{TrackHelper_1.TrackHelper.SetMarkItemTrack(r),a instanceof TemporaryTeleportMarkItem_1.TemporaryTeleportMarkItem&&MapController_1.MapController.RequestTeleportToTargetByTemporaryTeleport(a.TeleportId,o),1===a.MarkItemType&&WorldMapController_1.WorldMapController.TryTeleport(a.MarkConfigId,o)};var i=new ConfirmBoxDefine_1.ConfirmBoxDataNew(216);i.FunctionMap.set(2,()=>{var e=ModelManager_1.ModelManager.GameModeModel.InstanceDungeon.Id;!MarkUiUtils.IsDungeonBelongDiffMap(e,r.MapId)&&Vector_1.Vector.DistSquared(n,r.WorldPosition)<=Vector_1.Vector.DistSquared(a.WorldPosition,r.WorldPosition)?((e=new ConfirmBoxDefine_1.ConfirmBoxDataNew(223)).FunctionMap.set(2,()=>{t()}),ControllerHolder_1.ControllerHolder.ConfirmBoxController.ShowConfirmBoxNew(e)):t()}),ControllerHolder_1.ControllerHolder.ConfirmBoxController.ShowConfirmBoxNew(i)}}else Log_1.Log.CheckError()&&Log_1.Log.Error("Map",63,"[地图系统]MarkUiUtils->没有玩家坐标，快速前往失败",["markId",a.MarkId])}static IsDungeonBelongDiffMap(e,r){var a=ConfigManager_1.ConfigManager.WorldMapConfig.GetDungeonConfig(e),o=ConfigManager_1.ConfigManager.WorldMapConfig.GetDungeonConfig(r);return(a?.MapConfigId??e)!==(o?.MapConfigId??r)}}(exports.MarkUiUtils=MarkUiUtils).E8a=new Map([[0,!0],[1,!0],[2,!1],[3,!1]]),MarkUiUtils.odl=new Set([26]);
//# sourceMappingURL=MarkUiUtils.js.map