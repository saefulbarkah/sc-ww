
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MarkAssistant=void 0;const Log_1=require("../../../../Core/Common/Log"),Protocol_1=require("../../../../Core/Define/Net/Protocol"),Net_1=require("../../../../Core/Net/Net"),Vector_1=require("../../../../Core/Utils/Math/Vector"),Vector2D_1=require("../../../../Core/Utils/Math/Vector2D"),MathUtils_1=require("../../../../Core/Utils/MathUtils"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),ConfigManager_1=require("../../../Manager/ConfigManager"),ControllerHolder_1=require("../../../Manager/ControllerHolder"),ModelManager_1=require("../../../Manager/ModelManager"),ControllerAssistantBase_1=require("../../GeneralLogicTree/ControllerAssistant/ControllerAssistantBase"),ScrollingTipsController_1=require("../../ScrollingTips/ScrollingTipsController"),TeleportController_1=require("../../Teleport/TeleportController"),TrackController_1=require("../../Track/TrackController"),WorldMapController_1=require("../../WorldMap/WorldMapController"),MapDefine_1=require("../MapDefine"),MapUtil_1=require("../MapUtil"),MarkItemDataUtil_1=require("../Marks/MarkItemDataUtil");class MarkAssistant extends ControllerAssistantBase_1.ControllerAssistantBase{constructor(){super(...arguments),this.Jpe=(e,r,o)=>{var t=r.Entity.GetComponent(0),a=t.GetPbEntityInitData();t.GetEntityConfigType()===Protocol_1.Aki.Protocol.rLs.Proto_Character||MapUtil_1.MapUtil.IsTemporaryTeleportEntity(a)||(a=t.GetBaseInfo())?.MapIcon&&(ModelManager_1.ModelManager.MapModel.AddEntityIdToPendingList(r.Id,a.MapIcon),EventSystem_1.EventSystem.AddWithTargetUseHoldKey(this,r,EventDefine_1.EEventName.RemoveEntity,this.zpe))},this.zpe=(e,r)=>{ModelManager_1.ModelManager.MapModel.RemoveEntityIdToPendingList(r.Id),ModelManager_1.ModelManager.MapModel.GetEntityPendingList()?.has(r.Id)&&EventSystem_1.EventSystem.RemoveWithTargetUseKey(this,r,EventDefine_1.EEventName.RemoveEntity,this.zpe)},this.VLi=e=>{ModelManager_1.ModelManager.MapModel.SetTrackMark(0,e.T7n,!0)},this.HLi=e=>{ModelManager_1.ModelManager.MapModel.SetTrackMark(0,e.T7n,!1)},this.jLi=e=>{ModelManager_1.ModelManager.MapModel.ResetDynamicMarkData();for(const o of e.cbs){var r=0===o.L7n?Vector2D_1.Vector2D.Create(o.D7n,o.A7n):Vector_1.Vector.Create(o.D7n,o.A7n,o.L7n),r=new MapDefine_1.DynamicMarkCreateInfo(r,o.v9n,MarkItemDataUtil_1.MarkItemDataUtil.TransformMarkTypeToClient(o.U7n),o.T7n,void 0,!1,void 0,o.A5n,o.Fn1,o.w7n);ModelManager_1.ModelManager.MapModel.CreateServerSaveMark(r)}for(const t of e.dbs)ModelManager_1.ModelManager.MapModel.SetMarkExtraShowState(t.T7n,t.q5n,!1,t.Cbs);for(const a of e.vbs)ModelManager_1.ModelManager.MapModel.SetMarkServerOpenState(a,!0)},this.WLi=e=>{if(!ModelManager_1.ModelManager.OnlineModel.GetIsTeamModel()||ModelManager_1.ModelManager.OnlineModel.GetIsMyTeam()||!MapDefine_1.addMarkFilterInTeamModeSet.has(e.YVn.U7n)){if(e.Nn1)for(const r of e.Nn1.ubs)this.cNa(r);this.cNa(e.YVn,e.pbs)}},this.tYa=e=>{var r=e.T7n,e=e.Fn1,o=ModelManager_1.ModelManager.MapModel.GetDynamicMark(r);o?o.IsServerDisable=e:Log_1.Log.CheckError()&&Log_1.Log.Error("Map",63,"[地图系统]->MarkAssistant动态标记状态更新失败，没找到标记",["markId",r],["isDisable",e])},this.XLi=e=>{ModelManager_1.ModelManager.MapModel?.SetMarkServerOpenState(e.T7n,!0)},this.$Li=e=>{var r;Log_1.Log.CheckInfo()&&Log_1.Log.Info("Map",63,"移除标记列表",["notify.Proto_MarkIds",e.Ika]),1===e.Ika.length&&(r=e.Ika[0],this.cza(r));for(const o of e.Ika)ModelManager_1.ModelManager.MapModel?.RemoveDynamicMapMark(MathUtils_1.MathUtils.LongToNumber(o))},this.YLi=e=>{ModelManager_1.ModelManager.MapModel.SetMarkExtraShowState(e.T7n,e.q5n,e.gbs,e.Cbs)},this.JLi=e=>{ModelManager_1.ModelManager.MapModel.FullUpdateTemporaryTeleportInfo(e.cGs)},this.ZLi=e=>{ModelManager_1.ModelManager.MapModel.UpdateTemporaryTeleportInfo(e.dGs)},this.jcl=e=>{ModelManager_1.ModelManager.MapModel.FullUpdateBoxSlotInfo(e.nn1)},this.tDi=e=>{for(const r of e.uEs)ModelManager_1.ModelManager.MapModel.AddOccupationInfo(r),ModelManager_1.ModelManager.GeneralLogicTreeModel.AddOccupationInfo(r)},this.iDi=e=>{for(const r of e.uEs)ModelManager_1.ModelManager.MapModel.AddOccupationInfo(r),ModelManager_1.ModelManager.GeneralLogicTreeModel.AddOccupationInfo(r)},this.oDi=e=>{for(const r of e.GEs)ModelManager_1.ModelManager.MapModel.RemoveOccupationInfo(r),ModelManager_1.ModelManager.GeneralLogicTreeModel.RemoveOccupationInfo(r)},this.rDi=(e,r)=>{r&&(e.MarkId?this.OpenMapViewAndFocus(e.MarkType,e.MarkId,void 0,!1):Log_1.Log.CheckInfo()&&Log_1.Log.Info("Phantom",63,"[探索工具]->聚焦地图失败，不存在探索工具标记Id",["MarkId",e.MarkId],["useAgain",r],["usingInfo",e]))},this.KFa=!1}nDi(e,r,o,t){var a=Protocol_1.Aki.Protocol.x7n.create();return a.D7n=e.X,a.A7n=e.Y,a.L7n=e.Z,a.v9n=o,a.U7n=r,a.P7n=!1,a.w7n=t,a}sDi(e,r,o,t){var a=Protocol_1.Aki.Protocol.Jss.create(),e=this.nDi(e,r,o,t);return a.x7n=e,a}KLi(e){let r=void 0;return r=0===e.L7n?Vector2D_1.Vector2D.Create(e.D7n,e.A7n):Vector_1.Vector.Create(e.D7n,e.A7n,e.L7n),new MapDefine_1.DynamicMarkCreateInfo(r,e.v9n,MarkItemDataUtil_1.MarkItemDataUtil.TransformMarkTypeToClient(e.U7n),e.T7n??void 0,void 0,!1,void 0,e.A5n,e.Fn1,e.w7n)}OnDestroy(){}OnRegisterNetEvent(){Net_1.Net.Register(21097,this.VLi),Net_1.Net.Register(29995,this.HLi),Net_1.Net.Register(24090,this.jLi),Net_1.Net.Register(16514,this.WLi),Net_1.Net.Register(19293,this.tYa),Net_1.Net.Register(20438,this.XLi),Net_1.Net.Register(19071,this.$Li),Net_1.Net.Register(16853,this.JLi),Net_1.Net.Register(22146,this.ZLi),Net_1.Net.Register(17610,this.jcl),Net_1.Net.Register(22722,this.YLi),Net_1.Net.Register(29215,this.tDi),Net_1.Net.Register(20941,this.iDi),Net_1.Net.Register(18783,this.oDi)}OnUnRegisterNetEvent(){Net_1.Net.UnRegister(21097),Net_1.Net.UnRegister(29995),Net_1.Net.UnRegister(24090),Net_1.Net.UnRegister(16514),Net_1.Net.UnRegister(19293),Net_1.Net.UnRegister(20438),Net_1.Net.UnRegister(19071),Net_1.Net.UnRegister(16853),Net_1.Net.UnRegister(22146),Net_1.Net.UnRegister(17610),Net_1.Net.UnRegister(22722),Net_1.Net.UnRegister(29215),Net_1.Net.UnRegister(20941),Net_1.Net.UnRegister(18783)}OnAddEvents(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.AddEntity,this.Jpe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnUseMapExploreToolSuccess,this.rDi)}OnRemoveEvents(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.AddEntity,this.Jpe),EventSystem_1.EventSystem.RemoveAllTargetUseKey(this),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnUseMapExploreToolSuccess,this.rDi)}cNa(e,r){var o=this.KLi(e);if(ModelManager_1.ModelManager.MapModel.CreateServerSaveMark(o),e.U7n===Protocol_1.Aki.Protocol.w5s.ENUMS.Proto_TreasureBoxPoint&&void 0!==r)for(const n of r.ubs){var t=this.KLi(n);Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Map",63,"添加物资箱标记",["pointInfo.Proto_MarkId",n.T7n],["pointInfo.Proto_ConfigId",n.v9n]),ModelManager_1.ModelManager.MapModel.CreateServerSaveMark(t)}var a=MarkItemDataUtil_1.MarkItemDataUtil.TransformMarkTypeToClient(e.U7n);switch(a){case 17:this.OpenMapViewAndFocus(a,e.T7n,e=>{e&&0===r.ubs.length&&ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByCode("ExploreBoxUnfindable")},!1,MapDefine_1.WORLD_MAP_MAX_SCALE);break;case 16:case 21:this.OpenMapViewAndFocus(a,e.T7n,void 0,!1,MapDefine_1.WORLD_MAP_MAX_SCALE);break;case 22:this.OpenMapViewAndFocus(a,e.T7n,void 0,!1,MapDefine_1.WORLD_MAP_MAX_SCALE,!0)}}OpenMapViewAndFocus(e,r,o,t=!0,a=1,n=!1){!n&&ModelManager_1.ModelManager.OnlineModel.GetIsTeamModel()&&!ModelManager_1.ModelManager.OnlineModel.GetIsMyTeam()||(n={MarkId:r,MarkType:e,OpenAreaId:0,IsNotFocusTween:!t,StartScale:a},WorldMapController_1.WorldMapController.OpenView(2,!1,n,o))}async RequestTrackInfo(){var e=Protocol_1.Aki.Protocol.ias.create(),e=await Net_1.Net.CallAsync(16812,e);if(e)if(e.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs)ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.Q4n,23455);else for(const t of e.fbs){var r=ConfigManager_1.ConfigManager.MapConfig.SearchMarkConfig(t),o=this.lDi(t),r={TrackSource:1,MarkType:r?.ObjectType,Id:t,IconPath:o.Icon,TrackTarget:o.TrackTarget,TrackInstanceId:o.TargetInstanceOrMapId,MarkConfig:o.MarkConfig};TrackController_1.TrackController.StartTrack(r)}}lDi(r){var o=ConfigManager_1.ConfigManager.MapConfig.GetConfigMark(r);if(o)return{Icon:MarkItemDataUtil_1.MarkItemDataUtil.GetMarkIcon(r)??"",TrackTarget:o.EntityConfigId??Vector_1.Vector.Create(o.MarkVector),TargetInstanceOrMapId:o.MapId,MarkConfig:o};o=ModelManager_1.ModelManager.MapModel.GetDynamicMarkInfoById(r);if(o){var r=ConfigManager_1.ConfigManager.MapConfig.GetCustomMarkConfig(o.MarkConfigId),t=o.TrackTarget;let e=void 0;return t instanceof Vector_1.Vector?e=MapUtil_1.MapUtil.UiPosition2WorldPosition(t):t instanceof Vector2D_1.Vector2D&&(t=Vector_1.Vector.Create(t.X,-t.Y,0),e=MapUtil_1.MapUtil.UiPosition2WorldPosition(t)),{Icon:r.MarkPic,TrackTarget:e,MarkConfig:r,TargetInstanceOrMapId:o.MapId}}return{Icon:"",TrackTarget:Vector_1.Vector.Create(0,0,0),MarkConfig:void 0,TargetInstanceOrMapId:0}}RequestMapMarkReplace(e,r){e=Protocol_1.Aki.Protocol.las.create({T7n:e,v9n:r});Net_1.Net.Call(22774,e,e=>{ModelManager_1.ModelManager.MapModel.ReplaceCustomMarkIcon(e.T7n,e.v9n)})}RequestCreateCustomMark(e,r){var o;e?ModelManager_1.ModelManager.MapModel.GetMarkCountByType(9)>=ModelManager_1.ModelManager.WorldMapModel.CustomMarkSize||(o=e instanceof Vector_1.Vector?e.Z:0,o=this.sDi(Vector_1.Vector.Create(e.X,e.Y,o),Protocol_1.Aki.Protocol.w5s.ENUMS.Proto_Custom,r,MapUtil_1.MapUtil.GetCurrentBigMapOrWorldMapId()),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Map",63,"[CustomMarkItem Debug]MarkAssistant.RequestCreateCustomMark->",["trackPosition",e],["configId",r],["request",o]),Net_1.Net.Call(24535,o,e=>{e.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs&&ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.Q4n,18820),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Map",63,"[CustomMarkItem Debug]MarkAssistant.response->",["response.Info",e?.YVn])})):Log_1.Log.CheckError()&&Log_1.Log.Error("Map",63,"向服务器请求创建标记时，坐标不存在")}RequestTrackEnrichmentArea(e,r){var o;this.KFa?Log_1.Log.CheckInfo()&&Log_1.Log.Info("Map",63,"[地图系统]->过滤本次请求富集区信息,未收到上次返回",["锁定状态：",this.KFa]):((o=Protocol_1.Aki.Protocol.NXl.create()).L8n=e??0,this.KFa=!0,Net_1.Net.Call(19895,o,e=>{this.KFa=!1,e.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs&&ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.Q4n,19012),e.Q4n===Protocol_1.Aki.Protocol.Q4n.KRs&&r?.()}))}cza(e){var r,e=ModelManager_1.ModelManager.MapModel.GetDynamicMark(e);e&&23===e.MarkType&&(e=ModelManager_1.ModelManager.MapModel.GetMarkCountByType(23),r=ModelManager_1.ModelManager.MapModel.GetMarkCountByType(22),1===e)&&1===r&&1===(e=ModelManager_1.ModelManager.MapModel.GetMarkByType(22))?.size&&(r=e.values().next().value,(e=ConfigManager_1.ConfigManager.MapConfig.GetEnrichmentAreaConfigByEnrichmentId(r.EntityConfigId))?this.RequestTrackEnrichmentArea(e.ItemId,()=>{ScrollingTipsController_1.ScrollingTipsController.ShowTipsByTextId("SearchNextRichArea")}):Log_1.Log.CheckError()&&Log_1.Log.Error("Map",63,"[地图系统]富集区连续追踪找不到富集区配置",["EnrichmentAreaId:",r.EntityConfigId]))}RequestRemoveMapMarks(o,e){e=Protocol_1.Aki.Protocol.Zss.create({Ika:e});Net_1.Net.Call(23394,e,e=>{if(e.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs)ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.Q4n,23928);else for(const r of e.Ika)ModelManager_1.ModelManager.MapModel.RemoveMapMark(o,r)})}RequestRemoveDynamicMapMark(e){var r=ModelManager_1.ModelManager.MapModel.GetDynamicMark(e);void 0===r?Log_1.Log.CheckError()&&Log_1.Log.Error("Map",63,"找不到对应mark id:",["markId",e]):this.RequestRemoveMapMarks(r.MarkType,[r.MarkId])}RequestTrackMapMark(r,o,t){var e;o<0?(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Map",63,"markId小于0, 请求追踪信息未发给后端"),ModelManager_1.ModelManager.MapModel.SetTrackMark(r,o,!0),t?.(0,!0)):(e=Protocol_1.Aki.Protocol.oas.create({T7n:o}),Net_1.Net.Call(17853,e,e=>{Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Map",63,"向服务端请求追踪标记: 标记id:",["markId",o]),e.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs?(ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.Q4n,20079),t?.(1,!0)):(ModelManager_1.ModelManager.MapModel.SetTrackMark(r,e.T7n,!0),t?.(0,!0))}))}RequestCancelTrackMapMark(r,o,t){var e;o<0?(Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Map",63,"markId小于0, 请求取消追踪信息未发给后端"),ModelManager_1.ModelManager.MapModel.SetTrackMark(r,o,!1),t?.(0,!1)):(e=Protocol_1.Aki.Protocol.sas.create({T7n:o}),Net_1.Net.Call(19108,e,e=>{Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Map",63,"向服务端请求取消追踪标记: 标记id:",["markId",o]),e.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs?(Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Map",63,"取消追踪标记失败: ",["标记id:",o],["错误码:",e.Q4n]),t?.(1,!1)):(ModelManager_1.ModelManager.MapModel.SetTrackMark(r,e.T7n,!1),t?.(0,!1))}))}RequestTeleportToTargetByTemporaryTeleport(e,r,o){var t,a;TeleportController_1.TeleportController.CheckCanTeleport()?(t=Protocol_1.Aki.Protocol.wCs.create(),(a=Protocol_1.Aki.Protocol.D2s.create()).Pitch=r.Pitch,a.Roll=r.Roll,a.Yaw=r.Yaw,t.R7n=e,t._8n=a,Net_1.Net.Call(18463,t,e=>{e.G9n!==Protocol_1.Aki.Protocol.Q4n.KRs&&ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.G9n,25950)}),o?.()):ControllerHolder_1.ControllerHolder.GenericPromptController.ShowPromptByCode("TrialRoleTransmitLimit")}UpdateCustomMapMarkPosition(e,r){e=Protocol_1.Aki.Protocol.vas.create({T7n:e,l8n:r});Net_1.Net.Call(16970,e,e=>{e.Q4n!==Protocol_1.Aki.Protocol.Q4n.KRs&&ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.Q4n,23968)})}}exports.MarkAssistant=MarkAssistant;
//# sourceMappingURL=MarkAssistant.js.map