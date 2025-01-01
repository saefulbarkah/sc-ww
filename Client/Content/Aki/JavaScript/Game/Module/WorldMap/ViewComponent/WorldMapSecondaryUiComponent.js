
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WorldMapSecondaryUiComponent=void 0;const MapComponent_1=require("../../Map/Base/MapComponent"),CustomMarkItem_1=require("../../Map/Marks/MarkItem/CustomMarkItem"),FixedSceneGamePlayMarkItem_1=require("../../Map/Marks/MarkItem/FixedSceneGamePlayMarkItem"),SceneGameplayMarkItem_1=require("../../Map/Marks/MarkItem/SceneGameplayMarkItem"),TeleportMarkItem_1=require("../../Map/Marks/MarkItem/TeleportMarkItem"),ParkourEntrancePanel_1=require("../SubViews/ActivityPanel/ParkourEntrancePanel"),BoxPanel_1=require("../SubViews/BoxPanel/BoxPanel"),CaveHoleSecondaryPanel_1=require("../SubViews/CaveHole/CaveHoleSecondaryPanel"),CommonGamePlayPanel_1=require("../SubViews/CommonGamePlay/CommonGamePlayPanel"),CorniceMeetingEntrancePanel_1=require("../SubViews/CorniceMeeting/CorniceMeetingEntrancePanel"),CustomMarkPanel_1=require("../SubViews/CustomMarkPanel/CustomMarkPanel"),DetectorPanel_1=require("../SubViews/DectetorPanel/DetectorPanel"),EnrichmentAreaPanel_1=require("../SubViews/Enrichment/EnrichmentAreaPanel"),GeneralPanel_1=require("../SubViews/GeneralPanel/GeneralPanel"),InstanceDungeonEntrancePanel_1=require("../SubViews/InstanceDungeonEntrancePanel/InstanceDungeonEntrancePanel"),RoguelikeEntrancePanel_1=require("../SubViews/InstanceDungeonEntrancePanel/RoguelikeEntrancePanel"),TowerEntrancePanel_1=require("../SubViews/InstanceDungeonEntrancePanel/TowerEntrancePanel"),LordGymPanel_1=require("../SubViews/LordGymPanel/LordGymPanel"),MapMarkTogglePanel_1=require("../SubViews/MapMarkToggle/MapMarkTogglePanel"),MapTravelQuestPanel_1=require("../SubViews/MapTravel/MapTravelQuestPanel"),MarkMenu_1=require("../SubViews/MarkMenu/MarkMenu"),PunishReportPanel_1=require("../SubViews/PunishReport/PunishReportPanel"),QuestPanel_1=require("../SubViews/QuestPanel/QuestPanel"),SceneGameplayPanel_1=require("../SubViews/SceneGameplayPanel/SceneGameplayPanel"),TeleportPanel_1=require("../SubViews/TeleportPanel/TeleportPanel"),TemporaryTeleportPanel_1=require("../SubViews/TemporaryTeleportPanel/TemporaryTeleportPanel"),TrackMenuPanel_1=require("../SubViews/TrackMenu/TrackMenuPanel"),WorldMapNotePanel_1=require("../SubViews/WorldMapNote/WorldMapNotePanel"),WorldMapQuickNavigatePanel_1=require("../SubViews/WorldMapQuickNavigate/WorldMapQuickNavigatePanel"),WorldMapDefine_1=require("../WorldMapDefine"),WorldMapSecondaryUiDefine_1=require("../WorldMapSecondaryUiDefine"),WorldMapSecondaryUi_1=require("./WorldMapSecondaryUi"),worldMapSecondaryPanelCtorMap=new Map([[WorldMapDefine_1.ESecondaryPanel.CustomMarkPanel,CustomMarkPanel_1.CustomMarkPanel],[WorldMapDefine_1.ESecondaryPanel.QuestPanel,QuestPanel_1.QuestPanel],[WorldMapDefine_1.ESecondaryPanel.GeneralPanel,GeneralPanel_1.GeneralPanel],[WorldMapDefine_1.ESecondaryPanel.MarkMenuPanel,MarkMenu_1.MarkMenu],[WorldMapDefine_1.ESecondaryPanel.ParkourPanel,ParkourEntrancePanel_1.ParkourEntrancePanel],[WorldMapDefine_1.ESecondaryPanel.LordGymPanel,LordGymPanel_1.LordGymPanel],[WorldMapDefine_1.ESecondaryPanel.SceneGameplayPanel,SceneGameplayPanel_1.SceneGameplayPanel],[WorldMapDefine_1.ESecondaryPanel.TemporaryTeleportPanel,TemporaryTeleportPanel_1.TemporaryTeleportPanel],[WorldMapDefine_1.ESecondaryPanel.DetectorPanel,DetectorPanel_1.DetectorPanel],[WorldMapDefine_1.ESecondaryPanel.BoxPanel,BoxPanel_1.BoxPanel],[WorldMapDefine_1.ESecondaryPanel.EnrichmentAreaPanel,EnrichmentAreaPanel_1.EnrichmentAreaPanel],[WorldMapDefine_1.ESecondaryPanel.PunishReportPanel,PunishReportPanel_1.PunishReportPanel],[WorldMapDefine_1.ESecondaryPanel.TeleportPanel,TeleportPanel_1.TeleportPanel],[WorldMapDefine_1.ESecondaryPanel.InstanceDungeonEntrancePanel,InstanceDungeonEntrancePanel_1.InstanceDungeonEntrancePanel],[WorldMapDefine_1.ESecondaryPanel.TowerEntrancePanel,TowerEntrancePanel_1.TowerEntrancePanel],[WorldMapDefine_1.ESecondaryPanel.RoguelikePanel,RoguelikeEntrancePanel_1.RoguelikeEntrancePanel],[WorldMapDefine_1.ESecondaryPanel.CorniceMeetingPanel,CorniceMeetingEntrancePanel_1.CorniceMeetingEntrancePanel],[WorldMapDefine_1.ESecondaryPanel.QuickNavigatePanel,WorldMapQuickNavigatePanel_1.WorldMapQuickNavigatePanel],[WorldMapDefine_1.ESecondaryPanel.CaveHole,CaveHoleSecondaryPanel_1.CaveHoleSecondaryPanel],[WorldMapDefine_1.ESecondaryPanel.CommonGamePlayPanel,CommonGamePlayPanel_1.CommonGamePlayPanel],[WorldMapDefine_1.ESecondaryPanel.TrackMenuPanel,TrackMenuPanel_1.TrackMenuPanel],[WorldMapDefine_1.ESecondaryPanel.WorldMapNotePanel,WorldMapNotePanel_1.WorldMapNotePanel],[WorldMapDefine_1.ESecondaryPanel.MapMarkTogglePanel,MapMarkTogglePanel_1.MapMarkTogglePanel],[WorldMapDefine_1.ESecondaryPanel.MapTravelQuestPanel,MapTravelQuestPanel_1.MapTravelQuestPanel]]);class WorldMapSecondaryUiComponent extends MapComponent_1.MapComponent{constructor(){super(...arguments),this.vFo=new Map}get ComponentType(){return 1}get ExtraSecondaryUiOpen(){return this.PropertyMap.tryGet(0,!1)}set ExtraSecondaryUiOpen(e){this.PropertyMap.set(0,e)}IsInternalSecondaryUiOpen(){for(var[,e]of this.vFo)if(e instanceof WorldMapSecondaryUi_1.WorldMapSecondaryUi&&!e.IsUiCloseComplete)return!0;return!1}get IsSecondaryUiOpening(){return this.ExtraSecondaryUiOpen||this.IsInternalSecondaryUiOpen()}get NYa(){var e=this.Parent;if(void 0!==e)return e;this.LogError(63,"[地图系统]->二级界面组件没有附加到容器下！")}OnRemove(){if(this.vFo){for(var[,e]of this.vFo)e.Destroy();this.vFo.clear()}}ShowPanel(e,a,n=1){e instanceof CustomMarkItem_1.CustomMarkItem?this.EFo(WorldMapDefine_1.ESecondaryPanel.CustomMarkPanel,a,e,n):24!==e.MarkType&&e instanceof SceneGameplayMarkItem_1.SceneGameplayMarkItem||e instanceof FixedSceneGamePlayMarkItem_1.FixedSceneGameplayMarkItem?e.IsLordGym()?this.EFo(WorldMapDefine_1.ESecondaryPanel.LordGymPanel,a,e,!1):e.IsNewLordGym()?this.EFo(WorldMapDefine_1.ESecondaryPanel.LordGymPanel,a,e,!0):this.EFo(WorldMapDefine_1.ESecondaryPanel.SceneGameplayPanel,a,e):e instanceof TeleportMarkItem_1.TeleportMarkItem&&!e.IsActivity?e.IsDungeonEntrance?e.IsTowerEntrance?this.EFo(WorldMapDefine_1.ESecondaryPanel.TowerEntrancePanel,a,e):e.IsRoguelike?this.EFo(WorldMapDefine_1.ESecondaryPanel.RoguelikePanel,a,e):this.EFo(WorldMapDefine_1.ESecondaryPanel.InstanceDungeonEntrancePanel,a,e):this.EFo(WorldMapDefine_1.ESecondaryPanel.TeleportPanel,a,e):(n=WorldMapSecondaryUiDefine_1.markPanelTypeMap.get(e.MarkType)??WorldMapDefine_1.ESecondaryPanel.GeneralPanel,this.EFo(n,a,e))}ShowMarkMenu(e,a){this.EFo(WorldMapDefine_1.ESecondaryPanel.MarkMenuPanel,e,a)}ShowTrackMenu(e,a){this.EFo(WorldMapDefine_1.ESecondaryPanel.TrackMenuPanel,e,a)}ShowWorldMapNotePanel(e,a){this.EFo(WorldMapDefine_1.ESecondaryPanel.WorldMapNotePanel,e,a)}ShowMapMarkTogglePanel(e){this.EFo(WorldMapDefine_1.ESecondaryPanel.MapMarkTogglePanel,e)}ShowQuickNavigate(e,a){this.EFo(WorldMapDefine_1.ESecondaryPanel.QuickNavigatePanel,e,a)}async EFo(e,a,...n){var r=WorldMapDefine_1.ESecondaryPanel[e];let o=this.vFo.get(r);o?o.MarkForOpen():(e=worldMapSecondaryPanelCtorMap.get(e),o=new e,this.vFo.set(r,o),o.MarkForOpen(),await o.CreateThenShowByResourceIdAsync(o.GetResourceId(),a));e=o,r=this.NYa.Map;await e.ShowPanel(r,...n)}CloseUi(e,a=!0){for(var[,n]of this.vFo)if(n instanceof WorldMapSecondaryUi_1.WorldMapSecondaryUi){var r=n.GetRootItem();if(n.IsUiOpen&&r)return void n.Close(e,a)}}GetSecondaryPanelGuideFocusUiItem(e){return this.vFo.get(WorldMapDefine_1.ESecondaryPanel[e])?.GetGuideFocusUiItem()}AllSecondaryPanelsUpdateMap(){for(var[,e]of this.vFo){var a=this.NYa.Map;e.UpdateMap(a)}}}exports.WorldMapSecondaryUiComponent=WorldMapSecondaryUiComponent;
//# sourceMappingURL=WorldMapSecondaryUiComponent.js.map