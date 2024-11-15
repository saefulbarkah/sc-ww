
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GameplayCue=void 0;const GameUtils_1=require("../../../Game/GameUtils"),Vector_1=require("./SubType/Vector");class GameplayCue{constructor(){this.J7=null,this.z7=0}get Id(){return this.id()}get Path(){return this.path()}get CueType(){return this.cuetype()}get Comp(){return this.comp()}get CompName(){return this.compname()}get Socket(){return this.socket()}get Location(){return this.location()}get Rotation(){return this.rotation()}get Scale(){return this.scale()}get LocRule(){return this.locrule()}get RotaRule(){return this.rotarule()}get SclRule(){return this.sclrule()}get EndRule(){return this.endrule()}get Magni(){return this.magni()}get AttrId(){return this.attrid()}get Tag(){return this.tag()}get Max(){return this.max()}get Min(){return this.min()}get bListenAttr(){return this.blistenattr()}get bSoftFollow(){return this.bsoftfollow()}get bLockRevolution(){return this.blockrevolution()}get LockRotation(){return this.lockrotation()}get LockCamera(){return this.lockcamera()}get InterpSpeed(){return this.interpspeed()}get FarthestDistance(){return this.farthestdistance()}get FaultTolerance(){return this.faulttolerance()}get TargetScaleUp(){return GameUtils_1.GameUtils.ConvertToArray(this.targetscaleupLength(),this.targetscaleup,this)}get Resources(){return GameUtils_1.GameUtils.ConvertToArray(this.resourcesLength(),this.resources,this)}get Parameters(){return GameUtils_1.GameUtils.ConvertToArray(this.parametersLength(),this.parameters,this)}get Group(){return this.group()}get Priority(){return this.priority()}__init(t,s){return this.z7=t,this.J7=s,this}static getRootAsGameplayCue(t,s){return(s||new GameplayCue).__init(t.readInt32(t.position())+t.position(),t)}id(){var t=this.J7.__offset(this.z7,4);return t?this.J7.readFloat64(this.z7+t):0}path(t){var s=this.J7.__offset(this.z7,6),s=s?this.J7.__string(this.z7+s,t):null;return"string"==typeof s&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(s),s}cuetype(){var t=this.J7.__offset(this.z7,8);return t?this.J7.readInt32(this.z7+t):1}comp(){var t=this.J7.__offset(this.z7,10);return t?this.J7.readInt32(this.z7+t):0}compname(t){var s=this.J7.__offset(this.z7,12),s=s?this.J7.__string(this.z7+s,t):null;return"string"==typeof s&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(s),s}socket(t){var s=this.J7.__offset(this.z7,14),s=s?this.J7.__string(this.z7+s,t):null;return"string"==typeof s&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(s),s}location(t){var s=this.J7.__offset(this.z7,16);return s?(t||new Vector_1.Vector).__init(this.J7.__indirect(this.z7+s),this.J7):null}rotation(t){var s=this.J7.__offset(this.z7,18);return s?(t||new Vector_1.Vector).__init(this.J7.__indirect(this.z7+s),this.J7):null}scale(t){var s=this.J7.__offset(this.z7,20);return s?(t||new Vector_1.Vector).__init(this.J7.__indirect(this.z7+s),this.J7):null}locrule(){var t=this.J7.__offset(this.z7,22);return t?this.J7.readInt32(this.z7+t):0}rotarule(){var t=this.J7.__offset(this.z7,24);return t?this.J7.readInt32(this.z7+t):0}sclrule(){var t=this.J7.__offset(this.z7,26);return t?this.J7.readInt32(this.z7+t):0}endrule(){var t=this.J7.__offset(this.z7,28);return t?this.J7.readInt32(this.z7+t):0}magni(){var t=this.J7.__offset(this.z7,30);return t?this.J7.readInt32(this.z7+t):0}attrid(){var t=this.J7.__offset(this.z7,32);return t?this.J7.readInt32(this.z7+t):0}tag(t){var s=this.J7.__offset(this.z7,34),s=s?this.J7.__string(this.z7+s,t):null;return"string"==typeof s&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(s),s}max(){var t=this.J7.__offset(this.z7,36);return t?this.J7.readInt32(this.z7+t):1e4}min(){var t=this.J7.__offset(this.z7,38);return t?this.J7.readInt32(this.z7+t):0}blistenattr(){var t=this.J7.__offset(this.z7,40);return!!t&&!!this.J7.readInt8(this.z7+t)}bsoftfollow(){var t=this.J7.__offset(this.z7,42);return!!t&&!!this.J7.readInt8(this.z7+t)}blockrevolution(){var t=this.J7.__offset(this.z7,44);return!!t&&!!this.J7.readInt8(this.z7+t)}lockrotation(t){var s=this.J7.__offset(this.z7,46);return s?(t||new Vector_1.Vector).__init(this.J7.__indirect(this.z7+s),this.J7):null}lockcamera(){var t=this.J7.__offset(this.z7,48);return!!t&&!!this.J7.readInt8(this.z7+t)}interpspeed(){var t=this.J7.__offset(this.z7,50);return t?this.J7.readInt32(this.z7+t):5}farthestdistance(){var t=this.J7.__offset(this.z7,52);return t?this.J7.readInt32(this.z7+t):100}faulttolerance(t){var s=this.J7.__offset(this.z7,54);return s?(t||new Vector_1.Vector).__init(this.J7.__indirect(this.z7+s),this.J7):null}GetTargetscaleupAt(t){return this.targetscaleup(t)}targetscaleup(t){var s=this.J7.__offset(this.z7,56);return s?this.J7.readFloat32(this.J7.__vector(this.z7+s)+4*t):0}targetscaleupLength(){var t=this.J7.__offset(this.z7,56);return t?this.J7.__vector_len(this.z7+t):0}targetscaleupArray(){var t=this.J7.__offset(this.z7,56);return t?new Float32Array(this.J7.bytes().buffer,this.J7.bytes().byteOffset+this.J7.__vector(this.z7+t),this.J7.__vector_len(this.z7+t)):null}GetResourcesAt(t){return this.resources(t)}resources(t,s){var i=this.J7.__offset(this.z7,58),i=i?this.J7.__string(this.J7.__vector(this.z7+i)+4*t,s):null;return"string"==typeof i&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(i),i}resourcesLength(){var t=this.J7.__offset(this.z7,58);return t?this.J7.__vector_len(this.z7+t):0}GetParametersAt(t){return this.parameters(t)}parameters(t,s){var i=this.J7.__offset(this.z7,60),i=i?this.J7.__string(this.J7.__vector(this.z7+i)+4*t,s):null;return"string"==typeof i&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(i),i}parametersLength(){var t=this.J7.__offset(this.z7,60);return t?this.J7.__vector_len(this.z7+t):0}group(){var t=this.J7.__offset(this.z7,62);return t?this.J7.readInt32(this.z7+t):0}priority(){var t=this.J7.__offset(this.z7,64);return t?this.J7.readInt32(this.z7+t):0}}exports.GameplayCue=GameplayCue;
//# sourceMappingURL=GameplayCue.js.map