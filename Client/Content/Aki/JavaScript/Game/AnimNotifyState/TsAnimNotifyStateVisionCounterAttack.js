
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const UE=require("ue"),TsBaseCharacter_1=require("../Character/TsBaseCharacter");class TsAnimNotifyStateVisionCounterAttack extends UE.KuroAnimNotifyState{constructor(){super(...arguments),this.对策设置=void 0}K2_NotifyBegin(t,e,r){var t=t.GetOwner();return t instanceof TsBaseCharacter_1.default&&!!(t=t.CharacterActorComponent?.Entity)?.Valid&&(t.GetComponent(33)?.SetCurAnInfo(this.exportIndex,e.GetName()),(e=t.GetComponent(52))?.SetCounterAttackAnsInfo(this.exportIndex),e?.SetVisionCounterAttackInfo(this.对策设置),e?.SetCounterAttackEndTime(r),!0)}K2_NotifyEnd(t,e){var t=t.GetOwner();return t instanceof TsBaseCharacter_1.default&&!!(t=t.CharacterActorComponent?.Entity)?.Valid&&(t.GetComponent(33)?.SetCurAnInfo(this.exportIndex,e.GetName()),t.GetComponent(52)?.VisionCounterAttackEnd(),!0)}GetNotifyName(){return"幻象弹反"}}exports.default=TsAnimNotifyStateVisionCounterAttack;
//# sourceMappingURL=TsAnimNotifyStateVisionCounterAttack.js.map