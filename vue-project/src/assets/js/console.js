/*! myconsole-console.js v2.0.1 (c) 2016-2020 myconsole Group */
!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t(require('myconsole')))
        : 'function' == typeof define && define.amd
          ? define('VConsole', ['myconsole'], t)
          : 'object' == typeof exports
            ? (exports.VConsole = t(require('myconsole')))
            : (e.VConsole = t(e.myconsole));
})(window, function (__WEBPACK_EXTERNAL_MODULE__34__) {
    return (function (e) {
        var t = {};
        function n(o) {
            if (t[o]) return t[o].exports;
            var r = (t[o] = { i: o, l: !1, exports: {} });
            return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
            }),
            (n.r = function (e) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
                var o = Object.create(null);
                if (
                    (n.r(o),
                    Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
                    2 & t && 'string' != typeof e)
                )
                    for (var r in e)
                        n.d(
                            o,
                            r,
                            function (t) {
                                return e[t];
                            }.bind(null, r),
                        );
                return o;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, 'a', t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ''),
            n((n.s = 49))
        );
    })([
        function (e, t, n) {
            'use strict';
            var o = n(1);
            var r = {
                one: function (e, t) {
                    try {
                        return (t || document).querySelector(e) || void 0;
                    } catch (e) {
                        return;
                    }
                },
                all: function (e, t) {
                    try {
                        var n = (t || document).querySelectorAll(e);
                        return Array.from(n);
                    } catch (e) {
                        return [];
                    }
                },
                addClass: function (e, t) {
                    if (e) {
                        Object(o.isArray)(e) || (e = [e]);
                        for (var n = 0; n < e.length; n++) {
                            var r = (e[n].className || '').split(' ');
                            r.indexOf(t) > -1 || (r.push(t), (e[n].className = r.join(' ')));
                        }
                    }
                },
                removeClass: function (e, t) {
                    if (e) {
                        Object(o.isArray)(e) || (e = [e]);
                        for (var n = 0; n < e.length; n++) {
                            for (var r = e[n].className.split(' '), i = 0; i < r.length; i++) r[i] == t && (r[i] = '');
                            e[n].className = r.join(' ').trim();
                        }
                    }
                },
                hasClass: function (e, t) {
                    return !(!e || !e.classList) && e.classList.contains(t);
                },
                bind: function (e, t, n, r) {
                    e &&
                        (Object(o.isArray)(e) || (e = [e]),
                        e.forEach(function (e) {
                            e.addEventListener(t, n, !!r);
                        }));
                },
                delegate: function (e, t, n, o) {
                    e &&
                        e.addEventListener(
                            t,
                            function (t) {
                                var i = r.all(n, e);
                                if (i)
                                    e: for (var a = 0; a < i.length; a++)
                                        for (var c = t.target; c; ) {
                                            if (c == i[a]) {
                                                o.call(c, t);
                                                break e;
                                            }
                                            if ((c = c.parentNode) == e) break;
                                        }
                            },
                            !1,
                        );
                },
                render: function (e, t, n) {
                    var o = /\{\{([^\}]+)\}\}/g,
                        r = '',
                        i = '',
                        a = 0,
                        c = [],
                        l = function (e, t) {
                            '' !== e &&
                                (t
                                    ? e.match(/^ ?else/g)
                                        ? (r += '} ' + e + ' {\n')
                                        : e.match(/\/(if|for|switch)/g)
                                          ? (r += '}\n')
                                          : e.match(/^ ?if|for|switch/g)
                                            ? (r += e + ' {\n')
                                            : e.match(/^ ?(break|continue) ?$/g)
                                              ? (r += e + ';\n')
                                              : e.match(/^ ?(case|default)/g)
                                                ? (r += e + ':\n')
                                                : (r += 'arr.push(' + e + ');\n')
                                    : (r += 'arr.push("' + e.replace(/"/g, '\\"') + '");\n'));
                        };
                    for (
                        window.__mito_data = t,
                            window.__mito_code = '',
                            window.__mito_result = '',
                            e = (e = e.replace(/(\{\{ ?switch(.+?)\}\})[\r\n\t ]+\{\{/g, '$1{{'))
                                .replace(/^[\r\n]/, '')
                                .replace(/\n/g, '\\\n')
                                .replace(/\r/g, '\\\r'),
                            i = '(function(){\n',
                            r = 'var arr = [];\n';
                        (c = o.exec(e));

                    )
                        l(e.slice(a, c.index), !1), l(c[1], !0), (a = c.index + c[0].length);
                    l(e.substr(a, e.length - a), !1),
                        (i += r = 'with (__mito_data) {\n' + (r += '__mito_result = arr.join("");') + '\n}'),
                        (i += '})();');
                    var s = document.getElementsByTagName('script'),
                        d = '';
                    s.length > 0 && (d = s[0].nonce || '');
                    var u = document.createElement('SCRIPT');
                    (u.innerHTML = i), u.setAttribute('nonce', d), document.documentElement.appendChild(u);
                    var v = __mito_result;
                    if ((document.documentElement.removeChild(u), !n)) {
                        var f = document.createElement('DIV');
                        (f.innerHTML = v), (v = f.children[0]);
                    }
                    return v;
                },
            };
            t.a = r;
        },
        function (e, t, n) {
            'use strict';
            function o(e) {
                return (o =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function r(e) {
                var t = e > 0 ? new Date(e) : new Date(),
                    n = t.getDate() < 10 ? '0' + t.getDate() : t.getDate(),
                    o = t.getMonth() < 9 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1,
                    r = t.getFullYear(),
                    i = t.getHours() < 10 ? '0' + t.getHours() : t.getHours(),
                    a = t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes(),
                    c = t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds(),
                    l = t.getMilliseconds() < 10 ? '0' + t.getMilliseconds() : t.getMilliseconds();
                return (
                    l < 100 && (l = '0' + l),
                    { time: +t, year: r, month: o, day: n, hour: i, minute: a, second: c, millisecond: l }
                );
            }
            function i(e) {
                return '[object Number]' == Object.prototype.toString.call(e);
            }
            function a(e) {
                return '[object String]' == Object.prototype.toString.call(e);
            }
            function c(e) {
                return '[object Array]' == Object.prototype.toString.call(e);
            }
            function l(e) {
                return '[object Boolean]' == Object.prototype.toString.call(e);
            }
            function s(e) {
                return void 0 === e;
            }
            function d(e) {
                return null === e;
            }
            function u(e) {
                return '[object Symbol]' == Object.prototype.toString.call(e);
            }
            function v(e) {
                return !(
                    '[object Object]' != Object.prototype.toString.call(e) &&
                    (i(e) || a(e) || l(e) || c(e) || d(e) || f(e) || s(e) || u(e))
                );
            }
            function f(e) {
                return '[object Function]' == Object.prototype.toString.call(e);
            }
            function p(e) {
                return 'object' === ('undefined' == typeof HTMLElement ? 'undefined' : o(HTMLElement))
                    ? e instanceof HTMLElement
                    : e && 'object' === o(e) && null !== e && 1 === e.nodeType && 'string' == typeof e.nodeName;
            }
            function b(e) {
                var t = Object.prototype.toString.call(e);
                return '[object global]' == t || '[object Window]' == t || '[object DOMWindow]' == t;
            }
            function h(e) {
                var t,
                    n = Object.prototype.hasOwnProperty;
                if (!e || 'object' !== o(e) || e.nodeType || b(e)) return !1;
                try {
                    if (e.constructor && !n.call(e, 'constructor') && !n.call(e.constructor.prototype, 'isPrototypeOf'))
                        return !1;
                } catch (e) {
                    return !1;
                }
                for (t in e);
                return void 0 === t || n.call(e, t);
            }
            function m(e) {
                return document.createElement('a').appendChild(document.createTextNode(e)).parentNode.innerHTML;
            }
            function g(e) {
                if (!v(e) && !c(e)) return JSON.stringify(e);
                var t = '{',
                    n = '}';
                c(e) && ((t = '['), (n = ']'));
                for (var o = t, r = _(e), i = 0; i < r.length; i++) {
                    var a = r[i],
                        l = e[a];
                    try {
                        c(e) ||
                            (v(a) || c(a) || u(a) ? (o += Object.prototype.toString.call(a)) : (o += a), (o += ': ')),
                            c(l)
                                ? (o += 'Array[' + l.length + ']')
                                : v(l) || u(l) || f(l)
                                  ? (o += Object.prototype.toString.call(l))
                                  : (o += JSON.stringify(l)),
                            i < r.length - 1 && (o += ', ');
                    } catch (e) {
                        continue;
                    }
                }
                return (o += n);
            }
            function _(e) {
                if (!v(e) && !c(e)) return [];
                if (c(e)) {
                    var t = [];
                    return (
                        e.forEach(function (e, n) {
                            t.push(n);
                        }),
                        t
                    );
                }
                return Object.getOwnPropertyNames(e).sort();
            }
            function y(e) {
                return Object.prototype.toString.call(e).replace('[object ', '').replace(']', '');
            }
            function w(e, t) {
                window.localStorage && ((e = 'vConsole_' + e), localStorage.setItem(e, t));
            }
            function k(e) {
                if (window.localStorage) return (e = 'vConsole_' + e), localStorage.getItem(e);
            }
            n.r(t),
                n.d(t, 'getDate', function () {
                    return r;
                }),
                n.d(t, 'isNumber', function () {
                    return i;
                }),
                n.d(t, 'isString', function () {
                    return a;
                }),
                n.d(t, 'isArray', function () {
                    return c;
                }),
                n.d(t, 'isBoolean', function () {
                    return l;
                }),
                n.d(t, 'isUndefined', function () {
                    return s;
                }),
                n.d(t, 'isNull', function () {
                    return d;
                }),
                n.d(t, 'isSymbol', function () {
                    return u;
                }),
                n.d(t, 'isObject', function () {
                    return v;
                }),
                n.d(t, 'isFunction', function () {
                    return f;
                }),
                n.d(t, 'isElement', function () {
                    return p;
                }),
                n.d(t, 'isWindow', function () {
                    return b;
                }),
                n.d(t, 'isPlainObject', function () {
                    return h;
                }),
                n.d(t, 'htmlEncode', function () {
                    return m;
                }),
                n.d(t, 'JSONStringify', function () {
                    return g;
                }),
                n.d(t, 'getObjAllKeys', function () {
                    return _;
                }),
                n.d(t, 'getObjName', function () {
                    return y;
                }),
                n.d(t, 'setStorage', function () {
                    return w;
                }),
                n.d(t, 'getStorage', function () {
                    return k;
                });
        },
        function (e, t, n) {
            'use strict';
            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            var i = (function () {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'newPlugin';
                    o(this, e), (this.id = t), (this.name = n), (this.isReady = !1), (this.eventList = {});
                }
                var t, n, i;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'on',
                            value: function (e, t) {
                                return (this.eventList[e] = t), this;
                            },
                        },
                        {
                            key: 'trigger',
                            value: function (e, t) {
                                if ('function' == typeof this.eventList[e]) this.eventList[e].call(this, t);
                                else {
                                    var n = 'on' + e.charAt(0).toUpperCase() + e.slice(1);
                                    'function' == typeof this[n] && this[n].call(this, t);
                                }
                                return this;
                            },
                        },
                        {
                            key: 'id',
                            get: function () {
                                return this._id;
                            },
                            set: function (e) {
                                if (!e) throw 'Plugin ID cannot be empty';
                                this._id = e.toLowerCase();
                            },
                        },
                        {
                            key: 'name',
                            get: function () {
                                return this._name;
                            },
                            set: function (e) {
                                if (!e) throw 'Plugin name cannot be empty';
                                this._name = e;
                            },
                        },
                        {
                            key: 'vConsole',
                            get: function () {
                                return this._vConsole || void 0;
                            },
                            set: function (e) {
                                if (!e) throw 'vConsole cannot be empty';
                                this._vConsole = e;
                            },
                        },
                    ]) && r(t.prototype, n),
                    i && r(t, i),
                    e
                );
            })();
            t.a = i;
        },
        function (e, t, n) {
            'use strict';
            var o = n(1),
                r = n(0),
                i = n(2),
                a = n(23),
                c = n.n(a),
                l = n(12),
                s = n.n(l),
                d = n(5),
                u = n.n(d);
            function v(e) {
                return (v =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function b(e, t) {
                return (b =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function h(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = g(e);
                    if (t) {
                        var r = g(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return m(this, n);
                };
            }
            function m(e, t) {
                return !t || ('object' !== v(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return e;
                      })(e)
                    : t;
            }
            function g(e) {
                return (g = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var _,
                y,
                w,
                k = [],
                x = {},
                E = (function (e) {
                    !(function (e, t) {
                        if ('function' != typeof t && null !== t)
                            throw new TypeError('Super expression must either be null or a function');
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: { value: e, writable: !0, configurable: !0 },
                        })),
                            t && b(e, t);
                    })(l, e);
                    var t,
                        n,
                        i,
                        a = h(l);
                    function l() {
                        var e;
                        f(this, l);
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        return (
                            (e = a.call.apply(a, [this].concat(n))),
                            k.push(e.id),
                            (e.tplTabbox = ''),
                            (e.allowUnformattedLog = !0),
                            (e.isReady = !1),
                            (e.isShow = !1),
                            (e.$tabbox = null),
                            (e.console = {}),
                            (e.logList = []),
                            (e.isInBottom = !0),
                            (e.maxLogNumber = 1e3),
                            (e.logNumber = 0),
                            e.mockConsole(),
                            e
                        );
                    }
                    return (
                        (t = l),
                        (n = [
                            {
                                key: 'onInit',
                                value: function () {
                                    (this.$tabbox = r.a.render(this.tplTabbox, {})), this.updateMaxLogNumber();
                                },
                            },
                            {
                                key: 'onRenderTab',
                                value: function (e) {
                                    e(this.$tabbox);
                                },
                            },
                            {
                                key: 'onAddTopBar',
                                value: function (e) {
                                    for (
                                        var t = this, n = ['All', 'Log', 'Info', 'Warn', 'Error'], o = [], i = 0;
                                        i < n.length;
                                        i++
                                    )
                                        o.push({
                                            name: n[i],
                                            data: { type: n[i].toLowerCase() },
                                            className: '',
                                            onClick: function () {
                                                if (r.a.hasClass(this, 'vc-actived')) return !1;
                                                t.showLogType(this.dataset.type || 'all');
                                            },
                                        });
                                    (o[0].className = 'vc-actived'), e(o);
                                },
                            },
                            {
                                key: 'onAddTool',
                                value: function (e) {
                                    var t = this;
                                    e([
                                        {
                                            name: 'Clear',
                                            global: !1,
                                            onClick: function () {
                                                t.clearLog(), t.vConsole.triggerEvent('clearLog');
                                            },
                                        },
                                    ]);
                                },
                            },
                            {
                                key: 'onReady',
                                value: function () {
                                    var e = this;
                                    e.isReady = !0;
                                    var t = r.a.all('.vc-subtab', e.$tabbox);
                                    r.a.bind(t, 'click', function (n) {
                                        if ((n.preventDefault(), r.a.hasClass(this, 'vc-actived'))) return !1;
                                        r.a.removeClass(t, 'vc-actived'), r.a.addClass(this, 'vc-actived');
                                        var o = this.dataset.type,
                                            i = r.a.one('.vc-log', e.$tabbox);
                                        r.a.removeClass(i, 'vc-log-partly-log'),
                                            r.a.removeClass(i, 'vc-log-partly-info'),
                                            r.a.removeClass(i, 'vc-log-partly-warn'),
                                            r.a.removeClass(i, 'vc-log-partly-error'),
                                            'all' == o
                                                ? r.a.removeClass(i, 'vc-log-partly')
                                                : (r.a.addClass(i, 'vc-log-partly'),
                                                  r.a.addClass(i, 'vc-log-partly-' + o));
                                    });
                                    var n = r.a.one('.vc-content');
                                    r.a.bind(n, 'scroll', function (t) {
                                        e.isShow &&
                                            (n.scrollTop + n.offsetHeight >= n.scrollHeight
                                                ? (e.isInBottom = !0)
                                                : (e.isInBottom = !1));
                                    });
                                    for (var o = 0; o < e.logList.length; o++) e.printLog(e.logList[o]);
                                    e.logList = [];
                                },
                            },
                            {
                                key: 'onRemove',
                                value: function () {
                                    (window.console.log = this.console.log),
                                        (window.console.info = this.console.info),
                                        (window.console.warn = this.console.warn),
                                        (window.console.debug = this.console.debug),
                                        (window.console.error = this.console.error),
                                        (window.console.time = this.console.time),
                                        (window.console.timeEnd = this.console.timeEnd),
                                        (window.console.clear = this.console.clear),
                                        (this.console = {});
                                    var e = k.indexOf(this.id);
                                    e > -1 && k.splice(e, 1);
                                },
                            },
                            {
                                key: 'onShow',
                                value: function () {
                                    (this.isShow = !0), 1 == this.isInBottom && this.autoScrollToBottom();
                                },
                            },
                            {
                                key: 'onHide',
                                value: function () {
                                    this.isShow = !1;
                                },
                            },
                            {
                                key: 'onShowConsole',
                                value: function () {
                                    1 == this.isInBottom && this.autoScrollToBottom();
                                },
                            },
                            {
                                key: 'onUpdateOption',
                                value: function () {
                                    this.vConsole.option.maxLogNumber != this.maxLogNumber &&
                                        (this.updateMaxLogNumber(), this.limitMaxLogs());
                                },
                            },
                            {
                                key: 'updateMaxLogNumber',
                                value: function () {
                                    (this.maxLogNumber = this.vConsole.option.maxLogNumber || 1e3),
                                        (this.maxLogNumber = Math.max(1, this.maxLogNumber));
                                },
                            },
                            {
                                key: 'limitMaxLogs',
                                value: function () {
                                    if (this.isReady)
                                        for (; this.logNumber > this.maxLogNumber; ) {
                                            var e = r.a.one('.vc-item', this.$tabbox);
                                            if (!e) break;
                                            e.parentNode.removeChild(e), this.logNumber--;
                                        }
                                },
                            },
                            {
                                key: 'showLogType',
                                value: function (e) {
                                    var t = r.a.one('.vc-log', this.$tabbox);
                                    r.a.removeClass(t, 'vc-log-partly-log'),
                                        r.a.removeClass(t, 'vc-log-partly-info'),
                                        r.a.removeClass(t, 'vc-log-partly-warn'),
                                        r.a.removeClass(t, 'vc-log-partly-error'),
                                        'all' == e
                                            ? r.a.removeClass(t, 'vc-log-partly')
                                            : (r.a.addClass(t, 'vc-log-partly'), r.a.addClass(t, 'vc-log-partly-' + e));
                                },
                            },
                            {
                                key: 'autoScrollToBottom',
                                value: function () {
                                    this.vConsole.option.disableLogScrolling || this.scrollToBottom();
                                },
                            },
                            {
                                key: 'scrollToBottom',
                                value: function () {
                                    var e = r.a.one('.vc-content');
                                    e && (e.scrollTop = e.scrollHeight - e.offsetHeight);
                                },
                            },
                            {
                                key: 'mockConsole',
                                value: function () {
                                    var e = this,
                                        t = this,
                                        n = ['log', 'info', 'warn', 'debug', 'error'];
                                    window.console
                                        ? (n.map(function (e) {
                                              t.console[e] = window.console[e];
                                          }),
                                          (t.console.time = window.console.time),
                                          (t.console.timeEnd = window.console.timeEnd),
                                          (t.console.clear = window.console.clear))
                                        : (window.console = {}),
                                        n.map(function (t) {
                                            window.console[t] = function () {
                                                for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                                                    o[r] = arguments[r];
                                                e.printLog({ logType: t, logs: o });
                                            };
                                        });
                                    var o = {};
                                    (window.console.time = function (e) {
                                        o[e] = Date.now();
                                    }),
                                        (window.console.timeEnd = function (e) {
                                            var t = o[e];
                                            t
                                                ? (console.log(e + ':', Date.now() - t + 'ms'), delete o[e])
                                                : console.log(e + ': 0ms');
                                        }),
                                        (window.console.clear = function () {
                                            t.clearLog();
                                            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                                                n[o] = arguments[o];
                                            t.console.clear.apply(window.console, n);
                                        });
                                },
                            },
                            {
                                key: 'clearLog',
                                value: function () {
                                    (r.a.one('.vc-log', this.$tabbox).innerHTML = ''), (this.logNumber = 0), (x = {});
                                },
                            },
                            {
                                key: 'printOriginLog',
                                value: function (e) {
                                    'function' == typeof this.console[e.logType] &&
                                        this.console[e.logType].apply(window.console, e.logs);
                                },
                            },
                            {
                                key: 'printLog',
                                value: function (e) {
                                    var t = e.logs || [];
                                    if (t.length || e.content) {
                                        t = [].slice.call(t || []);
                                        var n = /^\[(\w+)\]$/i,
                                            r = '',
                                            i = !1;
                                        if (o.isString(t[0])) {
                                            var a = t[0].match(n);
                                            null !== a &&
                                                a.length > 0 &&
                                                ((r = a[1].toLowerCase()), (i = k.indexOf(r) > -1));
                                        }
                                        if (r === this.id || (!0 !== i && 'default' === this.id))
                                            if (
                                                (e._id ||
                                                    (e._id = '__vc_' + Math.random().toString(36).substring(2, 8)),
                                                e.date || (e.date = +new Date()),
                                                this.isReady)
                                            ) {
                                                o.isString(t[0]) &&
                                                    i &&
                                                    ((t[0] = t[0].replace(n, '')), '' === t[0] && t.shift());
                                                for (
                                                    var c = {
                                                            _id: e._id,
                                                            logType: e.logType,
                                                            logText: [],
                                                            hasContent: !!e.content,
                                                            count: 1,
                                                        },
                                                        l = 0;
                                                    l < t.length;
                                                    l++
                                                )
                                                    o.isFunction(t[l])
                                                        ? c.logText.push(t[l].toString())
                                                        : o.isObject(t[l]) || o.isArray(t[l])
                                                          ? c.logText.push(o.JSONStringify(t[l]))
                                                          : c.logText.push(t[l]);
                                                (c.logText = c.logText.join(' ')),
                                                    c.hasContent || x.logType !== c.logType || x.logText !== c.logText
                                                        ? (this.printNewLog(e, t), (x = c))
                                                        : this.printRepeatLog(),
                                                    this.isInBottom && this.isShow && this.autoScrollToBottom(),
                                                    e.noOrigin || this.printOriginLog(e);
                                            } else this.logList.push(e);
                                        else e.noOrigin || this.printOriginLog(e);
                                    }
                                },
                            },
                            {
                                key: 'printRepeatLog',
                                value: function () {
                                    var e = r.a.one('#' + x._id),
                                        t = r.a.one('.vc-item-repeat', e);
                                    t ||
                                        (((t = document.createElement('i')).className = 'vc-item-repeat'),
                                        e.insertBefore(t, e.lastChild)),
                                        x.count,
                                        x.count++,
                                        (t.innerHTML = x.count);
                                },
                            },
                            {
                                key: 'printNewLog',
                                value: function (e, t) {
                                    var n = r.a.render(c.a, { _id: e._id, logType: e.logType, style: e.style || '' }),
                                        i = /(\%c )|( \%c)/g,
                                        a = [];
                                    if (o.isString(t[0]) && i.test(t[0])) {
                                        for (
                                            var l = t[0].split(i).filter(function (e) {
                                                    return void 0 !== e && '' !== e && !/ ?\%c ?/.test(e);
                                                }),
                                                s = t[0].match(i),
                                                d = 0;
                                            d < s.length;
                                            d++
                                        )
                                            o.isString(t[d + 1]) && a.push(t[d + 1]);
                                        for (var u = s.length + 1; u < t.length; u++) l.push(t[u]);
                                        t = l;
                                    }
                                    for (var f = r.a.one('.vc-item-content', n), p = 0; p < t.length; p++) {
                                        var b = void 0;
                                        try {
                                            if ('' === t[p]) continue;
                                            b = o.isFunction(t[p])
                                                ? '<span> ' + t[p].toString() + '</span>'
                                                : o.isObject(t[p]) || o.isArray(t[p])
                                                  ? this.getFoldedLine(t[p])
                                                  : (a[p] ? '<span style="'.concat(a[p], '"> ') : '<span> ') +
                                                    o.htmlEncode(t[p]).replace(/\n/g, '<br/>') +
                                                    '</span>';
                                        } catch (e) {
                                            b = '<span> [' + v(t[p]) + ']</span>';
                                        }
                                        b &&
                                            ('string' == typeof b
                                                ? f.insertAdjacentHTML('beforeend', b)
                                                : f.insertAdjacentElement('beforeend', b));
                                    }
                                    o.isObject(e.content) && f.insertAdjacentElement('beforeend', e.content),
                                        r.a.one('.vc-log', this.$tabbox).insertAdjacentElement('beforeend', n),
                                        this.logNumber++,
                                        this.limitMaxLogs();
                                },
                            },
                            {
                                key: 'getFoldedLine',
                                value: function (e, t) {
                                    var n = this;
                                    if (!t) {
                                        var i = o.JSONStringify(e),
                                            a = i.substr(0, 36);
                                        (t = o.getObjName(e)), i.length > 36 && (a += '...'), (t += ' ' + a);
                                    }
                                    var c = r.a.render(s.a, { outer: t, lineType: 'obj' });
                                    return (
                                        r.a.bind(r.a.one('.vc-fold-outer', c), 'click', function (t) {
                                            t.preventDefault(),
                                                t.stopPropagation(),
                                                r.a.hasClass(c, 'vc-toggle')
                                                    ? (r.a.removeClass(c, 'vc-toggle'),
                                                      r.a.removeClass(r.a.one('.vc-fold-inner', c), 'vc-toggle'),
                                                      r.a.removeClass(r.a.one('.vc-fold-outer', c), 'vc-toggle'))
                                                    : (r.a.addClass(c, 'vc-toggle'),
                                                      r.a.addClass(r.a.one('.vc-fold-inner', c), 'vc-toggle'),
                                                      r.a.addClass(r.a.one('.vc-fold-outer', c), 'vc-toggle'));
                                            var i = r.a.one('.vc-fold-inner', c);
                                            return (
                                                setTimeout(function () {
                                                    if (0 == i.children.length && e) {
                                                        for (var t = o.getObjAllKeys(e), a = 0; a < t.length; a++) {
                                                            var c = void 0,
                                                                l = 'undefined',
                                                                d = '';
                                                            try {
                                                                c = e[t[a]];
                                                            } catch (e) {
                                                                continue;
                                                            }
                                                            o.isString(c)
                                                                ? ((l = 'string'), (c = '"' + c + '"'))
                                                                : o.isNumber(c)
                                                                  ? (l = 'number')
                                                                  : o.isBoolean(c)
                                                                    ? (l = 'boolean')
                                                                    : o.isNull(c)
                                                                      ? ((l = 'null'), (c = 'null'))
                                                                      : o.isUndefined(c)
                                                                        ? ((l = 'undefined'), (c = 'undefined'))
                                                                        : o.isFunction(c)
                                                                          ? ((l = 'function'), (c = 'function()'))
                                                                          : o.isSymbol(c) && (l = 'symbol');
                                                            var v = void 0;
                                                            if (o.isArray(c)) {
                                                                var f = o.getObjName(c) + '[' + c.length + ']';
                                                                v = n.getFoldedLine(
                                                                    c,
                                                                    r.a.render(
                                                                        u.a,
                                                                        {
                                                                            key: t[a],
                                                                            keyType: d,
                                                                            value: f,
                                                                            valueType: 'array',
                                                                        },
                                                                        !0,
                                                                    ),
                                                                );
                                                            } else if (o.isObject(c)) {
                                                                var p = o.getObjName(c);
                                                                v = n.getFoldedLine(
                                                                    c,
                                                                    r.a.render(
                                                                        u.a,
                                                                        {
                                                                            key: o.htmlEncode(t[a]),
                                                                            keyType: d,
                                                                            value: p,
                                                                            valueType: 'object',
                                                                        },
                                                                        !0,
                                                                    ),
                                                                );
                                                            } else {
                                                                e.hasOwnProperty &&
                                                                    !e.hasOwnProperty(t[a]) &&
                                                                    (d = 'private');
                                                                var b = {
                                                                    lineType: 'kv',
                                                                    key: o.htmlEncode(t[a]),
                                                                    keyType: d,
                                                                    value: o.htmlEncode(c),
                                                                    valueType: l,
                                                                };
                                                                v = r.a.render(s.a, b);
                                                            }
                                                            i.insertAdjacentElement('beforeend', v);
                                                        }
                                                        if (o.isObject(e)) {
                                                            var h,
                                                                m = e.__proto__;
                                                            (h = o.isObject(m)
                                                                ? n.getFoldedLine(
                                                                      m,
                                                                      r.a.render(
                                                                          u.a,
                                                                          {
                                                                              key: '__proto__',
                                                                              keyType: 'private',
                                                                              value: o.getObjName(m),
                                                                              valueType: 'object',
                                                                          },
                                                                          !0,
                                                                      ),
                                                                  )
                                                                : r.a.render(u.a, {
                                                                      key: '__proto__',
                                                                      keyType: 'private',
                                                                      value: 'null',
                                                                      valueType: 'null',
                                                                  })),
                                                                i.insertAdjacentElement('beforeend', h);
                                                        }
                                                    }
                                                }),
                                                !1
                                            );
                                        }),
                                        c
                                    );
                                },
                            },
                        ]) && p(t.prototype, n),
                        i && p(t, i),
                        l
                    );
                })(i.a);
            (w = []),
                (y = 'AddedLogID') in (_ = E)
                    ? Object.defineProperty(_, y, { value: w, enumerable: !0, configurable: !0, writable: !0 })
                    : (_[y] = w),
                (t.a = E);
        },
        function (e, t) {
            function n(t) {
                return (
                    (e.exports = n =
                        Object.setPrototypeOf
                            ? Object.getPrototypeOf
                            : function (e) {
                                  return e.__proto__ || Object.getPrototypeOf(e);
                              }),
                    n(t)
                );
            }
            e.exports = n;
        },
        function (e, t) {
            e.exports =
                '<span>\n  <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class="vc-code-{{valueType}}">{{value}}</i>\n</span>';
        },
        function (e, t, n) {
            'use strict';
            var o,
                r = function () {
                    return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o;
                },
                i = (function () {
                    var e = {};
                    return function (t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            e[t] = n;
                        }
                        return e[t];
                    };
                })(),
                a = [];
            function c(e) {
                for (var t = -1, n = 0; n < a.length; n++)
                    if (a[n].identifier === e) {
                        t = n;
                        break;
                    }
                return t;
            }
            function l(e, t) {
                for (var n = {}, o = [], r = 0; r < e.length; r++) {
                    var i = e[r],
                        l = t.base ? i[0] + t.base : i[0],
                        s = n[l] || 0,
                        d = ''.concat(l, ' ').concat(s);
                    n[l] = s + 1;
                    var u = c(d),
                        v = { css: i[1], media: i[2], sourceMap: i[3] };
                    -1 !== u
                        ? (a[u].references++, a[u].updater(v))
                        : a.push({ identifier: d, updater: h(v, t), references: 1 }),
                        o.push(d);
                }
                return o;
            }
            function s(e) {
                var t = document.createElement('style'),
                    o = e.attributes || {};
                if (void 0 === o.nonce) {
                    var r = n.nc;
                    r && (o.nonce = r);
                }
                if (
                    (Object.keys(o).forEach(function (e) {
                        t.setAttribute(e, o[e]);
                    }),
                    'function' == typeof e.insert)
                )
                    e.insert(t);
                else {
                    var a = i(e.insert || 'head');
                    if (!a)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                        );
                    a.appendChild(t);
                }
                return t;
            }
            var d,
                u =
                    ((d = []),
                    function (e, t) {
                        return (d[e] = t), d.filter(Boolean).join('\n');
                    });
            function v(e, t, n, o) {
                var r = n ? '' : o.media ? '@media '.concat(o.media, ' {').concat(o.css, '}') : o.css;
                if (e.styleSheet) e.styleSheet.cssText = u(t, r);
                else {
                    var i = document.createTextNode(r),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
                }
            }
            function f(e, t, n) {
                var o = n.css,
                    r = n.media,
                    i = n.sourceMap;
                if (
                    (r ? e.setAttribute('media', r) : e.removeAttribute('media'),
                    i &&
                        btoa &&
                        (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                            ' */',
                        )),
                    e.styleSheet)
                )
                    e.styleSheet.cssText = o;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(o));
                }
            }
            var p = null,
                b = 0;
            function h(e, t) {
                var n, o, r;
                if (t.singleton) {
                    var i = b++;
                    (n = p || (p = s(t))), (o = v.bind(null, n, i, !1)), (r = v.bind(null, n, i, !0));
                } else
                    (n = s(t)),
                        (o = f.bind(null, n, t)),
                        (r = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(n);
                        });
                return (
                    o(e),
                    function (t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            o((e = t));
                        } else r();
                    }
                );
            }
            e.exports = function (e, t) {
                (t = t || {}).singleton || 'boolean' == typeof t.singleton || (t.singleton = r());
                var n = l((e = e || []), t);
                return function (e) {
                    if (((e = e || []), '[object Array]' === Object.prototype.toString.call(e))) {
                        for (var o = 0; o < n.length; o++) {
                            var r = c(n[o]);
                            a[r].references--;
                        }
                        for (var i = l(e, t), s = 0; s < n.length; s++) {
                            var d = c(n[s]);
                            0 === a[d].references && (a[d].updater(), a.splice(d, 1));
                        }
                        n = i;
                    }
                };
            };
        },
        function (e, t, n) {
            'use strict';
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var n = (function (e, t) {
                                var n = e[1] || '',
                                    o = e[3];
                                if (!o) return n;
                                if (t && 'function' == typeof btoa) {
                                    var r =
                                            ((a = o),
                                            (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                                            (l = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                                c,
                                            )),
                                            '/*# '.concat(l, ' */')),
                                        i = o.sources.map(function (e) {
                                            return '/*# sourceURL='.concat(o.sourceRoot || '').concat(e, ' */');
                                        });
                                    return [n].concat(i).concat([r]).join('\n');
                                }
                                var a, c, l;
                                return [n].join('\n');
                            })(t, e);
                            return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n;
                        }).join('');
                    }),
                    (t.i = function (e, n, o) {
                        'string' == typeof e && (e = [[null, e, '']]);
                        var r = {};
                        if (o)
                            for (var i = 0; i < this.length; i++) {
                                var a = this[i][0];
                                null != a && (r[a] = !0);
                            }
                        for (var c = 0; c < e.length; c++) {
                            var l = [].concat(e[c]);
                            (o && r[l[0]]) ||
                                (n && (l[2] ? (l[2] = ''.concat(n, ' and ').concat(l[2])) : (l[2] = n)), t.push(l));
                        }
                    }),
                    t
                );
            };
        },
        function (e, t) {
            e.exports = function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            };
        },
        function (e, t) {
            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            e.exports = function (e, t, o) {
                return t && n(e.prototype, t), o && n(e, o), e;
            };
        },
        function (e, t, n) {
            var o = n(42);
            e.exports = function (e, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                })),
                    t && o(e, t);
            };
        },
        function (e, t, n) {
            var o = n(43),
                r = n(44);
            e.exports = function (e, t) {
                return !t || ('object' !== o(t) && 'function' != typeof t) ? r(e) : t;
            };
        },
        function (e, t) {
            e.exports =
                '<div class="vc-fold">\n  {{if (lineType == \'obj\')}}\n    <i class="vc-fold-outer">{{outer}}</i>\n    <div class="vc-fold-inner"></div>\n  {{else if (lineType == \'value\')}}\n    <i class="vc-code-{{valueType}}">{{value}}</i>\n  {{else if (lineType == \'kv\')}}\n    <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class="vc-code-{{valueType}}">{{value}}</i>\n  {{/if}}\n</div>';
        },
        function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            var _lib_query_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                _lib_tool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
                _log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3),
                _tabbox_default_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24),
                _tabbox_default_html__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
                    _tabbox_default_html__WEBPACK_IMPORTED_MODULE_3__,
                ),
                _item_code_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14),
                _item_code_html__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
                    _item_code_html__WEBPACK_IMPORTED_MODULE_4__,
                );
            function _typeof(e) {
                return (_typeof =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function _defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function _createClass(e, t, n) {
                return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
            }
            function _get(e, t, n) {
                return (_get =
                    'undefined' != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (e, t, n) {
                              var o = _superPropBase(e, t);
                              if (o) {
                                  var r = Object.getOwnPropertyDescriptor(o, t);
                                  return r.get ? r.get.call(n) : r.value;
                              }
                          })(e, t, n || e);
            }
            function _superPropBase(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)); );
                return e;
            }
            function _inherits(e, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                })),
                    t && _setPrototypeOf(e, t);
            }
            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function _createSuper(e) {
                var t = _isNativeReflectConstruct();
                return function () {
                    var n,
                        o = _getPrototypeOf(e);
                    if (t) {
                        var r = _getPrototypeOf(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return _possibleConstructorReturn(this, n);
                };
            }
            function _possibleConstructorReturn(e, t) {
                return !t || ('object' !== _typeof(t) && 'function' != typeof t) ? _assertThisInitialized(e) : t;
            }
            function _assertThisInitialized(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function _isNativeReflectConstruct() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            }
            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var VConsoleDefaultTab = (function (_VConsoleLogTab) {
                _inherits(VConsoleDefaultTab, _VConsoleLogTab);
                var _super = _createSuper(VConsoleDefaultTab);
                function VConsoleDefaultTab() {
                    var e;
                    _classCallCheck(this, VConsoleDefaultTab);
                    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                    return (
                        ((e = _super.call.apply(_super, [this].concat(n))).tplTabbox =
                            _tabbox_default_html__WEBPACK_IMPORTED_MODULE_3___default.a),
                        e
                    );
                }
                return (
                    _createClass(VConsoleDefaultTab, [
                        {
                            key: 'onReady',
                            value: function onReady() {
                                var that = this;
                                _get(_getPrototypeOf(VConsoleDefaultTab.prototype), 'onReady', this).call(this),
                                    (window.winKeys = Object.getOwnPropertyNames(window).sort()),
                                    (window.keyTypes = {});
                                for (var i = 0; i < winKeys.length; i++)
                                    keyTypes[winKeys[i]] = _typeof(window[winKeys[i]]);
                                var cacheObj = {},
                                    ID_REGEX = /[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/,
                                    retrievePrecedingIdentifier = function (e, t, n) {
                                        n = n || ID_REGEX;
                                        for (var o = [], r = t - 1; r >= 0 && n.test(e[r]); r--) o.push(e[r]);
                                        if (0 == o.length) {
                                            n = /\./;
                                            for (var i = t - 1; i >= 0 && n.test(e[i]); i--) o.push(e[i]);
                                        }
                                        if (0 === o.length) {
                                            var a = e.match(/[\(\)\[\]\{\}]/gi) || [];
                                            return a[a.length - 1];
                                        }
                                        return o.reverse().join('');
                                    };
                                _lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.bind(
                                    _lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one('.vc-cmd-input'),
                                    'keyup',
                                    function (e) {
                                        var isDeleteKeyCode = 8 === e.keyCode || 46 === e.keyCode,
                                            $prompted =
                                                _lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one('.vc-cmd-prompted');
                                        ($prompted.style.display = 'none'), ($prompted.innerHTML = '');
                                        var tempValue = this.value,
                                            value = retrievePrecedingIdentifier(this.value, this.value.length);
                                        if (value && value.length > 0) {
                                            if (/\(/.test(value) && !isDeleteKeyCode)
                                                return void (_lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one(
                                                    '.vc-cmd-input',
                                                ).value += ')');
                                            if (/\[/.test(value) && !isDeleteKeyCode)
                                                return void (_lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one(
                                                    '.vc-cmd-input',
                                                ).value += ']');
                                            if (/\{/.test(value) && !isDeleteKeyCode)
                                                return void (_lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one(
                                                    '.vc-cmd-input',
                                                ).value += '}');
                                            if ('.' === value) {
                                                var key = retrievePrecedingIdentifier(tempValue, tempValue.length - 1);
                                                if (!cacheObj[key])
                                                    try {
                                                        cacheObj[key] = Object.getOwnPropertyNames(
                                                            eval('(' + key + ')'),
                                                        ).sort();
                                                    } catch (e) {}
                                                try {
                                                    for (var _i3 = 0; _i3 < cacheObj[key].length; _i3++) {
                                                        var $li = document.createElement('li'),
                                                            _key = cacheObj[key][_i3];
                                                        ($li.innerHTML = _key),
                                                            ($li.onclick = function () {
                                                                (_lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one(
                                                                    '.vc-cmd-input',
                                                                ).value = ''),
                                                                    (_lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one(
                                                                        '.vc-cmd-input',
                                                                    ).value = tempValue + this.innerHTML),
                                                                    ($prompted.style.display = 'none');
                                                            }),
                                                            $prompted.appendChild($li);
                                                    }
                                                } catch (e) {}
                                            } else if (
                                                '.' !== value.substring(value.length - 1) &&
                                                value.indexOf('.') < 0
                                            ) {
                                                for (var _i4 = 0; _i4 < winKeys.length; _i4++)
                                                    if (winKeys[_i4].toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                                                        var _$li = document.createElement('li');
                                                        (_$li.innerHTML = winKeys[_i4]),
                                                            (_$li.onclick = function () {
                                                                (_lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one(
                                                                    '.vc-cmd-input',
                                                                ).value = ''),
                                                                    (_lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one(
                                                                        '.vc-cmd-input',
                                                                    ).value = this.innerHTML),
                                                                    'function' == keyTypes[this.innerHTML] &&
                                                                        (_lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one(
                                                                            '.vc-cmd-input',
                                                                        ).value += '()'),
                                                                    ($prompted.style.display = 'none');
                                                            }),
                                                            $prompted.appendChild(_$li);
                                                    }
                                            } else {
                                                var arr = value.split('.');
                                                if (cacheObj[arr[0]]) {
                                                    cacheObj[arr[0]].sort();
                                                    for (var _i5 = 0; _i5 < cacheObj[arr[0]].length; _i5++) {
                                                        var _$li2 = document.createElement('li'),
                                                            _key3 = cacheObj[arr[0]][_i5];
                                                        _key3.indexOf(arr[1]) >= 0 &&
                                                            ((_$li2.innerHTML = _key3),
                                                            (_$li2.onclick = function () {
                                                                (_lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one(
                                                                    '.vc-cmd-input',
                                                                ).value = ''),
                                                                    (_lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one(
                                                                        '.vc-cmd-input',
                                                                    ).value = tempValue + this.innerHTML),
                                                                    ($prompted.style.display = 'none');
                                                            }),
                                                            $prompted.appendChild(_$li2));
                                                    }
                                                }
                                            }
                                            if ($prompted.children.length > 0) {
                                                var m = Math.min(200, 31 * $prompted.children.length);
                                                ($prompted.style.display = 'block'),
                                                    ($prompted.style.height = m + 'px'),
                                                    ($prompted.style.marginTop = -m + 'px');
                                            }
                                        } else $prompted.style.display = 'none';
                                    },
                                ),
                                    _lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.bind(
                                        _lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one('.vc-cmd', this.$tabbox),
                                        'submit',
                                        function (e) {
                                            e.preventDefault();
                                            var t = _lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one(
                                                    '.vc-cmd-input',
                                                    e.target,
                                                ),
                                                n = t.value;
                                            (t.value = ''), '' !== n && that.evalCommand(n);
                                            var o =
                                                _lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.one('.vc-cmd-prompted');
                                            o && (o.style.display = 'none');
                                        },
                                    );
                                var code = '';
                                (code += 'if (!!window) {'),
                                    (code += 'window.__vConsole_cmd_result = undefined;'),
                                    (code += 'window.__vConsole_cmd_error = false;'),
                                    (code += '}');
                                var scriptList = document.getElementsByTagName('script'),
                                    nonce = '';
                                scriptList.length > 0 && (nonce = scriptList[0].nonce || '');
                                var script = document.createElement('SCRIPT');
                                (script.innerHTML = code),
                                    script.setAttribute('nonce', nonce),
                                    document.documentElement.appendChild(script),
                                    document.documentElement.removeChild(script);
                            },
                        },
                        {
                            key: 'mockConsole',
                            value: function () {
                                _get(_getPrototypeOf(VConsoleDefaultTab.prototype), 'mockConsole', this).call(this);
                                var e = this;
                                _lib_tool_js__WEBPACK_IMPORTED_MODULE_1__.isFunction(window.onerror) &&
                                    (this.windowOnError = window.onerror),
                                    (window.onerror = function (t, n, o, r, i) {
                                        var a = t;
                                        n && (a += '\n' + n.replace(location.origin, '')),
                                            (o || r) && (a += ':' + o + ':' + r);
                                        var c = (!!i && !!i.stack && i.stack.toString()) || '';
                                        e.printLog({ logType: 'error', logs: [a, c], noOrigin: !0 }),
                                            _lib_tool_js__WEBPACK_IMPORTED_MODULE_1__.isFunction(e.windowOnError) &&
                                                e.windowOnError.call(window, t, n, o, r, i);
                                    });
                            },
                        },
                        {
                            key: 'evalCommand',
                            value: function (e) {
                                this.printLog({
                                    logType: 'log',
                                    content: _lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.render(
                                        _item_code_html__WEBPACK_IMPORTED_MODULE_4___default.a,
                                        { content: e, type: 'input' },
                                    ),
                                    style: '',
                                });
                                var t,
                                    n = void 0;
                                try {
                                    n = eval.call(window, '(' + e + ')');
                                } catch (t) {
                                    try {
                                        n = eval.call(window, e);
                                    } catch (e) {}
                                }
                                _lib_tool_js__WEBPACK_IMPORTED_MODULE_1__.isArray(n) ||
                                _lib_tool_js__WEBPACK_IMPORTED_MODULE_1__.isObject(n)
                                    ? (t = this.getFoldedLine(n))
                                    : (_lib_tool_js__WEBPACK_IMPORTED_MODULE_1__.isNull(n)
                                          ? (n = 'null')
                                          : _lib_tool_js__WEBPACK_IMPORTED_MODULE_1__.isUndefined(n)
                                            ? (n = 'undefined')
                                            : _lib_tool_js__WEBPACK_IMPORTED_MODULE_1__.isFunction(n)
                                              ? (n = 'function()')
                                              : _lib_tool_js__WEBPACK_IMPORTED_MODULE_1__.isString(n) &&
                                                (n = '"' + n + '"'),
                                      (t = _lib_query_js__WEBPACK_IMPORTED_MODULE_0__.a.render(
                                          _item_code_html__WEBPACK_IMPORTED_MODULE_4___default.a,
                                          { content: n, type: 'output' },
                                      ))),
                                    this.printLog({ logType: 'log', content: t, style: '' }),
                                    (window.winKeys = Object.getOwnPropertyNames(window).sort());
                            },
                        },
                    ]),
                    VConsoleDefaultTab
                );
            })(_log_js__WEBPACK_IMPORTED_MODULE_2__.a);
            __webpack_exports__.a = VConsoleDefaultTab;
        },
        function (e, t) {
            e.exports = '<pre class="vc-item-code vc-item-code-{{type}}">{{content}}</pre>';
        },
        function (e, t) {
            e.exports =
                '<div class="vc-item vc-item-info vc-item-nometa">\n  <span class="vc-item-meta">{{meta}}</span>\n  <div class="vc-item-content">\n    <span>{{content}}</span>\n    <span style="color: red;">{{elasped}}</span>\n  </div>\n</div>\n';
        },
        function (e, t) {
            e.exports =
                '<div class="vc-item vc-item-info vc-item-nometa">\n  <span class="vc-item-meta">{{meta}}</span>\n  <div class="vc-item-content">\n    <span>{{content}}</span>\n  </div>\n</div>\n';
        },
        function (e) {
            e.exports = JSON.parse(
                '{"name":"vconsole","version":"3.3.4","description":"A lightweight, extendable front-end developer tool for mobile web page.","homepage":"https://github.com/Tencent/vConsole","main":"dist/vconsole.min.js","typings":"dist/vconsole.min.d.ts","scripts":{"test":"mocha","build":"webpack"},"keywords":["console","debug","mobile"],"repository":{"type":"git","url":"git+https://github.com/Tencent/vConsole.git"},"dependencies":{},"devDependencies":{"@babel/core":"^7.5.5","@babel/plugin-proposal-class-properties":"^7.5.5","@babel/plugin-proposal-export-namespace-from":"^7.5.2","@babel/plugin-proposal-object-rest-spread":"^7.5.5","@babel/preset-env":"^7.5.5","babel-loader":"^8.0.6","babel-plugin-add-module-exports":"^1.0.2","chai":"^4.2.0","copy-webpack-plugin":"^5.0.4","css-loader":"^3.2.0","html-loader":"^0.5.5","jsdom":"^15.1.1","json-loader":"^0.5.7","less":"^3.10.0","less-loader":"^5.0.0","mocha":"^5.2.0","style-loader":"^1.0.0","webpack":"^4.39.2","webpack-cli":"^3.3.6"},"author":"Tencent","license":"MIT","__npminstall_done":"Thu Jul 09 2020 16:20:01 GMT+0800 (GMT+08:00)","_from":"vconsole@3.3.4","_resolved":"http://repo.pab.com.cn:80/artifactory/api/npm/npm-arch-frontend/vconsole/download/vconsole-3.3.4.tgz"}',
            );
        },
        function (e, t) {
            e.exports =
                '<div id="__vconsole" class="">\n  <div class="vc-switch">vConsole</div>\n  <div class="vc-mask">\n  </div>\n  <div class="vc-panel">\n    <div class="vc-tabbar">\n    </div>\n    <div class="vc-topbar">\n    </div>\n    <div class="vc-content">\n    </div>\n    <div class="vc-toolbar">\n      <a class="vc-tool vc-global-tool vc-tool-last vc-hide">Hide</a>\n    </div>\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports = '<a class="vc-tab" data-tab="{{id}}" id="__vc_tab_{{id}}">{{name}}</a>';
        },
        function (e, t) {
            e.exports = '<div class="vc-logbox" id="__vc_log_{{id}}">\n  \n</div>';
        },
        function (e, t) {
            e.exports =
                '<a class="vc-toptab vc-topbar-{{pluginID}}{{if (className)}} {{className}}{{/if}}">{{name}}</a>';
        },
        function (e, t) {
            e.exports = '<a class="vc-tool vc-tool-{{pluginID}}">{{name}}</a>';
        },
        function (e, t) {
            e.exports =
                '<div id="{{_id}}" class="vc-item vc-item-{{logType}} {{style}}">\n\t<div class="vc-item-content"></div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div>\n  <div class="vc-log"></div>\n  <form class="vc-cmd">\n    <button class="vc-cmd-btn" type="submit">OK</button>\n    <ul class=\'vc-cmd-prompted\'></ul>\n    <div class="vc-cmd-input-wrap">\n      <textarea class="vc-cmd-input" placeholder="command..."></textarea>\n    </div>\n  </form>\n</div>';
        },
        function (e, t) {
            e.exports = '<div>\n  <div class="vc-log"></div>\n</div>';
        },
        function (e, t) {
            e.exports = '<div class="vc-table">\n  <div class="vc-log"></div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<dl class="vc-table-row">\n  <dd class="vc-table-col vc-table-col-4">Name {{if (count > 0)}}({{count}}){{/if}}</dd>\n  <dd class="vc-table-col">Method</dd>\n  <dd class="vc-table-col">Status</dd>\n  <dd class="vc-table-col">Time</dd>\n</dl>';
        },
        function (e, t) {
            e.exports =
                '<div class="vc-group {{actived ? \'vc-actived\' : \'\'}}">\n  <dl class="vc-table-row vc-group-preview" data-reqid="{{id}}">\n    <dd class="vc-table-col vc-table-col-4">{{url}}</dd>\n    <dd class="vc-table-col">{{method}}</dd>\n    <dd class="vc-table-col">{{status}}</dd>\n    <dd class="vc-table-col">{{costTime}}</dd>\n  </dl>\n  <div class="vc-group-detail">\n    {{if (header !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Headers</dt>\n      </dl>\n      {{for (var key in header)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{header[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    {{if (getData !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Query String Parameters</dt>\n      </dl>\n      {{for (var key in getData)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{getData[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    {{if (postData !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Form Data</dt>\n      </dl>\n      {{for (var key in postData)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{postData[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Response</dt>\n      </dl>\n      <div class="vc-table-row vc-left-border vc-small">\n        <pre class="vc-table-col vc-max-height vc-min-height">{{response || \'\'}}</pre>\n      </div>\n    </div>\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports = '<div>\n  <div class="vc-log"></div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<span class="vcelm-node">&lt;{{node.tagName.toLowerCase()}}{{if (node.className || node.attributes.length)}}\n  <i class="vcelm-k">\n    {{for (var i = 0; i < node.attributes.length; i++)}}\n      {{if (node.attributes[i].value !== \'\')}}\n        {{node.attributes[i].name}}="<i class="vcelm-v">{{node.attributes[i].value}}</i>"{{else}}\n        {{node.attributes[i].name}}{{/if}}{{/for}}</i>{{/if}}&gt;</span>';
        },
        function (e, t) {
            e.exports = '<span class="vcelm-node">&lt;/{{node.tagName.toLowerCase()}}&gt;</span>';
        },
        function (e, t) {
            e.exports = '<div class="vc-table">\n  <div class="vc-log"></div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div>\n  <dl class="vc-table-row">\n    <dd class="vc-table-col">Name</dd>\n    <dd class="vc-table-col vc-table-col-2">Value</dd>\n  </dl>\n  {{for (var i = 0; i < list.length; i++)}}\n  <dl class="vc-table-row">\n    <dd class="vc-table-col">{{list[i].name}}</dd>\n    <dd class="vc-table-col vc-table-col-2">{{list[i].value}}</dd>\n  </dl>\n  {{/for}}\n</div>';
        },
        function (e, t) {
            e.exports = __WEBPACK_EXTERNAL_MODULE__34__;
        },
        function (e, t) {
            e.exports =
                '<div>\n  <div class="vc-sub-tabbar">\n    <a href="javascript:;" class="vc-subtab vc-actived" data-type="component">组件</a>\n    <a href="javascript:;" class="vc-subtab" data-type="event">事件</a>\n  </div>\n  <div class="vc-table">\n    <div id="myconsole-component-panel" class="vc-log"></div>\n    <div id="myconsole-event-panel" class="vc-log hidden"></div>\n  </div>\n</div>';
        },
        function (e, t) {
            e.exports =
                '<div>\n  <div class="vc-table">\n    <div id="location-component-panel" class="vc-log">\n      <div class="vc-item vc-item-info ">\n        <div class="vc-item-content"><span> 当前页面:</span><span id="location"></span></div>\n      </div>\n      <div class="vc-item vc-item-info ">\n        <div class="vc-item-content"><span> UA:</span><span id="ua"></span></div>\n      </div>\n    </div>\n  </div>\n</div>\n';
        },
        function (e, t) {
            if ('undefined' == typeof Symbol) {
                window.Symbol = function () {};
                var n = '__symbol_iterator_key';
                (window.Symbol.iterator = n),
                    (Array.prototype[n] = function () {
                        var e = this,
                            t = 0;
                        return {
                            next: function () {
                                return { done: e.length === t, value: e.length === t ? void 0 : e[t++] };
                            },
                        };
                    });
            }
        },
        function (e, t, n) {
            var o = n(6),
                r = n(39);
            'string' == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, '']]);
            var i = { insert: 'head', singleton: !1 };
            o(r, i);
            e.exports = r.locals || {};
        },
        function (e, t, n) {
            (t = n(7)(!1)).push([
                e.i,
                '#__vconsole {\n  color: #000;\n  font-size: 13px;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  /* global */\n  /* compoment */\n}\n#__vconsole .vc-max-height {\n  max-height: 19.23076923em;\n}\n#__vconsole .vc-max-height-line {\n  max-height: 3.38461538em;\n}\n#__vconsole .vc-min-height {\n  min-height: 3.07692308em;\n}\n#__vconsole dd,\n#__vconsole dl,\n#__vconsole pre {\n  margin: 0;\n}\n#__vconsole .vc-switch {\n  display: block;\n  position: fixed;\n  right: 0.76923077em;\n  bottom: 0.76923077em;\n  color: #FFF;\n  background-color: #04BE02;\n  line-height: 1;\n  font-size: 1.07692308em;\n  padding: 0.61538462em 1.23076923em;\n  z-index: 10000;\n  border-radius: 0.30769231em;\n  box-shadow: 0 0 0.61538462em rgba(0, 0, 0, 0.4);\n}\n#__vconsole .vc-mask {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0);\n  z-index: 10001;\n  transition: background 0.3s;\n  -webkit-tap-highlight-color: transparent;\n  overflow-y: scroll;\n}\n#__vconsole .vc-panel {\n  display: none;\n  position: fixed;\n  min-height: 85%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10002;\n  background-color: #EFEFF4;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n}\n#__vconsole .vc-tabbar {\n  border-bottom: 1px solid #D9D9D9;\n  overflow-x: auto;\n  height: 3em;\n  width: auto;\n  white-space: nowrap;\n}\n#__vconsole .vc-tabbar .vc-tab {\n  display: inline-block;\n  line-height: 3em;\n  padding: 0 1.15384615em;\n  border-right: 1px solid #D9D9D9;\n  text-decoration: none;\n  color: #000;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-tabbar .vc-tab:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-tabbar .vc-tab.vc-actived {\n  background-color: #FFF;\n}\n#__vconsole .vc-content {\n  background-color: #FFF;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  top: 3.07692308em;\n  left: 0;\n  right: 0;\n  bottom: 3.07692308em;\n  -webkit-overflow-scrolling: touch;\n  margin-bottom: constant(safe-area-inset-bottom);\n  margin-bottom: env(safe-area-inset-bottom);\n}\n#__vconsole .vc-content.vc-has-topbar {\n  top: 5.46153846em;\n}\n#__vconsole .vc-topbar {\n  background-color: #FBF9FE;\n  display: flex;\n  display: -webkit-box;\n  flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-direction: row;\n  -webkit-flex-wrap: wrap;\n  width: 100%;\n}\n#__vconsole .vc-topbar .vc-toptab {\n  display: none;\n  flex: 1;\n  -webkit-box-flex: 1;\n  line-height: 2.30769231em;\n  padding: 0 1.15384615em;\n  border-bottom: 1px solid #D9D9D9;\n  text-decoration: none;\n  text-align: center;\n  color: #000;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-topbar .vc-toptab.vc-toggle {\n  display: block;\n}\n#__vconsole .vc-topbar .vc-toptab:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-topbar .vc-toptab.vc-actived {\n  border-bottom: 1px solid #3e82f7;\n}\n#__vconsole .vc-logbox {\n  display: none;\n  position: relative;\n  min-height: 100%;\n}\n#__vconsole .vc-logbox i {\n  font-style: normal;\n}\n#__vconsole .vc-logbox .vc-log {\n  padding-bottom: 3em;\n  -webkit-tap-highlight-color: transparent;\n}\n#__vconsole .vc-logbox .vc-log:empty:before {\n  content: "Empty";\n  color: #999;\n  position: absolute;\n  top: 45%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 1.15384615em;\n  text-align: center;\n}\n#__vconsole .vc-logbox .vc-item {\n  margin: 0;\n  padding: 0.46153846em 0.61538462em;\n  overflow: hidden;\n  line-height: 1.3;\n  border-bottom: 1px solid #EEE;\n  word-break: break-word;\n}\n#__vconsole .vc-logbox .vc-item-info {\n  color: #6A5ACD;\n}\n#__vconsole .vc-logbox .vc-item-debug {\n  color: #DAA520;\n}\n#__vconsole .vc-logbox .vc-item-warn {\n  color: #FFA500;\n  border-color: #FFB930;\n  background-color: #FFFACD;\n}\n#__vconsole .vc-logbox .vc-item-error {\n  color: #DC143C;\n  border-color: #F4A0AB;\n  background-color: #FFE4E1;\n}\n#__vconsole .vc-logbox .vc-log.vc-log-partly .vc-item {\n  display: none;\n}\n#__vconsole .vc-logbox .vc-log.vc-log-partly-log .vc-item-log,\n#__vconsole .vc-logbox .vc-log.vc-log-partly-info .vc-item-info,\n#__vconsole .vc-logbox .vc-log.vc-log-partly-warn .vc-item-warn,\n#__vconsole .vc-logbox .vc-log.vc-log-partly-error .vc-item-error {\n  display: block;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-content {\n  margin-right: 4.61538462em;\n  display: inline-block;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-repeat {\n  display: inline-block;\n  margin-right: 0.30769231em;\n  padding: 0 6.5px;\n  color: #D7E0EF;\n  background-color: #42597F;\n  border-radius: 8.66666667px;\n}\n#__vconsole .vc-logbox .vc-item.vc-item-error .vc-item-repeat {\n  color: #901818;\n  background-color: #DC2727;\n}\n#__vconsole .vc-logbox .vc-item.vc-item-warn .vc-item-repeat {\n  color: #987D20;\n  background-color: #F4BD02;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code {\n  display: block;\n  white-space: pre-wrap;\n  overflow: auto;\n  position: relative;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input,\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output {\n  padding-left: 0.92307692em;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input:before,\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before {\n  content: "›";\n  position: absolute;\n  top: -0.23076923em;\n  left: 0;\n  font-size: 1.23076923em;\n  color: #6A5ACD;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before {\n  content: "‹";\n}\n#__vconsole .vc-logbox .vc-item .vc-fold {\n  display: block;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer {\n  display: block;\n  font-style: italic;\n  padding-left: 0.76923077em;\n  position: relative;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:active {\n  background-color: #E6E6E6;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:before {\n  content: "";\n  position: absolute;\n  top: 0.30769231em;\n  left: 0.15384615em;\n  width: 0;\n  height: 0;\n  border: transparent solid 0.30769231em;\n  border-left-color: #000;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer.vc-toggle:before {\n  top: 0.46153846em;\n  left: 0;\n  border-top-color: #000;\n  border-left-color: transparent;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner {\n  display: none;\n  margin-left: 0.76923077em;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner.vc-toggle {\n  display: block;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner .vc-code-key {\n  margin-left: 0.76923077em;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer .vc-code-key {\n  margin-left: 0;\n}\n#__vconsole .vc-logbox .vc-code-key {\n  color: #905;\n}\n#__vconsole .vc-logbox .vc-code-private-key {\n  color: #D391B5;\n}\n#__vconsole .vc-logbox .vc-code-function {\n  color: #905;\n  font-style: italic;\n}\n#__vconsole .vc-logbox .vc-code-number,\n#__vconsole .vc-logbox .vc-code-boolean {\n  color: #0086B3;\n}\n#__vconsole .vc-logbox .vc-code-string {\n  color: #183691;\n}\n#__vconsole .vc-logbox .vc-code-null,\n#__vconsole .vc-logbox .vc-code-undefined {\n  color: #666;\n}\n#__vconsole .vc-logbox .vc-cmd {\n  position: absolute;\n  height: 3.07692308em;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-top: 1px solid #D9D9D9;\n  display: block!important;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-input-wrap {\n  display: block;\n  height: 2.15384615em;\n  margin-right: 3.07692308em;\n  padding: 0.46153846em 0.61538462em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-input {\n  width: 100%;\n  border: none;\n  resize: none;\n  outline: none;\n  padding: 0;\n  font-size: 0.92307692em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-input::-webkit-input-placeholder {\n  line-height: 2.15384615em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 3.07692308em;\n  border: none;\n  background-color: #EFEFF4;\n  outline: none;\n  -webkit-touch-callout: none;\n  font-size: 1em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-prompted {\n  position: fixed;\n  width: 100%;\n  background-color: #FBF9FE;\n  border: 1px solid #D9D9D9;\n  overflow-x: scroll;\n  display: none;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-prompted li {\n  list-style: none;\n  line-height: 30px;\n  padding: 0 0.46153846em;\n  border-bottom: 1px solid #D9D9D9;\n}\n#__vconsole .vc-logbox .vc-group .vc-group-preview {\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-logbox .vc-group .vc-group-preview:active {\n  background-color: #E6E6E6;\n}\n#__vconsole .vc-logbox .vc-group .vc-group-detail {\n  display: none;\n  padding: 0 0 0.76923077em 1.53846154em;\n  border-bottom: 1px solid #EEE;\n}\n#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-detail {\n  display: block;\n  background-color: #FBF9FE;\n}\n#__vconsole .vc-logbox .vc-group.vc-actived .vc-table-row {\n  background-color: #FFF;\n}\n#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-preview {\n  background-color: #FBF9FE;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-direction: row;\n  -webkit-flex-wrap: wrap;\n  overflow: hidden;\n  border-bottom: 1px solid #EEE;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row.vc-left-border {\n  border-left: 1px solid #EEE;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col {\n  flex: 1;\n  -webkit-box-flex: 1;\n  padding: 0.23076923em 0.30769231em;\n  border-left: 1px solid #EEE;\n  overflow: auto;\n  white-space: pre-wrap;\n  word-break: break-word;\n  /*white-space: nowrap;\n        text-overflow: ellipsis;*/\n  -webkit-overflow-scrolling: touch;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col:first-child {\n  border: none;\n}\n#__vconsole .vc-logbox .vc-table .vc-small .vc-table-col {\n  padding: 0 0.30769231em;\n  font-size: 0.92307692em;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-2 {\n  flex: 2;\n  -webkit-box-flex: 2;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-3 {\n  flex: 3;\n  -webkit-box-flex: 3;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-4 {\n  flex: 4;\n  -webkit-box-flex: 4;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-5 {\n  flex: 5;\n  -webkit-box-flex: 5;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-6 {\n  flex: 6;\n  -webkit-box-flex: 6;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row-error {\n  border-color: #F4A0AB;\n  background-color: #FFE4E1;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row-error .vc-table-col {\n  color: #DC143C;\n  border-color: #F4A0AB;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-title {\n  font-weight: bold;\n}\n#__vconsole .vc-logbox.vc-actived {\n  display: block;\n}\n#__vconsole .vc-toolbar {\n  border-top: 1px solid #D9D9D9;\n  line-height: 3em;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  display: -webkit-box;\n  flex-direction: row;\n  -webkit-box-direction: row;\n}\n#__vconsole .vc-toolbar .vc-tool {\n  display: none;\n  text-decoration: none;\n  color: #000;\n  width: 50%;\n  flex: 1;\n  -webkit-box-flex: 1;\n  text-align: center;\n  position: relative;\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-toolbar .vc-tool.vc-toggle,\n#__vconsole .vc-toolbar .vc-tool.vc-global-tool {\n  display: block;\n}\n#__vconsole .vc-toolbar .vc-tool:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-toolbar .vc-tool:after {\n  content: " ";\n  position: absolute;\n  top: 0.53846154em;\n  bottom: 0.53846154em;\n  right: 0;\n  border-left: 1px solid #D9D9D9;\n}\n#__vconsole .vc-toolbar .vc-tool-last:after {\n  border: none;\n}\n@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {\n  #__vconsole .vc-toolbar,\n  #__vconsole .vc-switch {\n    bottom: constant(safe-area-inset-bottom);\n    bottom: env(safe-area-inset-bottom);\n  }\n}\n#__vconsole.vc-toggle .vc-switch {\n  display: none;\n}\n#__vconsole.vc-toggle .vc-mask {\n  background: rgba(0, 0, 0, 0.6);\n  display: block;\n}\n#__vconsole.vc-toggle .vc-panel {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n',
                '',
            ]),
                (e.exports = t);
        },
        function (e, t, n) {
            var o = n(6),
                r = n(41);
            'string' == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, '']]);
            var i = { insert: 'head', singleton: !1 };
            o(r, i);
            e.exports = r.locals || {};
        },
        function (e, t, n) {
            (t = n(7)(!1)).push([
                e.i,
                '/* color */\n.vcelm-node {\n  color: #183691;\n}\n.vcelm-k {\n  color: #0086B3;\n}\n.vcelm-v {\n  color: #905;\n}\n/* layout */\n.vcelm-l {\n  padding-left: 8px;\n  position: relative;\n  word-wrap: break-word;\n  line-height: 1;\n}\n/*.vcelm-l.vcelm-noc {\n  padding-left: 0;\n}*/\n.vcelm-l.vc-toggle > .vcelm-node {\n  display: block;\n}\n.vcelm-l .vcelm-node:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.vcelm-l.vcelm-noc .vcelm-node:active {\n  background-color: transparent;\n}\n.vcelm-t {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n/* level */\n.vcelm-l .vcelm-l {\n  display: none;\n}\n.vcelm-l.vc-toggle > .vcelm-l {\n  margin-left: 4px;\n  display: block;\n}\n/* arrow */\n.vcelm-l:before {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 6px;\n  left: 3px;\n  width: 0;\n  height: 0;\n  border: transparent solid 3px;\n  border-left-color: #000;\n}\n.vcelm-l.vc-toggle:before {\n  display: block;\n  top: 6px;\n  left: 0;\n  border-top-color: #000;\n  border-left-color: transparent;\n}\n.vcelm-l.vcelm-noc:before {\n  display: none;\n}\n',
                '',
            ]),
                (e.exports = t);
        },
        function (e, t) {
            function n(t, o) {
                return (
                    (e.exports = n =
                        Object.setPrototypeOf ||
                        function (e, t) {
                            return (e.__proto__ = t), e;
                        }),
                    n(t, o)
                );
            }
            e.exports = n;
        },
        function (e, t) {
            function n(t) {
                return (
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? (e.exports = n =
                              function (e) {
                                  return typeof e;
                              })
                        : (e.exports = n =
                              function (e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e;
                              }),
                    n(t)
                );
            }
            e.exports = n;
        },
        function (e, t) {
            e.exports = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            };
        },
        function (e, t, n) {
            var o = n(6),
                r = n(46);
            'string' == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, '']]);
            var i = { insert: 'head', singleton: !1 };
            o(r, i);
            e.exports = r.locals || {};
        },
        function (e, t, n) {
            (t = n(7)(!1)).push([
                e.i,
                '.vc-sub-tabbar {\n  background-color: #fbf9fe;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.vc-sub-tabbar .vc-subtab {\n  flex: 1;\n  line-height: 1.53846154em;\n  padding: 0.46153846em;\n  border-right: 1px solid #D9D9D9;\n  border-bottom: 1px solid #D9D9D9;\n  text-decoration: none;\n  text-align: center;\n  color: #000;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n.vc-sub-tabbar .vc-subtab:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.vc-sub-tabbar .vc-subtab.vc-actived {\n  background-color: #FFF;\n}\n.hidden {\n  display: none;\n}\n',
                '',
            ]),
                (e.exports = t);
        },
        function (e, t, n) {
            var o = n(6),
                r = n(48);
            'string' == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, '']]);
            var i = { insert: 'head', singleton: !1 };
            o(r, i);
            e.exports = r.locals || {};
        },
        function (e, t, n) {
            (t = n(7)(!1)).push([
                e.i,
                '.vc-sub-tabbar {\n  background-color: #fbf9fe;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.vc-sub-tabbar .vc-subtab {\n  flex: 1;\n  line-height: 1.53846154em;\n  padding: 0.46153846em;\n  border-right: 1px solid #D9D9D9;\n  border-bottom: 1px solid #D9D9D9;\n  text-decoration: none;\n  text-align: center;\n  color: #000;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n.vc-sub-tabbar .vc-subtab:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.vc-sub-tabbar .vc-subtab.vc-actived {\n  background-color: #FFF;\n}\n.hidden {\n  display: none;\n}\n',
                '',
            ]),
                (e.exports = t);
        },
        function (e, t, n) {
            'use strict';
            n.r(t);
            n(37);
            var o = n(17),
                r = n(1),
                i = n(0),
                a = (n(38), n(18)),
                c = n.n(a),
                l = n(19),
                s = n.n(l),
                d = n(20),
                u = n.n(d),
                v = n(21),
                f = n.n(v),
                p = n(22),
                b = n.n(p),
                h = n(2),
                m = n(3),
                g = n(13),
                _ = n(25),
                y = n.n(_);
            function w(e) {
                return (w =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function k(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function x(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function E(e, t, n) {
                return (E =
                    'undefined' != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (e, t, n) {
                              var o = (function (e, t) {
                                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = S(e)); );
                                  return e;
                              })(e, t);
                              if (o) {
                                  var r = Object.getOwnPropertyDescriptor(o, t);
                                  return r.get ? r.get.call(n) : r.value;
                              }
                          })(e, t, n || e);
            }
            function C(e, t) {
                return (C =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function T(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = S(e);
                    if (t) {
                        var r = S(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return O(this, n);
                };
            }
            function O(e, t) {
                return !t || ('object' !== w(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return e;
                      })(e)
                    : t;
            }
            function S(e) {
                return (S = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var L = (function (e) {
                    !(function (e, t) {
                        if ('function' != typeof t && null !== t)
                            throw new TypeError('Super expression must either be null or a function');
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: { value: e, writable: !0, configurable: !0 },
                        })),
                            t && C(e, t);
                    })(i, e);
                    var t,
                        n,
                        o,
                        r = T(i);
                    function i() {
                        var e;
                        k(this, i);
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        return (
                            ((e = r.call.apply(r, [this].concat(n))).tplTabbox = y.a), (e.allowUnformattedLog = !1), e
                        );
                    }
                    return (
                        (t = i),
                        (n = [
                            {
                                key: 'onInit',
                                value: function () {
                                    E(S(i.prototype), 'onInit', this).call(this), this.printSystemInfo();
                                },
                            },
                            {
                                key: 'printSystemInfo',
                                value: function () {
                                    var e = navigator.userAgent,
                                        t = '',
                                        n = e.match(/(ipod).*\s([\d_]+)/i),
                                        o = e.match(/(ipad).*\s([\d_]+)/i),
                                        r = e.match(/(iphone)\sos\s([\d_]+)/i),
                                        i = e.match(/(android)\s([\d\.]+)/i);
                                    (t = 'Unknown'),
                                        i
                                            ? (t = 'Android ' + i[2])
                                            : r
                                              ? (t = 'iPhone, iOS ' + r[2].replace(/_/g, '.'))
                                              : o
                                                ? (t = 'iPad, iOS ' + o[2].replace(/_/g, '.'))
                                                : n && (t = 'iPod, iOS ' + n[2].replace(/_/g, '.'));
                                    var a = t,
                                        c = e.match(/MicroMessenger\/([\d\.]+)/i);
                                    (t = 'Unknown'),
                                        c && c[1]
                                            ? ((a += ', WeChat ' + (t = c[1])), console.info('[system]', 'System:', a))
                                            : console.info('[system]', 'System:', a),
                                        (t = 'Unknown'),
                                        (a = t =
                                            'https:' == location.protocol
                                                ? 'HTTPS'
                                                : 'http:' == location.protocol
                                                  ? 'HTTP'
                                                  : location.protocol.replace(':', ''));
                                    var l = e.toLowerCase().match(/ nettype\/([^ ]+)/g);
                                    (t = 'Unknown'),
                                        l && l[0]
                                            ? ((a += ', ' + (t = (l = l[0].split('/'))[1])),
                                              console.info('[system]', 'Network:', a))
                                            : console.info('[system]', 'Protocol:', a),
                                        console.info('[system]', 'UA:', e),
                                        setTimeout(function () {
                                            var e =
                                                window.performance || window.msPerformance || window.webkitPerformance;
                                            if (e && e.timing) {
                                                var t = e.timing;
                                                t.navigationStart &&
                                                    console.info('[system]', 'navigationStart:', t.navigationStart),
                                                    t.navigationStart &&
                                                        t.domainLookupStart &&
                                                        console.info(
                                                            '[system]',
                                                            'navigation:',
                                                            t.domainLookupStart - t.navigationStart + 'ms',
                                                        ),
                                                    t.domainLookupEnd &&
                                                        t.domainLookupStart &&
                                                        console.info(
                                                            '[system]',
                                                            'dns:',
                                                            t.domainLookupEnd - t.domainLookupStart + 'ms',
                                                        ),
                                                    t.connectEnd &&
                                                        t.connectStart &&
                                                        (t.connectEnd && t.secureConnectionStart
                                                            ? console.info(
                                                                  '[system]',
                                                                  'tcp (ssl):',
                                                                  t.connectEnd -
                                                                      t.connectStart +
                                                                      'ms (' +
                                                                      (t.connectEnd - t.secureConnectionStart) +
                                                                      'ms)',
                                                              )
                                                            : console.info(
                                                                  '[system]',
                                                                  'tcp:',
                                                                  t.connectEnd - t.connectStart + 'ms',
                                                              )),
                                                    t.responseStart &&
                                                        t.requestStart &&
                                                        console.info(
                                                            '[system]',
                                                            'request:',
                                                            t.responseStart - t.requestStart + 'ms',
                                                        ),
                                                    t.responseEnd &&
                                                        t.responseStart &&
                                                        console.info(
                                                            '[system]',
                                                            'response:',
                                                            t.responseEnd - t.responseStart + 'ms',
                                                        ),
                                                    t.domComplete &&
                                                        t.domLoading &&
                                                        (t.domContentLoadedEventStart && t.domLoading
                                                            ? console.info(
                                                                  '[system]',
                                                                  'domComplete (domLoaded):',
                                                                  t.domComplete -
                                                                      t.domLoading +
                                                                      'ms (' +
                                                                      (t.domContentLoadedEventStart - t.domLoading) +
                                                                      'ms)',
                                                              )
                                                            : console.info(
                                                                  '[system]',
                                                                  'domComplete:',
                                                                  t.domComplete - t.domLoading + 'ms',
                                                              )),
                                                    t.loadEventEnd &&
                                                        t.loadEventStart &&
                                                        console.info(
                                                            '[system]',
                                                            'loadEvent:',
                                                            t.loadEventEnd - t.loadEventStart + 'ms',
                                                        ),
                                                    t.navigationStart &&
                                                        t.loadEventEnd &&
                                                        console.info(
                                                            '[system]',
                                                            'total (DOM):',
                                                            t.loadEventEnd -
                                                                t.navigationStart +
                                                                'ms (' +
                                                                (t.domComplete - t.navigationStart) +
                                                                'ms)',
                                                        );
                                            }
                                        }, 0);
                                },
                            },
                        ]) && x(t.prototype, n),
                        o && x(t, o),
                        i
                    );
                })(m.a),
                P = n(26),
                D = n.n(P),
                j = n(27),
                M = n.n(j),
                R = n(28),
                N = n.n(R);
            function A(e) {
                return (A =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function I(e, t) {
                var n;
                if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return $(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var o = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: r,
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                var i,
                    a = !0,
                    c = !1;
                return {
                    s: function () {
                        n = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (i = e);
                    },
                    f: function () {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (c) throw i;
                        }
                    },
                };
            }
            function $(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            function B(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function F(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function U(e, t) {
                return (U =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function H(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = K(e);
                    if (t) {
                        var r = K(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return q(this, n);
                };
            }
            function q(e, t) {
                return !t || ('object' !== A(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return e;
                      })(e)
                    : t;
            }
            function K(e) {
                return (K = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var W = (function (e) {
                    !(function (e, t) {
                        if ('function' != typeof t && null !== t)
                            throw new TypeError('Super expression must either be null or a function');
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: { value: e, writable: !0, configurable: !0 },
                        })),
                            t && U(e, t);
                    })(c, e);
                    var t,
                        n,
                        o,
                        a = H(c);
                    function c() {
                        var e;
                        B(this, c);
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        return (
                            ((e = a.call.apply(a, [this].concat(n))).$tabbox = i.a.render(D.a, {})),
                            (e.$header = null),
                            (e.reqList = {}),
                            (e.domList = {}),
                            (e.isReady = !1),
                            (e.isShow = !1),
                            (e.isInBottom = !0),
                            (e._open = void 0),
                            (e._send = void 0),
                            e.mockAjax(),
                            e
                        );
                    }
                    return (
                        (t = c),
                        (n = [
                            {
                                key: 'onRenderTab',
                                value: function (e) {
                                    e(this.$tabbox);
                                },
                            },
                            {
                                key: 'onAddTool',
                                value: function (e) {
                                    var t = this;
                                    e([
                                        {
                                            name: 'Clear',
                                            global: !1,
                                            onClick: function (e) {
                                                t.clearLog();
                                            },
                                        },
                                    ]);
                                },
                            },
                            {
                                key: 'onReady',
                                value: function () {
                                    var e = this;
                                    (e.isReady = !0),
                                        this.renderHeader(),
                                        i.a.delegate(
                                            i.a.one('.vc-log', this.$tabbox),
                                            'click',
                                            '.vc-group-preview',
                                            function (t) {
                                                var n = this.dataset.reqid,
                                                    o = this.parentNode;
                                                i.a.hasClass(o, 'vc-actived')
                                                    ? (i.a.removeClass(o, 'vc-actived'),
                                                      e.updateRequest(n, { actived: !1 }))
                                                    : (i.a.addClass(o, 'vc-actived'),
                                                      e.updateRequest(n, { actived: !0 })),
                                                    t.preventDefault();
                                            },
                                        );
                                    var t = i.a.one('.vc-content');
                                    for (var n in (i.a.bind(t, 'scroll', function (n) {
                                        e.isShow &&
                                            (t.scrollTop + t.offsetHeight >= t.scrollHeight
                                                ? (e.isInBottom = !0)
                                                : (e.isInBottom = !1));
                                    }),
                                    e.reqList))
                                        e.updateRequest(n, {});
                                },
                            },
                            {
                                key: 'onRemove',
                                value: function () {
                                    window.XMLHttpRequest &&
                                        ((window.XMLHttpRequest.prototype.open = this._open),
                                        (window.XMLHttpRequest.prototype.send = this._send),
                                        (this._open = void 0),
                                        (this._send = void 0));
                                },
                            },
                            {
                                key: 'onShow',
                                value: function () {
                                    (this.isShow = !0), 1 == this.isInBottom && this.scrollToBottom();
                                },
                            },
                            {
                                key: 'onHide',
                                value: function () {
                                    this.isShow = !1;
                                },
                            },
                            {
                                key: 'onShowConsole',
                                value: function () {
                                    1 == this.isInBottom && this.scrollToBottom();
                                },
                            },
                            {
                                key: 'scrollToBottom',
                                value: function () {
                                    var e = i.a.one('.vc-content');
                                    e.scrollTop = e.scrollHeight - e.offsetHeight;
                                },
                            },
                            {
                                key: 'clearLog',
                                value: function () {
                                    for (var e in ((this.reqList = {}), this.domList))
                                        this.domList[e].parentNode.removeChild(this.domList[e]),
                                            (this.domList[e] = void 0);
                                    (this.domList = {}), this.renderHeader();
                                },
                            },
                            {
                                key: 'renderHeader',
                                value: function () {
                                    var e = Object.keys(this.reqList).length,
                                        t = i.a.render(M.a, { count: e }),
                                        n = i.a.one('.vc-log', this.$tabbox);
                                    this.$header
                                        ? this.$header.parentNode.replaceChild(t, this.$header)
                                        : n.parentNode.insertBefore(t, n),
                                        (this.$header = t);
                                },
                            },
                            {
                                key: 'updateRequest',
                                value: function (e, t) {
                                    var n = Object.keys(this.reqList).length,
                                        o = this.reqList[e] || {};
                                    for (var a in t) o[a] = t[a];
                                    if (((this.reqList[e] = o), this.isReady)) {
                                        var c = {
                                            id: e,
                                            url: o.url,
                                            status: o.status,
                                            method: o.method || '-',
                                            costTime: o.costTime > 0 ? o.costTime + 'ms' : '-',
                                            header: o.header || null,
                                            getData: o.getData || null,
                                            postData: o.postData || null,
                                            response: null,
                                            actived: !!o.actived,
                                        };
                                        switch (o.responseType) {
                                            case '':
                                            case 'text':
                                                if (r.isString(o.response))
                                                    try {
                                                        (c.response = JSON.parse(o.response)),
                                                            (c.response = JSON.stringify(c.response, null, 1)),
                                                            (c.response = r.htmlEncode(c.response));
                                                    } catch (e) {
                                                        c.response = r.htmlEncode(o.response);
                                                    }
                                                else
                                                    void 0 !== o.response &&
                                                        (c.response = Object.prototype.toString.call(o.response));
                                                break;
                                            case 'json':
                                                void 0 !== o.response &&
                                                    ((c.response = JSON.stringify(o.response, null, 1)),
                                                    (c.response = r.htmlEncode(c.response)));
                                                break;
                                            case 'blob':
                                            case 'document':
                                            case 'arraybuffer':
                                            default:
                                                void 0 !== o.response &&
                                                    (c.response = Object.prototype.toString.call(o.response));
                                        }
                                        0 == o.readyState || 1 == o.readyState
                                            ? (c.status = 'Pending')
                                            : 2 == o.readyState || 3 == o.readyState
                                              ? (c.status = 'Loading')
                                              : 4 == o.readyState || (c.status = 'Unknown');
                                        var l = i.a.render(N.a, c),
                                            s = this.domList[e];
                                        o.status >= 400 &&
                                            i.a.addClass(i.a.one('.vc-group-preview', l), 'vc-table-row-error'),
                                            s
                                                ? s.parentNode.replaceChild(l, s)
                                                : i.a
                                                      .one('.vc-log', this.$tabbox)
                                                      .insertAdjacentElement('beforeend', l),
                                            (this.domList[e] = l),
                                            Object.keys(this.reqList).length != n && this.renderHeader(),
                                            this.isInBottom && this.scrollToBottom();
                                    }
                                },
                            },
                            {
                                key: 'mockAjax',
                                value: function () {
                                    if (window.XMLHttpRequest) {
                                        var e = this,
                                            t = window.XMLHttpRequest.prototype.open,
                                            n = window.XMLHttpRequest.prototype.send;
                                        (e._open = t),
                                            (e._send = n),
                                            (window.XMLHttpRequest.prototype.open = function () {
                                                var n = this,
                                                    o = [].slice.call(arguments),
                                                    r = o[0],
                                                    i = o[1],
                                                    a = e.getUniqueID(),
                                                    c = null;
                                                (n._requestID = a), (n._method = r), (n._url = i);
                                                var l = n.onreadystatechange || function () {},
                                                    s = function () {
                                                        var t = e.reqList[a] || {};
                                                        if (
                                                            ((t.readyState = n.readyState),
                                                            (t.status = 0),
                                                            n.readyState > 1 && (t.status = n.status),
                                                            (t.responseType = n.responseType),
                                                            0 == n.readyState)
                                                        )
                                                            t.startTime || (t.startTime = +new Date());
                                                        else if (1 == n.readyState)
                                                            t.startTime || (t.startTime = +new Date());
                                                        else if (2 == n.readyState) {
                                                            t.header = {};
                                                            for (
                                                                var o = n.getAllResponseHeaders() || '',
                                                                    r = o.split('\n'),
                                                                    i = 0;
                                                                i < r.length;
                                                                i++
                                                            ) {
                                                                var s = r[i];
                                                                if (s) {
                                                                    var d = s.split(': '),
                                                                        u = d[0],
                                                                        v = d.slice(1).join(': ');
                                                                    t.header[u] = v;
                                                                }
                                                            }
                                                        } else
                                                            3 == n.readyState ||
                                                                (4 == n.readyState
                                                                    ? (clearInterval(c),
                                                                      (t.endTime = +new Date()),
                                                                      (t.costTime =
                                                                          t.endTime - (t.startTime || t.endTime)),
                                                                      (t.response = n.response))
                                                                    : clearInterval(c));
                                                        return (
                                                            n._noVConsole || e.updateRequest(a, t),
                                                            l.apply(n, arguments)
                                                        );
                                                    };
                                                n.onreadystatechange = s;
                                                var d = -1;
                                                return (
                                                    (c = setInterval(function () {
                                                        d != n.readyState && ((d = n.readyState), s.call(n));
                                                    }, 10)),
                                                    t.apply(n, o)
                                                );
                                            }),
                                            (window.XMLHttpRequest.prototype.send = function () {
                                                var t = this,
                                                    o = [].slice.call(arguments),
                                                    i = o[0],
                                                    a = e.reqList[t._requestID] || {};
                                                a.method = t._method.toUpperCase();
                                                var c = t._url.split('?');
                                                if (((a.url = c.shift()), c.length > 0)) {
                                                    a.getData = {};
                                                    var l,
                                                        s = I((c = (c = c.join('?')).split('&')));
                                                    try {
                                                        for (s.s(); !(l = s.n()).done; ) {
                                                            var d = l.value;
                                                            (d = d.split('=')),
                                                                (a.getData[d[0]] = decodeURIComponent(d[1]));
                                                        }
                                                    } catch (e) {
                                                        s.e(e);
                                                    } finally {
                                                        s.f();
                                                    }
                                                }
                                                if ('POST' == a.method)
                                                    if (r.isString(i)) {
                                                        var u = i.split('&');
                                                        a.postData = {};
                                                        var v,
                                                            f = I(u);
                                                        try {
                                                            for (f.s(); !(v = f.n()).done; ) {
                                                                var p = v.value;
                                                                (p = p.split('=')), (a.postData[p[0]] = p[1]);
                                                            }
                                                        } catch (e) {
                                                            f.e(e);
                                                        } finally {
                                                            f.f();
                                                        }
                                                    } else r.isPlainObject(i) && (a.postData = i);
                                                return t._noVConsole || e.updateRequest(t._requestID, a), n.apply(t, o);
                                            });
                                    }
                                },
                            },
                            {
                                key: 'getUniqueID',
                                value: function () {
                                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                                        var t = (16 * Math.random()) | 0;
                                        return ('x' == e ? t : (3 & t) | 8).toString(16);
                                    });
                                },
                            },
                        ]) && F(t.prototype, n),
                        o && F(t, o),
                        c
                    );
                })(h.a),
                V = (n(40), n(29)),
                X = n.n(V),
                z = n(30),
                J = n.n(z),
                Y = n(31),
                G = n.n(Y);
            function Q(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            var Z = (function () {
                function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        (this.node = t),
                        (this.view = this._create(this.node));
                }
                var t, n, o;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'get',
                            value: function () {
                                return this.view;
                            },
                        },
                        {
                            key: '_create',
                            value: function (e, t) {
                                var n = document.createElement('DIV');
                                switch ((i.a.addClass(n, 'vcelm-l'), e.nodeType)) {
                                    case n.ELEMENT_NODE:
                                        this._createElementNode(e, n);
                                        break;
                                    case n.TEXT_NODE:
                                        this._createTextNode(e, n);
                                        break;
                                    case n.COMMENT_NODE:
                                    case n.DOCUMENT_NODE:
                                    case n.DOCUMENT_TYPE_NODE:
                                    case n.DOCUMENT_FRAGMENT_NODE:
                                }
                                return n;
                            },
                        },
                        {
                            key: '_createTextNode',
                            value: function (e, t) {
                                i.a.addClass(t, 'vcelm-t vcelm-noc'),
                                    e.textContent &&
                                        t.appendChild(
                                            (function (e) {
                                                return document.createTextNode(e);
                                            })(e.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')),
                                        );
                            },
                        },
                        {
                            key: '_createElementNode',
                            value: function (e, t) {
                                var n,
                                    o =
                                        ((n = (n = e.tagName) ? n.toLowerCase() : ''),
                                        ['br', 'hr', 'img', 'input', 'link', 'meta'].indexOf(n) > -1),
                                    r = o;
                                0 == e.childNodes.length && (r = !0);
                                var a = i.a.render(J.a, { node: e }),
                                    c = i.a.render(G.a, { node: e });
                                if (r) i.a.addClass(t, 'vcelm-noc'), t.appendChild(a), o || t.appendChild(c);
                                else {
                                    t.appendChild(a);
                                    for (var l = 0; l < e.childNodes.length; l++) {
                                        var s = document.createElement('DIV');
                                        i.a.addClass(s, 'vcelm-l'), t.appendChild(s);
                                    }
                                    o || t.appendChild(c);
                                }
                            },
                        },
                    ]) && Q(t.prototype, n),
                    o && Q(t, o),
                    e
                );
            })();
            function ee(e) {
                return (ee =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function te(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function ne(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function oe(e, t) {
                return (oe =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function re(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = ce(e);
                    if (t) {
                        var r = ce(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return ie(this, n);
                };
            }
            function ie(e, t) {
                return !t || ('object' !== ee(t) && 'function' != typeof t) ? ae(e) : t;
            }
            function ae(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function ce(e) {
                return (ce = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var le = (function (e) {
                    !(function (e, t) {
                        if ('function' != typeof t && null !== t)
                            throw new TypeError('Super expression must either be null or a function');
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: { value: e, writable: !0, configurable: !0 },
                        })),
                            t && oe(e, t);
                    })(a, e);
                    var t,
                        n,
                        o,
                        r = re(a);
                    function a() {
                        var e;
                        te(this, a);
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        var c = ae((e = r.call.apply(r, [this].concat(n))));
                        (c.isInited = !1),
                            (c.node = {}),
                            (c.$tabbox = i.a.render(X.a, {})),
                            (c.nodes = []),
                            (c.activedElem = {});
                        var l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        return (
                            (c.observer = new l(function (e) {
                                for (var t = 0; t < e.length; t++) {
                                    var n = e[t];
                                    c._isInVConsole(n.target) || c.onMutation(n);
                                }
                            })),
                            e
                        );
                    }
                    return (
                        (t = a),
                        (n = [
                            {
                                key: 'onRenderTab',
                                value: function (e) {
                                    e(this.$tabbox);
                                },
                            },
                            {
                                key: 'onAddTool',
                                value: function (e) {
                                    var t = this;
                                    e([
                                        {
                                            name: 'Expand',
                                            global: !1,
                                            onClick: function (e) {
                                                if (t.activedElem)
                                                    if (i.a.hasClass(t.activedElem, 'vc-toggle'))
                                                        for (var n = 0; n < t.activedElem.childNodes.length; n++) {
                                                            var o = t.activedElem.childNodes[n];
                                                            if (
                                                                i.a.hasClass(o, 'vcelm-l') &&
                                                                !i.a.hasClass(o, 'vcelm-noc') &&
                                                                !i.a.hasClass(o, 'vc-toggle')
                                                            ) {
                                                                i.a.one('.vcelm-node', o).click();
                                                                break;
                                                            }
                                                        }
                                                    else i.a.one('.vcelm-node', t.activedElem).click();
                                            },
                                        },
                                        {
                                            name: 'Collapse',
                                            global: !1,
                                            onClick: function (e) {
                                                t.activedElem &&
                                                    (i.a.hasClass(t.activedElem, 'vc-toggle')
                                                        ? i.a.one('.vcelm-node', t.activedElem).click()
                                                        : t.activedElem.parentNode &&
                                                          i.a.hasClass(t.activedElem.parentNode, 'vcelm-l') &&
                                                          i.a.one('.vcelm-node', t.activedElem.parentNode).click());
                                            },
                                        },
                                    ]);
                                },
                            },
                            {
                                key: 'onShow',
                                value: function () {
                                    if (!this.isInited) {
                                        (this.isInited = !0), (this.node = this.getNode(document.documentElement));
                                        var e = this.renderView(this.node, i.a.one('.vc-log', this.$tabbox)),
                                            t = i.a.one('.vcelm-node', e);
                                        t && t.click(),
                                            this.observer.observe(document.documentElement, {
                                                attributes: !0,
                                                childList: !0,
                                                characterData: !0,
                                                subtree: !0,
                                            });
                                    }
                                },
                            },
                            {
                                key: 'onRemove',
                                value: function () {
                                    this.observer.disconnect();
                                },
                            },
                            {
                                key: 'onMutation',
                                value: function (e) {
                                    switch (e.type) {
                                        case 'childList':
                                            e.removedNodes.length > 0 && this.onChildRemove(e),
                                                e.addedNodes.length > 0 && this.onChildAdd(e);
                                            break;
                                        case 'attributes':
                                            this.onAttributesChange(e);
                                            break;
                                        case 'characterData':
                                            this.onCharacterDataChange(e);
                                    }
                                },
                            },
                            {
                                key: 'onChildRemove',
                                value: function (e) {
                                    var t = e.target;
                                    if (t.__vconsole_node) {
                                        for (var n = 0; n < e.removedNodes.length; n++) {
                                            var o = e.removedNodes[n].__vconsole_node;
                                            o && o.view && o.view.parentNode.removeChild(o.view);
                                        }
                                        this.getNode(t);
                                    }
                                },
                            },
                            {
                                key: 'onChildAdd',
                                value: function (e) {
                                    var t = e.target,
                                        n = t.__vconsole_node;
                                    if (n) {
                                        this.getNode(t), n.view && i.a.removeClass(n.view, 'vcelm-noc');
                                        for (var o = 0; o < e.addedNodes.length; o++) {
                                            var r = e.addedNodes[o].__vconsole_node;
                                            if (r)
                                                if (null !== e.nextSibling) {
                                                    var a = e.nextSibling.__vconsole_node;
                                                    a.view && this.renderView(r, a.view, 'insertBefore');
                                                } else
                                                    n.view &&
                                                        (n.view.lastChild
                                                            ? this.renderView(r, n.view.lastChild, 'insertBefore')
                                                            : this.renderView(r, n.view));
                                        }
                                    }
                                },
                            },
                            {
                                key: 'onAttributesChange',
                                value: function (e) {
                                    var t = e.target.__vconsole_node;
                                    t && (t = this.getNode(e.target)).view && this.renderView(t, t.view, !0);
                                },
                            },
                            {
                                key: 'onCharacterDataChange',
                                value: function (e) {
                                    var t = e.target.__vconsole_node;
                                    t && (t = this.getNode(e.target)).view && this.renderView(t, t.view, !0);
                                },
                            },
                            {
                                key: 'renderView',
                                value: function (e, t, n) {
                                    var o = this,
                                        r = new Z(e).get();
                                    switch (
                                        ((e.view = r),
                                        i.a.delegate(r, 'click', '.vcelm-node', function (t) {
                                            t.stopPropagation();
                                            var n = this.parentNode;
                                            if (!i.a.hasClass(n, 'vcelm-noc')) {
                                                (o.activedElem = n),
                                                    i.a.hasClass(n, 'vc-toggle')
                                                        ? i.a.removeClass(n, 'vc-toggle')
                                                        : i.a.addClass(n, 'vc-toggle');
                                                for (var r = -1, a = 0; a < n.children.length; a++) {
                                                    var c = n.children[a];
                                                    i.a.hasClass(c, 'vcelm-l') &&
                                                        (r++,
                                                        c.children.length > 0 ||
                                                            (e.childNodes[r]
                                                                ? o.renderView(e.childNodes[r], c, 'replace')
                                                                : (c.style.display = 'none')));
                                                }
                                            }
                                        }),
                                        n)
                                    ) {
                                        case 'replace':
                                            t.parentNode.replaceChild(r, t);
                                            break;
                                        case 'insertBefore':
                                            t.parentNode.insertBefore(r, t);
                                            break;
                                        default:
                                            t.appendChild(r);
                                    }
                                    return r;
                                },
                            },
                            {
                                key: 'getNode',
                                value: function (e) {
                                    if (!this._isIgnoredElement(e)) {
                                        var t = e.__vconsole_node || {};
                                        if (
                                            ((t.nodeType = e.nodeType),
                                            (t.nodeName = e.nodeName),
                                            (t.tagName = e.tagName || ''),
                                            (t.textContent = ''),
                                            (t.nodeType != e.TEXT_NODE && t.nodeType != e.DOCUMENT_TYPE_NODE) ||
                                                (t.textContent = e.textContent),
                                            (t.id = e.id || ''),
                                            (t.className = e.className || ''),
                                            (t.attributes = []),
                                            e.hasAttributes && e.hasAttributes())
                                        )
                                            for (var n = 0; n < e.attributes.length; n++)
                                                t.attributes.push({
                                                    name: e.attributes[n].name,
                                                    value: e.attributes[n].value || '',
                                                });
                                        if (((t.childNodes = []), e.childNodes.length > 0))
                                            for (var o = 0; o < e.childNodes.length; o++) {
                                                var r = this.getNode(e.childNodes[o]);
                                                r && t.childNodes.push(r);
                                            }
                                        return (e.__vconsole_node = t), t;
                                    }
                                },
                            },
                            {
                                key: '_isIgnoredElement',
                                value: function (e) {
                                    return (
                                        e.nodeType == e.TEXT_NODE &&
                                        '' == e.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$|\n+/g, '')
                                    );
                                },
                            },
                            {
                                key: '_isInVConsole',
                                value: function (e) {
                                    for (var t = e; null != t; ) {
                                        if ('__vconsole' == t.id) return !0;
                                        t = t.parentNode || void 0;
                                    }
                                    return !1;
                                },
                            },
                        ]) && ne(t.prototype, n),
                        o && ne(t, o),
                        a
                    );
                })(h.a),
                se = n(32),
                de = n.n(se),
                ue = n(33),
                ve = n.n(ue);
            function fe(e) {
                return (fe =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function pe(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function be(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function he(e, t) {
                return (he =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function me(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = _e(e);
                    if (t) {
                        var r = _e(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return ge(this, n);
                };
            }
            function ge(e, t) {
                return !t || ('object' !== fe(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return e;
                      })(e)
                    : t;
            }
            function _e(e) {
                return (_e = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var ye = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError('Super expression must either be null or a function');
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                        t && he(e, t);
                })(c, e);
                var t,
                    n,
                    o,
                    a = me(c);
                function c() {
                    var e;
                    pe(this, c);
                    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                    return (
                        ((e = a.call.apply(a, [this].concat(n))).$tabbox = i.a.render(de.a, {})),
                        (e.currentType = ''),
                        (e.typeNameMap = {
                            cookies: 'Cookies',
                            localstorage: 'LocalStorage',
                            sessionstorage: 'SessionStorage',
                        }),
                        e
                    );
                }
                return (
                    (t = c),
                    (n = [
                        {
                            key: 'onRenderTab',
                            value: function (e) {
                                e(this.$tabbox);
                            },
                        },
                        {
                            key: 'onAddTopBar',
                            value: function (e) {
                                for (
                                    var t = this, n = ['Cookies', 'LocalStorage', 'SessionStorage'], o = [], r = 0;
                                    r < n.length;
                                    r++
                                )
                                    o.push({
                                        name: n[r],
                                        data: { type: n[r].toLowerCase() },
                                        className: '',
                                        onClick: function () {
                                            if (i.a.hasClass(this, 'vc-actived')) return !1;
                                            (t.currentType = this.dataset.type), t.renderStorage();
                                        },
                                    });
                                (o[0].className = 'vc-actived'), e(o);
                            },
                        },
                        {
                            key: 'onAddTool',
                            value: function (e) {
                                var t = this;
                                e([
                                    {
                                        name: 'Refresh',
                                        global: !1,
                                        onClick: function (e) {
                                            t.renderStorage();
                                        },
                                    },
                                    {
                                        name: 'Clear',
                                        global: !1,
                                        onClick: function (e) {
                                            t.clearLog();
                                        },
                                    },
                                ]);
                            },
                        },
                        { key: 'onReady', value: function () {} },
                        {
                            key: 'onShow',
                            value: function () {
                                '' == this.currentType && ((this.currentType = 'cookies'), this.renderStorage());
                            },
                        },
                        {
                            key: 'clearLog',
                            value: function () {
                                if (
                                    this.currentType &&
                                    window.confirm &&
                                    !window.confirm('Remove all ' + this.typeNameMap[this.currentType] + '?')
                                )
                                    return !1;
                                switch (this.currentType) {
                                    case 'cookies':
                                        this.clearCookieList();
                                        break;
                                    case 'localstorage':
                                        this.clearLocalStorageList();
                                        break;
                                    case 'sessionstorage':
                                        this.clearSessionStorageList();
                                        break;
                                    default:
                                        return !1;
                                }
                                this.renderStorage();
                            },
                        },
                        {
                            key: 'renderStorage',
                            value: function () {
                                var e = [];
                                switch (this.currentType) {
                                    case 'cookies':
                                        e = this.getCookieList();
                                        break;
                                    case 'localstorage':
                                        e = this.getLocalStorageList();
                                        break;
                                    case 'sessionstorage':
                                        e = this.getSessionStorageList();
                                        break;
                                    default:
                                        return !1;
                                }
                                var t = i.a.one('.vc-log', this.$tabbox);
                                if (0 == e.length) t.innerHTML = '';
                                else {
                                    for (var n = 0; n < e.length; n++)
                                        (e[n].name = r.htmlEncode(e[n].name)), (e[n].value = r.htmlEncode(e[n].value));
                                    t.innerHTML = i.a.render(ve.a, { list: e }, !0);
                                }
                            },
                        },
                        {
                            key: 'getCookieList',
                            value: function () {
                                if (!document.cookie || !navigator.cookieEnabled) return [];
                                for (var e = [], t = document.cookie.split(';'), n = 0; n < t.length; n++) {
                                    var o = t[n].split('='),
                                        r = o.shift().replace(/^ /, ''),
                                        i = o.join('=');
                                    try {
                                        (r = decodeURIComponent(r)), (i = decodeURIComponent(i));
                                    } catch (e) {
                                        console.log(e, r, i);
                                    }
                                    e.push({ name: r, value: i });
                                }
                                return e;
                            },
                        },
                        {
                            key: 'getLocalStorageList',
                            value: function () {
                                if (!window.localStorage) return [];
                                try {
                                    for (var e = [], t = 0; t < localStorage.length; t++) {
                                        var n = localStorage.key(t),
                                            o = localStorage.getItem(n);
                                        e.push({ name: n, value: o });
                                    }
                                    return e;
                                } catch (e) {
                                    return [];
                                }
                            },
                        },
                        {
                            key: 'getSessionStorageList',
                            value: function () {
                                if (!window.sessionStorage) return [];
                                try {
                                    for (var e = [], t = 0; t < sessionStorage.length; t++) {
                                        var n = sessionStorage.key(t),
                                            o = sessionStorage.getItem(n);
                                        e.push({ name: n, value: o });
                                    }
                                    return e;
                                } catch (e) {
                                    return [];
                                }
                            },
                        },
                        {
                            key: 'clearCookieList',
                            value: function () {
                                if (document.cookie && navigator.cookieEnabled) {
                                    for (
                                        var e = window.location.hostname, t = this.getCookieList(), n = 0;
                                        n < t.length;
                                        n++
                                    ) {
                                        var o = t[n].name;
                                        (document.cookie = ''.concat(o, '=;expires=Thu, 01 Jan 1970 00:00:00 GMT')),
                                            (document.cookie = ''.concat(
                                                o,
                                                '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/',
                                            )),
                                            (document.cookie = ''
                                                .concat(o, '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.')
                                                .concat(e.split('.').slice(-2).join('.')));
                                    }
                                    this.renderStorage();
                                }
                            },
                        },
                        {
                            key: 'clearLocalStorageList',
                            value: function () {
                                if (window.localStorage)
                                    try {
                                        localStorage.clear(), this.renderStorage();
                                    } catch (e) {
                                        alert('localStorage.clear() fail.');
                                    }
                            },
                        },
                        {
                            key: 'clearSessionStorageList',
                            value: function () {
                                if (window.sessionStorage)
                                    try {
                                        sessionStorage.clear(), this.renderStorage();
                                    } catch (e) {
                                        alert('sessionStorage.clear() fail.');
                                    }
                            },
                        },
                    ]) && be(t.prototype, n),
                    o && be(t, o),
                    c
                );
            })(h.a);
            function we(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            var ke = (function () {
                function e(t) {
                    if (
                        ((function (e, t) {
                            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                        })(this, e),
                        i.a.one('#__vconsole'))
                    )
                        console.debug('vConsole is already exists.');
                    else {
                        var n = this;
                        if (
                            ((this.version = o.version),
                            (this.$dom = null),
                            (this.isInited = !1),
                            (this.option = { defaultPlugins: ['system', 'network', 'element', 'storage'] }),
                            (this.activedTab = ''),
                            (this.tabList = []),
                            (this.pluginList = {}),
                            (this.switchPos = { x: 10, y: 10, startX: 0, startY: 0, endX: 0, endY: 0 }),
                            (this.tool = r),
                            (this.$ = i.a),
                            r.isObject(t))
                        )
                            for (var a in t) this.option[a] = t[a];
                        this._addBuiltInPlugins();
                        var c = function () {
                            n.isInited || (n._render(), n._mockTap(), n._bindEvent(), n._autoRun());
                        };
                        if (void 0 !== document)
                            'loading' === document.readyState ? i.a.bind(window, 'DOMContentLoaded', c) : c();
                        else {
                            var l;
                            l = setTimeout(function e() {
                                document && 'complete' == document.readyState
                                    ? (l && clearTimeout(l), c())
                                    : (l = setTimeout(e, 1));
                            }, 1);
                        }
                    }
                }
                var t, n, a;
                return (
                    (t = e),
                    (n = [
                        {
                            key: '_addBuiltInPlugins',
                            value: function () {
                                this.addPlugin(new g.a('default', 'Log'));
                                var e = this.option.defaultPlugins,
                                    t = {
                                        system: { proto: L, name: 'System' },
                                        network: { proto: W, name: 'Network' },
                                        element: { proto: le, name: 'Element' },
                                        storage: { proto: ye, name: 'Storage' },
                                    };
                                if (e && r.isArray(e))
                                    for (var n = 0; n < e.length; n++) {
                                        var o = t[e[n]];
                                        o
                                            ? this.addPlugin(new o.proto(e[n], o.name))
                                            : console.debug('Unrecognized default plugin ID:', e[n]);
                                    }
                            },
                        },
                        {
                            key: '_render',
                            value: function () {
                                if (!i.a.one('#__vconsole')) {
                                    var e = document.createElement('div');
                                    (e.innerHTML = c.a),
                                        document.documentElement.insertAdjacentElement('beforeend', e.children[0]);
                                }
                                this.$dom = i.a.one('#__vconsole');
                                var t = i.a.one('.vc-switch', this.$dom),
                                    n = 1 * r.getStorage('switch_x'),
                                    o = 1 * r.getStorage('switch_y');
                                (n || o) &&
                                    (n + t.offsetWidth > document.documentElement.offsetWidth &&
                                        (n = document.documentElement.offsetWidth - t.offsetWidth),
                                    o + t.offsetHeight > document.documentElement.offsetHeight &&
                                        (o = document.documentElement.offsetHeight - t.offsetHeight),
                                    n < 0 && (n = 0),
                                    o < 0 && (o = 0),
                                    (this.switchPos.x = n),
                                    (this.switchPos.y = o),
                                    (i.a.one('.vc-switch').style.right = n + 'px'),
                                    (i.a.one('.vc-switch').style.bottom = o + 'px'));
                                var a = window.devicePixelRatio || 1,
                                    l = document.querySelector('[name="viewport"]');
                                if (l && l.content) {
                                    var s = l.content.match(/initial\-scale\=\d+(\.\d+)?/);
                                    (s ? parseFloat(s[0].split('=')[1]) : 1) < 1 &&
                                        (this.$dom.style.fontSize = 13 * a + 'px');
                                }
                                i.a.one('.vc-mask', this.$dom).style.display = 'none';
                            },
                        },
                        {
                            key: '_mockTap',
                            value: function () {
                                var e,
                                    t,
                                    n,
                                    o = !1,
                                    r = null;
                                this.$dom.addEventListener(
                                    'touchstart',
                                    function (o) {
                                        if (void 0 === e) {
                                            var i = o.targetTouches[0];
                                            (t = i.pageX),
                                                (n = i.pageY),
                                                (e = o.timeStamp),
                                                (r =
                                                    o.target.nodeType === Node.TEXT_NODE
                                                        ? o.target.parentNode
                                                        : o.target);
                                        }
                                    },
                                    !1,
                                ),
                                    this.$dom.addEventListener('touchmove', function (e) {
                                        var r = e.changedTouches[0];
                                        (Math.abs(r.pageX - t) > 10 || Math.abs(r.pageY - n) > 10) && (o = !0);
                                    }),
                                    this.$dom.addEventListener(
                                        'touchend',
                                        function (t) {
                                            if (!1 === o && t.timeStamp - e < 700 && null != r) {
                                                var n = !1;
                                                switch (r.tagName.toLowerCase()) {
                                                    case 'textarea':
                                                        n = !0;
                                                        break;
                                                    case 'input':
                                                        switch (r.type) {
                                                            case 'button':
                                                            case 'checkbox':
                                                            case 'file':
                                                            case 'image':
                                                            case 'radio':
                                                            case 'submit':
                                                                n = !1;
                                                                break;
                                                            default:
                                                                n = !r.disabled && !r.readOnly;
                                                        }
                                                }
                                                n ? r.focus() : t.preventDefault();
                                                var i = t.changedTouches[0],
                                                    a = document.createEvent('MouseEvents');
                                                a.initMouseEvent(
                                                    'click',
                                                    !0,
                                                    !0,
                                                    window,
                                                    1,
                                                    i.screenX,
                                                    i.screenY,
                                                    i.clientX,
                                                    i.clientY,
                                                    !1,
                                                    !1,
                                                    !1,
                                                    !1,
                                                    0,
                                                    null,
                                                ),
                                                    (a.forwardedTouchEvent = !0),
                                                    a.initEvent('click', !0, !0),
                                                    r.dispatchEvent(a);
                                            }
                                            (e = void 0), (o = !1), (r = null);
                                        },
                                        !1,
                                    );
                            },
                        },
                        {
                            key: '_bindEvent',
                            value: function () {
                                var e = this,
                                    t = i.a.one('.vc-switch', e.$dom);
                                i.a.bind(t, 'touchstart', function (t) {
                                    (e.switchPos.startX = t.touches[0].pageX),
                                        (e.switchPos.startY = t.touches[0].pageY);
                                }),
                                    i.a.bind(t, 'touchend', function (t) {
                                        (e.switchPos.x = e.switchPos.endX),
                                            (e.switchPos.y = e.switchPos.endY),
                                            (e.switchPos.startX = 0),
                                            (e.switchPos.startY = 0),
                                            r.setStorage('switch_x', e.switchPos.x),
                                            r.setStorage('switch_y', e.switchPos.y);
                                    }),
                                    i.a.bind(t, 'touchmove', function (n) {
                                        if (n.touches.length > 0) {
                                            var o = n.touches[0].pageX - e.switchPos.startX,
                                                r = n.touches[0].pageY - e.switchPos.startY,
                                                i = e.switchPos.x - o,
                                                a = e.switchPos.y - r;
                                            i + t.offsetWidth > document.documentElement.offsetWidth &&
                                                (i = document.documentElement.offsetWidth - t.offsetWidth),
                                                a + t.offsetHeight > document.documentElement.offsetHeight &&
                                                    (a = document.documentElement.offsetHeight - t.offsetHeight),
                                                i < 0 && (i = 0),
                                                a < 0 && (a = 0),
                                                (t.style.right = i + 'px'),
                                                (t.style.bottom = a + 'px'),
                                                (e.switchPos.endX = i),
                                                (e.switchPos.endY = a),
                                                n.preventDefault();
                                        }
                                    }),
                                    i.a.bind(i.a.one('.vc-switch', e.$dom), 'click', function () {
                                        e.show();
                                    }),
                                    i.a.bind(i.a.one('.vc-hide', e.$dom), 'click', function () {
                                        e.hide();
                                    }),
                                    i.a.bind(i.a.one('.vc-mask', e.$dom), 'click', function (t) {
                                        if (t.target != i.a.one('.vc-mask')) return !1;
                                        e.hide();
                                    }),
                                    i.a.delegate(i.a.one('.vc-tabbar', e.$dom), 'click', '.vc-tab', function (t) {
                                        var n = this.dataset.tab;
                                        n != e.activedTab && e.showTab(n);
                                    }),
                                    i.a.bind(
                                        i.a.one('.vc-panel', e.$dom),
                                        'transitionend webkitTransitionEnd oTransitionEnd otransitionend',
                                        function (t) {
                                            if (t.target != i.a.one('.vc-panel')) return !1;
                                            i.a.hasClass(e.$dom, 'vc-toggle') || (t.target.style.display = 'none');
                                        },
                                    );
                                var n = i.a.one('.vc-content', e.$dom),
                                    o = !1;
                                i.a.bind(n, 'touchstart', function (e) {
                                    var t = n.scrollTop,
                                        r = n.scrollHeight,
                                        a = t + n.offsetHeight;
                                    0 === t
                                        ? ((n.scrollTop = 1),
                                          0 === n.scrollTop && (i.a.hasClass(e.target, 'vc-cmd-input') || (o = !0)))
                                        : a === r &&
                                          ((n.scrollTop = t - 1),
                                          n.scrollTop === t && (i.a.hasClass(e.target, 'vc-cmd-input') || (o = !0)));
                                }),
                                    i.a.bind(n, 'touchmove', function (e) {
                                        o && e.preventDefault();
                                    }),
                                    i.a.bind(n, 'touchend', function (e) {
                                        o = !1;
                                    });
                            },
                        },
                        {
                            key: '_autoRun',
                            value: function () {
                                for (var e in ((this.isInited = !0), this.pluginList))
                                    this._initPlugin(this.pluginList[e]);
                                this.tabList.length > 0 && this.showTab(this.tabList[0]), this.triggerEvent('ready');
                            },
                        },
                        {
                            key: 'triggerEvent',
                            value: function (e, t) {
                                (e = 'on' + e.charAt(0).toUpperCase() + e.slice(1)),
                                    r.isFunction(this.option[e]) && this.option[e].apply(this, t);
                            },
                        },
                        {
                            key: '_initPlugin',
                            value: function (e) {
                                var t = this;
                                (e.vConsole = this),
                                    e.trigger('init'),
                                    e.trigger('renderTab', function (n) {
                                        t.tabList.push(e.id);
                                        var o = i.a.render(s.a, { id: e.id, name: e.name });
                                        i.a.one('.vc-tabbar', t.$dom).insertAdjacentElement('beforeend', o);
                                        var a = i.a.render(u.a, { id: e.id });
                                        n &&
                                            (r.isString(n)
                                                ? (a.innerHTML += n)
                                                : r.isFunction(n.appendTo)
                                                  ? n.appendTo(a)
                                                  : r.isElement(n) && a.insertAdjacentElement('beforeend', n)),
                                            i.a.one('.vc-content', t.$dom).insertAdjacentElement('beforeend', a);
                                    }),
                                    e.trigger('addTopBar', function (n) {
                                        if (n)
                                            for (
                                                var o = i.a.one('.vc-topbar', t.$dom),
                                                    a = function (t) {
                                                        var a = n[t],
                                                            c = i.a.render(f.a, {
                                                                name: a.name || 'Undefined',
                                                                className: a.className || '',
                                                                pluginID: e.id,
                                                            });
                                                        if (a.data) for (var l in a.data) c.dataset[l] = a.data[l];
                                                        r.isFunction(a.onClick) &&
                                                            i.a.bind(c, 'click', function (t) {
                                                                !1 === a.onClick.call(c) ||
                                                                    (i.a.removeClass(
                                                                        i.a.all('.vc-topbar-' + e.id),
                                                                        'vc-actived',
                                                                    ),
                                                                    i.a.addClass(c, 'vc-actived'));
                                                            }),
                                                            o.insertAdjacentElement('beforeend', c);
                                                    },
                                                    c = 0;
                                                c < n.length;
                                                c++
                                            )
                                                a(c);
                                    }),
                                    e.trigger('addTool', function (n) {
                                        if (n)
                                            for (
                                                var o = i.a.one('.vc-tool-last', t.$dom),
                                                    a = function (t) {
                                                        var a = n[t],
                                                            c = i.a.render(b.a, {
                                                                name: a.name || 'Undefined',
                                                                pluginID: e.id,
                                                            });
                                                        1 == a.global && i.a.addClass(c, 'vc-global-tool'),
                                                            r.isFunction(a.onClick) &&
                                                                i.a.bind(c, 'click', function (e) {
                                                                    a.onClick.call(c);
                                                                }),
                                                            o.parentNode.insertBefore(c, o);
                                                    },
                                                    c = 0;
                                                c < n.length;
                                                c++
                                            )
                                                a(c);
                                    }),
                                    (e.isReady = !0),
                                    e.trigger('ready');
                            },
                        },
                        {
                            key: '_triggerPluginsEvent',
                            value: function (e) {
                                for (var t in this.pluginList)
                                    this.pluginList[t].isReady && this.pluginList[t].trigger(e);
                            },
                        },
                        {
                            key: '_triggerPluginEvent',
                            value: function (e, t) {
                                var n = this.pluginList[e];
                                n && n.isReady && n.trigger(t);
                            },
                        },
                        {
                            key: 'addPlugin',
                            value: function (e) {
                                return void 0 !== this.pluginList[e.id]
                                    ? (console.debug('Plugin ' + e.id + ' has already been added.'), !1)
                                    : ((this.pluginList[e.id] = e),
                                      this.isInited &&
                                          (this._initPlugin(e),
                                          1 == this.tabList.length && this.showTab(this.tabList[0])),
                                      !0);
                            },
                        },
                        {
                            key: 'removePlugin',
                            value: function (e) {
                                e = (e + '').toLowerCase();
                                var t = this.pluginList[e];
                                if (void 0 === t) return console.debug('Plugin ' + e + ' does not exist.'), !1;
                                if ((t.trigger('remove'), this.isInited)) {
                                    var n = i.a.one('#__vc_tab_' + e);
                                    n && n.parentNode.removeChild(n);
                                    for (var o = i.a.all('.vc-topbar-' + e, this.$dom), r = 0; r < o.length; r++)
                                        o[r].parentNode.removeChild(o[r]);
                                    var a = i.a.one('#__vc_log_' + e);
                                    a && a.parentNode.removeChild(a);
                                    for (var c = i.a.all('.vc-tool-' + e, this.$dom), l = 0; l < c.length; l++)
                                        c[l].parentNode.removeChild(c[l]);
                                }
                                var s = this.tabList.indexOf(e);
                                s > -1 && this.tabList.splice(s, 1);
                                try {
                                    delete this.pluginList[e];
                                } catch (t) {
                                    this.pluginList[e] = void 0;
                                }
                                return (
                                    this.activedTab == e && this.tabList.length > 0 && this.showTab(this.tabList[0]), !0
                                );
                            },
                        },
                        {
                            key: 'show',
                            value: function () {
                                if (this.isInited) {
                                    var e = this;
                                    (i.a.one('.vc-panel', this.$dom).style.display = 'block'),
                                        setTimeout(function () {
                                            i.a.addClass(e.$dom, 'vc-toggle'),
                                                e._triggerPluginsEvent('showConsole'),
                                                (i.a.one('.vc-mask', e.$dom).style.display = 'block');
                                        }, 10);
                                }
                            },
                        },
                        {
                            key: 'hide',
                            value: function () {
                                if (this.isInited) {
                                    i.a.removeClass(this.$dom, 'vc-toggle'), this._triggerPluginsEvent('hideConsole');
                                    var e = i.a.one('.vc-mask', this.$dom),
                                        t = i.a.one('.vc-panel', this.$dom);
                                    i.a.bind(e, 'transitionend', function (n) {
                                        (e.style.display = 'none'), (t.style.display = 'none');
                                    });
                                }
                            },
                        },
                        {
                            key: 'showSwitch',
                            value: function () {
                                this.isInited && (i.a.one('.vc-switch', this.$dom).style.display = 'block');
                            },
                        },
                        {
                            key: 'hideSwitch',
                            value: function () {
                                this.isInited && (i.a.one('.vc-switch', this.$dom).style.display = 'none');
                            },
                        },
                        {
                            key: 'showTab',
                            value: function (e) {
                                if (this.isInited) {
                                    var t = i.a.one('#__vc_log_' + e);
                                    i.a.removeClass(i.a.all('.vc-tab', this.$dom), 'vc-actived'),
                                        i.a.addClass(i.a.one('#__vc_tab_' + e), 'vc-actived'),
                                        i.a.removeClass(i.a.all('.vc-logbox', this.$dom), 'vc-actived'),
                                        i.a.addClass(t, 'vc-actived');
                                    var n = i.a.all('.vc-topbar-' + e, this.$dom);
                                    i.a.removeClass(i.a.all('.vc-toptab', this.$dom), 'vc-toggle'),
                                        i.a.addClass(n, 'vc-toggle'),
                                        n.length > 0
                                            ? i.a.addClass(i.a.one('.vc-content', this.$dom), 'vc-has-topbar')
                                            : i.a.removeClass(i.a.one('.vc-content', this.$dom), 'vc-has-topbar'),
                                        i.a.removeClass(i.a.all('.vc-tool', this.$dom), 'vc-toggle'),
                                        i.a.addClass(i.a.all('.vc-tool-' + e, this.$dom), 'vc-toggle'),
                                        this.activedTab && this._triggerPluginEvent(this.activedTab, 'hide'),
                                        (this.activedTab = e),
                                        this._triggerPluginEvent(this.activedTab, 'show');
                                }
                            },
                        },
                        {
                            key: 'setOption',
                            value: function (e, t) {
                                if (r.isString(e)) (this.option[e] = t), this._triggerPluginsEvent('updateOption');
                                else if (r.isObject(e)) {
                                    for (var n in e) this.option[n] = e[n];
                                    this._triggerPluginsEvent('updateOption');
                                } else
                                    console.debug(
                                        'The first parameter of vConsole.setOption() must be a string or an object.',
                                    );
                            },
                        },
                        {
                            key: 'destroy',
                            value: function () {
                                if (this.isInited) {
                                    for (var e = Object.keys(this.pluginList), t = e.length - 1; t >= 0; t--)
                                        this.removePlugin(e[t]);
                                    this.$dom.parentNode.removeChild(this.$dom), (this.isInited = !1);
                                }
                            },
                        },
                    ]) && we(t.prototype, n),
                    a && we(t, a),
                    e
                );
            })();
            (ke.VConsolePlugin = h.a),
                (ke.VConsoleLogPlugin = m.a),
                (ke.VConsoleDefaultPlugin = g.a),
                (ke.VConsoleSystemPlugin = L),
                (ke.VConsoleNetworkPlugin = W),
                (ke.VConsoleElementPlugin = le),
                (ke.VConsoleStoragePlugin = ye);
            var xe = ke,
                Ee = n(8),
                Ce = n.n(Ee),
                Te = n(9),
                Oe = n.n(Te),
                Se = n(10),
                Le = n.n(Se),
                Pe = n(11),
                De = n.n(Pe),
                je = n(4),
                Me = n.n(je),
                Re = n(34),
                Ne = n.n(Re),
                Ae = (n(45), n(35)),
                Ie = n.n(Ae),
                $e = n(15),
                Be = n.n($e),
                Fe = n(16),
                Ue = n.n(Fe);
            function He(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = Me()(e);
                    if (t) {
                        var r = Me()(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return De()(this, n);
                };
            }
            n(47);
            var qe = n(36),
                Ke = n.n(qe);
            function We(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = Me()(e);
                    if (t) {
                        var r = Me()(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return De()(this, n);
                };
            }
            var Ve = new xe({});
            Ve.addPlugin(
                (function () {
                    var e = {},
                        t = [],
                        n = [],
                        o = ['bowsharedmemory'];
                    var r = Ne.a || window.myconsole;
                    if (r) c(r);
                    else {
                        var a = !1;
                        document.addEventListener('myconsoleReady', function (e) {
                            (a = !0), c(e.myconsole);
                        }),
                            setTimeout(function () {
                                a ||
                                    console.warn(
                                        'myconsole 调试工具初始化失败！如果您的 myconsole.js 版本低于 1.0.11 请将 myconsole-console.js 引用至 myconsole.js 之后；如果是 1.0.11 及以上版本，请将 myconsole-console.js 引用至文档最顶端。',
                                    );
                            }, 5e3);
                    }
                    function c(r) {
                        console.info('[system] myconsole js 版本: '.concat(r.version)),
                            console.info(
                                '[system] myconsole 混合版本: '.concat(
                                    r.env.hybridVersion ? r.env.hybridVersion : '无',
                                ),
                            ),
                            console.info('[system] 应用名称：'.concat(r.env.appName ? r.env.appName : '无')),
                            console.info('[system] 应用版本：'.concat(r.env.appVersion ? r.env.appVersion : '无')),
                            console.info(
                                '[system] 是否开启WK：'.concat(
                                    /useWK=true/.test(window.navigator.userAgent) ||
                                        (window._myconsoleConfig && window._myconsoleConfig.useWK)
                                        ? '已开启'
                                        : '未开启',
                                ),
                            ),
                            console.info('[system] 页面地址：'.concat(window.location.href)),
                            r
                                .on('call', function (t) {
                                    var n, r;
                                    (n = t.args.length > 0 ? t.args[t.args.length - 1] : t.args[0]),
                                        -1 !== t.action.lastIndexOf('Sync') ||
                                            ((r = t.component), o.indexOf(r.toLowerCase()) > -1) ||
                                            ('function' != typeof n &&
                                                (void 0 === n && t.args.pop(), t.args.push(function () {}))),
                                        (e[t.callId] = {
                                            component: t.component,
                                            action: t.action,
                                            args: t.args,
                                            startTime: new Date().getTime(),
                                        });
                                })
                                .on('callback', function (n) {
                                    var o = new Date().getTime(),
                                        r = n.handlerKey.split('_')[0],
                                        a = e[r],
                                        c = ''
                                            .concat(a.component, '.')
                                            .concat(a.action, ' 参数：')
                                            .concat(JSON.stringify(a.args), ' 回调参数：')
                                            .concat(JSON.stringify(n.args)),
                                        l = {
                                            meta: new Date(),
                                            content: c,
                                            elasped: ' 耗时：'.concat(o - a.startTime, ' ms'),
                                        },
                                        s = i.a.one('#myconsole-component-panel');
                                    s
                                        ? (t.forEach(function (e) {
                                              s.appendChild(i.a.render(Be.a, e));
                                          }),
                                          (t = []),
                                          s.appendChild(i.a.render(Be.a, l)))
                                        : t.push(l);
                                })
                                .on('event', function (e) {
                                    var t = {
                                            meta: new Date(),
                                            content: ''.concat(e.eventName, ' 参数：').concat(JSON.stringify(e.args)),
                                        },
                                        o = i.a.one('#myconsole-event-panel');
                                    o
                                        ? (n.forEach(function (e) {
                                              o.appendChild(i.a.render(Ue.a, e));
                                          }),
                                          (n = []),
                                          o.appendChild(i.a.render(Ue.a, t)))
                                        : n.push(t);
                                })
                                .on('error', function (e) {
                                    console.error(e);
                                });
                    }
                    return new ((function (e) {
                        Le()(n, e);
                        var t = He(n);
                        function n() {
                            var e;
                            Ce()(this, n);
                            for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                            return (
                                ((e = t.call.apply(t, [this].concat(r))).$tabbox = i.a.render(Ie.a, {})),
                                (e.currentType = 'component'),
                                (e.typeNameMap = { component: '组件', event: '事件' }),
                                e
                            );
                        }
                        return (
                            Oe()(n, [
                                {
                                    key: 'onRenderTab',
                                    value: function (e) {
                                        e(this.$tabbox);
                                    },
                                },
                                {
                                    key: 'onAddTool',
                                    value: function (e) {
                                        var t = this;
                                        e([
                                            {
                                                name: 'Refresh',
                                                onClick: function (e) {
                                                    location.reload();
                                                },
                                            },
                                            {
                                                name: 'Clear',
                                                onClick: function (e) {
                                                    if (
                                                        t.currentType &&
                                                        window.confirm &&
                                                        !window.confirm(
                                                            '确定要清空 ' + t.typeNameMap[t.currentType] + '?',
                                                        )
                                                    )
                                                        return !1;
                                                    t.clear();
                                                },
                                            },
                                        ]);
                                    },
                                },
                                {
                                    key: 'onReady',
                                    value: function () {
                                        var e = this;
                                        i.a.delegate(
                                            i.a.one('.vc-sub-tabbar', e.$tabbox),
                                            'click',
                                            '.vc-subtab',
                                            function (t) {
                                                i.a.removeClass(i.a.all('.vc-subtab', e.$tabbox), 'vc-actived'),
                                                    i.a.addClass(this, 'vc-actived'),
                                                    (e.currentType = this.dataset.type),
                                                    e.switchPanel();
                                            },
                                        );
                                    },
                                },
                                {
                                    key: 'switchPanel',
                                    value: function () {
                                        'component' === this.currentType
                                            ? (i.a.removeClass(i.a.one('#myconsole-component-panel'), 'hidden'),
                                              i.a.addClass(i.a.one('#myconsole-event-panel'), 'hidden'))
                                            : (i.a.addClass(i.a.one('#myconsole-component-panel'), 'hidden'),
                                              i.a.removeClass(i.a.one('#myconsole-event-panel'), 'hidden'));
                                    },
                                },
                                {
                                    key: 'clear',
                                    value: function () {
                                        'component' === this.currentType
                                            ? (i.a.one('#myconsole-component-panel').innerHTML = '')
                                            : (i.a.one('#myconsole-event-panel').innerHTML = '');
                                    },
                                },
                            ]),
                            n
                        );
                    })(xe.VConsolePlugin))('myconsole', 'myconsole');
                })(),
            ),
                Ve.addPlugin(
                    new ((function (e) {
                        Le()(n, e);
                        var t = We(n);
                        function n() {
                            var e;
                            Ce()(this, n);
                            for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                            return (
                                ((e = t.call.apply(t, [this].concat(r))).$tabbox = i.a.render(Ke.a, {})),
                                (e.currentType = 'component'),
                                e
                            );
                        }
                        return (
                            Oe()(n, [
                                {
                                    key: 'onRenderTab',
                                    value: function (e) {
                                        e(this.$tabbox);
                                    },
                                },
                                {
                                    key: 'onAddTool',
                                    value: function (e) {
                                        var t = this;
                                        e([
                                            {
                                                name: 'Refresh',
                                                onClick: function (e) {
                                                    location.reload();
                                                },
                                            },
                                            {
                                                name: 'Clear',
                                                onClick: function (e) {
                                                    if (window.confirm && !window.confirm('确定要清空?')) return !1;
                                                    t.clear();
                                                },
                                            },
                                        ]);
                                    },
                                },
                                {
                                    key: 'onReady',
                                    value: function () {
                                        (i.a.one('#location').innerHTML = window.location.href),
                                            (i.a.one('#ua').innerHTML = window.navigator.userAgent);
                                    },
                                },
                                {
                                    key: 'switchPanel',
                                    value: function () {
                                        'component' === this.currentType
                                            ? (i.a.removeClass(i.a.one('#myconsole-component-panel'), 'hidden'),
                                              i.a.addClass(i.a.one('#myconsole-event-panel'), 'hidden'))
                                            : (i.a.addClass(i.a.one('#myconsole-component-panel'), 'hidden'),
                                              i.a.removeClass(i.a.one('#myconsole-event-panel'), 'hidden'));
                                    },
                                },
                                {
                                    key: 'clear',
                                    value: function () {
                                        i.a.one('#location-component-panel').innerHTML = '';
                                    },
                                },
                            ]),
                            n
                        );
                    })(xe.VConsolePlugin))('pages', 'Pages'),
                );
            t.default = Ve;
        },
    ]);
});
