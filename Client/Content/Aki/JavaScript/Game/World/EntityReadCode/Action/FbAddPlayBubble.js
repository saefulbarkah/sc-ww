
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbAddPlayBubble=void 0;const FbBubbleIndex_1=require("./FbBubbleIndex");class FbAddPlayBubble{constructor(t){this.FbDataInternal=t,this.V_h=!1,this.j_h=void 0,this.Cmh=!1,this.gmh=0,this.fmh=!1,this.pmh=0,this.M_h=!1,this.E_h=void 0,this.vmh=!1,this.ymh=0,this.Smh=!1,this.wer=!1}static Create(t){if(t)return new FbAddPlayBubble(t)}get EntityIds(){if(!this.V_h){this.V_h=!0,this.j_h=new Array;var i=this.FbDataInternal.entityIdsLength();if(i)for(let t=0;t<i;++t)this.j_h.push(this.FbDataInternal.entityIds(t))}return this.j_h}get EnterRadius(){return this.Cmh||(this.Cmh=!0,this.gmh=this.FbDataInternal.enterRadius()),this.gmh}get LeaveRadius(){return this.fmh||(this.fmh=!0,this.pmh=this.FbDataInternal.leaveRadius()),this.pmh}get Flow(){return this.M_h||(this.M_h=!0,this.E_h=FbBubbleIndex_1.FbBubbleIndex.Create(this.FbDataInternal.flow())),this.E_h}get WaitTime(){return this.vmh||(this.vmh=!0,this.ymh=this.FbDataInternal.waitTime()),this.ymh}get RedDot(){return this.Smh||(this.Smh=!0,this.wer=this.FbDataInternal.redDot()),this.wer}}exports.FbAddPlayBubble=FbAddPlayBubble;
//# sourceMappingURL=FbAddPlayBubble.js.map