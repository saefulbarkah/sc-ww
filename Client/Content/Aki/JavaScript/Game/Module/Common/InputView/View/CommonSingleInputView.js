'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.CommonSingleInputView = void 0);
const CommonInputViewDefine_1 = require('../Model/CommonInputViewDefine'),
  CommonInputViewBase_1 = require('./CommonInputViewBase');
class CommonSingleInputView extends CommonInputViewBase_1.CommonInputViewBase {
  GetMaxLimit() {
    return CommonInputViewDefine_1.MAX_SINGLE_LENGTH;
  }
  IsAllowMultiLine() {
    return !1;
  }
}
exports.CommonSingleInputView = CommonSingleInputView;
//# sourceMappingURL=CommonSingleInputView.js.map
