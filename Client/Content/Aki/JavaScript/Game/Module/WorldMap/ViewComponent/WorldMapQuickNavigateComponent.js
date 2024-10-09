
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WorldMapQuickNavigateComponent=void 0;const EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),MapComponent_1=require("../../Map/Base/MapComponent"),MapUtil_1=require("../../Map/MapUtil");class WorldMapQuickNavigateComponent extends MapComponent_1.MapComponent{constructor(){super(...arguments),this.NavigateTo=(e,t,n=!1,o=!0)=>{var i=this.Parent,s=MapUtil_1.MapUtil.GetMarkBelongMapId(e,t);return s!==i.MapId?(EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.WorldMapChangeMap,e,t,s,n,o),!0):(EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.WorldMapFocalMarkItem,e,t,n,o),!1)}}get ComponentType(){return 7}OnEnable(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.WorldMapNavigate,this.NavigateTo)}OnDisable(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.WorldMapNavigate,this.NavigateTo)}}exports.WorldMapQuickNavigateComponent=WorldMapQuickNavigateComponent;
//# sourceMappingURL=WorldMapQuickNavigateComponent.js.map