
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ImageQualityMenuData=void 0;const GameSettingsDeviceRender_1=require("../../../GameSettings/GameSettingsDeviceRender"),MenuController_1=require("../MenuController"),MenuData_1=require("../MenuData");class ImageQualityMenuData extends MenuData_1.MenuData{constructor(){super(...arguments),this.$6a=[],this.X6a=[],this.Y6a=[],this.z6a=[]}OnInitialize(i){15===GameSettingsDeviceRender_1.GameSettingsDeviceRender.DeviceType?(this.Y6a=i.OptionsName,this.z6a=i.OptionsValue):(this.Y6a=i.OptionsName.filter((e,t)=>t!==i.OptionsName.length-2),this.z6a=i.OptionsValue.filter((e,t)=>t!==i.OptionsName.length-2)),this.$6a=this.Y6a.slice(0,-1),this.X6a=this.z6a.slice(0,-1);var e=GameSettingsDeviceRender_1.GameSettingsDeviceRender.GetRecommendQualityLv();this.RecommendIndex=this.X6a.indexOf(e)}get OptionsNameList(){return 5===MenuController_1.MenuController.GetTargetConfig(10)?this.Y6a:this.$6a}get OptionsValueList(){return 5===MenuController_1.MenuController.GetTargetConfig(10)?this.z6a:this.X6a}}exports.ImageQualityMenuData=ImageQualityMenuData;
//# sourceMappingURL=ImageQualityMenuDatat.js.map