
"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Core=void 0;const cpp_1=require("cpp"),Stats_1=require("../Core/Common/Stats"),ActorSystem_1=require("./Actor/ActorSystem"),Application_1=require("./Application/Application"),Info_1=require("./Common/Info"),Log_1=require("./Common/Log"),Logo_1=require("./Common/Logo"),Time_1=require("./Common/Time"),ProxyLru_1=require("./Container/ProxyLru"),ConfigStatement_1=require("./Define/ConfigQuery/ConfigStatement"),EffectEnvironment_1=require("./Effect/EffectEnvironment"),EntityComponentSystem_1=require("./Entity/EntityComponentSystem"),EntitySystem_1=require("./Entity/EntitySystem"),GameBudgetInterfaceController_1=require("./GameBudgetAllocator/GameBudgetInterfaceController"),Net_1=require("./Net/Net"),ObjectSystem_1=require("./Object/ObjectSystem"),CycleCounter_1=require("./Performance/CycleCounter"),PerfSight_1=require("./PerfSight/PerfSight"),TickSystem_1=require("./Tick/TickSystem"),TimerSystem_1=require("./Timer/TimerSystem");class Core{constructor(){}static*Initialize(e){Log_1.Log.CheckInfo()&&Log_1.Log.Info("Core",1,Logo_1.LOGO),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Core",1,Info_1.Info.Version),Log_1.Log.SetLevel(Info_1.Info.IsBuildShipping||Info_1.Info.IsBuildTest?2:3),Stats_1.Stat.EnableCreateWithStack=Info_1.Info.IsBuildDevelopmentOrDebug,GameBudgetInterfaceController_1.GameBudgetInterfaceController.InitializeEnvironment(e.GetWorld()),cpp_1.FKuroCycleCounter.InitializeEnvironment(),PerfSight_1.PerfSight.Initialize(),Time_1.Time.Initialize(),Net_1.Net.Initialize(),TickSystem_1.TickSystem.Add(this.PreTick,"Core",0,!0,2),TickSystem_1.TickSystem.Add(this.Tick,"Core",0,!0),TickSystem_1.TickSystem.Add(this.AfterTick,"Core",4,!0),yield this.c2a(),ConfigStatement_1.ConfigStatement.Init(),yield this.c2a(),ObjectSystem_1.ObjectSystem.Initialize(),EntitySystem_1.EntitySystem.Initialize(),EntityComponentSystem_1.EntityComponentSystem.Initialize(),Application_1.Application.Initialize(),ActorSystem_1.ActorSystem.Initialize(),EffectEnvironment_1.EffectEnvironment.Initialize(),ProxyLru_1.ProxyLru.ProxyLruEnable=Info_1.Info.IsPlayInEditor}static RegisterPreTick(e){this.Y7.has(e)?Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Core",7,"[Core.RegisterPreTickFunctions] 已经注册过PreTickfunc"):this.Y7.add(e)}static UnRegisterPreTick(e){this.Y7.has(e)?this.Y7.delete(e):Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Core",7,"[Core.UnRegisterPreTick] 未注册的PreTickfunc")}static async c2a(){return new Promise(e=>{TimerSystem_1.TimerSystem.Next(()=>{e()})})}}exports.Core=Core,(_a=Core).Y7=new Set,Core.QQs=0,Core.$2_=!1,Core.ForbiddenPreTick=!1,Core.PreTick=e=>{_a.ForbiddenPreTick||(_a.$2_=!0,Time_1.Time.Tick(e))},Core.Tick=e=>{_a.$2_?_a.$2_=!1:(Time_1.Time.Tick(e),_a.ForbiddenPreTick=!0),CycleCounter_1.CycleCounter.RefreshState();var t=e/1e3;if(Net_1.Net.Tick(t),!TickSystem_1.TickSystem.IsPaused)for(const o of _a.Y7)o(e);TimerSystem_1.TimerSystem.Tick(e);var r=Time_1.Time.ServerTimeStamp,i=r-_a.QQs;_a.QQs=r,TimerSystem_1.RealTimeTimerSystem.Tick(i),TickSystem_1.TickSystem.IsPaused||(EffectEnvironment_1.EffectEnvironment.Tick(e,Info_1.Info.World),Info_1.Info.EnableForceTick&&EntitySystem_1.EntitySystem.ForceTick(e),GameBudgetInterfaceController_1.GameBudgetInterfaceController.UpdateBudgetTime(e)),cpp_1.FKuroGameBudgetAllocatorInterface.TickOutside(t),TickSystem_1.TickSystem.IsPaused||EntitySystem_1.EntitySystem.Tick(e)},Core.AfterTick=e=>{_a.ForbiddenPreTick=!1,TickSystem_1.TickSystem.IsPaused||Info_1.Info.EnableForceTick&&EntitySystem_1.EntitySystem.ForceAfterTick(e),cpp_1.FKuroGameBudgetAllocatorInterface.AfterTickOutside(e/1e3),TickSystem_1.TickSystem.IsPaused||EntitySystem_1.EntitySystem.AfterTick(e)};
//# sourceMappingURL=Core.js.map