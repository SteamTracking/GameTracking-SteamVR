var CLSTAMP = "11023671";
(() => {
  "use strict";
  var e,
    t = {
      6185: (e, t, n) => {
        n.d(t, { l: () => a });
        var r = n(6540);
        let i = 0;
        function a() {
          const e = r.useRef(void 0);
          return (
            void 0 === e.current && (e.current = "svgid_" + i++),
            [e.current, `url(#${e.current})`]
          );
        }
      },
      9383: (e, t, n) => {
        n.d(t, {
          CL: () => I,
          JP: () => r,
          JQ: () => P,
          P9: () => D,
          gU: () => _,
          sj: () => S,
        });
        var r,
          i = n(1635),
          a = n(7813),
          o = n(296),
          l = n(6090),
          s = n(6540),
          u = n(3606),
          m = n(921),
          p = n(7727),
          y = n(3779),
          c = n(1651),
          d = n(9961),
          v = n(776),
          h = n(4007),
          g = n(2741),
          b = n(1391),
          f = n(3676),
          O = n(1333);
        !(function (e) {
          (e[(e.Alive = 0)] = "Alive"), (e[(e.Destroyed = 1)] = "Destroyed");
        })(r || (r = {}));
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
              (this.m_eState = r.Alive),
              (this.m_OnDestroyed = new c.l()),
              (this.m_sSummonOverlayKey = void 0),
              (this.m_bExternalDashboardOverlay = !1),
              (this.m_mainPanel = void 0),
              (this.m_bSpatialize = void 0),
              (this.Log = new v.wd("Frame", () => this.logPrefix)),
              (this.m_setComponents = new Set()),
              (this.keyboard = new y.Y(this)),
              (this.sharing = void 0),
              (this.size = new d.wP(this)),
              (this.inputFocus = new b.v(this)),
              (this.m_Frame = e),
              (this.m_unPageID = t),
              (this.props = n),
              (0, a.makeObservable)(this);
          }
          Init() {
            for (const e of this.m_setComponents) e.Init();
          }
          DestroyPage() {
            this.m_eState != r.Destroyed &&
              ((this.m_eState = r.Destroyed),
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
              return (0, l.nXw)(u.C6, e);
            }
            if (this.isExternalDashboardOverlay) {
              if (null == this.summonOverlayKey) return;
              return (0, l.nXw)(u.cb, this.summonOverlayKey) + "_Panel";
            }
          }
          get mainPanelSGID() {
            var e;
            return this.m_mainPanel
              ? this.m_mainPanel.getSGID()
              : (this.isExternalDashboardOverlay &&
                  null != this.summonOverlayKey &&
                  (null === (e = h.Q.GetOverlayInfo(this.summonOverlayKey)) ||
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
              const t = (0, l.nXw)(u.cb, this.summonOverlayKey);
              switch (e) {
                case l.OiK.TopCenter:
                  return t + "_TopCenter";
                case l.OiK.CenterLeft:
                  return t + "_CenterLeft";
                case l.OiK.CenterRight:
                  return t + "_CenterRight";
                case l.OiK.BottomCenter:
                  return t + "_BottomCenter";
                case l.OiK.BottomRight:
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
              h.Q.GetOverlayFlag(this.summonOverlayKey, 67108864)
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
        (0, i.Cg)([a.observable], S.prototype, "props", void 0),
          (0, i.Cg)([a.observable], S.prototype, "m_eState", void 0),
          (0, i.Cg)([a.observable], S.prototype, "m_sSummonOverlayKey", void 0),
          (0, i.Cg)(
            [a.observable],
            S.prototype,
            "m_bExternalDashboardOverlay",
            void 0,
          ),
          (0, i.Cg)([a.observable], S.prototype, "m_mainPanel", void 0),
          (0, i.Cg)([a.observable], S.prototype, "m_bSpatialize", void 0),
          (0, i.Cg)([a.computed], S.prototype, "state", null),
          (0, i.Cg)([a.computed], S.prototype, "summonOverlayKey", null),
          (0, i.Cg)(
            [a.computed],
            S.prototype,
            "isExternalDashboardOverlay",
            null,
          ),
          (0, i.Cg)([a.computed], S.prototype, "isActivePage", null),
          (0, i.Cg)([a.computed], S.prototype, "isActiveAndVisiblePage", null),
          (0, i.Cg)([a.computed], S.prototype, "mountableID", null),
          (0, i.Cg)([a.computed], S.prototype, "latestContentSize", null),
          (0, i.Cg)([a.computed], S.prototype, "logPrefix", null),
          (0, i.Cg)([a.action], S.prototype, "DestroyPage", null),
          (0, i.Cg)([a.action], S.prototype, "SetSummonOverlayKey", null),
          (0, i.Cg)(
            [a.action],
            S.prototype,
            "SetIsExternalDashboardOverlay",
            null,
          ),
          (0, i.Cg)([a.action], S.prototype, "SetMainPanel", null),
          (0, i.Cg)([a.computed], S.prototype, "mainPanelID", null),
          (0, i.Cg)([a.computed], S.prototype, "mainPanelSGID", null),
          (0, i.Cg)([a.computed], S.prototype, "isSystemPanel", null),
          (0, i.Cg)(
            [a.computed],
            S.prototype,
            "shouldShowMinimalDecorations",
            null,
          ),
          (0, i.Cg)([a.computed], S.prototype, "canSpatialize", null),
          (0, i.Cg)([a.computed], S.prototype, "isSpatializeEnabled", null),
          (0, i.Cg)(
            [a.action.bound],
            S.prototype,
            "SetSpatializeEnabled",
            null,
          );
        const D = s.forwardRef(function (e, t) {
            const { children: n, summonOverlayKey: r } = e,
              { frame: i } = (0, p.N)(),
              u = s.useMemo(() => i.CreatePage(e), [i]);
            s.useLayoutEffect(() =>
              (0, a.runInAction)(() => {
                u.props = e;
              }),
            ),
              s.useEffect(() => u.SetSummonOverlayKey(r), [u, i, r]),
              (0, m.D5)(t, u),
              s.useEffect(() => (u.Init(), () => u.DestroyPage()), [u]);
            const y = (0, o.q3)(() => u.mountableID);
            return s.createElement(
              p.t.Provider,
              { value: { frame: i, page: u } },
              s.createElement(l.IS7, { id: y }, n),
            );
          }),
          P = s.forwardRef(function (e, t) {
            var n, r;
            const {
                requireExternalOverlay: a = !0,
                overlayKey: y,
                componentProps: c,
              } = e,
              d = (0, i.Tt)(e, [
                "requireExternalOverlay",
                "overlayKey",
                "componentProps",
              ]),
              { frame: v } = (0, p.N)(),
              g = s.useCallback(
                (e) => {
                  null == e || e.SetIsExternalDashboardOverlay(!0),
                    (0, m.cZ)(t, e);
                },
                [t],
              ),
              b = (0, o.q3)(() => v.curvature.curvatureTransformOriginID),
              f = (0, o.q3)(() => h.Q.GetOverlayInfo(y)),
              O =
                null !== (n = null == f ? void 0 : f.unFlags) && void 0 !== n
                  ? n
                  : 0,
              S = (16 & O) > 0,
              P = (1073741824 & O) > 0;
            return a && !f
              ? null
              : s.createElement(
                  D,
                  Object.assign({}, d, {
                    summonOverlayKey:
                      null !== (r = e.summonOverlayKey) && void 0 !== r ? r : y,
                    ref: g,
                    componentProps: Object.assign(Object.assign({}, c), {
                      keyboard: Object.assign(
                        { overlayKeyForKeyboardInput: y },
                        null == c ? void 0 : c.keyboard,
                      ),
                      inputFocus: Object.assign(
                        {
                          vrClientPID: S ? f.unClientPID : void 0,
                          steamInputAppID: P ? f.unSteamInputAppID : void 0,
                        },
                        null == c ? void 0 : c.inputFocus,
                      ),
                    }),
                  }),
                  s.createElement(l.HWh, { mountedId: (0, l.nXw)(u.cb, y) }),
                  s.createElement(l.dLy, {
                    id: (0, l.nXw)(u.cb, y) + "_CurvatureOrigin",
                    parent_id: b,
                  }),
                  d.children,
                );
          });
        function I(e) {
          const { page: t } = (0, p.N)();
          if ((0, o.q3)(() => (null == t ? void 0 : t.isActiveAndVisiblePage)))
            return s.createElement(s.Fragment, null, e.children);
        }
        function _(e) {
          const { frame: t, page: n } = (0, p.N)();
          if (t && n && !n.isExternalDashboardOverlay)
            return s.createElement(
              s.Fragment,
              null,
              g.i_.map((e) =>
                s.createElement(l.Ci8, {
                  key: e,
                  id: n.GetPanelAnchorID(e),
                  location: e,
                }),
              ),
            );
        }
      },
      2741: (e, t, n) => {
        n.d(t, { VB: () => a, gp: () => l, i_: () => o, kr: () => i });
        var r = n(6090);
        const i = 20,
          a = [
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
            r.OiK.TopCenter,
            r.OiK.CenterLeft,
            r.OiK.CenterRight,
            r.OiK.BottomCenter,
            r.OiK.BottomRight,
          ];
        function l(e, t) {
          return !!e && !!t && e.frameID === t.frameID;
        }
      },
      292: (e, t, n) => {
        var r = n(1635),
          i = n(6540),
          a = n(5338),
          o = n(6090),
          l = n(3714),
          s = n(1333),
          u = n(9118),
          m = n(1532),
          p = n(5802),
          y = n(6646),
          c = n(2336),
          d = n(1835),
          v = n(4007),
          h = n(7813),
          g = n(9125),
          b = n(6379),
          f = n(5026),
          O = n(8803);
        (0, h.configure)({ enforceActions: "never" }),
          (function () {
            (0, r.sH)(this, void 0, void 0, function* () {
              try {
                yield Promise.all([
                  (0, l.uV)(
                    ["vrmonitor", "bindingui"],
                    null === o.Ay$ || void 0 === o.Ay$
                      ? void 0
                      : o.Ay$.GetSteamLanguage(),
                  ),
                  s.HR.Init(!0),
                  u.W.Init(!0),
                  p.B$.Init(),
                  m.s.Init(),
                  y.X.Init(),
                ]),
                  yield Promise.all([
                    O.m0.Init(!1),
                    v.Q.Init(),
                    d.SW.Init(),
                    b.c.Init(),
                  ]),
                  yield Promise.all([f.Mg.Init(!1)]);
              } catch (e) {
                console.error("Failed to initialize desktop settings:", e);
              }
              (0, g.aj)().Init("SteamVR", CLSTAMP, (0, g.d4)()),
                (document.title = (0, l.we)("#Settings_Header_SteamVR")),
                a
                  .H(document.getElementById("root"))
                  .render(i.createElement(c.z, { env: "desktop-window" }));
            });
          })();
      },
    },
    n = {};
  function r(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var a = (n[e] = { exports: {} });
    return t[e].call(a.exports, a, a.exports, r), a.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = (t, n, i, a) => {
      if (!n) {
        var o = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [n, i, a] = e[m], l = !0, s = 0; s < n.length; s++)
            (!1 & a || o >= a) && Object.keys(r.O).every((e) => r.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((l = !1), a < o && (o = a));
          if (l) {
            e.splice(m--, 1);
            var u = i();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      a = a || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > a; m--) e[m] = e[m - 1];
      e[m] = [n, i, a];
    }),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 249: 0, 527: 0, 17: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var i,
            a,
            [o, l, s] = n,
            u = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (i in l) r.o(l, i) && (r.m[i] = l[i]);
            if (s) var m = s(r);
          }
          for (t && t(n); u < o.length; u++)
            (a = o[u]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return r.O(m);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var i = r.O(
    void 0,
    [967, 991, 260, 305, 527, 170, 452, 797, 554, 906, 57, 17],
    () => r(292),
  );
  i = r.O(i);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/settings_desktop.js.map
