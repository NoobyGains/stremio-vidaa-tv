"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([
    [6472], {
        1582: (e, t, o) => {
            o.d(t, {
                A: () => s
            });
            var n = o(5556),
                r = o.n(n),
                a = o(3645),
                i = o.n(a)()(r());
            i.push([e.id, ".settings-jvCLz {\n  position: relative;\n}\n", ""]), i.locals = {
                settings: "settings-jvCLz"
            };
            const s = i
        },
        4303: (e, t, o) => {
            o.d(t, {
                Mj: () => E
            });
            var n = {
                    grad: .9,
                    turn: 360,
                    rad: 360 / (2 * Math.PI)
                },
                r = function(e) {
                    return "string" == typeof e ? e.length > 0 : "number" == typeof e
                },
                a = function(e, t, o) {
                    return void 0 === t && (t = 0), void 0 === o && (o = Math.pow(10, t)), Math.round(o * e) / o + 0
                },
                i = function(e, t, o) {
                    return void 0 === t && (t = 0), void 0 === o && (o = 1), e > o ? o : e > t ? e : t
                },
                s = function(e) {
                    return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360
                },
                l = function(e) {
                    return {
                        r: i(e.r, 0, 255),
                        g: i(e.g, 0, 255),
                        b: i(e.b, 0, 255),
                        a: i(e.a)
                    }
                },
                c = function(e) {
                    return {
                        r: a(e.r),
                        g: a(e.g),
                        b: a(e.b),
                        a: a(e.a, 3)
                    }
                },
                h = /^#([0-9a-f]{3,8})$/i,
                d = function(e) {
                    var t = e.toString(16);
                    return t.length < 2 ? "0" + t : t
                },
                u = function(e) {
                    var t = e.r,
                        o = e.g,
                        n = e.b,
                        r = e.a,
                        a = Math.max(t, o, n),
                        i = a - Math.min(t, o, n),
                        s = i ? a === t ? (o - n) / i : a === o ? 2 + (n - t) / i : 4 + (t - o) / i : 0;
                    return {
                        h: 60 * (s < 0 ? s + 6 : s),
                        s: a ? i / a * 100 : 0,
                        v: a / 255 * 100,
                        a: r
                    }
                },
                p = function(e) {
                    var t = e.h,
                        o = e.s,
                        n = e.v,
                        r = e.a;
                    t = t / 360 * 6, o /= 100, n /= 100;
                    var a = Math.floor(t),
                        i = n * (1 - o),
                        s = n * (1 - (t - a) * o),
                        l = n * (1 - (1 - t + a) * o),
                        c = a % 6;
                    return {
                        r: 255 * [n, s, i, i, l, n][c],
                        g: 255 * [l, n, n, s, i, i][c],
                        b: 255 * [i, i, l, n, n, s][c],
                        a: r
                    }
                },
                m = function(e) {
                    return {
                        h: s(e.h),
                        s: i(e.s, 0, 100),
                        l: i(e.l, 0, 100),
                        a: i(e.a)
                    }
                },
                f = function(e) {
                    return {
                        h: a(e.h),
                        s: a(e.s),
                        l: a(e.l),
                        a: a(e.a, 3)
                    }
                },
                g = function(e) {
                    return p((o = (t = e).s, {
                        h: t.h,
                        s: (o *= ((n = t.l) < 50 ? n : 100 - n) / 100) > 0 ? 2 * o / (n + o) * 100 : 0,
                        v: n + o,
                        a: t.a
                    }));
                    var t, o, n
                },
                y = function(e) {
                    return {
                        h: (t = u(e)).h,
                        s: (r = (200 - (o = t.s)) * (n = t.v) / 100) > 0 && r < 200 ? o * n / 100 / (r <= 100 ? r : 200 - r) * 100 : 0,
                        l: r / 2,
                        a: t.a
                    };
                    var t, o, n, r
                },
                b = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
                v = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
                w = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
                S = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
                C = {
                    string: [
                        [function(e) {
                            var t = h.exec(e);
                            return t ? (e = t[1]).length <= 4 ? {
                                r: parseInt(e[0] + e[0], 16),
                                g: parseInt(e[1] + e[1], 16),
                                b: parseInt(e[2] + e[2], 16),
                                a: 4 === e.length ? a(parseInt(e[3] + e[3], 16) / 255, 2) : 1
                            } : 6 === e.length || 8 === e.length ? {
                                r: parseInt(e.substr(0, 2), 16),
                                g: parseInt(e.substr(2, 2), 16),
                                b: parseInt(e.substr(4, 2), 16),
                                a: 8 === e.length ? a(parseInt(e.substr(6, 2), 16) / 255, 2) : 1
                            } : null : null
                        }, "hex"],
                        [function(e) {
                            var t = w.exec(e) || S.exec(e);
                            return t ? t[2] !== t[4] || t[4] !== t[6] ? null : l({
                                r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                                g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                                b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                                a: void 0 === t[7] ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
                            }) : null
                        }, "rgb"],
                        [function(e) {
                            var t = b.exec(e) || v.exec(e);
                            if (!t) return null;
                            var o, r, a = m({
                                h: (o = t[1], r = t[2], void 0 === r && (r = "deg"), Number(o) * (n[r] || 1)),
                                s: Number(t[3]),
                                l: Number(t[4]),
                                a: void 0 === t[5] ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
                            });
                            return g(a)
                        }, "hsl"]
                    ],
                    object: [
                        [function(e) {
                            var t = e.r,
                                o = e.g,
                                n = e.b,
                                a = e.a,
                                i = void 0 === a ? 1 : a;
                            return r(t) && r(o) && r(n) ? l({
                                r: Number(t),
                                g: Number(o),
                                b: Number(n),
                                a: Number(i)
                            }) : null
                        }, "rgb"],
                        [function(e) {
                            var t = e.h,
                                o = e.s,
                                n = e.l,
                                a = e.a,
                                i = void 0 === a ? 1 : a;
                            if (!r(t) || !r(o) || !r(n)) return null;
                            var s = m({
                                h: Number(t),
                                s: Number(o),
                                l: Number(n),
                                a: Number(i)
                            });
                            return g(s)
                        }, "hsl"],
                        [function(e) {
                            var t = e.h,
                                o = e.s,
                                n = e.v,
                                a = e.a,
                                l = void 0 === a ? 1 : a;
                            if (!r(t) || !r(o) || !r(n)) return null;
                            var c = function(e) {
                                return {
                                    h: s(e.h),
                                    s: i(e.s, 0, 100),
                                    v: i(e.v, 0, 100),
                                    a: i(e.a)
                                }
                            }({
                                h: Number(t),
                                s: Number(o),
                                v: Number(n),
                                a: Number(l)
                            });
                            return p(c)
                        }, "hsv"]
                    ]
                },
                T = function(e, t) {
                    for (var o = 0; o < t.length; o++) {
                        var n = t[o][0](e);
                        if (n) return [n, t[o][1]]
                    }
                    return [null, void 0]
                },
                P = function(e) {
                    return "string" == typeof e ? T(e.trim(), C.string) : "object" == typeof e && null !== e ? T(e, C.object) : [null, void 0]
                },
                U = function(e, t) {
                    var o = y(e);
                    return {
                        h: o.h,
                        s: i(o.s + 100 * t, 0, 100),
                        l: o.l,
                        a: o.a
                    }
                },
                A = function(e) {
                    return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255
                },
                I = function(e, t) {
                    var o = y(e);
                    return {
                        h: o.h,
                        s: o.s,
                        l: i(o.l + 100 * t, 0, 100),
                        a: o.a
                    }
                },
                k = function() {
                    function e(e) {
                        this.parsed = P(e)[0], this.rgba = this.parsed || {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 1
                        }
                    }
                    return e.prototype.isValid = function() {
                        return null !== this.parsed
                    }, e.prototype.brightness = function() {
                        return a(A(this.rgba), 2)
                    }, e.prototype.isDark = function() {
                        return A(this.rgba) < .5
                    }, e.prototype.isLight = function() {
                        return A(this.rgba) >= .5
                    }, e.prototype.toHex = function() {
                        return t = (e = c(this.rgba)).r, o = e.g, n = e.b, i = (r = e.a) < 1 ? d(a(255 * r)) : "", "#" + d(t) + d(o) + d(n) + i;
                        var e, t, o, n, r, i
                    }, e.prototype.toRgb = function() {
                        return c(this.rgba)
                    }, e.prototype.toRgbString = function() {
                        return t = (e = c(this.rgba)).r, o = e.g, n = e.b, (r = e.a) < 1 ? "rgba(" + t + ", " + o + ", " + n + ", " + r + ")" : "rgb(" + t + ", " + o + ", " + n + ")";
                        var e, t, o, n, r
                    }, e.prototype.toHsl = function() {
                        return f(y(this.rgba))
                    }, e.prototype.toHslString = function() {
                        return t = (e = f(y(this.rgba))).h, o = e.s, n = e.l, (r = e.a) < 1 ? "hsla(" + t + ", " + o + "%, " + n + "%, " + r + ")" : "hsl(" + t + ", " + o + "%, " + n + "%)";
                        var e, t, o, n, r
                    }, e.prototype.toHsv = function() {
                        return e = u(this.rgba), {
                            h: a(e.h),
                            s: a(e.s),
                            v: a(e.v),
                            a: a(e.a, 3)
                        };
                        var e
                    }, e.prototype.invert = function() {
                        return E({
                            r: 255 - (e = this.rgba).r,
                            g: 255 - e.g,
                            b: 255 - e.b,
                            a: e.a
                        });
                        var e
                    }, e.prototype.saturate = function(e) {
                        return void 0 === e && (e = .1), E(U(this.rgba, e))
                    }, e.prototype.desaturate = function(e) {
                        return void 0 === e && (e = .1), E(U(this.rgba, -e))
                    }, e.prototype.grayscale = function() {
                        return E(U(this.rgba, -1))
                    }, e.prototype.lighten = function(e) {
                        return void 0 === e && (e = .1), E(I(this.rgba, e))
                    }, e.prototype.darken = function(e) {
                        return void 0 === e && (e = .1), E(I(this.rgba, -e))
                    }, e.prototype.rotate = function(e) {
                        return void 0 === e && (e = 15), this.hue(this.hue() + e)
                    }, e.prototype.alpha = function(e) {
                        return "number" == typeof e ? E({
                            r: (t = this.rgba).r,
                            g: t.g,
                            b: t.b,
                            a: e
                        }) : a(this.rgba.a, 3);
                        var t
                    }, e.prototype.hue = function(e) {
                        var t = y(this.rgba);
                        return "number" == typeof e ? E({
                            h: e,
                            s: t.s,
                            l: t.l,
                            a: t.a
                        }) : a(t.h)
                    }, e.prototype.isEqual = function(e) {
                        return this.toHex() === E(e).toHex()
                    }, e
                }(),
                E = function(e) {
                    return e instanceof k ? e : new k(e)
                }
        },
        5998: (e, t, o) => {
            o.r(t), o.d(t, {
                default: () => E
            });
            var n = o(9225),
                r = (o(8579), o(2432), o(5585)),
                a = o(1157),
                i = o(1088),
                s = o(9132),
                l = o(8327),
                c = (o(8433), o(2011), o(5235), o(4997), o(7105), o(4303)),
                h = o(289);
            const d = e => (0, c.Mj)(e).toRgbString(),
                u = l.eo.all.sort(((e, t) => e.label < t.label ? -1 : e.label > t.label ? 1 : 0)),
                p = (e, t, o) => {
                    var n, a, i;
                    const {
                        t: c
                    } = (0, r.B)(), p = (0, h.Vj)(), {
                        ctx: m,
                        streamingServer: f
                    } = (0, s.gK)(), {
                        theme: g
                    } = (0, s.Pj)(), {
                        user: y,
                        settings: b,
                        updateSettings: v
                    } = m;
                    return [{
                        label: null !== (n = null === (a = y()) || void 0 === a ? void 0 : a.email) && void 0 !== n ? n : c("ACCOUNT"),
                        icon: "person",
                        options: [{
                            label: "LOGOUT",
                            onClick: () => m.logout()
                        }]
                    }, {
                        label: "INTERFACE",
                        icon: "grid",
                        options: [{
                            label: "LANGUAGE",
                            icon: "language",
                            options: l.aH.C_.map((({
                                locale: e,
                                ietf: t,
                                alpha3: o
                            }) => ({
                                label: e,
                                selected: () => b().interfaceLanguage === t || o.includes(b().interfaceLanguage),
                                onClick: () => v({
                                    interfaceLanguage: t
                                })
                            })))
                        }, {
                            label: "ANIMATIONS",
                            options: [{
                                checked: () => g.animations(),
                                onClick: () => g.setAnimations(!g.animations())
                            }]
                        }, {
                            label: "BACKGROUND_BLUR",
                            options: [{
                                checked: () => g.backgroundBlur(),
                                onClick: () => g.setBackgroundBlur(!g.backgroundBlur())
                            }]
                        }]
                    }, {
                        label: "PLAYBACK",
                        icon: "play",
                        options: [{
                            label: "SUBTITLES",
                            icon: "subtitles",
                            options: [{
                                label: "DEFAULT_LANGUAGE",
                                options: [{
                                    label: "NONE",
                                    selected: () => null === b().subtitlesLanguage,
                                    onClick: () => v({
                                        subtitlesLanguage: null
                                    })
                                }, ...u.map((({
                                    label: e,
                                    code: t
                                }) => ({
                                    label: e,
                                    selected: () => b().subtitlesLanguage === t,
                                    onClick: () => v({
                                        subtitlesLanguage: t
                                    })
                                })))]
                            }, {
                                label: "DEFAULT_SECONDARY_LANGUAGE",
                                options: [{
                                    label: "NONE",
                                    selected: () => null === b().secondarySubtitlesLanguage,
                                    onClick: () => v({
                                        secondarySubtitlesLanguage: null
                                    })
                                }, ...u.map((({
                                    label: e,
                                    code: t
                                }) => ({
                                    label: e,
                                    selected: () => b().secondarySubtitlesLanguage === t,
                                    onClick: () => v({
                                        secondarySubtitlesLanguage: t
                                    })
                                })))]
                            }, {
                                label: "SIZE",
                                options: l.aH.BT.map((e => ({
                                    label: `${e} %`,
                                    selected: () => b().subtitlesSize === e,
                                    onClick: () => v({
                                        subtitlesSize: e
                                    })
                                })))
                            }, {
                                label: "SUBSPICKER_VERTICAL_OFFSET",
                                options: l.aH.a4.map((e => ({
                                    label: `${e} %`,
                                    selected: () => b().subtitlesOffset === e,
                                    onClick: () => v({
                                        subtitlesOffset: e
                                    })
                                })))
                            }, {
                                label: "OPACITY",
                                options: l.aH.iq.map((e => ({
                                    label: `${e} %`,
                                    selected: () => b().subtitlesOpacity === e,
                                    onClick: () => v({
                                        subtitlesOpacity: e
                                    })
                                })))
                            }, {
                                label: "TEXT_COLOR",
                                options: l.aH.R1.filter((e => "rgba(0, 0, 0, 0)" !== e)).map((e => ({
                                    color: e,
                                    selected: () => d(b().subtitlesTextColor) === e,
                                    onClick: () => v({
                                        subtitlesTextColor: e
                                    })
                                })))
                            }, {
                                label: "OUTLINE_COLOR",
                                options: l.aH.R1.map((e => ({
                                    color: e,
                                    selected: () => d(b().subtitlesOutlineColor) === e,
                                    onClick: () => v({
                                        subtitlesOutlineColor: e
                                    })
                                })))
                            }, {
                                label: "BACKGROUND_COLOR",
                                options: l.aH.R1.map((e => ({
                                    color: e,
                                    selected: () => d(b().subtitlesBackgroundColor) === e,
                                    onClick: () => v({
                                        subtitlesBackgroundColor: e
                                    })
                                })))
                            }]
                        }, {
                            label: "AUDIO",
                            icon: "audio",
                            options: [{
                                label: "DEFAULT_LANGUAGE",
                                options: [{
                                    label: "NONE",
                                    selected: () => null === b().audioLanguage,
                                    onClick: () => v({
                                        audioLanguage: null
                                    })
                                }, ...u.map((({
                                    label: e,
                                    code: t
                                }) => ({
                                    label: e,
                                    selected: () => b().audioLanguage === t,
                                    onClick: () => v({
                                        audioLanguage: t
                                    })
                                })))]
                            }, {
                                label: "DEFAULT_SECONDARY_LANGUAGE",
                                options: [{
                                    label: "NONE",
                                    selected: () => null === b().secondaryAudioLanguage,
                                    onClick: () => v({
                                        secondaryAudioLanguage: null
                                    })
                                }, ...u.map((({
                                    label: e,
                                    code: t
                                }) => ({
                                    label: e,
                                    selected: () => b().secondaryAudioLanguage === t,
                                    onClick: () => v({
                                        secondaryAudioLanguage: t
                                    })
                                })))]
                            }]
                        }, {
                            label: "SEEK_TIME_DURATION",
                            icon: "skip-forward",
                            options: l.aH.lg.map((e => ({
                                label: `${e/1e3} ${c("SECONDS")}`,
                                selected: () => b().seekTimeDuration === e,
                                onClick: () => v({
                                    seekTimeDuration: e
                                })
                            })))
                        }, {
                            label: "AUTO_PLAY",
                            icon: "episodes",
                            options: [{
                                label: "AUTO_PLAY_NEXT_EPISODE",
                                checked: () => b().bingeWatching,
                                onClick: () => v({
                                    bingeWatching: !b().bingeWatching
                                })
                            }]
                        }, {
                            label: "SETTINGS_NEXT_VIDEO_POPUP_DURATION",
                            icon: "episodes",
                            disabled: () => !b().bingeWatching,
                            options: l.aH.fy.map((e => ({
                                label: e > 0 ? `${e/1e3} ${c("SECONDS")}` : c("SETTINGS_DISABLED"),
                                selected: () => b().nextVideoNotificationDuration === e,
                                onClick: () => v({
                                    nextVideoNotificationDuration: e
                                })
                            })))
                        }]
                    }, {
                        label: "SERVER",
                        icon: "network",
                        options: [{
                            label: () => f.online() ? c("MOBILE_SERVER_ONLINE") : c("MOBILE_SERVER_OFFLINE"),
                            options: [{
                                label: "RELOAD",
                                onClick: () => f.reload()
                            }]
                        }, {
                            label: () => m.settings().streamingServerUrl,
                            options: [{
                                label: "EDIT_URL",
                                onClick: o
                            }]
                        }, {
                            label: () => `v${f.version()}`,
                            disabled: () => !f.version()
                        }]
                    }, {
                        label: "SETTINGS_ABOUT",
                        icon: "about",
                        options: [{
                            label: "SETTINGS_VERSION",
                            options: [{
                                label: "Theater v1.9.2 "
                            }]
                        }, {
                            label: "SETTINGS_PLATFORM",
                            options: [{
                                label: `${p.name} ${null!==(i=p.version)&&void 0!==i?i:""}`
                            }]
                        }, {
                            disabled: () => !0,
                            label: "CLEAR_DATA",
                            onClick: async () => {
                                await localStorage.clear(), location.reload()
                            }
                        }, {
                            label: "TOS",
                            onClick: e
                        }, {
                            label: "PRIVACY_POLICY",
                            onClick: t
                        }, {
                            disabled: () => "Web" === p.name,
                            label: "QUIT",
                            onClick: () => window.dispatchEvent(new Event("quit"))
                        }]
                    }, {
                        label: "VIDAA",
                        icon: "about",
                        options: (function() {
                            // Use g.animations() as reactive dependency — same signal
                            // that Animations toggle uses. Toggle it off/on to force
                            // SolidJS to re-evaluate all checked() in this section.
                            function forceRerender() {
                                var a = g.animations();
                                g.setAnimations(!a);
                                setTimeout(function() { g.setAnimations(a); }, 50);
                            }
                            function makeToggle(label, lsKey, extra, defaultOn) {
                                return {
                                    label: label,
                                    options: [{
                                        checked: () => { g.animations(); return defaultOn ? localStorage.getItem(lsKey) !== 'false' : localStorage.getItem(lsKey) === 'true'; },
                                        onClick: () => {
                                            var now = defaultOn ? localStorage.getItem(lsKey) === 'false' : localStorage.getItem(lsKey) !== 'true';
                                            localStorage.setItem(lsKey, String(now));
                                            forceRerender();
                                            if (extra) extra(now);
                                            if (window.__vidaaSettingsItems) {
                                                var c = window.__vidaaSettingsItems.find(function(i) { return i.lsKey === lsKey; });
                                                if (c && c.onToggle) c.onToggle(now);
                                            }
                                        }
                                    }]
                                };
                            }
                            return [
                                makeToggle("Force Stereo", "stremio_force_stereo"),
                                makeToggle("Audio Delay", "stremio_audio_delay_enabled"),
                                makeToggle("Auto-Play Stream", "stremio_autoplay_best"),
                                makeToggle("Mark Season", "stremio_mark_season"),
                                makeToggle("Subtitle Drift Fix", "stremio_sub_drift_fix"),
                                makeToggle("720p Zoom", "stremio_720p_zoom", function(now) {
                                    if (now) { if (window.__applyZoom) window.__applyZoom(); }
                                    else { if (window.__removeZoom) window.__removeZoom(); }
                                }),
                                makeToggle("Disable Zoom in Player", "stremio_zoom_disable_in_player"),
                                makeToggle("Torrent Streaming", "stremio_webtorrent_enabled"),
                                makeToggle("Low Memory Mode", "stremio_low_memory", null, true),
                                makeToggle("Auto-Rebuffer", "stremio_auto_rebuffer", null, true),
                                makeToggle("Stream Stats", "stremio_stream_stats", null, true),
                                makeToggle("Playback Warning", "stremio_playback_warning", null, true),
                                {
                                    disabled: () => "Web" === p.name,
                                    label: "Exit Stremio",
                                    onClick: () => { if (window.__exitApp) window.__exitApp(); else window.dispatchEvent(new Event("quit")); }
                                }
                            ];
                        })()
                    }]
                };
            var m = o(43),
                f = o.n(m),
                g = o(5920),
                y = o.n(g),
                b = o(3004),
                v = o.n(b),
                w = o(7419),
                S = o.n(w),
                C = o(1663),
                T = o.n(C),
                P = o(1612),
                U = o.n(P),
                A = o(1582),
                I = {};
            I.styleTagTransform = U(), I.setAttributes = S(), I.insert = v().bind(null, "head"), I.domAPI = y(), I.insertStyleElement = T();
            f()(A.A, I);
            const k = A.A && A.A.locals ? A.A.locals : void 0,
                E = () => {
                    const {
                        t: e
                    } = (0, r.B)(), {
                        ctx: t
                    } = (0, s.gK)(), o = (0, i.W6)(), [c, h, d] = (0, l.zD)(), [u, m, f] = (0, l.zD)(), [g, y, b] = (0, l.zD)(), v = p(h, m, y), w = e => {
                        t.updateSettings({
                            streamingServerUrl: e
                        })
                    };
                    return (0, n.EH)((() => {
                        t.isAuthenticated() || o.navigate("/login", !0)
                    })), (0, n.a0)(a.YW, {
                        get class() {
                            return k.settings
                        },
                        get children() {
                            return [(0, n.a0)(a.W1, {
                                get title() {
                                    return e("SETTINGS")
                                },
                                options: v
                            }), (0, n.a0)(n.wv, {
                                get when() {
                                    return c()
                                },
                                get children() {
                                    return (0, n.a0)(a.aF, {
                                        get title() {
                                            return e("TOS")
                                        },
                                        expand: !0,
                                        onClose: d,
                                        get children() {
                                            return (0, n.a0)(a.fs, {
                                                value: 'The present General Terms and Conditions are effective from 30 August 2020.\n\n    These General Terms and Conditions cover the Stremio owned and operated websites located at www.strem.io and www.stremio.com and our platform provided by Stremio (the “Platform”), including our mobile applications (“Apps” or “App”), and any services offered by Stremio (collectively, the “Services”).\n    1. Basic concepts\n\n    For the purposes of these General Terms and Conditions (“GTC”) the terms below shall have the following meaning:\n\n    1.1. "Provider" - is the operator of the Services, the Stremio organization.\n\n    1.2. "Stremio" is the Provider\'s software product, which Users may access through the websites www.strem.io and www.stremio.com or might be downloaded directly including but not limited to from the app-stores for iOS and Android and the use of which requires installation. Stremio is a metadata catalogue and platform for streaming of official audio and video content, available to the public.\n\n    1.3. "Addon" is a software product, which allows content to be uploaded, stored on and/or accessed through Stremio. The Addons add to Stremio metadata and grant access to Streamable Content, subtitles and other data. The “Official Addons” are developed by the Provider and are automatically accessible for the Users of Stremio, whereas “Community Addons” are developed by independent third-party developers through the use of an open-source SDK / protocol (https://github.com/Stremio/stremio-addon-sdk) and Users must manually install them. The Community Addons are accessible for manual installation once the independent developer publishes the Community Addon.\n\n    1.4. "Library" is a functionality of Stremio, allowing Users to store and keep Content Information selected by them. For the avoidance of any doubt, the Library maintained by Registered Users in their profile represents their User Content and is a personal catalogue of Content Information of their choice.\n\n    1.5. "User Content" is the Content Information which is selected, arranged and/or organized in the Library by each Registered User. The User Content does not include Streamable Content but only Content Information, arranged according to the preferences of the Registered User.\n\n    1.6. "Streamable Content" is audio and visual content, available for streaming by using Stremio.\n\n    1.7. "Information about the streamable content" or "Content Information" is information relating to certain audio-visual content, representing film, TV series, TV shows and other content, in the form of metadata relating to such audio-visual content, available through Stremio. For the avoidance of any doubt, the Content Information relating to the Streamable Content does not represent the content itself.\n\n    1.8. "Database" is the compilation and arrangement of metadata relating to the Content Information, which is compiled by the Provider and it is the sole owner of all intellectual property rights that subsist in the Database.\n\n    1.9. "User" means any natural person who acts in full legal capacity, who accesses the Services. Users can access in Guest mode or as Registered User.\n\n    1.10. "Registered User" or “You” means any User who has successfully completed the registration procedure for the use of Stremio, thereby having created a profile with a unique username and password.\n    2. General Provisions\n\n    2.1. These GTC are binding for each User who accesses, uses or downloads Stremio in whatever means possible regardless of whether he/she becomes a Registered User or not. Any use of the Services by a User is carried out in strict compliance with and under the implementation of the GTC and the applicable law. If the User disagrees with any of the conditions mentioned here, he/she shall not use Stremio nor any of the Services offered.\n\n    2.2. The Provider reserves its right to amend these GTC at any time. The new version of the GTC becomes effective from the day it is announced publicly on our Services unless stated otherwise. If Users do not agree to the changes in the GTC, they can contact the Provider at the following address legal@stremio.com for further assistance. Each time you use our Services, the current version of these GTC will apply. These GTC are accessible within our Sites and App at https://www.stremio.com/tos. Accordingly, when you use any of our Services, you should check the date of these GTC (which appears at the top) and review any changes since you last reviewed the GTC.\n    3. Registration\n\n    3.1. The scope of Services available to Registered Users and Users in Guest mode varies and is dependent only upon the Provider\'s sole discretion. Through your profile You can, among other things, use various Services that are not available to Users in Guest mode, for example storing, arranging, selecting, deselecting and removing User Content from Your Library, updating and modifying personal data in your Profile or choosing to cancel your registration for Stremio.\n\n    3.2. In order to complete a registration and create a profile, the User has to access the Websites and/or to download and install Stremio on his/her device and then fill in the electronic registration form thereof.\n\n    3.2.1. In the electronic form the User has to fill in the appropriate fields relating to username, password and press the button "I understand and agree with the terms and conditions of Stremio".\n\n    3.3. You assure that the data provided in the registration process is true, complete, accurate and not misleading and any content imported and/or shared from your Device is not infringing any intellectual property rights.\n\n    3.4. You agree neither to disclose your username and password to any third parties, nor to use the username or password of another Registered User. You are solely responsible to protect the confidentiality of your password and username. The Provider and its employees assume no responsibility if your username or password is used by another User/s.\n\n    3.5. You may use the “Local files” addon, by means of which, You can watch Your own local Streamable Content within Stremio. Your files, accessed by this function, will not be available to any other Users and will be stored solely on Your own Device\n    4. Rights and Obligations of the Community Addon Developers (“CAD”)\n\n    The Provider is not liable for hosting, storing, developing, maintaining or monitoring the content available for the Users through the Community Addons.\n\n    4.1. Without the respective right holder\'s prior explicit written consent, Community Addon Developers (“CAD”) (also falling within the definition of Users) may not stream, copy, reproduce, distribute, transmit, broadcast, display, sell, license or otherwise commercially use Streamable Content, however excluding the content the rights pertaining to which they own. For the avoidance of any doubt, CAD are also Users within the meaning of the present Terms and Conditions are subject to the Users\' obligations, prescribed herein.\n\n    4.2. CAD may make Streamable Content and Content Information that is stored on their Devices, online or cloud hosting servers, etc. available through Stremio for other Users by development and provision of Community Addons. CAD are solely responsible for such content, for its legality and the consequences of its publication and its use on and through Stremio. CAD shall further comply with Section 7 of the present GTC - “Intellectual Property”.\n    5. Rights and Obligations of Users\n\n    Users on Stremio can be registered (including CAD) or not. Please bear in mind that the Provider cannot technically suspend access to guest mode accounts due to the fact they are not registered. However, all Users are requested to execute the below-mentioned rights and obligations in good faith.\n\n    5.1. Users may access the Streamable Content and the Content Information available through Stremio provided they comply with the rights and obligations that arise for them in Section 7 of the present GTC - “Intellectual Property”.\n\n    5.2. Users agree that the Provider reserves its right to update and/or delete the Content Information in its sole discretion according to the provisions of the present GTC.\n\n    5.3. Users may access all Streamable Content and Content Information through Stremio, which access is allowed only for the purpose of using the Services on Stremio.\n\n    5.4. Users undertake not to use Stremio for:\n\n    5.4.1. monitoring, copying or extracting any information from Stremio, including its contents, graphic user interface or Database whether done mechanically or by automated means which is considered intellectual property of the Provider according to section 7 of the present GTC - “Intellectual Property”.\n\n    5.4.2. any other purpose or in ways that are non-compliant with the relevant local legislation.\n\n    5.5. Users may, at any time and in their sole discretion, terminate the use of the Services by canceling the use of Stremio, including by canceling their registration. Their contract with the Provider is deemed terminated as of the date of the registration cancellation and the Provider will terminate the access to the User\'s profile. Further, Users agree that the Provider has the right, but not the obligation to terminate their access to any and all Content Information and/or Streamable Content.\n    6. Rights and obligations of the Provider\n\n    6.1. The Provider shall take due care to enable normal use of the Services.\n\n    6.2. The Provider does not guarantee that:\n\n    6.2.1. the access to the Services will always be uninterrupted, unlimited and/or seamless.\n\n    6.2.2. any data or content, including Content Information and User Content, is complete, accurate, true and without error. In this regard, the Provider shall not be liable in the event that the information contained in Stremio is not correct or accurate at any given time, and where as a result of such incorrect or inaccurate information third parties have suffered damages and/or lost profits.\n\n    6.3. Users agree to take care of any technical equipment and Internet connectivity that may be necessary for access to the Services. The Provider shall not be responsible for any technical problems and malfunction, depriving the Users from the use of the granted Services, caused by the operation of their equipment (hardware or software problem, a problem with the Internet connection, etc.).\n\n    6.4. The Provider may in its sole discretion and without sending a warning or notice, to suspend the Users access to the Services, to certain functionalities or to the User Content, where the latter is or might be in conflict with these GTC and/or any applicable law, and/or any rules of morality and decency or any other peremptory standards.\n\n    6.5. The Provider is under no obligation to keep or restore User Content, Content Information or other information relating to Streamable Content, which either the User, another User or any third party (including the Provider), no matter why, have deleted.\n\n    6.6. The Provider has the right to make certain non-personalized publications on Stremio and the Website, including in the Registered Users\' profiles, such as hyperlinks, banners and other forms of advertising for products and services offered either by the Provider or by third parties, as well as hyperlinks and banner ads linking to websites outside the Provider\'s control. Users agree and acknowledge that the Provider is not responsible for the content, accuracy and legality of such websites, services or resources that are made available to Users in this way, and the content, accuracy and legality of the information contained in any Commercial Communications sent to and received by the Users.\n\n    6.7. The Provider is not responsible for the Content Information which Registered Users have added to the Library. The content in the Library represents their personal choice.\n    7. Intellectual Property\n    Intellectual Property Rights and Obligations of CAD\n\n    7.1. For the avoidance of any doubt, CAD represent and warrant to the Provider that they own all intellectual property rights or the rights to use the Streamable Content and to add Content Information to Stremio, and that they have obtained all necessary licenses, consents, permits and approvals for their reproduction and use in Stremio for the purpose of these GTC, including to make it available to any third parties on Stremio in a manner allowing them access to the content from a place and at a time individually chosen by them. In addition, they guarantee that they have obtained the consent of the copyright holders, if any, of Content Information and Streamable Content made available by them with respect to its use, distribution and reproduction through Stremio. CAD undertake neither to add to, nor to make available to Users Content Information or Streamable Content on Stremio in a way that is contrary to any applicable laws and legislations, these GTC, the Internet ethics and to any rules of morality.\n\n    7.2. By adding Content Information and making accessible Streamable Audio-visual Content on Stremio, CAD agree and grant to all other Users, a non-exclusive right to use and access the content for non-commercial use by using the Services of Stremio, free of charge within the scope of their own license. CAD could impose territorial restrictions in the license at their own discretion. The right granted in the preceding paragraph shall last for the time period during which the said Content Information and/or Streamable Content remains available through Stremio for a reasonable time after its removal or deletion. In case CAD are no longer entitled to use the content as specified in this section 7.1, they undertake to cease the access of the Users to the Content Information and to the Streamable Content immediately after receiving a notice that they have been deprived from the rights in question.\n\n    7.3. CAD retain their rights (intellectual property rights or rights to use) to their content upon making it available in Stremio.\n\n    7.4. CAD agree that once they delete the Content Information or the Streamable Content previously made available on Stremio, Registered Users who have acquired access to it before the deletion may still have such access.\n    Intellectual Property Rights and Obligations of the Users\n\n    7.5. By using the Services hereunder Users have access to information about various contents which are subject to the copyright of third parties. Users acknowledge that their access to this information serves the sole purpose to use the granted Services in accordance with these GTC for personal, non-commercial use only and are granted no right to copy, store, reproduce, modify, adapt, and to attempt any of those acts to the content accessed and used, except when they share their activities on Stremio relating to a particular content or on social networks (such as Facebook, Google+, Twitter, e-mail, etc.).\n\n    7.6. Users may, by means of the sharing function relating to the Internet or to social media networks (such as Facebook, Google+, Pinterest, Twitter, e-mail, etc.), share Content Information of their choice. When using this function, Users may not distribute Content Information or any content otherwise explored through the Services for any commercial purposes.\n\n    7.7. Users agree that the Provider has no objective means and hence, no obligation to control the way in which they use the Content Information and/or the Streamable Content and bears no responsibility whatsoever for such use.\n    Intellectual Property Rights and Obligations of the Provider\n\n    7.8. The Provider is not responsible for the Content Information, nor for the Streamable Content, and their compliance with the applicable law and whether their availability and distribution in Stremio affects or may affect the rights of any third parties (including intellectual property rights, personal rights, other property rights, etc.). The Provider assumes no obligation to review, monitor, control or examine the Content Information, and/or the Streamable Content, for compliance with the applicable law and these GTC. The Provider is not responsible for any content or information that is stored, streamed, conveyed or published through Stremio. The Provider has no obligation to actively seek facts or circumstances, indicating illegal activity carried out by any of the Users or CAD through the use of the Services and resulting in any violations of the applicable laws or these GTC.\n\n    7.9. However, if the Provider obtains knowledge of the unlawful nature of those data or of that User\'s activities, the Provider shall act expeditiously to remove or to disable access to the data concerned and/or to disable the access to a profile, terminate the User\'s registration and to delete their Library and User Content without prior notice. The Provider has the right to remove or restrict access to any Addons in its own discretion in case it has reason to believe that the said Addon infringes any intellectual property right without examining the circumstances in question. The Provider is not liable for any damages and/or lost profits resulting from the removal or the restriction of the access to any content or profile available through Stremio. Should the Provider consider that any data is contrary to the applicable legislation, these GTC or the rights and legitimate interests of third parties, the Provider will suspend, restrict or amend the Services provided to Users, and will notify the right holders and the competent authorities in case the User\'s behavior and/or use of the Services is likely to constitute a criminal or administrative offence, if the Provider reasonably believes that the behavior of the User violates any provisions of the applicable legislation, these GTC or the rights and legitimate interests of third parties.\n\n    7.10. The websites and applications belong to and are operated by the Provider. Each component of the websites and applications and the layout itself, including but not limited to Database, logos, trademarks, domain names, etc. which appear in any way on the websites or applications, are protected by the current laws with subject intellectual property. Therefore, they belong strictly and solely to the Provider and the use of any component is subject to prior authorisation. None of the above-mentioned components included on the Website and Platform can be reproduced, copied, edited, transmitted, downloaded or distributed in any way without the prior written consent of the Provider.\n\n    7.11. Section 7.10. above does not in any way exclude or interfere with the rights granted according to the present section. Stremio is released under the open-source free software GPL. Under this license other developers have the right to use, copy, modify and distribute the source code of Stremio for any purpose under the GNU General Public License as published by the Free Software Foundation. The license requires preservation of the copyright and license notice of the software. The Provider is not liable in any way for the diffusion and public access to the amended/modified by other developers source code files.\n    8. Limitation of Provider\'s Liability\n\n    8.1. The Provider is not responsible for the Content Information, the Streamable Audio-visual Content, as well as for the activities of the Users and/or the CAD in connection with the Services. Furthermore, the Provider is not responsible for any damages and/or lost profits caused to the Users, including but not limited to CAD upon access to or use of such content available through Stremio.\n\n    8.2. The Provider is not liable for its failure to provide the Services due to circumstances beyond the Provider\'s control, including but not limited to cases of force majeure, fortuitous events, problems in the network, or circumstances arising out of problems with the Users\' equipment and in case of unauthorized third party access or intervention to the functioning of Stremio.\n\n    8.3. The Provider is not liable to Users, including but not limited to CAD or to any third party for damages and/or lost profits incurred due to the use, availability, termination, suspension, modification or limitation of the Services, deletion, modification, loss, inaccuracies or incompleteness of the information used or made available through Stremio.\n    9. Indemnification\n\n    9.1. The Provider shall not be liable for any direct or indirect damages and/or lost profits sustained by Users or any third parties as a consequence of the suspension, modification or limitation of the Services, the termination of the contract or the provision of information to or the execution of orders of the competent authorities when such are result of the compliance with the provisions of the applicable laws and/or the present GTC.\n\n    9.2. Users, including but not limited to CAD, agree to fully indemnify the Provider and any third parties for any direct or indirect damage and/or lost profit sustained as a result of claims by and/or compensations paid to third parties in connection with content that Users, including but not limited to CAD have made available to third parties or made available through use of the Services in violation of the applicable laws, these GTC or rules of morality and decency, as well as in connection with any other violations of their obligations hereunder.\n\n    9.3.The obligations of all parties under this section 9 will survive the validity of any registration and will continue to have effect after termination of each and every contract (i.e. the use of the Services) with the Provider and after potential future termination of the Services for the maximum time allowed under the applicable legislation.\n    10. Other conditions\n\n    10.1. If any provision of the GTC is declared void, invalid or unenforceable, the other provisions of the GTC and the rights and obligations of Users, Registered Users, CAD and the Provider arising therefrom, shall remain in full force and effect. Any provisions, declared void, contestable or unenforceable will be deemed not to have been part of these GTC and will be replaced by mandatory rules of law, practice and customs.\n\n    10.2. Any disputes not addressed in these GTC, shall be resolved under the provisions of the applicable legislation.\n\n    10.3. In case of disputes arising under the GTC, including disputes regarding their existence or non-existence, implementation, validity or termination, the parties will make all reasonable efforts to resolve them amicably through negotiations and mutual concessions. In case the parties fail to reach an agreement within one month of the occurrence of a dispute, the dispute should be referred for resolution to the competent courts.\n\n    10.4. The YouTube official addon is subject to external Terms and Conditions, see YouTube Terms of Services for more information.\n',
                                                autoFocus: !0
                                            })
                                        }
                                    })
                                }
                            }), (0, n.a0)(n.wv, {
                                get when() {
                                    return u()
                                },
                                get children() {
                                    return (0, n.a0)(a.aF, {
                                        get title() {
                                            return e("PRIVACY_POLICY")
                                        },
                                        expand: !0,
                                        onClose: f,
                                        get children() {
                                            return (0, n.a0)(a.fs, {
                                                value: 'The present Privacy Policy is effective as of 30 August 2020\n1. Introduction\n\nAt Stremio (“Stremio”, “we”, “us” or “our”) we take your privacy and the security of your information very seriously.\n\nThis Privacy Policy (“Policy”) covers the Stremio owned and operated sites located at www.strem.io and www.stremio.com (the “Sites”) and our platform provided by Stremio (the “Platform”), including our mobile applications (“Apps” or “App”), and any services offered by Stremio (collectively, the “Services”). This Privacy Policy is available at www.stremio.com and governs your access to the Services. Unless otherwise defined herein, capitalized terms shall have the meaning assigned to such terms in the General Terms and Conditions.\n\nIf you have any questions regarding this Policy please contact us at office@stremio.com. You can also contact our Data Protection Officer at dpo@stremio.com.\n\nThe Policy describes the types of information we gather from Service Users, including people using our Services and from individual users (“you” or “users”) interacting with the Services, and how we use, transfer, and secure such information. By using any of the Services, you agree to be bound by this Policy. This Policy does not govern information we receive from third parties who are not Service Users. If you do not agree to the terms of this Policy, please do not use any of our Services. The new version of the Privacy Policy becomes effective from the day it is announced publicly on our Services unless stated otherwise. Each time you use our Services, the current version of this Policy will apply. This Policy is accessible within our Sites and App at Privacy Policy and available at www.stremio.com/privacy. Accordingly, when you use any of our Services, you should check the date of this Policy (which appears at the top) and review any changes since you last reviewed the Policy.\n2. Terms\n\nFor the purposes of this Privacy Policy, the terms related to personal data used within the present document have the meanings arranged in the General Data Protection Regulation (EC) 2016/679. Any other relevant definition is coordinated with the Terms of Use, applicable for our Services.\n3. Types of Data We Collect, methods of collection\n\nIMPORTANT: We do not collect any history or logs of what addons/sources you use for streaming! Furthermore, if you login as a Guest User, no personal data is collected whatsoever.\n\nUsers directly provide Us with most of the data that We collect and process.\n\nData provided by you:\n\nStremio collects data in order to create an account and provide access to our Services, including our Site, Platform and App. You provide us with your email address and password to create an account. These are all stored in order to create your account and provide you with the necessary access. Your email is used for account recovery purposes as well as for contacting support. Your username is your email address. Your password is stored in a secure, cryptographically hashed state.\n\nLog information:\n\nWhen you use our Services, some data is automatically collected. Such data could include your computer\'s Internet Protocol (“IP”) address, operating system, type and language, device identifier numbers, and the time and date of your use. The log information is collected to provide a stable, secure and pleasant experience for users on the Services and to ensure the performance, correctness, security and reliability of our Services.\n\nCustomer support Data:\n\nUsers may contact us with the purpose of providing technical support. Users may provide name, email address, further contact details and any other additional information which the user decides to disclose to us for customer support.\n\nAnalytics data:\n\nAnalytical data is collected in an anonymized manner and aggregated in order to improve the performance, marketing efforts and quality of our services.\n\nWe may obtain information from other sources:\n\nData collected by Third Parties:\n\nWe may obtain information from other sources. For example, when you use your account through a social network such as Facebook and their Facebook Login feature, we will obtain access to certain information including your name, profile picture and email in accordance with the authorization procedures determined by said source.\n\nOther similar sources may include Google and iTunes Store in accordance with their authorization procedures. From Google and iTunes Store we collect indirect identificators such as type and version of the operational system used, time of installation of the Services, country, etc. A single indirect identificator cannot be used to identify a User but combined with other indirect identificators it may be possible to identify a User.\n\nAll of the third party solutions we use adhere to the latest data protection laws and best practices.\n\nWe use the personal data only for the purposes mentioned above. In case We intend to use Your personal data for a purpose other than the initial one, We shall provide the data subjects with information prior to the actions regarding the new purpose, the legal basis and the retention period.\n4. Storage and deletion of personal data\n\nWe collect and store your personal data on the territory of the European Economic Area (EEA). We enforce any and all necessary measures to protect and guarantee the safety of the personal data if the latter is transferred in a country outside the EEA.\n\nOnce the retention period lapses, We delete all personal data, together with any existing copies, unless the Union or Member State laws require storage of the personal data. We may hold your data for extended periods of time for the purpose of complying with legal requirements, legal requests, conducted investigations, or investigations of possible violations of our terms and policies or otherwise to prevent harm.\n\nWe take all necessary technical and organizational measures for the proper deletion of your personal data. The personal data is deleted according to our retention schedule and technical mechanisms available from all production information systems and all backup systems.\n5. Cookies\n\nCookies are small pieces of data under the form of text files, which are stored on your device. They allow recognition of the browser and storage of certain information.\n\nThe only cookies we use are Google Analytics and Facebook Pixel which collect statistical information such as country of access and time spent on the Services. They are collected for statistical purposes, to improve the performance, marketing efforts and quality of our services.\n6. Your rights and how you can exercise them\n\nYou have the right to:\n\n    Request from us access to the personal data that we hold about you in a portable format.\n    Withdraw your consent when it is the legal basis for collection of data.\n    Request from us correction of any collected personal data. The information may include only the subject of your personal data collection.\n    Receive a copy of your personal data in electronic format.\n    “The right to be forgotten”- you have the right to request the deletion of your personal data at any time (the right is not absolute).\n    Receive information from Us about Our activities in connection to your personal data, including the purposes of collection and storage, the period of time for storage, the methods of collecting, the presence of automated processing, etc.\n    Delete your account at any time.\n    Receive your data and transfer them to another controller.\n    You have the right to lodge a complaint with a supervisory authority, in particular in the Member State of your habitual residence, place of work or place of the alleged infringement if you consider that there is personal data breach.\n\nTo exercise your rights you can always contact us by sending mail at dpo@stremio.com to our Data Protection Officer (DPO), or contact us at office@stremio.com.\n\nFor managing your account information, you can use the profile settings feature in our services. You may delete your account from the User Panel hosted at www.stremio.com.\n7. Sharing of Personal Information with Third Parties\n\nIMPORTANT: We do not collect any history or logs of what addons/sources you use for streaming! Furthermore, if you login as a Guest User, no personal data will be collected whatsoever.\n\nWe do not sell, trade or otherwise share Personal Information with third parties for the marketing purposes of the third party.\n\n    We may transfer Personal Information to third party service providers (see list below) for providing the Services. These third party service providers are not authorized to retain, share, store or use the Personal Information for any purposes other than to provide the services they have been hired to provide.\n    Analytical personal data is shared with partnering third-party service providers for the purposes of improving the performance, marketing efforts and quality of our services, conducting error-monitoring to help discover and prioritize errors in real-time:\n    Google Analytics\n    BigQuery\n    Sentry\n    YouTube\n    Due to the use of these third-party services, users should also be aware of the Google Privacy Policy and Sentry Privacy Policy.\n    We may elect to transfer your Personal Information to third parties under special circumstances to: (i) to comply with a legal requirement, judicial proceeding, court order, or legal process served on Stremio or its affiliates solely when required under the applicable law, (ii) to investigate a possible crime, such as fraud or identity theft; (iii) in connection with the sale, purchase, merger, reorganization, liquidation or dissolution of Stremio; (iv) when we believe it is necessary to protect the rights, property, or safety of Stremio or other persons, or (v) as otherwise required or permitted by law, including any contractual obligations of Stremio.\n\n8. Children and Privacy\n\nOur services are not directed towards children and you may not use them if you have not reached full legal capacity in accordance with the legislation applicable for the corresponding country.\n\nWe do not knowingly collect, target or allow the use of our services to persons under the age of full legal capacity.\n\nIf you are under the age of full legal capacity, please do not use our services and do not send us any personal data. If you believe that we might have any data from or about a person under the age of full legal capacity, please contact us.\n\nWe will delete all personal data of the above-mentioned persons for which we become aware that they do not have the necessary legal capacity.\n\nWe shall not be held liable in case a person provides incorrect and false data for the completed years.\n9. Security and breach measures\n\nWe undertake all necessary technological, organizational and technical measures to protect your personal data.\n\nWe implement measures such as pseudonymisation and encryption of personal data in order to ensure a level of security which is appropriate to the risk. Some information is stored in such a form that could not be used to identify you directly. Your password is stored in a secure, cryptographically hashed state. Your personal data is stored on protected servers. Our Services have SSL certificates which represent Internet security protocols - they provide additional guarantee for the safe use of our Services.The servers and the access to your personal data is strictly controlled and limited solely to a limited number of people.\n\nIn case of personal data breach, We will undertake every possible action in an appropriate and timely manner, to avoid any material or non-material damage to the data subjects. Breaches in the security may include identity theft, identity fraud, limitation of rights, unauthorised access to your account, loss of confidentiality of personal data, etc. We have undertaken measures to ensure the ability to restore the availability and access to personal data in a timely manner in the event of physical or technical incident. As soon as the controller becomes aware of the breach, Users and the competent authorities will be notified immediately. You may be asked to follow certain instructions for prevention of breaches including but not limited to password or username change.\n\nStremio uses Google services (Google Analytics, BigQuery, YouTube), as such, the Google Security Settings should also be taken into consideration.\n10. Account Deletion\n\nIn order to delete your Stremio account you must:\n\n    Log in to the User Dashboard\n    Scroll down to the "Delete Account" section\n    Press the "DELETE ACCOUNT" button (this action cannot be undone)\n\n11. Supervisory authority\n\nIf you have any questions regarding the present Policy, please connect to us through the following email addresses: office@stremio.com or dpo@stremio.com\n',
                                                autoFocus: !0
                                            })
                                        }
                                    })
                                }
                            }), (0, n.a0)(n.wv, {
                                get when() {
                                    return g()
                                },
                                get children() {
                                    return (0, n.a0)(a.aF, {
                                        get title() {
                                            return e("SETTINGS_SERVER_CONFIGURE_INPUT")
                                        },
                                        onClose: b,
                                        get children() {
                                            return [(0, n.a0)(a.ks, {
                                                get value() {
                                                    return t.settings().streamingServerUrl
                                                },
                                                autoFocus: !0,
                                                onChange: w
                                            }), (0, n.a0)(a.$n, {
                                                get label() {
                                                    return e("BUTTON_CONFIRM")
                                                },
                                                onPress: b
                                            })]
                                        }
                                    })
                                }
                            })]
                        }
                    })
                }
        }
    }
]);