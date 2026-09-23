var CLSTAMP = "11023671";
(() => {
  "use strict";
  var e,
    t = {
      3714: (e, t, n) => {
        n.d(t, { A0: () => r, we: () => s });
        n(6540), n(2505);
        class r {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          InitFromObjects(e, t, n, r) {
            this.m_mapTokens.clear();
            let s = [t, e, r, n];
            for (let e in s) {
              let t = s[e];
              for (let e in t) {
                let n = t[e];
                for (let e in n) {
                  let t = e.toLowerCase();
                  this.m_mapTokens.has(t) || this.m_mapTokens.set(t, n[e]);
                }
              }
            }
          }
          LocalizeString(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            let t = this.m_mapTokens.get(e.substring(1).toLowerCase());
            return void 0 === t ? "" : t;
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            let t = this.m_mapFallbackTokens.get(e.substring(1).toLowerCase());
            return void 0 === t ? "" : t;
          }
          static GetLocale() {
            const e = navigator.languages[0];
            try {
              const t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetSystemLocale();
              if (!t) return e;
              r.s_Date.toLocaleTimeString(t);
              return t;
            } catch (t) {
              return e;
            }
          }
        }
        function s(e, ...t) {
          let n = o.LocalizeString(e);
          return n
            ? (t.length > 0 &&
                (n = n.replace(/%(\d+)\$s/g, function (e, n) {
                  return void 0 !== t[n - 1] ? String(t[n - 1]) : e;
                })),
              n)
            : e;
        }
        r.s_Date = new Date();
        const o = new r();
        window.LocalizationManager = o;
      },
      9513: (e, t, n) => {
        var r = n(1635),
          s = n(6540),
          o = n(5338),
          a = n(3236),
          i = n(6090),
          c = n(7813),
          u = n(1370),
          l = n(1333);
        class d {
          constructor(e, t, n) {
            (this.keyCode = e), (this.shift = t), (this.control = n);
          }
          equals(e) {
            return (
              e &&
              this.keyCode === e.keyCode &&
              this.shift === e.shift &&
              this.control === e.control
            );
          }
          get isValid() {
            return (
              ((e = this.keyCode) > 47 && e < 58) ||
              32 == e ||
              13 == e ||
              (e > 64 && e < 91) ||
              (e > 95 && e < 112) ||
              (e > 185 && e < 193) ||
              (e > 218 && e < 223) ||
              (function (e) {
                return e >= 37 && e <= 40;
              })(this.keyCode)
            );
            var e;
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
          static fromSerializedString(e) {
            let t = e.split(",");
            if (3 !== t.length) return null;
            let n = Number.parseInt(t[0]),
              r = Number.parseInt(t[1]),
              s = Number.parseInt(t[2]);
            return new d(n, r > 0, s > 0);
          }
          toSerializedString() {
            return [
              this.keyCode,
              this.shift ? 1 : 0,
              this.control ? 1 : 0,
            ].join(",");
          }
          toString() {
            let e = this.character;
            return (
              this.shift && (e = "shift + " + e),
              this.control && (e = "ctrl + " + e),
              e
            );
          }
          render() {
            return s.createElement(
              "span",
              null,
              this.control && "control",
              this.control &&
                s.createElement("span", { className: "Plus" }, " + "),
              this.shift && "shift",
              this.shift &&
                s.createElement("span", { className: "Plus" }, " + "),
              this.character,
            );
          }
        }
        class m {
          constructor(e, t) {
            (this.shortcut = void 0),
              (this.sCommand = e),
              (this.sMailbox = t),
              (this.refButton = s.createRef()),
              (0, c.makeObservable)(this);
          }
        }
        (0, r.Cg)([c.observable], m.prototype, "shortcut", void 0);
        class h {
          dumpShortcuts() {
            let e = ["Defaults:"];
            this.rCommands.forEach((t) => {
              t.shortcut &&
                e.push(
                  '"' +
                    t.sCommand +
                    '": new KeyboardShortcut( ' +
                    t.shortcut.keyCode +
                    ", " +
                    (t.shortcut.shift ? "true" : "false") +
                    ", " +
                    (t.shortcut.control ? "true" : "false") +
                    " ), // " +
                    t.shortcut.toString().toLowerCase(),
                );
            }),
              console.log(e.join("\n"));
          }
          constructor(e) {
            (this.rCommands = []),
              (this.rCommands = e),
              (window.dumpShortcuts = this.dumpShortcuts);
          }
          initializeKeyboardShortcuts() {
            return (0, r.sH)(this, void 0, void 0, function* () {
              this.resetCommandShortcuts(!1), yield this.loadCommandShortcuts();
            });
          }
          getCommandForShortcut(e) {
            if (!e) return null;
            let t = this.rCommands.filter((t) => e.equals(t.shortcut));
            return t.length > 0 ? t[0] : null;
          }
          resetCommandShortcuts(e) {
            this.rCommands.forEach((e) => this.resetCommandShortcut(e, !1)),
              e && this.saveCommandShortcuts();
          }
          getCommandForName(e) {
            let t = this.rCommands.filter((t) => t.sCommand === e);
            return t.length > 0 ? t[0] : null;
          }
          loadCommandShortcuts() {
            return (0, r.sH)(this, void 0, void 0, function* () {
              let e;
              try {
                e = yield l.HR.GetSettingsValue(h.k_sPropDebugCommandShortcuts);
              } catch (e) {
                return;
              }
              e &&
                e.split(";").forEach((e) => {
                  let t = e.split(":");
                  if (2 !== t.length) return;
                  let n = this.getCommandForName(t[0]),
                    r = d.fromSerializedString(t[1]);
                  n && r && this.bindCommandToShortcut(n, r, !1);
                });
            });
          }
          saveCommandShortcuts() {
            let e = this.rCommands
              .filter(
                (e) =>
                  !(
                    !e.shortcut ||
                    (e.sCommand in h.k_DefaultShortcuts &&
                      h.k_DefaultShortcuts[e.sCommand].equals(e.shortcut))
                  ),
              )
              .map((e) => e.sCommand + ":" + e.shortcut.toSerializedString())
              .join(";");
            l.HR.SetSettingsStringValueWithoutSchema(
              h.k_sPropDebugCommandShortcuts,
              e,
            );
          }
          bindCommandToShortcut(e, t, n) {
            let r = this.getCommandForShortcut(t);
            r && (r.shortcut = null),
              (e.shortcut = t),
              n && this.saveCommandShortcuts();
          }
          resetCommandShortcut(e, t) {
            let n = null;
            e.sCommand in h.k_DefaultShortcuts &&
              (n = h.k_DefaultShortcuts[e.sCommand]),
              this.bindCommandToShortcut(e, n, t);
          }
        }
        (h.k_sPropDebugCommandShortcuts =
          "/settings/steamvr/debugCommandShortcuts"),
          (h.k_DefaultShortcuts = {
            application_render_model_visibility_toggle: new d(69, !1, !1),
            application_throttling_frame_count_cycle: new d(82, !1, !1),
            application_throttling_toggle: new d(82, !0, !1),
            async_mode_running_start_toggle: new d(85, !1, !1),
            async_mode_toggle: new d(65, !0, !1),
            black_clamp_toggle: new d(75, !1, !1),
            camera_room_view_toggle: new d(67, !1, !1),
            collision_bounds_center_marker_toggle: new d(73, !1, !1),
            collision_bounds_ground_perimeter_toggle: new d(80, !1, !1),
            collision_bounds_play_space_toggle: new d(79, !1, !1),
            collision_bounds_style_cycle: new d(72, !1, !1),
            debug_counter_increment: new d(32, !1, !1),
            flip_universe_transform_toggle: new d(70, !0, !1),
            gpu_profiler_capture: new d(86, !1, !1),
            grid_mode_cycle: new d(71, !1, !1),
            ipd_offset_decrement: new d(189, !1, !1),
            ipd_offset_increment: new d(187, !1, !1),
            latency_testing_toggle: new d(190, !0, !1),
            motion_vector_debug_mode_toggle: new d(74, !0, !1),
            pixel_line_double_sim_toggle: new d(89, !1, !1),
            reflection_map_reload: new d(88, !1, !1),
            screenshot_all_request: new d(83, !0, !1),
            screenshot_request: new d(83, !1, !1),
            seated_position_reset: new d(90, !1, !1),
            shaders_force_reload: new d(220, !1, !1),
            simulate_3dof_toggle: new d(84, !1, !1),
            single_frame_stepping_request: new d(190, !1, !1),
            user_brightness_decrement: new d(186, !1, !1),
            user_brightness_increment: new d(222, !1, !1),
            vsync_to_photons_big_decrement: new d(219, !0, !1),
            vsync_to_photons_big_increment: new d(221, !0, !1),
            vsync_to_photons_decrement: new d(219, !1, !1),
            vsync_to_photons_increment: new d(221, !1, !1),
          }),
          (0, r.Cg)([a.o], h.prototype, "dumpShortcuts", null),
          (0, r.Cg)([a.o], h.prototype, "resetCommandShortcut", null);
        let g = class extends s.Component {
          constructor(e) {
            super(e),
              (this.previousOnKeyDown = null),
              (this.refSearchInput = null),
              (this.state = {
                commands: new h([]),
                editingCommand: null,
                sSearch: sessionStorage.getItem("search") || "",
                bFocused: document.hasFocus(),
              }),
              (this.refSearchInput = s.createRef()),
              l.HR.Init(!1),
              (this.mailbox = new i._nH()),
              this.mailbox.Init("debugcommands").then(() =>
                (0, r.sH)(this, void 0, void 0, function* () {
                  console.log("[debugcommands] Requesting commands..");
                  let e = { type: "get_debug_commands" },
                    t = yield this.mailbox.SendMessageAndWaitForResponse(
                      i.Wqq,
                      e,
                      "get_debug_commands_response",
                    ),
                    n = yield this.mailbox.SendMessageAndWaitForResponse(
                      i.pgT,
                      e,
                      "get_debug_commands_response",
                    ),
                    r = t.commands.concat(n.commands);
                  try {
                    if (
                      yield l.HR.GetSettingsValue("/settings/steamvr/usePrism")
                    ) {
                      let t = yield this.mailbox.SendMessageAndWaitForResponse(
                        "prism_mailbox",
                        e,
                        "get_debug_commands_response",
                      );
                      r = r.concat(t.commands);
                    }
                  } catch (e) {}
                  let s = new h(r.map((e) => new m(e.command, e.mailbox)));
                  yield s.initializeKeyboardShortcuts(),
                    this.setState({ commands: s });
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
            setTimeout(() => this.setState({ bFocused: !0 }), 0);
          }
          onWindowBlur() {
            setTimeout(() => this.setState({ bFocused: !1 }), 0),
              this.endEdit();
          }
          startEdit(e) {
            this.setState({ editingCommand: e });
          }
          endEdit() {
            this.setState({ editingCommand: null });
          }
          sendDebugCommand(e) {
            console.log("Sending debug command: " + e.sCommand),
              e.refButton.current &&
                (e.refButton.current.classList.add("Active"),
                setTimeout(() => {
                  e.refButton.current.classList.remove("Active");
                }, 150));
            let t = { type: e.sCommand };
            this.mailbox.SendMessage(e.sMailbox, t);
          }
          onKeyDown(e) {
            if (
              this.refSearchInput.current &&
              this.refSearchInput.current === document.activeElement
            )
              return void (
                "Escape" === e.key && this.refSearchInput.current.blur()
              );
            if ("Escape" === e.key && this.isEditing)
              return void this.endEdit();
            let t = new d(e.keyCode, e.shiftKey, e.ctrlKey);
            if (t.isValid) {
              if (this.isEditing)
                this.state.commands.bindCommandToShortcut(
                  this.state.editingCommand,
                  t,
                  !0,
                ),
                  this.endEdit();
              else {
                let e = this.state.commands.getCommandForShortcut(t);
                e && this.sendDebugCommand(e);
              }
              switch (e.keyCode) {
                case 37:
                case 38:
                case 39:
                case 40:
                case 32:
                  e.preventDefault();
              }
            }
          }
          get isEditing() {
            return null !== this.state.editingCommand;
          }
          setSearch(e) {
            sessionStorage.setItem("search", e), this.setState({ sSearch: e });
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
            let e = ["DebugCommandsList"];
            return (
              this.isEditing && e.push("Editing"),
              s.createElement(
                "div",
                { className: "DebugCommands" },
                s.createElement(
                  "div",
                  { className: "Header" },
                  s.createElement(
                    "div",
                    { className: "InnerContainer" },
                    s.createElement("input", {
                      type: "text",
                      placeholder: "Search debug commands",
                      ref: this.refSearchInput,
                      onChange: this.onSearchChanged,
                      value: this.state.sSearch || "",
                    }),
                    this.state.sSearch &&
                      s.createElement(
                        "div",
                        {
                          className: "ClearSearchButton",
                          onClick: this.clearSearch,
                        },
                        "×",
                      ),
                    s.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.onResetShortcuts,
                      },
                      s.createElement("span", null, "Reset Shortcuts"),
                    ),
                  ),
                ),
                s.createElement(
                  "div",
                  { className: e.join(" ") },
                  this.state.commands.rCommands
                    .filter(
                      (e) =>
                        !this.state.sSearch ||
                        e.sCommand
                          .toLowerCase()
                          .indexOf(this.state.sSearch.toLocaleLowerCase()) >= 0,
                    )
                    .map((e) => {
                      let t = ["ButtonControl", "DebugCommandButton"],
                        n = this.state.editingCommand === e;
                      n && t.push("Editing");
                      let r = !!e.shortcut;
                      t.push(r ? "Bound" : "Unbound");
                      let o = s.createElement("span", null, "unbound");
                      return (
                        n
                          ? (o = s.createElement(
                              "span",
                              null,
                              "type shortcut...",
                            ))
                          : e.shortcut && (o = e.shortcut.render()),
                        s.createElement(
                          "div",
                          {
                            key: e.sCommand,
                            ref: e.refButton,
                            onClick: () => this.sendDebugCommand(e),
                            className: t.join(" "),
                          },
                          s.createElement(
                            "div",
                            { className: "CommandName" },
                            e.sCommand,
                          ),
                          s.createElement(
                            "div",
                            {
                              className: "KeyboardShortcut",
                              onClick: (t) => {
                                t.stopPropagation(), this.startEdit(e);
                              },
                            },
                            o,
                          ),
                        )
                      );
                    }),
                ),
                this.isEditing &&
                  s.createElement("div", {
                    className: "EditingFade",
                    onClick: this.endEdit,
                  }),
                !this.state.bFocused &&
                  s.createElement(
                    "div",
                    { className: "Footer" },
                    s.createElement(
                      "h1",
                      null,
                      "Click to enable keyboard shortcuts",
                    ),
                  ),
              )
            );
          }
        };
        (0, r.Cg)([a.o], g.prototype, "onWindowFocus", null),
          (0, r.Cg)([a.o], g.prototype, "onWindowBlur", null),
          (0, r.Cg)([a.o], g.prototype, "endEdit", null),
          (0, r.Cg)([a.o], g.prototype, "onKeyDown", null),
          (0, r.Cg)([c.computed], g.prototype, "isEditing", null),
          (0, r.Cg)([a.o], g.prototype, "onSearchChanged", null),
          (0, r.Cg)([a.o], g.prototype, "clearSearch", null),
          (0, r.Cg)([a.o], g.prototype, "onResetShortcuts", null),
          (g = (0, r.Cg)([u.PA], g)),
          o.H(document.getElementById("root")).render(s.createElement(g, null)),
          (window.document.title = "Debug Commands");
      },
    },
    n = {};
  function r(e) {
    var s = n[e];
    if (void 0 !== s) return s.exports;
    var o = (n[e] = { exports: {} });
    return t[e].call(o.exports, o, o.exports, r), o.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = (t, n, s, o) => {
      if (!n) {
        var a = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [n, s, o] = e[l], i = !0, c = 0; c < n.length; c++)
            (!1 & o || a >= o) && Object.keys(r.O).every((e) => r.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((i = !1), o < a && (a = o));
          if (i) {
            e.splice(l--, 1);
            var u = s();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      o = o || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
      e[l] = [n, s, o];
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
      var e = { 866: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var s,
            o,
            [a, i, c] = n,
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (s in i) r.o(i, s) && (r.m[s] = i[s]);
            if (c) var l = c(r);
          }
          for (t && t(n); u < a.length; u++)
            (o = a[u]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return r.O(l);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var s = r.O(void 0, [967, 991, 602, 305, 170, 452, 797, 906, 300, 57], () =>
    r(9513),
  );
  s = r.O(s);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/debugcommands.js.map
