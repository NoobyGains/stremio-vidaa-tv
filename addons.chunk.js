"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([
    [5710], {
        2181: (n, e, t) => {
            t.r(e), t.d(e, {
                default: () => J
            });
            var i = t(9151),
                a = t(9225),
                s = t(9170),
                d = t(5585),
                o = t(1157),
                r = t(6193),
                l = t(9132),
                c = t(43),
                h = t.n(c),
                g = t(5920),
                m = t.n(g),
                A = t(3004),
                S = t.n(A),
                u = t(7419),
                _ = t.n(u),
                f = t(1663),
                L = t.n(f),
                T = t(1612),
                U = t.n(T),
                v = t(8649),
                I = {};
            I.styleTagTransform = U(), I.setAttributes = _(), I.insert = S().bind(null, "head"), I.domAPI = m(), I.insertStyleElement = L();
            h()(v.A, I);
            const D = v.A && v.A.locals ? v.A.locals : void 0;
            var p = (0, i.vs)("<div><div></div><div>");
            const J = () => {
                const {
                    t: n
                } = (0, d.B)(), e = (0, r.Y)(), {
                    ctx: t
                } = (0, l.gK)(), c = () => {
                    t.syncAddons(), e.show({
                        title: n("STREMIO_TV_ADDONS_SYNC_ADDONS"),
                        message: n("STREMIO_TV_ADDONS_SYNC_SUCCESS")
                    })
                };
                return (0, a.a0)(o.YW, {
                    get class() {
                        return D.addons
                    },
                    get children() {
                        return [(0, a.a0)(s.A, {
                            get class() {
                                return D.icon
                            },
                            name: "addons"
                        }), (e = p(), t = e.firstChild, d = t.nextSibling, (0, i.Yr)(t, (() => n("STREMIO_TV_ADDONS_TITLE"))), (0, i.Yr)(d, (() => n("STREMIO_TV_ADDONS_SUBTITLE"))), (0, a.gb)((n => {
                            var a = D.heading,
                                s = D.title,
                                o = D.note;
                            return a !== n.e && (0, i.s7)(e, n.e = a), s !== n.t && (0, i.s7)(t, n.t = s), o !== n.a && (0, i.s7)(d, n.a = o), n
                        }), {
                            e: void 0,
                            t: void 0,
                            a: void 0
                        }), e), (0, a.a0)(o.$n, {
                            icon: "cloud-sync",
                            get label() {
                                return n("STREMIO_TV_ADDONS_SYNC_ADDONS")
                            },
                            autoFocus: !0,
                            onPress: c
                        })];
                        var e, t, d
                    }
                })
            }
        },
        8649: (n, e, t) => {
            t.d(e, {
                A: () => o
            });
            var i = t(5556),
                a = t.n(i),
                s = t(3645),
                d = t.n(s)()(a());
            d.push([n.id, ".addons-LUJe6 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.addons-LUJe6 > * {\n  margin: 1.25rem 0 1.25rem 0;\n}\n.addons-LUJe6 > :first-child {\n  margin-top: 0;\n}\n.addons-LUJe6 > :last-child {\n  margin-bottom: 0;\n}\n.addons-LUJe6 .icon-4a3iU {\n  height: 10rem;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.addons-LUJe6 .heading-q2AKI {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 65vw;\n  text-align: center;\n}\n.addons-LUJe6 .heading-q2AKI > * {\n  margin: 0.25rem 0 0.25rem 0;\n}\n.addons-LUJe6 .heading-q2AKI > :first-child {\n  margin-top: 0;\n}\n.addons-LUJe6 .heading-q2AKI > :last-child {\n  margin-bottom: 0;\n}\n.addons-LUJe6 .heading-q2AKI .title-ZSLYp {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.addons-LUJe6 .heading-q2AKI .note-y2pKA {\n  font-size: 1.5rem;\n  font-weight: 500;\n  font-style: italic;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n", ""]), d.locals = {
                addons: "addons-LUJe6",
                icon: "icon-4a3iU",
                heading: "heading-q2AKI",
                title: "title-ZSLYp",
                note: "note-y2pKA"
            };
            const o = d
        }
    }
]);