var CLSTAMP = "11023671";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [991],
  {
    5339: function (t, e) {
      var r =
          "function" == typeof Object.defineProperties
            ? Object.defineProperty
            : function (t, e, r) {
                t != Array.prototype &&
                  t != Object.prototype &&
                  (t[e] = r.value);
              },
        n =
          "undefined" != typeof window && window === this
            ? this
            : "undefined" != typeof global && null != global
              ? global
              : this;
      function o() {
        (o = function () {}), n.Symbol || (n.Symbol = s);
      }
      function i(t, e) {
        (this.a = t),
          r(this, "description", { configurable: !0, writable: !0, value: e });
      }
      i.prototype.toString = function () {
        return this.a;
      };
      var a,
        s =
          ((a = 0),
          function t(e) {
            if (this instanceof t)
              throw new TypeError("Symbol is not a constructor");
            return new i("jscomp_symbol_" + (e || "") + "_" + a++, e);
          });
      function u() {
        o();
        var t = n.Symbol.iterator;
        t || (t = n.Symbol.iterator = n.Symbol("Symbol.iterator")),
          "function" != typeof Array.prototype[t] &&
            r(Array.prototype, t, {
              configurable: !0,
              writable: !0,
              value: function () {
                return (function (t) {
                  return (
                    u(),
                    (t = { next: t }),
                    (t[n.Symbol.iterator] = function () {
                      return this;
                    }),
                    t
                  );
                })(
                  (function (t) {
                    var e = 0;
                    return function () {
                      return e < t.length
                        ? { done: !1, value: t[e++] }
                        : { done: !0 };
                    };
                  })(this),
                );
              },
            }),
          (u = function () {});
      }
      !(function (t, e) {
        if (e) {
          var o = n;
          t = t.split(".");
          for (var i = 0; i < t.length - 1; i++) {
            var a = t[i];
            a in o || (o[a] = {}), (o = o[a]);
          }
          (e = e((i = o[(t = t[t.length - 1])]))) != i &&
            null != e &&
            r(o, t, { configurable: !0, writable: !0, value: e });
        }
      })("Array.prototype.entries", function (t) {
        return (
          t ||
          function () {
            return (function (t, e) {
              u(), t instanceof String && (t += "");
              var r = 0,
                n = {
                  next: function () {
                    if (r < t.length) {
                      var o = r++;
                      return { value: e(o, t[o]), done: !1 };
                    }
                    return (
                      (n.next = function () {
                        return { done: !0, value: void 0 };
                      }),
                      n.next()
                    );
                  },
                };
              return (
                (n[Symbol.iterator] = function () {
                  return n;
                }),
                n
              );
            })(this, function (t, e) {
              return [t, e];
            });
          }
        );
      });
      var p = this || self;
      function c(t, e, r) {
        (t = t.split(".")),
          (r = r || p),
          t[0] in r || void 0 === r.execScript || r.execScript("var " + t[0]);
        for (var n; t.length && (n = t.shift()); )
          t.length || void 0 === e
            ? (r = r[n] && r[n] !== Object.prototype[n] ? r[n] : (r[n] = {}))
            : (r[n] = e);
      }
      function l(t) {
        var e = typeof t;
        if ("object" == e) {
          if (!t) return "null";
          if (t instanceof Array) return "array";
          if (t instanceof Object) return e;
          var r = Object.prototype.toString.call(t);
          if ("[object Window]" == r) return "object";
          if (
            "[object Array]" == r ||
            ("number" == typeof t.length &&
              void 0 !== t.splice &&
              void 0 !== t.propertyIsEnumerable &&
              !t.propertyIsEnumerable("splice"))
          )
            return "array";
          if (
            "[object Function]" == r ||
            (void 0 !== t.call &&
              void 0 !== t.propertyIsEnumerable &&
              !t.propertyIsEnumerable("call"))
          )
            return "function";
        } else if ("function" == e && void 0 === t.call) return "object";
        return e;
      }
      function h(t) {
        var e = typeof t;
        return ("object" == e && null != t) || "function" == e;
      }
      var f =
        "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
          " ",
        );
      var d = Array.prototype.forEach
          ? function (t, e) {
              Array.prototype.forEach.call(t, e, void 0);
            }
          : function (t, e) {
              for (
                var r = t.length,
                  n = "string" == typeof t ? t.split("") : t,
                  o = 0;
                o < r;
                o++
              )
                o in n && e.call(void 0, n[o], o, t);
            },
        y = Array.prototype.map
          ? function (t, e) {
              return Array.prototype.map.call(t, e, void 0);
            }
          : function (t, e) {
              for (
                var r = t.length,
                  n = Array(r),
                  o = "string" == typeof t ? t.split("") : t,
                  i = 0;
                i < r;
                i++
              )
                i in o && (n[i] = e.call(void 0, o[i], i, t));
              return n;
            };
      function v(t, e, r) {
        return 2 >= arguments.length
          ? Array.prototype.slice.call(t, e)
          : Array.prototype.slice.call(t, e, r);
      }
      function b(t, e, r, n) {
        var o = "Assertion failed";
        if (r) {
          o += ": " + r;
          var i = n;
        } else t && ((o += ": " + t), (i = e));
        throw Error(o, i || []);
      }
      function g(t, e, r) {
        for (var n = [], o = 2; o < arguments.length; ++o)
          n[o - 2] = arguments[o];
        return t || b("", null, e, n), t;
      }
      function _(t, e) {
        for (var r = [], n = 1; n < arguments.length; ++n)
          r[n - 1] = arguments[n];
        throw Error("Failure" + (t ? ": " + t : ""), r);
      }
      function m(t, e, r, n) {
        for (var o = [], i = 3; i < arguments.length; ++i)
          o[i - 3] = arguments[i];
        t instanceof e ||
          b("Expected instanceof %s but got %s.", [w(e), w(t)], r, o);
      }
      function w(t) {
        return t instanceof Function
          ? t.displayName || t.name || "unknown type name"
          : t instanceof Object
            ? t.constructor.displayName ||
              t.constructor.name ||
              Object.prototype.toString.call(t)
            : null === t
              ? "null"
              : typeof t;
      }
      function O(t, e) {
        if (
          ((this.c = t),
          (this.b = e),
          (this.a = {}),
          (this.arrClean = !0),
          0 < this.c.length)
        ) {
          for (t = 0; t < this.c.length; t++) {
            var r = (e = this.c[t])[0];
            this.a[r.toString()] = new x(r, e[1]);
          }
          this.arrClean = !0;
        }
      }
      function S(t) {
        (this.a = 0), (this.b = t);
      }
      function A(t, e) {
        return t.b ? (e.a || (e.a = new t.b(e.value)), e.a) : e.value;
      }
      function j(t) {
        t = t.a;
        var e,
          r = [];
        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
        return r;
      }
      function x(t, e) {
        (this.key = t), (this.value = e), (this.a = void 0);
      }
      function k(t) {
        if (8192 >= t.length) return String.fromCharCode.apply(null, t);
        for (var e = "", r = 0; r < t.length; r += 8192)
          e += String.fromCharCode.apply(null, v(t, r, r + 8192));
        return e;
      }
      c("jspb.Map", O, void 0),
        (O.prototype.g = function () {
          if (this.arrClean) {
            if (this.b) {
              var t,
                e = this.a;
              for (t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) {
                  var r = e[t].a;
                  r && r.g();
                }
            }
          } else {
            for (
              this.c.length = 0, (e = j(this)).sort(), t = 0;
              t < e.length;
              t++
            ) {
              var n = this.a[e[t]];
              (r = n.a) && r.g(), this.c.push([n.key, n.value]);
            }
            this.arrClean = !0;
          }
          return this.c;
        }),
        (O.prototype.toArray = O.prototype.g),
        (O.prototype.Mc = function (t, e) {
          for (var r = this.g(), n = [], o = 0; o < r.length; o++) {
            var i = this.a[r[o][0].toString()];
            A(this, i);
            var a = i.a;
            a ? (g(e), n.push([i.key, e(t, a)])) : n.push([i.key, i.value]);
          }
          return n;
        }),
        (O.prototype.toObject = O.prototype.Mc),
        (O.fromObject = function (t, e, r) {
          e = new O([], e);
          for (var n = 0; n < t.length; n++) {
            var o = t[n][0],
              i = r(t[n][1]);
            e.set(o, i);
          }
          return e;
        }),
        (S.prototype.next = function () {
          return this.a < this.b.length
            ? { done: !1, value: this.b[this.a++] }
            : { done: !0, value: void 0 };
        }),
        "undefined" != typeof Symbol &&
          (S.prototype[Symbol.iterator] = function () {
            return this;
          }),
        (O.prototype.Jb = function () {
          return j(this).length;
        }),
        (O.prototype.getLength = O.prototype.Jb),
        (O.prototype.clear = function () {
          (this.a = {}), (this.arrClean = !1);
        }),
        (O.prototype.clear = O.prototype.clear),
        (O.prototype.Cb = function (t) {
          t = t.toString();
          var e = this.a.hasOwnProperty(t);
          return delete this.a[t], (this.arrClean = !1), e;
        }),
        (O.prototype.del = O.prototype.Cb),
        (O.prototype.Eb = function () {
          var t = [],
            e = j(this);
          e.sort();
          for (var r = 0; r < e.length; r++) {
            var n = this.a[e[r]];
            t.push([n.key, n.value]);
          }
          return t;
        }),
        (O.prototype.getEntryList = O.prototype.Eb),
        (O.prototype.entries = function () {
          var t = [],
            e = j(this);
          e.sort();
          for (var r = 0; r < e.length; r++) {
            var n = this.a[e[r]];
            t.push([n.key, A(this, n)]);
          }
          return new S(t);
        }),
        (O.prototype.entries = O.prototype.entries),
        (O.prototype.keys = function () {
          var t = [],
            e = j(this);
          e.sort();
          for (var r = 0; r < e.length; r++) t.push(this.a[e[r]].key);
          return new S(t);
        }),
        (O.prototype.keys = O.prototype.keys),
        (O.prototype.values = function () {
          var t = [],
            e = j(this);
          e.sort();
          for (var r = 0; r < e.length; r++) t.push(A(this, this.a[e[r]]));
          return new S(t);
        }),
        (O.prototype.values = O.prototype.values),
        (O.prototype.forEach = function (t, e) {
          var r = j(this);
          r.sort();
          for (var n = 0; n < r.length; n++) {
            var o = this.a[r[n]];
            t.call(e, A(this, o), o.key, this);
          }
        }),
        (O.prototype.forEach = O.prototype.forEach),
        (O.prototype.set = function (t, e) {
          var r = new x(t);
          return (
            this.b ? ((r.a = e), (r.value = e.g())) : (r.value = e),
            (this.a[t.toString()] = r),
            (this.arrClean = !1),
            this
          );
        }),
        (O.prototype.set = O.prototype.set),
        (O.prototype.get = function (t) {
          if ((t = this.a[t.toString()])) return A(this, t);
        }),
        (O.prototype.get = O.prototype.get),
        (O.prototype.has = function (t) {
          return t.toString() in this.a;
        }),
        (O.prototype.has = O.prototype.has),
        (O.prototype.Jc = function (t, e, r, n, o) {
          var i = j(this);
          i.sort();
          for (var a = 0; a < i.length; a++) {
            var s = this.a[i[a]];
            e.Va(t),
              r.call(e, 1, s.key),
              this.b ? n.call(e, 2, A(this, s), o) : n.call(e, 2, s.value),
              e.Ya();
          }
        }),
        (O.prototype.serializeBinary = O.prototype.Jc),
        (O.deserializeBinary = function (t, e, r, n, o, i, a) {
          for (; e.oa() && !e.bb(); ) {
            var s = e.c;
            1 == s
              ? (i = r.call(e))
              : 2 == s &&
                (t.b
                  ? (g(o), a || (a = new t.b()), n.call(e, a, o))
                  : (a = n.call(e)));
          }
          g(null != i), g(null != a), t.set(i, a);
        });
      var E = {
          "\0": "\\0",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
          "\v": "\\x0B",
          '"': '\\"',
          "\\": "\\\\",
          "<": "\\u003C",
        },
        P = { "'": "\\'" },
        R = {},
        C = null;
      function T(t, e) {
        void 0 === e && (e = 0), M(), (e = R[e]);
        for (var r = [], n = 0; n < t.length; n += 3) {
          var o = t[n],
            i = n + 1 < t.length,
            a = i ? t[n + 1] : 0,
            s = n + 2 < t.length,
            u = s ? t[n + 2] : 0,
            p = o >> 2;
          (o = ((3 & o) << 4) | (a >> 4)),
            (a = ((15 & a) << 2) | (u >> 6)),
            (u &= 63),
            s || ((u = 64), i || (a = 64)),
            r.push(e[p], e[o], e[a] || "", e[u] || "");
        }
        return r.join("");
      }
      function B(t) {
        var e = t.length,
          r = (3 * e) / 4;
        r % 3
          ? (r = Math.floor(r))
          : -1 != "=.".indexOf(t[e - 1]) &&
            (r = -1 != "=.".indexOf(t[e - 2]) ? r - 2 : r - 1);
        var n = new Uint8Array(r),
          o = 0;
        return (
          (function (t, e) {
            function r(e) {
              for (; n < t.length; ) {
                var r = t.charAt(n++),
                  o = C[r];
                if (null != o) return o;
                if (!/^[\s\xa0]*$/.test(r))
                  throw Error("Unknown base64 encoding at char: " + r);
              }
              return e;
            }
            M();
            for (var n = 0; ; ) {
              var o = r(-1),
                i = r(0),
                a = r(64),
                s = r(64);
              if (64 === s && -1 === o) break;
              e((o << 2) | (i >> 4)),
                64 != a &&
                  (e(((i << 4) & 240) | (a >> 2)),
                  64 != s && e(((a << 6) & 192) | s));
            }
          })(t, function (t) {
            n[o++] = t;
          }),
          n.subarray(0, o)
        );
      }
      function M() {
        if (!C) {
          C = {};
          for (
            var t =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                  "",
                ),
              e = ["+/=", "+/", "-_=", "-_.", "-_"],
              r = 0;
            5 > r;
            r++
          ) {
            var n = t.concat(e[r].split(""));
            R[r] = n;
            for (var o = 0; o < n.length; o++) {
              var i = n[o];
              void 0 === C[i] && (C[i] = o);
            }
          }
        }
      }
      c("jspb.ConstBinaryMessage", function () {}, void 0),
        c("jspb.BinaryMessage", function () {}, void 0),
        c(
          "jspb.BinaryConstants.FieldType",
          {
            yb: -1,
            ee: 1,
            FLOAT: 2,
            ke: 3,
            te: 4,
            je: 5,
            xb: 6,
            wb: 7,
            BOOL: 8,
            re: 9,
            ie: 10,
            le: 11,
            ce: 12,
            se: 13,
            ge: 14,
            me: 15,
            ne: 16,
            oe: 17,
            pe: 18,
            he: 30,
            ve: 31,
          },
          void 0,
        ),
        c(
          "jspb.BinaryConstants.WireType",
          { yb: -1, ue: 0, xb: 1, de: 2, qe: 3, fe: 4, wb: 5 },
          void 0,
        ),
        c(
          "jspb.BinaryConstants.FieldTypeToWireType",
          function (t) {
            switch (t) {
              case 5:
              case 3:
              case 13:
              case 4:
              case 17:
              case 18:
              case 8:
              case 14:
              case 31:
                return 0;
              case 1:
              case 6:
              case 16:
              case 30:
                return 1;
              case 9:
              case 11:
              case 12:
                return 2;
              case 2:
              case 7:
              case 15:
                return 5;
              default:
                return -1;
            }
          },
          void 0,
        ),
        c("jspb.BinaryConstants.INVALID_FIELD_NUMBER", -1, void 0),
        c("jspb.BinaryConstants.FLOAT32_EPS", 1401298464324817e-60, void 0),
        c("jspb.BinaryConstants.FLOAT32_MIN", 11754943508222875e-54, void 0),
        c("jspb.BinaryConstants.FLOAT32_MAX", 34028234663852886e22, void 0),
        c("jspb.BinaryConstants.FLOAT64_EPS", 5e-324, void 0),
        c("jspb.BinaryConstants.FLOAT64_MIN", 22250738585072014e-324, void 0),
        c("jspb.BinaryConstants.FLOAT64_MAX", 17976931348623157e292, void 0),
        c("jspb.BinaryConstants.TWO_TO_20", 1048576, void 0),
        c("jspb.BinaryConstants.TWO_TO_23", 8388608, void 0),
        c("jspb.BinaryConstants.TWO_TO_31", 2147483648, void 0),
        c("jspb.BinaryConstants.TWO_TO_32", 4294967296, void 0),
        c("jspb.BinaryConstants.TWO_TO_52", 4503599627370496, void 0),
        c("jspb.BinaryConstants.TWO_TO_63", 0x8000000000000000, void 0),
        c("jspb.BinaryConstants.TWO_TO_64", 0x10000000000000000, void 0),
        c("jspb.BinaryConstants.ZERO_HASH", "\0\0\0\0\0\0\0\0", void 0);
      var U = 0,
        I = 0;
      function L(t) {
        var e = t >>> 0;
        (t = Math.floor((t - e) / 4294967296) >>> 0), (U = e), (I = t);
      }
      function F(t) {
        var e = 0 > t,
          r = (t = Math.abs(t)) >>> 0;
        (t = Math.floor((t - r) / 4294967296)),
          (t >>>= 0),
          e &&
            ((t = ~t >>> 0),
            4294967295 < (r = (~r >>> 0) + 1) &&
              ((r = 0), 4294967295 < ++t && (t = 0))),
          (U = r),
          (I = t);
      }
      function D(t) {
        var e = 0 > t;
        L((t = 2 * Math.abs(t))), (t = U);
        var r = I;
        e &&
          (0 == t
            ? 0 == r
              ? (r = t = 4294967295)
              : (r--, (t = 4294967295))
            : t--),
          (U = t),
          (I = r);
      }
      function V(t) {
        var e = 0 > t ? 1 : 0;
        if (0 === (t = e ? -t : t))
          0 < 1 / t ? (U = I = 0) : ((I = 0), (U = 2147483648));
        else if (isNaN(t)) (I = 0), (U = 2147483647);
        else if (34028234663852886e22 < t)
          (I = 0), (U = ((e << 31) | 2139095040) >>> 0);
        else if (11754943508222875e-54 > t)
          (t = Math.round(t / Math.pow(2, -149))),
            (I = 0),
            (U = ((e << 31) | t) >>> 0);
        else {
          var r = Math.floor(Math.log(t) / Math.LN2);
          (t *= Math.pow(2, -r)),
            16777216 <= (t = Math.round(8388608 * t)) && ++r,
            (I = 0),
            (U = ((e << 31) | ((r + 127) << 23) | (8388607 & t)) >>> 0);
        }
      }
      function N(t) {
        var e = 0 > t ? 1 : 0;
        if (0 === (t = e ? -t : t)) (I = 0 < 1 / t ? 0 : 2147483648), (U = 0);
        else if (isNaN(t)) (I = 2147483647), (U = 4294967295);
        else if (17976931348623157e292 < t)
          (I = ((e << 31) | 2146435072) >>> 0), (U = 0);
        else if (22250738585072014e-324 > t)
          (t /= Math.pow(2, -1074)),
            (I = ((e << 31) | (t / 4294967296)) >>> 0),
            (U = t >>> 0);
        else {
          var r = t,
            n = 0;
          if (2 <= r) for (; 2 <= r && 1023 > n; ) n++, (r /= 2);
          else for (; 1 > r && -1022 < n; ) (r *= 2), n--;
          (t *= Math.pow(2, -n)),
            (I =
              ((e << 31) | ((n + 1023) << 20) | ((1048576 * t) & 1048575)) >>>
              0),
            (U = (4503599627370496 * t) >>> 0);
        }
      }
      function z(t) {
        var e = t.charCodeAt(4),
          r = t.charCodeAt(5),
          n = t.charCodeAt(6),
          o = t.charCodeAt(7);
        (U =
          (t.charCodeAt(0) +
            (t.charCodeAt(1) << 8) +
            (t.charCodeAt(2) << 16) +
            (t.charCodeAt(3) << 24)) >>>
          0),
          (I = (e + (r << 8) + (n << 16) + (o << 24)) >>> 0);
      }
      function H(t, e) {
        return 4294967296 * e + (t >>> 0);
      }
      function W(t, e) {
        var r = 2147483648 & e;
        return (
          r &&
            ((e = ~e >>> 0), 0 == (t = (1 + ~t) >>> 0) && (e = (e + 1) >>> 0)),
          (t = H(t, e)),
          r ? -t : t
        );
      }
      function G(t, e, r) {
        var n = e >> 31;
        return r((t << 1) ^ n, ((e << 1) | (t >>> 31)) ^ n);
      }
      function K(t, e) {
        return q(t, e, W);
      }
      function q(t, e, r) {
        var n = -(1 & t);
        return r(((t >>> 1) | (e << 31)) ^ n, (e >>> 1) ^ n);
      }
      function Z(t) {
        var e = 2 * (t >> 31) + 1,
          r = (t >>> 23) & 255;
        return (
          (t &= 8388607),
          255 == r
            ? t
              ? NaN
              : (1 / 0) * e
            : 0 == r
              ? e * Math.pow(2, -149) * t
              : e * Math.pow(2, r - 150) * (t + Math.pow(2, 23))
        );
      }
      function X(t, e) {
        var r = 2 * (e >> 31) + 1,
          n = (e >>> 20) & 2047;
        return (
          (t = 4294967296 * (1048575 & e) + t),
          2047 == n
            ? t
              ? NaN
              : (1 / 0) * r
            : 0 == n
              ? r * Math.pow(2, -1074) * t
              : r * Math.pow(2, n - 1075) * (t + 4503599627370496)
        );
      }
      function J(t, e) {
        return String.fromCharCode(
          (t >>> 0) & 255,
          (t >>> 8) & 255,
          (t >>> 16) & 255,
          (t >>> 24) & 255,
          (e >>> 0) & 255,
          (e >>> 8) & 255,
          (e >>> 16) & 255,
          (e >>> 24) & 255,
        );
      }
      function $(t, e) {
        function r(t, e) {
          return (
            (t = t ? String(t) : ""), e ? "0000000".slice(t.length) + t : t
          );
        }
        if (2097151 >= e) return "" + H(t, e);
        var n = (((t >>> 24) | (e << 8)) >>> 0) & 16777215;
        return (
          (t =
            (16777215 & t) + 6777216 * n + 6710656 * (e = (e >> 16) & 65535)),
          (n += 8147497 * e),
          (e *= 2),
          1e7 <= t && ((n += Math.floor(t / 1e7)), (t %= 1e7)),
          1e7 <= n && ((e += Math.floor(n / 1e7)), (n %= 1e7)),
          r(e, 0) + r(n, e) + r(t, 1)
        );
      }
      function Y(t, e) {
        var r = 2147483648 & e;
        return (
          r && (e = (~e + (0 == (t = (1 + ~t) >>> 0) ? 1 : 0)) >>> 0),
          (t = $(t, e)),
          r ? "-" + t : t
        );
      }
      function Q(t, e) {
        z(t), (t = U);
        var r = I;
        return e ? Y(t, r) : $(t, r);
      }
      function tt(t) {
        function e(t, e) {
          for (var r = 0; 8 > r && (1 !== t || 0 < e); r++)
            (e = t * n[r] + e), (n[r] = 255 & e), (e >>>= 8);
        }
        g(0 < t.length);
        var r = !1;
        "-" === t[0] && ((r = !0), (t = t.slice(1)));
        for (var n = [0, 0, 0, 0, 0, 0, 0, 0], o = 0; o < t.length; o++)
          e(10, t.charCodeAt(o) - 48);
        return (
          r &&
            ((function () {
              for (var t = 0; 8 > t; t++) n[t] = 255 & ~n[t];
            })(),
            e(1, 1)),
          k(n)
        );
      }
      function et(t) {
        return String.fromCharCode(10 > t ? 48 + t : 87 + t);
      }
      function rt(t) {
        return 97 <= t ? t - 97 + 10 : t - 48;
      }
      function nt(t, e, r, n, o) {
        var i = 0;
        if (128 > n) for (; e < r && t[e++] == n; ) i++, (e += o);
        else
          for (; e < r; ) {
            for (var a = n; 128 < a; ) {
              if (t[e++] != ((127 & a) | 128)) return i;
              a >>= 7;
            }
            if (t[e++] != a) break;
            i++, (e += o);
          }
        return i;
      }
      function ot(t) {
        return t.constructor === Uint8Array
          ? t
          : t.constructor === ArrayBuffer || t.constructor === Array
            ? new Uint8Array(t)
            : t.constructor === String
              ? B(t)
              : t instanceof Uint8Array
                ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
                : (_("Type not convertible to Uint8Array."), new Uint8Array(0));
      }
      function it(t, e, r) {
        (this.b = null),
          (this.a = this.c = this.h = 0),
          (this.v = !1),
          t && this.H(t, e, r);
      }
      c(
        "jspb.utils.getSplit64Low",
        function () {
          return U;
        },
        void 0,
      ),
        c(
          "jspb.utils.getSplit64High",
          function () {
            return I;
          },
          void 0,
        ),
        c("jspb.utils.splitUint64", L, void 0),
        c("jspb.utils.splitInt64", F, void 0),
        c("jspb.utils.splitZigzag64", D, void 0),
        c("jspb.utils.splitFloat32", V, void 0),
        c("jspb.utils.splitFloat64", N, void 0),
        c("jspb.utils.splitHash64", z, void 0),
        c("jspb.utils.joinUint64", H, void 0),
        c("jspb.utils.joinInt64", W, void 0),
        c("jspb.utils.toZigzag64", G, void 0),
        c("jspb.utils.joinZigzag64", K, void 0),
        c("jspb.utils.fromZigzag64", q, void 0),
        c("jspb.utils.joinFloat32", Z, void 0),
        c("jspb.utils.joinFloat64", X, void 0),
        c("jspb.utils.joinHash64", J, void 0),
        c("jspb.utils.DIGITS", "0123456789abcdef".split(""), void 0),
        c("jspb.utils.joinUnsignedDecimalString", $, void 0),
        c("jspb.utils.joinSignedDecimalString", Y, void 0),
        c("jspb.utils.hash64ToDecimalString", Q, void 0),
        c(
          "jspb.utils.hash64ArrayToDecimalStrings",
          function (t, e) {
            for (var r = Array(t.length), n = 0; n < t.length; n++)
              r[n] = Q(t[n], e);
            return r;
          },
          void 0,
        ),
        c("jspb.utils.decimalStringToHash64", tt, void 0),
        c(
          "jspb.utils.splitDecimalString",
          function (t) {
            z(tt(t));
          },
          void 0,
        ),
        c(
          "jspb.utils.hash64ToHexString",
          function (t) {
            var e = Array(18);
            (e[0] = "0"), (e[1] = "x");
            for (var r = 0; 8 > r; r++) {
              var n = t.charCodeAt(7 - r);
              (e[2 * r + 2] = et(n >> 4)), (e[2 * r + 3] = et(15 & n));
            }
            return e.join("");
          },
          void 0,
        ),
        c(
          "jspb.utils.hexStringToHash64",
          function (t) {
            g(18 == (t = t.toLowerCase()).length),
              g("0" == t[0]),
              g("x" == t[1]);
            for (var e = "", r = 0; 8 > r; r++)
              e =
                String.fromCharCode(
                  16 * rt(t.charCodeAt(2 * r + 2)) +
                    rt(t.charCodeAt(2 * r + 3)),
                ) + e;
            return e;
          },
          void 0,
        ),
        c(
          "jspb.utils.hash64ToNumber",
          function (t, e) {
            z(t), (t = U);
            var r = I;
            return e ? W(t, r) : H(t, r);
          },
          void 0,
        ),
        c(
          "jspb.utils.numberToHash64",
          function (t) {
            return F(t), J(U, I);
          },
          void 0,
        ),
        c(
          "jspb.utils.countVarints",
          function (t, e, r) {
            for (var n = 0, o = e; o < r; o++) n += t[o] >> 7;
            return r - e - n;
          },
          void 0,
        ),
        c(
          "jspb.utils.countVarintFields",
          function (t, e, r, n) {
            var o = 0;
            if (128 > (n *= 8))
              for (; e < r && t[e++] == n; )
                for (o++; ; ) {
                  var i = t[e++];
                  if (!(128 & i)) break;
                }
            else
              for (; e < r; ) {
                for (i = n; 128 < i; ) {
                  if (t[e] != ((127 & i) | 128)) return o;
                  e++, (i >>= 7);
                }
                if (t[e++] != i) break;
                for (o++; 128 & (i = t[e++]); );
              }
            return o;
          },
          void 0,
        ),
        c(
          "jspb.utils.countFixed32Fields",
          function (t, e, r, n) {
            return nt(t, e, r, 8 * n + 5, 4);
          },
          void 0,
        ),
        c(
          "jspb.utils.countFixed64Fields",
          function (t, e, r, n) {
            return nt(t, e, r, 8 * n + 1, 8);
          },
          void 0,
        ),
        c(
          "jspb.utils.countDelimitedFields",
          function (t, e, r, n) {
            var o = 0;
            for (n = 8 * n + 2; e < r; ) {
              for (var i = n; 128 < i; ) {
                if (t[e++] != ((127 & i) | 128)) return o;
                i >>= 7;
              }
              if (t[e++] != i) break;
              o++;
              for (
                var a = 0, s = 1;
                (a += (127 & (i = t[e++])) * s), (s *= 128), 128 & i;
              );
              e += a;
            }
            return o;
          },
          void 0,
        ),
        c(
          "jspb.utils.debugBytesToTextFormat",
          function (t) {
            var e = '"';
            if (t) {
              t = ot(t);
              for (var r = 0; r < t.length; r++)
                (e += "\\x"), 16 > t[r] && (e += "0"), (e += t[r].toString(16));
            }
            return e + '"';
          },
          void 0,
        ),
        c(
          "jspb.utils.debugScalarToTextFormat",
          function (t) {
            if ("string" == typeof t) {
              t = String(t);
              for (var e = ['"'], r = 0; r < t.length; r++) {
                var n,
                  o = t.charAt(r),
                  i = o.charCodeAt(0),
                  a = r + 1;
                (n = E[o]) ||
                  ((31 < i && 127 > i) ||
                    ((i = o) in P
                      ? (o = P[i])
                      : i in E
                        ? (o = P[i] = E[i])
                        : (31 < (n = i.charCodeAt(0)) && 127 > n
                            ? (o = i)
                            : (256 > n
                                ? ((o = "\\x"),
                                  (16 > n || 256 < n) && (o += "0"))
                                : ((o = "\\u"), 4096 > n && (o += "0")),
                              (o += n.toString(16).toUpperCase())),
                          (o = P[i] = o))),
                  (n = o)),
                  (e[a] = n);
              }
              e.push('"'), (t = e.join(""));
            } else t = t.toString();
            return t;
          },
          void 0,
        ),
        c(
          "jspb.utils.stringToByteArray",
          function (t) {
            for (var e = new Uint8Array(t.length), r = 0; r < t.length; r++) {
              var n = t.charCodeAt(r);
              if (255 < n)
                throw Error(
                  "Conversion error: string contains codepoint outside of byte range",
                );
              e[r] = n;
            }
            return e;
          },
          void 0,
        ),
        c("jspb.utils.byteSourceToUint8Array", ot, void 0),
        c("jspb.BinaryDecoder", it, void 0);
      var at = [];
      function st(t, e, r) {
        if (at.length) {
          var n = at.pop();
          return t && n.H(t, e, r), n;
        }
        return new it(t, e, r);
      }
      function ut(t, e, r) {
        (this.a = st(t, e, r)),
          (this.O = this.a.B()),
          (this.b = this.c = -1),
          (this.h = !1),
          (this.v = null);
      }
      (it.getInstanceCacheLength = function () {
        return at.length;
      }),
        (it.alloc = st),
        (it.prototype.Ca = function () {
          this.clear(), 100 > at.length && at.push(this);
        }),
        (it.prototype.free = it.prototype.Ca),
        (it.prototype.clone = function () {
          return st(this.b, this.h, this.c - this.h);
        }),
        (it.prototype.clone = it.prototype.clone),
        (it.prototype.clear = function () {
          (this.b = null), (this.a = this.c = this.h = 0), (this.v = !1);
        }),
        (it.prototype.clear = it.prototype.clear),
        (it.prototype.Y = function () {
          return this.b;
        }),
        (it.prototype.getBuffer = it.prototype.Y),
        (it.prototype.H = function (t, e, r) {
          (this.b = ot(t)),
            (this.h = void 0 !== e ? e : 0),
            (this.c = void 0 !== r ? this.h + r : this.b.length),
            (this.a = this.h);
        }),
        (it.prototype.setBlock = it.prototype.H),
        (it.prototype.Db = function () {
          return this.c;
        }),
        (it.prototype.getEnd = it.prototype.Db),
        (it.prototype.setEnd = function (t) {
          this.c = t;
        }),
        (it.prototype.setEnd = it.prototype.setEnd),
        (it.prototype.reset = function () {
          this.a = this.h;
        }),
        (it.prototype.reset = it.prototype.reset),
        (it.prototype.B = function () {
          return this.a;
        }),
        (it.prototype.getCursor = it.prototype.B),
        (it.prototype.Ma = function (t) {
          this.a = t;
        }),
        (it.prototype.setCursor = it.prototype.Ma),
        (it.prototype.advance = function (t) {
          (this.a += t), g(this.a <= this.c);
        }),
        (it.prototype.advance = it.prototype.advance),
        (it.prototype.ya = function () {
          return this.a == this.c;
        }),
        (it.prototype.atEnd = it.prototype.ya),
        (it.prototype.Qb = function () {
          return this.a > this.c;
        }),
        (it.prototype.pastEnd = it.prototype.Qb),
        (it.prototype.getError = function () {
          return this.v || 0 > this.a || this.a > this.c;
        }),
        (it.prototype.getError = it.prototype.getError),
        (it.prototype.w = function (t) {
          for (var e = 128, r = 0, n = 0, o = 0; 4 > o && 128 <= e; o++)
            r |= (127 & (e = this.b[this.a++])) << (7 * o);
          if (
            (128 <= e &&
              ((r |= (127 & (e = this.b[this.a++])) << 28),
              (n |= (127 & e) >> 4)),
            128 <= e)
          )
            for (o = 0; 5 > o && 128 <= e; o++)
              n |= (127 & (e = this.b[this.a++])) << (7 * o + 3);
          if (128 > e) return t(r >>> 0, n >>> 0);
          _("Failed to read varint, encoding is invalid."), (this.v = !0);
        }),
        (it.prototype.readSplitVarint64 = it.prototype.w),
        (it.prototype.ea = function (t) {
          return this.w(function (e, r) {
            return q(e, r, t);
          });
        }),
        (it.prototype.readSplitZigzagVarint64 = it.prototype.ea),
        (it.prototype.ta = function (t) {
          var e = this.b,
            r = this.a;
          this.a += 8;
          for (var n = 0, o = 0, i = r + 7; i >= r; i--)
            (n = (n << 8) | e[i]), (o = (o << 8) | e[i + 4]);
          return t(n, o);
        }),
        (it.prototype.readSplitFixed64 = it.prototype.ta),
        (it.prototype.kb = function () {
          for (; 128 & this.b[this.a]; ) this.a++;
          this.a++;
        }),
        (it.prototype.skipVarint = it.prototype.kb),
        (it.prototype.mb = function (t) {
          for (; 128 < t; ) this.a--, (t >>>= 7);
          this.a--;
        }),
        (it.prototype.unskipVarint = it.prototype.mb),
        (it.prototype.o = function () {
          var t = this.b,
            e = t[this.a],
            r = 127 & e;
          return 128 > e
            ? ((this.a += 1), g(this.a <= this.c), r)
            : ((r |= (127 & (e = t[this.a + 1])) << 7),
              128 > e
                ? ((this.a += 2), g(this.a <= this.c), r)
                : ((r |= (127 & (e = t[this.a + 2])) << 14),
                  128 > e
                    ? ((this.a += 3), g(this.a <= this.c), r)
                    : ((r |= (127 & (e = t[this.a + 3])) << 21),
                      128 > e
                        ? ((this.a += 4), g(this.a <= this.c), r)
                        : ((r |= (15 & (e = t[this.a + 4])) << 28),
                          128 > e
                            ? ((this.a += 5), g(this.a <= this.c), r >>> 0)
                            : ((this.a += 5),
                              128 <= t[this.a++] &&
                                128 <= t[this.a++] &&
                                128 <= t[this.a++] &&
                                128 <= t[this.a++] &&
                                128 <= t[this.a++] &&
                                g(!1),
                              g(this.a <= this.c),
                              r)))));
        }),
        (it.prototype.readUnsignedVarint32 = it.prototype.o),
        (it.prototype.da = function () {
          return ~~this.o();
        }),
        (it.prototype.readSignedVarint32 = it.prototype.da),
        (it.prototype.O = function () {
          return this.o().toString();
        }),
        (it.prototype.Ea = function () {
          return this.da().toString();
        }),
        (it.prototype.readSignedVarint32String = it.prototype.Ea),
        (it.prototype.Ia = function () {
          var t = this.o();
          return (t >>> 1) ^ -(1 & t);
        }),
        (it.prototype.readZigzagVarint32 = it.prototype.Ia),
        (it.prototype.Ga = function () {
          return this.w(H);
        }),
        (it.prototype.readUnsignedVarint64 = it.prototype.Ga),
        (it.prototype.Ha = function () {
          return this.w($);
        }),
        (it.prototype.readUnsignedVarint64String = it.prototype.Ha),
        (it.prototype.sa = function () {
          return this.w(W);
        }),
        (it.prototype.readSignedVarint64 = it.prototype.sa),
        (it.prototype.Fa = function () {
          return this.w(Y);
        }),
        (it.prototype.readSignedVarint64String = it.prototype.Fa),
        (it.prototype.Ja = function () {
          return this.w(K);
        }),
        (it.prototype.readZigzagVarint64 = it.prototype.Ja),
        (it.prototype.fb = function () {
          return this.ea(J);
        }),
        (it.prototype.readZigzagVarintHash64 = it.prototype.fb),
        (it.prototype.Ka = function () {
          return this.ea(Y);
        }),
        (it.prototype.readZigzagVarint64String = it.prototype.Ka),
        (it.prototype.Gc = function () {
          var t = this.b[this.a];
          return (this.a += 1), g(this.a <= this.c), t;
        }),
        (it.prototype.readUint8 = it.prototype.Gc),
        (it.prototype.Ec = function () {
          var t = this.b[this.a],
            e = this.b[this.a + 1];
          return (this.a += 2), g(this.a <= this.c), t | (e << 8);
        }),
        (it.prototype.readUint16 = it.prototype.Ec),
        (it.prototype.m = function () {
          var t = this.b[this.a],
            e = this.b[this.a + 1],
            r = this.b[this.a + 2],
            n = this.b[this.a + 3];
          return (
            (this.a += 4),
            g(this.a <= this.c),
            (t | (e << 8) | (r << 16) | (n << 24)) >>> 0
          );
        }),
        (it.prototype.readUint32 = it.prototype.m),
        (it.prototype.ga = function () {
          return H(this.m(), this.m());
        }),
        (it.prototype.readUint64 = it.prototype.ga),
        (it.prototype.ha = function () {
          return $(this.m(), this.m());
        }),
        (it.prototype.readUint64String = it.prototype.ha),
        (it.prototype.Xb = function () {
          var t = this.b[this.a];
          return (this.a += 1), g(this.a <= this.c), (t << 24) >> 24;
        }),
        (it.prototype.readInt8 = it.prototype.Xb),
        (it.prototype.Vb = function () {
          var t = this.b[this.a],
            e = this.b[this.a + 1];
          return (
            (this.a += 2), g(this.a <= this.c), ((t | (e << 8)) << 16) >> 16
          );
        }),
        (it.prototype.readInt16 = it.prototype.Vb),
        (it.prototype.P = function () {
          var t = this.b[this.a],
            e = this.b[this.a + 1],
            r = this.b[this.a + 2],
            n = this.b[this.a + 3];
          return (
            (this.a += 4),
            g(this.a <= this.c),
            t | (e << 8) | (r << 16) | (n << 24)
          );
        }),
        (it.prototype.readInt32 = it.prototype.P),
        (it.prototype.ba = function () {
          return W(this.m(), this.m());
        }),
        (it.prototype.readInt64 = it.prototype.ba),
        (it.prototype.ca = function () {
          return Y(this.m(), this.m());
        }),
        (it.prototype.readInt64String = it.prototype.ca),
        (it.prototype.aa = function () {
          return Z(this.m());
        }),
        (it.prototype.readFloat = it.prototype.aa),
        (it.prototype.Z = function () {
          return X(this.m(), this.m());
        }),
        (it.prototype.readDouble = it.prototype.Z),
        (it.prototype.pa = function () {
          return !!this.b[this.a++];
        }),
        (it.prototype.readBool = it.prototype.pa),
        (it.prototype.ra = function () {
          return this.da();
        }),
        (it.prototype.readEnum = it.prototype.ra),
        (it.prototype.fa = function (t) {
          var e = this.b,
            r = this.a;
          t = r + t;
          for (var n = [], o = ""; r < t; ) {
            var i = e[r++];
            if (128 > i) n.push(i);
            else {
              if (192 > i) continue;
              if (224 > i) {
                var a = e[r++];
                n.push(((31 & i) << 6) | (63 & a));
              } else if (240 > i) {
                a = e[r++];
                var s = e[r++];
                n.push(((15 & i) << 12) | ((63 & a) << 6) | (63 & s));
              } else if (248 > i) {
                (i =
                  ((7 & i) << 18) |
                  ((63 & (a = e[r++])) << 12) |
                  ((63 & (s = e[r++])) << 6) |
                  (63 & e[r++])),
                  (i -= 65536),
                  n.push(55296 + ((i >> 10) & 1023), 56320 + (1023 & i));
              }
            }
            8192 <= n.length &&
              ((o += String.fromCharCode.apply(null, n)), (n.length = 0));
          }
          return (o += k(n)), (this.a = r), o;
        }),
        (it.prototype.readString = it.prototype.fa),
        (it.prototype.Dc = function () {
          var t = this.o();
          return this.fa(t);
        }),
        (it.prototype.readStringWithLength = it.prototype.Dc),
        (it.prototype.qa = function (t) {
          if (0 > t || this.a + t > this.b.length)
            return (this.v = !0), _("Invalid byte length!"), new Uint8Array(0);
          var e = this.b.subarray(this.a, this.a + t);
          return (this.a += t), g(this.a <= this.c), e;
        }),
        (it.prototype.readBytes = it.prototype.qa),
        (it.prototype.ia = function () {
          return this.w(J);
        }),
        (it.prototype.readVarintHash64 = it.prototype.ia),
        (it.prototype.$ = function () {
          var t = this.b,
            e = this.a,
            r = t[e],
            n = t[e + 1],
            o = t[e + 2],
            i = t[e + 3],
            a = t[e + 4],
            s = t[e + 5],
            u = t[e + 6];
          return (
            (t = t[e + 7]),
            (this.a += 8),
            String.fromCharCode(r, n, o, i, a, s, u, t)
          );
        }),
        (it.prototype.readFixedHash64 = it.prototype.$),
        c("jspb.BinaryReader", ut, void 0);
      var pt = [];
      function ct(t, e, r) {
        if (pt.length) {
          var n = pt.pop();
          return t && n.a.H(t, e, r), n;
        }
        return new ut(t, e, r);
      }
      function lt(t, e) {
        g(2 == t.b);
        var r = t.a.o();
        r = t.a.B() + r;
        for (var n = []; t.a.B() < r; ) n.push(e.call(t.a));
        return n;
      }
      function ht(t, e, r, n, o) {
        (this.ma = t),
          (this.Ba = e),
          (this.la = r),
          (this.Na = n),
          (this.na = o);
      }
      function ft(t, e, r, n, o, i) {
        (this.Za = t),
          (this.za = e),
          (this.Aa = r),
          (this.Wa = n),
          (this.Ab = o),
          (this.Nb = i);
      }
      function dt() {}
      (ut.clearInstanceCache = function () {
        pt = [];
      }),
        (ut.getInstanceCacheLength = function () {
          return pt.length;
        }),
        (ut.alloc = ct),
        (ut.prototype.zb = ct),
        (ut.prototype.alloc = ut.prototype.zb),
        (ut.prototype.Ca = function () {
          this.a.clear(),
            (this.b = this.c = -1),
            (this.h = !1),
            (this.v = null),
            100 > pt.length && pt.push(this);
        }),
        (ut.prototype.free = ut.prototype.Ca),
        (ut.prototype.Fb = function () {
          return this.O;
        }),
        (ut.prototype.getFieldCursor = ut.prototype.Fb),
        (ut.prototype.B = function () {
          return this.a.B();
        }),
        (ut.prototype.getCursor = ut.prototype.B),
        (ut.prototype.Y = function () {
          return this.a.Y();
        }),
        (ut.prototype.getBuffer = ut.prototype.Y),
        (ut.prototype.Hb = function () {
          return this.c;
        }),
        (ut.prototype.getFieldNumber = ut.prototype.Hb),
        (ut.prototype.Lb = function () {
          return this.b;
        }),
        (ut.prototype.getWireType = ut.prototype.Lb),
        (ut.prototype.Mb = function () {
          return 2 == this.b;
        }),
        (ut.prototype.isDelimited = ut.prototype.Mb),
        (ut.prototype.bb = function () {
          return 4 == this.b;
        }),
        (ut.prototype.isEndGroup = ut.prototype.bb),
        (ut.prototype.getError = function () {
          return this.h || this.a.getError();
        }),
        (ut.prototype.getError = ut.prototype.getError),
        (ut.prototype.H = function (t, e, r) {
          this.a.H(t, e, r), (this.b = this.c = -1);
        }),
        (ut.prototype.setBlock = ut.prototype.H),
        (ut.prototype.reset = function () {
          this.a.reset(), (this.b = this.c = -1);
        }),
        (ut.prototype.reset = ut.prototype.reset),
        (ut.prototype.advance = function (t) {
          this.a.advance(t);
        }),
        (ut.prototype.advance = ut.prototype.advance),
        (ut.prototype.oa = function () {
          if (this.a.ya()) return !1;
          if (this.getError()) return _("Decoder hit an error"), !1;
          this.O = this.a.B();
          var t = this.a.o(),
            e = t >>> 3;
          return 0 != (t &= 7) && 5 != t && 1 != t && 2 != t && 3 != t && 4 != t
            ? (_("Invalid wire type: %s (at position %s)", t, this.O),
              (this.h = !0),
              !1)
            : ((this.c = e), (this.b = t), !0);
        }),
        (ut.prototype.nextField = ut.prototype.oa),
        (ut.prototype.Oa = function () {
          this.a.mb((this.c << 3) | this.b);
        }),
        (ut.prototype.unskipHeader = ut.prototype.Oa),
        (ut.prototype.Lc = function () {
          var t = this.c;
          for (this.Oa(); this.oa() && this.c == t; ) this.C();
          this.a.ya() || this.Oa();
        }),
        (ut.prototype.skipMatchingFields = ut.prototype.Lc),
        (ut.prototype.lb = function () {
          0 != this.b
            ? (_("Invalid wire type for skipVarintField"), this.C())
            : this.a.kb();
        }),
        (ut.prototype.skipVarintField = ut.prototype.lb),
        (ut.prototype.gb = function () {
          if (2 != this.b)
            _("Invalid wire type for skipDelimitedField"), this.C();
          else {
            var t = this.a.o();
            this.a.advance(t);
          }
        }),
        (ut.prototype.skipDelimitedField = ut.prototype.gb),
        (ut.prototype.hb = function () {
          5 != this.b
            ? (_("Invalid wire type for skipFixed32Field"), this.C())
            : this.a.advance(4);
        }),
        (ut.prototype.skipFixed32Field = ut.prototype.hb),
        (ut.prototype.ib = function () {
          1 != this.b
            ? (_("Invalid wire type for skipFixed64Field"), this.C())
            : this.a.advance(8);
        }),
        (ut.prototype.skipFixed64Field = ut.prototype.ib),
        (ut.prototype.jb = function () {
          for (var t = this.c; ; ) {
            if (!this.oa()) {
              _("Unmatched start-group tag: stream EOF"), (this.h = !0);
              break;
            }
            if (4 == this.b) {
              this.c != t && (_("Unmatched end-group tag"), (this.h = !0));
              break;
            }
            this.C();
          }
        }),
        (ut.prototype.skipGroup = ut.prototype.jb),
        (ut.prototype.C = function () {
          switch (this.b) {
            case 0:
              this.lb();
              break;
            case 1:
              this.ib();
              break;
            case 2:
              this.gb();
              break;
            case 5:
              this.hb();
              break;
            case 3:
              this.jb();
              break;
            default:
              _("Invalid wire encoding for field.");
          }
        }),
        (ut.prototype.skipField = ut.prototype.C),
        (ut.prototype.Hc = function (t, e) {
          null === this.v && (this.v = {}), g(!this.v[t]), (this.v[t] = e);
        }),
        (ut.prototype.registerReadCallback = ut.prototype.Hc),
        (ut.prototype.Ic = function (t) {
          return g(null !== this.v), g((t = this.v[t])), t(this);
        }),
        (ut.prototype.runReadCallback = ut.prototype.Ic),
        (ut.prototype.Yb = function (t, e) {
          g(2 == this.b);
          var r = this.a.c,
            n = this.a.o();
          (n = this.a.B() + n),
            this.a.setEnd(n),
            e(t, this),
            this.a.Ma(n),
            this.a.setEnd(r);
        }),
        (ut.prototype.readMessage = ut.prototype.Yb),
        (ut.prototype.Ub = function (t, e, r) {
          g(3 == this.b),
            g(this.c == t),
            r(e, this),
            this.h ||
              4 == this.b ||
              (_("Group submessage did not end with an END_GROUP tag"),
              (this.h = !0));
        }),
        (ut.prototype.readGroup = ut.prototype.Ub),
        (ut.prototype.Gb = function () {
          g(2 == this.b);
          var t = this.a.o(),
            e = this.a.B(),
            r = e + t;
          return (t = st(this.a.Y(), e, t)), this.a.Ma(r), t;
        }),
        (ut.prototype.getFieldDecoder = ut.prototype.Gb),
        (ut.prototype.P = function () {
          return g(0 == this.b), this.a.da();
        }),
        (ut.prototype.readInt32 = ut.prototype.P),
        (ut.prototype.Wb = function () {
          return g(0 == this.b), this.a.Ea();
        }),
        (ut.prototype.readInt32String = ut.prototype.Wb),
        (ut.prototype.ba = function () {
          return g(0 == this.b), this.a.sa();
        }),
        (ut.prototype.readInt64 = ut.prototype.ba),
        (ut.prototype.ca = function () {
          return g(0 == this.b), this.a.Fa();
        }),
        (ut.prototype.readInt64String = ut.prototype.ca),
        (ut.prototype.m = function () {
          return g(0 == this.b), this.a.o();
        }),
        (ut.prototype.readUint32 = ut.prototype.m),
        (ut.prototype.Fc = function () {
          return g(0 == this.b), this.a.O();
        }),
        (ut.prototype.readUint32String = ut.prototype.Fc),
        (ut.prototype.ga = function () {
          return g(0 == this.b), this.a.Ga();
        }),
        (ut.prototype.readUint64 = ut.prototype.ga),
        (ut.prototype.ha = function () {
          return g(0 == this.b), this.a.Ha();
        }),
        (ut.prototype.readUint64String = ut.prototype.ha),
        (ut.prototype.zc = function () {
          return g(0 == this.b), this.a.Ia();
        }),
        (ut.prototype.readSint32 = ut.prototype.zc),
        (ut.prototype.Ac = function () {
          return g(0 == this.b), this.a.Ja();
        }),
        (ut.prototype.readSint64 = ut.prototype.Ac),
        (ut.prototype.Bc = function () {
          return g(0 == this.b), this.a.Ka();
        }),
        (ut.prototype.readSint64String = ut.prototype.Bc),
        (ut.prototype.Rb = function () {
          return g(5 == this.b), this.a.m();
        }),
        (ut.prototype.readFixed32 = ut.prototype.Rb),
        (ut.prototype.Sb = function () {
          return g(1 == this.b), this.a.ga();
        }),
        (ut.prototype.readFixed64 = ut.prototype.Sb),
        (ut.prototype.Tb = function () {
          return g(1 == this.b), this.a.ha();
        }),
        (ut.prototype.readFixed64String = ut.prototype.Tb),
        (ut.prototype.vc = function () {
          return g(5 == this.b), this.a.P();
        }),
        (ut.prototype.readSfixed32 = ut.prototype.vc),
        (ut.prototype.wc = function () {
          return g(5 == this.b), this.a.P().toString();
        }),
        (ut.prototype.readSfixed32String = ut.prototype.wc),
        (ut.prototype.xc = function () {
          return g(1 == this.b), this.a.ba();
        }),
        (ut.prototype.readSfixed64 = ut.prototype.xc),
        (ut.prototype.yc = function () {
          return g(1 == this.b), this.a.ca();
        }),
        (ut.prototype.readSfixed64String = ut.prototype.yc),
        (ut.prototype.aa = function () {
          return g(5 == this.b), this.a.aa();
        }),
        (ut.prototype.readFloat = ut.prototype.aa),
        (ut.prototype.Z = function () {
          return g(1 == this.b), this.a.Z();
        }),
        (ut.prototype.readDouble = ut.prototype.Z),
        (ut.prototype.pa = function () {
          return g(0 == this.b), !!this.a.o();
        }),
        (ut.prototype.readBool = ut.prototype.pa),
        (ut.prototype.ra = function () {
          return g(0 == this.b), this.a.sa();
        }),
        (ut.prototype.readEnum = ut.prototype.ra),
        (ut.prototype.fa = function () {
          g(2 == this.b);
          var t = this.a.o();
          return this.a.fa(t);
        }),
        (ut.prototype.readString = ut.prototype.fa),
        (ut.prototype.qa = function () {
          g(2 == this.b);
          var t = this.a.o();
          return this.a.qa(t);
        }),
        (ut.prototype.readBytes = ut.prototype.qa),
        (ut.prototype.ia = function () {
          return g(0 == this.b), this.a.ia();
        }),
        (ut.prototype.readVarintHash64 = ut.prototype.ia),
        (ut.prototype.Cc = function () {
          return g(0 == this.b), this.a.fb();
        }),
        (ut.prototype.readSintHash64 = ut.prototype.Cc),
        (ut.prototype.w = function (t) {
          return g(0 == this.b), this.a.w(t);
        }),
        (ut.prototype.readSplitVarint64 = ut.prototype.w),
        (ut.prototype.ea = function (t) {
          return (
            g(0 == this.b),
            this.a.w(function (e, r) {
              return q(e, r, t);
            })
          );
        }),
        (ut.prototype.readSplitZigzagVarint64 = ut.prototype.ea),
        (ut.prototype.$ = function () {
          return g(1 == this.b), this.a.$();
        }),
        (ut.prototype.readFixedHash64 = ut.prototype.$),
        (ut.prototype.ta = function (t) {
          return g(1 == this.b), this.a.ta(t);
        }),
        (ut.prototype.readSplitFixed64 = ut.prototype.ta),
        (ut.prototype.gc = function () {
          return lt(this, this.a.da);
        }),
        (ut.prototype.readPackedInt32 = ut.prototype.gc),
        (ut.prototype.hc = function () {
          return lt(this, this.a.Ea);
        }),
        (ut.prototype.readPackedInt32String = ut.prototype.hc),
        (ut.prototype.ic = function () {
          return lt(this, this.a.sa);
        }),
        (ut.prototype.readPackedInt64 = ut.prototype.ic),
        (ut.prototype.jc = function () {
          return lt(this, this.a.Fa);
        }),
        (ut.prototype.readPackedInt64String = ut.prototype.jc),
        (ut.prototype.qc = function () {
          return lt(this, this.a.o);
        }),
        (ut.prototype.readPackedUint32 = ut.prototype.qc),
        (ut.prototype.rc = function () {
          return lt(this, this.a.O);
        }),
        (ut.prototype.readPackedUint32String = ut.prototype.rc),
        (ut.prototype.sc = function () {
          return lt(this, this.a.Ga);
        }),
        (ut.prototype.readPackedUint64 = ut.prototype.sc),
        (ut.prototype.tc = function () {
          return lt(this, this.a.Ha);
        }),
        (ut.prototype.readPackedUint64String = ut.prototype.tc),
        (ut.prototype.nc = function () {
          return lt(this, this.a.Ia);
        }),
        (ut.prototype.readPackedSint32 = ut.prototype.nc),
        (ut.prototype.oc = function () {
          return lt(this, this.a.Ja);
        }),
        (ut.prototype.readPackedSint64 = ut.prototype.oc),
        (ut.prototype.pc = function () {
          return lt(this, this.a.Ka);
        }),
        (ut.prototype.readPackedSint64String = ut.prototype.pc),
        (ut.prototype.bc = function () {
          return lt(this, this.a.m);
        }),
        (ut.prototype.readPackedFixed32 = ut.prototype.bc),
        (ut.prototype.cc = function () {
          return lt(this, this.a.ga);
        }),
        (ut.prototype.readPackedFixed64 = ut.prototype.cc),
        (ut.prototype.dc = function () {
          return lt(this, this.a.ha);
        }),
        (ut.prototype.readPackedFixed64String = ut.prototype.dc),
        (ut.prototype.kc = function () {
          return lt(this, this.a.P);
        }),
        (ut.prototype.readPackedSfixed32 = ut.prototype.kc),
        (ut.prototype.lc = function () {
          return lt(this, this.a.ba);
        }),
        (ut.prototype.readPackedSfixed64 = ut.prototype.lc),
        (ut.prototype.mc = function () {
          return lt(this, this.a.ca);
        }),
        (ut.prototype.readPackedSfixed64String = ut.prototype.mc),
        (ut.prototype.fc = function () {
          return lt(this, this.a.aa);
        }),
        (ut.prototype.readPackedFloat = ut.prototype.fc),
        (ut.prototype.$b = function () {
          return lt(this, this.a.Z);
        }),
        (ut.prototype.readPackedDouble = ut.prototype.$b),
        (ut.prototype.Zb = function () {
          return lt(this, this.a.pa);
        }),
        (ut.prototype.readPackedBool = ut.prototype.Zb),
        (ut.prototype.ac = function () {
          return lt(this, this.a.ra);
        }),
        (ut.prototype.readPackedEnum = ut.prototype.ac),
        (ut.prototype.uc = function () {
          return lt(this, this.a.ia);
        }),
        (ut.prototype.readPackedVarintHash64 = ut.prototype.uc),
        (ut.prototype.ec = function () {
          return lt(this, this.a.$);
        }),
        (ut.prototype.readPackedFixedHash64 = ut.prototype.ec),
        c("jspb.ExtensionFieldInfo", ht, void 0),
        c("jspb.ExtensionFieldBinaryInfo", ft, void 0),
        (ht.prototype.F = function () {
          return !!this.la;
        }),
        (ht.prototype.isMessageType = ht.prototype.F),
        c("jspb.Message", dt, void 0),
        (dt.GENERATE_TO_OBJECT = !0),
        (dt.GENERATE_FROM_OBJECT = !0);
      var yt = "function" == typeof Uint8Array;
      (dt.prototype.Ib = function () {
        return this.b;
      }),
        (dt.prototype.getJsPbMessageId = dt.prototype.Ib),
        (dt.initialize = function (t, e, r, n, o, i) {
          if (
            ((t.f = null),
            e || (e = r ? [r] : []),
            (t.b = r ? String(r) : void 0),
            (t.D = 0 === r ? -1 : 0),
            (t.u = e),
            (e = -1),
            !(r = t.u.length) ||
            ((e = r - 1),
            null === (r = t.u[e]) ||
              "object" != typeof r ||
              Array.isArray(r) ||
              (yt && r instanceof Uint8Array))
              ? -1 < n
                ? ((t.G = Math.max(n, e + 1 - t.D)), (t.i = null))
                : (t.G = Number.MAX_VALUE)
              : ((t.G = e - t.D), (t.i = r)),
            (t.a = {}),
            o)
          )
            for (n = 0; n < o.length; n++)
              (e = o[n]) < t.G
                ? ((e += t.D), (t.u[e] = t.u[e] || vt))
                : (bt(t), (t.i[e] = t.i[e] || vt));
          if (i && i.length) for (n = 0; n < i.length; n++) Pt(t, i[n]);
        });
      var vt = Object.freeze ? Object.freeze([]) : [];
      function bt(t) {
        var e = t.G + t.D;
        t.u[e] || (t.i = t.u[e] = {});
      }
      function gt(t, e, r) {
        for (var n = [], o = 0; o < t.length; o++) n[o] = e.call(t[o], r, t[o]);
        return n;
      }
      function _t(t, e) {
        if (e < t.G) {
          e += t.D;
          var r = t.u[e];
          return r === vt ? (t.u[e] = []) : r;
        }
        if (t.i) return (r = t.i[e]) === vt ? (t.i[e] = []) : r;
      }
      function mt(t, e) {
        return null == (t = _t(t, e)) ? t : +t;
      }
      function wt(t, e) {
        return null == (t = _t(t, e)) ? t : !!t;
      }
      function Ot(t) {
        return null == t || "string" == typeof t
          ? t
          : yt && t instanceof Uint8Array
            ? T(t)
            : (_("Cannot coerce to b64 string: " + l(t)), null);
      }
      function St(t) {
        return null == t || t instanceof Uint8Array
          ? t
          : "string" == typeof t
            ? B(t)
            : (_("Cannot coerce to Uint8Array: " + l(t)), null);
      }
      function At(t) {
        if (t && 1 < t.length) {
          var e = l(t[0]);
          d(t, function (t) {
            l(t) != e &&
              _(
                "Inconsistent type in JSPB repeated field array. Got " +
                  l(t) +
                  " expected " +
                  e,
              );
          });
        }
      }
      function jt(t, e, r) {
        return null == (t = _t(t, e)) ? r : t;
      }
      function xt(t, e, r) {
        return (
          m(t, dt), e < t.G ? (t.u[e + t.D] = r) : (bt(t), (t.i[e] = r)), t
        );
      }
      function kt(t, e, r, n) {
        return (
          m(t, dt),
          r !== n
            ? xt(t, e, r)
            : e < t.G
              ? (t.u[e + t.D] = null)
              : (bt(t), delete t.i[e]),
          t
        );
      }
      function Et(t, e, r, n) {
        return (
          m(t, dt),
          (r = Pt(t, r)) &&
            r !== e &&
            void 0 !== n &&
            (t.f && r in t.f && (t.f[r] = void 0), xt(t, r, void 0)),
          xt(t, e, n)
        );
      }
      function Pt(t, e) {
        for (var r, n, o = 0; o < e.length; o++) {
          var i = e[o],
            a = _t(t, i);
          null != a && ((r = i), (n = a), xt(t, i, void 0));
        }
        return r ? (xt(t, r, n), r) : 0;
      }
      function Rt(t, e, r) {
        if ((t.f || (t.f = {}), !t.f[r])) {
          for (var n = _t(t, r), o = [], i = 0; i < n.length; i++)
            o[i] = new e(n[i]);
          t.f[r] = o;
        }
      }
      function Ct(t) {
        if (t.f)
          for (var e in t.f) {
            var r = t.f[e];
            if (Array.isArray(r))
              for (var n = 0; n < r.length; n++) r[n] && r[n].g();
            else r && r.g();
          }
      }
      function Tt(t, e) {
        (t = t || {}), (e = e || {});
        var r,
          n = {};
        for (r in t) n[r] = 0;
        for (r in e) n[r] = 0;
        for (r in n) if (!Bt(t[r], e[r])) return !1;
        return !0;
      }
      function Bt(t, e) {
        if (t == e) return !0;
        if (!h(t) || !h(e))
          return (
            !!(
              ("number" == typeof t && isNaN(t)) ||
              ("number" == typeof e && isNaN(e))
            ) && String(t) == String(e)
          );
        if (t.constructor != e.constructor) return !1;
        if (yt && t.constructor === Uint8Array) {
          if (t.length != e.length) return !1;
          for (var r = 0; r < t.length; r++) if (t[r] != e[r]) return !1;
          return !0;
        }
        if (t.constructor === Array) {
          var n = void 0,
            o = void 0,
            i = Math.max(t.length, e.length);
          for (r = 0; r < i; r++) {
            var a = t[r],
              s = e[r];
            if (
              (a &&
                a.constructor == Object &&
                (g(void 0 === n), g(r === t.length - 1), (n = a), (a = void 0)),
              s &&
                s.constructor == Object &&
                (g(void 0 === o), g(r === e.length - 1), (o = s), (s = void 0)),
              !Bt(a, s))
            )
              return !1;
          }
          return (!n && !o) || Tt((n = n || {}), (o = o || {}));
        }
        if (t.constructor === Object) return Tt(t, e);
        throw Error("Invalid type in JSPB array");
      }
      function Mt(t) {
        return new t.constructor(Ut(t.g()));
      }
      function Ut(t) {
        if (Array.isArray(t)) {
          for (var e = Array(t.length), r = 0; r < t.length; r++) {
            var n = t[r];
            null != n && (e[r] = "object" == typeof n ? Ut(g(n)) : n);
          }
          return e;
        }
        if (yt && t instanceof Uint8Array) return new Uint8Array(t);
        for (r in ((e = {}), t))
          null != (n = t[r]) && (e[r] = "object" == typeof n ? Ut(g(n)) : n);
        return e;
      }
      (dt.toObjectList = gt),
        (dt.toObjectExtension = function (t, e, r, n, o) {
          for (var i in r) {
            var a = r[i],
              s = n.call(t, a);
            if (null != s) {
              for (var u in a.Ba) if (a.Ba.hasOwnProperty(u)) break;
              e[u] = a.Na ? (a.na ? gt(s, a.Na, o) : a.Na(o, s)) : s;
            }
          }
        }),
        (dt.serializeBinaryExtensions = function (t, e, r, n) {
          for (var o in r) {
            var i = r[o],
              a = i.Za;
            if (!i.Aa)
              throw Error(
                "Message extension present that was generated without binary serialization support",
              );
            var s = n.call(t, a);
            if (null != s)
              if (a.F()) {
                if (!i.Wa)
                  throw Error(
                    "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format",
                  );
                i.Aa.call(e, a.ma, s, i.Wa);
              } else i.Aa.call(e, a.ma, s);
          }
        }),
        (dt.readBinaryExtension = function (t, e, r, n, o) {
          var i = r[e.c];
          if (i) {
            if (((r = i.Za), !i.za))
              throw Error(
                "Deserializing extension whose generated code does not support binary format",
              );
            if (r.F()) {
              var a = new r.la();
              i.za.call(e, a, i.Ab);
            } else a = i.za.call(e);
            r.na && !i.Nb
              ? (e = n.call(t, r))
                ? e.push(a)
                : o.call(t, r, [a])
              : o.call(t, r, a);
          } else e.C();
        }),
        (dt.getField = _t),
        (dt.getRepeatedField = function (t, e) {
          return _t(t, e);
        }),
        (dt.getOptionalFloatingPointField = mt),
        (dt.getBooleanField = wt),
        (dt.getRepeatedFloatingPointField = function (t, e) {
          var r = _t(t, e);
          if ((t.a || (t.a = {}), !t.a[e])) {
            for (var n = 0; n < r.length; n++) r[n] = +r[n];
            t.a[e] = !0;
          }
          return r;
        }),
        (dt.getRepeatedBooleanField = function (t, e) {
          var r = _t(t, e);
          if ((t.a || (t.a = {}), !t.a[e])) {
            for (var n = 0; n < r.length; n++) r[n] = !!r[n];
            t.a[e] = !0;
          }
          return r;
        }),
        (dt.bytesAsB64 = Ot),
        (dt.bytesAsU8 = St),
        (dt.bytesListAsB64 = function (t) {
          return At(t), t.length && "string" != typeof t[0] ? y(t, Ot) : t;
        }),
        (dt.bytesListAsU8 = function (t) {
          return At(t), !t.length || t[0] instanceof Uint8Array ? t : y(t, St);
        }),
        (dt.getFieldWithDefault = jt),
        (dt.getBooleanFieldWithDefault = function (t, e, r) {
          return null == (t = wt(t, e)) ? r : t;
        }),
        (dt.getFloatingPointFieldWithDefault = function (t, e, r) {
          return null == (t = mt(t, e)) ? r : t;
        }),
        (dt.getFieldProto3 = jt),
        (dt.getMapField = function (t, e, r, n) {
          if ((t.f || (t.f = {}), e in t.f)) return t.f[e];
          var o = _t(t, e);
          if (!o) {
            if (r) return;
            xt(t, e, (o = []));
          }
          return (t.f[e] = new O(o, n));
        }),
        (dt.setField = xt),
        (dt.setProto3IntField = function (t, e, r) {
          return kt(t, e, r, 0);
        }),
        (dt.setProto3FloatField = function (t, e, r) {
          return kt(t, e, r, 0);
        }),
        (dt.setProto3BooleanField = function (t, e, r) {
          return kt(t, e, r, !1);
        }),
        (dt.setProto3StringField = function (t, e, r) {
          return kt(t, e, r, "");
        }),
        (dt.setProto3BytesField = function (t, e, r) {
          return kt(t, e, r, "");
        }),
        (dt.setProto3EnumField = function (t, e, r) {
          return kt(t, e, r, 0);
        }),
        (dt.setProto3StringIntField = function (t, e, r) {
          return kt(t, e, r, "0");
        }),
        (dt.addToRepeatedField = function (t, e, r, n) {
          return (
            m(t, dt),
            (e = _t(t, e)),
            null != n ? e.splice(n, 0, r) : e.push(r),
            t
          );
        }),
        (dt.setOneofField = Et),
        (dt.computeOneofCase = Pt),
        (dt.getWrapperField = function (t, e, r, n) {
          if ((t.f || (t.f = {}), !t.f[r])) {
            var o = _t(t, r);
            (n || o) && (t.f[r] = new e(o));
          }
          return t.f[r];
        }),
        (dt.getRepeatedWrapperField = function (t, e, r) {
          return Rt(t, e, r), (e = t.f[r]) == vt && (e = t.f[r] = []), e;
        }),
        (dt.setWrapperField = function (t, e, r) {
          m(t, dt), t.f || (t.f = {});
          var n = r ? r.g() : r;
          return (t.f[e] = r), xt(t, e, n);
        }),
        (dt.setOneofWrapperField = function (t, e, r, n) {
          m(t, dt), t.f || (t.f = {});
          var o = n ? n.g() : n;
          return (t.f[e] = n), Et(t, e, r, o);
        }),
        (dt.setRepeatedWrapperField = function (t, e, r) {
          m(t, dt), t.f || (t.f = {}), (r = r || []);
          for (var n = [], o = 0; o < r.length; o++) n[o] = r[o].g();
          return (t.f[e] = r), xt(t, e, n);
        }),
        (dt.addToRepeatedWrapperField = function (t, e, r, n, o) {
          Rt(t, n, e);
          var i = t.f[e];
          return (
            i || (i = t.f[e] = []),
            (r = r || new n()),
            (t = _t(t, e)),
            null != o
              ? (i.splice(o, 0, r), t.splice(o, 0, r.g()))
              : (i.push(r), t.push(r.g())),
            r
          );
        }),
        (dt.toMap = function (t, e, r, n) {
          for (var o = {}, i = 0; i < t.length; i++)
            o[e.call(t[i])] = r ? r.call(t[i], n, t[i]) : t[i];
          return o;
        }),
        (dt.prototype.g = function () {
          return Ct(this), this.u;
        }),
        (dt.prototype.toArray = dt.prototype.g),
        (dt.prototype.toString = function () {
          return Ct(this), this.u.toString();
        }),
        (dt.prototype.getExtension = function (t) {
          if (this.i) {
            this.f || (this.f = {});
            var e = t.ma;
            if (t.na) {
              if (t.F())
                return (
                  this.f[e] ||
                    (this.f[e] = y(this.i[e] || [], function (e) {
                      return new t.la(e);
                    })),
                  this.f[e]
                );
            } else if (t.F())
              return (
                !this.f[e] && this.i[e] && (this.f[e] = new t.la(this.i[e])),
                this.f[e]
              );
            return this.i[e];
          }
        }),
        (dt.prototype.getExtension = dt.prototype.getExtension),
        (dt.prototype.Kc = function (t, e) {
          this.f || (this.f = {}), bt(this);
          var r = t.ma;
          return (
            t.na
              ? ((e = e || []),
                t.F()
                  ? ((this.f[r] = e),
                    (this.i[r] = y(e, function (t) {
                      return t.g();
                    })))
                  : (this.i[r] = e))
              : t.F()
                ? ((this.f[r] = e), (this.i[r] = e ? e.g() : e))
                : (this.i[r] = e),
            this
          );
        }),
        (dt.prototype.setExtension = dt.prototype.Kc),
        (dt.difference = function (t, e) {
          if (!(t instanceof e.constructor))
            throw Error("Messages have different types.");
          var r = t.g();
          e = e.g();
          var n = [],
            o = 0,
            i = r.length > e.length ? r.length : e.length;
          for (t.b && ((n[0] = t.b), (o = 1)); o < i; o++)
            Bt(r[o], e[o]) || (n[o] = e[o]);
          return new t.constructor(n);
        }),
        (dt.equals = function (t, e) {
          return (
            t == e ||
            (!(!t || !e) && t instanceof e.constructor && Bt(t.g(), e.g()))
          );
        }),
        (dt.compareExtensions = Tt),
        (dt.compareFields = Bt),
        (dt.prototype.Bb = function () {
          return Mt(this);
        }),
        (dt.prototype.cloneMessage = dt.prototype.Bb),
        (dt.prototype.clone = function () {
          return Mt(this);
        }),
        (dt.prototype.clone = dt.prototype.clone),
        (dt.clone = function (t) {
          return Mt(t);
        }),
        (dt.copyInto = function (t, e) {
          m(t, dt),
            m(e, dt),
            g(
              t.constructor == e.constructor,
              "Copy source and target message should have the same type.",
            ),
            (t = Mt(t));
          for (var r = e.g(), n = t.g(), o = (r.length = 0); o < n.length; o++)
            r[o] = n[o];
          (e.f = t.f), (e.i = t.i);
        }),
        (dt.registerMessageType = function (t, e) {
          e.we = t;
        });
      var It = {
        dump: function (t) {
          return (
            m(t, dt, "jspb.Message instance expected"),
            g(
              t.getExtension,
              "Only unobfuscated and unoptimized compilation modes supported.",
            ),
            It.X(t)
          );
        },
      };
      function Lt() {
        this.a = [];
      }
      function Ft(t, e) {
        (this.lo = t), (this.hi = e);
      }
      function Dt(t, e) {
        var r = 65535 & t,
          n = 65535 & e,
          o = e >>> 16;
        for (
          e =
            r * n +
            65536 * ((r * o) & 65535) +
            65536 * (((t >>>= 16) * n) & 65535),
            r = t * o + ((r * o) >>> 16) + ((t * n) >>> 16);
          4294967296 <= e;
        )
          (e -= 4294967296), (r += 1);
        return new Ft(e >>> 0, r >>> 0);
      }
      function Vt(t) {
        for (var e = new Ft(0, 0), r = new Ft(0, 0), n = 0; n < t.length; n++) {
          if ("0" > t[n] || "9" < t[n]) return null;
          (r.lo = parseInt(t[n], 10)), (e = e.eb(10).add(r));
        }
        return e;
      }
      function Nt(t, e) {
        (this.lo = t), (this.hi = e);
      }
      function zt(t) {
        var e = 0 < t.length && "-" == t[0];
        return (
          e && (t = t.substring(1)),
          null === (t = Vt(t))
            ? null
            : (e && (t = new Ft(0, 0).sub(t)), new Nt(t.lo, t.hi))
        );
      }
      function Ht() {
        (this.c = []), (this.b = 0), (this.a = new Lt()), (this.h = []);
      }
      function Wt(t, e) {
        var r = t.a.end();
        t.c.push(r), t.c.push(e), (t.b += r.length + e.length);
      }
      function Gt(t, e) {
        return (
          qt(t, e, 2),
          (e = t.a.end()),
          t.c.push(e),
          (t.b += e.length),
          e.push(t.b),
          e
        );
      }
      function Kt(t, e) {
        var r = e.pop();
        for (g(0 <= (r = t.b + t.a.length() - r)); 127 < r; )
          e.push((127 & r) | 128), (r >>>= 7), t.b++;
        e.push(r), t.b++;
      }
      function qt(t, e, r) {
        g(1 <= e && e == Math.floor(e)), t.a.j(8 * e + r);
      }
      function Zt(t, e, r) {
        null != r && (qt(t, e, 0), t.a.j(r));
      }
      function Xt(t, e, r) {
        null != r && (qt(t, e, 0), t.a.M(r));
      }
      c("jspb.debug.dump", It.dump, void 0),
        (It.X = function (t) {
          var e = l(t);
          if (
            "number" == e ||
            "string" == e ||
            "boolean" == e ||
            "null" == e ||
            "undefined" == e ||
            ("undefined" != typeof Uint8Array && t instanceof Uint8Array)
          )
            return t;
          if ("array" == e)
            return (
              (function (t, e, r) {
                for (var n = [], o = 2; o < arguments.length; ++o)
                  n[o - 2] = arguments[o];
                Array.isArray(t) ||
                  b("Expected array but got %s: %s.", [l(t), t], e, n);
              })(t),
              y(t, It.X)
            );
          if (t instanceof O) {
            for (
              var r = {}, n = (t = t.entries()).next();
              !n.done;
              n = t.next()
            )
              r[n.value[0]] = It.X(n.value[1]);
            return r;
          }
          m(t, dt, "Only messages expected: " + t);
          var o = { $name: (e = t.constructor).name || e.displayName };
          for (s in e.prototype) {
            var i = /^get([A-Z]\w*)/.exec(s);
            if (i && "getExtension" != s && "getJsPbMessageId" != s) {
              var a = "has" + i[1];
              (t[a] && !t[a]()) || ((a = t[s]()), (o[It.$a(i[1])] = It.X(a)));
            }
          }
          if (t.extensionObject_)
            return (
              (o.$extensions =
                "Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly"),
              o
            );
          for (n in e.extensions)
            if (/^\d+$/.test(n)) {
              a = e.extensions[n];
              var s = t.getExtension(a);
              (i = void 0), (a = a.Ba);
              var u = [],
                p = 0;
              for (i in a) u[p++] = i;
              (i = u[0]),
                null != s &&
                  (r || (r = o.$extensions = {}), (r[It.$a(i)] = It.X(s)));
            }
          return o;
        }),
        (It.$a = function (t) {
          return t.replace(/^[A-Z]/, function (t) {
            return t.toLowerCase();
          });
        }),
        c("jspb.BinaryEncoder", Lt, void 0),
        (Lt.prototype.length = function () {
          return this.a.length;
        }),
        (Lt.prototype.length = Lt.prototype.length),
        (Lt.prototype.end = function () {
          var t = this.a;
          return (this.a = []), t;
        }),
        (Lt.prototype.end = Lt.prototype.end),
        (Lt.prototype.l = function (t, e) {
          for (
            g(t == Math.floor(t)),
              g(e == Math.floor(e)),
              g(0 <= t && 4294967296 > t),
              g(0 <= e && 4294967296 > e);
            0 < e || 127 < t;
          )
            this.a.push((127 & t) | 128),
              (t = ((t >>> 7) | (e << 25)) >>> 0),
              (e >>>= 7);
          this.a.push(t);
        }),
        (Lt.prototype.writeSplitVarint64 = Lt.prototype.l),
        (Lt.prototype.A = function (t, e) {
          g(t == Math.floor(t)),
            g(e == Math.floor(e)),
            g(0 <= t && 4294967296 > t),
            g(0 <= e && 4294967296 > e),
            this.s(t),
            this.s(e);
        }),
        (Lt.prototype.writeSplitFixed64 = Lt.prototype.A),
        (Lt.prototype.j = function (t) {
          for (g(t == Math.floor(t)), g(0 <= t && 4294967296 > t); 127 < t; )
            this.a.push((127 & t) | 128), (t >>>= 7);
          this.a.push(t);
        }),
        (Lt.prototype.writeUnsignedVarint32 = Lt.prototype.j),
        (Lt.prototype.M = function (t) {
          if (
            (g(t == Math.floor(t)),
            g(-2147483648 <= t && 2147483648 > t),
            0 <= t)
          )
            this.j(t);
          else {
            for (var e = 0; 9 > e; e++) this.a.push((127 & t) | 128), (t >>= 7);
            this.a.push(1);
          }
        }),
        (Lt.prototype.writeSignedVarint32 = Lt.prototype.M),
        (Lt.prototype.va = function (t) {
          g(t == Math.floor(t)),
            g(0 <= t && 0x10000000000000000 > t),
            F(t),
            this.l(U, I);
        }),
        (Lt.prototype.writeUnsignedVarint64 = Lt.prototype.va),
        (Lt.prototype.ua = function (t) {
          g(t == Math.floor(t)),
            g(-0x8000000000000000 <= t && 0x8000000000000000 > t),
            F(t),
            this.l(U, I);
        }),
        (Lt.prototype.writeSignedVarint64 = Lt.prototype.ua),
        (Lt.prototype.wa = function (t) {
          g(t == Math.floor(t)),
            g(-2147483648 <= t && 2147483648 > t),
            this.j(((t << 1) ^ (t >> 31)) >>> 0);
        }),
        (Lt.prototype.writeZigzagVarint32 = Lt.prototype.wa),
        (Lt.prototype.xa = function (t) {
          g(t == Math.floor(t)),
            g(-0x8000000000000000 <= t && 0x8000000000000000 > t),
            D(t),
            this.l(U, I);
        }),
        (Lt.prototype.writeZigzagVarint64 = Lt.prototype.xa),
        (Lt.prototype.Ta = function (t) {
          this.W(tt(t));
        }),
        (Lt.prototype.writeZigzagVarint64String = Lt.prototype.Ta),
        (Lt.prototype.W = function (t) {
          var e = this;
          z(t),
            G(U, I, function (t, r) {
              e.l(t >>> 0, r >>> 0);
            });
        }),
        (Lt.prototype.writeZigzagVarintHash64 = Lt.prototype.W),
        (Lt.prototype.be = function (t) {
          g(t == Math.floor(t)),
            g(0 <= t && 256 > t),
            this.a.push((t >>> 0) & 255);
        }),
        (Lt.prototype.writeUint8 = Lt.prototype.be),
        (Lt.prototype.ae = function (t) {
          g(t == Math.floor(t)),
            g(0 <= t && 65536 > t),
            this.a.push((t >>> 0) & 255),
            this.a.push((t >>> 8) & 255);
        }),
        (Lt.prototype.writeUint16 = Lt.prototype.ae),
        (Lt.prototype.s = function (t) {
          g(t == Math.floor(t)),
            g(0 <= t && 4294967296 > t),
            this.a.push((t >>> 0) & 255),
            this.a.push((t >>> 8) & 255),
            this.a.push((t >>> 16) & 255),
            this.a.push((t >>> 24) & 255);
        }),
        (Lt.prototype.writeUint32 = Lt.prototype.s),
        (Lt.prototype.V = function (t) {
          g(t == Math.floor(t)),
            g(0 <= t && 0x10000000000000000 > t),
            L(t),
            this.s(U),
            this.s(I);
        }),
        (Lt.prototype.writeUint64 = Lt.prototype.V),
        (Lt.prototype.Qc = function (t) {
          g(t == Math.floor(t)),
            g(-128 <= t && 128 > t),
            this.a.push((t >>> 0) & 255);
        }),
        (Lt.prototype.writeInt8 = Lt.prototype.Qc),
        (Lt.prototype.Pc = function (t) {
          g(t == Math.floor(t)),
            g(-32768 <= t && 32768 > t),
            this.a.push((t >>> 0) & 255),
            this.a.push((t >>> 8) & 255);
        }),
        (Lt.prototype.writeInt16 = Lt.prototype.Pc),
        (Lt.prototype.S = function (t) {
          g(t == Math.floor(t)),
            g(-2147483648 <= t && 2147483648 > t),
            this.a.push((t >>> 0) & 255),
            this.a.push((t >>> 8) & 255),
            this.a.push((t >>> 16) & 255),
            this.a.push((t >>> 24) & 255);
        }),
        (Lt.prototype.writeInt32 = Lt.prototype.S),
        (Lt.prototype.T = function (t) {
          g(t == Math.floor(t)),
            g(-0x8000000000000000 <= t && 0x8000000000000000 > t),
            F(t),
            this.A(U, I);
        }),
        (Lt.prototype.writeInt64 = Lt.prototype.T),
        (Lt.prototype.ka = function (t) {
          g(t == Math.floor(t)),
            g(-0x8000000000000000 <= +t && 0x8000000000000000 > +t),
            z(tt(t)),
            this.A(U, I);
        }),
        (Lt.prototype.writeInt64String = Lt.prototype.ka),
        (Lt.prototype.L = function (t) {
          g(
            1 / 0 === t ||
              -1 / 0 === t ||
              isNaN(t) ||
              (-34028234663852886e22 <= t && 34028234663852886e22 >= t),
          ),
            V(t),
            this.s(U);
        }),
        (Lt.prototype.writeFloat = Lt.prototype.L),
        (Lt.prototype.J = function (t) {
          g(
            1 / 0 === t ||
              -1 / 0 === t ||
              isNaN(t) ||
              (-17976931348623157e292 <= t && 17976931348623157e292 >= t),
          ),
            N(t),
            this.s(U),
            this.s(I);
        }),
        (Lt.prototype.writeDouble = Lt.prototype.J),
        (Lt.prototype.I = function (t) {
          g("boolean" == typeof t || "number" == typeof t),
            this.a.push(t ? 1 : 0);
        }),
        (Lt.prototype.writeBool = Lt.prototype.I),
        (Lt.prototype.R = function (t) {
          g(t == Math.floor(t)),
            g(-2147483648 <= t && 2147483648 > t),
            this.M(t);
        }),
        (Lt.prototype.writeEnum = Lt.prototype.R),
        (Lt.prototype.ja = function (t) {
          this.a.push.apply(this.a, t);
        }),
        (Lt.prototype.writeBytes = Lt.prototype.ja),
        (Lt.prototype.N = function (t) {
          z(t), this.l(U, I);
        }),
        (Lt.prototype.writeVarintHash64 = Lt.prototype.N),
        (Lt.prototype.K = function (t) {
          z(t), this.s(U), this.s(I);
        }),
        (Lt.prototype.writeFixedHash64 = Lt.prototype.K),
        (Lt.prototype.U = function (t) {
          var e = this.a.length;
          !(function (t, e, r) {
            for (var n = [], o = 2; o < arguments.length; ++o)
              n[o - 2] = arguments[o];
            "string" != typeof t &&
              b("Expected string but got %s: %s.", [l(t), t], e, n);
          })(t);
          for (var r = 0; r < t.length; r++) {
            var n = t.charCodeAt(r);
            if (128 > n) this.a.push(n);
            else if (2048 > n)
              this.a.push((n >> 6) | 192), this.a.push((63 & n) | 128);
            else if (65536 > n)
              if (55296 <= n && 56319 >= n && r + 1 < t.length) {
                var o = t.charCodeAt(r + 1);
                56320 <= o &&
                  57343 >= o &&
                  ((n = 1024 * (n - 55296) + o - 56320 + 65536),
                  this.a.push((n >> 18) | 240),
                  this.a.push(((n >> 12) & 63) | 128),
                  this.a.push(((n >> 6) & 63) | 128),
                  this.a.push((63 & n) | 128),
                  r++);
              } else
                this.a.push((n >> 12) | 224),
                  this.a.push(((n >> 6) & 63) | 128),
                  this.a.push((63 & n) | 128);
          }
          return this.a.length - e;
        }),
        (Lt.prototype.writeString = Lt.prototype.U),
        c("jspb.arith.UInt64", Ft, void 0),
        (Ft.prototype.cmp = function (t) {
          return this.hi < t.hi || (this.hi == t.hi && this.lo < t.lo)
            ? -1
            : this.hi == t.hi && this.lo == t.lo
              ? 0
              : 1;
        }),
        (Ft.prototype.cmp = Ft.prototype.cmp),
        (Ft.prototype.La = function () {
          return new Ft(
            ((this.lo >>> 1) | ((1 & this.hi) << 31)) >>> 0,
            (this.hi >>> 1) >>> 0,
          );
        }),
        (Ft.prototype.rightShift = Ft.prototype.La),
        (Ft.prototype.Da = function () {
          return new Ft(
            (this.lo << 1) >>> 0,
            ((this.hi << 1) | (this.lo >>> 31)) >>> 0,
          );
        }),
        (Ft.prototype.leftShift = Ft.prototype.Da),
        (Ft.prototype.cb = function () {
          return !!(2147483648 & this.hi);
        }),
        (Ft.prototype.msb = Ft.prototype.cb),
        (Ft.prototype.Ob = function () {
          return !!(1 & this.lo);
        }),
        (Ft.prototype.lsb = Ft.prototype.Ob),
        (Ft.prototype.Ua = function () {
          return 0 == this.lo && 0 == this.hi;
        }),
        (Ft.prototype.zero = Ft.prototype.Ua),
        (Ft.prototype.add = function (t) {
          return new Ft(
            (((this.lo + t.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi + t.hi) & 4294967295) >>> 0) +
              (4294967296 <= this.lo + t.lo ? 1 : 0)) >>>
              0,
          );
        }),
        (Ft.prototype.add = Ft.prototype.add),
        (Ft.prototype.sub = function (t) {
          return new Ft(
            (((this.lo - t.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi - t.hi) & 4294967295) >>> 0) -
              (0 > this.lo - t.lo ? 1 : 0)) >>>
              0,
          );
        }),
        (Ft.prototype.sub = Ft.prototype.sub),
        (Ft.mul32x32 = Dt),
        (Ft.prototype.eb = function (t) {
          var e = Dt(this.lo, t);
          return ((t = Dt(this.hi, t)).hi = t.lo), (t.lo = 0), e.add(t);
        }),
        (Ft.prototype.mul = Ft.prototype.eb),
        (Ft.prototype.Xa = function (t) {
          if (0 == t) return [];
          var e = new Ft(0, 0),
            r = new Ft(this.lo, this.hi);
          t = new Ft(t, 0);
          for (var n = new Ft(1, 0); !t.cb(); ) (t = t.Da()), (n = n.Da());
          for (; !n.Ua(); )
            0 >= t.cmp(r) && ((e = e.add(n)), (r = r.sub(t))),
              (t = t.La()),
              (n = n.La());
          return [e, r];
        }),
        (Ft.prototype.div = Ft.prototype.Xa),
        (Ft.prototype.toString = function () {
          for (var t = "", e = this; !e.Ua(); ) {
            var r = (e = e.Xa(10))[0];
            (t = e[1].lo + t), (e = r);
          }
          return "" == t && (t = "0"), t;
        }),
        (Ft.prototype.toString = Ft.prototype.toString),
        (Ft.fromString = Vt),
        (Ft.prototype.clone = function () {
          return new Ft(this.lo, this.hi);
        }),
        (Ft.prototype.clone = Ft.prototype.clone),
        c("jspb.arith.Int64", Nt, void 0),
        (Nt.prototype.add = function (t) {
          return new Nt(
            (((this.lo + t.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi + t.hi) & 4294967295) >>> 0) +
              (4294967296 <= this.lo + t.lo ? 1 : 0)) >>>
              0,
          );
        }),
        (Nt.prototype.add = Nt.prototype.add),
        (Nt.prototype.sub = function (t) {
          return new Nt(
            (((this.lo - t.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi - t.hi) & 4294967295) >>> 0) -
              (0 > this.lo - t.lo ? 1 : 0)) >>>
              0,
          );
        }),
        (Nt.prototype.sub = Nt.prototype.sub),
        (Nt.prototype.clone = function () {
          return new Nt(this.lo, this.hi);
        }),
        (Nt.prototype.clone = Nt.prototype.clone),
        (Nt.prototype.toString = function () {
          var t = !!(2147483648 & this.hi),
            e = new Ft(this.lo, this.hi);
          return t && (e = new Ft(0, 0).sub(e)), (t ? "-" : "") + e.toString();
        }),
        (Nt.prototype.toString = Nt.prototype.toString),
        (Nt.fromString = zt),
        c("jspb.BinaryWriter", Ht, void 0),
        (Ht.prototype.pb = function (t, e, r) {
          Wt(this, t.subarray(e, r));
        }),
        (Ht.prototype.writeSerializedMessage = Ht.prototype.pb),
        (Ht.prototype.Pb = function (t, e, r) {
          null != t && null != e && null != r && this.pb(t, e, r);
        }),
        (Ht.prototype.maybeWriteSerializedMessage = Ht.prototype.Pb),
        (Ht.prototype.reset = function () {
          (this.c = []), this.a.end(), (this.b = 0), (this.h = []);
        }),
        (Ht.prototype.reset = Ht.prototype.reset),
        (Ht.prototype.ab = function () {
          g(0 == this.h.length);
          for (
            var t = new Uint8Array(this.b + this.a.length()),
              e = this.c,
              r = e.length,
              n = 0,
              o = 0;
            o < r;
            o++
          ) {
            var i = e[o];
            t.set(i, n), (n += i.length);
          }
          return (
            (e = this.a.end()),
            t.set(e, n),
            g((n += e.length) == t.length),
            (this.c = [t]),
            t
          );
        }),
        (Ht.prototype.getResultBuffer = Ht.prototype.ab),
        (Ht.prototype.Kb = function (t) {
          return T(this.ab(), t);
        }),
        (Ht.prototype.getResultBase64String = Ht.prototype.Kb),
        (Ht.prototype.Va = function (t) {
          this.h.push(Gt(this, t));
        }),
        (Ht.prototype.beginSubMessage = Ht.prototype.Va),
        (Ht.prototype.Ya = function () {
          g(0 <= this.h.length), Kt(this, this.h.pop());
        }),
        (Ht.prototype.endSubMessage = Ht.prototype.Ya),
        (Ht.prototype.Nc = function (t, e, r) {
          switch (t) {
            case 1:
              this.J(e, r);
              break;
            case 2:
              this.L(e, r);
              break;
            case 3:
              this.T(e, r);
              break;
            case 4:
              this.V(e, r);
              break;
            case 5:
              this.S(e, r);
              break;
            case 6:
              this.Qa(e, r);
              break;
            case 7:
              this.Pa(e, r);
              break;
            case 8:
              this.I(e, r);
              break;
            case 9:
              this.U(e, r);
              break;
            case 10:
              _("Group field type not supported in writeAny()");
              break;
            case 11:
              _("Message field type not supported in writeAny()");
              break;
            case 12:
              this.ja(e, r);
              break;
            case 13:
              this.s(e, r);
              break;
            case 14:
              this.R(e, r);
              break;
            case 15:
              this.Ra(e, r);
              break;
            case 16:
              this.Sa(e, r);
              break;
            case 17:
              this.rb(e, r);
              break;
            case 18:
              this.sb(e, r);
              break;
            case 30:
              this.K(e, r);
              break;
            case 31:
              this.N(e, r);
              break;
            default:
              _("Invalid field type in writeAny()");
          }
        }),
        (Ht.prototype.writeAny = Ht.prototype.Nc),
        (Ht.prototype.S = function (t, e) {
          null != e && (g(-2147483648 <= e && 2147483648 > e), Xt(this, t, e));
        }),
        (Ht.prototype.writeInt32 = Ht.prototype.S),
        (Ht.prototype.ob = function (t, e) {
          null != e &&
            (g(-2147483648 <= (e = parseInt(e, 10)) && 2147483648 > e),
            Xt(this, t, e));
        }),
        (Ht.prototype.writeInt32String = Ht.prototype.ob),
        (Ht.prototype.T = function (t, e) {
          null != e &&
            (g(-0x8000000000000000 <= e && 0x8000000000000000 > e),
            null != e && (qt(this, t, 0), this.a.ua(e)));
        }),
        (Ht.prototype.writeInt64 = Ht.prototype.T),
        (Ht.prototype.ka = function (t, e) {
          null != e && ((e = zt(e)), qt(this, t, 0), this.a.l(e.lo, e.hi));
        }),
        (Ht.prototype.writeInt64String = Ht.prototype.ka),
        (Ht.prototype.s = function (t, e) {
          null != e && (g(0 <= e && 4294967296 > e), Zt(this, t, e));
        }),
        (Ht.prototype.writeUint32 = Ht.prototype.s),
        (Ht.prototype.ub = function (t, e) {
          null != e &&
            (g(0 <= (e = parseInt(e, 10)) && 4294967296 > e), Zt(this, t, e));
        }),
        (Ht.prototype.writeUint32String = Ht.prototype.ub),
        (Ht.prototype.V = function (t, e) {
          null != e &&
            (g(0 <= e && 0x10000000000000000 > e),
            null != e && (qt(this, t, 0), this.a.va(e)));
        }),
        (Ht.prototype.writeUint64 = Ht.prototype.V),
        (Ht.prototype.vb = function (t, e) {
          null != e && ((e = Vt(e)), qt(this, t, 0), this.a.l(e.lo, e.hi));
        }),
        (Ht.prototype.writeUint64String = Ht.prototype.vb),
        (Ht.prototype.rb = function (t, e) {
          null != e &&
            (g(-2147483648 <= e && 2147483648 > e),
            null != e && (qt(this, t, 0), this.a.wa(e)));
        }),
        (Ht.prototype.writeSint32 = Ht.prototype.rb),
        (Ht.prototype.sb = function (t, e) {
          null != e &&
            (g(-0x8000000000000000 <= e && 0x8000000000000000 > e),
            null != e && (qt(this, t, 0), this.a.xa(e)));
        }),
        (Ht.prototype.writeSint64 = Ht.prototype.sb),
        (Ht.prototype.$d = function (t, e) {
          null != e && null != e && (qt(this, t, 0), this.a.W(e));
        }),
        (Ht.prototype.writeSintHash64 = Ht.prototype.$d),
        (Ht.prototype.Zd = function (t, e) {
          null != e && null != e && (qt(this, t, 0), this.a.Ta(e));
        }),
        (Ht.prototype.writeSint64String = Ht.prototype.Zd),
        (Ht.prototype.Pa = function (t, e) {
          null != e &&
            (g(0 <= e && 4294967296 > e), qt(this, t, 5), this.a.s(e));
        }),
        (Ht.prototype.writeFixed32 = Ht.prototype.Pa),
        (Ht.prototype.Qa = function (t, e) {
          null != e &&
            (g(0 <= e && 0x10000000000000000 > e), qt(this, t, 1), this.a.V(e));
        }),
        (Ht.prototype.writeFixed64 = Ht.prototype.Qa),
        (Ht.prototype.nb = function (t, e) {
          null != e && ((e = Vt(e)), qt(this, t, 1), this.a.A(e.lo, e.hi));
        }),
        (Ht.prototype.writeFixed64String = Ht.prototype.nb),
        (Ht.prototype.Ra = function (t, e) {
          null != e &&
            (g(-2147483648 <= e && 2147483648 > e),
            qt(this, t, 5),
            this.a.S(e));
        }),
        (Ht.prototype.writeSfixed32 = Ht.prototype.Ra),
        (Ht.prototype.Sa = function (t, e) {
          null != e &&
            (g(-0x8000000000000000 <= e && 0x8000000000000000 > e),
            qt(this, t, 1),
            this.a.T(e));
        }),
        (Ht.prototype.writeSfixed64 = Ht.prototype.Sa),
        (Ht.prototype.qb = function (t, e) {
          null != e && ((e = zt(e)), qt(this, t, 1), this.a.A(e.lo, e.hi));
        }),
        (Ht.prototype.writeSfixed64String = Ht.prototype.qb),
        (Ht.prototype.L = function (t, e) {
          null != e && (qt(this, t, 5), this.a.L(e));
        }),
        (Ht.prototype.writeFloat = Ht.prototype.L),
        (Ht.prototype.J = function (t, e) {
          null != e && (qt(this, t, 1), this.a.J(e));
        }),
        (Ht.prototype.writeDouble = Ht.prototype.J),
        (Ht.prototype.I = function (t, e) {
          null != e &&
            (g("boolean" == typeof e || "number" == typeof e),
            qt(this, t, 0),
            this.a.I(e));
        }),
        (Ht.prototype.writeBool = Ht.prototype.I),
        (Ht.prototype.R = function (t, e) {
          null != e &&
            (g(-2147483648 <= e && 2147483648 > e),
            qt(this, t, 0),
            this.a.M(e));
        }),
        (Ht.prototype.writeEnum = Ht.prototype.R),
        (Ht.prototype.U = function (t, e) {
          null != e && ((t = Gt(this, t)), this.a.U(e), Kt(this, t));
        }),
        (Ht.prototype.writeString = Ht.prototype.U),
        (Ht.prototype.ja = function (t, e) {
          null != e &&
            ((e = ot(e)), qt(this, t, 2), this.a.j(e.length), Wt(this, e));
        }),
        (Ht.prototype.writeBytes = Ht.prototype.ja),
        (Ht.prototype.Rc = function (t, e, r) {
          null != e && ((t = Gt(this, t)), r(e, this), Kt(this, t));
        }),
        (Ht.prototype.writeMessage = Ht.prototype.Rc),
        (Ht.prototype.Sc = function (t, e, r) {
          null != e &&
            (qt(this, 1, 3),
            qt(this, 2, 0),
            this.a.M(t),
            (t = Gt(this, 3)),
            r(e, this),
            Kt(this, t),
            qt(this, 1, 4));
        }),
        (Ht.prototype.writeMessageSet = Ht.prototype.Sc),
        (Ht.prototype.Oc = function (t, e, r) {
          null != e && (qt(this, t, 3), r(e, this), qt(this, t, 4));
        }),
        (Ht.prototype.writeGroup = Ht.prototype.Oc),
        (Ht.prototype.K = function (t, e) {
          null != e && (g(8 == e.length), qt(this, t, 1), this.a.K(e));
        }),
        (Ht.prototype.writeFixedHash64 = Ht.prototype.K),
        (Ht.prototype.N = function (t, e) {
          null != e && (g(8 == e.length), qt(this, t, 0), this.a.N(e));
        }),
        (Ht.prototype.writeVarintHash64 = Ht.prototype.N),
        (Ht.prototype.A = function (t, e, r) {
          qt(this, t, 1), this.a.A(e, r);
        }),
        (Ht.prototype.writeSplitFixed64 = Ht.prototype.A),
        (Ht.prototype.l = function (t, e, r) {
          qt(this, t, 0), this.a.l(e, r);
        }),
        (Ht.prototype.writeSplitVarint64 = Ht.prototype.l),
        (Ht.prototype.tb = function (t, e, r) {
          qt(this, t, 0);
          var n = this.a;
          G(e, r, function (t, e) {
            n.l(t >>> 0, e >>> 0);
          });
        }),
        (Ht.prototype.writeSplitZigzagVarint64 = Ht.prototype.tb),
        (Ht.prototype.Ed = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) Xt(this, t, e[r]);
        }),
        (Ht.prototype.writeRepeatedInt32 = Ht.prototype.Ed),
        (Ht.prototype.Fd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.ob(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedInt32String = Ht.prototype.Fd),
        (Ht.prototype.Gd = function (t, e) {
          if (null != e)
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              null != n && (qt(this, t, 0), this.a.ua(n));
            }
        }),
        (Ht.prototype.writeRepeatedInt64 = Ht.prototype.Gd),
        (Ht.prototype.Qd = function (t, e, r, n) {
          if (null != e)
            for (var o = 0; o < e.length; o++) this.A(t, r(e[o]), n(e[o]));
        }),
        (Ht.prototype.writeRepeatedSplitFixed64 = Ht.prototype.Qd),
        (Ht.prototype.Rd = function (t, e, r, n) {
          if (null != e)
            for (var o = 0; o < e.length; o++) this.l(t, r(e[o]), n(e[o]));
        }),
        (Ht.prototype.writeRepeatedSplitVarint64 = Ht.prototype.Rd),
        (Ht.prototype.Sd = function (t, e, r, n) {
          if (null != e)
            for (var o = 0; o < e.length; o++) this.tb(t, r(e[o]), n(e[o]));
        }),
        (Ht.prototype.writeRepeatedSplitZigzagVarint64 = Ht.prototype.Sd),
        (Ht.prototype.Hd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.ka(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedInt64String = Ht.prototype.Hd),
        (Ht.prototype.Ud = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) Zt(this, t, e[r]);
        }),
        (Ht.prototype.writeRepeatedUint32 = Ht.prototype.Ud),
        (Ht.prototype.Vd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.ub(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedUint32String = Ht.prototype.Vd),
        (Ht.prototype.Wd = function (t, e) {
          if (null != e)
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              null != n && (qt(this, t, 0), this.a.va(n));
            }
        }),
        (Ht.prototype.writeRepeatedUint64 = Ht.prototype.Wd),
        (Ht.prototype.Xd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.vb(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedUint64String = Ht.prototype.Xd),
        (Ht.prototype.Md = function (t, e) {
          if (null != e)
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              null != n && (qt(this, t, 0), this.a.wa(n));
            }
        }),
        (Ht.prototype.writeRepeatedSint32 = Ht.prototype.Md),
        (Ht.prototype.Nd = function (t, e) {
          if (null != e)
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              null != n && (qt(this, t, 0), this.a.xa(n));
            }
        }),
        (Ht.prototype.writeRepeatedSint64 = Ht.prototype.Nd),
        (Ht.prototype.Od = function (t, e) {
          if (null != e)
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              null != n && (qt(this, t, 0), this.a.Ta(n));
            }
        }),
        (Ht.prototype.writeRepeatedSint64String = Ht.prototype.Od),
        (Ht.prototype.Pd = function (t, e) {
          if (null != e)
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              null != n && (qt(this, t, 0), this.a.W(n));
            }
        }),
        (Ht.prototype.writeRepeatedSintHash64 = Ht.prototype.Pd),
        (Ht.prototype.yd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.Pa(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedFixed32 = Ht.prototype.yd),
        (Ht.prototype.zd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.Qa(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedFixed64 = Ht.prototype.zd),
        (Ht.prototype.Ad = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.nb(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedFixed64String = Ht.prototype.Ad),
        (Ht.prototype.Jd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.Ra(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedSfixed32 = Ht.prototype.Jd),
        (Ht.prototype.Kd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.Sa(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedSfixed64 = Ht.prototype.Kd),
        (Ht.prototype.Ld = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.qb(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedSfixed64String = Ht.prototype.Ld),
        (Ht.prototype.Cd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.L(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedFloat = Ht.prototype.Cd),
        (Ht.prototype.wd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.J(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedDouble = Ht.prototype.wd),
        (Ht.prototype.ud = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.I(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedBool = Ht.prototype.ud),
        (Ht.prototype.xd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.R(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedEnum = Ht.prototype.xd),
        (Ht.prototype.Td = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.U(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedString = Ht.prototype.Td),
        (Ht.prototype.vd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.ja(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedBytes = Ht.prototype.vd),
        (Ht.prototype.Id = function (t, e, r) {
          if (null != e)
            for (var n = 0; n < e.length; n++) {
              var o = Gt(this, t);
              r(e[n], this), Kt(this, o);
            }
        }),
        (Ht.prototype.writeRepeatedMessage = Ht.prototype.Id),
        (Ht.prototype.Dd = function (t, e, r) {
          if (null != e)
            for (var n = 0; n < e.length; n++)
              qt(this, t, 3), r(e[n], this), qt(this, t, 4);
        }),
        (Ht.prototype.writeRepeatedGroup = Ht.prototype.Dd),
        (Ht.prototype.Bd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.K(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedFixedHash64 = Ht.prototype.Bd),
        (Ht.prototype.Yd = function (t, e) {
          if (null != e) for (var r = 0; r < e.length; r++) this.N(t, e[r]);
        }),
        (Ht.prototype.writeRepeatedVarintHash64 = Ht.prototype.Yd),
        (Ht.prototype.ad = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) this.a.M(e[r]);
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedInt32 = Ht.prototype.ad),
        (Ht.prototype.bd = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) this.a.M(parseInt(e[r], 10));
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedInt32String = Ht.prototype.bd),
        (Ht.prototype.cd = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) this.a.ua(e[r]);
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedInt64 = Ht.prototype.cd),
        (Ht.prototype.md = function (t, e, r, n) {
          if (null != e) {
            t = Gt(this, t);
            for (var o = 0; o < e.length; o++) this.a.A(r(e[o]), n(e[o]));
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedSplitFixed64 = Ht.prototype.md),
        (Ht.prototype.nd = function (t, e, r, n) {
          if (null != e) {
            t = Gt(this, t);
            for (var o = 0; o < e.length; o++) this.a.l(r(e[o]), n(e[o]));
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedSplitVarint64 = Ht.prototype.nd),
        (Ht.prototype.od = function (t, e, r, n) {
          if (null != e) {
            t = Gt(this, t);
            for (var o = this.a, i = 0; i < e.length; i++)
              G(r(e[i]), n(e[i]), function (t, e) {
                o.l(t >>> 0, e >>> 0);
              });
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedSplitZigzagVarint64 = Ht.prototype.od),
        (Ht.prototype.dd = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) {
              var n = zt(e[r]);
              this.a.l(n.lo, n.hi);
            }
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedInt64String = Ht.prototype.dd),
        (Ht.prototype.pd = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) this.a.j(e[r]);
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedUint32 = Ht.prototype.pd),
        (Ht.prototype.qd = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) this.a.j(parseInt(e[r], 10));
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedUint32String = Ht.prototype.qd),
        (Ht.prototype.rd = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) this.a.va(e[r]);
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedUint64 = Ht.prototype.rd),
        (Ht.prototype.sd = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) {
              var n = Vt(e[r]);
              this.a.l(n.lo, n.hi);
            }
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedUint64String = Ht.prototype.sd),
        (Ht.prototype.hd = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) this.a.wa(e[r]);
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedSint32 = Ht.prototype.hd),
        (Ht.prototype.jd = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) this.a.xa(e[r]);
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedSint64 = Ht.prototype.jd),
        (Ht.prototype.kd = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) this.a.W(tt(e[r]));
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedSint64String = Ht.prototype.kd),
        (Ht.prototype.ld = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) this.a.W(e[r]);
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedSintHash64 = Ht.prototype.ld),
        (Ht.prototype.Wc = function (t, e) {
          if (null != e && e.length)
            for (
              qt(this, t, 2), this.a.j(4 * e.length), t = 0;
              t < e.length;
              t++
            )
              this.a.s(e[t]);
        }),
        (Ht.prototype.writePackedFixed32 = Ht.prototype.Wc),
        (Ht.prototype.Xc = function (t, e) {
          if (null != e && e.length)
            for (
              qt(this, t, 2), this.a.j(8 * e.length), t = 0;
              t < e.length;
              t++
            )
              this.a.V(e[t]);
        }),
        (Ht.prototype.writePackedFixed64 = Ht.prototype.Xc),
        (Ht.prototype.Yc = function (t, e) {
          if (null != e && e.length)
            for (
              qt(this, t, 2), this.a.j(8 * e.length), t = 0;
              t < e.length;
              t++
            ) {
              var r = Vt(e[t]);
              this.a.A(r.lo, r.hi);
            }
        }),
        (Ht.prototype.writePackedFixed64String = Ht.prototype.Yc),
        (Ht.prototype.ed = function (t, e) {
          if (null != e && e.length)
            for (
              qt(this, t, 2), this.a.j(4 * e.length), t = 0;
              t < e.length;
              t++
            )
              this.a.S(e[t]);
        }),
        (Ht.prototype.writePackedSfixed32 = Ht.prototype.ed),
        (Ht.prototype.fd = function (t, e) {
          if (null != e && e.length)
            for (
              qt(this, t, 2), this.a.j(8 * e.length), t = 0;
              t < e.length;
              t++
            )
              this.a.T(e[t]);
        }),
        (Ht.prototype.writePackedSfixed64 = Ht.prototype.fd),
        (Ht.prototype.gd = function (t, e) {
          if (null != e && e.length)
            for (
              qt(this, t, 2), this.a.j(8 * e.length), t = 0;
              t < e.length;
              t++
            )
              this.a.ka(e[t]);
        }),
        (Ht.prototype.writePackedSfixed64String = Ht.prototype.gd),
        (Ht.prototype.$c = function (t, e) {
          if (null != e && e.length)
            for (
              qt(this, t, 2), this.a.j(4 * e.length), t = 0;
              t < e.length;
              t++
            )
              this.a.L(e[t]);
        }),
        (Ht.prototype.writePackedFloat = Ht.prototype.$c),
        (Ht.prototype.Uc = function (t, e) {
          if (null != e && e.length)
            for (
              qt(this, t, 2), this.a.j(8 * e.length), t = 0;
              t < e.length;
              t++
            )
              this.a.J(e[t]);
        }),
        (Ht.prototype.writePackedDouble = Ht.prototype.Uc),
        (Ht.prototype.Tc = function (t, e) {
          if (null != e && e.length)
            for (qt(this, t, 2), this.a.j(e.length), t = 0; t < e.length; t++)
              this.a.I(e[t]);
        }),
        (Ht.prototype.writePackedBool = Ht.prototype.Tc),
        (Ht.prototype.Vc = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) this.a.R(e[r]);
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedEnum = Ht.prototype.Vc),
        (Ht.prototype.Zc = function (t, e) {
          if (null != e && e.length)
            for (
              qt(this, t, 2), this.a.j(8 * e.length), t = 0;
              t < e.length;
              t++
            )
              this.a.K(e[t]);
        }),
        (Ht.prototype.writePackedFixedHash64 = Ht.prototype.Zc),
        (Ht.prototype.td = function (t, e) {
          if (null != e && e.length) {
            t = Gt(this, t);
            for (var r = 0; r < e.length; r++) this.a.N(e[r]);
            Kt(this, t);
          }
        }),
        (Ht.prototype.writePackedVarintHash64 = Ht.prototype.td),
        "object" == typeof e &&
          ((e.debug = It),
          (e.Map = O),
          (e.Message = dt),
          (e.BinaryReader = ut),
          (e.BinaryWriter = Ht),
          (e.ExtensionFieldInfo = ht),
          (e.ExtensionFieldBinaryInfo = ft),
          (e.exportSymbol = function (t, e, r) {
            c(t, e, r);
          }),
          (e.inherits = function (t, e) {
            function r() {}
            (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t);
          }),
          (e.object = {
            extend: function (t, e) {
              for (var r, n, o = 1; o < arguments.length; o++) {
                for (r in (n = arguments[o])) t[r] = n[r];
                for (var i = 0; i < f.length; i++)
                  (r = f[i]),
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
            },
          }),
          (e.typeOf = l));
    },
    2593: (t, e, r) => {
      "use strict";
      t.exports = r(6874);
    },
    9978: (t, e, r) => {
      "use strict";
      r.r(e),
        r.d(e, {
          Observer: () => d,
          _observerFinalizationRegistry: () => h.Y,
          clearTimers: () => g,
          enableStaticRendering: () => l.e,
          isObserverBatched: () => p,
          isUsingStaticRendering: () => l.P,
          observer: () => f.P,
          observerBatching: () => s,
          useAsObservableSource: () => v,
          useLocalObservable: () => y,
          useLocalStore: () => b,
          useObserver: () => _,
          useStaticRendering: () => m,
        });
      var n = r(7813),
        o = r(6540);
      if (!o.useState)
        throw new Error("mobx-react-lite requires React with Hooks support");
      if (!n.makeObservable)
        throw new Error(
          "mobx-react-lite@3 requires mobx at least version 6 to be available",
        );
      var i = r(961);
      function a(t) {
        t();
      }
      function s(t) {
        t || (t = a), (0, n.configure)({ reactionScheduler: t });
      }
      var u,
        p = function () {
          return !0;
        },
        c = r(4452),
        l = r(3815),
        h = r(3438),
        f = r(6035);
      function d(t) {
        var e = t.children,
          r = t.render;
        e &&
          r &&
          console.error(
            "MobX Observer: Do not use children and render in the same time in `Observer`",
          );
        var n = e || r;
        return "function" != typeof n ? null : (0, c.q)(n);
      }
      function y(t, e) {
        return (0, o.useState)(function () {
          return (0, n.observable)(t(), e, { autoBind: !0 });
        })[0];
      }
      function v(t) {
        var e = (0, o.useState)(function () {
          return (0, n.observable)(t, {}, { deep: !1 });
        })[0];
        return (
          (0, n.runInAction)(function () {
            Object.assign(e, t);
          }),
          e
        );
      }
      function b(t, e) {
        var r = e && v(e);
        return (0, o.useState)(function () {
          return (0, n.observable)(t(r), void 0, { autoBind: !0 });
        })[0];
      }
      (d.displayName = "Observer"), s(i.unstable_batchedUpdates);
      var g =
        null !== (u = h.Y.finalizeAllImmediately) && void 0 !== u
          ? u
          : function () {};
      function _(t, e) {
        return void 0 === e && (e = "observed"), (0, c.q)(t, e);
      }
      function m(t) {
        (0, l.e)(t);
      }
    },
    3815: (t, e, r) => {
      "use strict";
      r.d(e, { P: () => i, e: () => o });
      var n = !1;
      function o(t) {
        n = t;
      }
      function i() {
        return n;
      }
    },
    2517: (t, e, r) => {
      "use strict";
      r.d(e, { Xr: () => o });
      var n = (function () {
          function t(t) {
            var e = this;
            Object.defineProperty(this, "finalize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            }),
              Object.defineProperty(this, "registrations", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new Map(),
              }),
              Object.defineProperty(this, "sweepTimeout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "sweep", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (t) {
                  void 0 === t && (t = 1e4),
                    clearTimeout(e.sweepTimeout),
                    (e.sweepTimeout = void 0);
                  var r = Date.now();
                  e.registrations.forEach(function (n, o) {
                    r - n.registeredAt >= t &&
                      (e.finalize(n.value), e.registrations.delete(o));
                  }),
                    e.registrations.size > 0 && e.scheduleSweep();
                },
              }),
              Object.defineProperty(this, "finalizeAllImmediately", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  e.sweep(0);
                },
              });
          }
          return (
            Object.defineProperty(t.prototype, "register", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (t, e, r) {
                this.registrations.set(r, {
                  value: e,
                  registeredAt: Date.now(),
                }),
                  this.scheduleSweep();
              },
            }),
            Object.defineProperty(t.prototype, "unregister", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (t) {
                this.registrations.delete(t);
              },
            }),
            Object.defineProperty(t.prototype, "scheduleSweep", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                void 0 === this.sweepTimeout &&
                  (this.sweepTimeout = setTimeout(this.sweep, 1e4));
              },
            }),
            t
          );
        })(),
        o =
          "undefined" != typeof FinalizationRegistry ? FinalizationRegistry : n;
    },
    6356: (t, e, r) => {
      "use strict";
      r.d(e, { E: () => o });
      var n = r(7813);
      function o(t) {
        return (0, n.getDependencyTree)(t);
      }
    },
    296: (t, e, r) => {
      "use strict";
      var n,
        o = r(7813),
        i = r(6540),
        a = (n = i) && "object" == typeof n && "default" in n ? n.default : n,
        s = r(9978);
      function u(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
      }
      var p = {
          $$typeof: 1,
          render: 1,
          compare: 1,
          type: 1,
          childContextTypes: 1,
          contextType: 1,
          contextTypes: 1,
          defaultProps: 1,
          getDefaultProps: 1,
          getDerivedStateFromError: 1,
          getDerivedStateFromProps: 1,
          mixins: 1,
          displayName: 1,
          propTypes: 1,
        },
        c = Symbol("patchMixins"),
        l = Symbol("patchedDefinition");
      function h(t, e) {
        for (
          var r = this,
            n = arguments.length,
            o = new Array(n > 2 ? n - 2 : 0),
            i = 2;
          i < n;
          i++
        )
          o[i - 2] = arguments[i];
        e.locks++;
        try {
          var a;
          return null != t && (a = t.apply(this, o)), a;
        } finally {
          e.locks--,
            0 === e.locks &&
              e.methods.forEach(function (t) {
                t.apply(r, o);
              });
        }
      }
      function f(t, e) {
        return function () {
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          h.call.apply(h, [this, t, e].concat(n));
        };
      }
      function d(t, e, r) {
        var n = (function (t, e) {
          var r = (t[c] = t[c] || {}),
            n = (r[e] = r[e] || {});
          return (n.locks = n.locks || 0), (n.methods = n.methods || []), n;
        })(t, e);
        n.methods.indexOf(r) < 0 && n.methods.push(r);
        var o = Object.getOwnPropertyDescriptor(t, e);
        if (!o || !o[l]) {
          var i = (function t(e, r, n, o, i) {
            var a,
              s = f(i, o);
            return (
              ((a = {})[l] = !0),
              (a.get = function () {
                return s;
              }),
              (a.set = function (i) {
                if (this === e) s = f(i, o);
                else {
                  var a = t(this, r, n, o, i);
                  Object.defineProperty(this, r, a);
                }
              }),
              (a.configurable = !0),
              (a.enumerable = n),
              a
            );
          })(t, e, o ? o.enumerable : void 0, n, t[e]);
          Object.defineProperty(t, e, i);
        }
      }
      var y = Symbol("ObserverAdministration"),
        v = Symbol("isMobXReactObserver");
      function b(t) {
        var e;
        return null != (e = t[y])
          ? e
          : (t[y] = {
              reaction: null,
              mounted: !1,
              reactionInvalidatedBeforeMount: !1,
              forceUpdate: null,
              name: g(t.constructor),
              state: void 0,
              props: void 0,
              context: void 0,
            });
      }
      function g(t) {
        return t.displayName || t.name || "<component>";
      }
      function _(t) {
        var e = t.bind(this),
          r = b(this);
        return function () {
          r.reaction ||
            ((r.reaction = (function (t) {
              return new o.Reaction(t.name + ".render()", function () {
                if (t.mounted)
                  try {
                    null == t.forceUpdate || t.forceUpdate();
                  } catch (r) {
                    var e;
                    null == (e = t.reaction) || e.dispose(),
                      (t.reaction = null);
                  }
                else t.reactionInvalidatedBeforeMount = !0;
              });
            })(r)),
            r.mounted ||
              s._observerFinalizationRegistry.register(this, r, this));
          var t = void 0,
            n = void 0;
          if (
            (r.reaction.track(function () {
              try {
                n = o._allowStateChanges(!1, e);
              } catch (e) {
                t = e;
              }
            }),
            t)
          )
            throw t;
          return n;
        };
      }
      function m(t, e) {
        return (
          s.isUsingStaticRendering() &&
            console.warn(
              "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
            ),
          this.state !== e ||
            !(function (t, e) {
              if (u(t, e)) return !0;
              if (
                "object" != typeof t ||
                null === t ||
                "object" != typeof e ||
                null === e
              )
                return !1;
              var r = Object.keys(t),
                n = Object.keys(e);
              if (r.length !== n.length) return !1;
              for (var o = 0; o < r.length; o++)
                if (
                  !Object.hasOwnProperty.call(e, r[o]) ||
                  !u(t[r[o]], e[r[o]])
                )
                  return !1;
              return !0;
            })(this.props, t)
        );
      }
      function w(t, e) {
        if (e && "class" !== e.kind)
          throw new Error(
            "The @observer decorator can be used on classes only",
          );
        return (
          !0 === t.isMobxInjector &&
            console.warn(
              "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
            ),
          Object.prototype.isPrototypeOf.call(i.Component, t) ||
          Object.prototype.isPrototypeOf.call(i.PureComponent, t)
            ? (function (t) {
                var e = t.prototype;
                if (t[v]) {
                  var r = g(t);
                  throw new Error(
                    "The provided component class (" +
                      r +
                      ") has already been declared as an observer component.",
                  );
                }
                if (((t[v] = !0), e.componentWillReact))
                  throw new Error(
                    "The componentWillReact life-cycle event is no longer supported",
                  );
                if (t.__proto__ !== i.PureComponent)
                  if (e.shouldComponentUpdate) {
                    if (e.shouldComponentUpdate !== m)
                      throw new Error(
                        "It is not allowed to use shouldComponentUpdate in observer based components.",
                      );
                  } else e.shouldComponentUpdate = m;
                var n = e.render;
                if ("function" != typeof n) {
                  var o = g(t);
                  throw new Error(
                    "[mobx-react] class component (" +
                      o +
                      ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
                  );
                }
                e.render = function () {
                  return (
                    Object.defineProperty(this, "render", {
                      configurable: !1,
                      writable: !1,
                      value: s.isUsingStaticRendering() ? n : _.call(this, n),
                    }),
                    this.render()
                  );
                };
                var a = e.componentDidMount;
                return (
                  (e.componentDidMount = function () {
                    var t = this,
                      e = b(this);
                    return (
                      (e.mounted = !0),
                      s._observerFinalizationRegistry.unregister(this),
                      (e.forceUpdate = function () {
                        return t.forceUpdate();
                      }),
                      (e.reaction && !e.reactionInvalidatedBeforeMount) ||
                        e.forceUpdate(),
                      null == a ? void 0 : a.apply(this, arguments)
                    );
                  }),
                  d(e, "componentWillUnmount", function () {
                    var t;
                    if (!s.isUsingStaticRendering()) {
                      var e = b(this);
                      null == (t = e.reaction) || t.dispose(),
                        (e.reaction = null),
                        (e.forceUpdate = null),
                        (e.mounted = !1),
                        (e.reactionInvalidatedBeforeMount = !1);
                    }
                  }),
                  t
                );
              })(t)
            : s.observer(t)
        );
      }
      function O() {
        return (O = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(null, arguments);
      }
      var S = ["children"],
        A = a.createContext({});
      function j(t) {
        var e = t.children,
          r = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if ({}.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, S),
          n = a.useContext(A),
          o = a.useRef(O({}, n, r));
        return a.createElement(A.Provider, { value: o.current }, e);
      }
      function x(t, e, r, n) {
        var o,
          i,
          s,
          u = a.forwardRef(function (r, n) {
            var o = O({}, r),
              i = a.useContext(A);
            return (
              Object.assign(o, t(i || {}, o) || {}),
              n && (o.ref = n),
              a.createElement(e, o)
            );
          });
        return (
          n && (u = w(u)),
          (u.isMobxInjector = !0),
          (o = e),
          (i = u),
          (s = Object.getOwnPropertyNames(Object.getPrototypeOf(o))),
          Object.getOwnPropertyNames(o).forEach(function (t) {
            p[t] ||
              -1 !== s.indexOf(t) ||
              Object.defineProperty(
                i,
                t,
                Object.getOwnPropertyDescriptor(o, t),
              );
          }),
          (u.wrappedComponent = e),
          (u.displayName = (function (t, e) {
            var r =
              t.displayName ||
              t.name ||
              (t.constructor && t.constructor.name) ||
              "Component";
            return e ? "inject-with-" + e + "(" + r + ")" : "inject(" + r + ")";
          })(e, r)),
          u
        );
      }
      j.displayName = "MobXProvider";
      var k = Number.parseInt(a.version.split(".")[0]),
        E = !1,
        P = Symbol("disposeOnUnmountProto"),
        R = Symbol("disposeOnUnmountInst");
      function C() {
        var t = this;
        [].concat(this[P] || [], this[R] || []).forEach(function (e) {
          var r = "string" == typeof e ? t[e] : e;
          null != r &&
            (Array.isArray(r)
              ? r.map(function (t) {
                  return t();
                })
              : r());
        });
      }
      function T(t) {
        function e(e, r, n, i, a, s) {
          for (
            var u = arguments.length, p = new Array(u > 6 ? u - 6 : 0), c = 6;
            c < u;
            c++
          )
            p[c - 6] = arguments[c];
          return o.untracked(function () {
            return (
              (i = i || "<<anonymous>>"),
              (s = s || n),
              null == r[n]
                ? e
                  ? new Error(
                      "The " +
                        a +
                        " `" +
                        s +
                        "` is marked as required in `" +
                        i +
                        "`, but its value is `" +
                        (null === r[n] ? "null" : "undefined") +
                        "`.",
                    )
                  : null
                : t.apply(void 0, [r, n, i, a, s].concat(p))
            );
          });
        }
        var r = e.bind(null, !1);
        return (r.isRequired = e.bind(null, !0)), r;
      }
      function B(t) {
        var e = typeof t;
        return Array.isArray(t)
          ? "array"
          : t instanceof RegExp
            ? "object"
            : (function (t, e) {
                  return (
                    "symbol" === t ||
                    "Symbol" === e["@@toStringTag"] ||
                    ("function" == typeof Symbol && e instanceof Symbol)
                  );
                })(e, t)
              ? "symbol"
              : e;
      }
      function M(t, e) {
        return T(function (r, n, i, a, s) {
          return o.untracked(function () {
            if (t && B(r[n]) === e.toLowerCase()) return null;
            var a;
            switch (e) {
              case "Array":
                a = o.isObservableArray;
                break;
              case "Object":
                a = o.isObservableObject;
                break;
              case "Map":
                a = o.isObservableMap;
                break;
              default:
                throw new Error("Unexpected mobxType: " + e);
            }
            var u = r[n];
            if (!a(u)) {
              var p = (function (t) {
                  var e = B(t);
                  if ("object" === e) {
                    if (t instanceof Date) return "date";
                    if (t instanceof RegExp) return "regexp";
                  }
                  return e;
                })(u),
                c = t ? " or javascript `" + e.toLowerCase() + "`" : "";
              return new Error(
                "Invalid prop `" +
                  s +
                  "` of type `" +
                  p +
                  "` supplied to `" +
                  i +
                  "`, expected `mobx.Observable" +
                  e +
                  "`" +
                  c +
                  ".",
              );
            }
            return null;
          });
        });
      }
      function U(t, e) {
        return T(function (r, n, i, a, s) {
          for (
            var u = arguments.length, p = new Array(u > 5 ? u - 5 : 0), c = 5;
            c < u;
            c++
          )
            p[c - 5] = arguments[c];
          return o.untracked(function () {
            if ("function" != typeof e)
              return new Error(
                "Property `" +
                  s +
                  "` of component `" +
                  i +
                  "` has invalid PropType notation.",
              );
            var o = M(t, "Array")(r, n, i, a, s);
            if (o instanceof Error) return o;
            for (var u = r[n], c = 0; c < u.length; c++)
              if (
                (o = e.apply(
                  void 0,
                  [u, c, i, a, s + "[" + c + "]"].concat(p),
                )) instanceof Error
              )
                return o;
            return null;
          });
        });
      }
      var I = {
        observableArray: M(!1, "Array"),
        observableArrayOf: U.bind(null, !1),
        observableMap: M(!1, "Map"),
        observableObject: M(!1, "Object"),
        arrayOrObservableArray: M(!0, "Array"),
        arrayOrObservableArrayOf: U.bind(null, !0),
        objectOrObservableObject: M(!0, "Object"),
      };
      if (!i.Component)
        throw new Error("mobx-react requires React to be available");
      if (!o.observable)
        throw new Error("mobx-react requires mobx to be available");
      Object.defineProperty(e, "q3", {
        enumerable: !0,
        get: function () {
          return s.useObserver;
        },
      }),
        (e.PA = w);
    },
    1370: (t, e, r) => {
      "use strict";
      r.d(e, { PA: () => _ });
      var n = r(7813),
        o = r(6540),
        i = r(9978);
      function a(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
      }
      var s = Symbol("patchMixins"),
        u = Symbol("patchedDefinition");
      function p(t, e) {
        for (
          var r = this,
            n = arguments.length,
            o = new Array(n > 2 ? n - 2 : 0),
            i = 2;
          i < n;
          i++
        )
          o[i - 2] = arguments[i];
        e.locks++;
        try {
          var a;
          return null != t && (a = t.apply(this, o)), a;
        } finally {
          e.locks--,
            0 === e.locks &&
              e.methods.forEach(function (t) {
                t.apply(r, o);
              });
        }
      }
      function c(t, e) {
        return function () {
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          p.call.apply(p, [this, t, e].concat(n));
        };
      }
      function l(t, e, r) {
        var n = (function (t, e) {
          var r = (t[s] = t[s] || {}),
            n = (r[e] = r[e] || {});
          return (n.locks = n.locks || 0), (n.methods = n.methods || []), n;
        })(t, e);
        n.methods.indexOf(r) < 0 && n.methods.push(r);
        var o = Object.getOwnPropertyDescriptor(t, e);
        if (!o || !o[u]) {
          var i = t[e],
            a = h(t, e, o ? o.enumerable : void 0, n, i);
          Object.defineProperty(t, e, a);
        }
      }
      function h(t, e, r, n, o) {
        var i,
          a = c(o, n);
        return (
          ((i = {})[u] = !0),
          (i.get = function () {
            return a;
          }),
          (i.set = function (o) {
            if (this === t) a = c(o, n);
            else {
              var i = h(this, e, r, n, o);
              Object.defineProperty(this, e, i);
            }
          }),
          (i.configurable = !0),
          (i.enumerable = r),
          i
        );
      }
      var f = Symbol("ObserverAdministration"),
        d = Symbol("isMobXReactObserver");
      function y(t) {
        var e;
        return null != (e = t[f])
          ? e
          : (t[f] = {
              reaction: null,
              mounted: !1,
              reactionInvalidatedBeforeMount: !1,
              forceUpdate: null,
              name: v(t.constructor),
              state: void 0,
              props: void 0,
              context: void 0,
            });
      }
      function v(t) {
        return t.displayName || t.name || "<component>";
      }
      function b(t) {
        var e = t.bind(this),
          r = y(this);
        return function () {
          r.reaction ||
            ((r.reaction = (function (t) {
              return new n.Reaction(t.name + ".render()", function () {
                if (t.mounted)
                  try {
                    null == t.forceUpdate || t.forceUpdate();
                  } catch (r) {
                    var e;
                    null == (e = t.reaction) || e.dispose(),
                      (t.reaction = null);
                  }
                else t.reactionInvalidatedBeforeMount = !0;
              });
            })(r)),
            r.mounted ||
              i._observerFinalizationRegistry.register(this, r, this));
          var t = void 0,
            o = void 0;
          if (
            (r.reaction.track(function () {
              try {
                o = (0, n._allowStateChanges)(!1, e);
              } catch (e) {
                t = e;
              }
            }),
            t)
          )
            throw t;
          return o;
        };
      }
      function g(t, e) {
        return (
          (0, i.isUsingStaticRendering)() &&
            console.warn(
              "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
            ),
          this.state !== e ||
            !(function (t, e) {
              if (a(t, e)) return !0;
              if (
                "object" != typeof t ||
                null === t ||
                "object" != typeof e ||
                null === e
              )
                return !1;
              var r = Object.keys(t),
                n = Object.keys(e);
              if (r.length !== n.length) return !1;
              for (var o = 0; o < r.length; o++)
                if (
                  !Object.hasOwnProperty.call(e, r[o]) ||
                  !a(t[r[o]], e[r[o]])
                )
                  return !1;
              return !0;
            })(this.props, t)
        );
      }
      function _(t, e) {
        if (e && "class" !== e.kind)
          throw new Error(
            "The @observer decorator can be used on classes only",
          );
        return (
          !0 === t.isMobxInjector &&
            console.warn(
              "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
            ),
          Object.prototype.isPrototypeOf.call(o.Component, t) ||
          Object.prototype.isPrototypeOf.call(o.PureComponent, t)
            ? (function (t) {
                var e = t.prototype;
                if (t[d]) {
                  var r = v(t);
                  throw new Error(
                    "The provided component class (" +
                      r +
                      ") has already been declared as an observer component.",
                  );
                }
                if (((t[d] = !0), e.componentWillReact))
                  throw new Error(
                    "The componentWillReact life-cycle event is no longer supported",
                  );
                if (t.__proto__ !== o.PureComponent)
                  if (e.shouldComponentUpdate) {
                    if (e.shouldComponentUpdate !== g)
                      throw new Error(
                        "It is not allowed to use shouldComponentUpdate in observer based components.",
                      );
                  } else e.shouldComponentUpdate = g;
                var n = e.render;
                if ("function" != typeof n) {
                  var a = v(t);
                  throw new Error(
                    "[mobx-react] class component (" +
                      a +
                      ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
                  );
                }
                e.render = function () {
                  return (
                    Object.defineProperty(this, "render", {
                      configurable: !1,
                      writable: !1,
                      value: (0, i.isUsingStaticRendering)()
                        ? n
                        : b.call(this, n),
                    }),
                    this.render()
                  );
                };
                var s = e.componentDidMount;
                return (
                  (e.componentDidMount = function () {
                    var t = this,
                      e = y(this);
                    return (
                      (e.mounted = !0),
                      i._observerFinalizationRegistry.unregister(this),
                      (e.forceUpdate = function () {
                        return t.forceUpdate();
                      }),
                      (e.reaction && !e.reactionInvalidatedBeforeMount) ||
                        e.forceUpdate(),
                      null == s ? void 0 : s.apply(this, arguments)
                    );
                  }),
                  l(e, "componentWillUnmount", function () {
                    var t;
                    if (!(0, i.isUsingStaticRendering)()) {
                      var e = y(this);
                      null == (t = e.reaction) || t.dispose(),
                        (e.reaction = null),
                        (e.forceUpdate = null),
                        (e.mounted = !1),
                        (e.reactionInvalidatedBeforeMount = !1);
                    }
                  }),
                  t
                );
              })(t)
            : (0, i.observer)(t)
        );
      }
      o.version.split(".")[0];
      if (!o.Component)
        throw new Error("mobx-react requires React to be available");
      if (!n.observable)
        throw new Error("mobx-react requires mobx to be available");
    },
    7813: (t, e, r) => {
      "use strict";
      r.r(e),
        r.d(e, {
          $mobx: () => W,
          FlowCancellationError: () => vr,
          ObservableMap: () => On,
          ObservableSet: () => jn,
          Reaction: () => Ce,
          _allowStateChanges: () => qt,
          _allowStateChangesInsideComputed: () => Xe,
          _allowStateReadsEnd: () => ye,
          _allowStateReadsStart: () => de,
          _autoAction: () => Ze,
          _endAction: () => Kt,
          _getAdministration: () => Zn,
          _getGlobalState: () => Oe,
          _interceptReads: () => Ar,
          _isComputingDerivation: () => se,
          _resetGlobalState: () => Se,
          _startAction: () => Gt,
          action: () => qe,
          autorun: () => $e,
          comparer: () => Z,
          computed: () => Ft,
          configure: () => pr,
          createAtom: () => q,
          defineProperty: () => Dr,
          entries: () => Mr,
          extendObservable: () => cr,
          flow: () => mr,
          flowResult: () => Or,
          get: () => Fr,
          getAtom: () => qn,
          getDebugName: () => Xn,
          getDependencyTree: () => lr,
          getObserverTree: () => fr,
          has: () => Lr,
          intercept: () => jr,
          isAction: () => Je,
          isBoxedObservable: () => $t,
          isComputed: () => kr,
          isComputedProp: () => Er,
          isFlow: () => Sr,
          isFlowCancellationError: () => br,
          isObservable: () => Rr,
          isObservableArray: () => gn,
          isObservableMap: () => Sn,
          isObservableObject: () => Bn,
          isObservableProp: () => Cr,
          isObservableSet: () => xn,
          keys: () => Tr,
          makeAutoObservable: () => an,
          makeObservable: () => nn,
          observable: () => Mt,
          observe: () => Nr,
          onBecomeObserved: () => nr,
          onBecomeUnobserved: () => or,
          onReactionError: () => Te,
          override: () => Y,
          ownKeys: () => Vr,
          reaction: () => tr,
          remove: () => Ir,
          runInAction: () => Xe,
          set: () => Ur,
          spy: () => Fe,
          toJS: () => Wr,
          trace: () => Gr,
          transaction: () => Kr,
          untracked: () => le,
          values: () => Br,
          when: () => qr,
        });
      function n(t) {
        for (
          var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          r[n - 1] = arguments[n];
        throw new Error(
          "number" == typeof t
            ? "[MobX] minified error nr: " +
                t +
                (r.length ? " " + r.map(String).join(",") : "") +
                ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
            : "[MobX] " + t,
        );
      }
      var o = {};
      function i() {
        return "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
            ? window
            : void 0 !== r.g
              ? r.g
              : "undefined" != typeof self
                ? self
                : o;
      }
      var a = Object.assign,
        s = Object.getOwnPropertyDescriptor,
        u = Object.defineProperty,
        p = Object.prototype,
        c = [];
      Object.freeze(c);
      var l = {};
      Object.freeze(l);
      var h = "undefined" != typeof Proxy,
        f = Object.toString();
      function d() {
        h || n("Proxy not available");
      }
      function y(t) {
        var e = !1;
        return function () {
          if (!e) return (e = !0), t.apply(this, arguments);
        };
      }
      var v = function () {};
      function b(t) {
        return "function" == typeof t;
      }
      function g(t) {
        switch (typeof t) {
          case "string":
          case "symbol":
          case "number":
            return !0;
        }
        return !1;
      }
      function _(t) {
        return null !== t && "object" == typeof t;
      }
      function m(t) {
        if (!_(t)) return !1;
        var e = Object.getPrototypeOf(t);
        if (null == e) return !0;
        var r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r.toString() === f;
      }
      function w(t) {
        var e = null == t ? void 0 : t.constructor;
        return (
          !!e &&
          ("GeneratorFunction" === e.name ||
            "GeneratorFunction" === e.displayName)
        );
      }
      function O(t, e, r) {
        u(t, e, { enumerable: !1, writable: !0, configurable: !0, value: r });
      }
      function S(t, e, r) {
        u(t, e, { enumerable: !1, writable: !1, configurable: !0, value: r });
      }
      function A(t, e) {
        var r = "isMobX" + t;
        return (
          (e.prototype[r] = !0),
          function (t) {
            return _(t) && !0 === t[r];
          }
        );
      }
      function j(t) {
        return (
          null != t && "[object Map]" === Object.prototype.toString.call(t)
        );
      }
      function x(t) {
        return (
          null != t && "[object Set]" === Object.prototype.toString.call(t)
        );
      }
      var k = void 0 !== Object.getOwnPropertySymbols;
      var E =
        "undefined" != typeof Reflect && Reflect.ownKeys
          ? Reflect.ownKeys
          : k
            ? function (t) {
                return Object.getOwnPropertyNames(t).concat(
                  Object.getOwnPropertySymbols(t),
                );
              }
            : Object.getOwnPropertyNames;
      function P(t) {
        return null === t ? null : "object" == typeof t ? "" + t : t;
      }
      function R(t, e) {
        return p.hasOwnProperty.call(t, e);
      }
      var C =
        Object.getOwnPropertyDescriptors ||
        function (t) {
          var e = {};
          return (
            E(t).forEach(function (r) {
              e[r] = s(t, r);
            }),
            e
          );
        };
      function T(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function B(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, D(n.key), n);
        }
      }
      function M(t, e, r) {
        return (
          e && B(t.prototype, e),
          r && B(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function U(t, e) {
        var r =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (r) return (r = r.call(t)).next.bind(r);
        if (
          Array.isArray(t) ||
          (r = (function (t, e) {
            if (t) {
              if ("string" == typeof t) return T(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? T(t, e)
                    : void 0
              );
            }
          })(t)) ||
          (e && t && "number" == typeof t.length)
        ) {
          r && (t = r);
          var n = 0;
          return function () {
            return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function I() {
        return (
          (I = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    ({}).hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          I.apply(null, arguments)
        );
      }
      function L(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          F(t, e);
      }
      function F(t, e) {
        return (
          (F = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          F(t, e)
        );
      }
      function D(t) {
        var e = (function (t, e) {
          if ("object" != typeof t || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == typeof e ? e : e + "";
      }
      var V = Symbol("mobx-stored-annotations");
      function N(t) {
        return Object.assign(function (e, r) {
          if (H(r)) return t.decorate_20223_(e, r);
          z(e, r, t);
        }, t);
      }
      function z(t, e, r) {
        R(t, V) || O(t, V, I({}, t[V])),
          (function (t) {
            return t.annotationType_ === $;
          })(r) || (t[V][e] = r);
      }
      function H(t) {
        return "object" == typeof t && "string" == typeof t.kind;
      }
      var W = Symbol("mobx administration"),
        G = (function () {
          function t(t) {
            void 0 === t && (t = "Atom"),
              (this.name_ = void 0),
              (this.isPendingUnobservation = !1),
              (this.isBeingObserved = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = ee.NOT_TRACKING_),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              (this.name_ = t);
          }
          var e = t.prototype;
          return (
            (e.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (t) {
                  return t();
                });
            }),
            (e.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (t) {
                  return t();
                });
            }),
            (e.reportObserved = function () {
              return Pe(this);
            }),
            (e.reportChanged = function () {
              ke(), Re(this), Ee();
            }),
            (e.toString = function () {
              return this.name_;
            }),
            t
          );
        })(),
        K = A("Atom", G);
      function q(t, e, r) {
        void 0 === e && (e = v), void 0 === r && (r = v);
        var n = new G(t);
        return e !== v && nr(n, e), r !== v && or(n, r), n;
      }
      var Z = {
        identity: function (t, e) {
          return t === e;
        },
        structural: function (t, e) {
          return Yn(t, e);
        },
        default: function (t, e) {
          return Object.is
            ? Object.is(t, e)
            : t === e
              ? 0 !== t || 1 / t == 1 / e
              : t != t && e != e;
        },
        shallow: function (t, e) {
          return Yn(t, e, 1);
        },
      };
      function X(t, e, r) {
        return Rr(t)
          ? t
          : Array.isArray(t)
            ? Mt.array(t, { name: r })
            : m(t)
              ? Mt.object(t, void 0, { name: r })
              : j(t)
                ? Mt.map(t, { name: r })
                : x(t)
                  ? Mt.set(t, { name: r })
                  : "function" != typeof t || Je(t) || Sr(t)
                    ? t
                    : w(t)
                      ? mr(t)
                      : Ze(r, t);
      }
      function J(t) {
        return t;
      }
      var $ = "override",
        Y = N({
          annotationType_: $,
          make_: function (t, e) {
            0;
            0;
            return 0;
          },
          extend_: function (t, e, r, o) {
            n(
              "'" +
                this.annotationType_ +
                "' can only be used with 'makeObservable'",
            );
          },
          decorate_20223_: function (t, e) {
            console.warn(
              "'" +
                this.annotationType_ +
                "' cannot be used with decorators - this is a no-op",
            );
          },
        });
      function Q(t, e) {
        return {
          annotationType_: t,
          options_: e,
          make_: tt,
          extend_: et,
          decorate_20223_: rt,
        };
      }
      function tt(t, e, r, n) {
        var o;
        if (null != (o = this.options_) && o.bound)
          return null === this.extend_(t, e, r, !1) ? 0 : 1;
        if (n === t.target_) return null === this.extend_(t, e, r, !1) ? 0 : 2;
        if (Je(r.value)) return 1;
        var i = nt(t, this, e, r, !1);
        return u(n, e, i), 2;
      }
      function et(t, e, r, n) {
        var o = nt(t, this, e, r);
        return t.defineProperty_(e, o, n);
      }
      function rt(t, e) {
        var r = e.kind,
          o = e.name,
          i = e.addInitializer,
          a = this;
        if ("field" != r) {
          var s, u, p, c, l, h;
          if ("method" == r)
            return (
              Je(t) ||
                ((u = t),
                (t = Ht(
                  null != (p = null == (c = a.options_) ? void 0 : c.name)
                    ? p
                    : o.toString(),
                  u,
                  null !=
                    (l = null == (h = a.options_) ? void 0 : h.autoAction) && l,
                ))),
              null != (s = this.options_) &&
                s.bound &&
                i(function () {
                  var t = this,
                    e = t[o].bind(t);
                  (e.isMobxAction = !0), (t[o] = e);
                }),
              t
            );
          n(
            "Cannot apply '" +
              a.annotationType_ +
              "' to '" +
              String(o) +
              "' (kind: " +
              r +
              "):\n'" +
              a.annotationType_ +
              "' can only be used on properties with a function value.",
          );
        } else
          i(function () {
            z(this, o, a);
          });
      }
      function nt(t, e, r, n, o) {
        var i, a, s, u, p, c, l, h;
        void 0 === o && (o = we.safeDescriptors),
          (h = n),
          e.annotationType_,
          h.value;
        var f,
          d = n.value;
        null != (i = e.options_) &&
          i.bound &&
          (d = d.bind(null != (f = t.proxy_) ? f : t.target_));
        return {
          value: Ht(
            null != (a = null == (s = e.options_) ? void 0 : s.name)
              ? a
              : r.toString(),
            d,
            null != (u = null == (p = e.options_) ? void 0 : p.autoAction) && u,
            null != (c = e.options_) && c.bound
              ? null != (l = t.proxy_)
                ? l
                : t.target_
              : void 0,
          ),
          configurable: !o || t.isPlainObject_,
          enumerable: !1,
          writable: !o,
        };
      }
      function ot(t, e) {
        return {
          annotationType_: t,
          options_: e,
          make_: it,
          extend_: at,
          decorate_20223_: st,
        };
      }
      function it(t, e, r, n) {
        var o;
        if (n === t.target_) return null === this.extend_(t, e, r, !1) ? 0 : 2;
        if (
          null != (o = this.options_) &&
          o.bound &&
          (!R(t.target_, e) || !Sr(t.target_[e])) &&
          null === this.extend_(t, e, r, !1)
        )
          return 0;
        if (Sr(r.value)) return 1;
        var i = ut(t, this, e, r, !1, !1);
        return u(n, e, i), 2;
      }
      function at(t, e, r, n) {
        var o,
          i = ut(t, this, e, r, null == (o = this.options_) ? void 0 : o.bound);
        return t.defineProperty_(e, i, n);
      }
      function st(t, e) {
        var r;
        var n = e.name,
          o = e.addInitializer;
        return (
          Sr(t) || (t = mr(t)),
          null != (r = this.options_) &&
            r.bound &&
            o(function () {
              var t = this,
                e = t[n].bind(t);
              (e.isMobXFlow = !0), (t[n] = e);
            }),
          t
        );
      }
      function ut(t, e, r, n, o, i) {
        var a;
        void 0 === i && (i = we.safeDescriptors),
          (a = n),
          e.annotationType_,
          a.value;
        var s,
          u = n.value;
        (Sr(u) || (u = mr(u)), o) &&
          ((u = u.bind(null != (s = t.proxy_) ? s : t.target_)).isMobXFlow =
            !0);
        return {
          value: u,
          configurable: !i || t.isPlainObject_,
          enumerable: !1,
          writable: !i,
        };
      }
      function pt(t, e) {
        return {
          annotationType_: t,
          options_: e,
          make_: ct,
          extend_: lt,
          decorate_20223_: ht,
        };
      }
      function ct(t, e, r) {
        return null === this.extend_(t, e, r, !1) ? 0 : 1;
      }
      function lt(t, e, r, n) {
        return (
          (function (t, e, r, n) {
            e.annotationType_, n.get;
            0;
          })(0, this, 0, r),
          t.defineComputedProperty_(
            e,
            I({}, this.options_, { get: r.get, set: r.set }),
            n,
          )
        );
      }
      function ht(t, e) {
        var r = this,
          n = e.name;
        return (
          (0, e.addInitializer)(function () {
            var e = Rn(this)[W],
              o = I({}, r.options_, { get: t, context: this });
            o.name || (o.name = "ObservableObject." + n.toString()),
              e.values_.set(n, new te(o));
          }),
          function () {
            return this[W].getObservablePropValue_(n);
          }
        );
      }
      function ft(t, e) {
        return {
          annotationType_: t,
          options_: e,
          make_: dt,
          extend_: yt,
          decorate_20223_: vt,
        };
      }
      function dt(t, e, r) {
        return null === this.extend_(t, e, r, !1) ? 0 : 1;
      }
      function yt(t, e, r, n) {
        var o, i;
        return (
          (function (t, e) {
            e.annotationType_;
            0;
          })(0, this),
          t.defineObservableProperty_(
            e,
            r.value,
            null != (o = null == (i = this.options_) ? void 0 : i.enhancer)
              ? o
              : X,
            n,
          )
        );
      }
      function vt(t, e) {
        var r = this,
          n = e.kind,
          o = e.name,
          i = new WeakSet();
        function a(t, e) {
          var n,
            a,
            s = Rn(t)[W],
            u = new Jt(
              e,
              null != (n = null == (a = r.options_) ? void 0 : a.enhancer)
                ? n
                : X,
              "ObservableObject." + o.toString(),
              !1,
            );
          s.values_.set(o, u), i.add(t);
        }
        if ("accessor" == n)
          return {
            get: function () {
              return (
                i.has(this) || a(this, t.get.call(this)),
                this[W].getObservablePropValue_(o)
              );
            },
            set: function (t) {
              return (
                i.has(this) || a(this, t), this[W].setObservablePropValue_(o, t)
              );
            },
            init: function (t) {
              return i.has(this) || a(this, t), t;
            },
          };
      }
      var bt = "true",
        gt = _t();
      function _t(t) {
        return {
          annotationType_: bt,
          options_: t,
          make_: mt,
          extend_: wt,
          decorate_20223_: Ot,
        };
      }
      function mt(t, e, r, n) {
        var o, i, a, s;
        if (r.get) return Ft.make_(t, e, r, n);
        if (r.set) {
          var p = Ht(e.toString(), r.set);
          return n === t.target_
            ? null ===
              t.defineProperty_(e, {
                configurable: !we.safeDescriptors || t.isPlainObject_,
                set: p,
              })
              ? 0
              : 2
            : (u(n, e, { configurable: !0, set: p }), 2);
        }
        if (n !== t.target_ && "function" == typeof r.value)
          return w(r.value)
            ? (null != (s = this.options_) && s.autoBind ? mr.bound : mr).make_(
                t,
                e,
                r,
                n,
              )
            : (null != (a = this.options_) && a.autoBind ? Ze.bound : Ze).make_(
                t,
                e,
                r,
                n,
              );
        var c,
          l =
            !1 === (null == (o = this.options_) ? void 0 : o.deep)
              ? Mt.ref
              : Mt;
        "function" == typeof r.value &&
          null != (i = this.options_) &&
          i.autoBind &&
          (r.value = r.value.bind(null != (c = t.proxy_) ? c : t.target_));
        return l.make_(t, e, r, n);
      }
      function wt(t, e, r, n) {
        var o, i, a;
        if (r.get) return Ft.extend_(t, e, r, n);
        if (r.set)
          return t.defineProperty_(
            e,
            {
              configurable: !we.safeDescriptors || t.isPlainObject_,
              set: Ht(e.toString(), r.set),
            },
            n,
          );
        "function" == typeof r.value &&
          null != (o = this.options_) &&
          o.autoBind &&
          (r.value = r.value.bind(null != (a = t.proxy_) ? a : t.target_));
        return (
          !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Mt.ref : Mt
        ).extend_(t, e, r, n);
      }
      function Ot(t, e) {
        n("'" + this.annotationType_ + "' cannot be used as a decorator");
      }
      var St = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function At(t) {
        return t || St;
      }
      Object.freeze(St);
      var jt = ft("observable"),
        xt = ft("observable.ref", { enhancer: J }),
        kt = ft("observable.shallow", {
          enhancer: function (t, e, r) {
            return null == t || Bn(t) || gn(t) || Sn(t) || xn(t)
              ? t
              : Array.isArray(t)
                ? Mt.array(t, { name: r, deep: !1 })
                : m(t)
                  ? Mt.object(t, void 0, { name: r, deep: !1 })
                  : j(t)
                    ? Mt.map(t, { name: r, deep: !1 })
                    : x(t)
                      ? Mt.set(t, { name: r, deep: !1 })
                      : void 0;
          },
        }),
        Et = ft("observable.struct", {
          enhancer: function (t, e) {
            return Yn(t, e) ? e : t;
          },
        }),
        Pt = N(jt);
      function Rt(t) {
        return !0 === t.deep
          ? X
          : !1 === t.deep
            ? J
            : (e = t.defaultDecorator) &&
                null != (r = null == (n = e.options_) ? void 0 : n.enhancer)
              ? r
              : X;
        var e, r, n;
      }
      function Ct(t, e, r) {
        return H(e)
          ? jt.decorate_20223_(t, e)
          : g(e)
            ? void z(t, e, jt)
            : Rr(t)
              ? t
              : m(t)
                ? Mt.object(t, e, r)
                : Array.isArray(t)
                  ? Mt.array(t, e)
                  : j(t)
                    ? Mt.map(t, e)
                    : x(t)
                      ? Mt.set(t, e)
                      : "object" == typeof t && null !== t
                        ? t
                        : Mt.box(t, e);
      }
      a(Ct, Pt);
      var Tt,
        Bt,
        Mt = a(Ct, {
          box: function (t, e) {
            var r = At(e);
            return new Jt(t, Rt(r), r.name, !0, r.equals);
          },
          array: function (t, e) {
            var r = At(e);
            return (!1 === we.useProxies || !1 === r.proxy ? Kn : ln)(
              t,
              Rt(r),
              r.name,
            );
          },
          map: function (t, e) {
            var r = At(e);
            return new On(t, Rt(r), r.name);
          },
          set: function (t, e) {
            var r = At(e);
            return new jn(t, Rt(r), r.name);
          },
          object: function (t, e, r) {
            return Jn(function () {
              return cr(
                !1 === we.useProxies || !1 === (null == r ? void 0 : r.proxy)
                  ? Rn({}, r)
                  : (function (t, e) {
                      var r, n;
                      return (
                        d(),
                        (t = Rn(t, e)),
                        null != (n = (r = t[W]).proxy_)
                          ? n
                          : (r.proxy_ = new Proxy(t, Jr))
                      );
                    })({}, r),
                t,
                e,
              );
            });
          },
          ref: N(xt),
          shallow: N(kt),
          deep: Pt,
          struct: N(Et),
        }),
        Ut = "computed",
        It = pt(Ut),
        Lt = pt("computed.struct", { equals: Z.structural }),
        Ft = function (t, e) {
          if (H(e)) return It.decorate_20223_(t, e);
          if (g(e)) return z(t, e, It);
          if (m(t)) return N(pt(Ut, t));
          var r = m(e) ? e : {};
          return (r.get = t), r.name || (r.name = t.name || ""), new te(r);
        };
      Object.assign(Ft, It), (Ft.struct = N(Lt));
      var Dt = 0,
        Vt = 1,
        Nt =
          null !=
            (Tt =
              null == (Bt = s(function () {}, "name"))
                ? void 0
                : Bt.configurable) && Tt,
        zt = {
          value: "action",
          configurable: !0,
          writable: !1,
          enumerable: !1,
        };
      function Ht(t, e, r, n) {
        function o() {
          return Wt(t, r, e, n || this, arguments);
        }
        return (
          void 0 === r && (r = !1),
          (o.isMobxAction = !0),
          (o.toString = function () {
            return e.toString();
          }),
          Nt && ((zt.value = t), u(o, "name", zt)),
          o
        );
      }
      function Wt(t, e, r, n, o) {
        var i = Gt(t, e, n, o);
        try {
          return r.apply(n, o);
        } catch (t) {
          throw ((i.error_ = t), t);
        } finally {
          Kt(i);
        }
      }
      function Gt(t, e, r, n) {
        var o = we.trackingDerivation,
          i = !e || !o;
        ke();
        var a = we.allowStateChanges;
        i && (he(), (a = Zt(!0)));
        var s = {
          runAsAction_: i,
          prevDerivation_: o,
          prevAllowStateChanges_: a,
          prevAllowStateReads_: de(!0),
          notifySpy_: !1,
          startTime_: 0,
          actionId_: Vt++,
          parentActionId_: Dt,
        };
        return (Dt = s.actionId_), s;
      }
      function Kt(t) {
        Dt !== t.actionId_ && n(30),
          (Dt = t.parentActionId_),
          void 0 !== t.error_ && (we.suppressReactionErrors = !0),
          Xt(t.prevAllowStateChanges_),
          ye(t.prevAllowStateReads_),
          Ee(),
          t.runAsAction_ && fe(t.prevDerivation_),
          (we.suppressReactionErrors = !1);
      }
      function qt(t, e) {
        var r = Zt(t);
        try {
          return e();
        } finally {
          Xt(r);
        }
      }
      function Zt(t) {
        var e = we.allowStateChanges;
        return (we.allowStateChanges = t), e;
      }
      function Xt(t) {
        we.allowStateChanges = t;
      }
      var Jt = (function (t) {
          function e(e, r, n, o, i) {
            var a;
            return (
              void 0 === n && (n = "ObservableValue"),
              void 0 === o && (o = !0),
              void 0 === i && (i = Z.default),
              ((a = t.call(this, n) || this).enhancer = void 0),
              (a.name_ = void 0),
              (a.equals = void 0),
              (a.hasUnreportedChange_ = !1),
              (a.interceptors_ = void 0),
              (a.changeListeners_ = void 0),
              (a.value_ = void 0),
              (a.dehancer = void 0),
              (a.enhancer = r),
              (a.name_ = n),
              (a.equals = i),
              (a.value_ = r(e, void 0, n)),
              a
            );
          }
          L(e, t);
          var r = e.prototype;
          return (
            (r.dehanceValue = function (t) {
              return void 0 !== this.dehancer ? this.dehancer(t) : t;
            }),
            (r.set = function (t) {
              this.value_;
              if ((t = this.prepareNewValue_(t)) !== we.UNCHANGED) {
                0, this.setNewValue_(t);
              }
            }),
            (r.prepareNewValue_ = function (t) {
              if ((ue(this), $r(this))) {
                var e = Qr(this, { object: this, type: un, newValue: t });
                if (!e) return we.UNCHANGED;
                t = e.newValue;
              }
              return (
                (t = this.enhancer(t, this.value_, this.name_)),
                this.equals(this.value_, t) ? we.UNCHANGED : t
              );
            }),
            (r.setNewValue_ = function (t) {
              var e = this.value_;
              (this.value_ = t),
                this.reportChanged(),
                tn(this) &&
                  rn(this, {
                    type: un,
                    object: this,
                    newValue: t,
                    oldValue: e,
                  });
            }),
            (r.get = function () {
              return this.reportObserved(), this.dehanceValue(this.value_);
            }),
            (r.intercept_ = function (t) {
              return Yr(this, t);
            }),
            (r.observe_ = function (t, e) {
              return (
                e &&
                  t({
                    observableKind: "value",
                    debugObjectName: this.name_,
                    object: this,
                    type: un,
                    newValue: this.value_,
                    oldValue: void 0,
                  }),
                en(this, t)
              );
            }),
            (r.raw = function () {
              return this.value_;
            }),
            (r.toJSON = function () {
              return this.get();
            }),
            (r.toString = function () {
              return this.name_ + "[" + this.value_ + "]";
            }),
            (r.valueOf = function () {
              return P(this.get());
            }),
            (r[Symbol.toPrimitive] = function () {
              return this.valueOf();
            }),
            e
          );
        })(G),
        $t = A("ObservableValue", Jt);
      function Yt(t, e) {
        return !!(t & e);
      }
      function Qt(t, e, r) {
        return r ? (t |= e) : (t &= ~e), t;
      }
      var te = (function () {
        function t(t) {
          (this.dependenciesState_ = ee.NOT_TRACKING_),
            (this.observing_ = []),
            (this.newObserving_ = null),
            (this.observers_ = new Set()),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.lastAccessedBy_ = 0),
            (this.lowestObserverState_ = ee.UP_TO_DATE_),
            (this.unboundDepsCount_ = 0),
            (this.value_ = new oe(null)),
            (this.name_ = void 0),
            (this.triggeredBy_ = void 0),
            (this.flags_ = 0),
            (this.derivation = void 0),
            (this.setter_ = void 0),
            (this.isTracing_ = re.NONE),
            (this.scope_ = void 0),
            (this.equals_ = void 0),
            (this.requiresReaction_ = void 0),
            (this.keepAlive_ = void 0),
            (this.onBOL = void 0),
            (this.onBUOL = void 0),
            t.get || n(31),
            (this.derivation = t.get),
            (this.name_ = t.name || "ComputedValue"),
            t.set && (this.setter_ = Ht("ComputedValue-setter", t.set)),
            (this.equals_ =
              t.equals ||
              (t.compareStructural || t.struct ? Z.structural : Z.default)),
            (this.scope_ = t.context),
            (this.requiresReaction_ = t.requiresReaction),
            (this.keepAlive_ = !!t.keepAlive);
        }
        var e = t.prototype;
        return (
          (e.onBecomeStale_ = function () {
            !(function (t) {
              if (t.lowestObserverState_ !== ee.UP_TO_DATE_) return;
              (t.lowestObserverState_ = ee.POSSIBLY_STALE_),
                t.observers_.forEach(function (t) {
                  t.dependenciesState_ === ee.UP_TO_DATE_ &&
                    ((t.dependenciesState_ = ee.POSSIBLY_STALE_),
                    t.onBecomeStale_());
                });
            })(this);
          }),
          (e.onBO = function () {
            this.onBOL &&
              this.onBOL.forEach(function (t) {
                return t();
              });
          }),
          (e.onBUO = function () {
            this.onBUOL &&
              this.onBUOL.forEach(function (t) {
                return t();
              });
          }),
          (e.get = function () {
            if (
              (this.isComputing && n(32, this.name_, this.derivation),
              0 !== we.inBatch || 0 !== this.observers_.size || this.keepAlive_)
            ) {
              if ((Pe(this), ae(this))) {
                var t = we.trackingContext;
                this.keepAlive_ && !t && (we.trackingContext = this),
                  this.trackAndCompute() &&
                    (function (t) {
                      if (t.lowestObserverState_ === ee.STALE_) return;
                      (t.lowestObserverState_ = ee.STALE_),
                        t.observers_.forEach(function (e) {
                          e.dependenciesState_ === ee.POSSIBLY_STALE_
                            ? (e.dependenciesState_ = ee.STALE_)
                            : e.dependenciesState_ === ee.UP_TO_DATE_ &&
                              (t.lowestObserverState_ = ee.UP_TO_DATE_);
                        });
                    })(this),
                  (we.trackingContext = t);
              }
            } else
              ae(this) &&
                (this.warnAboutUntrackedRead_(),
                ke(),
                (this.value_ = this.computeValue_(!1)),
                Ee());
            var e = this.value_;
            if (ie(e)) throw e.cause;
            return e;
          }),
          (e.set = function (t) {
            if (this.setter_) {
              this.isRunningSetter && n(33, this.name_),
                (this.isRunningSetter = !0);
              try {
                this.setter_.call(this.scope_, t);
              } finally {
                this.isRunningSetter = !1;
              }
            } else n(34, this.name_);
          }),
          (e.trackAndCompute = function () {
            var t = this.value_,
              e = this.dependenciesState_ === ee.NOT_TRACKING_,
              r = this.computeValue_(!0),
              n = e || ie(t) || ie(r) || !this.equals_(t, r);
            return n && (this.value_ = r), n;
          }),
          (e.computeValue_ = function (t) {
            this.isComputing = !0;
            var e,
              r = Zt(!1);
            if (t) e = pe(this, this.derivation, this.scope_);
            else if (!0 === we.disableErrorBoundaries)
              e = this.derivation.call(this.scope_);
            else
              try {
                e = this.derivation.call(this.scope_);
              } catch (t) {
                e = new oe(t);
              }
            return Xt(r), (this.isComputing = !1), e;
          }),
          (e.suspend_ = function () {
            this.keepAlive_ || (ce(this), (this.value_ = void 0));
          }),
          (e.observe_ = function (t, e) {
            var r = this,
              n = !0,
              o = void 0;
            return $e(function () {
              var i = r.get();
              if (!n || e) {
                var a = he();
                t({
                  observableKind: "computed",
                  debugObjectName: r.name_,
                  type: un,
                  object: r,
                  newValue: i,
                  oldValue: o,
                }),
                  fe(a);
              }
              (n = !1), (o = i);
            });
          }),
          (e.warnAboutUntrackedRead_ = function () {}),
          (e.toString = function () {
            return this.name_ + "[" + this.derivation.toString() + "]";
          }),
          (e.valueOf = function () {
            return P(this.get());
          }),
          (e[Symbol.toPrimitive] = function () {
            return this.valueOf();
          }),
          M(t, [
            {
              key: "isComputing",
              get: function () {
                return Yt(this.flags_, t.isComputingMask_);
              },
              set: function (e) {
                this.flags_ = Qt(this.flags_, t.isComputingMask_, e);
              },
            },
            {
              key: "isRunningSetter",
              get: function () {
                return Yt(this.flags_, t.isRunningSetterMask_);
              },
              set: function (e) {
                this.flags_ = Qt(this.flags_, t.isRunningSetterMask_, e);
              },
            },
            {
              key: "isBeingObserved",
              get: function () {
                return Yt(this.flags_, t.isBeingObservedMask_);
              },
              set: function (e) {
                this.flags_ = Qt(this.flags_, t.isBeingObservedMask_, e);
              },
            },
            {
              key: "isPendingUnobservation",
              get: function () {
                return Yt(this.flags_, t.isPendingUnobservationMask_);
              },
              set: function (e) {
                this.flags_ = Qt(this.flags_, t.isPendingUnobservationMask_, e);
              },
            },
          ])
        );
      })();
      (te.isComputingMask_ = 1),
        (te.isRunningSetterMask_ = 2),
        (te.isBeingObservedMask_ = 4),
        (te.isPendingUnobservationMask_ = 8);
      var ee,
        re,
        ne = A("ComputedValue", te);
      !(function (t) {
        (t[(t.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
          (t[(t.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
          (t[(t.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
          (t[(t.STALE_ = 2)] = "STALE_");
      })(ee || (ee = {})),
        (function (t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.LOG = 1)] = "LOG"),
            (t[(t.BREAK = 2)] = "BREAK");
        })(re || (re = {}));
      var oe = function (t) {
        (this.cause = void 0), (this.cause = t);
      };
      function ie(t) {
        return t instanceof oe;
      }
      function ae(t) {
        switch (t.dependenciesState_) {
          case ee.UP_TO_DATE_:
            return !1;
          case ee.NOT_TRACKING_:
          case ee.STALE_:
            return !0;
          case ee.POSSIBLY_STALE_:
            for (
              var e = de(!0), r = he(), n = t.observing_, o = n.length, i = 0;
              i < o;
              i++
            ) {
              var a = n[i];
              if (ne(a)) {
                if (we.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (t) {
                    return fe(r), ye(e), !0;
                  }
                if (t.dependenciesState_ === ee.STALE_) return fe(r), ye(e), !0;
              }
            }
            return ve(t), fe(r), ye(e), !1;
        }
      }
      function se() {
        return null !== we.trackingDerivation;
      }
      function ue(t) {}
      function pe(t, e, r) {
        var n = de(!0);
        ve(t),
          (t.newObserving_ = new Array(
            0 === t.runId_ ? 100 : t.observing_.length,
          )),
          (t.unboundDepsCount_ = 0),
          (t.runId_ = ++we.runId);
        var o,
          i = we.trackingDerivation;
        if (
          ((we.trackingDerivation = t),
          we.inBatch++,
          !0 === we.disableErrorBoundaries)
        )
          o = e.call(r);
        else
          try {
            o = e.call(r);
          } catch (t) {
            o = new oe(t);
          }
        return (
          we.inBatch--,
          (we.trackingDerivation = i),
          (function (t) {
            for (
              var e = t.observing_,
                r = (t.observing_ = t.newObserving_),
                n = ee.UP_TO_DATE_,
                o = 0,
                i = t.unboundDepsCount_,
                a = 0;
              a < i;
              a++
            ) {
              var s = r[a];
              0 === s.diffValue_ &&
                ((s.diffValue_ = 1), o !== a && (r[o] = s), o++),
                s.dependenciesState_ > n && (n = s.dependenciesState_);
            }
            (r.length = o), (t.newObserving_ = null), (i = e.length);
            for (; i--; ) {
              var u = e[i];
              0 === u.diffValue_ && je(u, t), (u.diffValue_ = 0);
            }
            for (; o--; ) {
              var p = r[o];
              1 === p.diffValue_ && ((p.diffValue_ = 0), Ae(p, t));
            }
            n !== ee.UP_TO_DATE_ &&
              ((t.dependenciesState_ = n), t.onBecomeStale_());
          })(t),
          ye(n),
          o
        );
      }
      function ce(t) {
        var e = t.observing_;
        t.observing_ = [];
        for (var r = e.length; r--; ) je(e[r], t);
        t.dependenciesState_ = ee.NOT_TRACKING_;
      }
      function le(t) {
        var e = he();
        try {
          return t();
        } finally {
          fe(e);
        }
      }
      function he() {
        var t = we.trackingDerivation;
        return (we.trackingDerivation = null), t;
      }
      function fe(t) {
        we.trackingDerivation = t;
      }
      function de(t) {
        var e = we.allowStateReads;
        return (we.allowStateReads = t), e;
      }
      function ye(t) {
        we.allowStateReads = t;
      }
      function ve(t) {
        if (t.dependenciesState_ !== ee.UP_TO_DATE_) {
          t.dependenciesState_ = ee.UP_TO_DATE_;
          for (var e = t.observing_, r = e.length; r--; )
            e[r].lowestObserverState_ = ee.UP_TO_DATE_;
        }
      }
      var be = [
          "mobxGuid",
          "spyListeners",
          "enforceActions",
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "allowStateReads",
          "disableErrorBoundaries",
          "runId",
          "UNCHANGED",
          "useProxies",
        ],
        ge = function () {
          (this.version = 6),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.trackingContext = null),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !1),
            (this.allowStateReads = !0),
            (this.enforceActions = !0),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1),
            (this.useProxies = !0),
            (this.verifyProxies = !1),
            (this.safeDescriptors = !0);
        },
        _e = !0,
        me = !1,
        we = (function () {
          var t = i();
          return (
            t.__mobxInstanceCount > 0 && !t.__mobxGlobals && (_e = !1),
            t.__mobxGlobals &&
              t.__mobxGlobals.version !== new ge().version &&
              (_e = !1),
            _e
              ? t.__mobxGlobals
                ? ((t.__mobxInstanceCount += 1),
                  t.__mobxGlobals.UNCHANGED || (t.__mobxGlobals.UNCHANGED = {}),
                  t.__mobxGlobals)
                : ((t.__mobxInstanceCount = 1), (t.__mobxGlobals = new ge()))
              : (setTimeout(function () {
                  me || n(35);
                }, 1),
                new ge())
          );
        })();
      function Oe() {
        return we;
      }
      function Se() {
        var t = new ge();
        for (var e in t) -1 === be.indexOf(e) && (we[e] = t[e]);
        we.allowStateChanges = !we.enforceActions;
      }
      function Ae(t, e) {
        t.observers_.add(e),
          t.lowestObserverState_ > e.dependenciesState_ &&
            (t.lowestObserverState_ = e.dependenciesState_);
      }
      function je(t, e) {
        t.observers_.delete(e), 0 === t.observers_.size && xe(t);
      }
      function xe(t) {
        !1 === t.isPendingUnobservation &&
          ((t.isPendingUnobservation = !0), we.pendingUnobservations.push(t));
      }
      function ke() {
        we.inBatch++;
      }
      function Ee() {
        if (0 === --we.inBatch) {
          Ue();
          for (var t = we.pendingUnobservations, e = 0; e < t.length; e++) {
            var r = t[e];
            (r.isPendingUnobservation = !1),
              0 === r.observers_.size &&
                (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
                r instanceof te && r.suspend_());
          }
          we.pendingUnobservations = [];
        }
      }
      function Pe(t) {
        var e = we.trackingDerivation;
        return null !== e
          ? (e.runId_ !== t.lastAccessedBy_ &&
              ((t.lastAccessedBy_ = e.runId_),
              (e.newObserving_[e.unboundDepsCount_++] = t),
              !t.isBeingObserved &&
                we.trackingContext &&
                ((t.isBeingObserved = !0), t.onBO())),
            t.isBeingObserved)
          : (0 === t.observers_.size && we.inBatch > 0 && xe(t), !1);
      }
      function Re(t) {
        t.lowestObserverState_ !== ee.STALE_ &&
          ((t.lowestObserverState_ = ee.STALE_),
          t.observers_.forEach(function (t) {
            t.dependenciesState_ === ee.UP_TO_DATE_ && t.onBecomeStale_(),
              (t.dependenciesState_ = ee.STALE_);
          }));
      }
      var Ce = (function () {
        function t(t, e, r, n) {
          void 0 === t && (t = "Reaction"),
            (this.name_ = void 0),
            (this.onInvalidate_ = void 0),
            (this.errorHandler_ = void 0),
            (this.requiresObservable_ = void 0),
            (this.observing_ = []),
            (this.newObserving_ = []),
            (this.dependenciesState_ = ee.NOT_TRACKING_),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.unboundDepsCount_ = 0),
            (this.isDisposed_ = !1),
            (this.isScheduled_ = !1),
            (this.isTrackPending_ = !1),
            (this.isRunning_ = !1),
            (this.isTracing_ = re.NONE),
            (this.name_ = t),
            (this.onInvalidate_ = e),
            (this.errorHandler_ = r),
            (this.requiresObservable_ = n);
        }
        var e = t.prototype;
        return (
          (e.onBecomeStale_ = function () {
            this.schedule_();
          }),
          (e.schedule_ = function () {
            this.isScheduled_ ||
              ((this.isScheduled_ = !0), we.pendingReactions.push(this), Ue());
          }),
          (e.isScheduled = function () {
            return this.isScheduled_;
          }),
          (e.runReaction_ = function () {
            if (!this.isDisposed_) {
              ke(), (this.isScheduled_ = !1);
              var t = we.trackingContext;
              if (((we.trackingContext = this), ae(this))) {
                this.isTrackPending_ = !0;
                try {
                  this.onInvalidate_();
                } catch (t) {
                  this.reportExceptionInDerivation_(t);
                }
              }
              (we.trackingContext = t), Ee();
            }
          }),
          (e.track = function (t) {
            if (!this.isDisposed_) {
              ke();
              0, (this.isRunning_ = !0);
              var e = we.trackingContext;
              we.trackingContext = this;
              var r = pe(this, t, void 0);
              (we.trackingContext = e),
                (this.isRunning_ = !1),
                (this.isTrackPending_ = !1),
                this.isDisposed_ && ce(this),
                ie(r) && this.reportExceptionInDerivation_(r.cause),
                Ee();
            }
          }),
          (e.reportExceptionInDerivation_ = function (t) {
            var e = this;
            if (this.errorHandler_) this.errorHandler_(t, this);
            else {
              if (we.disableErrorBoundaries) throw t;
              var r = "[mobx] uncaught error in '" + this + "'";
              we.suppressReactionErrors || console.error(r, t),
                we.globalReactionErrorHandlers.forEach(function (r) {
                  return r(t, e);
                });
            }
          }),
          (e.dispose = function () {
            this.isDisposed_ ||
              ((this.isDisposed_ = !0),
              this.isRunning_ || (ke(), ce(this), Ee()));
          }),
          (e.getDisposer_ = function (t) {
            var e = this,
              r = function r() {
                e.dispose(),
                  null == t ||
                    null == t.removeEventListener ||
                    t.removeEventListener("abort", r);
              };
            return (
              null == t ||
                null == t.addEventListener ||
                t.addEventListener("abort", r),
              (r[W] = this),
              r
            );
          }),
          (e.toString = function () {
            return "Reaction[" + this.name_ + "]";
          }),
          (e.trace = function (t) {
            void 0 === t && (t = !1), Gr(this, t);
          }),
          t
        );
      })();
      function Te(t) {
        return (
          we.globalReactionErrorHandlers.push(t),
          function () {
            var e = we.globalReactionErrorHandlers.indexOf(t);
            e >= 0 && we.globalReactionErrorHandlers.splice(e, 1);
          }
        );
      }
      var Be = 100,
        Me = function (t) {
          return t();
        };
      function Ue() {
        we.inBatch > 0 || we.isRunningReactions || Me(Ie);
      }
      function Ie() {
        we.isRunningReactions = !0;
        for (var t = we.pendingReactions, e = 0; t.length > 0; ) {
          ++e === Be &&
            (console.error("[mobx] cycle in reaction: " + t[0]), t.splice(0));
          for (var r = t.splice(0), n = 0, o = r.length; n < o; n++)
            r[n].runReaction_();
        }
        we.isRunningReactions = !1;
      }
      var Le = A("Reaction", Ce);
      function Fe(t) {
        return (
          console.warn("[mobx.spy] Is a no-op in production builds"),
          function () {}
        );
      }
      var De = "action",
        Ve = "autoAction",
        Ne = "<unnamed action>",
        ze = Q(De),
        He = Q("action.bound", { bound: !0 }),
        We = Q(Ve, { autoAction: !0 }),
        Ge = Q("autoAction.bound", { autoAction: !0, bound: !0 });
      function Ke(t) {
        return function (e, r) {
          return b(e)
            ? Ht(e.name || Ne, e, t)
            : b(r)
              ? Ht(e, r, t)
              : H(r)
                ? (t ? We : ze).decorate_20223_(e, r)
                : g(r)
                  ? z(e, r, t ? We : ze)
                  : g(e)
                    ? N(Q(t ? Ve : De, { name: e, autoAction: t }))
                    : void 0;
        };
      }
      var qe = Ke(!1);
      Object.assign(qe, ze);
      var Ze = Ke(!0);
      function Xe(t) {
        return Wt(t.name || Ne, !1, t, this, void 0);
      }
      function Je(t) {
        return b(t) && !0 === t.isMobxAction;
      }
      function $e(t, e) {
        var r, n, o, i;
        void 0 === e && (e = l);
        var a,
          s = null != (r = null == (n = e) ? void 0 : n.name) ? r : "Autorun";
        if (!e.scheduler && !e.delay)
          a = new Ce(
            s,
            function () {
              this.track(c);
            },
            e.onError,
            e.requiresObservable,
          );
        else {
          var u = Qe(e),
            p = !1;
          a = new Ce(
            s,
            function () {
              p ||
                ((p = !0),
                u(function () {
                  (p = !1), a.isDisposed_ || a.track(c);
                }));
            },
            e.onError,
            e.requiresObservable,
          );
        }
        function c() {
          t(a);
        }
        return (
          (null != (o = e) && null != (o = o.signal) && o.aborted) ||
            a.schedule_(),
          a.getDisposer_(null == (i = e) ? void 0 : i.signal)
        );
      }
      Object.assign(Ze, We), (qe.bound = N(He)), (Ze.bound = N(Ge));
      var Ye = function (t) {
        return t();
      };
      function Qe(t) {
        return t.scheduler
          ? t.scheduler
          : t.delay
            ? function (e) {
                return setTimeout(e, t.delay);
              }
            : Ye;
      }
      function tr(t, e, r) {
        var n, o, i;
        void 0 === r && (r = l);
        var a,
          s,
          u,
          p = null != (n = r.name) ? n : "Reaction",
          c = qe(
            p,
            r.onError
              ? ((a = r.onError),
                (s = e),
                function () {
                  try {
                    return s.apply(this, arguments);
                  } catch (t) {
                    a.call(this, t);
                  }
                })
              : e,
          ),
          h = !r.scheduler && !r.delay,
          f = Qe(r),
          d = !0,
          y = !1,
          v = r.compareStructural ? Z.structural : r.equals || Z.default,
          b = new Ce(
            p,
            function () {
              d || h ? g() : y || ((y = !0), f(g));
            },
            r.onError,
            r.requiresObservable,
          );
        function g() {
          if (((y = !1), !b.isDisposed_)) {
            var e = !1,
              n = u;
            b.track(function () {
              var r = qt(!1, function () {
                return t(b);
              });
              (e = d || !v(u, r)), (u = r);
            }),
              ((d && r.fireImmediately) || (!d && e)) && c(u, n, b),
              (d = !1);
          }
        }
        return (
          (null != (o = r) && null != (o = o.signal) && o.aborted) ||
            b.schedule_(),
          b.getDisposer_(null == (i = r) ? void 0 : i.signal)
        );
      }
      var er = "onBO",
        rr = "onBUO";
      function nr(t, e, r) {
        return ir(er, t, e, r);
      }
      function or(t, e, r) {
        return ir(rr, t, e, r);
      }
      function ir(t, e, r, n) {
        var o = "function" == typeof n ? qn(e, r) : qn(e),
          i = b(n) ? n : r,
          a = t + "L";
        return (
          o[a] ? o[a].add(i) : (o[a] = new Set([i])),
          function () {
            var t = o[a];
            t && (t.delete(i), 0 === t.size && delete o[a]);
          }
        );
      }
      var ar = "never",
        sr = "always",
        ur = "observed";
      function pr(t) {
        !0 === t.isolateGlobalState &&
          (function () {
            if (
              ((we.pendingReactions.length ||
                we.inBatch ||
                we.isRunningReactions) &&
                n(36),
              (me = !0),
              _e)
            ) {
              var t = i();
              0 === --t.__mobxInstanceCount && (t.__mobxGlobals = void 0),
                (we = new ge());
            }
          })();
        var e,
          r,
          o = t.useProxies,
          a = t.enforceActions;
        if (
          (void 0 !== o &&
            (we.useProxies =
              o === sr || (o !== ar && "undefined" != typeof Proxy)),
          "ifavailable" === o && (we.verifyProxies = !0),
          void 0 !== a)
        ) {
          var s = a === sr ? sr : a === ur;
          (we.enforceActions = s),
            (we.allowStateChanges = !0 !== s && s !== sr);
        }
        [
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "disableErrorBoundaries",
          "safeDescriptors",
        ].forEach(function (e) {
          e in t && (we[e] = !!t[e]);
        }),
          (we.allowStateReads = !we.observableRequiresReaction),
          t.reactionScheduler &&
            ((e = t.reactionScheduler),
            (r = Me),
            (Me = function (t) {
              return e(function () {
                return r(t);
              });
            }));
      }
      function cr(t, e, r, n) {
        var o = C(e);
        return (
          Jn(function () {
            var e = Rn(t, n)[W];
            E(o).forEach(function (t) {
              e.extend_(t, o[t], !r || !(t in r) || r[t]);
            });
          }),
          t
        );
      }
      function lr(t, e) {
        return hr(qn(t, e));
      }
      function hr(t) {
        var e,
          r = { name: t.name_ };
        return (
          t.observing_ &&
            t.observing_.length > 0 &&
            (r.dependencies = ((e = t.observing_), Array.from(new Set(e))).map(
              hr,
            )),
          r
        );
      }
      function fr(t, e) {
        return dr(qn(t, e));
      }
      function dr(t) {
        var e = { name: t.name_ };
        return (
          (function (t) {
            return t.observers_ && t.observers_.size > 0;
          })(t) &&
            (e.observers = Array.from(
              (function (t) {
                return t.observers_;
              })(t),
            ).map(dr)),
          e
        );
      }
      var yr = 0;
      function vr() {
        this.message = "FLOW_CANCELLED";
      }
      function br(t) {
        return t instanceof vr;
      }
      vr.prototype = Object.create(Error.prototype);
      var gr = ot("flow"),
        _r = ot("flow.bound", { bound: !0 }),
        mr = Object.assign(function (t, e) {
          if (H(e)) return gr.decorate_20223_(t, e);
          if (g(e)) return z(t, e, gr);
          var r = t,
            n = r.name || "<unnamed flow>",
            o = function () {
              var t,
                e = arguments,
                o = ++yr,
                i = qe(n + " - runid: " + o + " - init", r).apply(this, e),
                a = void 0,
                s = new Promise(function (e, r) {
                  var s = 0;
                  function u(t) {
                    var e;
                    a = void 0;
                    try {
                      e = qe(
                        n + " - runid: " + o + " - yield " + s++,
                        i.next,
                      ).call(i, t);
                    } catch (t) {
                      return r(t);
                    }
                    c(e);
                  }
                  function p(t) {
                    var e;
                    a = void 0;
                    try {
                      e = qe(
                        n + " - runid: " + o + " - yield " + s++,
                        i.throw,
                      ).call(i, t);
                    } catch (t) {
                      return r(t);
                    }
                    c(e);
                  }
                  function c(t) {
                    if (!b(null == t ? void 0 : t.then))
                      return t.done
                        ? e(t.value)
                        : (a = Promise.resolve(t.value)).then(u, p);
                    t.then(c, r);
                  }
                  (t = r), u(void 0);
                });
              return (
                (s.cancel = qe(n + " - runid: " + o + " - cancel", function () {
                  try {
                    a && wr(a);
                    var e = i.return(void 0),
                      r = Promise.resolve(e.value);
                    r.then(v, v), wr(r), t(new vr());
                  } catch (e) {
                    t(e);
                  }
                })),
                s
              );
            };
          return (o.isMobXFlow = !0), o;
        }, gr);
      function wr(t) {
        b(t.cancel) && t.cancel();
      }
      function Or(t) {
        return t;
      }
      function Sr(t) {
        return !0 === (null == t ? void 0 : t.isMobXFlow);
      }
      function Ar(t, e, r) {
        var n;
        return (
          Sn(t) || gn(t) || $t(t) ? (n = Zn(t)) : Bn(t) && (n = Zn(t, e)),
          (n.dehancer = "function" == typeof e ? e : r),
          function () {
            n.dehancer = void 0;
          }
        );
      }
      function jr(t, e, r) {
        return b(r)
          ? (function (t, e, r) {
              return Zn(t, e).intercept_(r);
            })(t, e, r)
          : (function (t, e) {
              return Zn(t).intercept_(e);
            })(t, e);
      }
      function xr(t, e) {
        if (void 0 === e) return ne(t);
        if (!1 === Bn(t)) return !1;
        if (!t[W].values_.has(e)) return !1;
        var r = qn(t, e);
        return ne(r);
      }
      function kr(t) {
        return xr(t);
      }
      function Er(t, e) {
        return xr(t, e);
      }
      function Pr(t, e) {
        return (
          !!t &&
          (void 0 !== e
            ? !!Bn(t) && t[W].values_.has(e)
            : Bn(t) || !!t[W] || K(t) || Le(t) || ne(t))
        );
      }
      function Rr(t) {
        return Pr(t);
      }
      function Cr(t, e) {
        return Pr(t, e);
      }
      function Tr(t) {
        return Bn(t)
          ? t[W].keys_()
          : Sn(t) || xn(t)
            ? Array.from(t.keys())
            : gn(t)
              ? t.map(function (t, e) {
                  return e;
                })
              : void n(5);
      }
      function Br(t) {
        return Bn(t)
          ? Tr(t).map(function (e) {
              return t[e];
            })
          : Sn(t)
            ? Tr(t).map(function (e) {
                return t.get(e);
              })
            : xn(t)
              ? Array.from(t.values())
              : gn(t)
                ? t.slice()
                : void n(6);
      }
      function Mr(t) {
        return Bn(t)
          ? Tr(t).map(function (e) {
              return [e, t[e]];
            })
          : Sn(t)
            ? Tr(t).map(function (e) {
                return [e, t.get(e)];
              })
            : xn(t)
              ? Array.from(t.entries())
              : gn(t)
                ? t.map(function (t, e) {
                    return [e, t];
                  })
                : void n(7);
      }
      function Ur(t, e, r) {
        if (2 !== arguments.length || xn(t))
          Bn(t)
            ? t[W].set_(e, r)
            : Sn(t)
              ? t.set(e, r)
              : xn(t)
                ? t.add(e)
                : gn(t)
                  ? ("number" != typeof e && (e = parseInt(e, 10)),
                    e < 0 && n("Invalid index: '" + e + "'"),
                    ke(),
                    e >= t.length && (t.length = e + 1),
                    (t[e] = r),
                    Ee())
                  : n(8);
        else {
          ke();
          var o = e;
          try {
            for (var i in o) Ur(t, i, o[i]);
          } finally {
            Ee();
          }
        }
      }
      function Ir(t, e) {
        Bn(t)
          ? t[W].delete_(e)
          : Sn(t) || xn(t)
            ? t.delete(e)
            : gn(t)
              ? ("number" != typeof e && (e = parseInt(e, 10)), t.splice(e, 1))
              : n(9);
      }
      function Lr(t, e) {
        return Bn(t)
          ? t[W].has_(e)
          : Sn(t) || xn(t)
            ? t.has(e)
            : gn(t)
              ? e >= 0 && e < t.length
              : void n(10);
      }
      function Fr(t, e) {
        if (Lr(t, e))
          return Bn(t)
            ? t[W].get_(e)
            : Sn(t)
              ? t.get(e)
              : gn(t)
                ? t[e]
                : void n(11);
      }
      function Dr(t, e, r) {
        if (Bn(t)) return t[W].defineProperty_(e, r);
        n(39);
      }
      function Vr(t) {
        if (Bn(t)) return t[W].ownKeys_();
        n(38);
      }
      function Nr(t, e, r, n) {
        return b(r)
          ? (function (t, e, r, n) {
              return Zn(t, e).observe_(r, n);
            })(t, e, r, n)
          : (function (t, e, r) {
              return Zn(t).observe_(e, r);
            })(t, e, r);
      }
      function zr(t, e, r) {
        return t.set(e, r), r;
      }
      function Hr(t, e) {
        if (null == t || "object" != typeof t || t instanceof Date || !Rr(t))
          return t;
        if ($t(t) || ne(t)) return Hr(t.get(), e);
        if (e.has(t)) return e.get(t);
        if (gn(t)) {
          var r = zr(e, t, new Array(t.length));
          return (
            t.forEach(function (t, n) {
              r[n] = Hr(t, e);
            }),
            r
          );
        }
        if (xn(t)) {
          var n = zr(e, t, new Set());
          return (
            t.forEach(function (t) {
              n.add(Hr(t, e));
            }),
            n
          );
        }
        if (Sn(t)) {
          var o = zr(e, t, new Map());
          return (
            t.forEach(function (t, r) {
              o.set(r, Hr(t, e));
            }),
            o
          );
        }
        var i = zr(e, t, {});
        return (
          Vr(t).forEach(function (r) {
            p.propertyIsEnumerable.call(t, r) && (i[r] = Hr(t[r], e));
          }),
          i
        );
      }
      function Wr(t, e) {
        return Hr(t, new Map());
      }
      function Gr() {}
      function Kr(t, e) {
        void 0 === e && (e = void 0), ke();
        try {
          return t.apply(e);
        } finally {
          Ee();
        }
      }
      function qr(t, e, r) {
        return 1 === arguments.length || (e && "object" == typeof e)
          ? (function (t, e) {
              var r, n, o;
              0;
              if (null != e && null != (r = e.signal) && r.aborted)
                return Object.assign(
                  Promise.reject(new Error("WHEN_ABORTED")),
                  {
                    cancel: function () {
                      return null;
                    },
                  },
                );
              var i = new Promise(function (r, i) {
                var a,
                  s = Zr(t, r, I({}, e, { onError: i }));
                (n = function () {
                  s(), i(new Error("WHEN_CANCELLED"));
                }),
                  (o = function () {
                    s(), i(new Error("WHEN_ABORTED"));
                  }),
                  null == e ||
                    null == (a = e.signal) ||
                    null == a.addEventListener ||
                    a.addEventListener("abort", o);
              }).finally(function () {
                var t;
                return null == e ||
                  null == (t = e.signal) ||
                  null == t.removeEventListener
                  ? void 0
                  : t.removeEventListener("abort", o);
              });
              return (i.cancel = n), i;
            })(t, e)
          : Zr(t, e, r || {});
      }
      function Zr(t, e, r) {
        var n;
        if ("number" == typeof r.timeout) {
          var o = new Error("WHEN_TIMEOUT");
          n = setTimeout(function () {
            if (!a[W].isDisposed_) {
              if ((a(), !r.onError)) throw o;
              r.onError(o);
            }
          }, r.timeout);
        }
        r.name = "When";
        var i = Ht("When-effect", e),
          a = $e(function (e) {
            qt(!1, t) && (e.dispose(), n && clearTimeout(n), i());
          }, r);
        return a;
      }
      function Xr(t) {
        return t[W];
      }
      mr.bound = N(_r);
      var Jr = {
        has: function (t, e) {
          return Xr(t).has_(e);
        },
        get: function (t, e) {
          return Xr(t).get_(e);
        },
        set: function (t, e, r) {
          var n;
          return !!g(e) && (null == (n = Xr(t).set_(e, r, !0)) || n);
        },
        deleteProperty: function (t, e) {
          var r;
          return !!g(e) && (null == (r = Xr(t).delete_(e, !0)) || r);
        },
        defineProperty: function (t, e, r) {
          var n;
          return null == (n = Xr(t).defineProperty_(e, r)) || n;
        },
        ownKeys: function (t) {
          return Xr(t).ownKeys_();
        },
        preventExtensions: function (t) {
          n(13);
        },
      };
      function $r(t) {
        return void 0 !== t.interceptors_ && t.interceptors_.length > 0;
      }
      function Yr(t, e) {
        var r = t.interceptors_ || (t.interceptors_ = []);
        return (
          r.push(e),
          y(function () {
            var t = r.indexOf(e);
            -1 !== t && r.splice(t, 1);
          })
        );
      }
      function Qr(t, e) {
        var r = he();
        try {
          for (
            var o = [].concat(t.interceptors_ || []), i = 0, a = o.length;
            i < a && ((e = o[i](e)) && !e.type && n(14), e);
            i++
          );
          return e;
        } finally {
          fe(r);
        }
      }
      function tn(t) {
        return void 0 !== t.changeListeners_ && t.changeListeners_.length > 0;
      }
      function en(t, e) {
        var r = t.changeListeners_ || (t.changeListeners_ = []);
        return (
          r.push(e),
          y(function () {
            var t = r.indexOf(e);
            -1 !== t && r.splice(t, 1);
          })
        );
      }
      function rn(t, e) {
        var r = he(),
          n = t.changeListeners_;
        if (n) {
          for (var o = 0, i = (n = n.slice()).length; o < i; o++) n[o](e);
          fe(r);
        }
      }
      function nn(t, e, r) {
        return (
          Jn(function () {
            var n = Rn(t, r)[W];
            null != e ||
              (e = (function (t) {
                return R(t, V) || O(t, V, I({}, t[V])), t[V];
              })(t)),
              E(e).forEach(function (t) {
                return n.make_(t, e[t]);
              });
          }),
          t
        );
      }
      var on = Symbol("mobx-keys");
      function an(t, e, r) {
        return m(t)
          ? cr(t, t, e, r)
          : (Jn(function () {
              var n = Rn(t, r)[W];
              if (!t[on]) {
                var o = Object.getPrototypeOf(t),
                  i = new Set([].concat(E(t), E(o)));
                i.delete("constructor"), i.delete(W), O(o, on, i);
              }
              t[on].forEach(function (t) {
                return n.make_(t, !e || !(t in e) || e[t]);
              });
            }),
            t);
      }
      var sn = "splice",
        un = "update",
        pn = {
          get: function (t, e) {
            var r = t[W];
            return e === W
              ? r
              : "length" === e
                ? r.getArrayLength_()
                : "string" != typeof e || isNaN(e)
                  ? R(hn, e)
                    ? hn[e]
                    : t[e]
                  : r.get_(parseInt(e));
          },
          set: function (t, e, r) {
            var n = t[W];
            return (
              "length" === e && n.setArrayLength_(r),
              "symbol" == typeof e || isNaN(e)
                ? (t[e] = r)
                : n.set_(parseInt(e), r),
              !0
            );
          },
          preventExtensions: function () {
            n(15);
          },
        },
        cn = (function () {
          function t(t, e, r, n) {
            void 0 === t && (t = "ObservableArray"),
              (this.owned_ = void 0),
              (this.legacyMode_ = void 0),
              (this.atom_ = void 0),
              (this.values_ = []),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.enhancer_ = void 0),
              (this.dehancer = void 0),
              (this.proxy_ = void 0),
              (this.lastKnownLength_ = 0),
              (this.owned_ = r),
              (this.legacyMode_ = n),
              (this.atom_ = new G(t)),
              (this.enhancer_ = function (t, r) {
                return e(t, r, "ObservableArray[..]");
              });
          }
          var e = t.prototype;
          return (
            (e.dehanceValue_ = function (t) {
              return void 0 !== this.dehancer ? this.dehancer(t) : t;
            }),
            (e.dehanceValues_ = function (t) {
              return void 0 !== this.dehancer && t.length > 0
                ? t.map(this.dehancer)
                : t;
            }),
            (e.intercept_ = function (t) {
              return Yr(this, t);
            }),
            (e.observe_ = function (t, e) {
              return (
                void 0 === e && (e = !1),
                e &&
                  t({
                    observableKind: "array",
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: "splice",
                    index: 0,
                    added: this.values_.slice(),
                    addedCount: this.values_.length,
                    removed: [],
                    removedCount: 0,
                  }),
                en(this, t)
              );
            }),
            (e.getArrayLength_ = function () {
              return this.atom_.reportObserved(), this.values_.length;
            }),
            (e.setArrayLength_ = function (t) {
              ("number" != typeof t || isNaN(t) || t < 0) &&
                n("Out of range: " + t);
              var e = this.values_.length;
              if (t !== e)
                if (t > e) {
                  for (var r = new Array(t - e), o = 0; o < t - e; o++)
                    r[o] = void 0;
                  this.spliceWithArray_(e, 0, r);
                } else this.spliceWithArray_(t, e - t);
            }),
            (e.updateArrayLength_ = function (t, e) {
              t !== this.lastKnownLength_ && n(16),
                (this.lastKnownLength_ += e),
                this.legacyMode_ && e > 0 && Gn(t + e + 1);
            }),
            (e.spliceWithArray_ = function (t, e, r) {
              var n = this;
              this.atom_;
              var o = this.values_.length;
              if (
                (void 0 === t
                  ? (t = 0)
                  : t > o
                    ? (t = o)
                    : t < 0 && (t = Math.max(0, o + t)),
                (e =
                  1 === arguments.length
                    ? o - t
                    : null == e
                      ? 0
                      : Math.max(0, Math.min(e, o - t))),
                void 0 === r && (r = c),
                $r(this))
              ) {
                var i = Qr(this, {
                  object: this.proxy_,
                  type: sn,
                  index: t,
                  removedCount: e,
                  added: r,
                });
                if (!i) return c;
                (e = i.removedCount), (r = i.added);
              }
              if (
                ((r =
                  0 === r.length
                    ? r
                    : r.map(function (t) {
                        return n.enhancer_(t, void 0);
                      })),
                this.legacyMode_)
              ) {
                var a = r.length - e;
                this.updateArrayLength_(o, a);
              }
              var s = this.spliceItemsIntoValues_(t, e, r);
              return (
                (0 === e && 0 === r.length) || this.notifyArraySplice_(t, r, s),
                this.dehanceValues_(s)
              );
            }),
            (e.spliceItemsIntoValues_ = function (t, e, r) {
              var n;
              if (r.length < 1e4)
                return (n = this.values_).splice.apply(n, [t, e].concat(r));
              var o = this.values_.slice(t, t + e),
                i = this.values_.slice(t + e);
              this.values_.length += r.length - e;
              for (var a = 0; a < r.length; a++) this.values_[t + a] = r[a];
              for (var s = 0; s < i.length; s++)
                this.values_[t + r.length + s] = i[s];
              return o;
            }),
            (e.notifyArrayChildUpdate_ = function (t, e, r) {
              var n = !this.owned_ && !1,
                o = tn(this),
                i =
                  o || n
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        type: un,
                        debugObjectName: this.atom_.name_,
                        index: t,
                        newValue: e,
                        oldValue: r,
                      }
                    : null;
              this.atom_.reportChanged(), o && rn(this, i);
            }),
            (e.notifyArraySplice_ = function (t, e, r) {
              var n = !this.owned_ && !1,
                o = tn(this),
                i =
                  o || n
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        debugObjectName: this.atom_.name_,
                        type: sn,
                        index: t,
                        removed: r,
                        added: e,
                        removedCount: r.length,
                        addedCount: e.length,
                      }
                    : null;
              this.atom_.reportChanged(), o && rn(this, i);
            }),
            (e.get_ = function (t) {
              if (!(this.legacyMode_ && t >= this.values_.length))
                return (
                  this.atom_.reportObserved(),
                  this.dehanceValue_(this.values_[t])
                );
              console.warn("[mobx] Out of bounds read: " + t);
            }),
            (e.set_ = function (t, e) {
              var r = this.values_;
              if (
                (this.legacyMode_ && t > r.length && n(17, t, r.length),
                t < r.length)
              ) {
                this.atom_;
                var o = r[t];
                if ($r(this)) {
                  var i = Qr(this, {
                    type: un,
                    object: this.proxy_,
                    index: t,
                    newValue: e,
                  });
                  if (!i) return;
                  e = i.newValue;
                }
                (e = this.enhancer_(e, o)) !== o &&
                  ((r[t] = e), this.notifyArrayChildUpdate_(t, e, o));
              } else {
                for (
                  var a = new Array(t + 1 - r.length), s = 0;
                  s < a.length - 1;
                  s++
                )
                  a[s] = void 0;
                (a[a.length - 1] = e), this.spliceWithArray_(r.length, 0, a);
              }
            }),
            t
          );
        })();
      function ln(t, e, r, n) {
        return (
          void 0 === r && (r = "ObservableArray"),
          void 0 === n && (n = !1),
          d(),
          Jn(function () {
            var o = new cn(r, e, n, !1);
            S(o.values_, W, o);
            var i = new Proxy(o.values_, pn);
            return (
              (o.proxy_ = i), t && t.length && o.spliceWithArray_(0, 0, t), i
            );
          })
        );
      }
      var hn = {
        clear: function () {
          return this.splice(0);
        },
        replace: function (t) {
          var e = this[W];
          return e.spliceWithArray_(0, e.values_.length, t);
        },
        toJSON: function () {
          return this.slice();
        },
        splice: function (t, e) {
          for (
            var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2;
            o < r;
            o++
          )
            n[o - 2] = arguments[o];
          var i = this[W];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return i.spliceWithArray_(t);
            case 2:
              return i.spliceWithArray_(t, e);
          }
          return i.spliceWithArray_(t, e, n);
        },
        spliceWithArray: function (t, e, r) {
          return this[W].spliceWithArray_(t, e, r);
        },
        push: function () {
          for (
            var t = this[W], e = arguments.length, r = new Array(e), n = 0;
            n < e;
            n++
          )
            r[n] = arguments[n];
          return t.spliceWithArray_(t.values_.length, 0, r), t.values_.length;
        },
        pop: function () {
          return this.splice(Math.max(this[W].values_.length - 1, 0), 1)[0];
        },
        shift: function () {
          return this.splice(0, 1)[0];
        },
        unshift: function () {
          for (
            var t = this[W], e = arguments.length, r = new Array(e), n = 0;
            n < e;
            n++
          )
            r[n] = arguments[n];
          return t.spliceWithArray_(0, 0, r), t.values_.length;
        },
        reverse: function () {
          return (
            we.trackingDerivation && n(37, "reverse"),
            this.replace(this.slice().reverse()),
            this
          );
        },
        sort: function () {
          we.trackingDerivation && n(37, "sort");
          var t = this.slice();
          return t.sort.apply(t, arguments), this.replace(t), this;
        },
        remove: function (t) {
          var e = this[W],
            r = e.dehanceValues_(e.values_).indexOf(t);
          return r > -1 && (this.splice(r, 1), !0);
        },
      };
      function fn(t, e) {
        "function" == typeof Array.prototype[t] && (hn[t] = e(t));
      }
      function dn(t) {
        return function () {
          var e = this[W];
          e.atom_.reportObserved();
          var r = e.dehanceValues_(e.values_);
          return r[t].apply(r, arguments);
        };
      }
      function yn(t) {
        return function (e, r) {
          var n = this,
            o = this[W];
          return (
            o.atom_.reportObserved(),
            o.dehanceValues_(o.values_)[t](function (t, o) {
              return e.call(r, t, o, n);
            })
          );
        };
      }
      function vn(t) {
        return function () {
          var e = this,
            r = this[W];
          r.atom_.reportObserved();
          var n = r.dehanceValues_(r.values_),
            o = arguments[0];
          return (
            (arguments[0] = function (t, r, n) {
              return o(t, r, n, e);
            }),
            n[t].apply(n, arguments)
          );
        };
      }
      fn("at", dn),
        fn("concat", dn),
        fn("flat", dn),
        fn("includes", dn),
        fn("indexOf", dn),
        fn("join", dn),
        fn("lastIndexOf", dn),
        fn("slice", dn),
        fn("toString", dn),
        fn("toLocaleString", dn),
        fn("toSorted", dn),
        fn("toSpliced", dn),
        fn("with", dn),
        fn("every", yn),
        fn("filter", yn),
        fn("find", yn),
        fn("findIndex", yn),
        fn("findLast", yn),
        fn("findLastIndex", yn),
        fn("flatMap", yn),
        fn("forEach", yn),
        fn("map", yn),
        fn("some", yn),
        fn("toReversed", yn),
        fn("reduce", vn),
        fn("reduceRight", vn);
      var bn = A("ObservableArrayAdministration", cn);
      function gn(t) {
        return _(t) && bn(t[W]);
      }
      var _n = {},
        mn = "add",
        wn = "delete",
        On = (function () {
          function t(t, e, r) {
            var o = this;
            void 0 === e && (e = X),
              void 0 === r && (r = "ObservableMap"),
              (this.enhancer_ = void 0),
              (this.name_ = void 0),
              (this[W] = _n),
              (this.data_ = void 0),
              (this.hasMap_ = void 0),
              (this.keysAtom_ = void 0),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = e),
              (this.name_ = r),
              b(Map) || n(18),
              Jn(function () {
                (o.keysAtom_ = q("ObservableMap.keys()")),
                  (o.data_ = new Map()),
                  (o.hasMap_ = new Map()),
                  t && o.merge(t);
              });
          }
          var e = t.prototype;
          return (
            (e.has_ = function (t) {
              return this.data_.has(t);
            }),
            (e.has = function (t) {
              var e = this;
              if (!we.trackingDerivation) return this.has_(t);
              var r = this.hasMap_.get(t);
              if (!r) {
                var n = (r = new Jt(this.has_(t), J, "ObservableMap.key?", !1));
                this.hasMap_.set(t, n),
                  or(n, function () {
                    return e.hasMap_.delete(t);
                  });
              }
              return r.get();
            }),
            (e.set = function (t, e) {
              var r = this.has_(t);
              if ($r(this)) {
                var n = Qr(this, {
                  type: r ? un : mn,
                  object: this,
                  newValue: e,
                  name: t,
                });
                if (!n) return this;
                e = n.newValue;
              }
              return r ? this.updateValue_(t, e) : this.addValue_(t, e), this;
            }),
            (e.delete = function (t) {
              var e = this;
              if (
                (this.keysAtom_, $r(this)) &&
                !Qr(this, { type: wn, object: this, name: t })
              )
                return !1;
              if (this.has_(t)) {
                var r = tn(this),
                  n = r
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: wn,
                        object: this,
                        oldValue: this.data_.get(t).value_,
                        name: t,
                      }
                    : null;
                return (
                  Kr(function () {
                    var r;
                    e.keysAtom_.reportChanged(),
                      null == (r = e.hasMap_.get(t)) || r.setNewValue_(!1),
                      e.data_.get(t).setNewValue_(void 0),
                      e.data_.delete(t);
                  }),
                  r && rn(this, n),
                  !0
                );
              }
              return !1;
            }),
            (e.updateValue_ = function (t, e) {
              var r = this.data_.get(t);
              if ((e = r.prepareNewValue_(e)) !== we.UNCHANGED) {
                var n = tn(this),
                  o = n
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: un,
                        object: this,
                        oldValue: r.value_,
                        name: t,
                        newValue: e,
                      }
                    : null;
                0, r.setNewValue_(e), n && rn(this, o);
              }
            }),
            (e.addValue_ = function (t, e) {
              var r = this;
              this.keysAtom_,
                Kr(function () {
                  var n,
                    o = new Jt(e, r.enhancer_, "ObservableMap.key", !1);
                  r.data_.set(t, o),
                    (e = o.value_),
                    null == (n = r.hasMap_.get(t)) || n.setNewValue_(!0),
                    r.keysAtom_.reportChanged();
                });
              var n = tn(this),
                o = n
                  ? {
                      observableKind: "map",
                      debugObjectName: this.name_,
                      type: mn,
                      object: this,
                      name: t,
                      newValue: e,
                    }
                  : null;
              n && rn(this, o);
            }),
            (e.get = function (t) {
              return this.has(t)
                ? this.dehanceValue_(this.data_.get(t).get())
                : this.dehanceValue_(void 0);
            }),
            (e.dehanceValue_ = function (t) {
              return void 0 !== this.dehancer ? this.dehancer(t) : t;
            }),
            (e.keys = function () {
              return this.keysAtom_.reportObserved(), this.data_.keys();
            }),
            (e.values = function () {
              var t = this,
                e = this.keys();
              return eo({
                next: function () {
                  var r = e.next(),
                    n = r.done,
                    o = r.value;
                  return { done: n, value: n ? void 0 : t.get(o) };
                },
              });
            }),
            (e.entries = function () {
              var t = this,
                e = this.keys();
              return eo({
                next: function () {
                  var r = e.next(),
                    n = r.done,
                    o = r.value;
                  return { done: n, value: n ? void 0 : [o, t.get(o)] };
                },
              });
            }),
            (e[Symbol.iterator] = function () {
              return this.entries();
            }),
            (e.forEach = function (t, e) {
              for (var r, n = U(this); !(r = n()).done; ) {
                var o = r.value,
                  i = o[0],
                  a = o[1];
                t.call(e, a, i, this);
              }
            }),
            (e.merge = function (t) {
              var e = this;
              return (
                Sn(t) && (t = new Map(t)),
                Kr(function () {
                  var r, o, i;
                  m(t)
                    ? (function (t) {
                        var e = Object.keys(t);
                        if (!k) return e;
                        var r = Object.getOwnPropertySymbols(t);
                        return r.length
                          ? [].concat(
                              e,
                              r.filter(function (e) {
                                return p.propertyIsEnumerable.call(t, e);
                              }),
                            )
                          : e;
                      })(t).forEach(function (r) {
                        return e.set(r, t[r]);
                      })
                    : Array.isArray(t)
                      ? t.forEach(function (t) {
                          var r = t[0],
                            n = t[1];
                          return e.set(r, n);
                        })
                      : j(t)
                        ? ((r = t),
                          (o = Object.getPrototypeOf(r)),
                          (i = Object.getPrototypeOf(o)),
                          null !== Object.getPrototypeOf(i) && n(19, t),
                          t.forEach(function (t, r) {
                            return e.set(r, t);
                          }))
                        : null != t && n(20, t);
                }),
                this
              );
            }),
            (e.clear = function () {
              var t = this;
              Kr(function () {
                le(function () {
                  for (var e, r = U(t.keys()); !(e = r()).done; ) {
                    var n = e.value;
                    t.delete(n);
                  }
                });
              });
            }),
            (e.replace = function (t) {
              var e = this;
              return (
                Kr(function () {
                  for (
                    var r,
                      o = (function (t) {
                        if (j(t) || Sn(t)) return t;
                        if (Array.isArray(t)) return new Map(t);
                        if (m(t)) {
                          var e = new Map();
                          for (var r in t) e.set(r, t[r]);
                          return e;
                        }
                        return n(21, t);
                      })(t),
                      i = new Map(),
                      a = !1,
                      s = U(e.data_.keys());
                    !(r = s()).done;
                  ) {
                    var u = r.value;
                    if (!o.has(u))
                      if (e.delete(u)) a = !0;
                      else {
                        var p = e.data_.get(u);
                        i.set(u, p);
                      }
                  }
                  for (var c, l = U(o.entries()); !(c = l()).done; ) {
                    var h = c.value,
                      f = h[0],
                      d = h[1],
                      y = e.data_.has(f);
                    if ((e.set(f, d), e.data_.has(f))) {
                      var v = e.data_.get(f);
                      i.set(f, v), y || (a = !0);
                    }
                  }
                  if (!a)
                    if (e.data_.size !== i.size) e.keysAtom_.reportChanged();
                    else
                      for (
                        var b = e.data_.keys(),
                          g = i.keys(),
                          _ = b.next(),
                          w = g.next();
                        !_.done;
                      ) {
                        if (_.value !== w.value) {
                          e.keysAtom_.reportChanged();
                          break;
                        }
                        (_ = b.next()), (w = g.next());
                      }
                  e.data_ = i;
                }),
                this
              );
            }),
            (e.toString = function () {
              return "[object ObservableMap]";
            }),
            (e.toJSON = function () {
              return Array.from(this);
            }),
            (e.observe_ = function (t, e) {
              return en(this, t);
            }),
            (e.intercept_ = function (t) {
              return Yr(this, t);
            }),
            M(t, [
              {
                key: "size",
                get: function () {
                  return this.keysAtom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Map";
                },
              },
            ])
          );
        })(),
        Sn = A("ObservableMap", On);
      var An = {},
        jn = (function () {
          function t(t, e, r) {
            var o = this;
            void 0 === e && (e = X),
              void 0 === r && (r = "ObservableSet"),
              (this.name_ = void 0),
              (this[W] = An),
              (this.data_ = new Set()),
              (this.atom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = void 0),
              (this.name_ = r),
              b(Set) || n(22),
              (this.enhancer_ = function (t, n) {
                return e(t, n, r);
              }),
              Jn(function () {
                (o.atom_ = q(o.name_)), t && o.replace(t);
              });
          }
          var e = t.prototype;
          return (
            (e.dehanceValue_ = function (t) {
              return void 0 !== this.dehancer ? this.dehancer(t) : t;
            }),
            (e.clear = function () {
              var t = this;
              Kr(function () {
                le(function () {
                  for (var e, r = U(t.data_.values()); !(e = r()).done; ) {
                    var n = e.value;
                    t.delete(n);
                  }
                });
              });
            }),
            (e.forEach = function (t, e) {
              for (var r, n = U(this); !(r = n()).done; ) {
                var o = r.value;
                t.call(e, o, o, this);
              }
            }),
            (e.add = function (t) {
              var e = this;
              if (
                (this.atom_, $r(this)) &&
                !Qr(this, { type: mn, object: this, newValue: t })
              )
                return this;
              if (!this.has(t)) {
                Kr(function () {
                  e.data_.add(e.enhancer_(t, void 0)), e.atom_.reportChanged();
                });
                var r = !1,
                  n = tn(this),
                  o = n
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: mn,
                        object: this,
                        newValue: t,
                      }
                    : null;
                r, n && rn(this, o);
              }
              return this;
            }),
            (e.delete = function (t) {
              var e = this;
              if (
                $r(this) &&
                !Qr(this, { type: wn, object: this, oldValue: t })
              )
                return !1;
              if (this.has(t)) {
                var r = tn(this),
                  n = r
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: wn,
                        object: this,
                        oldValue: t,
                      }
                    : null;
                return (
                  Kr(function () {
                    e.atom_.reportChanged(), e.data_.delete(t);
                  }),
                  r && rn(this, n),
                  !0
                );
              }
              return !1;
            }),
            (e.has = function (t) {
              return (
                this.atom_.reportObserved(),
                this.data_.has(this.dehanceValue_(t))
              );
            }),
            (e.entries = function () {
              var t = 0,
                e = Array.from(this.keys()),
                r = Array.from(this.values());
              return eo({
                next: function () {
                  var n = t;
                  return (
                    (t += 1),
                    n < r.length
                      ? { value: [e[n], r[n]], done: !1 }
                      : { done: !0 }
                  );
                },
              });
            }),
            (e.keys = function () {
              return this.values();
            }),
            (e.values = function () {
              this.atom_.reportObserved();
              var t = this,
                e = 0,
                r = Array.from(this.data_.values());
              return eo({
                next: function () {
                  return e < r.length
                    ? { value: t.dehanceValue_(r[e++]), done: !1 }
                    : { done: !0 };
                },
              });
            }),
            (e.intersection = function (t) {
              return x(t)
                ? t.intersection(this)
                : new Set(this).intersection(t);
            }),
            (e.union = function (t) {
              return x(t) ? t.union(this) : new Set(this).union(t);
            }),
            (e.difference = function (t) {
              return new Set(this).difference(t);
            }),
            (e.symmetricDifference = function (t) {
              return x(t)
                ? t.symmetricDifference(this)
                : new Set(this).symmetricDifference(t);
            }),
            (e.isSubsetOf = function (t) {
              return new Set(this).isSubsetOf(t);
            }),
            (e.isSupersetOf = function (t) {
              return new Set(this).isSupersetOf(t);
            }),
            (e.isDisjointFrom = function (t) {
              return x(t)
                ? t.isDisjointFrom(this)
                : new Set(this).isDisjointFrom(t);
            }),
            (e.replace = function (t) {
              var e = this;
              return (
                xn(t) && (t = new Set(t)),
                Kr(function () {
                  Array.isArray(t) || x(t)
                    ? (e.clear(),
                      t.forEach(function (t) {
                        return e.add(t);
                      }))
                    : null != t && n("Cannot initialize set from " + t);
                }),
                this
              );
            }),
            (e.observe_ = function (t, e) {
              return en(this, t);
            }),
            (e.intercept_ = function (t) {
              return Yr(this, t);
            }),
            (e.toJSON = function () {
              return Array.from(this);
            }),
            (e.toString = function () {
              return "[object ObservableSet]";
            }),
            (e[Symbol.iterator] = function () {
              return this.values();
            }),
            M(t, [
              {
                key: "size",
                get: function () {
                  return this.atom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Set";
                },
              },
            ])
          );
        })(),
        xn = A("ObservableSet", jn),
        kn = Object.create(null),
        En = "remove",
        Pn = (function () {
          function t(t, e, r, n) {
            void 0 === e && (e = new Map()),
              void 0 === n && (n = gt),
              (this.target_ = void 0),
              (this.values_ = void 0),
              (this.name_ = void 0),
              (this.defaultAnnotation_ = void 0),
              (this.keysAtom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.proxy_ = void 0),
              (this.isPlainObject_ = void 0),
              (this.appliedAnnotations_ = void 0),
              (this.pendingKeys_ = void 0),
              (this.target_ = t),
              (this.values_ = e),
              (this.name_ = r),
              (this.defaultAnnotation_ = n),
              (this.keysAtom_ = new G("ObservableObject.keys")),
              (this.isPlainObject_ = m(this.target_));
          }
          var e = t.prototype;
          return (
            (e.getObservablePropValue_ = function (t) {
              return this.values_.get(t).get();
            }),
            (e.setObservablePropValue_ = function (t, e) {
              var r = this.values_.get(t);
              if (r instanceof te) return r.set(e), !0;
              if ($r(this)) {
                var n = Qr(this, {
                  type: un,
                  object: this.proxy_ || this.target_,
                  name: t,
                  newValue: e,
                });
                if (!n) return null;
                e = n.newValue;
              }
              if ((e = r.prepareNewValue_(e)) !== we.UNCHANGED) {
                var o = tn(this),
                  i = o
                    ? {
                        type: un,
                        observableKind: "object",
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        oldValue: r.value_,
                        name: t,
                        newValue: e,
                      }
                    : null;
                0, r.setNewValue_(e), o && rn(this, i);
              }
              return !0;
            }),
            (e.get_ = function (t) {
              return (
                we.trackingDerivation && !R(this.target_, t) && this.has_(t),
                this.target_[t]
              );
            }),
            (e.set_ = function (t, e, r) {
              return (
                void 0 === r && (r = !1),
                R(this.target_, t)
                  ? this.values_.has(t)
                    ? this.setObservablePropValue_(t, e)
                    : r
                      ? Reflect.set(this.target_, t, e)
                      : ((this.target_[t] = e), !0)
                  : this.extend_(
                      t,
                      {
                        value: e,
                        enumerable: !0,
                        writable: !0,
                        configurable: !0,
                      },
                      this.defaultAnnotation_,
                      r,
                    )
              );
            }),
            (e.has_ = function (t) {
              if (!we.trackingDerivation) return t in this.target_;
              this.pendingKeys_ || (this.pendingKeys_ = new Map());
              var e = this.pendingKeys_.get(t);
              return (
                e ||
                  ((e = new Jt(
                    t in this.target_,
                    J,
                    "ObservableObject.key?",
                    !1,
                  )),
                  this.pendingKeys_.set(t, e)),
                e.get()
              );
            }),
            (e.make_ = function (t, e) {
              if ((!0 === e && (e = this.defaultAnnotation_), !1 !== e)) {
                if ((Un(this, e, t), !(t in this.target_))) {
                  var r;
                  if (null != (r = this.target_[V]) && r[t]) return;
                  n(1, e.annotationType_, this.name_ + "." + t.toString());
                }
                for (var o = this.target_; o && o !== p; ) {
                  var i = s(o, t);
                  if (i) {
                    var a = e.make_(this, t, i, o);
                    if (0 === a) return;
                    if (1 === a) break;
                  }
                  o = Object.getPrototypeOf(o);
                }
                Mn(this, e, t);
              }
            }),
            (e.extend_ = function (t, e, r, n) {
              if (
                (void 0 === n && (n = !1),
                !0 === r && (r = this.defaultAnnotation_),
                !1 === r)
              )
                return this.defineProperty_(t, e, n);
              Un(this, r, t);
              var o = r.extend_(this, t, e, n);
              return o && Mn(this, r, t), o;
            }),
            (e.defineProperty_ = function (t, e, r) {
              void 0 === r && (r = !1), this.keysAtom_;
              try {
                ke();
                var n = this.delete_(t);
                if (!n) return n;
                if ($r(this)) {
                  var o = Qr(this, {
                    object: this.proxy_ || this.target_,
                    name: t,
                    type: mn,
                    newValue: e.value,
                  });
                  if (!o) return null;
                  var i = o.newValue;
                  e.value !== i && (e = I({}, e, { value: i }));
                }
                if (r) {
                  if (!Reflect.defineProperty(this.target_, t, e)) return !1;
                } else u(this.target_, t, e);
                this.notifyPropertyAddition_(t, e.value);
              } finally {
                Ee();
              }
              return !0;
            }),
            (e.defineObservableProperty_ = function (t, e, r, n) {
              void 0 === n && (n = !1), this.keysAtom_;
              try {
                ke();
                var o = this.delete_(t);
                if (!o) return o;
                if ($r(this)) {
                  var i = Qr(this, {
                    object: this.proxy_ || this.target_,
                    name: t,
                    type: mn,
                    newValue: e,
                  });
                  if (!i) return null;
                  e = i.newValue;
                }
                var a = Tn(t),
                  s = {
                    configurable: !we.safeDescriptors || this.isPlainObject_,
                    enumerable: !0,
                    get: a.get,
                    set: a.set,
                  };
                if (n) {
                  if (!Reflect.defineProperty(this.target_, t, s)) return !1;
                } else u(this.target_, t, s);
                var p = new Jt(e, r, "ObservableObject.key", !1);
                this.values_.set(t, p),
                  this.notifyPropertyAddition_(t, p.value_);
              } finally {
                Ee();
              }
              return !0;
            }),
            (e.defineComputedProperty_ = function (t, e, r) {
              void 0 === r && (r = !1), this.keysAtom_;
              try {
                ke();
                var n = this.delete_(t);
                if (!n) return n;
                if ($r(this))
                  if (
                    !Qr(this, {
                      object: this.proxy_ || this.target_,
                      name: t,
                      type: mn,
                      newValue: void 0,
                    })
                  )
                    return null;
                e.name || (e.name = "ObservableObject.key"),
                  (e.context = this.proxy_ || this.target_);
                var o = Tn(t),
                  i = {
                    configurable: !we.safeDescriptors || this.isPlainObject_,
                    enumerable: !1,
                    get: o.get,
                    set: o.set,
                  };
                if (r) {
                  if (!Reflect.defineProperty(this.target_, t, i)) return !1;
                } else u(this.target_, t, i);
                this.values_.set(t, new te(e)),
                  this.notifyPropertyAddition_(t, void 0);
              } finally {
                Ee();
              }
              return !0;
            }),
            (e.delete_ = function (t, e) {
              if (
                (void 0 === e && (e = !1), this.keysAtom_, !R(this.target_, t))
              )
                return !0;
              if (
                $r(this) &&
                !Qr(this, {
                  object: this.proxy_ || this.target_,
                  name: t,
                  type: En,
                })
              )
                return null;
              try {
                var r;
                ke();
                var n,
                  o = tn(this),
                  i = this.values_.get(t),
                  a = void 0;
                if (!i && o)
                  a = null == (n = s(this.target_, t)) ? void 0 : n.value;
                if (e) {
                  if (!Reflect.deleteProperty(this.target_, t)) return !1;
                } else delete this.target_[t];
                if (
                  (i &&
                    (this.values_.delete(t),
                    i instanceof Jt && (a = i.value_),
                    Re(i)),
                  this.keysAtom_.reportChanged(),
                  null == (r = this.pendingKeys_) ||
                    null == (r = r.get(t)) ||
                    r.set(t in this.target_),
                  o)
                ) {
                  var u = {
                    type: En,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: a,
                    name: t,
                  };
                  0, o && rn(this, u);
                }
              } finally {
                Ee();
              }
              return !0;
            }),
            (e.observe_ = function (t, e) {
              return en(this, t);
            }),
            (e.intercept_ = function (t) {
              return Yr(this, t);
            }),
            (e.notifyPropertyAddition_ = function (t, e) {
              var r,
                n = tn(this);
              if (n) {
                var o = n
                  ? {
                      type: mn,
                      observableKind: "object",
                      debugObjectName: this.name_,
                      object: this.proxy_ || this.target_,
                      name: t,
                      newValue: e,
                    }
                  : null;
                0, n && rn(this, o);
              }
              null == (r = this.pendingKeys_) ||
                null == (r = r.get(t)) ||
                r.set(!0),
                this.keysAtom_.reportChanged();
            }),
            (e.ownKeys_ = function () {
              return this.keysAtom_.reportObserved(), E(this.target_);
            }),
            (e.keys_ = function () {
              return this.keysAtom_.reportObserved(), Object.keys(this.target_);
            }),
            t
          );
        })();
      function Rn(t, e) {
        var r;
        if (R(t, W)) return t;
        var n =
            null != (r = null == e ? void 0 : e.name) ? r : "ObservableObject",
          o = new Pn(
            t,
            new Map(),
            String(n),
            (function (t) {
              var e;
              return t
                ? null != (e = t.defaultDecorator)
                  ? e
                  : _t(t)
                : void 0;
            })(e),
          );
        return O(t, W, o), t;
      }
      var Cn = A("ObservableObjectAdministration", Pn);
      function Tn(t) {
        return (
          kn[t] ||
          (kn[t] = {
            get: function () {
              return this[W].getObservablePropValue_(t);
            },
            set: function (e) {
              return this[W].setObservablePropValue_(t, e);
            },
          })
        );
      }
      function Bn(t) {
        return !!_(t) && Cn(t[W]);
      }
      function Mn(t, e, r) {
        var n;
        null == (n = t.target_[V]) || delete n[r];
      }
      function Un(t, e, r) {}
      var In,
        Ln,
        Fn = Hn(0),
        Dn = (function () {
          var t = !1,
            e = {};
          return (
            Object.defineProperty(e, "0", {
              set: function () {
                t = !0;
              },
            }),
            (Object.create(e)[0] = 1),
            !1 === t
          );
        })(),
        Vn = 0,
        Nn = function () {};
      (In = Nn),
        (Ln = Array.prototype),
        Object.setPrototypeOf
          ? Object.setPrototypeOf(In.prototype, Ln)
          : void 0 !== In.prototype.__proto__
            ? (In.prototype.__proto__ = Ln)
            : (In.prototype = Ln);
      var zn = (function (t) {
        function e(e, r, n, o) {
          var i;
          return (
            void 0 === n && (n = "ObservableArray"),
            void 0 === o && (o = !1),
            (i = t.call(this) || this),
            Jn(function () {
              var t = new cn(n, r, o, !0);
              (t.proxy_ = i),
                S(i, W, t),
                e && e.length && i.spliceWithArray(0, 0, e),
                Dn && Object.defineProperty(i, "0", Fn);
            }),
            i
          );
        }
        L(e, t);
        var r = e.prototype;
        return (
          (r.concat = function () {
            this[W].atom_.reportObserved();
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return Array.prototype.concat.apply(
              this.slice(),
              e.map(function (t) {
                return gn(t) ? t.slice() : t;
              }),
            );
          }),
          (r[Symbol.iterator] = function () {
            var t = this,
              e = 0;
            return eo({
              next: function () {
                return e < t.length
                  ? { value: t[e++], done: !1 }
                  : { done: !0, value: void 0 };
              },
            });
          }),
          M(e, [
            {
              key: "length",
              get: function () {
                return this[W].getArrayLength_();
              },
              set: function (t) {
                this[W].setArrayLength_(t);
              },
            },
            {
              key: Symbol.toStringTag,
              get: function () {
                return "Array";
              },
            },
          ])
        );
      })(Nn);
      function Hn(t) {
        return {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return this[W].get_(t);
          },
          set: function (e) {
            this[W].set_(t, e);
          },
        };
      }
      function Wn(t) {
        u(zn.prototype, "" + t, Hn(t));
      }
      function Gn(t) {
        if (t > Vn) {
          for (var e = Vn; e < t + 100; e++) Wn(e);
          Vn = t;
        }
      }
      function Kn(t, e, r) {
        return new zn(t, e, r);
      }
      function qn(t, e) {
        if ("object" == typeof t && null !== t) {
          if (gn(t)) return void 0 !== e && n(23), t[W].atom_;
          if (xn(t)) return t.atom_;
          if (Sn(t)) {
            if (void 0 === e) return t.keysAtom_;
            var r = t.data_.get(e) || t.hasMap_.get(e);
            return r || n(25, e, Xn(t)), r;
          }
          if (Bn(t)) {
            if (!e) return n(26);
            var o = t[W].values_.get(e);
            return o || n(27, e, Xn(t)), o;
          }
          if (K(t) || ne(t) || Le(t)) return t;
        } else if (b(t) && Le(t[W])) return t[W];
        n(28);
      }
      function Zn(t, e) {
        return (
          t || n(29),
          void 0 !== e
            ? Zn(qn(t, e))
            : K(t) || ne(t) || Le(t) || Sn(t) || xn(t)
              ? t
              : t[W]
                ? t[W]
                : void n(24, t)
        );
      }
      function Xn(t, e) {
        var r;
        if (void 0 !== e) r = qn(t, e);
        else {
          if (Je(t)) return t.name;
          r = Bn(t) || Sn(t) || xn(t) ? Zn(t) : qn(t);
        }
        return r.name_;
      }
      function Jn(t) {
        var e = he(),
          r = Zt(!0);
        ke();
        try {
          return t();
        } finally {
          Ee(), Xt(r), fe(e);
        }
      }
      Object.entries(hn).forEach(function (t) {
        var e = t[0],
          r = t[1];
        "concat" !== e && O(zn.prototype, e, r);
      }),
        Gn(1e3);
      var $n = p.toString;
      function Yn(t, e, r) {
        return void 0 === r && (r = -1), Qn(t, e, r);
      }
      function Qn(t, e, r, n, o) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return !1;
        if (t != t) return e != e;
        var i = typeof t;
        if ("function" !== i && "object" !== i && "object" != typeof e)
          return !1;
        var a = $n.call(t);
        if (a !== $n.call(e)) return !1;
        switch (a) {
          case "[object RegExp]":
          case "[object String]":
            return "" + t == "" + e;
          case "[object Number]":
            return +t != +t ? +e != +e : 0 === +t ? 1 / +t == 1 / e : +t === +e;
          case "[object Date]":
          case "[object Boolean]":
            return +t === +e;
          case "[object Symbol]":
            return (
              "undefined" != typeof Symbol &&
              Symbol.valueOf.call(t) === Symbol.valueOf.call(e)
            );
          case "[object Map]":
          case "[object Set]":
            r >= 0 && r++;
        }
        (t = to(t)), (e = to(e));
        var s = "[object Array]" === a;
        if (!s) {
          if ("object" != typeof t || "object" != typeof e) return !1;
          var u = t.constructor,
            p = e.constructor;
          if (
            u !== p &&
            !(b(u) && u instanceof u && b(p) && p instanceof p) &&
            "constructor" in t &&
            "constructor" in e
          )
            return !1;
        }
        if (0 === r) return !1;
        r < 0 && (r = -1), (o = o || []);
        for (var c = (n = n || []).length; c--; )
          if (n[c] === t) return o[c] === e;
        if ((n.push(t), o.push(e), s)) {
          if ((c = t.length) !== e.length) return !1;
          for (; c--; ) if (!Qn(t[c], e[c], r - 1, n, o)) return !1;
        } else {
          var l,
            h = Object.keys(t);
          if (((c = h.length), Object.keys(e).length !== c)) return !1;
          for (; c--; )
            if (!R(e, (l = h[c])) || !Qn(t[l], e[l], r - 1, n, o)) return !1;
        }
        return n.pop(), o.pop(), !0;
      }
      function to(t) {
        return gn(t)
          ? t.slice()
          : j(t) || Sn(t) || x(t) || xn(t)
            ? Array.from(t.entries())
            : t;
      }
      function eo(t) {
        return (t[Symbol.iterator] = ro), t;
      }
      function ro() {
        return this;
      }
      ["Symbol", "Map", "Set"].forEach(function (t) {
        void 0 === i()[t] &&
          n("MobX requires global '" + t + "' to be available or polyfilled");
      }),
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
          __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: Fe,
            extras: { getDebugName: Xn },
            $mobx: W,
          });
    },
    961: (t, e, r) => {
      "use strict";
      !(function t() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
          } catch (t) {
            console.error(t);
          }
      })(),
        (t.exports = r(2551));
    },
    7960: (t, e, r) => {
      "use strict";
      var n,
        o =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          },
        i = (function () {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, r, n) {
            return r && t(e.prototype, r), n && t(e, n), e;
          };
        })(),
        a = r(6540),
        s = (n = a) && n.__esModule ? n : { default: n };
      var u = {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: -1,
          visibility: "hidden",
          pointerEvents: "none",
        },
        p = { position: "absolute", left: 0, top: 0, transition: "0s" };
      var c = (function (t) {
        function e(t, r) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var n = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r));
          return (
            (n._expandRef = null),
            (n._shrinkRef = null),
            (n._node = null),
            (n._lastRect = {}),
            (n._handleScroll = n._handleScroll.bind(n)),
            (n._reflow = n._reflow.bind(n)),
            (n._handleRef = n._handleRef.bind(n)),
            (n._handleExpandRef = n._handleExpandRef.bind(n)),
            (n._handleShrinkRef = n._handleShrinkRef.bind(n)),
            n
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e,
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, t),
          i(e, null, [
            {
              key: "_handleScroll",
              value: function (t) {
                for (var r = e._scrollListeners.length, n = 0; n < r; n++)
                  e._scrollListeners[n].call(void 0, t);
              },
            },
            {
              key: "_handleResize",
              value: function (t) {
                for (var r = e._resizeListeners.length, n = 0; n < r; n++)
                  e._resizeListeners[n].call(void 0, t);
              },
            },
            {
              key: "addScrollListener",
              value: function (t) {
                0 === e._scrollListeners.length &&
                  document.addEventListener("scroll", e._handleScroll, !0);
                var r = !0;
                return (
                  e._scrollListeners.push(t),
                  function () {
                    r &&
                      ((r = !1),
                      e._scrollListeners.splice(
                        e._scrollListeners.indexOf(t),
                        1,
                      ),
                      0 === e._scrollListeners.length &&
                        document.removeEventListener(
                          "scroll",
                          e._handleScroll,
                          !0,
                        ));
                  }
                );
              },
            },
            {
              key: "addResizeListener",
              value: function (t) {
                0 === e._resizeListeners.length &&
                  window.addEventListener("resize", e._handleResize, !0);
                var r = !0;
                return (
                  e._resizeListeners.push(t),
                  function () {
                    r &&
                      ((r = !1),
                      e._resizeListeners.splice(
                        e._resizeListeners.indexOf(t),
                        1,
                      ),
                      0 === e._resizeListeners.length &&
                        window.removeEventListener(
                          "resize",
                          e._handleResize,
                          !0,
                        ));
                  }
                );
              },
            },
          ]),
          i(e, [
            {
              key: "componentDidMount",
              value: function () {
                this._reflow(),
                  (this._removeScroll = e.addScrollListener(
                    this._handleScroll,
                  )),
                  (this.props.onPosition || this.props.onReflow) &&
                    (this._removeResize = e.addResizeListener(this._reflow));
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function (t) {
                (!t.onPosition && !t.onReflow) || this._removeResize
                  ? t.onPosition ||
                    t.onReflow ||
                    !this._removeResize ||
                    (this._removeResize(), (this._removeResize = null))
                  : (this._removeResize = e.addResizeListener(this._reflow));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this._removeScroll &&
                  (this._removeScroll(), (this._removeScroll = null)),
                  this._removeResize &&
                    (this._removeResize(), (this._removeResize = null));
              },
            },
            {
              key: "_handleScroll",
              value: function (t) {
                (this.props.onPosition ||
                  this.props.onReflow ||
                  this.props.onResize) &&
                  (this._globalScollTarget(t.target) ||
                    this._refScrollTarget(t.target) ||
                    this._ancestorScollTarget(t.target)) &&
                  this._reflow();
              },
            },
            {
              key: "_globalScollTarget",
              value: function (t) {
                return (
                  (this.props.onPosition || this.props.onReflow) &&
                  (t === document ||
                    t === document.documentElement ||
                    t === document.body)
                );
              },
            },
            {
              key: "_refScrollTarget",
              value: function (t) {
                if (t === this._expandRef || t === this._shrinkRef) {
                  var e = t.offsetWidth,
                    r = t.offsetHeight;
                  if (e !== this._lastWidth || r !== this._lastHeight)
                    return (
                      (this._lastWidth = e),
                      (this._lastHeight = r),
                      this._reset(this._expandRef),
                      this._reset(this._shrinkRef),
                      !0
                    );
                }
                return !1;
              },
            },
            {
              key: "_ancestorScollTarget",
              value: function (t) {
                return (
                  (this.props.onPosition || this.props.onReflow) &&
                  this._node &&
                  (function (t, e) {
                    for (var r = t.parentNode; r; ) {
                      if (r === e) return !0;
                      r = r.parentNode;
                    }
                    return !1;
                  })(this._node, t)
                );
              },
            },
            {
              key: "_reflow",
              value: function () {
                if (this._node && this._node.parentNode instanceof Element) {
                  var t = this._node.parentNode.getBoundingClientRect(),
                    e =
                      t.width !== this._lastRect.width ||
                      t.height !== this._lastRect.height,
                    r =
                      t.top !== this._lastRect.top ||
                      t.left !== this._lastRect.left;
                  (this._lastRect = t),
                    e && this.props.onResize && this.props.onResize(t),
                    r && this.props.onPosition && this.props.onPosition(t),
                    (e || r) && this.props.onReflow && this.props.onReflow(t);
                }
              },
            },
            {
              key: "_reset",
              value: function (t) {
                t && ((t.scrollLeft = 1e5), (t.scrollTop = 1e5));
              },
            },
            {
              key: "_handleRef",
              value: function (t) {
                this._node = t;
              },
            },
            {
              key: "_handleExpandRef",
              value: function (t) {
                this._reset(t), (this._expandRef = t);
              },
            },
            {
              key: "_handleShrinkRef",
              value: function (t) {
                this._reset(t), (this._shrinkRef = t);
              },
            },
            {
              key: "render",
              value: function () {
                return this.props.onResize || this.props.onReflow
                  ? s.default.createElement(
                      "div",
                      { style: u, ref: this._handleRef },
                      s.default.createElement(
                        "div",
                        { ref: this._handleExpandRef, style: u },
                        s.default.createElement("div", {
                          style: o({}, p, { width: 1e5, height: 1e5 }),
                        }),
                      ),
                      s.default.createElement(
                        "div",
                        { ref: this._handleShrinkRef, style: u },
                        s.default.createElement("div", {
                          style: o({}, p, { width: "200%", height: "200%" }),
                        }),
                      ),
                    )
                  : s.default.createElement("noscript", {
                      ref: this._handleRef,
                    });
              },
            },
          ]),
          e
        );
      })(s.default.Component);
      (c.displayName = "ResizeObserver"),
        (c._scrollListeners = []),
        (c._resizeListeners = []),
        (e.A = c);
    },
    5735: (t) => {
      t.exports = (function (t) {
        "use strict";
        var e = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
        ];
        function r(t, e) {
          var r = t[0],
            n = t[1],
            o = t[2],
            i = t[3];
          (n =
            ((((n +=
              ((((o =
                ((((o +=
                  ((((i =
                    ((((i +=
                      ((((r =
                        ((((r +=
                          (((n & o) | (~n & i)) + e[0] - 680876936) | 0) <<
                          7) |
                          (r >>> 25)) +
                          n) |
                        0) &
                        n) |
                        (~r & o)) +
                        e[1] -
                        389564586) |
                      0) <<
                      12) |
                      (i >>> 20)) +
                      r) |
                    0) &
                    r) |
                    (~i & n)) +
                    e[2] +
                    606105819) |
                  0) <<
                  17) |
                  (o >>> 15)) +
                  i) |
                0) &
                i) |
                (~o & r)) +
                e[3] -
                1044525330) |
              0) <<
              22) |
              (n >>> 10)) +
              o) |
            0),
            (n =
              ((((n +=
                ((((o =
                  ((((o +=
                    ((((i =
                      ((((i +=
                        ((((r =
                          ((((r +=
                            (((n & o) | (~n & i)) + e[4] - 176418897) | 0) <<
                            7) |
                            (r >>> 25)) +
                            n) |
                          0) &
                          n) |
                          (~r & o)) +
                          e[5] +
                          1200080426) |
                        0) <<
                        12) |
                        (i >>> 20)) +
                        r) |
                      0) &
                      r) |
                      (~i & n)) +
                      e[6] -
                      1473231341) |
                    0) <<
                    17) |
                    (o >>> 15)) +
                    i) |
                  0) &
                  i) |
                  (~o & r)) +
                  e[7] -
                  45705983) |
                0) <<
                22) |
                (n >>> 10)) +
                o) |
              0),
            (n =
              ((((n +=
                ((((o =
                  ((((o +=
                    ((((i =
                      ((((i +=
                        ((((r =
                          ((((r +=
                            (((n & o) | (~n & i)) + e[8] + 1770035416) | 0) <<
                            7) |
                            (r >>> 25)) +
                            n) |
                          0) &
                          n) |
                          (~r & o)) +
                          e[9] -
                          1958414417) |
                        0) <<
                        12) |
                        (i >>> 20)) +
                        r) |
                      0) &
                      r) |
                      (~i & n)) +
                      e[10] -
                      42063) |
                    0) <<
                    17) |
                    (o >>> 15)) +
                    i) |
                  0) &
                  i) |
                  (~o & r)) +
                  e[11] -
                  1990404162) |
                0) <<
                22) |
                (n >>> 10)) +
                o) |
              0),
            (n =
              ((((n +=
                ((((o =
                  ((((o +=
                    ((((i =
                      ((((i +=
                        ((((r =
                          ((((r +=
                            (((n & o) | (~n & i)) + e[12] + 1804603682) | 0) <<
                            7) |
                            (r >>> 25)) +
                            n) |
                          0) &
                          n) |
                          (~r & o)) +
                          e[13] -
                          40341101) |
                        0) <<
                        12) |
                        (i >>> 20)) +
                        r) |
                      0) &
                      r) |
                      (~i & n)) +
                      e[14] -
                      1502002290) |
                    0) <<
                    17) |
                    (o >>> 15)) +
                    i) |
                  0) &
                  i) |
                  (~o & r)) +
                  e[15] +
                  1236535329) |
                0) <<
                22) |
                (n >>> 10)) +
                o) |
              0),
            (n =
              ((((n +=
                ((((o =
                  ((((o +=
                    ((((i =
                      ((((i +=
                        ((((r =
                          ((((r +=
                            (((n & i) | (o & ~i)) + e[1] - 165796510) | 0) <<
                            5) |
                            (r >>> 27)) +
                            n) |
                          0) &
                          o) |
                          (n & ~o)) +
                          e[6] -
                          1069501632) |
                        0) <<
                        9) |
                        (i >>> 23)) +
                        r) |
                      0) &
                      n) |
                      (r & ~n)) +
                      e[11] +
                      643717713) |
                    0) <<
                    14) |
                    (o >>> 18)) +
                    i) |
                  0) &
                  r) |
                  (i & ~r)) +
                  e[0] -
                  373897302) |
                0) <<
                20) |
                (n >>> 12)) +
                o) |
              0),
            (n =
              ((((n +=
                ((((o =
                  ((((o +=
                    ((((i =
                      ((((i +=
                        ((((r =
                          ((((r +=
                            (((n & i) | (o & ~i)) + e[5] - 701558691) | 0) <<
                            5) |
                            (r >>> 27)) +
                            n) |
                          0) &
                          o) |
                          (n & ~o)) +
                          e[10] +
                          38016083) |
                        0) <<
                        9) |
                        (i >>> 23)) +
                        r) |
                      0) &
                      n) |
                      (r & ~n)) +
                      e[15] -
                      660478335) |
                    0) <<
                    14) |
                    (o >>> 18)) +
                    i) |
                  0) &
                  r) |
                  (i & ~r)) +
                  e[4] -
                  405537848) |
                0) <<
                20) |
                (n >>> 12)) +
                o) |
              0),
            (n =
              ((((n +=
                ((((o =
                  ((((o +=
                    ((((i =
                      ((((i +=
                        ((((r =
                          ((((r +=
                            (((n & i) | (o & ~i)) + e[9] + 568446438) | 0) <<
                            5) |
                            (r >>> 27)) +
                            n) |
                          0) &
                          o) |
                          (n & ~o)) +
                          e[14] -
                          1019803690) |
                        0) <<
                        9) |
                        (i >>> 23)) +
                        r) |
                      0) &
                      n) |
                      (r & ~n)) +
                      e[3] -
                      187363961) |
                    0) <<
                    14) |
                    (o >>> 18)) +
                    i) |
                  0) &
                  r) |
                  (i & ~r)) +
                  e[8] +
                  1163531501) |
                0) <<
                20) |
                (n >>> 12)) +
                o) |
              0),
            (n =
              ((((n +=
                ((((o =
                  ((((o +=
                    ((((i =
                      ((((i +=
                        ((((r =
                          ((((r +=
                            (((n & i) | (o & ~i)) + e[13] - 1444681467) | 0) <<
                            5) |
                            (r >>> 27)) +
                            n) |
                          0) &
                          o) |
                          (n & ~o)) +
                          e[2] -
                          51403784) |
                        0) <<
                        9) |
                        (i >>> 23)) +
                        r) |
                      0) &
                      n) |
                      (r & ~n)) +
                      e[7] +
                      1735328473) |
                    0) <<
                    14) |
                    (o >>> 18)) +
                    i) |
                  0) &
                  r) |
                  (i & ~r)) +
                  e[12] -
                  1926607734) |
                0) <<
                20) |
                (n >>> 12)) +
                o) |
              0),
            (n =
              ((((n +=
                (((o =
                  ((((o +=
                    (((i =
                      ((((i +=
                        (((r =
                          ((((r += ((n ^ o ^ i) + e[5] - 378558) | 0) << 4) |
                            (r >>> 28)) +
                            n) |
                          0) ^
                          n ^
                          o) +
                          e[8] -
                          2022574463) |
                        0) <<
                        11) |
                        (i >>> 21)) +
                        r) |
                      0) ^
                      r ^
                      n) +
                      e[11] +
                      1839030562) |
                    0) <<
                    16) |
                    (o >>> 16)) +
                    i) |
                  0) ^
                  i ^
                  r) +
                  e[14] -
                  35309556) |
                0) <<
                23) |
                (n >>> 9)) +
                o) |
              0),
            (n =
              ((((n +=
                (((o =
                  ((((o +=
                    (((i =
                      ((((i +=
                        (((r =
                          ((((r += ((n ^ o ^ i) + e[1] - 1530992060) | 0) <<
                            4) |
                            (r >>> 28)) +
                            n) |
                          0) ^
                          n ^
                          o) +
                          e[4] +
                          1272893353) |
                        0) <<
                        11) |
                        (i >>> 21)) +
                        r) |
                      0) ^
                      r ^
                      n) +
                      e[7] -
                      155497632) |
                    0) <<
                    16) |
                    (o >>> 16)) +
                    i) |
                  0) ^
                  i ^
                  r) +
                  e[10] -
                  1094730640) |
                0) <<
                23) |
                (n >>> 9)) +
                o) |
              0),
            (n =
              ((((n +=
                (((o =
                  ((((o +=
                    (((i =
                      ((((i +=
                        (((r =
                          ((((r += ((n ^ o ^ i) + e[13] + 681279174) | 0) <<
                            4) |
                            (r >>> 28)) +
                            n) |
                          0) ^
                          n ^
                          o) +
                          e[0] -
                          358537222) |
                        0) <<
                        11) |
                        (i >>> 21)) +
                        r) |
                      0) ^
                      r ^
                      n) +
                      e[3] -
                      722521979) |
                    0) <<
                    16) |
                    (o >>> 16)) +
                    i) |
                  0) ^
                  i ^
                  r) +
                  e[6] +
                  76029189) |
                0) <<
                23) |
                (n >>> 9)) +
                o) |
              0),
            (n =
              ((((n +=
                (((o =
                  ((((o +=
                    (((i =
                      ((((i +=
                        (((r =
                          ((((r += ((n ^ o ^ i) + e[9] - 640364487) | 0) << 4) |
                            (r >>> 28)) +
                            n) |
                          0) ^
                          n ^
                          o) +
                          e[12] -
                          421815835) |
                        0) <<
                        11) |
                        (i >>> 21)) +
                        r) |
                      0) ^
                      r ^
                      n) +
                      e[15] +
                      530742520) |
                    0) <<
                    16) |
                    (o >>> 16)) +
                    i) |
                  0) ^
                  i ^
                  r) +
                  e[2] -
                  995338651) |
                0) <<
                23) |
                (n >>> 9)) +
                o) |
              0),
            (n =
              ((((n +=
                (((i =
                  ((((i +=
                    ((n ^
                      ((r =
                        ((((r += ((o ^ (n | ~i)) + e[0] - 198630844) | 0) <<
                          6) |
                          (r >>> 26)) +
                          n) |
                        0) |
                        ~o)) +
                      e[7] +
                      1126891415) |
                    0) <<
                    10) |
                    (i >>> 22)) +
                    r) |
                  0) ^
                  ((o =
                    ((((o += ((r ^ (i | ~n)) + e[14] - 1416354905) | 0) << 15) |
                      (o >>> 17)) +
                      i) |
                    0) |
                    ~r)) +
                  e[5] -
                  57434055) |
                0) <<
                21) |
                (n >>> 11)) +
                o) |
              0),
            (n =
              ((((n +=
                (((i =
                  ((((i +=
                    ((n ^
                      ((r =
                        ((((r += ((o ^ (n | ~i)) + e[12] + 1700485571) | 0) <<
                          6) |
                          (r >>> 26)) +
                          n) |
                        0) |
                        ~o)) +
                      e[3] -
                      1894986606) |
                    0) <<
                    10) |
                    (i >>> 22)) +
                    r) |
                  0) ^
                  ((o =
                    ((((o += ((r ^ (i | ~n)) + e[10] - 1051523) | 0) << 15) |
                      (o >>> 17)) +
                      i) |
                    0) |
                    ~r)) +
                  e[1] -
                  2054922799) |
                0) <<
                21) |
                (n >>> 11)) +
                o) |
              0),
            (n =
              ((((n +=
                (((i =
                  ((((i +=
                    ((n ^
                      ((r =
                        ((((r += ((o ^ (n | ~i)) + e[8] + 1873313359) | 0) <<
                          6) |
                          (r >>> 26)) +
                          n) |
                        0) |
                        ~o)) +
                      e[15] -
                      30611744) |
                    0) <<
                    10) |
                    (i >>> 22)) +
                    r) |
                  0) ^
                  ((o =
                    ((((o += ((r ^ (i | ~n)) + e[6] - 1560198380) | 0) << 15) |
                      (o >>> 17)) +
                      i) |
                    0) |
                    ~r)) +
                  e[13] +
                  1309151649) |
                0) <<
                21) |
                (n >>> 11)) +
                o) |
              0),
            (n =
              ((((n +=
                (((i =
                  ((((i +=
                    ((n ^
                      ((r =
                        ((((r += ((o ^ (n | ~i)) + e[4] - 145523070) | 0) <<
                          6) |
                          (r >>> 26)) +
                          n) |
                        0) |
                        ~o)) +
                      e[11] -
                      1120210379) |
                    0) <<
                    10) |
                    (i >>> 22)) +
                    r) |
                  0) ^
                  ((o =
                    ((((o += ((r ^ (i | ~n)) + e[2] + 718787259) | 0) << 15) |
                      (o >>> 17)) +
                      i) |
                    0) |
                    ~r)) +
                  e[9] -
                  343485551) |
                0) <<
                21) |
                (n >>> 11)) +
                o) |
              0),
            (t[0] = (r + t[0]) | 0),
            (t[1] = (n + t[1]) | 0),
            (t[2] = (o + t[2]) | 0),
            (t[3] = (i + t[3]) | 0);
        }
        function n(t) {
          var e,
            r = [];
          for (e = 0; e < 64; e += 4)
            r[e >> 2] =
              t.charCodeAt(e) +
              (t.charCodeAt(e + 1) << 8) +
              (t.charCodeAt(e + 2) << 16) +
              (t.charCodeAt(e + 3) << 24);
          return r;
        }
        function o(t) {
          var e,
            r = [];
          for (e = 0; e < 64; e += 4)
            r[e >> 2] =
              t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
          return r;
        }
        function i(t) {
          var e,
            o,
            i,
            a,
            s,
            u,
            p = t.length,
            c = [1732584193, -271733879, -1732584194, 271733878];
          for (e = 64; e <= p; e += 64) r(c, n(t.substring(e - 64, e)));
          for (
            o = (t = t.substring(e - 64)).length,
              i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              e = 0;
            e < o;
            e += 1
          )
            i[e >> 2] |= t.charCodeAt(e) << ((e % 4) << 3);
          if (((i[e >> 2] |= 128 << ((e % 4) << 3)), e > 55))
            for (r(c, i), e = 0; e < 16; e += 1) i[e] = 0;
          return (
            (a = (a = 8 * p).toString(16).match(/(.*?)(.{0,8})$/)),
            (s = parseInt(a[2], 16)),
            (u = parseInt(a[1], 16) || 0),
            (i[14] = s),
            (i[15] = u),
            r(c, i),
            c
          );
        }
        function a(t) {
          var e,
            n,
            i,
            a,
            s,
            u,
            p = t.length,
            c = [1732584193, -271733879, -1732584194, 271733878];
          for (e = 64; e <= p; e += 64) r(c, o(t.subarray(e - 64, e)));
          for (
            n = (t = e - 64 < p ? t.subarray(e - 64) : new Uint8Array(0))
              .length,
              i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              e = 0;
            e < n;
            e += 1
          )
            i[e >> 2] |= t[e] << ((e % 4) << 3);
          if (((i[e >> 2] |= 128 << ((e % 4) << 3)), e > 55))
            for (r(c, i), e = 0; e < 16; e += 1) i[e] = 0;
          return (
            (a = (a = 8 * p).toString(16).match(/(.*?)(.{0,8})$/)),
            (s = parseInt(a[2], 16)),
            (u = parseInt(a[1], 16) || 0),
            (i[14] = s),
            (i[15] = u),
            r(c, i),
            c
          );
        }
        function s(t) {
          var r,
            n = "";
          for (r = 0; r < 4; r += 1)
            n += e[(t >> (8 * r + 4)) & 15] + e[(t >> (8 * r)) & 15];
          return n;
        }
        function u(t) {
          var e;
          for (e = 0; e < t.length; e += 1) t[e] = s(t[e]);
          return t.join("");
        }
        function p(t) {
          return (
            /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))),
            t
          );
        }
        function c(t, e) {
          var r,
            n = t.length,
            o = new ArrayBuffer(n),
            i = new Uint8Array(o);
          for (r = 0; r < n; r += 1) i[r] = t.charCodeAt(r);
          return e ? i : o;
        }
        function l(t) {
          return String.fromCharCode.apply(null, new Uint8Array(t));
        }
        function h(t, e, r) {
          var n = new Uint8Array(t.byteLength + e.byteLength);
          return (
            n.set(new Uint8Array(t)),
            n.set(new Uint8Array(e), t.byteLength),
            r ? n : n.buffer
          );
        }
        function f(t) {
          var e,
            r = [],
            n = t.length;
          for (e = 0; e < n - 1; e += 2) r.push(parseInt(t.substr(e, 2), 16));
          return String.fromCharCode.apply(String, r);
        }
        function d() {
          this.reset();
        }
        return (
          u(i("hello")),
          "undefined" == typeof ArrayBuffer ||
            ArrayBuffer.prototype.slice ||
            (function () {
              function e(t, e) {
                return (t = 0 | t || 0) < 0
                  ? Math.max(t + e, 0)
                  : Math.min(t, e);
              }
              ArrayBuffer.prototype.slice = function (r, n) {
                var o,
                  i,
                  a,
                  s,
                  u = this.byteLength,
                  p = e(r, u),
                  c = u;
                return (
                  n !== t && (c = e(n, u)),
                  p > c
                    ? new ArrayBuffer(0)
                    : ((o = c - p),
                      (i = new ArrayBuffer(o)),
                      (a = new Uint8Array(i)),
                      (s = new Uint8Array(this, p, o)),
                      a.set(s),
                      i)
                );
              };
            })(),
          (d.prototype.append = function (t) {
            return this.appendBinary(p(t)), this;
          }),
          (d.prototype.appendBinary = function (t) {
            (this._buff += t), (this._length += t.length);
            var e,
              o = this._buff.length;
            for (e = 64; e <= o; e += 64)
              r(this._hash, n(this._buff.substring(e - 64, e)));
            return (this._buff = this._buff.substring(e - 64)), this;
          }),
          (d.prototype.end = function (t) {
            var e,
              r,
              n = this._buff,
              o = n.length,
              i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (e = 0; e < o; e += 1)
              i[e >> 2] |= n.charCodeAt(e) << ((e % 4) << 3);
            return (
              this._finish(i, o),
              (r = u(this._hash)),
              t && (r = f(r)),
              this.reset(),
              r
            );
          }),
          (d.prototype.reset = function () {
            return (
              (this._buff = ""),
              (this._length = 0),
              (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
              this
            );
          }),
          (d.prototype.getState = function () {
            return {
              buff: this._buff,
              length: this._length,
              hash: this._hash.slice(),
            };
          }),
          (d.prototype.setState = function (t) {
            return (
              (this._buff = t.buff),
              (this._length = t.length),
              (this._hash = t.hash),
              this
            );
          }),
          (d.prototype.destroy = function () {
            delete this._hash, delete this._buff, delete this._length;
          }),
          (d.prototype._finish = function (t, e) {
            var n,
              o,
              i,
              a = e;
            if (((t[a >> 2] |= 128 << ((a % 4) << 3)), a > 55))
              for (r(this._hash, t), a = 0; a < 16; a += 1) t[a] = 0;
            (n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/)),
              (o = parseInt(n[2], 16)),
              (i = parseInt(n[1], 16) || 0),
              (t[14] = o),
              (t[15] = i),
              r(this._hash, t);
          }),
          (d.hash = function (t, e) {
            return d.hashBinary(p(t), e);
          }),
          (d.hashBinary = function (t, e) {
            var r = u(i(t));
            return e ? f(r) : r;
          }),
          (d.ArrayBuffer = function () {
            this.reset();
          }),
          (d.ArrayBuffer.prototype.append = function (t) {
            var e,
              n = h(this._buff.buffer, t, !0),
              i = n.length;
            for (this._length += t.byteLength, e = 64; e <= i; e += 64)
              r(this._hash, o(n.subarray(e - 64, e)));
            return (
              (this._buff =
                e - 64 < i
                  ? new Uint8Array(n.buffer.slice(e - 64))
                  : new Uint8Array(0)),
              this
            );
          }),
          (d.ArrayBuffer.prototype.end = function (t) {
            var e,
              r,
              n = this._buff,
              o = n.length,
              i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (e = 0; e < o; e += 1) i[e >> 2] |= n[e] << ((e % 4) << 3);
            return (
              this._finish(i, o),
              (r = u(this._hash)),
              t && (r = f(r)),
              this.reset(),
              r
            );
          }),
          (d.ArrayBuffer.prototype.reset = function () {
            return (
              (this._buff = new Uint8Array(0)),
              (this._length = 0),
              (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
              this
            );
          }),
          (d.ArrayBuffer.prototype.getState = function () {
            var t = d.prototype.getState.call(this);
            return (t.buff = l(t.buff)), t;
          }),
          (d.ArrayBuffer.prototype.setState = function (t) {
            return (t.buff = c(t.buff, !0)), d.prototype.setState.call(this, t);
          }),
          (d.ArrayBuffer.prototype.destroy = d.prototype.destroy),
          (d.ArrayBuffer.prototype._finish = d.prototype._finish),
          (d.ArrayBuffer.hash = function (t, e) {
            var r = u(a(new Uint8Array(t)));
            return e ? f(r) : r;
          }),
          d
        );
      })();
    },
    1635: (t, e, r) => {
      "use strict";
      r.d(e, { Cg: () => o, Tt: () => n, sH: () => i });
      function n(t, e) {
        var r = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            e.indexOf(n) < 0 &&
            (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
            e.indexOf(n[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, n[o]) &&
              (r[n[o]] = t[n[o]]);
        }
        return r;
      }
      function o(t, e, r, n) {
        var o,
          i = arguments.length,
          a =
            i < 3
              ? e
              : null === n
                ? (n = Object.getOwnPropertyDescriptor(e, r))
                : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(t, e, r, n);
        else
          for (var s = t.length - 1; s >= 0; s--)
            (o = t[s]) &&
              (a = (i < 3 ? o(a) : i > 3 ? o(e, r, a) : o(e, r)) || a);
        return i > 3 && a && Object.defineProperty(e, r, a), a;
      }
      function i(t, e, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(t) {
            try {
              u(n.next(t));
            } catch (t) {
              i(t);
            }
          }
          function s(t) {
            try {
              u(n.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? o(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(a, s);
          }
          u((n = n.apply(t, e || [])).next());
        });
      }
      Object.create;
      Object.create;
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~8012d0c89.js.map
