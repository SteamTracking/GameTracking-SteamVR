var CLSTAMP = "11023671";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [300],
  {
    4728: (e, t, s) => {
      function n(e, t, s) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(s, e));
      }
      s.d(t, { OQ: () => n });
    },
    6185: (e, t, s) => {
      s.d(t, { l: () => a });
      var n = s(6540);
      let i = 0;
      function a() {
        const e = n.useRef(void 0);
        return (
          void 0 === e.current && (e.current = "svgid_" + i++),
          [e.current, `url(#${e.current})`]
        );
      }
    },
    1333: (e, t, s) => {
      s.d(t, { Gz: () => d, HR: () => y });
      var n = s(1635),
        i = s(3236),
        a = s(2505),
        o = s.n(a),
        r = s(7813),
        l = s(6090),
        p = s(3606),
        h = s(2402),
        u = s(2336),
        m = s(8803),
        g = s(6013),
        c = s(1909);
      const d = 16,
        S = "change_route";
      class v {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_mailbox = new l._nH()),
            (this.connected = !1),
            (this.settingsSchema = void 0),
            (this.settings = r.observable.map()),
            (this.systemInfo = void 0),
            (this.audioDevices = void 0),
            (this.apps = []),
            (this.probablyOwnedAppkeys = new Set()),
            (this.m_bSteamVRMain = !1),
            (this.workshopStateChangedCanary = 1),
            (this.onRestartRequired = null),
            (this.onAppRestartRequired = null),
            (this.pendingChanges = new Map()),
            (this.route = []),
            (this.m_mapSettingsLastWriteInfo = new Map()),
            (this.m_bIsSettingApp = !1),
            (this.m_bInitStarted = !1),
            (this.m_appFrameLimits = []),
            (this.m_mapRefreshRatesForFrameLimit = new Map()),
            (this.m_SteamClientUserInfoPathProperty =
              m.m0.ListenToProtoPathProperty(g.qR)),
            (this.GetAppList = function () {
              return new Promise(function (e, t) {
                o()
                  .get("/app/list.json")
                  .then((t) => {
                    e(t.data.apps);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.GetSettingsUGC = function () {
              return new Promise(function (e, t) {
                o()
                  .get("/settings_getugc")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.ReloadSettingsSchema = function () {
              return new Promise(function (e, t) {
                o()
                  .get("/settings_reloadschema")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.GetSettingsInfo = function () {
              return new Promise(function (e, t) {
                o()
                  .get("/settings_getinfo")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (0, r.makeObservable)(this);
        }
        get showInternalSettings() {
          var e, t;
          return (
            this.m_bSteamVRMain ||
            y.settings.get(u.z.k_sShowInternalSettings) ||
            ((null === (e = this.m_SteamClientUserInfoPathProperty.value) ||
            void 0 === e
              ? void 0
              : e.valve_email) &&
              (null === (t = this.m_SteamClientUserInfoPathProperty.value) ||
              void 0 === t
                ? void 0
                : t.developer_mode_enabled))
          );
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            console.log("Connecting vrsettings..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                this.OnWebSocketOpen(t), e();
              }),
              this.m_wsWebSocketToServer.addEventListener(
                "message",
                this.OnWebSocketMessage,
              ),
              this.m_wsWebSocketToServer.addEventListener(
                "close",
                this.OnWebSocketClose,
              );
          });
        }
        Init(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (this.m_bInitStarted) return;
            (this.m_bInitStarted = !0),
              (this.m_bIsSettingApp = e),
              this.m_bIsSettingApp &&
                (window.addEventListener("hashchange", this.onHashChanged),
                this.onHashChanged()),
              (0, r.autorun)(
                () => {
                  let e = [];
                  if (0 != this.pendingChanges.size) {
                    for (const [t, s] of this.pendingChanges.entries())
                      e.push({ name: t, value: s });
                    this.pendingChanges.clear(),
                      o()
                        .post("/settings_set.action", e)
                        .then((e) => {})
                        .catch((t) => {
                          console.log(
                            "Failed to save settings! This usually happens when type is set incorrectly on one of the keys in the schema. ",
                            e,
                          );
                        });
                  }
                },
                { delay: 300 },
              ),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForDisplayModeNotSupportedEvents(
                  this.SetRestartRequired,
                );
            let t = [];
            this.m_mailbox.connected || t.push(this.ConnectMailbox()),
              t.push(this.OpenWebSocketToHost()),
              t.push(this.AwaitInitialSettingsSchema()),
              c.p.SteamVR.SetImplementation("SetSpatializeEnabled", (e) => {
                this.audioDevices &&
                  ((this.audioDevices.spatialize =
                    (null == e ? void 0 : e.enabled) || !1),
                  console.log("SetSpatializeEnabled", e.enabled));
              }),
              c.p.SteamVR.SetImplementation(
                "SetSpatializeSurroundEnabled",
                (e) => {
                  this.audioDevices &&
                    ((this.audioDevices.spatialize_surround =
                      (null == e ? void 0 : e.enabled) || !1),
                    console.log("SetSpatializeSurroundEnabled", e.enabled));
                },
              ),
              yield Promise.all(t);
          });
        }
        get MailboxName() {
          if (!this.m_bIsSettingApp) return "settings";
          switch ((0, l.R$f)()) {
            case l.OH$.Overlay:
              return "settings/overlay";
            case l.OH$.Desktop:
              return "settings/desktop";
            default:
              return "settings/unknown";
          }
        }
        ConnectMailbox() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            try {
              yield this.m_mailbox.Init(this.MailboxName),
                this.m_mailbox.RegisterHandler(
                  "workshop_state_changed",
                  this.OnWorkshopStateChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(S, this.OnChangeRouteMessage),
                this.m_mailbox.RegisterHandler(
                  "app_config_changed",
                  this.OnAppConfigChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(
                  "refresh_rate_change",
                  this.OnRefreshRateChangeMessage,
                );
            } catch (e) {
              console.log("Failed to open settings mailbox:" + e);
            }
          });
        }
        OnWorkshopStateChangedMessage(e) {
          this.workshopStateChangedCanary++;
        }
        OnChangeRouteMessage(e) {
          this.m_bIsSettingApp &&
            this.setRoute(e.page, e.section, e.sectionParams);
        }
        OnAppConfigChangedMessage(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (e.deleted_appkeys.length)
              for (let t = this.apps.length - 1; t >= 0; t--)
                e.deleted_appkeys.indexOf(this.apps[t].key) >= 0 &&
                  this.apps.splice(t, 1);
            for (let t of e.updated_apps) {
              for (let e = 0; e < this.apps.length; e++)
                if (this.apps[e].key == t.key) {
                  !this.apps[e].is_autolaunch &&
                    t.is_autolaunch &&
                    this.SetRestartRequired(),
                    (this.apps[e] = Object.assign(
                      Object.assign(Object.assign({}, this.apps[e]), {
                        current_scene_process: !1,
                      }),
                      t,
                    )),
                    (t = null);
                  break;
                }
              t && (this.apps.push(t), this.probablyOwnedAppkeys.add(t.key));
            }
          });
        }
        OnRefreshRateChangeMessage(e) {
          this.onAppRestartRequired &&
            this.onAppRestartRequired(e.app_supports);
        }
        onHashChanged() {
          if (!this.m_bIsSettingApp) return;
          const e = window.location.hash;
          0 === e.indexOf("#")
            ? (this.route = e.substring(1).split("/"))
            : (this.route = []);
        }
        get routePage() {
          return this.route.length >= 1 ? this.route[0] : null;
        }
        get routePageSection() {
          return this.route.length >= 2 ? this.route[1] : null;
        }
        get routePageSectionParams() {
          return this.route.slice(2);
        }
        setRoutePage(e) {
          this.setRoute(e);
        }
        setRoutePageSection(e) {
          this.setRoute(this.routePage, e);
        }
        setRoutePageSectionParams(e) {
          this.setRoute(this.routePage, this.routePageSection, e);
        }
        setRoute(e, t, s) {
          if (this.m_bIsSettingApp) {
            (e = null != e ? e : ""), (s = null != s ? s : []);
            const n = t ? [e, t, ...s] : [e],
              i = n.join("/");
            window.location.hash.substring(1) != i &&
              ((window.location.hash = i), (this.route = n));
          } else
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(this.MailboxName, {
                type: S,
                page: e,
                section: t,
                sectionParams: s,
              });
        }
        SetDashboardFadeSupression(e, t) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(l.M9N, {
              type: h.E,
              suppress_dashboard_fade: t,
              for_id: e,
            });
        }
        SetDashboardForceBoundsVisible(e, t, s) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(l.M9N, {
              type: h.Q,
              force_bounds_visible: s,
              for_overlay_key: e,
              for_id: t,
            });
        }
        SetRestartRequired() {
          this.onRestartRequired && this.onRestartRequired();
        }
        OnWebSocketOpen(e) {
          (this.connected = !0),
            this.WebSocketSend("settings_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("settings_close");
            }),
            y.GetSettingsInfo().then((e) => {
              this.OnVRSystemInfo(e);
            }),
            y.GetAppList().then((e) => {
              this.OnVRAppList({ jsonid: "vr_app_list", apps: e });
            });
        }
        OnWebSocketClose(e) {
          console.log("Lost connection to host..."),
            (this.connected = !1),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(e) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(e);
        }
        OnWebSocketMessage(e) {
          let t = JSON.parse(e.data);
          switch (t.jsonid) {
            case "vr_settings":
              this.OnVRSettings(t);
              break;
            case "vr_settings_schema":
              this.OnVRSettingsSchema(t);
              break;
            case "vr_audio_devices":
              this.OnVRAudioDevices(t);
              break;
            case "vr_app_list":
              this.OnVRAppList(t);
              break;
            default:
              t.jsonid
                ? console.log("Received unhandled event: " + t.jsonid)
                : console.log("Received unknown message: ", t);
          }
        }
        OnVRSettings(e) {
          for (let t in e.values) {
            const s = e.values[t];
            if (
              this.settings.get(t) != s ||
              this.m_mapSettingsLastWriteInfo.has(t)
            ) {
              if (this.settingsSchema) {
                const e = this.GetSettingSchema(t);
                e && e.requires_restart && this.SetRestartRequired();
              }
              this.SetSettingValueFromServer(t, s);
            }
          }
        }
        SetSettingValueFromServer(e, t) {
          const s = 1e3 * v.SERVER_SETTING_MERGE_DEFER_DURATION;
          if (this.m_mapSettingsLastWriteInfo.has(e)) {
            let n = this.m_mapSettingsLastWriteInfo.get(e);
            if (new Date().getTime() - n.nLastUserUpdateTime < s)
              return (
                window.clearTimeout(n.nPendingServerValueUpdateTimeout),
                void (n.nPendingServerValueUpdateTimeout = window.setTimeout(
                  () => {
                    this.SetSettingValueFromServer(e, t);
                  },
                  s,
                ))
              );
            window.clearTimeout(n.nPendingServerValueUpdateTimeout),
              this.m_mapSettingsLastWriteInfo.delete(e);
          }
          this.settings.set(e, t);
        }
        UpdateLastUserWriteTimeForSetting(e) {
          const t = new Date().getTime();
          this.m_mapSettingsLastWriteInfo.has(e)
            ? (this.m_mapSettingsLastWriteInfo.get(e).nLastUserUpdateTime = t)
            : this.m_mapSettingsLastWriteInfo.set(e, {
                nLastUserUpdateTime: t,
                nPendingServerValueUpdateTimeout: 0,
              });
        }
        OnVRSettingsSchema(e) {
          null == this.settingsSchema &&
            (console.log("Got vr settings schema"),
            (this.settingsSchema = e.schema),
            (this.m_bSteamVRMain = e.is_steamvr_main));
        }
        AwaitInitialSettingsSchema() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return (0, r.when)(() => !!this.settingsSchema);
          });
        }
        OnVRAudioDevices(e) {
          console.log("Got audio devices"), (this.audioDevices = e);
        }
        OnVRSystemInfo(e) {
          this.systemInfo = e;
          const t = e.refresh_rates.supported_rates.map((e) => Math.round(e));
          if (t.length > 1) {
            this.m_mapRefreshRatesForFrameLimit.clear(),
              (this.m_appFrameLimits = t.slice());
            for (const e of t)
              for (let t = 1; t <= 6; t++) {
                const s = Math.round(e / t),
                  n = this.m_mapRefreshRatesForFrameLimit.get(s);
                n ? n.push(e) : this.m_mapRefreshRatesForFrameLimit.set(s, [e]);
                for (let e = 0; e < this.m_appFrameLimits.length; e++) {
                  if (this.m_appFrameLimits[e] > s) {
                    this.m_appFrameLimits.splice(e, 0, s);
                    break;
                  }
                  if (this.m_appFrameLimits[e] === s) break;
                }
              }
          }
        }
        OnVRAppList(e) {
          (this.apps = e.apps),
            e.apps.map((e) => this.probablyOwnedAppkeys.add(e.key));
        }
        SettingNameMatches(e, t) {
          if (t && t.endsWith("*")) {
            let s = t.length - 1;
            return e.substr(0, s) == t.substr(0, s);
          }
          return e == t;
        }
        GetSettingSchema(e) {
          for (let t of this.settingsSchema)
            if (t.values)
              for (let s of t.values)
                if (s && this.SettingNameMatches(e, s.name)) return s;
          return null;
        }
        get appFrameLimits() {
          return this.m_appFrameLimits;
        }
        GetRefreshRatesForFrameLimit(e) {
          var t;
          return null !== (t = this.m_mapRefreshRatesForFrameLimit.get(e)) &&
            void 0 !== t
            ? t
            : [e];
        }
        ResetSettingsValue(e) {
          this.SetSettingsValue(e, null);
        }
        ResetSettingsValues(...e) {
          e.forEach(this.ResetSettingsValue);
        }
        SetSettingsValue(e, t) {
          let s = this.GetSettingSchema(e);
          null != s
            ? (null != t &&
                ("int" == s.type
                  ? (t = parseInt(t))
                  : "float" == s.type
                    ? (t = parseFloat(t))
                    : "string" == s.type
                      ? (t = "" + t)
                      : "bool" == s.type && (t = !!t)),
              s.requires_restart && this.SetRestartRequired(),
              this.SetSettingsStringValueWithoutSchema(e, t))
            : console.log(
                "Tried to set setting " +
                  e +
                  " but it's not in the schema! Aborting",
              );
        }
        SetSettingsStringValueWithoutSchema(e, t) {
          if (VRHTML) {
            const s = e.split("/");
            if (4 != s.length || "" != s[0] || "settings" != s[1])
              throw new Error("bad settings path " + e);
            VRHTML.VRSettings.Set(s[2], s[3], t),
              this.settings.set(e, VRHTML.VRSettings.Get(s[2], s[3]));
          } else
            null != t && this.settings.set(e, t), this.pendingChanges.set(e, t);
          this.UpdateLastUserWriteTimeForSetting(e);
        }
        GetSettingsValue(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, s) {
              o()
                .get("/settings_get", { params: { name: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  s(null);
                });
            });
          });
        }
        ResetAppSettings(e) {
          return o()
            .post("/app/resetsettings", { app: e })
            .then((t) => this.GetAppSettings(e))
            .catch((e) => {});
        }
        ResetAllAppResolutionScales() {
          return o()
            .post("/app/resetallresolutionscales")
            .then((e) => !0)
            .catch((e) => {});
        }
        SetAppSettings(e, t) {
          let s = Object.assign(Object.assign({}, t), { app: e });
          o().post("/app/setsettings", s);
          for (let e = 0; e < this.apps.length; e++)
            if (this.apps[e].key == s.app) {
              !this.apps[e].is_autolaunch &&
                t.is_autolaunch &&
                this.SetRestartRequired(),
                (this.apps[e] = Object.assign(
                  Object.assign({}, this.apps[e]),
                  t,
                ));
              break;
            }
        }
        GetAppSettings(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, s) {
              o()
                .get("/app/getsettings", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  s(null);
                });
            });
          });
        }
        GetAppInfo(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, s) {
              o()
                .get("/app/getinfo", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  s(null);
                });
            });
          });
        }
        GetAppName(e) {
          var t;
          return null === (t = this.apps.find((t) => t.key == e)) ||
            void 0 === t
            ? void 0
            : t.name;
        }
        get showAdvancedSettings() {
          return this.settings.get(p.F2);
        }
        set showAdvancedSettings(e) {
          this.SetSettingsValue(p.F2, e);
        }
        showBindingCallouts(e) {
          let t = { type: "request_binding_callouts", app_key: e };
          this.m_mailbox.SendMessage(l.I0c, t);
        }
      }
      (v.SERVER_SETTING_MERGE_DEFER_DURATION = 1),
        (0, n.Cg)([r.observable], v.prototype, "connected", void 0),
        (0, n.Cg)([r.observable], v.prototype, "settingsSchema", void 0),
        (0, n.Cg)([r.observable], v.prototype, "settings", void 0),
        (0, n.Cg)([r.observable], v.prototype, "systemInfo", void 0),
        (0, n.Cg)([r.observable], v.prototype, "audioDevices", void 0),
        (0, n.Cg)([r.observable], v.prototype, "apps", void 0),
        (0, n.Cg)([r.observable], v.prototype, "probablyOwnedAppkeys", void 0),
        (0, n.Cg)([r.observable], v.prototype, "m_bSteamVRMain", void 0),
        (0, n.Cg)(
          [r.observable],
          v.prototype,
          "workshopStateChangedCanary",
          void 0,
        ),
        (0, n.Cg)([r.observable], v.prototype, "pendingChanges", void 0),
        (0, n.Cg)([r.observable], v.prototype, "route", void 0),
        (0, n.Cg)([r.computed], v.prototype, "showInternalSettings", null),
        (0, n.Cg)([i.o], v.prototype, "OpenWebSocketToHost", null),
        (0, n.Cg)([i.o], v.prototype, "OnWorkshopStateChangedMessage", null),
        (0, n.Cg)([i.o], v.prototype, "OnChangeRouteMessage", null),
        (0, n.Cg)([i.o], v.prototype, "OnAppConfigChangedMessage", null),
        (0, n.Cg)([i.o], v.prototype, "OnRefreshRateChangeMessage", null),
        (0, n.Cg)([r.action.bound], v.prototype, "onHashChanged", null),
        (0, n.Cg)([r.computed], v.prototype, "routePage", null),
        (0, n.Cg)([r.computed], v.prototype, "routePageSection", null),
        (0, n.Cg)([r.computed], v.prototype, "routePageSectionParams", null),
        (0, n.Cg)([r.action], v.prototype, "setRoutePage", null),
        (0, n.Cg)([r.action], v.prototype, "setRoutePageSection", null),
        (0, n.Cg)([r.action], v.prototype, "setRoutePageSectionParams", null),
        (0, n.Cg)([r.action], v.prototype, "setRoute", null),
        (0, n.Cg)([i.o], v.prototype, "SetDashboardFadeSupression", null),
        (0, n.Cg)([i.o], v.prototype, "SetDashboardForceBoundsVisible", null),
        (0, n.Cg)([i.o], v.prototype, "SetRestartRequired", null),
        (0, n.Cg)([i.o], v.prototype, "OnWebSocketOpen", null),
        (0, n.Cg)([i.o], v.prototype, "OnWebSocketClose", null),
        (0, n.Cg)([i.o], v.prototype, "WebSocketSend", null),
        (0, n.Cg)([i.o], v.prototype, "OnWebSocketMessage", null),
        (0, n.Cg)([r.action], v.prototype, "OnVRSettings", null),
        (0, n.Cg)([r.action], v.prototype, "SetSettingValueFromServer", null),
        (0, n.Cg)([r.action], v.prototype, "OnVRSettingsSchema", null),
        (0, n.Cg)([r.action.bound], v.prototype, "ResetSettingsValue", null),
        (0, n.Cg)([r.action], v.prototype, "ResetSettingsValues", null),
        (0, n.Cg)([r.action], v.prototype, "SetSettingsValue", null),
        (0, n.Cg)(
          [r.action],
          v.prototype,
          "SetSettingsStringValueWithoutSchema",
          null,
        );
      const y = new v();
      window.VRSettingsState = y;
    },
    9383: (e, t, s) => {
      s.d(t, {
        CL: () => R,
        JP: () => n,
        JQ: () => O,
        P9: () => C,
        gU: () => P,
        sj: () => f,
      });
      var n,
        i = s(1635),
        a = s(7813),
        o = s(296),
        r = s(6090),
        l = s(6540),
        p = s(3606),
        h = s(921),
        u = s(7727),
        m = s(3779),
        g = s(1651),
        c = s(9961),
        d = s(776),
        S = s(4007),
        v = s(2741),
        y = s(1391),
        b = s(3676),
        _ = s(1333);
      !(function (e) {
        (e[(e.Alive = 0)] = "Alive"), (e[(e.Destroyed = 1)] = "Destroyed");
      })(n || (n = {}));
      class f {
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
        constructor(e, t, s) {
          (this.props = void 0),
            (this.m_eState = n.Alive),
            (this.m_OnDestroyed = new g.l()),
            (this.m_sSummonOverlayKey = void 0),
            (this.m_bExternalDashboardOverlay = !1),
            (this.m_mainPanel = void 0),
            (this.m_bSpatialize = void 0),
            (this.Log = new d.wd("Frame", () => this.logPrefix)),
            (this.m_setComponents = new Set()),
            (this.keyboard = new m.Y(this)),
            (this.sharing = void 0),
            (this.size = new c.wP(this)),
            (this.inputFocus = new y.v(this)),
            (this.m_Frame = e),
            (this.m_unPageID = t),
            (this.props = s),
            (0, a.makeObservable)(this);
        }
        Init() {
          for (const e of this.m_setComponents) e.Init();
        }
        DestroyPage() {
          this.m_eState != n.Destroyed &&
            ((this.m_eState = n.Destroyed),
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
            return (0, r.nXw)(p.C6, e);
          }
          if (this.isExternalDashboardOverlay) {
            if (null == this.summonOverlayKey) return;
            return (0, r.nXw)(p.cb, this.summonOverlayKey) + "_Panel";
          }
        }
        get mainPanelSGID() {
          var e;
          return this.m_mainPanel
            ? this.m_mainPanel.getSGID()
            : (this.isExternalDashboardOverlay &&
                null != this.summonOverlayKey &&
                (null === (e = S.Q.GetOverlayInfo(this.summonOverlayKey)) ||
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
            const t = (0, r.nXw)(p.cb, this.summonOverlayKey);
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
            this.inputFocus.componentProps.steamInputAppID == p.qx ||
            (0, b.n)(this.inputFocus.componentProps.steamInputAppID) ||
            (this.m_mainPanel && !this.m_mainPanel.isExternal)
          );
        }
        get shouldShowMinimalDecorations() {
          return (
            null != this.summonOverlayKey &&
            S.Q.GetOverlayFlag(this.summonOverlayKey, 67108864)
          );
        }
        get canSpatialize() {
          var e, t;
          return (
            !!(null === (e = _.HR.audioDevices) || void 0 === e
              ? void 0
              : e.spatialize) &&
            ((null === (t = this.summonOverlayKey) || void 0 === t
              ? void 0
              : t.startsWith(p.bl + ".")) ||
              this.summonOverlayKey == p.P)
          );
        }
        get isSpatializeEnabled() {
          return (
            !!this.summonOverlayKey &&
            !!this.canSpatialize &&
            (null == this.m_bSpatialize &&
              ((this.m_bSpatialize = !1),
              _.HR.GetAppSettings(this.summonOverlayKey).then(
                (e) => (this.m_bSpatialize = e.spatialize),
              )),
            this.m_bSpatialize)
          );
        }
        SetSpatializeEnabled(e) {
          if (!this.summonOverlayKey) return;
          this.m_bSpatialize = e;
          let t = {};
          (t.spatialize = e), _.HR.SetAppSettings(this.summonOverlayKey, t);
        }
      }
      (0, i.Cg)([a.observable], f.prototype, "props", void 0),
        (0, i.Cg)([a.observable], f.prototype, "m_eState", void 0),
        (0, i.Cg)([a.observable], f.prototype, "m_sSummonOverlayKey", void 0),
        (0, i.Cg)(
          [a.observable],
          f.prototype,
          "m_bExternalDashboardOverlay",
          void 0,
        ),
        (0, i.Cg)([a.observable], f.prototype, "m_mainPanel", void 0),
        (0, i.Cg)([a.observable], f.prototype, "m_bSpatialize", void 0),
        (0, i.Cg)([a.computed], f.prototype, "state", null),
        (0, i.Cg)([a.computed], f.prototype, "summonOverlayKey", null),
        (0, i.Cg)(
          [a.computed],
          f.prototype,
          "isExternalDashboardOverlay",
          null,
        ),
        (0, i.Cg)([a.computed], f.prototype, "isActivePage", null),
        (0, i.Cg)([a.computed], f.prototype, "isActiveAndVisiblePage", null),
        (0, i.Cg)([a.computed], f.prototype, "mountableID", null),
        (0, i.Cg)([a.computed], f.prototype, "latestContentSize", null),
        (0, i.Cg)([a.computed], f.prototype, "logPrefix", null),
        (0, i.Cg)([a.action], f.prototype, "DestroyPage", null),
        (0, i.Cg)([a.action], f.prototype, "SetSummonOverlayKey", null),
        (0, i.Cg)(
          [a.action],
          f.prototype,
          "SetIsExternalDashboardOverlay",
          null,
        ),
        (0, i.Cg)([a.action], f.prototype, "SetMainPanel", null),
        (0, i.Cg)([a.computed], f.prototype, "mainPanelID", null),
        (0, i.Cg)([a.computed], f.prototype, "mainPanelSGID", null),
        (0, i.Cg)([a.computed], f.prototype, "isSystemPanel", null),
        (0, i.Cg)(
          [a.computed],
          f.prototype,
          "shouldShowMinimalDecorations",
          null,
        ),
        (0, i.Cg)([a.computed], f.prototype, "canSpatialize", null),
        (0, i.Cg)([a.computed], f.prototype, "isSpatializeEnabled", null),
        (0, i.Cg)([a.action.bound], f.prototype, "SetSpatializeEnabled", null);
      const C = l.forwardRef(function (e, t) {
          const { children: s, summonOverlayKey: n } = e,
            { frame: i } = (0, u.N)(),
            p = l.useMemo(() => i.CreatePage(e), [i]);
          l.useLayoutEffect(() =>
            (0, a.runInAction)(() => {
              p.props = e;
            }),
          ),
            l.useEffect(() => p.SetSummonOverlayKey(n), [p, i, n]),
            (0, h.D5)(t, p),
            l.useEffect(() => (p.Init(), () => p.DestroyPage()), [p]);
          const m = (0, o.q3)(() => p.mountableID);
          return l.createElement(
            u.t.Provider,
            { value: { frame: i, page: p } },
            l.createElement(r.IS7, { id: m }, s),
          );
        }),
        O = l.forwardRef(function (e, t) {
          var s, n;
          const {
              requireExternalOverlay: a = !0,
              overlayKey: m,
              componentProps: g,
            } = e,
            c = (0, i.Tt)(e, [
              "requireExternalOverlay",
              "overlayKey",
              "componentProps",
            ]),
            { frame: d } = (0, u.N)(),
            v = l.useCallback(
              (e) => {
                null == e || e.SetIsExternalDashboardOverlay(!0),
                  (0, h.cZ)(t, e);
              },
              [t],
            ),
            y = (0, o.q3)(() => d.curvature.curvatureTransformOriginID),
            b = (0, o.q3)(() => S.Q.GetOverlayInfo(m)),
            _ =
              null !== (s = null == b ? void 0 : b.unFlags) && void 0 !== s
                ? s
                : 0,
            f = (16 & _) > 0,
            O = (1073741824 & _) > 0;
          return a && !b
            ? null
            : l.createElement(
                C,
                Object.assign({}, c, {
                  summonOverlayKey:
                    null !== (n = e.summonOverlayKey) && void 0 !== n ? n : m,
                  ref: v,
                  componentProps: Object.assign(Object.assign({}, g), {
                    keyboard: Object.assign(
                      { overlayKeyForKeyboardInput: m },
                      null == g ? void 0 : g.keyboard,
                    ),
                    inputFocus: Object.assign(
                      {
                        vrClientPID: f ? b.unClientPID : void 0,
                        steamInputAppID: O ? b.unSteamInputAppID : void 0,
                      },
                      null == g ? void 0 : g.inputFocus,
                    ),
                  }),
                }),
                l.createElement(r.HWh, { mountedId: (0, r.nXw)(p.cb, m) }),
                l.createElement(r.dLy, {
                  id: (0, r.nXw)(p.cb, m) + "_CurvatureOrigin",
                  parent_id: y,
                }),
                c.children,
              );
        });
      function R(e) {
        const { page: t } = (0, u.N)();
        if ((0, o.q3)(() => (null == t ? void 0 : t.isActiveAndVisiblePage)))
          return l.createElement(l.Fragment, null, e.children);
      }
      function P(e) {
        const { frame: t, page: s } = (0, u.N)();
        if (t && s && !s.isExternalDashboardOverlay)
          return l.createElement(
            l.Fragment,
            null,
            v.i_.map((e) =>
              l.createElement(r.Ci8, {
                key: e,
                id: s.GetPanelAnchorID(e),
                location: e,
              }),
            ),
          );
      }
    },
    2741: (e, t, s) => {
      s.d(t, { VB: () => a, gp: () => r, i_: () => o, kr: () => i });
      var n = s(6090);
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
          n.OiK.TopCenter,
          n.OiK.CenterLeft,
          n.OiK.CenterRight,
          n.OiK.BottomCenter,
          n.OiK.BottomRight,
        ];
      function r(e, t) {
        return !!e && !!t && e.frameID === t.frameID;
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~f620ae578.js.map
