
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MapMarkMgr=void 0;const Log_1=require("../../../../../../Core/Common/Log"),Protocol_1=require("../../../../../../Core/Define/Net/Protocol"),EntitySystem_1=require("../../../../../../Core/Entity/EntitySystem"),Vector_1=require("../../../../../../Core/Utils/Math/Vector"),ObjectUtils_1=require("../../../../../../Core/Utils/ObjectUtils"),EventDefine_1=require("../../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../../Common/Event/EventSystem"),ConfigManager_1=require("../../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../../Manager/ModelManager"),WorldMapDefine_1=require("../../../../WorldMap/WorldMapDefine"),MapController_1=require("../../../Controller/MapController"),MapDefine_1=require("../../../MapDefine"),MapUtil_1=require("../../../MapUtil"),CustomMarkItem_1=require("../../../Marks/MarkItem/CustomMarkItem"),MarkItemUtil_1=require("../../../Marks/MarkItemUtil"),MapMarkContainer_1=require("./MapMarkContainer");class MapMarkMgr{constructor(t,e,i,s,n){this.tUi=void 0,this.iUi=new WorldMapDefine_1.MarkPriority2HierarchyIndexHelper,this.oUi=new WorldMapDefine_1.MarkPriority2HierarchyIndexHelper,this.MapType=2,this.Qah=new MapMarkContainer_1.MapMarkContainer,this.lUi=1,this._Ui=0,this.uUi=t=>{this.cUi(t)},this.mUi=t=>{this.dUi(t)},this.ixa=t=>{if(t===this.MapType){var i=this.GetMarkItemsByType(9);let e=`---自定义标记信息---地图类型:${t}
`;i?.forEach(t=>{e=""+e+`MarkId:${t.MarkId},
UiPosition:${t.UiPosition.ToString()},
WorldPosition:${t.WorldPosition.ToString()}

`}),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Map",63,e)}},this.Zal=(t,e,i)=>{e=this.iUi.AddMarkItem(e,i);t.SetHierarchyIndex(e)},this.ell=(t,e)=>{this.iUi.RemoveMarkItem(t,e)},this.CreateDynamicMark=t=>{t=MarkItemUtil_1.MarkItemUtil.Create(t,this.MapType,this.lUi,this.tUi);if(t)return this.AddMarkItem(t.MarkType,t),t},this.CUi=(t,e,i)=>{e=this.GetMarkItem(t,e);e&&e instanceof CustomMarkItem_1.CustomMarkItem&&(e.SetConfigId(i),e.IsTracked)&&(this.gUi(t,e.MarkId,!1),this.gUi(t,e.MarkId,!0))},this.fUi=(t,e)=>{this.Qah.RemoveDynamicMark(t,e)},this.gUi=(t,e,i,s=!1)=>{this.Qah.TrackMapMark(t,e,i,s)},this.ngt=t=>{this.Qah.TrackMark(t)},this.sgt=t=>{this.Qah.UnTrackMark(t)},this._Xt=()=>{this.Qah.ClearTrackMark()},this.pUi=t=>{var e=this.GetMarkItemsByType(11);e&&0<e.size&&this.vUi(11),this.MUi(t)},this.uRi=t=>{t=this.GetMarkItem(0,t);void 0!==t&&t.IsTracked&&MapController_1.MapController.RequestTrackMapMark(t.MarkType,t.MarkId,!1)},this.Jpe=(t,e,i)=>{var s=e.Entity.GetComponent(0),n=s.GetPbEntityInitData(),r=s.GetEntityConfigType();r===Protocol_1.Aki.Protocol.rLs.Proto_OldEntity||r===Protocol_1.Aki.Protocol.rLs.Proto_Character||MapUtil_1.MapUtil.IsTemporaryTeleportEntity(n)||(r=s.GetBaseInfo())?.MapIcon&&this.EUi(r.MapIcon,e.Id,i)},this.zpe=(t,e)=>{this.Qah.RemoveNeedUpdateMark(e.Id),this.RemoveMarkItem(7,e.Id)?.Destroy()},this.MapType=t,this._Ui=e,this.lUi=n,this.tUi=i}Initialize(){this.dde()}Dispose(){this.Cde(),this.vUi()}OnMapSetup(){this.vUi(),this.SUi(),this.yUi(),this.MUi(ModelManager_1.ModelManager.CreatureModel.GetAllScenePlayers())}dde(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.MapReplaceMarkResponse,this.CUi),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.CreateMapMark,this.CreateDynamicMark),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.RemoveMapMark,this.fUi),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.TrackMapMark,this.gUi),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.TrackMark,this.ngt),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.UnTrackMark,this.sgt),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.ClearTrackMark,this._Xt),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.ScenePlayerChanged,this.pUi),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.UnlockTeleport,this.uRi),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.AddEntity,this.Jpe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.RemoveEntity,this.zpe),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnMarkItemViewCreate,this.uUi),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnMarkItemViewDestroy,this.mUi),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.TakeMarkComponentEnterContainer,this.Zal),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.TakeMarkComponentExitContainer,this.ell),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.LogCustomMarkInfo,this.ixa)}Cde(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.MapReplaceMarkResponse,this.CUi),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.CreateMapMark,this.CreateDynamicMark),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.RemoveMapMark,this.fUi),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.TrackMapMark,this.gUi),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.TrackMark,this.ngt),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.ClearTrackMark,this._Xt),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.ScenePlayerChanged,this.pUi),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.UnlockTeleport,this.uRi),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.AddEntity,this.Jpe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.RemoveEntity,this.zpe),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.UnTrackMark,this.sgt),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnMarkItemViewCreate,this.uUi),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnMarkItemViewDestroy,this.mUi),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.TakeMarkComponentEnterContainer,this.Zal),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.TakeMarkComponentExitContainer,this.ell),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.LogCustomMarkInfo,this.ixa)}vUi(t){this.Qah.ClearMarkItems(t),t||(this.iUi.ClearData(),this.oUi.ClearData())}AddMarkItem(t,e){this.Qah.AddMarkItem(t,e)}RemoveMarkItem(t,e){return this.Qah.RemoveMarkItem(t,e)}DUi(t,e,i){var s=t.Holder;s&&this.MapType===s.MapType&&void 0!==e&&t.GetRootItem()&&(t.GetRootItem().SetUIParent(e),t.SetScale(this.lUi),e=i.AddMarkItem(s.MarkType,s.ShowPriority),t.GetRootItem().SetHierarchyIndex(e))}RUi(t,e,i){var s=t.Holder;s&&this.MapType===s.MapType&&t.GetRootItem()&&e===t.GetRootItem().GetParentAsUIItem()&&(i.RemoveMarkItem(t.Holder.MarkType,t.Holder.ShowPriority),t.SetScale(this.lUi))}cUi(t){this.DUi(t,this.tUi,this.iUi)}dUi(t){this.RUi(t,this.tUi,this.iUi)}GetMarkItemsByType(t,e=!0){return this.Qah.GetMarkItemsByType(t,e)}GetMarkItem(t,e){return this.Qah.GetMarkItem(t,e)}GetAllMarkItems(){return this.Qah.GetAllMarkItems()}GetMarkItemsByClickPosition(t){return this.Qah.GetMarkItemsByClickPosition(t)}UpdateNearbyMarkItem(t,e,i){this.Qah.UpdateNearbyMarkItem(t,e,i)}Tick(){this.Qah.Tick()}FindNearbyMarkItems(t,e){return this.Qah.FindNearbyMarkItems(t,e)}SUi(){var t,e;for(const i of ConfigManager_1.ConfigManager.MapConfig.GetConfigMarks(this._Ui))7!==i.ObjectType&&22!==i.ObjectType&&23!==i.ObjectType&&(t=this._Ui===i.MapId,this.Qah.AddCreateMarkTask(t,i.ObjectType,i.MarkId,()=>{var t=MarkItemUtil_1.MarkItemUtil.CreateConfigMark(i.MarkId,i,this.MapType,this.lUi,this.tUi);this.AddMarkItem(i.ObjectType,t)}));for(const[s,n]of ModelManager_1.ModelManager.MapModel.GetEntityPendingList()){const r=EntitySystem_1.EntitySystem.Get(s);r?(e=ConfigManager_1.ConfigManager.MapConfig.GetConfigMark(n),this.Qah.AddCreateMarkTask(!0,e?.ObjectType??0,n,()=>{var t=r.GetComponent(1)?.Owner;this.EUi(n,s,t)})):Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Map",63,"找不到实体对象",["实体ID",s.toString()])}}yUi(){for(const e of ModelManager_1.ModelManager.MapModel.GetAllDynamicMarks().values())for(const i of e.values()){var t=i.MapId===this._Ui;this.Qah.AddCreateMarkTask(t,i.MarkType,i.MarkId,()=>{this.CreateDynamicMark(i)})}}MUi(t){if(ModelManager_1.ModelManager.OnlineModel.GetIsTeamModel()){for(const s of t){var e;s.GetPlayerId()!==ModelManager_1.ModelManager.PlayerInfoModel.GetId()&&(e=ModelManager_1.ModelManager.OnlineModel?.GetCurrentTeamListById(s.GetPlayerId())?.PlayerNumber??1,e=new MapDefine_1.PlayerMarkCreateInfo(s.GetPlayerId(),e,s.GetLocation().ToUeVector(),ModelManager_1.ModelManager.CreatureModel.GetInstanceId()),e=MarkItemUtil_1.MarkItemUtil.Create(e,this.MapType,this.lUi,this.tUi),MapUtil_1.MapUtil.IsInBigWorld(this._Ui)&&(e.IsInAoiRange=!0),this.AddMarkItem(11,e))}var i;for(const n of ModelManager_1.ModelManager.OnlineModel.OtherScenePlayerDataList)n.PlayerId!==ModelManager_1.ModelManager.PlayerInfoModel.GetId()&&n.MapId===MapUtil_1.MapUtil.GetCurrentBigMapOrWorldMapId()&&(i=ModelManager_1.ModelManager.OnlineModel?.GetCurrentTeamListById(n.PlayerId)?.PlayerNumber??1,i=new MapDefine_1.PlayerMarkCreateInfo(n.PlayerId,i,n.Location?.ToUeVector()??Vector_1.Vector.ZeroVector,n.MapId),i=MarkItemUtil_1.MarkItemUtil.Create(i,this.MapType,this.lUi,this.tUi),MapUtil_1.MapUtil.IsInBigWorld(this._Ui)&&(i.IsInAoiRange=!0),this.AddMarkItem(11,i))}}EUi(t,e,i){ObjectUtils_1.ObjectUtils.IsValid(i)&&(e=MarkItemUtil_1.MarkItemUtil.CreateEntityMark(e,t,this.tUi,i,this.MapType,this.lUi),this.AddMarkItem(7,e))}}exports.MapMarkMgr=MapMarkMgr;
//# sourceMappingURL=MapMarkMgr.js.map