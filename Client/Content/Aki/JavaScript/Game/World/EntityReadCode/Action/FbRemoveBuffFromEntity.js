
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbRemoveBuffFromEntity=void 0;class FbRemoveBuffFromEntity{constructor(t){this.FbDataInternal=t,this.a_h=!1,this.I9o=0,this.V1h=!1,this.j1h=void 0,this.Vph=!1,this.jph=void 0}static Create(t){if(t)return new FbRemoveBuffFromEntity(t)}get EntityId(){return this.a_h||(this.a_h=!0,this.I9o=this.FbDataInternal.entityId()),this.I9o}get EntityIds(){if(!this.V1h){this.V1h=!0,this.j1h=new Array;var i=this.FbDataInternal.entityIdsLength();if(i)for(let t=0;t<i;++t)this.j1h.push(this.FbDataInternal.entityIds(t))}return this.j1h}get BuffIds(){if(!this.Vph){this.Vph=!0,this.jph=new Array;var i=this.FbDataInternal.buffIdsLength();if(i)for(let t=0;t<i;++t)this.jph.push(Number(this.FbDataInternal.buffIds(t)??0))}return this.jph}}exports.FbRemoveBuffFromEntity=FbRemoveBuffFromEntity;
//# sourceMappingURL=FbRemoveBuffFromEntity.js.map