
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EnrichmentAreaItem=void 0;const Log_1=require("../../../../../Core/Common/Log"),CommonParamById_1=require("../../../../../Core/Define/ConfigCommon/CommonParamById"),Vector_1=require("../../../../../Core/Utils/Math/Vector"),Vector2D_1=require("../../../../../Core/Utils/Math/Vector2D"),ConfigManager_1=require("../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../Manager/ModelManager"),MapUtil_1=require("../../MapUtil"),EnrichmentAreaItemView_1=require("../MarkItemView/EnrichmentAreaItemView"),ServerMarkItem_1=require("./ServerMarkItem");class EnrichmentAreaItem extends ServerMarkItem_1.ServerMarkItem{constructor(e,r,t,i){super(e,r,t,i),this.mNa=0,this.gNa=void 0,this.p6a=void 0}get MarkConfig(){return this.gNa}set MarkConfig(e){this.gNa=e}get MarkRange(){return this.mNa}get MarkType(){return 22}OnCreateView(){this.InnerView=new EnrichmentAreaItemView_1.EnrichmentAreaItemView(this)}Initialize(){super.Initialize();var e,r=this.ServerMarkInfo;if(this.SetTrackData(r.TrackTarget),this.p6a=ConfigManager_1.ConfigManager.MapConfig.GetEnrichmentAreaConfigByEnrichmentId(r.EntityConfigId),this.MapId=this.p6a.LevelId,ModelManager_1.ModelManager.MapModel.CacheEnrichmentAreaEntityId!==r.EntityConfigId){var t=this.p6a.EntityIds;if(t){var i=[];for(const n of t){var a=MapUtil_1.MapUtil.GetEntityPosition(n,!1,this.MapId);a.Equality(Vector_1.Vector.ZeroVectorProxy)?Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Map",63,"[地图系统]_富集区标记->采集物实体坐标异常，请检查配置",["富集区Id",r.EntityConfigId],["采集物Id",n]):(a=MapUtil_1.MapUtil.WorldPosition2UiPosition(a),i.push(Vector2D_1.Vector2D.Create(a.X,a.Y)))}const o=MapUtil_1.MapUtil.MinBoundingCircle(i);ModelManager_1.ModelManager.MapModel.CacheEnrichmentAreaWorldMapCircle=o}ModelManager_1.ModelManager.MapModel.CacheEnrichmentAreaEntityId=r.EntityConfigId??0}const o=ModelManager_1.ModelManager.MapModel.CacheEnrichmentAreaWorldMapCircle;o&&(t=MapUtil_1.MapUtil.UiPosition2WorldPosition(Vector_1.Vector.Create(o.X,o.Y,0)),e=CommonParamById_1.configCommonParamById.GetFloatConfig("RichZoneExtraRadius"),this.mNa=o.R+e,this.SetTrackData(t));this.SetConfigId(5),this.UpdateTrackState()}SetConfigId(e){this.OnSetConfigId(e)}OnSetConfigId(e){e=ConfigManager_1.ConfigManager.MapConfig.GetConfigMark(e);this.gNa=e,this.OnAfterSetConfigId({ShowRange:e.ShowRange,MarkPic:e.UnlockMarkPic,ShowPriority:e.ShowPriority,Scale:e.Scale,CornerScale:e.CornerScale})}GetEnrichmentItemNameId(){return ConfigManager_1.ConfigManager.ItemConfig.GetConfig(this.p6a.ItemId).Name}CheckCanShowIcon(){var e=this.MapType;return!(1===this.MarkConfig.MapShow&&1!==e||2===this.MarkConfig.MapShow&&1===e)&&super.CheckCanShowView()}}exports.EnrichmentAreaItem=EnrichmentAreaItem;
//# sourceMappingURL=EnrichmentAreaItem.js.map