
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScreenShotManager=void 0;const UE=require("ue"),Vector2D_1=require("../../../Core/Utils/Math/Vector2D"),GlobalData_1=require("../../GlobalData");class ScreenShotManager{static Clear(){this.ResetScreenShot()}static PrepareTakeScreenshot(t,e,r,s,a,i){this.ResetScreenShot();e=Vector2D_1.Vector2D.Create(e,r),r=Vector2D_1.Vector2D.Create(s,a),s=GlobalData_1.GlobalData.World;return this.nvo=UE.KuroGameScreenshotBPLibrary.PrepareTakeScreenshot(s,t,e.ToUeVector2D(),r.ToUeVector2D(),0,0,i),this.nvo}static ResetScreenShot(){this.nvo&&this.nvo.IsValid()&&this.nvo.Reset(),this.nvo=void 0}static RequestIOSPhotoLibraryAuthorization(){this.nvo?.RequestIOSPhotoLibraryAuthorization()}}(exports.ScreenShotManager=ScreenShotManager).nvo=void 0;
//# sourceMappingURL=ScreenShotManager.js.map