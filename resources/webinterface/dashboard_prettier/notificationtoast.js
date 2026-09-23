var CLSTAMP = "11023671";
(() => {
  "use strict";
  var e,
    t = {
      6185: (e, t, n) => {
        n.d(t, { l: () => i });
        var a = n(6540);
        let r = 0;
        function i() {
          const e = a.useRef(void 0);
          return (
            void 0 === e.current && (e.current = "svgid_" + r++),
            [e.current, `url(#${e.current})`]
          );
        }
      },
      9383: (e, t, n) => {
        n.d(t, {
          CL: () => C,
          JP: () => a,
          JQ: () => _,
          P9: () => D,
          gU: () => P,
          sj: () => S,
        });
        var a,
          r = n(1635),
          i = n(7813),
          o = n(296),
          s = n(6090),
          l = n(6540),
          m = n(3606),
          u = n(921),
          p = n(7727),
          c = n(3779),
          d = n(1651),
          h = n(9961),
          v = n(776),
          y = n(4007),
          g = n(2741),
          b = n(1391),
          f = n(3676),
          O = n(1333);
        !(function (e) {
          (e[(e.Alive = 0)] = "Alive"), (e[(e.Destroyed = 1)] = "Destroyed");
        })(a || (a = {}));
        class S {
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
              e.length > g.kr && (e = e.substring(0, g.kr - 3) + "..."),
              `${this.frame.frameID}[${this.pageID}] "${e}"`
            );
          }
          RegisterComponent(e) {
            this.m_setComponents.add(e);
          }
          constructor(e, t, n) {
            (this.props = void 0),
              (this.m_eState = a.Alive),
              (this.m_OnDestroyed = new d.l()),
              (this.m_sSummonOverlayKey = void 0),
              (this.m_bExternalDashboardOverlay = !1),
              (this.m_mainPanel = void 0),
              (this.m_bSpatialize = void 0),
              (this.Log = new v.wd("Frame", () => this.logPrefix)),
              (this.m_setComponents = new Set()),
              (this.keyboard = new c.Y(this)),
              (this.sharing = void 0),
              (this.size = new h.wP(this)),
              (this.inputFocus = new b.v(this)),
              (this.m_Frame = e),
              (this.m_unPageID = t),
              (this.props = n),
              (0, i.makeObservable)(this);
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
              return (0, s.nXw)(m.C6, e);
            }
            if (this.isExternalDashboardOverlay) {
              if (null == this.summonOverlayKey) return;
              return (0, s.nXw)(m.cb, this.summonOverlayKey) + "_Panel";
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
              const t = (0, s.nXw)(m.cb, this.summonOverlayKey);
              switch (e) {
                case s.OiK.TopCenter:
                  return t + "_TopCenter";
                case s.OiK.CenterLeft:
                  return t + "_CenterLeft";
                case s.OiK.CenterRight:
                  return t + "_CenterRight";
                case s.OiK.BottomCenter:
                  return t + "_BottomCenter";
                case s.OiK.BottomRight:
                  return t + "_BottomRight";
              }
            }
          }
          get isSystemPanel() {
            return (
              this.inputFocus.componentProps.steamInputAppID == m.qx ||
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
              !!(null === (e = O.HR.audioDevices) || void 0 === e
                ? void 0
                : e.spatialize) &&
              ((null === (t = this.summonOverlayKey) || void 0 === t
                ? void 0
                : t.startsWith(m.bl + ".")) ||
                this.summonOverlayKey == m.P)
            );
          }
          get isSpatializeEnabled() {
            return (
              !!this.summonOverlayKey &&
              !!this.canSpatialize &&
              (null == this.m_bSpatialize &&
                ((this.m_bSpatialize = !1),
                O.HR.GetAppSettings(this.summonOverlayKey).then(
                  (e) => (this.m_bSpatialize = e.spatialize),
                )),
              this.m_bSpatialize)
            );
          }
          SetSpatializeEnabled(e) {
            if (!this.summonOverlayKey) return;
            this.m_bSpatialize = e;
            let t = {};
            (t.spatialize = e), O.HR.SetAppSettings(this.summonOverlayKey, t);
          }
        }
        (0, r.Cg)([i.observable], S.prototype, "props", void 0),
          (0, r.Cg)([i.observable], S.prototype, "m_eState", void 0),
          (0, r.Cg)([i.observable], S.prototype, "m_sSummonOverlayKey", void 0),
          (0, r.Cg)(
            [i.observable],
            S.prototype,
            "m_bExternalDashboardOverlay",
            void 0,
          ),
          (0, r.Cg)([i.observable], S.prototype, "m_mainPanel", void 0),
          (0, r.Cg)([i.observable], S.prototype, "m_bSpatialize", void 0),
          (0, r.Cg)([i.computed], S.prototype, "state", null),
          (0, r.Cg)([i.computed], S.prototype, "summonOverlayKey", null),
          (0, r.Cg)(
            [i.computed],
            S.prototype,
            "isExternalDashboardOverlay",
            null,
          ),
          (0, r.Cg)([i.computed], S.prototype, "isActivePage", null),
          (0, r.Cg)([i.computed], S.prototype, "isActiveAndVisiblePage", null),
          (0, r.Cg)([i.computed], S.prototype, "mountableID", null),
          (0, r.Cg)([i.computed], S.prototype, "latestContentSize", null),
          (0, r.Cg)([i.computed], S.prototype, "logPrefix", null),
          (0, r.Cg)([i.action], S.prototype, "DestroyPage", null),
          (0, r.Cg)([i.action], S.prototype, "SetSummonOverlayKey", null),
          (0, r.Cg)(
            [i.action],
            S.prototype,
            "SetIsExternalDashboardOverlay",
            null,
          ),
          (0, r.Cg)([i.action], S.prototype, "SetMainPanel", null),
          (0, r.Cg)([i.computed], S.prototype, "mainPanelID", null),
          (0, r.Cg)([i.computed], S.prototype, "mainPanelSGID", null),
          (0, r.Cg)([i.computed], S.prototype, "isSystemPanel", null),
          (0, r.Cg)(
            [i.computed],
            S.prototype,
            "shouldShowMinimalDecorations",
            null,
          ),
          (0, r.Cg)([i.computed], S.prototype, "canSpatialize", null),
          (0, r.Cg)([i.computed], S.prototype, "isSpatializeEnabled", null),
          (0, r.Cg)(
            [i.action.bound],
            S.prototype,
            "SetSpatializeEnabled",
            null,
          );
        const D = l.forwardRef(function (e, t) {
            const { children: n, summonOverlayKey: a } = e,
              { frame: r } = (0, p.N)(),
              m = l.useMemo(() => r.CreatePage(e), [r]);
            l.useLayoutEffect(() =>
              (0, i.runInAction)(() => {
                m.props = e;
              }),
            ),
              l.useEffect(() => m.SetSummonOverlayKey(a), [m, r, a]),
              (0, u.D5)(t, m),
              l.useEffect(() => (m.Init(), () => m.DestroyPage()), [m]);
            const c = (0, o.q3)(() => m.mountableID);
            return l.createElement(
              p.t.Provider,
              { value: { frame: r, page: m } },
              l.createElement(s.IS7, { id: c }, n),
            );
          }),
          _ = l.forwardRef(function (e, t) {
            var n, a;
            const {
                requireExternalOverlay: i = !0,
                overlayKey: c,
                componentProps: d,
              } = e,
              h = (0, r.Tt)(e, [
                "requireExternalOverlay",
                "overlayKey",
                "componentProps",
              ]),
              { frame: v } = (0, p.N)(),
              g = l.useCallback(
                (e) => {
                  null == e || e.SetIsExternalDashboardOverlay(!0),
                    (0, u.cZ)(t, e);
                },
                [t],
              ),
              b = (0, o.q3)(() => v.curvature.curvatureTransformOriginID),
              f = (0, o.q3)(() => y.Q.GetOverlayInfo(c)),
              O =
                null !== (n = null == f ? void 0 : f.unFlags) && void 0 !== n
                  ? n
                  : 0,
              S = (16 & O) > 0,
              _ = (1073741824 & O) > 0;
            return i && !f
              ? null
              : l.createElement(
                  D,
                  Object.assign({}, h, {
                    summonOverlayKey:
                      null !== (a = e.summonOverlayKey) && void 0 !== a ? a : c,
                    ref: g,
                    componentProps: Object.assign(Object.assign({}, d), {
                      keyboard: Object.assign(
                        { overlayKeyForKeyboardInput: c },
                        null == d ? void 0 : d.keyboard,
                      ),
                      inputFocus: Object.assign(
                        {
                          vrClientPID: S ? f.unClientPID : void 0,
                          steamInputAppID: _ ? f.unSteamInputAppID : void 0,
                        },
                        null == d ? void 0 : d.inputFocus,
                      ),
                    }),
                  }),
                  l.createElement(s.HWh, { mountedId: (0, s.nXw)(m.cb, c) }),
                  l.createElement(s.dLy, {
                    id: (0, s.nXw)(m.cb, c) + "_CurvatureOrigin",
                    parent_id: b,
                  }),
                  h.children,
                );
          });
        function C(e) {
          const { page: t } = (0, p.N)();
          if ((0, o.q3)(() => (null == t ? void 0 : t.isActiveAndVisiblePage)))
            return l.createElement(l.Fragment, null, e.children);
        }
        function P(e) {
          const { frame: t, page: n } = (0, p.N)();
          if (t && n && !n.isExternalDashboardOverlay)
            return l.createElement(
              l.Fragment,
              null,
              g.i_.map((e) =>
                l.createElement(s.Ci8, {
                  key: e,
                  id: n.GetPanelAnchorID(e),
                  location: e,
                }),
              ),
            );
        }
      },
      2741: (e, t, n) => {
        n.d(t, { VB: () => i, gp: () => s, i_: () => o, kr: () => r });
        var a = n(6090);
        const r = 20,
          i = [
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
          o = [
            a.OiK.TopCenter,
            a.OiK.CenterLeft,
            a.OiK.CenterRight,
            a.OiK.BottomCenter,
            a.OiK.BottomRight,
          ];
        function s(e, t) {
          return !!e && !!t && e.frameID === t.frameID;
        }
      },
      4170: (e, t, n) => {
        var a = n(1635),
          r = n(6540),
          i = n(5338),
          o = n(3236),
          s = n(6090),
          l = n(3714),
          m = n(1333),
          u = n(7813),
          p = n(9125);
        (0, u.configure)({ enforceActions: "never" });
        class c extends r.Component {
          constructor(e) {
            super(e),
              (this.m_toastMailbox = new s._nH()),
              (this.state = { visible: !1, title: "", header: "", text: "" }),
              this.m_toastMailbox.Init("toast_renderer/main"),
              this.m_toastMailbox.RegisterHandler(
                "render_toast",
                this.OnRenderToast,
              ),
              m.HR.Init(!1);
          }
          OnRenderToast(e) {
            var t;
            let n =
              null ===
                (t =
                  null === s.Ay$ || void 0 === s.Ay$
                    ? void 0
                    : s.Ay$.VROverlayInternal) || void 0 === t
                ? void 0
                : t.GetToastInfo(e.notification_id);
            n
              ? this.setState({
                  visible: !0,
                  title: n.sTitle,
                  header: n.sHeader || "",
                  text: n.sText,
                  image: n.sImageData,
                })
              : this.setState({
                  visible: !1,
                  title: "",
                  header: "",
                  text: "",
                  image: null,
                });
          }
          render() {
            return this.state.visible
              ? r.createElement(
                  "div",
                  { className: "VRNotificationRoot" },
                  r.createElement(
                    "div",
                    { className: "VRNotificationApplicationName" },
                    this.state.title,
                  ),
                  r.createElement(
                    "div",
                    { className: "VRNotificationFrame" },
                    r.createElement("div", {
                      className: "VRToastImage",
                      style: {
                        backgroundImage: this.state.image
                          ? "url('" + this.state.image + "')"
                          : "url('/dashboard/images/icons/notification_steamcog.png')",
                      },
                    }),
                    r.createElement(
                      "div",
                      { className: "VRNotificationTextWrapper" },
                      r.createElement(
                        "div",
                        { className: "VRNotificationHeader" },
                        this.state.header,
                      ),
                      r.createElement(
                        "div",
                        { className: "VRNotificationText" },
                        this.state.text,
                      ),
                    ),
                  ),
                )
              : null;
          }
        }
        (0, a.Cg)([o.o], c.prototype, "OnRenderToast", null),
          (0, l.uV)(
            [],
            null === s.Ay$ || void 0 === s.Ay$
              ? void 0
              : s.Ay$.GetSteamLanguage(),
          )
            .then(() => {
              (0, p.aj)().Init("SteamVR", CLSTAMP, (0, p.d4)()),
                i
                  .H(document.getElementById("root"))
                  .render(r.createElement(c, null));
            })
            .catch((e) =>
              console.error("Failed to initialize notification toast:", e),
            );
      },
    },
    n = {};
  function a(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var i = (n[e] = { exports: {} });
    return t[e].call(i.exports, i, i.exports, a), i.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, n, r, i) => {
      if (!n) {
        var o = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, r, i] = e[u], s = !0, l = 0; l < n.length; l++)
            (!1 & i || o >= i) && Object.keys(a.O).every((e) => a.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((s = !1), i < o && (o = i));
          if (s) {
            e.splice(u--, 1);
            var m = r();
            void 0 !== m && (t = m);
          }
        }
        return t;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [n, r, i];
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
      var e = { 915: 0, 527: 0, 500: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var r,
            i,
            [o, s, l] = n,
            m = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (r in s) a.o(s, r) && (a.m[r] = s[r]);
            if (l) var u = l(a);
          }
          for (t && t(n); m < o.length; m++)
            (i = o[m]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return a.O(u);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var r = a.O(
    void 0,
    [967, 991, 154, 305, 527, 170, 452, 797, 554, 906, 500, 57],
    () => a(4170),
  );
  r = a.O(r);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/notificationtoast.js.map
