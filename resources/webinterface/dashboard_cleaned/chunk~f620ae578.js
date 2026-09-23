var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [300],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_, _, _) {
        return null == _ || isNaN(_) ? _ : Math.max(_, Math.min(_, _));
      }
      __webpack_require__._(module_exports, {
        _: () => _,
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      let _ = 0;
      function _() {
        const _ = _.useRef(void 0);
        return (
          void 0 === _.current && (_.current = "svgid_" + _++),
          [_.current, `url(#${_.current})`]
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 16,
        _ = "change_route";
      class _ {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_mailbox = new _._nH()),
            (this.connected = !1),
            (this.settingsSchema = void 0),
            (this.settings = _.observable.map()),
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
              _._.ListenToProtoPathProperty(_._)),
            (this.GetAppList = function () {
              return new Promise(function (_, _) {
                _()
                  .get("/app/list.json")
                  .then((_) => {
                    _(_.data.apps);
                  })
                  .catch((_) => {
                    _(_);
                  });
              });
            }),
            (this.GetSettingsUGC = function () {
              return new Promise(function (_, _) {
                _()
                  .get("/settings_getugc")
                  .then((_) => {
                    _(_.data);
                  })
                  .catch((_) => {
                    _(_);
                  });
              });
            }),
            (this.ReloadSettingsSchema = function () {
              return new Promise(function (_, _) {
                _()
                  .get("/settings_reloadschema")
                  .then((_) => {
                    _(_.data);
                  })
                  .catch((_) => {
                    _(_);
                  });
              });
            }),
            (this.GetSettingsInfo = function () {
              return new Promise(function (_, _) {
                _()
                  .get("/settings_getinfo")
                  .then((_) => {
                    _(_.data);
                  })
                  .catch((_) => {
                    _(_);
                  });
              });
            }),
            (0, _.makeObservable)(this);
        }
        get showInternalSettings() {
          var _, _;
          return (
            this.m_bSteamVRMain ||
            _.settings.get(_._.k_sShowInternalSettings) ||
            ((null === (_ = this.m_SteamClientUserInfoPathProperty.value) ||
            void 0 === _
              ? void 0
              : _.valve_email) &&
              (null === (_ = this.m_SteamClientUserInfoPathProperty.value) ||
              void 0 === _
                ? void 0
                : _.developer_mode_enabled))
          );
        }
        OpenWebSocketToHost() {
          return new Promise((_, _) => {
            console.log("Connecting vrsettings..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (_) => {
                this.OnWebSocketOpen(_), _();
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
        Init(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            if (this.m_bInitStarted) return;
            (this.m_bInitStarted = !0),
              (this.m_bIsSettingApp = _),
              this.m_bIsSettingApp &&
                (window.addEventListener("hashchange", this.onHashChanged),
                this.onHashChanged()),
              (0, _.autorun)(
                () => {
                  let _ = [];
                  if (0 != this.pendingChanges.size) {
                    for (const [_, _] of this.pendingChanges.entries())
                      _.push({
                        name: _,
                        value: _,
                      });
                    this.pendingChanges.clear(),
                      _()
                        .post("/settings_set.action", _)
                        .then((_) => {})
                        .catch((_) => {
                          console.log(
                            "Failed to save settings! This usually happens when type is set incorrectly on one of the keys in the schema. ",
                            _,
                          );
                        });
                  }
                },
                {
                  delay: 300,
                },
              ),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForDisplayModeNotSupportedEvents(
                  this.SetRestartRequired,
                );
            let _ = [];
            this.m_mailbox.connected || _.push(this.ConnectMailbox()),
              _.push(this.OpenWebSocketToHost()),
              _.push(this.AwaitInitialSettingsSchema()),
              _._.SteamVR.SetImplementation("SetSpatializeEnabled", (_) => {
                this.audioDevices &&
                  ((this.audioDevices.spatialize =
                    (null == _ ? void 0 : _.enabled) || !1),
                  console.log("SetSpatializeEnabled", _.enabled));
              }),
              _._.SteamVR.SetImplementation(
                "SetSpatializeSurroundEnabled",
                (_) => {
                  this.audioDevices &&
                    ((this.audioDevices.spatialize_surround =
                      (null == _ ? void 0 : _.enabled) || !1),
                    console.log("SetSpatializeSurroundEnabled", _.enabled));
                },
              ),
              yield Promise.all(_);
          });
        }
        get MailboxName() {
          if (!this.m_bIsSettingApp) return "settings";
          switch ((0, _.R$f)()) {
            case _.OH$.Overlay:
              return "settings/overlay";
            case _.OH$.Desktop:
              return "settings/desktop";
            default:
              return "settings/unknown";
          }
        }
        ConnectMailbox() {
          return (0, _._)(this, void 0, void 0, function* () {
            try {
              yield this.m_mailbox.Init(this.MailboxName),
                this.m_mailbox.RegisterHandler(
                  "workshop_state_changed",
                  this.OnWorkshopStateChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(_, this.OnChangeRouteMessage),
                this.m_mailbox.RegisterHandler(
                  "app_config_changed",
                  this.OnAppConfigChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(
                  "refresh_rate_change",
                  this.OnRefreshRateChangeMessage,
                );
            } catch (_) {
              console.log("Failed to open settings mailbox:" + _);
            }
          });
        }
        OnWorkshopStateChangedMessage(_) {
          this.workshopStateChangedCanary++;
        }
        OnChangeRouteMessage(_) {
          this.m_bIsSettingApp &&
            this.setRoute(_.page, _.section, _.sectionParams);
        }
        OnAppConfigChangedMessage(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            if (_.deleted_appkeys.length)
              for (let _ = this.apps.length - 1; _ >= 0; _--)
                _.deleted_appkeys.indexOf(this.apps[_].key) >= 0 &&
                  this.apps.splice(_, 1);
            for (let _ of _.updated_apps) {
              for (let _ = 0; _ < this.apps.length; _++)
                if (this.apps[_].key == _.key) {
                  !this.apps[_].is_autolaunch &&
                    _.is_autolaunch &&
                    this.SetRestartRequired(),
                    (this.apps[_] = Object.assign(
                      Object.assign(Object.assign({}, this.apps[_]), {
                        current_scene_process: !1,
                      }),
                      _,
                    )),
                    (_ = null);
                  break;
                }
              _ && (this.apps.push(_), this.probablyOwnedAppkeys.add(_.key));
            }
          });
        }
        OnRefreshRateChangeMessage(_) {
          this.onAppRestartRequired &&
            this.onAppRestartRequired(_.app_supports);
        }
        onHashChanged() {
          if (!this.m_bIsSettingApp) return;
          const _ = window.location.hash;
          0 === _.indexOf("#")
            ? (this.route = _.substring(1).split("/"))
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
        setRoutePage(_) {
          this.setRoute(_);
        }
        setRoutePageSection(_) {
          this.setRoute(this.routePage, _);
        }
        setRoutePageSectionParams(_) {
          this.setRoute(this.routePage, this.routePageSection, _);
        }
        setRoute(_, _, _) {
          if (this.m_bIsSettingApp) {
            (_ = null != _ ? _ : ""), (_ = null != _ ? _ : []);
            const _ = _ ? [_, _, ..._] : [_],
              _ = _.join("/");
            window.location.hash.substring(1) != _ &&
              ((window.location.hash = _), (this.route = _));
          } else
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(this.MailboxName, {
                type: _,
                page: _,
                section: _,
                sectionParams: _,
              });
        }
        SetDashboardFadeSupression(_, _) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(_.M9N, {
              type: _._,
              suppress_dashboard_fade: _,
              for_id: _,
            });
        }
        SetDashboardForceBoundsVisible(_, _, _) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(_.M9N, {
              type: _._,
              force_bounds_visible: _,
              for_overlay_key: _,
              for_id: _,
            });
        }
        SetRestartRequired() {
          this.onRestartRequired && this.onRestartRequired();
        }
        OnWebSocketOpen(_) {
          (this.connected = !0),
            this.WebSocketSend("settings_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("settings_close");
            }),
            _.GetSettingsInfo().then((_) => {
              this.OnVRSystemInfo(_);
            }),
            _.GetAppList().then((_) => {
              this.OnVRAppList({
                jsonid: "vr_app_list",
                apps: _,
              });
            });
        }
        OnWebSocketClose(_) {
          console.log("Lost connection to host..."),
            (this.connected = !1),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(_) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(_);
        }
        OnWebSocketMessage(_) {
          let _ = JSON.parse(_.data);
          switch (_.jsonid) {
            case "vr_settings":
              this.OnVRSettings(_);
              break;
            case "vr_settings_schema":
              this.OnVRSettingsSchema(_);
              break;
            case "vr_audio_devices":
              this.OnVRAudioDevices(_);
              break;
            case "vr_app_list":
              this.OnVRAppList(_);
              break;
            default:
              _.jsonid
                ? console.log("Received unhandled event: " + _.jsonid)
                : console.log("Received unknown message: ", _);
          }
        }
        OnVRSettings(_) {
          for (let _ in _.values) {
            const _ = _.values[_];
            if (
              this.settings.get(_) != _ ||
              this.m_mapSettingsLastWriteInfo.has(_)
            ) {
              if (this.settingsSchema) {
                const _ = this.GetSettingSchema(_);
                _ && _.requires_restart && this.SetRestartRequired();
              }
              this.SetSettingValueFromServer(_, _);
            }
          }
        }
        SetSettingValueFromServer(_, _) {
          const _ = 1e3 * _.SERVER_SETTING_MERGE_DEFER_DURATION;
          if (this.m_mapSettingsLastWriteInfo.has(_)) {
            let _ = this.m_mapSettingsLastWriteInfo.get(_);
            if (new Date().getTime() - _.nLastUserUpdateTime < _)
              return (
                window.clearTimeout(_.nPendingServerValueUpdateTimeout),
                void (_.nPendingServerValueUpdateTimeout = window.setTimeout(
                  () => {
                    this.SetSettingValueFromServer(_, _);
                  },
                  _,
                ))
              );
            window.clearTimeout(_.nPendingServerValueUpdateTimeout),
              this.m_mapSettingsLastWriteInfo.delete(_);
          }
          this.settings.set(_, _);
        }
        UpdateLastUserWriteTimeForSetting(_) {
          const _ = new Date().getTime();
          this.m_mapSettingsLastWriteInfo.has(_)
            ? (this.m_mapSettingsLastWriteInfo.get(_).nLastUserUpdateTime = _)
            : this.m_mapSettingsLastWriteInfo.set(_, {
                nLastUserUpdateTime: _,
                nPendingServerValueUpdateTimeout: 0,
              });
        }
        OnVRSettingsSchema(_) {
          null == this.settingsSchema &&
            (console.log("Got vr settings schema"),
            (this.settingsSchema = _.schema),
            (this.m_bSteamVRMain = _.is_steamvr_main));
        }
        AwaitInitialSettingsSchema() {
          return (0, _._)(this, void 0, void 0, function* () {
            return (0, _.when)(() => !!this.settingsSchema);
          });
        }
        OnVRAudioDevices(_) {
          console.log("Got audio devices"), (this.audioDevices = _);
        }
        OnVRSystemInfo(_) {
          this.systemInfo = _;
          const _ = _.refresh_rates.supported_rates.map((_) => Math.round(_));
          if (_.length > 1) {
            this.m_mapRefreshRatesForFrameLimit.clear(),
              (this.m_appFrameLimits = _.slice());
            for (const _ of _)
              for (let _ = 1; _ <= 6; _++) {
                const _ = Math.round(_ / _),
                  _ = this.m_mapRefreshRatesForFrameLimit.get(_);
                _ ? _.push(_) : this.m_mapRefreshRatesForFrameLimit.set(_, [_]);
                for (let _ = 0; _ < this.m_appFrameLimits.length; _++) {
                  if (this.m_appFrameLimits[_] > _) {
                    this.m_appFrameLimits.splice(_, 0, _);
                    break;
                  }
                  if (this.m_appFrameLimits[_] === _) break;
                }
              }
          }
        }
        OnVRAppList(_) {
          (this.apps = _.apps),
            _.apps.map((_) => this.probablyOwnedAppkeys.add(_.key));
        }
        SettingNameMatches(_, _) {
          if (_ && _.endsWith("*")) {
            let _ = _.length - 1;
            return _.substr(0, _) == _.substr(0, _);
          }
          return _ == _;
        }
        GetSettingSchema(_) {
          for (let _ of this.settingsSchema)
            if (_.values)
              for (let _ of _.values)
                if (_ && this.SettingNameMatches(_, _.name)) return _;
          return null;
        }
        get appFrameLimits() {
          return this.m_appFrameLimits;
        }
        GetRefreshRatesForFrameLimit(_) {
          var _;
          return null !== (_ = this.m_mapRefreshRatesForFrameLimit.get(_)) &&
            void 0 !== _
            ? _
            : [_];
        }
        ResetSettingsValue(_) {
          this.SetSettingsValue(_, null);
        }
        ResetSettingsValues(..._) {
          _.forEach(this.ResetSettingsValue);
        }
        SetSettingsValue(_, _) {
          let _ = this.GetSettingSchema(_);
          null != _
            ? (null != _ &&
                ("int" == _.type
                  ? (_ = parseInt(_))
                  : "float" == _.type
                    ? (_ = parseFloat(_))
                    : "string" == _.type
                      ? (_ = "" + _)
                      : "bool" == _.type && (_ = !!_)),
              _.requires_restart && this.SetRestartRequired(),
              this.SetSettingsStringValueWithoutSchema(_, _))
            : console.log(
                "Tried to set setting " +
                  _ +
                  " but it's not in the schema! Aborting",
              );
        }
        SetSettingsStringValueWithoutSchema(_, _) {
          if (VRHTML) {
            const _ = _.split("/");
            if (4 != _.length || "" != _[0] || "settings" != _[1])
              throw new Error("bad settings path " + _);
            VRHTML.VRSettings.Set(_[2], _[3], _),
              this.settings.set(_, VRHTML.VRSettings.Get(_[2], _[3]));
          } else
            null != _ && this.settings.set(_, _), this.pendingChanges.set(_, _);
          this.UpdateLastUserWriteTimeForSetting(_);
        }
        GetSettingsValue(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            return new Promise(function (_, _) {
              _()
                .get("/settings_get", {
                  params: {
                    name: _,
                  },
                })
                .then((_) => {
                  _(_.data);
                })
                .catch((_) => {
                  __webpack_require__(null);
                });
            });
          });
        }
        ResetAppSettings(_) {
          return _()
            .post("/app/resetsettings", {
              app: _,
            })
            .then((_) => this.GetAppSettings(_))
            .catch((_) => {});
        }
        ResetAllAppResolutionScales() {
          return _()
            .post("/app/resetallresolutionscales")
            .then((_) => !0)
            .catch((_) => {});
        }
        SetAppSettings(_, _) {
          let _ = Object.assign(Object.assign({}, _), {
            app: _,
          });
          _().post("/app/setsettings", _);
          for (let _ = 0; _ < this.apps.length; _++)
            if (this.apps[_].key == _.app) {
              !this.apps[_].is_autolaunch &&
                _.is_autolaunch &&
                this.SetRestartRequired(),
                (this.apps[_] = Object.assign(
                  Object.assign({}, this.apps[_]),
                  _,
                ));
              break;
            }
        }
        GetAppSettings(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            return new Promise(function (_, _) {
              _()
                .get("/app/getsettings", {
                  params: {
                    app: _,
                  },
                })
                .then((_) => {
                  _(_.data);
                })
                .catch((_) => {
                  __webpack_require__(null);
                });
            });
          });
        }
        GetAppInfo(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            return new Promise(function (_, _) {
              _()
                .get("/app/getinfo", {
                  params: {
                    app: _,
                  },
                })
                .then((_) => {
                  _(_.data);
                })
                .catch((_) => {
                  __webpack_require__(null);
                });
            });
          });
        }
        GetAppName(_) {
          var _;
          return null === (_ = this.apps.find((_) => _.key == _)) ||
            void 0 === _
            ? void 0
            : _.name;
        }
        get showAdvancedSettings() {
          return this.settings.get(_._);
        }
        set showAdvancedSettings(_) {
          this.SetSettingsValue(_._, _);
        }
        showBindingCallouts(_) {
          let _ = {
            type: "request_binding_callouts",
            app_key: _,
          };
          this.m_mailbox.SendMessage(_.I0c, _);
        }
      }
      (_.SERVER_SETTING_MERGE_DEFER_DURATION = 1),
        (0, _._)([_.observable], _.prototype, "connected", void 0),
        (0, _._)([_.observable], _.prototype, "settingsSchema", void 0),
        (0, _._)([_.observable], _.prototype, "settings", void 0),
        (0, _._)([_.observable], _.prototype, "systemInfo", void 0),
        (0, _._)([_.observable], _.prototype, "audioDevices", void 0),
        (0, _._)([_.observable], _.prototype, "apps", void 0),
        (0, _._)([_.observable], _.prototype, "probablyOwnedAppkeys", void 0),
        (0, _._)([_.observable], _.prototype, "m_bSteamVRMain", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "workshopStateChangedCanary",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "pendingChanges", void 0),
        (0, _._)([_.observable], _.prototype, "route", void 0),
        (0, _._)([_.computed], _.prototype, "showInternalSettings", null),
        (0, _._)([_._], _.prototype, "OpenWebSocketToHost", null),
        (0, _._)([_._], _.prototype, "OnWorkshopStateChangedMessage", null),
        (0, _._)([_._], _.prototype, "OnChangeRouteMessage", null),
        (0, _._)([_._], _.prototype, "OnAppConfigChangedMessage", null),
        (0, _._)([_._], _.prototype, "OnRefreshRateChangeMessage", null),
        (0, _._)([_.action.bound], _.prototype, "onHashChanged", null),
        (0, _._)([_.computed], _.prototype, "routePage", null),
        (0, _._)([_.computed], _.prototype, "routePageSection", null),
        (0, _._)([_.computed], _.prototype, "routePageSectionParams", null),
        (0, _._)([_.action], _.prototype, "setRoutePage", null),
        (0, _._)([_.action], _.prototype, "setRoutePageSection", null),
        (0, _._)([_.action], _.prototype, "setRoutePageSectionParams", null),
        (0, _._)([_.action], _.prototype, "setRoute", null),
        (0, _._)([_._], _.prototype, "SetDashboardFadeSupression", null),
        (0, _._)([_._], _.prototype, "SetDashboardForceBoundsVisible", null),
        (0, _._)([_._], _.prototype, "SetRestartRequired", null),
        (0, _._)([_._], _.prototype, "OnWebSocketOpen", null),
        (0, _._)([_._], _.prototype, "OnWebSocketClose", null),
        (0, _._)([_._], _.prototype, "WebSocketSend", null),
        (0, _._)([_._], _.prototype, "OnWebSocketMessage", null),
        (0, _._)([_.action], _.prototype, "OnVRSettings", null),
        (0, _._)([_.action], _.prototype, "SetSettingValueFromServer", null),
        (0, _._)([_.action], _.prototype, "OnVRSettingsSchema", null),
        (0, _._)([_.action.bound], _.prototype, "ResetSettingsValue", null),
        (0, _._)([_.action], _.prototype, "ResetSettingsValues", null),
        (0, _._)([_.action], _.prototype, "SetSettingsValue", null),
        (0, _._)(
          [_.action],
          _.prototype,
          "SetSettingsStringValueWithoutSchema",
          null,
        );
      const _ = new _();
      window.VRSettingsState = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
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
        (_[(_.Alive = 0)] = "Alive"), (_[(_.Destroyed = 1)] = "Destroyed");
      })(_ || (_ = {}));
      class _ {
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
          let _ = this.frame.title;
          return (
            _.length > _._ && (_ = _.substring(0, _._ - 3) + "..."),
            `${this.frame.frameID}[${this.pageID}] "${_}"`
          );
        }
        RegisterComponent(_) {
          this.m_setComponents.add(_);
        }
        constructor(_, _, _) {
          (this.props = void 0),
            (this.m_eState = _.Alive),
            (this.m_OnDestroyed = new _._()),
            (this.m_sSummonOverlayKey = void 0),
            (this.m_bExternalDashboardOverlay = !1),
            (this.m_mainPanel = void 0),
            (this.m_bSpatialize = void 0),
            (this.Log = new _._("Frame", () => this.logPrefix)),
            (this.m_setComponents = new Set()),
            (this.keyboard = new _._(this)),
            (this.sharing = void 0),
            (this.size = new _._(this)),
            (this.inputFocus = new _._(this)),
            (this.m_Frame = _),
            (this.m_unPageID = _),
            (this.props = _),
            (0, _.makeObservable)(this);
        }
        Init() {
          for (const _ of this.m_setComponents) _.Init();
        }
        DestroyPage() {
          this.m_eState != _.Destroyed &&
            ((this.m_eState = _.Destroyed),
            this.m_OnDestroyed.Dispatch(),
            this.m_OnDestroyed.ClearAllCallbacks());
        }
        SetSummonOverlayKey(_) {
          this.m_sSummonOverlayKey = _;
        }
        SetIsExternalDashboardOverlay(_) {
          this.m_bExternalDashboardOverlay = _;
        }
        SetMainPanel(_) {
          if (!_)
            return {
              Unset: () => {},
            };
          this.m_mainPanel = _;
          const _ = this.size.SetMainPanel(_).Unset;
          return {
            Unset: () => {
              (this.m_mainPanel = void 0), _();
            },
          };
        }
        get mainPanelID() {
          if (this.m_mainPanel) {
            const _ = this.m_mainPanel.getID();
            if (null == _) return;
            return (0, _.nXw)(_._, _);
          }
          if (this.isExternalDashboardOverlay) {
            if (null == this.summonOverlayKey) return;
            return (0, _.nXw)(_._, this.summonOverlayKey) + "_Panel";
          }
        }
        get mainPanelSGID() {
          var _;
          return this.m_mainPanel
            ? this.m_mainPanel.getSGID()
            : (this.isExternalDashboardOverlay &&
                null != this.summonOverlayKey &&
                (null === (_ = _._.GetOverlayInfo(this.summonOverlayKey)) ||
                void 0 === _
                  ? void 0
                  : _.unStandalonePanelSGID)) ||
                void 0;
        }
        GetPanelAnchorID(_) {
          if (!this.isExternalDashboardOverlay)
            return `frame:${this.frame.frameID}:page:${this.pageID}:anchor:${_}`;
          {
            if (null == this.summonOverlayKey) return;
            const _ = (0, _.nXw)(_._, this.summonOverlayKey);
            switch (_) {
              case _.OiK.TopCenter:
                return _ + "_TopCenter";
              case _.OiK.CenterLeft:
                return _ + "_CenterLeft";
              case _.OiK.CenterRight:
                return _ + "_CenterRight";
              case _.OiK.BottomCenter:
                return _ + "_BottomCenter";
              case _.OiK.BottomRight:
                return _ + "_BottomRight";
            }
          }
        }
        get isSystemPanel() {
          return (
            this.inputFocus.componentProps.steamInputAppID == _._ ||
            (0, _._)(this.inputFocus.componentProps.steamInputAppID) ||
            (this.m_mainPanel && !this.m_mainPanel.isExternal)
          );
        }
        get shouldShowMinimalDecorations() {
          return (
            null != this.summonOverlayKey &&
            _._.GetOverlayFlag(this.summonOverlayKey, 67108864)
          );
        }
        get canSpatialize() {
          var _, _;
          return (
            !!(null === (_ = _._.audioDevices) || void 0 === _
              ? void 0
              : _.spatialize) &&
            ((null === (_ = this.summonOverlayKey) || void 0 === _
              ? void 0
              : _.startsWith(_._ + ".")) ||
              this.summonOverlayKey == _._)
          );
        }
        get isSpatializeEnabled() {
          return (
            !!this.summonOverlayKey &&
            !!this.canSpatialize &&
            (null == this.m_bSpatialize &&
              ((this.m_bSpatialize = !1),
              _._.GetAppSettings(this.summonOverlayKey).then(
                (_) => (this.m_bSpatialize = _.spatialize),
              )),
            this.m_bSpatialize)
          );
        }
        SetSpatializeEnabled(_) {
          if (!this.summonOverlayKey) return;
          this.m_bSpatialize = _;
          let _ = {};
          (_.spatialize = _), _._.SetAppSettings(this.summonOverlayKey, _);
        }
      }
      (0, _._)([_.observable], _.prototype, "props", void 0),
        (0, _._)([_.observable], _.prototype, "m_eState", void 0),
        (0, _._)([_.observable], _.prototype, "m_sSummonOverlayKey", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_bExternalDashboardOverlay",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_mainPanel", void 0),
        (0, _._)([_.observable], _.prototype, "m_bSpatialize", void 0),
        (0, _._)([_.computed], _.prototype, "state", null),
        (0, _._)([_.computed], _.prototype, "summonOverlayKey", null),
        (0, _._)([_.computed], _.prototype, "isExternalDashboardOverlay", null),
        (0, _._)([_.computed], _.prototype, "isActivePage", null),
        (0, _._)([_.computed], _.prototype, "isActiveAndVisiblePage", null),
        (0, _._)([_.computed], _.prototype, "mountableID", null),
        (0, _._)([_.computed], _.prototype, "latestContentSize", null),
        (0, _._)([_.computed], _.prototype, "logPrefix", null),
        (0, _._)([_.action], _.prototype, "DestroyPage", null),
        (0, _._)([_.action], _.prototype, "SetSummonOverlayKey", null),
        (0, _._)(
          [_.action],
          _.prototype,
          "SetIsExternalDashboardOverlay",
          null,
        ),
        (0, _._)([_.action], _.prototype, "SetMainPanel", null),
        (0, _._)([_.computed], _.prototype, "mainPanelID", null),
        (0, _._)([_.computed], _.prototype, "mainPanelSGID", null),
        (0, _._)([_.computed], _.prototype, "isSystemPanel", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "shouldShowMinimalDecorations",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "canSpatialize", null),
        (0, _._)([_.computed], _.prototype, "isSpatializeEnabled", null),
        (0, _._)([_.action.bound], _.prototype, "SetSpatializeEnabled", null);
      const _ = _.forwardRef(function (_, _) {
          const { children: _, summonOverlayKey: _ } = _,
            { frame: _ } = (0, _._)(),
            _ = _.useMemo(() => _.CreatePage(_), [_]);
          _.useLayoutEffect(() =>
            (0, _.runInAction)(() => {
              _.props = _;
            }),
          ),
            _.useEffect(() => _.SetSummonOverlayKey(_), [_, _, _]),
            (0, _._)(_, _),
            _.useEffect(() => (_.Init(), () => _.DestroyPage()), [_]);
          const _ = (0, _._)(() => _.mountableID);
          return _.createElement(
            _._.Provider,
            {
              value: {
                frame: _,
                page: _,
              },
            },
            _.createElement(
              _.IS7,
              {
                _: _,
              },
              _,
            ),
          );
        }),
        _ = _.forwardRef(function (_, _) {
          var _, _;
          const {
              requireExternalOverlay: _ = !0,
              overlayKey: _,
              componentProps: _,
            } = _,
            _ = (0, _._)(_, [
              "requireExternalOverlay",
              "overlayKey",
              "componentProps",
            ]),
            { frame: _ } = (0, _._)(),
            _ = _.useCallback(
              (_) => {
                null == _ || _.SetIsExternalDashboardOverlay(!0),
                  (0, _._)(_, _);
              },
              [_],
            ),
            _ = (0, _._)(() => _.curvature.curvatureTransformOriginID),
            _ = (0, _._)(() => _._.GetOverlayInfo(_)),
            _ =
              null !== (_ = null == _ ? void 0 : _.unFlags) && void 0 !== _
                ? _
                : 0,
            _ = (16 & _) > 0,
            _ = (1073741824 & _) > 0;
          return _ && !_
            ? null
            : _.createElement(
                _,
                Object.assign({}, _, {
                  summonOverlayKey:
                    null !== (_ = _.summonOverlayKey) && void 0 !== _ ? _ : _,
                  ref: _,
                  componentProps: Object.assign(Object.assign({}, _), {
                    keyboard: Object.assign(
                      {
                        overlayKeyForKeyboardInput: _,
                      },
                      null == _ ? void 0 : _.keyboard,
                    ),
                    inputFocus: Object.assign(
                      {
                        vrClientPID: _ ? _.unClientPID : void 0,
                        steamInputAppID: _ ? _.unSteamInputAppID : void 0,
                      },
                      null == _ ? void 0 : _.inputFocus,
                    ),
                  }),
                }),
                _.createElement(_.HWh, {
                  mountedId: (0, _.nXw)(_._, _),
                }),
                _.createElement(_.dLy, {
                  _: (0, _.nXw)(_._, _) + "_CurvatureOrigin",
                  parent_id: _,
                }),
                _.children,
              );
        });
      function _(_) {
        const { page: _ } = (0, _._)();
        if ((0, _._)(() => (null == _ ? void 0 : _.isActiveAndVisiblePage)))
          return _.createElement(_.Fragment, null, _.children);
      }
      function _(_) {
        const { frame: _, page: _ } = (0, _._)();
        if (_ && _ && !_.isExternalDashboardOverlay)
          return _.createElement(
            _.Fragment,
            null,
            _._.map((_) =>
              _.createElement(_.Ci8, {
                key: _,
                _: __webpack_require__.GetPanelAnchorID(_),
                location: _,
              }),
            ),
          );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      const _ = 20,
        _ = [
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
        _ = [
          _.OiK.TopCenter,
          _.OiK.CenterLeft,
          _.OiK.CenterRight,
          _.OiK.BottomCenter,
          _.OiK.BottomRight,
        ];
      function _(_, _) {
        return !!_ && !!_ && _.frameID === _.frameID;
      }
    },
  },
]);
