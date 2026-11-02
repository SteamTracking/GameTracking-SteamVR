var CLSTAMP = "11196359";
(() => {
  "use strict";
  var e,
    t = {
      6090: (e, t, n) => {
        n.d(t, {
          $Zy: () => P.$Z,
          $ab: () => P.$,
          $lc: () => v.$,
          Ay$: () => w,
          CUZ: () => i.CU,
          Ci8: () => y.C,
          Doe: () => P.Do,
          Ee9: () => P.Ee,
          EmM: () => u.Em,
          FbK: () => i.Fb,
          FiV: () => _.Fi,
          Fzk: () => P.Fz,
          GMj: () => d.GM,
          GQ2: () => M.GQ,
          GS9: () => a.GS,
          Gze: () => M.Gz,
          HWH: () => M.HW,
          HWh: () => r.H,
          I0c: () => a.I0,
          IS7: () => r.I,
          IlB: () => M.Il,
          JZN: () => i.JZ,
          JcD: () => a.Jc,
          Jv8: () => a.Jv,
          KIK: () => P.KI,
          KlS: () => M.Kl,
          LdJ: () => R.L,
          LdK: () => i.Ld,
          M9N: () => a.M9,
          MQJ: () => _.MQ,
          MVt: () => M.MV,
          N1A: () => p.N,
          NHZ: () => i.NH,
          O54: () => g.O,
          O6e: () => i.O6,
          OH$: () => M.OH,
          OiK: () => _.Oi,
          Op7: () => M.Op,
          QB1: () => i.QB,
          QRg: () => P.QR,
          R$f: () => M.R$,
          RkM: () => M.Rk,
          SeR: () => i.Se,
          Ujb: () => i.Uj,
          VhJ: () => c.Vh,
          WiO: () => d.Wi,
          Wqq: () => a.Wq,
          XlW: () => M.Xl,
          Xun: () => a.Xu,
          Y4E: () => l.Y,
          YVg: () => P.YV,
          YsR: () => u.Ys,
          Yup: () => P.Yu,
          ZPA: () => P.ZP,
          Zkm: () => _.Zk,
          _1: () => M._1,
          _81: () => P._8,
          _nH: () => a._n,
          aXN: () => c.aX,
          aqc: () => M.aq,
          b$J: () => k.b,
          b4: () => f.b,
          ba0: () => M.b,
          dLy: () => h.d,
          ds4: () => P.ds,
          e_0: () => i.e_,
          enJ: () => P.en,
          eod: () => P.eo,
          eyj: () => o.e,
          f9c: () => P.f9,
          fD8: () => P.fD,
          fkw: () => P.fk,
          gNj: () => M.gN,
          hmY: () => P.hm,
          hqo: () => P.hq,
          k2$: () => M.k2,
          kGj: () => M.kG,
          kSV: () => a.kS,
          kuU: () => M.ku,
          lo4: () => a.lo,
          lqd: () => m.l,
          ltU: () => P.lt,
          m$_: () => f.m,
          mHe: () => c.mH,
          mXc: () => a.mX,
          muq: () => M.mu,
          mw: () => _.mw,
          nXw: () => u.nX,
          neN: () => M.ne,
          nqf: () => S.n,
          o3u: () => _.o3,
          oN_: () => i.oN,
          pMg: () => M.pM,
          pgT: () => a.pg,
          q5z: () => i.q5,
          qFr: () => i.qF,
          rxR: () => M.rx,
          snv: () => a.sn,
          t$O: () => T.t,
          txk: () => i.tx,
          uC0: () => b.u,
          uS7: () => s.u,
          vxi: () => i.vx,
          wBp: () => P.wB,
          xOm: () => _.xO,
          yWq: () => P.yW,
          zwf: () => P.zw,
        });
        var a = n(2824),
          i = n(6292),
          s = n(119),
          o = (n(4120), n(1230)),
          l = n(5830),
          r = n(6186),
          h = n(3361),
          u = (n(111), n(5723)),
          d = n(3496),
          g = n(5178),
          c = (n(428), n(9011), n(7350)),
          m = n(6847),
          p = n(5227),
          y = (n(10), n(1808)),
          _ = n(7019),
          f = (n(1988), n(2527), n(9864)),
          v = (n(4189), n(322), n(1977), n(6417)),
          S = n(2303),
          R = n(8715),
          k = (n(4397), n(5459)),
          b = n(8472),
          T = (n(1184), n(1321)),
          M = n(3725),
          P = n(4367);
        const w = VRHTML;
      },
      9864: (e, t, n) => {
        n.d(t, { b: () => a, m: () => o });
        var a,
          i = n(6540),
          s = n(3496);
        !(function (e) {
          (e[(e.Parent = 0)] = "Parent"), (e[(e.World = 1)] = "World");
        })(a || (a = {}));
        class o extends s._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            var e;
            const t = null === (e = this.props.enabled) || void 0 === e || e,
              n = this.props.rotation_start_angle_threshold
                ? (this.props.rotation_start_angle_threshold * Math.PI) / 180
                : null,
              a = this.props.rotation_stop_angle_threshold
                ? (this.props.rotation_stop_angle_threshold * Math.PI) / 180
                : null,
              s = this.props.rotation_ease_out_angle_threshold
                ? (this.props.rotation_ease_out_angle_threshold * Math.PI) / 180
                : null,
              o = this.props.rotation_min_angular_velocity
                ? (this.props.rotation_min_angular_velocity * Math.PI) / 180
                : null,
              l = this.props.rotation_max_angular_velocity
                ? (this.props.rotation_max_angular_velocity * Math.PI) / 180
                : null;
            return i.createElement(
              "vsg-elastic-head-transform",
              {
                "rotation-start-angle-threshold": n,
                "rotation-stop-angle-threshold": a,
                "rotation-ease-in-time": this.props.rotation_ease_in_time,
                "rotation-ease-in-power": this.props.rotation_ease_in_power,
                "rotation-ease-out-angle-threshold": s,
                "rotation-ease-out-power": this.props.rotation_ease_out_power,
                "rotation-min-angular-velocity": o,
                "rotation-max-angular-velocity": l,
                "translation-start-distance-threshold":
                  this.props.translation_start_distance_threshold,
                "translation-stop-distance-threshold":
                  this.props.translation_stop_distance_threshold,
                "translation-ease-in-time": this.props.translation_ease_in_time,
                "translation-ease-in-power":
                  this.props.translation_ease_in_power,
                "translation-ease-out-distance-threshold":
                  this.props.translation_ease_out_distance_threshold,
                "translation-ease-out-power":
                  this.props.translation_ease_out_power,
                "translation-velocity": this.props.translation_velocity,
                enabled: t,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-parent": this.props.translation_parent,
                "rotation-translation-change-together":
                  this.props.rotation_translation_change_together,
              },
              this.props.children,
            );
          }
        }
      },
      3725: (e, t, n) => {
        var a, i, s, o;
        function l() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : a.Unknown;
        }
        n.d(t, {
          GQ: () => C,
          Gz: () => h,
          HW: () => _,
          Il: () => d,
          Kl: () => k,
          MV: () => s,
          OH: () => a,
          Op: () => x,
          R$: () => l,
          Rk: () => m,
          Xl: () => S,
          _1: () => L,
          _E: () => r,
          aq: () => v,
          b: () => R,
          gN: () => b,
          k2: () => P,
          kG: () => T,
          ku: () => c,
          mu: () => o,
          ne: () => u,
          pM: () => i,
          rx: () => w,
        }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(a || (a = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High"),
              (e[(e.Ultra = 4)] = "Ultra");
          })(i || (i = {})),
          (function (e) {
            (e[(e.TrackingResult_Uninitialized = 1)] =
              "TrackingResult_Uninitialized"),
              (e[(e.TrackingResult_Calibrating_InProgress = 100)] =
                "TrackingResult_Calibrating_InProgress"),
              (e[(e.TrackingResult_Calibrating_OutOfRange = 101)] =
                "TrackingResult_Calibrating_OutOfRange"),
              (e[(e.TrackingResult_Running_OK = 200)] =
                "TrackingResult_Running_OK"),
              (e[(e.TrackingResult_Running_OutOfRange = 201)] =
                "TrackingResult_Running_OutOfRange"),
              (e[(e.TrackingResult_Fallback_RotationOnly = 300)] =
                "TrackingResult_Fallback_RotationOnly");
          })(s || (s = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(o || (o = {}));
        let r = 0,
          h = 0,
          u = 4294967295;
        var d, g, c, m, p, y, _, f, v, S, R, k, b, T, M, P, w, V, L, H, C;
        function x(e) {
          let t = d.None;
          return (
            e.getModifierState("CapsLock") && (t |= 1),
            e.getModifierState("NumLock") && (t |= 2),
            t
          );
        }
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Head = 1)] = "Head"),
            (e[(e.HandLeft = 2)] = "HandLeft"),
            (e[(e.HandRight = 3)] = "HandRight");
        })(d || (d = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Shown = 1)] = "Shown"),
              (e[(e.Hidden = 2)] = "Hidden"),
              (e[(e.Exposed = 3)] = "Exposed"),
              (e[(e.Moved = 4)] = "Moved"),
              (e[(e.Resized = 5)] = "Resized"),
              (e[(e.SizeChanged = 6)] = "SizeChanged"),
              (e[(e.Minimized = 7)] = "Minimized"),
              (e[(e.Maximized = 8)] = "Maximized"),
              (e[(e.Restored = 9)] = "Restored"),
              (e[(e.Enter = 10)] = "Enter"),
              (e[(e.Leave = 11)] = "Leave"),
              (e[(e.FocusGained = 12)] = "FocusGained"),
              (e[(e.FocusLost = 13)] = "FocusLost"),
              (e[(e.Close = 14)] = "Close"),
              (e[(e.TakeFocus = 15)] = "TakeFocus"),
              (e[(e.HitTest = 16)] = "HitTest");
          })(g || (g = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(c || (c = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(m || (m = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(p || (p = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(y || (y = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
              (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
              (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
              (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
              (e[(e.CouldntFindSystemOverlay = 4)] =
                "CouldntFindSystemOverlay"),
              (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
                "CouldntFindOrCreateClientOverlay"),
              (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
          })(f || (f = {})),
          (function (e) {
            (e[(e.Accept = 0)] = "Accept"), (e[(e.Back = 1)] = "Back");
          })(v || (v = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(S || (S = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(R || (R = {})),
          (function (e) {
            (e[(e.LaserMouse = 1)] = "LaserMouse"),
              (e[(e.RoomViewFullyOccludingApp = 2)] =
                "RoomViewFullyOccludingApp"),
              (e[(e.DisplaySuppressed = 4)] = "DisplaySuppressed"),
              (e[(e.SystemButtonDown = 8)] = "SystemButtonDown"),
              (e[(e.DriverIsDrawingControllers = 16)] =
                "DriverIsDrawingControllers"),
              (e[(e.DriverRequestsApplicationPause = 32)] =
                "DriverRequestsApplicationPause"),
              (e[(e.DriverRequestsReducedRendering = 64)] =
                "DriverRequestsReducedRendering"),
              (e[(e.DashboardTutorial = 128)] = "DashboardTutorial"),
              (e[(e.GamepadMode_Left = 512)] = "GamepadMode_Left"),
              (e[(e.SystemKeyboardPrivacy = 1024)] = "SystemKeyboardPrivacy"),
              (e[(e.GamepadMode_Right = 2048)] = "GamepadMode_Right");
          })(k || (k = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.ThisSteamVR64BitOnly = 4)] = "ThisSteamVR64BitOnly"),
              (e[(e.Error = -1)] = "Error");
          })(b || (b = {})),
          (function (e) {
            (e[(e.TrackedControllerRole_Invalid = 0)] =
              "TrackedControllerRole_Invalid"),
              (e[(e.TrackedControllerRole_LeftHand = 1)] =
                "TrackedControllerRole_LeftHand"),
              (e[(e.TrackedControllerRole_RightHand = 2)] =
                "TrackedControllerRole_RightHand"),
              (e[(e.TrackedControllerRole_OptOut = 3)] =
                "TrackedControllerRole_OptOut"),
              (e[(e.TrackedControllerRole_Treadmill = 4)] =
                "TrackedControllerRole_Treadmill"),
              (e[(e.TrackedControllerRole_Max = 5)] =
                "TrackedControllerRole_Max");
          })(T || (T = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.Steam_VRButton = 1)] = "Steam_VRButton"),
              (e[(e.Steam_StartSteamVRApp = 2)] = "Steam_StartSteamVRApp"),
              (e[(e.Watchdog_Unknown = 10)] = "Watchdog_Unknown"),
              (e[(e.Watchdog_Controller = 11)] = "Watchdog_Controller"),
              (e[(e.Watchdog_Hmd = 12)] = "Watchdog_Hmd"),
              (e[(e.AppLaunch_Unknown = 20)] = "AppLaunch_Unknown"),
              (e[(e.AppLaunch_Steam = 21)] = "AppLaunch_Steam"),
              (e[(e.SteamVR_Restart = 30)] = "SteamVR_Restart"),
              (e[(e.SteamVR_VRStartup = 31)] = "SteamVR_VRStartup");
          })(M || (M = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(P || (P = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(w || (w = {})),
          (function (e) {
            (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
          })(V || (V = {})),
          (function (e) {
            (e[(e.Inactive = 0)] = "Inactive"),
              (e[(e.PendingReset = 1)] = "PendingReset"),
              (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (e[(e.Default = 3)] = "Default"),
              (e[(e.CV = 4)] = "CV"),
              (e[(e.Manual = 5)] = "Manual");
          })(L || (L = {})),
          (function (e) {
            (e[(e.OK = 1)] = "OK"),
              (e[(e.Warning = 100)] = "Warning"),
              (e[(e.Warning_BaseStationMayHaveMoved = 101)] =
                "Warning_BaseStationMayHaveMoved"),
              (e[(e.Warning_BaseStationRemoved = 102)] =
                "Warning_BaseStationRemoved"),
              (e[(e.Warning_SeatedBoundsInvalid = 103)] =
                "Warning_SeatedBoundsInvalid"),
              (e[(e.Error = 200)] = "Error"),
              (e[(e.Error_BaseStationUninitialized = 201)] =
                "Error_BaseStationUninitialized"),
              (e[(e.Error_BaseStationConflict = 202)] =
                "Error_BaseStationConflict"),
              (e[(e.Error_PlayAreaInvalid = 203)] = "Error_PlayAreaInvalid"),
              (e[(e.Error_CollisionBoundsInvalid = 204)] =
                "Error_CollisionBoundsInvalid");
          })(H || (H = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(C || (C = {}));
      },
      1139: (e, t, n) => {
        n.d(t, { CH: () => d, FH: () => r, aw: () => u, jE: () => h });
        var a = n(1635),
          i = n(6540),
          s = n(3236),
          o = n(7813);
        function l(e) {
          return "string" == typeof e || (Array.isArray(e) && e[1]);
        }
        function r(...e) {
          return e
            .filter(l)
            .map((e) => ("string" == typeof e ? e : e[0]))
            .join(" ");
        }
        function h(e, t) {
          let n = t;
          for (; n.parentElement && !e.some((e) => n.matches(e)); )
            n = n.parentElement;
          return n;
        }
        class u {
          constructor() {
            (this.onScroll = null),
              (this.onScrollStop = null),
              (this.m_elem = null),
              (this.m_rScrollableParents = []),
              (this.m_bScrolling = !1),
              (this.m_scrollStopTimeoutHandle = void 0),
              (0, o.makeObservable)(this);
          }
          ref(e) {
            this.m_elem && this.cleanup(),
              (this.m_elem = e),
              this.updateScrollableParents();
          }
          get isScrolling() {
            return this.m_bScrolling;
          }
          updateScrollableParents() {
            for (let e of this.m_rScrollableParents)
              e.removeEventListener("scroll", this.onParentScroll);
            this.m_elem
              ? (this.m_rScrollableParents = (function (e) {
                  let t = [];
                  if (!e) return t;
                  let n = e.parentElement;
                  for (; n; ) {
                    const e = n.scrollWidth > n.clientWidth,
                      a = n.scrollHeight > n.clientHeight;
                    (e || a) && t.push(n), (n = n.parentElement);
                  }
                  return t;
                })(this.m_elem))
              : (this.m_rScrollableParents = []);
            for (let e of this.m_rScrollableParents)
              e.addEventListener("scroll", this.onParentScroll);
          }
          cleanup() {
            for (let e of this.m_rScrollableParents)
              e.removeEventListener("scroll", this.onParentScroll);
            (this.m_rScrollableParents = []),
              (this.m_elem = null),
              this.clearScrollStopTimeout();
          }
          onParentScroll() {
            var e;
            this.clearScrollStopTimeout(),
              (this.m_bScrolling = !0),
              (this.m_scrollStopTimeoutHandle = window.setTimeout(
                this.onScrollStopTimeout,
                50,
              )),
              null === (e = this.onScroll) || void 0 === e || e.call(this);
          }
          clearScrollStopTimeout() {
            window.clearTimeout(this.m_scrollStopTimeoutHandle),
              (this.m_scrollStopTimeoutHandle = void 0);
          }
          onScrollStopTimeout() {
            var e;
            this.m_bScrolling &&
              (null === (e = this.onScrollStop) ||
                void 0 === e ||
                e.call(this)),
              (this.m_bScrolling = !1);
          }
        }
        function d() {
          const [, e] = i.useState(0);
          return i.useCallback(() => e((e) => e + 1), []);
        }
        (0, a.Cg)([o.observable], u.prototype, "m_bScrolling", void 0),
          (0, a.Cg)([s.o], u.prototype, "ref", null),
          (0, a.Cg)([o.computed], u.prototype, "isScrolling", null),
          (0, a.Cg)([s.o], u.prototype, "onParentScroll", null),
          (0, a.Cg)([s.o], u.prototype, "onScrollStopTimeout", null);
      },
      7558: (e, t, n) => {
        var a = n(1635),
          i = n(6540),
          s = n(5338),
          o = n(2505),
          l = n.n(o),
          r = n(3236),
          h = n(6090),
          u = n(3714),
          d = n(1333),
          g = n(9118),
          c = n(1532),
          m = n(6138),
          p = n(7813),
          y = n(9125);
        (0, p.configure)({ enforceActions: "never" });
        class _ extends i.Component {
          constructor(e) {
            super(e),
              (this.m_genid = 0),
              (this.m_language = null),
              (this.m_languageToLayout = new Map()),
              (this.m_keyTypeToHandler = null),
              (this.m_curShiftPlane = null),
              (this.m_keyElements = null),
              (this.m_KeyboardVisibilityCallbackHandle = null),
              this.initializeKeyHandlers(),
              (this.state = {
                bFading: !1,
                bVisible: !1,
                bDockedInDashboard: !1,
                bMinimalMode: !1,
                bMultilinePreview: !1,
                inputMode: h.XlW.Normal,
                activeKey: { nCol: -1, nRow: -1 },
                presentation: "overlay",
                shiftPlaneName: "normal",
                layout: null,
                langLayout: null,
                text: "",
                textPos: 0,
                suggestions: [],
              }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRKeyboard.LoadSuggestionsForLanguage(this.language()),
              d.HR.Init(!1);
          }
          componentDidMount() {
            var e;
            this.m_KeyboardVisibilityCallbackHandle =
              null ===
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForKeyboardInfoChangedEvents) ||
              void 0 === e
                ? void 0
                : e.call(VRHTML, this.onKeyboardInfoChanged);
          }
          componentWillUnmount() {
            var e;
            null === (e = this.m_KeyboardVisibilityCallbackHandle) ||
              void 0 === e ||
              e.unregister();
          }
          onKeyboardInfoChanged(e) {
            if (e.visible) {
              const t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRDashboardManager.GetKeyboardBuffer();
              this.setState({
                bVisible: !0,
                bDockedInDashboard: e.dockedInDashboard,
                inputMode: e.inputMode,
                bMinimalMode: !!(h.QRg.Minimal & e.keyboardFlags),
                bMultilinePreview: e.lineMode == h.ba0.MultipleLines,
                text: t,
                textPos: t.length,
              }),
                this.updateSuggestions(t),
                this.getLayout("base"),
                this.getLayout(this.language());
            } else this.setState({ bVisible: !1 });
          }
          startClose() {
            this.setState({ bVisible: !1 }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRDashboardManager.CloseKeyboard();
          }
          genid() {
            return (this.m_genid += 1), "vk" + this.m_genid;
          }
          language() {
            var e;
            return (
              this.m_language ||
                (this.props.language
                  ? (this.m_language = this.props.language)
                  : (this.m_language =
                      null !==
                        (e =
                          null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.GetSteamLanguage()) && void 0 !== e
                        ? e
                        : "english")),
              this.m_language
            );
          }
          bShowPasswordPreview() {
            return this.state.inputMode == h.XlW.Password;
          }
          getLayoutFile(e) {
            return (0, a.sH)(this, void 0, void 0, function* () {
              let t = `/dashboard/keyboards/layout_${e}_${this.state.presentation}.json`;
              return l()
                .get(t)
                .then((e) => (200 != e.status ? null : e.data))
                .catch((t) =>
                  "english" != e ? this.getLayoutFile("english") : null,
                );
            });
          }
          getLayout(e) {
            this.m_languageToLayout.has(e)
              ? this.onLayoutLoaded()
              : this.getLayoutFile(e).then((t) => {
                  t &&
                    (this.m_languageToLayout.set(e, t), this.onLayoutLoaded());
                });
          }
          onLayoutLoaded() {
            this.m_languageToLayout.has("base") &&
              this.m_languageToLayout.has(this.language()) &&
              ((this.m_keyElements = null),
              this.setState({
                layout: this.m_languageToLayout.get("base"),
                langLayout: this.m_languageToLayout.get(this.language()),
                shiftPlaneName: "normal",
              }),
              this.toggleShiftPlaneWith("normal"));
          }
          initializeKeyHandlers() {
            (this.m_keyTypeToHandler = new Map()),
              this.m_keyTypeToHandler.set("key", this.handleKey),
              this.m_keyTypeToHandler.set("del", this.handleDel),
              this.m_keyTypeToHandler.set("shift", this.handleShift),
              this.m_keyTypeToHandler.set("symbols", this.handleSymbols),
              this.m_keyTypeToHandler.set("done", this.handleDone),
              this.m_keyTypeToHandler.set("cancel", this.handleCancel),
              this.m_keyTypeToHandler.set("clear", this.handleClear),
              this.m_keyTypeToHandler.set("return", this.handleReturn);
          }
          findShiftPlane(e) {
            if (!this.state.langLayout) return null;
            for (let t of this.state.langLayout.shiftPlanes)
              if (t.name == e) return t;
            return null;
          }
          toggleShiftPlaneWith(e) {
            (this.m_curShiftPlane && this.m_curShiftPlane.name != e) ||
              (e = "normal");
            let t = this.findShiftPlane(e);
            t &&
              ((this.m_curShiftPlane = t),
              this.setState({ shiftPlaneName: e }));
          }
          onKey(e, t) {
            if (
              e < this.state.layout.geometry.length &&
              t < this.state.layout.geometry[e].keys.length
            ) {
              let n = this.state.layout.geometry[e].keys[t];
              if ("string" == typeof n);
              else if ("key" != n.type)
                return void this.m_keyTypeToHandler.get(n.type)(n);
            }
            if (
              this.m_curShiftPlane &&
              e < this.m_curShiftPlane.rows.length &&
              t < this.m_curShiftPlane.rows[e].length
            ) {
              let n = this.m_curShiftPlane.rows[e][t];
              "string" == typeof n
                ? this.m_keyTypeToHandler.get("key")(n)
                : this.m_keyTypeToHandler.has(n.type) &&
                  this.m_keyTypeToHandler.get(n.type)(n);
            }
          }
          handleKey(e) {
            let t;
            if (
              ((t = "string" == typeof e ? e : e.value),
              this.state.bMinimalMode)
            )
              this.UpdateText(t, 1);
            else {
              let e =
                  this.state.text.substr(0, this.state.textPos) +
                  t +
                  this.state.text.substr(this.state.textPos),
                n = this.state.textPos + t.length;
              this.UpdateText(e, n);
            }
          }
          handleReturn() {
            this.handleKey("\n");
          }
          handleDel() {
            if (this.state.bMinimalMode) this.handleKey("\b");
            else {
              let e = this.state.text.substr(0, this.state.textPos),
                t = this.state.text.substr(this.state.textPos);
              if (e.length > 0) {
                let n = e.substr(0, e.length - 1) + t,
                  a = this.state.textPos - 1;
                this.UpdateText(n, a);
              }
            }
          }
          handleShift() {
            this.toggleShiftPlaneWith("shift");
          }
          handleSymbols() {
            this.toggleShiftPlaneWith("symbols");
          }
          UpdateText(e, t) {
            this.setState({ text: e, textPos: t }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRKeyboard.SetKeyboardText(e),
              this.updateSuggestions(this.getSuggestionBase(e, t));
          }
          handleDone(e) {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.SendKeyboardDone(),
              this.startClose();
          }
          handleCancel(e) {
            this.startClose();
          }
          handleClear(e) {
            this.setState({ text: "", textPos: 0 }), this.updateSuggestions("");
          }
          isWhite(e) {
            return " " == e;
          }
          findWordLimits(e, t) {
            if (
              t < e.length &&
              this.isWhite(e[t]) &&
              (0 == t || (t > 1 && this.isWhite(e[t - 1])))
            )
              return null;
            let n = t;
            for (; n > 0 && !this.isWhite(e[n]); ) n -= 1;
            n < e.length && this.isWhite(e[n]) && (n += 1);
            let a = n;
            for (; a < e.length && !this.isWhite(e[a]); ) a += 1;
            return [n, a];
          }
          getSuggestionBase(e, t) {
            let n = this.findWordLimits(e, t);
            return n ? e.substr(n[0], n[1] - n[0]) : null;
          }
          updateSuggestions(e) {
            var t;
            if (null != this.state.layout)
              if (this.bShowPasswordPreview())
                this.setState({ suggestions: [] });
              else if (
                (null == e &&
                  (e = this.getSuggestionBase(
                    this.state.text,
                    this.state.textPos,
                  )),
                null != e && e.length > 0)
              ) {
                new Array(this.state.layout.previewSuggestionCount);
                let n =
                  null !==
                    (t =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRKeyboard.GetSuggestions(
                            e,
                            this.state.layout.previewSuggestionCount,
                          )) && void 0 !== t
                    ? t
                    : [];
                this.setState({ suggestions: n });
              } else this.setState({ suggestions: [] });
          }
          handleSuggestionClick(e) {
            if (e >= this.state.suggestions.length) return;
            let t = this.state.suggestions[e],
              n = this.findWordLimits(this.state.text, this.state.textPos);
            if (n) {
              let e = this.state.text.substr(0, n[0]);
              t += " ";
              let a = e + t + this.state.text.substr(n[1]),
                i = e.length + t.length;
              this.UpdateText(a, i);
            }
          }
          makeKeyFaceElement(e, t) {
            let n = "VRKBKeyFace";
            if ((t && (n += ` VRKBShift_${t.name}`), "string" == typeof e))
              return i.createElement(
                "span",
                { key: this.genid(), className: n },
                e,
              );
            {
              let t = e.text;
              e.value ? e.value : e.text;
              switch (
                (e.img &&
                  (t = i.createElement("img", {
                    src: `/dashboard/images/vrkeyboard/${e.img}.png`,
                  })),
                "string" == typeof t && t.startsWith("#") && (t = (0, u.we)(t)),
                e.type)
              ) {
                case "key":
                case "symbols":
                case "del":
                case "cancel":
                case "shift":
                case "return":
                  return i.createElement(
                    "span",
                    { key: this.genid(), className: n },
                    t,
                  );
                case "done":
                  return i.createElement(
                    "span",
                    { key: this.genid(), className: n + " VRKBDone" },
                    t,
                  );
                case "hole":
                  return i.createElement("span", {
                    key: this.genid(),
                    className: n,
                  });
                default:
                  return (
                    console.log(
                      "unknown key type ",
                      e.type,
                      " in keyboard layout",
                    ),
                    null
                  );
              }
            }
          }
          getKeyFaces(e, t) {
            let n = [];
            if (
              e < this.state.layout.geometry.length &&
              t < this.state.layout.geometry[e].keys.length
            ) {
              "key" != this.state.layout.geometry[e].keys[t].type &&
                n.push(
                  this.makeKeyFaceElement(
                    this.state.layout.geometry[e].keys[t],
                    null,
                  ),
                );
            }
            if (0 == n.length)
              for (let a of this.state.langLayout.shiftPlanes)
                e < a.rows.length &&
                  t < a.rows[e].length &&
                  n.push(this.makeKeyFaceElement(a.rows[e][t], a));
            return n;
          }
          getKeyElements() {
            let e = [];
            for (let t = 0; t < this.state.layout.geometry.length; ++t) {
              let n = this.state.layout.geometry[t],
                a = [];
              for (let e = 0; e < n.keys.length; ++e) {
                let s = n.keys[e],
                  o = {};
                s.flexGrow && (o.flexGrow = s.flexGrow),
                  s.flexShrink && (o.flexShrink = s.flexShrink),
                  this.state.shiftPlaneName == s.type &&
                    (o.background = "#000"),
                  this.state.activeKey.nCol == e &&
                    this.state.activeKey.nRow == t &&
                    (o.background = "#000");
                let l = this.getKeyFaces(t, e),
                  r = () => {
                    "done" == s.type && this.onKey(t, e);
                  },
                  h = () => {
                    "done" != s.type &&
                      (this.setState({ activeKey: { nRow: t, nCol: e } }),
                      this.onKey(t, e));
                  },
                  u = () => {
                    "done" != s.type &&
                      this.setState({ activeKey: { nRow: -1, nCol: -1 } });
                  };
                a.push(
                  i.createElement(
                    m.$,
                    {
                      key: this.genid(),
                      className: "VRKBKey",
                      releaseSoundEffect: null,
                      onClick: r,
                      onMouseDown: h,
                      onMouseUp: u,
                      style: o,
                    },
                    l,
                  ),
                );
              }
              let s = {};
              n.height && (s.height = n.height),
                e.push(
                  i.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBRow", style: s },
                    a,
                  ),
                );
            }
            return i.createElement("div", { className: "VRKBRows" }, e);
          }
          makeCursor() {
            return i.createElement(
              "span",
              { key: this.genid(), className: "VRKBPreviewTextCursor" },
              "|",
            );
          }
          makePreviewText() {
            let e = this.state.text.substr(0, this.state.textPos),
              t = this.state.text.substr(this.state.textPos);
            return this.bShowPasswordPreview()
              ? ((e = _.kPasswordChar.repeat(e.length)),
                (t = _.kPasswordChar.repeat(t.length)),
                [
                  i.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    _.kPasswordChar.repeat(e.length),
                  ),
                  this.makeCursor(),
                  i.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    _.kPasswordChar.repeat(t.length),
                  ),
                ])
              : [
                  i.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    e,
                  ),
                  this.makeCursor(),
                  i.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    t,
                  ),
                ];
          }
          makeSuggestionElements() {
            let e = [];
            if (this.state.suggestions)
              for (let t = 0; t < this.state.suggestions.length; ++t)
                e.push(
                  i.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBSuggestion",
                      onClick: () => this.handleSuggestionClick(t),
                    },
                    this.state.suggestions[t],
                  ),
                );
            for (
              let t = e.length;
              t < this.state.layout.previewSuggestionCount;
              ++t
            )
              e.push(
                i.createElement("div", {
                  key: this.genid(),
                  className: "VRKBSuggestion",
                }),
              );
            return e;
          }
          renderFlatPreview() {
            return this.state.bMinimalMode
              ? null
              : i.createElement(
                  "div",
                  { className: "VRKBPreviewWrapper" },
                  i.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBPreviewText" },
                    this.makePreviewText(),
                  ),
                  i.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBSuggestionWrapper" },
                    this.makeSuggestionElements(),
                  ),
                );
          }
          render_flat() {
            return i.createElement(
              h.dLy,
              { parent_path: "/user/head" },
              i.createElement(
                h.m$_,
                null,
                i.createElement(
                  h.dLy,
                  { translation: this.state.layout.translation },
                  i.createElement(
                    h.Zkm,
                    {
                      width: void 0,
                      height: 1,
                      interactive: !0,
                      make_overlays_interactive_if_visible: !0,
                      sort_depth_bias: 0.2,
                      debug_name: "keyboard-flat",
                    },
                    i.createElement(
                      "div",
                      {
                        className: `VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
                      },
                      i.createElement(
                        "div",
                        { className: "VRKBBackground" },
                        this.renderFlatPreview(),
                        this.m_keyElements,
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
          render_overlay() {
            return i.createElement(
              "div",
              {
                className: `VRKBContainer VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
              },
              i.createElement(
                "div",
                { className: "VRKBBackground" },
                this.renderFlatPreview(),
                this.m_keyElements,
              ),
            );
          }
          render() {
            if (!this.state.layout)
              return console.log("xxx render layout==null, bailing"), null;
            if (!this.state.bVisible)
              return console.log("xxx render !visible, so bailing"), null;
            switch (
              ((this.m_keyElements = this.getKeyElements()),
              this.state.presentation)
            ) {
              case "flat":
                return this.render_flat();
              case "overlay":
                return this.render_overlay();
              default:
                return (
                  console.log(
                    "bad keyboard presentation:",
                    this.state.presentation,
                  ),
                  null
                );
            }
          }
        }
        (_.kPasswordChar = "●"),
          (0, a.Cg)([r.o], _.prototype, "onKeyboardInfoChanged", null),
          (0, a.Cg)([r.o], _.prototype, "handleKey", null),
          (0, a.Cg)([r.o], _.prototype, "handleReturn", null),
          (0, a.Cg)([r.o], _.prototype, "handleDel", null),
          (0, a.Cg)([r.o], _.prototype, "handleShift", null),
          (0, a.Cg)([r.o], _.prototype, "handleSymbols", null),
          (0, a.Cg)([r.o], _.prototype, "handleDone", null),
          (0, a.Cg)([r.o], _.prototype, "handleCancel", null),
          (0, a.Cg)([r.o], _.prototype, "handleClear", null),
          (0, a.Cg)([r.o], _.prototype, "handleSuggestionClick", null);
        const f =
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamLanguage();
        null === VRHTML ||
          void 0 === VRHTML ||
          VRHTML.VROverlay.SetInputMethod(
            VRHTML.VROverlay.ThisOverlayHandle(),
            h.RkM.Mouse,
          ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRDashboardManager.SetKeyboardOverlayToThis(),
          (0, u.uV)([], f)
            .then(() => g.W.Init())
            .then(() => c.s.Init())
            .then(() => {
              (0, y.aj)().Init("SteamVR", CLSTAMP, (0, y.d4)()),
                s
                  .H(document.getElementById("root"))
                  .render(i.createElement(_, { language: f }));
            });
      },
    },
    n = {};
  function a(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var s = (n[e] = { exports: {} });
    return t[e].call(s.exports, s, s.exports, a), s.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, n, i, s) => {
      if (!n) {
        var o = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, i, s] = e[u], l = !0, r = 0; r < n.length; r++)
            (!1 & s || o >= s) && Object.keys(a.O).every((e) => a.O[e](n[r]))
              ? n.splice(r--, 1)
              : ((l = !1), s < o && (o = s));
          if (l) {
            e.splice(u--, 1);
            var h = i();
            void 0 !== h && (t = h);
          }
        }
        return t;
      }
      s = s || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > s; u--) e[u] = e[u - 1];
      e[u] = [n, i, s];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 884: 0, 57: 0, 527: 0, 500: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var i,
            s,
            [o, l, r] = n,
            h = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (i in l) a.o(l, i) && (a.m[i] = l[i]);
            if (r) var u = r(a);
          }
          for (t && t(n); h < o.length; h++)
            (s = o[h]), a.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return a.O(u);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var i = a.O(
    void 0,
    [967, 991, 264, 305, 527, 170, 452, 797, 500, 148, 554, 458],
    () => a(7558),
  );
  i = a.O(i);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/keyboard.js.map
