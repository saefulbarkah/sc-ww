
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WorldMapConfig=void 0;const Log_1=require("../../../Core/Common/Log"),CommonParamById_1=require("../../../Core/Define/ConfigCommon/CommonParamById"),AkiMapAll_1=require("../../../Core/Define/ConfigQuery/AkiMapAll"),AkiMapSourceByMapId_1=require("../../../Core/Define/ConfigQuery/AkiMapSourceByMapId"),AudioById_1=require("../../../Core/Define/ConfigQuery/AudioById"),ConditionGroupById_1=require("../../../Core/Define/ConfigQuery/ConditionGroupById"),CustomMarkAll_1=require("../../../Core/Define/ConfigQuery/CustomMarkAll"),ExploreProgressById_1=require("../../../Core/Define/ConfigQuery/ExploreProgressById"),InstanceDungeonAll_1=require("../../../Core/Define/ConfigQuery/InstanceDungeonAll"),InstanceDungeonById_1=require("../../../Core/Define/ConfigQuery/InstanceDungeonById"),MapFogByAreaId_1=require("../../../Core/Define/ConfigQuery/MapFogByAreaId"),MapFogByFog_1=require("../../../Core/Define/ConfigQuery/MapFogByFog"),MapNoteById_1=require("../../../Core/Define/ConfigQuery/MapNoteById"),PunishReportById_1=require("../../../Core/Define/ConfigQuery/PunishReportById"),TeleporterById_1=require("../../../Core/Define/ConfigQuery/TeleporterById"),ConfigBase_1=require("../../../Core/Framework/ConfigBase");class WorldMapConfig extends ConfigBase_1.ConfigBase{constructor(){super(...arguments),this.vYa=new Map,this.tCl=new Map,this.iCl=new Map}OnInit(){var e=AkiMapAll_1.configAkiMapAll.GetConfigList(),e=(e?e.forEach(e=>{this.vYa.set(e.MapId,e)}):Log_1.Log.CheckError()&&Log_1.Log.Error("Map",63,"[地图系统]->不存在地图配置，请联系策划检查akiMap配置!"),InstanceDungeonAll_1.configInstanceDungeonAll.GetConfigList());return e&&e.forEach(e=>{this.tCl.set(e.Id,e),this.iCl.set(e.MapConfigId,e)}),!0}OnClear(){return this.vYa.clear(),this.tCl.clear(),this.iCl.clear(),!0}IsInBigWorld(e){let r=this.tCl.get(e);return(void 0!==r||void 0!==(r=this.iCl.get(e)))&&13===r.InstSubType}GetCommonValue(e){return CommonParamById_1.configCommonParamById.GetIntConfig(e)??0}GetCommonIntArray(e){return CommonParamById_1.configCommonParamById.GetIntArrayConfig(e)}GetCustomMarks(){return CustomMarkAll_1.configCustomMarkAll.GetConfigList()}GetAreaId(e){var r=TeleporterById_1.configTeleporterById.GetConfig(e);return r?r.AreaId:(Log_1.Log.CheckError()&&Log_1.Log.Error("Map",18,"传送表找不到配置",["Id",e]),0)}GetTeleportEntityConfigId(e){var r=TeleporterById_1.configTeleporterById.GetConfig(e);return r?r.TeleportEntityConfigId:(Log_1.Log.CheckError()&&Log_1.Log.Error("Map",18,"传送表找不到配置",["Id",e]),0)}GetAkiMapConfig(e,r=!0){var o=this.vYa.get(e);return!o&&r&&Log_1.Log.CheckError()&&Log_1.Log.Error("Map",18,"AkiMap表找不到配置",["MapId",e]),o}GetAkiMapSourceConfig(e){var r=AkiMapSourceByMapId_1.configAkiMapSourceByMapId.GetConfig(e);return r||Log_1.Log.CheckError()&&Log_1.Log.Error("Map",39,"AkiMapSource表找不到配置",["MapId",e]),r}GetAudioConfig(e){var r=AudioById_1.configAudioById.GetConfig(e);return r||Log_1.Log.CheckError()&&Log_1.Log.Error("Map",18,"Audio表找不到配置",["Id",e]),r}GetDailyTaskMarkItem(e){var r=MapNoteById_1.configMapNoteById.GetConfig(1).MarkIdMap.get(e);return r||Log_1.Log.CheckError()&&Log_1.Log.Error("Map",49,"d.地图便签表DailyMarkId列找不到对应配置",["国家Id:",e]),r}GetExploreProgressInfoById(e){var r=ExploreProgressById_1.configExploreProgressById.GetConfig(e);return r||Log_1.Log.CheckError()&&Log_1.Log.Error("Map",49,`t.探索度配置表
            找不到对应配置`,["Id",e]),r}GetInstanceDungeonConfig(e){return InstanceDungeonById_1.configInstanceDungeonById.GetConfig(e)}GetPunishReportConfig(e){return PunishReportById_1.configPunishReportById.GetConfig(e)}GetConditionGroup(e){return ConditionGroupById_1.configConditionGroupById.GetConfig(e)}GetMapFogConfig(e){return MapFogByFog_1.configMapFogByFog.GetConfig(e)}GetMapFogConfigByAreaId(e){return MapFogByAreaId_1.configMapFogByAreaId.GetConfigList(e)}}exports.WorldMapConfig=WorldMapConfig;
//# sourceMappingURL=WorldMapConfig.js.map