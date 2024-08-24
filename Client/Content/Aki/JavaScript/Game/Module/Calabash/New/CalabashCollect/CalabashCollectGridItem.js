
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CalabashCollectGridItem=void 0;const UE=require("ue"),ConfigManager_1=require("../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../Manager/ModelManager"),PhantomBattleFettersViewItem_1=require("../../../Phantom/PhantomBattle/View/PhantomBattleFettersViewItem"),GridProxyAbstract_1=require("../../../Util/Grid/GridProxyAbstract"),GenericLayout_1=require("../../../Util/Layout/GenericLayout"),LguiUtil_1=require("../../../Util/LguiUtil"),CalabashCollectStarItem_1=require("./CalabashCollectStarItem");class CalabashCollectGridItem extends GridProxyAbstract_1.GridProxyAbstract{constructor(){super(...arguments),this.Pe=void 0,this.ppt=void 0,this.$be=void 0,this.CanToggleChange=void 0,this.OnToggleClick=void 0,this.zbe=()=>new CalabashCollectStarItem_1.CalabashCollectStarItem}OnRegisterComponent(){this.ComponentRegisterInfos=[[0,UE.UIExtendToggle],[1,UE.UIItem],[2,UE.UIText],[3,UE.UIItem],[4,UE.UIHorizontalLayout]];this.BtnBindInfo=[[0,()=>{this.OnToggleClick?.(this.GridIndex)}]]}async OnBeforeStartAsync(){this.GetExtendToggle(0)?.CanExecuteChange.Bind(()=>!this.CanToggleChange||this.CanToggleChange(this.GridIndex)),this.ppt=new PhantomBattleFettersViewItem_1.VisionDetailMonsterItem,await this.ppt?.CreateThenShowByActorAsync(this.GetItem(1).GetOwner()),this.ppt.SetToggleInteractive(!1),this.$be=new GenericLayout_1.GenericLayout(this.GetHorizontalLayout(4),this.zbe)}Refresh(t,e,i){var s=(this.Pe=t).DevelopRewardData.MonsterId,a=[];let r=0;for(const o of ModelManager_1.ModelManager.CalabashModel.GetCalabashDevelopRewardInfoData(s)){var h=o.IsUnlock;a.push(h),h&&r++}t.UnlockData?LguiUtil_1.LguiUtil.SetLocalTextNew(this.GetText(2),t.SkillName):(s=ConfigManager_1.ConfigManager.CalabashConfig.GetCalabashDevelopRewardByMonsterId(s).MonsterNumber,this.GetText(2)?.SetText(s+"???")),this.ppt.Refresh(new PhantomBattleFettersViewItem_1.VisionDetailMonsterItemData(t.DevelopRewardData.MonsterId,r)),this.$be?.RefreshByData(a);s=e?1:0;this.GetExtendToggle(0)?.SetToggleStateForce(s),1==s?this.OnSelected(!1):this.RefreshNewItem()}OnSelected(t){this.Pe?.UnlockData&&(ModelManager_1.ModelManager.CalabashModel?.RecordMonsterId(this.Pe.DevelopRewardData.MonsterId),this.RefreshNewItem()),this.GetExtendToggle(0).SetToggleState(1)}OnDeselected(t){this.GetExtendToggle(0)?.SetToggleState(0)}RefreshNewItem(){var t=ModelManager_1.ModelManager.CalabashModel.CheckMonsterIdInRecord(this.Pe.DevelopRewardData.MonsterId);this.GetItem(3).SetUIActive(this.Pe.UnlockData&&!t)}}exports.CalabashCollectGridItem=CalabashCollectGridItem;
//# sourceMappingURL=CalabashCollectGridItem.js.map