
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unionListToUnionTalkOptionParam=exports.unionToUnionTalkOptionParam=exports.UnionTalkOptionParam=void 0;const talk_option_qte_failed_js_1=require("../fb-action/talk-option-qte-failed.js"),talk_option_qte_succeed_js_1=require("../fb-action/talk-option-qte-succeed.js");var UnionTalkOptionParam;function unionToUnionTalkOptionParam(t,e){switch(UnionTalkOptionParam[t]){case"NONE":return;case"TalkOptionQteFailed":return e(new talk_option_qte_failed_js_1.TalkOptionQteFailed);case"TalkOptionQteSucceed":return e(new talk_option_qte_succeed_js_1.TalkOptionQteSucceed);default:return}}function unionListToUnionTalkOptionParam(t,e,n){switch(UnionTalkOptionParam[t]){case"NONE":return;case"TalkOptionQteFailed":return e(n,new talk_option_qte_failed_js_1.TalkOptionQteFailed);case"TalkOptionQteSucceed":return e(n,new talk_option_qte_succeed_js_1.TalkOptionQteSucceed);default:return}}!function(t){t[t.NONE=0]="NONE",t[t.TalkOptionQteFailed=1]="TalkOptionQteFailed",t[t.TalkOptionQteSucceed=2]="TalkOptionQteSucceed"}(UnionTalkOptionParam=exports.UnionTalkOptionParam||(exports.UnionTalkOptionParam={})),exports.unionToUnionTalkOptionParam=unionToUnionTalkOptionParam,exports.unionListToUnionTalkOptionParam=unionListToUnionTalkOptionParam;
//# sourceMappingURL=union-talk-option-param.js.map