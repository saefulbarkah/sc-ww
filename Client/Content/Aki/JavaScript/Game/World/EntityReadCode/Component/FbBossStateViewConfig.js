
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbBossStateViewConfig=void 0;class FbBossStateViewConfig{constructor(t){this.FbDataInternal=t,this.ojh=!1,this.njh=void 0,this.sjh=!1,this.ajh=void 0,this.hjh=!1,this.ljh=void 0,this._jh=!1,this.cjh=void 0,this.ujh=!1,this.djh=!1,this.mjh=!1,this.Cjh=0}static Create(t){if(t)return new FbBossStateViewConfig(t)}get BossStateViewType(){return this.ojh||(this.ojh=!0,this.njh=this.FbDataInternal.bossStateViewType()),this.njh}get TidBossSubTitle(){return this.sjh||(this.sjh=!0,this.ajh=this.FbDataInternal.tidBossSubTitle()),this.ajh}get BossStateInfoShowType(){return this.hjh||(this.hjh=!0,this.ljh=this.FbDataInternal.bossStateInfoShowType()),this.ljh}get TidLevelText(){return this._jh||(this._jh=!0,this.cjh=this.FbDataInternal.tidLevelText()),this.cjh}get OnlyShowInBattleState(){return this.ujh||(this.ujh=!0,this.djh=this.FbDataInternal.onlyShowInBattleState()),this.djh}get ShowDistance(){return this.mjh||(this.mjh=!0,this.Cjh=this.FbDataInternal.showDistance()),this.Cjh}}exports.FbBossStateViewConfig=FbBossStateViewConfig;
//# sourceMappingURL=FbBossStateViewConfig.js.map