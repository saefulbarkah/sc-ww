
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MarkItemSelectHandle=void 0;const MarkSelectComponent_1=require("../Components/MarkSelectComponent"),MarkItemComponentHandle_1=require("./MarkItemComponentHandle");class MarkItemSelectHandle extends MarkItemComponentHandle_1.MarkItemComponentHandle{constructor(){super(...arguments),this.ComponentInternal=void 0}GetComponent(){return void 0===this.ComponentInternal&&(this.ComponentInternal=new MarkSelectComponent_1.MarkSelectComponent,this.ComponentInternal.CreateByPoolResourceIdAsync("UiItem_MarkChoose_Prefab",this.Context.MarkComponentContainer).then(()=>{this.ApplyModified()})),this.ComponentInternal}DestroyComponent(){void 0!==this.ComponentInternal&&(this.ComponentInternal.RecycleToPool(),this.ComponentInternal=void 0)}OnSetVisible(e){this.Context.MarkItemEntity.ViewLifeCircle.SetChildViewVisibility(5,e)}OnApplyModified(){var e,t,o=this.Context.MarkItemEntity.ViewLifeCircle;o.IsChildViewStateDirty(5)&&((e=this.GetComponent()).IsStart||e.IsShowOrShowing||e.IsHideOrHiding)&&(t=o.IsChildViewVisible(5),o.SetChildViewVisibleClean(5),e.SetActive(t))}OnDispose(){this.DestroyComponent(),super.OnDispose()}}exports.MarkItemSelectHandle=MarkItemSelectHandle;
//# sourceMappingURL=MarkItemSelectHandle.js.map