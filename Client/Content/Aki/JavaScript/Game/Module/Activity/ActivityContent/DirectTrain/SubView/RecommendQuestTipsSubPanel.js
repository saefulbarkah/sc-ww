
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RecommendQuestTipsSubPanel=void 0;const UE=require("ue"),UiPanelBase_1=require("../../../../../Ui/Base/UiPanelBase"),LguiUtil_1=require("../../../../Util/LguiUtil");class RecommendQuestTipsSubPanel extends UiPanelBase_1.UiPanelBase{constructor(){super(...arguments),this.axl=void 0,this.lxl=()=>{this.axl?.()}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIText],[1,UE.UIButtonComponent]],this.BtnBindInfo=[[1,this.lxl]]}SetTipsTxtByTextId(e,...i){LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(0),e,i)}SetTipsTxt(e){this.GetText(0).SetText(e)}BindClickBtnTipsCallBack(e){this.axl=e}}exports.RecommendQuestTipsSubPanel=RecommendQuestTipsSubPanel;
//# sourceMappingURL=RecommendQuestTipsSubPanel.js.map