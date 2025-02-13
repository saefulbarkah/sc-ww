
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TrackMarkExpressController=exports.TrackVision=void 0;const Log_1=require("../../../../../Core/Common/Log"),Protocol_1=require("../../../../../Core/Define/Net/Protocol"),RegisterComponent_1=require("../../../../../Core/Entity/RegisterComponent"),Vector_1=require("../../../../../Core/Utils/Math/Vector"),ObjectUtils_1=require("../../../../../Core/Utils/ObjectUtils"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),ConfigManager_1=require("../../../../Manager/ConfigManager"),ControllerHolder_1=require("../../../../Manager/ControllerHolder"),ModelManager_1=require("../../../../Manager/ModelManager"),MapController_1=require("../../../Map/Controller/MapController"),MapDefine_1=require("../../../Map/MapDefine"),TrackController_1=require("../../../Track/TrackController"),GeneralLogicTreeUtil_1=require("../../GeneralLogicTreeUtil"),INVALID_MARKID=0;class TrackVision{constructor(){this.VisionOwnerId=0,this.DungeonId=0,this.ConfigIndex=0,this.EntityId=0}}exports.TrackVision=TrackVision;class TrackMarkExpressController{constructor(e){this.JQt=void 0,this.Yre=void 0,this.Yre=e,this.JQt=new Map}Clear(){for(var[,e]of this.JQt)e.Destroy();this.JQt.clear()}NodeTrackMarkStart(e,t,i,r){this.FQt(e,t,i).OnNodeStart(r)}NodeTrackMarkEnd(e){this.GetNodeTrackMarkCreator(e)?.OnNodeEnd(),this.JQt.delete(e)}FQt(e,t,i){var r=this.GetNodeTrackMarkCreator(e);return r||((r=new NodeTrackMark(t,t.TreeIncId,t.TreeConfigId,e)).Init(i),this.JQt.set(e,r),r)}GetNodeTrackMarkCreator(e){return this.JQt.get(e)}DestroyNodeTrackMarkCreator(e){this.GetNodeTrackMarkCreator(e)?.Destroy(),this.JQt.delete(e)}EnableTrack(e){for(var[,t]of this.JQt)t.EnableTrack(e)}CreateMapMarks(){for(var[,e]of this.JQt)e.CreateMapMarks()}UpdateTrackMarkExpression(e,t,i){switch(i){case Protocol_1.Aki.Protocol.BNs._5n:var r;"ChildQuest"!==t.NodeType&&((r=t.TrackTarget)&&t.ContainTag(0))&&this.NodeTrackMarkStart(t.NodeId,e,r,e.IsOccupied);break;case Protocol_1.Aki.Protocol.BNs.Proto_CompletedSuccess:case Protocol_1.Aki.Protocol.BNs.Proto_CompletedFailed:"ChildQuest"===t.NodeType&&t.IsFinished||this.NodeTrackMarkEnd(t.NodeId);break;case Protocol_1.Aki.Protocol.BNs.Proto_Destroy:this.DestroyNodeTrackMarkCreator(t.NodeId)}}OnBtApplyExpressionOccupation(e){if(!e)for(var[,t]of this.JQt)t.OnExpressOccupied()}OnBtReleaseExpressionOccupation(e){if(!e)for(var[,t]of this.JQt)t.OnExpressOccupationRelease()}OnSuspend(e){this.OnBtApplyExpressionOccupation(!1)}OnCancelSuspend(){this.Yre.IsOccupied||this.OnBtReleaseExpressionOccupation(!1)}}exports.TrackMarkExpressController=TrackMarkExpressController;class NodeTrackMark{constructor(e,t,i,r){this.zQt=void 0,this.TrackEffectOption=void 0,this.ZQt=void 0,this.MarkRange=0,this.RangeMarkShowDis=0,this.$mt=BigInt(0),this.Yut=0,this.Jut=0,this.eXt=void 0,this.tXt=void 0,this.iXt=void 0,this.oXt=void 0,this.rXt=!1,this.nXt=!1,this.sXt=(e,t)=>{this.ZQt?.size&&(e=this.ZQt.get(e))&&(EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnSceneItemVisionCaptureRemove,this.aXt)||EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnSceneItemVisionCaptureRemove,this.aXt),this.eXt?.IsOccupied||this.eXt?.IsTracking&&(e.EntityId=t,t=this.hXt(e.DungeonId,e,"CaptureVisions"),this.oXt.set(e.ConfigIndex,t),ModelManager_1.ModelManager.MapModel.SetTrackMark(this.MarkType,t,!0)))},this.aXt=e=>{var t;this.ZQt?.size&&(t=this.ZQt.get(e))&&(this.ZQt.delete(e),this.ZQt.size||(EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnSceneItemVisionCaptureRemove,this.aXt)||EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnSceneItemVisionCaptureRemove,this.aXt),EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnSceneItemVisionCaptureAdd,this.sXt))||EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnSceneItemVisionCaptureAdd,this.sXt),e=this.oXt.get(t.ConfigIndex),this.iXt.set(t.ConfigIndex,!0),e)&&(this.lXt(e),this.oXt.delete(t.ConfigIndex))},this.egt=(e,t,i,r,s)=>{t===this.$mt&&i===this.Jut&&(this.tXt.set(r,s),this.DefaultMapMarkId?(i=this.tXt.get(this.DefaultMapMarkId))!==this.eXt.ContainTag(12)&&(i?this.eXt.AddTag(12):this.eXt.RemoveTag(12),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.RangeTrackStateChanged,t)):this.eXt.RemoveTag(12))},this.$mt=t,this.Yut=i,this.Jut=r,this.eXt=e,this.oXt=new Map,this.tXt=new Map,this.iXt=new Map}get TaskMarkTableId(){return this.eXt.TaskMarkTableId}get MarkType(){return this.eXt.MarkType}get TrackSource(){return this.eXt.TrackSource}get DungeonId(){return this.eXt.DungeonId}get DefaultMapMarkId(){return this.oXt.get(0)}Init(e){switch(this.zQt=[],this.ZQt=new Map,e.TrackType.Type){case"Locations":for(const i of e.TrackType.Locations)this.zQt.push(Vector_1.Vector.Create(i.X??0,i.Y??0,i.Z??0));break;case"Entities":for(const r of e.TrackType.EntityIds)this.zQt.push(r);break;case"CaptureVisions":for(const s of e.TrackType.VisionDropEntities){var t=new TrackVision;t.VisionOwnerId=s,this.zQt.push(t)}}this.TrackEffectOption=e.EffectOption,this.MarkRange=e.Range??0,this.RangeMarkShowDis=e.ViewRange||1.3*e.Range,EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.TaskRangeTrackStateChange,this.egt)}Destroy(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.TaskRangeTrackStateChange,this.egt),EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnSceneItemVisionCaptureRemove,this.aXt)||EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnSceneItemVisionCaptureRemove,this.aXt),EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnSceneItemVisionCaptureAdd,this.sXt)||EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnSceneItemVisionCaptureAdd,this.sXt),this._Xt(),this.oXt=void 0,this.ZQt?.clear(),this.ZQt=void 0,this.zQt?.splice(0,this.zQt.length),this.zQt=void 0}OnNodeStart(e){e||(this.rXt=!0,this.eXt.MapMarkResident&&this.CreateMapMarks(),this.eXt.IsTracking&&this.EnableTrack(!0))}OnNodeEnd(){this._Xt(),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.TaskRangeTrackStateChange,this.egt),this.rXt=!1}OnNodeProgressChanged(i){if(this.zQt&&i)for(let t=0;t<this.zQt.length;t++){const s=this.zQt[t];var r=i.findIndex(e=>e===s);let e=this.oXt.get(t);r<0?(this.iXt.delete(t),this.nXt&&!e&&(e=this.uXt(t),this.eXt.IsTracking)&&ModelManager_1.ModelManager.MapModel.SetTrackMark(this.MarkType,e,!0)):(this.iXt.set(t,!0),e&&(this.lXt(e),this.oXt.delete(t)))}}CreateMapMarks(){this.zQt.forEach((e,t)=>{this.uXt(t)}),this.nXt=!0}uXt(e){if(!this.iXt.get(e)&&this.zQt&&!(this.zQt.length<=e)){var t=this.cXt(0,this.zQt[e]);if(t){var i=t[0],t=t[1],r=this.oXt.get(e);if(r){var s=ModelManager_1.ModelManager.MapModel.GetMark(this.MarkType,r);if(this.mXt(s,i,t))return r;this.lXt(s.MarkId),this.oXt.delete(e)}if(t instanceof Vector_1.Vector){const a=this.hXt(i,t,"Locations",e);return this.oXt.set(e,a),a}if(t instanceof TrackVision){r=ModelManager_1.ModelManager.VisionCaptureModel?.GetVisionCapture(t.VisionOwnerId);if(r){t.EntityId=r;const a=this.hXt(i,t,"CaptureVisions");return this.oXt.set(e,a),this.ZQt?.set(t.VisionOwnerId,t),EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnSceneItemVisionCaptureRemove,this.aXt)||EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnSceneItemVisionCaptureRemove,this.aXt),a}t.DungeonId=i,t.ConfigIndex=e,this.ZQt?.set(t.VisionOwnerId,t),EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.OnSceneItemVisionCaptureAdd,this.sXt)||EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnSceneItemVisionCaptureAdd,this.sXt)}else{s=ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetConfig(i);if(s){r=ModelManager_1.ModelManager.WorldMapModel.GetEntityPosition(t,s.MapConfigId);if(r&&!r.IsZero()){const a=this.hXt(i,t,"Entities");return this.oXt.set(e,a),a}Log_1.Log.CheckError()&&Log_1.Log.Error("GeneralLogicTree",18,"追踪实体数据为空，请检查本地配置",["行为树Id",this.Yut],["节点Id",this.Jut],["实体Id",t],["副本Id",i])}else Log_1.Log.CheckError()&&Log_1.Log.Error("GeneralLogicTree",18,"GeneralLogicTree：找不到副本的配置",["行为树Id",this.Yut],["节点Id",this.Jut],["副本Id",i])}}}}hXt(e,t,i,r){if(!t)return Log_1.Log.CheckError()&&Log_1.Log.Error("Quest",18,"添加追踪标记时，追踪坐标为空，请检查配置",["行为树Id",this.Yut],["节点Id",this.Jut]),INVALID_MARKID;Log_1.Log.CheckInfo()&&Log_1.Log.Info("Quest",18,"行为树添加追踪标记",["行为树Id",this.Yut],["节点Id",this.Jut],["追踪目标副本Id",e],["追踪目标",t]);let s=this.TaskMarkTableId;var a=this.eXt.GetNode(this.Jut);"ChildQuest"===a?.NodeType&&a.CustomTrackIconId&&(s=a.CustomTrackIconId);let o=0;switch(i){case"Locations":void 0!==r&&((n=ConfigManager_1.ConfigManager.QuestNewConfig.GetQuestNodeAreaInfo(this.Yut,this.Jut))&&n.length>r)&&(o=n[r]);break;case"Entities":var n=ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetConfig(e);n&&(o=ModelManager_1.ModelManager.CreatureModel.GetEntityData(t,n.MapConfigId)?.AreaId??0);break;case"CaptureVisions":var h,n=ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetConfig(e);n&&(h=t,o=ModelManager_1.ModelManager.CreatureModel.GetEntityData(h.EntityId,n.MapConfigId)?.AreaId??0)}a=new MapDefine_1.QuestMarkCreateInfo({TrackTarget:this.dXt(t),MarkConfigId:s,MarkType:this.MarkType,MarkId:0,TrackSource:this.TrackSource,TreeId:this.$mt,NodeId:this.Jut,AreaId:o,MapAndDungeonInfo:{DungeonId:e}});return ModelManager_1.ModelManager.MapModel.CreateMapMark(a)}dXt(e){return e instanceof TrackVision?e.EntityId:e}_Xt(){this.CXt(!1);for(var[,e]of this.oXt)ModelManager_1.ModelManager.MapModel.RemoveMapMark(this.MarkType,e);this.oXt.clear(),this.nXt=!1,this.tXt.clear(),this.eXt.RemoveTag(12),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.RangeTrackStateChanged,this.$mt)}lXt(e){ModelManager_1.ModelManager.MapModel.RemoveMapMark(this.MarkType,e),TrackController_1.TrackController.EndTrack(this.TrackSource,e)}EnableTrack(e){this.rXt&&(e?(this.CreateMapMarks(),this.CXt(!0),this.eXt?.IsOccupied&&this.OnExpressOccupied()):this.eXt.MapMarkResident?this.CXt(!1):this._Xt())}CXt(e){if(e&&this.eXt.BtType===Protocol_1.Aki.Protocol.hps.Proto_BtTypeInst)switch(this.eXt.OnlineType){case"Hang":case"Local":if(ModelManager_1.ModelManager.GameModeModel.IsMulti)return}for(var[i,r]of this.oXt){var s=ModelManager_1.ModelManager.MapModel.GetMark(this.MarkType,r);if(s)if(e){i=this.zQt[i],i=this.cXt(1,i);if(i){let e=void 0,t=!1;"Nearest"===this.eXt.TrackViewModel&&(e=this.Yut);var a=ModelManager_1.ModelManager.QuestNewModel.GetQuest(this.Yut),a=(a&&(t=a.AutoHideTrackMark),{TrackSource:this.TrackSource,Id:r,MarkType:this.MarkType,IconPath:ConfigManager_1.ConfigManager.MapConfig.GetTaskMarkConfig(s.MarkConfigId).MarkPic,TrackTarget:this.dXt(i[1]),TrackInstanceId:i[0],ShowGroupId:e,AutoHideTrack:t,IsInTrackRange:this.eXt.ContainTag(12),IsSubTrack:this.eXt.IsNeedScaledTrackMark(this.Jut)});TrackController_1.TrackController.StartTrack(a)}}else TrackController_1.TrackController.EndTrack(this.TrackSource,r);else Log_1.Log.CheckError()&&Log_1.Log.Error("GeneralLogicTree",18,"BehaviorTree:创建追踪标记时找不到地图标记数据",["行为树Id",this.Yut],["节点Id",this.Jut],["markId",r])}}cXt(i,r){var s=ModelManager_1.ModelManager.CreatureModel.GetInstanceId(),a=ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetConfig(s);if(a){var o=ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetConfig(this.DungeonId);if(o){if(s===this.DungeonId)return this.eXt.BtType!==Protocol_1.Aki.Protocol.hps.Proto_BtTypeQuest||13===a.InstSubType||0!==i||a.EntranceEntities?.length?[s,r]:void 0;var n=a.InstSubType,h=o.InstSubType;let e=void 0,t=0;switch(n){case 13:13===h?(e=r,t=this.DungeonId):(_=o.EntranceEntities)?.length&&(e=_[0].EntranceEntityId,t=_[0].DungeonId);break;case 12:if(0===i){if(13!==h){var _=o.EntranceEntities;if(!_?.length)break;e=_[0].EntranceEntityId,t=_[0].DungeonId;break}e=r,t=this.DungeonId}else if(1===i){if(!a.ExitEntities?.length)break;e=a.ExitEntities[0],t=s}break;default:if(1!==i)if(13===h)t=this.DungeonId,e=r;else{_=o.EntranceEntities;if(!_?.length)break;t=_[0].DungeonId,e=_[0].EntranceEntityId}}return e&&t?[t,e]:void 0}Log_1.Log.CheckError()&&Log_1.Log.Error("GeneralLogicTree",18,"GeneralLogicTree：找不到追踪目标副本的配置",["行为树Id",this.Yut],["副本Id",this.DungeonId])}else Log_1.Log.CheckError()&&Log_1.Log.Error("GeneralLogicTree",18,"GeneralLogicTree：找不到当前副本的配置",["行为树Id",this.Yut],["副本Id",s])}GetTrackPosition(t=!1){var i=this.nW_(),r=i[0],i=i[1];if(i){if(i instanceof Vector_1.Vector)return i;let e=void 0;if(i instanceof TrackVision)e=ModelManager_1.ModelManager.CreatureModel.GetEntityById(i.EntityId);else if(!(e=ModelManager_1.ModelManager.CreatureModel.GetEntityByPbDataId(i)))return ModelManager_1.ModelManager.CreatureModel.CheckEntityVisible(i)||t?GeneralLogicTreeUtil_1.GeneralLogicTreeUtil.GetEntityConfigPosition(i,r??this.DungeonId):void 0;if(e){t=ControllerHolder_1.ControllerHolder.CharacterController.GetActorComponent(e);if(t&&ObjectUtils_1.ObjectUtils.IsValid(t.Owner))return i=Vector_1.Vector.Create(t.ActorLocationProxy),(r=e.Entity.GetComponent(0))&&((r=r.GetPbModelConfig())?.TrackHeight?i.Z+=r.TrackHeight:(0,RegisterComponent_1.isComponentInstance)(t,3)&&(i.Z+=t.ScaledHalfHeight)),i}}}GetTrackAreaInfo(){var e,t=ConfigManager_1.ConfigManager.QuestNewConfig.GetQuestNodeAreaInfo(this.Yut,this.Jut);return t&&0!==t.length?t[0]:(e=(t=this.nW_())[0],"number"==typeof(t=t[1])?ModelManager_1.ModelManager.CreatureModel.GetEntityData(t,e??this.DungeonId)?.AreaId:void 0)}nW_(){let e=void 0,t=void 0;if(void 0!==this.DefaultMapMarkId){var i=ModelManager_1.ModelManager.TrackModel.GetTrackData(this.TrackSource,this.DefaultMapMarkId);if(e=i?.TrackTarget,t=i?.TrackInstanceId,e)return[t,e]}return i=this.gXt(),t=i?.[0],e=i?.[1],[t,e]}GetDefaultMark(){return this.DefaultMapMarkId}gXt(){var e;if(this.zQt&&this.zQt.length)return e=this.zQt.find((e,t)=>!this.iXt.get(t)),this.cXt(0,e)}mXt(e,t,i){return e.MapId===t&&(e.TrackTarget instanceof Vector_1.Vector&&i instanceof Vector_1.Vector?e.TrackTarget.Equality(i):e.TrackTarget===i)}OnExpressOccupied(){if(0!==this.oXt.size)for(var[,e]of this.oXt)TrackController_1.TrackController.SetTrackMarkOccupied(this.TrackSource,e,!0),MapController_1.MapController.ForceSetMarkVisible(this.MarkType,e,!1)}OnExpressOccupationRelease(){if(this.rXt){if(0!==this.oXt.size)for(var[,e]of this.oXt)ModelManager_1.ModelManager.TrackModel.IsTracking(this.TrackSource,e)&&TrackController_1.TrackController.SetTrackMarkOccupied(this.TrackSource,e,!1),MapController_1.MapController.ForceSetMarkVisible(this.MarkType,e,!0)}else this.OnNodeStart(!1)}}
//# sourceMappingURL=TrackMarkExpressController.js.map