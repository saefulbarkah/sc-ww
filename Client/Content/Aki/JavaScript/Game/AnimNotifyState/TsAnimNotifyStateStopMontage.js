
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const UE=require("ue"),TsBaseCharacter_1=require("../Character/TsBaseCharacter"),QUIT_BLEND_TIME=.1;class TsAnimNotifyStateStopMontage extends UE.KuroAnimNotifyState{Constructor(){}K2_NotifyTick(e,t,r){var e=e.GetOwner();return e instanceof TsBaseCharacter_1.default&&!!(e=e.CharacterActorComponent?.Entity)&&(e.GetComponent(173)?.HasMoveInput&&(e=e.GetComponent(172))&&e.MainAnimInstance.Montage_Stop(QUIT_BLEND_TIME),!0)}}exports.default=TsAnimNotifyStateStopMontage;
//# sourceMappingURL=TsAnimNotifyStateStopMontage.js.map