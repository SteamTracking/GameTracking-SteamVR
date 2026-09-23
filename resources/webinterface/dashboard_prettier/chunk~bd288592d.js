var CLSTAMP = "11023671";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [452],
  {
    5802: (e, t, i) => {
      i.d(t, { B$: () => P, bR: () => I, mQ: () => B, xM: () => v });
      var o,
        n = i(1635),
        s = i(3236),
        r = i(2505),
        l = i.n(r),
        d = i(7813),
        c = i(3714),
        a = i(6090),
        p = i(6795),
        u = i(1532),
        h = i(9118),
        g = i(3804);
      class S {
        constructor() {
          (this.path = void 0),
            (this.mode = void 0),
            (this.parameters = new Map()),
            (this.inputs = new Map()),
            (0, d.makeObservable)(this);
        }
      }
      (0, n.Cg)([d.observable], S.prototype, "path", void 0),
        (0, n.Cg)([d.observable], S.prototype, "mode", void 0),
        (0, n.Cg)([d.observable], S.prototype, "parameters", void 0),
        (0, n.Cg)([d.observable], S.prototype, "inputs", void 0);
      class m {
        constructor() {
          (this.path = void 0),
            (this.output = void 0),
            (0, d.makeObservable)(this);
        }
      }
      (0, n.Cg)([d.observable], m.prototype, "path", void 0),
        (0, n.Cg)([d.observable], m.prototype, "output", void 0),
        (0, n.Cg)([d.observable], m.prototype, "parameters", void 0);
      class _ {
        constructor() {
          (this.path = void 0),
            (this.output = void 0),
            (0, d.makeObservable)(this);
        }
      }
      (0, n.Cg)([d.observable], _.prototype, "path", void 0),
        (0, n.Cg)([d.observable], _.prototype, "output", void 0);
      class f {
        constructor() {
          (this.path = void 0),
            (this.output = void 0),
            (0, d.makeObservable)(this);
        }
      }
      (0, n.Cg)([d.observable], f.prototype, "path", void 0),
        (0, n.Cg)([d.observable], f.prototype, "output", void 0),
        (0, n.Cg)([d.observable], f.prototype, "parameters", void 0);
      class y {
        constructor() {
          (this.output = void 0),
            (this.inputs = new Array()),
            (0, d.makeObservable)(this);
        }
      }
      (0, n.Cg)([d.observable], y.prototype, "output", void 0),
        (0, n.Cg)([d.observable], y.prototype, "inputs", void 0);
      class A {
        constructor() {
          (this.chords = void 0),
            (this.poses = void 0),
            (this.haptics = void 0),
            (this.sources = void 0),
            (this.skeleton = void 0),
            (0, d.makeObservable)(this);
        }
      }
      (0, n.Cg)([d.observable], A.prototype, "chords", void 0),
        (0, n.Cg)([d.observable], A.prototype, "poses", void 0),
        (0, n.Cg)([d.observable], A.prototype, "haptics", void 0),
        (0, n.Cg)([d.observable], A.prototype, "sources", void 0),
        (0, n.Cg)([d.observable], A.prototype, "skeleton", void 0);
      class C {
        constructor() {
          (this.device_path_string = void 0),
            (this.device_path_handle = void 0),
            (this.role = void 0),
            (this.controller_role = void 0),
            (0, d.makeObservable)(this);
        }
      }
      (0, n.Cg)([d.observable], C.prototype, "device_path_string", void 0),
        (0, n.Cg)([d.observable], C.prototype, "device_path_handle", void 0),
        (0, n.Cg)([d.observable], C.prototype, "role", void 0),
        (0, n.Cg)([d.observable], C.prototype, "controller_role", void 0);
      class b {
        constructor() {
          (this.trackers = void 0),
            (this.valid_roles = []),
            (0, d.makeObservable)(this);
        }
      }
      function v(e) {
        return new Promise(function (t, i) {
          l()
            .get("/input/getactions.json?app_key=" + e)
            .then((i) => {
              console.log("Loaded action manifest for ", e), t(i.data);
            })
            .catch((e) => {
              i(e);
            });
        });
      }
      function B(e, t, i) {
        return (0, n.sH)(this, void 0, void 0, function* () {
          let o = (yield l().get(
            "/input/loadbindingfromurl.json?binding_url=" +
              encodeURI(i) +
              "&controller_type=" +
              encodeURI(t) +
              "&app_key=" +
              encodeURI(e),
          )).data;
          if (o.success) return o;
          throw new Error(o.error);
        });
      }
      (0, n.Cg)([d.observable], b.prototype, "trackers", void 0),
        (0, n.Cg)([d.observable], b.prototype, "valid_roles", void 0);
      class I {
        constructor(e, t) {
          (this.x = e), (this.y = t), this.toString.bind(this);
        }
        toString() {
          return this.x + "," + this.y;
        }
      }
      class k {
        constructor(e, t, i, o, n) {
          (this.m_BindingUISource = void 0),
            (this.m_ControllerProfile = void 0),
            (this.m_sDeviceInputPath = void 0),
            (this.m_eButtonSide = void 0),
            (this.m_sInputPath = void 0),
            (this.m_sActionSet = void 0),
            (this.m_BindingStoreObserverDisposer = void 0),
            (this.m_iNewSourceEntry = -1),
            (this.m_sDeviceInputPath = e),
            (this.m_ControllerProfile = t),
            (this.m_eButtonSide = i),
            (this.m_sInputPath = o),
            (this.m_sActionSet = n),
            (this.m_BindingStoreObserverDisposer = (0, d.observe)(P, (e) => {
              "m_LoadedBinding" == e.name && this.UpdateBindingSource();
            })),
            this.UpdateBindingSource(),
            P.RegisterBindingWatcher(this.UpdateBindingSource.bind(this)),
            (0, d.makeObservable)(this);
        }
        cancelWatcher() {
          this.m_BindingStoreObserverDisposer(),
            P.UnregisterBindingWatcher(this.UpdateBindingSource);
        }
        UpdateBindingSource() {
          this.m_BindingUISource = P.GetActionBinding(
            this.GetFullInputPath,
            this.m_sActionSet,
          );
        }
        get GetFullInputPath() {
          let e = this.m_sDeviceInputPath + this.m_sInputPath;
          return (e = e.replace(/([^:]\/)\/+/g, "$1")), e;
        }
        GetSVGEndPoint() {
          return new I(
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
        GetActionForInputType(e, t) {
          if (
            this.m_BindingUISource &&
            this.m_BindingUISource[e].inputs &&
            this.m_BindingUISource[e].inputs.has(t)
          ) {
            let i = this.m_BindingUISource[e].inputs.get(t).output,
              o = P.GetActionByName(i);
            if (!o) {
              let e = P.GetSimulatedActionByPath(i);
              e && (o = P.CreateActionDefinitionForSimulatedAction(e));
            }
            let n = P.GetAliasInfo(i);
            return (
              o &&
                n &&
                n.alias_name &&
                ((o = Object.assign({}, o)), (o.localized_name = n.alias_name)),
              o
            );
          }
        }
        GetClickAction(e) {
          return this.GetActionForInputType(e, "click");
        }
        GetTouchAction(e) {
          return this.GetActionForInputType(e, "touch");
        }
        GetPositionAction(e) {
          return this.GetActionForInputType(e, "position");
        }
        GetHeldAction(e) {
          return this.GetActionForInputType(e, "held");
        }
        GetLongAction(e) {
          return this.GetActionForInputType(e, "long");
        }
        GetSingleAction(e) {
          return this.GetActionForInputType(e, "single");
        }
        GetDoubleAction(e) {
          return this.GetActionForInputType(e, "double");
        }
        GetNorthAction(e) {
          return this.GetActionForInputType(e, "north");
        }
        GetEastAction(e) {
          return this.GetActionForInputType(e, "east");
        }
        GetSouthAction(e) {
          return this.GetActionForInputType(e, "south");
        }
        GetWestAction(e) {
          return this.GetActionForInputType(e, "west");
        }
        GetCenterAction(e) {
          return this.GetActionForInputType(e, "center");
        }
        GetScrollAction(e) {
          return this.GetActionForInputType(e, "scroll");
        }
        GetPullAction(e) {
          return this.GetActionForInputType(e, "pull");
        }
        GetForceAction(e) {
          return this.GetActionForInputType(e, "force");
        }
        GetConstantAction(e) {
          return this.GetActionForInputType(e, "constant");
        }
        GetGrabAction(e) {
          return this.GetActionForInputType(e, "grab");
        }
        GetValueAction(e) {
          return this.GetActionForInputType(e, "value");
        }
        get GetControllerInputName() {
          return h.W.LocalizeDriverString(
            this.m_ControllerProfile.resource_root,
            this.m_sInputPath,
          );
        }
        get GetModes() {
          return this.m_BindingUISource ? this.m_BindingUISource : [];
        }
        GetMode(e) {
          return this.m_BindingUISource &&
            e >= 0 &&
            e < this.m_BindingUISource.length
            ? this.m_BindingUISource[e].mode
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
        SetInputMode(e, t) {
          !this.m_BindingUISource || t < 0 || t >= this.m_BindingUISource.length
            ? console.error("SetInputMode: Invalid mode index for new mode")
            : (this.ClearNewModeIfSet(t),
              P.SetInputModeForInputSource(this.GetFullInputPath, t, e));
        }
        AddInputMode(e) {
          this.m_iNewSourceEntry = P.AddInputModeForSource(
            this.GetFullInputPath,
            e,
          );
        }
        DeleteInputMode(e) {
          !this.m_BindingUISource || e < 0 || e >= this.m_BindingUISource.length
            ? console.error("SetInputMode: Invalid mode index for new mode")
            : P.DeleteInputModeForSource(this.GetFullInputPath, e);
        }
        ClearNewModeIfSet(e) {
          -1 != this.m_iNewSourceEntry &&
            this.m_iNewSourceEntry == e &&
            (this.m_iNewSourceEntry = -1);
        }
        BHasModeSelectionPending(e) {
          return -1 != this.m_iNewSourceEntry && this.m_iNewSourceEntry == e;
        }
        SetClickAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "click", t, [
            "button",
            "trackpad",
            "joystick",
            "trigger",
            "toggle_button",
            "complex_button",
          ]);
        }
        SetTouchAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "touch", t, [
            "button",
            "trackpad",
            "joystick",
            "trigger",
            "toggle_button",
            "complex_button",
          ]);
        }
        SetHeldAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "held", t, [
            "button",
            "complex_button",
          ]);
        }
        SetLongAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "long", t, [
            "button",
            "complex_button",
          ]);
        }
        SetSingleAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "single", t, [
            "button",
            "complex_button",
          ]);
        }
        SetDoubleAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "double", t, [
            "button",
            "complex_button",
          ]);
        }
        SetPositionAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "position", t, [
            "trackpad",
            "joystick",
          ]);
        }
        SetNorthAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "north", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetEastAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "east", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetSouthAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "south", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetWestAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "west", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetCenterAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "center", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetScrollAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "scroll", t, [
            "scroll",
          ]);
        }
        SetPullAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "pull", t, [
            "trigger",
          ]);
        }
        SetForceAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "force", t, [
            "force_sensor",
          ]);
        }
        SetGrabAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "grab", t, [
            "grab",
          ]);
        }
        SetValueAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "value", t, [
            "scalar_constant",
          ]);
        }
        SetConstantAction(e, t) {
          P.SetActionForInputModeType(this.GetFullInputPath, e, "constant", t, [
            "static_bool",
          ]);
        }
        CopyActions(e) {
          P.ClearModesForInputPath(this.GetFullInputPath),
            e.GetModes.forEach((e, t) => {
              P.AddInputModeForSource(this.GetFullInputPath, e.mode),
                e.inputs.forEach((e, i) => {
                  P.SetActionForInputModeType(
                    this.GetFullInputPath,
                    t,
                    i,
                    e.output,
                    [],
                  );
                });
            });
        }
        BindingsMatch(e) {
          let t = e.GetModes;
          if (this.GetModes.length != t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            let i = t[e],
              o = this.GetModes.filter((e) => e.mode == i.mode);
            if (o.length > 0) {
              let e = !0;
              return (
                o[0].inputs.forEach((t, o) => {
                  (i.inputs.has(o) && i.inputs.get(o).output == t.output) ||
                    (e = !1);
                }),
                e
              );
            }
            return !1;
          }
          return !0;
        }
        SetClickParameter(e, t, i) {
          P.SetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "click",
            t,
            i,
          );
        }
        SetTouchParameter(e, t, i) {
          P.SetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "touch",
            t,
            i,
          );
        }
        SetParameter(e, t, i, o) {
          P.SetParameterForInputModeType(this.GetFullInputPath, e, t, i, o);
        }
        GetClickParameter(e, t) {
          return P.GetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "click",
            t,
          );
        }
        GetTouchParameter(e, t) {
          return P.GetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "touch",
            t,
          );
        }
        GetParameter(e, t, i) {
          return P.GetParameterForInputModeType(this.GetFullInputPath, e, t, i);
        }
        GetTrackpadInvertState(e) {
          switch (
            P.GetParameterForInputModeType(
              this.GetFullInputPath,
              e,
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
        SetTrackpadInvertState(e, t) {
          let i = "";
          switch (t) {
            case "x":
              i = "x";
              break;
            case "y":
              i = "y";
              break;
            case "xy":
              i = "xy";
          }
          P.SetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "trackpad",
            "invert",
            i,
          );
        }
      }
      (0, n.Cg)([d.observable], k.prototype, "m_BindingUISource", void 0),
        (0, n.Cg)([d.observable], k.prototype, "m_ControllerProfile", void 0),
        (0, n.Cg)([d.observable], k.prototype, "m_sDeviceInputPath", void 0),
        (0, n.Cg)([d.observable], k.prototype, "m_eButtonSide", void 0),
        (0, n.Cg)([d.observable], k.prototype, "m_sInputPath", void 0),
        (0, n.Cg)([d.observable], k.prototype, "m_sActionSet", void 0),
        (0, n.Cg)([s.o], k.prototype, "cancelWatcher", null),
        (0, n.Cg)([d.action], k.prototype, "UpdateBindingSource", null),
        (0, n.Cg)([d.computed], k.prototype, "GetFullInputPath", null),
        (0, n.Cg)([s.o], k.prototype, "GetSVGEndPoint", null),
        (0, n.Cg)([d.computed], k.prototype, "GetButtonSide", null),
        (0, n.Cg)([d.computed], k.prototype, "GetNumModes", null),
        (0, n.Cg)([s.o], k.prototype, "GetActionForInputType", null),
        (0, n.Cg)([s.o], k.prototype, "GetClickAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetTouchAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetPositionAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetHeldAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetLongAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetSingleAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetDoubleAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetNorthAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetEastAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetSouthAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetWestAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetCenterAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetScrollAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetPullAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetForceAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetConstantAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetGrabAction", null),
        (0, n.Cg)([s.o], k.prototype, "GetValueAction", null),
        (0, n.Cg)([d.computed], k.prototype, "GetControllerInputName", null),
        (0, n.Cg)([d.computed], k.prototype, "GetModes", null),
        (0, n.Cg)([s.o], k.prototype, "GetMode", null),
        (0, n.Cg)([d.computed], k.prototype, "GetInputSourceType", null),
        (0, n.Cg)([d.computed], k.prototype, "GetInputSource", null),
        (0, n.Cg)(
          [d.computed],
          k.prototype,
          "GetInputSourceClickSupport",
          null,
        ),
        (0, n.Cg)(
          [d.computed],
          k.prototype,
          "GetInputSourceTouchSupport",
          null,
        ),
        (0, n.Cg)(
          [d.computed],
          k.prototype,
          "GetInputSourceForceSupport",
          null,
        ),
        (0, n.Cg)(
          [d.computed],
          k.prototype,
          "GetInputSourceDefaultDeadzone",
          null,
        ),
        (0, n.Cg)([d.action], k.prototype, "SetInputMode", null),
        (0, n.Cg)([d.action], k.prototype, "AddInputMode", null),
        (0, n.Cg)([d.action], k.prototype, "DeleteInputMode", null),
        (0, n.Cg)([s.o], k.prototype, "ClearNewModeIfSet", null),
        (0, n.Cg)([s.o], k.prototype, "BHasModeSelectionPending", null),
        (0, n.Cg)([d.action], k.prototype, "SetClickAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetTouchAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetHeldAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetLongAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetSingleAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetDoubleAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetPositionAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetNorthAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetEastAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetSouthAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetWestAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetCenterAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetScrollAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetPullAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetForceAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetGrabAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetValueAction", null),
        (0, n.Cg)([d.action], k.prototype, "SetConstantAction", null),
        (0, n.Cg)([d.action], k.prototype, "CopyActions", null),
        (0, n.Cg)([s.o], k.prototype, "BindingsMatch", null),
        (0, n.Cg)([d.action], k.prototype, "SetClickParameter", null),
        (0, n.Cg)([d.action], k.prototype, "SetTouchParameter", null),
        (0, n.Cg)([d.action], k.prototype, "SetParameter", null),
        (0, n.Cg)([d.action], k.prototype, "GetClickParameter", null),
        (0, n.Cg)([d.action], k.prototype, "GetTouchParameter", null),
        (0, n.Cg)([d.action], k.prototype, "GetParameter", null),
        (0, n.Cg)([s.o], k.prototype, "GetTrackpadInvertState", null),
        (0, n.Cg)([d.action], k.prototype, "SetTrackpadInvertState", null);
      class w {
        constructor(e, t, i) {
          (this.m_sSaveType = e),
            (this.m_OutstandingSaveBindingResolve = t),
            (this.m_OutstandingSaveBindingReject = i);
        }
        resolve(e) {
          this.m_OutstandingSaveBindingResolve(e);
        }
        reject(e) {
          this.m_OutstandingSaveBindingReject(e);
        }
        get SaveType() {
          return this.m_sSaveType;
        }
      }
      (0, n.Cg)([s.o], w.prototype, "resolve", null),
        (0, n.Cg)([s.o], w.prototype, "reject", null),
        (function (e) {
          (e[(e.eWebSocketState_Unknown = 0)] = "eWebSocketState_Unknown"),
            (e[(e.eWebSocketState_Disconnected = 1)] =
              "eWebSocketState_Disconnected"),
            (e[(e.eWebSocketState_Connecting = 2)] =
              "eWebSocketState_Connecting"),
            (e[(e.eWebSocketState_Connected = 3)] =
              "eWebSocketState_Connected");
        })(o || (o = {}));
      class M {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_eWebSocketState = o.eWebSocketState_Unknown),
            (this.m_timerWebSocket = void 0),
            (this.m_dateStartTime = new Date()),
            (this.m_sLoadedBindingURI = void 0),
            (this.m_LoadedBinding = void 0),
            (this.m_ModifiedBindingSet = d.observable.map()),
            (this.m_ModifiedOptions = d.observable.map()),
            (this.m_ModifiedAliases = d.observable.map()),
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
            (this.m_ModifiedSimulatedActions = d.observable.map()),
            (this.m_nNextSimulatedActionId = 1),
            (this.m_nBindingSubscriptionChangedCanary = 1),
            (this.m_bIsSaving = !1),
            (this.m_bHasPendingSave = !1),
            (0, d.makeObservable)(this);
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            this.m_eWebSocketState != o.eWebSocketState_Connecting &&
              this.m_eWebSocketState != o.eWebSocketState_Connected &&
              (this.m_wsWebSocketToServer && delete this.m_wsWebSocketToServer,
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                this.OnWebSocketOpen(t), e();
              }),
              this.m_wsWebSocketToServer.addEventListener("message", (e) => {
                this.OnWebSocketMessage(e);
              }),
              this.m_wsWebSocketToServer.addEventListener("close", (e) => {
                this.OnWebSocketClose(e);
              }),
              (this.m_eWebSocketState = o.eWebSocketState_Connecting)),
              this.m_timerWebSocket ||
                (this.m_timerWebSocket = window.setTimeout(
                  this.OpenWebSocketToHost,
                  1e3,
                ));
          });
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            yield this.OpenWebSocketToHost(), yield this.RefreshInputState();
          });
        }
        CountDevicesWithControllerType(e) {
          let t = 0;
          return (
            h.W.ConnectedDevices.forEach((i) => {
              i.controller_type == e && t++;
            }),
            t
          );
        }
        ComputeControllerTypeScore(e) {
          let t = this.CountDevicesWithControllerType(e.controller_type),
            i =
              ((null === a.Ay$ || void 0 === a.Ay$ ? void 0 : a.Ay$.HasHMD())
                ? null === a.Ay$ || void 0 === a.Ay$
                  ? void 0
                  : a.Ay$.VRProperties.GetStringProperty(
                      "/user/head",
                      a.fD8.Prop_ExpectedControllerType_String,
                    )
                : void 0) == e.controller_type
                ? 2
                : 1;
          return 1e3 * (999 - e.priority) + 10 * t + i;
        }
        GetBestControllerType() {
          let e,
            t = 0;
          return (
            h.W.ControllerTypes.forEach((i) => {
              let o = this.ComputeControllerTypeScore(i);
              o > t && ((e = i), (t = o));
            }),
            e
          );
        }
        RefreshInputState() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            let e = h.W.KnownControllerTypes.size;
            return h.W.GetInputState().then(() => {
              this.m_SelectedApp &&
                e != h.W.KnownControllerTypes.size &&
                this.ReloadCurrentApp();
              let t = !1;
              const i = this.GetBestControllerType();
              let o = h.W.FindDeviceClassForControllerType(
                this.m_sSelectedControllerType,
              );
              if (
                null != i &&
                this.m_sSelectedControllerType != i.controller_type &&
                !this.m_bControllerTypeSelectedByUser
              ) {
                let e = h.W.FindDeviceClassForControllerType(i.controller_type);
                p.n.IsSafeToResetControllerType(o, e) &&
                  ((this.m_sSelectedControllerType = i.controller_type),
                  (t = !0));
              }
              return t ? this.ReloadControllerConfiguration() : null;
            });
          });
        }
        get SteamVRUnavailable() {
          return this.m_eWebSocketState == o.eWebSocketState_Connecting ||
            this.m_eWebSocketState == o.eWebSocketState_Unknown
            ? Date.now() - this.m_dateStartTime.getTime() > 1e4
            : this.m_eWebSocketState != o.eWebSocketState_Connected;
        }
        get ActionSets() {
          if (
            null == this.m_SelectedAppActions ||
            null == this.m_SelectedAppActions.action_sets
          )
            return [];
          let e = [];
          return (
            this.m_SelectedAppActions.action_sets.forEach((t) => {
              if ("hidden" != t.usage) {
                let i = !0;
                t.required_options &&
                  t.required_options.forEach((e) => {
                    this.GetOptionValue(e) || (i = !1);
                  });
                let o = !1;
                t.forbidden_options &&
                  t.forbidden_options.forEach((e) => {
                    this.GetOptionValue(e) && (o = !0);
                  }),
                  i && !o && e.push(t);
              }
            }),
            e
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
              localized_name: (0, c.we)(
                "#SecondaryController_ReturnWithLeftHand",
              ),
              type: "bool",
              default: !1,
            },
            {
              name: "returnBindingsWithRightHand",
              localized_name: (0, c.we)(
                "#SecondaryController_ReturnWithRightHand",
              ),
              type: "bool",
              default: !1,
            },
            {
              name: "returnBindingsWithHead",
              localized_name: (0, c.we)("#SecondaryController_ReturnWithHead"),
              type: "bool",
              default: !1,
            },
          ];
        }
        GetOptionDefault(e) {
          let t = !1;
          return (
            this.ManifestOptions.forEach((i) => {
              i.name == e && (t = i.default);
            }),
            t
          );
        }
        GetOptionValue(e) {
          return this.m_ModifiedOptions.has(e)
            ? this.m_ModifiedOptions.get(e)
            : void 0;
        }
        HasOptionValue(e) {
          return this.m_ModifiedOptions.has(e);
        }
        SetOptionValue(e, t) {
          null == t
            ? this.m_ModifiedOptions.delete(e)
            : this.m_ModifiedOptions.set(e, t),
            this.NotifyWatchersOfChange();
        }
        GetAliasInfo(e) {
          return this.m_ModifiedAliases.has(e)
            ? this.m_ModifiedAliases.get(e)
            : null;
        }
        SetAliasName(e, t) {
          if (this.m_ModifiedAliases.has(e)) {
            let i = this.m_ModifiedAliases.get(e);
            (i.alias_name = t),
              this.m_ModifiedAliases.set(e, i),
              this.NotifyWatchersOfChange();
          } else {
            let i = { alias_name: t, hidden: !1 };
            this.m_ModifiedAliases.set(e, i), this.NotifyWatchersOfChange();
          }
        }
        SetAliasHidden(e, t) {
          if (this.m_ModifiedAliases.has(e)) {
            let i = this.m_ModifiedAliases.get(e);
            (i.hidden = t),
              this.m_ModifiedAliases.set(e, i),
              this.NotifyWatchersOfChange();
          } else {
            let i = { alias_name: "", hidden: t };
            this.m_ModifiedAliases.set(e, i), this.NotifyWatchersOfChange();
          }
        }
        ComputeSimulatedActionPathFromId(e) {
          return "/simactions/" + e;
        }
        GetSimulatedActionByPath(e) {
          return this.m_ModifiedSimulatedActions.has(e)
            ? this.m_ModifiedSimulatedActions.get(e)
            : void 0;
        }
        SetSimulatedActionByPath(e, t) {
          this.m_ModifiedSimulatedActions.set(e, t),
            this.NotifyWatchersOfChange();
        }
        AddSimulatedAction(e) {
          let t = {
              name: "",
              type: e,
              id: this.m_nNextSimulatedActionId++,
              output: "",
            },
            i = this.ComputeSimulatedActionPathFromId(t.id);
          this.m_ModifiedSimulatedActions.set(i, t),
            this.NotifyWatchersOfChange();
        }
        DeleteSimulatedActionByPath(e) {
          this.m_ModifiedSimulatedActions.delete(e),
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
            u.s.IsAppAllowedPrivateInputs(this.m_SelectedApp.key) ||
            h.W.ShouldSendSystemButtonToAllApps
          );
        }
        get SelectedControllerTypeInfo() {
          if (h.W.IsValid && null != this.m_sSelectedControllerType)
            return h.W.GetControllerTypeInfo(this.m_sSelectedControllerType);
        }
        DeviceForControllerType(e, t) {
          let i = h.W.GetControllerTypeInfo(e);
          if (!i) return;
          let o = !1,
            n = h.W.ConnectedDevices.find((n) => {
              if (n.controller_type == e) {
                if (((o = !0), !t)) return !0;
                if ("controller_handed" != i.input_bindingui_mode) return !0;
                let e = 1 == t ? "/left" : "/right";
                if (n.root_path && n.root_path.indexOf(e) >= 0) return !0;
              }
              return !1;
            });
          return (
            n ||
            (o
              ? h.W.ConnectedDevices.find((t) => t.controller_type == e)
              : void 0)
          );
        }
        get CurrentBindingSaveType() {
          if (null != this.m_LoadedBinding)
            return "developer" == this.m_LoadedBinding.save_type &&
              P.SelectedBindingIsLegacy
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
              (e) => e.name == this.m_sSelectedActionSet,
            );
        }
        get SelectedActionSetActions() {
          return this.GetActionSetActions(this.m_sSelectedActionSet);
        }
        GetSelectedAppDefaultBinding(e) {
          if (null != this.m_SelectedAppActions)
            return this.m_SelectedAppActions.default_bindings &&
              this.m_SelectedAppActions.default_bindings.hasOwnProperty(e)
              ? this.m_SelectedAppActions.default_bindings[e]
              : void 0;
        }
        GetActionSetActions(e) {
          if (null == this.m_SelectedAppActions || null == e) return [];
          let t = this.m_SelectedAppActions.action_sets.find(
            (t) => t.name == e,
          );
          return t ? t.actions : [];
        }
        GetActionByName(e) {
          if (
            null == this.m_SelectedApp ||
            !this.m_SelectedAppActions.action_sets
          )
            return;
          let t,
            i = e.toLowerCase();
          return (
            this.m_SelectedAppActions.action_sets.forEach((e) => {
              if (!e.actions) return;
              let o = e.actions.find((e) => e.name.toLowerCase() == i);
              o && (t = o);
            }),
            t
          );
        }
        GetActionSetLocalizedNameByName(e) {
          for (const t of this.m_SelectedAppActions.action_sets)
            if (t.name == e && t.localized_name) return t.localized_name;
          return e;
        }
        get UnboundActions() {
          this.m_bIsMissingRequiredActions = !1;
          for (let e of this.ActionSets) {
            let t = [],
              i = [];
            if (!e.actions) break;
            for (let o of e.actions)
              if (
                "optional" != o.requirement &&
                !this.IsActionBound(e, o.name)
              ) {
                let e = this.GetAliasInfo(o.name);
                if (e) {
                  if (e.hidden) continue;
                  e.alias_name &&
                    ((o = Object.assign({}, o)),
                    (o.localized_name = e.alias_name));
                }
                "mandatory" == o.requirement ? t.push(o) : i.push(o);
              }
            if (
              (t.length > 0 && (this.m_bIsMissingRequiredActions = !0),
              this.m_mapUnoundActions.has(e.name))
            ) {
              let o = this.m_mapUnoundActions.get(e.name);
              (o.vecRequired = t), (o.vecSuggested = i);
            } else
              this.m_mapUnoundActions.set(e.name, {
                vecRequired: t,
                vecSuggested: i,
              });
          }
          let e = this.SelectedControllerTypeInfo;
          return (
            e &&
              "TrackedDeviceClass_HMD" == e.device_class &&
              (this.m_bIsMissingRequiredActions = !1),
            this.IsSecondaryController &&
              (this.m_bIsMissingRequiredActions = !1),
            this.m_mapUnoundActions
          );
        }
        get UnboundRequiredActionStrings() {
          this.UnboundActions;
          let e = [];
          for (let t of this.ActionSets) {
            const i = t.localized_name ? t.localized_name : t.name;
            let o = this.m_mapUnoundActions.get(t.name);
            o &&
              o.vecRequired.length > 0 &&
              o.vecRequired.forEach((t) => {
                const o = t.localized_name ? t.localized_name : t.name;
                e.push(`${i}: ${o}`);
              });
          }
          return e;
        }
        get HasUnboundActions() {
          return this.UnboundActions, this.m_bIsMissingRequiredActions;
        }
        IsActionBound(e, t) {
          t = t.toLowerCase();
          let i = this.GetActionSetSources(e.name);
          if (i)
            for (let e of i) {
              let i = !1;
              if (
                (e.inputs.forEach((e) => {
                  e.output.toLowerCase() == t && (i = !0);
                }),
                i)
              )
                return !0;
            }
          let o = this.GetActionSetChords(e.name);
          if (o)
            for (let e of o)
              if (e.output && e.output.toLowerCase() == t) return !0;
          let n = this.GetActionSetPoses(e.name);
          if (n)
            for (let e of n)
              if (e.output && e.output.toLowerCase() == t) return !0;
          let s = this.GetActionSetHaptics(e.name);
          if (s)
            for (let e of s)
              if (e.output && e.output.toLowerCase() == t) return !0;
          let r = this.GetActionSetSkeleton(e.name);
          if (r)
            for (let e of r)
              if (e.output && e.output.toLowerCase() == t) return !0;
          return !1;
        }
        GetActionSetPoses(e) {
          return this.m_ModifiedBindingSet.has(e)
            ? this.m_ModifiedBindingSet.get(e).poses
            : [];
        }
        get SelectedActionSetPoses() {
          return this.GetActionSetPoses(this.m_sSelectedActionSet);
        }
        GetActionSetHaptics(e) {
          return this.m_ModifiedBindingSet.has(e)
            ? this.m_ModifiedBindingSet.get(e).haptics
            : [];
        }
        get SelectedActionSetHaptics() {
          return this.GetActionSetHaptics(this.m_sSelectedActionSet);
        }
        GetActionSetSkeleton(e) {
          return this.m_ModifiedBindingSet.has(e)
            ? this.m_ModifiedBindingSet.get(e).skeleton
            : [];
        }
        get SelectedActionSetSkeletons() {
          return this.GetActionSetSkeleton(this.m_sSelectedActionSet);
        }
        GetActionSetChords(e) {
          return this.m_ModifiedBindingSet.has(e)
            ? this.m_ModifiedBindingSet.get(e).chords
            : [];
        }
        get SelectedActionSetChords() {
          return this.GetActionSetChords(this.m_sSelectedActionSet);
        }
        get SelectedActionSetChordCount() {
          let e = this.SelectedActionSetChords;
          return e ? e.length : 0;
        }
        GetActionSetSources(e) {
          if (null == this.m_ModifiedBindingSet || null == e) return;
          let t = this.m_ModifiedBindingSet;
          return t.has(e) ? t.get(e).sources : void 0;
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
            this.SelectedActionSetActions.filter((e) => "pose" == e.type)
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
          for (let e of this.SelectedActionSetPoses)
            if (e.output && "none" != e.output) return !0;
          return !1;
        }
        get BSelectedActionSetHasHaptics() {
          return (
            null != this.m_LoadedBinding &&
            null != this.m_sSelectedActionSet &&
            null != this.SelectedActionSetActions &&
            this.SelectedActionSetActions.filter((e) => "vibration" == e.type)
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
          for (let e of this.SelectedActionSetHaptics)
            if (e.output && "none" != e.output) return !0;
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
            this.SelectedActionSetActions.filter((e) => "skeleton" == e.type)
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
          for (let e of this.SelectedActionSetSkeletons)
            if (e.output && "none" != e.output) return !0;
          return !1;
        }
        ClearSelectedApp() {
          this.m_SelectedApp = void 0;
        }
        SetSelectedApp(e, t) {
          if (
            (console.log(`Setting selected app to app key: ${e}.`),
            null == this.m_SelectedApp || e != this.m_SelectedApp.key)
          ) {
            (this.m_rKnownFailedBindingUris = []),
              this.m_ControllerWatchers.clear();
            let i = u.s.GetApp(e);
            i &&
              ((this.m_SelectedApp = i),
              console.log(`Successfully set selected app to app key: ${e}.`),
              t || this.ReloadCurrentApp());
          }
        }
        ReloadCurrentApp() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (this.m_sLoadedBindingURI = void 0),
              (this.m_sSelectedActionSet = void 0),
              yield this.LoadActionManifest();
            let e = this.ActionSets;
            e.length > 0 &&
              (null == this.m_sSelectedActionSet ||
                !this.m_SelectedAppActions.action_sets.hasOwnProperty(
                  this.m_sSelectedActionSet,
                )) &&
              (this.m_sSelectedActionSet = e[0].name),
              yield this.ReloadControllerConfiguration();
          });
        }
        SetSelectedController(e, t) {
          if (e != this.m_sSelectedControllerType) {
            let i = h.W.GetControllerTypeInfo(e);
            i &&
              (this.m_ControllerWatchers.clear(),
              (this.m_sSelectedControllerType = i.controller_type),
              (this.m_bControllerTypeSelectedByUser = !0),
              (this.m_sLoadedBindingURI = void 0),
              t || this.ReloadControllerConfiguration());
          }
        }
        SetSelectedActionSet(e) {
          e != this.m_sSelectedActionSet && (this.m_sSelectedActionSet = e);
        }
        LocalizeStringForSelectedControllerType(e) {
          let t = this.SelectedControllerTypeInfo;
          return t && t.resource_root
            ? h.W.LocalizeDriverString(t.resource_root, e)
            : e;
        }
        LocalizePathNameForSelectedControllerType(e) {
          let t;
          return (
            [
              "/user/hand/secondary",
              "/user/hand/primary",
              "/user/hand/left",
              "/user/hand/right",
              "/user/head",
            ].forEach((i) => {
              0 != e.indexOf(i) || (t = i);
            }),
            t
              ? (0, c.we)("#" + t) +
                " " +
                this.LocalizeStringForSelectedControllerType(e.replace(t, ""))
              : e
          );
        }
        get SelectedControllerTypeLocalizedName() {
          let e = this.SelectedControllerTypeInfo;
          return e
            ? e.resource_root
              ? h.W.LocalizeDriverString(e.resource_root, e.controller_type)
              : e.controller_type
            : "";
        }
        RegisterBindingWatcher(e) {
          null == this.m_vecBindingSetWatchers.find((t) => t == e) &&
            this.m_vecBindingSetWatchers.push(e);
        }
        UnregisterBindingWatcher(e) {
          let t = this.m_vecBindingSetWatchers.indexOf(e);
          t >= 0 && this.m_vecBindingSetWatchers.splice(t, 1);
        }
        GetActionBinding(e, t) {
          if (null == this.m_ModifiedBindingSet) return;
          let i = this.m_ModifiedBindingSet;
          if (i.has(t)) {
            let o = i.get(t).sources;
            if (o) {
              let t = o.filter((t) => t.path == e);
              if (t) return t;
            }
          }
        }
        GetInputModesForSourceType(e, t) {
          let i = [];
          switch (e) {
            case "button":
              i = ["button", "-", "toggle_button", "scalar_constant"];
              break;
            case "trackpad":
              i = [
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
              i = [
                "trigger",
                "button",
                "-",
                "toggle_button",
                "scalar_constant",
              ];
              break;
            case "joystick":
              i = [
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
              i = ["grab"];
              break;
            default:
              i = [];
          }
          return (
            t && (i.push("force_sensor"), "trigger" == e && i.push("grab")), i
          );
        }
        GetBooleanInputOptionsForMode(e) {
          switch (e) {
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
        GetActionBindingsOfType(e, t) {
          if (
            null == this.m_SelectedApp ||
            null == this.m_sSelectedActionSet ||
            null == this.m_SelectedAppActions.action_sets
          )
            return [];
          let i = this.SelectedActionSetDetails;
          if (!i) return [];
          if (null == i.actions) return [];
          let o = [];
          return (
            i.actions.forEach((i) => {
              let n = this.m_ModifiedAliases.get(i.name);
              if (i.type == e && (!n || !n.hidden || t))
                if (n && n.alias_name) {
                  let e = Object.assign({}, i);
                  (e.localized_name = n.alias_name), o.push(e);
                } else o.push(i);
            }),
            t ||
              this.m_ModifiedSimulatedActions.forEach((t) => {
                if (this.GetActionTypeFromSimulatedActionType(t.type) == e) {
                  this.ComputeSimulatedActionPathFromId(t.id),
                    t.name ? t.name : ((0, c.we)("UnnamedSimAction"), t.id);
                  o.push(this.CreateActionDefinitionForSimulatedAction(t));
                }
              }),
            o
          );
        }
        GetActionTypeFromSimulatedActionType(e) {
          switch (e) {
            case "fake_trigger":
            case "fake_trackpad_click":
              return "boolean";
            default:
              return "unknown";
          }
        }
        CreateActionDefinitionForSimulatedAction(e) {
          return {
            name: this.ComputeSimulatedActionPathFromId(e.id),
            localized_name: e.name
              ? e.name
              : (0, c.we)("UnnamedSimAction") + e.id,
            type: this.GetActionTypeFromSimulatedActionType(e.type),
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
        GetPoseAction(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).poses;
          if (null == t) return;
          let i = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
          return i.length ? i : void 0;
        }
        GetPoseActionByPath(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).poses;
          if (null == t) return;
          let i = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
          return i.length ? i : void 0;
        }
        GetHapticsAction(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).haptics;
          if (null == t) return;
          let i = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
          return i.length ? i : void 0;
        }
        GetHapticsActionByPath(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).haptics;
          if (null == t) return;
          let i = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
          return i.length ? i : void 0;
        }
        GetSkeletonAction(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).skeleton;
          if (null == t) return;
          let i = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
          return i.length ? i : void 0;
        }
        GetSkeletonActionByPath(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).skeleton;
          if (null == t) return;
          let i = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
          return i.length ? i : void 0;
        }
        NotifyWatchersOfChange() {
          console.log("Binding file changed"),
            this.m_vecBindingSetWatchers.forEach((e) => {
              e();
            }),
            this.AutosaveBinding();
        }
        SetActionForInputModeType(e, t, i, o, n) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForInputModeType: Invalid action set specified",
            );
          class s {
            constructor(e, t) {
              (this.mode = e), (this.sourceIdx = t);
            }
          }
          let r = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((t, i) => {
                t.path == e && r.push(new s(t, i));
              }),
            r.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e,
            );
          let l = r[t].sourceIdx;
          if (l >= 0) {
            let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[l];
            if (e.inputs && e.inputs.has(i) && e.inputs.get(i).output == o)
              return void console.log(
                "Trying to set new action to old action for type",
                i,
                " action is ",
                o,
              );
            if (n.length > 0 && !n.find((t) => t == e.mode))
              return void console.log(
                "Trying to set invalid input type of ",
                i,
                " for current mode ",
                e.mode,
              );
            e.inputs || (e.inputs = d.observable.map()),
              "none" == o
                ? e.inputs.has(i) && e.inputs.delete(i)
                : e.inputs.has(i)
                  ? (e.inputs.get(i).output = o)
                  : e.inputs.set(i, { output: o }),
              this.NotifyWatchersOfChange();
          }
        }
        SetParameterForInputModeType(e, t, i, o, n) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetParameterForInputModeType: Invalid action set specified",
            );
          let s = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((t, i) => {
                t.path == e && s.push(i);
              }),
            s.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e,
            );
          let r = s[t];
          if (r >= 0) {
            let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[r];
            if (!e.inputs)
              return void console.log(
                "SetParameterForInputModeType: Trying to set parameter for missing input type of ",
                i,
                " for current mode ",
                e.mode,
              );
            e.parameters || (e.parameters = d.observable.map()),
              e.parameters.get(o) != n &&
                (null == n ? e.parameters.delete(o) : e.parameters.set(o, n),
                this.NotifyWatchersOfChange());
          }
        }
        SetParameterForPose(e, t, i) {
          e
            ? ((null == e ? void 0 : e.parameters) ||
                (e.parameters = d.observable.map()),
              e.parameters.get(t) != i &&
                (null == i || (Array.isArray(i) && i.every((e) => 0 === e))
                  ? e.parameters.delete(t)
                  : e.parameters.set(t, i),
                this.NotifyWatchersOfChange()))
            : console.error(
                "SetParameterForPose: Trying to set parameter for unknown pose.",
              );
        }
        GetParameterForPose(e, t) {
          return (null == e ? void 0 : e.parameters) &&
            (null == e ? void 0 : e.parameters.has(t))
            ? e.parameters.get(t)
            : null;
        }
        SetParameterForSkeleton(e, t, i) {
          e
            ? ((null == e ? void 0 : e.parameters) ||
                (e.parameters = d.observable.map()),
              e.parameters.get(t) != i &&
                (null == i || (Array.isArray(i) && i.every((e) => 0 === e))
                  ? e.parameters.delete(t)
                  : e.parameters.set(t, i),
                this.NotifyWatchersOfChange()))
            : console.error(
                "SetParameterForSkeleton: Trying to set parameter for unknown skeleton.",
              );
        }
        GetParameterForSkeleton(e, t) {
          return (null == e ? void 0 : e.parameters) &&
            (null == e ? void 0 : e.parameters.has(t))
            ? e.parameters.get(t)
            : null;
        }
        GetParameterForInputModeType(e, t, i, o) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return (
              console.error(
                "SetParameterForInputModeType: Invalid action set specified",
              ),
              null
            );
          let n = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((t, i) => {
                t.path == e && n.push(i);
              }),
            n.length <= t)
          )
            return (
              console.warn("Invalid mode index (", t, ") for path ", e), null
            );
          let s = n[t];
          if (s >= 0) {
            let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[s];
            return e.inputs
              ? e.parameters && e.parameters.has(o)
                ? e.parameters.get(o)
                : null
              : (console.log(
                  "GetParameterForInputModeType: Trying to get parameter for missing input type of ",
                  i,
                  " for current mode ",
                  e.mode,
                ),
                null);
          }
          return null;
        }
        AddActionSetIfRequired() {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) {
            let e = new A();
            (e.sources = []),
              this.m_ModifiedBindingSet.set(this.m_sSelectedActionSet, e);
          }
        }
        AddInputModeForSource(e, t) {
          this.AddActionSetIfRequired();
          let i = new S();
          return (
            (i.mode = t),
            (i.path = e),
            (i.inputs = d.observable.map()),
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.push(i),
            this.NotifyWatchersOfChange(),
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.filter((t) => t.path.toLowerCase() == e.toLowerCase())
              .length - 1
          );
        }
        DeleteInputModeForSource(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "AddInputModeForType: Invalid action set specified",
            );
          let i = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((t, o) => {
                t.path.toLowerCase() == e.toLowerCase() && i.push(o);
              }),
            i.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e,
            );
          let o = i[t];
          -1 != o
            ? (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.splice(o, 1),
              this.NotifyWatchersOfChange())
            : console.error(
                "DeleteInputModeForSource: Mode not found for source",
              );
        }
        SetInputModeForInputSource(e, t, i) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForInputModeType: Invalid action set specified",
            );
          let o = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((t, i) => {
                t.path.toLowerCase() == e.toLowerCase() && o.push(i);
              }),
            o.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e,
            );
          let n = o[t];
          if (-1 != n) {
            let t = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[n];
            if (t.path == e) {
              if (t.mode == i)
                return void console.log(
                  "Trying to set new input mode to old mode!",
                );
              let o = JSON.parse((0, g.E)(t)),
                s = new S();
              switch (
                ((s.mode = i), (s.path = e), (s.inputs = d.observable.map()), i)
              ) {
                case "button":
                case "toggle_button":
                  switch (o.mode) {
                    case "complex_button":
                      o.inputs.single &&
                        (s.inputs.set("single", o.inputs.single),
                        s.inputs.set("click", o.inputs.single)),
                        o.inputs.long && s.inputs.set("long", o.inputs.long),
                        o.inputs.press && s.inputs.set("press", o.inputs.press),
                        o.inputs.double &&
                          s.inputs.set("double", o.inputs.double),
                        o.inputs.touch && s.inputs.set("touch", o.inputs.touch);
                      break;
                    case "button":
                    case "toggle_button":
                    case "trackpad":
                    case "trigger":
                      o.inputs.click && s.inputs.set("click", o.inputs.click),
                        o.inputs.touch && s.inputs.set("touch", o.inputs.touch);
                  }
                  break;
                case "complex_button":
                  switch (o.mode) {
                    case "toggle_button":
                    case "button":
                    case "trackpad":
                    case "trigger":
                      o.inputs.click && s.inputs.set("single", o.inputs.click);
                  }
                  break;
                case "trackpad":
                  switch (o.mode) {
                    case "complex_button":
                      o.inputs.single && s.inputs.set("click", o.inputs.single);
                      break;
                    case "toggle_button":
                    case "button":
                    case "trigger":
                      o.inputs.click && s.inputs.set("click", o.inputs.click),
                        o.inputs.touch && s.inputs.set("touch", o.inputs.touch);
                  }
                  break;
                case "trigger":
                  switch (o.mode) {
                    case "complex_button":
                      o.inputs.single && s.inputs.set("click", o.inputs.single);
                      break;
                    case "toggle_button":
                    case "trackpad":
                    case "button":
                      o.inputs.click && s.inputs.set("click", o.inputs.click),
                        o.inputs.touch && s.inputs.set("touch", o.inputs.touch);
                  }
              }
              return (
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).sources[n] = s),
                void this.NotifyWatchersOfChange()
              );
            }
          } else
            console.error(
              "SetActionForInputModeType: trying to change a mode for a source that we don't have already",
            );
        }
        ClearModesForInputPath(e) {
          this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)
            ? (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).sources = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.filter((t) => t.path.toLowerCase() != e.toLowerCase()))
            : console.error(
                "ClearModesForInputPath: Invalid action set specified",
              );
        }
        SetInputPathForPose(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForPose: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
              []);
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .poses.findIndex(
              (t) =>
                t.path.toLowerCase() == e.path.toLowerCase() &&
                t.output.toLowerCase() == e.output.toLowerCase(),
            );
          -1 == i &&
            ((i =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .poses.push(new m()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
              i
            ].output = e.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[i]
              .path != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).poses[i].path = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new pose action path to old action path!",
                );
        }
        SetPoseForInputPath(e, t) {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
                []);
          let i = this.GetPoseForInputPath(e);
          if (!i) {
            const t =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .poses.push(new m()) - 1;
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
              t
            ].path = e),
              (i = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .poses[t]);
          }
          i.output != t
            ? ((i.output = t), this.NotifyWatchersOfChange())
            : console.log(
                "Trying to set new pose action path to old action path!",
              );
        }
        GetPoseForInputPath(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForPose: Invalid action set specified",
            );
          let t = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .poses.findIndex((t) => t.path.toLowerCase() == e.toLowerCase());
          return -1 != t
            ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[t]
            : void 0;
        }
        GetSkeletonForInputPath(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForPose: Invalid action set specified",
            );
          let t = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .skeleton.findIndex((t) => t.path.toLowerCase() == e.toLowerCase());
          return -1 != t
            ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
                t
              ]
            : void 0;
        }
        GetFirstInputSourceOfType(e) {
          let t = this.SelectedControllerTypeInfo;
          if (null != t)
            for (let i of Object.keys(t.input_source)) {
              if (t.input_source[i].type == e) return i;
            }
        }
        AddDefaultPose(e, t) {
          if (
            (this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
                []),
            null == this.SelectedControllerTypeInfo)
          )
            return;
          let i = this.GetFirstInputSourceOfType("pose");
          if (!i) return;
          let o = new (class {})();
          (o.output = e), (o.path = i), this.SetInputPathForPose(o, i);
        }
        SetInputPathForHaptics(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputPathForHaptics: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics =
              []);
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .haptics.findIndex(
              (t) =>
                t.path.toLowerCase() == e.path.toLowerCase() &&
                t.output.toLowerCase() == e.output.toLowerCase(),
            );
          -1 == i &&
            ((i =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .haptics.push(new _()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
              i
            ].output = e.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[i]
              .path != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).haptics[i].path = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new haptics action path to old action path!",
                );
        }
        SetHapticsForInputPath(e, t) {
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
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .haptics.findIndex((t) => t.path.toLowerCase() == e.toLowerCase());
          -1 == i &&
            ((i =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .haptics.push(new m()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
              i
            ].path = e)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[i]
              .output != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).haptics[i].output = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new haptic action path to old action path!",
                );
        }
        AddDefaultHaptics(e, t) {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).haptics = []);
          let i = this.GetFirstInputSourceOfType("haptic");
          if (!i) return;
          let o = t + i;
          let n = new (class {})();
          (n.output = e), (n.path = o), this.SetInputPathForHaptics(n, o);
        }
        SetInputPathForSkeleton(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputPathForSkeleton: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton =
              []);
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .skeleton.findIndex(
              (t) =>
                t.path.toLowerCase() == e.path.toLowerCase() &&
                t.output.toLowerCase() == e.output.toLowerCase(),
            );
          -1 == i &&
            ((i =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .skeleton.push(new f()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
              i
            ].output = e.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[i]
              .path != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).skeleton[i].path = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new skeleton action path to old action path!",
                );
        }
        SetSkeletonForInputPath(e, t) {
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
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .skeleton.findIndex((t) => t.path.toLowerCase() == e.toLowerCase());
          -1 == i &&
            ((i =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .skeleton.push(new m()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
              i
            ].path = e)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[i]
              .output != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).skeleton[i].output = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new skeleton action path to old action path!",
                );
        }
        AddDefaultSkeleton(e, t) {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).skeleton = []);
          let i = this.GetFirstInputSourceOfType("skeleton");
          if (!i) return;
          let o = t + i;
          let n = new (class {})();
          (n.output = e), (n.path = o), this.SetInputPathForSkeleton(n, o);
        }
        SetActionForChord(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForChord: Invalid action set specified",
            );
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          -1 != i
            ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[i]
                .output != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[i].output = t),
                this.NotifyWatchersOfChange())
              : console.log("Trying to set new chord action to old action!")
            : console.error("SetActionForChord: Invalid chord  specified ", e);
        }
        DeleteChord(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "DeleteChordForSource: Invalid action set specified",
            );
          let t = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          -1 != t
            ? (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords.splice(t, 1),
              this.NotifyWatchersOfChange())
            : console.error(
                "DeleteChordForSource: Invalid chord  specified ",
                e,
              );
        }
        AddChord() {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords =
                []);
          this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.push(new y());
          this.NotifyWatchersOfChange();
        }
        DeleteSourceFromChord(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "DeleteSourceFromChord: Invalid action set specified",
            );
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          if (-1 != i) {
            let e = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords[i].inputs.findIndex((e) => e[0] == t);
            -1 != e &&
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[i].inputs.splice(e, 1),
              this.NotifyWatchersOfChange());
          } else
            console.error(
              "DeleteSourceFromChord: Invalid chord  specified ",
              e,
            );
        }
        SetInputTypeForChord(e, t, i) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputsForChord: Invalid action set specified",
            );
          let o = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          if (-1 != o) {
            let e = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords[o].inputs.findIndex((e) => e[0] == t);
            if (-1 == e)
              return void console.log(
                "Invalid bounds for new input chord, trying to add type without source",
              );
            if (
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[o]
                .inputs[e][1] == i
            )
              return void console.log(
                "Trying to set new chord inputs to old inputs!",
              );
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
              o
            ].inputs[e][1] = i),
              this.NotifyWatchersOfChange();
          } else
            console.error("SetInputsForChord: Invalid chord  specified ", e);
        }
        SetInputSourceForChord(e, t, i) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputsForChord: Invalid action set specified",
            );
          let o = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          if (-1 != o) {
            let e = this.GetActionBinding(t, this.SelectedActionSet);
            if (!e)
              return void console.log("Failed to find action binding for path");
            let n = "click";
            if (
              (e.length &&
                (n = this.GetBooleanInputOptionsForMode(e[0].mode)[0]),
              null == i)
            )
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[o]
                .inputs ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[o].inputs = new Array()),
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .chords[o].inputs.push([t, n]);
            else {
              let e = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[o].inputs.findIndex((e) => e[0] == i);
              if (-1 == e)
                return void console.log(
                  "Trying to set replace chord input path when we didn't have that path!",
                );
              if (
                this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                  o
                ].inputs[e][0] == t
              )
                return void console.log(
                  "Trying to set new chord inputs to old inputs!",
                );
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                o
              ].inputs[e][0] = t),
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[o].inputs[e][1] = n);
            }
            this.NotifyWatchersOfChange();
          } else
            console.error("SetInputsForChord: Invalid chord  specified ", e);
        }
        LoadActionManifest() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise((e, t) => {
              v(this.m_SelectedApp.key).then((t) => {
                null == t.error
                  ? ((0, d.runInAction)(() => {
                      this.m_SelectedAppActions = t;
                    }),
                    null == this.m_sLoadedBindingURI &&
                      t.current_binding_url.hasOwnProperty(
                        this.m_sSelectedControllerType,
                      ) &&
                      (this.m_sLoadedBindingURI =
                        t.current_binding_url[this.m_sSelectedControllerType]))
                  : ((0, d.runInAction)(() => {
                      (this.m_SelectedAppActions = void 0),
                        (this.m_sLoadedBindingURI = void 0);
                    }),
                    p.n.SetBindingListError(
                      (0, c.we)("#ActionManifestError_UnknownError"),
                      !1,
                    )),
                  e();
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
          let e = h.W.FindRootPathForControllerType(
            this.m_sSelectedControllerType,
          );
          return (
            "/user/treadmill" == e ||
            "/user/gamepad" == e ||
            "/user/stylus" == e
          );
        }
        ReloadControllerConfiguration() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (
              !(
                this.m_SelectedAppActions &&
                this.m_sLoadedBindingURI &&
                this.SelectedApp &&
                this.SelectedControllerTypeInfo
              )
            )
              return;
            let e = yield B(
              this.m_SelectedApp.key,
              this.SelectedControllerTypeInfo.controller_type,
              this.m_sLoadedBindingURI,
            );
            this.OnBindingConfigLoaded(e);
          });
        }
        UpdateTrackerBindings() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            let e = yield this.GetTrackerBindings();
            this.m_TrackerBindingSetup = e;
          });
        }
        get TrackerBindings() {
          return (
            null == this.m_TrackerBindingSetup && this.UpdateTrackerBindings(),
            this.m_TrackerBindingSetup
          );
        }
        GetTrackerBindings() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise(function (e, t) {
              l()
                .get("/input/gettrackerbindings.json")
                .then((t) => {
                  e(t.data);
                })
                .catch((e) => {
                  t(e);
                });
            });
          });
        }
        GetTrackerBinding(e) {
          for (let t of this.m_TrackerBindingSetup.trackers)
            if (t.device_path_string == e) return t;
          return null;
        }
        SetTrackerBinding(e, t, i) {
          let o = { device_path: e, role: t, controller_role: i };
          const n = (0, g.E)(o);
          console.log("Saving tracker binding " + e),
            l()
              .post("/input/settrackerbinding.action", n)
              .then((e) => {
                console.log("SetTrackerBinding response: ", e.data),
                  this.UpdateTrackerBindings();
              })
              .catch((e) => {});
        }
        PulseHaptics(e) {
          let t = { path_handle: e };
          const i = (0, g.E)(t);
          l()
            .post("/input/pulsehaptics.action", i)
            .then((e) => {
              console.log("PulseHaptics response: ", e.data);
            })
            .catch((e) => {});
        }
        get KnownControllerTypes() {
          let e = [];
          return (
            h.W.KnownControllerTypes.forEach((t) => {
              e.push(t);
            }),
            e
          );
        }
        PreserveCurrentBindingForUpgrade() {
          let e = p.n.CurrentBinding;
          return e && "autosave" == e.type
            ? this.SaveCurrentBinding(
                (0, c.we)("#PreservedAutosaveName"),
                "",
                "personal",
              )
            : Promise.resolve(null);
        }
        GetDefaultBindingNameForSaveType(e) {
          let t = P.SelectedControllerTypeInfo,
            i = h.W.LocalizeControllerString(t, t ? t.controller_type : "");
          switch (e) {
            default:
            case "autosave":
              return (0, c.we)(
                "#BindingUI_SaveDefaultName",
                this.m_SelectedApp.name,
                i,
              );
            case "personal":
              return (0, c.we)(
                "#BindingUI_SaveDefaultName_Personal",
                this.m_SelectedApp.name,
                i,
              );
            case "public":
              return (0, c.we)(
                "#BindingUI_SaveDefaultName_Public",
                h.W.CurrentUserPersonaName,
              );
            case "replace_default":
              return P.ConfigName;
          }
        }
        AutosaveBinding() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (this.m_bIsSaving)
              return (
                console.log("Currently saving, adding a pending save."),
                void (this.m_bHasPendingSave = !0)
              );
            this.m_sName ||
              (this.m_sName =
                this.GetDefaultBindingNameForSaveType("autosave"));
            try {
              const e = yield this.SaveCurrentBinding(
                this.m_sName,
                this.m_sDescription,
                "autosave",
              );
              P.SetBindingURL(e.uri);
            } finally {
              (this.m_bIsSaving = !1),
                this.m_bHasPendingSave &&
                  ((this.m_bHasPendingSave = !1), this.AutosaveBinding());
            }
          });
        }
        SaveCurrentBinding(e, t, i) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            this.HasUnboundActions,
              (this.m_sName = e),
              (this.m_sDescription = t);
            let o = this.m_sInteractionProfile.trim(),
              n = {
                app_key: this.SelectedApp,
                controller_type:
                  this.SelectedControllerTypeInfo.controller_type,
                save_type: i,
              };
            n.binding = {
              name: e,
              description: t,
              action_manifest_version: this.m_SelectedAppActions.version,
              interaction_profile: o,
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
            const s = (0, g.E)(n);
            return (
              console.log(
                "Saving binding " + e + " for app '" + this.SelectedApp + "'.",
              ),
              new Promise((e, t) => {
                let o = new w(i, e, t);
                this.m_OutstandingSaveBindingCalls.push(o),
                  l()
                    .post("/input/savebinding.action", s)
                    .then((e) => {
                      e.data.error
                        ? (console.log(
                            "SaveCurrentBinding failed:",
                            e.data.error,
                          ),
                          t(e.data.error))
                        : console.log("SaveCurrentBinding Successful");
                    })
                    .catch((e) => {
                      t(e);
                    });
              })
            );
          });
        }
        PublishBindingToWorkshop(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            let t = { app_key: this.SelectedApp, description: e };
            t.binding = {
              bindings: this.m_ModifiedBindingSet,
              controller_type: this.SelectedControllerTypeInfo.controller_type,
            };
            const i = (0, g.E)(t);
            yield new Promise(function (e, t) {
              l()
                .post("/input/submitworkshopbinding.action", i)
                .then((t) => {
                  console.log("PublishBindingToWorkshop response: ", t), e();
                })
                .catch((e) => {
                  t(e);
                });
            });
          });
        }
        OnWebSocketOpen(e) {
          console.log("Websocket connected"),
            (this.m_eWebSocketState = o.eWebSocketState_Connected),
            this.WebSocketSend("input_open"),
            this.m_timerWebSocket && clearTimeout(this.m_timerWebSocket),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("input_close");
            });
        }
        OnWebSocketClose(e) {
          console.log("Websocket closed ", e),
            (this.m_eWebSocketState = o.eWebSocketState_Disconnected),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(e) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(e);
        }
        OnWorkshopUploadComplete(e) {
          if (
            (console.log("OnWorkshopUploadComplete: ", e),
            e.app_key != P.SelectedApp)
          )
            return void console.log(
              `Ignoring binding load for an app we aren't viewing. Pending: ${e.app_key}. Current: ${P.SelectedApp}.`,
            );
          if (this.m_OutstandingSaveBindingCalls.length <= 0)
            return void console.log(
              "Got workshop upload result without pending resolve",
            );
          let t = this.m_OutstandingSaveBindingCalls.shift();
          e.success ? (t.resolve(e), this.LoadActionManifest()) : t.reject(e);
        }
        OnPendingFileSaved(e) {
          let t = e.success ? "Success" : e.error;
          console.log(`OnPendingFileSaved: ${t}. ${e}`),
            e.app_key == P.SelectedApp ||
              console.log(
                `Ignoring pending file saved for an app we aren't viewing. Pending: ${e.app_key}. Current: ${P.SelectedApp}.`,
              );
        }
        get SaveNoticeText() {
          if (this.m_OutstandingSaveBindingCalls.length > 0) {
            let e = !1;
            return (
              this.m_OutstandingSaveBindingCalls.forEach((t) => {
                ("personal" != t.SaveType && "public" != t.SaveType) ||
                  (e = !0);
              }),
              e ? "#SaveNotice_Uploading" : "#SaveNotice_Saving"
            );
          }
        }
        OnBindingConfigLoaded(e) {
          if (
            (console.log(
              "OnBindingConfigLoaded: ",
              e,
              " selected action set:",
              this.m_sSelectedActionSet,
            ),
            e.app_key != P.SelectedApp)
          )
            return void console.log(
              `Ignoring binding load for an app we aren't viewing. Pending: ${e.app_key}. Current: ${P.SelectedApp}.`,
            );
          if (e.uri != this.m_sLoadedBindingURI)
            return void console.log(
              `Ignoring binding load for an config url ${e.uri} we aren't viewing ${this.m_sLoadedBindingURI}`,
            );
          this.m_ControllerWatchers.clear(),
            (this.m_LoadedBinding = e),
            (this.m_ModifiedBindingSet = d.observable.map());
          let t = (0, c.we)("#unknown_application"),
            i = u.s.GetApp(P.SelectedApp);
          if (
            (i && (t = i.name),
            (this.m_sName = ""),
            (this.m_sDescription = ""),
            (this.m_sInteractionProfile = " "),
            e.binding_config &&
              (e.binding_config.hasOwnProperty("name") &&
                (this.m_sName = e.binding_config.name),
              e.binding_config.hasOwnProperty("description") &&
                (this.m_sDescription = e.binding_config.description),
              e.binding_config.hasOwnProperty("interaction_profile") &&
                (this.m_sInteractionProfile =
                  e.binding_config.interaction_profile)),
            "" == this.m_sName)
          ) {
            let e = P.SelectedControllerTypeInfo,
              i = h.W.LocalizeControllerString(e, e ? e.controller_type : "");
            this.m_sName = (0, c.we)("#BindingUI_SaveDefaultName", t, i);
          }
          e.binding_config &&
            e.binding_config.bindings &&
            (Object.keys(e.binding_config.bindings).forEach((t) => {
              var i, o, n;
              let s = new A();
              (s.chords = e.binding_config.bindings[t].chords),
                (s.poses = []),
                null === (i = e.binding_config.bindings[t].poses) ||
                  void 0 === i ||
                  i.forEach((e) => {
                    let t = new m();
                    (t.output = e.output),
                      (t.path = e.path),
                      null != e.parameters &&
                        Object.keys(e.parameters).length > 0 &&
                        ((t.parameters = d.observable.map()),
                        e.hasOwnProperty("parameters") &&
                          Object.keys(e.parameters).forEach((i) => {
                            t.parameters.set(i, e.parameters[i]);
                          })),
                      s.poses.push(t);
                  }),
                (s.haptics = e.binding_config.bindings[t].haptics),
                (s.skeleton = []),
                null === (o = e.binding_config.bindings[t].skeleton) ||
                  void 0 === o ||
                  o.forEach((e) => {
                    let t = new f();
                    (t.output = e.output),
                      (t.path = e.path),
                      null != e.parameters &&
                        Object.keys(e.parameters).length > 0 &&
                        ((t.parameters = d.observable.map()),
                        e.hasOwnProperty("parameters") &&
                          Object.keys(e.parameters).forEach((i) => {
                            t.parameters.set(i, e.parameters[i]);
                          })),
                      s.skeleton.push(t);
                  }),
                (s.sources = []),
                null === (n = e.binding_config.bindings[t].sources) ||
                  void 0 === n ||
                  n.forEach((e) => {
                    let t = new S();
                    (t.mode = e.mode),
                      (t.path = e.path),
                      (t.inputs = d.observable.map()),
                      e.hasOwnProperty("inputs") &&
                        Object.keys(e.inputs).forEach((i) => {
                          t.inputs.set(i, e.inputs[i]);
                        }),
                      null != e.parameters &&
                        Object.keys(e.parameters).length > 0 &&
                        ((t.parameters = d.observable.map()),
                        e.hasOwnProperty("parameters") &&
                          Object.keys(e.parameters).forEach((i) => {
                            t.parameters.set(i, e.parameters[i]);
                          })),
                      s.sources.push(t);
                  }),
                this.m_ModifiedBindingSet.set(t, s);
            }),
            this.m_ModifiedOptions.clear(),
            e.binding_config.options &&
              (Object.keys(e.binding_config.options).forEach((t) => {
                this.m_ModifiedOptions.set(t, e.binding_config.options[t]);
              }),
              this.ManifestOptions.forEach((e) => {
                this.m_ModifiedOptions.has(e.name) ||
                  this.m_ModifiedOptions.set(e.name, e.default);
              })),
            this.m_ModifiedAliases.clear(),
            e.binding_config.alias_info &&
              Object.keys(e.binding_config.alias_info).forEach((t) => {
                this.m_ModifiedAliases.set(t, e.binding_config.alias_info[t]);
              }),
            this.m_ModifiedSimulatedActions.clear(),
            e.binding_config.simulated_actions &&
              e.binding_config.simulated_actions.forEach((e) => {
                let t = this.ComputeSimulatedActionPathFromId(e.id);
                this.m_ModifiedSimulatedActions.set(t, e),
                  e.id >= this.m_nNextSimulatedActionId &&
                    (this.m_nNextSimulatedActionId = e.id + 1);
              })),
            this.m_vecBindingSetWatchers.forEach((e) => {
              e();
            });
        }
        QueryBindingList(e, t) {
          return (
            null != this.m_OutstandingQueryResolve &&
              console.warn(
                "About to start second binding list query when one is already pending",
                this.m_OutstandingQueryResolve,
              ),
            new Promise((i, o) => {
              (this.m_OutstandingQueryResolve = i),
                l()
                  .get(
                    `/input/queryworkshopbindings.json?app_key=${e}&controller_type=${t}`,
                  )
                  .then((e) => {
                    console.log("QueryBindingList: ajax request successful");
                  })
                  .catch((e) => {
                    o(e);
                  });
            })
          );
        }
        DeleteBinding(e) {
          null != this.m_OutstandingDeleteResolve &&
            console.warn(
              "About to start second binding delete when one is already pending",
              this.m_OutstandingDeleteResolve,
            );
          let t = { url: e };
          const i = (0, g.E)(t);
          return new Promise((t, o) => {
            (this.m_OutstandingDeleteResolve = t),
              (this.m_sOutstandingDeleteURL = e),
              l()
                .post("/input/deleteconfig.action", i)
                .then((e) => {
                  console.log("Delete ajax request successful");
                })
                .catch((e) => {
                  o(e);
                });
          });
        }
        OnBindingDeleteComplete(e) {
          null != this.m_OutstandingDeleteResolve
            ? e.url == this.m_sOutstandingDeleteURL &&
              ((this.m_sOutstandingDeleteURL = void 0),
              this.m_OutstandingDeleteResolve(e),
              (this.m_OutstandingDeleteResolve = void 0),
              console.log("OnDeleteComplete: ", e))
            : console.warn(
                "Missing outstanding query resolve for binding delete",
              );
        }
        ShouldShowBindingFailureForControllerType(e) {
          if (null == e || "" == e) return !1;
          let t = h.W.GetControllerTypeInfo(e);
          return !!t && !!t.should_show_binding_errors;
        }
        HasBindingUriFailedToLoad(e) {
          return -1 != this.m_rKnownFailedBindingUris.indexOf(e);
        }
        RememberFailedLoadUri(e) {
          this.m_rKnownFailedBindingUris.push(e);
        }
        OnQueryResults(e) {
          console.log("OnQueryResults: ", e),
            null != this.m_OutstandingQueryResolve
              ? (this.m_OutstandingQueryResolve(e),
                (this.m_OutstandingQueryResolve = void 0))
              : console.warn(
                  "Missing outstanding query resolve for binding query",
                );
        }
        SelectConfig(e, t, i) {
          if (
            ((this.m_sLoadedBindingURI = i),
            console.log("Selecting config " + i + " for app " + e),
            this.SelectedBindingURL == i)
          )
            return (
              console.debug("Selecting the config we already have set", i),
              new Promise((e, t) => {
                e();
              })
            );
          let o = { app_key: e, controller_type: t, url: i };
          const n = (0, g.E)(o);
          return (
            null != this.m_OutstandingSelectConfigResolve &&
              console.warn(
                "About to start second select config when one is already pending",
                this.m_OutstandingSelectConfigResolve,
              ),
            new Promise((e, t) => {
              (this.m_OutstandingSelectConfigResolve = e),
                l()
                  .post("/input/selectconfig.action", n)
                  .then((e) => {
                    console.log("selectconfig ajax request successful");
                  })
                  .catch((e) => {
                    t(e);
                  });
            })
          );
        }
        OnSelectConfigComplete(e) {
          null != this.m_OutstandingSelectConfigResolve
            ? (this.m_OutstandingSelectConfigResolve(),
              (this.m_OutstandingSelectConfigResolve = void 0),
              console.log("OnSelectConfigComplete: ", e))
            : e.error_to_show
              ? p.n.ShowBindingList(e.error_to_show)
              : console.warn(
                  "Missing outstanding query resolve for select config",
                );
        }
        OnTrackersBindingChanged(e) {
          this.GetTrackerBindings().then((e) => {
            this.m_TrackerBindingSetup = e;
          });
        }
        OnActionManifestReloaded(e) {
          e.app_key == P.SelectedApp && this.ReloadCurrentApp();
        }
        SetBindingURL(e) {
          this.m_sLoadedBindingURI = e;
        }
        OnActionBindingsReloaded(e) {
          this.RefreshInputState();
        }
        GetControllerWatcherForSourceFromControllerType(e, t, i, o) {
          let n = "" + e.controller_type + t + i + o;
          if (!this.m_ControllerWatchers.has(n)) {
            let s = "";
            if ("controller_handed" == e.input_bindingui_mode)
              switch (t) {
                case 1:
                  s = "/user/hand/left";
                  break;
                case 2:
                  s = "/user/hand/right";
              }
            else {
              let t = h.W.ConnectedDevices.find(
                (t) => t.controller_type == e.controller_type,
              );
              t && t.root_path
                ? (s = t.root_path)
                : console.log(
                    "Unable to find device path for controller type ",
                    e,
                  );
            }
            this.m_ControllerWatchers.set(n, new k(s, e, t, i, o));
          }
          return this.m_ControllerWatchers.get(n);
        }
        OnWebSocketMessage(e) {
          let t = JSON.parse(e.data);
          if ("jsonid" in t && "vr_input_get_notifications" == t.jsonid)
            for (let e in t.notifications) {
              let i = t.notifications[e];
              switch (i.type) {
                case "pending_file_saved":
                  this.OnPendingFileSaved(i);
                  break;
                case "workshop_upload_complete":
                  this.OnWorkshopUploadComplete(i);
                  break;
                case "query_results":
                  this.OnQueryResults(i);
                  break;
                case "action_bindings_reloaded":
                  this.OnActionBindingsReloaded(i);
                  break;
                case "delete_binding_complete":
                  this.OnBindingDeleteComplete(i);
                  break;
                case "select_config_complete":
                  this.OnSelectConfigComplete(i);
                  break;
                case "trackers_binding_changed":
                  this.OnTrackersBindingChanged(i);
                  break;
                case "action_manifest_reloaded":
                  this.OnActionManifestReloaded(i);
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
            : (0, g.E)(this.m_ModifiedBindingSet, null, "\t");
        }
        get BindingSubscriptionChangedCanary() {
          return this.m_nBindingSubscriptionChangedCanary;
        }
        GetInteractionProfile() {
          return this.m_sInteractionProfile;
        }
        SetInteractionProfile(e) {
          let t = this.m_sInteractionProfile != e;
          (this.m_sInteractionProfile = e), t && this.NotifyWatchersOfChange();
        }
        GetInteractionProfiles() {
          return this.m_SelectedAppActions.interaction_profiles;
        }
        GetSimulatedControllerProperties() {
          var e;
          const t =
            null !== (e = this.GetOptionValue("simulated_controller_type")) &&
            void 0 !== e
              ? e
              : "";
          return {
            strSimulatedControllerType: t,
            strLocalizedSimulatedControllerType:
              this.LocalizeStringForSelectedControllerType(t),
            bIsSimulatingController: t && "none" != t,
            strSimulatedRenderModelType: (function (e) {
              if (!0 === e || "true" === e) return "name_only";
              if (!1 === e || "false" === e) return "none";
              if (null == e || "" === e) return "name_only";
              const t = e.trim().toLowerCase();
              return "full" !== t && "name_only" !== t && "none" !== t
                ? "none"
                : t;
            })(this.GetOptionValue("simulate_rendermodel")),
            bIsSimulatingHMD: this.GetOptionValue("simulate_hmd"),
          };
        }
      }
      (0, n.Cg)([d.observable], M.prototype, "m_eWebSocketState", void 0),
        (0, n.Cg)([d.observable], M.prototype, "m_sLoadedBindingURI", void 0),
        (0, n.Cg)([d.observable], M.prototype, "m_LoadedBinding", void 0),
        (0, n.Cg)([d.observable], M.prototype, "m_ModifiedBindingSet", void 0),
        (0, n.Cg)([d.observable], M.prototype, "m_ModifiedOptions", void 0),
        (0, n.Cg)([d.observable], M.prototype, "m_ModifiedAliases", void 0),
        (0, n.Cg)([d.observable], M.prototype, "m_sName", void 0),
        (0, n.Cg)([d.observable], M.prototype, "m_sDescription", void 0),
        (0, n.Cg)([d.observable], M.prototype, "m_sInteractionProfile", void 0),
        (0, n.Cg)([d.observable], M.prototype, "m_SelectedApp", void 0),
        (0, n.Cg)([d.observable], M.prototype, "m_SelectedAppActions", void 0),
        (0, n.Cg)([d.observable], M.prototype, "m_sSelectedActionSet", void 0),
        (0, n.Cg)(
          [d.observable],
          M.prototype,
          "m_sSelectedControllerType",
          void 0,
        ),
        (0, n.Cg)([d.observable], M.prototype, "m_TrackerBindingSetup", void 0),
        (0, n.Cg)(
          [d.observable],
          M.prototype,
          "m_OutstandingSaveBindingCalls",
          void 0,
        ),
        (0, n.Cg)(
          [d.observable],
          M.prototype,
          "m_ModifiedSimulatedActions",
          void 0,
        ),
        (0, n.Cg)(
          [d.observable],
          M.prototype,
          "m_nBindingSubscriptionChangedCanary",
          void 0,
        ),
        (0, n.Cg)([s.o], M.prototype, "OpenWebSocketToHost", null),
        (0, n.Cg)([d.computed], M.prototype, "SteamVRUnavailable", null),
        (0, n.Cg)([d.computed], M.prototype, "ActionSets", null),
        (0, n.Cg)([d.computed], M.prototype, "ManifestOptions", null),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "SecondaryControllerOptions",
          null,
        ),
        (0, n.Cg)([d.action], M.prototype, "SetOptionValue", null),
        (0, n.Cg)([d.action], M.prototype, "AddSimulatedAction", null),
        (0, n.Cg)([d.action], M.prototype, "DeleteSimulatedActionByPath", null),
        (0, n.Cg)([d.computed], M.prototype, "SelectedApp", null),
        (0, n.Cg)([d.computed], M.prototype, "SelectedAppActions", null),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "CurrentAppCanAccessPrivateInputs",
          null,
        ),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "SelectedControllerTypeInfo",
          null,
        ),
        (0, n.Cg)([d.computed], M.prototype, "CurrentBindingSaveType", null),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "CurrentBindingActionManifestVersion",
          null,
        ),
        (0, n.Cg)([d.computed], M.prototype, "SelectedActionSet", null),
        (0, n.Cg)([d.computed], M.prototype, "SelectedActionSetDetails", null),
        (0, n.Cg)([d.computed], M.prototype, "SelectedActionSetActions", null),
        (0, n.Cg)([s.o], M.prototype, "GetSelectedAppDefaultBinding", null),
        (0, n.Cg)([s.o], M.prototype, "GetActionByName", null),
        (0, n.Cg)([d.computed], M.prototype, "SelectedActionSetPoses", null),
        (0, n.Cg)([d.computed], M.prototype, "SelectedActionSetHaptics", null),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "SelectedActionSetSkeletons",
          null,
        ),
        (0, n.Cg)([d.computed], M.prototype, "SelectedActionSetChords", null),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "SelectedActionSetChordCount",
          null,
        ),
        (0, n.Cg)([d.computed], M.prototype, "SelectedActionSetSources", null),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "BSelectedActionSetHasPoses",
          null,
        ),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "BSelectedActionSetHasBoundPoses",
          null,
        ),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "BSelectedActionSetHasHaptics",
          null,
        ),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "BSelectedActionSetHasBoundHaptics",
          null,
        ),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "BSelectedActionSetHasSkeletons",
          null,
        ),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "BSelectedActionSetHasBoundSkeletons",
          null,
        ),
        (0, n.Cg)([d.action], M.prototype, "ClearSelectedApp", null),
        (0, n.Cg)([d.action], M.prototype, "SetSelectedApp", null),
        (0, n.Cg)([d.action], M.prototype, "SetSelectedController", null),
        (0, n.Cg)([d.action], M.prototype, "SetSelectedActionSet", null),
        (0, n.Cg)(
          [s.o],
          M.prototype,
          "LocalizeStringForSelectedControllerType",
          null,
        ),
        (0, n.Cg)(
          [s.o],
          M.prototype,
          "LocalizePathNameForSelectedControllerType",
          null,
        ),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "SelectedControllerTypeLocalizedName",
          null,
        ),
        (0, n.Cg)([d.action], M.prototype, "RegisterBindingWatcher", null),
        (0, n.Cg)([d.action], M.prototype, "UnregisterBindingWatcher", null),
        (0, n.Cg)([d.action], M.prototype, "GetActionBinding", null),
        (0, n.Cg)([s.o], M.prototype, "GetInputModesForSourceType", null),
        (0, n.Cg)([s.o], M.prototype, "GetBooleanInputOptionsForMode", null),
        (0, n.Cg)([s.o], M.prototype, "GetActionBindingsOfType", null),
        (0, n.Cg)([d.computed], M.prototype, "GetBooleanActionBindings", null),
        (0, n.Cg)([d.computed], M.prototype, "GetVector1ActionBindings", null),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "GetLiteralVector1ActionBindings",
          null,
        ),
        (0, n.Cg)([d.computed], M.prototype, "GetVector2ActionBindings", null),
        (0, n.Cg)([d.computed], M.prototype, "GetVector3ActionBindings", null),
        (0, n.Cg)([d.computed], M.prototype, "GetPoseActionBindings", null),
        (0, n.Cg)([d.computed], M.prototype, "GetHapticsActionBindings", null),
        (0, n.Cg)([d.computed], M.prototype, "GetSkeletonActionBindings", null),
        (0, n.Cg)([d.computed], M.prototype, "ConfigName", null),
        (0, n.Cg)([d.computed], M.prototype, "ConfigDescription", null),
        (0, n.Cg)([s.o], M.prototype, "GetPoseAction", null),
        (0, n.Cg)([s.o], M.prototype, "GetPoseActionByPath", null),
        (0, n.Cg)([s.o], M.prototype, "GetHapticsAction", null),
        (0, n.Cg)([s.o], M.prototype, "GetHapticsActionByPath", null),
        (0, n.Cg)([s.o], M.prototype, "GetSkeletonAction", null),
        (0, n.Cg)([s.o], M.prototype, "GetSkeletonActionByPath", null),
        (0, n.Cg)([s.o], M.prototype, "NotifyWatchersOfChange", null),
        (0, n.Cg)([d.action], M.prototype, "SetActionForInputModeType", null),
        (0, n.Cg)(
          [d.action],
          M.prototype,
          "SetParameterForInputModeType",
          null,
        ),
        (0, n.Cg)([s.o], M.prototype, "AddActionSetIfRequired", null),
        (0, n.Cg)([d.action], M.prototype, "AddInputModeForSource", null),
        (0, n.Cg)([d.action], M.prototype, "DeleteInputModeForSource", null),
        (0, n.Cg)([d.action], M.prototype, "SetInputModeForInputSource", null),
        (0, n.Cg)([d.action], M.prototype, "ClearModesForInputPath", null),
        (0, n.Cg)([d.action], M.prototype, "SetInputPathForPose", null),
        (0, n.Cg)([d.action], M.prototype, "SetPoseForInputPath", null),
        (0, n.Cg)([d.action], M.prototype, "AddDefaultPose", null),
        (0, n.Cg)([d.action], M.prototype, "SetInputPathForHaptics", null),
        (0, n.Cg)([d.action], M.prototype, "SetHapticsForInputPath", null),
        (0, n.Cg)([d.action], M.prototype, "AddDefaultHaptics", null),
        (0, n.Cg)([d.action], M.prototype, "SetInputPathForSkeleton", null),
        (0, n.Cg)([d.action], M.prototype, "SetSkeletonForInputPath", null),
        (0, n.Cg)([d.action], M.prototype, "AddDefaultSkeleton", null),
        (0, n.Cg)([d.action], M.prototype, "SetActionForChord", null),
        (0, n.Cg)([d.action], M.prototype, "DeleteChord", null),
        (0, n.Cg)([d.action], M.prototype, "AddChord", null),
        (0, n.Cg)([d.action], M.prototype, "DeleteSourceFromChord", null),
        (0, n.Cg)([d.action], M.prototype, "SetInputTypeForChord", null),
        (0, n.Cg)([d.action], M.prototype, "SetInputSourceForChord", null),
        (0, n.Cg)([d.action], M.prototype, "LoadActionManifest", null),
        (0, n.Cg)([d.computed], M.prototype, "SelectedBindingURL", null),
        (0, n.Cg)([d.computed], M.prototype, "LoadedBindingURL", null),
        (0, n.Cg)([d.computed], M.prototype, "SelectedBindingIsLegacy", null),
        (0, n.Cg)([d.computed], M.prototype, "SelectedBindingIsOpenXR", null),
        (0, n.Cg)([d.computed], M.prototype, "IsSecondaryController", null),
        (0, n.Cg)([d.computed], M.prototype, "TrackerBindings", null),
        (0, n.Cg)([d.action], M.prototype, "GetTrackerBindings", null),
        (0, n.Cg)([s.o], M.prototype, "SetTrackerBinding", null),
        (0, n.Cg)([s.o], M.prototype, "PulseHaptics", null),
        (0, n.Cg)([d.computed], M.prototype, "KnownControllerTypes", null),
        (0, n.Cg)([s.o], M.prototype, "AutosaveBinding", null),
        (0, n.Cg)([s.o], M.prototype, "OnWebSocketOpen", null),
        (0, n.Cg)([s.o], M.prototype, "OnWebSocketClose", null),
        (0, n.Cg)([s.o], M.prototype, "WebSocketSend", null),
        (0, n.Cg)(
          [d.action.bound],
          M.prototype,
          "OnWorkshopUploadComplete",
          null,
        ),
        (0, n.Cg)([s.o], M.prototype, "OnPendingFileSaved", null),
        (0, n.Cg)([d.computed], M.prototype, "SaveNoticeText", null),
        (0, n.Cg)([s.o], M.prototype, "QueryBindingList", null),
        (0, n.Cg)([s.o], M.prototype, "DeleteBinding", null),
        (0, n.Cg)([s.o], M.prototype, "OnBindingDeleteComplete", null),
        (0, n.Cg)(
          [s.o],
          M.prototype,
          "ShouldShowBindingFailureForControllerType",
          null,
        ),
        (0, n.Cg)([s.o], M.prototype, "OnQueryResults", null),
        (0, n.Cg)([s.o], M.prototype, "SelectConfig", null),
        (0, n.Cg)([s.o], M.prototype, "OnSelectConfigComplete", null),
        (0, n.Cg)([s.o], M.prototype, "OnTrackersBindingChanged", null),
        (0, n.Cg)([s.o], M.prototype, "OnActionManifestReloaded", null),
        (0, n.Cg)([s.o], M.prototype, "SetBindingURL", null),
        (0, n.Cg)([s.o], M.prototype, "OnActionBindingsReloaded", null),
        (0, n.Cg)(
          [s.o],
          M.prototype,
          "GetControllerWatcherForSourceFromControllerType",
          null,
        ),
        (0, n.Cg)([s.o], M.prototype, "OnWebSocketMessage", null),
        (0, n.Cg)([d.computed], M.prototype, "BindingConfig", null),
        (0, n.Cg)(
          [d.computed],
          M.prototype,
          "BindingSubscriptionChangedCanary",
          null,
        );
      const P = new M();
      window.controllerBindingStore = P;
    },
    6795: (e, t, i) => {
      i.d(t, { n: () => g });
      var o,
        n = i(1635),
        s = i(9118),
        r = i(3236),
        l = i(7813),
        d = i(6090),
        c = i(3714),
        a = i(5802),
        p = i(1532),
        u = i(8108);
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.List = 1)] = "List"),
          (e[(e.ViewBinding = 2)] = "ViewBinding"),
          (e[(e.EditBinding = 3)] = "EditBinding"),
          (e[(e.AppSelect = 4)] = "AppSelect"),
          (e[(e.Debugger = 5)] = "Debugger");
      })(o || (o = {}));
      class h {
        constructor() {
          (this.m_State = o.None),
            (this.m_bLoading = !1),
            (this.m_rBindingList = void 0),
            (this.m_bShowBindingListError = !1),
            (this.m_sBindingListError = void 0),
            (this.m_bCanCloseBindingListError = !0),
            (this.m_timeoutLoading = void 0),
            (this.m_pathUpdateTimer = void 0),
            (this.m_bStandaloneSettingsPage = !1),
            (this.m_bDesktopMode = !1),
            (0, l.makeObservable)(this);
        }
        Init() {
          window.addEventListener("popstate", this.OnPopState),
            history.pushState({ direction: "back" }, "back"),
            history.pushState({ direction: "current" }, "current"),
            history.pushState({ direction: "forward" }, "forward"),
            history.back();
          let e = "bindingui/" + d.OH$[(0, d.R$f)()];
          (this.m_mailbox = new d._nH()),
            this.m_mailbox.Init(e),
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
            (0, l.autorun)(this.UpdateWindowTitle);
        }
        ShowOverlayInDashboard() {
          null === d.Ay$ ||
            void 0 === d.Ay$ ||
            d.Ay$.VRClient.ShowDashboardOverlay({
              overlayKey: "system.vrwebhelper.controllerbinding",
              sReason: "cinputui_showoverlayindashboard",
            });
        }
        OnShowAppSelect(e) {
          (this.m_bStandaloneSettingsPage = !1), this.ShowAppSelect();
        }
        OnShowInputDebugger(e) {
          (this.m_bStandaloneSettingsPage = !1), this.ShowDebugger();
        }
        OnShowAppBinding(e) {
          (this.m_bStandaloneSettingsPage = !1),
            (this.Loading = !0),
            p.s.UpdateApplications().then(() => {
              if (
                ((0, d.R$f)() == d.OH$.Overlay
                  ? this.ShowOverlayInDashboard()
                  : (0, d.R$f)() == d.OH$.Desktop && d.Ay$.ShowBindingUI(!0),
                !p.s.GetApp(e.app_key))
              )
                return (
                  console.log(
                    "Warning: Could not find app key: " +
                      e.app_key +
                      " showing app select.",
                  ),
                  void this.ShowAppSelect()
                );
              a.B$.SetSelectedApp(e.app_key, !0),
                a.B$.ReloadCurrentApp().then(() => {
                  if (e.controller_type)
                    return (
                      a.B$.SetSelectedController(e.controller_type, !0),
                      void a.B$.ReloadControllerConfiguration().then(() => {
                        e.action_set && a.B$.SetSelectedActionSet(e.action_set),
                          (this.Loading = !1),
                          this.EditCurrentBinding();
                      })
                    );
                  (this.Loading = !1), this.ShowBindingList();
                });
            });
        }
        OnBindingLoadFailed(e) {
          console.log(
            "OnBindingLoadFailed: " +
              e.app_key +
              " " +
              e.controller_type +
              " " +
              e.error,
          ),
            p.s.UpdateApplications().then(() => {
              if (!p.s.ShouldShowBindingFailureForApp(e.app_key)) return;
              if (
                !a.B$.ShouldShowBindingFailureForControllerType(
                  e.controller_type,
                )
              )
                return;
              a.B$.RememberFailedLoadUri(e.uri),
                a.B$.SetSelectedApp(e.app_key),
                a.B$.SetSelectedController(e.controller_type);
              let t = p.s.GetApp(e.app_key),
                i = s.W.GetControllerTypeInfo(e.controller_type);
              if (!i) return;
              let o = s.W.LocalizeControllerString(i, e.controller_type);
              this.ShowBindingList(
                (0, c.we)(
                  e.error,
                  t ? t.name : (0, c.we)("#unknown_application"),
                  o,
                ),
              ),
                null === d.Ay$ || void 0 === d.Ay$ || d.Ay$.ShowBindingUI(!1);
            });
        }
        SetStandaloneSettingsPage(e) {
          this.m_bStandaloneSettingsPage = e;
        }
        SetDesktopMode(e) {
          this.m_bDesktopMode = e;
        }
        get DesktopMode() {
          return this.m_bDesktopMode;
        }
        SetBindingListError(e, t = !0) {
          (this.m_bShowBindingListError = null != e),
            (this.m_sBindingListError = e),
            (this.m_bCanCloseBindingListError = t);
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
        OnPopState(e) {
          let t = "";
          e.state && e.state.direction && (t = e.state.direction),
            "back" == t
              ? (this.m_bStandaloneSettingsPage &&
                  (this.SetStandaloneSettingsPage(!1),
                  this.ReturnToSettingsUI()),
                this.GoBackPage(),
                history.forward())
              : "forward" == t && (history.back(), this.GoForwardPage());
        }
        GoBackPage() {
          switch (this.m_State) {
            default:
            case o.None:
            case o.AppSelect:
              break;
            case o.Debugger:
            case o.List:
              this.ShowAppSelect();
              break;
            case o.EditBinding:
            case o.ViewBinding:
              this.ShowBindingList();
          }
        }
        GoForwardPage() {
          switch (this.m_State) {
            default:
            case o.None:
            case o.AppSelect:
              this.ShowBindingList();
              break;
            case o.List:
              this.CurrentBinding.url == a.B$.LoadedBindingURL
                ? this.EditCurrentBinding()
                : this.ViewCurrentBinding();
            case o.EditBinding:
            case o.ViewBinding:
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
        set Loading(e) {
          (this.m_bLoading = e),
            e
              ? (this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading),
                (this.m_timeoutLoading = window.setTimeout(() => {
                  this.Loading = !1;
                }, 1e4)))
              : this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading);
        }
        IsSafeToResetControllerType(e, t) {
          return (
            this.m_State == o.AppSelect ||
            this.m_State == o.None ||
            ("TrackedDeviceClass_HMD" == e &&
              "TrackedDeviceClass_Controller" == t)
          );
        }
        EditCurrentBinding() {
          this.m_State = o.EditBinding;
        }
        ViewCurrentBinding() {
          this.m_State = o.ViewBinding;
        }
        ShowBindingList(e = void 0) {
          (this.m_bStandaloneSettingsPage = !1),
            this.SetBindingListError(e),
            (this.m_State = o.List),
            (this.Loading = !1);
        }
        get CurrentBinding() {
          if (this.BindingQueryResults)
            return g.BindingQueryResults.find(
              (e) => e.url == a.B$.SelectedBindingURL,
            );
        }
        ReturnToSettingsUI() {
          this.ShowAppSelect(),
            null === d.Ay$ ||
              void 0 === d.Ay$ ||
              d.Ay$.ShowSettingsUI((0, d.R$f)() == d.OH$.Desktop);
        }
        ShowAppSelect() {
          (this.m_bStandaloneSettingsPage = !1),
            (this.Loading = !0),
            p.s
              .UpdateApplications()
              .then(() => {
                (0, l.runInAction)(() => {
                  (this.Loading = !1), (this.m_State = o.AppSelect);
                });
              })
              .catch(() => {
                this.Loading = !1;
              });
        }
        UpdatePathsTimeout() {
          try {
            u.J.UpdatePaths().then(() => {
              this.m_State == o.Debugger
                ? (this.m_pathUpdateTimer = window.setTimeout(
                    this.UpdatePathsTimeout,
                    500,
                  ))
                : (this.m_pathUpdateTimer = void 0);
            });
          } catch (e) {
            console.log("Stopping debugger timer because", e);
          }
        }
        ShowDebugger() {
          (this.Loading = !0),
            p.s
              .UpdateApplications()
              .then(() => {
                this.Loading = !1;
                let e = p.s.GetApp(a.B$.SelectedApp);
                e &&
                  e.client_container_handle &&
                  u.J.AddSubscribedContainer(e.client_container_handle),
                  (this.m_State = o.Debugger),
                  (this.m_pathUpdateTimer = window.setTimeout(
                    this.UpdatePathsTimeout,
                    500,
                  )),
                  d.Ay$.ShowBindingUI((0, d.R$f)() == d.OH$.Desktop);
              })
              .catch(() => {
                this.Loading = !1;
              });
        }
        GetBindingList() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e;
            (0, l.runInAction)(() => {
              (this.Loading = !0), (this.m_rBindingList = []);
            });
            try {
              const t = a.B$.SelectedControllerTypeInfo,
                i = yield a.B$.QueryBindingList(
                  a.B$.SelectedApp,
                  null !== (e = null == t ? void 0 : t.controller_type) &&
                    void 0 !== e
                    ? e
                    : "",
                );
              i.success &&
                (0, l.runInAction)(() => {
                  this.m_rBindingList = i.results;
                });
            } catch (e) {
              this.SetBindingListError(
                (0, c.we)("#BindingUI_WorkshopBindingLoadFailed"),
              ),
                console.error("Failed to load workshop bindings " + e);
            } finally {
              this.Loading = !1;
            }
          });
        }
        UpdateWindowTitle() {
          setTimeout(() => {
            switch (this.GetUIState) {
              case o.AppSelect:
              case o.Debugger:
              case o.EditBinding:
              case o.List:
              case o.None:
              case o.ViewBinding:
                document.title = (0, c.we)(
                  "#BindingUI_WindowTitle_ControllerBinding",
                );
            }
          }, 0);
        }
      }
      (0, n.Cg)([l.observable], h.prototype, "m_State", void 0),
        (0, n.Cg)([l.observable], h.prototype, "m_bLoading", void 0),
        (0, n.Cg)([l.observable], h.prototype, "m_rBindingList", void 0),
        (0, n.Cg)(
          [l.observable],
          h.prototype,
          "m_bShowBindingListError",
          void 0,
        ),
        (0, n.Cg)([l.observable], h.prototype, "m_sBindingListError", void 0),
        (0, n.Cg)(
          [l.observable],
          h.prototype,
          "m_bCanCloseBindingListError",
          void 0,
        ),
        (0, n.Cg)([l.observable], h.prototype, "m_bDesktopMode", void 0),
        (0, n.Cg)([r.o], h.prototype, "OnShowAppSelect", null),
        (0, n.Cg)([r.o], h.prototype, "OnShowInputDebugger", null),
        (0, n.Cg)([r.o], h.prototype, "OnShowAppBinding", null),
        (0, n.Cg)([r.o], h.prototype, "OnBindingLoadFailed", null),
        (0, n.Cg)([l.computed], h.prototype, "DesktopMode", null),
        (0, n.Cg)([r.o], h.prototype, "SetBindingListError", null),
        (0, n.Cg)([l.computed], h.prototype, "ShowBindingListError", null),
        (0, n.Cg)([l.computed], h.prototype, "BindingListError", null),
        (0, n.Cg)([l.computed], h.prototype, "CanCloseBindingListError", null),
        (0, n.Cg)([r.o], h.prototype, "OnPopState", null),
        (0, n.Cg)([r.o], h.prototype, "GoBackPage", null),
        (0, n.Cg)([r.o], h.prototype, "GoForwardPage", null),
        (0, n.Cg)([l.computed], h.prototype, "GetUIState", null),
        (0, n.Cg)([l.computed], h.prototype, "BindingQueryResults", null),
        (0, n.Cg)([l.computed], h.prototype, "Loading", null),
        (0, n.Cg)([r.o], h.prototype, "IsSafeToResetControllerType", null),
        (0, n.Cg)([l.action.bound], h.prototype, "EditCurrentBinding", null),
        (0, n.Cg)([r.o], h.prototype, "ViewCurrentBinding", null),
        (0, n.Cg)([r.o], h.prototype, "ShowBindingList", null),
        (0, n.Cg)([l.computed], h.prototype, "CurrentBinding", null),
        (0, n.Cg)([r.o], h.prototype, "ReturnToSettingsUI", null),
        (0, n.Cg)([r.o], h.prototype, "ShowAppSelect", null),
        (0, n.Cg)([r.o], h.prototype, "UpdatePathsTimeout", null),
        (0, n.Cg)([r.o], h.prototype, "ShowDebugger", null),
        (0, n.Cg)([r.o], h.prototype, "GetBindingList", null),
        (0, n.Cg)([r.o], h.prototype, "UpdateWindowTitle", null);
      const g = new h();
      window.inputUI = g;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~bd288592d.js.map
