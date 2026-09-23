var CLSTAMP = "steamdb";
(() => {
  "use strict";
  var _,
    _ = {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
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
        __webpack_require__._(_, {
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
          (0, _._)(
            [_.computed],
            _.prototype,
            "isExternalDashboardOverlay",
            null,
          ),
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
        __webpack_require__._(_, {
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
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        (0, _.configure)({
          enforceActions: "never",
        });
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.m_toastMailbox = new _._nH()),
              (this.state = {
                visible: !1,
                title: "",
                header: "",
                text: "",
              }),
              this.m_toastMailbox.Init("toast_renderer/main"),
              this.m_toastMailbox.RegisterHandler(
                "render_toast",
                this.OnRenderToast,
              ),
              _._.Init(!1);
          }
          OnRenderToast(_) {
            var _;
            let _ =
              null ===
                (_ =
                  null === _.Ay$ || void 0 === _.Ay$
                    ? void 0
                    : _.Ay$.VROverlayInternal) || void 0 === _
                ? void 0
                : _.GetToastInfo(_.notification_id);
            _
              ? this.setState({
                  visible: !0,
                  title: _.sTitle,
                  header: _.sHeader || "",
                  text: _.sText,
                  image: _.sImageData,
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
              ? _.createElement(
                  "div",
                  {
                    className: "VRNotificationRoot",
                  },
                  _.createElement(
                    "div",
                    {
                      className: "VRNotificationApplicationName",
                    },
                    this.state.title,
                  ),
                  _.createElement(
                    "div",
                    {
                      className: "VRNotificationFrame",
                    },
                    _.createElement("div", {
                      className: "VRToastImage",
                      style: {
                        backgroundImage: this.state.image
                          ? "url('" + this.state.image + "')"
                          : "url('/dashboard/images/icons/notification_steamcog.png')",
                      },
                    }),
                    _.createElement(
                      "div",
                      {
                        className: "VRNotificationTextWrapper",
                      },
                      _.createElement(
                        "div",
                        {
                          className: "VRNotificationHeader",
                        },
                        this.state.header,
                      ),
                      _.createElement(
                        "div",
                        {
                          className: "VRNotificationText",
                        },
                        this.state.text,
                      ),
                    ),
                  ),
                )
              : null;
          }
        }
        (0, _._)([_._], _.prototype, "OnRenderToast", null),
          (0, _._)(
            [],
            null === _.Ay$ || void 0 === _.Ay$
              ? void 0
              : _.Ay$.GetSteamLanguage(),
          )
            .then(() => {
              (0, _._)().Init("SteamVR", CLSTAMP, (0, _._)()),
                _._(document.getElementById("root")).render(
                  _.createElement(_, null),
                );
            })
            .catch((_) =>
              console.error("Failed to initialize notification toast:", _),
            );
      },
    },
    _ = {};
  function _(_) {
    var _ = _[_];
    if (void 0 !== _) return _.exports;
    var _ = (_[_] = {
      exports: {},
    });
    return _[_].call(_.exports, _, _.exports, _), _.exports;
  }
  (_._ = _),
    (_ = []),
    (_._ = (_, _, _, _) => {
      if (!_) {
        var _ = 1 / 0;
        for (_ = 0; _ < _.length; _++) {
          for (var [_, _, _] = _[_], _ = !0, _ = 0; _ < _.length; _++)
            (!1 & _ || _ >= _) && Object.keys(_._).every((_) => _._[_](_[_]))
              ? __webpack_require__.splice(_--, 1)
              : ((_ = !1), _ < _ && (_ = _));
          if (_) {
            _.splice(_--, 1);
            var _ = _();
            void 0 !== _ && (_ = _);
          }
        }
        return _;
      }
      _ = _ || 0;
      for (var _ = _.length; _ > 0 && _[_ - 1][2] > _; _--) _[_] = _[_ - 1];
      _[_] = [_, _, _];
    }),
    (_._ = (_) => {
      var _ = _ && _.__esModule ? () => _.default : () => _;
      return (
        _._(_, {
          _: _,
        }),
        _
      );
    }),
    (_._ = (_, _) => {
      for (var _ in _)
        _._(_, _) &&
          !_._(_, _) &&
          Object.defineProperty(_, _, {
            enumerable: !0,
            get: _[_],
          });
    }),
    (_._ = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (_) {
        if ("object" == typeof window) return window;
      }
    })()),
    (_._ = (_, _) => Object.prototype.hasOwnProperty.call(_, _)),
    (_._ = (_) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(_, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(_, "__esModule", {
          value: !0,
        });
    }),
    (() => {
      var _ = {
        915: 0,
        527: 0,
        500: 0,
      };
      _._._ = (_) => 0 === _[_];
      var _ = (_, _) => {
          var _,
            _,
            [_, _, _] = _,
            _ = 0;
          if (_.some((_) => 0 !== _[_])) {
            for (_ in _) _._(_, _) && (_._[_] = _[_]);
            if (_) var _ = _(_);
          }
          for (_ && _(_); _ < _.length; _++)
            (_ = _[_]), _._(_, _) && _[_] && _[_][0](), (_[_] = 0);
          return _._(_);
        },
        _ = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      __webpack_require__.forEach(_.bind(null, 0)),
        (_.push = _.bind(null, _.push.bind(_)));
    })();
  var _ = _._(
    void 0,
    [967, 991, 154, 305, 527, 170, 452, 797, 554, 906, 500, 57],
    () => _(4170),
  );
  _ = _._(_);
})();
