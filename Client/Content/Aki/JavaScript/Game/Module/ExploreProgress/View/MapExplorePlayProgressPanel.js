
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MapExplorePlayProgressPanel=void 0;const UE=require("ue"),UiPanelBase_1=require("../../../Ui/Base/UiPanelBase"),GenericLayout_1=require("../../Util/Layout/GenericLayout"),MapExplorePlayProgressItem_1=require("./MapExplorePlayProgressItem");class MapExplorePlayProgressPanel extends UiPanelBase_1.UiPanelBase{constructor(){super(...arguments),this.fOl=void 0}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIHorizontalLayout],[1,UE.UIItem]]}async Init(e){await this.CreateThenShowByActorAsync(e.GetOwner())}OnBeforeShow(){this.fOl=new GenericLayout_1.GenericLayout(this.GetHorizontalLayout(0),()=>new MapExplorePlayProgressItem_1.MapExplorePlayProgressItem)}UpdateData(e,r){this.fOl?.RefreshByData(e,()=>{r?.()})}CheckPlayStateChanged(){this.fOl?.GetLayoutItemList().forEach(e=>{e.CheckPlayStateChanged()})}}exports.MapExplorePlayProgressPanel=MapExplorePlayProgressPanel;
//# sourceMappingURL=MapExplorePlayProgressPanel.js.map