
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UnionModelTypeHelper=void 0;const fb_component_1=require("../../../../Game/World/EntityFb/fb-component"),FbLevelPrefab_1=require("./FbLevelPrefab"),FbModelId_1=require("./FbModelId"),FbNpcModel_1=require("./FbNpcModel");class UnionModelTypeHelper{static GetUnionModelTypeObject(e){switch(e){case fb_component_1.UnionModelType.LevelPrefab:return new fb_component_1.LevelPrefab;case fb_component_1.UnionModelType.ModelId:return new fb_component_1.ModelId;case fb_component_1.UnionModelType.NpcModel:return new fb_component_1.NpcModel;default:return}}static ReadUnionModelType(e,o){if(void 0!==o)switch(e){case fb_component_1.UnionModelType.LevelPrefab:return FbLevelPrefab_1.FbLevelPrefab.Create(o);case fb_component_1.UnionModelType.ModelId:return FbModelId_1.FbModelId.Create(o);case fb_component_1.UnionModelType.NpcModel:return FbNpcModel_1.FbNpcModel.Create(o);default:return}}}exports.UnionModelTypeHelper=UnionModelTypeHelper;
//# sourceMappingURL=UnionModelTypeHelper.js.map