
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UltimateSkillReady=void 0;const flatbuffers=require("../../../../RunTimeLibs/FlatBuffers/flatbuffers");class UltimateSkillReady{constructor(){this.bb=void 0,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUltimateSkillReady(t,e){return(e||new UltimateSkillReady).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUltimateSkillReady(t,e){return t.setPosition(t.position()+flatbuffers.SIZE_PREFIX_LENGTH),(e||new UltimateSkillReady).__init(t.readInt32(t.position())+t.position(),t)}type(t){var e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):void 0}static startUltimateSkillReady(t){t.startObject(1)}static addType(t,e){t.addFieldOffset(0,e,0)}static endUltimateSkillReady(t){return t.endObject()}static createUltimateSkillReady(t,e){return UltimateSkillReady.startUltimateSkillReady(t),UltimateSkillReady.addType(t,e),UltimateSkillReady.endUltimateSkillReady(t)}}exports.UltimateSkillReady=UltimateSkillReady;
//# sourceMappingURL=ultimate-skill-ready.js.map