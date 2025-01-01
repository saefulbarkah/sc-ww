
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Spring25ConfigContext=void 0;const SpringChatById_1=require("../../../../../../Core/Define/ConfigQuery/SpringChatById"),SpringResourceByRoleType_1=require("../../../../../../Core/Define/ConfigQuery/SpringResourceByRoleType"),SpringRewardAll_1=require("../../../../../../Core/Define/ConfigQuery/SpringRewardAll"),SpringSignAll_1=require("../../../../../../Core/Define/ConfigQuery/SpringSignAll"),SpringSignById_1=require("../../../../../../Core/Define/ConfigQuery/SpringSignById"),Spring25Define_1=require("../Spring25Define");class Spring25ConfigContext{constructor(e){this.H5l=void 0,this.RGl=void 0,this.UGl=void 0,this.H5l=e}get DGl(){if(void 0===this.RGl){this.RGl=new Map;var e=SpringSignAll_1.configSpringSignAll.GetConfigList();if(e){var i=this.H5l.CurrentActivityId;for(const t of e)i===t.ActivityId&&this.RGl.set(t.Id,t)}}return this.RGl}get AGl(){if(void 0===this.UGl){this.UGl=new Map;var e=SpringRewardAll_1.configSpringRewardAll.GetConfigList();if(e){var i=this.H5l.CurrentActivityId;for(const t of e)i===t.ActivityId&&this.UGl.set(t.Id,t)}}return this.UGl}Dispose(){this.UGl?.clear(),this.UGl=void 0,this.RGl?.clear(),this.RGl=void 0}PGl(e){e=this.DGl.get(e)?.ResourceTypeId;if(void 0!==e){e=SpringResourceByRoleType_1.configSpringResourceByRoleType.GetConfigList(e);if(void 0!==e)return e[0]}}get TaskCfgMap(){return this.AGl}get SignCfgMap(){return this.DGl}get TaskCount(){return this.TaskCfgMap.size}get SignCount(){return this.DGl.size}StartChatCfgByGender(e){return 1===e?SpringChatById_1.configSpringChatById.GetConfig(Spring25Define_1.START_MALE_CHAT_CONFIG_ID):SpringChatById_1.configSpringChatById.GetConfig(Spring25Define_1.START_FEMALE_CHAT_CONFIG_ID)}GetChatConfigBySignId(i,t){i=this.PGl(i);if(void 0!==i){i=i.DialogDataList;if(!(i.length<2)){let e=0;return e=1===t?i[0]:i[1],SpringChatById_1.configSpringChatById.GetConfig(e)}}}GetLetterContentTextIdBySignId(e){return this.PGl(e)?.LetterContent}GetLetterTitleTextIdBySignId(e){return this.PGl(e)?.LetterTitle}GetLetterTabTextIdBySignId(e){return this.PGl(e)?.LetterTab}GetLetterIconBySignId(e){return this.PGl(e)?.MailIcon}GetRoleNameTextIdBySignId(e){return this.PGl(e)?.RoleName}GetResourceTypeBySignId(e){return SpringSignById_1.configSpringSignById.GetConfig(e)?.ResourceTypeId}GetTaskNameTextIdByTaskId(e){return this.AGl.get(e)?.TaskTitle}GetTaskThresholdByTaskId(e){return this.AGl.get(e)?.TaskThreshold??0}}exports.Spring25ConfigContext=Spring25ConfigContext;
//# sourceMappingURL=Spring25ConfigContext.js.map