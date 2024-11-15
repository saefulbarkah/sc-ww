
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PbDataPreload=void 0;const GameUtils_1=require("../../../Game/GameUtils");class PbDataPreload{constructor(){this.J7=null,this.z7=0}get Id(){return this.id()}get MapId(){return this.mapid()}get PbDataId(){return this.pbdataid()}get ActorClass(){return GameUtils_1.GameUtils.ConvertToArray(this.actorclassLength(),this.actorclass,this)}get Animations(){return GameUtils_1.GameUtils.ConvertToArray(this.animationsLength(),this.animations,this)}get Effects(){return GameUtils_1.GameUtils.ConvertToArray(this.effectsLength(),this.effects,this)}get Audios(){return GameUtils_1.GameUtils.ConvertToArray(this.audiosLength(),this.audios,this)}get Meshes(){return GameUtils_1.GameUtils.ConvertToArray(this.meshesLength(),this.meshes,this)}get Materials(){return GameUtils_1.GameUtils.ConvertToArray(this.materialsLength(),this.materials,this)}get AnimationBlueprints(){return GameUtils_1.GameUtils.ConvertToArray(this.animationblueprintsLength(),this.animationblueprints,this)}get Others(){return GameUtils_1.GameUtils.ConvertToArray(this.othersLength(),this.others,this)}__init(t,s){return this.z7=t,this.J7=s,this}static getRootAsPbDataPreload(t,s){return(s||new PbDataPreload).__init(t.readInt32(t.position())+t.position(),t)}id(){var t=this.J7.__offset(this.z7,4);return t?this.J7.readInt32(this.z7+t):0}mapid(){var t=this.J7.__offset(this.z7,6);return t?this.J7.readInt32(this.z7+t):0}pbdataid(){var t=this.J7.__offset(this.z7,8);return t?this.J7.readInt32(this.z7+t):0}GetActorclassAt(t){return this.actorclass(t)}actorclass(t,s){var i=this.J7.__offset(this.z7,10),i=i?this.J7.__string(this.J7.__vector(this.z7+i)+4*t,s):null;return"string"==typeof i&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(i),i}actorclassLength(){var t=this.J7.__offset(this.z7,10);return t?this.J7.__vector_len(this.z7+t):0}GetAnimationsAt(t){return this.animations(t)}animations(t,s){var i=this.J7.__offset(this.z7,12),i=i?this.J7.__string(this.J7.__vector(this.z7+i)+4*t,s):null;return"string"==typeof i&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(i),i}animationsLength(){var t=this.J7.__offset(this.z7,12);return t?this.J7.__vector_len(this.z7+t):0}GetEffectsAt(t){return this.effects(t)}effects(t,s){var i=this.J7.__offset(this.z7,14),i=i?this.J7.__string(this.J7.__vector(this.z7+i)+4*t,s):null;return"string"==typeof i&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(i),i}effectsLength(){var t=this.J7.__offset(this.z7,14);return t?this.J7.__vector_len(this.z7+t):0}GetAudiosAt(t){return this.audios(t)}audios(t,s){var i=this.J7.__offset(this.z7,16),i=i?this.J7.__string(this.J7.__vector(this.z7+i)+4*t,s):null;return"string"==typeof i&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(i),i}audiosLength(){var t=this.J7.__offset(this.z7,16);return t?this.J7.__vector_len(this.z7+t):0}GetMeshesAt(t){return this.meshes(t)}meshes(t,s){var i=this.J7.__offset(this.z7,18),i=i?this.J7.__string(this.J7.__vector(this.z7+i)+4*t,s):null;return"string"==typeof i&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(i),i}meshesLength(){var t=this.J7.__offset(this.z7,18);return t?this.J7.__vector_len(this.z7+t):0}GetMaterialsAt(t){return this.materials(t)}materials(t,s){var i=this.J7.__offset(this.z7,20),i=i?this.J7.__string(this.J7.__vector(this.z7+i)+4*t,s):null;return"string"==typeof i&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(i),i}materialsLength(){var t=this.J7.__offset(this.z7,20);return t?this.J7.__vector_len(this.z7+t):0}GetAnimationblueprintsAt(t){return this.animationblueprints(t)}animationblueprints(t,s){var i=this.J7.__offset(this.z7,22),i=i?this.J7.__string(this.J7.__vector(this.z7+i)+4*t,s):null;return"string"==typeof i&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(i),i}animationblueprintsLength(){var t=this.J7.__offset(this.z7,22);return t?this.J7.__vector_len(this.z7+t):0}GetOthersAt(t){return this.others(t)}others(t,s){var i=this.J7.__offset(this.z7,24),i=i?this.J7.__string(this.J7.__vector(this.z7+i)+4*t,s):null;return"string"==typeof i&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(i),i}othersLength(){var t=this.J7.__offset(this.z7,24);return t?this.J7.__vector_len(this.z7+t):0}}exports.PbDataPreload=PbDataPreload;
//# sourceMappingURL=PbDataPreload.js.map