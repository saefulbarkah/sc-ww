
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbSignalDevice=void 0;const fb_action_1=require("../../../../Game/World/EntityFb/fb-action"),FbColorPiece_1=require("./FbColorPiece");class FbSignalDevice{constructor(i){this.FbDataInternal=i,this.$1h=!1,this.f8o=void 0,this.bSh=!1,this.TAe=void 0}static Create(i){if(i)return new FbSignalDevice(i)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get Config(){if(!this.bSh){this.bSh=!0,this.TAe=new Array;var t=this.FbDataInternal.configLength();if(t)for(let i=0;i<t;++i){var e=this.FbDataInternal.config(i,new fb_action_1.ColorPiece);this.TAe.push(FbColorPiece_1.FbColorPiece.Create(e))}}return this.TAe}}exports.FbSignalDevice=FbSignalDevice;
//# sourceMappingURL=FbSignalDevice.js.map