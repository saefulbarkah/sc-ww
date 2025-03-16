
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SelectedFriendItem=void 0;const UE=require("ue"),ConfigManager_1=require("../../../Manager/ConfigManager"),ModelManager_1=require("../../../Manager/ModelManager"),PlayerTitleItem_1=require("../../Common/PlayerTitleItem"),FriendController_1=require("../../Friend/FriendController"),GridProxyAbstract_1=require("../../Util/Grid/GridProxyAbstract"),LguiUtil_1=require("../../Util/LguiUtil"),ChatDefine_1=require("../ChatDefine");class SelectedFriendItem extends GridProxyAbstract_1.GridProxyAbstract{constructor(){super(...arguments),this.pSt=void 0,this.gLt=void 0,this.oft=void 0,this.xyt=()=>{this.oft&&this.oft(this.pSt.PlayerId)}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIButtonComponent],[1,UE.UITexture],[2,UE.UIText],[3,UE.UIText],[4,UE.UIText],[5,UE.UIText],[6,UE.UIItem],[7,UE.UIItem]],this.BtnBindInfo=[[0,this.xyt]]}BindOnClicked(e){this.oft=e}async OnBeforeStartAsync(){this.gLt=new PlayerTitleItem_1.PlayerTitleItem,await this.gLt?.CreateThenShowByActorAsync(this.GetItem(7).GetOwner())}OnBeforeDestroy(){this.oft=void 0,this.gLt?.Destroy()}Refresh(e,i,t){this.pSt=ModelManager_1.ModelManager.FriendModel.GetFriendById(e),this.pSt&&(this.Zke(),this.P5e(),this.pmt(),this.wyt(),this.Byt(),this.unc())}Zke(){var e=this.pSt.PlayerHeadPhoto;const i=this.GetTexture(1);var t=ModelManager_1.ModelManager.PersonalModel.GetPlayerHeadData(e,!1);t?(i.SetUIActive(!1),this.SetTextureShowUntilLoaded(t.GetRoleHeadIcon(),i,()=>{i.SetUIActive(!0)})):(t=ConfigManager_1.ConfigManager.RoleConfig.GetRoleHeadIcon(e),this.SetRoleIcon(t,i,e))}P5e(){var e=this.GetText(2),i=(this.GetText(3)?.SetUIActive(!1),this.pSt.FriendRemark);i?(e.SetText(this.pSt.FriendRemark),e?.SetColor(ChatDefine_1.playerMarkNameColor)):(e.SetText(this.pSt.PlayerName),e?.SetColor(ChatDefine_1.playerRealNameColor))}pmt(){var e=this.pSt.PlayerLevel,i=this.GetText(5);LguiUtil_1.LguiUtil.SetLocalText(i,"LevelShow",e)}wyt(){var e=this.pSt.PlayerIsOnline,i=this.GetText(4),t=e?"00D67E":"D64600",t=UE.Color.FromHex(t);i.SetColor(t),e?LguiUtil_1.LguiUtil.SetLocalText(i,"FriendOnline"):0===this.pSt.PlayerLastOfflineTime?i.SetText(""):(t=this.pSt.GetOfflineDay(),e=FriendController_1.FriendController.GetOfflineTimeString(t),LguiUtil_1.LguiUtil.SetLocalText(i,e,t))}Byt(){this.GetItem(6).SetUIActive(!1)}unc(){this.gLt?.Refresh(this.pSt.PlayerTitleId,this.pSt.PlayerTitleStarLevel)}}exports.SelectedFriendItem=SelectedFriendItem;
//# sourceMappingURL=SelectedFriendItem.js.map