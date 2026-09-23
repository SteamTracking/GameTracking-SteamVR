var CLSTAMP = "11023671";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [838],
  {
    5178: (e, t, n) => {
      n.d(t, { O: () => m });
      var a = n(1635),
        i = n(6540),
        r = n(7019),
        s = n(3236),
        o = n(5723);
      const l = new (n(776).wd)("EmbeddedPixels");
      var d;
      !(function (e) {
        (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
      })(d || (d = {}));
      class m extends i.Component {
        static get IsSceneGraphApp() {
          return null !== m.Current();
        }
        static Current() {
          return m.s_Current;
        }
        constructor(e) {
          var t;
          super(e),
            (this.m_DomRef = null),
            (this.m_scalingDomRef = null),
            (this.m_DebugPointerRef = null),
            (this.m_Observer = null),
            (this.m_nEmbeddedDataWidth = 0),
            (this.m_mapPanels = new Map()),
            (this.m_rAvailableEmbeddedIndicesQueue = []),
            (this.m_rEmbeddedIndicesToClear = []),
            (this.m_fCurrentScale = 1),
            (this.m_CanvasRef = null),
            (this.m_CanvasContext = null),
            (this.m_Pixels = null),
            (this.m_nDirtyXMin = -1),
            (this.m_nDirtyXMax = -1),
            (this.m_EmbeddedDataImgRef = null),
            (this.m_EmbeddedDataImgRGBBuffer = null),
            (m.s_Current = this),
            (this.state = {
              bFontsLoaded: !1,
              nForcedUpdateNumber: 0,
              bShowDebugPointer: !1,
              eRenderMode: (
                null === (t = VRHTML.VRUtil) || void 0 === t
                  ? void 0
                  : t.BSupportsCEFCanvas()
              )
                ? d.Canvas
                : d.Image,
            }),
            (this.m_DomRef = i.createRef()),
            (this.m_scalingDomRef = i.createRef()),
            (this.m_CanvasRef = i.createRef()),
            (this.m_EmbeddedDataImgRef = i.createRef()),
            (this.m_DebugPointerRef = i.createRef());
        }
        toggleDebugPointer() {
          this.setState({ bShowDebugPointer: !this.state.bShowDebugPointer });
        }
        onMouseMove(e) {
          this.state.bShowDebugPointer &&
            this.m_DebugPointerRef.current &&
            (this.m_DebugPointerRef.current.style.transform =
              "translateX( " +
              e.clientX +
              "px ) translateY( " +
              e.clientY +
              "px )");
        }
        forceLayoutUpdate() {
          (r.Zk.s_bPanelsAreDirty = !0),
            this.setState({
              nForcedUpdateNumber: this.state.nForcedUpdateNumber + 1,
            });
        }
        componentDidMount() {
          let e = this.m_DomRef.current.ownerDocument,
            t = e.defaultView;
          e.body.classList.add("SGApp"),
            document.documentElement.classList.add("VROverlay"),
            (window.SGApp = this),
            (this.m_nEmbeddedDataWidth = t.innerWidth);
          let n = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
          for (let e = 0; e < n; e++)
            this.m_rAvailableEmbeddedIndicesQueue.push(e);
          e.addEventListener("mousemove", this.onMouseMove),
            (this.m_Observer = new MutationObserver(this.onMutation)),
            this.m_Observer.observe(this.m_DomRef.current, {
              attributes: !0,
              attributeFilter: ["sg-forced-update-number", "overlay-key"],
              childList: !0,
              subtree: !0,
            }),
            this.createEmbeddedData(),
            t.addEventListener("load", this.forceLayoutUpdate),
            e.fonts.ready.then(() => this.setState({ bFontsLoaded: !0 })),
            (t.forceLayoutUpdate = this.forceLayoutUpdate),
            (t.toggleDebugPointer = this.toggleDebugPointer),
            (this.props.owning_overlay_key || this.props.web_secret) &&
              (0, o.Oe)(
                this.props.owning_overlay_key,
                this.m_DomRef.current,
                this.props.web_secret,
              );
        }
        componentWillUnmount() {
          let e = this.m_DomRef.current.ownerDocument;
          e.body.classList.remove("SGApp"),
            document.documentElement.classList.remove("VROverlay"),
            this.m_Observer && this.m_Observer.disconnect(),
            e.removeEventListener("mousemove", this.onMouseMove);
        }
        render() {
          const e = this.state.eRenderMode == d.Image,
            t = this.state.eRenderMode == d.Canvas;
          let n = [];
          return (
            this.state.bShowDebugPointer && n.push("ShowDebugPointer"),
            i.createElement(
              "vsg-app",
              {
                class: n.join(" "),
                ref: this.m_DomRef,
                "sg-forced-update-number": this.state.nForcedUpdateNumber,
              },
              i.createElement("div", {
                className: "DebugPointer",
                ref: this.m_DebugPointerRef,
              }),
              e &&
                i.createElement("img", {
                  ref: this.m_EmbeddedDataImgRef,
                  className: "EmbeddedData",
                  height: m.k_EmbeddedDataRows,
                }),
              t &&
                i.createElement("canvas", {
                  ref: this.m_CanvasRef,
                  className: "EmbeddedData",
                  height: m.k_EmbeddedDataRows,
                }),
              i.createElement(
                "div",
                { className: "AppSceneGraph", ref: this.m_scalingDomRef },
                this.state.bFontsLoaded && this.props.children,
              ),
            )
          );
        }
        addEmbeddedPanelUVs(e) {
          if (0 !== this.m_rAvailableEmbeddedIndicesQueue.length)
            return (
              this.m_mapPanels.set(e.getSGID(), e),
              this.m_rAvailableEmbeddedIndicesQueue.shift()
            );
        }
        removeEmbeddedPanelUVs(e) {
          if (!this.m_mapPanels.has(e.getSGID())) return;
          this.m_mapPanels.delete(e.getSGID());
          const t = e.getEmbeddedIndex();
          null != t &&
            (this.m_rAvailableEmbeddedIndicesQueue.push(t),
            this.m_rEmbeddedIndicesToClear.push(t));
        }
        onMutation(e, t) {
          this.updateAllPanelBounds();
        }
        createEmbeddedData() {
          var e;
          this.state.eRenderMode == d.Image
            ? ((this.m_EmbeddedDataImgRef.current.width =
                this.m_nEmbeddedDataWidth),
              this.m_EmbeddedDataImgRGBBuffer ||
                (this.m_EmbeddedDataImgRGBBuffer =
                  null === (e = VRHTML.VRUtil) || void 0 === e
                    ? void 0
                    : e.CreateEmbeddedRGBScanline(
                        this.m_nEmbeddedDataWidth,
                        1,
                        4,
                      )))
            : this.state.eRenderMode == d.Canvas &&
              ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
              (this.m_CanvasContext =
                this.m_CanvasRef.current.getContext("2d")),
              null != this.m_CanvasContext &&
                ((this.m_CanvasContext.globalCompositeOperation = "copy"),
                (this.m_CanvasContext.imageSmoothingEnabled = !1),
                null === this.m_Pixels &&
                  (this.m_Pixels = this.m_CanvasContext.createImageData(
                    this.m_nEmbeddedDataWidth,
                    m.k_EmbeddedDataRows,
                  )))),
            this.updateAllPanelBounds();
        }
        updateAllPanelBounds() {
          let e = this.m_DomRef.current.ownerDocument.defaultView,
            t = this.m_scalingDomRef.current.getBoundingClientRect(),
            n = t.width / this.m_fCurrentScale,
            a = t.height / this.m_fCurrentScale,
            i = { x: e.innerWidth / n, y: e.innerHeight / a },
            s = Math.min(i.x, i.y, 1);
          s != this.m_fCurrentScale &&
            (1 != s
              ? this.m_scalingDomRef.current.setAttribute(
                  "style",
                  "transform: scale(" + s + "); transform-origin: top left",
                )
              : this.m_scalingDomRef.current.removeAttribute("style"),
            (this.m_fCurrentScale = s),
            (r.Zk.s_bPanelsAreDirty = !0)),
            r.Zk.s_bPanelsAreDirty &&
              (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
              (0, o.my)(),
              (r.Zk.s_bPanelsAreDirty = !1),
              this.updateEmbeddedData());
        }
        updateEmbeddedData() {
          var e;
          if (this.m_EmbeddedDataImgRef || this.m_CanvasRef)
            if (
              (this.setPixel(
                0,
                "V".charCodeAt(0),
                "S".charCodeAt(0),
                "G".charCodeAt(0),
              ),
              this.m_rEmbeddedIndicesToClear.forEach((e) => {
                let t = 1 + 3 * e;
                for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0);
              }),
              (this.m_rEmbeddedIndicesToClear = []),
              l.Debug("UPDATE EMBEDDED DATA ------------------"),
              this.m_mapPanels.forEach((e, t) => {
                const n = e.m_Rect.x,
                  a = e.m_Rect.x + e.m_Rect.width,
                  i = e.m_Rect.y,
                  r = e.m_Rect.y + e.m_Rect.height,
                  s = e.getEmbeddedIndex();
                if (null == s) return;
                const o = 1 + 3 * s;
                let d = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  m = !1;
                if (e.isExternal || n >= a || i >= r)
                  for (let e = 0; e < 3; e++) this.setPixel(o + 1, 0, 0, 0, 0);
                else
                  (m = !0),
                    (d[0] = (65280 & n) >> 8),
                    (d[1] = 255 & n),
                    (d[2] = 254),
                    (d[3] = (65280 & a) >> 8),
                    (d[4] = 255 & a),
                    (d[5] = 255 & i),
                    (d[6] = (65280 & r) >> 8),
                    (d[7] = 255 & r),
                    (d[8] = (65280 & i) >> 8),
                    this.setPixel(o, d[0], d[1], d[2]),
                    this.setPixel(o + 1, d[3], d[4], d[5]),
                    this.setPixel(o + 2, d[6], d[7], d[8]);
                l.Debug(
                  "panel",
                  m ? "" : "XX",
                  e.props.debug_name,
                  "uvs",
                  n,
                  i,
                  a,
                  r,
                  "nPixelOffset",
                  o,
                  "emIdx",
                  s,
                  d,
                  e.getCurrentRootElement(),
                );
              }),
              this.m_EmbeddedDataImgRef && this.state.eRenderMode == d.Image)
            ) {
              const t =
                null ===
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRUtil) || void 0 === e
                  ? void 0
                  : e.GetEmbeddedScanlineAsURIImage(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4,
                    );
              null != t && (this.m_EmbeddedDataImgRef.current.src = t);
            } else if (this.m_CanvasRef && this.state.eRenderMode == d.Canvas) {
              let e = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
              this.m_CanvasContext.putImageData(
                this.m_Pixels,
                0,
                0,
                this.m_nDirtyXMin,
                0,
                e,
                this.m_Pixels.height,
              ),
                (this.m_nDirtyXMin = -1),
                (this.m_nDirtyXMax = -1);
            }
        }
        setPixel(e, t, n, a, i = 255) {
          if (
            this.m_EmbeddedDataImgRGBBuffer &&
            this.state.eRenderMode == d.Image
          ) {
            const r = new DataView(this.m_EmbeddedDataImgRGBBuffer);
            r.setUint8(4 * e + 0, t),
              r.setUint8(4 * e + 1, n),
              r.setUint8(4 * e + 2, a),
              r.setUint8(4 * e + 3, i);
          } else
            this.m_Pixels &&
              this.state.eRenderMode == d.Canvas &&
              ((this.m_Pixels.data[4 * e + 0] = t),
              (this.m_Pixels.data[4 * e + 1] = n),
              (this.m_Pixels.data[4 * e + 2] = a),
              (this.m_Pixels.data[4 * e + 3] = i),
              (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                (this.m_nDirtyXMin = e),
              (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                (this.m_nDirtyXMax = e));
        }
      }
      (m.s_Current = null),
        (m.k_EmbeddedDataRows = 1),
        (0, a.Cg)([s.o], m.prototype, "toggleDebugPointer", null),
        (0, a.Cg)([s.o], m.prototype, "onMouseMove", null),
        (0, a.Cg)([s.o], m.prototype, "forceLayoutUpdate", null),
        (0, a.Cg)([s.o], m.prototype, "onMutation", null);
    },
    3725: (e, t, n) => {
      var a, i, r, s;
      function o() {
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
        GQ: () => A,
        Gz: () => d,
        HW: () => v,
        Il: () => u,
        Kl: () => R,
        MV: () => r,
        OH: () => a,
        Op: () => k,
        R$: () => o,
        Rk: () => p,
        Xl: () => b,
        _1: () => M,
        _E: () => l,
        aq: () => f,
        b: () => D,
        gN: () => C,
        k2: () => E,
        kG: () => S,
        ku: () => c,
        mo: () => g,
        mu: () => s,
        ne: () => m,
        pM: () => i,
        rx: () => O,
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
        })(r || (r = {})),
        (function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
        })(s || (s = {}));
      let l = 0,
        d = 0,
        m = 4294967295;
      var u, h, c, p, g, _, v, y, f, b, D, R, C, S, P, E, O, I, M, w, A;
      function k(e) {
        let t = u.None;
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
      })(u || (u = {})),
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
        })(h || (h = {})),
        (function (e) {
          (e[(e.Activated = 0)] = "Activated"),
            (e[(e.Deactivated = 1)] = "Deactivated");
        })(c || (c = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
        })(p || (p = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.HMD = 1)] = "HMD"),
            (e[(e.Controller = 2)] = "Controller"),
            (e[(e.GenericTracker = 3)] = "GenericTracker"),
            (e[(e.TrackingReference = 4)] = "TrackingReference"),
            (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
        })(g || (g = {})),
        (function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.NVIDIA = 1)] = "NVIDIA"),
            (e[(e.AMD = 2)] = "AMD");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Starting = 1)] = "Starting"),
            (e[(e.Quitting = 2)] = "Quitting"),
            (e[(e.Running = 3)] = "Running"),
            (e[(e.Waiting = 4)] = "Waiting");
        })(v || (v = {})),
        (function (e) {
          (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
            (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
            (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
            (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
            (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
            (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
              "CouldntFindOrCreateClientOverlay"),
            (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
        })(y || (y = {})),
        (function (e) {
          (e[(e.Accept = 0)] = "Accept"), (e[(e.Back = 1)] = "Back");
        })(f || (f = {})),
        (function (e) {
          (e[(e.Normal = 0)] = "Normal"),
            (e[(e.Password = 1)] = "Password"),
            (e[(e.Submit = 2)] = "Submit");
        })(b || (b = {})),
        (function (e) {
          (e[(e.SingleLine = 0)] = "SingleLine"),
            (e[(e.MultipleLines = 1)] = "MultipleLines");
        })(D || (D = {})),
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
        })(C || (C = {})),
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
        })(S || (S = {})),
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
        })(P || (P = {})),
        (function (e) {
          e[(e.Hostname = 0)] = "Hostname";
        })(E || (E = {})),
        (function (e) {
          (e[(e.Unavailable = 0)] = "Unavailable"),
            (e[(e.Active = 1)] = "Active"),
            (e[(e.Off = 2)] = "Off");
        })(O || (O = {})),
        (function (e) {
          (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
        })(I || (I = {})),
        (function (e) {
          (e[(e.Inactive = 0)] = "Inactive"),
            (e[(e.PendingReset = 1)] = "PendingReset"),
            (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
            (e[(e.Default = 3)] = "Default"),
            (e[(e.CV = 4)] = "CV"),
            (e[(e.Manual = 5)] = "Manual");
        })(M || (M = {})),
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
        })(w || (w = {})),
        (function (e) {
          (e[(e.Small = 0)] = "Small"),
            (e[(e.Medium = 1)] = "Medium"),
            (e[(e.Large = 2)] = "Large"),
            (e[(e.Gigantic = 3)] = "Gigantic"),
            (e[(e.Standing = 4)] = "Standing");
        })(A || (A = {}));
    },
    6185: (e, t, n) => {
      n.d(t, { l: () => r });
      var a = n(6540);
      let i = 0;
      function r() {
        const e = a.useRef(void 0);
        return (
          void 0 === e.current && (e.current = "svgid_" + i++),
          [e.current, `url(#${e.current})`]
        );
      }
    },
    9383: (e, t, n) => {
      n.d(t, {
        CL: () => S,
        JP: () => a,
        JQ: () => C,
        P9: () => R,
        gU: () => P,
        sj: () => D,
      });
      var a,
        i = n(1635),
        r = n(7813),
        s = n(296),
        o = n(6090),
        l = n(6540),
        d = n(3606),
        m = n(921),
        u = n(7727),
        h = n(3779),
        c = n(1651),
        p = n(9961),
        g = n(776),
        _ = n(4007),
        v = n(2741),
        y = n(1391),
        f = n(3676),
        b = n(1333);
      !(function (e) {
        (e[(e.Alive = 0)] = "Alive"), (e[(e.Destroyed = 1)] = "Destroyed");
      })(a || (a = {}));
      class D {
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
            e.length > v.kr && (e = e.substring(0, v.kr - 3) + "..."),
            `${this.frame.frameID}[${this.pageID}] "${e}"`
          );
        }
        RegisterComponent(e) {
          this.m_setComponents.add(e);
        }
        constructor(e, t, n) {
          (this.props = void 0),
            (this.m_eState = a.Alive),
            (this.m_OnDestroyed = new c.l()),
            (this.m_sSummonOverlayKey = void 0),
            (this.m_bExternalDashboardOverlay = !1),
            (this.m_mainPanel = void 0),
            (this.m_bSpatialize = void 0),
            (this.Log = new g.wd("Frame", () => this.logPrefix)),
            (this.m_setComponents = new Set()),
            (this.keyboard = new h.Y(this)),
            (this.sharing = void 0),
            (this.size = new p.wP(this)),
            (this.inputFocus = new y.v(this)),
            (this.m_Frame = e),
            (this.m_unPageID = t),
            (this.props = n),
            (0, r.makeObservable)(this);
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
            return (0, o.nXw)(d.C6, e);
          }
          if (this.isExternalDashboardOverlay) {
            if (null == this.summonOverlayKey) return;
            return (0, o.nXw)(d.cb, this.summonOverlayKey) + "_Panel";
          }
        }
        get mainPanelSGID() {
          var e;
          return this.m_mainPanel
            ? this.m_mainPanel.getSGID()
            : (this.isExternalDashboardOverlay &&
                null != this.summonOverlayKey &&
                (null === (e = _.Q.GetOverlayInfo(this.summonOverlayKey)) ||
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
            const t = (0, o.nXw)(d.cb, this.summonOverlayKey);
            switch (e) {
              case o.OiK.TopCenter:
                return t + "_TopCenter";
              case o.OiK.CenterLeft:
                return t + "_CenterLeft";
              case o.OiK.CenterRight:
                return t + "_CenterRight";
              case o.OiK.BottomCenter:
                return t + "_BottomCenter";
              case o.OiK.BottomRight:
                return t + "_BottomRight";
            }
          }
        }
        get isSystemPanel() {
          return (
            this.inputFocus.componentProps.steamInputAppID == d.qx ||
            (0, f.n)(this.inputFocus.componentProps.steamInputAppID) ||
            (this.m_mainPanel && !this.m_mainPanel.isExternal)
          );
        }
        get shouldShowMinimalDecorations() {
          return (
            null != this.summonOverlayKey &&
            _.Q.GetOverlayFlag(this.summonOverlayKey, 67108864)
          );
        }
        get canSpatialize() {
          var e, t;
          return (
            !!(null === (e = b.HR.audioDevices) || void 0 === e
              ? void 0
              : e.spatialize) &&
            ((null === (t = this.summonOverlayKey) || void 0 === t
              ? void 0
              : t.startsWith(d.bl + ".")) ||
              this.summonOverlayKey == d.P)
          );
        }
        get isSpatializeEnabled() {
          return (
            !!this.summonOverlayKey &&
            !!this.canSpatialize &&
            (null == this.m_bSpatialize &&
              ((this.m_bSpatialize = !1),
              b.HR.GetAppSettings(this.summonOverlayKey).then(
                (e) => (this.m_bSpatialize = e.spatialize),
              )),
            this.m_bSpatialize)
          );
        }
        SetSpatializeEnabled(e) {
          if (!this.summonOverlayKey) return;
          this.m_bSpatialize = e;
          let t = {};
          (t.spatialize = e), b.HR.SetAppSettings(this.summonOverlayKey, t);
        }
      }
      (0, i.Cg)([r.observable], D.prototype, "props", void 0),
        (0, i.Cg)([r.observable], D.prototype, "m_eState", void 0),
        (0, i.Cg)([r.observable], D.prototype, "m_sSummonOverlayKey", void 0),
        (0, i.Cg)(
          [r.observable],
          D.prototype,
          "m_bExternalDashboardOverlay",
          void 0,
        ),
        (0, i.Cg)([r.observable], D.prototype, "m_mainPanel", void 0),
        (0, i.Cg)([r.observable], D.prototype, "m_bSpatialize", void 0),
        (0, i.Cg)([r.computed], D.prototype, "state", null),
        (0, i.Cg)([r.computed], D.prototype, "summonOverlayKey", null),
        (0, i.Cg)(
          [r.computed],
          D.prototype,
          "isExternalDashboardOverlay",
          null,
        ),
        (0, i.Cg)([r.computed], D.prototype, "isActivePage", null),
        (0, i.Cg)([r.computed], D.prototype, "isActiveAndVisiblePage", null),
        (0, i.Cg)([r.computed], D.prototype, "mountableID", null),
        (0, i.Cg)([r.computed], D.prototype, "latestContentSize", null),
        (0, i.Cg)([r.computed], D.prototype, "logPrefix", null),
        (0, i.Cg)([r.action], D.prototype, "DestroyPage", null),
        (0, i.Cg)([r.action], D.prototype, "SetSummonOverlayKey", null),
        (0, i.Cg)(
          [r.action],
          D.prototype,
          "SetIsExternalDashboardOverlay",
          null,
        ),
        (0, i.Cg)([r.action], D.prototype, "SetMainPanel", null),
        (0, i.Cg)([r.computed], D.prototype, "mainPanelID", null),
        (0, i.Cg)([r.computed], D.prototype, "mainPanelSGID", null),
        (0, i.Cg)([r.computed], D.prototype, "isSystemPanel", null),
        (0, i.Cg)(
          [r.computed],
          D.prototype,
          "shouldShowMinimalDecorations",
          null,
        ),
        (0, i.Cg)([r.computed], D.prototype, "canSpatialize", null),
        (0, i.Cg)([r.computed], D.prototype, "isSpatializeEnabled", null),
        (0, i.Cg)([r.action.bound], D.prototype, "SetSpatializeEnabled", null);
      const R = l.forwardRef(function (e, t) {
          const { children: n, summonOverlayKey: a } = e,
            { frame: i } = (0, u.N)(),
            d = l.useMemo(() => i.CreatePage(e), [i]);
          l.useLayoutEffect(() =>
            (0, r.runInAction)(() => {
              d.props = e;
            }),
          ),
            l.useEffect(() => d.SetSummonOverlayKey(a), [d, i, a]),
            (0, m.D5)(t, d),
            l.useEffect(() => (d.Init(), () => d.DestroyPage()), [d]);
          const h = (0, s.q3)(() => d.mountableID);
          return l.createElement(
            u.t.Provider,
            { value: { frame: i, page: d } },
            l.createElement(o.IS7, { id: h }, n),
          );
        }),
        C = l.forwardRef(function (e, t) {
          var n, a;
          const {
              requireExternalOverlay: r = !0,
              overlayKey: h,
              componentProps: c,
            } = e,
            p = (0, i.Tt)(e, [
              "requireExternalOverlay",
              "overlayKey",
              "componentProps",
            ]),
            { frame: g } = (0, u.N)(),
            v = l.useCallback(
              (e) => {
                null == e || e.SetIsExternalDashboardOverlay(!0),
                  (0, m.cZ)(t, e);
              },
              [t],
            ),
            y = (0, s.q3)(() => g.curvature.curvatureTransformOriginID),
            f = (0, s.q3)(() => _.Q.GetOverlayInfo(h)),
            b =
              null !== (n = null == f ? void 0 : f.unFlags) && void 0 !== n
                ? n
                : 0,
            D = (16 & b) > 0,
            C = (1073741824 & b) > 0;
          return r && !f
            ? null
            : l.createElement(
                R,
                Object.assign({}, p, {
                  summonOverlayKey:
                    null !== (a = e.summonOverlayKey) && void 0 !== a ? a : h,
                  ref: v,
                  componentProps: Object.assign(Object.assign({}, c), {
                    keyboard: Object.assign(
                      { overlayKeyForKeyboardInput: h },
                      null == c ? void 0 : c.keyboard,
                    ),
                    inputFocus: Object.assign(
                      {
                        vrClientPID: D ? f.unClientPID : void 0,
                        steamInputAppID: C ? f.unSteamInputAppID : void 0,
                      },
                      null == c ? void 0 : c.inputFocus,
                    ),
                  }),
                }),
                l.createElement(o.HWh, { mountedId: (0, o.nXw)(d.cb, h) }),
                l.createElement(o.dLy, {
                  id: (0, o.nXw)(d.cb, h) + "_CurvatureOrigin",
                  parent_id: y,
                }),
                p.children,
              );
        });
      function S(e) {
        const { page: t } = (0, u.N)();
        if ((0, s.q3)(() => (null == t ? void 0 : t.isActiveAndVisiblePage)))
          return l.createElement(l.Fragment, null, e.children);
      }
      function P(e) {
        const { frame: t, page: n } = (0, u.N)();
        if (t && n && !n.isExternalDashboardOverlay)
          return l.createElement(
            l.Fragment,
            null,
            v.i_.map((e) =>
              l.createElement(o.Ci8, {
                key: e,
                id: n.GetPanelAnchorID(e),
                location: e,
              }),
            ),
          );
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~336cd93ad.js.map
