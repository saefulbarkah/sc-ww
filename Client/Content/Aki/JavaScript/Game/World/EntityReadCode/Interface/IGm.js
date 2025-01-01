
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.gmCommandConfigs=exports.gmSubTypeConfig=exports.gmTypeConfig=void 0,exports.gmTypeConfig={Quest:"任务",Dungeon:"副本",LevelPlay:"玩法",Entity:"实体",System:"系统",Other:"其它"},exports.gmSubTypeConfig={System:"系统",Process:"进程",Attributes:"属性",Ability:"养成",Action:"行为",Flow:"剧情"},exports.gmCommandConfigs={GmSetLevelPlayUpdateForce:{CnName:"刷新玩法",GmType:"LevelPlay",GmSubType:"System",ParseType:"Server",Code:"GmSetLevelPlayUpdateForce"},TeleportToLevelPlayCenter:{CnName:"传送到玩法中心",GmType:"LevelPlay",GmSubType:"System",ParseType:"Server",Code:"gmtransferlevelplay"},SkipToLevelPlayNode:{CnName:"一键推进",GmType:"LevelPlay",GmSubType:"Process",ParseType:"Client",Code:"SkipToLevelPlayNode"},FinishCurrentLevelPlayNode:{CnName:"完成当前节点",GmType:"LevelPlay",GmSubType:"Process",ParseType:"Client",Code:"FinishCurrentLevelPlayNode"},AcceptQuest:{CnName:"接任务",GmType:"Quest",GmSubType:"System",ParseType:"Server",Code:"accept_quest"},UnlockQuest:{CnName:"解锁任务",GmType:"Quest",GmSubType:"System",ParseType:"Server",Code:"release_quest"},SkipToQuestNode:{CnName:"一键推进",GmType:"Quest",GmSubType:"Process",ParseType:"Client",Code:"SkipToQuestNode"},FinishCurrentTrackQuestNode:{CnName:"完成当前节点",GmType:"Quest",GmSubType:"Process",ParseType:"Client",Code:"FinishCurrentTrackQuestNode"},TeleportToCurQuestTrackPosition:{CnName:"传送到追踪位置",GmType:"Quest",GmSubType:"Process",ParseType:"Client",Code:"TeleportToCurQuestTrackPosition"},PlayFlowForGm:{CnName:"播剧情",GmType:"Quest",GmSubType:"Flow",ParseType:"Server",Code:"playflow"},SkipToInstanceDungeonNode:{CnName:"一键推进",GmType:"Dungeon",GmSubType:"Process",ParseType:"Client",Code:"SkipToInstanceDungeonNode"},FinishCurTrackDungeonNode:{CnName:"完成当前节点",GmType:"Dungeon",GmSubType:"Process",ParseType:"Client",Code:"FinishCurTrackDungeonNode"},TeleportToCurDungeonTrackPosition:{CnName:"传送到追踪位置",GmType:"Dungeon",GmSubType:"Process",ParseType:"Client",Code:"TeleportToCurDungeonTrackPosition"},ResetCurrentDungeon:{CnName:"重置副本",GmType:"Dungeon",GmSubType:"Process",ParseType:"Server",Code:"resetcurrentinst"},ExitDungeon:{CnName:"退出副本",GmType:"Dungeon",GmSubType:"Process",ParseType:"Server",Code:"gmleaveinst"},GmRoguelikeStart:{CnName:"进入肉鸽副本",GmType:"Dungeon",GmSubType:"System",ParseType:"Server",Code:"GmRoguelikeStart"},GmGotoRogueRoom:{CnName:"进入肉鸽房间",GmType:"Dungeon",GmSubType:"System",ParseType:"Server",Code:"GmGotoRogueRoom"},TeleportToEntity:{CnName:"传送到实体",GmType:"Entity",GmSubType:"System",ParseType:"Client",Code:"TeleportToEntity"},UnlockEntityForGm:{CnName:"解锁实体",GmType:"Entity",GmSubType:"Attributes",ParseType:"Server",Code:"gmunlockentity"},ShowTipsView:{CnName:"屏蔽弹窗",GmType:"System",GmSubType:"System",ParseType:"Client",Code:"ShowTipsView"},ShieldGuide:{CnName:"屏蔽引导",GmType:"System",GmSubType:"System",ParseType:"Client",Code:"LockGuide"},OpenFunc:{CnName:"开启系统",GmType:"System",GmSubType:"System",ParseType:"Server",Code:"funcopengm"},UnlockAllExploreSkill:{CnName:"解锁所有探索技能",GmType:"System",GmSubType:"Ability",ParseType:"Server",Code:"gmunlockexploreskillall"},SetTime:{CnName:"设置时间",GmType:"System",GmSubType:"System",ParseType:"Client",Code:"SetTime"},ActivateTeleport:{CnName:"解锁传送点",GmType:"System",GmSubType:"System",ParseType:"Server",Code:"activateteleport"},SetUnopenedAreaPullback:{CnName:"控制地图边界",GmType:"System",GmSubType:"System",ParseType:"Client",Code:"SetUnopenedAreaPullback"},TeleportToPos:{CnName:"传送到坐标点",GmType:"System",GmSubType:"System",ParseType:"Server",Code:"gmteleporttopositiona"},UnfreezeInstanceLimit:{CnName:"解除编队限制",GmType:"System",GmSubType:"System",ParseType:"Client",Code:"UnfreezeInstanceLimit"},UpdateSceneRoles:{CnName:"推送场景编队",GmType:"System",GmSubType:"System",ParseType:"Server",Code:"GmUpdateSceneRoles"},AddAllRole:{CnName:"添加所有角色",GmType:"System",GmSubType:"Ability",ParseType:"Server",Code:"add_all_role"},AddNewRole:{CnName:"添加角色",GmType:"System",GmSubType:"Ability",ParseType:"Server",Code:"add_new_role_config"},SetAllRoleToGraduate:{CnName:"角色毕业",GmType:"System",GmSubType:"Ability",ParseType:"Server",Code:"set_all_role_to_graduate"},AddAllItem:{CnName:"添加所有道具",GmType:"System",GmSubType:"Ability",ParseType:"Server",Code:"add_item_all"},AddItem:{CnName:"添加道具",GmType:"System",GmSubType:"Ability",ParseType:"Client",Code:"AddItem"},GetAllGraduatedPhantom:{CnName:"添加毕业幻象",GmType:"System",GmSubType:"Ability",ParseType:"Server",Code:"phantomgraduate"},AddAllPhantom:{CnName:"添加所有幻象",GmType:"System",GmSubType:"Ability",ParseType:"Server",Code:"addallphantom"},GetAllGraduatedWeapon:{CnName:"添加毕业武器",GmType:"System",GmSubType:"Ability",ParseType:"Server",Code:"weaponallboost"},SetEquippedWeaponToGraduate:{CnName:"装备武器毕业",GmType:"System",GmSubType:"Ability",ParseType:"Server",Code:"weaponboost"},EquipGraduatedWeaponToTeam:{CnName:"队伍换满级武器",GmType:"System",GmSubType:"Ability",ParseType:"Server",Code:"gmformationaddweapon"},OpenDungeonEntrance:{CnName:"打开副本入口",GmType:"System",GmSubType:"System",ParseType:"Client",Code:"OpenFbEntrance"},ExecuteActionList:{CnName:"执行行为列表",GmType:"Other",GmSubType:"Action",ParseType:"Client",Code:"RunActionList"},SavePlayerData:{CnName:"保存玩家数据",GmType:"System",GmSubType:"System",ParseType:"Server",Code:"GmSavePlayerData",Hide:!0},OpenBackLoginView:{CnName:"返回登录界面",GmType:"System",GmSubType:"System",ParseType:"Client",Code:"OpenBackLoginView",Hide:!0},BrokenRockHotFix:{CnName:"热更破碎岩石玩法",GmType:"Other",GmSubType:"System",ParseType:"Client",Code:"BrokenRockConfigHotFix",Hide:!0}};
//# sourceMappingURL=IGm.js.map