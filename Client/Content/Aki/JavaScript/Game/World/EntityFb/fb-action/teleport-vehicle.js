
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TeleportVehicle=void 0;const flatbuffers=require("../../../../RunTimeLibs/FlatBuffers/flatbuffers"),union_target_vehicle_js_1=require("../fb-action/union-target-vehicle.js"),vector_info_js_1=require("../fb-var/vector-info.js");class TeleportVehicle{constructor(){this.bb=void 0,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsTeleportVehicle(e,t){return(t||new TeleportVehicle).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTeleportVehicle(e,t){return e.setPosition(e.position()+flatbuffers.SIZE_PREFIX_LENGTH),(t||new TeleportVehicle).__init(e.readInt32(e.position())+e.position(),e)}targetVehicleType(){var e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint8(this.bb_pos+e):union_target_vehicle_js_1.UnionTargetVehicle.NONE}targetVehicle(e){var t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__union(e,this.bb_pos+t):void 0}pos(e){var t=this.bb.__offset(this.bb_pos,8);return t?(e||new vector_info_js_1.VectorInfo).__init(this.bb.__indirect(this.bb_pos+t),this.bb):void 0}rot(e){var t=this.bb.__offset(this.bb_pos,10);return t?(e||new vector_info_js_1.VectorInfo).__init(this.bb.__indirect(this.bb_pos+t),this.bb):void 0}static startTeleportVehicle(e){e.startObject(4)}static addTargetVehicleType(e,t){e.addFieldInt8(0,t,union_target_vehicle_js_1.UnionTargetVehicle.NONE)}static addTargetVehicle(e,t){e.addFieldOffset(1,t,0)}static addPos(e,t){e.addFieldOffset(2,t,0)}static addRot(e,t){e.addFieldOffset(3,t,0)}static endTeleportVehicle(e){return e.endObject()}}exports.TeleportVehicle=TeleportVehicle;
//# sourceMappingURL=teleport-vehicle.js.map