
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScratchTicketRoundData=void 0;const MathUtils_1=require("../../../../../../Core/Utils/MathUtils"),TimeUtil_1=require("../../../../../Common/TimeUtil"),ConfigManager_1=require("../../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../../Manager/ModelManager"),RewardItemData_1=require("../../../../ItemReward/RewardData/RewardItemData"),ActivityScratchTicketDefine_1=require("../ActivityScratchTicketDefine"),ScratchTicketCellData_1=require("./ScratchTicketCellData");class ScratchTicketRoundData{constructor(){this.Id=0,this.kol=0,this.Config=void 0,this.Nol=[],this.Y2i=0,this.Fol=[],this.Vol=0,this.jll=new Map,this.f7=0,this.Fvl=void 0}Init(t){this.Id=t.Uol,this.Config=ConfigManager_1.ConfigManager.ActivityScratchTicketConfig.GetScratchTicketRoundConfig(this.Id),void 0!==this.Config&&(this.f7=this.Config.Size*this.Config.Size,this.kol=Number(MathUtils_1.MathUtils.LongToBigInt(t.yzs)),this.Hol(),this.Wll(),this.UpdateCellDataReward(t.ikl),this.UpdateRemainReward(t.di1))}Hol(){this.Nol=[];for(let t=0;t<this.f7;t++){var e=new ScratchTicketCellData_1.ScratchTicketCellData(t);this.Nol.push(e)}}Wll(){this.jll.clear(),this.Config.RewardSortList.forEach((t,e)=>{this.jll.set(t,e)})}UpdateCellDataReward(t){for(const i of Object.keys(t)){var e=Number.parseInt(i);e<0||e>=this.Nol.length||(this.Nol[e].SetRewardItem(t[i]),this.Y2i++)}}UpdateRemainReward(t){this.Fol=[];for(const r of Object.keys(t)){var e=Number.parseInt(r),i=t[r];this.Fol.push([{ItemId:e,IncId:0},i])}this.Fol.sort((t,e)=>{return(this.jll.get(t[0].ItemId)??Number.MAX_VALUE)-(this.jll.get(e[0].ItemId)??Number.MAX_VALUE)})}UpdateRoundState(t){TimeUtil_1.TimeUtil.GetServerTimeStamp()<=this.kol||2!==t?this.Vol=0:this.Y2i>=this.Config.Size*this.Config.Size?this.Vol=2:this.Vol=1}GetUnlockTime(){return this.kol}GetPreRoundState(){var t=ModelManager_1.ModelManager.ActivityScratchTicketModel.GetScratchRoundData(this.Config.PreRoundId);return void 0===t?2:t.GetRoundState()}GetRoundState(){return this.Vol}GetCellDataList(){return this.Nol}GetRemainRewardList(){return this.Fol}GetRewardDataList(t){var e=[];for(const s of Object.keys(t)){var i=Number.parseInt(s),r=t[s],i=new RewardItemData_1.RewardItemData(i,r);e.push(i)}return e.sort((t,e)=>{return(this.jll.get(t.ConfigId)??Number.MAX_VALUE)-(this.jll.get(e.ConfigId)??Number.MAX_VALUE)}),e}GetRewardResultList(t,e){if(!this.jol(t))return[];switch(e){case 0:return this.Wol(t,ActivityScratchTicketDefine_1.FIRST_SHOW_REWARD_INTERVAL,"HamsterA");case 1:return this.Qol(t);case 3:return this.Kol(t);case 2:return this.$ol(t);case 5:return this.Xol(t);case 4:return this.Yol(t);case 6:return this.zol(t);default:return[]}}Wol(t,e,i){var r=[];return this.jol(t)&&(t=this.Jol(t,0,!0),t=this.s0l([t],e,i),r.push(t)),r}Qol(t){var e=this.Wol(t,ActivityScratchTicketDefine_1.HAMSTER_B_SEQUENCE_INTERVAL,"HamsterB");return this.a0l(e,t,!1),this.a0l(e,t,!0),e}a0l(t,e,i){var r=[];this.Zol(r,e,1,i),this.Zol(r,e,2,i),this.Zol(r,e,3,i),this.Zol(r,e,4,i),r.length<=0||(e=this.l0l(!1,!i),i=this.s0l(r,e),t.push(i))}Yol(t){var e=this.Wol(t,ActivityScratchTicketDefine_1.HAMSTER_B_SEQUENCE_INTERVAL,"HamsterB");return this.h0l(e,t,!1),this.h0l(e,t,!0),e}h0l(t,e,i){var r=[];this.Zol(r,e,1,i),this.Zol(r,e,2,i),this.Zol(r,e,3,i),this.Zol(r,e,4,i),this.Zol(r,e,5,i),this.Zol(r,e,6,i),this.Zol(r,e,7,i),this.Zol(r,e,8,i),r.length<=0||(e=this.l0l(!1,!i),i=this.s0l(r,e),t.push(i))}Kol(t){var e=this.Wol(t,ActivityScratchTicketDefine_1.HAMSTER_B_SEQUENCE_INTERVAL,"HamsterB");return this._0l(e,t,!1),this._0l(e,t,!0),e}_0l(t,e,i){var r=[];this.u0l(r,e,1,i),this.u0l(r,e,2,i),this.tnl(t,r,i)}$ol(t){var e=this.Wol(t,ActivityScratchTicketDefine_1.HAMSTER_B_SEQUENCE_INTERVAL,"HamsterB");return this.c0l(e,t,!1),this.oSl(e,ActivityScratchTicketDefine_1.TOUCH_BOUNDARY_INTERVAL,"InnerGlow"),this.c0l(e,t,!0),e}c0l(t,e,i){var r=[];this.u0l(r,e,3,i),this.u0l(r,e,4,i),this.tnl(t,r,i)}Xol(t){var e=this.Wol(t,ActivityScratchTicketDefine_1.HAMSTER_B_SEQUENCE_INTERVAL,"HamsterB");return this.m0l(e,t,!1),this.oSl(e,ActivityScratchTicketDefine_1.TOUCH_BOUNDARY_INTERVAL,"InnerGlow"),this.m0l(e,t,!0),e}m0l(t,e,i){var r=[];this.u0l(r,e,3,i),this.u0l(r,e,4,i),this.u0l(r,e,1,i),this.u0l(r,e,2,i),this.tnl(t,r,i)}zol(t){t=this.Wol(t,ActivityScratchTicketDefine_1.HAMSTER_C_SEQUENCE_INTERVAL,"HamsterC");return this.d0l(t,!1),this.oSl(t,ActivityScratchTicketDefine_1.TOUCH_BOUNDARY_INTERVAL,"InnerGlow"),this.d0l(t,!0),t}d0l(t,e){var i,r,s=[];for(const a of this.GetCellDataList())e&&!a.IsLock()||(i=this.Jol(a.Index,0,!0),s.push(i));0<s.length&&(r=this.l0l(!1,!e),r=this.s0l(s,r),t.push(r))}tnl(t,e,i){let r=e;for(var s=this.l0l(!1,!i);0<r.length;){var a=this.s0l(r,s),h=(t.push(a),[]);for(const n of r)this.u0l(h,n.Index,n.DirectionType,i);r=h}}u0l(t,e,i,r){let s=e;do{s=this.inl(s,i);var a=this.GetCellDataByIndex(s);if(void 0!==a)if(!r||a.IsLock())return a=this.Jol(s,i,r),void t.push(a)}while(0<=s)}Zol(t,e,i,r){var e=this.inl(e,i),s=this.GetCellDataByIndex(e);void 0===s||r&&!s.IsLock()||(s=this.Jol(e,i,r),t.push(s))}oSl(t,e,i){e=this.s0l([],e,i);t.push(e)}GetDiagonalResultList(){if(void 0===this.Fvl){this.Fvl=[];var e=this.Config.Size;for(let t=0;t<2*e;t++)this.Vvl(this.Fvl,t)}return this.Fvl}Vvl(t,e){var i=[];for(let t=0;t<=e;t++){var r=e-t,r=this.Hvl(t,r);r<0||i.push({Index:r,DirectionType:0,SequenceType:7})}var s=this.s0l(i,ActivityScratchTicketDefine_1.REVEAL_DELAY_INTERVAL);t.push(s)}jol(t,e=0){return 0<=t&&t<this.f7}s0l(t,e,i="Empty"){return{RewardList:t,DelayInterval:e,SequenceName:i}}Jol(t,e,i){return{Index:t,DirectionType:e,SequenceType:i?ActivityScratchTicketDefine_1.directionToSequenceMap.get(e):6}}l0l(t,e){return t?ActivityScratchTicketDefine_1.FIRST_SHOW_REWARD_INTERVAL:e?ActivityScratchTicketDefine_1.CELL_SHOW_WARNING_INTERVAL:ActivityScratchTicketDefine_1.CELL_SHOW_REWRD_INTERVAL}GetCellDataByIndex(t){if(this.jol(t))return this.Nol[t]}Hvl(t,e){var i=this.Config.Size;return e<0||i<=e||t<0||i<=t?-1:t*i+e}inl(t,e){var i=this.Config.Size;let r=t%i,s=Math.floor(t/i);switch(e){case 0:break;case 3:s--;break;case 4:s++;break;case 1:r--;break;case 2:r++;break;case 5:s--,r--;break;case 6:s++,r--;break;case 7:s--,r++;break;case 8:s++,r++}return this.Hvl(s,r)}}exports.ScratchTicketRoundData=ScratchTicketRoundData;
//# sourceMappingURL=ScratchTicketRoundData.js.map