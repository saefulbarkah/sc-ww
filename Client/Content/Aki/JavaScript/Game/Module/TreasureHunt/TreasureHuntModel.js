
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TreasureHuntModel=void 0;const EntitySystem_1=require("../../../Core/Entity/EntitySystem"),ModelBase_1=require("../../../Core/Framework/ModelBase"),Vector_1=require("../../../Core/Utils/Math/Vector"),EventDefine_1=require("../../Common/Event/EventDefine"),EventSystem_1=require("../../Common/Event/EventSystem"),Global_1=require("../../Global"),ControllerHolder_1=require("../../Manager/ControllerHolder"),PreloadConfigStatementPart1_1=require("../../Preload/PreloadConfigStatementPart1"),NEARBY_TRACK_DIST_DEFAULT=2e3;class TreasureHuntModel extends ModelBase_1.ModelBase{constructor(){super(...arguments),this.pHl=void 0,this.vHl=void 0,this.yHl=!1,this.fHl=0,this.PWl=NEARBY_TRACK_DIST_DEFAULT,this.JW_=void 0,this.SHl=(e,t)=>e.DistSquared-t.DistSquared}OnInit(){var e=PreloadConfigStatementPart1_1.configCommonParamById.GetIntArrayConfig("TreasureCompassTrackInfo");return e&&0<e.length&&(this.PWl=e[0]),!0}OnLeaveLevel(){return this.pHl=void 0,this.vHl=void 0,this.yHl=!1,this.fHl=0,!(this.JW_=void 0)}IsCompassActive(){return this.yHl}SetCompassActive(e){var t=e!==this.yHl;this.yHl=e,t&&EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.OnUpdateCompassActive,e)}AddCompassTrack(e){var t,r,s,i,a,o,n;this.pHl||(this.pHl=new Map),this.pHl.has(e)||(t=(a=EntitySystem_1.EntitySystem.Get(e))?.GetComponent(0)?.GetLocation(),a=a?.GetComponent(155),t&&a&&((n=Vector_1.Vector.Create(0,0,0)).FromUeVector(t),t=a.ShowRange,r=a.CompassNearbyShowRange||this.PWl,s=a.CompassNearbyHideRange||this.PWl,i=.5*(t+r),a=a.CompassDetectVehicleTypes,o=!!this.JW_&&!!a?.includes(this.JW_),n={EntityId:e,Location:n,Range:t,RangeSquared:Math.pow(t,2),NearbyTrackShowRange:r,NearbyTrackShowRangeSquared:Math.pow(r,2),NearbyTrackHideRange:s,NearbyTrackHideRangeSquared:Math.pow(s,2),HighlightRange:i,HighlightRangeSquared:Math.pow(i,2),DetectVehicleTypes:a,IsEnableCompassTracking:o},this.pHl.set(e,n),this.vHl=[...this.pHl.values()],ControllerHolder_1.ControllerHolder.TreasureHuntController.SetCompassActive(!0,1)))}RemoveCompassTrack(e){this.pHl&&this.pHl.has(e)&&(this.pHl.delete(e),this.vHl=[...this.pHl.values()],0===this.vHl.length)&&ControllerHolder_1.ControllerHolder.TreasureHuntController.SetCompassActive(!1,1)}IsEnableCompassTrack(e){return"Gongduola"===e||"FishingBoat"===e}IsInTracking(e){return!!this.pHl?.has(e)}SetNearbyTrack(e){this.fHl=e}ClearNearbyTrack(){this.fHl=0}GetTreasureMap(){return this.pHl}GetTreasureList(e=!0){if(this.pHl&&this.vHl){var t=Global_1.Global.BaseCharacter?.CharacterActorComponent?.ActorLocationProxy;if(t){for(const r of this.vHl)r.DistSquared=Vector_1.Vector.DistSquaredXY(t,r.Location),r.IsNearbyTracking=this.fHl===r.EntityId;return e&&this.vHl.sort(this.SHl),this.vHl}}}SetDetectVehicleType(e){if(this.JW_=e,this.vHl)for(const t of this.vHl)t.IsEnableCompassTracking=!!e&&!!t.DetectVehicleTypes?.includes(e)}}exports.TreasureHuntModel=TreasureHuntModel;
//# sourceMappingURL=TreasureHuntModel.js.map