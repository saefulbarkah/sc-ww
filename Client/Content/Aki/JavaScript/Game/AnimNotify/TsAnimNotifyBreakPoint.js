
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const UE=require("ue"),TsBaseCharacter_1=require("../Character/TsBaseCharacter");class TsAnimNotifyBreakPoint extends UE.KuroAnimNotify{K2_Notify(e,r){var e=e.GetOwner();return e instanceof TsBaseCharacter_1.default&&(e=e.CharacterActorComponent.Entity.GetComponent(53))&&e.AnimBreakPoint(),!0}GetNotifyName(){return"打断点（强制执行一次按键缓存检测）"}}exports.default=TsAnimNotifyBreakPoint;
//# sourceMappingURL=TsAnimNotifyBreakPoint.js.map