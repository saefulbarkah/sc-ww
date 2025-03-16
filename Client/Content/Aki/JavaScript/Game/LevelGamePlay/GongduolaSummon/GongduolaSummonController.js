
"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.GongduolaSummonController=void 0;const UE=require("ue"),Log_1=require("../../../Core/Common/Log"),Stats_1=require("../../../Core/Common/Stats"),Protocol_1=require("../../../Core/Define/Net/Protocol"),ControllerBase_1=require("../../../Core/Framework/ControllerBase"),Net_1=require("../../../Core/Net/Net"),ResourceSystem_1=require("../../../Core/Resource/ResourceSystem"),TimerSystem_1=require("../../../Core/Timer/TimerSystem"),Vector_1=require("../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../Core/Utils/MathUtils"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),Global_1=require("../../Global"),ControllerHolder_1=require("../../Manager/ControllerHolder"),ModelManager_1=require("../../Manager/ModelManager"),MAX_NUM_PER_FRAME=100;class GongduolaSummonController extends ControllerBase_1.ControllerBase{static OnInit(){return this.fsc=Stats_1.Stat.Create("GongduolaSummonController.QueryPoint"),!0}static StartSummonGongduola(t){if(ModelManager_1.ModelManager.GongduolaSummonModel.IsLoaded){if(!this.gsc){this.gsc=!0,this.Csc=t,this.psc=MathUtils_1.MathUtils.MaxFloat,this.vsc=0,this.ysc=void 0;t=Global_1.Global.BaseCharacter?.CharacterActorComponent;if(t){this.Ssc=t.ActorLocationProxy;var e=ModelManager_1.ModelManager.GongduolaSummonModel.SummonedActorComp;if(e&&e.Valid){e=e?.ActorLocationProxy;if(Vector_1.Vector.DistSquared2D(this.Ssc,e)<=ModelManager_1.ModelManager.GongduolaSummonModel.GetResummonDistanceSquared())return this.Adc(),void(this.gsc=!1)}e=t.ActorGravityDirectProxy;let o="NegativeZ";if(e?.Equals(Vector_1.Vector.UpVectorProxy))o="PositiveZ";else{if(!e?.Equals(Vector_1.Vector.DownVectorProxy))return void(Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.StartSummonGongduola] 未知的重力方向，只支持正反Z",["Gravity",e]));o="NegativeZ"}this.Msc=ModelManager_1.ModelManager.GongduolaSummonModel.GetSummonPointInfo(o),this.Msc.length<=0?Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.StartSummonGongduola] 未找到可召唤的点",["Gravity",o]):this.TDe=TimerSystem_1.TimerSystem.Forever(()=>{this.Esc()},50)}else Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.StartSummonGongduola] 未找到角色ActorComp"),this.gsc=!1}}else Log_1.Log.CheckError()&&Log_1.Log.Error("SummonGongdola",31,"[GongduolaSummonController.StartSummonGongduola] 未加载配置")}static Esc(){this.fsc.Start();let o=0;for(;this.vsc<this.Msc.length&&o<MAX_NUM_PER_FRAME;){var t=this.Msc[this.vsc],e=Vector_1.Vector.DistSquared2D(this.Ssc,t.Pos);e<=ModelManager_1.ModelManager.GongduolaSummonModel.GetRadiusSquared()&&e<this.psc&&(this.psc=e,this.ysc=t),this.vsc++,o++}var n;this.vsc>=this.Msc.length&&(TimerSystem_1.TimerSystem.Remove(this.TDe),this.ysc?((n=Protocol_1.Aki.Protocol.osc.create()).lT_=this.Csc,n.g5n=this.ysc.PbDataId,Net_1.Net.Call(26936,n,o=>{o?.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs&&ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(o.Q4n,21527),this.gsc=!1})):this.gsc=!1),this.fsc.Stop()}static OnClear(){return this.TDe&&(TimerSystem_1.TimerSystem.Remove(this.TDe),this.TDe=void 0),!0}static PlaySummonAnim(t){ModelManager_1.ModelManager.GongduolaSummonModel.SummonedActorComp=t.GetComponent(1),ResourceSystem_1.ResourceSystem.LoadAsync(ModelManager_1.ModelManager.GongduolaSummonModel.SummonAmPath,UE.AnimMontage,o=>{o?(this.Adc(),this.Isc=o,this.Tsc=t.GetComponent(232),this.Tsc?(this.bsc=t.GetComponent(233),this.bsc?(this.yfc=t.GetComponent(112),this.yfc?(this.Tsc.StartForceDisableAnimOptimization(3,!1),this.yfc.StartForceDisableAnimDelay(0),this.Tsc.Play(this.Isc,this.Lsc),Log_1.Log.CheckInfo()&&Log_1.Log.Info("SummonGongdola",31,"[CHTest] PlaySummonAnim"),TimerSystem_1.TimerSystem.Delay(()=>{ControllerHolder_1.ControllerHolder.CreatureController.SetEntityEnable(t,!0,"GongduolaSummonController.PlaySummonAnim",!0),this.bsc.IsSummoningPerform=!0,this.bsc?.EnableUeMovementTick("GongduolaSummonController.PlaySummonAnim")},100)):Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.PlaySummonAnim] 未找到UeSkeletalTickManageComponent")):Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.PlaySummonAnim] 未找到VehicleMoveComponent")):Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.PlaySummonAnim] 未找到VehicleAnimationComponent")):Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.PlaySummonAnim] 加载召唤动画失败",["Path",ModelManager_1.ModelManager.GongduolaSummonModel.SummonAmPath])})}static PlayCancelSummonAnim(t,e,n){ResourceSystem_1.ResourceSystem.LoadAsync(ModelManager_1.ModelManager.GongduolaSummonModel.CancelSummonAmPath,UE.AnimMontage,o=>{o?(this.wsc=o,ModelManager_1.ModelManager.GongduolaSummonModel.SummonLocation=e,ModelManager_1.ModelManager.GongduolaSummonModel.SummonRotation=n,this.Tsc=t.GetComponent(232),this.Tsc?(this.bsc=t.GetComponent(233),this.bsc?(this.Rsc=t.GetComponent(1),this.Rsc?(this.yfc=t.GetComponent(112),this.yfc?(this.bsc.IsSummoningPerform=!0,this.yfc.StartForceDisableAnimDelay(0),this.Tsc.StartForceDisableAnimOptimization(3,!1),this.bsc?.EnableUeMovementTick("GongduolaSummonController.PlaySummonAnim"),this.Tsc.Play(this.wsc,this.Asc),Log_1.Log.CheckInfo()&&Log_1.Log.Info("SummonGongdola",31,"[CHTest] PlayCancelSummonAnim")):Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.PlaySummonAnim] 未找到UeSkeletalTickManageComponent")):Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.PlaySummonAnim] 未找到BaseActorComponent")):Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.PlaySummonAnim] 未找到VehicleMoveComponent")):Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.PlaySummonAnim] 未找到VehicleAnimationComponent")):Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.PlaySummonAnim] 加载召唤动画失败",["Path",ModelManager_1.ModelManager.GongduolaSummonModel.SummonAmPath])})}static StopCancelSummonAnim(o){o=o.GetComponent(232);o?(o.StopMontage(),o.StopModelBuffer()):Log_1.Log.CheckError()&&Log_1.Log.Error("Item",31,"[GongduolaSummonController.PlaySummonAnim] 未找到VehicleAnimationComponent")}static Psc(){this.bsc.IsSummoningPerform=!1,this.yfc?.CancelForceDisableAnimDelay(0),this.Tsc?.CancelForceDisableAnimOptimization(3)}static Adc(){const o=ModelManager_1.ModelManager.GongduolaSummonModel.SummonConfig;var t;o?(t=ModelManager_1.ModelManager.GongduolaSummonModel.SummonedActorComp)&&t.Valid?(o.BanInput&&(ModelManager_1.ModelManager.GeneralLogicTreeModel.DisableInput=!0,EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.ForceReleaseInput,ModelManager_1.ModelManager.GongduolaSummonModel.BanInputReason),ControllerHolder_1.ControllerHolder.InputDistributeController.RefreshInputTag(),Log_1.Log.CheckInfo())&&Log_1.Log.Info("SummonGongdola",31,"[StartLookAtGongduola] StartLookAtGongduola BanInput"),(t=Vector_1.Vector.Create(t.ActorLocationProxy)).Set(t.X,t.Y,t.Z+o.OffsetZ),ControllerHolder_1.ControllerHolder.CameraController.FightCamera.LogicComponent.ApplyCameraGuide(t,o.FadeInTime,o.StayTime,o.FadeOutTime,o.LockCamera,void 0,void 0),t=o.FadeInTime+o.StayTime+o.FadeOutTime,TimerSystem_1.TimerSystem.Delay(()=>{o.BanInput&&(ModelManager_1.ModelManager.GeneralLogicTreeModel.DisableInput=!1,ControllerHolder_1.ControllerHolder.InputDistributeController.RefreshInputTag(),Log_1.Log.CheckInfo())&&Log_1.Log.Info("SummonGongdola",31,"[StartLookAtGongduola] StartLookAtGongduola StopBanInput")},t*MathUtils_1.MathUtils.SecondToMillisecond)):Log_1.Log.CheckError()&&Log_1.Log.Error("SummonGongdola",31,"[GongduolaSummonController.StartLookAtGongduola] 未找到GongduolaActorComp"):Log_1.Log.CheckError()&&Log_1.Log.Error("SummonGongdola",31,"[GongduolaSummonController.StartLookAtGongduola] 未找到召唤配置")}}exports.GongduolaSummonController=GongduolaSummonController,(_a=GongduolaSummonController).fsc=void 0,GongduolaSummonController.gsc=!1,GongduolaSummonController.Msc=[],GongduolaSummonController.Ssc=Vector_1.Vector.Create(),GongduolaSummonController.TDe=void 0,GongduolaSummonController.vsc=0,GongduolaSummonController.ysc=void 0,GongduolaSummonController.psc=MathUtils_1.MathUtils.MaxFloat,GongduolaSummonController.Csc=-1,GongduolaSummonController.Isc=void 0,GongduolaSummonController.wsc=void 0,GongduolaSummonController.Rsc=void 0,GongduolaSummonController.Tsc=void 0,GongduolaSummonController.bsc=void 0,GongduolaSummonController.yfc=void 0,GongduolaSummonController.Lsc=(o,t)=>{Log_1.Log.CheckInfo()&&Log_1.Log.Info("Temp",31,"[ChTest]OnSummonAnimEnd",["Montage",o?.GetName()],["interrupted",t]),o===_a.Isc&&(_a.Tsc.RemoveOnMontageEnded(_a.Lsc),_a.Psc())},GongduolaSummonController.Asc=(o,t)=>{Log_1.Log.CheckInfo()&&Log_1.Log.Info("Temp",31,"[ChTest]OnCancelSummonAnimEnd",["Montage",o?.GetName()],["interrupted",t]),o===_a.wsc&&(_a.Tsc.RemoveOnMontageEnded(_a.Asc),_a.Psc())};
//# sourceMappingURL=GongduolaSummonController.js.map