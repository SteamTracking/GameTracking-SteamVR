var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [452],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (this.path = void 0),
            (this.mode = void 0),
            (this.parameters = new Map()),
            (this.inputs = new Map()),
            (0, _.makeObservable)(this);
        }
      }
      (0, _._)([_.observable], _.prototype, "path", void 0),
        (0, _._)([_.observable], _.prototype, "mode", void 0),
        (0, _._)([_.observable], _.prototype, "parameters", void 0),
        (0, _._)([_.observable], _.prototype, "inputs", void 0);
      class _ {
        constructor() {
          (this.path = void 0),
            (this.output = void 0),
            (0, _.makeObservable)(this);
        }
      }
      (0, _._)([_.observable], _.prototype, "path", void 0),
        (0, _._)([_.observable], _.prototype, "output", void 0),
        (0, _._)([_.observable], _.prototype, "parameters", void 0);
      class _ {
        constructor() {
          (this.path = void 0),
            (this.output = void 0),
            (0, _.makeObservable)(this);
        }
      }
      (0, _._)([_.observable], _.prototype, "path", void 0),
        (0, _._)([_.observable], _.prototype, "output", void 0);
      class _ {
        constructor() {
          (this.path = void 0),
            (this.output = void 0),
            (0, _.makeObservable)(this);
        }
      }
      (0, _._)([_.observable], _.prototype, "path", void 0),
        (0, _._)([_.observable], _.prototype, "output", void 0),
        (0, _._)([_.observable], _.prototype, "parameters", void 0);
      class _ {
        constructor() {
          (this.output = void 0),
            (this.inputs = new Array()),
            (0, _.makeObservable)(this);
        }
      }
      (0, _._)([_.observable], _.prototype, "output", void 0),
        (0, _._)([_.observable], _.prototype, "inputs", void 0);
      class _ {
        constructor() {
          (this.chords = void 0),
            (this.poses = void 0),
            (this.haptics = void 0),
            (this.sources = void 0),
            (this.skeleton = void 0),
            (0, _.makeObservable)(this);
        }
      }
      (0, _._)([_.observable], _.prototype, "chords", void 0),
        (0, _._)([_.observable], _.prototype, "poses", void 0),
        (0, _._)([_.observable], _.prototype, "haptics", void 0),
        (0, _._)([_.observable], _.prototype, "sources", void 0),
        (0, _._)([_.observable], _.prototype, "skeleton", void 0);
      class _ {
        constructor() {
          (this.device_path_string = void 0),
            (this.device_path_handle = void 0),
            (this.role = void 0),
            (this.controller_role = void 0),
            (0, _.makeObservable)(this);
        }
      }
      (0, _._)([_.observable], _.prototype, "device_path_string", void 0),
        (0, _._)([_.observable], _.prototype, "device_path_handle", void 0),
        (0, _._)([_.observable], _.prototype, "role", void 0),
        (0, _._)([_.observable], _.prototype, "controller_role", void 0);
      class _ {
        constructor() {
          (this.trackers = void 0),
            (this.valid_roles = []),
            (0, _.makeObservable)(this);
        }
      }
      function _(_) {
        return new Promise(function (_, _) {
          _()
            .get("/input/getactions.json?app_key=" + _)
            .then((_) => {
              console.log("Loaded action manifest for ", _), _(_.data);
            })
            .catch((_) => {
              __webpack_require__(_);
            });
        });
      }
      function _(_, _, _) {
        return (0, _._)(this, void 0, void 0, function* () {
          let _ = (yield _().get(
            "/input/loadbindingfromurl.json?binding_url=" +
              encodeURI(_) +
              "&controller_type=" +
              encodeURI(_) +
              "&app_key=" +
              encodeURI(_),
          )).data;
          if (_.success) return _;
          throw new Error(_.error);
        });
      }
      (0, _._)([_.observable], _.prototype, "trackers", void 0),
        (0, _._)([_.observable], _.prototype, "valid_roles", void 0);
      class _ {
        constructor(_, _) {
          (this._ = _), (this._ = _), this.toString.bind(this);
        }
        toString() {
          return this._ + "," + this._;
        }
      }
      class _ {
        constructor(_, _, _, _, _) {
          (this.m_BindingUISource = void 0),
            (this.m_ControllerProfile = void 0),
            (this.m_sDeviceInputPath = void 0),
            (this.m_eButtonSide = void 0),
            (this.m_sInputPath = void 0),
            (this.m_sActionSet = void 0),
            (this.m_BindingStoreObserverDisposer = void 0),
            (this.m_iNewSourceEntry = -1),
            (this.m_sDeviceInputPath = _),
            (this.m_ControllerProfile = _),
            (this.m_eButtonSide = _),
            (this.m_sInputPath = _),
            (this.m_sActionSet = _),
            (this.m_BindingStoreObserverDisposer = (0, _.observe)(_, (_) => {
              "m_LoadedBinding" == _.name && this.UpdateBindingSource();
            })),
            this.UpdateBindingSource(),
            _.RegisterBindingWatcher(this.UpdateBindingSource.bind(this)),
            (0, _.makeObservable)(this);
        }
        cancelWatcher() {
          this.m_BindingStoreObserverDisposer(),
            _.UnregisterBindingWatcher(this.UpdateBindingSource);
        }
        UpdateBindingSource() {
          this.m_BindingUISource = _.GetActionBinding(
            this.GetFullInputPath,
            this.m_sActionSet,
          );
        }
        get GetFullInputPath() {
          let _ = this.m_sDeviceInputPath + this.m_sInputPath;
          return (_ = _.replace(/([^:]\/)\/+/g, "$1")), _;
        }
        GetSVGEndPoint() {
          return new _(
            this.m_ControllerProfile.input_source[this.m_sInputPath]
              .binding_image_point[0],
            this.m_ControllerProfile.input_source[this.m_sInputPath]
              .binding_image_point[1],
          );
        }
        get GetButtonSide() {
          return this.m_eButtonSide;
        }
        get GetNumModes() {
          return this.m_BindingUISource ? this.m_BindingUISource.length : 0;
        }
        GetActionForInputType(_, _) {
          if (
            this.m_BindingUISource &&
            this.m_BindingUISource[_].inputs &&
            this.m_BindingUISource[_].inputs.has(_)
          ) {
            let _ = this.m_BindingUISource[_].inputs.get(_).output,
              _ = _.GetActionByName(_);
            if (!_) {
              let _ = _.GetSimulatedActionByPath(_);
              _ && (_ = _.CreateActionDefinitionForSimulatedAction(_));
            }
            let _ = _.GetAliasInfo(_);
            return (
              _ &&
                _ &&
                _.alias_name &&
                ((_ = Object.assign({}, _)), (_.localized_name = _.alias_name)),
              _
            );
          }
        }
        GetClickAction(_) {
          return this.GetActionForInputType(_, "click");
        }
        GetTouchAction(_) {
          return this.GetActionForInputType(_, "touch");
        }
        GetPositionAction(_) {
          return this.GetActionForInputType(_, "position");
        }
        GetHeldAction(_) {
          return this.GetActionForInputType(_, "held");
        }
        GetLongAction(_) {
          return this.GetActionForInputType(_, "long");
        }
        GetSingleAction(_) {
          return this.GetActionForInputType(_, "single");
        }
        GetDoubleAction(_) {
          return this.GetActionForInputType(_, "double");
        }
        GetNorthAction(_) {
          return this.GetActionForInputType(_, "north");
        }
        GetEastAction(_) {
          return this.GetActionForInputType(_, "east");
        }
        GetSouthAction(_) {
          return this.GetActionForInputType(_, "south");
        }
        GetWestAction(_) {
          return this.GetActionForInputType(_, "west");
        }
        GetCenterAction(_) {
          return this.GetActionForInputType(_, "center");
        }
        GetScrollAction(_) {
          return this.GetActionForInputType(_, "scroll");
        }
        GetPullAction(_) {
          return this.GetActionForInputType(_, "pull");
        }
        GetForceAction(_) {
          return this.GetActionForInputType(_, "force");
        }
        GetConstantAction(_) {
          return this.GetActionForInputType(_, "constant");
        }
        GetGrabAction(_) {
          return this.GetActionForInputType(_, "grab");
        }
        GetValueAction(_) {
          return this.GetActionForInputType(_, "value");
        }
        get GetControllerInputName() {
          return _._.LocalizeDriverString(
            this.m_ControllerProfile.resource_root,
            this.m_sInputPath,
          );
        }
        get GetModes() {
          return this.m_BindingUISource ? this.m_BindingUISource : [];
        }
        GetMode(_) {
          return this.m_BindingUISource &&
            _ >= 0 &&
            _ < this.m_BindingUISource.length
            ? this.m_BindingUISource[_].mode
            : "none";
        }
        get GetInputSourceType() {
          return this.m_ControllerProfile.input_source[this.m_sInputPath].type;
        }
        get GetInputSource() {
          return this.m_ControllerProfile.input_source[this.m_sInputPath];
        }
        get GetInputSourceClickSupport() {
          return (
            !(
              this.m_ControllerProfile.input_source[this.m_sInputPath].force &&
              !this.m_ControllerProfile.input_source[this.m_sInputPath].click
            ) &&
            ("knuckles" != this.m_ControllerProfile.controller_type ||
              "/input/trackpad" != this.m_sInputPath) &&
              !(
                !this.m_ControllerProfile.input_source[this.m_sInputPath]
                  .click &&
                !this.m_ControllerProfile.input_source[this.m_sInputPath].touch
              ) &&
            (this.m_ControllerProfile.input_source[this.m_sInputPath].click ||
              this.m_ControllerProfile.input_source[this.m_sInputPath].touch)
          );
        }
        get GetInputSourceTouchSupport() {
          return (
            !(
              !this.m_ControllerProfile.input_source[this.m_sInputPath].touch &&
              !this.m_ControllerProfile.input_source[this.m_sInputPath]
                .proximity
            ) &&
            (this.m_ControllerProfile.input_source[this.m_sInputPath].touch ||
              this.m_ControllerProfile.input_source[this.m_sInputPath]
                .proximity)
          );
        }
        get GetInputSourceForceSupport() {
          return (
            !!this.m_ControllerProfile.input_source[this.m_sInputPath].force &&
            this.m_ControllerProfile.input_source[this.m_sInputPath].force
          );
        }
        get GetInputSourceDefaultDeadzone() {
          return this.m_ControllerProfile.input_source[this.m_sInputPath]
            .default_dead_zone_pct
            ? this.m_ControllerProfile.input_source[this.m_sInputPath]
                .default_dead_zone_pct
            : 0;
        }
        SetInputMode(_, _) {
          !this.m_BindingUISource || _ < 0 || _ >= this.m_BindingUISource.length
            ? console.error("SetInputMode: Invalid mode index for new mode")
            : (this.ClearNewModeIfSet(_),
              _.SetInputModeForInputSource(this.GetFullInputPath, _, _));
        }
        AddInputMode(_) {
          this.m_iNewSourceEntry = _.AddInputModeForSource(
            this.GetFullInputPath,
            _,
          );
        }
        DeleteInputMode(_) {
          !this.m_BindingUISource || _ < 0 || _ >= this.m_BindingUISource.length
            ? console.error("SetInputMode: Invalid mode index for new mode")
            : _.DeleteInputModeForSource(this.GetFullInputPath, _);
        }
        ClearNewModeIfSet(_) {
          -1 != this.m_iNewSourceEntry &&
            this.m_iNewSourceEntry == _ &&
            (this.m_iNewSourceEntry = -1);
        }
        BHasModeSelectionPending(_) {
          return -1 != this.m_iNewSourceEntry && this.m_iNewSourceEntry == _;
        }
        SetClickAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "click", _, [
            "button",
            "trackpad",
            "joystick",
            "trigger",
            "toggle_button",
            "complex_button",
          ]);
        }
        SetTouchAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "touch", _, [
            "button",
            "trackpad",
            "joystick",
            "trigger",
            "toggle_button",
            "complex_button",
          ]);
        }
        SetHeldAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "held", _, [
            "button",
            "complex_button",
          ]);
        }
        SetLongAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "long", _, [
            "button",
            "complex_button",
          ]);
        }
        SetSingleAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "single", _, [
            "button",
            "complex_button",
          ]);
        }
        SetDoubleAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "double", _, [
            "button",
            "complex_button",
          ]);
        }
        SetPositionAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "position", _, [
            "trackpad",
            "joystick",
          ]);
        }
        SetNorthAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "north", _, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetEastAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "east", _, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetSouthAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "south", _, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetWestAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "west", _, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetCenterAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "center", _, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetScrollAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "scroll", _, [
            "scroll",
          ]);
        }
        SetPullAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "pull", _, [
            "trigger",
          ]);
        }
        SetForceAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "force", _, [
            "force_sensor",
          ]);
        }
        SetGrabAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "grab", _, [
            "grab",
          ]);
        }
        SetValueAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "value", _, [
            "scalar_constant",
          ]);
        }
        SetConstantAction(_, _) {
          _.SetActionForInputModeType(this.GetFullInputPath, _, "constant", _, [
            "static_bool",
          ]);
        }
        CopyActions(_) {
          _.ClearModesForInputPath(this.GetFullInputPath),
            _.GetModes.forEach((_, _) => {
              _.AddInputModeForSource(this.GetFullInputPath, _.mode),
                _.inputs.forEach((_, _) => {
                  _.SetActionForInputModeType(
                    this.GetFullInputPath,
                    _,
                    _,
                    _.output,
                    [],
                  );
                });
            });
        }
        BindingsMatch(_) {
          let _ = _.GetModes;
          if (this.GetModes.length != _.length) return !1;
          for (let _ = 0; _ < _.length; _++) {
            let _ = _[_],
              _ = this.GetModes.filter((_) => _.mode == _.mode);
            if (_.length > 0) {
              let _ = !0;
              return (
                _[0].inputs.forEach((_, _) => {
                  (_.inputs.has(_) && _.inputs.get(_).output == _.output) ||
                    (_ = !1);
                }),
                _
              );
            }
            return !1;
          }
          return !0;
        }
        SetClickParameter(_, _, _) {
          _.SetParameterForInputModeType(
            this.GetFullInputPath,
            _,
            "click",
            _,
            _,
          );
        }
        SetTouchParameter(_, _, _) {
          _.SetParameterForInputModeType(
            this.GetFullInputPath,
            _,
            "touch",
            _,
            _,
          );
        }
        SetParameter(_, _, _, _) {
          _.SetParameterForInputModeType(this.GetFullInputPath, _, _, _, _);
        }
        GetClickParameter(_, _) {
          return _.GetParameterForInputModeType(
            this.GetFullInputPath,
            _,
            "click",
            _,
          );
        }
        GetTouchParameter(_, _) {
          return _.GetParameterForInputModeType(
            this.GetFullInputPath,
            _,
            "touch",
            _,
          );
        }
        GetParameter(_, _, _) {
          return _.GetParameterForInputModeType(this.GetFullInputPath, _, _, _);
        }
        GetTrackpadInvertState(_) {
          switch (
            _.GetParameterForInputModeType(
              this.GetFullInputPath,
              _,
              "trackpad",
              "invert",
            )
          ) {
            case "x":
              return "x";
            case "y":
              return "y";
            case "xy":
              return "xy";
            default:
              return "";
          }
        }
        SetTrackpadInvertState(_, _) {
          let _ = "";
          switch (_) {
            case "x":
              _ = "x";
              break;
            case "y":
              _ = "y";
              break;
            case "xy":
              _ = "xy";
          }
          _.SetParameterForInputModeType(
            this.GetFullInputPath,
            _,
            "trackpad",
            "invert",
            _,
          );
        }
      }
      (0, _._)([_.observable], _.prototype, "m_BindingUISource", void 0),
        (0, _._)([_.observable], _.prototype, "m_ControllerProfile", void 0),
        (0, _._)([_.observable], _.prototype, "m_sDeviceInputPath", void 0),
        (0, _._)([_.observable], _.prototype, "m_eButtonSide", void 0),
        (0, _._)([_.observable], _.prototype, "m_sInputPath", void 0),
        (0, _._)([_.observable], _.prototype, "m_sActionSet", void 0),
        (0, _._)([_._], _.prototype, "cancelWatcher", null),
        (0, _._)([_.action], _.prototype, "UpdateBindingSource", null),
        (0, _._)([_.computed], _.prototype, "GetFullInputPath", null),
        (0, _._)([_._], _.prototype, "GetSVGEndPoint", null),
        (0, _._)([_.computed], _.prototype, "GetButtonSide", null),
        (0, _._)([_.computed], _.prototype, "GetNumModes", null),
        (0, _._)([_._], _.prototype, "GetActionForInputType", null),
        (0, _._)([_._], _.prototype, "GetClickAction", null),
        (0, _._)([_._], _.prototype, "GetTouchAction", null),
        (0, _._)([_._], _.prototype, "GetPositionAction", null),
        (0, _._)([_._], _.prototype, "GetHeldAction", null),
        (0, _._)([_._], _.prototype, "GetLongAction", null),
        (0, _._)([_._], _.prototype, "GetSingleAction", null),
        (0, _._)([_._], _.prototype, "GetDoubleAction", null),
        (0, _._)([_._], _.prototype, "GetNorthAction", null),
        (0, _._)([_._], _.prototype, "GetEastAction", null),
        (0, _._)([_._], _.prototype, "GetSouthAction", null),
        (0, _._)([_._], _.prototype, "GetWestAction", null),
        (0, _._)([_._], _.prototype, "GetCenterAction", null),
        (0, _._)([_._], _.prototype, "GetScrollAction", null),
        (0, _._)([_._], _.prototype, "GetPullAction", null),
        (0, _._)([_._], _.prototype, "GetForceAction", null),
        (0, _._)([_._], _.prototype, "GetConstantAction", null),
        (0, _._)([_._], _.prototype, "GetGrabAction", null),
        (0, _._)([_._], _.prototype, "GetValueAction", null),
        (0, _._)([_.computed], _.prototype, "GetControllerInputName", null),
        (0, _._)([_.computed], _.prototype, "GetModes", null),
        (0, _._)([_._], _.prototype, "GetMode", null),
        (0, _._)([_.computed], _.prototype, "GetInputSourceType", null),
        (0, _._)([_.computed], _.prototype, "GetInputSource", null),
        (0, _._)([_.computed], _.prototype, "GetInputSourceClickSupport", null),
        (0, _._)([_.computed], _.prototype, "GetInputSourceTouchSupport", null),
        (0, _._)([_.computed], _.prototype, "GetInputSourceForceSupport", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "GetInputSourceDefaultDeadzone",
          null,
        ),
        (0, _._)([_.action], _.prototype, "SetInputMode", null),
        (0, _._)([_.action], _.prototype, "AddInputMode", null),
        (0, _._)([_.action], _.prototype, "DeleteInputMode", null),
        (0, _._)([_._], _.prototype, "ClearNewModeIfSet", null),
        (0, _._)([_._], _.prototype, "BHasModeSelectionPending", null),
        (0, _._)([_.action], _.prototype, "SetClickAction", null),
        (0, _._)([_.action], _.prototype, "SetTouchAction", null),
        (0, _._)([_.action], _.prototype, "SetHeldAction", null),
        (0, _._)([_.action], _.prototype, "SetLongAction", null),
        (0, _._)([_.action], _.prototype, "SetSingleAction", null),
        (0, _._)([_.action], _.prototype, "SetDoubleAction", null),
        (0, _._)([_.action], _.prototype, "SetPositionAction", null),
        (0, _._)([_.action], _.prototype, "SetNorthAction", null),
        (0, _._)([_.action], _.prototype, "SetEastAction", null),
        (0, _._)([_.action], _.prototype, "SetSouthAction", null),
        (0, _._)([_.action], _.prototype, "SetWestAction", null),
        (0, _._)([_.action], _.prototype, "SetCenterAction", null),
        (0, _._)([_.action], _.prototype, "SetScrollAction", null),
        (0, _._)([_.action], _.prototype, "SetPullAction", null),
        (0, _._)([_.action], _.prototype, "SetForceAction", null),
        (0, _._)([_.action], _.prototype, "SetGrabAction", null),
        (0, _._)([_.action], _.prototype, "SetValueAction", null),
        (0, _._)([_.action], _.prototype, "SetConstantAction", null),
        (0, _._)([_.action], _.prototype, "CopyActions", null),
        (0, _._)([_._], _.prototype, "BindingsMatch", null),
        (0, _._)([_.action], _.prototype, "SetClickParameter", null),
        (0, _._)([_.action], _.prototype, "SetTouchParameter", null),
        (0, _._)([_.action], _.prototype, "SetParameter", null),
        (0, _._)([_.action], _.prototype, "GetClickParameter", null),
        (0, _._)([_.action], _.prototype, "GetTouchParameter", null),
        (0, _._)([_.action], _.prototype, "GetParameter", null),
        (0, _._)([_._], _.prototype, "GetTrackpadInvertState", null),
        (0, _._)([_.action], _.prototype, "SetTrackpadInvertState", null);
      class _ {
        constructor(_, _, _) {
          (this.m_sSaveType = _),
            (this.m_OutstandingSaveBindingResolve = _),
            (this.m_OutstandingSaveBindingReject = _);
        }
        resolve(_) {
          this.m_OutstandingSaveBindingResolve(_);
        }
        reject(_) {
          this.m_OutstandingSaveBindingReject(_);
        }
        get SaveType() {
          return this.m_sSaveType;
        }
      }
      (0, _._)([_._], _.prototype, "resolve", null),
        (0, _._)([_._], _.prototype, "reject", null),
        (function (_) {
          (_[(_.eWebSocketState_Unknown = 0)] = "eWebSocketState_Unknown"),
            (_[(_.eWebSocketState_Disconnected = 1)] =
              "eWebSocketState_Disconnected"),
            (_[(_.eWebSocketState_Connecting = 2)] =
              "eWebSocketState_Connecting"),
            (_[(_.eWebSocketState_Connected = 3)] =
              "eWebSocketState_Connected");
        })(_ || (_ = {}));
      class _ {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_eWebSocketState = _.eWebSocketState_Unknown),
            (this.m_timerWebSocket = void 0),
            (this.m_dateStartTime = new Date()),
            (this.m_sLoadedBindingURI = void 0),
            (this.m_LoadedBinding = void 0),
            (this.m_ModifiedBindingSet = _.observable.map()),
            (this.m_ModifiedOptions = _.observable.map()),
            (this.m_ModifiedAliases = _.observable.map()),
            (this.m_sName = void 0),
            (this.m_sDescription = void 0),
            (this.m_sInteractionProfile = void 0),
            (this.m_SelectedApp = void 0),
            (this.m_SelectedAppActions = void 0),
            (this.m_sSelectedActionSet = void 0),
            (this.m_sSelectedControllerType = void 0),
            (this.m_TrackerBindingSetup = void 0),
            (this.m_bControllerTypeSelectedByUser = !1),
            (this.m_OutstandingSaveBindingCalls = []),
            (this.m_vecBindingSetWatchers = Array()),
            (this.m_mapUnoundActions = new Map()),
            (this.m_bIsMissingRequiredActions = !1),
            (this.m_rKnownFailedBindingUris = []),
            (this.m_ControllerWatchers = new Map()),
            (this.m_ModifiedSimulatedActions = _.observable.map()),
            (this.m_nNextSimulatedActionId = 1),
            (this.m_nBindingSubscriptionChangedCanary = 1),
            (this.m_bIsSaving = !1),
            (this.m_bHasPendingSave = !1),
            (0, _.makeObservable)(this);
        }
        OpenWebSocketToHost() {
          return new Promise((_, _) => {
            this.m_eWebSocketState != _.eWebSocketState_Connecting &&
              this.m_eWebSocketState != _.eWebSocketState_Connected &&
              (this.m_wsWebSocketToServer && delete this.m_wsWebSocketToServer,
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (_) => {
                this.OnWebSocketOpen(_), _();
              }),
              this.m_wsWebSocketToServer.addEventListener("message", (_) => {
                this.OnWebSocketMessage(_);
              }),
              this.m_wsWebSocketToServer.addEventListener("close", (_) => {
                this.OnWebSocketClose(_);
              }),
              (this.m_eWebSocketState = _.eWebSocketState_Connecting)),
              this.m_timerWebSocket ||
                (this.m_timerWebSocket = window.setTimeout(
                  this.OpenWebSocketToHost,
                  1e3,
                ));
          });
        }
        Init() {
          return (0, _._)(this, void 0, void 0, function* () {
            yield this.OpenWebSocketToHost(), yield this.RefreshInputState();
          });
        }
        CountDevicesWithControllerType(_) {
          let _ = 0;
          return (
            _._.ConnectedDevices.forEach((_) => {
              _.controller_type == _ && _++;
            }),
            _
          );
        }
        ComputeControllerTypeScore(_) {
          let _ = this.CountDevicesWithControllerType(_.controller_type),
            _ =
              ((null === _.Ay$ || void 0 === _.Ay$ ? void 0 : _.Ay$.HasHMD())
                ? null === _.Ay$ || void 0 === _.Ay$
                  ? void 0
                  : _.Ay$.VRProperties.GetStringProperty(
                      "/user/head",
                      _.fD8.Prop_ExpectedControllerType_String,
                    )
                : void 0) == _.controller_type
                ? 2
                : 1;
          return 1e3 * (999 - _.priority) + 10 * _ + _;
        }
        GetBestControllerType() {
          let _,
            _ = 0;
          return (
            _._.ControllerTypes.forEach((_) => {
              let _ = this.ComputeControllerTypeScore(_);
              _ > _ && ((_ = _), (_ = _));
            }),
            _
          );
        }
        RefreshInputState() {
          return (0, _._)(this, void 0, void 0, function* () {
            let _ = _._.KnownControllerTypes.size;
            return _._.GetInputState().then(() => {
              this.m_SelectedApp &&
                _ != _._.KnownControllerTypes.size &&
                this.ReloadCurrentApp();
              let _ = !1;
              const _ = this.GetBestControllerType();
              let _ = _._.FindDeviceClassForControllerType(
                this.m_sSelectedControllerType,
              );
              if (
                null != _ &&
                this.m_sSelectedControllerType != _.controller_type &&
                !this.m_bControllerTypeSelectedByUser
              ) {
                let _ = _._.FindDeviceClassForControllerType(_.controller_type);
                _._.IsSafeToResetControllerType(_, _) &&
                  ((this.m_sSelectedControllerType = _.controller_type),
                  (_ = !0));
              }
              return _ ? this.ReloadControllerConfiguration() : null;
            });
          });
        }
        get SteamVRUnavailable() {
          return this.m_eWebSocketState == _.eWebSocketState_Connecting ||
            this.m_eWebSocketState == _.eWebSocketState_Unknown
            ? Date.now() - this.m_dateStartTime.getTime() > 1e4
            : this.m_eWebSocketState != _.eWebSocketState_Connected;
        }
        get ActionSets() {
          if (
            null == this.m_SelectedAppActions ||
            null == this.m_SelectedAppActions.action_sets
          )
            return [];
          let _ = [];
          return (
            this.m_SelectedAppActions.action_sets.forEach((_) => {
              if ("hidden" != _.usage) {
                let _ = !0;
                _.required_options &&
                  _.required_options.forEach((_) => {
                    this.GetOptionValue(_) || (_ = !1);
                  });
                let _ = !1;
                _.forbidden_options &&
                  _.forbidden_options.forEach((_) => {
                    this.GetOptionValue(_) && (_ = !0);
                  }),
                  _ && !_ && _.push(_);
              }
            }),
            _
          );
        }
        get ManifestOptions() {
          return null == this.m_SelectedAppActions ||
            null == this.m_SelectedAppActions.action_sets ||
            null == this.m_SelectedAppActions.options
            ? []
            : this.m_SelectedAppActions.options;
        }
        get SecondaryControllerOptions() {
          return [
            {
              name: "returnBindingsWithLeftHand",
              localized_name: (0, _._)(
                "#SecondaryController_ReturnWithLeftHand",
              ),
              type: "bool",
              default: !1,
            },
            {
              name: "returnBindingsWithRightHand",
              localized_name: (0, _._)(
                "#SecondaryController_ReturnWithRightHand",
              ),
              type: "bool",
              default: !1,
            },
            {
              name: "returnBindingsWithHead",
              localized_name: (0, _._)("#SecondaryController_ReturnWithHead"),
              type: "bool",
              default: !1,
            },
          ];
        }
        GetOptionDefault(_) {
          let _ = !1;
          return (
            this.ManifestOptions.forEach((_) => {
              _.name == _ && (_ = _.default);
            }),
            _
          );
        }
        GetOptionValue(_) {
          return this.m_ModifiedOptions.has(_)
            ? this.m_ModifiedOptions.get(_)
            : void 0;
        }
        HasOptionValue(_) {
          return this.m_ModifiedOptions.has(_);
        }
        SetOptionValue(_, _) {
          null == _
            ? this.m_ModifiedOptions.delete(_)
            : this.m_ModifiedOptions.set(_, _),
            this.NotifyWatchersOfChange();
        }
        GetAliasInfo(_) {
          return this.m_ModifiedAliases.has(_)
            ? this.m_ModifiedAliases.get(_)
            : null;
        }
        SetAliasName(_, _) {
          if (this.m_ModifiedAliases.has(_)) {
            let _ = this.m_ModifiedAliases.get(_);
            (_.alias_name = _),
              this.m_ModifiedAliases.set(_, _),
              this.NotifyWatchersOfChange();
          } else {
            let _ = {
              alias_name: _,
              hidden: !1,
            };
            this.m_ModifiedAliases.set(_, _), this.NotifyWatchersOfChange();
          }
        }
        SetAliasHidden(_, _) {
          if (this.m_ModifiedAliases.has(_)) {
            let _ = this.m_ModifiedAliases.get(_);
            (_.hidden = _),
              this.m_ModifiedAliases.set(_, _),
              this.NotifyWatchersOfChange();
          } else {
            let _ = {
              alias_name: "",
              hidden: _,
            };
            this.m_ModifiedAliases.set(_, _), this.NotifyWatchersOfChange();
          }
        }
        ComputeSimulatedActionPathFromId(_) {
          return "/simactions/" + _;
        }
        GetSimulatedActionByPath(_) {
          return this.m_ModifiedSimulatedActions.has(_)
            ? this.m_ModifiedSimulatedActions.get(_)
            : void 0;
        }
        SetSimulatedActionByPath(_, _) {
          this.m_ModifiedSimulatedActions.set(_, _),
            this.NotifyWatchersOfChange();
        }
        AddSimulatedAction(_) {
          let _ = {
              name: "",
              type: _,
              _: this.m_nNextSimulatedActionId++,
              output: "",
            },
            _ = this.ComputeSimulatedActionPathFromId(_._);
          this.m_ModifiedSimulatedActions.set(_, _),
            this.NotifyWatchersOfChange();
        }
        DeleteSimulatedActionByPath(_) {
          this.m_ModifiedSimulatedActions.delete(_),
            this.NotifyWatchersOfChange();
        }
        get SimulatedActions() {
          return Array.from(this.m_ModifiedSimulatedActions.values());
        }
        get SelectedApp() {
          return this.m_SelectedApp ? this.m_SelectedApp.key : void 0;
        }
        get SelectedAppActions() {
          return this.m_SelectedAppActions;
        }
        get CurrentAppCanAccessPrivateInputs() {
          return (
            _._.IsAppAllowedPrivateInputs(this.m_SelectedApp.key) ||
            _._.ShouldSendSystemButtonToAllApps
          );
        }
        get SelectedControllerTypeInfo() {
          if (_._.IsValid && null != this.m_sSelectedControllerType)
            return _._.GetControllerTypeInfo(this.m_sSelectedControllerType);
        }
        DeviceForControllerType(_, _) {
          let _ = _._.GetControllerTypeInfo(_);
          if (!_) return;
          let _ = !1,
            _ = _._.ConnectedDevices.find((_) => {
              if (_.controller_type == _) {
                if (((_ = !0), !_)) return !0;
                if ("controller_handed" != _.input_bindingui_mode) return !0;
                let _ = 1 == _ ? "/left" : "/right";
                if (_.root_path && _.root_path.indexOf(_) >= 0) return !0;
              }
              return !1;
            });
          return (
            _ ||
            (_
              ? _._.ConnectedDevices.find((_) => _.controller_type == _)
              : void 0)
          );
        }
        get CurrentBindingSaveType() {
          if (null != this.m_LoadedBinding)
            return "developer" == this.m_LoadedBinding.save_type &&
              _.SelectedBindingIsLegacy
              ? "developer_legacy"
              : this.m_LoadedBinding.save_type;
        }
        get CurrentBindingActionManifestVersion() {
          return this.m_LoadedBinding &&
            this.m_LoadedBinding.binding_config &&
            this.m_LoadedBinding.binding_config.action_manifest_version
            ? this.m_LoadedBinding.binding_config.action_manifest_version
            : 0;
        }
        get SelectedActionSet() {
          return this.m_sSelectedActionSet;
        }
        get SelectedActionSetDetails() {
          if (
            null != this.m_SelectedAppActions &&
            null != this.m_sSelectedActionSet
          )
            return this.m_SelectedAppActions.action_sets.find(
              (_) => _.name == this.m_sSelectedActionSet,
            );
        }
        get SelectedActionSetActions() {
          return this.GetActionSetActions(this.m_sSelectedActionSet);
        }
        GetSelectedAppDefaultBinding(_) {
          if (null != this.m_SelectedAppActions)
            return this.m_SelectedAppActions.default_bindings &&
              this.m_SelectedAppActions.default_bindings.hasOwnProperty(_)
              ? this.m_SelectedAppActions.default_bindings[_]
              : void 0;
        }
        GetActionSetActions(_) {
          if (null == this.m_SelectedAppActions || null == _) return [];
          let _ = this.m_SelectedAppActions.action_sets.find(
            (_) => _.name == _,
          );
          return _ ? _.actions : [];
        }
        GetActionByName(_) {
          if (
            null == this.m_SelectedApp ||
            !this.m_SelectedAppActions.action_sets
          )
            return;
          let _,
            _ = _.toLowerCase();
          return (
            this.m_SelectedAppActions.action_sets.forEach((_) => {
              if (!_.actions) return;
              let _ = _.actions.find((_) => _.name.toLowerCase() == _);
              _ && (_ = _);
            }),
            _
          );
        }
        GetActionSetLocalizedNameByName(_) {
          for (const _ of this.m_SelectedAppActions.action_sets)
            if (_.name == _ && _.localized_name) return _.localized_name;
          return _;
        }
        get UnboundActions() {
          this.m_bIsMissingRequiredActions = !1;
          for (let _ of this.ActionSets) {
            let _ = [],
              _ = [];
            if (!_.actions) break;
            for (let _ of _.actions)
              if (
                "optional" != _.requirement &&
                !this.IsActionBound(_, _.name)
              ) {
                let _ = this.GetAliasInfo(_.name);
                if (_) {
                  if (_.hidden) continue;
                  _.alias_name &&
                    ((_ = Object.assign({}, _)),
                    (_.localized_name = _.alias_name));
                }
                "mandatory" == _.requirement
                  ? _.push(_)
                  : __webpack_require__.push(_);
              }
            if (
              (_.length > 0 && (this.m_bIsMissingRequiredActions = !0),
              this.m_mapUnoundActions.has(_.name))
            ) {
              let _ = this.m_mapUnoundActions.get(_.name);
              (_.vecRequired = _), (_.vecSuggested = _);
            } else
              this.m_mapUnoundActions.set(_.name, {
                vecRequired: _,
                vecSuggested: _,
              });
          }
          let _ = this.SelectedControllerTypeInfo;
          return (
            _ &&
              "TrackedDeviceClass_HMD" == _.device_class &&
              (this.m_bIsMissingRequiredActions = !1),
            this.IsSecondaryController &&
              (this.m_bIsMissingRequiredActions = !1),
            this.m_mapUnoundActions
          );
        }
        get UnboundRequiredActionStrings() {
          this.UnboundActions;
          let _ = [];
          for (let _ of this.ActionSets) {
            const _ = _.localized_name ? _.localized_name : _.name;
            let _ = this.m_mapUnoundActions.get(_.name);
            _ &&
              _.vecRequired.length > 0 &&
              _.vecRequired.forEach((_) => {
                const _ = _.localized_name ? _.localized_name : _.name;
                _.push(`${_}: ${_}`);
              });
          }
          return _;
        }
        get HasUnboundActions() {
          return this.UnboundActions, this.m_bIsMissingRequiredActions;
        }
        IsActionBound(_, _) {
          _ = _.toLowerCase();
          let _ = this.GetActionSetSources(_.name);
          if (_)
            for (let _ of _) {
              let _ = !1;
              if (
                (_.inputs.forEach((_) => {
                  _.output.toLowerCase() == _ && (_ = !0);
                }),
                _)
              )
                return !0;
            }
          let _ = this.GetActionSetChords(_.name);
          if (_)
            for (let _ of _)
              if (_.output && _.output.toLowerCase() == _) return !0;
          let _ = this.GetActionSetPoses(_.name);
          if (_)
            for (let _ of _)
              if (_.output && _.output.toLowerCase() == _) return !0;
          let _ = this.GetActionSetHaptics(_.name);
          if (_)
            for (let _ of _)
              if (_.output && _.output.toLowerCase() == _) return !0;
          let _ = this.GetActionSetSkeleton(_.name);
          if (_)
            for (let _ of _)
              if (_.output && _.output.toLowerCase() == _) return !0;
          return !1;
        }
        GetActionSetPoses(_) {
          return this.m_ModifiedBindingSet.has(_)
            ? this.m_ModifiedBindingSet.get(_).poses
            : [];
        }
        get SelectedActionSetPoses() {
          return this.GetActionSetPoses(this.m_sSelectedActionSet);
        }
        GetActionSetHaptics(_) {
          return this.m_ModifiedBindingSet.has(_)
            ? this.m_ModifiedBindingSet.get(_).haptics
            : [];
        }
        get SelectedActionSetHaptics() {
          return this.GetActionSetHaptics(this.m_sSelectedActionSet);
        }
        GetActionSetSkeleton(_) {
          return this.m_ModifiedBindingSet.has(_)
            ? this.m_ModifiedBindingSet.get(_).skeleton
            : [];
        }
        get SelectedActionSetSkeletons() {
          return this.GetActionSetSkeleton(this.m_sSelectedActionSet);
        }
        GetActionSetChords(_) {
          return this.m_ModifiedBindingSet.has(_)
            ? this.m_ModifiedBindingSet.get(_).chords
            : [];
        }
        get SelectedActionSetChords() {
          return this.GetActionSetChords(this.m_sSelectedActionSet);
        }
        get SelectedActionSetChordCount() {
          let _ = this.SelectedActionSetChords;
          return _ ? _.length : 0;
        }
        GetActionSetSources(_) {
          if (null == this.m_ModifiedBindingSet || null == _) return;
          let _ = this.m_ModifiedBindingSet;
          return _.has(_) ? _.get(_).sources : void 0;
        }
        get SelectedActionSetSources() {
          return this.GetActionSetSources(this.m_sSelectedActionSet);
        }
        get BSelectedActionSetHasPoses() {
          return (
            null != this.m_LoadedBinding &&
            null != this.m_sSelectedActionSet &&
            null != this.SelectedActionSetActions &&
            !this.SelectedBindingIsLegacy &&
            this.SelectedActionSetActions.filter((_) => "pose" == _.type)
              .length > 0
          );
        }
        get BSelectedActionSetHasBoundPoses() {
          if (
            !this.BSelectedActionSetHasPoses ||
            !this.SelectedActionSetPoses ||
            null == this.SelectedActionSetActions
          )
            return !1;
          for (let _ of this.SelectedActionSetPoses)
            if (_.output && "none" != _.output) return !0;
          return !1;
        }
        get BSelectedActionSetHasHaptics() {
          return (
            null != this.m_LoadedBinding &&
            null != this.m_sSelectedActionSet &&
            null != this.SelectedActionSetActions &&
            this.SelectedActionSetActions.filter((_) => "vibration" == _.type)
              .length > 0
          );
        }
        get BSelectedActionSetHasBoundHaptics() {
          if (
            !this.BSelectedActionSetHasHaptics ||
            !this.SelectedActionSetHaptics ||
            null == this.SelectedActionSetActions
          )
            return !1;
          for (let _ of this.SelectedActionSetHaptics)
            if (_.output && "none" != _.output) return !0;
          return !1;
        }
        get BSelectedActionSetHasSkeletons() {
          if (
            null == this.m_LoadedBinding ||
            null == this.m_sSelectedActionSet ||
            null == this.SelectedActionSetActions
          )
            return !1;
          if (
            0 ==
            this.SelectedActionSetActions.filter((_) => "skeleton" == _.type)
              .length
          )
            return !1;
          return (
            null != this.SelectedControllerTypeInfo &&
            !!this.GetFirstInputSourceOfType("skeleton")
          );
        }
        get BSelectedActionSetHasBoundSkeletons() {
          if (
            !this.BSelectedActionSetHasSkeletons ||
            !this.SelectedActionSetSkeletons ||
            null == this.SelectedActionSetActions
          )
            return !1;
          for (let _ of this.SelectedActionSetSkeletons)
            if (_.output && "none" != _.output) return !0;
          return !1;
        }
        ClearSelectedApp() {
          this.m_SelectedApp = void 0;
        }
        SetSelectedApp(_, _) {
          if (
            (console.log(`Setting selected app to app key: ${_}.`),
            null == this.m_SelectedApp || _ != this.m_SelectedApp.key)
          ) {
            (this.m_rKnownFailedBindingUris = []),
              this.m_ControllerWatchers.clear();
            let _ = _._.GetApp(_);
            _ &&
              ((this.m_SelectedApp = _),
              console.log(`Successfully set selected app to app key: ${_}.`),
              _ || this.ReloadCurrentApp());
          }
        }
        ReloadCurrentApp() {
          return (0, _._)(this, void 0, void 0, function* () {
            (this.m_sLoadedBindingURI = void 0),
              (this.m_sSelectedActionSet = void 0),
              yield this.LoadActionManifest();
            let _ = this.ActionSets;
            _.length > 0 &&
              (null == this.m_sSelectedActionSet ||
                !this.m_SelectedAppActions.action_sets.hasOwnProperty(
                  this.m_sSelectedActionSet,
                )) &&
              (this.m_sSelectedActionSet = _[0].name),
              yield this.ReloadControllerConfiguration();
          });
        }
        SetSelectedController(_, _) {
          if (_ != this.m_sSelectedControllerType) {
            let _ = _._.GetControllerTypeInfo(_);
            _ &&
              (this.m_ControllerWatchers.clear(),
              (this.m_sSelectedControllerType = _.controller_type),
              (this.m_bControllerTypeSelectedByUser = !0),
              (this.m_sLoadedBindingURI = void 0),
              _ || this.ReloadControllerConfiguration());
          }
        }
        SetSelectedActionSet(_) {
          _ != this.m_sSelectedActionSet && (this.m_sSelectedActionSet = _);
        }
        LocalizeStringForSelectedControllerType(_) {
          let _ = this.SelectedControllerTypeInfo;
          return _ && _.resource_root
            ? _._.LocalizeDriverString(_.resource_root, _)
            : _;
        }
        LocalizePathNameForSelectedControllerType(_) {
          let _;
          return (
            [
              "/user/hand/secondary",
              "/user/hand/primary",
              "/user/hand/left",
              "/user/hand/right",
              "/user/head",
            ].forEach((_) => {
              0 != _.indexOf(_) || (_ = _);
            }),
            _
              ? (0, _._)("#" + _) +
                " " +
                this.LocalizeStringForSelectedControllerType(_.replace(_, ""))
              : _
          );
        }
        get SelectedControllerTypeLocalizedName() {
          let _ = this.SelectedControllerTypeInfo;
          return _
            ? _.resource_root
              ? _._.LocalizeDriverString(_.resource_root, _.controller_type)
              : _.controller_type
            : "";
        }
        RegisterBindingWatcher(_) {
          null == this.m_vecBindingSetWatchers.find((_) => _ == _) &&
            this.m_vecBindingSetWatchers.push(_);
        }
        UnregisterBindingWatcher(_) {
          let _ = this.m_vecBindingSetWatchers.indexOf(_);
          _ >= 0 && this.m_vecBindingSetWatchers.splice(_, 1);
        }
        GetActionBinding(_, _) {
          if (null == this.m_ModifiedBindingSet) return;
          let _ = this.m_ModifiedBindingSet;
          if (__webpack_require__.has(_)) {
            let _ = __webpack_require__.get(_).sources;
            if (_) {
              let _ = _.filter((_) => _.path == _);
              if (_) return _;
            }
          }
        }
        GetInputModesForSourceType(_, _) {
          let _ = [];
          switch (_) {
            case "button":
              _ = ["button", "-", "toggle_button", "scalar_constant"];
              break;
            case "trackpad":
              _ = [
                "trackpad",
                "dpad",
                "-",
                "scroll",
                "radial",
                "button",
                "toggle_button",
              ];
              break;
            case "trigger":
              _ = [
                "trigger",
                "button",
                "-",
                "toggle_button",
                "scalar_constant",
              ];
              break;
            case "joystick":
              _ = [
                "joystick",
                "dpad",
                "-",
                "scroll",
                "radial",
                "button",
                "toggle_button",
              ];
              break;
            case "pinch":
              _ = ["grab"];
              break;
            default:
              _ = [];
          }
          return (
            _ &&
              (__webpack_require__.push("force_sensor"),
              "trigger" == _ && __webpack_require__.push("grab")),
            _
          );
        }
        GetBooleanInputOptionsForMode(_) {
          switch (_) {
            case "toggle_button":
            case "trackpad":
            case "trigger":
              return ["click", "touch"];
            case "button":
              return ["single", "double", "held", "long", "click", "touch"];
            case "dpad_click":
            case "dpad_touch":
            case "dpad":
              return ["west", "east", "north", "south", "center"];
            case "trackpad_scroll":
            case "force_sensor":
            default:
              return [];
            case "grab":
              return ["grab"];
          }
        }
        GetActionBindingsOfType(_, _) {
          if (
            null == this.m_SelectedApp ||
            null == this.m_sSelectedActionSet ||
            null == this.m_SelectedAppActions.action_sets
          )
            return [];
          let _ = this.SelectedActionSetDetails;
          if (!_) return [];
          if (null == _.actions) return [];
          let _ = [];
          return (
            _.actions.forEach((_) => {
              let _ = this.m_ModifiedAliases.get(_.name);
              if (_.type == _ && (!_ || !_.hidden || _))
                if (_ && _.alias_name) {
                  let _ = Object.assign({}, _);
                  (_.localized_name = _.alias_name), _.push(_);
                } else _.push(_);
            }),
            _ ||
              this.m_ModifiedSimulatedActions.forEach((_) => {
                if (this.GetActionTypeFromSimulatedActionType(_.type) == _) {
                  this.ComputeSimulatedActionPathFromId(_._),
                    _.name ? _.name : ((0, _._)("UnnamedSimAction"), _._);
                  _.push(this.CreateActionDefinitionForSimulatedAction(_));
                }
              }),
            _
          );
        }
        GetActionTypeFromSimulatedActionType(_) {
          switch (_) {
            case "fake_trigger":
            case "fake_trackpad_click":
              return "boolean";
            default:
              return "unknown";
          }
        }
        CreateActionDefinitionForSimulatedAction(_) {
          return {
            name: this.ComputeSimulatedActionPathFromId(_._),
            localized_name: _.name
              ? _.name
              : (0, _._)("UnnamedSimAction") + _._,
            type: this.GetActionTypeFromSimulatedActionType(_.type),
          };
        }
        get GetBooleanActionBindings() {
          return this.GetActionBindingsOfType("boolean");
        }
        get GetVector1ActionBindings() {
          return this.GetActionBindingsOfType("vector1");
        }
        get GetLiteralVector1ActionBindings() {
          return this.GetActionBindingsOfType("vector1", !0);
        }
        get GetVector2ActionBindings() {
          return this.GetActionBindingsOfType("vector2");
        }
        get GetVector3ActionBindings() {
          return this.GetActionBindingsOfType("vector3");
        }
        get GetPoseActionBindings() {
          return this.GetActionBindingsOfType("pose");
        }
        get GetHapticsActionBindings() {
          return this.GetActionBindingsOfType("vibration");
        }
        get GetSkeletonActionBindings() {
          return this.GetActionBindingsOfType("skeleton");
        }
        get ConfigName() {
          return this.m_sName;
        }
        get ConfigDescription() {
          return this.m_sDescription;
        }
        GetPoseAction(_) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let _ = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).poses;
          if (null == _) return;
          let _ = _.filter((_) => _.output.toLowerCase() == _.toLowerCase());
          return _.length ? _ : void 0;
        }
        GetPoseActionByPath(_) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let _ = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).poses;
          if (null == _) return;
          let _ = _.filter((_) => _.path.toLowerCase() == _.toLowerCase());
          return _.length ? _ : void 0;
        }
        GetHapticsAction(_) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let _ = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).haptics;
          if (null == _) return;
          let _ = _.filter((_) => _.output.toLowerCase() == _.toLowerCase());
          return _.length ? _ : void 0;
        }
        GetHapticsActionByPath(_) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let _ = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).haptics;
          if (null == _) return;
          let _ = _.filter((_) => _.path.toLowerCase() == _.toLowerCase());
          return _.length ? _ : void 0;
        }
        GetSkeletonAction(_) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let _ = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).skeleton;
          if (null == _) return;
          let _ = _.filter((_) => _.output.toLowerCase() == _.toLowerCase());
          return _.length ? _ : void 0;
        }
        GetSkeletonActionByPath(_) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let _ = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).skeleton;
          if (null == _) return;
          let _ = _.filter((_) => _.path.toLowerCase() == _.toLowerCase());
          return _.length ? _ : void 0;
        }
        NotifyWatchersOfChange() {
          console.log("Binding file changed"),
            this.m_vecBindingSetWatchers.forEach((_) => {
              _();
            }),
            this.AutosaveBinding();
        }
        SetActionForInputModeType(_, _, _, _, _) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForInputModeType: Invalid action set specified",
            );
          class _ {
            constructor(_, _) {
              (this.mode = _), (this.sourceIdx = _);
            }
          }
          let _ = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((_, _) => {
                _.path == _ && _.push(new _(_, _));
              }),
            _.length <= _)
          )
            return void console.warn(
              "Invalid mode index (",
              _,
              ") for path ",
              _,
            );
          let _ = _[_].sourceIdx;
          if (_ >= 0) {
            let _ = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[_];
            if (_.inputs && _.inputs.has(_) && _.inputs.get(_).output == _)
              return void console.log(
                "Trying to set new action to old action for type",
                _,
                " action is ",
                _,
              );
            if (_.length > 0 && !_.find((_) => _ == _.mode))
              return void console.log(
                "Trying to set invalid input type of ",
                _,
                " for current mode ",
                _.mode,
              );
            _.inputs || (_.inputs = _.observable.map()),
              "none" == _
                ? _.inputs.has(_) && _.inputs.delete(_)
                : _.inputs.has(_)
                  ? (_.inputs.get(_).output = _)
                  : _.inputs.set(_, {
                      output: _,
                    }),
              this.NotifyWatchersOfChange();
          }
        }
        SetParameterForInputModeType(_, _, _, _, _) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetParameterForInputModeType: Invalid action set specified",
            );
          let _ = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((_, _) => {
                _.path == _ && _.push(_);
              }),
            _.length <= _)
          )
            return void console.warn(
              "Invalid mode index (",
              _,
              ") for path ",
              _,
            );
          let _ = _[_];
          if (_ >= 0) {
            let _ = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[_];
            if (!_.inputs)
              return void console.log(
                "SetParameterForInputModeType: Trying to set parameter for missing input type of ",
                _,
                " for current mode ",
                _.mode,
              );
            _.parameters || (_.parameters = _.observable.map()),
              _.parameters.get(_) != _ &&
                (null == _ ? _.parameters.delete(_) : _.parameters.set(_, _),
                this.NotifyWatchersOfChange());
          }
        }
        SetParameterForPose(_, _, _) {
          _
            ? ((null == _ ? void 0 : _.parameters) ||
                (_.parameters = _.observable.map()),
              _.parameters.get(_) != _ &&
                (null == _ ||
                (Array.isArray(_) && __webpack_require__.every((_) => 0 === _))
                  ? _.parameters.delete(_)
                  : _.parameters.set(_, _),
                this.NotifyWatchersOfChange()))
            : console.error(
                "SetParameterForPose: Trying to set parameter for unknown pose.",
              );
        }
        GetParameterForPose(_, _) {
          return (null == _ ? void 0 : _.parameters) &&
            (null == _ ? void 0 : _.parameters.has(_))
            ? _.parameters.get(_)
            : null;
        }
        SetParameterForSkeleton(_, _, _) {
          _
            ? ((null == _ ? void 0 : _.parameters) ||
                (_.parameters = _.observable.map()),
              _.parameters.get(_) != _ &&
                (null == _ ||
                (Array.isArray(_) && __webpack_require__.every((_) => 0 === _))
                  ? _.parameters.delete(_)
                  : _.parameters.set(_, _),
                this.NotifyWatchersOfChange()))
            : console.error(
                "SetParameterForSkeleton: Trying to set parameter for unknown skeleton.",
              );
        }
        GetParameterForSkeleton(_, _) {
          return (null == _ ? void 0 : _.parameters) &&
            (null == _ ? void 0 : _.parameters.has(_))
            ? _.parameters.get(_)
            : null;
        }
        GetParameterForInputModeType(_, _, _, _) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return (
              console.error(
                "SetParameterForInputModeType: Invalid action set specified",
              ),
              null
            );
          let _ = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((_, _) => {
                _.path == _ && _.push(_);
              }),
            _.length <= _)
          )
            return (
              console.warn("Invalid mode index (", _, ") for path ", _), null
            );
          let _ = _[_];
          if (_ >= 0) {
            let _ = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[_];
            return _.inputs
              ? _.parameters && _.parameters.has(_)
                ? _.parameters.get(_)
                : null
              : (console.log(
                  "GetParameterForInputModeType: Trying to get parameter for missing input type of ",
                  _,
                  " for current mode ",
                  _.mode,
                ),
                null);
          }
          return null;
        }
        AddActionSetIfRequired() {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) {
            let _ = new _();
            (_.sources = []),
              this.m_ModifiedBindingSet.set(this.m_sSelectedActionSet, _);
          }
        }
        AddInputModeForSource(_, _) {
          this.AddActionSetIfRequired();
          let _ = new _();
          return (
            (_.mode = _),
            (_.path = _),
            (_.inputs = _.observable.map()),
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.push(_),
            this.NotifyWatchersOfChange(),
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.filter((_) => _.path.toLowerCase() == _.toLowerCase())
              .length - 1
          );
        }
        DeleteInputModeForSource(_, _) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "AddInputModeForType: Invalid action set specified",
            );
          let _ = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((_, _) => {
                _.path.toLowerCase() == _.toLowerCase() &&
                  __webpack_require__.push(_);
              }),
            _.length <= _)
          )
            return void console.warn(
              "Invalid mode index (",
              _,
              ") for path ",
              _,
            );
          let _ = _[_];
          -1 != _
            ? (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.splice(_, 1),
              this.NotifyWatchersOfChange())
            : console.error(
                "DeleteInputModeForSource: Mode not found for source",
              );
        }
        SetInputModeForInputSource(_, _, _) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForInputModeType: Invalid action set specified",
            );
          let _ = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((_, _) => {
                _.path.toLowerCase() == _.toLowerCase() && _.push(_);
              }),
            _.length <= _)
          )
            return void console.warn(
              "Invalid mode index (",
              _,
              ") for path ",
              _,
            );
          let _ = _[_];
          if (-1 != _) {
            let _ = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[_];
            if (_.path == _) {
              if (_.mode == _)
                return void console.log(
                  "Trying to set new input mode to old mode!",
                );
              let _ = JSON.parse((0, _._)(_)),
                _ = new _();
              switch (
                ((_.mode = _), (_.path = _), (_.inputs = _.observable.map()), _)
              ) {
                case "button":
                case "toggle_button":
                  switch (_.mode) {
                    case "complex_button":
                      _.inputs.single &&
                        (_.inputs.set("single", _.inputs.single),
                        _.inputs.set("click", _.inputs.single)),
                        _.inputs.long && _.inputs.set("long", _.inputs.long),
                        _.inputs.press && _.inputs.set("press", _.inputs.press),
                        _.inputs.double &&
                          _.inputs.set("double", _.inputs.double),
                        _.inputs.touch && _.inputs.set("touch", _.inputs.touch);
                      break;
                    case "button":
                    case "toggle_button":
                    case "trackpad":
                    case "trigger":
                      _.inputs.click && _.inputs.set("click", _.inputs.click),
                        _.inputs.touch && _.inputs.set("touch", _.inputs.touch);
                  }
                  break;
                case "complex_button":
                  switch (_.mode) {
                    case "toggle_button":
                    case "button":
                    case "trackpad":
                    case "trigger":
                      _.inputs.click && _.inputs.set("single", _.inputs.click);
                  }
                  break;
                case "trackpad":
                  switch (_.mode) {
                    case "complex_button":
                      _.inputs.single && _.inputs.set("click", _.inputs.single);
                      break;
                    case "toggle_button":
                    case "button":
                    case "trigger":
                      _.inputs.click && _.inputs.set("click", _.inputs.click),
                        _.inputs.touch && _.inputs.set("touch", _.inputs.touch);
                  }
                  break;
                case "trigger":
                  switch (_.mode) {
                    case "complex_button":
                      _.inputs.single && _.inputs.set("click", _.inputs.single);
                      break;
                    case "toggle_button":
                    case "trackpad":
                    case "button":
                      _.inputs.click && _.inputs.set("click", _.inputs.click),
                        _.inputs.touch && _.inputs.set("touch", _.inputs.touch);
                  }
              }
              return (
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).sources[_] = _),
                void this.NotifyWatchersOfChange()
              );
            }
          } else
            console.error(
              "SetActionForInputModeType: trying to change a mode for a source that we don't have already",
            );
        }
        ClearModesForInputPath(_) {
          this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)
            ? (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).sources = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.filter((_) => _.path.toLowerCase() != _.toLowerCase()))
            : console.error(
                "ClearModesForInputPath: Invalid action set specified",
              );
        }
        SetInputPathForPose(_, _) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForPose: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
              []);
          let _ = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .poses.findIndex(
              (_) =>
                _.path.toLowerCase() == _.path.toLowerCase() &&
                _.output.toLowerCase() == _.output.toLowerCase(),
            );
          -1 == _ &&
            ((_ =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .poses.push(new _()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
              _
            ].output = _.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[_]
              .path != _
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).poses[_].path = _),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new pose action path to old action path!",
                );
        }
        SetPoseForInputPath(_, _) {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
                []);
          let _ = this.GetPoseForInputPath(_);
          if (!_) {
            const _ =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .poses.push(new _()) - 1;
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
              _
            ].path = _),
              (_ = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .poses[_]);
          }
          _.output != _
            ? ((_.output = _), this.NotifyWatchersOfChange())
            : console.log(
                "Trying to set new pose action path to old action path!",
              );
        }
        GetPoseForInputPath(_) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForPose: Invalid action set specified",
            );
          let _ = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .poses.findIndex((_) => _.path.toLowerCase() == _.toLowerCase());
          return -1 != _
            ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[_]
            : void 0;
        }
        GetSkeletonForInputPath(_) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForPose: Invalid action set specified",
            );
          let _ = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .skeleton.findIndex((_) => _.path.toLowerCase() == _.toLowerCase());
          return -1 != _
            ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
                _
              ]
            : void 0;
        }
        GetFirstInputSourceOfType(_) {
          let _ = this.SelectedControllerTypeInfo;
          if (null != _)
            for (let _ of Object.keys(_.input_source)) {
              if (_.input_source[_].type == _) return _;
            }
        }
        AddDefaultPose(_, _) {
          if (
            (this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
                []),
            null == this.SelectedControllerTypeInfo)
          )
            return;
          let _ = this.GetFirstInputSourceOfType("pose");
          if (!_) return;
          let _ = new (class {})();
          (_.output = _), (_.path = _), this.SetInputPathForPose(_, _);
        }
        SetInputPathForHaptics(_, _) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputPathForHaptics: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics =
              []);
          let _ = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .haptics.findIndex(
              (_) =>
                _.path.toLowerCase() == _.path.toLowerCase() &&
                _.output.toLowerCase() == _.output.toLowerCase(),
            );
          -1 == _ &&
            ((_ =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .haptics.push(new _()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
              _
            ].output = _.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[_]
              .path != _
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).haptics[_].path = _),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new haptics action path to old action path!",
                );
        }
        SetHapticsForInputPath(_, _) {
          if (
            (this.AddActionSetIfRequired(),
            !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
          )
            return void console.error(
              "SetHapticsForInputPath: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics =
              []);
          let _ = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .haptics.findIndex((_) => _.path.toLowerCase() == _.toLowerCase());
          -1 == _ &&
            ((_ =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .haptics.push(new _()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
              _
            ].path = _)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[_]
              .output != _
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).haptics[_].output = _),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new haptic action path to old action path!",
                );
        }
        AddDefaultHaptics(_, _) {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).haptics = []);
          let _ = this.GetFirstInputSourceOfType("haptic");
          if (!_) return;
          let _ = _ + _;
          let _ = new (class {})();
          (_.output = _), (_.path = _), this.SetInputPathForHaptics(_, _);
        }
        SetInputPathForSkeleton(_, _) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputPathForSkeleton: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton =
              []);
          let _ = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .skeleton.findIndex(
              (_) =>
                _.path.toLowerCase() == _.path.toLowerCase() &&
                _.output.toLowerCase() == _.output.toLowerCase(),
            );
          -1 == _ &&
            ((_ =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .skeleton.push(new _()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
              _
            ].output = _.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[_]
              .path != _
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).skeleton[_].path = _),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new skeleton action path to old action path!",
                );
        }
        SetSkeletonForInputPath(_, _) {
          if (
            (this.AddActionSetIfRequired(),
            !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
          )
            return void console.error(
              "SetSkeletonForInputPath: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton =
              []);
          let _ = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .skeleton.findIndex((_) => _.path.toLowerCase() == _.toLowerCase());
          -1 == _ &&
            ((_ =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .skeleton.push(new _()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
              _
            ].path = _)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[_]
              .output != _
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).skeleton[_].output = _),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new skeleton action path to old action path!",
                );
        }
        AddDefaultSkeleton(_, _) {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).skeleton = []);
          let _ = this.GetFirstInputSourceOfType("skeleton");
          if (!_) return;
          let _ = _ + _;
          let _ = new (class {})();
          (_.output = _), (_.path = _), this.SetInputPathForSkeleton(_, _);
        }
        SetActionForChord(_, _) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForChord: Invalid action set specified",
            );
          let _ = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((_) => _ == _);
          -1 != _
            ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[_]
                .output != _
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[_].output = _),
                this.NotifyWatchersOfChange())
              : console.log("Trying to set new chord action to old action!")
            : console.error("SetActionForChord: Invalid chord  specified ", _);
        }
        DeleteChord(_) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "DeleteChordForSource: Invalid action set specified",
            );
          let _ = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((_) => _ == _);
          -1 != _
            ? (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords.splice(_, 1),
              this.NotifyWatchersOfChange())
            : console.error(
                "DeleteChordForSource: Invalid chord  specified ",
                _,
              );
        }
        AddChord() {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords =
                []);
          this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.push(new _());
          this.NotifyWatchersOfChange();
        }
        DeleteSourceFromChord(_, _) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "DeleteSourceFromChord: Invalid action set specified",
            );
          let _ = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((_) => _ == _);
          if (-1 != _) {
            let _ = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords[_].inputs.findIndex((_) => _[0] == _);
            -1 != _ &&
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[_].inputs.splice(_, 1),
              this.NotifyWatchersOfChange());
          } else
            console.error(
              "DeleteSourceFromChord: Invalid chord  specified ",
              _,
            );
        }
        SetInputTypeForChord(_, _, _) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputsForChord: Invalid action set specified",
            );
          let _ = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((_) => _ == _);
          if (-1 != _) {
            let _ = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords[_].inputs.findIndex((_) => _[0] == _);
            if (-1 == _)
              return void console.log(
                "Invalid bounds for new input chord, trying to add type without source",
              );
            if (
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[_]
                .inputs[_][1] == _
            )
              return void console.log(
                "Trying to set new chord inputs to old inputs!",
              );
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
              _
            ].inputs[_][1] = _),
              this.NotifyWatchersOfChange();
          } else
            console.error("SetInputsForChord: Invalid chord  specified ", _);
        }
        SetInputSourceForChord(_, _, _) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputsForChord: Invalid action set specified",
            );
          let _ = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((_) => _ == _);
          if (-1 != _) {
            let _ = this.GetActionBinding(_, this.SelectedActionSet);
            if (!_)
              return void console.log("Failed to find action binding for path");
            let _ = "click";
            if (
              (_.length &&
                (_ = this.GetBooleanInputOptionsForMode(_[0].mode)[0]),
              null == _)
            )
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[_]
                .inputs ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[_].inputs = new Array()),
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .chords[_].inputs.push([_, _]);
            else {
              let _ = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[_].inputs.findIndex((_) => _[0] == _);
              if (-1 == _)
                return void console.log(
                  "Trying to set replace chord input path when we didn't have that path!",
                );
              if (
                this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                  _
                ].inputs[_][0] == _
              )
                return void console.log(
                  "Trying to set new chord inputs to old inputs!",
                );
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                _
              ].inputs[_][0] = _),
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[_].inputs[_][1] = _);
            }
            this.NotifyWatchersOfChange();
          } else
            console.error("SetInputsForChord: Invalid chord  specified ", _);
        }
        LoadActionManifest() {
          return (0, _._)(this, void 0, void 0, function* () {
            return new Promise((_, _) => {
              _(this.m_SelectedApp.key).then((_) => {
                null == _.error
                  ? ((0, _.runInAction)(() => {
                      this.m_SelectedAppActions = _;
                    }),
                    null == this.m_sLoadedBindingURI &&
                      _.current_binding_url.hasOwnProperty(
                        this.m_sSelectedControllerType,
                      ) &&
                      (this.m_sLoadedBindingURI =
                        _.current_binding_url[this.m_sSelectedControllerType]))
                  : ((0, _.runInAction)(() => {
                      (this.m_SelectedAppActions = void 0),
                        (this.m_sLoadedBindingURI = void 0);
                    }),
                    _._.SetBindingListError(
                      (0, _._)("#ActionManifestError_UnknownError"),
                      !1,
                    )),
                  _();
              });
            });
          });
        }
        get SelectedBindingURL() {
          return null != this.m_sSelectedControllerType &&
            null != this.m_SelectedAppActions &&
            null != this.m_SelectedAppActions.current_binding_url &&
            this.m_SelectedAppActions.current_binding_url.hasOwnProperty(
              this.m_sSelectedControllerType,
            )
            ? this.m_SelectedAppActions.current_binding_url[
                this.m_sSelectedControllerType
              ]
            : void 0;
        }
        get LoadedBindingURL() {
          return this.m_sLoadedBindingURI;
        }
        get SelectedBindingIsLegacy() {
          return (
            !this.m_SelectedAppActions ||
            "legacy" == this.m_SelectedAppActions.category
          );
        }
        get SelectedBindingIsOpenXR() {
          return "openxr" == this.m_SelectedAppActions.category;
        }
        get IsSecondaryController() {
          if (!this.m_sSelectedControllerType) return !1;
          let _ = _._.FindRootPathForControllerType(
            this.m_sSelectedControllerType,
          );
          return (
            "/user/treadmill" == _ ||
            "/user/gamepad" == _ ||
            "/user/stylus" == _
          );
        }
        ReloadControllerConfiguration() {
          return (0, _._)(this, void 0, void 0, function* () {
            if (
              !(
                this.m_SelectedAppActions &&
                this.m_sLoadedBindingURI &&
                this.SelectedApp &&
                this.SelectedControllerTypeInfo
              )
            )
              return;
            let _ = yield _(
              this.m_SelectedApp.key,
              this.SelectedControllerTypeInfo.controller_type,
              this.m_sLoadedBindingURI,
            );
            this.OnBindingConfigLoaded(_);
          });
        }
        UpdateTrackerBindings() {
          return (0, _._)(this, void 0, void 0, function* () {
            let _ = yield this.GetTrackerBindings();
            this.m_TrackerBindingSetup = _;
          });
        }
        get TrackerBindings() {
          return (
            null == this.m_TrackerBindingSetup && this.UpdateTrackerBindings(),
            this.m_TrackerBindingSetup
          );
        }
        GetTrackerBindings() {
          return (0, _._)(this, void 0, void 0, function* () {
            return new Promise(function (_, _) {
              _()
                .get("/input/gettrackerbindings.json")
                .then((_) => {
                  _(_.data);
                })
                .catch((_) => {
                  _(_);
                });
            });
          });
        }
        GetTrackerBinding(_) {
          for (let _ of this.m_TrackerBindingSetup.trackers)
            if (_.device_path_string == _) return _;
          return null;
        }
        SetTrackerBinding(_, _, _) {
          let _ = {
            device_path: _,
            role: _,
            controller_role: _,
          };
          const _ = (0, _._)(_);
          console.log("Saving tracker binding " + _),
            _()
              .post("/input/settrackerbinding.action", _)
              .then((_) => {
                console.log("SetTrackerBinding response: ", _.data),
                  this.UpdateTrackerBindings();
              })
              .catch((_) => {});
        }
        PulseHaptics(_) {
          let _ = {
            path_handle: _,
          };
          const _ = (0, _._)(_);
          _()
            .post("/input/pulsehaptics.action", _)
            .then((_) => {
              console.log("PulseHaptics response: ", _.data);
            })
            .catch((_) => {});
        }
        get KnownControllerTypes() {
          let _ = [];
          return (
            _._.KnownControllerTypes.forEach((_) => {
              _.push(_);
            }),
            _
          );
        }
        PreserveCurrentBindingForUpgrade() {
          let _ = _._.CurrentBinding;
          return _ && "autosave" == _.type
            ? this.SaveCurrentBinding(
                (0, _._)("#PreservedAutosaveName"),
                "",
                "personal",
              )
            : Promise.resolve(null);
        }
        GetDefaultBindingNameForSaveType(_) {
          let _ = _.SelectedControllerTypeInfo,
            _ = _._.LocalizeControllerString(_, _ ? _.controller_type : "");
          switch (_) {
            default:
            case "autosave":
              return (0, _._)(
                "#BindingUI_SaveDefaultName",
                this.m_SelectedApp.name,
                _,
              );
            case "personal":
              return (0, _._)(
                "#BindingUI_SaveDefaultName_Personal",
                this.m_SelectedApp.name,
                _,
              );
            case "public":
              return (0, _._)(
                "#BindingUI_SaveDefaultName_Public",
                _._.CurrentUserPersonaName,
              );
            case "replace_default":
              return _.ConfigName;
          }
        }
        AutosaveBinding() {
          return (0, _._)(this, void 0, void 0, function* () {
            if (this.m_bIsSaving)
              return (
                console.log("Currently saving, adding a pending save."),
                void (this.m_bHasPendingSave = !0)
              );
            this.m_sName ||
              (this.m_sName =
                this.GetDefaultBindingNameForSaveType("autosave"));
            try {
              const _ = yield this.SaveCurrentBinding(
                this.m_sName,
                this.m_sDescription,
                "autosave",
              );
              _.SetBindingURL(_.uri);
            } finally {
              (this.m_bIsSaving = !1),
                this.m_bHasPendingSave &&
                  ((this.m_bHasPendingSave = !1), this.AutosaveBinding());
            }
          });
        }
        SaveCurrentBinding(_, _, _) {
          return (0, _._)(this, void 0, void 0, function* () {
            this.HasUnboundActions,
              (this.m_sName = _),
              (this.m_sDescription = _);
            let _ = this.m_sInteractionProfile.trim(),
              _ = {
                app_key: this.SelectedApp,
                controller_type:
                  this.SelectedControllerTypeInfo.controller_type,
                save_type: _,
              };
            _.binding = {
              name: _,
              description: _,
              action_manifest_version: this.m_SelectedAppActions.version,
              interaction_profile: _,
              category: this.m_SelectedAppActions.category,
              controller_type: this.SelectedControllerTypeInfo.controller_type,
              bindings: this.m_ModifiedBindingSet,
              options: this.m_ModifiedOptions,
              alias_info: this.m_ModifiedAliases,
              simulated_actions: Array.from(
                this.m_ModifiedSimulatedActions.values(),
              ),
              app_key: this.SelectedApp,
            };
            const _ = (0, _._)(_);
            return (
              console.log(
                "Saving binding " + _ + " for app '" + this.SelectedApp + "'.",
              ),
              new Promise((_, _) => {
                let _ = new _(_, _, _);
                this.m_OutstandingSaveBindingCalls.push(_),
                  _()
                    .post("/input/savebinding.action", _)
                    .then((_) => {
                      _.data.error
                        ? (console.log(
                            "SaveCurrentBinding failed:",
                            _.data.error,
                          ),
                          _(_.data.error))
                        : console.log("SaveCurrentBinding Successful");
                    })
                    .catch((_) => {
                      _(_);
                    });
              })
            );
          });
        }
        PublishBindingToWorkshop(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            let _ = {
              app_key: this.SelectedApp,
              description: _,
            };
            _.binding = {
              bindings: this.m_ModifiedBindingSet,
              controller_type: this.SelectedControllerTypeInfo.controller_type,
            };
            const _ = (0, _._)(_);
            yield new Promise(function (_, _) {
              _()
                .post("/input/submitworkshopbinding.action", _)
                .then((_) => {
                  console.log("PublishBindingToWorkshop response: ", _), _();
                })
                .catch((_) => {
                  _(_);
                });
            });
          });
        }
        OnWebSocketOpen(_) {
          console.log("Websocket connected"),
            (this.m_eWebSocketState = _.eWebSocketState_Connected),
            this.WebSocketSend("input_open"),
            this.m_timerWebSocket && clearTimeout(this.m_timerWebSocket),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("input_close");
            });
        }
        OnWebSocketClose(_) {
          console.log("Websocket closed ", _),
            (this.m_eWebSocketState = _.eWebSocketState_Disconnected),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(_) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(_);
        }
        OnWorkshopUploadComplete(_) {
          if (
            (console.log("OnWorkshopUploadComplete: ", _),
            _.app_key != _.SelectedApp)
          )
            return void console.log(
              `Ignoring binding load for an app we aren't viewing. Pending: ${_.app_key}. Current: ${_.SelectedApp}.`,
            );
          if (this.m_OutstandingSaveBindingCalls.length <= 0)
            return void console.log(
              "Got workshop upload result without pending resolve",
            );
          let _ = this.m_OutstandingSaveBindingCalls.shift();
          _.success ? (_.resolve(_), this.LoadActionManifest()) : _.reject(_);
        }
        OnPendingFileSaved(_) {
          let _ = _.success ? "Success" : _.error;
          console.log(`OnPendingFileSaved: ${_}. ${_}`),
            _.app_key == _.SelectedApp ||
              console.log(
                `Ignoring pending file saved for an app we aren't viewing. Pending: ${_.app_key}. Current: ${_.SelectedApp}.`,
              );
        }
        get SaveNoticeText() {
          if (this.m_OutstandingSaveBindingCalls.length > 0) {
            let _ = !1;
            return (
              this.m_OutstandingSaveBindingCalls.forEach((_) => {
                ("personal" != _.SaveType && "public" != _.SaveType) ||
                  (_ = !0);
              }),
              _ ? "#SaveNotice_Uploading" : "#SaveNotice_Saving"
            );
          }
        }
        OnBindingConfigLoaded(_) {
          if (
            (console.log(
              "OnBindingConfigLoaded: ",
              _,
              " selected action set:",
              this.m_sSelectedActionSet,
            ),
            _.app_key != _.SelectedApp)
          )
            return void console.log(
              `Ignoring binding load for an app we aren't viewing. Pending: ${_.app_key}. Current: ${_.SelectedApp}.`,
            );
          if (_.uri != this.m_sLoadedBindingURI)
            return void console.log(
              `Ignoring binding load for an config url ${_.uri} we aren't viewing ${this.m_sLoadedBindingURI}`,
            );
          this.m_ControllerWatchers.clear(),
            (this.m_LoadedBinding = _),
            (this.m_ModifiedBindingSet = _.observable.map());
          let _ = (0, _._)("#unknown_application"),
            _ = _._.GetApp(_.SelectedApp);
          if (
            (_ && (_ = _.name),
            (this.m_sName = ""),
            (this.m_sDescription = ""),
            (this.m_sInteractionProfile = " "),
            _.binding_config &&
              (_.binding_config.hasOwnProperty("name") &&
                (this.m_sName = _.binding_config.name),
              _.binding_config.hasOwnProperty("description") &&
                (this.m_sDescription = _.binding_config.description),
              _.binding_config.hasOwnProperty("interaction_profile") &&
                (this.m_sInteractionProfile =
                  _.binding_config.interaction_profile)),
            "" == this.m_sName)
          ) {
            let _ = _.SelectedControllerTypeInfo,
              _ = _._.LocalizeControllerString(_, _ ? _.controller_type : "");
            this.m_sName = (0, _._)("#BindingUI_SaveDefaultName", _, _);
          }
          _.binding_config &&
            _.binding_config.bindings &&
            (Object.keys(_.binding_config.bindings).forEach((_) => {
              var _, _, _;
              let _ = new _();
              (_.chords = _.binding_config.bindings[_].chords),
                (_.poses = []),
                null === (_ = _.binding_config.bindings[_].poses) ||
                  void 0 === _ ||
                  __webpack_require__.forEach((_) => {
                    let _ = new _();
                    (_.output = _.output),
                      (_.path = _.path),
                      null != _.parameters &&
                        Object.keys(_.parameters).length > 0 &&
                        ((_.parameters = _.observable.map()),
                        _.hasOwnProperty("parameters") &&
                          Object.keys(_.parameters).forEach((_) => {
                            _.parameters.set(_, _.parameters[_]);
                          })),
                      _.poses.push(_);
                  }),
                (_.haptics = _.binding_config.bindings[_].haptics),
                (_.skeleton = []),
                null === (_ = _.binding_config.bindings[_].skeleton) ||
                  void 0 === _ ||
                  _.forEach((_) => {
                    let _ = new _();
                    (_.output = _.output),
                      (_.path = _.path),
                      null != _.parameters &&
                        Object.keys(_.parameters).length > 0 &&
                        ((_.parameters = _.observable.map()),
                        _.hasOwnProperty("parameters") &&
                          Object.keys(_.parameters).forEach((_) => {
                            _.parameters.set(_, _.parameters[_]);
                          })),
                      _.skeleton.push(_);
                  }),
                (_.sources = []),
                null === (_ = _.binding_config.bindings[_].sources) ||
                  void 0 === _ ||
                  _.forEach((_) => {
                    let _ = new _();
                    (_.mode = _.mode),
                      (_.path = _.path),
                      (_.inputs = _.observable.map()),
                      _.hasOwnProperty("inputs") &&
                        Object.keys(_.inputs).forEach((_) => {
                          _.inputs.set(_, _.inputs[_]);
                        }),
                      null != _.parameters &&
                        Object.keys(_.parameters).length > 0 &&
                        ((_.parameters = _.observable.map()),
                        _.hasOwnProperty("parameters") &&
                          Object.keys(_.parameters).forEach((_) => {
                            _.parameters.set(_, _.parameters[_]);
                          })),
                      _.sources.push(_);
                  }),
                this.m_ModifiedBindingSet.set(_, _);
            }),
            this.m_ModifiedOptions.clear(),
            _.binding_config.options &&
              (Object.keys(_.binding_config.options).forEach((_) => {
                this.m_ModifiedOptions.set(_, _.binding_config.options[_]);
              }),
              this.ManifestOptions.forEach((_) => {
                this.m_ModifiedOptions.has(_.name) ||
                  this.m_ModifiedOptions.set(_.name, _.default);
              })),
            this.m_ModifiedAliases.clear(),
            _.binding_config.alias_info &&
              Object.keys(_.binding_config.alias_info).forEach((_) => {
                this.m_ModifiedAliases.set(_, _.binding_config.alias_info[_]);
              }),
            this.m_ModifiedSimulatedActions.clear(),
            _.binding_config.simulated_actions &&
              _.binding_config.simulated_actions.forEach((_) => {
                let _ = this.ComputeSimulatedActionPathFromId(_._);
                this.m_ModifiedSimulatedActions.set(_, _),
                  _._ >= this.m_nNextSimulatedActionId &&
                    (this.m_nNextSimulatedActionId = _._ + 1);
              })),
            this.m_vecBindingSetWatchers.forEach((_) => {
              _();
            });
        }
        QueryBindingList(_, _) {
          return (
            null != this.m_OutstandingQueryResolve &&
              console.warn(
                "About to start second binding list query when one is already pending",
                this.m_OutstandingQueryResolve,
              ),
            new Promise((_, _) => {
              (this.m_OutstandingQueryResolve = _),
                _()
                  .get(
                    `/input/queryworkshopbindings.json?app_key=${_}&controller_type=${_}`,
                  )
                  .then((_) => {
                    console.log("QueryBindingList: ajax request successful");
                  })
                  .catch((_) => {
                    _(_);
                  });
            })
          );
        }
        DeleteBinding(_) {
          null != this.m_OutstandingDeleteResolve &&
            console.warn(
              "About to start second binding delete when one is already pending",
              this.m_OutstandingDeleteResolve,
            );
          let _ = {
            url: _,
          };
          const _ = (0, _._)(_);
          return new Promise((_, _) => {
            (this.m_OutstandingDeleteResolve = _),
              (this.m_sOutstandingDeleteURL = _),
              _()
                .post("/input/deleteconfig.action", _)
                .then((_) => {
                  console.log("Delete ajax request successful");
                })
                .catch((_) => {
                  _(_);
                });
          });
        }
        OnBindingDeleteComplete(_) {
          null != this.m_OutstandingDeleteResolve
            ? _.url == this.m_sOutstandingDeleteURL &&
              ((this.m_sOutstandingDeleteURL = void 0),
              this.m_OutstandingDeleteResolve(_),
              (this.m_OutstandingDeleteResolve = void 0),
              console.log("OnDeleteComplete: ", _))
            : console.warn(
                "Missing outstanding query resolve for binding delete",
              );
        }
        ShouldShowBindingFailureForControllerType(_) {
          if (null == _ || "" == _) return !1;
          let _ = _._.GetControllerTypeInfo(_);
          return !!_ && !!_.should_show_binding_errors;
        }
        HasBindingUriFailedToLoad(_) {
          return -1 != this.m_rKnownFailedBindingUris.indexOf(_);
        }
        RememberFailedLoadUri(_) {
          this.m_rKnownFailedBindingUris.push(_);
        }
        OnQueryResults(_) {
          console.log("OnQueryResults: ", _),
            null != this.m_OutstandingQueryResolve
              ? (this.m_OutstandingQueryResolve(_),
                (this.m_OutstandingQueryResolve = void 0))
              : console.warn(
                  "Missing outstanding query resolve for binding query",
                );
        }
        SelectConfig(_, _, _) {
          if (
            ((this.m_sLoadedBindingURI = _),
            console.log("Selecting config " + _ + " for app " + _),
            this.SelectedBindingURL == _)
          )
            return (
              console.debug("Selecting the config we already have set", _),
              new Promise((_, _) => {
                _();
              })
            );
          let _ = {
            app_key: _,
            controller_type: _,
            url: _,
          };
          const _ = (0, _._)(_);
          return (
            null != this.m_OutstandingSelectConfigResolve &&
              console.warn(
                "About to start second select config when one is already pending",
                this.m_OutstandingSelectConfigResolve,
              ),
            new Promise((_, _) => {
              (this.m_OutstandingSelectConfigResolve = _),
                _()
                  .post("/input/selectconfig.action", _)
                  .then((_) => {
                    console.log("selectconfig ajax request successful");
                  })
                  .catch((_) => {
                    _(_);
                  });
            })
          );
        }
        OnSelectConfigComplete(_) {
          null != this.m_OutstandingSelectConfigResolve
            ? (this.m_OutstandingSelectConfigResolve(),
              (this.m_OutstandingSelectConfigResolve = void 0),
              console.log("OnSelectConfigComplete: ", _))
            : _.error_to_show
              ? _._.ShowBindingList(_.error_to_show)
              : console.warn(
                  "Missing outstanding query resolve for select config",
                );
        }
        OnTrackersBindingChanged(_) {
          this.GetTrackerBindings().then((_) => {
            this.m_TrackerBindingSetup = _;
          });
        }
        OnActionManifestReloaded(_) {
          _.app_key == _.SelectedApp && this.ReloadCurrentApp();
        }
        SetBindingURL(_) {
          this.m_sLoadedBindingURI = _;
        }
        OnActionBindingsReloaded(_) {
          this.RefreshInputState();
        }
        GetControllerWatcherForSourceFromControllerType(_, _, _, _) {
          let _ = "" + _.controller_type + _ + _ + _;
          if (!this.m_ControllerWatchers.has(_)) {
            let _ = "";
            if ("controller_handed" == _.input_bindingui_mode)
              switch (_) {
                case 1:
                  _ = "/user/hand/left";
                  break;
                case 2:
                  _ = "/user/hand/right";
              }
            else {
              let _ = _._.ConnectedDevices.find(
                (_) => _.controller_type == _.controller_type,
              );
              _ && _.root_path
                ? (_ = _.root_path)
                : console.log(
                    "Unable to find device path for controller type ",
                    _,
                  );
            }
            this.m_ControllerWatchers.set(_, new _(_, _, _, _, _));
          }
          return this.m_ControllerWatchers.get(_);
        }
        OnWebSocketMessage(_) {
          let _ = JSON.parse(_.data);
          if ("jsonid" in _ && "vr_input_get_notifications" == _.jsonid)
            for (let _ in _.notifications) {
              let _ = _.notifications[_];
              switch (_.type) {
                case "pending_file_saved":
                  this.OnPendingFileSaved(_);
                  break;
                case "workshop_upload_complete":
                  this.OnWorkshopUploadComplete(_);
                  break;
                case "query_results":
                  this.OnQueryResults(_);
                  break;
                case "action_bindings_reloaded":
                  this.OnActionBindingsReloaded(_);
                  break;
                case "delete_binding_complete":
                  this.OnBindingDeleteComplete(_);
                  break;
                case "select_config_complete":
                  this.OnSelectConfigComplete(_);
                  break;
                case "trackers_binding_changed":
                  this.OnTrackersBindingChanged(_);
                  break;
                case "action_manifest_reloaded":
                  this.OnActionManifestReloaded(_);
                  break;
                case "refresh_input_state":
                  this.RefreshInputState();
                  break;
                case "binding_subscription_changed":
                  this.m_nBindingSubscriptionChangedCanary++;
              }
            }
        }
        get BindingConfig() {
          return null == this.m_ModifiedBindingSet
            ? ""
            : (0, _._)(this.m_ModifiedBindingSet, null, "\t");
        }
        get BindingSubscriptionChangedCanary() {
          return this.m_nBindingSubscriptionChangedCanary;
        }
        GetInteractionProfile() {
          return this.m_sInteractionProfile;
        }
        SetInteractionProfile(_) {
          let _ = this.m_sInteractionProfile != _;
          (this.m_sInteractionProfile = _), _ && this.NotifyWatchersOfChange();
        }
        GetInteractionProfiles() {
          return this.m_SelectedAppActions.interaction_profiles;
        }
        GetSimulatedControllerProperties() {
          var _;
          const _ =
            null !== (_ = this.GetOptionValue("simulated_controller_type")) &&
            void 0 !== _
              ? _
              : "";
          return {
            strSimulatedControllerType: _,
            strLocalizedSimulatedControllerType:
              this.LocalizeStringForSelectedControllerType(_),
            bIsSimulatingController: _ && "none" != _,
            strSimulatedRenderModelType: (function (_) {
              if (!0 === _ || "true" === _) return "name_only";
              if (!1 === _ || "false" === _) return "none";
              if (null == _ || "" === _) return "name_only";
              const _ = _.trim().toLowerCase();
              return "full" !== _ && "name_only" !== _ && "none" !== _
                ? "none"
                : _;
            })(this.GetOptionValue("simulate_rendermodel")),
            bIsSimulatingHMD: this.GetOptionValue("simulate_hmd"),
          };
        }
      }
      (0, _._)([_.observable], _.prototype, "m_eWebSocketState", void 0),
        (0, _._)([_.observable], _.prototype, "m_sLoadedBindingURI", void 0),
        (0, _._)([_.observable], _.prototype, "m_LoadedBinding", void 0),
        (0, _._)([_.observable], _.prototype, "m_ModifiedBindingSet", void 0),
        (0, _._)([_.observable], _.prototype, "m_ModifiedOptions", void 0),
        (0, _._)([_.observable], _.prototype, "m_ModifiedAliases", void 0),
        (0, _._)([_.observable], _.prototype, "m_sName", void 0),
        (0, _._)([_.observable], _.prototype, "m_sDescription", void 0),
        (0, _._)([_.observable], _.prototype, "m_sInteractionProfile", void 0),
        (0, _._)([_.observable], _.prototype, "m_SelectedApp", void 0),
        (0, _._)([_.observable], _.prototype, "m_SelectedAppActions", void 0),
        (0, _._)([_.observable], _.prototype, "m_sSelectedActionSet", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_sSelectedControllerType",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_TrackerBindingSetup", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_OutstandingSaveBindingCalls",
          void 0,
        ),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_ModifiedSimulatedActions",
          void 0,
        ),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_nBindingSubscriptionChangedCanary",
          void 0,
        ),
        (0, _._)([_._], _.prototype, "OpenWebSocketToHost", null),
        (0, _._)([_.computed], _.prototype, "SteamVRUnavailable", null),
        (0, _._)([_.computed], _.prototype, "ActionSets", null),
        (0, _._)([_.computed], _.prototype, "ManifestOptions", null),
        (0, _._)([_.computed], _.prototype, "SecondaryControllerOptions", null),
        (0, _._)([_.action], _.prototype, "SetOptionValue", null),
        (0, _._)([_.action], _.prototype, "AddSimulatedAction", null),
        (0, _._)([_.action], _.prototype, "DeleteSimulatedActionByPath", null),
        (0, _._)([_.computed], _.prototype, "SelectedApp", null),
        (0, _._)([_.computed], _.prototype, "SelectedAppActions", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "CurrentAppCanAccessPrivateInputs",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "SelectedControllerTypeInfo", null),
        (0, _._)([_.computed], _.prototype, "CurrentBindingSaveType", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "CurrentBindingActionManifestVersion",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "SelectedActionSet", null),
        (0, _._)([_.computed], _.prototype, "SelectedActionSetDetails", null),
        (0, _._)([_.computed], _.prototype, "SelectedActionSetActions", null),
        (0, _._)([_._], _.prototype, "GetSelectedAppDefaultBinding", null),
        (0, _._)([_._], _.prototype, "GetActionByName", null),
        (0, _._)([_.computed], _.prototype, "SelectedActionSetPoses", null),
        (0, _._)([_.computed], _.prototype, "SelectedActionSetHaptics", null),
        (0, _._)([_.computed], _.prototype, "SelectedActionSetSkeletons", null),
        (0, _._)([_.computed], _.prototype, "SelectedActionSetChords", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "SelectedActionSetChordCount",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "SelectedActionSetSources", null),
        (0, _._)([_.computed], _.prototype, "BSelectedActionSetHasPoses", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "BSelectedActionSetHasBoundPoses",
          null,
        ),
        (0, _._)(
          [_.computed],
          _.prototype,
          "BSelectedActionSetHasHaptics",
          null,
        ),
        (0, _._)(
          [_.computed],
          _.prototype,
          "BSelectedActionSetHasBoundHaptics",
          null,
        ),
        (0, _._)(
          [_.computed],
          _.prototype,
          "BSelectedActionSetHasSkeletons",
          null,
        ),
        (0, _._)(
          [_.computed],
          _.prototype,
          "BSelectedActionSetHasBoundSkeletons",
          null,
        ),
        (0, _._)([_.action], _.prototype, "ClearSelectedApp", null),
        (0, _._)([_.action], _.prototype, "SetSelectedApp", null),
        (0, _._)([_.action], _.prototype, "SetSelectedController", null),
        (0, _._)([_.action], _.prototype, "SetSelectedActionSet", null),
        (0, _._)(
          [_._],
          _.prototype,
          "LocalizeStringForSelectedControllerType",
          null,
        ),
        (0, _._)(
          [_._],
          _.prototype,
          "LocalizePathNameForSelectedControllerType",
          null,
        ),
        (0, _._)(
          [_.computed],
          _.prototype,
          "SelectedControllerTypeLocalizedName",
          null,
        ),
        (0, _._)([_.action], _.prototype, "RegisterBindingWatcher", null),
        (0, _._)([_.action], _.prototype, "UnregisterBindingWatcher", null),
        (0, _._)([_.action], _.prototype, "GetActionBinding", null),
        (0, _._)([_._], _.prototype, "GetInputModesForSourceType", null),
        (0, _._)([_._], _.prototype, "GetBooleanInputOptionsForMode", null),
        (0, _._)([_._], _.prototype, "GetActionBindingsOfType", null),
        (0, _._)([_.computed], _.prototype, "GetBooleanActionBindings", null),
        (0, _._)([_.computed], _.prototype, "GetVector1ActionBindings", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "GetLiteralVector1ActionBindings",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "GetVector2ActionBindings", null),
        (0, _._)([_.computed], _.prototype, "GetVector3ActionBindings", null),
        (0, _._)([_.computed], _.prototype, "GetPoseActionBindings", null),
        (0, _._)([_.computed], _.prototype, "GetHapticsActionBindings", null),
        (0, _._)([_.computed], _.prototype, "GetSkeletonActionBindings", null),
        (0, _._)([_.computed], _.prototype, "ConfigName", null),
        (0, _._)([_.computed], _.prototype, "ConfigDescription", null),
        (0, _._)([_._], _.prototype, "GetPoseAction", null),
        (0, _._)([_._], _.prototype, "GetPoseActionByPath", null),
        (0, _._)([_._], _.prototype, "GetHapticsAction", null),
        (0, _._)([_._], _.prototype, "GetHapticsActionByPath", null),
        (0, _._)([_._], _.prototype, "GetSkeletonAction", null),
        (0, _._)([_._], _.prototype, "GetSkeletonActionByPath", null),
        (0, _._)([_._], _.prototype, "NotifyWatchersOfChange", null),
        (0, _._)([_.action], _.prototype, "SetActionForInputModeType", null),
        (0, _._)([_.action], _.prototype, "SetParameterForInputModeType", null),
        (0, _._)([_._], _.prototype, "AddActionSetIfRequired", null),
        (0, _._)([_.action], _.prototype, "AddInputModeForSource", null),
        (0, _._)([_.action], _.prototype, "DeleteInputModeForSource", null),
        (0, _._)([_.action], _.prototype, "SetInputModeForInputSource", null),
        (0, _._)([_.action], _.prototype, "ClearModesForInputPath", null),
        (0, _._)([_.action], _.prototype, "SetInputPathForPose", null),
        (0, _._)([_.action], _.prototype, "SetPoseForInputPath", null),
        (0, _._)([_.action], _.prototype, "AddDefaultPose", null),
        (0, _._)([_.action], _.prototype, "SetInputPathForHaptics", null),
        (0, _._)([_.action], _.prototype, "SetHapticsForInputPath", null),
        (0, _._)([_.action], _.prototype, "AddDefaultHaptics", null),
        (0, _._)([_.action], _.prototype, "SetInputPathForSkeleton", null),
        (0, _._)([_.action], _.prototype, "SetSkeletonForInputPath", null),
        (0, _._)([_.action], _.prototype, "AddDefaultSkeleton", null),
        (0, _._)([_.action], _.prototype, "SetActionForChord", null),
        (0, _._)([_.action], _.prototype, "DeleteChord", null),
        (0, _._)([_.action], _.prototype, "AddChord", null),
        (0, _._)([_.action], _.prototype, "DeleteSourceFromChord", null),
        (0, _._)([_.action], _.prototype, "SetInputTypeForChord", null),
        (0, _._)([_.action], _.prototype, "SetInputSourceForChord", null),
        (0, _._)([_.action], _.prototype, "LoadActionManifest", null),
        (0, _._)([_.computed], _.prototype, "SelectedBindingURL", null),
        (0, _._)([_.computed], _.prototype, "LoadedBindingURL", null),
        (0, _._)([_.computed], _.prototype, "SelectedBindingIsLegacy", null),
        (0, _._)([_.computed], _.prototype, "SelectedBindingIsOpenXR", null),
        (0, _._)([_.computed], _.prototype, "IsSecondaryController", null),
        (0, _._)([_.computed], _.prototype, "TrackerBindings", null),
        (0, _._)([_.action], _.prototype, "GetTrackerBindings", null),
        (0, _._)([_._], _.prototype, "SetTrackerBinding", null),
        (0, _._)([_._], _.prototype, "PulseHaptics", null),
        (0, _._)([_.computed], _.prototype, "KnownControllerTypes", null),
        (0, _._)([_._], _.prototype, "AutosaveBinding", null),
        (0, _._)([_._], _.prototype, "OnWebSocketOpen", null),
        (0, _._)([_._], _.prototype, "OnWebSocketClose", null),
        (0, _._)([_._], _.prototype, "WebSocketSend", null),
        (0, _._)(
          [_.action.bound],
          _.prototype,
          "OnWorkshopUploadComplete",
          null,
        ),
        (0, _._)([_._], _.prototype, "OnPendingFileSaved", null),
        (0, _._)([_.computed], _.prototype, "SaveNoticeText", null),
        (0, _._)([_._], _.prototype, "QueryBindingList", null),
        (0, _._)([_._], _.prototype, "DeleteBinding", null),
        (0, _._)([_._], _.prototype, "OnBindingDeleteComplete", null),
        (0, _._)(
          [_._],
          _.prototype,
          "ShouldShowBindingFailureForControllerType",
          null,
        ),
        (0, _._)([_._], _.prototype, "OnQueryResults", null),
        (0, _._)([_._], _.prototype, "SelectConfig", null),
        (0, _._)([_._], _.prototype, "OnSelectConfigComplete", null),
        (0, _._)([_._], _.prototype, "OnTrackersBindingChanged", null),
        (0, _._)([_._], _.prototype, "OnActionManifestReloaded", null),
        (0, _._)([_._], _.prototype, "SetBindingURL", null),
        (0, _._)([_._], _.prototype, "OnActionBindingsReloaded", null),
        (0, _._)(
          [_._],
          _.prototype,
          "GetControllerWatcherForSourceFromControllerType",
          null,
        ),
        (0, _._)([_._], _.prototype, "OnWebSocketMessage", null),
        (0, _._)([_.computed], _.prototype, "BindingConfig", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "BindingSubscriptionChangedCanary",
          null,
        );
      const _ = new _();
      window.controllerBindingStore = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.None = 0)] = "None"),
          (_[(_.List = 1)] = "List"),
          (_[(_.ViewBinding = 2)] = "ViewBinding"),
          (_[(_.EditBinding = 3)] = "EditBinding"),
          (_[(_.AppSelect = 4)] = "AppSelect"),
          (_[(_.Debugger = 5)] = "Debugger");
      })(_ || (_ = {}));
      class _ {
        constructor() {
          (this.m_State = _.None),
            (this.m_bLoading = !1),
            (this.m_rBindingList = void 0),
            (this.m_bShowBindingListError = !1),
            (this.m_sBindingListError = void 0),
            (this.m_bCanCloseBindingListError = !0),
            (this.m_timeoutLoading = void 0),
            (this.m_pathUpdateTimer = void 0),
            (this.m_bStandaloneSettingsPage = !1),
            (this.m_bDesktopMode = !1),
            (0, _.makeObservable)(this);
        }
        Init() {
          window.addEventListener("popstate", this.OnPopState),
            history.pushState(
              {
                direction: "back",
              },
              "back",
            ),
            history.pushState(
              {
                direction: "current",
              },
              "current",
            ),
            history.pushState(
              {
                direction: "forward",
              },
              "forward",
            ),
            history.back();
          let _ = "bindingui/" + _.OH$[(0, _.R$f)()];
          (this.m_mailbox = new _._nH()),
            this.m_mailbox.Init(_),
            this.m_mailbox.RegisterHandler(
              "show_app_select",
              this.OnShowAppSelect,
            ),
            this.m_mailbox.RegisterHandler(
              "show_app_binding",
              this.OnShowAppBinding,
            ),
            this.m_mailbox.RegisterHandler(
              "show_input_debugger",
              this.OnShowInputDebugger,
            ),
            this.m_mailbox.RegisterHandler(
              "binding_load_failed",
              this.OnBindingLoadFailed,
            ),
            (0, _.autorun)(this.UpdateWindowTitle);
        }
        ShowOverlayInDashboard() {
          null === _.Ay$ ||
            void 0 === _.Ay$ ||
            _.Ay$.VRClient.ShowDashboardOverlay({
              overlayKey: "system.vrwebhelper.controllerbinding",
              sReason: "cinputui_showoverlayindashboard",
            });
        }
        OnShowAppSelect(_) {
          (this.m_bStandaloneSettingsPage = !1), this.ShowAppSelect();
        }
        OnShowInputDebugger(_) {
          (this.m_bStandaloneSettingsPage = !1), this.ShowDebugger();
        }
        OnShowAppBinding(_) {
          (this.m_bStandaloneSettingsPage = !1),
            (this.Loading = !0),
            _._.UpdateApplications().then(() => {
              if (
                ((0, _.R$f)() == _.OH$.Overlay
                  ? this.ShowOverlayInDashboard()
                  : (0, _.R$f)() == _.OH$.Desktop && _.Ay$.ShowBindingUI(!0),
                !_._.GetApp(_.app_key))
              )
                return (
                  console.log(
                    "Warning: Could not find app key: " +
                      _.app_key +
                      " showing app select.",
                  ),
                  void this.ShowAppSelect()
                );
              _._.SetSelectedApp(_.app_key, !0),
                _._.ReloadCurrentApp().then(() => {
                  if (_.controller_type)
                    return (
                      _._.SetSelectedController(_.controller_type, !0),
                      void _._.ReloadControllerConfiguration().then(() => {
                        _.action_set && _._.SetSelectedActionSet(_.action_set),
                          (this.Loading = !1),
                          this.EditCurrentBinding();
                      })
                    );
                  (this.Loading = !1), this.ShowBindingList();
                });
            });
        }
        OnBindingLoadFailed(_) {
          console.log(
            "OnBindingLoadFailed: " +
              _.app_key +
              " " +
              _.controller_type +
              " " +
              _.error,
          ),
            _._.UpdateApplications().then(() => {
              if (!_._.ShouldShowBindingFailureForApp(_.app_key)) return;
              if (
                !_._.ShouldShowBindingFailureForControllerType(
                  _.controller_type,
                )
              )
                return;
              _._.RememberFailedLoadUri(_.uri),
                _._.SetSelectedApp(_.app_key),
                _._.SetSelectedController(_.controller_type);
              let _ = _._.GetApp(_.app_key),
                _ = _._.GetControllerTypeInfo(_.controller_type);
              if (!_) return;
              let _ = _._.LocalizeControllerString(_, _.controller_type);
              this.ShowBindingList(
                (0, _._)(
                  _.error,
                  _ ? _.name : (0, _._)("#unknown_application"),
                  _,
                ),
              ),
                null === _.Ay$ || void 0 === _.Ay$ || _.Ay$.ShowBindingUI(!1);
            });
        }
        SetStandaloneSettingsPage(_) {
          this.m_bStandaloneSettingsPage = _;
        }
        SetDesktopMode(_) {
          this.m_bDesktopMode = _;
        }
        get DesktopMode() {
          return this.m_bDesktopMode;
        }
        SetBindingListError(_, _ = !0) {
          (this.m_bShowBindingListError = null != _),
            (this.m_sBindingListError = _),
            (this.m_bCanCloseBindingListError = _);
        }
        get ShowBindingListError() {
          return this.m_bShowBindingListError;
        }
        get BindingListError() {
          return this.m_sBindingListError;
        }
        get CanCloseBindingListError() {
          return this.m_bCanCloseBindingListError;
        }
        OnPopState(_) {
          let _ = "";
          _.state && _.state.direction && (_ = _.state.direction),
            "back" == _
              ? (this.m_bStandaloneSettingsPage &&
                  (this.SetStandaloneSettingsPage(!1),
                  this.ReturnToSettingsUI()),
                this.GoBackPage(),
                history.forward())
              : "forward" == _ && (history.back(), this.GoForwardPage());
        }
        GoBackPage() {
          switch (this.m_State) {
            default:
            case _.None:
            case _.AppSelect:
              break;
            case _.Debugger:
            case _.List:
              this.ShowAppSelect();
              break;
            case _.EditBinding:
            case _.ViewBinding:
              this.ShowBindingList();
          }
        }
        GoForwardPage() {
          switch (this.m_State) {
            default:
            case _.None:
            case _.AppSelect:
              this.ShowBindingList();
              break;
            case _.List:
              this.CurrentBinding.url == _._.LoadedBindingURL
                ? this.EditCurrentBinding()
                : this.ViewCurrentBinding();
            case _.EditBinding:
            case _.ViewBinding:
          }
        }
        get GetUIState() {
          return this.m_State;
        }
        get BindingQueryResults() {
          return this.m_rBindingList;
        }
        get Loading() {
          return this.m_bLoading;
        }
        set Loading(_) {
          (this.m_bLoading = _),
            _
              ? (this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading),
                (this.m_timeoutLoading = window.setTimeout(() => {
                  this.Loading = !1;
                }, 1e4)))
              : this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading);
        }
        IsSafeToResetControllerType(_, _) {
          return (
            this.m_State == _.AppSelect ||
            this.m_State == _.None ||
            ("TrackedDeviceClass_HMD" == _ &&
              "TrackedDeviceClass_Controller" == _)
          );
        }
        EditCurrentBinding() {
          this.m_State = _.EditBinding;
        }
        ViewCurrentBinding() {
          this.m_State = _.ViewBinding;
        }
        ShowBindingList(_ = void 0) {
          (this.m_bStandaloneSettingsPage = !1),
            this.SetBindingListError(_),
            (this.m_State = _.List),
            (this.Loading = !1);
        }
        get CurrentBinding() {
          if (this.BindingQueryResults)
            return _.BindingQueryResults.find(
              (_) => _.url == _._.SelectedBindingURL,
            );
        }
        ReturnToSettingsUI() {
          this.ShowAppSelect(),
            null === _.Ay$ ||
              void 0 === _.Ay$ ||
              _.Ay$.ShowSettingsUI((0, _.R$f)() == _.OH$.Desktop);
        }
        ShowAppSelect() {
          (this.m_bStandaloneSettingsPage = !1),
            (this.Loading = !0),
            _._.UpdateApplications()
              .then(() => {
                (0, _.runInAction)(() => {
                  (this.Loading = !1), (this.m_State = _.AppSelect);
                });
              })
              .catch(() => {
                this.Loading = !1;
              });
        }
        UpdatePathsTimeout() {
          try {
            _._.UpdatePaths().then(() => {
              this.m_State == _.Debugger
                ? (this.m_pathUpdateTimer = window.setTimeout(
                    this.UpdatePathsTimeout,
                    500,
                  ))
                : (this.m_pathUpdateTimer = void 0);
            });
          } catch (_) {
            console.log("Stopping debugger timer because", _);
          }
        }
        ShowDebugger() {
          (this.Loading = !0),
            _._.UpdateApplications()
              .then(() => {
                this.Loading = !1;
                let _ = _._.GetApp(_._.SelectedApp);
                _ &&
                  _.client_container_handle &&
                  _._.AddSubscribedContainer(_.client_container_handle),
                  (this.m_State = _.Debugger),
                  (this.m_pathUpdateTimer = window.setTimeout(
                    this.UpdatePathsTimeout,
                    500,
                  )),
                  _.Ay$.ShowBindingUI((0, _.R$f)() == _.OH$.Desktop);
              })
              .catch(() => {
                this.Loading = !1;
              });
        }
        GetBindingList() {
          return (0, _._)(this, void 0, void 0, function* () {
            var _;
            (0, _.runInAction)(() => {
              (this.Loading = !0), (this.m_rBindingList = []);
            });
            try {
              const _ = _._.SelectedControllerTypeInfo,
                _ = yield _._.QueryBindingList(
                  _._.SelectedApp,
                  null !== (_ = null == _ ? void 0 : _.controller_type) &&
                    void 0 !== _
                    ? _
                    : "",
                );
              _.success &&
                (0, _.runInAction)(() => {
                  this.m_rBindingList = _.results;
                });
            } catch (_) {
              this.SetBindingListError(
                (0, _._)("#BindingUI_WorkshopBindingLoadFailed"),
              ),
                console.error("Failed to load workshop bindings " + _);
            } finally {
              this.Loading = !1;
            }
          });
        }
        UpdateWindowTitle() {
          setTimeout(() => {
            switch (this.GetUIState) {
              case _.AppSelect:
              case _.Debugger:
              case _.EditBinding:
              case _.List:
              case _.None:
              case _.ViewBinding:
                document.title = (0, _._)(
                  "#BindingUI_WindowTitle_ControllerBinding",
                );
            }
          }, 0);
        }
      }
      (0, _._)([_.observable], _.prototype, "m_State", void 0),
        (0, _._)([_.observable], _.prototype, "m_bLoading", void 0),
        (0, _._)([_.observable], _.prototype, "m_rBindingList", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_bShowBindingListError",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_sBindingListError", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_bCanCloseBindingListError",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_bDesktopMode", void 0),
        (0, _._)([_._], _.prototype, "OnShowAppSelect", null),
        (0, _._)([_._], _.prototype, "OnShowInputDebugger", null),
        (0, _._)([_._], _.prototype, "OnShowAppBinding", null),
        (0, _._)([_._], _.prototype, "OnBindingLoadFailed", null),
        (0, _._)([_.computed], _.prototype, "DesktopMode", null),
        (0, _._)([_._], _.prototype, "SetBindingListError", null),
        (0, _._)([_.computed], _.prototype, "ShowBindingListError", null),
        (0, _._)([_.computed], _.prototype, "BindingListError", null),
        (0, _._)([_.computed], _.prototype, "CanCloseBindingListError", null),
        (0, _._)([_._], _.prototype, "OnPopState", null),
        (0, _._)([_._], _.prototype, "GoBackPage", null),
        (0, _._)([_._], _.prototype, "GoForwardPage", null),
        (0, _._)([_.computed], _.prototype, "GetUIState", null),
        (0, _._)([_.computed], _.prototype, "BindingQueryResults", null),
        (0, _._)([_.computed], _.prototype, "Loading", null),
        (0, _._)([_._], _.prototype, "IsSafeToResetControllerType", null),
        (0, _._)([_.action.bound], _.prototype, "EditCurrentBinding", null),
        (0, _._)([_._], _.prototype, "ViewCurrentBinding", null),
        (0, _._)([_._], _.prototype, "ShowBindingList", null),
        (0, _._)([_.computed], _.prototype, "CurrentBinding", null),
        (0, _._)([_._], _.prototype, "ReturnToSettingsUI", null),
        (0, _._)([_._], _.prototype, "ShowAppSelect", null),
        (0, _._)([_._], _.prototype, "UpdatePathsTimeout", null),
        (0, _._)([_._], _.prototype, "ShowDebugger", null),
        (0, _._)([_._], _.prototype, "GetBindingList", null),
        (0, _._)([_._], _.prototype, "UpdateWindowTitle", null);
      const _ = new _();
      window.inputUI = _;
    },
  },
]);
