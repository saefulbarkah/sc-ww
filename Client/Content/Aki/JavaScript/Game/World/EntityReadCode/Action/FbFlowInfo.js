
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbFlowInfo=void 0;const fb_action_1=require("../../../../Game/World/EntityFb/fb-action"),FbStateInfo_1=require("./FbStateInfo"),UnionVarContextHelper_1=require("./UnionVarContextHelper");class FbFlowInfo{constructor(t){this.FbDataInternal=t,this.IRh=!1,this.TRh=void 0,this.bRh=!1,this.LRh=void 0,this.ARh=!1,this.RRh=void 0,this.xRh=!1,this.wRh=void 0,this.tgh=!1,this.FFe=0,this.c_h=!1,this.FGi=void 0,this.MMh=!1,this.EMh=0,this.ogh=!1,this.ngh=!1,this.PRh=!1,this.URh=void 0,this.DRh=!1,this.BRh=void 0}static Create(t){if(t)return new FbFlowInfo(t)}get ObjType(){return this.IRh||(this.IRh=!0,this.TRh=this.FbDataInternal.objType()),this.TRh}get Children(){if(!this.bRh){this.bRh=!0,this.LRh=new Array;var i=this.FbDataInternal.childrenLength();if(i)for(let t=0;t<i;++t)this.LRh.push(this.FbDataInternal.children(t))}return this.LRh}get Reference(){if(!this.ARh){this.ARh=!0,this.RRh=new Array;var i=this.FbDataInternal.referenceLength();if(i)for(let t=0;t<i;++t)this.RRh.push(this.FbDataInternal.reference(t))}return this.RRh}get WeakReference(){if(!this.xRh){this.xRh=!0,this.wRh=new Array;var i=this.FbDataInternal.weakReferenceLength();if(i)for(let t=0;t<i;++t)this.wRh.push(this.FbDataInternal.weakReference(t))}return this.wRh}get Id(){return this.tgh||(this.tgh=!0,this.FFe=this.FbDataInternal.id()),this.FFe}get Name(){return this.c_h||(this.c_h=!0,this.FGi=this.FbDataInternal.name()),this.FGi}get DungeonId(){return this.MMh||(this.MMh=!0,this.EMh=this.FbDataInternal.dungeonId()),this.EMh}get _folded(){return this.ogh||(this.ogh=!0,this.ngh=this.FbDataInternal.folded()),this.ngh}get VarContext(){var t,i;return!this.PRh&&(this.PRh=!0,t=this.FbDataInternal.varContextType(),i=UnionVarContextHelper_1.UnionVarContextHelper.GetUnionVarContextObject(t))&&(this.URh=UnionVarContextHelper_1.UnionVarContextHelper.ReadUnionVarContext(t,this.FbDataInternal.varContext(i))),this.URh}get States(){if(!this.DRh){this.DRh=!0,this.BRh=new Array;var i=this.FbDataInternal.statesLength();if(i)for(let t=0;t<i;++t){var s=this.FbDataInternal.states(t,new fb_action_1.StateInfo);this.BRh.push(FbStateInfo_1.FbStateInfo.Create(s))}}return this.BRh}}exports.FbFlowInfo=FbFlowInfo;
//# sourceMappingURL=FbFlowInfo.js.map