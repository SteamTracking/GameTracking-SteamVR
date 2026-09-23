var CLSTAMP = "11023671";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [554],
  {
    9125: (e, t, s) => {
      s.d(t, { aj: () => W, d4: () => j });
      var n = s(1635),
        i = s(6540),
        r = s(5339),
        o = s.n(r),
        a = s(3924);
      class l extends r.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.product || a.Sg(l.M()),
            r.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  product: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  version: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  errors: { n: 3, c: u, r: !0, q: !0 },
                  tags: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.qM.readString,
                    bw: a.gp.writeRepeatedString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            s = new l();
          return l.deserializeBinaryFromReader(s, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification";
        }
      }
      class u extends r.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.identifier || a.Sg(u.M()),
            r.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  identifier: {
                    n: 1,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  message: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  count: { n: 3, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  context: { n: 4, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            s = new u();
          return u.deserializeBinaryFromReader(s, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification_Error";
        }
      }
      var h = s(1286);
      function c(e) {
        return (0, n.sH)(this, arguments, void 0, function* (e, t = "SHA-256") {
          let s;
          var n;
          "string" == typeof e
            ? ((n = e), (s = new TextEncoder().encode(n).buffer))
            : (s = e);
          const i = yield window.crypto.subtle.digest(t, s);
          return (
            (r = i),
            Array.prototype.map
              .call(new Uint8Array(r), (e) => ("00" + e.toString(16)).slice(-2))
              .join("")
          );
          var r;
        });
      }
      var p = s(7600),
        g = s(4728),
        d = s(1333),
        m = s(9118),
        S = s(6090),
        f = s(5026);
      const _ =
        window.addEventListener || (s.g && s.g.addEventListener) || (() => {});
      let b,
        R = [],
        v = (e, t, s) =>
          R.push({ error: e, cCallsitesToIgnore: t, strComponentStack: s });
      const y = !0;
      class w extends Error {
        constructor(...e) {
          super(...e), (this.name = "Assertion Failed");
        }
      }
      {
        const e = console.assert;
        console.assert = (t, s, ...n) => {
          if (!t) {
            const e = T();
            v(new w(I(s, ...n)), 2, e);
          }
          e.apply(console, [t, s, ...n]);
        };
        const t = console.error;
        (console.error = (e, ...s) => {
          const n = T();
          v(new Error(I(e, ...s)), 1, n), t.apply(console, [e, ...s]);
        }),
          (console.clogerror = (e, s, ...n) => {
            const i = T();
            v(new Error(I(s, ...n)), e + 1, i), t.apply(console, [s, ...n]);
          }),
          _("error", (e) => {
            v(e.error, 0);
          }),
          _("unhandledrejection", (e) => {
            v(e.reason, 0);
          }),
          (b = window.setTimeout(() => {
            (R = []), (v = () => {});
          }, 3e4));
      }
      const C = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
        k = [
          "chrome-extension://",
          "HTMLDivElement.onreset \\(/market",
          "/.millennium/Dist",
          "Refused unauthorized RPC command",
        ];
      function T() {
        try {
          const e = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            t =
              i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
          if (
            e &&
            "object" == typeof e &&
            "object" == typeof e.ReactDebugCurrentFrame &&
            "function" == typeof e.ReactDebugCurrentFrame.getCurrentStack
          ) {
            const t = e.ReactDebugCurrentFrame.getCurrentStack();
            if ("string" == typeof t) return t;
          } else if (
            t &&
            "object" == typeof t &&
            "function" == typeof t.getCurrentStack
          ) {
            const e = t.getCurrentStack();
            if ("string" == typeof e) return e;
          }
        } catch (e) {}
      }
      class M {
        constructor(e = !0) {
          (this.m_transport = null),
            (this.m_rgErrorQueue = []),
            (this.m_sendTimer = null),
            (this.m_bReportingPaused = !1),
            (this.m_pauseTimer = void 0),
            (this.m_fnGetReportingInterval = N),
            (this.m_bEnabled = !0),
            (this.m_bInitialized = !1),
            e
              ? (R.forEach(
                  ({ error: e, cCallsitesToIgnore: t, strComponentStack: s }) =>
                    this.ReportError(e, {
                      cCallsitesToIgnore: t,
                      strComponentStack: s,
                    }),
                ),
                (v = (e, t, s) =>
                  this.ReportError(e, {
                    cCallsitesToIgnore: t,
                    strComponentStack: s,
                  })))
              : (v = () => {}),
            (R = []),
            clearTimeout(b),
            window.setTimeout(() => {
              this.m_bInitialized ||
                ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
            }, 3e4);
        }
        Init(e, t, s, n = {}) {
          (this.m_bInitialized = !0),
            (this.m_strProduct = e),
            (this.m_strVersion = t),
            (this.m_transport = s),
            n.fnGetReportingInterval &&
              (this.m_fnGetReportingInterval = n.fnGetReportingInterval),
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
        ReportError(e, t) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (!e)
              return (
                console.warn(
                  "Failed to report error: ReportError() was called without an error to report.",
                ),
                null
              );
            try {
              const s = Object.assign(Object.assign({}, C), t);
              if (!this.m_bEnabled) return null;
              0;
              const i = yield (function (e, t) {
                try {
                  return e.stack && e.stack.match(O)
                    ? (function (e, t) {
                        return (0, n.sH)(this, void 0, void 0, function* () {
                          var s, n;
                          const {
                              cCallsitesToIgnore: i,
                              bIncludeMessageInIdentifier: r,
                            } = t,
                            o =
                              null !==
                                (n =
                                  null === (s = e.stack) || void 0 === s
                                    ? void 0
                                    : s.split("\n")) && void 0 !== n
                                ? n
                                : [];
                          let a = P(o.filter((e) => !!e.match(O))[i]);
                          r && (a = `${a} ${e.message}`);
                          const l = o
                            .map((e) => {
                              const t = e.match(/(.*)\((.*):(\d+):(\d+)\)/);
                              if (!t) return e;
                              if (5 === t.length) {
                                const [e, s, n, i, r] = t,
                                  o = parseInt(i),
                                  a = parseInt(r);
                                if (!isNaN(o) && !isNaN(a)) return [s, n, o, a];
                              }
                              return e;
                            })
                            .filter((e) => !!e);
                          return {
                            identifier: a,
                            identifierHash: yield A(a),
                            message: l,
                          };
                        });
                      })(e, t)
                    : e.stack && e.stack.match(L)
                      ? (function (e, t) {
                          return (0, n.sH)(this, void 0, void 0, function* () {
                            var s, n;
                            const {
                                cCallsitesToIgnore: i,
                                bIncludeMessageInIdentifier: r,
                              } = t,
                              o =
                                null !==
                                  (n =
                                    null === (s = e.stack) || void 0 === s
                                      ? void 0
                                      : s.split("\n")) && void 0 !== n
                                  ? n
                                  : [];
                            let a = P(o.filter((e) => !!e.match(L))[i]);
                            r && (a = `${a} ${e.message}`);
                            const l = o
                              .map((e) => {
                                const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                                if (!t) return e;
                                if (5 === t.length) {
                                  const [e, s, n, i, r] = t,
                                    o = parseInt(i),
                                    a = parseInt(r);
                                  if (!isNaN(o) && !isNaN(a))
                                    return [s, n, o, a];
                                }
                                return e;
                              })
                              .filter((e) => !!e);
                            return {
                              identifier: a,
                              identifierHash: yield A(a),
                              message: [e.message, ...l],
                            };
                          });
                        })(e, t)
                      : e.stack && e.stack.match(E)
                        ? (function (e, t) {
                            return (0, n.sH)(
                              this,
                              void 0,
                              void 0,
                              function* () {
                                var s, n;
                                const {
                                    bIncludeMessageInIdentifier: i,
                                    cCallsitesToIgnore: r,
                                  } = t,
                                  o =
                                    null !==
                                      (n =
                                        null === (s = e.stack) || void 0 === s
                                          ? void 0
                                          : s.split("\n")) && void 0 !== n
                                      ? n
                                      : [],
                                  a = o[r],
                                  l = a.split("/");
                                let u = l[l.length - 1];
                                a.indexOf("@") > -1 &&
                                  (u = a.split("@")[0] + "@" + u),
                                  i && (u = `${u} ${e.message}`);
                                const h = o
                                  .map((e) => {
                                    const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                                    if (!t) return e;
                                    if (5 === t.length) {
                                      const [e, s, n, i, r] = t,
                                        o = parseInt(i),
                                        a = parseInt(r);
                                      if (!isNaN(o) && !isNaN(a))
                                        return [s, n, o, a];
                                    }
                                    return e;
                                  })
                                  .filter((e) => !!e);
                                return {
                                  identifier: u,
                                  identifierHash: yield A(u),
                                  message: [e.message, ...h],
                                };
                              },
                            );
                          })(e, t)
                        : (F ||
                            (console.warn(
                              "Error reporter does not know how to parse generated stack:",
                            ),
                            console.warn(e.stack),
                            (F = !0)),
                          null);
                } catch (e) {
                  return (
                    console.warn(`Failed to normalize error stack: ${e}`), null
                  );
                }
              })(e, s);
              return i
                ? (s.cCallsitesToIgnore &&
                    i.message.splice(1, s.cCallsitesToIgnore),
                  s.strComponentStack &&
                    (i.strComponentStack = s.strComponentStack),
                  this.SendErrorReport(i),
                  i)
                : null;
            } catch (e) {
              return console.log(`Failed to report error: ${e}`), null;
            }
          });
        }
        PauseReportingForDuration(e) {
          this.PauseReporting(),
            (this.m_pauseTimer = window.setTimeout(
              () => this.ResumeReporting(),
              e,
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
        BIsBlacklisted(e) {
          for (let t of e.message) {
            let s = JSON.stringify(t);
            for (let t of k) {
              const n = new RegExp(t);
              if (s.match(n))
                return console.warn("Report", e, "matched regex", t), !0;
            }
          }
          return !1;
        }
        SendErrorReport(e) {
          this.BIsBlacklisted(e) ||
            (this.m_transport
              ? this.QueueReport(e)
              : this.m_rgErrorQueue.push(e));
        }
        QueueReport(e) {
          this.m_rgErrorQueue.push(e),
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
        SendErrorReports(e) {
          if (!e || !e.length) return;
          const t = e.reduce(
              (e, t) => (
                e[t.identifier]
                  ? e[t.identifier].count++
                  : (e[t.identifier] = { report: t, count: 1 }),
                e
              ),
              {},
            ),
            s = Object.keys(t).map((e) => {
              const { report: s, count: n } = t[e],
                i = new u();
              return (
                i.set_count(n),
                i.set_identifier(s.identifier + " " + s.identifierHash),
                i.set_message(JSON.stringify(s.message)),
                s.strComponentStack &&
                  i.set_context(
                    JSON.stringify({ componentStack: s.strComponentStack }),
                  ),
                i
              );
            }),
            n = new l();
          n.set_product(this.m_strProduct),
            n.set_version(this.m_strVersion),
            n.set_errors(s);
          for (const e of (function () {
            var e;
            const t = [];
            if (
              ((null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.HasHMD()) || t.push("no_hmd"),
              null === d.HR || void 0 === d.HR ? void 0 : d.HR.systemInfo)
            ) {
              const e = -103;
              d.HR.systemInfo.os_type > 0
                ? t.push("windows")
                : d.HR.systemInfo.os_type <= e && t.push("linux");
            }
            (null === m.W || void 0 === m.W ? void 0 : m.W.IsSteamAvailable) ||
              t.push("no_steam");
            const s =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetStringProperty(
                    "/user/head",
                    S.fD8.ActualTrackingSystemName_String,
                  );
            s && t.push(s);
            const n = String(
              null !== (e = S.Fzk[f.Mg.m_eVRLinkDashboardMode]) && void 0 !== e
                ? e
                : "",
            ).toLowerCase();
            return (
              f.Mg.m_bIsVRLinkClient && t.push("vrlink_client:" + n),
              f.Mg.m_bIsVRLinkServer && t.push("vrlink_server:" + n),
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.IsSteamFrame()) && t.push("frame"),
              t
            );
          })())
            n.add_tags(e);
          this.m_transport.SendNoResponse(
            "ClientMetrics.ReportClientError#1",
            n.serializeBase64String(),
          );
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
        get reporting_enabled() {
          return y;
        }
      }
      function I(e, ...t) {
        if ("string" == typeof e && 0 === t.length) return e;
        return [e, ...t]
          .map((e) => {
            try {
              let t = String(e);
              return "[object Object]" == t && (t = JSON.stringify(e)), t;
            } catch (e) {
              return "[Stringify Error]";
            }
          })
          .join(", ");
      }
      const O = /^\s*at .*(\S+:\d+|\(native\))/m,
        L = /(^|@)\S+:\d+/,
        E = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
      let V,
        F = !1;
      function P(e) {
        return (function (e) {
          const t = "https://",
            s = e.indexOf(t);
          if (-1 === s) return e;
          const n = e.indexOf("/", s + t.length);
          return -1 === n ? e : e.slice(0, s) + e.slice(n);
        })(
          (function (e) {
            const t = e.lastIndexOf("?");
            if (-1 === t) return e;
            const s = e.indexOf(":", t);
            return -1 === s ? e : e.slice(0, t) + e.slice(s);
          })(e),
        );
      }
      const W = () => (V || H(new M()), V),
        H = (e) => {
          (V = e), p.tH.InstallErrorReportingStore(V);
        };
      function A(e) {
        return (0, n.sH)(this, void 0, void 0, function* () {
          try {
            return (yield c(e)).slice(0, 16);
          } catch (e) {
            return "";
          }
        });
      }
      function N() {
        return 1e3 * (0, g.Tg)(1, h.b - 1);
      }
      class z {
        constructor(e) {
          this.m_strWebAPIBaseURL = e;
        }
        CreateWebAPIURL(e) {
          let t = e.match(/([^\.]+)\.(.+)#(\d+)/);
          return t && 4 == t.length
            ? `${this.m_strWebAPIBaseURL}I${t[1]}Service/${t[2]}/v${t[3]}`
            : null;
        }
        SendNoResponse(e, t) {
          let s = this.CreateWebAPIURL(e);
          if (!s) return void console.warn("Couldn't find service name " + e);
          const n = new FormData();
          n.append("input_protobuf_encoded", t),
            fetch(s, { method: "POST", body: n, mode: "no-cors" })
              .then((e) => {})
              .catch((e) => {});
        }
      }
      let B;
      const j = () => (B || (B = new z("https://api.steampowered.com/")), B);
    },
    3714: (e, t, s) => {
      s.d(t, { A0: () => r, uV: () => l, we: () => o });
      s(6540);
      var n = s(2505),
        i = s.n(n);
      class r {
        constructor() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        InitFromObjects(e, t, s, n) {
          this.m_mapTokens.clear();
          let i = [t, e, n, s];
          for (let e in i) {
            let t = i[e];
            for (let e in t) {
              let s = t[e];
              for (let e in s) {
                let t = e.toLowerCase();
                this.m_mapTokens.has(t) || this.m_mapTokens.set(t, s[e]);
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
      function o(e, ...t) {
        let s = a.LocalizeString(e);
        return s
          ? (t.length > 0 &&
              (s = s.replace(/%(\d+)\$s/g, function (e, s) {
                return void 0 !== t[s - 1] ? String(t[s - 1]) : e;
              })),
            s)
          : e;
      }
      r.s_Date = new Date();
      const a = new r();
      function l(e, t) {
        t ||
          (t = (function () {
            let e = new Map([
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
            for (let t of navigator.languages) {
              let s = t.split("-");
              if (e.has(t)) return e.get(t);
              if (e.has(s[0])) return e.get(s[0]);
            }
            return "english";
          })());
        let s = [],
          n = (e, t, s) => {
            let n,
              r = Date.now().toString();
            return (
              (n =
                "drivers" == e
                  ? `/input/localization.json?t=${r}`
                  : "webhelper" == e
                    ? `/dashboard/localization/${e}_${t}.json?t=${r}`
                    : `localization/${e}_${t}.json?t=${r}`),
              i()
                .get(n)
                .then((e) => {
                  s(e.data);
                })
                .catch(() => {})
            );
          },
          r = [],
          o = [],
          l = [],
          u = [];
        for (let i of e)
          s.push(
            n(i, t, (e) => {
              r.push(e);
            }),
          ),
            "english" != t &&
              s.push(
                n(i, "english", (e) => {
                  l.push(e);
                }),
              );
        for (let e of ["webhelper"])
          s.push(
            n(e, t, (e) => {
              o.push(e);
            }),
          ),
            "english" != t &&
              s.push(
                n(e, "english", (e) => {
                  u.push(e);
                }),
              );
        return (
          s.push(
            n("drivers", "", (e) => {
              r.push(e);
            }),
          ),
          Promise.all(s).then(() => {
            a.InitFromObjects(r, o, l, u);
          })
        );
      }
      window.LocalizationManager = a;
    },
    4728: (e, t, s) => {
      function n(e, t) {
        return (
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1)) + e
        );
      }
      function i(e, t, s) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(s, e));
      }
      s.d(t, { OQ: () => i, Tg: () => n });
    },
    1333: (e, t, s) => {
      s.d(t, { Gz: () => m, HR: () => _ });
      var n = s(1635),
        i = s(3236),
        r = s(2505),
        o = s.n(r),
        a = s(7813),
        l = s(6090),
        u = s(3606),
        h = s(2402),
        c = s(2336),
        p = s(8803),
        g = s(6013),
        d = s(1909);
      const m = 16,
        S = "change_route";
      class f {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_mailbox = new l._nH()),
            (this.connected = !1),
            (this.settingsSchema = void 0),
            (this.settings = a.observable.map()),
            (this.systemInfo = void 0),
            (this.audioDevices = void 0),
            (this.apps = []),
            (this.probablyOwnedAppkeys = new Set()),
            (this.m_bSteamVRMain = !1),
            (this.workshopStateChangedCanary = 1),
            (this.onRestartRequired = null),
            (this.onAppRestartRequired = null),
            (this.pendingChanges = new Map()),
            (this.route = []),
            (this.m_mapSettingsLastWriteInfo = new Map()),
            (this.m_bIsSettingApp = !1),
            (this.m_bInitStarted = !1),
            (this.m_appFrameLimits = []),
            (this.m_mapRefreshRatesForFrameLimit = new Map()),
            (this.m_SteamClientUserInfoPathProperty =
              p.m0.ListenToProtoPathProperty(g.qR)),
            (this.GetAppList = function () {
              return new Promise(function (e, t) {
                o()
                  .get("/app/list.json")
                  .then((t) => {
                    e(t.data.apps);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.GetSettingsUGC = function () {
              return new Promise(function (e, t) {
                o()
                  .get("/settings_getugc")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.ReloadSettingsSchema = function () {
              return new Promise(function (e, t) {
                o()
                  .get("/settings_reloadschema")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.GetSettingsInfo = function () {
              return new Promise(function (e, t) {
                o()
                  .get("/settings_getinfo")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (0, a.makeObservable)(this);
        }
        get showInternalSettings() {
          var e, t;
          return (
            this.m_bSteamVRMain ||
            _.settings.get(c.z.k_sShowInternalSettings) ||
            ((null === (e = this.m_SteamClientUserInfoPathProperty.value) ||
            void 0 === e
              ? void 0
              : e.valve_email) &&
              (null === (t = this.m_SteamClientUserInfoPathProperty.value) ||
              void 0 === t
                ? void 0
                : t.developer_mode_enabled))
          );
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            console.log("Connecting vrsettings..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                this.OnWebSocketOpen(t), e();
              }),
              this.m_wsWebSocketToServer.addEventListener(
                "message",
                this.OnWebSocketMessage,
              ),
              this.m_wsWebSocketToServer.addEventListener(
                "close",
                this.OnWebSocketClose,
              );
          });
        }
        Init(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (this.m_bInitStarted) return;
            (this.m_bInitStarted = !0),
              (this.m_bIsSettingApp = e),
              this.m_bIsSettingApp &&
                (window.addEventListener("hashchange", this.onHashChanged),
                this.onHashChanged()),
              (0, a.autorun)(
                () => {
                  let e = [];
                  if (0 != this.pendingChanges.size) {
                    for (const [t, s] of this.pendingChanges.entries())
                      e.push({ name: t, value: s });
                    this.pendingChanges.clear(),
                      o()
                        .post("/settings_set.action", e)
                        .then((e) => {})
                        .catch((t) => {
                          console.log(
                            "Failed to save settings! This usually happens when type is set incorrectly on one of the keys in the schema. ",
                            e,
                          );
                        });
                  }
                },
                { delay: 300 },
              ),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForDisplayModeNotSupportedEvents(
                  this.SetRestartRequired,
                );
            let t = [];
            this.m_mailbox.connected || t.push(this.ConnectMailbox()),
              t.push(this.OpenWebSocketToHost()),
              t.push(this.AwaitInitialSettingsSchema()),
              d.p.SteamVR.SetImplementation("SetSpatializeEnabled", (e) => {
                this.audioDevices &&
                  ((this.audioDevices.spatialize =
                    (null == e ? void 0 : e.enabled) || !1),
                  console.log("SetSpatializeEnabled", e.enabled));
              }),
              d.p.SteamVR.SetImplementation(
                "SetSpatializeSurroundEnabled",
                (e) => {
                  this.audioDevices &&
                    ((this.audioDevices.spatialize_surround =
                      (null == e ? void 0 : e.enabled) || !1),
                    console.log("SetSpatializeSurroundEnabled", e.enabled));
                },
              ),
              yield Promise.all(t);
          });
        }
        get MailboxName() {
          if (!this.m_bIsSettingApp) return "settings";
          switch ((0, l.R$f)()) {
            case l.OH$.Overlay:
              return "settings/overlay";
            case l.OH$.Desktop:
              return "settings/desktop";
            default:
              return "settings/unknown";
          }
        }
        ConnectMailbox() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            try {
              yield this.m_mailbox.Init(this.MailboxName),
                this.m_mailbox.RegisterHandler(
                  "workshop_state_changed",
                  this.OnWorkshopStateChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(S, this.OnChangeRouteMessage),
                this.m_mailbox.RegisterHandler(
                  "app_config_changed",
                  this.OnAppConfigChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(
                  "refresh_rate_change",
                  this.OnRefreshRateChangeMessage,
                );
            } catch (e) {
              console.log("Failed to open settings mailbox:" + e);
            }
          });
        }
        OnWorkshopStateChangedMessage(e) {
          this.workshopStateChangedCanary++;
        }
        OnChangeRouteMessage(e) {
          this.m_bIsSettingApp &&
            this.setRoute(e.page, e.section, e.sectionParams);
        }
        OnAppConfigChangedMessage(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (e.deleted_appkeys.length)
              for (let t = this.apps.length - 1; t >= 0; t--)
                e.deleted_appkeys.indexOf(this.apps[t].key) >= 0 &&
                  this.apps.splice(t, 1);
            for (let t of e.updated_apps) {
              for (let e = 0; e < this.apps.length; e++)
                if (this.apps[e].key == t.key) {
                  !this.apps[e].is_autolaunch &&
                    t.is_autolaunch &&
                    this.SetRestartRequired(),
                    (this.apps[e] = Object.assign(
                      Object.assign(Object.assign({}, this.apps[e]), {
                        current_scene_process: !1,
                      }),
                      t,
                    )),
                    (t = null);
                  break;
                }
              t && (this.apps.push(t), this.probablyOwnedAppkeys.add(t.key));
            }
          });
        }
        OnRefreshRateChangeMessage(e) {
          this.onAppRestartRequired &&
            this.onAppRestartRequired(e.app_supports);
        }
        onHashChanged() {
          if (!this.m_bIsSettingApp) return;
          const e = window.location.hash;
          0 === e.indexOf("#")
            ? (this.route = e.substring(1).split("/"))
            : (this.route = []);
        }
        get routePage() {
          return this.route.length >= 1 ? this.route[0] : null;
        }
        get routePageSection() {
          return this.route.length >= 2 ? this.route[1] : null;
        }
        get routePageSectionParams() {
          return this.route.slice(2);
        }
        setRoutePage(e) {
          this.setRoute(e);
        }
        setRoutePageSection(e) {
          this.setRoute(this.routePage, e);
        }
        setRoutePageSectionParams(e) {
          this.setRoute(this.routePage, this.routePageSection, e);
        }
        setRoute(e, t, s) {
          if (this.m_bIsSettingApp) {
            (e = null != e ? e : ""), (s = null != s ? s : []);
            const n = t ? [e, t, ...s] : [e],
              i = n.join("/");
            window.location.hash.substring(1) != i &&
              ((window.location.hash = i), (this.route = n));
          } else
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(this.MailboxName, {
                type: S,
                page: e,
                section: t,
                sectionParams: s,
              });
        }
        SetDashboardFadeSupression(e, t) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(l.M9N, {
              type: h.E,
              suppress_dashboard_fade: t,
              for_id: e,
            });
        }
        SetDashboardForceBoundsVisible(e, t, s) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(l.M9N, {
              type: h.Q,
              force_bounds_visible: s,
              for_overlay_key: e,
              for_id: t,
            });
        }
        SetRestartRequired() {
          this.onRestartRequired && this.onRestartRequired();
        }
        OnWebSocketOpen(e) {
          (this.connected = !0),
            this.WebSocketSend("settings_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("settings_close");
            }),
            _.GetSettingsInfo().then((e) => {
              this.OnVRSystemInfo(e);
            }),
            _.GetAppList().then((e) => {
              this.OnVRAppList({ jsonid: "vr_app_list", apps: e });
            });
        }
        OnWebSocketClose(e) {
          console.log("Lost connection to host..."),
            (this.connected = !1),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(e) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(e);
        }
        OnWebSocketMessage(e) {
          let t = JSON.parse(e.data);
          switch (t.jsonid) {
            case "vr_settings":
              this.OnVRSettings(t);
              break;
            case "vr_settings_schema":
              this.OnVRSettingsSchema(t);
              break;
            case "vr_audio_devices":
              this.OnVRAudioDevices(t);
              break;
            case "vr_app_list":
              this.OnVRAppList(t);
              break;
            default:
              t.jsonid
                ? console.log("Received unhandled event: " + t.jsonid)
                : console.log("Received unknown message: ", t);
          }
        }
        OnVRSettings(e) {
          for (let t in e.values) {
            const s = e.values[t];
            if (
              this.settings.get(t) != s ||
              this.m_mapSettingsLastWriteInfo.has(t)
            ) {
              if (this.settingsSchema) {
                const e = this.GetSettingSchema(t);
                e && e.requires_restart && this.SetRestartRequired();
              }
              this.SetSettingValueFromServer(t, s);
            }
          }
        }
        SetSettingValueFromServer(e, t) {
          const s = 1e3 * f.SERVER_SETTING_MERGE_DEFER_DURATION;
          if (this.m_mapSettingsLastWriteInfo.has(e)) {
            let n = this.m_mapSettingsLastWriteInfo.get(e);
            if (new Date().getTime() - n.nLastUserUpdateTime < s)
              return (
                window.clearTimeout(n.nPendingServerValueUpdateTimeout),
                void (n.nPendingServerValueUpdateTimeout = window.setTimeout(
                  () => {
                    this.SetSettingValueFromServer(e, t);
                  },
                  s,
                ))
              );
            window.clearTimeout(n.nPendingServerValueUpdateTimeout),
              this.m_mapSettingsLastWriteInfo.delete(e);
          }
          this.settings.set(e, t);
        }
        UpdateLastUserWriteTimeForSetting(e) {
          const t = new Date().getTime();
          this.m_mapSettingsLastWriteInfo.has(e)
            ? (this.m_mapSettingsLastWriteInfo.get(e).nLastUserUpdateTime = t)
            : this.m_mapSettingsLastWriteInfo.set(e, {
                nLastUserUpdateTime: t,
                nPendingServerValueUpdateTimeout: 0,
              });
        }
        OnVRSettingsSchema(e) {
          null == this.settingsSchema &&
            (console.log("Got vr settings schema"),
            (this.settingsSchema = e.schema),
            (this.m_bSteamVRMain = e.is_steamvr_main));
        }
        AwaitInitialSettingsSchema() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return (0, a.when)(() => !!this.settingsSchema);
          });
        }
        OnVRAudioDevices(e) {
          console.log("Got audio devices"), (this.audioDevices = e);
        }
        OnVRSystemInfo(e) {
          this.systemInfo = e;
          const t = e.refresh_rates.supported_rates.map((e) => Math.round(e));
          if (t.length > 1) {
            this.m_mapRefreshRatesForFrameLimit.clear(),
              (this.m_appFrameLimits = t.slice());
            for (const e of t)
              for (let t = 1; t <= 6; t++) {
                const s = Math.round(e / t),
                  n = this.m_mapRefreshRatesForFrameLimit.get(s);
                n ? n.push(e) : this.m_mapRefreshRatesForFrameLimit.set(s, [e]);
                for (let e = 0; e < this.m_appFrameLimits.length; e++) {
                  if (this.m_appFrameLimits[e] > s) {
                    this.m_appFrameLimits.splice(e, 0, s);
                    break;
                  }
                  if (this.m_appFrameLimits[e] === s) break;
                }
              }
          }
        }
        OnVRAppList(e) {
          (this.apps = e.apps),
            e.apps.map((e) => this.probablyOwnedAppkeys.add(e.key));
        }
        SettingNameMatches(e, t) {
          if (t && t.endsWith("*")) {
            let s = t.length - 1;
            return e.substr(0, s) == t.substr(0, s);
          }
          return e == t;
        }
        GetSettingSchema(e) {
          for (let t of this.settingsSchema)
            if (t.values)
              for (let s of t.values)
                if (s && this.SettingNameMatches(e, s.name)) return s;
          return null;
        }
        get appFrameLimits() {
          return this.m_appFrameLimits;
        }
        GetRefreshRatesForFrameLimit(e) {
          var t;
          return null !== (t = this.m_mapRefreshRatesForFrameLimit.get(e)) &&
            void 0 !== t
            ? t
            : [e];
        }
        ResetSettingsValue(e) {
          this.SetSettingsValue(e, null);
        }
        ResetSettingsValues(...e) {
          e.forEach(this.ResetSettingsValue);
        }
        SetSettingsValue(e, t) {
          let s = this.GetSettingSchema(e);
          null != s
            ? (null != t &&
                ("int" == s.type
                  ? (t = parseInt(t))
                  : "float" == s.type
                    ? (t = parseFloat(t))
                    : "string" == s.type
                      ? (t = "" + t)
                      : "bool" == s.type && (t = !!t)),
              s.requires_restart && this.SetRestartRequired(),
              this.SetSettingsStringValueWithoutSchema(e, t))
            : console.log(
                "Tried to set setting " +
                  e +
                  " but it's not in the schema! Aborting",
              );
        }
        SetSettingsStringValueWithoutSchema(e, t) {
          if (VRHTML) {
            const s = e.split("/");
            if (4 != s.length || "" != s[0] || "settings" != s[1])
              throw new Error("bad settings path " + e);
            VRHTML.VRSettings.Set(s[2], s[3], t),
              this.settings.set(e, VRHTML.VRSettings.Get(s[2], s[3]));
          } else
            null != t && this.settings.set(e, t), this.pendingChanges.set(e, t);
          this.UpdateLastUserWriteTimeForSetting(e);
        }
        GetSettingsValue(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, s) {
              o()
                .get("/settings_get", { params: { name: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  s(null);
                });
            });
          });
        }
        ResetAppSettings(e) {
          return o()
            .post("/app/resetsettings", { app: e })
            .then((t) => this.GetAppSettings(e))
            .catch((e) => {});
        }
        ResetAllAppResolutionScales() {
          return o()
            .post("/app/resetallresolutionscales")
            .then((e) => !0)
            .catch((e) => {});
        }
        SetAppSettings(e, t) {
          let s = Object.assign(Object.assign({}, t), { app: e });
          o().post("/app/setsettings", s);
          for (let e = 0; e < this.apps.length; e++)
            if (this.apps[e].key == s.app) {
              !this.apps[e].is_autolaunch &&
                t.is_autolaunch &&
                this.SetRestartRequired(),
                (this.apps[e] = Object.assign(
                  Object.assign({}, this.apps[e]),
                  t,
                ));
              break;
            }
        }
        GetAppSettings(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, s) {
              o()
                .get("/app/getsettings", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  s(null);
                });
            });
          });
        }
        GetAppInfo(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, s) {
              o()
                .get("/app/getinfo", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  s(null);
                });
            });
          });
        }
        GetAppName(e) {
          var t;
          return null === (t = this.apps.find((t) => t.key == e)) ||
            void 0 === t
            ? void 0
            : t.name;
        }
        get showAdvancedSettings() {
          return this.settings.get(u.F2);
        }
        set showAdvancedSettings(e) {
          this.SetSettingsValue(u.F2, e);
        }
        showBindingCallouts(e) {
          let t = { type: "request_binding_callouts", app_key: e };
          this.m_mailbox.SendMessage(l.I0c, t);
        }
      }
      (f.SERVER_SETTING_MERGE_DEFER_DURATION = 1),
        (0, n.Cg)([a.observable], f.prototype, "connected", void 0),
        (0, n.Cg)([a.observable], f.prototype, "settingsSchema", void 0),
        (0, n.Cg)([a.observable], f.prototype, "settings", void 0),
        (0, n.Cg)([a.observable], f.prototype, "systemInfo", void 0),
        (0, n.Cg)([a.observable], f.prototype, "audioDevices", void 0),
        (0, n.Cg)([a.observable], f.prototype, "apps", void 0),
        (0, n.Cg)([a.observable], f.prototype, "probablyOwnedAppkeys", void 0),
        (0, n.Cg)([a.observable], f.prototype, "m_bSteamVRMain", void 0),
        (0, n.Cg)(
          [a.observable],
          f.prototype,
          "workshopStateChangedCanary",
          void 0,
        ),
        (0, n.Cg)([a.observable], f.prototype, "pendingChanges", void 0),
        (0, n.Cg)([a.observable], f.prototype, "route", void 0),
        (0, n.Cg)([a.computed], f.prototype, "showInternalSettings", null),
        (0, n.Cg)([i.o], f.prototype, "OpenWebSocketToHost", null),
        (0, n.Cg)([i.o], f.prototype, "OnWorkshopStateChangedMessage", null),
        (0, n.Cg)([i.o], f.prototype, "OnChangeRouteMessage", null),
        (0, n.Cg)([i.o], f.prototype, "OnAppConfigChangedMessage", null),
        (0, n.Cg)([i.o], f.prototype, "OnRefreshRateChangeMessage", null),
        (0, n.Cg)([a.action.bound], f.prototype, "onHashChanged", null),
        (0, n.Cg)([a.computed], f.prototype, "routePage", null),
        (0, n.Cg)([a.computed], f.prototype, "routePageSection", null),
        (0, n.Cg)([a.computed], f.prototype, "routePageSectionParams", null),
        (0, n.Cg)([a.action], f.prototype, "setRoutePage", null),
        (0, n.Cg)([a.action], f.prototype, "setRoutePageSection", null),
        (0, n.Cg)([a.action], f.prototype, "setRoutePageSectionParams", null),
        (0, n.Cg)([a.action], f.prototype, "setRoute", null),
        (0, n.Cg)([i.o], f.prototype, "SetDashboardFadeSupression", null),
        (0, n.Cg)([i.o], f.prototype, "SetDashboardForceBoundsVisible", null),
        (0, n.Cg)([i.o], f.prototype, "SetRestartRequired", null),
        (0, n.Cg)([i.o], f.prototype, "OnWebSocketOpen", null),
        (0, n.Cg)([i.o], f.prototype, "OnWebSocketClose", null),
        (0, n.Cg)([i.o], f.prototype, "WebSocketSend", null),
        (0, n.Cg)([i.o], f.prototype, "OnWebSocketMessage", null),
        (0, n.Cg)([a.action], f.prototype, "OnVRSettings", null),
        (0, n.Cg)([a.action], f.prototype, "SetSettingValueFromServer", null),
        (0, n.Cg)([a.action], f.prototype, "OnVRSettingsSchema", null),
        (0, n.Cg)([a.action.bound], f.prototype, "ResetSettingsValue", null),
        (0, n.Cg)([a.action], f.prototype, "ResetSettingsValues", null),
        (0, n.Cg)([a.action], f.prototype, "SetSettingsValue", null),
        (0, n.Cg)(
          [a.action],
          f.prototype,
          "SetSettingsStringValueWithoutSchema",
          null,
        );
      const _ = new f();
      window.VRSettingsState = _;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~56fe39318.js.map
