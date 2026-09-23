var CLSTAMP = "11023671";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [906, 458],
  {
    9864: (e, t, o) => {
      o.d(t, { b: () => r, m: () => a });
      var r,
        i = o(6540),
        n = o(3496);
      !(function (e) {
        (e[(e.Parent = 0)] = "Parent"), (e[(e.World = 1)] = "World");
      })(r || (r = {}));
      class a extends n._J {
        constructor(e) {
          super(e);
        }
        internalRender() {
          var e;
          const t = null === (e = this.props.enabled) || void 0 === e || e,
            o = this.props.rotation_start_angle_threshold
              ? (this.props.rotation_start_angle_threshold * Math.PI) / 180
              : null,
            r = this.props.rotation_stop_angle_threshold
              ? (this.props.rotation_stop_angle_threshold * Math.PI) / 180
              : null,
            n = this.props.rotation_ease_out_angle_threshold
              ? (this.props.rotation_ease_out_angle_threshold * Math.PI) / 180
              : null,
            a = this.props.rotation_min_angular_velocity
              ? (this.props.rotation_min_angular_velocity * Math.PI) / 180
              : null,
            s = this.props.rotation_max_angular_velocity
              ? (this.props.rotation_max_angular_velocity * Math.PI) / 180
              : null;
          return i.createElement(
            "vsg-elastic-head-transform",
            {
              "rotation-start-angle-threshold": o,
              "rotation-stop-angle-threshold": r,
              "rotation-ease-in-time": this.props.rotation_ease_in_time,
              "rotation-ease-in-power": this.props.rotation_ease_in_power,
              "rotation-ease-out-angle-threshold": n,
              "rotation-ease-out-power": this.props.rotation_ease_out_power,
              "rotation-min-angular-velocity": a,
              "rotation-max-angular-velocity": s,
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
    7019: (e, t, o) => {
      o.d(t, {
        Fi: () => a,
        Lr: () => C,
        MQ: () => n,
        Oi: () => r,
        Zk: () => B,
        _h: () => i,
        mw: () => l,
        o3: () => s,
        xO: () => _,
      });
      var r,
        i,
        n,
        a,
        s,
        l,
        _,
        p = o(1635),
        d = o(6540),
        u = o(3496),
        m = o(5178),
        c = o(3236),
        h = o(5723),
        g = o(7600),
        S = o(7727),
        v = o(1651),
        D = o(7813),
        y = o(9386);
      function I(e) {
        if (e) return [e.u, e.v];
      }
      function C(e) {
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
          (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
        })(i || (i = {})),
        (function (e) {
          (e[(e.Mono = 0)] = "Mono"),
            (e[(e.Parallel = 1)] = "Parallel"),
            (e[(e.Crossed = 2)] = "Crossed"),
            (e[(e.Panorama = 3)] = "Panorama"),
            (e[(e.StackedPanorama = 4)] = "StackedPanorama");
        })(n || (n = {})),
        (function (e) {
          (e[(e.Visible = 0)] = "Visible"),
            (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
            (e[(e.Hidden = 2)] = "Hidden"),
            (e[(e.InvisibleButIntersectable = 3)] =
              "InvisibleButIntersectable");
        })(a || (a = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Disabled = 1)] = "Disabled"),
            (e[(e.Low = 2)] = "Low");
        })(s || (s = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Auto = 1)] = "Auto"),
            (e[(e.PendingGamepadFocus = 2)] = "PendingGamepadFocus"),
            (e[(e.GamepadFocusNotSupported = 3)] = "GamepadFocusNotSupported");
        })(l || (l = {})),
        (function (e) {
          (e[(e.PixelOffset = 0)] = "PixelOffset"),
            (e[(e.ScaleAndCenter = 1)] = "ScaleAndCenter");
        })(_ || (_ = {}));
      class B extends u._J {
        constructor(e) {
          super(e),
            (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
            (this.m_nEmbeddedIndex = void 0),
            (this.m_LastDOMContentSize = void 0),
            (this.m_DOMContentSizeChangedCallbacks = new v.l()),
            (this.m_resizeObserver = null),
            (this.m_UVsMin = void 0),
            (this.m_UVsMax = void 0),
            (this.m_bOverdragBlocking = !1),
            (this.m_overdragBlockingElements = []),
            (this.m_gamepadButtonHandlerHandle = void 0);
          const t = void 0 !== this.props.width || void 0 !== this.props.height,
            o = void 0 !== this.props.meters_per_pixel,
            r = void 0 !== this.props.target_dpi_panel_id,
            i =
              void 0 !== this.props.rendermodel_component_device_index ||
              void 0 !== this.props.rendermodel_component_name,
            n =
              void 0 !== this.props.subview_parent_panel_id ||
              void 0 !== this.props.subview_parent_panel_key;
          if (
            i &&
            (void 0 === this.props.rendermodel_component_device_index ||
              void 0 === this.props.rendermodel_component_name)
          )
            throw new Error(
              "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
            );
          const a = [t, o, r, i, n].filter((e) => e).length,
            s =
              "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, a rendermodel name, or a parent overlay of which to become a subview.";
          if (0 == a)
            throw new Error(`Panel requires one of the following props: ${s}.`);
          if (a > 1)
            throw new Error(
              `Panel cannot have more of the following of the following props: ${s}.`,
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
          B.s_bPanelsAreDirty = !0;
        }
        componentDidMount() {
          super.componentDidMount(),
            (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
            this.m_resizeObserver.observe(this.getCurrentRootElement()),
            (this.m_nEmbeddedIndex = m.O.Current().addEmbeddedPanelUVs(this)),
            (B.s_bPanelsAreDirty = !0),
            this.getCurrentRootElement().addEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            this.forceUpdate(),
            B.s_setAllPanels.add(this),
            (this.m_gamepadButtonHandlerHandle =
              null === y.L || void 0 === y.L
                ? void 0
                : y.L.RegisterGamepadButtonHandler(this.m_SGID, this, 0));
        }
        onResizeObserved(e, t) {
          m.O.Current().forceLayoutUpdate(),
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
          B.s_setAllPanels.delete(this),
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null)),
            this.stopOverDragBlocking(),
            this.getCurrentRootElement().removeEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            (B.s_bPanelsAreDirty = !0),
            m.O.Current().removeEmbeddedPanelUVs(this),
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
        createOverdragBlockingElement(e, t, o, r) {
          let i = document.createElement("div");
          (i.style.position = "absolute"),
            (i.style.top = t + "px"),
            (i.style.left = e + "px"),
            (i.style.width = o + "px"),
            (i.style.height = r + "px"),
            (i.style.zIndex = "90019001"),
            this.m_overdragBlockingElements.push(i),
            document.body.appendChild(i);
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
            : a.Visible;
        }
        buildNode(e, t) {
          var o, r, i, n, s, l, _, p, d, c, g, S, v;
          if (
            !(
              this.visibility == a.Visible ||
              this.visibility == a.InvisibleButIntersectable
            )
          )
            return [e, null];
          let D = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !1,
              currentPanel: this,
            }),
            y = this.createSgNode(t),
            B = { x: 0, y: 0 };
          B =
            "object" == typeof this.props.origin
              ? (0, u.PG)(this.props.origin)
              : C(this.props.origin);
          const f = this.props.overlay_key,
            F = (0, h.w5)();
          f && f.length > 0
            ? (y.properties.key = f)
            : F
              ? (y.properties.key = F)
              : (y.properties.overlay_handle = (0, h.X4)()),
            this.m_UVsMin &&
              (y.properties.uv_min =
                null !== (o = I(this.m_UVsMin)) && void 0 !== o ? o : void 0),
            this.m_UVsMax &&
              (y.properties.uv_max =
                null !== (r = I(this.m_UVsMax)) && void 0 !== r ? r : void 0);
          const M = 1 / m.O.Current().m_fCurrentScale;
          let R = this.props.frame_resize_scale_factor;
          return (
            this.props.is_frame_page_main_panel && (R = null != R ? R : 1),
            (y.properties.width =
              null !== (i = this.props.width) && void 0 !== i ? i : void 0),
            (y.properties.height =
              null !== (n = this.props.height) && void 0 !== n ? n : void 0),
            (y.properties["scale-index"] =
              null !== (s = this.props.scale_index) && void 0 !== s ? s : 0),
            (y.properties["min-width"] =
              null !== (l = this.props.min_width) && void 0 !== l ? l : void 0),
            (y.properties["target-width-anchor-id"] = (0, h.bl)(
              this.props.target_width_anchor_id,
            )),
            (y.properties["target-dpi-panel-id"] = (0, h.bl)(
              this.props.target_dpi_panel_id,
            )),
            (y.properties["target-dpi-multiplier"] =
              this.props.target_dpi_multiplier),
            (y.properties["meters-per-pixel"] =
              null != this.props.meters_per_pixel
                ? this.props.meters_per_pixel * M
                : void 0),
            (y.properties["subview-parent-panel-key"] =
              this.props.subview_parent_panel_key),
            (y.properties["subview-parent-panel-id"] =
              this.props.subview_parent_panel_id),
            (y.properties["subview-sizing"] = this.props.subview_sizing),
            (y.properties.curvature = this.props.curvature),
            (y.properties["curvature-origin-id"] = (0, h.bl)(
              this.props.curvature_origin_id,
            )),
            (y.properties["render-type"] = this.props.renderType),
            (y.properties.interactive = this.props.interactive),
            (y.properties.scrollable = this.props.scrollable),
            (y.properties.undocked = this.props.undocked),
            (y.properties.modal = this.props.modal),
            (y.properties["only-visible-with-laser"] =
              this.props.only_visible_with_laser),
            (y.properties["allow-input-capture"] =
              this.props.allow_input_capture),
            (y.properties["lasermouse-filtering"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.lasermouse_filtering),
            (y.properties["focus-outline"] =
              null === (p = this.props) || void 0 === p ? void 0 : p.outline),
            (y.properties["hide-laser-when-clicking"] =
              this.props.hide_lasermouse_when_clicking),
            (y.properties["hide-laser-intersection"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d.hide_laser_intersection),
            (y.properties["make-overlays-interactive-if-visible"] =
              this.props.make_overlays_interactive_if_visible),
            (y.properties["is-grab-handle"] = this.props.is_grab_handle),
            (y.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
            (y.properties.origin = (0, u.Hm)(B)),
            (y.properties.debug_name = this.props.debug_name),
            (y.properties.sampler = this.props.sampler),
            (y.properties.reflect = this.props.reflect),
            (y.properties.stereoscopy = this.props.stereoscopy),
            (y.properties.rendermodel_component_device_index =
              this.props.rendermodel_component_device_index),
            (y.properties.rendermodel_component_name =
              this.props.rendermodel_component_name),
            (y.properties["texture-id"] = (0, h.bl)(this.props.texture_id)),
            (y.properties["sort-order"] = this.props.sort_order),
            (y.properties["sort-depth-bias"] = this.props.sort_depth_bias),
            (y.properties["no-depth-write"] = this.props.no_depth_write),
            (y.properties["no-depth-test"] = this.props.no_depth_test),
            (y.properties.visibility = this.visibility),
            (y.properties["frame-resize-scale-factor"] = R),
            (y.properties["main-panel-for-frame-page"] =
              this.props.is_frame_page_main_panel),
            (y.properties["steam-input-appid"] =
              null === (c = this.inputFocusParams) || void 0 === c
                ? void 0
                : c.unSteamInputAppID),
            (y.properties["vr-input-pid"] =
              null === (g = this.inputFocusParams) || void 0 === g
                ? void 0
                : g.unVRInputPID),
            (y.properties["can-take-keyboard-focus"] =
              null ===
                (v =
                  null === (S = this.inputFocusParams) || void 0 === S
                    ? void 0
                    : S.bCanTakeKeyboardFocus) ||
              void 0 === v ||
              v),
            [D, y]
          );
        }
        scaleLocalUVToGlobal(e) {
          if (!this.m_UVsMin || !this.m_UVsMax) return;
          const t = this.m_UVsMax.u - this.m_UVsMin.u,
            o = this.m_UVsMax.v - this.m_UVsMin.v;
          return { u: this.m_UVsMin.u + t * e.u, v: this.m_UVsMin.v + o * e.v };
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
          return d.createElement(
            "vsg-node",
            { style: { display: this.visibility == a.Hidden ? "none" : null } },
            d.createElement(g.tH, null, this.props.children),
            this.props.is_frame_page_main_panel &&
              d.createElement(f, { panel: this, panelID: this.getID() }),
          );
        }
        get inputFocusParams() {
          return Object.assign(
            { bCanTakeKeyboardFocus: this.props.interactive },
            this.props.inputFocusParams,
          );
        }
        get isInputFocusable() {
          var e, t, o;
          return (
            (null === (e = this.inputFocusParams) || void 0 === e
              ? void 0
              : e.unSteamInputAppID) ||
            (null === (t = this.inputFocusParams) || void 0 === t
              ? void 0
              : t.unVRInputPID) ||
            (null === (o = this.inputFocusParams) || void 0 === o
              ? void 0
              : o.bCanTakeKeyboardFocus)
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
          var t, o, r;
          return (
            null !==
              (r =
                null === (o = (t = this.props).onSystemGamepadButtonClick) ||
                void 0 === o
                  ? void 0
                  : o.call(t, e)) &&
            void 0 !== r &&
            r
          );
        }
        OnSystemGamepadButtonDown(e) {
          var t, o, r;
          return (
            null !==
              (r =
                null === (o = (t = this.props).onSystemGamepadButtonDown) ||
                void 0 === o
                  ? void 0
                  : o.call(t, e)) &&
            void 0 !== r &&
            r
          );
        }
        OnSystemGamepadButtonUp(e) {
          var t, o, r;
          return (
            null !==
              (r =
                null === (o = (t = this.props).onSystemGamepadButtonUp) ||
                void 0 === o
                  ? void 0
                  : o.call(t, e)) &&
            void 0 !== r &&
            r
          );
        }
      }
      function f(e) {
        const { panel: t, panelID: o } = e,
          { page: r } = (0, S.N)();
        return (
          d.useEffect(() => {
            const { Unset: e } = null == r ? void 0 : r.SetMainPanel(t);
            return e;
          }, [r, t, o]),
          null
        );
      }
      (B.s_bPanelsAreDirty = !1),
        (B.s_setAllPanels = new D.ObservableSet()),
        (0, p.Cg)([c.o], B.prototype, "onResizeObserved", null),
        (0, p.Cg)([c.o], B.prototype, "onPanelMouseDown", null),
        (0, p.Cg)([c.o], B.prototype, "onWindowMouseUp", null),
        (0, p.Cg)([c.o], B.prototype, "buildNode", null),
        (0, p.Cg)([D.computed], B.prototype, "hasInputFocus", null),
        (0, p.Cg)([D.computed], B.prototype, "hasSubviewWithInputFocus", null),
        (0, p.Cg)([D.computed], B.prototype, "hasGamepadFocus", null),
        (window.s_setAllPanels = B.s_setAllPanels);
    },
    3361: (e, t, o) => {
      o.d(t, { d: () => s });
      var r,
        i = o(6540),
        n = o(3496),
        a = o(6292);
      !(function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(r || (r = {}));
      class s extends n._J {
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
          var e, t, o;
          let s, l, _, p;
          this.props.transform
            ? ((s = (0, n.j_)(this.props.transform.translation)),
              (l = this.props.transform.rotation),
              (_ = this.props.transform.scale))
            : ((s = (0, n.XI)(this.props.translation)
                ? null === (e = (0, n.UM)(this.props.translation)) ||
                  void 0 === e
                  ? void 0
                  : e.join(" ")
                : (0, n.j_)(
                    (0, n.Wi)(this.props.translation, { x: 0, y: 0, z: 0 }),
                  )),
              (l =
                this.props.rotation && "w" in this.props.rotation
                  ? this.props.rotation
                  : (0, a.Fb)(
                      (0, a.tx)(
                        (0, n.Wi)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                        Math.PI / 180,
                      ),
                    )),
              (_ =
                "number" == typeof this.props.scale
                  ? {
                      x: this.props.scale,
                      y: this.props.scale,
                      z: this.props.scale,
                    }
                  : (0, n.Wi)(this.props.scale, { x: 1, y: 1, z: 1 }))),
            null !=
              (null === (t = this.props) || void 0 === t
                ? void 0
                : t.parent_origin) &&
              (p =
                r[
                  null === (o = this.props) || void 0 === o
                    ? void 0
                    : o.parent_origin
                ]);
          let d = (0, n.hi)(l),
            u = (0, n.j_)(_);
          return i.createElement(
            "vsg-transform",
            {
              translation: s,
              rotation: d,
              scale: u,
              "curvature-pitch": this.props.curvature_pitch,
              "invert-parent-panel-pitch": this.props.invert_parent_panel_pitch,
              "ignore-parent-scale": this.props.ignore_parent_scale,
              "transform-path": this.props.transform_path,
              "parent-path": this.props.parent_path,
              "parent-origin": p,
              "parent-id": this.props.parent_id,
              "frame-resize-scale-factor": this.props.frame_resize_scale_factor,
            },
            this.props.children,
          );
        }
      }
    },
    4367: (e, t, o) => {
      var r, i, n, a, s, l, _, p, d, u, m, c, h, g, S, v, D, y, I, C, B;
      function f(e) {
        if (!e) return;
        return Object.values(g)
          .filter((e) => "number" == typeof e)
          .includes(e)
          ? e
          : void 0;
      }
      o.d(t, {
        $: () => u,
        $Z: () => m,
        Do: () => R,
        Ee: () => b,
        Fz: () => y,
        JR: () => l,
        KI: () => d,
        QR: () => s,
        YV: () => S,
        Yu: () => w,
        ZP: () => D,
        _8: () => C,
        ds: () => f,
        en: () => a,
        eo: () => c,
        f9: () => P,
        fD: () => r,
        fk: () => h,
        hm: () => i,
        hq: () => B,
        ke: () => F,
        wB: () => v,
        yW: () => g,
        zw: () => k,
      }),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.TrackingSystemName_String = 1e3)] =
              "TrackingSystemName_String"),
            (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
            (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
            (e[(e.RenderModelName_String = 1003)] = "RenderModelName_String"),
            (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
            (e[(e.ManufacturerName_String = 1005)] = "ManufacturerName_String"),
            (e[(e.TrackingFirmwareVersion_String = 1006)] =
              "TrackingFirmwareVersion_String"),
            (e[(e.HardwareRevision_String = 1007)] = "HardwareRevision_String"),
            (e[(e.AllWirelessDongleDescriptions_String = 1008)] =
              "AllWirelessDongleDescriptions_String"),
            (e[(e.ConnectedWirelessDongle_String = 1009)] =
              "ConnectedWirelessDongle_String"),
            (e[(e.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
            (e[(e.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
            (e[(e.DeviceBatteryPercentage_Float = 1012)] =
              "DeviceBatteryPercentage_Float"),
            (e[(e.StatusDisplayTransform_Matrix34 = 1013)] =
              "StatusDisplayTransform_Matrix34"),
            (e[(e.Firmware_UpdateAvailable_Bool = 1014)] =
              "Firmware_UpdateAvailable_Bool"),
            (e[(e.Firmware_ManualUpdate_Bool = 1015)] =
              "Firmware_ManualUpdate_Bool"),
            (e[(e.Firmware_ManualUpdateURL_String = 1016)] =
              "Firmware_ManualUpdateURL_String"),
            (e[(e.HardwareRevision_Uint64 = 1017)] = "HardwareRevision_Uint64"),
            (e[(e.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
            (e[(e.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
            (e[(e.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
            (e[(e.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
            (e[(e.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
            (e[(e.BlockServerShutdown_Bool = 1023)] =
              "BlockServerShutdown_Bool"),
            (e[(e.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
              "CanUnifyCoordinateSystemWithHmd_Bool"),
            (e[(e.ContainsProximitySensor_Bool = 1025)] =
              "ContainsProximitySensor_Bool"),
            (e[(e.DeviceProvidesBatteryStatus_Bool = 1026)] =
              "DeviceProvidesBatteryStatus_Bool"),
            (e[(e.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
            (e[(e.Firmware_ProgrammingTarget_String = 1028)] =
              "Firmware_ProgrammingTarget_String"),
            (e[(e.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
            (e[(e.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
            (e[(e.DriverVersion_String = 1031)] = "DriverVersion_String"),
            (e[(e.Firmware_ForceUpdateRequired_Bool = 1032)] =
              "Firmware_ForceUpdateRequired_Bool"),
            (e[(e.ViveSystemButtonFixRequired_Bool = 1033)] =
              "ViveSystemButtonFixRequired_Bool"),
            (e[(e.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
            (e[(e.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
            (e[(e.RegisteredDeviceType_String = 1036)] =
              "RegisteredDeviceType_String"),
            (e[(e.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
            (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
            (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
            (e[(e.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
            (e[(e.CameraStreamFormat_Int32 = 1041)] =
              "CameraStreamFormat_Int32"),
            (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
              "AdditionalDeviceSettingsPath_String"),
            (e[(e.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
            (e[(e.ActualTrackingSystemName_String = 1054)] =
              "ActualTrackingSystemName_String"),
            (e[(e.AllowCameraToggle_Bool = 1055)] = "AllowCameraToggle_Bool"),
            (e[(e.AllowLightSourceFrequency_Bool = 1056)] =
              "AllowLightSourceFrequency_Bool"),
            (e[(e.IsDedicatedVRHeadset_Bool = 1058)] =
              "IsDedicatedVRHeadset_Bool"),
            (e[(e.HasEyeTracker_Bool = 1060)] = "HasEyeTracker_Bool"),
            (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
              "ReportsTimeSinceVSync_Bool"),
            (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
              "SecondsFromVsyncToPhotons_Float"),
            (e[(e.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
            (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
            (e[(e.CurrentUniverseId_Uint64 = 2004)] =
              "CurrentUniverseId_Uint64"),
            (e[(e.PreviousUniverseId_Uint64 = 2005)] =
              "PreviousUniverseId_Uint64"),
            (e[(e.DisplayFirmwareVersion_Uint64 = 2006)] =
              "DisplayFirmwareVersion_Uint64"),
            (e[(e.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
            (e[(e.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
            (e[(e.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
            (e[(e.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
            (e[(e.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
            (e[(e.DisplayMCImageLeft_String = 2012)] =
              "DisplayMCImageLeft_String"),
            (e[(e.DisplayMCImageRight_String = 2013)] =
              "DisplayMCImageRight_String"),
            (e[(e.DisplayGCBlackClamp_Float = 2014)] =
              "DisplayGCBlackClamp_Float"),
            (e[(e.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
            (e[(e.CameraToHeadTransform_Matrix34 = 2016)] =
              "CameraToHeadTransform_Matrix34"),
            (e[(e.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
            (e[(e.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
            (e[(e.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
            (e[(e.DisplayGCPrescale_Float = 2020)] = "DisplayGCPrescale_Float"),
            (e[(e.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
            (e[(e.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
            (e[(e.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
            (e[(e.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
            (e[(e.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
            (e[(e.UserHeadToEyeDepthMeters_Float = 2026)] =
              "UserHeadToEyeDepthMeters_Float"),
            (e[(e.CameraFirmwareVersion_Uint64 = 2027)] =
              "CameraFirmwareVersion_Uint64"),
            (e[(e.CameraFirmwareDescription_String = 2028)] =
              "CameraFirmwareDescription_String"),
            (e[(e.DisplayFPGAVersion_Uint64 = 2029)] =
              "DisplayFPGAVersion_Uint64"),
            (e[(e.DisplayBootloaderVersion_Uint64 = 2030)] =
              "DisplayBootloaderVersion_Uint64"),
            (e[(e.DisplayHardwareVersion_Uint64 = 2031)] =
              "DisplayHardwareVersion_Uint64"),
            (e[(e.AudioFirmwareVersion_Uint64 = 2032)] =
              "AudioFirmwareVersion_Uint64"),
            (e[(e.CameraCompatibilityMode_Int32 = 2033)] =
              "CameraCompatibilityMode_Int32"),
            (e[(e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
              "ScreenshotHorizontalFieldOfViewDegrees_Float"),
            (e[(e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
              "ScreenshotVerticalFieldOfViewDegrees_Float"),
            (e[(e.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
            (e[(e.DisplayAllowNightMode_Bool = 2037)] =
              "DisplayAllowNightMode_Bool"),
            (e[(e.DisplayMCImageWidth_Int32 = 2038)] =
              "DisplayMCImageWidth_Int32"),
            (e[(e.DisplayMCImageHeight_Int32 = 2039)] =
              "DisplayMCImageHeight_Int32"),
            (e[(e.DisplayMCImageNumChannels_Int32 = 2040)] =
              "DisplayMCImageNumChannels_Int32"),
            (e[(e.DisplayMCImageData_Binary = 2041)] =
              "DisplayMCImageData_Binary"),
            (e[(e.SecondsFromPhotonsToVblank_Float = 2042)] =
              "SecondsFromPhotonsToVblank_Float"),
            (e[(e.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
              "DriverDirectModeSendsVsyncEvents_Bool"),
            (e[(e.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
            (e[(e.GraphicsAdapterLuid_Uint64 = 2045)] =
              "GraphicsAdapterLuid_Uint64"),
            (e[(e.DriverProvidedChaperonePath_String = 2048)] =
              "DriverProvidedChaperonePath_String"),
            (e[(e.ExpectedTrackingReferenceCount_Int32 = 2049)] =
              "ExpectedTrackingReferenceCount_Int32"),
            (e[(e.ExpectedControllerCount_Int32 = 2050)] =
              "ExpectedControllerCount_Int32"),
            (e[(e.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
              "NamedIconPathControllerLeftDeviceOff_String"),
            (e[(e.NamedIconPathControllerRightDeviceOff_String = 2052)] =
              "NamedIconPathControllerRightDeviceOff_String"),
            (e[(e.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
              "NamedIconPathTrackingReferenceDeviceOff_String"),
            (e[(e.DoNotApplyPrediction_Bool = 2054)] =
              "DoNotApplyPrediction_Bool"),
            (e[(e.CameraToHeadTransforms_Matrix34_Array = 2055)] =
              "CameraToHeadTransforms_Matrix34_Array"),
            (e[(e.DistortionMeshResolution_Int32 = 2056)] =
              "DistortionMeshResolution_Int32"),
            (e[(e.DriverIsDrawingControllers_Bool = 2057)] =
              "DriverIsDrawingControllers_Bool"),
            (e[(e.DriverRequestsApplicationPause_Bool = 2058)] =
              "DriverRequestsApplicationPause_Bool"),
            (e[(e.DriverRequestsReducedRendering_Bool = 2059)] =
              "DriverRequestsReducedRendering_Bool"),
            (e[(e.MinimumIpdStepMeters_Float = 2060)] =
              "MinimumIpdStepMeters_Float"),
            (e[(e.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
              "AudioBridgeFirmwareVersion_Uint64"),
            (e[(e.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
              "ImageBridgeFirmwareVersion_Uint64"),
            (e[(e.ImuToHeadTransform_Matrix34 = 2063)] =
              "ImuToHeadTransform_Matrix34"),
            (e[(e.ImuFactoryGyroBias_Vector3 = 2064)] =
              "ImuFactoryGyroBias_Vector3"),
            (e[(e.ImuFactoryGyroScale_Vector3 = 2065)] =
              "ImuFactoryGyroScale_Vector3"),
            (e[(e.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
              "ImuFactoryAccelerometerBias_Vector3"),
            (e[(e.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
              "ImuFactoryAccelerometerScale_Vector3"),
            (e[(e.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
              "ConfigurationIncludesLighthouse20Features_Bool"),
            (e[(e.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
              "Prop_AdditionalRadioFeatures_Uint64"),
            (e[(e.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
              "Prop_CameraWhiteBalance_Vector4_Array"),
            (e[(e.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
              "Prop_CameraDistortionFunction_Int32_Array"),
            (e[(e.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
              "Prop_CameraDistortionCoefficients_Float_Array"),
            (e[(e.Prop_ExpectedControllerType_String = 2074)] =
              "Prop_ExpectedControllerType_String"),
            (e[(e.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
            (e[(e.DriverProvidedChaperoneVisibility_Bool = 2076)] =
              "DriverProvidedChaperoneVisibility_Bool"),
            (e[(e.HmdColumnCorrectionSettingPrefix_String = 2077)] =
              "HmdColumnCorrectionSettingPrefix_String"),
            (e[(e.CameraSupportsCompatibilityModes_Bool = 2078)] =
              "CameraSupportsCompatibilityModes_Bool"),
            (e[(e.SupportsRoomViewDepthProjection_Bool = 2079)] =
              "SupportsRoomViewDepthProjection_Bool"),
            (e[(e.DisplayAvailableFrameRates_Float_Array = 2080)] =
              "DisplayAvailableFrameRates_Float_Array"),
            (e[(e.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
              "DisplaySupportsRuntimeFramerateChange_Bool"),
            (e[(e.DisplaySupportsAnalogGain_Bool = 2085)] =
              "DisplaySupportsAnalogGain_Bool"),
            (e[(e.DisplayMinAnalogGain_Float = 2086)] =
              "DisplayMinAnalogGain_Float"),
            (e[(e.DisplayMaxAnalogGain_Float = 2087)] =
              "DisplayMaxAnalogGain_Float"),
            (e[(e.DashboardLinkSupport_Int32 = 2097)] =
              "DashboardLinkSupport_Int32"),
            (e[(e.DisplayMinUIAnalogGain_Float = 2098)] =
              "DisplayMinUIAnalogGain_Float"),
            (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
            (e[(e.IpdUIRangeMinMeters_Float = 2100)] =
              "IpdUIRangeMinMeters_Float"),
            (e[(e.IpdUIRangeMaxMeters_Float = 2101)] =
              "IpdUIRangeMaxMeters_Float"),
            (e[(e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
              "Hmd_SupportsHDCP14LegacyCompat_Bool"),
            (e[(e.Hmd_SupportsMicMonitoring_Bool = 2103)] =
              "Hmd_SupportsMicMonitoring_Bool"),
            (e[(e.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
              "Hmd_SupportsDisplayPortTrainingMode_Bool"),
            (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
              "Hmd_SupportsRoomViewDirect_Bool"),
            (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
              "Hmd_SupportsAppThrottling_Bool"),
            (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
              "Hmd_SupportsGpuBusMonitoring_Bool"),
            (e[(e.DriverProvidedIPDVisibility_Bool = 2108)] =
              "DriverProvidedIPDVisibility_Bool"),
            (e[(e.Prop_SupportsVRGamepadMode_Bool = 2117)] =
              "Prop_SupportsVRGamepadMode_Bool"),
            (e[(e.Hmd_CameraSettingsModel_Int32 = 2122)] =
              "Hmd_CameraSettingsModel_Int32"),
            (e[(e.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
              "DriverRequestedMuraCorrectionMode_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
              "DriverRequestedMuraFeather_InnerLeft_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
              "DriverRequestedMuraFeather_InnerRight_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
              "DriverRequestedMuraFeather_InnerTop_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
              "DriverRequestedMuraFeather_InnerBottom_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
              "DriverRequestedMuraFeather_OuterLeft_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
              "DriverRequestedMuraFeather_OuterRight_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
              "DriverRequestedMuraFeather_OuterTop_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
              "DriverRequestedMuraFeather_OuterBottom_Int32"),
            (e[(e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
              "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
            (e[(e.Hmd_ForceRoomViewOutsideChaperone_Bool = 2500)] =
              "Hmd_ForceRoomViewOutsideChaperone_Bool"),
            (e[(e.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
            (e[(e.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
            (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
            (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
            (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
            (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
            (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
            (e[(e.ControllerRoleHint_Int32 = 3007)] =
              "ControllerRoleHint_Int32"),
            (e[(e.Prop_ControllerHasLargeStatusArea_Bool = 3008)] =
              "Prop_ControllerHasLargeStatusArea_Bool"),
            (e[(e.FieldOfViewLeftDegrees_Float = 4e3)] =
              "FieldOfViewLeftDegrees_Float"),
            (e[(e.FieldOfViewRightDegrees_Float = 4001)] =
              "FieldOfViewRightDegrees_Float"),
            (e[(e.FieldOfViewTopDegrees_Float = 4002)] =
              "FieldOfViewTopDegrees_Float"),
            (e[(e.FieldOfViewBottomDegrees_Float = 4003)] =
              "FieldOfViewBottomDegrees_Float"),
            (e[(e.TrackingRangeMinimumMeters_Float = 4004)] =
              "TrackingRangeMinimumMeters_Float"),
            (e[(e.TrackingRangeMaximumMeters_Float = 4005)] =
              "TrackingRangeMaximumMeters_Float"),
            (e[(e.ModeLabel_String = 4006)] = "ModeLabel_String"),
            (e[(e.IconPathName_String = 5e3)] = "IconPathName_String"),
            (e[(e.NamedIconPathDeviceOff_String = 5001)] =
              "NamedIconPathDeviceOff_String"),
            (e[(e.NamedIconPathDeviceSearching_String = 5002)] =
              "NamedIconPathDeviceSearching_String"),
            (e[(e.NamedIconPathDeviceSearchingAlert_String = 5003)] =
              "NamedIconPathDeviceSearchingAlert_String"),
            (e[(e.NamedIconPathDeviceReady_String = 5004)] =
              "NamedIconPathDeviceReady_String"),
            (e[(e.NamedIconPathDeviceReadyAlert_String = 5005)] =
              "NamedIconPathDeviceReadyAlert_String"),
            (e[(e.NamedIconPathDeviceNotReady_String = 5006)] =
              "NamedIconPathDeviceNotReady_String"),
            (e[(e.NamedIconPathDeviceStandby_String = 5007)] =
              "NamedIconPathDeviceStandby_String"),
            (e[(e.NamedIconPathDeviceAlertLow_String = 5008)] =
              "NamedIconPathDeviceAlertLow_String"),
            (e[(e.DisplayHiddenArea_Binary_Start = 5100)] =
              "DisplayHiddenArea_Binary_Start"),
            (e[(e.DisplayHiddenArea_Binary_End = 5150)] =
              "DisplayHiddenArea_Binary_End"),
            (e[(e.ParentContainer = 5151)] = "ParentContainer"),
            (e[(e.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
            (e[(e.InstallPath_String = 6001)] = "InstallPath_String"),
            (e[(e.HasDisplayComponent_Bool = 6002)] =
              "HasDisplayComponent_Bool"),
            (e[(e.HasControllerComponent_Bool = 6003)] =
              "HasControllerComponent_Bool"),
            (e[(e.HasCameraComponent_Bool = 6004)] = "HasCameraComponent_Bool"),
            (e[(e.HasDriverDirectModeComponent_Bool = 6005)] =
              "HasDriverDirectModeComponent_Bool"),
            (e[(e.HasVirtualDisplayComponent_Bool = 6006)] =
              "HasVirtualDisplayComponent_Bool"),
            (e[(e.HasSpatialAnchorsSupport_Bool = 6007)] =
              "HasSpatialAnchorsSupport_Bool"),
            (e[(e.ControllerType_String = 7e3)] = "ControllerType_String"),
            (e[(e.LegacyInputProfile_String = 7001)] =
              "LegacyInputProfile_String"),
            (e[(e.VendorSpecific_Reserved_Start = 1e4)] =
              "VendorSpecific_Reserved_Start"),
            (e[(e.VendorSpecific_Reserved_End = 10999)] =
              "VendorSpecific_Reserved_End"),
            (e[(e.SupportsInHMDRoomSetup_Bool = 11003)] =
              "SupportsInHMDRoomSetup_Bool"),
            (e[(e.VRLinkClientHMDSupportsRoomSetupRequests_Bool = 11004)] =
              "VRLinkClientHMDSupportsRoomSetupRequests_Bool"),
            (e[(e.TrackedDeviceProperty_Max = 1e6)] =
              "TrackedDeviceProperty_Max");
        })(r || (r = {})),
        (function (e) {
          (e[(e.Eye_Left = 0)] = "Eye_Left"),
            (e[(e.Eye_Right = 1)] = "Eye_Right");
        })(i || (i = {})),
        (function (e) {
          (e[(e.k_EButton_System = 0)] = "k_EButton_System"),
            (e[(e.k_EButton_ApplicationMenu = 1)] =
              "k_EButton_ApplicationMenu"),
            (e[(e.k_EButton_Grip = 2)] = "k_EButton_Grip"),
            (e[(e.k_EButton_DPad_Left = 3)] = "k_EButton_DPad_Left"),
            (e[(e.k_EButton_DPad_Up = 4)] = "k_EButton_DPad_Up"),
            (e[(e.k_EButton_DPad_Right = 5)] = "k_EButton_DPad_Right"),
            (e[(e.k_EButton_DPad_Down = 6)] = "k_EButton_DPad_Down"),
            (e[(e.k_EButton_A = 7)] = "k_EButton_A"),
            (e[(e.k_EButton_ProximitySensor = 31)] =
              "k_EButton_ProximitySensor"),
            (e[(e.k_EButton_Axis0 = 32)] = "k_EButton_Axis0"),
            (e[(e.k_EButton_Axis1 = 33)] = "k_EButton_Axis1"),
            (e[(e.k_EButton_Axis2 = 34)] = "k_EButton_Axis2"),
            (e[(e.k_EButton_Axis3 = 35)] = "k_EButton_Axis3"),
            (e[(e.k_EButton_Axis4 = 36)] = "k_EButton_Axis4"),
            (e[(e.k_EButton_SteamVR_Touchpad = 32)] =
              "k_EButton_SteamVR_Touchpad"),
            (e[(e.k_EButton_SteamVR_Trigger = 33)] =
              "k_EButton_SteamVR_Trigger"),
            (e[(e.k_EButton_Dashboard_Back = 2)] = "k_EButton_Dashboard_Back"),
            (e[(e.k_EButton_IndexController_A = 2)] =
              "k_EButton_IndexController_A"),
            (e[(e.k_EButton_IndexController_B = 1)] =
              "k_EButton_IndexController_B"),
            (e[(e.k_EButton_IndexController_JoyStick = 35)] =
              "k_EButton_IndexController_JoyStick"),
            (e[(e.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
            (e[(e.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
            (e[(e.k_EButton_Max = 64)] = "k_EButton_Max");
        })(n || (n = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
            (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
            (e[(e.Snap = 3)] = "Snap"),
            (e[(e.Sliding = 4)] = "Sliding"),
            (e[(e.SlidingEdge = 5)] = "SlidingEdge");
        })(a || (a = {})),
        (function (e) {
          (e[(e.Minimal = 1)] = "Minimal"),
            (e[(e.Modal = 2)] = "Modal"),
            (e[(e.ShowArrowKeys = 4)] = "ShowArrowKeys"),
            (e[(e.HideDoneKey = 8)] = "HideDoneKey");
        })(s || (s = {})),
        (function (e) {
          (e[(e.Unknown = -1)] = "Unknown"),
            (e[(e.Idle = 0)] = "Idle"),
            (e[(e.UserInteraction = 1)] = "UserInteraction"),
            (e[(e.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
            (e[(e.Standby = 3)] = "Standby"),
            (e[(e.Idle_Timeout = 4)] = "Idle_Timeout");
        })(l || (l = {})),
        (function (e) {
          (e[(e.VRMouseButton_Left = 1)] = "VRMouseButton_Left"),
            (e[(e.VRMouseButton_Right = 2)] = "VRMouseButton_Right"),
            (e[(e.VRMouseButton_Middle = 4)] = "VRMouseButton_Middle");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.Notification_Shown = 600)] = "Notification_Shown"),
            (e[(e.Notification_Hidden = 601)] = "Notification_Hidden"),
            (e[(e.Notification_BeginInteraction = 602)] =
              "Notification_BeginInteraction"),
            (e[(e.Notification_Destroyed = 603)] = "Notification_Destroyed");
        })(p || (p = {})),
        (function (e) {
          (e[(e.TheaterFast = 0)] = "TheaterFast"),
            (e[(e.TheaterSlow = 1)] = "TheaterSlow");
        })(d || (d = {})),
        (function (e) {
          (e[(e.Constant = 0)] = "Constant"),
            (e[(e.Nearest = 1)] = "Nearest"),
            (e[(e.Linear = 2)] = "Linear"),
            (e[(e.SmoothStep = 3)] = "SmoothStep"),
            (e[(e.SmootherStep = 4)] = "SmootherStep");
        })(u || (u = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
            (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
            (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup"),
            (e[(e.RoomSetupFull = 5)] = "RoomSetupFull");
        })(m || (m = {})),
        (function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.VRGamepadUI = 3)] = "VRGamepadUI");
        })(c || (c = {})),
        (function (e) {
          (e[(e.__LocalSteamVR = 0)] = "__LocalSteamVR"),
            (e[(e.__LocalSteam = 1)] = "__LocalSteam"),
            (e[(e.__RemoteSteamVR = 2)] = "__RemoteSteamVR"),
            (e[(e.__RemoteSteam = 3)] = "__RemoteSteam"),
            (e[(e.MutualLocal = 4)] = "MutualLocal"),
            (e[(e.MutualSteamVR = 5)] = "MutualSteamVR"),
            (e[(e.MutualSteam = 6)] = "MutualSteam");
        })(h || (h = {})),
        (function (e) {
          (e[(e.Dashboard = 1)] = "Dashboard"),
            (e[(e.LeftHand = 2)] = "LeftHand"),
            (e[(e.RightHand = 3)] = "RightHand"),
            (e[(e.World = 4)] = "World"),
            (e[(e.Theater = 5)] = "Theater"),
            (e[(e.Boot = 6)] = "Boot");
        })(g || (g = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.SceneApp = 1)] = "SceneApp"),
            (e[(e.Panel = 2)] = "Panel");
        })(S || (S = {})),
        (function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.LaserMouse = 1)] = "LaserMouse"),
            (e[(e.Gamepad = 2)] = "Gamepad");
        })(v || (v = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.ControllerPairing = 1)] = "ControllerPairing"),
            (e[(e.WelcomeToSteamFrame = 2)] = "WelcomeToSteamFrame"),
            (e[(e.PlayspaceSetup = 3)] = "PlayspaceSetup"),
            (e[(e.LaserMouse = 4)] = "LaserMouse"),
            (e[(e.SystemButtonHideDashboard = 5)] =
              "SystemButtonHideDashboard"),
            (e[(e.SystemButtonDashboardHidden = 6)] =
              "SystemButtonDashboardHidden"),
            (e[(e.SystemButtonShowDashboard = 7)] =
              "SystemButtonShowDashboard"),
            (e[(e.PairWifiDongle = 8)] = "PairWifiDongle"),
            (e[(e.TourSendOff = 9)] = "TourSendOff"),
            (e[(e.SteamGuidedTourFinished = 10)] = "SteamGuidedTourFinished");
        })(D || (D = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ThirdPartyClient = 1)] = "ThirdPartyClient"),
            (e[(e.SteamVRClientUnified = 2)] = "SteamVRClientUnified"),
            (e[(e.SteamVRClientLegacyDual = 3)] = "SteamVRClientLegacyDual");
        })(y || (y = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.AuroraFloor = 1)] = "AuroraFloor");
        })(I || (I = {})),
        (function (e) {
          (e[(e.SceneAppNominal = 0)] = "SceneAppNominal"),
            (e[(e.SceneAppDimming = 1)] = "SceneAppDimming"),
            (e[(e.RoomSetup = 2)] = "RoomSetup"),
            (e[(e.SystemDimming = 3)] = "SystemDimming"),
            (e[(e.ConstructTheater = 4)] = "ConstructTheater"),
            (e[(e.ConstructNominal = 5)] = "ConstructNominal");
        })(C || (C = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.LargeDeadZone = 4)] = "LargeDeadZone"),
            (e[(e.SmallDeadZone = 8)] = "SmallDeadZone"),
            (e[(e.NoDeadZoneThenSmallElastic = 12)] =
              "NoDeadZoneThenSmallElastic");
        })(B || (B = {}));
      const F = B.SmallDeadZone;
      var M, R, P, w, b, k;
      !(function (e) {
        (e[(e.Rect = 0)] = "Rect"),
          (e[(e.Panorama = 1)] = "Panorama"),
          (e[(e.Projection = 2)] = "Projection"),
          (e[(e.Spherical = 3)] = "Spherical");
      })(M || (M = {})),
        (function (e) {
          (e[(e.Curved = 0)] = "Curved"), (e[(e.Flat = 1)] = "Flat");
        })(R || (R = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"), (e[(e.Aurora = 1)] = "Aurora");
        })(P || (P = {})),
        (function (e) {
          (e[(e.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
            (e[(e.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
            (e[(e.ECameraExposure_HighExposure = 2)] =
              "ECameraExposure_HighExposure");
        })(w || (w = {})),
        (function (e) {
          (e[(e.BULK_DEFAULT = 0)] = "BULK_DEFAULT"),
            (e[(e.BULK_64K_DMA = 1)] = "BULK_64K_DMA"),
            (e[(e.BULK_16K_DMA = 2)] = "BULK_16K_DMA"),
            (e[(e.BULK_8K_DMA = 3)] = "BULK_8K_DMA"),
            (e[(e.ISO_52FPS = 4)] = "ISO_52FPS"),
            (e[(e.ISO_50FPS = 5)] = "ISO_50FPS"),
            (e[(e.ISO_48FPS = 6)] = "ISO_48FPS"),
            (e[(e.ISO_46FPS = 7)] = "ISO_46FPS"),
            (e[(e.ISO_44FPS = 8)] = "ISO_44FPS"),
            (e[(e.ISO_42FPS = 9)] = "ISO_42FPS"),
            (e[(e.ISO_40FPS = 10)] = "ISO_40FPS"),
            (e[(e.ISO_35FPS = 11)] = "ISO_35FPS"),
            (e[(e.ISO_30FPS = 12)] = "ISO_30FPS"),
            (e[(e.ISO_15FPS = 13)] = "ISO_15FPS"),
            (e[(e.MAX_CAMERA_COMPAT_MODES = 14)] = "MAX_CAMERA_COMPAT_MODES");
        })(b || (b = {})),
        (function (e) {
          (e[(e.ECameraSettingsModel_Default = 0)] =
            "ECameraSettingsModel_Default"),
            (e[(e.ECameraSettingsModel_SteamFrame = 1)] =
              "ECameraSettingsModel_SteamFrame");
        })(k || (k = {}));
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~edeac9135.js.map
