
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SelectablePropVisionRecoveryItemGrid=void 0;const ConfigManager_1=require("../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../Manager/ModelManager"),SelectablePropMediumItemGrid_1=require("./SelectablePropMediumItemGrid");class SelectablePropVisionRecoveryItemGrid extends SelectablePropMediumItemGrid_1.SelectablePropMediumItemGrid{RefreshUi(e){this.SelectablePropData=e;var r,i=ModelManager_1.ModelManager.InventoryModel,t=e.IncId,o=e.ItemId,a=e.ItemDataType,n=ConfigManager_1.ConfigManager.InventoryConfig.GetItemConfigData(o);let s=void 0;(s=0<t?i.GetAttributeItemData(t):i.GetCommonItemData(o))&&(i=this.SelectablePropData.SelectedCount,r=this.SelectablePropData.Count,e={Type:4,Data:e,ItemConfigId:o,StarLevel:n.QualityId,ReduceButtonInfo:{IsVisible:0<i,LongPressConfigId:1}},3===a?(n=(o=ModelManager_1.ModelManager.PhantomBattleModel.GetPhantomBattleData(t)).GetPhantomLevel(),e.Level=o.GetCost(),e.IsLevelTextUseChangeColor=!0,e.BottomTextId="VisionLevel",e.IsDisable=1<n,e.BottomTextParameter=[o.GetPhantomLevel()],e.VisionFetterGroupId=o.GetFetterGroupId(),e.IsOmitBottomText=!0,e.IsLockVisible=o.GetIsLock(),e.IsDeprecate=o.GetIsDeprecated()):0<i?(e.BottomTextId="Text_ItemEnoughText_Text",e.BottomTextParameter=[i,r]):e.BottomText=r.toString(),this.Apply(e))}}exports.SelectablePropVisionRecoveryItemGrid=SelectablePropVisionRecoveryItemGrid;
//# sourceMappingURL=SelectablePropVisionRecoveryItemGrid.js.map