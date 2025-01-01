
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ServerMarkItem=void 0;const Vector_1=require("../../../../../Core/Utils/Math/Vector"),Vector2D_1=require("../../../../../Core/Utils/Math/Vector2D"),ConfigManager_1=require("../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../Manager/ModelManager"),MapDefine_1=require("../../MapDefine"),ServerMarkItemView_1=require("../MarkItemView/ServerMarkItemView"),MarkItem_1=require("./MarkItem");class ServerMarkItem extends MarkItem_1.MarkItem{constructor(e,t,i,r){super(t,i,r,e.TrackSource??1),this.MinShowScale=0,this.MaxShowScale=0,this.ServerMarkInfo=void 0,this.MultiMapIdInternal=void 0,this.ServerMarkInfo=e,this.MapId=e.MapId,MapDefine_1.serverMarkIgnoreReadConfigSet.has(e.MarkType)?this.ShowPriority=0:(t=ConfigManager_1.ConfigManager.MapConfig.GetConfigMark(e.MarkConfigId),this.ShowPriority=t?t.ShowPriority:0)}get MarkId(){return this.ServerMarkInfo?.MarkId}get MarkType(){return 0}get ConfigId(){return this.ServerMarkInfo.MarkConfigId}get TrackPosition(){return this.ServerMarkInfo.TrackTarget instanceof Vector_1.Vector||this.ServerMarkInfo.TrackTarget instanceof Vector2D_1.Vector2D?this.ServerMarkInfo.TrackTarget:Vector_1.Vector.ZeroVectorProxy}get EntityConfigId(){return this.ServerMarkInfo.EntityConfigId}IsMultiMap(){return 0!==this.GetMultiMapId()}GetMultiMapId(){if(void 0===this.EntityConfigId||0===this.EntityConfigId)return 0;if(void 0===this.MultiMapIdInternal){var e=ModelManager_1.ModelManager.WorldMapModel.GetEntityAreaId(this.EntityConfigId,this.MapId),t=ConfigManager_1.ConfigManager.AreaConfig.GetLevelOneAreaId(e);for(const i of ConfigManager_1.ConfigManager.MapConfig.GetAllSubMapConfig())if(i.Area.includes(t)||i.Area.includes(e)){this.MultiMapIdInternal=i.Id;break}void 0===this.MultiMapIdInternal&&(this.MultiMapIdInternal=0)}return this.MultiMapIdInternal}get IsServerDisable(){return this.ServerMarkInfo.IsServerDisable}OnCreateView(){this.InnerView=new ServerMarkItemView_1.ServerMarkItemView(this)}CheckInShowRange(e){return!!this.IsIgnoreScaleShow||this.MinShowScale===this.MaxShowScale||this.MinShowScale<e&&this.MaxShowScale>e}OnAfterSetConfigId(e){e&&(e.ShowRange&&(this.MinShowScale=e.ShowRange[0]??0,this.MaxShowScale=e.ShowRange[1]??0),this.IconPath=e.MarkPic,this.InnerView?.OnIconPathChanged(this.IconPath),e.ShowPriority&&(this.ShowPriority=e.ShowPriority),this.ConfigScale=e.Scale??1,this.CornerScale=e.CornerScale??1)}CheckCanShowView(){var e=this.GetCurrentMapShowScale(),e=this.CheckInShowRange(e)||this.IsTracked;return this.IsCanShowViewIntermediately!==e&&(this.NeedPlayShowOrHideSeq=e?"ShowView":"HideView"),e}}exports.ServerMarkItem=ServerMarkItem;
//# sourceMappingURL=ServerMarkItem.js.map