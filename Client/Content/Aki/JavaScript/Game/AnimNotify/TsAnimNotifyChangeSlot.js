
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const UE=require("ue"),TsBaseCharacter_1=require("../Character/TsBaseCharacter");class TsAnimNotifyChangeSlot extends UE.KuroAnimNotify{constructor(){super(...arguments),this.ComponentName=void 0,this.SwitchToSlotName=void 0,this.SlotTransform=void 0}Constructor(){}K2_Notify(t,e){t=t.GetOwner();if(!(t instanceof TsBaseCharacter_1.default))return!1;var r=t.CharacterActorComponent;if(!r)return!1;var s=r.SkeletalMesh?.GetNumChildrenComponents();for(let t=0;t<s;t++){var i=r.SkeletalMesh?.GetChildComponent(t);if(i&&i.GetName()===this.ComponentName&&i instanceof UE.SkeletalMeshComponent){i.K2_AttachToComponent(r.SkeletalMesh,this.SwitchToSlotName,0,0,0,!0),this.SlotTransform&&i.K2_SetRelativeTransform(this.SlotTransform,!1,void 0,!0);break}}return!0}GetNotifyName(){return"切换组件到指定插槽"}}exports.default=TsAnimNotifyChangeSlot;
//# sourceMappingURL=TsAnimNotifyChangeSlot.js.map