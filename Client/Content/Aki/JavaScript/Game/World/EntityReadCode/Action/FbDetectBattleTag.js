
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbDetectBattleTag=void 0;const UnionDetectBattleTagTypeHelper_1=require("./UnionDetectBattleTagTypeHelper");class FbDetectBattleTag{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.j1h=!1,this.I9o=0,this.$vh=!1,this.Xvh=void 0,this.Yvh=!1,this.zvh=0}static Create(t){if(t)return new FbDetectBattleTag(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get EntityId(){return this.j1h||(this.j1h=!0,this.I9o=this.FbDataInternal.entityId()),this.I9o}get TagOption(){var t,e;return!this.$vh&&(this.$vh=!0,t=this.FbDataInternal.tagOptionType(),e=UnionDetectBattleTagTypeHelper_1.UnionDetectBattleTagTypeHelper.GetUnionDetectBattleTagTypeObject(t))&&(this.Xvh=UnionDetectBattleTagTypeHelper_1.UnionDetectBattleTagTypeHelper.ReadUnionDetectBattleTagType(t,this.FbDataInternal.tagOption(e))),this.Xvh}get MaxWaitTime(){return this.Yvh||(this.Yvh=!0,this.zvh=this.FbDataInternal.maxWaitTime()),this.zvh}}exports.FbDetectBattleTag=FbDetectBattleTag;
//# sourceMappingURL=FbDetectBattleTag.js.map