
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VehicleWaterfallClimbing=void 0;const flatbuffers=require("../../../../RunTimeLibs/FlatBuffers/flatbuffers");class VehicleWaterfallClimbing{constructor(){this.bb=void 0,this.bb_pos=0}__init(e,i){return this.bb_pos=e,this.bb=i,this}static getRootAsVehicleWaterfallClimbing(e,i){return(i||new VehicleWaterfallClimbing).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsVehicleWaterfallClimbing(e,i){return e.setPosition(e.position()+flatbuffers.SIZE_PREFIX_LENGTH),(i||new VehicleWaterfallClimbing).__init(e.readInt32(e.position())+e.position(),e)}splineEntityId(){var e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt32(this.bb_pos+e):0}static startVehicleWaterfallClimbing(e){e.startObject(1)}static addSplineEntityId(e,i){e.addFieldInt32(0,i,0)}static endVehicleWaterfallClimbing(e){return e.endObject()}static createVehicleWaterfallClimbing(e,i){return VehicleWaterfallClimbing.startVehicleWaterfallClimbing(e),VehicleWaterfallClimbing.addSplineEntityId(e,i),VehicleWaterfallClimbing.endVehicleWaterfallClimbing(e)}}exports.VehicleWaterfallClimbing=VehicleWaterfallClimbing;
//# sourceMappingURL=vehicle-waterfall-climbing.js.map