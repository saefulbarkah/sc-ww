
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbBattleSettlement=void 0;class FbBattleSettlement{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.C8l=!1,this.g8l=0}static Create(t){if(t)return new FbBattleSettlement(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get GamePlayCue(){return this.C8l||(this.C8l=!0,this.g8l=this.FbDataInternal.gamePlayCue()),this.g8l}}exports.FbBattleSettlement=FbBattleSettlement;
//# sourceMappingURL=FbBattleSettlement.js.map