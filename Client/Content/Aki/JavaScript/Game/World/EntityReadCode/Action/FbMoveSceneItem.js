
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbMoveSceneItem=void 0;const UnionMoveSceneItemHelper_1=require("./UnionMoveSceneItemHelper");class FbMoveSceneItem{constructor(e){this.FbDataInternal=e,this.j1h=!1,this.I9o=0,this.kEh=!1,this.GEh=!1,this.OEh=!1,this.FEh=void 0,this.yQl=!1,this.SQl=!1}static Create(e){if(e)return new FbMoveSceneItem(e)}get EntityId(){return this.j1h||(this.j1h=!0,this.I9o=this.FbDataInternal.entityId()),this.I9o}get StopBeforeMove(){return this.kEh||(this.kEh=!0,this.GEh=this.FbDataInternal.stopBeforeMove()),this.GEh}get MoveConfig(){var e,t;return!this.OEh&&(this.OEh=!0,e=this.FbDataInternal.moveConfigType(),t=UnionMoveSceneItemHelper_1.UnionMoveSceneItemHelper.GetUnionMoveSceneItemObject(e))&&(this.FEh=UnionMoveSceneItemHelper_1.UnionMoveSceneItemHelper.ReadUnionMoveSceneItem(e,this.FbDataInternal.moveConfig(t))),this.FEh}get BypassClientResponse(){return this.yQl||(this.yQl=!0,this.SQl=this.FbDataInternal.bypassClientResponse()),this.SQl}}exports.FbMoveSceneItem=FbMoveSceneItem;
//# sourceMappingURL=FbMoveSceneItem.js.map