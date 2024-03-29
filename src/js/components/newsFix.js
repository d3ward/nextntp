/* News Data Fix */
!(function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
          ? define(e)
          : (t.timeago = e())
})(this, function () {
    'use strict'
    var t = 'second_minute_hour_day_week_month_year'.split('_'),
        e = '秒_分钟_小时_天_周_月_年'.split('_'),
        n = [60, 60, 24, 7, 365 / 7 / 12, 12],
        r = {
            en: function (e, n) {
                if (0 === n) return ['just now', 'right now']
                var r = t[parseInt(n / 2)]
                return (
                    e > 1 && (r += 's'),
                    [e + ' ' + r + ' ago', 'in ' + e + ' ' + r]
                )
            },
            zh_CN: function (t, n) {
                if (0 === n) return ['刚刚', '片刻后']
                var r = e[parseInt(n / 2)]
                return [t + ' ' + r + '前', t + ' ' + r + '后']
            }
        },
        a = function (t) {
            return parseInt(t)
        },
        i = function (t) {
            return t instanceof Date
                ? t
                : !isNaN(t) || /^\d+$/.test(t)
                  ? new Date(a(t))
                  : ((t = (t || '')
                        .trim()
                        .replace(/\.\d+/, '')
                        .replace(/-/, '/')
                        .replace(/-/, '/')
                        .replace(/(\d)T(\d)/, '$1 $2')
                        .replace(/Z/, ' UTC')
                        .replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2')),
                    new Date(t))
        },
        o = function (t, e, i) {
            e = r[e] ? e : r[i] ? i : 'en'
            for (
                var o = 0, u = t < 0 ? 1 : 0, c = (t = Math.abs(t));
                t >= n[o] && o < n.length;
                o++
            )
                t /= n[o]
            return (
                (t = a(t)) > (0 === (o *= 2) ? 9 : 1) && (o += 1),
                r[e](t, o, c)[u].replace('%s', t)
            )
        },
        u = function (t, e) {
            return ((e = e ? i(e) : new Date()) - i(t)) / 1e3
        },
        c = function (t, e) {
            return t.getAttribute
                ? t.getAttribute(e)
                : t.attr
                  ? t.attr(e)
                  : void 0
        },
        f = function (t) {
            return c(t, 'data-timeago') || c(t, 'datetime')
        },
        d = [],
        l = function (t) {
            t && (clearTimeout(t), delete d[t])
        },
        s = function (t) {
            if (t) l(c(t, 'data-tid'))
            else for (var e in d) l(e)
        },
        h = (function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]
                    ;(r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        })()
    var p = (function () {
            function t(e, n) {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t),
                    (this.nowDate = e),
                    (this.defaultLocale = n || 'en')
            }
            return (
                h(t, [
                    {
                        key: 'setLocale',
                        value: function (t) {
                            this.defaultLocale = t
                        }
                    },
                    {
                        key: 'doRender',
                        value: function (t, e, r) {
                            var a = this,
                                i = u(e, this.nowDate)
                            t.innerHTML = o(i, r, this.defaultLocale)
                            var c = (function (t, e) {
                                var n = setTimeout(function () {
                                    l(n), t()
                                }, e)
                                return (d[n] = 0), n
                            })(
                                function () {
                                    a.doRender(t, e, r)
                                },
                                Math.min(
                                    1e3 *
                                        (function (t) {
                                            for (
                                                var e = 1,
                                                    r = 0,
                                                    a = Math.abs(t);
                                                t >= n[r] && r < n.length;
                                                r++
                                            )
                                                (t /= n[r]), (e *= n[r])
                                            return (
                                                (a = (a %= e) ? e - a : e),
                                                Math.ceil(a)
                                            )
                                        })(i),
                                    2147483647
                                )
                            )
                            !(function (t, e) {
                                t.setAttribute
                                    ? t.setAttribute('data-tid', e)
                                    : t.attr && t.attr('data-tid', e)
                            })(t, c)
                        }
                    },
                    {
                        key: 'render',
                        value: function (t, e) {
                            void 0 === t.length && (t = [t])
                            for (
                                var n = void 0, r = 0, a = t.length;
                                r < a;
                                r++
                            )
                                (n = t[r]), s(n), this.doRender(n, f(n), e)
                        }
                    },
                    {
                        key: 'format',
                        value: function (t, e) {
                            return o(u(t, this.nowDate), e, this.defaultLocale)
                        }
                    }
                ]),
                t
            )
        })(),
        v = function (t, e) {
            return new p(t, e)
        }
    return (
        (v.register = function (t, e) {
            r[t] = e
        }),
        (v.cancel = s),
        v
    )
})
