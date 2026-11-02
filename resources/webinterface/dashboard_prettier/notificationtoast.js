var CLSTAMP = "11196359";
(() => {
  "use strict";
  var e,
    t = {
      4170: (e, t, i) => {
        var a = i(1635),
          r = i(6540),
          o = i(5338),
          n = i(3236),
          s = i(6090),
          l = i(3714),
          c = i(1333),
          d = i(7813),
          u = i(9125);
        (0, d.configure)({ enforceActions: "never" });
        class v extends r.Component {
          constructor(e) {
            super(e),
              (this.m_toastMailbox = new s._nH()),
              (this.state = { visible: !1, title: "", header: "", text: "" }),
              this.m_toastMailbox.Init("toast_renderer/main"),
              this.m_toastMailbox.RegisterHandler(
                "render_toast",
                this.OnRenderToast,
              ),
              c.HR.Init(!1);
          }
          OnRenderToast(e) {
            var t;
            let i =
              null ===
                (t =
                  null === s.Ay$ || void 0 === s.Ay$
                    ? void 0
                    : s.Ay$.VROverlayInternal) || void 0 === t
                ? void 0
                : t.GetToastInfo(e.notification_id);
            i
              ? this.setState({
                  visible: !0,
                  title: i.sTitle,
                  header: i.sHeader || "",
                  text: i.sText,
                  image: i.sImageData,
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
        (0, a.Cg)([n.o], v.prototype, "OnRenderToast", null),
          (0, l.uV)(
            [],
            null === s.Ay$ || void 0 === s.Ay$
              ? void 0
              : s.Ay$.GetSteamLanguage(),
          )
            .then(() => {
              (0, u.aj)().Init("SteamVR", CLSTAMP, (0, u.d4)()),
                o
                  .H(document.getElementById("root"))
                  .render(r.createElement(v, null));
            })
            .catch((e) =>
              console.error("Failed to initialize notification toast:", e),
            );
      },
    },
    i = {};
  function a(e) {
    var r = i[e];
    if (void 0 !== r) return r.exports;
    var o = (i[e] = { exports: {} });
    return t[e].call(o.exports, o, o.exports, a), o.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, i, r, o) => {
      if (!i) {
        var n = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [i, r, o] = e[d], s = !0, l = 0; l < i.length; l++)
            (!1 & o || n >= o) && Object.keys(a.O).every((e) => a.O[e](i[l]))
              ? i.splice(l--, 1)
              : ((s = !1), o < n && (n = o));
          if (s) {
            e.splice(d--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      o = o || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
      e[d] = [i, r, o];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var i in t)
        a.o(t, i) &&
          !a.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
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
      var t = (t, i) => {
          var r,
            o,
            [n, s, l] = i,
            c = 0;
          if (n.some((t) => 0 !== e[t])) {
            for (r in s) a.o(s, r) && (a.m[r] = s[r]);
            if (l) var d = l(a);
          }
          for (t && t(i); c < n.length; c++)
            (o = n[c]), a.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return a.O(d);
        },
        i = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })();
  var r = a.O(
    void 0,
    [967, 991, 154, 305, 527, 170, 452, 797, 500, 148, 554, 906, 57],
    () => a(4170),
  );
  r = a.O(r);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/notificationtoast.js.map
