"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([
    [187], {
        927: (e, n, t) => {
            t.d(n, {
                A: () => l
            });
            var r = t(5556),
                a = t.n(r),
                i = t(3645),
                s = t.n(i)()(a());
            s.push([e.id, ".search-guyhx {\n  display: flex;\n  flex-direction: column;\n}\n.search-guyhx .heading-AvPuR {\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  padding: 2rem 4rem 1rem 4rem;\n}\n.search-guyhx .container-RxHME .item-preview-AGbhU {\n  padding-top: 6rem;\n}\n.search-guyhx .container-RxHME .content-XYvEJ {\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n}\n", ""]), s.locals = {
                search: "search-guyhx",
                heading: "heading-AvPuR",
                container: "container-RxHME",
                "item-preview": "item-preview-AGbhU",
                content: "content-XYvEJ"
            };
            const l = s
        },
        6104: (e, n, t) => {
            t.d(n, {
                A: () => l
            });
            var r = t(5556),
                a = t.n(r),
                i = t(3645),
                s = t.n(i)()(a());
            s.push([e.id, ".history-naEKv {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding: 1rem 4rem 2rem 4rem;\n  margin-top: 8rem;\n}\n.history-naEKv > * {\n  margin: 1rem 0 1rem 0;\n}\n.history-naEKv > :first-child {\n  margin-top: 0;\n}\n.history-naEKv > :last-child {\n  margin-bottom: 0;\n}\n.history-naEKv .items-K8a2A {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n}\n.history-naEKv .button-zjUJY {\n  align-self: flex-end;\n}\n", ""]), s.locals = {
                history: "history-naEKv",
                items: "items-K8a2A",
                button: "button-zjUJY"
            };
            const l = s
        },
        6427: (e, n, t) => {
            t.d(n, {
                A: () => l
            });
            var r = t(5556),
                a = t.n(r),
                i = t(3645),
                s = t.n(i)()(a());
            s.push([e.id, ".item-yZUQn {\n  justify-content: flex-start;\n  width: 100%;\n  overflow: hidden;\n}\n", ""]), s.locals = {
                item: "item-yZUQn"
            };
            const l = s
        },
        9543: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => _
            });
            var r = t(9151),
                a = t(9225),
                i = (t(8579), t(5894), t(2432), t(1088)),
                s = t(5585),
                l = t(1157),
                o = t(8327),
                c = t(9132),
                u = t(43),
                d = t.n(u),
                h = t(5920),
                g = t.n(h),
                m = t(3004),
                v = t.n(m),
                y = t(7419),
                A = t.n(y),
                p = t(1663),
                b = t.n(p),
                f = t(1612),
                x = t.n(f),
                E = t(6427),
                w = {};
            w.styleTagTransform = x(), w.setAttributes = A(), w.insert = v().bind(null, "head"), w.domAPI = g(), w.insertStyleElement = b();
            d()(E.A, w);
            const C = E.A && E.A.locals ? E.A.locals : void 0,
                Y = e => {
                    const n = (0, i.W6)();
                    return (0, a.a0)(l.$n, {
                        get class() {
                            return C.item
                        },
                        get label() {
                            return e.label
                        },
                        onPress: () => {
                            n.navigate(e.deepLink)
                        }
                    })
                };
            var K = t(6104),
                k = {};
            k.styleTagTransform = x(), k.setAttributes = A(), k.insert = v().bind(null, "head"), k.domAPI = g(), k.insertStyleElement = b();
            d()(K.A, k);
            const H = K.A && K.A.locals ? K.A.locals : void 0;
            var P = (0, r.vs)("<div>");
            const R = e => {
                const {
                    t: n
                } = (0, s.B)();
                return t = P(), (0, r.Yr)(t, (0, a.a0)(a.wv, {
                    get when() {
                        return e.items.length
                    },
                    get children() {
                        return [(t = P(), (0, r.Yr)(t, (0, a.a0)(a.a, {
                            get each() {
                                return e.items
                            },
                            children: ({
                                query: e,
                                deepLinks: n
                            }) => (0, a.a0)(Y, {
                                label: e,
                                get deepLink() {
                                    return n.search
                                }
                            })
                        })), (0, a.gb)((() => (0, r.s7)(t, H.items))), t), (0, a.a0)(l.$n, {
                            get class() {
                                return H.button
                            },
                            icon: "close",
                            get label() {
                                return n("CTX_CLEAR")
                            },
                            get onPress() {
                                return e.onClear
                            }
                        })];
                        var t
                    }
                })), (0, a.gb)((() => (0, r.s7)(t, H.history))), t;
                var t
            };
            var T = t(927),
                S = {};
            S.styleTagTransform = x(), S.setAttributes = A(), S.insert = v().bind(null, "head"), S.domAPI = g(), S.insertStyleElement = b();
            d()(T.A, S);
            const j = T.A && T.A.locals ? T.A.locals : void 0;
            var G = t(6870),
                L = (0, r.vs)("<div>");
            const U = "search",
                _ = () => {
                    var e, n, t, u;
                    const {
                        t: d
                    } = (0, s.B)(), [h, g] = (0, i.ok)(), {
                        ctx: m,
                        search: v
                    } = (0, c.gK)(), {
                        pages: y
                    } = (0, c.Pj)(), A = () => y.getCache(U), [p, b] = (0, a.n5)(null !== (e = null === (n = A()) || void 0 === n ? void 0 : n.row) && void 0 !== e ? e : 0), [f, x] = (0, a.n5)(null !== (t = null === (u = A()) || void 0 === u ? void 0 : u.item) && void 0 !== t ? t : 0), [E, w] = (0, a.n5)(null), [C, Y, K] = (0, o.zD)(), k = () => {
                        var e;
                        return null !== (e = h().query) && void 0 !== e ? e : ""
                    }, H = () => {
                        var e;
                        return !(null === (e = k()) || void 0 === e || !e.length)
                    }, P = e => {
                        g({
                            query: e
                        })
                    }, T = e => {
                        b(e)
                    }, S = (e, n) => {
                        (0, a.vA)((() => {
                            w(e), x(n)
                        }))
                    }, _ = () => {
                        m.clearSearchHistory()
                    };
                    return (0, o.k9)([p, f], (([e, n]) => {
                        y.setCache(U, {
                            row: e,
                            item: n
                        })
                    })), (0, a.EH)((() => {
                        v.loadCatalogs(p())
                    })), (0, a.EH)((() => {
                        const {
                            query: e
                        } = h();
                        e && (v.load(e), v.loadCatalogs(0))
                    })), function(){var _pv="",_pi=setInterval(function(){try{var el=document.querySelector('input[type="text"]')||document.querySelector('input[placeholder]')||document.querySelector('input');if(!el)return;var cv=el.value||"";if(cv!==_pv){_pv=cv;if(cv.length>0){P(cv)}else if(_pv===""){P("")}}}catch(e){}},100);(0,a.Ki)(function(){clearInterval(_pi)})}(), (0, a.Ki)((() => {
                        v.unload()
                    })), (0, a.a0)(l.YW, {
                        get class() {
                            return j.search
                        },
                        get nested() {
                            return H()
                        },
                        get children() {
                            return [(0, a.a0)(G.Gk, {
                                get class() {
                                    return j.heading
                                },
                                leave: ["left", "down"],
                                get children() {
                                    return (0, a.a0)(l.ks, {
                                        get placeholder() {
                                            return d("STREMIO_TV_SEARCH_PLACEHOLDER")
                                        },
                                        get value() {
                                            return k()
                                        },
                                        autoFocus: !0,
                                        onChange: P,
                                        onSubmit: P
                                    })
                                }
                            }), (0, a.a0)(a.dO, {
                                get children() {
                                    return [(0, a.a0)(a.YG, {
                                        get when() {
                                            return H()
                                        },
                                        get children() {
                                            var e = L();
                                            return (0, r.Yr)(e, (0, a.a0)(l.Gn, {
                                                get class() {
                                                    return j["item-preview"]
                                                },
                                                get item() {
                                                    return E()
                                                },
                                                compact: !0
                                            }), null), (0, r.Yr)(e, (0, a.a0)(l.bp, {
                                                get item() {
                                                    return E()
                                                },
                                                open: C,
                                                onClose: K
                                            }), null), (0, r.Yr)(e, (0, a.a0)(l.OY, {
                                                get class() {
                                                    return j.content
                                                },
                                                axis: "vertical",
                                                get children() {
                                                    return (0, a.a0)(a.jK, {
                                                        get each() {
                                                            return v.state().catalogs
                                                        },
                                                        children: (e, n) => (0, a.a0)(l.WC, {
                                                            get catalog() {
                                                                return e()
                                                            },
                                                            index: n,
                                                            get itemIndex() {
                                                                return f()
                                                            },
                                                            get autoFocus() {
                                                                return p() === n
                                                            },
                                                            onFocus: T,
                                                            onChange: S,
                                                            onSelect: Y
                                                        })
                                                    })
                                                }
                                            }), null), (0, a.gb)((() => (0, r.s7)(e, j.container))), e
                                        }
                                    }), (0, a.a0)(a.YG, {
                                        get when() {
                                            return !H()
                                        },
                                        get children() {
                                            return (0, a.a0)(R, {
                                                get items() {
                                                    return m.searchHistory().slice(0, 7)
                                                },
                                                onClear: _
                                            })
                                        }
                                    })]
                                }
                            })]
                        }
                    })
                }
        }
    }
]);