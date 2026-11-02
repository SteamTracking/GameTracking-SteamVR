var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [906, 458],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.Parent = 0)] = "Parent"), (_[(_.World = 1)] = "World");
      })(_ || (_ = {}));
      class _ extends _._ {
        constructor(_) {
          super(_);
        }
        internalRender() {
          var _;
          const _ = null === (_ = this.props.enabled) || void 0 === _ || _,
            _ = this.props.rotation_start_angle_threshold
              ? (this.props.rotation_start_angle_threshold * Math._) / 180
              : null,
            _ = this.props.rotation_stop_angle_threshold
              ? (this.props.rotation_stop_angle_threshold * Math._) / 180
              : null,
            _ = this.props.rotation_ease_out_angle_threshold
              ? (this.props.rotation_ease_out_angle_threshold * Math._) / 180
              : null,
            _ = this.props.rotation_min_angular_velocity
              ? (this.props.rotation_min_angular_velocity * Math._) / 180
              : null,
            _ = this.props.rotation_max_angular_velocity
              ? (this.props.rotation_max_angular_velocity * Math._) / 180
              : null;
          return _.createElement(
            "vsg-elastic-head-transform",
            {
              "rotation-start-angle-threshold": _,
              "rotation-stop-angle-threshold": _,
              "rotation-ease-in-time": this.props.rotation_ease_in_time,
              "rotation-ease-in-power": this.props.rotation_ease_in_power,
              "rotation-ease-out-angle-threshold": _,
              "rotation-ease-out-power": this.props.rotation_ease_out_power,
              "rotation-min-angular-velocity": _,
              "rotation-max-angular-velocity": _,
              "translation-start-distance-threshold":
                this.props.translation_start_distance_threshold,
              "translation-stop-distance-threshold":
                this.props.translation_stop_distance_threshold,
              "translation-ease-in-time": this.props.translation_ease_in_time,
              "translation-ease-in-power": this.props.translation_ease_in_power,
              "translation-ease-out-distance-threshold":
                this.props.translation_ease_out_distance_threshold,
              "translation-ease-out-power":
                this.props.translation_ease_out_power,
              "translation-velocity": this.props.translation_velocity,
              enabled: _,
              "lock-to-horizon": this.props.lock_to_horizon,
              "translation-parent": this.props.translation_parent,
              "rotation-translation-change-together":
                this.props.rotation_translation_change_together,
            },
            this.props.children,
          );
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _,
        _,
        _,
        _,
        _,
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        if (_) return [_._, _._];
      }
      function _(_) {
        switch (_) {
          case _.TopLeft:
            return {
              _: -1,
              _: 1,
            };
          case _.TopCenter:
            return {
              _: 0,
              _: 1,
            };
          case _.TopRight:
            return {
              _: 1,
              _: 1,
            };
          case _.CenterLeft:
            return {
              _: -1,
              _: 0,
            };
          case _.Center:
            return {
              _: 0,
              _: 0,
            };
          case _.CenterRight:
            return {
              _: 1,
              _: 0,
            };
          case _.BottomLeft:
            return {
              _: -1,
              _: -1,
            };
          case _.BottomCenter:
            return {
              _: 0,
              _: -1,
            };
          case _.BottomRight:
            return {
              _: 1,
              _: -1,
            };
        }
      }
      !(function (_) {
        (_[(_.TopLeft = 0)] = "TopLeft"),
          (_[(_.TopCenter = 1)] = "TopCenter"),
          (_[(_.TopRight = 2)] = "TopRight"),
          (_[(_.CenterLeft = 3)] = "CenterLeft"),
          (_[(_.Center = 4)] = "Center"),
          (_[(_.CenterRight = 5)] = "CenterRight"),
          (_[(_.BottomLeft = 6)] = "BottomLeft"),
          (_[(_.BottomCenter = 7)] = "BottomCenter"),
          (_[(_.BottomRight = 8)] = "BottomRight");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.Mono = 0)] = "Mono"),
            (_[(_.Parallel = 1)] = "Parallel"),
            (_[(_.Crossed = 2)] = "Crossed"),
            (_[(_.Panorama = 3)] = "Panorama"),
            (_[(_.StackedPanorama = 4)] = "StackedPanorama");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Visible = 0)] = "Visible"),
            (_[(_.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
            (_[(_.Hidden = 2)] = "Hidden"),
            (_[(_.InvisibleButIntersectable = 3)] =
              "InvisibleButIntersectable");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Default = 0)] = "Default"),
            (_[(_.Disabled = 1)] = "Disabled"),
            (_[(_.Low = 2)] = "Low");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.Auto = 1)] = "Auto"),
            (_[(_.PendingGamepadFocus = 2)] = "PendingGamepadFocus"),
            (_[(_.GamepadFocusNotSupported = 3)] = "GamepadFocusNotSupported");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.PixelOffset = 0)] = "PixelOffset"),
            (_[(_.ScaleAndCenter = 1)] = "ScaleAndCenter");
        })(_ || (_ = {}));
      class _ extends _._ {
        constructor(_) {
          super(_),
            (this.m_Rect = {
              _: 0,
              _: 0,
              width: 0,
              height: 0,
            }),
            (this.m_nEmbeddedIndex = void 0),
            (this.m_LastDOMContentSize = void 0),
            (this.m_DOMContentSizeChangedCallbacks = new _._()),
            (this.m_resizeObserver = null),
            (this.m_UVsMin = void 0),
            (this.m_UVsMax = void 0),
            (this.m_bOverdragBlocking = !1),
            (this.m_overdragBlockingElements = []),
            (this.m_gamepadButtonHandlerHandle = void 0);
          const _ = void 0 !== this.props.width || void 0 !== this.props.height,
            _ = void 0 !== this.props.meters_per_pixel,
            _ = void 0 !== this.props.target_dpi_panel_id,
            _ =
              void 0 !== this.props.rendermodel_component_device_index ||
              void 0 !== this.props.rendermodel_component_name,
            _ =
              void 0 !== this.props.subview_parent_panel_id ||
              void 0 !== this.props.subview_parent_panel_key;
          if (
            _ &&
            (void 0 === this.props.rendermodel_component_device_index ||
              void 0 === this.props.rendermodel_component_name)
          )
            throw new Error(
              "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
            );
          const _ = [_, _, _, _, _].filter((_) => _).length,
            _ =
              "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, a rendermodel name, or a parent overlay of which to become a subview.";
          if (0 == _)
            throw new Error(`Panel requires one of the following props: ${_}.`);
          if (_ > 1)
            throw new Error(
              `Panel cannot have more of the following of the following props: ${_}.`,
            );
          super.setBuildNodeOverride(this.buildNode);
        }
        get lastDOMContentSize() {
          return this.m_LastDOMContentSize;
        }
        RegisterForDOMContentSizeChangedCallback(_) {
          return this.m_DOMContentSizeChangedCallbacks.Register(_);
        }
        get isExternal() {
          return !!this.props.overlay_key;
        }
        getExternalOverlayKey() {
          return this.props.overlay_key;
        }
        getEmbeddedIndex() {
          return this.m_nEmbeddedIndex;
        }
        componentWillReceiveProps_UNSAFE() {
          _.s_bPanelsAreDirty = !0;
        }
        componentDidMount() {
          super.componentDidMount(),
            (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
            this.m_resizeObserver.observe(this.getCurrentRootElement()),
            (this.m_nEmbeddedIndex = _._.Current().addEmbeddedPanelUVs(this)),
            (_.s_bPanelsAreDirty = !0),
            this.getCurrentRootElement().addEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            this.forceUpdate(),
            _.s_setAllPanels.add(this),
            (this.m_gamepadButtonHandlerHandle =
              null === _._ || void 0 === _._
                ? void 0
                : _._.RegisterGamepadButtonHandler(this.m_SGID, this, 0));
        }
        onResizeObserved(_, _) {
          _._.Current().forceLayoutUpdate(),
            (this.m_LastDOMContentSize = {
              clientWidth: _[0].contentRect.width,
              clientHeight: _[0].contentRect.height,
            }),
            this.m_DOMContentSizeChangedCallbacks.Dispatch(
              this.m_LastDOMContentSize,
            );
        }
        componentWillUnmount() {
          var _;
          _.s_setAllPanels.delete(this),
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null)),
            this.stopOverDragBlocking(),
            this.getCurrentRootElement().removeEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            (_.s_bPanelsAreDirty = !0),
            _._.Current().removeEmbeddedPanelUVs(this),
            this.m_DOMContentSizeChangedCallbacks.ClearAllCallbacks(),
            null === (_ = this.m_gamepadButtonHandlerHandle) ||
              void 0 === _ ||
              _.Unregister(),
            super.componentWillUnmount();
        }
        onPanelMouseDown() {
          this.startOverDragBlocking();
        }
        startOverDragBlocking() {
          if (this.m_bOverdragBlocking) return;
          const _ = document.body.getBoundingClientRect(),
            _ = this.getCurrentRootElement().getBoundingClientRect();
          this.createOverdragBlockingElement(0, 0, _.width, _._),
            this.createOverdragBlockingElement(
              0,
              _._ + _.height,
              _.width,
              _.height - _.height - _._,
            ),
            this.createOverdragBlockingElement(0, _._, _._, _.height),
            this.createOverdragBlockingElement(
              _._ + _.width,
              _._,
              _.width - _.width - _._,
              _.height,
            ),
            window.document.addEventListener("mouseup", this.onWindowMouseUp),
            (this.m_bOverdragBlocking = !0);
        }
        stopOverDragBlocking() {
          this.m_bOverdragBlocking &&
            (this.m_overdragBlockingElements.forEach((_) => {
              document.body.removeChild(_);
            }),
            (this.m_overdragBlockingElements = []),
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp,
            ),
            (this.m_bOverdragBlocking = !1));
        }
        createOverdragBlockingElement(_, _, _, _) {
          let _ = document.createElement("div");
          (_.style.position = "absolute"),
            (_.style.top = _ + "px"),
            (_.style.left = _ + "px"),
            (_.style.width = _ + "px"),
            (_.style.height = _ + "px"),
            (_.style.zIndex = "90019001"),
            this.m_overdragBlockingElements.push(_),
            document.body.appendChild(_);
        }
        onWindowMouseUp(_) {
          this.stopOverDragBlocking();
        }
        getNodeType() {
          return "panel";
        }
        get visibility() {
          var _;
          return null !== (_ = this.props.visibility) && void 0 !== _
            ? _
            : _.Visible;
        }
        buildNode(_, _) {
          var _, _, _, _, _, _, _, _, _, _, _, _, _;
          if (
            !(
              this.visibility == _.Visible ||
              this.visibility == _.InvisibleButIntersectable
            )
          )
            return [_, null];
          let _ = Object.assign(Object.assign({}, _), {
              bInsideReparentedPanel: !1,
              currentPanel: this,
            }),
            _ = this.createSgNode(_),
            _ = {
              _: 0,
              _: 0,
            };
          _ =
            "object" == typeof this.props.origin
              ? (0, _._)(this.props.origin)
              : _(this.props.origin);
          const _ = this.props.overlay_key,
            _ = (0, _._)();
          _ && _.length > 0
            ? (_.properties.key = _)
            : _
              ? (_.properties.key = _)
              : (_.properties.overlay_handle = (0, _._)()),
            this.m_UVsMin &&
              (_.properties.uv_min =
                null !== (_ = _(this.m_UVsMin)) && void 0 !== _ ? _ : void 0),
            this.m_UVsMax &&
              (_.properties.uv_max =
                null !== (_ = _(this.m_UVsMax)) && void 0 !== _ ? _ : void 0);
          const _ = 1 / _._.Current().m_fCurrentScale;
          let _ = this.props.frame_resize_scale_factor;
          return (
            this.props.is_frame_page_main_panel && (_ = null != _ ? _ : 1),
            (_.properties.width =
              null !== (_ = this.props.width) && void 0 !== _ ? _ : void 0),
            (_.properties.height =
              null !== (_ = this.props.height) && void 0 !== _ ? _ : void 0),
            (_.properties["scale-index"] =
              null !== (_ = this.props.scale_index) && void 0 !== _ ? _ : 0),
            (_.properties["min-width"] =
              null !== (_ = this.props.min_width) && void 0 !== _ ? _ : void 0),
            (_.properties["target-width-anchor-id"] = (0, _._)(
              this.props.target_width_anchor_id,
            )),
            (_.properties["target-dpi-panel-id"] = (0, _._)(
              this.props.target_dpi_panel_id,
            )),
            (_.properties["target-dpi-multiplier"] =
              this.props.target_dpi_multiplier),
            (_.properties["meters-per-pixel"] =
              null != this.props.meters_per_pixel
                ? this.props.meters_per_pixel * _
                : void 0),
            (_.properties["subview-parent-panel-key"] =
              this.props.subview_parent_panel_key),
            (_.properties["subview-parent-panel-id"] =
              this.props.subview_parent_panel_id),
            (_.properties["subview-sizing"] = this.props.subview_sizing),
            (_.properties.curvature = this.props.curvature),
            (_.properties["curvature-origin-id"] = (0, _._)(
              this.props.curvature_origin_id,
            )),
            (_.properties["render-type"] = this.props.renderType),
            (_.properties.interactive = this.props.interactive),
            (_.properties.scrollable = this.props.scrollable),
            (_.properties.undocked = this.props.undocked),
            (_.properties.modal = this.props.modal),
            (_.properties["only-visible-with-laser"] =
              this.props.only_visible_with_laser),
            (_.properties["allow-input-capture"] =
              this.props.allow_input_capture),
            (_.properties["lasermouse-filtering"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.lasermouse_filtering),
            (_.properties["focus-outline"] =
              null === (_ = this.props) || void 0 === _ ? void 0 : _.outline),
            (_.properties["hide-laser-when-clicking"] =
              this.props.hide_lasermouse_when_clicking),
            (_.properties["hide-laser-intersection"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.hide_laser_intersection),
            (_.properties["make-overlays-interactive-if-visible"] =
              this.props.make_overlays_interactive_if_visible),
            (_.properties["is-grab-handle"] = this.props.is_grab_handle),
            (_.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
            (_.properties.origin = (0, _._)(_)),
            (_.properties.debug_name = this.props.debug_name),
            (_.properties.reflect = this.props.reflect),
            (_.properties.stereoscopy = this.props.stereoscopy),
            (_.properties.rendermodel_component_device_index =
              this.props.rendermodel_component_device_index),
            (_.properties.rendermodel_component_name =
              this.props.rendermodel_component_name),
            (_.properties["texture-id"] = (0, _._)(this.props.texture_id)),
            (_.properties["sort-order"] = this.props.sort_order),
            (_.properties["sort-depth-bias"] = this.props.sort_depth_bias),
            (_.properties["no-depth-write"] = this.props.no_depth_write),
            (_.properties["no-depth-test"] = this.props.no_depth_test),
            (_.properties.visibility = this.visibility),
            (_.properties["frame-resize-scale-factor"] = _),
            (_.properties["main-panel-for-frame-page"] =
              this.props.is_frame_page_main_panel),
            (_.properties["steam-input-appid"] =
              null === (_ = this.inputFocusParams) || void 0 === _
                ? void 0
                : _.unSteamInputAppID),
            (_.properties["vr-input-pid"] =
              null === (_ = this.inputFocusParams) || void 0 === _
                ? void 0
                : _.unVRInputPID),
            (_.properties["can-take-keyboard-focus"] =
              null ===
                (_ =
                  null === (_ = this.inputFocusParams) || void 0 === _
                    ? void 0
                    : _.bCanTakeKeyboardFocus) ||
              void 0 === _ ||
              _),
            (_.properties["focus-target-sgid"] = this.props.focus_target_sgid),
            [_, _]
          );
        }
        scaleLocalUVToGlobal(_) {
          if (!this.m_UVsMin || !this.m_UVsMax) return;
          const _ = this.m_UVsMax._ - this.m_UVsMin._,
            _ = this.m_UVsMax._ - this.m_UVsMin._;
          return {
            _: this.m_UVsMin._ + _ * _._,
            _: this.m_UVsMin._ + _ * _._,
          };
        }
        updateLayoutValues() {
          if (this.props.overlay_key)
            return (
              (this.m_UVsMin = this.props.uv_min),
              void (this.m_UVsMax = this.props.uv_max)
            );
          this.m_Rect = this.getCurrentRootElement().getBoundingClientRect();
          let _ = this.getCurrentRootElement().ownerDocument.defaultView;
          _ &&
            ((this.m_UVsMin = {
              _: this.m_Rect._ / _.innerWidth,
              _: this.m_Rect._ / _.innerHeight,
            }),
            (this.m_UVsMax = {
              _: (this.m_Rect._ + this.m_Rect.width) / _.innerWidth,
              _: (this.m_Rect._ + this.m_Rect.height) / _.innerHeight,
            }));
        }
        PanelContextValue() {
          return this;
        }
        BCanUseStableSGIDs() {
          return !0;
        }
        internalRender() {
          return _.createElement(
            "vsg-node",
            {
              style: {
                display: this.visibility == _.Hidden ? "none" : null,
              },
            },
            _.createElement(_._, null, this.props.children),
            this.props.is_frame_page_main_panel &&
              _.createElement(_, {
                panel: this,
                panelID: this.getID(),
              }),
          );
        }
        get inputFocusParams() {
          return Object.assign(
            {
              bCanTakeKeyboardFocus: this.props.interactive,
            },
            this.props.inputFocusParams,
          );
        }
        get isInputFocusable() {
          var _, _, _;
          return (
            (null === (_ = this.inputFocusParams) || void 0 === _
              ? void 0
              : _.unSteamInputAppID) ||
            (null === (_ = this.inputFocusParams) || void 0 === _
              ? void 0
              : _.unVRInputPID) ||
            (null === (_ = this.inputFocusParams) || void 0 === _
              ? void 0
              : _.bCanTakeKeyboardFocus)
          );
        }
        get hasInputFocus() {
          return (
            (null === _._ || void 0 === _._
              ? void 0
              : _._.computedInputFocus.m_entryAtTopOfStack.m_unPanelSGID) ==
            this.m_SGID
          );
        }
        get hasSubviewWithInputFocus() {
          return (
            (null === _._ || void 0 === _._
              ? void 0
              : _._.computedInputFocus.m_entryAtTopOfStack
                  .m_unSubviewParentPanelSGID) == this.m_SGID
          );
        }
        get hasGamepadFocus() {
          return (
            this.hasInputFocus &&
            (null === _._ || void 0 === _._
              ? void 0
              : _._.computedInputFocus.m_bPanelVisuallyHasActiveGamepadFocus)
          );
        }
        PushInputFocus() {
          null === _._ || void 0 === _._ || _._.PushInputFocus(this.m_SGID);
        }
        RemoveInputFocus() {
          null === _._ || void 0 === _._ || _._.RemoveInputFocus(this.m_SGID);
        }
        OnSystemGamepadButtonClick(_) {
          var _, _, _;
          return (
            null !==
              (_ =
                null === (_ = (_ = this.props).onSystemGamepadButtonClick) ||
                void 0 === _
                  ? void 0
                  : __webpack_require__.call(_, _)) &&
            void 0 !== _ &&
            _
          );
        }
        OnSystemGamepadButtonDown(_) {
          var _, _, _;
          return (
            null !==
              (_ =
                null === (_ = (_ = this.props).onSystemGamepadButtonDown) ||
                void 0 === _
                  ? void 0
                  : __webpack_require__.call(_, _)) &&
            void 0 !== _ &&
            _
          );
        }
        OnSystemGamepadButtonUp(_) {
          var _, _, _;
          return (
            null !==
              (_ =
                null === (_ = (_ = this.props).onSystemGamepadButtonUp) ||
                void 0 === _
                  ? void 0
                  : __webpack_require__.call(_, _)) &&
            void 0 !== _ &&
            _
          );
        }
      }
      function _(_) {
        const { panel: _, panelID: _ } = _,
          { page: _ } = (0, _._)();
        return (
          _.useEffect(() => {
            const { Unset: _ } = null == _ ? void 0 : _.SetMainPanel(_);
            return _;
          }, [_, _, _]),
          null
        );
      }
      (_.s_bPanelsAreDirty = !1),
        (_.s_setAllPanels = new _.ObservableSet()),
        (0, _._)([_._], _.prototype, "onResizeObserved", null),
        (0, _._)([_._], _.prototype, "onPanelMouseDown", null),
        (0, _._)([_._], _.prototype, "onWindowMouseUp", null),
        (0, _._)([_._], _.prototype, "buildNode", null),
        (0, _._)([_.computed], _.prototype, "hasInputFocus", null),
        (0, _._)([_.computed], _.prototype, "hasSubviewWithInputFocus", null),
        (0, _._)([_.computed], _.prototype, "hasGamepadFocus", null),
        (window.s_setAllPanels = _.s_setAllPanels);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.Seated = 0)] = "Seated"),
          (_[(_.Standing = 1)] = "Standing"),
          (_[(_.Raw = 2)] = "Raw");
      })(_ || (_ = {}));
      class _ extends _._ {
        constructor(_) {
          super(_);
          if (
            (void 0 === _.parent_path ? 0 : 1) +
              (void 0 === _.parent_origin ? 0 : 1) +
              (void 0 === _.parent_id ? 0 : 1) >
            1
          )
            throw new Error(
              "Transform cannot have more than one parent_ property set.",
            );
        }
        internalRender() {
          var _, _, _;
          let _, _, _, _;
          this.props.transform
            ? ((_ = (0, _._)(this.props.transform.translation)),
              (_ = this.props.transform.rotation),
              (_ = this.props.transform.scale))
            : ((_ = (0, _._)(this.props.translation)
                ? null === (_ = (0, _._)(this.props.translation)) ||
                  void 0 === _
                  ? void 0
                  : _.join(" ")
                : (0, _._)(
                    (0, _._)(this.props.translation, {
                      _: 0,
                      _: 0,
                      _: 0,
                    }),
                  )),
              (_ =
                this.props.rotation && "w" in this.props.rotation
                  ? this.props.rotation
                  : (0, _._)(
                      (0, _._)(
                        (0, _._)(this.props.rotation, {
                          _: 0,
                          _: 0,
                          _: 0,
                        }),
                        Math._ / 180,
                      ),
                    )),
              (_ =
                "number" == typeof this.props.scale
                  ? {
                      _: this.props.scale,
                      _: this.props.scale,
                      _: this.props.scale,
                    }
                  : (0, _._)(this.props.scale, {
                      _: 1,
                      _: 1,
                      _: 1,
                    }))),
            null !=
              (null === (_ = this.props) || void 0 === _
                ? void 0
                : _.parent_origin) &&
              (_ =
                _[
                  null === (_ = this.props) || void 0 === _
                    ? void 0
                    : _.parent_origin
                ]);
          let _ = (0, _._)(_),
            _ = (0, _._)(_);
          return _.createElement(
            "vsg-transform",
            {
              translation: _,
              rotation: _,
              scale: _,
              "curvature-pitch": this.props.curvature_pitch,
              "invert-parent-panel-pitch": this.props.invert_parent_panel_pitch,
              "ignore-parent-scale": this.props.ignore_parent_scale,
              "transform-path": this.props.transform_path,
              "parent-path": this.props.parent_path,
              "parent-origin": _,
              "parent-id": this.props.parent_id,
              "frame-resize-scale-factor": this.props.frame_resize_scale_factor,
            },
            this.props.children,
          );
        }
      }
    },
  },
]);
