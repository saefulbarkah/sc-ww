
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FbMonsterGachaItemComponent=void 0;class FbMonsterGachaItemComponent{constructor(t){this.FbDataInternal=t,this.p_h=!1,this.v_h=!1,this.XHh=!1,this.YHh=void 0,this.zHh=!1,this.JHh=void 0,this.Qvh=!1,this.Kvh=void 0}static Create(t){if(t)return new FbMonsterGachaItemComponent(t)}get Disabled(){return this.p_h||(this.p_h=!0,this.v_h=this.FbDataInternal.disabled()),this.v_h}get MaterialDataPath(){return this.XHh||(this.XHh=!0,this.YHh=this.FbDataInternal.materialDataPath()),this.YHh}get MonsterType(){return this.zHh||(this.zHh=!0,this.JHh=this.FbDataInternal.monsterType()),this.JHh}get MonsterEntityIds(){if(!this.Qvh){this.Qvh=!0,this.Kvh=new Array;var s=this.FbDataInternal.monsterEntityIdsLength();if(s)for(let t=0;t<s;++t)this.Kvh.push(this.FbDataInternal.monsterEntityIds(t))}return this.Kvh}}exports.FbMonsterGachaItemComponent=FbMonsterGachaItemComponent;
//# sourceMappingURL=FbMonsterGachaItemComponent.js.map