var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [554],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.product || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  product: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  version: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  errors: {
                    _: 3,
                    _,
                    _: !0,
                    _: !0,
                  },
                  tags: {
                    _: 4,
                    _: !0,
                    _: !0,
                    _: _._.readString,
                    _: _._.writeRepeatedString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.identifier || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  identifier: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  message: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  count: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  context: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification_Error";
        }
      }
      var _ = __webpack_require__("chunkid");
      function _(_) {
        return (0, _._)(this, arguments, void 0, function* (_, _ = "SHA-256") {
          let _;
          var _;
          "string" == typeof _
            ? ((_ = _), (_ = new TextEncoder().encode(_).buffer))
            : (_ = _);
          const _ = yield window.crypto.subtle.digest(_, _);
          return (
            (_ = _),
            Array.prototype.map
              .call(new Uint8Array(_), (_) => ("00" + _.toString(16)).slice(-2))
              .join("")
          );
          var _;
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ =
        window.addEventListener ||
        (__webpack_require__._ && __webpack_require__._.addEventListener) ||
        (() => {});
      let _,
        _ = [],
        _ = (_, _, _) =>
          _.push({
            error: _,
            cCallsitesToIgnore: _,
            strComponentStack: _,
          });
      const _ = !0;
      class _ extends Error {
        constructor(..._) {
          super(..._), (this.name = "Assertion Failed");
        }
      }
      {
        const _ = console.assert;
        console.assert = (_, _, ..._) => {
          if (!_) {
            const _ = _();
            _(new _(_(_, ..._)), 2, _);
          }
          _.apply(console, [_, _, ..._]);
        };
        const _ = console.error;
        (console.error = (_, ..._) => {
          const _ = _();
          _(new Error(_(_, ..._)), 1, _), _.apply(console, [_, ..._]);
        }),
          (console.clogerror = (_, _, ..._) => {
            const _ = _();
            _(new Error(_(_, ..._)), _ + 1, _), _.apply(console, [_, ..._]);
          }),
          _("error", (_) => {
            _(_.error, 0);
          }),
          _("unhandledrejection", (_) => {
            _(_.reason, 0);
          }),
          (_ = window.setTimeout(() => {
            (_ = []), (_ = () => {});
          }, 3e4));
      }
      const _ = {
          cCallsitesToIgnore: 0,
          bIncludeMessageInIdentifier: !1,
        },
        _ = [
          "chrome-extension://",
          "HTMLDivElement.onreset \\(/market",
          "/.millennium/Dist",
          "Refused unauthorized RPC command",
        ];
      function _() {
        try {
          const _ = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            _ =
              _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
          if (
            _ &&
            "object" == typeof _ &&
            "object" == typeof _.ReactDebugCurrentFrame &&
            "function" == typeof _.ReactDebugCurrentFrame.getCurrentStack
          ) {
            const _ = _.ReactDebugCurrentFrame.getCurrentStack();
            if ("string" == typeof _) return _;
          } else if (
            _ &&
            "object" == typeof _ &&
            "function" == typeof _.getCurrentStack
          ) {
            const _ = _.getCurrentStack();
            if ("string" == typeof _) return _;
          }
        } catch (_) {}
      }
      class _ {
        constructor(_ = !0) {
          (this.m_transport = null),
            (this.m_rgErrorQueue = []),
            (this.m_sendTimer = null),
            (this.m_bReportingPaused = !1),
            (this.m_pauseTimer = void 0),
            (this.m_fnGetReportingInterval = _),
            (this.m_bEnabled = !0),
            (this.m_bInitialized = !1),
            _
              ? (_.forEach(
                  ({ error: _, cCallsitesToIgnore: _, strComponentStack: _ }) =>
                    this.ReportError(_, {
                      cCallsitesToIgnore: _,
                      strComponentStack: _,
                    }),
                ),
                (_ = (_, _, _) =>
                  this.ReportError(_, {
                    cCallsitesToIgnore: _,
                    strComponentStack: _,
                  })))
              : (_ = () => {}),
            (_ = []),
            clearTimeout(_),
            window.setTimeout(() => {
              this.m_bInitialized ||
                ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
            }, 3e4);
        }
        Init(_, _, _, _ = {}) {
          (this.m_bInitialized = !0),
            (this.m_strProduct = _),
            (this.m_strVersion = _),
            (this.m_transport = _),
            _.fnGetReportingInterval &&
              (this.m_fnGetReportingInterval = _.fnGetReportingInterval),
            this.m_bEnabled ||
              (console.error(
                "Error reporting was initialized after being disabled, possibly dropping errors.",
              ),
              (this.m_bEnabled = !0)),
            this.m_rgErrorQueue.length &&
              (this.SendErrorReports(this.m_rgErrorQueue),
              (this.m_rgErrorQueue = [])),
            (Error.stackTraceLimit = 12);
        }
        ReportError(_, _) {
          return (0, _._)(this, void 0, void 0, function* () {
            if (!_)
              return (
                console.warn(
                  "Failed to report error: ReportError() was called without an error to report.",
                ),
                null
              );
            try {
              const _ = Object.assign(Object.assign({}, _), _);
              if (!this.m_bEnabled) return null;
              0;
              const _ = yield (function (_, _) {
                try {
                  return _.stack && _.stack.match(_)
                    ? (function (_, _) {
                        return (0, _._)(this, void 0, void 0, function* () {
                          var _, _;
                          const {
                              cCallsitesToIgnore: _,
                              bIncludeMessageInIdentifier: _,
                            } = _,
                            _ =
                              null !==
                                (_ =
                                  null === (_ = _.stack) || void 0 === _
                                    ? void 0
                                    : __webpack_require__.split("\n")) &&
                              void 0 !== _
                                ? _
                                : [];
                          let _ = _(_.filter((_) => !!_.match(_))[_]);
                          _ && (_ = `${_} ${_.message}`);
                          const _ = _.map((_) => {
                            const _ = _.match(/(.*)\((.*):(\d+):(\d+)\)/);
                            if (!_) return _;
                            if (5 === _.length) {
                              const [_, _, _, _, _] = _,
                                _ = parseInt(_),
                                _ = parseInt(_);
                              if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
                            }
                            return _;
                          }).filter((_) => !!_);
                          return {
                            identifier: _,
                            identifierHash: yield _(_),
                            message: _,
                          };
                        });
                      })(_, _)
                    : _.stack && _.stack.match(_)
                      ? (function (_, _) {
                          return (0, _._)(this, void 0, void 0, function* () {
                            var _, _;
                            const {
                                cCallsitesToIgnore: _,
                                bIncludeMessageInIdentifier: _,
                              } = _,
                              _ =
                                null !==
                                  (_ =
                                    null === (_ = _.stack) || void 0 === _
                                      ? void 0
                                      : __webpack_require__.split("\n")) &&
                                void 0 !== _
                                  ? _
                                  : [];
                            let _ = _(_.filter((_) => !!_.match(_))[_]);
                            _ && (_ = `${_} ${_.message}`);
                            const _ = _.map((_) => {
                              const _ = _.match(/(.*@)?(.*):(\d+):(\d+)/);
                              if (!_) return _;
                              if (5 === _.length) {
                                const [_, _, _, _, _] = _,
                                  _ = parseInt(_),
                                  _ = parseInt(_);
                                if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
                              }
                              return _;
                            }).filter((_) => !!_);
                            return {
                              identifier: _,
                              identifierHash: yield _(_),
                              message: [_.message, ..._],
                            };
                          });
                        })(_, _)
                      : _.stack && _.stack.match(_)
                        ? (function (_, _) {
                            return (0, _._)(this, void 0, void 0, function* () {
                              var _, _;
                              const {
                                  bIncludeMessageInIdentifier: _,
                                  cCallsitesToIgnore: _,
                                } = _,
                                _ =
                                  null !==
                                    (_ =
                                      null === (_ = _.stack) || void 0 === _
                                        ? void 0
                                        : __webpack_require__.split("\n")) &&
                                  void 0 !== _
                                    ? _
                                    : [],
                                _ = _[_],
                                _ = _.split("/");
                              let _ = _[_.length - 1];
                              _.indexOf("@") > -1 &&
                                (_ = _.split("@")[0] + "@" + _),
                                _ && (_ = `${_} ${_.message}`);
                              const _ = _.map((_) => {
                                const _ = _.match(/(.*@)?(.*):(\d+):(\d+)/);
                                if (!_) return _;
                                if (5 === _.length) {
                                  const [_, _, _, _, _] = _,
                                    _ = parseInt(_),
                                    _ = parseInt(_);
                                  if (!isNaN(_) && !isNaN(_))
                                    return [_, _, _, _];
                                }
                                return _;
                              }).filter((_) => !!_);
                              return {
                                identifier: _,
                                identifierHash: yield _(_),
                                message: [_.message, ..._],
                              };
                            });
                          })(_, _)
                        : (_ ||
                            (console.warn(
                              "Error reporter does not know how to parse generated stack:",
                            ),
                            console.warn(_.stack),
                            (_ = !0)),
                          null);
                } catch (_) {
                  return (
                    console.warn(`Failed to normalize error stack: ${_}`), null
                  );
                }
              })(_, _);
              return _
                ? (_.cCallsitesToIgnore &&
                    _.message.splice(1, _.cCallsitesToIgnore),
                  _.strComponentStack &&
                    (_.strComponentStack = _.strComponentStack),
                  this.SendErrorReport(_),
                  _)
                : null;
            } catch (_) {
              return console.log(`Failed to report error: ${_}`), null;
            }
          });
        }
        PauseReportingForDuration(_) {
          this.PauseReporting(),
            (this.m_pauseTimer = window.setTimeout(
              () => this.ResumeReporting(),
              _,
            ));
        }
        PauseReporting() {
          (this.m_bReportingPaused = !0),
            window.clearTimeout(this.m_pauseTimer);
        }
        ResumeReporting() {
          (this.m_bReportingPaused = !1),
            window.clearTimeout(this.m_pauseTimer),
            this.ScheduleSend();
        }
        BIsBlacklisted(_) {
          for (let _ of _.message) {
            let _ = JSON.stringify(_);
            for (let _ of _) {
              const _ = new RegExp(_);
              if (__webpack_require__.match(_))
                return console.warn("Report", _, "matched regex", _), !0;
            }
          }
          return !1;
        }
        SendErrorReport(_) {
          this.BIsBlacklisted(_) ||
            (this.m_transport
              ? this.QueueReport(_)
              : this.m_rgErrorQueue.push(_));
        }
        QueueReport(_) {
          this.m_rgErrorQueue.push(_),
            this.m_bReportingPaused || this.ScheduleSend();
        }
        ScheduleSend() {
          this.m_sendTimer ||
            (this.m_sendTimer = window.setTimeout(() => {
              this.SendErrorReports(this.m_rgErrorQueue),
                (this.m_rgErrorQueue = []),
                (this.m_sendTimer = null);
            }, this.m_fnGetReportingInterval()));
        }
        SendErrorReports(_) {
          if (!_ || !_.length) return;
          const _ = _.reduce(
              (_, _) => (
                _[_.identifier]
                  ? _[_.identifier].count++
                  : (_[_.identifier] = {
                      report: _,
                      count: 1,
                    }),
                _
              ),
              {},
            ),
            _ = Object.keys(_).map((_) => {
              const { report: _, count: _ } = _[_],
                _ = new _();
              return (
                _.set_count(_),
                _.set_identifier(_.identifier + " " + _.identifierHash),
                _.set_message(JSON.stringify(_.message)),
                _.strComponentStack &&
                  _.set_context(
                    JSON.stringify({
                      componentStack: _.strComponentStack,
                    }),
                  ),
                _
              );
            }),
            _ = new _();
          _.set_product(this.m_strProduct),
            _.set_version(this.m_strVersion),
            _.set_errors(_);
          for (const _ of (function () {
            var _;
            const _ = [];
            if (
              ((null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.HasHMD()) || _.push("no_hmd"),
              null === _._ || void 0 === _._ ? void 0 : _._.systemInfo)
            ) {
              const _ = -103;
              _._.systemInfo.os_type > 0
                ? _.push("windows")
                : _._.systemInfo.os_type <= _ && _.push("linux");
            }
            (null === _._ || void 0 === _._ ? void 0 : _._.IsSteamAvailable) ||
              _.push("no_steam");
            const _ =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetStringProperty(
                    "/user/head",
                    _.fD8.ActualTrackingSystemName_String,
                  );
            _ && _.push(_);
            const _ = String(
              null !== (_ = _.Fzk[_._.m_eVRLinkDashboardMode]) && void 0 !== _
                ? _
                : "",
            ).toLowerCase();
            return (
              _._.m_bIsVRLinkClient && _.push("vrlink_client:" + _),
              _._.m_bIsVRLinkServer && _.push("vrlink_server:" + _),
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.IsSteamFrame()) && _.push("frame"),
              _
            );
          })())
            _.add_tags(_);
          this.m_transport.SendNoResponse(
            "ClientMetrics.ReportClientError#1",
            _.serializeBase64String(),
          );
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
        get reporting_enabled() {
          return _;
        }
      }
      function _(_, ..._) {
        if ("string" == typeof _ && 0 === _.length) return _;
        return [_, ..._]
          .map((_) => {
            try {
              let _ = String(_);
              return "[object Object]" == _ && (_ = JSON.stringify(_)), _;
            } catch (_) {
              return "[Stringify Error]";
            }
          })
          .join(", ");
      }
      const _ = /^\s*at .*(\S+:\d+|\(native\))/m,
        _ = /(^|@)\S+:\d+/,
        _ = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
      let _,
        _ = !1;
      function _(_) {
        return (function (_) {
          const _ = "https://",
            _ = _.indexOf(_);
          if (-1 === _) return _;
          const _ = _.indexOf("/", _ + _.length);
          return -1 === _ ? _ : _.slice(0, _) + _.slice(_);
        })(
          (function (_) {
            const _ = _.lastIndexOf("?");
            if (-1 === _) return _;
            const _ = _.indexOf(":", _);
            return -1 === _ ? _ : _.slice(0, _) + _.slice(_);
          })(_),
        );
      }
      const _ = () => (_ || _(new _()), _),
        _ = (_) => {
          (_ = _), _._.InstallErrorReportingStore(_);
        };
      function _(_) {
        return (0, _._)(this, void 0, void 0, function* () {
          try {
            return (yield _(_)).slice(0, 16);
          } catch (_) {
            return "";
          }
        });
      }
      function _() {
        return 1e3 * (0, _._)(1, _._ - 1);
      }
      class _ {
        constructor(_) {
          this.m_strWebAPIBaseURL = _;
        }
        CreateWebAPIURL(_) {
          let _ = _.match(/([^\.]+)\.(.+)#(\d+)/);
          return _ && 4 == _.length
            ? `${this.m_strWebAPIBaseURL}I${_[1]}Service/${_[2]}/v${_[3]}`
            : null;
        }
        SendNoResponse(_, _) {
          let _ = this.CreateWebAPIURL(_);
          if (!_) return void console.warn("Couldn't find service name " + _);
          const _ = new FormData();
          _.append("input_protobuf_encoded", _),
            fetch(_, {
              method: "POST",
              body: _,
              mode: "no-cors",
            })
              .then((_) => {})
              .catch((_) => {});
        }
      }
      let _;
      const _ = () => (_ || (_ = new _("https://api.steampowered.com/")), _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      class _ {
        constructor() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        InitFromObjects(_, _, _, _) {
          this.m_mapTokens.clear();
          let _ = [_, _, _, _];
          for (let _ in _) {
            let _ = _[_];
            for (let _ in _) {
              let _ = _[_];
              for (let _ in _) {
                let _ = _.toLowerCase();
                this.m_mapTokens.has(_) || this.m_mapTokens.set(_, _[_]);
              }
            }
          }
        }
        LocalizeString(_) {
          if (!_ || 0 == _.length || "#" != _.charAt(0)) return "";
          let _ = this.m_mapTokens.get(_.substring(1).toLowerCase());
          return void 0 === _ ? "" : _;
        }
        LocalizeStringFromFallback(_) {
          if (!_ || 0 == _.length || "#" != _.charAt(0)) return "";
          let _ = this.m_mapFallbackTokens.get(_.substring(1).toLowerCase());
          return void 0 === _ ? "" : _;
        }
        static GetLocale() {
          const _ = navigator.languages[0];
          try {
            const _ =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.GetSystemLocale();
            if (!_) return _;
            _.s_Date.toLocaleTimeString(_);
            return _;
          } catch (_) {
            return _;
          }
        }
      }
      function _(_, ..._) {
        let _ = _.LocalizeString(_);
        return _
          ? (_.length > 0 &&
              (_ = __webpack_require__.replace(/%(\d+)\$s/g, function (_, _) {
                return void 0 !== _[_ - 1] ? String(_[_ - 1]) : _;
              })),
            _)
          : _;
      }
      _.s_Date = new Date();
      const _ = new _();
      function _(_, _) {
        _ ||
          (_ = (function () {
            let _ = new Map([
              ["en", "english"],
              ["de", "german"],
              ["fr", "french"],
              ["it", "italian"],
              ["ko", "korean"],
              ["es-419", "latam"],
              ["es", "spanish"],
              ["zh-CN", "schinese"],
              ["zh-TW", "tchinese"],
              ["ru", "russian"],
              ["th", "thai"],
              ["ja", "japanese"],
              ["pt", "portuguese"],
              ["pl", "polish"],
              ["da", "danish"],
              ["nl", "dutch"],
              ["fi", "finnish"],
              ["no", "norwegian"],
              ["sv", "swedish"],
              ["hu", "hungarian"],
              ["cs", "czech"],
              ["ro", "romanian"],
              ["tr", "turkish"],
              ["pt-BR", "brazilian"],
              ["bg", "bulgarian"],
              ["el", "greek"],
              ["uk", "ukranian"],
              ["vi", "vietnamese"],
            ]);
            for (let _ of navigator.languages) {
              let _ = _.split("-");
              if (_.has(_)) return _.get(_);
              if (_.has(_[0])) return _.get(_[0]);
            }
            return "english";
          })());
        let _ = [],
          _ = (_, _, _) => {
            let _,
              _ = Date.now().toString();
            return (
              (_ =
                "drivers" == _
                  ? `/input/localization.json?t=${_}`
                  : "webhelper" == _
                    ? `/dashboard/localization/${_}_${_}.json?t=${_}`
                    : `localization/${_}_${_}.json?t=${_}`),
              _()
                .get(_)
                .then((_) => {
                  __webpack_require__(_.data);
                })
                .catch(() => {})
            );
          },
          _ = [],
          _ = [],
          _ = [],
          _ = [];
        for (let _ of _)
          __webpack_require__.push(
            _(_, _, (_) => {
              _.push(_);
            }),
          ),
            "english" != _ &&
              __webpack_require__.push(
                _(_, "english", (_) => {
                  _.push(_);
                }),
              );
        for (let _ of ["webhelper"])
          __webpack_require__.push(
            _(_, _, (_) => {
              _.push(_);
            }),
          ),
            "english" != _ &&
              __webpack_require__.push(
                _(_, "english", (_) => {
                  _.push(_);
                }),
              );
        return (
          __webpack_require__.push(
            _("drivers", "", (_) => {
              _.push(_);
            }),
          ),
          Promise.all(_).then(() => {
            _.InitFromObjects(_, _, _, _);
          })
        );
      }
      window.LocalizationManager = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_, _) {
        return (
          (_ = Math.ceil(_)),
          (_ = Math.floor(_)),
          Math.floor(Math.random() * (_ - _ + 1)) + _
        );
      }
      function _(_, _, _) {
        return null == _ || isNaN(_) ? _ : Math.max(_, Math.min(_, _));
      }
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
    },
  },
]);
