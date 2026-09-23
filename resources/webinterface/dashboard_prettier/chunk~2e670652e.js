var CLSTAMP = "11023671";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [170],
  {
    108: (e) => {
      e.exports = {
        recordingCircle: "svg_library_recordingCircle_2ovZQ",
        AnimationFadeOutIn: "svg_library_AnimationFadeOutIn_1lEwX",
        Spinner: "svg_library_Spinner_1q9tu",
        SpinnerSpokeFade: "svg_library_SpinnerSpokeFade_2E-wW",
      };
    },
    1184: (e, t, o) => {
      "use strict";
      var r,
        n = o(1635),
        i = o(3496),
        a = o(3236);
      !(function (e) {
        (e[(e.Disabled = 0)] = "Disabled"),
          (e[(e.WorldZeroY = 1)] = "WorldZeroY"),
          (e[(e.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
      })(r || (r = {}));
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constraint";
        }
        buildNode(e, t) {
          const o = this.createSgNode(t);
          return (
            (o.properties["projection-constraint"] =
              this.props.projection_constraint),
            [e, o]
          );
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
    },
    4120: (e, t, o) => {
      "use strict";
      var r,
        n = o(1635),
        i = o(3496),
        a = o(3236);
      !(function (e) {
        (e[(e.RoomSetup = 1)] = "RoomSetup"),
          (e[(e.Locomotion = 2)] = "Locomotion"),
          (e[(e.QuickRecenter = 4)] = "QuickRecenter");
      })(r || (r = {}));
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constructglobals";
        }
        buildNode(e, t) {
          const o = this.createSgNode(t);
          return (
            (o.properties["allowed-action-sets"] = this.props[
              "allowed-action-sets"
            ].reduce((e, t) => e | t, 0)),
            (o.properties["inhibit-bounds-rendering"] =
              this.props["inhibit-bounds-rendering"]),
            (o.properties["pause-notifications"] =
              this.props["pause-notifications"]),
            (o.properties["roomview-enable-override"] =
              this.props["roomview-enable-override"]),
            (o.properties["systemlayer-msaa-enable-override"] =
              this.props["systemlayer-msaa-enable-override"]),
            (o.properties["construct-alpha-override"] =
              this.props["construct-alpha-override"]),
            [e, o]
          );
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
    },
    10: (e, t, o) => {
      "use strict";
      o(6540);
      var r = o(3496);
      r._J;
    },
    8313: (e, t, o) => {
      "use strict";
      o.d(t, { Fv: () => r });
      var r,
        n = o(1635),
        i = o(3496),
        a = o(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-floorheight-adjust";
        }
        buildNode(e, t) {
          var o, r, n, i, a, s, l, c, d, u, p, m;
          const C = this.createSgNode(t);
          return (
            (C.properties["target-id"] = this.props.target_id),
            (C.properties["interaction-range"] = this.props.interaction_range),
            (C.properties["inactive-alpha-scale"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.inactive_alpha_scale),
            (C.properties["axis-radius"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r.axis_radius),
            (C.properties["axis-color-hsv"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n.axis_color_hsv),
            (C.properties["dot-radius"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i.dot_radius),
            (C.properties["dot-color-hsv"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a.dot_color_hsv),
            (C.properties["dot-inner-alpha"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s.dot_inner_alpha),
            (C.properties["dot-outer-alpha"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l.dot_outer_alpha),
            (C.properties["rings-radius"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c.rings_radius),
            (C.properties["rings-color-hsv"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d.rings_color_hsv),
            (C.properties["rings-hue-amplitude"] =
              null === (u = this.props) || void 0 === u
                ? void 0
                : u.rings_hue_amplitude),
            (C.properties["rings-hue-speed"] =
              null === (p = this.props) || void 0 === p
                ? void 0
                : p.rings_hue_speed),
            (C.properties["rings-half-width"] =
              null === (m = this.props) || void 0 === m
                ? void 0
                : m.rings_half_width),
            [e, C]
          );
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
      class l extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-floordetection-geo";
        }
        buildNode(e, t) {
          var o;
          const r = this.createSgNode(t);
          return (
            (r.properties["draw-range"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.draw_range),
            [e, r]
          );
        }
      }
      (0, n.Cg)([a.o], l.prototype, "buildNode", null),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Circle = 1)] = "Circle"),
            (e[(e.Drawn = 2)] = "Drawn"),
            (e[(e.Full = 3)] = "Full");
        })(r || (r = {}));
      class c extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-draw-interaction";
        }
        buildNode(e, t) {
          var o;
          const r = this.createSgNode(t);
          return (
            (r.properties["target-id"] = this.props.target_id),
            (r.properties["interaction-range"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.interaction_range),
            (r.properties["interaction-range-head-relative"] =
              this.props.interaction_range_head_relative),
            [e, r]
          );
        }
      }
      (0, n.Cg)([a.o], c.prototype, "buildNode", null);
      class d extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-circle-perimeter-interaction";
        }
        buildNode(e, t) {
          var o;
          const r = this.createSgNode(t);
          return (
            (r.properties["target-id"] = this.props.target_id),
            (r.properties["radius-range"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.radius_range),
            [e, r]
          );
        }
      }
      (0, n.Cg)([a.o], d.prototype, "buildNode", null);
      class u extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-center";
        }
        buildNode(e, t) {
          var o;
          const r = this.createSgNode(t);
          return (
            (r.properties["set-center"] = this.props.setCenter),
            (r.properties["set-forward"] = this.props.setForward),
            (r.properties["one-shot"] =
              null === (o = this.props) || void 0 === o ? void 0 : o.oneShot),
            [e, r]
          );
        }
      }
      (0, n.Cg)([a.o], u.prototype, "buildNode", null);
      class p extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-outline";
        }
        buildNode(e, t) {
          var o, r, n, i, a, s, l, c, d, u, p, m, C, h;
          const v = this.createSgNode(t);
          return (
            (v.properties["generic-geo"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["generic-geo"]),
            (v.properties["circle-generic-geo"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r["circle-generic-geo"]),
            (v.properties["hue-amplitude"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["hue-amplitude"]),
            (v.properties["hue-speed"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["hue-speed"]),
            (v.properties["circle-hue-speed"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["circle-hue-speed"]),
            (v.properties["center-dot-radius"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["center-dot-radius"]),
            (v.properties["center-color-hsv"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["center-color-hsv"]),
            (v.properties["outline-color-hsv"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c["outline-color-hsv"]),
            (v.properties["inactive-outline-color-hsv"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["inactive-outline-color-hsv"]),
            (v.properties["stroke-shadow-radius-delta"] =
              null === (u = this.props) || void 0 === u
                ? void 0
                : u["stroke-shadow-radius-delta"]),
            (v.properties["circle-shadow-radius-delta"] =
              null === (p = this.props) || void 0 === p
                ? void 0
                : p["circle-shadow-radius-delta"]),
            (v.properties["outline-shadow-alpha"] =
              null === (m = this.props) || void 0 === m
                ? void 0
                : m["outline-shadow-alpha"]),
            (v.properties["area-fill-color"] =
              null === (C = this.props) || void 0 === C
                ? void 0
                : C["area-fill-color"]),
            (v.properties["area-fill-alpha"] =
              null === (h = this.props) || void 0 === h
                ? void 0
                : h["area-fill-alpha"]),
            [e, v]
          );
        }
      }
      (0, n.Cg)([a.o], p.prototype, "buildNode", null);
      class m extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-dots";
        }
        buildNode(e, t) {
          var o, r, n, i, a, s, l, c, d, u;
          const p = this.createSgNode(t);
          return (
            (p.properties["tile-size"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["tile-size"]),
            (p.properties["max-radius"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r["max-radius"]),
            (p.properties["min-radius"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["min-radius"]),
            (p.properties["max-radius-fade"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["max-radius-fade"]),
            (p.properties["min-radius-fade"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["min-radius-fade"]),
            (p.properties["dot-half-size"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["dot-half-size"]),
            (p.properties["center-randomization"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["center-randomization"]),
            (p.properties["color-hsv"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c["color-hsv"]),
            (p.properties["clip-to-playspace"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["clip-to-playspace"]),
            (p.properties["follow-head"] =
              null === (u = this.props) || void 0 === u
                ? void 0
                : u["follow-head"]),
            [e, p]
          );
        }
      }
      (0, n.Cg)([a.o], m.prototype, "buildNode", null);
      class C extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-area-drawing";
        }
        buildNode(e, t) {
          var o;
          const r = this.createSgNode(t);
          return (
            (r.properties["brush-radius"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["brush-radius"]),
            [e, r]
          );
        }
      }
      (0, n.Cg)([a.o], C.prototype, "buildNode", null);
    },
    5723: (e, t, o) => {
      "use strict";
      o.d(t, {
        Em: () => I,
        Lx: () => F,
        Oe: () => H,
        Tu: () => p,
        X4: () => m,
        Ys: () => E,
        bl: () => R,
        my: () => k,
        nX: () => w,
        w5: () => D,
      });
      var r = o(1635),
        n = o(2824),
        i = o(4367);
      function a(e, t) {
        let o = e.getAttribute(t);
        if (o && o.length > 0) {
          if ("undefined" == o) return;
          let e = [];
          for (let t of o.split(" ")) 0 != t.length && e.push(parseFloat(t));
          if (e.length > 0) return e;
        }
      }
      function s(e, t) {
        let o = e.getAttribute(t);
        if (o && o.length > 0) return parseFloat(o);
      }
      function l(e, t) {
        let o = e.getAttribute(t);
        if (o && o.length > 0) return parseInt(o);
      }
      function c(e, t) {
        let o = e.getAttribute(t);
        if (o && o.length > 0)
          return (
            "true" == o ||
            (o.length > 0 && 0 != parseInt(o) && !isNaN(parseInt(o)))
          );
      }
      function d(e, t) {
        let o = e.getAttribute(t);
        if (o && o.length > 0) return o;
      }
      function u(e, t) {
        return R(d(e, t));
      }
      function p(e, t) {
        var o;
        let r = { type: e, properties: {} };
        return (
          t.id &&
            (r.properties.id =
              null !== (o = R(t.id)) && void 0 !== o ? o : void 0),
          (r.properties.sgid = l(t, "sgid")),
          r
        );
      }
      function m() {
        return null === VRHTML || void 0 === VRHTML
          ? void 0
          : VRHTML.VROverlay.ThisOverlayHandle();
      }
      function C(e, t) {
        let [o, r] = (function (e, t) {
            let o = t.buildNode;
            if (o) return o(e, t);
            let r = Object.assign({}, e),
              n = null;
            switch (t.nodeName.toUpperCase()) {
              case "VSG-TRANSFORM":
                (n = p("transform", t)),
                  (n.properties.translation = a(t, "translation")),
                  (n.properties.rotation = a(t, "rotation")),
                  (n.properties.scale = a(t, "scale")),
                  (n.properties["curvature-pitch"] = s(t, "curvature-pitch")),
                  (n.properties["transform-path"] = d(t, "transform-path")),
                  (n.properties["projection-constraint"] = l(
                    t,
                    "projection-constraint",
                  )),
                  (n.properties["invert-parent-panel-pitch"] = c(
                    t,
                    "invert-parent-panel-pitch",
                  )),
                  (n.properties["ignore-parent-scale"] = c(
                    t,
                    "ignore-parent-scale",
                  )),
                  (n.properties["parent-path"] = d(t, "parent-path")),
                  (n.properties["parent-origin"] = d(t, "parent-origin")),
                  (n.properties["parent-id"] = u(t, "parent-id")),
                  (n.properties["frame-resize-scale-factor"] = s(
                    t,
                    "frame-resize-scale-factor",
                  ));
                break;
              case "VSG-TRACKING-STATE-VISIBILITY":
                (n = p("trackingstatevisibility", t)),
                  (n.properties["visible-0dof"] = c(t, "visible-0dof")),
                  (n.properties["visible-3dof"] = c(t, "visible-3dof")),
                  (n.properties["visible-6dof"] = c(t, "visible-6dof"));
                break;
              case "VSG-ELASTIC-HEAD-TRANSFORM":
                (n = p("elasticheadtransform", t)),
                  (n.properties["rotation-start-angle-threshold"] = s(
                    t,
                    "rotation-start-angle-threshold",
                  )),
                  (n.properties["rotation-stop-angle-threshold"] = s(
                    t,
                    "rotation-stop-angle-threshold",
                  )),
                  (n.properties["rotation-ease-in-time"] = s(
                    t,
                    "rotation-ease-in-time",
                  )),
                  (n.properties["rotation-ease-in-power"] = s(
                    t,
                    "rotation-ease-in-power",
                  )),
                  (n.properties["rotation-ease-out-angle-threshold"] = s(
                    t,
                    "rotation-ease-out-angle-threshold",
                  )),
                  (n.properties["rotation-ease-out-power"] = s(
                    t,
                    "rotation-ease-out-power",
                  )),
                  (n.properties["rotation-min-angular-velocity"] = s(
                    t,
                    "rotation-min-angular-velocity",
                  )),
                  (n.properties["rotation-max-angular-velocity"] = s(
                    t,
                    "rotation-max-angular-velocity",
                  )),
                  (n.properties["translation-start-distance-threshold"] = s(
                    t,
                    "translation-start-distance-threshold",
                  )),
                  (n.properties["translation-stop-distance-threshold"] = s(
                    t,
                    "translation-stop-distance-threshold",
                  )),
                  (n.properties["translation-ease-in-time"] = s(
                    t,
                    "translation-ease-in-time",
                  )),
                  (n.properties["translation-ease-in-power"] = s(
                    t,
                    "translation-ease-in-power",
                  )),
                  (n.properties["translation-ease-out-distance-threshold"] = s(
                    t,
                    "translation-ease-out-distance-threshold",
                  )),
                  (n.properties["translation-ease-out-power"] = s(
                    t,
                    "translation-ease-out-power",
                  )),
                  (n.properties["translation-velocity"] = s(
                    t,
                    "translation-velocity",
                  )),
                  (n.properties.enabled = c(t, "enabled")),
                  (n.properties["lock-to-horizon"] = c(t, "lock-to-horizon")),
                  (n.properties["translation-parent"] = l(
                    t,
                    "translation-parent",
                  )),
                  (n.properties["rotation-translation-change-together"] = c(
                    t,
                    "rotation-translation-change-together",
                  ));
                break;
              case "VSG-LINE":
                (n = p("line", t)),
                  (n.properties["target-id"] = u(t, "target-id")),
                  (n.properties.thickness = s(t, "thickness")),
                  (n.properties["start-buffer"] = s(t, "start-buffer")),
                  (n.properties["end-buffer"] = s(t, "end-buffer"));
                break;
              case "VSG-LINE-CONSTRAINED-TRANSFORM":
                (n = p("line-constrained-transform", t)),
                  (n.properties["target-id"] = u(t, "target-id")),
                  (n.properties["source-id"] = u(t, "source-id")),
                  (n.properties["source-distance"] = s(t, "source-distance")),
                  (n.properties["target-limit"] = s(t, "target-limit"));
                break;
              case "VSG-CALLOUT-TRANSFORM":
                (n = p("callout-transform", t)),
                  (n.properties.offset = a(t, "offset"));
                break;
              case "VSG-HEAD-FACING-TRANSFORM":
                n = p("head-facing-transform", t);
                break;
              case "VSG-PIN-TO-VIEW-TRANSFORM":
                (n = p("pin-to-view-transform", t)),
                  (n.properties["offscreen-z-depth"] = s(
                    t,
                    "offscreen-z-depth",
                  )),
                  (n.properties["off-axis-limit"] = s(t, "off-axis-limit")),
                  (n.properties["transition-limit"] = s(t, "transition-limit"));
                break;
              case "VSG-GRAB-TRANSFORM":
                (n = p("grab-transform", t)),
                  (n.properties["parent-path"] = d(t, "parent-path")),
                  (n.properties.translation = a(t, "translation")),
                  (n.properties.rotation = a(t, "rotation")),
                  (n.properties.scale = a(t, "scale")),
                  (n.properties["target-mode"] = l(t, "target-mode")),
                  (n.properties["stop-distance"] = s(t, "stop-distance")),
                  (n.properties["start-angle"] = s(t, "start-angle")),
                  (n.properties["start-quat-difference"] = s(
                    t,
                    "start-quat-difference",
                  )),
                  (n.properties["stop-quat-difference"] = s(
                    t,
                    "stop-quat-difference",
                  )),
                  (n.properties["scale-margin"] = s(t, "scale-margin")),
                  (n.properties["lerp-speed"] = s(t, "lerp-speed")),
                  (n.properties["min-distance"] = s(t, "min-distance")),
                  (n.properties["max-distance"] = s(t, "max-distance")),
                  (n.properties["one-to-one-radius"] = s(
                    t,
                    "one-to-one-radius",
                  )),
                  (n.properties["max-x-squared-contribution"] = s(
                    t,
                    "max-x-squared-contribution",
                  )),
                  (n.properties["acceleration-factor-x-coefficient"] = s(
                    t,
                    "acceleration-factor-x-coefficient",
                  )),
                  (n.properties["acceleration-factor-x-squared-coefficient"] =
                    s(t, "acceleration-factor-x-squared-coefficient")),
                  (n.properties["acceleration-factor-scale-term"] = s(
                    t,
                    "acceleration-factor-scale-term",
                  )),
                  (n.properties["stored-transform"] = s(t, "stored-transform")),
                  (n.properties["reset-on-recenter"] = c(
                    t,
                    "reset-on-recenter",
                  )),
                  (n.properties["reset-on-dashboard-relatch"] = c(
                    t,
                    "reset-on-dashboard-relatch",
                  )),
                  (n.properties["event-panel-sgid"] = l(t, "event-panel-sgid")),
                  (n.properties["scroll-speed"] = s(t, "scroll-speed"));
            }
            return [r, n];
          })(e, t),
          n = [];
        for (let e = 0; e < t.children.length; e++) {
          let r = t.children.item(e);
          if (r.children) {
            let e = C(o, r);
            e && (n = n.concat(e));
          }
        }
        return o.bShouldAbort
          ? null
          : r
            ? (n.length > 0 && (r.children = n), [r])
            : n.length > 0
              ? 1 == n.length
                ? n
                : [{ children: n }]
              : null;
      }
      let h,
        v,
        g,
        _,
        f,
        y,
        b = [],
        L = null,
        S = i.hq.None,
        M = !1,
        V = !1;
      function H(e, t, o) {
        (v = e),
          (g = t),
          (_ = o),
          console.log("Setting owning overlay key to " + e);
      }
      function w(e, t) {
        return e + "::" + t;
      }
      function R(e) {
        return e
          ? (function (e) {
              return e && e.includes("::");
            })(e)
            ? e
            : w(D(), e)
          : null;
      }
      function D() {
        var e;
        return null !==
          (e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
          ? e
          : v;
      }
      function F(e) {
        b.push(e), k();
      }
      function I(e) {
        (e = Math.max(null != e ? e : S, S)) != S && ((S = e), k());
      }
      function E(e) {
        e != M && ((M = e), k());
      }
      function k() {
        null == y &&
          (y =
            null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.NextSGID()),
          L ||
            (L = window.setTimeout(
              () =>
                (0, r.sH)(this, void 0, void 0, function* () {
                  let e = document.body;
                  g && (e = g);
                  const t = C(
                    {
                      currentPanel: null,
                      bInsideReparentedPanel: !1,
                      bShouldAbort: !1,
                    },
                    e,
                  );
                  let o;
                  (o = V
                    ? {
                        type: "systemui-root",
                        children: t,
                        properties: {
                          eDashboardRelatch: S,
                          bContinuousRelatch: M,
                          sceneColorCorrection: f,
                          sgid: y,
                        },
                      }
                    : { type: "group", children: t, properties: { sgid: y } }),
                    h ||
                      (console.log("Initializing sg_mailbox"),
                      (h = new n._n()),
                      yield h.Init("sg_mailbox", _));
                  let r = {
                    type: "update_scene_graph",
                    owning_overlay_key: D(),
                    scene_graph: o,
                    retired_sgids: b,
                  };
                  h.SendMessage("vrcompositor_systemlayer", r),
                    (L = null),
                    (b = []),
                    (S = i.hq.None);
                }),
              0,
            ));
      }
    },
    9011: (e, t, o) => {
      "use strict";
      var r = o(1635),
        n = o(3496),
        i = o(3236);
      class a extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "tilefloor";
        }
        buildNode(e, t) {
          var o, r, i, a, s, l, c;
          const d = this.createSgNode(t);
          if (
            ((d.properties["tile-size"] = this.props["tile-size"]),
            (d.properties["tile-gap"] = this.props["tile-gap"]),
            (d.properties["inner-radius"] = this.props["inner-radius"]),
            (d.properties["outer-radius"] = this.props["outer-radius"]),
            (d.properties["fade-distance"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["fade-distance"]),
            (d.properties["min-tile-scale-at-periphery"] =
              this.props["min-tile-scale-at-periphery"]),
            (d.properties.height = (0, n.kJ)(this.props.height)),
            null != this.props.offset &&
              (d.properties.offset = [
                null === (r = this.props.offset) || void 0 === r ? void 0 : r.x,
                null === (i = this.props.offset) || void 0 === i ? void 0 : i.y,
              ]),
            "string" == typeof this.props.color)
          )
            d.properties.color = this.props.color;
          else if (this.props.color) {
            let e = (0, n.RH)(this.props.color, { r: 0, g: 0, b: 0 });
            d.properties.color = [e.r, e.g, e.b];
          }
          return (
            (d.properties["center-randomization"] =
              null == this ? void 0 : this.props["center-randomization"]),
            this.props["luma-randomization"] &&
              ((d.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (d.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"])),
            this.props["reflection-randomization"] &&
              ((d.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (d.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"])),
            (d.properties["normal-randomization-degrees"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["normal-randomization-degrees"]),
            this.props.chevron &&
              ((d.properties["chevron-luma-scale"] =
                this.props.chevron["luma-scale"]),
              (d.properties["chevron-reflection-scale"] =
                this.props.chevron["reflection-scale"])),
            (d.properties["auto-subdivide"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["auto-subdivide"]),
            (d.properties["pedestal-height"] = (0, n.kJ)(
              this.props["pedestal-height"],
            )),
            (d.properties["pedestal-radius"] = (0, n.kJ)(
              this.props["pedestal-radius"],
            )),
            (d.properties["floor-aa-shader"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["floor-aa-shader"]),
            (d.properties["stable-fade"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c["stable-fade"]),
            [e, d]
          );
        }
      }
      (0, r.Cg)([i.o], a.prototype, "buildNode", null);
    },
    111: (e, t, o) => {
      "use strict";
      o(6540);
      var r = o(3496);
      r._J;
    },
    7600: (e, t, o) => {
      "use strict";
      o.d(t, { cb: () => l, tH: () => d });
      var r = o(1635),
        n = o(6540),
        i = o(6090),
        a = o(1286),
        s = o(3236);
      const l =
        ((c = (e) => {
          throw new Error(e.errorStr);
        }),
        function (e) {
          return n.createElement(
            d,
            null,
            n.createElement(c, Object.assign({}, e)),
          );
        });
      var c;
      class d extends n.Component {
        constructor(e) {
          super(e), (this.state = {}), (this.state.lastErrorKey = e.errorKey);
        }
        static InstallErrorReportingStore(e) {
          this.sm_ErrorReportingStore = e;
        }
        componentDidCatch(e, t) {
          const o = d.sm_ErrorReportingStore;
          o
            ? o
                .ReportError(e, {
                  strComponentStack: t.componentStack || void 0,
                })
                .then(
                  (e) =>
                    e && this.setState({ identifierHash: e.identifierHash }),
                )
            : console.warn(
                "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server",
              ),
            this.setState({
              error: { error: e, info: t },
              lastErrorKey: this.props.errorKey,
            });
        }
        Reset() {
          this.setState({ error: void 0 });
        }
        render() {
          const { children: e, fallback: t, errorKey: o } = this.props,
            { error: r, identifierHash: i, lastErrorKey: a } = this.state;
          return r && o == a
            ? void 0 !== t
              ? "function" == typeof t
                ? t(r.error)
                : t
              : d.sm_ErrorReportingStore &&
                  d.sm_ErrorReportingStore.reporting_enabled
                ? n.createElement(m, {
                    error: r,
                    identifierHash: i,
                    store: d.sm_ErrorReportingStore,
                    onRefresh: this.Reset,
                  })
                : n.createElement(p, { error: r, onDismiss: this.Reset })
            : e || null;
        }
      }
      function u(e) {
        const { enabled: t } = e,
          [o, r] = n.useState(t),
          [i, s] = n.useState(a.b);
        n.useEffect(() => {
          const e = setTimeout(() => {
            o &&
              (i > 1
                ? s(i - 1)
                : (console.warn(
                    "Auto-reloading due to triggered ErrorBoundary...",
                  ),
                  window.location.reload()));
          }, 1e3);
          return () => clearTimeout(e);
        }, [o, i]);
        const l = n.useCallback(() => {
          console.log("Auto-reload canceled."), r(!1);
        }, []);
        return (
          n.useEffect(() => {
            const e = () => {
              l();
            };
            return (
              document.addEventListener("click", e),
              () => document.removeEventListener("click", e)
            );
          }, [l]),
          t
            ? o
              ? n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    v,
                    null,
                    "Reloading UI in ",
                    i,
                    " seconds...",
                  ),
                  "   ",
                  n.createElement(
                    "span",
                    {
                      style: { textDecoration: "underline", cursor: "pointer" },
                      onClick: l,
                    },
                    "Cancel",
                  ),
                  n.createElement("br", null),
                )
              : n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(v, null, "Auto-reload canceled."),
                  "   ",
                  n.createElement(
                    "span",
                    {
                      style: { textDecoration: "underline", cursor: "pointer" },
                      onClick: () => window.location.reload(),
                    },
                    "Reload now",
                  ),
                  n.createElement("br", null),
                )
            : null
        );
      }
      (0, r.Cg)([s.o], d.prototype, "Reset", null);
      const p = ({ error: e, onDismiss: t }) => {
          let o = e.error ? e.error.stack : "Stack missing",
            r = e.info ? e.info.componentStack : "",
            a = (e.error && e.error.message) || "unknown error";
          const s = n.useContext(i.GMj);
          return n.createElement(
            C,
            null,
            n.createElement(v, null, 'Error: "', a, '"'),
            "   ",
            n.createElement(
              "span",
              {
                style: { textDecoration: "underline", cursor: "pointer" },
                onClick: t,
              },
              "(x) Dismiss",
            ),
            n.createElement("br", null),
            n.createElement(u, { enabled: null == s }),
            n.createElement(g, null, o),
            n.createElement(g, null, "The error occurred while rendering:", r),
          );
        },
        m = (e) => {
          const { error: t, onRefresh: o, identifierHash: r, store: a } = e,
            s = (t.error && t.error.message) || "unknown error",
            l = `${a.product}_${a.version}_${r}`,
            c = n.useContext(i.GMj);
          return n.createElement(
            C,
            null,
            n.createElement(
              v,
              null,
              "Something went wrong while displaying this content. ",
              n.createElement(
                "span",
                {
                  style: { textDecoration: "underline", cursor: "pointer" },
                  onClick: o,
                },
                "Refresh",
              ),
            ),
            n.createElement(u, { enabled: null == c }),
            n.createElement(g, null, "Error Reference: ", l),
            n.createElement(g, null, s),
          );
        };
      function C(e) {
        return n.useContext(i.GMj) || (0, i.R$f)() != i.OH$.Overlay
          ? n.createElement(h, Object.assign({}, e))
          : n.createElement(
              i.dLy,
              {
                parent_path: "/user/head",
                translation: { y: -0.5, z: -0.9 },
                rotation: { x: -20 },
              },
              n.createElement(
                i.Zkm,
                {
                  debug_name: "vr_error_container",
                  meters_per_pixel: 75e-5,
                  origin: { x: -0.5, y: -1 },
                  interactive: !0,
                  make_overlays_interactive_if_visible: !0,
                },
                n.createElement(h, Object.assign({}, e)),
              ),
            );
      }
      const h = ({ children: e }) =>
          n.createElement(
            "div",
            {
              style: {
                overflow: "auto",
                marginLeft: "15px",
                color: "white",
                fontSize: "16px",
                userSelect: "auto",
                backgroundColor: "black",
              },
              className: "ErrorBoundary",
            },
            e,
          ),
        v = ({ children: e }) =>
          n.createElement(
            "h1",
            {
              style: {
                fontSize: "20px",
                display: "inline-block",
                marginTop: "15px",
                userSelect: "auto",
              },
            },
            e,
          ),
        g = ({ children: e }) =>
          n.createElement(
            "pre",
            { style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" } },
            e,
          );
    },
    1835: (e, t, o) => {
      "use strict";
      o.d(t, { JT: () => F, SW: () => I, Sm: () => D, tb: () => r });
      var r,
        n,
        i = o(1635),
        a = o(6090),
        s = o(3236),
        l = o(7813),
        c = o(1333),
        d = o(3606),
        u = o(4007),
        p = o(4963),
        m = o(6013),
        C = o(8803),
        h = o(9728),
        v = o(795),
        g = o(9978),
        _ = o(3246),
        f = o(3297),
        y = o(3696),
        b = o(2402),
        L = o(5026),
        S = o(4182),
        M = o(1909),
        V = o(3215),
        H = o(1651),
        w = o(3714);
      !(function (e) {
        (e[(e.PlayArea = 0)] = "PlayArea"),
          (e[(e.Dashboard = 1)] = "Dashboard");
      })(r || (r = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.View = 1)] = "View"),
            (e[(e.Theater = 2)] = "Theater");
        })(n || (n = {}));
      class R {
        get onForceDashboardRelatch() {
          return this.m_ForceDashboardRelatchCallbacks;
        }
        ForceRelatchDashboard(e) {
          this.m_ForceDashboardRelatchCallbacks.Dispatch(),
            this.m_mailbox.SendMessage(a.Jv8, {
              type: "relatch_dashboard",
              deadzone: e,
            });
        }
        get isFullyVisible() {
          return 1 == this.visibilityState;
        }
        get isDashboardDiminished() {
          return 2 == this.visibilityState;
        }
        get visibilityState() {
          return this.shouldShowKeyboardForUndockedFrame_Hack
            ? 10
            : this.visibilityState_IgnoringKeyboardHack;
        }
        get visibilityState_IgnoringKeyboardHack() {
          if (L.Mg.m_bIsVRLinkServer && L.Mg.unifiedDashboardEnabled) {
            const e =
              L.Mg.unifiedDashboardState_Remote.dashboard_visibility_state;
            return null != e
              ? e
              : L.Mg.unifiedDashboardState_Remote.dashboard_visible_DEPRECATED
                ? 1
                : 0;
          }
          return this.m_eVisibilityState;
        }
        OnShown() {
          this.m_eVisibilityState = 1;
        }
        OnHidden() {
          this.m_eVisibilityState = 0;
        }
        get canBeInDiminishedModeForActiveFrame() {
          var e, t, o, r, n, i;
          return (
            !(!this.isVRGamepadUI || !V.u.gamepadFocusAllowed) &&
            (null === (e = this.activeFrame) || void 0 === e
              ? void 0
              : e.docking.dockLocation) === a.yWq.Dashboard &&
              !(
                !(null ===
                  (o =
                    null === (t = this.activeFrame) || void 0 === t
                      ? void 0
                      : t.activePage) || void 0 === o
                  ? void 0
                  : o.inputFocus.supportsGamepadFocus) ||
                (null ===
                  (n =
                    null === (r = this.activeFrame) || void 0 === r
                      ? void 0
                      : r.activePage) || void 0 === n
                  ? void 0
                  : n.isSystemPanel)
              ) &&
                !!(
                  this.isFullyVisible ||
                  this.isDashboardDiminished ||
                  this.shouldShowKeyboardForUndockedFrame_Hack
                ) &&
            (!this.isDashboardDiminished ||
              (null === (i = this.activeFrame) || void 0 === i
                ? void 0
                : i.frameID) == this.m_unDiminishedStateFrameID)
          );
        }
        EnterDiminishedState() {
          this.canBeInDiminishedModeForActiveFrame &&
            ((this.m_eVisibilityState = 2),
            (this.m_unDiminishedStateFrameID = this.activeFrame.frameID),
            this.activeFrame.activePage.inputFocus.PushInputFocus());
        }
        get activeFrame() {
          return S.N.isLocked
            ? v.JJ.frames.find((e) => e.visibleWhenLocked)
            : v.JJ.GetFrame(this.activeFrameID);
        }
        get activeFrameID() {
          return L.Mg.useRemoteDashboardState
            ? L.Mg.unifiedDashboardState_Remote.active_dashboard_frame_id
            : this.m_unActiveFrameID;
        }
        get hasActiveFrame() {
          return null != v.JJ.GetFrame(this.activeFrameID);
        }
        _setActiveFrame(e, t) {
          L.Mg.useRemoteDashboardState
            ? console.log(
                "_setActiveFrame called when remote dashboard is active. This should be a request",
                e,
                t,
              )
            : ((this.m_unActiveFrameID = e),
              (this.m_sLastActiveOverlaySummonKey = t));
        }
        _updateLastActiveOverlaySummonKey() {
          var e, t;
          this.m_sLastActiveOverlaySummonKey =
            null ===
              (t =
                null === (e = this.activeFrame) || void 0 === e
                  ? void 0
                  : e.activePage) || void 0 === t
              ? void 0
              : t.summonOverlayKey;
        }
        get activeLocalFrame() {
          return v.JJ.GetLocalFrame(this.activeFrameID);
        }
        get mainSteamFrame() {
          return v.JJ.GetFrame(this.m_unMainSteamFrameID);
        }
        SetMainSteamFrame(e) {
          this.m_unMainSteamFrameID = null == e ? void 0 : e.frameID;
        }
        ClearTheaterHistoryForFrame(e) {
          this.m_rgTheaterFrameStack = this.m_rgTheaterFrameStack.filter(
            (t) => t.frameID != e,
          );
        }
        constructor() {
          (this.m_mailbox = new a._nH()),
            (this.m_eVisibilityState = 0),
            (this.m_unDiminishedStateFrameID = void 0),
            (this.m_ForceDashboardRelatchCallbacks = new H.l()),
            (this.m_setSuppressingFade = new Set()),
            (this.m_bShowLegacyDashboardBar = !1),
            (this.m_bVS = !1),
            (this.m_eVSMode = n.None),
            (this.m_sVSOverlayKey = void 0),
            (this.m_eTheaterStereo = a.MQJ.Mono),
            (this.m_eIncognitoMode = a.rxR.Unavailable),
            (this.m_mapActivePooledPopupRequests = new Map()),
            (this.m_fVRGamepadUI_MetersPerPixel = void 0),
            (this.m_dashboardUserDistance = void 0),
            (this.m_dashboardUserScale = void 0),
            (this.m_unActiveFrameID = void 0),
            (this.m_sLastActiveOverlaySummonKey = void 0),
            (this.m_unMainSteamFrameID = void 0),
            (this.m_bSuppressingFadeExternal = !1),
            (this.m_bTrackingRecording = !1),
            (this.m_bKeyboardVisible = !1),
            (this.m_bKeyboardDockedInDashboard = !1),
            (this.m_sKeyboardOverlayKey = null),
            (this.m_nKeyboardFlags = null),
            (this.m_rgForcingBoundsVisible = []),
            (this.m_sLastShownAppKey = ""),
            (this.m_nSystemBehaviorFlags = 0),
            (this.m_nStandingZeroPoseResetGeneration = 0),
            (this.m_nHMDFrameRate = void 0),
            (this.m_rgTheaterFrameStack = []),
            (this.m_OnDashboardGrabStart = new H.l()),
            (0, l.makeObservable)(this);
        }
        Init() {
          return (0, i.sH)(this, void 0, void 0, function* () {
            var e, t, o, r;
            yield this.LoadSessionDevData(),
              (0, l.autorun)(() => this.SaveSessionDevData()),
              (0, l.autorun)(this.updateBodyClasses),
              (this.m_eVisibilityState = (
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRCompositor.IsDashboardVisibleInternal()
              )
                ? 1
                : 0),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForTrackingRecordingChangedEvents(
                  this.onTrackingRecordingChanged,
                ),
              null ===
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForKeyboardInfoChangedEvents) ||
                void 0 === e ||
                e.call(VRHTML, this.onKeyboardInfoChanged),
              null ===
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForSystemBehaviorFlags) ||
                void 0 === t ||
                t.call(VRHTML, this.onSystemBehaviorFlags),
              null ===
                (o =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForStandingZeroPoseReset) ||
                void 0 === o ||
                o.call(VRHTML, () => {
                  this.m_nStandingZeroPoseResetGeneration += 1;
                }),
              null ===
                (r =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForHmdFrameRateChanged) ||
                void 0 === r ||
                r.call(VRHTML, (e) => {
                  this.m_nHMDFrameRate = e;
                }),
              (0, l.reaction)(
                () => this.visibilityState,
                (e, t) => {
                  const o = 0 != e,
                    r = 0 != t,
                    n = L.Mg.m_bIsVRLinkServer && L.Mg.unifiedDashboardEnabled;
                  r == o ||
                    n ||
                    p.u.Instance.playSound(
                      o ? p.j.DashboardOpen : p.j.DashboardClose,
                    );
                },
              ),
              (0, l.reaction)(
                () => this.isFullyVisible,
                (e) => {
                  null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRClient.PostDashboardActivatedEvent(e);
                },
              ),
              (0, l.reaction)(
                () => this.showLoadingThrobberOrBootOverlay,
                (e, t) => {
                  e && !t
                    ? ((0, a.EmM)(a.hqo.SmallDeadZone), (0, a.YsR)(!0))
                    : !e && t && (0, a.YsR)(!1);
                },
              ),
              this.SetVersionInfoPathProperties(),
              (0, l.autorun)(() => this.SetDashboardStatePathProperties()),
              this.m_mailbox.Init(a.M9N).then(() => {
                this.m_mailbox.RegisterHandler(
                  b.Q,
                  this.onSetDashboardForceBoundsVisible,
                ),
                  this.m_mailbox.RegisterHandler(
                    "vrcmd_toggle_theater_stereo",
                    this.onVrCmdToggleTheaterStereoRequested,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "disable_theater_mode",
                    this.onDisableTheaterMode,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "required_room_setup",
                    this.onRequiredRoomSetup,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "guided_tour_room_setup",
                    this.onGuidedTourRoomSetup,
                  ),
                  this.m_mailbox.RegisterHandler(
                    b.E,
                    this.onSetDashboardFadeSuppression,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "vrlink_room_setup",
                    this.onVRLinkRoomSetup,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "vrlink_focus_dashboard_bar",
                    this.FocusDashboardBar,
                  );
              }),
              M.p.SteamVR.SetImplementation(
                "FocusDashboardBar",
                this.FocusDashboardBar,
              ),
              M.p.SteamVR.SetImplementation(
                "CycleDashboardFocus",
                ({ target_frame_id: e }) => this.CycleDashboardFocus(e),
              ),
              v.JJ.OnFrameDestroyed.Register((e) => {
                var t, o, r;
                if (
                  (this.ClearTheaterHistoryForFrame(e.frameID),
                  e.docking.dockLocation == a.yWq.Theater)
                ) {
                  const e = this.m_rgTheaterFrameStack.filter(
                    (e) =>
                      e.state == v.Iu.Alive &&
                      e.docking.dockLocation == a.yWq.Dashboard,
                  );
                  e.length > 0
                    ? e[e.length - 1].docking.SetInTheater(!1)
                    : null ===
                        (t =
                          null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.VRClient) ||
                      void 0 === t ||
                      t.ShowDashboardOverlay({
                        overlayKey:
                          null ===
                            (r =
                              null === (o = this.mainSteamFrame) || void 0 === o
                                ? void 0
                                : o.activePage) || void 0 === r
                            ? void 0
                            : r.summonOverlayKey,
                        sReason: "theater frame destroyed",
                      });
                }
              }),
              (0, l.reaction)(
                () => v.JJ.theaterFrame,
                (e, t) => {
                  e
                    ? (this.m_rgTheaterFrameStack = [
                        ...this.m_rgTheaterFrameStack.filter(
                          (t) => t !== e && t.state == v.Iu.Alive,
                        ),
                        e,
                      ])
                    : e ||
                      this.m_rgTheaterFrameStack[
                        this.m_rgTheaterFrameStack.length - 1
                      ] !== t ||
                      (this.m_rgTheaterFrameStack =
                        this.m_rgTheaterFrameStack.filter(
                          (e) => e !== t && e.state == v.Iu.Alive,
                        ));
                },
                { fireImmediately: !0 },
              ),
              (0, l.reaction)(
                () =>
                  this.isDashboardDiminished &&
                  !this.canBeInDiminishedModeForActiveFrame,
                (e) => {
                  e && this.OnShown();
                },
              ),
              (0, l.reaction)(
                () =>
                  this.isDashboardDiminished ||
                  this.shouldShowKeyboardForUndockedFrame_Hack,
                (e) => {
                  e || (this.m_unDiminishedStateFrameID = void 0);
                },
              );
            let n = 0;
            (0, l.reaction)(
              () =>
                this.isFullyVisible &&
                V.u.computedInputFocus.m_entryAtTopOfStack.m_eType !=
                  a.YVg.Panel,
              (e) => {
                window.clearTimeout(n),
                  e &&
                    (n = window.setTimeout(() => {
                      var e, t, o;
                      (null === (e = this.activeFrame) || void 0 === e
                        ? void 0
                        : e.docking.dockLocation) == a.yWq.Dashboard
                        ? null ===
                            (o =
                              null === (t = this.activeFrame) || void 0 === t
                                ? void 0
                                : t.activePage) ||
                          void 0 === o ||
                          o.inputFocus.PushInputFocus()
                        : this.FocusDashboardBar();
                    }, 500));
              },
              { fireImmediately: !0 },
            ),
              (0, l.reaction)(
                () => this.shouldShowKeyboardForUndockedFrame_Hack,
                (e) => {
                  e && this.ForceRelatchDashboard();
                },
              );
          });
        }
        FocusDashboardBar() {
          var e;
          if (L.Mg.m_bIsVRLinkServer && L.Mg.unifiedDashboardEnabled)
            return void VRHTML.VRLink.SendFocusDashboardBarRequest();
          const t =
            null === (e = _.r.dashboardBarPopup) || void 0 === e
              ? void 0
              : e.panel;
          t && I.isFullyVisible && V.u.PushInputFocus(t.getSGID());
        }
        GetDashboardFocusCycleStops(e) {
          var t, o;
          const r = [],
            n = v.JJ.GetLocalFrame(null != e ? e : this.activeFrameID);
          (null == n ? void 0 : n.frameMenuPopupRequest) &&
            n.panels.menuPanelSGID &&
            r.push({
              sLabel: (0, w.we)("#Jump_To_Frame_Menu", n.title),
              bIsFocused: n.inputFocus.frameMenuHasFocus,
              Focus: n.inputFocus.FocusLeftFrameMenu,
            });
          const i =
            null === (t = _.r.dashboardBarPopup) || void 0 === t
              ? void 0
              : t.panel;
          return (
            this.isFullyVisible &&
              i &&
              r.push({
                sLabel: (0, w.we)("#Jump_To_DashboardBar"),
                bIsFocused: this.isDashboardBarOrChildPopupFocused,
                Focus: this.FocusDashboardBar,
              }),
            (null == n ? void 0 : n.shouldRenderFrameControls) &&
              n.panels.controlsPanelSGID &&
              r.push({
                sLabel: (0, w.we)("#Jump_To_Frame_Controls", n.title),
                bIsFocused: n.inputFocus.frameControlsHaveFocus,
                Focus: n.inputFocus.FocusFrameControls,
              }),
            (null === (o = null == n ? void 0 : n.activePage) || void 0 === o
              ? void 0
              : o.mainPanelSGID) &&
              r.push({
                sLabel: (0, w.we)("#Jump_To_Frame", n.title),
                bIsFocused: n.activePage.inputFocus.mainPanelHasFocus,
                Focus: n.inputFocus.FocusMainPanel,
              }),
            r
          );
        }
        get nextDashboardFocusCycleStop() {
          const e = this.GetDashboardFocusCycleStops(void 0);
          if (e.length < 2) return;
          const t = e.findIndex((e) => e.bIsFocused);
          return e[(t + 1) % e.length];
        }
        get cycleDashboardFocusLabel() {
          return (0, w.we)("#Cycle_View_Focus");
        }
        CycleDashboardFocus(e) {
          const t = this.GetDashboardFocusCycleStops(e);
          if (t.length < 2) return;
          const o = t.findIndex((e) => e.bIsFocused);
          t[(o + 1) % t.length].Focus();
        }
        SetVersionInfoPathProperties() {
          var e, t;
          const o = new m.M2();
          o.set_version(
            (null ===
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.SteamVRVersion) || void 0 === e
              ? void 0
              : e.call(VRHTML)) + "",
          ),
            o.set_webpack_build_timestamp(1790100414);
          const r =
            null ===
              (t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties) || void 0 === t
              ? void 0
              : t.GetStringProperty("/user/head", a.fD8.DriverVersion_String);
          r && o.set_hmd_tracking_info(r), C.m0.SetProtoPathProperty(o);
        }
        SetDashboardStatePathProperties() {
          C.m0.SetProtoPathProperty(
            m.XI.fromObject({
              dashboard_bar_visible: this.isFullyVisible,
              dashboard_bar_or_child_popup_focused:
                this.isDashboardBarOrChildPopupFocused,
              vrlink_role: L.Mg.m_bIsVRLinkServer
                ? 2
                : L.Mg.m_bIsVRLinkClient
                  ? 1
                  : 0,
              vrlink_unified_dashboard: L.Mg.unifiedDashboardEnabled,
              cycle_dashboard_focus_label: this.cycleDashboardFocusLabel,
            }),
          );
        }
        get isDashboardBarOrChildPopupFocused() {
          var e, t, o, r;
          if (L.Mg.m_bIsVRLinkServer && L.Mg.unifiedDashboardEnabled)
            return (
              null !==
                (e =
                  L.Mg.unifiedDashboardState_Remote
                    .dashboard_bar_or_child_popup_focused) &&
              void 0 !== e &&
              e
            );
          if (
            null ===
              (o =
                null === (t = _.r.dashboardBarPopup) || void 0 === t
                  ? void 0
                  : t.panel) || void 0 === o
              ? void 0
              : o.hasInputFocus
          )
            return !0;
          const n = _.r.requestsAndPanels.find(({ panel: e }) =>
            null == e ? void 0 : e.hasInputFocus,
          );
          return !!(0, _.R)(
            null == n ? void 0 : n.request,
            null === (r = _.r.dashboardBarPopup) || void 0 === r
              ? void 0
              : r.request,
          );
        }
        LoadSessionDevData() {
          return (0, i.sH)(this, void 0, void 0, function* () {
            var e, t, o, r;
            const n = JSON.parse(
              null !== (e = sessionStorage.getItem(R.k_strSessionStorageKey)) &&
                void 0 !== e
                ? e
                : "{}",
            );
            (this.m_bShowLegacyDashboardBar =
              null !== (t = n.m_bShowLegacyBar) && void 0 !== t && t),
              (this.m_fVRGamepadUI_MetersPerPixel =
                null !== (o = n.m_fVRGamepadUI_MetersPerPixel) && void 0 !== o
                  ? o
                  : (0.167 / 120) * 1.1);
            for (const e of null !== (r = n.m_rgPooledPopups) && void 0 !== r
              ? r
              : [])
              null != e.dashboard_popup_id &&
                this.m_mapActivePooledPopupRequests.set(
                  e.dashboard_popup_id,
                  e,
                );
          });
        }
        SaveSessionDevData() {
          return (0, i.sH)(this, void 0, void 0, function* () {
            const e = {
              m_bShowLegacyBar: this.m_bShowLegacyDashboardBar,
              m_rgPooledPopups: Array.from(
                this.m_mapActivePooledPopupRequests.values(),
              ),
              m_fVRGamepadUI_MetersPerPixel: this.m_fVRGamepadUI_MetersPerPixel,
            };
            sessionStorage.setItem(R.k_strSessionStorageKey, JSON.stringify(e));
          });
        }
        get showLoadingThrobberOrBootOverlay() {
          var e;
          return (
            null !== (e = c.HR.settings.get(d.qt)) &&
            void 0 !== e &&
            e &&
            this.isVRGamepadUI &&
            !this.isVRGamepadUIReady &&
            !this.m_bShowLegacyDashboardBar &&
            "none" == this.bareSessionMode
          );
        }
        get eTheaterCurvature() {
          return c.HR.settings.get(d.Ju);
        }
        ToggleTheaterCurvature() {
          const e =
            this.eTheaterCurvature == a.Doe.Curved ? a.Doe.Flat : a.Doe.Curved;
          c.HR.SetSettingsValue(d.Ju, e.toString());
        }
        onVrCmdToggleTheaterStereoRequested() {
          const e =
            this.m_eTheaterStereo == a.MQJ.Mono ? a.MQJ.Parallel : a.MQJ.Mono;
          (this.m_eTheaterStereo = e),
            console.log("Theater stereoscopy set to", a.MQJ[e]);
        }
        onDisableTheaterMode(e) {
          console.log("onDisableTheaterMode"), this.HideTheaterOverlay();
        }
        onRequiredRoomSetup(e) {
          y.H.startRequiredRoomSetupIfNeeded();
        }
        onGuidedTourRoomSetup(e) {
          y.H.setRoomSetupStep(7);
        }
        onSetDashboardFadeSuppression(e) {
          e.suppress_dashboard_fade
            ? this.m_setSuppressingFade.add(e.for_id)
            : this.m_setSuppressingFade.delete(e.for_id);
          const t = this.m_setSuppressingFade.size > 0;
          t != I.m_bSuppressingFadeExternal &&
            (I.m_bSuppressingFadeExternal = t);
        }
        onVRLinkRoomSetup(e) {
          e.mode == a.$Zy.RecenterCountdown
            ? y.H.setRoomSetupStep(1)
            : e.mode == a.$Zy.FloorAdjustExisting
              ? y.H.setRoomSetupStep(2)
              : e.mode == a.$Zy.RoomSetupFloor || e.mode == a.$Zy.RoomSetupFull
                ? y.H.setRoomSetupStep(7)
                : e.mode == a.$Zy.ClearRoomSetup
                  ? null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperoneSetup.ClearRoomSetup()
                  : console.error("Unknown onVRLinkRoomSetup mode ", e.mode);
        }
        HideTheaterOverlay(e = a.yWq.Dashboard, t) {
          var o, r, n;
          if (
            !(null === (o = v.JJ.theaterFrame) || void 0 === o
              ? void 0
              : o.asLocalFrame)
          )
            return;
          const i =
            null === (r = v.JJ.theaterFrame) || void 0 === r
              ? void 0
              : r.asLocalFrame;
          i.docking.SetDockLocation(e),
            t &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRClient.ShowDashboardOverlay({
                  overlayKey:
                    null === (n = i.activePage) || void 0 === n
                      ? void 0
                      : n.summonOverlayKey,
                  sReason: "DashboardStore_HideTheaterOverlay",
                }));
        }
        get allowCurvature() {
          var e;
          return (
            null ===
              (e = c.HR.settings.get("/settings/dashboard/allowCurvature")) ||
            void 0 === e ||
            e
          );
        }
        get isDarkMode() {
          return v.JJ.isTheaterMode;
        }
        setIncognitoMode(e) {
          this.m_eIncognitoMode = e;
        }
        get showIncognitoModeAction() {
          return !1;
        }
        get DashboardBarTint() {
          return this.isDarkMode ? { r: 0.1, g: 0.1, b: 0.1 } : void 0;
        }
        get GrabHandleTint() {
          return this.isDarkMode ? { r: 0.3, g: 0.3, b: 0.3 } : void 0;
        }
        get WorldLightingGain() {
          return this.isDarkMode ? { r: 0.2, g: 0.2, b: 0.2 } : void 0;
        }
        get isGroupMode() {
          return !1;
        }
        get allowScreenSharing() {
          return !1;
        }
        get isVRGamepadUIReady() {
          var e;
          return (
            null !== (e = u.Q.GetOverlayFlag(d.wi, 32768)) && void 0 !== e && e
          );
        }
        get isVRGamepadUI() {
          return (
            !(!c.HR.settings.get(d.qt) || "none" != this.bareSessionMode) ||
            this.isVRGamepadUIReady ||
            this.hasVRGamepadUIDashboardBar
          );
        }
        get dashboardBarUsesPooledPopup() {
          return f.F.HasCapability(18, a.fkw.MutualLocal);
        }
        get dashboardBarOverlayKey() {
          if (this.dashboardBarUsesPooledPopup) {
            const e = _.r.requests.find((e) => 1 == e.special_identifier);
            return null == e ? void 0 : e.popup_overlay_key;
          }
          return "valve.steam.gamepadui.bar";
        }
        get hasVRGamepadUIDashboardBar() {
          var e;
          return u.Q.BOverlayExists(
            null !== (e = this.dashboardBarOverlayKey) && void 0 !== e ? e : "",
          );
        }
        get currentDashboardPosition() {
          return this.isVRGamepadUI
            ? a.eod.VRGamepadUI
            : c.HR.settings.get(d.md);
        }
        get currentTheaterScreenAlignment() {
          return c.HR.settings.get(d.xY);
        }
        get defaultTheaterScale() {
          var e;
          const t =
            null !== (e = c.HR.settings.get(d.y5)) && void 0 !== e ? e : 2.1;
          return Math.max(0.5, Math.min(20, t));
        }
        get defaultTheaterDistance() {
          var e;
          const t =
            null !== (e = c.HR.settings.get(d.P0)) && void 0 !== e ? e : 3;
          return Math.max(0.5, Math.min(10, t));
        }
        updateBodyClasses() {
          this.isVRGamepadUI
            ? window.document.body.classList.add("VRGamepadUI")
            : window.document.body.classList.remove("VRGamepadUI");
        }
        onTrackingRecordingChanged(e) {
          this.m_bTrackingRecording = e;
        }
        onSystemBehaviorFlags(e) {
          e != this.m_nSystemBehaviorFlags && (this.m_nSystemBehaviorFlags = e);
        }
        onKeyboardInfoChanged(e) {
          (this.m_bKeyboardVisible = e.visible),
            (this.m_bKeyboardDockedInDashboard = e.dockedInDashboard),
            (this.m_sKeyboardOverlayKey = e.overlayKey),
            (this.m_nKeyboardFlags = e.keyboardFlags);
        }
        get shouldShowKeyboardForUndockedFrame_Hack() {
          if (!this.m_bKeyboardVisible || !this.m_bKeyboardDockedInDashboard)
            return !1;
          if (0 != this.visibilityState_IgnoringKeyboardHack) return !1;
          const e = v.JJ.GetFramesWithAssociatedSummonKeys(
            this.m_sKeyboardOverlayKey,
          )[0];
          return null != e && e.docking.dockLocation != a.yWq.Dashboard;
        }
        get dashboardDistance() {
          if (this.m_dashboardUserDistance) return this.m_dashboardUserDistance;
          return {
            [a.eod.Near]: 0.925,
            [a.eod.Middle]: 1.05,
            [a.eod.Far]: 1.2,
            [a.eod.VRGamepadUI]: 1.15,
          }[I.currentDashboardPosition];
        }
        get curvatureDistance() {
          return this.dashboardDistance + 1.8;
        }
        get dashboardTranslation() {
          var e;
          let t =
            0.01 *
            (null !==
              (e = c.HR.settings.get(
                "/settings/dashboard/verticalOffsetCm_2",
              )) && void 0 !== e
              ? e
              : 0);
          t += {
            [a.eod.Near]: -0.07,
            [a.eod.Middle]: -0.08,
            [a.eod.Far]: -0.09,
            [a.eod.VRGamepadUI]: -0.09,
          }[I.currentDashboardPosition];
          const o = -this.dashboardDistance,
            r = I.shouldShowKeyboardForUndockedFrame_Hack ? 0 : 0.25;
          return {
            channel: a.KIK.TheaterFast,
            from: [0, t, o],
            to: [0, t - r, o],
            interp: a.$ab.SmootherStep,
          };
        }
        get dashboardScale() {
          var e, t;
          if (L.Mg.m_bIsVRLinkServer && L.Mg.unifiedDashboardEnabled)
            return null !==
              (e = L.Mg.unifiedDashboardState_Remote.dashboard_scale) &&
              void 0 !== e
              ? e
              : 0.369;
          if (this.m_dashboardUserScale) return this.m_dashboardUserScale;
          let o = 1;
          const r = I.currentDashboardPosition;
          return (
            (o =
              r == a.eod.Near
                ? 0.36
                : r == a.eod.Middle
                  ? 0.41
                  : r == a.eod.Far
                    ? 0.47
                    : 0.41),
            (o *=
              null !==
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetFloatProperty(
                        a.Gze,
                        a.fD8.DashboardScale_Float,
                      )) && void 0 !== t
                ? t
                : 1),
            o
          );
        }
        get sceneAppDimmingActive() {
          var e, t;
          if (
            L.Mg.m_bIsVRLinkClient &&
            L.Mg.m_bVRLinkStreamingActive &&
            h.G.Instance.SceneAppIsVRLink
          )
            return !1;
          const o = h.G.Instance.SceneApplicationState !== a.HWH.None,
            r =
              this.m_bSuppressingFadeExternal &&
              (null ===
                (t =
                  null === (e = this.activeFrame) || void 0 === e
                    ? void 0
                    : e.activePage) || void 0 === t
                ? void 0
                : t.summonOverlayKey) == d.Wt,
            n = c.HR.settings.get(
              "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
            ),
            i = !h.G.Instance.SceneAppIsHome || !n;
          return (
            (this.isFullyVisible || this.isDashboardDiminished) && i && !r && o
          );
        }
        onSetDashboardForceBoundsVisible(e) {
          e.force_bounds_visible
            ? this.m_rgForcingBoundsVisible.push({
                for_overlay_key: e.for_overlay_key,
                for_id: e.for_id,
              })
            : (this.m_rgForcingBoundsVisible =
                this.m_rgForcingBoundsVisible.filter(
                  (t) =>
                    t.for_overlay_key != e.for_overlay_key ||
                    t.for_id != e.for_id,
                ));
        }
        get shouldForceBoundsVisible() {
          var e, t;
          const o =
            null ===
              (t =
                null === (e = this.activeFrame) || void 0 === e
                  ? void 0
                  : e.activePage) || void 0 === t
              ? void 0
              : t.summonOverlayKey;
          return (
            (this.isFullyVisible || this.isDashboardDiminished) &&
            this.m_rgForcingBoundsVisible.some((e) => e.for_overlay_key == o)
          );
        }
        get bareSessionMode() {
          return v.JJ.HasFramesWithAssociatedSummonKeys(d.Gl)
            ? "desktop"
            : v.JJ.HasFramesWithAssociatedSummonKeys(d.TH)
              ? "recovery"
              : "none";
        }
      }
      function D() {
        return (0, g.useObserver)(() => I.isVRGamepadUI);
      }
      function F() {
        return (0, g.useObserver)(() => I.bareSessionMode);
      }
      (R.k_strSessionStorageKey = "DashboardStoreSessionStorage"),
        (0, i.Cg)([l.observable], R.prototype, "m_eVisibilityState", void 0),
        (0, i.Cg)(
          [l.observable],
          R.prototype,
          "m_unDiminishedStateFrameID",
          void 0,
        ),
        (0, i.Cg)([l.computed], R.prototype, "isFullyVisible", null),
        (0, i.Cg)([l.computed], R.prototype, "isDashboardDiminished", null),
        (0, i.Cg)([l.computed], R.prototype, "visibilityState", null),
        (0, i.Cg)(
          [l.computed],
          R.prototype,
          "visibilityState_IgnoringKeyboardHack",
          null,
        ),
        (0, i.Cg)([l.action], R.prototype, "OnShown", null),
        (0, i.Cg)([l.action], R.prototype, "OnHidden", null),
        (0, i.Cg)(
          [l.computed],
          R.prototype,
          "canBeInDiminishedModeForActiveFrame",
          null,
        ),
        (0, i.Cg)([l.action], R.prototype, "EnterDiminishedState", null),
        (0, i.Cg)(
          [l.observable],
          R.prototype,
          "m_bShowLegacyDashboardBar",
          void 0,
        ),
        (0, i.Cg)([l.observable], R.prototype, "m_bVS", void 0),
        (0, i.Cg)([l.observable], R.prototype, "m_eVSMode", void 0),
        (0, i.Cg)([l.observable], R.prototype, "m_sVSOverlayKey", void 0),
        (0, i.Cg)([l.observable], R.prototype, "m_eTheaterStereo", void 0),
        (0, i.Cg)([l.observable], R.prototype, "m_eIncognitoMode", void 0),
        (0, i.Cg)(
          [l.observable],
          R.prototype,
          "m_mapActivePooledPopupRequests",
          void 0,
        ),
        (0, i.Cg)(
          [l.observable],
          R.prototype,
          "m_fVRGamepadUI_MetersPerPixel",
          void 0,
        ),
        (0, i.Cg)(
          [l.observable],
          R.prototype,
          "m_dashboardUserDistance",
          void 0,
        ),
        (0, i.Cg)([l.observable], R.prototype, "m_dashboardUserScale", void 0),
        (0, i.Cg)([l.observable], R.prototype, "m_unActiveFrameID", void 0),
        (0, i.Cg)(
          [l.observable],
          R.prototype,
          "m_sLastActiveOverlaySummonKey",
          void 0,
        ),
        (0, i.Cg)([l.computed], R.prototype, "activeFrame", null),
        (0, i.Cg)([l.computed], R.prototype, "activeFrameID", null),
        (0, i.Cg)([l.computed], R.prototype, "hasActiveFrame", null),
        (0, i.Cg)([l.action.bound], R.prototype, "_setActiveFrame", null),
        (0, i.Cg)(
          [l.action.bound],
          R.prototype,
          "_updateLastActiveOverlaySummonKey",
          null,
        ),
        (0, i.Cg)([l.computed], R.prototype, "activeLocalFrame", null),
        (0, i.Cg)([l.observable], R.prototype, "m_unMainSteamFrameID", void 0),
        (0, i.Cg)([l.computed], R.prototype, "mainSteamFrame", null),
        (0, i.Cg)([l.action], R.prototype, "SetMainSteamFrame", null),
        (0, i.Cg)(
          [l.observable],
          R.prototype,
          "m_bSuppressingFadeExternal",
          void 0,
        ),
        (0, i.Cg)([l.observable], R.prototype, "m_bTrackingRecording", void 0),
        (0, i.Cg)([l.observable], R.prototype, "m_bKeyboardVisible", void 0),
        (0, i.Cg)(
          [l.observable],
          R.prototype,
          "m_bKeyboardDockedInDashboard",
          void 0,
        ),
        (0, i.Cg)([l.observable], R.prototype, "m_sKeyboardOverlayKey", void 0),
        (0, i.Cg)([l.observable], R.prototype, "m_nKeyboardFlags", void 0),
        (0, i.Cg)(
          [l.observable],
          R.prototype,
          "m_rgForcingBoundsVisible",
          void 0,
        ),
        (0, i.Cg)([l.observable], R.prototype, "m_sLastShownAppKey", void 0),
        (0, i.Cg)(
          [l.observable],
          R.prototype,
          "m_nSystemBehaviorFlags",
          void 0,
        ),
        (0, i.Cg)(
          [l.observable],
          R.prototype,
          "m_nStandingZeroPoseResetGeneration",
          void 0,
        ),
        (0, i.Cg)([l.observable], R.prototype, "m_nHMDFrameRate", void 0),
        (0, i.Cg)([l.action], R.prototype, "ClearTheaterHistoryForFrame", null),
        (0, i.Cg)([s.o], R.prototype, "FocusDashboardBar", null),
        (0, i.Cg)(
          [l.computed],
          R.prototype,
          "nextDashboardFocusCycleStop",
          null,
        ),
        (0, i.Cg)([l.computed], R.prototype, "cycleDashboardFocusLabel", null),
        (0, i.Cg)([s.o], R.prototype, "CycleDashboardFocus", null),
        (0, i.Cg)(
          [l.computed],
          R.prototype,
          "isDashboardBarOrChildPopupFocused",
          null,
        ),
        (0, i.Cg)([s.o], R.prototype, "LoadSessionDevData", null),
        (0, i.Cg)([s.o], R.prototype, "SaveSessionDevData", null),
        (0, i.Cg)(
          [l.computed],
          R.prototype,
          "showLoadingThrobberOrBootOverlay",
          null,
        ),
        (0, i.Cg)([l.computed], R.prototype, "eTheaterCurvature", null),
        (0, i.Cg)(
          [l.action.bound],
          R.prototype,
          "onVrCmdToggleTheaterStereoRequested",
          null,
        ),
        (0, i.Cg)([l.action.bound], R.prototype, "onDisableTheaterMode", null),
        (0, i.Cg)([l.action.bound], R.prototype, "onRequiredRoomSetup", null),
        (0, i.Cg)([l.action.bound], R.prototype, "onGuidedTourRoomSetup", null),
        (0, i.Cg)(
          [l.action.bound],
          R.prototype,
          "onSetDashboardFadeSuppression",
          null,
        ),
        (0, i.Cg)([l.action.bound], R.prototype, "onVRLinkRoomSetup", null),
        (0, i.Cg)([l.action], R.prototype, "HideTheaterOverlay", null),
        (0, i.Cg)([l.computed], R.prototype, "allowCurvature", null),
        (0, i.Cg)([l.computed], R.prototype, "isDarkMode", null),
        (0, i.Cg)([l.action], R.prototype, "setIncognitoMode", null),
        (0, i.Cg)([l.computed], R.prototype, "showIncognitoModeAction", null),
        (0, i.Cg)([l.computed], R.prototype, "DashboardBarTint", null),
        (0, i.Cg)([l.computed], R.prototype, "GrabHandleTint", null),
        (0, i.Cg)([l.computed], R.prototype, "WorldLightingGain", null),
        (0, i.Cg)([l.computed], R.prototype, "isGroupMode", null),
        (0, i.Cg)([l.computed], R.prototype, "allowScreenSharing", null),
        (0, i.Cg)([l.computed], R.prototype, "isVRGamepadUIReady", null),
        (0, i.Cg)([l.computed], R.prototype, "isVRGamepadUI", null),
        (0, i.Cg)(
          [l.computed],
          R.prototype,
          "dashboardBarUsesPooledPopup",
          null,
        ),
        (0, i.Cg)([l.computed], R.prototype, "dashboardBarOverlayKey", null),
        (0, i.Cg)(
          [l.computed],
          R.prototype,
          "hasVRGamepadUIDashboardBar",
          null,
        ),
        (0, i.Cg)([l.computed], R.prototype, "currentDashboardPosition", null),
        (0, i.Cg)(
          [l.computed],
          R.prototype,
          "currentTheaterScreenAlignment",
          null,
        ),
        (0, i.Cg)([l.computed], R.prototype, "defaultTheaterScale", null),
        (0, i.Cg)([l.computed], R.prototype, "defaultTheaterDistance", null),
        (0, i.Cg)([s.o], R.prototype, "updateBodyClasses", null),
        (0, i.Cg)(
          [l.action.bound],
          R.prototype,
          "onTrackingRecordingChanged",
          null,
        ),
        (0, i.Cg)([l.action.bound], R.prototype, "onSystemBehaviorFlags", null),
        (0, i.Cg)([l.action.bound], R.prototype, "onKeyboardInfoChanged", null),
        (0, i.Cg)(
          [l.computed],
          R.prototype,
          "shouldShowKeyboardForUndockedFrame_Hack",
          null,
        ),
        (0, i.Cg)([l.computed], R.prototype, "dashboardDistance", null),
        (0, i.Cg)([l.computed], R.prototype, "curvatureDistance", null),
        (0, i.Cg)([l.computed], R.prototype, "dashboardTranslation", null),
        (0, i.Cg)([l.computed], R.prototype, "dashboardScale", null),
        (0, i.Cg)([l.computed], R.prototype, "sceneAppDimmingActive", null),
        (0, i.Cg)(
          [l.action.bound],
          R.prototype,
          "onSetDashboardForceBoundsVisible",
          null,
        ),
        (0, i.Cg)([l.computed], R.prototype, "shouldForceBoundsVisible", null),
        (0, i.Cg)([l.computed], R.prototype, "bareSessionMode", null);
      const I = new R();
      window.DashboardStore = I;
    },
    9961: (e, t, o) => {
      "use strict";
      o.d(t, { LD: () => d, ag: () => c, wP: () => u });
      var r = o(1635),
        n = o(7891),
        i = o(7813),
        a = o(1835),
        s = o(4007),
        l = o(6090);
      const c = 1.5;
      class d extends n.s {
        constructor(e) {
          super(e),
            (this.componentName = "size"),
            (this.defaultComponentProps = { allowResizing: 2 }),
            (0, i.makeObservable)(this);
        }
        get scaleForBottomControls() {
          switch (this.frame.docking.visualDockLocation) {
            case l.yWq.Theater:
              return a.SW.defaultTheaterScale;
            case l.yWq.LeftHand:
            case l.yWq.RightHand:
              return 0.5;
            default:
              return 1;
          }
        }
        get scaleForActivePage() {
          switch (this.frame.docking.visualDockLocation) {
            case l.yWq.Theater:
              return a.SW.defaultTheaterScale;
            case l.yWq.LeftHand:
            case l.yWq.RightHand:
              return 0.5;
            default:
              return 1;
          }
        }
        get resizingDisplacementFactor() {
          return this.frame.docking.visualDockLocation === l.yWq.Theater
            ? 1.75
            : 0;
        }
        get ignoreResizeAmount() {
          var e, t, o;
          if (
            null !==
              (o = s.Q.GetOverlayFlag(
                null ===
                  (t =
                    null === (e = null == this ? void 0 : this.frame) ||
                    void 0 === e
                      ? void 0
                      : e.activePage) || void 0 === t
                  ? void 0
                  : t.summonOverlayKey,
                67108864,
              )) &&
            void 0 !== o &&
            o
          )
            return !0;
          switch (this.componentProps.allowResizing) {
            case 0:
              return !0;
            case 1:
              return this.frame.docking.visualDockLocation == l.yWq.Dashboard;
            case 2:
              return !1;
          }
        }
        get mainPanelHeightOverride() {
          return this.frame.docking.visualDockLocation == l.yWq.Theater
            ? 2
            : null != this.componentProps.forcedUniformDashboardHeight
              ? this.componentProps.forcedUniformDashboardHeight
              : void 0;
        }
        get showResizeHandle() {
          var e, t, o;
          if (
            null !==
              (o = s.Q.GetOverlayFlag(
                null ===
                  (t =
                    null === (e = null == this ? void 0 : this.frame) ||
                    void 0 === e
                      ? void 0
                      : e.activePage) || void 0 === t
                  ? void 0
                  : t.summonOverlayKey,
                67108864,
              )) &&
            void 0 !== o &&
            o
          )
            return !1;
          switch (this.componentProps.allowResizing) {
            case 0:
              return !1;
            case 1:
              return this.frame.docking.visualDockLocation != l.yWq.Dashboard;
            case 2:
              return !0;
          }
        }
      }
      (0, r.Cg)([i.computed], d.prototype, "scaleForBottomControls", null),
        (0, r.Cg)([i.computed], d.prototype, "scaleForActivePage", null),
        (0, r.Cg)(
          [i.computed],
          d.prototype,
          "resizingDisplacementFactor",
          null,
        ),
        (0, r.Cg)([i.computed], d.prototype, "ignoreResizeAmount", null),
        (0, r.Cg)([i.computed], d.prototype, "mainPanelHeightOverride", null),
        (0, r.Cg)([i.computed], d.prototype, "showResizeHandle", null);
      class u extends n.d {
        constructor(e) {
          super(e),
            (this.componentName = "size"),
            (this.defaultComponentProps = {}),
            (this.m_lastPanelContentSize = void 0),
            (this.m_lastPanelMeasurement = void 0),
            (0, i.makeObservable)(this);
        }
        Init() {
          let e;
          this.OnDestroyed.Register(
            (0, i.autorun)(() => {
              var e;
              if (s.Q.BOverlayExists(this.framePage.summonOverlayKey)) {
                let t;
                try {
                  t = VRHTML.VROverlay.GetOverlayMouseScale(
                    null ===
                      (e = s.Q.GetOverlayInfo(
                        this.framePage.summonOverlayKey,
                      )) || void 0 === e
                      ? void 0
                      : e.sHandle,
                  );
                } catch (e) {}
                t &&
                  (this.m_lastPanelContentSize = {
                    unWidth: t.x,
                    unHeight: t.y,
                  });
              }
            }),
          ),
            this.OnDestroyed.Register(() =>
              null == e ? void 0 : e.Unregister(),
            ),
            this.OnDestroyed.Register(
              (0, i.reaction)(
                () => this.framePage.mainPanelID,
                (t) => {
                  null == e || e.Unregister(),
                    t &&
                      (e = l.uS7
                        .getInstance()
                        .SubscribeToPanelHeight(
                          this.framePage.mainPanelID,
                          (e) => (this.m_lastPanelMeasurement = e),
                        ));
                },
                { fireImmediately: !0 },
              ),
            );
        }
        get latestMeasuredPanelWorldHeight() {
          var e, t;
          return null !==
            (t =
              null === (e = this.m_lastPanelMeasurement) || void 0 === e
                ? void 0
                : e.m_flPanelHeight) && void 0 !== t
            ? t
            : 0;
        }
        get latestMeasuredPanelLocalHeight() {
          const e = this.mainPanelWorldScaleIgnoringResizing;
          return this.m_lastPanelMeasurement && 0 != e
            ? this.latestMeasuredPanelWorldHeight / e
            : 0;
        }
        get mainPanelWorldScaleIgnoringResizing() {
          return a.SW.dashboardScale * this.frame.size.scaleForActivePage;
        }
        get latestContentSize() {
          return this.m_lastPanelContentSize;
        }
        SetMainPanel(e) {
          if (!e) return { Unset: () => {} };
          e.lastDOMContentSize &&
            (this.m_lastPanelContentSize = {
              unWidth: e.lastDOMContentSize.clientWidth,
              unHeight: e.lastDOMContentSize.clientHeight,
            });
          return {
            Unset: e.RegisterForDOMContentSizeChangedCallback((e) => {
              e &&
                (this.m_lastPanelContentSize = {
                  unWidth: e.clientWidth,
                  unHeight: e.clientHeight,
                });
            }).Unregister,
          };
        }
      }
      (0, r.Cg)([i.observable], u.prototype, "m_lastPanelContentSize", void 0),
        (0, r.Cg)(
          [i.observable],
          u.prototype,
          "m_lastPanelMeasurement",
          void 0,
        ),
        (0, r.Cg)(
          [i.computed],
          u.prototype,
          "latestMeasuredPanelWorldHeight",
          null,
        ),
        (0, r.Cg)(
          [i.computed],
          u.prototype,
          "latestMeasuredPanelLocalHeight",
          null,
        ),
        (0, r.Cg)(
          [i.computed],
          u.prototype,
          "mainPanelWorldScaleIgnoringResizing",
          null,
        ),
        (0, r.Cg)([i.computed], u.prototype, "latestContentSize", null),
        (0, r.Cg)([i.action], u.prototype, "SetMainPanel", null);
    },
    3514: (e, t, o) => {
      "use strict";
      o.d(t, {
        F$: () => j,
        HC: () => W,
        Iu: () => q,
        dE: () => U,
        wI: () => K,
      });
      var r = o(1635),
        n = o(7813),
        i = o(296),
        a = o(6090),
        s = o(6540),
        l = o(1835),
        c = o(921),
        d = o(2156),
        u = o(3689),
        p = o(3481),
        m = o(9383),
        C = o(795),
        h = o(3246),
        v = o(8627),
        g = o(1333),
        _ = o(6848),
        f = o(3606),
        y = o(776),
        b = o(4562),
        L = o(3297),
        S = o(1651),
        M = o(249),
        V = o(1331),
        H = o(7727),
        w = o(9961),
        R = o(6539),
        D = o(3758),
        F = o(9674),
        I = o(5336),
        E = o(5735),
        k = o(2741),
        P = o(5026),
        T = o(3215),
        O = o(4182),
        x = o(247),
        Z = o(9995),
        A = o(5484),
        B = o(1391),
        G = o(3696),
        N = o(6135);
      const z = new y.wd("Frame");
      var q;
      !(function (e) {
        (e[(e.Uninitialized = 0)] = "Uninitialized"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Alive = 2)] = "Alive"),
          (e[(e.Destroyed = 3)] = "Destroyed");
      })(q || (q = {}));
      class W {
        RegisterComponent(e) {
          this.m_setComponents.add(e);
        }
        get OnDestroyed() {
          return this.m_OnDestroyed;
        }
        constructor(e, t, o) {
          (this.props = void 0),
            (this.m_eState = q.Uninitialized),
            (this.m_mapPages = new Map()),
            (this.m_unActivePageID = void 0),
            (this.m_unFrameMenuPopupID = void 0),
            (this.m_rgMenuItems_LeftFrameMenu = []),
            (this.m_rgMenuItems_TabHoverMenu = []),
            (this.m_rgControlsItems_BottomFrameControls = []),
            (this.m_rgControlsItems_TabHoverControls = []),
            (this.m_rgControlsItems_AdditionalOptions = []),
            (this.m_bControlAdditionalOptionsOpen = !1),
            (this.m_unControlAdditionalOptionsActionID = void 0),
            (this.m_vrAppEntry = void 0),
            (this.Log = new y.wd("Frame", () => this.logPrefix)),
            (this.m_unNextPageID = 1),
            (this.m_setComponents = new Set()),
            (this.sharing = void 0),
            (this.curvature = new V.vm(this)),
            (this.docking = new v.bQ(this)),
            (this.closing = new x.d(this)),
            (this.size = new w.LD(this)),
            (this.inputFocus = new B.i(this)),
            (this.panels = new N.X(this)),
            (this.m_OnDestroyed = new S.l()),
            (this.m_bPendingLoadAppInfo = !1),
            (this.m_bPendingInitialSyncWithSteam = !1),
            (this.m_unOverridePageID = void 0),
            (this.m_unFrameID = e),
            (this.tab = new Z.n(this, t)),
            (this.props = o),
            (0, n.makeObservable)(this);
        }
        get frameID() {
          return this.m_unFrameID;
        }
        get logPrefix() {
          return U(this, !1);
        }
        get state() {
          return this.m_eState;
        }
        get isPendingStateConcluded() {
          return (
            this.state == q.Pending &&
            (!p.JJ.supportedFrameFeatures.steamHelpsRenderFrame ||
              !this.m_bPendingInitialSyncWithSteam) &&
            !this.m_bPendingLoadAppInfo
          );
        }
        SetPageOverride(e) {
          (this.m_unOverridePageID = e instanceof m.sj ? e.pageID : e),
            null != this.activePage && this.SwitchToPage(this.activePage);
        }
        get title() {
          var e, t;
          return null !==
            (t =
              null === (e = this.props) || void 0 === e ? void 0 : e.title) &&
            void 0 !== t
            ? t
            : `Untitled Frame ${this.frameID}`;
        }
        get icon() {
          var e;
          if (
            (null === (e = this.props) || void 0 === e ? void 0 : e.icon) &&
            !Object.values(this.props.icon).every((e) => void 0 === e)
          )
            return this.props.icon;
        }
        get visibleWhenLocked() {
          var e;
          return (
            null !== (e = this.props.visibleWhenSteamLocked) &&
            void 0 !== e &&
            e
          );
        }
        get isStreamingClient() {
          var e;
          return (
            null !== (e = this.props.isStreamingClient) && void 0 !== e && e
          );
        }
        get isCurrentlyVisible() {
          if (this.state != q.Alive) return !1;
          if (O.N.isLocked && !this.props.visibleWhenSteamLocked) return !1;
          if (G.H.inRoomSetup) return !1;
          switch (this.docking.dockLocation) {
            case a.yWq.Dashboard:
              return (
                !(!l.SW.isFullyVisible && !l.SW.isDashboardDiminished) &&
                !!this.isActiveDashboardFrame &&
                (null == p.JJ.frameIDPreviewingDashboardDockSnap ||
                  p.JJ.frameIDPreviewingDashboardDockSnap == this.frameID)
              );
            case a.yWq.LeftHand:
            case a.yWq.RightHand:
            case a.yWq.Theater:
            case a.yWq.World:
              return !0;
          }
          return !1;
        }
        get shouldSuppressPanelBacksides() {
          return (
            this.docking.visualDockLocation == a.yWq.LeftHand ||
            this.docking.visualDockLocation == a.yWq.RightHand
          );
        }
        get activePageID() {
          return this.m_unActivePageID;
        }
        get activePage() {
          return null != this.m_unActivePageID
            ? this.m_mapPages.get(this.m_unActivePageID)
            : void 0;
        }
        get isActiveDashboardFrame() {
          return (0, k.gp)(l.SW.activeFrame, this);
        }
        get isActiveDashboardFrameInDiminishedMode() {
          return this.isActiveDashboardFrame && l.SW.isDashboardDiminished;
        }
        get pageIDs() {
          return Array.from(this.m_mapPages.keys());
        }
        get pages() {
          return Array.from(this.m_mapPages.values());
        }
        get associatedSummonOverlayKeys() {
          return this.pages
            .map((e) => e.summonOverlayKey)
            .filter((e) => Boolean(e))
            .filter(Boolean);
        }
        get frameMenuPopupRequest() {
          if (null != this.m_unFrameMenuPopupID)
            return h.r.GetRequestForID(this.m_unFrameMenuPopupID);
        }
        get shouldRenderFrameControls() {
          var e;
          return (
            !F.T.isOOBE &&
            !O.N.isLocked &&
            !(null === (e = this.activePage) || void 0 === e
              ? void 0
              : e.shouldShowMinimalDecorations)
          );
        }
        get frameControlsVisibilityRequiresLaser() {
          var e;
          return (
            !!this.isActiveDashboardFrameInDiminishedMode ||
            (!(null === (e = this.panels.controlsPanel) || void 0 === e
              ? void 0
              : e.hasGamepadFocus) &&
              !this.inputFocus.additionalOptionsHaveGamepadFocus)
          );
        }
        get frameMenuVisibilityRequiresLaser() {
          var e;
          return !(null === (e = this.activePage) || void 0 === e
            ? void 0
            : e.isSystemPanel);
        }
        get isRemoteFrame() {
          return !1;
        }
        get asLocalFrame() {
          return this;
        }
        get frameControlsTransformID() {
          return `frame:${this.frameID}:bottom-controls-transform`;
        }
        get pageForSpatialize() {
          let e = this.activePage;
          for (const t of this.pages)
            if (t.canSpatialize) {
              e = t;
              break;
            }
          return e;
        }
        get canSpatialize() {
          var e;
          return (
            (null === (e = this.pageForSpatialize) || void 0 === e
              ? void 0
              : e.canSpatialize) || !1
          );
        }
        get isSpatializeEnabled() {
          var e;
          return (
            (null === (e = this.pageForSpatialize) || void 0 === e
              ? void 0
              : e.isSpatializeEnabled) || !1
          );
        }
        SetSpatializeEnabled(e) {
          var t;
          null === (t = this.pageForSpatialize) ||
            void 0 === t ||
            t.SetSpatializeEnabled(e);
        }
        get enablePositionalStereo() {
          return this.isSpatializeEnabled;
        }
        get allowInputCapture() {
          return (
            this.docking.dockLocation == a.yWq.Theater ||
            g.HR.settings.get("/settings/dashboard/inputCaptureEnabled")
          );
        }
        LoadAppManifestInfo() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            const e = this.associatedSummonOverlayKeys[0],
              t = yield g.HR.GetAppInfo(e);
            (0, n.runInAction)(() => {
              (this.m_vrAppEntry = t),
                (this.docking.m_fLastTotalVisibleTimeInSeconds = (0, _.wT)(e)),
                (this.m_bPendingLoadAppInfo = !1);
            });
          });
        }
        OnPendingComplete() {
          var e, t;
          this.m_eState = q.Alive;
          "valve.steam.gamepadui.bootstrapper" ==
          (null === (e = this.activePage) || void 0 === e
            ? void 0
            : e.summonOverlayKey)
            ? this.docking.SetDockLocation(a.yWq.Boot)
            : this.associatedSummonOverlayKeys.some((e) =>
                e.startsWith("gamescope."),
              ) &&
              l.SW.isFullyVisible &&
              (null === (t = _.cQ.Instance) ||
                void 0 === t ||
                t.switchToFrameInternal(this, void 0, "OnPendingComplete"));
        }
        GetPageWithID(e) {
          return this.m_mapPages.get(e);
        }
        GetPageWithOverlaySummonKey(e) {
          if (e) return this.pages.find((t) => t.summonOverlayKey === e);
        }
        Init() {
          if (this.m_eState == q.Uninitialized) {
            this.OnDestroyed.Register(
              (0, n.reaction)(
                () => this.pages.filter((e) => e.state == C.JP.Destroyed),
                this.OnPagesDestroyed,
              ),
            ),
              (this.m_bPendingInitialSyncWithSteam =
                p.JJ.supportedFrameFeatures.steamHelpsRenderFrame),
              (this.m_bPendingLoadAppInfo = !0),
              this.LoadAppManifestInfo(),
              (this.m_eState = q.Pending),
              this.OnDestroyed.Register(
                (0, n.when)(
                  () => this.isPendingStateConcluded,
                  this.OnPendingComplete,
                ),
              ),
              this.OnDestroyed.Register(
                (0, n.autorun)(() => {
                  this.Log.IsDebugEnabled() &&
                    this.Log.Debug(
                      "Proto updated:",
                      JSON.parse(JSON.stringify(this.protoForSteam)),
                    );
                }),
              ),
              this.OnDestroyed.Register(
                (0, n.reaction)(
                  () => this.docking.dockLocation,
                  () => this.SetControlAdditionalOptionsOpen(!1),
                ),
              ),
              this.OnDestroyed.Register(
                (0, n.reaction)(
                  () =>
                    this.isCurrentlyVisible && this.shouldRenderFrameControls,
                  (e) => {
                    e || this.SetControlAdditionalOptionsOpen(!1);
                  },
                ),
              ),
              this.OnDestroyed.Register(
                (0, n.reaction)(
                  () =>
                    this.inputFocus.frameControlsHaveFocus ||
                    T.u.BPanelHasFocus(this.panels.additionalOptionsPanelSGID),
                  (e) => {
                    e || this.SetControlAdditionalOptionsOpen(!1);
                  },
                ),
              );
            for (const e of this.m_setComponents) e.Init();
            this.Log.Info("Frame initialized.");
          }
        }
        OnPagesDestroyed(e) {
          e.forEach((e) => {
            this.m_mapPages.delete(e.pageID);
          }),
            this.m_unActivePageID &&
              (this.m_mapPages.has(this.m_unActivePageID) ||
                (this.pageIDs.length
                  ? (this.m_unActivePageID = this.pageIDs[0])
                  : (this.m_unActivePageID = void 0)));
        }
        DestroyFrame() {
          this.m_eState != q.Destroyed &&
            (this.Log.Info("Frame destroyed."),
            (this.m_eState = q.Destroyed),
            this.m_OnDestroyed.Dispatch(),
            this.m_OnDestroyed.ClearAllCallbacks());
        }
        CreatePage(e) {
          const t = new m.sj(this, this.m_unNextPageID++, e);
          return (
            queueMicrotask(() =>
              (0, n.runInAction)(() => {
                this.m_mapPages.set(t.pageID, t),
                  this.m_unActivePageID || (this.m_unActivePageID = t.pageID);
              }),
            ),
            t
          );
        }
        SwitchToPage(e) {
          let t = e instanceof m.sj ? e : this.m_mapPages.get(e);
          null != this.m_unOverridePageID &&
            (t = this.GetPageWithID(this.m_unOverridePageID)),
            t && (this.m_unActivePageID = t.pageID);
        }
        CreateAction(...e) {
          const t = u.g.CreateAction(...e);
          return this.OnDestroyed.Register(() => t.Destroy()), t;
        }
        SetMenuItems(e, t) {
          (this.m_rgMenuItems_LeftFrameMenu = e),
            (this.m_rgMenuItems_TabHoverMenu = t);
        }
        SetControlsItems(e, t, o) {
          (this.m_rgControlsItems_BottomFrameControls = e),
            (this.m_rgControlsItems_TabHoverControls = t),
            (this.m_rgControlsItems_AdditionalOptions = o);
        }
        get controlAdditionalOptionsItems() {
          return this.m_rgControlsItems_AdditionalOptions;
        }
        get isControlAdditionalOptionsOpen() {
          return (
            this.m_bControlAdditionalOptionsOpen &&
            this.m_rgControlsItems_AdditionalOptions.length > 0
          );
        }
        SetControlAdditionalOptionsOpen(e) {
          this.m_bControlAdditionalOptionsOpen = e;
        }
        get controlAdditionalOptionsActionID() {
          return this.m_unControlAdditionalOptionsActionID;
        }
        SetControlAdditionalOptionsActionID(e) {
          this.m_unControlAdditionalOptionsActionID = e;
        }
        get protoForSteam() {
          var e, t, o, r, n, i;
          if (this.state == q.Uninitialized || this.state == q.Destroyed)
            return;
          const s =
              P.Mg.m_bIsVRLinkServer &&
              P.Mg.m_eVRLinkDashboardMode == a.Fzk.SteamVRClientLegacyDual,
            l = {
              frame_id: this.frameID,
              menu: {
                items_for_left_frame_menu:
                  null !== (e = this.m_rgMenuItems_LeftFrameMenu) &&
                  void 0 !== e
                    ? e
                    : [],
                items_for_tab_hover_menu:
                  null !== (t = this.m_rgMenuItems_TabHoverMenu) && void 0 !== t
                    ? t
                    : [],
              },
              controls: {
                items_for_bottom_frame_controls:
                  null !== (o = this.m_rgControlsItems_BottomFrameControls) &&
                  void 0 !== o
                    ? o
                    : [],
                items_for_tab_hover_menu:
                  null !== (r = this.m_rgControlsItems_TabHoverControls) &&
                  void 0 !== r
                    ? r
                    : [],
              },
              frame_actions: {
                focus_main_panel_action: this.inputFocus.focusMainPanelActionID,
                focus_left_frame_menu_action:
                  this.inputFocus.focusLeftFrameMenuActionID,
              },
              is_vrlink_remote: s,
              is_streaming_client: this.isStreamingClient,
              steamui_page_overlay_keys:
                this.associatedSummonOverlayKeys.filter((e) =>
                  e.startsWith("valve.steam."),
                ),
            };
          p.JJ.supportedFrameFeatures.steamHelpsRenderFrame &&
            !p.JJ.supportedFrameFeatures.steamRendersFrameControls &&
            (function (e) {
              var t;
              if (
                null ==
                (null === (t = null == e ? void 0 : e.controls) || void 0 === t
                  ? void 0
                  : t.items_for_tab_hover_menu)
              )
                return;
              const o = e.controls.items_for_tab_hover_menu.map((e) => {
                let t;
                switch (e.type) {
                  case 2:
                    t = 3;
                    break;
                  case 1:
                    t = 1;
                }
                return { action_id: e.action_id, type: t };
              });
              e.controls.items_for_tab_hover_menu.length > 0 &&
                (e.menu.items_for_tab_hover_menu = [
                  ...e.menu.items_for_tab_hover_menu,
                  { type: 2 },
                  ...o,
                ]);
            })(l),
            this.shouldRenderFrameControls ||
              (l.controls.items_for_bottom_frame_controls = void 0),
            (F.T.isOOBE || O.N.isLocked) &&
              (l.menu.items_for_left_frame_menu = void 0);
          const c = new Set();
          return (
            null === (n = l.menu.items_for_left_frame_menu) ||
              void 0 === n ||
              n.forEach((e) => c.add(e.action_id)),
            null === (i = l.menu.items_for_tab_hover_menu) ||
              void 0 === i ||
              i.forEach((e) => c.add(e.action_id)),
            (l.action_definitions = [...c]
              .map((e) => {
                var t;
                return null === (t = u.g.GetAction(e)) || void 0 === t
                  ? void 0
                  : t.protoForSteam;
              })
              .filter(Boolean)),
            L.F.HasCapability(20, a.fkw.MutualLocal) || (0, M.Mx)(l.menu),
            (l.dock_location = (function (e) {
              switch (e) {
                case a.yWq.Dashboard:
                  return 1;
                case a.yWq.LeftHand:
                  return 2;
                case a.yWq.RightHand:
                  return 3;
                case a.yWq.World:
                  return 4;
                case a.yWq.Theater:
                  return 5;
                case a.yWq.Boot:
                  return 6;
              }
            })(this.docking.dockLocation)),
            (l.game_app_id = this.props.gameAppID),
            l
          );
        }
        get protoForVRLink() {
          return {
            tab: this.tab.proto,
            icon: this.icon,
            is_currently_visible: this.isCurrentlyVisible,
            should_render_frame_controls: this.shouldRenderFrameControls,
            should_suppress_panel_backsides: this.shouldSuppressPanelBacksides,
            title: this.title,
          };
        }
        OnFrameUpdateResultFromSteam(e) {
          if (this.m_eState == q.Destroyed) return;
          const { frame_id: t } = e,
            o = (0, r.Tt)(e, ["frame_id"]);
          this.Log.Info("Update result:", JSON.stringify(o)),
            (this.m_unFrameMenuPopupID = e.frame_menu_dashboard_popup_id),
            (this.m_bPendingInitialSyncWithSteam = !1);
        }
      }
      function U(e, t) {
        let o = e.title;
        return (
          z.IsDebugEnabled() ||
            k.VB.includes(o) ||
            (o = (0, E.hash)(o).substring(0, k.kr)),
          o.length > k.kr && (o = o.substring(0, k.kr - 3) + "..."),
          `${e.frameID}${t ? " (remote)" : ""} "${o}"`
        );
      }
      (0, r.Cg)([n.observable.ref], W.prototype, "props", void 0),
        (0, r.Cg)([n.observable], W.prototype, "m_eState", void 0),
        (0, r.Cg)([n.observable], W.prototype, "m_mapPages", void 0),
        (0, r.Cg)([n.observable], W.prototype, "m_unActivePageID", void 0),
        (0, r.Cg)([n.observable], W.prototype, "m_unFrameMenuPopupID", void 0),
        (0, r.Cg)(
          [n.observable],
          W.prototype,
          "m_rgMenuItems_LeftFrameMenu",
          void 0,
        ),
        (0, r.Cg)(
          [n.observable],
          W.prototype,
          "m_rgMenuItems_TabHoverMenu",
          void 0,
        ),
        (0, r.Cg)(
          [n.observable],
          W.prototype,
          "m_rgControlsItems_BottomFrameControls",
          void 0,
        ),
        (0, r.Cg)(
          [n.observable],
          W.prototype,
          "m_rgControlsItems_TabHoverControls",
          void 0,
        ),
        (0, r.Cg)(
          [n.observable.struct],
          W.prototype,
          "m_rgControlsItems_AdditionalOptions",
          void 0,
        ),
        (0, r.Cg)(
          [n.observable],
          W.prototype,
          "m_bControlAdditionalOptionsOpen",
          void 0,
        ),
        (0, r.Cg)(
          [n.observable],
          W.prototype,
          "m_unControlAdditionalOptionsActionID",
          void 0,
        ),
        (0, r.Cg)([n.observable], W.prototype, "m_vrAppEntry", void 0),
        (0, r.Cg)([n.computed], W.prototype, "logPrefix", null),
        (0, r.Cg)([n.computed], W.prototype, "state", null),
        (0, r.Cg)([n.observable], W.prototype, "m_bPendingLoadAppInfo", void 0),
        (0, r.Cg)(
          [n.observable],
          W.prototype,
          "m_bPendingInitialSyncWithSteam",
          void 0,
        ),
        (0, r.Cg)([n.computed], W.prototype, "isPendingStateConcluded", null),
        (0, r.Cg)([n.computed], W.prototype, "title", null),
        (0, r.Cg)([n.computed.struct], W.prototype, "icon", null),
        (0, r.Cg)([n.computed], W.prototype, "visibleWhenLocked", null),
        (0, r.Cg)([n.computed], W.prototype, "isStreamingClient", null),
        (0, r.Cg)([n.computed], W.prototype, "isCurrentlyVisible", null),
        (0, r.Cg)(
          [n.computed],
          W.prototype,
          "shouldSuppressPanelBacksides",
          null,
        ),
        (0, r.Cg)([n.computed], W.prototype, "activePageID", null),
        (0, r.Cg)([n.computed], W.prototype, "activePage", null),
        (0, r.Cg)([n.computed], W.prototype, "isActiveDashboardFrame", null),
        (0, r.Cg)(
          [n.computed],
          W.prototype,
          "isActiveDashboardFrameInDiminishedMode",
          null,
        ),
        (0, r.Cg)([n.computed], W.prototype, "pageIDs", null),
        (0, r.Cg)([n.computed], W.prototype, "pages", null),
        (0, r.Cg)(
          [n.computed],
          W.prototype,
          "associatedSummonOverlayKeys",
          null,
        ),
        (0, r.Cg)([n.computed], W.prototype, "frameMenuPopupRequest", null),
        (0, r.Cg)([n.computed], W.prototype, "shouldRenderFrameControls", null),
        (0, r.Cg)(
          [n.computed],
          W.prototype,
          "frameControlsVisibilityRequiresLaser",
          null,
        ),
        (0, r.Cg)(
          [n.computed],
          W.prototype,
          "frameMenuVisibilityRequiresLaser",
          null,
        ),
        (0, r.Cg)([n.computed], W.prototype, "frameControlsTransformID", null),
        (0, r.Cg)([n.computed], W.prototype, "pageForSpatialize", null),
        (0, r.Cg)([n.computed], W.prototype, "canSpatialize", null),
        (0, r.Cg)([n.computed], W.prototype, "isSpatializeEnabled", null),
        (0, r.Cg)([n.action.bound], W.prototype, "SetSpatializeEnabled", null),
        (0, r.Cg)([n.computed], W.prototype, "enablePositionalStereo", null),
        (0, r.Cg)([n.computed], W.prototype, "allowInputCapture", null),
        (0, r.Cg)([n.action.bound], W.prototype, "OnPendingComplete", null),
        (0, r.Cg)([n.action], W.prototype, "Init", null),
        (0, r.Cg)([n.action.bound], W.prototype, "OnPagesDestroyed", null),
        (0, r.Cg)([n.action], W.prototype, "DestroyFrame", null),
        (0, r.Cg)([n.action], W.prototype, "SwitchToPage", null),
        (0, r.Cg)([n.action], W.prototype, "SetMenuItems", null),
        (0, r.Cg)([n.action], W.prototype, "SetControlsItems", null),
        (0, r.Cg)(
          [n.computed],
          W.prototype,
          "controlAdditionalOptionsItems",
          null,
        ),
        (0, r.Cg)(
          [n.computed],
          W.prototype,
          "isControlAdditionalOptionsOpen",
          null,
        ),
        (0, r.Cg)(
          [n.action],
          W.prototype,
          "SetControlAdditionalOptionsOpen",
          null,
        ),
        (0, r.Cg)(
          [n.computed],
          W.prototype,
          "controlAdditionalOptionsActionID",
          null,
        ),
        (0, r.Cg)(
          [n.action],
          W.prototype,
          "SetControlAdditionalOptionsActionID",
          null,
        ),
        (0, r.Cg)([n.computed.struct], W.prototype, "protoForSteam", null),
        (0, r.Cg)([n.computed.struct], W.prototype, "protoForVRLink", null),
        (0, r.Cg)(
          [n.action.bound],
          W.prototype,
          "OnFrameUpdateResultFromSteam",
          null,
        );
      const K = (0, i.PA)(
        s.forwardRef(function (e, t) {
          var o, r, i, u, m, C;
          const { children: h } = e,
            v = s.useMemo(() => p.JJ.CreateCFrame(e), []);
          s.useLayoutEffect(() =>
            (0, n.runInAction)(() => {
              v.props = e;
            }),
          ),
            (0, c.D5)(t, v),
            s.useEffect(() => (v.Init(), () => v.DestroyFrame()), [v]);
          let g = p.JJ.GetDockLocationTransformID(
            v.docking.dockLocation,
            v.frameID,
          );
          return (
            g ||
              v.docking.dockLocation != a.yWq.World ||
              (g = p.JJ.GetDockLocationTransformID(a.yWq.Dashboard, v.frameID)),
            s.createElement(
              H.t.Provider,
              { value: { frame: v, page: void 0 } },
              s.createElement(
                R.e,
                {
                  frame_id: v.frameID,
                  dock_location: v.docking.dockLocation,
                  dock_location_preview: v.docking.previewDockLocation,
                  resize_displacement: v.size.resizingDisplacementFactor,
                  resize_scale_min: f.Ul,
                  resize_scale_max: f.mB,
                  ignore_resize_amount: v.size.ignoreResizeAmount,
                  allow_input_capture: v.allowInputCapture,
                  override_pre_resize_main_panel_height:
                    v.size.mainPanelHeightOverride,
                  suppress_panel_backsides: v.shouldSuppressPanelBacksides,
                  main_panel_input_focus_override:
                    null ===
                      (r =
                        null === (o = v.activePage) || void 0 === o
                          ? void 0
                          : o.inputFocus) || void 0 === r
                      ? void 0
                      : r.inputFocusParams,
                  main_panel_origin: v.docking.mainPanelOrigin,
                  main_panel_focus_outline:
                    null === (i = v.activePage) || void 0 === i
                      ? void 0
                      : i.inputFocus.focusOutline,
                },
                h,
                v.isCurrentlyVisible &&
                  g &&
                  s.createElement(
                    a.dLy,
                    {
                      parent_id: g,
                      ignore_parent_scale: !0,
                      scale: l.SW.dashboardScale,
                    },
                    s.createElement(
                      a.dLy,
                      { scale: v.size.scaleForActivePage },
                      s.createElement(
                        a.dLy,
                        {
                          translation:
                            v.docking.panelTranslationForResizeOrigin,
                        },
                        s.createElement(a.HWh, {
                          mountedId:
                            null === (u = v.activePage) || void 0 === u
                              ? void 0
                              : u.mountableID,
                        }),
                      ),
                    ),
                    s.createElement(
                      a.dLy,
                      {
                        id: v.frameControlsTransformID,
                        parent_id:
                          null === (m = v.activePage) || void 0 === m
                            ? void 0
                            : m.GetPanelAnchorID(a.OiK.BottomCenter),
                        scale:
                          v.size.scaleForBottomControls /
                          v.size.scaleForActivePage,
                        frame_resize_scale_factor:
                          v.docking.dockLocation == a.yWq.Theater ? 0.5 : 0,
                      },
                      s.createElement(b.t, { frame: v }),
                    ),
                    v.frameMenuPopupRequest &&
                      s.createElement(
                        a.dLy,
                        {
                          parent_id:
                            null === (C = v.activePage) || void 0 === C
                              ? void 0
                              : C.GetPanelAnchorID(a.OiK.CenterLeft),
                        },
                        s.createElement(d.O2, {
                          popupRequest: v.frameMenuPopupRequest,
                          refPanel: v.panels.SetMenuPanel,
                          only_visible_with_laser:
                            v.frameMenuVisibilityRequiresLaser,
                        }),
                      ),
                    s.createElement(A.y, null),
                    s.createElement(V.RS, null),
                    s.createElement(D.X, null),
                    v.size.showResizeHandle && s.createElement(I.W, null),
                  ),
              ),
            )
          );
        }),
      );
      function j(e, t, o) {
        const r = s.useRef(void 0);
        r.current = o;
        const n = s.useMemo(
          () =>
            null == e
              ? void 0
              : e.CreateAction(t, (...e) => {
                  var t;
                  return null === (t = r.current) || void 0 === t
                    ? void 0
                    : t.call(r, ...e);
                }),
          [e],
        );
        return (
          s.useLayoutEffect(() => (null == n ? void 0 : n.SetParams(t))),
          s.useEffect(() => () => (null == n ? void 0 : n.Destroy()), [n]),
          n
        );
      }
    },
    7727: (e, t, o) => {
      "use strict";
      o.d(t, { N: () => i, t: () => n });
      var r = o(6540);
      const n = r.createContext({ frame: void 0, page: void 0 });
      function i() {
        return r.useContext(n);
      }
    },
    9448: (e, t, o) => {
      "use strict";
      o.d(t, { U0: () => f, dm: () => H, jF: () => _, o3: () => m });
      var r = o(296),
        n = o(6540),
        i = o(7727),
        a = o(1139),
        s = o(3714),
        l = o(6090),
        c = o(3514),
        d = (o(3215), o(1973)),
        u = o(1835);
      const p = n.createContext({
        CreateControlsItemID: void 0,
        OnControlsItemRender: void 0,
        OnControlsItemMounted: void 0,
        OnControlsItemUnmounted: void 0,
      });
      function m(e) {
        const { frame: t } = (0, i.N)();
        if (!t)
          throw new Error(
            "<FrameControls> must be inside a <Frame> component.",
          );
        const o = n.useRef(1),
          r = n.useRef([]),
          s = n.useRef([]),
          l = n.useRef([]),
          c = n.useMemo(() => new Map(), []),
          d = n.useRef(!1),
          u = n.useRef(!0),
          m = n.useCallback(() => {
            const e = r.current.map((e) => c.get(e)),
              o = s.current.map((e) => c.get(e)),
              n = l.current.map((e) => c.get(e));
            t.SetControlsItems(e, o, n);
          }, []);
        n.useEffect(() => () => t.SetControlsItems([], [], []), []),
          d.current &&
            ((d.current = !1),
            (u.current = !0),
            (r.current = []),
            (s.current = []),
            (l.current = []));
        const C = (0, a.CH)();
        n.useEffect(() => {
          !u.current ||
            (0 == r.current.length &&
              0 == s.current.length &&
              0 == l.current.length) ||
            (m(), (u.current = !1));
        });
        const h = {
          CreateControlsItemID: () => o.current++,
          OnControlsItemRender: (e, t, o) => {
            c.set(e, t);
            const i = n.useRef(!1);
            u.current
              ? (o.bVisibleInBottomFrameControls && r.current.push(e),
                o.bVisibleInTabMenu && s.current.push(e),
                o.bVisibleInAdditionalOptions && l.current.push(e),
                (i.current = !1))
              : (i.current = !0),
              n.useLayoutEffect(() => {
                i.current && (m(), (i.current = !1));
              });
          },
          OnControlsItemMounted: () => {
            (d.current = !0), C();
          },
          OnControlsItemUnmounted: (e) => {
            c.delete(e),
              (r.current = r.current.filter((t) => t != e)),
              (s.current = s.current.filter((t) => t != e)),
              (l.current = l.current.filter((t) => t != e)),
              m();
          },
        };
        return n.createElement(p.Provider, { value: h }, e.children);
      }
      const C = n.createContext({
        bVisibleInBottomFrameControls: !0,
        bVisibleInTabMenu: !1,
        bVisibleInAdditionalOptions: !1,
      });
      function h(e) {
        const { onlyVisibleIn: t, children: o } = e,
          r = {
            bVisibleInBottomFrameControls:
              "both" == t || "bottom-frame-controls" == t,
            bVisibleInTabMenu: "both" == t || "tab-hover-menu" == t,
            bVisibleInAdditionalOptions: "additional-options" == t,
          };
        return n.createElement(C.Provider, { value: r }, o);
      }
      function v(e) {
        const { params: t } = e,
          o = n.useContext(p);
        if (!o)
          throw new Error(
            "<FrameControlsItem> must be inside a <Frame> component.",
          );
        const i = n.useContext(C),
          a = n.useMemo(() => o.CreateControlsItemID(), []);
        n.useEffect(
          () => (o.OnControlsItemMounted(), () => o.OnControlsItemUnmounted(a)),
          [a],
        );
        const s = (0, r.q3)(() => ("function" == typeof t ? t() : t));
        return o.OnControlsItemRender(a, s, i), null;
      }
      function g(e) {
        const { actionParams: t } = e,
          { frame: o } = (0, i.N)();
        if (!o)
          throw new Error(
            "<FrameControlsItem_Action> must be inside a <Frame>.",
          );
        const r = n.useRef(void 0);
        r.current = e.onInvoked;
        const a = (0, c.F$)(o, t, (...e) => {
          var t;
          return null === (t = r.current) || void 0 === t
            ? void 0
            : t.call(r, ...e);
        });
        return n.createElement(v, {
          params: { type: 2, action_id: a.actionID },
        });
      }
      function _(e) {
        return n.createElement(v, { params: { type: 1 } });
      }
      function f(e) {
        return d.sp.isShowingVRGuidedTour
          ? null
          : n.createElement(
              n.Fragment,
              null,
              n.createElement(b, null),
              n.createElement(M, null),
              n.createElement(L, null),
              n.createElement(_, null),
              n.createElement(y, null),
              n.createElement(_, null),
              n.createElement(_, null),
              n.createElement(V, null),
              n.createElement(_, null),
              n.createElement(
                h,
                { onlyVisibleIn: "additional-options" },
                !1,
                n.createElement(w, null),
                n.createElement(R, null),
                n.createElement(S, { controller: "left" }),
                n.createElement(S, { controller: "right" }),
              ),
            );
      }
      function y(e) {
        const { frame: t } = (0, i.N)(),
          o = (0, r.q3)(() => t.controlAdditionalOptionsItems.length > 0),
          a = (0, r.q3)(() => t.isControlAdditionalOptionsOpen),
          l = (0, c.F$)(
            t,
            {
              display_name: (0, s.we)("#AdditionalOptionsTooltip"),
              active: a,
              icon: { enum: 38 },
              invocation: 2,
            },
            (e) => t.SetControlAdditionalOptionsOpen(e),
          );
        return (
          n.useEffect(
            () => (
              t.SetControlAdditionalOptionsActionID(
                null == l ? void 0 : l.actionID,
              ),
              () => t.SetControlAdditionalOptionsActionID(void 0)
            ),
            [t, l],
          ),
          o
            ? n.createElement(v, { params: { type: 2, action_id: l.actionID } })
            : null
        );
      }
      function b(e) {
        const { frame: t } = (0, i.N)();
        if (!(0, r.q3)(() => t.docking.dockLocation == l.yWq.Dashboard))
          return null;
        return n.createElement(g, {
          actionParams: {
            display_name: (0, s.we)("#FloatInWorld"),
            icon: { enum: 26 },
            invocation: 1,
          },
          onInvoked: () => {
            t.docking.SetDockLocation(l.yWq.World);
          },
        });
      }
      function L(e) {
        const { frame: t } = (0, i.N)();
        if (
          !(0, r.q3)(
            () =>
              t.docking.dockLocation != l.yWq.Theater &&
              t.docking.dockLocation != l.yWq.Boot,
          )
        )
          return null;
        return n.createElement(g, {
          actionParams: {
            display_name: (0, s.we)("#ViewInTheater"),
            icon: { enum: 28 },
            invocation: 1,
          },
          onInvoked: () => {
            t.docking.SetInTheater(!1);
          },
        });
      }
      function S(e) {
        const { controller: t } = e,
          { frame: o } = (0, i.N)(),
          a = "left" == t ? l.yWq.LeftHand : l.yWq.RightHand,
          c = (0, r.q3)(
            () =>
              o.docking.dockLocation == l.yWq.Dashboard ||
              o.docking.dockLocation == l.yWq.LeftHand ||
              o.docking.dockLocation == l.yWq.RightHand ||
              o.docking.dockLocation == l.yWq.World,
          ),
          d = (0, r.q3)(() => o.docking.dockLocation != a);
        if (!c) return null;
        return n.createElement(g, {
          actionParams: {
            display_name:
              "left" == t
                ? (0, s.we)("#DockOnLeftController")
                : (0, s.we)("#DockOnRightController"),
            icon: { enum: "left" == t ? 29 : 30 },
            invocation: 1,
            enabled: d,
          },
          onInvoked: () => {
            o.docking.SetDockLocation(a);
          },
        });
      }
      function M(e) {
        const { frame: t } = (0, i.N)();
        if (!(0, r.q3)(() => t.docking.dockLocation != l.yWq.Dashboard))
          return null;
        return n.createElement(
          h,
          { onlyVisibleIn: "both" },
          n.createElement(g, {
            actionParams: {
              display_name: (0, s.we)("#ReturnToDashboard"),
              icon: { enum: 27 },
              invocation: 1,
            },
            onInvoked: () => {
              t.docking.SetDockLocation(l.yWq.Dashboard);
            },
          }),
        );
      }
      function V(e) {
        const { frame: t } = (0, i.N)(),
          o = (0, r.q3)(() => t.closing.showCloseButton),
          a = (0, r.q3)(() => t.closing.closeButtonLabel),
          s = (0, r.q3)(() => t.closing.closeButtonIcon),
          l = n.useCallback(() => {
            t.closing.RequestClose();
          }, []);
        return o
          ? n.createElement(
              h,
              { onlyVisibleIn: "both" },
              n.createElement(g, {
                actionParams: {
                  display_name: a,
                  icon: { enum: s },
                  invocation: 1,
                },
                onInvoked: l,
              }),
            )
          : null;
      }
      function H(e) {
        const { frame: t } = (0, i.N)(),
          o = (0, r.q3)(() => t.activePage),
          a = (0, r.q3)(() => {
            var e;
            return (
              null !==
                (e = null == o ? void 0 : o.keyboard.isKeyboardVisible) &&
              void 0 !== e &&
              e
            );
          }),
          l = n.useRef(void 0);
        n.useEffect(() => {
          l.current = new Date();
        }, [a]);
        const c = (0, r.q3)(() =>
            t.pages.some((e) => e.keyboard.showKeyboardButtonInFrameControls),
          ),
          d = (0, r.q3)(() => {
            var e;
            return (
              a ||
              (null === (e = t.activePage) || void 0 === e
                ? void 0
                : e.keyboard.showKeyboardButtonInFrameControls)
            );
          });
        return c
          ? n.createElement(g, {
              actionParams: {
                display_name: a
                  ? (0, s.we)("#HideKeyboardTooltip")
                  : (0, s.we)("#ShowKeyboardTooltip"),
                enabled: d,
                active: a,
                icon: { enum: 22 },
                icon_active: { enum: 24 },
                invocation: 2,
              },
              onInvoked: (e) => {
                var t, r;
                if (null == l.current) return;
                new Date().getTime() - l.current.getTime() < 100 ||
                  (e
                    ? null === (t = null == o ? void 0 : o.keyboard) ||
                      void 0 === t ||
                      t.ShowKeyboard()
                    : null === (r = null == o ? void 0 : o.keyboard) ||
                      void 0 === r ||
                      r.HideKeyboard());
              },
            })
          : null;
      }
      function w(e) {
        const { frame: t } = (0, i.N)(),
          o = (0, r.q3)(() => u.SW.allowCurvature),
          a = (0, r.q3)(() => t.curvature.shouldCurve);
        return o
          ? n.createElement(g, {
              actionParams: {
                display_name: (0, s.we)("#ToggleCurvatureTooltip"),
                active: a,
                icon: { enum: 40 },
                icon_active: { enum: 39 },
                invocation: 2,
              },
              onInvoked: () => t.curvature.ToggleCurvature(),
            })
          : null;
      }
      function R(e) {
        const { frame: t } = (0, i.N)(),
          o = (0, r.q3)(() => t.canSpatialize),
          a = (0, r.q3)(() => t.isSpatializeEnabled);
        return o
          ? n.createElement(g, {
              actionParams: {
                display_name: a
                  ? (0, s.we)("#DisableSpatialAudioTooltip")
                  : (0, s.we)("#EnableSpatialAudioTooltip"),
                active: a,
                icon: { enum: 35 },
                icon_active: { enum: 36 },
                invocation: 2,
              },
              onInvoked: (e) => t.SetSpatializeEnabled(e),
            })
          : null;
      }
    },
    5323: (e, t, o) => {
      "use strict";
      o.d(t, {
        QI: () => p,
        RG: () => v,
        U0: () => m,
        Vu: () => C,
        WF: () => h,
        bQ: () => _,
        mS: () => y,
        vL: () => f,
        xE: () => d,
      });
      var r = o(296),
        n = o(6540),
        i = o(3606),
        a = (o(4007), o(7727)),
        s = o(1139),
        l = o(3514);
      o(6090);
      const c = n.createContext({
        CreateMenuItemID: void 0,
        OnMenuItemRender: void 0,
        OnMenuItemMounted: void 0,
        OnMenuItemUnmounted: void 0,
      });
      function d(e) {
        const { frame: t } = (0, a.N)();
        if (!t)
          throw new Error("<FrameMenu> must be inside a <Frame> component.");
        const o = n.useRef(1),
          r = n.useRef([]),
          i = n.useRef([]),
          l = n.useMemo(() => new Map(), []),
          d = n.useRef(!1),
          u = n.useRef(!0),
          p = n.useCallback(() => {
            const e = r.current.map((e) => l.get(e)),
              o = i.current.map((e) => l.get(e));
            t.SetMenuItems(e, o);
          }, []);
        n.useEffect(() => () => t.SetMenuItems([], []), []),
          d.current &&
            ((d.current = !1),
            (u.current = !0),
            (r.current = []),
            (i.current = []));
        const m = (0, s.CH)();
        n.useEffect(() => {
          !u.current ||
            (0 == r.current.length && 0 == i.current.length) ||
            (p(), (u.current = !1));
        });
        const C = {
          CreateMenuItemID: () => o.current++,
          OnMenuItemRender: (e, t, o) => {
            l.set(e, t);
            const a = n.useRef(!1);
            u.current
              ? (o.bVisibleInFrameMenu && r.current.push(e),
                o.bVisibleInTabMenu && i.current.push(e),
                (a.current = !1))
              : (a.current = !0),
              n.useLayoutEffect(() => {
                a.current && (p(), (a.current = !1));
              });
          },
          OnMenuItemMounted: () => {
            (d.current = !0), m();
          },
          OnMenuItemUnmounted: (e) => {
            l.delete(e),
              (r.current = r.current.filter((t) => t != e)),
              (i.current = i.current.filter((t) => t != e)),
              p();
          },
        };
        return n.createElement(c.Provider, { value: C }, e.children);
      }
      const u = n.createContext({
        bVisibleInFrameMenu: !0,
        bVisibleInTabMenu: !0,
      });
      function p(e) {
        const { onlyVisibleIn: t, children: o } = e,
          r = {
            bVisibleInFrameMenu: "both" == t || "left-frame-menu" == t,
            bVisibleInTabMenu: "both" == t || "tab-hover-menu" == t,
          };
        return n.createElement(u.Provider, { value: r }, o);
      }
      function m(e) {
        const { params: t } = e,
          o = n.useContext(c);
        if (!o)
          throw new Error(
            "<FrameMenuItem> must be inside a <Frame> component.",
          );
        const i = n.useContext(u),
          a = n.useMemo(() => o.CreateMenuItemID(), []);
        n.useEffect(
          () => (o.OnMenuItemMounted(), () => o.OnMenuItemUnmounted(a)),
          [a],
        );
        const s = (0, r.q3)(() => ("function" == typeof t ? t() : t));
        return o.OnMenuItemRender(a, s, i), null;
      }
      function C(e) {
        const { actionParams: t } = e,
          { frame: o } = (0, a.N)();
        if (!o)
          throw new Error("<FrameMenuItem_Action> must be inside a <Frame>.");
        const r = n.useRef(void 0);
        r.current = e.onInvoked;
        const i = (0, l.F$)(o, t, (...e) => {
          var t;
          return null === (t = r.current) || void 0 === t
            ? void 0
            : t.call(r, ...e);
        });
        return n.createElement(m, {
          params: { type: 3, action_id: i.actionID },
        });
      }
      function h(e) {
        return n.createElement(m, { params: { type: 2 } });
      }
      function v(e) {
        const { frame: t } = (0, a.N)(),
          o = (0, r.q3)(() => {
            var e;
            return (
              (null == t ? void 0 : t.isActiveDashboardFrame) &&
              (null === (e = null == t ? void 0 : t.activePage) || void 0 === e
                ? void 0
                : e.summonOverlayKey) == i.wi
            );
          });
        return n.createElement(m, {
          params: () => ({
            type: 4,
            steam_main_menu_options: { allow_show_as_active: o },
          }),
        });
      }
      function g(e = !0, t) {
        const { frame: o } = (0, a.N)();
        return (0, l.F$)(o, { active: e, invocation: 1 }, () => {
          var e;
          !o.isCurrentlyVisible &&
            (null === (e = o.activePage) || void 0 === e
              ? void 0
              : e.summonOverlayKey) &&
            (null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRClient.ShowDashboardOverlay({
                overlayKey: o.activePage.summonOverlayKey,
                sReason: "useActionForGameFrameMenuItems",
              })),
            null == t || t();
        });
      }
      function _(e) {
        const { info: t, onInvoked: o, allowShowAsActive: r } = e,
          i = g(r, o);
        return n.createElement(m, {
          params: {
            type: 6,
            steam_game_info: { app_id: null == t ? void 0 : t.appid },
            action_id: i.actionID,
          },
        });
      }
      function f(e) {
        const {
            info: t,
            showForSingleWindow: o,
            onInvoked: r,
            allowShowAsActive: i,
          } = e,
          a = g(i, r);
        return n.createElement(m, {
          params: {
            type: 7,
            steam_game_info: { app_id: null == t ? void 0 : t.appid },
            steam_game_window_item_options: { show_for_single_window: o },
            action_id: a.actionID,
          },
        });
      }
      function y(e) {
        const { frame: t } = (0, a.N)(),
          o = (0, r.q3)(() => {
            var e;
            return (
              null !== (e = null == t ? void 0 : t.closing.showCloseButton) &&
              void 0 !== e &&
              e
            );
          }),
          i = (0, r.q3)(() =>
            null == t ? void 0 : t.closing.closeButtonLabel,
          ),
          s = (0, r.q3)(() => (null == t ? void 0 : t.closing.closeButtonIcon)),
          l = n.useCallback(
            () => (null == t ? void 0 : t.closing.RequestClose()),
            [t],
          );
        return o
          ? n.createElement(C, {
              actionParams: {
                display_name: i,
                icon: { enum: s },
                invocation: 1,
              },
              onInvoked: l,
            })
          : null;
      }
    },
    3481: (e, t, o) => {
      "use strict";
      o.d(t, { JJ: () => b, Sq: () => f });
      var r = o(1635),
        n = o(7813),
        i = o(3236),
        a = o(1835),
        s = o(1909),
        l = o(3297),
        c = o(2929),
        d = o(776),
        u = o(1651),
        p = o(6090),
        m = o(3514),
        C = o(9784),
        h = o(5026),
        v = o(8627);
      const g = new d.wd("FrameStore");
      var _, f;
      !(function (e) {
        (e[(e.Disconnected = 0)] = "Disconnected"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Connected = 2)] = "Connected");
      })(_ || (_ = {}));
      class y {
        get OnFrameDestroyed() {
          return this.m_OnFrameDestroyed;
        }
        get canTryConnectingToSteam() {
          return (
            a.SW.isVRGamepadUIReady && l.F.HasCapability(16, p.fkw.MutualLocal)
          );
        }
        get steamConnectionState() {
          return this.m_eSteamConnectionState;
        }
        get supportedFrameFeatures() {
          const e = this.steamConnectionState == _.Connected;
          return {
            steamHelpsRenderFrame: e,
            steamRendersFrameControls: e && !1,
          };
        }
        constructor() {
          (this.m_unNextFrameID = c.A),
            (this.m_unNextTabID = f.BaseIncrementingIDOffset),
            (this.m_mapLastSentFrameUpdate = new Map()),
            (this.m_mapLastSentFrameVisibility = new Map()),
            (this.m_mapDockLocations = new Map()),
            (this.m_mapPreviewDockLocations = new Map()),
            (this.m_mapLocalFrames = new Map()),
            (this.m_mapRemoteFrames = new Map()),
            (this.m_eSteamConnectionState = _.Disconnected),
            (this.m_OnFrameDestroyed = new u.l()),
            (this.m_initCallHandle = void 0),
            (this.m_mapFrameDockLocations = new Map()),
            (0, n.makeObservable)(this);
        }
        Init() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            (0, n.reaction)(
              () => this.canTryConnectingToSteam,
              (e) => {
                e ? this.InitSteamConnection() : this.CleanupSteamConnection();
              },
              { fireImmediately: !0 },
            ),
              (0, n.reaction)(
                () =>
                  this.frames_local.filter((e) => e.state == m.Iu.Destroyed),
                this.OnLocalFramesDestroyed,
              ),
              (0, n.autorun)(this.SendUpdatesToSteam, { delay: 1e-4 });
          });
        }
        InitSteamConnection() {
          this.m_eSteamConnectionState == _.Disconnected
            ? ((this.m_eSteamConnectionState = _.Pending),
              this.m_mapLastSentFrameUpdate.clear(),
              this.m_mapLastSentFrameVisibility.clear(),
              g.Info("InitSteamConnection - Calling Steam.InitFrameSystem..."),
              (this.m_initCallHandle = s.p.Steam.InitFrameSystem(
                {},
                { nMaxTimeoutRetries: "infinite" },
              )),
              this.m_initCallHandle
                .then(() => {
                  g.Info(
                    "InitSteamConnection call to Steam.InitFrameSystem succeeded.",
                  ),
                    (this.m_eSteamConnectionState = _.Connected);
                })
                .catch((e) => {
                  8 == e.info.error_code
                    ? g.Info(
                        "InitSteamConnection call to Steam.InitFrameSystem cancelled.",
                      )
                    : g.Error(
                        "InitSteamConnection call to Steam.InitFrameSystem failed:",
                        e,
                      ),
                    (this.m_eSteamConnectionState = _.Disconnected),
                    (this.m_initCallHandle = void 0),
                    this.CleanupSteamConnection();
                }))
            : g.Info(
                "InitSteamConnection - State is already",
                _[this.m_eSteamConnectionState],
              );
        }
        CleanupSteamConnection() {
          (this.m_eSteamConnectionState = _.Disconnected),
            this.m_mapLastSentFrameUpdate.clear(),
            this.m_mapLastSentFrameVisibility.clear(),
            this.m_initCallHandle &&
              !this.m_initCallHandle.BCancelled() &&
              this.m_initCallHandle.cancel(),
            (this.m_initCallHandle = void 0);
        }
        SendUpdatesToSteam() {
          var e;
          if (!this.supportedFrameFeatures.steamHelpsRenderFrame) return;
          const t = this.frames.map((e) => e.protoForSteam).filter(Boolean),
            o = new Set(t.map((e) => e.frame_id)),
            r = t.filter(
              (e) => this.m_mapLastSentFrameUpdate.get(e.frame_id) !== e,
            ),
            i = Array.from(this.m_mapLastSentFrameUpdate.keys()).filter(
              (e) => !o.has(e),
            );
          for (const e of r) this.m_mapLastSentFrameUpdate.set(e.frame_id, e);
          for (const e of i)
            this.m_mapLastSentFrameUpdate.delete(e),
              this.m_mapLastSentFrameVisibility.delete(e);
          const a = [];
          for (const t of this.frames)
            t.isCurrentlyVisible !=
              (null !==
                (e = this.m_mapLastSentFrameVisibility.get(t.frameID)) &&
                void 0 !== e &&
                e) &&
              (a.push(t),
              this.m_mapLastSentFrameVisibility.set(
                t.frameID,
                t.isCurrentlyVisible,
              ));
          const l = {
            updated_frames: r,
            deleted_frames: i,
            shown_frames: a
              .filter((e) => e.isCurrentlyVisible)
              .map((e) => e.frameID),
            hidden_frames: a
              .filter((e) => !e.isCurrentlyVisible)
              .map((e) => e.frameID),
          };
          s.p.Steam.UpdateFrameUIs(l, { nTimeoutMS: 6e4 }).then(
            (0, n.action)((e) => {
              var t, o;
              for (const r of null !== (t = e.results) && void 0 !== t
                ? t
                : []) {
                const e = null == r ? void 0 : r.frame_id;
                e &&
                  (null === (o = this.m_mapLocalFrames.get(e)) ||
                    void 0 === o ||
                    o.OnFrameUpdateResultFromSteam(r));
              }
            }),
          );
        }
        OnLocalFramesDestroyed(e) {
          e.forEach((e) => {
            this.m_mapLocalFrames.delete(e.frameID);
          }),
            this.NotifyFramesDestroyed(e);
        }
        NotifyFramesDestroyed(e) {
          e.forEach((e) => {
            this.m_OnFrameDestroyed.Dispatch(e);
          }),
            e.forEach((e) => {
              this.m_mapDockLocations.delete(e.frameID),
                this.m_mapPreviewDockLocations.delete(e.frameID);
            });
        }
        CreateCFrame(e) {
          const t = new m.HC(this.m_unNextFrameID++, this.m_unNextTabID++, e);
          return (
            (0, n.when)(
              () => t.state != m.Iu.Uninitialized && t.state != m.Iu.Destroyed,
            ).then(() =>
              (0, n.runInAction)(() => this.m_mapLocalFrames.set(t.frameID, t)),
            ),
            t
          );
        }
        get frames() {
          return h.Mg.unifiedDashboardEnabled
            ? [
                ...this.m_mapLocalFrames.values(),
                ...this.m_mapRemoteFrames.values(),
              ]
            : [...this.m_mapLocalFrames.values()];
        }
        get frames_local() {
          return [...this.m_mapLocalFrames.values()];
        }
        get bootFrame() {
          return this.getLocalFrameAtExclusiveDockLocation(p.yWq.Boot);
        }
        get theaterFrame() {
          return this.getFrameAtExclusiveDockLocation(p.yWq.Theater);
        }
        get isTheaterMode() {
          return null != this.theaterFrame;
        }
        get remote_frames() {
          return [...this.m_mapRemoteFrames.values()];
        }
        get remote_steam_frame() {
          var e;
          for (const t of this.m_mapRemoteFrames.values())
            if (
              14 ==
              (null === (e = null == t ? void 0 : t.icon) || void 0 === e
                ? void 0
                : e.enum)
            )
              return t;
        }
        _create_remote_cframe(e) {
          const t = new C.l(e);
          return this.m_mapRemoteFrames.set(t.frameID, t), t;
        }
        _clear_remote_frames() {
          const e = [...this.m_mapRemoteFrames.values()];
          0 != e.length &&
            (this.m_mapRemoteFrames.clear(),
            e.forEach((e) => e._markDestroyed()),
            this.NotifyFramesDestroyed(e));
        }
        _delete_remote_frame(e) {
          const t = this.m_mapRemoteFrames.get(e);
          null != t &&
            (this.m_mapRemoteFrames.delete(e),
            t._markDestroyed(),
            this.NotifyFramesDestroyed([t]));
        }
        GetRemoteFrame(e) {
          if (null != e) return this.m_mapRemoteFrames.get(e);
        }
        _setDockLocation(e, t) {
          var o;
          if (h.Mg.useRemoteDashboardState)
            return void g.Warning(
              "_setDockLocation called when remote dock state is active. This should be a request",
              e,
              t,
            );
          this.m_mapPreviewDockLocations.delete(e);
          if (
            (null !== (o = this.m_mapDockLocations.get(e)) && void 0 !== o
              ? o
              : p.yWq.Dashboard) != t
          ) {
            if ((0, v.$0)(t)) {
              for (const [e, o] of this.m_mapDockLocations)
                o == t && this.m_mapDockLocations.delete(e);
              for (const [e, o] of this.m_mapPreviewDockLocations)
                o == t && this.m_mapPreviewDockLocations.delete(e);
            }
            null == t || t == p.yWq.Dashboard
              ? this.m_mapDockLocations.delete(e)
              : this.m_mapDockLocations.set(e, t),
              t != p.yWq.Theater && a.SW.ClearTheaterHistoryForFrame(e);
          }
        }
        _getDockLocation(e) {
          var t, o, r;
          if (h.Mg.useRemoteDashboardState) {
            const r =
              null !==
                (o =
                  null === (t = h.Mg.unifiedDashboardState_Remote) ||
                  void 0 === t
                    ? void 0
                    : t.dock_entries) && void 0 !== o
                ? o
                : [];
            for (const t of r)
              if ((null == t ? void 0 : t.frame_id) == e)
                return null == t ? void 0 : t.dock_location;
            return p.yWq.Dashboard;
          }
          return null !== (r = this.m_mapDockLocations.get(e)) && void 0 !== r
            ? r
            : p.yWq.Dashboard;
        }
        getFrameIDAtDockLocation(e) {
          var t, o, r, n;
          if (h.Mg.useRemoteDashboardState) {
            const i =
              null !==
                (o =
                  null === (t = h.Mg.unifiedDashboardState_Remote) ||
                  void 0 === t
                    ? void 0
                    : t.preview_dock_entries) && void 0 !== o
                ? o
                : [];
            for (const t of i)
              if ((null == t ? void 0 : t.dock_location) == e)
                return null == t ? void 0 : t.frame_id;
            const a =
              null !==
                (n =
                  null === (r = h.Mg.unifiedDashboardState_Remote) ||
                  void 0 === r
                    ? void 0
                    : r.dock_entries) && void 0 !== n
                ? n
                : [];
            for (const t of a)
              if ((null == t ? void 0 : t.dock_location) == e)
                return null == t ? void 0 : t.frame_id;
          } else {
            for (const [t, o] of this.m_mapPreviewDockLocations)
              if (o == e) return t;
            for (const [t, o] of this.m_mapDockLocations) if (o == e) return t;
          }
        }
        getLocalFrameAtExclusiveDockLocation(e) {
          if ((0, v.$0)(e))
            return this.GetLocalFrame(this.getFrameIDAtDockLocation(e));
        }
        getFrameAtExclusiveDockLocation(e) {
          var t;
          if (!(0, v.$0)(e)) return;
          const o = this.getFrameIDAtDockLocation(e);
          return null !== (t = this.GetLocalFrame(o)) && void 0 !== t
            ? t
            : this.GetRemoteFrame(o);
        }
        _setPreviewDockLocation(e, t) {
          if (h.Mg.useRemoteDashboardState)
            g.Warning(
              "_setPreviewDockLocation called when remote dock state is active. This should be a request",
              e,
              t,
            );
          else {
            if ((0, v.$0)(t))
              for (const [e, o] of this.m_mapPreviewDockLocations)
                o == t && this.m_mapPreviewDockLocations.delete(e);
            null == t
              ? this.m_mapPreviewDockLocations.delete(e)
              : this.m_mapPreviewDockLocations.set(e, t);
          }
        }
        _getPreviewDockLocation(e) {
          var t, o, r;
          if (!h.Mg.useRemoteDashboardState)
            return null !== (r = this.m_mapPreviewDockLocations.get(e)) &&
              void 0 !== r
              ? r
              : void 0;
          {
            const r =
              null !==
                (o =
                  null === (t = h.Mg.unifiedDashboardState_Remote) ||
                  void 0 === t
                    ? void 0
                    : t.preview_dock_entries) && void 0 !== o
                ? o
                : [];
            for (const t of r)
              if ((null == t ? void 0 : t.frame_id) == e)
                return null == t ? void 0 : t.dock_location;
          }
        }
        get dockEntries() {
          let e = [];
          for (const [t, o] of this.m_mapDockLocations.entries()) {
            const r = { frame_id: t, dock_location: null != o ? o : 0 };
            e.push(r);
          }
          return e;
        }
        get previewDockEntries() {
          let e = [];
          for (const [t, o] of this.m_mapPreviewDockLocations.entries()) {
            const r = { frame_id: t, dock_location: null != o ? o : 0 };
            e.push(r);
          }
          return e;
        }
        get frames_local_undocked() {
          return [
            ...Array.from(this.m_mapLocalFrames.values()).filter(
              (e) =>
                e.state === m.Iu.Alive &&
                e.docking.dockLocation !== p.yWq.Boot &&
                e.docking.dockLocation !== p.yWq.Dashboard,
            ),
          ];
        }
        GetFrame(e) {
          var t;
          if (e)
            return null !== (t = this.m_mapLocalFrames.get(e)) && void 0 !== t
              ? t
              : this.m_mapRemoteFrames.get(e);
        }
        GetLocalFrame(e) {
          if (e) return this.m_mapLocalFrames.get(e);
        }
        GetFramesWithAssociatedSummonKeys(e) {
          return e
            ? this.frames.filter(
                (t) => e && t.associatedSummonOverlayKeys.includes(e),
              )
            : [];
        }
        GetFrameWithTabId(e) {
          if (null != e)
            return this.frames.find((t) => {
              var o;
              return (
                (null === (o = t.tab.proto) || void 0 === o
                  ? void 0
                  : o.tab_id) === e
              );
            });
        }
        HasFramesWithAssociatedSummonKeys(e) {
          return this.GetFramesWithAssociatedSummonKeys(e).length > 0;
        }
        RegisterFrameDockLocation(e, t, o) {
          const r = this.DockLocationMapKey(e, o);
          return (
            this.m_mapFrameDockLocations.set(r, t),
            {
              Unregister: () => {
                this.m_mapFrameDockLocations.get(r) === t &&
                  this.m_mapFrameDockLocations.delete(r);
              },
            }
          );
        }
        GetDockLocationTransformID(e, t) {
          const o = this.DockLocationMapKey(e, t);
          return this.m_mapFrameDockLocations.get(o);
        }
        DockLocationMapKey(e, t) {
          return e === p.yWq.World
            ? (g.Assert(null != t), `${p.yWq[e]}:${null != t ? t : 0}`)
            : `${p.yWq[e]}`;
        }
        get frameIDPreviewingDashboardDockSnap() {
          var e, t;
          if (h.Mg.useRemoteDashboardState) {
            const o =
              null !==
                (t =
                  null === (e = h.Mg.unifiedDashboardState_Remote) ||
                  void 0 === e
                    ? void 0
                    : e.preview_dock_entries) && void 0 !== t
                ? t
                : [];
            for (const e of o)
              if ((null == e ? void 0 : e.dock_location) == p.yWq.Dashboard)
                return null == e ? void 0 : e.frame_id;
          } else
            for (const [e, t] of this.m_mapPreviewDockLocations)
              if (t == p.yWq.Dashboard) return e;
        }
      }
      (0, r.Cg)([n.observable], y.prototype, "m_mapDockLocations", void 0),
        (0, r.Cg)(
          [n.observable],
          y.prototype,
          "m_mapPreviewDockLocations",
          void 0,
        ),
        (0, r.Cg)([n.observable], y.prototype, "m_mapLocalFrames", void 0),
        (0, r.Cg)([n.observable], y.prototype, "m_mapRemoteFrames", void 0),
        (0, r.Cg)(
          [n.observable],
          y.prototype,
          "m_eSteamConnectionState",
          void 0,
        ),
        (0, r.Cg)([n.computed], y.prototype, "canTryConnectingToSteam", null),
        (0, r.Cg)([n.computed], y.prototype, "steamConnectionState", null),
        (0, r.Cg)([n.computed], y.prototype, "supportedFrameFeatures", null),
        (0, r.Cg)([n.action.bound], y.prototype, "InitSteamConnection", null),
        (0, r.Cg)(
          [n.action.bound],
          y.prototype,
          "CleanupSteamConnection",
          null,
        ),
        (0, r.Cg)([i.o], y.prototype, "SendUpdatesToSteam", null),
        (0, r.Cg)(
          [n.action.bound],
          y.prototype,
          "OnLocalFramesDestroyed",
          null,
        ),
        (0, r.Cg)([n.action], y.prototype, "NotifyFramesDestroyed", null),
        (0, r.Cg)([n.action], y.prototype, "CreateCFrame", null),
        (0, r.Cg)([n.computed], y.prototype, "frames", null),
        (0, r.Cg)([n.computed], y.prototype, "frames_local", null),
        (0, r.Cg)([n.computed], y.prototype, "bootFrame", null),
        (0, r.Cg)([n.computed], y.prototype, "theaterFrame", null),
        (0, r.Cg)([n.computed], y.prototype, "isTheaterMode", null),
        (0, r.Cg)([n.computed], y.prototype, "remote_frames", null),
        (0, r.Cg)([n.computed], y.prototype, "remote_steam_frame", null),
        (0, r.Cg)([n.action], y.prototype, "_create_remote_cframe", null),
        (0, r.Cg)([n.action.bound], y.prototype, "_clear_remote_frames", null),
        (0, r.Cg)([n.action.bound], y.prototype, "_delete_remote_frame", null),
        (0, r.Cg)([i.o], y.prototype, "GetRemoteFrame", null),
        (0, r.Cg)([n.action.bound], y.prototype, "_setDockLocation", null),
        (0, r.Cg)([i.o], y.prototype, "_getDockLocation", null),
        (0, r.Cg)([i.o], y.prototype, "getFrameIDAtDockLocation", null),
        (0, r.Cg)(
          [i.o],
          y.prototype,
          "getLocalFrameAtExclusiveDockLocation",
          null,
        ),
        (0, r.Cg)([i.o], y.prototype, "getFrameAtExclusiveDockLocation", null),
        (0, r.Cg)(
          [n.action.bound],
          y.prototype,
          "_setPreviewDockLocation",
          null,
        ),
        (0, r.Cg)([i.o], y.prototype, "_getPreviewDockLocation", null),
        (0, r.Cg)([n.computed], y.prototype, "dockEntries", null),
        (0, r.Cg)([n.computed], y.prototype, "previewDockEntries", null),
        (0, r.Cg)([n.computed], y.prototype, "frames_local_undocked", null),
        (0, r.Cg)([i.o], y.prototype, "GetFrame", null),
        (0, r.Cg)([i.o], y.prototype, "GetLocalFrame", null),
        (0, r.Cg)(
          [i.o],
          y.prototype,
          "GetFramesWithAssociatedSummonKeys",
          null,
        ),
        (0, r.Cg)([i.o], y.prototype, "GetFrameWithTabId", null),
        (0, r.Cg)(
          [i.o],
          y.prototype,
          "HasFramesWithAssociatedSummonKeys",
          null,
        ),
        (0, r.Cg)(
          [n.observable],
          y.prototype,
          "m_mapFrameDockLocations",
          void 0,
        ),
        (0, r.Cg)([n.action], y.prototype, "RegisterFrameDockLocation", null),
        (0, r.Cg)(
          [n.computed],
          y.prototype,
          "frameIDPreviewingDashboardDockSnap",
          null,
        ),
        (function (e) {
          (e[(e.LegacyFloatingSteamMainMenu_VRSettings = c.A + 1)] =
            "LegacyFloatingSteamMainMenu_VRSettings"),
            (e[
              (e.BaseIncrementingIDOffset =
                e.LegacyFloatingSteamMainMenu_VRSettings + 1)
            ] = "BaseIncrementingIDOffset");
        })(f || (f = {}));
      const b = new y();
      window.FrameStore = b;
    },
    998: (e, t, o) => {
      "use strict";
      o.d(t, { Rm: () => _, bX: () => f });
      var r,
        n = o(1635),
        i = o(6540),
        a = o(3236),
        s = o(6090),
        l = o(5751),
        c = o(1370),
        d = o(3215),
        u = o(4961),
        p = o(3676),
        m = o(8327),
        C = o(1835),
        h = o(9283);
      const v = function ({ eRole: e }) {
          switch (e) {
            case s.kGj.TrackedControllerRole_RightHand:
              return i.createElement(l.Pq, {
                right: !0,
                color: "#525252",
                width: "100%",
                height: "100%",
              });
            case s.kGj.TrackedControllerRole_LeftHand:
              return i.createElement(l.Pq, {
                left: !0,
                color: "#525252",
                width: "100%",
                height: "100%",
              });
            default:
              return null;
          }
        },
        g = function (e) {
          const [t, o] = i.useState(),
            r = !!e.appIconURL && t == e.appIconURL;
          return i.createElement(
            "div",
            {
              className: (0, h.A)(
                m.ControllerGamepadIcon,
                r && m.ControllerGamepadIconWithApp,
              ),
            },
            e.appIconURL &&
              i.createElement("img", {
                key: e.appIconURL,
                src: e.appIconURL,
                className: (0, h.A)(
                  m.ControllerAppIcon,
                  r && m.ControllerAppIconLoaded,
                ),
                onLoad: () => o(e.appIconURL),
                onError: () => o(void 0),
              }),
            r &&
              i.createElement(
                "div",
                { className: m.ControllerConnectionDots },
                i.createElement("span", null),
                i.createElement("span", null),
                i.createElement("span", null),
              ),
            i.createElement(
              "div",
              { className: m.ControllerRoleIcon },
              i.createElement(v, { eRole: e.eRole }),
            ),
          );
        };
      function _(e, t, o, r) {
        if (!e || null == o) return;
        const n =
          r == f.VerticalBattery
            ? "images/icons/vert"
            : "images/icons/controller_model";
        return t
          ? o < 0.15
            ? n + "_charging_red.png"
            : n + "_charging.png"
          : 0 == o
            ? void 0
            : o < 0.15
              ? n + "_low.png"
              : o < 0.3
                ? n + "_battery_1.png"
                : o < 0.6
                  ? n + "_battery_2.png"
                  : o < 0.9
                    ? n + "_battery_3.png"
                    : n + "_battery_4.png";
      }
      var f;
      !(function (e) {
        (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
          (e[(e.VerticalBattery = 1)] = "VerticalBattery");
      })(f || (f = {}));
      let y = (r = class extends i.Component {
        constructor(e) {
          super(e),
            (this.m_BatteryStateChangedCallbackHandle = void 0),
            (this.m_DeviceRoleChangedCallbackHandle = void 0),
            (this.m_DeviceEventCallbackHandle = void 0),
            (this.batteryLevelStable = void 0),
            (this.state = {
              batteryIconPath: void 0,
              roleIconPath: void 0,
              eRole: s.kGj.TrackedControllerRole_Invalid,
            });
        }
        componentDidMount() {
          (this.m_BatteryStateChangedCallbackHandle =
            null === s.Ay$ || void 0 === s.Ay$
              ? void 0
              : s.Ay$.RegisterForBatteryStateChangedEvents(
                  this.OnBatteryStateChanged,
                )),
            (this.m_DeviceRoleChangedCallbackHandle =
              null === s.Ay$ || void 0 === s.Ay$
                ? void 0
                : s.Ay$.RegisterForDeviceRoleChangedEvents(
                    this.OnDeviceRoleChanged,
                  )),
            (this.m_DeviceEventCallbackHandle =
              null === s.Ay$ || void 0 === s.Ay$
                ? void 0
                : s.Ay$.RegisterForDeviceEvents(this.OnDeviceEvent)),
            this.UpdateControllerStatus();
        }
        componentWillUnmount() {
          var e, t, o;
          null === (e = this.m_BatteryStateChangedCallbackHandle) ||
            void 0 === e ||
            e.unregister(),
            null === (t = this.m_DeviceRoleChangedCallbackHandle) ||
              void 0 === t ||
              t.unregister(),
            null === (o = this.m_DeviceEventCallbackHandle) ||
              void 0 === o ||
              o.unregister();
        }
        componentDidUpdate(e) {
          e.trackedDeviceIndex != this.props.trackedDeviceIndex &&
            ((this.batteryLevelStable = void 0), this.UpdateControllerStatus());
        }
        UpdateControllerStatus() {
          var e, t;
          if (!s.Ay$) return;
          const o = s.Ay$.VRProperties.GetBoolProperty(
              this.props.trackedDeviceIndex,
              s.fD8.DeviceProvidesBatteryStatus_Bool,
            ),
            n = s.Ay$.VRSystem.GetControllerRoleForTrackedDeviceIndex(
              this.props.trackedDeviceIndex,
            );
          let i = !1;
          if (o) {
            const o =
              null !==
                (e = s.Ay$.VRProperties.GetFloatProperty(
                  this.props.trackedDeviceIndex,
                  s.fD8.DeviceBatteryPercentage_Float,
                )) && void 0 !== e
                ? e
                : 0;
            (i =
              null !==
                (t = s.Ay$.VRProperties.GetBoolProperty(
                  this.props.trackedDeviceIndex,
                  s.fD8.DeviceIsCharging_Bool,
                )) &&
              void 0 !== t &&
              t),
              null == this.batteryLevelStable
                ? (this.batteryLevelStable = o)
                : ((this.batteryLevelStable = Math.min(
                    this.batteryLevelStable,
                    o + r.kBatteryLevelHysteresis,
                    1,
                  )),
                  (this.batteryLevelStable = Math.max(
                    this.batteryLevelStable,
                    o - r.kBatteryLevelHysteresis,
                    0,
                  )));
          }
          let a = _(
              null != o && o,
              i,
              this.batteryLevelStable,
              f.HorizontalPips,
            ),
            l = (function (e) {
              switch (e) {
                case s.kGj.TrackedControllerRole_RightHand:
                  return "images/icons/controller_model_right.png";
                case s.kGj.TrackedControllerRole_LeftHand:
                  return "images/icons/controller_model_left.png";
                default:
                  return;
              }
            })(n);
          (a == this.state.batteryIconPath &&
            l == this.state.roleIconPath &&
            n == this.state.eRole) ||
            this.setState({ batteryIconPath: a, roleIconPath: l, eRole: n });
        }
        OnBatteryStateChanged(e) {
          e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
        }
        OnDeviceRoleChanged() {
          this.UpdateControllerStatus();
        }
        OnDeviceEvent(e, t, o) {
          e == s.kuU.Activated &&
            o == this.props.trackedDeviceIndex &&
            this.UpdateControllerStatus();
        }
        render() {
          var e, t;
          const o = this.state.eRole,
            r = o == s.kGj.TrackedControllerRole_LeftHand,
            n = o == s.kGj.TrackedControllerRole_RightHand;
          let a = 0;
          r ? (a = s.KlS.GamepadMode_Left) : n && (a = s.KlS.GamepadMode_Right);
          const l =
              o == s.kGj.TrackedControllerRole_LeftHand ||
              o == s.kGj.TrackedControllerRole_RightHand,
            c =
              null !==
                (e =
                  null === s.Ay$ || void 0 === s.Ay$
                    ? void 0
                    : s.Ay$.VRProperties.GetBoolProperty(
                        this.props.trackedDeviceIndex,
                        s.fD8.Prop_SupportsVRGamepadMode_Bool,
                      )) &&
              void 0 !== e &&
              e,
            v =
              null !==
                (t =
                  null === s.Ay$ || void 0 === s.Ay$
                    ? void 0
                    : s.Ay$.VRProperties.GetBoolProperty(
                        this.props.trackedDeviceIndex,
                        s.fD8.Prop_ControllerHasLargeStatusArea_Bool,
                      )) &&
              void 0 !== t &&
              t,
            _ = 0 != (C.SW.m_nSystemBehaviorFlags & a),
            f = c && _ && l,
            y = d.u.computedInputFocus.m_unSteamInputAppID,
            b = !(0, p.n)(y) ? u.U.GetAppIconURL(y) : void 0;
          return i.createElement(
            s.Zkm,
            {
              width: void 0,
              height: void 0,
              interactive: !1,
              rendermodel_component_device_index: this.props.trackedDeviceIndex,
              rendermodel_component_name: "status",
              debug_name: "controllerstatus_" + this.props.trackedDeviceIndex,
            },
            i.createElement(
              "div",
              {
                className: (0, h.A)(
                  m.ControllerStatusRoot,
                  v && m.LargeStatusArea,
                  r && m.ControllerStatusRootLeft,
                  n && m.ControllerStatusRootRight,
                ),
              },
              i.createElement(
                "div",
                { className: m.ControllerPrimaryIconFrame },
                f
                  ? i.createElement(g, { eRole: o, appIconURL: b })
                  : this.state.roleIconPath &&
                      i.createElement("img", {
                        className: m.ControllerHand,
                        src: this.state.roleIconPath,
                      }),
              ),
              i.createElement(
                "div",
                { className: m.ControllerBatteryFrame },
                this.state.batteryIconPath &&
                  i.createElement("img", {
                    className: m.ControllerBattery,
                    src: this.state.batteryIconPath,
                  }),
              ),
            ),
          );
        }
      });
      (y.kBatteryLevelHysteresis = 0.02),
        (0, n.Cg)([a.o], y.prototype, "OnBatteryStateChanged", null),
        (0, n.Cg)([a.o], y.prototype, "OnDeviceRoleChanged", null),
        (0, n.Cg)([a.o], y.prototype, "OnDeviceEvent", null),
        (y = r = (0, n.Cg)([c.PA], y));
    },
    5424: (e, t, o) => {
      "use strict";
      var r,
        n,
        i = o(1635),
        a = o(7813),
        s = o(6540),
        l = (o(6090), o(3606), o(3545)),
        c = o(1973);
      o(2156), o(1835), o(6138), o(2593), o(1139);
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.ControllerPairing = 1)] = "ControllerPairing"),
          (e[(e.FaceMouse = 2)] = "FaceMouse"),
          (e[(e.HardwareButtons = 4)] = "HardwareButtons"),
          (e[(e.Recentering = 8)] = "Recentering"),
          (e[(e.ResizingFrames = 16)] = "ResizingFrames"),
          (e[(e.StreamingGamesFromPC = 32)] = "StreamingGamesFromPC"),
          (e[(e.StreamingToTV = 64)] = "StreamingToTV"),
          (e[(e.ToggleDashboard = 128)] = "ToggleDashboard");
      })(r || (r = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Library = 1)] = "Library"),
            (e[(e.HamburgerMenu = 2)] = "HamburgerMenu"),
            (e[(e.QuickAccessMenu = 4)] = "QuickAccessMenu"),
            (e[(e.GrabHandles = 8)] = "GrabHandles"),
            (e[(e.FrameMenu = 16)] = "FrameMenu"),
            (e[(e.PlayspaceMenu = 32)] = "PlayspaceMenu"),
            (e[(e.AdditionalTopicsLink = 64)] = "AdditionalTopicsLink");
        })(n || (n = {}));
      const d = [
        {
          key: "steamframe-quick-access-menu",
          strTitle: "Quick Access Menu",
          bodyComponent: () => s.createElement(u, { enum: n.QuickAccessMenu }),
          BCanShow: () => !0,
          parentOrigin: { x: 0.35, y: -0.5 },
          offsetPixels: { x: 0, y: 150, z: 120 },
          rotation: { pitch_degrees: 40, yaw_degrees: 0 },
          parentOverlayKey: "valve.steam.gamepadui.bar",
          GetLocation: () => 1,
          tooltipFlow: 1,
        },
        {
          key: "steam-playspace",
          strTitle: "Playspace Menu",
          bodyComponent: () => s.createElement(m, { enum: n.PlayspaceMenu }),
          BCanShow: () => !0,
          parentOrigin: { x: 0.1, y: -0.5 },
          offsetPixels: { x: 0, y: 150, z: 120 },
          rotation: { pitch_degrees: 40, yaw_degrees: 0 },
          parentOverlayKey: "valve.steam.gamepadui.bar",
          GetLocation: () => 1,
          tooltipFlow: 1,
        },
        {
          key: "steam-library",
          strTitle: "Library",
          bodyComponent: () => s.createElement(p, { enum: n.Library }),
          BCanShow: () => !0,
          parentOrigin: { x: -1, y: 0.35 },
          offsetPixels: { x: -500, y: -70, z: 30 },
          rotation: { pitch_degrees: 0, yaw_degrees: 0 },
          parentOverlayKey: "valve.steam.gamepadui.main",
          GetLocation: () => 1,
          tooltipFlow: 0,
        },
      ];
      function u(e) {
        return s.createElement(
          "div",
          { className: l.LearningTopicBody },
          s.createElement(
            "div",
            { className: l.LearningTopicParagraph },
            "User Guide Reference",
          ),
          s.createElement(
            "div",
            { className: l.BodyText },
            "This is the Quick Access menu. Here is where you can restart the guided tour under the help section.",
          ),
        );
      }
      function p(e) {
        return s.createElement(
          "div",
          { className: l.LearningTopicBody },
          s.createElement(
            "div",
            { className: l.LearningTopicParagraph },
            "Library Topic",
          ),
          s.createElement(
            "div",
            { className: l.BodyText },
            "Here's your Library",
          ),
        );
      }
      function m(e) {
        return s.createElement(
          "div",
          { className: l.LearningTopicBody },
          s.createElement(
            "div",
            { className: l.LearningTopicParagraph },
            "Playspace Menu",
          ),
          s.createElement(
            "div",
            { className: l.BodyText },
            "Here you can see your playspae and recenter it.",
          ),
        );
      }
      class C {
        constructor() {
          (this.m_mapTopicRead = new Map()), (0, a.makeObservable)(this);
        }
        Init() {
          this.FakeTopicReadStatesUntilThisIsReadyForPrimetime();
        }
        FakeTopicReadStatesUntilThisIsReadyForPrimetime() {
          return (0, i.sH)(this, void 0, void 0, function* () {
            this.allTopics.forEach((e) => {
              (0, c.Ss)(e.key);
            }),
              yield this.LoadAllTopicReadStates();
          });
        }
        get allTopics() {
          return d;
        }
        get showableTopics() {
          return this.allTopics.filter((e) => e.BCanShow());
        }
        get unreadShowableTopics() {
          return this.allTopics.filter((e) => !this.m_mapTopicRead.get(e.key));
        }
        LoadAllTopicReadStates() {
          return (0, i.sH)(this, void 0, void 0, function* () {
            yield Promise.all(
              this.allTopics.map((e) => this.LoadTopicReadState(e.key)),
            );
          });
        }
        LoadTopicReadState(e) {
          return (0, i.sH)(this, void 0, void 0, function* () {
            const t = yield (0, c.EL)(e);
            (0, a.runInAction)(() => {
              this.m_mapTopicRead.set(e, t);
            });
          });
        }
        get hasAnyReadTopics() {
          return this.m_mapTopicRead.size > 0;
        }
        get hasAnyUnreadTopics() {
          return this.unreadShowableTopics.length > 0;
        }
        IsTopicRead(e) {
          var t;
          return null !== (t = this.m_mapTopicRead.get(e)) && void 0 !== t && t;
        }
        MarkTopicsAsRead(e) {
          (0, c.Ss)(e),
            (0, a.runInAction)(() => {
              this.m_mapTopicRead.set(e, !0);
            });
        }
        ClearTopicsRead() {
          return (0, i.sH)(this, void 0, void 0, function* () {
            this.allTopics.forEach((e) => {
              (0, c.ll)(e.key);
            }),
              (0, a.runInAction)(() => {
                this.m_mapTopicRead.clear();
              }),
              yield this.LoadAllTopicReadStates();
          });
        }
      }
      (0, i.Cg)([a.observable], C.prototype, "m_mapTopicRead", void 0),
        (0, i.Cg)([a.computed], C.prototype, "unreadShowableTopics", null),
        (0, i.Cg)([a.computed], C.prototype, "hasAnyReadTopics", null),
        (0, i.Cg)([a.computed], C.prototype, "hasAnyUnreadTopics", null);
      new C();
    },
    2156: (e, t, o) => {
      "use strict";
      o.d(t, { O2: () => v });
      var r = o(1635),
        n = o(6090),
        i = o(6540),
        a = o(9978),
        s = o(1370),
        l = o(1835),
        c = o(3606),
        d = o(3246),
        u = o(921);
      function p(e) {
        const { children: t, invertParentPanelPitch: o, pitch: r } = e;
        return o || 0 != r
          ? i.createElement(
              n.dLy,
              {
                invert_parent_panel_pitch: null != o && o,
                curvature_pitch: null != r ? r : 0,
              },
              t,
            )
          : i.createElement(i.Fragment, null, t);
      }
      function m(e) {
        let t,
          { children: o, offsetPixels: r, offsetMeters: a } = e;
        return (
          (r = null != r ? r : { x: 0, y: 0, z: 0 }),
          (a = null != a ? a : { x: 0, y: 0, z: 0 }),
          l.SW.m_fVRGamepadUI_MetersPerPixel &&
            ((t = (0, n.CUZ)(
              a,
              (0, n.txk)(r, l.SW.m_fVRGamepadUI_MetersPerPixel),
            )),
            t.x || t.y || t.z || (t = void 0)),
          t
            ? i.createElement(n.dLy, { translation: t }, o)
            : i.createElement(i.Fragment, null, o)
        );
      }
      function C(e) {
        const { children: t, rotation: o } = e;
        return null != o && (0 != o.x || 0 != o.y || 0 != o.z)
          ? i.createElement(n.dLy, { rotation: o }, t)
          : i.createElement(i.Fragment, null, t);
      }
      function h(e) {
        return 1 == (null == e ? void 0 : e.parent_enum) ? 0 : c.gS;
      }
      function v(e) {
        var t,
          o,
          s,
          v,
          g,
          _,
          f,
          y,
          b,
          L,
          S,
          M,
          V,
          H,
          w,
          R,
          D,
          F,
          I,
          E,
          k,
          P,
          T,
          O,
          x,
          Z,
          A,
          B,
          G,
          N,
          z,
          q,
          W,
          U,
          K,
          j,
          J,
          $,
          Q,
          Y;
        const { popupRequest: X, refPanel: ee, children: te } = e,
          oe = (0, r.Tt)(e, ["popupRequest", "refPanel", "children"]),
          re = null == X ? void 0 : X.dashboard_popup_id,
          ne = {
            x:
              null !==
                (o =
                  null === (t = null == X ? void 0 : X.origin_on_parent) ||
                  void 0 === t
                    ? void 0
                    : t.x) && void 0 !== o
                ? o
                : 0,
            y:
              null !==
                (v =
                  null === (s = null == X ? void 0 : X.origin_on_parent) ||
                  void 0 === s
                    ? void 0
                    : s.y) && void 0 !== v
                ? v
                : 0,
          },
          ie = {
            x:
              null !==
                (_ =
                  null === (g = null == X ? void 0 : X.origin_on_popup) ||
                  void 0 === g
                    ? void 0
                    : g.x) && void 0 !== _
                ? _
                : 0,
            y:
              null !==
                (y =
                  null === (f = null == X ? void 0 : X.origin_on_popup) ||
                  void 0 === f
                    ? void 0
                    : f.y) && void 0 !== y
                ? y
                : 0,
          },
          ae = {
            u:
              null !==
                (L =
                  null === (b = null == X ? void 0 : X.clip_rect) ||
                  void 0 === b
                    ? void 0
                    : b.u_min) && void 0 !== L
                ? L
                : 0,
            v:
              null !==
                (M =
                  null === (S = null == X ? void 0 : X.clip_rect) ||
                  void 0 === S
                    ? void 0
                    : S.v_min) && void 0 !== M
                ? M
                : 0,
          },
          se = {
            u:
              null !==
                (H =
                  null === (V = null == X ? void 0 : X.clip_rect) ||
                  void 0 === V
                    ? void 0
                    : V.u_max) && void 0 !== H
                ? H
                : 1,
            v:
              null !==
                (R =
                  null === (w = null == X ? void 0 : X.clip_rect) ||
                  void 0 === w
                    ? void 0
                    : w.v_max) && void 0 !== R
                ? R
                : 1,
          },
          le = {
            x:
              null !==
                (F =
                  null === (D = null == X ? void 0 : X.offset) || void 0 === D
                    ? void 0
                    : D.x_pixels) && void 0 !== F
                ? F
                : 0,
            y:
              null !==
                (E =
                  null === (I = null == X ? void 0 : X.offset) || void 0 === I
                    ? void 0
                    : I.y_pixels) && void 0 !== E
                ? E
                : 0,
            z:
              null !==
                (P =
                  null === (k = null == X ? void 0 : X.offset) || void 0 === k
                    ? void 0
                    : k.z_pixels) && void 0 !== P
                ? P
                : 0,
          },
          ce = {
            x:
              null !==
                (O =
                  null === (T = null == X ? void 0 : X.offset) || void 0 === T
                    ? void 0
                    : T.x_meters) && void 0 !== O
                ? O
                : 0,
            y:
              null !==
                (Z =
                  null === (x = null == X ? void 0 : X.offset) || void 0 === x
                    ? void 0
                    : x.y_meters) && void 0 !== Z
                ? Z
                : 0,
            z:
              null !==
                (B =
                  null === (A = null == X ? void 0 : X.offset) || void 0 === A
                    ? void 0
                    : A.z_meters) && void 0 !== B
                ? B
                : 0,
          },
          de = {
            x:
              null !==
                (N =
                  null === (G = null == X ? void 0 : X.rotation) || void 0 === G
                    ? void 0
                    : G.pitch_degrees) && void 0 !== N
                ? N
                : 0,
            y:
              null !==
                (q =
                  null === (z = null == X ? void 0 : X.rotation) || void 0 === z
                    ? void 0
                    : z.yaw_degrees) && void 0 !== q
                ? q
                : 0,
          },
          ue =
            null === (W = null == X ? void 0 : X.inherit_parent_pitch) ||
            void 0 === W ||
            W,
          pe =
            null === (U = null == X ? void 0 : X.inherit_parent_curvature) ||
            void 0 === U ||
            U,
          me =
            null === (K = null == X ? void 0 : X.interactive) ||
            void 0 === K ||
            K,
          Ce =
            null !== (j = null == X ? void 0 : X.only_visible_with_laser) &&
            void 0 !== j &&
            j;
        let he =
          null !==
            ($ =
              null === (J = null == X ? void 0 : X.scale) || void 0 === J
                ? void 0
                : J.scaler_value) && void 0 !== $
            ? $
            : 1;
        const ve =
            null !== (Q = null == X ? void 0 : X.sort_order) && void 0 !== Q
              ? Q
              : 0,
          ge = 1 == ve ? 101 : void 0,
          _e = (function (e) {
            var t, o, r;
            const n =
                null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                void 0 !== t
                  ? t
                  : "",
              i =
                null !==
                  (r =
                    null === (o = null == e ? void 0 : e.offset) || void 0 === o
                      ? void 0
                      : o.z_pixels) && void 0 !== r
                  ? r
                  : 0;
            return n == (0, a.useObserver)(() => l.SW.dashboardBarOverlayKey) &&
              i >= 0
              ? -0.5
              : 0;
          })(X);
        let fe = !1,
          ye = !1;
        1 == ve && ((fe = !0), (ye = !0)),
          i.useLayoutEffect(
            () => n.O54.Current().forceLayoutUpdate(),
            [ae.u, ae.v, se.u, se.v],
          );
        const be = i.useCallback(
            (e) => {
              d.r.SetRenderedPanelForRequestID(re, e);
            },
            [re],
          ),
          Le = (0, u.Ue)(ee, be),
          Se = i.createElement(
            p,
            { invertParentPanelPitch: !ue },
            i.createElement(
              m,
              { offsetPixels: le, offsetMeters: ce },
              i.createElement(
                C,
                { rotation: de },
                i.createElement(
                  n.Zkm,
                  Object.assign(
                    {
                      ref: Le,
                      debug_name: `${null == X ? void 0 : X.popup_overlay_key} (popup:${null == X ? void 0 : X.dashboard_popup_id})`,
                      id: X ? `PooledPopup-${X.popup_overlay_key}` : void 0,
                      interactive: me,
                      only_visible_with_laser: Ce,
                      curvature: pe ? "inherit-from-parent-panel" : void 0,
                      overlay_key: null == X ? void 0 : X.popup_overlay_key,
                      origin: ie,
                      meters_per_pixel:
                        (null !==
                          (Y =
                            null === l.SW || void 0 === l.SW
                              ? void 0
                              : l.SW.m_fVRGamepadUI_MetersPerPixel) &&
                        void 0 !== Y
                          ? Y
                          : 1) * he,
                      reflect: h(X),
                      sort_depth_bias: _e,
                      inputFocusParams: {
                        unSteamInputAppID: me ? c.qx : void 0,
                      },
                      uv_min: ae,
                      uv_max: se,
                      sort_order: ge,
                      no_depth_test: fe,
                      no_depth_write: ye,
                      outline: n.mw.None,
                      frame_resize_scale_factor: 1,
                    },
                    oe,
                  ),
                  te,
                ),
              ),
            ),
          );
        return (null == X ? void 0 : X.parent_overlay_key)
          ? i.createElement(
              n.b$J,
              { parent_overlay_key: null == X ? void 0 : X.parent_overlay_key },
              i.createElement(
                n.Ci8,
                {
                  key: null == X ? void 0 : X.dashboard_popup_id,
                  location: ne,
                },
                Se,
              ),
            )
          : (null == X ? void 0 : X.parent_device_path)
            ? 2 == (null == X ? void 0 : X.parent_enum)
              ? i.createElement(
                  n.dLy,
                  { parent_path: null == X ? void 0 : X.parent_device_path },
                  i.createElement(
                    n.m$_,
                    {
                      rotation_start_angle_threshold: 10,
                      rotation_stop_angle_threshold: 5,
                      rotation_ease_out_angle_threshold: 20,
                      rotation_min_angular_velocity: 75,
                      rotation_ease_in_power: 1.5,
                      lock_to_horizon: !1,
                    },
                    Se,
                  ),
                )
              : i.createElement(
                  n.dLy,
                  { parent_path: null == X ? void 0 : X.parent_device_path },
                  Se,
                )
            : Se;
      }
      function g(e) {
        return (
          null != (null == e ? void 0 : e.parent_device_path) ||
          null != (null == e ? void 0 : e.parent_enum) ||
          null != (null == e ? void 0 : e.parent_overlay_key)
        );
      }
      (0, s.PA)((e) =>
        i.createElement(
          i.Fragment,
          null,
          d.r.requests
            .filter(g)
            .map((e) =>
              i.createElement(v, {
                popupRequest: e,
                key: e.dashboard_popup_id,
              }),
            ),
        ),
      );
    },
    8964: (e, t, o) => {
      "use strict";
      var r = o(1635),
        n = o(7813),
        i = o(9728),
        a = o(1333);
      class s {
        get allowTravelModePopup() {
          return a.HR.settings.get("/settings/internal/enableTravelModePopup");
        }
        constructor() {
          (this.m_bRequestTravelModeTracking = !1),
            (this.m_bRequestTravelModeTrackingPopupTriggered = !1),
            (this.m_bEnableTravelMode = !1),
            (this.m_bTravelModeEverSetByUser = !1),
            (0, n.makeObservable)(this);
        }
        Init() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            var e;
            (this.m_bEnableTravelMode =
              null !==
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRPathProperties.GetBoolPathProperty(
                        "/driver_cv/enableTravelMode",
                      )) &&
              void 0 !== e &&
              e),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.RegisterForBoolPathPropertyChangedEvents(
                  "/driver_cv/requestEnablingTravelModeSentToUser",
                  this.onRequestTravelModeTrackingEvent,
                ),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.RegisterForBoolPathPropertyChangedEvents(
                  "/driver_cv/enableTravelMode",
                  (0, n.action)((e) => {
                    this.m_bEnableTravelMode = e;
                  }),
                ),
              (0, n.reaction)(
                () => i.G.Instance.SceneAppKey,
                (e) => {
                  this.m_bRequestTravelModeTrackingPopupTriggered = !1;
                },
              );
          });
        }
        onRequestTravelModeTrackingEvent(e) {
          const t = e;
          t || (this.m_bTravelModeEverSetByUser = !1),
            t != this.m_bRequestTravelModeTracking &&
              ((this.m_bRequestTravelModeTracking = t),
              !t ||
                this.m_bRequestTravelModeTrackingPopupTriggered ||
                this.m_bTravelModeEverSetByUser ||
                (console.log(
                  "Travel conditions detected. Popup allowed?",
                  this.allowTravelModePopup,
                ),
                this.allowTravelModePopup &&
                  (this.m_bRequestTravelModeTrackingPopupTriggered = !0)));
        }
        SetTravelModeByUser(e) {
          VRHTML.VRPathProperties.SetBoolPathProperty(
            "/driver_cv/enableTravelMode",
            e,
          ),
            (this.m_bRequestTravelModeTrackingPopupTriggered = !1),
            (this.m_bTravelModeEverSetByUser = !0);
        }
      }
      (0, r.Cg)(
        [n.observable],
        s.prototype,
        "m_bRequestTravelModeTracking",
        void 0,
      ),
        (0, r.Cg)(
          [n.observable],
          s.prototype,
          "m_bRequestTravelModeTrackingPopupTriggered",
          void 0,
        ),
        (0, r.Cg)([n.observable], s.prototype, "m_bEnableTravelMode", void 0),
        (0, r.Cg)(
          [n.observable],
          s.prototype,
          "m_bTravelModeEverSetByUser",
          void 0,
        ),
        (0, r.Cg)([n.computed], s.prototype, "allowTravelModePopup", null),
        (0, r.Cg)(
          [n.action.bound],
          s.prototype,
          "onRequestTravelModeTrackingEvent",
          null,
        ),
        (0, r.Cg)([n.action.bound], s.prototype, "SetTravelModeByUser", null);
      const l = new s();
      window.TravelModeStore = l;
    },
    5751: (e, t, o) => {
      "use strict";
      o.d(t, {
        BS: () => H,
        DO: () => C,
        Ey: () => h,
        FG: () => c,
        I$: () => I,
        Ki: () => A,
        LG: () => P,
        PN: () => Z,
        Pq: () => L,
        Qt: () => R,
        Sc: () => k,
        Ut: () => O,
        VR: () => m,
        Xj: () => S,
        YN: () => u,
        Zy: () => _,
        _F: () => b,
        _y: () => F,
        aJ: () => w,
        bm: () => V,
        eT: () => d,
        fr: () => M,
        hU: () => v,
        hV: () => T,
        jd: () => E,
        nl: () => p,
        oE: () => q,
        oU: () => z,
        rx: () => g,
        s3: () => B,
        vN: () => x,
        wB: () => D,
        xI: () => N,
        y$: () => G,
      });
      var r = o(1635),
        n = o(6540),
        i = o(6185),
        a = o(108),
        s = o.n(a),
        l = o(9283);
      function c(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              x: "0px",
              y: "0px",
              viewBox: "0 0 100 100",
              xmlSpace: "preserve",
            },
            e,
          ),
          n.createElement(
            "g",
            null,
            n.createElement("path", {
              d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
            }),
          ),
        );
      }
      function d(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Caution",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 1L0 33H36L18 1ZM21.63 12L20.42 22H15.58L14.37 12H21.63ZM18 30C17.4067 30 16.8266 29.8241 16.3333 29.4944C15.8399 29.1648 15.4554 28.6962 15.2284 28.1481C15.0013 27.5999 14.9419 26.9967 15.0576 26.4147C15.1734 25.8328 15.4591 25.2982 15.8787 24.8787C16.2982 24.4591 16.8328 24.1734 17.4147 24.0576C17.9967 23.9419 18.5999 24.0013 19.1481 24.2284C19.6962 24.4554 20.1648 24.8399 20.4944 25.3333C20.8241 25.8266 21 26.4067 21 27C21 27.7956 20.6839 28.5587 20.1213 29.1213C19.5587 29.6839 18.7956 30 18 30Z",
          }),
        );
      }
      function u(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            d: "M32 4V16H28V10.83L19 19.83L16.19 17L25.19 8H20V4H32ZM28 28H8V8H13V4H4V32H32V23H28V28Z",
            fill: "currentColor",
          }),
        );
      }
      function p(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Display",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            d: "M34 6H2V28H10.6L9 34H27L25.4 28H34V6ZM30 24H6V10H30V24Z",
            fill: "currentColor",
          }),
        );
      }
      function m(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_VR",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            d: "M33 13.3C33.0114 12.2663 32.7021 11.2545 32.1147 10.4038C31.5273 9.5532 30.6907 8.90553 29.72 8.54998C25.9132 7.45272 21.9604 6.94682 18 7.04998C14.0396 6.94682 10.0868 7.45272 6.28 8.54998C5.30932 8.90553 4.4727 9.5532 3.88531 10.4038C3.29791 11.2545 2.98862 12.2663 3 13.3L0 14.05V20.05L3 20.81C3.08508 22.0931 3.51701 23.3289 4.24968 24.3857C4.98235 25.4424 5.98826 26.2803 7.16 26.81L10.16 28.08C10.7695 28.3298 11.4453 28.3671 12.0785 28.1856C12.7117 28.0042 13.2654 27.6147 13.65 27.08C14.1242 26.3803 14.779 25.8222 15.5449 25.4648C16.3108 25.1074 17.1592 24.964 18 25.05C18.8449 24.9722 19.6951 25.1256 20.4595 25.4937C21.224 25.8619 21.874 26.4309 22.34 27.14C22.7246 27.6747 23.2782 28.0642 23.9115 28.2456C24.5447 28.4271 25.2205 28.3898 25.83 28.14L28.83 26.87C30.0017 26.3403 31.0076 25.5024 31.7403 24.4457C32.473 23.3889 32.9049 22.1531 32.99 20.87L35.99 20.11V14.11L33 13.3ZM22.16 13C20.9452 12.7243 19.7054 12.5735 18.46 12.55C16.9073 12.5083 15.3555 12.6595 13.84 13L13.16 10.08C14.925 9.68481 16.7318 9.50682 18.54 9.54998C19.988 9.57538 21.4292 9.75302 22.84 10.08L22.16 13Z",
            fill: "currentColor",
          }),
        );
      }
      function C(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Playspace",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fill: "currentColor",
            d: "M15.6615 10.25C15.3525 10.7125 15.1875 11.2562 15.1875 11.8125C15.1867 12.1821 15.2589 12.5482 15.3999 12.8898C15.541 13.2314 15.7481 13.5417 16.0094 13.8031C16.2708 14.0644 16.5811 14.2715 16.9227 14.4126C17.2643 14.5536 17.6304 14.6258 18 14.625C18.5563 14.625 19.1 14.4601 19.5625 14.151C20.0251 13.842 20.3855 13.4027 20.5984 12.8888C20.8113 12.3749 20.867 11.8094 20.7585 11.2638C20.6499 10.7182 20.3821 10.2171 19.9887 9.82376C19.5954 9.43043 19.0943 9.16256 18.5487 9.05404C18.0031 8.94552 17.4376 9.00122 16.9237 9.21409C16.4098 9.42696 15.9705 9.78745 15.6615 10.25Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M14.4645 17.9645C15.4021 17.0268 16.6739 16.5 18 16.5C19.3261 16.5 20.5979 17.0268 21.5355 17.9645C22.4732 18.9021 23 20.1739 23 21.5V24H21L20.5 29H15.5L15 24H13V21.5C13 20.1739 13.5268 18.9021 14.4645 17.9645Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 0L35 7.00016V29L18 36L1 29V7.00016L18 0ZM4 27.7647V9.76471L18 4L32 9.76471V27.7647L24.6111 24.7222L24.1734 27.7864L27.1208 29L18 32.7556L8.87919 29L11.8266 27.7864L11.3889 24.7222L4 27.7647Z",
          }),
        );
      }
      function h(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_FloorHeight",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fill: "currentColor",
            d: "M11.9358 24.497L1 29L18 36L35 29L24.0637 24.4968L22.5504 27.1181L27.1208 29L18 32.7556L8.87919 29L13.4492 27.1182L11.9358 24.497Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M17.9999 0L23.196 9H18.9999V20H23.1962L18 29L12.8038 20H16.9999V9H12.8037L17.9999 0Z",
          }),
        );
      }
      function v(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Recenter",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fill: "currentColor",
            d: "M14.7261 2.74994C14.2934 3.39746 14.0625 4.15874 14.0625 4.9375C14.0613 5.45491 14.1624 5.96744 14.3599 6.44568C14.5573 6.92392 14.8473 7.35845 15.2132 7.72431C15.5791 8.09017 16.0136 8.38016 16.4918 8.57763C16.9701 8.7751 17.4826 8.87616 18 8.875C18.7788 8.875 19.54 8.64407 20.1876 8.21141C20.8351 7.77876 21.3398 7.1638 21.6378 6.44432C21.9358 5.72483 22.0138 4.93313 21.8618 4.16933C21.7099 3.40553 21.3349 2.70394 20.7842 2.15327C20.2336 1.6026 19.532 1.22759 18.7682 1.07566C18.0044 0.92373 17.2127 1.00171 16.4932 1.29973C15.7737 1.59775 15.1587 2.10243 14.7261 2.74994Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M13.0503 13.5503C14.363 12.2375 16.1435 11.5 18 11.5C19.8565 11.5 21.637 12.2375 22.9497 13.5503C24.2625 14.863 25 16.6435 25 18.5V22H22.2L21.5 29H14.5L13.8 22H11V18.5C11 16.6435 11.7375 14.863 13.0503 13.5503Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M3 29C3 26.5645 5.66517 24.4196 9.70869 23.1656L10.0112 26.224C9.52728 26.393 9.07639 26.5754 8.66205 26.7688C6.18364 27.9254 6 28.9249 6 29C6 29.0751 6.18364 30.0746 8.66205 31.2312C10.8969 32.2741 14.1952 33 18 33C21.8048 33 25.1031 32.2741 27.3379 31.2312C29.8164 30.0746 30 29.0751 30 29C30 28.9249 29.8164 27.9254 27.3379 26.7688C26.9236 26.5754 26.4727 26.393 25.9888 26.224L26.2913 23.1656C30.3348 24.4196 33 26.5645 33 29C33 32.866 26.2843 36 18 36C9.71573 36 3 32.866 3 29Z",
          }),
        );
      }
      function g(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_FeatureVisible",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9 23.94 7.94C20.9843 6.77796 17.7541 6.50244 14.6444 7.14712C11.5346 7.7918 8.68012 9.32875 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
            fill: "currentColor",
          }),
        );
      }
      function _(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_FeatureHidden",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            d: "M29.57 11.57L24.82 16.32C24.9485 16.8705 25.0089 17.4347 25 18C25 19.8565 24.2625 21.637 22.9497 22.9497C21.637 24.2625 19.8565 25 18 25C17.423 24.9983 16.8486 24.9244 16.29 24.78L12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M28.94 2.94L23.94 7.94C20.9843 6.77797 17.7541 6.50244 14.6444 7.14712C11.5346 7.79181 8.68012 9.32876 6.43 11.57L0 18L6.43 24.43C6.6 24.6 6.79 24.75 6.97 24.91L3.44 28.44L5.56 30.56L31.06 5.06L28.94 2.94ZM11 18C11.0002 16.8706 11.2736 15.7581 11.7969 14.7573C12.3203 13.7565 13.078 12.8971 14.0054 12.2527C14.9328 11.6082 16.0024 11.1977 17.1229 11.0561C18.2434 10.9146 19.3815 11.0463 20.44 11.44L11.44 20.44C11.1493 19.6593 11.0003 18.833 11 18Z",
            fill: "currentColor",
          }),
        );
      }
      function f(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fill: "currentColor",
            d: "M11 9H29V19H26.6585C26.8797 19.6256 27 20.2987 27 21C27 21.3407 26.9716 21.6748 26.917 22H32V6H8V15.083C8.32521 15.0284 8.65929 15 9 15C9.70126 15 10.3744 15.1203 11 15.3415V9Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M9 24C10.6569 24 12 22.6569 12 21C12 19.3431 10.6569 18 9 18C7.34315 18 6 19.3431 6 21C6 22.6569 7.34315 24 9 24Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M21 24C22.6569 24 24 22.6569 24 21C24 19.3431 22.6569 18 21 18C19.3431 18 18 19.3431 18 21C18 22.6569 19.3431 24 21 24Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M26 30C26 27.2386 23.7614 25 21 25C18.2386 25 16 27.2386 16 30V32H26V30Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M14 30C14 27.2386 11.7614 25 9 25C6.23858 25 4 27.2386 4 30V32H14V30Z",
          }),
        );
      }
      function y(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fill: "currentColor",
            d: "M1 30.6985L7.90454 23.7939C6.78948 23.3564 6 22.2705 6 21.0002C6 19.3434 7.34315 18.0002 9 18.0002C10.2703 18.0002 11.3561 18.7897 11.7937 19.9048L22.6985 9H11V15.3415C10.3744 15.1203 9.70126 15 9 15C8.65929 15 8.32521 15.0284 8 15.083V6H25.6985L30.6985 1L32.8198 3.12132L3.12132 32.8198L1 30.6985Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M22.0095 18.1743L18.1741 22.0097C18.5886 23.17 19.6973 24.0002 21 24.0002C22.6569 24.0002 24 22.6571 24 21.0002C24 19.6976 23.1697 18.5888 22.0095 18.1743Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M8.18356 32.0002H14V30.0002C14 28.9217 13.6585 27.9229 13.0777 27.1061L8.18356 32.0002Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M26 30.0002C26 27.2388 23.7614 25.0002 21 25.0002C18.2386 25.0002 16 27.2388 16 30.0002V32.0002H26V30.0002Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M29 19V11.1836L32 8.18356V22H26.917C26.9716 21.6748 27 21.3407 27 21C27 20.2987 26.8797 19.6256 26.6585 19H29Z",
          }),
        );
      }
      function b(e) {
        const { off: t } = e,
          o = (0, r.Tt)(e, ["off"]);
        return t
          ? n.createElement(y, Object.assign({}, o))
          : n.createElement(f, Object.assign({}, o));
      }
      function L(e) {
        const { none: t, partial: o, right: i, left: a } = e,
          s = (0, r.Tt)(e, ["none", "partial", "right", "left"]);
        return t
          ? n.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "SVGIcon_Button SVGIcon_ControllerStatus",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                s,
              ),
              n.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M33.5871 3.5268L31.4417 1.38135L26.6841 6.13886C24.4873 5.49306 21.6236 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 27.1825 1.62275 28.7886 3.01931 29.8037L0.370949 32.452L2.5164 34.5975L33.5871 3.5268ZM23.2678 19.2678C23.0842 19.4513 22.8735 19.6049 22.6433 19.7232L17.3666 25H25L31 31C31 31 36 28.68 36 25.2C36 21.1218 33.3889 11.806 32.7566 9.60992L29.8137 12.5529C29.9361 12.852 30 13.1736 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16C27.1736 16 26.852 15.9361 26.5529 15.8137L23.7232 18.6433C23.6049 18.8735 23.4513 19.0842 23.2678 19.2678ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
              }),
            )
          : o || i
            ? n.createElement(
                "svg",
                Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "SVGIcon_Button SVGIcon_ControllerStatus",
                    viewBox: "0 0 36 36",
                    fill: "none",
                  },
                  s,
                ),
                n.createElement("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                }),
                n.createElement("path", {
                  fill: "currentColor",
                  opacity: "0.65",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                }),
              )
            : a
              ? n.createElement(
                  "svg",
                  Object.assign(
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "SVGIcon_Button SVGIcon_ControllerStatus",
                      viewBox: "0 0 36 36",
                      fill: "none",
                    },
                    s,
                  ),
                  n.createElement("path", {
                    fill: "currentColor",
                    opacity: "0.65",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                  n.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                  }),
                )
              : n.createElement(
                  "svg",
                  Object.assign(
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "SVGIcon_Button SVGIcon_ControllerStatus",
                      viewBox: "0 0 36 36",
                      fill: "none",
                    },
                    s,
                  ),
                  n.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                );
      }
      function S(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Minimize",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            d: "M32 27V32H4V27H32ZM29 10.77L25.48 7.22998L18 14.72L10.5 7.22998L7 10.77L18 21.77L29 10.77Z",
            fill: "currentColor",
          }),
        );
      }
      function M(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_TheaterMode",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fill: "currentColor",
            d: "M18 1C8.4375 1 1 3 1 3V23C1 23 5.70777 21.734 12.448 21.2165L18.0004 15.6641L23.5529 21.2166C30.2926 21.7342 35 23 35 23V3C35 3 27.5625 1 18 1Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M8 31.3209L11.2 34.5391L18 27.73L24.8182 34.5391L28 31.3209L18 21.3209L8 31.3209Z",
          }),
        );
      }
      function V(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Close",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            d: "M32.12 7.41L28.59 3.88L18 14.46L7.41 3.88L3.88 7.41L14.46 18L3.88 28.59L7.41 32.12L18 21.54L28.59 32.12L32.12 28.59L21.54 18L32.12 7.41Z",
            fill: "currentColor",
          }),
        );
      }
      function H(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fill: "currentColor",
            d: "M9.82998 20L13.41 23.59L10.59 26.41L2.16998 18L10.59 9.59L13.41 12.41L9.82998 16H22V20H9.82998ZM20.15 4H18V8H20.15C22.8021 8 25.3457 9.05357 27.2211 10.9289C29.0964 12.8043 30.15 15.3478 30.15 18C30.15 20.6522 29.0964 23.1957 27.2211 25.0711C25.3457 26.9464 22.8021 28 20.15 28H18V32H20.15C23.863 32 27.424 30.525 30.0495 27.8995C32.675 25.274 34.15 21.713 34.15 18C34.15 14.287 32.675 10.726 30.0495 8.1005C27.424 5.475 23.863 4 20.15 4Z",
          }),
        );
      }
      function w(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            d: "M33 18C33.0014 20.7047 32.2715 23.3594 30.8875 25.6832C29.5035 28.0069 27.517 29.9133 25.1382 31.2004C22.7594 32.4875 20.0769 33.1075 17.3746 32.9947C14.6722 32.8819 12.0507 32.0406 9.7874 30.5597C7.52413 29.0789 5.70334 27.0137 4.5178 24.5827C3.33226 22.1517 2.82607 19.4454 3.05281 16.7502C3.27955 14.0551 4.2308 11.4714 5.80584 9.2726C7.38089 7.07385 9.52113 5.34187 12 4.26V8.79C10.0125 10.0834 8.49624 11.9845 7.67712 14.2098C6.85801 16.4351 6.77992 18.8655 7.45451 21.1388C8.12909 23.4121 9.52023 25.4066 11.4206 26.8249C13.3209 28.2433 15.6287 29.0095 18 29.0095C20.3713 29.0095 22.6791 28.2433 24.5794 26.8249C26.4798 25.4066 27.8709 23.4121 28.5455 21.1388C29.2201 18.8655 29.142 16.4351 28.3229 14.2098C27.5038 11.9845 25.9875 10.0834 24 8.79V4.26C26.6738 5.42694 28.9493 7.34824 30.5478 9.78866C32.1463 12.2291 32.9985 15.0827 33 18ZM20 1H16V15H20V1Z",
            fill: "currentColor",
          }),
        );
      }
      function R(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            d: "M17.974 3C10.0808 3 3.61438 9.07573 3 16.7967L11.0534 20.121C11.7357 19.6551 12.56 19.383 13.447 19.383C13.5265 19.383 13.6056 19.3849 13.684 19.3892L17.2658 14.2073C17.2658 14.1826 17.2652 14.1585 17.2652 14.1342C17.2652 11.0149 19.807 8.47686 22.9319 8.47686C26.0568 8.47686 28.5987 11.0149 28.5987 14.1342C28.5987 17.2532 26.0568 19.7915 22.9319 19.7915C22.8887 19.7915 22.8463 19.7903 22.8035 19.7889L17.6954 23.4276C17.6981 23.4944 17.7004 23.5615 17.7004 23.6287C17.7004 25.9704 15.7923 27.8749 13.447 27.8749C11.3885 27.8749 9.66695 26.4079 9.27686 24.4652L3.51756 22.0881C5.30075 28.3844 11.0953 33 17.974 33C26.2726 33 33 26.2842 33 18.0001C32.9999 9.71534 26.2725 3 17.974 3Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M12.4163 25.7599L10.5704 24.9989C10.8977 25.6791 11.4633 26.2478 12.2149 26.5608C13.8388 27.2363 15.7116 26.4665 16.3884 24.8446C16.7162 24.0596 16.7186 23.193 16.3933 22.4064C16.0691 21.6196 15.457 21.0054 14.6698 20.6778C13.889 20.3538 13.0526 20.3656 12.317 20.6422L14.2241 21.4296C15.4222 21.928 15.9884 23.3013 15.4894 24.497C14.9906 25.6931 13.6143 26.2586 12.4163 25.7599Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M26.7079 14.1338C26.7079 12.0555 25.0142 10.3645 22.9321 10.3645C20.8502 10.3645 19.1559 12.0554 19.1559 14.1338C19.1559 16.2122 20.8501 17.9027 22.9321 17.9027C25.0141 17.9027 26.7079 16.2122 26.7079 14.1338ZM20.1018 14.1273C20.1018 12.5634 21.372 11.296 22.9384 11.296C24.505 11.296 25.7749 12.5634 25.7749 14.1273C25.7749 15.6912 24.5051 16.9586 22.9384 16.9586C21.372 16.9585 20.1018 15.6912 20.1018 14.1273Z",
            fill: "currentColor",
          }),
        );
      }
      function D(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            d: "M33 20.38V15.62L29.07 14.9C28.8121 14.015 28.453 13.1628 28 12.36L30.27 9.08L26.92 5.71L23.64 8C22.8372 7.54696 21.985 7.18793 21.1 6.93L20.38 3H15.62L14.9 6.93C14.015 7.18793 13.1628 7.54696 12.36 8L9.08 5.71L5.71 9.08L8 12.36C7.54696 13.1628 7.18793 14.015 6.93 14.9L3 15.62V20.38L6.93 21.1C7.18793 21.985 7.54696 22.8372 8 23.64L5.71 26.92L9.08 30.29L12.36 28C13.1637 28.4461 14.0159 28.7984 14.9 29.05L15.62 33H20.38L21.1 29.07C21.985 28.8121 22.8372 28.453 23.64 28L26.92 30.27L30.29 26.9L28 23.64C28.4461 22.8363 28.7984 21.9841 29.05 21.1L33 20.38ZM18 23C17.0111 23 16.0444 22.7068 15.2221 22.1573C14.3999 21.6079 13.759 20.827 13.3806 19.9134C13.0022 18.9998 12.9031 17.9945 13.0961 17.0245C13.289 16.0546 13.7652 15.1637 14.4645 14.4645C15.1637 13.7652 16.0546 13.289 17.0245 13.0961C17.9945 12.9031 18.9998 13.0022 19.9134 13.3806C20.827 13.759 21.6079 14.3999 22.1573 15.2221C22.7068 16.0444 23 17.0111 23 18C23 18.6566 22.8707 19.3068 22.6194 19.9134C22.3681 20.52 21.9998 21.0712 21.5355 21.5355C21.0712 21.9998 20.52 22.3681 19.9134 22.6194C19.3068 22.8707 18.6566 23 18 23Z",
            fill: "currentColor",
          }),
        );
      }
      function F(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fill: "currentColor",
            d: "M5 9H27V14.219C28.349 14.3875 29.6858 14.6529 31 15.0138V5H1V27H8V23H5V9Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M32.6676 21.1123C32.6751 20.4336 32.472 19.7693 32.0864 19.2107C31.7007 18.6522 31.1514 18.227 30.514 17.9935C28.0145 17.2731 25.4191 16.9409 22.8187 17.0086C20.2183 16.9409 17.6229 17.2731 15.1234 17.9935C14.4861 18.227 13.9368 18.6522 13.5511 19.2107C13.1654 19.7693 12.9623 20.4336 12.9698 21.1123L11 21.6048V25.5443L12.9698 26.0434C13.0256 26.8858 13.3093 27.6973 13.7903 28.3911C14.2714 29.085 14.9319 29.6352 15.7012 29.9829L17.671 30.8168C18.0712 30.9809 18.5149 31.0053 18.9307 30.8862C19.3465 30.7671 19.71 30.5113 19.9625 30.1602C20.2739 29.7008 20.7038 29.3344 21.2067 29.0997C21.7096 28.865 22.2666 28.7709 22.8187 28.8273C23.3735 28.7763 23.9317 28.877 24.4336 29.1187C24.9356 29.3604 25.3624 29.734 25.6683 30.1996C25.9209 30.5507 26.2844 30.8064 26.7002 30.9256C27.1159 31.0447 27.5597 31.0203 27.9599 30.8562L29.9296 30.0223C30.699 29.6746 31.3595 29.1244 31.8405 28.4305C32.3216 27.7367 32.6052 26.9252 32.6611 26.0828L34.6309 25.5837V21.6442L32.6676 21.1123ZM25.5502 20.9154C24.7525 20.7343 23.9385 20.6353 23.1207 20.6199C22.1013 20.5926 21.0823 20.6918 20.0873 20.9154L19.6408 18.9981C20.7997 18.7386 21.986 18.6218 23.1733 18.6501C24.124 18.6668 25.0703 18.7834 25.9966 18.9981L25.5502 20.9154Z",
          }),
        );
      }
      function I(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fill: "currentColor",
            d: "M27.6606 9H5.44666V22.8569H12.2301C11.9392 24.1289 11.6473 25.5974 11.5322 26.8569H1.44666V5H31.6606V14.4497C30.5713 14.0391 29.2449 13.6862 27.6606 13.4886V9Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M27.6606 17.1831C28.209 17.267 28.708 17.3724 29.1599 17.4909C30.064 17.7279 30.7797 18.0171 31.3256 18.2903C31.4454 18.3502 31.557 18.4094 31.6606 18.467C30.8488 18.0152 29.547 17.4717 27.6606 17.1831Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M25.4122 23.4571C25.4563 23.2356 25.5551 23.0294 25.6989 22.8569C25.6116 22.9616 25.5409 23.0788 25.489 23.2042C25.4562 23.2833 25.4309 23.3657 25.4136 23.4504L25.4122 23.4571C25.4032 23.5025 25.3966 23.5482 25.3923 23.594C25.3883 23.636 25.3863 23.6781 25.3863 23.7201C25.3863 23.8501 25.4051 23.9796 25.4423 24.1046C25.4556 24.1491 25.4711 24.1929 25.489 24.236C25.5229 24.318 25.5647 24.396 25.6135 24.4691C25.7114 24.6156 25.8376 24.7422 25.9855 24.841C26.0593 24.8903 26.1374 24.932 26.2186 24.9656C26.2566 24.9814 26.2954 24.9954 26.3347 25.0076C26.4634 25.0476 26.5982 25.0682 26.7344 25.0682C26.7344 25.0682 26.7345 25.0682 26.7344 25.0682C26.4678 25.0682 26.2072 24.9892 25.9855 24.841C25.7638 24.6929 25.591 24.4823 25.489 24.236C25.3869 23.9897 25.3602 23.7186 25.4122 23.4571Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M26.8831 25.06C26.9203 25.0559 26.9573 25.0502 26.9941 25.043C26.9593 25.0498 26.9243 25.0552 26.8892 25.0593C26.8872 25.0595 26.8851 25.0598 26.8831 25.06Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M29.9698 22.9113C29.7032 22.9113 29.4426 22.8322 29.2209 22.6841C28.9992 22.5359 28.8264 22.3254 28.7243 22.0791C28.6223 21.8327 28.5956 21.5617 28.6476 21.3002C28.6996 21.0387 28.828 20.7985 29.0166 20.6099C29.1462 20.4803 29.3002 20.3791 29.4688 20.3116C29.3993 20.3394 29.3323 20.373 29.2685 20.4119C29.1774 20.4674 29.0928 20.5337 29.0166 20.6099C28.8619 20.7646 28.7477 20.9541 28.683 21.1616C28.6688 21.207 28.657 21.2532 28.6476 21.3002C28.6303 21.3872 28.6218 21.4753 28.6218 21.5632C28.6218 21.7393 28.6563 21.9147 28.7243 22.0791C28.7578 22.1598 28.7989 22.2366 28.8467 22.3087L28.849 22.3121C28.9469 22.4586 29.073 22.5852 29.2209 22.6841C29.2946 22.7334 29.3728 22.775 29.454 22.8086C29.6096 22.8731 29.7765 22.9081 29.9463 22.911L29.9698 22.9113C29.9698 22.9113 29.9698 22.9113 29.9698 22.9113Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M29.7314 20.2363C29.7232 20.2378 29.715 20.2393 29.7069 20.241Z",
          }),
          n.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M33.1222 19.2292C33.1222 19.2292 30.8333 17 25 17C19.1667 17 16.8778 19.2292 16.8778 19.2292C16.8778 19.2292 15 25.3785 15 27.8769C15 29.7508 17.7778 31 17.7778 31L21.1111 27.7692H28.8889L32.2222 31C32.2222 31 35 29.7508 35 27.8769C35 25.3785 33.1222 19.2292 33.1222 19.2292ZM23.3333 23.4615H21.6667V25.0769H20V23.4615H18.3333V21.8462H20V20.2308H21.6667V21.8462H23.3333V23.4615ZM26.9444 25.0769C26.6697 25.0769 26.4012 24.998 26.1728 24.8501C25.9444 24.7021 25.7664 24.4919 25.6613 24.2459C25.5561 23.9999 25.5286 23.7293 25.5822 23.4681C25.6358 23.207 25.7681 22.9672 25.9623 22.7789C26.1566 22.5906 26.4041 22.4624 26.6735 22.4105C26.9429 22.3585 27.2222 22.3852 27.4759 22.4871C27.7297 22.589 27.9466 22.7615 28.0993 22.9829C28.2519 23.2043 28.3333 23.4645 28.3333 23.7308C28.3333 23.9075 28.2974 24.0826 28.2276 24.2459C28.1578 24.4092 28.0555 24.5576 27.9265 24.6826C27.7976 24.8076 27.6444 24.9068 27.4759 24.9745C27.3074 25.0421 27.1268 25.0769 26.9444 25.0769ZM30.2778 22.9231C30.0031 22.9231 29.7345 22.8441 29.5061 22.6962C29.2777 22.5483 29.0997 22.3381 28.9946 22.0921C28.8895 21.8461 28.862 21.5754 28.9156 21.3143C28.9692 21.0532 29.1014 20.8133 29.2957 20.625C29.4899 20.4368 29.7374 20.3086 30.0068 20.2566C30.2762 20.2047 30.5555 20.2314 30.8093 20.3332C31.0631 20.4351 31.28 20.6077 31.4326 20.829C31.5852 21.0504 31.6667 21.3107 31.6667 21.5769C31.6667 21.9339 31.5203 22.2763 31.2599 22.5288C30.9994 22.7812 30.6461 22.9231 30.2778 22.9231Z",
          }),
        );
      }
      function E(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M34 6H2V11H34V6ZM34 15H13V30H34V15ZM2 15H9V30H2V15Z",
            fill: "currentColor",
          }),
        );
      }
      function k(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            d: "M34 10H2V6H34V10ZM34 16H2V20H34V16ZM34 26H2V30H34V26Z",
            fill: "currentColor",
          }),
        );
      }
      function P(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M85.333 166.319V732.042C202.206 825.73 350.554 881.775 512 881.775C673.445 881.775 821.794 825.73 938.666 732.042V166.319C821.794 260.008 673.445 316.053 512 316.053C350.554 316.053 202.206 260.008 85.333 166.319ZM143.222 536.569L282.569 675.917L300.236 609.986C367.152 630.833 438.291 642.069 512 642.069C583.764 642.069 653.097 631.431 718.458 611.625L735.68 675.917L875.028 536.569L684.68 485.556L703.722 556.639C643.111 575.194 578.736 585.181 512 585.181C443.305 585.181 377.125 574.597 314.972 554.986L333.569 485.556L143.222 536.569Z",
            fill: "currentColor",
          }),
        );
      }
      function T(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.486 767.986L29.2778 873.194L89.6112 933.528L934.375 88.7778L874.028 28.4445L590.931 311.542C565.028 314.528 538.695 316.056 512 316.056C350.556 316.056 202.208 260.014 85.3334 166.319V732.042C101.153 744.722 117.556 756.722 134.486 767.986ZM254.556 647.917L340.111 562.361C331.667 560.069 323.278 557.611 314.972 554.986L333.57 485.556L143.222 536.569L254.556 647.917Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M512 881.778C436.764 881.778 364.375 869.597 296.695 847.125L501.833 642L506.945 642.056L512 642.069C583.764 642.069 653.097 631.431 718.458 611.625L735.681 675.917L875.028 536.569L684.681 485.556L703.722 556.639C657.903 570.667 609.917 579.792 560.403 583.417L938.667 205.167V732.042C821.792 825.736 673.445 881.778 512 881.778Z",
            fill: "currentColor",
          }),
        );
      }
      function O(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("circle", {
            cx: "18",
            cy: "7.5",
            r: "3.5",
            fill: "currentColor",
          }),
          n.createElement("circle", {
            cx: "18",
            cy: "18",
            r: "3.5",
            fill: "currentColor",
          }),
          n.createElement("circle", {
            cx: "18",
            cy: "28.5",
            r: "3.5",
            fill: "currentColor",
          }),
        );
      }
      function x(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM18 29C17.4067 29 16.8266 28.8241 16.3333 28.4944C15.8399 28.1648 15.4554 27.6962 15.2284 27.1481C15.0013 26.5999 14.9419 25.9967 15.0577 25.4147C15.1734 24.8328 15.4591 24.2982 15.8787 23.8787C16.2982 23.4591 16.8328 23.1734 17.4147 23.0576C17.9967 22.9419 18.5999 23.0013 19.1481 23.2284C19.6962 23.4554 20.1648 23.8399 20.4944 24.3333C20.8241 24.8266 21 25.4067 21 26C21 26.7956 20.6839 27.5587 20.1213 28.1213C19.5587 28.6839 18.7957 29 18 29ZM21.08 18.15C20.8072 18.2992 20.5779 18.517 20.4149 18.7817C20.2518 19.0465 20.1605 19.3492 20.15 19.66V21H15.85V19.66C15.8546 18.6058 16.1336 17.571 16.6597 16.6575C17.1857 15.744 17.9406 14.9832 18.85 14.45C19.159 14.2565 19.3975 13.9689 19.5306 13.6294C19.6636 13.29 19.6839 12.9169 19.5887 12.565C19.4934 12.2131 19.2876 11.9012 19.0015 11.6752C18.7155 11.4492 18.3644 11.3212 18 11.31C17.7781 11.31 17.5583 11.3537 17.3533 11.4386C17.1482 11.5236 16.9619 11.6481 16.805 11.805C16.6481 11.9619 16.5236 12.1482 16.4387 12.3533C16.3537 12.5583 16.31 12.7781 16.31 13H12C12.0002 11.9508 12.2755 10.9199 12.7984 10.0103C13.3214 9.10064 14.0738 8.34406 14.9805 7.81602C15.8872 7.28799 16.9165 7.00695 17.9657 7.00096C19.015 6.99497 20.0474 7.26423 20.9601 7.78188C21.8728 8.29953 22.6337 9.04747 23.1671 9.95106C23.7004 10.8547 23.9875 11.8823 23.9996 12.9315C24.0117 13.9807 23.7485 15.0147 23.2362 15.9304C22.7239 16.8461 21.9805 17.6114 21.08 18.15Z",
            fill: "currentColor",
          }),
        );
      }
      function Z(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 4L23 9H13L18 4ZM2 30V13H34V30H2ZM5 17H7V19H5V17ZM7 21H5V23H7V21ZM5 25H7V27H5V25ZM11 17H9V19H11V17ZM9 21H11V23H9V21ZM15 17H13V19H15V17ZM13 21H15V23H13V21ZM27 27V25H9V27H27ZM17 19V17H19V19H17ZM19 23V21H17V23H19ZM21 17H23V19H21V17ZM27 17H25V19H27V17ZM29 17H31V19H29V17ZM23 21H21V23H23V21ZM25 21H27V23H25V21ZM31 21H29V23H31V21ZM29 25H31V27H29V25Z",
            fill: "currentColor",
          }),
        );
      }
      function A(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6H34V23H2V6ZM5 10H7V12H5V10ZM7 14H5V16H7V14ZM5 18H7V20H5V18ZM11 10H9V12H11V10ZM9 14H11V16H9V14ZM15 10H13V12H15V10ZM13 14H15V16H13V14ZM27 18H9V20H27V18ZM17 10H19V12H17V10ZM19 14H17V16H19V14ZM21 10H23V12H21V10ZM27 10H25V12H27V10ZM29 10H31V12H29V10ZM23 14H21V16H23V14ZM25 14H27V16H25V14ZM31 14H29V16H31V14ZM29 18H31V20H29V18ZM18 32L23 27H13L18 32Z",
            fill: "currentColor",
          }),
        );
      }
      function B(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 9H34V27H2V9ZM5 13H7V15H5V13ZM7 21H5V23H7V21ZM5 17H9V19H5V17ZM11 13H9V15H11V13ZM9 21H27V23H9V21ZM15 13H13V15H15V13ZM11 17H13V19H11V17ZM19 13H17V15H19V13ZM15 17H17V19H15V17ZM21 17H19V19H21V17ZM21 13H23V15H21V13ZM25 17H23V19H25V17ZM25 13H27V15H25V13ZM31 13H29V15H31V13ZM29 21H31V23H29V21ZM31 17H27V19H31V17Z",
          }),
        );
      }
      function G(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
            { className: (0, l.A)(e.className, s().Spinner) },
          ),
          n.createElement("path", {
            d: "M18 10C17.4696 10 16.9609 9.78929 16.5858 9.41421C16.2107 9.03914 16 8.53043 16 8V3H20V8C20 8.53043 19.7893 9.03914 19.4142 9.41421C19.0391 9.78929 18.5304 10 18 10Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M23.66 12.34C23.2875 11.9653 23.0784 11.4584 23.0784 10.93C23.0784 10.4016 23.2875 9.89473 23.66 9.52L27.19 6L30 8.81L26.47 12.34C26.0957 12.7095 25.5909 12.9166 25.065 12.9166C24.5391 12.9166 24.0343 12.7095 23.66 12.34Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M33 20H28C27.4696 20 26.9609 19.7893 26.5858 19.4142C26.2107 19.0391 26 18.5304 26 18C26 17.4696 26.2107 16.9609 26.5858 16.5858C26.9609 16.2107 27.4696 16 28 16H33V20Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M27.19 30L23.66 26.46C23.2875 26.0853 23.0784 25.5783 23.0784 25.05C23.0784 24.5216 23.2875 24.0147 23.66 23.64C23.8458 23.454 24.0663 23.3065 24.3091 23.2059C24.5519 23.1052 24.8122 23.0534 25.075 23.0534C25.3378 23.0534 25.5981 23.1052 25.8409 23.2059C26.0837 23.3065 26.3043 23.454 26.49 23.64L30 27.19L27.19 30Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M20 33H16V28C16 27.4696 16.2107 26.9609 16.5858 26.5858C16.9609 26.2107 17.4696 26 18 26C18.5304 26 19.0391 26.2107 19.4142 26.5858C19.7893 26.9609 20 27.4696 20 28V33Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M8.81 30L6 27.19L9.53 23.66C9.71575 23.474 9.93632 23.3265 10.1791 23.2259C10.4219 23.1252 10.6822 23.0734 10.945 23.0734C11.2078 23.0734 11.4681 23.1252 11.7109 23.2259C11.9537 23.3265 12.1743 23.474 12.36 23.66C12.7325 24.0347 12.9416 24.5416 12.9416 25.07C12.9416 25.5984 12.7325 26.1053 12.36 26.48L8.81 30Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M8 20H3V16H8C8.53043 16 9.03914 16.2107 9.41421 16.5858C9.78929 16.9609 10 17.4696 10 18C10 18.5304 9.78929 19.0391 9.41421 19.4142C9.03914 19.7893 8.53043 20 8 20Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M9.51 12.34L6 8.81L8.81 6L12.34 9.54C12.7125 9.91472 12.9216 10.4216 12.9216 10.95C12.9216 11.4784 12.7125 11.9853 12.34 12.36C12.1529 12.5446 11.9313 12.6906 11.6878 12.7895C11.4443 12.8885 11.1837 12.9385 10.9209 12.9366C10.658 12.9347 10.3981 12.8811 10.156 12.7787C9.91396 12.6764 9.69443 12.5273 9.51 12.34Z",
            fill: "currentColor",
          }),
        );
      }
      function N(e) {
        const { type: t, partial: o } = e,
          a = (0, r.Tt)(e, ["type", "partial"]),
          [s, l] = (0, i.l)();
        return "triton" == t
          ? n.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                a,
              ),
              n.createElement(
                "g",
                { clipPath: l },
                n.createElement("path", {
                  fill: "currentColor",
                  d: "M34.5489 14.8979C34.0471 13.107 33.4146 11.3703 32.6633 9.69886C31.5496 7.22244 29.0787 5.63623 26.3628 5.63623H9.539C6.82361 5.63623 4.35214 7.22244 3.23897 9.69886C2.48764 11.3703 1.85526 13.107 1.35345 14.8979C0.452174 18.1113 -0.0302734 21.4994 -0.0302734 25.0005C-0.0302734 25.6495 -0.0136754 26.2952 0.0189672 26.9359C0.121874 28.9492 1.77614 30.5332 3.79169 30.5332C5.15659 30.5332 6.41639 29.7979 7.0836 28.6073C7.09136 28.5929 7.09967 28.5791 7.10742 28.5647C7.86815 27.2191 9.29118 26.3837 10.837 26.3837H25.0637C26.6095 26.3837 28.0325 27.2191 28.7932 28.5647C28.801 28.5785 28.8092 28.5929 28.817 28.6067C29.4843 29.7974 30.744 30.5327 32.1089 30.5327C34.1251 30.5327 35.7788 28.9492 35.8817 26.9353C35.9143 26.294 35.9309 25.649 35.9309 25C35.9309 21.4989 35.4485 18.1107 34.5477 14.8973L34.5489 14.8979ZM25.2634 8.40256C26.0274 8.40256 26.6466 9.02167 26.6466 9.78573C26.6466 10.5498 26.0274 11.1689 25.2634 11.1689C24.4993 11.1689 23.8802 10.5498 23.8802 9.78573C23.8802 9.02167 24.4993 8.40256 25.2634 8.40256ZM26.6466 15.3184C26.6466 16.0825 26.0274 16.7016 25.2634 16.7016C24.4993 16.7016 23.8802 16.0825 23.8802 15.3184C23.8802 14.5544 24.4993 13.9352 25.2634 13.9352C26.0274 13.9352 26.6466 14.5544 26.6466 15.3184ZM10.6383 9.78573C12.1659 9.78573 13.4047 11.0245 13.4047 12.552C13.4047 14.0796 12.1659 15.3184 10.6383 15.3184C9.11076 15.3184 7.87203 14.0796 7.87203 12.552C7.87203 11.0245 9.11076 9.78573 10.6383 9.78573ZM13.6913 19.262L13.0506 23.3059C12.9886 23.6982 12.6202 23.9659 12.2279 23.904L8.18409 23.2633C7.79179 23.2013 7.52403 22.8328 7.58597 22.4406L8.2267 18.3968C8.28864 18.0045 8.65712 17.7367 9.04936 17.7987L13.0932 18.4394C13.4855 18.5013 13.7532 18.8698 13.6913 19.262ZM21.1139 12.552C21.1139 11.788 21.733 11.1689 22.4971 11.1689C23.2611 11.1689 23.8802 11.788 23.8802 12.552C23.8802 13.3161 23.2611 13.9352 22.4971 13.9352C21.733 13.9352 21.1139 13.3161 21.1139 12.552ZM27.7177 23.2633L23.6738 23.904C23.2816 23.9659 22.9131 23.6987 22.8511 23.3059L22.2105 19.262C22.1485 18.8698 22.4157 18.5013 22.8086 18.4394L26.8524 17.7987C27.2446 17.7367 27.6131 18.0045 27.6751 18.3968L28.3158 22.4406C28.3777 22.8328 28.11 23.2013 27.7177 23.2633ZM28.0297 13.9352C27.2657 13.9352 26.6466 13.3161 26.6466 12.552C26.6466 11.788 27.2657 11.1689 28.0297 11.1689C28.7938 11.1689 29.4129 11.788 29.4129 12.552C29.4129 13.3161 28.7938 13.9352 28.0297 13.9352Z",
                }),
              ),
              n.createElement(
                "defs",
                null,
                n.createElement(
                  "clipPath",
                  { id: s },
                  n.createElement("rect", {
                    fill: "currentColor",
                    width: "36",
                    height: "36",
                  }),
                ),
              ),
            )
          : "steam" == t
            ? n.createElement(
                "svg",
                Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 36 36",
                    fill: "none",
                  },
                  a,
                ),
                n.createElement(
                  "g",
                  { clipPath: l },
                  n.createElement("path", {
                    fill: "currentColor",
                    d: "M5.625 31.0429C0.0351562 31.0429 0.0351562 24.75 0.0351562 24.75C0.0351562 23.2708 0.691018 18.9574 1.67867 14.9078C2.09604 21.229 4.23237 26.4107 7.46967 30.1342C6.94663 30.6907 6.34611 31.0429 5.625 31.0429Z",
                  }),
                  n.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.16687 29.2194C4.59849 25.0137 2.43205 18.8213 2.76162 11.0707C3.47054 8.93505 4.26138 7.27235 5.0625 6.76752C8.1706 5.06632 27.6869 4.8903 31.0078 6.76752C31.7909 7.26099 32.5642 8.86083 33.2607 10.9273C33.6225 18.7277 31.4618 24.9603 27.8856 29.1914C27.4035 28.4325 26.984 27.5272 26.5768 26.6483C25.7189 24.7967 24.9154 23.0625 23.6953 23.0625H12.375C11.1549 23.0625 10.3514 24.7967 9.49349 26.6483C9.08125 27.538 8.65647 28.4548 8.16687 29.2194ZM18 12.9375C18.7766 12.9375 19.4062 12.3079 19.4062 11.5312C19.4062 10.7546 18.7766 10.125 18 10.125C17.2234 10.125 16.5938 10.7546 16.5938 11.5312C16.5938 12.3079 17.2234 12.9375 18 12.9375ZM22.5 15.75C22.5 16.3713 21.9963 16.875 21.375 16.875C20.7537 16.875 20.25 16.3713 20.25 15.75C20.25 15.1286 20.7537 14.625 21.375 14.625C21.9963 14.625 22.5 15.1286 22.5 15.75ZM15.75 18.8437C15.75 19.931 14.8686 20.8125 13.7812 20.8125C12.6939 20.8125 11.8125 19.931 11.8125 18.8437C11.8125 17.7564 12.6939 16.875 13.7812 16.875C14.8686 16.875 15.75 17.7564 15.75 18.8437ZM24.75 18C24.75 18.6213 24.2463 19.125 23.625 19.125C23.0037 19.125 22.5 18.6213 22.5 18C22.5 17.3786 23.0037 16.875 23.625 16.875C24.2463 16.875 24.75 17.3786 24.75 18ZM21.375 21.375C21.9963 21.375 22.5 20.8713 22.5 20.25C22.5 19.6286 21.9963 19.125 21.375 19.125C20.7537 19.125 20.25 19.6286 20.25 20.25C20.25 20.8713 20.7537 21.375 21.375 21.375ZM20.25 18C20.25 18.6213 19.7463 19.125 19.125 19.125C18.5037 19.125 18 18.6213 18 18C18 17.3786 18.5037 16.875 19.125 16.875C19.7463 16.875 20.25 17.3786 20.25 18ZM13.5 12.375C13.5 14.8602 11.4853 16.875 9 16.875C6.51472 16.875 4.5 14.8602 4.5 12.375C4.5 9.88969 6.51472 7.87497 9 7.87497C11.4853 7.87497 13.5 9.88969 13.5 12.375ZM27 16.875C29.4853 16.875 31.5 14.8602 31.5 12.375C31.5 9.88969 29.4853 7.87497 27 7.87497C24.5147 7.87497 22.5 9.88969 22.5 12.375C22.5 14.8602 24.5147 16.875 27 16.875Z",
                  }),
                  n.createElement("path", {
                    fill: "currentColor",
                    d: "M28.5791 30.1112C29.1072 30.6809 29.7143 31.0429 30.4453 31.0429C36.0352 31.0429 36.0352 24.75 36.0352 24.75C36.0352 23.2544 35.3647 18.8614 34.3587 14.7732C33.9637 21.1424 31.8281 26.3629 28.5791 30.1112Z",
                  }),
                ),
                n.createElement(
                  "defs",
                  null,
                  n.createElement(
                    "clipPath",
                    { id: s },
                    n.createElement("rect", {
                      fill: "currentColor",
                      width: "36",
                      height: "36",
                    }),
                  ),
                ),
              )
            : "xbox" == t
              ? o
                ? n.createElement(
                    "svg",
                    Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        version: "1.1",
                        id: "Layer_1",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 36 36",
                      },
                      a,
                    ),
                    n.createElement("path", {
                      fill: "currentColor",
                      opacity: "0.5",
                      d: "M12.9,6.2c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.2-0.5-0.4-1.2-0.4c-1.1,0-4.5,1.1-5.1,1.7S5.6,8.4,5.6,8.4v0.1  c-0.4,0.3-0.8,0.7-1.1,1C3.4,10.7,0,20.2,0,25.3s3.4,5.6,3.4,5.6c0.9,0,2.3-1.8,3.7-3.5c1.2-1.5,2.3-3,3.1-3.2  c0.8-0.3,4.4-0.4,7.9-0.4V6.2H12.9z M8.4,14.6c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1,2.2,2.2S9.7,14.6,8.4,14.6z M15.8,18.8  c0,0.3-0.3,0.6-0.6,0.6h-0.8v0.8c0,0.3-0.3,0.6-0.6,0.6h-1.1c-0.3,0-0.6-0.3-0.6-0.6v-0.8h-0.8c-0.3,0-0.6-0.3-0.6-0.6v-1.1  c0-0.3,0.3-0.6,0.6-0.6h0.8v-0.8c0-0.3,0.3-0.6,0.6-0.6h1.1c0.3,0,0.6,0.3,0.6,0.6v0.8h0.8c0.3,0,0.6,0.3,0.6,0.6V18.8z",
                    }),
                    n.createElement("path", {
                      fill: "currentColor",
                      d: "M31.5,9.6c-0.3-0.3-0.7-0.6-1.1-1V8.4c0,0,0-0.6-0.6-1.1s-3.9-1.7-5.1-1.7c-0.7,0-0.9,0.2-1.2,0.4c-0.2,0.1-0.3,0.2-0.5,0.2  H18v17.6c3.5,0,7,0.1,7.9,0.4c0.8,0.3,1.9,1.7,3.1,3.2c1.4,1.7,2.8,3.5,3.7,3.5c0,0,3.4-0.6,3.4-5.6S32.6,10.7,31.5,9.6z M27.6,8.7  c0.8,0,1.4,0.6,1.4,1.4s-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4S26.8,8.7,27.6,8.7z M23.1,20.2c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2  s2.2,1,2.2,2.2S24.3,20.2,23.1,20.2z M25,14.1c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4  C26.4,13.4,25.8,14.1,25,14.1z M27.6,16.6c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4S28.3,16.6,27.6,16.6z M30.1,14.1  c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C31.5,13.4,30.9,14.1,30.1,14.1z",
                    }),
                  )
                : n.createElement(
                    "svg",
                    Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 36 36",
                        fill: "none",
                      },
                      a,
                    ),
                    n.createElement("path", {
                      fill: "currentColor",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M11.25 5.625C11.909 5.625 12.182 5.81802 12.4081 5.97792C12.568 6.09099 12.7045 6.1875 12.9375 6.1875H23.0625C23.2955 6.1875 23.432 6.09099 23.5919 5.97792C23.818 5.81802 24.091 5.625 24.75 5.625C25.875 5.625 29.25 6.75 29.8125 7.3125C30.375 7.875 30.375 8.4375 30.375 8.4375V8.5803C30.8163 8.91923 31.1986 9.26106 31.5 9.5625C32.625 10.6875 36 20.25 36 25.3125C36 30.375 32.625 30.9375 32.625 30.9375C31.7178 30.9375 30.323 29.1494 28.9649 27.4083C27.7966 25.9106 26.6553 24.4476 25.875 24.1875C24.1875 23.625 11.8125 23.625 10.125 24.1875C9.34465 24.4476 8.20344 25.9106 7.03512 27.4083C5.67696 29.1494 4.28215 30.9375 3.375 30.9375C3.375 30.9375 0 30.375 0 25.3125C0 20.25 3.375 10.6875 4.5 9.5625C4.80144 9.26106 5.18366 8.91923 5.625 8.5803V8.4375C5.625 8.4375 5.625 7.875 6.1875 7.3125C6.75 6.75 10.125 5.625 11.25 5.625ZM27.5625 8.71875C28.3392 8.71875 28.9688 9.34835 28.9688 10.125C28.9688 10.9017 28.3392 11.5312 27.5625 11.5312C26.7858 11.5312 26.1562 10.9017 26.1562 10.125C26.1562 9.34835 26.7858 8.71875 27.5625 8.71875ZM8.4375 14.625C9.68014 14.625 10.6875 13.6176 10.6875 12.375C10.6875 11.1324 9.68014 10.125 8.4375 10.125C7.19486 10.125 6.1875 11.1324 6.1875 12.375C6.1875 13.6176 7.19486 14.625 8.4375 14.625ZM23.0625 20.25C24.3051 20.25 25.3125 19.2426 25.3125 18C25.3125 16.7574 24.3051 15.75 23.0625 15.75C21.8199 15.75 20.8125 16.7574 20.8125 18C20.8125 19.2426 21.8199 20.25 23.0625 20.25ZM12.0938 17.1562V16.3125C12.0938 16.0018 12.3456 15.75 12.6562 15.75H13.7812C14.0919 15.75 14.3438 16.0018 14.3438 16.3125V17.1562H15.1875C15.4982 17.1562 15.75 17.4081 15.75 17.7188V18.8438C15.75 19.1544 15.4982 19.4062 15.1875 19.4062H14.3438V20.25C14.3438 20.5607 14.0919 20.8125 13.7812 20.8125H12.6562C12.3456 20.8125 12.0938 20.5607 12.0938 20.25V19.4062H11.25C10.9393 19.4062 10.6875 19.1544 10.6875 18.8438V17.7188C10.6875 17.4081 10.9393 17.1562 11.25 17.1562H12.0938ZM25.0312 14.0625C25.8079 14.0625 26.4375 13.4329 26.4375 12.6562C26.4375 11.8796 25.8079 11.25 25.0312 11.25C24.2546 11.25 23.625 11.8796 23.625 12.6562C23.625 13.4329 24.2546 14.0625 25.0312 14.0625ZM31.5 12.6562C31.5 13.4329 30.8704 14.0625 30.0938 14.0625C29.3171 14.0625 28.6875 13.4329 28.6875 12.6562C28.6875 11.8796 29.3171 11.25 30.0938 11.25C30.8704 11.25 31.5 11.8796 31.5 12.6562ZM28.9688 15.1875C28.9688 14.4108 28.3392 13.7812 27.5625 13.7812C26.7858 13.7812 26.1562 14.4108 26.1562 15.1875C26.1562 15.9642 26.7858 16.5938 27.5625 16.5938C28.3392 16.5938 28.9688 15.9642 28.9688 15.1875Z",
                    }),
                  )
              : "ps4" == t
                ? o
                  ? n.createElement(
                      "svg",
                      Object.assign(
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          version: "1.1",
                          id: "Layer_1",
                          x: "0px",
                          y: "0px",
                          viewBox: "0 0 36 36",
                        },
                        a,
                      ),
                      n.createElement("path", {
                        fill: "currentColor",
                        opacity: "0.5",
                        d: "M12.9,13.7c-0.6,0-1.1-0.5-1.1-1.1V8l-1.7,0L9.6,7.5c0,0-0.1,0-0.2,0C9.3,7.3,9.2,7.1,9,6.9  C6.7,6.5,5.2,7.1,4.7,7.4c-0.1,0-0.1,0.1-0.2,0.1C3.9,8,2.8,10.3,2.8,10.3C2.2,12,0.6,17,0,23.8c0,0-0.6,5.1,3.4,5.6  c3.5,0.4,4.6-4.1,5.2-6.5c0.2-0.7,0.3-1.2,0.4-1.4c0.3-0.3,0.7-0.5,0.9-0.5c0.6,0.7,1.5,1.1,2.5,1.1c1,0,1.9-0.4,2.5-1.1H18v-7.3  H12.9z M5.6,10.8c0-0.3,0.2-0.5,0.5-0.5h1.2c0.3,0,0.5,0.2,0.5,0.5v1c0,0.1-0.1,0.3-0.1,0.4l-0.6,0.6c-0.2,0.2-0.5,0.2-0.7,0  l-0.6-0.6c-0.1-0.1-0.1-0.2-0.1-0.4V10.8z M5.1,14.5h-1c-0.3,0-0.5-0.2-0.5-0.5v-1.2c0-0.3,0.2-0.5,0.5-0.5h1c0.1,0,0.3,0.1,0.4,0.1  L6.1,13c0.2,0.2,0.2,0.5,0,0.7l-0.6,0.6C5.4,14.4,5.3,14.5,5.1,14.5z M7.9,16c0,0.3-0.2,0.5-0.5,0.5H6.1c-0.3,0-0.5-0.2-0.5-0.5v-1  c0-0.1,0.1-0.3,0.1-0.4L6.4,14c0.2-0.2,0.5-0.2,0.7,0l0.6,0.6c0.1,0.1,0.1,0.2,0.1,0.4V16z M9.8,14c0,0.3-0.2,0.5-0.5,0.5h-1  c-0.1,0-0.3-0.1-0.4-0.1l-0.6-0.6c-0.2-0.2-0.2-0.5,0-0.7L8,12.4c0.1-0.1,0.2-0.1,0.4-0.1h1c0.3,0,0.5,0.2,0.5,0.5V14z M12.1,20.4  c-1.2,0-2.2-1-2.2-2.2c0-1.2,1-2.2,2.2-2.2c1.2,0,2.2,1,2.2,2.2C14.4,19.4,13.4,20.4,12.1,20.4z",
                      }),
                      n.createElement("path", {
                        fill: "currentColor",
                        d: "M36,23.8C35.4,17,33.8,12,33.2,10.3c0,0-1.1-2.2-1.7-2.8c0,0-0.1-0.1-0.2-0.1c-0.5-0.3-2-0.9-4.3-0.5  c-0.2,0.2-0.3,0.4-0.4,0.5c-0.1,0-0.2,0-0.2,0L25.9,8l-1.7,0v4.5c0,0.6-0.5,1.1-1.1,1.1H18V21h3.1c0.6,0.7,1.5,1.1,2.5,1.1  c1,0,1.9-0.4,2.5-1.1c0.2,0.1,0.6,0.2,0.9,0.5c0.1,0.1,0.3,0.7,0.4,1.4c0.6,2.4,1.7,6.9,5.2,6.5C36.6,28.8,36,23.8,36,23.8z   M23.6,20.4c-1.2,0-2.2-1-2.2-2.2c0-1.2,1-2.2,2.2-2.2c1.2,0,2.2,1,2.2,2.2C25.9,19.4,24.9,20.4,23.6,20.4z M26.7,14.5  c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C27.8,14,27.3,14.5,26.7,14.5z M29.2,17  c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C30.4,16.5,29.9,17,29.2,17z M29.2,12c-0.6,0-1.1-0.5-1.1-1.1  c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C30.4,11.5,29.9,12,29.2,12z M31.8,14.5c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1  c0.6,0,1.1,0.5,1.1,1.1C32.9,14,32.4,14.5,31.8,14.5z",
                      }),
                      n.createElement("rect", {
                        fill: "currentColor",
                        opacity: "0.5",
                        x: "12.9",
                        y: "8",
                        width: "5.1",
                        height: "4.5",
                      }),
                      n.createElement("rect", {
                        fill: "currentColor",
                        x: "18",
                        y: "8",
                        width: "5.1",
                        height: "4.5",
                      }),
                    )
                  : n.createElement(
                      "svg",
                      Object.assign(
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 36 36",
                          fill: "none",
                        },
                        a,
                      ),
                      n.createElement(
                        "g",
                        { clipPath: l },
                        n.createElement("path", {
                          fill: "currentColor",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M4.49995 7.47C3.93745 8.0325 2.81244 10.2825 2.81244 10.2825C2.24993 11.97 0.562445 17.0325 -5.43911e-05 23.7825C-5.43911e-05 23.7825 -0.562553 28.845 3.37495 29.4075C6.832 29.8396 7.9652 25.2921 8.55982 22.9059C8.73921 22.186 8.86958 21.6629 8.99995 21.5325C9.33789 21.1945 9.67584 21.0596 9.89181 21.0058C10.5086 21.6754 11.3928 22.095 12.3749 22.095C13.3745 22.095 14.2726 21.6605 14.8906 20.97H21.1093C21.7273 21.6605 22.6254 22.095 23.6249 22.095C24.6071 22.095 25.4913 21.6754 26.1081 21.0058C26.3241 21.0596 26.662 21.1945 27 21.5325C27.1303 21.6629 27.2607 22.186 27.4401 22.9059C28.0347 25.2921 29.1679 29.8396 32.625 29.4075C36.5625 28.845 36 23.7825 36 23.7825C35.4375 17.0325 33.75 11.97 33.1875 10.2825C33.1875 10.2825 32.0625 8.03251 31.4999 7.47C31.4575 7.42758 31.3927 7.39155 31.3091 7.36121C30.794 7.09333 29.2603 6.45543 26.9999 6.9075C26.8121 7.09539 26.6869 7.28328 26.6036 7.45021C26.4971 7.46255 26.4375 7.47001 26.4375 7.47001L25.875 8.0325L24.1874 8.03251V12.5325C24.1874 13.1538 23.6838 13.6575 23.0624 13.6575H12.9374C12.3161 13.6575 11.8124 13.1538 11.8124 12.5325V8.03251L10.1249 8.03249L9.56245 7.47C9.56245 7.47 9.50277 7.46254 9.39629 7.4502C9.31296 7.28328 9.18783 7.09539 8.99995 6.9075C6.73958 6.45543 5.20586 7.09333 4.6908 7.36121C4.60721 7.39155 4.54237 7.42759 4.49995 7.47ZM14.3999 18.1575C14.3999 19.4002 13.3926 20.4075 12.1499 20.4075C10.9073 20.4075 9.89995 19.4002 9.89995 18.1575C9.89995 16.9149 10.9073 15.9075 12.1499 15.9075C13.3926 15.9075 14.3999 16.9149 14.3999 18.1575ZM23.6249 20.4075C24.8676 20.4075 25.8749 19.4002 25.8749 18.1575C25.8749 16.9149 24.8676 15.9075 23.6249 15.9075C22.3823 15.9075 21.3749 16.9149 21.3749 18.1575C21.3749 19.4002 22.3823 20.4075 23.6249 20.4075ZM30.3749 10.845C30.3749 11.4663 29.8713 11.97 29.2499 11.97C28.6286 11.97 28.1249 11.4663 28.1249 10.845C28.1249 10.2237 28.6286 9.72001 29.2499 9.72001C29.8713 9.72001 30.3749 10.2237 30.3749 10.845ZM29.2499 17.0325C29.8713 17.0325 30.3749 16.5288 30.3749 15.9075C30.3749 15.2862 29.8713 14.7825 29.2499 14.7825C28.6286 14.7825 28.1249 15.2862 28.1249 15.9075C28.1249 16.5288 28.6286 17.0325 29.2499 17.0325ZM26.7187 12.2513C27.34 12.2513 27.8437 12.7549 27.8437 13.3763C27.8437 13.9976 27.34 14.5013 26.7187 14.5013C26.0974 14.5013 25.5937 13.9976 25.5937 13.3763C25.5937 12.7549 26.0974 12.2513 26.7187 12.2513ZM32.9062 13.3763C32.9062 12.7549 32.4025 12.2513 31.7812 12.2513C31.1599 12.2513 30.6562 12.7549 30.6562 13.3763C30.6562 13.9976 31.1599 14.5013 31.7812 14.5013C32.4025 14.5013 32.9062 13.9976 32.9062 13.3763ZM5.62495 10.7825C5.62495 10.5064 5.8488 10.2825 6.12495 10.2825H7.37495C7.65109 10.2825 7.87495 10.5064 7.87495 10.7825V11.7629C7.87495 11.8955 7.82227 12.0227 7.7285 12.1165L7.1035 12.7415C6.90824 12.9367 6.59166 12.9367 6.39639 12.7415L5.77139 12.1165C5.67763 12.0227 5.62495 11.8955 5.62495 11.7629V10.7825ZM6.12495 16.47C5.8488 16.47 5.62495 16.2462 5.62495 15.97V14.9896C5.62495 14.857 5.67763 14.7298 5.77139 14.6361L6.39639 14.0111C6.59166 13.8158 6.90824 13.8158 7.1035 14.0111L7.7285 14.6361C7.82227 14.7298 7.87495 14.857 7.87495 14.9896V15.97C7.87495 16.2462 7.65109 16.47 7.37495 16.47H6.12495ZM4.1562 14.5013C3.88006 14.5013 3.6562 14.2774 3.6562 14.0013V12.7513C3.6562 12.4751 3.88006 12.2513 4.1562 12.2513H5.13659C5.2692 12.2513 5.39638 12.3039 5.49014 12.3977L6.11514 13.0227C6.31041 13.218 6.31041 13.5346 6.11514 13.7298L5.49014 14.3548C5.39638 14.4486 5.2692 14.5013 5.13659 14.5013H4.1562ZM9.8437 14.0013C9.8437 14.2774 9.61984 14.5013 9.3437 14.5013H8.36331C8.2307 14.5013 8.10352 14.4486 8.00975 14.3548L7.38475 13.7298C7.18949 13.5346 7.18949 13.218 7.38475 13.0227L8.00975 12.3977C8.10352 12.3039 8.2307 12.2513 8.36331 12.2513H9.3437C9.61984 12.2513 9.8437 12.4751 9.8437 12.7513V14.0013Z",
                        }),
                        n.createElement("path", {
                          fill: "currentColor",
                          d: "M23.0624 8.03251L12.9374 8.03251V12.5325H23.0624V8.03251Z",
                        }),
                      ),
                      n.createElement(
                        "defs",
                        null,
                        n.createElement(
                          "clipPath",
                          { id: s },
                          n.createElement("rect", {
                            fill: "currentColor",
                            width: "36",
                            height: "36",
                          }),
                        ),
                      ),
                    )
                : "ps5" == t
                  ? o
                    ? n.createElement(
                        "svg",
                        Object.assign(
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            version: "1.1",
                            id: "Layer_1",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 36 36",
                          },
                          a,
                        ),
                        n.createElement("path", {
                          fill: "currentColor",
                          opacity: "0.5",
                          d: "M4.7,25.2c0.5-1.7,1.2-3.4,1.8-4.5c0.9-1.6,2.4-3.3,3.5-4.5c0.9-1,1.4-2.4,1.1-3.8l-0.7-3.8  c-0.1-0.4,0-0.7,0.3-0.9l0,0c-0.4,0-0.8,0.1-1.1,0.1V7.3c0,0,0-0.6-1.7-0.6c-1.3,0-2.6,0.7-3.1,1C4.6,7.8,4.5,8,4.5,8.2v0.6  C4.3,8.9,4.1,8.9,3.9,9C2.8,9.6,0,18,0,23.1c0,2.7,0.5,4.6,0.9,5.8c0.2,0.6,0.7,1.1,1.2,1.4l0.1,0c0.5,0.2,1-0.1,1.1-0.6  C3.7,28.6,4.1,26.9,4.7,25.2z M7.9,16.3c0,0.3-0.3,0.6-0.6,0.6H6.2c-0.3,0-0.6-0.3-0.6-0.6v-0.9c0-0.1,0.1-0.3,0.2-0.4l0.6-0.6  c0.2-0.2,0.6-0.2,0.8,0L7.7,15c0.1,0.1,0.2,0.2,0.2,0.4V16.3z M9,9.1c0.3-0.1,0.6,0,0.8,0.3l0.3,0.6c0.1,0.3,0,0.6-0.3,0.8  c-0.3,0.1-0.6,0-0.8-0.3L8.8,9.8C8.6,9.5,8.8,9.2,9,9.1z M8,12.8c0.1-0.1,0.2-0.2,0.4-0.2h0.9c0.3,0,0.6,0.3,0.6,0.6v1.1  c0,0.3-0.3,0.6-0.6,0.6H8.4c-0.1,0-0.3-0.1-0.4-0.2l-0.6-0.6c-0.2-0.2-0.2-0.6,0-0.8L8,12.8z M5.6,11.2c0-0.3,0.3-0.6,0.6-0.6h1.1  c0.3,0,0.6,0.3,0.6,0.6v0.9c0,0.1-0.1,0.3-0.2,0.4l-0.6,0.6c-0.2,0.2-0.6,0.2-0.8,0l-0.6-0.6c-0.1-0.1-0.2-0.2-0.2-0.4V11.2z   M3.7,13.2c0-0.3,0.3-0.6,0.6-0.6h0.9c0.1,0,0.3,0.1,0.4,0.2l0.6,0.6c0.2,0.2,0.2,0.6,0,0.8l-0.6,0.6c-0.1,0.1-0.2,0.2-0.4,0.2H4.2  c-0.3,0-0.6-0.3-0.6-0.6V13.2z",
                        }),
                        n.createElement("path", {
                          fill: "currentColor",
                          d: "M23.8,13.5l0.6-2l0.5-3c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.4-0.3-0.7-0.4c-0.1,0-0.2-0.1-0.3-0.1c-1.7-0.1-3.7-0.2-5.9-0.2v7.6  h4C22.8,14.9,23.6,14.3,23.8,13.5z",
                        }),
                        n.createElement("path", {
                          fill: "currentColor",
                          opacity: "0.5",
                          d: "M12,7.5c-0.1,0-0.1,0-0.2,0.1c-0.3,0.1-0.5,0.3-0.7,0.4C11,8.2,11,8.3,11,8.5l0.5,2.9l0.6,2.1  c0.3,0.8,1,1.4,1.9,1.4h4V7.3C15.8,7.3,13.7,7.4,12,7.5z",
                        }),
                        n.createElement("path", {
                          fill: "currentColor",
                          opacity: "0.5",
                          d: "M14,15.5c-1,0-2-0.6-2.4-1.6c-0.2,1-0.6,1.9-1.3,2.7C9.3,17.8,7.9,19.4,7,21c-0.6,1-1.2,2.7-1.8,4.4  c-0.5,1.7-1,3.4-1.3,4.5c-0.1,0.4-0.3,0.7-0.6,0.8l0,0c1,0.2,2-0.4,2.3-1.3l1.9-4.7c0.5-1.3,1.8-2.1,3.1-2.1H18v-7H14z M12.4,21.4  c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1,2.2,2.2S13.6,21.4,12.4,21.4z",
                        }),
                        n.createElement("path", {
                          fill: "currentColor",
                          d: "M32.1,29.8c-0.3-1.1-0.7-2.8-1.3-4.5C30.2,23.6,29.6,22,29,21c-0.9-1.5-2.3-3.2-3.4-4.4c-0.7-0.8-1.1-1.7-1.3-2.7  c-0.4,1-1.3,1.6-2.4,1.6h-4v7h7.3c1.4,0,2.6,0.8,3.1,2.1l1.9,4.7c0.4,0.9,1.3,1.5,2.3,1.3l0,0C32.4,30.5,32.2,30.2,32.1,29.8z   M23.6,21.4c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1,2.2,2.2S24.9,21.4,23.6,21.4z",
                        }),
                        n.createElement("path", {
                          fill: "currentColor",
                          d: "M32.1,9c-0.1-0.1-0.3-0.1-0.6-0.2V8.2c0-0.2-0.1-0.4-0.3-0.5c-0.5-0.3-1.8-1-3.1-1c-1.7,0-1.7,0.6-1.7,0.6v0.5  c-0.4,0-0.8-0.1-1.2-0.1l0,0c0.2,0.2,0.3,0.6,0.3,0.9l-0.5,3l0,0l0,0l-0.1,0.7c-0.2,1.4,0.2,2.8,1.1,3.8c1.1,1.2,2.5,3,3.5,4.5  c0.6,1.1,1.3,2.8,1.8,4.5c0.5,1.7,1,3.4,1.3,4.5c0.1,0.5,0.6,0.8,1.1,0.6l0.1,0c0.5-0.3,1-0.8,1.2-1.4c0.4-1.2,0.9-3.1,0.9-5.8  C36,18,33.2,9.6,32.1,9z M29.2,10.1c0.6,0,1.1,0.5,1.1,1.1s-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1S28.6,10.1,29.2,10.1z M25.9,9.9  l0.3-0.6C26.4,9,26.7,8.9,27,9.1c0.3,0.1,0.4,0.5,0.3,0.8l-0.3,0.6c-0.1,0.3-0.5,0.4-0.8,0.3C25.9,10.5,25.8,10.2,25.9,9.9z   M27,14.6c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S27.6,14.6,27,14.6z M29.2,16.9c-0.6,0-1.1-0.5-1.1-1.1  s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S29.9,16.9,29.2,16.9z M31.5,14.6c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1  S32.1,14.6,31.5,14.6z",
                        }),
                      )
                    : n.createElement(
                        "svg",
                        Object.assign(
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 36 36",
                            fill: "none",
                          },
                          a,
                        ),
                        n.createElement("path", {
                          fill: "currentColor",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M4.5 8.77962V8.17604C4.5 7.98797 4.59324 7.8129 4.75606 7.71875C5.29052 7.40971 6.58276 6.75 7.875 6.75C9.5625 6.75 9.5625 7.3125 9.5625 7.3125V7.79346C9.92732 7.74841 10.3079 7.7053 10.7038 7.66469L10.7001 7.66881C10.4768 7.91891 10.3639 8.22982 10.4289 8.58762L11.114 12.3555C11.3614 13.7163 10.9231 15.1154 9.99052 16.155C8.88458 17.3878 7.44481 19.1078 6.50883 20.6678C5.85918 21.7505 5.21964 23.4605 4.67636 25.1549C4.13086 26.8562 3.67463 28.5672 3.3961 29.6673C3.27268 30.1547 2.76181 30.4366 2.2902 30.2794L2.14425 30.2308C1.59878 29.9208 1.15999 29.4611 0.929107 28.8508C0.480791 27.6656 0 25.7647 0 23.0625C0 18 2.8125 9.5625 3.9375 9C4.07055 8.93348 4.25867 8.85908 4.5 8.77962ZM5.625 11.25C5.625 10.9393 5.87684 10.6875 6.1875 10.6875H7.3125C7.62316 10.6875 7.875 10.9393 7.875 11.25V12.142C7.875 12.2912 7.81574 12.4343 7.71025 12.5398L7.14775 13.1023C6.92808 13.3219 6.57192 13.3219 6.35225 13.1023L5.78975 12.5398C5.68426 12.4343 5.625 12.2912 5.625 12.142V11.25ZM5.625 16.3125C5.625 16.6232 5.87684 16.875 6.1875 16.875H7.3125C7.62316 16.875 7.875 16.6232 7.875 16.3125V15.4205C7.875 15.2713 7.81574 15.1282 7.71025 15.0227L7.14775 14.4602C6.92808 14.2406 6.57192 14.2406 6.35225 14.4602L5.78975 15.0227C5.68426 15.1282 5.625 15.2713 5.625 15.4205V16.3125ZM9.84375 14.3438C9.84375 14.6544 9.59191 14.9062 9.28125 14.9062H8.38924C8.24006 14.9062 8.09699 14.847 7.9915 14.7415L7.429 14.179C7.20933 13.9593 7.20933 13.6032 7.429 13.3835L7.9915 12.821C8.09699 12.7155 8.24006 12.6562 8.38925 12.6562H9.28125C9.59191 12.6562 9.84375 12.9081 9.84375 13.2188V14.3438ZM4.21875 14.9062C3.90809 14.9062 3.65625 14.6544 3.65625 14.3438V13.2188C3.65625 12.9081 3.90809 12.6562 4.21875 12.6562H5.11076C5.25994 12.6562 5.40301 12.7155 5.5085 12.821L6.071 13.3835C6.29067 13.6032 6.29067 13.9593 6.071 14.179L5.5085 14.7415C5.40301 14.847 5.25994 14.9062 5.11076 14.9062H4.21875ZM9.0297 9.05937C9.30756 8.92044 9.64544 9.03307 9.78437 9.31093L10.0656 9.87343C10.2046 10.1513 10.0919 10.4892 9.81406 10.6281C9.5362 10.767 9.19832 10.6544 9.05939 10.3765L8.77814 9.81404C8.63921 9.53618 8.75183 9.1983 9.0297 9.05937Z",
                        }),
                        n.createElement("path", {
                          fill: "currentColor",
                          d: "M18 7.3125C15.7603 7.3125 13.748 7.4035 11.9892 7.54668C11.9209 7.57082 11.8551 7.59586 11.7919 7.62185C11.4768 7.75142 11.2526 7.89452 11.1197 8.04343C10.9961 8.18189 10.9523 8.32182 10.9824 8.48699L11.5138 11.4097L12.1573 13.5129C12.4103 14.3408 13.1744 14.9062 14.0401 14.9062H21.9642C22.8281 14.9062 23.591 14.3431 23.8456 13.5176L24.4729 11.483L25.0176 8.48699C25.0463 8.32909 25.0039 8.1935 24.8798 8.05684C24.7463 7.90988 24.5214 7.76808 24.2057 7.6392C24.1215 7.60486 24.0327 7.57213 23.9398 7.54094C22.1978 7.40107 20.2096 7.3125 18 7.3125Z",
                        }),
                        n.createElement("path", {
                          fill: "currentColor",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M3.37124 30.6556L3.34019 30.6503C3.62833 30.4606 3.84996 30.1665 3.94139 29.8054C4.2185 28.7109 4.67149 27.0124 5.212 25.3266C5.75474 23.6339 6.37801 21.9791 6.99117 20.9572C7.89825 19.4454 9.30802 17.7581 10.4092 16.5306C11.085 15.7773 11.5326 14.8493 11.6859 13.8677C12.0647 14.8275 12.9948 15.4687 14.0401 15.4687H21.9642C23.0065 15.4687 23.9345 14.8312 24.3153 13.8755C24.4698 14.8543 24.9168 15.7794 25.5908 16.5306C26.692 17.7581 28.1017 19.4454 29.0088 20.9572C29.622 21.9791 30.2453 23.6339 30.788 25.3266C31.3285 27.0124 31.7815 28.7109 32.0586 29.8054C32.15 30.1664 32.3717 30.4606 32.6598 30.6503L32.6288 30.6556C31.6413 30.8202 30.6725 30.275 30.3007 29.3455L28.4111 24.6216C27.8986 23.3402 26.6576 22.5 25.2775 22.5H10.7225C9.34243 22.5 8.10142 23.3402 7.58888 24.6216L5.69928 29.3455C5.3275 30.275 4.35868 30.8202 3.37124 30.6556ZM25.875 19.125C25.875 20.3676 24.8676 21.375 23.625 21.375C22.3824 21.375 21.375 20.3676 21.375 19.125C21.375 17.8824 22.3824 16.875 23.625 16.875C24.8676 16.875 25.875 17.8824 25.875 19.125ZM12.375 21.375C13.6176 21.375 14.625 20.3676 14.625 19.125C14.625 17.8824 13.6176 16.875 12.375 16.875C11.1324 16.875 10.125 17.8824 10.125 19.125C10.125 20.3676 11.1324 21.375 12.375 21.375Z",
                        }),
                        n.createElement("path", {
                          fill: "currentColor",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M33.7098 30.2794L33.8557 30.2308C34.4012 29.9208 34.84 29.4611 35.0709 28.8508C35.5192 27.6656 36 25.7647 36 23.0625C36 18 33.1875 9.5625 32.0625 9C31.9295 8.93348 31.7413 8.85908 31.5 8.77962V8.17604C31.5 7.98797 31.4068 7.8129 31.2439 7.71875C30.7095 7.40971 29.4172 6.75 28.125 6.75C26.4375 6.75 26.4375 7.3125 26.4375 7.3125V7.79346C26.0683 7.74787 25.683 7.70427 25.282 7.66324L25.2962 7.67864C25.52 7.92502 25.6356 8.23268 25.5711 8.58762L25.0274 11.5776L25.0319 11.579L25.0203 11.6166L24.886 12.3555C24.6386 13.7163 25.0769 15.1154 26.0095 16.155C27.1154 17.3878 28.5552 19.1078 29.4912 20.6678C30.1408 21.7505 30.7804 23.4605 31.3236 25.1549C31.8691 26.8562 32.3254 28.5672 32.6039 29.6673C32.7273 30.1547 33.2382 30.4366 33.7098 30.2794ZM26.2156 9.31093C26.3546 9.03307 26.6924 8.92044 26.9703 9.05937C27.2482 9.1983 27.3608 9.53618 27.2219 9.81404L26.9406 10.3765C26.8017 10.6544 26.4638 10.767 26.1859 10.6281C25.9081 10.4892 25.7954 10.1513 25.9344 9.87343L26.2156 9.31093ZM30.375 15.75C30.375 16.3713 29.8713 16.875 29.25 16.875C28.6287 16.875 28.125 16.3713 28.125 15.75C28.125 15.1287 28.6287 14.625 29.25 14.625C29.8713 14.625 30.375 15.1287 30.375 15.75ZM31.5 14.625C32.1213 14.625 32.625 14.1213 32.625 13.5C32.625 12.8787 32.1213 12.375 31.5 12.375C30.8787 12.375 30.375 12.8787 30.375 13.5C30.375 14.1213 30.8787 14.625 31.5 14.625ZM30.375 11.25C30.375 11.8713 29.8713 12.375 29.25 12.375C28.6287 12.375 28.125 11.8713 28.125 11.25C28.125 10.6287 28.6287 10.125 29.25 10.125C29.8713 10.125 30.375 10.6287 30.375 11.25ZM27 14.625C27.6213 14.625 28.125 14.1213 28.125 13.5C28.125 12.8787 27.6213 12.375 27 12.375C26.3787 12.375 25.875 12.8787 25.875 13.5C25.875 14.1213 26.3787 14.625 27 14.625Z",
                        }),
                      )
                  : "switchpro" == t
                    ? n.createElement(
                        "svg",
                        Object.assign(
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 36 36",
                            fill: "none",
                          },
                          a,
                        ),
                        n.createElement("path", {
                          fill: "currentColor",
                          d: "M3.375 30.375C0 30.375 0 25.875 0 25.875C0 25.875 0.679114 19.5689 1.65511 14.6014C2.11919 15.2235 2.72448 16.0277 3.42078 16.936C4.97674 18.9655 6.99227 21.5211 8.90421 23.7256C8.37233 24.3118 7.95006 25.2335 7.50451 26.2061C6.59778 28.1853 5.59464 30.375 3.375 30.375Z",
                        }),
                        n.createElement("path", {
                          fill: "currentColor",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M9.94135 23.2037C10.5784 23.0625 11.25 23.0625 11.25 23.0625H24.75C24.75 23.0625 25.4216 23.0625 26.0586 23.2037C28.0029 20.9779 30.0841 18.3414 31.6864 16.2515C32.493 15.1994 33.1768 14.2877 33.6589 13.639C33.8038 13.444 33.9305 13.2728 34.0368 13.1288C33.6024 11.1876 33.1223 9.62156 32.625 8.99998C30.9375 6.75 24.75 6.75 24.75 6.75H11.25C11.25 6.75 5.0625 6.75 3.375 8.99998C2.87774 9.62156 2.39764 11.1876 1.96319 13.1288C2.06947 13.2728 2.19616 13.444 2.34111 13.639C2.82318 14.2877 3.50702 15.1994 4.31359 16.2515C5.91589 18.3414 7.99714 20.9779 9.94135 23.2037ZM27.5062 9.11247C28.2829 9.11247 28.9125 9.74207 28.9125 10.5187C28.9125 11.2954 28.2829 11.925 27.5062 11.925C26.7296 11.925 26.1 11.2954 26.1 10.5187C26.1 9.74207 26.7296 9.11247 27.5062 9.11247ZM8.1 15.1875C9.34264 15.1875 10.35 14.1801 10.35 12.9375C10.35 11.6949 9.34264 10.6875 8.1 10.6875C6.85736 10.6875 5.85 11.6949 5.85 12.9375C5.85 14.1801 6.85736 15.1875 8.1 15.1875ZM22.725 20.25C23.9676 20.25 24.975 19.2426 24.975 18C24.975 16.7574 23.9676 15.75 22.725 15.75C21.4824 15.75 20.475 16.7574 20.475 18C20.475 19.2426 21.4824 20.25 22.725 20.25ZM31.725 13.1063C31.725 13.8829 31.0954 14.5125 30.3187 14.5125C29.5421 14.5125 28.9125 13.8829 28.9125 13.1063C28.9125 12.3296 29.5421 11.7 30.3187 11.7C31.0954 11.7 31.725 12.3296 31.725 13.1063ZM24.6937 14.5125C25.4704 14.5125 26.1 13.8829 26.1 13.1063C26.1 12.3296 25.4704 11.7 24.6937 11.7C23.9171 11.7 23.2875 12.3296 23.2875 13.1063C23.2875 13.8829 23.9171 14.5125 24.6937 14.5125ZM28.9125 15.4688C28.9125 14.6921 28.2829 14.0625 27.5062 14.0625C26.7296 14.0625 26.1 14.6921 26.1 15.4688C26.1 16.2454 26.7296 16.875 27.5062 16.875C28.2829 16.875 28.9125 16.2454 28.9125 15.4688ZM11.5312 17.1562V16.3125C11.5312 16.0018 11.7831 15.75 12.0938 15.75H13.2188C13.5294 15.75 13.7812 16.0018 13.7812 16.3125V17.1562H14.625C14.9357 17.1562 15.1875 17.4081 15.1875 17.7188V18.8438C15.1875 19.1544 14.9357 19.4062 14.625 19.4062H13.7812V20.25C13.7812 20.5607 13.5294 20.8125 13.2188 20.8125H12.0938C11.7831 20.8125 11.5312 20.5607 11.5312 20.25V19.4062H10.6875C10.3768 19.4062 10.125 19.1544 10.125 18.8438V17.7188C10.125 17.4081 10.3768 17.1562 10.6875 17.1562H11.5312Z",
                        }),
                        n.createElement("path", {
                          fill: "currentColor",
                          d: "M34.3449 14.6014C33.8808 15.2235 33.2755 16.0277 32.5792 16.936C31.0233 18.9655 29.0077 21.5211 27.0958 23.7256C27.6277 24.3118 28.0499 25.2335 28.4955 26.2061C29.4022 28.1853 30.4054 30.375 32.625 30.375C36 30.375 36 25.875 36 25.875C36 25.875 35.3209 19.5689 34.3449 14.6014Z",
                        }),
                      )
                    : "hori" == t
                      ? n.createElement(
                          "svg",
                          Object.assign(
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 279 190",
                              fill: "none",
                            },
                            a,
                          ),
                          n.createElement("path", {
                            fill: "currentColor",
                            d: "M276.557 118.966L276.377 117.587C276.377 117.575 274.727 107.206 273.807 102.575C269.077 78.747 262.957 53.718 255.596 28.199C255.448 27.679 255.207 27.26 255.037 26.988C254.957 26.869 254.867 26.759 254.766 26.658C254.766 26.658 249.118 21.029 248.778 20.67C248.038 19.889 247.266 19.08 246.438 18.549C246.297 18.459 245.557 18.139 245.288 18.01C244.495 17.629 243.956 17.379 243.556 17.209C243.546 17.17 243.536 17.129 243.527 17.09C243.496 17.01 243.476 16.94 243.447 16.86C243.426 16.819 243.406 16.78 243.386 16.751C242.585 15.05 241.675 13.36 240.796 11.72L240.505 11.159C240.386 10.94 240.263 10.751 240.073 10.591C239.891 10.402 239.675 10.28 239.565 10.21C239.545 10.2 239.276 10.03 239.165 9.98C233.625 7.511 222.858 3.701 222.846 3.701C219.718 2.41 216.278 1.191 212.038 -0.149C210.688 -0.579 208.877 -1.079 206.926 -1.079C206.127 -1.079 205.346 -0.989 204.617 -0.819C202.926 -1.13 201.287 -1.409 199.717 -1.639C199.688 -1.649 197.457 -1.94 197.197 -1.969C197.047 -1.998 196.916 -1.998 196.787 -1.998C196.057 -1.998 195.346 -1.719 194.807 -1.219C194.647 -1.1 194.516 -0.949 194.397 -0.78C194.137 -0.44 192.708 1.441 191.688 2.762C177.307 1.89 161.506 1.431 142.077 1.332C142.067 1.332 126.397 1.41 126.097 1.41C126.097 1.41 106.898 1.832 98.2062 2.192C96.7762 2.262 95.4972 2.311 94.2672 2.362C91.9492 2.442 89.7382 2.522 87.0972 2.741C86.2072 1.568 85.1272 0.138 84.3972 -0.842C84.2972 -0.981 84.1762 -1.102 84.0472 -1.201C83.5862 -1.592 82.8462 -2 81.7762 -2C81.1862 -2 80.6712 -1.873 80.2082 -1.791C79.9482 -1.744 75.8272 -1.121 74.1872 -0.82C73.4472 -0.99 72.6672 -1.08 71.8472 -1.08C70.7772 -1.08 69.6172 -0.932 68.4272 -0.631C68.3982 -0.621 68.3662 -0.621 68.3372 -0.611C64.0462 0.649 59.8762 2.1 55.9682 3.69C55.9472 3.7 55.9272 3.71 55.9072 3.719C50.6372 5.408 45.1672 7.51 39.6372 9.979C39.3262 10.12 39.0262 10.35 38.8262 10.629L38.7172 10.779C38.7172 10.779 38.4242 11.22 38.2662 11.439C36.8362 13.548 35.8972 15.429 35.4162 17.148C34.9962 17.308 34.4262 17.58 33.5252 18.009C33.2552 18.138 32.7962 18.339 32.7752 18.349C32.0862 18.599 31.5152 19.148 30.6562 20.038C30.5062 20.188 30.4062 20.308 30.3362 20.368C30.3162 20.388 28.7562 21.948 28.7562 21.948C28.0572 22.657 26.4672 24.237 26.4362 24.268C26.2172 24.508 25.8872 24.817 25.5462 25.147C24.8362 25.829 24.1162 26.518 23.6062 27.249C23.5462 27.339 23.4972 27.429 23.4472 27.519C23.4072 27.619 23.3562 27.738 23.3272 27.839C22.5872 30.359 21.8172 33.038 21.1062 35.577C19.0462 42.827 16.9662 50.677 14.5372 60.247C10.0162 78.858 5.34716 98.065 2.43616 117.526C2.43616 117.546 2.33616 118.296 2.33616 118.296C0.536161 131.837 -1.33384 145.837 1.32616 159.616C2.81616 167.177 5.24616 173.155 8.77516 177.915C12.3162 182.905 17.4162 186.677 23.0952 188.507C26.2162 189.446 29.3752 189.927 32.5352 189.927C38.5052 189.927 44.0242 188.245 48.4852 185.075C59.3742 177.235 65.4952 162.106 70.8852 148.757C71.9242 146.187 73.9052 141.437 73.9142 141.405C74.1642 140.745 74.4532 139.995 74.7732 139.266C74.9942 138.846 75.9742 137.455 76.1442 137.196C76.3042 137.016 76.9842 136.257 77.1542 136.065C79.5332 133.805 82.6482 132.481 85.7182 132.45C85.7182 132.45 85.8862 132.448 86.1632 132.427H188.003C189.583 132.427 191.153 132.427 192.714 132.437C196.464 132.447 200.064 134.107 202.343 136.857C203.105 137.796 203.663 138.607 204.083 139.377C204.083 139.377 206.903 146.246 207.954 148.848C213.263 161.996 219.294 176.897 230.013 184.858C234.542 188.178 240.152 189.938 246.254 189.938C249.404 189.938 252.574 189.458 255.674 188.518C261.225 186.717 266.235 183.077 269.805 178.247C273.616 173.108 276.225 166.667 277.555 159.099C280.077 145.726 278.288 132.117 276.557 118.966ZM59.3422 67.242C51.7742 67.242 45.6172 61.086 45.6172 53.519C45.6172 45.951 51.7732 39.796 59.3422 39.796C66.9082 39.796 73.0652 45.95 73.0652 53.519C73.0652 61.085 66.9092 67.242 59.3422 67.242ZM121.963 93.212C121.965 93.267 121.955 93.294 121.947 93.335C121.586 95.048 120.058 96.29 118.31 96.29H108.806C108.769 96.29 108.755 96.292 108.701 96.29C108.453 96.347 108.267 96.546 108.267 96.811L108.3 106.147C108.3 106.182 108.302 106.217 108.302 106.258C108.302 108.006 107.062 109.535 105.349 109.893C105.337 109.897 105.324 109.899 105.312 109.899C103.865 110.2 102.408 110.35 100.951 110.35C99.4922 110.35 98.0332 110.198 96.5842 109.897C96.5742 109.897 96.5642 109.895 96.5552 109.893C94.8522 109.538 93.6142 108.022 93.6022 106.282V106.276V96.831C93.6022 96.788 93.6062 96.802 93.6022 96.759C93.5862 96.519 93.3872 96.325 93.1512 96.29C93.1162 96.292 93.0962 96.29 93.0632 96.29H83.6492C83.6452 96.29 83.6372 96.29 83.6332 96.29C81.8832 96.29 80.3562 95.048 79.9962 93.335C79.9922 93.323 79.9922 93.312 79.9902 93.3C79.3882 90.404 79.3882 87.47 79.9922 84.575C79.9922 84.563 79.9942 84.552 79.9962 84.54C80.3552 82.829 81.8812 81.622 83.6292 81.622C83.6762 81.622 83.7112 81.626 83.7642 81.624H93.0632C93.3482 81.624 93.5752 81.433 93.6272 81.179C93.6352 81.138 93.6312 81.113 93.6312 81.079L93.6022 71.6C93.6022 69.834 94.8442 68.303 96.5552 67.946C96.6062 67.936 96.6332 67.928 96.6862 67.919C99.5162 67.345 102.403 67.343 105.235 67.919C105.309 67.939 105.309 67.939 105.35 67.948C107.063 68.303 108.26 69.835 108.26 71.583C108.26 71.63 108.27 71.665 108.268 71.714V81.066C108.268 81.375 108.518 81.625 108.825 81.625L118.198 81.594C118.255 81.594 118.272 81.588 118.311 81.588C120.059 81.588 121.532 82.83 121.891 84.541C121.901 84.59 121.914 84.621 121.936 84.697C122.51 87.527 122.541 90.38 121.963 93.212ZM139.012 41.652C132.371 41.652 126.967 36.25 126.967 29.608C126.967 22.965 132.371 17.561 139.012 17.561C145.657 17.561 151.059 22.965 151.059 29.608C151.059 36.249 145.657 41.652 139.012 41.652ZM177.129 102.644C169.563 102.644 163.406 96.488 163.406 88.921C163.406 81.353 169.562 75.198 177.129 75.198C184.697 75.198 190.854 81.352 190.854 88.921C190.854 96.488 184.698 102.644 177.129 102.644ZM201.75 62.714C196.811 62.714 192.791 58.694 192.791 53.755C192.791 48.816 196.811 44.794 201.75 44.794C206.691 44.794 210.711 48.815 210.711 53.755C210.711 58.695 206.692 62.714 201.75 62.714ZM222.356 82.827C217.417 82.827 213.397 78.811 213.397 73.87C213.397 68.929 217.417 64.909 222.356 64.909C227.297 64.909 231.316 68.929 231.316 73.87C231.316 78.811 227.297 82.827 222.356 82.827ZM222.356 41.673C217.417 41.673 213.397 37.653 213.397 32.715C213.397 27.774 217.417 23.756 222.356 23.756C227.297 23.756 231.316 27.774 231.316 32.715C231.317 37.654 227.297 41.673 222.356 41.673ZM242.657 62.714C237.715 62.714 233.696 58.694 233.696 53.755C233.696 48.816 237.716 44.794 242.657 44.794C247.598 44.794 251.618 48.815 251.618 53.755C251.618 58.695 247.598 62.714 242.657 62.714Z",
                          }),
                        )
                      : "gamecube" == t
                        ? n.createElement(
                            "svg",
                            Object.assign(
                              {
                                viewBox: "0 0 36 26",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                              },
                              a,
                            ),
                            n.createElement("path", {
                              fill: "currentColor",
                              d: "M16.1827 0.0781004C17.6081 -0.0426998 19.0335 -0.0183863 20.4571 0.121069C23.1735 0.386856 25.7983 1.04207 28.3604 1.96775C28.3933 1.97962 28.4272 1.98854 28.4707 2.00193C28.4909 1.96528 28.5193 1.93316 28.5264 1.89744C28.5625 1.71211 28.6809 1.67014 28.8555 1.66892C29.6045 1.66433 30.3068 1.85492 30.9815 2.16013C31.946 2.59683 32.798 3.20275 33.5821 3.90916C33.6515 3.97184 33.6587 4.0229 33.6211 4.10544C33.5517 4.25805 33.4959 4.41663 33.4317 4.5781C33.8532 4.96729 34.223 5.39899 34.5352 5.87986C35.1214 6.78349 35.4179 7.78243 35.5371 8.84568C35.7968 11.1614 35.9333 13.4849 35.9893 15.8135C36.0312 17.563 35.9522 19.308 35.7452 21.0459C35.6396 21.9318 35.484 22.8097 35.1397 23.6406C34.9085 24.1987 34.6002 24.7018 34.0889 25.0547C33.3268 25.5809 31.8525 25.6874 31.0977 24.4013C30.7916 23.8796 30.6396 23.3065 30.5069 22.7236C30.164 21.2205 29.8132 19.7187 29.4649 18.2168C29.3652 17.7865 29.2627 17.3565 29.1563 16.9033C28.9289 17.0598 28.7547 17.247 28.6407 17.4707C28.4287 17.8872 28.233 18.3132 28.0498 18.7431C27.8101 19.3059 27.5943 19.8836 27.1934 20.3554C25.8977 21.881 23.8114 22.5708 21.6748 21.6279C20.7231 21.2077 19.9131 20.6151 19.417 19.6777C18.6868 18.2976 18.5895 16.8836 19.337 15.4814C19.7143 14.7738 20.2355 14.1607 20.8174 13.6045C20.9131 13.513 21.0054 13.4171 21.0987 13.3232C21.1053 13.3165 21.1081 13.3056 21.125 13.2715C19.0201 12.8742 16.9252 12.8754 14.7891 13.2461C14.8996 13.3584 14.9835 13.4489 15.0733 13.5332C15.6865 14.109 16.2264 14.7504 16.6319 15.4853C17.252 16.6089 17.2713 17.7935 16.8594 18.9892C16.4264 20.2467 15.5363 21.0751 14.3409 21.6045C13.0659 22.169 11.7798 22.2381 10.4932 21.6592C9.31318 21.1283 8.49376 20.2528 8.03227 19.0361C7.8451 18.5422 7.62199 18.0604 7.39262 17.584C7.24337 17.2739 7.00619 17.0271 6.70317 16.8174C6.62981 17.1331 6.55966 17.4332 6.49027 17.7334C6.16674 19.1315 5.84402 20.5299 5.51957 21.9277C5.38381 22.5117 5.2609 23.1001 5.1016 23.6777C4.99151 24.0771 4.78572 24.4377 4.51078 24.7549C3.77431 25.6032 2.45123 25.5179 1.74027 24.9228C1.27551 24.5338 0.998936 24.0235 0.790079 23.4697C0.51363 22.7361 0.370845 21.9703 0.275431 21.1963C0.0625906 19.4694 -0.0391154 17.7349 0.0146884 15.9961C0.0639243 14.4025 0.145108 12.8095 0.239298 11.2177C0.293428 10.303 0.380001 9.38862 0.487345 8.47849C0.644598 7.14865 1.20265 5.99432 2.10746 5.00876C2.25884 4.84393 2.42083 4.68749 2.58598 4.53611C2.65364 4.47384 2.67533 4.42018 2.62895 4.3408C2.61888 4.32371 2.61641 4.30211 2.60941 4.28318C2.46019 3.87647 2.45845 3.87395 2.80668 3.60154C3.75687 2.85869 4.77722 2.24333 5.95219 1.92283C6.43149 1.79205 6.91854 1.72986 7.41801 1.7656C7.56878 1.7763 7.65507 1.82431 7.68168 1.97263C7.6861 1.9963 7.70206 2.01729 7.70024 2.01365H7.70121C8.85964 1.6644 9.99349 1.30045 11.1397 0.982397C12.7909 0.524039 14.4739 0.222765 16.1827 0.0781004ZM11.6436 14.5459C11.5481 14.5459 11.4554 14.584 11.3877 14.6513C11.3203 14.7187 11.2825 14.8109 11.2823 14.9062V16.5761H9.60942C9.51394 16.5762 9.42124 16.6143 9.35356 16.6816C9.28616 16.749 9.24829 16.8412 9.24809 16.9365V17.8388C9.24816 17.9343 9.2861 18.0262 9.35356 18.0937C9.42128 18.1613 9.51371 18.1992 9.60942 18.1992H11.2823V19.8681C11.2823 19.9637 11.3202 20.0564 11.3877 20.124C11.4555 20.1915 11.5479 20.2294 11.6436 20.2295H12.5469L12.6182 20.2226C12.6874 20.2088 12.7521 20.1745 12.8028 20.124C12.8702 20.0564 12.9082 19.9636 12.9082 19.8681V18.1992H14.5811L14.6524 18.1924C14.7216 18.1785 14.7863 18.1443 14.837 18.0937C14.9043 18.0262 14.9423 17.9342 14.9424 17.8388V16.9365C14.9422 16.8412 14.9044 16.749 14.837 16.6816C14.7693 16.6143 14.6766 16.5762 14.5811 16.5761H12.9082V14.9062C12.908 14.8109 12.8703 14.7187 12.8028 14.6513C12.7351 14.584 12.6424 14.5459 12.5469 14.5459H11.6436ZM23.6299 16.0361C22.8392 16.0362 22.1979 16.6768 22.1973 17.4668C22.1973 18.2572 22.8389 18.8984 23.6299 18.8984C24.4208 18.8981 25.0625 18.2571 25.0625 17.4668C25.0619 16.6769 24.4204 16.0364 23.6299 16.0361ZM24.9141 10.0381C24.1027 10.0382 23.4448 10.6961 23.4444 11.5068C23.4446 12.3176 24.1026 12.9745 24.9141 12.9746C25.7257 12.9746 26.3836 12.3177 26.3838 11.5068C26.3834 10.6961 25.7256 10.0381 24.9141 10.0381ZM29.0166 7.02048C27.7316 7.02074 26.6898 8.06175 26.6895 9.34568C26.6895 10.6298 27.7314 11.6706 29.0166 11.6709C30.3019 11.6707 31.3447 10.6299 31.3448 9.34568C31.3445 8.06172 30.3017 7.0207 29.0166 7.02048ZM7.16703 7.51755C6.06435 7.51791 5.17021 8.41113 5.16996 9.51267C5.17006 10.6143 6.06425 11.5074 7.16703 11.5078C8.27012 11.5078 9.16498 10.6146 9.16508 9.51267C9.16483 8.41091 8.27002 7.51755 7.16703 7.51755ZM32.4268 5.96091C32.1773 5.89397 31.9081 5.92981 31.6358 6.12107L31.6875 6.19529L31.6348 6.12009L31.625 6.12888C31.3844 6.3549 31.2555 6.56575 31.2139 6.77048C31.1722 6.97658 31.2224 7.16409 31.3106 7.33689C31.3977 7.50721 31.5271 7.67288 31.6495 7.83396C31.7732 7.99695 31.8926 8.15982 31.9766 8.33494C32.0646 8.56462 32.0999 8.79776 32.1211 9.02244C32.1419 9.24271 32.1507 9.46898 32.1866 9.65818C32.2233 9.85102 32.2925 10.0294 32.4493 10.1562C32.6054 10.2822 32.8337 10.3456 33.1602 10.3457H33.1661C33.5007 10.3247 33.7197 10.1432 33.8516 9.88669C33.9805 9.63579 34.0277 9.31221 34.0313 8.99021C34.0348 8.66633 33.9945 8.33347 33.9434 8.05955C33.8927 7.7881 33.8297 7.56499 33.7832 7.46189C33.6977 7.27222 33.4405 6.75768 33.0733 6.37888C32.8896 6.18958 32.6713 6.02681 32.4268 5.96091ZM28.626 4.45212C28.3017 4.44856 27.9687 4.48892 27.6944 4.54001C27.4226 4.59065 27.2 4.6538 27.0967 4.70017C26.9075 4.78524 26.3924 5.04199 26.0127 5.40915C25.8229 5.59275 25.6598 5.81104 25.5938 6.05564C25.5267 6.30496 25.5625 6.57357 25.7539 6.84568L25.7627 6.85544C25.9891 7.09596 26.1994 7.22518 26.4043 7.26658C26.611 7.30822 26.7985 7.25829 26.9717 7.1699C27.1424 7.08278 27.3074 6.95331 27.4688 6.83103C27.5919 6.73776 27.7148 6.64721 27.8428 6.57224L27.9737 6.5029C28.2026 6.41596 28.4344 6.38139 28.6582 6.36033C28.8788 6.33958 29.1046 6.33173 29.294 6.29587C29.4874 6.25918 29.6659 6.18939 29.793 6.0322C29.8876 5.91515 29.947 5.75785 29.9707 5.5488L29.9834 5.32224L29.9825 5.31638C29.9613 4.98226 29.7801 4.76252 29.5235 4.63083C29.2723 4.50218 28.9483 4.45568 28.626 4.45212Z",
                            }),
                          )
                        : "8bitdo_sn30" == t
                          ? n.createElement(
                              "svg",
                              Object.assign(
                                {
                                  viewBox: "0 0 36 36",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                                a,
                              ),
                              n.createElement(
                                "g",
                                { clipPath: l },
                                n.createElement("path", {
                                  fill: "currentColor",
                                  d: "M11.2168 10.004C11.2667 10.004 11.3173 10.0048 11.3672 10.007C11.5907 10.0171 11.7075 10.136 11.7139 10.3605V10.5197H11.8965C15.9638 10.5197 20.0313 10.5188 24.0986 10.5226C24.239 10.5226 24.2877 10.4877 24.2861 10.3439C24.2837 10.1215 24.407 10.0095 24.6426 10.0079C25.5809 10.0033 26.5196 9.99799 27.458 10.0021C27.9951 10.0045 28.534 9.99883 29.0683 10.0431C30.1561 10.133 31.1802 10.4534 32.1455 10.965C32.3761 11.0871 32.5061 11.2487 32.4639 11.5187C32.4349 11.7034 32.5097 11.814 32.668 11.9269C34.3326 13.1148 35.399 14.705 35.8115 16.714C36.1472 18.3488 36.0615 19.9547 35.3359 21.4796C34.1526 23.9665 32.214 25.5049 29.4902 26.0021C28.1318 26.2499 26.8154 26.0562 25.5508 25.5109C25.3928 25.4427 25.2679 25.4444 25.1074 25.5246C23.4412 26.358 21.4298 25.8397 20.3681 24.3107C20.3086 24.2249 20.2442 24.1962 20.1426 24.1964C18.7123 24.1994 17.2818 24.2 15.8515 24.1964C15.7425 24.1962 15.6803 24.2342 15.6191 24.3224C14.5809 25.825 12.5275 26.3527 10.8974 25.5314C10.7321 25.4481 10.5977 25.4363 10.4277 25.5109C9.50667 25.9146 8.54336 26.127 7.53514 26.0997C5.65293 26.0489 4.00893 25.3806 2.60643 24.1339C1.39697 23.0585 0.587029 21.7317 0.197251 20.1554C-0.0490111 19.1589 -0.0459867 18.154 0.103501 17.1447C0.327081 15.6367 0.938596 14.308 1.94139 13.1603C2.37813 12.6607 2.87171 12.2238 3.42186 11.8527C3.50003 11.7999 3.52651 11.7413 3.52733 11.6505C3.52983 11.2987 3.69023 11.0423 4.00877 10.882C5.17119 10.2965 6.40354 10.0013 7.70506 10.0001C8.87562 9.99932 10.0462 10.0024 11.2168 10.004ZM12.5498 20.5704C11.7008 20.5706 11.0121 21.2596 11.0117 22.1085C11.0117 22.9578 11.7006 23.6465 12.5498 23.6466C13.399 23.6465 14.0879 22.9578 14.0879 22.1085C14.0874 21.2596 13.3988 20.5706 12.5498 20.5704ZM23.4736 20.5704C22.6246 20.5706 21.936 21.2596 21.9355 22.1085C21.9355 22.9578 22.6244 23.6465 23.4736 23.6466C24.3228 23.6465 25.0117 22.9578 25.0117 22.1085C25.0113 21.2596 24.3226 20.5706 23.4736 20.5704ZM28.6064 17.8507C27.9106 17.8511 27.3461 18.4157 27.3457 19.1115C27.3457 19.8076 27.9103 20.3728 28.6064 20.3732C29.3028 20.3732 29.8681 19.8079 29.8681 19.1115C29.8677 18.4154 29.3025 17.8507 28.6064 17.8507ZM6.7119 13.465C6.53797 13.4652 6.39674 13.6065 6.39647 13.7804V15.3331C6.39645 15.4095 6.33405 15.4707 6.25877 15.4708H4.70604C4.53211 15.471 4.39093 15.6124 4.39061 15.7863V17.1974C4.39084 17.3714 4.53205 17.5117 4.70604 17.5119H6.25877C6.33487 17.512 6.39602 17.5746 6.39647 17.6496V19.2033C6.39665 19.3773 6.53791 19.5185 6.7119 19.5187H8.12303C8.29688 19.5183 8.43731 19.3772 8.43748 19.2033V17.6496C8.43793 17.5736 8.50031 17.5122 8.57518 17.5119H10.1289C10.3027 17.5115 10.4441 17.3713 10.4443 17.1974V15.7863C10.444 15.6125 10.3027 15.4712 10.1289 15.4708H8.57518C8.50006 15.4705 8.4375 15.4094 8.43748 15.3331V13.7804C8.43721 13.6066 8.29682 13.4654 8.12303 13.465H6.7119ZM25.5478 15.2316C24.8521 15.2321 24.2875 15.7966 24.2871 16.4923C24.2871 17.1884 24.8519 17.7536 25.5478 17.754C26.2442 17.754 26.8095 17.1887 26.8096 16.4923C26.8091 15.7963 26.244 15.2316 25.5478 15.2316ZM31.667 15.2316C30.9711 15.2319 30.4067 15.7965 30.4062 16.4923C30.4063 17.1885 30.9709 17.7537 31.667 17.754C32.3633 17.7539 32.9287 17.1886 32.9287 16.4923C32.9283 15.7964 32.363 15.2317 31.667 15.2316ZM28.6064 12.5988C27.9106 12.5991 27.3461 13.1637 27.3457 13.8595C27.3458 14.5556 27.9104 15.1209 28.6064 15.1212C29.3027 15.1212 29.868 14.5558 29.8681 13.8595C29.8677 13.1635 29.3025 12.5988 28.6064 12.5988Z",
                                }),
                              ),
                              n.createElement(
                                "defs",
                                null,
                                n.createElement(
                                  "clipPath",
                                  { id: s },
                                  n.createElement("rect", {
                                    fill: "currentColor",
                                    width: "36",
                                    height: "36",
                                  }),
                                ),
                              ),
                            )
                          : "8bitdo_pro" == t
                            ? n.createElement(
                                "svg",
                                Object.assign(
                                  {
                                    viewBox: "0 0 36 36",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                  a,
                                ),
                                n.createElement(
                                  "g",
                                  { clipPath: l },
                                  n.createElement("path", {
                                    fill: "currentColor",
                                    d: "M27.7734 6.01249C28.9788 6.03744 30.1205 6.33782 31.1855 6.91483C31.3082 6.98141 31.3941 7.0615 31.4326 7.16971H31.0996V7.17362H31.4335C31.4524 7.22852 31.4594 7.29064 31.4521 7.3621C31.4407 7.47552 31.4843 7.54171 31.5859 7.60721C33.2663 8.68591 34.2958 10.2253 34.7167 12.1609C35.0706 13.7884 35.3234 15.4352 35.5361 17.0877C35.7469 18.7244 35.8609 20.3682 35.9335 22.0154C35.9671 22.7781 36.004 23.542 35.9999 24.3055C35.9944 25.303 35.8569 26.2831 35.4531 27.2088C34.9562 28.347 34.1485 29.1542 32.9384 29.5017C31.6727 29.8653 30.6028 29.5341 29.7509 28.5262C29.2715 27.9585 28.9464 27.3013 28.7177 26.6014C28.5088 25.9616 28.344 25.3077 28.1474 24.6639C27.6047 22.8866 26.5032 21.5482 24.9238 20.5887C24.9213 20.5871 24.9184 20.5862 24.916 20.5848L25.1503 20.2723L25.1718 20.2469L25.1728 20.2478L25.1904 20.2273C25.2862 20.2759 25.3768 20.3034 25.4365 20.323L25.7773 20.4256C25.8937 20.4577 26.012 20.487 26.124 20.5115L26.4384 20.573C27.1766 20.6984 27.9391 20.7019 28.6767 20.5828L28.6757 20.5818C31.2157 20.1944 33.4046 18.277 34.166 15.8308L34.165 15.8299C35.6102 11.3723 32.3235 6.65548 27.5917 6.65506V6.65409H8.4062V6.65506C5.37767 6.6497 2.70335 8.67037 1.81049 11.5506C1.00503 14.1045 1.74193 16.9571 3.68745 18.7879L3.87983 18.9617C4.91492 19.8713 6.23159 20.462 7.60053 20.6228H7.60151C8.67153 20.7459 9.79336 20.6306 10.8066 20.2273C10.8114 20.2327 10.8176 20.2378 10.8222 20.243L10.8886 20.1834L10.8222 20.2439L10.8271 20.2488L10.833 20.2557C10.8366 20.2598 10.842 20.2657 10.8476 20.2723C10.8594 20.2862 10.8744 20.3052 10.8915 20.326C10.9263 20.3681 10.9694 20.4197 11.0126 20.4724C11.0418 20.508 11.072 20.5445 11.0996 20.5779C11.0938 20.581 11.0879 20.5842 11.082 20.5877C9.89406 21.2973 8.98056 22.2657 8.32905 23.4842C8.03441 24.0355 7.85478 24.6298 7.69721 25.2303C7.50206 25.9733 7.29989 26.7134 6.96284 27.408C6.64138 28.0702 6.24258 28.6754 5.63471 29.1131C4.81567 29.7026 3.91714 29.77 2.98042 29.4724C1.77578 29.0895 0.984754 28.2619 0.511667 27.1101C0.206212 26.3666 0.0705524 25.5865 0.0243618 24.7879C-0.046774 23.562 0.0538517 22.3407 0.122018 21.1189C0.161122 20.4188 0.195563 19.7179 0.265573 19.0203C0.368012 18.003 0.474778 16.9846 0.627877 15.9744C0.821202 14.6994 1.02971 13.4249 1.29194 12.1629C1.69465 10.2234 2.74378 8.70172 4.4062 7.61405C4.51078 7.54554 4.57148 7.47897 4.55659 7.3494C4.53428 7.15242 4.62772 7.02617 4.79975 6.93046C5.59838 6.48682 6.45226 6.20819 7.35444 6.09159C7.80468 6.03349 8.26203 6.01478 8.71674 6.00956C9.68191 5.99838 10.6481 6.00686 11.6132 6.0076C11.6623 6.00761 11.7116 6.00867 11.7607 6.01053C12.0309 6.02025 12.1172 6.09801 12.1552 6.37186V6.37088H23.8154C23.8752 6.26485 23.9075 6.14249 23.9863 6.08768C24.0726 6.02812 24.2031 6.01093 24.3144 6.01053C25.4672 6.00532 26.621 5.98866 27.7734 6.01249ZM27.5878 7.23026L27.9902 7.24296C31.9701 7.49058 34.7257 11.4172 33.7294 15.2713L33.6171 15.656L33.6152 15.659C32.9396 17.8298 31.0302 19.5502 28.8037 19.9764L28.5878 20.0135H28.5849C27.9099 20.1225 27.211 20.1195 26.5351 20.0047L26.247 19.949C26.0499 19.9059 25.8293 19.8435 25.6337 19.7801C26.2276 19.1014 26.5334 18.1831 26.4589 17.283H26.4599C26.3463 15.5899 24.908 14.1684 23.207 14.1199H23.041C21.3039 14.1281 19.8318 15.5696 19.7148 17.283H19.7158C19.6765 17.7706 19.7462 18.2662 19.914 18.7244V18.7254L19.9277 18.7674L19.9287 18.7713L19.9423 18.8123L19.9521 18.8435L19.9648 18.8963L19.9716 18.9441H19.9726L19.9765 18.9793V18.9812L19.9804 19.0144L19.9824 19.0428V19.0603L19.9814 19.073L19.9804 19.0955V19.1033L19.9277 19.2693L20.2021 19.3562L20.2548 19.3728V19.4764H20.2568L20.3339 19.3982L20.4765 19.4432L20.5292 19.2781L20.5302 19.2693L20.5322 19.2703L20.5341 19.2644L20.5371 19.2488L20.538 19.2469L20.5507 19.1873L20.5527 19.1697V19.1668L20.5546 19.1473L20.5566 19.1189V19.1033L20.5576 19.0916L20.5585 19.0701V19.0428L20.5576 19.0242L20.5537 18.9627L20.5527 18.9471L20.5449 18.8807L20.5429 18.867L20.5312 18.7937L20.5263 18.7683L20.5068 18.6902H20.5078L20.5039 18.6775L20.4921 18.6385L20.4892 18.6307L20.4755 18.5896L20.4628 18.5506H20.4638L20.4589 18.5379L20.4091 18.3914C20.3029 18.0482 20.2617 17.6837 20.291 17.326L20.0136 17.3025L20.289 17.3221C20.3864 15.8966 21.6228 14.7 23.0488 14.6961L23.0546 14.6951C24.5067 14.66 25.787 15.8694 25.8847 17.3211V17.3269C25.9568 18.1839 25.6106 19.0661 24.9697 19.6355L25.1601 19.8504L24.9687 19.6346L24.9609 19.6433L24.9042 19.698L24.8515 19.7478L24.8437 19.7557L24.7949 19.8064L24.791 19.8113L24.748 19.8582L24.7451 19.8611L24.7128 19.8982L24.6962 19.9168L24.4111 20.2976L24.3974 20.3142L24.3857 20.3299L24.3935 20.3357L24.3544 20.3758L24.3525 20.3797L24.5966 20.5017L24.6025 20.5125L24.6415 20.5906C23.0992 21.3439 21.1855 20.8778 20.166 19.4949C20.1056 19.4133 20.0441 19.3832 19.9443 19.3836C18.6485 19.3869 17.3524 19.387 16.0566 19.3855C15.9769 19.3855 15.9142 19.394 15.8613 19.4685C14.9119 20.8074 12.9767 21.3814 11.3662 20.5935L11.4335 20.5242L11.6328 20.3162C11.6285 20.3115 11.6106 20.2916 11.5771 20.2517C11.5429 20.211 11.5006 20.1592 11.458 20.1072C11.3816 20.0142 11.2904 19.9026 11.2539 19.8621H11.2548C11.1885 19.787 11.1037 19.7023 11.0273 19.6346H11.0263C10.3864 19.0651 10.0392 18.1831 10.1113 17.3269L10.1123 17.324C10.2204 15.8833 11.4308 14.7105 12.872 14.6961L12.874 14.6951C14.3453 14.6707 15.5979 15.855 15.708 17.324V17.325C15.7357 17.6841 15.6956 18.0487 15.5898 18.3914L15.54 18.5379L15.538 18.5428C15.4742 18.7262 15.4041 18.9852 15.4599 19.2488L15.7421 19.1883L15.7695 19.1824L15.7441 19.1902L15.4687 19.2752L15.5195 19.4402L16.0703 19.2723L16.0214 19.114C16.0052 19.0154 16.0275 18.8903 16.08 18.7381C16.2308 18.3318 16.3013 17.8967 16.291 17.4646L16.2822 17.2801C16.15 15.5194 14.6532 14.0912 12.8662 14.1199H12.8642C11.1679 14.1378 9.75791 15.4668 9.55366 17.1199L9.53706 17.281C9.46215 18.1795 9.76702 19.0975 10.3583 19.7762C9.50533 20.0699 8.57082 20.1545 7.66694 20.0506H7.66596C6.49271 19.9124 5.35766 19.4282 4.4394 18.6814L4.25874 18.5281H4.25776C2.34413 16.8601 1.59604 14.1449 2.35932 11.7244L2.3603 11.7224L2.44135 11.4773C3.33297 8.9628 5.72246 7.22514 8.4062 7.23026H27.5878ZM12.8828 15.7625C12.0828 15.7627 11.4339 16.4123 11.4335 17.2127C11.4335 18.0134 12.0825 18.6627 12.8828 18.6629C13.6832 18.6629 14.332 18.0136 14.332 17.2127C14.3316 16.4121 13.6829 15.7625 12.8828 15.7625ZM23.1162 15.7625C22.3163 15.7629 21.6673 16.4123 21.6669 17.2127C21.6669 18.0133 22.316 18.6625 23.1162 18.6629C23.9166 18.6629 24.5654 18.0136 24.5654 17.2127C24.565 16.4121 23.9163 15.7625 23.1162 15.7625ZM27.8808 13.1892C27.1708 13.1893 26.5948 13.7659 26.5947 14.4764C26.5947 15.1868 27.1708 15.7624 27.8808 15.7625C28.5908 15.7623 29.1669 15.1868 29.1669 14.4764C29.1668 13.766 28.5908 13.1894 27.8808 13.1892ZM7.45405 9.20682C7.28806 9.20699 7.1525 9.34261 7.15229 9.50858V10.9764C7.15205 11.0454 7.09514 11.1031 7.02631 11.1033H5.55952C5.39342 11.1034 5.25786 11.239 5.25776 11.4051V12.7381C5.258 12.904 5.39351 13.0397 5.55952 13.0398H7.02631C7.09523 13.04 7.15219 13.0977 7.15229 13.1668V14.6346C7.15264 14.8004 7.28815 14.9362 7.45405 14.9363H8.78706C8.9528 14.936 9.08749 14.8003 9.08784 14.6346V13.1668C9.08794 13.0976 9.14581 13.0399 9.21479 13.0398H10.6816C10.8474 13.0395 10.9821 12.9039 10.9824 12.7381V11.4051C10.9823 11.2401 10.8491 11.1052 10.6845 11.1033L10.6796 11.1014H9.21284C9.14395 11.1013 9.08808 11.0454 9.08784 10.9764V9.50858C9.08763 9.34273 8.95288 9.20717 8.78706 9.20682H7.45405ZM25.0615 10.7459C24.3517 10.7462 23.7756 11.3228 23.7753 12.033C23.7754 12.7433 24.3516 13.3188 25.0615 13.3191C25.7716 13.3191 26.3475 12.7435 26.3476 12.033C26.3474 11.3226 25.7715 10.7459 25.0615 10.7459ZM30.6874 10.7459C29.9775 10.746 29.4016 11.3227 29.4013 12.033C29.4014 12.7435 29.9774 13.319 30.6874 13.3191C31.3976 13.3191 31.9735 12.7435 31.9736 12.033C31.9733 11.3226 31.3974 10.7459 30.6874 10.7459ZM27.8808 8.28788C27.1708 8.28797 26.5948 8.86454 26.5947 9.57499C26.5949 10.2853 27.1709 10.861 27.8808 10.8611C28.5907 10.8609 29.1667 10.2852 29.1669 9.57499C29.1668 8.8646 28.5908 8.28807 27.8808 8.28788Z",
                                  }),
                                ),
                                n.createElement(
                                  "defs",
                                  null,
                                  n.createElement(
                                    "clipPath",
                                    { id: s },
                                    n.createElement("rect", {
                                      fill: "currentColor",
                                      width: "36",
                                      height: "36",
                                    }),
                                  ),
                                ),
                              )
                            : "8bitdo_ultimate" == t
                              ? n.createElement(
                                  "svg",
                                  Object.assign(
                                    {
                                      viewBox: "0 0 36 36",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                    a,
                                  ),
                                  n.createElement(
                                    "g",
                                    { clipPath: l },
                                    n.createElement("path", {
                                      fill: "currentColor",
                                      d: "M25.3865 5.11825C26.755 4.90005 28.1094 4.97923 29.4236 5.39462C30.4285 5.71216 31.3614 6.19989 32.1726 6.89462C32.3276 7.02768 32.4119 7.17257 32.408 7.37704C32.4056 7.49827 32.4255 7.61963 32.4314 7.69345C32.5721 7.80286 32.6969 7.87505 32.7898 7.97567C33.7307 8.99583 34.2022 10.2489 34.5398 11.5626C34.9787 13.2716 35.2054 15.0185 35.4158 16.7657C35.5919 18.2301 35.751 19.6978 35.8796 21.1671C36.0269 22.851 36.0917 24.5378 35.7634 26.212C35.5761 27.1675 35.2593 28.0684 34.5789 28.7999C33.9668 29.458 33.1821 29.8296 32.3533 30.1241C31.7359 30.3438 31.5771 30.317 31.2107 29.7599C30.651 28.9095 30.1303 28.0326 29.5935 27.1671C28.9629 26.149 28.3487 25.1202 27.6961 24.1163C27.2547 23.4372 26.6937 22.8717 25.8972 22.6016C25.2789 22.3918 24.6367 22.3551 23.991 22.3556C19.8645 22.3575 15.7376 22.3624 11.6111 22.3614C10.178 22.3614 9.04967 22.9302 8.28492 24.1524C7.43808 25.5056 6.61368 26.8734 5.77515 28.2325C5.46691 28.7316 5.1469 29.2242 4.82887 29.7169C4.76726 29.8121 4.68876 29.8965 4.61695 29.9845C4.40805 30.2398 4.16884 30.3079 3.84058 30.1925C2.86063 29.848 1.9303 29.4329 1.25465 28.5997C0.678281 27.8888 0.403921 27.0492 0.233162 26.169C-0.034456 24.7888 -0.0493176 23.3911 0.0759357 22.0011C0.277018 19.7696 0.510949 17.5401 0.783944 15.3165C0.992378 13.6187 1.26467 11.9263 1.85328 10.3067C2.16201 9.45791 2.57326 8.66447 3.19508 7.99716C3.29517 7.88989 3.42374 7.80944 3.57496 7.68954C3.49832 7.16883 3.8053 6.87846 4.18922 6.60555C6.15956 5.20425 8.33914 4.74637 10.7107 5.12997C11.05 5.18473 11.0504 5.18936 11.4265 5.58016C11.5389 5.56107 11.6476 5.52694 11.7566 5.52645C14.8635 5.51177 17.97 5.49081 21.0769 5.49227C22.2174 5.49277 23.3574 5.5474 24.4978 5.57235C24.5492 5.57333 24.6169 5.53872 24.6502 5.49813C24.842 5.26328 25.09 5.16571 25.3865 5.11825ZM12.2996 14.6524C12.1182 14.6524 11.9696 14.8002 11.9695 14.9815V16.6192C11.9695 16.7005 11.9009 16.7683 11.8181 16.7686H10.1697C9.98837 16.7687 9.8397 16.9165 9.83961 17.0977V18.586C9.83976 18.7673 9.98841 18.914 10.1697 18.9141H11.8181C11.9008 18.9145 11.9693 18.9825 11.9695 19.0636V20.7022C11.9696 20.8836 12.1182 21.0304 12.2996 21.0304H13.7976C13.9786 21.0298 14.1276 20.8832 14.1277 20.7022V19.0636C14.1279 18.9823 14.1952 18.9142 14.2781 18.9141H15.9265C16.1076 18.9138 16.2564 18.7671 16.2566 18.586V17.0977C16.2565 16.9175 16.1094 16.7704 15.9295 16.7686L15.9246 16.7667H14.2761C14.193 16.7667 14.1277 16.7007 14.1277 16.6192V14.9815C14.1276 14.8005 13.9786 14.653 13.7976 14.6524H12.2996ZM22.9158 15.9591C21.8797 15.9591 21.0382 16.7996 21.0378 17.835C21.0379 18.8707 21.8795 19.711 22.9158 19.711C23.9516 19.7105 24.7927 18.8704 24.7927 17.835C24.7924 16.7999 23.9514 15.9596 22.9158 15.9591ZM28.3132 13.3809C27.6194 13.3809 27.0564 13.9433 27.0564 14.6368C27.0564 15.3303 27.6194 15.8927 28.3132 15.8927C29.0066 15.8922 29.5691 15.3299 29.5691 14.6368C29.5691 13.9436 29.0066 13.3814 28.3132 13.3809ZM7.63648 10.2296C6.60034 10.2296 5.75873 11.07 5.75855 12.1056C5.75883 13.141 6.6004 13.9815 7.63648 13.9815C8.67212 13.981 9.51316 13.1407 9.51344 12.1056C9.51326 11.0703 8.67218 10.2301 7.63648 10.2296ZM25.7566 10.8233C25.0622 10.8233 24.4999 11.3851 24.4998 12.0792C24.4998 12.7733 25.0621 13.335 25.7566 13.335C26.4507 13.3346 27.0124 12.773 27.0125 12.0792C27.0124 11.3854 26.4507 10.8238 25.7566 10.8233ZM30.8826 10.8233C30.1888 10.8233 29.6258 11.3858 29.6257 12.0792C29.6258 12.7726 30.1888 13.335 30.8826 13.335C31.5761 13.3347 32.1384 12.7724 32.1384 12.0792C32.1383 11.386 31.576 10.8237 30.8826 10.8233ZM28.3289 8.26376C27.635 8.26376 27.072 8.82614 27.072 9.51962C27.0722 10.2129 27.6352 10.7755 28.3289 10.7755C29.0221 10.775 29.5845 10.2126 29.5847 9.51962C29.5847 8.82643 29.0223 8.26424 28.3289 8.26376Z",
                                    }),
                                  ),
                                  n.createElement(
                                    "defs",
                                    null,
                                    n.createElement(
                                      "clipPath",
                                      { id: s },
                                      n.createElement("rect", {
                                        fill: "currentColor",
                                        width: "36",
                                        height: "36",
                                      }),
                                    ),
                                  ),
                                )
                              : n.createElement(L, Object.assign({}, a));
      }
      function z(e) {
        const { off: t } = e;
        (0, r.Tt)(e, ["off"]);
        return t
          ? n.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                e,
              ),
              n.createElement("path", {
                d: "M31.06 13L27.82 16.24C27.9314 16.8338 27.9916 17.436 28 18.04C28.001 19.0585 27.8424 20.0707 27.53 21.04H24L21 29.04L26 32.04C31.07 25.77 31.74 20.69 31.74 20.69C31.9114 19.8205 31.9985 18.9364 32 18.05C32.0008 16.3231 31.6821 14.611 31.06 13Z",
                fill: "currentColor",
              }),
              n.createElement("path", {
                d: "M33.06 6.76005L30.94 4.64005L27.65 7.93005C25.6668 6.04325 23.1741 4.77921 20.48 4.2943C17.786 3.80939 15.0089 4.12489 12.4923 5.20176C9.97574 6.27863 7.83004 8.06963 6.32066 10.3532C4.81129 12.6368 4.00447 15.3127 4 18.05C4.00415 18.94 4.09458 19.8275 4.27 20.7C4.8128 23.3864 5.8541 25.9472 7.34 28.25L3.94 31.64L6.06 33.76L33.06 6.76005ZM12.69 22.89L12 21.05H8.47C8.15762 20.0807 7.99903 19.0685 8 18.05C8.00457 16.104 8.57689 14.2015 9.6468 12.5759C10.7167 10.9503 12.2377 9.67215 14.0233 8.89825C15.8089 8.12435 17.7815 7.88828 19.6993 8.21899C21.6171 8.54969 23.3967 9.4328 24.82 10.76L12.69 22.89Z",
                fill: "currentColor",
              }),
            )
          : n.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                e,
              ),
              n.createElement("path", {
                d: "M32 18.05C32 14.337 30.525 10.7761 27.8995 8.15055C25.274 5.52504 21.713 4.05005 18 4.05005C14.287 4.05005 10.726 5.52504 8.1005 8.15055C5.475 10.7761 4 14.337 4 18.05C4.00415 18.94 4.09457 19.8275 4.27 20.7001C4.27 20.7001 4.93 25.78 10 32.05L15 29.05L12 21.05H8.47C8.15762 20.0807 7.99903 19.0685 8 18.05C8 15.3979 9.05357 12.8543 10.9289 10.979C12.8043 9.10362 15.3478 8.05005 18 8.05005C20.6522 8.05005 23.1957 9.10362 25.0711 10.979C26.9464 12.8543 28 15.3979 28 18.05C28.001 19.0685 27.8424 20.0807 27.53 21.05H24L21 29.05L26 32.05C31.07 25.78 31.74 20.7001 31.74 20.7001C31.9121 19.8272 31.9991 18.9397 32 18.05Z",
                fill: "currentColor",
              }),
            );
      }
      function q(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_VREnvironment",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          n.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 2A16 16 0 1 1 18 34A16 16 0 1 1 18 2ZM6 26.05L14.5 15.05L18 19.58L19.4 21.39L22 18.05L28.22 26.05ZM25 10.05A3 3 0 1 1 25 16.05A3 3 0 1 1 25 10.05Z",
          }),
        );
      }
    },
    1909: (e, t, o) => {
      "use strict";
      o.d(t, { p: () => m });
      var r = o(1635),
        n = o(6090),
        i = o(4074),
        a = o(1526),
        s = o(3986),
        l = o(776),
        c = o(7813),
        d = o(3676);
      const u = new l.wd("VRGamepadUIMessages");
      const p = new (class {
        get Steam() {
          return this.m_Steam_ClientMethods;
        }
        get SteamVR() {
          return this.m_SteamVR_Provider;
        }
        get Log() {
          return u;
        }
        constructor() {
          (this.m_SteamVR_Provider = new i.tC(this, s.f5)),
            (this.m_Steam_Client = new i.$k(this)),
            (this.m_Steam_ClientMethods = new s.oT(this.m_Steam_Client)),
            (this.m_mailbox = new n._nH()),
            (this.m_unNextVRGamepadUIMessageId =
              1e6 * Math.floor((Math.random() * i.Cg) / 1e6)),
            (0, c.makeObservable)(this);
        }
        Init() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            (0, c.autorun)(() =>
              this.m_Steam_Client.NotifyConnectionStateChanged(
                this.IsConnected(),
              ),
            ),
              yield this.m_mailbox.Init("vrgamepadui_messages"),
              this.m_mailbox.RegisterHandler("vrgamepadui_message", (e) => {
                const t = (0, i.D7)(e.header);
                t &&
                  ((0, i.hC)(t)
                    ? this.m_SteamVR_Provider.HandleVRGamepadUIMessageRequest(
                        t,
                        e.payload,
                      )
                    : (0, i.fb)(t)
                      ? this.m_Steam_Client.HandleVRGamepadUIMessageResponse(
                          t,
                          e.payload,
                        )
                      : u.Error(
                          "Received message from Steam that's neither a request nor response. Header:",
                          JSON.stringify(t),
                        ));
              });
          });
        }
        CreateVRGamepadUIMessageId() {
          return (
            (this.m_unNextVRGamepadUIMessageId =
              this.m_unNextVRGamepadUIMessageId % (i.Cg - 1)),
            this.m_unNextVRGamepadUIMessageId++
          );
        }
        SendVRGamepadUIMessage(e, t) {
          let o, r;
          try {
            o = a.DX.fromObject(e).serializeBase64String();
          } catch (e) {
            return i.Y7.HeaderSerializationFailure;
          }
          try {
            r = t.serializeBase64String();
          } catch (e) {
            return i.Y7.PayloadSerializationFailure;
          }
          try {
            this.m_mailbox
              .WaitForConnect()
              .then(() => {
                this.m_mailbox.SendMessage("web_steam_mailbox", {
                  type: "vrgamepadui_message",
                  header: o,
                  payload: r,
                });
              })
              .catch((e) => {
                console.error(
                  "Failed to send VRGamepadUIMessage via Mailbox:",
                  e,
                );
              });
          } catch (e) {
            return i.Y7.SendFailure;
          }
          return i.Y7.Success;
        }
        IsConnected() {
          return d.m.connected && this.m_mailbox.connected;
        }
      })();
      window.VRGamepadUIMessages = p;
      const m = p;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~2e670652e.js.map
