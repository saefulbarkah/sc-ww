
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const UE=require("ue"),Log_1=require("../../Core/Common/Log"),TsBaseCharacter_1=require("../Character/TsBaseCharacter"),PanelQteController_1=require("../Module/PanelQte/PanelQteController");class TsAnimNotifyPanelQte extends UE.KuroAnimNotify{constructor(){super(...arguments),this.QteId=0,this.CheckAutonomousProxy=!1}K2_Notify(e,r){Log_1.Log.CheckDebug()&&Log_1.Log.Debug("PanelQte",18,"AN触发通用QTE");var t=e.GetOwner();if(!(t instanceof TsBaseCharacter_1.default))return!1;if(this.CheckAutonomousProxy){var o=t.CharacterActorComponent;if(!o?.Valid)return!1;if(!o.IsAutonomousProxy)return!1}o=t?.CharacterActorComponent?.Entity;return(o?.GetComponent(34))?.SetCurAnInfo(this.exportIndex,r.GetName()),t=o?.GetComponent(194).CreateAnimNotifyContent(),PanelQteController_1.PanelQteController.StartAnimNotifyQte(this.QteId,e,t),!0}GetNotifyName(){return"通用QTE"}}exports.default=TsAnimNotifyPanelQte;
//# sourceMappingURL=TsAnimNotifyPanelQte.js.map