
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unionListToUnionRenderSpecifiedRangeConfig=exports.unionToUnionRenderSpecifiedRangeConfig=exports.UnionRenderSpecifiedRangeConfig=void 0;const render_book_page_js_1=require("../fb-component/render-book-page.js"),render_flower_bridge_js_1=require("../fb-component/render-flower-bridge.js");var UnionRenderSpecifiedRangeConfig;function unionToUnionRenderSpecifiedRangeConfig(e,n){switch(UnionRenderSpecifiedRangeConfig[e]){case"NONE":return;case"RenderBookPage":return n(new render_book_page_js_1.RenderBookPage);case"RenderFlowerBridge":return n(new render_flower_bridge_js_1.RenderFlowerBridge);default:return}}function unionListToUnionRenderSpecifiedRangeConfig(e,n,r){switch(UnionRenderSpecifiedRangeConfig[e]){case"NONE":return;case"RenderBookPage":return n(r,new render_book_page_js_1.RenderBookPage);case"RenderFlowerBridge":return n(r,new render_flower_bridge_js_1.RenderFlowerBridge);default:return}}!function(e){e[e.NONE=0]="NONE",e[e.RenderBookPage=1]="RenderBookPage",e[e.RenderFlowerBridge=2]="RenderFlowerBridge"}(UnionRenderSpecifiedRangeConfig=exports.UnionRenderSpecifiedRangeConfig||(exports.UnionRenderSpecifiedRangeConfig={})),exports.unionToUnionRenderSpecifiedRangeConfig=unionToUnionRenderSpecifiedRangeConfig,exports.unionListToUnionRenderSpecifiedRangeConfig=unionListToUnionRenderSpecifiedRangeConfig;
//# sourceMappingURL=union-render-specified-range-config.js.map