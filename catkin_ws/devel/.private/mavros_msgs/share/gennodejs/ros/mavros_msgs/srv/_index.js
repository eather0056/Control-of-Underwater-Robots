
"use strict";

let LogRequestEnd = require('./LogRequestEnd.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let CommandTOL = require('./CommandTOL.js')
let FileClose = require('./FileClose.js')
let SetMode = require('./SetMode.js')
let WaypointPull = require('./WaypointPull.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let WaypointPush = require('./WaypointPush.js')
let LogRequestList = require('./LogRequestList.js')
let FileTruncate = require('./FileTruncate.js')
let CommandAck = require('./CommandAck.js')
let FileRename = require('./FileRename.js')
let FileMakeDir = require('./FileMakeDir.js')
let FileOpen = require('./FileOpen.js')
let ParamGet = require('./ParamGet.js')
let CommandLong = require('./CommandLong.js')
let FileWrite = require('./FileWrite.js')
let FileChecksum = require('./FileChecksum.js')
let SetMavFrame = require('./SetMavFrame.js')
let ParamSet = require('./ParamSet.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let CommandInt = require('./CommandInt.js')
let ParamPull = require('./ParamPull.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let MountConfigure = require('./MountConfigure.js')
let CommandBool = require('./CommandBool.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let LogRequestData = require('./LogRequestData.js')
let StreamRate = require('./StreamRate.js')
let MessageInterval = require('./MessageInterval.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let ParamPush = require('./ParamPush.js')
let FileRead = require('./FileRead.js')
let WaypointClear = require('./WaypointClear.js')
let FileRemove = require('./FileRemove.js')
let CommandHome = require('./CommandHome.js')
let FileList = require('./FileList.js')

module.exports = {
  LogRequestEnd: LogRequestEnd,
  FileRemoveDir: FileRemoveDir,
  CommandTOL: CommandTOL,
  FileClose: FileClose,
  SetMode: SetMode,
  WaypointPull: WaypointPull,
  CommandTriggerControl: CommandTriggerControl,
  WaypointPush: WaypointPush,
  LogRequestList: LogRequestList,
  FileTruncate: FileTruncate,
  CommandAck: CommandAck,
  FileRename: FileRename,
  FileMakeDir: FileMakeDir,
  FileOpen: FileOpen,
  ParamGet: ParamGet,
  CommandLong: CommandLong,
  FileWrite: FileWrite,
  FileChecksum: FileChecksum,
  SetMavFrame: SetMavFrame,
  ParamSet: ParamSet,
  WaypointSetCurrent: WaypointSetCurrent,
  CommandInt: CommandInt,
  ParamPull: ParamPull,
  CommandVtolTransition: CommandVtolTransition,
  MountConfigure: MountConfigure,
  CommandBool: CommandBool,
  VehicleInfoGet: VehicleInfoGet,
  LogRequestData: LogRequestData,
  StreamRate: StreamRate,
  MessageInterval: MessageInterval,
  CommandTriggerInterval: CommandTriggerInterval,
  ParamPush: ParamPush,
  FileRead: FileRead,
  WaypointClear: WaypointClear,
  FileRemove: FileRemove,
  CommandHome: CommandHome,
  FileList: FileList,
};
