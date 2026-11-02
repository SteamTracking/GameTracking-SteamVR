var CLSTAMP = "11196359";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [838],
  {
    5178: (e, t, n) => {
      n.d(t, { O: () => m });
      var a = n(1635),
        i = n(6540),
        s = n(7019),
        r = n(3236),
        o = n(5723);
      const d = new (n(776).wd)("EmbeddedPixels");
      var l;
      !(function (e) {
        (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
      })(l || (l = {}));
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
                ? l.Canvas
                : l.Image,
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
          (s.Zk.s_bPanelsAreDirty = !0),
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
          const e = this.state.eRenderMode == l.Image,
            t = this.state.eRenderMode == l.Canvas;
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
          this.state.eRenderMode == l.Image
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
            : this.state.eRenderMode == l.Canvas &&
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
            r = Math.min(i.x, i.y, 1);
          r != this.m_fCurrentScale &&
            (1 != r
              ? this.m_scalingDomRef.current.setAttribute(
                  "style",
                  "transform: scale(" + r + "); transform-origin: top left",
                )
              : this.m_scalingDomRef.current.removeAttribute("style"),
            (this.m_fCurrentScale = r),
            (s.Zk.s_bPanelsAreDirty = !0)),
            s.Zk.s_bPanelsAreDirty &&
              (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
              (0, o.my)(),
              (s.Zk.s_bPanelsAreDirty = !1),
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
              d.Debug("UPDATE EMBEDDED DATA ------------------"),
              this.m_mapPanels.forEach((e, t) => {
                const n = e.m_Rect.x,
                  a = e.m_Rect.x + e.m_Rect.width,
                  i = e.m_Rect.y,
                  s = e.m_Rect.y + e.m_Rect.height,
                  r = e.getEmbeddedIndex();
                if (null == r) return;
                const o = 1 + 3 * r;
                let l = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  m = !1;
                if (e.isExternal || n >= a || i >= s)
                  for (let e = 0; e < 3; e++) this.setPixel(o + 1, 0, 0, 0, 0);
                else
                  (m = !0),
                    (l[0] = (65280 & n) >> 8),
                    (l[1] = 255 & n),
                    (l[2] = 254),
                    (l[3] = (65280 & a) >> 8),
                    (l[4] = 255 & a),
                    (l[5] = 255 & i),
                    (l[6] = (65280 & s) >> 8),
                    (l[7] = 255 & s),
                    (l[8] = (65280 & i) >> 8),
                    this.setPixel(o, l[0], l[1], l[2]),
                    this.setPixel(o + 1, l[3], l[4], l[5]),
                    this.setPixel(o + 2, l[6], l[7], l[8]);
                d.Debug(
                  "panel",
                  m ? "" : "XX",
                  e.props.debug_name,
                  "uvs",
                  n,
                  i,
                  a,
                  s,
                  "nPixelOffset",
                  o,
                  "emIdx",
                  r,
                  l,
                  e.getCurrentRootElement(),
                );
              }),
              this.m_EmbeddedDataImgRef && this.state.eRenderMode == l.Image)
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
            } else if (this.m_CanvasRef && this.state.eRenderMode == l.Canvas) {
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
            this.state.eRenderMode == l.Image
          ) {
            const s = new DataView(this.m_EmbeddedDataImgRGBBuffer);
            s.setUint8(4 * e + 0, t),
              s.setUint8(4 * e + 1, n),
              s.setUint8(4 * e + 2, a),
              s.setUint8(4 * e + 3, i);
          } else
            this.m_Pixels &&
              this.state.eRenderMode == l.Canvas &&
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
        (0, a.Cg)([r.o], m.prototype, "toggleDebugPointer", null),
        (0, a.Cg)([r.o], m.prototype, "onMouseMove", null),
        (0, a.Cg)([r.o], m.prototype, "forceLayoutUpdate", null),
        (0, a.Cg)([r.o], m.prototype, "onMutation", null);
    },
    3725: (e, t, n) => {
      var a, i, s, r;
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
        Gz: () => l,
        HW: () => f,
        Il: () => u,
        Kl: () => C,
        MV: () => s,
        OH: () => a,
        Op: () => T,
        R$: () => o,
        Rk: () => _,
        Xl: () => v,
        _1: () => w,
        _E: () => d,
        aq: () => b,
        b: () => D,
        gN: () => S,
        k2: () => y,
        kG: () => M,
        ku: () => h,
        mo: () => R,
        mu: () => r,
        ne: () => m,
        pM: () => i,
        rx: () => P,
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
        })(r || (r = {}));
      let d = 0,
        l = 0,
        m = 4294967295;
      var u, c, h, _, R, g, f, p, b, v, D, C, S, M, E, y, P, k, w, I, A;
      function T(e) {
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
        })(c || (c = {})),
        (function (e) {
          (e[(e.Activated = 0)] = "Activated"),
            (e[(e.Deactivated = 1)] = "Deactivated");
        })(h || (h = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.HMD = 1)] = "HMD"),
            (e[(e.Controller = 2)] = "Controller"),
            (e[(e.GenericTracker = 3)] = "GenericTracker"),
            (e[(e.TrackingReference = 4)] = "TrackingReference"),
            (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
        })(R || (R = {})),
        (function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.NVIDIA = 1)] = "NVIDIA"),
            (e[(e.AMD = 2)] = "AMD");
        })(g || (g = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Starting = 1)] = "Starting"),
            (e[(e.Quitting = 2)] = "Quitting"),
            (e[(e.Running = 3)] = "Running"),
            (e[(e.Waiting = 4)] = "Waiting");
        })(f || (f = {})),
        (function (e) {
          (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
            (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
            (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
            (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
            (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
            (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
              "CouldntFindOrCreateClientOverlay"),
            (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
        })(p || (p = {})),
        (function (e) {
          (e[(e.Accept = 0)] = "Accept"), (e[(e.Back = 1)] = "Back");
        })(b || (b = {})),
        (function (e) {
          (e[(e.Normal = 0)] = "Normal"),
            (e[(e.Password = 1)] = "Password"),
            (e[(e.Submit = 2)] = "Submit");
        })(v || (v = {})),
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
        })(C || (C = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
            (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
            (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
            (e[(e.ThisSteamVR64BitOnly = 4)] = "ThisSteamVR64BitOnly"),
            (e[(e.Error = -1)] = "Error");
        })(S || (S = {})),
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
        })(M || (M = {})),
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
        })(E || (E = {})),
        (function (e) {
          e[(e.Hostname = 0)] = "Hostname";
        })(y || (y = {})),
        (function (e) {
          (e[(e.Unavailable = 0)] = "Unavailable"),
            (e[(e.Active = 1)] = "Active"),
            (e[(e.Off = 2)] = "Off");
        })(P || (P = {})),
        (function (e) {
          (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
        })(k || (k = {})),
        (function (e) {
          (e[(e.Inactive = 0)] = "Inactive"),
            (e[(e.PendingReset = 1)] = "PendingReset"),
            (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
            (e[(e.Default = 3)] = "Default"),
            (e[(e.CV = 4)] = "CV"),
            (e[(e.Manual = 5)] = "Manual");
        })(w || (w = {})),
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
        })(I || (I = {})),
        (function (e) {
          (e[(e.Small = 0)] = "Small"),
            (e[(e.Medium = 1)] = "Medium"),
            (e[(e.Large = 2)] = "Large"),
            (e[(e.Gigantic = 3)] = "Gigantic"),
            (e[(e.Standing = 4)] = "Standing");
        })(A || (A = {}));
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~336cd93ad.js.map
