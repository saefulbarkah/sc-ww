
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DreamLinkRewardViewLimit=void 0;const UE=require("ue"),ActorSystem_1=require("../../../../Core/Actor/ActorSystem"),CommonParamById_1=require("../../../../Core/Define/ConfigCommon/CommonParamById"),ResourceSystem_1=require("../../../../Core/Resource/ResourceSystem"),FNameUtil_1=require("../../../../Core/Utils/FNameUtil"),ObjectUtils_1=require("../../../../Core/Utils/ObjectUtils"),EventDefine_1=require("../../../Common/Event/EventDefine"),EventSystem_1=require("../../../Common/Event/EventSystem"),TimeUtil_1=require("../../../Common/TimeUtil"),ConfigManager_1=require("../../../Manager/ConfigManager"),ControllerHolder_1=require("../../../Manager/ControllerHolder"),ModelManager_1=require("../../../Manager/ModelManager"),PreloadConfigStatementPart4_1=require("../../../Preload/PreloadConfigStatementPart4"),RenderModuleController_1=require("../../../Render/Manager/RenderModuleController"),UiTickViewBase_1=require("../../../Ui/Base/UiTickViewBase"),ActivityWeaponDescribeComponent_1=require("../../Activity/ActivityContent/UniversalComponents/ActivityWeaponDescribeComponent"),CommonTabComponentData_1=require("../../Common/TabComponent/CommonTabComponentData"),CommonTabData_1=require("../../Common/TabComponent/CommonTabData"),CommonTabTitleData_1=require("../../Common/TabComponent/CommonTabTitleData"),TabComponentWithCaptionItem_1=require("../../Common/TabComponent/TabComponentWithCaptionItem"),CommonTabItem_1=require("../../Common/TabComponent/TabItem/CommonTabItem"),GenericScrollViewNew_1=require("../../Util/ScrollView/GenericScrollViewNew"),WeaponTrialData_1=require("../../Weapon/Data/WeaponTrialData"),DreamLinkController_1=require("../DreamLinkController"),DreamLinkWeaponModelHandle_1=require("../DreamLinkWeaponModelHandle"),DreamLinkRewardLimitTimeItem_1=require("./SubView/DreamLinkRewardLimitTimeItem"),DreamLinkRewardSpecialItem_1=require("./SubView/DreamLinkRewardSpecialItem");class DreamLinkRewardViewLimit extends UiTickViewBase_1.UiTickViewBase{constructor(){super(...arguments),this.wrh=void 0,this.Qrl=!0,this.Krl="",this.Ivt=void 0,this.Brh=void 0,this.Cua=0,this.Q_l=void 0,this.K_l=void 0,this.$pt=void 0,this.b2t=void 0,this.AHt=void 0,this.$_l=void 0,this.ydl=void 0,this.TTi=()=>{this.X_l(this.Cua),this.v4e(this.Cua),this.Q_l.Refresh()},this.jdi=(e,t)=>{return new CommonTabItem_1.CommonTabItem},this.Wdi=e=>{this.v4e(e)},this.yqe=e=>{var[e,t]=this.wrh.GetTypeInfoByTabId(e+1);return new CommonTabData_1.CommonTabData(t,new CommonTabTitleData_1.CommonTabTitleData(e))},this.VOe=()=>{return new DreamLinkRewardLimitTimeItem_1.DreamLinkRewardLimitTimeItem},this.$rl=()=>{var e;this.Qrl&&((e=this.wrh.GetLimitTimeEndTime())-TimeUtil_1.TimeUtil.GetServerTime()<0?(this.Qrl=!1,ControllerHolder_1.ControllerHolder.ActivityController.ShowActivityRefreshAndBackToBattleView()):(e=ModelManager_1.ModelManager.ActivityModel.GetRemainTimeText(e,this.Krl),this.GetText(2).SetText(e)))},this.Edl=()=>{var e=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName("WeaponRoot"),1),e=(this.ydl=new DreamLinkWeaponModelHandle_1.DreamLinkWeaponModelHandle(e),CommonParamById_1.configCommonParamById.GetIntConfig("DreamLinkModelRotateTime"));this.ydl.SetRotateParam(e),this.ydl.StartRotate()}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIScrollViewWithScrollbarComponent],[2,UE.UIText],[3,UE.UIItem],[4,UE.UIItem]]}async OnBeforeStartAsync(){this.wrh=DreamLinkController_1.DreamLinkController.GetCurrentActivityData();var e=[],t=(this.Brh=new GenericScrollViewNew_1.GenericScrollViewNew(this.GetScrollViewWithScrollbar(1),this.VOe),new CommonTabComponentData_1.CommonTabComponentData(this.jdi,this.Wdi,this.yqe)),t=(this.Ivt=new TabComponentWithCaptionItem_1.TabComponentWithCaptionItem(this.GetItem(0),t,()=>{this.CloseMe()}),this.ICi()),t=(e.push(this.Ivt.RefreshTabItemAsync(t)),this.wrh.GetLimitTimeRewardListByTabId(5));this.Q_l=new DreamLinkRewardSpecialItem_1.DreamLinkRewardSpecialItem(t[0]),e.push(this.Q_l.CreateByActorAsync(this.GetItem(3).GetOwner())),this.AddChild(this.Q_l),this.K_l=new ActivityWeaponDescribeComponent_1.ActivityWeaponDescribeComponent,e.push(this.K_l.CreateThenShowByActorAsync(this.GetItem(4).GetOwner())),await Promise.all(e);for(let e=0;e<this.wrh.GetLimitTimeRewardTypeLength();e++)this.X_l(e);this.Ivt.SelectToggleByIndex(0,!0)}OnStart(){this.Krl=PreloadConfigStatementPart4_1.configMultiTextLang.GetLocalTextNew("ActivityRemainingTime");var e=this.wrh.GetPreviewWeaponId(),t=new WeaponTrialData_1.WeaponTrialData;t.SetTrialId(e),this.K_l.Refresh(t.GetItemId(),!1),this.K_l.SetLookButtonVisible(!0),this.K_l.BindWeaponPreviewFunction([e])}OnAddEventListener(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.DreamLinkLimitRewardRefresh,this.TTi)}OnRemoveEventListener(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.DreamLinkLimitRewardRefresh,this.TTi)}OnTick(e){this.$rl(),this.ydl?.Tick(e)}OnHandleLoadScene(){this.AHt=ModelManager_1.ModelManager.CameraModel.CurrentCameraActor,this.$_l=UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName("DoorCamera"),1),ControllerHolder_1.ControllerHolder.CameraController.SetViewTarget(this.$_l,"DreamLinkRewardViewLimit.OpenAndStartSequence");for(const i of[UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName("Weapon1"),1),UE.KuroCollectActorComponent.GetActorWithTag(FNameUtil_1.FNameUtil.GetDynamicFName("Weapon2"),1)]){var e=i.GetComponentByClass(UE.SkeletalMeshComponent.StaticClass());e.SetTickableWhenPaused(!0),e.SetForcedLOD(1)}var t=ConfigManager_1.ConfigManager.UiResourceConfig.GetResourcePath("Sequence_DreamLinkRewardStart");this.PlaySceneLevelSequence(t,this.Edl)}OnBeforeDestroy(){ControllerHolder_1.ControllerHolder.CameraController.SetViewTarget(this.AHt,"DreamLinkRewardViewLimit.OnBeforeDestroy"),this.AHt=void 0,this.$_l=void 0,this.b2t?.IsValid()&&(this.b2t?.K2_DestroyActor(),this.b2t=void 0),this.$pt?.IsValid()&&(this.$pt?.Stop(),this.$pt=void 0),this.ydl?.StopRotate(),this.ydl?.Destroy()}ICi(){return this.Ivt.CreateTabItemDataByLength(this.wrh.GetLimitTimeRewardTypeLength())}X_l(e){var t=e+1;this.Ivt.GetTabItemByIndex(e).SetRedDotState(this.wrh.CheckHasLimitTimeTabReward(t))}async v4e(e){this.Cua=e;e=this.wrh.GetLimitTimeRewardListByTabId(e+1);await this.Brh.RefreshByDataAsync(e,!0)}PlaySceneLevelSequence(e,r){this.$pt&&(this.$pt.Stop(),this.$pt=void 0),ResourceSystem_1.ResourceSystem.LoadAsync(e,UE.LevelSequence,e=>{var t,i;ObjectUtils_1.ObjectUtils.IsValid(e)&&((t=ActorSystem_1.ActorSystem.Spawn(UE.LevelSequenceActor.StaticClass(),new UE.Transform,void 0)).SetSequence(e),(i=new UE.MovieSceneSequencePlaybackSettings).bRestoreState=!1,i.bPauseAtEnd=!0,t.PlaybackSettings=i,t.SetTickableWhenPaused(!0),UE.KuroSequenceRuntimeFunctionLibrary.SetSequenceInUiScene(e,!0),this.b2t=t,this.$pt=t.SequencePlayer,this.b2t.bOverrideInstanceData=!0,this.b2t.DefaultInstanceData.TransformOrigin=RenderModuleController_1.RenderModuleController.GetKuroCurrentUiSceneTransform(),this.$pt.PlayTo(new UE.MovieSceneSequencePlaybackParams(this.$pt.GetEndTime().Time,0,"A",2,0)),r?.())})}}exports.DreamLinkRewardViewLimit=DreamLinkRewardViewLimit;
//# sourceMappingURL=DreamLinkRewardViewLimit.js.map