
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.OpenSystemLordGymLordEntranceSelectView=void 0;const LordGymController_1=require("../../../Module/LordGym/LordGymController"),OpenSystemBase_1=require("./OpenSystemBase");class OpenSystemLordGymLordEntranceSelectView extends OpenSystemBase_1.OpenSystemBase{async ExecuteOpenView(e,r){if(!e.BoardId)return!1;let t=void 0;switch(r.Type){case 5:t=r.TriggerEntityId;break;case 1:t=r.EntityId}return LordGymController_1.LordGymController.OpenLordGymLordEntranceSelectView(e.BoardId,t)}GetViewName(e){return"LordGymLordEntranceSelectView"}}exports.OpenSystemLordGymLordEntranceSelectView=OpenSystemLordGymLordEntranceSelectView;
//# sourceMappingURL=OpenSystemLordGymLordEntranceSelectView.js.map