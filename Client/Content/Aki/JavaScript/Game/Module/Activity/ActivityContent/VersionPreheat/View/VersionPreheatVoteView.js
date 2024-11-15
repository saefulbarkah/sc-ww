
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VersionPreheatVoteView=void 0;const UE=require("ue"),EventDefine_1=require("../../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../../Common/Event/EventSystem"),UiPanelBase_1=require("../../../../../Ui/Base/UiPanelBase"),UiViewBase_1=require("../../../../../Ui/Base/UiViewBase"),CommonItemSmallItemGrid_1=require("../../../../Common/ItemGrid/CommonItemSmallItemGrid"),GenericLayout_1=require("../../../../Util/Layout/GenericLayout"),LguiUtil_1=require("../../../../Util/LguiUtil");class VersionPreheatVoteView extends UiViewBase_1.UiViewBase{constructor(){super(...arguments),this.j1l=void 0,this.W1l=void 0,this.s4e=void 0,this.G1l=()=>{this.CloseMe()},this.k1l=()=>{this.CloseMe()},this.K1l=e=>{this.j1l.RefreshToggle(e),this.W1l.RefreshToggle(!e)},this.a4e=()=>new CommonItemSmallItemGrid_1.CommonItemSmallItemGrid}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIItem],[2,UE.UIText],[3,UE.UIText],[4,UE.UIItem],[5,UE.UIItem],[6,UE.UIHorizontalLayout],[7,UE.UIItem],[8,UE.UIButtonComponent]],this.BtnBindInfo=[[8,this.G1l]]}async OnBeforeStartAsync(){this.j1l=new VersionPreheatToggleItem,await this.j1l.CreateThenShowByActorAsync(this.GetItem(4).GetOwner()),this.W1l=new VersionPreheatToggleItem,await this.W1l.CreateThenShowByActorAsync(this.GetItem(5).GetOwner()),this.s4e=new GenericLayout_1.GenericLayout(this.GetHorizontalLayout(6),this.a4e),this.RefreshExternal(this.OpenParam)}OnAddEventListener(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.VersionPreheatRewardResponse,this.k1l),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.VersionPreheatOnClickVote,this.K1l)}OnRemoveEventListener(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.VersionPreheatRewardResponse,this.k1l),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.VersionPreheatOnClickVote,this.K1l)}RefreshExternal(e){LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(2),e.TitleTextId),LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(3),e.ContentTextId),this.GetItem(0)?.SetUIActive(0===e.CrestIndex),this.GetItem(1)?.SetUIActive(1===e.CrestIndex),this.j1l.RefreshExternal(e.LeftToggleData),this.W1l.RefreshExternal(e.RightToggleData),this.s4e.RefreshByData(e.ItemListData),void 0===e.IsLeftChosen?(this.j1l.RefreshToggleDirectly(!1),this.W1l.RefreshToggleDirectly(!1)):this.K1l(e.IsLeftChosen)}}exports.VersionPreheatVoteView=VersionPreheatVoteView;class VersionPreheatToggleItem extends UiPanelBase_1.UiPanelBase{constructor(){super(...arguments),this._9a=void 0,this.p9a=()=>{EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.VersionPreheatOnClickVote,this._9a.ClickPassData);var e=this._9a;e.ClickFunc(e.Id,e.ClickPassData)}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIExtendToggle],[1,UE.UIText]],this.BtnBindInfo=[[0,this.p9a]]}RefreshExternal(e){this._9a=e,LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(1),e.ContentTextId),this.GetExtendToggle(0).SetToggleState(0)}RefreshToggle(e){var t=this.GetExtendToggle(0);t.SetToggleState(e?1:0),t.IsSelfInteractive=!1}RefreshToggleDirectly(e){this.GetExtendToggle(0).SetToggleState(e?1:0)}}
//# sourceMappingURL=VersionPreheatVoteView.js.map