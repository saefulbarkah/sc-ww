
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TriggeredEntity=void 0;const flatbuffers=require("../../../../RunTimeLibs/FlatBuffers/flatbuffers");class TriggeredEntity{constructor(){this.bb=void 0,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTriggeredEntity(t,e){return(e||new TriggeredEntity).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTriggeredEntity(t,e){return t.setPosition(t.position()+flatbuffers.SIZE_PREFIX_LENGTH),(e||new TriggeredEntity).__init(t.readInt32(t.position())+t.position(),t)}type(t){var e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):void 0}static startTriggeredEntity(t){t.startObject(1)}static addType(t,e){t.addFieldOffset(0,e,0)}static endTriggeredEntity(t){return t.endObject()}static createTriggeredEntity(t,e){return TriggeredEntity.startTriggeredEntity(t),TriggeredEntity.addType(t,e),TriggeredEntity.endTriggeredEntity(t)}}exports.TriggeredEntity=TriggeredEntity;
//# sourceMappingURL=triggered-entity.js.map