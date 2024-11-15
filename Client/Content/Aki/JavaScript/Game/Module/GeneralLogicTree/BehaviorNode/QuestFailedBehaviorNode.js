
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.QuestFailedBehaviorNode=void 0;const UE=require("ue"),Log_1=require("../../../../Core/Common/Log"),Protocol_1=require("../../../../Core/Define/Net/Protocol"),EntitySystem_1=require("../../../../Core/Entity/EntitySystem"),Net_1=require("../../../../Core/Net/Net"),TimerSystem_1=require("../../../../Core/Timer/TimerSystem"),Rotator_1=require("../../../../Core/Utils/Math/Rotator"),Vector_1=require("../../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../../Core/Utils/MathUtils"),StringUtils_1=require("../../../../Core/Utils/StringUtils"),IAction_1=require("../../../../UniverseEditor/Interface/IAction"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),TimeUtil_1=require("../../../Common/TimeUtil"),EffectSystem_1=require("../../../Effect/EffectSystem"),Global_1=require("../../../Global"),GlobalData_1=require("../../../GlobalData"),ControllerHolder_1=require("../../../Manager/ControllerHolder"),ModelManager_1=require("../../../Manager/ModelManager"),CharacterBuffIds_1=require("../../../NewWorld/Character/Common/Component/Abilities/CharacterBuffIds"),QuestController_1=require("../../QuestNew/Controller/QuestController"),RangeCheck_1=require("../../Util/RangeCheck"),BehaviorNodeBase_1=require("./BehaviorNodeBase"),TICK_INTERVAL_TIME=500,STALK_FAILED_DELAY_TIME=1e3;class QuestFailedBehaviorNode extends BehaviorNodeBase_1.BehaviorNodeBase{constructor(e){super(e),this.D$t=void 0,this.TimerUiConfig=void 0,this.ae=-0,this.Cfe=-0,this.CanGiveUp=void 0,this.R$t=void 0,this.U$t=!1,this.IRe=void 0,this.A$t=!1,this.P$t=void 0,this.jLa=void 0,this.GiveUpText=void 0,this.x$t=[],this.pct=!1,this.bka=0,this.qka=Vector_1.Vector.Create(),this.wUa=void 0,this.BUa=void 0,this.bUa=0,this.qUa=0,this.NeedRequiresSecondConfirmation=!1,this.Oka=[],this.Gka=void 0,this.r6=()=>{var e=ModelManager_1.ModelManager.TimeOfDayModel.GameTime.Second;(e<this.ae||e>=this.Cfe)&&this.w$t()},this.Zpe=e=>{var t;this.B$t(!e),e!==this.R$t&&this.BtType!==Protocol_1.Aki.Protocol.hps.Proto_BtTypeInvalid&&((this.R$t=e)||EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnSneakFoundChange,this.R$t,0),t=ModelManager_1.ModelManager.GeneralLogicTreeModel.GetBehaviorTreeOwnerId(this.TreeIncId),t=Protocol_1.Aki.Protocol.IJn.create({d9n:t,C9n:MathUtils_1.MathUtils.BigIntToLong(this.TreeIncId),b5n:this.NodeId,g9n:e}),Net_1.Net.Call(29521,t,e=>{switch(e.BEs){case Protocol_1.Aki.Protocol.Q4n.KRs:case Protocol_1.Aki.Protocol.Q4n.Proto_ErrNotInSneak:case Protocol_1.Aki.Protocol.Q4n.Proto_ErrBehaviorTreeNotFound:break;default:ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.BEs,19490)}}))},this.vYe=e=>{var e=EntitySystem_1.EntitySystem.Get(e);e?.Valid&&(e=e.GetComponent(0).GetPbDataId(),this.x$t.includes(e))&&TimerSystem_1.TimerSystem.Delay(()=>{this.pct||(this.pct=!0,EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnStalkFailed),this.b$t())},STALK_FAILED_DELAY_TIME)},this.b$t=()=>{var e=ModelManager_1.ModelManager.GeneralLogicTreeModel.GetBehaviorTreeOwnerId(this.TreeIncId),e=Protocol_1.Aki.Protocol.bJn.create({d9n:e,C9n:MathUtils_1.MathUtils.BigIntToLong(this.TreeIncId),b5n:this.NodeId});Net_1.Net.Call(26203,e,e=>{e.BEs!==Protocol_1.Aki.Protocol.Q4n.KRs&&ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.BEs,26132)})},this.w$t=()=>{var e;this.U$t||(this.U$t=!0,this.BtType!==Protocol_1.Aki.Protocol.hps.Proto_BtTypeInvalid&&(e=ModelManager_1.ModelManager.GeneralLogicTreeModel.GetBehaviorTreeOwnerId(this.TreeIncId),e=Protocol_1.Aki.Protocol.fJn.create({d9n:e,C9n:MathUtils_1.MathUtils.BigIntToLong(this.TreeIncId),b5n:this.NodeId}),Net_1.Net.Call(29828,e,e=>{e.BEs!==Protocol_1.Aki.Protocol.Q4n.KRs&&ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.BEs,26224)})))},this.NodeType="QuestFailed"}get NeedSecondaryConfirm(){return this.P$t}get NowTransitionType(){return this.jLa}OnCreate(e){if(!e||"QuestFailed"!==e.Type)return!1;this.P$t=e.FailedCondition?.FailedTeleport?.IsConfirm,this.jLa=e.FailedCondition?.FailedTeleport?.TransitionOption?.Type,this.D$t=e.FailedCondition?.TimeRange,this.TimerUiConfig=e.FailedCondition?.Timer?.UiConfig;var t,i=e.FailedCondition?.RangeLimiting;if(this.wUa=i?.RangeEffectPath,this.wUa&&(t=i.Point,this.BUa=Vector_1.Vector.Create(t?.X??0,t?.Y??0,t?.Z??0),this.bUa=i.Range),this.bka=e.FailedCondition?.RangeLimiting?.Range,this.Oka=e.FailedCondition?.RangeLimiting?.RangeEntities,void 0!==this.Oka){this.Gka||(this.Gka=new RangeCheck_1.RangeCheck);for(const r of this.Oka)this.Gka.GetOrAdd(r)}return this.qka?.Set(e.FailedCondition?.RangeLimiting?.Point?.X??0,e.FailedCondition?.RangeLimiting?.Point?.Y??0,e.FailedCondition?.RangeLimiting?.Point?.Z??0),this.NeedRequiresSecondConfirmation=e.FailedCondition?.RangeLimiting?.RequiresSecondConfirmation??!1,this.D$t&&(this.q$t(),this.IRe=TimerSystem_1.TimerSystem.Forever(this.r6,TICK_INTERVAL_TIME)),e.FailedCondition?.SneakPlayCondition&&this.G$t(),e.FailedCondition?.EntityAlert?.EntityIds&&0<e.FailedCondition?.EntityAlert?.EntityIds.length&&(this.x$t=e.FailedCondition.EntityAlert.EntityIds,this.N$t()),this.CanGiveUp=e.FailedCondition?.CanGiveUp,this.GiveUpText=e.FailedCondition?.TidGiveUpText,!(this.U$t=!1)}OnNodeActive(){this.GUa()}OnNodeDeActive(e){this.OUa(),TimerSystem_1.TimerSystem.Has(this.IRe)&&TimerSystem_1.TimerSystem.Remove(this.IRe),this.A$t&&this.B$t(!1),this.O$t(),this.k$t(),this.Gka?.OnClear(),this.Gka=void 0,super.OnNodeDeActive(e),QuestController_1.QuestNewController.QuestRangeFailWarningTreeId===this.TreeIncId&&QuestController_1.QuestNewController.HideCancelRangeFailWaringEffect()}q$t(){this.ae=this.D$t.StartTime.Hours*TimeUtil_1.TimeUtil.Hour+this.D$t.StartTime.Minutes*TimeUtil_1.TimeUtil.Minute,this.Cfe=this.D$t.EndTime.Hours*TimeUtil_1.TimeUtil.Hour+this.D$t.EndTime.Minutes*TimeUtil_1.TimeUtil.Minute}G$t(){var e;EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnBattleStateChanged,this.Zpe),this.B$t(!0),this.A$t=!0,Net_1.Net.Register(26172,e=>{e=Number(MathUtils_1.MathUtils.LongToBigInt(e.dps));this.R$t=0!==e,EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnSneakFoundChange,this.R$t,e)}),this.BtType!==Protocol_1.Aki.Protocol.hps.Proto_BtTypeInvalid&&(EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.SneakStart),e=ModelManager_1.ModelManager.GeneralLogicTreeModel.GetBehaviorTreeOwnerId(this.TreeIncId),e=Protocol_1.Aki.Protocol.LJn.create({d9n:e,C9n:MathUtils_1.MathUtils.BigIntToLong(this.TreeIncId)}),Net_1.Net.Call(19076,e,e=>{e.BEs!==Protocol_1.Aki.Protocol.Q4n.KRs&&ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.BEs,20853)}))}O$t(){EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.SneakEnd),EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnBattleStateChanged,this.Zpe)&&EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnBattleStateChanged,this.Zpe),this.A$t&&(Net_1.Net.UnRegister(26172),this.A$t=!1)}N$t(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnStalkFound,this.vYe)}k$t(){EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnStalkFound,this.vYe)&&EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnStalkFound,this.vYe)}B$t(e){var t=Global_1.Global.BaseCharacter.GetEntityNoBlueprint().GetComponent(160);t?.Valid&&(e?t.AddBuff(CharacterBuffIds_1.buffId.StealthIgnoreHateBuff,{InstigatorId:t.CreatureDataId,Reason:"QuestFailedBehaviorNode"}):t.RemoveBuff(CharacterBuffIds_1.buffId.StealthIgnoreHateBuff,-1,"QuestFailedBehaviorNode"))}IsFadeInScreen(){return this.jLa===IAction_1.ETeleportTransitionType.FadeInScreen}GUa(){!this.wUa||StringUtils_1.StringUtils.IsBlank(this.wUa)||EffectSystem_1.EffectSystem.SpawnEffect(GlobalData_1.GlobalData.World,new UE.Transform(Rotator_1.Rotator.ZeroRotator,this.BUa.ToUeVector(),Vector_1.Vector.OneVector),this.wUa,"[QuestFailedBehaviorNode.SpawnFailRangeEffect]",void 0,3,void 0,(e,t)=>{5!==e?Log_1.Log.CheckError()&&Log_1.Log.Error("GeneralLogicTree",18,"GeneralLogicTree:CheckPointEffectController.SpawnEffect 错误",["result",e]):t&&(this.qUa=t,EffectSystem_1.EffectSystem.SetEffectDataFloatConstParam(t,new UE.FName("CircleRadius"),this.bUa),EffectSystem_1.EffectSystem.RegisterCustomCheckOwnerFunc(t,()=>0!==this.qUa))})}OUa(){EffectSystem_1.EffectSystem.IsValid(this.qUa)&&EffectSystem_1.EffectSystem.StopEffectById(this.qUa,"[QuestFailedBehaviorNode.StopFailRangeEffect]",!0),this.qUa=0}IsOutFailRange(e){return void 0!==this.qka&&void 0!==this.bka?Vector_1.Vector.DistXY(this.qka,e)>this.bka:void 0!==this.Gka&&!this.Gka.MapCheckReachedPosition(e)}}exports.QuestFailedBehaviorNode=QuestFailedBehaviorNode;
//# sourceMappingURL=QuestFailedBehaviorNode.js.map