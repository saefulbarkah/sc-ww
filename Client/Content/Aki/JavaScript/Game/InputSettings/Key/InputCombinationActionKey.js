
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.InputCombinationActionKey=void 0;const UE=require("ue"),FNameUtil_1=require("../../../Core/Utils/FNameUtil"),InputSettings_1=require("../InputSettings");class InputCombinationActionKey{constructor(){this.ActionName="",this.MainKeyName="",this.SecondaryKeyName=""}static New(t,e,n){var i=new InputCombinationActionKey;return i.ActionName=t,i.MainKeyName=e,i.SecondaryKeyName=n,i}GetMainKey(){return InputSettings_1.InputSettings.GetKey(this.MainKeyName)}GetSecondaryKey(){return InputSettings_1.InputSettings.GetKey(this.SecondaryKeyName)}MainKeyToUeInputActionKeyMapping(){var t=FNameUtil_1.FNameUtil.GetDynamicFName(this.ActionName),e=FNameUtil_1.FNameUtil.GetDynamicFName(this.MainKeyName),e=new UE.Key(e);return new UE.InputActionKeyMapping(t,!1,!1,!1,!1,e)}SecondaryKeyToUeInputActionKeyMapping(){var t=FNameUtil_1.FNameUtil.GetDynamicFName(this.ActionName),e=FNameUtil_1.FNameUtil.GetDynamicFName(this.SecondaryKeyName),e=new UE.Key(e);return new UE.InputActionKeyMapping(t,!1,!1,!1,!1,e)}}exports.InputCombinationActionKey=InputCombinationActionKey;
//# sourceMappingURL=InputCombinationActionKey.js.map