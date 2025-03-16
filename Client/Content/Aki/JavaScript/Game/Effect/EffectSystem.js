
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EffectSystem=exports.EFFECT_LIFETIME_FLOAT_TO_INT=exports.EFFECT_REASON_LENGTH_LIMIT=void 0;const cpp_1=require("cpp"),Info_1=require("../../Core/Common/Info"),Lru_1=require("../../Core/Container/Lru"),EffectEnvironment_1=require("../../Core/Effect/EffectEnvironment"),KuroEffectSystem_1=require("./KuroEffectSystem/KuroEffectSystem"),TsEffectSystem_1=require("./TsEffectSystem");exports.EFFECT_REASON_LENGTH_LIMIT=4,exports.EFFECT_LIFETIME_FLOAT_TO_INT=1e4;class EffectSystem{static get l_c(){return this.xuc||(this.xuc=new KuroEffectSystem_1.KuroEffectSystem),this.xuc}static get __c(){return this.Uuc||(this.Uuc=new TsEffectSystem_1.TsEffectSystem),this.Uuc}static Initialize(){if(this.h_c=EffectEnvironment_1.EffectEnvironment.OpenCppOptimize,cpp_1.FEffectSystem.SetUseDebugDrawNew(this.h_c),this.h_c){if(this.l_c.Initialize())return!0;this.h_c=!1}return this.__c.Initialize()}static Clear(){return(this.h_c?this.l_c:this.__c).Clear()}static InitializeWithPreview(t){if(!Info_1.Info.IsGameRunning()){if(this.h_c=EffectEnvironment_1.EffectEnvironment.OpenCppOptimize,this.h_c){if(this.l_c.InitializeWithPreview(t))return;this.h_c=!1}this.__c.InitializeWithPreview(t)}}static Tick(t){(this.h_c?this.l_c:this.__c).Tick(t)}static AfterTick(t){this.h_c||this.__c.AfterTick(t)}static ClearPool(){(this.h_c?this.l_c:this.__c).ClearPool()}static InitHandleWhenEnable(t){return!this.h_c&&this.__c.InitHandleWhenEnable(t)}static SpawnChildEffect(t,i,s,e,h,r=!0,a,c,n){if(!this.h_c)return this.__c.SpawnChildEffect(t,i,s,e,h,r,a,c,n)}static AddRemoveHandle(t,i){this.h_c||this.__c.AddRemoveHandle(t,i)}static StopEffect(t,i,s,e){return!this.h_c&&this.__c.StopEffect(t,i,s,e)}static CreateEffectLru(t){return this.h_c?new Lru_1.Lru(t):this.__c.CreateEffectLru(t)}static SpawnEffectWithActor(t,i,s,e,h=!0,r,a=!0,c=3){return this.h_c?this.l_c.SpawnEffectWithActor(t,i,s,e,h,r,a,c):this.__c.SpawnEffectWithActor(t,void 0,i,s,e,h,r,void 0,void 0,a,void 0,c,void 0,!0)}static RemoveKuroEffectHandle(t){this.h_c&&this.l_c.RemoveKuroEffectHandle(t)}static GetEffectLruCount(t){return(this.h_c?this.l_c:this.__c).GetEffectLruCount(t)}static GetEffectLruCapacity(){return(this.h_c?this.l_c:this.__c).GetEffectLruCapacity()}static SetEffectLruCapacity(t){(this.h_c?this.l_c:this.__c).SetEffectLruCapacity(t)}static GetEffectLruSize(){return(this.h_c?this.l_c:this.__c).GetEffectLruSize()}static SpawnUnloopedEffect(t,i,s,e,h,r=3,a,c,n,f=!1,o=!1){return(this.h_c?this.l_c:this.__c).SpawnUnloopedEffect(t,i,s,e,h,r,a,c,n,f,o)}static SpawnEffect(t,i,s,e,h,r=3,a,c,n,f=!1,o=!1){return(this.h_c?this.l_c:this.__c).SpawnEffect(t,i,s,e,h,r,a,c,n,f,o)}static DynamicRegisterSpawnCallback(t,i){(this.h_c?this.l_c:this.__c).DynamicRegisterSpawnCallback(t,i)}static ForceCheckPendingInit(t){(this.h_c?this.l_c:this.__c).ForceCheckPendingInit(t)}static SetEffectHidden(t,i,s=void 0,e=!1){(this.h_c?this.l_c:this.__c).SetEffectHidden(t,i,s,e)}static StopEffectById(t,i,s,e){return(this.h_c?this.l_c:this.__c).StopEffectById(t,i,s,e)}static IsValid(t){return(this.h_c?this.l_c:this.__c).IsValid(t)}static AddFinishCallback(t,i){(this.h_c?this.l_c:this.__c).AddFinishCallback(t,i)}static RemoveFinishCallback(t,i){(this.h_c?this.l_c:this.__c).RemoveFinishCallback(t,i)}static GetEffectActor(t){return(this.h_c?this.l_c:this.__c).GetEffectActor(t)}static GetSureEffectActor(t){return(this.h_c?this.l_c:this.__c).GetSureEffectActor(t)}static GetNiagaraComponent(t){return(this.h_c?this.l_c:this.__c).GetNiagaraComponent(t)}static GetSureNiagaraComponent(t){return(this.h_c?this.l_c:this.__c).GetSureNiagaraComponent(t)}static ReplayEffect(t,i,s=void 0){(this.h_c?this.l_c:this.__c).ReplayEffect(t,i,s)}static IsPlaying(t){return(this.h_c?this.l_c:this.__c).IsPlaying(t)}static SetHandleLifeCycle(t,i){(this.h_c?this.l_c:this.__c).SetHandleLifeCycle(t,i)}static SetTimeScale(t,i,s=!1){(this.h_c?this.l_c:this.__c).SetTimeScale(t,i,s)}static FreezeHandle(t,i,s=!1){(this.h_c?this.l_c:this.__c).FreezeHandle(t,i,s)}static IsHandleFreeze(t){return(this.h_c?this.l_c:this.__c).IsHandleFreeze(t)}static HandleSeekToTime(t,i,s,e=!1){return(this.h_c?this.l_c:this.__c).HandleSeekToTime(t,i,s,e)}static HandleSeekToTimeWithProcess(t,i,s=!1,e=-1){(this.h_c?this.l_c:this.__c).HandleSeekToTimeWithProcess(t,i,s,e)}static GetSeekToTargetTime(t){return(this.h_c?this.l_c:this.__c).GetSeekToTargetTime(t)}static SetEffectNotRecord(t,i=!0){(this.h_c?this.l_c:this.__c).SetEffectNotRecord(t,i)}static GetPath(t){return(this.h_c?this.l_c:this.__c).GetPath(t)}static SetEffectDataByNiagaraParam(t,i,s){(this.h_c?this.l_c:this.__c).SetEffectDataByNiagaraParam(t,i,s)}static SetEffectParameterNiagara(t,i){(this.h_c?this.l_c:this.__c).SetEffectParameterNiagara(t,i)}static SetEffectDataFloatConstParam(t,i,s){(this.h_c?this.l_c:this.__c).SetEffectDataFloatConstParam(t,i,s)}static SetEffectExtraState(t,i){(this.h_c?this.l_c:this.__c).SetEffectExtraState(t,i)}static SetEffectIgnoreVisibilityOptimize(t,i){(this.h_c?this.l_c:this.__c).SetEffectIgnoreVisibilityOptimize(t,i)}static SetEffectStoppingTime(t,i){(this.h_c?this.l_c:this.__c).SetEffectStoppingTime(t,i)}static get GlobalStoppingPlayTime(){return this.h_c?this.l_c.GlobalStoppingPlayTime():this.__c.GlobalStoppingPlayTime}static get GlobalStoppingTime(){return this.h_c?this.l_c.GlobalStoppingTime():this.__c.GlobalStoppingTime}static SetGlobalStoppingTime(t,i){(this.h_c?this.l_c:this.__c).SetGlobalStoppingTime(t,i)}static AttachToEffectSkeletalMesh(t,i,s,e){(this.h_c?this.l_c:this.__c).AttachToEffectSkeletalMesh(t,i,s,e)}static AttachSkeletalMesh(t,i){(this.h_c?this.l_c:this.__c).AttachSkeletalMesh(t,i)}static CollectMaterialFloatCurve(t,i,s){(this.h_c?this.l_c:this.__c).CollectMaterialFloatCurve(t,i,s)}static CollectMaterialVectorCurve(t,i,s){(this.h_c?this.l_c:this.__c).CollectMaterialVectorCurve(t,i,s)}static CollectMaterialLinearColorCurve(t,i,s){(this.h_c?this.l_c:this.__c).CollectMaterialLinearColorCurve(t,i,s)}static GetEffectModel(t){return(this.h_c?this.l_c:this.__c).GetEffectModel(t)}static GetTotalPassTime(t){return(this.h_c?this.l_c:this.__c).GetTotalPassTime(t)}static GetPassTime(t){return(this.h_c?this.l_c:this.__c).GetPassTime(t)}static GetHideOnBurstSkill(t){return(this.h_c?this.l_c:this.__c).GetHideOnBurstSkill(t)}static RegisterCustomCheckOwnerFunc(t,i){(this.h_c?this.l_c:this.__c).RegisterCustomCheckOwnerFunc(t,i)}static TickHandleInEditor(t,i){(this.h_c?this.l_c:this.__c).TickHandleInEditor(t,i)}static GetLastPlayTime(t){return(this.h_c?this.l_c:this.__c).GetLastPlayTime(t)}static GetLastStopTime(t){return(this.h_c?this.l_c:this.__c).GetLastStopTime(t)}static UpdateBodyEffect(t,i,s,e){(this.h_c?this.l_c:this.__c).UpdateBodyEffect(t,i,s,e)}static DebugUpdate(t,i){(this.h_c?this.l_c:this.__c).DebugUpdate(t,i)}static GetEffectCount(){return(this.h_c?this.l_c:this.__c).GetEffectCount()}static GetActiveEffectCount(){return(this.h_c?this.l_c:this.__c).GetActiveEffectCount()}static DebugPrintAllErrorEffects(){(this.h_c?this.l_c:this.__c).DebugPrintAllErrorEffects()}static DebugPrintCurrentImportanceEffects(){(this.h_c?this.l_c:this.__c).DebugPrintCurrentImportanceEffects()}static DebugPrintEffect(){(this.h_c?this.l_c:this.__c).DebugPrintEffect()}static GetPlayerEffectLruSize(t){return(this.h_c?this.l_c:this.__c).GetPlayerEffectLruSize(t)}static SetEffectStartRecording(t,i,s,e){this.h_c&&this.l_c.SetEffectStartRecording(t,i,s,e),this.__c.SetEffectStartRecording(t,i,s,e)}}(exports.EffectSystem=EffectSystem).xuc=void 0,EffectSystem.Uuc=void 0,EffectSystem.h_c=!1;
//# sourceMappingURL=EffectSystem.js.map