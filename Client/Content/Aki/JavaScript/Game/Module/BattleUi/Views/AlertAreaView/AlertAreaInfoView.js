
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AlertAreaInfoView=void 0;const UE=require("ue"),MathUtils_1=require("../../../../../Core/Utils/MathUtils"),EventDefine_1=require("../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../Common/Event/EventSystem"),ModelManager_1=require("../../../../Manager/ModelManager"),BattleVisibleChildView_1=require("../BattleChildView/BattleVisibleChildView"),BattleUiTweenAnimPlayer_1=require("../BattleUiTweenAnimPlayer"),AlertAreaUpdateMachine_1=require("./AlertAreaUpdateMachine"),PERCENT_TO_PROGRESS=.01,UI_BAR_MIN_PERCENT=42,UI_BAR_MAX_PERCENT=83;class AlertAreaInfoView extends BattleVisibleChildView_1.BattleVisibleChildView{constructor(){super(...arguments),this.L9e=0,this.EMl=0,this.IMl=void 0,this.Oml=void 0,this.TMl=(t,i)=>{var e;this.L9e===t&&(e=this.EMl,this.EMl=ModelManager_1.ModelManager.AlertAreaModel.GetAreaAlertValue(t),this.IMl?.ChangeTargetPercent(this.EMl),this.FDl(this.EMl),this.RVl(e,this.EMl),t=this.EMl-e,this.VDl(!0,t))}}Initialize(t){super.Initialize(t),this.InitChildType(4),this.SetVisible(1,!1),this.Ore()}Reset(){super.Reset(),this.kre()}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UISprite],[1,UE.UISprite],[2,UE.UIText],[3,UE.UIText],[4,UE.UIItem],[5,UE.UIItem],[6,UE.UIItem],[7,UE.UIItem]]}Ore(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnUpdateAreaAlertValue,this.TMl)}kre(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnUpdateAreaAlertValue,this.TMl)}Tick(t){this.IMl?.Update(t)&&this.OnMachineDataChange()}OnMachineDataChange(){var t,i,e;this.IMl&&(t=this.IMl.GetProgressDir(),i=this.IMl.GetBarCurPercent(),e=this.IMl.GetBarTargetPercent(),0<t?(this.jDl(i),this.WDl(e)):(this.jDl(e),this.WDl(i)))}StartShow(t){this.L9e=t,this.EMl=ModelManager_1.ModelManager.AlertAreaModel.GetAreaAlertValue(t),this.IMl=new AlertAreaUpdateMachine_1.AlertAreaUpdateMachine,this.Est(),this.SetVisible(1,!0),this.IMl.Init(this.EMl),this.jDl(this.EMl),this.WDl(this.EMl),this.FDl(this.EMl),this.HDl()}EndShow(t){void 0!==t&&t!==this.L9e||(this.SetVisible(1,!1),this.xVl(),this.L9e=0,this.EMl=0,this.IMl=void 0)}jDl(t){t=MathUtils_1.MathUtils.RangeClamp(t,0,100,UI_BAR_MIN_PERCENT,UI_BAR_MAX_PERCENT);this.GetSprite(1).SetFillAmount(t*PERCENT_TO_PROGRESS)}WDl(t){t=MathUtils_1.MathUtils.RangeClamp(t,0,100,UI_BAR_MIN_PERCENT,UI_BAR_MAX_PERCENT);this.GetSprite(0).SetFillAmount(t*PERCENT_TO_PROGRESS)}FDl(t){t=MathUtils_1.MathUtils.Clamp(Math.round(t),0,100);this.GetText(2).SetText(""+t)}RVl(t,i){var e=100;e<=i?e<=t||(80<=t&&this.Oml?.StopTweenAnim(5),this.Oml?.PlayTweenAnim(6)):80<=i?e<=t?(this.Oml?.StopTweenAnim(6),this.Oml?.PlayTweenAnim(5)):80<=t||this.Oml?.PlayTweenAnim(5):e<=t?(this.Oml?.StopTweenAnim(6),this.Oml?.PlayTweenAnim(4)):80<=t&&(this.Oml?.StopTweenAnim(5),this.Oml?.PlayTweenAnim(4))}VDl(t,i=0){t&&(t=MathUtils_1.MathUtils.Clamp(Math.abs(Math.round(i)),0,100),this.GetText(3).SetText((0<=i?"+":"-")+t+"%")),this.GetText(3).SetUIActive(!0),this.Oml?.PlayTweenAnim(7)}HDl(){this.Oml?.StopTweenAnim(7),this.GetText(3).SetUIActive(!1)}Est(){this.Oml=new BattleUiTweenAnimPlayer_1.BattleUiTweenAnimPlayer,this.Oml.InitTweenAnim(4,this.GetItem(4)),this.Oml.InitTweenAnim(5,this.GetItem(5)),this.Oml.InitTweenAnim(6,this.GetItem(6)),this.Oml.InitTweenAnim(7,this.GetItem(7))}xVl(){this.Oml?.StopTweenAnim(5),this.Oml?.StopTweenAnim(6),this.Oml?.StopTweenAnim(7),this.Oml?.StopTweenAnim(4),this.Oml?.Clear(),this.Oml=void 0}}exports.AlertAreaInfoView=AlertAreaInfoView;
//# sourceMappingURL=AlertAreaInfoView.js.map