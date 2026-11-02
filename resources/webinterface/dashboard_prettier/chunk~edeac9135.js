var CLSTAMP = "11196359";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [906, 458],
  {
    9864: (e, t, i) => {
      i.d(t, { b: () => r, m: () => n });
      var r,
        o = i(6540),
        s = i(3496);
      !(function (e) {
        (e[(e.Parent = 0)] = "Parent"), (e[(e.World = 1)] = "World");
      })(r || (r = {}));
      class n extends s._J {
        constructor(e) {
          super(e);
        }
        internalRender() {
          var e;
          const t = null === (e = this.props.enabled) || void 0 === e || e,
            i = this.props.rotation_start_angle_threshold
              ? (this.props.rotation_start_angle_threshold * Math.PI) / 180
              : null,
            r = this.props.rotation_stop_angle_threshold
              ? (this.props.rotation_stop_angle_threshold * Math.PI) / 180
              : null,
            s = this.props.rotation_ease_out_angle_threshold
              ? (this.props.rotation_ease_out_angle_threshold * Math.PI) / 180
              : null,
            n = this.props.rotation_min_angular_velocity
              ? (this.props.rotation_min_angular_velocity * Math.PI) / 180
              : null,
            p = this.props.rotation_max_angular_velocity
              ? (this.props.rotation_max_angular_velocity * Math.PI) / 180
              : null;
          return o.createElement(
            "vsg-elastic-head-transform",
            {
              "rotation-start-angle-threshold": i,
              "rotation-stop-angle-threshold": r,
              "rotation-ease-in-time": this.props.rotation_ease_in_time,
              "rotation-ease-in-power": this.props.rotation_ease_in_power,
              "rotation-ease-out-angle-threshold": s,
              "rotation-ease-out-power": this.props.rotation_ease_out_power,
              "rotation-min-angular-velocity": n,
              "rotation-max-angular-velocity": p,
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
              enabled: t,
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
    7019: (e, t, i) => {
      i.d(t, {
        Fi: () => s,
        Lr: () => f,
        MQ: () => o,
        Oi: () => r,
        Zk: () => C,
        mw: () => p,
        o3: () => n,
        xO: () => a,
      });
      var r,
        o,
        s,
        n,
        p,
        a,
        l = i(1635),
        h = i(6540),
        d = i(3496),
        u = i(5178),
        _ = i(3236),
        c = i(5723),
        m = i(7600),
        v = i(7727),
        g = i(1651),
        b = i(7813),
        y = i(9386);
      function w(e) {
        if (e) return [e.u, e.v];
      }
      function f(e) {
        switch (e) {
          case r.TopLeft:
            return { x: -1, y: 1 };
          case r.TopCenter:
            return { x: 0, y: 1 };
          case r.TopRight:
            return { x: 1, y: 1 };
          case r.CenterLeft:
            return { x: -1, y: 0 };
          case r.Center:
            return { x: 0, y: 0 };
          case r.CenterRight:
            return { x: 1, y: 0 };
          case r.BottomLeft:
            return { x: -1, y: -1 };
          case r.BottomCenter:
            return { x: 0, y: -1 };
          case r.BottomRight:
            return { x: 1, y: -1 };
        }
      }
      !(function (e) {
        (e[(e.TopLeft = 0)] = "TopLeft"),
          (e[(e.TopCenter = 1)] = "TopCenter"),
          (e[(e.TopRight = 2)] = "TopRight"),
          (e[(e.CenterLeft = 3)] = "CenterLeft"),
          (e[(e.Center = 4)] = "Center"),
          (e[(e.CenterRight = 5)] = "CenterRight"),
          (e[(e.BottomLeft = 6)] = "BottomLeft"),
          (e[(e.BottomCenter = 7)] = "BottomCenter"),
          (e[(e.BottomRight = 8)] = "BottomRight");
      })(r || (r = {})),
        (function (e) {
          (e[(e.Mono = 0)] = "Mono"),
            (e[(e.Parallel = 1)] = "Parallel"),
            (e[(e.Crossed = 2)] = "Crossed"),
            (e[(e.Panorama = 3)] = "Panorama"),
            (e[(e.StackedPanorama = 4)] = "StackedPanorama");
        })(o || (o = {})),
        (function (e) {
          (e[(e.Visible = 0)] = "Visible"),
            (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
            (e[(e.Hidden = 2)] = "Hidden"),
            (e[(e.InvisibleButIntersectable = 3)] =
              "InvisibleButIntersectable");
        })(s || (s = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Disabled = 1)] = "Disabled"),
            (e[(e.Low = 2)] = "Low");
        })(n || (n = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Auto = 1)] = "Auto"),
            (e[(e.PendingGamepadFocus = 2)] = "PendingGamepadFocus"),
            (e[(e.GamepadFocusNotSupported = 3)] = "GamepadFocusNotSupported");
        })(p || (p = {})),
        (function (e) {
          (e[(e.PixelOffset = 0)] = "PixelOffset"),
            (e[(e.ScaleAndCenter = 1)] = "ScaleAndCenter");
        })(a || (a = {}));
      class C extends d._J {
        constructor(e) {
          super(e),
            (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
            (this.m_nEmbeddedIndex = void 0),
            (this.m_LastDOMContentSize = void 0),
            (this.m_DOMContentSizeChangedCallbacks = new g.l()),
            (this.m_resizeObserver = null),
            (this.m_UVsMin = void 0),
            (this.m_UVsMax = void 0),
            (this.m_bOverdragBlocking = !1),
            (this.m_overdragBlockingElements = []),
            (this.m_gamepadButtonHandlerHandle = void 0);
          const t = void 0 !== this.props.width || void 0 !== this.props.height,
            i = void 0 !== this.props.meters_per_pixel,
            r = void 0 !== this.props.target_dpi_panel_id,
            o =
              void 0 !== this.props.rendermodel_component_device_index ||
              void 0 !== this.props.rendermodel_component_name,
            s =
              void 0 !== this.props.subview_parent_panel_id ||
              void 0 !== this.props.subview_parent_panel_key;
          if (
            o &&
            (void 0 === this.props.rendermodel_component_device_index ||
              void 0 === this.props.rendermodel_component_name)
          )
            throw new Error(
              "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
            );
          const n = [t, i, r, o, s].filter((e) => e).length,
            p =
              "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, a rendermodel name, or a parent overlay of which to become a subview.";
          if (0 == n)
            throw new Error(`Panel requires one of the following props: ${p}.`);
          if (n > 1)
            throw new Error(
              `Panel cannot have more of the following of the following props: ${p}.`,
            );
          super.setBuildNodeOverride(this.buildNode);
        }
        get lastDOMContentSize() {
          return this.m_LastDOMContentSize;
        }
        RegisterForDOMContentSizeChangedCallback(e) {
          return this.m_DOMContentSizeChangedCallbacks.Register(e);
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
          C.s_bPanelsAreDirty = !0;
        }
        componentDidMount() {
          super.componentDidMount(),
            (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
            this.m_resizeObserver.observe(this.getCurrentRootElement()),
            (this.m_nEmbeddedIndex = u.O.Current().addEmbeddedPanelUVs(this)),
            (C.s_bPanelsAreDirty = !0),
            this.getCurrentRootElement().addEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            this.forceUpdate(),
            C.s_setAllPanels.add(this),
            (this.m_gamepadButtonHandlerHandle =
              null === y.L || void 0 === y.L
                ? void 0
                : y.L.RegisterGamepadButtonHandler(this.m_SGID, this, 0));
        }
        onResizeObserved(e, t) {
          u.O.Current().forceLayoutUpdate(),
            (this.m_LastDOMContentSize = {
              clientWidth: e[0].contentRect.width,
              clientHeight: e[0].contentRect.height,
            }),
            this.m_DOMContentSizeChangedCallbacks.Dispatch(
              this.m_LastDOMContentSize,
            );
        }
        componentWillUnmount() {
          var e;
          C.s_setAllPanels.delete(this),
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null)),
            this.stopOverDragBlocking(),
            this.getCurrentRootElement().removeEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            (C.s_bPanelsAreDirty = !0),
            u.O.Current().removeEmbeddedPanelUVs(this),
            this.m_DOMContentSizeChangedCallbacks.ClearAllCallbacks(),
            null === (e = this.m_gamepadButtonHandlerHandle) ||
              void 0 === e ||
              e.Unregister(),
            super.componentWillUnmount();
        }
        onPanelMouseDown() {
          this.startOverDragBlocking();
        }
        startOverDragBlocking() {
          if (this.m_bOverdragBlocking) return;
          const e = document.body.getBoundingClientRect(),
            t = this.getCurrentRootElement().getBoundingClientRect();
          this.createOverdragBlockingElement(0, 0, e.width, t.y),
            this.createOverdragBlockingElement(
              0,
              t.y + t.height,
              e.width,
              e.height - t.height - t.y,
            ),
            this.createOverdragBlockingElement(0, t.y, t.x, t.height),
            this.createOverdragBlockingElement(
              t.x + t.width,
              t.y,
              e.width - t.width - t.x,
              t.height,
            ),
            window.document.addEventListener("mouseup", this.onWindowMouseUp),
            (this.m_bOverdragBlocking = !0);
        }
        stopOverDragBlocking() {
          this.m_bOverdragBlocking &&
            (this.m_overdragBlockingElements.forEach((e) => {
              document.body.removeChild(e);
            }),
            (this.m_overdragBlockingElements = []),
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp,
            ),
            (this.m_bOverdragBlocking = !1));
        }
        createOverdragBlockingElement(e, t, i, r) {
          let o = document.createElement("div");
          (o.style.position = "absolute"),
            (o.style.top = t + "px"),
            (o.style.left = e + "px"),
            (o.style.width = i + "px"),
            (o.style.height = r + "px"),
            (o.style.zIndex = "90019001"),
            this.m_overdragBlockingElements.push(o),
            document.body.appendChild(o);
        }
        onWindowMouseUp(e) {
          this.stopOverDragBlocking();
        }
        getNodeType() {
          return "panel";
        }
        get visibility() {
          var e;
          return null !== (e = this.props.visibility) && void 0 !== e
            ? e
            : s.Visible;
        }
        buildNode(e, t) {
          var i, r, o, n, p, a, l, h, _, m, v, g, b;
          if (
            !(
              this.visibility == s.Visible ||
              this.visibility == s.InvisibleButIntersectable
            )
          )
            return [e, null];
          let y = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !1,
              currentPanel: this,
            }),
            C = this.createSgNode(t),
            x = { x: 0, y: 0 };
          x =
            "object" == typeof this.props.origin
              ? (0, d.PG)(this.props.origin)
              : f(this.props.origin);
          const k = this.props.overlay_key,
            P = (0, c.w5)();
          k && k.length > 0
            ? (C.properties.key = k)
            : P
              ? (C.properties.key = P)
              : (C.properties.overlay_handle = (0, c.X4)()),
            this.m_UVsMin &&
              (C.properties.uv_min =
                null !== (i = w(this.m_UVsMin)) && void 0 !== i ? i : void 0),
            this.m_UVsMax &&
              (C.properties.uv_max =
                null !== (r = w(this.m_UVsMax)) && void 0 !== r ? r : void 0);
          const I = 1 / u.O.Current().m_fCurrentScale;
          let O = this.props.frame_resize_scale_factor;
          return (
            this.props.is_frame_page_main_panel && (O = null != O ? O : 1),
            (C.properties.width =
              null !== (o = this.props.width) && void 0 !== o ? o : void 0),
            (C.properties.height =
              null !== (n = this.props.height) && void 0 !== n ? n : void 0),
            (C.properties["scale-index"] =
              null !== (p = this.props.scale_index) && void 0 !== p ? p : 0),
            (C.properties["min-width"] =
              null !== (a = this.props.min_width) && void 0 !== a ? a : void 0),
            (C.properties["target-width-anchor-id"] = (0, c.bl)(
              this.props.target_width_anchor_id,
            )),
            (C.properties["target-dpi-panel-id"] = (0, c.bl)(
              this.props.target_dpi_panel_id,
            )),
            (C.properties["target-dpi-multiplier"] =
              this.props.target_dpi_multiplier),
            (C.properties["meters-per-pixel"] =
              null != this.props.meters_per_pixel
                ? this.props.meters_per_pixel * I
                : void 0),
            (C.properties["subview-parent-panel-key"] =
              this.props.subview_parent_panel_key),
            (C.properties["subview-parent-panel-id"] =
              this.props.subview_parent_panel_id),
            (C.properties["subview-sizing"] = this.props.subview_sizing),
            (C.properties.curvature = this.props.curvature),
            (C.properties["curvature-origin-id"] = (0, c.bl)(
              this.props.curvature_origin_id,
            )),
            (C.properties["render-type"] = this.props.renderType),
            (C.properties.interactive = this.props.interactive),
            (C.properties.scrollable = this.props.scrollable),
            (C.properties.undocked = this.props.undocked),
            (C.properties.modal = this.props.modal),
            (C.properties["only-visible-with-laser"] =
              this.props.only_visible_with_laser),
            (C.properties["allow-input-capture"] =
              this.props.allow_input_capture),
            (C.properties["lasermouse-filtering"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l.lasermouse_filtering),
            (C.properties["focus-outline"] =
              null === (h = this.props) || void 0 === h ? void 0 : h.outline),
            (C.properties["hide-laser-when-clicking"] =
              this.props.hide_lasermouse_when_clicking),
            (C.properties["hide-laser-intersection"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.hide_laser_intersection),
            (C.properties["make-overlays-interactive-if-visible"] =
              this.props.make_overlays_interactive_if_visible),
            (C.properties["is-grab-handle"] = this.props.is_grab_handle),
            (C.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
            (C.properties.origin = (0, d.Hm)(x)),
            (C.properties.debug_name = this.props.debug_name),
            (C.properties.reflect = this.props.reflect),
            (C.properties.stereoscopy = this.props.stereoscopy),
            (C.properties.rendermodel_component_device_index =
              this.props.rendermodel_component_device_index),
            (C.properties.rendermodel_component_name =
              this.props.rendermodel_component_name),
            (C.properties["texture-id"] = (0, c.bl)(this.props.texture_id)),
            (C.properties["sort-order"] = this.props.sort_order),
            (C.properties["sort-depth-bias"] = this.props.sort_depth_bias),
            (C.properties["no-depth-write"] = this.props.no_depth_write),
            (C.properties["no-depth-test"] = this.props.no_depth_test),
            (C.properties.visibility = this.visibility),
            (C.properties["frame-resize-scale-factor"] = O),
            (C.properties["main-panel-for-frame-page"] =
              this.props.is_frame_page_main_panel),
            (C.properties["steam-input-appid"] =
              null === (m = this.inputFocusParams) || void 0 === m
                ? void 0
                : m.unSteamInputAppID),
            (C.properties["vr-input-pid"] =
              null === (v = this.inputFocusParams) || void 0 === v
                ? void 0
                : v.unVRInputPID),
            (C.properties["can-take-keyboard-focus"] =
              null ===
                (b =
                  null === (g = this.inputFocusParams) || void 0 === g
                    ? void 0
                    : g.bCanTakeKeyboardFocus) ||
              void 0 === b ||
              b),
            (C.properties["focus-target-sgid"] = this.props.focus_target_sgid),
            [y, C]
          );
        }
        scaleLocalUVToGlobal(e) {
          if (!this.m_UVsMin || !this.m_UVsMax) return;
          const t = this.m_UVsMax.u - this.m_UVsMin.u,
            i = this.m_UVsMax.v - this.m_UVsMin.v;
          return { u: this.m_UVsMin.u + t * e.u, v: this.m_UVsMin.v + i * e.v };
        }
        updateLayoutValues() {
          if (this.props.overlay_key)
            return (
              (this.m_UVsMin = this.props.uv_min),
              void (this.m_UVsMax = this.props.uv_max)
            );
          this.m_Rect = this.getCurrentRootElement().getBoundingClientRect();
          let e = this.getCurrentRootElement().ownerDocument.defaultView;
          e &&
            ((this.m_UVsMin = {
              u: this.m_Rect.x / e.innerWidth,
              v: this.m_Rect.y / e.innerHeight,
            }),
            (this.m_UVsMax = {
              u: (this.m_Rect.x + this.m_Rect.width) / e.innerWidth,
              v: (this.m_Rect.y + this.m_Rect.height) / e.innerHeight,
            }));
        }
        PanelContextValue() {
          return this;
        }
        BCanUseStableSGIDs() {
          return !0;
        }
        internalRender() {
          return h.createElement(
            "vsg-node",
            { style: { display: this.visibility == s.Hidden ? "none" : null } },
            h.createElement(m.tH, null, this.props.children),
            this.props.is_frame_page_main_panel &&
              h.createElement(x, { panel: this, panelID: this.getID() }),
          );
        }
        get inputFocusParams() {
          return Object.assign(
            { bCanTakeKeyboardFocus: this.props.interactive },
            this.props.inputFocusParams,
          );
        }
        get isInputFocusable() {
          var e, t, i;
          return (
            (null === (e = this.inputFocusParams) || void 0 === e
              ? void 0
              : e.unSteamInputAppID) ||
            (null === (t = this.inputFocusParams) || void 0 === t
              ? void 0
              : t.unVRInputPID) ||
            (null === (i = this.inputFocusParams) || void 0 === i
              ? void 0
              : i.bCanTakeKeyboardFocus)
          );
        }
        get hasInputFocus() {
          return (
            (null === y.L || void 0 === y.L
              ? void 0
              : y.L.computedInputFocus.m_entryAtTopOfStack.m_unPanelSGID) ==
            this.m_SGID
          );
        }
        get hasSubviewWithInputFocus() {
          return (
            (null === y.L || void 0 === y.L
              ? void 0
              : y.L.computedInputFocus.m_entryAtTopOfStack
                  .m_unSubviewParentPanelSGID) == this.m_SGID
          );
        }
        get hasGamepadFocus() {
          return (
            this.hasInputFocus &&
            (null === y.L || void 0 === y.L
              ? void 0
              : y.L.computedInputFocus.m_bPanelVisuallyHasActiveGamepadFocus)
          );
        }
        PushInputFocus() {
          null === y.L || void 0 === y.L || y.L.PushInputFocus(this.m_SGID);
        }
        RemoveInputFocus() {
          null === y.L || void 0 === y.L || y.L.RemoveInputFocus(this.m_SGID);
        }
        OnSystemGamepadButtonClick(e) {
          var t, i, r;
          return (
            null !==
              (r =
                null === (i = (t = this.props).onSystemGamepadButtonClick) ||
                void 0 === i
                  ? void 0
                  : i.call(t, e)) &&
            void 0 !== r &&
            r
          );
        }
        OnSystemGamepadButtonDown(e) {
          var t, i, r;
          return (
            null !==
              (r =
                null === (i = (t = this.props).onSystemGamepadButtonDown) ||
                void 0 === i
                  ? void 0
                  : i.call(t, e)) &&
            void 0 !== r &&
            r
          );
        }
        OnSystemGamepadButtonUp(e) {
          var t, i, r;
          return (
            null !==
              (r =
                null === (i = (t = this.props).onSystemGamepadButtonUp) ||
                void 0 === i
                  ? void 0
                  : i.call(t, e)) &&
            void 0 !== r &&
            r
          );
        }
      }
      function x(e) {
        const { panel: t, panelID: i } = e,
          { page: r } = (0, v.N)();
        return (
          h.useEffect(() => {
            const { Unset: e } = null == r ? void 0 : r.SetMainPanel(t);
            return e;
          }, [r, t, i]),
          null
        );
      }
      (C.s_bPanelsAreDirty = !1),
        (C.s_setAllPanels = new b.ObservableSet()),
        (0, l.Cg)([_.o], C.prototype, "onResizeObserved", null),
        (0, l.Cg)([_.o], C.prototype, "onPanelMouseDown", null),
        (0, l.Cg)([_.o], C.prototype, "onWindowMouseUp", null),
        (0, l.Cg)([_.o], C.prototype, "buildNode", null),
        (0, l.Cg)([b.computed], C.prototype, "hasInputFocus", null),
        (0, l.Cg)([b.computed], C.prototype, "hasSubviewWithInputFocus", null),
        (0, l.Cg)([b.computed], C.prototype, "hasGamepadFocus", null),
        (window.s_setAllPanels = C.s_setAllPanels);
    },
    3361: (e, t, i) => {
      i.d(t, { d: () => p });
      var r,
        o = i(6540),
        s = i(3496),
        n = i(6292);
      !(function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(r || (r = {}));
      class p extends s._J {
        constructor(e) {
          super(e);
          if (
            (void 0 === e.parent_path ? 0 : 1) +
              (void 0 === e.parent_origin ? 0 : 1) +
              (void 0 === e.parent_id ? 0 : 1) >
            1
          )
            throw new Error(
              "Transform cannot have more than one parent_ property set.",
            );
        }
        internalRender() {
          var e, t, i;
          let p, a, l, h;
          this.props.transform
            ? ((p = (0, s.j_)(this.props.transform.translation)),
              (a = this.props.transform.rotation),
              (l = this.props.transform.scale))
            : ((p = (0, s.XI)(this.props.translation)
                ? null === (e = (0, s.UM)(this.props.translation)) ||
                  void 0 === e
                  ? void 0
                  : e.join(" ")
                : (0, s.j_)(
                    (0, s.Wi)(this.props.translation, { x: 0, y: 0, z: 0 }),
                  )),
              (a =
                this.props.rotation && "w" in this.props.rotation
                  ? this.props.rotation
                  : (0, n.Fb)(
                      (0, n.tx)(
                        (0, s.Wi)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                        Math.PI / 180,
                      ),
                    )),
              (l =
                "number" == typeof this.props.scale
                  ? {
                      x: this.props.scale,
                      y: this.props.scale,
                      z: this.props.scale,
                    }
                  : (0, s.Wi)(this.props.scale, { x: 1, y: 1, z: 1 }))),
            null !=
              (null === (t = this.props) || void 0 === t
                ? void 0
                : t.parent_origin) &&
              (h =
                r[
                  null === (i = this.props) || void 0 === i
                    ? void 0
                    : i.parent_origin
                ]);
          let d = (0, s.hi)(a),
            u = (0, s.j_)(l);
          return o.createElement(
            "vsg-transform",
            {
              translation: p,
              rotation: d,
              scale: u,
              "curvature-pitch": this.props.curvature_pitch,
              "invert-parent-panel-pitch": this.props.invert_parent_panel_pitch,
              "ignore-parent-scale": this.props.ignore_parent_scale,
              "transform-path": this.props.transform_path,
              "parent-path": this.props.parent_path,
              "parent-origin": h,
              "parent-id": this.props.parent_id,
              "frame-resize-scale-factor": this.props.frame_resize_scale_factor,
            },
            this.props.children,
          );
        }
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~edeac9135.js.map
