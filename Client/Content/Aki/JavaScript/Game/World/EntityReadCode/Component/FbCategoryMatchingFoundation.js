
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbCategoryMatchingFoundation=void 0;const fb_component_1=require("../../../../Game/World/EntityFb/fb-component"),FbCategoryMatchingConfig_1=require("./FbCategoryMatchingConfig");class FbCategoryMatchingFoundation{constructor(t){this.FbDataInternal=t,this.$1h=!1,this.f8o=void 0,this.s2h=!1,this.a2h=0,this.h2h=!1,this.l2h=void 0}static Create(t){if(t)return new FbCategoryMatchingFoundation(t)}get Type(){return this.$1h||(this.$1h=!0,this.f8o=this.FbDataInternal.type()),this.f8o}get InitMatchEntity(){return this.s2h||(this.s2h=!0,this.a2h=this.FbDataInternal.initMatchEntity()),this.a2h}get MatchingConfigs(){if(!this.h2h){this.h2h=!0,this.l2h=new Array;var i=this.FbDataInternal.matchingConfigsLength();if(i)for(let t=0;t<i;++t){var e=this.FbDataInternal.matchingConfigs(t,new fb_component_1.CategoryMatchingConfig);this.l2h.push(FbCategoryMatchingConfig_1.FbCategoryMatchingConfig.Create(e))}}return this.l2h}}exports.FbCategoryMatchingFoundation=FbCategoryMatchingFoundation;
//# sourceMappingURL=FbCategoryMatchingFoundation.js.map