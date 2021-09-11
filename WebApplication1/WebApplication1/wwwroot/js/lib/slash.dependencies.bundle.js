/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
    "use strict"; var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {}, k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {}; function p(a, b) { b = b || d; var c = b.createElement("script"); c.text = a, b.head.appendChild(c).parentNode.removeChild(c) } var q = "3.2.1", r = function (a, b) { return new r.fn.init(a, b) }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function (a, b) { return b.toUpperCase() }; r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function () { return f.call(this) }, get: function (a) { return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a] }, pushStack: function (a) { var b = r.merge(this.constructor(), a); return b.prevObject = this, b }, each: function (a) { return r.each(this, a) }, map: function (a) { return this.pushStack(r.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(f.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (a < 0 ? b : 0); return this.pushStack(c >= 0 && c < b ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d)); return g }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === r.type(a) }, isWindow: function (a) { return null != a && a === a.window }, isNumeric: function (a) { var b = r.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }, isPlainObject: function (a) { var b, c; return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n)) }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a }, globalEval: function (a) { p(a) }, camelCase: function (a) { return a.replace(t, "ms-").replace(u, v) }, each: function (a, b) { var c, d = 0; if (w(a)) { for (c = a.length; d < c; d++)if (b.call(a[d], d, a[d]) === !1) break } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function (a) { return null == a ? "" : (a + "").replace(s, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c }, inArray: function (a, b, c) { return null == b ? -1 : i.call(b, a, c) }, merge: function (a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++)a[e++] = b[d]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, e, f = 0, h = []; if (w(a)) for (d = a.length; f < d; f++)e = b(a[f], f, c), null != e && h.push(e); else for (f in a) e = b(a[f], f, c), null != e && h.push(e); return g.apply([], h) }, guid: 1, proxy: function (a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function () { return a.apply(b || this, d.concat(f.call(arguments))) }, e.guid = a.guid = a.guid || r.guid++ , e }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) { j["[object " + b + "]"] = b.toLowerCase() }); function w(a) { var b = !!a && "length" in a && a.length, c = r.type(a); return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a) } var x = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) { return a === b && (l = !0), 0 }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function (a, b) { for (var c = 0, d = a.length; c < d; c++)if (a[c] === b) return c; return -1 }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function (a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a }, da = function () { m() }, ea = ta(function (a) { return a.disabled === !0 && ("form" in a || "label" in a) }, { dir: "parentNode", next: "legend" }); try { G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType } catch (fa) { G = { apply: D.length ? function (a, b) { F.apply(a, H.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function ga(a, b, d, e) { var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== w && (l = Z.exec(a))) if (f = l[1]) { if (9 === w) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== w) s = b, r = a; else if ("object" !== b.nodeName.toLowerCase()) { (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length; while (h--) o[h] = "#" + k + " " + sa(o[h]); r = o.join(","), s = $.test(a) && qa(b.parentNode) || b } if (r) try { return G.apply(d, s.querySelectorAll(r)), d } catch (x) { } finally { k === u && b.removeAttribute("id") } } } return i(a.replace(P, "$1"), b, d, e) } function ha() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function ia(a) { return a[u] = !0, a } function ja(a) { var b = n.createElement("fieldset"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function ka(a, b) { var c = a.split("|"), e = c.length; while (e--) d.attrHandle[c[e]] = b } function la(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex; if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function ma(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function na(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function oa(a) { return function (b) { return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a } } function pa(a) { return ia(function (b) { return b = +b, ia(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function qa(a) { return a && "undefined" != typeof a.getElementsByTagName && a } c = ga.support = {}, f = ga.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = ga.setDocument = function (a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ja(function (a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.filter.ID = function (a) { var b = a.replace(_, aa); return function (a) { return a.getAttribute("id") === b } }, d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }) : (d.filter.ID = function (a) { var b = a.replace(_, aa); return function (a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }, d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) { var c, d, e, f = b.getElementById(a); if (f) { if (c = f.getAttributeNode("id"), c && c.value === a) return [f]; e = b.getElementsByName(a), d = 0; while (f = e[d++]) if (c = f.getAttributeNode("id"), c && c.value === a) return [f] } return [] } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a) }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ja(function (a) { a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var b = n.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) { c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function (a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return l = !0, 0; var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0; if (e === f) return la(a, b); c = a; while (c = c.parentNode) g.unshift(c); c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, ga.matches = function (a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return ga(b, n, null, [a]).length > 0 }, ga.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, ga.escape = function (a) { return (a + "").replace(ba, ca) }, ga.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ga.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = ga.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(_, aa).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = ga.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break; return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: ia(function (a) { var b = [], c = [], d = h(a.replace(P, "$1")); return d[u] ? ia(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ia(function (a) { return function (b) { return ga(a, b).length > 0 } }), contains: ia(function (a) { return a = a.replace(_, aa), function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ia(function (a) { return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) { var c; do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === o }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: oa(!1), disabled: oa(!0), checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return X.test(a.nodeName) }, input: function (a) { return W.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: pa(function () { return [0] }), last: pa(function (a, b) { return [b - 1] }), eq: pa(function (a, b, c) { return [c < 0 ? c + b : c] }), even: pa(function (a, b) { for (var c = 0; c < b; c += 2)a.push(c); return a }), odd: pa(function (a, b) { for (var c = 1; c < b; c += 2)a.push(c); return a }), lt: pa(function (a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;)a.push(d); return a }), gt: pa(function (a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;)a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b); function ra() { } ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? ga.error(a) : z(a, i).slice(0) }; function sa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++)d += a[b].value; return d } function ta(a, b, c) { var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = x++; return b.first ? function (b, c, e) { while (b = b[d]) if (1 === b.nodeType || g) return a(b, c, e); return !1 } : function (b, c, i) { var j, k, l, m = [w, h]; if (i) { while (b = b[d]) if ((1 === b.nodeType || g) && a(b, c, i)) return !0 } else while (b = b[d]) if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else { if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 } return !1 } } function ua(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function va(a, b, c) { for (var d = 0, e = b.length; d < e; d++)ga(a, b[d], c); return c } function wa(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g } function xa(a, b, c, d, e, f) { return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = wa(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r) }) } function ya(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) { return a === b }, h, !0), l = ta(function (a) { return I(b, a) > -1 }, h, !0), m = [function (a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; i < f; i++)if (c = d.relative[a[i].type]) m = [ta(ua(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; e < f; e++)if (d.relative[a[e].type]) break; return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a)) } m.push(c) } return ua(m) } function za(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length; for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++]) if (q(l, g || n, h)) { i.push(l); break } k && (w = y) } c && ((l = !q && l) && r-- , f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i)); u = wa(u) } G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ia(f) : f } return h = ga.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, za(e, d)), f.selector = a } return f }, i = ga.select = function (a, b, c, e) { var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a); if (c = c || [], 1 === n.length) { if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) { if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c; m && (b = b.parentNode), a = a.slice(i.shift().value.length) } f = V.needsContext.test(a) ? 0 : i.length; while (f--) { if (j = i[f], d.relative[k = j.type]) break; if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) { if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c; break } } } return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) { return 1 & a.compareDocumentPosition(n.createElement("fieldset")) }), ja(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ka("type|href|height|width", function (a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ja(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ka("value", function (a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ja(function (a) { return null == a.getAttribute("disabled") }) || ka(J, function (a, b, c) { var d; if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ga }(a); r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape; var y = function (a, b, c) { var d = [], e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) { if (e && r(a).is(c)) break; d.push(a) } return d }, z = function (a, b) { for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a); return c }, A = r.expr.match.needsContext; function B(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() } var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, D = /^.[^:#\[\.,]*$/; function E(a, b, c) { return r.isFunction(b) ? r.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }) : b.nodeType ? r.grep(a, function (a) { return a === b !== c }) : "string" != typeof b ? r.grep(a, function (a) { return i.call(b, a) > -1 !== c }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) { return i.call(b, a) > -1 !== c && 1 === a.nodeType })) } r.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) { return 1 === a.nodeType })) }, r.fn.extend({ find: function (a) { var b, c, d = this.length, e = this; if ("string" != typeof a) return this.pushStack(r(a).filter(function () { for (b = 0; b < d; b++)if (r.contains(e[b], this)) return !0 })); for (c = this.pushStack([]), b = 0; b < d; b++)r.find(a, e[b], c); return d > 1 ? r.uniqueSort(c) : c }, filter: function (a) { return this.pushStack(E(this, a || [], !1)) }, not: function (a) { return this.pushStack(E(this, a || [], !0)) }, is: function (a) { return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length } }); var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H = r.fn.init = function (a, b, c) { var e, f; if (!a) return this; if (c = c || F, "string" == typeof a) { if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this } return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this) }; H.prototype = r.fn, F = r(d); var I = /^(?:parents|prev(?:Until|All))/, J = { children: !0, contents: !0, next: !0, prev: !0 }; r.fn.extend({ has: function (a) { var b = r(a, this), c = b.length; return this.filter(function () { for (var a = 0; a < c; a++)if (r.contains(this, b[a])) return !0 }) }, closest: function (a, b) { var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a); if (!A.test(a)) for (; d < e; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f) }, index: function (a) { return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function K(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a } r.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return y(a, "parentNode") }, parentsUntil: function (a, b, c) { return y(a, "parentNode", c) }, next: function (a) { return K(a, "nextSibling") }, prev: function (a) { return K(a, "previousSibling") }, nextAll: function (a) { return y(a, "nextSibling") }, prevAll: function (a) { return y(a, "previousSibling") }, nextUntil: function (a, b, c) { return y(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return y(a, "previousSibling", c) }, siblings: function (a) { return z((a.parentNode || {}).firstChild, a) }, children: function (a) { return z(a.firstChild) }, contents: function (a) { return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes)) } }, function (a, b) { r.fn[a] = function (c, d) { var e = r.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e) } }); var L = /[^\x20\t\r\n\f]+/g; function M(a) { var b = {}; return r.each(a.match(L) || [], function (a, c) { b[c] = !0 }), b } r.Callbacks = function (a) { a = "string" == typeof a ? M(a) : r.extend({}, a); var b, c, d, e, f = [], g = [], h = -1, i = function () { for (e = e || a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) } a.memory || (c = !1), b = !1, e && (f = c ? [] : "") }, j = { add: function () { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { r.each(b, function (b, c) { r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function () { return r.each(arguments, function (a, b) { var c; while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h-- }), this }, has: function (a) { return a ? r.inArray(a, f) > -1 : f.length > 0 }, empty: function () { return f && (f = []), this }, disable: function () { return e = g = [], f = c = "", this }, disabled: function () { return !f }, lock: function () { return e = g = [], c || b || (f = c = ""), this }, locked: function () { return !!e }, fireWith: function (a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function () { return j.fireWith(this, arguments), this }, fired: function () { return !!d } }; return j }; function N(a) { return a } function O(a) { throw a } function P(a, b, c, d) { var e; try { a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d)) } catch (a) { c.apply(void 0, [a]) } } r.extend({ Deferred: function (b) { var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]], d = "pending", e = { state: function () { return d }, always: function () { return f.done(arguments).fail(arguments), this }, "catch": function (a) { return e.then(null, a) }, pipe: function () { var a = arguments; return r.Deferred(function (b) { r.each(c, function (c, d) { var e = r.isFunction(a[d[4]]) && a[d[4]]; f[d[1]](function () { var a = e && e.apply(this, arguments); a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments) }) }), a = null }).promise() }, then: function (b, d, e) { var f = 0; function g(b, c, d, e) { return function () { var h = this, i = arguments, j = function () { var a, j; if (!(b < f)) { if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution"); j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++ , j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i)) } }, k = e ? j : function () { try { j() } catch (a) { r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i)) } }; b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k)) } } return r.Deferred(function (a) { c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O)) }).promise() }, promise: function (a) { return null != a ? r.extend(a, e) : e } }, f = {}; return r.each(c, function (a, b) { var g = b[2], h = b[5]; e[b[1]] = g.add, h && g.add(function () { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith }), e.promise(f), b && b.call(f, f), f }, when: function (a) { var b = arguments.length, c = b, d = Array(c), e = f.call(arguments), g = r.Deferred(), h = function (a) { return function (c) { d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e) } }; if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then(); while (c--) P(e[c], h(c), g.reject); return g.promise() } }); var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; r.Deferred.exceptionHook = function (b, c) { a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, r.readyException = function (b) { a.setTimeout(function () { throw b }) }; var R = r.Deferred(); r.fn.ready = function (a) { return R.then(a)["catch"](function (a) { r.readyException(a) }), this }, r.extend({ isReady: !1, readyWait: 1, ready: function (a) { (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r])) } }), r.ready.then = R.then; function S() {
        d.removeEventListener("DOMContentLoaded", S),
        a.removeEventListener("load", S), r.ready()
    } "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S)); var T = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === r.type(c)) { e = !0; for (h in c) T(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(r(a), c) })), b)) for (; h < i; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, U = function (a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }; function V() { this.expando = r.expando + V.uid++ } V.uid = 1, V.prototype = { cache: function (a) { var b = a[this.expando]; return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function (a, b, c) { var d, e = this.cache(a); if ("string" == typeof b) e[r.camelCase(b)] = c; else for (d in b) e[r.camelCase(d)] = b[d]; return e }, get: function (a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)] }, access: function (a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function (a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length; while (c--) delete d[b[c]] } (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function (a) { var b = a[this.expando]; return void 0 !== b && !r.isEmptyObject(b) } }; var W = new V, X = new V, Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g; function $(a) { return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a) } function _(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) { try { c = $(c) } catch (e) { } X.set(a, b, c) } else c = void 0; return c } r.extend({ hasData: function (a) { return X.hasData(a) || W.hasData(a) }, data: function (a, b, c) { return X.access(a, b, c) }, removeData: function (a, b) { X.remove(a, b) }, _data: function (a, b, c) { return W.access(a, b, c) }, _removeData: function (a, b) { W.remove(a, b) } }), r.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d]))); W.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { X.set(this, a) }) : T(this, function (b) { var c; if (f && void 0 === b) { if (c = X.get(f, a), void 0 !== c) return c; if (c = _(f, a), void 0 !== c) return c } else this.each(function () { X.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function (a) { return this.each(function () { X.remove(this, a) }) } }), r.extend({ queue: function (a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [] }, dequeue: function (a, b) { b = b || "fx"; var c = r.queue(a, b), d = c.length, e = c.shift(), f = r._queueHooks(a, b), g = function () { r.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function () { W.remove(a, [b + "queue", c]) }) }) } }), r.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = r.queue(this, a, b); r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { r.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++ , c.empty.add(h)); return h(), e.promise(b) } }); var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"), ca = ["Top", "Right", "Bottom", "Left"], da = function (a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display") }, ea = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; function fa(a, b, c, d) { var e, f = 1, g = 20, h = d ? function () { return d.cur() } : function () { return r.css(a, b, "") }, i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1; do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e } var ga = {}; function ha(a) { var b, c = a.ownerDocument, d = a.nodeName, e = ga[d]; return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e) } function ia(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++)d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c))); for (f = 0; f < g; f++)null != e[f] && (a[f].style.display = e[f]); return a } r.fn.extend({ show: function () { return ia(this, !0) }, hide: function () { return ia(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { da(this) ? r(this).show() : r(this).hide() }) } }); var ja = /^(?:checkbox|radio)$/i, ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, la = /^$|\/(?:java|ecma)script/i, ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td; function na(a, b) { var c; return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c } function oa(a, b) { for (var c = 0, d = a.length; c < d; c++)W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval")) } var pa = /<|&#?\w+;/; function qa(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f); else if (pa.test(f)) { g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0]; while (k--) g = g.lastChild; r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "" } else m.push(b.createTextNode(f)); l.textContent = "", n = 0; while (f = m[n++]) if (d && r.inArray(f, d) > -1) e && e.push(f); else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) { k = 0; while (f = g[k++]) la.test(f.type || "") && c.push(f) } return l } !function () { var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input"); c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }(); var ra = d.documentElement, sa = /^key/, ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ua = /^([^.]*)(?:\.(.+)|)/; function va() { return !0 } function wa() { return !1 } function xa() { try { return d.activeElement } catch (a) { } } function ya(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) ya(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa; else if (!e) return a; return 1 === f && (g = e, e = function (a) { return r().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () { r.event.add(this, b, e, d, c) }) } r.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a); if (q) { c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) { return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(L) || [""], j = b.length; while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0) } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a); if (q && (i = q.events)) { b = (b || "").match(L) || [""], j = b.length; while (j--) if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) { l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount-- , l.remove && l.remove.call(a, k)); g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]) } else for (n in i) r.event.remove(a, n + b[j], c, d, !0); r.isEmptyObject(i) && W.remove(a, "handle events") } }, dispatch: function (a) { var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (W.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {}; for (i[0] = b, c = 1; c < arguments.length; c++)i[c] = arguments[c]; if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) { h = r.event.handlers.call(this, b, j), c = 0; while ((f = h[c++]) && !b.isPropagationStopped()) { b.currentTarget = f.elem, d = 0; while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, b), b.result } }, handlers: function (a, b) { var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target; if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this)if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) { for (f = [], g = {}, c = 0; c < i; c++)d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d); f.length && h.push({ elem: j, handlers: f }) } return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h }, addProp: function (a, b) { Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () { if (this.originalEvent) return b(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[a] }, set: function (b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) }, fix: function (a) { return a[r.expando] ? a : new r.Event(a) }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== xa() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function () { if (this === xa() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function () { if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1 }, _default: function (a) { return B(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } } }, r.removeEvent = function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, r.Event = function (a, b) { return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b) }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault() }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation() } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (a) { var b = a.button; return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { r.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), r.fn.extend({ on: function (a, b, c, d) { return ya(this, a, b, c, d) }, one: function (a, b, c, d) { return ya(this, a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () { r.event.remove(this, a, c, b) }) } }); var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Aa = /<script|<style|<link/i, Ba = /checked\s*(?:[^=]|=\s*.checked.)/i, Ca = /^true\/(.*)/, Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function Ea(a, b) { return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a } function Fa(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a } function Ga(a) { var b = Ca.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function Ha(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j) for (c = 0, d = j[e].length; c < d; c++)r.event.add(b, e, j[e][c]) } X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i)) } } function Ia(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) } function Ja(a, b, c, d) { b = g.apply([], b); var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q); if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) { var f = a.eq(e); s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d) }); if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) { for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l); if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++)j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k)) } return a } function Ka(a, b, c) { for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d)); return a } r.extend({ htmlPrefilter: function (a) { return a.replace(za, "<$1></$2>") }, clone: function (a, b, c) { var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a); if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)Ia(f[d], g[d]); if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++)Ha(f[d], g[d]); else Ha(a, h); return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h }, cleanData: function (a) { for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)if (U(c)) { if (b = c[W.expando]) { if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle); c[W.expando] = void 0 } c[X.expando] && (c[X.expando] = void 0) } } }), r.fn.extend({ detach: function (a) { return Ka(this, a, !0) }, remove: function (a) { return Ka(this, a) }, text: function (a) { return T(this, function (a) { return void 0 === a ? r.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function () { return Ja(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ea(this, a); b.appendChild(a) } }) }, prepend: function () { return Ja(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ea(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return Ja(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return Ja(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = ""); return this }, clone: function (a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function () { return r.clone(this, a, b) }) }, html: function (a) { return T(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) { a = r.htmlPrefilter(a); try { for (; c < d; c++)b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = []; return Ja(this, arguments, function (b) { var c = this.parentNode; r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this)) }, a) } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { r.fn[a] = function (a) { for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get()); return this.pushStack(d) } }); var La = /^margin/, Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"), Na = function (b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) }; !function () { function b() { if (i) { i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h); var b = a.getComputedStyle(i); c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null } } var c, e, f, g, h = d.createElement("div"), i = d.createElement("div"); i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function () { return b(), c }, boxSizingReliable: function () { return b(), e }, pixelMarginRight: function () { return b(), f }, reliableMarginLeft: function () { return b(), g } })) }(); function Oa(a, b, c) { var d, e, f, g, h = a.style; return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g } function Pa(a, b) { return { get: function () { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } } var Qa = /^(none|table(?!-c[ea]).+)/, Ra = /^--/, Sa = { position: "absolute", visibility: "hidden", display: "block" }, Ta = { letterSpacing: "0", fontWeight: "400" }, Ua = ["Webkit", "Moz", "ms"], Va = d.createElement("div").style; function Wa(a) { if (a in Va) return a; var b = a[0].toUpperCase() + a.slice(1), c = Ua.length; while (c--) if (a = Ua[c] + b, a in Va) return a } function Xa(a) { var b = r.cssProps[a]; return b || (b = r.cssProps[a] = Wa(a) || a), b } function Ya(a, b, c) { var d = ba.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b } function Za(a, b, c, d, e) { var f, g = 0; for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)"margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e))); return g } function $a(a, b, c) { var d, e = Na(a), f = Oa(a, b, e), g = "border-box" === r.css(a, "boxSizing", !1, e); return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px") } r.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Oa(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = r.camelCase(b), i = Ra.test(b), j = a.style; return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0) } }, css: function (a, b, c, d) { var e, f, g, h = r.camelCase(b), i = Ra.test(b); return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e } }), r.each(["height", "width"], function (a, b) { r.cssHooks[b] = { get: function (a, c, d) { if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () { return $a(a, b, d) }) }, set: function (a, c, d) { var e, f = d && Na(a), g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f); return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g) } } }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) { if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () { return a.getBoundingClientRect().left })) + "px" }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) { r.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)e[a + ca[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, La.test(a) || (r.cssHooks[a + b].set = Ya) }), r.fn.extend({ css: function (a, b) { return T(this, function (a, b, c) { var d, e, f = {}, g = 0; if (Array.isArray(b)) { for (d = Na(a), e = b.length; g < e; g++)f[b[g]] = r.css(a, b[g], !1, d); return f } return void 0 !== c ? r.style(a, b, c) : r.css(a, b) }, a, b, arguments.length > 1) } }); function _a(a, b, c, d, e) { return new _a.prototype.init(a, b, c, d, e) } r.Tween = _a, _a.prototype = { constructor: _a, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px") }, cur: function () { var a = _a.propHooks[this.prop]; return a && a.get ? a.get(this) : _a.propHooks._default.get(this) }, run: function (a) { var b, c = _a.propHooks[this.prop]; return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function (a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function (a) { r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit) } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, r.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {}; var ab, bb, cb = /^(?:toggle|show|hide)$/, db = /queueHooks$/; function eb() { bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick()) } function fb() { return a.setTimeout(function () { ab = void 0 }), ab = r.now() } function gb(a, b) { var c, d = 0, e = { height: a }; for (b = b ? 1 : 0; d < 4; d += 2 - b)c = ca[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e } function hb(a, b, c) { for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)if (d = e[f].call(c, b, a)) return d } function ib(a, b, c) { var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && da(a), q = W.get(a, "fxshow"); c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () { g.unqueued || h() }), g.unqueued++ , m.always(function () { m.always(function () { g.unqueued-- , r.queue(a, "fx").length || g.empty.fire() }) })); for (d in b) if (e = b[d], cb.test(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) { if ("show" !== e || !q || void 0 === q[d]) continue; p = !0 } n[d] = q && q[d] || r.style(a, d) } if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () { p || ia([a]), W.remove(a, "fxshow"); for (d in n) r.style(a, d, n[d]) })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0)) } } function jb(a, b) { var c, d, e, f, g; for (c in a) if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function kb(a, b, c) { var d, e, f = 0, g = kb.prefilters.length, h = r.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; c < d; c++)j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (jb(k, j.opts.specialEasing); f < g; f++)if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d; return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j } r.Animation = r.extend(kb, { tweeners: { "*": [function (a, b) { var c = this.createTween(a, b); return fa(c.elem, a, ba.exec(b), c), c }] }, tweener: function (a, b) { r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L); for (var c, d = 0, e = a.length; d < e; d++)c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b) }, prefilters: [ib], prefilter: function (a, b) { b ? kb.prefilters.unshift(a) : kb.prefilters.push(a) } }), r.speed = function (a, b, c) { var d = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b }; return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () { r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue) }, d }, r.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = r.isEmptyObject(a), f = r.speed(b, c, d), g = function () { var b = kb(this, r.extend({}, a), f); (e || W.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = r.timers, g = W.get(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]); for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); !b && c || r.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = W.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0; for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; b < g; b++)d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), r.each(["toggle", "show", "hide"], function (a, b) { var c = r.fn[b]; r.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e) } }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { r.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), r.timers = [], r.fx.tick = function () { var a, b = 0, c = r.timers; for (ab = r.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1); c.length || r.fx.stop(), ab = void 0 }, r.fx.timer = function (a) { r.timers.push(a), r.fx.start() }, r.fx.interval = 13, r.fx.start = function () { bb || (bb = !0, eb()) }, r.fx.stop = function () { bb = null }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) { return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) { var e = a.setTimeout(c, b); d.stop = function () { a.clearTimeout(e) } }) }, function () { var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option")); a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value }(); var lb, mb = r.expr.attrHandle; r.fn.extend({ attr: function (a, b) { return T(this, r.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { r.removeAttr(this, a) }) } }), r.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
                null == d ? void 0 : d))
        }, attrHooks: { type: { set: function (a, b) { if (!o.radioValue && "radio" === b && B(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function (a, b) { var c, d = 0, e = b && b.match(L); if (e && 1 === a.nodeType) while (c = e[d++]) a.removeAttribute(c) }
    }), lb = { set: function (a, b, c) { return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = mb[b] || r.find.attr; mb[b] = function (a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e } }); var nb = /^(?:input|select|textarea|button)$/i, ob = /^(?:a|area)$/i; r.fn.extend({ prop: function (a, b) { return T(this, r.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return this.each(function () { delete this[r.propFix[a] || a] }) } }), r.extend({ prop: function (a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = r.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }, set: function (a) { var b = a.parentNode; b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { r.propFix[this.toLowerCase()] = this }); function pb(a) { var b = a.match(L) || []; return b.join(" ") } function qb(a) { return a.getAttribute && a.getAttribute("class") || "" } r.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function (b) { r(this).addClass(a.call(this, b, qb(this))) }); if ("string" == typeof a && a) { b = a.match(L) || []; while (c = this[i++]) if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " "); h = pb(d), e !== h && c.setAttribute("class", h) } } return this }, removeClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function (b) { r(this).removeClass(a.call(this, b, qb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(L) || []; while (c = this[i++]) if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") { g = 0; while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " "); h = pb(d), e !== h && c.setAttribute("class", h) } } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) { r(this).toggleClass(a.call(this, c, qb(this), b), b) }) : this.each(function () { var b, d, e, f; if ("string" === c) { d = 0, e = r(this), f = a.match(L) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || "")) }) }, hasClass: function (a) { var b, c, d = 0; b = " " + a + " "; while (c = this[d++]) if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0; return !1 } }); var rb = /\r/g; r.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = r.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) { return null == a ? "" : a + "" })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c) } } }), r.extend({ valHooks: { option: { get: function (a) { var b = r.find.attr(a, "value"); return null != b ? b : pb(r.text(a)) } }, select: { get: function (a) { var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length; for (d = f < 0 ? i : g ? f : 0; d < i; d++)if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) { if (b = r(c).val(), g) return b; h.push(b) } return h }, set: function (a, b) { var c, d, e = a.options, f = r.makeArray(b), g = e.length; while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), r.each(["radio", "checkbox"], function () { r.valHooks[this] = { set: function (a, b) { if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1 } }, o.checkOn || (r.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var sb = /^(?:focusinfocus|focusoutblur)$/; r.extend(r.event, { trigger: function (b, c, e, f) { var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : []; if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) { if (!f && !n.noBubble && !r.isWindow(e)) { for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), i = h; i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a) } g = 0; while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault()); return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result } }, simulate: function (a, b, c) { var d = r.extend(new r.Event, c, { type: a, isSimulated: !0 }); r.event.trigger(d, null, b) } }), r.fn.extend({ trigger: function (a, b) { return this.each(function () { r.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; if (c) return r.event.trigger(a, b, c, !0) } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) { r.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), r.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { r.event.simulate(b, a.target, r.event.fix(a)) }; r.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = W.access(d, b); e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = W.access(d, b) - 1; e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b)) } } }); var tb = a.location, ub = r.now(), vb = /\?/; r.parseXML = function (b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c }; var wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i; function Ab(a, b, c, d) { var e; if (Array.isArray(b)) r.each(b, function (b, e) { c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) }); else if (c || "object" !== r.type(b)) d(a, b); else for (e in b) Ab(a + "[" + e + "]", b[e], c, d) } r.param = function (a, b) { var c, d = [], e = function (a, b) { var c = r.isFunction(b) ? b() : b; d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c) }; if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () { e(this.name, this.value) }); else for (c in a) Ab(c, a[c], b, e); return d.join("&") }, r.fn.extend({ serialize: function () { return r.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = r.prop(this, "elements"); return a ? r.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a)) }).map(function (a, b) { var c = r(this).val(); return null == c ? null : Array.isArray(c) ? r.map(c, function (a) { return { name: b.name, value: a.replace(xb, "\r\n") } }) : { name: b.name, value: c.replace(xb, "\r\n") } }).get() } }); var Bb = /%20/g, Cb = /#.*$/, Db = /([?&])_=[^&]*/, Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Gb = /^(?:GET|HEAD)$/, Hb = /^\/\//, Ib = {}, Jb = {}, Kb = "*/".concat("*"), Lb = d.createElement("a"); Lb.href = tb.href; function Mb(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(L) || []; if (r.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Nb(a, b, c, d) { var e = {}, f = a === Jb; function g(h) { var i; return e[h] = !0, r.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Ob(a, b) { var c, d, e = r.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && r.extend(!0, a, d), a } function Pb(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d) for (e in h) if (h[e] && h[e].test(d)) { i.unshift(e); break } if (i[0] in c) f = i[0]; else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break } g || (g = e) } f = f || g } if (f) return f !== i[0] && i.unshift(f), c[f] } function Qb(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a) }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function (b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = { readyState: 0, getResponseHeader: function (a) { var b; if (k) { if (!h) { h = {}; while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2] } b = h[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return k ? g : null }, setRequestHeader: function (a, b) { return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this }, overrideMimeType: function (a) { return null == k && (o.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (k) y.always(a[y.status]); else for (b in a) u[b] = [u[b], a[b]]; return this }, abort: function (a) { var b = a || x; return e && e.abort(b), A(0, b), this } }; if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) { j = d.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host } catch (z) { o.crossDomain = !0 } } if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y; l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]); for (m in o.headers) y.setRequestHeader(m, o.headers[m]); if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort(); if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) { if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y; o.async && o.timeout > 0 && (i = a.setTimeout(function () { y.abort("timeout") }, o.timeout)); try { k = !1, e.send(v, A) } catch (z) { if (k) throw z; A(-1, z) } } else A(-1, "No Transport"); function A(b, c, d, h) { var j, m, n, v, w, x = c; k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop"))) } return y }, getJSON: function (a, b, c) { return r.get(a, b, c, "json") }, getScript: function (a, b) { return r.get(a, void 0, b, "script") } }), r.each(["get", "post"], function (a, b) { r[b] = function (a, c, d, e) { return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a)) } }), r._evalUrl = function (a) { return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, r.fn.extend({ wrapAll: function (a) { var b; return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this }, wrapInner: function (a) { return r.isFunction(a) ? this.each(function (b) { r(this).wrapInner(a.call(this, b)) }) : this.each(function () { var b = r(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = r.isFunction(a); return this.each(function (c) { r(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function (a) { return this.parent(a).not("body").each(function () { r(this).replaceWith(this.childNodes) }), this } }), r.expr.pseudos.hidden = function (a) { return !r.expr.pseudos.visible(a) }, r.expr.pseudos.visible = function (a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, r.ajaxSettings.xhr = function () { try { return new a.XMLHttpRequest } catch (b) { } }; var Rb = { 0: 200, 1223: 204 }, Sb = r.ajaxSettings.xhr(); o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) { var c, d; if (o.cors || Sb && !b.crossDomain) return { send: function (e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g]; b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e) h.setRequestHeader(g, e[g]); c = function (a) { return function () { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () { 4 === h.readyState && a.setTimeout(function () { c && d() }) }, c = c("abort"); try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i } }, abort: function () { c && c() } } }), r.ajaxPrefilter(function (a) { a.crossDomain && (a.contents.script = !1) }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (a) { return r.globalEval(a), a } } }), r.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), r.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c; return { send: function (e, f) { b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function () { c && c() } } } }); var Tb = [], Ub = /(=)\?(?=&|$)|\?\?/; r.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = Tb.pop() || r.expando + "_" + ub++; return this[a] = !0, a } }), r.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || r.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), o.createHTMLDocument = function () { var a = d.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), r.parseHTML = function (a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var e, f, g; return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)) }, r.fn.load = function (a, b, c) { var d, e, f, g = this, h = a.indexOf(" "); return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) { f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a) }).always(c && function (a, b) { g.each(function () { c.apply(this, f || [a.responseText, b, a]) }) }), this }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { r.fn[b] = function (a) { return this.on(b, a) } }), r.expr.pseudos.animated = function (a) { return r.grep(r.timers, function (b) { return a === b.elem }).length }, r.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, r.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { r.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 } }, position: function () { if (this[0]) { var a, b, c = this[0], d = { top: 0, left: 0 }; return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent; while (a && "static" === r.css(a, "position")) a = a.offsetParent; return a || ra }) } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = "pageYOffset" === b; r.fn[a] = function (d) { return T(this, function (a, d, e) { var f; return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) } }), r.each(["top", "left"], function (a, b) { r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) { if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c }) }), r.each({ Height: "height", Width: "width" }, function (a, b) { r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { r.fn[d] = function (e, f) { var g = arguments.length && (c || "boolean" != typeof e), h = c || (e === !0 || f === !0 ? "margin" : "border"); return T(this, function (b, c, e) { var f; return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h) }, b, g ? e : void 0, g) } }) }), r.fn.extend({ bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), r.holdReady = function (a) { a ? r.readyWait++ : r.ready(!0) }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function () { return r }); var Vb = a.jQuery, Wb = a.$; return r.noConflict = function (b) { return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r }, b || (a.jQuery = a.$ = r), r
});
(function (e, t) { 'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t() })(this, function () { 'use strict'; function e(e) { return e && '[object Function]' === {}.toString.call(e) } function t(e, t) { if (1 !== e.nodeType) return []; var o = getComputedStyle(e, null); return t ? o[t] : o } function o(e) { return 'HTML' === e.nodeName ? e : e.parentNode || e.host } function n(e) { if (!e) return document.body; switch (e.nodeName) { case 'HTML': case 'BODY': return e.ownerDocument.body; case '#document': return e.body; }var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY; return /(auto|scroll)/.test(r + s + p) ? e : n(o(e)) } function r(e) { var o = e && e.offsetParent, i = o && o.nodeName; return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : e ? e.ownerDocument.documentElement : document.documentElement } function p(e) { var t = e.nodeName; return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e) } function s(e) { return null === e.parentNode ? e : s(e.parentNode) } function d(e, t) { if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement; var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = o ? e : t, n = o ? t : e, a = document.createRange(); a.setStart(i, 0), a.setEnd(n, 0); var l = a.commonAncestorContainer; if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l); var f = s(e); return f.host ? d(f.host, t) : d(e, s(t).host) } function a(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top', o = 'top' === t ? 'scrollTop' : 'scrollLeft', i = e.nodeName; if ('BODY' === i || 'HTML' === i) { var n = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || n; return r[o] } return e[o] } function l(e, t) { var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = a(t, 'top'), n = a(t, 'left'), r = o ? -1 : 1; return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e } function f(e, t) { var o = 'x' === t ? 'Left' : 'Top', i = 'Left' == o ? 'Right' : 'Bottom'; return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10) } function m(e, t, o, i) { return J(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0) } function h() { var e = document.body, t = document.documentElement, o = ie() && getComputedStyle(t); return { height: m('Height', e, t, o), width: m('Width', e, t, o) } } function c(e) { return se({}, e, { right: e.left + e.width, bottom: e.top + e.height }) } function g(e) { var o = {}; if (ie()) try { o = e.getBoundingClientRect(); var i = a(e, 'top'), n = a(e, 'left'); o.top += i, o.left += n, o.bottom += i, o.right += n } catch (e) { } else o = e.getBoundingClientRect(); var r = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top }, p = 'HTML' === e.nodeName ? h() : {}, s = p.width || e.clientWidth || r.right - r.left, d = p.height || e.clientHeight || r.bottom - r.top, l = e.offsetWidth - s, m = e.offsetHeight - d; if (l || m) { var g = t(e); l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m } return c(r) } function u(e, o) { var i = ie(), r = 'HTML' === o.nodeName, p = g(e), s = g(o), d = n(e), a = t(o), f = parseFloat(a.borderTopWidth, 10), m = parseFloat(a.borderLeftWidth, 10), h = c({ top: p.top - s.top - f, left: p.left - s.left - m, width: p.width, height: p.height }); if (h.marginTop = 0, h.marginLeft = 0, !i && r) { var u = parseFloat(a.marginTop, 10), b = parseFloat(a.marginLeft, 10); h.top -= f - u, h.bottom -= f - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b } return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = l(h, o)), h } function b(e) { var t = e.ownerDocument.documentElement, o = u(e, t), i = J(t.clientWidth, window.innerWidth || 0), n = J(t.clientHeight, window.innerHeight || 0), r = a(t), p = a(t, 'left'), s = { top: r - o.top + o.marginTop, left: p - o.left + o.marginLeft, width: i, height: n }; return c(s) } function w(e) { var i = e.nodeName; return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || w(o(e)) } function y(e, t, i, r) { var p = { top: 0, left: 0 }, s = d(e, t); if ('viewport' === r) p = b(s); else { var a; 'scrollParent' === r ? (a = n(o(t)), 'BODY' === a.nodeName && (a = e.ownerDocument.documentElement)) : 'window' === r ? a = e.ownerDocument.documentElement : a = r; var l = u(a, s); if ('HTML' === a.nodeName && !w(s)) { var f = h(), m = f.height, c = f.width; p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = c + l.left } else p = l } return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p } function E(e) { var t = e.width, o = e.height; return t * o } function v(e, t, o, i, n) { var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === e.indexOf('auto')) return e; var p = y(o, i, r, n), s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } }, d = Object.keys(s).map(function (e) { return se({ key: e }, s[e], { area: E(s[e]) }) }).sort(function (e, t) { return t.area - e.area }), a = d.filter(function (e) { var t = e.width, i = e.height; return t >= o.clientWidth && i >= o.clientHeight }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1]; return l + (f ? '-' + f : '') } function O(e, t, o) { var i = d(t, o); return u(o, i) } function L(e) { var t = getComputedStyle(e), o = parseFloat(t.marginTop) + parseFloat(t.marginBottom), i = parseFloat(t.marginLeft) + parseFloat(t.marginRight), n = { width: e.offsetWidth + i, height: e.offsetHeight + o }; return n } function x(e) { var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }; return e.replace(/left|right|bottom|top/g, function (e) { return t[e] }) } function S(e, t, o) { o = o.split('-')[0]; var i = L(e), n = { width: i.width, height: i.height }, r = -1 !== ['right', 'left'].indexOf(o), p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height'; return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[x(s)], n } function T(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] } function D(e, t, o) { if (Array.prototype.findIndex) return e.findIndex(function (e) { return e[t] === o }); var i = T(e, function (e) { return e[t] === o }); return e.indexOf(i) } function C(t, o, i) { var n = void 0 === i ? t : t.slice(0, D(t, 'name', i)); return n.forEach(function (t) { t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!'); var i = t['function'] || t.fn; t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t)) }), o } function N() { if (!this.state.isDestroyed) { var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }; e.offsets.reference = O(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = C(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)) } } function k(e, t) { return e.some(function (e) { var o = e.name, i = e.enabled; return i && o === t }) } function W(e) { for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) { var i = t[n], r = i ? '' + i + o : e; if ('undefined' != typeof document.body.style[r]) return r } return null } function P() { return this.state.isDestroyed = !0, k(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this } function B(e) { var t = e.ownerDocument; return t ? t.defaultView : window } function H(e, t, o, i) { var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e; p.addEventListener(t, o, { passive: !0 }), r || H(n(p.parentNode), t, o, i), i.push(p) } function A(e, t, o, i) { o.updateBound = i, B(e).addEventListener('resize', o.updateBound, { passive: !0 }); var r = n(e); return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o } function I() { this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate)) } function M(e, t) { return B(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) { e.removeEventListener('scroll', t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t } function R() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state)) } function U(e) { return '' !== e && !isNaN(parseFloat(e)) && isFinite(e) } function Y(e, t) { Object.keys(t).forEach(function (o) { var i = ''; -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (i = 'px'), e.style[o] = t[o] + i }) } function j(e, t) { Object.keys(t).forEach(function (o) { var i = t[o]; !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]) }) } function F(e, t, o) { var i = T(e, function (e) { var o = e.name; return o === t }), n = !!i && e.some(function (e) { return e.name === o && e.enabled && e.order < i.order }); if (!n) { var r = '`' + t + '`'; console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!') } return n } function K(e) { return 'end' === e ? 'start' : 'start' === e ? 'end' : e } function q(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = ae.indexOf(e), i = ae.slice(o + 1).concat(ae.slice(0, o)); return t ? i.reverse() : i } function V(e, t, o, i) { var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +n[1], p = n[2]; if (!r) return e; if (0 === p.indexOf('%')) { var s; switch (p) { case '%p': s = o; break; case '%': case '%r': default: s = i; }var d = c(s); return d[t] / 100 * r } if ('vh' === p || 'vw' === p) { var a; return a = 'vh' === p ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r } return r } function z(e, t, o, i) { var n = [0, 0], r = -1 !== ['right', 'left'].indexOf(i), p = e.split(/(\+|\-)/).map(function (e) { return e.trim() }), s = p.indexOf(T(p, function (e) { return -1 !== e.search(/,|\s/) })); p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.'); var d = /\s*,\s*|\s+/, a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))]; return a = a.map(function (e, i) { var n = (1 === i ? !r : r) ? 'height' : 'width', p = !1; return e.reduce(function (e, t) { return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t) }, []).map(function (e) { return V(e, n, t, o) }) }), a.forEach(function (e, t) { e.forEach(function (o, i) { U(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1)) }) }), n } function G(e, t) { var o, i = t.offset, n = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = n.split('-')[0]; return o = U(+i) ? [+i, 0] : z(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e } for (var _ = Math.min, X = Math.floor, J = Math.max, Q = 'undefined' != typeof window && 'undefined' != typeof document, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) { $ = 1; break } var i, te = Q && window.Promise, oe = te ? function (e) { var t = !1; return function () { t || (t = !0, window.Promise.resolve().then(function () { t = !1, e() })) } } : function (e) { var t = !1; return function () { t || (t = !0, setTimeout(function () { t = !1, e() }, $)) } }, ie = function () { return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i }, ne = function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function') }, re = function () { function e(e, t) { for (var o, n = 0; n < t.length; n++)o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } return function (t, o, i) { return o && e(t.prototype, o), i && e(t, i), t } }(), pe = function (e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e }, se = Object.assign || function (e) { for (var t, o = 1; o < arguments.length; o++)for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e }, de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'], ae = de.slice(3), le = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' }, fe = function () { function t(o, i) { var n = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; ne(this, t), this.scheduleUpdate = function () { return requestAnimationFrame(n.update) }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) { n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) { return se({ name: e }, n.options.modifiers[e]) }).sort(function (e, t) { return e.order - t.order }), this.modifiers.forEach(function (t) { t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state) }), this.update(); var p = this.options.eventsEnabled; p && this.enableEventListeners(), this.state.eventsEnabled = p } return re(t, [{ key: 'update', value: function () { return N.call(this) } }, { key: 'destroy', value: function () { return P.call(this) } }, { key: 'enableEventListeners', value: function () { return I.call(this) } }, { key: 'disableEventListeners', value: function () { return R.call(this) } }]), t }(); return fe.Utils = ('undefined' == typeof window ? global : window).PopperUtils, fe.placements = de, fe.Defaults = { placement: 'bottom', eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () { }, onUpdate: function () { }, modifiers: { shift: { order: 100, enabled: !0, fn: function (e) { var t = e.placement, o = t.split('-')[0], i = t.split('-')[1]; if (i) { var n = e.offsets, r = n.reference, p = n.popper, s = -1 !== ['bottom', 'top'].indexOf(o), d = s ? 'left' : 'top', a = s ? 'width' : 'height', l = { start: pe({}, d, r[d]), end: pe({}, d, r[d] + r[a] - p[a]) }; e.offsets.popper = se({}, p, l[i]) } return e } }, offset: { order: 200, enabled: !0, fn: G, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function (e, t) { var o = t.boundariesElement || r(e.instance.popper); e.instance.reference === o && (o = r(o)); var i = y(e.instance.popper, e.instance.reference, t.padding, o); t.boundaries = i; var n = t.priority, p = e.offsets.popper, s = { primary: function (e) { var o = p[e]; return p[e] < i[e] && !t.escapeWithReference && (o = J(p[e], i[e])), pe({}, e, o) }, secondary: function (e) { var o = 'right' === e ? 'left' : 'top', n = p[o]; return p[e] > i[e] && !t.escapeWithReference && (n = _(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n) } }; return n.forEach(function (e) { var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary'; p = se({}, p, s[t](e)) }), e.offsets.popper = p, e }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function (e) { var t = e.offsets, o = t.popper, i = t.reference, n = e.placement.split('-')[0], r = X, p = -1 !== ['top', 'bottom'].indexOf(n), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top', a = p ? 'width' : 'height'; return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e } }, arrow: { order: 500, enabled: !0, fn: function (e, o) { var i; if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e; var n = o.element; if ('string' == typeof n) { if (n = e.instance.popper.querySelector(n), !n) return e; } else if (!e.instance.popper.contains(n)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e; var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !== ['left', 'right'].indexOf(r), l = a ? 'height' : 'width', f = a ? 'Top' : 'Left', m = f.toLowerCase(), h = a ? 'left' : 'top', g = a ? 'bottom' : 'right', u = L(n)[l]; d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), e.offsets.popper = c(e.offsets.popper); var b = d[m] + d[l] / 2 - u / 2, w = t(e.instance.popper), y = parseFloat(w['margin' + f], 10), E = parseFloat(w['border' + f + 'Width'], 10), v = b - e.offsets.popper[m] - y - E; return v = J(_(s[l] - u, v), 0), e.arrowElement = n, e.offsets.arrow = (i = {}, pe(i, m, Math.round(v)), pe(i, h, ''), i), e }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function (e, t) { if (k(e.instance.modifiers, 'inner')) return e; if (e.flipped && e.placement === e.originalPlacement) return e; var o = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement), i = e.placement.split('-')[0], n = x(i), r = e.placement.split('-')[1] || '', p = []; switch (t.behavior) { case le.FLIP: p = [i, n]; break; case le.CLOCKWISE: p = q(i); break; case le.COUNTERCLOCKWISE: p = q(i, !0); break; default: p = t.behavior; }return p.forEach(function (s, d) { if (i !== s || p.length === d + 1) return e; i = e.placement.split('-')[0], n = x(i); var a = e.offsets.popper, l = e.offsets.reference, f = X, m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom), h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u, w = -1 !== ['top', 'bottom'].indexOf(i), y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u); (m || b || y) && (e.flipped = !0, (m || b) && (i = p[d + 1]), y && (r = K(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = C(e.instance.modifiers, e, 'flip')) }), e }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function (e) { var t = e.placement, o = t.split('-')[0], i = e.offsets, n = i.popper, r = i.reference, p = -1 !== ['left', 'right'].indexOf(o), s = -1 === ['top', 'left'].indexOf(o); return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = x(t), e.offsets.popper = c(n), e } }, hide: { order: 800, enabled: !0, fn: function (e) { if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e; var t = e.offsets.reference, o = T(e.instance.modifiers, function (e) { return 'preventOverflow' === e.name }).boundaries; if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) { if (!0 === e.hide) return e; e.hide = !0, e.attributes['x-out-of-boundaries'] = '' } else { if (!1 === e.hide) return e; e.hide = !1, e.attributes['x-out-of-boundaries'] = !1 } return e } }, computeStyle: { order: 850, enabled: !0, fn: function (e, t) { var o = t.x, i = t.y, n = e.offsets.popper, p = T(e.instance.modifiers, function (e) { return 'applyStyle' === e.name }).gpuAcceleration; void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'); var s, d, a = void 0 === p ? t.gpuAcceleration : p, l = r(e.instance.popper), f = g(l), m = { position: n.position }, h = { left: X(n.left), top: X(n.top), bottom: X(n.bottom), right: X(n.right) }, c = 'bottom' === o ? 'top' : 'bottom', u = 'right' === i ? 'left' : 'right', b = W('transform'); if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == u ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform'; else { var w = 'bottom' == c ? -1 : 1, y = 'right' == u ? -1 : 1; m[c] = d * w, m[u] = s * y, m.willChange = c + ', ' + u } var E = { "x-placement": e.placement }; return e.attributes = se({}, E, e.attributes), e.styles = se({}, m, e.styles), e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles), e }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function (e) { return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e }, onLoad: function (e, t, o, i, n) { var r = O(n, t, e), p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding); return t.setAttribute('x-placement', p), Y(t, { position: 'absolute' }), o }, gpuAcceleration: void 0 } } }, fe });
//# sourceMappingURL=popper.min.js.map
/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper) }(this, function (t, e, n) { "use strict"; function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } function s(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t } function r() { return (r = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t }).apply(this, arguments) } e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n; var o, a, l, h, c, u, f, d, _, g, p, m, v, E, T, y, C, I, A, b, D, S, w, N, O, k, P = function (t) { var e = !1; function n(e) { var n = this, s = !1; return t(this).one(i.TRANSITION_END, function () { s = !0 }), setTimeout(function () { s || i.triggerTransitionEnd(n) }, e), this } var i = { TRANSITION_END: "bsTransitionEnd", getUID: function (t) { do { t += ~~(1e6 * Math.random()) } while (document.getElementById(t)); return t }, getSelectorFromElement: function (e) { var n, i = e.getAttribute("data-target"); i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")); try { return t(document).find(i).length > 0 ? i : null } catch (t) { return null } }, reflow: function (t) { return t.offsetHeight }, triggerTransitionEnd: function (n) { t(n).trigger(e.end) }, supportsTransitionEnd: function () { return Boolean(e) }, isElement: function (t) { return (t[0] || t).nodeType }, typeCheckConfig: function (t, e, n) { for (var s in n) if (Object.prototype.hasOwnProperty.call(n, s)) { var r = n[s], o = e[s], a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase()); if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".') } var l } }; return e = ("undefined" == typeof window || !window.QUnit) && { end: "transitionend" }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = { bindType: e.end, delegateType: e.end, handle: function (e) { if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }), i }(e), L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = { CLOSE: "close" + h, CLOSED: "closed" + h, CLICK_DATA_API: "click" + h + ".data-api" }, f = "alert", d = "fade", _ = "show", g = function () { function t(t) { this._element = t } var e = t.prototype; return e.close = function (t) { t = t || this._element; var e = this._getRootElement(t); this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, e.dispose = function () { o.removeData(this._element, l), this._element = null }, e._getRootElement = function (t) { var e = P.getSelectorFromElement(t), n = !1; return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n }, e._triggerCloseEvent = function (t) { var e = o.Event(u.CLOSE); return o(t).trigger(e), e }, e._removeElement = function (t) { var e = this; o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function (n) { return e._destroyElement(t, n) }).emulateTransitionEnd(150) : this._destroyElement(t) }, e._destroyElement = function (t) { o(t).detach().trigger(u.CLOSED).remove() }, t._jQueryInterface = function (e) { return this.each(function () { var n = o(this), i = n.data(l); i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this) }) }, t._handleDismiss = function (t) { return function (e) { e && e.preventDefault(), t.close(this) } }, s(t, null, [{ key: "VERSION", get: function () { return "4.0.0" } }]), t }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function () { return o.fn[a] = c, g._jQueryInterface }, g), R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = { CLICK_DATA_API: "click" + E + T, FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T }, k = function () { function t(t) { this._element = t } var e = t.prototype; return e.toggle = function () { var t = !0, e = !0, n = p(this._element).closest(D)[0]; if (n) { var i = p(this._element).find(S)[0]; if (i) { if ("radio" === i.type) if (i.checked && p(this._element).hasClass(C)) t = !1; else { var s = p(n).find(w)[0]; s && p(s).removeClass(C) } if (t) { if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return; i.checked = !p(this._element).hasClass(C), p(i).trigger("change") } i.focus(), e = !1 } } e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C) }, e.dispose = function () { p.removeData(this._element, v), this._element = null }, t._jQueryInterface = function (e) { return this.each(function () { var n = p(this).data(v); n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]() }) }, s(t, null, [{ key: "VERSION", get: function () { return "4.0.0" } }]), t }(), p(document).on(O.CLICK_DATA_API, b, function (t) { t.preventDefault(); var e = t.target; p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle") }).on(O.FOCUS_BLUR_DATA_API, b, function (t) { var e = p(t.target).closest(N)[0]; p(e).toggleClass(A, /^focus(in)?$/.test(t.type)) }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function () { return p.fn[m] = y, k._jQueryInterface }, k), j = function (t) { var e = "carousel", n = "bs.carousel", i = "." + n, o = t.fn[e], a = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, l = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, h = "next", c = "prev", u = "left", f = "right", d = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load" + i + ".data-api", CLICK_DATA_API: "click" + i + ".data-api" }, _ = "carousel", g = "active", p = "slide", m = "carousel-item-right", v = "carousel-item-left", E = "carousel-item-next", T = "carousel-item-prev", y = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' }, C = function () { function o(e, n) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners() } var C = o.prototype; return C.next = function () { this._isSliding || this._slide(h) }, C.nextWhenVisible = function () { !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next() }, C.prev = function () { this._isSliding || this._slide(c) }, C.pause = function (e) { e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, C.cycle = function (t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, C.to = function (e) { var n = this; this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0]; var i = this._getItemIndex(this._activeElement); if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(d.SLID, function () { return n.to(e) }); else { if (i === e) return this.pause(), void this.cycle(); var s = e > i ? h : c; this._slide(s, this._items[e]) } }, C.dispose = function () { t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, C._getConfig = function (t) { return t = r({}, a, t), P.typeCheckConfig(e, t, l), t }, C._addEventListeners = function () { var e = this; this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) { return e._keydown(t) }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) { return e.pause(t) }).on(d.MOUSELEAVE, function (t) { return e.cycle(t) }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function () { e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) { return e.cycle(t) }, 500 + e._config.interval) })) }, C._keydown = function (t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) { case 37: t.preventDefault(), this.prev(); break; case 39: t.preventDefault(), this.next() } }, C._getItemIndex = function (e) { return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e) }, C._getItemByDirection = function (t, e) { var n = t === h, i = t === c, s = this._getItemIndex(e), r = this._items.length - 1; if ((i && 0 === s || n && s === r) && !this._config.wrap) return e; var o = (s + (t === c ? -1 : 1)) % this._items.length; return -1 === o ? this._items[this._items.length - 1] : this._items[o] }, C._triggerSlideEvent = function (e, n) { var i = this._getItemIndex(e), s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]), r = t.Event(d.SLIDE, { relatedTarget: e, direction: n, from: s, to: i }); return t(this._element).trigger(r), r }, C._setActiveIndicatorElement = function (e) { if (this._indicatorsElement) { t(this._indicatorsElement).find(y.ACTIVE).removeClass(g); var n = this._indicatorsElement.children[this._getItemIndex(e)]; n && t(n).addClass(g) } }, C._slide = function (e, n) { var i, s, r, o = this, a = t(this._element).find(y.ACTIVE_ITEM)[0], l = this._getItemIndex(a), c = n || a && this._getItemByDirection(e, a), _ = this._getItemIndex(c), C = Boolean(this._interval); if (e === h ? (i = v, s = E, r = u) : (i = m, s = T, r = f), c && t(c).hasClass(g)) this._isSliding = !1; else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) { this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(c); var I = t.Event(d.SLID, { relatedTarget: c, direction: r, from: l, to: _ }); P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s), P.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(P.TRANSITION_END, function () { t(c).removeClass(i + " " + s).addClass(g), t(a).removeClass(g + " " + s + " " + i), o._isSliding = !1, setTimeout(function () { return t(o._element).trigger(I) }, 0) }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(c).addClass(g), this._isSliding = !1, t(this._element).trigger(I)), C && this.cycle() } }, o._jQueryInterface = function (e) { return this.each(function () { var i = t(this).data(n), s = r({}, a, t(this).data()); "object" == typeof e && (s = r({}, s, e)); var l = "string" == typeof e ? e : s.slide; if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e); else if ("string" == typeof l) { if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"'); i[l]() } else s.interval && (i.pause(), i.cycle()) }) }, o._dataApiClickHandler = function (e) { var i = P.getSelectorFromElement(this); if (i) { var s = t(i)[0]; if (s && t(s).hasClass(_)) { var a = r({}, t(s).data(), t(this).data()), l = this.getAttribute("data-slide-to"); l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault() } } }, s(o, null, [{ key: "VERSION", get: function () { return "4.0.0" } }, { key: "Default", get: function () { return a } }]), o }(); return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () { t(y.DATA_RIDE).each(function () { var e = t(this); C._jQueryInterface.call(e, e.data()) }) }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function () { return t.fn[e] = o, C._jQueryInterface }, C }(e), H = function (t) { var e = "collapse", n = "bs.collapse", i = "." + n, o = t.fn[e], a = { toggle: !0, parent: "" }, l = { toggle: "boolean", parent: "(string|element)" }, h = { SHOW: "show" + i, SHOWN: "shown" + i, HIDE: "hide" + i, HIDDEN: "hidden" + i, CLICK_DATA_API: "click" + i + ".data-api" }, c = "show", u = "collapse", f = "collapsing", d = "collapsed", _ = "width", g = "height", p = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' }, m = function () { function i(e, n) { this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')); for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) { var r = i[s], o = P.getSelectorFromElement(r); null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r)) } this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var o = i.prototype; return o.toggle = function () { t(this._element).hasClass(c) ? this.hide() : this.show() }, o.show = function () { var e, s, r = this; if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) { var o = t.Event(h.SHOW); if (t(this._element).trigger(o), !o.isDefaultPrevented()) { e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null)); var a = this._getDimension(); t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0); var l = function () { t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN) }; if (P.supportsTransitionEnd()) { var _ = "scroll" + (a[0].toUpperCase() + a.slice(1)); t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[_] + "px" } else l() } } }, o.hide = function () { var e = this; if (!this._isTransitioning && t(this._element).hasClass(c)) { var n = t.Event(h.HIDE); if (t(this._element).trigger(n), !n.isDefaultPrevented()) { var i = this._getDimension(); if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0) for (var s = 0; s < this._triggerArray.length; s++) { var r = this._triggerArray[s], o = P.getSelectorFromElement(r); if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1) } this.setTransitioning(!0); var a = function () { e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN) }; this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a() } } }, o.setTransitioning = function (t) { this._isTransitioning = t }, o.dispose = function () { t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, o._getConfig = function (t) { return (t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t }, o._getDimension = function () { return t(this._element).hasClass(_) ? _ : g }, o._getParent = function () { var e = this, n = null; P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0]; var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'; return t(n).find(s).each(function (t, n) { e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]) }), n }, o._addAriaAndCollapsedClass = function (e, n) { if (e) { var i = t(e).hasClass(c); n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i) } }, i._getTargetFromElement = function (e) { var n = P.getSelectorFromElement(e); return n ? t(n)[0] : null }, i._jQueryInterface = function (e) { return this.each(function () { var s = t(this), o = s.data(n), l = r({}, a, s.data(), "object" == typeof e && e); if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) { if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"'); o[e]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.0.0" } }, { key: "Default", get: function () { return a } }]), i }(); return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) { "A" === e.currentTarget.tagName && e.preventDefault(); var i = t(this), s = P.getSelectorFromElement(this); t(s).each(function () { var e = t(this), s = e.data(n) ? "toggle" : i.data(); m._jQueryInterface.call(e, s) }) }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () { return t.fn[e] = o, m._jQueryInterface }, m }(e), W = function (t) { var e = "dropdown", i = "bs.dropdown", o = "." + i, a = ".data-api", l = t.fn[e], h = new RegExp("38|40|27"), c = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, CLICK: "click" + o, CLICK_DATA_API: "click" + o + a, KEYDOWN_DATA_API: "keydown" + o + a, KEYUP_DATA_API: "keyup" + o + a }, u = "disabled", f = "show", d = "dropup", _ = "dropright", g = "dropleft", p = "dropdown-menu-right", m = "dropdown-menu-left", v = "position-static", E = '[data-toggle="dropdown"]', T = ".dropdown form", y = ".dropdown-menu", C = ".navbar-nav", I = ".dropdown-menu .dropdown-item:not(.disabled)", A = "top-start", b = "top-end", D = "bottom-start", S = "bottom-end", w = "right-start", N = "left-start", O = { offset: 0, flip: !0, boundary: "scrollParent" }, k = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)" }, L = function () { function a(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var l = a.prototype; return l.toggle = function () { if (!this._element.disabled && !t(this._element).hasClass(u)) { var e = a._getParentFromElement(this._element), i = t(this._menu).hasClass(f); if (a._clearMenus(), !i) { var s = { relatedTarget: this._element }, r = t.Event(c.SHOW, s); if (t(e).trigger(r), !r.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)"); var o = this._element; t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s)) } } } }, l.dispose = function () { t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null) }, l.update = function () { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, l._addEventListeners = function () { var e = this; t(this._element).on(c.CLICK, function (t) { t.preventDefault(), t.stopPropagation(), e.toggle() }) }, l._getConfig = function (n) { return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n }, l._getMenuElement = function () { if (!this._menu) { var e = a._getParentFromElement(this._element); this._menu = t(e).find(y)[0] } return this._menu }, l._getPlacement = function () { var e = t(this._element).parent(), n = D; return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n }, l._detectNavbar = function () { return t(this._element).closest(".navbar").length > 0 }, l._getPopperConfig = function () { var t = this, e = {}; return "function" == typeof this._config.offset ? e.fn = function (e) { return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e } : e.offset = this._config.offset, { placement: this._getPlacement(), modifiers: { offset: e, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } } }, a._jQueryInterface = function (e) { return this.each(function () { var n = t(this).data(i); if (n || (n = new a(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) { if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"'); n[e]() } }) }, a._clearMenus = function (e) { if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) { var r = a._getParentFromElement(n[s]), o = t(n[s]).data(i), l = { relatedTarget: n[s] }; if (o) { var h = o._menu; if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) { var u = t.Event(c.HIDE, l); t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l))) } } } }, a._getParentFromElement = function (e) { var n, i = P.getSelectorFromElement(e); return i && (n = t(i)[0]), n || e.parentNode }, a._dataApiKeydownHandler = function (e) { if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) { var n = a._getParentFromElement(this), i = t(n).hasClass(f); if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) { var s = t(n).find(I).get(); if (0 !== s.length) { var r = s.indexOf(e.target); 38 === e.which && r > 0 && r-- , 40 === e.which && r < s.length - 1 && r++ , r < 0 && (r = 0), s[r].focus() } } else { if (27 === e.which) { var o = t(n).find(E)[0]; t(o).trigger("focus") } t(this).trigger("click") } } }, s(a, null, [{ key: "VERSION", get: function () { return "4.0.0" } }, { key: "Default", get: function () { return O } }, { key: "DefaultType", get: function () { return k } }]), a }(); return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function (e) { e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle") }).on(c.CLICK_DATA_API, T, function (t) { t.stopPropagation() }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function () { return t.fn[e] = l, L._jQueryInterface }, L }(e), M = function (t) { var e = "modal", n = "bs.modal", i = "." + n, o = t.fn.modal, a = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, l = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, h = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, FOCUSIN: "focusin" + i, RESIZE: "resize" + i, CLICK_DISMISS: "click.dismiss" + i, KEYDOWN_DISMISS: "keydown.dismiss" + i, MOUSEUP_DISMISS: "mouseup.dismiss" + i, MOUSEDOWN_DISMISS: "mousedown.dismiss" + i, CLICK_DATA_API: "click" + i + ".data-api" }, c = "modal-scrollbar-measure", u = "modal-backdrop", f = "modal-open", d = "fade", _ = "show", g = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" }, p = function () { function o(e, n) { this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0 } var p = o.prototype; return p.toggle = function (t) { return this._isShown ? this.hide() : this.show(t) }, p.show = function (e) { var n = this; if (!this._isTransitioning && !this._isShown) { P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0); var i = t.Event(h.SHOW, { relatedTarget: e }); t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function (t) { return n.hide(t) }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () { t(n._element).one(h.MOUSEUP_DISMISS, function (e) { t(e.target).is(n._element) && (n._ignoreBackdropClick = !0) }) }), this._showBackdrop(function () { return n._showElement(e) })) } }, p.hide = function (e) { var n = this; if (e && e.preventDefault(), !this._isTransitioning && this._isShown) { var i = t.Event(h.HIDE); if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) { this._isShown = !1; var s = P.supportsTransitionEnd() && t(this._element).hasClass(d); s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), s ? t(this._element).one(P.TRANSITION_END, function (t) { return n._hideModal(t) }).emulateTransitionEnd(300) : this._hideModal() } } }, p.dispose = function () { t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, p.handleUpdate = function () { this._adjustDialog() }, p._getConfig = function (t) { return t = r({}, a, t), P.typeCheckConfig(e, t, l), t }, p._showElement = function (e) { var n = this, i = P.supportsTransitionEnd() && t(this._element).hasClass(d); this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && P.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus(); var s = t.Event(h.SHOWN, { relatedTarget: e }), r = function () { n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s) }; i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r() }, p._enforceFocus = function () { var e = this; t(document).off(h.FOCUSIN).on(h.FOCUSIN, function (n) { document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus() }) }, p._setEscapeEvent = function () { var e = this; this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS) }, p._setResizeEvent = function () { var e = this; this._isShown ? t(window).on(h.RESIZE, function (t) { return e.handleUpdate(t) }) : t(window).off(h.RESIZE) }, p._hideModal = function () { var e = this; this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () { t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN) }) }, p._removeBackdrop = function () { this._backdrop && (t(this._backdrop).remove(), this._backdrop = null) }, p._showBackdrop = function (e) { var n = this, i = t(this._element).hasClass(d) ? d : ""; if (this._isShown && this._config.backdrop) { var s = P.supportsTransitionEnd() && i; if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function (t) { n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()) }), s && P.reflow(this._backdrop), t(this._backdrop).addClass(_), !e) return; if (!s) return void e(); t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150) } else if (!this._isShown && this._backdrop) { t(this._backdrop).removeClass(_); var r = function () { n._removeBackdrop(), e && e() }; P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r() } else e && e() }, p._adjustDialog = function () { var t = this._element.scrollHeight > document.documentElement.clientHeight; !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, p._resetAdjustments = function () { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, p._checkScrollbar = function () { var t = document.body.getBoundingClientRect(); this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, p._setScrollbar = function () { var e = this; if (this._isBodyOverflowing) { t(g.FIXED_CONTENT).each(function (n, i) { var s = t(i)[0].style.paddingRight, r = t(i).css("padding-right"); t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px") }), t(g.STICKY_CONTENT).each(function (n, i) { var s = t(i)[0].style.marginRight, r = t(i).css("margin-right"); t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px") }), t(g.NAVBAR_TOGGLER).each(function (n, i) { var s = t(i)[0].style.marginRight, r = t(i).css("margin-right"); t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px") }); var n = document.body.style.paddingRight, i = t("body").css("padding-right"); t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px") } }, p._resetScrollbar = function () { t(g.FIXED_CONTENT).each(function (e, n) { var i = t(n).data("padding-right"); "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right") }), t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (e, n) { var i = t(n).data("margin-right"); "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right") }); var e = t("body").data("padding-right"); "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right") }, p._getScrollbarWidth = function () { var t = document.createElement("div"); t.className = c, document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, o._jQueryInterface = function (e, i) { return this.each(function () { var s = t(this).data(n), a = r({}, o.Default, t(this).data(), "object" == typeof e && e); if (s || (s = new o(this, a), t(this).data(n, s)), "string" == typeof e) { if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"'); s[e](i) } else a.show && s.show(i) }) }, s(o, null, [{ key: "VERSION", get: function () { return "4.0.0" } }, { key: "Default", get: function () { return a } }]), o }(); return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) { var i, s = this, o = P.getSelectorFromElement(this); o && (i = t(o)[0]); var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(); var l = t(i).one(h.SHOW, function (e) { e.isDefaultPrevented() || l.one(h.HIDDEN, function () { t(s).is(":visible") && s.focus() }) }); p._jQueryInterface.call(t(i), a, this) }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function () { return t.fn.modal = o, p._jQueryInterface }, p }(e), U = function (t) { var e = "tooltip", i = "bs.tooltip", o = "." + i, a = t.fn[e], l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), h = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }, c = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }, u = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, f = "show", d = "out", _ = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, INSERTED: "inserted" + o, CLICK: "click" + o, FOCUSIN: "focusin" + o, FOCUSOUT: "focusout" + o, MOUSEENTER: "mouseenter" + o, MOUSELEAVE: "mouseleave" + o }, g = "fade", p = "show", m = ".tooltip-inner", v = ".arrow", E = "hover", T = "focus", y = "click", C = "manual", I = function () { function a(t, e) { if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)"); this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var I = a.prototype; return I.enable = function () { this._isEnabled = !0 }, I.disable = function () { this._isEnabled = !1 }, I.toggleEnabled = function () { this._isEnabled = !this._isEnabled }, I.toggle = function (e) { if (this._isEnabled) if (e) { var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n); i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i) } else { if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this); this._enter(null, this) } }, I.dispose = function () { clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, I.show = function () { var e = this; if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements"); var i = t.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { t(this.element).trigger(i); var s = t.contains(this.element.ownerDocument.documentElement, this.element); if (i.isDefaultPrevented() || !s) return; var r = this.getTipElement(), o = P.getUID(this.constructor.NAME); r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g); var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement, h = this._getAttachment(l); this.addAttachmentClass(h); var c = !1 === this.config.container ? document.body : t(this.config.container); t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, { placement: h, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: v }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function (t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function (t) { e._handlePopperPlacementChange(t) } }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop); var u = function () { e.config.animation && e._fixTransition(); var n = e._hoverState; e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e) }; P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u() } }, I.hide = function (e) { var n = this, i = this.getTipElement(), s = t.Event(this.constructor.Event.HIDE), r = function () { n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e() }; t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "") }, I.update = function () { null !== this._popper && this._popper.scheduleUpdate() }, I.isWithContent = function () { return Boolean(this.getTitle()) }, I.addAttachmentClass = function (e) { t(this.getTipElement()).addClass("bs-tooltip-" + e) }, I.getTipElement = function () { return this.tip = this.tip || t(this.config.template)[0], this.tip }, I.setContent = function () { var e = t(this.getTipElement()); this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p) }, I.setElementContent = function (e, n) { var i = this.config.html; "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n) }, I.getTitle = function () { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, I._getAttachment = function (t) { return c[t.toUpperCase()] }, I._setListeners = function () { var e = this; this.config.trigger.split(" ").forEach(function (n) { if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) { return e.toggle(t) }); else if (n !== C) { var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN, s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT; t(e.element).on(i, e.config.selector, function (t) { return e._enter(t) }).on(s, e.config.selector, function (t) { return e._leave(t) }) } t(e.element).closest(".modal").on("hide.bs.modal", function () { return e.hide() }) }), this.config.selector ? this.config = r({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, I._fixTitle = function () { var t = typeof this.element.getAttribute("data-original-title"); (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, I._enter = function (e, n) { var i = this.constructor.DATA_KEY; (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () { n._hoverState === f && n.show() }, n.config.delay.show) : n.show()) }, I._leave = function (e, n) { var i = this.constructor.DATA_KEY; (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () { n._hoverState === d && n.hide() }, n.config.delay.hide) : n.hide()) }, I._isWithActiveTrigger = function () { for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0; return !1 }, I._getConfig = function (n) { return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n }, I._getDelegateConfig = function () { var t = {}; if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, I._cleanTipClass = function () { var e = t(this.getTipElement()), n = e.attr("class").match(l); null !== n && n.length > 0 && e.removeClass(n.join("")) }, I._handlePopperPlacementChange = function (t) { this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, I._fixTransition = function () { var e = this.getTipElement(), n = this.config.animation; null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n) }, a._jQueryInterface = function (e) { return this.each(function () { var n = t(this).data(i), s = "object" == typeof e && e; if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) { if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"'); n[e]() } }) }, s(a, null, [{ key: "VERSION", get: function () { return "4.0.0" } }, { key: "Default", get: function () { return u } }, { key: "NAME", get: function () { return e } }, { key: "DATA_KEY", get: function () { return i } }, { key: "Event", get: function () { return _ } }, { key: "EVENT_KEY", get: function () { return o } }, { key: "DefaultType", get: function () { return h } }]), a }(); return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () { return t.fn[e] = a, I._jQueryInterface }, I }(e), x = function (t) { var e = "popover", n = "bs.popover", i = "." + n, o = t.fn[e], a = new RegExp("(^|\\s)bs-popover\\S+", "g"), l = r({}, U.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), h = r({}, U.DefaultType, { content: "(string|element|function)" }), c = "fade", u = "show", f = ".popover-header", d = ".popover-body", _ = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i }, g = function (r) { var o, g; function p() { return r.apply(this, arguments) || this } g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g; var m = p.prototype; return m.isWithContent = function () { return this.getTitle() || this._getContent() }, m.addAttachmentClass = function (e) { t(this.getTipElement()).addClass("bs-popover-" + e) }, m.getTipElement = function () { return this.tip = this.tip || t(this.config.template)[0], this.tip }, m.setContent = function () { var e = t(this.getTipElement()); this.setElementContent(e.find(f), this.getTitle()); var n = this._getContent(); "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u) }, m._getContent = function () { return this.element.getAttribute("data-content") || this.config.content }, m._cleanTipClass = function () { var e = t(this.getTipElement()), n = e.attr("class").match(a); null !== n && n.length > 0 && e.removeClass(n.join("")) }, p._jQueryInterface = function (e) { return this.each(function () { var i = t(this).data(n), s = "object" == typeof e ? e : null; if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) { if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"'); i[e]() } }) }, s(p, null, [{ key: "VERSION", get: function () { return "4.0.0" } }, { key: "Default", get: function () { return l } }, { key: "NAME", get: function () { return e } }, { key: "DATA_KEY", get: function () { return n } }, { key: "Event", get: function () { return _ } }, { key: "EVENT_KEY", get: function () { return i } }, { key: "DefaultType", get: function () { return h } }]), p }(U); return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () { return t.fn[e] = o, g._jQueryInterface }, g }(e), K = function (t) { var e = "scrollspy", n = "bs.scrollspy", i = "." + n, o = t.fn[e], a = { offset: 10, method: "auto", target: "" }, l = { offset: "number", method: "string", target: "(string|element)" }, h = { ACTIVATE: "activate" + i, SCROLL: "scroll" + i, LOAD_DATA_API: "load" + i + ".data-api" }, c = "dropdown-item", u = "active", f = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" }, d = "offset", _ = "position", g = function () { function o(e, n) { var i = this; this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function (t) { return i._process(t) }), this.refresh(), this._process() } var g = o.prototype; return g.refresh = function () { var e = this, n = this._scrollElement === this._scrollElement.window ? d : _, i = "auto" === this._config.method ? n : this._config.method, s = i === _ ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) { var n, r = P.getSelectorFromElement(e); if (r && (n = t(r)[0]), n) { var o = n.getBoundingClientRect(); if (o.width || o.height) return [t(n)[i]().top + s, r] } return null }).filter(function (t) { return t }).sort(function (t, e) { return t[0] - e[0] }).forEach(function (t) { e._offsets.push(t[0]), e._targets.push(t[1]) }) }, g.dispose = function () { t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, g._getConfig = function (n) { if ("string" != typeof (n = r({}, a, n)).target) { var i = t(n.target).attr("id"); i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i } return P.typeCheckConfig(e, n, l), n }, g._getScrollTop = function () { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, g._getScrollHeight = function () { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, g._getOffsetHeight = function () { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, g._process = function () { var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), t >= n) { var i = this._targets[this._targets.length - 1]; this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (var s = this._offsets.length; s--;) { this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]) } } }, g._activate = function (e) { this._activeTarget = e, this._clear(); var n = this._selector.split(","); n = n.map(function (t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }); var i = t(n.join(",")); i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, { relatedTarget: e }) }, g._clear = function () { t(this._selector).filter(f.ACTIVE).removeClass(u) }, o._jQueryInterface = function (e) { return this.each(function () { var i = t(this).data(n); if (i || (i = new o(this, "object" == typeof e && e), t(this).data(n, i)), "string" == typeof e) { if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"'); i[e]() } }) }, s(o, null, [{ key: "VERSION", get: function () { return "4.0.0" } }, { key: "Default", get: function () { return a } }]), o }(); return t(window).on(h.LOAD_DATA_API, function () { for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) { var i = t(e[n]); g._jQueryInterface.call(i, i.data()) } }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () { return t.fn[e] = o, g._jQueryInterface }, g }(e), V = function (t) { var e = "bs.tab", n = "." + e, i = t.fn.tab, r = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, CLICK_DATA_API: "click.bs.tab.data-api" }, o = "dropdown-menu", a = "active", l = "disabled", h = "fade", c = "show", u = ".dropdown", f = ".nav, .list-group", d = ".active", _ = "> li > .active", g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', p = ".dropdown-toggle", m = "> .dropdown-menu .active", v = function () { function n(t) { this._element = t } var i = n.prototype; return i.show = function () { var e = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) { var n, i, s = t(this._element).closest(f)[0], o = P.getSelectorFromElement(this._element); if (s) { var h = "UL" === s.nodeName ? _ : d; i = (i = t.makeArray(t(s).find(h)))[i.length - 1] } var c = t.Event(r.HIDE, { relatedTarget: this._element }), u = t.Event(r.SHOW, { relatedTarget: i }); if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) { o && (n = t(o)[0]), this._activate(this._element, s); var g = function () { var n = t.Event(r.HIDDEN, { relatedTarget: e._element }), s = t.Event(r.SHOWN, { relatedTarget: i }); t(i).trigger(n), t(e._element).trigger(s) }; n ? this._activate(n, n.parentNode, g) : g() } } }, i.dispose = function () { t.removeData(this._element, e), this._element = null }, i._activate = function (e, n, i) { var s = this, r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0], o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h), a = function () { return s._transitionComplete(e, r, i) }; r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a() }, i._transitionComplete = function (e, n, i) { if (n) { t(n).removeClass(c + " " + a); var s = t(n.parentNode).find(m)[0]; s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1) } if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) { var r = t(e).closest(u)[0]; r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0) } i && i() }, n._jQueryInterface = function (i) { return this.each(function () { var s = t(this), r = s.data(e); if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) { if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"'); r[i]() } }) }, s(n, null, [{ key: "VERSION", get: function () { return "4.0.0" } }]), n }(); return t(document).on(r.CLICK_DATA_API, g, function (e) { e.preventDefault(), v._jQueryInterface.call(t(this), "show") }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function () { return t.fn.tab = i, v._jQueryInterface }, v }(e); !function (t) { if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", { value: !0 }) });
//# sourceMappingURL=bootstrap.min.js.map
/*! jQuery Validation Plugin - v1.19.1 - 6/15/2019
 * https://jqueryvalidation.org/
 * Copyright (c) 2019 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
//! moment.js

; (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            global.moment = factory()
}(this, (function () {
    'use strict';

    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !== 'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({ unit: u, priority: priorities[u] });
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1 = /\d/;            //       0 - 9
    var match2 = /\d\d/;          //      00 - 99
    var match3 = /\d{3}/;         //     000 - 999
    var match4 = /\d{4}/;         //    0000 - 9999
    var match6 = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2 = /\d\d?/;         //       0 - 99
    var match3to4 = /\d\d\d\d?/;     //     999 - 9999
    var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3 = /\d{1,3}/;       //       0 - 999
    var match1to4 = /\d{1,4}/;       //       0 - 9999
    var match1to6 = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned = /\d+/;           //       0 - inf
    var matchSigned = /[+-]?\d+/;      //    -inf - inf

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort(m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin(m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !== 'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key + ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
                    a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                        a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                            a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE :
                                a[SECOND] < 0 || a[SECOND] > 59 ? SECOND :
                                    a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                                        -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () { };

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () { };

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
            0 :
            parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () { };

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                    'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                        diff < 2 ? 'nextDay' :
                            diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1(time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
                createLocal(time).isValid())) {
            return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
                createLocal(time).isValid())) {
            return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
            (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
            locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                    (b === 1) ? 'st' :
                        (b === 2) ? 'nd' :
                            (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month': return months;
                case 'quarter': return months / 3;
                case 'year': return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week': return days / 7 + milliseconds / 6048e5;
                case 'day': return days + milliseconds / 864e5;
                case 'hour': return days * 24 + milliseconds / 36e5;
                case 'minute': return days * 1440 + milliseconds / 6e4;
                case 'second': return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asQuarters = makeAs('Q');
    var asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s: 45,         // seconds to minute
        m: 45,         // minutes to hour
        h: 22,         // hours to day
        d: 26,         // days to month
        M: 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds = round(duration.as('s'));
        var minutes = round(duration.as('m'));
        var hours = round(duration.as('h'));
        var days = round(duration.as('d'));
        var months = round(duration.as('M'));
        var years = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds] ||
            seconds < thresholds.s && ['ss', seconds] ||
            minutes <= 1 && ['m'] ||
            minutes < thresholds.m && ['mm', minutes] ||
            hours <= 1 && ['h'] ||
            hours < thresholds.h && ['hh', hours] ||
            days <= 1 && ['d'] ||
            days < thresholds.d && ['dd', days] ||
            months <= 1 && ['M'] ||
            months < thresholds.M && ['MM', months] ||
            years <= 1 && ['y'] || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof (roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days = abs$1(this._days);
        var months = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));
/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs4/dt-1.10.18/b-1.5.6/b-html5-1.5.6/r-2.2.2
 *
 * Included libraries:
 *   DataTables 1.10.18, Buttons 1.5.6, HTML5 export 1.5.6, Responsive 2.2.2
 */

/*!
 DataTables 1.10.18
 ©2008-2018 SpryMedia Ltd - datatables.net/license
*/
(function (h) { "function" === typeof define && define.amd ? define(["jquery"], function (E) { return h(E, window, document) }) : "object" === typeof exports ? module.exports = function (E, H) { E || (E = window); H || (H = "undefined" !== typeof window ? require("jquery") : require("jquery")(E)); return h(H, E, E.document) } : h(jQuery, window, document) })(function (h, E, H, k) {
    function Z(a) {
        var b, c, d = {}; h.each(a, function (e) {
            if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()),
                d[c] = e, "o" === b[1] && Z(a[e])
        }); a._hungarianMap = d
    } function J(a, b, c) { a._hungarianMap || Z(a); var d; h.each(b, function (e) { d = a._hungarianMap[e]; if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), J(a[d], b[d], c)) : b[d] = b[e] }) } function Ca(a) {
        var b = n.defaults.oLanguage, c = b.sDecimal; c && Da(c); if (a) {
            var d = a.sZeroRecords; !a.sEmptyTable && (d && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable"); !a.sLoadingRecords && (d && "Loading..." === b.sLoadingRecords) && F(a,
                a, "sZeroRecords", "sLoadingRecords"); a.sInfoThousands && (a.sThousands = a.sInfoThousands); (a = a.sDecimal) && c !== a && Da(a)
        }
    } function eb(a) {
        A(a, "ordering", "bSort"); A(a, "orderMulti", "bSortMulti"); A(a, "orderClasses", "bSortClasses"); A(a, "orderCellsTop", "bSortCellsTop"); A(a, "order", "aaSorting"); A(a, "orderFixed", "aaSortingFixed"); A(a, "paging", "bPaginate"); A(a, "pagingType", "sPaginationType"); A(a, "pageLength", "iDisplayLength"); A(a, "searching", "bFilter"); "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" :
            ""); "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : ""); if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++)a[b] && J(n.models.oSearch, a[b])
    } function fb(a) { A(a, "orderable", "bSortable"); A(a, "orderData", "aDataSort"); A(a, "orderSequence", "asSorting"); A(a, "orderDataType", "sortDataType"); var b = a.aDataSort; "number" === typeof b && !h.isArray(b) && (a.aDataSort = [b]) } function gb(a) {
        if (!n.__browser) {
            var b = {}; n.__browser = b; var c = h("<div/>").css({
                position: "fixed", top: 0, left: -1 * h(E).scrollLeft(), height: 1, width: 1,
                overflow: "hidden"
            }).append(h("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(h("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"), d = c.children(), e = d.children(); b.barWidth = d[0].offsetWidth - d[0].clientWidth; b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth; b.bScrollbarLeft = 1 !== Math.round(e.offset().left); b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1; c.remove()
        } h.extend(a.oBrowser, n.__browser); a.oScroll.iBarWidth = n.__browser.barWidth
    }
    function hb(a, b, c, d, e, f) { var g, j = !1; c !== k && (g = c, j = !0); for (; d !== e;)a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f); return g } function Ea(a, b) { var c = n.defaults.column, d = a.aoColumns.length, c = h.extend({}, n.models.oColumn, c, { nTh: b ? b : H.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d }); a.aoColumns.push(c); c = a.aoPreSearchCols; c[d] = h.extend({}, n.models.oSearch, c[d]); ka(a, d, h(b).data()) } function ka(a, b, c) {
        var b = a.aoColumns[b],
        d = a.oClasses, e = h(b.nTh); if (!b.sWidthOrig) { b.sWidthOrig = e.attr("width") || null; var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/); f && (b.sWidthOrig = f[1]) } c !== k && null !== c && (fb(c), J(n.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort")); var g = b.mData, j = S(g), i = b.mRender ?
            S(b.mRender) : null, c = function (a) { return "string" === typeof a && -1 !== a.indexOf("@") }; b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter)); b._setter = null; b.fnGetData = function (a, b, c) { var d = j(a, b, k, c); return i && b ? i(d, b, a, c) : d }; b.fnSetData = function (a, b, c) { return N(g)(a, b, c) }; "number" !== typeof g && (a._rowReadObject = !0); a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone)); a = -1 !== h.inArray("asc", b.asSorting); c = -1 !== h.inArray("desc", b.asSorting); !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone,
                b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
    } function $(a) { if (!1 !== a.oFeatures.bAutoWidth) { var b = a.aoColumns; Fa(a); for (var c = 0, d = b.length; c < d; c++)b[c].nTh.style.width = b[c].sWidth } b = a.oScroll; ("" !== b.sY || "" !== b.sX) && la(a); r(a, null, "column-sizing", [a]) } function aa(a, b) {
        var c = ma(a, "bVisible"); return "number" ===
            typeof c[b] ? c[b] : null
    } function ba(a, b) { var c = ma(a, "bVisible"), c = h.inArray(b, c); return -1 !== c ? c : null } function V(a) { var b = 0; h.each(a.aoColumns, function (a, d) { d.bVisible && "none" !== h(d.nTh).css("display") && b++ }); return b } function ma(a, b) { var c = []; h.map(a.aoColumns, function (a, e) { a[b] && c.push(e) }); return c } function Ga(a) {
        var b = a.aoColumns, c = a.aoData, d = n.ext.type.detect, e, f, g, j, i, h, l, q, t; e = 0; for (f = b.length; e < f; e++)if (l = b[e], t = [], !l.sType && l._sManualType) l.sType = l._sManualType; else if (!l.sType) {
            g = 0; for (j = d.length; g <
                j; g++) { i = 0; for (h = c.length; i < h; i++) { t[i] === k && (t[i] = B(a, i, e, "type")); q = d[g](t[i], a); if (!q && g !== d.length - 1) break; if ("html" === q) break } if (q) { l.sType = q; break } } l.sType || (l.sType = "string")
        }
    } function ib(a, b, c, d) {
        var e, f, g, j, i, m, l = a.aoColumns; if (b) for (e = b.length - 1; 0 <= e; e--) {
            m = b[e]; var q = m.targets !== k ? m.targets : m.aTargets; h.isArray(q) || (q = [q]); f = 0; for (g = q.length; f < g; f++)if ("number" === typeof q[f] && 0 <= q[f]) { for (; l.length <= q[f];)Ea(a); d(q[f], m) } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length + q[f], m); else if ("string" ===
                typeof q[f]) { j = 0; for (i = l.length; j < i; j++)("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) && d(j, m) }
        } if (c) { e = 0; for (a = c.length; e < a; e++)d(e, c[e]) }
    } function O(a, b, c, d) { var e = a.aoData.length, f = h.extend(!0, {}, n.models.oRow, { src: c ? "dom" : "data", idx: e }); f._aData = b; a.aoData.push(f); for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++)g[j].sType = null; a.aiDisplayMaster.push(e); b = a.rowIdFn(b); b !== k && (a.aIds[b] = f); (c || !a.oFeatures.bDeferRender) && Ha(a, e, c, d); return e } function na(a, b) {
        var c; b instanceof h || (b = h(b)); return b.map(function (b,
            e) { c = Ia(a, e); return O(a, c.data, e, c.cells) })
    } function B(a, b, c, d) { var e = a.iDraw, f = a.aoColumns[c], g = a.aoData[b]._aData, j = f.sDefaultContent, i = f.fnGetData(g, d, { settings: a, row: b, col: c }); if (i === k) return a.iDrawError != e && null === j && (K(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j; if ((i === g || null === i) && null !== j && d !== k) i = j; else if ("function" === typeof i) return i.call(g); return null === i && "display" == d ? "" : i } function jb(a,
        b, c, d) { a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, { settings: a, row: b, col: c }) } function Ja(a) { return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) { return a.replace(/\\\./g, ".") }) } function S(a) {
            if (h.isPlainObject(a)) { var b = {}; h.each(a, function (a, c) { c && (b[a] = S(c)) }); return function (a, c, f, g) { var j = b[c] || b._; return j !== k ? j(a, c, f, g) : a } } if (null === a) return function (a) { return a }; if ("function" === typeof a) return function (b, c, f, g) { return a(b, c, f, g) }; if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") ||
                -1 !== a.indexOf("("))) { var c = function (a, b, f) { var g, j; if ("" !== f) { j = Ja(f); for (var i = 0, m = j.length; i < m; i++) { f = j[i].match(ca); g = j[i].match(W); if (f) { j[i] = j[i].replace(ca, ""); "" !== j[i] && (a = a[j[i]]); g = []; j.splice(0, i + 1); j = j.join("."); if (h.isArray(a)) { i = 0; for (m = a.length; i < m; i++)g.push(c(a[i], b, j)) } a = f[0].substring(1, f[0].length - 1); a = "" === a ? g : g.join(a); break } else if (g) { j[i] = j[i].replace(W, ""); a = a[j[i]](); continue } if (null === a || a[j[i]] === k) return k; a = a[j[i]] } } return a }; return function (b, e) { return c(b, e, a) } } return function (b) { return b[a] }
        }
    function N(a) {
        if (h.isPlainObject(a)) return N(a._); if (null === a) return function () { }; if ("function" === typeof a) return function (b, d, e) { a(b, "set", d, e) }; if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var b = function (a, d, e) {
                var e = Ja(e), f; f = e[e.length - 1]; for (var g, j, i = 0, m = e.length - 1; i < m; i++) {
                    g = e[i].match(ca); j = e[i].match(W); if (g) {
                    e[i] = e[i].replace(ca, ""); a[e[i]] = []; f = e.slice(); f.splice(0, i + 1); g = f.join("."); if (h.isArray(d)) {
                        j = 0; for (m = d.length; j < m; j++)f = {}, b(f, d[j], g),
                            a[e[i]].push(f)
                    } else a[e[i]] = d; return
                    } j && (e[i] = e[i].replace(W, ""), a = a[e[i]](d)); if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {}; a = a[e[i]]
                } if (f.match(W)) a[f.replace(W, "")](d); else a[f.replace(ca, "")] = d
            }; return function (c, d) { return b(c, d, a) }
        } return function (b, d) { b[a] = d }
    } function Ka(a) { return D(a.aoData, "_aData") } function oa(a) { a.aoData.length = 0; a.aiDisplayMaster.length = 0; a.aiDisplay.length = 0; a.aIds = {} } function pa(a, b, c) {
        for (var d = -1, e = 0, f = a.length; e < f; e++)a[e] == b ? d = e : a[e] > b && a[e]--; -1 != d && c === k && a.splice(d,
            1)
    } function da(a, b, c, d) { var e = a.aoData[b], f, g = function (c, d) { for (; c.childNodes.length;)c.removeChild(c.firstChild); c.innerHTML = B(a, b, d, "display") }; if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ia(a, e, d, d === k ? k : e._aData).data; else { var j = e.anCells; if (j) if (d !== k) g(j[d], d); else { c = 0; for (f = j.length; c < f; c++)g(j[c], c) } } e._aSortData = null; e._aFilterData = null; g = a.aoColumns; if (d !== k) g[d].sType = null; else { c = 0; for (f = g.length; c < f; c++)g[c].sType = null; La(a, e) } } function Ia(a, b, c, d) {
        var e = [], f = b.firstChild, g,
        j, i = 0, m, l = a.aoColumns, q = a._rowReadObject, d = d !== k ? d : q ? {} : [], t = function (a, b) { if ("string" === typeof a) { var c = a.indexOf("@"); -1 !== c && (c = a.substring(c + 1), N(a)(d, b.getAttribute(c))) } }, G = function (a) { if (c === k || c === i) j = l[i], m = h.trim(a.innerHTML), j && j._bAttrSrc ? (N(j.mData._)(d, m), t(j.mData.sort, a), t(j.mData.type, a), t(j.mData.filter, a)) : q ? (j._setter || (j._setter = N(j.mData)), j._setter(d, m)) : d[i] = m; i++ }; if (f) for (; f;) { g = f.nodeName.toUpperCase(); if ("TD" == g || "TH" == g) G(f), e.push(f); f = f.nextSibling } else {
            e = b.anCells;
            f = 0; for (g = e.length; f < g; f++)G(e[f])
        } if (b = b.firstChild ? b : b.nTr) (b = b.getAttribute("id")) && N(a.rowId)(d, b); return { data: d, cells: e }
    } function Ha(a, b, c, d) {
        var e = a.aoData[b], f = e._aData, g = [], j, i, m, l, q; if (null === e.nTr) {
            j = c || H.createElement("tr"); e.nTr = j; e.anCells = g; j._DT_RowIndex = b; La(a, e); l = 0; for (q = a.aoColumns.length; l < q; l++) {
                m = a.aoColumns[l]; i = c ? d[l] : H.createElement(m.sCellType); i._DT_CellIndex = { row: b, column: l }; g.push(i); if ((!c || m.mRender || m.mData !== l) && (!h.isPlainObject(m.mData) || m.mData._ !== l + ".display")) i.innerHTML =
                    B(a, b, l, "display"); m.sClass && (i.className += " " + m.sClass); m.bVisible && !c ? j.appendChild(i) : !m.bVisible && c && i.parentNode.removeChild(i); m.fnCreatedCell && m.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l)
            } r(a, "aoRowCreatedCallback", null, [j, f, b, g])
        } e.nTr.setAttribute("role", "row")
    } function La(a, b) {
        var c = b.nTr, d = b._aData; if (c) {
            var e = a.rowIdFn(d); e && (c.id = e); d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? qa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && h(c).attr(d.DT_RowAttr); d.DT_RowData && h(c).data(d.DT_RowData)
        }
    } function kb(a) {
        var b, c, d, e, f, g = a.nTHead, j = a.nTFoot, i = 0 === h("th, td", g).length, m = a.oClasses, l = a.aoColumns; i && (e = h("<tr/>").appendTo(g)); b = 0; for (c = l.length; b < c; b++)f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Ma(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Na(a, "header")(a, d,
            f, m); i && ea(a.aoHeader, g); h(g).find(">tr").attr("role", "row"); h(g).find(">tr>th, >tr>td").addClass(m.sHeaderTH); h(j).find(">tr>th, >tr>td").addClass(m.sFooterTH); if (null !== j) { a = a.aoFooter[0]; b = 0; for (c = a.length; b < c; b++)f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass) }
    } function fa(a, b, c) {
        var d, e, f, g = [], j = [], i = a.aoColumns.length, m; if (b) {
        c === k && (c = !1); d = 0; for (e = b.length; d < e; d++) { g[d] = b[d].slice(); g[d].nTr = b[d].nTr; for (f = i - 1; 0 <= f; f--)!a.aoColumns[f].bVisible && !c && g[d].splice(f, 1); j.push([]) } d =
            0; for (e = g.length; d < e; d++) { if (a = g[d].nTr) for (; f = a.firstChild;)a.removeChild(f); f = 0; for (b = g[d].length; f < b; f++)if (m = i = 1, j[d][f] === k) { a.appendChild(g[d][f].cell); for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;)j[d + i][f] = 1, i++; for (; g[d][f + m] !== k && g[d][f].cell == g[d][f + m].cell;) { for (c = 0; c < i; c++)j[d + c][f + m] = 1; m++ } h(g[d][f].cell).attr("rowspan", i).attr("colspan", m) } }
        }
    } function P(a) {
        var b = r(a, "aoPreDrawCallback", "preDraw", [a]); if (-1 !== h.inArray(!1, b)) C(a, !1); else {
            var b = [], c = 0, d = a.asStripeClasses, e =
                d.length, f = a.oLanguage, g = a.iInitDisplayStart, j = "ssp" == y(a), i = a.aiDisplay; a.bDrawing = !0; g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1); var g = a._iDisplayStart, m = a.fnDisplayEnd(); if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++ , C(a, !1); else if (j) { if (!a.bDestroying && !lb(a)) return } else a.iDraw++; if (0 !== i.length) {
                    f = j ? a.aoData.length : m; for (j = j ? 0 : g; j < f; j++) {
                        var l = i[j], q = a.aoData[l]; null === q.nTr && Ha(a, l); var t = q.nTr; if (0 !== e) {
                            var G = d[c % e]; q._sRowStripe != G && (h(t).removeClass(q._sRowStripe).addClass(G),
                                q._sRowStripe = G)
                        } r(a, "aoRowCallback", null, [t, q._aData, c, j, l]); b.push(t); c++
                    }
                } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", { "class": e ? d[0] : "" }).append(h("<td />", { valign: "top", colSpan: V(a), "class": a.oClasses.sRowEmpty }).html(c))[0]; r(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ka(a), g, m, i]); r(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ka(a), g, m, i]); d = h(a.nTBody); d.children().detach();
            d.append(h(b)); r(a, "aoDrawCallback", "draw", [a]); a.bSorted = !1; a.bFiltered = !1; a.bDrawing = !1
        }
    } function T(a, b) { var c = a.oFeatures, d = c.bFilter; c.bSort && mb(a); d ? ga(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice(); !0 !== b && (a._iDisplayStart = 0); a._drawHold = b; P(a); a._drawHold = !1 } function nb(a) {
        var b = a.oClasses, c = h(a.nTable), c = h("<div/>").insertBefore(c), d = a.oFeatures, e = h("<div/>", { id: a.sTableId + "_wrapper", "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) }); a.nHolding = c[0]; a.nTableWrapper = e[0]; a.nTableReinsertBefore =
            a.nTable.nextSibling; for (var f = a.sDom.split(""), g, j, i, m, l, q, k = 0; k < f.length; k++) {
                g = null; j = f[k]; if ("<" == j) { i = h("<div/>")[0]; m = f[k + 1]; if ("'" == m || '"' == m) { l = ""; for (q = 2; f[k + q] != m;)l += f[k + q], q++; "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); -1 != l.indexOf(".") ? (m = l.split("."), i.id = m[0].substr(1, m[0].length - 1), i.className = m[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l; k += q } e.append(i); e = h(i) } else if (">" == j) e = e.parent(); else if ("l" == j && d.bPaginate && d.bLengthChange) g = ob(a); else if ("f" == j &&
                    d.bFilter) g = pb(a); else if ("r" == j && d.bProcessing) g = qb(a); else if ("t" == j) g = rb(a); else if ("i" == j && d.bInfo) g = sb(a); else if ("p" == j && d.bPaginate) g = tb(a); else if (0 !== n.ext.feature.length) { i = n.ext.feature; q = 0; for (m = i.length; q < m; q++)if (j == i[q].cFeature) { g = i[q].fnInit(a); break } } g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g))
            } c.replaceWith(e); a.nHolding = null
    } function ea(a, b) {
        var c = h(b).children("tr"), d, e, f, g, j, i, m, l, q, k; a.splice(0, a.length); f = 0; for (i = c.length; f < i; f++)a.push([]); f = 0; for (i = c.length; f <
            i; f++) { d = c[f]; for (e = d.firstChild; e;) { if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) { l = 1 * e.getAttribute("colspan"); q = 1 * e.getAttribute("rowspan"); l = !l || 0 === l || 1 === l ? 1 : l; q = !q || 0 === q || 1 === q ? 1 : q; g = 0; for (j = a[f]; j[g];)g++; m = g; k = 1 === l ? !0 : !1; for (j = 0; j < l; j++)for (g = 0; g < q; g++)a[f + g][m + j] = { cell: e, unique: k }, a[f + g].nTr = d } e = e.nextSibling } }
    } function ra(a, b, c) {
        var d = []; c || (c = a.aoHeader, b && (c = [], ea(c, b))); for (var b = 0, e = c.length; b < e; b++)for (var f = 0, g = c[b].length; f < g; f++)if (c[b][f].unique && (!d[f] ||
            !a.bSortCellsTop)) d[f] = c[b][f].cell; return d
    } function sa(a, b, c) {
        r(a, "aoServerParams", "serverParams", [b]); if (b && h.isArray(b)) { var d = {}, e = /(.*?)\[\]$/; h.each(b, function (a, b) { var c = b.name.match(e); c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value }); b = d } var f, g = a.ajax, j = a.oInstance, i = function (b) { r(a, null, "xhr", [a, b, a.jqXHR]); c(b) }; if (h.isPlainObject(g) && g.data) { f = g.data; var m = "function" === typeof f ? f(b, a) : f, b = "function" === typeof f && m ? m : h.extend(!0, b, m); delete g.data } m = {
            data: b, success: function (b) {
                var c =
                    b.error || b.sError; c && K(a, 0, c); a.json = b; i(b)
            }, dataType: "json", cache: !1, type: a.sServerMethod, error: function (b, c) { var d = r(a, null, "xhr", [a, null, a.jqXHR]); -1 === h.inArray(!0, d) && ("parsererror" == c ? K(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && K(a, 0, "Ajax error", 7)); C(a, !1) }
        }; a.oAjaxData = b; r(a, null, "preXhr", [a, b]); a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function (a, b) { return { name: b, value: a } }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(m, { url: g || a.sAjaxSource })) :
            "function" === typeof g ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(m, g)), g.data = f)
    } function lb(a) { return a.bAjaxDataGet ? (a.iDraw++ , C(a, !0), sa(a, ub(a), function (b) { vb(a, b) }), !1) : !0 } function ub(a) {
        var b = a.aoColumns, c = b.length, d = a.oFeatures, e = a.oPreviousSearch, f = a.aoPreSearchCols, g, j = [], i, m, l, k = X(a); g = a._iDisplayStart; i = !1 !== d.bPaginate ? a._iDisplayLength : -1; var t = function (a, b) { j.push({ name: a, value: b }) }; t("sEcho", a.iDraw); t("iColumns", c); t("sColumns", D(b, "sName").join(",")); t("iDisplayStart", g); t("iDisplayLength",
            i); var G = { draw: a.iDraw, columns: [], order: [], start: g, length: i, search: { value: e.sSearch, regex: e.bRegex } }; for (g = 0; g < c; g++)m = b[g], l = f[g], i = "function" == typeof m.mData ? "function" : m.mData, G.columns.push({ data: i, name: m.sName, searchable: m.bSearchable, orderable: m.bSortable, search: { value: l.sSearch, regex: l.bRegex } }), t("mDataProp_" + g, i), d.bFilter && (t("sSearch_" + g, l.sSearch), t("bRegex_" + g, l.bRegex), t("bSearchable_" + g, m.bSearchable)), d.bSort && t("bSortable_" + g, m.bSortable); d.bFilter && (t("sSearch", e.sSearch), t("bRegex",
                e.bRegex)); d.bSort && (h.each(k, function (a, b) { G.order.push({ column: b.col, dir: b.dir }); t("iSortCol_" + a, b.col); t("sSortDir_" + a, b.dir) }), t("iSortingCols", k.length)); b = n.ext.legacy.ajax; return null === b ? a.sAjaxSource ? j : G : b ? j : G
    } function vb(a, b) {
        var c = ta(a, b), d = b.sEcho !== k ? b.sEcho : b.draw, e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal, f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered; if (d) { if (1 * d < a.iDraw) return; a.iDraw = 1 * d } oa(a); a._iRecordsTotal = parseInt(e, 10); a._iRecordsDisplay = parseInt(f,
            10); d = 0; for (e = c.length; d < e; d++)O(a, c[d]); a.aiDisplay = a.aiDisplayMaster.slice(); a.bAjaxDataGet = !1; P(a); a._bInitComplete || ua(a, b); a.bAjaxDataGet = !0; C(a, !1)
    } function ta(a, b) { var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp; return "data" === c ? b.aaData || b[c] : "" !== c ? S(c)(b) : b } function pb(a) {
        var b = a.oClasses, c = a.sTableId, d = a.oLanguage, e = a.oPreviousSearch, f = a.aanFeatures, g = '<input type="search" class="' + b.sFilterInput + '"/>', j = d.sSearch, j = j.match(/_INPUT_/) ? j.replace("_INPUT_",
            g) : j + g, b = h("<div/>", { id: !f.f ? c + "_filter" : null, "class": b.sFilter }).append(h("<label/>").append(j)), f = function () { var b = !this.value ? "" : this.value; b != e.sSearch && (ga(a, { sSearch: b, bRegex: e.bRegex, bSmart: e.bSmart, bCaseInsensitive: e.bCaseInsensitive }), a._iDisplayStart = 0, P(a)) }, g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0, i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Oa(f, g) : f).on("keypress.DT", function (a) { if (13 == a.keyCode) return !1 }).attr("aria-controls",
                c); h(a.nTable).on("search.dt.DT", function (b, c) { if (a === c) try { i[0] !== H.activeElement && i.val(e.sSearch) } catch (d) { } }); return b[0]
    } function ga(a, b, c) {
        var d = a.oPreviousSearch, e = a.aoPreSearchCols, f = function (a) { d.sSearch = a.sSearch; d.bRegex = a.bRegex; d.bSmart = a.bSmart; d.bCaseInsensitive = a.bCaseInsensitive }; Ga(a); if ("ssp" != y(a)) {
            wb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive); f(b); for (b = 0; b < e.length; b++)xb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex,
                e[b].bSmart, e[b].bCaseInsensitive); yb(a)
        } else f(b); a.bFiltered = !0; r(a, null, "search", [a])
    } function yb(a) { for (var b = n.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) { for (var j = [], i = 0, m = c.length; i < m; i++)e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e); c.length = 0; h.merge(c, j) } } function xb(a, b, c, d, e, f) { if ("" !== b) { for (var g = [], j = a.aiDisplay, d = Pa(b, d, e, f), e = 0; e < j.length; e++)b = a.aoData[j[e]]._aFilterData[c], d.test(b) && g.push(j[e]); a.aiDisplay = g } } function wb(a, b, c, d, e, f) {
        var d = Pa(b,
            d, e, f), f = a.oPreviousSearch.sSearch, g = a.aiDisplayMaster, j, e = []; 0 !== n.ext.search.length && (c = !0); j = zb(a); if (0 >= b.length) a.aiDisplay = g.slice(); else { if (j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice(); b = a.aiDisplay; for (c = 0; c < b.length; c++)d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]); a.aiDisplay = e }
    } function Pa(a, b, c, d) {
        a = b ? a : Qa(a); c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
            if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/), a = b ? b[1] : a; return a.replace('"',
                "")
        }).join(")(?=.*?") + ").*$"); return RegExp(a, d ? "i" : "")
    } function zb(a) {
        var b = a.aoColumns, c, d, e, f, g, j, i, h, l = n.ext.type.search; c = !1; d = 0; for (f = a.aoData.length; d < f; d++)if (h = a.aoData[d], !h._aFilterData) {
            j = []; e = 0; for (g = b.length; e < g; e++)c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (va.innerHTML = i, i = Wb ? va.textContent : va.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
            h._aFilterData = j; h._sFilterRow = j.join("  "); c = !0
        } return c
    } function Ab(a) { return { search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive } } function Bb(a) { return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive } } function sb(a) {
        var b = a.sTableId, c = a.aanFeatures.i, d = h("<div/>", { "class": a.oClasses.sInfo, id: !c ? b + "_info" : null }); c || (a.aoDrawCallback.push({ fn: Cb, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby",
            b + "_info")); return d[0]
    } function Cb(a) { var b = a.aanFeatures.i; if (0 !== b.length) { var c = a.oLanguage, d = a._iDisplayStart + 1, e = a.fnDisplayEnd(), f = a.fnRecordsTotal(), g = a.fnRecordsDisplay(), j = g ? c.sInfo : c.sInfoEmpty; g !== f && (j += " " + c.sInfoFiltered); j += c.sInfoPostFix; j = Db(a, j); c = c.fnInfoCallback; null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j)); h(b).html(j) } } function Db(a, b) {
        var c = a.fnFormatNumber, d = a._iDisplayStart + 1, e = a._iDisplayLength, f = a.fnRecordsDisplay(), g = -1 === e; return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g,
            c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
    } function ha(a) {
        var b, c, d = a.iInitDisplayStart, e = a.aoColumns, f; c = a.oFeatures; var g = a.bDeferLoading; if (a.bInitialised) {
            nb(a); kb(a); fa(a, a.aoHeader); fa(a, a.aoFooter); C(a, !0); c.bAutoWidth && Fa(a); b = 0; for (c = e.length; b < c; b++)f = e[b], f.sWidth && (f.nTh.style.width = v(f.sWidth)); r(a, null, "preInit", [a]); T(a); e =
                y(a); if ("ssp" != e || g) "ajax" == e ? sa(a, [], function (c) { var f = ta(a, c); for (b = 0; b < f.length; b++)O(a, f[b]); a.iInitDisplayStart = d; T(a); C(a, !1); ua(a, c) }, a) : (C(a, !1), ua(a))
        } else setTimeout(function () { ha(a) }, 200)
    } function ua(a, b) { a._bInitComplete = !0; (b || a.oInit.aaData) && $(a); r(a, null, "plugin-init", [a, b]); r(a, "aoInitComplete", "init", [a, b]) } function Ra(a, b) { var c = parseInt(b, 10); a._iDisplayLength = c; Sa(a); r(a, null, "length", [a, c]) } function ob(a) {
        for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f =
            e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", { name: c + "_length", "aria-controls": c, "class": b.sLengthSelect }), g = 0, j = f.length; g < j; g++)e[0][g] = new Option("number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], f[g]); var i = h("<div><label/></div>").addClass(b.sLength); a.aanFeatures.l || (i[0].id = c + "_length"); i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)); h("select", i).val(a._iDisplayLength).on("change.DT", function () { Ra(a, h(this).val()); P(a) }); h(a.nTable).on("length.dt.DT", function (b, c, d) {
            a ===
                c && h("select", i).val(d)
            }); return i[0]
    } function tb(a) {
        var b = a.sPaginationType, c = n.ext.pager[b], d = "function" === typeof c, e = function (a) { P(a) }, b = h("<div/>").addClass(a.oClasses.sPaging + b)[0], f = a.aanFeatures; d || c.fnInit(a, b, e); f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
            fn: function (a) {
                if (d) { var b = a._iDisplayStart, i = a._iDisplayLength, h = a.fnRecordsDisplay(), l = -1 === i, b = l ? 0 : Math.ceil(b / i), i = l ? 1 : Math.ceil(h / i), h = c(b, i), k, l = 0; for (k = f.p.length; l < k; l++)Na(a, "pageButton")(a, f.p[l], l, h, b, i) } else c.fnUpdate(a,
                    e)
            }, sName: "pagination"
        })); return b
    } function Ta(a, b, c) { var d = a._iDisplayStart, e = a._iDisplayLength, f = a.fnRecordsDisplay(); 0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : K(a, 0, "Unknown paging action: " + b, 5); b = a._iDisplayStart !== d; a._iDisplayStart = d; b && (r(a, null, "page", [a]), c && P(a)); return b } function qb(a) { return h("<div/>", { id: !a.aanFeatures.r ? a.sTableId + "_processing" : null, "class": a.oClasses.sProcessing }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0] }
    function C(a, b) { a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none"); r(a, null, "processing", [a, b]) } function rb(a) {
        var b = h(a.nTable); b.attr("role", "grid"); var c = a.oScroll; if ("" === c.sX && "" === c.sY) return a.nTable; var d = c.sX, e = c.sY, f = a.oClasses, g = b.children("caption"), j = g.length ? g[0]._captionSide : null, i = h(b[0].cloneNode(!1)), m = h(b[0].cloneNode(!1)), l = b.children("tfoot"); l.length || (l = null); i = h("<div/>", { "class": f.sScrollWrapper }).append(h("<div/>", { "class": f.sScrollHead }).css({
            overflow: "hidden",
            position: "relative", border: 0, width: d ? !d ? null : v(d) : "100%"
        }).append(h("<div/>", { "class": f.sScrollHeadInner }).css({ "box-sizing": "content-box", width: c.sXInner || "100%" }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", { "class": f.sScrollBody }).css({ position: "relative", overflow: "auto", width: !d ? null : v(d) }).append(b)); l && i.append(h("<div/>", { "class": f.sScrollFoot }).css({ overflow: "hidden", border: 0, width: d ? !d ? null : v(d) : "100%" }).append(h("<div/>",
            { "class": f.sScrollFootInner }).append(m.removeAttr("id").css("margin-left", 0).append("bottom" === j ? g : null).append(b.children("tfoot"))))); var b = i.children(), k = b[0], f = b[1], t = l ? b[2] : null; if (d) h(f).on("scroll.DT", function () { var a = this.scrollLeft; k.scrollLeft = a; l && (t.scrollLeft = a) }); h(f).css(e && c.bCollapse ? "max-height" : "height", e); a.nScrollHead = k; a.nScrollBody = f; a.nScrollFoot = t; a.aoDrawCallback.push({ fn: la, sName: "scrolling" }); return i[0]
    } function la(a) {
        var b = a.oScroll, c = b.sX, d = b.sXInner, e = b.sY, b = b.iBarWidth,
        f = h(a.nScrollHead), g = f[0].style, j = f.children("div"), i = j[0].style, m = j.children("table"), j = a.nScrollBody, l = h(j), q = j.style, t = h(a.nScrollFoot).children("div"), n = t.children("table"), o = h(a.nTHead), p = h(a.nTable), s = p[0], r = s.style, u = a.nTFoot ? h(a.nTFoot) : null, x = a.oBrowser, U = x.bScrollOversize, Xb = D(a.aoColumns, "nTh"), Q, L, R, w, Ua = [], y = [], z = [], A = [], B, C = function (a) { a = a.style; a.paddingTop = "0"; a.paddingBottom = "0"; a.borderTopWidth = "0"; a.borderBottomWidth = "0"; a.height = 0 }; L = j.scrollHeight > j.clientHeight; if (a.scrollBarVis !==
            L && a.scrollBarVis !== k) a.scrollBarVis = L, $(a); else {
            a.scrollBarVis = L; p.children("thead, tfoot").remove(); u && (R = u.clone().prependTo(p), Q = u.find("tr"), R = R.find("tr")); w = o.clone().prependTo(p); o = o.find("tr"); L = w.find("tr"); w.find("th, td").removeAttr("tabindex"); c || (q.width = "100%", f[0].style.width = "100%"); h.each(ra(a, w), function (b, c) { B = aa(a, b); c.style.width = a.aoColumns[B].sWidth }); u && I(function (a) { a.style.width = "" }, R); f = p.outerWidth(); if ("" === c) {
            r.width = "100%"; if (U && (p.find("tbody").height() > j.offsetHeight ||
                "scroll" == l.css("overflow-y"))) r.width = v(p.outerWidth() - b); f = p.outerWidth()
            } else "" !== d && (r.width = v(d), f = p.outerWidth()); I(C, L); I(function (a) { z.push(a.innerHTML); Ua.push(v(h(a).css("width"))) }, L); I(function (a, b) { if (h.inArray(a, Xb) !== -1) a.style.width = Ua[b] }, o); h(L).height(0); u && (I(C, R), I(function (a) { A.push(a.innerHTML); y.push(v(h(a).css("width"))) }, R), I(function (a, b) { a.style.width = y[b] }, Q), h(R).height(0)); I(function (a, b) {
            a.innerHTML = '<div class="dataTables_sizing">' + z[b] + "</div>"; a.childNodes[0].style.height =
                "0"; a.childNodes[0].style.overflow = "hidden"; a.style.width = Ua[b]
            }, L); u && I(function (a, b) { a.innerHTML = '<div class="dataTables_sizing">' + A[b] + "</div>"; a.childNodes[0].style.height = "0"; a.childNodes[0].style.overflow = "hidden"; a.style.width = y[b] }, R); if (p.outerWidth() < f) { Q = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f; if (U && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) r.width = v(Q - b); ("" === c || "" !== d) && K(a, 1, "Possible column misalignment", 6) } else Q = "100%"; q.width = v(Q);
            g.width = v(Q); u && (a.nScrollFoot.style.width = v(Q)); !e && U && (q.height = v(s.offsetHeight + b)); c = p.outerWidth(); m[0].style.width = v(c); i.width = v(c); d = p.height() > j.clientHeight || "scroll" == l.css("overflow-y"); e = "padding" + (x.bScrollbarLeft ? "Left" : "Right"); i[e] = d ? b + "px" : "0px"; u && (n[0].style.width = v(c), t[0].style.width = v(c), t[0].style[e] = d ? b + "px" : "0px"); p.children("colgroup").insertBefore(p.children("thead")); l.scroll(); if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0
        }
    } function I(a, b, c) {
        for (var d = 0, e = 0,
            f = b.length, g, j; e < f;) { g = b[e].firstChild; for (j = c ? c[e].firstChild : null; g;)1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null; e++ }
    } function Fa(a) {
        var b = a.nTable, c = a.aoColumns, d = a.oScroll, e = d.sY, f = d.sX, g = d.sXInner, j = c.length, i = ma(a, "bVisible"), m = h("th", a.nTHead), l = b.getAttribute("width"), k = b.parentNode, t = !1, n, o, p = a.oBrowser, d = p.bScrollOversize; (n = b.style.width) && -1 !== n.indexOf("%") && (l = n); for (n = 0; n < i.length; n++)o = c[i[n]], null !== o.sWidth && (o.sWidth = Eb(o.sWidthOrig, k), t = !0); if (d ||
            !t && !f && !e && j == V(a) && j == m.length) for (n = 0; n < j; n++)i = aa(a, n), null !== i && (c[i].sWidth = v(m.eq(n).width())); else {
                j = h(b).clone().css("visibility", "hidden").removeAttr("id"); j.find("tbody tr").remove(); var s = h("<tr/>").appendTo(j.find("tbody")); j.find("thead, tfoot").remove(); j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone()); j.find("tfoot th, tfoot td").css("width", ""); m = ra(a, j.find("thead")[0]); for (n = 0; n < i.length; n++)o = c[i[n]], m[n].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? v(o.sWidthOrig) :
                    "", o.sWidthOrig && f && h(m[n]).append(h("<div/>").css({ width: o.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 })); if (a.aoData.length) for (n = 0; n < i.length; n++)t = i[n], o = c[t], h(Fb(a, t)).clone(!1).append(o.sContentPadding).appendTo(s); h("[name]", j).removeAttr("name"); o = h("<div/>").css(f || e ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(j).appendTo(k); f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) :
                        l && j.width(l); for (n = e = 0; n < i.length; n++)k = h(m[n]), g = k.outerWidth() - k.width(), k = p.bBounding ? Math.ceil(m[n].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[n]].sWidth = v(k - g); b.style.width = v(e); o.remove()
        } l && (b.style.width = v(l)); if ((l || f) && !a._reszEvt) b = function () { h(E).on("resize.DT-" + a.sInstance, Oa(function () { $(a) })) }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
    } function Eb(a, b) { if (!a) return 0; var c = h("<div/>").css("width", v(a)).appendTo(b || H.body), d = c[0].offsetWidth; c.remove(); return d } function Fb(a,
        b) { var c = Gb(a, b); if (0 > c) return null; var d = a.aoData[c]; return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b] } function Gb(a, b) { for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++)c = B(a, f, b, "display") + "", c = c.replace(Yb, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f); return e } function v(a) { return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a } function X(a) {
            var b, c, d = [], e = a.aoColumns, f, g, j, i; b = a.aaSortingFixed; c = h.isPlainObject(b); var m = []; f = function (a) {
            a.length &&
                !h.isArray(a[0]) ? m.push(a) : h.merge(m, a)
            }; h.isArray(b) && f(b); c && b.pre && f(b.pre); f(a.aaSorting); c && b.post && f(b.post); for (a = 0; a < m.length; a++) { i = m[a][0]; f = e[i].aDataSort; b = 0; for (c = f.length; b < c; b++)g = f[b], j = e[g].sType || "string", m[a]._idx === k && (m[a]._idx = h.inArray(m[a][1], e[g].asSorting)), d.push({ src: i, col: g, dir: m[a][1], index: m[a]._idx, type: j, formatter: n.ext.type.order[j + "-pre"] }) } return d
        } function mb(a) {
            var b, c, d = [], e = n.ext.type.order, f = a.aoData, g = 0, j, i = a.aiDisplayMaster, h; Ga(a); h = X(a); b = 0; for (c = h.length; b <
                c; b++)j = h[b], j.formatter && g++ , Hb(a, j.col); if ("ssp" != y(a) && 0 !== h.length) {
                    b = 0; for (c = i.length; b < c; b++)d[i[b]] = b; g === h.length ? i.sort(function (a, b) { var c, e, g, j, i = h.length, k = f[a]._aSortData, n = f[b]._aSortData; for (g = 0; g < i; g++)if (j = h[g], c = k[j.col], e = n[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c; c = d[a]; e = d[b]; return c < e ? -1 : c > e ? 1 : 0 }) : i.sort(function (a, b) {
                        var c, g, j, i, k = h.length, n = f[a]._aSortData, o = f[b]._aSortData; for (j = 0; j < k; j++)if (i = h[j], c = n[i.col], g = o[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir],
                            c = i(c, g), 0 !== c) return c; c = d[a]; g = d[b]; return c < g ? -1 : c > g ? 1 : 0
                    })
                } a.bSorted = !0
        } function Ib(a) { for (var b, c, d = a.aoColumns, e = X(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) { c = d[f]; var j = c.asSorting; b = c.sTitle.replace(/<.*?>/g, ""); var i = c.nTh; i.removeAttribute("aria-sort"); c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending); i.setAttribute("aria-label", b) } } function Va(a,
            b, c, d) {
                var e = a.aaSorting, f = a.aoColumns[b].asSorting, g = function (a, b) { var c = a._idx; c === k && (c = h.inArray(a[1], f)); return c + 1 < f.length ? c + 1 : b ? null : 0 }; "number" === typeof e[0] && (e = a.aaSorting = [e]); c && a.oFeatures.bSortMulti ? (c = h.inArray(b, D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0); T(a); "function" ==
                    typeof d && d(a)
    } function Ma(a, b, c, d) { var e = a.aoColumns[c]; Wa(b, {}, function (b) { !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function () { Va(a, c, b.shiftKey, d); "ssp" !== y(a) && C(a, !1) }, 0)) : Va(a, c, b.shiftKey, d)) }) } function wa(a) {
        var b = a.aLastSort, c = a.oClasses.sSortColumn, d = X(a), e = a.oFeatures, f, g; if (e.bSort && e.bSortClasses) {
            e = 0; for (f = b.length; e < f; e++)g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3)); e = 0; for (f = d.length; e < f; e++)g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c +
                (2 > e ? e + 1 : 3))
        } a.aLastSort = d
    } function Hb(a, b) { var c = a.aoColumns[b], d = n.ext.order[c.sSortDataType], e; d && (e = d.call(a.oInstance, a, b, ba(a, b))); for (var f, g = n.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++)if (c = a.aoData[j], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f } function xa(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = {
                time: +new Date, start: a._iDisplayStart, length: a._iDisplayLength, order: h.extend(!0, [], a.aaSorting), search: Ab(a.oPreviousSearch),
                columns: h.map(a.aoColumns, function (b, d) { return { visible: b.bVisible, search: Ab(a.aoPreSearchCols[d]) } })
            }; r(a, "aoStateSaveParams", "stateSaveParams", [a, b]); a.oSavedState = b; a.fnStateSaveCallback.call(a.oInstance, a, b)
        }
    } function Jb(a, b, c) {
        var d, e, f = a.aoColumns, b = function (b) {
            if (b && b.time) {
                var g = r(a, "aoStateLoadParams", "stateLoadParams", [a, b]); if (-1 === h.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && b.time < +new Date - 1E3 * g) && !(b.columns && f.length !== b.columns.length))) {
                a.oLoadedState = h.extend(!0, {}, b); b.start !== k &&
                    (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start); b.length !== k && (a._iDisplayLength = b.length); b.order !== k && (a.aaSorting = [], h.each(b.order, function (b, c) { a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c) })); b.search !== k && h.extend(a.oPreviousSearch, Bb(b.search)); if (b.columns) { d = 0; for (e = b.columns.length; d < e; d++)g = b.columns[d], g.visible !== k && (f[d].bVisible = g.visible), g.search !== k && h.extend(a.aoPreSearchCols[d], Bb(g.search)) } r(a, "aoStateLoaded", "stateLoaded", [a, b])
                }
            } c()
        }; if (a.oFeatures.bStateSave) {
            var g =
                a.fnStateLoadCallback.call(a.oInstance, a, b); g !== k && b(g)
        } else c()
    } function ya(a) { var b = n.settings, a = h.inArray(a, D(b, "nTable")); return -1 !== a ? b[a] : null } function K(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c; d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d); if (b) E.console && console.log && console.log(c); else if (b = n.ext, b = b.sErrMode || b.errMode, a && r(a, null, "error", [a, d, c]), "alert" == b) alert(c); else {
            if ("throw" == b) throw Error(c); "function" ==
                typeof b && b(a, d, c)
        }
    } function F(a, b, c, d) { h.isArray(c) ? h.each(c, function (c, d) { h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d) }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c])) } function Xa(a, b, c) { var d, e; for (e in b) b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d); return a } function Wa(a, b, c) {
        h(a).on("click.DT", b, function (b) { h(a).blur(); c(b) }).on("keypress.DT", b, function (a) { 13 === a.which && (a.preventDefault(), c(a)) }).on("selectstart.DT",
            function () { return !1 })
    } function z(a, b, c, d) { c && a[b].push({ fn: c, sName: d }) } function r(a, b, c, d) { var e = []; b && (e = h.map(a[b].slice().reverse(), function (b) { return b.fn.apply(a.oInstance, d) })); null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result)); return e } function Sa(a) { var b = a._iDisplayStart, c = a.fnDisplayEnd(), d = a._iDisplayLength; b >= c && (b = c - d); b -= b % d; if (-1 === d || 0 > b) b = 0; a._iDisplayStart = b } function Na(a, b) {
        var c = a.renderer, d = n.ext.renderer[b]; return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" ===
            typeof c ? d[c] || d._ : d._
    } function y(a) { return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom" } function ia(a, b) { var c = [], c = Kb.numbers_length, d = Math.floor(c / 2); b <= c ? c = Y(0, b) : a <= d ? (c = Y(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = Y(b - (c - 2), b) : (c = Y(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0)); c.DT_el = "span"; return c } function Da(a) {
        h.each({
            num: function (b) { return za(b, a) }, "num-fmt": function (b) { return za(b, a, Ya) }, "html-num": function (b) {
                return za(b,
                    a, Aa)
            }, "html-num-fmt": function (b) { return za(b, a, Aa, Ya) }
        }, function (b, c) { x.type.order[b + a + "-pre"] = c; b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html) })
    } function Lb(a) { return function () { var b = [ya(this[n.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments)); return n.ext.internal[a].apply(this, b) } } var n = function (a) {
    this.$ = function (a, b) { return this.api(!0).$(a, b) }; this._ = function (a, b) { return this.api(!0).rows(a, b).data() }; this.api = function (a) { return a ? new s(ya(this[x.iApiIndex])) : new s(this) };
        this.fnAddData = function (a, b) { var c = this.api(!0), d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a); (b === k || b) && c.draw(); return d.flatten().toArray() }; this.fnAdjustColumnSizing = function (a) { var b = this.api(!0).columns.adjust(), c = b.settings()[0], d = c.oScroll; a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && la(c) }; this.fnClearTable = function (a) { var b = this.api(!0).clear(); (a === k || a) && b.draw() }; this.fnClose = function (a) { this.api(!0).row(a).child.hide() }; this.fnDeleteRow = function (a,
            b, c) { var d = this.api(!0), a = d.rows(a), e = a.settings()[0], h = e.aoData[a[0][0]]; a.remove(); b && b.call(this, e, h); (c === k || c) && d.draw(); return h }; this.fnDestroy = function (a) { this.api(!0).destroy(a) }; this.fnDraw = function (a) { this.api(!0).draw(a) }; this.fnFilter = function (a, b, c, d, e, h) { e = this.api(!0); null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h); e.draw() }; this.fnGetData = function (a, b) {
                var c = this.api(!0); if (a !== k) {
                    var d = a.nodeName ? a.nodeName.toLowerCase() : ""; return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() :
                        c.row(a).data() || null
                } return c.data().toArray()
            }; this.fnGetNodes = function (a) { var b = this.api(!0); return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray() }; this.fnGetPosition = function (a) { var b = this.api(!0), c = a.nodeName.toUpperCase(); return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null }; this.fnIsOpen = function (a) { return this.api(!0).row(a).child.isShown() }; this.fnOpen = function (a, b, c) { return this.api(!0).row(a).child(b, c).show().child()[0] };
        this.fnPageChange = function (a, b) { var c = this.api(!0).page(a); (b === k || b) && c.draw(!1) }; this.fnSetColumnVis = function (a, b, c) { a = this.api(!0).column(a).visible(b); (c === k || c) && a.columns.adjust().draw() }; this.fnSettings = function () { return ya(this[x.iApiIndex]) }; this.fnSort = function (a) { this.api(!0).order(a).draw() }; this.fnSortListener = function (a, b, c) { this.api(!0).order.listener(a, b, c) }; this.fnUpdate = function (a, b, c, d, e) {
            var h = this.api(!0); c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a); (e === k || e) && h.columns.adjust();
            (d === k || d) && h.draw(); return 0
        }; this.fnVersionCheck = x.fnVersionCheck; var b = this, c = a === k, d = this.length; c && (a = {}); this.oApi = this.internal = x.internal; for (var e in n.ext.internal) e && (this[e] = Lb(e)); this.each(function () {
            var e = {}, g = 1 < d ? Xa(e, a, !0) : a, j = 0, i, e = this.getAttribute("id"), m = !1, l = n.defaults, q = h(this); if ("table" != this.nodeName.toLowerCase()) K(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2); else {
                eb(l); fb(l.column); J(l, l, !0); J(l.column, l.column, !0); J(l, h.extend(g, q.data())); var t = n.settings,
                    j = 0; for (i = t.length; j < i; j++) { var o = t[j]; if (o.nTable == this || o.nTHead && o.nTHead.parentNode == this || o.nTFoot && o.nTFoot.parentNode == this) { var s = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve; if (c || s) return o.oInstance; if (g.bDestroy !== k ? g.bDestroy : l.bDestroy) { o.oInstance.fnDestroy(); break } else { K(o, 0, "Cannot reinitialise DataTable", 3); return } } if (o.sTableId == this.id) { t.splice(j, 1); break } } if (null === e || "" === e) this.id = e = "DataTables_Table_" + n.ext._unique++; var p = h.extend(!0, {}, n.models.oSettings, {
                        sDestroyWidth: q[0].style.width,
                        sInstance: e, sTableId: e
                    }); p.nTable = this; p.oApi = b.internal; p.oInit = g; t.push(p); p.oInstance = 1 === b.length ? b : q.dataTable(); eb(g); Ca(g.oLanguage); g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]); g = Xa(h.extend(!0, {}, l), g); F(p.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")); F(p, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod",
                        "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]); F(p.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]); F(p.oLanguage, g, "fnInfoCallback");
                z(p, "aoDrawCallback", g.fnDrawCallback, "user"); z(p, "aoServerParams", g.fnServerParams, "user"); z(p, "aoStateSaveParams", g.fnStateSaveParams, "user"); z(p, "aoStateLoadParams", g.fnStateLoadParams, "user"); z(p, "aoStateLoaded", g.fnStateLoaded, "user"); z(p, "aoRowCallback", g.fnRowCallback, "user"); z(p, "aoRowCreatedCallback", g.fnCreatedRow, "user"); z(p, "aoHeaderCallback", g.fnHeaderCallback, "user"); z(p, "aoFooterCallback", g.fnFooterCallback, "user"); z(p, "aoInitComplete", g.fnInitComplete, "user"); z(p, "aoPreDrawCallback",
                    g.fnPreDrawCallback, "user"); p.rowIdFn = S(g.rowId); gb(p); var u = p.oClasses; h.extend(u, n.ext.classes, g.oClasses); q.addClass(u.sTable); p.iInitDisplayStart === k && (p.iInitDisplayStart = g.iDisplayStart, p._iDisplayStart = g.iDisplayStart); null !== g.iDeferLoading && (p.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), p._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, p._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading); var v = p.oLanguage; h.extend(!0, v, g.oLanguage); v.sUrl && (h.ajax({
                        dataType: "json", url: v.sUrl, success: function (a) {
                            Ca(a);
                            J(l.oLanguage, a); h.extend(true, v, a); ha(p)
                        }, error: function () { ha(p) }
                    }), m = !0); null === g.asStripeClasses && (p.asStripeClasses = [u.sStripeOdd, u.sStripeEven]); var e = p.asStripeClasses, x = q.children("tbody").find("tr").eq(0); -1 !== h.inArray(!0, h.map(e, function (a) { return x.hasClass(a) })) && (h("tbody tr", this).removeClass(e.join(" ")), p.asDestroyStripes = e.slice()); e = []; t = this.getElementsByTagName("thead"); 0 !== t.length && (ea(p.aoHeader, t[0]), e = ra(p)); if (null === g.aoColumns) { t = []; j = 0; for (i = e.length; j < i; j++)t.push(null) } else t =
                        g.aoColumns; j = 0; for (i = t.length; j < i; j++)Ea(p, e ? e[j] : null); ib(p, g.aoColumnDefs, t, function (a, b) { ka(p, a, b) }); if (x.length) { var w = function (a, b) { return a.getAttribute("data-" + b) !== null ? b : null }; h(x[0]).children("th, td").each(function (a, b) { var c = p.aoColumns[a]; if (c.mData === a) { var d = w(b, "sort") || w(b, "order"), e = w(b, "filter") || w(b, "search"); if (d !== null || e !== null) { c.mData = { _: a + ".display", sort: d !== null ? a + ".@data-" + d : k, type: d !== null ? a + ".@data-" + d : k, filter: e !== null ? a + ".@data-" + e : k }; ka(p, a) } } }) } var U = p.oFeatures,
                            e = function () {
                                if (g.aaSorting === k) { var a = p.aaSorting; j = 0; for (i = a.length; j < i; j++)a[j][1] = p.aoColumns[j].asSorting[0] } wa(p); U.bSort && z(p, "aoDrawCallback", function () { if (p.bSorted) { var a = X(p), b = {}; h.each(a, function (a, c) { b[c.src] = c.dir }); r(p, null, "order", [p, a, b]); Ib(p) } }); z(p, "aoDrawCallback", function () { (p.bSorted || y(p) === "ssp" || U.bDeferRender) && wa(p) }, "sc"); var a = q.children("caption").each(function () { this._captionSide = h(this).css("caption-side") }), b = q.children("thead"); b.length === 0 && (b = h("<thead/>").appendTo(q));
                                p.nTHead = b[0]; b = q.children("tbody"); b.length === 0 && (b = h("<tbody/>").appendTo(q)); p.nTBody = b[0]; b = q.children("tfoot"); if (b.length === 0 && a.length > 0 && (p.oScroll.sX !== "" || p.oScroll.sY !== "")) b = h("<tfoot/>").appendTo(q); if (b.length === 0 || b.children().length === 0) q.addClass(u.sNoFooter); else if (b.length > 0) { p.nTFoot = b[0]; ea(p.aoFooter, p.nTFoot) } if (g.aaData) for (j = 0; j < g.aaData.length; j++)O(p, g.aaData[j]); else (p.bDeferLoading || y(p) == "dom") && na(p, h(p.nTBody).children("tr")); p.aiDisplay = p.aiDisplayMaster.slice();
                                p.bInitialised = true; m === false && ha(p)
                            }; g.bStateSave ? (U.bStateSave = !0, z(p, "aoDrawCallback", xa, "state_save"), Jb(p, g, e)) : e()
            }
        }); b = null; return this
    }, x, s, o, u, Za = {}, Mb = /[\r\n]/g, Aa = /<.*?>/g, Zb = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/, $b = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), Ya = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi, M = function (a) { return !a || !0 === a || "-" === a ? !0 : !1 }, Nb = function (a) {
        var b = parseInt(a, 10); return !isNaN(b) &&
            isFinite(a) ? b : null
    }, Ob = function (a, b) { Za[b] || (Za[b] = RegExp(Qa(b), "g")); return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(Za[b], ".") : a }, $a = function (a, b, c) { var d = "string" === typeof a; if (M(a)) return !0; b && d && (a = Ob(a, b)); c && d && (a = a.replace(Ya, "")); return !isNaN(parseFloat(a)) && isFinite(a) }, Pb = function (a, b, c) { return M(a) ? !0 : !(M(a) || "string" === typeof a) ? null : $a(a.replace(Aa, ""), b, c) ? !0 : null }, D = function (a, b, c) {
        var d = [], e = 0, f = a.length; if (c !== k) for (; e < f; e++)a[e] && a[e][b] && d.push(a[e][b][c]); else for (; e <
            f; e++)a[e] && d.push(a[e][b]); return d
    }, ja = function (a, b, c, d) { var e = [], f = 0, g = b.length; if (d !== k) for (; f < g; f++)a[b[f]][c] && e.push(a[b[f]][c][d]); else for (; f < g; f++)e.push(a[b[f]][c]); return e }, Y = function (a, b) { var c = [], d; b === k ? (b = 0, d = a) : (d = b, b = a); for (var e = b; e < d; e++)c.push(e); return c }, Qb = function (a) { for (var b = [], c = 0, d = a.length; c < d; c++)a[c] && b.push(a[c]); return b }, qa = function (a) {
        var b; a: { if (!(2 > a.length)) { b = a.slice().sort(); for (var c = b[0], d = 1, e = b.length; d < e; d++) { if (b[d] === c) { b = !1; break a } c = b[d] } } b = !0 } if (b) return a.slice();
        b = []; var e = a.length, f, g = 0, d = 0; a: for (; d < e; d++) { c = a[d]; for (f = 0; f < g; f++)if (b[f] === c) continue a; b.push(c); g++ } return b
    }; n.util = { throttle: function (a, b) { var c = b !== k ? b : 200, d, e; return function () { var b = this, g = +new Date, j = arguments; d && g < d + c ? (clearTimeout(e), e = setTimeout(function () { d = k; a.apply(b, j) }, c)) : (d = g, a.apply(b, j)) } }, escapeRegex: function (a) { return a.replace($b, "\\$1") } }; var A = function (a, b, c) { a[b] !== k && (a[c] = a[b]) }, ca = /\[.*?\]$/, W = /\(\)$/, Qa = n.util.escapeRegex, va = h("<div>")[0], Wb = va.textContent !== k, Yb =
        /<.*?>/g, Oa = n.util.throttle, Rb = [], w = Array.prototype, ac = function (a) { var b, c, d = n.settings, e = h.map(d, function (a) { return a.nTable }); if (a) { if (a.nTable && a.oApi) return [a]; if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] : null; if (a && "function" === typeof a.settings) return a.settings().toArray(); "string" === typeof a ? c = h(a) : a instanceof h && (c = a) } else return []; if (c) return c.map(function () { b = h.inArray(this, e); return -1 !== b ? d[b] : null }).toArray() }; s = function (a, b) {
            if (!(this instanceof
                s)) return new s(a, b); var c = [], d = function (a) { (a = ac(a)) && (c = c.concat(a)) }; if (h.isArray(a)) for (var e = 0, f = a.length; e < f; e++)d(a[e]); else d(a); this.context = qa(c); b && h.merge(this, b); this.selector = { rows: null, cols: null, opts: null }; s.extend(this, this, Rb)
        }; n.Api = s; h.extend(s.prototype, {
            any: function () { return 0 !== this.count() }, concat: w.concat, context: [], count: function () { return this.flatten().length }, each: function (a) { for (var b = 0, c = this.length; b < c; b++)a.call(this, this[b], b, this); return this }, eq: function (a) {
                var b =
                    this.context; return b.length > a ? new s(b[a], this[a]) : null
            }, filter: function (a) { var b = []; if (w.filter) b = w.filter.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++)a.call(this, this[c], c, this) && b.push(this[c]); return new s(this.context, b) }, flatten: function () { var a = []; return new s(this.context, a.concat.apply(a, this.toArray())) }, join: w.join, indexOf: w.indexOf || function (a, b) { for (var c = b || 0, d = this.length; c < d; c++)if (this[c] === a) return c; return -1 }, iterator: function (a, b, c, d) {
                var e = [], f, g, j, h, m, l = this.context,
                n, o, u = this.selector; "string" === typeof a && (d = c, c = b, b = a, a = !1); g = 0; for (j = l.length; g < j; g++) { var r = new s(l[g]); if ("table" === b) f = c.call(r, l[g], g), f !== k && e.push(f); else if ("columns" === b || "rows" === b) f = c.call(r, l[g], this[g], g), f !== k && e.push(f); else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) { o = this[g]; "column-rows" === b && (n = Ba(l[g], u.opts)); h = 0; for (m = o.length; h < m; h++)f = o[h], f = "cell" === b ? c.call(r, l[g], f.row, f.column, g, h) : c.call(r, l[g], f, g, h, n), f !== k && e.push(f) } } return e.length || d ? (a = new s(l, a ?
                    e.concat.apply([], e) : e), b = a.selector, b.rows = u.rows, b.cols = u.cols, b.opts = u.opts, a) : this
            }, lastIndexOf: w.lastIndexOf || function (a, b) { return this.indexOf.apply(this.toArray.reverse(), arguments) }, length: 0, map: function (a) { var b = []; if (w.map) b = w.map.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++)b.push(a.call(this, this[c], c)); return new s(this.context, b) }, pluck: function (a) { return this.map(function (b) { return b[a] }) }, pop: w.pop, push: w.push, reduce: w.reduce || function (a, b) {
                return hb(this, a, b, 0, this.length,
                    1)
            }, reduceRight: w.reduceRight || function (a, b) { return hb(this, a, b, this.length - 1, -1, -1) }, reverse: w.reverse, selector: null, shift: w.shift, slice: function () { return new s(this.context, this) }, sort: w.sort, splice: w.splice, toArray: function () { return w.slice.call(this) }, to$: function () { return h(this) }, toJQuery: function () { return h(this) }, unique: function () { return new s(this.context, qa(this)) }, unshift: w.unshift
        }); s.extend = function (a, b, c) {
            if (c.length && b && (b instanceof s || b.__dt_wrapper)) {
                var d, e, f, g = function (a, b, c) {
                    return function () {
                        var d =
                            b.apply(a, arguments); s.extend(d, d, c.methodExt); return d
                    }
                }; d = 0; for (e = c.length; d < e; d++)f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, s.extend(a, b[f.name], f.propExt)
            }
        }; s.register = o = function (a, b) {
            if (h.isArray(a)) for (var c = 0, d = a.length; c < d; c++)s.register(a[c], b); else for (var e = a.split("."), f = Rb, g, j, c = 0, d = e.length; c < d; c++) {
                g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c]; var i; a: {
                    i = 0; for (var m = f.length; i < m; i++)if (f[i].name === g) {
                        i =
                        f[i]; break a
                    } i = null
                } i || (i = { name: g, val: {}, methodExt: [], propExt: [] }, f.push(i)); c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt
            }
        }; s.registerPlural = u = function (a, b, c) { s.register(a, c); s.register(b, function () { var a = c.apply(this, arguments); return a === this ? this : a instanceof s ? a.length ? h.isArray(a[0]) ? new s(a.context, a[0]) : a[0] : k : a }) }; o("tables()", function (a) {
            var b; if (a) {
                b = s; var c = this.context; if ("number" === typeof a) a = [c[a]]; else var d = h.map(c, function (a) { return a.nTable }), a = h(d).filter(a).map(function () {
                    var a = h.inArray(this,
                        d); return c[a]
                }).toArray(); b = new b(a)
            } else b = this; return b
        }); o("table()", function (a) { var a = this.tables(a), b = a.context; return b.length ? new s(b[0]) : a }); u("tables().nodes()", "table().node()", function () { return this.iterator("table", function (a) { return a.nTable }, 1) }); u("tables().body()", "table().body()", function () { return this.iterator("table", function (a) { return a.nTBody }, 1) }); u("tables().header()", "table().header()", function () { return this.iterator("table", function (a) { return a.nTHead }, 1) }); u("tables().footer()",
            "table().footer()", function () { return this.iterator("table", function (a) { return a.nTFoot }, 1) }); u("tables().containers()", "table().container()", function () { return this.iterator("table", function (a) { return a.nTableWrapper }, 1) }); o("draw()", function (a) { return this.iterator("table", function (b) { "page" === a ? P(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), T(b, !1 === a)) }) }); o("page()", function (a) { return a === k ? this.page.info().page : this.iterator("table", function (b) { Ta(b, a) }) }); o("page.info()", function () {
                if (0 ===
                    this.context.length) return k; var a = this.context[0], b = a._iDisplayStart, c = a.oFeatures.bPaginate ? a._iDisplayLength : -1, d = a.fnRecordsDisplay(), e = -1 === c; return { page: e ? 0 : Math.floor(b / c), pages: e ? 1 : Math.ceil(d / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d, serverSide: "ssp" === y(a) }
            }); o("page.len()", function (a) { return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function (b) { Ra(b, a) }) }); var Sb = function (a, b, c) {
                if (c) {
                    var d = new s(a);
                    d.one("draw", function () { c(d.ajax.json()) })
                } if ("ssp" == y(a)) T(a, b); else { C(a, !0); var e = a.jqXHR; e && 4 !== e.readyState && e.abort(); sa(a, [], function (c) { oa(a); for (var c = ta(a, c), d = 0, e = c.length; d < e; d++)O(a, c[d]); T(a, b); C(a, !1) }) }
            }; o("ajax.json()", function () { var a = this.context; if (0 < a.length) return a[0].json }); o("ajax.params()", function () { var a = this.context; if (0 < a.length) return a[0].oAjaxData }); o("ajax.reload()", function (a, b) { return this.iterator("table", function (c) { Sb(c, !1 === b, a) }) }); o("ajax.url()", function (a) {
                var b =
                    this.context; if (a === k) { if (0 === b.length) return k; b = b[0]; return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource } return this.iterator("table", function (b) { h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a })
            }); o("ajax.url().load()", function (a, b) { return this.iterator("table", function (c) { Sb(c, !1 === b, a) }) }); var ab = function (a, b, c, d, e) {
                var f = [], g, j, i, m, l, n; i = typeof b; if (!b || "string" === i || "function" === i || b.length === k) b = [b]; i = 0; for (m = b.length; i < m; i++) {
                    j = b[i] && b[i].split && !b[i].match(/[\[\(:]/) ? b[i].split(",") :
                        [b[i]]; l = 0; for (n = j.length; l < n; l++)(g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g))
                } a = x.selector[a]; if (a.length) { i = 0; for (m = a.length; i < m; i++)f = a[i](d, e, f) } return qa(f)
            }, bb = function (a) { a || (a = {}); a.filter && a.search === k && (a.search = a.filter); return h.extend({ search: "none", order: "current", page: "all" }, a) }, cb = function (a) { for (var b = 0, c = a.length; b < c; b++)if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a; a.length = 0; return a }, Ba = function (a, b) {
                var c,
                d, e, f = [], g = a.aiDisplay; e = a.aiDisplayMaster; var j = b.search; c = b.order; d = b.page; if ("ssp" == y(a)) return "removed" === j ? [] : Y(0, e.length); if ("current" == d) { c = a._iDisplayStart; for (d = a.fnDisplayEnd(); c < d; c++)f.push(g[c]) } else if ("current" == c || "applied" == c) if ("none" == j) f = e.slice(); else if ("applied" == j) f = g.slice(); else { if ("removed" == j) { var i = {}; c = 0; for (d = g.length; c < d; c++)i[g[c]] = null; f = h.map(e, function (a) { return !i.hasOwnProperty(a) ? a : null }) } } else if ("index" == c || "original" == c) {
                    c = 0; for (d = a.aoData.length; c < d; c++)"none" ==
                        j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c))
                } return f
            }; o("rows()", function (a, b) {
                a === k ? a = "" : h.isPlainObject(a) && (b = a, a = ""); var b = bb(b), c = this.iterator("table", function (c) {
                    var e = b, f; return ab("row", a, function (a) {
                        var b = Nb(a), i = c.aoData; if (b !== null && !e) return [b]; f || (f = Ba(c, e)); if (b !== null && h.inArray(b, f) !== -1) return [b]; if (a === null || a === k || a === "") return f; if (typeof a === "function") return h.map(f, function (b) { var c = i[b]; return a(b, c._aData, c.nTr) ? b : null }); if (a.nodeName) {
                            var b =
                                a._DT_RowIndex, m = a._DT_CellIndex; if (b !== k) return i[b] && i[b].nTr === a ? [b] : []; if (m) return i[m.row] && i[m.row].nTr === a ? [m.row] : []; b = h(a).closest("*[data-dt-row]"); return b.length ? [b.data("dt-row")] : []
                        } if (typeof a === "string" && a.charAt(0) === "#") { b = c.aIds[a.replace(/^#/, "")]; if (b !== k) return [b.idx] } b = Qb(ja(c.aoData, f, "nTr")); return h(b).filter(a).map(function () { return this._DT_RowIndex }).toArray()
                    }, c, e)
                }, 1); c.selector.rows = a; c.selector.opts = b; return c
            }); o("rows().nodes()", function () {
                return this.iterator("row",
                    function (a, b) { return a.aoData[b].nTr || k }, 1)
            }); o("rows().data()", function () { return this.iterator(!0, "rows", function (a, b) { return ja(a.aoData, b, "_aData") }, 1) }); u("rows().cache()", "row().cache()", function (a) { return this.iterator("row", function (b, c) { var d = b.aoData[c]; return "search" === a ? d._aFilterData : d._aSortData }, 1) }); u("rows().invalidate()", "row().invalidate()", function (a) { return this.iterator("row", function (b, c) { da(b, c, a) }) }); u("rows().indexes()", "row().index()", function () {
                return this.iterator("row",
                    function (a, b) { return b }, 1)
            }); u("rows().ids()", "row().id()", function (a) { for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)for (var f = 0, g = this[d].length; f < g; f++) { var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData); b.push((!0 === a ? "#" : "") + h) } return new s(c, b) }); u("rows().remove()", "row().remove()", function () {
                var a = this; this.iterator("row", function (b, c, d) {
                    var e = b.aoData, f = e[c], g, h, i, m, l; e.splice(c, 1); g = 0; for (h = e.length; g < h; g++)if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l) {
                        i = 0; for (m =
                            l.length; i < m; i++)l[i]._DT_CellIndex.row = g
                    } pa(b.aiDisplayMaster, c); pa(b.aiDisplay, c); pa(a[d], c, !1); 0 < b._iRecordsDisplay && b._iRecordsDisplay--; Sa(b); c = b.rowIdFn(f._aData); c !== k && delete b.aIds[c]
                }); this.iterator("table", function (a) { for (var c = 0, d = a.aoData.length; c < d; c++)a.aoData[c].idx = c }); return this
            }); o("rows.add()", function (a) {
                var b = this.iterator("table", function (b) { var c, f, g, h = []; f = 0; for (g = a.length; f < g; f++)c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(na(b, c)[0]) : h.push(O(b, c)); return h },
                    1), c = this.rows(-1); c.pop(); h.merge(c, b); return c
            }); o("row()", function (a, b) { return cb(this.rows(a, b)) }); o("row().data()", function (a) { var b = this.context; if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k; var c = b[0].aoData[this[0]]; c._aData = a; h.isArray(a) && c.nTr.id && N(b[0].rowId)(a, c.nTr.id); da(b[0], this[0], "data"); return this }); o("row().node()", function () { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null }); o("row.add()", function (a) {
            a instanceof h &&
                a.length && (a = a[0]); var b = this.iterator("table", function (b) { return a.nodeName && "TR" === a.nodeName.toUpperCase() ? na(b, a)[0] : O(b, a) }); return this.row(b[0])
            }); var db = function (a, b) { var c = a.context; if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k }, Tb = function (a, b) {
                var c = a.context; if (c.length && a.length) {
                    var d = c[0].aoData[a[0]]; if (d._details) {
                        (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach(); var e = c[0], f = new s(e), g = e.aoData; f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                        0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function (a, b) { e === b && f.rows({ page: "current" }).eq(0).each(function (a) { a = g[a]; a._detailsShow && a._details.insertAfter(a.nTr) }) }), f.on("column-visibility.dt.DT_details", function (a, b) { if (e === b) for (var c, d = V(b), f = 0, h = g.length; f < h; f++)c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d) }), f.on("destroy.dt.DT_details", function (a, b) { if (e === b) for (var c = 0, d = g.length; c < d; c++)g[c]._details && db(f, c) }))
                    }
                }
            }; o("row().child()", function (a, b) {
                var c =
                    this.context; if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k; if (!0 === a) this.child.show(); else if (!1 === a) db(this); else if (c.length && this.length) {
                        var d = c[0], c = c[0].aoData[this[0]], e = [], f = function (a, b) { if (h.isArray(a) || a instanceof h) for (var c = 0, k = a.length; c < k; c++)f(a[c], b); else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = V(d), e.push(c[0])) }; f(a, b); c._details && c._details.detach(); c._details = h(e);
                        c._detailsShow && c._details.insertAfter(c.nTr)
                    } return this
            }); o(["row().child.show()", "row().child().show()"], function () { Tb(this, !0); return this }); o(["row().child.hide()", "row().child().hide()"], function () { Tb(this, !1); return this }); o(["row().child.remove()", "row().child().remove()"], function () { db(this); return this }); o("row().child.isShown()", function () { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1 }); var bc = /^([^:]+):(name|visIdx|visible)$/, Ub = function (a, b,
                c, d, e) { for (var c = [], d = 0, f = e.length; d < f; d++)c.push(B(a, e[d], b)); return c }; o("columns()", function (a, b) {
                    a === k ? a = "" : h.isPlainObject(a) && (b = a, a = ""); var b = bb(b), c = this.iterator("table", function (c) {
                        var e = a, f = b, g = c.aoColumns, j = D(g, "sName"), i = D(g, "nTh"); return ab("column", e, function (a) {
                            var b = Nb(a); if (a === "") return Y(g.length); if (b !== null) return [b >= 0 ? b : g.length + b]; if (typeof a === "function") { var e = Ba(c, f); return h.map(g, function (b, f) { return a(f, Ub(c, f, 0, 0, e), i[f]) ? f : null }) } var k = typeof a === "string" ? a.match(bc) :
                                ""; if (k) switch (k[2]) { case "visIdx": case "visible": b = parseInt(k[1], 10); if (b < 0) { var n = h.map(g, function (a, b) { return a.bVisible ? b : null }); return [n[n.length + b]] } return [aa(c, b)]; case "name": return h.map(j, function (a, b) { return a === k[1] ? b : null }); default: return [] }if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column]; b = h(i).filter(a).map(function () { return h.inArray(this, i) }).toArray(); if (b.length || !a.nodeName) return b; b = h(a).closest("*[data-dt-column]"); return b.length ? [b.data("dt-column")] : []
                        }, c, f)
                    },
                        1); c.selector.cols = a; c.selector.opts = b; return c
                }); u("columns().header()", "column().header()", function () { return this.iterator("column", function (a, b) { return a.aoColumns[b].nTh }, 1) }); u("columns().footer()", "column().footer()", function () { return this.iterator("column", function (a, b) { return a.aoColumns[b].nTf }, 1) }); u("columns().data()", "column().data()", function () { return this.iterator("column-rows", Ub, 1) }); u("columns().dataSrc()", "column().dataSrc()", function () {
                    return this.iterator("column", function (a, b) { return a.aoColumns[b].mData },
                        1)
                }); u("columns().cache()", "column().cache()", function (a) { return this.iterator("column-rows", function (b, c, d, e, f) { return ja(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c) }, 1) }); u("columns().nodes()", "column().nodes()", function () { return this.iterator("column-rows", function (a, b, c, d, e) { return ja(a.aoData, e, "anCells", b) }, 1) }); u("columns().visible()", "column().visible()", function (a, b) {
                    var c = this.iterator("column", function (b, c) {
                        if (a === k) return b.aoColumns[c].bVisible; var f = b.aoColumns, g = f[c], j = b.aoData,
                            i, m, l; if (a !== k && g.bVisible !== a) { if (a) { var n = h.inArray(!0, D(f, "bVisible"), c + 1); i = 0; for (m = j.length; i < m; i++)l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[n] || null) } else h(D(b.aoData, "anCells", c)).detach(); g.bVisible = a; fa(b, b.aoHeader); fa(b, b.aoFooter); b.aiDisplay.length || h(b.nTBody).find("td[colspan]").attr("colspan", V(b)); xa(b) }
                    }); a !== k && (this.iterator("column", function (c, e) { r(c, null, "column-visibility", [c, e, a, b]) }), (b === k || b) && this.columns.adjust()); return c
                }); u("columns().indexes()", "column().index()",
                    function (a) { return this.iterator("column", function (b, c) { return "visible" === a ? ba(b, c) : c }, 1) }); o("columns.adjust()", function () { return this.iterator("table", function (a) { $(a) }, 1) }); o("column.index()", function (a, b) { if (0 !== this.context.length) { var c = this.context[0]; if ("fromVisible" === a || "toData" === a) return aa(c, b); if ("fromData" === a || "toVisible" === a) return ba(c, b) } }); o("column()", function (a, b) { return cb(this.columns(a, b)) }); o("cells()", function (a, b, c) {
                        h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
                        h.isPlainObject(b) && (c = b, b = null); if (null === b || b === k) return this.iterator("table", function (b) {
                            var d = a, e = bb(c), f = b.aoData, g = Ba(b, e), j = Qb(ja(f, g, "anCells")), i = h([].concat.apply([], j)), l, m = b.aoColumns.length, n, o, u, s, r, v; return ab("cell", d, function (a) {
                                var c = typeof a === "function"; if (a === null || a === k || c) { n = []; o = 0; for (u = g.length; o < u; o++) { l = g[o]; for (s = 0; s < m; s++) { r = { row: l, column: s }; if (c) { v = f[l]; a(r, B(b, l, s), v.anCells ? v.anCells[s] : null) && n.push(r) } else n.push(r) } } return n } if (h.isPlainObject(a)) return a.column !==
                                    k && a.row !== k && h.inArray(a.row, g) !== -1 ? [a] : []; c = i.filter(a).map(function (a, b) { return { row: b._DT_CellIndex.row, column: b._DT_CellIndex.column } }).toArray(); if (c.length || !a.nodeName) return c; v = h(a).closest("*[data-dt-row]"); return v.length ? [{ row: v.data("dt-row"), column: v.data("dt-column") }] : []
                            }, b, e)
                        }); var d = this.columns(b), e = this.rows(a), f, g, j, i, m; this.iterator("table", function (a, b) { f = []; g = 0; for (j = e[b].length; g < j; g++) { i = 0; for (m = d[b].length; i < m; i++)f.push({ row: e[b][g], column: d[b][i] }) } }, 1); var l = this.cells(f,
                            c); h.extend(l.selector, { cols: b, rows: a, opts: c }); return l
                    }); u("cells().nodes()", "cell().node()", function () { return this.iterator("cell", function (a, b, c) { return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : k }, 1) }); o("cells().data()", function () { return this.iterator("cell", function (a, b, c) { return B(a, b, c) }, 1) }); u("cells().cache()", "cell().cache()", function (a) { a = "search" === a ? "_aFilterData" : "_aSortData"; return this.iterator("cell", function (b, c, d) { return b.aoData[c][a][d] }, 1) }); u("cells().render()", "cell().render()",
                        function (a) { return this.iterator("cell", function (b, c, d) { return B(b, c, d, a) }, 1) }); u("cells().indexes()", "cell().index()", function () { return this.iterator("cell", function (a, b, c) { return { row: b, column: c, columnVisible: ba(a, c) } }, 1) }); u("cells().invalidate()", "cell().invalidate()", function (a) { return this.iterator("cell", function (b, c, d) { da(b, c, a, d) }) }); o("cell()", function (a, b, c) { return cb(this.cells(a, b, c)) }); o("cell().data()", function (a) {
                            var b = this.context, c = this[0]; if (a === k) return b.length && c.length ? B(b[0],
                                c[0].row, c[0].column) : k; jb(b[0], c[0].row, c[0].column, a); da(b[0], c[0].row, "data", c[0].column); return this
                        }); o("order()", function (a, b) { var c = this.context; if (a === k) return 0 !== c.length ? c[0].aaSorting : k; "number" === typeof a ? a = [[a, b]] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments)); return this.iterator("table", function (b) { b.aaSorting = a.slice() }) }); o("order.listener()", function (a, b, c) { return this.iterator("table", function (d) { Ma(d, a, b, c) }) }); o("order.fixed()", function (a) {
                            if (!a) {
                                var b =
                                    this.context, b = b.length ? b[0].aaSortingFixed : k; return h.isArray(b) ? { pre: b } : b
                            } return this.iterator("table", function (b) { b.aaSortingFixed = h.extend(!0, {}, a) })
                        }); o(["columns().order()", "column().order()"], function (a) { var b = this; return this.iterator("table", function (c, d) { var e = []; h.each(b[d], function (b, c) { e.push([c, a]) }); c.aaSorting = e }) }); o("search()", function (a, b, c, d) {
                            var e = this.context; return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function (e) {
                                e.oFeatures.bFilter && ga(e,
                                    h.extend({}, e.oPreviousSearch, { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), 1)
                            })
                        }); u("columns().search()", "column().search()", function (a, b, c, d) { return this.iterator("column", function (e, f) { var g = e.aoPreSearchCols; if (a === k) return g[f].sSearch; e.oFeatures.bFilter && (h.extend(g[f], { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), ga(e, e.oPreviousSearch, 1)) }) }); o("state()", function () {
                            return this.context.length ? this.context[0].oSavedState :
                                null
                        }); o("state.clear()", function () { return this.iterator("table", function (a) { a.fnStateSaveCallback.call(a.oInstance, a, {}) }) }); o("state.loaded()", function () { return this.context.length ? this.context[0].oLoadedState : null }); o("state.save()", function () { return this.iterator("table", function (a) { xa(a) }) }); n.versionCheck = n.fnVersionCheck = function (a) { for (var b = n.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++)if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d; return !0 }; n.isDataTable =
                            n.fnIsDataTable = function (a) { var b = h(a).get(0), c = !1; if (a instanceof n.Api) return !0; h.each(n.settings, function (a, e) { var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null, g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null; if (e.nTable === b || f === b || g === b) c = !0 }); return c }; n.tables = n.fnTables = function (a) { var b = !1; h.isPlainObject(a) && (b = a.api, a = a.visible); var c = h.map(n.settings, function (b) { if (!a || a && h(b.nTable).is(":visible")) return b.nTable }); return b ? new s(c) : c }; n.camelToHungarian = J; o("$()", function (a, b) {
                                var c =
                                    this.rows(b).nodes(), c = h(c); return h([].concat(c.filter(a).toArray(), c.find(a).toArray()))
                            }); h.each(["on", "one", "off"], function (a, b) { o(b + "()", function () { var a = Array.prototype.slice.call(arguments); a[0] = h.map(a[0].split(/\s/), function (a) { return !a.match(/\.dt\b/) ? a + ".dt" : a }).join(" "); var d = h(this.tables().nodes()); d[b].apply(d, a); return this }) }); o("clear()", function () { return this.iterator("table", function (a) { oa(a) }) }); o("settings()", function () { return new s(this.context, this.context) }); o("init()", function () {
                                var a =
                                    this.context; return a.length ? a[0].oInit : null
                            }); o("data()", function () { return this.iterator("table", function (a) { return D(a.aoData, "_aData") }).flatten() }); o("destroy()", function (a) {
                                a = a || !1; return this.iterator("table", function (b) {
                                    var c = b.nTableWrapper.parentNode, d = b.oClasses, e = b.nTable, f = b.nTBody, g = b.nTHead, j = b.nTFoot, i = h(e), f = h(f), k = h(b.nTableWrapper), l = h.map(b.aoData, function (a) { return a.nTr }), o; b.bDestroying = !0; r(b, "aoDestroyCallback", "destroy", [b]); a || (new s(b)).columns().visible(!0); k.off(".DT").find(":not(tbody *)").off(".DT");
                                    h(E).off(".DT-" + b.sInstance); e != g.parentNode && (i.children("thead").detach(), i.append(g)); j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j)); b.aaSorting = []; b.aaSortingFixed = []; wa(b); h(l).removeClass(b.asStripeClasses.join(" ")); h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone); f.children().detach(); f.append(l); g = a ? "remove" : "detach"; i[g](); k[g](); !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width", b.sDestroyWidth).removeClass(d.sTable),
                                        (o = b.asDestroyStripes.length) && f.children().each(function (a) { h(this).addClass(b.asDestroyStripes[a % o]) })); c = h.inArray(b, n.settings); -1 !== c && n.settings.splice(c, 1)
                                })
                            }); h.each(["column", "row", "cell"], function (a, b) { o(b + "s().every()", function (a) { var d = this.selector.opts, e = this; return this.iterator(b, function (f, g, h, i, m) { a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, m) }) }) }); o("i18n()", function (a, b, c) {
                                var d = this.context[0], a = S(a)(d.oLanguage); a === k && (a = b); c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] :
                                    a._); return a.replace("%d", c)
                            }); n.version = "1.10.18"; n.settings = []; n.models = {}; n.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 }; n.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 }; n.models.oColumn = {
                                idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null,
                                sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null
                            }; n.defaults = {
                                aaData: null, aaSorting: [[0, "asc"]], aaSortingFixed: [], ajax: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], asStripeClasses: null, bAutoWidth: !0, bDeferRender: !1, bDestroy: !1, bFilter: !0, bInfo: !0, bLengthChange: !0, bPaginate: !0, bProcessing: !1, bRetrieve: !1, bScrollCollapse: !1, bServerSide: !1,
                                bSort: !0, bSortMulti: !0, bSortCellsTop: !1, bSortClasses: !0, bStateSave: !1, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function (a) { return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands) }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnServerData: null, fnServerParams: null, fnStateLoadCallback: function (a) {
                                    try {
                                        return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" +
                                            a.sInstance + "_" + location.pathname))
                                    } catch (b) { }
                                }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function (a, b) { try { (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b)) } catch (c) { } }, fnStateSaveParams: null, iStateDuration: 7200, iDeferLoading: null, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: {
                                    oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" },
                                    oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries", sInfoFiltered: "(filtered from _MAX_ total entries)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "Processing...", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found"
                                }, oSearch: h.extend({},
                                    n.models.oSearch), sAjaxDataProp: "data", sAjaxSource: null, sDom: "lfrtip", searchDelay: null, sPaginationType: "simple_numbers", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId"
                            }; Z(n.defaults); n.defaults.column = { aDataSort: null, iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null };
    Z(n.defaults.column); n.models.oSettings = {
        oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null }, oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aIds: {}, aoColumns: [], aoHeader: [],
        aoFooter: [], oPreviousSearch: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], asStripeClasses: null, asDestroyStripes: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [], aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bDeferLoading: !1, bInitialised: !1, aoOpenRows: [], sDom: null, searchDelay: null, sPaginationType: "two_button",
        iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, sAjaxSource: null, sAjaxDataProp: null, bAjaxDataGet: !0, jqXHR: null, json: k, oAjaxData: k, fnServerData: null, aoServerParams: [], sServerMethod: null, fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: !1, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, oClasses: {}, bFiltered: !1, bSorted: !1, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function () {
            return "ssp" == y(this) ? 1 * this._iRecordsTotal :
                this.aiDisplayMaster.length
        }, fnRecordsDisplay: function () { return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length }, fnDisplayEnd: function () { var a = this._iDisplayLength, b = this._iDisplayStart, c = b + a, d = this.aiDisplay.length, e = this.oFeatures, f = e.bPaginate; return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null, aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null
    }; n.ext = x = {
        buttons: {},
        classes: {}, build: "bs4/dt-1.10.18/b-1.5.6/b-html5-1.5.6/r-2.2.2", errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { detect: [], search: {}, order: {} }, _unique: 0, fnVersionCheck: n.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: n.version
    }; h.extend(x, { afnFiltering: x.search, aTypes: x.type.detect, ofnSearch: x.type.search, oSort: x.type.order, afnSortData: x.order, aoFeatures: x.feature, oApi: x.internal, oStdClasses: x.classes, oPagination: x.pager });
    h.extend(n.ext.classes, {
        sTable: "dataTable", sNoFooter: "no-footer", sPageButton: "paginate_button", sPageButtonActive: "current", sPageButtonDisabled: "disabled", sStripeOdd: "odd", sStripeEven: "even", sRowEmpty: "dataTables_empty", sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter", sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc", sSortable: "sorting", sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sFilterInput: "", sLengthSelect: "", sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead", sScrollHeadInner: "dataTables_scrollHeadInner", sScrollBody: "dataTables_scrollBody", sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sHeaderTH: "", sFooterTH: "", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "", sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "",
        sJUIHeader: "", sJUIFooter: ""
    }); var Kb = n.ext.pager; h.extend(Kb, { simple: function () { return ["previous", "next"] }, full: function () { return ["first", "previous", "next", "last"] }, numbers: function (a, b) { return [ia(a, b)] }, simple_numbers: function (a, b) { return ["previous", ia(a, b), "next"] }, full_numbers: function (a, b) { return ["first", "previous", ia(a, b), "next", "last"] }, first_last_numbers: function (a, b) { return ["first", ia(a, b), "last"] }, _numbers: ia, numbers_length: 7 }); h.extend(!0, n.ext.renderer, {
        pageButton: {
            _: function (a, b, c, d, e,
                f) {
                    var g = a.oClasses, j = a.oLanguage.oPaginate, i = a.oLanguage.oAria.paginate || {}, m, l, n = 0, o = function (b, d) {
                        var k, s, u, r, v = function (b) { Ta(a, b.data.action, true) }; k = 0; for (s = d.length; k < s; k++) {
                            r = d[k]; if (h.isArray(r)) { u = h("<" + (r.DT_el || "div") + "/>").appendTo(b); o(u, r) } else {
                                m = null; l = ""; switch (r) {
                                    case "ellipsis": b.append('<span class="ellipsis">&#x2026;</span>'); break; case "first": m = j.sFirst; l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled); break; case "previous": m = j.sPrevious; l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled); break; case "next": m =
                                        j.sNext; l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled); break; case "last": m = j.sLast; l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled); break; default: m = r + 1; l = e === r ? g.sPageButtonActive : ""
                                }if (m !== null) { u = h("<a>", { "class": g.sPageButton + " " + l, "aria-controls": a.sTableId, "aria-label": i[r], "data-dt-idx": n, tabindex: a.iTabIndex, id: c === 0 && typeof r === "string" ? a.sTableId + "_" + r : null }).html(m).appendTo(b); Wa(u, { action: r }, v); n++ }
                            }
                        }
                    }, s; try { s = h(b).find(H.activeElement).data("dt-idx") } catch (u) { } o(h(b).empty(), d); s !== k && h(b).find("[data-dt-idx=" +
                        s + "]").focus()
            }
        }
    }); h.extend(n.ext.type.detect, [function (a, b) { var c = b.oLanguage.sDecimal; return $a(a, c) ? "num" + c : null }, function (a) { if (a && !(a instanceof Date) && !Zb.test(a)) return null; var b = Date.parse(a); return null !== b && !isNaN(b) || M(a) ? "date" : null }, function (a, b) { var c = b.oLanguage.sDecimal; return $a(a, c, !0) ? "num-fmt" + c : null }, function (a, b) { var c = b.oLanguage.sDecimal; return Pb(a, c) ? "html-num" + c : null }, function (a, b) { var c = b.oLanguage.sDecimal; return Pb(a, c, !0) ? "html-num-fmt" + c : null }, function (a) {
        return M(a) ||
            "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
    }]); h.extend(n.ext.type.search, { html: function (a) { return M(a) ? a : "string" === typeof a ? a.replace(Mb, " ").replace(Aa, "") : "" }, string: function (a) { return M(a) ? a : "string" === typeof a ? a.replace(Mb, " ") : a } }); var za = function (a, b, c, d) { if (0 !== a && (!a || "-" === a)) return -Infinity; b && (a = Ob(a, b)); a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, ""))); return 1 * a }; h.extend(x.type.order, {
        "date-pre": function (a) { a = Date.parse(a); return isNaN(a) ? -Infinity : a }, "html-pre": function (a) {
            return M(a) ?
                "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
        }, "string-pre": function (a) { return M(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString() }, "string-asc": function (a, b) { return a < b ? -1 : a > b ? 1 : 0 }, "string-desc": function (a, b) { return a < b ? 1 : a > b ? -1 : 0 }
    }); Da(""); h.extend(!0, n.ext.renderer, {
        header: {
            _: function (a, b, c, d) {
                h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
                    if (a === f) {
                        e = c.idx; b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc :
                            c.sSortingClass)
                    }
                })
            }, jqueryui: function (a, b, c, d) {
                h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b); h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
                    if (a === f) {
                        e = c.idx; b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass); b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] ==
                            "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                    }
                })
            }
        }
    }); var Vb = function (a) { return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a }; n.render = {
        number: function (a, b, c, d, e) {
            return {
                display: function (f) {
                    if ("number" !== typeof f && "string" !== typeof f) return f; var g = 0 > f ? "-" : "", h = parseFloat(f); if (isNaN(h)) return Vb(f); h = h.toFixed(c); f = Math.abs(h); h = parseInt(f, 10); f = c ? b + (f - h).toFixed(c).substring(2) : ""; return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                        a) + f + (e || "")
                }
            }
        }, text: function () { return { display: Vb } }
    }; h.extend(n.ext.internal, {
        _fnExternApiFunc: Lb, _fnBuildAjax: sa, _fnAjaxUpdate: lb, _fnAjaxParameters: ub, _fnAjaxUpdateDraw: vb, _fnAjaxDataSrc: ta, _fnAddColumn: Ea, _fnColumnOptions: ka, _fnAdjustColumnSizing: $, _fnVisibleToColumnIndex: aa, _fnColumnIndexToVisible: ba, _fnVisbleColumns: V, _fnGetColumns: ma, _fnColumnTypes: Ga, _fnApplyColumnDefs: ib, _fnHungarianMap: Z, _fnCamelToHungarian: J, _fnLanguageCompat: Ca, _fnBrowserDetect: gb, _fnAddData: O, _fnAddTr: na, _fnNodeToDataIndex: function (a,
            b) { return b._DT_RowIndex !== k ? b._DT_RowIndex : null }, _fnNodeToColumnIndex: function (a, b, c) { return h.inArray(c, a.aoData[b].anCells) }, _fnGetCellData: B, _fnSetCellData: jb, _fnSplitObjNotation: Ja, _fnGetObjectDataFn: S, _fnSetObjectDataFn: N, _fnGetDataMaster: Ka, _fnClearTable: oa, _fnDeleteIndex: pa, _fnInvalidate: da, _fnGetRowElements: Ia, _fnCreateTr: Ha, _fnBuildHead: kb, _fnDrawHead: fa, _fnDraw: P, _fnReDraw: T, _fnAddOptionsHtml: nb, _fnDetectHeader: ea, _fnGetUniqueThs: ra, _fnFeatureHtmlFilter: pb, _fnFilterComplete: ga, _fnFilterCustom: yb,
        _fnFilterColumn: xb, _fnFilter: wb, _fnFilterCreateSearch: Pa, _fnEscapeRegex: Qa, _fnFilterData: zb, _fnFeatureHtmlInfo: sb, _fnUpdateInfo: Cb, _fnInfoMacros: Db, _fnInitialise: ha, _fnInitComplete: ua, _fnLengthChange: Ra, _fnFeatureHtmlLength: ob, _fnFeatureHtmlPaginate: tb, _fnPageChange: Ta, _fnFeatureHtmlProcessing: qb, _fnProcessingDisplay: C, _fnFeatureHtmlTable: rb, _fnScrollDraw: la, _fnApplyToChildren: I, _fnCalculateColumnWidths: Fa, _fnThrottle: Oa, _fnConvertToWidth: Eb, _fnGetWidestNode: Fb, _fnGetMaxLenString: Gb, _fnStringToCss: v,
        _fnSortFlatten: X, _fnSort: mb, _fnSortAria: Ib, _fnSortListener: Va, _fnSortAttachListener: Ma, _fnSortingClasses: wa, _fnSortData: Hb, _fnSaveState: xa, _fnLoadState: Jb, _fnSettingsFromNode: ya, _fnLog: K, _fnMap: F, _fnBindAction: Wa, _fnCallbackReg: z, _fnCallbackFire: r, _fnLengthOverflow: Sa, _fnRenderer: Na, _fnDataSource: y, _fnRowAttributes: La, _fnExtend: Xa, _fnCalculateEnd: function () { }
    }); h.fn.dataTable = n; n.$ = h; h.fn.dataTableSettings = n.settings; h.fn.dataTableExt = n.ext; h.fn.DataTable = function (a) { return h(this).dataTable(a).api() };
    h.each(n, function (a, b) { h.fn.DataTable[a] = b }); return h.fn.dataTable
});


/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
(function (b) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) { return b(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, d) { a || (a = window); if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$; return b(d, a, a.document) } : b(jQuery, window, document) })(function (b, a, d, m) {
    var f = b.fn.dataTable; b.extend(!0, f.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
    }); b.extend(f.ext.classes, { sWrapper: "dataTables_wrapper dt-bootstrap4", sFilterInput: "form-control form-control-sm", sLengthSelect: "custom-select custom-select-sm form-control form-control-sm", sProcessing: "dataTables_processing card", sPageButton: "paginate_button page-item" }); f.ext.renderer.pageButton.bootstrap = function (a, h, r, s, j, n) {
        var o = new f.Api(a), t = a.oClasses, k = a.oLanguage.oPaginate, u = a.oLanguage.oAria.paginate || {}, e, g, p = 0, q = function (d, f) {
            var l, h, i, c, m = function (a) {
                a.preventDefault();
                !b(a.currentTarget).hasClass("disabled") && o.page() != a.data.action && o.page(a.data.action).draw("page")
            }; l = 0; for (h = f.length; l < h; l++)if (c = f[l], b.isArray(c)) q(d, c); else {
                g = e = ""; switch (c) { case "ellipsis": e = "&#x2026;"; g = "disabled"; break; case "first": e = k.sFirst; g = c + (0 < j ? "" : " disabled"); break; case "previous": e = k.sPrevious; g = c + (0 < j ? "" : " disabled"); break; case "next": e = k.sNext; g = c + (j < n - 1 ? "" : " disabled"); break; case "last": e = k.sLast; g = c + (j < n - 1 ? "" : " disabled"); break; default: e = c + 1, g = j === c ? "active" : "" }e && (i = b("<li>",
                    { "class": t.sPageButton + " " + g, id: 0 === r && "string" === typeof c ? a.sTableId + "_" + c : null }).append(b("<a>", { href: "#", "aria-controls": a.sTableId, "aria-label": u[c], "data-dt-idx": p, tabindex: a.iTabIndex, "class": "page-link" }).html(e)).appendTo(d), a.oApi._fnBindAction(i, { action: c }, m), p++)
            }
        }, i; try { i = b(h).find(d.activeElement).data("dt-idx") } catch (v) { } q(b(h).empty().html('<ul class="pagination"/>').children("ul"), s); i !== m && b(h).find("[data-dt-idx=" + i + "]").focus()
    }; return f
});


/*!
 Buttons for DataTables 1.5.6
 ©2016-2019 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.findInternal = function (d, q, n) { d instanceof String && (d = String(d)); for (var l = d.length, u = 0; u < l; u++) { var p = d[u]; if (q.call(n, p, u, d)) return { i: u, v: p } } return { i: -1, v: void 0 } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (d, q, n) { d != Array.prototype && d != Object.prototype && (d[q] = n.value) }; $jscomp.getGlobal = function (d) { return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d }; $jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (d, q, n, l) { if (q) { n = $jscomp.global; d = d.split("."); for (l = 0; l < d.length - 1; l++) { var u = d[l]; u in n || (n[u] = {}); n = n[u] } d = d[d.length - 1]; l = n[d]; q = q(l); q != l && null != q && $jscomp.defineProperty(n, d, { configurable: !0, writable: !0, value: q }) } }; $jscomp.polyfill("Array.prototype.find", function (d) { return d ? d : function (d, n) { return $jscomp.findInternal(this, d, n).v } }, "es6", "es3");
(function (d) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (q) { return d(q, window, document) }) : "object" === typeof exports ? module.exports = function (q, n) { q || (q = window); n && n.fn.dataTable || (n = require("datatables.net")(q, n).$); return d(n, q, q.document) } : d(jQuery, window, document) })(function (d, q, n, l) {
    function u(a) { a = new p.Api(a); var b = a.init().buttons || p.defaults.buttons; return (new t(a, b)).container() } var p = d.fn.dataTable, B = 0, C = 0, r = p.ext.buttons, t = function (a, b) {
        if (!(this instanceof
            t)) return function (b) { return (new t(b, a)).container() }; "undefined" === typeof b && (b = {}); !0 === b && (b = {}); d.isArray(b) && (b = { buttons: b }); this.c = d.extend(!0, {}, t.defaults, b); b.buttons && (this.c.buttons = b.buttons); this.s = { dt: new p.Api(a), buttons: [], listenKeys: "", namespace: "dtb" + B++ }; this.dom = { container: d("<" + this.c.dom.container.tag + "/>").addClass(this.c.dom.container.className) }; this._constructor()
    }; d.extend(t.prototype, {
        action: function (a, b) {
            a = this._nodeToButton(a); if (b === l) return a.conf.action; a.conf.action =
                b; return this
        }, active: function (a, b) { var c = this._nodeToButton(a); a = this.c.dom.button.active; c = d(c.node); if (b === l) return c.hasClass(a); c.toggleClass(a, b === l ? !0 : b); return this }, add: function (a, b) { var c = this.s.buttons; if ("string" === typeof b) { b = b.split("-"); c = this.s; for (var d = 0, f = b.length - 1; d < f; d++)c = c.buttons[1 * b[d]]; c = c.buttons; b = 1 * b[b.length - 1] } this._expandButton(c, a, !1, b); this._draw(); return this }, container: function () { return this.dom.container }, disable: function (a) {
            a = this._nodeToButton(a); d(a.node).addClass(this.c.dom.button.disabled);
            return this
        }, destroy: function () { d("body").off("keyup." + this.s.namespace); var a = this.s.buttons.slice(), b; var c = 0; for (b = a.length; c < b; c++)this.remove(a[c].node); this.dom.container.remove(); a = this.s.dt.settings()[0]; c = 0; for (b = a.length; c < b; c++)if (a.inst === this) { a.splice(c, 1); break } return this }, enable: function (a, b) { if (!1 === b) return this.disable(a); a = this._nodeToButton(a); d(a.node).removeClass(this.c.dom.button.disabled); return this }, name: function () { return this.c.name }, node: function (a) {
            if (!a) return this.dom.container;
            a = this._nodeToButton(a); return d(a.node)
        }, processing: function (a, b) { a = this._nodeToButton(a); if (b === l) return d(a.node).hasClass("processing"); d(a.node).toggleClass("processing", b); return this }, remove: function (a) { var b = this._nodeToButton(a), c = this._nodeToHost(a), e = this.s.dt; if (b.buttons.length) for (var f = b.buttons.length - 1; 0 <= f; f--)this.remove(b.buttons[f].node); b.conf.destroy && b.conf.destroy.call(e.button(a), e, d(a), b.conf); this._removeKey(b.conf); d(b.node).remove(); a = d.inArray(b, c); c.splice(a, 1); return this },
        text: function (a, b) { var c = this._nodeToButton(a); a = this.c.dom.collection.buttonLiner; a = c.inCollection && a && a.tag ? a.tag : this.c.dom.buttonLiner.tag; var e = this.s.dt, f = d(c.node), g = function (a) { return "function" === typeof a ? a(e, f, c.conf) : a }; if (b === l) return g(c.conf.text); c.conf.text = b; a ? f.children(a).html(g(b)) : f.html(g(b)); return this }, _constructor: function () {
            var a = this, b = this.s.dt, c = b.settings()[0], e = this.c.buttons; c._buttons || (c._buttons = []); c._buttons.push({ inst: this, name: this.c.name }); for (var f = 0, g = e.length; f <
                g; f++)this.add(e[f]); b.on("destroy", function (b, d) { d === c && a.destroy() }); d("body").on("keyup." + this.s.namespace, function (b) { if (!n.activeElement || n.activeElement === n.body) { var c = String.fromCharCode(b.keyCode).toLowerCase(); -1 !== a.s.listenKeys.toLowerCase().indexOf(c) && a._keypress(c, b) } })
        }, _addKey: function (a) { a.key && (this.s.listenKeys += d.isPlainObject(a.key) ? a.key.key : a.key) }, _draw: function (a, b) {
            a || (a = this.dom.container, b = this.s.buttons); a.children().detach(); for (var c = 0, d = b.length; c < d; c++)a.append(b[c].inserter),
                a.append(" "), b[c].buttons && b[c].buttons.length && this._draw(b[c].collection, b[c].buttons)
        }, _expandButton: function (a, b, c, e) {
            var f = this.s.dt, g = 0; b = d.isArray(b) ? b : [b]; for (var h = 0, k = b.length; h < k; h++) {
                var v = this._resolveExtends(b[h]); if (v) if (d.isArray(v)) this._expandButton(a, v, c, e); else {
                    var m = this._buildButton(v, c); if (m) {
                        e !== l ? (a.splice(e, 0, m), e++) : a.push(m); if (m.conf.buttons) {
                            var y = this.c.dom.collection; m.collection = d("<" + y.tag + "/>").addClass(y.className).attr("role", "menu"); m.conf._collection = m.collection;
                            this._expandButton(m.buttons, m.conf.buttons, !0, e)
                        } v.init && v.init.call(f.button(m.node), f, d(m.node), v); g++
                    }
                }
            }
        }, _buildButton: function (a, b) {
            var c = this.c.dom.button, e = this.c.dom.buttonLiner, f = this.c.dom.collection, g = this.s.dt, h = function (b) { return "function" === typeof b ? b(g, m, a) : b }; b && f.button && (c = f.button); b && f.buttonLiner && (e = f.buttonLiner); if (a.available && !a.available(g, a)) return !1; var k = function (a, b, c, e) {
                e.action.call(b.button(c), a, b, c, e); d(b.table().node()).triggerHandler("buttons-action.dt", [b.button(c),
                    b, c, e])
            }; f = a.tag || c.tag; var v = a.clickBlurs === l ? !0 : a.clickBlurs, m = d("<" + f + "/>").addClass(c.className).attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls", this.s.dt.table().node().id).on("click.dtb", function (b) { b.preventDefault(); !m.hasClass(c.disabled) && a.action && k(b, g, m, a); v && m.blur() }).on("keyup.dtb", function (b) { 13 === b.keyCode && !m.hasClass(c.disabled) && a.action && k(b, g, m, a) }); "a" === f.toLowerCase() && m.attr("href", "#"); "button" === f.toLowerCase() && m.attr("type", "button"); e.tag ? (f =
                d("<" + e.tag + "/>").html(h(a.text)).addClass(e.className), "a" === e.tag.toLowerCase() && f.attr("href", "#"), m.append(f)) : m.html(h(a.text)); !1 === a.enabled && m.addClass(c.disabled); a.className && m.addClass(a.className); a.titleAttr && m.attr("title", h(a.titleAttr)); a.attr && m.attr(a.attr); a.namespace || (a.namespace = ".dt-button-" + C++); e = (e = this.c.dom.buttonContainer) && e.tag ? d("<" + e.tag + "/>").addClass(e.className).append(m) : m; this._addKey(a); this.c.buttonCreated && (e = this.c.buttonCreated(a, e)); return {
                    conf: a, node: m.get(0),
                    inserter: e, buttons: [], inCollection: b, collection: null
                }
        }, _nodeToButton: function (a, b) { b || (b = this.s.buttons); for (var c = 0, d = b.length; c < d; c++) { if (b[c].node === a) return b[c]; if (b[c].buttons.length) { var f = this._nodeToButton(a, b[c].buttons); if (f) return f } } }, _nodeToHost: function (a, b) { b || (b = this.s.buttons); for (var c = 0, d = b.length; c < d; c++) { if (b[c].node === a) return b; if (b[c].buttons.length) { var f = this._nodeToHost(a, b[c].buttons); if (f) return f } } }, _keypress: function (a, b) {
            if (!b._buttonsHandled) {
                var c = function (e) {
                    for (var f =
                        0, g = e.length; f < g; f++) { var h = e[f].conf, k = e[f].node; h.key && (h.key === a ? (b._buttonsHandled = !0, d(k).click()) : !d.isPlainObject(h.key) || h.key.key !== a || h.key.shiftKey && !b.shiftKey || h.key.altKey && !b.altKey || h.key.ctrlKey && !b.ctrlKey || h.key.metaKey && !b.metaKey || (b._buttonsHandled = !0, d(k).click())); e[f].buttons.length && c(e[f].buttons) }
                }; c(this.s.buttons)
            }
        }, _removeKey: function (a) {
            if (a.key) {
                var b = d.isPlainObject(a.key) ? a.key.key : a.key; a = this.s.listenKeys.split(""); b = d.inArray(b, a); a.splice(b, 1); this.s.listenKeys =
                    a.join("")
            }
        }, _resolveExtends: function (a) {
            var b = this.s.dt, c, e = function (c) { for (var e = 0; !d.isPlainObject(c) && !d.isArray(c);) { if (c === l) return; if ("function" === typeof c) { if (c = c(b, a), !c) return !1 } else if ("string" === typeof c) { if (!r[c]) throw "Unknown button type: " + c; c = r[c] } e++; if (30 < e) throw "Buttons: Too many iterations"; } return d.isArray(c) ? c : d.extend({}, c) }; for (a = e(a); a && a.extend;) {
                if (!r[a.extend]) throw "Cannot extend unknown button type: " + a.extend; var f = e(r[a.extend]); if (d.isArray(f)) return f; if (!f) return !1;
                var g = f.className; a = d.extend({}, f, a); g && a.className !== g && (a.className = g + " " + a.className); var h = a.postfixButtons; if (h) { a.buttons || (a.buttons = []); g = 0; for (c = h.length; g < c; g++)a.buttons.push(h[g]); a.postfixButtons = null } if (h = a.prefixButtons) { a.buttons || (a.buttons = []); g = 0; for (c = h.length; g < c; g++)a.buttons.splice(g, 0, h[g]); a.prefixButtons = null } a.extend = f.extend
            } return a
        }
    }); t.background = function (a, b, c, e) {
    c === l && (c = 400); e || (e = n.body); a ? d("<div/>").addClass(b).css("display", "none").insertAfter(e).stop().fadeIn(c) :
        d("div." + b).stop().fadeOut(c, function () { d(this).removeClass(b).remove() })
    }; t.instanceSelector = function (a, b) { if (!a) return d.map(b, function (a) { return a.inst }); var c = [], e = d.map(b, function (a) { return a.name }), f = function (a) { if (d.isArray(a)) for (var g = 0, k = a.length; g < k; g++)f(a[g]); else "string" === typeof a ? -1 !== a.indexOf(",") ? f(a.split(",")) : (a = d.inArray(d.trim(a), e), -1 !== a && c.push(b[a].inst)) : "number" === typeof a && c.push(b[a].inst) }; f(a); return c }; t.buttonSelector = function (a, b) {
        for (var c = [], e = function (a, b, c) {
            for (var d,
                f, g = 0, k = b.length; g < k; g++)if (d = b[g]) f = c !== l ? c + g : g + "", a.push({ node: d.node, name: d.conf.name, idx: f }), d.buttons && e(a, d.buttons, f + "-")
        }, f = function (a, b) {
            var g, h = []; e(h, b.s.buttons); var k = d.map(h, function (a) { return a.node }); if (d.isArray(a) || a instanceof d) for (k = 0, g = a.length; k < g; k++)f(a[k], b); else if (null === a || a === l || "*" === a) for (k = 0, g = h.length; k < g; k++)c.push({ inst: b, node: h[k].node }); else if ("number" === typeof a) c.push({ inst: b, node: b.s.buttons[a].node }); else if ("string" === typeof a) if (-1 !== a.indexOf(",")) for (h =
                a.split(","), k = 0, g = h.length; k < g; k++)f(d.trim(h[k]), b); else if (a.match(/^\d+(\-\d+)*$/)) k = d.map(h, function (a) { return a.idx }), c.push({ inst: b, node: h[d.inArray(a, k)].node }); else if (-1 !== a.indexOf(":name")) for (a = a.replace(":name", ""), k = 0, g = h.length; k < g; k++)h[k].name === a && c.push({ inst: b, node: h[k].node }); else d(k).filter(a).each(function () { c.push({ inst: b, node: this }) }); else "object" === typeof a && a.nodeName && (h = d.inArray(a, k), -1 !== h && c.push({ inst: b, node: k[h] }))
        }, g = 0, h = a.length; g < h; g++)f(b, a[g]); return c
    }; t.defaults =
        { buttons: ["copy", "excel", "csv", "pdf", "print"], name: "main", tabIndex: 0, dom: { container: { tag: "div", className: "dt-buttons" }, collection: { tag: "div", className: "dt-button-collection" }, button: { tag: "ActiveXObject" in q ? "a" : "button", className: "dt-button", active: "active", disabled: "disabled" }, buttonLiner: { tag: "span", className: "" } } }; t.version = "1.5.6"; d.extend(r, {
            collection: {
                text: function (a) { return a.i18n("buttons.collection", "Collection") }, className: "buttons-collection", init: function (a, b, c) {
                    b.attr("aria-expanded",
                        !1)
                }, action: function (a, b, c, e) {
                    var f = function () { b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes().each(function () { var a = d(this).siblings(".dt-button-collection"); a.length && a.stop().fadeOut(e.fade, function () { a.detach() }); d(this).attr("aria-expanded", "false") }); d("div.dt-button-background").off("click.dtb-collection"); t.background(!1, e.backgroundClassName, e.fade, l); d("body").off(".dtb-collection"); b.off("buttons-action.b-internal") }; a = "true" === c.attr("aria-expanded"); f(); if (!a) {
                        var g =
                            d(c).parents("div.dt-button-collection"); a = c.position(); var h = d(b.table().container()), k = !1, l = c; c.attr("aria-expanded", "true"); g.length && (k = d(".dt-button-collection").position(), l = g, d("body").trigger("click.dtb-collection")); l.parents("body")[0] !== n.body && (l = n.body.lastChild); e._collection.find(".dt-button-collection-title").remove(); e._collection.prepend('<div class="dt-button-collection-title">' + e.collectionTitle + "</div>"); e._collection.addClass(e.collectionLayout).css("display", "none").insertAfter(l).stop().fadeIn(e.fade);
                        g = e._collection.css("position"); if (k && "absolute" === g) e._collection.css({ top: k.top, left: k.left }); else if ("absolute" === g) {
                            e._collection.css({ top: a.top + c.outerHeight(), left: a.left }); k = h.offset().top + h.height(); k = a.top + c.outerHeight() + e._collection.outerHeight() - k; g = a.top - e._collection.outerHeight(); var m = h.offset().top; (k > m - g || e.dropup) && e._collection.css("top", a.top - e._collection.outerHeight() - 5); e._collection.hasClass(e.rightAlignClassName) && e._collection.css("left", a.left + c.outerWidth() - e._collection.outerWidth());
                            k = a.left + e._collection.outerWidth(); h = h.offset().left + h.width(); k > h && e._collection.css("left", a.left - (k - h)); c = c.offset().left + e._collection.outerWidth(); c > d(q).width() && e._collection.css("left", a.left - (c - d(q).width()))
                        } else c = e._collection.height() / 2, c > d(q).height() / 2 && (c = d(q).height() / 2), e._collection.css("marginTop", -1 * c); e.background && t.background(!0, e.backgroundClassName, e.fade, l); setTimeout(function () {
                            d("div.dt-button-background").on("click.dtb-collection", function () { }); d("body").on("click.dtb-collection",
                                function (a) { var b = d.fn.addBack ? "addBack" : "andSelf"; d(a.target).parents()[b]().filter(e._collection).length || f() }).on("keyup.dtb-collection", function (a) { 27 === a.keyCode && f() }); if (e.autoClose) b.on("buttons-action.b-internal", function () { f() })
                        }, 10)
                    }
                }, background: !0, collectionLayout: "", collectionTitle: "", backgroundClassName: "dt-button-background", rightAlignClassName: "dt-button-right", autoClose: !1, fade: 400, attr: { "aria-haspopup": !0 }
            }, copy: function (a, b) {
                if (r.copyHtml5) return "copyHtml5"; if (r.copyFlash && r.copyFlash.available(a,
                    b)) return "copyFlash"
            }, csv: function (a, b) { if (r.csvHtml5 && r.csvHtml5.available(a, b)) return "csvHtml5"; if (r.csvFlash && r.csvFlash.available(a, b)) return "csvFlash" }, excel: function (a, b) { if (r.excelHtml5 && r.excelHtml5.available(a, b)) return "excelHtml5"; if (r.excelFlash && r.excelFlash.available(a, b)) return "excelFlash" }, pdf: function (a, b) { if (r.pdfHtml5 && r.pdfHtml5.available(a, b)) return "pdfHtml5"; if (r.pdfFlash && r.pdfFlash.available(a, b)) return "pdfFlash" }, pageLength: function (a) {
                a = a.settings()[0].aLengthMenu; var b = d.isArray(a[0]) ?
                    a[0] : a, c = d.isArray(a[0]) ? a[1] : a; return {
                        extend: "collection", text: function (a) { return a.i18n("buttons.pageLength", { "-1": "Show all rows", _: "Show %d rows" }, a.page.len()) }, className: "buttons-page-length", autoClose: !0, buttons: d.map(b, function (a, b) { return { text: c[b], className: "button-page-length", action: function (b, c) { c.page.len(a).draw() }, init: function (b, c, d) { var e = this; c = function () { e.active(b.page.len() === a) }; b.on("length.dt" + d.namespace, c); c() }, destroy: function (a, b, c) { a.off("length.dt" + c.namespace) } } }),
                        init: function (a, b, c) { var d = this; a.on("length.dt" + c.namespace, function () { d.text(c.text) }) }, destroy: function (a, b, c) { a.off("length.dt" + c.namespace) }
                    }
            }
        }); p.Api.register("buttons()", function (a, b) { b === l && (b = a, a = l); this.selector.buttonGroup = a; var c = this.iterator(!0, "table", function (c) { if (c._buttons) return t.buttonSelector(t.instanceSelector(a, c._buttons), b) }, !0); c._groupSelector = a; return c }); p.Api.register("button()", function (a, b) { a = this.buttons(a, b); 1 < a.length && a.splice(1, a.length); return a }); p.Api.registerPlural("buttons().active()",
            "button().active()", function (a) { return a === l ? this.map(function (a) { return a.inst.active(a.node) }) : this.each(function (b) { b.inst.active(b.node, a) }) }); p.Api.registerPlural("buttons().action()", "button().action()", function (a) { return a === l ? this.map(function (a) { return a.inst.action(a.node) }) : this.each(function (b) { b.inst.action(b.node, a) }) }); p.Api.register(["buttons().enable()", "button().enable()"], function (a) { return this.each(function (b) { b.inst.enable(b.node, a) }) }); p.Api.register(["buttons().disable()",
                "button().disable()"], function () { return this.each(function (a) { a.inst.disable(a.node) }) }); p.Api.registerPlural("buttons().nodes()", "button().node()", function () { var a = d(); d(this.each(function (b) { a = a.add(b.inst.node(b.node)) })); return a }); p.Api.registerPlural("buttons().processing()", "button().processing()", function (a) { return a === l ? this.map(function (a) { return a.inst.processing(a.node) }) : this.each(function (b) { b.inst.processing(b.node, a) }) }); p.Api.registerPlural("buttons().text()", "button().text()", function (a) {
                    return a ===
                        l ? this.map(function (a) { return a.inst.text(a.node) }) : this.each(function (b) { b.inst.text(b.node, a) })
                }); p.Api.registerPlural("buttons().trigger()", "button().trigger()", function () { return this.each(function (a) { a.inst.node(a.node).trigger("click") }) }); p.Api.registerPlural("buttons().containers()", "buttons().container()", function () {
                    var a = d(), b = this._groupSelector; this.iterator(!0, "table", function (c) { if (c._buttons) { c = t.instanceSelector(b, c._buttons); for (var d = 0, f = c.length; d < f; d++)a = a.add(c[d].container()) } });
                    return a
                }); p.Api.register("button().add()", function (a, b) { var c = this.context; c.length && (c = t.instanceSelector(this._groupSelector, c[0]._buttons), c.length && c[0].add(b, a)); return this.button(this._groupSelector, a) }); p.Api.register("buttons().destroy()", function () { this.pluck("inst").unique().each(function (a) { a.destroy() }); return this }); p.Api.registerPlural("buttons().remove()", "buttons().remove()", function () { this.each(function (a) { a.inst.remove(a.node) }); return this }); var w; p.Api.register("buttons.info()",
                    function (a, b, c) {
                        var e = this; if (!1 === a) return d("#datatables_buttons_info").fadeOut(function () { d(this).remove() }), clearTimeout(w), w = null, this; w && clearTimeout(w); d("#datatables_buttons_info").length && d("#datatables_buttons_info").remove(); a = a ? "<h2>" + a + "</h2>" : ""; d('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a).append(d("<div/>")["string" === typeof b ? "html" : "append"](b)).css("display", "none").appendTo("body").fadeIn(); c !== l && 0 !== c && (w = setTimeout(function () { e.buttons.info(!1) }, c));
                        return this
                    }); p.Api.register("buttons.exportData()", function (a) { if (this.context.length) return D(new p.Api(this.context[0]), a) }); p.Api.register("buttons.exportInfo()", function (a) {
                        a || (a = {}); var b = a; var c = "*" === b.filename && "*" !== b.title && b.title !== l && null !== b.title && "" !== b.title ? b.title : b.filename; "function" === typeof c && (c = c()); c === l || null === c ? c = null : (-1 !== c.indexOf("*") && (c = d.trim(c.replace("*", d("head > title").text()))), c = c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, ""), (b = x(b.extension)) ||
                            (b = ""), c += b); b = x(a.title); b = null === b ? null : -1 !== b.indexOf("*") ? b.replace("*", d("head > title").text() || "Exported data") : b; return { filename: c, title: b, messageTop: z(this, a.message || a.messageTop, "top"), messageBottom: z(this, a.messageBottom, "bottom") }
                    }); var x = function (a) { return null === a || a === l ? null : "function" === typeof a ? a() : a }, z = function (a, b, c) { b = x(b); if (null === b) return null; a = d("caption", a.table().container()).eq(0); return "*" === b ? a.css("caption-side") !== c ? null : a.length ? a.text() : "" : b }, A = d("<textarea/>")[0],
                        D = function (a, b) {
                            var c = d.extend(!0, {}, { rows: null, columns: "", modifier: { search: "applied", order: "applied" }, orthogonal: "display", stripHtml: !0, stripNewlines: !0, decodeEntities: !0, trim: !0, format: { header: function (a) { return e(a) }, footer: function (a) { return e(a) }, body: function (a) { return e(a) } }, customizeData: null }, b), e = function (a) {
                                if ("string" !== typeof a) return a; a = a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""); a = a.replace(/<!\-\-.*?\-\->/g, ""); c.stripHtml && (a = a.replace(/<[^>]*>/g, "")); c.trim &&
                                    (a = a.replace(/^\s+|\s+$/g, "")); c.stripNewlines && (a = a.replace(/\n/g, " ")); c.decodeEntities && (A.innerHTML = a, a = A.value); return a
                            }; b = a.columns(c.columns).indexes().map(function (b) { var d = a.column(b).header(); return c.format.header(d.innerHTML, b, d) }).toArray(); var f = a.table().footer() ? a.columns(c.columns).indexes().map(function (b) { var d = a.column(b).footer(); return c.format.footer(d ? d.innerHTML : "", b, d) }).toArray() : null, g = d.extend({}, c.modifier); a.select && "function" === typeof a.select.info && g.selected === l &&
                                a.rows(c.rows, d.extend({ selected: !0 }, g)).any() && d.extend(g, { selected: !0 }); g = a.rows(c.rows, g).indexes().toArray(); var h = a.cells(g, c.columns); g = h.render(c.orthogonal).toArray(); h = h.nodes().toArray(); for (var k = b.length, p = [], m = 0, n = 0, q = 0 < k ? g.length / k : 0; n < q; n++) { for (var t = [k], r = 0; r < k; r++)t[r] = c.format.body(g[m], n, r, h[m]), m++; p[n] = t } b = { header: b, footer: f, body: p }; c.customizeData && c.customizeData(b); return b
                        }; d.fn.dataTable.Buttons = t; d.fn.DataTable.Buttons = t; d(n).on("init.dt plugin-init.dt", function (a, b) {
                        "dt" ===
                            a.namespace && (a = b.oInit.buttons || p.defaults.buttons) && !b._buttons && (new t(b, a)).container()
                        }); p.ext.feature.push({ fnInit: u, cFeature: "B" }); p.ext.features && p.ext.features.register("buttons", u); return t
});


/*!
 Bootstrap integration for DataTables' Buttons
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function (c) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-buttons"], function (a) { return c(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, b) { a || (a = window); b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$); b.fn.dataTable.Buttons || require("datatables.net-buttons")(a, b); return c(b, a, a.document) } : c(jQuery, window, document) })(function (c, a, b, d) {
    a = c.fn.dataTable; c.extend(!0, a.Buttons.defaults, {
        dom: {
            container: { className: "dt-buttons btn-group" },
            button: { className: "btn btn-secondary" }, collection: { tag: "div", className: "dt-button-collection dropdown-menu", button: { tag: "a", className: "dt-button dropdown-item", active: "active", disabled: "disabled" } }
        }, buttonCreated: function (a, b) { return a.buttons ? c('<div class="btn-group"/>').append(b) : b }
    }); a.ext.buttons.collection.className += " dropdown-toggle"; a.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right"; return a.Buttons
});


/*!
 HTML5 export buttons for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license

 FileSaver.js (1.3.3) - MIT license
 Copyright © 2016 Eli Grey - http://eligrey.com
*/
(function (f) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (g) { return f(g, window, document) }) : "object" === typeof exports ? module.exports = function (g, p, z, t) { g || (g = window); p && p.fn.dataTable || (p = require("datatables.net")(g, p).$); p.fn.dataTable.Buttons || require("datatables.net-buttons")(g, p); return f(p, g, g.document, z, t) } : f(jQuery, window, document) })(function (f, g, p, z, t, w) {
    function A(a) {
        for (var b = ""; 0 <= a;)b = String.fromCharCode(a % 26 + 65) + b, a = Math.floor(a /
            26) - 1; return b
    } function E(a, b) {
    y === w && (y = -1 === C.serializeToString(f.parseXML(F["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r")); f.each(b, function (b, c) {
        if (f.isPlainObject(c)) b = a.folder(b), E(b, c); else {
            if (y) {
                var d = c.childNodes[0], e, h = []; for (e = d.attributes.length - 1; 0 <= e; e--) { var m = d.attributes[e].nodeName; var k = d.attributes[e].nodeValue; -1 !== m.indexOf(":") && (h.push({ name: m, value: k }), d.removeAttribute(m)) } e = 0; for (m = h.length; e < m; e++)k = c.createAttribute(h[e].name.replace(":", "_dt_b_namespace_token_")),
                    k.value = h[e].value, d.setAttributeNode(k)
            } c = C.serializeToString(c); y && (-1 === c.indexOf("<?xml") && (c = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + c), c = c.replace(/_dt_b_namespace_token_/g, ":"), c = c.replace(/xmlns:NS[\d]+="" NS[\d]+:/g, "")); c = c.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>"); a.file(b, c)
        }
    })
    } function r(a, b, d) {
        var c = a.createElement(b); d && (d.attr && f(c).attr(d.attr), d.children && f.each(d.children, function (a, b) { c.appendChild(b) }), null !== d.text && d.text !== w && c.appendChild(a.createTextNode(d.text)));
        return c
    } function L(a, b) { var d = a.header[b].length; a.footer && a.footer[b].length > d && (d = a.footer[b].length); for (var c = 0, f = a.body.length; c < f; c++) { var e = a.body[c][b]; e = null !== e && e !== w ? e.toString() : ""; -1 !== e.indexOf("\n") ? (e = e.split("\n"), e.sort(function (a, c) { return c.length - a.length }), e = e[0].length) : e = e.length; e > d && (d = e); if (40 < d) return 54 } d *= 1.35; return 6 < d ? d : 6 } var v = f.fn.dataTable; v.Buttons.pdfMake = function (a) { if (!a) return t || g.pdfMake; t = m_ake }; v.Buttons.jszip = function (a) { if (!a) return z || g.JSZip; z = a };
    var B = function (a) {
        if (!("undefined" === typeof a || "undefined" !== typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var b = a.document.createElementNS("http://www.w3.org/1999/xhtml", "a"), d = "download" in b, c = /constructor/i.test(a.HTMLElement) || a.safari, f = /CriOS\/[\d]+/.test(navigator.userAgent), e = function (c) { (a.setImmediate || a.setTimeout)(function () { throw c; }, 0) }, h = function (c) { setTimeout(function () { "string" === typeof c ? (a.URL || a.webkitURL || a).revokeObjectURL(c) : c.remove() }, 4E4) }, m = function (a) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ?
                    new Blob([String.fromCharCode(65279), a], { type: a.type }) : a
            }, k = function (k, q, n) {
                n || (k = m(k)); var l = this, g = "application/octet-stream" === k.type, D = function () { var a = ["writestart", "progress", "write", "writeend"]; a = [].concat(a); for (var c = a.length; c--;) { var b = l["on" + a[c]]; if ("function" === typeof b) try { b.call(l, l) } catch (M) { e(M) } } }; l.readyState = l.INIT; if (d) {
                    var u = (a.URL || a.webkitURL || a).createObjectURL(k); setTimeout(function () {
                    b.href = u; b.download = q; var a = new MouseEvent("click"); b.dispatchEvent(a); D(); h(u); l.readyState =
                        l.DONE
                    })
                } else (function () { if ((f || g && c) && a.FileReader) { var b = new FileReader; b.onloadend = function () { var c = f ? b.result : b.result.replace(/^data:[^;]*;/, "data:attachment/file;"); a.open(c, "_blank") || (a.location.href = c); l.readyState = l.DONE; D() }; b.readAsDataURL(k); l.readyState = l.INIT } else u || (u = (a.URL || a.webkitURL || a).createObjectURL(k)), g ? a.location.href = u : a.open(u, "_blank") || (a.location.href = u), l.readyState = l.DONE, D(), h(u) })()
            }, n = k.prototype; if ("undefined" !== typeof navigator && navigator.msSaveOrOpenBlob) return function (a,
                c, b) { c = c || a.name || "download"; b || (a = m(a)); return navigator.msSaveOrOpenBlob(a, c) }; n.abort = function () { }; n.readyState = n.INIT = 0; n.WRITING = 1; n.DONE = 2; n.error = n.onwritestart = n.onprogress = n.onwrite = n.onabort = n.onerror = n.onwriteend = null; return function (a, c, b) { return new k(a, c || a.name || "download", b) }
        }
    }("undefined" !== typeof self && self || "undefined" !== typeof g && g || this.content); v.fileSave = B; var G = function (a) { var b = "Sheet1"; a.sheetName && (b = a.sheetName.replace(/[\[\]\*\/\\\?:]/g, "")); return b }, H = function (a) {
        return a.newline ?
            a.newline : navigator.userAgent.match(/Windows/) ? "\r\n" : "\n"
    }, I = function (a, b) { var d = H(b); a = a.buttons.exportData(b.exportOptions); var c = b.fieldBoundary, f = b.fieldSeparator, e = new RegExp(c, "g"), h = b.escapeChar !== w ? b.escapeChar : "\\", m = function (a) { for (var b = "", d = 0, m = a.length; d < m; d++)0 < d && (b += f), b += c ? c + ("" + a[d]).replace(e, h + c) + c : a[d]; return b }, k = b.header ? m(a.header) + d : ""; b = b.footer && a.footer ? d + m(a.footer) : ""; for (var n = [], g = 0, q = a.body.length; g < q; g++)n.push(m(a.body[g])); return { str: k + n.join(d) + b, rows: n.length } },
        J = function () { if (-1 === navigator.userAgent.indexOf("Safari") || -1 !== navigator.userAgent.indexOf("Chrome") || -1 !== navigator.userAgent.indexOf("Opera")) return !1; var a = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/); return a && 1 < a.length && 603.1 > 1 * a[1] ? !0 : !1 }; try { var C = new XMLSerializer, y } catch (a) { } var F = {
            "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
            "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>', "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
            "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
            "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>', "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'
        },
            K = [{ match: /^\-?\d+\.\d%$/, style: 60, fmt: function (a) { return a / 100 } }, { match: /^\-?\d+\.?\d*%$/, style: 56, fmt: function (a) { return a / 100 } }, { match: /^\-?\$[\d,]+.?\d*$/, style: 57 }, { match: /^\-?£[\d,]+.?\d*$/, style: 58 }, { match: /^\-?€[\d,]+.?\d*$/, style: 59 }, { match: /^\-?\d+$/, style: 65 }, { match: /^\-?\d+\.\d{2}$/, style: 66 }, { match: /^\([\d,]+\)$/, style: 61, fmt: function (a) { return -1 * a.replace(/[\(\)]/g, "") } }, { match: /^\([\d,]+\.\d{2}\)$/, style: 62, fmt: function (a) { return -1 * a.replace(/[\(\)]/g, "") } }, { match: /^\-?[\d,]+$/, style: 63 },
            { match: /^\-?[\d,]+\.\d{2}$/, style: 64 }]; v.ext.buttons.copyHtml5 = {
                className: "buttons-copy buttons-html5", text: function (a) { return a.i18n("buttons.copy", "Copy") }, action: function (a, b, d, c) {
                    this.processing(!0); var g = this; a = I(b, c); var e = b.buttons.exportInfo(c), h = H(c), m = a.str; d = f("<div/>").css({ height: 1, width: 1, overflow: "hidden", position: "fixed", top: 0, left: 0 }); e.title && (m = e.title + h + h + m); e.messageTop && (m = e.messageTop + h + h + m); e.messageBottom && (m = m + h + h + e.messageBottom); c.customize && (m = c.customize(m, c, b)); c = f("<textarea readonly/>").val(m).appendTo(d);
                    if (p.queryCommandSupported("copy")) { d.appendTo(b.table().container()); c[0].focus(); c[0].select(); try { var k = p.execCommand("copy"); d.remove(); if (k) { b.buttons.info(b.i18n("buttons.copyTitle", "Copy to clipboard"), b.i18n("buttons.copySuccess", { 1: "Copied one row to clipboard", _: "Copied %d rows to clipboard" }, a.rows), 2E3); this.processing(!1); return } } catch (q) { } } k = f("<span>" + b.i18n("buttons.copyKeys", "Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.") +
                        "</span>").append(d); b.buttons.info(b.i18n("buttons.copyTitle", "Copy to clipboard"), k, 0); c[0].focus(); c[0].select(); var n = f(k).closest(".dt-button-info"), r = function () { n.off("click.buttons-copy"); f(p).off(".buttons-copy"); b.buttons.info(!1) }; n.on("click.buttons-copy", r); f(p).on("keydown.buttons-copy", function (a) { 27 === a.keyCode && (r(), g.processing(!1)) }).on("copy.buttons-copy cut.buttons-copy", function () { r(); g.processing(!1) })
                }, exportOptions: {}, fieldSeparator: "\t", fieldBoundary: "", header: !0, footer: !1,
                title: "*", messageTop: "*", messageBottom: "*"
            }; v.ext.buttons.csvHtml5 = {
                bom: !1, className: "buttons-csv buttons-html5", available: function () { return g.FileReader !== w && g.Blob }, text: function (a) { return a.i18n("buttons.csv", "CSV") }, action: function (a, b, d, c) { this.processing(!0); a = I(b, c).str; d = b.buttons.exportInfo(c); var f = c.charset; c.customize && (a = c.customize(a, c, b)); !1 !== f ? (f || (f = p.characterSet || p.charset), f && (f = ";charset=" + f)) : f = ""; c.bom && (a = "﻿" + a); B(new Blob([a], { type: "text/csv" + f }), d.filename, !0); this.processing(!1) },
                filename: "*", extension: ".csv", exportOptions: {}, fieldSeparator: ",", fieldBoundary: '"', escapeChar: '"', charset: null, header: !0, footer: !1
            }; v.ext.buttons.excelHtml5 = {
                className: "buttons-excel buttons-html5", available: function () { return g.FileReader !== w && (z || g.JSZip) !== w && !J() && C }, text: function (a) { return a.i18n("buttons.excel", "Excel") }, action: function (a, b, d, c) {
                    this.processing(!0); var p = this, e = 0; a = function (a) { return f.parseXML(F[a]) }; var h = a("xl/worksheets/sheet1.xml"), m = h.getElementsByTagName("sheetData")[0];
                    a = { _rels: { ".rels": a("_rels/.rels") }, xl: { _rels: { "workbook.xml.rels": a("xl/_rels/workbook.xml.rels") }, "workbook.xml": a("xl/workbook.xml"), "styles.xml": a("xl/styles.xml"), worksheets: { "sheet1.xml": h } }, "[Content_Types].xml": a("[Content_Types].xml") }; var k = b.buttons.exportData(c.exportOptions), n, v, q = function (a) {
                        n = e + 1; v = r(h, "row", { attr: { r: n } }); for (var b = 0, d = a.length; b < d; b++) {
                            var k = A(b) + "" + n, g = null; if (null === a[b] || a[b] === w || "" === a[b]) if (!0 === c.createEmptyCells) a[b] = ""; else continue; var l = a[b]; a[b] = f.trim(a[b]);
                            for (var q = 0, p = K.length; q < p; q++) { var u = K[q]; if (a[b].match && !a[b].match(/^0\d+/) && a[b].match(u.match)) { g = a[b].replace(/[^\d\.\-]/g, ""); u.fmt && (g = u.fmt(g)); g = r(h, "c", { attr: { r: k, s: u.style }, children: [r(h, "v", { text: g })] }); break } } g || ("number" === typeof a[b] || a[b].match && a[b].match(/^-?\d+(\.\d+)?$/) && !a[b].match(/^0\d+/) ? g = r(h, "c", { attr: { t: "n", r: k }, children: [r(h, "v", { text: a[b] })] }) : (l = l.replace ? l.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "") : l, g = r(h, "c", {
                                attr: { t: "inlineStr", r: k }, children: {
                                    row: r(h,
                                        "is", { children: { row: r(h, "t", { text: l, attr: { "xml:space": "preserve" } }) } })
                                }
                            }))); v.appendChild(g)
                        } m.appendChild(v); e++
                    }; c.customizeData && c.customizeData(k); var x = function (a, b) { var c = f("mergeCells", h); c[0].appendChild(r(h, "mergeCell", { attr: { ref: "A" + a + ":" + A(b) + a } })); c.attr("count", parseFloat(c.attr("count")) + 1); f("row:eq(" + (a - 1) + ") c", h).attr("s", "51") }, l = b.buttons.exportInfo(c); l.title && (q([l.title], e), x(e, k.header.length - 1)); l.messageTop && (q([l.messageTop], e), x(e, k.header.length - 1)); c.header && (q(k.header,
                        e), f("row:last c", h).attr("s", "2")); d = e; var t = 0; for (var y = k.body.length; t < y; t++)q(k.body[t], e); t = e; c.footer && k.footer && (q(k.footer, e), f("row:last c", h).attr("s", "2")); l.messageBottom && (q([l.messageBottom], e), x(e, k.header.length - 1)); q = r(h, "cols"); f("worksheet", h).prepend(q); x = 0; for (y = k.header.length; x < y; x++)q.appendChild(r(h, "col", { attr: { min: x + 1, max: x + 1, width: L(k, x), customWidth: 1 } })); q = a.xl["workbook.xml"]; f("sheets sheet", q).attr("name", G(c)); c.autoFilter && (f("mergeCells", h).before(r(h, "autoFilter",
                            { attr: { ref: "A" + d + ":" + A(k.header.length - 1) + t } })), f("definedNames", q).append(r(q, "definedName", { attr: { name: "_xlnm._FilterDatabase", localSheetId: "0", hidden: 1 }, text: G(c) + "!$A$" + d + ":" + A(k.header.length - 1) + t }))); c.customize && c.customize(a, c, b); 0 === f("mergeCells", h).children().length && f("mergeCells", h).remove(); b = new (z || g.JSZip); d = { type: "blob", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }; E(b, a); b.generateAsync ? b.generateAsync(d).then(function (a) { B(a, l.filename); p.processing(!1) }) :
                                (B(b.generate(d), l.filename), this.processing(!1))
                }, filename: "*", extension: ".xlsx", exportOptions: {}, header: !0, footer: !1, title: "*", messageTop: "*", messageBottom: "*", createEmptyCells: !1, autoFilter: !1, sheetName: ""
            }; v.ext.buttons.pdfHtml5 = {
                className: "buttons-pdf buttons-html5", available: function () { return g.FileReader !== w && (t || g.pdfMake) }, text: function (a) { return a.i18n("buttons.pdf", "PDF") }, action: function (a, b, d, c) {
                    this.processing(!0); d = b.buttons.exportData(c.exportOptions); a = b.buttons.exportInfo(c); var p =
                        []; c.header && p.push(f.map(d.header, function (a) { return { text: "string" === typeof a ? a : a + "", style: "tableHeader" } })); for (var e = 0, h = d.body.length; e < h; e++)p.push(f.map(d.body[e], function (a) { if (null === a || a === w) a = ""; return { text: "string" === typeof a ? a : a + "", style: e % 2 ? "tableBodyEven" : "tableBodyOdd" } })); c.footer && d.footer && p.push(f.map(d.footer, function (a) { return { text: "string" === typeof a ? a : a + "", style: "tableFooter" } })); d = {
                            pageSize: c.pageSize, pageOrientation: c.orientation, content: [{ table: { headerRows: 1, body: p }, layout: "noBorders" }],
                            styles: { tableHeader: { bold: !0, fontSize: 11, color: "white", fillColor: "#2d4154", alignment: "center" }, tableBodyEven: {}, tableBodyOdd: { fillColor: "#f3f3f3" }, tableFooter: { bold: !0, fontSize: 11, color: "white", fillColor: "#2d4154" }, title: { alignment: "center", fontSize: 15 }, message: {} }, defaultStyle: { fontSize: 10 }
                        }; a.messageTop && d.content.unshift({ text: a.messageTop, style: "message", margin: [0, 0, 0, 12] }); a.messageBottom && d.content.push({ text: a.messageBottom, style: "message", margin: [0, 0, 0, 12] }); a.title && d.content.unshift({
                            text: a.title,
                            style: "title", margin: [0, 0, 0, 12]
                        }); c.customize && c.customize(d, c, b); b = (t || g.pdfMake).createPdf(d); "open" !== c.download || J() ? b.download(a.filename) : b.open(); this.processing(!1)
                }, title: "*", filename: "*", extension: ".pdf", exportOptions: {}, orientation: "portrait", pageSize: "A4", header: !0, footer: !1, messageTop: "*", messageBottom: "*", customize: null, download: "download"
            }; return v.Buttons
});


/*!
 Responsive 2.2.2
 2014-2018 SpryMedia Ltd - datatables.net/license
*/
(function (d) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (l) { return d(l, window, document) }) : "object" === typeof exports ? module.exports = function (l, j) { l || (l = window); if (!j || !j.fn.dataTable) j = require("datatables.net")(l, j).$; return d(j, l, l.document) } : d(jQuery, window, document) })(function (d, l, j, q) {
    function t(a, b, c) { var e = b + "-" + c; if (n[e]) return n[e]; for (var d = [], a = a.cell(b, c).node().childNodes, b = 0, c = a.length; b < c; b++)d.push(a[b]); return n[e] = d } function r(a, b, d) {
        var e = b +
            "-" + d; if (n[e]) { for (var a = a.cell(b, d).node(), d = n[e][0].parentNode.childNodes, b = [], f = 0, g = d.length; f < g; f++)b.push(d[f]); d = 0; for (f = b.length; d < f; d++)a.appendChild(b[d]); n[e] = q }
    } var o = d.fn.dataTable, i = function (a, b) {
        if (!o.versionCheck || !o.versionCheck("1.10.10")) throw "DataTables Responsive requires DataTables 1.10.10 or newer"; this.s = { dt: new o.Api(a), columns: [], current: [] }; this.s.dt.settings()[0].responsive || (b && "string" === typeof b.details ? b.details = { type: b.details } : b && !1 === b.details ? b.details = { type: !1 } :
            b && !0 === b.details && (b.details = { type: "inline" }), this.c = d.extend(!0, {}, i.defaults, o.defaults.responsive, b), a.responsive = this, this._constructor())
    }; d.extend(i.prototype, {
        _constructor: function () {
            var a = this, b = this.s.dt, c = b.settings()[0], e = d(l).width(); b.settings()[0]._responsive = this; d(l).on("resize.dtr orientationchange.dtr", o.util.throttle(function () { var b = d(l).width(); b !== e && (a._resize(), e = b) })); c.oApi._fnCallbackReg(c, "aoRowCreatedCallback", function (e) {
            -1 !== d.inArray(!1, a.s.current) && d(">td, >th",
                e).each(function (e) { e = b.column.index("toData", e); !1 === a.s.current[e] && d(this).css("display", "none") })
            }); b.on("destroy.dtr", function () { b.off(".dtr"); d(b.table().body()).off(".dtr"); d(l).off("resize.dtr orientationchange.dtr"); d.each(a.s.current, function (b, e) { !1 === e && a._setColumnVis(b, !0) }) }); this.c.breakpoints.sort(function (a, b) { return a.width < b.width ? 1 : a.width > b.width ? -1 : 0 }); this._classLogic(); this._resizeAuto(); c = this.c.details; !1 !== c.type && (a._detailsInit(), b.on("column-visibility.dtr", function () {
            a._timer &&
                clearTimeout(a._timer); a._timer = setTimeout(function () { a._timer = null; a._classLogic(); a._resizeAuto(); a._resize(); a._redrawChildren() }, 100)
            }), b.on("draw.dtr", function () { a._redrawChildren() }), d(b.table().node()).addClass("dtr-" + c.type)); b.on("column-reorder.dtr", function () { a._classLogic(); a._resizeAuto(); a._resize() }); b.on("column-sizing.dtr", function () { a._resizeAuto(); a._resize() }); b.on("preXhr.dtr", function () {
                var e = []; b.rows().every(function () { this.child.isShown() && e.push(this.id(true)) }); b.one("draw.dtr",
                    function () { a._resizeAuto(); a._resize(); b.rows(e).every(function () { a._detailsDisplay(this, false) }) })
            }); b.on("init.dtr", function () { a._resizeAuto(); a._resize(); d.inArray(false, a.s.current) && b.columns.adjust() }); this._resize()
        }, _columnsVisiblity: function (a) {
            var b = this.s.dt, c = this.s.columns, e, f, g = c.map(function (a, b) { return { columnIdx: b, priority: a.priority } }).sort(function (a, b) { return a.priority !== b.priority ? a.priority - b.priority : a.columnIdx - b.columnIdx }), h = d.map(c, function (e, c) {
                return !1 === b.column(c).visible() ?
                    "not-visible" : e.auto && null === e.minWidth ? !1 : !0 === e.auto ? "-" : -1 !== d.inArray(a, e.includeIn)
            }), m = 0; e = 0; for (f = h.length; e < f; e++)!0 === h[e] && (m += c[e].minWidth); e = b.settings()[0].oScroll; e = e.sY || e.sX ? e.iBarWidth : 0; m = b.table().container().offsetWidth - e - m; e = 0; for (f = h.length; e < f; e++)c[e].control && (m -= c[e].minWidth); var s = !1; e = 0; for (f = g.length; e < f; e++) { var k = g[e].columnIdx; "-" === h[k] && (!c[k].control && c[k].minWidth) && (s || 0 > m - c[k].minWidth ? (s = !0, h[k] = !1) : h[k] = !0, m -= c[k].minWidth) } g = !1; e = 0; for (f = c.length; e < f; e++)if (!c[e].control &&
                !c[e].never && !1 === h[e]) { g = !0; break } e = 0; for (f = c.length; e < f; e++)c[e].control && (h[e] = g), "not-visible" === h[e] && (h[e] = !1); -1 === d.inArray(!0, h) && (h[0] = !0); return h
        }, _classLogic: function () {
            var a = this, b = this.c.breakpoints, c = this.s.dt, e = c.columns().eq(0).map(function (a) { var b = this.column(a), e = b.header().className, a = c.settings()[0].aoColumns[a].responsivePriority; a === q && (b = d(b.header()).data("priority"), a = b !== q ? 1 * b : 1E4); return { className: e, includeIn: [], auto: !1, control: !1, never: e.match(/\bnever\b/) ? !0 : !1, priority: a } }),
            f = function (a, b) { var c = e[a].includeIn; -1 === d.inArray(b, c) && c.push(b) }, g = function (d, c, g, k) { if (g) if ("max-" === g) { k = a._find(c).width; c = 0; for (g = b.length; c < g; c++)b[c].width <= k && f(d, b[c].name) } else if ("min-" === g) { k = a._find(c).width; c = 0; for (g = b.length; c < g; c++)b[c].width >= k && f(d, b[c].name) } else { if ("not-" === g) { c = 0; for (g = b.length; c < g; c++)-1 === b[c].name.indexOf(k) && f(d, b[c].name) } } else e[d].includeIn.push(c) }; e.each(function (a, e) {
                for (var c = a.className.split(" "), f = !1, i = 0, l = c.length; i < l; i++) {
                    var j = d.trim(c[i]);
                    if ("all" === j) { f = !0; a.includeIn = d.map(b, function (a) { return a.name }); return } if ("none" === j || a.never) { f = !0; return } if ("control" === j) { f = !0; a.control = !0; return } d.each(b, function (a, b) { var d = b.name.split("-"), c = j.match(RegExp("(min\\-|max\\-|not\\-)?(" + d[0] + ")(\\-[_a-zA-Z0-9])?")); c && (f = !0, c[2] === d[0] && c[3] === "-" + d[1] ? g(e, b.name, c[1], c[2] + c[3]) : c[2] === d[0] && !c[3] && g(e, b.name, c[1], c[2])) })
                } f || (a.auto = !0)
            }); this.s.columns = e
        }, _detailsDisplay: function (a, b) {
            var c = this, e = this.s.dt, f = this.c.details; if (f && !1 !== f.type) {
                var g =
                    f.display(a, b, function () { return f.renderer(e, a[0], c._detailsObj(a[0])) }); (!0 === g || !1 === g) && d(e.table().node()).triggerHandler("responsive-display.dt", [e, a, g, b])
            }
        }, _detailsInit: function () {
            var a = this, b = this.s.dt, c = this.c.details; "inline" === c.type && (c.target = "td:first-child, th:first-child"); b.on("draw.dtr", function () { a._tabIndexes() }); a._tabIndexes(); d(b.table().body()).on("keyup.dtr", "td, th", function (a) { a.keyCode === 13 && d(this).data("dtr-keyboard") && d(this).click() }); var e = c.target; d(b.table().body()).on("click.dtr mousedown.dtr mouseup.dtr",
                "string" === typeof e ? e : "td, th", function (c) { if (d(b.table().node()).hasClass("collapsed") && d.inArray(d(this).closest("tr").get(0), b.rows().nodes().toArray()) !== -1) { if (typeof e === "number") { var g = e < 0 ? b.columns().eq(0).length + e : e; if (b.cell(this).index().column !== g) return } g = b.row(d(this).closest("tr")); c.type === "click" ? a._detailsDisplay(g, false) : c.type === "mousedown" ? d(this).css("outline", "none") : c.type === "mouseup" && d(this).blur().css("outline", "") } })
        }, _detailsObj: function (a) {
            var b = this, c = this.s.dt; return d.map(this.s.columns,
                function (e, d) { if (!e.never && !e.control) return { title: c.settings()[0].aoColumns[d].sTitle, data: c.cell(a, d).render(b.c.orthogonal), hidden: c.column(d).visible() && !b.s.current[d], columnIndex: d, rowIndex: a } })
        }, _find: function (a) { for (var b = this.c.breakpoints, c = 0, e = b.length; c < e; c++)if (b[c].name === a) return b[c] }, _redrawChildren: function () { var a = this, b = this.s.dt; b.rows({ page: "current" }).iterator("row", function (c, e) { b.row(e); a._detailsDisplay(b.row(e), !0) }) }, _resize: function () {
            var a = this, b = this.s.dt, c = d(l).width(),
            e = this.c.breakpoints, f = e[0].name, g = this.s.columns, h, m = this.s.current.slice(); for (h = e.length - 1; 0 <= h; h--)if (c <= e[h].width) { f = e[h].name; break } var i = this._columnsVisiblity(f); this.s.current = i; e = !1; h = 0; for (c = g.length; h < c; h++)if (!1 === i[h] && !g[h].never && !g[h].control && !1 === !b.column(h).visible()) { e = !0; break } d(b.table().node()).toggleClass("collapsed", e); var k = !1, j = 0; b.columns().eq(0).each(function (b, c) { !0 === i[c] && j++; i[c] !== m[c] && (k = !0, a._setColumnVis(b, i[c])) }); k && (this._redrawChildren(), d(b.table().node()).trigger("responsive-resize.dt",
                [b, this.s.current]), 0 === b.page.info().recordsDisplay && d("td", b.table().body()).eq(0).attr("colspan", j))
        }, _resizeAuto: function () {
            var a = this.s.dt, b = this.s.columns; if (this.c.auto && -1 !== d.inArray(!0, d.map(b, function (a) { return a.auto }))) {
                d.isEmptyObject(n) || d.each(n, function (b) { b = b.split("-"); r(a, 1 * b[0], 1 * b[1]) }); a.table().node(); var c = a.table().node().cloneNode(!1), e = d(a.table().header().cloneNode(!1)).appendTo(c), f = d(a.table().body()).clone(!1, !1).empty().appendTo(c), g = a.columns().header().filter(function (b) { return a.column(b).visible() }).to$().clone(!1).css("display",
                    "table-cell").css("min-width", 0); d(f).append(d(a.rows({ page: "current" }).nodes()).clone(!1)).find("th, td").css("display", ""); if (f = a.table().footer()) { var f = d(f.cloneNode(!1)).appendTo(c), h = a.columns().footer().filter(function (b) { return a.column(b).visible() }).to$().clone(!1).css("display", "table-cell"); d("<tr/>").append(h).appendTo(f) } d("<tr/>").append(g).appendTo(e); "inline" === this.c.details.type && d(c).addClass("dtr-inline collapsed"); d(c).find("[name]").removeAttr("name"); d(c).css("position", "relative");
                c = d("<div/>").css({ width: 1, height: 1, overflow: "hidden", clear: "both" }).append(c); c.insertBefore(a.table().node()); g.each(function (c) { c = a.column.index("fromVisible", c); b[c].minWidth = this.offsetWidth || 0 }); c.remove()
            }
        }, _setColumnVis: function (a, b) { var c = this.s.dt, e = b ? "" : "none"; d(c.column(a).header()).css("display", e); d(c.column(a).footer()).css("display", e); c.column(a).nodes().to$().css("display", e); d.isEmptyObject(n) || c.cells(null, a).indexes().each(function (a) { r(c, a.row, a.column) }) }, _tabIndexes: function () {
            var a =
                this.s.dt, b = a.cells({ page: "current" }).nodes().to$(), c = a.settings()[0], e = this.c.details.target; b.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"); "number" === typeof e ? a.cells(null, e, { page: "current" }).nodes().to$().attr("tabIndex", c.iTabIndex).data("dtr-keyboard", 1) : ("td:first-child, th:first-child" === e && (e = ">td:first-child, >th:first-child"), d(e, a.rows({ page: "current" }).nodes()).attr("tabIndex", c.iTabIndex).data("dtr-keyboard", 1))
        }
    }); i.breakpoints = [{ name: "desktop", width: Infinity }, {
        name: "tablet-l",
        width: 1024
    }, { name: "tablet-p", width: 768 }, { name: "mobile-l", width: 480 }, { name: "mobile-p", width: 320 }]; i.display = {
        childRow: function (a, b, c) { if (b) { if (d(a.node()).hasClass("parent")) return a.child(c(), "child").show(), !0 } else { if (a.child.isShown()) return a.child(!1), d(a.node()).removeClass("parent"), !1; a.child(c(), "child").show(); d(a.node()).addClass("parent"); return !0 } }, childRowImmediate: function (a, b, c) {
            if (!b && a.child.isShown() || !a.responsive.hasHidden()) return a.child(!1), d(a.node()).removeClass("parent"),
                !1; a.child(c(), "child").show(); d(a.node()).addClass("parent"); return !0
        }, modal: function (a) {
            return function (b, c, e) {
                if (c) d("div.dtr-modal-content").empty().append(e()); else {
                    var f = function () { g.remove(); d(j).off("keypress.dtr") }, g = d('<div class="dtr-modal"/>').append(d('<div class="dtr-modal-display"/>').append(d('<div class="dtr-modal-content"/>').append(e())).append(d('<div class="dtr-modal-close">&times;</div>').click(function () { f() }))).append(d('<div class="dtr-modal-background"/>').click(function () { f() })).appendTo("body");
                    d(j).on("keyup.dtr", function (a) { 27 === a.keyCode && (a.stopPropagation(), f()) })
                } a && a.header && d("div.dtr-modal-content").prepend("<h2>" + a.header(b) + "</h2>")
            }
        }
    }; var n = {}; i.renderer = {
        listHiddenNodes: function () {
            return function (a, b, c) {
                var e = d('<ul data-dtr-index="' + b + '" class="dtr-details"/>'), f = !1; d.each(c, function (b, c) {
                c.hidden && (d('<li data-dtr-index="' + c.columnIndex + '" data-dt-row="' + c.rowIndex + '" data-dt-column="' + c.columnIndex + '"><span class="dtr-title">' + c.title + "</span> </li>").append(d('<span class="dtr-data"/>').append(t(a,
                    c.rowIndex, c.columnIndex))).appendTo(e), f = !0)
                }); return f ? e : !1
            }
        }, listHidden: function () { return function (a, b, c) { return (a = d.map(c, function (a) { return a.hidden ? '<li data-dtr-index="' + a.columnIndex + '" data-dt-row="' + a.rowIndex + '" data-dt-column="' + a.columnIndex + '"><span class="dtr-title">' + a.title + '</span> <span class="dtr-data">' + a.data + "</span></li>" : "" }).join("")) ? d('<ul data-dtr-index="' + b + '" class="dtr-details"/>').append(a) : !1 } }, tableAll: function (a) {
            a = d.extend({ tableClass: "" }, a); return function (b,
                c, e) { b = d.map(e, function (a) { return '<tr data-dt-row="' + a.rowIndex + '" data-dt-column="' + a.columnIndex + '"><td>' + a.title + ":</td> <td>" + a.data + "</td></tr>" }).join(""); return d('<table class="' + a.tableClass + ' dtr-details" width="100%"/>').append(b) }
        }
    }; i.defaults = { breakpoints: i.breakpoints, auto: !0, details: { display: i.display.childRow, renderer: i.renderer.listHidden(), target: 0, type: "inline" }, orthogonal: "display" }; var p = d.fn.dataTable.Api; p.register("responsive()", function () { return this }); p.register("responsive.index()",
        function (a) { a = d(a); return { column: a.data("dtr-index"), row: a.parent().data("dtr-index") } }); p.register("responsive.rebuild()", function () { return this.iterator("table", function (a) { a._responsive && a._responsive._classLogic() }) }); p.register("responsive.recalc()", function () { return this.iterator("table", function (a) { a._responsive && (a._responsive._resizeAuto(), a._responsive._resize()) }) }); p.register("responsive.hasHidden()", function () {
            var a = this.context[0]; return a._responsive ? -1 !== d.inArray(!1, a._responsive.s.current) :
                !1
        }); p.registerPlural("columns().responsiveHidden()", "column().responsiveHidden()", function () { return this.iterator("column", function (a, b) { return a._responsive ? a._responsive.s.current[b] : !1 }, 1) }); i.version = "2.2.2"; d.fn.dataTable.Responsive = i; d.fn.DataTable.Responsive = i; d(j).on("preInit.dt.dtr", function (a, b) {
            if ("dt" === a.namespace && (d(b.nTable).hasClass("responsive") || d(b.nTable).hasClass("dt-responsive") || b.oInit.responsive || o.defaults.responsive)) {
                var c = b.oInit.responsive; !1 !== c && new i(b, d.isPlainObject(c) ?
                    c : {})
            }
        }); return i
});


/*!
 Bootstrap 4 integration for DataTables' Responsive
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function (c) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-responsive"], function (a) { return c(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, b) { a || (a = window); if (!b || !b.fn.dataTable) b = require("datatables.net-bs4")(a, b).$; b.fn.dataTable.Responsive || require("datatables.net-responsive")(a, b); return c(b, a, a.document) } : c(jQuery, window, document) })(function (c) {
    var a = c.fn.dataTable, b = a.Responsive.display, g = b.modal, e = c('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>');
    b.modal = function (a) { return function (b, d, f) { if (c.fn.modal) { if (!d) { if (a && a.header) { var d = e.find("div.modal-header"), h = d.find("button").detach(); d.empty().append('<h4 class="modal-title">' + a.header(b) + "</h4>").append(h) } e.find("div.modal-body").empty().append(f()); e.appendTo("body").modal() } } else g(b, d, f) } }; return a.Responsive
});