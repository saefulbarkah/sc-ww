
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MapMarkContainer=void 0;const Log_1=require("../../../../../../Core/Common/Log"),Vector_1=require("../../../../../../Core/Utils/Math/Vector"),ModelManager_1=require("../../../../../Manager/ModelManager"),GeneralLogicTreeUtil_1=require("../../../../GeneralLogicTree/GeneralLogicTreeUtil"),TrackController_1=require("../../../../Track/TrackController"),MapDefine_1=require("../../../MapDefine"),MapUtil_1=require("../../../MapUtil"),MapMarkPreemptiveFrameQueue_1=require("./MapFrameTaskQueue/MapMarkPreemptiveFrameQueue");class MapMarkContainer{constructor(){this.Reh=new MapMarkPreemptiveFrameQueue_1.MapMarkPreemptiveFrameQueue(50),this.rUi=new Map,this.Ueh=new Map,this.nUi=new Map,this.hUi=new Map,this.sUi=new Set,this.aUi=new Set}Tick(){this.Reh.TryExecuteNextTask()}ClearMarkItems(e){if(e){var t=this.rUi.get(e);if(t){for(var[,r]of t)this.hUi.delete(r.MarkId),r.Destroy(),this.LUi(r);t.clear()}t=this.Ueh.get(e);if(t){for(var[,i]of t)i.Destroy();t.clear()}this.Reh.CancelMapTaskByType(e)}else{for(var[,a]of this.rUi)for(var[,s]of a)this.hUi.delete(s.MarkId),s.Destroy();this.sUi.clear(),this.rUi.clear(),this.Ueh.clear(),this.nUi.clear(),this.Reh.Dispose()}}AddMarkItem(t,r){if(r)if(r.IsTracked&&12!==r.MarkType&&(ModelManager_1.ModelManager.MapModel.SetCurTrackMark([r.MarkType,r.MarkId]),this.sUi.add(r)),r.IsDiffMap())this.xeh(t,r);else{let e=this.GetMarkItemsByType(t,!1);e||(e=new Map,this.rUi.set(t,e)),e.set(r.MarkId,r),this.TUi(r)}}xeh(t,r){if(r){let e=this.GetDifferMapMarkItemsByType(t);e||(e=new Map,this.Ueh.set(t,e)),e.set(r.MarkId,r)}}RemoveMarkItem(e,t){this.Reh.CancelMapTask(e,t);e=this.GetMarkItemsByType(e);if(e&&0!==e.size){var r=e.get(t);if(e.delete(t),this.hUi.delete(t),r)return this.LUi(r),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Map",64,"移除标记_MarkMgr",["MarkId",t]),r}}TUi(e){var t,r=e.WorldPosition;r&&(r=this.ConvertWorldPositionToIndex(r),(t=this.nUi.get(r))?t.add(e):(t=(new Set).add(e),this.nUi.set(r,t)),e.GridId=r)}LUi(e){var t=e.GridId,t=this.nUi.get(t);t&&t.delete(e)}GetMarkItem(e,t){if(this.Reh.ForceExecuteTask(e,t),0===e){let e=void 0;for(const[,r]of this.GetAllMarkItems())if(e=r.get(t))break;return e}const r=this.GetMarkItemsByType(e);if(r)return r.get(t)||this.GetDifferMapMarkItem(e,t)}GetDifferMapMarkItem(e,t){e=this.GetDifferMapMarkItemsByType(e);if(e)return e.get(t)||void 0}GetMarkItemsByType(e,t=!0){var r=this.rUi.get(e);return(!r||r.size<=0)&&t?this.GetDifferMapMarkItemsByType(e):r}GetDifferMapMarkItemsByType(e){return this.Ueh.get(e)}GetAllMarkItems(){return this.rUi}ConvertWorldPositionToIndex(e){var t=Math.floor(Math.round(e.X*MapDefine_1.MARK_WORLD_TO_HASH_SCALE)/MapDefine_1.MARK_SCOPE),e=Math.floor(Math.round(e.Y*MapDefine_1.MARK_WORLD_TO_HASH_SCALE)/MapDefine_1.MARK_SCOPE);return t*MapDefine_1.MARK_HASH_XY_PANDING+e}GetAroundIndex(e){return new Set([e,e+MapDefine_1.MARK_HASH_XY_PANDING,e-MapDefine_1.MARK_HASH_XY_PANDING,e+1,e-1,e+MapDefine_1.MARK_HASH_XY_PANDING-1,e+MapDefine_1.MARK_HASH_XY_PANDING+1,e-MapDefine_1.MARK_HASH_XY_PANDING-1,e-MapDefine_1.MARK_HASH_XY_PANDING+1])}GetMarkItemsByClickPosition(e){var e=MapUtil_1.MapUtil.UiPosition2WorldPosition(e),e=this.ConvertWorldPositionToIndex(e),t=[];for(const i of this.GetAroundIndex(e)){var r=this.nUi.get(i);r&&t.push(...r)}return t}UpdateNearbyMarkItem(e,t,r){var e=this.ConvertWorldPositionToIndex(e),i=this.GetAroundIndex(e);for(const f of i){const a=this.nUi.get(f);if(a)for(const p of a)this.hUi.has(p.MarkId)||11===p.MarkType||this.hUi.set(p.MarkId,p)}const a=this.GetMarkItemsByType(11);if(a)for(var[,s]of a)this.hUi.set(s.MarkId,s);var o,e=this.GetMarkItemsByType(22);if(e)for(var[,h]of e)this.hUi.set(h.MarkId,h);for([,o]of this.hUi)t(o),o.IsCanShowView||(this.aUi.add(o),this.hUi.delete(o.MarkId));for(const c of this.sUi)t(c);if(0!==this.aUi.size){for(const k of this.aUi){var n=k.GridId;i.has(n)||(k.LogicUpdate(GeneralLogicTreeUtil_1.GeneralLogicTreeUtil.GetPlayerLocation()),r(k))}this.aUi.clear()}for(const l of i){var M=this.nUi.get(l);if(M)for(const _ of M)t(_)}}FindNearbyMarkItems(r,e){this.Reh.Flush();const i=r.WorldPosition;var t=this.ConvertWorldPositionToIndex(i),a=Math.ceil(1/(MapDefine_1.MARK_SCOPE*MapDefine_1.MARK_WORLD_TO_HASH_SCALE)),s=this.GetAroundIndex(t);let o=Array.from(s.values());var h=new Set;if(h.add(t),0<s.size)for(let e=0;e<=a;++e){var n=[];for(const c of o)if(!h.has(c)){for(const k of this.GetAroundIndex(c))h.has(k)||n.push(k);h.add(c)}o=n}const M=[],f=Math.pow(e,2);for(const l of h){var p=this.nUi.get(l);p&&p.forEach(e=>{var t;r!==e&&(t=Vector_1.Vector.DistSquared(e.WorldPosition,i))<=f&&M.push([e,t])})}return 0<M.length&&M.sort((e,t)=>e[1]-t[1]),M}RemoveDynamicMark(e,t){var r=this.GetMarkItem(e,t);r&&(this.TrackMapMark(e,r.MarkId,!1),this.hUi.has(t)&&this.hUi.delete(t),void 0!==(r=this.RemoveMarkItem(e,t)))&&r.Destroy()}TrackMapMark(t,r,i,a=!1){var s=ModelManager_1.ModelManager.TrackModel.GetTrackData(1,r),t=this.GetMarkItem(t,r);if(t||s){let e=0;s&&(e=s.TrackSource),t&&(e=t.TrackSource);s=ModelManager_1.ModelManager.TrackModel.IsTracking(e,r);!a&&s===i||(i?t&&(TrackController_1.TrackController.StartTrack({TrackSource:t.TrackSource,Id:r,IconPath:t.IconPath,TrackTarget:t.TrackTarget}),this.sUi.add(t)):(TrackController_1.TrackController.EndTrack(e,r),t&&(this.aUi.add(t),this.sUi.delete(t))))}}TrackMark(e){e=this.GetMarkItem(e.MarkType??0,e.Id);e&&!e.IsTracked&&e.LogicUpdate(GeneralLogicTreeUtil_1.GeneralLogicTreeUtil.GetPlayerLocation()),((e&&e.View)??e?.IsTracked)&&this.sUi.add(e)}UnTrackMark(e){e=this.GetMarkItem(e.MarkType??0,e.Id);e&&e.View&&(this.sUi.delete(e),this.aUi.add(e))}ClearTrackMark(){for(const e of this.sUi)e&&e.View&&this.aUi.add(e);this.sUi.clear()}RemoveNeedUpdateMark(e){this.hUi.has(e)&&this.hUi.delete(e)}AddCreateMarkTask(e,t,r,i){this.Reh.AddTask({Priority:e?0:1,MarkType:t,MarkId:r,Execute:i})}}exports.MapMarkContainer=MapMarkContainer;
//# sourceMappingURL=MapMarkContainer.js.map