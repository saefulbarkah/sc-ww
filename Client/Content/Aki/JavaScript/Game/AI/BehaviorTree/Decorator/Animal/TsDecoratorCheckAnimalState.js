
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const UE=require("ue"),Log_1=require("../../../../../Core/Common/Log"),GlobalData_1=require("../../../../GlobalData");class TsDecoratorCheckAnimalState extends UE.BTDecorator_BlueprintBase{constructor(){super(...arguments),this.State=0,this.Inverse=!1,this.IsInitTsVariables=!1,this.TsState=0,this.TsInverse=!1}InitTsVariables(){this.IsInitTsVariables&&!GlobalData_1.GlobalData.IsPlayInEditor||(this.IsInitTsVariables=!0,this.TsState=this.State,this.TsInverse=this.Inverse)}PerformConditionCheckAI(t,e){var s=t.AiController;if(!s)return Log_1.Log.CheckError()&&Log_1.Log.Error("BehaviorTree",30,"错误的Controller类型",["Type",t.GetClass().GetName()]),!1;this.InitTsVariables();t=s.CharActorComp.Entity.GetComponent(14);return this.TsInverse?t.CurrentState()!==this.TsState:t.CurrentState()===this.TsState}}exports.default=TsDecoratorCheckAnimalState;
//# sourceMappingURL=TsDecoratorCheckAnimalState.js.map