
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const Log_1=require("../../../../Core/Common/Log"),GlobalData_1=require("../../../GlobalData"),TsTaskAbortImmediatelyBase_1=require("./TsTaskAbortImmediatelyBase");class TsTaskSelectSkill extends TsTaskAbortImmediatelyBase_1.default{constructor(){super(...arguments),this.SkillType=-1,this.DebugLog=!1,this.IsInitTsVariables=!1,this.TsSkillType=0,this.TsDebugLog=!1}InitTsVariables(){this.IsInitTsVariables&&!GlobalData_1.GlobalData.IsPlayInEditor||(this.IsInitTsVariables=!0,this.TsSkillType=this.SkillType,this.TsDebugLog=this.DebugLog)}ReceiveTickAI(s,t,e){var i,a,o=s.AiController;o?(this.InitTsVariables(),o.AiSkill?(i=o.CharAiDesignComp.Entity.GetComponent(34)).Valid?(a=o.AiHateList.GetCurrentTarget())?.Valid?i.SelectSkillWithTarget(o,i,a.Entity.GetComponent(3),this.TsSkillType,this.TsDebugLog)?this.FinishExecute(!0):this.FinishExecute(!1):i.SelectSkillWithoutTarget(o,i,this.TsSkillType)?this.FinishExecute(!0):this.FinishExecute(!1):this.FinishExecute(!1):(Log_1.Log.CheckError()&&Log_1.Log.Error("BehaviorTree",6,"没有配置技能",["AiBaseId",o.AiBase.Id]),this.FinishExecute(!1))):(Log_1.Log.CheckError()&&Log_1.Log.Error("BehaviorTree",6,"错误的Controller类型",["Type",s.GetClass().GetName()]),this.FinishExecute(!1))}}exports.default=TsTaskSelectSkill;
//# sourceMappingURL=TsTaskSelectSkill.js.map