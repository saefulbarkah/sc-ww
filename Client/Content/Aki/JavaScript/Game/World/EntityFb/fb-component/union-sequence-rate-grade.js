
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unionListToUnionSequenceRateGrade=exports.unionToUnionSequenceRateGrade=exports.UnionSequenceRateGrade=void 0;const sequence_rate_state_js_1=require("../fb-component/sequence-rate-state.js");var UnionSequenceRateGrade;function unionToUnionSequenceRateGrade(e,t){switch(UnionSequenceRateGrade[e]){case"NONE":return;case"SequenceRateState":return t(new sequence_rate_state_js_1.SequenceRateState);default:return}}function unionListToUnionSequenceRateGrade(e,t,n){switch(UnionSequenceRateGrade[e]){case"NONE":return;case"SequenceRateState":return t(n,new sequence_rate_state_js_1.SequenceRateState);default:return}}!function(e){e[e.NONE=0]="NONE",e[e.SequenceRateState=1]="SequenceRateState"}(UnionSequenceRateGrade=exports.UnionSequenceRateGrade||(exports.UnionSequenceRateGrade={})),exports.unionToUnionSequenceRateGrade=unionToUnionSequenceRateGrade,exports.unionListToUnionSequenceRateGrade=unionListToUnionSequenceRateGrade;
//# sourceMappingURL=union-sequence-rate-grade.js.map