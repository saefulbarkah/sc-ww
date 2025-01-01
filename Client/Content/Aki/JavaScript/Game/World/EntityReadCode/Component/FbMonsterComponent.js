
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbMonsterComponent=void 0;const FbBossStateViewConfig_1=require("./FbBossStateViewConfig"),FbMonsterPerformConfig_1=require("./FbMonsterPerformConfig");class FbMonsterComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.$8h=!1,this.X8h=0,this.Y8h=!1,this.z8h=void 0,this.J8h=!1,this.Z8h=void 0,this.ejh=!1,this.tjh=0,this.ijh=!1,this.rjh=void 0}static Create(t){if(t)return new FbMonsterComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get FightConfigId(){return this.$8h||(this.$8h=!0,this.X8h=this.FbDataInternal.fightConfigId()),this.X8h}get BossViewConfig(){return this.Y8h||(this.Y8h=!0,this.z8h=FbBossStateViewConfig_1.FbBossStateViewConfig.Create(this.FbDataInternal.bossViewConfig())),this.z8h}get InitGasTag(){if(!this.J8h){this.J8h=!0,this.Z8h=new Array;var i=this.FbDataInternal.initGasTagLength();if(i)for(let t=0;t<i;++t)this.Z8h.push(this.FbDataInternal.initGasTag(t))}return this.Z8h}get SpecialHateAndSenseConfig(){return this.ejh||(this.ejh=!0,this.tjh=this.FbDataInternal.specialHateAndSenseConfig()),this.tjh}get PerformConfig(){return this.ijh||(this.ijh=!0,this.rjh=FbMonsterPerformConfig_1.FbMonsterPerformConfig.Create(this.FbDataInternal.performConfig())),this.rjh}}exports.FbMonsterComponent=FbMonsterComponent;
//# sourceMappingURL=FbMonsterComponent.js.map