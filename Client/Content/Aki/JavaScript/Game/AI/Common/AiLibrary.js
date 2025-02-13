
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AiLibrary=void 0;const Info_1=require("../../../Core/Common/Info"),Log_1=require("../../../Core/Common/Log"),Vector_1=require("../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../Core/Utils/MathUtils"),BlackboardController_1=require("../../World/Controller/BlackboardController");class AiLibrary{static IsSkillAvailable(o,r,t,e,l,i,a,_,s,g,c=!1){var n,L=o.AiSkill.SkillInfos.get(r);return!!L&&!!(n=o.AiSkill.SkillPreconditionMap.get(L.SkillPreconditionId))&&!(!n.NeedTarget||((c=c&&!Info_1.Info.IsBuildShipping)&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("AI",6,"Detect Skill",["SkillInfoId",r]),0<=l&&L.SkillType!==l?(c&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("AI",6,"FailType",["Type",l]),1):o.AiSkill.CanActivate(r)&&t.IsCanUseSkill(Number(L.SkillId))&&o.AiSkill.CanActivate(r)?n.NeedTag&&(!e.Valid||o.AiSkill.PreconditionTagMap.has(L.SkillPreconditionId)&&!e.HasTag(o.AiSkill.PreconditionTagMap.get(L.SkillPreconditionId).TagId))?(c&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("AI",6,"FailTag"),1):!(MathUtils_1.MathUtils.InRangeAngle(i,n.TargetAngleRange)&&MathUtils_1.MathUtils.InRange(a,n.HeightRange)&&(!g||MathUtils_1.MathUtils.InRange(_,n.DistanceRange)&&MathUtils_1.MathUtils.InRangeAngle(s,n.AngleRange)))&&(c&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("AI",6,"FailLocation",["TargetAngle",i],["Distance",_],["Angle",s],["Height",a]),1):(c&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("AI",6,"FailCD"),1)))}static SelectSkillWithTarget(o,r,t,e,l=!1){var i=o.CharActorComp,a=i.Entity.GetComponent(200),_=Vector_1.Vector.Create(),s=(MathUtils_1.MathUtils.InverseTransformPositionNoScale(t.FloorLocation,t.ActorRotationProxy,i.FloorLocation,_),Vector_1.Vector.GetAngleByVector2D(_)),g=(MathUtils_1.MathUtils.InverseTransformPositionNoScale(i.FloorLocation,i.ActorRotationProxy,t.FloorLocation,_),_.Z),c=Math.max(_.Size2D()-i.ScaledRadius-t.ScaledRadius,MathUtils_1.MathUtils.SmallNumber),n=Vector_1.Vector.GetAngleByVector2D(_);let L=0,I=0,h=0;l&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("AI",6,"SelectSkillWithTarget",["Owner",o.CharActorComp.Actor.GetName()]);for(const u of o.AiSkill.ActiveSkillGroup)for(const S of o.AiSkill.BaseSkill.RandomSkills[u].ArrayInt){var d,k=o.AiSkill.SkillInfos.get(S);k?k.SkillWeight<=0||AiLibrary.IsSkillAvailable(o,S,r,a,e,s,g,c,n,!0,l)&&(d=k.SkillWeight,L+=d,MathUtils_1.MathUtils.GetRandomRange(0,L)<d)&&(I=S,h=Number(k.SkillId)):Log_1.Log.CheckError()&&Log_1.Log.Error("BehaviorTree",6,"没有配置技能库",["Id",S])}return l&&Log_1.Log.CheckInfo()&&Log_1.Log.Info("AI",6,"SelectSkillWithTarget Success",["SkillId",h]),!!h&&(BlackboardController_1.BlackboardController.SetStringValueByEntity(i.Entity.Id,"SkillId",h.toString()),BlackboardController_1.BlackboardController.SetIntValueByEntity(i.Entity.Id,"SkillInfoId",I),!0)}static SelectSkillWithoutTarget(a,_,s){var o=a.CharActorComp;const g=o.Entity.GetComponent(200);let c=0,n=0,L=0;return a.AiSkill.ActiveSkillGroup.forEach((o,r,t)=>{a.AiSkill.BaseSkill.RandomSkills[o].ArrayInt.forEach((o,r,t)=>{var e,l,i=a.AiSkill.SkillInfos.get(o);i?(l=a.AiSkill.SkillPreconditionMap.get(i.SkillPreconditionId))?l.NeedTarget||0<=s&&i.SkillType!==s||_.IsCanUseSkill(Number(i.SkillId))&&a.AiSkill.CanActivate(o)&&(e=a.AiSkill.PreconditionTagMap.get(i.SkillPreconditionId)?.TagId,!l.NeedTag||!e||g.Valid&&g.HasTag(e))&&(l=i.SkillWeight,c+=l,MathUtils_1.MathUtils.GetRandomRange(0,c)<l)&&(n=o,L=Number(i.SkillId)):Log_1.Log.CheckError()&&Log_1.Log.Error("BehaviorTree",6,"没有配置技能前置条件",["Id",i.SkillPreconditionId]):Log_1.Log.CheckError()&&Log_1.Log.Error("BehaviorTree",6,"没有配置技能库",["Id",o])})}),!!L&&(BlackboardController_1.BlackboardController.SetStringValueByEntity(o.Entity.Id,"SkillId",L.toString()),BlackboardController_1.BlackboardController.SetIntValueByEntity(o.Entity.Id,"SkillInfoId",n),!0)}}exports.AiLibrary=AiLibrary;
//# sourceMappingURL=AiLibrary.js.map