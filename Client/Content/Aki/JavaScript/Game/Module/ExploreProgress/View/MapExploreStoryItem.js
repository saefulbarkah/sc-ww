
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MapExploreStoryItem=void 0;const UE=require("ue"),Log_1=require("../../../../Core/Common/Log"),LevelSequencePlayer_1=require("../../Common/LevelSequencePlayer"),GridProxyAbstract_1=require("../../Util/Grid/GridProxyAbstract");class MapExploreStoryItem extends GridProxyAbstract_1.GridProxyAbstract{constructor(){super(...arguments),this.Cxo=void 0,this.fGt=void 0,this.ljl=e=>{"Unlock"===e&&this.gjl()}}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIItem],[1,UE.UIText],[2,UE.UIText],[3,UE.UIItem],[4,UE.UIText],[5,UE.UIItem]]}OnBeforeCreate(){this.Cxo=new LevelSequencePlayer_1.LevelSequencePlayer(this.RootItem),this.Cxo.BindSequenceCloseEvent(this.ljl)}OnStart(){}OnBeforeDestroy(){this.Cxo?.Clear()}Ih1(e,t){t?this.GetText(e)?.ShowTextNew(t):this.GetText(e)?.SetText("")}Refresh(e){Log_1.Log.CheckDebug()&&Log_1.Log.Debug("Map",69,this.constructor.name,["",e]),this.fGt=e,this.Ih1(1,e.StoryTitle),this.Ih1(2,e.StoryContent),this.Ih1(4,e.LockedDesc),e.IsOpen&&!e.IsNewOpen?this.gjl():this.fjl()}gjl(){this.GetItem(3)?.SetUIActive(!1),this.GetText(2)?.SetUIActive(!0),this.GetItem(5)?.SetUIActive(!!this.fGt?.StoryTitle)}fjl(){this.GetItem(3)?.SetUIActive(!0),this.GetText(2)?.SetUIActive(!1),this.GetItem(5)?.SetUIActive(!1)}PlayNewOpenAnim(){this.Cxo?.PlayLevelSequenceByName("Unlock")}}exports.MapExploreStoryItem=MapExploreStoryItem;
//# sourceMappingURL=MapExploreStoryItem.js.map