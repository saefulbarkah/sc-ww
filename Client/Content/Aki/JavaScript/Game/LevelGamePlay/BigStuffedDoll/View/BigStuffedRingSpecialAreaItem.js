
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BigStuffedRingSpecialAreaItem=void 0;const UE=require("ue"),Log_1=require("../../../../Core/Common/Log"),Rotator_1=require("../../../../Core/Utils/Math/Rotator"),MathUtils_1=require("../../../../Core/Utils/MathUtils"),ModelManager_1=require("../../../Manager/ModelManager"),LguiUtil_1=require("../../../Module/Util/LguiUtil"),BigStuffedDefine_1=require("../BigStuffedDefine"),BigStuffedRingSubItem_1=require("./BigStuffedRingSubItem");class BigStuffedRingSpecialAreaItem extends BigStuffedRingSubItem_1.BigStuffedRingSubItem{constructor(t,i,e){super(t,i),this.Qfl=new Map,this.Kfl=new Map,this.$fl=new Map,this.zPl=new UE.FName("Progress"),this.Xfl=void 0,this.Wfl=[],this.mbl=void 0,this.Type=2,this.mbl=e}OnStart(){super.OnStart(),this.TextureRing.SetUIActive(!1),this.SpawnAllContinuousArea()}OnBeforeDestroy(){this.Qfl.clear(),this.Kfl.clear(),this.$fl.clear(),this.Wfl.length=0,super.OnBeforeDestroy()}SpawnAllContinuousArea(){this.Yfl(),this.Cbl(),this.gbl(),this.fbl()}SpawnSingleContinuousArea(t){this.pbl(t),this.vbl(t,1!==this.RingConfig.MultiBoxGroup),this.Mbl(t),this.Sbl(t)}Cbl(){var i=this.mbl.GetValidAreas(),t=(this.mbl.GetGoodAreas().clear(),0===this.RingConfig.InvalidBox.length);if(t)for(let t=0;t<this.RingConfig.MultiBoxGroup;t++)this.vbl(t,1!==this.RingConfig.MultiBoxGroup);else for(let t=0;t<i.length;t++)this.vbl(t,!1)}vbl(t,i){this.mbl.RemoveGoodArea(t);var e,s=this.mbl.GetValidAreas();0===this.RingConfig.InvalidBox.length?i?(i=BigStuffedDefine_1.BIGSTUFFEDDOLL_RINGCELLCOUNT/this.RingConfig.MultiBoxGroup,Number.isInteger(i)?(i=this.tvl(this.RingConfig.RandomBox),e=BigStuffedDefine_1.BIGSTUFFEDDOLL_RINGCELLCOUNT/this.RingConfig.MultiBoxGroup,e=this.ovl(t*e+t+1,t*e-i),this.ivl(t,0,e,i)):Log_1.Log.CheckError()&&Log_1.Log.Error("SceneGameplay",18,"[BigStuffedDoll]格子扩展配置有误：不可被等分",["配置组数",this.RingConfig.MultiBoxGroup])):(this.Xfl?(e=(this.Xfl.StartCellIndex+BigStuffedDefine_1.BIGSTUFFEDDOLL_RINGCELLCOUNT/2)%BigStuffedDefine_1.BIGSTUFFEDDOLL_RINGCELLCOUNT,i=this.tvl(this.RingConfig.RandomBox),this.ivl(t,0,e,i)):this.ybl(t,s[t]),e=this.mbl.GetGoodArea(t),this.Xfl=new BigStuffedDefine_1.ContinuousArea(t,e.StartCellIndex,e.EndCellIndex,e.ArrowDirection)):t<s.length&&this.ybl(t,s[t])}ybl(t,i){var e=i.StartCellIndex,i=i.EndCellIndex,s=(0,BigStuffedDefine_1.calculateCellSize)(e,i),h=this.tvl(this.RingConfig.RandomBox);s<h?this.ivl(t,0,e,s):e<=i?(i=this.ovl(e,i-h+1),this.ivl(t,0,i,h)):(i=this.ovl(e,e+s-1-h+1)%BigStuffedDefine_1.BIGSTUFFEDDOLL_RINGCELLCOUNT,this.ivl(t,0,i,h))}gbl(){var t;if(this.mbl.GetPerfectAreas().clear(),0!==this.RingConfig.PerfectBox)for([t]of this.mbl.GetGoodAreas())this.Mbl(t)}Mbl(t){this.mbl.RemovePerfectArea(t);var i,e,s,h=this.RingConfig.PerfectBox;0!==h&&((i=this.mbl.GetGoodArea(t))?(s=i.StartCellIndex,e=i.EndCellIndex,e=(0,BigStuffedDefine_1.calculateCellSize)(s,e),s=this.ovl(s,s+e-h)%BigStuffedDefine_1.BIGSTUFFEDDOLL_RINGCELLCOUNT,this.Ebl()?this.ivl(i.ContinuousIndex,2,s,h):this.ivl(i.ContinuousIndex,1,s,h)):Log_1.Log.CheckError()&&Log_1.Log.Error("SceneGameplay",18,"[BigStuffedDoll]生成完美格子错误：找不到连续区域",["连续区域索引",t]))}Ebl(){var t,i,e=ModelManager_1.ModelManager.BigStuffedDollModel.CurrentScore;let s=0;for([t,i]of this.RingConfig.BonusRate){if(!(e>=t))break;s=i}return 0!==s&&this.ovl(0,100)<=s}fbl(){for(var[,t]of this.Kfl)t.SetAsLastHierarchy();for(var[,i]of this.$fl)i.SetAsLastHierarchy()}Sbl(t){this.Kfl.get(t)?.SetAsLastHierarchy(),this.$fl.get(t)?.SetAsLastHierarchy()}ivl(t,i,e,s){let h=this.Wfl.pop();h||(r=LguiUtil_1.LguiUtil.DuplicateActor(this.TextureRing.GetOwner(),this.RootItem),h=r.GetComponentByClass(UE.UITexture.StaticClass()));var r=(e-1)*BigStuffedDefine_1.SINGLECELL_ANGLE,a=(h.SetUIRelativeRotation(Rotator_1.Rotator.Create(0,-r,0).ToUeRotator()),h.SetFillAmount(s/BigStuffedDefine_1.BIGSTUFFEDDOLL_RINGCELLCOUNT),h.SetCustomMaterialScalarParameter(this.zPl,s/BigStuffedDefine_1.BIGSTUFFEDDOLL_RINGCELLCOUNT),(e+s-1)%BigStuffedDefine_1.BIGSTUFFEDDOLL_RINGCELLCOUNT);switch(i){case 0:this.mbl.AddGoodArea(t,e,a),this.Qfl.set(t,h),h.SetColor(UE.Color.FromHex("#ECEACF"));break;case 1:this.mbl.AddPerfectArea(t,e,a),this.Kfl.set(t,h),h.SetColor(UE.Color.FromHex("#FFBF3E"));break;case 2:this.mbl.AddBonusArea(t,e,a),this.$fl.set(t,h),h.SetColor(UE.Color.FromHex("#FC6F07"))}h.SetUIActive(!0)}tvl(t){let i=3;return i=2===t.length?this.ovl(t[0],t[1]):i}ovl(t,i){return Math.min(i,Math.floor(MathUtils_1.MathUtils.GetRandomRange(t,i+1)))}Yfl(){for(var[,t]of this.Qfl)this.Wfl.push(t),t.SetUIActive(!1);this.Qfl.clear();for(var[,i]of this.Kfl)this.Wfl.push(i),i.SetUIActive(!1);this.Kfl.clear();for(var[,e]of this.$fl)this.Wfl.push(e),e.SetUIActive(!1);this.$fl.clear()}pbl(t){var i=this.Qfl.get(t),i=(i&&(this.Wfl.push(i),i.SetUIActive(!1),this.Qfl.delete(t)),this.Kfl.get(t)),i=(i&&(this.Wfl.push(i),i.SetUIActive(!1),this.Qfl.delete(t)),this.$fl.get(t));i&&(this.Wfl.push(i),i.SetUIActive(!1),this.Qfl.delete(t))}}exports.BigStuffedRingSpecialAreaItem=BigStuffedRingSpecialAreaItem;
//# sourceMappingURL=BigStuffedRingSpecialAreaItem.js.map