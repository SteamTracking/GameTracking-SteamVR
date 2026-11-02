var CLSTAMP = "steamdb";
(() => {
  "use strict";
  var _,
    _ = {
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
    [967, 991, 154, 305, 527, 170, 452, 797, 500, 148, 554, 906, 57],
    () => _(4170),
  );
  _ = _._(_);
})();
