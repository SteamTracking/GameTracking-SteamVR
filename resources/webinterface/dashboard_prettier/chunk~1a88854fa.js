var CLSTAMP = "11214286";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [458],
  {
    7019: (e, t, i) => {
      i.d(t, {
        Fi: () => o,
        Lr: () => w,
        MQ: () => s,
        Oi: () => r,
        Zk: () => C,
        mw: () => p,
        o3: () => n,
        xO: () => a,
      });
      var r,
        s,
        o,
        n,
        p,
        a,
        l = i(1635),
        d = i(6540),
        h = i(3496),
        u = i(5178),
        c = i(3236),
        m = i(5723),
        _ = i(7600),
        v = i(7727),
        g = i(1651),
        b = i(7813),
        y = i(9386);
      function f(e) {
        if (e) return [e.u, e.v];
      }
      function w(e) {
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
        })(s || (s = {})),
        (function (e) {
          (e[(e.Visible = 0)] = "Visible"),
            (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
            (e[(e.Hidden = 2)] = "Hidden"),
            (e[(e.InvisibleButIntersectable = 3)] =
              "InvisibleButIntersectable");
        })(o || (o = {})),
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
      class C extends h._J {
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
            s =
              void 0 !== this.props.rendermodel_component_device_index ||
              void 0 !== this.props.rendermodel_component_name,
            o =
              void 0 !== this.props.subview_parent_panel_id ||
              void 0 !== this.props.subview_parent_panel_key;
          if (
            s &&
            (void 0 === this.props.rendermodel_component_device_index ||
              void 0 === this.props.rendermodel_component_name)
          )
            throw new Error(
              "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
            );
          const n = [t, i, r, s, o].filter((e) => e).length,
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
          let s = document.createElement("div");
          (s.style.position = "absolute"),
            (s.style.top = t + "px"),
            (s.style.left = e + "px"),
            (s.style.width = i + "px"),
            (s.style.height = r + "px"),
            (s.style.zIndex = "90019001"),
            this.m_overdragBlockingElements.push(s),
            document.body.appendChild(s);
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
            : o.Visible;
        }
        buildNode(e, t) {
          var i, r, s, n, p, a, l, d, c, _, v, g, b;
          if (
            !(
              this.visibility == o.Visible ||
              this.visibility == o.InvisibleButIntersectable
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
              ? (0, h.PG)(this.props.origin)
              : w(this.props.origin);
          const k = this.props.overlay_key,
            O = (0, m.w5)();
          k && k.length > 0
            ? (C.properties.key = k)
            : O
              ? (C.properties.key = O)
              : (C.properties.overlay_handle = (0, m.X4)()),
            this.m_UVsMin &&
              (C.properties.uv_min =
                null !== (i = f(this.m_UVsMin)) && void 0 !== i ? i : void 0),
            this.m_UVsMax &&
              (C.properties.uv_max =
                null !== (r = f(this.m_UVsMax)) && void 0 !== r ? r : void 0);
          const P = 1 / u.O.Current().m_fCurrentScale;
          let S = this.props.frame_resize_scale_factor;
          return (
            this.props.is_frame_page_main_panel && (S = null != S ? S : 1),
            (C.properties.width =
              null !== (s = this.props.width) && void 0 !== s ? s : void 0),
            (C.properties.height =
              null !== (n = this.props.height) && void 0 !== n ? n : void 0),
            (C.properties["scale-index"] =
              null !== (p = this.props.scale_index) && void 0 !== p ? p : 0),
            (C.properties["min-width"] =
              null !== (a = this.props.min_width) && void 0 !== a ? a : void 0),
            (C.properties["target-width-anchor-id"] = (0, m.bl)(
              this.props.target_width_anchor_id,
            )),
            (C.properties["target-dpi-panel-id"] = (0, m.bl)(
              this.props.target_dpi_panel_id,
            )),
            (C.properties["target-dpi-multiplier"] =
              this.props.target_dpi_multiplier),
            (C.properties["meters-per-pixel"] =
              null != this.props.meters_per_pixel
                ? this.props.meters_per_pixel * P
                : void 0),
            (C.properties["subview-parent-panel-key"] =
              this.props.subview_parent_panel_key),
            (C.properties["subview-parent-panel-id"] =
              this.props.subview_parent_panel_id),
            (C.properties["subview-sizing"] = this.props.subview_sizing),
            (C.properties.curvature = this.props.curvature),
            (C.properties["curvature-origin-id"] = (0, m.bl)(
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
              null === (d = this.props) || void 0 === d ? void 0 : d.outline),
            (C.properties["hide-laser-when-clicking"] =
              this.props.hide_lasermouse_when_clicking),
            (C.properties["hide-laser-intersection"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c.hide_laser_intersection),
            (C.properties["make-overlays-interactive-if-visible"] =
              this.props.make_overlays_interactive_if_visible),
            (C.properties["is-grab-handle"] = this.props.is_grab_handle),
            (C.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
            (C.properties.origin = (0, h.Hm)(x)),
            (C.properties.debug_name = this.props.debug_name),
            (C.properties.reflect = this.props.reflect),
            (C.properties.stereoscopy = this.props.stereoscopy),
            (C.properties.rendermodel_component_device_index =
              this.props.rendermodel_component_device_index),
            (C.properties.rendermodel_component_name =
              this.props.rendermodel_component_name),
            (C.properties["texture-id"] = (0, m.bl)(this.props.texture_id)),
            (C.properties["sort-order"] = this.props.sort_order),
            (C.properties["sort-depth-bias"] = this.props.sort_depth_bias),
            (C.properties["no-depth-write"] = this.props.no_depth_write),
            (C.properties["no-depth-test"] = this.props.no_depth_test),
            (C.properties.visibility = this.visibility),
            (C.properties["frame-resize-scale-factor"] = S),
            (C.properties["main-panel-for-frame-page"] =
              this.props.is_frame_page_main_panel),
            (C.properties["steam-input-appid"] =
              null === (_ = this.inputFocusParams) || void 0 === _
                ? void 0
                : _.unSteamInputAppID),
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
          return d.createElement(
            "vsg-node",
            { style: { display: this.visibility == o.Hidden ? "none" : null } },
            d.createElement(_.tH, null, this.props.children),
            this.props.is_frame_page_main_panel &&
              d.createElement(x, { panel: this, panelID: this.getID() }),
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
          d.useEffect(() => {
            const { Unset: e } = null == r ? void 0 : r.SetMainPanel(t);
            return e;
          }, [r, t, i]),
          null
        );
      }
      (C.s_bPanelsAreDirty = !1),
        (C.s_setAllPanels = new b.ObservableSet()),
        (0, l.Cg)([c.o], C.prototype, "onResizeObserved", null),
        (0, l.Cg)([c.o], C.prototype, "onPanelMouseDown", null),
        (0, l.Cg)([c.o], C.prototype, "onWindowMouseUp", null),
        (0, l.Cg)([c.o], C.prototype, "buildNode", null),
        (0, l.Cg)([b.computed], C.prototype, "hasInputFocus", null),
        (0, l.Cg)([b.computed], C.prototype, "hasSubviewWithInputFocus", null),
        (0, l.Cg)([b.computed], C.prototype, "hasGamepadFocus", null),
        (window.s_setAllPanels = C.s_setAllPanels);
    },
    3361: (e, t, i) => {
      i.d(t, { d: () => p });
      var r,
        s = i(6540),
        o = i(3496),
        n = i(6292);
      !(function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(r || (r = {}));
      class p extends o._J {
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
          let p, a, l, d;
          this.props.transform
            ? ((p = (0, o.j_)(this.props.transform.translation)),
              (a = this.props.transform.rotation),
              (l = this.props.transform.scale))
            : ((p = (0, o.XI)(this.props.translation)
                ? null === (e = (0, o.UM)(this.props.translation)) ||
                  void 0 === e
                  ? void 0
                  : e.join(" ")
                : (0, o.j_)(
                    (0, o.Wi)(this.props.translation, { x: 0, y: 0, z: 0 }),
                  )),
              (a =
                this.props.rotation && "w" in this.props.rotation
                  ? this.props.rotation
                  : (0, n.Fb)(
                      (0, n.tx)(
                        (0, o.Wi)(this.props.rotation, { x: 0, y: 0, z: 0 }),
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
                  : (0, o.Wi)(this.props.scale, { x: 1, y: 1, z: 1 }))),
            null !=
              (null === (t = this.props) || void 0 === t
                ? void 0
                : t.parent_origin) &&
              (d =
                r[
                  null === (i = this.props) || void 0 === i
                    ? void 0
                    : i.parent_origin
                ]);
          let h = (0, o.hi)(a),
            u = (0, o.j_)(l);
          return s.createElement(
            "vsg-transform",
            {
              translation: p,
              rotation: h,
              scale: u,
              "curvature-pitch": this.props.curvature_pitch,
              "invert-parent-panel-pitch": this.props.invert_parent_panel_pitch,
              "ignore-parent-scale": this.props.ignore_parent_scale,
              "transform-path": this.props.transform_path,
              "parent-path": this.props.parent_path,
              "parent-origin": d,
              "parent-id": this.props.parent_id,
              "frame-resize-scale-factor": this.props.frame_resize_scale_factor,
            },
            this.props.children,
          );
        }
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~1a88854fa.js.map
