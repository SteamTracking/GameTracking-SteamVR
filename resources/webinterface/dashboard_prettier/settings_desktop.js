var CLSTAMP = "11214286";
(() => {
  "use strict";
  var e,
    t = {
      292: (e, t, r) => {
        var n = r(1635),
          i = r(6540),
          o = r(5338),
          l = r(6090),
          a = r(3714),
          u = r(1333),
          d = r(9118),
          s = r(1532),
          c = r(5802),
          v = r(6646),
          f = r(881),
          p = r(1835),
          y = r(4007),
          b = r(7813),
          g = r(9125),
          m = r(6379),
          h = r(5026),
          w = r(8803);
        (0, b.configure)({ enforceActions: "never" }),
          (function () {
            (0, n.sH)(this, void 0, void 0, function* () {
              try {
                yield Promise.all([
                  (0, a.uV)(
                    ["vrmonitor", "bindingui"],
                    null === l.Ay$ || void 0 === l.Ay$
                      ? void 0
                      : l.Ay$.GetSteamLanguage(),
                  ),
                  u.HR.Init(!0),
                  d.W.Init(!0),
                  c.B$.Init(),
                  s.s.Init(),
                  v.X.Init(),
                ]),
                  yield Promise.all([
                    w.m0.Init(!1),
                    y.Q.Init(),
                    p.SW.Init(),
                    m.c.Init(),
                  ]),
                  yield Promise.all([h.Mg.Init(!1)]);
              } catch (e) {
                console.error("Failed to initialize desktop settings:", e);
              }
              (0, g.aj)().Init("SteamVR", CLSTAMP, (0, g.d4)()),
                (document.title = (0, a.we)("#Settings_Header_SteamVR")),
                o
                  .H(document.getElementById("root"))
                  .render(i.createElement(f.z, { env: "desktop-window" }));
            });
          })();
      },
    },
    r = {};
  function n(e) {
    var i = r[e];
    if (void 0 !== i) return i.exports;
    var o = (r[e] = { exports: {} });
    return t[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, r, i, o) => {
      if (!r) {
        var l = 1 / 0;
        for (s = 0; s < e.length; s++) {
          for (var [r, i, o] = e[s], a = !0, u = 0; u < r.length; u++)
            (!1 & o || l >= o) && Object.keys(n.O).every((e) => n.O[e](r[u]))
              ? r.splice(u--, 1)
              : ((a = !1), o < l && (l = o));
          if (a) {
            e.splice(s--, 1);
            var d = i();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      o = o || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > o; s--) e[s] = e[s - 1];
      e[s] = [r, i, o];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 249: 0, 527: 0, 17: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var i,
            o,
            [l, a, u] = r,
            d = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (i in a) n.o(a, i) && (n.m[i] = a[i]);
            if (u) var s = u(n);
          }
          for (t && t(r); d < l.length; d++)
            (o = l[d]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(s);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var i = n.O(
    void 0,
    [967, 991, 260, 305, 527, 170, 452, 797, 554, 906, 366, 57, 17],
    () => n(292),
  );
  i = n.O(i);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/settings_desktop.js.map
