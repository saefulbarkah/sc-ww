
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PcKey=void 0;const GameUtils_1=require("../../../Game/GameUtils");class PcKey{constructor(){this.J7=null,this.z7=0}get Id(){return this.id()}get KeyName(){return this.keyname()}get KeyDescription(){return this.keydescription()}get KeyDisplayName(){return this.keydisplayname()}get FrenchKeyName(){return this.frenchkeyname()}get KeyIconPath(){return this.keyiconpath()}__init(t,e){return this.z7=t,this.J7=e,this}static getRootAsPcKey(t,e){return(e||new PcKey).__init(t.readInt32(t.position())+t.position(),t)}id(){var t=this.J7.__offset(this.z7,4);return t?this.J7.readInt32(this.z7+t):0}keyname(t){var e=this.J7.__offset(this.z7,6),e=e?this.J7.__string(this.z7+e,t):null;return"string"==typeof e&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(e),e}keydescription(t){var e=this.J7.__offset(this.z7,8),e=e?this.J7.__string(this.z7+e,t):null;return"string"==typeof e&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(e),e}keydisplayname(t){var e=this.J7.__offset(this.z7,10),e=e?this.J7.__string(this.z7+e,t):null;return"string"==typeof e&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(e),e}frenchkeyname(t){var e=this.J7.__offset(this.z7,12),e=e?this.J7.__string(this.z7+e,t):null;return"string"==typeof e&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(e),e}keyiconpath(t){var e=this.J7.__offset(this.z7,14),e=e?this.J7.__string(this.z7+e,t):null;return"string"==typeof e&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(e),e}}exports.PcKey=PcKey;
//# sourceMappingURL=PcKey.js.map