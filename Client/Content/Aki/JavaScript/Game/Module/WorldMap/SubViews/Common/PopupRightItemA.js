
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PopupRightItemA=void 0;const UE=require("ue"),PopupTypeRightItem_1=require("../../../../Ui/Common/PopupTypeRightItem"),PopupCaption_1=require("./PopupCaption");class PopupRightItemA extends PopupTypeRightItem_1.PopupTypeRightItem{constructor(){super(...arguments),this.EJa=void 0}OnRegisterComponent(){this.ComponentRegisterInfos=[[1,UE.UIItem],[0,UE.UIButtonComponent],[2,UE.UIItem]],this.BtnBindInfo=[[0,this.OnClickCloseBtn]]}async OnBeforeStartAsync(){this.EJa=new PopupCaption_1.PopupCaption,this.EJa.OnCloseCall=this.OnClickCloseBtn,await this.EJa.CreateByActorAsync(this.GetItem(2).GetOwner()),this.AddChild(this.EJa)}SetTitleIcon(t){this.EJa.SetTitleIcon(t)}SetTitleLocalTxt(t){this.EJa.SetTitleLocalTxt(t)}}exports.PopupRightItemA=PopupRightItemA;
//# sourceMappingURL=PopupRightItemA.js.map