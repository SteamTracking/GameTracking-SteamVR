var CLSTAMP = "11023671";
(() => {
  "use strict";
  var e,
    t = {
      6090: (e, t, n) => {
        n.d(t, {
          $Zy: () => T.$Z,
          $ab: () => T.$,
          $lc: () => f.$,
          Ay$: () => w,
          CUZ: () => i.CU,
          Ci8: () => y.C,
          Doe: () => T.Do,
          Ee9: () => T.Ee,
          EmM: () => h.Em,
          FbK: () => i.Fb,
          FiV: () => _.Fi,
          Fzk: () => T.Fz,
          GMj: () => d.GM,
          GQ2: () => C.GQ,
          GS9: () => a.GS,
          Gze: () => C.Gz,
          HWH: () => C.HW,
          HWh: () => l.H,
          I0c: () => a.I0,
          IS7: () => l.I,
          IlB: () => C.Il,
          JZN: () => i.JZ,
          JcD: () => a.Jc,
          Jv8: () => a.Jv,
          KIK: () => T.KI,
          KlS: () => C.Kl,
          LdJ: () => b.L,
          LdK: () => i.Ld,
          M9N: () => a.M9,
          MQJ: () => _.MQ,
          MVt: () => C.MV,
          N1A: () => p.N,
          NHZ: () => i.NH,
          O54: () => m.O,
          O6e: () => i.O6,
          OH$: () => C.OH,
          OiK: () => _.Oi,
          Op7: () => C.Op,
          QB1: () => i.QB,
          QRg: () => T.QR,
          R$f: () => C.R$,
          RkM: () => C.Rk,
          SeR: () => i.Se,
          Ujb: () => i.Uj,
          VhJ: () => g.Vh,
          WiO: () => d.Wi,
          Wqq: () => a.Wq,
          XlW: () => C.Xl,
          Xun: () => a.Xu,
          Y4E: () => r.Y,
          YVg: () => T.YV,
          YsR: () => h.Ys,
          Yup: () => T.Yu,
          ZPA: () => T.ZP,
          Zkm: () => _.Zk,
          _1: () => C._1,
          _81: () => T._8,
          _h3: () => _._h,
          _nH: () => a._n,
          aXN: () => g.aX,
          aqc: () => C.aq,
          b$J: () => R.b,
          b4: () => v.b,
          ba0: () => C.b,
          dLy: () => u.d,
          ds4: () => T.ds,
          e_0: () => i.e_,
          enJ: () => T.en,
          eod: () => T.eo,
          eyj: () => s.e,
          f9c: () => T.f9,
          fD8: () => T.fD,
          fkw: () => T.fk,
          gNj: () => C.gN,
          hmY: () => T.hm,
          hqo: () => T.hq,
          k2$: () => C.k2,
          kGj: () => C.kG,
          kSV: () => a.kS,
          ke3: () => T.ke,
          kuU: () => C.ku,
          lo4: () => a.lo,
          lqd: () => c.l,
          m$_: () => v.m,
          mHe: () => g.mH,
          mXc: () => a.mX,
          muq: () => C.mu,
          mw: () => _.mw,
          nXw: () => h.nX,
          neN: () => C.ne,
          nqf: () => S.n,
          o3u: () => _.o3,
          oN_: () => i.oN,
          pMg: () => C.pM,
          pgT: () => a.pg,
          q5z: () => i.q5,
          qFr: () => i.qF,
          rxR: () => C.rx,
          snv: () => a.sn,
          t$O: () => P.t,
          txk: () => i.tx,
          uC0: () => k.u,
          uS7: () => o.u,
          vxi: () => i.vx,
          wBp: () => T.wB,
          xOm: () => _.xO,
          yWq: () => T.yW,
          zwf: () => T.zw,
        });
        var a = n(2824),
          i = n(6292),
          o = n(119),
          s = (n(4120), n(1230)),
          r = n(5830),
          l = n(6186),
          u = n(3361),
          h = (n(111), n(5723)),
          d = n(3496),
          m = n(5178),
          g = (n(428), n(9011), n(7350)),
          c = n(6847),
          p = n(5227),
          y = (n(10), n(1808)),
          _ = n(7019),
          v = (n(1988), n(2527), n(9864)),
          f = (n(4189), n(322), n(1977), n(6417)),
          S = n(2303),
          b = n(8715),
          R = (n(4397), n(5459)),
          k = n(8472),
          P = (n(1184), n(1321)),
          C = n(3725),
          T = n(4367);
        const w = VRHTML;
      },
      9864: (e, t, n) => {
        n.d(t, { b: () => a, m: () => s });
        var a,
          i = n(6540),
          o = n(3496);
        !(function (e) {
          (e[(e.Parent = 0)] = "Parent"), (e[(e.World = 1)] = "World");
        })(a || (a = {}));
        class s extends o._J {
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
              o = this.props.rotation_ease_out_angle_threshold
                ? (this.props.rotation_ease_out_angle_threshold * Math.PI) / 180
                : null,
              s = this.props.rotation_min_angular_velocity
                ? (this.props.rotation_min_angular_velocity * Math.PI) / 180
                : null,
              r = this.props.rotation_max_angular_velocity
                ? (this.props.rotation_max_angular_velocity * Math.PI) / 180
                : null;
            return i.createElement(
              "vsg-elastic-head-transform",
              {
                "rotation-start-angle-threshold": n,
                "rotation-stop-angle-threshold": a,
                "rotation-ease-in-time": this.props.rotation_ease_in_time,
                "rotation-ease-in-power": this.props.rotation_ease_in_power,
                "rotation-ease-out-angle-threshold": o,
                "rotation-ease-out-power": this.props.rotation_ease_out_power,
                "rotation-min-angular-velocity": s,
                "rotation-max-angular-velocity": r,
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
        var a, i, o, s;
        function r() {
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
          GQ: () => L,
          Gz: () => u,
          HW: () => _,
          Il: () => d,
          Kl: () => R,
          MV: () => o,
          OH: () => a,
          Op: () => V,
          R$: () => r,
          Rk: () => c,
          Xl: () => S,
          _1: () => O,
          _E: () => l,
          aq: () => f,
          b: () => b,
          gN: () => k,
          k2: () => T,
          kG: () => P,
          ku: () => g,
          mu: () => s,
          ne: () => h,
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
              (e[(e.High = 3)] = "High");
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
          })(o || (o = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(s || (s = {}));
        let l = 0,
          u = 0,
          h = 4294967295;
        var d, m, g, c, p, y, _, v, f, S, b, R, k, P, C, T, w, M, O, D, L;
        function V(e) {
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
          })(m || (m = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(g || (g = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(c || (c = {})),
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
          })(v || (v = {})),
          (function (e) {
            (e[(e.Accept = 0)] = "Accept"), (e[(e.Back = 1)] = "Back");
          })(f || (f = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(S || (S = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(b || (b = {})),
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
          })(R || (R = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.ThisSteamVR64BitOnly = 4)] = "ThisSteamVR64BitOnly"),
              (e[(e.Error = -1)] = "Error");
          })(k || (k = {})),
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
          })(P || (P = {})),
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
          })(C || (C = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(T || (T = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(w || (w = {})),
          (function (e) {
            (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
          })(M || (M = {})),
          (function (e) {
            (e[(e.Inactive = 0)] = "Inactive"),
              (e[(e.PendingReset = 1)] = "PendingReset"),
              (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (e[(e.Default = 3)] = "Default"),
              (e[(e.CV = 4)] = "CV"),
              (e[(e.Manual = 5)] = "Manual");
          })(O || (O = {})),
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
          })(D || (D = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(L || (L = {}));
      },
      1139: (e, t, n) => {
        n.d(t, { CH: () => d, FH: () => l, aw: () => h, jE: () => u });
        var a = n(1635),
          i = n(6540),
          o = n(3236),
          s = n(7813);
        function r(e) {
          return "string" == typeof e || (Array.isArray(e) && e[1]);
        }
        function l(...e) {
          return e
            .filter(r)
            .map((e) => ("string" == typeof e ? e : e[0]))
            .join(" ");
        }
        function u(e, t) {
          let n = t;
          for (; n.parentElement && !e.some((e) => n.matches(e)); )
            n = n.parentElement;
          return n;
        }
        class h {
          constructor() {
            (this.onScroll = null),
              (this.onScrollStop = null),
              (this.m_elem = null),
              (this.m_rScrollableParents = []),
              (this.m_bScrolling = !1),
              (this.m_scrollStopTimeoutHandle = void 0),
              (0, s.makeObservable)(this);
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
        (0, a.Cg)([s.observable], h.prototype, "m_bScrolling", void 0),
          (0, a.Cg)([o.o], h.prototype, "ref", null),
          (0, a.Cg)([s.computed], h.prototype, "isScrolling", null),
          (0, a.Cg)([o.o], h.prototype, "onParentScroll", null),
          (0, a.Cg)([o.o], h.prototype, "onScrollStopTimeout", null);
      },
      6185: (e, t, n) => {
        n.d(t, { l: () => o });
        var a = n(6540);
        let i = 0;
        function o() {
          const e = a.useRef(void 0);
          return (
            void 0 === e.current && (e.current = "svgid_" + i++),
            [e.current, `url(#${e.current})`]
          );
        }
      },
      9383: (e, t, n) => {
        n.d(t, {
          CL: () => P,
          JP: () => a,
          JQ: () => k,
          P9: () => R,
          gU: () => C,
          sj: () => b,
        });
        var a,
          i = n(1635),
          o = n(7813),
          s = n(296),
          r = n(6090),
          l = n(6540),
          u = n(3606),
          h = n(921),
          d = n(7727),
          m = n(3779),
          g = n(1651),
          c = n(9961),
          p = n(776),
          y = n(4007),
          _ = n(2741),
          v = n(1391),
          f = n(3676),
          S = n(1333);
        !(function (e) {
          (e[(e.Alive = 0)] = "Alive"), (e[(e.Destroyed = 1)] = "Destroyed");
        })(a || (a = {}));
        class b {
          get OnDestroyed() {
            return this.m_OnDestroyed;
          }
          get frame() {
            return this.m_Frame;
          }
          get pageID() {
            return this.m_unPageID;
          }
          get state() {
            return this.m_eState;
          }
          get summonOverlayKey() {
            return this.m_sSummonOverlayKey;
          }
          get isExternalDashboardOverlay() {
            return !!this.m_bExternalDashboardOverlay;
          }
          get isActivePage() {
            return this.m_Frame.activePageID === this.m_unPageID;
          }
          get isActiveAndVisiblePage() {
            return this.isActivePage && this.frame.isCurrentlyVisible;
          }
          get mountableID() {
            return `frame:${this.frame.frameID}:page:${this.pageID}:mountable`;
          }
          get latestContentSize() {
            return this.size.latestContentSize;
          }
          get logPrefix() {
            let e = this.frame.title;
            return (
              e.length > _.kr && (e = e.substring(0, _.kr - 3) + "..."),
              `${this.frame.frameID}[${this.pageID}] "${e}"`
            );
          }
          RegisterComponent(e) {
            this.m_setComponents.add(e);
          }
          constructor(e, t, n) {
            (this.props = void 0),
              (this.m_eState = a.Alive),
              (this.m_OnDestroyed = new g.l()),
              (this.m_sSummonOverlayKey = void 0),
              (this.m_bExternalDashboardOverlay = !1),
              (this.m_mainPanel = void 0),
              (this.m_bSpatialize = void 0),
              (this.Log = new p.wd("Frame", () => this.logPrefix)),
              (this.m_setComponents = new Set()),
              (this.keyboard = new m.Y(this)),
              (this.sharing = void 0),
              (this.size = new c.wP(this)),
              (this.inputFocus = new v.v(this)),
              (this.m_Frame = e),
              (this.m_unPageID = t),
              (this.props = n),
              (0, o.makeObservable)(this);
          }
          Init() {
            for (const e of this.m_setComponents) e.Init();
          }
          DestroyPage() {
            this.m_eState != a.Destroyed &&
              ((this.m_eState = a.Destroyed),
              this.m_OnDestroyed.Dispatch(),
              this.m_OnDestroyed.ClearAllCallbacks());
          }
          SetSummonOverlayKey(e) {
            this.m_sSummonOverlayKey = e;
          }
          SetIsExternalDashboardOverlay(e) {
            this.m_bExternalDashboardOverlay = e;
          }
          SetMainPanel(e) {
            if (!e) return { Unset: () => {} };
            this.m_mainPanel = e;
            const t = this.size.SetMainPanel(e).Unset;
            return {
              Unset: () => {
                (this.m_mainPanel = void 0), t();
              },
            };
          }
          get mainPanelID() {
            if (this.m_mainPanel) {
              const e = this.m_mainPanel.getID();
              if (null == e) return;
              return (0, r.nXw)(u.C6, e);
            }
            if (this.isExternalDashboardOverlay) {
              if (null == this.summonOverlayKey) return;
              return (0, r.nXw)(u.cb, this.summonOverlayKey) + "_Panel";
            }
          }
          get mainPanelSGID() {
            var e;
            return this.m_mainPanel
              ? this.m_mainPanel.getSGID()
              : (this.isExternalDashboardOverlay &&
                  null != this.summonOverlayKey &&
                  (null === (e = y.Q.GetOverlayInfo(this.summonOverlayKey)) ||
                  void 0 === e
                    ? void 0
                    : e.unStandalonePanelSGID)) ||
                  void 0;
          }
          GetPanelAnchorID(e) {
            if (!this.isExternalDashboardOverlay)
              return `frame:${this.frame.frameID}:page:${this.pageID}:anchor:${e}`;
            {
              if (null == this.summonOverlayKey) return;
              const t = (0, r.nXw)(u.cb, this.summonOverlayKey);
              switch (e) {
                case r.OiK.TopCenter:
                  return t + "_TopCenter";
                case r.OiK.CenterLeft:
                  return t + "_CenterLeft";
                case r.OiK.CenterRight:
                  return t + "_CenterRight";
                case r.OiK.BottomCenter:
                  return t + "_BottomCenter";
                case r.OiK.BottomRight:
                  return t + "_BottomRight";
              }
            }
          }
          get isSystemPanel() {
            return (
              this.inputFocus.componentProps.steamInputAppID == u.qx ||
              (0, f.n)(this.inputFocus.componentProps.steamInputAppID) ||
              (this.m_mainPanel && !this.m_mainPanel.isExternal)
            );
          }
          get shouldShowMinimalDecorations() {
            return (
              null != this.summonOverlayKey &&
              y.Q.GetOverlayFlag(this.summonOverlayKey, 67108864)
            );
          }
          get canSpatialize() {
            var e, t;
            return (
              !!(null === (e = S.HR.audioDevices) || void 0 === e
                ? void 0
                : e.spatialize) &&
              ((null === (t = this.summonOverlayKey) || void 0 === t
                ? void 0
                : t.startsWith(u.bl + ".")) ||
                this.summonOverlayKey == u.P)
            );
          }
          get isSpatializeEnabled() {
            return (
              !!this.summonOverlayKey &&
              !!this.canSpatialize &&
              (null == this.m_bSpatialize &&
                ((this.m_bSpatialize = !1),
                S.HR.GetAppSettings(this.summonOverlayKey).then(
                  (e) => (this.m_bSpatialize = e.spatialize),
                )),
              this.m_bSpatialize)
            );
          }
          SetSpatializeEnabled(e) {
            if (!this.summonOverlayKey) return;
            this.m_bSpatialize = e;
            let t = {};
            (t.spatialize = e), S.HR.SetAppSettings(this.summonOverlayKey, t);
          }
        }
        (0, i.Cg)([o.observable], b.prototype, "props", void 0),
          (0, i.Cg)([o.observable], b.prototype, "m_eState", void 0),
          (0, i.Cg)([o.observable], b.prototype, "m_sSummonOverlayKey", void 0),
          (0, i.Cg)(
            [o.observable],
            b.prototype,
            "m_bExternalDashboardOverlay",
            void 0,
          ),
          (0, i.Cg)([o.observable], b.prototype, "m_mainPanel", void 0),
          (0, i.Cg)([o.observable], b.prototype, "m_bSpatialize", void 0),
          (0, i.Cg)([o.computed], b.prototype, "state", null),
          (0, i.Cg)([o.computed], b.prototype, "summonOverlayKey", null),
          (0, i.Cg)(
            [o.computed],
            b.prototype,
            "isExternalDashboardOverlay",
            null,
          ),
          (0, i.Cg)([o.computed], b.prototype, "isActivePage", null),
          (0, i.Cg)([o.computed], b.prototype, "isActiveAndVisiblePage", null),
          (0, i.Cg)([o.computed], b.prototype, "mountableID", null),
          (0, i.Cg)([o.computed], b.prototype, "latestContentSize", null),
          (0, i.Cg)([o.computed], b.prototype, "logPrefix", null),
          (0, i.Cg)([o.action], b.prototype, "DestroyPage", null),
          (0, i.Cg)([o.action], b.prototype, "SetSummonOverlayKey", null),
          (0, i.Cg)(
            [o.action],
            b.prototype,
            "SetIsExternalDashboardOverlay",
            null,
          ),
          (0, i.Cg)([o.action], b.prototype, "SetMainPanel", null),
          (0, i.Cg)([o.computed], b.prototype, "mainPanelID", null),
          (0, i.Cg)([o.computed], b.prototype, "mainPanelSGID", null),
          (0, i.Cg)([o.computed], b.prototype, "isSystemPanel", null),
          (0, i.Cg)(
            [o.computed],
            b.prototype,
            "shouldShowMinimalDecorations",
            null,
          ),
          (0, i.Cg)([o.computed], b.prototype, "canSpatialize", null),
          (0, i.Cg)([o.computed], b.prototype, "isSpatializeEnabled", null),
          (0, i.Cg)(
            [o.action.bound],
            b.prototype,
            "SetSpatializeEnabled",
            null,
          );
        const R = l.forwardRef(function (e, t) {
            const { children: n, summonOverlayKey: a } = e,
              { frame: i } = (0, d.N)(),
              u = l.useMemo(() => i.CreatePage(e), [i]);
            l.useLayoutEffect(() =>
              (0, o.runInAction)(() => {
                u.props = e;
              }),
            ),
              l.useEffect(() => u.SetSummonOverlayKey(a), [u, i, a]),
              (0, h.D5)(t, u),
              l.useEffect(() => (u.Init(), () => u.DestroyPage()), [u]);
            const m = (0, s.q3)(() => u.mountableID);
            return l.createElement(
              d.t.Provider,
              { value: { frame: i, page: u } },
              l.createElement(r.IS7, { id: m }, n),
            );
          }),
          k = l.forwardRef(function (e, t) {
            var n, a;
            const {
                requireExternalOverlay: o = !0,
                overlayKey: m,
                componentProps: g,
              } = e,
              c = (0, i.Tt)(e, [
                "requireExternalOverlay",
                "overlayKey",
                "componentProps",
              ]),
              { frame: p } = (0, d.N)(),
              _ = l.useCallback(
                (e) => {
                  null == e || e.SetIsExternalDashboardOverlay(!0),
                    (0, h.cZ)(t, e);
                },
                [t],
              ),
              v = (0, s.q3)(() => p.curvature.curvatureTransformOriginID),
              f = (0, s.q3)(() => y.Q.GetOverlayInfo(m)),
              S =
                null !== (n = null == f ? void 0 : f.unFlags) && void 0 !== n
                  ? n
                  : 0,
              b = (16 & S) > 0,
              k = (1073741824 & S) > 0;
            return o && !f
              ? null
              : l.createElement(
                  R,
                  Object.assign({}, c, {
                    summonOverlayKey:
                      null !== (a = e.summonOverlayKey) && void 0 !== a ? a : m,
                    ref: _,
                    componentProps: Object.assign(Object.assign({}, g), {
                      keyboard: Object.assign(
                        { overlayKeyForKeyboardInput: m },
                        null == g ? void 0 : g.keyboard,
                      ),
                      inputFocus: Object.assign(
                        {
                          vrClientPID: b ? f.unClientPID : void 0,
                          steamInputAppID: k ? f.unSteamInputAppID : void 0,
                        },
                        null == g ? void 0 : g.inputFocus,
                      ),
                    }),
                  }),
                  l.createElement(r.HWh, { mountedId: (0, r.nXw)(u.cb, m) }),
                  l.createElement(r.dLy, {
                    id: (0, r.nXw)(u.cb, m) + "_CurvatureOrigin",
                    parent_id: v,
                  }),
                  c.children,
                );
          });
        function P(e) {
          const { page: t } = (0, d.N)();
          if ((0, s.q3)(() => (null == t ? void 0 : t.isActiveAndVisiblePage)))
            return l.createElement(l.Fragment, null, e.children);
        }
        function C(e) {
          const { frame: t, page: n } = (0, d.N)();
          if (t && n && !n.isExternalDashboardOverlay)
            return l.createElement(
              l.Fragment,
              null,
              _.i_.map((e) =>
                l.createElement(r.Ci8, {
                  key: e,
                  id: n.GetPanelAnchorID(e),
                  location: e,
                }),
              ),
            );
        }
      },
      2741: (e, t, n) => {
        n.d(t, { VB: () => o, gp: () => r, i_: () => s, kr: () => i });
        var a = n(6090);
        const i = 20,
          o = [
            "Steam",
            "Desktop",
            "Desktop 1",
            "Desktop 2",
            "Desktop 3",
            "Now Playing",
            "Old Library",
            "Library",
            "Settings",
          ],
          s = [
            a.OiK.TopCenter,
            a.OiK.CenterLeft,
            a.OiK.CenterRight,
            a.OiK.BottomCenter,
            a.OiK.BottomRight,
          ];
        function r(e, t) {
          return !!e && !!t && e.frameID === t.frameID;
        }
      },
      7558: (e, t, n) => {
        var a = n(1635),
          i = n(6540),
          o = n(5338),
          s = n(2505),
          r = n.n(s),
          l = n(3236),
          u = n(6090),
          h = n(3714),
          d = n(1333),
          m = n(9118),
          g = n(1532),
          c = n(6138),
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
                inputMode: u.XlW.Normal,
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
                bMinimalMode: !!(u.QRg.Minimal & e.keyboardFlags),
                bMultilinePreview: e.lineMode == u.ba0.MultipleLines,
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
            return this.state.inputMode == u.XlW.Password;
          }
          getLayoutFile(e) {
            return (0, a.sH)(this, void 0, void 0, function* () {
              let t = `/dashboard/keyboards/layout_${e}_${this.state.presentation}.json`;
              return r()
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
                "string" == typeof t && t.startsWith("#") && (t = (0, h.we)(t)),
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
                let o = n.keys[e],
                  s = {};
                o.flexGrow && (s.flexGrow = o.flexGrow),
                  o.flexShrink && (s.flexShrink = o.flexShrink),
                  this.state.shiftPlaneName == o.type &&
                    (s.background = "#000"),
                  this.state.activeKey.nCol == e &&
                    this.state.activeKey.nRow == t &&
                    (s.background = "#000");
                let r = this.getKeyFaces(t, e),
                  l = () => {
                    "done" == o.type && this.onKey(t, e);
                  },
                  u = () => {
                    "done" != o.type &&
                      (this.setState({ activeKey: { nRow: t, nCol: e } }),
                      this.onKey(t, e));
                  },
                  h = () => {
                    "done" != o.type &&
                      this.setState({ activeKey: { nRow: -1, nCol: -1 } });
                  };
                a.push(
                  i.createElement(
                    c.$,
                    {
                      key: this.genid(),
                      className: "VRKBKey",
                      releaseSoundEffect: null,
                      onClick: l,
                      onMouseDown: u,
                      onMouseUp: h,
                      style: s,
                    },
                    r,
                  ),
                );
              }
              let o = {};
              n.height && (o.height = n.height),
                e.push(
                  i.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBRow", style: o },
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
              u.dLy,
              { parent_path: "/user/head" },
              i.createElement(
                u.m$_,
                null,
                i.createElement(
                  u.dLy,
                  { translation: this.state.layout.translation },
                  i.createElement(
                    u.Zkm,
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
          (0, a.Cg)([l.o], _.prototype, "onKeyboardInfoChanged", null),
          (0, a.Cg)([l.o], _.prototype, "handleKey", null),
          (0, a.Cg)([l.o], _.prototype, "handleReturn", null),
          (0, a.Cg)([l.o], _.prototype, "handleDel", null),
          (0, a.Cg)([l.o], _.prototype, "handleShift", null),
          (0, a.Cg)([l.o], _.prototype, "handleSymbols", null),
          (0, a.Cg)([l.o], _.prototype, "handleDone", null),
          (0, a.Cg)([l.o], _.prototype, "handleCancel", null),
          (0, a.Cg)([l.o], _.prototype, "handleClear", null),
          (0, a.Cg)([l.o], _.prototype, "handleSuggestionClick", null);
        const v =
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamLanguage();
        null === VRHTML ||
          void 0 === VRHTML ||
          VRHTML.VROverlay.SetInputMethod(
            VRHTML.VROverlay.ThisOverlayHandle(),
            u.RkM.Mouse,
          ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRDashboardManager.SetKeyboardOverlayToThis(),
          (0, h.uV)(["systemui"], v)
            .then(() => m.W.Init())
            .then(() => g.s.Init())
            .then(() => {
              (0, y.aj)().Init("SteamVR", CLSTAMP, (0, y.d4)()),
                o
                  .H(document.getElementById("root"))
                  .render(i.createElement(_, { language: v }));
            });
      },
    },
    n = {};
  function a(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var o = (n[e] = { exports: {} });
    return t[e].call(o.exports, o, o.exports, a), o.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, n, i, o) => {
      if (!n) {
        var s = 1 / 0;
        for (h = 0; h < e.length; h++) {
          for (var [n, i, o] = e[h], r = !0, l = 0; l < n.length; l++)
            (!1 & o || s >= o) && Object.keys(a.O).every((e) => a.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((r = !1), o < s && (s = o));
          if (r) {
            e.splice(h--, 1);
            var u = i();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      o = o || 0;
      for (var h = e.length; h > 0 && e[h - 1][2] > o; h--) e[h] = e[h - 1];
      e[h] = [n, i, o];
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
            o,
            [s, r, l] = n,
            u = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (i in r) a.o(r, i) && (a.m[i] = r[i]);
            if (l) var h = l(a);
          }
          for (t && t(n); u < s.length; u++)
            (o = s[u]), a.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return a.O(h);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var i = a.O(
    void 0,
    [967, 991, 264, 305, 527, 170, 452, 797, 554, 500, 458],
    () => a(7558),
  );
  i = a.O(i);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/keyboard.js.map
