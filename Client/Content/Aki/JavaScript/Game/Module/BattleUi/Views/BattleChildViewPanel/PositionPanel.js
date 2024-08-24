
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PositionPanel=void 0;const puerts_1=require("puerts"),UE=require("ue"),ActorSystem_1=require("../../../../../Core/Actor/ActorSystem"),Info_1=require("../../../../../Core/Common/Info"),Stats_1=require("../../../../../Core/Common/Stats"),Time_1=require("../../../../../Core/Common/Time"),Protocol_1=require("../../../../../Core/Define/Net/Protocol"),GameBudgetInterfaceController_1=require("../../../../../Core/GameBudgetAllocator/GameBudgetInterfaceController"),Net_1=require("../../../../../Core/Net/Net"),ResourceSystem_1=require("../../../../../Core/Resource/ResourceSystem"),BaseConfigController_1=require("../../../../../Launcher/BaseConfig/BaseConfigController"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),PublicUtil_1=require("../../../../Common/PublicUtil"),TimeUtil_1=require("../../../../Common/TimeUtil"),EffectSystem_1=require("../../../../Effect/EffectSystem"),Global_1=require("../../../../Global"),ModelManager_1=require("../../../../Manager/ModelManager"),FeatureRestrictionTemplate_1=require("../../../Common/FeatureRestrictionTemplate"),BattleChildViewPanel_1=require("./BattleChildViewPanel"),ENTITY_SCORE_PATH="../Config/Raw/Tables/k.可视化编辑/EntityPerformanceData.json",SIMPLE_NPC_PERFORMANCE_SCORE=25,LOW_SCORE_THRESHOLD=300,MID_SCORE_THRESHOLD=500,HIGH_SCORE_THRESHOLD=600,LOW_SCORE_COLOR="green",MID_SCORE_COLOR="orange",HIGH_SCORE_COLOR="purple",WARNING_COLOR="red",budgetName=["Normal","Fighting","Cutscene"],loadModeName=["None","InLoading","InGame"];class PositionPanel extends BattleChildViewPanel_1.BattleChildViewPanel{constructor(){super(...arguments),this.pet=void 0,this.F0a=void 0,this.vet=void 0,this.Met=!0,this.dsa=!1,this.Eet="",this.V0a="",this.SH=new Map,this.yet=500,this.pk=0,this.H0a=0,this.j0a=0,this.ShowPlayerPosition=()=>{this.Met=!this.Met,this.pet.SetUIActive(this.Met)}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIText],[1,UE.UIText],[2,UE.UIText]]}OnStart(){this.dsa=FeatureRestrictionTemplate_1.FeatureRestrictionTemplate.TemplateForPioneerClient.Check(),this.pet=this.GetText(0),this.F0a=this.GetText(2),this.vet=this.GetText(1),Info_1.Info.IsBuildShipping||this.W0a(),this.dsa?this.Met=!0:Info_1.Info.IsBuildShipping&&(this.Met=!1),this.pet.SetUIActive(this.Met),this.F0a.SetUIActive(!1)}AddEvents(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.ShowPlayerPosition,this.ShowPlayerPosition)}RemoveEvents(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.ShowPlayerPosition,this.ShowPlayerPosition)}OnBeforeDestroy(){this.pet=void 0,this.F0a=void 0}OnAfterTickBattleChildViewPanel(e){var t,i;Global_1.Global.BaseCharacter&&(t=Global_1.Global.BaseCharacter.CharacterActorComponent.ActorLocationProxy,[e,t,i]=(this.Met&&this.Iet(t,e),[(t.X/100).toFixed(0),(t.Y/100).toFixed(0),(t.Z/100).toFixed(0)]),this.vet.SetText(e+`,${t},`+i))}Iet(e,t){var i=e.X.toFixed(0),r=e.Y.toFixed(0),e=e.Z.toFixed(0),o=(this.H0a+=this.Q0a,this.j0a++,TimeUtil_1.TimeUtil.DateFormat2(new Date)),s=TimeUtil_1.TimeUtil.DateFormat2(new Date(TimeUtil_1.TimeUtil.GetServerTimeStamp())),_=Net_1.Net.GetUnVerifiedMessageCount(),_=10<_?`
协议缓存队列长度:`+_:"",n=(1e3/t).toFixed(0),a=ActorSystem_1.ActorSystem.Size,l=ActorSystem_1.ActorSystem.Capacity,h=BaseConfigController_1.BaseConfigController.GetPackageConfigOrDefault("Stream"),m=ModelManager_1.ModelManager.BulletModel?.GetBulletEntityMap().size;this.pk+=t,this.pk>this.yet&&(this.pk=0,this.UpdateEffectState(),this.K0a());let C=`Fps:${n} Pos: (${i},${r},${e})`;C=(C=!this.dsa&&0<this.SH.size?C+"  "+this.V0a:C)+` 
CTime:${o}
STime:${s}
GTime:`+ModelManager_1.ModelManager.TimeOfDayModel.GameTime.HourMinuteString,this.dsa||(C=`${C=(C=C+" ServerIp:"+ModelManager_1.ModelManager.LoginModel.Platform+_+this.Eet)+" Bullet:"+m}
ActorPool:${a}/${l} (${h}) LoadMode:${loadModeName[ResourceSystem_1.ResourceSystem.GetLoadMode()]} BudgetMode:`+budgetName[GameBudgetInterfaceController_1.GameBudgetInterfaceController.CurrentGlobalMode]),this.pet.SetText(C)}UpdateEffectState(){var e=EffectSystem_1.EffectSystem.GetEffectCount(),t=EffectSystem_1.EffectSystem.GetActiveEffectCount(),i=EffectSystem_1.EffectSystem.GetEffectLruSize(),r=EffectSystem_1.EffectSystem.GetEffectLruCapacity(),o=EffectSystem_1.EffectSystem.GetPlayerEffectLruSize(0),s=EffectSystem_1.EffectSystem.GetPlayerEffectLruSize(1),_=EffectSystem_1.EffectSystem.GetPlayerEffectLruSize(2),n=EffectSystem_1.EffectSystem.GetPlayerEffectLruSize(3);this.Eet=`
Effect: ${e}(${t}) Pool:${i}/${r}(${o})(${s})(${_})(${n})`}K0a(){if(0!==this.SH.size){var r=Math.floor(this.H0a/this.j0a);let e=WARNING_COLOR,t="",i="";this.F0a.SetUIActive(!1),r<LOW_SCORE_THRESHOLD?e=LOW_SCORE_COLOR:r<MID_SCORE_THRESHOLD?(e=MID_SCORE_COLOR,t="<b>",i="</b>"):r<HIGH_SCORE_THRESHOLD?(e=HIGH_SCORE_COLOR,t="<size=+6><b>",i="</b></size>"):r>=HIGH_SCORE_THRESHOLD&&(e=WARNING_COLOR,t="<size=+18><b>",i="</b></size>",this.F0a.SetUIActive(!0),this.F0a.SetText(`<size=+28><b><color=red>Warning!!!此处Aoi范围内可Tick实体过多，有性能问题。TickScore:${r}</color></b></size>`)),this.V0a=`<color=${e}>${t}TickScore:${r}${i}</color>`,this.H0a=0,this.j0a=0}}get Q0a(){let i=0;return ModelManager_1.ModelManager.CreatureModel.GetAllEntities().forEach(e=>{var t;e.Entity.LastTickFrame===Time_1.Time.Frame&&(t=(e=e.Entity.GetComponent(0)).GetPbDataId(),e?.GetEntityType()!==Protocol_1.Aki.Protocol.wks.Proto_Player)&&e?.GetEntityType()!==Protocol_1.Aki.Protocol.wks.Proto_Vision&&14000169!==t&&(t=e?.GetPbEntityInitData())&&(i+=this.$0a(t.BlueprintType))}),Math.floor(i)}$0a(e){return e.includes("SimpleNPC")?SIMPLE_NPC_PERFORMANCE_SCORE:void 0===(e=this.SH.get(e))?0:e}W0a(){var e=(0,PublicUtil_1.getConfigPath)(ENTITY_SCORE_PATH),t=(0,puerts_1.$ref)("");if(UE.KuroStaticLibrary.LoadFileToString(t,e),e=(0,puerts_1.$unref)(t)){t=JSON.parse(e);if(t){e=t.EntityTypeScore;if(e){this.SH.clear();for(const i of e)this.SH.set(i.BlueprintType,Math.floor(10*i.Score)/10)}}}}}(exports.PositionPanel=PositionPanel).vJe=void 0;
//# sourceMappingURL=PositionPanel.js.map