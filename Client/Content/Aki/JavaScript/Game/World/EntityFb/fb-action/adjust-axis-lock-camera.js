
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AdjustAxisLockCamera=void 0;const flatbuffers=require("../../../../RunTimeLibs/FlatBuffers/flatbuffers"),axis_lock_screen_config_js_1=require("../fb-action/axis-lock-screen-config.js"),base_curve_js_1=require("../fb-action/base-curve.js"),vector_info_js_1=require("../fb-var/vector-info.js");class AdjustAxisLockCamera{constructor(){this.bb=void 0,this.bb_pos=0}__init(t,s){return this.bb_pos=t,this.bb=s,this}static getRootAsAdjustAxisLockCamera(t,s){return(s||new AdjustAxisLockCamera).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsAdjustAxisLockCamera(t,s){return t.setPosition(t.position()+flatbuffers.SIZE_PREFIX_LENGTH),(s||new AdjustAxisLockCamera).__init(t.readInt32(t.position())+t.position(),t)}type(t){var s=this.bb.__offset(this.bb_pos,4);return s?this.bb.__string(this.bb_pos+s,t):void 0}priority(){var t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}fadeInTime(){var t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readFloat32(this.bb_pos+t):0}fadeInCurve(t){var s=this.bb.__offset(this.bb_pos,10);return s?(t||new base_curve_js_1.BaseCurve).__init(this.bb.__indirect(this.bb_pos+s),this.bb):void 0}fadeOutTime(){var t=this.bb.__offset(this.bb_pos,12);return t?this.bb.readFloat32(this.bb_pos+t):0}fadeOutCurve(t){var s=this.bb.__offset(this.bb_pos,14);return s?(t||new base_curve_js_1.BaseCurve).__init(this.bb.__indirect(this.bb_pos+s),this.bb):void 0}armLength(){var t=this.bb.__offset(this.bb_pos,16);return t?this.bb.readFloat32(this.bb_pos+t):0}minumArmLength(){var t=this.bb.__offset(this.bb_pos,18);return t?this.bb.readFloat32(this.bb_pos+t):0}maxiumArmLength(){var t=this.bb.__offset(this.bb_pos,20);return t?this.bb.readFloat32(this.bb_pos+t):0}offset(t){var s=this.bb.__offset(this.bb_pos,22);return s?(t||new vector_info_js_1.VectorInfo).__init(this.bb.__indirect(this.bb_pos+s),this.bb):void 0}armOffset(t){var s=this.bb.__offset(this.bb_pos,24);return s?(t||new vector_info_js_1.VectorInfo).__init(this.bb.__indirect(this.bb_pos+s),this.bb):void 0}fov(){var t=this.bb.__offset(this.bb_pos,26);return t?this.bb.readFloat32(this.bb_pos+t):0}isDisableResetFocus(){var t=this.bb.__offset(this.bb_pos,28);return!!t&&!!this.bb.readInt8(this.bb_pos+t)}axisRotate(t){var s=this.bb.__offset(this.bb_pos,30);return s?(t||new vector_info_js_1.VectorInfo).__init(this.bb.__indirect(this.bb_pos+s),this.bb):void 0}screenConfig(t){var s=this.bb.__offset(this.bb_pos,32);return s?(t||new axis_lock_screen_config_js_1.AxisLockScreenConfig).__init(this.bb.__indirect(this.bb_pos+s),this.bb):void 0}static startAdjustAxisLockCamera(t){t.startObject(15)}static addType(t,s){t.addFieldOffset(0,s,0)}static addPriority(t,s){t.addFieldInt32(1,s,0)}static addFadeInTime(t,s){t.addFieldFloat32(2,s,0)}static addFadeInCurve(t,s){t.addFieldOffset(3,s,0)}static addFadeOutTime(t,s){t.addFieldFloat32(4,s,0)}static addFadeOutCurve(t,s){t.addFieldOffset(5,s,0)}static addArmLength(t,s){t.addFieldFloat32(6,s,0)}static addMinumArmLength(t,s){t.addFieldFloat32(7,s,0)}static addMaxiumArmLength(t,s){t.addFieldFloat32(8,s,0)}static addOffset(t,s){t.addFieldOffset(9,s,0)}static addArmOffset(t,s){t.addFieldOffset(10,s,0)}static addFov(t,s){t.addFieldFloat32(11,s,0)}static addIsDisableResetFocus(t,s){t.addFieldInt8(12,+s,0)}static addAxisRotate(t,s){t.addFieldOffset(13,s,0)}static addScreenConfig(t,s){t.addFieldOffset(14,s,0)}static endAdjustAxisLockCamera(t){return t.endObject()}}exports.AdjustAxisLockCamera=AdjustAxisLockCamera;
//# sourceMappingURL=adjust-axis-lock-camera.js.map