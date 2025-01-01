
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbNpcUiInteractOnGramophone=void 0;const FbPlayFlow_1=require("../Action/FbPlayFlow");class FbNpcUiInteractOnGramophone{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.KVh=!1,this.$Vh=void 0,this.XVh=!1,this.YVh=void 0,this.C6h=!1,this.g6h=void 0,this.a6h=!1,this.h6h=void 0,this.ZVh=!1,this.e6h=void 0,this.f6h=!1,this.p6h=void 0,this.v6h=!1,this.y6h=void 0}static Create(t){if(t)return new FbNpcUiInteractOnGramophone(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get EnterMontage(){return this.KVh||(this.KVh=!0,this.$Vh=this.FbDataInternal.enterMontage()),this.$Vh}get StandByMontage(){return this.XVh||(this.XVh=!0,this.YVh=this.FbDataInternal.standByMontage()),this.YVh}get SwitchMusicMontage(){return this.C6h||(this.C6h=!0,this.g6h=this.FbDataInternal.switchMusicMontage()),this.g6h}get ExitMontage(){return this.a6h||(this.a6h=!0,this.h6h=this.FbDataInternal.exitMontage()),this.h6h}get EnterFlow(){return this.ZVh||(this.ZVh=!0,this.e6h=FbPlayFlow_1.FbPlayFlow.Create(this.FbDataInternal.enterFlow())),this.e6h}get FailedFlow(){return this.f6h||(this.f6h=!0,this.p6h=FbPlayFlow_1.FbPlayFlow.Create(this.FbDataInternal.failedFlow())),this.p6h}get SuccessFlow(){return this.v6h||(this.v6h=!0,this.y6h=FbPlayFlow_1.FbPlayFlow.Create(this.FbDataInternal.successFlow())),this.y6h}}exports.FbNpcUiInteractOnGramophone=FbNpcUiInteractOnGramophone;
//# sourceMappingURL=FbNpcUiInteractOnGramophone.js.map