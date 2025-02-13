
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DynamicConfigMarkItem=void 0;const Vector_1=require("../../../../../Core/Utils/Math/Vector"),ConfigManager_1=require("../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../Manager/ModelManager"),DynamicConfigMarkItemView_1=require("../MarkItemView/DynamicConfigMarkItemView"),MarkItem_1=require("./MarkItem");class DynamicConfigMarkItem extends MarkItem_1.MarkItem{constructor(e,t,i,r,n,s=1){super(i,r,n,s),this.MarkConfig=void 0,this.ODi=0,this.Q3_=void 0,this.ConditionShouldShow=!0,this.ODi=e,this.ShowPriority=t.ShowPriority,this.MarkConfig=t,this.IconPath=this.MarkConfig.LockMarkPic}get IsFogUnlock(){return 1===this.MarkConfig.FogShow||ModelManager_1.ModelManager.MapModel.CheckFogUnlocked(this.MarkConfig.FogHide)}get MarkId(){return this.ODi}get MarkConfigId(){return this.MarkConfig.MarkId}get MarkType(){return this.MarkConfig.ObjectType}set OverrideMapId(e){this.Q3_=e}get OverrideMapId(){return this.Q3_}get MapId(){return this.OverrideMapId??this.MarkConfig.MapId}get InstanceDungeonId(){return this.MarkConfig.InstanceDungeonId}OnInitialize(){this.MarkConfig.Scale&&this.SetConfigScale(this.MarkConfig.Scale),this.InitPosition(this.MarkConfig),this.InitShowCondition()}InitPosition(e){e.EntityConfigId?(this.SetTrackData(e.EntityConfigId),this.UpdateVisibleRelativeState()):e.MarkVector&&(this.SetTrackData(Vector_1.Vector.Create(e.MarkVector)),this.UpdateVisibleRelativeState())}GetMarkItemViewType(){return 5}CreateView(){return new DynamicConfigMarkItemView_1.DynamicConfigMarkItemView(this)}GetLocaleDesc(){return this.MarkConfig.MarkDesc}GetTitleText(){return ConfigManager_1.ConfigManager.MapConfig.GetLocalText(this.MarkConfig.MarkTitle)}get TrackAreaId(){if("number"==typeof this.TrackTarget&&0!==this.TrackTarget)return ModelManager_1.ModelManager.WorldMapModel.GetEntityAreaId(this.TrackTarget,this.MapId)}GetAreaText(){var e,t,i;if("number"==typeof this.TrackTarget)return e=this.TrackAreaId,i=ConfigManager_1.ConfigManager.AreaConfig.GetParentAreaId(e),t=(e=ConfigManager_1.ConfigManager.AreaConfig.GetAreaInfo(e))?ConfigManager_1.ConfigManager.AreaConfig.GetAreaLocalName(e.Title):"",i=(i=ConfigManager_1.ConfigManager.AreaConfig.GetAreaInfo(i))?ConfigManager_1.ConfigManager.AreaConfig.GetAreaLocalName(i.Title):"",(e?ConfigManager_1.ConfigManager.InfluenceConfig.GetCountryTitle(e.CountryId):"")+`-${i}-`+t}GDi(e){return this.MarkConfig.ShowRange[0]<e&&this.MarkConfig.ShowRange[1]>e}InitShowCondition(){this.ConditionShouldShow=!0}CheckCanShowView(){var e,t=this.MapType;return!(1===this.MarkConfig.MapShow&&1!==t||2===this.MarkConfig.MapShow&&1===t||!this.ConditionShouldShow||!this.IsFogUnlock)&&(e=this.GetCurrentMapShowScale(),e=this.GDi(e)||this.IsTracked,2!==t||(this.IsCanShowViewIntermediately!==(t=e||this.IsIgnoreScaleShow)&&(this.NeedPlayShowOrHideSeq=t?"ShowView":"HideView"),t))}GetShowScale(){return this.MarkConfig.ShowRange[0]+this.MarkConfig.ShowRange[1]/2}}exports.DynamicConfigMarkItem=DynamicConfigMarkItem;
//# sourceMappingURL=DynamicConfigMarkItem.js.map