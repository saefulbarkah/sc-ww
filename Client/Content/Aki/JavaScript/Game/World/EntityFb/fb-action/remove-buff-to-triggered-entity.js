
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RemoveBuffToTriggeredEntity=void 0;const flatbuffers=require("../../../../RunTimeLibs/FlatBuffers/flatbuffers");class RemoveBuffToTriggeredEntity{constructor(){this.bb=void 0,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsRemoveBuffToTriggeredEntity(t,e){return(e||new RemoveBuffToTriggeredEntity).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRemoveBuffToTriggeredEntity(t,e){return t.setPosition(t.position()+flatbuffers.SIZE_PREFIX_LENGTH),(e||new RemoveBuffToTriggeredEntity).__init(t.readInt32(t.position())+t.position(),t)}buffIds(t){var e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt64(this.bb.__vector(this.bb_pos+e)+8*t):BigInt(0)}buffIdsLength(){var t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}static startRemoveBuffToTriggeredEntity(t){t.startObject(1)}static addBuffIds(t,e){t.addFieldOffset(0,e,0)}static createBuffIdsVector(e,r){e.startVector(8,r.length,8);for(let t=r.length-1;0<=t;t--)e.addInt64(r[t]);return e.endVector()}static startBuffIdsVector(t,e){t.startVector(8,e,8)}static endRemoveBuffToTriggeredEntity(t){return t.endObject()}static createRemoveBuffToTriggeredEntity(t,e){return RemoveBuffToTriggeredEntity.startRemoveBuffToTriggeredEntity(t),RemoveBuffToTriggeredEntity.addBuffIds(t,e),RemoveBuffToTriggeredEntity.endRemoveBuffToTriggeredEntity(t)}}exports.RemoveBuffToTriggeredEntity=RemoveBuffToTriggeredEntity;
//# sourceMappingURL=remove-buff-to-triggered-entity.js.map