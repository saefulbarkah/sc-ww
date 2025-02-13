
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MapTileMgr=void 0;const puerts_1=require("puerts"),UE=require("ue"),Log_1=require("../../../../../../Core/Common/Log"),ConfigCommon_1=require("../../../../../../Core/Config/ConfigCommon"),ResourceSystem_1=require("../../../../../../Core/Resource/ResourceSystem"),DataTableUtil_1=require("../../../../../../Core/Utils/DataTableUtil"),Vector_1=require("../../../../../../Core/Utils/Math/Vector"),Vector2D_1=require("../../../../../../Core/Utils/Math/Vector2D"),StringUtils_1=require("../../../../../../Core/Utils/StringUtils"),EventDefine_1=require("../../../../../Common/Event/EventDefine"),EventSystem_1=require("../../../../../Common/Event/EventSystem"),GlobalData_1=require("../../../../../GlobalData"),LevelConditionRegistry_1=require("../../../../../LevelGamePlay/LevelConditions/LevelConditionRegistry"),ConfigManager_1=require("../../../../../Manager/ConfigManager"),ModelManager_1=require("../../../../../Manager/ModelManager"),UiLayer_1=require("../../../../../Ui/UiLayer"),LguiUtil_1=require("../../../../Util/LguiUtil"),MapDefine_1=require("../../../MapDefine"),MapUtil_1=require("../../../MapUtil"),MapLogger_1=require("../../../Misc/MapLogger"),MapTileItem_1=require("./MapTile/MapTileItem"),FAKE_TILE_COUNT=3,MAP_TILE_COMMON="T_CommonDefault_UI",MAX_COLOR=255,FOG_TEXTURE_NAME=new UE.FName("FogTexture"),HD_TEXTURE_NAME=new UE.FName("HDTexture"),HD_SCALAR_NAME=new UE.FName("UseHDPicture"),FOG_MASK_1=new UE.FName("FogMask"),FOG_MASK_2=new UE.FName("FogMask2"),FOG_TEXTURE_1=FOG_TEXTURE_NAME,FOG_TEXTURE_2=new UE.FName("FogTexture2"),FOG_UNLOCK_CENTERX_NAME=new UE.FName("CenterX"),FOG_UNLOCK_CENTERY_NAME=new UE.FName("CenterY"),DTPATH_AREA_ID_TO_MASK_CODE="/Game/Aki/Data/PathLine/FogLine/DT_AreaToMaskCode.DT_AreaToMaskCode",DTPATH_FOG_AREA_ID="/Game/Aki/Data/PathLine/FogLine/DT_FogToArea.DT_FogToArea",V2FogPath="/Game/Aki/UI/UIResources/UIWorldMap/Image/FogTilesV2",V2FogMiniPath="/Game/Aki/UI/UIResources/UIWorldMap/Image/FogTilesV2Mini";class FogOpenParams{constructor(){this.ExtraHdMapTileIndex=-1,this.MapTileIndex=-1,this.Channel=0,this.ChannelV2=0}}class MapTileMgr{constructor(i){this.qUi=void 0,this.Y__=void 0,this.GUi=void 0,this.vKs=void 0,this.NUi=void 0,this.OUi=void 0,this.wUi=new Map,this.AUi=void 0,this.OpenFogSet=void 0,this.xUi=void 0,this.kUi=void 0,this.FUi=void 0,this.VUi=void 0,this.HUi=void 0,this.dil=!1,this.jUi=void 0,this.tzs=void 0,this.MKs=void 0,this.SKs=0,this.PUi=2,this._Ui=0,this.z3t=0,this.WUi=new UE.Color(0,0,0,MAX_COLOR),this.ish=new UE.Color(0,0,0,0),this.lPn=new Map,this.DPn=new Map,this.RPn=-1,this.MapOffset=void 0,this.FakeOffset=0,this.KUi=Number.MAX_SAFE_INTEGER,this.QUi=Number.MAX_SAFE_INTEGER,this.XUi=Number.MAX_SAFE_INTEGER,this.$Ui=Number.MAX_SAFE_INTEGER,this.JUi=void 0,this.zUi=void 0,this.ZUi=void 0,this.eAi=!1,this.L7s=void 0,this.D7s=void 0,this.EKs=void 0,this.Ata=1,this.yua=void 0,this.Iua=void 0,this.h8l=void 0,this.Yfe=!1,this.tAi=()=>{this.NUi&&(this.NUi.GetOwner()?.K2_DestroyActor(),this.NUi=void 0),this.iAi()},this.Vhl=i=>{this.OpenFogSet&&(this.OpenFogSet.add(i),this.rAi())},this.Hhl=i=>{if(this.OpenFogSet){this.OpenFogSet.clear();for(const t of i.keys())this.OpenFogSet.add(t);this.rAi()}},this.nAi=i=>{if(this.zUi&&0!==this.zUi.length&&this.qUi)for(const e of this.zUi){var t=e.MapTileIndex;0<=t&&t<this.qUi.length&&(t=this.qUi[t],2===this.Ata?this.Cil(t,e.ChannelV2,i):this.sAi(t,e.Channel,i))}},this.Ata=i.MapVersion,2===this.Ata&&(this.yua=ResourceSystem_1.ResourceSystem.Load(DTPATH_AREA_ID_TO_MASK_CODE,UE.DataTable),this.Iua=ResourceSystem_1.ResourceSystem.Load(DTPATH_FOG_AREA_ID,UE.DataTable)),this.kUi=i.MapRootItem,this.L7s=UE.NewArray(UE.UIItem),this.L7s.Add(this.kUi),this.D7s=(0,puerts_1.$ref)(this.L7s),this.FUi=i.TileContainer,this.VUi=i.TileTexture,this.HUi=i.SubMapContainer,this.dil=!1,this.jUi=i.SubMapTexture,this.MKs=i.SubMapContainer?.GetOwner().GetComponentByClass(UE.LGUIPlayTweenComponent.StaticClass()),this.SKs=i.SubMapContainer?.GetOwner().GetComponentByClass(UE.UISprite.StaticClass())?.GetAlpha(),this.tzs=i.SubMapMask,this.tzs?.SetWidth(MapDefine_1.DETAIL_TILE_REALSIZE),this.tzs?.SetHeight(MapDefine_1.DETAIL_TILE_REALSIZE),this.VUi.SetColor(this.WUi),this.PUi=i.MapType,this._Ui=i.MapId,this.z3t=i.InstanceDungeonId,i.PreloadTiles&&(this.wUi=i.PreloadTiles),this.h8l=i}aAi(){this.qUi=[],this.Y__=[],this.GUi=[],this.vKs=[],this.AUi=[],this.MapOffset=new UE.Vector4(0,0,0,0),this.FakeOffset=0}Initialize(){this.aAi(),this.dde()}Dispose(){this.Cde(),this.AUi&&(this.AUi.splice(0,this.AUi.length),this.AUi=void 0),this.qUi.forEach(i=>{i.SetTexture(void 0),2===this.Ata?(i.SetCustomMaterialTextureParameter(FOG_TEXTURE_1,void 0),i.SetCustomMaterialTextureParameter(FOG_TEXTURE_2,void 0)):i.SetCustomMaterialTextureParameter(FOG_TEXTURE_NAME,void 0),i.SetCustomMaterialTextureParameter(HD_TEXTURE_NAME,void 0),this.VUi!==i&&i.GetOwner()?.K2_DestroyActor()}),this.GUi.forEach(i=>{i.SetTexture(void 0),this.jUi!==i&&i.GetOwner()?.K2_DestroyActor()}),this.yKs(),this.HUi?.SetAlpha(this.SKs),this.HUi?.SetUIActive(!1),this.dil=!1,this.NUi?.GetOwner()?.K2_DestroyActor(),this.qUi=void 0,this.Y__=void 0,this.GUi=void 0,this.vKs=void 0,this.lPn.clear(),this.DPn.clear(),this.Yfe=!0}dde(){EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.MapOpenFogChange,this.Vhl),EventSystem_1.EventSystem.Add(EventDefine_1.EEventName.MapOpenFogFullUpdate,this.Hhl),this.OUi=new LevelConditionRegistry_1.ConditionPassCallback(this.tAi);for(const t of ConfigManager_1.ConfigManager.MapConfig.GetMapBorderConfigList()){var i=t.ConditionId;0<i&&LevelConditionRegistry_1.LevelConditionRegistry.RegisterConditionGroup(i,this.OUi)}}Cde(){EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.MapOpenFogChange,this.Vhl),EventSystem_1.EventSystem.Remove(EventDefine_1.EEventName.MapOpenFogFullUpdate,this.Hhl);for(const t of ConfigManager_1.ConfigManager.MapConfig.GetMapBorderConfigList()){var i=t.ConditionId;0<i&&LevelConditionRegistry_1.LevelConditionRegistry.UnRegisterConditionGroup(i,this.OUi)}}GetMapTiles(){return this.qUi}GetMapTileItems(){return this.Y__}OnMapSetUp(){1!==this.PUi||ConfigManager_1.ConfigManager.WorldMapConfig.IsMapInWorld(this._Ui)?(this.eAi=!0,this.hAi(),this.lAi(),(ConfigManager_1.ConfigManager.MapConfig?.GetMultiMapAreaConfigList())?.forEach(i=>{i.MapConfigId===this._Ui&&this.lPn.set(i.Block,i)}),(ConfigManager_1.ConfigManager.MapConfig?.GetAllSubMapConfig())?.forEach(t=>{t.MapId===this._Ui&&t.Area.forEach(i=>{this.DPn.set(i,t.Id)})}),this.KUi=Number.MAX_SAFE_INTEGER,this.QUi=Number.MAX_SAFE_INTEGER):this.eAi=!1}_Ai(i,t){return 1===this.PUi?t:i}hAi(){this.OpenFogSet=new Set;for(var[i]of ModelManager_1.ModelManager.MapModel.GetAllUnlockedFogs())this.OpenFogSet.add(i)}lAi(){var i=ConfigManager_1.ConfigManager.MapConfig.GetAllTileConfigByMapId(this._Ui);this.AUi.splice(0,this.AUi.length);for(const O of i)if(!StringUtils_1.StringUtils.IsEmpty(O.MapTilePath)){var e=ModelManager_1.ModelManager.MapModel.CheckUnlockMapBlockIds(O.Block),s=O.MapTilePath.split("/"),s=s[s.length-1];let i="",t="";t=0!==e?(e=ConfigManager_1.ConfigManager.MapConfig.GetUnlockMapTileConfigById(e),i=ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(e.MapTilePath),ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(e.MiniMapTilePath)):(i=ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(O.MapTilePath),ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(O.MiniMapTilePath));var e=ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(O.HdMapTilePath),a=this._Ai(i,t),h=ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(O.FogTilePath),_=ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(O.MiniFogTilePath),h=this._Ai(h,_);this.AUi.push({MapTilePath:a,HdMapTilePath:e,FogTilePath:h,MapTileName:s})}let t=0,r=0;if(1===this.PUi){t=4,this.GUi.length=0,this.GUi.push(this.jUi);for(let i=1;i<t;++i){var o=LguiUtil_1.LguiUtil.CopyItem(this.jUi,this.HUi);this.GUi.push(o)}}else{this.xUi={MaxX:-1,MinX:1,MaxY:-1,MinY:1};for(const c of this.AUi){var n=this.bUi(c.MapTileName),M=n.X,n=n.Y;this.xUi.MaxX=Math.max(M,this.xUi.MaxX),this.xUi.MinX=Math.min(M,this.xUi.MinX),this.xUi.MaxY=Math.max(n,this.xUi.MaxY),this.xUi.MinY=Math.min(n,this.xUi.MinY)}r=this.xUi.MaxX-this.xUi.MinX+1+2*FAKE_TILE_COUNT;i=this.xUi.MaxY-this.xUi.MinY+1+2*FAKE_TILE_COUNT;t=r*i}this.qUi.length=0,this.VUi.SetUIActive(!0),this.qUi.push(this.VUi),this.Y__.length=0;for(let i=1;i<t;++i){var l=LguiUtil_1.LguiUtil.CopyItem(this.VUi,this.FUi);this.qUi.push(l)}var g=new Map;for(const D of this.AUi){var v=this.bUi(D.MapTileName);if(2===this.Ata){var f=`${this._Ui}_${v.X}_`+v.Y,f=DataTableUtil_1.DataTableUtil.GetDataTableRow(this.Iua,f);let i=V2FogPath;1===this.PUi&&(i=V2FogMiniPath),f&&(f.IsFogP1&&(D.FogTilePath=`${i}/T_FogTiles_${this._Ui}_${v.X}_${v.Y}_UI_p1.T_FogTiles_${this._Ui}_${v.X}_${v.Y}_UI_p1`),f.IsFogP2)&&(D.FogTilePath2=`${i}/T_FogTiles_${this._Ui}_${v.X}_${v.Y}_UI_p2.T_FogTiles_${this._Ui}_${v.X}_${v.Y}_UI_p2`)}g.set(v.X+"_"+v.Y,D)}var p,T,U,E,C,d,u=Vector2D_1.Vector2D.Create();for(let i=0;i<this.qUi.length;i++){const A=this.qUi[i];if(A.SetWidth(MapDefine_1.DETAIL_TILE_SPACE),A.SetHeight(MapDefine_1.DETAIL_TILE_SPACE),1===this.PUi)this.uAi(A);else{let e=Math.ceil((i+1)/r),s=i-(e-1)*r;s=s+this.xUi.MinX-FAKE_TILE_COUNT,e=-(e-1)+this.xUi.MaxY+FAKE_TILE_COUNT,u.X=(s-.5)*MapDefine_1.DETAIL_TILE_SPACE,u.Y=(e-.5)*MapDefine_1.DETAIL_TILE_SPACE,A.SetAnchorOffset(u.ToUeVector2D());const F=g.get(s+"_"+e);F&&(A.SetCustomMaterialScalarParameter(HD_SCALAR_NAME,0),GlobalData_1.GlobalData.IsPlayInEditor&&A.GetOwner()?.SetActorLabel(F.MapTileName),p={TileX:s,TileY:e,AnchorOffset:u,LoadMapTileCallBack:i=>{var t;A.SetTexture(i),2===this.Ata?(t=`${this._Ui}_${s}_`+e,(t=DataTableUtil_1.DataTableUtil.GetDataTableRow(this.Iua,t))&&(t.IsFogP1&&this.gil(A,F.FogTilePath,1),t.IsFogP2)&&this.gil(A,F.FogTilePath2,2)):StringUtils_1.StringUtils.IsEmpty(F.FogTilePath)?A.SetColor(this.WUi):(void 0===i&&Log_1.Log.CheckError()&&Log_1.Log.Error("Map",63,"[地图系统]->loadCallback 切块贴图为空",["MapId",this._Ui],["TileX",s],["TileY",e],["assetData",F]),this.cAi(A,F.FogTilePath))},AssetData:F,FogDefaultColor:this.WUi,MapType:this.PUi,MapTile:A,MapId:this._Ui},p=new MapTileItem_1.MapTileItem(p),this.Y__.push(p))}}this.iAi(),1!==this.PUi&&(i=this.xUi.MaxX,T=1-this.xUi.MinX,U=Math.max(i,T),E=this.xUi.MaxY,C=1-this.xUi.MinY,d=Math.max(E,C),this.kUi.SetWidth(2*U*MapDefine_1.DETAIL_TILE_REALSIZE),this.kUi.SetHeight(2*d*MapDefine_1.DETAIL_TILE_REALSIZE),this.MapOffset.Set(Math.max(0,i-T)*MapDefine_1.DETAIL_TILE_REALSIZE*2,Math.max(0,T-i)*MapDefine_1.DETAIL_TILE_REALSIZE*2,Math.max(0,C-E)*MapDefine_1.DETAIL_TILE_REALSIZE*2,Math.max(0,E-C)*MapDefine_1.DETAIL_TILE_REALSIZE*2),this.FakeOffset=MapDefine_1.DETAIL_TILE_REALSIZE*FAKE_TILE_COUNT)}bUi(i){i=i.split("_");return{X:UE.KismetStringLibrary.Conv_StringToInt(i[2]),Y:UE.KismetStringLibrary.Conv_StringToInt(i[3])}}cAi(i,t,e){const s=i;this.rsh(t,i=>{i?this.uAi(s,i):s.SetColor(this.WUi),e&&e()})}gil(i,t,e,s){const a=i;this.rsh(t,i=>{i?this.uAi(a,i,e):a.SetColor(this.WUi),s&&s()})}osh(i,t,e,s=1){const a=i;this.rsh(t,i=>{i?this.nsh(a,i,s):a.SetColor(this.ish),e&&e()})}rsh(i,t){var e=this.wUi.get(i);e?t(e):ResourceSystem_1.ResourceSystem.LoadAsync(i,UE.Texture,t,102)}async iAi(){this.NUi&&(this.NUi.GetOwner()?.K2_DestroyActor(),this.NUi=void 0);var i=ModelManager_1.ModelManager.MapModel.GetCurMapBorderConfig(this._Ui,this.z3t,this.PUi);void 0!==i&&(i=i.PrefabPath,i=await LguiUtil_1.LguiUtil.LoadPrefabByAsync(i,this.kUi),this.Yfe?i?.K2_DestroyActor():(this.NUi=i.GetComponentByClass(UE.UIItem.StaticClass()),this.NUi.SetAnchorOffset(new UE.Vector2D(0,0))))}UpdateMinimapTiles(i){if(1===this.PUi&&this.eAi){var t=MapUtil_1.MapUtil.GetTilePosition(i,.5),e=t.X,t=t.Y,s=ModelManager_1.ModelManager.AreaModel.GetCurrentAreaId(),a=this.DPn.has(s)?this.DPn.get(s):0,h=this.RPn!==a;if(!(Math.abs(this.XUi-i.X)<MapDefine_1.MINI_MAP_UPDATE_GAP*MapDefine_1.UNIT&&Math.abs(this.$Ui-i.Y)<MapDefine_1.MINI_MAP_UPDATE_GAP*MapDefine_1.UNIT&&this.KUi===e&&this.QUi===t)||h){var _=[e,t,e-1,t,e,t-1,e-1,t-1],r=this.izs(i,e,t),o=(this.rzs(this.qUi,_,r),0!==a&&void 0!==this.HUi);if(o){this.rzs(this.GUi,_,r);for(let i=0;i<this.GUi.length;i++){var n=_[2*i],M=_[2*i+1];if(0<r[i].R){n=(n-.5-.5+r[i].B+r[i].R/2)*MapDefine_1.DETAIL_TILE_SPACE,M=(M-.5+.5-r[i].A-r[i].G/2)*MapDefine_1.DETAIL_TILE_SPACE;this.tzs?.SetAnchorOffset(new UE.Vector2D(n,M));break}}}if(this.HUi?.SetUIActive(o),this.dil=o,this.KUi!==e||this.QUi!==t||h){this.KUi=e,this.QUi=t;for(let i=0;i<this.qUi.length;i++){var l=_[2*i],g=_[2*i+1];o&&this.ozs(this.GUi[i],l,g,a,s),this.nzs(this.qUi[i],l,g)}o?EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.WorldMapSubMapChanged,a):EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.WorldMapSubMapChanged,0),this.RPn=a??0}}}}ozs(e,s,a,i,t){var h=ConfigManager_1.ConfigManager.MapConfig.GetTileConfig(s.toString()+"_"+a.toString(),this._Ui);if(!h||StringUtils_1.StringUtils.IsEmpty(h.MapTilePath))e.SetColor(this.ish);else{var _=ConfigManager_1.ConfigManager.MapConfig.GetSubMapConfigById(i);if(_){_=_.MiniMapTilePath.find(i=>i.includes(s+"_"+a));if(_){_=ConfigManager_1.ConfigManager.UiResourceConfig.GetResourcePath(_);if(StringUtils_1.StringUtils.IsEmpty(_))Log_1.Log.CheckError()&&Log_1.Log.Error("Map",34,"UpdateMinimapTiles 多层地图小地图获取地图块资源为空",["x",s],["y",a],["MultiMapId",i],["AreaId",t]),e.SetColor(this.ish);else if(2===this.Ata){i=this._Ui+`_${s}_`+a;const r=DataTableUtil_1.DataTableUtil.GetDataTableRow(this.Iua,i);ResourceSystem_1.ResourceSystem.LoadAsync(_,UE.Texture,t=>{if(t)if(e.SetTexture(t),r&&(r.IsFogP1||r.IsFogP2)){e.SetColor(this.WUi);let i=V2FogPath;1===this.PUi&&(i=V2FogMiniPath),r.IsFogP1&&(t=`${i}/T_FogTiles_${this._Ui}_${s}_${a}_UI_p1.T_FogTiles_${this._Ui}_${s}_${a}_UI_p1`,this.osh(e,t,void 0,1)),r.IsFogP2&&(t=`${i}/T_FogTiles_${this._Ui}_${s}_${a}_UI_p2.T_FogTiles_${this._Ui}_${s}_${a}_UI_p2`,this.osh(e,t,void 0,2))}else e.SetColor(this.WUi)})}else{t=ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(h.MiniFogTilePath),i=ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(h.FogTilePath);const o=this._Ai(i,t);ResourceSystem_1.ResourceSystem.LoadAsync(_,UE.Texture,i=>{i&&(e.SetTexture(i),StringUtils_1.StringUtils.IsEmpty(o)?e.SetColor(this.WUi):this.osh(e,o,void 0))})}}else e.SetColor(this.ish)}else e.SetColor(this.ish)}}nzs(e,s,a){var h=ConfigManager_1.ConfigManager.MapConfig.GetTileConfig(s.toString()+"_"+a.toString(),this._Ui);if(h&&!StringUtils_1.StringUtils.IsEmpty(h.MapTilePath)){var _=ModelManager_1.ModelManager.MapModel.CheckUnlockMapBlockIds(h.Block);let i="",t="";t=0!==_?(_=ConfigManager_1.ConfigManager.MapConfig.GetUnlockMapTileConfigById(_),i=ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(_.MapTilePath),ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(_.MiniMapTilePath)):(i=ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(h.MapTilePath),ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(h.MiniMapTilePath));_=this._Ai(i,t);if(2===this.Ata){var r=this._Ui+`_${s}_`+a;const o=DataTableUtil_1.DataTableUtil.GetDataTableRow(this.Iua,r);ResourceSystem_1.ResourceSystem.LoadAsync(_,UE.Texture,t=>{if(t?.IsValid()&&(e.SetTexture(t),o)){let i=V2FogPath;1===this.PUi&&(i=V2FogMiniPath),o.IsFogP1&&(t=`${i}/T_FogTiles_${this._Ui}_${s}_${a}_UI_p1.T_FogTiles_${this._Ui}_${s}_${a}_UI_p1`,this.gil(e,t,1)),o.IsFogP2&&(t=`${i}/T_FogTiles_${this._Ui}_${s}_${a}_UI_p2.T_FogTiles_${this._Ui}_${s}_${a}_UI_p2`,this.gil(e,t,2))}})}else{r=ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(h.FogTilePath),h=ConfigManager_1.ConfigManager.MapConfig.GetUiResourcePathById(h.MiniFogTilePath);const n=this._Ai(r,h);ResourceSystem_1.ResourceSystem.LoadAsync(_,UE.Texture,i=>{i?.IsValid()&&(e.SetTexture(i),StringUtils_1.StringUtils.IsEmpty(n)?e.SetColor(this.WUi):this.cAi(e,n))})}}}izs(i,t,e){var s=Vector2D_1.Vector2D.Create(i),t=(s.DivisionEqual(MapDefine_1.DETAIL_TILE_REALSIZE*MapDefine_1.UNIT),s.X-t+1),s=s.Y+e,e=(this.XUi=i.X,this.$Ui=i.Y,MapDefine_1.MINI_MAP_RADIUS/MapDefine_1.DETAIL_TILE_REALSIZE),i=Math.min(t+e,1),a=Math.max(t-e,0),h=Math.min(s+e,1),_=Math.max(s-e,0),i=new UE.LinearColor(i-a,h-_,a,_),h=new UE.LinearColor(2*e-i.R,i.G,Math.min(1-e+t,1),_),t=new UE.LinearColor(i.R,2*e-i.G,a,Math.max(s-e-1,0));return[i,h,t,new UE.LinearColor(h.R,t.G,h.B,t.A)]}rzs(t,e,s){var a=Vector2D_1.Vector2D.Create();for(let i=0;i<t.length;i++){var h=t[i],_=(h.SetWidth(Math.max(s[i].R*MapDefine_1.DETAIL_TILE_REALSIZE,0)),h.SetHeight(Math.max(s[i].G*MapDefine_1.DETAIL_TILE_REALSIZE,0)),e[2*i]),r=e[2*i+1];a.X=(_-.5-.5+s[i].B+s[i].R/2)*MapDefine_1.DETAIL_TILE_SPACE,a.Y=(r-.5+.5-s[i].A-s[i].G/2)*MapDefine_1.DETAIL_TILE_SPACE,h.SetAnchorOffset(a.ToUeVector2D()),h.SetCustomMaterialVectorParameter(new UE.FName("UVCorrect"),s[i])}}ShowSubMapByPosition(i,t,e=!1){var s;1===this.PUi||0===i||(s=this.dil,this.CreateSubMapTile(i,-t,s),this.HUi?.SetUIActive(!0),this.dil=!0,s)||this.IKs(!1,void 0,e)}HideSubMap(){this.dil?(this.vKs.forEach(i=>{this.TKs(i,!1)}),this.IKs(!0,()=>{this.HUi?.SetUIActive(!1)})):this.HUi?.SetUIActive(!1),this.dil=!1}IKs(i=!1,t,e=!1){var s=this.MKs?.GetPlayTween();s&&(this.yKs(),this.MKs.Stop(),s.from=i?this.SKs:0,s.to=i?0:this.SKs,s.duration=e?0:.2,t&&(i=(0,puerts_1.toManualReleaseDelegate)(t),this.EKs=s.RegisterOnComplete(i)),this.MKs.Play())}yKs(){void 0!==this.EKs&&((this.MKs?.GetPlayTween()).UnregisterOnComplete(this.EKs),this.EKs=void 0)}TKs(i,t=!0){var e,s,a=this.MKs?.GetPlayTween();a&&(s=(e=i.GetOwner().GetComponentByClass(UE.LGUIPlayTweenComponent.StaticClass()))?.GetPlayTween(),e.Stop(),s.duration=a.duration-.25*a.duration,s.from=t?0:i.GetAlpha(),s.to=t?i.GetAlpha():0,e.Play())}LKs(i,t=!0){var e=i.GetOwner().GetComponentByClass(UE.LGUIPlayTweenComponent.StaticClass()),s=e?.GetPlayTween();e.Stop();s.duration=t?.3:.15,t?(s.from=i.GetAlpha(),s.to=1):s.to=i.GetAlpha(),e.Play()}GetSubMapFloorCountByGroupId(i){return 0===i?0:ConfigManager_1.ConfigManager.MapConfig.GetSubMapConfigByGroupId(i).length}GetWorldMapCenterAreaId(){var i=this.GetSubMapGroupByRootItemPosition(),i=ConfigManager_1.ConfigManager.MapConfig.GetSubMapConfigByGroupId(i);if(i&&0<i.length){i=i.find(i=>-1===i.Floor);if(i&&0<i.Area.length)return i.Area[0]}return 0}GetSubMapGroupByRootItemPosition(){var i=UE.LGUIBPLibrary.SimulationLineTraceOnCenterScreen(GlobalData_1.GlobalData.World,this.D7s);if(i&&i.enterComponent){var t=this.kUi.GetWidth(),e=this.kUi.GetHeight(),i=i.GetLocalPointInPlane(),s=MapUtil_1.MapUtil.GetTilePositionByUiPosition(i),a=s.X,s=s.Y,h=(i.X+t/2)%MapDefine_1.DETAIL_TILE_SPACE,_=(i.Y+e/2)%MapDefine_1.DETAIL_TILE_SPACE,r=this.lPn.get(a+"_"+s);if(r)for(let t=0;t<r?.MultiMapRangeList.length;t++){var o=r?.MultiMapRangeList[t];for(let i=0;i<o.ArrayInt.length;i+=4){var n=o.ArrayInt[i],M=o.ArrayInt[i+1],l=o.ArrayInt[i+2],g=o.ArrayInt[i+3];if(n<=h&&h<=l&&M<=_&&_<=g)return r.MultiMapList[t]}}}return 0}CreateSubMapTile(i,e,s=!1){this.vKs=[];i=ConfigCommon_1.ConfigCommon.ToList(ConfigManager_1.ConfigManager.MapConfig.GetSubMapConfigByGroupId(i));if(i){let t=0;i.sort((i,t)=>i.Floor===e&&t.Floor!==e?1:i.Floor!==e&&t.Floor===e?-1:i.Floor-t.Floor);for(const r of i)for(const o of r.MapTilePath){this.GUi&&!this.GUi[t]&&(a=LguiUtil_1.LguiUtil.CopyItem(this.jUi,this.HUi),this.GUi.push(a)),t++;var a=o.split("_"),h=Number(a[2]),_=Number(a[3]);const n=this.GUi[t-1];s&&n.SetColor(this.ish),n.SetAnchorOffsetX((h-.5)*MapDefine_1.DETAIL_TILE_SPACE),n.SetAnchorOffsetY((_-.5)*MapDefine_1.DETAIL_TILE_SPACE),n.SetHierarchyIndex(t),n.SetWidth(MapDefine_1.DETAIL_TILE_SPACE),n.SetHeight(MapDefine_1.DETAIL_TILE_SPACE);h=ConfigManager_1.ConfigManager.UiResourceConfig.GetResourcePath(o);const M=e===r.Floor?255:20+20*t;ResourceSystem_1.ResourceSystem.LoadAsync(h,UE.Texture,i=>{i?(n.SetTexture(i),n.SetColor(new UE.Color(M,M,M,255))):n.SetColor(this.WUi),n.SetUIActive(!0),s?this.LKs(n,e===r.Floor):this.TKs(n,!0),this.vKs.push(n)})}for(let i=t;i<this.GUi.length;i++)this.GUi[i].SetUIActive(!1)}}ConvertUiPositionToMapTilePosition(i){return Vector2D_1.Vector2D.Create()}rAi(){for(const i of this.qUi)this.uAi(i);for(const t of this.GUi)this.nsh(t,void 0)}HandleFogAreaOpen(e){if(this.zUi=[],this.JUi||(this.JUi=(0,puerts_1.toManualReleaseDelegate)(this.nAi)),2===this.Ata){var i=DataTableUtil_1.DataTableUtil.GetDataTableRow(this.yua,e.toString());if(void 0===i)return void(Log_1.Log.CheckWarn()&&Log_1.Log.Warn("Map",63,"fog data not found",["fogId",e]));var s=i.Mask;let t=!1;for(let i=0;i<this.qUi.length;i++){var a=this.qUi[i];a&&a.texture&&(a=a.texture.GetName(),a=this.bUi(a),a=`${this._Ui}_${a.X}_`+a.Y,a=DataTableUtil_1.DataTableUtil.GetDataTableRow(this.Iua,a))&&a.AreaFogIDs&&a.AreaFogIDs.Contains(e)&&((a=new FogOpenParams).MapTileIndex=i,this.zUi.push(a),a.ChannelV2=s,t||(a=this.Mwl(e),a=Vector_1.Vector.Create(a.X,a.Y,a.Z),EventSystem_1.EventSystem.Emit(EventDefine_1.EEventName.MoveWorldMapToPosition,a),t=!0))}}else for(let i=0;i<this.qUi.length;i++){var t,h=this.qUi[i],h=this.mAi(h,e);void 0!==h&&((t=new FogOpenParams).MapTileIndex=i,t.Channel=h,this.zUi.push(t))}this.nAi(0)}mAi(i,t){if(i&&i.texture){i=i.texture.GetName();if(i!==MAP_TILE_COMMON){i=this.bUi(i),i=i.X+"_"+i.Y,i=ConfigManager_1.ConfigManager.MapConfig.GetFogBlockConfig(i,this._Ui);if(i)return t===i.R?0:t===i.G?1:t===i.B?2:t===i.Alpha?3:void 0}}}sAi(i,t,e){var s=i.GetColor().ReinterpretAsLinear();switch(t){case 0:s.R=e;break;case 1:s.G=e;break;case 2:s.B=e;break;case 3:s.A=e}i.SetColor(s.ToFColor(!1))}Cil(i,t,e){if(t<4){var s=i.CustomVectorParameterTMap.Get(FOG_MASK_1),a=s||new UE.LinearColor(0,0,0,0);switch(t){case 0:a.R=e;break;case 1:a.G=e;break;case 2:a.B=e;break;case 3:a.A=e}i.SetCustomMaterialVectorParameter(FOG_MASK_1,a)}else{var s=i.CustomVectorParameterTMap.Get(FOG_MASK_2),h=s||new UE.LinearColor(0,0,0,0);switch(t){case 4:h.R=e;break;case 5:h.G=e;break;case 6:h.B=e;break;case 7:h.A=e}i.SetCustomMaterialVectorParameter(FOG_MASK_2,h)}}ywl(){if(2===this.Ata&&this.zUi&&0!==this.zUi.length&&this.qUi){let i=void 0;for(const h of this.zUi){var t,e,s,a=h.MapTileIndex;void 0===i&&(s=this.h8l.FogUnlockItem,e=UiLayer_1.UiLayer.UiRootItem.GetRenderCanvas(),t=s.GetAnchorOffset(),s=s.GetPositionInViewPort(!0),e=e.GetViewportSize(),i=new UE.Vector2D(s.X/e.X,s.Y/e.Y),Log_1.Log.CheckDebug())&&Log_1.Log.Debug("Map",63,"Fog unlock center screen uv",["anchorOffset",t],["screenUv",i]),0<=a&&a<this.qUi.length&&((s=this.qUi[a]).SetCustomMaterialScalarParameter(FOG_UNLOCK_CENTERX_NAME,i?.X??.5),s.SetCustomMaterialScalarParameter(FOG_UNLOCK_CENTERY_NAME,i?.Y??.5))}}}Mwl(i){var t=ConfigManager_1.ConfigManager.WorldMapConfig.GetMapFogConfig(i);return void 0===t?(MapLogger_1.MapLogger.Error(63,`FogId ${i} not found in config, can not unlock material effect`),new UE.VectorDouble(0,0,0)):(i=t.FogUnlockPosition,new UE.VectorDouble(i[0],i[1],i[2]))}HandleDelegate(){var i;this.JUi&&(this.ywl(),i=ConfigManager_1.ConfigManager.MapConfig.GetMapDissolveTime(),this.ZUi?.IsValid()&&(this.ZUi.Kill(),this.ZUi=void 0),this.ZUi=UE.LTweenBPLibrary.FloatTo(GlobalData_1.GlobalData.World,this.JUi,0,1,i))}UnBindDelegate(){this.JUi&&((0,puerts_1.releaseManualReleaseDelegate)(this.nAi),this.JUi=void 0),this.ZUi?.IsValid()&&(this.ZUi.Kill(),this.ZUi=void 0)}uAi(i,t,e=0){var s;i&&i.texture&&((s=i.texture.GetName())===MAP_TILE_COMMON?i.SetColor(this.WUi):(s=(s=this.bUi(s)).X+"_"+s.Y,2===this.Ata?(t?.IsValid()&&(1===e?i.SetCustomMaterialTextureParameter(FOG_TEXTURE_1,t):i.SetCustomMaterialTextureParameter(FOG_TEXTURE_2,t)),this.ssh(i,s)):(e=ConfigManager_1.ConfigManager.MapConfig.GetFogBlockConfig(s,this._Ui))?(t?.IsValid()&&i.SetCustomMaterialTextureParameter(FOG_TEXTURE_NAME,t),s=this.ash(e),i.SetColor(s)):i.SetColor(this.WUi)))}nsh(t,i,e=0){if(t&&t.texture){var s=t.texture.GetName();if(s===MAP_TILE_COMMON)t.SetColor(this.ish);else{var[s,a]=this.hsh(s);if(2===this.Ata){var a=this._Ui+"_"+a;const h=DataTableUtil_1.DataTableUtil.GetDataTableRow(this.Iua,a);void 0!==h&&void 0!==this.OpenFogSet&&this.OpenFogSet?.forEach(i=>{h.AreaFogIDs.Contains(i)&&t.SetColor(new UE.Color(MAX_COLOR,MAX_COLOR,MAX_COLOR,MAX_COLOR))})}else s?(i?.IsValid()&&t.SetCustomMaterialTextureParameter(FOG_TEXTURE_NAME,i),a=this.lsh(s),t.SetColor(a)):t.SetColor(this.ish)}}}hsh(i){i=this.bUi(i),i=i.X+"_"+i.Y;return[ConfigManager_1.ConfigManager.MapConfig.GetFogBlockConfig(i,this._Ui),i]}ssh(i,t){t=this._Ui+"_"+t;const e=DataTableUtil_1.DataTableUtil.GetDataTableRow(this.Iua,t),s=[0,0,0,0,0,0,0,0];if(void 0!==e&&void 0!==this.OpenFogSet&&this.OpenFogSet?.forEach(i=>{e.AreaFogIDs.Contains(i)&&(i=DataTableUtil_1.DataTableUtil.GetDataTableRow(this.yua,i.toString()),s[i.Mask]=1)}),ModelManager_1.ModelManager.WorldMapModel.EnableInstanceDungeonFilterMark)for(let i=0;i<s.length;i++)s[i]=1;var a=new UE.LinearColor(s[0],s[1],s[2],s[3]),h=new UE.LinearColor(s[4],s[5],s[6],s[7]),_=DataTableUtil_1.DataTableUtil.GetDataTableRow(this.Iua,t);if(this.OpenFogSet&&_)for(let i=0;i<_.AreaFogIDs.Num();i++){var r=_.AreaFogIDs.Get(i);if(this.OpenFogSet.has(r))switch(DataTableUtil_1.DataTableUtil.GetDataTableRow(this.yua,r.toString()).Mask){case 0:a.R=1;break;case 1:a.G=1;break;case 2:a.B=1;break;case 3:a.A=1;break;case 4:h.R=1;break;case 5:h.G=1;break;case 6:h.B=1;break;case 7:h.A=1}}i.SetCustomMaterialVectorParameter(FOG_MASK_1,a),i.SetCustomMaterialVectorParameter(FOG_MASK_2,h)}ash(i){var t=this.OpenFogSet.has(i.R)?MAX_COLOR:0,e=this.OpenFogSet.has(i.G)?MAX_COLOR:0,s=this.OpenFogSet.has(i.B)?MAX_COLOR:0,i=this.OpenFogSet.has(i.Alpha)?MAX_COLOR:0;return new UE.Color(t,e,s,i)}lsh(i){var t=this.OpenFogSet.has(i.R)?MAX_COLOR:0,e=this.OpenFogSet.has(i.G)?MAX_COLOR:0,s=this.OpenFogSet.has(i.B)?MAX_COLOR:0,i=this.OpenFogSet.has(i.Alpha)?MAX_COLOR:0;return t===MAX_COLOR||e===MAX_COLOR||s===MAX_COLOR||i===MAX_COLOR?new UE.Color(MAX_COLOR,MAX_COLOR,MAX_COLOR,MAX_COLOR):new UE.Color(t,e,s,i)}InValidTile(i){i=MapUtil_1.MapUtil.GetTilePosition(i);return i.X>=this.xUi.MinX&&i.X<=this.xUi.MaxX&&i.Y>=this.xUi.MinY&&i.Y<=this.xUi.MaxY}}exports.MapTileMgr=MapTileMgr;
//# sourceMappingURL=MapTileMgr.js.map