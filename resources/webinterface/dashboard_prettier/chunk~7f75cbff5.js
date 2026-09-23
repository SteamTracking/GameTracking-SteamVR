var CLSTAMP = "11023671";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [797],
  {
    1977: (e, t, s) => {
      s(6540);
      var i = s(3496);
      i._J;
    },
    322: (e, t, s) => {
      var i = s(6540);
      s(4367), s(3361);
      i.Component;
    },
    4189: (e, t, s) => {
      var i = s(1635),
        n = s(3496),
        a = s(3236);
      class r extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "head-facing-transform";
        }
        buildNode(e, t) {
          var s;
          const i = this.createSgNode(t);
          return (
            (i.properties.up =
              null !== (s = this.props.up) && void 0 !== s ? s : "world"),
            [e, i]
          );
        }
      }
      (0, i.Cg)([a.o], r.prototype, "buildNode", null);
    },
    5227: (e, t, s) => {
      s.d(t, { N: () => a });
      var i = s(6540),
        n = s(3496);
      class a extends n._J {
        constructor(e) {
          super(e);
        }
        internalRender() {
          return i.createElement("vsg-line", {
            "target-id": this.props.target_id,
            thickness: this.props.thickness,
            "start-buffer": this.props.start_buffer,
            "end-buffer": this.props.end_buffer,
          });
        }
      }
    },
    1808: (e, t, s) => {
      s.d(t, { C: () => d });
      var i = s(1635),
        n = s(3496),
        a = s(7019),
        r = s(3236);
      class d extends n._J {
        constructor(e) {
          super(e),
            (this.m_latchedPosition = null),
            super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "panel-anchor";
        }
        relatch() {
          this.m_latchedPosition = null;
        }
        buildNode(e, t) {
          var s, i;
          if (!e.currentPanel && !e.bInsideReparentedPanel)
            return [
              Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
              null,
            ];
          let r = null;
          "object" == typeof this.props.location
            ? (r = (0, n.PG)(this.props.location, { x: 0, y: 0 }))
            : "number" == typeof this.props.location &&
              (r = (0, a.Lr)(this.props.location));
          let d = this.createSgNode(t);
          if (this.props.latched && null !== this.m_latchedPosition)
            (d.properties["anchor-u"] = this.m_latchedPosition.u),
              (d.properties["anchor-v"] = this.m_latchedPosition.v);
          else if (r) {
            const t = { u: 0.5 * r.x + 0.5, v: -0.5 * r.y + 0.5 },
              s =
                !e.currentPanel || e.currentPanel.props.overlay_key
                  ? t
                  : e.currentPanel.scaleLocalUVToGlobal(t);
            s &&
              ((d.properties["anchor-u"] = s.u),
              (d.properties["anchor-v"] = s.v));
          } else {
            if (!e.currentPanel)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            const n = t.ownerDocument,
              a = t.getBoundingClientRect(),
              r = a.left + a.width / 2,
              o = a.top + a.height / 2,
              l = e.currentPanel.m_Rect;
            if (r < l.x || r > l.x + l.width || o < l.y || o > l.y + l.height)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            const m =
                null === (s = n.defaultView) || void 0 === s
                  ? void 0
                  : s.innerWidth,
              h =
                null === (i = n.defaultView) || void 0 === i
                  ? void 0
                  : i.innerHeight;
            if (!(h && h > 0 && m && m > 0))
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            (d.properties["anchor-u"] = r / m),
              (d.properties["anchor-v"] = o / h);
          }
          return (
            (this.m_latchedPosition = {
              u: d.properties["anchor-u"],
              v: d.properties["anchor-v"],
            }),
            [e, d]
          );
        }
      }
      (0, i.Cg)([r.o], d.prototype, "buildNode", null);
    },
    5178: (e, t, s) => {
      s.d(t, { O: () => m });
      var i = s(1635),
        n = s(6540),
        a = s(7019),
        r = s(3236),
        d = s(5723);
      const o = new (s(776).wd)("EmbeddedPixels");
      var l;
      !(function (e) {
        (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
      })(l || (l = {}));
      class m extends n.Component {
        static get IsSceneGraphApp() {
          return null !== m.Current();
        }
        static Current() {
          return m.s_Current;
        }
        constructor(e) {
          var t;
          super(e),
            (this.m_DomRef = null),
            (this.m_scalingDomRef = null),
            (this.m_DebugPointerRef = null),
            (this.m_Observer = null),
            (this.m_nEmbeddedDataWidth = 0),
            (this.m_mapPanels = new Map()),
            (this.m_rAvailableEmbeddedIndicesQueue = []),
            (this.m_rEmbeddedIndicesToClear = []),
            (this.m_fCurrentScale = 1),
            (this.m_CanvasRef = null),
            (this.m_CanvasContext = null),
            (this.m_Pixels = null),
            (this.m_nDirtyXMin = -1),
            (this.m_nDirtyXMax = -1),
            (this.m_EmbeddedDataImgRef = null),
            (this.m_EmbeddedDataImgRGBBuffer = null),
            (m.s_Current = this),
            (this.state = {
              bFontsLoaded: !1,
              nForcedUpdateNumber: 0,
              bShowDebugPointer: !1,
              eRenderMode: (
                null === (t = VRHTML.VRUtil) || void 0 === t
                  ? void 0
                  : t.BSupportsCEFCanvas()
              )
                ? l.Canvas
                : l.Image,
            }),
            (this.m_DomRef = n.createRef()),
            (this.m_scalingDomRef = n.createRef()),
            (this.m_CanvasRef = n.createRef()),
            (this.m_EmbeddedDataImgRef = n.createRef()),
            (this.m_DebugPointerRef = n.createRef());
        }
        toggleDebugPointer() {
          this.setState({ bShowDebugPointer: !this.state.bShowDebugPointer });
        }
        onMouseMove(e) {
          this.state.bShowDebugPointer &&
            this.m_DebugPointerRef.current &&
            (this.m_DebugPointerRef.current.style.transform =
              "translateX( " +
              e.clientX +
              "px ) translateY( " +
              e.clientY +
              "px )");
        }
        forceLayoutUpdate() {
          (a.Zk.s_bPanelsAreDirty = !0),
            this.setState({
              nForcedUpdateNumber: this.state.nForcedUpdateNumber + 1,
            });
        }
        componentDidMount() {
          let e = this.m_DomRef.current.ownerDocument,
            t = e.defaultView;
          e.body.classList.add("SGApp"),
            document.documentElement.classList.add("VROverlay"),
            (window.SGApp = this),
            (this.m_nEmbeddedDataWidth = t.innerWidth);
          let s = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
          for (let e = 0; e < s; e++)
            this.m_rAvailableEmbeddedIndicesQueue.push(e);
          e.addEventListener("mousemove", this.onMouseMove),
            (this.m_Observer = new MutationObserver(this.onMutation)),
            this.m_Observer.observe(this.m_DomRef.current, {
              attributes: !0,
              attributeFilter: ["sg-forced-update-number", "overlay-key"],
              childList: !0,
              subtree: !0,
            }),
            this.createEmbeddedData(),
            t.addEventListener("load", this.forceLayoutUpdate),
            e.fonts.ready.then(() => this.setState({ bFontsLoaded: !0 })),
            (t.forceLayoutUpdate = this.forceLayoutUpdate),
            (t.toggleDebugPointer = this.toggleDebugPointer),
            (this.props.owning_overlay_key || this.props.web_secret) &&
              (0, d.Oe)(
                this.props.owning_overlay_key,
                this.m_DomRef.current,
                this.props.web_secret,
              );
        }
        componentWillUnmount() {
          let e = this.m_DomRef.current.ownerDocument;
          e.body.classList.remove("SGApp"),
            document.documentElement.classList.remove("VROverlay"),
            this.m_Observer && this.m_Observer.disconnect(),
            e.removeEventListener("mousemove", this.onMouseMove);
        }
        render() {
          const e = this.state.eRenderMode == l.Image,
            t = this.state.eRenderMode == l.Canvas;
          let s = [];
          return (
            this.state.bShowDebugPointer && s.push("ShowDebugPointer"),
            n.createElement(
              "vsg-app",
              {
                class: s.join(" "),
                ref: this.m_DomRef,
                "sg-forced-update-number": this.state.nForcedUpdateNumber,
              },
              n.createElement("div", {
                className: "DebugPointer",
                ref: this.m_DebugPointerRef,
              }),
              e &&
                n.createElement("img", {
                  ref: this.m_EmbeddedDataImgRef,
                  className: "EmbeddedData",
                  height: m.k_EmbeddedDataRows,
                }),
              t &&
                n.createElement("canvas", {
                  ref: this.m_CanvasRef,
                  className: "EmbeddedData",
                  height: m.k_EmbeddedDataRows,
                }),
              n.createElement(
                "div",
                { className: "AppSceneGraph", ref: this.m_scalingDomRef },
                this.state.bFontsLoaded && this.props.children,
              ),
            )
          );
        }
        addEmbeddedPanelUVs(e) {
          if (0 !== this.m_rAvailableEmbeddedIndicesQueue.length)
            return (
              this.m_mapPanels.set(e.getSGID(), e),
              this.m_rAvailableEmbeddedIndicesQueue.shift()
            );
        }
        removeEmbeddedPanelUVs(e) {
          if (!this.m_mapPanels.has(e.getSGID())) return;
          this.m_mapPanels.delete(e.getSGID());
          const t = e.getEmbeddedIndex();
          null != t &&
            (this.m_rAvailableEmbeddedIndicesQueue.push(t),
            this.m_rEmbeddedIndicesToClear.push(t));
        }
        onMutation(e, t) {
          this.updateAllPanelBounds();
        }
        createEmbeddedData() {
          var e;
          this.state.eRenderMode == l.Image
            ? ((this.m_EmbeddedDataImgRef.current.width =
                this.m_nEmbeddedDataWidth),
              this.m_EmbeddedDataImgRGBBuffer ||
                (this.m_EmbeddedDataImgRGBBuffer =
                  null === (e = VRHTML.VRUtil) || void 0 === e
                    ? void 0
                    : e.CreateEmbeddedRGBScanline(
                        this.m_nEmbeddedDataWidth,
                        1,
                        4,
                      )))
            : this.state.eRenderMode == l.Canvas &&
              ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
              (this.m_CanvasContext =
                this.m_CanvasRef.current.getContext("2d")),
              null != this.m_CanvasContext &&
                ((this.m_CanvasContext.globalCompositeOperation = "copy"),
                (this.m_CanvasContext.imageSmoothingEnabled = !1),
                null === this.m_Pixels &&
                  (this.m_Pixels = this.m_CanvasContext.createImageData(
                    this.m_nEmbeddedDataWidth,
                    m.k_EmbeddedDataRows,
                  )))),
            this.updateAllPanelBounds();
        }
        updateAllPanelBounds() {
          let e = this.m_DomRef.current.ownerDocument.defaultView,
            t = this.m_scalingDomRef.current.getBoundingClientRect(),
            s = t.width / this.m_fCurrentScale,
            i = t.height / this.m_fCurrentScale,
            n = { x: e.innerWidth / s, y: e.innerHeight / i },
            r = Math.min(n.x, n.y, 1);
          r != this.m_fCurrentScale &&
            (1 != r
              ? this.m_scalingDomRef.current.setAttribute(
                  "style",
                  "transform: scale(" + r + "); transform-origin: top left",
                )
              : this.m_scalingDomRef.current.removeAttribute("style"),
            (this.m_fCurrentScale = r),
            (a.Zk.s_bPanelsAreDirty = !0)),
            a.Zk.s_bPanelsAreDirty &&
              (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
              (0, d.my)(),
              (a.Zk.s_bPanelsAreDirty = !1),
              this.updateEmbeddedData());
        }
        updateEmbeddedData() {
          var e;
          if (this.m_EmbeddedDataImgRef || this.m_CanvasRef)
            if (
              (this.setPixel(
                0,
                "V".charCodeAt(0),
                "S".charCodeAt(0),
                "G".charCodeAt(0),
              ),
              this.m_rEmbeddedIndicesToClear.forEach((e) => {
                let t = 1 + 3 * e;
                for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0);
              }),
              (this.m_rEmbeddedIndicesToClear = []),
              o.Debug("UPDATE EMBEDDED DATA ------------------"),
              this.m_mapPanels.forEach((e, t) => {
                const s = e.m_Rect.x,
                  i = e.m_Rect.x + e.m_Rect.width,
                  n = e.m_Rect.y,
                  a = e.m_Rect.y + e.m_Rect.height,
                  r = e.getEmbeddedIndex();
                if (null == r) return;
                const d = 1 + 3 * r;
                let l = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  m = !1;
                if (e.isExternal || s >= i || n >= a)
                  for (let e = 0; e < 3; e++) this.setPixel(d + 1, 0, 0, 0, 0);
                else
                  (m = !0),
                    (l[0] = (65280 & s) >> 8),
                    (l[1] = 255 & s),
                    (l[2] = 254),
                    (l[3] = (65280 & i) >> 8),
                    (l[4] = 255 & i),
                    (l[5] = 255 & n),
                    (l[6] = (65280 & a) >> 8),
                    (l[7] = 255 & a),
                    (l[8] = (65280 & n) >> 8),
                    this.setPixel(d, l[0], l[1], l[2]),
                    this.setPixel(d + 1, l[3], l[4], l[5]),
                    this.setPixel(d + 2, l[6], l[7], l[8]);
                o.Debug(
                  "panel",
                  m ? "" : "XX",
                  e.props.debug_name,
                  "uvs",
                  s,
                  n,
                  i,
                  a,
                  "nPixelOffset",
                  d,
                  "emIdx",
                  r,
                  l,
                  e.getCurrentRootElement(),
                );
              }),
              this.m_EmbeddedDataImgRef && this.state.eRenderMode == l.Image)
            ) {
              const t =
                null ===
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRUtil) || void 0 === e
                  ? void 0
                  : e.GetEmbeddedScanlineAsURIImage(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4,
                    );
              null != t && (this.m_EmbeddedDataImgRef.current.src = t);
            } else if (this.m_CanvasRef && this.state.eRenderMode == l.Canvas) {
              let e = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
              this.m_CanvasContext.putImageData(
                this.m_Pixels,
                0,
                0,
                this.m_nDirtyXMin,
                0,
                e,
                this.m_Pixels.height,
              ),
                (this.m_nDirtyXMin = -1),
                (this.m_nDirtyXMax = -1);
            }
        }
        setPixel(e, t, s, i, n = 255) {
          if (
            this.m_EmbeddedDataImgRGBBuffer &&
            this.state.eRenderMode == l.Image
          ) {
            const a = new DataView(this.m_EmbeddedDataImgRGBBuffer);
            a.setUint8(4 * e + 0, t),
              a.setUint8(4 * e + 1, s),
              a.setUint8(4 * e + 2, i),
              a.setUint8(4 * e + 3, n);
          } else
            this.m_Pixels &&
              this.state.eRenderMode == l.Canvas &&
              ((this.m_Pixels.data[4 * e + 0] = t),
              (this.m_Pixels.data[4 * e + 1] = s),
              (this.m_Pixels.data[4 * e + 2] = i),
              (this.m_Pixels.data[4 * e + 3] = n),
              (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                (this.m_nDirtyXMin = e),
              (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                (this.m_nDirtyXMax = e));
        }
      }
      (m.s_Current = null),
        (m.k_EmbeddedDataRows = 1),
        (0, i.Cg)([r.o], m.prototype, "toggleDebugPointer", null),
        (0, i.Cg)([r.o], m.prototype, "onMouseMove", null),
        (0, i.Cg)([r.o], m.prototype, "forceLayoutUpdate", null),
        (0, i.Cg)([r.o], m.prototype, "onMutation", null);
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~7f75cbff5.js.map
