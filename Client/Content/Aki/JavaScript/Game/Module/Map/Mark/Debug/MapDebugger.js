
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MapDebugger=void 0;const ConfigManager_1=require("../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../Manager/ModelManager"),ServerMarkItem_1=require("../../Marks/MarkItem/ServerMarkItem"),MapLogger_1=require("../../Misc/MapLogger"),MarkUiUtils_1=require("../Misc/MarkUiUtils");class MapDebugger{static uvc(e,r){var a=(r instanceof ServerMarkItem_1.ServerMarkItem?r.EntityConfigId:r.MarkItemEntity.GetComponent(15)?.Config?.EntityConfigId)??0,e=MarkUiUtils_1.MarkUiUtils.FindNearbyValidGotoMark(e,r);return`
        ------------------------标记信息Start--------------------

        标记Id:${r.MarkId}

        标记类型Type:${r.MarkType}

        地图类型Type:${r.MapType}

        地图Id:${r.MapId}

        副本Id:${r.InstanceDungeonId}

        追踪区域Id(不一定有值):${r.TrackAreaId}

        区域Id:${ConfigManager_1.ConfigManager.MapConfig.GetEntityConfigByMapIdAndEntityId(r.MapId,a)?.AreaId??0}

        区域名字:${ModelManager_1.ModelManager.MapModel.GetMarkAreaText(r.MapId,a)}

        分层地图Id:${r.GetMultiMapId()}

        是否分层标记:${r.IsMultiMap()}

        世界坐标X:${r.WorldPosition.X},
        世界坐标Y:${r.WorldPosition.Y},
        世界坐标Z:${r.WorldPosition.Z}

        Ui坐标X:${r.UiPosition.X},
        Ui坐标Y:${r.UiPosition.Y},
        Ui坐标Z:${r.UiPosition.Z}

        重力方向:${r.MarkItemEntity.GamePlay.Gravity}

        是否在对应的重力面:${r.MarkItemEntity.GamePlay.InGravityLayer}

        配置Id:${r.MarkItemEntity.GetComponent(15)?.Config?.MarkId}

        玩法Id:${r.MarkItemEntity.GetComponent(15)?.Config?.RelativeId}

        玩法绑定的副本Id:${r.MarkItemEntity.GetComponent(15)?.Config?.RelativeDungeonId}

        绑定的实体Id:${a}

        玩法是否被清场:${r.MarkItemEntity.GamePlay.IsHide}

        传送点被锁或被禁用:${r.MarkItemEntity.GamePlay.IsTeleportLocked}

        玩法状态:${r.MarkItemEntity.GamePlay.GamePlayState}

        附近可前往的标记信息-MarkId:${e?.MarkId}

        ------------------------标记信息End------------------`}static PrintMarkItemDumpInfo(e,r){MapLogger_1.MapLogger.Error(63,"地图调试信息->当前标记ItemDump信息",["标记信息",MapDebugger.uvc(e,r)])}}exports.MapDebugger=MapDebugger;
//# sourceMappingURL=MapDebugger.js.map