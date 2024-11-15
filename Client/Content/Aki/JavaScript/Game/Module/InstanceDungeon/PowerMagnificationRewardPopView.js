
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PowerMagnificationRewardPopView=void 0;const UE=require("ue"),Log_1=require("../../../Core/Common/Log"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),ConfigManager_1=require("../../Manager/ConfigManager"),ModelManager_1=require("../../Manager/ModelManager"),UiViewBase_1=require("../../Ui/Base/UiViewBase"),HelpController_1=require("../Help/HelpController"),ItemDefines_1=require("../Item/Data/ItemDefines"),PowerController_1=require("../Power/PowerController"),PowerCurrencyItem_1=require("../Power/SubViews/PowerCurrencyItem"),ScrollingTipsController_1=require("../ScrollingTips/ScrollingTipsController"),LguiUtil_1=require("../Util/LguiUtil"),PowerRewardButtonItem_1=require("./PowerRewardButtonItem"),POWER_MAGIFICATION_REWARD_HELPID=128;class PowerMagnificationRewardPopView extends UiViewBase_1.UiViewBase{constructor(){super(...arguments),this.Pe=void 0,this.NXs=void 0,this.fea=void 0,this.Ial=void 0,this.Tal=void 0,this.OnPowerChange=()=>{this.Ial?.RefreshPowerState(),this.Tal?.RefreshPowerState()},this.OnHelpButtonClick=()=>{HelpController_1.HelpController.OpenHelpById(POWER_MAGIFICATION_REWARD_HELPID)}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIText],[1,UE.UIText],[2,UE.UIItem],[3,UE.UIItem],[4,UE.UIButtonComponent]],this.BtnBindInfo=[[4,this.OnHelpButtonClick]]}async OnBeforeStartAsync(){var e;this.Pe=this.OpenParam,this.Pe?(LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(0),"Magnification_Title"),LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(1),"Magnification_Desc"),this.Ial=new PowerRewardButtonItem_1.PowerRewardButtonItem,this.Tal=new PowerRewardButtonItem_1.PowerRewardButtonItem,await Promise.all([this.Lal(),this.Ial.CreateThenShowByActorAsync(this.GetItem(2).GetOwner()),this.Tal.CreateThenShowByActorAsync(this.GetItem(3).GetOwner())]),e=this.Pe.SinglePowerCost,this.Ial.Update({PowerNum:e,RewardTextId:"Magnification_normol",RewardCallBack:()=>{this.Ual(1)}}),e*=2,this.Tal.Update({PowerNum:e,RewardTextId:"Magnification_double",RewardCallBack:()=>{this.Ual(2)}})):Log_1.Log.CheckError()&&Log_1.Log.Error("InstanceDungeon",43,"PowerMagnificationRewardPopView传入参数为空")}OnAddEventListener(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnPowerChanged,this.OnPowerChange)}OnRemoveEventListener(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnPowerChanged,this.OnPowerChange)}OnBeforeShow(){this.fea?.GetRootItem().SetUIParent(this.ChildPopView?.PopItem?.GetCostParent()),this.NXs?.GetRootItem().SetUIParent(this.ChildPopView?.PopItem?.GetCostParent()),this.NXs.ShowWithoutText(ItemDefines_1.EItemId.Power),this.NXs?.SetButtonFunction(()=>{PowerController_1.PowerController.OpenPowerView()})}async Lal(){this.fea=new PowerCurrencyItem_1.PowerCurrencyItem,this.NXs=new PowerCurrencyItem_1.PowerCurrencyItem,await Promise.all([this.fea.CreateThenShowByResourceIdAsync("UIItem_CommonCurrencyItem"),this.NXs.CreateThenShowByResourceIdAsync("UIItem_CommonCurrencyItem")]),this.fea.ShowWithoutText(ItemDefines_1.EItemId.OverPower),this.fea.RefreshAddButtonActive(),this.fea.SetActive(ModelManager_1.ModelManager.FunctionModel.IsOpen(10066))}Ual(e){var i;return!!this.Pe&&(i=e*this.Pe.SinglePowerCost,ModelManager_1.ModelManager.PowerModel.IsPowerEnough(i)?(this.Pe.RewardCallBack(e),this.CloseMe(),!0):(e=ConfigManager_1.ConfigManager.TextConfig.GetTextById("ReceiveLevelPlayPowerNotEnough"),ScrollingTipsController_1.ScrollingTipsController.ShowTipsByText(e),PowerController_1.PowerController.OpenPowerView(2,ModelManager_1.ModelManager.PowerModel.GetCurrentNeedPower(i)),!1))}OnBeforeDestroy(){this.Pe?.NeedResetLevelPlayModelRewardFlag&&(ModelManager_1.ModelManager.LevelPlayModel.IsInReceiveReward=!1)}}exports.PowerMagnificationRewardPopView=PowerMagnificationRewardPopView;
//# sourceMappingURL=PowerMagnificationRewardPopView.js.map