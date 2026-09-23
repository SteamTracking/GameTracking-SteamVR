var CLSTAMP = "11023671";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [154, 260, 982, 47, 264, 602],
  {
    2505: (e, t, r) => {
      e.exports = r(8015);
    },
    6874: (e, t, r) => {
      "use strict";
      var n,
        o = r(7813),
        u = r(6540),
        i = (n = u) && "object" == typeof n && "default" in n ? n.default : n,
        a = r(961),
        c = r(9888);
      if (!u.useState)
        throw new Error("mobx-react-lite requires React with Hooks support");
      if (!o.makeObservable)
        throw new Error(
          "mobx-react-lite@3 requires mobx at least version 6 to be available",
        );
      function s(e) {
        e();
      }
      function f(e) {
        e || (e = s), o.configure({ reactionScheduler: e });
      }
      function l(e) {
        return o.getDependencyTree(e);
      }
      var p = !1;
      function y(e) {
        p = e;
      }
      function d() {
        return p;
      }
      var v,
        m,
        b = new (
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
      function h(e) {
        e.reaction = new o.Reaction("observer" + e.name, function () {
          (e.stateVersion = Symbol()),
            null == e.onStoreChange || e.onStoreChange();
        });
      }
      function S(e, t) {
        if ((void 0 === t && (t = "observed"), d())) return e();
        var r = i.useRef(null);
        if (!r.current) {
          var n = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: t,
            subscribe: function (e) {
              return (
                b.unregister(n),
                (n.onStoreChange = e),
                n.reaction || (h(n), (n.stateVersion = Symbol())),
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
          a = r.current;
        if (
          (a.reaction || (h(a), b.register(r, a, a)),
          i.useDebugValue(a.reaction, l),
          c.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
          a.reaction.track(function () {
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
        g = "function" == typeof Symbol && Symbol.for,
        _ =
          null !=
            (v =
              null ==
              (m = Object.getOwnPropertyDescriptor(function () {}, "name"))
                ? void 0
                : m.configurable) && v,
        E = g
          ? Symbol.for("react.forward_ref")
          : "function" == typeof u.forwardRef &&
            u.forwardRef(function (e) {
              return null;
            }).$$typeof,
        $ = g
          ? Symbol.for("react.memo")
          : "function" == typeof u.memo &&
            u.memo(function (e) {
              return null;
            }).$$typeof,
        R = {
          $$typeof: !0,
          render: !0,
          compare: !0,
          type: !0,
          displayName: !0,
        };
      function C(e) {
        var t = e.children,
          r = e.render;
        t &&
          r &&
          console.error(
            "MobX Observer: Do not use children and render in the same time in `Observer`",
          );
        var n = t || r;
        return "function" != typeof n ? null : S(n);
      }
      function k(e) {
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
      (C.displayName = "Observer"), f(a.unstable_batchedUpdates);
      var O = null != (w = b.finalizeAllImmediately) ? w : function () {};
      t.useObserver = function (e, t) {
        return void 0 === t && (t = "observed"), S(e, t);
      };
    },
    6035: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => p });
      var n,
        o,
        u = r(6540),
        i = r(3815),
        a = r(4452),
        c = "function" == typeof Symbol && Symbol.for,
        s =
          null !==
            (o =
              null ===
                (n = Object.getOwnPropertyDescriptor(function () {}, "name")) ||
              void 0 === n
                ? void 0
                : n.configurable) &&
          void 0 !== o &&
          o,
        f = c
          ? Symbol.for("react.forward_ref")
          : "function" == typeof u.forwardRef &&
            (0, u.forwardRef)(function (e) {
              return null;
            }).$$typeof,
        l = c
          ? Symbol.for("react.memo")
          : "function" == typeof u.memo &&
            (0, u.memo)(function (e) {
              return null;
            }).$$typeof;
      function p(e, t) {
        var r;
        if (l && e.$$typeof === l)
          throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
          );
        if ((0, i.P)()) return e;
        var n =
            null !== (r = null == t ? void 0 : t.forwardRef) &&
            void 0 !== r &&
            r,
          o = e,
          c = e.displayName || e.name;
        if (
          f &&
          e.$$typeof === f &&
          ((n = !0), "function" != typeof (o = e.render))
        )
          throw new Error(
            "[mobx-react-lite] `render` property of ForwardRef was not a function",
          );
        var p,
          d,
          v = function (e, t) {
            return (0, a.q)(function () {
              return o(e, t);
            }, c);
          };
        return (
          (v.displayName = e.displayName),
          s &&
            Object.defineProperty(v, "name", {
              value: e.name,
              writable: !0,
              configurable: !0,
            }),
          e.contextTypes && (v.contextTypes = e.contextTypes),
          n && (v = (0, u.forwardRef)(v)),
          (v = (0, u.memo)(v)),
          (p = e),
          (d = v),
          Object.keys(p).forEach(function (e) {
            y[e] ||
              Object.defineProperty(
                d,
                e,
                Object.getOwnPropertyDescriptor(p, e),
              );
          }),
          v
        );
      }
      var y = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0,
      };
    },
    4452: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => f });
      var n = r(7813),
        o = r(6540),
        u = r(6356),
        i = r(3815),
        a = r(3438),
        c = r(9888);
      function s(e) {
        e.reaction = new n.Reaction("observer".concat(e.name), function () {
          var t;
          (e.stateVersion = Symbol()),
            null === (t = e.onStoreChange) || void 0 === t || t.call(e);
        });
      }
      function f(e, t) {
        if ((void 0 === t && (t = "observed"), (0, i.P)())) return e();
        var r = o.useRef(null);
        if (!r.current) {
          var n = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: t,
            subscribe: function (e) {
              return (
                a.Y.unregister(n),
                (n.onStoreChange = e),
                n.reaction || (s(n), (n.stateVersion = Symbol())),
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
        var f,
          l,
          p = r.current;
        if (
          (p.reaction || (s(p), a.Y.register(r, p, p)),
          o.useDebugValue(p.reaction, u.E),
          (0, c.useSyncExternalStore)(
            p.subscribe,
            p.getSnapshot,
            p.getSnapshot,
          ),
          p.reaction.track(function () {
            try {
              f = e();
            } catch (e) {
              l = e;
            }
          }),
          l)
        )
          throw l;
        return f;
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
    5287: (e, t) => {
      "use strict";
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler"),
        a = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        s = Symbol.for("react.forward_ref"),
        f = Symbol.for("react.suspense"),
        l = Symbol.for("react.memo"),
        p = Symbol.for("react.lazy"),
        y = Symbol.iterator;
      var d = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        v = Object.assign,
        m = {};
      function b(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = m),
          (this.updater = r || d);
      }
      function h() {}
      function S(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = m),
          (this.updater = r || d);
      }
      (b.prototype.isReactComponent = {}),
        (b.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (b.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (h.prototype = b.prototype);
      var w = (S.prototype = new h());
      (w.constructor = S), v(w, b.prototype), (w.isPureReactComponent = !0);
      var g = Array.isArray,
        _ = Object.prototype.hasOwnProperty,
        E = { current: null },
        $ = { key: !0, ref: !0, __self: !0, __source: !0 };
      function R(e, t, n) {
        var o,
          u = {},
          i = null,
          a = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (i = "" + t.key),
          t))
            _.call(t, o) && !$.hasOwnProperty(o) && (u[o] = t[o]);
        var c = arguments.length - 2;
        if (1 === c) u.children = n;
        else if (1 < c) {
          for (var s = Array(c), f = 0; f < c; f++) s[f] = arguments[f + 2];
          u.children = s;
        }
        if (e && e.defaultProps)
          for (o in (c = e.defaultProps)) void 0 === u[o] && (u[o] = c[o]);
        return {
          $$typeof: r,
          type: e,
          key: i,
          ref: a,
          props: u,
          _owner: E.current,
        };
      }
      function C(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
      }
      var k = /\/+/g;
      function O(e, t) {
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
      function x(e, t, o, u, i) {
        var a = typeof e;
        ("undefined" !== a && "boolean" !== a) || (e = null);
        var c = !1;
        if (null === e) c = !0;
        else
          switch (a) {
            case "string":
            case "number":
              c = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case r:
                case n:
                  c = !0;
              }
          }
        if (c)
          return (
            (i = i((c = e))),
            (e = "" === u ? "." + O(c, 0) : u),
            g(i)
              ? ((o = ""),
                null != e && (o = e.replace(k, "$&/") + "/"),
                x(i, t, o, "", function (e) {
                  return e;
                }))
              : null != i &&
                (C(i) &&
                  (i = (function (e, t) {
                    return {
                      $$typeof: r,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    i,
                    o +
                      (!i.key || (c && c.key === i.key)
                        ? ""
                        : ("" + i.key).replace(k, "$&/") + "/") +
                      e,
                  )),
                t.push(i)),
            1
          );
        if (((c = 0), (u = "" === u ? "." : u + ":"), g(e)))
          for (var s = 0; s < e.length; s++) {
            var f = u + O((a = e[s]), s);
            c += x(a, t, o, f, i);
          }
        else if (
          ((f = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (y && e[y]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof f)
        )
          for (e = f.call(e), s = 0; !(a = e.next()).done; )
            c += x((a = a.value), t, o, (f = u + O(a, s++)), i);
        else if ("object" === a)
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
        return c;
      }
      function j(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return (
          x(e, n, "", "", function (e) {
            return t.call(r, e, o++);
          }),
          n
        );
      }
      function P(e) {
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
      var T = { current: null },
        V = { transition: null },
        D = {
          ReactCurrentDispatcher: T,
          ReactCurrentBatchConfig: V,
          ReactCurrentOwner: E,
        };
      function I() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      (t.Children = {
        map: j,
        forEach: function (e, t, r) {
          j(
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
            j(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            j(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!C(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      }),
        (t.Component = b),
        (t.Fragment = o),
        (t.Profiler = i),
        (t.PureComponent = S),
        (t.StrictMode = u),
        (t.Suspense = f),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
        (t.act = I),
        (t.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
            );
          var o = v({}, e.props),
            u = e.key,
            i = e.ref,
            a = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (a = E.current)),
              void 0 !== t.key && (u = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var c = e.type.defaultProps;
            for (s in t)
              _.call(t, s) &&
                !$.hasOwnProperty(s) &&
                (o[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
          }
          var s = arguments.length - 2;
          if (1 === s) o.children = n;
          else if (1 < s) {
            c = Array(s);
            for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
            o.children = c;
          }
          return {
            $$typeof: r,
            type: e.type,
            key: u,
            ref: i,
            props: o,
            _owner: a,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: c,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: a, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = R),
        (t.createFactory = function (e) {
          var t = R.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: s, render: e };
        }),
        (t.isValidElement = C),
        (t.lazy = function (e) {
          return {
            $$typeof: p,
            _payload: { _status: -1, _result: e },
            _init: P,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: l, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = V.transition;
          V.transition = {};
          try {
            e();
          } finally {
            V.transition = t;
          }
        }),
        (t.unstable_act = I),
        (t.useCallback = function (e, t) {
          return T.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return T.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return T.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return T.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return T.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return T.current.useImperativeHandle(e, t, r);
        }),
        (t.useInsertionEffect = function (e, t) {
          return T.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return T.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return T.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return T.current.useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return T.current.useRef(e);
        }),
        (t.useState = function (e) {
          return T.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return T.current.useSyncExternalStore(e, t, r);
        }),
        (t.useTransition = function () {
          return T.current.useTransition();
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
        i = n.useEffect,
        a = n.useLayoutEffect,
        c = n.useDebugValue;
      function s(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r);
        } catch (e) {
          return !0;
        }
      }
      var f =
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
                f = n[1];
              return (
                a(
                  function () {
                    (o.value = r), (o.getSnapshot = t), s(o) && f({ inst: o });
                  },
                  [e, r, t],
                ),
                i(
                  function () {
                    return (
                      s(o) && f({ inst: o }),
                      e(function () {
                        s(o) && f({ inst: o });
                      })
                    );
                  },
                  [e],
                ),
                c(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : f;
    },
    9888: (e, t, r) => {
      "use strict";
      e.exports = r(8493);
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~7316aad94.js.map
