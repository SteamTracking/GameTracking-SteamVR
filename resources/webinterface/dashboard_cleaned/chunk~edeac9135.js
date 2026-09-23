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
        _: () => _,
      });
      var _,
        _,
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
          (_[(_.Auto = 0)] = "Auto"), (_[(_.SingleTap = 1)] = "SingleTap");
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
            (_.properties.sampler = this.props.sampler),
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
    chunkid: (module, module_exports, __webpack_require__) => {
      var _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _;
      function _(_) {
        if (!_) return;
        return Object.values(_)
          .filter((_) => "number" == typeof _)
          .includes(_)
          ? _
          : void 0;
      }
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
      }),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.TrackingSystemName_String = 1e3)] =
              "TrackingSystemName_String"),
            (_[(_.ModelNumber_String = 1001)] = "ModelNumber_String"),
            (_[(_.SerialNumber_String = 1002)] = "SerialNumber_String"),
            (_[(_.RenderModelName_String = 1003)] = "RenderModelName_String"),
            (_[(_.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
            (_[(_.ManufacturerName_String = 1005)] = "ManufacturerName_String"),
            (_[(_.TrackingFirmwareVersion_String = 1006)] =
              "TrackingFirmwareVersion_String"),
            (_[(_.HardwareRevision_String = 1007)] = "HardwareRevision_String"),
            (_[(_.AllWirelessDongleDescriptions_String = 1008)] =
              "AllWirelessDongleDescriptions_String"),
            (_[(_.ConnectedWirelessDongle_String = 1009)] =
              "ConnectedWirelessDongle_String"),
            (_[(_.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
            (_[(_.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
            (_[(_.DeviceBatteryPercentage_Float = 1012)] =
              "DeviceBatteryPercentage_Float"),
            (_[(_.StatusDisplayTransform_Matrix34 = 1013)] =
              "StatusDisplayTransform_Matrix34"),
            (_[(_.Firmware_UpdateAvailable_Bool = 1014)] =
              "Firmware_UpdateAvailable_Bool"),
            (_[(_.Firmware_ManualUpdate_Bool = 1015)] =
              "Firmware_ManualUpdate_Bool"),
            (_[(_.Firmware_ManualUpdateURL_String = 1016)] =
              "Firmware_ManualUpdateURL_String"),
            (_[(_.HardwareRevision_Uint64 = 1017)] = "HardwareRevision_Uint64"),
            (_[(_.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
            (_[(_.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
            (_[(_.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
            (_[(_.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
            (_[(_.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
            (_[(_.BlockServerShutdown_Bool = 1023)] =
              "BlockServerShutdown_Bool"),
            (_[(_.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
              "CanUnifyCoordinateSystemWithHmd_Bool"),
            (_[(_.ContainsProximitySensor_Bool = 1025)] =
              "ContainsProximitySensor_Bool"),
            (_[(_.DeviceProvidesBatteryStatus_Bool = 1026)] =
              "DeviceProvidesBatteryStatus_Bool"),
            (_[(_.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
            (_[(_.Firmware_ProgrammingTarget_String = 1028)] =
              "Firmware_ProgrammingTarget_String"),
            (_[(_.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
            (_[(_.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
            (_[(_.DriverVersion_String = 1031)] = "DriverVersion_String"),
            (_[(_.Firmware_ForceUpdateRequired_Bool = 1032)] =
              "Firmware_ForceUpdateRequired_Bool"),
            (_[(_.ViveSystemButtonFixRequired_Bool = 1033)] =
              "ViveSystemButtonFixRequired_Bool"),
            (_[(_.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
            (_[(_.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
            (_[(_.RegisteredDeviceType_String = 1036)] =
              "RegisteredDeviceType_String"),
            (_[(_.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
            (_[(_.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
            (_[(_.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
            (_[(_.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
            (_[(_.CameraStreamFormat_Int32 = 1041)] =
              "CameraStreamFormat_Int32"),
            (_[(_.AdditionalDeviceSettingsPath_String = 1042)] =
              "AdditionalDeviceSettingsPath_String"),
            (_[(_.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
            (_[(_.ActualTrackingSystemName_String = 1054)] =
              "ActualTrackingSystemName_String"),
            (_[(_.AllowCameraToggle_Bool = 1055)] = "AllowCameraToggle_Bool"),
            (_[(_.AllowLightSourceFrequency_Bool = 1056)] =
              "AllowLightSourceFrequency_Bool"),
            (_[(_.IsDedicatedVRHeadset_Bool = 1058)] =
              "IsDedicatedVRHeadset_Bool"),
            (_[(_.HasEyeTracker_Bool = 1060)] = "HasEyeTracker_Bool"),
            (_[(_.ReportsTimeSinceVSync_Bool = 2e3)] =
              "ReportsTimeSinceVSync_Bool"),
            (_[(_.SecondsFromVsyncToPhotons_Float = 2001)] =
              "SecondsFromVsyncToPhotons_Float"),
            (_[(_.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
            (_[(_.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
            (_[(_.CurrentUniverseId_Uint64 = 2004)] =
              "CurrentUniverseId_Uint64"),
            (_[(_.PreviousUniverseId_Uint64 = 2005)] =
              "PreviousUniverseId_Uint64"),
            (_[(_.DisplayFirmwareVersion_Uint64 = 2006)] =
              "DisplayFirmwareVersion_Uint64"),
            (_[(_.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
            (_[(_.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
            (_[(_.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
            (_[(_.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
            (_[(_.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
            (_[(_.DisplayMCImageLeft_String = 2012)] =
              "DisplayMCImageLeft_String"),
            (_[(_.DisplayMCImageRight_String = 2013)] =
              "DisplayMCImageRight_String"),
            (_[(_.DisplayGCBlackClamp_Float = 2014)] =
              "DisplayGCBlackClamp_Float"),
            (_[(_.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
            (_[(_.CameraToHeadTransform_Matrix34 = 2016)] =
              "CameraToHeadTransform_Matrix34"),
            (_[(_.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
            (_[(_.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
            (_[(_.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
            (_[(_.DisplayGCPrescale_Float = 2020)] = "DisplayGCPrescale_Float"),
            (_[(_.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
            (_[(_.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
            (_[(_.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
            (_[(_.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
            (_[(_.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
            (_[(_.UserHeadToEyeDepthMeters_Float = 2026)] =
              "UserHeadToEyeDepthMeters_Float"),
            (_[(_.CameraFirmwareVersion_Uint64 = 2027)] =
              "CameraFirmwareVersion_Uint64"),
            (_[(_.CameraFirmwareDescription_String = 2028)] =
              "CameraFirmwareDescription_String"),
            (_[(_.DisplayFPGAVersion_Uint64 = 2029)] =
              "DisplayFPGAVersion_Uint64"),
            (_[(_.DisplayBootloaderVersion_Uint64 = 2030)] =
              "DisplayBootloaderVersion_Uint64"),
            (_[(_.DisplayHardwareVersion_Uint64 = 2031)] =
              "DisplayHardwareVersion_Uint64"),
            (_[(_.AudioFirmwareVersion_Uint64 = 2032)] =
              "AudioFirmwareVersion_Uint64"),
            (_[(_.CameraCompatibilityMode_Int32 = 2033)] =
              "CameraCompatibilityMode_Int32"),
            (_[(_.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
              "ScreenshotHorizontalFieldOfViewDegrees_Float"),
            (_[(_.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
              "ScreenshotVerticalFieldOfViewDegrees_Float"),
            (_[(_.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
            (_[(_.DisplayAllowNightMode_Bool = 2037)] =
              "DisplayAllowNightMode_Bool"),
            (_[(_.DisplayMCImageWidth_Int32 = 2038)] =
              "DisplayMCImageWidth_Int32"),
            (_[(_.DisplayMCImageHeight_Int32 = 2039)] =
              "DisplayMCImageHeight_Int32"),
            (_[(_.DisplayMCImageNumChannels_Int32 = 2040)] =
              "DisplayMCImageNumChannels_Int32"),
            (_[(_.DisplayMCImageData_Binary = 2041)] =
              "DisplayMCImageData_Binary"),
            (_[(_.SecondsFromPhotonsToVblank_Float = 2042)] =
              "SecondsFromPhotonsToVblank_Float"),
            (_[(_.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
              "DriverDirectModeSendsVsyncEvents_Bool"),
            (_[(_.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
            (_[(_.GraphicsAdapterLuid_Uint64 = 2045)] =
              "GraphicsAdapterLuid_Uint64"),
            (_[(_.DriverProvidedChaperonePath_String = 2048)] =
              "DriverProvidedChaperonePath_String"),
            (_[(_.ExpectedTrackingReferenceCount_Int32 = 2049)] =
              "ExpectedTrackingReferenceCount_Int32"),
            (_[(_.ExpectedControllerCount_Int32 = 2050)] =
              "ExpectedControllerCount_Int32"),
            (_[(_.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
              "NamedIconPathControllerLeftDeviceOff_String"),
            (_[(_.NamedIconPathControllerRightDeviceOff_String = 2052)] =
              "NamedIconPathControllerRightDeviceOff_String"),
            (_[(_.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
              "NamedIconPathTrackingReferenceDeviceOff_String"),
            (_[(_.DoNotApplyPrediction_Bool = 2054)] =
              "DoNotApplyPrediction_Bool"),
            (_[(_.CameraToHeadTransforms_Matrix34_Array = 2055)] =
              "CameraToHeadTransforms_Matrix34_Array"),
            (_[(_.DistortionMeshResolution_Int32 = 2056)] =
              "DistortionMeshResolution_Int32"),
            (_[(_.DriverIsDrawingControllers_Bool = 2057)] =
              "DriverIsDrawingControllers_Bool"),
            (_[(_.DriverRequestsApplicationPause_Bool = 2058)] =
              "DriverRequestsApplicationPause_Bool"),
            (_[(_.DriverRequestsReducedRendering_Bool = 2059)] =
              "DriverRequestsReducedRendering_Bool"),
            (_[(_.MinimumIpdStepMeters_Float = 2060)] =
              "MinimumIpdStepMeters_Float"),
            (_[(_.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
              "AudioBridgeFirmwareVersion_Uint64"),
            (_[(_.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
              "ImageBridgeFirmwareVersion_Uint64"),
            (_[(_.ImuToHeadTransform_Matrix34 = 2063)] =
              "ImuToHeadTransform_Matrix34"),
            (_[(_.ImuFactoryGyroBias_Vector3 = 2064)] =
              "ImuFactoryGyroBias_Vector3"),
            (_[(_.ImuFactoryGyroScale_Vector3 = 2065)] =
              "ImuFactoryGyroScale_Vector3"),
            (_[(_.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
              "ImuFactoryAccelerometerBias_Vector3"),
            (_[(_.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
              "ImuFactoryAccelerometerScale_Vector3"),
            (_[(_.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
              "ConfigurationIncludesLighthouse20Features_Bool"),
            (_[(_.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
              "Prop_AdditionalRadioFeatures_Uint64"),
            (_[(_.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
              "Prop_CameraWhiteBalance_Vector4_Array"),
            (_[(_.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
              "Prop_CameraDistortionFunction_Int32_Array"),
            (_[(_.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
              "Prop_CameraDistortionCoefficients_Float_Array"),
            (_[(_.Prop_ExpectedControllerType_String = 2074)] =
              "Prop_ExpectedControllerType_String"),
            (_[(_.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
            (_[(_.DriverProvidedChaperoneVisibility_Bool = 2076)] =
              "DriverProvidedChaperoneVisibility_Bool"),
            (_[(_.HmdColumnCorrectionSettingPrefix_String = 2077)] =
              "HmdColumnCorrectionSettingPrefix_String"),
            (_[(_.CameraSupportsCompatibilityModes_Bool = 2078)] =
              "CameraSupportsCompatibilityModes_Bool"),
            (_[(_.SupportsRoomViewDepthProjection_Bool = 2079)] =
              "SupportsRoomViewDepthProjection_Bool"),
            (_[(_.DisplayAvailableFrameRates_Float_Array = 2080)] =
              "DisplayAvailableFrameRates_Float_Array"),
            (_[(_.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
              "DisplaySupportsRuntimeFramerateChange_Bool"),
            (_[(_.DisplaySupportsAnalogGain_Bool = 2085)] =
              "DisplaySupportsAnalogGain_Bool"),
            (_[(_.DisplayMinAnalogGain_Float = 2086)] =
              "DisplayMinAnalogGain_Float"),
            (_[(_.DisplayMaxAnalogGain_Float = 2087)] =
              "DisplayMaxAnalogGain_Float"),
            (_[(_.DashboardLinkSupport_Int32 = 2097)] =
              "DashboardLinkSupport_Int32"),
            (_[(_.DisplayMinUIAnalogGain_Float = 2098)] =
              "DisplayMinUIAnalogGain_Float"),
            (_[(_.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
            (_[(_.IpdUIRangeMinMeters_Float = 2100)] =
              "IpdUIRangeMinMeters_Float"),
            (_[(_.IpdUIRangeMaxMeters_Float = 2101)] =
              "IpdUIRangeMaxMeters_Float"),
            (_[(_.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
              "Hmd_SupportsHDCP14LegacyCompat_Bool"),
            (_[(_.Hmd_SupportsMicMonitoring_Bool = 2103)] =
              "Hmd_SupportsMicMonitoring_Bool"),
            (_[(_.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
              "Hmd_SupportsDisplayPortTrainingMode_Bool"),
            (_[(_.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
              "Hmd_SupportsRoomViewDirect_Bool"),
            (_[(_.Hmd_SupportsAppThrottling_Bool = 2106)] =
              "Hmd_SupportsAppThrottling_Bool"),
            (_[(_.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
              "Hmd_SupportsGpuBusMonitoring_Bool"),
            (_[(_.DriverProvidedIPDVisibility_Bool = 2108)] =
              "DriverProvidedIPDVisibility_Bool"),
            (_[(_.Prop_SupportsVRGamepadMode_Bool = 2117)] =
              "Prop_SupportsVRGamepadMode_Bool"),
            (_[(_.Hmd_CameraSettingsModel_Int32 = 2122)] =
              "Hmd_CameraSettingsModel_Int32"),
            (_[(_.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
              "DriverRequestedMuraCorrectionMode_Int32"),
            (_[(_.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
              "DriverRequestedMuraFeather_InnerLeft_Int32"),
            (_[(_.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
              "DriverRequestedMuraFeather_InnerRight_Int32"),
            (_[(_.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
              "DriverRequestedMuraFeather_InnerTop_Int32"),
            (_[(_.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
              "DriverRequestedMuraFeather_InnerBottom_Int32"),
            (_[(_.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
              "DriverRequestedMuraFeather_OuterLeft_Int32"),
            (_[(_.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
              "DriverRequestedMuraFeather_OuterRight_Int32"),
            (_[(_.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
              "DriverRequestedMuraFeather_OuterTop_Int32"),
            (_[(_.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
              "DriverRequestedMuraFeather_OuterBottom_Int32"),
            (_[(_.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
              "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
            (_[(_.Hmd_ForceRoomViewOutsideChaperone_Bool = 2500)] =
              "Hmd_ForceRoomViewOutsideChaperone_Bool"),
            (_[(_.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
            (_[(_.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
            (_[(_.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
            (_[(_.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
            (_[(_.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
            (_[(_.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
            (_[(_.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
            (_[(_.ControllerRoleHint_Int32 = 3007)] =
              "ControllerRoleHint_Int32"),
            (_[(_.Prop_ControllerHasLargeStatusArea_Bool = 3008)] =
              "Prop_ControllerHasLargeStatusArea_Bool"),
            (_[(_.FieldOfViewLeftDegrees_Float = 4e3)] =
              "FieldOfViewLeftDegrees_Float"),
            (_[(_.FieldOfViewRightDegrees_Float = 4001)] =
              "FieldOfViewRightDegrees_Float"),
            (_[(_.FieldOfViewTopDegrees_Float = 4002)] =
              "FieldOfViewTopDegrees_Float"),
            (_[(_.FieldOfViewBottomDegrees_Float = 4003)] =
              "FieldOfViewBottomDegrees_Float"),
            (_[(_.TrackingRangeMinimumMeters_Float = 4004)] =
              "TrackingRangeMinimumMeters_Float"),
            (_[(_.TrackingRangeMaximumMeters_Float = 4005)] =
              "TrackingRangeMaximumMeters_Float"),
            (_[(_.ModeLabel_String = 4006)] = "ModeLabel_String"),
            (_[(_.IconPathName_String = 5e3)] = "IconPathName_String"),
            (_[(_.NamedIconPathDeviceOff_String = 5001)] =
              "NamedIconPathDeviceOff_String"),
            (_[(_.NamedIconPathDeviceSearching_String = 5002)] =
              "NamedIconPathDeviceSearching_String"),
            (_[(_.NamedIconPathDeviceSearchingAlert_String = 5003)] =
              "NamedIconPathDeviceSearchingAlert_String"),
            (_[(_.NamedIconPathDeviceReady_String = 5004)] =
              "NamedIconPathDeviceReady_String"),
            (_[(_.NamedIconPathDeviceReadyAlert_String = 5005)] =
              "NamedIconPathDeviceReadyAlert_String"),
            (_[(_.NamedIconPathDeviceNotReady_String = 5006)] =
              "NamedIconPathDeviceNotReady_String"),
            (_[(_.NamedIconPathDeviceStandby_String = 5007)] =
              "NamedIconPathDeviceStandby_String"),
            (_[(_.NamedIconPathDeviceAlertLow_String = 5008)] =
              "NamedIconPathDeviceAlertLow_String"),
            (_[(_.DisplayHiddenArea_Binary_Start = 5100)] =
              "DisplayHiddenArea_Binary_Start"),
            (_[(_.DisplayHiddenArea_Binary_End = 5150)] =
              "DisplayHiddenArea_Binary_End"),
            (_[(_.ParentContainer = 5151)] = "ParentContainer"),
            (_[(_.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
            (_[(_.InstallPath_String = 6001)] = "InstallPath_String"),
            (_[(_.HasDisplayComponent_Bool = 6002)] =
              "HasDisplayComponent_Bool"),
            (_[(_.HasControllerComponent_Bool = 6003)] =
              "HasControllerComponent_Bool"),
            (_[(_.HasCameraComponent_Bool = 6004)] = "HasCameraComponent_Bool"),
            (_[(_.HasDriverDirectModeComponent_Bool = 6005)] =
              "HasDriverDirectModeComponent_Bool"),
            (_[(_.HasVirtualDisplayComponent_Bool = 6006)] =
              "HasVirtualDisplayComponent_Bool"),
            (_[(_.HasSpatialAnchorsSupport_Bool = 6007)] =
              "HasSpatialAnchorsSupport_Bool"),
            (_[(_.ControllerType_String = 7e3)] = "ControllerType_String"),
            (_[(_.LegacyInputProfile_String = 7001)] =
              "LegacyInputProfile_String"),
            (_[(_.VendorSpecific_Reserved_Start = 1e4)] =
              "VendorSpecific_Reserved_Start"),
            (_[(_.VendorSpecific_Reserved_End = 10999)] =
              "VendorSpecific_Reserved_End"),
            (_[(_.SupportsInHMDRoomSetup_Bool = 11003)] =
              "SupportsInHMDRoomSetup_Bool"),
            (_[(_.VRLinkClientHMDSupportsRoomSetupRequests_Bool = 11004)] =
              "VRLinkClientHMDSupportsRoomSetupRequests_Bool"),
            (_[(_.TrackedDeviceProperty_Max = 1e6)] =
              "TrackedDeviceProperty_Max");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Eye_Left = 0)] = "Eye_Left"),
            (_[(_.Eye_Right = 1)] = "Eye_Right");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EButton_System = 0)] = "k_EButton_System"),
            (_[(_.k_EButton_ApplicationMenu = 1)] =
              "k_EButton_ApplicationMenu"),
            (_[(_.k_EButton_Grip = 2)] = "k_EButton_Grip"),
            (_[(_.k_EButton_DPad_Left = 3)] = "k_EButton_DPad_Left"),
            (_[(_.k_EButton_DPad_Up = 4)] = "k_EButton_DPad_Up"),
            (_[(_.k_EButton_DPad_Right = 5)] = "k_EButton_DPad_Right"),
            (_[(_.k_EButton_DPad_Down = 6)] = "k_EButton_DPad_Down"),
            (_[(_.k_EButton_A = 7)] = "k_EButton_A"),
            (_[(_.k_EButton_ProximitySensor = 31)] =
              "k_EButton_ProximitySensor"),
            (_[(_.k_EButton_Axis0 = 32)] = "k_EButton_Axis0"),
            (_[(_.k_EButton_Axis1 = 33)] = "k_EButton_Axis1"),
            (_[(_.k_EButton_Axis2 = 34)] = "k_EButton_Axis2"),
            (_[(_.k_EButton_Axis3 = 35)] = "k_EButton_Axis3"),
            (_[(_.k_EButton_Axis4 = 36)] = "k_EButton_Axis4"),
            (_[(_.k_EButton_SteamVR_Touchpad = 32)] =
              "k_EButton_SteamVR_Touchpad"),
            (_[(_.k_EButton_SteamVR_Trigger = 33)] =
              "k_EButton_SteamVR_Trigger"),
            (_[(_.k_EButton_Dashboard_Back = 2)] = "k_EButton_Dashboard_Back"),
            (_[(_.k_EButton_IndexController_A = 2)] =
              "k_EButton_IndexController_A"),
            (_[(_.k_EButton_IndexController_B = 1)] =
              "k_EButton_IndexController_B"),
            (_[(_.k_EButton_IndexController_JoyStick = 35)] =
              "k_EButton_IndexController_JoyStick"),
            (_[(_.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
            (_[(_.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
            (_[(_.k_EButton_Max = 64)] = "k_EButton_Max");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.ButtonEnter = 1)] = "ButtonEnter"),
            (_[(_.ButtonLeave = 2)] = "ButtonLeave"),
            (_[(_.Snap = 3)] = "Snap"),
            (_[(_.Sliding = 4)] = "Sliding"),
            (_[(_.SlidingEdge = 5)] = "SlidingEdge");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Minimal = 1)] = "Minimal"),
            (_[(_.Modal = 2)] = "Modal"),
            (_[(_.ShowArrowKeys = 4)] = "ShowArrowKeys"),
            (_[(_.HideDoneKey = 8)] = "HideDoneKey");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Unknown = -1)] = "Unknown"),
            (_[(_.Idle = 0)] = "Idle"),
            (_[(_.UserInteraction = 1)] = "UserInteraction"),
            (_[(_.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
            (_[(_.Standby = 3)] = "Standby"),
            (_[(_.Idle_Timeout = 4)] = "Idle_Timeout");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.VRMouseButton_Left = 1)] = "VRMouseButton_Left"),
            (_[(_.VRMouseButton_Right = 2)] = "VRMouseButton_Right"),
            (_[(_.VRMouseButton_Middle = 4)] = "VRMouseButton_Middle");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Notification_Shown = 600)] = "Notification_Shown"),
            (_[(_.Notification_Hidden = 601)] = "Notification_Hidden"),
            (_[(_.Notification_BeginInteraction = 602)] =
              "Notification_BeginInteraction"),
            (_[(_.Notification_Destroyed = 603)] = "Notification_Destroyed");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.TheaterFast = 0)] = "TheaterFast"),
            (_[(_.TheaterSlow = 1)] = "TheaterSlow");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Constant = 0)] = "Constant"),
            (_[(_.Nearest = 1)] = "Nearest"),
            (_[(_.Linear = 2)] = "Linear"),
            (_[(_.SmoothStep = 3)] = "SmoothStep"),
            (_[(_.SmootherStep = 4)] = "SmootherStep");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.RecenterCountdown = 1)] = "RecenterCountdown"),
            (_[(_.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (_[(_.RoomSetupFloor = 3)] = "RoomSetupFloor"),
            (_[(_.ClearRoomSetup = 4)] = "ClearRoomSetup"),
            (_[(_.RoomSetupFull = 5)] = "RoomSetupFull");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Near = 0)] = "Near"),
            (_[(_.Middle = 1)] = "Middle"),
            (_[(_.Far = 2)] = "Far"),
            (_[(_.VRGamepadUI = 3)] = "VRGamepadUI");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.__LocalSteamVR = 0)] = "__LocalSteamVR"),
            (_[(_.__LocalSteam = 1)] = "__LocalSteam"),
            (_[(_.__RemoteSteamVR = 2)] = "__RemoteSteamVR"),
            (_[(_.__RemoteSteam = 3)] = "__RemoteSteam"),
            (_[(_.MutualLocal = 4)] = "MutualLocal"),
            (_[(_.MutualSteamVR = 5)] = "MutualSteamVR"),
            (_[(_.MutualSteam = 6)] = "MutualSteam");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Dashboard = 1)] = "Dashboard"),
            (_[(_.LeftHand = 2)] = "LeftHand"),
            (_[(_.RightHand = 3)] = "RightHand"),
            (_[(_.World = 4)] = "World"),
            (_[(_.Theater = 5)] = "Theater"),
            (_[(_.Boot = 6)] = "Boot");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.SceneApp = 1)] = "SceneApp"),
            (_[(_.Panel = 2)] = "Panel");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Unknown = 0)] = "Unknown"),
            (_[(_.LaserMouse = 1)] = "LaserMouse"),
            (_[(_.Gamepad = 2)] = "Gamepad");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.ControllerPairing = 1)] = "ControllerPairing"),
            (_[(_.WelcomeToSteamFrame = 2)] = "WelcomeToSteamFrame"),
            (_[(_.PlayspaceSetup = 3)] = "PlayspaceSetup"),
            (_[(_.LaserMouse = 4)] = "LaserMouse"),
            (_[(_.SystemButtonHideDashboard = 5)] =
              "SystemButtonHideDashboard"),
            (_[(_.SystemButtonDashboardHidden = 6)] =
              "SystemButtonDashboardHidden"),
            (_[(_.SystemButtonShowDashboard = 7)] =
              "SystemButtonShowDashboard"),
            (_[(_.PairWifiDongle = 8)] = "PairWifiDongle"),
            (_[(_.TourSendOff = 9)] = "TourSendOff"),
            (_[(_.SteamGuidedTourFinished = 10)] = "SteamGuidedTourFinished");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.ThirdPartyClient = 1)] = "ThirdPartyClient"),
            (_[(_.SteamVRClientUnified = 2)] = "SteamVRClientUnified"),
            (_[(_.SteamVRClientLegacyDual = 3)] = "SteamVRClientLegacyDual");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Default = 0)] = "Default"),
            (_[(_.AuroraFloor = 1)] = "AuroraFloor");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.SceneAppNominal = 0)] = "SceneAppNominal"),
            (_[(_.SceneAppDimming = 1)] = "SceneAppDimming"),
            (_[(_.RoomSetup = 2)] = "RoomSetup"),
            (_[(_.SystemDimming = 3)] = "SystemDimming"),
            (_[(_.ConstructTheater = 4)] = "ConstructTheater"),
            (_[(_.ConstructNominal = 5)] = "ConstructNominal");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.LargeDeadZone = 4)] = "LargeDeadZone"),
            (_[(_.SmallDeadZone = 8)] = "SmallDeadZone"),
            (_[(_.NoDeadZoneThenSmallElastic = 12)] =
              "NoDeadZoneThenSmallElastic");
        })(_ || (_ = {}));
      const _ = _.SmallDeadZone;
      var _, _, _, _, _, _;
      !(function (_) {
        (_[(_.Rect = 0)] = "Rect"),
          (_[(_.Panorama = 1)] = "Panorama"),
          (_[(_.Projection = 2)] = "Projection"),
          (_[(_.Spherical = 3)] = "Spherical");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.Curved = 0)] = "Curved"), (_[(_.Flat = 1)] = "Flat");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Default = 0)] = "Default"), (_[(_.Aurora = 1)] = "Aurora");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
            (_[(_.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
            (_[(_.ECameraExposure_HighExposure = 2)] =
              "ECameraExposure_HighExposure");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.BULK_DEFAULT = 0)] = "BULK_DEFAULT"),
            (_[(_.BULK_64K_DMA = 1)] = "BULK_64K_DMA"),
            (_[(_.BULK_16K_DMA = 2)] = "BULK_16K_DMA"),
            (_[(_.BULK_8K_DMA = 3)] = "BULK_8K_DMA"),
            (_[(_.ISO_52FPS = 4)] = "ISO_52FPS"),
            (_[(_.ISO_50FPS = 5)] = "ISO_50FPS"),
            (_[(_.ISO_48FPS = 6)] = "ISO_48FPS"),
            (_[(_.ISO_46FPS = 7)] = "ISO_46FPS"),
            (_[(_.ISO_44FPS = 8)] = "ISO_44FPS"),
            (_[(_.ISO_42FPS = 9)] = "ISO_42FPS"),
            (_[(_.ISO_40FPS = 10)] = "ISO_40FPS"),
            (_[(_.ISO_35FPS = 11)] = "ISO_35FPS"),
            (_[(_.ISO_30FPS = 12)] = "ISO_30FPS"),
            (_[(_.ISO_15FPS = 13)] = "ISO_15FPS"),
            (_[(_.MAX_CAMERA_COMPAT_MODES = 14)] = "MAX_CAMERA_COMPAT_MODES");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.ECameraSettingsModel_Default = 0)] =
            "ECameraSettingsModel_Default"),
            (_[(_.ECameraSettingsModel_SteamFrame = 1)] =
              "ECameraSettingsModel_SteamFrame");
        })(_ || (_ = {}));
    },
  },
]);
