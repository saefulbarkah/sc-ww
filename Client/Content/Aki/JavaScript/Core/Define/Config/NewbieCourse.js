
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NewbieCourse=void 0;class NewbieCourse{constructor(){this.J7=null,this.z7=0}get Id(){return this.id()}get Reward(){return this.reward()}__init(t,e){return this.z7=t,this.J7=e,this}static getRootAsNewbieCourse(t,e){return(e||new NewbieCourse).__init(t.readInt32(t.position())+t.position(),t)}id(){var t=this.J7.__offset(this.z7,4);return t?this.J7.readInt32(this.z7+t):0}reward(){var t=this.J7.__offset(this.z7,6);return t?this.J7.readInt32(this.z7+t):0}}exports.NewbieCourse=NewbieCourse;
//# sourceMappingURL=NewbieCourse.js.map