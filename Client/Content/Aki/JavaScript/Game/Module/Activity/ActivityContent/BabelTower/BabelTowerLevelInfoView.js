
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BabelTowerLevelInfoView=void 0;const UE=require("ue"),ConfigManager_1=require("../../../../Manager/ConfigManager"),ControllerHolder_1=require("../../../../Manager/ControllerHolder"),ModelManager_1=require("../../../../Manager/ModelManager"),UiViewBase_1=require("../../../../Ui/Base/UiViewBase"),PopupCaptionItem_1=require("../../../../Ui/Common/PopupCaptionItem"),UiManager_1=require("../../../../Ui/UiManager"),LoginDefine_1=require("../../../Login/Data/LoginDefine"),MultiTeamRoleSelectView_1=require("../../../RoleSelect/MultiTeamRoleSelectView"),LguiUtil_1=require("../../../Util/LguiUtil"),BabelTowerController_1=require("./BabelTowerController"),BabelTowerLevelBuffItem_1=require("./BabelTowerLevelBuffItem"),BabelTowerTeamItem_1=require("./BabelTowerTeamItem"),ROLE_TEAM_SIZE=3;class BabelTowerLevelInfoView extends UiViewBase_1.UiViewBase{constructor(){super(...arguments),this.Sic=void 0,this.lqe=void 0,this.Mic=void 0,this.Eic=void 0,this.d8t=void 0,this.nqe=()=>{UiManager_1.UiManager.IsViewShow("MultiTeamRoleSelectView")||UiManager_1.UiManager.OpenView("MultiTeamRoleSelectView",this.D5t())},this.X4t=i=>{for(let e=0;e<ROLE_TEAM_SIZE;e++)this.Sic.RoleList[e]=0;for(let e=0;e<i.length;e++){var t=i[e];this.Sic.RoleList[e]=t}this.XSn()},this._fc=e=>{var i=BabelTowerController_1.BabelTowerController.GetBabelTowerData().RoleLockData.get(this.Sic.BabelTowerLevelId)??[];for(const r of e)if(0!==r){var t=ConfigManager_1.ConfigManager.RoleConfig.GetRoleConfig(r).WeaponType;if(0<i.length&&!i?.includes(t))return ControllerHolder_1.ControllerHolder.ScrollingTipsController.ShowTipsByTextId("BabelTowerDebuffRoleSelectionTips"),!1}return!0},this.XSn=()=>{this.$Sn(),this.RefreshTeamRole()},this.L3e=()=>{BabelTowerController_1.BabelTowerController.BabelTowerStartRequest(this.Sic.InstanceId,this.Sic.RoleList,this.Sic.BabelTowerLevelId,this.Sic.BuffList)},this.dic=()=>{UiManager_1.UiManager.OpenView("InstanceDungeonMonsterPreView",this.Sic.InstanceId)},this.zal=()=>{var e=ConfigManager_1.ConfigManager.BabelTowerConfig.GetBabelTowerLevelConfig(this.Sic.BabelTowerLevelId),i=e.IsDifficult,t=e.OptionalBabelBuff,r=[],o=BabelTowerController_1.BabelTowerController.GetBabelTowerData();for(const l of t){let e=0;i&&(o.GetBuffIsLock(l)?e=1:0<(a=o.GetBuffIsUse(l))&&a!==this.Sic.BabelTowerLevelId&&(e=2));var a={Id:l,State:e};r.push(a)}var s=[];for(const n of this.Sic.BuffList)s.push(n);t={CurrentSelectBuffList:s,MaxSelectBuffCount:e.OptionalBabelBuffNum,AllBuffList:r,OnConfirmCallBack:this.Iic};UiManager_1.UiManager.OpenView("BabelTowerBuffSelectView",t)},this.Iic=e=>{this.Sic.BuffList=e,this.tst()}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIButtonComponent],[2,UE.UIArtText],[3,UE.UIItem],[4,UE.UIText],[5,UE.UIItem],[6,UE.UIItem],[7,UE.UIItem],[8,UE.UIItem],[9,UE.UIButtonComponent]],this.BtnBindInfo=[[9,this.L3e],[1,this.dic]]}async OnBeforeStartAsync(){this.lqe=new PopupCaptionItem_1.PopupCaptionItem,await this.lqe.CreateThenShowByActorAsync(this.GetItem(0).GetOwner()),this.lqe.SetCloseCallBack(()=>{this.CloseMe()}),this.d8t=new BabelTowerTeamItem_1.BabelTowerTeamItem,this.d8t.OnClickBtnCallBack=this.nqe,await this.d8t.CreateByActorAsync(this.GetItem(7).GetOwner()),this.d8t.SetActive(!0),this.Mic=new BabelTowerLevelBuffItem_1.BabelTowerLevelBuffItem,await this.Mic.CreateThenShowByActorAsync(this.GetItem(5).GetOwner()),this.Mic.OnClickBtnCallBack=this.zal,this.Eic=new BabelTowerLevelBuffItem_1.BabelTowerLevelBuffItem,await this.Eic.CreateThenShowByActorAsync(this.GetItem(6).GetOwner()),this.Eic.OnClickBtnCallBack=this.zal}OnStart(){this.Sic=this.OpenParam}OnBeforeShow(){this.Og()}D5t(){var e,i=this.Sic.InstanceId,t=ConfigManager_1.ConfigManager.InstanceDungeonConfig.GetConfig(i)?.FightFormationId,t=ConfigManager_1.ConfigManager.EditBattleTeamConfig.GetFightFormationConfig(t),r=ModelManager_1.ModelManager.RoleModel.GetRoleList(),o=[],a=BabelTowerController_1.BabelTowerController.GetBabelTowerData().RoleLockData.get(this.Sic.BabelTowerLevelId)??[];for(const f of r)0!==f.GetRoleId()&&(e=f.GetRoleConfig().WeaponType,e=MultiTeamRoleSelectView_1.MultiTeamRoleGridData.Phrase(f,!1,!1,0<a.length&&!a.includes(e)),o.push(e));var s=[],r=t?.TrialRole??[],t=ModelManager_1.ModelManager.PlayerInfoModel.GetPlayerGender(),l=[];for(const u of ConfigManager_1.ConfigManager.RoleConfig.GetMainRoleByGender(1===t?LoginDefine_1.ELoginSex.Boy:LoginDefine_1.ELoginSex.Girl))l.push(u.Id);for(const M of r){var n=ConfigManager_1.ConfigManager.RoleConfig.GetTrialRoleConfigByGroupId(M);ModelManager_1.ModelManager.RoleModel.IsMainRole(n.ParentId)&&!l.includes(n.ParentId)||(n=ModelManager_1.ModelManager.RoleModel.GetRoleDataById(n.Id))&&s.push(MultiTeamRoleSelectView_1.MultiTeamRoleGridData.Phrase(n,!1,!1))}var t=MultiTeamRoleSelectView_1.MultiTeamRoleData.Phrase("BossRushNormalRole",o),r=new Array,h=(0<s.length&&(h=MultiTeamRoleSelectView_1.MultiTeamRoleData.Phrase("BossRushTrailRole",s),r.push(h)),r.push(t),this.Sic.RoleList),_=[];for(const g of h)0!==g&&_.push(g);t=MultiTeamRoleSelectView_1.MultiTeamRoleSelectData.Phrase(5,3,_,void 0,this._fc,this.X4t,void 0,r);return ModelManager_1.ModelManager.EditBattleTeamModel.SetInstanceDungeonId(i),t}$Sn(){var e=this.Sic.InstanceId,e=ModelManager_1.ModelManager.BabelTowerModel.GetIfLevelTooLow(e,this.Sic.RoleList);this.GetItem(8).SetUIActive(e)}RefreshTeamRole(){var i=BabelTowerController_1.BabelTowerController.GetBabelTowerData().RoleLockData.get(this.Sic.BabelTowerLevelId)??[],t=this.Sic.RoleList;for(let e=0;e<t.length;e++){var r=t[e];0!==r&&(r=ConfigManager_1.ConfigManager.RoleConfig.GetRoleConfig(r).WeaponType,0<i.length&&!i?.includes(r))&&(t[e]=0)}var e=this.Sic.InstanceId;this.d8t.RefreshItem(t,e)}tst(){var e=this.Sic.BuffList,i=0<e?.length?e[0]:0,i=(this.Mic?.RefreshItem(this.Sic.BuffCount<1,i),1<e?.length?e[1]:0);this.Eic?.RefreshItem(this.Sic.BuffCount<2,i)}aqe(){this.GetArtText(2).SetText((this.Sic.StarNumber<10?"0":"")+this.Sic.StarNumber);var e,i=ConfigManager_1.ConfigManager.BabelTowerConfig.GetBabelTowerLevelConfig(this.Sic.BabelTowerLevelId),i=ModelManager_1.ModelManager.BabelTowerModel.CalculateDifficultyConfigByStarNum(i.ActivityId,this.Sic.StarNumber);i&&(e=UE.Color.FromHex(i.TextBgColor),this.GetItem(3).SetColor(e),LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(4),i.DifficultyTextKey))}Og(){this.XSn(),this.tst(),this.aqe()}}exports.BabelTowerLevelInfoView=BabelTowerLevelInfoView;
//# sourceMappingURL=BabelTowerLevelInfoView.js.map