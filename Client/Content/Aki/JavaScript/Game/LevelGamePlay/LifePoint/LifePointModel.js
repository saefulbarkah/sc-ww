
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LifePointModel=exports.COLUMN_SIZE=exports.LINE_SIZE=void 0;const UE=require("ue"),CustomPromise_1=require("../../../Core/Common/CustomPromise"),Log_1=require("../../../Core/Common/Log"),EntitySystem_1=require("../../../Core/Entity/EntitySystem"),ModelBase_1=require("../../../Core/Framework/ModelBase"),ResourceSystem_1=require("../../../Core/Resource/ResourceSystem"),MathUtils_1=require("../../../Core/Utils/MathUtils"),ObjectUtils_1=require("../../../Core/Utils/ObjectUtils"),IAction_1=require("../../../UniverseEditor/Interface/IAction"),PreloadConfigStatementPart1_1=require("../../Preload/PreloadConfigStatementPart1"),LevelGeneralNetworks_1=require("../LevelGeneralNetworks"),BLUE=(exports.LINE_SIZE=8,exports.COLUMN_SIZE=10,"77CBFFFF"),RED="FF8E90FF",YELLOW="FFCE89FF",GREEN="ACFFB6FF",BLUE_FRAME="/Game/Aki/UI/UIResources/UiLevel/Image/LifePoint/T_LeftPointFrmBlie.T_LeftPointFrmBlie",GREEN_FRAME="/Game/Aki/UI/UIResources/UiLevel/Image/LifePoint/T_LeftPointFrmGreen.T_LeftPointFrmGreen",RED_FRAME="/Game/Aki/UI/UIResources/UiLevel/Image/LifePoint/T_LeftPointFrmRed.T_LeftPointFrmRed",YELLOW_FRAME="/Game/Aki/UI/UIResources/UiLevel/Image/LifePoint/T_LeftPointFrmYellow.T_LeftPointFrmYellow",BLUE_GRID="/Game/Aki/UI/UIResources/UiLevel/Image/LifePoint/T_BgTextureBlueNor.T_BgTextureBlueNor",GREEN_GRID="/Game/Aki/UI/UIResources/UiLevel/Image/LifePoint/T_BgTextureGreenNor.T_BgTextureGreenNor",RED_GRID="/Game/Aki/UI/UIResources/UiLevel/Image/LifePoint/T_BgTextureRedNor.T_BgTextureRedNor",YELLOW_GRID="/Game/Aki/UI/UIResources/UiLevel/Image/LifePoint/T_BgTextureYellowNor.T_BgTextureYellowNor",BLUE_HIT_GRID="/Game/Aki/UI/UIResources/UiLevel/Image/LifePoint/T_BgTextureBlue.T_BgTextureBlue",GREEN_HIT_GRID="/Game/Aki/UI/UIResources/UiLevel/Image/LifePoint/T_BgTextureGreen.T_BgTextureGreen",RED_HIT_GRID="/Game/Aki/UI/UIResources/UiLevel/Image/LifePoint/T_BgTextureRed.T_BgTextureRed",YELLOW_HIT_GRID="/Game/Aki/UI/UIResources/UiLevel/Image/LifePoint/T_BgTextureYellow.T_BgTextureYellow",YELLOW_TEXT="LifePlay_Yellow_Text",RED_TEXT="LifePlay_Red_Text",GREEN_TEXT="LifePlay_Green_Text",BLUE_TEXT="LifePlay_Blue_Text",SELF_EVENT_NAME="LifePointPaint",VAR_NAME="染色次数";class AnimParam{constructor(){this.MaxTime=0,this.AccelerationRes=0,this.MinInterval=0,this.GridMinRate=0,this.GridMaxRate=0,this.GridAccelerationTime=0}}class LifePointModel extends ModelBase_1.ModelBase{constructor(){super(...arguments),this.IsDataInit=!1,this.Config=void 0,this.dUl=new Map,this.GridTextureMap=new Map,this.HitGridTextureMap=new Map,this.DirectionParam=new Map,this.ParamName=new UE.FName("LocalFadeInoutRotate"),this.InitColor=UE.Color.FromHex("FFFF00FF"),this.AnimParam=new AnimParam,this.AudioEvent="play_interact_life_point_click",this.RtpcCount="mini_game_lifepoint_spreads_counting",this.RtpcGrids="mini_game_lifepoint_spreading_grids",this.RtpcSpeed="mini_game_lifepoint_spreading_speed",this.AudioMap=new Map,this.DangerStepColor=UE.Color.FromHex("FF7D6EFF"),this.NormalStepColor=UE.Color.FromHex("FFCB3FFF"),this.Jh=void 0,this.kFl=void 0}GetText(e){return this.dUl.get(e)[4]}GetColorHex(e){return this.dUl.get(e)[0]}GetFramePath(e){return this.dUl.get(e)[1]}OnInit(){return this.dUl.set(IAction_1.EPieceColorType.Blue,[BLUE,BLUE_FRAME,BLUE_GRID,BLUE_HIT_GRID,BLUE_TEXT]),this.dUl.set(IAction_1.EPieceColorType.Red,[RED,RED_FRAME,RED_GRID,RED_HIT_GRID,RED_TEXT]),this.dUl.set(IAction_1.EPieceColorType.Yellow,[YELLOW,YELLOW_FRAME,YELLOW_GRID,YELLOW_HIT_GRID,YELLOW_TEXT]),this.dUl.set(IAction_1.EPieceColorType.Green,[GREEN,GREEN_FRAME,GREEN_GRID,GREEN_HIT_GRID,GREEN_TEXT]),this.DirectionParam.set(4,-1),this.DirectionParam.set(1,.75),this.DirectionParam.set(2,.5),this.DirectionParam.set(0,.25),this.DirectionParam.set(3,0),this.AnimParam.MaxTime=PreloadConfigStatementPart1_1.configCommonParamById.GetIntConfig("LifePoint_MaxTime"),this.AnimParam.AccelerationRes=PreloadConfigStatementPart1_1.configCommonParamById.GetFloatConfig("LifePoint_AccelerationResis"),this.AnimParam.MinInterval=PreloadConfigStatementPart1_1.configCommonParamById.GetIntConfig("LifePoint_MinInterval"),this.AnimParam.GridMinRate=PreloadConfigStatementPart1_1.configCommonParamById.GetFloatConfig("LifePoint_GridMinSpeed"),this.AnimParam.GridMaxRate=PreloadConfigStatementPart1_1.configCommonParamById.GetFloatConfig("LifePoint_GridMaxSpeed"),this.AnimParam.GridAccelerationTime=PreloadConfigStatementPart1_1.configCommonParamById.GetIntConfig("LifePoint_GridDuration"),!0}OnClear(){return this.dUl.clear(),this.GridTextureMap.clear(),this.HitGridTextureMap.clear(),this.DirectionParam.clear(),!0}CalcCountDownTime(e){return this.AnimParam.MaxTime*(1-Math.exp(-e*this.AnimParam.AccelerationRes))+this.AnimParam.MinInterval*e}CalPlayRate(e){return MathUtils_1.MathUtils.Clamp((this.AnimParam.GridMinRate+(this.AnimParam.GridMaxRate-this.AnimParam.GridMinRate)*e)/this.AnimParam.GridAccelerationTime,this.AnimParam.GridMinRate,this.AnimParam.GridMaxRate)}BlendDirectionParam(e,t){if(e<0)return e;t=this.DirectionParam.get(t);if(.5===Math.abs(e-t))return e;let i=0;return(i=.5<Math.abs(e-t)?(e+t-1)/2:(e+t)/2)<0&&(i+=1),i}async LoadDataAsync(t,e){if(!this.IsDataInit){this.Config=t,this.Jh=EntitySystem_1.EntitySystem.Get(e),this.Config.MaxStepRewardRule&&(this.kFl=[...this.Config.MaxStepRewardRule],this.kFl.sort((e,t)=>t.PaintCount-e.PaintCount)),Log_1.Log.CheckInfo()&&Log_1.Log.Info("LevelPlay",26,"生命点资源开始加载");var i=new Array;for(const[r,t]of this.dUl){{const s=new CustomPromise_1.CustomPromise;i.push(s.Promise),ResourceSystem_1.ResourceSystem.LoadAsync(t[2],UE.Texture2D,e=>{ObjectUtils_1.ObjectUtils.IsValid(e)?(this.GridTextureMap.set(r,e),s.SetResult()):Log_1.Log.CheckError()&&Log_1.Log.Error("LevelPlay",26,"生命点资源加载错误",["path",t[2]])})}{const o=new CustomPromise_1.CustomPromise;i.push(o.Promise),ResourceSystem_1.ResourceSystem.LoadAsync(t[3],UE.Texture2D,e=>{ObjectUtils_1.ObjectUtils.IsValid(e)?(this.HitGridTextureMap.set(r,e),o.SetResult()):Log_1.Log.CheckError()&&Log_1.Log.Error("LevelPlay",26,"生命点资源加载错误",["path",t[2]])})}}await Promise.all(i),this.IsDataInit=!0,Log_1.Log.CheckInfo()&&Log_1.Log.Info("LevelPlay",26,"生命点资源加载完毕")}}UnloadData(){this.Jh=void 0,this.Config=void 0,this.GridTextureMap.clear(),this.HitGridTextureMap.clear(),this.IsDataInit=!1,this.AudioMap.clear(),this.kFl=void 0}AddStep(){var e=this.Jh.GetComponent(0).GetCreatureDataId();LevelGeneralNetworks_1.LevelGeneralNetworks.RequestEntitySendEvent(e,SELF_EVENT_NAME)}GetStepBonus(){if(this.kFl){var e=this.Jh.GetComponent(0).GetEntityVar(VAR_NAME)?.oTs;if(void 0!==e){var t=MathUtils_1.MathUtils.LongToNumber(e);for(const i of this.kFl)if(t>=i.PaintCount)return i.AddStep}}return 0}}exports.LifePointModel=LifePointModel;
//# sourceMappingURL=LifePointModel.js.map