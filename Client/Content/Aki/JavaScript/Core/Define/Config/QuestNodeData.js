
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.QuestNodeData=void 0;const GameUtils_1=require("../../../Game/GameUtils");class QuestNodeData{constructor(){this.J7=null,this.z7=0}get Key(){return this.key()}get Data(){return this.data()}__init(t,e){return this.z7=t,this.J7=e,this}static getRootAsQuestNodeData(t,e){return(e||new QuestNodeData).__init(t.readInt32(t.position())+t.position(),t)}key(t){var e=this.J7.__offset(this.z7,4),e=e?this.J7.__string(this.z7+e,t):null;return"string"==typeof e&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(e),e}data(t){var e=this.J7.__offset(this.z7,6),e=e?this.J7.__string(this.z7+e,t):null;return"string"==typeof e&&GameUtils_1.GameUtils.IsOptimizeDbString&&GameUtils_1.GameUtils.InternalizedString(e),e}}exports.QuestNodeData=QuestNodeData;
//# sourceMappingURL=QuestNodeData.js.map