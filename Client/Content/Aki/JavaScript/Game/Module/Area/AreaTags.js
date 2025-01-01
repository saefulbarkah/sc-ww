
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AreaTags=void 0;const EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),ConfigManager_1=require("../../Manager/ConfigManager"),ModelManager_1=require("../../Manager/ModelManager"),FormationDataController_1=require("../Abilities/FormationDataController");class AreaTags{constructor(){this.nye=()=>{ModelManager_1.ModelManager.AreaModel?.AreaInfo&&(EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.ChangeArea,this.Hje),this.Hje(void 0,ModelManager_1.ModelManager.AreaModel.AreaInfo.AreaId))},this.uMe=()=>{ModelManager_1.ModelManager.AreaModel?.AreaInfo&&(EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.ChangeArea,this.Hje),this.Hje(ModelManager_1.ModelManager.AreaModel.AreaInfo.AreaId,void 0))},this.Hje=(e,t)=>{var r=new Map;let n=t??0;for(var a=new Set;0!==n;){a.add(n);var o=ConfigManager_1.ConfigManager.AreaConfig.GetAreaInfo(n);if(o?.EnterAreaTags?.size)for(var[i,s]of o.EnterAreaTags)r.has(i)||r.set(i,s);n=o?.Father??0}for(n=e??0;0!==n&&!a.has(n);){var _=ConfigManager_1.ConfigManager.AreaConfig.GetAreaInfo(n);if(_?.LeaveAreaTags?.size)for(var[v,l]of _.LeaveAreaTags)r.has(v)||r.set(v,l);n=_?.Father??0}this.d3l(r)}}Init(){this.dde()}Destroy(){this.Cde()}dde(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.WorldDone,this.nye),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.ClearWorld,this.uMe)}Cde(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.WorldDone,this.nye),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.ClearWorld,this.uMe)}d3l(e){var t,r,n=ModelManager_1.ModelManager.CreatureModel.GetPlayerId(),a=FormationDataController_1.FormationDataController.IsPlayerExist(n);for([t,r]of e)0===r?a&&FormationDataController_1.FormationDataController.HasPlayerTag(n,t)&&FormationDataController_1.FormationDataController.RemovePlayerTag(n,t):1===r&&a&&!FormationDataController_1.FormationDataController.HasPlayerTag(n,t)&&FormationDataController_1.FormationDataController.AddPlayerTag(n,t)}}exports.AreaTags=AreaTags;
//# sourceMappingURL=AreaTags.js.map