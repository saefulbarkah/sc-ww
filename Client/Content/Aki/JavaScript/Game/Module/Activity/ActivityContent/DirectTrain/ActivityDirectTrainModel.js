
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ActivityDirectTrainModel=void 0;const ModelBase_1=require("../../../../../Core/Framework/ModelBase"),ConfigManager_1=require("../../../../Manager/ConfigManager");class ActivityDirectTrainModel extends ModelBase_1.ModelBase{constructor(){super(...arguments),this.exl=0,this.AlreadyStartView=!1}get ActivityId(){return this.exl}set ActivityId(e){this.exl=e}GetRecommendQuestId(){return ConfigManager_1.ConfigManager.ActivityDirectTrainConfig.GetDirectTrainActivityConfById(this.ActivityId).RecommendQuestId}GetRecommendQuestTipsTextId(){return ConfigManager_1.ConfigManager.ActivityDirectTrainConfig.GetDirectTrainActivityConfById(this.ActivityId).RecommendQuestLabel}GetSkipQuestId(){return ConfigManager_1.ConfigManager.ActivityDirectTrainConfig.GetDirectTrainActivityConfById(this.ActivityId).SkipQuestId}}exports.ActivityDirectTrainModel=ActivityDirectTrainModel;
//# sourceMappingURL=ActivityDirectTrainModel.js.map