
"use strict";var CharacterManipulateInteractComponent_1,__decorate=this&&this.__decorate||function(t,e,i,r){var a,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;0<=h;h--)(a=t[h])&&(n=(s<3?a(n):3<s?a(e,i,n):a(e,i))||n);return 3<s&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(exports,"__esModule",{value:!0}),exports.CharacterManipulateInteractComponent=void 0;const UE=require("ue"),Log_1=require("../../../../../Core/Common/Log"),CommonParamById_1=require("../../../../../Core/Define/ConfigCommon/CommonParamById"),Protocol_1=require("../../../../../Core/Define/Net/Protocol"),QueryTypeDefine_1=require("../../../../../Core/Define/QueryTypeDefine"),EntityComponent_1=require("../../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../../Core/Entity/RegisterComponent"),Net_1=require("../../../../../Core/Net/Net"),TimerSystem_1=require("../../../../../Core/Timer/TimerSystem"),GameplayTagUtils_1=require("../../../../../Core/Utils/GameplayTagUtils"),MathUtils_1=require("../../../../../Core/Utils/MathUtils"),TraceElementCommon_1=require("../../../../../Core/Utils/TraceElementCommon"),IComponent_1=require("../../../../../UniverseEditor/Interface/IComponent"),CameraController_1=require("../../../../Camera/CameraController"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),EffectContext_1=require("../../../../Effect/EffectContext/EffectContext"),EffectSystem_1=require("../../../../Effect/EffectSystem"),Global_1=require("../../../../Global"),GlobalData_1=require("../../../../GlobalData"),ControllerHolder_1=require("../../../../Manager/ControllerHolder"),ModelManager_1=require("../../../../Manager/ModelManager"),SceneTeamController_1=require("../../../../Module/SceneTeam/SceneTeamController"),CharacterBuffIds_1=require("./Abilities/CharacterBuffIds"),PROFILE_KEY="CharacterManipulateInteractComponent_RefreshTarget",MANIPULATE_VISION_ID=1003,SPHERE_TRACE_RADIUS=1,ragDollUsableTags=[-1347421268,1978109078,-798481435,-154105489];let CharacterManipulateInteractComponent=CharacterManipulateInteractComponent_1=class CharacterManipulateInteractComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.Hte=void 0,this.Lie=void 0,this.$zo=void 0,this.EIe=void 0,this.Fon=void 0,this.$7r=new Set,this.gri=void 0,this.bsr=void 0,this.Y7r=void 0,this.J7r=void 0,this.z7r=!0,this.Z7r=!0,this.tat=void 0,this.iHr=void 0,this.Bbn=void 0,this.rrn=!1,this.pil=void 0,this.fil=void 0,this.a7r=()=>{ModelManager_1.ModelManager.RouletteModel.CurrentExploreSkillId===MANIPULATE_VISION_ID?this.rrn&&this.lHr(!0):this.lHr(!1)},this.oHr=!1,this.rHr=void 0,this.QEl=[],this.nHr=void 0,this.aHr=(t,e)=>{e?(this.nHr=this.Y7r,this.nHr?.Type===IComponent_1.EExploreSkillInteractType.StatueInteractPoint&&this.nHr.StartInteractPullStatue()):this.nHr=void 0},this.KEl=()=>{var t=-1326291748;1===ModelManager_1.ModelManager.SceneTeamModel.CurrentGroupType&&this.Lie.HasAnyTag(ragDollUsableTags)?this.Lie.AddTag(t):this.Lie.RemoveTag(t)}}set hHr(t){var e=void 0!==t&&this.z7r;!e&&this.Fon?.IsNeedResetSkill()?this.rrn=!1:e||this.lHr(e),this.Y7r===t&&this.Z7r===this.z7r||(EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnManipulateSwitchToNewTarget,void 0!==t&&this.z7r,t?.Entity,!1),this.Y7r?.ChangeManipulateInteractPointState(0),this.Y7r=t,this.Z7r=this.z7r,this.Y7r?.ChangeManipulateInteractPointState(this.z7r?1:2),void 0!==t&&this.z7r&&this.lHr(!1,!1),this.pil=this.fil,this.fil=this.Y7r?.MarkTagId),this.z7r=!0}get hHr(){return this.Y7r}OnStart(){return this.Hte=this.Entity.GetComponent(3),this.Lie=this.Entity.GetComponent(194),this.$zo=this.Entity.GetComponent(163),this.EIe=this.Entity.GetComponent(0),this.Fon=this.Entity.GetComponent(48),this.gri=CameraController_1.CameraController.FightCamera.GetComponent(5),this.tat=CommonParamById_1.configCommonParamById.GetStringConfig("ManipulateInteractEffectPath"),this.Bbn=ModelManager_1.ModelManager.ManipulateInteractModel,this.InitTraceInfo(),this.dde(),!0}OnEnable(){this.hHr?.Type!==IComponent_1.EExploreSkillInteractType.RagDollCrushingRock&&(this.cHr(),void 0===this.hHr)&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnManipulateSwitchToNewTarget,!1,void 0,!1)}OnTick(t){Global_1.Global.BaseCharacter===this.Hte.Actor&&(this._Hr(-1726247959,0<this.Bbn.InRangePoints.size),this.uHr()?this.cHr():this.mHr())}cHr(){if(this.Bbn.InRangePoints.size<=0||this.oHr)this.rrn=!1,this.hHr=void 0;else{this.$7r.clear(),TraceElementCommon_1.TraceElementCommon.SetStartLocation(this.bsr,this.Hte.ActorLocation);var i=new Set;for(const n of this.Bbn.InRangePoints)n.Valid?n.IsLocked||(n.CheckCondition()?this.x1h(n.MatchRoleOption)&&n.TypeSpecialCheck()&&this.$7r.add(n):this.hHr===n&&this.mHr()):i.add(n);for(const h of i)this.Bbn.InRangePoints.delete(h);var r,a=this.Hte.ActorLocationProxy;let t=-MathUtils_1.MathUtils.MaxFloat,e=void 0;for(const o of this.$7r){var s=o.GetLockWeight(a);s>t&&(t=s,e=o)}if(e=t===-MathUtils_1.MathUtils.MaxFloat?void 0:e)if(this.ProjectWorldLocationToScreenPosition(e.Location))return TraceElementCommon_1.TraceElementCommon.SetEndLocation(this.bsr,e.Location.ToUeVectorOld()),r=TraceElementCommon_1.TraceElementCommon.SphereTrace(this.bsr,PROFILE_KEY),e.CheckTraceResult(r,this.bsr)&&(this.z7r=!1),this.hHr=e,void(this.z7r?ModelManager_1.ModelManager.RouletteModel.CurrentExploreSkillId!==MANIPULATE_VISION_ID?this.rrn=!0:this.lHr(!0):(this.rrn=!1,this.Fon.IsNeedResetSkill()||this.lHr(!1)));this.hHr=void 0,this.rrn=!1,this.Fon.IsNeedResetSkill()||this.lHr(!1)}}ProjectWorldLocationToScreenPosition(t){return this.gri.CheckPositionInScreen(t,this.gri.CameraAdjustController.CheckInScreenMinX,this.gri.CameraAdjustController.CheckInScreenMaxX,this.gri.CameraAdjustController.CheckInScreenMinY,this.gri.CameraAdjustController.CheckInScreenMaxY)}uHr(){return Global_1.Global.BaseCharacter===this.Hte.Actor&&(CharacterManipulateInteractComponent_1.dHr?!this.Lie.HasTag(283451623)&&!!this.Lie.HasTag(-1898186757):(ModelManager_1.ModelManager.RouletteModel.UnlockExploreSkillDataMap.has(MANIPULATE_VISION_ID)&&(CharacterManipulateInteractComponent_1.dHr=!0),!1))}x1h(t){return!t||t.length<=0?!ModelManager_1.ModelManager.SceneTeamModel.IsPhantomTeam:SceneTeamController_1.SceneTeamController.IsMatchRoleOption(t)}mHr(){this.hHr=void 0,this.rrn=!1}InitTraceInfo(){this.bsr=UE.NewObject(UE.TraceSphereElement.StaticClass()),this.bsr.WorldContextObject=this.Hte.Owner,this.bsr.bIsSingle=!1,this.bsr.bIgnoreSelf=!0,this.bsr.SetTraceTypeQuery(QueryTypeDefine_1.KuroTraceTypeQuery.Visible),this.bsr.Radius=SPHERE_TRACE_RADIUS}dde(){if(this.Lie?.Valid){this.rHr=this.Lie?.ListenForTagAddOrRemove(-182189170,this.aHr);for(const e of ragDollUsableTags){var t=this.Lie.ListenForTagAddOrRemove(e,this.KEl);t&&this.QEl.push(t)}}EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnUpdateSceneTeam,this.KEl),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnChangeSelectedExploreId,this.a7r)}Cde(){this.rHr&&this.rHr.EndTask();for(const t of this.QEl)t.EndTask();this.QEl.length=0,EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnUpdateSceneTeam,this.KEl),EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnChangeSelectedExploreId,this.a7r)&&EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnChangeSelectedExploreId,this.a7r)}lHr(t,e=!0){var i;(this.fil||this.pil)&&(i=this.fil??this.pil,t?this.Lie.HasTag(i)||(this.Lie.AddTag(i),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Temp",31,"AddOrRemoveMarkingTag",["MarkTagId",this.fil?GameplayTagUtils_1.GameplayTagUtils.GetNameByTagId(this.fil):"undefined"],["PervTagId",this.pil?GameplayTagUtils_1.GameplayTagUtils.GetNameByTagId(this.pil):"undefined"],["isAdd",t])):(this.Lie.HasTag(i)&&(this.Lie.RemoveTag(i),Log_1.Log.CheckInfo())&&Log_1.Log.Info("Temp",31,"AddOrRemoveMarkingTag",["MarkTagId",this.fil?GameplayTagUtils_1.GameplayTagUtils.GetNameByTagId(this.fil):"undefined"],["PervTagId",this.pil?GameplayTagUtils_1.GameplayTagUtils.GetNameByTagId(this.pil):"undefined"],["isAdd",t]),e&&(this.fil=void 0)))}OnClear(){return this.Hte=void 0,this.Lie=void 0,this.Cde(),!0}StartPullGiantInteract(){if(this.Y7r?.Type!==IComponent_1.EExploreSkillInteractType.PullGiant)return Log_1.Log.CheckError()&&Log_1.Log.Error("Character",31,"[CharacterManipulateInteractComponent.StartPullGiantInteract] 当前选中目标的类型非拉取巨物"),!1;if(!this.Z7r)return!1;if(!this.nHr?.Valid&&!this.Y7r?.Valid)return Log_1.Log.CheckError()&&Log_1.Log.Error("Character",31,"[CharacterManipulateInteractComponent.StartPullGiantInteract] 当前没有选中任何目标"),!1;if(this.oHr)return Log_1.Log.CheckError()&&Log_1.Log.Error("Character",31,"[CharacterManipulateInteractComponent.StartInteract] 当前角色已经在拉取巨物中"),!1;this.J7r=this.nHr??this.Y7r,this.oHr=!0,this.Lie.AddTag(-1408007765),this.J7r?.ChangeManipulateInteractPointState(3);var t=this.Hte.CreatureData.GetRoleConfig().RoleBody;return this.iHr="MaleXL"===t?CharacterBuffIds_1.buffId.ManipulateInteractBuffIdMaleX:CharacterBuffIds_1.buffId.ManipulateInteractBuffId,this.$zo.AddBuff(this.iHr,{InstigatorId:this.EIe.GetCreatureDataId(),Level:1,Reason:"[CharacterManipulateInteractComponent]"}),!0}EndPullGiantInteract(){this.oHr=!1,this.Lie.RemoveTag(-1408007765),this.NQt(),this.iHr&&TimerSystem_1.TimerSystem.Delay(()=>{this.$zo&&this.iHr&&(this.$zo.RemoveBuff(this.iHr,-1,"[CharacterManipulateInteractComponent]"),this.iHr=void 0)},200),this.J7r?.ChangeManipulateInteractPointState(0),this.CHr()}StartStatueInteract(){if(this.J7r=this.nHr??this.Y7r,this.J7r?.Type!==IComponent_1.EExploreSkillInteractType.StatueInteractPoint)return Log_1.Log.CheckError()&&Log_1.Log.Error("Character",31,"[CharacterManipulateInteractComponent.StartStatueInteract] 当前选中目标的类型非雕像交互点"),!1;if(!this.Z7r)return!1;if(!this.nHr?.Valid&&!this.Y7r?.Valid)return Log_1.Log.CheckError()&&Log_1.Log.Error("Character",31,"[CharacterManipulateInteractComponent.StartStatueInteract] 当前没有选中任何目标"),!1;if(this.oHr)return Log_1.Log.CheckError()&&Log_1.Log.Error("Character",31,"[CharacterManipulateInteractComponent.StartStatueInteract] 当前角色已经交互中"),!1;this.oHr=!0,this.J7r?.ChangeManipulateInteractPointState(3);var t=this.Hte.CreatureData.GetRoleConfig().RoleBody;return this.iHr="MaleXL"===t?CharacterBuffIds_1.buffId.ManipulateInteractBuffIdMaleX:CharacterBuffIds_1.buffId.ManipulateInteractBuffId,this.$zo.AddBuff(this.iHr,{InstigatorId:this.EIe.GetCreatureDataId(),Level:1,Reason:"[CharacterManipulateInteractComponent]"}),!0}EndStatueInteract(){const t=this.J7r;TimerSystem_1.TimerSystem.Delay(()=>{this.oHr=!1,t?.EndInteractPullStatue(),this.$zo&&this.iHr&&(this.$zo.RemoveBuff(this.iHr,-1,"[CharacterManipulateInteractComponent]"),this.iHr=void 0)},200),t?.ChangeManipulateInteractPointState(0),t?.MoveToOutlet(),this.J7r=void 0}StartCustomInteract(){return this.Y7r?.Type!==IComponent_1.EExploreSkillInteractType.Custom?(Log_1.Log.CheckError()&&Log_1.Log.Error("Character",31,"[CharacterManipulateInteractComponent.StartCustomInteract] 当前选中目标的类型非自定义交互点"),!1):!(!this.Z7r||(this.nHr?.Valid||this.Y7r?.Valid?this.oHr?(Log_1.Log.CheckError()&&Log_1.Log.Error("Character",31,"[CharacterManipulateInteractComponent.StartCustomInteract] 当前角色已经交互中"),1):(this.J7r=this.nHr??this.Y7r,this.oHr=!0,this.J7r?.ChangeManipulateInteractPointState(3),0):(Log_1.Log.CheckError()&&Log_1.Log.Error("Character",31,"[CharacterManipulateInteractComponent.StartCustomInteract] 当前没有选中任何目标"),1)))}EndCustomInteract(){this.oHr=!1,this.J7r?.ChangeManipulateInteractPointState(0),this.Bpl()}NQt(){var t,e=(this.J7r?.Entity.GetComponent(1))?.ActorTransform;e&&(t=this.Hte?.ActorLocation)&&(e.SetRotation(new UE.Quat(UE.KismetMathLibrary.D_FindLookAtRotation(t,e.GetLocation()))),EffectSystem_1.EffectSystem.SpawnEffect(GlobalData_1.GlobalData.World,e,this.tat,"[CharacterManipulateInteractComponent.SpawnEffect]",new EffectContext_1.EffectContext(this.Entity.Id)))}CHr(){var t,e=this.J7r?.CreatureDataId;void 0!==e&&((t=Protocol_1.Aki.Protocol.Mts.create()).F4n=MathUtils_1.MathUtils.NumberToLong(e),Net_1.Net.Call(23142,t,t=>{this.J7r=void 0,t.Cvs!==Protocol_1.Aki.Protocol.Q4n.KRs&&ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(t.Cvs,16086)}))}Bpl(){var t,e=this.J7r?.CreatureDataId;void 0!==e&&((t=Protocol_1.Aki.Protocol.EJl.create()).F4n=MathUtils_1.MathUtils.NumberToLong(e),Net_1.Net.Call(25564,t,t=>{this.J7r=void 0,t.Cvs!==Protocol_1.Aki.Protocol.Q4n.KRs&&ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(t.Cvs,28250)}))}GetTargetLocation(){return this.J7r?.Location??this.hHr.Location}_Hr(t,e){!this.Lie.HasTag(t)&&e?this.Lie.AddTag(t):this.Lie.HasTag(t)&&!e&&this.Lie.RemoveTag(t)}ClearTarget(){this.lHr(!1),this.Y7r=void 0}SetDataFromOldRole(t){t=t.Entity.GetComponent(59);this.hHr=t.hHr,this.lHr(!0)}CheckCurrentTargetCanInteract(){var t=this.nHr??this.Y7r;return!!t?.Valid&&t.OnlineTypeCanInteract}get GetCurrentTarget(){return this.nHr??this.Y7r}};CharacterManipulateInteractComponent.dHr=!1,CharacterManipulateInteractComponent=CharacterManipulateInteractComponent_1=__decorate([(0,RegisterComponent_1.RegisterComponent)(59)],CharacterManipulateInteractComponent),exports.CharacterManipulateInteractComponent=CharacterManipulateInteractComponent;
//# sourceMappingURL=CharacterManipulateInteractComponent.js.map