
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PlayerStateRestriction=void 0;const GameUtils_1=require("../../../Game/GameUtils");class PlayerStateRestriction{constructor(){this.J7=null,this.z7=0}get Id(){return this.id()}get Type(){return this.type()}get IncludedTags(){return GameUtils_1.GameUtils.ConvertToArray(this.includedtagsLength(),this.includedtags,this)}get ExcludedTags(){return GameUtils_1.GameUtils.ConvertToArray(this.excludedtagsLength(),this.excludedtags,this)}get CreatorId(){return this.creatorid()}get Remark(){return this.remark()}__init(t,s){return this.z7=t,this.J7=s,this}static getRootAsPlayerStateRestriction(t,s){return(s||new PlayerStateRestriction).__init(t.readInt32(t.position())+t.position(),t)}id(){var t=this.J7.__offset(this.z7,4);return t?this.J7.readInt32(this.z7+t):0}type(t){var s=this.J7.__offset(this.z7,6),s=s?this.J7.__string(this.z7+s,t):null;return"string"==typeof s&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(s),s}GetIncludedtagsAt(t){return this.includedtags(t)}includedtags(t,s){var e=this.J7.__offset(this.z7,8),e=e?this.J7.__string(this.J7.__vector(this.z7+e)+4*t,s):null;return"string"==typeof e&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(e),e}includedtagsLength(){var t=this.J7.__offset(this.z7,8);return t?this.J7.__vector_len(this.z7+t):0}GetExcludedtagsAt(t){return this.excludedtags(t)}excludedtags(t,s){var e=this.J7.__offset(this.z7,10),e=e?this.J7.__string(this.J7.__vector(this.z7+e)+4*t,s):null;return"string"==typeof e&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(e),e}excludedtagsLength(){var t=this.J7.__offset(this.z7,10);return t?this.J7.__vector_len(this.z7+t):0}creatorid(){var t=this.J7.__offset(this.z7,12);return t?this.J7.readInt32(this.z7+t):0}remark(t){var s=this.J7.__offset(this.z7,14),s=s?this.J7.__string(this.z7+s,t):null;return"string"==typeof s&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(s),s}}exports.PlayerStateRestriction=PlayerStateRestriction;
//# sourceMappingURL=PlayerStateRestriction.js.map