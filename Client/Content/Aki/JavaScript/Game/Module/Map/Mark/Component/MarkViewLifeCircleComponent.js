
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MarkViewLifeCircleComponent=void 0;const MapComponent_1=require("../../Base/MapComponent"),PropertyMap_1=require("../../Container/PropertyMap");class MarkViewLifeCircleComponent extends MapComponent_1.MapComponent{constructor(){super(...arguments),this.ChildViewVisibleStateMap=new PropertyMap_1.PropertyMap}get ComponentType(){return 10}SetChildViewVisibility(e,t){this.ChildViewVisibleStateMap.set(e,t)}IsChildViewVisible(e,t=!1){return this.ChildViewVisibleStateMap.tryGet(e,t)}IsChildViewStateDirty(e){return this.ChildViewVisibleStateMap.isDirty(e)}OnRemove(){this.ChildViewVisibleStateMap.clear()}}exports.MarkViewLifeCircleComponent=MarkViewLifeCircleComponent;
//# sourceMappingURL=MarkViewLifeCircleComponent.js.map