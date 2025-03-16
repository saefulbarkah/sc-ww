
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unionListToUnionHookInteractConfig=exports.unionToUnionHookInteractConfig=exports.UnionHookInteractConfig=void 0;const fixed_point_hook_js_1=require("../fb-component/fixed-point-hook.js"),kite_hook_js_1=require("../fb-component/kite-hook.js"),movement_point_hook_js_1=require("../fb-component/movement-point-hook.js"),rag_doll_climbing_point_js_1=require("../fb-component/rag-doll-climbing-point.js"),rag_doll_jumping_point_js_1=require("../fb-component/rag-doll-jumping-point.js"),slash_hook_js_1=require("../fb-component/slash-hook.js"),sui_guang_hook_js_1=require("../fb-component/sui-guang-hook.js");var UnionHookInteractConfig;function unionToUnionHookInteractConfig(o,n){switch(UnionHookInteractConfig[o]){case"NONE":return;case"FixedPointHook":return n(new fixed_point_hook_js_1.FixedPointHook);case"KiteHook":return n(new kite_hook_js_1.KiteHook);case"MovementPointHook":return n(new movement_point_hook_js_1.MovementPointHook);case"RagDollClimbingPoint":return n(new rag_doll_climbing_point_js_1.RagDollClimbingPoint);case"RagDollJumpingPoint":return n(new rag_doll_jumping_point_js_1.RagDollJumpingPoint);case"SlashHook":return n(new slash_hook_js_1.SlashHook);case"SuiGuangHook":return n(new sui_guang_hook_js_1.SuiGuangHook);default:return}}function unionListToUnionHookInteractConfig(o,n,e){switch(UnionHookInteractConfig[o]){case"NONE":return;case"FixedPointHook":return n(e,new fixed_point_hook_js_1.FixedPointHook);case"KiteHook":return n(e,new kite_hook_js_1.KiteHook);case"MovementPointHook":return n(e,new movement_point_hook_js_1.MovementPointHook);case"RagDollClimbingPoint":return n(e,new rag_doll_climbing_point_js_1.RagDollClimbingPoint);case"RagDollJumpingPoint":return n(e,new rag_doll_jumping_point_js_1.RagDollJumpingPoint);case"SlashHook":return n(e,new slash_hook_js_1.SlashHook);case"SuiGuangHook":return n(e,new sui_guang_hook_js_1.SuiGuangHook);default:return}}!function(o){o[o.NONE=0]="NONE",o[o.FixedPointHook=1]="FixedPointHook",o[o.KiteHook=2]="KiteHook",o[o.MovementPointHook=3]="MovementPointHook",o[o.RagDollClimbingPoint=4]="RagDollClimbingPoint",o[o.RagDollJumpingPoint=5]="RagDollJumpingPoint",o[o.SlashHook=6]="SlashHook",o[o.SuiGuangHook=7]="SuiGuangHook"}(UnionHookInteractConfig=exports.UnionHookInteractConfig||(exports.UnionHookInteractConfig={})),exports.unionToUnionHookInteractConfig=unionToUnionHookInteractConfig,exports.unionListToUnionHookInteractConfig=unionListToUnionHookInteractConfig;
//# sourceMappingURL=union-hook-interact-config.js.map