
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MapHelper=void 0;const ModelManager_1=require("../../Manager/ModelManager"),ScrollingTipsController_1=require("../ScrollingTips/ScrollingTipsController"),MapUtil_1=require("./MapUtil");class MapHelper{static CheckAndShowCrossMapTips(e,r,l){var e=MapUtil_1.MapUtil.GetMarkBelongMapId(e,r),r=ModelManager_1.ModelManager.CreatureModel.GetInstanceId();MapUtil_1.MapUtil.IsDungeonDiffWorld(e,r)&&(r=MapUtil_1.MapUtil.GetMapNameByInstanceId(e,l),ScrollingTipsController_1.ScrollingTipsController.ShowTipsByTextId("CrossMapMainTips",r))}}exports.MapHelper=MapHelper;
//# sourceMappingURL=MapHelper.js.map