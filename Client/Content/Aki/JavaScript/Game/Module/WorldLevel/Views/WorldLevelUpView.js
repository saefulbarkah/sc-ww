
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WorldLevelUpView=void 0;const UE=require("ue"),CommonDefine_1=require("../../../../Core/Define/CommonDefine"),CommonParamById_1=require("../../../../Core/Define/ConfigCommon/CommonParamById"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),EffectSystem_1=require("../../../Effect/EffectSystem"),Global_1=require("../../../Global"),GlobalData_1=require("../../../GlobalData"),ConfigManager_1=require("../../../Manager/ConfigManager"),ModelManager_1=require("../../../Manager/ModelManager"),UiTickViewBase_1=require("../../../Ui/Base/UiTickViewBase"),EffectUtil_1=require("../../../Utils/EffectUtil"),LguiUtil_1=require("../../Util/LguiUtil");class WorldLevelUpView extends UiTickViewBase_1.UiTickViewBase{constructor(){super(...arguments),this.rvi=0,this.Ql=0,this.tEt=CommonParamById_1.configCommonParamById.GetIntConfig("WorldLevelDisplayTime"),this.s2o=()=>{this.eCo()}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIText],[1,UE.UIText],[2,UE.UIItem]]}OnStart(){this.eCo(),this.a2o()}OnAddEventListener(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.WorldLevelUpViewRefresh,this.s2o)}OnRemoveEventListener(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.WorldLevelUpViewRefresh,this.s2o)}eCo(){var e=ModelManager_1.ModelManager.WorldLevelModel.OriginWorldLevel,t=(this.GetText(0).SetText(e.toString()),ConfigManager_1.ConfigManager.WorldLevelConfig.GetWorldLevelConfig(e-1)?.PlayerLevelMax),e=ConfigManager_1.ConfigManager.WorldLevelConfig.GetWorldLevelConfig(e)?.PlayerLevelMax;LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(1),"WorldLevelTips",t,e)}OnTick(e){this.Ql<0||(this.Ql=this.Ql+e,this.Ql>this.tEt&&(this.$Oe(),this.Ql=CommonDefine_1.INVALID_VALUE))}$Oe(){this.CloseMe()}OnBeforeDestroy(){this._vi()}a2o(){var e,t,i,r;Global_1.Global.BaseCharacter&&(e=EffectUtil_1.EffectUtil.GetEffectPath("WorldLevelUpEffect"))&&0!==e.length&&(t=(i=Global_1.Global.BaseCharacter).D_GetTransform(),i=i.CapsuleComponent.CapsuleHalfHeight,(r=t.GetLocation()).Z-=i,t.SetLocation(r),this.rvi=EffectSystem_1.EffectSystem.SpawnUnloopedEffect(GlobalData_1.GlobalData.World,t,e,"[WorldLevelUpView.PlayWorldLevelUpEffect]"))}_vi(){EffectSystem_1.EffectSystem.IsValid(this.rvi)&&(EffectSystem_1.EffectSystem.StopEffectById(this.rvi,"[WorldLevelUpView.RecycleEffect]",!0),this.rvi=0)}}exports.WorldLevelUpView=WorldLevelUpView;
//# sourceMappingURL=WorldLevelUpView.js.map