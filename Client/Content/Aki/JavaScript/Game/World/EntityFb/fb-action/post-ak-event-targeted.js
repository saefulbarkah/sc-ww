
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PostAkEventTargeted=void 0;const flatbuffers=require("../../../../RunTimeLibs/FlatBuffers/flatbuffers");class PostAkEventTargeted{constructor(){this.bb=void 0,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsPostAkEventTargeted(t,e){return(e||new PostAkEventTargeted).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsPostAkEventTargeted(t,e){return t.setPosition(t.position()+flatbuffers.SIZE_PREFIX_LENGTH),(e||new PostAkEventTargeted).__init(t.readInt32(t.position())+t.position(),t)}type(t){var e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):void 0}entityId(){var t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}akEvent(t){var e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__string(this.bb_pos+e,t):void 0}static startPostAkEventTargeted(t){t.startObject(3)}static addType(t,e){t.addFieldOffset(0,e,0)}static addEntityId(t,e){t.addFieldInt32(1,e,0)}static addAkEvent(t,e){t.addFieldOffset(2,e,0)}static endPostAkEventTargeted(t){return t.endObject()}static createPostAkEventTargeted(t,e,s,r){return PostAkEventTargeted.startPostAkEventTargeted(t),PostAkEventTargeted.addType(t,e),PostAkEventTargeted.addEntityId(t,s),PostAkEventTargeted.addAkEvent(t,r),PostAkEventTargeted.endPostAkEventTargeted(t)}}exports.PostAkEventTargeted=PostAkEventTargeted;
//# sourceMappingURL=post-ak-event-targeted.js.map