
"use strict";var __decorate=this&&this.__decorate||function(t,i,o,e){var r,s=arguments.length,n=s<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,o):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,i,o,e);else for(var a=t.length-1;0<=a;a--)(r=t[a])&&(n=(s<3?r(n):3<s?r(i,o,n):r(i,o))||n);return 3<s&&n&&Object.defineProperty(i,o,n),n};Object.defineProperty(exports,"__esModule",{value:!0}),exports.RoleInhalationComponent=void 0;const EntityComponent_1=require("../../../../../Core/Entity/EntityComponent"),RegisterComponent_1=require("../../../../../Core/Entity/RegisterComponent"),Vector_1=require("../../../../../Core/Utils/Math/Vector"),MathUtils_1=require("../../../../../Core/Utils/MathUtils"),GlobalData_1=require("../../../../GlobalData"),ModelManager_1=require("../../../../Manager/ModelManager"),PreloadControllerClassPart1_1=require("../../../../Preload/PreloadControllerClassPart1");let RoleInhalationComponent=class RoleInhalationComponent extends EntityComponent_1.EntityComponent{constructor(){super(...arguments),this.Rne=void 0,this.Hte=void 0,this.Kel=-1,this.$el=!1,this.Xel=0,this.jgl=void 0,this.DKo=[],this.Yel=new Set,this.Wgl=-1,this.r7r=Vector_1.Vector.Create()}OnActivate(){this.Hte=this.Entity.GetComponent(3),this.Rne=this.Disable("RoleInhalationComponent 默认关闭Tick")}OnTick(t){ModelManager_1.ModelManager.CreatureModel.GetEntitiesInRange(this.Xel,1,this.DKo);for(const r of this.DKo){var i,o=r.Entity;o?.Valid&&this.zel(o,!1)&&((i=o.GetComponent(254)).StartInhalation(this.Entity),this.Yel.add(i),i=o.GetComponent(0))&&GlobalData_1.GlobalData.BpEventManager.开始吸取污染物.Broadcast(i.GetPbDataId())}for(const s of this.Yel){var e;s?.Valid&&s.Entity?.Valid?!this.zel(s.Entity,!0)&&(s.StopInhalation(),this.Yel.delete(s),e=s.Entity.GetComponent(0))&&GlobalData_1.GlobalData.BpEventManager.停止吸取污染物.Broadcast(e.GetPbDataId()):this.Yel.delete(s)}}zel(t,i){var o=t.GetComponent(254),e=t.GetComponent(197),r=t.GetComponent(191);if(void 0===o||void 0===e||void 0===r)return!1;if(r.HasTag(-991879492))return!1;if(this.Yel.has(o)&&!i)return!1;if(o.IsInCooldown)return!1;t=Vector_1.Vector.Create(this.Hte?.ActorLocationProxy),e=Vector_1.Vector.Create(e.ActorLocation);if(Vector_1.Vector.Dist(t,e)>this.Xel)return!1;if(o.IsHaling&&!i)return!1;if(-1!==this.Wgl&&!this.$el){PreloadControllerClassPart1_1.CameraController.CameraRotator.Vector(this.r7r),this.r7r.Normalize();t=Vector_1.Vector.Create(0,0,0),i=(e.Subtraction(PreloadControllerClassPart1_1.CameraController.CameraLocation,t),t.Normalize(),MathUtils_1.MathUtils.DotProduct(t,this.r7r));if(i<Math.cos(this.Wgl*Math.PI/180))return!1}if(this.jgl&&0<this.jgl.length)for(const s of this.jgl)if(!r.HasTag(s))return!1;return!(o.InhaledStrength>this.Kel)}StartInhalation(t,i,o,e,r){if(void 0!==this.Rne&&(this.Enable(this.Rne,"RoleInhalationComponent 开始吸取"),this.Rne=void 0,this.Kel=t,this.Xel=i,this.$el=o,this.Wgl=e,this.jgl=[],void 0!==r))for(const s of r)this.jgl.push(s.TagId)}StopInhalation(){if(void 0===this.Rne){this.Wgl=-1,this.Rne=this.Disable("RoleInhalationComponent 停止吸取");for(const t of this.Yel)t.StopInhalation();this.Yel.clear()}}};RoleInhalationComponent=__decorate([(0,RegisterComponent_1.RegisterComponent)(256)],RoleInhalationComponent),exports.RoleInhalationComponent=RoleInhalationComponent;
//# sourceMappingURL=RoleInhalationComponent.js.map