
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MultiTeamRoleSelectView=exports.MultiTeamRoleSelectData=exports.MultiTeamRoleData=exports.MultiTeamRoleGridData=void 0;const UE=require("ue"),StringUtils_1=require("../../../Core/Utils/StringUtils"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),ConfigManager_1=require("../../Manager/ConfigManager"),ControllerHolder_1=require("../../Manager/ControllerHolder"),ModelManager_1=require("../../Manager/ModelManager"),UiViewBase_1=require("../../Ui/Base/UiViewBase"),PopupCaptionItem_1=require("../../Ui/Common/PopupCaptionItem"),UiModel_1=require("../../Ui/UiModel"),FilterSortEntrance_1=require("../Common/FilterSort/FilterSortEntrance"),LevelSequencePlayer_1=require("../Common/LevelSequencePlayer"),RoleDefine_1=require("../RoleUi/RoleDefine"),RoleTagMediumIconItem_1=require("../RoleUi/RoleTag/RoleTagMediumIconItem"),GenericLayout_1=require("../Util/Layout/GenericLayout"),LguiUtil_1=require("../Util/LguiUtil"),MultiTeamRoleGrid_1=require("./MultiTeamRoleGrid"),TeamRoleSkillItem_1=require("./TeamRoleSkillItem"),displaySkillTypes=[11,2,3,6];class MultiTeamRoleGridData{constructor(){this.FB_=void 0,this.NB_=!1,this.VB_=!1,this.Rjt=!1}GetRole(){return this.FB_}GetIsRecommend(){return this.NB_}GetIsHighlight(){return this.VB_}GetIsLock(){return this.Rjt}static Phrase(t,e,i,s=!1){var r=new MultiTeamRoleGridData;return r.FB_=t,r.NB_=e,r.VB_=i,r.Rjt=s,r}}exports.MultiTeamRoleGridData=MultiTeamRoleGridData;class MultiTeamRoleData{constructor(){this.O_l="",this.jB_=[],this.HB_=[],this.$B_=[]}GetTitle(){return this.O_l}GetSourceRoleList(){var t=[];for(const i of this.jB_){var e=i.GetRole();e&&t.push(e)}return t}SetSortedRoleList(t){if(t){this.$B_=t,this.HB_=[];for(const i of this.jB_){var e=i.GetRole();e&&this.$B_.includes(e)&&this.HB_.push(i)}this.HB_.sort((t,e)=>this.$B_.indexOf(t.GetRole())-this.$B_.indexOf(e.GetRole()))}else{this.HB_=[];for(const s of this.jB_)s.GetRole()&&this.HB_.push(s)}}GetShowMultiTeamRoleGridDataList(){return this.HB_}static Phrase(t,e){var i=new MultiTeamRoleData;return i.O_l=t,i.jB_=e,i.SetSortedRoleList(void 0),i}}exports.MultiTeamRoleData=MultiTeamRoleData;class MultiTeamRoleSelectData{constructor(){this.UseWay=void 0,this.BackCallBack=void 0,this.CanConfirmFunc=void 0,this.ConfirmCallBack=void 0,this.IsNeedRevive=void 0,this.IfCanSelectCheck=void 0,this.TeamLength=0,this.InitSelectRoleList=[],this.WB_=[]}GetSourceRoleList(){var t=[];for(const e of this.WB_)t.push(...e.GetSourceRoleList());return t}GetMultiTeamRoleDataList(){return this.WB_}static Phrase(t,e,i,s,r,h,o,a){var l=new MultiTeamRoleSelectData;return l.UseWay=t,l.TeamLength=e,l.InitSelectRoleList.push(...i),l.BackCallBack=s,l.CanConfirmFunc=r,l.ConfirmCallBack=h,l.IsNeedRevive=o,l.WB_.push(...a),l}}exports.MultiTeamRoleSelectData=MultiTeamRoleSelectData;class MultiTeamRoleSelectView extends UiViewBase_1.UiViewBase{constructor(){super(...arguments),this.CurrentSelectRoleId=0,this.OO_=0,this.QB_=[],this.Pe=void 0,this.CaptionItem=void 0,this.Klo=void 0,this.jlo=void 0,this.tFe=void 0,this.adi=void 0,this.Wlo=void 0,this.Dcl=0,this.SPe=void 0,this.KB_=[],this.s6_=!1,this.XB_=()=>{return new MultiTeamRoleGrid_1.MultiTeamRoleGrid},this.t1o=()=>{var t=new TeamRoleSkillItem_1.TeamRoleSkillItem;return t.BindOnSkillStateChange(this.i1o),t},this.Acl=t=>{1===this.Dcl?ModelManager_1.ModelManager.RoleModel.IsShowMultiSkillDesc=t:ModelManager_1.ModelManager.RoleModel.IsShowSkillResume=t;t=this.jlo.GetSelectedGridIndex();!this.Wlo||t<0||this.Wlo.length<t||this.Jlo(this.Wlo[t])},this.qAt=()=>{var t=this.Pe?.CanConfirmFunc;t&&!t(this.QB_)||(this.Pe?.ConfirmCallBack?.(this.QB_),this.CloseMe())},this.BackClick=()=>{this.Pe?.BackCallBack?.(),this.CloseMe()},this.i1o=(t,e)=>{1===t&&this.Wlo&&(t=this.Wlo.indexOf(e),this.jlo.SelectGridProxy(t),this.Jlo(e))},this.$lo=()=>{var t=this.OO_,e=t>=RoleDefine_1.ROBOT_DATA_MIN_ID?[t]:[];ControllerHolder_1.ControllerHolder.RoleController.OpenRoleMainView(0,t,e,void 0,t=>{t&&EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.CloseView,this.$Ge)})},this.$Ge=t=>{"RoleRootView"===t&&EventSystem_1.EventSystem.Has(EventDefine_1.EEventName.CloseView,this.$Ge)&&EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.CloseView,this.$Ge)},this.Hlo=(t,e,i)=>{var s=this.Pe.GetMultiTeamRoleDataList();this.KB_=t;for(const r of s)r.SetSortedRoleList(this.KB_);this.YB_(),this.zB_(),this.JB_(),this.ZB_()},this.ek_=t=>{var e=t.Data.GetRole().GetDataId(),t=this.QB_.indexOf(e);if(this.OO_=e,this.QB_.includes(e))this.QB_[t]=0,this.CurrentSelectRoleId=0<t?this.QB_[t-1]:0;else{for(let t=0;t<this.QB_.length;t++)if(0===this.QB_[t]){this.QB_[t]=e;break}this.CurrentSelectRoleId=e}this.JB_(),this.ZB_()},this.tk_=(t,e,i)=>{var t=t.GetRole().GetDataId(),s=this.Pe?.IfCanSelectCheck;return!(s&&!s(t,this.QB_)||!this.QB_.includes(t)&&this.QB_.filter(t=>0!==t).length>=this.Pe.TeamLength&&(ControllerHolder_1.ControllerHolder.ScrollingTipsController.ShowTipsByTextId("BossRushMaxLength"),1))}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIVerticalLayout],[3,UE.UIItem],[4,UE.UIText],[5,UE.UIMultiTemplateLayout],[6,UE.UIItem],[7,UE.UIHorizontalLayout],[8,UE.UIItem],[9,UE.UIItem],[10,UE.UIText],[11,UE.UIText],[12,UE.UIText],[13,UE.UIItem],[14,UE.UIButtonComponent],[15,UE.UIButtonComponent],[16,UE.UIText],[17,UE.UIItem],[18,UE.UIExtendToggle],[19,UE.UIText],[20,UE.UIItem],[21,UE.UIItem],[22,UE.UIItem]],this.BtnBindInfo=[[14,this.qAt],[15,this.$lo],[18,this.Acl]]}async OnBeforeStartAsync(){this.SPe=new LevelSequencePlayer_1.LevelSequencePlayer(this.RootItem),this.Pe=this.OpenParam;var t=[];for(const i of this.Pe.GetSourceRoleList())i.GetDataId()>RoleDefine_1.ROBOT_DATA_MIN_ID&&t.push(i.GetDataId());var e=[],e=(0<t.length&&e.push(ControllerHolder_1.ControllerHolder.RoleController.RobotRolePropRequest(t)),this.tFe=new GenericLayout_1.GenericLayout(this.GetVerticalLayout(1),this.XB_),await Promise.all(e),this.CaptionItem=new PopupCaptionItem_1.PopupCaptionItem(this.GetItem(0)),this.CaptionItem.SetCloseCallBack(()=>{this.BackClick()}),this.Klo=new GenericLayout_1.GenericLayout(this.GetMultiTemplateLayout(5),()=>new RoleTagMediumIconItem_1.RoleTagMediumIconItem),this.jlo=new GenericLayout_1.GenericLayout(this.GetHorizontalLayout(7),this.t1o),this.GetItem(13));this.adi=new FilterSortEntrance_1.FilterSortEntrance(e,this.Hlo),this.xcl();for(let t=0;t<this.Pe.TeamLength;t++)this.QB_.push(0),this.Pe.InitSelectRoleList.length>t&&(this.QB_[t]=this.Pe.InitSelectRoleList[t]);e=UiModel_1.UiModel.NormalStack.Peek();e&&e.AddChild(this)}xcl(){var t;this.Dcl=ModelManager_1.ModelManager.RoleModel.GetRoleSkillDescType(),1===this.Dcl?(t=ModelManager_1.ModelManager.RoleModel.IsShowMultiSkillDesc?1:0,this.GetExtendToggle(18).SetToggleState(t),LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(19),"MultiplayerSkillDescription_text")):(t=ModelManager_1.ModelManager.RoleModel.IsShowSkillResume?1:0,this.GetExtendToggle(18).SetToggleState(t),LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(19),"SkillBriefDescription_text"))}ZB_(){var t,e=this.Pe.GetMultiTeamRoleDataList(),i=new Array;for(const s of e)0!==s.GetShowMultiTeamRoleGridDataList().length&&((t=new MultiTeamRoleGrid_1.MultiTeamRoleGridContentData).Data=s,t.CurrentSelectedRoleList=this.QB_,t.OnToggleCallBack=this.ek_,t.CanExecuteChangeCallBack=this.tk_,t.ShowGridAnimation=this.s6_,i.push(t));this.tFe?.RefreshByData(i),this.s6_=!1}OnBeforeShow(){this.s6_=!0,this.adi?.UpdateData(this.Pe.UseWay,this.Pe.GetSourceRoleList())}JB_(){let t=0;0!==this.KB_.length&&(t=this.OO_),this.Zlo(t),this.U5t(t),this.ik_(t),this.rk_(t),this.ok_(t),this.nk_(t),this.jFi(t)}ik_(t){t=0!==t;this.GetItem(3).SetUIActive(t)}ok_(t){t=0!==t;this.GetButton(15).RootUIComp.SetUIActive(t)}rk_(t){t=0!==t;this.GetItem(9).SetUIActive(t)}YB_(){var t=0===this.KB_.length;this.GetItem(17).SetUIActive(t)}zB_(){var t=0<this.KB_.length;this.GetItem(20).SetUIActive(t)}nk_(t){t=0<this.KB_.length&&0===t;this.GetItem(21).SetUIActive(t)}jFi(t){t=0!==t;this.GetItem(22).SetUIActive(t)}U5t(t){"Switch"===this.SPe?.GetCurrentSequence()?this.SPe.ReplaySequenceByKey("Switch"):this.SPe?.PlayLevelSequenceByName("Switch"),this.tje(t),this.sk_(t),this.ak_(t)}tje(t){0!==t&&(t=ModelManager_1.ModelManager.RoleSkinModel.GetRoleSkinDataByRoleId(t),LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(4),t.GetName()))}sk_(t){if(0!==t){var i=ConfigManager_1.ConfigManager.RoleConfig.GetRoleConfig(t);if(i){i=ConfigManager_1.ConfigManager.RoleSkillConfig.GetSkillList(i.SkillId);if(i){let e=void 0;t=ModelManager_1.ModelManager.RoleModel.GetRoleDataById(t);if(t){const h=t.GetSkillData();if(h&&h.HasAnySkillUpgrade()){e=Array.from(i);for(let t=0;t<e.length;t++){var s=e[t].Id,s=h.GetSkillIdAfterUpgrade(s);0<s&&(e[t]=ConfigManager_1.ConfigManager.RoleSkillConfig.GetSkillConfigById(s))}}}e=e||i;const h=new Array;for(const o of displaySkillTypes)for(const a of e)if(a.SkillType===o){var r=new TeamRoleSkillItem_1.TeamRoleSkillData;r.SkillIcon=a.Icon,r.SkillType=o,r.SkillName=a.SkillName,r.SkillTagList=a.SkillTagList,r.SkillDesc=a.SkillDescribe,r.SkillDescNum=a.SkillDetailNum,r.MultiSkillDesc=a.MultiSkillDescribe,r.MultiSkillDescNum=a.MultiSkillDetailNum,r.SkillResume=a.SkillResume,r.SkillResumeNum=a.SkillResumeNum,h.push(r);break}h.length<=0||(this.Wlo=h,this.jlo.DeselectCurrentGridProxy(),this.jlo.RefreshByData(h,()=>{this.jlo.SelectGridProxy(0),this.i1o(1,h[0])}))}}}}ak_(t){var e;0!==t&&(t=ConfigManager_1.ConfigManager.RoleConfig.GetRoleConfig(t))&&(t=void 0!==(e=ModelManager_1.ModelManager.RoleModel.GetRoleTagByRoleInfo(t))&&0<e.length,this.GetMultiTemplateLayout(5).RootUIComp.SetUIActive(t),t)&&this.Klo?.RefreshByData(e)}Zlo(t){var e=this.GetText(16);!ModelManager_1.ModelManager.TowerModel.IsOpenFloorFormation()&&this.Pe?.IsNeedRevive?.(t)?(e.SetUIActive(!0),LguiUtil_1.LguiUtil.SetLocalText(e,"EditBattleTeamNeedRevive")):e.SetUIActive(!1)}Jlo(t){LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(10),t.SkillName);var e=this.GetText(12);1===this.Dcl?ModelManager_1.ModelManager.RoleModel.IsShowMultiSkillDesc&&t.MultiSkillDesc!==StringUtils_1.EMPTY_STRING?LguiUtil_1.LguiUtil.SetLocalTextNew(e,t.MultiSkillDesc,...t.MultiSkillDescNum):LguiUtil_1.LguiUtil.SetLocalTextNew(e,t.SkillDesc,...t.SkillDescNum):ModelManager_1.ModelManager.RoleModel.IsShowSkillResume&&t.SkillResume!==StringUtils_1.EMPTY_STRING?LguiUtil_1.LguiUtil.SetLocalTextNew(e,t.SkillResume,...t.SkillResumeNum):LguiUtil_1.LguiUtil.SetLocalTextNew(e,t.SkillDesc,...t.SkillDescNum),StringUtils_1.StringUtils.IsEmpty(t.SkillTypeText)?(e=ConfigManager_1.ConfigManager.RoleSkillConfig.GetSkillTypeNameLocalText(t.SkillType))&&this.GetText(11).SetText(e):LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(11),t.SkillTypeText)}}exports.MultiTeamRoleSelectView=MultiTeamRoleSelectView;
//# sourceMappingURL=MultiTeamRoleSelectView.js.map