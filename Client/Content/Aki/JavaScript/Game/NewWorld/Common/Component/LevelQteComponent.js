
"use strict";var LevelQteComponent_1,__decorate=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;0<=s;s--)(r=e[s])&&(l=(i<3?r(l):3<i?r(t,o,l):r(t,o))||l);return 3<i&&l&&Object.defineProperty(t,o,l),l};Object.defineProperty(exports,"__esModule",{value:!0}),exports.LevelQteComponent=void 0;const EntityComponent_1=require("../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../Core/Entity/RegisterComponent"),LevelGeneralContextDefine_1=require("../../../LevelGamePlay/LevelGeneralContextDefine"),LevelGeneralController_1=require("../../../LevelGamePlay/LevelGeneralController"),LevelGeneralNetworks_1=require("../../../LevelGamePlay/LevelGeneralNetworks"),CommonQteController_1=require("../../../Module/Qte/CommonQte/CommonQteController");let LevelQteComponent=LevelQteComponent_1=class LevelQteComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.EIe=void 0,this.Pxl=void 0,this.wxl=void 0,this.$El=()=>{let e=this.wxl=void 0,t=void 0;"SingleBtn"===this.Pxl?.Type&&(e=this.Pxl.SuccessCallback.Actions,t=this.Pxl.SuccessCallback.SendSelfEvent,e&&LevelGeneralController_1.LevelGeneralController.ExecuteActionsNew(e,this.UUe()),t)&&LevelGeneralNetworks_1.LevelGeneralNetworks.RequestEntitySendEvent(this.EIe.GetCreatureDataId(),t)},this.Bxl=()=>{let e=this.wxl=void 0,t=void 0;"SingleBtn"===this.Pxl?.Type&&(e=this.Pxl.FailureCallback.Actions,t=this.Pxl.FailureCallback.SendSelfEvent,e&&LevelGeneralController_1.LevelGeneralController.ExecuteActionsNew(e,this.UUe()),t)&&LevelGeneralNetworks_1.LevelGeneralNetworks.RequestEntitySendEvent(this.EIe.GetCreatureDataId(),t)}}OnInitData(e){e=e.GetParam(LevelQteComponent_1)[0];return this.Pxl=e.QteConfig,this.EIe=this.Entity.GetComponent(0),!0}StartQte(e=!1){return this.wxl?.IsActive()&&e&&CommonQteController_1.CommonQteController.StopQte(this.wxl.HandleId),"SingleBtn"===this.Pxl?.Type&&(this.wxl=CommonQteController_1.CommonQteController.StartQte(this.Pxl.QteId,this.$El,this.Bxl,1),!this.wxl)}StopQte(){this.wxl?.IsActive()&&CommonQteController_1.CommonQteController.StopQte(this.wxl.HandleId)}IsQteActive(){return this.wxl?.IsActive()??!1}UUe(){var e=LevelGeneralContextDefine_1.EntityContext.Create(this.Entity.Id);return e.ClientExecuteActions=!0,e}};LevelQteComponent=LevelQteComponent_1=__decorate([(0,RegisterComponent_1.RegisterComponent)(251)],LevelQteComponent),exports.LevelQteComponent=LevelQteComponent;
//# sourceMappingURL=LevelQteComponent.js.map