
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LevelEventCharacterMove=void 0;const Log_1=require("../../../Core/Common/Log"),Vector_1=require("../../../Core/Utils/Math/Vector"),IAction_1=require("../../../UniverseEditor/Interface/IAction"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),Global_1=require("../../Global"),ModelManager_1=require("../../Manager/ModelManager"),TeleportController_1=require("../../Module/Teleport/TeleportController"),CharacterUnifiedStateTypes_1=require("../../NewWorld/Character/Common/Component/Abilities/CharacterUnifiedStateTypes"),InputDistributeController_1=require("../../Ui/InputDistribute/InputDistributeController"),LevelGeneralBase_1=require("../LevelGeneralBase"),LevelGeneralContextDefine_1=require("../LevelGeneralContextDefine"),MAX_EXCUTE_TIME_SEC=10;class LevelEventCharacterMove extends LevelGeneralBase_1.LevelEventBase{constructor(){super(...arguments),this.$Le=void 0,this.YLe=!1,this.JLe=void 0,this.zLe=void 0,this.ZLe=e=>{LevelEventCharacterMove.eDe(e,this.$Le,this.YLe,this.zLe,()=>{this.FinishExecute(!0)})}}ExecuteNew(e,t,r){if(e){var i=e,e=(this.zLe=Vector_1.Vector.Create(i.Pos.X??0,i.Pos.Y??0,i.Pos.Z??0),{Index:0,Position:this.zLe});switch(this.JLe={Points:[e],Navigation:i.MoveType===IAction_1.ECharacterMoveToPointType.Walk,IsFly:!1,DebugMode:!0,Loop:!1,Callback:this.IsAsync?void 0:this.ZLe,ReturnFalseWhenNavigationFailed:!1,ReturnTimeoutFailed:MAX_EXCUTE_TIME_SEC},i.Target.Type){case"Player":if(this.tDe())break;return void this.FinishExecute(!1);case"Target":if(this.$Le=ModelManager_1.ModelManager.CreatureModel?.GetEntityByPbDataId(i.Target.EntityId),this.iDe())break;return void this.FinishExecute(!1);case"Triggered":if(this.oDe(t))break;return void this.FinishExecute(!1);default:return Log_1.Log.CheckError()&&Log_1.Log.Error("LevelEvent",40,"[LevelEventCharacterMove] 不支持的目标类型"),void this.FinishExecute(!1)}this.IsAsync&&this.FinishExecute(!0)}else Log_1.Log.CheckError()&&Log_1.Log.Error("LevelEvent",40,"[LevelEventCharacterMove] 参数不合法"),this.FinishExecute(!1)}tDe(){if(this.YLe=!0,this.$Le=ModelManager_1.ModelManager.CharacterModel?.GetHandleByEntity(Global_1.Global.BaseCharacter?.GetEntityNoBlueprint()),!this.$Le?.Valid)return Log_1.Log.CheckError()&&Log_1.Log.Error("LevelEvent",40,"[LevelEventCharacterMove] 找不到玩家目标"),!1;var e=this.$Le.Entity.GetComponent(164);if(e.IsMovingToLocation()&&e.MoveToLocationEnd(1),LevelEventCharacterMove.rDe(!1),this.IsAsync){const t=this.$Le,r=this.zLe;this.JLe.Callback=e=>{LevelEventCharacterMove.eDe(e,t,!0,r)}}return e.MoveAlongPath(this.JLe),!0}iDe(){if(!this.$Le?.Valid)return Log_1.Log.CheckError()&&Log_1.Log.Error("LevelEvent",40,"[LevelEventCharacterMove] 找不到有效目标实体"),!1;var e=this.$Le.Entity.GetComponent(164);if(!this.$Le.Entity.GetComponent(0)?.IsCharacter()||!e)return Log_1.Log.CheckError()&&Log_1.Log.Error("LevelEvent",40,"[LevelEventCharacterMove] 目标实体非可移动角色"),!1;if(this.$Le.Entity.Id===Global_1.Global.BaseCharacter?.GetEntityIdNoBlueprint())return this.tDe();if(e.IsMovingToLocation()&&e.MoveToLocationEnd(1),this.IsAsync){const t=this.$Le,r=this.zLe;this.JLe.Callback=e=>{LevelEventCharacterMove.eDe(e,t,!1,r)}}return e.MoveAlongPath(this.JLe),!0}oDe(e){return e instanceof LevelGeneralContextDefine_1.TriggerContext&&e.OtherEntityId?(this.$Le=ModelManager_1.ModelManager.CreatureModel?.GetEntityById(e.OtherEntityId),this.iDe()):(Log_1.Log.CheckError()&&Log_1.Log.Error("LevelEvent",40,"[LevelEventCharacterMove] context数据异常"),!1)}static rDe(e){var t,r,i,o,n,a=Global_1.Global.BaseCharacter?.GetEntityNoBlueprint();a?.Valid&&(t=a.GetComponent(161),r=a.GetComponent(34),i=a.GetComponent(3),o=a.GetComponent(54),n=a.GetComponent(190),a=a.GetComponent(164),e?(a?.StopMove(!1),a?.ResetMaxSpeed(t?.MoveState),i?.ClearInput(),o?.ClearMoveVectorCache(),o?.SetActive(!0),n?.RemoveTag(-1697149502),n?.RemoveTag(-541178966),n?.RemoveTag(-542518289),n?.RemoveTag(-2140742267),n?.RemoveTag(-1013832153)):(EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.ForceReleaseInput,"LevelEventCharacterMove"),t?.DirectionState===CharacterUnifiedStateTypes_1.ECharDirectionState.AimDirection&&t?.ExitAimStatus(),r?.CurrentSkill&&r.EndOwnerAndFollowSkills(),i?.ClearInput(),o?.ClearMoveVectorCache(),o?.SetActive(!1),n?.AddTag(-1697149502),n?.AddTag(-541178966),n?.AddTag(-542518289),n?.AddTag(-2140742267),n?.AddTag(-1013832153)),InputDistributeController_1.InputDistributeController.RefreshInputTag())}}(exports.LevelEventCharacterMove=LevelEventCharacterMove).eDe=(e,t,r,i,o)=>{1!==e?(e=t?.Entity?.GetComponent(3),r?TeleportController_1.TeleportController.TeleportToPositionNoLoading(i.ToUeVector(),e?.ActorRotation,"[LevelEventCharacterMove] 移动失败或超时，传送到目标位置").finally(()=>{LevelEventCharacterMove.rDe(!0),o?.()}):(e?.TeleportAndFindStandLocation(i),o?.())):(r&&LevelEventCharacterMove.rDe(!0),o?.())};
//# sourceMappingURL=LevelEventCharacterMove.js.map