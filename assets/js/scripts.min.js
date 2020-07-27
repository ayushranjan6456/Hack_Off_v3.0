! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        i = e.document,
        o = Object.getPrototypeOf,
        s = n.slice,
        r = n.concat,
        a = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        d = l.hasOwnProperty,
        f = d.toString,
        h = f.call(Object),
        p = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        g = function(e) {
            return null != e && e === e.window
        },
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var o, s, r = (n = n || i).createElement("script");
        if (r.text = e, t)
            for (o in v)(s = t[o] || t.getAttribute && t.getAttribute(o)) && r.setAttribute(o, s);
        n.head.appendChild(r).parentNode.removeChild(r)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var x = "3.4.1",
        w = function(e, t) {
            return new w.fn.init(e, t)
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function T(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: x,
        constructor: w,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, i, o, s, r = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof r && (l = r, r = arguments[a] || {}, a++), "object" == typeof r || m(r) || (r = {}), a === u && (r = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && r !== i && (l && i && (w.isPlainObject(i) || (o = Array.isArray(i))) ? (n = r[t], s = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {}, o = !1, r[t] = w.extend(l, s, i)) : void 0 !== i && (r[t] = i));
        return r
    }, w.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = o(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || f.call(n) !== h))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            y(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, i = 0;
            if (T(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, s = e.length, r = !n; o < s; o++) !t(e[o], o) !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, s = 0,
                a = [];
            if (T(e))
                for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return r.apply([], a)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var k = function(e) {
        var t, n, i, o, s, r, a, u, l, c, d, f, h, p, m, g, v, y, b, x = "sizzle" + 1 * new Date,
            w = e.document,
            C = 0,
            T = 0,
            k = ue(),
            S = ue(),
            E = ue(),
            $ = ue(),
            _ = function(e, t) {
                return e === t && (d = !0), 0
            },
            A = {}.hasOwnProperty,
            D = [],
            j = D.pop,
            I = D.push,
            L = D.push,
            O = D.slice,
            N = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            q = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]",
            H = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            W = new RegExp(P + "+", "g"),
            R = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            B = new RegExp("^" + P + "*," + P + "*"),
            F = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            Y = new RegExp(P + "|>"),
            U = new RegExp(H),
            X = new RegExp("^" + M + "$"),
            G = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + z + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /HTML$/i,
            V = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ne = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            se = function() {
                f()
            },
            re = xe(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(D = O.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
        } catch (t) {
            L = {
                apply: D.length ? function(e, t) {
                    I.apply(e, O.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, i, o) {
            var s, a, l, c, d, p, v, y = t && t.ownerDocument,
                C = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return i;
            if (!o && ((t ? t.ownerDocument || t : w) !== h && f(t), t = t || h, m)) {
                if (11 !== C && (d = Z.exec(e)))
                    if (s = d[1]) {
                        if (9 === C) {
                            if (!(l = t.getElementById(s))) return i;
                            if (l.id === s) return i.push(l), i
                        } else if (y && (l = y.getElementById(s)) && b(t, l) && l.id === s) return i.push(l), i
                    } else {
                        if (d[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                        if ((s = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(s)), i
                    } if (n.qsa && !$[e + " "] && (!g || !g.test(e)) && (1 !== C || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === C && Y.test(e)) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(ie, oe) : t.setAttribute("id", c = x), a = (p = r(e)).length; a--;) p[a] = "#" + c + " " + be(p[a]);
                        v = p.join(","), y = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return L.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {
                        $(e, !0)
                    } finally {
                        c === x && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(R, "$1"), t, i, o)
        }

        function ue() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
            }
        }

        function le(e) {
            return e[x] = !0, e
        }

        function ce(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
        }

        function fe(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function he(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function me(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ge(e) {
            return le(function(t) {
                return t = +t, le(function(n, i) {
                    for (var o, s = e([], n.length, t), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {}, s = ae.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Q.test(t || n && n.nodeName || "HTML")
            }, f = ae.setDocument = function(e) {
                var t, o, r = e ? e.ownerDocument || e : w;
                return r !== h && 9 === r.nodeType && r.documentElement && (p = (h = r).documentElement, m = !s(h), w !== h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", se, !1) : o.attachEvent && o.attachEvent("onunload", se)), n.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ce(function(e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ce(function(e) {
                    return p.appendChild(e).id = x, !h.getElementsByName || !h.getElementsByName(x).length
                }), n.getById ? (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n, i, o, s = t.getElementById(e);
                        if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                            for (o = t.getElementsByName(e), i = 0; s = o[i++];)
                                if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, v = [], g = [], (n.qsa = J.test(h.querySelectorAll)) && (ce(function(e) {
                    p.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + z + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce(function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", H)
                }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, _ = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === w && b(w, e) ? -1 : t === h || t.ownerDocument === w && b(w, t) ? 1 : c ? N(c, e) - N(c, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        r = [e],
                        a = [t];
                    if (!o || !s) return e === h ? -1 : t === h ? 1 : o ? -1 : s ? 1 : c ? N(c, e) - N(c, t) : 0;
                    if (o === s) return fe(e, t);
                    for (n = e; n = n.parentNode;) r.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; r[i] === a[i];) i++;
                    return i ? fe(r[i], a[i]) : r[i] === w ? -1 : a[i] === w ? 1 : 0
                }), h
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== h && f(e), n.matchesSelector && m && !$[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    $(t, !0)
                }
                return 0 < ae(t, h, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) !== h && f(e), b(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) !== h && f(e);
                var o = i.attrHandle[t.toLowerCase()],
                    s = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                return void 0 !== s ? s : n.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(ie, oe)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, i = [],
                    o = 0,
                    s = 0;
                if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(_), d) {
                    for (; t = e[s++];) t === e[s] && (o = i.push(s));
                    for (; o--;) e.splice(i[o], 1)
                }
                return c = null, e
            }, o = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = r(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = k[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && k(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var o = ae.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(W, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var s = "nth" !== e.slice(0, 3),
                            r = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, d, f, h, p, m = s !== r ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !u && !a,
                                b = !1;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        p = m = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [r ? g.firstChild : g.lastChild], r && y) {
                                    for (b = (h = (l = (c = (d = (f = g)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === C && l[1]) && l[2], f = h && g.childNodes[h]; f = ++h && f && f[m] || (b = h = 0) || p.pop();)
                                        if (1 === f.nodeType && ++b && f === t) {
                                            c[e] = [C, h, b];
                                            break
                                        }
                                } else if (y && (b = h = (l = (c = (d = (f = t)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === C && l[1]), !1 === b)
                                    for (;
                                        (f = ++h && f && f[m] || (b = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((c = (d = f[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [C, b]), f !== t)););
                                return (b -= o) === i || b % i == 0 && 0 <= b / i
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[x] ? o(t) : 1 < o.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
                            for (var i, s = o(e, t), r = s.length; r--;) e[i = N(e, s[r])] = !(n[i] = s[r])
                        }) : function(e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(R, "$1"));
                        return i[x] ? le(function(e, t, n, o) {
                            for (var s, r = i(e, null, o, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                        }) : function(e, o, s) {
                            return t[0] = e, i(t, null, s, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: le(function(e) {
                        return function(t) {
                            return 0 < ae(e, t).length
                        }
                    }),
                    contains: le(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || o(t)).indexOf(e)
                            }
                    }),
                    lang: le(function(e) {
                        return X.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return K.test(e.nodeName)
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge(function() {
                        return [0]
                    }),
                    last: ge(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ge(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ge(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ge(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ge(function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: ge(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = he(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = pe(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function xe(e, t, n) {
            var i = t.dir,
                o = t.next,
                s = o || i,
                r = n && "parentNode" === s,
                a = T++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o);
                return !1
            } : function(t, n, u) {
                var l, c, d, f = [C, a];
                if (u) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, u)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r)
                            if (c = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((l = c[s]) && l[0] === C && l[1] === a) return f[2] = l[2];
                                if ((c[s] = f)[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function we(e) {
            return 1 < e.length ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function Ce(e, t, n, i, o) {
            for (var s, r = [], a = 0, u = e.length, l = null != t; a < u; a++)(s = e[a]) && (n && !n(s, i, o) || (r.push(s), l && t.push(a)));
            return r
        }

        function Te(e, t, n, i, o, s) {
            return i && !i[x] && (i = Te(i)), o && !o[x] && (o = Te(o, s)), le(function(s, r, a, u) {
                var l, c, d, f = [],
                    h = [],
                    p = r.length,
                    m = s || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || !s && t ? m : Ce(m, f, e, a, u),
                    v = n ? o || (s ? e : p || i) ? [] : r : g;
                if (n && n(g, v, a, u), i)
                    for (l = Ce(v, h), i(l, [], a, u), c = l.length; c--;)(d = l[c]) && (v[h[c]] = !(g[h[c]] = d));
                if (s) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;)(d = v[c]) && l.push(g[c] = d);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(d = v[c]) && -1 < (l = o ? N(s, d) : f[c]) && (s[l] = !(r[l] = d))
                    }
                } else v = Ce(v === r ? v.splice(p, v.length) : v), o ? o(null, r, v, u) : L.apply(r, v)
            })
        }

        function ke(e) {
            for (var t, n, o, s = e.length, r = i.relative[e[0].type], a = r || i.relative[" "], u = r ? 1 : 0, c = xe(function(e) {
                    return e === t
                }, a, !0), d = xe(function(e) {
                    return -1 < N(t, e)
                }, a, !0), f = [function(e, n, i) {
                    var o = !r && (i || n !== l) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                    return t = null, o
                }]; u < s; u++)
                if (n = i.relative[e[u].type]) f = [xe(we(f), n)];
                else {
                    if ((n = i.filter[e[u].type].apply(null, e[u].matches))[x]) {
                        for (o = ++u; o < s && !i.relative[e[o].type]; o++);
                        return Te(1 < u && we(f), 1 < u && be(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(R, "$1"), n, u < o && ke(e.slice(u, o)), o < s && ke(e = e.slice(o)), o < s && be(e))
                    }
                    f.push(n)
                } return we(f)
        }
        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, r = ae.tokenize = function(e, t) {
            var n, o, s, r, a, u, l, c = S[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, u = [], l = i.preFilter; a;) {
                for (r in n && !(o = B.exec(a)) || (o && (a = a.slice(o[0].length) || a), u.push(s = [])), n = !1, (o = F.exec(a)) && (n = o.shift(), s.push({
                        value: n,
                        type: o[0].replace(R, " ")
                    }), a = a.slice(n.length)), i.filter) !(o = G[r].exec(a)) || l[r] && !(o = l[r](o)) || (n = o.shift(), s.push({
                    value: n,
                    type: r,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ae.error(e) : S(e, u).slice(0)
        }, a = ae.compile = function(e, t) {
            var n, o, s, a, u, c, d = [],
                p = [],
                g = E[e + " "];
            if (!g) {
                for (t || (t = r(e)), n = t.length; n--;)(g = ke(t[n]))[x] ? d.push(g) : p.push(g);
                (g = E(e, (o = p, a = 0 < (s = d).length, u = 0 < o.length, c = function(e, t, n, r, c) {
                    var d, p, g, v = 0,
                        y = "0",
                        b = e && [],
                        x = [],
                        w = l,
                        T = e || u && i.find.TAG("*", c),
                        k = C += null == w ? 1 : Math.random() || .1,
                        S = T.length;
                    for (c && (l = t === h || t || c); y !== S && null != (d = T[y]); y++) {
                        if (u && d) {
                            for (p = 0, t || d.ownerDocument === h || (f(d), n = !m); g = o[p++];)
                                if (g(d, t || h, n)) {
                                    r.push(d);
                                    break
                                } c && (C = k)
                        }
                        a && ((d = !g && d) && v--, e && b.push(d))
                    }
                    if (v += y, a && y !== v) {
                        for (p = 0; g = s[p++];) g(b, x, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || x[y] || (x[y] = j.call(r));
                            x = Ce(x)
                        }
                        L.apply(r, x), c && !e && 0 < x.length && 1 < v + s.length && ae.uniqueSort(r)
                    }
                    return c && (C = k, l = w), b
                }, a ? le(c) : c))).selector = e
            }
            return g
        }, u = ae.select = function(e, t, n, o) {
            var s, u, l, c, d, f = "function" == typeof e && e,
                h = !o && r(e = f.selector || e);
            if (n = n || [], 1 === h.length) {
                if (2 < (u = h[0] = h[0].slice(0)).length && "ID" === (l = u[0]).type && 9 === t.nodeType && m && i.relative[u[1].type]) {
                    if (!(t = (i.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                    f && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                for (s = G.needsContext.test(e) ? 0 : u.length; s-- && (l = u[s], !i.relative[c = l.type]);)
                    if ((d = i.find[c]) && (o = d(l.matches[0].replace(te, ne), ee.test(u[0].type) && ve(t.parentNode) || t))) {
                        if (u.splice(s, 1), !(e = o.length && be(u))) return L.apply(n, o), n;
                        break
                    }
            }
            return (f || a(e, h))(o, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(_).join("") === x, n.detectDuplicates = !!d, f(), n.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(z, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ae
    }(e);
    w.find = k, w.expr = k.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = k.uniqueSort, w.text = k.getText, w.isXMLDoc = k.isXML, w.contains = k.contains, w.escapeSelector = k.escape;
    var S = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && w(e).is(n)) break;
                    i.push(e)
                } return i
        },
        E = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        $ = w.expr.match.needsContext;

    function _(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, t, n) {
        return m(t) ? w.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return -1 < u.call(t, e) !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (w.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, o[t], n);
            return 1 < i ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && $.test(e) ? w(e) : e || [], !1).length
        }
    });
    var j, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var o, s;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(o[1]) && w.isPlainObject(t))
                    for (o in t) m(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return (s = i.getElementById(o[2])) && (this[0] = s, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, j = w(i);
    var L = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function N(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                s = [],
                r = "string" != typeof e && w(e);
            if (!$.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            s.push(n);
                            break
                        } return this.pushStack(1 < s.length ? w.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return N(e, "nextSibling")
        },
        prev: function(e) {
            return N(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return E((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return E(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (_(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, i) {
            var o = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = w.filter(i, o)), 1 < this.length && (O[e] || w.uniqueSort(o), L.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var z = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function q(e, t, n, i) {
        var o;
        try {
            e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, w.each(t.match(z) || [], function(e, t) {
            n[t] = !0
        }), n) : w.extend({}, e);
        var i, o, s, r, a = [],
            u = [],
            l = -1,
            c = function() {
                for (r = r || e.once, s = i = !0; u.length; l = -1)
                    for (o = u.shift(); ++l < a.length;) !1 === a[l].apply(o[0], o[1]) && e.stopOnFalse && (l = a.length, o = !1);
                e.memory || (o = !1), i = !1, r && (a = o ? [] : "")
            },
            d = {
                add: function() {
                    return a && (o && !i && (l = a.length - 1, u.push(o)), function t(n) {
                        w.each(n, function(n, i) {
                            m(i) ? e.unique && d.has(i) || a.push(i) : i && i.length && "string" !== b(i) && t(i)
                        })
                    }(arguments), o && !i && c()), this
                },
                remove: function() {
                    return w.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = w.inArray(t, a, n));) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < w.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = u = [], a = o = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = u = [], o || i || (a = o = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, t) {
                    return r || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return d
    }, w.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred(function(t) {
                            w.each(n, function(n, i) {
                                var o = m(e[i[4]]) && e[i[4]];
                                s[i[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, o) {
                        var s = 0;

                        function r(t, n, i, o) {
                            return function() {
                                var a = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(t < s)) {
                                            if ((e = i.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, m(l) ? o ? l.call(e, r(s, n, P, o), r(s, n, M, o)) : (s++, l.call(e, r(s, n, P, o), r(s, n, M, o), r(s, n, P, n.notifyWith))) : (i !== P && (a = void 0, u = [e]), (o || n.resolveWith)(a, u))
                                        }
                                    },
                                    c = o ? l : function() {
                                        try {
                                            l()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), s <= t + 1 && (i !== M && (a = void 0, u = [e]), n.rejectWith(a, u))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function(e) {
                            n[0][3].add(r(0, e, m(o) ? o : P, e.notifyWith)), n[1][3].add(r(0, e, m(t) ? t : P)), n[2][3].add(r(0, e, m(i) ? i : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, o) : o
                    }
                },
                s = {};
            return w.each(n, function(e, t) {
                var r = t[2],
                    a = t[5];
                o[t[1]] = r.add, a && r.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), r.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = r.fireWith
            }), o.promise(s), t && t.call(s, s), s
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                o = s.call(arguments),
                r = w.Deferred(),
                a = function(e) {
                    return function(n) {
                        i[e] = this, o[e] = 1 < arguments.length ? s.call(arguments) : n, --t || r.resolveWith(i, o)
                    }
                };
            if (t <= 1 && (q(e, r.done(a(n)).resolve, r.reject, !t), "pending" === r.state() || m(o[n] && o[n].then))) return r.then();
            for (; n--;) q(o[n], a(n), r.reject);
            return r.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && H.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var W = w.Deferred();

    function R() {
        i.removeEventListener("DOMContentLoaded", R), e.removeEventListener("load", R), w.ready()
    }
    w.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || W.resolveWith(i, [w])
        }
    }), w.ready.then = W.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", R), e.addEventListener("load", R));
    var B = function(e, t, n, i, o, s, r) {
            var a = 0,
                u = e.length,
                l = null == n;
            if ("object" === b(n))
                for (a in o = !0, n) B(e, t, a, n[a], !0, s, r);
            else if (void 0 !== i && (o = !0, m(i) || (r = !0), l && (r ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(w(e), n)
                })), t))
                for (; a < u; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : l ? t.call(e) : u ? t(e[0], n) : s
        },
        F = /^-ms-/,
        Y = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(F, "ms-").replace(Y, U)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[X(t)] = n;
            else
                for (i in t) o[X(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(z) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var V = new Q,
        K = new Q,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : J.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || V.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return V.access(e, t, n)
        },
        _removeData: function(e, t) {
            V.remove(e, t)
        }
    }), w.fn.extend({
        data: function(e, t) {
            var n, i, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = K.get(s), 1 === s.nodeType && !V.get(s, "hasDataAttrs"))) {
                    for (n = r.length; n--;) r[n] && 0 === (i = r[n].name).indexOf("data-") && (i = X(i.slice(5)), ee(s, i, o[i]));
                    V.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e)
            }) : B(this, function(t) {
                var n;
                if (s && void 0 === t) return void 0 !== (n = K.get(s, e)) ? n : void 0 !== (n = ee(s, e)) ? n : void 0;
                this.each(function() {
                    K.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = V.get(e, t), n && (!i || Array.isArray(n) ? i = V.access(e, t, w.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                i = n.length,
                o = n.shift(),
                s = w._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete s.stop, o.call(e, function() {
                w.dequeue(e, t)
            }, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return V.get(e, n) || V.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    V.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = w.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(n = V.get(s[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        oe = i.documentElement,
        se = function(e) {
            return w.contains(e.ownerDocument, e)
        },
        re = {
            composed: !0
        };
    oe.getRootNode && (se = function(e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
    });
    var ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === w.css(e, "display")
        },
        ue = function(e, t, n, i) {
            var o, s, r = {};
            for (s in t) r[s] = e.style[s], e.style[s] = t[s];
            for (s in o = n.apply(e, i || []), t) e.style[s] = r[s];
            return o
        };

    function le(e, t, n, i) {
        var o, s, r = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return w.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && ne.exec(w.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; r--;) w.style(e, t, c + l), (1 - s) * (1 - (s = a() / u || .5)) <= 0 && (r = 0), c /= s;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = o)), o
    }
    var ce = {};

    function de(e, t) {
        for (var n, i, o, s, r, a, u, l = [], c = 0, d = e.length; c < d; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (l[c] = V.get(i, "display") || null, l[c] || (i.style.display = "")), "" === i.style.display && ae(i) && (l[c] = (u = r = s = void 0, r = (o = i).ownerDocument, a = o.nodeName, (u = ce[a]) || (s = r.body.appendChild(r.createElement(a)), u = w.css(s, "display"), s.parentNode.removeChild(s), "none" === u && (u = "block"), ce[a] = u)))) : "none" !== n && (l[c] = "none", V.set(i, "display", n)));
        for (c = 0; c < d; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    w.fn.extend({
        show: function() {
            return de(this, !0)
        },
        hide: function() {
            return de(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var fe = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && _(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
    }
    me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
    var ye, be, xe = /<|&#?\w+;/;

    function we(e, t, n, i, o) {
        for (var s, r, a, u, l, c, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
            if ((s = e[h]) || 0 === s)
                if ("object" === b(s)) w.merge(f, s.nodeType ? [s] : s);
                else if (xe.test(s)) {
            for (r = r || d.appendChild(t.createElement("div")), a = (he.exec(s) || ["", ""])[1].toLowerCase(), u = me[a] || me._default, r.innerHTML = u[1] + w.htmlPrefilter(s) + u[2], c = u[0]; c--;) r = r.lastChild;
            w.merge(f, r.childNodes), (r = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(s));
        for (d.textContent = "", h = 0; s = f[h++];)
            if (i && -1 < w.inArray(s, i)) o && o.push(s);
            else if (l = se(s), r = ge(d.appendChild(s), "script"), l && ve(r), n)
            for (c = 0; s = r[c++];) pe.test(s.type || "") && n.push(s);
        return d
    }
    ye = i.createDocumentFragment().appendChild(i.createElement("div")), (be = i.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), ye.appendChild(be), p.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Ce = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ke = /^([^.]*)(?:\.(.+)|)/;

    function Se() {
        return !0
    }

    function Ee() {
        return !1
    }

    function $e(e, t) {
        return e === function() {
            try {
                return i.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function _e(e, t, n, i, o, s) {
        var r, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) _e(e, a, n, i, t[a], s);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ee;
        else if (!o) return e;
        return 1 === s && (r = o, (o = function(e) {
            return w().off(e), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = w.guid++)), e.each(function() {
            w.event.add(this, t, o, i, n)
        })
    }

    function Ae(e, t, n) {
        n ? (V.set(e, t, !1), w.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, o, r = V.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (r.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), V.set(this, t, r), i = n(this, t), this[t](), r !== (o = V.get(this, t)) || i ? V.set(this, t, !1) : o = {}, r !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                } else r.length && (V.set(this, t, {
                    value: w.event.trigger(w.extend(r[0], w.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === V.get(e, t) && w.event.add(e, t, Se)
    }
    w.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var s, r, a, u, l, c, d, f, h, p, m, g = V.get(e);
            if (g)
                for (n.handler && (n = (s = n).handler, o = s.selector), o && w.find.matchesSelector(oe, o), n.guid || (n.guid = w.guid++), (u = g.events) || (u = g.events = {}), (r = g.handle) || (r = g.handle = function(t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(z) || [""]).length; l--;) h = m = (a = ke.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), h && (d = w.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = w.event.special[h] || {}, c = w.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, s), (f = u[h]) || ((f = u[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, r) || e.addEventListener && e.addEventListener(h, r)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), w.event.global[h] = !0)
        },
        remove: function(e, t, n, i, o) {
            var s, r, a, u, l, c, d, f, h, p, m, g = V.hasData(e) && V.get(e);
            if (g && (u = g.events)) {
                for (l = (t = (t || "").match(z) || [""]).length; l--;)
                    if (h = m = (a = ke.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                        for (d = w.event.special[h] || {}, f = u[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = f.length; s--;) c = f[s], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(s, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                        r && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || w.removeEvent(e, h, g.handle), delete u[h])
                    } else
                        for (h in u) w.event.remove(e, h + t[l], n, i, !0);
                w.isEmptyObject(u) && V.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, s, r, a = w.event.fix(e),
                u = new Array(arguments.length),
                l = (V.get(this, "events") || {})[a.type] || [],
                c = w.event.special[a.type] || {};
            for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (r = w.event.handlers.call(this, a, l), t = 0;
                    (o = r[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (s = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== s.namespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (i = ((w.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, s, r, a = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (s = [], r = {}, n = 0; n < u; n++) void 0 === r[o = (i = t[n]).selector + " "] && (r[o] = i.needsContext ? -1 < w(o, this).index(l) : w.find(o, this, null, [l]).length), r[o] && s.push(i);
                        s.length && a.push({
                            elem: l,
                            handlers: s
                        })
                    } return l = this, u < t.length && a.push({
                elem: l,
                handlers: t.slice(u)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && _(t, "input") && Ae(t, "click", Se), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && _(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && _(t, "input") && V.get(t, "click") || _(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        w.event.special[e] = {
            setup: function() {
                return Ae(this, e, $e), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === this || w.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function(e, t, n, i) {
            return _e(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return _e(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        je = /<script|<style|<link/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return _(e, "table") && _(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function Ne(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ze(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, i, o, s, r, a, u, l;
        if (1 === t.nodeType) {
            if (V.hasData(e) && (s = V.access(e), r = V.set(t, s), l = s.events))
                for (o in delete r.handle, r.events = {}, l)
                    for (n = 0, i = l[o].length; n < i; n++) w.event.add(t, o, l[o][n]);
            K.hasData(e) && (a = K.access(e), u = w.extend({}, a), K.set(t, u))
        }
    }

    function Me(e, t, n, i) {
        t = r.apply([], t);
        var o, s, a, u, l, c, d = 0,
            f = e.length,
            h = f - 1,
            g = t[0],
            v = m(g);
        if (v || 1 < f && "string" == typeof g && !p.checkClone && Ie.test(g)) return e.each(function(o) {
            var s = e.eq(o);
            v && (t[0] = g.call(this, o, s.html())), Me(s, t, n, i)
        });
        if (f && (s = (o = we(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
            for (u = (a = w.map(ge(o, "script"), Ne)).length; d < f; d++) l = o, d !== h && (l = w.clone(l, !0, !0), u && w.merge(a, ge(l, "script"))), n.call(e[d], l, d);
            if (u)
                for (c = a[a.length - 1].ownerDocument, w.map(a, ze), d = 0; d < u; d++) l = a[d], pe.test(l.type || "") && !V.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }) : y(l.textContent.replace(Le, ""), l, c))
        }
        return e
    }

    function qe(e, t, n) {
        for (var i, o = t ? w.filter(t, e) : e, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || w.cleanData(ge(i)), i.parentNode && (n && se(i) && ve(ge(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(De, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, s, r, a, u, l, c = e.cloneNode(!0),
                d = se(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (r = ge(c), i = 0, o = (s = ge(e)).length; i < o; i++) a = s[i], "input" === (l = (u = r[i]).nodeName.toLowerCase()) && fe.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (s = s || ge(e), r = r || ge(c), i = 0, o = s.length; i < o; i++) Pe(s[i], r[i]);
                else Pe(e, c);
            return 0 < (r = ge(c, "script")).length && ve(r, !d && ge(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, i, o = w.event.special, s = 0; void 0 !== (n = e[s]); s++)
                if (G(n)) {
                    if (t = n[V.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                        n[V.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) {
            return qe(this, e, !0)
        },
        remove: function(e) {
            return qe(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Me(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Me(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Me(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Me(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !je.test(e) && !me[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Me(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ge(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, i = [], o = w(e), s = o.length - 1, r = 0; r <= s; r++) n = r === s ? this : this.clone(!0), w(o[r])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var He = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        We = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Re = new RegExp(ie.join("|"), "i");

    function Be(e, t, n) {
        var i, o, s, r, a = e.style;
        return (n = n || We(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || se(e) || (r = w.style(e, t)), !p.pixelBoxStyles() && He.test(r) && Re.test(t) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
    }

    function Fe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                o = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), s = 36 === n(t.width), c.style.position = "absolute", r = 12 === n(c.offsetWidth / 3), oe.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var o, s, r, a, u, l = i.createElement("div"),
            c = i.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(p, {
            boxSizingReliable: function() {
                return t(), s
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), o
            },
            reliableMarginLeft: function() {
                return t(), u
            },
            scrollboxSize: function() {
                return t(), r
            }
        }))
    }();
    var Ye = ["Webkit", "Moz", "ms"],
        Ue = i.createElement("div").style,
        Xe = {};

    function Ge(e) {
        return w.cssProps[e] || Xe[e] || (e in Ue ? e : Xe[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;)
                if ((e = Ye[n] + t) in Ue) return e
        }(e) || e)
    }
    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ve = /^--/,
        Ke = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function et(e, t, n, i, o, s) {
        var r = "width" === t ? 1 : 0,
            a = 0,
            u = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; r < 4; r += 2) "margin" === n && (u += w.css(e, n + ie[r], !0, o)), i ? ("content" === n && (u -= w.css(e, "padding" + ie[r], !0, o)), "margin" !== n && (u -= w.css(e, "border" + ie[r] + "Width", !0, o))) : (u += w.css(e, "padding" + ie[r], !0, o), "padding" !== n ? u += w.css(e, "border" + ie[r] + "Width", !0, o) : a += w.css(e, "border" + ie[r] + "Width", !0, o));
        return !i && 0 <= s && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - u - a - .5)) || 0), u
    }

    function tt(e, t, n) {
        var i = We(e),
            o = (!p.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
            s = o,
            r = Be(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (He.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return (!p.boxSizingReliable() && o || "auto" === r || !parseFloat(r) && "inline" === w.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === w.css(e, "boxSizing", !1, i), (s = a in e) && (r = e[a])), (r = parseFloat(r) || 0) + et(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }

    function nt(e, t, n, i, o) {
        return new nt.prototype.init(e, t, n, i, o)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = X(t),
                    u = Ve.test(t),
                    l = e.style;
                if (u || (t = Ge(a)), r = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : l[t];
                "string" == (s = typeof n) && (o = ne.exec(n)) && o[1] && (n = le(e, t, o), s = "number"), null != n && n == n && ("number" !== s || u || (n += o && o[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, s, r, a = X(t);
            return Ve.test(t) || (t = Ge(a)), (r = w.cssHooks[t] || w.cssHooks[a]) && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = Be(e, t, i)), "normal" === o && t in Je && (o = Je[t]), "" === n || n ? (s = parseFloat(o), !0 === n || isFinite(s) ? s || 0 : o) : o
        }
    }), w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !Qe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : ue(e, Ke, function() {
                    return tt(e, t, i)
                })
            },
            set: function(e, n, i) {
                var o, s = We(e),
                    r = !p.scrollboxSize() && "absolute" === s.position,
                    a = (r || i) && "border-box" === w.css(e, "boxSizing", !1, s),
                    u = i ? et(e, t, i, a, s) : 0;
                return a && r && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - et(e, t, "border", !1, s) - .5)), u && (o = ne.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ze(0, n, u)
            }
        }
    }), w.cssHooks.marginLeft = Fe(p.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ie[i] + t] = s[i] || s[i - 2] || s[0];
                return o
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ze)
    }), w.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var i, o, s = {},
                    r = 0;
                if (Array.isArray(t)) {
                    for (i = We(e), o = t.length; r < o; r++) s[t[r]] = w.css(e, t[r], !1, i);
                    return s
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((w.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, i, o, s) {
            this.elem = e, this.prop = n, this.easing = o || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = nt.prototype.init, w.fx.step = {};
    var it, ot, st, rt, at = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;

    function lt() {
        ot && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(lt) : e.setTimeout(lt, w.fx.interval), w.fx.tick())
    }

    function ct() {
        return e.setTimeout(function() {
            it = void 0
        }), it = Date.now()
    }

    function dt(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ie[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function ft(e, t, n) {
        for (var i, o = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), s = 0, r = o.length; s < r; s++)
            if (i = o[s].call(n, t, e)) return i
    }

    function ht(e, t, n) {
        var i, o, s = 0,
            r = ht.prefilters.length,
            a = w.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (o) return !1;
                for (var t = it || ct(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), s = 0, r = l.tweens.length; s < r; s++) l.tweens[s].run(i);
                return a.notifyWith(e, [l, i, n]), i < 1 && r ? n : (r || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? l.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) l.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, i, o, s, r;
                for (n in e)
                    if (o = t[i = X(n)], s = e[n], Array.isArray(s) && (o = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (r = w.cssHooks[i]) && "expand" in r)
                        for (n in s = r.expand(s), delete e[i], s) n in e || (e[n] = s[n], t[n] = o);
                    else t[i] = o
            }(c, l.opts.specialEasing); s < r; s++)
            if (i = ht.prefilters[s].call(l, e, c, l.opts)) return m(i.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)), i;
        return w.map(c, ft, l), m(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    w.Animation = w.extend(ht, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(z);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, s, r, a, u, l, c, d = "width" in t || "height" in t,
                f = this,
                h = {},
                p = e.style,
                m = e.nodeType && ae(e),
                g = V.get(e, "fxshow");
            for (i in n.queue || (null == (r = w._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
                    r.unqueued || a()
                }), r.unqueued++, f.always(function() {
                    f.always(function() {
                        r.unqueued--, w.queue(e, "fx").length || r.empty.fire()
                    })
                })), t)
                if (o = t[i], at.test(o)) {
                    if (delete t[i], s = s || "toggle" === o, o === (m ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    h[i] = g && g[i] || w.style(e, i)
                } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
                for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = g && g.display) && (l = V.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (de([e], !0), l = e.style.display || l, c = w.css(e, "display"), de([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (f.done(function() {
                        p.display = l
                    }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), u = !1, h) u || (g ? "hidden" in g && (m = g.hidden) : g = V.access(e, "fxshow", {
                    display: l
                }), s && (g.hidden = !m), m && de([e], !0), f.done(function() {
                    for (i in m || de([e]), V.remove(e, "fxshow"), h) w.style(e, i, h[i])
                })), u = ft(m ? g[i] : 0, i, f), i in g || (g[i] = u.start, m && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
        }
    }), w.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            m(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
        }, i
    }, w.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = w.isEmptyObject(e),
                s = w.speed(t, n, i),
                r = function() {
                    var t = ht(this, w.extend({}, e), s);
                    (o || V.get(this, "finish")) && t.stop(!0)
                };
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    s = w.timers,
                    r = V.get(this);
                if (o) r[o] && r[o].stop && i(r[o]);
                else
                    for (o in r) r[o] && r[o].stop && ut.test(o) && i(r[o]);
                for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(n), t = !1, s.splice(o, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = V.get(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    s = w.timers,
                    r = i ? i.length : 0;
                for (n.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < r; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, o)
        }
    }), w.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), w.timers = [], w.fx.tick = function() {
        var e, t = 0,
            n = w.timers;
        for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), it = void 0
    }, w.fx.timer = function(e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
        ot || (ot = !0, lt())
    }, w.fx.stop = function() {
        ot = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(t, n) {
        return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        })
    }, st = i.createElement("input"), rt = i.createElement("select").appendChild(i.createElement("option")), st.type = "checkbox", p.checkOn = "" !== st.value, p.optSelected = rt.selected, (st = i.createElement("input")).value = "t", st.type = "radio", p.radioValue = "t" === st.value;
    var pt, mt = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return B(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === s && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && _(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match(z);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mt[t] || w.find.attr;
        mt[t] = function(e, t, i) {
            var o, s, r = t.toLowerCase();
            return i || (s = mt[r], mt[r] = o, o = null != n(e, t, i) ? r : null, mt[r] = s), o
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(z) || []).join(" ")
    }

    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(z) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return B(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && w.isXMLDoc(e) || (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function(e) {
            var t, n, i, o, s, r, a, u = 0;
            if (m(e)) return this.each(function(t) {
                w(this).addClass(e.call(this, t, bt(this)))
            });
            if ((t = xt(e)).length)
                for (; n = this[u++];)
                    if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
                        for (r = 0; s = t[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        o !== (a = yt(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, n, i, o, s, r, a, u = 0;
            if (m(e)) return this.each(function(t) {
                w(this).removeClass(e.call(this, t, bt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                for (; n = this[u++];)
                    if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
                        for (r = 0; s = t[r++];)
                            for (; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
                        o !== (a = yt(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, bt(this), t), t)
            }) : this.each(function() {
                var t, o, s, r;
                if (i)
                    for (o = 0, s = w(this), r = xt(e); t = r[o++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = bt(this)) && V.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + yt(bt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = m(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : yt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options,
                        s = e.selectedIndex,
                        r = "select-one" === e.type,
                        a = r ? null : [],
                        u = r ? s + 1 : o.length;
                    for (i = s < 0 ? u : r ? s : 0; i < u; i++)
                        if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !_(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), r) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, s = w.makeArray(t), r = o.length; r--;)((i = o[r]).selected = -1 < w.inArray(w.valHooks.option.get(i), s)) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        }, p.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var Ct = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function(e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(t, n, o, s) {
            var r, a, u, l, c, f, h, p, v = [o || i],
                y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = u = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !Ct.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : w.makeArray(n, [t]), h = w.event.special[y] || {}, s || !h.trigger || !1 !== h.trigger.apply(o, n))) {
                if (!s && !h.noBubble && !g(o)) {
                    for (l = h.delegateType || y, Ct.test(l + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), u = a;
                    u === (o.ownerDocument || i) && v.push(u.defaultView || u.parentWindow || e)
                }
                for (r = 0;
                    (a = v[r++]) && !t.isPropagationStopped();) p = a, t.type = 1 < r ? l : h.bindType || y, (f = (V.get(a, "events") || {})[t.type] && V.get(a, "handle")) && f.apply(a, n), (f = c && a[c]) && f.apply && G(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, s || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !G(o) || c && m(o[y]) && !g(o) && ((u = o[c]) && (o[c] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, Tt), o[y](), t.isPropagationStopped() && p.removeEventListener(y, Tt), w.event.triggered = void 0, u && (o[c] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(i, null, t)
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), p.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = V.access(i, t);
                o || i.addEventListener(e, n, !0), V.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = V.access(i, t) - 1;
                o ? V.access(i, t, o) : (i.removeEventListener(e, n, !0), V.remove(i, t))
            }
        }
    });
    var kt = e.location,
        St = Date.now(),
        Et = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var $t = /\[\]$/,
        _t = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, i) {
        var o;
        if (Array.isArray(t)) w.each(t, function(t, o) {
            n || $t.test(e) ? i(e, o) : jt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (o in t) jt(e + "[" + o + "]", t[o], n, i)
    }
    w.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                var n = m(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, o);
        return i.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(_t, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(_t, "\r\n")
                }
            }).get()
        }
    });
    var It = /%20/g,
        Lt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        zt = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Mt = {},
        qt = {},
        Ht = "*/".concat("*"),
        Wt = i.createElement("a");

    function Rt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                s = t.toLowerCase().match(z) || [];
            if (m(n))
                for (; i = s[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Bt(e, t, n, i) {
        var o = {},
            s = e === qt;

        function r(a) {
            var u;
            return o[a] = !0, w.each(e[a] || [], function(e, a) {
                var l = a(t, n, i);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
            }), u
        }
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function Ft(e, t) {
        var n, i, o = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i), e
    }
    Wt.href = kt.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, w.ajaxSettings), t) : Ft(w.ajaxSettings, e)
        },
        ajaxPrefilter: Rt(Mt),
        ajaxTransport: Rt(qt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, s, r, a, u, l, c, d, f, h, p = w.ajaxSetup({}, n),
                m = p.context || p,
                g = p.context && (m.nodeType || m.jquery) ? w(m) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                b = p.statusCode || {},
                x = {},
                C = {},
                T = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!a)
                                for (a = {}; t = Nt.exec(r);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) k.always(e[k.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return o && o.abort(t), S(0, t), this
                    }
                };
            if (v.promise(k), p.url = ((t || p.url || kt.href) + "").replace(Pt, kt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(z) || [""], null == p.crossDomain) {
                l = i.createElement("a");
                try {
                    l.href = p.url, l.href = l.href, p.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Bt(Mt, p, n, k), c) return k;
            for (f in (d = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !zt.test(p.type), s = p.url.replace(Lt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(It, "+")) : (h = p.url.slice(s.length), p.data && (p.processData || "string" == typeof p.data) && (s += (Et.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(Ot, "$1"), h = (Et.test(s) ? "&" : "?") + "_=" + St++ + h), p.url = s + h), p.ifModified && (w.lastModified[s] && k.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && k.setRequestHeader("If-None-Match", w.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : p.accepts["*"]), p.headers) k.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, k, p) || c)) return k.abort();
            if (T = "abort", y.add(p.complete), k.done(p.success), k.fail(p.error), o = Bt(qt, p, n, k)) {
                if (k.readyState = 1, d && g.trigger("ajaxSend", [k, p]), c) return k;
                p.async && 0 < p.timeout && (u = e.setTimeout(function() {
                    k.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, o.send(x, S)
                } catch (t) {
                    if (c) throw t;
                    S(-1, t)
                }
            } else S(-1, "No Transport");

            function S(t, n, i, a) {
                var l, f, h, x, C, T = n;
                c || (c = !0, u && e.clearTimeout(u), o = void 0, r = a || "", k.readyState = 0 < t ? 4 : 0, l = 200 <= t && t < 300 || 304 === t, i && (x = function(e, t, n) {
                    for (var i, o, s, r, a = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                u.unshift(o);
                                break
                            } if (u[0] in n) s = u[0];
                    else {
                        for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                                s = o;
                                break
                            }
                            r || (r = o)
                        }
                        s = s || r
                    }
                    if (s) return s !== u[0] && u.unshift(s), n[s]
                }(p, k, i)), x = function(e, t, n, i) {
                    var o, s, r, a, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (r in e.converters) l[r.toLowerCase()] = e.converters[r];
                    for (s = c.shift(); s;)
                        if (e.responseFields[s] && (n[e.responseFields[s]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = s, s = c.shift())
                            if ("*" === s) s = u;
                            else if ("*" !== u && u !== s) {
                        if (!(r = l[u + " " + s] || l["* " + s]))
                            for (o in l)
                                if ((a = o.split(" "))[1] === s && (r = l[u + " " + a[0]] || l["* " + a[0]])) {
                                    !0 === r ? r = l[o] : !0 !== l[o] && (s = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== r)
                            if (r && e.throws) t = r(t);
                            else try {
                                t = r(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: r ? e : "No conversion from " + u + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, x, k, l), l ? (p.ifModified && ((C = k.getResponseHeader("Last-Modified")) && (w.lastModified[s] = C), (C = k.getResponseHeader("etag")) && (w.etag[s] = C)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, f = x.data, l = !(h = x.error))) : (h = T, !t && T || (T = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || T) + "", l ? v.resolveWith(m, [f, T, k]) : v.rejectWith(m, [k, T, h]), k.statusCode(b), b = void 0, d && g.trigger(l ? "ajaxSuccess" : "ajaxError", [k, p, l ? f : h]), y.fireWith(m, [k, T]), d && (g.trigger("ajaxComplete", [k, p]), --w.active || w.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, i, o) {
            return m(n) && (o = o || i, i = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function(e, t) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                w.globalEval(e, t)
            }
        })
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return m(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = m(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Yt = {
            0: 200,
            1223: 204
        },
        Ut = w.ajaxSettings.xhr();
    p.cors = !!Ut && "withCredentials" in Ut, p.ajax = Ut = !!Ut, w.ajaxTransport(function(t) {
        var n, i;
        if (p.cors || Ut && !t.crossDomain) return {
            send: function(o, s) {
                var r, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) a[r] = t.xhrFields[r];
                for (r in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(r, o[r]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Yt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                } catch (o) {
                    if (n) throw o
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(o, s) {
                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && s("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Xt, Gt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || w.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, s, r, a = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Qt, "$1" + o) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return r || w.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[o], e[o] = function() {
            r = arguments
        }, i.always(function() {
            void 0 === s ? w(e).removeProp(o) : e[o] = s, t[o] && (t.jsonpCallback = n.jsonpCallback, Gt.push(o)), r && m(s) && s(r[0]), r = s = void 0
        }), "script"
    }), p.createHTMLDocument = ((Xt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), w.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(o)) : t = i), r = !n && [], (s = A.exec(e)) ? [t.createElement(s[1])] : (s = we([e], t, r), r && r.length && w(r).remove(), w.merge([], s.childNodes)));
        var o, s, r
    }, w.fn.load = function(e, t, n) {
        var i, o, s, r = this,
            a = e.indexOf(" ");
        return -1 < a && (i = yt(e.slice(a)), e = e.slice(0, a)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < r.length && w.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, r.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            r.each(function() {
                n.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function(e, t, n) {
            var i, o, s, r, a, u, l = w.css(e, "position"),
                c = w(e),
                d = {};
            "static" === l && (e.style.position = "relative"), a = c.offset(), s = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (s + u).indexOf("auto") ? (r = (i = c.position()).top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(u) || 0), m(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (d.top = t.top - a.top + r), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0), o.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - w.css(i, "marginTop", !0),
                    left: t.left - o.left - w.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || oe
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(i) {
            return B(this, function(e, i, o) {
                var s;
                if (g(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === o) return s ? s[t] : e[i];
                s ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset) : e[i] = o
            }, e, i, arguments.length)
        }
    }), w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = Fe(p.pixelPosition, function(e, n) {
            if (n) return n = Be(e, t), He.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            w.fn[i] = function(o, s) {
                var r = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === s ? "margin" : "border");
                return B(this, function(t, n, o) {
                    var s;
                    return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === o ? w.css(t, n, a) : w.style(t, n, o, a)
                }, t, r ? o : void 0, r)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function(e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = s.call(arguments, 2), (o = function() {
            return e.apply(t || this, i.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, o
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = _, w.isFunction = m, w.isWindow = g, w.camelCase = X, w.type = b, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Vt = e.jQuery,
        Kt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Vt), w
    }, t || (e.jQuery = e.$ = w), w
}),
function(e) {
    "use strict";
    var t = {
        init: function(t) {
            return this.each(function() {
                var n = e(this),
                    i = n.children().length,
                    o = e(".clb-slider-scroll-top").length,
                    s = "",
                    r = "";
                const a = n.children().length,
                    u = e("body").hasClass("rtl");
                var l = 1,
                    c = 0,
                    d = 0,
                    f = 0,
                    h = {
                        items: 1,
                        navBtn: !0,
                        dots: !1,
                        pagination: !1,
                        autoplay: !1,
                        autoplayTimeout: 3e3,
                        autoplayHoverPause: !0,
                        loop: !1,
                        responsive: !1,
                        mousewheel: !1,
                        drag: !1,
                        gap: 0,
                        scrollToSlider: !1,
                        verticalScroll: !1,
                        navBtnClasses: "",
                        startSlide: !1,
                        autoHeight: !1,
                        slidesCount: !1
                    },
                    p = (n.data({
                        slideNow: l
                    }), y());
                ! function(t) {
                    if (n.hasClass("clb-slider")) var o = n.find("> .clb-slider-outer-stage > .clb-slider-stage > .clb-slider-item");
                    else {
                        n.addClass("clb-slider");
                        var a = e('<div class="clb-slider-outer-stage"><div class="clb-slider-stage"></div><div>'),
                            o = n.children().addClass("clb-slider-item");
                        if (t.navBtn) {
                            var u = '<div class="clb-slider-nav-btn"><div class="prev-btn btn-round btn-round-light ' + t.navBtnClasses + '" tabindex="0"><i class="ion"><svg class="arrow-icon arrow-icon-back" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7H16M16 7L11 1M16 7L11 13" stroke-width="2"/></svg></i></div><div class="next-btn btn-round btn-round-light ' + t.navBtnClasses + '" tabindex="0"><i class="ion"><svg class="arrow-icon" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7H16M16 7L11 1M16 7L11 13" stroke-width="2"/></svg></i></div></div>';
                            n.append(e(u))
                        }
                        if (t.verticalScroll) var l = _(o);
                        if (t.dots) {
                            for (var c = e('<div class="clb-slider-nav-dots"></div>'), d = e('<div class="clb-slider-dot"><svg width="22px" height="22px" viewBox="0 0 22 22"><g stroke="#17161A" stroke-width="1.2" fill="none" transform="translate(11, 11)"><circle cx="0" cy="0" r="10"></circle></g></svg></div>'), h = i; 0 != h; h--) d.clone().appendTo(c);
                            c.find(".clb-slider-dot:first-child").addClass("active"), n.append(c), s = n.find("> .clb-slider-nav-dots > .clb-slider-dot")
                        }
                        if (t.pagination) {
                            for (var p = e('<div class="clb-slider-pagination"></div>'), m = e('<div class="clb-slider-page"></div>'), h = 1; h <= i; h++) h < 10 ? m.clone().append('<span class="clb-slider-pagination-index"> 0' + h + "</span>").appendTo(p) : m.clone().append('<span class="clb-slider-pagination-index">' + h + "</span>").appendTo(p);
                            p.find(".clb-slider-page:first-child").addClass("active"), n.append(p), r = n.find("> .clb-slider-pagination > .clb-slider-page")
                        }
                        if (t.slidesCount) {
                            var g = e('<div class="clb-slider-count"><div class="clb-slider-count-current"></div><div class="clb-slider-count-total">' + i + "</div></div>"),
                                v = e('<div class="clb-slider-count-number"></div>');
                            n.append(g);
                            for (var y = n.find(".clb-slider-count-current"), h = 1; h <= i; h++) v.clone().append('<span class="clb-slider-pagination-index">' + h + "</span>").appendTo(y);
                            v.clone().append('<span class="clb-slider-pagination-index">' + i + "</span>").prependTo(y), v.clone().append('<span class="clb-slider-pagination-index">1</span>').appendTo(y), f = n.find(".clb-slider-count-number").height();
                            var b = n.find(".clb-slider-count-current");
                            b.css({
                                transform: "translate(0, -" + f + "px)",
                                "-webkit-transform": "translate(0, -" + f + "px)",
                                "-ms-transform": "translate(0, -" + f + "px)"
                            })
                        }
                        o.wrapAll(a)
                    }
                    t.loop || (o.slice(0, t.items).addClass("active"), e(o[0 + t.items]).addClass("next-slide"));
                    if (t.verticalScroll) {
                        var x = n.width(),
                            w = x * i / t.items + t.gap / t.items * i;
                        n.find("> .clb-slider-stage").css({
                            width: w + "px"
                        });
                        var C = n.height(),
                            T = C * i / t.items + t.gap / t.items * i;
                        o.css("height", l + "px"), o.css("margin-right", t.gap + "px"), n.css("height", l);
                        var C = o.height();
                        n.find("> .clb-slider-stage").css({
                            height: T + "px",
                            width: "auto"
                        })
                    } else {
                        var x = n.width(),
                            k = x / t.items - t.gap + t.gap / t.items,
                            w = x * i / t.items + t.gap / t.items * i;
                        o.css("min-width", k + "px"), o.css("margin-right", t.gap + "px");
                        var C = o.height();
                        n.find("> .clb-slider-stage").css({
                            width: w + "px"
                        })
                    }
                }(p);
                var m, g = n.find(" > .clb-slider-outer-stage > .clb-slider-stage"),
                    v = g.find(" > .clb-slider-item");

                function y() {
                    var n = e.extend(h, t);
                    return h.responsive && e(h.responsive).each(function(i) {
                        for (var o in e(this)[i])
                            if (e(window).width() <= o) return n = e.extend(h, t.responsive[o])
                    }), n
                }

                function b(t, n, s, r, u, c) {
                    t.trigger("clb-slider.change").trigger("clb-slider.next-change"), (n.loop && l != i - a || l < a) && (r.removeClass("active prev-slide next-slide"), s.css({
                        transition: "1s"
                    }), n.loop && ++l, n.loop ? (n.dots || n.pagination) && S(l - a) : (n.dots || n.pagination) && S(l), r.slice(l, l + n.items).addClass("active"), e(r[l - 1]).addClass("prev-slide"), e(r[l + n.items]).addClass("next-slide"), d = n.verticalScroll ? -t.height() / n.items * l - n.gap / n.items * l : -t.width() / n.items * l - n.gap / n.items * l, E(), n.loop || l++, n.loop && l - n.items, l == i - a && n.loop && (r.slice(a, a + n.items).addClass("active"), 1, setTimeout(function() {
                        t.find("> .clb-slider-outer-stage > .clb-slider-stage > .cloned").removeClass("active"), e(r[l = a]).addClass("active"), d = n.verticalScroll ? -t.height() / n.items * l - n.gap / n.items * l : -t.width() / n.items * l - n.gap / n.items * l, E(), (n.dots || n.pagination) && S(l - a), s.css({
                            transition: "none"
                        }), o && k()
                    }, 1e3))), o && k(), T(l), setTimeout(function() {
                        t.trigger("clb-slider.changed")
                    }, 1e3)
                }

                function x(t, n, s, r, u, c) {
                    t.trigger("clb-slider.change").trigger("clb-slider.prev-change"), (n.loop && l != a - n.items || l > 1) && (s.css({
                        transition: "1s"
                    }), n.loop || --l - 1, d = n.verticalScroll ? -t.height() / n.items * (l - 1) - n.gap / n.items * l + +n.gap / n.items : -t.width() / n.items * (l - 1) - n.gap / n.items * l + +n.gap / n.items, E(), n.loop && --l - 1, n.loop ? ((n.dots || n.pagination) && S(l - a < 0 ? l : l - a), r.removeClass("active prev-slide next-slide"), r.slice(l, l + n.items).addClass("active"), e(r[l - 2]).addClass("prev-slide"), e(r[l + n.items]).addClass("next-slide")) : ((n.dots || n.pagination) && S(l - 1), r.removeClass("active prev-slide next-slide"), r.slice(l - 1, l + n.items - 1).addClass("active"), e(r[l - 2]).addClass("prev-slide"), e(r[l + n.items - 1]).addClass("next-slide")), l == a - n.items && n.loop && (r.slice(2 * a - n.items, 2 * a - n.items + n.items).addClass("active"), i - n.items - 1, setTimeout(function() {
                        t.find("> .clb-slider-outer-stage > .clb-slider-stage > .cloned").removeClass("active"), l = 2 * a - n.items, e(r[l]).addClass("active"), d = n.verticalScroll ? -t.height() / n.items * l - n.gap / n.items * l : -t.width() / n.items * l - n.gap / n.items * l, s.css({
                            transition: "none"
                        }), E(), (n.dots || n.pagination) && S(l - a), o && k()
                    }, 1e3))), o && k(), T(l), setTimeout(function() {
                        t.trigger("clb-slider.changed")
                    }, 1e3)
                }

                function w(t, n, o) {
                    o.on("click", function() {
                        g.css({
                            transition: "1s"
                        }), c = e(this).index(), n.loop && (c = c + a - 1), c + 1 != l && (c + 1 > i - n.items && (c = c - n.items + 1), l = c, b(t, n, g, v))
                    })
                }

                function C(e) {
                    var t = _(e.find(" > .clb-slider-outer-stage > .clb-slider-stage > .clb-slider-item.active"));
                    e.find("> .clb-slider-outer-stage").height(t)
                }

                function T(e) {
                    var t = n.find(".clb-slider-count-current"),
                        i = t.find(".clb-slider-count-number"),
                        o = 0;

                    function s() {
                        t.css({
                            transform: "translate(0, -" + f * o + "px)",
                            "-webkit-transform": "translate(0, -" + f * o + "px)",
                            "-ms-transform": "translate(0, -" + f * o + "px)"
                        })
                    }
                    t.css({
                        transition: ".3s"
                    }), p.loop ? (o = e - a + 1) == i.length ? o = 0 : o < 0 ? o = a + i : o > a ? setTimeout(function() {
                        o = 1, t.css({
                            transition: "none"
                        }), s()
                    }, 300) : 0 == o && setTimeout(function() {
                        o = a, t.css({
                            transition: "none"
                        }), s()
                    }, 300) : o = e - 1, s()
                }

                function k() {
                    if (n.hasClass("clb-slider-scroll-bar")) {
                        let t = p.loop ? l - a + 1 : l,
                            n = 100 / a * t;
                        n > 100 && (n = 100), e(".scroll-track").css("width", n + "%")
                    }
                }

                function S(t) {
                    s && (s.removeClass("active"), e(s[t]).addClass("active")), r && (r.removeClass("active"), e(r[t]).addClass("active"))
                }

                function E() {
                    u && (d *= -1), p.verticalScroll ? g.css({
                        transform: "translate(0, " + d + "px)",
                        "-webkit-transform": "translate(0, " + d + "px)",
                        "-ms-transform": "translate(0, " + d + "px)"
                    }) : g.css({
                        transform: "translate(" + d + "px, 0)",
                        "-webkit-transform": "translate(" + d + "px, 0)",
                        "-ms-transform": "translate(" + d + "px, 0)"
                    })
                }

                function $() {
                    g.css({
                        transition: "none"
                    }), l -= 1;
                    var t = y();
                    if (d = t.verticalScroll ? -n.height() / t.items * l - t.gap / t.items * l : -n.width() / t.items * l - t.gap / t.items * l, E(), v.removeClass("active"), v.slice(l, l + t.items).addClass("active"), e(v[l - 1]).addClass("prev-slide"), e(v[l + t.items]).addClass("next-slide"), t.verticalScroll) {
                        var o = (u = n.width()) * i / t.items + t.gap / t.items * i;
                        n.find("> .clb-slider-stage").css({
                            width: o + "px"
                        });
                        var s = (a = n.height()) / t.items - t.gap + t.gap / t.items,
                            r = a * i / t.items + t.gap / t.items * i;
                        v.css("height", s + "px"), v.css("margin-right", t.gap + "px"), n.css("height", s);
                        var a = v.height();
                        n.find("> .clb-slider-stage").css({
                            height: r + "px",
                            width: "auto"
                        })
                    } else {
                        var u, c = (u = n.width()) / t.items - t.gap + t.gap / t.items;
                        o = u * i / t.items + t.gap / t.items * i;
                        v.css("min-width", c + "px"), v.css("margin-right", t.gap + "px");
                        a = v.height();
                        n.find("> .clb-slider-stage").css({
                            width: o + "px"
                        })
                    }
                    t.loop ? (t.dots || t.pagination) && S(l - t.items) : (t.dots || t.pagination) && S(l), l++
                }

                function _(t) {
                    var n = 0;
                    return t.each(function() {
                        e(this).outerHeight() > n && (n = e(this).outerHeight())
                    }), n
                }! function() {
                    p.loop && (g.find(" > .cloned").length || (e(v).clone().addClass("cloned").appendTo(g), e(v).clone().addClass("cloned").prependTo(g)), v = g.find(" > .clb-slider-item"), l = a, i = v.length, v.slice(l, l + p.items).addClass("active"), d = p.verticalScroll ? -n.height() / p.items * l - p.gap / p.items * l : -n.width() / p.items * l - p.gap / p.items * l, E(), e(v[l - 1]).addClass("prev-slide"), e(v[l + p.items]).addClass("next-slide"));
                    !0 === p.mousewheel && function(t, n, o, a) {
                        t.offset().top, e(window).height(), t.outerHeight();
                        var u = !0;
                        if (-1 != navigator.userAgent.indexOf("Mac OS X"));
                        else;
                        t.on("wheel mousewheel", function(c) {
                            var d = c.originalEvent.deltaY;
                            if (-1 != navigator.userAgent.indexOf("Mac OS X")) var f = 1300;
                            else var f = 1e3;
                            if ((1 == n.scrollToSlider && 1 == l && d > 0 || l == i && d < 0) && (e("html, body").animate({
                                    scrollTop: t.offset().top + "px"
                                }), c.preventDefault()), !u) return !1;
                            d > 0 && l < i ? (b(t, n, o, a, s, r), u = !1, c.preventDefault()) : d < 0 && l > 1 && (x(t, n, o, a, s, r), u = !1, c.preventDefault()), setTimeout(function() {
                                u = !0
                            }, f)
                        })
                    }(n, p, g, v);
                    !0 === p.drag && function(t, n, i, o) {
                        var a = !0,
                            u = 100;
                        e(i).on("mousedown touchstart", function(l) {
                            var c = l.clientX;
                            "touchstart" == l.type && (c = l.originalEvent.touches[0].pageX), e(i).on("mousemove touchmove", function(l) {
                                if (1 == a) {
                                    var d = l.pageX;
                                    "touchmove" == l.type && (d = l.originalEvent.touches[0].pageX, u = 10), d + u < c ? (b(t, n, i, o, s, r), c = l.clientX, a = !1, e(i).find("a").on("click", function(e) {
                                        e.preventDefault()
                                    })) : d - u > c && (x(t, n, i, o, s, r), c = l.clientX, a = !1, e(i).find("a").on("click", function(e) {
                                        e.preventDefault()
                                    }))
                                }
                            }), setTimeout(function() {
                                a = !0
                            }, 1e3), e(i).find("a").off("click"), i[0].ondragstart = function() {
                                return !1
                            }
                        }), e(i).on("mouseup touchend", function(e) {
                            i.off("mousemove touchmove click")
                        })
                    }(n, p, g, v);
                    !0 === p.autoplay && function(t, n, i, o) {
                        var a = setInterval(function() {
                            t.hasClass("stop-slide") || b(t, n, i, o, s, r)
                        }, n.autoplayTimeout);
                        1 == n.autoplayHoverPause && t.hover(function() {
                            e(this).addClass("stop-slide")
                        }, function() {
                            e(this).removeClass("stop-slide")
                        });
                        e(window).on("resize", function() {
                            clearInterval(a)
                        })
                    }(n, p, g, v);
                    if (!0 === p.dots) {
                        var t = n.find(".clb-slider-dot, .clb-slider-page");
                        w(n, p, t)
                    }
                    if (!0 === p.pagination) {
                        var u = n.find(".clb-slider-dot, .clb-slider-page");
                        w(n, p, u)
                    }
                    p.verticalScroll && n.addClass("clb-slider-vertical");
                    !0 === p.navBtn && (n.find("> .clb-slider-nav-btn .next-btn").on("click", function() {
                        b(n, p, g, v, s, r)
                    }), n.find("> .clb-slider-nav-btn .prev-btn").on("click", function() {
                        x(n, p, g, v, s, r)
                    }));
                    !1 !== p.startSlide && (l = +p.startSlide, v.removeClass("active"), v.slice(l, +l + p.items).addClass("active"), d = p.verticalScroll ? -n.height() / p.items * l - p.gap / i - p.gap / 2 : -n.width() / p.items * l - p.gap / i - p.gap / 2, E(), l++);
                    e(window).on("keydown", function(e) {
                        var t = e.which || e.keyCode;
                        37 == t && x(n, p, g, v, s, r), 39 == t && b(n, p, g, v, s, r)
                    }), !0 === p.autoHeight && n.on("clb-slider.changed", function() {
                        C(n)
                    });
                    o && k();
                    n.on("to-slide", function(e, t) {
                        l = t, b(n, p, g, v, s, r)
                    }), n.on("next-slide", function(e) {
                        b(n, p, g, v, s, r)
                    }), n.on("prev-slide", function(e) {
                        x(n, p, g, v, s, r)
                    }), setTimeout(function() {
                        n.trigger("clb-slider.init")
                    }, 10), n.on("executeAutoHeight", function() {
                        C(n)
                    })
                }();
                var A = !1,
                    D = e(window).width();
                e(window).on("resize", function() {
                    e(window).width() != D && (m = new Date, !1 === A && (A = !0, setTimeout(function() {
                        new Date - m < 200 ? setTimeout(function() {
                            A = !1, $()
                        }, 200) : (A = !1, $())
                    }, 200)))
                })
            })
        },
        destroy: function() {
            return this.each(function() {
                var t = e(this),
                    n = t.find(".clb-slider-item");
                t.removeClass("clb-slider"), n.unwrap(), n.removeAttr("style").removeClass("clb-slider-item active")
            })
        }
    };
    jQuery.fn.clbSlider = function(n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method with name " + n + " doesn't exist") : t.init.apply(this, arguments)
    }
}(jQuery),
function(e, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, function(e, t) {
    "use strict";

    function n(n, s, a) {
        (a = a || t || e.jQuery) && (s.prototype.option || (s.prototype.option = function(e) {
            a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e))
        }), a.fn[n] = function(e) {
            return "string" == typeof e ? function(e, t, i) {
                var o, s = "$()." + n + '("' + t + '")';
                return e.each(function(e, u) {
                    var l = a.data(u, n);
                    if (l) {
                        var c = l[t];
                        if (c && "_" != t.charAt(0)) {
                            var d = c.apply(l, i);
                            o = void 0 === o ? d : o
                        } else r(s + " is not a valid method")
                    } else r(n + " not initialized. Cannot call methods, i.e. " + s)
                }), void 0 !== o ? o : e
            }(this, e, o.call(arguments, 1)) : (function(e, t) {
                e.each(function(e, i) {
                    var o = a.data(i, n);
                    o ? (o.option(t), o._init()) : (o = new s(i, t), a.data(i, n, o))
                })
            }(this, e), this)
        }, i(a))
    }

    function i(e) {
        !e || e && e.bridget || (e.bridget = n)
    }
    var o = Array.prototype.slice,
        s = e.console,
        r = void 0 === s ? function() {} : function(e) {
            s.error(e)
        };
    return i(t || e.jQuery), n
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var n = this._events = this._events || {},
                i = n[e] = n[e] || [];
            return -1 == i.indexOf(t) && i.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[e] = n[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = n.indexOf(t);
            return -1 != i && n.splice(i, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            n = n.slice(0), t = t || [];
            for (var i = this._onceEvents && this._onceEvents[e], o = 0; o < n.length; o++) {
                var s = n[o];
                i && i[s] && (this.off(e, s), delete i[s]), s.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function() {
    "use strict";

    function e(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }

    function t(e) {
        var t = getComputedStyle(e);
        return t || s("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
    }

    function n() {
        if (!u) {
            u = !0;
            var n = document.createElement("div");
            n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style.boxSizing = "border-box";
            var s = document.body || document.documentElement;
            s.appendChild(n);
            var r = t(n);
            o = 200 == Math.round(e(r.width)), i.isBoxSizeOuter = o, s.removeChild(n)
        }
    }

    function i(i) {
        if (n(), "string" == typeof i && (i = document.querySelector(i)), i && "object" == typeof i && i.nodeType) {
            var s = t(i);
            if ("none" == s.display) return function() {
                for (var e = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, t = 0; t < a; t++) e[r[t]] = 0;
                return e
            }();
            var u = {};
            u.width = i.offsetWidth, u.height = i.offsetHeight;
            for (var l = u.isBorderBox = "border-box" == s.boxSizing, c = 0; c < a; c++) {
                var d = r[c],
                    f = s[d],
                    h = parseFloat(f);
                u[d] = isNaN(h) ? 0 : h
            }
            var p = u.paddingLeft + u.paddingRight,
                m = u.paddingTop + u.paddingBottom,
                g = u.marginLeft + u.marginRight,
                v = u.marginTop + u.marginBottom,
                y = u.borderLeftWidth + u.borderRightWidth,
                b = u.borderTopWidth + u.borderBottomWidth,
                x = l && o,
                w = e(s.width);
            !1 !== w && (u.width = w + (x ? 0 : p + y));
            var C = e(s.height);
            return !1 !== C && (u.height = C + (x ? 0 : m + b)), u.innerWidth = u.width - (p + y), u.innerHeight = u.height - (m + b), u.outerWidth = u.width + g, u.outerHeight = u.height + v, u
        }
    }
    var o, s = "undefined" == typeof console ? function() {} : function(e) {
            console.error(e)
        },
        r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        a = r.length,
        u = !1;
    return i
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function() {
    "use strict";
    var e = function() {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
            var i = t[n] + "MatchesSelector";
            if (e[i]) return i
        }
    }();
    return function(t, n) {
        return t[e](n)
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, function(e, t) {
    var n = {
            extend: function(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            },
            modulo: function(e, t) {
                return (e % t + t) % t
            }
        },
        i = Array.prototype.slice;
    n.makeArray = function(e) {
        return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? i.call(e) : [e]
    }, n.removeFrom = function(e, t) {
        var n = e.indexOf(t); - 1 != n && e.splice(n, 1)
    }, n.getParent = function(e, n) {
        for (; e.parentNode && e != document.body;)
            if (e = e.parentNode, t(e, n)) return e
    }, n.getQueryElement = function(e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, n.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, n.filterFindElements = function(e, i) {
        e = n.makeArray(e);
        var o = [];
        return e.forEach(function(e) {
            if (e instanceof HTMLElement) {
                if (!i) return void o.push(e);
                t(e, i) && o.push(e);
                for (var n = e.querySelectorAll(i), s = 0; s < n.length; s++) o.push(n[s])
            }
        }), o
    }, n.debounceMethod = function(e, t, n) {
        n = n || 100;
        var i = e.prototype[t],
            o = t + "Timeout";
        e.prototype[t] = function() {
            var e = this[o];
            clearTimeout(e);
            var t = arguments,
                s = this;
            this[o] = setTimeout(function() {
                i.apply(s, t), delete s[o]
            }, n)
        }
    }, n.docReady = function(e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, n.toDashed = function(e) {
        return e.replace(/(.)([A-Z])/g, function(e, t, n) {
            return t + "-" + n
        }).toLowerCase()
    };
    var o = e.console;
    return n.htmlInit = function(t, i) {
        n.docReady(function() {
            var s = n.toDashed(i),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                l = n.makeArray(a).concat(n.makeArray(u)),
                c = r + "-options",
                d = e.jQuery;
            l.forEach(function(e) {
                var n, s = e.getAttribute(r) || e.getAttribute(c);
                try {
                    n = s && JSON.parse(s)
                } catch (t) {
                    return void(o && o.error("Error parsing " + r + " on " + e.className + ": " + t))
                }
                var a = new t(e, n);
                d && d.data(e, i, a)
            })
        })
    }, n
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function(e, t) {
    "use strict";

    function n(e, t) {
        e && (this.element = e, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var i = document.documentElement.style,
        o = "string" == typeof i.transition ? "transition" : "WebkitTransition",
        s = "string" == typeof i.transform ? "transform" : "WebkitTransform",
        r = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        } [o],
        a = {
            transform: s,
            transition: o,
            transitionDuration: o + "Duration",
            transitionProperty: o + "Property",
            transitionDelay: o + "Delay"
        },
        u = n.prototype = Object.create(e.prototype);
    u.constructor = n, u._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, u.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, u.getSize = function() {
        this.size = t(this.element)
    }, u.css = function(e) {
        var t = this.element.style;
        for (var n in e) {
            t[a[n] || n] = e[n]
        }
    }, u.getPosition = function() {
        var e = getComputedStyle(this.element),
            t = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            i = e[t ? "left" : "right"],
            o = e[n ? "top" : "bottom"],
            s = parseFloat(i),
            r = parseFloat(o),
            a = this.layout.size; - 1 != i.indexOf("%") && (s = s / 100 * a.width), -1 != o.indexOf("%") && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= t ? a.paddingLeft : a.paddingRight, r -= n ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
    }, u.layoutPosition = function() {
        var e = this.layout.size,
            t = {},
            n = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = n ? "paddingLeft" : "paddingRight",
            s = n ? "left" : "right",
            r = n ? "right" : "left",
            a = this.position.x + e[o];
        t[s] = this.getXValue(a), t[r] = "";
        var u = i ? "paddingTop" : "paddingBottom",
            l = i ? "top" : "bottom",
            c = i ? "bottom" : "top",
            d = this.position.y + e[u];
        t[l] = this.getYValue(d), t[c] = "", this.css(t), this.emitEvent("layout", [this])
    }, u.getXValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, u.getYValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, u._transitionTo = function(e, t) {
        this.getPosition();
        var n = this.position.x,
            i = this.position.y,
            o = e == this.position.x && t == this.position.y;
        if (this.setPosition(e, t), !o || this.isTransitioning) {
            var s = e - n,
                r = t - i,
                a = {};
            a.transform = this.getTranslate(s, r), this.transition({
                to: a,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, u.getTranslate = function(e, t) {
        return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)"
    }, u.goTo = function(e, t) {
        this.setPosition(e, t), this.layoutPosition()
    }, u.moveTo = u._transitionTo, u.setPosition = function(e, t) {
        this.position.x = parseFloat(e), this.position.y = parseFloat(t)
    }, u._nonTransition = function(e) {
        for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
    }, u.transition = function(e) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var t = this._transn;
            for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
            for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
            if (e.from) {
                this.css(e.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
        } else this._nonTransition(e)
    };
    var l = "opacity," + function(e) {
        return e.replace(/([A-Z])/g, function(e) {
            return "-" + e.toLowerCase()
        })
    }(s);
    u.enableTransition = function() {
        if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            e = "number" == typeof e ? e + "ms" : e, this.css({
                transitionProperty: l,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(r, this, !1)
        }
    }, u.onwebkitTransitionEnd = function(e) {
        this.ontransitionend(e)
    }, u.onotransitionend = function(e) {
        this.ontransitionend(e)
    };
    var c = {
        "-webkit-transform": "transform"
    };
    u.ontransitionend = function(e) {
        if (e.target === this.element) {
            var t = this._transn,
                n = c[e.propertyName] || e.propertyName;
            if (delete t.ingProperties[n], function(e) {
                    for (var t in e) return !1;
                    return !0
                }(t.ingProperties) && this.disableTransition(), n in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[n]), n in t.onEnd) t.onEnd[n].call(this), delete t.onEnd[n];
            this.emitEvent("transitionEnd", [this])
        }
    }, u.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
    }, u._removeStyles = function(e) {
        var t = {};
        for (var n in e) t[n] = "";
        this.css(t)
    };
    var d = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return u.removeTransitionStyles = function() {
        this.css(d)
    }, u.stagger = function(e) {
        e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
    }, u.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, u.remove = function() {
        return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, u.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, u.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, u.getHideRevealTransitionEndProperty = function(e) {
        var t = this.layout.options[e];
        if (t.opacity) return "opacity";
        for (var n in t) return n
    }, u.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, u.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, u.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, n
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(n, i, o, s) {
        return t(e, n, i, o, s)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
}(window, function(e, t, n, i, o) {
    "use strict";

    function s(e, t) {
        var n = i.getQueryElement(e);
        if (n) {
            this.element = n, u && (this.$element = u(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(t);
            var o = ++c;
            this.element.outlayerGUID = o, d[o] = this, this._create(), this._getOption("initLayout") && this.layout()
        } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || e))
    }

    function r(e) {
        function t() {
            e.apply(this, arguments)
        }
        return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
    }
    var a = e.console,
        u = e.jQuery,
        l = function() {},
        c = 0,
        d = {};
    s.namespace = "outlayer", s.Item = o, s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var f = s.prototype;
    i.extend(f, t.prototype), f.option = function(e) {
        i.extend(this.options, e)
    }, f._getOption = function(e) {
        var t = this.constructor.compatOptions[e];
        return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, f._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, f.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, f._itemize = function(e) {
        for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], o = 0; o < t.length; o++) {
            var s = new n(t[o], this);
            i.push(s)
        }
        return i
    }, f._filterFindItemElements = function(e) {
        return i.filterFindElements(e, this.options.itemSelector)
    }, f.getItemElements = function() {
        return this.items.map(function(e) {
            return e.element
        })
    }, f.layout = function() {
        this._resetLayout(), this._manageStamps();
        var e = this._getOption("layoutInstant"),
            t = void 0 !== e ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, f._init = f.layout, f._resetLayout = function() {
        this.getSize()
    }, f.getSize = function() {
        this.size = n(this.element)
    }, f._getMeasurement = function(e, t) {
        var i, o = this.options[e];
        o ? ("string" == typeof o ? i = this.element.querySelector(o) : o instanceof HTMLElement && (i = o), this[e] = i ? n(i)[t] : o) : this[e] = 0
    }, f.layoutItems = function(e, t) {
        e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
    }, f._getItemsForLayout = function(e) {
        return e.filter(function(e) {
            return !e.isIgnored
        })
    }, f._layoutItems = function(e, t) {
        if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var n = [];
            e.forEach(function(e) {
                var i = this._getItemLayoutPosition(e);
                i.item = e, i.isInstant = t || e.isLayoutInstant, n.push(i)
            }, this), this._processLayoutQueue(n)
        }
    }, f._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, f._processLayoutQueue = function(e) {
        this.updateStagger(), e.forEach(function(e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t)
        }, this)
    }, f.updateStagger = function() {
        var e = this.options.stagger;
        return null == e ? void(this.stagger = 0) : (this.stagger = function(e) {
            if ("number" == typeof e) return e;
            var t = e.match(/(^\d*\.?\d*)(\w*)/),
                n = t && t[1],
                i = t && t[2];
            return n.length ? (n = parseFloat(n)) * (h[i] || 1) : 0
        }(e), this.stagger)
    }, f._positionItem = function(e, t, n, i, o) {
        i ? e.goTo(t, n) : (e.stagger(o * this.stagger), e.moveTo(t, n))
    }, f._postLayout = function() {
        this.resizeContainer()
    }, f.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, f._getContainerSize = l, f._setContainerMeasure = function(e, t) {
        if (void 0 !== e) {
            var n = this.size;
            n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
        }
    }, f._emitCompleteOnItems = function(e, t) {
        function n() {
            o.dispatchEvent(e + "Complete", null, [t])
        }

        function i() {
            ++r == s && n()
        }
        var o = this,
            s = t.length;
        if (t && s) {
            var r = 0;
            t.forEach(function(t) {
                t.once(e, i)
            })
        } else n()
    }, f.dispatchEvent = function(e, t, n) {
        var i = t ? [t].concat(n) : n;
        if (this.emitEvent(e, i), u)
            if (this.$element = this.$element || u(this.element), t) {
                var o = u.Event(t);
                o.type = e, this.$element.trigger(o, n)
            } else this.$element.trigger(e, n)
    }, f.ignore = function(e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0)
    }, f.unignore = function(e) {
        var t = this.getItem(e);
        t && delete t.isIgnored
    }, f.stamp = function(e) {
        (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, f.unstamp = function(e) {
        (e = this._find(e)) && e.forEach(function(e) {
            i.removeFrom(this.stamps, e), this.unignore(e)
        }, this)
    }, f._find = function(e) {
        if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), i.makeArray(e)
    }, f._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, f._getBoundingRect = function() {
        var e = this.element.getBoundingClientRect(),
            t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
    }, f._manageStamp = l, f._getElementOffset = function(e) {
        var t = e.getBoundingClientRect(),
            i = this._boundingRect,
            o = n(e);
        return {
            left: t.left - i.left - o.marginLeft,
            top: t.top - i.top - o.marginTop,
            right: i.right - t.right - o.marginRight,
            bottom: i.bottom - t.bottom - o.marginBottom
        }
    }, f.handleEvent = i.handleEvent, f.bindResize = function() {
        e.addEventListener("resize", this), this.isResizeBound = !0
    }, f.unbindResize = function() {
        e.removeEventListener("resize", this), this.isResizeBound = !1
    }, f.onresize = function() {
        this.resize()
    }, i.debounceMethod(s, "onresize", 100), f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, f.needsResizeLayout = function() {
        var e = n(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth
    }, f.addItems = function(e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)), t
    }, f.appended = function(e) {
        var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t))
    }, f.prepended = function(e) {
        var t = this._itemize(e);
        if (t.length) {
            var n = this.items.slice(0);
            this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
        }
    }, f.reveal = function(e) {
        if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach(function(e, n) {
                e.stagger(n * t), e.reveal()
            })
        }
    }, f.hide = function(e) {
        if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach(function(e, n) {
                e.stagger(n * t), e.hide()
            })
        }
    }, f.revealItemElements = function(e) {
        var t = this.getItems(e);
        this.reveal(t)
    }, f.hideItemElements = function(e) {
        var t = this.getItems(e);
        this.hide(t)
    }, f.getItem = function(e) {
        for (var t = 0; t < this.items.length; t++) {
            var n = this.items[t];
            if (n.element == e) return n
        }
    }, f.getItems = function(e) {
        e = i.makeArray(e);
        var t = [];
        return e.forEach(function(e) {
            var n = this.getItem(e);
            n && t.push(n)
        }, this), t
    }, f.remove = function(e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(e) {
            e.remove(), i.removeFrom(this.items, e)
        }, this)
    }, f.destroy = function() {
        var e = this.element.style;
        e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
            e.destroy()
        }), this.unbindResize();
        var t = this.element.outlayerGUID;
        delete d[t], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
    }, s.data = function(e) {
        var t = (e = i.getQueryElement(e)) && e.outlayerGUID;
        return t && d[t]
    }, s.create = function(e, t) {
        var n = r(s);
        return n.defaults = i.extend({}, s.defaults), i.extend(n.defaults, t), n.compatOptions = i.extend({}, s.compatOptions), n.namespace = e, n.data = s.data, n.Item = r(o), i.htmlInit(n, e), u && u.bridget && u.bridget(e, n), n
    };
    var h = {
        ms: 1,
        s: 1e3
    };
    return s.Item = o, s
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
}(window, function(e) {
    "use strict";

    function t() {
        e.Item.apply(this, arguments)
    }
    var n = t.prototype = Object.create(e.Item.prototype),
        i = n._create;
    n._create = function() {
        this.id = this.layout.itemGUID++, i.call(this), this.sortData = {}
    }, n.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var e = this.layout.options.getSortData,
                t = this.layout._sorters;
            for (var n in e) {
                var i = t[n];
                this.sortData[n] = i(this.element, this)
            }
        }
    };
    var o = n.destroy;
    return n.destroy = function() {
        o.apply(this, arguments), this.css({
            display: ""
        })
    }, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window, function(e, t) {
    "use strict";

    function n(e) {
        this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
    }
    var i = n.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(e) {
        i[e] = function() {
            return t.prototype[e].apply(this.isotope, arguments)
        }
    }), i.needsVerticalResizeLayout = function() {
        var t = e(this.isotope.element);
        return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
    }, i._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, i.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, i.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, i.getSegmentSize = function(e, t) {
        var n = e + t,
            i = "outer" + t;
        if (this._getMeasurement(n, i), !this[n]) {
            var o = this.getFirstItemSize();
            this[n] = o && o[i] || this.isotope.size["inner" + t]
        }
    }, i.getFirstItemSize = function() {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element)
    }, i.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, i.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, n.modes = {}, n.create = function(e, t) {
        function o() {
            n.apply(this, arguments)
        }
        return o.prototype = Object.create(i), o.prototype.constructor = o, t && (o.options = t), o.prototype.namespace = e, n.modes[e] = o, o
    }, n
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function(e, t) {
    var n = e.create("masonry");
    n.compatOptions.fitWidth = "isFitWidth";
    var i = n.prototype;
    return i._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, i.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var e = this.items[0],
                n = e && e.element;
            this.columnWidth = n && t(n).outerWidth || this.containerWidth
        }
        var i = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            s = o / i,
            r = i - o % i;
        s = Math[r && r < 1 ? "round" : "floor"](s), this.cols = Math.max(s, 1)
    }, i.getContainerWidth = function() {
        var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
            n = t(e);
        this.containerWidth = n && n.innerWidth
    }, i._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth,
            n = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, e), o = {
                x: this.columnWidth * i.col,
                y: i.y
            }, s = i.y + e.size.outerHeight, r = n + i.col, a = i.col; a < r; a++) this.colYs[a] = s;
        return o
    }, i._getTopColPosition = function(e) {
        var t = this._getTopColGroup(e),
            n = Math.min.apply(Math, t);
        return {
            col: t.indexOf(n),
            y: n
        }
    }, i._getTopColGroup = function(e) {
        if (e < 2) return this.colYs;
        for (var t = [], n = this.cols + 1 - e, i = 0; i < n; i++) t[i] = this._getColGroupY(i, e);
        return t
    }, i._getColGroupY = function(e, t) {
        if (t < 2) return this.colYs[e];
        var n = this.colYs.slice(e, e + t);
        return Math.max.apply(Math, n)
    }, i._getHorizontalColPosition = function(e, t) {
        var n = this.horizontalColIndex % this.cols;
        n = e > 1 && n + e > this.cols ? 0 : n;
        var i = t.size.outerWidth && t.size.outerHeight;
        return this.horizontalColIndex = i ? n + e : this.horizontalColIndex, {
            col: n,
            y: this._getColGroupY(n, e)
        }
    }, i._manageStamp = function(e) {
        var n = t(e),
            i = this._getElementOffset(e),
            o = this._getOption("originLeft") ? i.left : i.right,
            s = o + n.outerWidth,
            r = Math.floor(o / this.columnWidth);
        r = Math.max(0, r);
        var a = Math.floor(s / this.columnWidth);
        a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var u = (this._getOption("originTop") ? i.top : i.bottom) + n.outerHeight, l = r; l <= a; l++) this.colYs[l] = Math.max(u, this.colYs[l])
    }, i._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
    }, i._getContainerFitWidth = function() {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }, i.needsResizeLayout = function() {
        var e = this.containerWidth;
        return this.getContainerWidth(), e != this.containerWidth
    }, n
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
}(window, function(e, t) {
    "use strict";
    var n = e.create("masonry"),
        i = n.prototype,
        o = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in t.prototype) o[s] || (i[s] = t.prototype[s]);
    var r = i.measureColumns;
    i.measureColumns = function() {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = i._getOption;
    return i._getOption = function(e) {
        return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, n
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function(e) {
    "use strict";
    var t = e.create("fitRows"),
        n = t.prototype;
    return n._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, n._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth + this.gutter,
            n = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && t + this.x > n && (this.x = 0, this.y = this.maxY);
        var i = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, i
    }, n._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function(e) {
    "use strict";
    var t = e.create("vertical", {
            horizontalAlignment: 0
        }),
        n = t.prototype;
    return n._resetLayout = function() {
        this.y = 0
    }, n._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
            n = this.y;
        return this.y += e.size.outerHeight, {
            x: t,
            y: n
        }
    }, n._getContainerSize = function() {
        return {
            height: this.y
        }
    }, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(n, i, o, s, r, a) {
        return t(e, n, i, o, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : e.Isotope = t(e, e.Outlayer, e.getSize, e.matchesSelector, e.fizzyUIUtils, e.Isotope.Item, e.Isotope.LayoutMode)
}(window, function(e, t, n, i, o, s, r) {
    var a = e.jQuery,
        u = String.prototype.trim ? function(e) {
            return e.trim()
        } : function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        },
        l = t.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    l.Item = s, l.LayoutMode = r;
    var c = l.prototype;
    c._create = function() {
        for (var e in this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(e)
    }, c.reloadItems = function() {
        this.itemGUID = 0, t.prototype.reloadItems.call(this)
    }, c._itemize = function() {
        for (var e = t.prototype._itemize.apply(this, arguments), n = 0; n < e.length; n++) {
            e[n].id = this.itemGUID++
        }
        return this._updateItemsSortData(e), e
    }, c._initLayoutMode = function(e) {
        var t = r.modes[e],
            n = this.options[e] || {};
        this.options[e] = t.options ? o.extend(t.options, n) : n, this.modes[e] = new t(this)
    }, c.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, c._layout = function() {
        var e = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
    }, c.arrange = function(e) {
        this.option(e), this._getIsInstant();
        var t = this._filter(this.items);
        this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
    }, c._init = c.arrange, c._hideReveal = function(e) {
        this.reveal(e.needReveal), this.hide(e.needHide)
    }, c._getIsInstant = function() {
        var e = this._getOption("layoutInstant"),
            t = void 0 !== e ? e : !this._isLayoutInited;
        return this._isInstant = t, t
    }, c._bindArrangeComplete = function() {
        function e() {
            t && n && i && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        var t, n, i, o = this;
        this.once("layoutComplete", function() {
            t = !0, e()
        }), this.once("hideComplete", function() {
            n = !0, e()
        }), this.once("revealComplete", function() {
            i = !0, e()
        })
    }, c._filter = function(e) {
        var t = this.options.filter;
        t = t || "*";
        for (var n = [], i = [], o = [], s = this._getFilterTest(t), r = 0; r < e.length; r++) {
            var a = e[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && n.push(a), u && a.isHidden ? i.push(a) : u || a.isHidden || o.push(a)
            }
        }
        return {
            matches: n,
            needReveal: i,
            needHide: o
        }
    }, c._getFilterTest = function(e) {
        return a && this.options.isJQueryFiltering ? function(t) {
            return a(t.element).is(e)
        } : "function" == typeof e ? function(t) {
            return e(t.element)
        } : function(t) {
            return i(t.element, e)
        }
    }, c.updateSortData = function(e) {
        var t;
        e ? (e = o.makeArray(e), t = this.getItems(e)) : t = this.items, this._getSorters(), this._updateItemsSortData(t)
    }, c._getSorters = function() {
        var e = this.options.getSortData;
        for (var t in e) {
            var n = e[t];
            this._sorters[t] = d(n)
        }
    }, c._updateItemsSortData = function(e) {
        for (var t = e && e.length, n = 0; t && n < t; n++) {
            e[n].updateSortData()
        }
    };
    var d = function() {
        return function(e) {
            if ("string" != typeof e) return e;
            var t = u(e).split(" "),
                n = t[0],
                i = n.match(/^\[(.+)\]$/),
                o = function(e, t) {
                    return e ? function(t) {
                        return t.getAttribute(e)
                    } : function(e) {
                        var n = e.querySelector(t);
                        return n && n.textContent
                    }
                }(i && i[1], n),
                s = l.sortDataParsers[t[1]];
            return s ? function(e) {
                return e && s(o(e))
            } : function(e) {
                return e && o(e)
            }
        }
    }();
    l.sortDataParsers = {
        parseInt: function(e) {
            return parseInt(e, 10)
        },
        parseFloat: function(e) {
            return parseFloat(e)
        }
    }, c._sort = function() {
        if (this.options.sortBy) {
            var e = o.makeArray(this.options.sortBy);
            this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory));
            var t = function(e, t) {
                return function(n, i) {
                    for (var o = 0; o < e.length; o++) {
                        var s = e[o],
                            r = n.sortData[s],
                            a = i.sortData[s];
                        if (r > a || r < a) return (r > a ? 1 : -1) * ((void 0 !== t[s] ? t[s] : t) ? 1 : -1)
                    }
                    return 0
                }
            }(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(t)
        }
    }, c._getIsSameSortBy = function(e) {
        for (var t = 0; t < e.length; t++)
            if (e[t] != this.sortHistory[t]) return !1;
        return !0
    }, c._mode = function() {
        var e = this.options.layoutMode,
            t = this.modes[e];
        if (!t) throw new Error("No layout mode: " + e);
        return t.options = this.options[e], t
    }, c._resetLayout = function() {
        t.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, c._getItemLayoutPosition = function(e) {
        return this._mode()._getItemLayoutPosition(e)
    }, c._manageStamp = function(e) {
        this._mode()._manageStamp(e)
    }, c._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, c.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, c.appended = function(e) {
        var t = this.addItems(e);
        if (t.length) {
            var n = this._filterRevealAdded(t);
            this.filteredItems = this.filteredItems.concat(n)
        }
    }, c.prepended = function(e) {
        var t = this._itemize(e);
        if (t.length) {
            this._resetLayout(), this._manageStamps();
            var n = this._filterRevealAdded(t);
            this.layoutItems(this.filteredItems), this.filteredItems = n.concat(this.filteredItems), this.items = t.concat(this.items)
        }
    }, c._filterRevealAdded = function(e) {
        var t = this._filter(e);
        return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
    }, c.insert = function(e) {
        var t = this.addItems(e);
        if (t.length) {
            var n, i, o = t.length;
            for (n = 0; n < o; n++) i = t[n], this.element.appendChild(i.element);
            var s = this._filter(t).matches;
            for (n = 0; n < o; n++) t[n].isLayoutInstant = !0;
            for (this.arrange(), n = 0; n < o; n++) delete t[n].isLayoutInstant;
            this.reveal(s)
        }
    };
    var f = c.remove;
    return c.remove = function(e) {
        e = o.makeArray(e);
        var t = this.getItems(e);
        f.call(this, e);
        for (var n = t && t.length, i = 0; n && i < n; i++) {
            var s = t[i];
            o.removeFrom(this.filteredItems, s)
        }
    }, c.shuffle = function() {
        for (var e = 0; e < this.items.length; e++) {
            this.items[e].sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, c._noTransition = function(e, t) {
        var n = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var i = e.apply(this, t);
        return this.options.transitionDuration = n, i
    }, c.getFilteredItemElements = function() {
        return this.filteredItems.map(function(e) {
            return e.element
        })
    }, l
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Typed = t() : e.Typed = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(1),
            s = n(3),
            r = function() {
                function e(t, n) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), o.initializer.load(this, n, t), this.begin()
                }
                return i(e, [{
                    key: "toggle",
                    value: function() {
                        this.pause.status ? this.start() : this.stop()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.reset(!1), this.options.onDestroy(this)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e && (this.insertCursor(), this.options.onReset(this), this.begin())
                    }
                }, {
                    key: "begin",
                    value: function() {
                        var e = this;
                        this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                            e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                        }, this.startDelay)
                    }
                }, {
                    key: "typewrite",
                    value: function(e, t) {
                        var n = this;
                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                        var i = this.humanizer(this.typeSpeed),
                            o = 1;
                        return !0 === this.pause.status ? void this.setPauseStatus(e, t, !0) : void(this.timeout = setTimeout(function() {
                            t = s.htmlParser.typeHtmlChars(e, t, n);
                            var i = 0,
                                r = e.substr(t);
                            if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                                var a = 1;
                                a += (r = /\d+/.exec(r)[0]).length, i = parseInt(r), n.temporaryPause = !0, n.options.onTypingPaused(n.arrayPos, n), e = e.substring(0, t) + e.substring(t + a), n.toggleBlinking(!0)
                            }
                            if ("`" === r.charAt(0)) {
                                for (;
                                    "`" !== e.substr(t + o).charAt(0) && !(t + ++o > e.length););
                                var u = e.substring(0, t),
                                    l = e.substring(u.length + 1, t + o),
                                    c = e.substring(t + o + 1);
                                e = u + l + c, o--
                            }
                            n.timeout = setTimeout(function() {
                                n.toggleBlinking(!1), t === e.length ? n.doneTyping(e, t) : n.keepTyping(e, t, o), n.temporaryPause && (n.temporaryPause = !1, n.options.onTypingResumed(n.arrayPos, n))
                            }, i)
                        }, i))
                    }
                }, {
                    key: "keepTyping",
                    value: function(e, t, n) {
                        0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), t += n;
                        var i = e.substr(0, t);
                        this.replaceText(i), this.typewrite(e, t)
                    }
                }, {
                    key: "doneTyping",
                    value: function(e, t) {
                        var n = this;
                        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                            n.backspace(e, t)
                        }, this.backDelay))
                    }
                }, {
                    key: "backspace",
                    value: function(e, t) {
                        var n = this;
                        if (!0 !== this.pause.status) {
                            if (this.fadeOut) return this.initFadeOut();
                            this.toggleBlinking(!1);
                            var i = this.humanizer(this.backSpeed);
                            this.timeout = setTimeout(function() {
                                t = s.htmlParser.backSpaceHtmlChars(e, t, n);
                                var i = e.substr(0, t);
                                if (n.replaceText(i), n.smartBackspace) {
                                    var o = n.strings[n.arrayPos + 1];
                                    o && i === o.substr(0, t) ? n.stopNum = t : n.stopNum = 0
                                }
                                t > n.stopNum ? (t--, n.backspace(e, t)) : t <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.options.onLastStringBackspaced(), n.shuffleStringsIfNeeded(), n.begin()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], t))
                            }, i)
                        } else this.setPauseStatus(e, t, !0)
                    }
                }, {
                    key: "complete",
                    value: function() {
                        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                    }
                }, {
                    key: "setPauseStatus",
                    value: function(e, t, n) {
                        this.pause.typewrite = n, this.pause.curString = e, this.pause.curStrPos = t
                    }
                }, {
                    key: "toggleBlinking",
                    value: function(e) {
                        if (this.cursor && !this.pause.status && this.cursorBlinking !== e) {
                            this.cursorBlinking = e;
                            var t = e ? "infinite" : 0;
                            this.cursor.style.animationIterationCount = t
                        }
                    }
                }, {
                    key: "humanizer",
                    value: function(e) {
                        return Math.round(Math.random() * e / 2) + e
                    }
                }, {
                    key: "shuffleStringsIfNeeded",
                    value: function() {
                        this.shuffle && (this.sequence = this.sequence.sort(function() {
                            return Math.random() - .5
                        }))
                    }
                }, {
                    key: "initFadeOut",
                    value: function() {
                        var e = this;
                        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                            e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0)
                        }, this.fadeOutDelay)
                    }
                }, {
                    key: "replaceText",
                    value: function(e) {
                        this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
                    }
                }, {
                    key: "bindFocusEvents",
                    value: function() {
                        var e = this;
                        this.isInput && (this.el.addEventListener("focus", function(t) {
                            e.stop()
                        }), this.el.addEventListener("blur", function(t) {
                            e.el.value && 0 !== e.el.value.length || e.start()
                        }))
                    }
                }, {
                    key: "insertCursor",
                    value: function() {
                        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                    }
                }]), e
            }();
        t.default = r, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(2)),
            r = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return o(e, [{
                    key: "load",
                    value: function(e, t, n) {
                        if (e.el = "string" == typeof n ? document.querySelector(n) : n, e.options = i({}, s.default, t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function(e) {
                                return e.trim()
                            }), "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement, e.stringsElement) {
                            e.strings = [], e.stringsElement.style.display = "none";
                            var o = Array.prototype.slice.apply(e.stringsElement.children),
                                r = !0,
                                a = !1,
                                u = void 0;
                            try {
                                for (var l, c = o[Symbol.iterator](); !(r = (l = c.next()).done); r = !0) {
                                    var d = l.value;
                                    e.strings.push(d.innerHTML.trim())
                                }
                            } catch (e) {
                                a = !0, u = e
                            } finally {
                                try {
                                    !r && c.return && c.return()
                                } finally {
                                    if (a) throw u
                                }
                            }
                        }
                        for (var f in e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
                                status: !1,
                                typewrite: !0,
                                curString: "",
                                curStrPos: 0
                            }, e.typingComplete = !1, e.strings) e.sequence[f] = f;
                        e.currentElContent = this.getCurrentElContent(e), e.autoInsertCss = e.options.autoInsertCss, this.appendAnimationCss(e)
                    }
                }, {
                    key: "getCurrentElContent",
                    value: function(e) {
                        return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
                    }
                }, {
                    key: "appendAnimationCss",
                    value: function(e) {
                        if (e.autoInsertCss && e.showCursor && e.fadeOut) {
                            var t = document.createElement("style");
                            t.type = "text/css";
                            var n = "";
                            e.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), e.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "), 0 !== t.length && (t.innerHTML = n, document.head.appendChild(t))
                        }
                    }
                }]), e
            }();
        t.default = r;
        var a = new r;
        t.initializer = a
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onComplete: function(e) {},
            preStringTyped: function(e, t) {},
            onStringTyped: function(e, t) {},
            onLastStringBackspaced: function(e) {},
            onTypingPaused: function(e, t) {},
            onTypingResumed: function(e, t) {},
            onReset: function(e) {},
            onStop: function(e, t) {},
            onStart: function(e, t) {},
            onDestroy: function(e) {}
        }, e.exports = t.default
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            i = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return n(e, [{
                    key: "typeHtmlChars",
                    value: function(e, t, n) {
                        if ("html" !== n.contentType) return t;
                        var i = e.substr(t).charAt(0);
                        if ("<" === i || "&" === i) {
                            var o;
                            for (o = "<" === i ? ">" : ";"; e.substr(t + 1).charAt(0) !== o && !(++t + 1 > e.length););
                            t++
                        }
                        return t
                    }
                }, {
                    key: "backSpaceHtmlChars",
                    value: function(e, t, n) {
                        if ("html" !== n.contentType) return t;
                        var i = e.substr(t).charAt(0);
                        if (">" === i || ";" === i) {
                            var o;
                            for (o = ">" === i ? "<" : "&"; e.substr(t - 1).charAt(0) !== o && !(--t < 0););
                            t--
                        }
                        return t
                    }
                }]), e
            }();
        t.default = i;
        var o = new i;
        t.htmlParser = o
    }])
}),
function(e, t, n) {
    "use strict";
    var i, o, s, r, a, u, l, c, d, f, h, p, m, g, v, y, b = "accessibleMegaMenu",
        x = {
            uuidPrefix: "accessible-megamenu",
            menuClass: "accessible-megamenu",
            topNavItemClass: "accessible-megamenu-top-nav-item",
            panelClass: "accessible-megamenu-panel",
            panelGroupClass: "accessible-megamenu-panel-group",
            hoverClass: "hover",
            focusClass: "focus",
            openClass: "open"
        },
        w = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            keyMap: {
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
                190: "."
            }
        };

    function C(t, n) {
        this.element = t, this.settings = e.extend({}, x, n), this._defaults = x, this._name = b, this.init()
    }

    function T(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    function k(t, n) {
        var i, o, s, r = t.nodeName.toLowerCase();
        return "area" === r ? (o = (i = t.parentNode).name, !(!t.href || !o || "map" !== i.nodeName.toLowerCase()) && (!!(s = e("img[usemap=#" + o + "]")[0]) && T(s))) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r && t.href || n) && T(t)
    }
    C.prototype = (g = 0, v = "", y = "function" == typeof t.hasOwnProperty && !!t.hasOwnProperty("ontouchstart"), i = function(t) {
        return e(t).closest(":data(plugin_" + b + ")").data("plugin_" + b)
    }, o = function(t) {
        t = e(t);
        var n = this.settings;
        t.attr("id") || t.attr("id", n.uuidPrefix + "-" + (new Date).getTime() + "-" + ++g)
    }, s = function(t, i) {
        var o, s = e(t.target),
            r = this,
            u = this.settings,
            l = this.menu,
            c = s.closest("." + u.topNavItemClass),
            d = s.hasClass(u.panelClass) ? s : s.closest("." + u.panelClass);
        if (m.call(this, i), e("html").off("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu, pointerup.outside-accessible-megamenu", a), l.find("[aria-expanded]." + this.settings.panelClass).off("DOMAttrModified.accessible-megamenu"), i)
            if ((c = l.find("." + u.topNavItemClass + " ." + u.openClass + ":first").closest("." + u.topNavItemClass)).is(t.relatedTarget) || c.has(t.relatedTarget).length > 0) 0 === c.length && l.find("[aria-expanded=true]").attr("aria-expanded", "false").removeClass(u.openClass).filter("." + u.panelClass).attr("aria-hidden", "true");
            else {
                if (("mouseout" === t.type || "focusout" === t.type) && c.has(n.activeElement).length > 0) return;
                c.find("[aria-expanded]").attr("aria-expanded", "false").removeClass(u.openClass).filter("." + u.panelClass).attr("aria-hidden", "true"), ("keydown" === t.type && t.keyCode === w.ESCAPE || "DOMAttrModified" === t.type) && (o = c.find(":tabbable:first"), setTimeout(function() {
                    l.find("[aria-expanded]." + r.settings.panelClass).off("DOMAttrModified.accessible-megamenu"), o.focus(), r.justFocused = !1
                }, 99))
            }
        else clearTimeout(r.focusTimeoutID), c.siblings().find("[aria-expanded]").attr("aria-expanded", "false").removeClass(u.openClass).filter("." + u.panelClass).attr("aria-hidden", "true"), c.find("[aria-expanded]").attr("aria-expanded", "true").addClass(u.openClass).filter("." + u.panelClass).attr("aria-hidden", "false"), jQuery(this.element).trigger("megamenu:open", c.find("[aria-expanded]")), "mouseover" === t.type && s.is(":tabbable") && 1 === c.length && 0 === d.length && l.has(n.activeElement).length > 0 && (s.focus(), r.justFocused = !1), m.call(r)
    }, r = function(t) {
        var n = e(t.target),
            i = n.closest("." + this.settings.topNavItemClass),
            o = n.closest("." + this.settings.panelClass);
        1 === i.length && 0 === o.length && 1 === i.find("." + this.settings.panelClass).length && (n.hasClass(this.settings.openClass) ? this.justFocused ? (t.preventDefault(), t.stopPropagation(), this.justFocused = !1) : y && (t.preventDefault(), t.stopPropagation(), s.call(this, t, n.hasClass(this.settings.openClass))) : (t.preventDefault(), t.stopPropagation(), s.call(this, t)))
    }, a = function(t) {
        0 === this.menu.has(e(t.target)).length && (t.preventDefault(), t.stopPropagation(), s.call(this, t, !0))
    }, u = function(t) {
        "aria-expanded" === t.originalEvent.attrName && "false" === t.originalEvent.newValue && e(t.target).hasClass(this.settings.openClass) && (t.preventDefault(), t.stopPropagation(), s.call(this, t, !0))
    }, l = function(t) {
        clearTimeout(this.focusTimeoutID), e(t.target).addClass(this.settings.focusClass).on("click.accessible-megamenu", e.proxy(r, this)), this.justFocused = !0, this.panels.filter("." + this.settings.openClass).length && s.call(this, t)
    }, c = function(n) {
        this.justFocused = !1;
        var i = this,
            o = e(n.target),
            a = o.closest("." + this.settings.topNavItemClass);
        o.removeClass(this.settings.focusClass).off("click.accessible-megamenu", r), t.cvox ? i.focusTimeoutID = setTimeout(function() {
            t.cvox.Api.getCurrentNode(function(e) {
                a.has(e).length ? clearTimeout(i.focusTimeoutID) : i.focusTimeoutID = setTimeout(function(e, t, n) {
                    s.call(e, t, n)
                }, 275, i, n, !0)
            })
        }, 25) : i.focusTimeoutID = setTimeout(function() {
            s.call(i, n, !0)
        }, 300)
    }, d = function(n) {
        var o, a, u, l, c, d, f = e(e(this).is(".hover:tabbable") ? this : n.target),
            h = f.is(n.target) ? this : i(f),
            p = h.settings,
            m = h.menu,
            g = h.topnavitems,
            y = f.closest("." + p.topNavItemClass),
            b = m.find(":tabbable"),
            x = f.hasClass(p.panelClass) ? f : f.closest("." + p.panelClass),
            C = x.find("." + p.panelGroupClass),
            T = f.closest("." + p.panelGroupClass),
            k = n.keyCode || n.which,
            S = !1,
            E = w.keyMap[n.keyCode] || "",
            $ = 1 === y.length && 0 === x.length;
        switch (f.is(".hover:tabbable") && e("html").off("keydown.accessible-megamenu"), k) {
            case w.ESCAPE:
                s.call(h, n, !0);
                break;
            case w.DOWN:
                n.preventDefault(), $ ? (s.call(h, n), S = 1 === y.find("." + p.panelClass + " :tabbable:first").focus().length) : S = 1 === b.filter(":gt(" + b.index(f) + "):first").focus().length, !S && t.opera && "[object Opera]" === opera.toString() && (n.ctrlKey || n.metaKey) && (u = (b = e(":tabbable")).index(f), S = 1 === e(":tabbable:gt(" + e(":tabbable").index(f) + "):first").focus().length);
                break;
            case w.UP:
                n.preventDefault(), $ && f.hasClass(p.openClass) ? (s.call(h, n, !0), (o = g.filter(":lt(" + g.index(y) + "):last")).children("." + p.panelClass).length && (S = 1 === o.children().attr("aria-expanded", "true").addClass(p.openClass).filter("." + p.panelClass).attr("aria-hidden", "false").find(":tabbable:last").focus(), jQuery(this.element).trigger("megamenu: open", o.children()))) : $ || (S = 1 === b.filter(":lt(" + b.index(f) + "):last").focus().length), !S && t.opera && "[object Opera]" === opera.toString() && (n.ctrlKey || n.metaKey) && (u = (b = e(":tabbable")).index(f), S = 1 === e(":tabbable:lt(" + e(":tabbable").index(f) + "):first").focus().length);
                break;
            case w.RIGHT:
                n.preventDefault(), $ ? S = 1 === g.filter(":gt(" + g.index(y) + "):first").find(":tabbable:first").focus().length : (C.length && T.length && (S = 1 === C.filter(":gt(" + C.index(T) + "):first").find(":tabbable:first").focus().length), S || (S = 1 === y.find(":tabbable:first").focus().length));
                break;
            case w.LEFT:
                n.preventDefault(), $ ? S = 1 === g.filter(":lt(" + g.index(y) + "):last").find(":tabbable:first").focus().length : (C.length && T.length && (S = 1 === C.filter(":lt(" + C.index(T) + "):last").find(":tabbable:first").focus().length), S || (S = 1 === y.find(":tabbable:first").focus().length));
                break;
            case w.TAB:
                u = b.index(f), n.shiftKey && $ && f.hasClass(p.openClass) ? (s(n, !0), (o = g.filter(":lt(" + g.index(y) + "):last")).children("." + p.panelClass).length && (S = o.children().attr("aria-expanded", "true").addClass(p.openClass).filter("." + p.panelClass).attr("aria-hidden", "false").find(":tabbable:last").focus(), jQuery(this.element).trigger("megamenu: open", o.children()))) : n.shiftKey && u > 0 ? S = 1 === b.filter(":lt(" + u + "):last").focus().length : !n.shiftKey && u < b.length - 1 ? S = 1 === b.filter(":gt(" + u + "):first").focus().length : t.opera && "[object Opera]" === opera.toString() && (u = (b = e(":tabbable")).index(f), S = n.shiftKey ? 1 === e(":tabbable:lt(" + e(":tabbable").index(f) + "):last").focus().length : 1 === e(":tabbable:gt(" + e(":tabbable").index(f) + "):first").focus().length), S && n.preventDefault();
                break;
            case w.SPACE:
                $ && (n.preventDefault(), r.call(h, n));
                break;
            default:
                if (clearTimeout(this.keydownTimeoutID), 0 === (v += E !== v ? E : "").length) return;
                for (this.keydownTimeoutID = setTimeout(function() {
                        v = ""
                    }, 1e3), b = $ && !f.hasClass(p.openClass) ? b.filter("." + p.topNavItemClass + " > :tabbable") : y.find(":tabbable"), n.shiftKey && (b = e(b.get().reverse())), u = 0; u < b.length; u++)
                    if ((l = b.eq(u)).is(f)) {
                        a = 1 === v.length ? u + 1 : u;
                        break
                    } for (d = new RegExp("^" + v.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), "i"), u = a; u < b.length; u++)
                    if (l = b.eq(u), c = e.trim(l.text()), d.test(c)) {
                        S = !0, l.focus();
                        break
                    } if (!S)
                    for (u = 0; u < a; u++)
                        if (l = b.eq(u), c = e.trim(l.text()), d.test(c)) {
                            l.focus();
                            break
                        }
        }
        h.justFocused = !1
    }, f = function(e) {
        this.mouseTimeoutID = setTimeout(function() {
            clearTimeout(this.focusTimeoutID)
        }, 1)
    }, h = function(t) {
        clearTimeout(this.mouseTimeoutID), e(t.target).addClass(this.settings.hoverClass), s.call(this, t), e(t.target).is(":tabbable") && e("html").on("keydown.accessible-megamenu", e.proxy(d, t.target))
    }, p = function(t) {
        var n = this;
        e(t.target).removeClass(n.settings.hoverClass), n.mouseTimeoutID = setTimeout(function() {
            s.call(n, t, !0)
        }, 300), e(t.target).is(":tabbable") && e("html").off("keydown.accessible-megamenu")
    }, m = function(t) {
        var n = this.menu;
        t ? (e("html").off("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu", a), n.find("[aria-expanded]." + this.settings.panelClass).off("DOMAttrModified.accessible-megamenu", u)) : (e("html").on("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu", e.proxy(a, this)), n.find("[aria-expanded=true]." + this.settings.panelClass).on("DOMAttrModified.accessible-megamenu", e.proxy(u, this)))
    }, {
        constructor: C,
        init: function() {
            var t = this,
                n = this.settings,
                i = (this.justFocused = !1, this.nav = e(this.element)),
                s = this.menu = i.children().first(),
                a = this.topnavitems = s.children();
            i.attr("role", "navigation"), s.addClass(n.menuClass), a.each(function(i, s) {
                var r, a;
                (s = e(s)).addClass(n.topNavItemClass), r = s.find(":tabbable:first"), a = s.children(":not(:tabbable):last"), o.call(t, r), a.length && (o.call(t, a), r.attr({
                    "aria-haspopup": !0,
                    "aria-owns": a.attr("id"),
                    "aria-controls": a.attr("id"),
                    "aria-expanded": !1
                }), a.attr({
                    role: "group",
                    "aria-expanded": !1,
                    "aria-hidden": !0
                }).addClass(n.panelClass).not("[aria-labelledby]").attr("aria-labelledby", r.attr("id")))
            }), this.panels = s.find("." + n.panelClass), s.on("focusin.accessible-megamenu", ":tabbable, :focusable, ." + n.panelClass, e.proxy(l, this)).on("focusout.accessible-megamenu", ":tabbable, :focusable, ." + n.panelClass, e.proxy(c, this)).on("keydown.accessible-megamenu", e.proxy(d, this)).on("mouseover.accessible-megamenu", e.proxy(h, this)).on("mouseout.accessible-megamenu", e.proxy(p, this)).on("mousedown.accessible-megamenu", e.proxy(f, this)), y && s.on("touchstart.accessible-megamenu", e.proxy(r, this)), s.find("hr").attr("role", "separator")
        },
        getDefaults: function() {
            return this._defaults
        },
        getOption: function(e) {
            return this.settings[e]
        },
        getAllOptions: function() {
            return this.settings
        },
        setOption: function(e, t, n) {
            this.settings[e] = t, n && this.init()
        }
    }), e.fn[b] = function(t) {
        return this.each(function() {
            e.data(this, "plugin_" + b) || e.data(this, "plugin_" + b, new C(this, t))
        })
    }, e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, i) {
            return !!e.data(t, i[3])
        },
        focusable: function(t) {
            return k(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex"),
                i = isNaN(n);
            return (i || n >= 0) && k(t, !i)
        }
    })
}(jQuery, window, document), window.CSSMatrix = window.WebKitCSSMatrix || window.MSCSSMatrix,
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
    }(this, function() {
        return function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var o = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "dist/", t(0)
        }([function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                s = (i(n(1)), n(5)),
                r = i(s),
                a = i(n(6)),
                u = i(n(7)),
                l = i(n(8)),
                c = i(n(9)),
                d = i(n(10)),
                f = i(n(13)),
                h = [],
                p = !1,
                m = document.all && !window.atob,
                g = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded"
                },
                v = function() {
                    return !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0] && (p = !0), p ? (h = (0, d.default)(h, g), (0, c.default)(h, g.once), h) : void 0
                },
                y = function() {
                    h = (0, f.default)(), v()
                };
            e.exports = {
                init: function(e) {
                    return g = o(g, e), h = (0, f.default)(),
                        function(e) {
                            return !0 === e || "mobile" === e && l.default.mobile() || "phone" === e && l.default.phone() || "tablet" === e && l.default.tablet() || "function" == typeof e && !0 === e()
                        }(g.disable) || m ? void h.forEach(function(e, t) {
                            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                        }) : (document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? v(!0) : "load" === g.startEvent ? window.addEventListener(g.startEvent, function() {
                            v(!0)
                        }) : document.addEventListener(g.startEvent, function() {
                            v(!0)
                        }), window.addEventListener("resize", (0, a.default)(v, 50, !0)), window.addEventListener("orientationchange", (0, a.default)(v, 50, !0)), window.addEventListener("scroll", (0, r.default)(function() {
                            (0, c.default)(h, g.once)
                        }, 99)), document.addEventListener("DOMNodeRemoved", function(e) {
                            var t = e.target;
                            t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, a.default)(y, 50, !0)
                        }), (0, u.default)("[data-aos]", y), h)
                },
                refresh: v,
                refreshHard: y
            }
        }, function(e, t) {}, , , , function(e, t, n) {
            "use strict";

            function i(e) {
                var t = void 0 === e ? "undefined" : o(e);
                return !!e && ("object" == t || "function" == t)
            }
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                s = n(6),
                r = "Expected a function";
            e.exports = function(e, t, n) {
                var o = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError(r);
                return i(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), s(e, t, {
                    leading: o,
                    maxWait: t,
                    trailing: a
                })
            }
        }, function(e, t) {
            "use strict";

            function n(e) {
                var t = void 0 === e ? "undefined" : s(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return "symbol" == (void 0 === e ? "undefined" : s(e)) || function(e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : s(e))
                }(e) && g.call(e) == c
            }

            function o(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return a;
                if (n(e)) {
                    var t = function(e) {
                        var t = n(e) ? g.call(e) : "";
                        return t == u || t == l
                    }(e.valueOf) ? e.valueOf() : e;
                    e = n(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(d, "");
                var o = h.test(e);
                return o || p.test(e) ? m(e.slice(2), o ? 2 : 8) : f.test(e) ? a : +e
            }
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                r = "Expected a function",
                a = NaN,
                u = "[object Function]",
                l = "[object GeneratorFunction]",
                c = "[object Symbol]",
                d = /^\s+|\s+$/g,
                f = /^[-+]0x[0-9a-f]+$/i,
                h = /^0b[01]+$/i,
                p = /^0o[0-7]+$/i,
                m = parseInt,
                g = Object.prototype.toString,
                v = Math.max,
                y = Math.min,
                b = Date.now;
            e.exports = function(e, t, i) {
                function s(t) {
                    var n = d,
                        i = f;
                    return d = f = void 0, x = t, p = e.apply(i, n)
                }

                function a(e) {
                    var n = e - g;
                    return !g || n >= t || 0 > n || C && e - x >= h
                }

                function u() {
                    var e = b();
                    return a(e) ? l(e) : void(m = setTimeout(u, function(e) {
                        var n = t - (e - g);
                        return C ? y(n, h - (e - x)) : n
                    }(e)))
                }

                function l(e) {
                    return clearTimeout(m), m = void 0, T && d ? s(e) : (d = f = void 0, p)
                }

                function c() {
                    var e = b(),
                        n = a(e);
                    if (d = arguments, f = this, g = e, n) {
                        if (void 0 === m) return function(e) {
                            return x = e, m = setTimeout(u, t), w ? s(e) : p
                        }(g);
                        if (C) return clearTimeout(m), m = setTimeout(u, t), s(g)
                    }
                    return void 0 === m && (m = setTimeout(u, t)), p
                }
                var d, f, h, p, m, g = 0,
                    x = 0,
                    w = !1,
                    C = !1,
                    T = !0;
                if ("function" != typeof e) throw new TypeError(r);
                return t = o(t) || 0, n(i) && (w = !!i.leading, h = (C = "maxWait" in i) ? v(o(i.maxWait) || 0, t) : h, T = "trailing" in i ? !!i.trailing : T), c.cancel = function() {
                    void 0 !== m && clearTimeout(m), g = x = 0, d = f = m = void 0
                }, c.flush = function() {
                    return void 0 === m ? p : l(b())
                }, c
            }
        }, function(e, t) {
            "use strict";

            function n() {
                for (var e, t, n = 0, o = s.length; o > n; n++) {
                    e = s[n];
                    for (var r, a = 0, u = (t = i.querySelectorAll(e.selector)).length; u > a; a++)(r = t[a]).ready || (r.ready = !0, e.fn.call(r, r))
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = window.document,
                o = window.MutationObserver || window.WebKitMutationObserver,
                s = [],
                r = void 0;
            t.default = function(e, t) {
                s.push({
                    selector: e,
                    fn: t
                }), !r && o && (r = new o(n)).observe(i.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                }), n()
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                i = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    return n(e, [{
                        key: "phone",
                        value: function() {
                            var e, t = !1;
                            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var e, t = !1;
                            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), e
                }();
            t.default = new i
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e, t) {
                var n = window.pageYOffset,
                    i = window.innerHeight;
                e.forEach(function(e, o) {
                    ! function(e, t, n) {
                        var i = e.node.getAttribute("data-aos-once");
                        t > e.position ? e.node.classList.add("aos-animate") : void 0 !== i && ("false" === i || !n && "true" !== i) && e.node.classList.remove("aos-animate")
                    }(e, i + n, t)
                })
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(11));
            t.default = function(e, t) {
                return e.forEach(function(e, n) {
                    e.node.classList.add("aos-init"), e.position = (0, i.default)(e.node, t.offset)
                }), e
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(12));
            t.default = function(e, t) {
                var n = 0,
                    o = 0,
                    s = window.innerHeight,
                    r = {
                        offset: e.getAttribute("data-aos-offset"),
                        anchor: e.getAttribute("data-aos-anchor"),
                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                    };
                switch (r.offset && !isNaN(r.offset) && (o = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), n = (0, i.default)(e).top, r.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n += e.offsetHeight;
                        break;
                    case "top-center":
                        n += s / 2;
                        break;
                    case "bottom-center":
                        n += s / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        n += s / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        n += s;
                        break;
                    case "bottom-top":
                        n += e.offsetHeight + s;
                        break;
                    case "center-top":
                        n += e.offsetHeight / 2 + s
                }
                return r.anchorPlacement || r.offset || isNaN(t) || (o = t), n + o
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop + new CSSMatrix(window.getComputedStyle(e).transform).m42 - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: n,
                    left: t
                }
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                e = e || document.querySelectorAll("[data-aos]");
                var t = [];
                return [].forEach.call(e, function(e, n) {
                    t.push({
                        node: e
                    })
                }), t
            }
        }])
    }), $(function() {
        function e() {
            var e = $(".animation-element"),
                t = $(window).scrollTop();
            e.each(function() {
                var e = 0;
                if (null != $(this).attr("data-delay")) {
                    e = $(this).attr("data-delay");
                    $(this).css("transition-delay", e + "s"), $(this).removeAttr("data-delay")
                }
                var n = $(this).offset();
                t - n.top > -800 && $(this).addClass("animated")
            })
        }

        function t() {
            $("[data-parallax-bg]").each(function() {
                var e = $(this).find(".parallax-bg"),
                    t = $(this).attr("data-parallax-speed");
                "vertical" == $(this).attr("data-parallax-bg") ? $(this).find(".parallax-bg").css({
                    height: $(this).outerHeight() + 200 * t + "px"
                }) : $(this).find(".parallax-bg").css({
                    width: $(this).outerWidth() + 200 * t + "px"
                }), e.addClass("vertical" == $(this).attr("data-parallax-bg") ? "" : "horizontal")
            })
        }

        function n() {
            var e = $(document).scrollTop(),
                t = $(window).height();

            function n(e, t, n, i, o, s) {
                if (t <= i + o && t + n + s >= i) {
                    var r = 100 * parseFloat(e.attr("data-parallax-speed")),
                        a = e.find(".parallax-bg"),
                        u = -2 * ((-t + i + o) / (n + o)) * r;
                    "vertical" == e.attr("data-parallax-bg") ? a.css("transform", "translate3d(0, " + u + "px, 0)") : a.css("transform", "translate3d(" + u + "px, 0, 0)")
                }
            }
            $("[data-parallax-bg]").each(function() {
                var i = $(this).offset().top,
                    o = $(this).outerHeight(),
                    s = $(this);
                0 != $(this).find(".parallax").length ? n(s, i, o, e, t, 0) : n(s, i, o, e, t, 1e3)
            })
        }

        function i() {
            $("[data-counter]").each(function() {
                var e = $(this);
                if ($(document).scrollTop() + $(window).height() > e.offset().top + e.height()) {
                    var t = parseInt(e.attr("data-counter").replace(/\s/g, ""));
                    e.removeAttr("data-counter");
                    for (var n = 0; n <= 20; n++) ! function(n) {
                        setTimeout(function() {
                            var i = Math.round(t / 20 * n);
                            e.find(".count").html(i)
                        }, 50 * n)
                    }(n)
                }
            })
        }

        function o(e, t) {
            var n = $(window).scrollTop(),
                i = $(window).height();
            n + i > t - i && n + i < t - i + 300 && (e.find(".clb-slider-outer-stage").css({
                height: "inherit"
            }), e.trigger("executeAutoHeight"))
        }
        $(".scroll-top").click(function() {
        }), $(window).scroll(function() {
            
        });
        var s = $(".share-bar");

        function r() {
            var e, t = $(".clb__dark_section, .clb__light_section");
            if (t.length) {
                var n = $(".clb-scroll-top"),
                    i = $(".clb-social"),
                    o = $(".search-global.fixed .ion");
                $(window).on("scroll", function() {
                    ! function(s) {
                        var r = s.scrollTop() + s.outerHeight() / 2;
                        t.each(function() {
                            var t = $(this).offset().top,
                                s = $(this);
                            if (s.hasClass("clb__dark_section") ? e = "light-typo" : s.hasClass("clb__light_section") && (e = "dark-typo"), t + s.outerHeight() > r && r > t) return n.addClass(e), i.addClass(e), o.addClass(e), !1;
                            n.removeClass(e), i.removeClass(e), o.removeClass(e)
                        })
                    }($(this))
                })
            }
        }

        function a() {
            $(".clb-hamburger").on("click", function(e) {
                e.preventDefault(), $(".clb-hamburger-nav").addClass("visible").find("#secondary-menu > li").each(function(e) {
                    var t = $(this);
                    setTimeout(function() {
                        t.addClass("showed")
                    }, 150 + 40 * e)
                })
            })
        }

        function u(e) {
            $(e).each(function() {
                $(this).addClass("visible"), $(this).find(".btn-loading-disabled").addClass("btn-loading")
            })
        }

        function l(e) {
            setTimeout(function() {
                e.removeClass("visible"), e.find(".clb-popup-holder").empty(), e.find(".clb-popup-holder").removeClass().addClass("clb-popup-holder")
            }, 200)
        }

        function c() {
            "undefined" != typeof AOS && setTimeout(function() {
                AOS.init()
            }, 600)
        }

        function d() {
            var e = document.querySelectorAll(".parallax-holder");
            $(e).each(function(e) {
                var t = $(this).find(".parallax")[0];
                let n = $(this)[0];
                var i = {
                    _x: 0,
                    _y: 0,
                    x: 0,
                    y: 0,
                    item: "",
                    updatePosition: function(e) {
                        var t = e || window.event;
                        ! function(e) {
                            if (e.parents(".clb-slider-item").hasClass("clb-slider-item")) return !0
                        }($(n)) ? (this.x = t.pageX - this._x, this.y = -1 * (t.pageY - this._y)) : (this.x = t.pageX - (Math.floor($(n).width() / 2) + $(n).offset().left), this.y = -1 * (t.pageY - (Math.floor($(n).height() / 2) + $(n).offset().top)))
                    },
                    setOrigin: function(e) {
                        this._x = Math.floor($(e).width() / 2) + $(n).offset().left, this._y = Math.floor($(e).height() / 2) + $(n).offset().top
                    },
                    show: function() {
                        return "(" + this.x + ", " + this.y + ")"
                    }
                };
                i.setOrigin(n);
                var o = 0,
                    s = function(e) {
                        i.updatePosition(e), r((i.y / t.offsetHeight / 2).toFixed(2), (i.x / t.offsetWidth / 2).toFixed(2))
                    },
                    r = function(e, n) {
                        var i = "rotateX(" + e + "deg) rotateY(" + n + "deg)";
                        t.style.transform = i, t.style.webkitTransform = i, t.style.mozTranform = i, t.style.msTransform = i, t.style.oTransform = i
                    };
                n.onmousemove = function(e) {
                    o++ % 10 == 0 && s(e)
                }, n.onmouseleave = function() {
                    t.style.transform = "", t.style.webkitTransform = "", t.style.mozTranform = "", t.style.msTransform = "", t.style.oTransform = ""
                }, n.onmouseenter = function(e) {
                    s(e)
                }
            })
        }
        s.find(".title").click(function(e) {
                s.toggleClass("active")
            }), $(document).click(function(e) {
                0 == $(e.target).closest(s).length && s.removeClass("active")
            }), setTimeout(function() {
                i()
            }, 2e3),
            function() {
                var e = 0;
                megaMenu = $("#masthead #mega-menu-wrap"), $(".clb-hamburger").on("click", function() {
                    u(".main-nav .mbl-overlay")
                }), $('.clb-close, .mbl-overlay-bg, .mobile-header #site-navigation a[href^="#"]').on("click", function() {
                    $("#mega-menu-sub-" + e).removeClass("active"), $("#mega-menu-sub-" + e).removeAttr("id"), e--, $("#site-navigation").removeClass("active"), $(".close-menu").css("right", "-100%"), $(".clb-hamburger").removeClass("hidden"), $("#masthead .search").removeClass("visible"), $(window).width() <= 1024 && l($(".main-nav .mbl-overlay"))
                }), $(window).width() <= 1024 && $(document).on("keydown", function(e) {
                    27 == e.keyCode && l($(".main-nav .mbl-overlay"))
                }), $("a.menu-link").on("click", function() {
                    "#" == $(this).attr("href")[0] && (e = 0, $('[id^="mega-menu-sub-"]').removeClass("active"), $('[id^="mega-menu-sub-"]').removeAttr("id"), $("#site-navigation").removeClass("active"), $(".close-menu").css("right", "-100%"), $(".clb-hamburger").removeClass("hidden"), $("#masthead .search").removeClass("visible"))
                }), $(".has-submenu > a").on("click touchend", function(t) {
                    if ($(window).width() <= 1024) {
                        var r = $(this).parent(),
                            a = r.find(".sub-nav > ul.sub-menu, > .sub-sub-nav > ul.sub-sub-menu, .submenu"),
                            u = r.find(">.sub-nav >.sub-menu, >.sub-sub-nav >.sub-sub-menu");
                        if (r.hasClass("menu-item-depth-0") && !r.hasClass("active-main-item")) $(".sub-nav >.sub-menu, .sub-sub-nav >.sub-sub-menu").removeAttr("style"), $(".active-main-item").find(".sub-menu.active, .sub-sub-menu.active").removeClass("active"), $(".active-main-item").removeClass("active-main-item active"), r.addClass("active-main-item");
                        else if (r.hasClass("active-main-item")) return i(), !1;
                        if (e > 0 && o(), $(this).hasClass("active") || r.hasClass("active")) return s(r), n(), r.hasClass("menu-item-depth-" + e) || e--, $(this).removeClass("active"), $(".sub-menu").removeAttr("style"), !1;
                        r.hasClass("menu-item-depth-" + e) || e++, r.hasClass("sub-nav-item") && ($(".sub-nav >.sub-menu, .sub-sub-nav >.sub-sub-menu").removeAttr("style"), n());
                        var l = u.find("> .mega-menu-item");
                        return u.css("height", function(e) {
                            var t = 0;
                            return e.each(function() {
                                var e = $(this).outerHeight();
                                t += e
                            }), t
                        }(l) + "px"), r.addClass("active"), a.addClass("active"), $(".menu-link").removeClass("active"), $(this).addClass("active"), !1
                    }
                    if ($(window).width() <= 1024) {
                        var c = $(this);
                        return $(".sub-sub-nav, .menu-link").removeClass("open active"), $(this).addClass("active"), $(this).siblings(".sub-sub-nav").addClass("open"), $(document).on("mouseup touchstart", function(e) {
                            0 === c.has(e.target).length && $(".sub-sub-nav, .menu-link").removeClass("open active")
                        }), !1
                    }
                    window.location.href = $(this).attr("href")
                }), $("#masthead nav > .mobile-wpml-select").length && $("#masthead nav > .mobile-wpml-select").insertAfter($("#mega-menu-wrap > ul > li").last()), $("#mega-menu-wrap").length && ($("#mega-menu-wrap").accessibleMegaMenu({
                    uuidPrefix: "accessible-megamenu",
                    menuClass: "menu",
                    topNavItemClass: "nav-item",
                    panelClass: "sub-nav",
                    panelGroupClass: "sub-sub-menu",
                    hoverClass: "hover",
                    focusClass: "focus",
                    openClass: "visible"
                }).on("megamenu:open", function(e, t) {
                    $(this);
                    var n, i = $(t);
                    if ($(window).width() <= 768) return !1;
                    if (i.is(".main-menu-link.visible") && i.siblings("div.sub-nav").length > 0) n = i.siblings("div.sub-nav");
                    else {
                        if (!i.is("div.sub-nav")) return !0;
                        i = (n = i).siblings(".main-menu-link")
                    }
                    var o = n.find("ul.sub-menu-wide");
                    o.each(function() {
                        var e = $(this),
                            t = 1;
                        e.find("> .sub-nav-item").each(function() {
                            t += $(this).outerWidth()
                        }), e.innerWidth(t)
                    });
                    var s = 0;
                    if ($("#masthead.header-2").length) {
                        var r = $("#masthead.header-2 .header-wrap");
                        s = $(window).width() - r.outerWidth() - r.offset().left
                    }
                    var a = $(window).width(),
                        u = n.find("> ul").width(),
                        l = 0;
                    n.css({
                        "max-width": a
                    }), u > a && (n.addClass("sub-nav-onecol"), u = n.width());
                    var c = i.outerWidth(),
                        d = i.offset().left,
                        f = a - i.offset().left - c;
                    d < 0 && (l = -(d - u / 2 + c / 2) - s), f < u - c && (l = -(u - c - f) - s), o.outerWidth() >= a && (n.css("left", ""), o.innerWidth(a), l = -n.offset().left), n.css("left", l)
                }), $("#mega-menu-wrap .sub-sub-nav").each(function() {
                    if ($(this).offset().left + $(this).outerWidth() > $(window).width()) {
                        $(this).addClass("menu-left");
                        var e = $(this).find(".sub-sub-menu").outerWidth() + 5;
                        $(this).css("left", -e)
                    }
                })), $("a.cart .icon").on("click", function() {
                    $(".submenu_cart").toggleClass("visible")
                }), $("#close_cart").on("click", function() {
                    $(".submenu_cart").removeClass("visible")
                }), $(".clb-hamburger").on("click", function() {
                    a()
                }), $(".close").on("click", function() {
                    $(".clb-hamburger-nav").removeClass("visible").find(".menu > li").each(function(e) {
                        $(this).removeClass("showed active")
                    })
                });
                var t = $(".clb-hamburger-nav-holder");
                t.length && (e = 0, $(document).on("mouseup touchstart", function(e) {
                    0 === t.has(e.target).length && ($(".sub-nav > ul > li, .sub-nav .mega-menu-item > .sub-sub-nav > .sub-sub-menu > li").removeClass("showed active showed-onclick"), $(".nav-item").removeClass("active"), $(".sub-nav, .sub-sub-nav").removeClass("open-onclick"))
                }), t.accessibleMegaMenu({
                    uuidPrefix: "accessible-megamenu",
                    menuClass: "menu",
                    topNavItemClass: "nav-item",
                    panelClass: "sub-nav",
                    panelGroupClass: "sub-sub-menu",
                    hoverClass: "hover",
                    focusClass: "focus",
                    openClass: "visible"
                }).on("megamenu:open", function(n, r) {
                    $(this).find(".sub-nav:not(.visible) > ul > li, .sub-nav .mega-menu-item:not(:hover) > .sub-sub-nav > .sub-sub-menu > li").removeClass("showed active"), !$(window).width() >= 1024 && $(this).find(".sub-nav.visible > ul > li, .sub-nav .mega-menu-item:hover > .sub-sub-nav > .sub-sub-menu > li").each(function(e) {
                        var t = $(this);
                        setTimeout(function() {
                            t.parent().parent().parent().is(":hover") && t.addClass("showed")
                        }, 40 * e)
                    }), t.parents(".clb-hamburger-nav").hasClass("centered") && !$(window).width() >= 1024 && $(".has-submenu > a .has-submenu-icon").on("click", function() {
                        var t = $(this).parent().parent();
                        return t.hasClass("menu-item-depth-0") && !t.hasClass("active") && (i(), t.addClass("active-main-item")), t.hasClass("menu-item-depth-" + e) || e++, t.hasClass("menu-item-depth-" + e) && !t.hasClass("active") && o(), s(t), t.addClass("active"), t.find("> .sub-nav, > .sub-sub-nav").addClass("open-onclick"), $(".open-onclick").find("> .sub-menu > .mega-menu-item, > .sub-sub-menu > .mega-menu-item ").addClass("showed-onclick"), !1
                    }), $(window).width() <= 1024 && $(".has-submenu > a").on("click touchend", function(t) {
                        var n = $(this).parent();
                        n.hasClass("menu-item-depth-0") && !n.hasClass("active") && i(), n.hasClass("menu-item-depth-" + e) || e++, n.hasClass("menu-item-depth-" + e) && !n.hasClass("active") && o(), n.addClass("active"), $(this).hasClass("showed") || ($(".sub-sub-nav .sub-sub-menu .sub-nav-item").removeClass("showed"), $(".sub-sub-nav .sub-sub-menu").removeClass("visible")), n.addClass("active"), n.find("> .sub-nav > .sub-menu > .sub-nav-item, > .sub-sub-nav > .sub-sub-menu > .sub-nav-item").addClass("showed"), n.find("> .sub-sub-nav > .sub-sub-menu").addClass("visible")
                    })
                }), t.parents(".clb-hamburger-nav").hasClass("centered") && $(window).width() >= 1024 && $(".clb-hamburger-nav-holder .sub-nav").on("mouseleave", function() {
                    $(this).find("li").removeClass("showed")
                }));

                function n() {
                    setTimeout(function() {
                        var e = $(".menu-depth-1.active").height();
                        $(".sub-menu.active").css("height", e + "px")
                    }, 500)
                }

                function i() {
                    e = 0, $(".sub-nav > ul.sub-menu, .sub-sub-nav > ul.sub-sub-menu, .submenu, .sub-nav-item").removeClass("active showed"), $(".nav-item").removeClass("active active-main-item"), $(".sub-nav, .sub-sub-nav").removeClass("open-onclick"), $(".sub-nav >.sub-menu, .sub-sub-nav >.sub-sub-menu").removeAttr("style")
                }

                function o(t) {
                    var n = $(".menu-item-depth-" + e);
                    n.removeClass("active"), n.find(".sub-nav > ul.sub-menu, .sub-sub-nav > ul.sub-sub-menu, .submenu, .sub-nav-item").removeClass("active showed-onclick"), n.find(".sub-nav, .sub-sub-nav").removeClass("open-onclick "), n.find(".sub-nav >.sub-menu, .sub-sub-nav >.sub-sub-menu").removeAttr("style")
                }

                function s(e) {
                    e.hasClass("active-main-item") && i(), e.find(".sub-menu, .sub-sub-menu").removeAttr("style")
                }
            }(), $(".sub-menu-wide").each(function() {
                var e = $(this).find("> .mega-menu-item"),
                    t = 0;
                $(window).width() > 1300 ? e.each(function() {
                    t += $(this).width()
                }) : t = $(window).width(), $(this).css("width", t + 20 + "px");
                var n = $(this).offset().left,
                    i = $(window).width() - t - n;
                $(this).parents(".sub-nav").css({
                    left: i + "px"
                })
            }), $('[data-dynamic-text="true"]').each(function() {
                var e = $(this).find(".dynamic")[0],
                    t = JSON.parse($(this).attr("data-dynamic-text-options"));
                new Typed(e, t)
            }), $(window).on("load", function() {
                var s, f, h, p, m, g;
                e(), t(), n(), $(".carousel").each(function() {
                        var e = $(this),
                            t = e.parents(".showcase-container-for-nav");
                        e.clbSlider({
                            gap: 40,
                            loop: !0,
                            drag: !0,
                            navBtn: !1,
                            slidesCount: !0,
                            autoHeight: !0
                        });
                        var n = e.offset().top;
                        $(window).on("scroll", function() {
                            o(e, n)
                        }), t.find(".clb-slider-nav-btn .btn-round").on("click", function() {
                            $(this).hasClass("next-btn") ? e.trigger("next-slide") : e.trigger("prev-slide")
                        })
                    }), $(".showcase-slider").each(function() {
                        var e = $(this),
                            t = $(this).find(".slider"),
                            n = $(this).find(".showcase-slider-filter");
                        t.clbSlider({
                            items: 2,
                            gap: 40,
                            loop: !0,
                            drag: !0,
                            navBtn: !1,
                            slidesCount: !0,
                            autoHeight: !0,
                            responsive: {
                                768: {
                                    items: 1
                                }
                            }
                        }), e.find(".demo-item").on("click", function(e) {
                            e.preventDefault()
                        });
                        var i = e.offset().top;
                        $(window).on("scroll", function() {
                            o(t, i)
                        }), n.find("a").on("click", function(e) {
                            e.preventDefault(), n.find(".active").removeClass("active"), $(this).addClass("active");
                            var i = $(this).data();
                            t.trigger("to-slide", i.slideNumber)
                        })
                    }), s = $("[data-isotope-grid]"), f = $(".demo-filter"), h = f.offset().top + f.outerHeight(), p = $(".demo-section").offset().top + $(".demo-section").height() - $(window).height(), s.isotope({
                        percentPosition: !0
                    }), f.find("a").on("click", function() {
                        return f.find(".active").removeClass("active"), $(this).addClass("active"), s.isotope && s.isotope({
                            filter: $(this).attr("data-filter")
                        }), setTimeout(function() {
                            "undefined" != typeof AOS && AOS.refresh(), h = f.offset().top + f.outerHeight(), p = $(".demo-section").offset().top + $(".demo-section").height() - $(window).height()
                        }, 600), setTimeout(function() {
                            d()
                        }, 900), !1
                    }), $(window).on("scroll", function(e) {
                        var t = $(window).scrollTop();
                        t > h && t < p ? (f.addClass("fixed"), setTimeout(function() {
                            f.addClass("showed")
                        }, 300)) : t < h ? (f.removeClass("showed"), f.removeClass("fixed")) : t > p && (f.css({
                            transform: "translateY(100%)"
                        }), setTimeout(function() {
                            f.removeClass("showed"), f.removeClass("fixed"), f.removeAttr("style")
                        }, 300))
                    }), window.location.hash && f.find('a[href="' + window.location.hash + '"]').trigger("click"), r(), m = $("body").outerWidth(), $("body").offset().left, g = function(e, t, n, i) {
                        var o = e.find(".stretch-content");
                        (o = n ? o.last() : o.eq(0)).css({
                            position: "",
                            left: "",
                            width: ""
                        }), o.length && (n ? o.css("min-width", m - o.offset().left + "px") : o.css({
                            position: "relative",
                            left: -o.offset().left + "px",
                            "min-width": o.offset().left + o.outerWidth() + "px"
                        }), $(window).width() <= 768 && o.css({
                            width: "",
                            left: ""
                        }), o.addClass("stretched-content"))
                    }, $(".clb-column-padding-left").each(function() {
                        align($(this), $(this).hasClass("split-box"), $(this).hasClass("parallax"), !1)
                    }), $(".clb-column-padding-right").each(function() {
                        align($(this), $(this).hasClass("split-box"), $(this).hasClass("parallax"), !0)
                    }), $(".clb-stretch-column-left").each(function() {
                        g($(this), $(this).hasClass("split-box"), !1)
                    }), $(".clb-stretch-column-right").each(function() {
                        g($(this), $(this).hasClass("split-box"), !0)
                    }),
                    function() {
                        if ($("body").hasClass("custom-cursor")) {
                            const e = document.querySelector(".circle-cursor--inner"),
                                t = document.querySelector(".circle-cursor--outer");
                            let n, i = 0,
                                o = !1;
                            window.onmousemove = function(s) {
                                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
                            }, $("body").on("mouseenter", "a, .cursor-as-pointer", function() {
                                e.classList.add("cursor-link-hover"), t.classList.add("cursor-link-hover")
                            }), $("body").on("mouseleave", "a, .cursor-as-pointer", function() {
                                $(this).is("a") && $(this).closest(".cursor-as-pointer").length || (e.classList.remove("cursor-link-hover"), t.classList.remove("cursor-link-hover"))
                            }), $("body").on("mouseenter", "[data-cursor-class]", function() {
                                const n = $(this).attr("data-cursor-class"); - 1 != n.indexOf("dark-color") && (e.classList.add("dark-color"), t.classList.add("dark-color")), -1 != n.indexOf("cursor-link") && (e.classList.add("cursor-link"), t.classList.add("cursor-link"))
                            }), $("body").on("mouseleave", "[data-cursor-class]", function() {
                                const n = $(this).attr("data-cursor-class"); - 1 != n.indexOf("dark-color") && (e.classList.remove("dark-color"), t.classList.remove("dark-color")), -1 != n.indexOf("cursor-link") && (e.classList.remove("cursor-link"), t.classList.remove("cursor-link"))
                            }), $("body").on("mouseenter", ".cursor-magnet, .btn-round", function() {
                                const e = $(this),
                                    n = window.pageYOffset || document.documentElement.scrollTop;
                                t.style.transition = "all .2s ease-out", t.style.transform = "translate(" + e.offset().left + "px, " + (e.offset().top - n) + "px)", t.style.width = e.width() + "px", t.style.height = e.height() + "px", t.style.marginLeft = 0, t.style.marginTop = 0, o = !0
                            }), $("body").on("mouseleave", ".cursor-magnet, .btn-round", function() {
                                t.style.transition = null, t.style.width = null, t.style.height = null, t.style.marginLeft = null, t.style.marginTop = null, o = !1
                            }), $("body").on("mouseenter", "iframe", function() {
                                t.style.visibility = "hidden", e.style.visibility = "hidden"
                            }), $("body").on("mouseleave", "iframe", function() {
                                t.style.visibility = "visible", e.style.visibility = "visible"
                            }), e.style.visibility = "visible", t.style.visibility = "visible"
                        }
                    }(), a(), c(), d(), $(window).width() <= 768 ? ($("#masthead").addClass("mobile-header"), $("body").addClass("is-mobile-menu"), setTimeout(function() {
                        $(".main-nav").addClass("unhidden")
                    }, 300)) : ($("#masthead").removeClass("mobile-header"), $("body").removeClass("is-mobile-menu"), $(".main-nav").addClass("visible")), $(window).scroll(function() {
                        i(), e(), t(), n(),
                            function() {
                                const e = $("body").height();
                                let t = ($(window).innerHeight() + $(window).scrollTop()) / e * 100;
                                t > 100 && (t = 100), $(".clb-scroll-top:not(.clb-slider-scroll-top) .scroll-track").css("width", t + "%")
                            }(), $(window).scrollTop() > 250 ? $("#clb-scroll-top").addClass("visible") : $("#clb-scroll-top").removeClass("visible")
                    }), $("body").on("click keydown", ".clb-popup .clb-close, .clb-popup .subscribe-nothanks-btn", function(e) {
                        e.preventDefault(e), l($(this).closest(".clb-popup"))
                    }), $(document).on("keydown", function(e) {
                        var t = $(".clb-popup");
                        27 == e.keyCode && l(t)
                    }), $("#clb-scroll-top").on("click", function() {
                    }), $(".search-global").on("click", function() {
                        u($(".clb-search-popup"))
                    })
            }), $(window).on("resize", function() {
                $(".sub-menu-wide").removeAttr("style"), c()
            }), $(window).width() > 200 && setTimeout(function() {
                var e = 0,
                    t = 0,
                    n = setInterval(function() {
                        $(".loader .loader-counter").html(t + "%"), $(".loader").css("width", "100%"), t++, 101 == ++e && (clearInterval(n), $(".loader").fadeOut(300), $(".main-section, .site-header, .clb-social, .purchase-theme").addClass("visible"), $(".tablet, .laptop, .phone").addClass("active"))
                    }, 31)
            })
    });