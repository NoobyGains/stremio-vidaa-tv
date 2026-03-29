"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([
    [7920], {
        254: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => A
            });
            var r = t(9151),
                l = t(9225),
                i = (t(8579), t(8433), t(2432), t(1088)),
                a = t(5585),
                o = t(6870),
                s = t(1157),
                c = t(8327),
                d = t(9132);
            t(5235), t(7105);
            const g = ({
                selectable: e
            }) => {
                const {
                    t: n
                } = (0, a.B)();
                return {
                    types: () => e().types.map((({
                        deepLinks: e,
                        type: t,
                        selected: r
                    }) => ({
                        value: e.library,
                        label: n(`TYPE_${null!=t?t:"ALL"}`, null != t ? t : void 0),
                        selected: r
                    }))),
                    sorts: () => e().sorts.map((({
                        deepLinks: e,
                        sort: t,
                        selected: r
                    }) => ({
                        value: e.library,
                        label: n(`SORT_${t.toUpperCase()}`, t),
                        selected: r
                    })))
                }
            };
            var h = t(43),
                u = t.n(h),
                b = t(5920),
                m = t.n(b),
                p = t(3004),
                v = t.n(p),
                f = t(7419),
                y = t.n(f),
                L = t(1663),
                N = t.n(L),
                x = t(1612),
                J = t.n(x),
                w = t(9169),
                B = {};
            B.styleTagTransform = J(), B.setAttributes = y(), B.insert = v().bind(null, "head"), B.domAPI = m(), B.insertStyleElement = N();
            u()(w.A, B);
            const Y = w.A && w.A.locals ? w.A.locals : void 0;
            var z = (0, r.vs)("<div><div>"),
                C = (0, r.vs)("<div>");
            const k = "library",
                A = () => {
                    const {
                        t: e
                    } = (0, a.B)(), {
                        navigate: n
                    } = (0, i.W6)(), h = (0, i.g)(), [u] = (0, i.ok)(), {
                        library: b
                    } = (0, d.gK)(), {
                        pages: m
                    } = (0, d.Pj)(), [p, v] = (0, l.n5)((null !== (f = h().type) && void 0 !== f ? f : u().sort) && null !== (y = null === (L = m.getCache(k)) || void 0 === L ? void 0 : L.item) && void 0 !== y ? y : 0);
                    var f, y, L;
                    const [N, x] = (0, l.n5)(null), [J, w, B] = (0, c.zD)(), A = g(b), S = e => {
                        n(e)
                    }, R = (e, n) => {
                        (0, l.vA)((() => {
                            x(e), v(n)
                        }))
                    }, P = () => {
                        n("/discover")
                    }, _ = () => {
                        b.loadNextPage()
                    };
                    return (0, l.EH)((() => {
                        const {
                            type: e
                        } = h(), {
                            sort: n
                        } = u();
                        b.load(e, n)
                    })), (0, c.k9)([h, u], (() => {
                        v(null), v(0)
                    })), (0, c.k9)(p, (e => {
                        e && m.setCache(k, {
                            item: e
                        })
                    })), (0, l.Ki)((() => {
                        b.unload()
                    })), (0, l.a0)(s.YW, {
                        get class() {
                            return Y.library
                        },
                        get children() {
                            return [(0, l.a0)(l.wv, {
                                get when() {
                                    return !b.catalog().length
                                },
                                get children() {
                                    return (0, l.a0)(l.dO, {
                                        get children() {
                                            return [(0, l.a0)(l.YG, {
                                                get when() {
                                                    return b.loading()
                                                },
                                                get children() {
                                                    return (0, l.a0)(s.Rh, {
                                                        autoFocus: !0
                                                    })
                                                }
                                            }), (0, l.a0)(l.YG, {
                                                get when() {
                                                    return !b.loading()
                                                },
                                                get children() {
                                                    var n = z(),
                                                        i = n.firstChild;
                                                    return (0, r.Yr)(n, (0, l.a0)(s._V, {
                                                        get class() {
                                                            return Y.image
                                                        },
                                                        get src() {
                                                            return t(7162)
                                                        }
                                                    }), i), (0, r.Yr)(i, (() => e("MOBILE_EMPTY_LIBRARY"))), (0, r.Yr)(n, (0, l.a0)(s.$n, {
                                                        icon: "discover",
                                                        label: "Go to Discover",
                                                        autoFocus: !0,
                                                        onPress: P
                                                    }), null), (0, l.gb)((e => {
                                                        var t = Y.placeholder,
                                                            l = Y.text;
                                                        return t !== e.e && (0, r.s7)(n, e.e = t), l !== e.t && (0, r.s7)(i, e.t = l), e
                                                    }), {
                                                        e: void 0,
                                                        t: void 0
                                                    }), n
                                                }
                                            })]
                                        }
                                    })
                                }
                            }), (0, l.a0)(l.wv, {
                                get when() {
                                    return b.catalog().length
                                },
                                get children() {
                                    return [(0, l.a0)(s.Gn, {
                                        get item() {
                                            return N()
                                        }
                                    }), (0, l.a0)(s.bp, {
                                        get item() {
                                            return N()
                                        },
                                        open: J,
                                        onClose: B
                                    }), (e = C(), (0, r.Yr)(e, (0, l.a0)(o.Gk, {
                                        get class() {
                                            return Y.filters
                                        },
                                        leave: ["left", "down"],
                                        get children() {
                                            return [(0, l.a0)(s.l6, {
                                                get options() {
                                                    return A.types()
                                                },
                                                onChange: S
                                            }), (0, l.a0)(s.l6, {
                                                get options() {
                                                    return A.sorts()
                                                },
                                                onChange: S
                                            })]
                                        }
                                    }), null), (0, r.Yr)(e, (0, l.a0)(s.WC, {
                                        get catalog() {
                                            return {
                                                content: b.catalog()
                                            }
                                        },
                                        index: 0,
                                        get itemIndex() {
                                            var e;
                                            return null !== (e = p()) && void 0 !== e ? e : 0
                                        },
                                        autoFocus: !0,
                                        onNextPage: _,
                                        onChange: R,
                                        onSelect: w
                                    }), null), (0, l.gb)((() => (0, r.s7)(e, Y.content))), e)];
                                    var e
                                }
                            })]
                        }
                    })
                }
        },
        9169: (e, n, t) => {
            t.d(n, {
                A: () => o
            });
            var r = t(5556),
                l = t.n(r),
                i = t(3645),
                a = t.n(i)()(l());
            a.push([e.id, ".library-J0Lti .placeholder-zN3fb {\n  z-index: 1;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.library-J0Lti .placeholder-zN3fb > * {\n  margin: 0.75rem 0 0.75rem 0;\n}\n.library-J0Lti .placeholder-zN3fb > :first-child {\n  margin-top: 0;\n}\n.library-J0Lti .placeholder-zN3fb > :last-child {\n  margin-bottom: 0;\n}\n.library-J0Lti .placeholder-zN3fb .image-uUIaS {\n  height: calc(18rem - 1.5rem);\n  width: calc(18rem - 1.5rem);\n}\n.library-J0Lti .placeholder-zN3fb .text-uY5su {\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.library-J0Lti .content-haNlB {\n  z-index: 1;\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.library-J0Lti .content-haNlB > * {\n  margin: 1rem 0 1rem 0;\n}\n.library-J0Lti .content-haNlB > :first-child {\n  margin-top: 0;\n}\n.library-J0Lti .content-haNlB > :last-child {\n  margin-bottom: 0;\n}\n.library-J0Lti .content-haNlB .filters-R1HS3 {\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  padding: 0 4rem;\n}\n.library-J0Lti .content-haNlB .filters-R1HS3 > * {\n  margin: 0 0.75rem 0 0.75rem;\n}\n.library-J0Lti .content-haNlB .filters-R1HS3 > :first-child {\n  margin-left: 0;\n}\n.library-J0Lti .content-haNlB .filters-R1HS3 > :last-child {\n  margin-right: 0;\n}\n", ""]), a.locals = {
                library: "library-J0Lti",
                placeholder: "placeholder-zN3fb",
                image: "image-uUIaS",
                text: "text-uY5su",
                content: "content-haNlB",
                filters: "filters-R1HS3"
            };
            const o = a
        }
    }
]);