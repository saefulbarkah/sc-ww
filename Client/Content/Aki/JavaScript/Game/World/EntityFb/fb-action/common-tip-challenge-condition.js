
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CommonTipChallengeCondition=void 0;const flatbuffers=require("../../../../RunTimeLibs/FlatBuffers/flatbuffers");class CommonTipChallengeCondition{constructor(){this.bb=void 0,this.bb_pos=0}__init(i,t){return this.bb_pos=i,this.bb=t,this}static getRootAsCommonTipChallengeCondition(i,t){return(t||new CommonTipChallengeCondition).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsCommonTipChallengeCondition(i,t){return i.setPosition(i.position()+flatbuffers.SIZE_PREFIX_LENGTH),(t||new CommonTipChallengeCondition).__init(i.readInt32(i.position())+i.position(),i)}type(){var i=this.bb.__offset(this.bb_pos,4);return i?this.bb.readUint8(this.bb_pos+i):0}tidMainText(i){var t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,i):void 0}tidSubText(i){var t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__string(this.bb_pos+t,i):void 0}static startCommonTipChallengeCondition(i){i.startObject(3)}static addType(i,t){i.addFieldInt8(0,t,0)}static addTidMainText(i,t){i.addFieldOffset(1,t,0)}static addTidSubText(i,t){i.addFieldOffset(2,t,0)}static endCommonTipChallengeCondition(i){return i.endObject()}static createCommonTipChallengeCondition(i,t,n,o){return CommonTipChallengeCondition.startCommonTipChallengeCondition(i),CommonTipChallengeCondition.addType(i,t),CommonTipChallengeCondition.addTidMainText(i,n),CommonTipChallengeCondition.addTidSubText(i,o),CommonTipChallengeCondition.endCommonTipChallengeCondition(i)}}exports.CommonTipChallengeCondition=CommonTipChallengeCondition;
//# sourceMappingURL=common-tip-challenge-condition.js.map