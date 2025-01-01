
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbPointGroupByLayer=void 0;const fb_component_1=require("../../../../Game/World/EntityFb/fb-component"),FbParkourPointLayerConfig_1=require("./FbParkourPointLayerConfig"),FbVectorInfo_1=require("../Var/FbVectorInfo");class FbPointGroupByLayer{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this._7h=!1,this.c7h=void 0,this.F7h=!1,this.N7h=void 0}static Create(t){if(t)return new FbPointGroupByLayer(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get Space(){return this._7h||(this._7h=!0,this.c7h=FbVectorInfo_1.FbVectorInfo.Create(this.FbDataInternal.space())),this.c7h}get Layers(){if(!this.F7h){this.F7h=!0,this.N7h=new Array;var r=this.FbDataInternal.layersLength();if(r)for(let t=0;t<r;++t){var i=this.FbDataInternal.layers(t,new fb_component_1.ParkourPointLayerConfig);this.N7h.push(FbParkourPointLayerConfig_1.FbParkourPointLayerConfig.Create(i))}}return this.N7h}}exports.FbPointGroupByLayer=FbPointGroupByLayer;
//# sourceMappingURL=FbPointGroupByLayer.js.map