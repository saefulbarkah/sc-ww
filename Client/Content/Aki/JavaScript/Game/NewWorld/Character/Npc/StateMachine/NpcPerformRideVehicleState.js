
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NpcPerformRideVehicleState=void 0;const UE=require("ue"),Log_1=require("../../../../../Core/Common/Log"),ResourceSystem_1=require("../../../../../Core/Resource/ResourceSystem"),NpcPerformBaseState_1=require("./NpcPerformBaseState");class NpcPerformRideVehicleState extends NpcPerformBaseState_1.NpcPerformBaseState{constructor(){super(...arguments),this.ZRl=new Map,this.eUl=!1,this.hHl=!1,this.lHl=!1,this.Qer=void 0,this._Hl=(t,e)=>{t===this.Qer&&(this.PerformComp?.RemoveOnMontageEnded(this._Hl),this.eUl=!1,this.lHl=!1,this.Qer=void 0)},this.OnLoopMontageEndForTurning=(t,e)=>{t=t?.IsValid()?t.GetName():"";Log_1.Log.CheckInfo()&&Log_1.Log.Info("NPC",50,"[NpcPerformRideVehicleState.OnLoopMontageEndForTurning][交互转身] Montage播放完毕",["PbDataID",this.ConfigId],["Montage",t]),this.PerformComp?.RemoveOnMontageEnded(this.OnLoopMontageEndForTurning),9!==this.Owner.Entity.GetComponent(176)?.GetCurrentState()&&this.TurnActionController.TurnToInteractTarget()}}OnCreate(t){if(super.OnCreate(t),t?.ShowOnRideInVehicle?.length)for(const e of t.ShowOnRideInVehicle)this.ZRl.set(e.Type,e.Montage)}OnEnter(t){this.PerformComp?.IsBaseRoleNpc||this.cHl()}OnExit(t){this.PerformComp?.IsBaseRoleNpc||this.vtr()}OnUpdate(t){this.PerformComp?.IsBaseRoleNpc||this.PerformComp?.IsInPlot||this.InteractRequestWaiting||this.TurnActionController.NeedTurn||this.cHl()}cHl(){if(!this.hHl&&!this.eUl){const e=this.Owner?.Entity?.GetComponent(217);var t;e?.VehicleType&&((t=this.ZRl.get(e.VehicleType))?(this.hHl=!0,ResourceSystem_1.ResourceSystem.LoadAsync(t,UE.AnimMontage,t=>{this.hHl=!1,t?.IsValid()&&e.IsOnVehicle&&8===this.PerformComp?.GetCurrentState()&&(this.PerformComp.Play(t,this._Hl),this.eUl=!0,this.Qer=t)})):Log_1.Log.CheckError()&&Log_1.Log.Error("NPC",50,"获取NPC乘坐载具Montage失败",["PbDataId",this.ConfigId],["VehicleType",e.VehicleType]))}}vtr(t=!1){!this.eUl&&!this.eUl||this.lHl||(this.lHl=!0,this.PerformComp?.Stop(t,this.Qer))}OnPlayerInteractTurnActionStart(){Log_1.Log.CheckInfo()&&Log_1.Log.Info("NPC",50,"[NpcPerformRideVehicleState.OnPlayerInteractTurnActionStart] 开始执行交互转身",["PbDataID",this.ConfigId]),this.InteractRequestWaiting=!0;var t=this.Owner?.Entity?.GetComponent(38);t?.MainAnimInstance?.IsAnyMontagePlaying()&&this.TurnActionController.NeedTurn?(Log_1.Log.CheckInfo()&&Log_1.Log.Info("NPC",50,"[NpcPerformRideVehicleState.OnPlayerInteractTurnActionStart][交互转身] 停止播放Montage",["PbDataID",this.ConfigId],["CurrentMontage",t?.MainAnimInstance?.GetCurrentActiveMontage()?.GetName()]),this.PerformComp?.AddOnMontageEnded(this.OnLoopMontageEndForTurning),this.Utr()):this.TurnActionController.TurnToInteractTarget()}OnPlayerInteractTurnActionEnd(){var t=this.Owner.Entity.GetComponent(38);t.MainAnimInstance.IsAnyMontagePlaying()&&this.TurnActionController.NeedTurn&&(Log_1.Log.CheckInfo()&&Log_1.Log.Info("NPC",50,"[NpcPerformRideVehicleState.OnPlayerInteractTurnActionEnd][结束交互转身] 停止播放Montage",["PbDataID",this.ConfigId],["CurrentMontage",t?.MainAnimInstance?.GetCurrentActiveMontage()?.GetName()]),this.Utr());const e=this.Owner.Entity.GetComponent(217);e?.GetSeatTransform(this.TmpTrans)&&(this.TmpTrans.GetRotation().GetForwardVector(this.TmpVector),this.TurnActionController.UpdateDefaultDirect(this.TmpVector),this.TurnActionController.OnTurnToDefaultForwardEndHandle=()=>{this?.Owner?.Valid&&(this.TurnActionController.NeedTurn=!1,e?.AttachAndSetPassengerTransform())},this.TurnActionController.TurnToDefaultForward(),this.InteractRequestWaiting=!1)}Utr(){this.lHl=!0,this.PerformComp?.ForceStop(.5,this.Qer)}}exports.NpcPerformRideVehicleState=NpcPerformRideVehicleState;
//# sourceMappingURL=NpcPerformRideVehicleState.js.map