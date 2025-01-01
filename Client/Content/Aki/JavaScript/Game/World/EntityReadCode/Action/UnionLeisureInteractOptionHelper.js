
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UnionLeisureInteractOptionHelper=void 0;const fb_action_1=require("../../../../Game/World/EntityFb/fb-action"),FbBounce_1=require("./FbBounce"),FbCatapult_1=require("./FbCatapult"),FbGlide_1=require("./FbGlide"),FbHookLockInteract_1=require("./FbHookLockInteract"),FbKiteHookInteract_1=require("./FbKiteHookInteract"),FbManipulate_1=require("./FbManipulate"),FbSitDown_1=require("./FbSitDown"),FbSitOnGround_1=require("./FbSitOnGround"),FbSoar_1=require("./FbSoar"),FbStandControl_1=require("./FbStandControl"),FbStandControl2_1=require("./FbStandControl2"),FbSuperCatapult_1=require("./FbSuperCatapult");class UnionLeisureInteractOptionHelper{static GetUnionLeisureInteractOptionObject(t){switch(t){case fb_action_1.UnionLeisureInteractOption.Bounce:return new fb_action_1.Bounce;case fb_action_1.UnionLeisureInteractOption.Catapult:return new fb_action_1.Catapult;case fb_action_1.UnionLeisureInteractOption.Glide:return new fb_action_1.Glide;case fb_action_1.UnionLeisureInteractOption.HookLockInteract:return new fb_action_1.HookLockInteract;case fb_action_1.UnionLeisureInteractOption.KiteHookInteract:return new fb_action_1.KiteHookInteract;case fb_action_1.UnionLeisureInteractOption.Manipulate:return new fb_action_1.Manipulate;case fb_action_1.UnionLeisureInteractOption.SitDown:return new fb_action_1.SitDown;case fb_action_1.UnionLeisureInteractOption.SitOnGround:return new fb_action_1.SitOnGround;case fb_action_1.UnionLeisureInteractOption.Soar:return new fb_action_1.Soar;case fb_action_1.UnionLeisureInteractOption.StandControl:return new fb_action_1.StandControl;case fb_action_1.UnionLeisureInteractOption.StandControl2:return new fb_action_1.StandControl2;case fb_action_1.UnionLeisureInteractOption.SuperCatapult:return new fb_action_1.SuperCatapult;default:return}}static ReadUnionLeisureInteractOption(t,e){if(void 0!==e)switch(t){case fb_action_1.UnionLeisureInteractOption.Bounce:return FbBounce_1.FbBounce.Create(e);case fb_action_1.UnionLeisureInteractOption.Catapult:return FbCatapult_1.FbCatapult.Create(e);case fb_action_1.UnionLeisureInteractOption.Glide:return FbGlide_1.FbGlide.Create(e);case fb_action_1.UnionLeisureInteractOption.HookLockInteract:return FbHookLockInteract_1.FbHookLockInteract.Create(e);case fb_action_1.UnionLeisureInteractOption.KiteHookInteract:return FbKiteHookInteract_1.FbKiteHookInteract.Create(e);case fb_action_1.UnionLeisureInteractOption.Manipulate:return FbManipulate_1.FbManipulate.Create(e);case fb_action_1.UnionLeisureInteractOption.SitDown:return FbSitDown_1.FbSitDown.Create(e);case fb_action_1.UnionLeisureInteractOption.SitOnGround:return FbSitOnGround_1.FbSitOnGround.Create(e);case fb_action_1.UnionLeisureInteractOption.Soar:return FbSoar_1.FbSoar.Create(e);case fb_action_1.UnionLeisureInteractOption.StandControl:return FbStandControl_1.FbStandControl.Create(e);case fb_action_1.UnionLeisureInteractOption.StandControl2:return FbStandControl2_1.FbStandControl2.Create(e);case fb_action_1.UnionLeisureInteractOption.SuperCatapult:return FbSuperCatapult_1.FbSuperCatapult.Create(e);default:return}}}exports.UnionLeisureInteractOptionHelper=UnionLeisureInteractOptionHelper;
//# sourceMappingURL=UnionLeisureInteractOptionHelper.js.map