/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		24: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "js/" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.1.0",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null != a ? a < 0 ? this[a + this.length] : this[a] : f.call(this);
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0;
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a);
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = V.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      A = r.expr.match.needsContext,
      B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
    if (r.isFunction(b)) return r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return r.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (C.test(b)) return r.filter(b, a, c);b = r.filter(b, a);
    }return r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    });
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(D(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(D(this, a || [], !0));
    }, is: function is(a) {
      return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var E,
      F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      G = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
      I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function J(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return J(a, "nextSibling");
    }, prev: function prev(a) {
      return J(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || r.merge([], a.childNodes);
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
    };
  });var K = /\S+/g;function L(a) {
    var b = {};return r.each(a.match(K) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function M(a) {
    return a;
  }function N(a) {
    throw a;
  }function O(a, b, c) {
    var d;try {
      a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
    } catch (a) {
      c.call(void 0, a);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
        O(e[c], h(c), g.reject);
      }return g.promise();
    } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var Q = r.Deferred();r.fn.ready = function (a) {
    return Q.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? r.readyWait++ : r.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
    } }), r.ready.then = Q.then;function R() {
    d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) {
        S(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      T = function T(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function U() {
    this.expando = r.expando + U.uid++;
  }U.uid = 1, U.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var V = new U(),
      W = new U(),
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Y = /[A-Z]/g;function Z(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c);
      } catch (e) {}W.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return W.hasData(a) || V.hasData(a);
    }, data: function data(a, b, c) {
      return W.access(a, b, c);
    }, removeData: function removeData(a, b) {
      W.remove(a, b);
    }, _data: function _data(a, b, c) {
      return V.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      V.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), Z(f, d, e[d])));
          }V.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        W.set(this, a);
      }) : S(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = W.get(f, a), void 0 !== c) return c;if (c = Z(f, a), void 0 !== c) return c;
        } else this.each(function () {
          W.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        W.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          V.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
      aa = ["Top", "Right", "Bottom", "Left"],
      ba = function ba(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      ca = function ca(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function da(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var ea = {};function fa(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = ea[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e, e);
  }function ga(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
    }for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }r.fn.extend({ show: function show() {
      return ga(this, !0);
    }, hide: function hide() {
      return ga(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        ba(this) ? r(this).show() : r(this).hide();
      });
    } });var ha = /^(?:checkbox|radio)$/i,
      ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      ja = /^$|\/(?:java|ecma)script/i,
      ka = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, ka.th = ka.td;function la(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
  }function ma(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
    }
  }var na = /<|&#?\w+;/;function oa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (na.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || ["", ""])[1].toLowerCase(), i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = la(l.appendChild(f), "script"), j && ma(g), c) {
        k = 0;while (f = g[k++]) {
          ja.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var pa = d.documentElement,
      qa = /^key/,
      ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      sa = /^([^.]*)(?:\.(.+)|)/;function ta() {
    return !0;
  }function ua() {
    return !1;
  }function va() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function wa(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        wa(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ua;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = V.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(pa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(K) || [""], j = b.length;while (j--) {
          h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
        b = (b || "").match(K) || [""], j = b.length;while (j--) {
          if (h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }r.isEmptyObject(i) && V.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (V.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; c < h; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? r(e, this).index(i) > -1 : r.find(e, this, null, [i]).length), d[e] && d.push(f);
          }d.length && g.push({ elem: i, handlers: d });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== va() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === va() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return r.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ta : ua, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: ua, isPropagationStopped: ua, isImmediatePropagationStopped: ua, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return wa(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return wa(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ua), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      ya = /<script|<style|<link/i,
      za = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Aa = /^true\/(.*)/,
      Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a, b) {
    return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
  }function Da(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Ea(a) {
    var b = Aa.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Fa(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
    }
  }function Ga(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ha(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
    });if (m && (e = oa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(la(e, "script"), Da), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, la(j, "script"))), c.call(a[l], j, l);
      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; l < i; l++) {
        j = h[l], ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k));
      }
    }return a;
  }function Ia(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(la(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(xa, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = la(h), f = la(a), d = 0, e = f.length; d < e; d++) {
        Ga(f[d], g[d]);
      }if (b) if (c) for (f = f || la(a), g = g || la(h), d = 0, e = f.length; d < e; d++) {
        Fa(f[d], g[d]);
      } else Fa(a, h);return g = la(h, "script"), g.length > 0 && ma(g, !i && la(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (T(c)) {
          if (b = c[V.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }c[V.expando] = void 0;
          }c[W.expando] && (c[W.expando] = void 0);
        }
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ia(this, a, !0);
    }, remove: function remove(a) {
      return Ia(this, a);
    }, text: function text(a) {
      return S(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(la(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return S(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(la(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ha(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var Ja = /^margin/,
      Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
      La = function La(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", pa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, pa.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  }();function Ma(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Na(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Oa = /^(none|table(?!-c[ea]).+)/,
      Pa = { position: "absolute", visibility: "hidden", display: "block" },
      Qa = { letterSpacing: "0", fontWeight: "400" },
      Ra = ["Webkit", "Moz", "ms"],
      Sa = d.createElement("div").style;function Ta(a) {
    if (a in Sa) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ra.length;while (c--) {
      if (a = Ra[c] + b, a in Sa) return a;
    }
  }function Ua(a, b, c) {
    var d = _.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Va(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + aa[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e)));
    }return g;
  }function Wa(a, b, c) {
    var d,
        e = !0,
        f = La(a),
        g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
      if (d = Ma(a, b, f), (d < 0 || null == d) && (d = a.style[b]), Ka.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
    }return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px";
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Ma(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = _.exec(c)) && e[1] && (c = da(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function () {
          return Wa(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && La(a),
            g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ua(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + aa[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Ja.test(a) || (r.cssHooks[a + b].set = Ua);
  }), r.fn.extend({ css: function css(a, b) {
      return S(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (r.isArray(b)) {
          for (d = La(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function Xa(a, b, c, d, e) {
    return new Xa.prototype.init(a, b, c, d, e);
  }r.Tween = Xa, Xa.prototype = { constructor: Xa, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Xa.propHooks[this.prop];return a && a.get ? a.get(this) : Xa.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Xa.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Xa.propHooks._default.set(this), this;
    } }, Xa.prototype.init.prototype = Xa.prototype, Xa.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, Xa.propHooks.scrollTop = Xa.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = Xa.prototype.init, r.fx.step = {};var Ya,
      Za,
      $a = /^(?:toggle|show|hide)$/,
      _a = /queueHooks$/;function ab() {
    Za && (a.requestAnimationFrame(ab), r.fx.tick());
  }function bb() {
    return a.setTimeout(function () {
      Ya = void 0;
    }), Ya = r.now();
  }function cb(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = aa[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function db(a, b, c) {
    for (var d, e = (gb.tweeners[b] || []).concat(gb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function eb(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && ba(a),
        q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) {
      if (e = b[d], $a.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }n[d] = q && q[d] || r.style(a, d);
      }
    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ga([a], !0), j = a.style.display || j, k = r.css(a, "display"), ga([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ga([a], !0), m.done(function () {
          p || ga([a]), V.remove(a, "fxshow");for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = db(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }function fb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function gb(a, b, c) {
    var d,
        e,
        f = 0,
        g = gb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Ya || bb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Ya || bb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (fb(k, j.opts.specialEasing); f < g; f++) {
      if (d = gb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }return r.map(k, db, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }r.Animation = r.extend(gb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return da(c.elem, a, _.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], gb.tweeners[c] = gb.tweeners[c] || [], gb.tweeners[c].unshift(b);
      }
    }, prefilters: [eb], prefilter: function prefilter(a, b) {
      b ? gb.prefilters.unshift(a) : gb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var e = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : e.duration = "number" == typeof e.duration ? e.duration : e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default, null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
      r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
    }, e;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(ba).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = gb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && _a.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = V.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(cb(b, !0), a, d, e);
    };
  }), r.each({ slideDown: cb("show"), slideUp: cb("hide"), slideToggle: cb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (Ya = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || r.fx.stop(), Ya = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
  }, r.fx.interval = 13, r.fx.start = function () {
    Za || (Za = a.requestAnimationFrame ? a.requestAnimationFrame(ab) : a.setInterval(r.fx.tick, r.fx.interval));
  }, r.fx.stop = function () {
    a.cancelAnimationFrame ? a.cancelAnimationFrame(Za) : a.clearInterval(Za), Za = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();var hb,
      ib = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return S(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? hb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(K);
      if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), hb = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = ib[b] || r.find.attr;ib[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = ib[g], ib[g] = e, e = null != c(a, b, d) ? g : null, ib[g] = f), e;
    };
  });var jb = /^(?:input|select|textarea|button)$/i,
      kb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return S(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : jb.test(a.nodeName) || kb.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });var lb = /[\t\r\n\f]/g;function mb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, mb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(K) || [];while (c = this[i++]) {
          if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = r.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, mb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(K) || [];while (c = this[i++]) {
          if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = r.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, mb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = mb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + mb(c) + " ").replace(lb, " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var nb = /\r/g,
      ob = /[\x20\t\r\n\f]+/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : r.trim(r.text(a)).replace(ob, " ");
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++) {
            if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
      } };
  });var qb = a.location,
      rb = r.now(),
      sb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var tb = /\[\]$/,
      ub = /\r?\n/g,
      vb = /^(?:submit|button|image|reset|file)$/i,
      wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
    var e;if (r.isArray(b)) r.each(b, function (b, e) {
      c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      xb(a + "[" + e + "]", b[e], c, d);
    }
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      xb(c, a[c], b, e);
    }return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ha.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(ub, "\r\n") };
        }) : { name: b.name, value: c.replace(ub, "\r\n") };
      }).get();
    } });var yb = /%20/g,
      zb = /#.*$/,
      Ab = /([?&])_=[^&]*/,
      Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Db = /^(?:GET|HEAD)$/,
      Eb = /^\/\//,
      Fb = {},
      Gb = {},
      Hb = "*/".concat("*"),
      Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Kb(a, b, c, d) {
    var e = {},
        f = a === Gb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Lb(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && r.extend(!0, a, d), a;
  }function Mb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Nb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
    }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Bb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, ""), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Ob = { 0: 200, 1223: 204 },
      Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
    var _c, d;if (o.cors || Pb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Qb = [],
      Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = oa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = r.trim(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Sb(a) {
    return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }return a || pa;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return S(this, function (a, d, e) {
        var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Na(o.pixelPosition, function (a, c) {
      if (c) return c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.parseJSON = JSON.parse, "function" == "function" && __webpack_require__(72) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return r;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Tb = a.jQuery,
      Ub = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74)(module)))

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vue.js v2.1.10
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.Vue = factory();
})(undefined, function () {
  'use strict';

  /*  */

  /**
   * Convert a value to a string that is actually rendered.
   */

  function _toString(val) {
    return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
  }

  /**
   * Convert a input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Remove an item from an array
   */
  function remove$1(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

  /**
   * Check whether the object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  /**
   * Check if value is primitive
   */
  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number';
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /([^-])([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
  });

  /**
   * Simple bind, faster than native
   */
  function bind$1(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }
    // record original fn length
    boundFn._length = fn.length;
    return boundFn;
  }

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

  /**
   * Mix properties into target object.
   */
  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to;
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  var toString = Object.prototype.toString;
  var OBJECT_STRING = '[object Object]';
  function isPlainObject(obj) {
    return toString.call(obj) === OBJECT_STRING;
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res;
  }

  /**
   * Perform no operation.
   */
  function noop() {}

  /**
   * Always return false.
   */
  var no = function no() {
    return false;
  };

  /**
   * Return same value
   */
  var identity = function identity(_) {
    return _;
  };

  /**
   * Generate a static keys string from compiler modules.
   */
  function genStaticKeys(modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || []);
    }, []).join(',');
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual(a, b) {
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      return JSON.stringify(a) === JSON.stringify(b);
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }
    return -1;
  }

  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * List of asset types that a component can own.
     */
    _assetTypes: ['component', 'directive', 'filter'],

    /**
     * List of lifecycle hooks.
     */
    _lifecycleHooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'],

    /**
     * Max circular updates allowed in a scheduler flush cycle.
     */
    _maxUpdateCount: 100
  };

  /*  */

  /**
   * Check if a string starts with $ or _
   */
  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }

  /**
   * Define a property.
   */
  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = /[^\w.$]/;
  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    } else {
      var segments = path.split('.');
      return function (obj) {
        for (var i = 0; i < segments.length; i++) {
          if (!obj) {
            return;
          }
          obj = obj[segments[i]];
        }
        return obj;
      };
    }
  }

  /*  */
  /* globals MutationObserver */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0;
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function isServerRendering() {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer;
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative(Ctor) {
    return (/native code/.test(Ctor.toString())
    );
  }

  /**
   * Defer a task to execute it asynchronously.
   */
  var nextTick = function () {
    var callbacks = [];
    var pending = false;
    var timerFunc;

    function nextTickHandler() {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks.length = 0;
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }

    // the nextTick behavior leverages the microtask queue, which can be accessed
    // via either native Promise.then or MutationObserver.
    // MutationObserver has wider support, however it is seriously bugged in
    // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
    // completely stops working after triggering a few times... so, if native
    // Promise is available, we will use it:
    /* istanbul ignore if */
    if (typeof Promise !== 'undefined' && isNative(Promise)) {
      var p = Promise.resolve();
      var logError = function logError(err) {
        console.error(err);
      };
      timerFunc = function timerFunc() {
        p.then(nextTickHandler).catch(logError);
        // in problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS) {
          setTimeout(noop);
        }
      };
    } else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]')) {
      // use MutationObserver where native Promise is not available,
      // e.g. PhantomJS IE11, iOS7, Android 4.4
      var counter = 1;
      var observer = new MutationObserver(nextTickHandler);
      var textNode = document.createTextNode(String(counter));
      observer.observe(textNode, {
        characterData: true
      });
      timerFunc = function timerFunc() {
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
      };
    } else {
      // fallback to setTimeout
      /* istanbul ignore next */
      timerFunc = function timerFunc() {
        setTimeout(nextTickHandler, 0);
      };
    }

    return function queueNextTick(cb, ctx) {
      var _resolve;
      callbacks.push(function () {
        if (cb) {
          cb.call(ctx);
        }
        if (_resolve) {
          _resolve(ctx);
        }
      });
      if (!pending) {
        pending = true;
        timerFunc();
      }
      if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
          _resolve = resolve;
        });
      }
    };
  }();

  var _Set;
  /* istanbul ignore if */
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = function () {
      function Set() {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };
      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }();
  }

  var warn = noop;
  var formatComponentName;

  {
    var hasConsole = typeof console !== 'undefined';

    warn = function warn(msg, vm) {
      if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + " " + (vm ? formatLocation(formatComponentName(vm)) : ''));
      }
    };

    formatComponentName = function formatComponentName(vm) {
      if (vm.$root === vm) {
        return 'root instance';
      }
      var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
      return (name ? "component <" + name + ">" : "anonymous component") + (vm._isVue && vm.$options.__file ? " at " + vm.$options.__file : '');
    };

    var formatLocation = function formatLocation(str) {
      if (str === 'anonymous component') {
        str += " - use the \"name\" option for better debugging messages.";
      }
      return "\n(found in " + str + ")";
    };
  }

  /*  */

  var uid$1 = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep() {
    this.id = uid$1++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove$1(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stablize the subscriber list first
    var subs = this.subs.slice();
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget(_target) {
    if (Dep.target) {
      targetStack.push(Dep.target);
    }
    Dep.target = _target;
  }

  function popTarget() {
    Dep.target = targetStack.pop();
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var arguments$1 = arguments;

      // avoid leaking arguments:
      // http://jsperf.com/closure-with-arguments
      var i = arguments.length;
      var args = new Array(i);
      while (i--) {
        args[i] = arguments$1[i];
      }
      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
          inserted = args;
          break;
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2);
          break;
      }
      if (inserted) {
        ob.observeArray(inserted);
      }
      // notify change
      ob.dep.notify();
      return result;
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * By default, when a reactive property is set, the new value is
   * also converted to become reactive. However when passing down props,
   * we don't want to force conversion because the value may be a nested value
   * under a frozen data structure. Converting it would defeat the optimization.
   */
  var observerState = {
    shouldConvert: true,
    isSettingProps: false
  };

  /**
   * Observer class that are attached to each observed
   * object. Once attached, the observer converts target
   * object's property keys into getter/setters that
   * collect dependencies and dispatches updates.
   */
  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i], obj[keys[i]]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment an target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment(target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment an target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe(value, asRootData) {
    if (!isObject(value)) {
      return;
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob;
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1(obj, key, val, customSetter) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return;
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;

    var childOb = observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
          }
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */
        if ("development" !== 'production' && customSetter) {
          customSetter();
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set$1(obj, key, val) {
    if (Array.isArray(obj)) {
      obj.length = Math.max(obj.length, key);
      obj.splice(key, 1, val);
      return val;
    }
    if (hasOwn(obj, key)) {
      obj[key] = val;
      return;
    }
    var ob = obj.__ob__;
    if (obj._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return;
    }
    if (!ob) {
      obj[key] = val;
      return;
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val;
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del(obj, key) {
    var ob = obj.__ob__;
    if (obj._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }
    if (!hasOwn(obj, key)) {
      return;
    }
    delete obj[key];
    if (!ob) {
      return;
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }
      return defaultStrat(parent, child);
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData(to, from) {
    if (!from) {
      return to;
    }
    var key, toVal, fromVal;
    var keys = Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set$1(to, key, fromVal);
      } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }
    return to;
  }

  /**
   * Data
   */
  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }
      if (typeof childVal !== 'function') {
        "development" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
        return parentVal;
      }
      if (!parentVal) {
        return childVal;
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn() {
        return mergeData(childVal.call(this), parentVal.call(this));
      };
    } else if (parentVal || childVal) {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  };

  /**
   * Hooks and param attributes are merged as arrays.
   */
  function mergeHook(parentVal, childVal) {
    return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  }

  config._lifecycleHooks.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets(parentVal, childVal) {
    var res = Object.create(parentVal || null);
    return childVal ? extend(res, childVal) : res;
  }

  config._assetTypes.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (parentVal, childVal) {
    /* istanbul ignore if */
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = {};
    extend(ret, parentVal);
    for (var key in childVal) {
      var parent = ret[key];
      var child = childVal[key];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key] = parent ? parent.concat(child) : [child];
    }
    return ret;
  };

  /**
   * Other object hashes.
   */
  strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = Object.create(null);
    extend(ret, parentVal);
    extend(ret, childVal);
    return ret;
  };

  /**
   * Default strategy.
   */
  var defaultStrat = function defaultStrat(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };

  /**
   * Validate component names
   */
  function checkComponents(options) {
    for (var key in options.components) {
      var lower = key.toLowerCase();
      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
        warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
      }
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps(options) {
    var props = options.props;
    if (!props) {
      return;
    }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : { type: val };
      }
    }
    options.props = res;
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives(options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def = dirs[key];
        if (typeof def === 'function') {
          dirs[key] = { bind: def, update: def };
        }
      }
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions(parent, child, vm) {
    {
      checkComponents(child);
    }
    normalizeProps(child);
    normalizeDirectives(child);
    var extendsFrom = child.extends;
    if (extendsFrom) {
      parent = typeof extendsFrom === 'function' ? mergeOptions(parent, extendsFrom.options, vm) : mergeOptions(parent, extendsFrom, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        var mixin = child.mixins[i];
        if (mixin.prototype instanceof Vue$3) {
          mixin = mixin.options;
        }
        parent = mergeOptions(parent, mixin, vm);
      }
    }
    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) {
      return assets[id];
    }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if ("development" !== 'production' && warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }
    return res;
  }

  /*  */

  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // handle boolean props
    if (isType(Boolean, prop.type)) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
        value = true;
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldConvert = observerState.shouldConvert;
      observerState.shouldConvert = true;
      observe(value);
      observerState.shouldConvert = prevShouldConvert;
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value;
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      "development" !== 'production' && warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm[key] !== undefined) {
      return vm[key];
    }
    // call factory function for non-Function types
    return typeof def === 'function' && prop.type !== Function ? def.call(vm) : def;
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }
    if (!valid) {
      warn('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
      return;
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  /**
   * Assert the type of a value
   */
  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);
    if (expectedType === 'String') {
      valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'string');
    } else if (expectedType === 'Number') {
      valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'number');
    } else if (expectedType === 'Boolean') {
      valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'boolean');
    } else if (expectedType === 'Function') {
      valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'function');
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    };
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match && match[1];
  }

  function isType(type, fn) {
    if (!Array.isArray(fn)) {
      return getType(fn) === getType(type);
    }
    for (var i = 0, len = fn.length; i < len; i++) {
      if (getType(fn[i]) === getType(type)) {
        return true;
      }
    }
    /* istanbul ignore next */
    return false;
  }

  var util = Object.freeze({
    defineReactive: defineReactive$$1,
    _toString: _toString,
    toNumber: toNumber,
    makeMap: makeMap,
    isBuiltInTag: isBuiltInTag,
    remove: remove$1,
    hasOwn: hasOwn,
    isPrimitive: isPrimitive,
    cached: cached,
    camelize: camelize,
    capitalize: capitalize,
    hyphenate: hyphenate,
    bind: bind$1,
    toArray: toArray,
    extend: extend,
    isObject: isObject,
    isPlainObject: isPlainObject,
    toObject: toObject,
    noop: noop,
    no: no,
    identity: identity,
    genStaticKeys: genStaticKeys,
    looseEqual: looseEqual,
    looseIndexOf: looseIndexOf,
    isReserved: isReserved,
    def: def,
    parsePath: parsePath,
    hasProto: hasProto,
    inBrowser: inBrowser,
    UA: UA,
    isIE: isIE,
    isIE9: isIE9,
    isEdge: isEdge,
    isAndroid: isAndroid,
    isIOS: isIOS,
    isServerRendering: isServerRendering,
    devtools: devtools,
    nextTick: nextTick,
    get _Set() {
      return _Set;
    },
    mergeOptions: mergeOptions,
    resolveAsset: resolveAsset,
    get warn() {
      return warn;
    },
    get formatComponentName() {
      return formatComponentName;
    },
    validateProp: validateProp
  });

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function warnNonPresent(target, key) {
      warn("Property or method \"" + key + "\" is not defined on the instance but " + "referenced during render. Make sure to declare reactive data " + "properties in the data option.", target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
        if (!has && !isAllowed) {
          warnNonPresent(target, key);
        }
        return has || !isAllowed;
      }
    };

    var getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          warnNonPresent(target, key);
        }
        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.functionalContext = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
  };

  var prototypeAccessors = { child: {} };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function createEmptyVNode() {
    var node = new VNode();
    node.text = '';
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isCloned = true;
    return cloned;
  }

  function cloneVNodes(vnodes) {
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneVNode(vnodes[i]);
    }
    return res;
  }

  /*  */

  var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
  var hooksToMerge = Object.keys(hooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (!Ctor) {
      return;
    }

    var baseCtor = context.$options._base;
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }
      return;
    }

    // async component
    if (!Ctor.cid) {
      if (Ctor.resolved) {
        Ctor = Ctor.resolved;
      } else {
        Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
          // it's ok to queue this on every render because
          // $forceUpdate is buffered by the scheduler.
          context.$forceUpdate();
        });
        if (!Ctor) {
          // return nothing if this is indeed an async component
          // wait for the callback to trigger parent update.
          return;
        }
      }
    }

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    data = data || {};

    // extract props
    var propsData = extractProps(data, Ctor);

    // functional component
    if (Ctor.options.functional) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    data.on = data.nativeOn;

    if (Ctor.options.abstract) {
      // abstract components do not keep anything
      // other than props & listeners
      data = {};
    }

    // merge component management hooks onto the placeholder node
    mergeHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children });
    return vnode;
  }

  function createFunctionalComponent(Ctor, propsData, data, context, children) {
    var props = {};
    var propOptions = Ctor.options.props;
    if (propOptions) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData);
      }
    }
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var _context = Object.create(context);
    var h = function h(a, b, c, d) {
      return createElement(_context, a, b, c, d, true);
    };
    var vnode = Ctor.options.render.call(null, h, {
      props: props,
      data: data,
      parent: context,
      children: children,
      slots: function slots() {
        return resolveSlots(children, context);
      }
    });
    if (vnode instanceof VNode) {
      vnode.functionalContext = context;
      if (data.slot) {
        (vnode.data || (vnode.data = {})).slot = data.slot;
      }
    }
    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm, refElm) {
    var vnodeComponentOptions = vnode.componentOptions;
    var options = {
      _isComponent: true,
      parent: parent,
      propsData: vnodeComponentOptions.propsData,
      _componentTag: vnodeComponentOptions.tag,
      _parentVnode: vnode,
      _parentListeners: vnodeComponentOptions.listeners,
      _renderChildren: vnodeComponentOptions.children,
      _parentElm: parentElm || null,
      _refElm: refElm || null
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (inlineTemplate) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnodeComponentOptions.Ctor(options);
  }

  function init(vnode, hydrating, parentElm, refElm) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      prepatch(mountedNode, mountedNode);
    }
  }

  function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    child._updateFromParent(options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  }

  function insert(vnode) {
    if (!vnode.componentInstance._isMounted) {
      vnode.componentInstance._isMounted = true;
      callHook(vnode.componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      vnode.componentInstance._inactive = false;
      callHook(vnode.componentInstance, 'activated');
    }
  }

  function destroy$1(vnode) {
    if (!vnode.componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        vnode.componentInstance.$destroy();
      } else {
        vnode.componentInstance._inactive = true;
        callHook(vnode.componentInstance, 'deactivated');
      }
    }
  }

  function resolveAsyncComponent(factory, baseCtor, cb) {
    if (factory.requested) {
      // pool callbacks
      factory.pendingCallbacks.push(cb);
    } else {
      factory.requested = true;
      var cbs = factory.pendingCallbacks = [cb];
      var sync = true;

      var resolve = function resolve(res) {
        if (isObject(res)) {
          res = baseCtor.extend(res);
        }
        // cache resolved
        factory.resolved = res;
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](res);
          }
        }
      };

      var reject = function reject(reason) {
        "development" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
      };

      var res = factory(resolve, reject);

      // handle promise
      if (res && typeof res.then === 'function' && !factory.resolved) {
        res.then(resolve, reject);
      }

      sync = false;
      // return in case resolved synchronously
      return factory.resolved;
    }
  }

  function extractProps(data, Ctor) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (!propOptions) {
      return;
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    var domProps = data.domProps;
    if (attrs || props || domProps) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey) || checkProp(res, domProps, key, altKey);
      }
    }
    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (hash) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true;
      }
    }
    return false;
  }

  function mergeHooks(data) {
    if (!data.hook) {
      data.hook = {};
    }
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var fromParent = data.hook[key];
      var ours = hooks[key];
      data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
    }
  }

  function mergeHook$1(one, two) {
    return function (a, b, c, d) {
      one(a, b, c, d);
      two(a, b, c, d);
    };
  }

  /*  */

  function mergeVNodeHook(def, hookKey, hook, key) {
    key = key + hookKey;
    var injectedHash = def.__injected || (def.__injected = {});
    if (!injectedHash[key]) {
      injectedHash[key] = true;
      var oldHook = def[hookKey];
      if (oldHook) {
        def[hookKey] = function () {
          oldHook.apply(this, arguments);
          hook.apply(this, arguments);
        };
      } else {
        def[hookKey] = hook;
      }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var once = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once,
      capture: capture
    };
  });

  function createEventHandle(fn) {
    var handle = {
      fn: fn,
      invoker: function invoker() {
        var arguments$1 = arguments;

        var fn = handle.fn;
        if (Array.isArray(fn)) {
          for (var i = 0; i < fn.length; i++) {
            fn[i].apply(null, arguments$1);
          }
        } else {
          fn.apply(null, arguments);
        }
      }
    };
    return handle;
  }

  function updateListeners(on, oldOn, add, remove$$1, vm) {
    var name, cur, old, event;
    for (name in on) {
      cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (!cur) {
        "development" !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (!old) {
        if (!cur.invoker) {
          cur = on[name] = createEventHandle(cur);
        }
        add(event.name, cur.invoker, event.once, event.capture);
      } else if (cur !== old) {
        old.fn = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (!on[name]) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name].invoker, event.capture);
      }
    }
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // nomralization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }
    return children;
  }

  // 2. When the children contains constrcuts that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (c == null || typeof c === 'boolean') {
        continue;
      }
      last = res[res.length - 1];
      //  nested
      if (Array.isArray(c)) {
        res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || '') + "_" + i));
      } else if (isPrimitive(c)) {
        if (last && last.text) {
          last.text += String(c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (c.text && last && last.text) {
          res[res.length - 1] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (c.tag && c.key == null && nestedIndex != null) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res;
  }

  /*  */

  function getFirstComponentChild(children) {
    return children && children.filter(function (c) {
      return c && c.componentOptions;
    })[0];
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (alwaysNormalize) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (data && data.__ob__) {
      "development" !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return createEmptyVNode();
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if (Ctor = resolveAsset(context.$options, 'components', tag)) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (vnode) {
      if (ns) {
        applyNS(vnode, ns);
      }
      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      return;
    }
    if (vnode.children) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (child.tag && !child.ns) {
          applyNS(child, ns);
        }
      }
    }
  }

  /*  */

  function initRender(vm) {
    vm.$vnode = null; // the placeholder node in parent tree
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null;
    var parentVnode = vm.$options._parentVnode;
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
    vm.$scopedSlots = {};
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    };
  }

  function renderMixin(Vue) {
    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      var _parentVnode = ref._parentVnode;

      if (vm._isMounted) {
        // clone slot nodes on re-renders
        for (var key in vm.$slots) {
          vm.$slots[key] = cloneVNodes(vm.$slots[key]);
        }
      }

      if (_parentVnode && _parentVnode.data.scopedSlots) {
        vm.$scopedSlots = _parentVnode.data.scopedSlots;
      }

      if (staticRenderFns && !vm._staticTrees) {
        vm._staticTrees = [];
      }
      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        /* istanbul ignore else */
        if (config.errorHandler) {
          config.errorHandler.call(null, e, vm);
        } else {
          {
            warn("Error when rendering " + formatComponentName(vm) + ":");
          }
          throw e;
        }
        // return previous vnode to prevent render error causing blank component
        vnode = vm._vnode;
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if ("development" !== 'production' && Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode;
    };

    // toString for mustaches
    Vue.prototype._s = _toString;
    // convert text to vnode
    Vue.prototype._v = createTextVNode;
    // number conversion
    Vue.prototype._n = toNumber;
    // empty vnode
    Vue.prototype._e = createEmptyVNode;
    // loose equal
    Vue.prototype._q = looseEqual;
    // loose indexOf
    Vue.prototype._i = looseIndexOf;

    // render static tree by index
    Vue.prototype._m = function renderStatic(index, isInFor) {
      var tree = this._staticTrees[index];
      // if has already-rendered static tree and not inside v-for,
      // we can reuse the same tree by doing a shallow clone.
      if (tree && !isInFor) {
        return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
      }
      // otherwise, render a fresh tree.
      tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
      markStatic(tree, "__static__" + index, false);
      return tree;
    };

    // mark node as static (v-once)
    Vue.prototype._o = function markOnce(tree, index, key) {
      markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
      return tree;
    };

    function markStatic(tree, key, isOnce) {
      if (Array.isArray(tree)) {
        for (var i = 0; i < tree.length; i++) {
          if (tree[i] && typeof tree[i] !== 'string') {
            markStaticNode(tree[i], key + "_" + i, isOnce);
          }
        }
      } else {
        markStaticNode(tree, key, isOnce);
      }
    }

    function markStaticNode(node, key, isOnce) {
      node.isStatic = true;
      node.key = key;
      node.isOnce = isOnce;
    }

    // filter resolution helper
    Vue.prototype._f = function resolveFilter(id) {
      return resolveAsset(this.$options, 'filters', id, true) || identity;
    };

    // render v-for
    Vue.prototype._l = function renderList(val, render) {
      var ret, i, l, keys, key;
      if (Array.isArray(val) || typeof val === 'string') {
        ret = new Array(val.length);
        for (i = 0, l = val.length; i < l; i++) {
          ret[i] = render(val[i], i);
        }
      } else if (typeof val === 'number') {
        ret = new Array(val);
        for (i = 0; i < val; i++) {
          ret[i] = render(i + 1, i);
        }
      } else if (isObject(val)) {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
      return ret;
    };

    // renderSlot
    Vue.prototype._t = function (name, fallback, props, bindObject) {
      var scopedSlotFn = this.$scopedSlots[name];
      if (scopedSlotFn) {
        // scoped slot
        props = props || {};
        if (bindObject) {
          extend(props, bindObject);
        }
        return scopedSlotFn(props) || fallback;
      } else {
        var slotNodes = this.$slots[name];
        // warn duplicate slot usage
        if (slotNodes && "development" !== 'production') {
          slotNodes._rendered && warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
          slotNodes._rendered = true;
        }
        return slotNodes || fallback;
      }
    };

    // apply v-bind object
    Vue.prototype._b = function bindProps(data, tag, value, asProp) {
      if (value) {
        if (!isObject(value)) {
          "development" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
        } else {
          if (Array.isArray(value)) {
            value = toObject(value);
          }
          for (var key in value) {
            if (key === 'class' || key === 'style') {
              data[key] = value[key];
            } else {
              var type = data.attrs && data.attrs.type;
              var hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
              hash[key] = value[key];
            }
          }
        }
      }
      return data;
    };

    // check v-on keyCodes
    Vue.prototype._k = function checkKeyCodes(eventKeyCode, key, builtInAlias) {
      var keyCodes = config.keyCodes[key] || builtInAlias;
      if (Array.isArray(keyCodes)) {
        return keyCodes.indexOf(eventKeyCode) === -1;
      } else {
        return keyCodes !== eventKeyCode;
      }
    };
  }

  function resolveSlots(children, context) {
    var slots = {};
    if (!children) {
      return slots;
    }
    var defaultSlot = [];
    var name, child;
    for (var i = 0, l = children.length; i < l; i++) {
      child = children[i];
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.functionalContext === context) && child.data && (name = child.data.slot)) {
        var slot = slots[name] || (slots[name] = []);
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children);
        } else {
          slot.push(child);
        }
      } else {
        defaultSlot.push(child);
      }
    }
    // ignore single whitespace
    if (defaultSlot.length && !(defaultSlot.length === 1 && (defaultSlot[0].text === ' ' || defaultSlot[0].isComment))) {
      slots.default = defaultSlot;
    }
    return slots;
  }

  /*  */

  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add$1(event, fn, once) {
    if (once) {
      target.$once(event, fn);
    } else {
      target.$on(event, fn);
    }
  }

  function remove$2(event, fn) {
    target.$off(event, fn);
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add$1, remove$2, vm);
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm;
      }
      if (arguments.length === 1) {
        vm._events[event] = null;
        return vm;
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }
      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i].apply(vm, args);
        }
      }
      return vm;
    };
  }

  /*  */

  var activeInstance = null;

  function initLifecycle(vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._mount = function (el, hydrating) {
      var vm = this;
      vm.$el = el;
      if (!vm.$options.render) {
        vm.$options.render = createEmptyVNode;
        {
          /* istanbul ignore if */
          if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
            warn('You are using the runtime-only build of Vue where the template ' + 'option is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
          } else {
            warn('Failed to mount component: template or render function not defined.', vm);
          }
        }
      }
      callHook(vm, 'beforeMount');
      vm._watcher = new Watcher(vm, function updateComponent() {
        vm._update(vm._render(), hydrating);
      }, noop);
      hydrating = false;
      // manually mounted instance, call mounted on self
      // mounted is called for render-created child components in its inserted hook
      if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook(vm, 'mounted');
      }
      return vm;
    };

    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate');
      }
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
        , vm.$options._parentElm, vm.$options._refElm);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      activeInstance = prevActiveInstance;
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype._updateFromParent = function (propsData, listeners, parentVnode, renderChildren) {
      var vm = this;
      var hasChildren = !!(vm.$options._renderChildren || renderChildren);
      vm.$options._parentVnode = parentVnode;
      vm.$vnode = parentVnode; // update vm's placeholder node without re-render
      if (vm._vnode) {
        // update child tree's parent
        vm._vnode.parent = parentVnode;
      }
      vm.$options._renderChildren = renderChildren;
      // update props
      if (propsData && vm.$options.props) {
        observerState.shouldConvert = false;
        {
          observerState.isSettingProps = true;
        }
        var propKeys = vm.$options._propKeys || [];
        for (var i = 0; i < propKeys.length; i++) {
          var key = propKeys[i];
          vm[key] = validateProp(key, vm.$options.props, propsData, vm);
        }
        observerState.shouldConvert = true;
        {
          observerState.isSettingProps = false;
        }
        vm.$options.propsData = propsData;
      }
      // update listeners
      if (listeners) {
        var oldListeners = vm.$options._parentListeners;
        vm.$options._parentListeners = listeners;
        updateComponentListeners(vm, listeners, oldListeners);
      }
      // resolve slots + force update if has children
      if (hasChildren) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
      }
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return;
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove$1(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
    };
  }

  function callHook(vm, hook) {
    var handlers = vm.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        handlers[i].call(vm);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
  }

  /*  */

  var queue = [];
  var has$1 = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState() {
    queue.length = 0;
    has$1 = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue() {
    flushing = true;
    var watcher, id, vm;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) {
      return a.id - b.id;
    });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      id = watcher.id;
      has$1[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if ("development" !== 'production' && has$1[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > config._maxUpdateCount) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    }

    // call updated hooks
    index = queue.length;
    while (index--) {
      watcher = queue[index];
      vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted) {
        callHook(vm, 'updated');
      }
    }

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }

    resetSchedulerState();
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher(watcher) {
    var id = watcher.id;
    if (has$1[id] == null) {
      has$1[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i >= 0 && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(Math.max(i, index) + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */

  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher(vm, expOrFn, cb, options) {
    this.vm = vm;
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = function () {};
        "development" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value = this.getter.call(this.vm, this.vm);
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
    return value;
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      var dep = this$1.deps[i];
      if (!this$1.newDepIds.has(dep.id)) {
        dep.removeSub(this$1);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();
      if (value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            /* istanbul ignore else */
            if (config.errorHandler) {
              config.errorHandler.call(null, e, this.vm);
            } else {
              "development" !== 'production' && warn("Error in watcher \"" + this.expression + "\"", this.vm);
              throw e;
            }
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown() {
    var this$1 = this;

    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove$1(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this$1.deps[i].removeSub(this$1);
      }
      this.active = false;
    }
  };

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  var seenObjects = new _Set();
  function traverse(val) {
    seenObjects.clear();
    _traverse(val, seenObjects);
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if (!isA && !isObject(val) || !Object.isExtensible(val)) {
      return;
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }

  /*  */

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) {
      initProps(vm, opts.props);
    }
    if (opts.methods) {
      initMethods(vm, opts.methods);
    }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) {
      initComputed(vm, opts.computed);
    }
    if (opts.watch) {
      initWatch(vm, opts.watch);
    }
  }

  var isReservedProp = { key: 1, ref: 1, slot: 1 };

  function initProps(vm, props) {
    var propsData = vm.$options.propsData || {};
    var keys = vm.$options._propKeys = Object.keys(props);
    var isRoot = !vm.$parent;
    // root instance props should be converted
    observerState.shouldConvert = isRoot;
    var loop = function loop(i) {
      var key = keys[i];
      /* istanbul ignore else */
      {
        if (isReservedProp[key]) {
          warn("\"" + key + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }
        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
          if (vm.$parent && !observerState.isSettingProps) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      }
    };

    for (var i = 0; i < keys.length; i++) {
      loop(i);
    }observerState.shouldConvert = true;
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};
    if (!isPlainObject(data)) {
      data = {};
      "development" !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var i = keys.length;
    while (i--) {
      if (props && hasOwn(props, keys[i])) {
        "development" !== 'production' && warn("The data property \"" + keys[i] + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else {
        proxy(vm, keys[i]);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  var computedSharedDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function initComputed(vm, computed) {
    for (var key in computed) {
      /* istanbul ignore if */
      if ("development" !== 'production' && key in vm) {
        warn("existing instance property \"" + key + "\" will be " + "overwritten by a computed property with the same name.", vm);
      }
      var userDef = computed[key];
      if (typeof userDef === 'function') {
        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
        computedSharedDefinition.set = noop;
      } else {
        computedSharedDefinition.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : bind$1(userDef.get, vm) : noop;
        computedSharedDefinition.set = userDef.set ? bind$1(userDef.set, vm) : noop;
      }
      Object.defineProperty(vm, key, computedSharedDefinition);
    }
  }

  function makeComputedGetter(getter, owner) {
    var watcher = new Watcher(owner, getter, noop, {
      lazy: true
    });
    return function computedGetter() {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    };
  }

  function initMethods(vm, methods) {
    for (var key in methods) {
      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
      if ("development" !== 'production' && methods[key] == null) {
        warn("method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
      }
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, key, handler) {
    var options;
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    vm.$watch(key, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
      return this._data;
    };
    {
      dataDef.set = function (newData) {
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);

    Vue.prototype.$set = set$1;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        cb.call(vm, watcher.value);
      }
      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }

  function proxy(vm, key) {
    if (!isReserved(key)) {
      Object.defineProperty(vm, key, {
        configurable: true,
        enumerable: true,
        get: function proxyGetter() {
          return vm._data[key];
        },
        set: function proxySetter(val) {
          vm._data[key] = val;
        }
      });
    }
  }

  /*  */

  var uid = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid++;
      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initState(vm);
      callHook(vm, 'created');
      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    opts.parent = options.parent;
    opts.propsData = options.propsData;
    opts._parentVnode = options._parentVnode;
    opts._parentListeners = options._parentListeners;
    opts._renderChildren = options._renderChildren;
    opts._componentTag = options._componentTag;
    opts._parentElm = options._parentElm;
    opts._refElm = options._refElm;
    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = Ctor.super.options;
      var cachedSuperOptions = Ctor.superOptions;
      var extendOptions = Ctor.extendOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed
        Ctor.superOptions = superOptions;
        extendOptions.render = options.render;
        extendOptions.staticRenderFns = options.staticRenderFns;
        extendOptions._scopeId = options._scopeId;
        options = Ctor.options = mergeOptions(superOptions, extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options;
  }

  function Vue$3(options) {
    if ("development" !== 'production' && !(this instanceof Vue$3)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue$3);
  stateMixin(Vue$3);
  eventsMixin(Vue$3);
  lifecycleMixin(Vue$3);
  renderMixin(Vue$3);

  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      /* istanbul ignore if */
      if (plugin.installed) {
        return;
      }
      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else {
        plugin.apply(null, args);
      }
      plugin.installed = true;
      return this;
    };
  }

  /*  */

  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
    };
  }

  /*  */

  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }
      var name = extendOptions.name || Super.options.name;
      {
        if (!/^[a-zA-Z][\w-]*$/.test(name)) {
          warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
        }
      }
      var Sub = function VueComponent(options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super;
      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;
      // create asset registers, so extended classes
      // can have their private assets too.
      config._assetTypes.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }
      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  /*  */

  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    config._assetTypes.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          {
            if (type === 'component' && config.isReservedTag(id)) {
              warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
            }
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }

  /*  */

  var patternTypes = [String, RegExp];

  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else {
      return pattern.test(name);
    }
  }

  function pruneCache(cache, filter) {
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cachedNode);
          cache[key] = null;
        }
      }
    }
  }

  function pruneCacheEntry(vnode) {
    if (vnode) {
      if (!vnode.componentInstance._inactive) {
        callHook(vnode.componentInstance, 'deactivated');
      }
      vnode.componentInstance.$destroy();
    }
  }

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes
    },

    created: function created() {
      this.cache = Object.create(null);
    },

    destroyed: function destroyed() {
      var this$1 = this;

      for (var key in this.cache) {
        pruneCacheEntry(this$1.cache[key]);
      }
    },

    watch: {
      include: function include(val) {
        pruneCache(this.cache, function (name) {
          return matches(val, name);
        });
      },
      exclude: function exclude(val) {
        pruneCache(this.cache, function (name) {
          return !matches(val, name);
        });
      }
    },

    render: function render() {
      var vnode = getFirstComponentChild(this.$slots.default);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        if (name && (this.include && !matches(this.include, name) || this.exclude && matches(this.exclude, name))) {
          return vnode;
        }
        var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
        if (this.cache[key]) {
          vnode.componentInstance = this.cache[key].componentInstance;
        } else {
          this.cache[key] = vnode;
        }
        vnode.data.keepAlive = true;
      }
      return vnode;
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () {
      return config;
    };
    {
      configDef.set = function () {
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }
    Object.defineProperty(Vue, 'config', configDef);
    Vue.util = util;
    Vue.set = set$1;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    Vue.options = Object.create(null);
    config._assetTypes.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue$3);

  Object.defineProperty(Vue$3.prototype, '$isServer', {
    get: isServerRendering
  });

  Vue$3.version = '2.1.10';

  /*  */

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select');
  var mustUseProp = function mustUseProp(tag, type, attr) {
    return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function isXlink(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  var getXlinkProp = function getXlinkProp(name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  var isFalsyAttrValue = function isFalsyAttrValue(val) {
    return val == null || val === false;
  };

  /*  */

  function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (parentNode = parentNode.parent) {
      if (parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return genClassFromData(data);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: child.class ? [child.class, parent.class] : parent.class
    };
  }

  function genClassFromData(data) {
    var dynamicClass = data.class;
    var staticClass = data.staticClass;
    if (staticClass || dynamicClass) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    var res = '';
    if (!value) {
      return res;
    }
    if (typeof value === 'string') {
      return value;
    }
    if (Array.isArray(value)) {
      var stringified;
      for (var i = 0, l = value.length; i < l; i++) {
        if (value[i]) {
          if (stringified = stringifyClass(value[i])) {
            res += stringified + ' ';
          }
        }
      }
      return res.slice(0, -1);
    }
    if (isObject(value)) {
      for (var key in value) {
        if (value[key]) {
          res += key + ' ';
        }
      }
      return res.slice(0, -1);
    }
    /* istanbul ignore next */
    return res;
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template');

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,' + 'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isPreTag = function isPreTag(tag) {
    return tag === 'pre';
  };

  var isReservedTag = function isReservedTag(tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math';
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }
    if (isReservedTag(tag)) {
      return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
    }
  }

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query(el) {
    if (typeof el === 'string') {
      var selector = el;
      el = document.querySelector(el);
      if (!el) {
        "development" !== 'production' && warn('Cannot find element: ' + selector);
        return document.createElement('div');
      }
    }
    return el;
  }

  /*  */

  function createElement$1(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm;
    }
    if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setAttribute(node, key, val) {
    node.setAttribute(key, val);
  }

  var nodeOps = Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setAttribute: setAttribute
  });

  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!key) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove$1(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
          refs[key].push(ref);
        } else {
          refs[key] = [ref];
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
  
  /*
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

  function isUndef(s) {
    return s == null;
  }

  function isDef(s) {
    return s != null;
  }

  function sameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.tag === vnode2.tag && vnode1.isComment === vnode2.isComment && !vnode1.data === !vnode2.data;
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) {
        map[key] = i;
      }
    }
    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks$1.length; ++i) {
      cbs[hooks$1[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (modules[j][hooks$1[i]] !== undefined) {
          cbs[hooks$1[i]].push(modules[j][hooks$1[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove$$1() {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (parent) {
        nodeOps.removeChild(parent, el);
      }
    }

    var inPre = 0;
    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            inPre++;
          }
          if (!inPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) && config.isUnknownElement(tag)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }
        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if ("development" !== 'production' && data && data.pre) {
          inPre--;
        }
      } else if (vnode.isComment) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */, parentElm, refElm);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          if (isReactivated) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (vnode.data.pendingInsert) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break;
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref) {
      if (parent) {
        if (ref) {
          nodeOps.insertBefore(parent, elm, ref);
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (i.create) {
          i.create(emptyNode, vnode);
        }
        if (i.insert) {
          insertedVnodeQueue.push(vnode);
        }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
      var i;
      if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      if (isDef(i = activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }
        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (rm || isDef(vnode.data)) {
        var listeners = cbs.remove.length + 1;
        if (!rm) {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        } else {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, elmToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }
          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            elmToMove = oldCh[idxInOld];
            /* istanbul ignore if */
            if ("development" !== 'production' && !elmToMove) {
              warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
            }
            if (sameVnode(elmToMove, newStartVnode)) {
              patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
              newStartVnode = newCh[++newStartIdx];
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
              newStartVnode = newCh[++newStartIdx];
            }
          }
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }
      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (vnode.isStatic && oldVnode.isStatic && vnode.key === oldVnode.key && (vnode.isCloned || vnode.isOnce)) {
        vnode.elm = oldVnode.elm;
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }
      var i;
      var data = vnode.data;
      var hasData = isDef(data);
      if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }
      var elm = vnode.elm = oldVnode.elm;
      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (hasData && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }
        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (hasData) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (initial && vnode.parent) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var bailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue) {
      {
        if (!assertNodeMatch(elm, vnode)) {
          return false;
        }
      }
      vnode.elm = elm;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true /* hydrating */);
        }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break;
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              if ("development" !== 'production' && typeof console !== 'undefined' && !bailed) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false;
            }
          }
        }
        if (isDef(data)) {
          for (var key in data) {
            if (!isRenderedModule(key)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true;
    }

    function assertNodeMatch(node, vnode) {
      if (vnode.tag) {
        return vnode.tag.indexOf('vue-component') === 0 || vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
      if (!vnode) {
        if (oldVnode) {
          invokeDestroyHook(oldVnode);
        }
        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (!oldVnode) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
              oldVnode.removeAttribute('server-rendered');
              hydrating = true;
            }
            if (hydrating) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }
          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm$1 = nodeOps.parentNode(oldElm);
          createElm(vnode, insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

          if (vnode.parent) {
            // component root element replaced.
            // update parent placeholder node element, recursively
            var ancestor = vnode.parent;
            while (ancestor) {
              ancestor.elm = vnode.elm;
              ancestor = ancestor.parent;
            }
            if (isPatchable(vnode)) {
              for (var i = 0; i < cbs.create.length; ++i) {
                cbs.create[i](emptyNode, vnode.parent);
              }
            }
          }

          if (parentElm$1 !== null) {
            removeVnodes(parentElm$1, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function callInsert() {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      }, 'dir-postpatch');
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = Object.create(null);
    if (!dirs) {
      return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    }
  }

  var baseModules = [ref, directives];

  /*  */

  function updateAttrs(oldVnode, vnode) {
    if (!oldVnode.data.attrs && !vnode.data.attrs) {
      return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (attrs.__ob__) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    /* istanbul ignore if */
    if (isIE9 && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (attrs[key] == null) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, key);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (!data.staticClass && !data.class && (!oldData || !oldData.staticClass && !oldData.class)) {
      return;
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (transitionClass) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var target$1;

  function add$2(event, _handler, once, capture) {
    if (once) {
      var oldHandler = _handler;
      var _target = target$1; // save current target element in closure
      _handler = function handler(ev) {
        remove$3(event, _handler, capture, _target);
        arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
      };
    }
    target$1.addEventListener(event, _handler, capture);
  }

  function remove$3(event, handler, capture, _target) {
    (_target || target$1).removeEventListener(event, handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (!oldVnode.data.on && !vnode.data.on) {
      return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    updateListeners(on, oldOn, add$2, remove$3, vnode.context);
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  function updateDOMProps(oldVnode, vnode) {
    if (!oldVnode.data.domProps && !vnode.data.domProps) {
      return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (props.__ob__) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (props[key] == null) {
        elm[key] = '';
      }
    }
    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }
        if (cur === oldProps[key]) {
          continue;
        }
      }

      if (key === 'value') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = cur == null ? '' : String(cur);
        if (shouldUpdateValue(elm, vnode, strCur)) {
          elm.value = strCur;
        }
      } else {
        elm[key] = cur;
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, vnode, checkVal) {
    return !elm.composing && (vnode.tag === 'option' || isDirty(elm, checkVal) || isInputChanged(vnode, checkVal));
  }

  function isDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
    return document.activeElement !== elm && elm.value !== checkVal;
  }

  function isInputChanged(vnode, newVal) {
    var value = vnode.elm.value;
    var modifiers = vnode.elm._vModifiers; // injected by v-model runtime
    if (modifiers && modifiers.number || vnode.elm.type === 'number') {
      return toNumber(value) !== toNumber(newVal);
    }
    if (modifiers && modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }
    return bindingStyle;
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res;
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function setProp(el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(name, val.replace(importantRE, ''), 'important');
    } else {
      el.style[normalize(name)] = val;
    }
  };

  var prefixes = ['Webkit', 'Moz', 'ms'];

  var testEl;
  var normalize = cached(function (prop) {
    testEl = testEl || document.createElement('div');
    prop = camelize(prop);
    if (prop !== 'filter' && prop in testEl.style) {
      return prop;
    }
    var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < prefixes.length; i++) {
      var prefixed = prefixes[i] + upper;
      if (prefixed in testEl.style) {
        return prefixed;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (!data.staticStyle && !data.style && !oldData.staticStyle && !oldData.style) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldVnode.data.staticStyle;
    var oldStyleBinding = oldVnode.data.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    vnode.data.style = style.__ob__ ? extend({}, style) : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (newStyle[name] == null) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !cls.trim()) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = ' ' + el.getAttribute('class') + ' ';
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !cls.trim()) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }
    } else {
      var cur = ' ' + el.getAttribute('class') + ' ';
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      el.setAttribute('class', cur.trim());
    }
  }

  /*  */

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;

  function nextFrame(fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    (el._transitionClasses || (el._transitionClasses = [])).push(cls);
    addClass(el, cls);
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove$1(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) {
      return cb();
    }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function end() {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function onEnd(e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
    var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
    var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
    var animationDelays = styles[animationProp + 'Delay'].split(', ');
    var animationDurations = styles[animationProp + 'Duration'].split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    };
  }

  function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  }

  function toMs(s) {
    return Number(s.slice(0, -1)) * 1000;
  }

  /*  */

  function enter(vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (el._leaveCb) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (!data) {
      return;
    }

    /* istanbul ignore if */
    if (el._enterCb || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      transitionNode = transitionNode.parent;
      context = transitionNode.context;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear ? appearClass : enterClass;
    var activeClass = isAppear ? appearActiveClass : enterActiveClass;
    var toClass = isAppear ? appearToClass : enterToClass;
    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = enterHook &&
    // enterHook may be a bound method which exposes
    // the length of original fn as _length
    (enterHook._length || enterHook.length) > 1;

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      }, 'transition-insert');
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        addTransitionClass(el, toClass);
        removeTransitionClass(el, startClass);
        if (!cb.cancelled && !userWantsControl) {
          whenTransitionEnds(el, type, cb);
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (el._enterCb) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (!data) {
      return rm();
    }

    /* istanbul ignore if */
    if (el._leaveCb || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = leave &&
    // leave hook may be a bound method which exposes
    // the length of original fn as _length
    (leave._length || leave.length) > 1;

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      }
      // record leaving element
      if (!vnode.data.show) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          addTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled && !userWantsControl) {
            whenTransitionEnds(el, type, cb);
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  function resolveTransition(def$$1) {
    if (!def$$1) {
      return;
    }
    /* istanbul ignore else */
    if ((typeof def$$1 === 'undefined' ? 'undefined' : _typeof(def$$1)) === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res;
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1);
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: name + "-enter",
      leaveClass: name + "-leave",
      appearClass: name + "-enter",
      enterToClass: name + "-enter-to",
      leaveToClass: name + "-leave-to",
      appearToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveActiveClass: name + "-leave-active",
      appearActiveClass: name + "-enter-active"
    };
  });

  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn();
      }
    };
  }

  function _enter(_, vnode) {
    if (!vnode.data.show) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove(vnode, rm) {
      /* istanbul ignore else */
      if (!vnode.data.show) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [attrs, klass, events, domProps, style, transition];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var model = {
    inserted: function inserted(el, binding, vnode) {
      {
        if (!modelableTagRE.test(vnode.tag)) {
          warn("v-model is not supported on element type: <" + vnode.tag + ">. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', vnode.context);
        }
      }
      if (vnode.tag === 'select') {
        var cb = function cb() {
          setSelected(el, binding, vnode.context);
        };
        cb();
        /* istanbul ignore if */
        if (isIE || isEdge) {
          setTimeout(cb, 0);
        }
      } else if (vnode.tag === 'textarea' || el.type === 'text') {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          if (!isAndroid) {
            el.addEventListener('compositionstart', onCompositionStart);
            el.addEventListener('compositionend', onCompositionEnd);
          }
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, el.options);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      "development" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return;
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    for (var i = 0, l = options.length; i < l; i++) {
      if (looseEqual(getValue(options[i]), value)) {
        return false;
      }
    }
    return true;
  }

  function getValue(option) {
    return '_value' in option ? option._value : option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
      if (value && transition && !isIE9) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (value === oldValue) {
        return;
      }
      vnode = locateNode(vnode);
      var transition = vnode.data && vnode.data.transition;
      if (transition && !isIE9) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: model,
    show: show
  };

  /*  */

  // Provides transition support for a single element/component.
  // supports transition mode (out-in / in-out)

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1].fn;
    }
    return data;
  }

  function placeholder(h, rawChild) {
    return (/\d-keep-alive$/.test(rawChild.tag) ? h('keep-alive') : null
    );
  }

  function hasParentTransition(vnode) {
    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render(h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return;
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(function (c) {
        return c.tag;
      });
      /* istanbul ignore if */
      if (!children.length) {
        return;
      }

      // warn multiple elements
      if ("development" !== 'production' && children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode;

      // warn invalid mode
      if ("development" !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + this._uid + "-";
      var key = child.key = child.key == null ? id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(function (d) {
        return d.name === 'show';
      })) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild && (oldChild.data.transition = extend({}, data));
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          }, key);
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          var delayedLeave;
          var performLeave = function performLeave() {
            delayedLeave();
          };
          mergeVNodeHook(data, 'afterEnter', performLeave, key);
          mergeVNodeHook(data, 'enterCancelled', performLeave, key);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
            delayedLeave = leave;
          }, key);
        }
      }

      return rawChild;
    }
  };

  /*  */

  // Provides transition support for list items.
  // supports move transitions using the FLIP technique.

  // Because the vdom's children update algorithm is "unstable" - i.e.
  // it doesn't guarantee the relative positioning of removed elements,
  // we force transition-group to update its children into two passes:
  // in the first pass, we remove all nodes that need to be removed,
  // triggering their leaving transition; in the second pass, we insert/move
  // into the final disired state. This way in the second pass removed
  // nodes will remain where they should be.

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },

    beforeUpdate: function beforeUpdate() {
      // force removing pass
      this.__patch__(this._vnode, this.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );
      this._vnode = this.kept;
    },

    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      var f = document.body.offsetHeight; // eslint-disable-line

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove(el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
        if (this._hasMove != null) {
          return this._hasMove;
        }
        addTransitionClass(el, moveClass);
        var info = getTransitionInfo(el);
        removeTransitionClass(el, moveClass);
        return this._hasMove = info.hasTransform;
      }
    }
  };

  function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue$3.config.isUnknownElement = isUnknownElement;
  Vue$3.config.isReservedTag = isReservedTag;
  Vue$3.config.getTagNamespace = getTagNamespace;
  Vue$3.config.mustUseProp = mustUseProp;

  // install platform runtime directives & components
  extend(Vue$3.options.directives, platformDirectives);
  extend(Vue$3.options.components, platformComponents);

  // install platform patch function
  Vue$3.prototype.__patch__ = inBrowser ? patch$1 : noop;

  // wrap mount
  Vue$3.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return this._mount(el, hydrating);
  };

  if ("development" !== 'production' && inBrowser && typeof console !== 'undefined') {
    console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
  }

  // devtools global hook
  /* istanbul ignore next */
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue$3);
      } else if ("development" !== 'production' && inBrowser && !isEdge && /Chrome\/\d+/.test(window.navigator.userAgent)) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }
  }, 0);

  /*  */

  // check whether current browser encodes a char inside attribute values
  function shouldDecode(content, encoded) {
    var div = document.createElement('div');
    div.innerHTML = "<div a=\"" + content + "\">";
    return div.innerHTML.indexOf(encoded) > 0;
  }

  // #3663
  // IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

  /*  */

  var decoder;

  function decode(html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent;
  }

  /*  */

  var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr', true);

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source', true);

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track', true);

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  /*!
   * HTML Parser By John Resig (ejohn.org)
   * Modified by Juriy "kangax" Zaytsev
   * Original code by Erik Arvidsson, Mozilla Public License
   * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
   */

  // Regular Expressions for parsing tags and attributes
  var singleAttrIdentifier = /([^\s"'<>/=]+)/;
  var singleAttrAssign = /(?:=)/;
  var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source];
  var attribute = new RegExp('^\\s*' + singleAttrIdentifier.source + '(?:\\s*(' + singleAttrAssign.source + ')' + '\\s*(?:' + singleAttrValues.join('|') + '))?');

  // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
  // but for Vue templates we can enforce a simple charset
  var ncname = '[a-zA-Z_][\\w\\-\\.]*';
  var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
  var startTagOpen = new RegExp('^<' + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
  var doctype = /^<!DOCTYPE [^>]+>/i;
  var comment = /^<!--/;
  var conditionalComment = /^<!\[/;

  var IS_REGEX_CAPTURING_BROKEN = false;
  'x'.replace(/x(.)?/g, function (m, g) {
    IS_REGEX_CAPTURING_BROKEN = g === '';
  });

  // Special Elements (can contain anything)
  var isScriptOrStyle = makeMap('script,style', true);
  var reCache = {};

  var ltRE = /&lt;/g;
  var gtRE = /&gt;/g;
  var nlRE = /&#10;/g;
  var ampRE = /&amp;/g;
  var quoteRE = /&quot;/g;

  function decodeAttr(value, shouldDecodeNewlines) {
    if (shouldDecodeNewlines) {
      value = value.replace(nlRE, '\n');
    }
    return value.replace(ltRE, '<').replace(gtRE, '>').replace(ampRE, '&').replace(quoteRE, '"');
  }

  function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a script or style element
      if (!lastTag || !isScriptOrStyle(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              advance(commentEnd + 3);
              continue;
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            continue;
          }
        }

        var text = void 0,
            rest$1 = void 0,
            next = void 0;
        if (textEnd > 0) {
          rest$1 = html.slice(textEnd);
          while (!endTag.test(rest$1) && !startTagOpen.test(rest$1) && !comment.test(rest$1) && !conditionalComment.test(rest$1)) {
            // < in plain text, be forgiving and treat it as text
            next = rest$1.indexOf('<', 1);
            if (next < 0) {
              break;
            }
            textEnd += next;
            rest$1 = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
          advance(textEnd);
        }

        if (textEnd < 0) {
          text = html;
          html = '';
        }

        if (options.chars && text) {
          options.chars(text);
        }
      } else {
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var endTagLength = 0;
        var rest = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
            text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (options.chars) {
            options.chars(text);
          }
          return '';
        });
        index += html.length - rest.length;
        html = rest;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last && options.chars) {
        options.chars(html);
        break;
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance(n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          advance(attr[0].length);
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match;
        }
      }
    }

    function handleStartTag(match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
        if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
          if (args[3] === '') {
            delete args[3];
          }
          if (args[4] === '') {
            delete args[4];
          }
          if (args[5] === '') {
            delete args[5];
          }
        }
        var value = args[3] || args[4] || args[5] || '';
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, options.shouldDecodeNewlines)
        };
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
        lastTag = tagName;
        unarySlash = '';
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) {
        start = index;
      }
      if (end == null) {
        end = index;
      }

      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
      }

      // Find the closest opened tag of the same type
      if (tagName) {
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;break; // "
          case 0x27:
            inSingle = true;break; // '
          case 0x60:
            inTemplateString = true;break; // `
          case 0x28:
            paren++;break; // (
          case 0x29:
            paren--;break; // )
          case 0x5B:
            square++;break; // [
          case 0x5D:
            square--;break; // ]
          case 0x7B:
            curly++;break; // {
          case 0x7D:
            curly--;break; // }
        }
        if (c === 0x2f) {
          // /
          var j = i - 1;
          var p = void 0;
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') {
              break;
            }
          }
          if (!p || !/[\w$]/.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression;
  }

  function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return "_f(\"" + filter + "\")(" + exp + ")";
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return "_f(\"" + name + "\")(" + exp + "," + args;
    }
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });

  function parseText(text, delimiters) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return;
    }
    var tokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index;
    while (match = tagRE.exec(text)) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        tokens.push(JSON.stringify(text.slice(lastIndex, index)));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push("_s(" + exp + ")");
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      tokens.push(JSON.stringify(text.slice(lastIndex)));
    }
    return tokens.join('+');
  }

  /*  */

  function baseWarn(msg) {
    console.error("[Vue parser]: " + msg);
  }

  function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) {
      return m[key];
    }).filter(function (_) {
      return _;
    }) : [];
  }

  function addProp(el, name, value) {
    (el.props || (el.props = [])).push({ name: name, value: value });
  }

  function addAttr(el, name, value) {
    (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  }

  function addDirective(el, name, rawName, value, arg, modifiers) {
    (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  }

  function addHandler(el, name, value, modifiers, important) {
    // check capture modifier
    if (modifiers && modifiers.capture) {
      delete modifiers.capture;
      name = '!' + name; // mark the event as captured
    }
    if (modifiers && modifiers.once) {
      delete modifiers.once;
      name = '~' + name; // mark the event as once
    }
    var events;
    if (modifiers && modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }
    var newHandler = { value: value, modifiers: modifiers };
    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }
  }

  function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue);
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue);
      }
    }
  }

  function getAndRemoveAttr(el, name) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }
    return val;
  }

  var len;
  var str;
  var chr;
  var index$1;
  var expressionPos;
  var expressionEndPos;

  /**
   * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
   *
   * for loop possible cases:
   *
   * - test
   * - test[idx]
   * - test[test1[idx]]
   * - test["a"][idx]
   * - xxx.test[a[a].test1[idx]]
   * - test.xxx.a["asa"][test1[idx]]
   *
   */

  function parseModel(val) {
    str = val;
    len = str.length;
    index$1 = expressionPos = expressionEndPos = 0;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      return {
        exp: val,
        idx: null
      };
    }

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.substring(0, expressionPos),
      idx: val.substring(expressionPos + 1, expressionEndPos)
    };
  }

  function next() {
    return str.charCodeAt(++index$1);
  }

  function eof() {
    return index$1 >= len;
  }

  function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
  }

  function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }
      if (chr === 0x5B) {
        inBracket++;
      }
      if (chr === 0x5D) {
        inBracket--;
      }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break;
      }
    }
  }

  /*  */

  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
  var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
  var bindRE = /^:|^v-bind:/;
  var onRE = /^@|^v-on:/;
  var argRE = /:(.*)$/;
  var modifierRE = /\.[^.]+/g;

  var decodeHTMLCached = cached(decode);

  // configurable state
  var warn$1;
  var platformGetTagNamespace;
  var platformMustUseProp;
  var platformIsPreTag;
  var preTransforms;
  var transforms;
  var postTransforms;
  var delimiters;

  /**
   * Convert HTML string to AST.
   */
  function parse(template, options) {
    warn$1 = options.warn || baseWarn;
    platformGetTagNamespace = options.getTagNamespace || no;
    platformMustUseProp = options.mustUseProp || no;
    platformIsPreTag = options.isPreTag || no;
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    transforms = pluckModuleFunction(options.modules, 'transformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
    delimiters = options.delimiters;
    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;
    parseHTML(template, {
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      start: function start(tag, attrs, unary) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = {
          type: 1,
          tag: tag,
          attrsList: attrs,
          attrsMap: makeAttrsMap(attrs),
          parent: currentParent,
          children: []
        };
        if (ns) {
          element.ns = ns;
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          "development" !== 'production' && warn$1('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          preTransforms[i](element, options);
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else {
          processFor(element);
          processIf(element);
          processOnce(element);
          processKey(element);

          // determine whether this is a plain element after
          // removing structural attributes
          element.plain = !element.key && !attrs.length;

          processRef(element);
          processSlot(element);
          processComponent(element);
          for (var i$1 = 0; i$1 < transforms.length; i$1++) {
            transforms[i$1](element, options);
          }
          processAttrs(element);
        }

        function checkRootConstraints(el) {
          if ("development" !== 'production' && !warned) {
            if (el.tag === 'slot' || el.tag === 'template') {
              warned = true;
              warn$1("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes:\n' + template);
            }
            if (el.attrsMap.hasOwnProperty('v-for')) {
              warned = true;
              warn$1('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements:\n' + template);
            }
          }
        }

        // tree management
        if (!root) {
          root = element;
          checkRootConstraints(root);
        } else if (!stack.length) {
          // allow root elements with v-if, v-else-if and v-else
          if (root.if && (element.elseif || element.else)) {
            checkRootConstraints(element);
            addIfCondition(root, {
              exp: element.elseif,
              block: element
            });
          } else if ("development" !== 'production' && !warned) {
            warned = true;
            warn$1("Component template should contain exactly one root element:" + "\n\n" + template + "\n\n" + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
          }
        }
        if (currentParent && !element.forbidden) {
          if (element.elseif || element.else) {
            processIfConditions(element, currentParent);
          } else if (element.slotScope) {
            // scoped slot
            currentParent.plain = false;
            var name = element.slotTarget || 'default';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          } else {
            currentParent.children.push(element);
            element.parent = currentParent;
          }
        }
        if (!unary) {
          currentParent = element;
          stack.push(element);
        }
        // apply post-transforms
        for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
          postTransforms[i$2](element, options);
        }
      },

      end: function end() {
        // remove trailing whitespace
        var element = stack[stack.length - 1];
        var lastNode = element.children[element.children.length - 1];
        if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
          element.children.pop();
        }
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        // check pre state
        if (element.pre) {
          inVPre = false;
        }
        if (platformIsPreTag(element.tag)) {
          inPre = false;
        }
      },

      chars: function chars(text) {
        if (!currentParent) {
          if ("development" !== 'production' && !warned && text === template) {
            warned = true;
            warn$1('Component template requires a root element, rather than just text:\n\n' + template);
          }
          return;
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
          return;
        }
        var children = currentParent.children;
        text = inPre || text.trim() ? decodeHTMLCached(text
        // only preserve whitespace if its not right after a starting tag
        ) : preserveWhitespace && children.length ? ' ' : '';
        if (text) {
          var expression;
          if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
            children.push({
              type: 2,
              expression: expression,
              text: text
            });
          } else if (text !== ' ' || children[children.length - 1].text !== ' ') {
            currentParent.children.push({
              type: 3,
              text: text
            });
          }
        }
      }
    });
    return root;
  }

  function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    var l = el.attrsList.length;
    if (l) {
      var attrs = el.attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        attrs[i] = {
          name: el.attrsList[i].name,
          value: JSON.stringify(el.attrsList[i].value)
        };
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processKey(el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      if ("development" !== 'production' && el.tag === 'template') {
        warn$1("<template> cannot be keyed. Place the key on real elements instead.");
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    var exp;
    if (exp = getAndRemoveAttr(el, 'v-for')) {
      var inMatch = exp.match(forAliasRE);
      if (!inMatch) {
        "development" !== 'production' && warn$1("Invalid v-for expression: " + exp);
        return;
      }
      el.for = inMatch[2].trim();
      var alias = inMatch[1].trim();
      var iteratorMatch = alias.match(forIteratorRE);
      if (iteratorMatch) {
        el.alias = iteratorMatch[1].trim();
        el.iterator1 = iteratorMatch[2].trim();
        if (iteratorMatch[3]) {
          el.iterator2 = iteratorMatch[3].trim();
        }
      } else {
        el.alias = alias;
      }
    }
  }

  function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$1("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
    }
  }

  function findPrevElement(children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i];
      } else {
        if ("development" !== 'production' && children[i].text !== ' ') {
          warn$1("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
        }
        children.pop();
      }
    }
  }

  function addIfCondition(el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    var once = getAndRemoveAttr(el, 'v-once');
    if (once != null) {
      el.once = true;
    }
  }

  function processSlot(el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if ("development" !== 'production' && el.key) {
        warn$1("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
      }
    } else {
      var slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      }
      if (el.tag === 'template') {
        el.slotScope = getAndRemoveAttr(el, 'scope');
      }
    }
  }

  function processComponent(el) {
    var binding;
    if (binding = getBindingAttr(el, 'is')) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, arg, modifiers, isProp;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name);
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) {
          // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isProp = false;
          if (modifiers) {
            if (modifiers.prop) {
              isProp = true;
              name = camelize(name);
              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }
            if (modifiers.camel) {
              name = camelize(name);
            }
          }
          if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value);
          } else {
            addAttr(el, name, value);
          }
        } else if (onRE.test(name)) {
          // v-on
          name = name.replace(onRE, '');
          addHandler(el, name, value, modifiers);
        } else {
          // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          if (argMatch && (arg = argMatch[1])) {
            name = name.slice(0, -(arg.length + 1));
          }
          addDirective(el, name, rawName, value, arg, modifiers);
          if ("development" !== 'production' && name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var expression = parseText(value, delimiters);
          if (expression) {
            warn$1(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
          }
        }
        addAttr(el, name, JSON.stringify(value));
      }
    }
  }

  function checkInFor(el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  function parseModifiers(name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) {
        ret[m.slice(1)] = true;
      });
      return ret;
    }
  }

  function makeAttrsMap(attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if ("development" !== 'production' && map[attrs[i].name] && !isIE) {
        warn$1('duplicate attribute: ' + attrs[i].name);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map;
  }

  function isForbiddenTag(el) {
    return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug(attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res;
  }

  function checkForAliasModel(el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
      }
      _el = _el.parent;
    }
  }

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize(root, options) {
    if (!root) {
      return;
    }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
  }

  function markStatic(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        return;
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic(child);
        if (!child.static) {
          node.static = false;
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;
        return;
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        walkThroughConditionsBlocks(node.ifConditions, isInFor);
      }
    }
  }

  function walkThroughConditionsBlocks(conditionBlocks, isInFor) {
    for (var i = 1, len = conditionBlocks.length; i < len; i++) {
      markStaticRoots(conditionBlocks[i].block, isInFor);
    }
  }

  function isStatic(node) {
    if (node.type === 2) {
      // expression
      return false;
    }
    if (node.type === 3) {
      // text
      return true;
    }
    return !!(node.pre || !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
  }

  function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false;
      }
      if (node.for) {
        return true;
      }
    }
    return false;
  }

  /*  */

  var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
  var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

  // keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: 'if($event.target !== $event.currentTarget)return;',
    ctrl: 'if(!$event.ctrlKey)return;',
    shift: 'if(!$event.shiftKey)return;',
    alt: 'if(!$event.altKey)return;',
    meta: 'if(!$event.metaKey)return;'
  };

  function genHandlers(events, native) {
    var res = native ? 'nativeOn:{' : 'on:{';
    for (var name in events) {
      res += "\"" + name + "\":" + genHandler(name, events[name]) + ",";
    }
    return res.slice(0, -1) + '}';
  }

  function genHandler(name, handler) {
    if (!handler) {
      return 'function(){}';
    } else if (Array.isArray(handler)) {
      return "[" + handler.map(function (handler) {
        return genHandler(name, handler);
      }).join(',') + "]";
    } else if (!handler.modifiers) {
      return fnExpRE.test(handler.value) || simplePathRE.test(handler.value) ? handler.value : "function($event){" + handler.value + "}";
    } else {
      var code = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          code += modifierCode[key];
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code = genKeyFilter(keys) + code;
      }
      var handlerCode = simplePathRE.test(handler.value) ? handler.value + '($event)' : handler.value;
      return 'function($event){' + code + handlerCode + '}';
    }
  }

  function genKeyFilter(keys) {
    return "if(" + keys.map(genFilterCode).join('&&') + ")return;";
  }

  function genFilterCode(key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return "$event.keyCode!==" + keyVal;
    }
    var alias = keyCodes[key];
    return "_k($event.keyCode," + JSON.stringify(key) + (alias ? ',' + JSON.stringify(alias) : '') + ")";
  }

  /*  */

  function bind$2(el, dir) {
    el.wrapData = function (code) {
      return "_b(" + code + ",'" + el.tag + "'," + dir.value + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")";
    };
  }

  /*  */

  var baseDirectives = {
    bind: bind$2,
    cloak: noop
  };

  /*  */

  // configurable state
  var warn$2;
  var transforms$1;
  var dataGenFns;
  var platformDirectives$1;
  var isPlatformReservedTag$1;
  var staticRenderFns;
  var onceCount;
  var currentOptions;

  function generate(ast, options) {
    // save previous staticRenderFns so generate calls can be nested
    var prevStaticRenderFns = staticRenderFns;
    var currentStaticRenderFns = staticRenderFns = [];
    var prevOnceCount = onceCount;
    onceCount = 0;
    currentOptions = options;
    warn$2 = options.warn || baseWarn;
    transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
    dataGenFns = pluckModuleFunction(options.modules, 'genData');
    platformDirectives$1 = options.directives || {};
    isPlatformReservedTag$1 = options.isReservedTag || no;
    var code = ast ? genElement(ast) : '_c("div")';
    staticRenderFns = prevStaticRenderFns;
    onceCount = prevOnceCount;
    return {
      render: "with(this){return " + code + "}",
      staticRenderFns: currentStaticRenderFns
    };
  }

  function genElement(el) {
    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el);
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el);
    } else if (el.for && !el.forProcessed) {
      return genFor(el);
    } else if (el.if && !el.ifProcessed) {
      return genIf(el);
    } else if (el.tag === 'template' && !el.slotTarget) {
      return genChildren(el) || 'void 0';
    } else if (el.tag === 'slot') {
      return genSlot(el);
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el);
      } else {
        var data = el.plain ? undefined : genData(el);

        var children = el.inlineTemplate ? null : genChildren(el, true);
        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
      }
      // module transforms
      for (var i = 0; i < transforms$1.length; i++) {
        code = transforms$1[i](el, code);
      }
      return code;
    }
  }

  // hoist static sub-trees out
  function genStatic(el) {
    el.staticProcessed = true;
    staticRenderFns.push("with(this){return " + genElement(el) + "}");
    return "_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
  }

  // v-once
  function genOnce(el) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el);
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break;
        }
        parent = parent.parent;
      }
      if (!key) {
        "development" !== 'production' && warn$2("v-once can only be used inside v-for that is keyed. ");
        return genElement(el);
      }
      return "_o(" + genElement(el) + "," + onceCount++ + (key ? "," + key : "") + ")";
    } else {
      return genStatic(el);
    }
  }

  function genIf(el) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice());
  }

  function genIfConditions(conditions) {
    if (!conditions.length) {
      return '_e()';
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions);
    } else {
      return "" + genTernaryExp(condition.block);
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
      return el.once ? genOnce(el) : genElement(el);
    }
  }

  function genFor(el) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
    el.forProcessed = true; // avoid recursion
    return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genElement(el) + '})';
  }

  function genData(el) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el);
    if (dirs) {
      data += dirs + ',';
    }

    // key
    if (el.key) {
      data += "key:" + el.key + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + el.ref + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + el.tag + "\",";
    }
    // module data generation functions
    for (var i = 0; i < dataGenFns.length; i++) {
      data += dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:{" + genProps(el.attrs) + "},";
    }
    // DOM props
    if (el.props) {
      data += "domProps:{" + genProps(el.props) + "},";
    }
    // event handlers
    if (el.events) {
      data += genHandlers(el.events) + ",";
    }
    if (el.nativeEvents) {
      data += genHandlers(el.nativeEvents, true) + ",";
    }
    // slot target
    if (el.slotTarget) {
      data += "slot:" + el.slotTarget + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += genScopedSlots(el.scopedSlots) + ",";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    return data;
  }

  function genDirectives(el) {
    var dirs = el.directives;
    if (!dirs) {
      return;
    }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, warn$2);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']';
    }
  }

  function genInlineTemplate(el) {
    var ast = el.children[0];
    if ("development" !== 'production' && (el.children.length > 1 || ast.type !== 1)) {
      warn$2('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
      var inlineRenderFns = generate(ast, currentOptions);
      return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
        return "function(){" + code + "}";
      }).join(',') + "]}";
    }
  }

  function genScopedSlots(slots) {
    return "scopedSlots:{" + Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key]);
    }).join(',') + "}";
  }

  function genScopedSlot(key, el) {
    return key + ":function(" + String(el.attrsMap.scope) + "){" + "return " + (el.tag === 'template' ? genChildren(el) || 'void 0' : genElement(el)) + "}";
  }

  function genChildren(el, checkSkip) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
        return genElement(el$1);
      }
      var normalizationType = getNormalizationType(children);
      return "[" + children.map(genNode).join(',') + "]" + (checkSkip ? normalizationType ? "," + normalizationType : '' : '');
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType(children) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue;
      }
      if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return needsNormalization(c.block);
      })) {
        res = 2;
        break;
      }
      if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return maybeComponent(c.block);
      })) {
        res = 1;
      }
    }
    return res;
  }

  function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
  }

  function maybeComponent(el) {
    return !isPlatformReservedTag$1(el.tag);
  }

  function genNode(node) {
    if (node.type === 1) {
      return genElement(node);
    } else {
      return genText(node);
    }
  }

  function genText(text) {
    return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
  }

  function genSlot(el) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el);
    var res = "_t(" + slotName + (children ? "," + children : '');
    var attrs = el.attrs && "{" + el.attrs.map(function (a) {
      return camelize(a.name) + ":" + a.value;
    }).join(',') + "}";
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')';
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent(componentName, el) {
    var children = el.inlineTemplate ? null : genChildren(el, true);
    return "_c(" + componentName + "," + genData(el) + (children ? "," + children : '') + ")";
  }

  function genProps(props) {
    var res = '';
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
    }
    return res.slice(0, -1);
  }

  // #3895, #4268
  function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }

  /*  */

  /**
   * Compile a template.
   */
  function compile$1(template, options) {
    var ast = parse(template.trim(), options);
    optimize(ast, options);
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    };
  }

  /*  */

  // operators like typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');
  // check valid identifier for v-for
  var identRE = /[A-Za-z_$][\w$]*/;
  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors(ast) {
    var errors = [];
    if (ast) {
      checkNode(ast, errors);
    }
    return errors;
  }

  function checkNode(node, errors) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            if (name === 'v-for') {
              checkFor(node, "v-for=\"" + value + "\"", errors);
            } else {
              checkExpression(value, name + "=\"" + value + "\"", errors);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], errors);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, errors);
    }
  }

  function checkFor(node, text, errors) {
    checkExpression(node.for || '', text, errors);
    checkIdentifier(node.alias, 'v-for alias', text, errors);
    checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
    checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
  }

  function checkIdentifier(ident, type, text, errors) {
    if (typeof ident === 'string' && !identRE.test(ident)) {
      errors.push("- invalid " + type + " \"" + ident + "\" in expression: " + text);
    }
  }

  function checkExpression(exp, text, errors) {
    try {
      new Function("return " + exp);
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        errors.push("- avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text);
      } else {
        errors.push("- invalid expression: " + text);
      }
    }
  }

  /*  */

  function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if ("development" !== 'production' && staticClass) {
      var expression = parseText(staticClass, options.delimiters);
      if (expression) {
        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData$1(el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + el.staticClass + ",";
    }
    if (el.classBinding) {
      data += "class:" + el.classBinding + ",";
    }
    return data;
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData$1
  };

  /*  */

  function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var expression = parseText(staticStyle, options.delimiters);
        if (expression) {
          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$2(el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + el.staticStyle + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + el.styleBinding + "),";
    }
    return data;
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$2
  };

  var modules$1 = [klass$1, style$1];

  /*  */

  var warn$3;

  function model$1(el, dir, _warn) {
    warn$3 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;
    {
      var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (tag === 'input' && dynamicType) {
        warn$3("<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" + "v-model does not support dynamic input types. Use v-if branches instead.");
      }
    }
    if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else {
      genDefaultModel(el, value, modifiers);
    }
    // ensure runtime directive metadata
    return true;
  }

  function genCheckboxModel(el, value, modifiers) {
    if ("development" !== 'production' && el.attrsMap.checked != null) {
      warn$3("<" + el.tag + " v-model=\"" + value + "\" checked>:\n" + "inline checked attributes will be ignored when using v-model. " + 'Declare initial values in the component\'s data option instead.');
    }
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
    addHandler(el, 'click', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + value + "=$$c}", null, true);
  }

  function genRadioModel(el, value, modifiers) {
    if ("development" !== 'production' && el.attrsMap.checked != null) {
      warn$3("<" + el.tag + " v-model=\"" + value + "\" checked>:\n" + "inline checked attributes will be ignored when using v-model. " + 'Declare initial values in the component\'s data option instead.');
    }
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
    addHandler(el, 'click', genAssignmentCode(value, valueBinding), null, true);
  }

  function genDefaultModel(el, value, modifiers) {
    {
      if (el.tag === 'input' && el.attrsMap.value) {
        warn$3("<" + el.tag + " v-model=\"" + value + "\" value=\"" + el.attrsMap.value + "\">:\n" + 'inline value attributes will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
      }
      if (el.tag === 'textarea' && el.children.length) {
        warn$3("<textarea v-model=\"" + value + "\">:\n" + 'inline content inside <textarea> will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
      }
    }

    var type = el.attrsMap.type;
    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var event = lazy || isIE && type === 'range' ? 'change' : 'input';
    var needCompositionGuard = !lazy && type !== 'range';
    var isNative = el.tag === 'input' || el.tag === 'textarea';

    var valueExpression = isNative ? "$event.target.value" + (trim ? '.trim()' : '') : trim ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";
    valueExpression = number || type === 'number' ? "_n(" + valueExpression + ")" : valueExpression;

    var code = genAssignmentCode(value, valueExpression);
    if (isNative && needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if ("development" !== 'production' && type === 'file') {
      warn$3("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
    }

    addProp(el, 'value', isNative ? "_s(" + value + ")" : "(" + value + ")");
    addHandler(el, event, code, null, true);
    if (trim || number || type === 'number') {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  function genSelect(el, value, modifiers) {
    {
      el.children.some(checkOptionWarning);
    }

    var number = modifiers && modifiers.number;
    var assignment = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})" + (el.attrsMap.multiple == null ? '[0]' : '');

    var code = genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
  }

  function checkOptionWarning(option) {
    if (option.type === 1 && option.tag === 'option' && option.attrsMap.selected != null) {
      warn$3("<select v-model=\"" + option.parent.attrsMap['v-model'] + "\">:\n" + 'inline selected attributes on <option> will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
      return true;
    }
    return false;
  }

  function genAssignmentCode(value, assignment) {
    var modelRs = parseModel(value);
    if (modelRs.idx === null) {
      return value + "=" + assignment;
    } else {
      return "var $$exp = " + modelRs.exp + ", $$idx = " + modelRs.idx + ";" + "if (!Array.isArray($$exp)){" + value + "=" + assignment + "}" + "else{$$exp.splice($$idx, 1, " + assignment + ")}";
    }
  }

  /*  */

  function text(el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', "_s(" + dir.value + ")");
    }
  }

  /*  */

  function html(el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', "_s(" + dir.value + ")");
    }
  }

  var directives$1 = {
    model: model$1,
    text: text,
    html: html
  };

  /*  */

  var cache = Object.create(null);

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    staticKeys: genStaticKeys(modules$1),
    directives: directives$1,
    isReservedTag: isReservedTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    getTagNamespace: getTagNamespace,
    isPreTag: isPreTag
  };

  function compile$$1(template, options) {
    options = options ? extend(extend({}, baseOptions), options) : baseOptions;
    return compile$1(template, options);
  }

  function compileToFunctions(template, options, vm) {
    var _warn = options && options.warn || warn;
    // detect possible CSP restriction
    /* istanbul ignore if */
    {
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          _warn('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
        }
      }
    }
    var key = options && options.delimiters ? String(options.delimiters) + template : template;
    if (cache[key]) {
      return cache[key];
    }
    var res = {};
    var compiled = compile$$1(template, options);
    res.render = makeFunction(compiled.render);
    var l = compiled.staticRenderFns.length;
    res.staticRenderFns = new Array(l);
    for (var i = 0; i < l; i++) {
      res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
    }
    {
      if (res.render === noop || res.staticRenderFns.some(function (fn) {
        return fn === noop;
      })) {
        _warn("failed to compile template:\n\n" + template + "\n\n" + detectErrors(compiled.ast).join('\n') + '\n\n', vm);
      }
    }
    return cache[key] = res;
  }

  function makeFunction(code) {
    try {
      return new Function(code);
    } catch (e) {
      return noop;
    }
  }

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
  });

  var mount = Vue$3.prototype.$mount;
  Vue$3.prototype.$mount = function (el, hydrating) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      "development" !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
      return this;
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if ("development" !== 'production' && !template) {
              warn("Template element not found or is empty: " + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        var ref = compileToFunctions(template, {
          warn: warn,
          shouldDecodeNewlines: shouldDecodeNewlines,
          delimiters: options.delimiters
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;
      }
    }
    return mount.call(this, el, hydrating);
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML;
    }
  }

  Vue$3.compile = compileToFunctions;

  return Vue$3;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    // 工资
    var salaryItems = ["1k-2k", "2k-4k", "4k-6k", "6k-8k", "8k-10k", "10k-15k", "15k-25k", "25k-35k", "35k-50k", "50k-75k", "75k-100k", ">100k"];
    // window.salaryItems = salaryItems;
    //福利待遇
    var welfares = ["五险一金", "包住", "包吃", "年底双薪", "双休", "交通补助", "加班补助", "话补", "房补"];
    // window.welfares = welfares;
    // 期望学历
    var scolarship = ["本科", "硕士", "博士", "MBA", "EMBA", "大专", "中专", "中技", "高中", "初中"];
    // window.scolarship = scolarship;
    // 岗位人数
    var positionsum = ["1—10人", "10—20人", "21—30人", "31—40人", "41—50人", "51—60人", "61—70人", "71—80人", "81—90人", "91—100人", "101-150人", "151-200人", "201-300人", "300人以上"];
    // window.positionsum = positionsum;
    // 民族数据
    var nations = ["汉族", "壮族", "满族", "回族", "苗族", "维吾尔族", "土家族", "彝族", "蒙古族", "藏族", "布依族", "侗族", "瑶族", "朝鲜族", "白族", "哈尼族", "哈萨克族", "黎族", "傣族", "畲族", "傈僳族", "仡佬族", "东乡族", "高山族", "拉祜族", "水族", "佤族", "纳西族", "羌族", "土族", "仫佬族", "锡伯族", "柯尔克孜族", "达斡尔族", "景颇族", "毛南族", "撒拉族", "布朗族", "塔吉克族", "阿昌族", "普米族", "鄂温克族", "怒族", "京族", "基诺族", "德昂族", "保安族", "俄罗斯族", "裕固族", "乌孜别克族", "门巴族", "鄂伦春族", "独龙族", "塔塔尔族", "赫哲族", "珞巴族"];
    // window.nations = nations;
    // 高校类别
    var uniclassific = ["综合类", "理工类", "财经类", "师范类", "语言类", "政法类", "民族类", "农林类", "医药类", "艺术类", "体育类", "军事类"];
    // window.uniclassific = uniclassific;
    // 高校性质
    var unilevel = ["重点", "本科", "大专", "高职"];
    // window.unilevel = unilevel;
    // 企业规模
    var incScale = ["20人以内", "20-99人", "100-199人", "200-499人", "500-999人", "1000-9999人", "10000人以上"];

    // window.incScale = incScale;
    // 工作经验
    var worksexp = ["一年以内", "1-2年", "2-3年", "3-4年", "4-5年", "5-6年", "6-7年", "8年以上"];
    // window.worksexp = worksexp;
    var workstates = ["在职，打算换个新环境", "离职，可立即到岗工作", "在校学生", "应届毕业生", "暂时不想找工作"];
    // window.workstates = workstates;
    // 企业性质
    var incProps = ["国营", "民营", "合资", "外商独资", "股份制企业", "上市公司", "代表处", "国家机关", "事业单位", "世界500强", "中国500强"];
    // window.incProps = incProps;
    //专业人数
    var majorSum = ["30-40人", "41-60人", "61-80人", "81-100人", "101-120人", "121-140人", "141-200人", "200人以上"];
    // window.majorSum = majorSum;


    // 日期数据

    var date = {
        year: [],
        month: [],
        day: []
    };
    var year = new Date().getFullYear();
    year = parseInt(year);
    for (var i = year; i >= 1960; i--) {
        date.year.push(i);
    };
    for (var j = 1; j <= 12; j++) {
        if (j < 10) {
            j = "0" + j;
        }
        date.month.push(j);
    };
    for (var k = 1; k <= 31; k++) {
        if (k < 10) {
            k = "0" + k;
        }
        date.day.push(k);
    };
    // window.date = date;
    window.xqdatabase = {
        salary: salaryItems,
        welfares: welfares,
        scolarship: scolarship,
        positionsum: positionsum,
        nations: nations,
        uniclassific: uniclassific,
        unilevel: unilevel,
        incScale: incScale,
        worksexp: worksexp,
        workstates: workstates,
        incProps: incProps,
        majorSum: majorSum,
        date: date
    };
})();

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    var majorArray = [{
        major: "电气信息类",
        submajor: ["电气工程及其自动化", "自动化", "电子信息工程", "通信工程", "计算机科学与技术", "电子科学与技术", "生物医学工程", "电子工程与自动化", "信息工程", "软件工程", "影视艺术技术", "网络工程", "信息显示与光电技术", "集成电路设计与集成系统", "光电信息工程", "广播电视工程", "电气信息工程", "计算机软件", "电子工程与管理", "微电子制造工程", "假肢矫形工程", "数字媒体艺术", "医学信息工程", "信息物理工程", "医疗器械工程", "智能科学与技术", "数字媒体技术", "医学影像工程", "真空电子技术", "电磁场与无线技术", "电信工程及管理", "其他"]
    }, {
        major: "电子信息科学类",
        submajor: ["电子信息科学与技术", "微电子学", "光信息科学与技术", "科技防卫", "信息安全", "信息科学技术", "光电子技术科学", "其他"]
    }, {
        major: "仪器仪表类",
        submajor: ["测控技术与仪器", "其他"]
    }, {
        major: "工商管理类",
        submajor: ["工商管理", "市场营销", "会计学", "财务管理", "人力资源管理", "旅游管理", "商品学", "审计学", "电子商务", "物流管理", "国际商务", "物业管理", "特许经营管理", "连锁经营管理", "资产评估", "电子商务及法律", "其他"]
    }, {
        major: "管理科学与工程类",
        submajor: ["管理科学", "信息管理与信息系统", "工业工程", "工程管理", "工程造价", "房地产经营管理", "产品质量工程", "项目管理", "管理科学与工程", "其他"]
    }, {
        major: "经济学类",
        submajor: ["经济学", "国际经济与贸易", "财政学", "金融学", "国民经济管理", "贸易经济", "保险", "金融工程", "税务", "信用管理", "网络经济学", "体育经济", "投资学", "环境资源与发展经济学", "海洋经济学", "其他"]
    }, {
        major: "能源动力学",
        submajor: ["热能与动力工程", "核工程与核技术", "其他"]
    }, {
        major: "教育学类",
        submajor: ["教育学", "学前教育", "特殊教育", "教育技术学", "小学教育", "艺术教育", "人文教育", "科学教育", "言语听觉科学", "华文教育", "医学人文学系", "医用理学系", "其他"]
    }, {
        major: "交通运输类",
        submajor: ["交通运输", "交通工程", "油气储运工程", "飞行技术", "航海技术", "轮机工程", "其他"]
    }, {
        major: "航空航天类",
        submajor: ["飞行器设计与工程", "飞行器动力工程", "飞行器制造工程", "飞行器环境与生命保障工程", "其他"]
    }, {
        major: "机械类",
        submajor: ["机械设计制造及其自动化", "材料成型及控制工程", "工业设计", "过程装备与控制工程", "其他"]
    }, {
        major: "统计学类",
        submajor: ["统计学", "其他"]
    }, {
        major: "工程力学类",
        submajor: ["工程力学", "其他"]
    }, {
        major: "材料类",
        submajor: ["冶金工程", "金属材料工程", "无机非金属材料工程", "高分子材料工程", "其他"]
    }, {
        major: "数学类",
        submajor: ["数学与应用数学", "信息与计算科学", "数理基础科学", "其他"]
    }, {
        major: "物理学类",
        submajor: ["物理学", "应用物理学", "声学", "其他"]
    }, {
        major: "化学类",
        submajor: ["化学", "应用化学", "化学生物学", "分子科学与工程", "其他"]
    }, {
        major: "中国语言文学类",
        submajor: ["汉语言文学", "汉语言", "对外汉语", "中国少数民族语言文学", "古典文献", "中国语言文化", "应用语言学", "其他"]
    }, {
        major: "外国语言文学类",
        submajor: ["英语", "俄语", "德语", "法语", "西班牙语", "阿拉伯语", "日语", "波斯语", "朝鲜语", "菲律宾语", "梵语巴利语", "印度尼西亚语", "印地语", "柬埔寨语", "老挝语", "缅甸语", "马来语", "蒙古语", "僧伽罗语", "泰语", "乌尔都语", "希伯来语", "越南语", "豪萨语", "斯瓦希里语", "阿尔巴尼亚语", "保加利亚语", "波兰语", "捷克语", "罗马尼亚语", "葡萄牙语", "瑞典语", "土耳其语", "希腊语", "匈牙利语", "意大利语", "塞尔维亚-克罗地亚语", "其他"]
    }, {
        major: "地质学类",
        submajor: ["地质学", "地球化学", "其他"]
    }, {
        major: "地理科学类",
        submajor: ["地理科学", "资源环境与城乡规划管理", "地理信息系统", "地球信息科学与技术", "其他"]
    }, {
        major: "地球物理学类",
        submajor: ["地球物理学", "地球与空间科学", "空间科学与技术", "其他"]
    }, {
        major: "大气科学类",
        submajor: ["大气科学", "应用气象学", "其他"]
    }, {
        major: "海洋科学类",
        submajor: ["海洋科学", "海洋技术", "海洋管理", "军事海洋学", "海洋生物资源与环境", "其他"]
    }, {
        major: "力学类",
        submajor: ["理论与应用力学", "其他"]
    }, {
        major: "新闻传播学类",
        submajor: ["新闻学", "广播电视新闻学", "广告学", "编辑出版学", "传播学", "媒体创意", "其他"]
    }, {
        major: "材料科学类",
        submajor: ["材料物理", "材料化学", "其他"]
    }, {
        major: "环境科学类",
        submajor: ["环境科学", "生态学", "资源环境科学", "其他"]
    }, {
        major: "心理学类",
        submajor: ["应用心理学", "心理学", "其他"]
    }, {
        major: "法学类",
        submajor: ["法学", "知识产权", "监狱学", "其他"]
    }, {
        major: "地矿类",
        submajor: ["采矿工程", "石油工程", "矿物加工工程", "勘查技术与工程", "资源勘查工程", "其他"]
    }, {
        major: "天文学类",
        submajor: ["天文学", "其他"]
    }, {
        major: "艺术类",
        submajor: ["音乐学", "作曲与作曲技术理论", "音乐表演", "绘画", "雕塑", "美术学", "艺术设计学", "艺术设计", "舞蹈学", "舞蹈编导", "戏剧学", "表演", "导演", "戏剧影视文学", "戏剧影视美术设计", "摄影", "录音艺术", "动画", "播音与主持艺术", "广播电视编导", "艺术学", "影视学", "广播影视编导", "书法学", "照明技术", "会展艺术与技术", "音乐科技与艺术", "其他"]
    }, {
        major: "历史学类",
        submajor: ["历史学", "世界历史", "考古学", "博物馆学", "民族学", "文物保护技术", "其他"]
    }, {
        major: "哲学类",
        submajor: ["哲学", "逻辑学", "宗教学", "伦理学", "其他"]
    }, {
        major: "土建类",
        submajor: ["建筑学", "城市规划", "土木工程", "建筑环境与设备工程", "给水排水工程", "其他"]
    }, {
        major: "水利类",
        submajor: ["水利水电工程", "水文与水资源工程", "港口航道与海岸工程", "其他"]
    }, {
        major: "测绘类",
        submajor: ["测绘工程", "其他"]
    }, {
        major: "基础医学类",
        submajor: ["组织胚胎学", "病理学系", "生理学", "病理生理学", "药理学系", "生物化学", "细胞与遗传医学系", "免疫学系", "病原生物学系", "神经生物学系", "法医学系", "生物医学外语", "生物物理学系", "医学信息学系", "解剖学", "其他"]
    }, {
        major: "临床医学",
        submajor: ["耳鼻喉", "临床诊断", "精神卫生", "皮肤病与性病", "康复与运动医学", "影像医学", "麻醉学", "全科医学", "肿瘤学", "中西医结合", "眼科", "内科", "外科", "儿科", "妇产", "口腔医学", "其他"]
    }, {
        major: "中医学类",
        submajor: ["中医学", "针灸推拿学", "蒙医学", "藏医学", "中西医临床医学", "维医学", "其他"]
    }, {
        major: "法医学类",
        submajor: ["法医学", "其他"]
    }, {
        major: "护理学类",
        submajor: ["内外科护理学", "妇科护理学", "人文护理学", "护理学", "其他"]
    }, {
        major: "武器类",
        submajor: ["武器系统与发射工程", "探测制导与控制技术", "弹药工程与爆炸技术", "特种能源工程与烟火技术", "地面武器机动工程", "信息对抗技术", "其他"]
    }, {
        major: "生物科学类",
        submajor: ["生物科学", "生物技术", "生物信息学", "生物信息技术", "生物科学与生物技术", "动植物检疫", "生物化学与分子生物学", "医学信息学", "植物生物技术", "动物生物技术", "动物资源科学", "生物安全", "其他"]
    }, {
        major: "化工与制药类",
        submajor: ["化学工程与工艺", "制药工程", "其他"]
    }, {
        major: "生物工程类",
        submajor: ["生物工程", "其他"]
    }, {
        major: "农业工程类",
        submajor: ["农业机械化及其自动化", "农业电气化与自动化", "农业建筑环境与能源工程", "农业水利工程", "森林工程", "其他"]
    }, {
        major: "林业工程类",
        submajor: ["木材科学与工程", "林产化工", "其他"]
    }, {
        major: "公安技术类",
        submajor: ["刑事科学技术", "消防工程", "其他"]
    }, {
        major: "植物生产类",
        submajor: ["农学", "园艺", "植物保护", "茶学", "其他"]
    }, {
        major: "草业科学类",
        submajor: ["草业科学", "其他"]
    }, {
        major: "森林资源类",
        submajor: ["林学", "森林资源保护与游憩", "野生动物与自然保护区管理", "其他"]
    }, {
        major: "环境生态类",
        submajor: ["园林", "水土保护与荒漠化防治", "农业资源与环境", "其他"]
    }, {
        major: "动物生产类",
        submajor: ["动物科学", "蚕学", "其他"]
    }, {
        major: "动物医学类",
        submajor: ["动物医学", "其他"]
    }, {
        major: "水产类",
        submajor: ["水产养殖学", "海洋渔业科学与技术", "其他"]
    }, {
        major: "环境与安全类",
        submajor: ["环境工程", "安全工程", "其他"]
    }, {
        major: "药学类",
        submajor: ["生物合成药物化学", "天然药物化学和生药学", "药事管理与临床药学", "药剂学", "物理化学", "放射药学", "药物分析", "医院药学", "分子与细胞药理学", "基础药理学", "临床药理学", "天然药理学", "毒理学系", "合成药物化学", "中药学", "制药工程", "其他"]
    }, {
        major: "海洋工程类",
        submajor: ["船舶与海洋工程", "其他"]
    }, {
        major: "轻工纺织食品类",
        submajor: ["食品科学与工程", "轻化工程", "包装工程", "印刷工程", "纺织工程", "服装设计与工程", "其他"]
    }, {
        major: "农业经济管理类",
        submajor: ["农林经济管理", "农村区域发展", "其他"]
    }, {
        major: "公共管理类",
        submajor: ["行政管理", "公共事业管理", "土地资源管理", "劳动与社会保障", "公共关系学", "公共政策学", "城市管理", "公共管理", "文化产业管理", "会展经济与管理", "国防教育与管理", "航运管理", "劳动管理", "公共安全管理", "其他"]
    }, {
        major: "公安学类",
        submajor: ["治安学", "侦查学", "边防管理", "火灾勘察", "禁毒学", "警犬技术", "经济犯罪侦查", "边防指挥", "消防指挥", "警卫学", "公安情报学", "犯罪学", "公安管理学", "其他"]
    }, {
        major: "图书档案学类",
        submajor: ["图书馆学", "档案学", "信息资源管理", "其他"]
    }, {
        major: "生命科学",
        submajor: ["生态与进化生物学系", "微生物学与微生物工程系", "生理学与生物物理学", "遗传学和遗传工程系", "生物化学系", "生物科学与技术系", "生物工程系", "生物医学工程系", "生物信息学与生物统计学", "其他"]
    }, {
        major: "公共卫生学",
        submajor: ["流行病学", "劳动卫生与职业病学", "环境卫生学", "营养与食品卫生学", "少儿卫生学", "卫生统计与社会医学", "预防医学", "卫生微生物学", "医院管理学", "卫生化学", "卫生法与卫生监督学", "健康教育学", "卫生政策与管理学系", "卫生事业管理学", "社会医学", "卫生经济学", "病理学与营养学系", "环境医学系", "其他"]
    }, {
        major: "政治学类",
        submajor: ["政治学与行政学", "国际政治", "外交学", "思想政治教育", "国际文化交流", "国际政治经济学", "国际事务", "国际事务与国际关系", "国际事务与欧洲关系", "其他"]
    }, {
        major: "马克思主义理论类",
        submajor: ["中国革命史与中国共产党党史", "科学社会主义与国际共产主义运动", "其他"]
    }, {
        major: "社会学类",
        submajor: ["社会学", "社会工作", "家政学", "人类学", "其他"]
    }, {
        major: "体育学类",
        submajor: ["体育教育", "运动训练", "社会体育", "运动人体科学", "民族传统体育", "运用康复与健康", "其他"]
    }];

    // (function() {
    //     for (var i = 0; i < majorArray.length; i++) {
    //         majorArray[i].submajor.push("不限");
    //     };
    //     var exMajor = {
    //         major: "不限",
    //         submajor: ["不限"]
    //     };
    //     majorArray.push(exMajor);
    // })()
    window.majorArray = majorArray;
}
// function maxmajorcalculate() {
//     var maxmajor = "";
//     var maxsubmajor = "";
//     for (var i = 0; i < majorArray.length; i++) {
//         if (majorArray[i].major.length > maxmajor.length) {
//             maxmajor = majorArray[i].major;
//         }
//         for (var j = 0; j < majorArray[i].submajor.length; j++) {
//             if (majorArray[i].submajor[j].length > maxsubmajor.length) {
//                 maxsubmajor = majorArray[i].submajor[j];
//             }
//         }
//     };
// }
// maxmajorcalculate();
)();

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var workareas = [{
    title: "IT|通信|电子|互联网",
    subareas: ["互联网/电子商务", "计算机软件", "IT服务(系统/数据/维护)", "电子技术/半导体/集成电路", "计算机硬件", "通信/电信/网络设备", "通信/电信运营、增值服务", "网络游戏"]
}, {
    title: "金融业",
    subareas: ["基金/证券/期货/投资", "保险", "银行", "信托/担保/拍卖/典当"]
}, {
    title: "房地产|建筑业",
    subareas: ["房地产/建筑/建材/工程", "家居/室内设计/装饰装潢", "物业管理/商业中心"]
}, {
    title: "商业服务",
    subareas: ["专业服务/咨询(财会/法律/人力资源等)", "广告/会展/公关", "中介服务", "检验/检测/认证", "外包服务"]
}, {
    title: "贸易|批发|零售|租赁业",
    subareas: ["快速消费品（食品/饮料/烟酒/日化）", "耐用消费品（服饰/纺织/皮革/家具/家电）", "贸易/进出口", "零售/批发", "租赁服务"]
}, {
    title: "文体教育|工艺美术",
    subareas: ["教育/培训/院校", "礼品/玩具/工艺美术/收藏品/奢侈品", "汽车/摩托车", "大型设备/机电设备/重工业", "加工制造（原料加工/模具）", "仪器仪表及工业自动化"]
}, {
    title: "生产|加工|制造",
    subareas: ["印刷/包装/造纸", "办公用品及设备", "医药/生物工程", "医疗设备/器械", "航空/航天研究与制造"]
}, {
    title: "交通|运输|物流|仓储",
    subareas: ["交通/运输", "物流/仓储"]
}, {
    title: "服务业",
    subareas: ["医疗/护理/美容/保健/卫生服务", "酒店/餐饮", "旅游/度假"]
}, {
    title: "文化|传媒|娱乐|体育",
    subareas: ["媒体/出版/影视/文化传播", "娱乐/体育/休闲"]
}, {
    title: "能源|矿产|环保",
    subareas: ["能源/矿产/采掘/冶炼", "石油/石化/化工", "电气/电力/水利", "环保"]
}, {
    title: "政府|非盈利机构",
    subareas: ["政府/公共事业/非盈利机构", "学术/科研"]
}, {
    title: "农|林|牧|渔|其他",
    subareas: ["农/林/牧/渔", "跨领域经营", "其他"]
}];

(function () {
    for (var i = 0; i < workareas.length; i++) {
        workareas[i].subareas.push("不限");
    }
    var exArea = {
        title: "不限",
        subareas: ["不限"]
    };
    workareas.push(exArea);
})();
window.workareas = workareas;

// function maxareacalculate() {
//     var maxarea = "";
//     var maxsubarea = "";
//     for (var i = 0; i < workareas.length; i++) {
//         if (workareas[i].title.length > maxarea.length) {
//             maxarea = workareas[i].title;
//         }
//         for (var j = 0; j < workareas[i].subareas.length; j++) {
//             if (workareas[i].subareas[j].length > maxsubarea.length) {
//                 maxsubarea = workareas[i].subareas[j];
//             }
//         }
//     }
//     console.log(maxarea, maxarea.length);
//     console.log(maxsubarea, maxsubarea.length);
// }
// maxareacalculate();

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var posArray = [{
    name: "销售|客服|市场",
    subpos: [{
        name: "销售业务",
        subpos: ["销售代表", "客户代表", "销售工程师", "渠道/分销专员", "区域销售专员/助理", "业务拓展专员/助理", "大客户销售代表", "电话销售", "网络/在线销售", "团购业务员", "销售业务跟单", "医药代表", "经销商", "招商经理", "招商主管", "招商专员", "会籍顾问", "其他"]
    }, {
        name: "销售管理",
        subpos: ["销售总监", "销售经理", "销售主管", "客户总监", "客户经理", "客户主管", "渠道/分销总监", "渠道/分销经理/主管", "区域销售总监", "区域销售经理/主管", "业务拓展经理/主管", "大客户销售经理", "团购经理/主管", "医药销售经理/主管", "其他"]
    }, {
        name: "销售行政/商务",
        subpos: ["销售行政经理/主管", "销售行政专员/助理", "销售运营经理/主管", "销售运营专员/助理", "商务经理/主管", "商务专员/助理", "销售培训师/讲师", "销售数据分析", "业务分析经理/主管", "业务分析专员/助理", "其他"]
    }, {
        name: "客服/售前/售后技术",
        subpos: ["客户服务总监", "客户服务经理", "客户服务主管", "客户服务专员/助理", "客户关系/投诉协调人员", "客户咨询热线/呼叫中心人员", "网络/在线客服", "售前/售后技术支持管理", "售前/售后技术支持工程师", "VIP专员", "呼叫中心客服", "其他"]
    }, {
        name: "市场",
        subpos: ["市场总监", "市场经理", "市场主管", "市场专员/助理", "市场营销经理", "市场营销主管", "市场销售专员/助理", "业务拓展经理/主管", "业务拓展专员/助理", "产品经理", "产品主管", "产品专员/助理", "品牌经理", "品牌主管", "品牌专员/助理", "市场策划/企划经理/主管", "市场策划/企划专员/助理", "市场文案策划", "活动策划", "活动执行", "促销主管/督导", "促销员", "网站推广", "SEO/SEM", "学术推广", "选址拓展/新店开发", "市场调研与分析", "品牌策划", "市场通路专员", "促销经理", "其他"]
    }, {
        name: "公关/媒介",
        subpos: ["公关总监", "公关经理/主管", "公关专员/助理", "媒介经理/主管", "媒介专员/助理", "媒介策划/主管", "政府事务管理", "媒介销售", "活动执行", "其他"]
    }, {
        name: "广告/会展",
        subpos: ["广告创意/总监", "广告创意/设计经理/主管", "广告创意/设计师", "广告文案策划", "广告美术指导", "广告制作执行", "广告客户总监", "广告客户经理", "广告客户主管", "广告客户代表", "广告/会展业务拓展", "会展策划/设计", "会务经理/主管", "会务专员/助理", "广告/会展项目管理", "企业/业务发展经理", "其他"]
    }]
}, {
    name: "财务|人力资源|行政",
    subpos: [{
        name: "财务/审计/税务",
        subpos: ["首席财务官CFO", "财务总监", "财务经理", "财务主管/总帐主管", "财务顾问", "财务助理", "财务分析经理/主管", "财务分析员", "会计经理/主管", "会计/会计师", "会计助理/文员", "出纳员", "审计经理/主管", "审计专员/助理", "税务经理/主管", "税务专员/助理", "成本经理/主管", "成本会计", "资产/资金管理", "资金专员", "统计员", "固定资产会计", "成本管理员", "其他"]
    }, {
        name: "人力资源",
        subpos: ["人力资源总监", "人力资源经理", "人力资源主管", "人力资源专员/助理", "培训经理/主管", "培训专员/助理", "招聘经理/主管", "招聘专员/助理", "薪酬福利经理/主管", "薪酬福利专员/助理", "绩效考核经理/主管", "绩效考核专员/助理", "员工关系/企业文化/工会", "企业培训师/讲师", "人事信息系统(HRIS)管理", "猎头顾问/助理", "其他"]
    }, {
        name: "行政/后勤/文秘",
        subpos: ["行政总监", "行政经理/主管/办公室主任", "行政专员/助理", "助理/秘书/文员", "前台/总机/接待", "文档/资料管理", "电脑操作/打字/录入员", "后勤人员", "后勤人员", "图书管理员", "内勤人员", "其他"]
    }]
}, {
    name: "项目|质量|高级管理",
    subpos: [{
        name: "项目管理/项目协调",
        subpos: ["项目总监", "项目经理/项目主管", "项目专员/助理", "广告/会展项目管理", "IT项目总监", "IT项目经理/主管", "IT项目执行/协调人员", "通信项目管理", "房地产项目配套工程师", "房地产项目管理", "证券/投资项目管理", "保险项目经理/主管", "生产项目经理/主管", "生产项目工程师", "汽车工程项目管理", "电子/电器项目管理", "服装/纺织/皮革项目管理", "医药项目管理", "化工项目管理", "物流/仓储项目管理", "咨询项目管理", "能源/矿产项目管理", "项目计划合约专员", "项目招投标", "其他"]
    }, {
        name: "质量管理/安全防护",
        subpos: ["质量管理/测试经理", "质量管理/测试主管", "质量管理/测试工程师", "质量检验员/测试员", "化验/检验", "认证/体系工程师/审核员", "环境/健康/安全经理/主管", "环境/健康/安全工程师", "供应商/采购质量管理", "安全管理", "安全消防", "可靠度工程师", "故障分析工程师", "采购材料/设备管理", "其他"]
    }, {
        name: "高级管理",
        subpos: ["首席执行官CEO/总裁/总经理", "首席运营官COO", "首席财务官CFO", "CTO/CIO", "副总裁/副总经理", "分公司/代表处负责人", "部门/事业部管理", "总裁助理/总经理助理", "总编/副总编", "行长/副行长", "工厂厂长/副厂长", "校长/副校长", "合伙人", "办事处首席代表", "投资者关系", "企业秘书/董事会秘书", "策略发展总监", "运营总监", "其他"]
    }]
}, {
    name: "IT|互联网|通信",
    subpos: [{
        name: "软件/互联网开发/系统开发",
        subpos: ["高级软件工程师", "软件工程师", "软件研发工程师", "需求工程师", "系统架构设计师", "系统分析员", "数据库开发工程师", "ERP技术/开发应用", "互联网软件工程师", "手机软件开发工程师", "嵌入式软件开发", "移动互联网开发", "WEB前端开发", "语音/视频/图形开发", "用户界面（UI）设计", "用户体验（UE/UX）设计", "网页设计/制作/美工", "游戏设计/开发", "游戏策划", "游戏界面设计", "系统集成工程师", "算法工程师", "仿真应用工程师", "计算机辅助设计师", "网站架构设计师", "IOS开发工程师", "Android开发工程师", "Java开发工程师", "PHP开发工程师", "C语言开发工程师", "脚本开发工程师", "其他"]
    }, {
        name: "硬件开发",
        subpos: ["高级硬件工程师", "硬件工程师", "嵌入式硬件开发", "其他"]
    }, {
        name: "互联网产品/运营管理",
        subpos: ["互联网产品经理/主管", "互联网产品专员/助理", "电子商务经理/主管", "电子商务专员/助理", "网络运营管理", "网络运营专员/助理", "网站编辑", "SEO/SEM", "产品总监", "运营总监", "网站运营总监/经理", "电子商务总监", "新媒体运营", "网店店长", "网店推广", "网店客服", "网店运营", "网店管理员", "运营主管/专员", "微信推广", "淘宝/微信运营专员/主管", "产品运营", "数据运营", "市场运营", "内容运营", "其他"]
    }, {
        name: "IT质量管理/测试/配置管理",
        subpos: ["IT质量管理经理/主管", "IT质量管理工程师", "系统测试", "软件测试", "硬件测试", "配置管理工程师", "信息技术标准化工程师", "标准化工程师", "游戏测试", "手机维修", "其他"]
    }, {
        name: "IT运维/技术支持",
        subpos: ["信息技术经理/主管", "信息技术专员", "IT技术支持/维护经理", "IT技术支持/维护工程师", "系统工程师", "系统管理员", "网络工程师", "网络管理员", "网络与信息安全工程师", "数据库管理员", "计算机硬件维护工程师", "ERP实施顾问", "IT技术文员/助理", "IT文档工程师", "Helpdesk", "其他"]
    }, {
        name: "IT管理/项目协调",
        subpos: ["CTO/CIO", "IT技术/研发总监", "IT技术/研发经理/主管", "IT项目总监", "IT项目经理/主管", "IT项目执行/协调人员", "其他"]
    }, {
        name: "电信/通信技术开发及应用",
        subpos: ["通信技术工程师", "通信研发工程师", "数据通信工程师", "移动通信工程师", "电信网络工程师", "电信交换工程师", "有线传输工程师", "无线/射频通信工程师", "通信电源工程师", "通信标准化工程师", "通信项目管理", "增值产品开发工程师", "其他"]
    }]
}, {
    name: "房产|建筑|物业管理",
    subpos: [{
        name: "房地产开发/经纪/中介",
        subpos: ["房地产项目策划经理/主管", "房地产项目策划专员/助理", "房地产项目招投标", "房地产项目开发报建", "房地产项目配套工程师", "房地产销售经理", "房地产销售主管", "房地产销售/置业顾问", "房地产评估", "房地产中介/交易", "房地产项目管理", "房地产资产管理", "监察人员", "地产店长/经理", "房地产内勤", "房地产客服", "其他"]
    }, {
        name: "土木/建筑/装修/市政工程",
        subpos: ["高级建筑工程师/总工", "建筑工程师", "建筑设计师", "土木/土建/结构工程师", "岩土工程", "建筑制图", "建筑工程测绘/测量", "道路/桥梁/隧道工程技术", "水利/港口工程技术", "架线和管道工程技术", "给排水/暖通/空调工程", "智能大厦/布线/弱电/安防", "室内装潢设计", "幕墙工程师", "园林/景观设计", "城市规划与设计", "市政工程师", "工程监理/质量管理", "工程造价/预结算", "工程资料管理", "建筑施工现场管理", "施工队长", "施工员", "建筑工程安全管理", "软装设计师", "工程总监", "土建勘察", "硬装设计师", "橱柜设计师", "其他"]
    }, {
        name: "物业管理",
        subpos: ["物业经理/主管", "物业管理专员/助理", "物业租赁/销售", "物业维修", "物业顾问", "物业招商管理", "监控维护", "其他"]
    }]
}, {
    name: "金融",
    subpos: [{
        name: "银行",
        subpos: ["行长/副行长", "银行经理/主任", "银行大堂经理", "银行客户总监", "银行客户经理", "银行客户主管", "银行客户代表", "银行客户服务", "综合业务经理/主管", "综合业务专员/助理", "银行会计/柜员", "公司业务", "个人业务", "银行卡/电子银行业务推广", "信贷管理/资信评估/分析", "信审核查", "外汇交易", "进出口/信用证结算", "清算人员", "风险控制", "个人业务部门经理/主管", "公司业务部门经理/主管", "高级客户经理/客户经理", "信用卡销售", "银行柜员", "其他"]
    }, {
        name: "证券/期货/投资管理",
        subpos: ["证券总监/部门经理", "证券/期货/外汇经纪人", "证券/投资客户总监", "证券/投资客户经理", "证券/投资客户主管", "证券/投资客户代表", "证券分析/金融研究", "投资/理财服务", "投资银行业务", "融资总监", "融资经理/主管", "融资专员/助理", "股票/期货操盘手", "资产评估", "风险管理/控制/稽查", "储备经理人", "证券/投资项目管理", "金融/经济研究员", "金融产品经理", "金融产品销售", "基金项目经理", "金融服务经理", "投资经理", "投资银行财务分析", "金融租赁", "其他"]
    }, {
        name: "保险",
        subpos: ["保险业务管理", "保险代理/经纪人/客户经理", "保险顾问/财务规划师", "保险产品开发/项目策划", "保险培训师", "保险契约管理", "核保理赔", "汽车定损/车险理赔", "保险精算师", "客户服务/续期管理", "保险内勤", "保险项目经理/主管", "储备经理人", "理财顾问/财务规划师", "保险电销", "保险核安", "其他"]
    }, {
        name: "信托/担保/拍卖/典当",
        subpos: ["信托服务", "担保业务", "拍卖师", "典当业务", "珠宝/收藏品鉴定", "其他"]
    }]
}, {
    name: "采购|贸易|交通|物流",
    subpos: [{
        name: "采购/贸易",
        subpos: ["采购总监", "采购经理/主管", "采购专员/助理", "供应商开发", "供应链管理", "买手", "外贸/贸易经理/主管", "外贸/贸易专员/助理", "贸易跟单", "报关员", "业务跟单经理", "高级业务跟单", "助理业务跟单", "国际贸易主管/专员", "其他"]
    }, {
        name: "交通运输服务",
        subpos: ["机动车司机/驾驶", "列车驾驶/操作", "船舶驾驶/操作", "飞机驾驶/操作", "公交/地铁乘务", "列车乘务", "船舶乘务", "船员/水手", "航空乘务", "地勤人员", "安检员", "驾驶教练", "交通管理员", "船长", "代驾", "其他"]
    }, {
        name: "物流/仓储",
        subpos: ["物流总监", "物流经理/主管", "物流专员/助理", "货运代理", "运输经理/主管", "快递员/速递员", "水运/空运/陆运操作", "集装箱业务", "报关员", "单证员", "仓库经理/主管", "仓库/物料管理员", "理货/分拣/打包", "物流/仓储调度", "物流/仓储项目管理", "搬运工", "集装箱维护", "集装箱操作", "物流销售", "供应链总监", "供应链经理/主管", "物料经理", "物料主管/专员", "项目经理/主管", "海关事务管理", "船务/空运陆运操作", "订单处理员", "水运/陆运/空运销售", "其他"]
    }]
}, {
    name: "生产|制造",
    subpos: [{
        name: "生产管理/运营",
        subpos: ["工厂厂长/副厂长", "生产总监", "生产经理/车间主任", "生产主管/督导/组长", "生产运营管理", "生产项目经理/主管", "生产项目工程师", "产品管理", "生产计划", "制造工程师", "工艺/制程工程师", "工业工程师", "生产设备管理", "生产物料管理（PMC）", "包装工程师", "技术文档工程师", "总工程师/副总工程师", "生产文员", "营运主管", "营运经理", "设备主管", "化验师", "生产跟单", "其他"]
    }, {
        name: "电子/电器/半导体/仪器仪表",
        subpos: ["电子技术研发工程师", "电子/电器工程师", "电器研发工程师", "电子/电器工艺/制程工程师", "电路工程师/技术员", "模拟电路设计/应用工程师", "版图设计工程师", "集成电路IC设计/应用工程师", "IC验证工程师", "电子元器件工程师", "射频工程师", "无线电工程师", "激光/光电子技术", "光源/照明工程师", "变压器与磁电工程师", "电池/电源开发", "家用电器/数码产品研发", "空调工程/设计", "音频/视频工程师/技术员", "安防系统工程师", "电子/电器设备工程师", "电子/电器维修/保养", "电子/电器项目管理", "电气工程师", "电气设计", "电气线路设计", "线路结构设计", "半导体技术", "仪器/仪表/计量工程师", "自动化工程师", "现场应用工程师（FAE）", "测试/可靠性工程师", "电子工程师/技术员", "电声/音响工程师/技术员", "其他"]
    }, {
        name: "汽车制造",
        subpos: ["汽车动力系统工程师", "汽车底盘/总装工程师", "车身设计工程师", "汽车电子工程师", "汽车机械工程师", "汽车零部件设计师", "汽车装配工艺工程师", "安全性能工程师", "汽车工程项目管理", "汽车机构工程师", "汽车电工", "售后服务/客户服务", "加油站工作员", "发动机/总装工程师", "其他"]
    }, {
        name: "汽车销售与服务",
        subpos: ["汽车销售", "汽车零配件销售", "汽车售后服务/客户服务", "汽车维修/保养", "汽车质量管理/检验检测", "汽车定损/车险理赔", "汽车装饰美容", "二手车评估师", "4S店管理", "其他"]
    }, {
        name: "机械设计/制造/维修",
        subpos: ["工程机械经理", "工程机械主管", "机械设备经理", "机械设备工程师", "机械工程师", "机械设计师", "机械制图员", "机械研发工程师", "机械结构工程师", "机械工艺/制程工程师", "气动工程师", "CNC/数控工程师", "模具工程师", "夹具工程师", "注塑工程师", "铸造/锻造工程师/技师", "机电工程师", "材料工程师", "机械维修/保养", "飞机设计与制造", "飞机维修/保养", "列车设计与制造", "列车维修/保养", "船舶设计与制造", "船舶维修/保养", "技术研发工程师", "技术研发经理/主管", "产品策划工程师", "项目管理", "实验室负责人/工程师", "工业工程师", "维修经理/主管", "装配工程师/客户经理", "焊接工程师/技师", "冲压工程师/技师", "锅炉工程师/技师", "光伏系统工程师", "汽车/摩托车工程师", "轨道交通工程师/技术员", "数控操作", "数控编程", "无损检测工程师", "浮法操作工(玻璃技术)", "地铁轨道设计", "机修工", "工装工程师", "其他"]
    }, {
        name: "服装/纺织/皮革设计",
        subpos: ["服装/纺织品设计", "服装打样/制版", "服装/纺织/皮革工艺师", "电脑放码员", "裁床", "样衣工", "面料辅料开发/采购", "服装/纺织/皮革跟单", "服装/纺织品/皮革销售", "服装/纺织品/皮革质量管理", "服装/纺织/皮革项目管理", "服装/纺织设计总监", "纸样师/车板师", "剪裁工", "缝纫工", "纺织工/针织工", "配色工", "印染工", "漂染工", "挡车工", "浆纱工", "整经工", "鞋子设计", "细纱工", "其他"]
    }, {
        name: "技工/操作工",
        subpos: ["车床/磨床/铣床/冲床工", "模具工", "钳工/机修工/钣金工", "电焊工/铆焊工", "电工", "水工/木工/油漆工", "铲车/叉车工", "空调工/电梯工/锅炉工", "汽车维修/保养", "普工/操作工", "技工", "组装工", "包装工", "电力线路工", "拖压工", "仪表工", "电镀工", "喷塑工", "电梯工", "吊车司机/卡车司机", "洗车工", "洗碗工", "瓦工", "万能工", "钢筋工", "学徒工", "其他"]
    }, {
        name: "生物/制药/医疗器械",
        subpos: ["医药代表", "医药销售经理/主管", "药品市场推广经理/主管", "药品市场推广专员/助理", "医疗器械销售", "医疗器械推广", "医药学术推广", "医药招商", "医药项目管理", "医药项目招投标管理", "生物工程/生物制药", "药品研发", "医疗器械研发", "临床研究员", "临床协调员", "临床数据分析员", "医药化学分析", "医药技术研发管理人员", "药品注册", "医疗器械注册", "药品生产/质量管理", "医疗器械生产/质量管理", "医疗器械维修/保养", "临床推广经理", "医药技术研发人员", "其他"]
    }, {
        name: "化工",
        subpos: ["化工工程师", "化工研发工程师", "化学分析", "化学技术应用", "化学操作", "化学制剂研发", "油漆/化工涂料研发", "塑料工程师", "化学实验室技术员/研究员", "化工项目管理", "橡胶工程师", "配色技术员", "化妆品研发", "造纸研发", "化学/化工技术总监", "其他"]
    }]
}, {
    name: "传媒|印刷|艺术|设计",
    subpos: [{
        name: "影视/媒体/出版/印刷",
        subpos: ["经纪人/星探", "放映管理", "作家/编剧/撰稿人", "文字编辑/组稿", "美术编辑/美术设计", "记者/采编", "电话采编", "文案策划", "校对/录入", "发行管理", "排版设计", "印刷排版/制版", "印刷操作", "编辑出版", "主笔设计师", "放映员", "灯光师", "艺术/设计总监", "影视策划/制作人员", "调色员", "烫金工", "晒版员", "装订工", "数码直印/菲林输出", "调墨技师", "电分操作员", "打稿机操作员", "切纸机操作工", "裱胶工", "复卷工", "压痕工", "印刷机械机长", "转播工程师", "视频主播", "其他"]
    }, {
        name: "艺术/设计",
        subpos: ["设计管理人员", "艺术/设计总监", "绘画", "原画师", "CAD设计/制图", "平面设计", "三维/3D设计/制作", "Flash设计/开发", "特效设计", "视觉设计", "用户体验（UE/UX）设计", "美术编辑/美术设计", "多媒体/动画设计", "包装设计", "家具设计", "家居用品设计", "工艺品/珠宝设计", "玩具设计", "店面/展览/展示/陈列设计", "工业设计", "游戏界面设计", "园林景观设计师", "平面设计总监", "平面设计经理/主管", "其他"]
    }]
}, {
    name: "咨询|法律|教育|翻译",
    subpos: [{
        name: "咨询/顾问/调研/数据分析",
        subpos: ["咨询总监", "咨询经理/主管", "咨询顾问/咨询员", "专业顾问", "调研员", "数据分析师", "情报信息分析", "猎头顾问/助理", "咨询项目管理", "咨询师", "其他"]
    }, {
        name: "教育/培训",
        subpos: ["幼教", "小学教师", "初中教师", "高中教师", "大学教师", "职业技术教师", "家教", "兼职教师", "理科教师", "文科教师", "外语教师", "音乐教师", "美术教师", "体育老师/教练", "校长/副校长", "教学/教务管理人员", "培训督导", "培训师/讲师", "培训助理/助教", "教育产品开发", "培训策划", "培训/招生/课程顾问", "大学教授", "舞蹈老师", "外籍教师", "特教(特殊教育)", "其他"]
    }, {
        name: "律师/法务/合规",
        subpos: ["法务经理/主管", "法务专员/助理", "律师", "律师助理", "企业律师/合规经理/主管", "企业律师/合规顾问", "知识产权/专利顾问/代理人", "合同管理", "合规经理", "其他"]
    }, {
        name: "翻译（口译与笔译）",
        subpos: ["英语翻译", "法语翻译", "日语翻译", "德语翻译", "俄语翻译", "西班牙语翻译", "意大利语翻译", "葡萄牙语翻译", "阿拉伯语翻译", "韩语/朝鲜语翻译", "其他语种翻译"]
    }]
}, {
    name: "服务业",
    subpos: [{
        name: "商超/酒店/娱乐管理/服务",
        subpos: ["店长/卖场管理", "楼面管理", "品牌/连锁招商管理", "大堂经理/领班", "酒店管理", "客房管理", "收银主管", "收银员", "店员/营业员/导购员", "理货员", "促销主管/督导", "促销员", "品类管理", "前厅接待/礼仪/迎宾", "预订员", "行李员", "服务员", "防损员/内保", "奢侈品销售", "主持人/司仪", "客房服务员", "生鲜食品加工/处理", "酒店试睡员", "门卫", "质量管理", "其他"]
    }, {
        name: "旅游/度假/出入境服务",
        subpos: ["旅游产品销售", "旅游顾问", "导游/票务", "旅游计划调度", "旅游产品/线路策划", "签证业务办理", "潜水员", "海外游计调", "水族馆表演演员", "其他"]
    }, {
        name: "烹饪/料理/食品研发",
        subpos: ["厨师/面点师", "食品加工/处理", "调酒师/茶艺师/咖啡师", "营养师", "厨工", "食品/饮料研发", "食品/饮料检验", "餐厅领班", "餐厅服务员", "行政主厨", "中餐厨师", "西餐厨师", "日式厨师", "西点师", "厨师助理/学徒", "送餐员", "传菜员", "烧烤师", "品酒师", "杂工", "其他"]
    }, {
        name: "保健/美容/美发/健身",
        subpos: ["美发/发型师", "化妆师", "美容师/美甲师", "美容顾问(BA)", "健身/美体/舞蹈教练", "按摩/足疗", "救生员", "美发培训师", "游泳教练", "高尔夫教练", "瑜伽教练", "户外/游戏教练", "美体师", "美容整形师", "其他"]
    }, {
        name: "医院/医疗/护理",
        subpos: ["医疗管理人员", "综合门诊/全科医生", "内科医生", "外科医生", "儿科医生", "牙科医生", "美容整形科医生", "中医科医生", "麻醉医生", "心理医生", "眼科医生/验光师", "医学影像/放射科医师", "化验/检验科医师", "药房管理/药剂师", "理疗师", "兽医", "护士/护理人员", "营养师", "针灸/推拿", "验光师", "公共卫生/疾病监控", "护理主任/护士长", "院长", "专科医生", "其他"]
    }, {
        name: "社区/居民/家政服务",
        subpos: ["保安经理", "保安", "家政人员", "婚礼/庆典策划服务", "宠物护理和美容", "保姆/母婴护理", "搬运工", "保洁", "钟点工", "月嫂", "家电维修", "其他"]
    }]
}, {
    name: "能源|环保|农业|科研",
    subpos: [{
        name: "能源/矿产/地质勘查",
        subpos: ["石油/天然气技术人员", "空调/热能工程师", "核力/火力工程师", "水利/水电工程师", "电力工程师/技术员", "地质勘查/选矿/采矿", "能源/矿产项目管理", "电力系统研发工程师", "电力电子研发工程师", "控制保护研发工程师", "其他"]
    }, {
        name: "环境科学/环保",
        subpos: ["环保技术工程师", "环境评价工程师", "环境监测工程师", "水处理工程师", "固废处理工程师", "废气处理工程师", "生态治理/规划", "环境管理/园林景区保护", "其他"]
    }, {
        name: "农/林/牧/渔业",
        subpos: ["插花设计师", "农艺师", "林业技术人员", "园艺师", "畜牧师", "动物育种/养殖", "动物营养/饲料研发", "饲料销售", "其他"]
    }, {
        name: "公务员/事业单位/科研机构",
        subpos: ["公务员/事业单位人员", "科研管理人员", "科研人员", "其他"]
    }]
}, {
    name: "兼职|实习|社工|其他",
    subpos: [{
        name: "实习生/培训生/储备",
        subpos: ["实习生", "培训生", "储备干部", "其他"]
    }, {
        name: "志愿者/社会工作者",
        subpos: ["志愿者/义工", "社会工作者/社工", "其他"]
    }, {
        name: "兼职/临时",
        subpos: ["兼职", "临时", "国外求职", "其他"]
    }, {
        name: "其他",
        subpos: ["其他"]
    }]
}];

(function () {
    for (var i = 0; i < posArray.length; i++) {
        for (var j = 0; j < posArray[i].subpos.length; j++) {
            posArray[i].subpos[j].subpos.push("不限");
        }
        var expos2 = {
            name: "不限",
            subpos: ["不限"]
        };
        posArray[i].subpos.push(expos2);
    };
    var expos1 = {
        name: "不限",
        subpos: [{
            name: "不限",
            subpos: ["不限"]
        }]
    };
    posArray.push(expos1);
})();

window.posArray = posArray;

// function maxposcalculate() {
//     var maxpos1 = "";
//     var maxpos2 = "";
//     var maxpos3 = "";
//     for (var i = 0; i < posArray.length; i++) {
//         if (posArray[i].name.length > maxpos1.length) {
//             maxpos1 = posArray[i].name;
//         }
//         for (var j = 0; j < posArray[i].subpos.length; j++) {
//             if (posArray[i].subpos[j].name.length > maxpos2.length) {
//                 maxpos2 = posArray[i].subpos[j].name;
//             }
//             for (var k = 0; k < posArray[i].subpos[j].subpos.length; k++) {
//                 if (posArray[i].subpos[j].subpos[k].length > maxpos3.length) {
//                     maxpos3 = posArray[i].subpos[j].subpos[k];
//                 }
//             }
//         }
//     }
//     console.log(maxpos1, maxpos1.length);
//     console.log(maxpos2, maxpos2.length);
//     console.log(maxpos3, maxpos3.length);
// }
// maxposcalculate();
// })()

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addArray = [{
    "name": "浙江省",
    "citys": [{ "city": "杭州市", "conts": ["市辖区", "滨江区", "淳安县", "富阳市", "拱墅区", "江干区", "建德市", "临安市", "上城区", "桐庐县", "西湖区", "下城区", "萧山区", "余杭区"] }, { "city": "宁波市", "conts": ["市辖区", "北仑区", "慈溪市", "奉化市", "海曙区", "江东区", "江北区", "宁海县", "象山县", "鄞州区", "余姚市", "镇海区"] }, { "city": "温州市", "conts": ["市辖区", "苍南县", "洞头县", "乐清市", "龙湾区", "鹿城区", "瓯海区", "平阳县", "瑞安市", "泰顺县", "文成县", "永嘉县"] }, { "city": "嘉兴市", "conts": ["市辖区", "海盐县", "海宁市", "嘉善县", "平湖市", "桐乡市", "秀城区", "秀洲区"] }, { "city": "湖州市", "conts": ["市辖区", "安吉县", "长兴县", "德清县", "南浔区", "吴兴区"] }, { "city": "绍兴市", "conts": ["市辖区", "上虞市", "绍兴县", "嵊州市", "新昌县", "越城区", "诸暨市"] }, { "city": "金华市", "conts": ["市辖区", "东阳市", "金东区", "兰溪市", "磐安县", "浦江县", "婺城区", "武义县", "义乌市", "永康市"] }, { "city": "衢州市", "conts": ["市辖区", "常山县", "江山市", "开化县", "柯城区", "龙游县", "衢江区"] }, { "city": "舟山市", "conts": ["市辖区", "岱山县", "定海区", "普陀区", "嵊泗县"] }, { "city": "台州市", "conts": ["市辖区", "黄岩区", "椒江区", "临海市", "路桥区", "三门县", "天台县", "温岭市", "仙居县", "玉环县"] }, { "city": "丽水市", "conts": ["市辖区", "缙云县", "景宁畲族自治县", "莲都区", "龙泉市", "青田县", "庆元县", "松阳县", "遂昌县", "云和县"] }]
}, {
    "name": "北京市",
    "citys": [{ "city": "北京辖区", "conts": ["昌平区", "朝阳区", "崇文区", "大兴区", "东城区", "房山区", "丰台区", "海淀区", "怀柔区", "门头沟区", "平谷区", "石景山区", "顺义区", "通州区", "西城区", "宣武区"] }, { "city": "北京辖县", "conts": ["密云县", "延庆县"] }]
}, {
    "name": "上海市",
    "citys": [{ "city": "上海辖区", "conts": ["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区"] }, { "city": "上海辖县", "conts": ["崇明县"] }]
}, {
    "name": "广东省",
    "citys": [{ "city": "广州市", "conts": ["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区"] }, { "city": "韶关市", "conts": ["市辖区", "乐昌市", "南雄市", "曲江区", "仁化县", "乳源瑶族自治县", "始兴县", "翁源县", "武江区", "新丰县", "浈江区"] }, { "city": "深圳市", "conts": ["市辖区", "宝安区", "福田区", "龙岗区", "罗湖区", "南山区", "盐田区"] }, { "city": "珠海市", "conts": ["市辖区", "斗门区", "金湾区", "香洲区"] }, { "city": "汕头市", "conts": ["市辖区", "潮阳区", "潮南区", "澄海区", "濠江区", "金平区", "龙湖区", "南澳县"] }, { "city": "佛山市", "conts": ["市辖区", "禅城区", "高明区", "南海区", "三水区", "顺德区"] }, { "city": "江门市", "conts": ["市辖区", "恩平市", "鹤山市", "江海区", "开平市", "蓬江区", "台山市", "新会区"] }, { "city": "湛江市", "conts": ["市辖区", "赤坎区", "雷州市", "廉江市", "麻章区", "坡头区", "遂溪县", "吴川市", "霞山区", "徐闻县"] }, { "city": "茂名市", "conts": ["市辖区", "电白县", "高州市", "化州市", "茂南区", "茂港区", "信宜市"] }, { "city": "肇庆市", "conts": ["市辖区", "德庆县", "鼎湖区", "端州区", "封开县", "高要市", "广宁县", "怀集县", "四会市"] }, { "city": "惠州市", "conts": ["市辖区", "博罗县", "惠城区", "惠阳区", "惠东县", "龙门县"] }, { "city": "梅州市", "conts": ["市辖区", "大埔县", "丰顺县", "蕉岭县", "梅江区", "梅县", "平远县", "五华县", "兴宁市"] }, { "city": "汕尾市", "conts": ["市辖区", "城区", "海丰县", "陆河县", "陆丰市"] }, { "city": "河源市", "conts": ["市辖区", "东源县", "和平县", "连平县", "龙川县", "源城区", "紫金县"] }, { "city": "阳江市", "conts": ["市辖区", "江城区", "阳西县", "阳东县", "阳春市"] }, { "city": "清远市", "conts": ["市辖区", "佛冈县", "连山壮族瑶族自治县", "连南瑶族自治县", "连州市", "清城区", "清新县", "阳山县", "英德市"] }, { "city": "东莞市", "conts": ["市辖区"] }, { "city": "中山市", "conts": ["市辖区"] }, { "city": "潮州市", "conts": ["市辖区", "潮安县", "饶平县", "湘桥区"] }, { "city": "揭阳市", "conts": ["市辖区", "惠来县", "揭东县", "揭西县", "普宁市", "榕城区"] }, { "city": "云浮市", "conts": ["市辖区", "罗定市", "新兴县", "郁南县", "云城区", "云安县"] }]
}, {
    "name": "安徽省",
    "citys": [{ "city": "合肥市", "conts": ["市辖区", "包河区", "长丰县", "肥东县", "肥西县", "庐阳区", "蜀山区", "瑶海区"] }, { "city": "芜湖市", "conts": ["市辖区", "繁昌县", "镜湖区", "鸠江区", "马塘区", "南陵县", "芜湖县", "新芜区"] }, { "city": "蚌埠市", "conts": ["市辖区", "蚌山区", "固镇县", "淮上区", "怀远县", "龙子湖区", "五河县", "禹会区"] }, { "city": "淮南市", "conts": ["市辖区", "八公山区", "大通区", "凤台县", "潘集区", "田家庵区", "谢家集区"] }, { "city": "马鞍山市", "conts": ["市辖区", "当涂县", "花山区", "金家庄区", "雨山区"] }, { "city": "淮北市", "conts": ["市辖区", "杜集区", "烈山区", "濉溪县", "相山区"] }, { "city": "铜陵市", "conts": ["市辖区", "郊区", "狮子山区", "铜官山区", "铜陵县"] }, { "city": "安庆市", "conts": ["市辖区", "枞阳县", "大观区", "怀宁县", "郊区", "潜山县", "太湖县", "桐城市", "望江县", "宿松县", "迎江区", "岳西县"] }, { "city": "黄山市", "conts": ["市辖区", "黄山区", "徽州区", "祁门县", "屯溪区", "歙县", "休宁县", "黟县"] }, { "city": "滁州市", "conts": ["市辖区", "定远县", "凤阳县", "来安县", "琅琊区", "明光市", "南谯区", "全椒县", "天长市"] }, { "city": "阜阳市", "conts": ["市辖区", "阜南县", "界首市", "临泉县", "太和县", "颍州区", "颍东区", "颍泉区", "颍上县"] }, { "city": "宿州市", "conts": ["市辖区", "砀山县", "灵璧县", "泗县", "萧县", "墉桥区"] }, { "city": "巢湖市", "conts": ["市辖区", "含山县", "和县", "居巢区", "庐江县", "无为县"] }, { "city": "六安市", "conts": ["市辖区", "霍邱县", "霍山县", "金安区", "金寨县", "寿县", "舒城县", "裕安区"] }, { "city": "亳州市", "conts": ["市辖区", "利辛县", "蒙城县", "谯城区", "涡阳县"] }, { "city": "池州市", "conts": ["市辖区", "东至县", "贵池区", "青阳县", "石台县"] }, { "city": "宣城市", "conts": ["市辖区", "广德县", "绩溪县", "泾县", "旌德县", "郎溪县", "宁国市", "宣州区"] }]
}, {
    "name": "重庆市",
    "citys": [{ "city": "重庆辖区", "conts": ["巴南区", "北碚区", "长寿区", "大渡口区", "涪陵区", "江北区", "九龙坡区", "南岸区", "黔江区", "沙坪坝区", "双桥区", "万州区", "万盛区", "渝中区", "渝北区"] }, { "city": "重庆辖县", "conts": ["璧山县", "城口县", "大足县", "垫江县", "丰都县", "奉节县", "开县", "梁平县", "彭水苗族土家族自治县", "綦江县", "荣昌县", "石柱土家族自治县", "潼南县", "铜梁县", "巫山县", "巫溪县", "武隆县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "云阳县", "忠县"] }, { "city": "重庆辖市", "conts": ["合川市", "江津市", "南川市", "永川市"] }]
}, {
    "name": "福建省",
    "citys": [{ "city": "福州市", "conts": ["市辖区", "仓山区", "长乐市", "福清市", "鼓楼区", "晋安区", "连江县", "罗源县", "马尾区", "闽侯县", "闽清县", "平潭县", "台江区", "永泰县"] }, { "city": "厦门市", "conts": ["市辖区", "海沧区", "湖里区", "集美区", "思明区", "同安区", "翔安区"] }, { "city": "莆田市", "conts": ["市辖区", "城厢区", "涵江区", "荔城区", "仙游县", "秀屿区"] }, { "city": "三明市", "conts": ["市辖区", "大田县", "建宁县", "将乐县", "梅列区", "明溪县", "宁化县", "清流县", "三元区", "沙县", "泰宁县", "尤溪县", "永安市"] }, { "city": "泉州市", "conts": ["市辖区", "安溪县", "德化县", "丰泽区", "惠安县", "金门县", "晋江市", "鲤城区", "洛江区", "南安市", "泉港区", "石狮市", "永春县"] }, { "city": "漳州市", "conts": ["市辖区", "长泰县", "东山县", "华安县", "龙文区", "龙海市", "南靖县", "平和县", "芗城区", "云霄县", "漳浦县", "诏安县"] }, { "city": "南平市", "conts": ["市辖区", "光泽县", "建瓯市", "建阳市", "浦城县", "邵武市", "顺昌县", "松溪县", "武夷山市", "延平区", "政和县"] }, { "city": "龙岩市", "conts": ["市辖区", "长汀县", "连城县", "上杭县", "武平县", "新罗区", "永定县", "漳平市"] }, { "city": "宁德市", "conts": ["市辖区", "福安市", "福鼎市", "古田县", "蕉城区", "屏南县", "寿宁县", "霞浦县", "柘荣县", "周宁县"] }]
}, {
    "name": "甘肃省",
    "citys": [{ "city": "兰州市", "conts": ["市辖区", "安宁区", "城关区", "皋兰县", "红古区", "七里河区", "西固区", "永登县", "榆中县"] }, { "city": "嘉峪关市", "conts": ["市辖区"] }, { "city": "金昌市", "conts": ["市辖区", "金川区", "永昌县"] }, { "city": "白银市", "conts": ["市辖区", "白银区", "会宁县", "靖远县", "景泰县", "平川区"] }, { "city": "天水市", "conts": ["市辖区", "北道区", "甘谷县", "秦城区", "清水县", "秦安县", "武山县", "张家川回族自治县"] }, { "city": "武威市", "conts": ["市辖区", "古浪县", "凉州区", "民勤县", "天祝藏族自治县"] }, { "city": "张掖市", "conts": ["市辖区", "甘州区", "高台县", "临泽县", "民乐县", "山丹县", "肃南裕固族自治县"] }, { "city": "平凉市", "conts": ["市辖区", "崇信县", "华亭县", "泾川县", "静宁县", "崆峒区", "灵台县", "庄浪县"] }, { "city": "酒泉市", "conts": ["市辖区", "安西县", "阿克塞哈萨克族自治县", "敦煌市", "金塔县", "肃州区", "肃北蒙古族自治县", "玉门市"] }, { "city": "庆阳市", "conts": ["市辖区", "合水县", "环县", "华池县", "宁县", "庆城县", "西峰区", "正宁县", "镇原县"] }, { "city": "定西市", "conts": ["市辖区", "安定区", "临洮县", "陇西县", "岷县", "通渭县", "渭源县", "漳县"] }, { "city": "陇南市", "conts": ["市辖区", "成县", "宕昌县", "徽县", "康县", "礼县", "两当县", "文县", "武都区", "西和县"] }, { "city": "临夏自治州", "conts": ["东乡族自治县", "广河县", "和政县", "积石山保安族东乡族撒拉族自治县", "康乐县", "临夏市", "临夏县", "永靖县"] }, { "city": "甘南自治州", "conts": ["迭部县", "合作市", "临潭县", "碌曲县", "玛曲县", "夏河县", "舟曲县", "卓尼县"] }]
}, {
    "name": "广西区",
    "citys": [{ "city": "南宁市", "conts": ["市辖区", "宾阳县", "横县", "江南区", "良庆区", "隆安县", "马山县", "青秀区", "上林县", "武鸣县", "西乡塘区", "兴宁区", "邕宁区"] }, { "city": "柳州市", "conts": ["市辖区", "城中区", "柳南区", "柳北区", "柳江县", "柳城县", "鹿寨县", "融安县", "融水苗族自治县", "三江侗族自治县", "鱼峰区"] }, { "city": "桂林市", "conts": ["市辖区", "叠彩区", "恭城瑶族自治县", "灌阳县", "荔蒲县", "临桂县", "灵川县", "龙胜各族自治县", "平乐县", "七星区", "全州县", "象山区", "兴安县", "秀峰区", "雁山区", "阳朔县", "永福县", "资源县"] }, { "city": "梧州市", "conts": ["市辖区", "长洲区", "苍梧县", "岑溪市", "蝶山区", "蒙山县", "藤县", "万秀区"] }, { "city": "北海市", "conts": ["市辖区", "海城区", "合浦县", "铁山港区", "银海区"] }, { "city": "防城港市", "conts": ["市辖区", "东兴市", "防城区", "港口区", "上思县"] }, { "city": "钦州市", "conts": ["市辖区", "灵山县", "浦北县", "钦南区", "钦北区"] }, { "city": "贵港市", "conts": ["市辖区", "港北区", "港南区", "桂平市", "平南县", "覃塘区"] }, { "city": "玉林市", "conts": ["市辖区", "北流市", "博白县", "陆川县", "容县", "兴业县", "玉州区"] }, { "city": "百色市", "conts": ["市辖区", "德保县", "靖西县", "乐业县", "凌云县", "隆林各族自治县", "那坡县", "平果县", "田阳县", "田东县", "田林县", "西林县", "右江区"] }, { "city": "贺州市", "conts": ["市辖区", "八步区", "富川瑶族自治县", "昭平县", "钟山县"] }, { "city": "河池市", "conts": ["市辖区", "巴马瑶族自治县", "大化瑶族自治县", "东兰县", "都安瑶族自治县", "凤山县", "环江毛南族自治县", "金城江区", "罗城仫佬族自治县", "南丹县", "天峨县", "宜州市"] }, { "city": "来宾市", "conts": ["市辖区", "合山市", "金秀瑶族自治县", "武宣县", "象州县", "兴宾区", "忻城县"] }, { "city": "崇左市", "conts": ["市辖区", "大新县", "扶绥县", "江洲区", "龙州县", "宁明县", "凭祥市", "天等县"] }]
}, {
    "name": "贵州省",
    "citys": [{ "city": "贵阳市", "conts": ["市辖区", "白云区", "花溪区", "开阳县", "南明区", "清镇市", "乌当区", "息烽县", "小河区", "修文县", "云岩区"] }, { "city": "六盘水市", "conts": ["六枝特区", "盘县", "水城县", "钟山区"] }, { "city": "遵义市", "conts": ["市辖区", "赤水市", "道真仡佬族苗族自治县", "凤冈县", "红花岗区", "汇川区", "湄潭县", "仁怀市", "绥阳县", "桐梓县", "务川仡佬族苗族自治县", "习水县", "余庆县", "正安县", "遵义县"] }, { "city": "安顺市", "conts": ["市辖区", "关岭布依族苗族自治县", "平坝县", "普定县", "西秀区", "镇宁布依族苗族自治县", "紫云苗族布依族自治县"] }, { "city": "铜仁地区", "conts": ["德江县", "江口县", "石阡县", "思南县", "松桃苗族自治县", "铜仁市", "万山特区", "沿河土家族自治县", "印江土家族苗族自治县", "玉屏侗族自治县"] }, { "city": "黔西南自治州", "conts": ["安龙县", "册亨县", "普安县", "晴隆县", "望谟县", "兴义市", "兴仁县", "贞丰县"] }, { "city": "毕节地区", "conts": ["毕节市", "大方县", "赫章县", "金沙县", "纳雍县", "黔西县", "威宁彝族回族苗族自治县", "织金县"] }, { "city": "黔东南自治州", "conts": ["岑巩县", "从江县", "丹寨县", "黄平县", "剑河县", "锦屏县", "凯里市", "雷山县", "黎平县", "麻江县", "榕江县", "三穗县", "施秉县", "台江县", "天柱县", "镇远县"] }, { "city": "黔南自治州", "conts": ["长顺县", "都匀市", "独山县", "福泉市", "贵定县", "惠水县", "荔波县", "龙里县", "罗甸县", "平塘县", "三都水族自治县", "瓮安县"] }]
}, {
    "name": "海南省",
    "citys": [{ "city": "海口市", "conts": ["市辖区", "龙华区", "美兰区", "琼山区", "秀英区"] }, { "city": "三亚市", "conts": ["市辖区"] }, { "city": "海南直辖县", "conts": ["白沙黎族自治县", "保亭黎族苗族自治县", "昌江黎族自治县", "澄迈县", "儋州市", "定安县", "东方市", "乐东黎族自治县", "临高县", "陵水黎族自治县", "南沙群岛", "琼海市", "琼中黎族苗族自治县", "屯昌县", "万宁市", "文昌市", "五指山市", "西沙群岛", "中沙群岛的岛礁及其海域"] }]
}, {
    "name": "河北省",
    "citys": [{ "city": "石家庄市", "conts": ["市辖区", "长安区", "高邑县", "藁城市", "行唐县", "井陉矿区", "井陉县", "晋州市", "灵寿县", "鹿泉市", "栾城县", "平山县", "桥东区", "桥西区", "深泽县", "无极县", "新华区", "辛集市", "新乐市", "裕华区", "元氏县", "赞皇县", "赵县", "正定县"] }, { "city": "唐山市", "conts": ["市辖区", "丰南区", "丰润区", "古冶区", "开平区", "乐亭县", "路南区", "路北区", "滦县", "滦南县", "迁西县", "迁安市", "唐海县", "玉田县", "遵化市"] }, { "city": "秦皇岛市", "conts": ["市辖区", "北戴河区", "昌黎县", "抚宁县", "海港区", "卢龙县", "青龙满族自治县", "山海关区"] }, { "city": "邯郸市", "conts": ["市辖区", "成安县", "丛台区", "磁县", "大名县", "肥乡县", "峰峰矿区", "复兴区", "广平县", "馆陶县", "邯山区", "邯郸县", "鸡泽县", "临漳县", "邱县", "曲周县", "涉县", "魏县", "武安市", "永年县"] }, { "city": "邢台市", "conts": ["市辖区", "柏乡县", "广宗县", "巨鹿县", "临城县", "临西县", "隆尧县", "内丘县", "南和县", "南宫市", "宁晋县", "平乡县", "桥东区", "桥西区", "清河县", "任县", "沙河市", "威县", "邢台县", "新河县"] }, { "city": "保定市", "conts": ["市辖区", "安新县", "安国市", "北市区", "博野县", "定兴县", "定州市", "阜平县", "高阳县", "高碑店市", "涞水县", "涞源县", "蠡县", "满城县", "南市区", "清苑县", "曲阳县", "容城县", "顺平县", "唐县", "望都县", "新市区", "雄县", "徐水县", "易县", "涿州市"] }, { "city": "张家口市", "conts": ["市辖区", "赤城县", "崇礼县", "沽源县", "怀安县", "怀来县", "康保县", "桥东区", "桥西区", "尚义县", "万全县", "蔚县", "下花园区", "宣化区", "宣化县", "阳原县", "张北县", "涿鹿县"] }, { "city": "承德市", "conts": ["市辖区", "承德县", "丰宁满族自治县", "宽城满族自治县", "隆化县", "滦平县", "平泉县", "双桥区", "双滦区", "围场满族蒙古族自治县", "兴隆县", "鹰手营子矿区"] }, { "city": "沧州市", "conts": ["市辖区", "泊头市", "沧县", "东光县", "海兴县", "河间市", "黄骅市", "孟村回族自治县", "南皮县", "青县", "任丘市", "肃宁县", "吴桥县", "献县", "新华区", "盐山县", "运河区"] }, { "city": "廊坊市", "conts": ["市辖区", "安次区", "霸州市", "大城县", "大厂回族自治县", "固安县", "广阳区", "三河市", "文安县", "香河县", "永清县"] }, { "city": "衡水市", "conts": ["市辖区", "安平县", "阜城县", "故城县", "冀州市", "景县", "饶阳县", "深州市", "桃城区", "武邑县", "武强县", "枣强县"] }]
}, {
    "name": "河南省",
    "citys": [{ "city": "郑州市", "conts": ["市辖区", "登封市", "二七区", "巩义市", "管城回族区", "金水区", "邙山区", "上街区", "新密市", "新郑市", "荥阳市", "中原区", "中牟县"] }, { "city": "开封市", "conts": ["市辖区", "鼓楼区", "郊区", "开封县", "兰考县", "龙亭区", "南关区", "杞县", "顺河回族区", "通许县", "尉氏县"] }, { "city": "洛阳市", "conts": ["市辖区", "廛河回族区", "吉利区", "涧西区", "老城区", "栾川县", "洛龙区", "洛宁县", "孟津县", "汝阳县", "嵩县", "西工区", "新安县", "偃师市", "宜阳县", "伊川县"] }, { "city": "平顶山市", "conts": ["市辖区", "宝丰县", "郏县", "鲁山县", "汝州市", "石龙区", "卫东区", "舞钢市", "新华区", "叶县", "湛河区"] }, { "city": "安阳市", "conts": ["市辖区", "安阳县", "北关区", "滑县", "林州市", "龙安区", "内黄县", "汤阴县", "文峰区", "殷都区"] }, { "city": "鹤壁市", "conts": ["市辖区", "鹤山区", "浚县", "淇滨区", "淇县", "山城区"] }, { "city": "新乡市", "conts": ["市辖区", "长垣县", "封丘县", "凤泉区", "红旗区", "辉县市", "获嘉县", "牧野区", "卫滨区", "卫辉市", "新乡县", "延津县", "原阳县"] }, { "city": "焦作市", "conts": ["市辖区", "博爱县", "济源市", "解放区", "马村区", "孟州市", "沁阳市", "山阳区", "温县", "武陟县", "修武县", "中站区"] }, { "city": "濮阳市", "conts": ["市辖区", "范县", "华龙区", "南乐县", "濮阳县", "清丰县", "台前县"] }, { "city": "许昌市", "conts": ["市辖区", "长葛市", "魏都区", "襄城县", "许昌县", "鄢陵县", "禹州市"] }, { "city": "漯河市", "conts": ["市辖区", "临颍县", "舞阳县", "郾城区", "源汇区", "召陵区"] }, { "city": "三门峡市", "conts": ["市辖区", "湖滨区", "灵宝市", "卢氏县", "渑池县", "陕县", "义马市"] }, { "city": "南阳市", "conts": ["市辖区", "邓州市", "方城县", "内乡县", "南召县", "社旗县", "唐河县", "桐柏县", "宛城区", "卧龙区", "西峡县", "淅川县", "新野县", "镇平县"] }, { "city": "商丘市", "conts": ["市辖区", "梁园区", "民权县", "宁陵县", "睢阳区", "睢县", "夏邑县", "永城市", "虞城县", "柘城县"] }, { "city": "信阳市", "conts": ["市辖区", "固始县", "光山县", "淮滨县", "潢川县", "罗山县", "平桥区", "商城县", "师河区", "息县", "新县"] }, { "city": "周口市", "conts": ["市辖区", "川汇区", "郸城县", "扶沟县", "淮阳县", "鹿邑县", "商水县", "沈丘县", "太康县", "西华县", "项城市"] }, { "city": "驻马店市", "conts": ["市辖区", "泌阳县", "平舆县", "确山县", "汝南县", "上蔡县", "遂平县", "西平县", "新蔡县", "驿城区", "正阳县"] }]
}, {
    "name": "黑龙江省",
    "citys": [{ "city": "哈尔滨市", "conts": ["市辖区", "阿城市", "巴彦县", "宾县", "道里区", "道外区", "动力区", "方正县", "呼兰区", "木兰县", "南岗区", "平房区", "尚志市", "双城市", "松北区", "通河县", "五常市", "香坊区", "延寿县", "依兰县"] }, { "city": "齐齐哈尔市", "conts": ["市辖区", "昂昂溪区", "拜泉县", "富拉尔基区", "富裕县", "甘南县", "建华区", "克山县", "克东县", "龙沙区", "龙江县", "梅里斯达斡尔族区", "讷河市", "碾子山区", "泰来县", "铁锋区", "依安县"] }, { "city": "鸡西市", "conts": ["市辖区", "城子河区", "滴道区", "恒山区", "虎林市", "鸡冠区", "鸡东县", "梨树区", "麻山区", "密山市"] }, { "city": "鹤岗市", "conts": ["市辖区", "东山区", "工农区", "萝北县", "南山区", "绥滨县", "向阳区", "兴安区", "兴山区"] }, { "city": "双鸭山市", "conts": ["市辖区", "宝山区", "宝清县", "集贤县", "尖山区", "岭东区", "饶河县", "四方台区", "友谊县"] }, { "city": "大庆市", "conts": ["市辖区", "大同区", "杜尔伯特蒙古族自治县", "红岗区", "林甸县", "龙凤区", "让胡路区", "萨尔图区", "肇州县", "肇源县"] }, { "city": "伊春市", "conts": ["市辖区", "翠峦区", "带岭区", "红星区", "嘉荫县", "金山屯区", "美溪区", "南岔区", "上甘岭区", "汤旺河区", "铁力市", "乌马河区", "乌伊岭区", "五营区", "西林区", "新青区", "伊春区", "友好区"] }, { "city": "佳木斯市", "conts": ["市辖区", "东风区", "抚远县", "富锦市", "桦南县", "桦川县", "郊区", "前进区", "汤原县", "同江市", "向阳区", "永红区"] }, { "city": "七台河市", "conts": ["市辖区", "勃利县", "茄子河区", "桃山区", "新兴区"] }, { "city": "牡丹江市", "conts": ["市辖区", "爱民区", "东安区", "东宁县", "海林市", "林口县", "穆棱市", "宁安市", "绥芬河市", "西安区", "阳明区"] }, { "city": "黑河市", "conts": ["市辖区", "爱辉区", "北安市", "嫩江县", "孙吴县", "五大连池市", "逊克县"] }, { "city": "绥化市", "conts": ["市辖区", "安达市", "北林区", "海伦市", "兰西县", "明水县", "青冈县", "庆安县", "绥棱县", "望奎县", "肇东市"] }, { "city": "大兴安岭地区", "conts": ["呼玛县", "漠河县", "塔河县"] }]
}, {
    "name": "湖北省",
    "citys": [{ "city": "武汉市", "conts": ["市辖区", "蔡甸区", "东西湖区", "汉阳区", "汉南区", "洪山区", "黄陂区", "江岸区", "江汉区", "江夏区", "乔口区", "青山区", "武昌区", "新洲区"] }, { "city": "黄石市", "conts": ["市辖区", "大冶市", "黄石港区", "铁山区", "西塞山区", "下陆区", "阳新县"] }, { "city": "十堰市", "conts": ["市辖区", "丹江口市", "房县", "茅箭区", "郧县", "郧西县", "张湾区", "竹山县", "竹溪县"] }, { "city": "宜昌市", "conts": ["市辖区", "长阳土家族自治县", "当阳市", "点军区", "伍家岗区", "五峰土家族自治县", "西陵区", "兴山县", "夷陵区", "宜都市", "远安县", "枝江市", "秭归县"] }, { "city": "襄樊市", "conts": ["市辖区", "保康县", "樊城区", "谷城县", "老河口市", "南漳县", "襄城区", "襄阳区", "宜城市", "枣阳市"] }, { "city": "鄂州市", "conts": ["市辖区", "鄂城区", "华容区", "梁子湖区"] }, { "city": "荆门市", "conts": ["市辖区", "东宝区", "掇刀区", "京山县", "沙洋县", "钟祥市"] }, { "city": "孝感市", "conts": ["市辖区", "安陆市", "大悟县", "汉川市", "孝南区", "孝昌县", "应城市", "云梦县"] }, { "city": "荆州市", "conts": ["市辖区", "公安县", "洪湖市", "监利县", "江陵县", "荆州区", "沙市区", "石首市", "松滋市"] }, { "city": "黄冈市", "conts": ["市辖区", "红安县", "黄州区", "黄梅县", "罗田县", "麻城市", "蕲春县", "团风县", "武穴市", "浠水县", "英山县"] }, { "city": "咸宁市", "conts": ["市辖区", "崇阳县", "赤壁市", "嘉鱼县", "通城县", "通山县", "咸安区"] }, { "city": "随州市", "conts": ["市辖区", "曾都区", "广水市"] }, { "city": "恩施自治州", "conts": ["巴东县", "恩施市", "鹤峰县", "建始县", "来凤县", "利川市", "咸丰县", "宣恩县"] }, { "city": "湖北省辖单位", "conts": ["潜江市", "神农架林区", "天门市", "仙桃市"] }]
}, {
    "name": "湖南省",
    "citys": [{ "city": "长沙市", "conts": ["市辖区", "长沙县", "芙蓉区", "开福区", "浏阳市", "宁乡县", "天心区", "望城县", "雨花区", "岳麓区"] }, { "city": "株洲市", "conts": ["市辖区", "茶陵县", "荷塘区", "醴陵市", "芦淞区", "石峰区", "天元区", "炎陵县", "攸县", "株洲县"] }, { "city": "湘潭市", "conts": ["市辖区", "韶山市", "湘潭县", "湘乡市", "雨湖区", "岳塘区"] }, { "city": "衡阳市", "conts": ["市辖区", "常宁市", "衡阳县", "衡南县", "衡山县", "衡东县", "耒阳市", "南岳区", "祁东县", "石鼓区", "雁峰区", "蒸湘区", "珠晖区"] }, { "city": "邵阳市", "conts": ["市辖区", "北塔区", "城步苗族自治县", "大祥区", "洞口县", "隆回县", "邵东县", "邵阳县", "双清区", "绥宁县", "武冈市", "新邵县", "新宁县"] }, { "city": "岳阳市", "conts": ["市辖区", "华容县", "君山区", "临湘市", "汨罗市", "平江县", "湘阴县", "岳阳楼区", "岳阳县", "云溪区"] }, { "city": "常德市", "conts": ["市辖区", "安乡县", "鼎城区", "汉寿县", "津市市", "澧县", "临澧县", "石门县", "桃源县", "武陵区"] }, { "city": "张家界市", "conts": ["市辖区", "慈利县", "桑植县", "武陵源区", "永定区"] }, { "city": "益阳市", "conts": ["市辖区", "安化县", "赫山区", "南县", "桃江县", "沅江市", "资阳区"] }, { "city": "郴州市", "conts": ["市辖区", "安仁县", "北湖区", "桂阳县", "桂东县", "嘉禾县", "临武县", "汝城县", "苏仙区", "宜章县", "永兴县", "资兴市"] }, { "city": "永州市", "conts": ["市辖区", "道县", "东安县", "江永县", "江华瑶族自治县", "蓝山县", "冷水滩区", "宁远县", "祁阳县", "双牌县", "新田县", "芝山区"] }, { "city": "怀化市", "conts": ["市辖区", "辰溪县", "鹤城区", "洪江市", "会同县", "靖州苗族侗族自治县", "麻阳苗族自治县", "通道侗族自治县", "新晃侗族自治县", "溆浦县", "沅陵县", "芷江侗族自治县", "中方县"] }, { "city": "娄底市", "conts": ["市辖区", "冷水江市", "涟源市", "娄星区", "双峰县", "新化县"] }, { "city": "湘西自治州", "conts": ["保靖县", "凤凰县", "古丈县", "花垣县", "吉首市", "龙山县", "泸溪县", "永顺县"] }]
}, {
    "name": "吉林省",
    "citys": [{ "city": "长春市", "conts": ["市辖区", "朝阳区", "德惠市", "二道区", "九台市", "宽城区", "绿园区", "南关区", "农安县", "双阳区", "榆树市"] }, { "city": "吉林市", "conts": ["市辖区", "昌邑区", "船营区", "丰满区", "桦甸市", "蛟河市", "龙潭区", "磐石市", "舒兰市", "永吉县"] }, { "city": "四平市", "conts": ["市辖区", "公主岭市", "梨树县", "双辽市", "铁西区", "铁东区", "伊通满族自治县"] }, { "city": "辽源市", "conts": ["市辖区", "东丰县", "东辽县", "龙山区", "西安区"] }, { "city": "通化市", "conts": ["市辖区", "东昌区", "二道江区", "辉南县", "集安市", "柳河县", "梅河口市", "通化县"] }, { "city": "白山市", "conts": ["市辖区", "八道江区", "长白朝鲜族自治县", "抚松县", "江源县", "靖宇县", "临江市"] }, { "city": "松原市", "conts": ["市辖区", "长岭县", "扶余县", "宁江区", "前郭尔罗斯蒙古族自治县", "乾安县"] }, { "city": "白城市", "conts": ["市辖区", "大安市", "洮北区", "洮南市", "通榆县", "镇赉县"] }, { "city": "延边自治州", "conts": ["安图县", "敦化市", "和龙市", "珲春市", "龙井市", "图们市", "汪清县", "延吉市"] }]
}, {
    "name": "江苏省",
    "citys": [{ "city": "南京市", "conts": ["市辖区", "白下区", "高淳县", "鼓楼区", "建邺区", "江宁区", "溧水县", "六合区", "浦口区", "栖霞区", "秦淮区", "下关区", "玄武区", "雨花台区"] }, { "city": "无锡市", "conts": ["市辖区", "北塘区", "滨湖区", "崇安区", "惠山区", "江阴市", "南长区", "锡山区", "宜兴市"] }, { "city": "徐州市", "conts": ["市辖区", "丰县", "鼓楼区", "贾汪区", "九里区", "沛县", "邳州市", "泉山区", "睢宁县", "铜山县", "新沂市", "云龙区"] }, { "city": "常州市", "conts": ["市辖区", "金坛市", "溧阳市", "戚墅堰区", "天宁区", "武进区", "新北区", "钟楼区"] }, { "city": "苏州市", "conts": ["市辖区", "沧浪区", "常熟市", "虎丘区", "金阊区", "昆山市", "平江区", "太仓市", "吴中区", "吴江市", "相城区", "张家港市"] }, { "city": "南通市", "conts": ["市辖区", "崇川区", "港闸区", "海安县", "海门市", "启东市", "如东县", "如皋市", "通州市"] }, { "city": "连云港市", "conts": ["市辖区", "东海县", "赣榆县", "灌云县", "灌南县", "海州区", "连云区", "新浦区"] }, { "city": "淮安市", "conts": ["市辖区", "楚州区", "洪泽县", "淮阴区", "金湖县", "涟水县", "清河区", "清浦区", "盱眙县"] }, { "city": "盐城市", "conts": ["市辖区", "滨海县", "大丰市", "东台市", "阜宁县", "建湖县", "射阳县", "亭湖区", "响水县", "盐都区"] }, { "city": "扬州市", "conts": ["市辖区", "宝应县", "高邮市", "广陵区", "邗江区", "江都市", "郊区", "仪征市"] }, { "city": "镇江市", "conts": ["市辖区", "丹徒区", "丹阳市", "京口区", "句容市", "润州区", "扬中市"] }, { "city": "泰州市", "conts": ["市辖区", "高港区", "海陵区", "姜堰市", "靖江市", "泰兴市", "兴化市"] }, { "city": "宿迁市", "conts": ["市辖区", "沭阳县", "泗阳县", "泗洪县", "宿城区", "宿豫区"] }]
}, {
    "name": "江西省",
    "citys": [{ "city": "南昌市", "conts": ["市辖区", "安义县", "东湖区", "进贤县", "南昌县", "青云谱区", "青山湖区", "湾里区", "西湖区", "新建县"] }, { "city": "景德镇市", "conts": ["市辖区", "昌江区", "浮梁县", "乐平市", "珠山区"] }, { "city": "萍乡市", "conts": ["市辖区", "安源区", "莲花县", "芦溪县", "上栗县", "湘东区"] }, { "city": "九江市", "conts": ["市辖区", "德安县", "都昌县", "湖口县", "九江县", "庐山区", "彭泽县", "瑞昌市", "武宁县", "星子县", "修水县", "浔阳区", "永修县"] }, { "city": "新余市", "conts": ["市辖区", "分宜县", "渝水区"] }, { "city": "鹰潭市", "conts": ["市辖区", "贵溪市", "余江县", "月湖区"] }, { "city": "赣州市", "conts": ["市辖区", "安远县", "崇义县", "大余县", "定南县", "赣县", "会昌县", "龙南县", "南康市", "宁都县", "全南县", "瑞金市", "上犹县", "石城县", "信丰县", "兴国县", "寻乌县", "于都县", "章贡区"] }, { "city": "吉安市", "conts": ["市辖区", "安福县", "吉州区", "吉安县", "吉水县", "井冈山市", "青原区", "遂川县", "泰和县", "万安县", "峡江县", "新干县", "永丰县", "永新县"] }, { "city": "宜春市", "conts": ["市辖区", "丰城市", "奉新县", "高安市", "靖安县", "上高县", "铜鼓县", "万载县", "宜丰县", "袁州区", "樟树市"] }, { "city": "抚州市", "conts": ["市辖区", "崇仁县", "东乡县", "广昌县", "金溪县", "乐安县", "黎川县", "临川区", "南城县", "南丰县", "宜黄县", "资溪县"] }, { "city": "上饶市", "conts": ["市辖区", "德兴市", "广丰县", "横峰县", "鄱阳县", "铅山县", "上饶县", "万年县", "婺源县", "信州区", "弋阳县", "余干县", "玉山县"] }]
}, {
    "name": "辽宁省",
    "citys": [{ "city": "沈阳市", "conts": ["市辖区", "大东区", "东陵区", "法库县", "和平区", "皇姑区", "康平县", "辽中县", "沈河区", "苏家屯区", "铁西区", "沈北新区", "新民市", "于洪区"] }, { "city": "大连市", "conts": ["市辖区", "长海县", "甘井子区", "金州区", "旅顺口区", "普兰店市", "沙河口区", "瓦房店市", "西岗区", "中山区", "庄河市"] }, { "city": "鞍山市", "conts": ["市辖区", "海城市", "立山区", "千山区", "台安县", "铁东区", "铁西区", "岫岩满族自治县"] }, { "city": "抚顺市", "conts": ["市辖区", "东洲区", "抚顺县", "清原满族自治县", "顺城区", "望花区", "新抚区", "新宾满族自治县"] }, { "city": "本溪市", "conts": ["市辖区", "本溪满族自治县", "桓仁满族自治县", "明山区", "南芬区", "平山区", "溪湖区"] }, { "city": "丹东市", "conts": ["市辖区", "东港市", "凤城市", "宽甸满族自治县", "元宝区", "振兴区", "振安区"] }, { "city": "锦州市", "conts": ["市辖区", "北宁市", "古塔区", "黑山县", "凌河区", "凌海市", "太和区", "义县"] }, { "city": "营口市", "conts": ["市辖区", "鲅鱼圈区", "大石桥市", "盖州市", "老边区", "西市区", "站前区"] }, { "city": "阜新市", "conts": ["市辖区", "阜新蒙古族自治县", "海州区", "清河门区", "太平区", "细河区", "新邱区", "彰武县"] }, { "city": "辽阳市", "conts": ["市辖区", "白塔区", "灯塔市", "弓长岭区", "宏伟区", "辽阳县", "太子河区", "文圣区"] }, { "city": "盘锦市", "conts": ["市辖区", "大洼县", "盘山县", "双台子区", "兴隆台区"] }, { "city": "铁岭市", "conts": ["市辖区", "昌图县", "开原市", "清河区", "调兵山市", "铁岭县", "西丰县", "银州区"] }, { "city": "朝阳市", "conts": ["市辖区", "北票市", "朝阳县", "建平县", "喀喇沁左翼蒙古族自治县", "凌源市", "龙城区", "双塔区"] }, { "city": "葫芦岛市", "conts": ["市辖区", "建昌县", "连山区", "龙港区", "南票区", "绥中县", "兴城市"] }]
}, {
    "name": "内蒙古区",
    "citys": [{ "city": "呼和浩特市", "conts": ["市辖区", "和林格尔县", "回民区", "清水河县", "赛罕区", "土默特左旗", "托克托县", "武川县", "新城区", "玉泉区"] }, { "city": "包头市", "conts": ["市辖区", "白云矿区", "达尔罕茂明安联合旗", "东河区", "固阳县", "九原区", "昆都仑区", "青山区", "石拐区", "土默特右旗"] }, { "city": "乌海市", "conts": ["市辖区", "海勃湾区", "海南区", "乌达区"] }, { "city": "赤峰市", "conts": ["市辖区", "阿鲁科尔沁旗", "敖汉旗", "巴林左旗", "巴林右旗", "红山区", "喀喇沁旗", "克什克腾旗", "林西县", "宁城县", "松山区", "翁牛特旗", "元宝山区"] }, { "city": "通辽市", "conts": ["市辖区", "霍林郭勒市", "开鲁县", "科尔沁区", "科尔沁左翼中旗", "科尔沁左翼后旗", "库伦旗", "奈曼旗", "扎鲁特旗"] }, { "city": "鄂尔多斯市", "conts": ["达拉特旗", "东胜区", "鄂托克前旗", "鄂托克旗", "杭锦旗", "乌审旗", "伊金霍洛旗", "准格尔旗"] }, { "city": "呼伦贝尔市", "conts": ["市辖区", "阿荣旗", "陈巴尔虎旗", "鄂伦春自治旗", "鄂温克族自治旗", "额尔古纳市", "根河市", "海拉尔区", "满洲里市", "莫力达瓦达斡尔族自治旗", "新巴尔虎左旗", "新巴尔虎右旗", "牙克石市", "扎兰屯市"] }, { "city": "巴彦淖尔市", "conts": ["市辖区", "磴口县", "杭锦后旗", "临河区", "乌拉特前旗", "乌拉特中旗", "乌拉特后旗", "五原县"] }, { "city": "乌兰察布市", "conts": ["市辖区", "察哈尔右翼前旗", "察哈尔右翼中旗", "察哈尔右翼后旗", "丰镇市", "化德县", "集宁区", "凉城县", "商都县", "四子王旗", "兴和县", "卓资县"] }, { "city": "兴安盟", "conts": ["阿尔山市", "科尔沁右翼前旗", "科尔沁右翼中旗", "突泉县", "乌兰浩特市", "扎赉特旗"] }, { "city": "锡林郭勒盟", "conts": ["阿巴嘎旗", "东乌珠穆沁旗", "多伦县", "二连浩特市", "苏尼特左旗", "苏尼特右旗", "太仆寺旗", "西乌珠穆沁旗", "锡林浩特市", "镶黄旗", "正镶白旗", "正蓝旗"] }, { "city": "阿拉善盟", "conts": ["阿拉善左旗", "阿拉善右旗", "额济纳旗"] }]
}, {
    "name": "宁夏区",
    "citys": [{ "city": "银川市", "conts": ["市辖区", "贺兰县", "金凤区", "灵武市", "西夏区", "兴庆区", "永宁县"] }, { "city": "石嘴山市", "conts": ["市辖区", "大武口区", "惠农区", "平罗县"] }, { "city": "吴忠市", "conts": ["市辖区", "利通区", "青铜峡市", "同心县", "盐池县"] }, { "city": "固原市", "conts": ["市辖区", "泾源县", "隆德县", "彭阳县", "西吉县", "原州区"] }, { "city": "中卫市", "conts": ["市辖区", "海原县", "沙坡头区", "中宁县"] }]
}, {
    "name": "青海省",
    "citys": [{ "city": "西宁市", "conts": ["市辖区", "城东区", "城中区", "城西区", "城北区", "大通回族土族自治县", "湟中县", "湟源县"] }, { "city": "海东地区", "conts": ["互助土族自治县", "化隆回族自治县", "乐都县", "民和回族土族自治县", "平安县", "循化撒拉族自治县"] }, { "city": "海北自治州", "conts": ["刚察县", "海晏县", "门源回族自治县", "祁连县"] }, { "city": "黄南自治州", "conts": ["河南蒙古族自治县", "尖扎县", "同仁县", "泽库县"] }, { "city": "海南自治州", "conts": ["共和县", "贵德县", "贵南县", "同德县", "兴海县"] }, { "city": "果洛自治州", "conts": ["班玛县", "达日县", "甘德县", "久治县", "玛沁县", "玛多县"] }, { "city": "玉树自治州", "conts": ["称多县", "囊谦县", "曲麻莱县", "玉树县", "杂多县", "治多县"] }, { "city": "海西自治州", "conts": ["德令哈市", "都兰县", "格尔木市", "天峻县", "乌兰县"] }]
}, {
    "name": "山西省",
    "citys": [{ "city": "太原市", "conts": ["市辖区", "古交市", "尖草坪区", "晋源区", "娄烦县", "清徐县", "万柏林区", "小店区", "杏花岭区", "阳曲县", "迎泽区"] }, { "city": "大同市", "conts": ["市辖区", "城区", "大同县", "广灵县", "浑源县", "矿区", "灵丘县", "南郊区", "天镇县", "新荣区", "阳高县", "左云县"] }, { "city": "阳泉市", "conts": ["市辖区", "城区", "郊区", "矿区", "平定县", "盂县"] }, { "city": "长治市", "conts": ["市辖区", "长治县", "长子县", "城区", "壶关县", "郊区", "黎城县", "潞城市", "平顺县", "沁县", "沁源县", "屯留县", "武乡县", "襄垣县"] }, { "city": "晋城市", "conts": ["市辖区", "城区", "高平市", "陵川县", "沁水县", "阳城县", "泽州县"] }, { "city": "朔州市", "conts": ["市辖区", "怀仁县", "平鲁区", "山阴县", "朔城区", "应县", "右玉县"] }, { "city": "晋中市", "conts": ["市辖区", "和顺县", "介休市", "灵石县", "平遥县", "祁县", "寿阳县", "太谷县", "昔阳县", "榆次区", "榆社县", "左权县"] }, { "city": "运城市", "conts": ["市辖区", "河津市", "稷山县", "绛县", "临猗县", "平陆县", "芮城县", "万荣县", "闻喜县", "夏县", "新绛县", "盐湖区", "永济市", "垣曲县"] }, { "city": "忻州市", "conts": ["市辖区", "保德县", "代县", "定襄县", "繁峙县", "河曲县", "静乐县", "岢岚县", "宁武县", "偏关县", "神池县", "五台县", "五寨县", "忻府区", "原平市"] }, { "city": "临汾市", "conts": ["市辖区", "安泽县", "大宁县", "汾西县", "浮山县", "古县", "洪洞县", "侯马市", "霍州市", "吉县", "蒲县", "曲沃县", "隰县", "襄汾县", "乡宁县", "尧都区", "翼城县", "永和县"] }, { "city": "吕梁市", "conts": ["市辖区", "方山县", "汾阳市", "交城县", "交口县", "岚县", "离石区", "临县", "柳林县", "石楼县", "文水县", "孝义市", "兴县", "中阳县"] }]
}, {
    "name": "山东省",
    "citys": [{ "city": "济南市", "conts": ["市辖区", "长清区", "槐荫区", "济阳县", "历下区", "历城区", "平阴县", "商河县", "市中区", "天桥区", "章丘市"] }, { "city": "青岛市", "conts": ["市辖区", "城阳区", "黄岛区", "即墨市", "胶州市", "胶南市", "莱西市", "崂山区", "李沧区", "平度市", "市南区", "市北区", "四方区"] }, { "city": "淄博市", "conts": ["市辖区", "博山区", "高青县", "桓台县", "临淄区", "沂源县", "张店区", "周村区", "淄川区"] }, { "city": "枣庄市", "conts": ["市辖区", "山亭区", "市中区", "台儿庄区", "滕州市", "薛城区", "峄城区"] }, { "city": "东营市", "conts": ["市辖区", "东营区", "广饶县", "河口区", "垦利县", "利津县"] }, { "city": "烟台市", "conts": ["市辖区", "长岛县", "福山区", "海阳市", "莱山区", "莱阳市", "莱州市", "龙口市", "牟平区", "蓬莱市", "栖霞市", "招远市", "芝罘区"] }, { "city": "潍坊市", "conts": ["市辖区", "安丘市", "昌乐县", "昌邑市", "坊子区", "高密市", "寒亭区", "奎文区", "临朐县", "青州市", "寿光市", "潍城区", "诸城市"] }, { "city": "济宁市", "conts": ["市辖区", "嘉祥县", "金乡县", "梁山县", "曲阜市", "任城区", "市中区", "泗水县", "微山县", "汶上县", "兖州市", "鱼台县", "邹城市"] }, { "city": "泰安市", "conts": ["市辖区", "岱岳区", "东平县", "肥城市", "宁阳县", "泰山区", "新泰市"] }, { "city": "威海市", "conts": ["市辖区", "环翠区", "荣成市", "乳山市", "文登市"] }, { "city": "日照市", "conts": ["市辖区", "东港区", "莒县", "岚山区", "五莲县"] }, { "city": "莱芜市", "conts": ["市辖区", "钢城区", "莱城区"] }, { "city": "临沂市", "conts": ["市辖区", "苍山县", "费县", "河东区", "莒南县", "兰山区", "临沭县", "罗庄区", "蒙阴县", "平邑县", "郯城县", "沂南县", "沂水县"] }, { "city": "德州市", "conts": ["市辖区", "德城区", "乐陵市", "临邑县", "陵县", "宁津县", "平原县", "齐河县", "庆云县", "武城县", "夏津县", "禹城市"] }, { "city": "聊城市", "conts": ["市辖区", "茌平县", "东昌府区", "东阿县", "高唐县", "冠县", "临清市", "莘县", "阳谷县"] }, { "city": "滨州市", "conts": ["市辖区", "滨城区", "博兴县", "惠民县", "无棣县", "阳信县", "沾化县", "邹平县"] }, { "city": "荷泽市", "conts": ["市辖区", "曹县", "成武县", "单县", "定陶县", "东明县", "巨野县", "鄄城县", "牡丹区", "郓城县"] }]
}, {
    "name": "陕西省",
    "citys": [{ "city": "西安市", "conts": ["市辖区", "灞桥区", "碑林区", "长安区", "高陵县", "户县", "蓝田县", "莲湖区", "临潼区", "未央区", "新城区", "阎良区", "雁塔区", "周至县"] }, { "city": "铜川市", "conts": ["市辖区", "王益区", "耀州区", "宜君县", "印台区"] }, { "city": "宝鸡市", "conts": ["市辖区", "陈仓区", "凤翔县", "凤县", "扶风县", "金台区", "麟游县", "陇县", "眉县", "岐山县", "千阳县", "太白县", "渭滨区"] }, { "city": "咸阳市", "conts": ["市辖区", "彬县", "长武县", "淳化县", "泾阳县", "礼泉县", "乾县", "秦都区", "三原县", "渭城区", "武功县", "兴平市", "旬邑县", "杨凌区", "永寿县"] }, { "city": "渭南市", "conts": ["市辖区", "白水县", "澄城县", "大荔县", "富平县", "韩城市", "合阳县", "华县", "华阴市", "临渭区", "蒲城县", "潼关县"] }, { "city": "延安市", "conts": ["市辖区", "安塞县", "宝塔区", "富县", "甘泉县", "黄龙县", "黄陵县", "洛川县", "吴旗县", "延长县", "延川县", "宜川县", "志丹县", "子长县"] }, { "city": "汉中市", "conts": ["市辖区", "佛坪县", "城固县", "汉台区", "留坝县", "略阳县", "勉县", "南郑县", "宁强县", "西乡县", "洋县", "镇巴县"] }, { "city": "榆林市", "conts": ["市辖区", "定边县", "府谷县", "横山县", "佳县", "靖边县", "米脂县", "清涧县", "神木县", "绥德县", "吴堡县", "榆阳区", "子洲县"] }, { "city": "安康市", "conts": ["市辖区", "白河县", "汉滨区", "汉阴县", "岚皋县", "宁陕县", "平利县", "石泉县", "旬阳县", "镇坪县", "紫阳县"] }, { "city": "商洛市", "conts": ["市辖区", "丹凤县", "洛南县", "山阳县", "商州区", "商南县", "镇安县", "柞水县"] }]
}, {
    "name": "四川省",
    "citys": [{ "city": "成都市", "conts": ["市辖区", "成华区", "崇州市", "大邑县", "都江堰市", "锦江区", "金牛区", "金堂县", "龙泉驿区", "彭州市", "郫县", "蒲江县", "青羊区", "青白江区", "邛崃市", "双流县", "温江区", "武侯区", "新都区", "新津县"] }, { "city": "自贡市", "conts": ["市辖区", "大安区", "富顺县", "贡井区", "荣县", "沿滩区", "自流井区"] }, { "city": "攀枝花市", "conts": ["市辖区", "东区", "米易县", "仁和区", "西区", "盐边县"] }, { "city": "泸州市", "conts": ["市辖区", "古蔺县", "合江县", "江阳区", "龙马潭区", "泸县", "纳溪区", "叙永县"] }, { "city": "德阳市", "conts": ["市辖区", "广汉市", "旌阳区", "罗江县", "绵竹市", "什邡市", "中江县"] }, { "city": "绵阳市", "conts": ["市辖区", "安县", "北川羌族自治县", "涪城区", "江油市", "平武县", "三台县", "盐亭县", "游仙区", "梓潼县"] }, { "city": "广元市", "conts": ["市辖区", "苍溪县", "朝天区", "剑阁县", "青川县", "市中区", "旺苍县", "元坝区"] }, { "city": "遂宁市", "conts": ["市辖区", "安居区", "船山区", "大英县", "蓬溪县", "射洪县"] }, { "city": "内江市", "conts": ["市辖区", "东兴区", "隆昌县", "市中区", "威远县", "资中县"] }, { "city": "乐山市", "conts": ["市辖区", "峨边彝族自治县", "峨眉山市", "夹江县", "犍为县", "金口河区", "井研县", "马边彝族自治县", "沐川县", "沙湾区", "市中区", "五通桥区"] }, { "city": "南充市", "conts": ["市辖区", "高坪区", "嘉陵区", "阆中市", "南部县", "蓬安县", "顺庆区", "西充县", "仪陇县", "营山县"] }, { "city": "眉山市", "conts": ["市辖区", "丹棱县", "东坡区", "洪雅县", "彭山县", "青神县", "仁寿县"] }, { "city": "宜宾市", "conts": ["市辖区", "长宁县", "翠屏区", "高县", "珙县", "江安县", "筠连县", "南溪县", "屏山县", "兴文县", "宜宾县"] }, { "city": "广安市", "conts": ["市辖区", "广安区", "华莹市", "邻水县", "武胜县", "岳池县"] }, { "city": "达州市", "conts": ["市辖区", "达县", "大竹县", "开江县", "渠县", "通川区", "万源市", "宣汉县"] }, { "city": "雅安市", "conts": ["市辖区", "宝兴县", "汉源县", "芦山县", "名山县", "石棉县", "天全县", "荥经县", "雨城区"] }, { "city": "巴中市", "conts": ["市辖区", "巴州区", "南江县", "平昌县", "通江县"] }, { "city": "资阳市", "conts": ["市辖区", "安岳县", "简阳市", "乐至县", "雁江区"] }, { "city": "阿坝自治州", "conts": ["阿坝县", "黑水县", "红原县", "金川县", "九寨沟县", "理县", "马尔康县", "茂县", "壤塘县", "若尔盖县", "松潘县", "汶川县", "小金县"] }, { "city": "甘孜自治州", "conts": ["白玉县", "巴塘县", "丹巴县", "道孚县", "德格县", "稻城县", "得荣县", "甘孜县", "九龙县", "康定县", "理塘县", "泸定县", "炉霍县", "色达县", "石渠县", "乡城县", "新龙县", "雅江县"] }, { "city": "凉山自治州", "conts": ["布拖县", "德昌县", "甘洛县", "会理县", "会东县", "金阳县", "雷波县", "美姑县", "冕宁县", "木里藏族自治县", "宁南县", "普格县", "西昌市", "喜德县", "盐源县", "越西县", "昭觉县"] }]
}, {
    "name": "天津市",
    "citys": [{ "city": "天津辖区", "conts": ["北辰区", "宝坻区", "大港区", "东丽区", "汉沽区", "和平区", "河东区", "河西区", "河北区", "红桥区", "津南区", "南开区", "塘沽区", "武清区", "西青区"] }, { "city": "天津辖县", "conts": ["蓟县", "静海县", "宁河县"] }]
}, {
    "name": "西藏区",
    "citys": [{ "city": "拉萨市", "conts": ["市辖区", "城关区", "达孜县", "当雄县", "堆龙德庆县", "林周县", "墨竹工卡县", "尼木县", "曲水县"] }, { "city": "昌都地区", "conts": ["八宿县", "边坝县", "察雅县", "昌都县", "丁青县", "贡觉县", "江达县", "类乌齐县", "洛隆县", "芒康县", "左贡县"] }, { "city": "山南地区", "conts": ["措美县", "错那县", "贡嘎县", "加查县", "浪卡子县", "隆子县", "洛扎县", "乃东县", "琼结县", "曲松县", "桑日县", "扎囊县"] }, { "city": "日喀则地区", "conts": ["昂仁县", "白朗县", "定日县", "定结县", "岗巴县", "吉隆县", "江孜县", "康马县", "拉孜县", "南木林县", "聂拉木县", "日喀则市", "仁布县", "萨迦县", "萨嘎县", "谢通门县", "亚东县", "仲巴县"] }, { "city": "那曲地区", "conts": ["安多县", "巴青县", "班戈县", "比如县", "嘉黎县", "那曲县", "尼玛县", "聂荣县", "申扎县", "索县"] }, { "city": "阿里地区", "conts": ["措勤县", "噶尔县", "改则县", "革吉县", "普兰县", "日土县", "札达县"] }, { "city": "林芝地区", "conts": ["波密县", "察隅县", "工布江达县", "朗县", "林芝县", "米林县", "墨脱县"] }]
}, {
    "name": "新疆区",
    "citys": [{ "city": "乌鲁木齐市", "conts": ["市辖区", "达坂城区", "东山区", "沙依巴克区", "水磨沟区", "天山区", "头屯河区", "乌鲁木齐县", "新市区"] }, { "city": "克拉玛依市", "conts": ["市辖区", "白碱滩区", "独山子区", "克拉玛依区", "乌尔禾区"] }, { "city": "吐鲁番地区", "conts": ["鄯善县", "吐鲁番市", "托克逊县"] }, { "city": "哈密地区", "conts": ["巴里坤哈萨克自治县", "哈密市", "伊吾县"] }, { "city": "昌吉自治州", "conts": ["昌吉市", "阜康市", "呼图壁县", "吉木萨尔县", "玛纳斯县", "米泉市", "木垒哈萨克自治县", "奇台县"] }, { "city": "博尔塔拉州", "conts": ["博乐市", "精河县", "温泉县"] }, { "city": "巴音郭楞州", "conts": ["博湖县", "和静县", "和硕县", "库尔勒市", "轮台县", "且末县", "若羌县", "尉犁县", "焉耆回族自治县"] }, { "city": "阿克苏地区", "conts": ["阿克苏市", "阿瓦提县", "拜城县", "柯坪县", "库车县", "沙雅县", "温宿县", "乌什县", "新和县"] }, { "city": "克孜勒苏州", "conts": ["阿图什市", "阿克陶县", "阿合奇县", "乌恰县"] }, { "city": "喀什地区", "conts": ["巴楚县", "伽师县", "喀什市", "麦盖提县", "莎车县", "疏附县", "疏勒县", "塔什库尔干塔吉克自治县", "叶城县", "英吉沙县", "岳普湖县", "泽普县"] }, { "city": "和田地区", "conts": ["策勒县", "和田市", "和田县", "洛浦县", "民丰县", "墨玉县", "皮山县", "于田县"] }, { "city": "伊犁自治州", "conts": ["察布查尔锡伯自治县", "巩留县", "霍城县", "奎屯市", "尼勒克县", "特克斯县", "新源县", "伊宁市", "伊宁县", "昭苏县"] }, { "city": "塔城地区", "conts": ["额敏县", "和布克赛尔蒙古自治县", "沙湾县", "塔城市", "托里县", "乌苏市", "裕民县"] }, { "city": "阿勒泰地区", "conts": ["阿勒泰市", "布尔津县", "富蕴县", "福海县", "哈巴河县", "吉木乃县", "青河县"] }, { "city": "新疆省辖单位", "conts": ["阿拉尔市", "石河子市", "图木舒克市", "五家渠市"] }]
}, {
    "name": "云南省",
    "citys": [{ "city": "昆明市", "conts": ["市辖区", "安宁市", "呈贡县", "东川区", "富民县", "官渡区", "晋宁县", "禄劝彝族苗族自治县", "盘龙区", "石林彝族自治县", "嵩明县", "五华区", "西山区", "寻甸回族彝族自治县", "宜良县"] }, { "city": "曲靖市", "conts": ["市辖区", "富源县", "会泽县", "陆良县", "罗平县", "马龙县", "麒麟区", "师宗县", "宣威市", "沾益县"] }, { "city": "玉溪市", "conts": ["市辖区", "澄江县", "峨山彝族自治县", "红塔区", "华宁县", "江川县", "通海县", "新平彝族傣族自治县", "易门县", "元江哈尼族彝族傣族自治县"] }, { "city": "保山市", "conts": ["市辖区", "昌宁县", "隆阳区", "龙陵县", "施甸县", "腾冲县"] }, { "city": "昭通市", "conts": ["市辖区", "大关县", "鲁甸县", "巧家县", "水富县", "绥江县", "威信县", "盐津县", "彝良县", "永善县", "昭阳区", "镇雄县"] }, { "city": "丽江市", "conts": ["市辖区", "古城区", "华坪县", "宁蒗彝族自治县", "永胜县", "玉龙纳西族自治县"] }, { "city": "思茅市", "conts": ["市辖区", "翠云区", "江城哈尼族彝族自治县", "景东彝族自治县", "景谷傣族彝族自治县", "澜沧拉祜族自治县", "孟连傣族拉祜族佤族自治县", "墨江哈尼族自治县", "普洱哈尼族彝族自治县", "西盟佤族自治县", "镇沅彝族哈尼族拉祜族自治县"] }, { "city": "临沧市", "conts": ["市辖区", "沧源佤族自治县", "凤庆县", "耿马傣族佤族自治县", "临翔区", "双江拉祜族佤族布朗族傣族自治县", "永德县", "云县", "镇康县"] }, { "city": "楚雄自治州", "conts": ["楚雄市", "大姚县", "禄丰县", "牟定县", "南华县", "双柏县", "武定县", "姚安县", "永仁县", "元谋县"] }, { "city": "红河自治州", "conts": ["个旧市", "河口瑶族自治县", "红河县", "建水县", "金平苗族瑶族傣族自治县", "开远市", "泸西县", "绿春县", "蒙自县", "弥勒县", "屏边苗族自治县", "石屏县", "元阳县"] }, { "city": "文山自治州", "conts": ["富宁县", "广南县", "麻栗坡县", "马关县", "丘北县", "文山县", "西畴县", "砚山县"] }, { "city": "西双版纳州", "conts": ["景洪市", "勐海县", "勐腊县"] }, { "city": "大理自治州", "conts": ["宾川县", "大理市", "洱源县", "鹤庆县", "剑川县", "弥渡县", "南涧彝族自治县", "巍山彝族回族自治县", "祥云县", "漾濞彝族自治县", "永平县", "云龙县"] }, { "city": "德宏自治州", "conts": ["梁河县", "陇川县", "潞西市", "瑞丽市", "盈江县"] }, { "city": "怒江傈自治州", "conts": ["福贡县", "贡山独龙族怒族自治县", "兰坪白族普米族自治县", "泸水县"] }, { "city": "迪庆自治州", "conts": ["德钦县", "维西傈僳族自治县", "香格里拉县"] }]
}];

// var maxlen = 1;
// for(var i=0; i<addArray.length;i++){
//      for(var j=0; j<addArray[i].citys.length;j++){
//           if(addArray[i].citys[j].city.length>maxlen){
//                maxlen=addArray[i].citys[j].city.length;
//           }
//           for(k=0;k<addArray[i].citys[j].conts.length;k++){
//                if(addArray[i].citys[j].conts[k].length>maxlen){
//                     maxlen=addArray[i].citys[j].conts[k].length;
//                }
//           }
//      }
// }
// console.log(maxlen);
function addressExtra() {
    //添加不限选项
    for (var i = 0; i < addArray.length; i++) {
        for (var j = 0; j < addArray[i].citys.length; j++) {
            addArray[i].citys[j].conts.push("不限");
        }
        var exCity = {
            city: "不限",
            conts: ["不限"]
        };
        addArray[i].citys.push(exCity);
    }
    var exProvince = {
        name: "不限",
        citys: [{ city: "不限", conts: ["不限"] }]
    };
    addArray.push(exProvince);
}
addressExtra();

window.addArray = addArray;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
    var msgTempl = '<div class="msg-box">\
        <h3 class="msg-box-head"><i class="pic-icon icon-return" v-show="!show.list" @click.stop="back"></i><i class="pic-icon icon-email" v-show="show.list"></i><span class="msg-head">消息提醒</span><span class="icon-wrapper" @click.stop="closeBox"><i class="pic-icon icon-close"></i></span></h3>\
        <div v-show="show.list">\
            <ul class="msg-body">\
                <li v-for="item in msgList.results" @click.stop="showDetail(item,$event.target)">\
                    <i class="msg-mark" v-show="item.isRead&&item.isRead!=1"></i>\
                    <span class="msg-name">{{item.messageTitle}}</span>\
                    <span class="msg-cont">{{item.messageContent}}</span>\
                    <span class="msg-time">{{item.createTime.split(" ")[0]}}</span>\
                    <span class="msg-delete" @click.stop="delItem(item)" v-show="item.messageId">删除</span>\
                </li>\
            </ul>\
            <div class="msg-bot">\
                <pagination :showpages="showpage(msgList.totalpages)" :totalpages="msgList.totalpages" type="" @topage="topage"></pagination>\
                <button class="clear-all" @click.stop="delAll">全部清空</button>\
            </div>\
        </div>\
        <div class="msg-detail" v-show="!show.list">\
            <p class="msg-detail-cont">{{msgDetail.cont}}</p>\
            <p class="msg-detail-bot"><span>{{msgDetail.time}}</span></p>\
        </div>\
    </div>';
    Vue.component("message-box", {
        template: msgTempl,
        props: ['userid', "showmsg"],
        data: function data() {
            return {
                show: {
                    list: true
                },
                msgDetail: {
                    cont: "",
                    time: ""
                },
                msgList: {
                    curpage: 1,
                    totalpages: 1,
                    results: []
                }
            };
        },
        methods: {
            delItem: function delItem(item) {
                if (item.messageId) {
                    var thisObj = this;
                    EventUtils.ajaxReq("/message/delMessage", "get", { messageId: item.messageId }, function (resp, status) {
                        if (thisObj.msgList.curpage > 1 && thisObj.msgList.results.length == 1) {
                            thisObj.msgList.curpage--;
                        };
                        $(".msg-box .pagination a.page").eq(thisObj.msgList.curpage - 1).parent().trigger("click");
                    });
                }
            },
            delAll: function delAll() {
                EventUtils.ajaxReq("/message/delAllMessage", "get", { userId: this.userid }, function (resp, status) {
                    $(".msg-box .pagination a.page").eq(0).parent().trigger("click");
                });
            },
            topage: function topage(page, type) {
                var postdata = {
                    userId: this.userid,
                    index: page,
                    count: 8
                };
                console.log(postdata);
                this.msgList.curpage = page;
                var _this = this;
                EventUtils.ajaxReq("/message/getMessageList", "get", postdata, function (resp, status) {
                    var resultList = [];
                    if (resp.data) {
                        resultList = resp.data.resultList.list;
                        _this.msgList.totalpages = resp.data.resultList.totalPage;
                    } else {
                        _this.msgList.totalpages = 1;
                    }
                    if (resultList.length < 8) {
                        var paddingItem = {
                            messageTitle: "",
                            messageContent: "",
                            createTime: ""
                        };
                        var sum = resultList.length;
                        for (var i = 0; i < 8 - sum; i++) {
                            resultList.push(paddingItem);
                        }
                    }
                    _this.msgList.results = resultList;
                });
            },
            closeBox: function closeBox() {
                this.$emit("closebox");
            },
            back: function back() {
                this.show.list = true;
            },
            showDetail: function showDetail(item) {
                if (item.messageId) {
                    EventUtils.ajaxReq("/message/readMessage", "get", { messageId: item.messageId }, function (resp, status) {
                        item.isRead = 1;
                    });
                    this.msgDetail.cont = item.messageContent;
                    this.msgDetail.time = item.createTime;
                    this.show.list = false;
                }
            },
            showpage: function showpage(totalpages) {
                if (totalpages > 3) {
                    return 3;
                } else {
                    return totalpages;
                }
            }
        },
        watch: {
            "showmsg": function showmsg(curval) {
                if (curval) {
                    this.show.list = true;
                }
            }
        },
        components: {
            'pagination': pagination
        },
        mounted: function mounted() {
            var postdata = {
                userId: this.userid,
                index: 1,
                count: 8
            };
            var _this = this;
            EventUtils.ajaxReq("/message/getMessageList", "get", postdata, function (resp, status) {
                console.log(resp);
                var resultList = [];
                if (resp.data && resp.data.resultList) {
                    resultList = resp.data.resultList.list;
                    _this.msgList.totalpages = resp.data.resultList.totalPage;
                } else {
                    resultList = [];
                    _this.msgList.totalpages = 1;
                }
                if (resultList.length < 8) {
                    var paddingItem = {
                        messageTitle: "",
                        messageContent: "",
                        createTime: ""
                    };
                    var sum = resultList.length;
                    for (var i = 0; i < 8 - sum; i++) {
                        resultList.push(paddingItem);
                    }
                }
                _this.msgList.results = resultList;
                if (resp.data && resp.data.count > 0) {
                    $(".msg-center .msg-info").html(resp.data.count);
                    $(".msg-center .msg-info").show();
                } else {
                    $(".msg-center .msg-info").hide();
                }
            });
        }
    });
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Firefox获取文件路径方法
function readFileFirefox(fileBrowser) {
    try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
    } catch (e) {
        alert('无法访问本地文件，由于浏览器安全设置。为了克服这一点，请按照下列步骤操作：(1)在地址栏输入"about:config";(2) 右键点击并选择 New->Boolean; (3) 输入"signed.applets.codebase_principal_support" （不含引号）作为一个新的首选项的名称;(4) 点击OK并试着重新加载文件');
        return;
    }
    var fileName = fileBrowser.value; //这一步就能得到客户端完整路径。下面的是否判断的太复杂，还有下面得到ie的也很复杂。
    var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
    try {
        // Back slashes for windows
        file.initWithPath(fileName.replace(/\//g, "\\\\"));
    } catch (e) {
        if (e.result != Components.results.NS_ERROR_FILE_UNRECOGNIZED_PATH) throw e;
        alert("File '" + fileName + "' cannot be loaded: relative paths are not allowed. Please provide an absolute path to this file.");
        return;
    }
    if (file.exists() == false) {
        alert("File '" + fileName + "' not found.");
        return;
    }
    return file.path;
}
window.readFileFirefox = readFileFirefox;
var variableUtils = {
    regExp: {
        name: /^[\u4E00-\u9FA5A-Za-z]{1,12}$/,
        mobile: /^1[34578]\d{9}$/,
        email: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
        password: /^[a-zA-Z0-9]{6,16}$/,
        phone: /^0\d{2,3}-\d{7,8}(-\d{1,6})?$/
    },
    xqInfo: {
        phone: "0571-28277417-818",
        address: "杭州市滨江区六合路368号海创基地北三楼B3077",
        email: "market@xiaoqiztc.com",
        copyright: "校企职通车版权所有©2017XIAOQI 浙ICP备17007975号-2 浙公网安备3481464号"
    }
};
window.variableUtils = variableUtils;
window.EventUtils = {
    initDatabase: function initDatabase() {
        for (var key in xqdatabase) {
            if (key != "date") {
                xqdatabase[key].push("不限");
            }
        }
        for (var i = 0; i < majorArray.length; i++) {
            majorArray[i].submajor.push("不限");
        };
        var exMajor = {
            major: "不限",
            submajor: ["不限"]
        };
        majorArray.push(exMajor);
    },
    submitForm: function submitForm(url, data) {
        var eleForm = document.body.appendChild(document.createElement('form'));
        eleForm.action = url;
        for (var property in data) {
            var hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.name = property;
            hiddenInput.value = data[property];
            eleForm.appendChild(hiddenInput);
        }
        this.eleForm = eleForm;
        if (!EventUtils.submitForm._initialized) {
            EventUtils.submitForm.prototype.post = function () {
                this.eleForm.method = 'post';
                this.eleForm.submit();
            };
            EventUtils.submitForm._initialized = true;
        }
    },
    securityUrl: function securityUrl(url) {
        var urlSections = url.split("?");
        var secureLink = urlSections[0] + "?" + window.btoa(urlSections[1]);
        return secureLink;
    },
    limitWords: function limitWords(wordslimit, str) {
        if (str.length < wordslimit) {
            return str;
        } else {
            return str.slice(0, wordslimit);
        }
    },
    remainWords: function remainWords(wordslimit, str) {
        if (wordslimit - str.length > 0) {
            return wordslimit - str.length;
        } else {
            return "0";
        }
    },
    cloneObj: function cloneObj(obj) {
        // 克隆对象函数
        var o;
        switch (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) {
            case 'undefined':
                break;
            case 'string':
                o = obj + '';
                break;
            case 'number':
                o = obj - 0;
                break;
            case 'boolean':
                o = obj;
                break;
            case 'object':
                if (obj === null) {
                    o = null;
                } else {
                    if (obj instanceof Array) {
                        o = [];
                        for (var i = 0, len = obj.length; i < len; i++) {
                            o.push(EventUtils.cloneObj(obj[i]));
                        }
                    } else {
                        o = {};
                        for (var k in obj) {
                            o[k] = EventUtils.cloneObj(obj[k]);
                        }
                    }
                }
                break;
            default:
                o = obj;
                break;
        }
        return o;
    },
    diffDay: function diffDay(date) {
        // 计算日期差值
        var nowDate = new Date();
        aDate = date.split("-");
        var oldDate = new Date(aDate[1] + "-" + aDate[2] + "-" + aDate[0]);
        var iDays = parseInt(Math.abs(nowDate - oldDate) / 1000 / 60 / 60 / 24);
        return iDays;
    },
    filterReqdata: function filterReqdata(postdata) {
        // 清除发送数据对象值为空或不限的属性
        for (var key in postdata) {
            if (typeof postdata[key] == "string" && postdata[key].indexOf(";") >= 0 && postdata[key].split(";")[0] == "不限") {
                delete postdata[key];
            }
            if (postdata[key] == "" || postdata[key] == "不限" || !postdata[key]) {
                delete postdata[key];
            }
        }
        return postdata;
    },
    absCenter: function absCenter(obj) {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        (0, _jquery2.default)(obj).css({
            top: Math.floor(((0, _jquery2.default)(window).height() - (0, _jquery2.default)(obj).height()) / 2 + scrollTop),
            left: Math.floor(((0, _jquery2.default)(window).width() - (0, _jquery2.default)(obj).width()) / 2)
        });
    },
    urlExtrac: function urlExtrac(url) {
        var paraStr = url.search.substr(1);
        paraStr = window.atob(paraStr);
        var paraArray = paraStr.split("&");
        var paraObj = {};
        for (var i = 0; i < paraArray.length; i++) {
            var pars = paraArray[i].split("=");
            paraObj[pars[0]] = pars[1];
        };
        return paraObj;
    },
    infoExtrac: function infoExtrac(info) {
        if (info) {
            var infoArray = info.split(";");
            for (var i = infoArray.length - 1; i >= 0; i--) {
                if (i == 0) {
                    return infoArray[0];
                } else if (infoArray[i] != "不限" && infoArray[i] != "") {
                    return infoArray[i];
                }
            }
        } else {
            return "";
        }
    },
    infoShow: function infoShow(info, type) {
        if (info && info != '不限') {
            return info;
        } else {
            switch (type) {
                case "salary":
                    return "薪资不详";
                case "profession":
                    return "专业不限";
                case "stuscale":
                    return "专业人数不限";
                case "edu":
                    return "学历不限";
                case "worktime":
                    return "经验不限";
                case "props":
                    return "性质不限";
                case "scale":
                    return "规模不限";
                case "comtype":
                    return "行业不限";
                case "job":
                    return "岗位不限";
                case "uniclass":
                    return "高校类别不限";
            }
        }
    },
    infoToArray: function infoToArray(info) {
        if (info != undefined || info != "") {
            return info.split(";");
        } else {
            return "";
        }
    },
    ajaxReq: function ajaxReq(url, method, postdata, callback) {
        _jquery2.default.ajax({
            url: "http://www.xiaoqiztc.com/easily_xq_WebApi" + url,
            //url: "http://192.168.0.105:8080/easily_xq_WebApi" + url,
            type: method,
            async: false,
            data: postdata,
            success: function success(resp, status) {
                if (resp.code == "00000" || resp.code == "10005") {
                    callback(resp, status);
                } else if (resp.code == "10002") {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "error"
                    });
                } else {
                    swal({
                        title: "",
                        text: "系统错误，请稍后重试!",
                        type: "warning"
                    });
                }
            },
            error: function error(data, status) {
                swal({
                    title: "",
                    text: "请求服务器数据错误，请稍后重试！",
                    type: "warning"
                });
            },
            timeout: 100000
        });
    },
    formatDate: function formatDate(year, month, day) {
        if (parseInt(month) < 10) {
            month = "0" + month;
        }
        if (parseInt(day) < 10) {
            day = "0" + day;
        }
        return year + "-" + month + "-" + day;
    },
    getOs: function getOs() {
        var OsObject = "";
        if (navigator.userAgent.indexOf("MSIE") > 0) {
            return "MSIE";
        }
        if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
            return "Firefox";
        }
        if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
            return "Safari";
        }
        if (isCamino = navigator.userAgent.indexOf("Camino") > 0) {
            return "Camino";
        }
        if (isMozilla = navigator.userAgent.indexOf("Gecko/") > 0) {
            return "Gecko";
        }
    },
    getBrowserType: function getBrowserType() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器  
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器  
        var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器  
        var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器  
        var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器  
        var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器  

        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion == 7) {
                return "IE7";
            } else if (fIEVersion == 8) {
                return "IE8";
            } else if (fIEVersion == 9) {
                return "IE9";
            } else if (fIEVersion == 10) {
                return "IE10";
            } else if (fIEVersion == 11) {
                return "IE11";
            } else {
                return "0";
            } //IE版本过低  
        } //isIE end  

        if (isFF) {
            return "FF";
        }
        if (isOpera) {
            return "Opera";
        }
        if (isSafari) {
            return "Safari";
        }
        if (isChrome) {
            return "Chrome";
        }
        if (isEdge) {
            return "Edge";
        }
    },
    getLocalImgUrl: function getLocalImgUrl(fid) {
        // IE浏览器获取图片路径
        this.getImgUrlByMSIE = function (fileid) {
            return document.getElementById(fileid).value;
        };
        // 非IE浏览器获取图片路径
        this.getImgUrlByUnMSIE = function (fileid) {
            var f = document.getElementById(fileid).files[0];
            return window.URL.createObjectURL(f);
        };
        var imgsrc = "";
        if ("MSIE" == EventUtils.getOs()) {
            imgsrc = this.getImgUrlByMSIE(fid);
        } else {
            imgsrc = this.getImgUrlByUnMSIE(fid);
        }
        return imgsrc;
    },
    getFileUrl: function getFileUrl(obj) {
        //判断浏览器
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
        var file_url = "";
        if (Sys.ie <= "6.0") {
            //ie5.5,ie6.0
            file_url = obj.value;
        } else if (Sys.ie >= "7.0") {
            //ie7,ie8
            obj.select();
            file_url = document.selection.createRange().text;
        } else if (Sys.firefox) {
            //file_url = document.getElementById("file").files[0].getAsDataURL();//获取的路径为FF识别的加密字符串
            file_url = readFileFirefox(obj);
        } else if (Sys.chrome) {
            file_url = obj.value;
        }
        return file_url;
    },
    getViewport: function getViewport() {
        //取得屏幕宽高
        if (document.compatMode == 'BackCompat') {
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            };
        } else {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            };
        }
    },
    placeholderFill: function placeholderFill() {
        //对无placeholder功能浏览器提供兼容处理
        var input = document.createElement('input');
        if ('placeholder' in input) {
            //如果支持placeholer
            return;
        };
        (0, _jquery2.default)("input[type='text']").each(function (index) {
            // $(this).attr("placeholder");
            (0, _jquery2.default)(this).val((0, _jquery2.default)(this).attr("placeholder"));
            (0, _jquery2.default)(this).focus(function () {
                console.log(1);
                if ((0, _jquery2.default)(this).val() == (0, _jquery2.default)(this).attr("placeholder")) {
                    (0, _jquery2.default)(this).val("");
                }
            }).blur(function () {
                console.log(2);
                if ((0, _jquery2.default)(this).val() == "") {
                    (0, _jquery2.default)(this).val((0, _jquery2.default)(this).attr("placeholder"));
                }
            });
        });
    }
    // 数组对象功能扩充
};Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

var mybrowser = EventUtils.getBrowserType();
if (mybrowser && mybrowser.indexOf("IE") > -1) {
    console.log(parseInt(mybrowser.slice(2)) < 10);
    if (parseInt(mybrowser.slice(2)) < 10) {
        swal({
            title: "",
            text: "亲爱的用户，由于您的浏览器版本过低，导致页面无法正常显示。请升级您的浏览器，我们推荐使用谷歌浏览器~",
            type: "warning"
        });
    };
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;var require;var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t, n) {
  "use strict";
  !function o(e, t, n) {
    function a(s, l) {
      if (!t[s]) {
        if (!e[s]) {
          var i = "function" == typeof require && require;if (!l && i) return require(s, !0);if (r) return r(s, !0);var u = new Error("Cannot find module '" + s + "'");throw u.code = "MODULE_NOT_FOUND", u;
        }var c = t[s] = { exports: {} };e[s][0].call(c.exports, function (t) {
          var n = e[s][1][t];return a(n ? n : t);
        }, c, c.exports, o, e, t, n);
      }return t[s].exports;
    }for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) {
      a(n[s]);
    }return a;
  }({ 1: [function (o, a, r) {
      function s(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var l,
          i,
          u,
          _c,
          d = o("./modules/handle-dom"),
          f = o("./modules/utils"),
          p = o("./modules/handle-swal-dom"),
          m = o("./modules/handle-click"),
          v = o("./modules/handle-key"),
          y = s(v),
          b = o("./modules/default-params"),
          h = s(b),
          g = o("./modules/set-params"),
          w = s(g);r["default"] = u = _c = function c() {
        function o(e) {
          var t = a;return t[e] === n ? h["default"][e] : t[e];
        }var a = arguments[0];if ((0, d.addClass)(t.body, "stop-scrolling"), (0, p.resetInput)(), a === n) return (0, f.logStr)("SweetAlert expects at least 1 attribute!"), !1;var r = (0, f.extend)({}, h["default"]);switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "string":
            r.title = a, r.text = arguments[1] || "", r.type = arguments[2] || "";break;case "object":
            if (a.title === n) return (0, f.logStr)('Missing "title" argument!'), !1;r.title = a.title;for (var s in h["default"]) {
              r[s] = o(s);
            }r.confirmButtonText = r.showCancelButton ? "Confirm" : h["default"].confirmButtonText, r.confirmButtonText = o("confirmButtonText"), r.doneFunction = arguments[1] || null;break;default:
            return (0, f.logStr)('Unexpected type of argument! Expected "string" or "object", got ' + (typeof a === "undefined" ? "undefined" : _typeof(a))), !1;}(0, w["default"])(r), (0, p.fixVerticalPosition)(), (0, p.openModal)(arguments[1]);for (var u = (0, p.getModal)(), v = u.querySelectorAll("button"), b = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], g = function g(e) {
          return (0, m.handleButton)(e, r, u);
        }, C = 0; C < v.length; C++) {
          for (var S = 0; S < b.length; S++) {
            var x = b[S];v[C][x] = g;
          }
        }(0, p.getOverlay)().onclick = g, l = e.onkeydown;var k = function k(e) {
          return (0, y["default"])(e, r, u);
        };e.onkeydown = k, e.onfocus = function () {
          setTimeout(function () {
            i !== n && (i.focus(), i = n);
          }, 0);
        }, _c.enableButtons();
      }, u.setDefaults = _c.setDefaults = function (e) {
        if (!e) throw new Error("userParams is required");if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) throw new Error("userParams has to be a object");(0, f.extend)(h["default"], e);
      }, u.close = _c.close = function () {
        var o = (0, p.getModal)();(0, d.fadeOut)((0, p.getOverlay)(), 5), (0, d.fadeOut)(o, 5), (0, d.removeClass)(o, "showSweetAlert"), (0, d.addClass)(o, "hideSweetAlert"), (0, d.removeClass)(o, "visible");var a = o.querySelector(".sa-icon.sa-success");(0, d.removeClass)(a, "animate"), (0, d.removeClass)(a.querySelector(".sa-tip"), "animateSuccessTip"), (0, d.removeClass)(a.querySelector(".sa-long"), "animateSuccessLong");var r = o.querySelector(".sa-icon.sa-error");(0, d.removeClass)(r, "animateErrorIcon"), (0, d.removeClass)(r.querySelector(".sa-x-mark"), "animateXMark");var s = o.querySelector(".sa-icon.sa-warning");return (0, d.removeClass)(s, "pulseWarning"), (0, d.removeClass)(s.querySelector(".sa-body"), "pulseWarningIns"), (0, d.removeClass)(s.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function () {
          var e = o.getAttribute("data-custom-class");(0, d.removeClass)(o, e);
        }, 300), (0, d.removeClass)(t.body, "stop-scrolling"), e.onkeydown = l, e.previousActiveElement && e.previousActiveElement.focus(), i = n, clearTimeout(o.timeout), !0;
      }, u.showInputError = _c.showInputError = function (e) {
        var t = (0, p.getModal)(),
            n = t.querySelector(".sa-input-error");(0, d.addClass)(n, "show");var o = t.querySelector(".sa-error-container");(0, d.addClass)(o, "show"), o.querySelector("p").innerHTML = e, setTimeout(function () {
          u.enableButtons();
        }, 1), t.querySelector("input").focus();
      }, u.resetInputError = _c.resetInputError = function (e) {
        if (e && 13 === e.keyCode) return !1;var t = (0, p.getModal)(),
            n = t.querySelector(".sa-input-error");(0, d.removeClass)(n, "show");var o = t.querySelector(".sa-error-container");(0, d.removeClass)(o, "show");
      }, u.disableButtons = _c.disableButtons = function (e) {
        var t = (0, p.getModal)(),
            n = t.querySelector("button.confirm"),
            o = t.querySelector("button.cancel");n.disabled = !0, o.disabled = !0;
      }, u.enableButtons = _c.enableButtons = function (e) {
        var t = (0, p.getModal)(),
            n = t.querySelector("button.confirm"),
            o = t.querySelector("button.cancel");n.disabled = !1, o.disabled = !1;
      }, "undefined" != typeof e ? e.sweetAlert = e.swal = u : (0, f.logStr)("SweetAlert is a frontend module!"), a.exports = r["default"];
    }, { "./modules/default-params": 2, "./modules/handle-click": 3, "./modules/handle-dom": 4, "./modules/handle-key": 5, "./modules/handle-swal-dom": 6, "./modules/set-params": 8, "./modules/utils": 9 }], 2: [function (e, t, n) {
      Object.defineProperty(n, "__esModule", { value: !0 });var o = { title: "", text: "", type: null, allowOutsideClick: !1, showConfirmButton: !0, showCancelButton: !1, closeOnConfirm: !0, closeOnCancel: !0, confirmButtonText: "OK", confirmButtonColor: "#8CD4F5", cancelButtonText: "Cancel", imageUrl: null, imageSize: null, timer: null, customClass: "", html: !1, animation: !0, allowEscapeKey: !0, inputType: "text", inputPlaceholder: "", inputValue: "", showLoaderOnConfirm: !1 };n["default"] = o, t.exports = n["default"];
    }, {}], 3: [function (t, n, o) {
      Object.defineProperty(o, "__esModule", { value: !0 });var a = t("./utils"),
          r = (t("./handle-swal-dom"), t("./handle-dom")),
          s = function s(t, n, o) {
        function s(e) {
          m && n.confirmButtonColor && (p.style.backgroundColor = e);
        }var u,
            c,
            d,
            f = t || e.event,
            p = f.target || f.srcElement,
            m = -1 !== p.className.indexOf("confirm"),
            v = -1 !== p.className.indexOf("sweet-overlay"),
            y = (0, r.hasClass)(o, "visible"),
            b = n.doneFunction && "true" === o.getAttribute("data-has-done-function");switch (m && n.confirmButtonColor && (u = n.confirmButtonColor, c = (0, a.colorLuminance)(u, -.04), d = (0, a.colorLuminance)(u, -.14)), f.type) {case "mouseover":
            s(c);break;case "mouseout":
            s(u);break;case "mousedown":
            s(d);break;case "mouseup":
            s(c);break;case "focus":
            var h = o.querySelector("button.confirm"),
                g = o.querySelector("button.cancel");m ? g.style.boxShadow = "none" : h.style.boxShadow = "none";break;case "click":
            var w = o === p,
                C = (0, r.isDescendant)(o, p);if (!w && !C && y && !n.allowOutsideClick) break;m && b && y ? l(o, n) : b && y || v ? i(o, n) : (0, r.isDescendant)(o, p) && "BUTTON" === p.tagName && sweetAlert.close();}
      },
          l = function l(e, t) {
        var n = !0;(0, r.hasClass)(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons();
      },
          i = function i(e, t) {
        var n = String(t.doneFunction).replace(/\s/g, ""),
            o = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);o && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close();
      };o["default"] = { handleButton: s, handleConfirm: l, handleCancel: i }, n.exports = o["default"];
    }, { "./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9 }], 4: [function (n, o, a) {
      Object.defineProperty(a, "__esModule", { value: !0 });var r = function r(e, t) {
        return new RegExp(" " + t + " ").test(" " + e.className + " ");
      },
          s = function s(e, t) {
        r(e, t) || (e.className += " " + t);
      },
          l = function l(e, t) {
        var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";if (r(e, t)) {
          for (; n.indexOf(" " + t + " ") >= 0;) {
            n = n.replace(" " + t + " ", " ");
          }e.className = n.replace(/^\s+|\s+$/g, "");
        }
      },
          i = function i(e) {
        var n = t.createElement("div");return n.appendChild(t.createTextNode(e)), n.innerHTML;
      },
          u = function u(e) {
        e.style.opacity = "", e.style.display = "block";
      },
          c = function c(e) {
        if (e && !e.length) return u(e);for (var t = 0; t < e.length; ++t) {
          u(e[t]);
        }
      },
          d = function d(e) {
        e.style.opacity = "", e.style.display = "none";
      },
          f = function f(e) {
        if (e && !e.length) return d(e);for (var t = 0; t < e.length; ++t) {
          d(e[t]);
        }
      },
          p = function p(e, t) {
        for (var n = t.parentNode; null !== n;) {
          if (n === e) return !0;n = n.parentNode;
        }return !1;
      },
          m = function m(e) {
        e.style.left = "-9999px", e.style.display = "block";var t,
            n = e.clientHeight;return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px";
      },
          v = function v(e, t) {
        if (+e.style.opacity < 1) {
          t = t || 16, e.style.opacity = 0, e.style.display = "block";var n = +new Date(),
              o = function a() {
            e.style.opacity = +e.style.opacity + (new Date() - n) / 100, n = +new Date(), +e.style.opacity < 1 && setTimeout(a, t);
          };o();
        }e.style.display = "block";
      },
          y = function y(e, t) {
        t = t || 16, e.style.opacity = 1;var n = +new Date(),
            o = function a() {
          e.style.opacity = +e.style.opacity - (new Date() - n) / 100, n = +new Date(), +e.style.opacity > 0 ? setTimeout(a, t) : e.style.display = "none";
        };o();
      },
          b = function b(n) {
        if ("function" == typeof MouseEvent) {
          var o = new MouseEvent("click", { view: e, bubbles: !1, cancelable: !0 });n.dispatchEvent(o);
        } else if (t.createEvent) {
          var a = t.createEvent("MouseEvents");a.initEvent("click", !1, !1), n.dispatchEvent(a);
        } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick();
      },
          h = function h(t) {
        "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0);
      };a.hasClass = r, a.addClass = s, a.removeClass = l, a.escapeHtml = i, a._show = u, a.show = c, a._hide = d, a.hide = f, a.isDescendant = p, a.getTopMargin = m, a.fadeIn = v, a.fadeOut = y, a.fireClick = b, a.stopEventPropagation = h;
    }, {}], 5: [function (t, o, a) {
      Object.defineProperty(a, "__esModule", { value: !0 });var r = t("./handle-dom"),
          s = t("./handle-swal-dom"),
          l = function l(t, o, a) {
        var l = t || e.event,
            i = l.keyCode || l.which,
            u = a.querySelector("button.confirm"),
            c = a.querySelector("button.cancel"),
            d = a.querySelectorAll("button[tabindex]");if (-1 !== [9, 13, 32, 27].indexOf(i)) {
          for (var f = l.target || l.srcElement, p = -1, m = 0; m < d.length; m++) {
            if (f === d[m]) {
              p = m;break;
            }
          }9 === i ? (f = -1 === p ? u : p === d.length - 1 ? d[0] : d[p + 1], (0, r.stopEventPropagation)(l), f.focus(), o.confirmButtonColor && (0, s.setFocusStyle)(f, o.confirmButtonColor)) : 13 === i ? ("INPUT" === f.tagName && (f = u, u.focus()), f = -1 === p ? u : n) : 27 === i && o.allowEscapeKey === !0 ? (f = c, (0, r.fireClick)(f, l)) : f = n;
        }
      };a["default"] = l, o.exports = a["default"];
    }, { "./handle-dom": 4, "./handle-swal-dom": 6 }], 6: [function (n, o, a) {
      function r(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(a, "__esModule", { value: !0 });var s = n("./utils"),
          l = n("./handle-dom"),
          i = n("./default-params"),
          u = r(i),
          c = n("./injected-html"),
          d = r(c),
          f = ".sweet-alert",
          p = ".sweet-overlay",
          m = function m() {
        var e = t.createElement("div");for (e.innerHTML = d["default"]; e.firstChild;) {
          t.body.appendChild(e.firstChild);
        }
      },
          v = function x() {
        var e = t.querySelector(f);return e || (m(), e = x()), e;
      },
          y = function y() {
        var e = v();return e ? e.querySelector("input") : void 0;
      },
          b = function b() {
        return t.querySelector(p);
      },
          h = function h(e, t) {
        var n = (0, s.hexToRgb)(t);e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)";
      },
          g = function g(n) {
        var o = v();(0, l.fadeIn)(b(), 10), (0, l.show)(o), (0, l.addClass)(o, "showSweetAlert"), (0, l.removeClass)(o, "hideSweetAlert"), e.previousActiveElement = t.activeElement;var a = o.querySelector("button.confirm");a.focus(), setTimeout(function () {
          (0, l.addClass)(o, "visible");
        }, 500);var r = o.getAttribute("data-timer");if ("null" !== r && "" !== r) {
          var s = n;o.timeout = setTimeout(function () {
            var e = (s || null) && "true" === o.getAttribute("data-has-done-function");e ? s(null) : sweetAlert.close();
          }, r);
        }
      },
          w = function w() {
        var e = v(),
            t = y();(0, l.removeClass)(e, "show-input"), t.value = u["default"].inputValue, t.setAttribute("type", u["default"].inputType), t.setAttribute("placeholder", u["default"].inputPlaceholder), C();
      },
          C = function C(e) {
        if (e && 13 === e.keyCode) return !1;var t = v(),
            n = t.querySelector(".sa-input-error");(0, l.removeClass)(n, "show");var o = t.querySelector(".sa-error-container");(0, l.removeClass)(o, "show");
      },
          S = function S() {
        var e = v();e.style.marginTop = (0, l.getTopMargin)(v());
      };a.sweetAlertInitialize = m, a.getModal = v, a.getOverlay = b, a.getInput = y, a.setFocusStyle = h, a.openModal = g, a.resetInput = w, a.resetInputError = C, a.fixVerticalPosition = S;
    }, { "./default-params": 2, "./handle-dom": 4, "./injected-html": 7, "./utils": 9 }], 7: [function (e, t, n) {
      Object.defineProperty(n, "__esModule", { value: !0 });var o = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"] = o, t.exports = n["default"];
    }, {}], 8: [function (e, t, o) {
      Object.defineProperty(o, "__esModule", { value: !0 });var a = e("./utils"),
          r = e("./handle-swal-dom"),
          s = e("./handle-dom"),
          l = ["error", "warning", "info", "success", "input", "prompt"],
          i = function i(e) {
        var t = (0, r.getModal)(),
            o = t.querySelector("h2"),
            i = t.querySelector("p"),
            u = t.querySelector("button.cancel"),
            c = t.querySelector("button.confirm");if (o.innerHTML = e.html ? e.title : (0, s.escapeHtml)(e.title).split("\n").join("<br>"), i.innerHTML = e.html ? e.text : (0, s.escapeHtml)(e.text || "").split("\n").join("<br>"), e.text && (0, s.show)(i), e.customClass) (0, s.addClass)(t, e.customClass), t.setAttribute("data-custom-class", e.customClass);else {
          var d = t.getAttribute("data-custom-class");(0, s.removeClass)(t, d), t.setAttribute("data-custom-class", "");
        }if ((0, s.hide)(t.querySelectorAll(".sa-icon")), e.type && !(0, a.isIE8)()) {
          var f = function () {
            for (var o = !1, a = 0; a < l.length; a++) {
              if (e.type === l[a]) {
                o = !0;break;
              }
            }if (!o) return logStr("Unknown alert type: " + e.type), { v: !1 };var i = ["success", "error", "warning", "info"],
                u = n;-1 !== i.indexOf(e.type) && (u = t.querySelector(".sa-icon.sa-" + e.type), (0, s.show)(u));var c = (0, r.getInput)();switch (e.type) {case "success":
                (0, s.addClass)(u, "animate"), (0, s.addClass)(u.querySelector(".sa-tip"), "animateSuccessTip"), (0, s.addClass)(u.querySelector(".sa-long"), "animateSuccessLong");break;case "error":
                (0, s.addClass)(u, "animateErrorIcon"), (0, s.addClass)(u.querySelector(".sa-x-mark"), "animateXMark");break;case "warning":
                (0, s.addClass)(u, "pulseWarning"), (0, s.addClass)(u.querySelector(".sa-body"), "pulseWarningIns"), (0, s.addClass)(u.querySelector(".sa-dot"), "pulseWarningIns");break;case "input":case "prompt":
                c.setAttribute("type", e.inputType), c.value = e.inputValue, c.setAttribute("placeholder", e.inputPlaceholder), (0, s.addClass)(t, "show-input"), setTimeout(function () {
                  c.focus(), c.addEventListener("keyup", swal.resetInputError);
                }, 400);}
          }();if ("object" == (typeof f === "undefined" ? "undefined" : _typeof(f))) return f.v;
        }if (e.imageUrl) {
          var p = t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage = "url(" + e.imageUrl + ")", (0, s.show)(p);var m = 80,
              v = 80;if (e.imageSize) {
            var y = e.imageSize.toString().split("x"),
                b = y[0],
                h = y[1];b && h ? (m = b, v = h) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize);
          }p.setAttribute("style", p.getAttribute("style") + "width:" + m + "px; height:" + v + "px");
        }t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? u.style.display = "inline-block" : (0, s.hide)(u), t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? c.style.display = "inline-block" : (0, s.hide)(c), e.cancelButtonText && (u.innerHTML = (0, s.escapeHtml)(e.cancelButtonText)), e.confirmButtonText && (c.innerHTML = (0, s.escapeHtml)(e.confirmButtonText)), e.confirmButtonColor && (c.style.backgroundColor = e.confirmButtonColor, c.style.borderLeftColor = e.confirmLoadingButtonColor, c.style.borderRightColor = e.confirmLoadingButtonColor, (0, r.setFocusStyle)(c, e.confirmButtonColor)), t.setAttribute("data-allow-outside-click", e.allowOutsideClick);var g = !!e.doneFunction;t.setAttribute("data-has-done-function", g), e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer);
      };o["default"] = i, t.exports = o["default"];
    }, { "./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9 }], 9: [function (t, n, o) {
      Object.defineProperty(o, "__esModule", { value: !0 });var a = function a(e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }return e;
      },
          r = function r(e) {
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null;
      },
          s = function s() {
        return e.attachEvent && !e.addEventListener;
      },
          l = function l(t) {
        "undefined" != typeof e && e.console && e.console.log("SweetAlert: " + t);
      },
          i = function i(e, t) {
        e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;var n,
            o,
            a = "#";for (o = 0; 3 > o; o++) {
          n = parseInt(e.substr(2 * o, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), a += ("00" + n).substr(n.length);
        }return a;
      };o.extend = a, o.hexToRgb = r, o.isIE8 = s, o.logStr = l, o.colorLuminance = i;
    }, {}] }, {}, [1]),  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return sweetAlert;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert);
}(window, document);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1);
(function () {
    var tempDrop = '<div :class="classStyle" @click.stop="clickEv($event.target)" style="display:inline-block"><span class="input-frame"></span><input type="text" :placeholder="placeholder" :value="value" disabled/><ul>' + '<li v-for="option in options" @click="selectItem(option,$event.target)" @mouseover="overItem($event.target)" @mouseout="outItem($event.target)">{{option}}</li>' + '</ul></div>';
    Vue.component("dropdown", {
        template: tempDrop,
        props: ["placeholder", "options", "value", "classes"],
        data: function data() {
            var classStyle = "";
            if (this.classes) {
                classStyle = this.classes + " selectee";
            } else {
                classStyle = "selectee";
            };
            return {
                showOps: true,
                classStyle: classStyle
            };
        },
        methods: {
            selectItem: function selectItem(item, obj) {
                this.$emit('input', item);
                (0, _jquery2.default)(obj).siblings(".selected").removeClass("selected");
                (0, _jquery2.default)(obj).addClass("selected");
                (0, _jquery2.default)(obj).parent("ul").siblings("input").val((0, _jquery2.default)(obj).text());
                (0, _jquery2.default)(obj).parent("ul").hide();
                this.$emit('callback');
                return false;
            },
            overItem: function overItem(obj) {
                (0, _jquery2.default)(obj).addClass("over");
            },
            outItem: function outItem(obj) {
                (0, _jquery2.default)(obj).removeClass("over");
            },
            clickEv: function clickEv(obj) {
                (0, _jquery2.default)(".selectee ul").hide();
                //$(".pop-box").hide();
                (0, _jquery2.default)(obj).siblings("ul").show();
                return false;
            }
        },
        mounted: function mounted() {
            (0, _jquery2.default)("body").click(function () {
                (0, _jquery2.default)(".selectee ul").hide();
            });
        }
    });

    //岗位选择
    var templPos = '<div class="sel-position" style="display:inline-block;">\
          <dropdown placeholder="一级岗位" :options="posArray1" v-model="selpos1" class="sel-pos-1"></dropdown>\
          <dropdown placeholder="二级岗位" :options="posArray2" v-model="selpos2" class="sel-pos-2"></dropdown>\
          <dropdown placeholder="三级岗位" :options="posArray3" v-model="selpos3" class="sel-pos-3"></dropdown>\
     </div>';

    Vue.component("pos-select", {
        template: templPos,
        props: ["posdata", "initpos"],
        data: function data() {
            var posArray1 = [];
            var posArray2 = [];
            var posArray3 = [];
            var selPos2Array = [];
            for (var i = 0; i < this.posdata.length; i++) {
                posArray1.push(this.posdata[i].name);
            }
            for (var j = 0; j < this.posdata[0].subpos.length; j++) {
                posArray2.push(this.posdata[0].subpos[j].name);
            };
            selPos2Array = this.posdata[0].subpos;
            posArray3 = this.posdata[0].subpos[0].subpos;
            var dataBase = {
                posArray1: posArray1,
                posArray2: posArray2,
                posArray3: posArray3,
                selpos1: "",
                selpos2: "",
                selpos3: "",
                selPos2Array: selPos2Array,
                initFlag: true
            };
            return dataBase;
        },
        watch: {
            "selpos1": function selpos1(curval) {
                var posArray2 = [];
                var posArray3 = [];
                for (var i = 0; i < this.posdata.length; i++) {
                    if (this.posdata[i].name == curval) {
                        this.selPos2Array = this.posdata[i].subpos;
                        for (var j = 0; j < this.posdata[i].subpos.length; j++) {
                            posArray2.push(this.posdata[i].subpos[j].name);
                        };
                        posArray3 = this.posdata[i].subpos[0].subpos;
                        break;
                    }
                }
                this.posArray2 = posArray2;
                if (this.initpos && this.initpos.pos_2 && this.initFlag) {
                    this.selpos2 = this.initpos.pos_2;
                    if (!this.initpos.pos_3) {
                        this.initFlag = false;
                    }
                } else {
                    this.selpos2 = posArray2[0];
                }
            },
            "selpos2": function selpos2(curval) {
                var posArray3 = [];
                for (var i = 0; i < this.selPos2Array.length; i++) {
                    if (this.selPos2Array[i].name == curval) {
                        posArray3 = this.selPos2Array[i].subpos;
                        break;
                    }
                }
                this.posArray3 = posArray3;
                if (this.initpos && this.initpos.pos_3 && this.initFlag) {
                    this.selpos3 = this.initpos.pos_3;
                    this.initFlag = false;
                } else {
                    this.selpos3 = posArray3[0];
                }
            },
            "initpos": function initpos(curval) {
                if (curval) {
                    this.selpos1 = curval.pos_1;
                }
            }
        },
        mounted: function mounted() {
            if (this.initpos) {
                this.selpos1 = this.initpos.pos_1;
            }
        }
    });

    // 地址选择
    var templAddr = '<div>\
          <dropdown placeholder="省份" :options="province" v-model="selProvince" class="sel-province"></dropdown>\
          <dropdown placeholder="城市" :options="city" v-model="selCity" class="sel-city"></dropdown>\
          <dropdown placeholder="区/县" :options="district" v-model="selDistrict" class="sel-district"></dropdown>\
     </div>';
    Vue.component("addr-select", {
        template: templAddr,
        props: ["addrdata", "initaddress"],
        data: function data() {
            var province = [];
            var city = [];
            var district = [];
            var selCityArray = [];
            for (var i = 0; i < this.addrdata.length; i++) {
                province.push(this.addrdata[i].name);
            }
            selCityArray = this.addrdata[0].citys;
            for (var j = 0; j < this.addrdata[0].citys.length; j++) {
                city.push(this.addrdata[0].citys[j].city);
            };
            district = this.addrdata[0].citys[0].conts;
            var dataBase = {
                province: province,
                city: city,
                district: district,
                selProvince: "",
                selCity: "",
                selDistrict: "",
                selCityArray: selCityArray,
                initFlag: true
            };
            return dataBase;
        },
        watch: {
            "selProvince": function selProvince(curval) {
                //  console.log(1);
                var city = [];
                var district = [];
                for (var i = 0; i < this.addrdata.length; i++) {
                    if (this.addrdata[i].name == curval) {
                        this.selCityArray = this.addrdata[i].citys;
                        for (var j = 0; j < this.addrdata[i].citys.length; j++) {
                            city.push(this.addrdata[i].citys[j].city);
                        };
                        district = this.addrdata[i].citys[0].conts;
                        break;
                    }
                }
                this.city = city;
                if (this.initaddress && this.initaddress.city && this.initFlag) {
                    this.selCity = this.initaddress.city;
                    if (!this.initaddress.district) {
                        this.initFlag = false;
                    }
                } else {
                    this.selCity = city[0];
                }
            },
            "selCity": function selCity(curval) {
                var district = [];
                for (var i = 0; i < this.selCityArray.length; i++) {
                    if (this.selCityArray[i].city == curval) {
                        district = this.selCityArray[i].conts;
                        break;
                    }
                }
                this.district = district;
                if (this.initaddress && this.initaddress.district && this.initFlag) {
                    this.selDistrict = this.initaddress.district;
                    this.initFlag = false;
                } else {
                    this.selDistrict = district[0];
                }

                // selectEventBind();
            },
            "initaddress": function initaddress(curval) {
                if (curval && curval.province) {
                    this.selProvince = curval.province;
                }
            }
        },
        mounted: function mounted() {
            if (this.initaddress) {
                this.selProvince = this.initaddress.province;
            };
        }
    });
    //行业选择
    var templArea = '<div style="display:inline-block" class="select-area">\
          <dropdown placeholder="一级行业" :options="workarea" v-model="selArea" class="input-area-1"></dropdown>\
          <dropdown placeholder="二级行业" :options="subarea" v-model="selsubArea" class="input-area-2"></dropdown>\
     </div>';
    Vue.component("area-select", {
        template: templArea,
        props: ["areadata"],
        data: function data() {
            var workarea = [];
            var subarea = [];
            for (var i = 0; i < this.areadata.length; i++) {
                workarea.push(this.areadata[i].title);
            };
            subarea = this.areadata[0].subareas;
            var dataBase = {
                workarea: workarea,
                subarea: subarea,
                selArea: "",
                selsubArea: ""
            };
            return dataBase;
        },
        watch: {
            "selArea": function selArea(curval) {
                for (var i = 0; i < this.areadata.length; i++) {
                    if (this.areadata[i].title == curval) {
                        this.subarea = this.areadata[i].subareas;
                        this.selsubArea = this.subarea[0];
                        break;
                    }
                }
            }
        }
    }
    // 学科选择
    );var templMajor = '<div>\
          <dropdown placeholder="一级专业" :options="major" class="major-input-1" v-model="selMajor"></dropdown>\
          <dropdown placeholder="二级专业" :options="submajor" class="major-input-2" v-model="selsubMajor"></dropdown>\
     </div>';
    Vue.component("major-select", {
        template: templMajor,
        props: ["majordata"],
        data: function data() {
            var major = [];
            var submajor = [];
            for (var i = 0; i < this.majordata.length; i++) {
                major.push(this.majordata[i].major);
            };
            submajor = this.majordata[0].submajor;
            var dataBase = {
                major: major,
                submajor: submajor,
                selMajor: "",
                selsubMajor: ""
            };
            return dataBase;
        },
        watch: {
            "selMajor": function selMajor(curval) {
                for (var i = 0; i < this.majordata.length; i++) {
                    if (this.majordata[i].major == curval) {
                        this.submajor = this.majordata[i].submajor;
                        this.selsubMajor = this.submajor[0];
                        break;
                    }
                }
                if (curval == "不限" && this.selsubMajor == "不限") {
                    this.$emit('callback', this.selMajor, this.selsubMajor);
                }
            },
            "selsubMajor": function selsubMajor(curval) {
                this.$emit('callback', this.selMajor, this.selsubMajor);
            }
        }
    }
    // 选择下拉框定位
    );function selectInitPos() {
        (0, _jquery2.default)(".selectee:visible ul").each(function () {
            if (!this.initFlag) {
                var sibInput = (0, _jquery2.default)(this).siblings("input");
                var parentObj = (0, _jquery2.default)(this).parent(".selectee");
                // console.log(sibInput.height());
                (0, _jquery2.default)(this).width(sibInput.outerWidth() - 2); //2 为边框
                (0, _jquery2.default)(this).css({
                    left: sibInput.offset().left - parentObj.offset().left + "px",
                    top: sibInput.height() + "px"
                });
                this.initFlag = true;
            }
        });
        (0, _jquery2.default)("body").click(function () {
            (0, _jquery2.default)(".selectee ul").hide();
        });
    }

    function selectInitInput() {
        (0, _jquery2.default)(".selectee input").each(function () {
            //     console.log($(this).width());
            if (!this.initFlag) {
                (0, _jquery2.default)(this).width((0, _jquery2.default)(this).width() - 20);
                (0, _jquery2.default)(this).css("padding-right", 20 + "px");
                var bgPos = (0, _jquery2.default)(this).width() + 10 + "px center";
                (0, _jquery2.default)(this).css("background-position", bgPos);
                this.initFlag = true;
            }
        });
    }
    window.selectInitInput = selectInitInput;
    window.selectInitPos = selectInitPos;
})();

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABGCAYAAAANSP5dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NTQ2NzgzMS1iODgzLTQ1YjQtYjJhZC00ODY1ZTMxOWJjNWQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjFCQjAwRTdCNjQ5MTFFNkEwQkU5RUNBQkM2NERCOTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjFCQjAwRTZCNjQ5MTFFNkEwQkU5RUNBQkM2NERCOTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNDNlNDQ3MC1jZDM2LTRjNTYtYjc4Ni02NGY5ZTA5ZTgxZGMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTU0Njc4MzEtYjg4My00NWI0LWIyYWQtNDg2NWUzMTliYzVkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+joCg/gAAAK1JREFUeNpU0D0KwkAQhuGNWCSlEFCwUNAjeICA4k9nL2jrRWz1AoLeIJBGwSO42FiJhaCojYVpksIQ9J1iwOZhdmBmdz/HWhsWjDE9uEANDtpbwASO0IQbdGHs/BakVE/wQI4B9GEOLygqQyjDGmLIoSRL4Q4b+EAGPkxhD1tw4Q11mMESdlCFBzRgxXNdnW3BVWcjGIFE0oGTfloiGfxHctY7JJK2xlSB5CvAALNyK7bN3iXBAAAAAElFTkSuQmCC"

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(1);
(function () {
    var tem = '<div class="pagination">' + '<ul>' + '<li @click="controlPage(1)"><a class="lastPage" :class="{darkLight: curPage === 1}">首页</a></li>' + '<li @click="controlPage(curPage-1)"><a class="lastPage" :class="{darkLight: curPage === 1}">上一页</a></li>' + '<li v-for="page in pages" @click="controlPage(page)">' + '<a class="page" :class="{highLight: curPage === page}" >{{ page }}</a>' + '</li>' + '<li @click="controlPage(curPage+1)"><a :class="{darkLight: curPage === totalpages}" class="nextPage">下一页</a></li>' + '<li @click="controlPage(totalpages)"><a :class="{darkLight: curPage === totalpages}" class="nextPage">尾页</a></li>' + '</ul>' + '</div>';
    var pagination = Vue.extend({
        template: tem,
        props: {
            showpages: { //要显示的页码数
                type: Number,
                default: 5,
                required: true
            },
            totalpages: {
                type: Number,
                default: 20,
                required: true
            },
            type: {
                default: ""
            }
        },
        data: function data() {
            return {
                curPage: 1
            };
        },
        computed: {
            'pages': function pages() {
                var left = 1;
                var right = this.totalpages;
                var movePoint = Math.ceil(this.showpages / 2);
                var pages = [];
                if (this.curPage > movePoint && this.curPage < this.totalpages - movePoint + 1) {
                    left = this.showpages % 2 === 0 ? this.curPage - movePoint : this.curPage - movePoint + 1;
                    right = this.curPage + movePoint - 1;
                } else if (this.curPage <= movePoint) {
                    left = 1;
                    right = this.showpages;
                } else {
                    left = this.totalpages - this.showpages + 1;
                    right = this.totalpages;
                }

                while (left <= right) {
                    pages.push(left);
                    left++;
                }
                return pages;
            }
        },
        methods: {
            controlPage: function controlPage(page) {
                if (page > this.totalpages) {
                    return false;
                } else if (page < 1) {
                    return false;
                }
                if (this.curPage != page) {
                    this.curPage = page;
                };
                this.$emit('topage', page, this.type);
            }
        }
    });
    window.pagination = pagination;
})();

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(1);
(function () {
    var footerTempl = '<div class="inner clearfix common-footer">\
            <div class="fl">\
                <ul class="lis-inline footer-nav">\
                    <li @click="homeLink"><a href="javascript:void(0)">校企首页</a>-</li>\
                    <li @click="footerLink(\'descript\')"><a href="javascript:void(0)">关于校企</a>-</li>\
                    <li @click="footerLink(\'coop\')"><a href="javascript:void(0)">网站合作</a>-</li>\
                    <li @click="footerLink(\'help\')"><a href="javascript:void(0)">帮助中心</a>-</li>\
                    <li @click="footerLink(\'employ\')"><a href="javascript:void(0)">招贤纳士</a>-</li>\
                    <li @click="footerLink(\'friend\')"><a href="javascript:void(0)">友情链接</a>-</li>\
                    <li @click="footerLink(\'descript\')"><a href="javascript:void(0)">教育网</a></li>\
                </ul>\
                <ul class="lis-inline footer-contact">\
                    <li><i class="pic-icon icon-phone"></i>电话：0571-28277417-818</li>\
                    <li><i class="pic-icon icon-address"></i>杭州市滨江区六合路368号海创基地北三楼B3077</li>\
                    <li><i class="pic-icon icon-email"></i>邮箱：market@xiaoqiztc.com</li>\
                </ul>\
                <p class="footer-rights">校企职通车版权所有©2017XIAOQI 浙ICP备17007975号-2 浙公网安备3481464号</p>\
            </div>\
            <div class="fr footer-barcode">\
                <p class="barcode-text">关注我们</p>\
                <div class="pic-wrapper">\
                    <img src="images/barcode.png" />\
                </div>\
            </div>\
        </div>';

    Vue.component("common-footer", {
        template: footerTempl,
        props: ["userid"],
        methods: {
            homeLink: function homeLink() {
                var link = "index.html?";
                if (this.userid) {
                    link += "userId=" + this.userid;
                };
                window.location.href = EventUtils.securityUrl(link);
            },
            footerLink: function footerLink(type) {
                var link = "footer-page.html?theme=" + type;
                if (this.userid) {
                    link += "&userId=" + this.userid;
                }
                link = EventUtils.securityUrl(link);
                window.location.href = link;
            }
        }
    });
})();

/***/ })

/******/ });