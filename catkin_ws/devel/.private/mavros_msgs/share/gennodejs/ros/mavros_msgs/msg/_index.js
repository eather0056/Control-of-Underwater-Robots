
"use strict";

let State = require('./State.js');
let RTKBaseline = require('./RTKBaseline.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let LogEntry = require('./LogEntry.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let Thrust = require('./Thrust.js');
let Tunnel = require('./Tunnel.js');
let HilGPS = require('./HilGPS.js');
let Waypoint = require('./Waypoint.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let ESCInfo = require('./ESCInfo.js');
let TerrainReport = require('./TerrainReport.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let RCIn = require('./RCIn.js');
let Param = require('./Param.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let GPSINPUT = require('./GPSINPUT.js');
let ActuatorControl = require('./ActuatorControl.js');
let GPSRAW = require('./GPSRAW.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let HilControls = require('./HilControls.js');
let ExtendedState = require('./ExtendedState.js');
let PositionTarget = require('./PositionTarget.js');
let DebugValue = require('./DebugValue.js');
let ESCStatus = require('./ESCStatus.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let RTCM = require('./RTCM.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let ParamValue = require('./ParamValue.js');
let Vibration = require('./Vibration.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let Mavlink = require('./Mavlink.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let LandingTarget = require('./LandingTarget.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let HilSensor = require('./HilSensor.js');
let HomePosition = require('./HomePosition.js');
let ManualControl = require('./ManualControl.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let GPSRTK = require('./GPSRTK.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let WaypointList = require('./WaypointList.js');
let Altitude = require('./Altitude.js');
let MountControl = require('./MountControl.js');
let FileEntry = require('./FileEntry.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let WaypointReached = require('./WaypointReached.js');
let StatusText = require('./StatusText.js');
let LogData = require('./LogData.js');
let Trajectory = require('./Trajectory.js');
let VFR_HUD = require('./VFR_HUD.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let BatteryStatus = require('./BatteryStatus.js');
let CommandCode = require('./CommandCode.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let RadioStatus = require('./RadioStatus.js');
let VehicleInfo = require('./VehicleInfo.js');
let RCOut = require('./RCOut.js');
let TimesyncStatus = require('./TimesyncStatus.js');

module.exports = {
  State: State,
  RTKBaseline: RTKBaseline,
  OpticalFlowRad: OpticalFlowRad,
  LogEntry: LogEntry,
  HilActuatorControls: HilActuatorControls,
  Thrust: Thrust,
  Tunnel: Tunnel,
  HilGPS: HilGPS,
  Waypoint: Waypoint,
  HilStateQuaternion: HilStateQuaternion,
  ESCInfo: ESCInfo,
  TerrainReport: TerrainReport,
  AttitudeTarget: AttitudeTarget,
  RCIn: RCIn,
  Param: Param,
  OnboardComputerStatus: OnboardComputerStatus,
  GPSINPUT: GPSINPUT,
  ActuatorControl: ActuatorControl,
  GPSRAW: GPSRAW,
  MagnetometerReporter: MagnetometerReporter,
  HilControls: HilControls,
  ExtendedState: ExtendedState,
  PositionTarget: PositionTarget,
  DebugValue: DebugValue,
  ESCStatus: ESCStatus,
  CameraImageCaptured: CameraImageCaptured,
  RTCM: RTCM,
  ESCTelemetry: ESCTelemetry,
  ESCStatusItem: ESCStatusItem,
  WheelOdomStamped: WheelOdomStamped,
  ParamValue: ParamValue,
  Vibration: Vibration,
  CamIMUStamp: CamIMUStamp,
  PlayTuneV2: PlayTuneV2,
  Mavlink: Mavlink,
  ADSBVehicle: ADSBVehicle,
  LandingTarget: LandingTarget,
  ESCTelemetryItem: ESCTelemetryItem,
  OverrideRCIn: OverrideRCIn,
  HilSensor: HilSensor,
  HomePosition: HomePosition,
  ManualControl: ManualControl,
  CompanionProcessStatus: CompanionProcessStatus,
  GPSRTK: GPSRTK,
  ESCInfoItem: ESCInfoItem,
  WaypointList: WaypointList,
  Altitude: Altitude,
  MountControl: MountControl,
  FileEntry: FileEntry,
  EstimatorStatus: EstimatorStatus,
  WaypointReached: WaypointReached,
  StatusText: StatusText,
  LogData: LogData,
  Trajectory: Trajectory,
  VFR_HUD: VFR_HUD,
  NavControllerOutput: NavControllerOutput,
  BatteryStatus: BatteryStatus,
  CommandCode: CommandCode,
  GlobalPositionTarget: GlobalPositionTarget,
  RadioStatus: RadioStatus,
  VehicleInfo: VehicleInfo,
  RCOut: RCOut,
  TimesyncStatus: TimesyncStatus,
};
