
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbPlayBubble=void 0;const FbBubbleIndex_1=require("./FbBubbleIndex");class FbPlayBubble{constructor(t){this.FbDataInternal=t,this.j1h=!1,this.I9o=0,this.M_h=!1,this.E_h=void 0}static Create(t){if(t)return new FbPlayBubble(t)}get EntityId(){return this.j1h||(this.j1h=!0,this.I9o=this.FbDataInternal.entityId()),this.I9o}get Flow(){return this.M_h||(this.M_h=!0,this.E_h=FbBubbleIndex_1.FbBubbleIndex.Create(this.FbDataInternal.flow())),this.E_h}}exports.FbPlayBubble=FbPlayBubble;
//# sourceMappingURL=FbPlayBubble.js.map