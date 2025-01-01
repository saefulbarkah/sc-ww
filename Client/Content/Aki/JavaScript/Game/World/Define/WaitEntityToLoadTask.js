
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WaitEntityToLoadTask=exports.LOADING_ENTITY_INTERVAL=exports.MAX_LOADING_ENTITY_COUNT=void 0;const Log_1=require("../../../Core/Common/Log"),Stats_1=require("../../../Core/Common/Stats"),Time_1=require("../../../Core/Common/Time"),Pool_1=require("../../../Core/Container/Pool"),PriorityQueue_1=require("../../../Core/Container/PriorityQueue"),Protocol_1=require("../../../Core/Define/Net/Protocol"),ResourceSystem_1=require("../../../Core/Resource/ResourceSystem"),TimerSystem_1=require("../../../Core/Timer/TimerSystem"),Vector_1=require("../../../Core/Utils/Math/Vector"),ModelManager_1=require("../../Manager/ModelManager"),PreloadDefine_1=require("../../Preload/PreloadDefine");class EntityHandleCallbackPair{constructor(){this.Handle=void 0,this.Dto=[],this.CreatureDataId=0,this.PbDataId=0,this.AngleRatio=0,this.Priority=0,this.Order=0,this.Version=0}AddCallback(t){t&&this.Dto.push(t)}ClearCallbacks(){this.Dto.length=0}InvokeCallbacks(i){this.Dto.forEach(t=>{try{t(i)}catch(t){t instanceof Error?Log_1.Log.CheckError()&&Log_1.Log.ErrorWithStack("Preload",60,"预加载实体:加载回调异常",t,["result",i]):Log_1.Log.CheckError()&&Log_1.Log.Error("Preload",60,"预加载实体:加载回调异常",["result",i])}})}}exports.MAX_LOADING_ENTITY_COUNT=4,exports.LOADING_ENTITY_INTERVAL=0;class WaitEntityToLoadTask{constructor(t,i,e){this.ol1=()=>{},this.nya=()=>0,this.UHa=()=>{},this.FEa=new PriorityQueue_1.PriorityQueue((t,i)=>t.Priority===i.Priority?t.Order-i.Order:t.Priority-i.Priority),this.HEa=new Map,this.sja=new Map,this.PWl=[],this.nl1=new Set,this.wWl=[],this.jEa=[],this.WEa=exports.MAX_LOADING_ENTITY_COUNT,this.zQl=exports.LOADING_ENTITY_INTERVAL,this.QEa=0,this.JQl=0,this.UWl=void 0,this.ZQl=0,this.xHa=0,this.YEa=Vector_1.Vector.Create(),this.JEa=Vector_1.Vector.Create(),this.zEa=Vector_1.Vector.Create(),this.ZEa=Vector_1.Vector.Create(),this.eya=Vector_1.Vector.Create(),this.tya=Stats_1.Stat.Create("WaitEntityToLoadTask.Sort"),this.iya=Stats_1.Stat.Create("WaitEntityToLoadTask.UpdatePriority"),this.DWl=Stats_1.Stat.Create("WaitEntityToLoadTask.UpdateMaxLoadingEntityCount"),this.BWl=Stats_1.Stat.Create("WaitEntityToLoadTask.ShouldEntityToBeLoad"),this.ol1=t,this.nya=i,this.UHa=e}OnInit(){this.WEa=exports.MAX_LOADING_ENTITY_COUNT,this.QEa=0}OnClear(){this.FEa.Clear(),this.HEa.clear(),this.sja.clear(),this.jEa.length=0,this.UWl&&(TimerSystem_1.TimerSystem.Remove(this.UWl),this.UWl=void 0),this.PWl.length=0,this.nl1.clear()}AddFilter(t){this.PWl.push(t),this.DelayInvoke()}RemoveFilter(t){t=this.PWl.indexOf(t);0<=t&&(this.PWl.splice(t,1),this.DelayInvoke())}static aya(t,i,e,r){let s=this.hya.Get();return(s=s||WaitEntityToLoadTask.hya.Create()).Handle=t,s.CreatureDataId=e,s.PbDataId=r,s.Priority=t.Priority,s.AngleRatio=0,s.Order=0,s.AddCallback(i),s.Version++,s}PHa(t){0===this.FEa.Size&&(this.xHa=0),t.Order=this.xHa++}aja(t){let i=this.sja.get(t);return i=i||this.HEa.get(t)}static fJa(t){var i=t.Entity.GetComponent(0);return!(PreloadDefine_1.PreloadSetting.UseNewPreload&&i.GetPreloadFinished()||((i=i.GetEntityType())===Protocol_1.Aki.Protocol.kks.Proto_Custom||i===Protocol_1.Aki.Protocol.kks.Proto_PlayerEntity)&&(i===Protocol_1.Aki.Protocol.kks.Proto_PlayerEntity&&(t.Priority=105),1))}eKl(){let t="WaitEntityToLoadTask",e="WaitEntityToLoadTask",r=exports.MAX_LOADING_ENTITY_COUNT,s=exports.LOADING_ENTITY_INTERVAL;this.PWl.forEach(i=>{try{i.MaxLoadingCount<r&&(t=i.DebugName,r=i.MaxLoadingCount),i.LoadingInterval>s&&(e=i.DebugName,s=i.LoadingInterval)}catch(t){t instanceof Error?Log_1.Log.CheckError()&&Log_1.Log.ErrorWithStack("Preload",60,"预加载实体:更新最大加载数量和帧间隔异常",t,["Filter",i.DebugName]):Log_1.Log.CheckError()&&Log_1.Log.Error("Preload",60,"预加载实体:更新最大加载数量和帧间隔异常",["Filter",i.DebugName])}}),this.WEa!==r&&(this.WEa=r,ModelManager_1.ModelManager.CreatureModel.EnableEntityLog)&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("Preload",60,"预加载实体:更新最大加载数量",["MaxLoadingCount",this.WEa],["Filter",t]),this.zQl!==s&&(this.zQl=s,ModelManager_1.ModelManager.CreatureModel.EnableEntityLog)&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("Preload",60,"预加载实体:更新帧间隔",["FrameInterval",this.zQl],["Filter",e])}QueueToInvoke(t,i,e,r){let s=this.aja(t);s?s.AddCallback(i):(s=WaitEntityToLoadTask.aya(t,i,e,r),WaitEntityToLoadTask.fJa(t)?(this.PHa(s),this.FEa.Push(s),this.HEa.set(s.Handle,s),this.jEa.push(s.Handle),ModelManager_1.ModelManager.CreatureModel.EnableEntityLog&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("Preload",60,"预加载实体:进入加载队列",["EntityId",t.Id],["CreatureDataId",s.CreatureDataId],["PbDataId",s.PbDataId],["Priority",s.Priority],["Order",s.Order],["Version",s.Version],["Remain",this.FEa.Size]),this.DelayInvoke()):(ModelManager_1.ModelManager.CreatureModel.EnableEntityLog&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("Preload",60,"预加载实体:不需要预加载，直接唤醒",["EntityId",t.Id],["CreatureDataId",s.CreatureDataId],["PbDataId",s.PbDataId],["Priority",s.Priority],["Order",s.Order],["Version",s.Version]),this.pJa(s)))}DelayInvoke(){!this.UWl&&0<this.FEa.Size&&(this.UWl=TimerSystem_1.TimerSystem.Next(()=>{this.UWl=void 0,this.oya()}))}Flush(){for(this.UWl&&(TimerSystem_1.TimerSystem.Remove(this.UWl),this.UWl=void 0);!this.FEa.Empty;)this.AHa()}RemoveEntity(t){var i=this.aja(t);i&&(this.HEa.delete(t)&&this.FEa.Remove(i),this.hja(i,4),ModelManager_1.ModelManager.CreatureModel.EnableEntityLog)&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("Preload",60,"预加载实体:移除加载队列",["RemoveType","Outside"],["EntityId",t.Id],["CreatureDataId",i.CreatureDataId],["PbDataId",i.PbDataId],["AngleRatio",i.AngleRatio],["Priority",i.Priority],["Order",i.Order],["Version",i.Version],["Remain",this.FEa.Size])}hja(t,i){ModelManager_1.ModelManager.CreatureModel.EnableEntityLog&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("Preload",60,"预加载实体:执行加载回调",["EntityId",t.Handle.Id],["CreatureDataId",t.CreatureDataId],["PbDataId",t.PbDataId],["Priority",t.Priority],["Order",t.Order],["Version",t.Version],["Result",i]),this.sja.delete(t.Handle),t.InvokeCallbacks(i),t.ClearCallbacks(),WaitEntityToLoadTask.hya.Put(t)}lja(i,t,e){const r=e??i.Version;this.sja.has(i.Handle)&&r===i.Version&&(3===t?this.UHa(i.Handle,t=>{this.sja.has(i.Handle)&&r===i.Version&&this.hja(i,t)}):this.hja(i,t))}pJa(t){this.sja.set(t.Handle,t),this.lja(t,3)}lya(i){let e=!1,r=void 0,s=!1;const o=()=>{var t;r&&(r.Valid()&&TimerSystem_1.TimerSystem.Remove(r),r=void 0),!e&&s&&(t=ModelManager_1.ModelManager.PreloadModel.AllEntityAssetMap.get(i.CreatureDataId),Log_1.Log.CheckError())&&Log_1.Log.Error("Preload",60,"预加载实体:加载超时",["EntityId",i.Handle.Id],["CreatureDataId",i.CreatureDataId],["PbDataId",i.PbDataId],["Priority",i.Priority],["Order",i.Order],["Version",i.Version],["Remain",this.FEa.Size],["InLoading",this.QEa],["HasAssetElement",t?"Yes":"No"],["LoadState",t?t.LoadState:"None"],["CollectMinorAssets",t?t.CollectMinorAsset:"None"]),e!==s&&(this.QEa--,this.oya())};const a=i.Version;var t=t=>{e=!0,this.lja(i,t,a),o()},h=(this.QEa++,this.sja.set(i.Handle,i),this.nya(i.Handle,t));1!==h?t(h):r=TimerSystem_1.TimerSystem.Delay(()=>{s=!0,o()},ResourceSystem_1.ASYNC_LOAD_TIMEOUT_MS)}_ya(){return 0<this.FEa.Size&&this.QEa<this.WEa&&this.JQl>=this.zQl}AHa(){var t=this.FEa.Pop();this.HEa.delete(t.Handle),ModelManager_1.ModelManager.CreatureModel.EnableEntityLog&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("Preload",60,"预加载实体:移除加载队列",["RemoveType","InvokeTop"],["EntityId",t.Handle.Id],["CreatureDataId",t.CreatureDataId],["PbDataId",t.PbDataId],["AngleRatio",t.AngleRatio],["Priority",t.Priority],["Order",t.Order],["Version",t.Version],["Remain",this.FEa.Size]),this.lya(t)}kWl(i){if(!this.nl1.has(i.CreatureDataId))for(const e of this.PWl)try{if(!e.ShouldEntityToBeLoad(i))return ModelManager_1.ModelManager.CreatureModel.EnableEntityLog&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("Preload",60,"预加载实体:过滤实体",["EntityId",i.Id],["CreatureDataId",i.CreatureDataId],["PbDataId",i.PbDataId],["Filter",e.DebugName]),!1}catch(t){t instanceof Error?Log_1.Log.CheckError()&&Log_1.Log.ErrorWithStack("Preload",60,"预加载实体:判断实体是否需要加载异常",t,["EntityId",i.Id],["Filter",e.DebugName]):Log_1.Log.CheckError()&&Log_1.Log.Error("Preload",60,"预加载实体:判断实体是否需要加载异常",["EntityId",i.Id],["Filter",e.DebugName])}return!0}tKl(){var t=Time_1.Time.Frame;t>this.ZQl&&(this.JQl+=t-this.ZQl,this.ZQl=t)}iKl(){(0===this.FEa.Size||this.QEa>=this.WEa||this.JQl>=this.zQl)&&(this.JQl=0)}sl1(t){var i=this.ol1(t.CreatureDataId);if(i){for(const e of i)this.nl1.add(e);ModelManager_1.ModelManager.CreatureModel.EnableEntityLog&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("Preload",60,"预加载实体:加入实体组白名单",["creatureDataId",t.CreatureDataId],["ids",i.join(",")])}}CleanWhitelist(t){var i=this.ol1(t);if(i){for(const e of i)this.nl1.delete(e);ModelManager_1.ModelManager.CreatureModel.EnableEntityLog&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("Preload",60,"预加载实体:清除实体组白名单",["creatureDataId",t],["ids",i.join(",")])}}oya(){for(this.eKl(),this.tKl();this._ya();){this.uya();var t=this.FEa.Top;this.kWl(t.Handle)?(this.sl1(t.Handle),this.AHa()):this.wWl.push(this.FEa.Pop())}this.iKl(),this.wWl.forEach(t=>{this.FEa.Push(t)}),(this.wWl.length=0)<this.FEa.Size&&this.QEa<this.WEa&&this.DelayInvoke()}uya(){this.FEa.Size>this.WEa-this.QEa?this.cya()&&this.FEa.Heapify():this.jEa.length=0}rKl(){return WaitEntityToLoadTask.GetPlayerVelocityOverride?WaitEntityToLoadTask.GetPlayerVelocityOverride():Vector_1.Vector.ZeroVectorProxy}cya(){var t=ModelManager_1.ModelManager.SceneTeamModel.GetCurrentEntity?.Entity?.GetComponent(3);if(!t)return!1;let i=!1;return Vector_1.Vector.PointsAreSame(this.YEa,t.ActorLocationProxy)&&Vector_1.Vector.PointsAreSame(this.JEa,t.ActorForwardProxy)?0<this.jEa.length&&(this.jEa.forEach(t=>{t=this.HEa.get(t);t&&this.mya(t)}),this.jEa.length=0,i=!0):(this.YEa.DeepCopy(t.ActorLocationProxy),this.JEa.DeepCopy(t.ActorForwardProxy),this.JEa.AdditionEqual(this.rKl()).GetSafeNormal(this.zEa),this.jEa.length=0,this.HEa.forEach((t,i)=>{this.mya(t)}),i=!0),i}mya(t){var i=t.Handle.Entity.GetComponent(0).GetLocation(),i=(this.ZEa.DeepCopy(i),Vector_1.Vector.DistSquared(this.ZEa,this.YEa)),e=(this.YEa.Subtraction(this.ZEa,this.eya),this.eya.Normalize()?Vector_1.Vector.DotProduct(this.eya,this.zEa):-1),e=.5*e+.5;t.AngleRatio=e,t.Priority=i*e}}(exports.WaitEntityToLoadTask=WaitEntityToLoadTask).GetPlayerVelocityOverride=void 0,WaitEntityToLoadTask.hya=new Pool_1.Pool(200,()=>new EntityHandleCallbackPair);
//# sourceMappingURL=WaitEntityToLoadTask.js.map