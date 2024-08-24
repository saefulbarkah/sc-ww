
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RoleDataBase=void 0;const Log_1=require("../../../../Core/Common/Log"),ConfigManager_1=require("../../../Manager/ConfigManager"),ModelManager_1=require("../../../Manager/ModelManager"),AttrListScrollData_1=require("../View/ViewData/AttrListScrollData"),RoleAttributeData_1=require("./Module/RoleAttributeData"),RoleAudioData_1=require("./Module/RoleAudioData"),RoleFavorData_1=require("./Module/RoleFavorData"),RoleLevelData_1=require("./Module/RoleLevelData"),RolePhantomData_1=require("./Module/RolePhantomData"),RoleResonanceData_1=require("./Module/RoleResonanceData"),RoleSkillData_1=require("./Module/RoleSkillData");class RoleDataBase{constructor(e){this.RoleModelConfig=void 0,this.t_o=new Map,this.i_o=[RoleLevelData_1.RoleLevelData,RoleAttributeData_1.RoleAttributeData,RoleSkillData_1.RoleSkillData,RoleResonanceData_1.RoleResonanceData,RolePhantomData_1.RolePhantomData,RoleAudioData_1.RoleAudioData,RoleFavorData_1.RoleFavorData],this.SortAttrList=(e,a)=>{var t=0!==e.Priority,r=0!==a.Priority;return t&&r?e.Priority-a.Priority:t?-1:r?1:e.Id-a.Id},this.Id=e,this.Name=ConfigManager_1.ConfigManager.RoleConfig.GetRoleName(this.GetRoleConfig().Name),this.o_o()}o_o(){var e=this.GetRoleId();for(const a of this.i_o)this.t_o.set(a,new a(e))}GetLevelData(){return this.t_o.get(RoleLevelData_1.RoleLevelData)}GetAttributeData(){return this.t_o.get(RoleAttributeData_1.RoleAttributeData)}GetSkillData(){return this.t_o.get(RoleSkillData_1.RoleSkillData)}GetResonanceData(){return this.t_o.get(RoleResonanceData_1.RoleResonanceData)}GetPhantomData(){return this.t_o.get(RolePhantomData_1.RolePhantomData)}GetAudioData(){return this.t_o.get(RoleAudioData_1.RoleAudioData)}GetFavorData(){return this.t_o.get(RoleFavorData_1.RoleFavorData)}GetElementInfo(){var e=this.GetRoleConfig();return ConfigManager_1.ConfigManager.ElementInfoConfig.GetElementInfo(e.ElementId)}GetQualityConfig(){var e=this.GetRoleConfig();return ConfigManager_1.ConfigManager.RoleConfig.GetRoleQualityInfo(e.QualityId)}GetRoleConfig(){return ConfigManager_1.ConfigManager.RoleConfig.GetRoleConfig(this.GetRoleId())}GetRoleSkillTreeConfig(){var e=ConfigManager_1.ConfigManager.RoleConfig.GetRoleConfig(this.GetRoleId());if(e)return ConfigManager_1.ConfigManager.RoleSkillConfig.GetSkillTreeNodeListByGroupId(e.SkillTreeGroupId)}GetDataId(){return this.Id}GetShowAttrList(){var t=new Array,e=ConfigManager_1.ConfigManager.PropertyIndexConfig.GetPropertyIndexList();if(e){var a=ModelManager_1.ModelManager.SceneTeamModel.GetTeamItem(this.Id,{ParamType:0,OnlyMyRole:!0}),r=a?a.EntityHandle.Entity.GetComponent(158):void 0;for(const i of e)if(i.IsShow){let e=0,a=0;a=r?(e=r.GetBaseValue(i.Id)??0,r.GetCurrentValue(i.Id)-e??0):(o=this.GetAttributeData(),e=o.GetRoleBaseAttr(i.Id),o.GetRoleAddAttr(i.Id));var o=new AttrListScrollData_1.AttrListScrollData(i.Id,e,a,i.Priority,!1,0);t.push(o)}t.sort(this.SortAttrList)}return t}GetShowAttributeValueById(e){var a,t=ModelManager_1.ModelManager.SceneTeamModel.GetTeamItem(this.Id,{ParamType:0,OnlyMyRole:!0}),t=t?t.EntityHandle.Entity.GetComponent(158):void 0;let r=0;return t?0===(r=t.GetCurrentValue(e))&&Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Character",44,"角色界面获取实体属性值为0",["id",e]):(a=(t=this.GetAttributeData()).GetRoleBaseAttr(e),t=t.GetRoleAddAttr(e),0===(r=a+t)&&Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Character",44,"角色界面从服务器获取的属性值为0",["id",e],["baseAttr",a],["addAttr",t])),r}GetBaseAttributeValueById(e){var a=ModelManager_1.ModelManager.SceneTeamModel.GetTeamItem(this.Id,{ParamType:0,OnlyMyRole:!0}),a=a?a.EntityHandle.Entity.GetComponent(158):void 0;let t=0;return t=a?a.GetBaseValue(e):this.GetAttributeData().GetRoleBaseAttr(e)}TryRemoveNewFlag(){}}exports.RoleDataBase=RoleDataBase;
//# sourceMappingURL=RoleDataBase.js.map