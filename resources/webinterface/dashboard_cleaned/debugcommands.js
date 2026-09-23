var CLSTAMP = "steamdb";
(() => {
  "use strict";
  var _,
    _ = {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
        });
        __webpack_require__("chunkid"), __webpack_require__("chunkid");
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
        window.LocalizationManager = _;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          constructor(_, _, _) {
            (this.keyCode = _), (this.shift = _), (this.control = _);
          }
          equals(_) {
            return (
              _ &&
              this.keyCode === _.keyCode &&
              this.shift === _.shift &&
              this.control === _.control
            );
          }
          get isValid() {
            return (
              ((_ = this.keyCode) > 47 && _ < 58) ||
              32 == _ ||
              13 == _ ||
              (_ > 64 && _ < 91) ||
              (_ > 95 && _ < 112) ||
              (_ > 185 && _ < 193) ||
              (_ > 218 && _ < 223) ||
              (function (_) {
                return _ >= 37 && _ <= 40;
              })(this.keyCode)
            );
            var _;
          }
          get character() {
            switch (this.keyCode) {
              case 8:
                return "Backspace";
              case 9:
                return "Tab";
              case 13:
                return "Enter";
              case 16:
                return "Shift";
              case 17:
                return "Ctrl";
              case 18:
                return "Alt";
              case 19:
                return "Pause/Break";
              case 20:
                return "Caps Lock";
              case 27:
                return "Esc";
              case 32:
                return "Space";
              case 33:
                return "Page Up";
              case 34:
                return "Page Down";
              case 35:
                return "End";
              case 36:
                return "Home";
              case 37:
                return "Left";
              case 38:
                return "Up";
              case 39:
                return "Right";
              case 40:
                return "Down";
              case 45:
                return "Insert";
              case 46:
                return "Delete";
              case 91:
                return "Windows";
              case 93:
                return "Right Click";
              case 96:
                return "Numpad 0";
              case 97:
                return "Numpad 1";
              case 98:
                return "Numpad 2";
              case 99:
                return "Numpad 3";
              case 100:
                return "Numpad 4";
              case 101:
                return "Numpad 5";
              case 102:
                return "Numpad 6";
              case 103:
                return "Numpad 7";
              case 104:
                return "Numpad 8";
              case 105:
                return "Numpad 9";
              case 106:
                return "Numpad *";
              case 107:
                return "Numpad +";
              case 109:
                return "Numpad -";
              case 110:
                return "Numpad .";
              case 111:
                return "Numpad /";
              case 112:
                return "F1";
              case 113:
                return "F2";
              case 114:
                return "F3";
              case 115:
                return "F4";
              case 116:
                return "F5";
              case 117:
                return "F6";
              case 118:
                return "F7";
              case 119:
                return "F8";
              case 120:
                return "F9";
              case 121:
                return "F10";
              case 122:
                return "F11";
              case 123:
                return "F12";
              case 144:
                return "Num Lock";
              case 145:
                return "Scroll Lock";
              case 182:
                return "My Computer";
              case 183:
                return "My Calculator";
              case 186:
                return ";";
              case 187:
                return "=";
              case 188:
                return ",";
              case 189:
                return "-";
              case 190:
                return ".";
              case 191:
                return "/";
              case 192:
                return "`";
              case 219:
                return "[";
              case 220:
                return "\\";
              case 221:
                return "]";
              case 222:
                return "'";
              default:
                return String.fromCharCode(this.keyCode);
            }
          }
          static fromSerializedString(_) {
            let _ = _.split(",");
            if (3 !== _.length) return null;
            let _ = Number.parseInt(_[0]),
              _ = Number.parseInt(_[1]),
              _ = Number.parseInt(_[2]);
            return new _(_, _ > 0, _ > 0);
          }
          toSerializedString() {
            return [
              this.keyCode,
              this.shift ? 1 : 0,
              this.control ? 1 : 0,
            ].join(",");
          }
          toString() {
            let _ = this.character;
            return (
              this.shift && (_ = "shift + " + _),
              this.control && (_ = "ctrl + " + _),
              _
            );
          }
          render() {
            return _.createElement(
              "span",
              null,
              this.control && "control",
              this.control &&
                _.createElement(
                  "span",
                  {
                    className: "Plus",
                  },
                  " + ",
                ),
              this.shift && "shift",
              this.shift &&
                _.createElement(
                  "span",
                  {
                    className: "Plus",
                  },
                  " + ",
                ),
              this.character,
            );
          }
        }
        class _ {
          constructor(_, _) {
            (this.shortcut = void 0),
              (this.sCommand = _),
              (this.sMailbox = _),
              (this.refButton = _.createRef()),
              (0, _.makeObservable)(this);
          }
        }
        (0, _._)([_.observable], _.prototype, "shortcut", void 0);
        class _ {
          dumpShortcuts() {
            let _ = ["Defaults:"];
            this.rCommands.forEach((_) => {
              _.shortcut &&
                _.push(
                  '"' +
                    _.sCommand +
                    '": new KeyboardShortcut( ' +
                    _.shortcut.keyCode +
                    ", " +
                    (_.shortcut.shift ? "true" : "false") +
                    ", " +
                    (_.shortcut.control ? "true" : "false") +
                    " ), // " +
                    _.shortcut.toString().toLowerCase(),
                );
            }),
              console.log(_.join("\n"));
          }
          constructor(_) {
            (this.rCommands = []),
              (this.rCommands = _),
              (window.dumpShortcuts = this.dumpShortcuts);
          }
          initializeKeyboardShortcuts() {
            return (0, _._)(this, void 0, void 0, function* () {
              this.resetCommandShortcuts(!1), yield this.loadCommandShortcuts();
            });
          }
          getCommandForShortcut(_) {
            if (!_) return null;
            let _ = this.rCommands.filter((_) => _.equals(_.shortcut));
            return _.length > 0 ? _[0] : null;
          }
          resetCommandShortcuts(_) {
            this.rCommands.forEach((_) => this.resetCommandShortcut(_, !1)),
              _ && this.saveCommandShortcuts();
          }
          getCommandForName(_) {
            let _ = this.rCommands.filter((_) => _.sCommand === _);
            return _.length > 0 ? _[0] : null;
          }
          loadCommandShortcuts() {
            return (0, _._)(this, void 0, void 0, function* () {
              let _;
              try {
                _ = yield _._.GetSettingsValue(_.k_sPropDebugCommandShortcuts);
              } catch (_) {
                return;
              }
              _ &&
                _.split(";").forEach((_) => {
                  let _ = _.split(":");
                  if (2 !== _.length) return;
                  let _ = this.getCommandForName(_[0]),
                    _ = _.fromSerializedString(_[1]);
                  _ && _ && this.bindCommandToShortcut(_, _, !1);
                });
            });
          }
          saveCommandShortcuts() {
            let _ = this.rCommands
              .filter(
                (_) =>
                  !(
                    !_.shortcut ||
                    (_.sCommand in _.k_DefaultShortcuts &&
                      _.k_DefaultShortcuts[_.sCommand].equals(_.shortcut))
                  ),
              )
              .map((_) => _.sCommand + ":" + _.shortcut.toSerializedString())
              .join(";");
            _._.SetSettingsStringValueWithoutSchema(
              _.k_sPropDebugCommandShortcuts,
              _,
            );
          }
          bindCommandToShortcut(_, _, _) {
            let _ = this.getCommandForShortcut(_);
            _ && (_.shortcut = null),
              (_.shortcut = _),
              _ && this.saveCommandShortcuts();
          }
          resetCommandShortcut(_, _) {
            let _ = null;
            _.sCommand in _.k_DefaultShortcuts &&
              (_ = _.k_DefaultShortcuts[_.sCommand]),
              this.bindCommandToShortcut(_, _, _);
          }
        }
        (_.k_sPropDebugCommandShortcuts =
          "/settings/steamvr/debugCommandShortcuts"),
          (_.k_DefaultShortcuts = {
            application_render_model_visibility_toggle: new _(69, !1, !1),
            application_throttling_frame_count_cycle: new _(82, !1, !1),
            application_throttling_toggle: new _(82, !0, !1),
            async_mode_running_start_toggle: new _(85, !1, !1),
            async_mode_toggle: new _(65, !0, !1),
            black_clamp_toggle: new _(75, !1, !1),
            camera_room_view_toggle: new _(67, !1, !1),
            collision_bounds_center_marker_toggle: new _(73, !1, !1),
            collision_bounds_ground_perimeter_toggle: new _(80, !1, !1),
            collision_bounds_play_space_toggle: new _(79, !1, !1),
            collision_bounds_style_cycle: new _(72, !1, !1),
            debug_counter_increment: new _(32, !1, !1),
            flip_universe_transform_toggle: new _(70, !0, !1),
            gpu_profiler_capture: new _(86, !1, !1),
            grid_mode_cycle: new _(71, !1, !1),
            ipd_offset_decrement: new _(189, !1, !1),
            ipd_offset_increment: new _(187, !1, !1),
            latency_testing_toggle: new _(190, !0, !1),
            motion_vector_debug_mode_toggle: new _(74, !0, !1),
            pixel_line_double_sim_toggle: new _(89, !1, !1),
            reflection_map_reload: new _(88, !1, !1),
            screenshot_all_request: new _(83, !0, !1),
            screenshot_request: new _(83, !1, !1),
            seated_position_reset: new _(90, !1, !1),
            shaders_force_reload: new _(220, !1, !1),
            simulate_3dof_toggle: new _(84, !1, !1),
            single_frame_stepping_request: new _(190, !1, !1),
            user_brightness_decrement: new _(186, !1, !1),
            user_brightness_increment: new _(222, !1, !1),
            vsync_to_photons_big_decrement: new _(219, !0, !1),
            vsync_to_photons_big_increment: new _(221, !0, !1),
            vsync_to_photons_decrement: new _(219, !1, !1),
            vsync_to_photons_increment: new _(221, !1, !1),
          }),
          (0, _._)([_._], _.prototype, "dumpShortcuts", null),
          (0, _._)([_._], _.prototype, "resetCommandShortcut", null);
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              (this.previousOnKeyDown = null),
              (this.refSearchInput = null),
              (this.state = {
                commands: new _([]),
                editingCommand: null,
                sSearch: sessionStorage.getItem("search") || "",
                bFocused: document.hasFocus(),
              }),
              (this.refSearchInput = _.createRef()),
              _._.Init(!1),
              (this.mailbox = new _._nH()),
              this.mailbox.Init("debugcommands").then(() =>
                (0, _._)(this, void 0, void 0, function* () {
                  console.log("[debugcommands] Requesting commands..");
                  let _ = {
                      type: "get_debug_commands",
                    },
                    _ = yield this.mailbox.SendMessageAndWaitForResponse(
                      _.Wqq,
                      _,
                      "get_debug_commands_response",
                    ),
                    _ = yield this.mailbox.SendMessageAndWaitForResponse(
                      _.pgT,
                      _,
                      "get_debug_commands_response",
                    ),
                    _ = _.commands.concat(_.commands);
                  try {
                    if (
                      yield _._.GetSettingsValue("/settings/steamvr/usePrism")
                    ) {
                      let _ = yield this.mailbox.SendMessageAndWaitForResponse(
                        "prism_mailbox",
                        _,
                        "get_debug_commands_response",
                      );
                      _ = _.concat(_.commands);
                    }
                  } catch (_) {}
                  let _ = new _(_.map((_) => new _(_.command, _.mailbox)));
                  yield _.initializeKeyboardShortcuts(),
                    this.setState({
                      commands: _,
                    });
                }),
              );
          }
          componentDidMount() {
            (this.previousOnKeyDown = window.onkeypress),
              (window.onkeydown = this.onKeyDown),
              window.addEventListener("focus", this.onWindowFocus),
              window.addEventListener("blur", this.onWindowBlur);
          }
          componentWillUnmount() {
            (window.onkeydown = this.previousOnKeyDown),
              window.removeEventListener("focus", this.onWindowFocus),
              window.removeEventListener("blur", this.onWindowBlur);
          }
          onWindowFocus() {
            setTimeout(
              () =>
                this.setState({
                  bFocused: !0,
                }),
              0,
            );
          }
          onWindowBlur() {
            setTimeout(
              () =>
                this.setState({
                  bFocused: !1,
                }),
              0,
            ),
              this.endEdit();
          }
          startEdit(_) {
            this.setState({
              editingCommand: _,
            });
          }
          endEdit() {
            this.setState({
              editingCommand: null,
            });
          }
          sendDebugCommand(_) {
            console.log("Sending debug command: " + _.sCommand),
              _.refButton.current &&
                (_.refButton.current.classList.add("Active"),
                setTimeout(() => {
                  _.refButton.current.classList.remove("Active");
                }, 150));
            let _ = {
              type: _.sCommand,
            };
            this.mailbox.SendMessage(_.sMailbox, _);
          }
          onKeyDown(_) {
            if (
              this.refSearchInput.current &&
              this.refSearchInput.current === document.activeElement
            )
              return void (
                "Escape" === _.key && this.refSearchInput.current.blur()
              );
            if ("Escape" === _.key && this.isEditing)
              return void this.endEdit();
            let _ = new _(_.keyCode, _.shiftKey, _.ctrlKey);
            if (_.isValid) {
              if (this.isEditing)
                this.state.commands.bindCommandToShortcut(
                  this.state.editingCommand,
                  _,
                  !0,
                ),
                  this.endEdit();
              else {
                let _ = this.state.commands.getCommandForShortcut(_);
                _ && this.sendDebugCommand(_);
              }
              switch (_.keyCode) {
                case 37:
                case 38:
                case 39:
                case 40:
                case 32:
                  _.preventDefault();
              }
            }
          }
          get isEditing() {
            return null !== this.state.editingCommand;
          }
          setSearch(_) {
            sessionStorage.setItem("search", _),
              this.setState({
                sSearch: _,
              });
          }
          onSearchChanged() {
            this.refSearchInput.current &&
              this.setSearch(this.refSearchInput.current.value);
          }
          clearSearch() {
            this.refSearchInput.current &&
              ((this.refSearchInput.current.value = ""),
              setTimeout(() => this.refSearchInput.current.focus(), 0)),
              this.setSearch("");
          }
          onResetShortcuts() {
            this.state.commands.resetCommandShortcuts(!0);
          }
          render() {
            let _ = ["DebugCommandsList"];
            return (
              this.isEditing && _.push("Editing"),
              _.createElement(
                "div",
                {
                  className: "DebugCommands",
                },
                _.createElement(
                  "div",
                  {
                    className: "Header",
                  },
                  _.createElement(
                    "div",
                    {
                      className: "InnerContainer",
                    },
                    _.createElement("input", {
                      type: "text",
                      placeholder: "Search debug commands",
                      ref: this.refSearchInput,
                      onChange: this.onSearchChanged,
                      value: this.state.sSearch || "",
                    }),
                    this.state.sSearch &&
                      _.createElement(
                        "div",
                        {
                          className: "ClearSearchButton",
                          onClick: this.clearSearch,
                        },
                        "×",
                      ),
                    _.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.onResetShortcuts,
                      },
                      _.createElement("span", null, "Reset Shortcuts"),
                    ),
                  ),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.join(" "),
                  },
                  this.state.commands.rCommands
                    .filter(
                      (_) =>
                        !this.state.sSearch ||
                        _.sCommand
                          .toLowerCase()
                          .indexOf(this.state.sSearch.toLocaleLowerCase()) >= 0,
                    )
                    .map((_) => {
                      let _ = ["ButtonControl", "DebugCommandButton"],
                        _ = this.state.editingCommand === _;
                      _ && _.push("Editing");
                      let _ = !!_.shortcut;
                      _.push(_ ? "Bound" : "Unbound");
                      let _ = _.createElement("span", null, "unbound");
                      return (
                        _
                          ? (_ = _.createElement(
                              "span",
                              null,
                              "type shortcut...",
                            ))
                          : _.shortcut && (_ = _.shortcut.render()),
                        _.createElement(
                          "div",
                          {
                            key: _.sCommand,
                            ref: _.refButton,
                            onClick: () => this.sendDebugCommand(_),
                            className: _.join(" "),
                          },
                          _.createElement(
                            "div",
                            {
                              className: "CommandName",
                            },
                            _.sCommand,
                          ),
                          _.createElement(
                            "div",
                            {
                              className: "KeyboardShortcut",
                              onClick: (_) => {
                                _.stopPropagation(), this.startEdit(_);
                              },
                            },
                            _,
                          ),
                        )
                      );
                    }),
                ),
                this.isEditing &&
                  _.createElement("div", {
                    className: "EditingFade",
                    onClick: this.endEdit,
                  }),
                !this.state.bFocused &&
                  _.createElement(
                    "div",
                    {
                      className: "Footer",
                    },
                    _.createElement(
                      "h1",
                      null,
                      "Click to enable keyboard shortcuts",
                    ),
                  ),
              )
            );
          }
        };
        (0, _._)([_._], _.prototype, "onWindowFocus", null),
          (0, _._)([_._], _.prototype, "onWindowBlur", null),
          (0, _._)([_._], _.prototype, "endEdit", null),
          (0, _._)([_._], _.prototype, "onKeyDown", null),
          (0, _._)([_.computed], _.prototype, "isEditing", null),
          (0, _._)([_._], _.prototype, "onSearchChanged", null),
          (0, _._)([_._], _.prototype, "clearSearch", null),
          (0, _._)([_._], _.prototype, "onResetShortcuts", null),
          (_ = (0, _._)([_._], _)),
          _._(document.getElementById("root")).render(_.createElement(_, null)),
          (window.document.title = "Debug Commands");
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
        866: 0,
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
  var _ = _._(void 0, [967, 991, 602, 305, 170, 452, 797, 906, 300, 57], () =>
    _(9513),
  );
  _ = _._(_);
})();
