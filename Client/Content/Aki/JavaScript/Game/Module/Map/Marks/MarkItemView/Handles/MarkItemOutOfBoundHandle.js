
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MarkItemOutOfBoundHandle=void 0;const Vector2D_1=require("../../../../../../Core/Utils/Math/Vector2D"),MarkOutOfBoundComponent_1=require("../Components/MarkOutOfBoundComponent"),MarkItemComponentHandle_1=require("./MarkItemComponentHandle");class MarkItemOutOfBoundHandle extends MarkItemComponentHandle_1.MarkItemComponentHandle{constructor(){super(...arguments),this.ComponentInternal=void 0}GetComponent(){return void 0===this.ComponentInternal&&(this.ComponentInternal=new MarkOutOfBoundComponent_1.MarkOutOfBoundComponent,this.ComponentInternal.CreateByPoolResourceIdAsync("UiItem_MarkOut_Prefab",this.Context.MarkComponentContainer).then(()=>{this.ApplyModified()})),this.ComponentInternal}DestroyComponent(){void 0!==this.ComponentInternal&&(this.ComponentInternal.RecycleToPool(),this.ComponentInternal=void 0)}OnSetVisible(t){this.Context.MarkItemEntity.ViewLifeCircle.SetChildViewVisibility(4,t)}OnApplyModified(){this.ApplyDirectionModified();var t,e,o=this.Context.MarkItemEntity.ViewLifeCircle;o.IsChildViewStateDirty(4)&&((t=this.GetComponent()).IsStart||t.IsShowOrShowing||t.IsHideOrHiding)&&(e=o.IsChildViewVisible(4),o.SetChildViewVisibleClean(4),t.SetActive(e))}ApplyDirectionModified(){var t,e,o,i=this.Context.MarkItemEntity.Resource;i.IsOutOfBoundDirectionDirty&&((t=this.GetComponent()).IsStart||t.IsShowOrShowing||t.IsHideOrHiding)&&(e=this.Context.MarkItem.UiPosition,e=Vector2D_1.Vector2D.Create(e.X,e.Y),o=i.OutOfBoundDirection,e.SubtractionEqual(o),t.SetOutOfBoundDirection(e),i.SetOutOfBoundDirectionClean())}OnDispose(){this.DestroyComponent(),super.OnDispose()}}exports.MarkItemOutOfBoundHandle=MarkItemOutOfBoundHandle;
//# sourceMappingURL=MarkItemOutOfBoundHandle.js.map