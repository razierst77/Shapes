"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [802],
  {
    6648: function (t, e, i) {
      i.d(e, {
        default: function () {
          return r.a;
        },
      });
      var n = i(5601),
        r = i.n(n);
    },
    8173: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let n = i(9920),
        r = i(1452),
        s = i(7437),
        o = r._(i(2265)),
        a = n._(i(4887)),
        l = n._(i(8321)),
        u = i(497),
        h = i(7103),
        d = i(3938);
      i(2301);
      let c = i(291),
        p = n._(i(1241)),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function m(t, e, i, n, r, s, o) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && r(!0), null == i ? void 0 : i.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let n = !1,
                    r = !1;
                  i.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => r,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (r = !0), e.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(t);
              }
            }));
      }
      function g(t) {
        return o.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, o.forwardRef)((t, e) => {
        let {
          src: i,
          srcSet: n,
          sizes: r,
          height: a,
          width: l,
          decoding: u,
          className: h,
          style: d,
          fetchPriority: c,
          placeholder: p,
          loading: f,
          unoptimized: v,
          fill: y,
          onLoadRef: x,
          onLoadingCompleteRef: P,
          setBlurComplete: w,
          setShowAltText: b,
          sizesInput: S,
          onLoad: T,
          onError: A,
          ...E
        } = t;
        return (0, s.jsx)("img", {
          ...E,
          ...g(c),
          loading: f,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: h,
          style: d,
          sizes: r,
          srcSet: n,
          src: i,
          ref: (0, o.useCallback)(
            (t) => {
              e &&
                ("function" == typeof e
                  ? e(t)
                  : "object" == typeof e && (e.current = t)),
                t &&
                  (A && (t.src = t.src), t.complete && m(t, p, x, P, w, v, S));
            },
            [i, p, x, P, w, A, v, S, e]
          ),
          onLoad: (t) => {
            m(t.currentTarget, p, x, P, w, v, S);
          },
          onError: (t) => {
            b(!0), "empty" !== p && w(!0), A && A(t);
          },
        });
      });
      function y(t) {
        let { isAppRouter: e, imgAttributes: i } = t,
          n = {
            as: "image",
            imageSrcSet: i.srcSet,
            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...g(i.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(i.src, n), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...n },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let x = (0, o.forwardRef)((t, e) => {
        let i = (0, o.useContext)(c.RouterContext),
          n = (0, o.useContext)(d.ImageConfigContext),
          r = (0, o.useMemo)(() => {
            let t = f || n || h.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              i = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: i };
          }, [n]),
          { onLoad: a, onLoadingComplete: l } = t,
          m = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          m.current = a;
        }, [a]);
        let g = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [x, P] = (0, o.useState)(!1),
          [w, b] = (0, o.useState)(!1),
          { props: S, meta: T } = (0, u.getImgProps)(t, {
            defaultLoader: p.default,
            imgConf: r,
            blurComplete: x,
            showAltText: w,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(v, {
              ...S,
              unoptimized: T.unoptimized,
              placeholder: T.placeholder,
              fill: T.fill,
              onLoadRef: m,
              onLoadingCompleteRef: g,
              setBlurComplete: P,
              setShowAltText: b,
              sizesInput: t.sizes,
              ref: e,
            }),
            T.priority
              ? (0, s.jsx)(y, { isAppRouter: !i, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    2901: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = i(9920)._(i(2265)).default.createContext({});
    },
    687: function (t, e) {
      function i(t) {
        let {
          ampFirst: e = !1,
          hybrid: i = !1,
          hasQuery: n = !1,
        } = void 0 === t ? {} : t;
        return e || (i && n);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    497: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        i(2301);
      let n = i(1564),
        r = i(7103);
      function s(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var i;
        let a,
          l,
          u,
          {
            src: h,
            sizes: d,
            unoptimized: c = !1,
            priority: p = !1,
            loading: f,
            className: m,
            quality: g,
            width: v,
            height: y,
            fill: x = !1,
            style: P,
            overrideSrc: w,
            onLoad: b,
            onLoadingComplete: S,
            placeholder: T = "empty",
            blurDataURL: A,
            fetchPriority: E,
            layout: C,
            objectFit: V,
            objectPosition: M,
            lazyBoundary: R,
            lazyRoot: D,
            ...j
          } = t,
          { imgConf: k, showAltText: L, blurComplete: F, defaultLoader: B } = e,
          O = k || r.imageConfigDefault;
        if ("allSizes" in O) a = O;
        else {
          let t = [...O.deviceSizes, ...O.imageSizes].sort((t, e) => t - e),
            e = O.deviceSizes.sort((t, e) => t - e);
          a = { ...O, allSizes: t, deviceSizes: e };
        }
        if (void 0 === B)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let W = j.loader || B;
        delete j.loader, delete j.srcSet;
        let I = "__next_img_default" in W;
        if (I) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                h +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let t = W;
          W = (e) => {
            let { config: i, ...n } = e;
            return t(n);
          };
        }
        if (C) {
          "fill" === C && (x = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          t && (P = { ...P, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[C];
          e && !d && (d = e);
        }
        let $ = "",
          z = o(v),
          U = o(y);
        if ("object" == typeof (i = h) && (s(i) || void 0 !== i.src)) {
          let t = s(h) ? h.default : h;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((l = t.blurWidth),
            (u = t.blurHeight),
            (A = A || t.blurDataURL),
            ($ = t.src),
            !x)
          ) {
            if (z || U) {
              if (z && !U) {
                let e = z / t.width;
                U = Math.round(t.height * e);
              } else if (!z && U) {
                let e = U / t.height;
                z = Math.round(t.width * e);
              }
            } else (z = t.width), (U = t.height);
          }
        }
        let _ = !p && ("lazy" === f || void 0 === f);
        (!(h = "string" == typeof h ? h : $) ||
          h.startsWith("data:") ||
          h.startsWith("blob:")) &&
          ((c = !0), (_ = !1)),
          a.unoptimized && (c = !0),
          I && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0),
          p && (E = "high");
        let N = o(g),
          H = Object.assign(
            x
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: V,
                  objectPosition: M,
                }
              : {},
            L ? {} : { color: "transparent" },
            P
          ),
          X =
            F || "empty" === T
              ? null
              : "blur" === T
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: z,
                  heightInt: U,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: A || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + T + '")',
          Y = X
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X,
              }
            : {},
          K = (function (t) {
            let {
              config: e,
              src: i,
              unoptimized: n,
              width: r,
              quality: s,
              sizes: o,
              loader: a,
            } = t;
            if (n) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, i) {
                let { deviceSizes: n, allSizes: r } = t;
                if (i) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let n; (n = t.exec(i)); n) e.push(parseInt(n[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: r.filter((e) => e >= n[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: r, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => r.find((e) => e >= t) || r[r.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, r, o),
              h = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l
                .map(
                  (t, n) =>
                    a({ config: e, src: i, quality: s, width: t }) +
                    " " +
                    ("w" === u ? t : n + 1) +
                    u
                )
                .join(", "),
              src: a({ config: e, src: i, quality: s, width: l[h] }),
            };
          })({
            config: a,
            src: h,
            unoptimized: c,
            width: z,
            quality: N,
            sizes: d,
            loader: W,
          });
        return {
          props: {
            ...j,
            loading: _ ? "lazy" : f,
            fetchPriority: E,
            width: z,
            height: U,
            decoding: "async",
            className: m,
            style: { ...H, ...Y },
            sizes: K.sizes,
            srcSet: K.srcSet,
            src: w || K.src,
          },
          meta: { unoptimized: c, priority: p, placeholder: T, fill: x },
        };
      }
    },
    8321: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return d;
          },
        });
      let n = i(9920),
        r = i(1452),
        s = i(7437),
        o = r._(i(2265)),
        a = n._(i(5960)),
        l = i(2901),
        u = i(6590),
        h = i(687);
      function d(t) {
        void 0 === t && (t = !1);
        let e = [(0, s.jsx)("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              (0, s.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function c(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === o.default.Fragment
          ? t.concat(
              o.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      i(2301);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(t, e) {
        let { inAmpMode: i } = e;
        return t
          .reduce(c, [])
          .reverse()
          .concat(d(i).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                i = new Set(),
                n = {};
              return (r) => {
                let s = !0,
                  o = !1;
                if (
                  r.key &&
                  "number" != typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  o = !0;
                  let e = r.key.slice(r.key.indexOf("$") + 1);
                  t.has(e) ? (s = !1) : t.add(e);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    e.has(r.type) ? (s = !1) : e.add(r.type);
                    break;
                  case "meta":
                    for (let t = 0, e = p.length; t < e; t++) {
                      let e = p[t];
                      if (r.props.hasOwnProperty(e)) {
                        if ("charSet" === e) i.has(e) ? (s = !1) : i.add(e);
                        else {
                          let t = r.props[e],
                            i = n[e] || new Set();
                          ("name" !== e || !o) && i.has(t)
                            ? (s = !1)
                            : (i.add(t), (n[e] = i));
                        }
                      }
                    }
                }
                return s;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let n = t.key || e;
            if (
              !i &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                o.default.cloneElement(t, e)
              );
            }
            return o.default.cloneElement(t, { key: n });
          });
      }
      let m = function (t) {
        let { children: e } = t,
          i = (0, o.useContext)(l.AmpStateContext),
          n = (0, o.useContext)(u.HeadManagerContext);
        return (0, s.jsx)(a.default, {
          reduceComponentsToState: f,
          headManager: n,
          inAmpMode: (0, h.isInAmpMode)(i),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1564: function (t, e) {
      function i(t) {
        let {
            widthInt: e,
            heightInt: i,
            blurWidth: n,
            blurHeight: r,
            blurDataURL: s,
            objectFit: o,
          } = t,
          a = n ? 40 * n : e,
          l = r ? 40 * r : i,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    3938: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(9920)._(i(2265)),
        r = i(7103),
        s = n.default.createContext(r.imageConfigDefault);
    },
    7103: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          VALID_LOADERS: function () {
            return i;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    5601: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = i(9920),
        r = i(497),
        s = i(8173),
        o = n._(i(1241));
      function a(t) {
        let { props: e } = (0, r.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return { props: e };
      }
      let l = s.Image;
    },
    1241: function (t, e) {
      function i(t) {
        let { config: e, src: i, width: n, quality: r } = t;
        return (
          e.path +
          "?url=" +
          encodeURIComponent(i) +
          "&w=" +
          n +
          "&q=" +
          (r || 75)
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (i.__next_img_default = !0);
      let n = i;
    },
    291: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = i(9920)._(i(2265)).default.createContext(null);
    },
    5960: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = i(2265),
        r = "undefined" == typeof window,
        s = r ? () => {} : n.useLayoutEffect,
        o = r ? () => {} : n.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: i } = t;
        function a() {
          if (e && e.mountedInstances) {
            let r = n.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(i(r, t));
          }
        }
        if (r) {
          var l;
          null == e || null == (l = e.mountedInstances) || l.add(t.children),
            a();
        }
        return (
          s(() => {
            var i;
            return (
              null == e ||
                null == (i = e.mountedInstances) ||
                i.add(t.children),
              () => {
                var i;
                null == e ||
                  null == (i = e.mountedInstances) ||
                  i.delete(t.children);
              }
            );
          }),
          s(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            )
          ),
          o(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    9791: function (t, e, i) {
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    2981: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = i(565);
      class r {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let s = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(t, e) {
        let i = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = s.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new r(),
                  i = new r(),
                  n = 0,
                  s = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = {
                    schedule: (t, r = !1, o = !1) => {
                      let l = o && s,
                        u = l ? e : i;
                      return (
                        r && a.add(t),
                        u.add(t) && l && s && (n = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      i.remove(t), a.delete(t);
                    },
                    process: (r) => {
                      if (s) {
                        o = !0;
                        return;
                      }
                      if (
                        ((s = !0),
                        ([e, i] = [i, e]),
                        i.clear(),
                        (n = e.order.length))
                      )
                        for (let i = 0; i < n; i++) {
                          let n = e.order[i];
                          a.has(n) && (l.schedule(n), t()), n(r);
                        }
                      (s = !1), o && ((o = !1), l.process(r));
                    },
                  };
                return l;
              })(() => (i = !0))),
              t
            ),
            {}
          ),
          u = (t) => {
            l[t].process(a);
          },
          h = () => {
            let r = n.c.useManualTiming ? a.timestamp : performance.now();
            (i = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(r - a.timestamp, 40), 1)),
              (a.timestamp = r),
              (a.isProcessing = !0),
              s.forEach(u),
              (a.isProcessing = !1),
              i && e && ((o = !1), t(h));
          },
          d = () => {
            (i = !0), (o = !0), a.isProcessing || t(h);
          };
        return {
          schedule: s.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || d(), n.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => s.forEach((e) => l[e].cancel(t)),
          state: a,
          steps: l,
        };
      }
    },
    6219: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
      });
      var n = i(9276);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    9993: function (t, e, i) {
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var r = i(565),
        s = i(6219);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    7147: function (t, e, i) {
      i.d(e, {
        E: function () {
          return ry;
        },
      });
      var n,
        r = i(7437),
        s = i(2265),
        o = i(9791);
      let a = (0, s.createContext)({}),
        l = (0, s.createContext)(null);
      var u = i(9033);
      let h = (0, s.createContext)({ strict: !1 }),
        d = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        c = "data-" + d("framerAppearId"),
        { schedule: p, cancel: f } = (0, i(2981).Z)(queueMicrotask, !1);
      function m(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let g = (0, s.createContext)({}),
        v = !1;
      function y() {
        window.HandoffComplete = !0;
      }
      function x(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function P(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      let w = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        b = ["initial", ...w];
      function S(t) {
        return P(t.animate) || b.some((e) => x(t[e]));
      }
      function T(t) {
        return !!(S(t) || t.variants);
      }
      function A(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let E = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        C = {};
      for (let t in E) C[t] = { isEnabled: (e) => E[t].some((t) => !!e[t]) };
      var V = i(7282);
      let M = (0, s.createContext)({}),
        R = Symbol.for("motionComponentSymbol"),
        D = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function j(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (D.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let k = {},
        L = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        F = new Set(L);
      function B(t, { layout: e, layoutId: i }) {
        return (
          F.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!k[t] || "opacity" === t))
        );
      }
      let O = (t) => !!(t && t.getVelocity),
        W = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        I = L.length;
      var $ = i(1534);
      let z = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var U = i(783),
        _ = i(5480);
      let N = { ...U.Rx, transform: Math.round },
        H = {
          borderWidth: _.px,
          borderTopWidth: _.px,
          borderRightWidth: _.px,
          borderBottomWidth: _.px,
          borderLeftWidth: _.px,
          borderRadius: _.px,
          radius: _.px,
          borderTopLeftRadius: _.px,
          borderTopRightRadius: _.px,
          borderBottomRightRadius: _.px,
          borderBottomLeftRadius: _.px,
          width: _.px,
          maxWidth: _.px,
          height: _.px,
          maxHeight: _.px,
          size: _.px,
          top: _.px,
          right: _.px,
          bottom: _.px,
          left: _.px,
          padding: _.px,
          paddingTop: _.px,
          paddingRight: _.px,
          paddingBottom: _.px,
          paddingLeft: _.px,
          margin: _.px,
          marginTop: _.px,
          marginRight: _.px,
          marginBottom: _.px,
          marginLeft: _.px,
          rotate: _.RW,
          rotateX: _.RW,
          rotateY: _.RW,
          rotateZ: _.RW,
          scale: U.bA,
          scaleX: U.bA,
          scaleY: U.bA,
          scaleZ: U.bA,
          skew: _.RW,
          skewX: _.RW,
          skewY: _.RW,
          distance: _.px,
          translateX: _.px,
          translateY: _.px,
          translateZ: _.px,
          x: _.px,
          y: _.px,
          z: _.px,
          perspective: _.px,
          transformPerspective: _.px,
          opacity: U.Fq,
          originX: _.$C,
          originY: _.$C,
          originZ: _.px,
          zIndex: N,
          backgroundPositionX: _.px,
          backgroundPositionY: _.px,
          fillOpacity: U.Fq,
          strokeOpacity: U.Fq,
          numOctaves: N,
        };
      function X(t, e, i, n) {
        let { style: r, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          h = !0;
        for (let t in e) {
          let i = e[t];
          if ((0, $.f)(t)) {
            s[t] = i;
            continue;
          }
          let n = H[t],
            d = z(i, n);
          if (F.has(t)) {
            if (((l = !0), (o[t] = d), !h)) continue;
            i !== (n.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = d)) : (r[t] = d);
        }
        if (
          (!e.transform &&
            (l || n
              ? (r.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  n,
                  r
                ) {
                  let s = "";
                  for (let e = 0; e < I; e++) {
                    let i = L[e];
                    if (void 0 !== t[i]) {
                      let e = W[i] || i;
                      s += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    r ? (s = r(t, n ? "" : s)) : i && n && (s = "none"),
                    s
                  );
                })(t.transform, i, h, n))
              : r.transform && (r.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          r.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let Y = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function K(t, e, i) {
        for (let n in e) O(e[n]) || B(n, i) || (t[n] = e[n]);
      }
      let G = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function Z(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          G.has(t)
        );
      }
      let q = (t) => !Z(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (q = (t) => (t.startsWith("on") ? !Z(t) : n(t)));
      } catch (t) {}
      function J(t, e, i) {
        return "string" == typeof t ? t : _.px.transform(e + i * t);
      }
      let Q = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tt = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function te(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        d,
        c
      ) {
        if ((X(t, u, h, c), d)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: f, dimensions: m } = t;
        p.transform && (m && (f.transform = p.transform), delete p.transform),
          m &&
            (void 0 !== r || void 0 !== s || f.transform) &&
            (f.transformOrigin = (function (t, e, i) {
              let n = J(e, t.x, t.width),
                r = J(i, t.y, t.height);
              return `${n} ${r}`;
            })(m, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== i && (p.y = i),
          void 0 !== n && (p.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? Q : tt;
              t[s.offset] = _.px.transform(-n);
              let o = _.px.transform(e),
                a = _.px.transform(i);
              t[s.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let ti = () => ({ ...Y(), attrs: {} }),
        tn = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tr(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let ts = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function to(t, e, i, n) {
        for (let i in (tr(t, e, void 0, n), e.attrs))
          t.setAttribute(ts.has(i) ? i : d(i), e.attrs[i]);
      }
      function ta(t, e, i) {
        var n;
        let { style: r } = t,
          s = {};
        for (let o in r)
          (O(r[o]) ||
            (e.style && O(e.style[o])) ||
            B(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return s;
      }
      function tl(t, e, i) {
        let n = ta(t, e, i);
        for (let i in t)
          (O(t[i]) || O(e[i])) &&
            (n[
              -1 !== L.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      function tu(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function th(t, e, i, n) {
        if ("function" == typeof e) {
          let [r, s] = tu(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [r, s] = tu(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        return e;
      }
      var td = i(458);
      let tc = (t) => Array.isArray(t),
        tp = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tf = (t) => (tc(t) ? t[t.length - 1] || 0 : t);
      function tm(t) {
        let e = O(t) ? t.get() : t;
        return tp(e) ? e.toValue() : e;
      }
      let tg = (t) => (e, i) => {
        let n = (0, s.useContext)(a),
          r = (0, s.useContext)(l),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: i,
              },
              n,
              r,
              s
            ) {
              let o = {
                latestValues: (function (t, e, i, n) {
                  let r = {},
                    s = n(t, {});
                  for (let t in s) r[t] = tm(s[t]);
                  let { initial: o, animate: a } = t,
                    l = S(t),
                    u = T(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!i && !1 === i.initial,
                    d = (h = h || !1 === o) ? a : o;
                  return (
                    d &&
                      "boolean" != typeof d &&
                      !P(d) &&
                      (Array.isArray(d) ? d : [d]).forEach((e) => {
                        let i = th(t, e);
                        if (!i) return;
                        let { transitionEnd: n, transition: s, ...o } = i;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (r[t] = e);
                        }
                        for (let t in n) r[t] = n[t];
                      }),
                    r
                  );
                })(n, r, s, t),
                renderState: e(),
              };
              return i && (o.mount = (t) => i(n, t, o)), o;
            })(t, e, n, r);
        return i ? o() : (0, td.h)(o);
      };
      var tv = i(6219);
      let ty = {
          useVisualState: tg({
            scrapeMotionValuesFromProps: tl,
            createRenderState: ti,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              tv.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tv.Wi.render(() => {
                  te(
                    i,
                    n,
                    { enableHardwareAcceleration: !1 },
                    tn(e.tagName),
                    t.transformTemplate
                  ),
                    to(e, i);
                });
            },
          }),
        },
        tx = {
          useVisualState: tg({
            scrapeMotionValuesFromProps: ta,
            createRenderState: Y,
          }),
        };
      function tP(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let tw = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tb(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let tS = (t) => (e) => tw(e) && t(e, tb(e));
      function tT(t, e, i, n) {
        return tP(t, e, tS(i), n);
      }
      var tA = i(9654);
      function tE(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tC = tE("dragHorizontal"),
        tV = tE("dragVertical");
      function tM(t) {
        let e = !1;
        if ("y" === t) e = tV();
        else if ("x" === t) e = tC();
        else {
          let t = tC(),
            i = tV();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tR() {
        let t = tM(!0);
        return !t || (t(), !1);
      }
      class tD {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function tj(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return tT(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (n, r) => {
            if ("touch" === n.pointerType || tR()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = s[i];
            o && tv.Wi.postRender(() => o(n, r));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class tk extends tD {
        mount() {
          this.unmount = (0, tA.z)(tj(this.node, !0), tj(this.node, !1));
        }
        unmount() {}
      }
      class tL extends tD {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tA.z)(
            tP(this.node.current, "focus", () => this.onFocus()),
            tP(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let tF = (t, e) => !!e && (t === e || tF(t, e.parentElement));
      var tB = i(9276);
      function tO(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tb(i));
      }
      class tW extends tD {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tB.Z),
            (this.removeEndListeners = tB.Z),
            (this.removeAccessibleListeners = tB.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = tT(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: n,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      s = r || tF(this.node.current, t.target) ? i : n;
                    s && tv.Wi.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                r = tT(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, tA.z)(n, r)),
                this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tP(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tP(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          tO("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && tv.Wi.postRender(() => i(t, e));
                          });
                      }
                    )),
                    tO("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tP(this.node.current, "blur", () => {
                  this.isPressing &&
                    tO("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, tA.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && tv.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tR()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && tv.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = tT(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = tP(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, tA.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let tI = new WeakMap(),
        t$ = new WeakMap(),
        tz = (t) => {
          let e = tI.get(t.target);
          e && e(t);
        },
        tU = (t) => {
          t.forEach(tz);
        },
        t_ = { some: 0, all: 1 };
      class tN extends tD {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : t_[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              t$.has(i) || t$.set(i, {});
              let n = t$.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(tU, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              tI.set(t, i),
              n.observe(t),
              () => {
                tI.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function tH(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function tX(t, e, i) {
        let n = t.getProps();
        return th(n, e, void 0 !== i ? i : n.custom, t);
      }
      let tY = (t) => 1e3 * t,
        tK = (t) => t / 1e3,
        tG = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        tZ = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        tq = { type: "keyframes", duration: 0.8 },
        tJ = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        tQ = (t, { keyframes: e }) =>
          e.length > 2
            ? tq
            : F.has(t)
            ? t.startsWith("scale")
              ? tZ(e[1])
              : tG
            : tJ;
      function t0(t, e) {
        return t[e] || t.default || t;
      }
      var t1 = i(565);
      let t2 = { current: !1 },
        t5 = (t) => null !== t;
      function t3(t, { repeat: e, repeatType: i = "loop" }, n) {
        let r = t.filter(t5),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      var t9 = i(9993);
      let t4 = (t) => /^0[^.\s]+$/u.test(t);
      var t6 = i(9047);
      let t8 = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        t7 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        et = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        ee = (t) => t === U.Rx || t === _.px,
        ei = (t, e) => parseFloat(t.split(", ")[e]),
        en =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return ei(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? ei(e[1], t) : 0;
            }
          },
        er = new Set(["x", "y", "z"]),
        es = L.filter((t) => !er.has(t)),
        eo = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: en(4, 13),
          y: en(5, 14),
        };
      (eo.translateX = eo.x), (eo.translateY = eo.y);
      let ea = (t) => (e) => e.test(t),
        el = [
          U.Rx,
          _.px,
          _.aQ,
          _.RW,
          _.vw,
          _.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        eu = (t) => el.find(ea(t)),
        eh = new Set(),
        ed = !1,
        ec = !1;
      function ep() {
        if (ec) {
          let t = Array.from(eh).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                es.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (ec = !1), (ed = !1), eh.forEach((t) => t.complete()), eh.clear();
      }
      function ef() {
        eh.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (ec = !0);
        });
      }
      class em {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (eh.add(this),
                ed || ((ed = !0), tv.Wi.read(ef), tv.Wi.resolveKeyframes(ep)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            eh.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), eh.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      var eg = i(3646),
        ev = i(7292);
      let ey = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ex(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(ev.KP) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = ey.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let eP = /\b([a-z-]*)\(.*?\)/gu,
        ew = {
          ...eg.P,
          getAnimatableNone: (t) => {
            let e = t.match(eP);
            return e ? e.map(ex).join(" ") : t;
          },
        };
      var eb = i(146);
      let eS = {
          ...H,
          color: eb.$,
          backgroundColor: eb.$,
          outlineColor: eb.$,
          fill: eb.$,
          stroke: eb.$,
          borderColor: eb.$,
          borderTopColor: eb.$,
          borderRightColor: eb.$,
          borderBottomColor: eb.$,
          borderLeftColor: eb.$,
          filter: ew,
          WebkitFilter: ew,
        },
        eT = (t) => eS[t];
      function eA(t, e) {
        let i = eT(t);
        return (
          i !== ew && (i = eg.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let eE = new Set(["auto", "none", "0"]);
      class eC extends em {
        constructor(t, e, i, n) {
          super(t, e, i, n, null == n ? void 0 : n.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, $.t)(n))) {
              let r = (function t(e, i, n = 1) {
                (0, t6.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (t) {
                  let e = t7.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!r) return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return t8(t) ? parseFloat(t) : t;
                }
                return (0, $.t)(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !et.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = eu(n),
            o = eu(r);
          if (s !== o) {
            if (ee(s) && ee(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || t4(n)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !eE.has(e) &&
                  (0, eg.V)(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = eA(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eo[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = eo[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function eV(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let eM = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (eg.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class eR {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (ef(), ep()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          this.hasAttemptedResolve = !0;
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = eM(r, e),
                a = eM(s, e);
              return (
                (0, t6.K)(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && n))
              );
            })(t, i, n, r)
          ) {
            if (t2.current || !s) {
              null == a || a(t3(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var eD = i(3476);
      function ej(t, e, i) {
        let n = Math.max(e - 5, 0);
        return (0, eD.R)(i - t(n), e - n);
      }
      var ek = i(1506);
      function eL(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let eF = ["duration", "bounce"],
        eB = ["stiffness", "damping", "mass"];
      function eO(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function eW({ keyframes: t, restDelta: e, restSpeed: i, ...n }) {
        let r;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: h,
            duration: d,
            velocity: c,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!eO(t, eB) && eO(t, eF)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let r, s;
                (0, t6.K)(
                  t <= tY(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = (0, ek.u)(0.05, 1, o)),
                  (t = (0, ek.u)(0.01, 10, tK(t))),
                  o < 1
                    ? ((r = (e) => {
                        let n = e * o,
                          r = n * t;
                        return 0.001 - ((n - i) / eL(e, o)) * Math.exp(-r);
                      }),
                      (s = (e) => {
                        let n = e * o * t,
                          s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = eL(Math.pow(e, 2), o);
                        return (
                          ((n * i + i - s) *
                            Math.exp(-n) *
                            (-r(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((r = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let a = (function (t, e, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                  return n;
                })(r, s, 5 / t);
                if (((t = tY(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...n, velocity: -tK(n.velocity || 0) }),
          f = c || 0,
          m = u / (2 * Math.sqrt(l * h)),
          g = o - s,
          v = tK(Math.sqrt(l / h)),
          y = 5 > Math.abs(g);
        if ((i || (i = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5), m < 1)) {
          let t = eL(v, m);
          r = (e) =>
            o -
            Math.exp(-m * v * e) *
              (((f + m * v * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === m)
          r = (t) => o - Math.exp(-v * t) * (g + (f + v * g) * t);
        else {
          let t = v * Math.sqrt(m * m - 1);
          r = (e) => {
            let i = Math.exp(-m * v * e),
              n = Math.min(t * e, 300);
            return (
              o -
              (i * ((f + m * v * g) * Math.sinh(n) + t * g * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let n = r(t);
            if (p) a.done = t >= d;
            else {
              let s = f;
              0 !== t && (s = m < 1 ? ej(r, t, n) : 0);
              let l = Math.abs(s) <= i,
                u = Math.abs(o - n) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : n), a;
          },
        };
      }
      function eI({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, c;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          v = i * e,
          y = p + v,
          x = void 0 === o ? y : o(y);
        x !== y && (v = x - p);
        let P = (t) => -v * Math.exp(-t / n),
          w = (t) => x + P(t),
          b = (t) => {
            let e = P(t),
              i = w(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : i);
          },
          S = (t) => {
            m(f.value) &&
              ((d = t),
              (c = eW({
                keyframes: [f.value, g(f.value)],
                velocity: ej(w, t, f.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), b(t), S(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || b(t), f);
            },
          }
        );
      }
      let e$ = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function ez(t, e, i, n) {
        if (t === e && i === n) return tB.Z;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do
              (s = e$((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : e$(r(t), e, n));
      }
      let eU = ez(0.42, 0, 1, 1),
        e_ = ez(0, 0, 0.58, 1),
        eN = ez(0.42, 0, 0.58, 1),
        eH = (t) => Array.isArray(t) && "number" != typeof t[0],
        eX = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        eY = (t) => (e) => 1 - t(1 - e),
        eK = (t) => 1 - Math.sin(Math.acos(t)),
        eG = eY(eK),
        eZ = eX(eK),
        eq = ez(0.33, 1.53, 0.69, 0.99),
        eJ = eY(eq),
        eQ = eX(eJ),
        e0 = {
          linear: tB.Z,
          easeIn: eU,
          easeInOut: eN,
          easeOut: e_,
          circIn: eK,
          circInOut: eZ,
          circOut: eG,
          backIn: eJ,
          backInOut: eQ,
          backOut: eq,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * eJ(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        e1 = (t) => {
          if (Array.isArray(t)) {
            (0, t6.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return ez(e, i, n, r);
          }
          return "string" == typeof t
            ? ((0, t6.k)(void 0 !== e0[t], `Invalid easing type '${t}'`), e0[t])
            : t;
        };
      var e2 = i(2548),
        e5 = i(839);
      function e3({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = eH(n) ? n.map(e1) : e1(n),
          s = { done: !1, value: e[0] },
          o = (i && i.length === e.length ? i : (0, e5.Y)(e)).map((e) => e * t),
          a = (0, e2.s)(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || eN).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      var e9 = i(5389);
      let e4 = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => tv.Wi.update(e, !0),
            stop: () => (0, tv.Pn)(e),
            now: () =>
              tv.frameData.isProcessing ? tv.frameData.timestamp : t9.X.now(),
          };
        },
        e6 = { decay: eI, inertia: eI, tween: e3, keyframes: e3, spring: eW },
        e8 = (t) => t / 100;
      class e7 extends eR {
        constructor({ KeyframeResolver: t = em, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let { name: i, motionValue: n, keyframes: r } = this.options,
            s = (t, e) => this.onKeyframesResolved(t, e);
          i && n && n.owner
            ? (this.resolver = n.owner.resolveKeyframes(r, s, i, n))
            : (this.resolver = new t(r, s, i, n)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = e6[n] || e3;
          l !== e3 &&
            "number" != typeof t[0] &&
            ((e = (0, tA.z)(e8, (0, e9.C)(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            d = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: f,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            v = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            x = r;
          if (c) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), f && (i -= f / h))
                  : "mirror" === p && (x = s)),
              (y = (0, ek.u)(0, 1, i) * h);
          }
          let P = v ? { done: !1, value: a[0] } : x.next(y);
          o && (P.value = o(P.value));
          let { done: w } = P;
          v ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let b =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            b && void 0 !== n && (P.value = t3(a, this.options, n)),
            m && m(P.value),
            b && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? tK(t.calculatedDuration) : 0;
        }
        get time() {
          return tK(this.currentTime);
        }
        set time(t) {
          (t = tY(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = tK(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = e4, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let it = (t) => Array.isArray(t) && "number" == typeof t[0],
        ie = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        ii = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: ie([0, 0.65, 0.55, 1]),
          circOut: ie([0.55, 0, 1, 0.45]),
          backIn: ie([0.31, 0.01, 0.66, -0.59]),
          backOut: ie([0.33, 1.53, 0.69, 0.99]),
        };
      function ir(t) {
        return is(t) || ii.easeOut;
      }
      function is(t) {
        if (t) return it(t) ? ie(t) : Array.isArray(t) ? t.map(ir) : ii[t];
      }
      let io = eV(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        ia = new Set(["opacity", "clipPath", "filter", "transform"]);
      class il extends eR {
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, keyframes: n } = this.options;
          (this.resolver = new eC(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (n = this.options).type ||
            "backgroundColor" === n.name ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in ii) ||
                it(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(n.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                ...l
              } = this.options,
              u = (function (t, e) {
                let i = new e7({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, l);
            1 === (t = u.keyframes).length && (t[1] = t[0]),
              (r = u.duration),
              (s = u.times),
              (o = u.ease),
              (a = "keyframes");
          }
          let h = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = is(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (h.startTime = t9.X.now()),
            this.pendingTimeline
              ? ((h.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(t3(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return tK(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return tK(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = tY(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return tB.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return tB.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: r,
            ease: s,
            times: o,
          } = t;
          if ("idle" !== e.playState && "finished" !== e.playState) {
            if (this.time) {
              let {
                  motionValue: t,
                  onUpdate: e,
                  onComplete: a,
                  ...l
                } = this.options,
                u = new e7({
                  ...l,
                  keyframes: i,
                  duration: n,
                  type: r,
                  ease: s,
                  times: o,
                  isGenerator: !0,
                }),
                h = tY(this.time);
              t.setWithVelocity(u.sample(h - 10).value, u.sample(h).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            io() &&
            i &&
            ia.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let iu = eV(() => void 0 !== window.ScrollTimeline);
      class ih {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!iu() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let n = () => {
                    let { currentTime: n } = e,
                      r = (null === n ? 0 : n.value) / 100;
                    i !== r && t(r), (i = r);
                  };
                  return tv.Wi.update(n, !0), () => (0, tv.Pn)(n);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let id =
        (t, e, i, n = {}, r, s) =>
        (o) => {
          let a = t0(n, t) || {},
            l = a.delay || n.delay || 0,
            { elapsed: u = 0 } = n;
          u -= tY(l);
          let h = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: (t) => {
              e.set(t), a.onUpdate && a.onUpdate(t);
            },
            onComplete: () => {
              o(), a.onComplete && a.onComplete();
            },
            name: t,
            motionValue: e,
            element: s ? void 0 : r,
          };
          !(function ({
            when: t,
            delay: e,
            delayChildren: i,
            staggerChildren: n,
            staggerDirection: r,
            repeat: s,
            repeatType: o,
            repeatDelay: a,
            from: l,
            elapsed: u,
            ...h
          }) {
            return !!Object.keys(h).length;
          })(a) && (h = { ...h, ...tQ(t, h) }),
            h.duration && (h.duration = tY(h.duration)),
            h.repeatDelay && (h.repeatDelay = tY(h.repeatDelay)),
            void 0 !== h.from && (h.keyframes[0] = h.from);
          let d = !1;
          if (
            ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
              ((h.duration = 0), 0 !== h.delay || (d = !0)),
            (t2.current || t1.c.skipAnimations) &&
              ((d = !0), (h.duration = 0), (h.delay = 0)),
            d && !s && void 0 !== e.get())
          ) {
            let t = t3(h.keyframes, a);
            if (void 0 !== t)
              return (
                tv.Wi.update(() => {
                  h.onUpdate(t), h.onComplete();
                }),
                new ih([])
              );
          }
          return !s && il.supports(h) ? new il(h) : new e7(h);
        };
      function ic(t) {
        return !!(O(t) && t.add);
      }
      var ip = i(804);
      function im(t) {
        return t.getProps()[c];
      }
      function ig(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var s;
        let {
            transition: o = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = e,
          u = t.getValue("willChange");
        n && (o = n);
        let h = [],
          d = r && t.animationState && t.animationState.getState()[r];
        for (let e in l) {
          let n = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            r = l[e];
          if (
            void 0 === r ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(d, e))
          )
            continue;
          let a = { delay: i, elapsed: 0, ...t0(o || {}, e) },
            c = !1;
          if (window.HandoffAppearAnimations) {
            let i = im(t);
            if (i) {
              let t = window.HandoffAppearAnimations(i, e, n, tv.Wi);
              null !== t && ((a.elapsed = t), (c = !0));
            }
          }
          n.start(
            id(
              e,
              n,
              r,
              t.shouldReduceMotion && F.has(e) ? { type: !1 } : a,
              t,
              c
            )
          );
          let p = n.animation;
          p && (ic(u) && (u.add(e), p.then(() => u.remove(e))), h.push(p));
        }
        return (
          a &&
            Promise.all(h).then(() => {
              tv.Wi.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = tX(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = tf(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, ip.BX)(i));
                    }
                  })(t, a);
              });
            }),
          h
        );
      }
      function iv(t, e, i = {}) {
        var n;
        let r = tX(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r ? () => Promise.all(ig(t, r, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(iy)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              iv(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function iy(t, e) {
        return t.sortNodePosition(e);
      }
      let ix = [...w].reverse(),
        iP = w.length;
      function iw(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function ib() {
        return {
          animate: iw(!0),
          whileInView: iw(),
          whileHover: iw(),
          whileTap: iw(),
          whileDrag: iw(),
          whileFocus: iw(),
          exit: iw(),
        };
      }
      class iS extends tD {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => iv(t, e, i)));
                          else if ("string" == typeof e) n = iv(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? tX(t, e, i.custom) : e;
                            n = Promise.all(ig(t, r, i));
                          }
                          return n.then(() => {
                            tv.Wi.postRender(() => {
                              t.notify("AnimationComplete", e);
                            });
                          });
                        })(t, e, i)
                      )
                    ),
                  i = ib(),
                  n = !0,
                  r = (e) => (i, n) => {
                    var r;
                    let s = tX(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    d = 1 / 0;
                  for (let e = 0; e < iP; e++) {
                    var c;
                    let p = ix[e],
                      f = i[p],
                      m = void 0 !== o[p] ? o[p] : a[p],
                      g = x(m),
                      v = p === s ? f.isActive : null;
                    !1 === v && (d = e);
                    let y = m === a[p] && m !== o[p] && g;
                    if (
                      (y && n && t.manuallyAnimateOnMount && (y = !1),
                      (f.protectedKeys = { ...h }),
                      (!f.isActive && null === v) ||
                        (!m && !f.prevProp) ||
                        P(m) ||
                        "boolean" == typeof m)
                    )
                      continue;
                    let w =
                        ((c = f.prevProp),
                        ("string" == typeof m
                          ? m !== c
                          : !!Array.isArray(m) && !tH(m, c)) ||
                          (p === s && f.isActive && !y && g) ||
                          (e > d && g)),
                      b = !1,
                      S = Array.isArray(m) ? m : [m],
                      T = S.reduce(r(p), {});
                    !1 === v && (T = {});
                    let { prevResolvedValues: A = {} } = f,
                      E = { ...A, ...T },
                      C = (e) => {
                        (w = !0),
                          u.has(e) && ((b = !0), u.delete(e)),
                          (f.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in E) {
                      let e = T[t],
                        i = A[t];
                      if (!h.hasOwnProperty(t))
                        (tc(e) && tc(i) ? tH(e, i) : e === i)
                          ? void 0 !== e && u.has(t)
                            ? C(t)
                            : (f.protectedKeys[t] = !0)
                          : null != e
                          ? C(t)
                          : u.add(t);
                    }
                    (f.prevProp = m),
                      (f.prevResolvedValues = T),
                      f.isActive && (h = { ...h, ...T }),
                      n && t.blockInitialAnimation && (w = !1),
                      w &&
                        (!y || b) &&
                        l.push(
                          ...S.map((t) => ({
                            animation: t,
                            options: { type: p },
                          }))
                        );
                  }
                  if (u.size) {
                    let e = {};
                    u.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      l.push({ animation: e });
                  }
                  let p = !!l.length;
                  return (
                    n &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (n = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let o = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = ib()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          P(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let iT = 0;
      class iA extends tD {
        constructor() {
          super(...arguments), (this.id = iT++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let iE = (t, e) => Math.abs(t - e);
      class iC {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = iR(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(iE(t.x, e.x) ** 2 + iE(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = tv.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iV(e, this.transformPagePoint)),
                tv.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = iR(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : iV(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !tw(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = iV(tb(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = tv.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, iR(s, this.history)),
            (this.removeListeners = (0, tA.z)(
              tT(this.contextWindow, "pointermove", this.handlePointerMove),
              tT(this.contextWindow, "pointerup", this.handlePointerUp),
              tT(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tv.Pn)(this.updatePoint);
        }
      }
      function iV(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iM(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function iR({ point: t }, e) {
        return {
          point: t,
          delta: iM(t, iD(e)),
          offset: iM(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = iD(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > tY(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = tK(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function iD(t) {
        return t[t.length - 1];
      }
      var ij = i(3217),
        ik = i(5004);
      function iL(t) {
        return t.max - t.min;
      }
      function iF(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function iB(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, ik.t)(e.min, e.max, t.origin)),
          (t.scale = iL(i) / iL(e)),
          (iF(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, ik.t)(i.min, i.max, t.origin) - t.originPoint),
          (iF(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function iO(t, e, i, n) {
        iB(t.x, e.x, i.x, n ? n.originX : void 0),
          iB(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function iW(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iL(e));
      }
      function iI(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iL(e));
      }
      function i$(t, e, i) {
        iI(t.x, e.x, i.x), iI(t.y, e.y, i.y);
      }
      function iz(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function iU(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function i_(t, e, i) {
        return { min: iN(t, e), max: iN(t, i) };
      }
      function iN(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let iH = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        iX = () => ({ x: iH(), y: iH() }),
        iY = () => ({ min: 0, max: 0 }),
        iK = () => ({ x: iY(), y: iY() });
      function iG(t) {
        return [t("x"), t("y")];
      }
      function iZ({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function iq(t) {
        return void 0 === t || 1 === t;
      }
      function iJ({ scale: t, scaleX: e, scaleY: i }) {
        return !iq(t) || !iq(e) || !iq(i);
      }
      function iQ(t) {
        return (
          iJ(t) ||
          i0(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function i0(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function i1(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function i2(t, e = 0, i = 1, n, r) {
        (t.min = i1(t.min, e, i, n, r)), (t.max = i1(t.max, e, i, n, r));
      }
      function i5(t, { x: e, y: i }) {
        i2(t.x, e.translate, e.scale, e.originPoint),
          i2(t.y, i.translate, i.scale, i.originPoint);
      }
      function i3(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function i9(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function i4(t, e, [i, n, r]) {
        let s = void 0 !== e[r] ? e[r] : 0.5,
          o = (0, ik.t)(t.min, t.max, s);
        i2(t, e[i], e[n], o, e.scale);
      }
      let i6 = ["x", "scaleX", "originX"],
        i8 = ["y", "scaleY", "originY"];
      function i7(t, e) {
        i4(t.x, e, i6), i4(t.y, e, i8);
      }
      function nt(t, e) {
        return iZ(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let ne = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        ni = new WeakMap();
      class nn {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = iK()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new iC(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tb(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = tM(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  iG((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (_.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = iL(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && tv.Wi.postRender(() => r(t, e));
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                iG((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: ne(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && tv.Wi.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !nr(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, ik.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, ik.t)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && m(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: iz(t.x, i, r), y: iz(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: i_(t, "left", "right"), y: i_(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iG((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !m(e)) return !1;
          let n = e.current;
          (0, t6.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = nt(t, i),
                { scroll: r } = e;
              return r && (i9(n.x, r.offset.x), i9(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: iU((t = r.layout.layoutBox).x, s.x), y: iU(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = iZ(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            iG((o) => {
              if (!nr(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(id(t, i, 0, e, this.visualElement));
        }
        stopAnimation() {
          iG((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          iG((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          iG((e) => {
            let { drag: i } = this.getProps();
            if (!nr(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, ik.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!m(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          iG((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = iL(t),
                  r = iL(e);
                return (
                  r > n
                    ? (i = (0, ij.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, ij.Y)(t.min, t.max - r, e.min)),
                  (0, ek.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            iG((e) => {
              if (!nr(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, ik.t)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ni.set(this.visualElement, this);
          let t = tT(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              m(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            tv.Wi.read(e);
          let r = tP(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iG((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function nr(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class ns extends tD {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tB.Z),
            (this.removeListeners = tB.Z),
            (this.controls = new nn(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tB.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let no = (t) => (e, i) => {
        t && tv.Wi.postRender(() => t(e, i));
      };
      class na extends tD {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tB.Z);
        }
        onPointerDown(t) {
          this.session = new iC(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ne(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: no(t),
            onStart: no(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && tv.Wi.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = tT(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let nl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function nu(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let nh = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!_.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = nu(t, e.target.x),
            n = nu(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      class nd extends s.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(k, np),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nl.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    tv.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            p.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nc(t) {
        let [e, i] = (function () {
            let t = (0, s.useContext)(l);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, s.useId)();
            return (
              (0, s.useEffect)(() => n(r), []),
              !e && i ? [!1, () => i && i(r)] : [!0]
            );
          })(),
          n = (0, s.useContext)(M);
        return (0, r.jsx)(nd, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, s.useContext)(g),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let np = {
        borderRadius: {
          ...nh,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: nh,
        borderTopRightRadius: nh,
        borderBottomLeftRadius: nh,
        borderBottomRightRadius: nh,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = eg.P.parse(t);
            if (n.length > 5) return t;
            let r = eg.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, ik.t)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var nf = i(2428);
      let nm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ng = nm.length,
        nv = (t) => ("string" == typeof t ? parseFloat(t) : t),
        ny = (t) => "number" == typeof t || _.px.test(t);
      function nx(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nP = nb(0, 0.5, eG),
        nw = nb(0.5, 0.95, tB.Z);
      function nb(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, ij.Y)(t, e, n)));
      }
      function nS(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nT(t, e) {
        nS(t.x, e.x), nS(t.y, e.y);
      }
      function nA(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function nE(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (_.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, ik.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, ik.t)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = nA(t.min, e, i, a, r)),
            (t.max = nA(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let nC = ["x", "scaleX", "originX"],
        nV = ["y", "scaleY", "originY"];
      function nM(t, e, i, n) {
        nE(t.x, e, nC, i ? i.x : void 0, n ? n.x : void 0),
          nE(t.y, e, nV, i ? i.y : void 0, n ? n.y : void 0);
      }
      function nR(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nD(t) {
        return nR(t.x) && nR(t.y);
      }
      function nj(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function nk(t) {
        return iL(t.x) / iL(t.y);
      }
      var nL = i(8746);
      class nF {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, nL.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, nL.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function nB(t, e, i) {
        let n = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y,
          o = (null == i ? void 0 : i.z) || 0;
        if (
          ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
          (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let {
            transformPerspective: t,
            rotate: e,
            rotateX: r,
            rotateY: s,
            skewX: o,
            skewY: a,
          } = i;
          t && (n = `perspective(${t}px) ${n}`),
            e && (n += `rotate(${e}deg) `),
            r && (n += `rotateX(${r}deg) `),
            s && (n += `rotateY(${s}deg) `),
            o && (n += `skewX(${o}deg) `),
            a && (n += `skewY(${a}deg) `);
        }
        let a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none";
      }
      let nO = (t, e) => t.depth - e.depth;
      class nW {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, nL.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, nL.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nO),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let nI = ["", "X", "Y", "Z"],
        n$ = { visibility: "hidden" },
        nz = 0,
        nU = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function n_(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function nN({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = nz++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (nU.totalNodes =
                    nU.resolvedTargetDeltas =
                    nU.recalculatedProjection =
                      0),
                  this.nodes.forEach(nY),
                  this.nodes.forEach(n0),
                  this.nodes.forEach(n1),
                  this.nodes.forEach(nK),
                  window.MotionDebug && window.MotionDebug.record(nU);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nW());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new nf.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = t9.X.now(),
                      n = ({ timestamp: e }) => {
                        let r = e - i;
                        r >= 250 && ((0, tv.Pn)(n), t(r - 250));
                      };
                    return tv.Wi.read(n, !0), () => (0, tv.Pn)(n);
                  })(n, 0)),
                  nl.hasAnimatedSinceResize &&
                    ((nl.hasAnimatedSinceResize = !1), this.nodes.forEach(nQ));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        n6,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !nj(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...t0(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || nQ(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tv.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(n2),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.HandoffCancelAllAnimations &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return !1;
                  let { visualElement: i } = e.options;
                  return (
                    !!i &&
                    (!!im(i) ||
                      (!!e.parent &&
                        !e.parent.hasCheckedOptimisedAppear &&
                        t(e.parent)))
                  );
                })(this) &&
                window.HandoffCancelAllAnimations(),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nZ);
              return;
            }
            this.isUpdating || this.nodes.forEach(nq),
              (this.isUpdating = !1),
              this.nodes.forEach(nJ),
              this.nodes.forEach(nH),
              this.nodes.forEach(nX),
              this.clearAllSnapshots();
            let t = t9.X.now();
            (tv.frameData.delta = (0, ek.u)(
              0,
              1e3 / 60,
              t - tv.frameData.timestamp
            )),
              (tv.frameData.timestamp = t),
              (tv.frameData.isProcessing = !0),
              tv.S6.update.process(tv.frameData),
              tv.S6.preRender.process(tv.frameData),
              tv.S6.render.process(tv.frameData),
              (tv.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), p.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nG), this.sharedNodes.forEach(n5);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tv.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tv.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = iK()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nD(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || iQ(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              rt((e = n).x),
              rt(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return iK();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (i9(e.x, i.offset.x), i9(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = iK();
            nT(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              if (n !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  nT(e, t);
                  let { scroll: i } = this.root;
                  i && (i9(e.x, -i.offset.x), i9(e.y, -i.offset.y));
                }
                i9(e.x, r.offset.x), i9(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = iK();
            nT(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                i7(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                iQ(n.latestValues) && i7(i, n.latestValues);
            }
            return iQ(this.latestValues) && i7(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = iK();
            nT(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !iQ(i.latestValues)) continue;
              iJ(i.latestValues) && i.updateSnapshot();
              let n = iK();
              nT(n, i.measurePageBox()),
                nM(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return iQ(this.latestValues) && nM(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tv.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tv.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = iK()),
                    (this.relativeTargetOrigin = iK()),
                    i$(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nT(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = iK()), (this.targetWithTransforms = iK())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      iW(i.x, n.x, r.x),
                      iW(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nT(this.target, this.layout.layoutBox),
                      i5(this.target, this.targetDelta))
                    : nT(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = iK()),
                      (this.relativeTargetOrigin = iK()),
                      i$(this.relativeTargetOrigin, this.target, t.target),
                      nT(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nU.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              iJ(this.parent.latestValues) ||
              i0(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === tv.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            nT(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let o = r.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      i7(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), i5(t, s)),
                    n && iQ(r.latestValues) && i7(t, r.latestValues));
                }
                (e.x = i3(e.x)), (e.y = i3(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = iK()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = iX()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = iX()),
              (this.projectionDeltaWithTransform = iX()));
            let u = this.projectionTransform;
            iO(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = nB(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nU.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = iX();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = iK(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(n4)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (n3(o.x, t.x, n),
                  n3(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, f;
                  i$(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    n9(p.x, f.x, a.x, n),
                    n9(p.y, f.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      u.x.min === c.x.min &&
                        u.x.max === c.x.max &&
                        u.y.min === c.y.min &&
                        u.y.max === c.y.max) &&
                      (this.isProjectionDirty = !1),
                    i || (i = iK()),
                    nT(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, ik.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          nP(n)
                        )),
                        (t.opacityExit = (0, ik.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          nw(n)
                        )))
                      : s &&
                        (t.opacity = (0, ik.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < ng; r++) {
                      let s = `border${nm[r]}Radius`,
                        o = nx(e, s),
                        a = nx(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || ny(o) === ny(a)
                          ? ((t[s] = Math.max((0, ik.t)(nv(o), nv(a), n), 0)),
                            (_.aQ.test(a) || _.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, ik.t)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tv.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tv.Wi.update(() => {
                (nl.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = O(0) ? 0 : (0, ip.BX)(0);
                    return n.start(id("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                re(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || iK();
                let e = iL(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = iL(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              nT(e, i),
                i7(e, r),
                iO(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nF()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && n_("z", t, n, this.animationValues);
            for (let e = 0; e < nI.length; e++)
              n_(`rotate${nI[e]}`, t, n, this.animationValues),
                n_(`skew${nI[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return n$;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  tm(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tm(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !iQ(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = nB(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            k)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = k[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? tm(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nZ),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nH(t) {
        t.updateLayout();
      }
      function nX(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? iG((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = iL(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : re(r, i.layoutBox, e) &&
              iG((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = iL(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = iX();
          iO(o, e, i.layoutBox);
          let a = iX();
          s
            ? iO(a, t.applyTransform(n, !0), i.measuredBox)
            : iO(a, e, i.layoutBox);
          let l = !nD(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = iK();
                i$(o, i.layoutBox, r.layoutBox);
                let a = iK();
                i$(a, e, s.layoutBox),
                  nj(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nY(t) {
        nU.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nK(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nG(t) {
        t.clearSnapshot();
      }
      function nZ(t) {
        t.clearMeasurements();
      }
      function nq(t) {
        t.isLayoutDirty = !1;
      }
      function nJ(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nQ(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function n0(t) {
        t.resolveTargetDelta();
      }
      function n1(t) {
        t.calcProjection();
      }
      function n2(t) {
        t.resetSkewAndRotation();
      }
      function n5(t) {
        t.removeLeadSnapshot();
      }
      function n3(t, e, i) {
        (t.translate = (0, ik.t)(e.translate, 0, i)),
          (t.scale = (0, ik.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function n9(t, e, i, n) {
        (t.min = (0, ik.t)(e.min, i.min, n)),
          (t.max = (0, ik.t)(e.max, i.max, n));
      }
      function n4(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let n6 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        n8 = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        n7 = n8("applewebkit/") && !n8("chrome/") ? Math.round : tB.Z;
      function rt(t) {
        (t.min = n7(t.min)), (t.max = n7(t.max));
      }
      function re(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !iF(nk(e), nk(i), 0.2))
        );
      }
      let ri = nN({
          attachResizeListener: (t, e) => tP(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        rn = { current: void 0 },
        rr = nN({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!rn.current) {
              let t = new ri({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (rn.current = t);
            }
            return rn.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        rs = { current: null },
        ro = { current: !1 },
        ra = new WeakMap(),
        rl = [...el, eb.$, eg.P],
        ru = (t) => rl.find(ea(t)),
        rh = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        rd = b.length;
      class rc {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.resolveKeyframes = (t, e, i, n) =>
            new this.KeyframeResolver(t, e, i, n, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = em),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tv.Wi.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = S(e)),
            (this.isVariantNode = T(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && O(e) && (e.set(a[t], !1), ic(u) && u.add(t));
          }
        }
        mount(t) {
          (this.current = t),
            ra.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            ro.current ||
              (function () {
                if (((ro.current = !0), V.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (rs.current = t.matches);
                    t.addListener(e), e();
                  } else rs.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rs.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (ra.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tv.Pn)(this.notifyUpdate),
          (0, tv.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = F.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tv.Wi.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r(), e.owner && e.stop();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in C) {
            let e = C[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : iK();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < rh.length; e++) {
            let i = rh[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: n } = e;
            for (let r in e) {
              let s = e[r],
                o = i[r];
              if (O(s)) t.addValue(r, s), ic(n) && n.add(r);
              else if (O(o))
                t.addValue(r, (0, ip.BX)(s, { owner: t })),
                  ic(n) && n.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, ip.BX)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < rd; t++) {
            let i = b[t],
              n = this.props[i];
            (x(n) || !1 === n) && (e[i] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, ip.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (t8(n) || t4(n))
                ? (n = parseFloat(n))
                : !ru(n) && eg.P.test(e) && (n = eA(t, e)),
              this.setBaseTarget(t, O(n) ? n.get() : n)),
            O(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = th(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || O(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new nf.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class rp extends rc {
        constructor() {
          super(...arguments), (this.KeyframeResolver = eC);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class rf extends rp {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(t, e) {
          if (F.has(e)) {
            let t = eT(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, $.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return nt(t, e);
        }
        build(t, e, i, n) {
          X(t, e, i, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return ta(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          O(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, n) {
          tr(t, e, i, n);
        }
      }
      class rm extends rp {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (F.has(e)) {
            let t = eT(e);
            return (t && t.default) || 0;
          }
          return (e = ts.has(e) ? e : d(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return iK();
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tl(t, e, i);
        }
        build(t, e, i, n) {
          te(t, e, i, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          to(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = tn(t.tagName)), super.mount(t);
        }
      }
      let rg = (t, e) =>
          j(t)
            ? new rm(e, { enableHardwareAcceleration: !1 })
            : new rf(e, {
                allowProjection: t !== s.Fragment,
                enableHardwareAcceleration: !0,
              }),
        rv = {
          animation: { Feature: iS },
          exit: { Feature: iA },
          inView: { Feature: tN },
          tap: { Feature: tW },
          focus: { Feature: tL },
          hover: { Feature: tk },
          pan: { Feature: na },
          drag: { Feature: ns, ProjectionNode: rr, MeasureLayout: nc },
          layout: { ProjectionNode: rr, MeasureLayout: nc },
        },
        ry = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: n,
              Component: d,
            }) {
              t &&
                (function (t) {
                  for (let e in t) C[e] = { ...C[e], ...t[e] };
                })(t);
              let f = (0, s.forwardRef)(function (t, f) {
                var P;
                let w;
                let b = {
                    ...(0, s.useContext)(o._),
                    ...t,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, s.useContext)(M).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(t),
                  },
                  { isStatic: T } = b,
                  E = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (S(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || x(e) ? e : void 0,
                          animate: x(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, s.useContext)(a));
                    return (0, s.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [A(e), A(i)]
                    );
                  })(t),
                  R = n(t, T);
                if (!T && V.j) {
                  (0, s.useContext)(h).strict;
                  let t = (function (t) {
                    let { drag: e, layout: i } = C;
                    if (!e && !i) return {};
                    let n = { ...e, ...i };
                    return {
                      MeasureLayout:
                        (null == e ? void 0 : e.isEnabled(t)) ||
                        (null == i ? void 0 : i.isEnabled(t))
                          ? n.MeasureLayout
                          : void 0,
                      ProjectionNode: n.ProjectionNode,
                    };
                  })(b);
                  (w = t.MeasureLayout),
                    (E.visualElement = (function (t, e, i, n, r) {
                      let { visualElement: d } = (0, s.useContext)(a),
                        f = (0, s.useContext)(h),
                        x = (0, s.useContext)(l),
                        P = (0, s.useContext)(o._).reducedMotion,
                        w = (0, s.useRef)();
                      (n = n || f.renderer),
                        !w.current &&
                          n &&
                          (w.current = n(t, {
                            visualState: e,
                            parent: d,
                            props: i,
                            presenceContext: x,
                            blockInitialAnimation: !!x && !1 === x.initial,
                            reducedMotionConfig: P,
                          }));
                      let b = w.current,
                        S = (0, s.useContext)(g);
                      b &&
                        !b.projection &&
                        r &&
                        ("html" === b.type || "svg" === b.type) &&
                        (function (t, e, i, n) {
                          let {
                            layoutId: r,
                            layout: s,
                            drag: o,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: u,
                          } = e;
                          (t.projection = new i(
                            t.latestValues,
                            e["data-framer-portal-id"]
                              ? void 0
                              : (function t(e) {
                                  if (e)
                                    return !1 !== e.options.allowProjection
                                      ? e.projection
                                      : t(e.parent);
                                })(t.parent)
                          )),
                            t.projection.setOptions({
                              layoutId: r,
                              layout: s,
                              alwaysMeasureLayout: !!o || (a && m(a)),
                              visualElement: t,
                              scheduleRender: () => t.scheduleRender(),
                              animationType: "string" == typeof s ? s : "both",
                              initialPromotionConfig: n,
                              layoutScroll: l,
                              layoutRoot: u,
                            });
                        })(w.current, i, r, S),
                        (0, s.useInsertionEffect)(() => {
                          b && b.update(i, x);
                        });
                      let T = (0, s.useRef)(
                        !!(i[c] && !window.HandoffComplete)
                      );
                      return (
                        (0, u.L)(() => {
                          b &&
                            (b.updateFeatures(),
                            p.render(b.render),
                            T.current &&
                              b.animationState &&
                              b.animationState.animateChanges());
                        }),
                        (0, s.useEffect)(() => {
                          b &&
                            (!T.current &&
                              b.animationState &&
                              b.animationState.animateChanges(),
                            T.current &&
                              ((T.current = !1),
                              v || ((v = !0), queueMicrotask(y))));
                        }),
                        b
                      );
                    })(d, R, b, e, t.ProjectionNode));
                }
                return (0, r.jsxs)(a.Provider, {
                  value: E,
                  children: [
                    w && E.visualElement
                      ? (0, r.jsx)(w, { visualElement: E.visualElement, ...b })
                      : null,
                    i(
                      d,
                      t,
                      ((P = E.visualElement),
                      (0, s.useCallback)(
                        (t) => {
                          t && R.mount && R.mount(t),
                            P && (t ? P.mount(t) : P.unmount()),
                            f &&
                              ("function" == typeof f
                                ? f(t)
                                : m(f) && (f.current = t));
                        },
                        [P]
                      )),
                      R,
                      T,
                      E.visualElement
                    ),
                  ],
                });
              });
              return (f[R] = d), f;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, n) {
            return {
              ...(j(t) ? ty : tx),
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, n, { latestValues: r }, o) => {
                  let a = (
                      j(e)
                        ? function (t, e, i, n) {
                            let r = (0, s.useMemo)(() => {
                              let i = ti();
                              return (
                                te(
                                  i,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  tn(n),
                                  t.transformTemplate
                                ),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              K(e, t.style, t),
                                (r.style = { ...e, ...r.style });
                            }
                            return r;
                          }
                        : function (t, e, i) {
                            let n = {},
                              r = (function (t, e, i) {
                                let n = t.style || {},
                                  r = {};
                                return (
                                  K(r, n, t),
                                  Object.assign(
                                    r,
                                    (function ({ transformTemplate: t }, e, i) {
                                      return (0, s.useMemo)(() => {
                                        let n = Y();
                                        return (
                                          X(
                                            n,
                                            e,
                                            { enableHardwareAcceleration: !i },
                                            t
                                          ),
                                          Object.assign({}, n.vars, n.style)
                                        );
                                      }, [e]);
                                    })(t, e, i)
                                  ),
                                  r
                                );
                              })(t, e, i);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((n.draggable = !1),
                                (r.userSelect =
                                  r.WebkitUserSelect =
                                  r.WebkitTouchCallout =
                                    "none"),
                                (r.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (n.tabIndex = 0),
                              (n.style = r),
                              n
                            );
                          }
                    )(i, r, o, e),
                    l = (function (t, e, i) {
                      let n = {};
                      for (let r in t)
                        ("values" !== r || "object" != typeof t.values) &&
                          (q(r) ||
                            (!0 === i && Z(r)) ||
                            (!e && !Z(r)) ||
                            (t.draggable && r.startsWith("onDrag"))) &&
                          (n[r] = t[r]);
                      return n;
                    })(i, "string" == typeof e, t),
                    u = e !== s.Fragment ? { ...l, ...a, ref: n } : {},
                    { children: h } = i,
                    d = (0, s.useMemo)(() => (O(h) ? h.get() : h), [h]);
                  return (0, s.createElement)(e, { ...u, children: d });
                };
              })(e),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, rv, rg)
        );
    },
    1534: function (t, e, i) {
      i.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    565: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    8746: function (t, e, i) {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return n;
        },
      });
    },
    1506: function (t, e, i) {
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    9047: function (t, e, i) {
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(9276);
      let r = n.Z,
        s = n.Z;
    },
    2548: function (t, e, i) {
      i.d(e, {
        s: function () {
          return u;
        },
      });
      var n = i(9047),
        r = i(1506),
        s = i(9654),
        o = i(3217),
        a = i(9276),
        l = i(5389);
      function u(t, e, { clamp: i = !0, ease: u, mixer: h } = {}) {
        let d = t.length;
        if (
          ((0, n.k)(
            d === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === d)
        )
          return () => e[0];
        if (2 === d && t[0] === t[1]) return () => e[1];
        t[0] > t[d - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let c = (function (t, e, i) {
            let n = [],
              r = i || l.C,
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let o = r(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || a.Z : e;
                o = (0, s.z)(t, o);
              }
              n.push(o);
            }
            return n;
          })(e, u, h),
          p = c.length,
          f = (e) => {
            let i = 0;
            if (p > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let n = (0, o.Y)(t[i], t[i + 1], e);
            return c[i](n);
          };
        return i ? (e) => f((0, r.u)(t[0], t[d - 1], e)) : f;
      }
    },
    7282: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    5389: function (t, e, i) {
      i.d(e, {
        C: function () {
          return A;
        },
      });
      var n = i(5004),
        r = i(9047);
      function s(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var o = i(5778),
        a = i(1583),
        l = i(598);
      function u(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let h = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        d = [o.$, a.m, l.J],
        c = (t) => d.find((e) => e.test(t));
      function p(t) {
        let e = c(t);
        if (
          ((0, r.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === l.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - n;
                (r = s(l, n, t + 1 / 3)),
                  (o = s(l, n, t)),
                  (a = s(l, n, t - 1 / 3));
              } else r = o = a = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let f = (t, e) => {
        let i = p(t),
          r = p(e);
        if (!i || !r) return u(t, e);
        let s = { ...i };
        return (t) => (
          (s.red = h(i.red, r.red, t)),
          (s.green = h(i.green, r.green, t)),
          (s.blue = h(i.blue, r.blue, t)),
          (s.alpha = (0, n.t)(i.alpha, r.alpha, t)),
          a.m.transform(s)
        );
      };
      var m = i(9654),
        g = i(146),
        v = i(3646),
        y = i(1534);
      let x = new Set(["none", "hidden"]);
      function P(t, e) {
        return (i) => (0, n.t)(t, e, i);
      }
      function w(t) {
        return "number" == typeof t
          ? P
          : "string" == typeof t
          ? (0, y.t)(t)
            ? u
            : g.$.test(t)
            ? f
            : T
          : Array.isArray(t)
          ? b
          : "object" == typeof t
          ? g.$.test(t)
            ? f
            : S
          : u;
      }
      function b(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => w(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function S(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = w(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let T = (t, e) => {
        let i = v.P.createTransformer(e),
          n = (0, v.V)(t),
          s = (0, v.V)(e);
        return n.indexes.var.length === s.indexes.var.length &&
          n.indexes.color.length === s.indexes.color.length &&
          n.indexes.number.length >= s.indexes.number.length
          ? (x.has(t) && !s.values.length) || (x.has(e) && !n.values.length)
            ? x.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : (0, m.z)(
                b(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, s),
                  s.values
                ),
                i
              )
          : ((0, r.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            u(t, e));
      };
      function A(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, n.t)(t, e, i)
          : w(t)(t, e);
      }
    },
    5004: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, i) => t + (e - t) * i;
    },
    9276: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    839: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return s;
        },
      });
      var n = i(5004),
        r = i(3217);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let o = (0, r.Y)(0, e, s);
              t.push((0, n.t)(i, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    9654: function (t, e, i) {
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    3217: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    2428: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(8746);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    458: function (t, e, i) {
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    9033: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = i(7282).j ? n.useLayoutEffect : n.useEffect;
    },
    3476: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    804: function (t, e, i) {
      i.d(e, {
        BX: function () {
          return h;
        },
        S1: function () {
          return l;
        },
      });
      var n = i(2428),
        r = i(3476),
        s = i(9993),
        o = i(6219);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.2.13"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    5778: function (t, e, i) {
      i.d(e, {
        $: function () {
          return r;
        },
      });
      var n = i(1583);
      let r = {
        test: (0, i(3338).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    598: function (t, e, i) {
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(783),
        r = i(5480),
        s = i(7292),
        o = i(3338);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(i)) +
          ", " +
          (0, s.Nw)(n.Fq.transform(o)) +
          ")",
      };
    },
    146: function (t, e, i) {
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(7292),
        r = i(5778),
        s = i(598),
        o = i(1583);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    1583: function (t, e, i) {
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(1506),
        r = i(783),
        s = i(7292),
        o = i(3338);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.Nw)(r.Fq.transform(n)) +
            ")",
        };
    },
    3338: function (t, e, i) {
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var n = i(7292);
      let r = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && !(0, n.Rw)(i) && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (r) => {
          if (!(0, n.HD)(r)) return r;
          let [s, o, a, l] = r.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    3646: function (t, e, i) {
      i.d(e, {
        P: function () {
          return c;
        },
        V: function () {
          return l;
        },
      });
      var n = i(146),
        r = i(7292);
      let s = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              a,
              (t) => (
                n.$.test(t)
                  ? (r.color.push(u), l.push(o), i.push(n.$.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(u), l.push("var"), i.push(t))
                  : (r.number.push(u), l.push(s), i.push(parseFloat(t))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: r, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === s
                ? (l += (0, r.Nw)(t[u]))
                : e === o
                ? (l += n.$.transform(t[u]))
                : (l += t[u]);
            }
          return l;
        };
      }
      let d = (t) => ("number" == typeof t ? 0 : t),
        c = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(r.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(d));
          },
        };
    },
    783: function (t, e, i) {
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(1506);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    5480: function (t, e, i) {
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = i(7292);
      let r = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    7292: function (t, e, i) {
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return n;
        },
        Rw: function () {
          return l;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return null == t;
      }
    },
    9754: function (t, e, i) {
      let n, r;
      i.d(e, {
        v: function () {
          return L;
        },
      });
      var s = i(804),
        o = i(458),
        a = i(2265),
        l = i(9047);
      let u = new WeakMap();
      function h({ target: t, contentRect: e, borderBoxSize: i }) {
        var n;
        null === (n = u.get(t)) ||
          void 0 === n ||
          n.forEach((n) => {
            n({
              target: t,
              contentSize: e,
              get size() {
                return (function (t, e) {
                  if (e) {
                    let { inlineSize: t, blockSize: i } = e[0];
                    return { width: t, height: i };
                  }
                  return t instanceof SVGElement && "getBBox" in t
                    ? t.getBBox()
                    : { width: t.offsetWidth, height: t.offsetHeight };
                })(t, i);
              },
            });
          });
      }
      function d(t) {
        t.forEach(h);
      }
      let c = new Set();
      var p = i(3217),
        f = i(3476);
      let m = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        g = () => ({ time: 0, x: m(), y: m() }),
        v = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function y(t, e, i, n) {
        let r = i[e],
          { length: s, position: o } = v[e],
          a = r.current,
          l = i.time;
        (r.current = t[`scroll${o}`]),
          (r.scrollLength = t[`scroll${s}`] - t[`client${s}`]),
          (r.offset.length = 0),
          (r.offset[0] = 0),
          (r.offset[1] = r.scrollLength),
          (r.progress = (0, p.Y)(0, r.scrollLength, r.current));
        let u = n - l;
        r.velocity = u > 50 ? 0 : (0, f.R)(r.current - a, u);
      }
      let x = [
          [0, 0],
          [1, 1],
        ],
        P = { start: 0, center: 0.5, end: 1 };
      function w(t, e, i = 0) {
        let n = 0;
        if ((t in P && (t = P[t]), "string" == typeof t)) {
          let e = parseFloat(t);
          t.endsWith("px")
            ? (n = e)
            : t.endsWith("%")
            ? (t = e / 100)
            : t.endsWith("vw")
            ? (n = (e / 100) * document.documentElement.clientWidth)
            : t.endsWith("vh")
            ? (n = (e / 100) * document.documentElement.clientHeight)
            : (t = e);
        }
        return "number" == typeof t && (n = e * t), i + n;
      }
      let b = [0, 0];
      var S = i(2548),
        T = i(839);
      let A = { x: 0, y: 0 };
      var E = i(6219);
      let C = new WeakMap(),
        V = new WeakMap(),
        M = new WeakMap(),
        R = (t) => (t === document.documentElement ? window : t);
      var D = i(9033);
      function j(t, e) {
        (0, l.K)(
          !!(!e || e.current),
          `You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let k = () => ({
        scrollX: (0, s.BX)(0),
        scrollY: (0, s.BX)(0),
        scrollXProgress: (0, s.BX)(0),
        scrollYProgress: (0, s.BX)(0),
      });
      function L({ container: t, target: e, layoutEffect: i = !0, ...s } = {}) {
        let l = (0, o.h)(k);
        return (
          (i ? D.L : a.useEffect)(
            () => (
              j("target", e),
              j("container", t),
              (function (
                t,
                { container: e = document.documentElement, ...i } = {}
              ) {
                let s = M.get(e);
                s || ((s = new Set()), M.set(e, s));
                let o = (function (t, e, i, n = {}) {
                  return {
                    measure: () =>
                      (function (t, e = t, i) {
                        if (
                          ((i.x.targetOffset = 0),
                          (i.y.targetOffset = 0),
                          e !== t)
                        ) {
                          let n = e;
                          for (; n && n !== t; )
                            (i.x.targetOffset += n.offsetLeft),
                              (i.y.targetOffset += n.offsetTop),
                              (n = n.offsetParent);
                        }
                        (i.x.targetLength =
                          e === t ? e.scrollWidth : e.clientWidth),
                          (i.y.targetLength =
                            e === t ? e.scrollHeight : e.clientHeight),
                          (i.x.containerLength = t.clientWidth),
                          (i.y.containerLength = t.clientHeight);
                      })(t, n.target, i),
                    update: (e) => {
                      y(t, "x", i, e),
                        y(t, "y", i, e),
                        (i.time = e),
                        (n.offset || n.target) &&
                          (function (t, e, i) {
                            let { offset: n = x } = i,
                              { target: r = t, axis: s = "y" } = i,
                              o = "y" === s ? "height" : "width",
                              a =
                                r !== t
                                  ? (function (t, e) {
                                      let i = { x: 0, y: 0 },
                                        n = t;
                                      for (; n && n !== e; )
                                        if (n instanceof HTMLElement)
                                          (i.x += n.offsetLeft),
                                            (i.y += n.offsetTop),
                                            (n = n.offsetParent);
                                        else if ("svg" === n.tagName) {
                                          let t = n.getBoundingClientRect(),
                                            e = (n =
                                              n.parentElement).getBoundingClientRect();
                                          (i.x += t.left - e.left),
                                            (i.y += t.top - e.top);
                                        } else if (
                                          n instanceof SVGGraphicsElement
                                        ) {
                                          let { x: t, y: e } = n.getBBox();
                                          (i.x += t), (i.y += e);
                                          let r = null,
                                            s = n.parentNode;
                                          for (; !r; )
                                            "svg" === s.tagName && (r = s),
                                              (s = n.parentNode);
                                          n = r;
                                        } else break;
                                      return i;
                                    })(r, t)
                                  : A,
                              l =
                                r === t
                                  ? {
                                      width: t.scrollWidth,
                                      height: t.scrollHeight,
                                    }
                                  : "getBBox" in r && "svg" !== r.tagName
                                  ? r.getBBox()
                                  : {
                                      width: r.clientWidth,
                                      height: r.clientHeight,
                                    },
                              u = {
                                width: t.clientWidth,
                                height: t.clientHeight,
                              };
                            e[s].offset.length = 0;
                            let h = !e[s].interpolate,
                              d = n.length;
                            for (let t = 0; t < d; t++) {
                              let i = (function (t, e, i, n) {
                                let r = Array.isArray(t) ? t : b,
                                  s = 0;
                                return (
                                  "number" == typeof t
                                    ? (r = [t, t])
                                    : "string" == typeof t &&
                                      (r = (t = t.trim()).includes(" ")
                                        ? t.split(" ")
                                        : [t, P[t] ? t : "0"]),
                                  w(r[0], i, n) - w(r[1], e)
                                );
                              })(n[t], u[o], l[o], a[s]);
                              h ||
                                i === e[s].interpolatorOffsets[t] ||
                                (h = !0),
                                (e[s].offset[t] = i);
                            }
                            h &&
                              ((e[s].interpolate = (0, S.s)(
                                e[s].offset,
                                (0, T.Y)(n)
                              )),
                              (e[s].interpolatorOffsets = [...e[s].offset])),
                              (e[s].progress = e[s].interpolate(e[s].current));
                          })(t, i, n);
                    },
                    notify: () => e(i),
                  };
                })(e, t, g(), i);
                if ((s.add(o), !C.has(e))) {
                  let t = () => {
                      for (let t of s) t.measure();
                    },
                    i = () => {
                      for (let t of s) t.update(E.frameData.timestamp);
                    },
                    o = () => {
                      for (let t of s) t.notify();
                    },
                    a = () => {
                      E.Wi.read(t, !1, !0),
                        E.Wi.read(i, !1, !0),
                        E.Wi.update(o, !1, !0);
                    };
                  C.set(e, a);
                  let l = R(e);
                  window.addEventListener("resize", a, { passive: !0 }),
                    e !== document.documentElement &&
                      V.set(
                        e,
                        "function" == typeof e
                          ? (c.add(e),
                            r ||
                              ((r = () => {
                                let t = {
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                  },
                                  e = {
                                    target: window,
                                    size: t,
                                    contentSize: t,
                                  };
                                c.forEach((t) => t(e));
                              }),
                              window.addEventListener("resize", r)),
                            () => {
                              c.delete(e), !c.size && r && (r = void 0);
                            })
                          : (function (t, e) {
                              var i;
                              n ||
                                "undefined" == typeof ResizeObserver ||
                                (n = new ResizeObserver(d));
                              let r =
                                ("string" == typeof (i = t)
                                  ? (i = document.querySelectorAll(i))
                                  : i instanceof Element && (i = [i]),
                                Array.from(i || []));
                              return (
                                r.forEach((t) => {
                                  let i = u.get(t);
                                  i || ((i = new Set()), u.set(t, i)),
                                    i.add(e),
                                    null == n || n.observe(t);
                                }),
                                () => {
                                  r.forEach((t) => {
                                    let i = u.get(t);
                                    null == i || i.delete(e),
                                      (null == i ? void 0 : i.size) ||
                                        null == n ||
                                        n.unobserve(t);
                                  });
                                }
                              );
                            })(e, a)
                      ),
                    l.addEventListener("scroll", a, { passive: !0 });
                }
                let a = C.get(e);
                return (
                  E.Wi.read(a, !1, !0),
                  () => {
                    var t;
                    (0, E.Pn)(a);
                    let i = M.get(e);
                    if (!i || (i.delete(o), i.size)) return;
                    let n = C.get(e);
                    C.delete(e),
                      n &&
                        (R(e).removeEventListener("scroll", n),
                        null === (t = V.get(e)) || void 0 === t || t(),
                        window.removeEventListener("resize", n));
                  }
                );
              })(
                ({ x: t, y: e }) => {
                  l.scrollX.set(t.current),
                    l.scrollXProgress.set(t.progress),
                    l.scrollY.set(e.current),
                    l.scrollYProgress.set(e.progress);
                },
                {
                  ...s,
                  container: (null == t ? void 0 : t.current) || void 0,
                  target: (null == e ? void 0 : e.current) || void 0,
                }
              )
            ),
            [t, e, JSON.stringify(s.offset)]
          ),
          l
        );
      }
    },
    31: function (t, e, i) {
      i.d(e, {
        H: function () {
          return p;
        },
      });
      var n = i(2548);
      let r = (t) => t && "object" == typeof t && t.mix,
        s = (t) => (r(t) ? t.mix : void 0);
      var o = i(2265),
        a = i(804),
        l = i(9791),
        u = i(458),
        h = i(9033),
        d = i(6219);
      function c(t, e) {
        let i = (function (t) {
            let e = (0, u.h)(() => (0, a.BX)(t)),
              { isStatic: i } = (0, o.useContext)(l._);
            if (i) {
              let [, i] = (0, o.useState)(t);
              (0, o.useEffect)(() => e.on("change", i), []);
            }
            return e;
          })(e()),
          n = () => i.set(e());
        return (
          n(),
          (0, h.L)(() => {
            let e = () => d.Wi.preRender(n, !1, !0),
              i = t.map((t) => t.on("change", e));
            return () => {
              i.forEach((t) => t()), (0, d.Pn)(n);
            };
          }),
          i
        );
      }
      function p(t, e, i, r) {
        if ("function" == typeof t)
          return (function (t) {
            (a.S1.current = []), t();
            let e = c(a.S1.current, t);
            return (a.S1.current = void 0), e;
          })(t);
        let o =
          "function" == typeof e
            ? e
            : (function (...t) {
                let e = !Array.isArray(t[0]),
                  i = e ? 0 : -1,
                  r = t[0 + i],
                  o = t[1 + i],
                  a = t[2 + i],
                  l = t[3 + i],
                  u = (0, n.s)(o, a, { mixer: s(a[0]), ...l });
                return e ? u(r) : u;
              })(e, i, r);
        return Array.isArray(t) ? f(t, o) : f([t], ([t]) => o(t));
      }
      function f(t, e) {
        let i = (0, u.h)(() => []);
        return c(t, () => {
          i.length = 0;
          let n = t.length;
          for (let e = 0; e < n; e++) i[e] = t[e].get();
          return e(i);
        });
      }
    },
  },
]);
