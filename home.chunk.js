"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([
    [7962], {
        1353: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => B
            });
            var o = n(9151),
                r = n(9225),
                a = (n(8579), n(2011), n(5235), n(4997), n(2432), n(5585)),
                s = n(1157),
                i = n(9132),
                l = n(8327),
                c = n(289),
                u = n(43),
                d = n.n(u),
                g = n(5920),
                h = n.n(g),
                m = n(3004),
                v = n.n(m),
                f = n(7419),
                p = n.n(f),
                w = n(1663),
                C = n.n(w),
                b = n(1612),
                A = n.n(b),
                k = n(2473),
                y = {};
            y.styleTagTransform = A(), y.setAttributes = p(), y.insert = v().bind(null, "head"), y.domAPI = h(), y.insertStyleElement = C();
            d()(k.A, y);
            const I = k.A && k.A.locals ? k.A.locals : void 0;
            var P = (0, o.vs)("<div class=message>Due to operating system restrictions, some Stremio features and streams are currently unavailable on this device.<br>We're working to provide full functionality in a future update."),
                S = (0, o.vs)("<div class=buttons>");
            const T = "home",
                B = () => {
                    var e, t, n, u;
                    const {
                        t: d
                    } = (0, a.B)(), g = (0, c.Vj)(), h = (0, l.SR)(500), {
                        continueWatching: m,
                        board: v
                    } = (0, i.gK)(), {
                        pages: f
                    } = (0, i.Pj)(), {
                        getCache: p,
                        setCache: w
                    } = f, C = () => p(T), [b, A] = (0, r.n5)(null !== (e = null === (t = C()) || void 0 === t ? void 0 : t.row) && void 0 !== e ? e : 0), [k, y] = (0, r.n5)(null !== (n = null === (u = C()) || void 0 === u ? void 0 : u.item) && void 0 !== n ? n : 0), [B, W] = (0, r.n5)(null), [x, D, E] = (0, l.zD)(), [F, G] = (0, r.n5)(!1), N = () => m.items().length ? {
                        title: d("CONTINUE_WATCHING"),
                        content: m.items()
                    } : null, j = e => {
                        A(e)
                    }, H = (e, t) => {
                        (0, r.vA)((() => {
                            W(e), y(t)
                        }))
                    }, K = async () => {
                        localStorage.setItem("warningModalDismissed", "true"), G(!1)
                    };
                    return (0, r.EH)((() => {
                        const e = b() - (N() ? 1 : 0);
                        h((() => v.loadCatalogs(e)))
                    })), (0, l.k9)([b, k], (([e, t]) => {
                        w(T, {
                            row: e,
                            item: t
                        })
                    })), (0, l.k9)(N, (e => {
                        const t = b(),
                            n = k();
                        if (e && 0 === t) {
                            const t = e.content[n];
                            t && W(t)
                        }
                    })), (0, r.EH)((async () => {
                        const e = localStorage.getItem("warningModalDismissed");
                        G(!e && (g.isTitan || g.isNetTV || g.isVidaa))
                    })), (0, r.Rc)((() => {
                        v.load()
                    })), (0, r.Ki)((() => {
                        v.unload()
                    })), (0, r.a0)(s.YW, {
                        get class() {
                            return I.home
                        },
                        get children() {
                            return [(0, r.a0)(s.Gn, {
                                get item() {
                                    return B()
                                }
                            }), (0, r.a0)(s.bp, {
                                get item() {
                                    return B()
                                },
                                open: x,
                                onClose: E
                            }), (0, r.a0)(s.OY, {
                                get class() {
                                    return I.content
                                },
                                axis: "vertical",
                                get children() {
                                    return (0, r.a0)(r.jK, {
                                        get each() {
                                            return [N(), ...v.catalogs()].filter((e => null !== e))
                                        },
                                        children: (e, t) => (0, r.a0)(s.WC, {
                                            get catalog() {
                                                return e()
                                            },
                                            index: t,
                                            get itemIndex() {
                                                return k()
                                            },
                                            get autoFocus() {
                                                return b() === t
                                            },
                                            showMore: !0,
                                            onFocus: j,
                                            onChange: H,
                                            onSelect: D
                                        })
                                    })
                                }
                            }), (0, r.a0)(r.wv, {
                                get when() {
                                    return F()
                                },
                                get children() {
                                    return (0, r.a0)(s.aF, {
                                        title: "Attention",
                                        onClose: K,
                                        get children() {
                                            return [P(), (e = S(), (0, o.Yr)(e, (0, r.a0)(s.$n, {
                                                label: "I understand",
                                                autoFocus: !0,
                                                onPress: K
                                            })), e)];
                                            var e
                                        }
                                    })
                                }
                            })]
                        }
                    })
                }
        },
        2473: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var o = n(5556),
                r = n.n(o),
                a = n(3645),
                s = n.n(a)()(r());
            s.push([e.id, ".home-qPkGc .content-BPvBy {\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n}\n", ""]), s.locals = {
                home: "home-qPkGc",
                content: "content-BPvBy"
            };
            const i = s
        }
    }
]);