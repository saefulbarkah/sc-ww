
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CommonSplinePoint=void 0;const flatbuffers=require("../../../../RunTimeLibs/FlatBuffers/flatbuffers"),vector_info_js_1=require("../fb-var/vector-info.js");class CommonSplinePoint{constructor(){this.bb=void 0,this.bb_pos=0}__init(t,i){return this.bb_pos=t,this.bb=i,this}static getRootAsCommonSplinePoint(t,i){return(i||new CommonSplinePoint).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsCommonSplinePoint(t,i){return t.setPosition(t.position()+flatbuffers.SIZE_PREFIX_LENGTH),(i||new CommonSplinePoint).__init(t.readInt32(t.position())+t.position(),t)}position(t){var i=this.bb.__offset(this.bb_pos,4);return i?(t||new vector_info_js_1.VectorInfo).__init(this.bb.__indirect(this.bb_pos+i),this.bb):void 0}arriveTangent(t){var i=this.bb.__offset(this.bb_pos,6);return i?(t||new vector_info_js_1.VectorInfo).__init(this.bb.__indirect(this.bb_pos+i),this.bb):void 0}leaveTangent(t){var i=this.bb.__offset(this.bb_pos,8);return i?(t||new vector_info_js_1.VectorInfo).__init(this.bb.__indirect(this.bb_pos+i),this.bb):void 0}lineType(t){var i=this.bb.__offset(this.bb_pos,10);return i?this.bb.__string(this.bb_pos+i,t):void 0}rotation(t){var i=this.bb.__offset(this.bb_pos,12);return i?(t||new vector_info_js_1.VectorInfo).__init(this.bb.__indirect(this.bb_pos+i),this.bb):void 0}static startCommonSplinePoint(t){t.startObject(5)}static addPosition(t,i){t.addFieldOffset(0,i,0)}static addArriveTangent(t,i){t.addFieldOffset(1,i,0)}static addLeaveTangent(t,i){t.addFieldOffset(2,i,0)}static addLineType(t,i){t.addFieldOffset(3,i,0)}static addRotation(t,i){t.addFieldOffset(4,i,0)}static endCommonSplinePoint(t){return t.endObject()}}exports.CommonSplinePoint=CommonSplinePoint;
//# sourceMappingURL=common-spline-point.js.map