'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    var n,
      s = arguments.length,
      r =
        s < 3
          ? t
          : null === o
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      r = Reflect.decorate(e, t, i, o);
    else
      for (var a = e.length - 1; 0 <= a; a--)
        (n = e[a]) && (r = (s < 3 ? n(r) : 3 < s ? n(t, i, r) : n(t, i)) || r);
    return 3 < s && r && Object.defineProperty(t, i, r), r;
  };
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.MonsterBehaviorComponent = void 0);
const UE = require('ue'),
  Protocol_1 = require('../../../../../../Core/Define/Net/Protocol'),
  EntityComponent_1 = require('../../../../../../Core/Entity/EntityComponent'),
  RegisterComponent_1 = require('../../../../../../Core/Entity/RegisterComponent'),
  EventDefine_1 = require('../../../../../Common/Event/EventDefine'),
  EventSystem_1 = require('../../../../../Common/Event/EventSystem'),
  SkeletalMeshEffectContext_1 = require('../../../../../Effect/EffectContext/SkeletalMeshEffectContext'),
  EffectSystem_1 = require('../../../../../Effect/EffectSystem'),
  GlobalData_1 = require('../../../../../GlobalData'),
  ModelManager_1 = require('../../../../../Manager/ModelManager'),
  CombatMessage_1 = require('../../../../../Module/CombatMessage/CombatMessage'),
  CharacterUnifiedStateTypes_1 = require('../../../Common/Component/Abilities/CharacterUnifiedStateTypes'),
  MONSTER_ENTER_WUYINQU_EFFCT =
    '/Game/Aki/Effect/DataAsset/Niagara/Common/Wuyinqu/DA_Fx_Wuyinqu_Ordinary_Origin.DA_Fx_Wuyinqu_Ordinary_Origin';
let MonsterBehaviorComponent = class MonsterBehaviorComponent extends EntityComponent_1.EntityComponent {
  constructor() {
    super(...arguments),
      (this.Hte = void 0),
      (this.Xte = void 0),
      (this.N1t = void 0),
      (this.wAa = void 0),
      (this.Rne = 0),
      (this.BAa = 0),
      (this.tVr = void 0),
      (this.Kqr = (e, t) => {
        var i;
        t !== CharacterUnifiedStateTypes_1.ECharPositionState.Water ||
          this.Xte.HasTag(-1714966381) ||
          ((t = this.Hte.ActorLocationProxy),
          ((i = Protocol_1.Aki.Protocol.v4n.create()).e8n = t),
          CombatMessage_1.CombatNet.Call(18989, this.Entity, i));
      }),
      (this.qtn = () => {
        ModelManager_1.ModelManager.GameModeModel.IsMulti ||
          this.tVr.SetEnableMovementSync(
            !1,
            'MonsterBehaviorComponent LeaveFight'
          );
      }),
      (this.Ntn = (e, t) => {
        !t ||
          ModelManager_1.ModelManager.GameModeModel.IsMulti ||
          this.tVr.SetEnableMovementSync(
            !0,
            'MonsterBehaviorComponent InFight'
          );
      }),
      (this.bAa = (e, t) => {
        var i;
        t
          ? ((t = this.Entity?.GetComponent(3)?.SkeletalMesh) &&
              (((i = new SkeletalMeshEffectContext_1.SkeletalMeshEffectContext(
                this.Entity.Id
              )).SkeletalMeshComp = t),
              (this.BAa = EffectSystem_1.EffectSystem.SpawnEffect(
                GlobalData_1.GlobalData.World,
                t.GetSocketTransform(new UE.FName('Root')),
                MONSTER_ENTER_WUYINQU_EFFCT,
                'MonsterBehaviorComponent.DisableTag exist',
                i
              ))),
            (this.Rne = this.Entity.Disable(
              'MonsterBehaviorComponent.DisableTag exist'
            )))
          : (0 !== this.BAa &&
              (EffectSystem_1.EffectSystem.StopEffectById(
                this.BAa,
                'MonsterBehaviorComponent.DisableTag do not exist',
                !1
              ),
              (this.BAa = 0)),
            this.Entity.Enable(
              this.Rne,
              'MonsterBehaviorComponent.DisableTag do not exist'
            ));
      });
  }
  OnStart() {
    return (
      (this.Hte = this.Entity.CheckGetComponent(3)),
      (this.Xte = this.Entity.CheckGetComponent(188)),
      (this.tVr = this.Entity.CheckGetComponent(59)),
      EventSystem_1.EventSystem.AddWithTarget(
        this.Entity,
        EventDefine_1.EEventName.CharOnPositionStateChanged,
        this.Kqr
      ),
      EventSystem_1.EventSystem.AddWithTarget(
        this.Entity,
        EventDefine_1.EEventName.AiTaskWanderForResetEnd,
        this.qtn
      ),
      (this.N1t = this.Xte.ListenForTagAddOrRemove(1996802261, this.Ntn)),
      (this.wAa = this.Xte.ListenForTagAddOrRemove(1681491134, this.bAa)),
      !0
    );
  }
  OnActivate() {
    ModelManager_1.ModelManager.GameModeModel.IsMulti ||
      this.tVr?.SetEnableMovementSync(
        !1,
        'MonsterBehaviorComponent OnActivate'
      );
  }
  OnEnd() {
    return (
      EventSystem_1.EventSystem.RemoveWithTarget(
        this.Entity,
        EventDefine_1.EEventName.CharOnPositionStateChanged,
        this.Kqr
      ),
      EventSystem_1.EventSystem.RemoveWithTarget(
        this.Entity,
        EventDefine_1.EEventName.AiTaskWanderForResetEnd,
        this.qtn
      ),
      this.N1t && this.N1t.EndTask(),
      (this.N1t = void 0),
      this.wAa && (this.wAa.EndTask(), (this.wAa = void 0)),
      0 !== this.BAa &&
        (EffectSystem_1.EffectSystem.StopEffectById(
          this.BAa,
          'MonsterBehaviorComponent.OnEnd',
          !0
        ),
        (this.BAa = 0)),
      !0
    );
  }
};
(MonsterBehaviorComponent = __decorate(
  [(0, RegisterComponent_1.RegisterComponent)(79)],
  MonsterBehaviorComponent
)),
  (exports.MonsterBehaviorComponent = MonsterBehaviorComponent);
//# sourceMappingURL=MonsterBehaviorComponent.js.map
