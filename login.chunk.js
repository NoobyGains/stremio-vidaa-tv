"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([
    [6966], {
        1912: (n, e, t) => {
            t.r(e), t.d(e, {
                default: () => W
            });
            var l = t(9151),
                i = t(9225),
                r = (t(8579), t(2432), t(5585)),
                o = t(1088),
                s = t(9132),
                a = t(6870),
                d = t(289),
                g = t(8327),
                c = t(1157),
                u = t(43),
                k = t.n(u),
                h = t(5920),
                m = t.n(h),
                f = t(3004),
                v = t.n(f),
                p = t(7419),
                b = t.n(p),
                _ = t(1663),
                I = t.n(_),
                Z = t(1612),
                R = t.n(Z),
                x = t(3693),
                C = {};
            C.styleTagTransform = R(), C.setAttributes = b(), C.insert = v().bind(null, "head"), C.domAPI = m(), C.insertStyleElement = I();
            k()(x.A, C);
            const T = x.A && x.A.locals ? x.A.locals : void 0;
            var w = (0, l.vs)("<div>"),
                E = (0, l.vs)("<div> "),
                K = (0, l.vs)("<div><div>1</div><div>"),
                j = (0, l.vs)("<div><div>2</div><div>");
            const W = () => {
                const {
                    t: n
                } = (0, r.B)(), e = (0, o.W6)(), {
                    on: t,
                    off: u
                } = (0, a.cq)(), k = (0, d.Vj)(), {
                    ctx: h,
                    authLink: m
                } = (0, s.gK)(), {
                    load: f,
                    unload: v,
                    readData: p,
                    info: b,
                    authKey: _
                } = m, [I, Z] = (0, i.n5)(3e5), R = () => {
                    var n;
                    return null === (n = b()) || void 0 === n ? void 0 : n.qrcode
                }, x = () => {
                    const n = Math.floor(I() / 6e4 % 60),
                        e = Math.floor(I() / 1e3 % 60);
                    return `${n}:${e<10?"0":""}${e}`
                }, C = () => window.location.reload(), W = () => {
                    k.quit()
                };
                return (0, i.EH)((() => {
                    const n = _();
                    n && h.authenticate(n)
                })), (0, i.EH)((() => {
                    h.isAuthenticated() && e.navigate("/home", !0)
                })), (0, i.EH)((() => {
                    I() <= 0 && C()
                })), (0, g.WW)(p, 3e3), (0, g.WW)((() => {
                    Z((n => n - 1e3))
                }), 1e3), (0, i.Rc)((() => {
                    f(), t("back", W)
                })), (0, i.Ki)((() => {
                    v(), u("back", W)
                })), (0, i.a0)(c.YW, {
                    get class() {
                        return T.login
                    },
                    get children() {
                        return [(e = w(), (0, l.Yr)(e, (() => n("STREMIO_TV_LOGIN_TITLE"))), (0, i.gb)((() => (0, l.s7)(e, T.title))), e), (0, i.a0)(i.wv, {
                            get when() {
                                return R()
                            },
                            get fallback() {
                                return (0, i.a0)(c.Rh, {
                                    get class() {
                                        return T.loading
                                    }
                                })
                            },
                            get children() {
                                return [(0, i.a0)(c._V, {
                                    get class() {
                                        return T.qrcode
                                    },
                                    get src() {
                                        return R()
                                    }
                                }), (e = E(), t = e.firstChild, (0, l.Yr)(e, (() => n("STREMIO_TV_LOGIN_EXPIRES_IN")), t), (0, l.Yr)(e, x, null), (0, i.gb)((() => (0, l.s7)(e, T.timer))), e), (0, i.a0)(a.Gk, {
                                    get class() {
                                        return T.steps
                                    },
                                    get children() {
                                        return [(o = K(), s = o.firstChild, a = s.nextSibling, (0, l.Yr)(a, (() => n("STREMIO_TV_LOGIN_STEP_ONE")), null), (0, l.Yr)(a, (0, i.a0)(c.N_, {
                                            get href() {
                                                return null === (n = b()) || void 0 === n ? void 0 : n.link;
                                                var n
                                            }
                                        }), null), (0, i.gb)((n => {
                                            var e = T.step,
                                                t = T.count,
                                                i = T.label;
                                            return e !== n.e && (0, l.s7)(o, n.e = e), t !== n.t && (0, l.s7)(s, n.t = t), i !== n.a && (0, l.s7)(a, n.a = i), n
                                        }), {
                                            e: void 0,
                                            t: void 0,
                                            a: void 0
                                        }), o), (e = j(), t = e.firstChild, r = t.nextSibling, (0, l.Yr)(r, (() => n("STREMIO_TV_LOGIN_STEP_TWO"))), (0, i.gb)((n => {
                                            var i = T.step,
                                                o = T.count,
                                                s = T.label;
                                            return i !== n.e && (0, l.s7)(e, n.e = i), o !== n.t && (0, l.s7)(t, n.t = o), s !== n.a && (0, l.s7)(r, n.a = s), n
                                        }), {
                                            e: void 0,
                                            t: void 0,
                                            a: void 0
                                        }), e)];
                                        var e, t, r, o, s, a
                                    }
                                }), (0, i.a0)(c.$n, {
                                    get class() {
                                        return T.button
                                    },
                                    icon: "add",
                                    get label() {
                                        return n("STREMIO_TV_LOGIN_NEW_LINK")
                                    },
                                    autoFocus: !0,
                                    onPress: C
                                })];
                                var e, t
                            }
                        })];
                        var e
                    }
                })
            }
        },
        3693: (n, e, t) => {
            t.d(e, {
                A: () => s
            });
            var l = t(5556),
                i = t.n(l),
                r = t(3645),
                o = t.n(r)()(i());
            o.push([n.id, ".login-Zkkl4 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.login-Zkkl4 > * {\n  margin: 0.75em 0 0.75em 0;\n}\n.login-Zkkl4 > :first-child {\n  margin-top: 0;\n}\n.login-Zkkl4 > :last-child {\n  margin-bottom: 0;\n}\n.login-Zkkl4 .title-aZ_Ai {\n  font-size: 2rem;\n  font-weight: bold;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.login-Zkkl4 .loading-zx8Ye {\n  height: 10rem;\n  width: 10rem;\n}\n.login-Zkkl4 .qrcode-Wd5Jx {\n  height: 18rem;\n  width: 18rem;\n  border-radius: 1em;\n  background-color: rgba(255, 255, 255, 0.03);\n}\n.login-Zkkl4 .timer-UaDJy {\n  font-size: 1.8rem;\n  font-weight: 500;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n.login-Zkkl4 .steps-Cj23R {\n  display: flex;\n  flex-direction: column;\n}\n.login-Zkkl4 .steps-Cj23R > * {\n  margin: 0.75rem 0 0.75rem 0;\n}\n.login-Zkkl4 .steps-Cj23R > :first-child {\n  margin-top: 0;\n}\n.login-Zkkl4 .steps-Cj23R > :last-child {\n  margin-bottom: 0;\n}\n.login-Zkkl4 .steps-Cj23R .step-I8K2n {\n  flex: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.login-Zkkl4 .steps-Cj23R .step-I8K2n > * {\n  margin: 0 0.5rem 0 0.5rem;\n}\n.login-Zkkl4 .steps-Cj23R .step-I8K2n > :first-child {\n  margin-left: 0;\n}\n.login-Zkkl4 .steps-Cj23R .step-I8K2n > :last-child {\n  margin-right: 0;\n}\n.login-Zkkl4 .steps-Cj23R .step-I8K2n .count-zrUJz {\n  flex: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: calc(4rem - 1rem);\n  width: calc(4rem - 1rem);\n  font-size: 1.6rem;\n  font-weight: 600;\n  line-height: 1rem;\n  border-radius: 100%;\n  color: hsla(0, 0%, 100%, 0.9);\n  background-color: rgba(255, 255, 255, 0.03);\n}\n.login-Zkkl4 .steps-Cj23R .step-I8K2n .label-qWAC9 {\n  flex: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 1.8rem;\n  font-weight: 500;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.login-Zkkl4 .button-RfKWK {\n  width: auto;\n  margin-top: 2rem;\n}\n", ""]), o.locals = {
                login: "login-Zkkl4",
                title: "title-aZ_Ai",
                loading: "loading-zx8Ye",
                qrcode: "qrcode-Wd5Jx",
                timer: "timer-UaDJy",
                steps: "steps-Cj23R",
                step: "step-I8K2n",
                count: "count-zrUJz",
                label: "label-qWAC9",
                button: "button-RfKWK"
            };
            const s = o
        }
    }
]);