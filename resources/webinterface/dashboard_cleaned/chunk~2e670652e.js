var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [170],
  {
    chunkid: (module) => {
      module.exports = {
        recordingCircle: "svg_library_recordingCircle_2ovZQ",
        AnimationFadeOutIn: "svg_library_AnimationFadeOutIn_1lEwX",
        Spinner: "svg_library_Spinner_1q9tu",
        SpinnerSpokeFade: "svg_library_SpinnerSpokeFade_2E-wW",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.Disabled = 0)] = "Disabled"),
          (_[(_.WorldZeroY = 1)] = "WorldZeroY"),
          (_[(_.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
      })(_ || (_ = {}));
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constraint";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          return (
            (_.properties["projection-constraint"] =
              this.props.projection_constraint),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.RoomSetup = 1)] = "RoomSetup"),
          (_[(_.Locomotion = 2)] = "Locomotion"),
          (_[(_.QuickRecenter = 4)] = "QuickRecenter");
      })(_ || (_ = {}));
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constructglobals";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          return (
            (_.properties["allowed-action-sets"] = this.props[
              "allowed-action-sets"
            ].reduce((_, _) => _ | _, 0)),
            (_.properties["inhibit-bounds-rendering"] =
              this.props["inhibit-bounds-rendering"]),
            (_.properties["pause-notifications"] =
              this.props["pause-notifications"]),
            (_.properties["roomview-enable-override"] =
              this.props["roomview-enable-override"]),
            (_.properties["systemlayer-msaa-enable-override"] =
              this.props["systemlayer-msaa-enable-override"]),
            (_.properties["construct-alpha-override"] =
              this.props["construct-alpha-override"]),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      _._;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-floorheight-adjust";
        }
        buildNode(_, _) {
          var _, _, _, _, _, _, _, _, _, _, _, _;
          const _ = this.createSgNode(_);
          return (
            (_.properties["target-id"] = this.props.target_id),
            (_.properties["interaction-range"] = this.props.interaction_range),
            (_.properties["inactive-alpha-scale"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.inactive_alpha_scale),
            (_.properties["axis-radius"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.axis_radius),
            (_.properties["axis-color-hsv"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.axis_color_hsv),
            (_.properties["dot-radius"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.dot_radius),
            (_.properties["dot-color-hsv"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.dot_color_hsv),
            (_.properties["dot-inner-alpha"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.dot_inner_alpha),
            (_.properties["dot-outer-alpha"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.dot_outer_alpha),
            (_.properties["rings-radius"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.rings_radius),
            (_.properties["rings-color-hsv"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.rings_color_hsv),
            (_.properties["rings-hue-amplitude"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.rings_hue_amplitude),
            (_.properties["rings-hue-speed"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.rings_hue_speed),
            (_.properties["rings-half-width"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.rings_half_width),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-floordetection-geo";
        }
        buildNode(_, _) {
          var _;
          const _ = this.createSgNode(_);
          return (
            (_.properties["draw-range"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.draw_range),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.Circle = 1)] = "Circle"),
            (_[(_.Drawn = 2)] = "Drawn"),
            (_[(_.Full = 3)] = "Full");
        })(_ || (_ = {}));
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-draw-interaction";
        }
        buildNode(_, _) {
          var _;
          const _ = this.createSgNode(_);
          return (
            (_.properties["target-id"] = this.props.target_id),
            (_.properties["interaction-range"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.interaction_range),
            (_.properties["interaction-range-head-relative"] =
              this.props.interaction_range_head_relative),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-circle-perimeter-interaction";
        }
        buildNode(_, _) {
          var _;
          const _ = this.createSgNode(_);
          return (
            (_.properties["target-id"] = this.props.target_id),
            (_.properties["radius-range"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.radius_range),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-center";
        }
        buildNode(_, _) {
          var _;
          const _ = this.createSgNode(_);
          return (
            (_.properties["set-center"] = this.props.setCenter),
            (_.properties["set-forward"] = this.props.setForward),
            (_.properties["one-shot"] =
              null === (_ = this.props) || void 0 === _ ? void 0 : _.oneShot),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-outline";
        }
        buildNode(_, _) {
          var _, _, _, _, _, _, _, _, _, _, _, _, _, _;
          const _ = this.createSgNode(_);
          return (
            (_.properties["generic-geo"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["generic-geo"]),
            (_.properties["circle-generic-geo"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["circle-generic-geo"]),
            (_.properties["hue-amplitude"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["hue-amplitude"]),
            (_.properties["hue-speed"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["hue-speed"]),
            (_.properties["circle-hue-speed"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["circle-hue-speed"]),
            (_.properties["center-dot-radius"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["center-dot-radius"]),
            (_.properties["center-color-hsv"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["center-color-hsv"]),
            (_.properties["outline-color-hsv"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["outline-color-hsv"]),
            (_.properties["inactive-outline-color-hsv"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["inactive-outline-color-hsv"]),
            (_.properties["stroke-shadow-radius-delta"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["stroke-shadow-radius-delta"]),
            (_.properties["circle-shadow-radius-delta"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["circle-shadow-radius-delta"]),
            (_.properties["outline-shadow-alpha"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["outline-shadow-alpha"]),
            (_.properties["area-fill-color"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["area-fill-color"]),
            (_.properties["area-fill-alpha"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["area-fill-alpha"]),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-dots";
        }
        buildNode(_, _) {
          var _, _, _, _, _, _, _, _, _, _;
          const _ = this.createSgNode(_);
          return (
            (_.properties["tile-size"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["tile-size"]),
            (_.properties["max-radius"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["max-radius"]),
            (_.properties["min-radius"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["min-radius"]),
            (_.properties["max-radius-fade"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["max-radius-fade"]),
            (_.properties["min-radius-fade"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["min-radius-fade"]),
            (_.properties["dot-half-size"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["dot-half-size"]),
            (_.properties["center-randomization"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["center-randomization"]),
            (_.properties["color-hsv"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["color-hsv"]),
            (_.properties["clip-to-playspace"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["clip-to-playspace"]),
            (_.properties["follow-head"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["follow-head"]),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-area-drawing";
        }
        buildNode(_, _) {
          var _;
          const _ = this.createSgNode(_);
          return (
            (_.properties["brush-radius"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["brush-radius"]),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        let _ = _.getAttribute(_);
        if (_ && _.length > 0) {
          if ("undefined" == _) return;
          let _ = [];
          for (let _ of __webpack_require__.split(" "))
            0 != _.length && _.push(parseFloat(_));
          if (_.length > 0) return _;
        }
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        if (_ && _.length > 0) return parseFloat(_);
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        if (_ && _.length > 0) return parseInt(_);
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        if (_ && _.length > 0)
          return (
            "true" == _ ||
            (_.length > 0 && 0 != parseInt(_) && !isNaN(parseInt(_)))
          );
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        if (_ && _.length > 0) return _;
      }
      function _(_, _) {
        return _(_(_, _));
      }
      function _(_, _) {
        var _;
        let _ = {
          type: _,
          properties: {},
        };
        return (
          _._ &&
            (_.properties._ =
              null !== (_ = _(_._)) && void 0 !== _ ? _ : void 0),
          (_.properties.sgid = _(_, "sgid")),
          _
        );
      }
      function _() {
        return null === VRHTML || void 0 === VRHTML
          ? void 0
          : VRHTML.VROverlay.ThisOverlayHandle();
      }
      function _(_, _) {
        let [_, _] = (function (_, _) {
            let _ = _.buildNode;
            if (_) return __webpack_require__(_, _);
            let _ = Object.assign({}, _),
              _ = null;
            switch (_.nodeName.toUpperCase()) {
              case "VSG-TRANSFORM":
                (_ = _("transform", _)),
                  (_.properties.translation = _(_, "translation")),
                  (_.properties.rotation = _(_, "rotation")),
                  (_.properties.scale = _(_, "scale")),
                  (_.properties["curvature-pitch"] = _(_, "curvature-pitch")),
                  (_.properties["transform-path"] = _(_, "transform-path")),
                  (_.properties["projection-constraint"] = _(
                    _,
                    "projection-constraint",
                  )),
                  (_.properties["invert-parent-panel-pitch"] = _(
                    _,
                    "invert-parent-panel-pitch",
                  )),
                  (_.properties["ignore-parent-scale"] = _(
                    _,
                    "ignore-parent-scale",
                  )),
                  (_.properties["parent-path"] = _(_, "parent-path")),
                  (_.properties["parent-origin"] = _(_, "parent-origin")),
                  (_.properties["parent-id"] = _(_, "parent-id")),
                  (_.properties["frame-resize-scale-factor"] = _(
                    _,
                    "frame-resize-scale-factor",
                  ));
                break;
              case "VSG-TRACKING-STATE-VISIBILITY":
                (_ = _("trackingstatevisibility", _)),
                  (_.properties["visible-0dof"] = _(_, "visible-0dof")),
                  (_.properties["visible-3dof"] = _(_, "visible-3dof")),
                  (_.properties["visible-6dof"] = _(_, "visible-6dof"));
                break;
              case "VSG-ELASTIC-HEAD-TRANSFORM":
                (_ = _("elasticheadtransform", _)),
                  (_.properties["rotation-start-angle-threshold"] = _(
                    _,
                    "rotation-start-angle-threshold",
                  )),
                  (_.properties["rotation-stop-angle-threshold"] = _(
                    _,
                    "rotation-stop-angle-threshold",
                  )),
                  (_.properties["rotation-ease-in-time"] = _(
                    _,
                    "rotation-ease-in-time",
                  )),
                  (_.properties["rotation-ease-in-power"] = _(
                    _,
                    "rotation-ease-in-power",
                  )),
                  (_.properties["rotation-ease-out-angle-threshold"] = _(
                    _,
                    "rotation-ease-out-angle-threshold",
                  )),
                  (_.properties["rotation-ease-out-power"] = _(
                    _,
                    "rotation-ease-out-power",
                  )),
                  (_.properties["rotation-min-angular-velocity"] = _(
                    _,
                    "rotation-min-angular-velocity",
                  )),
                  (_.properties["rotation-max-angular-velocity"] = _(
                    _,
                    "rotation-max-angular-velocity",
                  )),
                  (_.properties["translation-start-distance-threshold"] = _(
                    _,
                    "translation-start-distance-threshold",
                  )),
                  (_.properties["translation-stop-distance-threshold"] = _(
                    _,
                    "translation-stop-distance-threshold",
                  )),
                  (_.properties["translation-ease-in-time"] = _(
                    _,
                    "translation-ease-in-time",
                  )),
                  (_.properties["translation-ease-in-power"] = _(
                    _,
                    "translation-ease-in-power",
                  )),
                  (_.properties["translation-ease-out-distance-threshold"] = _(
                    _,
                    "translation-ease-out-distance-threshold",
                  )),
                  (_.properties["translation-ease-out-power"] = _(
                    _,
                    "translation-ease-out-power",
                  )),
                  (_.properties["translation-velocity"] = _(
                    _,
                    "translation-velocity",
                  )),
                  (_.properties.enabled = _(_, "enabled")),
                  (_.properties["lock-to-horizon"] = _(_, "lock-to-horizon")),
                  (_.properties["translation-parent"] = _(
                    _,
                    "translation-parent",
                  )),
                  (_.properties["rotation-translation-change-together"] = _(
                    _,
                    "rotation-translation-change-together",
                  ));
                break;
              case "VSG-LINE":
                (_ = _("line", _)),
                  (_.properties["target-id"] = _(_, "target-id")),
                  (_.properties.thickness = _(_, "thickness")),
                  (_.properties["start-buffer"] = _(_, "start-buffer")),
                  (_.properties["end-buffer"] = _(_, "end-buffer"));
                break;
              case "VSG-LINE-CONSTRAINED-TRANSFORM":
                (_ = _("line-constrained-transform", _)),
                  (_.properties["target-id"] = _(_, "target-id")),
                  (_.properties["source-id"] = _(_, "source-id")),
                  (_.properties["source-distance"] = _(_, "source-distance")),
                  (_.properties["target-limit"] = _(_, "target-limit"));
                break;
              case "VSG-CALLOUT-TRANSFORM":
                (_ = _("callout-transform", _)),
                  (_.properties.offset = _(_, "offset"));
                break;
              case "VSG-HEAD-FACING-TRANSFORM":
                _ = _("head-facing-transform", _);
                break;
              case "VSG-PIN-TO-VIEW-TRANSFORM":
                (_ = _("pin-to-view-transform", _)),
                  (_.properties["offscreen-z-depth"] = _(
                    _,
                    "offscreen-z-depth",
                  )),
                  (_.properties["off-axis-limit"] = _(_, "off-axis-limit")),
                  (_.properties["transition-limit"] = _(_, "transition-limit"));
                break;
              case "VSG-GRAB-TRANSFORM":
                (_ = _("grab-transform", _)),
                  (_.properties["parent-path"] = _(_, "parent-path")),
                  (_.properties.translation = _(_, "translation")),
                  (_.properties.rotation = _(_, "rotation")),
                  (_.properties.scale = _(_, "scale")),
                  (_.properties["target-mode"] = _(_, "target-mode")),
                  (_.properties["stop-distance"] = _(_, "stop-distance")),
                  (_.properties["start-angle"] = _(_, "start-angle")),
                  (_.properties["start-quat-difference"] = _(
                    _,
                    "start-quat-difference",
                  )),
                  (_.properties["stop-quat-difference"] = _(
                    _,
                    "stop-quat-difference",
                  )),
                  (_.properties["scale-margin"] = _(_, "scale-margin")),
                  (_.properties["lerp-speed"] = _(_, "lerp-speed")),
                  (_.properties["min-distance"] = _(_, "min-distance")),
                  (_.properties["max-distance"] = _(_, "max-distance")),
                  (_.properties["one-to-one-radius"] = _(
                    _,
                    "one-to-one-radius",
                  )),
                  (_.properties["max-x-squared-contribution"] = _(
                    _,
                    "max-x-squared-contribution",
                  )),
                  (_.properties["acceleration-factor-x-coefficient"] = _(
                    _,
                    "acceleration-factor-x-coefficient",
                  )),
                  (_.properties["acceleration-factor-x-squared-coefficient"] =
                    _(_, "acceleration-factor-x-squared-coefficient")),
                  (_.properties["acceleration-factor-scale-term"] = _(
                    _,
                    "acceleration-factor-scale-term",
                  )),
                  (_.properties["stored-transform"] = _(_, "stored-transform")),
                  (_.properties["reset-on-recenter"] = _(
                    _,
                    "reset-on-recenter",
                  )),
                  (_.properties["reset-on-dashboard-relatch"] = _(
                    _,
                    "reset-on-dashboard-relatch",
                  )),
                  (_.properties["event-panel-sgid"] = _(_, "event-panel-sgid")),
                  (_.properties["scroll-speed"] = _(_, "scroll-speed"));
            }
            return [_, _];
          })(_, _),
          _ = [];
        for (let _ = 0; _ < _.children.length; _++) {
          let _ = _.children.item(_);
          if (_.children) {
            let _ = _(_, _);
            _ && (_ = _.concat(_));
          }
        }
        return _.bShouldAbort
          ? null
          : _
            ? (_.length > 0 && (_.children = _), [_])
            : _.length > 0
              ? 1 == _.length
                ? _
                : [
                    {
                      children: _,
                    },
                  ]
              : null;
      }
      let _,
        _,
        _,
        _,
        _,
        _,
        _ = [],
        _ = null,
        _ = _._.None,
        _ = !1,
        _ = !1;
      function _(_, _, _) {
        (_ = _),
          (_ = _),
          (_ = _),
          console.log("Setting owning overlay key to " + _);
      }
      function _(_, _) {
        return _ + "::" + _;
      }
      function _(_) {
        return _
          ? (function (_) {
              return _ && _.includes("::");
            })(_)
            ? _
            : _(_(), _)
          : null;
      }
      function _() {
        var _;
        return null !==
          (_ =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== _
          ? _
          : _;
      }
      function _(_) {
        _.push(_), _();
      }
      function _(_) {
        (_ = Math.max(null != _ ? _ : _, _)) != _ && ((_ = _), _());
      }
      function _(_) {
        _ != _ && ((_ = _), _());
      }
      function _() {
        null == _ &&
          (_ =
            null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.NextSGID()),
          _ ||
            (_ = window.setTimeout(
              () =>
                (0, _._)(this, void 0, void 0, function* () {
                  let _ = document.body;
                  _ && (_ = _);
                  const _ = _(
                    {
                      currentPanel: null,
                      bInsideReparentedPanel: !1,
                      bShouldAbort: !1,
                    },
                    _,
                  );
                  let _;
                  (_ = _
                    ? {
                        type: "systemui-root",
                        children: _,
                        properties: {
                          eDashboardRelatch: _,
                          bContinuousRelatch: _,
                          sceneColorCorrection: _,
                          sgid: _,
                        },
                      }
                    : {
                        type: "group",
                        children: _,
                        properties: {
                          sgid: _,
                        },
                      }),
                    _ ||
                      (console.log("Initializing sg_mailbox"),
                      (_ = new _._()),
                      yield _.Init("sg_mailbox", _));
                  let _ = {
                    type: "update_scene_graph",
                    owning_overlay_key: _(),
                    scene_graph: _,
                    retired_sgids: _,
                  };
                  _.SendMessage("vrcompositor_systemlayer", _),
                    (_ = null),
                    (_ = []),
                    (_ = _._.None);
                }),
              0,
            ));
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "tilefloor";
        }
        buildNode(_, _) {
          var _, _, _, _, _, _, _;
          const _ = this.createSgNode(_);
          if (
            ((_.properties["tile-size"] = this.props["tile-size"]),
            (_.properties["tile-gap"] = this.props["tile-gap"]),
            (_.properties["inner-radius"] = this.props["inner-radius"]),
            (_.properties["outer-radius"] = this.props["outer-radius"]),
            (_.properties["fade-distance"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["fade-distance"]),
            (_.properties["min-tile-scale-at-periphery"] =
              this.props["min-tile-scale-at-periphery"]),
            (_.properties.height = (0, _._)(this.props.height)),
            null != this.props.offset &&
              (_.properties.offset = [
                null === (_ = this.props.offset) || void 0 === _ ? void 0 : _._,
                null === (_ = this.props.offset) || void 0 === _ ? void 0 : _._,
              ]),
            "string" == typeof this.props.color)
          )
            _.properties.color = this.props.color;
          else if (this.props.color) {
            let _ = (0, _._)(this.props.color, {
              _: 0,
              _: 0,
              _: 0,
            });
            _.properties.color = [_._, _._, _._];
          }
          return (
            (_.properties["center-randomization"] =
              null == this ? void 0 : this.props["center-randomization"]),
            this.props["luma-randomization"] &&
              ((_.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (_.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"])),
            this.props["reflection-randomization"] &&
              ((_.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (_.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"])),
            (_.properties["normal-randomization-degrees"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["normal-randomization-degrees"]),
            this.props.chevron &&
              ((_.properties["chevron-luma-scale"] =
                this.props.chevron["luma-scale"]),
              (_.properties["chevron-reflection-scale"] =
                this.props.chevron["reflection-scale"])),
            (_.properties["auto-subdivide"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["auto-subdivide"]),
            (_.properties["pedestal-height"] = (0, _._)(
              this.props["pedestal-height"],
            )),
            (_.properties["pedestal-radius"] = (0, _._)(
              this.props["pedestal-radius"],
            )),
            (_.properties["floor-aa-shader"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["floor-aa-shader"]),
            (_.properties["stable-fade"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["stable-fade"]),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      _._;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ =
        ((_ = (_) => {
          throw new Error(_.errorStr);
        }),
        function (_) {
          return _.createElement(
            _,
            null,
            _.createElement(_, Object.assign({}, _)),
          );
        });
      var _;
      class _ extends _.Component {
        constructor(_) {
          super(_), (this.state = {}), (this.state.lastErrorKey = _.errorKey);
        }
        static InstallErrorReportingStore(_) {
          this.sm_ErrorReportingStore = _;
        }
        componentDidCatch(_, _) {
          const _ = _.sm_ErrorReportingStore;
          _
            ? __webpack_require__
                .ReportError(_, {
                  strComponentStack: _.componentStack || void 0,
                })
                .then(
                  (_) =>
                    _ &&
                    this.setState({
                      identifierHash: _.identifierHash,
                    }),
                )
            : console.warn(
                "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server",
              ),
            this.setState({
              error: {
                error: _,
                info: _,
              },
              lastErrorKey: this.props.errorKey,
            });
        }
        Reset() {
          this.setState({
            error: void 0,
          });
        }
        render() {
          const { children: _, fallback: _, errorKey: _ } = this.props,
            { error: _, identifierHash: _, lastErrorKey: _ } = this.state;
          return _ && _ == _
            ? void 0 !== _
              ? "function" == typeof _
                ? _(_.error)
                : _
              : _.sm_ErrorReportingStore &&
                  _.sm_ErrorReportingStore.reporting_enabled
                ? _.createElement(_, {
                    error: _,
                    identifierHash: _,
                    store: _.sm_ErrorReportingStore,
                    onRefresh: this.Reset,
                  })
                : _.createElement(_, {
                    error: _,
                    onDismiss: this.Reset,
                  })
            : _ || null;
        }
      }
      function _(_) {
        const { enabled: _ } = _,
          [_, _] = _.useState(_),
          [_, _] = _.useState(_._);
        _.useEffect(() => {
          const _ = setTimeout(() => {
            _ &&
              (_ > 1
                ? _(_ - 1)
                : (console.warn(
                    "Auto-reloading due to triggered ErrorBoundary...",
                  ),
                  window.location.reload()));
          }, 1e3);
          return () => clearTimeout(_);
        }, [_, _]);
        const _ = _.useCallback(() => {
          console.log("Auto-reload canceled."), _(!1);
        }, []);
        return (
          _.useEffect(() => {
            const _ = () => {
              _();
            };
            return (
              document.addEventListener("click", _),
              () => document.removeEventListener("click", _)
            );
          }, [_]),
          _
            ? _
              ? _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(
                    _,
                    null,
                    "Reloading UI in ",
                    _,
                    " seconds...",
                  ),
                  "   ",
                  _.createElement(
                    "span",
                    {
                      style: {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      onClick: _,
                    },
                    "Cancel",
                  ),
                  _.createElement("br", null),
                )
              : _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(_, null, "Auto-reload canceled."),
                  "   ",
                  _.createElement(
                    "span",
                    {
                      style: {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      onClick: () => window.location.reload(),
                    },
                    "Reload now",
                  ),
                  _.createElement("br", null),
                )
            : null
        );
      }
      (0, _._)([_._], _.prototype, "Reset", null);
      const _ = ({ error: _, onDismiss: _ }) => {
          let _ = _.error ? _.error.stack : "Stack missing",
            _ = _.info ? _.info.componentStack : "",
            _ = (_.error && _.error.message) || "unknown error";
          const _ = _.useContext(_.GMj);
          return _.createElement(
            _,
            null,
            _.createElement(_, null, 'Error: "', _, '"'),
            "   ",
            _.createElement(
              "span",
              {
                style: {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
                onClick: _,
              },
              "(x) Dismiss",
            ),
            _.createElement("br", null),
            _.createElement(_, {
              enabled: null == _,
            }),
            _.createElement(_, null, _),
            _.createElement(_, null, "The error occurred while rendering:", _),
          );
        },
        _ = (_) => {
          const { error: _, onRefresh: _, identifierHash: _, store: _ } = _,
            _ = (_.error && _.error.message) || "unknown error",
            _ = `${_.product}_${_.version}_${_}`,
            _ = _.useContext(_.GMj);
          return _.createElement(
            _,
            null,
            _.createElement(
              _,
              null,
              "Something went wrong while displaying this content. ",
              _.createElement(
                "span",
                {
                  style: {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                  onClick: _,
                },
                "Refresh",
              ),
            ),
            _.createElement(_, {
              enabled: null == _,
            }),
            _.createElement(_, null, "Error Reference: ", _),
            _.createElement(_, null, _),
          );
        };
      function _(_) {
        return _.useContext(_.GMj) || (0, _.R$f)() != _.OH$.Overlay
          ? _.createElement(_, Object.assign({}, _))
          : _.createElement(
              _.dLy,
              {
                parent_path: "/user/head",
                translation: {
                  _: -0.5,
                  _: -0.9,
                },
                rotation: {
                  _: -20,
                },
              },
              _.createElement(
                _.Zkm,
                {
                  debug_name: "vr_error_container",
                  meters_per_pixel: 75e-5,
                  origin: {
                    _: -0.5,
                    _: -1,
                  },
                  interactive: !0,
                  make_overlays_interactive_if_visible: !0,
                },
                _.createElement(_, Object.assign({}, _)),
              ),
            );
      }
      const _ = ({ children: _ }) =>
          _.createElement(
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
            _,
          ),
        _ = ({ children: _ }) =>
          _.createElement(
            "h1",
            {
              style: {
                fontSize: "20px",
                display: "inline-block",
                marginTop: "15px",
                userSelect: "auto",
              },
            },
            _,
          ),
        _ = ({ children: _ }) =>
          _.createElement(
            "pre",
            {
              style: {
                marginTop: "15px",
                opacity: 0.7,
                userSelect: "auto",
              },
            },
            _,
          );
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _,
        _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.PlayArea = 0)] = "PlayArea"),
          (_[(_.Dashboard = 1)] = "Dashboard");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.View = 1)] = "View"),
            (_[(_.Theater = 2)] = "Theater");
        })(_ || (_ = {}));
      class _ {
        get onForceDashboardRelatch() {
          return this.m_ForceDashboardRelatchCallbacks;
        }
        ForceRelatchDashboard(_) {
          this.m_ForceDashboardRelatchCallbacks.Dispatch(),
            this.m_mailbox.SendMessage(_.Jv8, {
              type: "relatch_dashboard",
              deadzone: _,
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
          if (_._.m_bIsVRLinkServer && _._.unifiedDashboardEnabled) {
            const _ =
              _._.unifiedDashboardState_Remote.dashboard_visibility_state;
            return null != _
              ? _
              : _._.unifiedDashboardState_Remote.dashboard_visible_DEPRECATED
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
          var _, _, _, _, _, _;
          return (
            !(!this.isVRGamepadUI || !_._.gamepadFocusAllowed) &&
            (null === (_ = this.activeFrame) || void 0 === _
              ? void 0
              : _.docking.dockLocation) === _.yWq.Dashboard &&
              !(
                !(null ===
                  (_ =
                    null === (_ = this.activeFrame) || void 0 === _
                      ? void 0
                      : _.activePage) || void 0 === _
                  ? void 0
                  : _.inputFocus.supportsGamepadFocus) ||
                (null ===
                  (_ =
                    null === (_ = this.activeFrame) || void 0 === _
                      ? void 0
                      : _.activePage) || void 0 === _
                  ? void 0
                  : _.isSystemPanel)
              ) &&
                !!(
                  this.isFullyVisible ||
                  this.isDashboardDiminished ||
                  this.shouldShowKeyboardForUndockedFrame_Hack
                ) &&
            (!this.isDashboardDiminished ||
              (null === (_ = this.activeFrame) || void 0 === _
                ? void 0
                : _.frameID) == this.m_unDiminishedStateFrameID)
          );
        }
        EnterDiminishedState() {
          this.canBeInDiminishedModeForActiveFrame &&
            ((this.m_eVisibilityState = 2),
            (this.m_unDiminishedStateFrameID = this.activeFrame.frameID),
            this.activeFrame.activePage.inputFocus.PushInputFocus());
        }
        get activeFrame() {
          return _._.isLocked
            ? _._.frames.find((_) => _.visibleWhenLocked)
            : _._.GetFrame(this.activeFrameID);
        }
        get activeFrameID() {
          return _._.useRemoteDashboardState
            ? _._.unifiedDashboardState_Remote.active_dashboard_frame_id
            : this.m_unActiveFrameID;
        }
        get hasActiveFrame() {
          return null != _._.GetFrame(this.activeFrameID);
        }
        _setActiveFrame(_, _) {
          _._.useRemoteDashboardState
            ? console.log(
                "_setActiveFrame called when remote dashboard is active. This should be a request",
                _,
                _,
              )
            : ((this.m_unActiveFrameID = _),
              (this.m_sLastActiveOverlaySummonKey = _));
        }
        _updateLastActiveOverlaySummonKey() {
          var _, _;
          this.m_sLastActiveOverlaySummonKey =
            null ===
              (_ =
                null === (_ = this.activeFrame) || void 0 === _
                  ? void 0
                  : _.activePage) || void 0 === _
              ? void 0
              : _.summonOverlayKey;
        }
        get activeLocalFrame() {
          return _._.GetLocalFrame(this.activeFrameID);
        }
        get mainSteamFrame() {
          return _._.GetFrame(this.m_unMainSteamFrameID);
        }
        SetMainSteamFrame(_) {
          this.m_unMainSteamFrameID = null == _ ? void 0 : _.frameID;
        }
        ClearTheaterHistoryForFrame(_) {
          this.m_rgTheaterFrameStack = this.m_rgTheaterFrameStack.filter(
            (_) => _.frameID != _,
          );
        }
        constructor() {
          (this.m_mailbox = new _._nH()),
            (this.m_eVisibilityState = 0),
            (this.m_unDiminishedStateFrameID = void 0),
            (this.m_ForceDashboardRelatchCallbacks = new _._()),
            (this.m_setSuppressingFade = new Set()),
            (this.m_bShowLegacyDashboardBar = !1),
            (this.m_bVS = !1),
            (this.m_eVSMode = _.None),
            (this.m_sVSOverlayKey = void 0),
            (this.m_eTheaterStereo = _.MQJ.Mono),
            (this.m_eIncognitoMode = _.rxR.Unavailable),
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
            (this.m_OnDashboardGrabStart = new _._()),
            (0, _.makeObservable)(this);
        }
        Init() {
          return (0, _._)(this, void 0, void 0, function* () {
            var _, _, _, _;
            yield this.LoadSessionDevData(),
              (0, _.autorun)(() => this.SaveSessionDevData()),
              (0, _.autorun)(this.updateBodyClasses),
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
                (_ =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForKeyboardInfoChangedEvents) ||
                void 0 === _ ||
                _.call(VRHTML, this.onKeyboardInfoChanged),
              null ===
                (_ =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForSystemBehaviorFlags) ||
                void 0 === _ ||
                _.call(VRHTML, this.onSystemBehaviorFlags),
              null ===
                (_ =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForStandingZeroPoseReset) ||
                void 0 === _ ||
                __webpack_require__.call(VRHTML, () => {
                  this.m_nStandingZeroPoseResetGeneration += 1;
                }),
              null ===
                (_ =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForHmdFrameRateChanged) ||
                void 0 === _ ||
                _.call(VRHTML, (_) => {
                  this.m_nHMDFrameRate = _;
                }),
              (0, _.reaction)(
                () => this.visibilityState,
                (_, _) => {
                  const _ = 0 != _,
                    _ = 0 != _,
                    _ = _._.m_bIsVRLinkServer && _._.unifiedDashboardEnabled;
                  _ == _ ||
                    _ ||
                    _._.Instance.playSound(
                      _ ? _._.DashboardOpen : _._.DashboardClose,
                    );
                },
              ),
              (0, _.reaction)(
                () => this.isFullyVisible,
                (_) => {
                  null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRClient.PostDashboardActivatedEvent(_);
                },
              ),
              (0, _.reaction)(
                () => this.showLoadingThrobberOrBootOverlay,
                (_, _) => {
                  _ && !_
                    ? ((0, _.EmM)(_.hqo.SmallDeadZone), (0, _.YsR)(!0))
                    : !_ && _ && (0, _.YsR)(!1);
                },
              ),
              this.SetVersionInfoPathProperties(),
              (0, _.autorun)(() => this.SetDashboardStatePathProperties()),
              this.m_mailbox.Init(_.M9N).then(() => {
                this.m_mailbox.RegisterHandler(
                  _._,
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
                    _._,
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
              _._.SteamVR.SetImplementation(
                "FocusDashboardBar",
                this.FocusDashboardBar,
              ),
              _._.SteamVR.SetImplementation(
                "CycleDashboardFocus",
                ({ target_frame_id: _ }) => this.CycleDashboardFocus(_),
              ),
              _._.OnFrameDestroyed.Register((_) => {
                var _, _, _;
                if (
                  (this.ClearTheaterHistoryForFrame(_.frameID),
                  _.docking.dockLocation == _.yWq.Theater)
                ) {
                  const _ = this.m_rgTheaterFrameStack.filter(
                    (_) =>
                      _.state == _._.Alive &&
                      _.docking.dockLocation == _.yWq.Dashboard,
                  );
                  _.length > 0
                    ? _[_.length - 1].docking.SetInTheater(!1)
                    : null ===
                        (_ =
                          null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.VRClient) ||
                      void 0 === _ ||
                      _.ShowDashboardOverlay({
                        overlayKey:
                          null ===
                            (_ =
                              null === (_ = this.mainSteamFrame) || void 0 === _
                                ? void 0
                                : _.activePage) || void 0 === _
                            ? void 0
                            : _.summonOverlayKey,
                        sReason: "theater frame destroyed",
                      });
                }
              }),
              (0, _.reaction)(
                () => _._.theaterFrame,
                (_, _) => {
                  _
                    ? (this.m_rgTheaterFrameStack = [
                        ...this.m_rgTheaterFrameStack.filter(
                          (_) => _ !== _ && _.state == _._.Alive,
                        ),
                        _,
                      ])
                    : _ ||
                      this.m_rgTheaterFrameStack[
                        this.m_rgTheaterFrameStack.length - 1
                      ] !== _ ||
                      (this.m_rgTheaterFrameStack =
                        this.m_rgTheaterFrameStack.filter(
                          (_) => _ !== _ && _.state == _._.Alive,
                        ));
                },
                {
                  fireImmediately: !0,
                },
              ),
              (0, _.reaction)(
                () =>
                  this.isDashboardDiminished &&
                  !this.canBeInDiminishedModeForActiveFrame,
                (_) => {
                  _ && this.OnShown();
                },
              ),
              (0, _.reaction)(
                () =>
                  this.isDashboardDiminished ||
                  this.shouldShowKeyboardForUndockedFrame_Hack,
                (_) => {
                  _ || (this.m_unDiminishedStateFrameID = void 0);
                },
              );
            let _ = 0;
            (0, _.reaction)(
              () =>
                this.isFullyVisible &&
                _._.computedInputFocus.m_entryAtTopOfStack.m_eType !=
                  _.YVg.Panel,
              (_) => {
                window.clearTimeout(_),
                  _ &&
                    (_ = window.setTimeout(() => {
                      var _, _, _;
                      (null === (_ = this.activeFrame) || void 0 === _
                        ? void 0
                        : _.docking.dockLocation) == _.yWq.Dashboard
                        ? null ===
                            (_ =
                              null === (_ = this.activeFrame) || void 0 === _
                                ? void 0
                                : _.activePage) ||
                          void 0 === _ ||
                          _.inputFocus.PushInputFocus()
                        : this.FocusDashboardBar();
                    }, 500));
              },
              {
                fireImmediately: !0,
              },
            ),
              (0, _.reaction)(
                () => this.shouldShowKeyboardForUndockedFrame_Hack,
                (_) => {
                  _ && this.ForceRelatchDashboard();
                },
              );
          });
        }
        FocusDashboardBar() {
          var _;
          if (_._.m_bIsVRLinkServer && _._.unifiedDashboardEnabled)
            return void VRHTML.VRLink.SendFocusDashboardBarRequest();
          const _ =
            null === (_ = _._.dashboardBarPopup) || void 0 === _
              ? void 0
              : _.panel;
          _ && _.isFullyVisible && _._.PushInputFocus(_.getSGID());
        }
        GetDashboardFocusCycleStops(_) {
          var _, _;
          const _ = [],
            _ = _._.GetLocalFrame(null != _ ? _ : this.activeFrameID);
          (null == _ ? void 0 : _.frameMenuPopupRequest) &&
            _.panels.menuPanelSGID &&
            _.push({
              sLabel: (0, _._)("#Jump_To_Frame_Menu", _.title),
              bIsFocused: _.inputFocus.frameMenuHasFocus,
              Focus: _.inputFocus.FocusLeftFrameMenu,
            });
          const _ =
            null === (_ = _._.dashboardBarPopup) || void 0 === _
              ? void 0
              : _.panel;
          return (
            this.isFullyVisible &&
              _ &&
              _.push({
                sLabel: (0, _._)("#Jump_To_DashboardBar"),
                bIsFocused: this.isDashboardBarOrChildPopupFocused,
                Focus: this.FocusDashboardBar,
              }),
            (null == _ ? void 0 : _.shouldRenderFrameControls) &&
              _.panels.controlsPanelSGID &&
              _.push({
                sLabel: (0, _._)("#Jump_To_Frame_Controls", _.title),
                bIsFocused: _.inputFocus.frameControlsHaveFocus,
                Focus: _.inputFocus.FocusFrameControls,
              }),
            (null === (_ = null == _ ? void 0 : _.activePage) || void 0 === _
              ? void 0
              : _.mainPanelSGID) &&
              _.push({
                sLabel: (0, _._)("#Jump_To_Frame", _.title),
                bIsFocused: _.activePage.inputFocus.mainPanelHasFocus,
                Focus: _.inputFocus.FocusMainPanel,
              }),
            _
          );
        }
        get nextDashboardFocusCycleStop() {
          const _ = this.GetDashboardFocusCycleStops(void 0);
          if (_.length < 2) return;
          const _ = _.findIndex((_) => _.bIsFocused);
          return _[(_ + 1) % _.length];
        }
        get cycleDashboardFocusLabel() {
          return (0, _._)("#Cycle_View_Focus");
        }
        CycleDashboardFocus(_) {
          const _ = this.GetDashboardFocusCycleStops(_);
          if (_.length < 2) return;
          const _ = _.findIndex((_) => _.bIsFocused);
          _[(_ + 1) % _.length].Focus();
        }
        SetVersionInfoPathProperties() {
          var _, _;
          const _ = new _._();
          __webpack_require__.set_version(
            (null ===
              (_ =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.SteamVRVersion) || void 0 === _
              ? void 0
              : _.call(VRHTML)) + "",
          ),
            __webpack_require__.set_webpack_build_timestamp("chunkid");
          const _ =
            null ===
              (_ =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties) || void 0 === _
              ? void 0
              : _.GetStringProperty("/user/head", _.fD8.DriverVersion_String);
          _ && __webpack_require__.set_hmd_tracking_info(_),
            _._.SetProtoPathProperty(_);
        }
        SetDashboardStatePathProperties() {
          _._.SetProtoPathProperty(
            _._.fromObject({
              dashboard_bar_visible: this.isFullyVisible,
              dashboard_bar_or_child_popup_focused:
                this.isDashboardBarOrChildPopupFocused,
              vrlink_role: _._.m_bIsVRLinkServer
                ? 2
                : _._.m_bIsVRLinkClient
                  ? 1
                  : 0,
              vrlink_unified_dashboard: _._.unifiedDashboardEnabled,
              cycle_dashboard_focus_label: this.cycleDashboardFocusLabel,
            }),
          );
        }
        get isDashboardBarOrChildPopupFocused() {
          var _, _, _, _;
          if (_._.m_bIsVRLinkServer && _._.unifiedDashboardEnabled)
            return (
              null !==
                (_ =
                  _._.unifiedDashboardState_Remote
                    .dashboard_bar_or_child_popup_focused) &&
              void 0 !== _ &&
              _
            );
          if (
            null ===
              (_ =
                null === (_ = _._.dashboardBarPopup) || void 0 === _
                  ? void 0
                  : _.panel) || void 0 === _
              ? void 0
              : _.hasInputFocus
          )
            return !0;
          const _ = _._.requestsAndPanels.find(({ panel: _ }) =>
            null == _ ? void 0 : _.hasInputFocus,
          );
          return !!(0, _._)(
            null == _ ? void 0 : _.request,
            null === (_ = _._.dashboardBarPopup) || void 0 === _
              ? void 0
              : _.request,
          );
        }
        LoadSessionDevData() {
          return (0, _._)(this, void 0, void 0, function* () {
            var _, _, _, _;
            const _ = JSON.parse(
              null !== (_ = sessionStorage.getItem(_.k_strSessionStorageKey)) &&
                void 0 !== _
                ? _
                : "{}",
            );
            (this.m_bShowLegacyDashboardBar =
              null !== (_ = _.m_bShowLegacyBar) && void 0 !== _ && _),
              (this.m_fVRGamepadUI_MetersPerPixel =
                null !== (_ = _.m_fVRGamepadUI_MetersPerPixel) && void 0 !== _
                  ? _
                  : (0.167 / 120) * 1.1);
            for (const _ of null !== (_ = _.m_rgPooledPopups) && void 0 !== _
              ? _
              : [])
              null != _.dashboard_popup_id &&
                this.m_mapActivePooledPopupRequests.set(
                  _.dashboard_popup_id,
                  _,
                );
          });
        }
        SaveSessionDevData() {
          return (0, _._)(this, void 0, void 0, function* () {
            const _ = {
              m_bShowLegacyBar: this.m_bShowLegacyDashboardBar,
              m_rgPooledPopups: Array.from(
                this.m_mapActivePooledPopupRequests.values(),
              ),
              m_fVRGamepadUI_MetersPerPixel: this.m_fVRGamepadUI_MetersPerPixel,
            };
            sessionStorage.setItem(_.k_strSessionStorageKey, JSON.stringify(_));
          });
        }
        get showLoadingThrobberOrBootOverlay() {
          var _;
          return (
            null !== (_ = _._.settings.get(_._)) &&
            void 0 !== _ &&
            _ &&
            this.isVRGamepadUI &&
            !this.isVRGamepadUIReady &&
            !this.m_bShowLegacyDashboardBar &&
            "none" == this.bareSessionMode
          );
        }
        get eTheaterCurvature() {
          return _._.settings.get(_._);
        }
        ToggleTheaterCurvature() {
          const _ =
            this.eTheaterCurvature == _.Doe.Curved ? _.Doe.Flat : _.Doe.Curved;
          _._.SetSettingsValue(_._, _.toString());
        }
        onVrCmdToggleTheaterStereoRequested() {
          const _ =
            this.m_eTheaterStereo == _.MQJ.Mono ? _.MQJ.Parallel : _.MQJ.Mono;
          (this.m_eTheaterStereo = _),
            console.log("Theater stereoscopy set to", _.MQJ[_]);
        }
        onDisableTheaterMode(_) {
          console.log("onDisableTheaterMode"), this.HideTheaterOverlay();
        }
        onRequiredRoomSetup(_) {
          _._.startRequiredRoomSetupIfNeeded();
        }
        onGuidedTourRoomSetup(_) {
          _._.setRoomSetupStep(7);
        }
        onSetDashboardFadeSuppression(_) {
          _.suppress_dashboard_fade
            ? this.m_setSuppressingFade.add(_.for_id)
            : this.m_setSuppressingFade.delete(_.for_id);
          const _ = this.m_setSuppressingFade.size > 0;
          _ != _.m_bSuppressingFadeExternal &&
            (_.m_bSuppressingFadeExternal = _);
        }
        onVRLinkRoomSetup(_) {
          _.mode == _.$Zy.RecenterCountdown
            ? _._.setRoomSetupStep(1)
            : _.mode == _.$Zy.FloorAdjustExisting
              ? _._.setRoomSetupStep(2)
              : _.mode == _.$Zy.RoomSetupFloor || _.mode == _.$Zy.RoomSetupFull
                ? _._.setRoomSetupStep(7)
                : _.mode == _.$Zy.ClearRoomSetup
                  ? null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperoneSetup.ClearRoomSetup()
                  : console.error("Unknown onVRLinkRoomSetup mode ", _.mode);
        }
        HideTheaterOverlay(_ = _.yWq.Dashboard, _) {
          var _, _, _;
          if (
            !(null === (_ = _._.theaterFrame) || void 0 === _
              ? void 0
              : _.asLocalFrame)
          )
            return;
          const _ =
            null === (_ = _._.theaterFrame) || void 0 === _
              ? void 0
              : _.asLocalFrame;
          _.docking.SetDockLocation(_),
            _ &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRClient.ShowDashboardOverlay({
                  overlayKey:
                    null === (_ = _.activePage) || void 0 === _
                      ? void 0
                      : _.summonOverlayKey,
                  sReason: "DashboardStore_HideTheaterOverlay",
                }));
        }
        get allowCurvature() {
          var _;
          return (
            null ===
              (_ = _._.settings.get("/settings/dashboard/allowCurvature")) ||
            void 0 === _ ||
            _
          );
        }
        get isDarkMode() {
          return _._.isTheaterMode;
        }
        setIncognitoMode(_) {
          this.m_eIncognitoMode = _;
        }
        get showIncognitoModeAction() {
          return !1;
        }
        get DashboardBarTint() {
          return this.isDarkMode
            ? {
                _: 0.1,
                _: 0.1,
                _: 0.1,
              }
            : void 0;
        }
        get GrabHandleTint() {
          return this.isDarkMode
            ? {
                _: 0.3,
                _: 0.3,
                _: 0.3,
              }
            : void 0;
        }
        get WorldLightingGain() {
          return this.isDarkMode
            ? {
                _: 0.2,
                _: 0.2,
                _: 0.2,
              }
            : void 0;
        }
        get isGroupMode() {
          return !1;
        }
        get allowScreenSharing() {
          return !1;
        }
        get isVRGamepadUIReady() {
          var _;
          return (
            null !== (_ = _._.GetOverlayFlag(_._, 32768)) && void 0 !== _ && _
          );
        }
        get isVRGamepadUI() {
          return (
            !(!_._.settings.get(_._) || "none" != this.bareSessionMode) ||
            this.isVRGamepadUIReady ||
            this.hasVRGamepadUIDashboardBar
          );
        }
        get dashboardBarUsesPooledPopup() {
          return _._.HasCapability(18, _.fkw.MutualLocal);
        }
        get dashboardBarOverlayKey() {
          if (this.dashboardBarUsesPooledPopup) {
            const _ = _._.requests.find((_) => 1 == _.special_identifier);
            return null == _ ? void 0 : _.popup_overlay_key;
          }
          return "valve.steam.gamepadui.bar";
        }
        get hasVRGamepadUIDashboardBar() {
          var _;
          return _._.BOverlayExists(
            null !== (_ = this.dashboardBarOverlayKey) && void 0 !== _ ? _ : "",
          );
        }
        get currentDashboardPosition() {
          return this.isVRGamepadUI ? _.eod.VRGamepadUI : _._.settings.get(_._);
        }
        get currentTheaterScreenAlignment() {
          return _._.settings.get(_._);
        }
        get defaultTheaterScale() {
          var _;
          const _ =
            null !== (_ = _._.settings.get(_._)) && void 0 !== _ ? _ : 2.1;
          return Math.max(0.5, Math.min(20, _));
        }
        get defaultTheaterDistance() {
          var _;
          const _ =
            null !== (_ = _._.settings.get(_._)) && void 0 !== _ ? _ : 3;
          return Math.max(0.5, Math.min(10, _));
        }
        updateBodyClasses() {
          this.isVRGamepadUI
            ? window.document.body.classList.add("VRGamepadUI")
            : window.document.body.classList.remove("VRGamepadUI");
        }
        onTrackingRecordingChanged(_) {
          this.m_bTrackingRecording = _;
        }
        onSystemBehaviorFlags(_) {
          _ != this.m_nSystemBehaviorFlags && (this.m_nSystemBehaviorFlags = _);
        }
        onKeyboardInfoChanged(_) {
          (this.m_bKeyboardVisible = _.visible),
            (this.m_bKeyboardDockedInDashboard = _.dockedInDashboard),
            (this.m_sKeyboardOverlayKey = _.overlayKey),
            (this.m_nKeyboardFlags = _.keyboardFlags);
        }
        get shouldShowKeyboardForUndockedFrame_Hack() {
          if (!this.m_bKeyboardVisible || !this.m_bKeyboardDockedInDashboard)
            return !1;
          if (0 != this.visibilityState_IgnoringKeyboardHack) return !1;
          const _ = _._.GetFramesWithAssociatedSummonKeys(
            this.m_sKeyboardOverlayKey,
          )[0];
          return null != _ && _.docking.dockLocation != _.yWq.Dashboard;
        }
        get dashboardDistance() {
          if (this.m_dashboardUserDistance) return this.m_dashboardUserDistance;
          return {
            [_.eod.Near]: 0.925,
            [_.eod.Middle]: 1.05,
            [_.eod.Far]: 1.2,
            [_.eod.VRGamepadUI]: 1.15,
          }[_.currentDashboardPosition];
        }
        get curvatureDistance() {
          return this.dashboardDistance + 1.8;
        }
        get dashboardTranslation() {
          var _;
          let _ =
            0.01 *
            (null !==
              (_ = _._.settings.get(
                "/settings/dashboard/verticalOffsetCm_2",
              )) && void 0 !== _
              ? _
              : 0);
          _ += {
            [_.eod.Near]: -0.07,
            [_.eod.Middle]: -0.08,
            [_.eod.Far]: -0.09,
            [_.eod.VRGamepadUI]: -0.09,
          }[_.currentDashboardPosition];
          const _ = -this.dashboardDistance,
            _ = _.shouldShowKeyboardForUndockedFrame_Hack ? 0 : 0.25;
          return {
            channel: _.KIK.TheaterFast,
            from: [0, _, _],
            _: [0, _ - _, _],
            interp: _.$ab.SmootherStep,
          };
        }
        get dashboardScale() {
          var _, _;
          if (_._.m_bIsVRLinkServer && _._.unifiedDashboardEnabled)
            return null !==
              (_ = _._.unifiedDashboardState_Remote.dashboard_scale) &&
              void 0 !== _
              ? _
              : 0.369;
          if (this.m_dashboardUserScale) return this.m_dashboardUserScale;
          let _ = 1;
          const _ = _.currentDashboardPosition;
          return (
            (_ =
              _ == _.eod.Near
                ? 0.36
                : _ == _.eod.Middle
                  ? 0.41
                  : _ == _.eod.Far
                    ? 0.47
                    : 0.41),
            (_ *=
              null !==
                (_ =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetFloatProperty(
                        _.Gze,
                        _.fD8.DashboardScale_Float,
                      )) && void 0 !== _
                ? _
                : 1),
            _
          );
        }
        get sceneAppDimmingActive() {
          var _, _;
          if (
            _._.m_bIsVRLinkClient &&
            _._.m_bVRLinkStreamingActive &&
            _._.Instance.SceneAppIsVRLink
          )
            return !1;
          const _ = _._.Instance.SceneApplicationState !== _.HWH.None,
            _ =
              this.m_bSuppressingFadeExternal &&
              (null ===
                (_ =
                  null === (_ = this.activeFrame) || void 0 === _
                    ? void 0
                    : _.activePage) || void 0 === _
                ? void 0
                : _.summonOverlayKey) == _._,
            _ = _._.settings.get(
              "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
            ),
            _ = !_._.Instance.SceneAppIsHome || !_;
          return (
            (this.isFullyVisible || this.isDashboardDiminished) && _ && !_ && _
          );
        }
        onSetDashboardForceBoundsVisible(_) {
          _.force_bounds_visible
            ? this.m_rgForcingBoundsVisible.push({
                for_overlay_key: _.for_overlay_key,
                for_id: _.for_id,
              })
            : (this.m_rgForcingBoundsVisible =
                this.m_rgForcingBoundsVisible.filter(
                  (_) =>
                    _.for_overlay_key != _.for_overlay_key ||
                    _.for_id != _.for_id,
                ));
        }
        get shouldForceBoundsVisible() {
          var _, _;
          const _ =
            null ===
              (_ =
                null === (_ = this.activeFrame) || void 0 === _
                  ? void 0
                  : _.activePage) || void 0 === _
              ? void 0
              : _.summonOverlayKey;
          return (
            (this.isFullyVisible || this.isDashboardDiminished) &&
            this.m_rgForcingBoundsVisible.some((_) => _.for_overlay_key == _)
          );
        }
        get bareSessionMode() {
          return _._.HasFramesWithAssociatedSummonKeys(_._)
            ? "desktop"
            : _._.HasFramesWithAssociatedSummonKeys(_._)
              ? "recovery"
              : "none";
        }
      }
      function _() {
        return (0, _.useObserver)(() => _.isVRGamepadUI);
      }
      function _() {
        return (0, _.useObserver)(() => _.bareSessionMode);
      }
      (_.k_strSessionStorageKey = "DashboardStoreSessionStorage"),
        (0, _._)([_.observable], _.prototype, "m_eVisibilityState", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_unDiminishedStateFrameID",
          void 0,
        ),
        (0, _._)([_.computed], _.prototype, "isFullyVisible", null),
        (0, _._)([_.computed], _.prototype, "isDashboardDiminished", null),
        (0, _._)([_.computed], _.prototype, "visibilityState", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "visibilityState_IgnoringKeyboardHack",
          null,
        ),
        (0, _._)([_.action], _.prototype, "OnShown", null),
        (0, _._)([_.action], _.prototype, "OnHidden", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "canBeInDiminishedModeForActiveFrame",
          null,
        ),
        (0, _._)([_.action], _.prototype, "EnterDiminishedState", null),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_bShowLegacyDashboardBar",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_bVS", void 0),
        (0, _._)([_.observable], _.prototype, "m_eVSMode", void 0),
        (0, _._)([_.observable], _.prototype, "m_sVSOverlayKey", void 0),
        (0, _._)([_.observable], _.prototype, "m_eTheaterStereo", void 0),
        (0, _._)([_.observable], _.prototype, "m_eIncognitoMode", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_mapActivePooledPopupRequests",
          void 0,
        ),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_fVRGamepadUI_MetersPerPixel",
          void 0,
        ),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_dashboardUserDistance",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_dashboardUserScale", void 0),
        (0, _._)([_.observable], _.prototype, "m_unActiveFrameID", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_sLastActiveOverlaySummonKey",
          void 0,
        ),
        (0, _._)([_.computed], _.prototype, "activeFrame", null),
        (0, _._)([_.computed], _.prototype, "activeFrameID", null),
        (0, _._)([_.computed], _.prototype, "hasActiveFrame", null),
        (0, _._)([_.action.bound], _.prototype, "_setActiveFrame", null),
        (0, _._)(
          [_.action.bound],
          _.prototype,
          "_updateLastActiveOverlaySummonKey",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "activeLocalFrame", null),
        (0, _._)([_.observable], _.prototype, "m_unMainSteamFrameID", void 0),
        (0, _._)([_.computed], _.prototype, "mainSteamFrame", null),
        (0, _._)([_.action], _.prototype, "SetMainSteamFrame", null),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_bSuppressingFadeExternal",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_bTrackingRecording", void 0),
        (0, _._)([_.observable], _.prototype, "m_bKeyboardVisible", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_bKeyboardDockedInDashboard",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_sKeyboardOverlayKey", void 0),
        (0, _._)([_.observable], _.prototype, "m_nKeyboardFlags", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_rgForcingBoundsVisible",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_sLastShownAppKey", void 0),
        (0, _._)([_.observable], _.prototype, "m_nSystemBehaviorFlags", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_nStandingZeroPoseResetGeneration",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_nHMDFrameRate", void 0),
        (0, _._)([_.action], _.prototype, "ClearTheaterHistoryForFrame", null),
        (0, _._)([_._], _.prototype, "FocusDashboardBar", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "nextDashboardFocusCycleStop",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "cycleDashboardFocusLabel", null),
        (0, _._)([_._], _.prototype, "CycleDashboardFocus", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "isDashboardBarOrChildPopupFocused",
          null,
        ),
        (0, _._)([_._], _.prototype, "LoadSessionDevData", null),
        (0, _._)([_._], _.prototype, "SaveSessionDevData", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "showLoadingThrobberOrBootOverlay",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "eTheaterCurvature", null),
        (0, _._)(
          [_.action.bound],
          _.prototype,
          "onVrCmdToggleTheaterStereoRequested",
          null,
        ),
        (0, _._)([_.action.bound], _.prototype, "onDisableTheaterMode", null),
        (0, _._)([_.action.bound], _.prototype, "onRequiredRoomSetup", null),
        (0, _._)([_.action.bound], _.prototype, "onGuidedTourRoomSetup", null),
        (0, _._)(
          [_.action.bound],
          _.prototype,
          "onSetDashboardFadeSuppression",
          null,
        ),
        (0, _._)([_.action.bound], _.prototype, "onVRLinkRoomSetup", null),
        (0, _._)([_.action], _.prototype, "HideTheaterOverlay", null),
        (0, _._)([_.computed], _.prototype, "allowCurvature", null),
        (0, _._)([_.computed], _.prototype, "isDarkMode", null),
        (0, _._)([_.action], _.prototype, "setIncognitoMode", null),
        (0, _._)([_.computed], _.prototype, "showIncognitoModeAction", null),
        (0, _._)([_.computed], _.prototype, "DashboardBarTint", null),
        (0, _._)([_.computed], _.prototype, "GrabHandleTint", null),
        (0, _._)([_.computed], _.prototype, "WorldLightingGain", null),
        (0, _._)([_.computed], _.prototype, "isGroupMode", null),
        (0, _._)([_.computed], _.prototype, "allowScreenSharing", null),
        (0, _._)([_.computed], _.prototype, "isVRGamepadUIReady", null),
        (0, _._)([_.computed], _.prototype, "isVRGamepadUI", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "dashboardBarUsesPooledPopup",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "dashboardBarOverlayKey", null),
        (0, _._)([_.computed], _.prototype, "hasVRGamepadUIDashboardBar", null),
        (0, _._)([_.computed], _.prototype, "currentDashboardPosition", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "currentTheaterScreenAlignment",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "defaultTheaterScale", null),
        (0, _._)([_.computed], _.prototype, "defaultTheaterDistance", null),
        (0, _._)([_._], _.prototype, "updateBodyClasses", null),
        (0, _._)(
          [_.action.bound],
          _.prototype,
          "onTrackingRecordingChanged",
          null,
        ),
        (0, _._)([_.action.bound], _.prototype, "onSystemBehaviorFlags", null),
        (0, _._)([_.action.bound], _.prototype, "onKeyboardInfoChanged", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "shouldShowKeyboardForUndockedFrame_Hack",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "dashboardDistance", null),
        (0, _._)([_.computed], _.prototype, "curvatureDistance", null),
        (0, _._)([_.computed], _.prototype, "dashboardTranslation", null),
        (0, _._)([_.computed], _.prototype, "dashboardScale", null),
        (0, _._)([_.computed], _.prototype, "sceneAppDimmingActive", null),
        (0, _._)(
          [_.action.bound],
          _.prototype,
          "onSetDashboardForceBoundsVisible",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "shouldForceBoundsVisible", null),
        (0, _._)([_.computed], _.prototype, "bareSessionMode", null);
      const _ = new _();
      window.DashboardStore = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 1.5;
      class _ extends _._ {
        constructor(_) {
          super(_),
            (this.componentName = "size"),
            (this.defaultComponentProps = {
              allowResizing: 2,
            }),
            (0, _.makeObservable)(this);
        }
        get scaleForBottomControls() {
          switch (this.frame.docking.visualDockLocation) {
            case _.yWq.Theater:
              return _._.defaultTheaterScale;
            case _.yWq.LeftHand:
            case _.yWq.RightHand:
              return 0.5;
            default:
              return 1;
          }
        }
        get scaleForActivePage() {
          switch (this.frame.docking.visualDockLocation) {
            case _.yWq.Theater:
              return _._.defaultTheaterScale;
            case _.yWq.LeftHand:
            case _.yWq.RightHand:
              return 0.5;
            default:
              return 1;
          }
        }
        get resizingDisplacementFactor() {
          return this.frame.docking.visualDockLocation === _.yWq.Theater
            ? 1.75
            : 0;
        }
        get ignoreResizeAmount() {
          var _, _, _;
          if (
            null !==
              (_ = _._.GetOverlayFlag(
                null ===
                  (_ =
                    null === (_ = null == this ? void 0 : this.frame) ||
                    void 0 === _
                      ? void 0
                      : _.activePage) || void 0 === _
                  ? void 0
                  : _.summonOverlayKey,
                67108864,
              )) &&
            void 0 !== _ &&
            _
          )
            return !0;
          switch (this.componentProps.allowResizing) {
            case 0:
              return !0;
            case 1:
              return this.frame.docking.visualDockLocation == _.yWq.Dashboard;
            case 2:
              return !1;
          }
        }
        get mainPanelHeightOverride() {
          return this.frame.docking.visualDockLocation == _.yWq.Theater
            ? 2
            : null != this.componentProps.forcedUniformDashboardHeight
              ? this.componentProps.forcedUniformDashboardHeight
              : void 0;
        }
        get showResizeHandle() {
          var _, _, _;
          if (
            null !==
              (_ = _._.GetOverlayFlag(
                null ===
                  (_ =
                    null === (_ = null == this ? void 0 : this.frame) ||
                    void 0 === _
                      ? void 0
                      : _.activePage) || void 0 === _
                  ? void 0
                  : _.summonOverlayKey,
                67108864,
              )) &&
            void 0 !== _ &&
            _
          )
            return !1;
          switch (this.componentProps.allowResizing) {
            case 0:
              return !1;
            case 1:
              return this.frame.docking.visualDockLocation != _.yWq.Dashboard;
            case 2:
              return !0;
          }
        }
      }
      (0, _._)([_.computed], _.prototype, "scaleForBottomControls", null),
        (0, _._)([_.computed], _.prototype, "scaleForActivePage", null),
        (0, _._)([_.computed], _.prototype, "resizingDisplacementFactor", null),
        (0, _._)([_.computed], _.prototype, "ignoreResizeAmount", null),
        (0, _._)([_.computed], _.prototype, "mainPanelHeightOverride", null),
        (0, _._)([_.computed], _.prototype, "showResizeHandle", null);
      class _ extends _._ {
        constructor(_) {
          super(_),
            (this.componentName = "size"),
            (this.defaultComponentProps = {}),
            (this.m_lastPanelContentSize = void 0),
            (this.m_lastPanelMeasurement = void 0),
            (0, _.makeObservable)(this);
        }
        Init() {
          let _;
          this.OnDestroyed.Register(
            (0, _.autorun)(() => {
              var _;
              if (_._.BOverlayExists(this.framePage.summonOverlayKey)) {
                let _;
                try {
                  _ = VRHTML.VROverlay.GetOverlayMouseScale(
                    null ===
                      (_ = _._.GetOverlayInfo(
                        this.framePage.summonOverlayKey,
                      )) || void 0 === _
                      ? void 0
                      : _.sHandle,
                  );
                } catch (_) {}
                _ &&
                  (this.m_lastPanelContentSize = {
                    unWidth: _._,
                    unHeight: _._,
                  });
              }
            }),
          ),
            this.OnDestroyed.Register(() =>
              null == _ ? void 0 : _.Unregister(),
            ),
            this.OnDestroyed.Register(
              (0, _.reaction)(
                () => this.framePage.mainPanelID,
                (_) => {
                  null == _ || _.Unregister(),
                    _ &&
                      (_ = _.uS7
                        .getInstance()
                        .SubscribeToPanelHeight(
                          this.framePage.mainPanelID,
                          (_) => (this.m_lastPanelMeasurement = _),
                        ));
                },
                {
                  fireImmediately: !0,
                },
              ),
            );
        }
        get latestMeasuredPanelWorldHeight() {
          var _, _;
          return null !==
            (_ =
              null === (_ = this.m_lastPanelMeasurement) || void 0 === _
                ? void 0
                : _.m_flPanelHeight) && void 0 !== _
            ? _
            : 0;
        }
        get latestMeasuredPanelLocalHeight() {
          const _ = this.mainPanelWorldScaleIgnoringResizing;
          return this.m_lastPanelMeasurement && 0 != _
            ? this.latestMeasuredPanelWorldHeight / _
            : 0;
        }
        get mainPanelWorldScaleIgnoringResizing() {
          return _._.dashboardScale * this.frame.size.scaleForActivePage;
        }
        get latestContentSize() {
          return this.m_lastPanelContentSize;
        }
        SetMainPanel(_) {
          if (!_)
            return {
              Unset: () => {},
            };
          _.lastDOMContentSize &&
            (this.m_lastPanelContentSize = {
              unWidth: _.lastDOMContentSize.clientWidth,
              unHeight: _.lastDOMContentSize.clientHeight,
            });
          return {
            Unset: _.RegisterForDOMContentSizeChangedCallback((_) => {
              _ &&
                (this.m_lastPanelContentSize = {
                  unWidth: _.clientWidth,
                  unHeight: _.clientHeight,
                });
            }).Unregister,
          };
        }
      }
      (0, _._)([_.observable], _.prototype, "m_lastPanelContentSize", void 0),
        (0, _._)([_.observable], _.prototype, "m_lastPanelMeasurement", void 0),
        (0, _._)(
          [_.computed],
          _.prototype,
          "latestMeasuredPanelWorldHeight",
          null,
        ),
        (0, _._)(
          [_.computed],
          _.prototype,
          "latestMeasuredPanelLocalHeight",
          null,
        ),
        (0, _._)(
          [_.computed],
          _.prototype,
          "mainPanelWorldScaleIgnoringResizing",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "latestContentSize", null),
        (0, _._)([_.action], _.prototype, "SetMainPanel", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new _._("Frame");
      var _;
      !(function (_) {
        (_[(_.Uninitialized = 0)] = "Uninitialized"),
          (_[(_.Pending = 1)] = "Pending"),
          (_[(_.Alive = 2)] = "Alive"),
          (_[(_.Destroyed = 3)] = "Destroyed");
      })(_ || (_ = {}));
      class _ {
        RegisterComponent(_) {
          this.m_setComponents.add(_);
        }
        get OnDestroyed() {
          return this.m_OnDestroyed;
        }
        constructor(_, _, _) {
          (this.props = void 0),
            (this.m_eState = _.Uninitialized),
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
            (this.Log = new _._("Frame", () => this.logPrefix)),
            (this.m_unNextPageID = 1),
            (this.m_setComponents = new Set()),
            (this.sharing = void 0),
            (this.curvature = new _._(this)),
            (this.docking = new _._(this)),
            (this.closing = new _._(this)),
            (this.size = new _._(this)),
            (this.inputFocus = new _._(this)),
            (this.panels = new _._(this)),
            (this.m_OnDestroyed = new _._()),
            (this.m_bPendingLoadAppInfo = !1),
            (this.m_bPendingInitialSyncWithSteam = !1),
            (this.m_unOverridePageID = void 0),
            (this.m_unFrameID = _),
            (this.tab = new _._(this, _)),
            (this.props = _),
            (0, _.makeObservable)(this);
        }
        get frameID() {
          return this.m_unFrameID;
        }
        get logPrefix() {
          return _(this, !1);
        }
        get state() {
          return this.m_eState;
        }
        get isPendingStateConcluded() {
          return (
            this.state == _.Pending &&
            (!_._.supportedFrameFeatures.steamHelpsRenderFrame ||
              !this.m_bPendingInitialSyncWithSteam) &&
            !this.m_bPendingLoadAppInfo
          );
        }
        SetPageOverride(_) {
          (this.m_unOverridePageID = _ instanceof _._ ? _.pageID : _),
            null != this.activePage && this.SwitchToPage(this.activePage);
        }
        get title() {
          var _, _;
          return null !==
            (_ =
              null === (_ = this.props) || void 0 === _ ? void 0 : _.title) &&
            void 0 !== _
            ? _
            : `Untitled Frame ${this.frameID}`;
        }
        get icon() {
          var _;
          if (
            (null === (_ = this.props) || void 0 === _ ? void 0 : _.icon) &&
            !Object.values(this.props.icon).every((_) => void 0 === _)
          )
            return this.props.icon;
        }
        get visibleWhenLocked() {
          var _;
          return (
            null !== (_ = this.props.visibleWhenSteamLocked) &&
            void 0 !== _ &&
            _
          );
        }
        get isStreamingClient() {
          var _;
          return (
            null !== (_ = this.props.isStreamingClient) && void 0 !== _ && _
          );
        }
        get isCurrentlyVisible() {
          if (this.state != _.Alive) return !1;
          if (_._.isLocked && !this.props.visibleWhenSteamLocked) return !1;
          if (_._.inRoomSetup) return !1;
          switch (this.docking.dockLocation) {
            case _.yWq.Dashboard:
              return (
                !(!_._.isFullyVisible && !_._.isDashboardDiminished) &&
                !!this.isActiveDashboardFrame &&
                (null == _._.frameIDPreviewingDashboardDockSnap ||
                  _._.frameIDPreviewingDashboardDockSnap == this.frameID)
              );
            case _.yWq.LeftHand:
            case _.yWq.RightHand:
            case _.yWq.Theater:
            case _.yWq.World:
              return !0;
          }
          return !1;
        }
        get shouldSuppressPanelBacksides() {
          return (
            this.docking.visualDockLocation == _.yWq.LeftHand ||
            this.docking.visualDockLocation == _.yWq.RightHand
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
          return (0, _._)(_._.activeFrame, this);
        }
        get isActiveDashboardFrameInDiminishedMode() {
          return this.isActiveDashboardFrame && _._.isDashboardDiminished;
        }
        get pageIDs() {
          return Array.from(this.m_mapPages.keys());
        }
        get pages() {
          return Array.from(this.m_mapPages.values());
        }
        get associatedSummonOverlayKeys() {
          return this.pages
            .map((_) => _.summonOverlayKey)
            .filter((_) => Boolean(_))
            .filter(Boolean);
        }
        get frameMenuPopupRequest() {
          if (null != this.m_unFrameMenuPopupID)
            return _._.GetRequestForID(this.m_unFrameMenuPopupID);
        }
        get shouldRenderFrameControls() {
          var _;
          return (
            !_._.isOOBE &&
            !_._.isLocked &&
            !(null === (_ = this.activePage) || void 0 === _
              ? void 0
              : _.shouldShowMinimalDecorations)
          );
        }
        get frameControlsVisibilityRequiresLaser() {
          var _;
          return (
            !!this.isActiveDashboardFrameInDiminishedMode ||
            (!(null === (_ = this.panels.controlsPanel) || void 0 === _
              ? void 0
              : _.hasGamepadFocus) &&
              !this.inputFocus.additionalOptionsHaveGamepadFocus)
          );
        }
        get frameMenuVisibilityRequiresLaser() {
          var _;
          return !(null === (_ = this.activePage) || void 0 === _
            ? void 0
            : _.isSystemPanel);
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
          let _ = this.activePage;
          for (const _ of this.pages)
            if (_.canSpatialize) {
              _ = _;
              break;
            }
          return _;
        }
        get canSpatialize() {
          var _;
          return (
            (null === (_ = this.pageForSpatialize) || void 0 === _
              ? void 0
              : _.canSpatialize) || !1
          );
        }
        get isSpatializeEnabled() {
          var _;
          return (
            (null === (_ = this.pageForSpatialize) || void 0 === _
              ? void 0
              : _.isSpatializeEnabled) || !1
          );
        }
        SetSpatializeEnabled(_) {
          var _;
          null === (_ = this.pageForSpatialize) ||
            void 0 === _ ||
            _.SetSpatializeEnabled(_);
        }
        get enablePositionalStereo() {
          return this.isSpatializeEnabled;
        }
        get allowInputCapture() {
          return (
            this.docking.dockLocation == _.yWq.Theater ||
            _._.settings.get("/settings/dashboard/inputCaptureEnabled")
          );
        }
        LoadAppManifestInfo() {
          return (0, _._)(this, void 0, void 0, function* () {
            const _ = this.associatedSummonOverlayKeys[0],
              _ = yield _._.GetAppInfo(_);
            (0, _.runInAction)(() => {
              (this.m_vrAppEntry = _),
                (this.docking.m_fLastTotalVisibleTimeInSeconds = (0, _._)(_)),
                (this.m_bPendingLoadAppInfo = !1);
            });
          });
        }
        OnPendingComplete() {
          var _, _;
          this.m_eState = _.Alive;
          "valve.steam.gamepadui.bootstrapper" ==
          (null === (_ = this.activePage) || void 0 === _
            ? void 0
            : _.summonOverlayKey)
            ? this.docking.SetDockLocation(_.yWq.Boot)
            : this.associatedSummonOverlayKeys.some((_) =>
                _.startsWith("gamescope."),
              ) &&
              _._.isFullyVisible &&
              (null === (_ = _._.Instance) ||
                void 0 === _ ||
                _.switchToFrameInternal(this, void 0, "OnPendingComplete"));
        }
        GetPageWithID(_) {
          return this.m_mapPages.get(_);
        }
        GetPageWithOverlaySummonKey(_) {
          if (_) return this.pages.find((_) => _.summonOverlayKey === _);
        }
        Init() {
          if (this.m_eState == _.Uninitialized) {
            this.OnDestroyed.Register(
              (0, _.reaction)(
                () => this.pages.filter((_) => _.state == _._.Destroyed),
                this.OnPagesDestroyed,
              ),
            ),
              (this.m_bPendingInitialSyncWithSteam =
                _._.supportedFrameFeatures.steamHelpsRenderFrame),
              (this.m_bPendingLoadAppInfo = !0),
              this.LoadAppManifestInfo(),
              (this.m_eState = _.Pending),
              this.OnDestroyed.Register(
                (0, _.when)(
                  () => this.isPendingStateConcluded,
                  this.OnPendingComplete,
                ),
              ),
              this.OnDestroyed.Register(
                (0, _.autorun)(() => {
                  this.Log.IsDebugEnabled() &&
                    this.Log.Debug(
                      "Proto updated:",
                      JSON.parse(JSON.stringify(this.protoForSteam)),
                    );
                }),
              ),
              this.OnDestroyed.Register(
                (0, _.reaction)(
                  () => this.docking.dockLocation,
                  () => this.SetControlAdditionalOptionsOpen(!1),
                ),
              ),
              this.OnDestroyed.Register(
                (0, _.reaction)(
                  () =>
                    this.isCurrentlyVisible && this.shouldRenderFrameControls,
                  (_) => {
                    _ || this.SetControlAdditionalOptionsOpen(!1);
                  },
                ),
              ),
              this.OnDestroyed.Register(
                (0, _.reaction)(
                  () =>
                    this.inputFocus.frameControlsHaveFocus ||
                    _._.BPanelHasFocus(this.panels.additionalOptionsPanelSGID),
                  (_) => {
                    _ || this.SetControlAdditionalOptionsOpen(!1);
                  },
                ),
              );
            for (const _ of this.m_setComponents) _.Init();
            this.Log.Info("Frame initialized.");
          }
        }
        OnPagesDestroyed(_) {
          _.forEach((_) => {
            this.m_mapPages.delete(_.pageID);
          }),
            this.m_unActivePageID &&
              (this.m_mapPages.has(this.m_unActivePageID) ||
                (this.pageIDs.length
                  ? (this.m_unActivePageID = this.pageIDs[0])
                  : (this.m_unActivePageID = void 0)));
        }
        DestroyFrame() {
          this.m_eState != _.Destroyed &&
            (this.Log.Info("Frame destroyed."),
            (this.m_eState = _.Destroyed),
            this.m_OnDestroyed.Dispatch(),
            this.m_OnDestroyed.ClearAllCallbacks());
        }
        CreatePage(_) {
          const _ = new _._(this, this.m_unNextPageID++, _);
          return (
            queueMicrotask(() =>
              (0, _.runInAction)(() => {
                this.m_mapPages.set(_.pageID, _),
                  this.m_unActivePageID || (this.m_unActivePageID = _.pageID);
              }),
            ),
            _
          );
        }
        SwitchToPage(_) {
          let _ = _ instanceof _._ ? _ : this.m_mapPages.get(_);
          null != this.m_unOverridePageID &&
            (_ = this.GetPageWithID(this.m_unOverridePageID)),
            _ && (this.m_unActivePageID = _.pageID);
        }
        CreateAction(..._) {
          const _ = _._.CreateAction(..._);
          return this.OnDestroyed.Register(() => _.Destroy()), _;
        }
        SetMenuItems(_, _) {
          (this.m_rgMenuItems_LeftFrameMenu = _),
            (this.m_rgMenuItems_TabHoverMenu = _);
        }
        SetControlsItems(_, _, _) {
          (this.m_rgControlsItems_BottomFrameControls = _),
            (this.m_rgControlsItems_TabHoverControls = _),
            (this.m_rgControlsItems_AdditionalOptions = _);
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
        SetControlAdditionalOptionsOpen(_) {
          this.m_bControlAdditionalOptionsOpen = _;
        }
        get controlAdditionalOptionsActionID() {
          return this.m_unControlAdditionalOptionsActionID;
        }
        SetControlAdditionalOptionsActionID(_) {
          this.m_unControlAdditionalOptionsActionID = _;
        }
        get protoForSteam() {
          var _, _, _, _, _, _;
          if (this.state == _.Uninitialized || this.state == _.Destroyed)
            return;
          const _ =
              _._.m_bIsVRLinkServer &&
              _._.m_eVRLinkDashboardMode == _.Fzk.SteamVRClientLegacyDual,
            _ = {
              frame_id: this.frameID,
              menu: {
                items_for_left_frame_menu:
                  null !== (_ = this.m_rgMenuItems_LeftFrameMenu) &&
                  void 0 !== _
                    ? _
                    : [],
                items_for_tab_hover_menu:
                  null !== (_ = this.m_rgMenuItems_TabHoverMenu) && void 0 !== _
                    ? _
                    : [],
              },
              controls: {
                items_for_bottom_frame_controls:
                  null !== (_ = this.m_rgControlsItems_BottomFrameControls) &&
                  void 0 !== _
                    ? _
                    : [],
                items_for_tab_hover_menu:
                  null !== (_ = this.m_rgControlsItems_TabHoverControls) &&
                  void 0 !== _
                    ? _
                    : [],
              },
              frame_actions: {
                focus_main_panel_action: this.inputFocus.focusMainPanelActionID,
                focus_left_frame_menu_action:
                  this.inputFocus.focusLeftFrameMenuActionID,
              },
              is_vrlink_remote: _,
              is_streaming_client: this.isStreamingClient,
              steamui_page_overlay_keys:
                this.associatedSummonOverlayKeys.filter((_) =>
                  _.startsWith("valve.steam."),
                ),
            };
          _._.supportedFrameFeatures.steamHelpsRenderFrame &&
            !_._.supportedFrameFeatures.steamRendersFrameControls &&
            (function (_) {
              var _;
              if (
                null ==
                (null === (_ = null == _ ? void 0 : _.controls) || void 0 === _
                  ? void 0
                  : _.items_for_tab_hover_menu)
              )
                return;
              const _ = _.controls.items_for_tab_hover_menu.map((_) => {
                let _;
                switch (_.type) {
                  case 2:
                    _ = 3;
                    break;
                  case 1:
                    _ = 1;
                }
                return {
                  action_id: _.action_id,
                  type: _,
                };
              });
              _.controls.items_for_tab_hover_menu.length > 0 &&
                (_.menu.items_for_tab_hover_menu = [
                  ..._.menu.items_for_tab_hover_menu,
                  {
                    type: 2,
                  },
                  ..._,
                ]);
            })(_),
            this.shouldRenderFrameControls ||
              (_.controls.items_for_bottom_frame_controls = void 0),
            (_._.isOOBE || _._.isLocked) &&
              (_.menu.items_for_left_frame_menu = void 0);
          const _ = new Set();
          return (
            null === (_ = _.menu.items_for_left_frame_menu) ||
              void 0 === _ ||
              _.forEach((_) => _.add(_.action_id)),
            null === (_ = _.menu.items_for_tab_hover_menu) ||
              void 0 === _ ||
              _.forEach((_) => _.add(_.action_id)),
            (_.action_definitions = [..._]
              .map((_) => {
                var _;
                return null === (_ = _._.GetAction(_)) || void 0 === _
                  ? void 0
                  : _.protoForSteam;
              })
              .filter(Boolean)),
            _._.HasCapability(20, _.fkw.MutualLocal) || (0, _._)(_.menu),
            (_.dock_location = (function (_) {
              switch (_) {
                case _.yWq.Dashboard:
                  return 1;
                case _.yWq.LeftHand:
                  return 2;
                case _.yWq.RightHand:
                  return 3;
                case _.yWq.World:
                  return 4;
                case _.yWq.Theater:
                  return 5;
                case _.yWq.Boot:
                  return 6;
              }
            })(this.docking.dockLocation)),
            (_.game_app_id = this.props.gameAppID),
            _
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
        OnFrameUpdateResultFromSteam(_) {
          if (this.m_eState == _.Destroyed) return;
          const { frame_id: _ } = _,
            _ = (0, _._)(_, ["frame_id"]);
          this.Log.Info("Update result:", JSON.stringify(_)),
            (this.m_unFrameMenuPopupID = _.frame_menu_dashboard_popup_id),
            (this.m_bPendingInitialSyncWithSteam = !1);
        }
      }
      function _(_, _) {
        let _ = _.title;
        return (
          _.IsDebugEnabled() ||
            _._.includes(_) ||
            (_ = (0, _.hash)(_).substring(0, _._)),
          _.length > _._ &&
            (_ = __webpack_require__.substring(0, _._ - 3) + "..."),
          `${_.frameID}${_ ? " (remote)" : ""} "${_}"`
        );
      }
      (0, _._)([_.observable.ref], _.prototype, "props", void 0),
        (0, _._)([_.observable], _.prototype, "m_eState", void 0),
        (0, _._)([_.observable], _.prototype, "m_mapPages", void 0),
        (0, _._)([_.observable], _.prototype, "m_unActivePageID", void 0),
        (0, _._)([_.observable], _.prototype, "m_unFrameMenuPopupID", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_rgMenuItems_LeftFrameMenu",
          void 0,
        ),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_rgMenuItems_TabHoverMenu",
          void 0,
        ),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_rgControlsItems_BottomFrameControls",
          void 0,
        ),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_rgControlsItems_TabHoverControls",
          void 0,
        ),
        (0, _._)(
          [_.observable.struct],
          _.prototype,
          "m_rgControlsItems_AdditionalOptions",
          void 0,
        ),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_bControlAdditionalOptionsOpen",
          void 0,
        ),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_unControlAdditionalOptionsActionID",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_vrAppEntry", void 0),
        (0, _._)([_.computed], _.prototype, "logPrefix", null),
        (0, _._)([_.computed], _.prototype, "state", null),
        (0, _._)([_.observable], _.prototype, "m_bPendingLoadAppInfo", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_bPendingInitialSyncWithSteam",
          void 0,
        ),
        (0, _._)([_.computed], _.prototype, "isPendingStateConcluded", null),
        (0, _._)([_.computed], _.prototype, "title", null),
        (0, _._)([_.computed.struct], _.prototype, "icon", null),
        (0, _._)([_.computed], _.prototype, "visibleWhenLocked", null),
        (0, _._)([_.computed], _.prototype, "isStreamingClient", null),
        (0, _._)([_.computed], _.prototype, "isCurrentlyVisible", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "shouldSuppressPanelBacksides",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "activePageID", null),
        (0, _._)([_.computed], _.prototype, "activePage", null),
        (0, _._)([_.computed], _.prototype, "isActiveDashboardFrame", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "isActiveDashboardFrameInDiminishedMode",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "pageIDs", null),
        (0, _._)([_.computed], _.prototype, "pages", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "associatedSummonOverlayKeys",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "frameMenuPopupRequest", null),
        (0, _._)([_.computed], _.prototype, "shouldRenderFrameControls", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "frameControlsVisibilityRequiresLaser",
          null,
        ),
        (0, _._)(
          [_.computed],
          _.prototype,
          "frameMenuVisibilityRequiresLaser",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "frameControlsTransformID", null),
        (0, _._)([_.computed], _.prototype, "pageForSpatialize", null),
        (0, _._)([_.computed], _.prototype, "canSpatialize", null),
        (0, _._)([_.computed], _.prototype, "isSpatializeEnabled", null),
        (0, _._)([_.action.bound], _.prototype, "SetSpatializeEnabled", null),
        (0, _._)([_.computed], _.prototype, "enablePositionalStereo", null),
        (0, _._)([_.computed], _.prototype, "allowInputCapture", null),
        (0, _._)([_.action.bound], _.prototype, "OnPendingComplete", null),
        (0, _._)([_.action], _.prototype, "Init", null),
        (0, _._)([_.action.bound], _.prototype, "OnPagesDestroyed", null),
        (0, _._)([_.action], _.prototype, "DestroyFrame", null),
        (0, _._)([_.action], _.prototype, "SwitchToPage", null),
        (0, _._)([_.action], _.prototype, "SetMenuItems", null),
        (0, _._)([_.action], _.prototype, "SetControlsItems", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "controlAdditionalOptionsItems",
          null,
        ),
        (0, _._)(
          [_.computed],
          _.prototype,
          "isControlAdditionalOptionsOpen",
          null,
        ),
        (0, _._)(
          [_.action],
          _.prototype,
          "SetControlAdditionalOptionsOpen",
          null,
        ),
        (0, _._)(
          [_.computed],
          _.prototype,
          "controlAdditionalOptionsActionID",
          null,
        ),
        (0, _._)(
          [_.action],
          _.prototype,
          "SetControlAdditionalOptionsActionID",
          null,
        ),
        (0, _._)([_.computed.struct], _.prototype, "protoForSteam", null),
        (0, _._)([_.computed.struct], _.prototype, "protoForVRLink", null),
        (0, _._)(
          [_.action.bound],
          _.prototype,
          "OnFrameUpdateResultFromSteam",
          null,
        );
      const _ = (0, _._)(
        _.forwardRef(function (_, _) {
          var _, _, _, _, _, _;
          const { children: _ } = _,
            _ = _.useMemo(() => _._.CreateCFrame(_), []);
          _.useLayoutEffect(() =>
            (0, _.runInAction)(() => {
              _.props = _;
            }),
          ),
            (0, _._)(_, _),
            _.useEffect(() => (_.Init(), () => _.DestroyFrame()), [_]);
          let _ = _._.GetDockLocationTransformID(
            _.docking.dockLocation,
            _.frameID,
          );
          return (
            _ ||
              _.docking.dockLocation != _.yWq.World ||
              (_ = _._.GetDockLocationTransformID(_.yWq.Dashboard, _.frameID)),
            _.createElement(
              _._.Provider,
              {
                value: {
                  frame: _,
                  page: void 0,
                },
              },
              _.createElement(
                _._,
                {
                  frame_id: _.frameID,
                  dock_location: _.docking.dockLocation,
                  dock_location_preview: _.docking.previewDockLocation,
                  resize_displacement: _.size.resizingDisplacementFactor,
                  resize_scale_min: _._,
                  resize_scale_max: _._,
                  ignore_resize_amount: _.size.ignoreResizeAmount,
                  allow_input_capture: _.allowInputCapture,
                  override_pre_resize_main_panel_height:
                    _.size.mainPanelHeightOverride,
                  suppress_panel_backsides: _.shouldSuppressPanelBacksides,
                  main_panel_input_focus_override:
                    null ===
                      (_ =
                        null === (_ = _.activePage) || void 0 === _
                          ? void 0
                          : _.inputFocus) || void 0 === _
                      ? void 0
                      : _.inputFocusParams,
                  main_panel_origin: _.docking.mainPanelOrigin,
                  main_panel_focus_outline:
                    null === (_ = _.activePage) || void 0 === _
                      ? void 0
                      : _.inputFocus.focusOutline,
                },
                _,
                _.isCurrentlyVisible &&
                  _ &&
                  _.createElement(
                    _.dLy,
                    {
                      parent_id: _,
                      ignore_parent_scale: !0,
                      scale: _._.dashboardScale,
                    },
                    _.createElement(
                      _.dLy,
                      {
                        scale: _.size.scaleForActivePage,
                      },
                      _.createElement(
                        _.dLy,
                        {
                          translation:
                            _.docking.panelTranslationForResizeOrigin,
                        },
                        _.createElement(_.HWh, {
                          mountedId:
                            null === (_ = _.activePage) || void 0 === _
                              ? void 0
                              : _.mountableID,
                        }),
                      ),
                    ),
                    _.createElement(
                      _.dLy,
                      {
                        _: _.frameControlsTransformID,
                        parent_id:
                          null === (_ = _.activePage) || void 0 === _
                            ? void 0
                            : _.GetPanelAnchorID(_.OiK.BottomCenter),
                        scale:
                          _.size.scaleForBottomControls /
                          _.size.scaleForActivePage,
                        frame_resize_scale_factor:
                          _.docking.dockLocation == _.yWq.Theater ? 0.5 : 0,
                      },
                      _.createElement(_._, {
                        frame: _,
                      }),
                    ),
                    _.frameMenuPopupRequest &&
                      _.createElement(
                        _.dLy,
                        {
                          parent_id:
                            null === (_ = _.activePage) || void 0 === _
                              ? void 0
                              : _.GetPanelAnchorID(_.OiK.CenterLeft),
                        },
                        _.createElement(_._, {
                          popupRequest: _.frameMenuPopupRequest,
                          refPanel: _.panels.SetMenuPanel,
                          only_visible_with_laser:
                            _.frameMenuVisibilityRequiresLaser,
                        }),
                      ),
                    _.createElement(_._, null),
                    _.createElement(_._, null),
                    _.createElement(_._, null),
                    _.size.showResizeHandle && _.createElement(_._, null),
                  ),
              ),
            )
          );
        }),
      );
      function _(_, _, _) {
        const _ = _.useRef(void 0);
        _.current = _;
        const _ = _.useMemo(
          () =>
            null == _
              ? void 0
              : _.CreateAction(_, (..._) => {
                  var _;
                  return null === (_ = _.current) || void 0 === _
                    ? void 0
                    : _.call(_, ..._);
                }),
          [_],
        );
        return (
          _.useLayoutEffect(() => (null == _ ? void 0 : _.SetParams(_))),
          _.useEffect(() => () => (null == _ ? void 0 : _.Destroy()), [_]),
          _
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      const _ = _.createContext({
        frame: void 0,
        page: void 0,
      });
      function _() {
        return _.useContext(_);
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
        _ = __webpack_require__("chunkid");
      const _ = _.createContext({
        CreateControlsItemID: void 0,
        OnControlsItemRender: void 0,
        OnControlsItemMounted: void 0,
        OnControlsItemUnmounted: void 0,
      });
      function _(_) {
        const { frame: _ } = (0, _._)();
        if (!_)
          throw new Error(
            "<FrameControls> must be inside a <Frame> component.",
          );
        const _ = _.useRef(1),
          _ = _.useRef([]),
          _ = _.useRef([]),
          _ = _.useRef([]),
          _ = _.useMemo(() => new Map(), []),
          _ = _.useRef(!1),
          _ = _.useRef(!0),
          _ = _.useCallback(() => {
            const _ = _.current.map((_) => _.get(_)),
              _ = _.current.map((_) => _.get(_)),
              _ = _.current.map((_) => _.get(_));
            _.SetControlsItems(_, _, _);
          }, []);
        _.useEffect(() => () => _.SetControlsItems([], [], []), []),
          _.current &&
            ((_.current = !1),
            (_.current = !0),
            (_.current = []),
            (_.current = []),
            (_.current = []));
        const _ = (0, _._)();
        _.useEffect(() => {
          !_.current ||
            (0 == _.current.length &&
              0 == _.current.length &&
              0 == _.current.length) ||
            (_(), (_.current = !1));
        });
        const _ = {
          CreateControlsItemID: () => _.current++,
          OnControlsItemRender: (_, _, _) => {
            _.set(_, _);
            const _ = _.useRef(!1);
            _.current
              ? (_.bVisibleInBottomFrameControls && _.current.push(_),
                _.bVisibleInTabMenu && _.current.push(_),
                _.bVisibleInAdditionalOptions && _.current.push(_),
                (_.current = !1))
              : (_.current = !0),
              _.useLayoutEffect(() => {
                _.current && (_(), (_.current = !1));
              });
          },
          OnControlsItemMounted: () => {
            (_.current = !0), _();
          },
          OnControlsItemUnmounted: (_) => {
            _.delete(_),
              (_.current = _.current.filter((_) => _ != _)),
              (_.current = _.current.filter((_) => _ != _)),
              (_.current = _.current.filter((_) => _ != _)),
              _();
          },
        };
        return _.createElement(
          _.Provider,
          {
            value: _,
          },
          _.children,
        );
      }
      const _ = _.createContext({
        bVisibleInBottomFrameControls: !0,
        bVisibleInTabMenu: !1,
        bVisibleInAdditionalOptions: !1,
      });
      function _(_) {
        const { onlyVisibleIn: _, children: _ } = _,
          _ = {
            bVisibleInBottomFrameControls:
              "both" == _ || "bottom-frame-controls" == _,
            bVisibleInTabMenu: "both" == _ || "tab-hover-menu" == _,
            bVisibleInAdditionalOptions: "additional-options" == _,
          };
        return _.createElement(
          _.Provider,
          {
            value: _,
          },
          _,
        );
      }
      function _(_) {
        const { params: _ } = _,
          _ = _.useContext(_);
        if (!_)
          throw new Error(
            "<FrameControlsItem> must be inside a <Frame> component.",
          );
        const _ = _.useContext(_),
          _ = _.useMemo(() => __webpack_require__.CreateControlsItemID(), []);
        _.useEffect(
          () => (
            __webpack_require__.OnControlsItemMounted(),
            () => __webpack_require__.OnControlsItemUnmounted(_)
          ),
          [_],
        );
        const _ = (0, _._)(() => ("function" == typeof _ ? _() : _));
        return __webpack_require__.OnControlsItemRender(_, _, _), null;
      }
      function _(_) {
        const { actionParams: _ } = _,
          { frame: _ } = (0, _._)();
        if (!_)
          throw new Error(
            "<FrameControlsItem_Action> must be inside a <Frame>.",
          );
        const _ = _.useRef(void 0);
        _.current = _.onInvoked;
        const _ = (0, _._)(_, _, (..._) => {
          var _;
          return null === (_ = _.current) || void 0 === _
            ? void 0
            : _.call(_, ..._);
        });
        return _.createElement(_, {
          params: {
            type: 2,
            action_id: _.actionID,
          },
        });
      }
      function _(_) {
        return _.createElement(_, {
          params: {
            type: 1,
          },
        });
      }
      function _(_) {
        return _._.isShowingVRGuidedTour
          ? null
          : _.createElement(
              _.Fragment,
              null,
              _.createElement(_, null),
              _.createElement(_, null),
              _.createElement(_, null),
              _.createElement(_, null),
              _.createElement(_, null),
              _.createElement(_, null),
              _.createElement(_, null),
              _.createElement(_, null),
              _.createElement(_, null),
              _.createElement(
                _,
                {
                  onlyVisibleIn: "additional-options",
                },
                !1,
                _.createElement(_, null),
                _.createElement(_, null),
                _.createElement(_, {
                  controller: "left",
                }),
                _.createElement(_, {
                  controller: "right",
                }),
              ),
            );
      }
      function _(_) {
        const { frame: _ } = (0, _._)(),
          _ = (0, _._)(() => _.controlAdditionalOptionsItems.length > 0),
          _ = (0, _._)(() => _.isControlAdditionalOptionsOpen),
          _ = (0, _._)(
            _,
            {
              display_name: (0, _._)("#AdditionalOptionsTooltip"),
              active: _,
              icon: {
                enum: 38,
              },
              invocation: 2,
            },
            (_) => _.SetControlAdditionalOptionsOpen(_),
          );
        return (
          _.useEffect(
            () => (
              _.SetControlAdditionalOptionsActionID(
                null == _ ? void 0 : _.actionID,
              ),
              () => _.SetControlAdditionalOptionsActionID(void 0)
            ),
            [_, _],
          ),
          _
            ? _.createElement(_, {
                params: {
                  type: 2,
                  action_id: _.actionID,
                },
              })
            : null
        );
      }
      function _(_) {
        const { frame: _ } = (0, _._)();
        if (!(0, _._)(() => _.docking.dockLocation == _.yWq.Dashboard))
          return null;
        return _.createElement(_, {
          actionParams: {
            display_name: (0, _._)("#FloatInWorld"),
            icon: {
              enum: 26,
            },
            invocation: 1,
          },
          onInvoked: () => {
            _.docking.SetDockLocation(_.yWq.World);
          },
        });
      }
      function _(_) {
        const { frame: _ } = (0, _._)();
        if (
          !(0, _._)(
            () =>
              _.docking.dockLocation != _.yWq.Theater &&
              _.docking.dockLocation != _.yWq.Boot,
          )
        )
          return null;
        return _.createElement(_, {
          actionParams: {
            display_name: (0, _._)("#ViewInTheater"),
            icon: {
              enum: 28,
            },
            invocation: 1,
          },
          onInvoked: () => {
            _.docking.SetInTheater(!1);
          },
        });
      }
      function _(_) {
        const { controller: _ } = _,
          { frame: _ } = (0, _._)(),
          _ = "left" == _ ? _.yWq.LeftHand : _.yWq.RightHand,
          _ = (0, _._)(
            () =>
              _.docking.dockLocation == _.yWq.Dashboard ||
              _.docking.dockLocation == _.yWq.LeftHand ||
              _.docking.dockLocation == _.yWq.RightHand ||
              _.docking.dockLocation == _.yWq.World,
          ),
          _ = (0, _._)(() => _.docking.dockLocation != _);
        if (!_) return null;
        return _.createElement(_, {
          actionParams: {
            display_name:
              "left" == _
                ? (0, _._)("#DockOnLeftController")
                : (0, _._)("#DockOnRightController"),
            icon: {
              enum: "left" == _ ? 29 : 30,
            },
            invocation: 1,
            enabled: _,
          },
          onInvoked: () => {
            _.docking.SetDockLocation(_);
          },
        });
      }
      function _(_) {
        const { frame: _ } = (0, _._)();
        if (!(0, _._)(() => _.docking.dockLocation != _.yWq.Dashboard))
          return null;
        return _.createElement(
          _,
          {
            onlyVisibleIn: "both",
          },
          _.createElement(_, {
            actionParams: {
              display_name: (0, _._)("#ReturnToDashboard"),
              icon: {
                enum: 27,
              },
              invocation: 1,
            },
            onInvoked: () => {
              _.docking.SetDockLocation(_.yWq.Dashboard);
            },
          }),
        );
      }
      function _(_) {
        const { frame: _ } = (0, _._)(),
          _ = (0, _._)(() => _.closing.showCloseButton),
          _ = (0, _._)(() => _.closing.closeButtonLabel),
          _ = (0, _._)(() => _.closing.closeButtonIcon),
          _ = _.useCallback(() => {
            _.closing.RequestClose();
          }, []);
        return _
          ? _.createElement(
              _,
              {
                onlyVisibleIn: "both",
              },
              _.createElement(_, {
                actionParams: {
                  display_name: _,
                  icon: {
                    enum: _,
                  },
                  invocation: 1,
                },
                onInvoked: _,
              }),
            )
          : null;
      }
      function _(_) {
        const { frame: _ } = (0, _._)(),
          _ = (0, _._)(() => _.activePage),
          _ = (0, _._)(() => {
            var _;
            return (
              null !==
                (_ = null == _ ? void 0 : _.keyboard.isKeyboardVisible) &&
              void 0 !== _ &&
              _
            );
          }),
          _ = _.useRef(void 0);
        _.useEffect(() => {
          _.current = new Date();
        }, [_]);
        const _ = (0, _._)(() =>
            _.pages.some((_) => _.keyboard.showKeyboardButtonInFrameControls),
          ),
          _ = (0, _._)(() => {
            var _;
            return (
              _ ||
              (null === (_ = _.activePage) || void 0 === _
                ? void 0
                : _.keyboard.showKeyboardButtonInFrameControls)
            );
          });
        return _
          ? _.createElement(_, {
              actionParams: {
                display_name: _
                  ? (0, _._)("#HideKeyboardTooltip")
                  : (0, _._)("#ShowKeyboardTooltip"),
                enabled: _,
                active: _,
                icon: {
                  enum: 22,
                },
                icon_active: {
                  enum: 24,
                },
                invocation: 2,
              },
              onInvoked: (_) => {
                var _, _;
                if (null == _.current) return;
                new Date().getTime() - _.current.getTime() < 100 ||
                  (_
                    ? null === (_ = null == _ ? void 0 : _.keyboard) ||
                      void 0 === _ ||
                      _.ShowKeyboard()
                    : null === (_ = null == _ ? void 0 : _.keyboard) ||
                      void 0 === _ ||
                      _.HideKeyboard());
              },
            })
          : null;
      }
      function _(_) {
        const { frame: _ } = (0, _._)(),
          _ = (0, _._)(() => _._.allowCurvature),
          _ = (0, _._)(() => _.curvature.shouldCurve);
        return _
          ? _.createElement(_, {
              actionParams: {
                display_name: (0, _._)("#ToggleCurvatureTooltip"),
                active: _,
                icon: {
                  enum: 40,
                },
                icon_active: {
                  enum: 39,
                },
                invocation: 2,
              },
              onInvoked: () => _.curvature.ToggleCurvature(),
            })
          : null;
      }
      function _(_) {
        const { frame: _ } = (0, _._)(),
          _ = (0, _._)(() => _.canSpatialize),
          _ = (0, _._)(() => _.isSpatializeEnabled);
        return _
          ? _.createElement(_, {
              actionParams: {
                display_name: _
                  ? (0, _._)("#DisableSpatialAudioTooltip")
                  : (0, _._)("#EnableSpatialAudioTooltip"),
                active: _,
                icon: {
                  enum: 35,
                },
                icon_active: {
                  enum: 36,
                },
                invocation: 2,
              },
              onInvoked: (_) => _.SetSpatializeEnabled(_),
            })
          : null;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid");
      const _ = _.createContext({
        CreateMenuItemID: void 0,
        OnMenuItemRender: void 0,
        OnMenuItemMounted: void 0,
        OnMenuItemUnmounted: void 0,
      });
      function _(_) {
        const { frame: _ } = (0, _._)();
        if (!_)
          throw new Error("<FrameMenu> must be inside a <Frame> component.");
        const _ = _.useRef(1),
          _ = _.useRef([]),
          _ = _.useRef([]),
          _ = _.useMemo(() => new Map(), []),
          _ = _.useRef(!1),
          _ = _.useRef(!0),
          _ = _.useCallback(() => {
            const _ = _.current.map((_) => _.get(_)),
              _ = _.current.map((_) => _.get(_));
            _.SetMenuItems(_, _);
          }, []);
        _.useEffect(() => () => _.SetMenuItems([], []), []),
          _.current &&
            ((_.current = !1),
            (_.current = !0),
            (_.current = []),
            (_.current = []));
        const _ = (0, _._)();
        _.useEffect(() => {
          !_.current ||
            (0 == _.current.length && 0 == _.current.length) ||
            (_(), (_.current = !1));
        });
        const _ = {
          CreateMenuItemID: () => _.current++,
          OnMenuItemRender: (_, _, _) => {
            _.set(_, _);
            const _ = _.useRef(!1);
            _.current
              ? (_.bVisibleInFrameMenu && _.current.push(_),
                _.bVisibleInTabMenu && _.current.push(_),
                (_.current = !1))
              : (_.current = !0),
              _.useLayoutEffect(() => {
                _.current && (_(), (_.current = !1));
              });
          },
          OnMenuItemMounted: () => {
            (_.current = !0), _();
          },
          OnMenuItemUnmounted: (_) => {
            _.delete(_),
              (_.current = _.current.filter((_) => _ != _)),
              (_.current = _.current.filter((_) => _ != _)),
              _();
          },
        };
        return _.createElement(
          _.Provider,
          {
            value: _,
          },
          _.children,
        );
      }
      const _ = _.createContext({
        bVisibleInFrameMenu: !0,
        bVisibleInTabMenu: !0,
      });
      function _(_) {
        const { onlyVisibleIn: _, children: _ } = _,
          _ = {
            bVisibleInFrameMenu: "both" == _ || "left-frame-menu" == _,
            bVisibleInTabMenu: "both" == _ || "tab-hover-menu" == _,
          };
        return _.createElement(
          _.Provider,
          {
            value: _,
          },
          _,
        );
      }
      function _(_) {
        const { params: _ } = _,
          _ = _.useContext(_);
        if (!_)
          throw new Error(
            "<FrameMenuItem> must be inside a <Frame> component.",
          );
        const _ = _.useContext(_),
          _ = _.useMemo(() => __webpack_require__.CreateMenuItemID(), []);
        _.useEffect(
          () => (
            __webpack_require__.OnMenuItemMounted(),
            () => __webpack_require__.OnMenuItemUnmounted(_)
          ),
          [_],
        );
        const _ = (0, _._)(() => ("function" == typeof _ ? _() : _));
        return __webpack_require__.OnMenuItemRender(_, _, _), null;
      }
      function _(_) {
        const { actionParams: _ } = _,
          { frame: _ } = (0, _._)();
        if (!_)
          throw new Error("<FrameMenuItem_Action> must be inside a <Frame>.");
        const _ = _.useRef(void 0);
        _.current = _.onInvoked;
        const _ = (0, _._)(_, _, (..._) => {
          var _;
          return null === (_ = _.current) || void 0 === _
            ? void 0
            : _.call(_, ..._);
        });
        return _.createElement(_, {
          params: {
            type: 3,
            action_id: _.actionID,
          },
        });
      }
      function _(_) {
        return _.createElement(_, {
          params: {
            type: 2,
          },
        });
      }
      function _(_) {
        const { frame: _ } = (0, _._)(),
          _ = (0, _._)(() => {
            var _;
            return (
              (null == _ ? void 0 : _.isActiveDashboardFrame) &&
              (null === (_ = null == _ ? void 0 : _.activePage) || void 0 === _
                ? void 0
                : _.summonOverlayKey) == _._
            );
          });
        return _.createElement(_, {
          params: () => ({
            type: 4,
            steam_main_menu_options: {
              allow_show_as_active: _,
            },
          }),
        });
      }
      function _(_ = !0, _) {
        const { frame: _ } = (0, _._)();
        return (0, _._)(
          _,
          {
            active: _,
            invocation: 1,
          },
          () => {
            var _;
            !_.isCurrentlyVisible &&
              (null === (_ = _.activePage) || void 0 === _
                ? void 0
                : _.summonOverlayKey) &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRClient.ShowDashboardOverlay({
                  overlayKey: _.activePage.summonOverlayKey,
                  sReason: "useActionForGameFrameMenuItems",
                })),
              null == _ || _();
          },
        );
      }
      function _(_) {
        const { info: _, onInvoked: _, allowShowAsActive: _ } = _,
          _ = _(_, _);
        return _.createElement(_, {
          params: {
            type: 6,
            steam_game_info: {
              app_id: null == _ ? void 0 : _.appid,
            },
            action_id: _.actionID,
          },
        });
      }
      function _(_) {
        const {
            info: _,
            showForSingleWindow: _,
            onInvoked: _,
            allowShowAsActive: _,
          } = _,
          _ = _(_, _);
        return _.createElement(_, {
          params: {
            type: 7,
            steam_game_info: {
              app_id: null == _ ? void 0 : _.appid,
            },
            steam_game_window_item_options: {
              show_for_single_window: _,
            },
            action_id: _.actionID,
          },
        });
      }
      function _(_) {
        const { frame: _ } = (0, _._)(),
          _ = (0, _._)(() => {
            var _;
            return (
              null !== (_ = null == _ ? void 0 : _.closing.showCloseButton) &&
              void 0 !== _ &&
              _
            );
          }),
          _ = (0, _._)(() => (null == _ ? void 0 : _.closing.closeButtonLabel)),
          _ = (0, _._)(() => (null == _ ? void 0 : _.closing.closeButtonIcon)),
          _ = _.useCallback(
            () => (null == _ ? void 0 : _.closing.RequestClose()),
            [_],
          );
        return _
          ? _.createElement(_, {
              actionParams: {
                display_name: _,
                icon: {
                  enum: _,
                },
                invocation: 1,
              },
              onInvoked: _,
            })
          : null;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new _._("FrameStore");
      var _, _;
      !(function (_) {
        (_[(_.Disconnected = 0)] = "Disconnected"),
          (_[(_.Pending = 1)] = "Pending"),
          (_[(_.Connected = 2)] = "Connected");
      })(_ || (_ = {}));
      class _ {
        get OnFrameDestroyed() {
          return this.m_OnFrameDestroyed;
        }
        get canTryConnectingToSteam() {
          return (
            _._.isVRGamepadUIReady && _._.HasCapability(16, _.fkw.MutualLocal)
          );
        }
        get steamConnectionState() {
          return this.m_eSteamConnectionState;
        }
        get supportedFrameFeatures() {
          const _ = this.steamConnectionState == _.Connected;
          return {
            steamHelpsRenderFrame: _,
            steamRendersFrameControls: _ && !1,
          };
        }
        constructor() {
          (this.m_unNextFrameID = _._),
            (this.m_unNextTabID = _.BaseIncrementingIDOffset),
            (this.m_mapLastSentFrameUpdate = new Map()),
            (this.m_mapLastSentFrameVisibility = new Map()),
            (this.m_mapDockLocations = new Map()),
            (this.m_mapPreviewDockLocations = new Map()),
            (this.m_mapLocalFrames = new Map()),
            (this.m_mapRemoteFrames = new Map()),
            (this.m_eSteamConnectionState = _.Disconnected),
            (this.m_OnFrameDestroyed = new _._()),
            (this.m_initCallHandle = void 0),
            (this.m_mapFrameDockLocations = new Map()),
            (0, _.makeObservable)(this);
        }
        Init() {
          return (0, _._)(this, void 0, void 0, function* () {
            (0, _.reaction)(
              () => this.canTryConnectingToSteam,
              (_) => {
                _ ? this.InitSteamConnection() : this.CleanupSteamConnection();
              },
              {
                fireImmediately: !0,
              },
            ),
              (0, _.reaction)(
                () => this.frames_local.filter((_) => _.state == _._.Destroyed),
                this.OnLocalFramesDestroyed,
              ),
              (0, _.autorun)(this.SendUpdatesToSteam, {
                delay: 1e-4,
              });
          });
        }
        InitSteamConnection() {
          this.m_eSteamConnectionState == _.Disconnected
            ? ((this.m_eSteamConnectionState = _.Pending),
              this.m_mapLastSentFrameUpdate.clear(),
              this.m_mapLastSentFrameVisibility.clear(),
              _.Info("InitSteamConnection - Calling Steam.InitFrameSystem..."),
              (this.m_initCallHandle = _._.Steam.InitFrameSystem(
                {},
                {
                  nMaxTimeoutRetries: "infinite",
                },
              )),
              this.m_initCallHandle
                .then(() => {
                  _.Info(
                    "InitSteamConnection call to Steam.InitFrameSystem succeeded.",
                  ),
                    (this.m_eSteamConnectionState = _.Connected);
                })
                .catch((_) => {
                  8 == _.info.error_code
                    ? _.Info(
                        "InitSteamConnection call to Steam.InitFrameSystem cancelled.",
                      )
                    : _.Error(
                        "InitSteamConnection call to Steam.InitFrameSystem failed:",
                        _,
                      ),
                    (this.m_eSteamConnectionState = _.Disconnected),
                    (this.m_initCallHandle = void 0),
                    this.CleanupSteamConnection();
                }))
            : _.Info(
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
          var _;
          if (!this.supportedFrameFeatures.steamHelpsRenderFrame) return;
          const _ = this.frames.map((_) => _.protoForSteam).filter(Boolean),
            _ = new Set(_.map((_) => _.frame_id)),
            _ = _.filter(
              (_) => this.m_mapLastSentFrameUpdate.get(_.frame_id) !== _,
            ),
            _ = Array.from(this.m_mapLastSentFrameUpdate.keys()).filter(
              (_) => !__webpack_require__.has(_),
            );
          for (const _ of _) this.m_mapLastSentFrameUpdate.set(_.frame_id, _);
          for (const _ of _)
            this.m_mapLastSentFrameUpdate.delete(_),
              this.m_mapLastSentFrameVisibility.delete(_);
          const _ = [];
          for (const _ of this.frames)
            _.isCurrentlyVisible !=
              (null !==
                (_ = this.m_mapLastSentFrameVisibility.get(_.frameID)) &&
                void 0 !== _ &&
                _) &&
              (_.push(_),
              this.m_mapLastSentFrameVisibility.set(
                _.frameID,
                _.isCurrentlyVisible,
              ));
          const _ = {
            updated_frames: _,
            deleted_frames: _,
            shown_frames: _.filter((_) => _.isCurrentlyVisible).map(
              (_) => _.frameID,
            ),
            hidden_frames: _.filter((_) => !_.isCurrentlyVisible).map(
              (_) => _.frameID,
            ),
          };
          _._.Steam.UpdateFrameUIs(_, {
            nTimeoutMS: 6e4,
          }).then(
            (0, _.action)((_) => {
              var _, _;
              for (const _ of null !== (_ = _.results) && void 0 !== _
                ? _
                : []) {
                const _ = null == _ ? void 0 : _.frame_id;
                _ &&
                  (null === (_ = this.m_mapLocalFrames.get(_)) ||
                    void 0 === _ ||
                    __webpack_require__.OnFrameUpdateResultFromSteam(_));
              }
            }),
          );
        }
        OnLocalFramesDestroyed(_) {
          _.forEach((_) => {
            this.m_mapLocalFrames.delete(_.frameID);
          }),
            this.NotifyFramesDestroyed(_);
        }
        NotifyFramesDestroyed(_) {
          _.forEach((_) => {
            this.m_OnFrameDestroyed.Dispatch(_);
          }),
            _.forEach((_) => {
              this.m_mapDockLocations.delete(_.frameID),
                this.m_mapPreviewDockLocations.delete(_.frameID);
            });
        }
        CreateCFrame(_) {
          const _ = new _._(this.m_unNextFrameID++, this.m_unNextTabID++, _);
          return (
            (0, _.when)(
              () => _.state != _._.Uninitialized && _.state != _._.Destroyed,
            ).then(() =>
              (0, _.runInAction)(() => this.m_mapLocalFrames.set(_.frameID, _)),
            ),
            _
          );
        }
        get frames() {
          return _._.unifiedDashboardEnabled
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
          return this.getLocalFrameAtExclusiveDockLocation(_.yWq.Boot);
        }
        get theaterFrame() {
          return this.getFrameAtExclusiveDockLocation(_.yWq.Theater);
        }
        get isTheaterMode() {
          return null != this.theaterFrame;
        }
        get remote_frames() {
          return [...this.m_mapRemoteFrames.values()];
        }
        get remote_steam_frame() {
          var _;
          for (const _ of this.m_mapRemoteFrames.values())
            if (
              14 ==
              (null === (_ = null == _ ? void 0 : _.icon) || void 0 === _
                ? void 0
                : _.enum)
            )
              return _;
        }
        _create_remote_cframe(_) {
          const _ = new _._(_);
          return this.m_mapRemoteFrames.set(_.frameID, _), _;
        }
        _clear_remote_frames() {
          const _ = [...this.m_mapRemoteFrames.values()];
          0 != _.length &&
            (this.m_mapRemoteFrames.clear(),
            _.forEach((_) => _._markDestroyed()),
            this.NotifyFramesDestroyed(_));
        }
        _delete_remote_frame(_) {
          const _ = this.m_mapRemoteFrames.get(_);
          null != _ &&
            (this.m_mapRemoteFrames.delete(_),
            _._markDestroyed(),
            this.NotifyFramesDestroyed([_]));
        }
        GetRemoteFrame(_) {
          if (null != _) return this.m_mapRemoteFrames.get(_);
        }
        _setDockLocation(_, _) {
          var _;
          if (_._.useRemoteDashboardState)
            return void _.Warning(
              "_setDockLocation called when remote dock state is active. This should be a request",
              _,
              _,
            );
          this.m_mapPreviewDockLocations.delete(_);
          if (
            (null !== (_ = this.m_mapDockLocations.get(_)) && void 0 !== _
              ? _
              : _.yWq.Dashboard) != _
          ) {
            if ((0, _._)(_)) {
              for (const [_, _] of this.m_mapDockLocations)
                _ == _ && this.m_mapDockLocations.delete(_);
              for (const [_, _] of this.m_mapPreviewDockLocations)
                _ == _ && this.m_mapPreviewDockLocations.delete(_);
            }
            null == _ || _ == _.yWq.Dashboard
              ? this.m_mapDockLocations.delete(_)
              : this.m_mapDockLocations.set(_, _),
              _ != _.yWq.Theater && _._.ClearTheaterHistoryForFrame(_);
          }
        }
        _getDockLocation(_) {
          var _, _, _;
          if (_._.useRemoteDashboardState) {
            const _ =
              null !==
                (_ =
                  null === (_ = _._.unifiedDashboardState_Remote) ||
                  void 0 === _
                    ? void 0
                    : _.dock_entries) && void 0 !== _
                ? _
                : [];
            for (const _ of _)
              if ((null == _ ? void 0 : _.frame_id) == _)
                return null == _ ? void 0 : _.dock_location;
            return _.yWq.Dashboard;
          }
          return null !== (_ = this.m_mapDockLocations.get(_)) && void 0 !== _
            ? _
            : _.yWq.Dashboard;
        }
        getFrameIDAtDockLocation(_) {
          var _, _, _, _;
          if (_._.useRemoteDashboardState) {
            const _ =
              null !==
                (_ =
                  null === (_ = _._.unifiedDashboardState_Remote) ||
                  void 0 === _
                    ? void 0
                    : _.preview_dock_entries) && void 0 !== _
                ? _
                : [];
            for (const _ of _)
              if ((null == _ ? void 0 : _.dock_location) == _)
                return null == _ ? void 0 : _.frame_id;
            const _ =
              null !==
                (_ =
                  null === (_ = _._.unifiedDashboardState_Remote) ||
                  void 0 === _
                    ? void 0
                    : _.dock_entries) && void 0 !== _
                ? _
                : [];
            for (const _ of _)
              if ((null == _ ? void 0 : _.dock_location) == _)
                return null == _ ? void 0 : _.frame_id;
          } else {
            for (const [_, _] of this.m_mapPreviewDockLocations)
              if (_ == _) return _;
            for (const [_, _] of this.m_mapDockLocations) if (_ == _) return _;
          }
        }
        getLocalFrameAtExclusiveDockLocation(_) {
          if ((0, _._)(_))
            return this.GetLocalFrame(this.getFrameIDAtDockLocation(_));
        }
        getFrameAtExclusiveDockLocation(_) {
          var _;
          if (!(0, _._)(_)) return;
          const _ = this.getFrameIDAtDockLocation(_);
          return null !== (_ = this.GetLocalFrame(_)) && void 0 !== _
            ? _
            : this.GetRemoteFrame(_);
        }
        _setPreviewDockLocation(_, _) {
          if (_._.useRemoteDashboardState)
            _.Warning(
              "_setPreviewDockLocation called when remote dock state is active. This should be a request",
              _,
              _,
            );
          else {
            if ((0, _._)(_))
              for (const [_, _] of this.m_mapPreviewDockLocations)
                _ == _ && this.m_mapPreviewDockLocations.delete(_);
            null == _
              ? this.m_mapPreviewDockLocations.delete(_)
              : this.m_mapPreviewDockLocations.set(_, _);
          }
        }
        _getPreviewDockLocation(_) {
          var _, _, _;
          if (!_._.useRemoteDashboardState)
            return null !== (_ = this.m_mapPreviewDockLocations.get(_)) &&
              void 0 !== _
              ? _
              : void 0;
          {
            const _ =
              null !==
                (_ =
                  null === (_ = _._.unifiedDashboardState_Remote) ||
                  void 0 === _
                    ? void 0
                    : _.preview_dock_entries) && void 0 !== _
                ? _
                : [];
            for (const _ of _)
              if ((null == _ ? void 0 : _.frame_id) == _)
                return null == _ ? void 0 : _.dock_location;
          }
        }
        get dockEntries() {
          let _ = [];
          for (const [_, _] of this.m_mapDockLocations.entries()) {
            const _ = {
              frame_id: _,
              dock_location: null != _ ? _ : 0,
            };
            _.push(_);
          }
          return _;
        }
        get previewDockEntries() {
          let _ = [];
          for (const [_, _] of this.m_mapPreviewDockLocations.entries()) {
            const _ = {
              frame_id: _,
              dock_location: null != _ ? _ : 0,
            };
            _.push(_);
          }
          return _;
        }
        get frames_local_undocked() {
          return [
            ...Array.from(this.m_mapLocalFrames.values()).filter(
              (_) =>
                _.state === _._.Alive &&
                _.docking.dockLocation !== _.yWq.Boot &&
                _.docking.dockLocation !== _.yWq.Dashboard,
            ),
          ];
        }
        GetFrame(_) {
          var _;
          if (_)
            return null !== (_ = this.m_mapLocalFrames.get(_)) && void 0 !== _
              ? _
              : this.m_mapRemoteFrames.get(_);
        }
        GetLocalFrame(_) {
          if (_) return this.m_mapLocalFrames.get(_);
        }
        GetFramesWithAssociatedSummonKeys(_) {
          return _
            ? this.frames.filter(
                (_) => _ && _.associatedSummonOverlayKeys.includes(_),
              )
            : [];
        }
        GetFrameWithTabId(_) {
          if (null != _)
            return this.frames.find((_) => {
              var _;
              return (
                (null === (_ = _.tab.proto) || void 0 === _
                  ? void 0
                  : _.tab_id) === _
              );
            });
        }
        HasFramesWithAssociatedSummonKeys(_) {
          return this.GetFramesWithAssociatedSummonKeys(_).length > 0;
        }
        RegisterFrameDockLocation(_, _, _) {
          const _ = this.DockLocationMapKey(_, _);
          return (
            this.m_mapFrameDockLocations.set(_, _),
            {
              Unregister: () => {
                this.m_mapFrameDockLocations.get(_) === _ &&
                  this.m_mapFrameDockLocations.delete(_);
              },
            }
          );
        }
        GetDockLocationTransformID(_, _) {
          const _ = this.DockLocationMapKey(_, _);
          return this.m_mapFrameDockLocations.get(_);
        }
        DockLocationMapKey(_, _) {
          return _ === _.yWq.World
            ? (_.Assert(null != _), `${_.yWq[_]}:${null != _ ? _ : 0}`)
            : `${_.yWq[_]}`;
        }
        get frameIDPreviewingDashboardDockSnap() {
          var _, _;
          if (_._.useRemoteDashboardState) {
            const _ =
              null !==
                (_ =
                  null === (_ = _._.unifiedDashboardState_Remote) ||
                  void 0 === _
                    ? void 0
                    : _.preview_dock_entries) && void 0 !== _
                ? _
                : [];
            for (const _ of _)
              if ((null == _ ? void 0 : _.dock_location) == _.yWq.Dashboard)
                return null == _ ? void 0 : _.frame_id;
          } else
            for (const [_, _] of this.m_mapPreviewDockLocations)
              if (_ == _.yWq.Dashboard) return _;
        }
      }
      (0, _._)([_.observable], _.prototype, "m_mapDockLocations", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_mapPreviewDockLocations",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_mapLocalFrames", void 0),
        (0, _._)([_.observable], _.prototype, "m_mapRemoteFrames", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_eSteamConnectionState",
          void 0,
        ),
        (0, _._)([_.computed], _.prototype, "canTryConnectingToSteam", null),
        (0, _._)([_.computed], _.prototype, "steamConnectionState", null),
        (0, _._)([_.computed], _.prototype, "supportedFrameFeatures", null),
        (0, _._)([_.action.bound], _.prototype, "InitSteamConnection", null),
        (0, _._)([_.action.bound], _.prototype, "CleanupSteamConnection", null),
        (0, _._)([_._], _.prototype, "SendUpdatesToSteam", null),
        (0, _._)([_.action.bound], _.prototype, "OnLocalFramesDestroyed", null),
        (0, _._)([_.action], _.prototype, "NotifyFramesDestroyed", null),
        (0, _._)([_.action], _.prototype, "CreateCFrame", null),
        (0, _._)([_.computed], _.prototype, "frames", null),
        (0, _._)([_.computed], _.prototype, "frames_local", null),
        (0, _._)([_.computed], _.prototype, "bootFrame", null),
        (0, _._)([_.computed], _.prototype, "theaterFrame", null),
        (0, _._)([_.computed], _.prototype, "isTheaterMode", null),
        (0, _._)([_.computed], _.prototype, "remote_frames", null),
        (0, _._)([_.computed], _.prototype, "remote_steam_frame", null),
        (0, _._)([_.action], _.prototype, "_create_remote_cframe", null),
        (0, _._)([_.action.bound], _.prototype, "_clear_remote_frames", null),
        (0, _._)([_.action.bound], _.prototype, "_delete_remote_frame", null),
        (0, _._)([_._], _.prototype, "GetRemoteFrame", null),
        (0, _._)([_.action.bound], _.prototype, "_setDockLocation", null),
        (0, _._)([_._], _.prototype, "_getDockLocation", null),
        (0, _._)([_._], _.prototype, "getFrameIDAtDockLocation", null),
        (0, _._)(
          [_._],
          _.prototype,
          "getLocalFrameAtExclusiveDockLocation",
          null,
        ),
        (0, _._)([_._], _.prototype, "getFrameAtExclusiveDockLocation", null),
        (0, _._)(
          [_.action.bound],
          _.prototype,
          "_setPreviewDockLocation",
          null,
        ),
        (0, _._)([_._], _.prototype, "_getPreviewDockLocation", null),
        (0, _._)([_.computed], _.prototype, "dockEntries", null),
        (0, _._)([_.computed], _.prototype, "previewDockEntries", null),
        (0, _._)([_.computed], _.prototype, "frames_local_undocked", null),
        (0, _._)([_._], _.prototype, "GetFrame", null),
        (0, _._)([_._], _.prototype, "GetLocalFrame", null),
        (0, _._)([_._], _.prototype, "GetFramesWithAssociatedSummonKeys", null),
        (0, _._)([_._], _.prototype, "GetFrameWithTabId", null),
        (0, _._)([_._], _.prototype, "HasFramesWithAssociatedSummonKeys", null),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_mapFrameDockLocations",
          void 0,
        ),
        (0, _._)([_.action], _.prototype, "RegisterFrameDockLocation", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "frameIDPreviewingDashboardDockSnap",
          null,
        ),
        (function (_) {
          (_[(_.LegacyFloatingSteamMainMenu_VRSettings = _._ + 1)] =
            "LegacyFloatingSteamMainMenu_VRSettings"),
            (_[
              (_.BaseIncrementingIDOffset =
                _.LegacyFloatingSteamMainMenu_VRSettings + 1)
            ] = "BaseIncrementingIDOffset");
        })(_ || (_ = {}));
      const _ = new _();
      window.FrameStore = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = function ({ eRole: _ }) {
          switch (_) {
            case _.kGj.TrackedControllerRole_RightHand:
              return _.createElement(_._, {
                right: !0,
                color: "#525252",
                width: "100%",
                height: "100%",
              });
            case _.kGj.TrackedControllerRole_LeftHand:
              return _.createElement(_._, {
                left: !0,
                color: "#525252",
                width: "100%",
                height: "100%",
              });
            default:
              return null;
          }
        },
        _ = function (_) {
          const [_, _] = _.useState(),
            _ = !!_.appIconURL && _ == _.appIconURL;
          return _.createElement(
            "div",
            {
              className: (0, _._)(
                _.ControllerGamepadIcon,
                _ && _.ControllerGamepadIconWithApp,
              ),
            },
            _.appIconURL &&
              _.createElement("img", {
                key: _.appIconURL,
                src: _.appIconURL,
                className: (0, _._)(
                  _.ControllerAppIcon,
                  _ && _.ControllerAppIconLoaded,
                ),
                onLoad: () => __webpack_require__(_.appIconURL),
                onError: () => __webpack_require__(void 0),
              }),
            _ &&
              _.createElement(
                "div",
                {
                  className: _.ControllerConnectionDots,
                },
                _.createElement("span", null),
                _.createElement("span", null),
                _.createElement("span", null),
              ),
            _.createElement(
              "div",
              {
                className: _.ControllerRoleIcon,
              },
              _.createElement(_, {
                eRole: _.eRole,
              }),
            ),
          );
        };
      function _(_, _, _, _) {
        if (!_ || null == _) return;
        const _ =
          _ == _.VerticalBattery
            ? "images/icons/vert"
            : "images/icons/controller_model";
        return _
          ? _ < 0.15
            ? _ + "_charging_red.png"
            : _ + "_charging.png"
          : 0 == _
            ? void 0
            : _ < 0.15
              ? _ + "_low.png"
              : _ < 0.3
                ? _ + "_battery_1.png"
                : _ < 0.6
                  ? _ + "_battery_2.png"
                  : _ < 0.9
                    ? _ + "_battery_3.png"
                    : _ + "_battery_4.png";
      }
      var _;
      !(function (_) {
        (_[(_.HorizontalPips = 0)] = "HorizontalPips"),
          (_[(_.VerticalBattery = 1)] = "VerticalBattery");
      })(_ || (_ = {}));
      let _ = (_ = class extends _.Component {
        constructor(_) {
          super(_),
            (this.m_BatteryStateChangedCallbackHandle = void 0),
            (this.m_DeviceRoleChangedCallbackHandle = void 0),
            (this.m_DeviceEventCallbackHandle = void 0),
            (this.batteryLevelStable = void 0),
            (this.state = {
              batteryIconPath: void 0,
              roleIconPath: void 0,
              eRole: _.kGj.TrackedControllerRole_Invalid,
            });
        }
        componentDidMount() {
          (this.m_BatteryStateChangedCallbackHandle =
            null === _.Ay$ || void 0 === _.Ay$
              ? void 0
              : _.Ay$.RegisterForBatteryStateChangedEvents(
                  this.OnBatteryStateChanged,
                )),
            (this.m_DeviceRoleChangedCallbackHandle =
              null === _.Ay$ || void 0 === _.Ay$
                ? void 0
                : _.Ay$.RegisterForDeviceRoleChangedEvents(
                    this.OnDeviceRoleChanged,
                  )),
            (this.m_DeviceEventCallbackHandle =
              null === _.Ay$ || void 0 === _.Ay$
                ? void 0
                : _.Ay$.RegisterForDeviceEvents(this.OnDeviceEvent)),
            this.UpdateControllerStatus();
        }
        componentWillUnmount() {
          var _, _, _;
          null === (_ = this.m_BatteryStateChangedCallbackHandle) ||
            void 0 === _ ||
            _.unregister(),
            null === (_ = this.m_DeviceRoleChangedCallbackHandle) ||
              void 0 === _ ||
              _.unregister(),
            null === (_ = this.m_DeviceEventCallbackHandle) ||
              void 0 === _ ||
              __webpack_require__.unregister();
        }
        componentDidUpdate(_) {
          _.trackedDeviceIndex != this.props.trackedDeviceIndex &&
            ((this.batteryLevelStable = void 0), this.UpdateControllerStatus());
        }
        UpdateControllerStatus() {
          var _, _;
          if (!_.Ay$) return;
          const _ = _.Ay$.VRProperties.GetBoolProperty(
              this.props.trackedDeviceIndex,
              _.fD8.DeviceProvidesBatteryStatus_Bool,
            ),
            _ = _.Ay$.VRSystem.GetControllerRoleForTrackedDeviceIndex(
              this.props.trackedDeviceIndex,
            );
          let _ = !1;
          if (_) {
            const _ =
              null !==
                (_ = _.Ay$.VRProperties.GetFloatProperty(
                  this.props.trackedDeviceIndex,
                  _.fD8.DeviceBatteryPercentage_Float,
                )) && void 0 !== _
                ? _
                : 0;
            (_ =
              null !==
                (_ = _.Ay$.VRProperties.GetBoolProperty(
                  this.props.trackedDeviceIndex,
                  _.fD8.DeviceIsCharging_Bool,
                )) &&
              void 0 !== _ &&
              _),
              null == this.batteryLevelStable
                ? (this.batteryLevelStable = _)
                : ((this.batteryLevelStable = Math.min(
                    this.batteryLevelStable,
                    _ + _.kBatteryLevelHysteresis,
                    1,
                  )),
                  (this.batteryLevelStable = Math.max(
                    this.batteryLevelStable,
                    _ - _.kBatteryLevelHysteresis,
                    0,
                  )));
          }
          let _ = _(
              null != _ && _,
              _,
              this.batteryLevelStable,
              _.HorizontalPips,
            ),
            _ = (function (_) {
              switch (_) {
                case _.kGj.TrackedControllerRole_RightHand:
                  return "images/icons/controller_model_right.png";
                case _.kGj.TrackedControllerRole_LeftHand:
                  return "images/icons/controller_model_left.png";
                default:
                  return;
              }
            })(_);
          (_ == this.state.batteryIconPath &&
            _ == this.state.roleIconPath &&
            _ == this.state.eRole) ||
            this.setState({
              batteryIconPath: _,
              roleIconPath: _,
              eRole: _,
            });
        }
        OnBatteryStateChanged(_) {
          _ == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
        }
        OnDeviceRoleChanged() {
          this.UpdateControllerStatus();
        }
        OnDeviceEvent(_, _, _) {
          _ == _.kuU.Activated &&
            _ == this.props.trackedDeviceIndex &&
            this.UpdateControllerStatus();
        }
        render() {
          var _, _;
          const _ = this.state.eRole,
            _ = _ == _.kGj.TrackedControllerRole_LeftHand,
            _ = _ == _.kGj.TrackedControllerRole_RightHand;
          let _ = 0;
          _ ? (_ = _.KlS.GamepadMode_Left) : _ && (_ = _.KlS.GamepadMode_Right);
          const _ =
              _ == _.kGj.TrackedControllerRole_LeftHand ||
              _ == _.kGj.TrackedControllerRole_RightHand,
            _ =
              null !==
                (_ =
                  null === _.Ay$ || void 0 === _.Ay$
                    ? void 0
                    : _.Ay$.VRProperties.GetBoolProperty(
                        this.props.trackedDeviceIndex,
                        _.fD8.Prop_SupportsVRGamepadMode_Bool,
                      )) &&
              void 0 !== _ &&
              _,
            _ =
              null !==
                (_ =
                  null === _.Ay$ || void 0 === _.Ay$
                    ? void 0
                    : _.Ay$.VRProperties.GetBoolProperty(
                        this.props.trackedDeviceIndex,
                        _.fD8.Prop_ControllerHasLargeStatusArea_Bool,
                      )) &&
              void 0 !== _ &&
              _,
            _ = 0 != (_._.m_nSystemBehaviorFlags & _),
            _ = _ && _ && _,
            _ = _._.computedInputFocus.m_unSteamInputAppID,
            _ = !(0, _._)(_) ? _._.GetAppIconURL(_) : void 0;
          return _.createElement(
            _.Zkm,
            {
              width: void 0,
              height: void 0,
              interactive: !1,
              rendermodel_component_device_index: this.props.trackedDeviceIndex,
              rendermodel_component_name: "status",
              debug_name: "controllerstatus_" + this.props.trackedDeviceIndex,
            },
            _.createElement(
              "div",
              {
                className: (0, _._)(
                  _.ControllerStatusRoot,
                  _ && _.LargeStatusArea,
                  _ && _.ControllerStatusRootLeft,
                  _ && _.ControllerStatusRootRight,
                ),
              },
              _.createElement(
                "div",
                {
                  className: _.ControllerPrimaryIconFrame,
                },
                _
                  ? _.createElement(_, {
                      eRole: _,
                      appIconURL: _,
                    })
                  : this.state.roleIconPath &&
                      _.createElement("img", {
                        className: _.ControllerHand,
                        src: this.state.roleIconPath,
                      }),
              ),
              _.createElement(
                "div",
                {
                  className: _.ControllerBatteryFrame,
                },
                this.state.batteryIconPath &&
                  _.createElement("img", {
                    className: _.ControllerBattery,
                    src: this.state.batteryIconPath,
                  }),
              ),
            ),
          );
        }
      });
      (_.kBatteryLevelHysteresis = 0.02),
        (0, _._)([_._], _.prototype, "OnBatteryStateChanged", null),
        (0, _._)([_._], _.prototype, "OnDeviceRoleChanged", null),
        (0, _._)([_._], _.prototype, "OnDeviceEvent", null),
        (_ = _ = (0, _._)([_._], _));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      var _,
        _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ =
          (__webpack_require__("chunkid"),
          __webpack_require__("chunkid"),
          __webpack_require__("chunkid")),
        _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid"),
        __webpack_require__("chunkid"),
        __webpack_require__("chunkid"),
        __webpack_require__("chunkid"),
        __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.None = 0)] = "None"),
          (_[(_.ControllerPairing = 1)] = "ControllerPairing"),
          (_[(_.FaceMouse = 2)] = "FaceMouse"),
          (_[(_.HardwareButtons = 4)] = "HardwareButtons"),
          (_[(_.Recentering = 8)] = "Recentering"),
          (_[(_.ResizingFrames = 16)] = "ResizingFrames"),
          (_[(_.StreamingGamesFromPC = 32)] = "StreamingGamesFromPC"),
          (_[(_.StreamingToTV = 64)] = "StreamingToTV"),
          (_[(_.ToggleDashboard = 128)] = "ToggleDashboard");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.Library = 1)] = "Library"),
            (_[(_.HamburgerMenu = 2)] = "HamburgerMenu"),
            (_[(_.QuickAccessMenu = 4)] = "QuickAccessMenu"),
            (_[(_.GrabHandles = 8)] = "GrabHandles"),
            (_[(_.FrameMenu = 16)] = "FrameMenu"),
            (_[(_.PlayspaceMenu = 32)] = "PlayspaceMenu"),
            (_[(_.AdditionalTopicsLink = 64)] = "AdditionalTopicsLink");
        })(_ || (_ = {}));
      const _ = [
        {
          key: "steamframe-quick-access-menu",
          strTitle: "Quick Access Menu",
          bodyComponent: () =>
            _.createElement(_, {
              enum: _.QuickAccessMenu,
            }),
          BCanShow: () => !0,
          parentOrigin: {
            _: 0.35,
            _: -0.5,
          },
          offsetPixels: {
            _: 0,
            _: 150,
            _: 120,
          },
          rotation: {
            pitch_degrees: 40,
            yaw_degrees: 0,
          },
          parentOverlayKey: "valve.steam.gamepadui.bar",
          GetLocation: () => 1,
          tooltipFlow: 1,
        },
        {
          key: "steam-playspace",
          strTitle: "Playspace Menu",
          bodyComponent: () =>
            _.createElement(_, {
              enum: _.PlayspaceMenu,
            }),
          BCanShow: () => !0,
          parentOrigin: {
            _: 0.1,
            _: -0.5,
          },
          offsetPixels: {
            _: 0,
            _: 150,
            _: 120,
          },
          rotation: {
            pitch_degrees: 40,
            yaw_degrees: 0,
          },
          parentOverlayKey: "valve.steam.gamepadui.bar",
          GetLocation: () => 1,
          tooltipFlow: 1,
        },
        {
          key: "steam-library",
          strTitle: "Library",
          bodyComponent: () =>
            _.createElement(_, {
              enum: _.Library,
            }),
          BCanShow: () => !0,
          parentOrigin: {
            _: -1,
            _: 0.35,
          },
          offsetPixels: {
            _: -500,
            _: -70,
            _: 30,
          },
          rotation: {
            pitch_degrees: 0,
            yaw_degrees: 0,
          },
          parentOverlayKey: "valve.steam.gamepadui.main",
          GetLocation: () => 1,
          tooltipFlow: 0,
        },
      ];
      function _(_) {
        return _.createElement(
          "div",
          {
            className: _.LearningTopicBody,
          },
          _.createElement(
            "div",
            {
              className: _.LearningTopicParagraph,
            },
            "User Guide Reference",
          ),
          _.createElement(
            "div",
            {
              className: _.BodyText,
            },
            "This is the Quick Access menu. Here is where you can restart the guided tour under the help section.",
          ),
        );
      }
      function _(_) {
        return _.createElement(
          "div",
          {
            className: _.LearningTopicBody,
          },
          _.createElement(
            "div",
            {
              className: _.LearningTopicParagraph,
            },
            "Library Topic",
          ),
          _.createElement(
            "div",
            {
              className: _.BodyText,
            },
            "Here's your Library",
          ),
        );
      }
      function _(_) {
        return _.createElement(
          "div",
          {
            className: _.LearningTopicBody,
          },
          _.createElement(
            "div",
            {
              className: _.LearningTopicParagraph,
            },
            "Playspace Menu",
          ),
          _.createElement(
            "div",
            {
              className: _.BodyText,
            },
            "Here you can see your playspae and recenter it.",
          ),
        );
      }
      class _ {
        constructor() {
          (this.m_mapTopicRead = new Map()), (0, _.makeObservable)(this);
        }
        Init() {
          this.FakeTopicReadStatesUntilThisIsReadyForPrimetime();
        }
        FakeTopicReadStatesUntilThisIsReadyForPrimetime() {
          return (0, _._)(this, void 0, void 0, function* () {
            this.allTopics.forEach((_) => {
              (0, _._)(_.key);
            }),
              yield this.LoadAllTopicReadStates();
          });
        }
        get allTopics() {
          return _;
        }
        get showableTopics() {
          return this.allTopics.filter((_) => _.BCanShow());
        }
        get unreadShowableTopics() {
          return this.allTopics.filter((_) => !this.m_mapTopicRead.get(_.key));
        }
        LoadAllTopicReadStates() {
          return (0, _._)(this, void 0, void 0, function* () {
            yield Promise.all(
              this.allTopics.map((_) => this.LoadTopicReadState(_.key)),
            );
          });
        }
        LoadTopicReadState(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            const _ = yield (0, _._)(_);
            (0, _.runInAction)(() => {
              this.m_mapTopicRead.set(_, _);
            });
          });
        }
        get hasAnyReadTopics() {
          return this.m_mapTopicRead.size > 0;
        }
        get hasAnyUnreadTopics() {
          return this.unreadShowableTopics.length > 0;
        }
        IsTopicRead(_) {
          var _;
          return null !== (_ = this.m_mapTopicRead.get(_)) && void 0 !== _ && _;
        }
        MarkTopicsAsRead(_) {
          (0, _._)(_),
            (0, _.runInAction)(() => {
              this.m_mapTopicRead.set(_, !0);
            });
        }
        ClearTopicsRead() {
          return (0, _._)(this, void 0, void 0, function* () {
            this.allTopics.forEach((_) => {
              (0, _._)(_.key);
            }),
              (0, _.runInAction)(() => {
                this.m_mapTopicRead.clear();
              }),
              yield this.LoadAllTopicReadStates();
          });
        }
      }
      (0, _._)([_.observable], _.prototype, "m_mapTopicRead", void 0),
        (0, _._)([_.computed], _.prototype, "unreadShowableTopics", null),
        (0, _._)([_.computed], _.prototype, "hasAnyReadTopics", null),
        (0, _._)([_.computed], _.prototype, "hasAnyUnreadTopics", null);
      new _();
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { children: _, invertParentPanelPitch: _, pitch: _ } = _;
        return _ || 0 != _
          ? _.createElement(
              _.dLy,
              {
                invert_parent_panel_pitch: null != _ && _,
                curvature_pitch: null != _ ? _ : 0,
              },
              _,
            )
          : _.createElement(_.Fragment, null, _);
      }
      function _(_) {
        let _,
          { children: _, offsetPixels: _, offsetMeters: _ } = _;
        return (
          (_ =
            null != _
              ? _
              : {
                  _: 0,
                  _: 0,
                  _: 0,
                }),
          (_ =
            null != _
              ? _
              : {
                  _: 0,
                  _: 0,
                  _: 0,
                }),
          _._.m_fVRGamepadUI_MetersPerPixel &&
            ((_ = (0, _.CUZ)(
              _,
              (0, _.txk)(_, _._.m_fVRGamepadUI_MetersPerPixel),
            )),
            _._ || _._ || _._ || (_ = void 0)),
          _
            ? _.createElement(
                _.dLy,
                {
                  translation: _,
                },
                _,
              )
            : _.createElement(_.Fragment, null, _)
        );
      }
      function _(_) {
        const { children: _, rotation: _ } = _;
        return null != _ && (0 != _._ || 0 != _._ || 0 != _._)
          ? _.createElement(
              _.dLy,
              {
                rotation: _,
              },
              _,
            )
          : _.createElement(_.Fragment, null, _);
      }
      function _(_) {
        return 1 == (null == _ ? void 0 : _.parent_enum) ? 0 : _._;
      }
      function _(_) {
        var _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _;
        const { popupRequest: _, refPanel: _, children: _ } = _,
          _ = (0, _._)(_, ["popupRequest", "refPanel", "children"]),
          _ = null == _ ? void 0 : _.dashboard_popup_id,
          _ = {
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.origin_on_parent) ||
                  void 0 === _
                    ? void 0
                    : _._) && void 0 !== _
                ? _
                : 0,
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.origin_on_parent) ||
                  void 0 === _
                    ? void 0
                    : _._) && void 0 !== _
                ? _
                : 0,
          },
          _ = {
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.origin_on_popup) ||
                  void 0 === _
                    ? void 0
                    : _._) && void 0 !== _
                ? _
                : 0,
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.origin_on_popup) ||
                  void 0 === _
                    ? void 0
                    : _._) && void 0 !== _
                ? _
                : 0,
          },
          _ = {
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.clip_rect) ||
                  void 0 === _
                    ? void 0
                    : _.u_min) && void 0 !== _
                ? _
                : 0,
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.clip_rect) ||
                  void 0 === _
                    ? void 0
                    : _.v_min) && void 0 !== _
                ? _
                : 0,
          },
          _ = {
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.clip_rect) ||
                  void 0 === _
                    ? void 0
                    : _.u_max) && void 0 !== _
                ? _
                : 1,
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.clip_rect) ||
                  void 0 === _
                    ? void 0
                    : _.v_max) && void 0 !== _
                ? _
                : 1,
          },
          _ = {
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.offset) || void 0 === _
                    ? void 0
                    : _.x_pixels) && void 0 !== _
                ? _
                : 0,
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.offset) || void 0 === _
                    ? void 0
                    : _.y_pixels) && void 0 !== _
                ? _
                : 0,
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.offset) || void 0 === _
                    ? void 0
                    : _.z_pixels) && void 0 !== _
                ? _
                : 0,
          },
          _ = {
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.offset) || void 0 === _
                    ? void 0
                    : _.x_meters) && void 0 !== _
                ? _
                : 0,
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.offset) || void 0 === _
                    ? void 0
                    : _.y_meters) && void 0 !== _
                ? _
                : 0,
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.offset) || void 0 === _
                    ? void 0
                    : _.z_meters) && void 0 !== _
                ? _
                : 0,
          },
          _ = {
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.rotation) || void 0 === _
                    ? void 0
                    : _.pitch_degrees) && void 0 !== _
                ? _
                : 0,
            _:
              null !==
                (_ =
                  null === (_ = null == _ ? void 0 : _.rotation) || void 0 === _
                    ? void 0
                    : _.yaw_degrees) && void 0 !== _
                ? _
                : 0,
          },
          _ =
            null === (_ = null == _ ? void 0 : _.inherit_parent_pitch) ||
            void 0 === _ ||
            _,
          _ =
            null === (_ = null == _ ? void 0 : _.inherit_parent_curvature) ||
            void 0 === _ ||
            _,
          _ =
            null === (_ = null == _ ? void 0 : _.interactive) ||
            void 0 === _ ||
            _,
          _ =
            null !== (_ = null == _ ? void 0 : _.only_visible_with_laser) &&
            void 0 !== _ &&
            _;
        let _ =
          null !==
            (_ =
              null === (_ = null == _ ? void 0 : _.scale) || void 0 === _
                ? void 0
                : _.scaler_value) && void 0 !== _
            ? _
            : 1;
        const _ =
            null !== (_ = null == _ ? void 0 : _.sort_order) && void 0 !== _
              ? _
              : 0,
          _ = 1 == _ ? 101 : void 0,
          _ = (function (_) {
            var _, _, _;
            const _ =
                null !== (_ = null == _ ? void 0 : _.parent_overlay_key) &&
                void 0 !== _
                  ? _
                  : "",
              _ =
                null !==
                  (_ =
                    null === (_ = null == _ ? void 0 : _.offset) || void 0 === _
                      ? void 0
                      : _.z_pixels) && void 0 !== _
                  ? _
                  : 0;
            return _ == (0, _.useObserver)(() => _._.dashboardBarOverlayKey) &&
              _ >= 0
              ? -0.5
              : 0;
          })(_);
        let _ = !1,
          _ = !1;
        1 == _ && ((_ = !0), (_ = !0)),
          _.useLayoutEffect(
            () => _.O54.Current().forceLayoutUpdate(),
            [_._, _._, _._, _._],
          );
        const _ = _.useCallback(
            (_) => {
              _._.SetRenderedPanelForRequestID(_, _);
            },
            [_],
          ),
          _ = (0, _._)(_, _),
          _ = _.createElement(
            _,
            {
              invertParentPanelPitch: !_,
            },
            _.createElement(
              _,
              {
                offsetPixels: _,
                offsetMeters: _,
              },
              _.createElement(
                _,
                {
                  rotation: _,
                },
                _.createElement(
                  _.Zkm,
                  Object.assign(
                    {
                      ref: _,
                      debug_name: `${null == _ ? void 0 : _.popup_overlay_key} (popup:${null == _ ? void 0 : _.dashboard_popup_id})`,
                      _: _ ? `PooledPopup-${_.popup_overlay_key}` : void 0,
                      interactive: _,
                      only_visible_with_laser: _,
                      curvature: _ ? "inherit-from-parent-panel" : void 0,
                      overlay_key: null == _ ? void 0 : _.popup_overlay_key,
                      origin: _,
                      meters_per_pixel:
                        (null !==
                          (_ =
                            null === _._ || void 0 === _._
                              ? void 0
                              : _._.m_fVRGamepadUI_MetersPerPixel) &&
                        void 0 !== _
                          ? _
                          : 1) * _,
                      reflect: _(_),
                      sort_depth_bias: _,
                      inputFocusParams: {
                        unSteamInputAppID: _ ? _._ : void 0,
                      },
                      uv_min: _,
                      uv_max: _,
                      sort_order: _,
                      no_depth_test: _,
                      no_depth_write: _,
                      outline: _._.None,
                      frame_resize_scale_factor: 1,
                    },
                    _,
                  ),
                  _,
                ),
              ),
            ),
          );
        return (null == _ ? void 0 : _.parent_overlay_key)
          ? _.createElement(
              _.b$J,
              {
                parent_overlay_key: null == _ ? void 0 : _.parent_overlay_key,
              },
              _.createElement(
                _.Ci8,
                {
                  key: null == _ ? void 0 : _.dashboard_popup_id,
                  location: _,
                },
                _,
              ),
            )
          : (null == _ ? void 0 : _.parent_device_path)
            ? 2 == (null == _ ? void 0 : _.parent_enum)
              ? _.createElement(
                  _.dLy,
                  {
                    parent_path: null == _ ? void 0 : _.parent_device_path,
                  },
                  _.createElement(
                    _.m$_,
                    {
                      rotation_start_angle_threshold: 10,
                      rotation_stop_angle_threshold: 5,
                      rotation_ease_out_angle_threshold: 20,
                      rotation_min_angular_velocity: 75,
                      rotation_ease_in_power: 1.5,
                      lock_to_horizon: !1,
                    },
                    _,
                  ),
                )
              : _.createElement(
                  _.dLy,
                  {
                    parent_path: null == _ ? void 0 : _.parent_device_path,
                  },
                  _,
                )
            : _;
      }
      function _(_) {
        return (
          null != (null == _ ? void 0 : _.parent_device_path) ||
          null != (null == _ ? void 0 : _.parent_enum) ||
          null != (null == _ ? void 0 : _.parent_overlay_key)
        );
      }
      (0, _._)((_) =>
        _.createElement(
          _.Fragment,
          null,
          _._.requests.filter(_).map((_) =>
            _.createElement(_, {
              popupRequest: _,
              key: _.dashboard_popup_id,
            }),
          ),
        ),
      );
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        get allowTravelModePopup() {
          return _._.settings.get("/settings/internal/enableTravelModePopup");
        }
        constructor() {
          (this.m_bRequestTravelModeTracking = !1),
            (this.m_bRequestTravelModeTrackingPopupTriggered = !1),
            (this.m_bEnableTravelMode = !1),
            (this.m_bTravelModeEverSetByUser = !1),
            (0, _.makeObservable)(this);
        }
        Init() {
          return (0, _._)(this, void 0, void 0, function* () {
            var _;
            (this.m_bEnableTravelMode =
              null !==
                (_ =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRPathProperties.GetBoolPathProperty(
                        "/driver_cv/enableTravelMode",
                      )) &&
              void 0 !== _ &&
              _),
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
                  (0, _.action)((_) => {
                    this.m_bEnableTravelMode = _;
                  }),
                ),
              (0, _.reaction)(
                () => _._.Instance.SceneAppKey,
                (_) => {
                  this.m_bRequestTravelModeTrackingPopupTriggered = !1;
                },
              );
          });
        }
        onRequestTravelModeTrackingEvent(_) {
          const _ = _;
          _ || (this.m_bTravelModeEverSetByUser = !1),
            _ != this.m_bRequestTravelModeTracking &&
              ((this.m_bRequestTravelModeTracking = _),
              !_ ||
                this.m_bRequestTravelModeTrackingPopupTriggered ||
                this.m_bTravelModeEverSetByUser ||
                (console.log(
                  "Travel conditions detected. Popup allowed?",
                  this.allowTravelModePopup,
                ),
                this.allowTravelModePopup &&
                  (this.m_bRequestTravelModeTrackingPopupTriggered = !0)));
        }
        SetTravelModeByUser(_) {
          VRHTML.VRPathProperties.SetBoolPathProperty(
            "/driver_cv/enableTravelMode",
            _,
          ),
            (this.m_bRequestTravelModeTrackingPopupTriggered = !1),
            (this.m_bTravelModeEverSetByUser = !0);
        }
      }
      (0, _._)(
        [_.observable],
        _.prototype,
        "m_bRequestTravelModeTracking",
        void 0,
      ),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_bRequestTravelModeTrackingPopupTriggered",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "m_bEnableTravelMode", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "m_bTravelModeEverSetByUser",
          void 0,
        ),
        (0, _._)([_.computed], _.prototype, "allowTravelModePopup", null),
        (0, _._)(
          [_.action.bound],
          _.prototype,
          "onRequestTravelModeTrackingEvent",
          null,
        ),
        (0, _._)([_.action.bound], _.prototype, "SetTravelModeByUser", null);
      const _ = new _();
      window.TravelModeStore = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              _: "0px",
              _: "0px",
              viewBox: "0 0 100 100",
              xmlSpace: "preserve",
            },
            _,
          ),
          _.createElement(
            "g",
            null,
            _.createElement("path", {
              _: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
            }),
          ),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Caution",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M18 1L0 33H36L18 1ZM21.63 12L20.42 22H15.58L14.37 12H21.63ZM18 30C17.4067 30 16.8266 29.8241 16.3333 29.4944C15.8399 29.1648 15.4554 28.6962 15.2284 28.1481C15.0013 27.5999 14.9419 26.9967 15.0576 26.4147C15.1734 25.8328 15.4591 25.2982 15.8787 24.8787C16.2982 24.4591 16.8328 24.1734 17.4147 24.0576C17.9967 23.9419 18.5999 24.0013 19.1481 24.2284C19.6962 24.4554 20.1648 24.8399 20.4944 25.3333C20.8241 25.8266 21 26.4067 21 27C21 27.7956 20.6839 28.5587 20.1213 29.1213C19.5587 29.6839 18.7956 30 18 30Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            _: "M32 4V16H28V10.83L19 19.83L16.19 17L25.19 8H20V4H32ZM28 28H8V8H13V4H4V32H32V23H28V28Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Display",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            _: "M34 6H2V28H10.6L9 34H27L25.4 28H34V6ZM30 24H6V10H30V24Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_VR",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            _: "M33 13.3C33.0114 12.2663 32.7021 11.2545 32.1147 10.4038C31.5273 9.5532 30.6907 8.90553 29.72 8.54998C25.9132 7.45272 21.9604 6.94682 18 7.04998C14.0396 6.94682 10.0868 7.45272 6.28 8.54998C5.30932 8.90553 4.4727 9.5532 3.88531 10.4038C3.29791 11.2545 2.98862 12.2663 3 13.3L0 14.05V20.05L3 20.81C3.08508 22.0931 3.51701 23.3289 4.24968 24.3857C4.98235 25.4424 5.98826 26.2803 7.16 26.81L10.16 28.08C10.7695 28.3298 11.4453 28.3671 12.0785 28.1856C12.7117 28.0042 13.2654 27.6147 13.65 27.08C14.1242 26.3803 14.779 25.8222 15.5449 25.4648C16.3108 25.1074 17.1592 24.964 18 25.05C18.8449 24.9722 19.6951 25.1256 20.4595 25.4937C21.224 25.8619 21.874 26.4309 22.34 27.14C22.7246 27.6747 23.2782 28.0642 23.9115 28.2456C24.5447 28.4271 25.2205 28.3898 25.83 28.14L28.83 26.87C30.0017 26.3403 31.0076 25.5024 31.7403 24.4457C32.473 23.3889 32.9049 22.1531 32.99 20.87L35.99 20.11V14.11L33 13.3ZM22.16 13C20.9452 12.7243 19.7054 12.5735 18.46 12.55C16.9073 12.5083 15.3555 12.6595 13.84 13L13.16 10.08C14.925 9.68481 16.7318 9.50682 18.54 9.54998C19.988 9.57538 21.4292 9.75302 22.84 10.08L22.16 13Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Playspace",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fill: "currentColor",
            _: "M15.6615 10.25C15.3525 10.7125 15.1875 11.2562 15.1875 11.8125C15.1867 12.1821 15.2589 12.5482 15.3999 12.8898C15.541 13.2314 15.7481 13.5417 16.0094 13.8031C16.2708 14.0644 16.5811 14.2715 16.9227 14.4126C17.2643 14.5536 17.6304 14.6258 18 14.625C18.5563 14.625 19.1 14.4601 19.5625 14.151C20.0251 13.842 20.3855 13.4027 20.5984 12.8888C20.8113 12.3749 20.867 11.8094 20.7585 11.2638C20.6499 10.7182 20.3821 10.2171 19.9887 9.82376C19.5954 9.43043 19.0943 9.16256 18.5487 9.05404C18.0031 8.94552 17.4376 9.00122 16.9237 9.21409C16.4098 9.42696 15.9705 9.78745 15.6615 10.25Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M14.4645 17.9645C15.4021 17.0268 16.6739 16.5 18 16.5C19.3261 16.5 20.5979 17.0268 21.5355 17.9645C22.4732 18.9021 23 20.1739 23 21.5V24H21L20.5 29H15.5L15 24H13V21.5C13 20.1739 13.5268 18.9021 14.4645 17.9645Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M18 0L35 7.00016V29L18 36L1 29V7.00016L18 0ZM4 27.7647V9.76471L18 4L32 9.76471V27.7647L24.6111 24.7222L24.1734 27.7864L27.1208 29L18 32.7556L8.87919 29L11.8266 27.7864L11.3889 24.7222L4 27.7647Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_FloorHeight",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fill: "currentColor",
            _: "M11.9358 24.497L1 29L18 36L35 29L24.0637 24.4968L22.5504 27.1181L27.1208 29L18 32.7556L8.87919 29L13.4492 27.1182L11.9358 24.497Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M17.9999 0L23.196 9H18.9999V20H23.1962L18 29L12.8038 20H16.9999V9H12.8037L17.9999 0Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Recenter",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fill: "currentColor",
            _: "M14.7261 2.74994C14.2934 3.39746 14.0625 4.15874 14.0625 4.9375C14.0613 5.45491 14.1624 5.96744 14.3599 6.44568C14.5573 6.92392 14.8473 7.35845 15.2132 7.72431C15.5791 8.09017 16.0136 8.38016 16.4918 8.57763C16.9701 8.7751 17.4826 8.87616 18 8.875C18.7788 8.875 19.54 8.64407 20.1876 8.21141C20.8351 7.77876 21.3398 7.1638 21.6378 6.44432C21.9358 5.72483 22.0138 4.93313 21.8618 4.16933C21.7099 3.40553 21.3349 2.70394 20.7842 2.15327C20.2336 1.6026 19.532 1.22759 18.7682 1.07566C18.0044 0.92373 17.2127 1.00171 16.4932 1.29973C15.7737 1.59775 15.1587 2.10243 14.7261 2.74994Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M13.0503 13.5503C14.363 12.2375 16.1435 11.5 18 11.5C19.8565 11.5 21.637 12.2375 22.9497 13.5503C24.2625 14.863 25 16.6435 25 18.5V22H22.2L21.5 29H14.5L13.8 22H11V18.5C11 16.6435 11.7375 14.863 13.0503 13.5503Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M3 29C3 26.5645 5.66517 24.4196 9.70869 23.1656L10.0112 26.224C9.52728 26.393 9.07639 26.5754 8.66205 26.7688C6.18364 27.9254 6 28.9249 6 29C6 29.0751 6.18364 30.0746 8.66205 31.2312C10.8969 32.2741 14.1952 33 18 33C21.8048 33 25.1031 32.2741 27.3379 31.2312C29.8164 30.0746 30 29.0751 30 29C30 28.9249 29.8164 27.9254 27.3379 26.7688C26.9236 26.5754 26.4727 26.393 25.9888 26.224L26.2913 23.1656C30.3348 24.4196 33 26.5645 33 29C33 32.866 26.2843 36 18 36C9.71573 36 3 32.866 3 29Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_FeatureVisible",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9 23.94 7.94C20.9843 6.77796 17.7541 6.50244 14.6444 7.14712C11.5346 7.7918 8.68012 9.32875 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_FeatureHidden",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            _: "M29.57 11.57L24.82 16.32C24.9485 16.8705 25.0089 17.4347 25 18C25 19.8565 24.2625 21.637 22.9497 22.9497C21.637 24.2625 19.8565 25 18 25C17.423 24.9983 16.8486 24.9244 16.29 24.78L12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M28.94 2.94L23.94 7.94C20.9843 6.77797 17.7541 6.50244 14.6444 7.14712C11.5346 7.79181 8.68012 9.32876 6.43 11.57L0 18L6.43 24.43C6.6 24.6 6.79 24.75 6.97 24.91L3.44 28.44L5.56 30.56L31.06 5.06L28.94 2.94ZM11 18C11.0002 16.8706 11.2736 15.7581 11.7969 14.7573C12.3203 13.7565 13.078 12.8971 14.0054 12.2527C14.9328 11.6082 16.0024 11.1977 17.1229 11.0561C18.2434 10.9146 19.3815 11.0463 20.44 11.44L11.44 20.44C11.1493 19.6593 11.0003 18.833 11 18Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fill: "currentColor",
            _: "M11 9H29V19H26.6585C26.8797 19.6256 27 20.2987 27 21C27 21.3407 26.9716 21.6748 26.917 22H32V6H8V15.083C8.32521 15.0284 8.65929 15 9 15C9.70126 15 10.3744 15.1203 11 15.3415V9Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M9 24C10.6569 24 12 22.6569 12 21C12 19.3431 10.6569 18 9 18C7.34315 18 6 19.3431 6 21C6 22.6569 7.34315 24 9 24Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M21 24C22.6569 24 24 22.6569 24 21C24 19.3431 22.6569 18 21 18C19.3431 18 18 19.3431 18 21C18 22.6569 19.3431 24 21 24Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M26 30C26 27.2386 23.7614 25 21 25C18.2386 25 16 27.2386 16 30V32H26V30Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M14 30C14 27.2386 11.7614 25 9 25C6.23858 25 4 27.2386 4 30V32H14V30Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fill: "currentColor",
            _: "M1 30.6985L7.90454 23.7939C6.78948 23.3564 6 22.2705 6 21.0002C6 19.3434 7.34315 18.0002 9 18.0002C10.2703 18.0002 11.3561 18.7897 11.7937 19.9048L22.6985 9H11V15.3415C10.3744 15.1203 9.70126 15 9 15C8.65929 15 8.32521 15.0284 8 15.083V6H25.6985L30.6985 1L32.8198 3.12132L3.12132 32.8198L1 30.6985Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M22.0095 18.1743L18.1741 22.0097C18.5886 23.17 19.6973 24.0002 21 24.0002C22.6569 24.0002 24 22.6571 24 21.0002C24 19.6976 23.1697 18.5888 22.0095 18.1743Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M8.18356 32.0002H14V30.0002C14 28.9217 13.6585 27.9229 13.0777 27.1061L8.18356 32.0002Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M26 30.0002C26 27.2388 23.7614 25.0002 21 25.0002C18.2386 25.0002 16 27.2388 16 30.0002V32.0002H26V30.0002Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M29 19V11.1836L32 8.18356V22H26.917C26.9716 21.6748 27 21.3407 27 21C27 20.2987 26.8797 19.6256 26.6585 19H29Z",
          }),
        );
      }
      function _(_) {
        const { off: _ } = _,
          _ = (0, _._)(_, ["off"]);
        return _
          ? _.createElement(_, Object.assign({}, _))
          : _.createElement(_, Object.assign({}, _));
      }
      function _(_) {
        const { none: _, partial: _, right: _, left: _ } = _,
          _ = (0, _._)(_, ["none", "partial", "right", "left"]);
        return _
          ? _.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "SVGIcon_Button SVGIcon_ControllerStatus",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                _,
              ),
              _.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                _: "M33.5871 3.5268L31.4417 1.38135L26.6841 6.13886C24.4873 5.49306 21.6236 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 27.1825 1.62275 28.7886 3.01931 29.8037L0.370949 32.452L2.5164 34.5975L33.5871 3.5268ZM23.2678 19.2678C23.0842 19.4513 22.8735 19.6049 22.6433 19.7232L17.3666 25H25L31 31C31 31 36 28.68 36 25.2C36 21.1218 33.3889 11.806 32.7566 9.60992L29.8137 12.5529C29.9361 12.852 30 13.1736 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16C27.1736 16 26.852 15.9361 26.5529 15.8137L23.7232 18.6433C23.6049 18.8735 23.4513 19.0842 23.2678 19.2678ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
              }),
            )
          : _ || _
            ? _.createElement(
                "svg",
                Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "SVGIcon_Button SVGIcon_ControllerStatus",
                    viewBox: "0 0 36 36",
                    fill: "none",
                  },
                  _,
                ),
                _.createElement("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  _: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                }),
                _.createElement("path", {
                  fill: "currentColor",
                  opacity: "0.65",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  _: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                }),
              )
            : _
              ? _.createElement(
                  "svg",
                  Object.assign(
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "SVGIcon_Button SVGIcon_ControllerStatus",
                      viewBox: "0 0 36 36",
                      fill: "none",
                    },
                    _,
                  ),
                  _.createElement("path", {
                    fill: "currentColor",
                    opacity: "0.65",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    _: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                  _.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    _: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                  }),
                )
              : _.createElement(
                  "svg",
                  Object.assign(
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "SVGIcon_Button SVGIcon_ControllerStatus",
                      viewBox: "0 0 36 36",
                      fill: "none",
                    },
                    _,
                  ),
                  _.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    _: "M32.62 9.14C32.62 9.14 28.5 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Minimize",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            _: "M32 27V32H4V27H32ZM29 10.77L25.48 7.22998L18 14.72L10.5 7.22998L7 10.77L18 21.77L29 10.77Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_TheaterMode",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fill: "currentColor",
            _: "M18 1C8.4375 1 1 3 1 3V23C1 23 5.70777 21.734 12.448 21.2165L18.0004 15.6641L23.5529 21.2166C30.2926 21.7342 35 23 35 23V3C35 3 27.5625 1 18 1Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M8 31.3209L11.2 34.5391L18 27.73L24.8182 34.5391L28 31.3209L18 21.3209L8 31.3209Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Close",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            _: "M32.12 7.41L28.59 3.88L18 14.46L7.41 3.88L3.88 7.41L14.46 18L3.88 28.59L7.41 32.12L18 21.54L28.59 32.12L32.12 28.59L21.54 18L32.12 7.41Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fill: "currentColor",
            _: "M9.82998 20L13.41 23.59L10.59 26.41L2.16998 18L10.59 9.59L13.41 12.41L9.82998 16H22V20H9.82998ZM20.15 4H18V8H20.15C22.8021 8 25.3457 9.05357 27.2211 10.9289C29.0964 12.8043 30.15 15.3478 30.15 18C30.15 20.6522 29.0964 23.1957 27.2211 25.0711C25.3457 26.9464 22.8021 28 20.15 28H18V32H20.15C23.863 32 27.424 30.525 30.0495 27.8995C32.675 25.274 34.15 21.713 34.15 18C34.15 14.287 32.675 10.726 30.0495 8.1005C27.424 5.475 23.863 4 20.15 4Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            _: "M33 18C33.0014 20.7047 32.2715 23.3594 30.8875 25.6832C29.5035 28.0069 27.517 29.9133 25.1382 31.2004C22.7594 32.4875 20.0769 33.1075 17.3746 32.9947C14.6722 32.8819 12.0507 32.0406 9.7874 30.5597C7.52413 29.0789 5.70334 27.0137 4.5178 24.5827C3.33226 22.1517 2.82607 19.4454 3.05281 16.7502C3.27955 14.0551 4.2308 11.4714 5.80584 9.2726C7.38089 7.07385 9.52113 5.34187 12 4.26V8.79C10.0125 10.0834 8.49624 11.9845 7.67712 14.2098C6.85801 16.4351 6.77992 18.8655 7.45451 21.1388C8.12909 23.4121 9.52023 25.4066 11.4206 26.8249C13.3209 28.2433 15.6287 29.0095 18 29.0095C20.3713 29.0095 22.6791 28.2433 24.5794 26.8249C26.4798 25.4066 27.8709 23.4121 28.5455 21.1388C29.2201 18.8655 29.142 16.4351 28.3229 14.2098C27.5038 11.9845 25.9875 10.0834 24 8.79V4.26C26.6738 5.42694 28.9493 7.34824 30.5478 9.78866C32.1463 12.2291 32.9985 15.0827 33 18ZM20 1H16V15H20V1Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            _: "M17.974 3C10.0808 3 3.61438 9.07573 3 16.7967L11.0534 20.121C11.7357 19.6551 12.56 19.383 13.447 19.383C13.5265 19.383 13.6056 19.3849 13.684 19.3892L17.2658 14.2073C17.2658 14.1826 17.2652 14.1585 17.2652 14.1342C17.2652 11.0149 19.807 8.47686 22.9319 8.47686C26.0568 8.47686 28.5987 11.0149 28.5987 14.1342C28.5987 17.2532 26.0568 19.7915 22.9319 19.7915C22.8887 19.7915 22.8463 19.7903 22.8035 19.7889L17.6954 23.4276C17.6981 23.4944 17.7004 23.5615 17.7004 23.6287C17.7004 25.9704 15.7923 27.8749 13.447 27.8749C11.3885 27.8749 9.66695 26.4079 9.27686 24.4652L3.51756 22.0881C5.30075 28.3844 11.0953 33 17.974 33C26.2726 33 33 26.2842 33 18.0001C32.9999 9.71534 26.2725 3 17.974 3Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M12.4163 25.7599L10.5704 24.9989C10.8977 25.6791 11.4633 26.2478 12.2149 26.5608C13.8388 27.2363 15.7116 26.4665 16.3884 24.8446C16.7162 24.0596 16.7186 23.193 16.3933 22.4064C16.0691 21.6196 15.457 21.0054 14.6698 20.6778C13.889 20.3538 13.0526 20.3656 12.317 20.6422L14.2241 21.4296C15.4222 21.928 15.9884 23.3013 15.4894 24.497C14.9906 25.6931 13.6143 26.2586 12.4163 25.7599Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M26.7079 14.1338C26.7079 12.0555 25.0142 10.3645 22.9321 10.3645C20.8502 10.3645 19.1559 12.0554 19.1559 14.1338C19.1559 16.2122 20.8501 17.9027 22.9321 17.9027C25.0141 17.9027 26.7079 16.2122 26.7079 14.1338ZM20.1018 14.1273C20.1018 12.5634 21.372 11.296 22.9384 11.296C24.505 11.296 25.7749 12.5634 25.7749 14.1273C25.7749 15.6912 24.5051 16.9586 22.9384 16.9586C21.372 16.9585 20.1018 15.6912 20.1018 14.1273Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            _: "M33 20.38V15.62L29.07 14.9C28.8121 14.015 28.453 13.1628 28 12.36L30.27 9.08L26.92 5.71L23.64 8C22.8372 7.54696 21.985 7.18793 21.1 6.93L20.38 3H15.62L14.9 6.93C14.015 7.18793 13.1628 7.54696 12.36 8L9.08 5.71L5.71 9.08L8 12.36C7.54696 13.1628 7.18793 14.015 6.93 14.9L3 15.62V20.38L6.93 21.1C7.18793 21.985 7.54696 22.8372 8 23.64L5.71 26.92L9.08 30.29L12.36 28C13.1637 28.4461 14.0159 28.7984 14.9 29.05L15.62 33H20.38L21.1 29.07C21.985 28.8121 22.8372 28.453 23.64 28L26.92 30.27L30.29 26.9L28 23.64C28.4461 22.8363 28.7984 21.9841 29.05 21.1L33 20.38ZM18 23C17.0111 23 16.0444 22.7068 15.2221 22.1573C14.3999 21.6079 13.759 20.827 13.3806 19.9134C13.0022 18.9998 12.9031 17.9945 13.0961 17.0245C13.289 16.0546 13.7652 15.1637 14.4645 14.4645C15.1637 13.7652 16.0546 13.289 17.0245 13.0961C17.9945 12.9031 18.9998 13.0022 19.9134 13.3806C20.827 13.759 21.6079 14.3999 22.1573 15.2221C22.7068 16.0444 23 17.0111 23 18C23 18.6566 22.8707 19.3068 22.6194 19.9134C22.3681 20.52 21.9998 21.0712 21.5355 21.5355C21.0712 21.9998 20.52 22.3681 19.9134 22.6194C19.3068 22.8707 18.6566 23 18 23Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fill: "currentColor",
            _: "M5 9H27V14.219C28.349 14.3875 29.6858 14.6529 31 15.0138V5H1V27H8V23H5V9Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M32.6676 21.1123C32.6751 20.4336 32.472 19.7693 32.0864 19.2107C31.7007 18.6522 31.1514 18.227 30.514 17.9935C28.0145 17.2731 25.4191 16.9409 22.8187 17.0086C20.2183 16.9409 17.6229 17.2731 15.1234 17.9935C14.4861 18.227 13.9368 18.6522 13.5511 19.2107C13.1654 19.7693 12.9623 20.4336 12.9698 21.1123L11 21.6048V25.5443L12.9698 26.0434C13.0256 26.8858 13.3093 27.6973 13.7903 28.3911C14.2714 29.085 14.9319 29.6352 15.7012 29.9829L17.671 30.8168C18.0712 30.9809 18.5149 31.0053 18.9307 30.8862C19.3465 30.7671 19.71 30.5113 19.9625 30.1602C20.2739 29.7008 20.7038 29.3344 21.2067 29.0997C21.7096 28.865 22.2666 28.7709 22.8187 28.8273C23.3735 28.7763 23.9317 28.877 24.4336 29.1187C24.9356 29.3604 25.3624 29.734 25.6683 30.1996C25.9209 30.5507 26.2844 30.8064 26.7002 30.9256C27.1159 31.0447 27.5597 31.0203 27.9599 30.8562L29.9296 30.0223C30.699 29.6746 31.3595 29.1244 31.8405 28.4305C32.3216 27.7367 32.6052 26.9252 32.6611 26.0828L34.6309 25.5837V21.6442L32.6676 21.1123ZM25.5502 20.9154C24.7525 20.7343 23.9385 20.6353 23.1207 20.6199C22.1013 20.5926 21.0823 20.6918 20.0873 20.9154L19.6408 18.9981C20.7997 18.7386 21.986 18.6218 23.1733 18.6501C24.124 18.6668 25.0703 18.7834 25.9966 18.9981L25.5502 20.9154Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fill: "currentColor",
            _: "M27.6606 9H5.44666V22.8569H12.2301C11.9392 24.1289 11.6473 25.5974 11.5322 26.8569H1.44666V5H31.6606V14.4497C30.5713 14.0391 29.2449 13.6862 27.6606 13.4886V9Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M27.6606 17.1831C28.209 17.267 28.708 17.3724 29.1599 17.4909C30.064 17.7279 30.7797 18.0171 31.3256 18.2903C31.4454 18.3502 31.557 18.4094 31.6606 18.467C30.8488 18.0152 29.547 17.4717 27.6606 17.1831Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M25.4122 23.4571C25.4563 23.2356 25.5551 23.0294 25.6989 22.8569C25.6116 22.9616 25.5409 23.0788 25.489 23.2042C25.4562 23.2833 25.4309 23.3657 25.4136 23.4504L25.4122 23.4571C25.4032 23.5025 25.3966 23.5482 25.3923 23.594C25.3883 23.636 25.3863 23.6781 25.3863 23.7201C25.3863 23.8501 25.4051 23.9796 25.4423 24.1046C25.4556 24.1491 25.4711 24.1929 25.489 24.236C25.5229 24.318 25.5647 24.396 25.6135 24.4691C25.7114 24.6156 25.8376 24.7422 25.9855 24.841C26.0593 24.8903 26.1374 24.932 26.2186 24.9656C26.2566 24.9814 26.2954 24.9954 26.3347 25.0076C26.4634 25.0476 26.5982 25.0682 26.7344 25.0682C26.7344 25.0682 26.7345 25.0682 26.7344 25.0682C26.4678 25.0682 26.2072 24.9892 25.9855 24.841C25.7638 24.6929 25.591 24.4823 25.489 24.236C25.3869 23.9897 25.3602 23.7186 25.4122 23.4571Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M26.8831 25.06C26.9203 25.0559 26.9573 25.0502 26.9941 25.043C26.9593 25.0498 26.9243 25.0552 26.8892 25.0593C26.8872 25.0595 26.8851 25.0598 26.8831 25.06Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M29.9698 22.9113C29.7032 22.9113 29.4426 22.8322 29.2209 22.6841C28.9992 22.5359 28.8264 22.3254 28.7243 22.0791C28.6223 21.8327 28.5956 21.5617 28.6476 21.3002C28.6996 21.0387 28.828 20.7985 29.0166 20.6099C29.1462 20.4803 29.3002 20.3791 29.4688 20.3116C29.3993 20.3394 29.3323 20.373 29.2685 20.4119C29.1774 20.4674 29.0928 20.5337 29.0166 20.6099C28.8619 20.7646 28.7477 20.9541 28.683 21.1616C28.6688 21.207 28.657 21.2532 28.6476 21.3002C28.6303 21.3872 28.6218 21.4753 28.6218 21.5632C28.6218 21.7393 28.6563 21.9147 28.7243 22.0791C28.7578 22.1598 28.7989 22.2366 28.8467 22.3087L28.849 22.3121C28.9469 22.4586 29.073 22.5852 29.2209 22.6841C29.2946 22.7334 29.3728 22.775 29.454 22.8086C29.6096 22.8731 29.7765 22.9081 29.9463 22.911L29.9698 22.9113C29.9698 22.9113 29.9698 22.9113 29.9698 22.9113Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "M29.7314 20.2363C29.7232 20.2378 29.715 20.2393 29.7069 20.241Z",
          }),
          _.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M33.1222 19.2292C33.1222 19.2292 30.8333 17 25 17C19.1667 17 16.8778 19.2292 16.8778 19.2292C16.8778 19.2292 15 25.3785 15 27.8769C15 29.7508 17.7778 31 17.7778 31L21.1111 27.7692H28.8889L32.2222 31C32.2222 31 35 29.7508 35 27.8769C35 25.3785 33.1222 19.2292 33.1222 19.2292ZM23.3333 23.4615H21.6667V25.0769H20V23.4615H18.3333V21.8462H20V20.2308H21.6667V21.8462H23.3333V23.4615ZM26.9444 25.0769C26.6697 25.0769 26.4012 24.998 26.1728 24.8501C25.9444 24.7021 25.7664 24.4919 25.6613 24.2459C25.5561 23.9999 25.5286 23.7293 25.5822 23.4681C25.6358 23.207 25.7681 22.9672 25.9623 22.7789C26.1566 22.5906 26.4041 22.4624 26.6735 22.4105C26.9429 22.3585 27.2222 22.3852 27.4759 22.4871C27.7297 22.589 27.9466 22.7615 28.0993 22.9829C28.2519 23.2043 28.3333 23.4645 28.3333 23.7308C28.3333 23.9075 28.2974 24.0826 28.2276 24.2459C28.1578 24.4092 28.0555 24.5576 27.9265 24.6826C27.7976 24.8076 27.6444 24.9068 27.4759 24.9745C27.3074 25.0421 27.1268 25.0769 26.9444 25.0769ZM30.2778 22.9231C30.0031 22.9231 29.7345 22.8441 29.5061 22.6962C29.2777 22.5483 29.0997 22.3381 28.9946 22.0921C28.8895 21.8461 28.862 21.5754 28.9156 21.3143C28.9692 21.0532 29.1014 20.8133 29.2957 20.625C29.4899 20.4368 29.7374 20.3086 30.0068 20.2566C30.2762 20.2047 30.5555 20.2314 30.8093 20.3332C31.0631 20.4351 31.28 20.6077 31.4326 20.829C31.5852 21.0504 31.6667 21.3107 31.6667 21.5769C31.6667 21.9339 31.5203 22.2763 31.2599 22.5288C30.9994 22.7812 30.6461 22.9231 30.2778 22.9231Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M34 6H2V11H34V6ZM34 15H13V30H34V15ZM2 15H9V30H2V15Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            _: "M34 10H2V6H34V10ZM34 16H2V20H34V16ZM34 26H2V30H34V26Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M85.333 166.319V732.042C202.206 825.73 350.554 881.775 512 881.775C673.445 881.775 821.794 825.73 938.666 732.042V166.319C821.794 260.008 673.445 316.053 512 316.053C350.554 316.053 202.206 260.008 85.333 166.319ZM143.222 536.569L282.569 675.917L300.236 609.986C367.152 630.833 438.291 642.069 512 642.069C583.764 642.069 653.097 631.431 718.458 611.625L735.68 675.917L875.028 536.569L684.68 485.556L703.722 556.639C643.111 575.194 578.736 585.181 512 585.181C443.305 585.181 377.125 574.597 314.972 554.986L333.569 485.556L143.222 536.569Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1024 1024",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M134.486 767.986L29.2778 873.194L89.6112 933.528L934.375 88.7778L874.028 28.4445L590.931 311.542C565.028 314.528 538.695 316.056 512 316.056C350.556 316.056 202.208 260.014 85.3334 166.319V732.042C101.153 744.722 117.556 756.722 134.486 767.986ZM254.556 647.917L340.111 562.361C331.667 560.069 323.278 557.611 314.972 554.986L333.57 485.556L143.222 536.569L254.556 647.917Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M512 881.778C436.764 881.778 364.375 869.597 296.695 847.125L501.833 642L506.945 642.056L512 642.069C583.764 642.069 653.097 631.431 718.458 611.625L735.681 675.917L875.028 536.569L684.681 485.556L703.722 556.639C657.903 570.667 609.917 579.792 560.403 583.417L938.667 205.167V732.042C821.792 825.736 673.445 881.778 512 881.778Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("circle", {
            _: "18",
            _: "7.5",
            _: "3.5",
            fill: "currentColor",
          }),
          _.createElement("circle", {
            _: "18",
            _: "18",
            _: "3.5",
            fill: "currentColor",
          }),
          _.createElement("circle", {
            _: "18",
            _: "28.5",
            _: "3.5",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM18 29C17.4067 29 16.8266 28.8241 16.3333 28.4944C15.8399 28.1648 15.4554 27.6962 15.2284 27.1481C15.0013 26.5999 14.9419 25.9967 15.0577 25.4147C15.1734 24.8328 15.4591 24.2982 15.8787 23.8787C16.2982 23.4591 16.8328 23.1734 17.4147 23.0576C17.9967 22.9419 18.5999 23.0013 19.1481 23.2284C19.6962 23.4554 20.1648 23.8399 20.4944 24.3333C20.8241 24.8266 21 25.4067 21 26C21 26.7956 20.6839 27.5587 20.1213 28.1213C19.5587 28.6839 18.7957 29 18 29ZM21.08 18.15C20.8072 18.2992 20.5779 18.517 20.4149 18.7817C20.2518 19.0465 20.1605 19.3492 20.15 19.66V21H15.85V19.66C15.8546 18.6058 16.1336 17.571 16.6597 16.6575C17.1857 15.744 17.9406 14.9832 18.85 14.45C19.159 14.2565 19.3975 13.9689 19.5306 13.6294C19.6636 13.29 19.6839 12.9169 19.5887 12.565C19.4934 12.2131 19.2876 11.9012 19.0015 11.6752C18.7155 11.4492 18.3644 11.3212 18 11.31C17.7781 11.31 17.5583 11.3537 17.3533 11.4386C17.1482 11.5236 16.9619 11.6481 16.805 11.805C16.6481 11.9619 16.5236 12.1482 16.4387 12.3533C16.3537 12.5583 16.31 12.7781 16.31 13H12C12.0002 11.9508 12.2755 10.9199 12.7984 10.0103C13.3214 9.10064 14.0738 8.34406 14.9805 7.81602C15.8872 7.28799 16.9165 7.00695 17.9657 7.00096C19.015 6.99497 20.0474 7.26423 20.9601 7.78188C21.8728 8.29953 22.6337 9.04747 23.1671 9.95106C23.7004 10.8547 23.9875 11.8823 23.9996 12.9315C24.0117 13.9807 23.7485 15.0147 23.2362 15.9304C22.7239 16.8461 21.9805 17.6114 21.08 18.15Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M18 4L23 9H13L18 4ZM2 30V13H34V30H2ZM5 17H7V19H5V17ZM7 21H5V23H7V21ZM5 25H7V27H5V25ZM11 17H9V19H11V17ZM9 21H11V23H9V21ZM15 17H13V19H15V17ZM13 21H15V23H13V21ZM27 27V25H9V27H27ZM17 19V17H19V19H17ZM19 23V21H17V23H19ZM21 17H23V19H21V17ZM27 17H25V19H27V17ZM29 17H31V19H29V17ZM23 21H21V23H23V21ZM25 21H27V23H25V21ZM31 21H29V23H31V21ZM29 25H31V27H29V25Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M2 6H34V23H2V6ZM5 10H7V12H5V10ZM7 14H5V16H7V14ZM5 18H7V20H5V18ZM11 10H9V12H11V10ZM9 14H11V16H9V14ZM15 10H13V12H15V10ZM13 14H15V16H13V14ZM27 18H9V20H27V18ZM17 10H19V12H17V10ZM19 14H17V16H19V14ZM21 10H23V12H21V10ZM27 10H25V12H27V10ZM29 10H31V12H29V10ZM23 14H21V16H23V14ZM25 14H27V16H25V14ZM31 14H29V16H31V14ZM29 18H31V20H29V18ZM18 32L23 27H13L18 32Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M2 9H34V27H2V9ZM5 13H7V15H5V13ZM7 21H5V23H7V21ZM5 17H9V19H5V17ZM11 13H9V15H11V13ZM9 21H27V23H9V21ZM15 13H13V15H15V13ZM11 17H13V19H11V17ZM19 13H17V15H19V13ZM15 17H17V19H15V17ZM21 17H19V19H21V17ZM21 13H23V15H21V13ZM25 17H23V19H25V17ZM25 13H27V15H25V13ZM31 13H29V15H31V13ZM29 21H31V23H29V21ZM31 17H27V19H31V17Z",
          }),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
            {
              className: (0, _._)(_.className, _().Spinner),
            },
          ),
          _.createElement("path", {
            _: "M18 10C17.4696 10 16.9609 9.78929 16.5858 9.41421C16.2107 9.03914 16 8.53043 16 8V3H20V8C20 8.53043 19.7893 9.03914 19.4142 9.41421C19.0391 9.78929 18.5304 10 18 10Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M23.66 12.34C23.2875 11.9653 23.0784 11.4584 23.0784 10.93C23.0784 10.4016 23.2875 9.89473 23.66 9.52L27.19 6L30 8.81L26.47 12.34C26.0957 12.7095 25.5909 12.9166 25.065 12.9166C24.5391 12.9166 24.0343 12.7095 23.66 12.34Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M33 20H28C27.4696 20 26.9609 19.7893 26.5858 19.4142C26.2107 19.0391 26 18.5304 26 18C26 17.4696 26.2107 16.9609 26.5858 16.5858C26.9609 16.2107 27.4696 16 28 16H33V20Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M27.19 30L23.66 26.46C23.2875 26.0853 23.0784 25.5783 23.0784 25.05C23.0784 24.5216 23.2875 24.0147 23.66 23.64C23.8458 23.454 24.0663 23.3065 24.3091 23.2059C24.5519 23.1052 24.8122 23.0534 25.075 23.0534C25.3378 23.0534 25.5981 23.1052 25.8409 23.2059C26.0837 23.3065 26.3043 23.454 26.49 23.64L30 27.19L27.19 30Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M20 33H16V28C16 27.4696 16.2107 26.9609 16.5858 26.5858C16.9609 26.2107 17.4696 26 18 26C18.5304 26 19.0391 26.2107 19.4142 26.5858C19.7893 26.9609 20 27.4696 20 28V33Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M8.81 30L6 27.19L9.53 23.66C9.71575 23.474 9.93632 23.3265 10.1791 23.2259C10.4219 23.1252 10.6822 23.0734 10.945 23.0734C11.2078 23.0734 11.4681 23.1252 11.7109 23.2259C11.9537 23.3265 12.1743 23.474 12.36 23.66C12.7325 24.0347 12.9416 24.5416 12.9416 25.07C12.9416 25.5984 12.7325 26.1053 12.36 26.48L8.81 30Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M8 20H3V16H8C8.53043 16 9.03914 16.2107 9.41421 16.5858C9.78929 16.9609 10 17.4696 10 18C10 18.5304 9.78929 19.0391 9.41421 19.4142C9.03914 19.7893 8.53043 20 8 20Z",
            fill: "currentColor",
          }),
          _.createElement("path", {
            _: "M9.51 12.34L6 8.81L8.81 6L12.34 9.54C12.7125 9.91472 12.9216 10.4216 12.9216 10.95C12.9216 11.4784 12.7125 11.9853 12.34 12.36C12.1529 12.5446 11.9313 12.6906 11.6878 12.7895C11.4443 12.8885 11.1837 12.9385 10.9209 12.9366C10.658 12.9347 10.3981 12.8811 10.156 12.7787C9.91396 12.6764 9.69443 12.5273 9.51 12.34Z",
            fill: "currentColor",
          }),
        );
      }
      function _(_) {
        const { type: _, partial: _ } = _,
          _ = (0, _._)(_, ["type", "partial"]),
          [_, _] = (0, _._)();
        return "triton" == _
          ? _.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                _,
              ),
              _.createElement(
                "g",
                {
                  clipPath: _,
                },
                _.createElement("path", {
                  fill: "currentColor",
                  _: "M34.5489 14.8979C34.0471 13.107 33.4146 11.3703 32.6633 9.69886C31.5496 7.22244 29.0787 5.63623 26.3628 5.63623H9.539C6.82361 5.63623 4.35214 7.22244 3.23897 9.69886C2.48764 11.3703 1.85526 13.107 1.35345 14.8979C0.452174 18.1113 -0.0302734 21.4994 -0.0302734 25.0005C-0.0302734 25.6495 -0.0136754 26.2952 0.0189672 26.9359C0.121874 28.9492 1.77614 30.5332 3.79169 30.5332C5.15659 30.5332 6.41639 29.7979 7.0836 28.6073C7.09136 28.5929 7.09967 28.5791 7.10742 28.5647C7.86815 27.2191 9.29118 26.3837 10.837 26.3837H25.0637C26.6095 26.3837 28.0325 27.2191 28.7932 28.5647C28.801 28.5785 28.8092 28.5929 28.817 28.6067C29.4843 29.7974 30.744 30.5327 32.1089 30.5327C34.1251 30.5327 35.7788 28.9492 35.8817 26.9353C35.9143 26.294 35.9309 25.649 35.9309 25C35.9309 21.4989 35.4485 18.1107 34.5477 14.8973L34.5489 14.8979ZM25.2634 8.40256C26.0274 8.40256 26.6466 9.02167 26.6466 9.78573C26.6466 10.5498 26.0274 11.1689 25.2634 11.1689C24.4993 11.1689 23.8802 10.5498 23.8802 9.78573C23.8802 9.02167 24.4993 8.40256 25.2634 8.40256ZM26.6466 15.3184C26.6466 16.0825 26.0274 16.7016 25.2634 16.7016C24.4993 16.7016 23.8802 16.0825 23.8802 15.3184C23.8802 14.5544 24.4993 13.9352 25.2634 13.9352C26.0274 13.9352 26.6466 14.5544 26.6466 15.3184ZM10.6383 9.78573C12.1659 9.78573 13.4047 11.0245 13.4047 12.552C13.4047 14.0796 12.1659 15.3184 10.6383 15.3184C9.11076 15.3184 7.87203 14.0796 7.87203 12.552C7.87203 11.0245 9.11076 9.78573 10.6383 9.78573ZM13.6913 19.262L13.0506 23.3059C12.9886 23.6982 12.6202 23.9659 12.2279 23.904L8.18409 23.2633C7.79179 23.2013 7.52403 22.8328 7.58597 22.4406L8.2267 18.3968C8.28864 18.0045 8.65712 17.7367 9.04936 17.7987L13.0932 18.4394C13.4855 18.5013 13.7532 18.8698 13.6913 19.262ZM21.1139 12.552C21.1139 11.788 21.733 11.1689 22.4971 11.1689C23.2611 11.1689 23.8802 11.788 23.8802 12.552C23.8802 13.3161 23.2611 13.9352 22.4971 13.9352C21.733 13.9352 21.1139 13.3161 21.1139 12.552ZM27.7177 23.2633L23.6738 23.904C23.2816 23.9659 22.9131 23.6987 22.8511 23.3059L22.2105 19.262C22.1485 18.8698 22.4157 18.5013 22.8086 18.4394L26.8524 17.7987C27.2446 17.7367 27.6131 18.0045 27.6751 18.3968L28.3158 22.4406C28.3777 22.8328 28.11 23.2013 27.7177 23.2633ZM28.0297 13.9352C27.2657 13.9352 26.6466 13.3161 26.6466 12.552C26.6466 11.788 27.2657 11.1689 28.0297 11.1689C28.7938 11.1689 29.4129 11.788 29.4129 12.552C29.4129 13.3161 28.7938 13.9352 28.0297 13.9352Z",
                }),
              ),
              _.createElement(
                "defs",
                null,
                _.createElement(
                  "clipPath",
                  {
                    _: _,
                  },
                  _.createElement("rect", {
                    fill: "currentColor",
                    width: "36",
                    height: "36",
                  }),
                ),
              ),
            )
          : "steam" == _
            ? _.createElement(
                "svg",
                Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 36 36",
                    fill: "none",
                  },
                  _,
                ),
                _.createElement(
                  "g",
                  {
                    clipPath: _,
                  },
                  _.createElement("path", {
                    fill: "currentColor",
                    _: "M5.625 31.0429C0.0351562 31.0429 0.0351562 24.75 0.0351562 24.75C0.0351562 23.2708 0.691018 18.9574 1.67867 14.9078C2.09604 21.229 4.23237 26.4107 7.46967 30.1342C6.94663 30.6907 6.34611 31.0429 5.625 31.0429Z",
                  }),
                  _.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    _: "M8.16687 29.2194C4.59849 25.0137 2.43205 18.8213 2.76162 11.0707C3.47054 8.93505 4.26138 7.27235 5.0625 6.76752C8.1706 5.06632 27.6869 4.8903 31.0078 6.76752C31.7909 7.26099 32.5642 8.86083 33.2607 10.9273C33.6225 18.7277 31.4618 24.9603 27.8856 29.1914C27.4035 28.4325 26.984 27.5272 26.5768 26.6483C25.7189 24.7967 24.9154 23.0625 23.6953 23.0625H12.375C11.1549 23.0625 10.3514 24.7967 9.49349 26.6483C9.08125 27.538 8.65647 28.4548 8.16687 29.2194ZM18 12.9375C18.7766 12.9375 19.4062 12.3079 19.4062 11.5312C19.4062 10.7546 18.7766 10.125 18 10.125C17.2234 10.125 16.5938 10.7546 16.5938 11.5312C16.5938 12.3079 17.2234 12.9375 18 12.9375ZM22.5 15.75C22.5 16.3713 21.9963 16.875 21.375 16.875C20.7537 16.875 20.25 16.3713 20.25 15.75C20.25 15.1286 20.7537 14.625 21.375 14.625C21.9963 14.625 22.5 15.1286 22.5 15.75ZM15.75 18.8437C15.75 19.931 14.8686 20.8125 13.7812 20.8125C12.6939 20.8125 11.8125 19.931 11.8125 18.8437C11.8125 17.7564 12.6939 16.875 13.7812 16.875C14.8686 16.875 15.75 17.7564 15.75 18.8437ZM24.75 18C24.75 18.6213 24.2463 19.125 23.625 19.125C23.0037 19.125 22.5 18.6213 22.5 18C22.5 17.3786 23.0037 16.875 23.625 16.875C24.2463 16.875 24.75 17.3786 24.75 18ZM21.375 21.375C21.9963 21.375 22.5 20.8713 22.5 20.25C22.5 19.6286 21.9963 19.125 21.375 19.125C20.7537 19.125 20.25 19.6286 20.25 20.25C20.25 20.8713 20.7537 21.375 21.375 21.375ZM20.25 18C20.25 18.6213 19.7463 19.125 19.125 19.125C18.5037 19.125 18 18.6213 18 18C18 17.3786 18.5037 16.875 19.125 16.875C19.7463 16.875 20.25 17.3786 20.25 18ZM13.5 12.375C13.5 14.8602 11.4853 16.875 9 16.875C6.51472 16.875 4.5 14.8602 4.5 12.375C4.5 9.88969 6.51472 7.87497 9 7.87497C11.4853 7.87497 13.5 9.88969 13.5 12.375ZM27 16.875C29.4853 16.875 31.5 14.8602 31.5 12.375C31.5 9.88969 29.4853 7.87497 27 7.87497C24.5147 7.87497 22.5 9.88969 22.5 12.375C22.5 14.8602 24.5147 16.875 27 16.875Z",
                  }),
                  _.createElement("path", {
                    fill: "currentColor",
                    _: "M28.5791 30.1112C29.1072 30.6809 29.7143 31.0429 30.4453 31.0429C36.0352 31.0429 36.0352 24.75 36.0352 24.75C36.0352 23.2544 35.3647 18.8614 34.3587 14.7732C33.9637 21.1424 31.8281 26.3629 28.5791 30.1112Z",
                  }),
                ),
                _.createElement(
                  "defs",
                  null,
                  _.createElement(
                    "clipPath",
                    {
                      _: _,
                    },
                    _.createElement("rect", {
                      fill: "currentColor",
                      width: "36",
                      height: "36",
                    }),
                  ),
                ),
              )
            : "xbox" == _
              ? _
                ? _.createElement(
                    "svg",
                    Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        version: "1.1",
                        _: "Layer_1",
                        _: "0px",
                        _: "0px",
                        viewBox: "0 0 36 36",
                      },
                      _,
                    ),
                    _.createElement("path", {
                      fill: "currentColor",
                      opacity: "0.5",
                      _: "M12.9,6.2c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.2-0.5-0.4-1.2-0.4c-1.1,0-4.5,1.1-5.1,1.7S5.6,8.4,5.6,8.4v0.1  c-0.4,0.3-0.8,0.7-1.1,1C3.4,10.7,0,20.2,0,25.3s3.4,5.6,3.4,5.6c0.9,0,2.3-1.8,3.7-3.5c1.2-1.5,2.3-3,3.1-3.2  c0.8-0.3,4.4-0.4,7.9-0.4V6.2H12.9z M8.4,14.6c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1,2.2,2.2S9.7,14.6,8.4,14.6z M15.8,18.8  c0,0.3-0.3,0.6-0.6,0.6h-0.8v0.8c0,0.3-0.3,0.6-0.6,0.6h-1.1c-0.3,0-0.6-0.3-0.6-0.6v-0.8h-0.8c-0.3,0-0.6-0.3-0.6-0.6v-1.1  c0-0.3,0.3-0.6,0.6-0.6h0.8v-0.8c0-0.3,0.3-0.6,0.6-0.6h1.1c0.3,0,0.6,0.3,0.6,0.6v0.8h0.8c0.3,0,0.6,0.3,0.6,0.6V18.8z",
                    }),
                    _.createElement("path", {
                      fill: "currentColor",
                      _: "M31.5,9.6c-0.3-0.3-0.7-0.6-1.1-1V8.4c0,0,0-0.6-0.6-1.1s-3.9-1.7-5.1-1.7c-0.7,0-0.9,0.2-1.2,0.4c-0.2,0.1-0.3,0.2-0.5,0.2  H18v17.6c3.5,0,7,0.1,7.9,0.4c0.8,0.3,1.9,1.7,3.1,3.2c1.4,1.7,2.8,3.5,3.7,3.5c0,0,3.4-0.6,3.4-5.6S32.6,10.7,31.5,9.6z M27.6,8.7  c0.8,0,1.4,0.6,1.4,1.4s-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4S26.8,8.7,27.6,8.7z M23.1,20.2c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2  s2.2,1,2.2,2.2S24.3,20.2,23.1,20.2z M25,14.1c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4  C26.4,13.4,25.8,14.1,25,14.1z M27.6,16.6c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4S28.3,16.6,27.6,16.6z M30.1,14.1  c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C31.5,13.4,30.9,14.1,30.1,14.1z",
                    }),
                  )
                : _.createElement(
                    "svg",
                    Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 36 36",
                        fill: "none",
                      },
                      _,
                    ),
                    _.createElement("path", {
                      fill: "currentColor",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      _: "M11.25 5.625C11.909 5.625 12.182 5.81802 12.4081 5.97792C12.568 6.09099 12.7045 6.1875 12.9375 6.1875H23.0625C23.2955 6.1875 23.432 6.09099 23.5919 5.97792C23.818 5.81802 24.091 5.625 24.75 5.625C25.875 5.625 29.25 6.75 29.8125 7.3125C30.375 7.875 30.375 8.4375 30.375 8.4375V8.5803C30.8163 8.91923 31.1986 9.26106 31.5 9.5625C32.625 10.6875 36 20.25 36 25.3125C36 30.375 32.625 30.9375 32.625 30.9375C31.7178 30.9375 30.323 29.1494 28.9649 27.4083C27.7966 25.9106 26.6553 24.4476 25.875 24.1875C24.1875 23.625 11.8125 23.625 10.125 24.1875C9.34465 24.4476 8.20344 25.9106 7.03512 27.4083C5.67696 29.1494 4.28215 30.9375 3.375 30.9375C3.375 30.9375 0 30.375 0 25.3125C0 20.25 3.375 10.6875 4.5 9.5625C4.80144 9.26106 5.18366 8.91923 5.625 8.5803V8.4375C5.625 8.4375 5.625 7.875 6.1875 7.3125C6.75 6.75 10.125 5.625 11.25 5.625ZM27.5625 8.71875C28.3392 8.71875 28.9688 9.34835 28.9688 10.125C28.9688 10.9017 28.3392 11.5312 27.5625 11.5312C26.7858 11.5312 26.1562 10.9017 26.1562 10.125C26.1562 9.34835 26.7858 8.71875 27.5625 8.71875ZM8.4375 14.625C9.68014 14.625 10.6875 13.6176 10.6875 12.375C10.6875 11.1324 9.68014 10.125 8.4375 10.125C7.19486 10.125 6.1875 11.1324 6.1875 12.375C6.1875 13.6176 7.19486 14.625 8.4375 14.625ZM23.0625 20.25C24.3051 20.25 25.3125 19.2426 25.3125 18C25.3125 16.7574 24.3051 15.75 23.0625 15.75C21.8199 15.75 20.8125 16.7574 20.8125 18C20.8125 19.2426 21.8199 20.25 23.0625 20.25ZM12.0938 17.1562V16.3125C12.0938 16.0018 12.3456 15.75 12.6562 15.75H13.7812C14.0919 15.75 14.3438 16.0018 14.3438 16.3125V17.1562H15.1875C15.4982 17.1562 15.75 17.4081 15.75 17.7188V18.8438C15.75 19.1544 15.4982 19.4062 15.1875 19.4062H14.3438V20.25C14.3438 20.5607 14.0919 20.8125 13.7812 20.8125H12.6562C12.3456 20.8125 12.0938 20.5607 12.0938 20.25V19.4062H11.25C10.9393 19.4062 10.6875 19.1544 10.6875 18.8438V17.7188C10.6875 17.4081 10.9393 17.1562 11.25 17.1562H12.0938ZM25.0312 14.0625C25.8079 14.0625 26.4375 13.4329 26.4375 12.6562C26.4375 11.8796 25.8079 11.25 25.0312 11.25C24.2546 11.25 23.625 11.8796 23.625 12.6562C23.625 13.4329 24.2546 14.0625 25.0312 14.0625ZM31.5 12.6562C31.5 13.4329 30.8704 14.0625 30.0938 14.0625C29.3171 14.0625 28.6875 13.4329 28.6875 12.6562C28.6875 11.8796 29.3171 11.25 30.0938 11.25C30.8704 11.25 31.5 11.8796 31.5 12.6562ZM28.9688 15.1875C28.9688 14.4108 28.3392 13.7812 27.5625 13.7812C26.7858 13.7812 26.1562 14.4108 26.1562 15.1875C26.1562 15.9642 26.7858 16.5938 27.5625 16.5938C28.3392 16.5938 28.9688 15.9642 28.9688 15.1875Z",
                    }),
                  )
              : "ps4" == _
                ? _
                  ? _.createElement(
                      "svg",
                      Object.assign(
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          version: "1.1",
                          _: "Layer_1",
                          _: "0px",
                          _: "0px",
                          viewBox: "0 0 36 36",
                        },
                        _,
                      ),
                      _.createElement("path", {
                        fill: "currentColor",
                        opacity: "0.5",
                        _: "M12.9,13.7c-0.6,0-1.1-0.5-1.1-1.1V8l-1.7,0L9.6,7.5c0,0-0.1,0-0.2,0C9.3,7.3,9.2,7.1,9,6.9  C6.7,6.5,5.2,7.1,4.7,7.4c-0.1,0-0.1,0.1-0.2,0.1C3.9,8,2.8,10.3,2.8,10.3C2.2,12,0.6,17,0,23.8c0,0-0.6,5.1,3.4,5.6  c3.5,0.4,4.6-4.1,5.2-6.5c0.2-0.7,0.3-1.2,0.4-1.4c0.3-0.3,0.7-0.5,0.9-0.5c0.6,0.7,1.5,1.1,2.5,1.1c1,0,1.9-0.4,2.5-1.1H18v-7.3  H12.9z M5.6,10.8c0-0.3,0.2-0.5,0.5-0.5h1.2c0.3,0,0.5,0.2,0.5,0.5v1c0,0.1-0.1,0.3-0.1,0.4l-0.6,0.6c-0.2,0.2-0.5,0.2-0.7,0  l-0.6-0.6c-0.1-0.1-0.1-0.2-0.1-0.4V10.8z M5.1,14.5h-1c-0.3,0-0.5-0.2-0.5-0.5v-1.2c0-0.3,0.2-0.5,0.5-0.5h1c0.1,0,0.3,0.1,0.4,0.1  L6.1,13c0.2,0.2,0.2,0.5,0,0.7l-0.6,0.6C5.4,14.4,5.3,14.5,5.1,14.5z M7.9,16c0,0.3-0.2,0.5-0.5,0.5H6.1c-0.3,0-0.5-0.2-0.5-0.5v-1  c0-0.1,0.1-0.3,0.1-0.4L6.4,14c0.2-0.2,0.5-0.2,0.7,0l0.6,0.6c0.1,0.1,0.1,0.2,0.1,0.4V16z M9.8,14c0,0.3-0.2,0.5-0.5,0.5h-1  c-0.1,0-0.3-0.1-0.4-0.1l-0.6-0.6c-0.2-0.2-0.2-0.5,0-0.7L8,12.4c0.1-0.1,0.2-0.1,0.4-0.1h1c0.3,0,0.5,0.2,0.5,0.5V14z M12.1,20.4  c-1.2,0-2.2-1-2.2-2.2c0-1.2,1-2.2,2.2-2.2c1.2,0,2.2,1,2.2,2.2C14.4,19.4,13.4,20.4,12.1,20.4z",
                      }),
                      _.createElement("path", {
                        fill: "currentColor",
                        _: "M36,23.8C35.4,17,33.8,12,33.2,10.3c0,0-1.1-2.2-1.7-2.8c0,0-0.1-0.1-0.2-0.1c-0.5-0.3-2-0.9-4.3-0.5  c-0.2,0.2-0.3,0.4-0.4,0.5c-0.1,0-0.2,0-0.2,0L25.9,8l-1.7,0v4.5c0,0.6-0.5,1.1-1.1,1.1H18V21h3.1c0.6,0.7,1.5,1.1,2.5,1.1  c1,0,1.9-0.4,2.5-1.1c0.2,0.1,0.6,0.2,0.9,0.5c0.1,0.1,0.3,0.7,0.4,1.4c0.6,2.4,1.7,6.9,5.2,6.5C36.6,28.8,36,23.8,36,23.8z   M23.6,20.4c-1.2,0-2.2-1-2.2-2.2c0-1.2,1-2.2,2.2-2.2c1.2,0,2.2,1,2.2,2.2C25.9,19.4,24.9,20.4,23.6,20.4z M26.7,14.5  c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C27.8,14,27.3,14.5,26.7,14.5z M29.2,17  c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C30.4,16.5,29.9,17,29.2,17z M29.2,12c-0.6,0-1.1-0.5-1.1-1.1  c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C30.4,11.5,29.9,12,29.2,12z M31.8,14.5c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1  c0.6,0,1.1,0.5,1.1,1.1C32.9,14,32.4,14.5,31.8,14.5z",
                      }),
                      _.createElement("rect", {
                        fill: "currentColor",
                        opacity: "0.5",
                        _: "12.9",
                        _: "8",
                        width: "5.1",
                        height: "4.5",
                      }),
                      _.createElement("rect", {
                        fill: "currentColor",
                        _: "18",
                        _: "8",
                        width: "5.1",
                        height: "4.5",
                      }),
                    )
                  : _.createElement(
                      "svg",
                      Object.assign(
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 36 36",
                          fill: "none",
                        },
                        _,
                      ),
                      _.createElement(
                        "g",
                        {
                          clipPath: _,
                        },
                        _.createElement("path", {
                          fill: "currentColor",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          _: "M4.49995 7.47C3.93745 8.0325 2.81244 10.2825 2.81244 10.2825C2.24993 11.97 0.562445 17.0325 -5.43911e-05 23.7825C-5.43911e-05 23.7825 -0.562553 28.845 3.37495 29.4075C6.832 29.8396 7.9652 25.2921 8.55982 22.9059C8.73921 22.186 8.86958 21.6629 8.99995 21.5325C9.33789 21.1945 9.67584 21.0596 9.89181 21.0058C10.5086 21.6754 11.3928 22.095 12.3749 22.095C13.3745 22.095 14.2726 21.6605 14.8906 20.97H21.1093C21.7273 21.6605 22.6254 22.095 23.6249 22.095C24.6071 22.095 25.4913 21.6754 26.1081 21.0058C26.3241 21.0596 26.662 21.1945 27 21.5325C27.1303 21.6629 27.2607 22.186 27.4401 22.9059C28.0347 25.2921 29.1679 29.8396 32.625 29.4075C36.5625 28.845 36 23.7825 36 23.7825C35.4375 17.0325 33.75 11.97 33.1875 10.2825C33.1875 10.2825 32.0625 8.03251 31.4999 7.47C31.4575 7.42758 31.3927 7.39155 31.3091 7.36121C30.794 7.09333 29.2603 6.45543 26.9999 6.9075C26.8121 7.09539 26.6869 7.28328 26.6036 7.45021C26.4971 7.46255 26.4375 7.47001 26.4375 7.47001L25.875 8.0325L24.1874 8.03251V12.5325C24.1874 13.1538 23.6838 13.6575 23.0624 13.6575H12.9374C12.3161 13.6575 11.8124 13.1538 11.8124 12.5325V8.03251L10.1249 8.03249L9.56245 7.47C9.56245 7.47 9.50277 7.46254 9.39629 7.4502C9.31296 7.28328 9.18783 7.09539 8.99995 6.9075C6.73958 6.45543 5.20586 7.09333 4.6908 7.36121C4.60721 7.39155 4.54237 7.42759 4.49995 7.47ZM14.3999 18.1575C14.3999 19.4002 13.3926 20.4075 12.1499 20.4075C10.9073 20.4075 9.89995 19.4002 9.89995 18.1575C9.89995 16.9149 10.9073 15.9075 12.1499 15.9075C13.3926 15.9075 14.3999 16.9149 14.3999 18.1575ZM23.6249 20.4075C24.8676 20.4075 25.8749 19.4002 25.8749 18.1575C25.8749 16.9149 24.8676 15.9075 23.6249 15.9075C22.3823 15.9075 21.3749 16.9149 21.3749 18.1575C21.3749 19.4002 22.3823 20.4075 23.6249 20.4075ZM30.3749 10.845C30.3749 11.4663 29.8713 11.97 29.2499 11.97C28.6286 11.97 28.1249 11.4663 28.1249 10.845C28.1249 10.2237 28.6286 9.72001 29.2499 9.72001C29.8713 9.72001 30.3749 10.2237 30.3749 10.845ZM29.2499 17.0325C29.8713 17.0325 30.3749 16.5288 30.3749 15.9075C30.3749 15.2862 29.8713 14.7825 29.2499 14.7825C28.6286 14.7825 28.1249 15.2862 28.1249 15.9075C28.1249 16.5288 28.6286 17.0325 29.2499 17.0325ZM26.7187 12.2513C27.34 12.2513 27.8437 12.7549 27.8437 13.3763C27.8437 13.9976 27.34 14.5013 26.7187 14.5013C26.0974 14.5013 25.5937 13.9976 25.5937 13.3763C25.5937 12.7549 26.0974 12.2513 26.7187 12.2513ZM32.9062 13.3763C32.9062 12.7549 32.4025 12.2513 31.7812 12.2513C31.1599 12.2513 30.6562 12.7549 30.6562 13.3763C30.6562 13.9976 31.1599 14.5013 31.7812 14.5013C32.4025 14.5013 32.9062 13.9976 32.9062 13.3763ZM5.62495 10.7825C5.62495 10.5064 5.8488 10.2825 6.12495 10.2825H7.37495C7.65109 10.2825 7.87495 10.5064 7.87495 10.7825V11.7629C7.87495 11.8955 7.82227 12.0227 7.7285 12.1165L7.1035 12.7415C6.90824 12.9367 6.59166 12.9367 6.39639 12.7415L5.77139 12.1165C5.67763 12.0227 5.62495 11.8955 5.62495 11.7629V10.7825ZM6.12495 16.47C5.8488 16.47 5.62495 16.2462 5.62495 15.97V14.9896C5.62495 14.857 5.67763 14.7298 5.77139 14.6361L6.39639 14.0111C6.59166 13.8158 6.90824 13.8158 7.1035 14.0111L7.7285 14.6361C7.82227 14.7298 7.87495 14.857 7.87495 14.9896V15.97C7.87495 16.2462 7.65109 16.47 7.37495 16.47H6.12495ZM4.1562 14.5013C3.88006 14.5013 3.6562 14.2774 3.6562 14.0013V12.7513C3.6562 12.4751 3.88006 12.2513 4.1562 12.2513H5.13659C5.2692 12.2513 5.39638 12.3039 5.49014 12.3977L6.11514 13.0227C6.31041 13.218 6.31041 13.5346 6.11514 13.7298L5.49014 14.3548C5.39638 14.4486 5.2692 14.5013 5.13659 14.5013H4.1562ZM9.8437 14.0013C9.8437 14.2774 9.61984 14.5013 9.3437 14.5013H8.36331C8.2307 14.5013 8.10352 14.4486 8.00975 14.3548L7.38475 13.7298C7.18949 13.5346 7.18949 13.218 7.38475 13.0227L8.00975 12.3977C8.10352 12.3039 8.2307 12.2513 8.36331 12.2513H9.3437C9.61984 12.2513 9.8437 12.4751 9.8437 12.7513V14.0013Z",
                        }),
                        _.createElement("path", {
                          fill: "currentColor",
                          _: "M23.0624 8.03251L12.9374 8.03251V12.5325H23.0624V8.03251Z",
                        }),
                      ),
                      _.createElement(
                        "defs",
                        null,
                        _.createElement(
                          "clipPath",
                          {
                            _: _,
                          },
                          _.createElement("rect", {
                            fill: "currentColor",
                            width: "36",
                            height: "36",
                          }),
                        ),
                      ),
                    )
                : "ps5" == _
                  ? _
                    ? _.createElement(
                        "svg",
                        Object.assign(
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            version: "1.1",
                            _: "Layer_1",
                            _: "0px",
                            _: "0px",
                            viewBox: "0 0 36 36",
                          },
                          _,
                        ),
                        _.createElement("path", {
                          fill: "currentColor",
                          opacity: "0.5",
                          _: "M4.7,25.2c0.5-1.7,1.2-3.4,1.8-4.5c0.9-1.6,2.4-3.3,3.5-4.5c0.9-1,1.4-2.4,1.1-3.8l-0.7-3.8  c-0.1-0.4,0-0.7,0.3-0.9l0,0c-0.4,0-0.8,0.1-1.1,0.1V7.3c0,0,0-0.6-1.7-0.6c-1.3,0-2.6,0.7-3.1,1C4.6,7.8,4.5,8,4.5,8.2v0.6  C4.3,8.9,4.1,8.9,3.9,9C2.8,9.6,0,18,0,23.1c0,2.7,0.5,4.6,0.9,5.8c0.2,0.6,0.7,1.1,1.2,1.4l0.1,0c0.5,0.2,1-0.1,1.1-0.6  C3.7,28.6,4.1,26.9,4.7,25.2z M7.9,16.3c0,0.3-0.3,0.6-0.6,0.6H6.2c-0.3,0-0.6-0.3-0.6-0.6v-0.9c0-0.1,0.1-0.3,0.2-0.4l0.6-0.6  c0.2-0.2,0.6-0.2,0.8,0L7.7,15c0.1,0.1,0.2,0.2,0.2,0.4V16.3z M9,9.1c0.3-0.1,0.6,0,0.8,0.3l0.3,0.6c0.1,0.3,0,0.6-0.3,0.8  c-0.3,0.1-0.6,0-0.8-0.3L8.8,9.8C8.6,9.5,8.8,9.2,9,9.1z M8,12.8c0.1-0.1,0.2-0.2,0.4-0.2h0.9c0.3,0,0.6,0.3,0.6,0.6v1.1  c0,0.3-0.3,0.6-0.6,0.6H8.4c-0.1,0-0.3-0.1-0.4-0.2l-0.6-0.6c-0.2-0.2-0.2-0.6,0-0.8L8,12.8z M5.6,11.2c0-0.3,0.3-0.6,0.6-0.6h1.1  c0.3,0,0.6,0.3,0.6,0.6v0.9c0,0.1-0.1,0.3-0.2,0.4l-0.6,0.6c-0.2,0.2-0.6,0.2-0.8,0l-0.6-0.6c-0.1-0.1-0.2-0.2-0.2-0.4V11.2z   M3.7,13.2c0-0.3,0.3-0.6,0.6-0.6h0.9c0.1,0,0.3,0.1,0.4,0.2l0.6,0.6c0.2,0.2,0.2,0.6,0,0.8l-0.6,0.6c-0.1,0.1-0.2,0.2-0.4,0.2H4.2  c-0.3,0-0.6-0.3-0.6-0.6V13.2z",
                        }),
                        _.createElement("path", {
                          fill: "currentColor",
                          _: "M23.8,13.5l0.6-2l0.5-3c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.4-0.3-0.7-0.4c-0.1,0-0.2-0.1-0.3-0.1c-1.7-0.1-3.7-0.2-5.9-0.2v7.6  h4C22.8,14.9,23.6,14.3,23.8,13.5z",
                        }),
                        _.createElement("path", {
                          fill: "currentColor",
                          opacity: "0.5",
                          _: "M12,7.5c-0.1,0-0.1,0-0.2,0.1c-0.3,0.1-0.5,0.3-0.7,0.4C11,8.2,11,8.3,11,8.5l0.5,2.9l0.6,2.1  c0.3,0.8,1,1.4,1.9,1.4h4V7.3C15.8,7.3,13.7,7.4,12,7.5z",
                        }),
                        _.createElement("path", {
                          fill: "currentColor",
                          opacity: "0.5",
                          _: "M14,15.5c-1,0-2-0.6-2.4-1.6c-0.2,1-0.6,1.9-1.3,2.7C9.3,17.8,7.9,19.4,7,21c-0.6,1-1.2,2.7-1.8,4.4  c-0.5,1.7-1,3.4-1.3,4.5c-0.1,0.4-0.3,0.7-0.6,0.8l0,0c1,0.2,2-0.4,2.3-1.3l1.9-4.7c0.5-1.3,1.8-2.1,3.1-2.1H18v-7H14z M12.4,21.4  c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1,2.2,2.2S13.6,21.4,12.4,21.4z",
                        }),
                        _.createElement("path", {
                          fill: "currentColor",
                          _: "M32.1,29.8c-0.3-1.1-0.7-2.8-1.3-4.5C30.2,23.6,29.6,22,29,21c-0.9-1.5-2.3-3.2-3.4-4.4c-0.7-0.8-1.1-1.7-1.3-2.7  c-0.4,1-1.3,1.6-2.4,1.6h-4v7h7.3c1.4,0,2.6,0.8,3.1,2.1l1.9,4.7c0.4,0.9,1.3,1.5,2.3,1.3l0,0C32.4,30.5,32.2,30.2,32.1,29.8z   M23.6,21.4c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1,2.2,2.2S24.9,21.4,23.6,21.4z",
                        }),
                        _.createElement("path", {
                          fill: "currentColor",
                          _: "M32.1,9c-0.1-0.1-0.3-0.1-0.6-0.2V8.2c0-0.2-0.1-0.4-0.3-0.5c-0.5-0.3-1.8-1-3.1-1c-1.7,0-1.7,0.6-1.7,0.6v0.5  c-0.4,0-0.8-0.1-1.2-0.1l0,0c0.2,0.2,0.3,0.6,0.3,0.9l-0.5,3l0,0l0,0l-0.1,0.7c-0.2,1.4,0.2,2.8,1.1,3.8c1.1,1.2,2.5,3,3.5,4.5  c0.6,1.1,1.3,2.8,1.8,4.5c0.5,1.7,1,3.4,1.3,4.5c0.1,0.5,0.6,0.8,1.1,0.6l0.1,0c0.5-0.3,1-0.8,1.2-1.4c0.4-1.2,0.9-3.1,0.9-5.8  C36,18,33.2,9.6,32.1,9z M29.2,10.1c0.6,0,1.1,0.5,1.1,1.1s-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1S28.6,10.1,29.2,10.1z M25.9,9.9  l0.3-0.6C26.4,9,26.7,8.9,27,9.1c0.3,0.1,0.4,0.5,0.3,0.8l-0.3,0.6c-0.1,0.3-0.5,0.4-0.8,0.3C25.9,10.5,25.8,10.2,25.9,9.9z   M27,14.6c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S27.6,14.6,27,14.6z M29.2,16.9c-0.6,0-1.1-0.5-1.1-1.1  s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S29.9,16.9,29.2,16.9z M31.5,14.6c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1  S32.1,14.6,31.5,14.6z",
                        }),
                      )
                    : _.createElement(
                        "svg",
                        Object.assign(
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 36 36",
                            fill: "none",
                          },
                          _,
                        ),
                        _.createElement("path", {
                          fill: "currentColor",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          _: "M4.5 8.77962V8.17604C4.5 7.98797 4.59324 7.8129 4.75606 7.71875C5.29052 7.40971 6.58276 6.75 7.875 6.75C9.5625 6.75 9.5625 7.3125 9.5625 7.3125V7.79346C9.92732 7.74841 10.3079 7.7053 10.7038 7.66469L10.7001 7.66881C10.4768 7.91891 10.3639 8.22982 10.4289 8.58762L11.114 12.3555C11.3614 13.7163 10.9231 15.1154 9.99052 16.155C8.88458 17.3878 7.44481 19.1078 6.50883 20.6678C5.85918 21.7505 5.21964 23.4605 4.67636 25.1549C4.13086 26.8562 3.67463 28.5672 3.3961 29.6673C3.27268 30.1547 2.76181 30.4366 2.2902 30.2794L2.14425 30.2308C1.59878 29.9208 1.15999 29.4611 0.929107 28.8508C0.480791 27.6656 0 25.7647 0 23.0625C0 18 2.8125 9.5625 3.9375 9C4.07055 8.93348 4.25867 8.85908 4.5 8.77962ZM5.625 11.25C5.625 10.9393 5.87684 10.6875 6.1875 10.6875H7.3125C7.62316 10.6875 7.875 10.9393 7.875 11.25V12.142C7.875 12.2912 7.81574 12.4343 7.71025 12.5398L7.14775 13.1023C6.92808 13.3219 6.57192 13.3219 6.35225 13.1023L5.78975 12.5398C5.68426 12.4343 5.625 12.2912 5.625 12.142V11.25ZM5.625 16.3125C5.625 16.6232 5.87684 16.875 6.1875 16.875H7.3125C7.62316 16.875 7.875 16.6232 7.875 16.3125V15.4205C7.875 15.2713 7.81574 15.1282 7.71025 15.0227L7.14775 14.4602C6.92808 14.2406 6.57192 14.2406 6.35225 14.4602L5.78975 15.0227C5.68426 15.1282 5.625 15.2713 5.625 15.4205V16.3125ZM9.84375 14.3438C9.84375 14.6544 9.59191 14.9062 9.28125 14.9062H8.38924C8.24006 14.9062 8.09699 14.847 7.9915 14.7415L7.429 14.179C7.20933 13.9593 7.20933 13.6032 7.429 13.3835L7.9915 12.821C8.09699 12.7155 8.24006 12.6562 8.38925 12.6562H9.28125C9.59191 12.6562 9.84375 12.9081 9.84375 13.2188V14.3438ZM4.21875 14.9062C3.90809 14.9062 3.65625 14.6544 3.65625 14.3438V13.2188C3.65625 12.9081 3.90809 12.6562 4.21875 12.6562H5.11076C5.25994 12.6562 5.40301 12.7155 5.5085 12.821L6.071 13.3835C6.29067 13.6032 6.29067 13.9593 6.071 14.179L5.5085 14.7415C5.40301 14.847 5.25994 14.9062 5.11076 14.9062H4.21875ZM9.0297 9.05937C9.30756 8.92044 9.64544 9.03307 9.78437 9.31093L10.0656 9.87343C10.2046 10.1513 10.0919 10.4892 9.81406 10.6281C9.5362 10.767 9.19832 10.6544 9.05939 10.3765L8.77814 9.81404C8.63921 9.53618 8.75183 9.1983 9.0297 9.05937Z",
                        }),
                        _.createElement("path", {
                          fill: "currentColor",
                          _: "M18 7.3125C15.7603 7.3125 13.748 7.4035 11.9892 7.54668C11.9209 7.57082 11.8551 7.59586 11.7919 7.62185C11.4768 7.75142 11.2526 7.89452 11.1197 8.04343C10.9961 8.18189 10.9523 8.32182 10.9824 8.48699L11.5138 11.4097L12.1573 13.5129C12.4103 14.3408 13.1744 14.9062 14.0401 14.9062H21.9642C22.8281 14.9062 23.591 14.3431 23.8456 13.5176L24.4729 11.483L25.0176 8.48699C25.0463 8.32909 25.0039 8.1935 24.8798 8.05684C24.7463 7.90988 24.5214 7.76808 24.2057 7.6392C24.1215 7.60486 24.0327 7.57213 23.9398 7.54094C22.1978 7.40107 20.2096 7.3125 18 7.3125Z",
                        }),
                        _.createElement("path", {
                          fill: "currentColor",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          _: "M3.37124 30.6556L3.34019 30.6503C3.62833 30.4606 3.84996 30.1665 3.94139 29.8054C4.2185 28.7109 4.67149 27.0124 5.212 25.3266C5.75474 23.6339 6.37801 21.9791 6.99117 20.9572C7.89825 19.4454 9.30802 17.7581 10.4092 16.5306C11.085 15.7773 11.5326 14.8493 11.6859 13.8677C12.0647 14.8275 12.9948 15.4687 14.0401 15.4687H21.9642C23.0065 15.4687 23.9345 14.8312 24.3153 13.8755C24.4698 14.8543 24.9168 15.7794 25.5908 16.5306C26.692 17.7581 28.1017 19.4454 29.0088 20.9572C29.622 21.9791 30.2453 23.6339 30.788 25.3266C31.3285 27.0124 31.7815 28.7109 32.0586 29.8054C32.15 30.1664 32.3717 30.4606 32.6598 30.6503L32.6288 30.6556C31.6413 30.8202 30.6725 30.275 30.3007 29.3455L28.4111 24.6216C27.8986 23.3402 26.6576 22.5 25.2775 22.5H10.7225C9.34243 22.5 8.10142 23.3402 7.58888 24.6216L5.69928 29.3455C5.3275 30.275 4.35868 30.8202 3.37124 30.6556ZM25.875 19.125C25.875 20.3676 24.8676 21.375 23.625 21.375C22.3824 21.375 21.375 20.3676 21.375 19.125C21.375 17.8824 22.3824 16.875 23.625 16.875C24.8676 16.875 25.875 17.8824 25.875 19.125ZM12.375 21.375C13.6176 21.375 14.625 20.3676 14.625 19.125C14.625 17.8824 13.6176 16.875 12.375 16.875C11.1324 16.875 10.125 17.8824 10.125 19.125C10.125 20.3676 11.1324 21.375 12.375 21.375Z",
                        }),
                        _.createElement("path", {
                          fill: "currentColor",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          _: "M33.7098 30.2794L33.8557 30.2308C34.4012 29.9208 34.84 29.4611 35.0709 28.8508C35.5192 27.6656 36 25.7647 36 23.0625C36 18 33.1875 9.5625 32.0625 9C31.9295 8.93348 31.7413 8.85908 31.5 8.77962V8.17604C31.5 7.98797 31.4068 7.8129 31.2439 7.71875C30.7095 7.40971 29.4172 6.75 28.125 6.75C26.4375 6.75 26.4375 7.3125 26.4375 7.3125V7.79346C26.0683 7.74787 25.683 7.70427 25.282 7.66324L25.2962 7.67864C25.52 7.92502 25.6356 8.23268 25.5711 8.58762L25.0274 11.5776L25.0319 11.579L25.0203 11.6166L24.886 12.3555C24.6386 13.7163 25.0769 15.1154 26.0095 16.155C27.1154 17.3878 28.5552 19.1078 29.4912 20.6678C30.1408 21.7505 30.7804 23.4605 31.3236 25.1549C31.8691 26.8562 32.3254 28.5672 32.6039 29.6673C32.7273 30.1547 33.2382 30.4366 33.7098 30.2794ZM26.2156 9.31093C26.3546 9.03307 26.6924 8.92044 26.9703 9.05937C27.2482 9.1983 27.3608 9.53618 27.2219 9.81404L26.9406 10.3765C26.8017 10.6544 26.4638 10.767 26.1859 10.6281C25.9081 10.4892 25.7954 10.1513 25.9344 9.87343L26.2156 9.31093ZM30.375 15.75C30.375 16.3713 29.8713 16.875 29.25 16.875C28.6287 16.875 28.125 16.3713 28.125 15.75C28.125 15.1287 28.6287 14.625 29.25 14.625C29.8713 14.625 30.375 15.1287 30.375 15.75ZM31.5 14.625C32.1213 14.625 32.625 14.1213 32.625 13.5C32.625 12.8787 32.1213 12.375 31.5 12.375C30.8787 12.375 30.375 12.8787 30.375 13.5C30.375 14.1213 30.8787 14.625 31.5 14.625ZM30.375 11.25C30.375 11.8713 29.8713 12.375 29.25 12.375C28.6287 12.375 28.125 11.8713 28.125 11.25C28.125 10.6287 28.6287 10.125 29.25 10.125C29.8713 10.125 30.375 10.6287 30.375 11.25ZM27 14.625C27.6213 14.625 28.125 14.1213 28.125 13.5C28.125 12.8787 27.6213 12.375 27 12.375C26.3787 12.375 25.875 12.8787 25.875 13.5C25.875 14.1213 26.3787 14.625 27 14.625Z",
                        }),
                      )
                  : "switchpro" == _
                    ? _.createElement(
                        "svg",
                        Object.assign(
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 36 36",
                            fill: "none",
                          },
                          _,
                        ),
                        _.createElement("path", {
                          fill: "currentColor",
                          _: "M3.375 30.375C0 30.375 0 25.875 0 25.875C0 25.875 0.679114 19.5689 1.65511 14.6014C2.11919 15.2235 2.72448 16.0277 3.42078 16.936C4.97674 18.9655 6.99227 21.5211 8.90421 23.7256C8.37233 24.3118 7.95006 25.2335 7.50451 26.2061C6.59778 28.1853 5.59464 30.375 3.375 30.375Z",
                        }),
                        _.createElement("path", {
                          fill: "currentColor",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          _: "M9.94135 23.2037C10.5784 23.0625 11.25 23.0625 11.25 23.0625H24.75C24.75 23.0625 25.4216 23.0625 26.0586 23.2037C28.0029 20.9779 30.0841 18.3414 31.6864 16.2515C32.493 15.1994 33.1768 14.2877 33.6589 13.639C33.8038 13.444 33.9305 13.2728 34.0368 13.1288C33.6024 11.1876 33.1223 9.62156 32.625 8.99998C30.9375 6.75 24.75 6.75 24.75 6.75H11.25C11.25 6.75 5.0625 6.75 3.375 8.99998C2.87774 9.62156 2.39764 11.1876 1.96319 13.1288C2.06947 13.2728 2.19616 13.444 2.34111 13.639C2.82318 14.2877 3.50702 15.1994 4.31359 16.2515C5.91589 18.3414 7.99714 20.9779 9.94135 23.2037ZM27.5062 9.11247C28.2829 9.11247 28.9125 9.74207 28.9125 10.5187C28.9125 11.2954 28.2829 11.925 27.5062 11.925C26.7296 11.925 26.1 11.2954 26.1 10.5187C26.1 9.74207 26.7296 9.11247 27.5062 9.11247ZM8.1 15.1875C9.34264 15.1875 10.35 14.1801 10.35 12.9375C10.35 11.6949 9.34264 10.6875 8.1 10.6875C6.85736 10.6875 5.85 11.6949 5.85 12.9375C5.85 14.1801 6.85736 15.1875 8.1 15.1875ZM22.725 20.25C23.9676 20.25 24.975 19.2426 24.975 18C24.975 16.7574 23.9676 15.75 22.725 15.75C21.4824 15.75 20.475 16.7574 20.475 18C20.475 19.2426 21.4824 20.25 22.725 20.25ZM31.725 13.1063C31.725 13.8829 31.0954 14.5125 30.3187 14.5125C29.5421 14.5125 28.9125 13.8829 28.9125 13.1063C28.9125 12.3296 29.5421 11.7 30.3187 11.7C31.0954 11.7 31.725 12.3296 31.725 13.1063ZM24.6937 14.5125C25.4704 14.5125 26.1 13.8829 26.1 13.1063C26.1 12.3296 25.4704 11.7 24.6937 11.7C23.9171 11.7 23.2875 12.3296 23.2875 13.1063C23.2875 13.8829 23.9171 14.5125 24.6937 14.5125ZM28.9125 15.4688C28.9125 14.6921 28.2829 14.0625 27.5062 14.0625C26.7296 14.0625 26.1 14.6921 26.1 15.4688C26.1 16.2454 26.7296 16.875 27.5062 16.875C28.2829 16.875 28.9125 16.2454 28.9125 15.4688ZM11.5312 17.1562V16.3125C11.5312 16.0018 11.7831 15.75 12.0938 15.75H13.2188C13.5294 15.75 13.7812 16.0018 13.7812 16.3125V17.1562H14.625C14.9357 17.1562 15.1875 17.4081 15.1875 17.7188V18.8438C15.1875 19.1544 14.9357 19.4062 14.625 19.4062H13.7812V20.25C13.7812 20.5607 13.5294 20.8125 13.2188 20.8125H12.0938C11.7831 20.8125 11.5312 20.5607 11.5312 20.25V19.4062H10.6875C10.3768 19.4062 10.125 19.1544 10.125 18.8438V17.7188C10.125 17.4081 10.3768 17.1562 10.6875 17.1562H11.5312Z",
                        }),
                        _.createElement("path", {
                          fill: "currentColor",
                          _: "M34.3449 14.6014C33.8808 15.2235 33.2755 16.0277 32.5792 16.936C31.0233 18.9655 29.0077 21.5211 27.0958 23.7256C27.6277 24.3118 28.0499 25.2335 28.4955 26.2061C29.4022 28.1853 30.4054 30.375 32.625 30.375C36 30.375 36 25.875 36 25.875C36 25.875 35.3209 19.5689 34.3449 14.6014Z",
                        }),
                      )
                    : "hori" == _
                      ? _.createElement(
                          "svg",
                          Object.assign(
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 279 190",
                              fill: "none",
                            },
                            _,
                          ),
                          _.createElement("path", {
                            fill: "currentColor",
                            _: "M276.557 118.966L276.377 117.587C276.377 117.575 274.727 107.206 273.807 102.575C269.077 78.747 262.957 53.718 255.596 28.199C255.448 27.679 255.207 27.26 255.037 26.988C254.957 26.869 254.867 26.759 254.766 26.658C254.766 26.658 249.118 21.029 248.778 20.67C248.038 19.889 247.266 19.08 246.438 18.549C246.297 18.459 245.557 18.139 245.288 18.01C244.495 17.629 243.956 17.379 243.556 17.209C243.546 17.17 243.536 17.129 243.527 17.09C243.496 17.01 243.476 16.94 243.447 16.86C243.426 16.819 243.406 16.78 243.386 16.751C242.585 15.05 241.675 13.36 240.796 11.72L240.505 11.159C240.386 10.94 240.263 10.751 240.073 10.591C239.891 10.402 239.675 10.28 239.565 10.21C239.545 10.2 239.276 10.03 239.165 9.98C233.625 7.511 222.858 3.701 222.846 3.701C219.718 2.41 216.278 1.191 212.038 -0.149C210.688 -0.579 208.877 -1.079 206.926 -1.079C206.127 -1.079 205.346 -0.989 204.617 -0.819C202.926 -1.13 201.287 -1.409 199.717 -1.639C199.688 -1.649 197.457 -1.94 197.197 -1.969C197.047 -1.998 196.916 -1.998 196.787 -1.998C196.057 -1.998 195.346 -1.719 194.807 -1.219C194.647 -1.1 194.516 -0.949 194.397 -0.78C194.137 -0.44 192.708 1.441 191.688 2.762C177.307 1.89 161.506 1.431 142.077 1.332C142.067 1.332 126.397 1.41 126.097 1.41C126.097 1.41 106.898 1.832 98.2062 2.192C96.7762 2.262 95.4972 2.311 94.2672 2.362C91.9492 2.442 89.7382 2.522 87.0972 2.741C86.2072 1.568 85.1272 0.138 84.3972 -0.842C84.2972 -0.981 84.1762 -1.102 84.0472 -1.201C83.5862 -1.592 82.8462 -2 81.7762 -2C81.1862 -2 80.6712 -1.873 80.2082 -1.791C79.9482 -1.744 75.8272 -1.121 74.1872 -0.82C73.4472 -0.99 72.6672 -1.08 71.8472 -1.08C70.7772 -1.08 69.6172 -0.932 68.4272 -0.631C68.3982 -0.621 68.3662 -0.621 68.3372 -0.611C64.0462 0.649 59.8762 2.1 55.9682 3.69C55.9472 3.7 55.9272 3.71 55.9072 3.719C50.6372 5.408 45.1672 7.51 39.6372 9.979C39.3262 10.12 39.0262 10.35 38.8262 10.629L38.7172 10.779C38.7172 10.779 38.4242 11.22 38.2662 11.439C36.8362 13.548 35.8972 15.429 35.4162 17.148C34.9962 17.308 34.4262 17.58 33.5252 18.009C33.2552 18.138 32.7962 18.339 32.7752 18.349C32.0862 18.599 31.5152 19.148 30.6562 20.038C30.5062 20.188 30.4062 20.308 30.3362 20.368C30.3162 20.388 28.7562 21.948 28.7562 21.948C28.0572 22.657 26.4672 24.237 26.4362 24.268C26.2172 24.508 25.8872 24.817 25.5462 25.147C24.8362 25.829 24.1162 26.518 23.6062 27.249C23.5462 27.339 23.4972 27.429 23.4472 27.519C23.4072 27.619 23.3562 27.738 23.3272 27.839C22.5872 30.359 21.8172 33.038 21.1062 35.577C19.0462 42.827 16.9662 50.677 14.5372 60.247C10.0162 78.858 5.34716 98.065 2.43616 117.526C2.43616 117.546 2.33616 118.296 2.33616 118.296C0.536161 131.837 -1.33384 145.837 1.32616 159.616C2.81616 167.177 5.24616 173.155 8.77516 177.915C12.3162 182.905 17.4162 186.677 23.0952 188.507C26.2162 189.446 29.3752 189.927 32.5352 189.927C38.5052 189.927 44.0242 188.245 48.4852 185.075C59.3742 177.235 65.4952 162.106 70.8852 148.757C71.9242 146.187 73.9052 141.437 73.9142 141.405C74.1642 140.745 74.4532 139.995 74.7732 139.266C74.9942 138.846 75.9742 137.455 76.1442 137.196C76.3042 137.016 76.9842 136.257 77.1542 136.065C79.5332 133.805 82.6482 132.481 85.7182 132.45C85.7182 132.45 85.8862 132.448 86.1632 132.427H188.003C189.583 132.427 191.153 132.427 192.714 132.437C196.464 132.447 200.064 134.107 202.343 136.857C203.105 137.796 203.663 138.607 204.083 139.377C204.083 139.377 206.903 146.246 207.954 148.848C213.263 161.996 219.294 176.897 230.013 184.858C234.542 188.178 240.152 189.938 246.254 189.938C249.404 189.938 252.574 189.458 255.674 188.518C261.225 186.717 266.235 183.077 269.805 178.247C273.616 173.108 276.225 166.667 277.555 159.099C280.077 145.726 278.288 132.117 276.557 118.966ZM59.3422 67.242C51.7742 67.242 45.6172 61.086 45.6172 53.519C45.6172 45.951 51.7732 39.796 59.3422 39.796C66.9082 39.796 73.0652 45.95 73.0652 53.519C73.0652 61.085 66.9092 67.242 59.3422 67.242ZM121.963 93.212C121.965 93.267 121.955 93.294 121.947 93.335C121.586 95.048 120.058 96.29 118.31 96.29H108.806C108.769 96.29 108.755 96.292 108.701 96.29C108.453 96.347 108.267 96.546 108.267 96.811L108.3 106.147C108.3 106.182 108.302 106.217 108.302 106.258C108.302 108.006 107.062 109.535 105.349 109.893C105.337 109.897 105.324 109.899 105.312 109.899C103.865 110.2 102.408 110.35 100.951 110.35C99.4922 110.35 98.0332 110.198 96.5842 109.897C96.5742 109.897 96.5642 109.895 96.5552 109.893C94.8522 109.538 93.6142 108.022 93.6022 106.282V106.276V96.831C93.6022 96.788 93.6062 96.802 93.6022 96.759C93.5862 96.519 93.3872 96.325 93.1512 96.29C93.1162 96.292 93.0962 96.29 93.0632 96.29H83.6492C83.6452 96.29 83.6372 96.29 83.6332 96.29C81.8832 96.29 80.3562 95.048 79.9962 93.335C79.9922 93.323 79.9922 93.312 79.9902 93.3C79.3882 90.404 79.3882 87.47 79.9922 84.575C79.9922 84.563 79.9942 84.552 79.9962 84.54C80.3552 82.829 81.8812 81.622 83.6292 81.622C83.6762 81.622 83.7112 81.626 83.7642 81.624H93.0632C93.3482 81.624 93.5752 81.433 93.6272 81.179C93.6352 81.138 93.6312 81.113 93.6312 81.079L93.6022 71.6C93.6022 69.834 94.8442 68.303 96.5552 67.946C96.6062 67.936 96.6332 67.928 96.6862 67.919C99.5162 67.345 102.403 67.343 105.235 67.919C105.309 67.939 105.309 67.939 105.35 67.948C107.063 68.303 108.26 69.835 108.26 71.583C108.26 71.63 108.27 71.665 108.268 71.714V81.066C108.268 81.375 108.518 81.625 108.825 81.625L118.198 81.594C118.255 81.594 118.272 81.588 118.311 81.588C120.059 81.588 121.532 82.83 121.891 84.541C121.901 84.59 121.914 84.621 121.936 84.697C122.51 87.527 122.541 90.38 121.963 93.212ZM139.012 41.652C132.371 41.652 126.967 36.25 126.967 29.608C126.967 22.965 132.371 17.561 139.012 17.561C145.657 17.561 151.059 22.965 151.059 29.608C151.059 36.249 145.657 41.652 139.012 41.652ZM177.129 102.644C169.563 102.644 163.406 96.488 163.406 88.921C163.406 81.353 169.562 75.198 177.129 75.198C184.697 75.198 190.854 81.352 190.854 88.921C190.854 96.488 184.698 102.644 177.129 102.644ZM201.75 62.714C196.811 62.714 192.791 58.694 192.791 53.755C192.791 48.816 196.811 44.794 201.75 44.794C206.691 44.794 210.711 48.815 210.711 53.755C210.711 58.695 206.692 62.714 201.75 62.714ZM222.356 82.827C217.417 82.827 213.397 78.811 213.397 73.87C213.397 68.929 217.417 64.909 222.356 64.909C227.297 64.909 231.316 68.929 231.316 73.87C231.316 78.811 227.297 82.827 222.356 82.827ZM222.356 41.673C217.417 41.673 213.397 37.653 213.397 32.715C213.397 27.774 217.417 23.756 222.356 23.756C227.297 23.756 231.316 27.774 231.316 32.715C231.317 37.654 227.297 41.673 222.356 41.673ZM242.657 62.714C237.715 62.714 233.696 58.694 233.696 53.755C233.696 48.816 237.716 44.794 242.657 44.794C247.598 44.794 251.618 48.815 251.618 53.755C251.618 58.695 247.598 62.714 242.657 62.714Z",
                          }),
                        )
                      : "gamecube" == _
                        ? _.createElement(
                            "svg",
                            Object.assign(
                              {
                                viewBox: "0 0 36 26",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                              },
                              _,
                            ),
                            _.createElement("path", {
                              fill: "currentColor",
                              _: "M16.1827 0.0781004C17.6081 -0.0426998 19.0335 -0.0183863 20.4571 0.121069C23.1735 0.386856 25.7983 1.04207 28.3604 1.96775C28.3933 1.97962 28.4272 1.98854 28.4707 2.00193C28.4909 1.96528 28.5193 1.93316 28.5264 1.89744C28.5625 1.71211 28.6809 1.67014 28.8555 1.66892C29.6045 1.66433 30.3068 1.85492 30.9815 2.16013C31.946 2.59683 32.798 3.20275 33.5821 3.90916C33.6515 3.97184 33.6587 4.0229 33.6211 4.10544C33.5517 4.25805 33.4959 4.41663 33.4317 4.5781C33.8532 4.96729 34.223 5.39899 34.5352 5.87986C35.1214 6.78349 35.4179 7.78243 35.5371 8.84568C35.7968 11.1614 35.9333 13.4849 35.9893 15.8135C36.0312 17.563 35.9522 19.308 35.7452 21.0459C35.6396 21.9318 35.484 22.8097 35.1397 23.6406C34.9085 24.1987 34.6002 24.7018 34.0889 25.0547C33.3268 25.5809 31.8525 25.6874 31.0977 24.4013C30.7916 23.8796 30.6396 23.3065 30.5069 22.7236C30.164 21.2205 29.8132 19.7187 29.4649 18.2168C29.3652 17.7865 29.2627 17.3565 29.1563 16.9033C28.9289 17.0598 28.7547 17.247 28.6407 17.4707C28.4287 17.8872 28.233 18.3132 28.0498 18.7431C27.8101 19.3059 27.5943 19.8836 27.1934 20.3554C25.8977 21.881 23.8114 22.5708 21.6748 21.6279C20.7231 21.2077 19.9131 20.6151 19.417 19.6777C18.6868 18.2976 18.5895 16.8836 19.337 15.4814C19.7143 14.7738 20.2355 14.1607 20.8174 13.6045C20.9131 13.513 21.0054 13.4171 21.0987 13.3232C21.1053 13.3165 21.1081 13.3056 21.125 13.2715C19.0201 12.8742 16.9252 12.8754 14.7891 13.2461C14.8996 13.3584 14.9835 13.4489 15.0733 13.5332C15.6865 14.109 16.2264 14.7504 16.6319 15.4853C17.252 16.6089 17.2713 17.7935 16.8594 18.9892C16.4264 20.2467 15.5363 21.0751 14.3409 21.6045C13.0659 22.169 11.7798 22.2381 10.4932 21.6592C9.31318 21.1283 8.49376 20.2528 8.03227 19.0361C7.8451 18.5422 7.62199 18.0604 7.39262 17.584C7.24337 17.2739 7.00619 17.0271 6.70317 16.8174C6.62981 17.1331 6.55966 17.4332 6.49027 17.7334C6.16674 19.1315 5.84402 20.5299 5.51957 21.9277C5.38381 22.5117 5.2609 23.1001 5.1016 23.6777C4.99151 24.0771 4.78572 24.4377 4.51078 24.7549C3.77431 25.6032 2.45123 25.5179 1.74027 24.9228C1.27551 24.5338 0.998936 24.0235 0.790079 23.4697C0.51363 22.7361 0.370845 21.9703 0.275431 21.1963C0.0625906 19.4694 -0.0391154 17.7349 0.0146884 15.9961C0.0639243 14.4025 0.145108 12.8095 0.239298 11.2177C0.293428 10.303 0.380001 9.38862 0.487345 8.47849C0.644598 7.14865 1.20265 5.99432 2.10746 5.00876C2.25884 4.84393 2.42083 4.68749 2.58598 4.53611C2.65364 4.47384 2.67533 4.42018 2.62895 4.3408C2.61888 4.32371 2.61641 4.30211 2.60941 4.28318C2.46019 3.87647 2.45845 3.87395 2.80668 3.60154C3.75687 2.85869 4.77722 2.24333 5.95219 1.92283C6.43149 1.79205 6.91854 1.72986 7.41801 1.7656C7.56878 1.7763 7.65507 1.82431 7.68168 1.97263C7.6861 1.9963 7.70206 2.01729 7.70024 2.01365H7.70121C8.85964 1.6644 9.99349 1.30045 11.1397 0.982397C12.7909 0.524039 14.4739 0.222765 16.1827 0.0781004ZM11.6436 14.5459C11.5481 14.5459 11.4554 14.584 11.3877 14.6513C11.3203 14.7187 11.2825 14.8109 11.2823 14.9062V16.5761H9.60942C9.51394 16.5762 9.42124 16.6143 9.35356 16.6816C9.28616 16.749 9.24829 16.8412 9.24809 16.9365V17.8388C9.24816 17.9343 9.2861 18.0262 9.35356 18.0937C9.42128 18.1613 9.51371 18.1992 9.60942 18.1992H11.2823V19.8681C11.2823 19.9637 11.3202 20.0564 11.3877 20.124C11.4555 20.1915 11.5479 20.2294 11.6436 20.2295H12.5469L12.6182 20.2226C12.6874 20.2088 12.7521 20.1745 12.8028 20.124C12.8702 20.0564 12.9082 19.9636 12.9082 19.8681V18.1992H14.5811L14.6524 18.1924C14.7216 18.1785 14.7863 18.1443 14.837 18.0937C14.9043 18.0262 14.9423 17.9342 14.9424 17.8388V16.9365C14.9422 16.8412 14.9044 16.749 14.837 16.6816C14.7693 16.6143 14.6766 16.5762 14.5811 16.5761H12.9082V14.9062C12.908 14.8109 12.8703 14.7187 12.8028 14.6513C12.7351 14.584 12.6424 14.5459 12.5469 14.5459H11.6436ZM23.6299 16.0361C22.8392 16.0362 22.1979 16.6768 22.1973 17.4668C22.1973 18.2572 22.8389 18.8984 23.6299 18.8984C24.4208 18.8981 25.0625 18.2571 25.0625 17.4668C25.0619 16.6769 24.4204 16.0364 23.6299 16.0361ZM24.9141 10.0381C24.1027 10.0382 23.4448 10.6961 23.4444 11.5068C23.4446 12.3176 24.1026 12.9745 24.9141 12.9746C25.7257 12.9746 26.3836 12.3177 26.3838 11.5068C26.3834 10.6961 25.7256 10.0381 24.9141 10.0381ZM29.0166 7.02048C27.7316 7.02074 26.6898 8.06175 26.6895 9.34568C26.6895 10.6298 27.7314 11.6706 29.0166 11.6709C30.3019 11.6707 31.3447 10.6299 31.3448 9.34568C31.3445 8.06172 30.3017 7.0207 29.0166 7.02048ZM7.16703 7.51755C6.06435 7.51791 5.17021 8.41113 5.16996 9.51267C5.17006 10.6143 6.06425 11.5074 7.16703 11.5078C8.27012 11.5078 9.16498 10.6146 9.16508 9.51267C9.16483 8.41091 8.27002 7.51755 7.16703 7.51755ZM32.4268 5.96091C32.1773 5.89397 31.9081 5.92981 31.6358 6.12107L31.6875 6.19529L31.6348 6.12009L31.625 6.12888C31.3844 6.3549 31.2555 6.56575 31.2139 6.77048C31.1722 6.97658 31.2224 7.16409 31.3106 7.33689C31.3977 7.50721 31.5271 7.67288 31.6495 7.83396C31.7732 7.99695 31.8926 8.15982 31.9766 8.33494C32.0646 8.56462 32.0999 8.79776 32.1211 9.02244C32.1419 9.24271 32.1507 9.46898 32.1866 9.65818C32.2233 9.85102 32.2925 10.0294 32.4493 10.1562C32.6054 10.2822 32.8337 10.3456 33.1602 10.3457H33.1661C33.5007 10.3247 33.7197 10.1432 33.8516 9.88669C33.9805 9.63579 34.0277 9.31221 34.0313 8.99021C34.0348 8.66633 33.9945 8.33347 33.9434 8.05955C33.8927 7.7881 33.8297 7.56499 33.7832 7.46189C33.6977 7.27222 33.4405 6.75768 33.0733 6.37888C32.8896 6.18958 32.6713 6.02681 32.4268 5.96091ZM28.626 4.45212C28.3017 4.44856 27.9687 4.48892 27.6944 4.54001C27.4226 4.59065 27.2 4.6538 27.0967 4.70017C26.9075 4.78524 26.3924 5.04199 26.0127 5.40915C25.8229 5.59275 25.6598 5.81104 25.5938 6.05564C25.5267 6.30496 25.5625 6.57357 25.7539 6.84568L25.7627 6.85544C25.9891 7.09596 26.1994 7.22518 26.4043 7.26658C26.611 7.30822 26.7985 7.25829 26.9717 7.1699C27.1424 7.08278 27.3074 6.95331 27.4688 6.83103C27.5919 6.73776 27.7148 6.64721 27.8428 6.57224L27.9737 6.5029C28.2026 6.41596 28.4344 6.38139 28.6582 6.36033C28.8788 6.33958 29.1046 6.33173 29.294 6.29587C29.4874 6.25918 29.6659 6.18939 29.793 6.0322C29.8876 5.91515 29.947 5.75785 29.9707 5.5488L29.9834 5.32224L29.9825 5.31638C29.9613 4.98226 29.7801 4.76252 29.5235 4.63083C29.2723 4.50218 28.9483 4.45568 28.626 4.45212Z",
                            }),
                          )
                        : "8bitdo_sn30" == _
                          ? _.createElement(
                              "svg",
                              Object.assign(
                                {
                                  viewBox: "0 0 36 36",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                                _,
                              ),
                              _.createElement(
                                "g",
                                {
                                  clipPath: _,
                                },
                                _.createElement("path", {
                                  fill: "currentColor",
                                  _: "M11.2168 10.004C11.2667 10.004 11.3173 10.0048 11.3672 10.007C11.5907 10.0171 11.7075 10.136 11.7139 10.3605V10.5197H11.8965C15.9638 10.5197 20.0313 10.5188 24.0986 10.5226C24.239 10.5226 24.2877 10.4877 24.2861 10.3439C24.2837 10.1215 24.407 10.0095 24.6426 10.0079C25.5809 10.0033 26.5196 9.99799 27.458 10.0021C27.9951 10.0045 28.534 9.99883 29.0683 10.0431C30.1561 10.133 31.1802 10.4534 32.1455 10.965C32.3761 11.0871 32.5061 11.2487 32.4639 11.5187C32.4349 11.7034 32.5097 11.814 32.668 11.9269C34.3326 13.1148 35.399 14.705 35.8115 16.714C36.1472 18.3488 36.0615 19.9547 35.3359 21.4796C34.1526 23.9665 32.214 25.5049 29.4902 26.0021C28.1318 26.2499 26.8154 26.0562 25.5508 25.5109C25.3928 25.4427 25.2679 25.4444 25.1074 25.5246C23.4412 26.358 21.4298 25.8397 20.3681 24.3107C20.3086 24.2249 20.2442 24.1962 20.1426 24.1964C18.7123 24.1994 17.2818 24.2 15.8515 24.1964C15.7425 24.1962 15.6803 24.2342 15.6191 24.3224C14.5809 25.825 12.5275 26.3527 10.8974 25.5314C10.7321 25.4481 10.5977 25.4363 10.4277 25.5109C9.50667 25.9146 8.54336 26.127 7.53514 26.0997C5.65293 26.0489 4.00893 25.3806 2.60643 24.1339C1.39697 23.0585 0.587029 21.7317 0.197251 20.1554C-0.0490111 19.1589 -0.0459867 18.154 0.103501 17.1447C0.327081 15.6367 0.938596 14.308 1.94139 13.1603C2.37813 12.6607 2.87171 12.2238 3.42186 11.8527C3.50003 11.7999 3.52651 11.7413 3.52733 11.6505C3.52983 11.2987 3.69023 11.0423 4.00877 10.882C5.17119 10.2965 6.40354 10.0013 7.70506 10.0001C8.87562 9.99932 10.0462 10.0024 11.2168 10.004ZM12.5498 20.5704C11.7008 20.5706 11.0121 21.2596 11.0117 22.1085C11.0117 22.9578 11.7006 23.6465 12.5498 23.6466C13.399 23.6465 14.0879 22.9578 14.0879 22.1085C14.0874 21.2596 13.3988 20.5706 12.5498 20.5704ZM23.4736 20.5704C22.6246 20.5706 21.936 21.2596 21.9355 22.1085C21.9355 22.9578 22.6244 23.6465 23.4736 23.6466C24.3228 23.6465 25.0117 22.9578 25.0117 22.1085C25.0113 21.2596 24.3226 20.5706 23.4736 20.5704ZM28.6064 17.8507C27.9106 17.8511 27.3461 18.4157 27.3457 19.1115C27.3457 19.8076 27.9103 20.3728 28.6064 20.3732C29.3028 20.3732 29.8681 19.8079 29.8681 19.1115C29.8677 18.4154 29.3025 17.8507 28.6064 17.8507ZM6.7119 13.465C6.53797 13.4652 6.39674 13.6065 6.39647 13.7804V15.3331C6.39645 15.4095 6.33405 15.4707 6.25877 15.4708H4.70604C4.53211 15.471 4.39093 15.6124 4.39061 15.7863V17.1974C4.39084 17.3714 4.53205 17.5117 4.70604 17.5119H6.25877C6.33487 17.512 6.39602 17.5746 6.39647 17.6496V19.2033C6.39665 19.3773 6.53791 19.5185 6.7119 19.5187H8.12303C8.29688 19.5183 8.43731 19.3772 8.43748 19.2033V17.6496C8.43793 17.5736 8.50031 17.5122 8.57518 17.5119H10.1289C10.3027 17.5115 10.4441 17.3713 10.4443 17.1974V15.7863C10.444 15.6125 10.3027 15.4712 10.1289 15.4708H8.57518C8.50006 15.4705 8.4375 15.4094 8.43748 15.3331V13.7804C8.43721 13.6066 8.29682 13.4654 8.12303 13.465H6.7119ZM25.5478 15.2316C24.8521 15.2321 24.2875 15.7966 24.2871 16.4923C24.2871 17.1884 24.8519 17.7536 25.5478 17.754C26.2442 17.754 26.8095 17.1887 26.8096 16.4923C26.8091 15.7963 26.244 15.2316 25.5478 15.2316ZM31.667 15.2316C30.9711 15.2319 30.4067 15.7965 30.4062 16.4923C30.4063 17.1885 30.9709 17.7537 31.667 17.754C32.3633 17.7539 32.9287 17.1886 32.9287 16.4923C32.9283 15.7964 32.363 15.2317 31.667 15.2316ZM28.6064 12.5988C27.9106 12.5991 27.3461 13.1637 27.3457 13.8595C27.3458 14.5556 27.9104 15.1209 28.6064 15.1212C29.3027 15.1212 29.868 14.5558 29.8681 13.8595C29.8677 13.1635 29.3025 12.5988 28.6064 12.5988Z",
                                }),
                              ),
                              _.createElement(
                                "defs",
                                null,
                                _.createElement(
                                  "clipPath",
                                  {
                                    _: _,
                                  },
                                  _.createElement("rect", {
                                    fill: "currentColor",
                                    width: "36",
                                    height: "36",
                                  }),
                                ),
                              ),
                            )
                          : "8bitdo_pro" == _
                            ? _.createElement(
                                "svg",
                                Object.assign(
                                  {
                                    viewBox: "0 0 36 36",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                  _,
                                ),
                                _.createElement(
                                  "g",
                                  {
                                    clipPath: _,
                                  },
                                  _.createElement("path", {
                                    fill: "currentColor",
                                    _: "M27.7734 6.01249C28.9788 6.03744 30.1205 6.33782 31.1855 6.91483C31.3082 6.98141 31.3941 7.0615 31.4326 7.16971H31.0996V7.17362H31.4335C31.4524 7.22852 31.4594 7.29064 31.4521 7.3621C31.4407 7.47552 31.4843 7.54171 31.5859 7.60721C33.2663 8.68591 34.2958 10.2253 34.7167 12.1609C35.0706 13.7884 35.3234 15.4352 35.5361 17.0877C35.7469 18.7244 35.8609 20.3682 35.9335 22.0154C35.9671 22.7781 36.004 23.542 35.9999 24.3055C35.9944 25.303 35.8569 26.2831 35.4531 27.2088C34.9562 28.347 34.1485 29.1542 32.9384 29.5017C31.6727 29.8653 30.6028 29.5341 29.7509 28.5262C29.2715 27.9585 28.9464 27.3013 28.7177 26.6014C28.5088 25.9616 28.344 25.3077 28.1474 24.6639C27.6047 22.8866 26.5032 21.5482 24.9238 20.5887C24.9213 20.5871 24.9184 20.5862 24.916 20.5848L25.1503 20.2723L25.1718 20.2469L25.1728 20.2478L25.1904 20.2273C25.2862 20.2759 25.3768 20.3034 25.4365 20.323L25.7773 20.4256C25.8937 20.4577 26.012 20.487 26.124 20.5115L26.4384 20.573C27.1766 20.6984 27.9391 20.7019 28.6767 20.5828L28.6757 20.5818C31.2157 20.1944 33.4046 18.277 34.166 15.8308L34.165 15.8299C35.6102 11.3723 32.3235 6.65548 27.5917 6.65506V6.65409H8.4062V6.65506C5.37767 6.6497 2.70335 8.67037 1.81049 11.5506C1.00503 14.1045 1.74193 16.9571 3.68745 18.7879L3.87983 18.9617C4.91492 19.8713 6.23159 20.462 7.60053 20.6228H7.60151C8.67153 20.7459 9.79336 20.6306 10.8066 20.2273C10.8114 20.2327 10.8176 20.2378 10.8222 20.243L10.8886 20.1834L10.8222 20.2439L10.8271 20.2488L10.833 20.2557C10.8366 20.2598 10.842 20.2657 10.8476 20.2723C10.8594 20.2862 10.8744 20.3052 10.8915 20.326C10.9263 20.3681 10.9694 20.4197 11.0126 20.4724C11.0418 20.508 11.072 20.5445 11.0996 20.5779C11.0938 20.581 11.0879 20.5842 11.082 20.5877C9.89406 21.2973 8.98056 22.2657 8.32905 23.4842C8.03441 24.0355 7.85478 24.6298 7.69721 25.2303C7.50206 25.9733 7.29989 26.7134 6.96284 27.408C6.64138 28.0702 6.24258 28.6754 5.63471 29.1131C4.81567 29.7026 3.91714 29.77 2.98042 29.4724C1.77578 29.0895 0.984754 28.2619 0.511667 27.1101C0.206212 26.3666 0.0705524 25.5865 0.0243618 24.7879C-0.046774 23.562 0.0538517 22.3407 0.122018 21.1189C0.161122 20.4188 0.195563 19.7179 0.265573 19.0203C0.368012 18.003 0.474778 16.9846 0.627877 15.9744C0.821202 14.6994 1.02971 13.4249 1.29194 12.1629C1.69465 10.2234 2.74378 8.70172 4.4062 7.61405C4.51078 7.54554 4.57148 7.47897 4.55659 7.3494C4.53428 7.15242 4.62772 7.02617 4.79975 6.93046C5.59838 6.48682 6.45226 6.20819 7.35444 6.09159C7.80468 6.03349 8.26203 6.01478 8.71674 6.00956C9.68191 5.99838 10.6481 6.00686 11.6132 6.0076C11.6623 6.00761 11.7116 6.00867 11.7607 6.01053C12.0309 6.02025 12.1172 6.09801 12.1552 6.37186V6.37088H23.8154C23.8752 6.26485 23.9075 6.14249 23.9863 6.08768C24.0726 6.02812 24.2031 6.01093 24.3144 6.01053C25.4672 6.00532 26.621 5.98866 27.7734 6.01249ZM27.5878 7.23026L27.9902 7.24296C31.9701 7.49058 34.7257 11.4172 33.7294 15.2713L33.6171 15.656L33.6152 15.659C32.9396 17.8298 31.0302 19.5502 28.8037 19.9764L28.5878 20.0135H28.5849C27.9099 20.1225 27.211 20.1195 26.5351 20.0047L26.247 19.949C26.0499 19.9059 25.8293 19.8435 25.6337 19.7801C26.2276 19.1014 26.5334 18.1831 26.4589 17.283H26.4599C26.3463 15.5899 24.908 14.1684 23.207 14.1199H23.041C21.3039 14.1281 19.8318 15.5696 19.7148 17.283H19.7158C19.6765 17.7706 19.7462 18.2662 19.914 18.7244V18.7254L19.9277 18.7674L19.9287 18.7713L19.9423 18.8123L19.9521 18.8435L19.9648 18.8963L19.9716 18.9441H19.9726L19.9765 18.9793V18.9812L19.9804 19.0144L19.9824 19.0428V19.0603L19.9814 19.073L19.9804 19.0955V19.1033L19.9277 19.2693L20.2021 19.3562L20.2548 19.3728V19.4764H20.2568L20.3339 19.3982L20.4765 19.4432L20.5292 19.2781L20.5302 19.2693L20.5322 19.2703L20.5341 19.2644L20.5371 19.2488L20.538 19.2469L20.5507 19.1873L20.5527 19.1697V19.1668L20.5546 19.1473L20.5566 19.1189V19.1033L20.5576 19.0916L20.5585 19.0701V19.0428L20.5576 19.0242L20.5537 18.9627L20.5527 18.9471L20.5449 18.8807L20.5429 18.867L20.5312 18.7937L20.5263 18.7683L20.5068 18.6902H20.5078L20.5039 18.6775L20.4921 18.6385L20.4892 18.6307L20.4755 18.5896L20.4628 18.5506H20.4638L20.4589 18.5379L20.4091 18.3914C20.3029 18.0482 20.2617 17.6837 20.291 17.326L20.0136 17.3025L20.289 17.3221C20.3864 15.8966 21.6228 14.7 23.0488 14.6961L23.0546 14.6951C24.5067 14.66 25.787 15.8694 25.8847 17.3211V17.3269C25.9568 18.1839 25.6106 19.0661 24.9697 19.6355L25.1601 19.8504L24.9687 19.6346L24.9609 19.6433L24.9042 19.698L24.8515 19.7478L24.8437 19.7557L24.7949 19.8064L24.791 19.8113L24.748 19.8582L24.7451 19.8611L24.7128 19.8982L24.6962 19.9168L24.4111 20.2976L24.3974 20.3142L24.3857 20.3299L24.3935 20.3357L24.3544 20.3758L24.3525 20.3797L24.5966 20.5017L24.6025 20.5125L24.6415 20.5906C23.0992 21.3439 21.1855 20.8778 20.166 19.4949C20.1056 19.4133 20.0441 19.3832 19.9443 19.3836C18.6485 19.3869 17.3524 19.387 16.0566 19.3855C15.9769 19.3855 15.9142 19.394 15.8613 19.4685C14.9119 20.8074 12.9767 21.3814 11.3662 20.5935L11.4335 20.5242L11.6328 20.3162C11.6285 20.3115 11.6106 20.2916 11.5771 20.2517C11.5429 20.211 11.5006 20.1592 11.458 20.1072C11.3816 20.0142 11.2904 19.9026 11.2539 19.8621H11.2548C11.1885 19.787 11.1037 19.7023 11.0273 19.6346H11.0263C10.3864 19.0651 10.0392 18.1831 10.1113 17.3269L10.1123 17.324C10.2204 15.8833 11.4308 14.7105 12.872 14.6961L12.874 14.6951C14.3453 14.6707 15.5979 15.855 15.708 17.324V17.325C15.7357 17.6841 15.6956 18.0487 15.5898 18.3914L15.54 18.5379L15.538 18.5428C15.4742 18.7262 15.4041 18.9852 15.4599 19.2488L15.7421 19.1883L15.7695 19.1824L15.7441 19.1902L15.4687 19.2752L15.5195 19.4402L16.0703 19.2723L16.0214 19.114C16.0052 19.0154 16.0275 18.8903 16.08 18.7381C16.2308 18.3318 16.3013 17.8967 16.291 17.4646L16.2822 17.2801C16.15 15.5194 14.6532 14.0912 12.8662 14.1199H12.8642C11.1679 14.1378 9.75791 15.4668 9.55366 17.1199L9.53706 17.281C9.46215 18.1795 9.76702 19.0975 10.3583 19.7762C9.50533 20.0699 8.57082 20.1545 7.66694 20.0506H7.66596C6.49271 19.9124 5.35766 19.4282 4.4394 18.6814L4.25874 18.5281H4.25776C2.34413 16.8601 1.59604 14.1449 2.35932 11.7244L2.3603 11.7224L2.44135 11.4773C3.33297 8.9628 5.72246 7.22514 8.4062 7.23026H27.5878ZM12.8828 15.7625C12.0828 15.7627 11.4339 16.4123 11.4335 17.2127C11.4335 18.0134 12.0825 18.6627 12.8828 18.6629C13.6832 18.6629 14.332 18.0136 14.332 17.2127C14.3316 16.4121 13.6829 15.7625 12.8828 15.7625ZM23.1162 15.7625C22.3163 15.7629 21.6673 16.4123 21.6669 17.2127C21.6669 18.0133 22.316 18.6625 23.1162 18.6629C23.9166 18.6629 24.5654 18.0136 24.5654 17.2127C24.565 16.4121 23.9163 15.7625 23.1162 15.7625ZM27.8808 13.1892C27.1708 13.1893 26.5948 13.7659 26.5947 14.4764C26.5947 15.1868 27.1708 15.7624 27.8808 15.7625C28.5908 15.7623 29.1669 15.1868 29.1669 14.4764C29.1668 13.766 28.5908 13.1894 27.8808 13.1892ZM7.45405 9.20682C7.28806 9.20699 7.1525 9.34261 7.15229 9.50858V10.9764C7.15205 11.0454 7.09514 11.1031 7.02631 11.1033H5.55952C5.39342 11.1034 5.25786 11.239 5.25776 11.4051V12.7381C5.258 12.904 5.39351 13.0397 5.55952 13.0398H7.02631C7.09523 13.04 7.15219 13.0977 7.15229 13.1668V14.6346C7.15264 14.8004 7.28815 14.9362 7.45405 14.9363H8.78706C8.9528 14.936 9.08749 14.8003 9.08784 14.6346V13.1668C9.08794 13.0976 9.14581 13.0399 9.21479 13.0398H10.6816C10.8474 13.0395 10.9821 12.9039 10.9824 12.7381V11.4051C10.9823 11.2401 10.8491 11.1052 10.6845 11.1033L10.6796 11.1014H9.21284C9.14395 11.1013 9.08808 11.0454 9.08784 10.9764V9.50858C9.08763 9.34273 8.95288 9.20717 8.78706 9.20682H7.45405ZM25.0615 10.7459C24.3517 10.7462 23.7756 11.3228 23.7753 12.033C23.7754 12.7433 24.3516 13.3188 25.0615 13.3191C25.7716 13.3191 26.3475 12.7435 26.3476 12.033C26.3474 11.3226 25.7715 10.7459 25.0615 10.7459ZM30.6874 10.7459C29.9775 10.746 29.4016 11.3227 29.4013 12.033C29.4014 12.7435 29.9774 13.319 30.6874 13.3191C31.3976 13.3191 31.9735 12.7435 31.9736 12.033C31.9733 11.3226 31.3974 10.7459 30.6874 10.7459ZM27.8808 8.28788C27.1708 8.28797 26.5948 8.86454 26.5947 9.57499C26.5949 10.2853 27.1709 10.861 27.8808 10.8611C28.5907 10.8609 29.1667 10.2852 29.1669 9.57499C29.1668 8.8646 28.5908 8.28807 27.8808 8.28788Z",
                                  }),
                                ),
                                _.createElement(
                                  "defs",
                                  null,
                                  _.createElement(
                                    "clipPath",
                                    {
                                      _: _,
                                    },
                                    _.createElement("rect", {
                                      fill: "currentColor",
                                      width: "36",
                                      height: "36",
                                    }),
                                  ),
                                ),
                              )
                            : "8bitdo_ultimate" == _
                              ? _.createElement(
                                  "svg",
                                  Object.assign(
                                    {
                                      viewBox: "0 0 36 36",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                    _,
                                  ),
                                  _.createElement(
                                    "g",
                                    {
                                      clipPath: _,
                                    },
                                    _.createElement("path", {
                                      fill: "currentColor",
                                      _: "M25.3865 5.11825C26.755 4.90005 28.1094 4.97923 29.4236 5.39462C30.4285 5.71216 31.3614 6.19989 32.1726 6.89462C32.3276 7.02768 32.4119 7.17257 32.408 7.37704C32.4056 7.49827 32.4255 7.61963 32.4314 7.69345C32.5721 7.80286 32.6969 7.87505 32.7898 7.97567C33.7307 8.99583 34.2022 10.2489 34.5398 11.5626C34.9787 13.2716 35.2054 15.0185 35.4158 16.7657C35.5919 18.2301 35.751 19.6978 35.8796 21.1671C36.0269 22.851 36.0917 24.5378 35.7634 26.212C35.5761 27.1675 35.2593 28.0684 34.5789 28.7999C33.9668 29.458 33.1821 29.8296 32.3533 30.1241C31.7359 30.3438 31.5771 30.317 31.2107 29.7599C30.651 28.9095 30.1303 28.0326 29.5935 27.1671C28.9629 26.149 28.3487 25.1202 27.6961 24.1163C27.2547 23.4372 26.6937 22.8717 25.8972 22.6016C25.2789 22.3918 24.6367 22.3551 23.991 22.3556C19.8645 22.3575 15.7376 22.3624 11.6111 22.3614C10.178 22.3614 9.04967 22.9302 8.28492 24.1524C7.43808 25.5056 6.61368 26.8734 5.77515 28.2325C5.46691 28.7316 5.1469 29.2242 4.82887 29.7169C4.76726 29.8121 4.68876 29.8965 4.61695 29.9845C4.40805 30.2398 4.16884 30.3079 3.84058 30.1925C2.86063 29.848 1.9303 29.4329 1.25465 28.5997C0.678281 27.8888 0.403921 27.0492 0.233162 26.169C-0.034456 24.7888 -0.0493176 23.3911 0.0759357 22.0011C0.277018 19.7696 0.510949 17.5401 0.783944 15.3165C0.992378 13.6187 1.26467 11.9263 1.85328 10.3067C2.16201 9.45791 2.57326 8.66447 3.19508 7.99716C3.29517 7.88989 3.42374 7.80944 3.57496 7.68954C3.49832 7.16883 3.8053 6.87846 4.18922 6.60555C6.15956 5.20425 8.33914 4.74637 10.7107 5.12997C11.05 5.18473 11.0504 5.18936 11.4265 5.58016C11.5389 5.56107 11.6476 5.52694 11.7566 5.52645C14.8635 5.51177 17.97 5.49081 21.0769 5.49227C22.2174 5.49277 23.3574 5.5474 24.4978 5.57235C24.5492 5.57333 24.6169 5.53872 24.6502 5.49813C24.842 5.26328 25.09 5.16571 25.3865 5.11825ZM12.2996 14.6524C12.1182 14.6524 11.9696 14.8002 11.9695 14.9815V16.6192C11.9695 16.7005 11.9009 16.7683 11.8181 16.7686H10.1697C9.98837 16.7687 9.8397 16.9165 9.83961 17.0977V18.586C9.83976 18.7673 9.98841 18.914 10.1697 18.9141H11.8181C11.9008 18.9145 11.9693 18.9825 11.9695 19.0636V20.7022C11.9696 20.8836 12.1182 21.0304 12.2996 21.0304H13.7976C13.9786 21.0298 14.1276 20.8832 14.1277 20.7022V19.0636C14.1279 18.9823 14.1952 18.9142 14.2781 18.9141H15.9265C16.1076 18.9138 16.2564 18.7671 16.2566 18.586V17.0977C16.2565 16.9175 16.1094 16.7704 15.9295 16.7686L15.9246 16.7667H14.2761C14.193 16.7667 14.1277 16.7007 14.1277 16.6192V14.9815C14.1276 14.8005 13.9786 14.653 13.7976 14.6524H12.2996ZM22.9158 15.9591C21.8797 15.9591 21.0382 16.7996 21.0378 17.835C21.0379 18.8707 21.8795 19.711 22.9158 19.711C23.9516 19.7105 24.7927 18.8704 24.7927 17.835C24.7924 16.7999 23.9514 15.9596 22.9158 15.9591ZM28.3132 13.3809C27.6194 13.3809 27.0564 13.9433 27.0564 14.6368C27.0564 15.3303 27.6194 15.8927 28.3132 15.8927C29.0066 15.8922 29.5691 15.3299 29.5691 14.6368C29.5691 13.9436 29.0066 13.3814 28.3132 13.3809ZM7.63648 10.2296C6.60034 10.2296 5.75873 11.07 5.75855 12.1056C5.75883 13.141 6.6004 13.9815 7.63648 13.9815C8.67212 13.981 9.51316 13.1407 9.51344 12.1056C9.51326 11.0703 8.67218 10.2301 7.63648 10.2296ZM25.7566 10.8233C25.0622 10.8233 24.4999 11.3851 24.4998 12.0792C24.4998 12.7733 25.0621 13.335 25.7566 13.335C26.4507 13.3346 27.0124 12.773 27.0125 12.0792C27.0124 11.3854 26.4507 10.8238 25.7566 10.8233ZM30.8826 10.8233C30.1888 10.8233 29.6258 11.3858 29.6257 12.0792C29.6258 12.7726 30.1888 13.335 30.8826 13.335C31.5761 13.3347 32.1384 12.7724 32.1384 12.0792C32.1383 11.386 31.576 10.8237 30.8826 10.8233ZM28.3289 8.26376C27.635 8.26376 27.072 8.82614 27.072 9.51962C27.0722 10.2129 27.6352 10.7755 28.3289 10.7755C29.0221 10.775 29.5845 10.2126 29.5847 9.51962C29.5847 8.82643 29.0223 8.26424 28.3289 8.26376Z",
                                    }),
                                  ),
                                  _.createElement(
                                    "defs",
                                    null,
                                    _.createElement(
                                      "clipPath",
                                      {
                                        _: _,
                                      },
                                      _.createElement("rect", {
                                        fill: "currentColor",
                                        width: "36",
                                        height: "36",
                                      }),
                                    ),
                                  ),
                                )
                              : _.createElement(_, Object.assign({}, _));
      }
      function _(_) {
        const { off: _ } = _;
        (0, _._)(_, ["off"]);
        return _
          ? _.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                _,
              ),
              _.createElement("path", {
                _: "M31.06 13L27.82 16.24C27.9314 16.8338 27.9916 17.436 28 18.04C28.001 19.0585 27.8424 20.0707 27.53 21.04H24L21 29.04L26 32.04C31.07 25.77 31.74 20.69 31.74 20.69C31.9114 19.8205 31.9985 18.9364 32 18.05C32.0008 16.3231 31.6821 14.611 31.06 13Z",
                fill: "currentColor",
              }),
              _.createElement("path", {
                _: "M33.06 6.76005L30.94 4.64005L27.65 7.93005C25.6668 6.04325 23.1741 4.77921 20.48 4.2943C17.786 3.80939 15.0089 4.12489 12.4923 5.20176C9.97574 6.27863 7.83004 8.06963 6.32066 10.3532C4.81129 12.6368 4.00447 15.3127 4 18.05C4.00415 18.94 4.09458 19.8275 4.27 20.7C4.8128 23.3864 5.8541 25.9472 7.34 28.25L3.94 31.64L6.06 33.76L33.06 6.76005ZM12.69 22.89L12 21.05H8.47C8.15762 20.0807 7.99903 19.0685 8 18.05C8.00457 16.104 8.57689 14.2015 9.6468 12.5759C10.7167 10.9503 12.2377 9.67215 14.0233 8.89825C15.8089 8.12435 17.7815 7.88828 19.6993 8.21899C21.6171 8.54969 23.3967 9.4328 24.82 10.76L12.69 22.89Z",
                fill: "currentColor",
              }),
            )
          : _.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                _,
              ),
              _.createElement("path", {
                _: "M32 18.05C32 14.337 30.525 10.7761 27.8995 8.15055C25.274 5.52504 21.713 4.05005 18 4.05005C14.287 4.05005 10.726 5.52504 8.1005 8.15055C5.475 10.7761 4 14.337 4 18.05C4.00415 18.94 4.09457 19.8275 4.27 20.7001C4.27 20.7001 4.93 25.78 10 32.05L15 29.05L12 21.05H8.47C8.15762 20.0807 7.99903 19.0685 8 18.05C8 15.3979 9.05357 12.8543 10.9289 10.979C12.8043 9.10362 15.3478 8.05005 18 8.05005C20.6522 8.05005 23.1957 9.10362 25.0711 10.979C26.9464 12.8543 28 15.3979 28 18.05C28.001 19.0685 27.8424 20.0807 27.53 21.05H24L21 29.05L26 32.05C31.07 25.78 31.74 20.7001 31.74 20.7001C31.9121 19.8272 31.9991 18.9397 32 18.05Z",
                fill: "currentColor",
              }),
            );
      }
      function _(_) {
        return _.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_VREnvironment",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            _,
          ),
          _.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M18 2A16 16 0 1 1 18 34A16 16 0 1 1 18 2ZM6 26.05L14.5 15.05L18 19.58L19.4 21.39L22 18.05L28.22 26.05ZM25 10.05A3 3 0 1 1 25 16.05A3 3 0 1 1 25 10.05Z",
          }),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new _._("VRGamepadUIMessages");
      const _ = new (class {
        get Steam() {
          return this.m_Steam_ClientMethods;
        }
        get SteamVR() {
          return this.m_SteamVR_Provider;
        }
        get Log() {
          return _;
        }
        constructor() {
          (this.m_SteamVR_Provider = new _._(this, _._)),
            (this.m_Steam_Client = new _._(this)),
            (this.m_Steam_ClientMethods = new _._(this.m_Steam_Client)),
            (this.m_mailbox = new _._nH()),
            (this.m_unNextVRGamepadUIMessageId =
              1e6 * Math.floor((Math.random() * _._) / 1e6)),
            (0, _.makeObservable)(this);
        }
        Init() {
          return (0, _._)(this, void 0, void 0, function* () {
            (0, _.autorun)(() =>
              this.m_Steam_Client.NotifyConnectionStateChanged(
                this.IsConnected(),
              ),
            ),
              yield this.m_mailbox.Init("vrgamepadui_messages"),
              this.m_mailbox.RegisterHandler("vrgamepadui_message", (_) => {
                const _ = (0, _._)(_.header);
                _ &&
                  ((0, _._)(_)
                    ? this.m_SteamVR_Provider.HandleVRGamepadUIMessageRequest(
                        _,
                        _.payload,
                      )
                    : (0, _._)(_)
                      ? this.m_Steam_Client.HandleVRGamepadUIMessageResponse(
                          _,
                          _.payload,
                        )
                      : _.Error(
                          "Received message from Steam that's neither a request nor response. Header:",
                          JSON.stringify(_),
                        ));
              });
          });
        }
        CreateVRGamepadUIMessageId() {
          return (
            (this.m_unNextVRGamepadUIMessageId =
              this.m_unNextVRGamepadUIMessageId % (_._ - 1)),
            this.m_unNextVRGamepadUIMessageId++
          );
        }
        SendVRGamepadUIMessage(_, _) {
          let _, _;
          try {
            _ = _._.fromObject(_).serializeBase64String();
          } catch (_) {
            return _._.HeaderSerializationFailure;
          }
          try {
            _ = _.serializeBase64String();
          } catch (_) {
            return _._.PayloadSerializationFailure;
          }
          try {
            this.m_mailbox
              .WaitForConnect()
              .then(() => {
                this.m_mailbox.SendMessage("web_steam_mailbox", {
                  type: "vrgamepadui_message",
                  header: _,
                  payload: _,
                });
              })
              .catch((_) => {
                console.error(
                  "Failed to send VRGamepadUIMessage via Mailbox:",
                  _,
                );
              });
          } catch (_) {
            return _._.SendFailure;
          }
          return _._.Success;
        }
        IsConnected() {
          return _._.connected && this.m_mailbox.connected;
        }
      })();
      window.VRGamepadUIMessages = _;
      const _ = _;
    },
  },
]);
