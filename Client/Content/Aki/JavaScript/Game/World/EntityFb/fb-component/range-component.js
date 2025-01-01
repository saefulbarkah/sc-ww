
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RangeComponent=void 0;const flatbuffers=require("../../../../RunTimeLibs/FlatBuffers/flatbuffers"),union_trigger_shape_js_1=require("../fb-shape/union-trigger-shape.js");class RangeComponent{constructor(){this.bb=void 0,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsRangeComponent(e,t){return(t||new RangeComponent).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsRangeComponent(e,t){return e.setPosition(e.position()+flatbuffers.SIZE_PREFIX_LENGTH),(t||new RangeComponent).__init(e.readInt32(e.position())+e.position(),e)}disabled(){var e=this.bb.__offset(this.bb_pos,4);return!!e&&!!this.bb.readInt8(this.bb_pos+e)}shapeType(){var e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint8(this.bb_pos+e):union_trigger_shape_js_1.UnionTriggerShape.NONE}shape(e){var t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__union(e,this.bb_pos+t):void 0}static startRangeComponent(e){e.startObject(3)}static addDisabled(e,t){e.addFieldInt8(0,+t,0)}static addShapeType(e,t){e.addFieldInt8(1,t,union_trigger_shape_js_1.UnionTriggerShape.NONE)}static addShape(e,t){e.addFieldOffset(2,t,0)}static endRangeComponent(e){return e.endObject()}static createRangeComponent(e,t,n,s){return RangeComponent.startRangeComponent(e),RangeComponent.addDisabled(e,t),RangeComponent.addShapeType(e,n),RangeComponent.addShape(e,s),RangeComponent.endRangeComponent(e)}}exports.RangeComponent=RangeComponent;
//# sourceMappingURL=range-component.js.map