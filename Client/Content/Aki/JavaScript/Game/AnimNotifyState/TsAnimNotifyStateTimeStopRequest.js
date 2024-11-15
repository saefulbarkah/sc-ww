
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const UE=require("ue"),Info_1=require("../../Core/Common/Info"),Protocol_1=require("../../Core/Define/Net/Protocol"),TsBaseCharacter_1=require("../Character/TsBaseCharacter"),EventDefine_1=require("../Common/Event/EventDefine"),EventSystem_1=require("../Common/Event/EventSystem"),TimeUtil_1=require("../Common/TimeUtil"),ModelManager_1=require("../Manager/ModelManager"),FormationAttributeController_1=require("../Module/Abilities/FormationAttributeController"),SkillCdController_1=require("../Module/Battle/SkillCdController"),CombatMessage_1=require("../Module/CombatMessage/CombatMessage"),CharacterUtils_1=require("../NewWorld/Character/CharacterUtils"),CombatLog_1=require("../Utils/CombatLog"),TimeController_1=require("../World/Controller/TimeController");class TsAnimNotifyStateTimeStopRequest extends UE.KuroAnimNotifyState{K2_NotifyBegin(e,r,t){e=e?.GetOwner();if(!(e instanceof TsBaseCharacter_1.default))return!1;if(ModelManager_1.ModelManager.GameModeModel?.IsMulti)return!1;if(ModelManager_1.ModelManager.GeneralLogicTreeModel.TimeStop){const o=e.CharacterActorComponent?.Entity;return CombatLog_1.CombatLog.Error("Animation",o,"重复进入副本时停，将不做处理",["animation",r?.GetName()]),!1}var r=ModelManager_1.ModelManager.CreatureModel.GetEntityById(e.EntityId);if(r?.Valid&&!CharacterUtils_1.CharacterUtils.CanCharacterMonsterOrSummonedDisplayEffect(r))return!1;ModelManager_1.ModelManager.GeneralLogicTreeModel.TimeStop=!0;for(const n of ModelManager_1.ModelManager.CreatureModel?.GetAllEntities()??[])n.IsInit&&((n.Entity?.GetComponent(160))?.AddPauseLock("ANS AbsoluteTimeStop"),TimeController_1.TimeController.TimeStopBuffEntitySet.add(n));FormationAttributeController_1.FormationAttributeController.AddPauseLock("ANS AbsoluteTimeStop"),SkillCdController_1.SkillCdController.Pause(0,!0);const o=e.CharacterActorComponent?.Entity;return o&&((r=Protocol_1.Aki.Protocol.L4n.create()).o5n=!0,r.n5n=t*TimeUtil_1.TimeUtil.InverseMillisecond,CombatMessage_1.CombatNet.Call(27789,o,r)),Info_1.Info.IsBuildDevelopmentOrDebug&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnAbsoluteTimeStop,!0),!0}K2_NotifyEnd(e,r){var t,e=e?.GetOwner();if(!(e instanceof TsBaseCharacter_1.default))return!1;ModelManager_1.ModelManager.GeneralLogicTreeModel.TimeStop=!1;for(const o of TimeController_1.TimeController.TimeStopBuffEntitySet)(o.Entity?.GetComponent(160))?.RemovePauseLock("ANS AbsoluteTimeStop");return TimeController_1.TimeController.TimeStopBuffEntitySet.clear(),FormationAttributeController_1.FormationAttributeController.RemovePauseLock("ANS AbsoluteTimeStop"),SkillCdController_1.SkillCdController.Pause(0,!1),e.CharacterActorComponent?.Entity&&((t=Protocol_1.Aki.Protocol.L4n.create()).o5n=!1,t.n5n=0,CombatMessage_1.CombatNet.Call(27789,e.CharacterActorComponent.Entity,t)),Info_1.Info.IsBuildDevelopmentOrDebug&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnAbsoluteTimeStop,!1),!0}GetNotifyName(){return"副本计时和所有战斗单位buff、技能冷却冻结"}}exports.default=TsAnimNotifyStateTimeStopRequest;
//# sourceMappingURL=TsAnimNotifyStateTimeStopRequest.js.map