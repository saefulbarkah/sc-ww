
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RecommendQualityModel=void 0;const ModelBase_1=require("../../../Core/Framework/ModelBase"),LocalStorage_1=require("../../Common/LocalStorage"),LocalStorageDefine_1=require("../../Common/LocalStorageDefine"),GameSettingsDeviceRender_1=require("../../GameSettings/GameSettingsDeviceRender"),GameSettingsManager_1=require("../../GameSettings/GameSettingsManager"),GameSettingsUtils_1=require("../../GameSettings/GameSettingsUtils"),ConfigManager_1=require("../../Manager/ConfigManager"),UiManager_1=require("../../Ui/UiManager");class RecommendQualityModel extends ModelBase_1.ModelBase{constructor(){super(...arguments),this.QualityRangeMap=void 0,this.vul=void 0,this.Sul=0,this.yul=!1,this.Yul=!1,this.zul=4}OnInit(){return this.yul=LocalStorage_1.LocalStorage.GetGlobal(LocalStorageDefine_1.ELocalStorageGlobalKey.IsFinishRecommendQuality,!1),this.yul||(this.InitQualityRangeMap(),this.InitQualityList()),!0}OnClear(){return!0}InitQualityRangeMap(){this.QualityRangeMap=new Map([[0,[0,1,2]],[1,[1,2,3]],[2,[0,1]]])}InitQualityList(){var e=GameSettingsDeviceRender_1.GameSettingsDeviceRender.GetQualityRange(),e=this.QualityRangeMap?.get(e);if(e){this.vul=[];const a=(ConfigManager_1.ConfigManager.MenuBaseConfig?.GetMenuConfigByFunctionId(10))?.OptionsName??[],n=GameSettingsDeviceRender_1.GameSettingsDeviceRender.GetRecommendQualityLv();a.pop(),e.forEach((e,t)=>{var i="T_LoginSetQuality"+(e+1),i=ConfigManager_1.ConfigManager.UiResourceConfig.GetResourcePath(i),e={Quality:e,Name:a[e],IsRecommend:n===e,Bg:i};this.vul.push(e),e.IsRecommend&&(this.Sul=t)})}}GetQualityList(){return this.vul??[]}GetRecommendQualityIndex(){return this.Sul}ApplyQuality(){return!!this.Yul&&(this.Yul=!1,GameSettingsUtils_1.GameSettingsUtils.SetIsCustomImageQuality(!1),GameSettingsManager_1.GameSettingsManager.SetApplySave(10,this.zul),!0)}SaveApply(e){this.Yul=!0,this.zul=e}FinishRecommendQualityShow(){LocalStorage_1.LocalStorage.SetGlobal(LocalStorageDefine_1.ELocalStorageGlobalKey.IsFinishRecommendQuality,!0)}CheckOpenRecommendQuality(){this.yul?UiManager_1.UiManager.CloseView("CreateCharacterView"):UiManager_1.UiManager.OpenView("RecommendQualityView")}}exports.RecommendQualityModel=RecommendQualityModel;
//# sourceMappingURL=RecommendQualityModel.js.map