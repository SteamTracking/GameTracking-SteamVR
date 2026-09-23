var CLSTAMP = "11023671";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [267, 260, 154, 982, 47, 264, 602],
  {
    2505: (e, t, r) => {
      e.exports = r(8015);
    },
    6874: (e, t, r) => {
      "use strict";
      var n,
        o = r(7813),
        u = r(6540),
        a = (n = u) && "object" == typeof n && "default" in n ? n.default : n,
        i = r(961),
        s = r(9888);
      if (!u.useState)
        throw new Error("mobx-react-lite requires React with Hooks support");
      if (!o.makeObservable)
        throw new Error(
          "mobx-react-lite@3 requires mobx at least version 6 to be available",
        );
      function c(e) {
        e();
      }
      function l(e) {
        e || (e = c), o.configure({ reactionScheduler: e });
      }
      function f(e) {
        return o.getDependencyTree(e);
      }
      var p = !1;
      function d(e) {
        p = e;
      }
      function y() {
        return p;
      }
      var h,
        m,
        v = new (
          "undefined" != typeof FinalizationRegistry
            ? FinalizationRegistry
            : (function () {
                function e(e) {
                  var t = this;
                  (this.finalize = void 0),
                    (this.registrations = new Map()),
                    (this.sweepTimeout = void 0),
                    (this.sweep = function (e) {
                      void 0 === e && (e = 1e4),
                        clearTimeout(t.sweepTimeout),
                        (t.sweepTimeout = void 0);
                      var r = Date.now();
                      t.registrations.forEach(function (n, o) {
                        r - n.registeredAt >= e &&
                          (t.finalize(n.value), t.registrations.delete(o));
                      }),
                        t.registrations.size > 0 && t.scheduleSweep();
                    }),
                    (this.finalizeAllImmediately = function () {
                      t.sweep(0);
                    }),
                    (this.finalize = e);
                }
                var t = e.prototype;
                return (
                  (t.register = function (e, t, r) {
                    this.registrations.set(r, {
                      value: t,
                      registeredAt: Date.now(),
                    }),
                      this.scheduleSweep();
                  }),
                  (t.unregister = function (e) {
                    this.registrations.delete(e);
                  }),
                  (t.scheduleSweep = function () {
                    void 0 === this.sweepTimeout &&
                      (this.sweepTimeout = setTimeout(this.sweep, 1e4));
                  }),
                  e
                );
              })()
        )(function (e) {
          var t;
          null == (t = e.reaction) || t.dispose(), (e.reaction = null);
        });
      function b(e) {
        e.reaction = new o.Reaction("observer" + e.name, function () {
          (e.stateVersion = Symbol()),
            null == e.onStoreChange || e.onStoreChange();
        });
      }
      function g(e, t) {
        if ((void 0 === t && (t = "observed"), y())) return e();
        var r = a.useRef(null);
        if (!r.current) {
          var n = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: t,
            subscribe: function (e) {
              return (
                v.unregister(n),
                (n.onStoreChange = e),
                n.reaction || (b(n), (n.stateVersion = Symbol())),
                function () {
                  var e;
                  (n.onStoreChange = null),
                    null == (e = n.reaction) || e.dispose(),
                    (n.reaction = null);
                }
              );
            },
            getSnapshot: function () {
              return n.stateVersion;
            },
          };
          r.current = n;
        }
        var o,
          u,
          i = r.current;
        if (
          (i.reaction || (b(i), v.register(r, i, i)),
          a.useDebugValue(i.reaction, f),
          s.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot),
          i.reaction.track(function () {
            try {
              o = e();
            } catch (e) {
              u = e;
            }
          }),
          u)
        )
          throw u;
        return o;
      }
      var w,
        S = "function" == typeof Symbol && Symbol.for,
        k =
          null !=
            (h =
              null ==
              (m = Object.getOwnPropertyDescriptor(function () {}, "name"))
                ? void 0
                : m.configurable) && h,
        _ = S
          ? Symbol.for("react.forward_ref")
          : "function" == typeof u.forwardRef &&
            u.forwardRef(function (e) {
              return null;
            }).$$typeof,
        R = S
          ? Symbol.for("react.memo")
          : "function" == typeof u.memo &&
            u.memo(function (e) {
              return null;
            }).$$typeof,
        C = {
          $$typeof: !0,
          render: !0,
          compare: !0,
          type: !0,
          displayName: !0,
        };
      function E(e) {
        var t = e.children,
          r = e.render;
        t &&
          r &&
          console.error(
            "MobX Observer: Do not use children and render in the same time in `Observer`",
          );
        var n = t || r;
        return "function" != typeof n ? null : g(n);
      }
      function x(e) {
        var t = u.useState(function () {
          return o.observable(e, {}, { deep: !1 });
        })[0];
        return (
          o.runInAction(function () {
            Object.assign(t, e);
          }),
          t
        );
      }
      (E.displayName = "Observer"), l(i.unstable_batchedUpdates);
      var P = null != (w = v.finalizeAllImmediately) ? w : function () {};
      t.useObserver = function (e, t) {
        return void 0 === t && (t = "observed"), g(e, t);
      };
    },
    6035: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => p });
      var n,
        o,
        u = r(6540),
        a = r(3815),
        i = r(4452),
        s = "function" == typeof Symbol && Symbol.for,
        c =
          null !==
            (o =
              null ===
                (n = Object.getOwnPropertyDescriptor(function () {}, "name")) ||
              void 0 === n
                ? void 0
                : n.configurable) &&
          void 0 !== o &&
          o,
        l = s
          ? Symbol.for("react.forward_ref")
          : "function" == typeof u.forwardRef &&
            (0, u.forwardRef)(function (e) {
              return null;
            }).$$typeof,
        f = s
          ? Symbol.for("react.memo")
          : "function" == typeof u.memo &&
            (0, u.memo)(function (e) {
              return null;
            }).$$typeof;
      function p(e, t) {
        var r;
        if (f && e.$$typeof === f)
          throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
          );
        if ((0, a.P)()) return e;
        var n =
            null !== (r = null == t ? void 0 : t.forwardRef) &&
            void 0 !== r &&
            r,
          o = e,
          s = e.displayName || e.name;
        if (
          l &&
          e.$$typeof === l &&
          ((n = !0), "function" != typeof (o = e.render))
        )
          throw new Error(
            "[mobx-react-lite] `render` property of ForwardRef was not a function",
          );
        var p,
          y,
          h = function (e, t) {
            return (0, i.q)(function () {
              return o(e, t);
            }, s);
          };
        return (
          (h.displayName = e.displayName),
          c &&
            Object.defineProperty(h, "name", {
              value: e.name,
              writable: !0,
              configurable: !0,
            }),
          e.contextTypes && (h.contextTypes = e.contextTypes),
          n && (h = (0, u.forwardRef)(h)),
          (h = (0, u.memo)(h)),
          (p = e),
          (y = h),
          Object.keys(p).forEach(function (e) {
            d[e] ||
              Object.defineProperty(
                y,
                e,
                Object.getOwnPropertyDescriptor(p, e),
              );
          }),
          h
        );
      }
      var d = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0,
      };
    },
    4452: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => l });
      var n = r(7813),
        o = r(6540),
        u = r(6356),
        a = r(3815),
        i = r(3438),
        s = r(9888);
      function c(e) {
        e.reaction = new n.Reaction("observer".concat(e.name), function () {
          var t;
          (e.stateVersion = Symbol()),
            null === (t = e.onStoreChange) || void 0 === t || t.call(e);
        });
      }
      function l(e, t) {
        if ((void 0 === t && (t = "observed"), (0, a.P)())) return e();
        var r = o.useRef(null);
        if (!r.current) {
          var n = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: t,
            subscribe: function (e) {
              return (
                i.Y.unregister(n),
                (n.onStoreChange = e),
                n.reaction || (c(n), (n.stateVersion = Symbol())),
                function () {
                  var e;
                  (n.onStoreChange = null),
                    null === (e = n.reaction) || void 0 === e || e.dispose(),
                    (n.reaction = null);
                }
              );
            },
            getSnapshot: function () {
              return n.stateVersion;
            },
          };
          r.current = n;
        }
        var l,
          f,
          p = r.current;
        if (
          (p.reaction || (c(p), i.Y.register(r, p, p)),
          o.useDebugValue(p.reaction, u.E),
          (0, s.useSyncExternalStore)(
            p.subscribe,
            p.getSnapshot,
            p.getSnapshot,
          ),
          p.reaction.track(function () {
            try {
              l = e();
            } catch (e) {
              f = e;
            }
          }),
          f)
        )
          throw f;
        return l;
      }
    },
    3438: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => n });
      var n = new (r(2517).Xr)(function (e) {
        var t;
        null === (t = e.reaction) || void 0 === t || t.dispose(),
          (e.reaction = null);
      });
    },
    5237: (e, t, r) => {
      "use strict";
      r.d(t, { QF: () => s });
      var n = r(6540),
        o = function (e, t) {
          return (
            (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              }),
            o(e, t)
          );
        };
      function u(e) {
        var t = e.className,
          r = e.counterClockwise,
          o = e.dashRatio,
          u = e.pathRadius,
          s = e.strokeWidth,
          c = e.style;
        return (0, n.createElement)("path", {
          className: t,
          style: Object.assign(
            {},
            c,
            i({ pathRadius: u, dashRatio: o, counterClockwise: r }),
          ),
          d: a({ pathRadius: u, counterClockwise: r }),
          strokeWidth: s,
          fillOpacity: 0,
        });
      }
      function a(e) {
        var t = e.pathRadius,
          r = e.counterClockwise ? 1 : 0;
        return (
          "\n      M 50,50\n      m 0,-" +
          t +
          "\n      a " +
          t +
          "," +
          t +
          " " +
          r +
          " 1 1 0," +
          2 * t +
          "\n      a " +
          t +
          "," +
          t +
          " " +
          r +
          " 1 1 0,-" +
          2 * t +
          "\n    "
        );
      }
      function i(e) {
        var t = e.counterClockwise,
          r = e.dashRatio,
          n = e.pathRadius,
          o = 2 * Math.PI * n,
          u = (1 - r) * o;
        return {
          strokeDasharray: o + "px " + o + "px",
          strokeDashoffset: (t ? -u : u) + "px",
        };
      }
      var s = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (function (e, t) {
            function r() {
              this.constructor = e;
            }
            o(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          })(t, e),
          (t.prototype.getBackgroundPadding = function () {
            return this.props.background ? this.props.backgroundPadding : 0;
          }),
          (t.prototype.getPathRadius = function () {
            return (
              50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
            );
          }),
          (t.prototype.getPathRatio = function () {
            var e = this.props,
              t = e.value,
              r = e.minValue,
              n = e.maxValue;
            return (Math.min(Math.max(t, r), n) - r) / (n - r);
          }),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.circleRatio,
              r = e.className,
              o = e.classes,
              a = e.counterClockwise,
              i = e.styles,
              s = e.strokeWidth,
              c = e.text,
              l = this.getPathRadius(),
              f = this.getPathRatio();
            return (0, n.createElement)(
              "svg",
              {
                className: o.root + " " + r,
                style: i.root,
                viewBox: "0 0 100 100",
                "data-test-id": "CircularProgressbar",
              },
              this.props.background
                ? (0, n.createElement)("circle", {
                    className: o.background,
                    style: i.background,
                    cx: 50,
                    cy: 50,
                    r: 50,
                  })
                : null,
              (0, n.createElement)(u, {
                className: o.trail,
                counterClockwise: a,
                dashRatio: t,
                pathRadius: l,
                strokeWidth: s,
                style: i.trail,
              }),
              (0, n.createElement)(u, {
                className: o.path,
                counterClockwise: a,
                dashRatio: f * t,
                pathRadius: l,
                strokeWidth: s,
                style: i.path,
              }),
              c
                ? (0, n.createElement)(
                    "text",
                    { className: o.text, style: i.text, x: 50, y: 50 },
                    c,
                  )
                : null,
            );
          }),
          (t.defaultProps = {
            background: !1,
            backgroundPadding: 0,
            circleRatio: 1,
            classes: {
              root: "CircularProgressbar",
              trail: "CircularProgressbar-trail",
              path: "CircularProgressbar-path",
              text: "CircularProgressbar-text",
              background: "CircularProgressbar-background",
            },
            counterClockwise: !1,
            className: "",
            maxValue: 100,
            minValue: 0,
            strokeWidth: 8,
            styles: { root: {}, trail: {}, path: {}, text: {}, background: {} },
            text: "",
          }),
          t
        );
      })(n.Component);
    },
    5287: (e, t) => {
      "use strict";
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        i = Symbol.for("react.provider"),
        s = Symbol.for("react.context"),
        c = Symbol.for("react.forward_ref"),
        l = Symbol.for("react.suspense"),
        f = Symbol.for("react.memo"),
        p = Symbol.for("react.lazy"),
        d = Symbol.iterator;
      var y = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        h = Object.assign,
        m = {};
      function v(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = m),
          (this.updater = r || y);
      }
      function b() {}
      function g(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = m),
          (this.updater = r || y);
      }
      (v.prototype.isReactComponent = {}),
        (v.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (v.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (b.prototype = v.prototype);
      var w = (g.prototype = new b());
      (w.constructor = g), h(w, v.prototype), (w.isPureReactComponent = !0);
      var S = Array.isArray,
        k = Object.prototype.hasOwnProperty,
        _ = { current: null },
        R = { key: !0, ref: !0, __self: !0, __source: !0 };
      function C(e, t, n) {
        var o,
          u = {},
          a = null,
          i = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (i = t.ref),
          void 0 !== t.key && (a = "" + t.key),
          t))
            k.call(t, o) && !R.hasOwnProperty(o) && (u[o] = t[o]);
        var s = arguments.length - 2;
        if (1 === s) u.children = n;
        else if (1 < s) {
          for (var c = Array(s), l = 0; l < s; l++) c[l] = arguments[l + 2];
          u.children = c;
        }
        if (e && e.defaultProps)
          for (o in (s = e.defaultProps)) void 0 === u[o] && (u[o] = s[o]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: i,
          props: u,
          _owner: _.current,
        };
      }
      function E(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
      }
      var x = /\/+/g;
      function P(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function $(e, t, o, u, a) {
        var i = typeof e;
        ("undefined" !== i && "boolean" !== i) || (e = null);
        var s = !1;
        if (null === e) s = !0;
        else
          switch (i) {
            case "string":
            case "number":
              s = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case r:
                case n:
                  s = !0;
              }
          }
        if (s)
          return (
            (a = a((s = e))),
            (e = "" === u ? "." + P(s, 0) : u),
            S(a)
              ? ((o = ""),
                null != e && (o = e.replace(x, "$&/") + "/"),
                $(a, t, o, "", function (e) {
                  return e;
                }))
              : null != a &&
                (E(a) &&
                  (a = (function (e, t) {
                    return {
                      $$typeof: r,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    a,
                    o +
                      (!a.key || (s && s.key === a.key)
                        ? ""
                        : ("" + a.key).replace(x, "$&/") + "/") +
                      e,
                  )),
                t.push(a)),
            1
          );
        if (((s = 0), (u = "" === u ? "." : u + ":"), S(e)))
          for (var c = 0; c < e.length; c++) {
            var l = u + P((i = e[c]), c);
            s += $(i, t, o, l, a);
          }
        else if (
          ((l = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof l)
        )
          for (e = l.call(e), c = 0; !(i = e.next()).done; )
            s += $((i = i.value), t, o, (l = u + P(i, c++)), a);
        else if ("object" === i)
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead.",
            ))
          );
        return s;
      }
      function O(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return (
          $(e, n, "", "", function (e) {
            return t.call(r, e, o++);
          }),
          n
        );
      }
      function j(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            },
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var V = { current: null },
        T = { transition: null },
        N = {
          ReactCurrentDispatcher: V,
          ReactCurrentBatchConfig: T,
          ReactCurrentOwner: _,
        };
      function D() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      (t.Children = {
        map: O,
        forEach: function (e, t, r) {
          O(
            e,
            function () {
              t.apply(this, arguments);
            },
            r,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            O(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            O(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!E(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      }),
        (t.Component = v),
        (t.Fragment = o),
        (t.Profiler = a),
        (t.PureComponent = g),
        (t.StrictMode = u),
        (t.Suspense = l),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
        (t.act = D),
        (t.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
            );
          var o = h({}, e.props),
            u = e.key,
            a = e.ref,
            i = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((a = t.ref), (i = _.current)),
              void 0 !== t.key && (u = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var s = e.type.defaultProps;
            for (c in t)
              k.call(t, c) &&
                !R.hasOwnProperty(c) &&
                (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) o.children = n;
          else if (1 < c) {
            s = Array(c);
            for (var l = 0; l < c; l++) s[l] = arguments[l + 2];
            o.children = s;
          }
          return {
            $$typeof: r,
            type: e.type,
            key: u,
            ref: a,
            props: o,
            _owner: i,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: s,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: i, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = C),
        (t.createFactory = function (e) {
          var t = C.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: c, render: e };
        }),
        (t.isValidElement = E),
        (t.lazy = function (e) {
          return {
            $$typeof: p,
            _payload: { _status: -1, _result: e },
            _init: j,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = T.transition;
          T.transition = {};
          try {
            e();
          } finally {
            T.transition = t;
          }
        }),
        (t.unstable_act = D),
        (t.useCallback = function (e, t) {
          return V.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return V.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return V.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return V.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return V.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return V.current.useImperativeHandle(e, t, r);
        }),
        (t.useInsertionEffect = function (e, t) {
          return V.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return V.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return V.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return V.current.useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return V.current.useRef(e);
        }),
        (t.useState = function (e) {
          return V.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return V.current.useSyncExternalStore(e, t, r);
        }),
        (t.useTransition = function () {
          return V.current.useTransition();
        }),
        (t.version = "18.3.1");
    },
    6540: (e, t, r) => {
      "use strict";
      e.exports = r(5287);
    },
    8493: (e, t, r) => {
      "use strict";
      var n = r(6540);
      var o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        u = n.useState,
        a = n.useEffect,
        i = n.useLayoutEffect,
        s = n.useDebugValue;
      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r);
        } catch (e) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = u({ inst: { value: r, getSnapshot: t } }),
                o = n[0].inst,
                l = n[1];
              return (
                i(
                  function () {
                    (o.value = r), (o.getSnapshot = t), c(o) && l({ inst: o });
                  },
                  [e, r, t],
                ),
                a(
                  function () {
                    return (
                      c(o) && l({ inst: o }),
                      e(function () {
                        c(o) && l({ inst: o });
                      })
                    );
                  },
                  [e],
                ),
                s(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l;
    },
    9888: (e, t, r) => {
      "use strict";
      e.exports = r(8493);
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~837d8d061.js.map
