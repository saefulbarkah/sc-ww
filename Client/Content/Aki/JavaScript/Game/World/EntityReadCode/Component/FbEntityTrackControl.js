
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbEntityTrackControl=void 0;const fb_component_1=require("../../../../Game/World/EntityFb/fb-component"),FbEntityTrackControlPoint_1=require("./FbEntityTrackControlPoint");class FbEntityTrackControl{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.j1h=!1,this.I9o=0,this.h9h=!1,this.l9h=void 0}static Create(t){if(t)return new FbEntityTrackControl(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get EntityId(){return this.j1h||(this.j1h=!0,this.I9o=this.FbDataInternal.entityId()),this.I9o}get ControlPoints(){if(!this.h9h){this.h9h=!0,this.l9h=new Array;var i=this.FbDataInternal.controlPointsLength();if(i)for(let t=0;t<i;++t){var r=this.FbDataInternal.controlPoints(t,new fb_component_1.EntityTrackControlPoint);this.l9h.push(FbEntityTrackControlPoint_1.FbEntityTrackControlPoint.Create(r))}}return this.l9h}}exports.FbEntityTrackControl=FbEntityTrackControl;
//# sourceMappingURL=FbEntityTrackControl.js.map