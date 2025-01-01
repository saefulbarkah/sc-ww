
"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ShopController=void 0;const Log_1=require("../../../Core/Common/Log"),Protocol_1=require("../../../Core/Define/Net/Protocol"),Net_1=require("../../../Core/Net/Net"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),GlobalData_1=require("../../GlobalData"),ConfigManager_1=require("../../Manager/ConfigManager"),ControllerHolder_1=require("../../Manager/ControllerHolder"),ModelManager_1=require("../../Manager/ModelManager"),UiControllerBase_1=require("../../Ui/Base/UiControllerBase"),UiManager_1=require("../../Ui/UiManager"),ScrollingTipsController_1=require("../ScrollingTips/ScrollingTipsController");class ShopController extends UiControllerBase_1.UiControllerBase{static OnAddEvents(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.CrossDay,this._Mo)}static OnRemoveEvents(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.CrossDay,this._Mo)}static OnRegisterNetEvent(){Net_1.Net.Register(24484,e=>{Log_1.Log.CheckInfo()&&Log_1.Log.Info("Shop",18,"Receive ShopInfoNotify"),ModelManager_1.ModelManager.ShopModel.VersionId=e.ejn,ModelManager_1.ModelManager.ShopModel.UpdateShopListData(e.tGs)}),Net_1.Net.Register(20470,e=>{Log_1.Log.CheckInfo()&&Log_1.Log.Info("Shop",18,"Receive ShopUnlockNotify",["unlockList",e.ABs]),this.OnShopUnlockNotify(e)})}static OnUnRegisterNetEvent(){Net_1.Net.UnRegister(24484),Net_1.Net.UnRegister(20470)}static OpenShop(e,o){if(ModelManager_1.ModelManager.ShopModel.IsOpen(e)){if(!UiManager_1.UiManager.IsViewShow("ShopView"))return UiManager_1.UiManager.OpenView("ShopView",e,o),!0}else GlobalData_1.GlobalData.World&&(o=ConfigManager_1.ConfigManager.ShopConfig.GetShopName(ModelManager_1.ModelManager.ShopModel.GetShopConfig(e).ShopName))&&ScrollingTipsController_1.ScrollingTipsController.ShowTipsById("ShopNotOpenTip",o);return!1}static SendShopBuyRequest(o,t,e,r,n){e=Protocol_1.Aki.Protocol.Vms.create({ejn:ModelManager_1.ModelManager.ShopModel.VersionId,tjn:o,s5n:t,ijn:e,D8n:r,AVn:ModelManager_1.ModelManager.ShopModel.CurrentInteractCreatureDataLongId??0});Net_1.Net.Call(28510,e,e=>{e&&(e.Q4n===Protocol_1.Aki.Protocol.Q4n.KRs?(ModelManager_1.ModelManager.ShopModel.UpdateItemData(e),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Shop",27,"购买物品成功",["id",e.s5n],["buyCount",e.X7n],["response",e]),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.BoughtItem,o,t),n&&n()):(e=ConfigManager_1.ConfigManager.ErrorCodeConfig.GetTextByErrorId(e.Q4n),ScrollingTipsController_1.ScrollingTipsController.ShowTipsByText(e),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.BoughtItem,0,0)))})}static async SendShopInfoRequest(e){e=Protocol_1.Aki.Protocol.kms.create({ejn:e}),e=await Net_1.Net.CallAsync(16940,e);return!!e&&(e.Q4n===Protocol_1.Aki.Protocol.Q4n.KRs?(ModelManager_1.ModelManager.ShopModel.VersionId=e.ejn,ModelManager_1.ModelManager.ShopModel.UpdateShopListData(e.tGs),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnShopInfoResponded)):ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.Q4n,25111),!0)}static async SendShopUpdateRequestAsync(e){e=Protocol_1.Aki.Protocol.Hms.create({tjn:e}),e=await Net_1.Net.CallAsync(19474,e);e&&(e.Q4n===Protocol_1.Aki.Protocol.Q4n.KRs?ModelManager_1.ModelManager.ShopModel.UpdateShopData(e.YVn):ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.Q4n,19104))}static SendShopUpdateRequest(e){e=Protocol_1.Aki.Protocol.Hms.create({tjn:e});Net_1.Net.Call(19474,e,e=>{e&&(e.Q4n===Protocol_1.Aki.Protocol.Q4n.KRs?ModelManager_1.ModelManager.ShopModel.UpdateShopData(e.YVn):ControllerHolder_1.ControllerHolder.ErrorCodeController.OpenErrorCodeTipView(e.Q4n,19104))})}static OnShopUnlockNotify(e){for(const t of e.ABs){var o;ModelManager_1.ModelManager.ShopModel.GetShopInfo(t.tjn)&&(o=ModelManager_1.ModelManager.ShopModel.GetShopItem(t.tjn,t.s5n))&&(o.Z6n=!1,EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnGoodUnlock),Log_1.Log.CheckInfo()&&Log_1.Log.Info("Shop",27,"新商品解锁",["id",t.s5n],["buyCount",t.tjn]),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.ShopUpdate,t.tjn))}}}exports.ShopController=ShopController,(_a=ShopController)._Mo=()=>{_a.SendShopInfoRequest(ModelManager_1.ModelManager.ShopModel.VersionId).then(e=>{e&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.ShopUpdate,ModelManager_1.ModelManager.ShopModel.OpenItemInfo?.ShopId)})};
//# sourceMappingURL=ShopController.js.map