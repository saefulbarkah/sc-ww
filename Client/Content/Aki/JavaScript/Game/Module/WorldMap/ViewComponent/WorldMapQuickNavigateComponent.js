
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WorldMapQuickNavigateComponent=void 0;const EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),ModelManager_1=require("../../../Manager/ModelManager"),MapComponent_1=require("../../Map/Base/MapComponent");class WorldMapQuickNavigateComponent extends MapComponent_1.MapComponent{constructor(){super(...arguments),this.YNl=e=>this.NavigateTo(e.MarkId,e.MarkType,e.Focal,e.FocusTween),this.NavigateTo=(e,t,n=!1,o=!0)=>{var a=this.GetNavigateMarkIsNeedChangeMap(e,t);return void 0!==a?(EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.WorldMapChangeMap,e,t,a,n,o),!0):(EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.WorldMapFocalMarkItem,e,t,n,o),!1)}}get ComponentType(){return 7}OnEnable(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.WorldMapNavigate,this.YNl)}OnDisable(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.WorldMapNavigate,this.YNl)}GetNavigateMarkIsNeedChangeMap(e,t){var n=this.Parent,o=n.Map?.GetMarkItem(t,e),o=o?o.MapId:ModelManager_1.ModelManager.MapModel.GetMarkMapConfigId(e,t);return o!==n.MapId?o:void 0}}exports.WorldMapQuickNavigateComponent=WorldMapQuickNavigateComponent;
//# sourceMappingURL=WorldMapQuickNavigateComponent.js.map