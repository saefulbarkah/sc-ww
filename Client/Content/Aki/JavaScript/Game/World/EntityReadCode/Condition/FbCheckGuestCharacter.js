
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbCheckGuestCharacter=void 0;class FbCheckGuestCharacter{constructor(t){this.FbDataInternal=t,this.u_h=!1,this.f8o=void 0,this.ZV_=!1,this.ej_=0}static Create(t){if(t)return new FbCheckGuestCharacter(t)}get Type(){return this.u_h||(this.u_h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get GuestCharacterId(){return this.ZV_||(this.ZV_=!0,this.ej_=this.FbDataInternal.guestCharacterId()),this.ej_}}exports.FbCheckGuestCharacter=FbCheckGuestCharacter;
//# sourceMappingURL=FbCheckGuestCharacter.js.map