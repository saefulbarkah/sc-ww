
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbLevelPlayComponent=void 0;class FbLevelPlayComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.xyh=!1,this.wyh=0}static Create(t){if(t)return new FbLevelPlayComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get LevelPlayId(){return this.xyh||(this.xyh=!0,this.wyh=this.FbDataInternal.levelPlayId()),this.wyh}}exports.FbLevelPlayComponent=FbLevelPlayComponent;
//# sourceMappingURL=FbLevelPlayComponent.js.map