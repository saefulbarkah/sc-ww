
"use strict";var VehicleAbilityComponent_1,__decorate=this&&this.__decorate||function(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;0<=s;s--)(o=t[s])&&(r=(a<3?o(r):3<a?o(e,i,r):o(e,i))||r);return 3<a&&r&&Object.defineProperty(e,i,r),r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.VehicleAbilityComponent=void 0;const UE=require("ue"),Log_1=require("../../../../Core/Common/Log"),EntityComponent_1=require("../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../Core/Entity/RegisterComponent"),GameplayTagUtils_1=require("../../../../Core/Utils/GameplayTagUtils"),MathUtils_1=require("../../../../Core/Utils/MathUtils"),CharacterNameDefines_1=require("../../Character/Common/CharacterNameDefines");let VehicleAbilityComponent=VehicleAbilityComponent_1=class VehicleAbilityComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.ActorComp=void 0,this.TagComponent=void 0,this.TsAbilityComponentInternal=void 0,this.LastPerformanceTag="",this.GameplayEventTask=void 0,this.GameplayEventCallbacks=new Map,this.GameplayEventCallback=t=>{var e=t?.TagId;if(void 0!==e){t=this.GameplayEventCallbacks.get(e);if(t){var i=GameplayTagUtils_1.GameplayTagUtils.GetNameByTagId(e);for(const n of[...t])try{n(e)}catch(t){t instanceof Error?Log_1.Log.CheckError()&&Log_1.Log.ErrorWithStack("Event",28,"gameplayEvent事件回调执行异常",t,["gameplayEvent",i],["error",t.message]):Log_1.Log.CheckError()&&Log_1.Log.Error("Event",28,"gameplayEvent事件回调执行异常",["gameplayEvent",i],["error",t])}}}}}OnStart(){if(this.ActorComp=this.Entity.GetComponent(214),this.TagComponent=this.Entity.CheckGetComponent(191),this.ActorComp.Actor.TryAddTsAbilitySystemComponent(),this.TsAbilityComponentInternal=this.ActorComp.Actor.AbilitySystemComponent,!this.TsAbilityComponentInternal.IsValid())return Log_1.Log.CheckError()&&Log_1.Log.Error("Battle",19,"技能组件TsAbilityComponentInternal Add失败，AbilityComponent Start失败"),!1;this.TsAbilityComponentInternal.SetComponentTickEnabled(!1);var t=CharacterNameDefines_1.CharacterNameDefines.ABP_BASE;return this.ActorComp.Actor.Mesh.GetLinkedAnimGraphInstanceByTag(t)&&this.InitActorAnimInfo(t),this.InitClass(),this.GameplayEventTask=this.CreateGameplayEventTask(this.GameplayEventCallback),!0}OnTick(t){this.TsAbilityComponentInternal.KuroTickComponentOutside(t*MathUtils_1.MathUtils.MillisecondToSecond*this.ActorComp.Actor.CustomTimeDilation)}OnEnd(){return this.GameplayEventTask&&this.GameplayEventTask.EndTask(),!0}OnClear(){return this.TsAbilityComponentInternal&&(this.TsAbilityComponentInternal.K2_DestroyComponent(this.TsAbilityComponentInternal),this.TsAbilityComponentInternal=void 0),!0}InitActorAnimInfo(t){this.TsAbilityComponentInternal.BP_InitAbilityActorInfo(t)}AddPerformanceTag(t){this.LastPerformanceTag=t,this.TagComponent.AddTag(GameplayTagUtils_1.GameplayTagUtils.GetTagIdByName(t))}ClearLastPerformanceTag(){this.LastPerformanceTag&&this.TagComponent.RemoveTag(GameplayTagUtils_1.GameplayTagUtils.GetTagIdByName(this.LastPerformanceTag))}SendGameplayEventToActor(t,e=void 0){UE.AbilitySystemBlueprintLibrary.SendGameplayEventToActor(this.ActorComp.Actor,t,e||VehicleAbilityComponent_1.CachedGameplayEventData)}TryActivateAbilityByClass(t,e=!0){return this.TsAbilityComponentInternal.TryActivateAbilityByClass(t,e)}GetCurrentWaitAndPlayedMontageCorrespondingGa(){return this.TsAbilityComponentInternal.LocalAnimMontageInfo.AnimatingAbility}GetAbility(t){return this.TsAbilityComponentInternal.GetAbility(t)}ClearAbility(t){this.TsAbilityComponentInternal.RemoveAbility(t)}InitClass(){VehicleAbilityComponent_1.IsClassInitiated||(VehicleAbilityComponent_1.CachedGameplayEventData=new UE.GameplayEventData,VehicleAbilityComponent_1.IsClassInitiated=!0)}CreateGameplayEventTask(t){var e=UE.AsyncTaskWaitGameplayEvent.ListenForGameplayEvent(this.TsAbilityComponentInternal);return e.EventReceived.Add(t),e}AddGameplayEventListener(e,i){if(void 0!==e&&i){let t=this.GameplayEventCallbacks.get(e);t||this.GameplayEventCallbacks.set(e,t=new Set),t.has(i)?Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Character",28,"重复添加回调函数",["gameplayEvent",GameplayTagUtils_1.GameplayTagUtils.GetNameByTagId(e)],["callbackName",i.name]):t.add(i)}else Log_1.Log.CheckError()&&Log_1.Log.Error("Character",28,"回调函数添加失败",["gameplayEvent",GameplayTagUtils_1.GameplayTagUtils.GetNameByTagId(e)],["callbackName",i?.name])}RemoveGameplayEventListener(t,e){t=this.GameplayEventCallbacks.get(t);t&&t.delete(e)}};VehicleAbilityComponent.CachedGameplayEventData=void 0,VehicleAbilityComponent.IsClassInitiated=!1,VehicleAbilityComponent=VehicleAbilityComponent_1=__decorate([(0,RegisterComponent_1.RegisterComponent)(218)],VehicleAbilityComponent),exports.VehicleAbilityComponent=VehicleAbilityComponent;
//# sourceMappingURL=VehicleAbilityComponent.js.map