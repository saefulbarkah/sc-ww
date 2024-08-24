
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GachaScanView=exports.SCENE_ROLE_TAG=exports.SCENE_CAMERA_TAG=void 0;const UE=require("ue"),ActorSystem_1=require("../../../../Core/Actor/ActorSystem"),AudioSystem_1=require("../../../../Core/Audio/AudioSystem"),Log_1=require("../../../../Core/Common/Log"),CommonParamById_1=require("../../../../Core/Define/ConfigCommon/CommonParamById"),ShareRewardById_1=require("../../../../Core/Define/ConfigQuery/ShareRewardById"),ResourceSystem_1=require("../../../../Core/Resource/ResourceSystem"),TimerSystem_1=require("../../../../Core/Timer/TimerSystem"),DataTableUtil_1=require("../../../../Core/Utils/DataTableUtil"),FNameUtil_1=require("../../../../Core/Utils/FNameUtil"),Rotator_1=require("../../../../Core/Utils/Math/Rotator"),Transform_1=require("../../../../Core/Utils/Math/Transform"),Vector_1=require("../../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../../Core/Utils/MathUtils"),CameraController_1=require("../../../Camera/CameraController"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),GameQualitySettingsManager_1=require("../../../GameQualitySettings/GameQualitySettingsManager"),GlobalData_1=require("../../../GlobalData"),ConfigManager_1=require("../../../Manager/ConfigManager"),ControllerHolder_1=require("../../../Manager/ControllerHolder"),ModelManager_1=require("../../../Manager/ModelManager"),RenderModuleController_1=require("../../../Render/Manager/RenderModuleController"),UiManager_1=require("../../../Ui/UiManager"),ColorUtils_1=require("../../../Utils/ColorUtils"),BlackScreenController_1=require("../../BlackScreen/BlackScreenController"),ChannelController_1=require("../../Channel/ChannelController"),LevelSequencePlayer_1=require("../../Common/LevelSequencePlayer"),SmallItemGrid_1=require("../../Common/SmallItemGrid/SmallItemGrid"),ShareRewardInfo_1=require("../../Photograph/View/ShareRewardInfo"),UiSceneManager_1=require("../../UiComponent/UiSceneManager"),UiModelUtil_1=require("../../UiModel/UiModelUtil"),SimpleGenericLayout_1=require("../../Util/Layout/SimpleGenericLayout"),LguiUtil_1=require("../../Util/LguiUtil"),GachaDefine_1=require("../GachaDefine"),GachaSceneView_1=require("../GachaUiSceneManager/GachaSceneView");exports.SCENE_CAMERA_TAG=new UE.FName("SequenceCamera"),exports.SCENE_ROLE_TAG=new UE.FName("Role");class GachaScanView extends GachaSceneView_1.GachaSceneView{constructor(){super(...arguments),this.GachaResult=void 0,this.CurIndex=0,this.LastIndex=-1,this.xWt=void 0,this.JWt=void 0,this.SPe=void 0,this.zWt=void 0,this.ZWt=void 0,this.b2t=void 0,this.eKt=void 0,this.tKt=void 0,this.iKt=void 0,this.oKt=void 0,this.exe=void 0,this.$be=void 0,this.NWt=void 0,this.rKt=0,this.nKt=0,this.sKt=0,this.aKt=0,this.hKt=void 0,this.lKt=0,this._Kt=!1,this.uKt=void 0,this.cKt=void 0,this.mKt=190,this.dKt=190,this.CKt=!1,this.gKt=void 0,this.OWt=()=>{var e,i=5<=this.lKt&&ChannelController_1.ChannelController.CouldShare();this.GetItem(18)?.SetUIActive(i),i&&(i=ShareRewardById_1.configShareRewardById.GetConfig(2===ConfigManager_1.ConfigManager.GachaConfig.GetItemIdType(this.fKt().WVn.f8n)?4:3),e=ModelManager_1.ModelManager.ChannelModel.CouldGetShareReward(i.Id),this.GetItem(20)?.SetUIActive(e),e)&&(e=[...i.ShareReward][0],this.NWt?.SetItemInfo(e[0],e[1]))},this.pKt=()=>{ChannelController_1.ChannelController.ShareGacha([this.fKt()])},this.vKt=()=>{this._Kt=!0,this.AddIndex()},this.kWt=()=>{this.CKt&&this.AddIndex()},this.MKt=void 0,this.EKt=void 0,this.OnSequenceEventByStringParam=e=>{var i=this.MKt,t=this.EKt,s=i.Model,r=t.Model;switch(e){case"Flash1":this.eKt.NiagaraComponent.ReinitializeSystem();break;case"Flash2":AudioSystem_1.AudioSystem.PostEvent("ui_gacha_scan_burst"),5===this.lKt?(this.tKt.SetActorHiddenInGame(!1),this.tKt?.NiagaraComponent.ReinitializeSystem()):4===this.lKt?(this.iKt.SetActorHiddenInGame(!1),this.iKt?.NiagaraComponent.ReinitializeSystem()):3===this.lKt&&(this.oKt.SetActorHiddenInGame(!1),this.oKt?.NiagaraComponent.ReinitializeSystem());break;case"WeaponDA":this.rKt=UiModelUtil_1.UiModelUtil.SetRenderingMaterial(s,"GachaMaterialController"),this.nKt=UiModelUtil_1.UiModelUtil.SetRenderingMaterial(r,"GachaMaterialController");break;case"WeaponEffect":5===this.lKt?(this.sKt=UiModelUtil_1.UiModelUtil.SetRenderingMaterial(s,"GachaBurstGoldController"),this.aKt=UiModelUtil_1.UiModelUtil.SetRenderingMaterial(r,"GachaBurstGoldController")):4===this.lKt?(this.sKt=UiModelUtil_1.UiModelUtil.SetRenderingMaterial(s,"GachaBurstPurpleController"),this.aKt=UiModelUtil_1.UiModelUtil.SetRenderingMaterial(r,"GachaBurstPurpleController")):3===this.lKt&&(this.sKt=UiModelUtil_1.UiModelUtil.SetRenderingMaterial(s,"GachaBurstWhiteController"),this.aKt=UiModelUtil_1.UiModelUtil.SetRenderingMaterial(r,"GachaBurstWhiteController"));break;case"RemoveWeaponDA":UiModelUtil_1.UiModelUtil.RemoveRenderingMaterial(s,this.rKt),UiModelUtil_1.UiModelUtil.RemoveRenderingMaterial(r,this.nKt),UiModelUtil_1.UiModelUtil.RemoveRenderingMaterial(s,this.sKt),UiModelUtil_1.UiModelUtil.RemoveRenderingMaterial(r,this.aKt)}}}fKt(){return this.GachaResult[this.CurIndex]}SKt(){if(!(this.LastIndex<0))return this.GachaResult[this.LastIndex]}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIButtonComponent],[1,UE.UIButtonComponent],[2,UE.UIText],[3,UE.UIItem],[4,UE.UITexture],[5,UE.UITexture],[6,UE.UIHorizontalLayout],[7,UE.UIItem],[8,UE.UIItem],[9,UE.UIItem],[10,UE.UIItem],[11,UE.UIItem],[12,UE.UIItem],[13,UE.UIItem],[14,UE.UIItem],[15,UE.UITexture],[16,UE.UIText],[18,UE.UIItem],[19,UE.UIButtonComponent],[20,UE.UIItem],[21,UE.UIItem],[22,UE.UIItem]],this.BtnBindInfo=[[0,this.vKt],[1,this.kWt],[19,this.pKt]]}async OnBeforeStartAsync(){var e=this.OpenParam;if(void 0!==e&&e.SkipOnLoadResourceFinish){var i=[];for(const t of ModelManager_1.ModelManager.GachaModel.CurGachaResult)i.push(t.WVn.f8n);await ModelManager_1.ModelManager.GachaModel.PreloadGachaSequence(i)}this.NWt=new ShareRewardInfo_1.ShareRewardInfo,await this.NWt.OnlyCreateByActorAsync(this.GetItem(21).GetOwner()),this.AddChild(this.NWt),this.GachaResult=ModelManager_1.ModelManager.GachaModel.CurGachaResult,this.GachaResult||(this.GachaResult=[]),this.GetItem(12).SetUIActive(!1),void 0!==this.GachaResult.find(e=>{e=e.WVn?.f8n??0;return 5===ModelManager_1.ModelManager.GachaModel.GetGachaQuality(e)})&&(e=(await LguiUtil_1.LguiUtil.LoadPrefabByResourceIdAsync("UiItem_FiveStar",this.GetItem(12))).GetComponentByClass(UE.UIItem.StaticClass()),this.zWt=new LevelSequencePlayer_1.LevelSequencePlayer(e),this.zWt.BindSequenceCloseEvent(()=>{this.GetItem(12).SetUIActive(!1),this.AfterFiveStarAnimation()})),this.gKt=CameraController_1.CameraController.Model.CurrentCameraActor}OnAfterOpenUiScene(){this.exe=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName("SceneCamera1"),0),this.eKt=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName("Flash1"),0),this.tKt=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName("BurstGold"),0),this.iKt=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName("BurstPurple"),0),this.oKt=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName("BurstWhite"),0),this.hKt=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName("UpdateInteractBP"),0),this.hKt.SetTickableWhenPaused(!0),this.eKt.K2_AttachToActor(this.exe,void 0,2,2,2,!1),this.tKt.K2_AttachToActor(this.exe,void 0,2,2,2,!1),this.iKt.K2_AttachToActor(this.exe,void 0,2,2,2,!1),this.oKt.K2_AttachToActor(this.exe,void 0,2,2,2,!1);var e=new UE.Vector(200,0,0),i=new UE.Vector(60,0,0),t=new UE.Rotator(0,90,0);this.eKt.K2_SetActorRelativeLocation(i,!1,void 0,!1),this.tKt.K2_SetActorRelativeLocation(e,!1,void 0,!1),this.iKt.K2_SetActorRelativeLocation(e,!1,void 0,!1),this.oKt.K2_SetActorRelativeLocation(e,!1,void 0,!1),this.eKt.K2_SetActorRelativeRotation(t,!1,void 0,!1),this.tKt.K2_SetActorRelativeRotation(t,!1,void 0,!1),this.iKt.K2_SetActorRelativeRotation(t,!1,void 0,!1),this.oKt.K2_SetActorRelativeRotation(t,!1,void 0,!1)}yKt(){this.tKt?.SetActorHiddenInGame(!0),this.iKt?.SetActorHiddenInGame(!0),this.oKt?.SetActorHiddenInGame(!0),this.tKt?.NiagaraComponent?.Deactivate(),this.iKt?.NiagaraComponent?.Deactivate(),this.oKt?.NiagaraComponent?.Deactivate()}IKt(){this.xWt=new SmallItemGrid_1.SmallItemGrid,this.xWt.Initialize(this.GetItem(8).GetOwner()),this.JWt=new SmallItemGrid_1.SmallItemGrid,this.JWt.Initialize(this.GetItem(10).GetOwner())}OnAddEventListener(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.PlaySequenceEventByStringParam,this.OnSequenceEventByStringParam),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.OnFirstShare,this.OWt)}OnRemoveEventListener(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.PlaySequenceEventByStringParam,this.OnSequenceEventByStringParam),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.OnFirstShare,this.OWt)}Refresh(){this.yKt();var e=this.fKt().WVn?.f8n??0;e<=0?Log_1.Log.CheckError()&&Log_1.Log.Error("Gacha",44,"抽卡获得物品为空"):(3===(e=ModelManager_1.ModelManager.GachaModel.GetGachaQuality(e))?AudioSystem_1.AudioSystem.SetState("ui_gacha_quality","normal"):4===e?AudioSystem_1.AudioSystem.SetState("ui_gacha_quality","purple"):5===e&&AudioSystem_1.AudioSystem.SetState("ui_gacha_quality","golden"),AudioSystem_1.AudioSystem.PostEvent("ui_gacha_scan_next"),5===e?(this.GetItem(12).SetUIActive(!0),this.zWt?.PlayLevelSequenceByName("Start",!0)):this.AfterFiveStarAnimation())}AfterFiveStarAnimation(){this.RefreshModel(),this.RefreshView(),this.OWt()}RefreshView(){var e=this.fKt(),i=e.WVn.f8n,t=ConfigManager_1.ConfigManager.GachaConfig.GetItemIdType(e.WVn.f8n),s=ConfigManager_1.ConfigManager.InventoryConfig.GetItemConfigData(i);let r=0;this.ZWt?.StopSequenceByKey("Show"),this.ZWt?.StopSequenceByKey("ConvertShow"),this.GetItem(13).SetAlpha(0),this.GetItem(22).SetAlpha(0),1===t?(this.GetItem(3).SetUIActive(!0),t=ConfigManager_1.ConfigManager.GachaConfig.GetRoleInfoById(i),r=t.QualityId,h=t.ElementId,(h=ConfigManager_1.ConfigManager.CommonConfig.GetElementConfig(h))&&(this.GetTexture(5).SetColor(UE.Color.FromHex(h.ElementColor)),a=this.GetTexture(4),this.SetTextureByPath(h.Icon,a),h=UE.Color.FromHex(h.ElementColor),a.SetColor(h)),this.GetText(2).ShowTextNew(t.Name)):(this.GetItem(3).SetUIActive(!0),a=ConfigManager_1.ConfigManager.WeaponConfig.GetWeaponConfigByItemId(i),(h=ConfigManager_1.ConfigManager.GachaConfig.GetGachaWeaponTransformConfig(a.WeaponType))&&this.SetTextureByPath(h.WeaponTypeTexture,this.GetTexture(4)),t=new UE.Vector(.8,.8,.8),this.GetTexture(4).SetUIItemScale(t),this.GetTexture(4).SetColor(ColorUtils_1.ColorUtils.ColorWhile),r=s.QualityId,this.GetText(2).ShowTextNew(s.Name));var i=5===r||4===r&&e.IsNew,a=(this.GetButton(0).RootUIComp.SetUIActive(!i),Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Gacha",35,"星星刷新:",["qualityId",r],["LayoutDisplayCount",this.$be.GetDisplayCount()],["LayoutItemList",this.$be.GetItemList()?.length]),this.$be.RebuildLayout(r),e.ZVn);if(this.GetItem(11)?.SetUIActive(e.IsNew),this.GetItem(7).SetUIActive(!!a&&0<a?.length),e.ZVn&&0<e.ZVn?.length){this.xWt.SetActive(!0);const o=e.ZVn[0];var h={Type:4,ItemConfigId:o.f8n,BottomText:o.YVn.toString(),Data:void 0};this.xWt.Apply(h),this.xWt.BindOnCanExecuteChange(()=>!1),this.xWt.BindOnExtendToggleRelease(()=>{ControllerHolder_1.ControllerHolder.ItemController.OpenItemTipsByItemId(o.f8n)})}else this.xWt.SetActive(!1);t=e.zVn;if(this.GetItem(9).SetUIActive(0<(t?.length??0)),t&&0<t?.length){this.JWt.SetActive(!0);const n=t[0];s={Type:4,ItemConfigId:n.f8n,BottomText:n.YVn.toString(),Data:void 0};this.JWt.Apply(s),this.JWt.BindOnCanExecuteChange(()=>!1),this.JWt.BindOnExtendToggleRelease(()=>{ControllerHolder_1.ControllerHolder.ItemController.OpenItemTipsByItemId(n.f8n)}),this.ZWt.PlayLevelSequenceByName("ConvertShow",!1)}else this.JWt.SetActive(!1);1<(t?.length??0)&&(i=t[1],Log_1.Log.CheckError())&&Log_1.Log.Error("Gacha",9,"转换奖励只能有一个!, 请检查配置表",["itemId",i.f8n],["itemCount",i.YVn]);a=e.e9n;a&&0<a.f8n&&0<a.YVn?(this.GetItem(14).SetUIActive(!0),this.SetItemIcon(this.GetTexture(15),a.f8n),this.GetText(16)?.SetText(a.YVn.toString())):this.GetItem(14).SetUIActive(!1)}RefreshModel(){var e=this.SKt();if(e){e=e.WVn.f8n;switch(ConfigManager_1.ConfigManager.GachaConfig.GetItemIdType(e)){case 1:this.TKt();break;case 2:this.LKt()}}e=this.fKt();if(e){var t=e.WVn.f8n,e=ConfigManager_1.ConfigManager.GachaConfig.GetGachaTextureInfo(t),s=ConfigManager_1.ConfigManager.GachaConfig.GetGachaSequenceConfigById(e.ShowSequence),r=ConfigManager_1.ConfigManager.GachaConfig.GetItemIdType(t),s=ModelManager_1.ModelManager.GachaModel.GetLoadedSequence(s.SequencePath),a=(this.DKt(),CameraController_1.CameraController.SetViewTarget(this.exe,"GachaScanView.RefreshModel"),new UE.MovieSceneSequencePlaybackSettings),h=(a.bRestoreState=!0,a.bPauseAtEnd=!0,this.b2t=ActorSystem_1.ActorSystem.Spawn(UE.LevelSequenceActor.StaticClass(),MathUtils_1.MathUtils.DefaultTransform,void 0),this.b2t.PlaybackSettings=a,this.SPe=this.b2t.SequencePlayer,this.b2t.SetSequence(s),this.b2t.SetTickableWhenPaused(!0),this.b2t.AddBindingByTag(exports.SCENE_CAMERA_TAG,this.exe,!1,!0),RenderModuleController_1.RenderModuleController.DebugNewUiSceneWorkflow?0<e.BindPoint?.length?(this.b2t.bOverrideInstanceData=!0,this.b2t.DefaultInstanceData.TransformOriginActor=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName(e.BindPoint),1)):(this.b2t.bOverrideInstanceData=!0,a=this.b2t.DefaultInstanceData,s=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName("KuroUiSceneRoot"),1),a.TransformOrigin=s.GetTransform()):0<e.BindPoint?.length&&(this.b2t.bOverrideInstanceData=!0,this.b2t.DefaultInstanceData.TransformOriginActor=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName(e.BindPoint),1)),this.b2t.GetBindingByTagInTemplate(exports.SCENE_ROLE_TAG,!0)),o=h.Num();for(let e=0;e<o;e++){var n=h.Get(e);if(n){var l=n.K2_GetComponentsByClass(UE.SkeletalMeshComponent.StaticClass()),_=l.Num();for(let e=0;e<_;e++){var d=l.Get(e);d&&d.SetTickableWhenPaused(!0)}}}this.CKt=!1,1===r?(this.SPe.OnPause.Add(()=>{this.CKt=!0}),a=this.SPe.GetStartTime().Time,this.SPe.PlayTo(new UE.MovieSceneSequencePlaybackParams(a,0,"A",2,0))):(this.SPe.OnFinished.Add(()=>{this.CKt=!0}),this.SPe.Play()),this.cKt&&(TimerSystem_1.TimerSystem.Remove(this.cKt),this.cKt=void 0);let i=120;switch(r){case 1:this.lKt=ConfigManager_1.ConfigManager.GachaConfig.GetRoleInfoById(t).QualityId,i=this.mKt,this.RKt();break;case 2:this.UKt(t),this.lKt=ConfigManager_1.ConfigManager.WeaponConfig.GetWeaponConfigByItemId(t)?.QualityId,i=this.dKt}this.ZWt.StopSequenceByKey("Show"),this.cKt=TimerSystem_1.TimerSystem.Forever(()=>{var e=this.SPe.GetCurrentTime().Time.FrameNumber.Value;this.SPe.GetEndTime().Time.FrameNumber.Value-e<i&&(this.ZWt.PlayLevelSequenceByName("Show",!1),TimerSystem_1.TimerSystem.Remove(this.cKt),this.cKt=void 0)},100)}}LKt(){var e=this.MKt?.Model,i=this.EKt?.Model;e&&UiModelUtil_1.UiModelUtil.SetVisible(e,!1),i&&UiModelUtil_1.UiModelUtil.SetVisible(i,!1)}RKt(){var e=this.fKt().WVn.f8n,e=ConfigManager_1.ConfigManager.GachaConfig.GetRoleInfoById(e);5===e.QualityId?this.hKt?.UpdateGachaShowItem(e.Id,4):this.hKt?.UpdateGachaShowItem(e.Id,3)}TKt(){this.DKt()}DKt(){this.SPe&&(this.SPe.OnStop.Clear(),this.SPe.Stop(),this.SPe=void 0),this.b2t?.IsValid()&&(this.b2t.ResetBindings(),this.b2t.bOverrideInstanceData=!1,this.b2t.DefaultInstanceData.TransformOriginActor=void 0,this.b2t=void 0)}UKt(e){2===ConfigManager_1.ConfigManager.GachaConfig.GetItemIdType(e)&&this.Yjt(e)}Yjt(e){var i=this.MKt;if(i){var t=ConfigManager_1.ConfigManager.WeaponConfig.GetWeaponConfigByItemId(e);let s=DataTableUtil_1.DataTableUtil.GetDataTableRow(this.uKt,e.toString());s=s||ConfigManager_1.ConfigManager.GachaConfig.GetGachaWeaponTransformConfig(t.WeaponType);const r=i.Model;e=r.CheckGetComponent(2);const a=r.CheckGetComponent(1);e?.LoadModelByModelId(t.ModelId,!1,()=>{s.ShowScabbard||UiModelUtil_1.UiModelUtil.SetVisible(r,!0);var e=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName(GachaDefine_1.GACHA_WEAPON_CASE),1),e=(a.Actor?.K2_AttachToActor(e,void 0,2,2,2,!1),Transform_1.Transform.Create()),i=s.Rotation,i=Rotator_1.Rotator.Create(i.Y,i.Z,i.X),t=s.Size,t=Vector_1.Vector.Create(t,t,t),i=(e.SetLocation(s.Location),e.SetRotation(i.Quaternion()),e.SetScale3D(t.ToUeVector()),a.MainMeshComponent?.K2_SetRelativeTransform(e.ToUeTransform(),!1,void 0,!1),r.CheckGetComponent(9)),t=(i?.SetRotateParam(s.RotateTime,1,!0),new UE.Rotator(s.AxisRotate.Y,s.AxisRotate.Z,s.AxisRotate.X));a?.Actor?.K2_SetActorRotation(t,!1),i?.StartRotate()}),5===t.QualityId?this.hKt?.WeaponGolden():4===t.QualityId?this.hKt?.WeaponPurple():3===t.QualityId&&this.hKt?.WeaponNormal();const h=this.EKt.Model;i=t.Models;s.ShowScabbard&&1<i.length?(e=i[1],h.CheckGetComponent(2)?.LoadModelByModelId(e,!1,()=>{var e=h.CheckGetComponent(1),i=(e.Actor.K2_AttachToActor(a?.Actor,void 0,2,1,1,!1),Transform_1.Transform.Create());i.SetLocation(s.ScabbardOffset),e?.MainMeshComponent?.K2_SetRelativeTransform(i.ToUeTransform(),!1,void 0,!1),UiModelUtil_1.UiModelUtil.SetVisible(h,!0)})):UiModelUtil_1.UiModelUtil.SetVisible(h,!1)}}AddIndex(){if(this.CurIndex>=this.GachaResult.length-1)this.Finish();else{if(this._Kt){var e=this.AKt();if(!(0<e))return void this.Finish();this.LastIndex=this.CurIndex,this.CurIndex=e}else this.LastIndex=this.CurIndex,this.CurIndex++;this.Refresh()}}AKt(){for(let e=this.CurIndex+1;e<this.GachaResult.length;e++){var i=this.GachaResult[e],t=i.WVn.f8n,t=ModelManager_1.ModelManager.GachaModel.GetGachaQuality(t);if(5===t||4<=t&&i.IsNew)return e}return-1}Finish(){ModelManager_1.ModelManager.GachaModel.CanCloseView=!0,UiManager_1.UiManager.OpenView("GachaResultView",this.OpenParam,()=>{UiManager_1.UiManager.CloseView(this.Info.Name)}),ModelManager_1.ModelManager.GachaModel.CanCloseView=!1}OnBeforeShow(){super.OnBeforeShow(),BlackScreenController_1.BlackScreenController.RemoveBlackScreen("Close","GachaSkip"),UiSceneManager_1.UiSceneManager.InitGachaItemObserver(),this.MKt=UiSceneManager_1.UiSceneManager.GetGachaItemObserver(),this.EKt=UiSceneManager_1.UiSceneManager.InitWeaponScabbardObserver();var e=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName("GachaBP"),0),e=(e?.IsSkip||e.WhiteScreenOff(),UE.KismetSystemLibrary.ExecuteConsoleCommand(GlobalData_1.GlobalData.World,"r.Kuro.KuroBloomEnable 1"),this.uKt=ResourceSystem_1.ResourceSystem.Load("/Game/Aki/Data/GaCha/GachaWeaponTransform.GachaWeaponTransform",UE.DataTable),this.IKt(),this.OpenParam);this._Kt=e&&e.IsOnlyShowGold,this._Kt?(this.CurIndex=-1,e=this.AKt(),this.CurIndex=0<e?e:0):this.CurIndex=0,this.$be=new SimpleGenericLayout_1.SimpleGenericLayout(this.GetHorizontalLayout(6)),this.ZWt=new LevelSequencePlayer_1.LevelSequencePlayer(this.RootItem),this.mKt=CommonParamById_1.configCommonParamById.GetIntConfig("GachaRoleBeforeEndFrame")??this.mKt,this.dKt=CommonParamById_1.configCommonParamById.GetIntConfig("GachaWeaponBeforeEndFrame")??this.dKt,this.Refresh()}OnBeforeHideImplement(){GameQualitySettingsManager_1.GameQualitySettingsManager.Get().GetCurrentQualityInfo().ApplyBloomEnable(),this.hKt?.IsValid()&&this.hKt?.EndGachaScene()}OnBeforeDestroyImplementImplement(){this.uKt=void 0,UiSceneManager_1.UiSceneManager.DestroyGachaItemObserver(),UiSceneManager_1.UiSceneManager.DestroyWeaponScabbardObserver(this.EKt),this.cKt&&(TimerSystem_1.TimerSystem.Remove(this.cKt),this.cKt=void 0),CameraController_1.CameraController.SetViewTarget(this.gKt,"GachaScanView.OnBeforeDestroyImplementImplement")}OnBeforeDestroy(){this.AddChild(this.xWt),this.AddChild(this.JWt),this.TKt(),ModelManager_1.ModelManager.GachaModel.ReleaseLoadGachaSequence()}}exports.GachaScanView=GachaScanView;
//# sourceMappingURL=GachaScanView.js.map