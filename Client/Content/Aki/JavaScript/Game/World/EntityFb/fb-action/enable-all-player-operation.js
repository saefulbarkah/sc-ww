
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EnableAllPlayerOperation=void 0;const flatbuffers=require("../../../../RunTimeLibs/FlatBuffers/flatbuffers");class EnableAllPlayerOperation{constructor(){this.bb=void 0,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsEnableAllPlayerOperation(e,t){return(t||new EnableAllPlayerOperation).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsEnableAllPlayerOperation(e,t){return e.setPosition(e.position()+flatbuffers.SIZE_PREFIX_LENGTH),(t||new EnableAllPlayerOperation).__init(e.readInt32(e.position())+e.position(),e)}type(e){var t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):void 0}static startEnableAllPlayerOperation(e){e.startObject(1)}static addType(e,t){e.addFieldOffset(0,t,0)}static endEnableAllPlayerOperation(e){return e.endObject()}static createEnableAllPlayerOperation(e,t){return EnableAllPlayerOperation.startEnableAllPlayerOperation(e),EnableAllPlayerOperation.addType(e,t),EnableAllPlayerOperation.endEnableAllPlayerOperation(e)}}exports.EnableAllPlayerOperation=EnableAllPlayerOperation;
//# sourceMappingURL=enable-all-player-operation.js.map