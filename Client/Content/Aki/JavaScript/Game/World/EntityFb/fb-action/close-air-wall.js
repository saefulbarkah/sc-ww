
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CloseAirWall=void 0;const flatbuffers=require("../../../../RunTimeLibs/FlatBuffers/flatbuffers");class CloseAirWall{constructor(){this.bb=void 0,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsCloseAirWall(t,e){return(e||new CloseAirWall).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsCloseAirWall(t,e){return t.setPosition(t.position()+flatbuffers.SIZE_PREFIX_LENGTH),(e||new CloseAirWall).__init(t.readInt32(t.position())+t.position(),t)}type(t){var e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):void 0}static startCloseAirWall(t){t.startObject(1)}static addType(t,e){t.addFieldOffset(0,e,0)}static endCloseAirWall(t){return t.endObject()}static createCloseAirWall(t,e){return CloseAirWall.startCloseAirWall(t),CloseAirWall.addType(t,e),CloseAirWall.endCloseAirWall(t)}}exports.CloseAirWall=CloseAirWall;
//# sourceMappingURL=close-air-wall.js.map