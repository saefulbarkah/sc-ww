
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SkillButtonCustomHandleHackFollowAttach=exports.SkillButtonCustomHandleKeLaiTaUltimate=exports.SkillButtonCustomHandleBase=void 0;class SkillButtonCustomHandleBase{constructor(){this.SkillButtonData=void 0,this.TagIds=[],this.BuffIds=[],this.ForceEnable=!1,this.SkillCdModifyMark=!1,this.EnableModifyMark=!1}Init(t){this.SkillButtonData=t,this.OnInit()}OnInit(){}Refresh(){}RefreshByTagChanged(){}ClearModifyMark(){this.SkillCdModifyMark=!1,this.EnableModifyMark=!1}GetCustomRemainingCoolDown(){return 0}}class SkillButtonCustomHandleKeLaiTaUltimate extends(exports.SkillButtonCustomHandleBase=SkillButtonCustomHandleBase){OnInit(){this.SkillButtonData&&(this.SkillButtonData.HideCoolDownTextCustom=!0)}Refresh(){var t,s;!this.SkillButtonData||this.TagIds.length<2||this.BuffIds.length<1||(s=this.SkillButtonData.GameplayTagComponent,t=this.SkillButtonData.BuffComponent,s&&t&&(this.SkillButtonData.IsLimitCountCustom=!1,this.SkillButtonData.RemainingCountCustom=0,s.HasTag(this.TagIds[0])?(this.ForceEnable=!0,this.SkillButtonData.RemainingCountCustom=s.GetTagCount(this.TagIds[1]),0<this.SkillButtonData.RemainingCountCustom&&(this.SkillButtonData.IsLimitCountCustom=!0),s=t.GetBuffById(this.BuffIds[0]),this.SkillButtonData.TotalCoolDownCustom=s?.Duration??0):(this.SkillButtonData.TotalCoolDownCustom=0,this.ForceEnable&&(this.ForceEnable=!1,this.EnableModifyMark=!0))))}GetCustomRemainingCoolDown(){var t;return this.SkillButtonData&&!(this.SkillButtonData.TotalCoolDownCustom<=0)&&(t=this.SkillButtonData.BuffComponent)&&(t=t.GetBuffById(this.BuffIds[0]))?t.GetRemainDuration():0}RefreshByTagChanged(){this.Refresh(),this.SkillCdModifyMark=!0}}exports.SkillButtonCustomHandleKeLaiTaUltimate=SkillButtonCustomHandleKeLaiTaUltimate;class SkillButtonCustomHandleHackFollowAttach extends SkillButtonCustomHandleBase{constructor(){super(...arguments),this.P2_=void 0}OnInit(){this.SkillButtonData&&(this.P2_=this.SkillButtonData.GetEntityHandle()?.Entity?.GetComponent(274))}Refresh(){var t;this.SkillButtonData&&this.P2_&&(this.TagIds.length<1||(t=this.SkillButtonData.GameplayTagComponent,this.SkillButtonData.IsLimitCountCustom=!0,this.SkillButtonData.RemainingCountCustom=t?.GetTagCount(this.TagIds[0])??0))}RefreshByTagChanged(){this.Refresh(),this.SkillCdModifyMark=!0}}exports.SkillButtonCustomHandleHackFollowAttach=SkillButtonCustomHandleHackFollowAttach;
//# sourceMappingURL=SkillButtonCustomHandle.js.map