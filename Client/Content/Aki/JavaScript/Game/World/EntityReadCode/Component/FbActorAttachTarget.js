
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbActorAttachTarget=void 0;const FbActorRef_1=require("../Actor/FbActorRef");class FbActorAttachTarget{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.LHh=!1,this.AHh=void 0}static Create(t){if(t)return new FbActorAttachTarget(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get ActorRef(){return this.LHh||(this.LHh=!0,this.AHh=FbActorRef_1.FbActorRef.Create(this.FbDataInternal.actorRef())),this.AHh}}exports.FbActorAttachTarget=FbActorAttachTarget;
//# sourceMappingURL=FbActorAttachTarget.js.map