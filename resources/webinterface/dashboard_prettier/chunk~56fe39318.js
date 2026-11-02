var CLSTAMP = "11196359";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [554],
  {
    9125: (e, t, r) => {
      r.d(t, { aj: () => O, d4: () => W });
      var n = r(1635),
        i = r(6540),
        s = r(5339),
        o = r.n(s),
        a = r(3924);
      class l extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.product || a.Sg(l.M()),
            s.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  product: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  version: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  errors: { n: 3, c, r: !0, q: !0 },
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
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
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
      class c extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.identifier || a.Sg(c.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
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
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification_Error";
        }
      }
      var u = r(1286);
      function d(e) {
        return (0, n.sH)(this, arguments, void 0, function* (e, t = "SHA-256") {
          let r;
          var n;
          "string" == typeof e
            ? ((n = e), (r = new TextEncoder().encode(n).buffer))
            : (r = e);
          const i = yield window.crypto.subtle.digest(t, r);
          return (
            (s = i),
            Array.prototype.map
              .call(new Uint8Array(s), (e) => ("00" + e.toString(16)).slice(-2))
              .join("")
          );
          var s;
        });
      }
      var m = r(7600),
        h = r(4728),
        p = r(1333),
        g = r(9118),
        f = r(6090),
        _ = r(5026);
      const b =
        window.addEventListener || (r.g && r.g.addEventListener) || (() => {});
      let w,
        R = [],
        v = (e, t, r) =>
          R.push({ error: e, cCallsitesToIgnore: t, strComponentStack: r });
      const S = !0;
      class T extends Error {
        constructor(...e) {
          super(...e), (this.name = "Assertion Failed");
        }
      }
      {
        const e = console.assert;
        console.assert = (t, r, ...n) => {
          if (!t) {
            const e = M();
            v(new T(E(r, ...n)), 2, e);
          }
          e.apply(console, [t, r, ...n]);
        };
        const t = console.error;
        (console.error = (e, ...r) => {
          const n = M();
          v(new Error(E(e, ...r)), 1, n), t.apply(console, [e, ...r]);
        }),
          (console.clogerror = (e, r, ...n) => {
            const i = M();
            v(new Error(E(r, ...n)), e + 1, i), t.apply(console, [r, ...n]);
          }),
          b("error", (e) => {
            v(e.error, 0);
          }),
          b("unhandledrejection", (e) => {
            v(e.reason, 0);
          }),
          (w = window.setTimeout(() => {
            (R = []), (v = () => {});
          }, 3e4));
      }
      const y = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
        I = [
          "chrome-extension://",
          "HTMLDivElement.onreset \\(/market",
          "/.millennium/Dist",
          "Refused unauthorized RPC command",
        ];
      function M() {
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
      class k {
        constructor(e = !0) {
          (this.m_transport = null),
            (this.m_rgErrorQueue = []),
            (this.m_sendTimer = null),
            (this.m_bReportingPaused = !1),
            (this.m_pauseTimer = void 0),
            (this.m_fnGetReportingInterval = P),
            (this.m_bEnabled = !0),
            (this.m_bInitialized = !1),
            e
              ? (R.forEach(
                  ({ error: e, cCallsitesToIgnore: t, strComponentStack: r }) =>
                    this.ReportError(e, {
                      cCallsitesToIgnore: t,
                      strComponentStack: r,
                    }),
                ),
                (v = (e, t, r) =>
                  this.ReportError(e, {
                    cCallsitesToIgnore: t,
                    strComponentStack: r,
                  })))
              : (v = () => {}),
            (R = []),
            clearTimeout(w),
            window.setTimeout(() => {
              this.m_bInitialized ||
                ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
            }, 3e4);
        }
        Init(e, t, r, n = {}) {
          (this.m_bInitialized = !0),
            (this.m_strProduct = e),
            (this.m_strVersion = t),
            (this.m_transport = r),
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
              const r = Object.assign(Object.assign({}, y), t);
              if (!this.m_bEnabled) return null;
              0;
              const i = yield (function (e, t) {
                try {
                  return e.stack && e.stack.match(C)
                    ? (function (e, t) {
                        return (0, n.sH)(this, void 0, void 0, function* () {
                          var r, n;
                          const {
                              cCallsitesToIgnore: i,
                              bIncludeMessageInIdentifier: s,
                            } = t,
                            o =
                              null !==
                                (n =
                                  null === (r = e.stack) || void 0 === r
                                    ? void 0
                                    : r.split("\n")) && void 0 !== n
                                ? n
                                : [];
                          let a = H(o.filter((e) => !!e.match(C))[i]);
                          s && (a = `${a} ${e.message}`);
                          const l = o
                            .map((e) => {
                              const t = e.match(/(.*)\((.*):(\d+):(\d+)\)/);
                              if (!t) return e;
                              if (5 === t.length) {
                                const [e, r, n, i, s] = t,
                                  o = parseInt(i),
                                  a = parseInt(s);
                                if (!isNaN(o) && !isNaN(a)) return [r, n, o, a];
                              }
                              return e;
                            })
                            .filter((e) => !!e);
                          return {
                            identifier: a,
                            identifierHash: yield F(a),
                            message: l,
                          };
                        });
                      })(e, t)
                    : e.stack && e.stack.match(B)
                      ? (function (e, t) {
                          return (0, n.sH)(this, void 0, void 0, function* () {
                            var r, n;
                            const {
                                cCallsitesToIgnore: i,
                                bIncludeMessageInIdentifier: s,
                              } = t,
                              o =
                                null !==
                                  (n =
                                    null === (r = e.stack) || void 0 === r
                                      ? void 0
                                      : r.split("\n")) && void 0 !== n
                                  ? n
                                  : [];
                            let a = H(o.filter((e) => !!e.match(B))[i]);
                            s && (a = `${a} ${e.message}`);
                            const l = o
                              .map((e) => {
                                const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                                if (!t) return e;
                                if (5 === t.length) {
                                  const [e, r, n, i, s] = t,
                                    o = parseInt(i),
                                    a = parseInt(s);
                                  if (!isNaN(o) && !isNaN(a))
                                    return [r, n, o, a];
                                }
                                return e;
                              })
                              .filter((e) => !!e);
                            return {
                              identifier: a,
                              identifierHash: yield F(a),
                              message: [e.message, ...l],
                            };
                          });
                        })(e, t)
                      : e.stack && e.stack.match(z)
                        ? (function (e, t) {
                            return (0, n.sH)(
                              this,
                              void 0,
                              void 0,
                              function* () {
                                var r, n;
                                const {
                                    bIncludeMessageInIdentifier: i,
                                    cCallsitesToIgnore: s,
                                  } = t,
                                  o =
                                    null !==
                                      (n =
                                        null === (r = e.stack) || void 0 === r
                                          ? void 0
                                          : r.split("\n")) && void 0 !== n
                                      ? n
                                      : [],
                                  a = o[s],
                                  l = a.split("/");
                                let c = l[l.length - 1];
                                a.indexOf("@") > -1 &&
                                  (c = a.split("@")[0] + "@" + c),
                                  i && (c = `${c} ${e.message}`);
                                const u = o
                                  .map((e) => {
                                    const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                                    if (!t) return e;
                                    if (5 === t.length) {
                                      const [e, r, n, i, s] = t,
                                        o = parseInt(i),
                                        a = parseInt(s);
                                      if (!isNaN(o) && !isNaN(a))
                                        return [r, n, o, a];
                                    }
                                    return e;
                                  })
                                  .filter((e) => !!e);
                                return {
                                  identifier: c,
                                  identifierHash: yield F(c),
                                  message: [e.message, ...u],
                                };
                              },
                            );
                          })(e, t)
                        : (N ||
                            (console.warn(
                              "Error reporter does not know how to parse generated stack:",
                            ),
                            console.warn(e.stack),
                            (N = !0)),
                          null);
                } catch (e) {
                  return (
                    console.warn(`Failed to normalize error stack: ${e}`), null
                  );
                }
              })(e, r);
              return i
                ? (r.cCallsitesToIgnore &&
                    i.message.splice(1, r.cCallsitesToIgnore),
                  r.strComponentStack &&
                    (i.strComponentStack = r.strComponentStack),
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
            let r = JSON.stringify(t);
            for (let t of I) {
              const n = new RegExp(t);
              if (r.match(n))
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
            r = Object.keys(t).map((e) => {
              const { report: r, count: n } = t[e],
                i = new c();
              return (
                i.set_count(n),
                i.set_identifier(r.identifier + " " + r.identifierHash),
                i.set_message(JSON.stringify(r.message)),
                r.strComponentStack &&
                  i.set_context(
                    JSON.stringify({ componentStack: r.strComponentStack }),
                  ),
                i
              );
            }),
            n = new l();
          n.set_product(this.m_strProduct),
            n.set_version(this.m_strVersion),
            n.set_errors(r);
          for (const e of (function () {
            var e;
            const t = [];
            if (
              ((null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.HasHMD()) || t.push("no_hmd"),
              null === p.HR || void 0 === p.HR ? void 0 : p.HR.systemInfo)
            ) {
              const e = -103;
              p.HR.systemInfo.os_type > 0
                ? t.push("windows")
                : p.HR.systemInfo.os_type <= e && t.push("linux");
            }
            (null === g.W || void 0 === g.W ? void 0 : g.W.IsSteamAvailable) ||
              t.push("no_steam");
            const r =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetStringProperty(
                    "/user/head",
                    f.fD8.ActualTrackingSystemName_String,
                  );
            r && t.push(r);
            const n = String(
              null !== (e = f.Fzk[_.Mg.m_eVRLinkDashboardMode]) && void 0 !== e
                ? e
                : "",
            ).toLowerCase();
            return (
              _.Mg.m_bIsVRLinkClient && t.push("vrlink_client:" + n),
              _.Mg.m_bIsVRLinkServer && t.push("vrlink_server:" + n),
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
          return S;
        }
      }
      function E(e, ...t) {
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
      const C = /^\s*at .*(\S+:\d+|\(native\))/m,
        B = /(^|@)\S+:\d+/,
        z = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
      let L,
        N = !1;
      function H(e) {
        return (function (e) {
          const t = "https://",
            r = e.indexOf(t);
          if (-1 === r) return e;
          const n = e.indexOf("/", r + t.length);
          return -1 === n ? e : e.slice(0, r) + e.slice(n);
        })(
          (function (e) {
            const t = e.lastIndexOf("?");
            if (-1 === t) return e;
            const r = e.indexOf(":", t);
            return -1 === r ? e : e.slice(0, t) + e.slice(r);
          })(e),
        );
      }
      const O = () => (L || j(new k()), L),
        j = (e) => {
          (L = e), m.tH.InstallErrorReportingStore(L);
        };
      function F(e) {
        return (0, n.sH)(this, void 0, void 0, function* () {
          try {
            return (yield d(e)).slice(0, 16);
          } catch (e) {
            return "";
          }
        });
      }
      function P() {
        return 1e3 * (0, h.Tg)(1, u.b - 1);
      }
      class A {
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
          let r = this.CreateWebAPIURL(e);
          if (!r) return void console.warn("Couldn't find service name " + e);
          const n = new FormData();
          n.append("input_protobuf_encoded", t),
            fetch(r, { method: "POST", body: n, mode: "no-cors" })
              .then((e) => {})
              .catch((e) => {});
        }
      }
      let V;
      const W = () => (V || (V = new A("https://api.steampowered.com/")), V);
    },
    3714: (e, t, r) => {
      r.d(t, { A0: () => s, uV: () => l, we: () => o });
      r(6540);
      var n = r(2505),
        i = r.n(n);
      class s {
        constructor() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        InitFromObjects(e, t, r, n) {
          this.m_mapTokens.clear();
          let i = [t, e, n, r];
          for (let e in i) {
            let t = i[e];
            for (let e in t) {
              let r = t[e];
              for (let e in r) {
                let t = e.toLowerCase();
                this.m_mapTokens.has(t) || this.m_mapTokens.set(t, r[e]);
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
            s.s_Date.toLocaleTimeString(t);
            return t;
          } catch (t) {
            return e;
          }
        }
      }
      function o(e, ...t) {
        let r = a.LocalizeString(e);
        return r
          ? (t.length > 0 &&
              (r = r.replace(/%(\d+)\$s/g, function (e, r) {
                return void 0 !== t[r - 1] ? String(t[r - 1]) : e;
              })),
            r)
          : e;
      }
      s.s_Date = new Date();
      const a = new s();
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
              let r = t.split("-");
              if (e.has(t)) return e.get(t);
              if (e.has(r[0])) return e.get(r[0]);
            }
            return "english";
          })());
        let r = [],
          n = (e, t, r) => {
            let n,
              s = Date.now().toString();
            return (
              (n =
                "drivers" == e
                  ? `/input/localization.json?t=${s}`
                  : "webhelper" == e
                    ? `/dashboard/localization/${e}_${t}.json?t=${s}`
                    : `localization/${e}_${t}.json?t=${s}`),
              i()
                .get(n)
                .then((e) => {
                  r(e.data);
                })
                .catch(() => {})
            );
          },
          s = [],
          o = [],
          l = [],
          c = [];
        for (let i of e)
          r.push(
            n(i, t, (e) => {
              s.push(e);
            }),
          ),
            "english" != t &&
              r.push(
                n(i, "english", (e) => {
                  l.push(e);
                }),
              );
        for (let e of ["webhelper"])
          r.push(
            n(e, t, (e) => {
              o.push(e);
            }),
          ),
            "english" != t &&
              r.push(
                n(e, "english", (e) => {
                  c.push(e);
                }),
              );
        return (
          r.push(
            n("drivers", "", (e) => {
              s.push(e);
            }),
          ),
          Promise.all(r).then(() => {
            a.InitFromObjects(s, o, l, c);
          })
        );
      }
      window.LocalizationManager = a;
    },
    4728: (e, t, r) => {
      function n(e, t) {
        return (
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1)) + e
        );
      }
      function i(e, t, r) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(r, e));
      }
      r.d(t, { OQ: () => i, Tg: () => n });
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~56fe39318.js.map
