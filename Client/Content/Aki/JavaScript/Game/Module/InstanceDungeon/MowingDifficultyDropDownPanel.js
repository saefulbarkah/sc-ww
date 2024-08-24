
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MowingDifficultyDropDownPanel=void 0;const UE=require("ue"),Log_1=require("../../../Core/Common/Log"),KillMonstersScoresByInstanceID_1=require("../../../Core/Define/ConfigQuery/KillMonstersScoresByInstanceID"),MultiTextLang_1=require("../../../Core/Define/ConfigQuery/MultiTextLang"),TakeWeedsDifficultyById_1=require("../../../Core/Define/ConfigQuery/TakeWeedsDifficultyById"),StringUtils_1=require("../../../Core/Utils/StringUtils"),UiPanelBase_1=require("../../Ui/Base/UiPanelBase"),ActivityMowingController_1=require("../Activity/ActivityContent/Mowing/ActivityMowingController"),CommonDropDown_1=require("../Common/DropDown/CommonDropDown"),DropDownItemBase_1=require("../Common/DropDown/Item/DropDownItemBase"),TitleItemBase_1=require("../Common/DropDown/Item/TitleItemBase"),LguiUtil_1=require("../Util/LguiUtil");class DropDownItem extends DropDownItemBase_1.DropDownItemBase{OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIExtendToggle],[1,UE.UIText]]}OnShowDropDownItemBase(t){var e=MultiTextLang_1.configMultiTextLang.GetLocalTextNew(t.Desc)??"",t=StringUtils_1.StringUtils.Format(MultiTextLang_1.configMultiTextLang.GetLocalTextNew("MowingPointMultiply")??"",(t.Magnification/100).toString());this.GetText(1).SetText(e+"•"+t)}GetDropDownToggle(){return this.GetExtendToggle(0)}}class DropDownTitle extends TitleItemBase_1.TitleItemBase{OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIText]]}ShowTemp(t,e){var i=MultiTextLang_1.configMultiTextLang.GetLocalTextNew(t.Desc),t=StringUtils_1.StringUtils.Format(MultiTextLang_1.configMultiTextLang.GetLocalTextNew("MowingPointMultiply")??"",(t.Magnification/100).toString());this.GetText(0).SetText(i+"•"+t)}}class MowingDifficultyDropDownPanel extends UiPanelBase_1.UiPanelBase{constructor(){super(...arguments),this.u_i=[],this.c_i=void 0,this.NUe=void 0,this.m_i=void 0,this.d_i=(t,e)=>new DropDownItem(t),this.C_i=t=>new DropDownTitle(t),this.g_i=t=>t,this.f_i=(t,e)=>{var i,o=ActivityMowingController_1.ActivityMowingController.GetMowingActivityData();o?this.m_i?(i=TakeWeedsDifficultyById_1.configTakeWeedsDifficultyById.GetConfig(e.Id).RecommendedLevel.toString(),LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(3),"RecommendLevel",i),ActivityMowingController_1.ActivityMowingController.RequestSetDifficultyAll(o.Id,e.Id)):Log_1.Log.CheckError()&&Log_1.Log.Error("Activity",38,"当前没有割草活动副本数据"):Log_1.Log.CheckError()&&Log_1.Log.Error("Activity",38,"当前没有割草活动数据")}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIText],[1,UE.UIItem],[2,UE.UIItem],[3,UE.UIText]],this.BtnBindInfo=[]}async OnBeforeStartAsync(){await this.p_i()}async p_i(){this.c_i=new CommonDropDown_1.CommonDropDown(this.GetItem(2),this.d_i,this.C_i),this.c_i.SetOnSelectCall(this.f_i),await this.c_i.Init()}OnStart(){this.GetItem(1).SetUIActive(!1),this.AddChild(this.c_i)}v_i(){var t=KillMonstersScoresByInstanceID_1.configKillMonstersScoresByInstanceID.GetConfig(this.NUe);if(!t||0===t.DifficultyOptions.length)return this.u_i;var e=[];for(const i of t.DifficultyOptions)e.push(TakeWeedsDifficultyById_1.configTakeWeedsDifficultyById.GetConfig(i));return e}RefreshByInstanceId(t){this.NUe=t,this.m_i=KillMonstersScoresByInstanceID_1.configKillMonstersScoresByInstanceID.GetConfig(this.NUe);t=ActivityMowingController_1.ActivityMowingController.GetMowingActivityData();t?this.c_i?.InitScroll(this.v_i(),this.g_i,t.GetLevelDiffIndex(this.NUe)):Log_1.Log.CheckError()&&Log_1.Log.Error("Activity",38,"当前没有割草活动数据")}}exports.MowingDifficultyDropDownPanel=MowingDifficultyDropDownPanel;
//# sourceMappingURL=MowingDifficultyDropDownPanel.js.map