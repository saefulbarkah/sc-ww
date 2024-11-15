
"use strict";var __decorate=this&&this.__decorate||function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var h=e.length-1;0<=h;h--)(s=e[h])&&(r=(o<3?s(r):3<o?s(t,n,r):s(t,n))||r);return 3<o&&r&&Object.defineProperty(t,n,r),r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.CharacterRollComponent=void 0;const puerts_1=require("puerts"),UE=require("ue"),EntityComponent_1=require("../../../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../../../Core/Entity/RegisterComponent"),EventDefine_1=require("../../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../../Common/Event/EventSystem"),CustomMovementDefine_1=require("./CustomMovementDefine");let CharacterRollComponent=class CharacterRollComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.Gce=void 0,this.Ixa=(0,puerts_1.$ref)(void 0),this.Txa=1200,this.Lxa=.1,this.Dxa=1e3,this.Axa=1960,this.Rxa=100,this.nun=4e3,this.Uxa=e=>{UE.KuroMovementBPLibrary.KuroRoll(e,this.Gce.CharacterMovement,this.Txa,this.Lxa,this.Dxa,this.Ixa,this.Axa,this.Rxa,this.nun)}}static get Dependencies(){return[164]}OnInit(e){return!0}OnStart(){return this.Gce=this.Entity.GetComponent(164),EventSystem_1.EventSystem.AddWithTarget(this.Entity,EventDefine_1.EEventName.CustomMoveRoll,this.Uxa),!0}OnEnd(){return EventSystem_1.EventSystem.RemoveWithTarget(this.Entity,EventDefine_1.EEventName.CustomMoveRoll,this.Uxa),!0}EnterRoll(e,t,n,i,s,o){this.Txa=e,this.Lxa=t,this.Dxa=n,this.Axa=i,this.Rxa=s,this.nun=o,this.Gce?.CharacterMovement?.SetMovementMode(6,CustomMovementDefine_1.CUSTOM_MOVEMENTMODE_ROLL)}LeaveRoll(){this.Gce?.CharacterMovement?.SetMovementMode(3)}};CharacterRollComponent=__decorate([(0,RegisterComponent_1.RegisterComponent)(33)],CharacterRollComponent),exports.CharacterRollComponent=CharacterRollComponent;
//# sourceMappingURL=CharacterRollComponent.js.map