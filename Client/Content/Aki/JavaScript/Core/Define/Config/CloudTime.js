
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CloudTime=void 0;class CloudTime{constructor(){this.J7=null,this.z7=0}get Id(){return this.id()}get Day(){return this.day()}get Amount(){return this.amount()}get Timeout(){return this.timeout()}__init(t,i){return this.z7=t,this.J7=i,this}static getRootAsCloudTime(t,i){return(i||new CloudTime).__init(t.readInt32(t.position())+t.position(),t)}id(){var t=this.J7.__offset(this.z7,4);return t?this.J7.readInt32(this.z7+t):0}day(){var t=this.J7.__offset(this.z7,6);return t?this.J7.readInt32(this.z7+t):0}amount(){var t=this.J7.__offset(this.z7,8);return t?this.J7.readFloat32(this.z7+t):0}timeout(){var t=this.J7.__offset(this.z7,10);return t?this.J7.readInt32(this.z7+t):0}}exports.CloudTime=CloudTime;
//# sourceMappingURL=CloudTime.js.map