
"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.TimeController=void 0;const Log_1=require("../../../Core/Common/Log"),Time_1=require("../../../Core/Common/Time"),Protocol_1=require("../../../Core/Define/Net/Protocol"),ControllerBase_1=require("../../../Core/Framework/ControllerBase"),Net_1=require("../../../Core/Net/Net"),TimerSystem_1=require("../../../Core/Timer/TimerSystem"),MathUtils_1=require("../../../Core/Utils/MathUtils"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),ModelManager_1=require("../../Manager/ModelManager"),BulletUtil_1=require("../../NewWorld/Bullet/BulletUtil"),CombatLog_1=require("../../Utils/CombatLog");class TimeController extends ControllerBase_1.ControllerBase{static OnInit(){return EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.WorldDone,this.nye),!0}static OnTick(e){}static OnClear(){return EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.WorldDone,this.nye),void 0!==this.FBe&&(TimerSystem_1.TimerSystem.Remove(this.FBe),this.FBe=void 0),this.reh.clear(),!0}static GetPredictedServerStopTime(){return Time_1.Time.WorldTime+this.VBe+Net_1.Net.RttMs/2}static GetPredictedServerTime(){return Time_1.Time.Now+this.HBe+Net_1.Net.RttMs/2}static AddLock(e,t){e&&(this.reh.has(e)?CombatLog_1.CombatLog.Error("Skill",e?.Entity,"同一实体重复添加时停，将不被处理"):this.reh.set(e,{StopMove:t})),e.Entity?.GetComponent(110)?.AddDelayLock("ANS AbsoluteTimeStop Role"),this.oeh()}static RemoveLock(e){e&&this.reh.delete(e),e.Entity?.GetComponent(110)?.RemoveDelayLock("ANS AbsoluteTimeStop Role"),this.oeh()}static oeh(){ModelManager_1.ModelManager.GameModeModel?.IsMulti&&this.reh.clear();var e=new Array;for(const r of this.reh.keys())r&&r?.Valid||e.push(r);for(const i of e)this.reh.delete(i);var t=0<this.reh.size;this.neh===t&&!t||(this.neh=t,this.neh?this.seh():this.aeh())}static seh(){let e=!0;for(const t of this.reh.values())if(!t.StopMove){e=!1;break}for(const i of ModelManager_1.ModelManager.CreatureModel.GetAllEntities())if(i.IsInit&&i.Entity.Active)if(this.reh.has(i))this.heh(i);else{{let e=i,t=ModelManager_1.ModelManager.CreatureModel?.GetEntity(e.Entity?.GetComponent(0)?.GetSummonerId()??-1),r=!1;for(;t&&t!==e;){if(this.reh.has(t)){r=!0;break}e=t,t=ModelManager_1.ModelManager.CreatureModel?.GetEntity(t.Entity?.GetComponent(0)?.GetSummonerId()??-1)}if(r){this.heh(i);continue}}this.leh(i,e)}}static aeh(){for(const e of[...this.Sih])e.Valid&&this.heh(e)}static leh(e,t){this.Sih.add(e);(e.Entity?.GetComponent(110))?.AddPauseLock("ANS AbsoluteTimeStop monster");var r=e.Entity?.GetComponent(38);t?r?.AddPauseLock("ANS AbsoluteTimeStop monster"):r?.RemovePauseLock("ANS AbsoluteTimeStop monster"),BulletUtil_1.BulletUtil.FrozenCharacterBullet(e.Id)}static heh(e){this.Sih.delete(e),(e.Entity?.GetComponent(110))?.RemovePauseLock("ANS AbsoluteTimeStop monster"),(e.Entity?.GetComponent(38))?.RemovePauseLock("ANS AbsoluteTimeStop monster"),BulletUtil_1.BulletUtil.UnFrozenCharacterBullet(e.Id)}}exports.TimeController=TimeController,(_a=TimeController).HBe=0,TimeController.VBe=0,TimeController.FBe=void 0,TimeController.nye=()=>{_a.FBe||(_a.FBe=TimerSystem_1.TimerSystem.Forever(_a.TimeCheckRequest,3e3))},TimeController.TimeCheck=(e,t,r,i)=>{var o=_a.HBe,s=_a.VBe;_a.HBe=t-Time_1.Time.Now,_a.VBe=Number(r)-Time_1.Time.WorldTime,Time_1.Time.SyncTime(t,i,Number(_a.HBe),Number(_a.VBe)),(3e3<_a.VBe-s||3e3<_a.HBe-o)&&Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Battle",36,"对时通知",["clientTime",e],["serverTime",t],["serverStopTime",r],["PredictedServerTimeOffset",_a.HBe],["PredictedServerStopTimeOffset",_a.VBe])},TimeController.TimeCheckNotify=e=>{var t=MathUtils_1.MathUtils.LongToNumber(e.D6n),r=MathUtils_1.MathUtils.LongToNumber(e.pGs),i=MathUtils_1.MathUtils.LongToNumber(e.MGs),e=MathUtils_1.MathUtils.LongToNumber(e.Dsh);_a.TimeCheck(t,r,i,e)},TimeController.TimeCheckRequest=()=>{var e;Net_1.Net.IsServerConnected()&&((e=Protocol_1.Aki.Protocol.WCs.create()).D6n=Time_1.Time.WorldTime,e.A6n=Time_1.Time.TimeDilation,e.U6n=ModelManager_1.ModelManager.GeneralLogicTreeModel?.TimeStop?0:1,Net_1.Net.Call(22047,e,e=>{var t,r,i;e&&(t=MathUtils_1.MathUtils.LongToNumber(e.D6n),r=MathUtils_1.MathUtils.LongToNumber(e.pGs),i=MathUtils_1.MathUtils.LongToNumber(e.MGs),e=MathUtils_1.MathUtils.LongToNumber(e.Dsh),_a.TimeCheck(t,r,i,e))}))},TimeController.reh=new Map,TimeController.Sih=new Set,TimeController.neh=!1;
//# sourceMappingURL=TimeController.js.map