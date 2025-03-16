
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PersonalEditTabItem=void 0;const UE=require("ue"),RedDotController_1=require("../../../RedDot/RedDotController"),GridProxyAbstract_1=require("../../Util/Grid/GridProxyAbstract"),LguiUtil_1=require("../../Util/LguiUtil");class PersonalEditTabItem extends GridProxyAbstract_1.GridProxyAbstract{constructor(){super(...arguments),this.l4e=void 0,this.Mnc=0,this.OnToggleCallBack=void 0,this.kqe=()=>{this.OnToggleCallBack&&this.OnToggleCallBack(this.GridIndex,this.Mnc)}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIExtendToggle],[1,UE.UIText],[2,UE.UIItem]],this.BtnBindInfo=[[0,this.kqe]]}Refresh(t,e,i){let s="";switch(this.Mnc=t){case 0:s="Personalize_HeadPhoto";break;case 1:s="Personalize_Card",this.l4e="PersonalCard";break;case 2:s="Personalize_Title",this.l4e="PersonalTitle"}LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(1),s),this.BindRedDot()}SetToggleCallBack(t){this.OnToggleCallBack=t}BindRedDot(){var t;this.l4e&&(t=this.GetItem(2),RedDotController_1.RedDotController.BindRedDot(this.l4e,t,void 0))}OnBeforeDestroy(){this.UnBindRedDot()}UnBindRedDot(){this.l4e&&(RedDotController_1.RedDotController.UnBindGivenUi(this.l4e,this.GetItem(2)),this.l4e=void 0)}SetToggleState(t){t=t?1:0;this.GetExtendToggle(0).SetToggleState(t)}OnSelected(t){this.SetToggleState(!0)}OnDeselected(t){this.SetToggleState(!1)}}exports.PersonalEditTabItem=PersonalEditTabItem;
//# sourceMappingURL=PersonalEditTabItem.js.map