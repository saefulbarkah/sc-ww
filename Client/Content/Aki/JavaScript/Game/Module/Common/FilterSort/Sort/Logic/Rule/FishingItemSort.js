
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FishingItem=void 0;const ModelManager_1=require("../../../../../../Manager/ModelManager"),CommonSort_1=require("./CommonSort");class FishingItem extends CommonSort_1.CommonSort{constructor(){super(...arguments),this.sP_=(e,t,r)=>{var o=ModelManager_1.ModelManager.FishingModel.FishingItemHandBookDataMap.get(e.Id)?1:0,s=ModelManager_1.ModelManager.FishingModel.FishingItemHandBookDataMap.get(t.Id)?1:0;if(o!=s){const n=o-s;return r?n:-n}const n=t.HandBookId-e.HandBookId;return r?n:-n},this.VV_=(e,t,r)=>{t=t.HandBookId-e.HandBookId;return r?t:-t}}OnInitSortMap(){this.SortMap.set(1,this.sP_),this.SortMap.set(2,this.VV_)}}exports.FishingItem=FishingItem;
//# sourceMappingURL=FishingItemSort.js.map