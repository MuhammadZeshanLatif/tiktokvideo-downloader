import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { Link, Routes, Route, Navigate, MemoryRouter } from "react-router-dom";
import React, { useId, useState, useRef, useMemo, useEffect } from "react";
function _arrayLikeToArray(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++) n2[e2] = r2[e2];
  return n2;
}
function _arrayWithHoles(r2) {
  if (Array.isArray(r2)) return r2;
}
function _arrayWithoutHoles(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray(r2);
}
function _classCallCheck(a2, n2) {
  if (!(a2 instanceof n2)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e2, r2) {
  for (var t2 = 0; t2 < r2.length; t2++) {
    var o2 = r2[t2];
    o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, _toPropertyKey(o2.key), o2);
  }
}
function _createClass(e2, r2, t2) {
  return r2 && _defineProperties(e2.prototype, r2), Object.defineProperty(e2, "prototype", {
    writable: false
  }), e2;
}
function _createForOfIteratorHelper(r2, e2) {
  var t2 = "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (!t2) {
    if (Array.isArray(r2) || (t2 = _unsupportedIterableToArray(r2)) || e2) {
      t2 && (r2 = t2);
      var n2 = 0, F2 = function() {
      };
      return {
        s: F2,
        n: function() {
          return n2 >= r2.length ? {
            done: true
          } : {
            done: false,
            value: r2[n2++]
          };
        },
        e: function(r3) {
          throw r3;
        },
        f: F2
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o2, a2 = true, u2 = false;
  return {
    s: function() {
      t2 = t2.call(r2);
    },
    n: function() {
      var r3 = t2.next();
      return a2 = r3.done, r3;
    },
    e: function(r3) {
      u2 = true, o2 = r3;
    },
    f: function() {
      try {
        a2 || null == t2.return || t2.return();
      } finally {
        if (u2) throw o2;
      }
    }
  };
}
function _defineProperty(e2, r2, t2) {
  return (r2 = _toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
function _iterableToArray(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _iterableToArrayLimit(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l2) {
        if (Object(t2) !== t2) return;
        f2 = false;
      } else for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2.return && (u2 = t2.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a2;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _slicedToArray(r2, e2) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
}
function _toConsumableArray(r2) {
  return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
}
function _toPrimitive(t2, r2) {
  if ("object" != typeof t2 || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function _unsupportedIterableToArray(r2, a2) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a2) : void 0;
  }
}
var noop = function noop2() {
};
var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== "undefined") _WINDOW = window;
  if (typeof document !== "undefined") _DOCUMENT = document;
  if (typeof MutationObserver !== "undefined") _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== "undefined") _PERFORMANCE = performance;
} catch (e2) {
}
var _ref = _WINDOW.navigator || {}, _ref$userAgent = _ref.userAgent, userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
!!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
var _ht;
var G = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, M = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;
var Q = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  },
  slab: {
    "fa-regular": "regular",
    faslr: "regular"
  },
  "slab-press": {
    "fa-regular": "regular",
    faslpr: "regular"
  },
  thumbprint: {
    "fa-light": "light",
    fatl: "light"
  },
  whiteboard: {
    "fa-semibold": "semibold",
    fawsb: "semibold"
  },
  notdog: {
    "fa-solid": "solid",
    fans: "solid"
  },
  "notdog-duo": {
    "fa-solid": "solid",
    fands: "solid"
  },
  etch: {
    "fa-solid": "solid",
    faes: "solid"
  },
  graphite: {
    "fa-thin": "thin",
    fagt: "thin"
  },
  jelly: {
    "fa-regular": "regular",
    fajr: "regular"
  },
  "jelly-fill": {
    "fa-regular": "regular",
    fajfr: "regular"
  },
  "jelly-duo": {
    "fa-regular": "regular",
    fajdr: "regular"
  },
  chisel: {
    "fa-regular": "regular",
    facr: "regular"
  },
  utility: {
    "fa-semibold": "semibold",
    fausb: "semibold"
  },
  "utility-duo": {
    "fa-semibold": "semibold",
    faudsb: "semibold"
  },
  "utility-fill": {
    "fa-semibold": "semibold",
    faufsb: "semibold"
  }
}, X = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Z = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"];
var i = "classic", t$4 = "duotone", d = "sharp", l = "sharp-duotone", f = "chisel", h = "etch", n = "graphite", g = "jelly", o = "jelly-duo", u = "jelly-fill", m = "notdog", e = "notdog-duo", y = "slab", p = "slab-press", s = "thumbprint", w = "utility", a = "utility-duo", x = "utility-fill", b = "whiteboard", c = "Classic", I = "Duotone", F = "Sharp", v = "Sharp Duotone", S = "Chisel", A = "Etch", P = "Graphite", j = "Jelly", B = "Jelly Duo", N = "Jelly Fill", k = "Notdog", D = "Notdog Duo", T = "Slab", C = "Slab Press", W = "Thumbprint", K = "Utility", R = "Utility Duo", L = "Utility Fill", U = "Whiteboard", dt = [i, t$4, d, l, f, h, n, g, o, u, m, e, y, p, s, w, a, x, b];
_ht = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ht, i, c), t$4, I), d, F), l, v), f, S), h, A), n, P), g, j), o, B), u, N), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ht, m, k), e, D), y, T), p, C), s, W), w, K), a, R), x, L), b, U);
var yt = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  slab: {
    400: "faslr"
  },
  "slab-press": {
    400: "faslpr"
  },
  whiteboard: {
    600: "fawsb"
  },
  thumbprint: {
    300: "fatl"
  },
  notdog: {
    900: "fans"
  },
  "notdog-duo": {
    900: "fands"
  },
  etch: {
    900: "faes"
  },
  graphite: {
    100: "fagt"
  },
  chisel: {
    400: "facr"
  },
  jelly: {
    400: "fajr"
  },
  "jelly-fill": {
    400: "fajfr"
  },
  "jelly-duo": {
    400: "fajdr"
  },
  utility: {
    600: "fausb"
  },
  "utility-duo": {
    600: "faudsb"
  },
  "utility-fill": {
    600: "faufsb"
  }
};
var Kt = {
  "Font Awesome 7 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 7 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 7 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 7 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 7 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 7 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  "Font Awesome 7 Jelly": {
    400: "fajr",
    normal: "fajr"
  },
  "Font Awesome 7 Jelly Fill": {
    400: "fajfr",
    normal: "fajfr"
  },
  "Font Awesome 7 Jelly Duo": {
    400: "fajdr",
    normal: "fajdr"
  },
  "Font Awesome 7 Slab": {
    400: "faslr",
    normal: "faslr"
  },
  "Font Awesome 7 Slab Press": {
    400: "faslpr",
    normal: "faslpr"
  },
  "Font Awesome 7 Thumbprint": {
    300: "fatl",
    normal: "fatl"
  },
  "Font Awesome 7 Notdog": {
    900: "fans",
    normal: "fans"
  },
  "Font Awesome 7 Notdog Duo": {
    900: "fands",
    normal: "fands"
  },
  "Font Awesome 7 Etch": {
    900: "faes",
    normal: "faes"
  },
  "Font Awesome 7 Graphite": {
    100: "fagt",
    normal: "fagt"
  },
  "Font Awesome 7 Chisel": {
    400: "facr",
    normal: "facr"
  },
  "Font Awesome 7 Whiteboard": {
    600: "fawsb",
    normal: "fawsb"
  },
  "Font Awesome 7 Utility": {
    600: "fausb",
    normal: "fausb"
  },
  "Font Awesome 7 Utility Duo": {
    600: "faudsb",
    normal: "faudsb"
  },
  "Font Awesome 7 Utility Fill": {
    600: "faufsb",
    normal: "faufsb"
  }
};
var Et = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["chisel", {
  defaultShortPrefixId: "facr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["etch", {
  defaultShortPrefixId: "faes",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["graphite", {
  defaultShortPrefixId: "fagt",
  defaultStyleId: "thin",
  styleIds: ["thin"],
  futureStyleIds: [],
  defaultFontWeight: 100
}], ["jelly", {
  defaultShortPrefixId: "fajr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-duo", {
  defaultShortPrefixId: "fajdr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-fill", {
  defaultShortPrefixId: "fajfr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["notdog", {
  defaultShortPrefixId: "fans",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["notdog-duo", {
  defaultShortPrefixId: "fands",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["slab", {
  defaultShortPrefixId: "faslr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["slab-press", {
  defaultShortPrefixId: "faslpr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["thumbprint", {
  defaultShortPrefixId: "fatl",
  defaultStyleId: "light",
  styleIds: ["light"],
  futureStyleIds: [],
  defaultFontWeight: 300
}], ["utility", {
  defaultShortPrefixId: "fausb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-duo", {
  defaultShortPrefixId: "faudsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-fill", {
  defaultShortPrefixId: "faufsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["whiteboard", {
  defaultShortPrefixId: "fawsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}]]), Mt = {
  chisel: {
    regular: "facr"
  },
  classic: {
    brands: "fab",
    light: "fal",
    regular: "far",
    solid: "fas",
    thin: "fat"
  },
  duotone: {
    light: "fadl",
    regular: "fadr",
    solid: "fad",
    thin: "fadt"
  },
  etch: {
    solid: "faes"
  },
  graphite: {
    thin: "fagt"
  },
  jelly: {
    regular: "fajr"
  },
  "jelly-duo": {
    regular: "fajdr"
  },
  "jelly-fill": {
    regular: "fajfr"
  },
  notdog: {
    solid: "fans"
  },
  "notdog-duo": {
    solid: "fands"
  },
  sharp: {
    light: "fasl",
    regular: "fasr",
    solid: "fass",
    thin: "fast"
  },
  "sharp-duotone": {
    light: "fasdl",
    regular: "fasdr",
    solid: "fasds",
    thin: "fasdt"
  },
  slab: {
    regular: "faslr"
  },
  "slab-press": {
    regular: "faslpr"
  },
  thumbprint: {
    light: "fatl"
  },
  utility: {
    semibold: "fausb"
  },
  "utility-duo": {
    semibold: "faudsb"
  },
  "utility-fill": {
    semibold: "faufsb"
  },
  whiteboard: {
    semibold: "fawsb"
  }
};
var Ht = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Qt = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Xt = ["kit"];
var J = "kit", r = "kit-duotone", E = "Kit", _ = "Kit Duotone";
_defineProperty(_defineProperty({}, J, E), r, _);
var sl = {
  kit: {
    "fa-kit": "fak"
  }
};
var hl = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, nl = {
  kit: {
    fak: "fa-kit"
  }
};
var ml = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
var _wt;
var t$1$1 = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, f$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"];
var h$1 = "classic", o$1 = "duotone", n$1 = "sharp", s$1 = "sharp-duotone", u$1 = "chisel", g$1 = "etch", y$1 = "graphite", m$1 = "jelly", a$1 = "jelly-duo", p$1 = "jelly-fill", w$1 = "notdog", e$1 = "notdog-duo", b$1 = "slab", c$1 = "slab-press", r$1 = "thumbprint", x$1 = "utility", i$1 = "utility-duo", I$1 = "utility-fill", F$1 = "whiteboard", v$1 = "Classic", S$1 = "Duotone", A$1 = "Sharp", P$1 = "Sharp Duotone", j$1 = "Chisel", B$1 = "Etch", N$1 = "Graphite", k$1 = "Jelly", D$1 = "Jelly Duo", C$1 = "Jelly Fill", T$1 = "Notdog", L$1 = "Notdog Duo", W$1 = "Slab", R$1 = "Slab Press", K$1 = "Thumbprint", U$1 = "Utility", J$1 = "Utility Duo", E$1 = "Utility Fill", _$1 = "Whiteboard";
_wt = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_wt, h$1, v$1), o$1, S$1), n$1, A$1), s$1, P$1), u$1, j$1), g$1, B$1), y$1, N$1), m$1, k$1), a$1, D$1), p$1, C$1), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_wt, w$1, T$1), e$1, L$1), b$1, W$1), c$1, R$1), r$1, K$1), x$1, U$1), i$1, J$1), I$1, E$1), F$1, _$1);
var G$1 = "kit", d$1 = "kit-duotone", M$1 = "Kit", O = "Kit Duotone";
_defineProperty(_defineProperty({}, G$1, M$1), d$1, O);
var Hl = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  },
  slab: {
    "fa-regular": "faslr"
  },
  "slab-press": {
    "fa-regular": "faslpr"
  },
  whiteboard: {
    "fa-semibold": "fawsb"
  },
  thumbprint: {
    "fa-light": "fatl"
  },
  notdog: {
    "fa-solid": "fans"
  },
  "notdog-duo": {
    "fa-solid": "fands"
  },
  etch: {
    "fa-solid": "faes"
  },
  graphite: {
    "fa-thin": "fagt"
  },
  jelly: {
    "fa-regular": "fajr"
  },
  "jelly-fill": {
    "fa-regular": "fajfr"
  },
  "jelly-duo": {
    "fa-regular": "fajdr"
  },
  chisel: {
    "fa-regular": "facr"
  },
  utility: {
    "fa-semibold": "fausb"
  },
  "utility-duo": {
    "fa-semibold": "faudsb"
  },
  "utility-fill": {
    "fa-semibold": "faufsb"
  }
}, Y$1 = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  slab: ["faslr"],
  "slab-press": ["faslpr"],
  whiteboard: ["fawsb"],
  thumbprint: ["fatl"],
  notdog: ["fans"],
  "notdog-duo": ["fands"],
  etch: ["faes"],
  graphite: ["fagt"],
  jelly: ["fajr"],
  "jelly-fill": ["fajfr"],
  "jelly-duo": ["fajdr"],
  chisel: ["facr"],
  utility: ["fausb"],
  "utility-duo": ["faudsb"],
  "utility-fill": ["faufsb"]
}, Xl = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  },
  slab: {
    faslr: "fa-regular"
  },
  "slab-press": {
    faslpr: "fa-regular"
  },
  whiteboard: {
    fawsb: "fa-semibold"
  },
  thumbprint: {
    fatl: "fa-light"
  },
  notdog: {
    fans: "fa-solid"
  },
  "notdog-duo": {
    fands: "fa-solid"
  },
  etch: {
    faes: "fa-solid"
  },
  graphite: {
    fagt: "fa-thin"
  },
  jelly: {
    fajr: "fa-regular"
  },
  "jelly-fill": {
    fajfr: "fa-regular"
  },
  "jelly-duo": {
    fajdr: "fa-regular"
  },
  chisel: {
    facr: "fa-regular"
  },
  utility: {
    fausb: "fa-semibold"
  },
  "utility-duo": {
    faudsb: "fa-semibold"
  },
  "utility-fill": {
    faufsb: "fa-semibold"
  }
}, V$1 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"], lo = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(f$1, V$1), $ = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], z$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], q$1 = z$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), H$1 = ["aw", "fw", "pull-left", "pull-right"], so = [].concat(_toConsumableArray(Object.keys(Y$1)), $, H$1, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", t$1$1.GROUP, t$1$1.SWAP_OPACITY, t$1$1.PRIMARY, t$1$1.SECONDARY]).concat(z$1.map(function(l2) {
  return "".concat(l2, "x");
})).concat(q$1.map(function(l2) {
  return "w-".concat(l2);
}));
var fo = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = "fa";
var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
var DATA_FA_I2SVG = "data-fa-i2svg";
var DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
var DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
var DATA_PREFIX = "data-prefix";
var DATA_ICON = "data-icon";
var HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
var MUTATION_APPROACH_ASYNC = "async";
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
var PSEUDO_ELEMENTS = ["::before", "::after", ":before", ":after"];
var PRODUCTION = (function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch (e$$1) {
    return false;
  }
})();
function familyProxy(obj) {
  return new Proxy(obj, {
    get: function get2(target, prop) {
      return prop in target ? target[prop] : target[i];
    }
  });
}
var _PREFIX_TO_STYLE = _objectSpread2({}, Q);
_PREFIX_TO_STYLE[i] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  "fa-duotone": "duotone"
}), Q[i]), Qt["kit"]), Qt["kit-duotone"]);
var PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
var _STYLE_TO_PREFIX = _objectSpread2({}, Mt);
_STYLE_TO_PREFIX[i] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  duotone: "fad"
}), _STYLE_TO_PREFIX[i]), ml["kit"]), ml["kit-duotone"]);
var STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
var _PREFIX_TO_LONG_STYLE = _objectSpread2({}, Xl);
_PREFIX_TO_LONG_STYLE[i] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[i]), nl["kit"]);
var PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
var _LONG_STYLE_TO_PREFIX = _objectSpread2({}, Hl);
_LONG_STYLE_TO_PREFIX[i] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[i]), sl["kit"]);
familyProxy(_LONG_STYLE_TO_PREFIX);
var ICON_SELECTION_SYNTAX_PATTERN = G;
var LAYERS_TEXT_CLASSNAME = "fa-layers-text";
var FONT_FAMILY_PATTERN = M;
var _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, yt);
familyProxy(_FONT_WEIGHT_TO_PREFIX);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
var DUOTONE_CLASSES = X;
var RESERVED_CLASSES = [].concat(_toConsumableArray(Xt), _toConsumableArray(so));
var initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector("script[" + attr + "]");
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  if (val === "") return true;
  if (val === "false") return false;
  if (val === "true") return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
  var attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  attrs.forEach(function(_ref2) {
    var _ref22 = _slicedToArray(_ref2, 2), attr = _ref22[0], key = _ref22[1];
    var val = coerce(getAttrConfig(attr));
    if (val !== void 0 && val !== null) {
      initial[key] = val;
    }
  });
}
var _default = {
  styleDefault: "solid",
  familyDefault: i,
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  searchPseudoElements: false,
  searchPseudoElementsWarnings: true,
  searchPseudoElementsFullScan: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}
var _config = _objectSpread2(_objectSpread2({}, _default), initial);
if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach(function(key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set2(val) {
      _config[key] = val;
      _onChangeCb.forEach(function(cb) {
        return cb(config);
      });
    },
    get: function get2() {
      return _config[key];
    }
  });
});
Object.defineProperty(config, "familyPrefix", {
  enumerable: true,
  set: function set(val) {
    _config.cssPrefix = val;
    _onChangeCb.forEach(function(cb) {
      return cb(config);
    });
  },
  get: function get() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);
  return function() {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}
var d$2 = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css2) {
  if (!css2 || !IS_DOM) {
    return;
  }
  var style = DOCUMENT.createElement("style");
  style.setAttribute("type", "text/css");
  style.innerHTML = css2;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;
  for (var i2 = headChildren.length - 1; i2 > -1; i2--) {
    var child = headChildren[i2];
    var tagName = (child.tagName || "").toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css2;
}
var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nextUniqueId() {
  var size = 12;
  var id = "";
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray(obj) {
  var array = [];
  for (var i2 = (obj || []).length >>> 0; i2--; ) {
    array[i2] = obj[i2];
  }
  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute("class") || "").split(" ").filter(function(i2) {
      return i2;
    });
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
    return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
  }, "").trim();
}
function joinStyles(styles2) {
  return Object.keys(styles2 || {}).reduce(function(acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles2[styleName].trim(), ";");
  }, "");
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref2) {
  var transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform, _ref2$width = _ref2.width, width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width, _ref2$height = _ref2.height, height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height;
  var val = "";
  if (IS_IE) {
    val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
  } else {
    val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
  }
  val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}
var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
function css() {
  var dcp = DEFAULT_CSS_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.cssPrefix;
  var rc = config.replacementClass;
  var s2 = baseStyles;
  if (fp !== dcp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
    var rPatt = new RegExp("\\.".concat(drc), "g");
    s2 = s2.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s2;
}
var _cssInserted = false;
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};
var w$2 = WINDOW || {};
if (!w$2[NAMESPACE_IDENTIFIER]) w$2[NAMESPACE_IDENTIFIER] = {};
if (!w$2[NAMESPACE_IDENTIFIER].styles) w$2[NAMESPACE_IDENTIFIER].styles = {};
if (!w$2[NAMESPACE_IDENTIFIER].hooks) w$2[NAMESPACE_IDENTIFIER].hooks = {};
if (!w$2[NAMESPACE_IDENTIFIER].shims) w$2[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w$2[NAMESPACE_IDENTIFIER];
var functions = [];
var _listener = function listener() {
  DOCUMENT.removeEventListener("DOMContentLoaded", _listener);
  loaded = 1;
  functions.map(function(fn) {
    return fn();
  });
};
var loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener("DOMContentLoaded", _listener);
}
function domready(fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}
function toHtml(abstractNodes) {
  var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
  if (typeof abstractNodes === "string") {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
  }
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix,
      iconName,
      icon: mapping[prefix][iconName]
    };
  }
}
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject), length = keys.length, iterator = fn, i2, key, result;
  if (initialValue === void 0) {
    i2 = 1;
    result = subject[keys[0]];
  } else {
    i2 = 0;
    result = initialValue;
  }
  for (; i2 < length; i2++) {
    key = keys[i2];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};
function toHex(unicode) {
  if (_toConsumableArray(unicode).length !== 1) return null;
  return unicode.codePointAt(0).toString(16);
}
function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function(acc, iconName) {
    var icon3 = icons[iconName];
    var expanded = !!icon3.icon;
    if (expanded) {
      acc[icon3.iconName] = icon3.icon;
    } else {
      acc[iconName] = icon3;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }
  if (prefix === "fas") {
    defineIcons("fa", icons);
  }
}
var styles = namespace.styles, shims = namespace.shims;
var FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
var PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce(function(acc, familyId) {
  acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
  return acc;
}, {});
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  var parts = cls.split("-");
  var prefix = parts[0];
  var iconName = parts.slice(1).join("-");
  if (prefix === cssPrefix && iconName !== "" && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = function build2() {
  var lookup = function lookup2(reducer) {
    return reduce(styles, function(o$$1, style, prefix) {
      o$$1[prefix] = reduce(style, reducer, {});
      return o$$1;
    }, {});
  };
  _byUnicode = lookup(function(acc, icon3, iconName) {
    if (icon3[3]) {
      acc[icon3[3]] = iconName;
    }
    if (icon3[2]) {
      var aliases = icon3[2].filter(function(a$$1) {
        return typeof a$$1 === "number";
      });
      aliases.forEach(function(alias) {
        acc[alias.toString(16)] = iconName;
      });
    }
    return acc;
  });
  _byLigature = lookup(function(acc, icon3, iconName) {
    acc[iconName] = iconName;
    if (icon3[2]) {
      var aliases = icon3[2].filter(function(a$$1) {
        return typeof a$$1 === "string";
      });
      aliases.forEach(function(alias) {
        acc[alias] = iconName;
      });
    }
    return acc;
  });
  _byAlias = lookup(function(acc, icon3, iconName) {
    var aliases = icon3[2];
    acc[iconName] = iconName;
    aliases.forEach(function(alias) {
      acc[alias] = iconName;
    });
    return acc;
  });
  var hasRegular = "far" in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function(acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];
    if (prefix === "far" && !hasRegular) {
      prefix = "fas";
    }
    if (typeof maybeNameMaybeUnicode === "string") {
      acc.names[maybeNameMaybeUnicode] = {
        prefix,
        iconName
      };
    }
    if (typeof maybeNameMaybeUnicode === "number") {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix,
        iconName
      };
    }
    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(function(c$$1) {
  _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode("fas", unicode);
  return oldUnicode || (newUnicode ? {
    prefix: "fas",
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = function emptyCanonicalIcon2() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getFamilyId(values) {
  var family = i;
  var famProps = FAMILY_NAMES.reduce(function(acc, familyId) {
    acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId);
    return acc;
  }, {});
  dt.forEach(function(familyId) {
    if (values.includes(famProps[familyId]) || values.some(function(v$$1) {
      return PREFIXES_FOR_FAMILY[familyId].includes(v$$1);
    })) {
      family = familyId;
    }
  });
  return family;
}
function getCanonicalPrefix(styleOrPrefix) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$family = params.family, family = _params$family === void 0 ? i : _params$family;
  var style = PREFIX_TO_STYLE[family][styleOrPrefix];
  if (family === t$4 && !styleOrPrefix) {
    return "fad";
  }
  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  var result = prefix || defined || null;
  return result;
}
function moveNonFaClassesToRest(classNames) {
  var rest = [];
  var iconName = null;
  classNames.forEach(function(cls) {
    var result = getIconName(config.cssPrefix, cls);
    if (result) {
      iconName = result;
    } else if (cls) {
      rest.push(cls);
    }
  });
  return {
    iconName,
    rest
  };
}
function sortedUniqueValues(arr) {
  return arr.sort().filter(function(value, index, arr2) {
    return arr2.indexOf(value) === index;
  });
}
var _faCombinedClasses = lo.concat(Ht);
function getCanonicalIcon(values) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups, skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var givenPrefix = null;
  var faStyleOrFamilyClasses = sortedUniqueValues(values.filter(function(cls) {
    return _faCombinedClasses.includes(cls);
  }));
  var nonStyleOrFamilyClasses = sortedUniqueValues(values.filter(function(cls) {
    return !_faCombinedClasses.includes(cls);
  }));
  var faStyles = faStyleOrFamilyClasses.filter(function(cls) {
    givenPrefix = cls;
    return !Z.includes(cls);
  });
  var _faStyles = _slicedToArray(faStyles, 1), _faStyles$ = _faStyles[0], styleFromValues = _faStyles$ === void 0 ? null : _faStyles$;
  var family = getFamilyId(faStyleOrFamilyClasses);
  var canonical = _objectSpread2(_objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, {
    prefix: getCanonicalPrefix(styleFromValues, {
      family
    })
  });
  return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), getDefaultCanonicalPrefix({
    values,
    family,
    styles,
    config,
    canonical,
    givenPrefix
  })), applyShimAndAlias(skipLookups, givenPrefix, canonical));
}
function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
  var prefix = canonical.prefix, iconName = canonical.iconName;
  if (skipLookups || !prefix || !iconName) {
    return {
      prefix,
      iconName
    };
  }
  var shim = givenPrefix === "fa" ? byOldName(iconName) : {};
  var aliasIconName = byAlias(prefix, iconName);
  iconName = shim.iconName || aliasIconName || iconName;
  prefix = shim.prefix || prefix;
  if (prefix === "far" && !styles["far"] && styles["fas"] && !config.autoFetchSvg) {
    prefix = "fas";
  }
  return {
    prefix,
    iconName
  };
}
var newCanonicalFamilies = dt.filter(function(familyId) {
  return familyId !== i || familyId !== t$4;
});
var newCanonicalStyles = Object.keys(Xl).filter(function(key) {
  return key !== i;
}).map(function(key) {
  return Object.keys(Xl[key]);
}).flat();
function getDefaultCanonicalPrefix(prefixOptions) {
  var values = prefixOptions.values, family = prefixOptions.family, canonical = prefixOptions.canonical, _prefixOptions$givenP = prefixOptions.givenPrefix, givenPrefix = _prefixOptions$givenP === void 0 ? "" : _prefixOptions$givenP, _prefixOptions$styles = prefixOptions.styles, styles2 = _prefixOptions$styles === void 0 ? {} : _prefixOptions$styles, _prefixOptions$config = prefixOptions.config, config$$1 = _prefixOptions$config === void 0 ? {} : _prefixOptions$config;
  var isDuotoneFamily = family === t$4;
  var valuesHasDuotone = values.includes("fa-duotone") || values.includes("fad");
  var defaultFamilyIsDuotone = config$$1.familyDefault === "duotone";
  var canonicalPrefixIsDuotone = canonical.prefix === "fad" || canonical.prefix === "fa-duotone";
  if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) {
    canonical.prefix = "fad";
  }
  if (values.includes("fa-brands") || values.includes("fab")) {
    canonical.prefix = "fab";
  }
  if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
    var validPrefix = Object.keys(styles2).find(function(key) {
      return newCanonicalStyles.includes(key);
    });
    if (validPrefix || config$$1.autoFetchSvg) {
      var defaultPrefix = Et.get(family).defaultShortPrefixId;
      canonical.prefix = defaultPrefix;
      canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }
  }
  if (canonical.prefix === "fa" || givenPrefix === "fa") {
    canonical.prefix = getDefaultUsablePrefix() || "fas";
  }
  return canonical;
}
var Library = /* @__PURE__ */ (function() {
  function Library2() {
    _classCallCheck(this, Library2);
    this.definitions = {};
  }
  return _createClass(Library2, [{
    key: "add",
    value: function add() {
      var _this = this;
      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }
      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function(key) {
        _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]);
        var longPrefix = PREFIX_TO_LONG_STYLE[i][key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function(key) {
        var _normalized$key = normalized[key], prefix = _normalized$key.prefix, iconName = _normalized$key.iconName, icon3 = _normalized$key.icon;
        var aliases = icon3[2];
        if (!additions[prefix]) additions[prefix] = {};
        if (aliases.length > 0) {
          aliases.forEach(function(alias) {
            if (typeof alias === "string") {
              additions[prefix][alias] = icon3;
            }
          });
        }
        additions[prefix][iconName] = icon3;
      });
      return additions;
    }
  }]);
})();
var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref2) {
  var obj = _ref2.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function(k2) {
    if (defaultProviderKeys.indexOf(k2) === -1) {
      delete providers[k2];
    }
  });
  _plugins.forEach(function(plugin) {
    var mixout8 = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout8).forEach(function(tk) {
      if (typeof mixout8[tk] === "function") {
        obj[tk] = mixout8[tk];
      }
      if (_typeof(mixout8[tk]) === "object") {
        Object.keys(mixout8[tk]).forEach(function(sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout8[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      var hooks8 = plugin.hooks();
      Object.keys(hooks8).forEach(function(hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks8[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function(hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args));
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function(hookFn) {
    hookFn.apply(null, args);
  });
  return void 0;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : void 0;
}
function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === "fa") {
    iconLookup.prefix = "fas";
  }
  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = function noAuto2() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks("noAuto");
};
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (IS_DOM) {
      callHooks("beforeI2svg", params);
      callProvided("pseudoElements2svg", params);
      return callProvided("i2svg", params);
    } else {
      return Promise.reject(new Error("Operation requires a DOM of some kind."));
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }
    config.observeMutations = true;
    domready(function() {
      autoReplace({
        autoReplaceSvgRoot
      });
      callHooks("watch", params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }
    if (_typeof(_icon) === "object" && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }
    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf("fa-") === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }
    if (typeof _icon === "string" && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(" "), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }
    if (typeof _icon === "string") {
      var _prefix = getDefaultUsablePrefix();
      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto,
  config,
  dom,
  parse,
  library,
  findIconDefinition,
  toHtml
};
var autoReplace = function autoReplace2() {
  var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot, autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};
function domVariants(val, abstractCreator) {
  Object.defineProperty(val, "abstract", {
    get: abstractCreator
  });
  Object.defineProperty(val, "html", {
    get: function get2() {
      return val.abstract.map(function(a2) {
        return toHtml(a2);
      });
    }
  });
  Object.defineProperty(val, "node", {
    get: function get2() {
      if (!IS_DOM) return void 0;
      var container = DOCUMENT.createElement("div");
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function asIcon(_ref2) {
  var children = _ref2.children, main = _ref2.main, mask = _ref2.mask, attributes = _ref2.attributes, styles2 = _ref2.styles, transform = _ref2.transform;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width, height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes["style"] = joinStyles(_objectSpread2(_objectSpread2({}, styles2), {}, {
      "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes,
    children
  }];
}
function asSymbol(_ref2) {
  var prefix = _ref2.prefix, iconName = _ref2.iconName, children = _ref2.children, attributes = _ref2.attributes, symbol = _ref2.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id
      }),
      children
    }]
  }];
}
function isLabeled(attributes) {
  var labels = ["aria-label", "aria-labelledby", "title", "role"];
  return labels.some(function(label) {
    return label in attributes;
  });
}
function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix = params.prefix, iconName = params.iconName, transform = params.transform, symbol = params.symbol, maskId = params.maskId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? false : _params$watchable;
  var _ref2 = mask.found ? mask : main, width = _ref2.width, height = _ref2.height;
  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter(function(c2) {
    return extra.classes.indexOf(c2) === -1;
  }).filter(function(c2) {
    return c2 !== "" || !!c2;
  }).concat(extra.classes).join(" ");
  var content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      "data-prefix": prefix,
      "data-icon": iconName,
      "class": attrClass,
      "role": extra.attributes.role || "img",
      "viewBox": "0 0 ".concat(width, " ").concat(height)
    })
  };
  if (!isLabeled(extra.attributes) && !extra.attributes["aria-hidden"]) {
    content.attributes["aria-hidden"] = "true";
  }
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = "";
  }
  var args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: _objectSpread2({}, extra.styles)
  });
  var _ref22 = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
    children: [],
    attributes: {}
  } : callProvided("generateAbstractIcon", args) || {
    children: [],
    attributes: {}
  }, children = _ref22.children, attributes = _ref22.attributes;
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content, width = params.width, height = params.height, transform = params.transform, extra = params.extra, _params$watchable2 = params.watchable, watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
  var attributes = _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
    class: extra.classes.join(" ")
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = "";
  }
  var styles2 = _objectSpread2({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles2["transform"] = transformForCss({
      transform,
      width,
      height
    });
    styles2["-webkit-transform"] = styles2["transform"];
  }
  var styleString = joinStyles(styles2);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  var val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content, extra = params.extra;
  var attributes = _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
    class: extra.classes.join(" ")
  });
  var styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  var val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  return val;
}
var styles$1 = namespace.styles;
function asFoundIcon(icon3) {
  var width = icon3[0];
  var height = icon3[1];
  var _icon$slice = icon3.slice(4), _icon$slice2 = _slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0];
  var element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: "g",
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: "currentColor",
          d: vectorData[0]
        }
      }, {
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: "currentColor",
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
  }
}
function findIcon(iconName, prefix) {
  var givenPrefix = prefix;
  if (prefix === "fa" && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise(function(resolve, reject) {
    if (givenPrefix === "fa") {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon3 = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon3));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
    }));
  });
}
var noop$1 = function noop3() {
};
var p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = 'FA "7.2.0"';
var begin = function begin2(name) {
  p$2.mark("".concat(preamble, " ").concat(name, " begins"));
  return function() {
    return end(name);
  };
};
var end = function end2(name) {
  p$2.mark("".concat(preamble, " ").concat(name, " ends"));
  p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
  begin,
  end
};
var noop$2 = function noop4() {
};
function isWatched(node) {
  var i2svg2 = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg2 === "string";
}
function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon3 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon3;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }
  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}
function createElementNS(tag) {
  return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
}
function createElement(tag) {
  return DOCUMENT.createElement(tag);
}
function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$ceFn = params.ceFn, ceFn = _params$ceFn === void 0 ? abstractObj.tag === "svg" ? createElementNS : createElement : _params$ceFn;
  if (typeof abstractObj === "string") {
    return DOCUMENT.createTextNode(abstractObj);
  }
  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function(key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function(child) {
    tag.appendChild(convertSVG(child, {
      ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  return comment;
}
var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    if (node.parentNode) {
      mutation[1].forEach(function(abstract) {
        node.parentNode.insertBefore(convertSVG(abstract), node);
      });
      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }
    var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete abstract[0].attributes.id;
    if (abstract[0].attributes.class) {
      var splitClasses = abstract[0].attributes.class.split(" ").reduce(function(acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }
        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(" ");
      if (splitClasses.toNode.length === 0) {
        node.removeAttribute("class");
      } else {
        node.setAttribute("class", splitClasses.toNode.join(" "));
      }
    }
    var newInnerHTML = abstract.map(function(a2) {
      return toHtml(a2);
    }).join("\n");
    node.setAttribute(DATA_FA_I2SVG, "");
    node.innerHTML = newInnerHTML;
  }
};
function performOperationSync(op) {
  op();
}
function perform(mutations, callback) {
  var callbackFunction = typeof callback === "function" ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;
    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(function() {
      var mutator = getMutator();
      var mark = perf.begin("mutate");
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config.observeMutations) {
    return;
  }
  var _options$treeCallback = options.treeCallback, treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback, _options$nodeCallback = options.nodeCallback, nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback, _options$pseudoElemen = options.pseudoElementsCallback, pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen, _options$observeMutat = options.observeMutationsRoot, observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function(objects) {
    if (disabled) return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function(mutationRecord) {
      if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback([mutationRecord.target], true);
      }
      if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)), prefix = _getCanonicalIcon.prefix, iconName = _getCanonicalIcon.iconName;
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}
function styleParser(node) {
  var style = node.getAttribute("style");
  var val = [];
  if (style) {
    val = style.split(";").reduce(function(acc, style2) {
      var styles2 = style2.split(":");
      var prop = styles2[0];
      var value = styles2.slice(1);
      if (prop && value.length > 0) {
        acc[prop] = value.join(":").trim();
      }
      return acc;
    }, {});
  }
  return val;
}
function classParser(node) {
  var existingPrefix = node.getAttribute("data-prefix");
  var existingIconName = node.getAttribute("data-icon");
  var innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
  var val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}
function attributesParser(node) {
  var extraAttributes = toArray(node.attributes).reduce(function(acc, attr) {
    if (acc.name !== "class" && acc.name !== "style") {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  return extraAttributes;
}
function blankMeta() {
  return {
    iconName: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: true
  };
  var _classParser = classParser(node), iconName = _classParser.iconName, prefix = _classParser.prefix, extraClasses = _classParser.rest;
  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks("parseNodeAttributes", {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName,
    prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}
var styles$2 = namespace.styles;
function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided("generateLayersText", node, nodeMeta);
  } else {
    return callProvided("generateSvgReplacementMutation", node, nodeMeta);
  }
}
function getKnownPrefixes() {
  return [].concat(_toConsumableArray(Ht), _toConsumableArray(lo));
}
function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd2(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var hclRemove = function hclRemove2(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var prefixes = config.autoFetchSvg ? getKnownPrefixes() : Z.concat(Object.keys(styles$2));
  if (!prefixes.includes("fa")) {
    prefixes.push("fa");
  }
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function(p$$1) {
    return ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(", ");
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  var candidates = [];
  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e$$1) {
  }
  if (candidates.length > 0) {
    hclAdd("pending");
    hclRemove("complete");
  } else {
    return Promise.resolve();
  }
  var mark = perf.begin("onTree");
  var mutations = candidates.reduce(function(acc, node) {
    try {
      var mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e$$1) {
      if (!PRODUCTION) {
        if (e$$1.name === "MissingIcon") {
          console.error(e$$1);
        }
      }
    }
    return acc;
  }, []);
  return new Promise(function(resolve, reject) {
    Promise.all(mutations).then(function(resolvedMutations) {
      perform(resolvedMutations, function() {
        hclAdd("active");
        hclAdd("complete");
        hclRemove("pending");
        if (typeof callback === "function") callback();
        mark();
        resolve();
      });
    }).catch(function(e$$1) {
      mark();
      reject(e$$1);
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  generateMutation(node).then(function(mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function(maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask
    }));
  };
}
var render$1 = function render(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? false : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix, iconName = iconDefinition.iconName, icon3 = iconDefinition.icon;
  return domVariants(_objectSpread2({
    type: "icon"
  }, iconDefinition), function() {
    callHooks("beforeDOMElementCreation", {
      iconDefinition,
      params
    });
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon3),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix,
      iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol,
      maskId,
      extra: {
        attributes,
        styles: styles2,
        classes
      }
    });
  });
};
var ReplaceElements = {
  mixout: function mixout2() {
    return {
      icon: resolveIcons(render$1)
    };
  },
  hooks: function hooks2() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function(params) {
      var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node, _params$callback = params.callback, callback = _params$callback === void 0 ? function() {
      } : _params$callback;
      return onTree(node, callback);
    };
    providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
      var iconName = nodeMeta.iconName, prefix = nodeMeta.prefix, transform = nodeMeta.transform, symbol = nodeMeta.symbol, mask = nodeMeta.mask, maskId = nodeMeta.maskId, extra = nodeMeta.extra;
      return new Promise(function(resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(_ref2) {
          var _ref22 = _slicedToArray(_ref2, 2), main = _ref22[0], mask2 = _ref22[1];
          resolve([node, makeInlineSvgAbstract({
            icons: {
              main,
              mask: mask2
            },
            prefix,
            iconName,
            transform,
            symbol,
            maskId,
            extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };
    providers$$1.generateAbstractIcon = function(_ref3) {
      var children = _ref3.children, attributes = _ref3.attributes, main = _ref3.main, transform = _ref3.transform, styles2 = _ref3.styles;
      var styleString = joinStyles(styles2);
      if (styleString.length > 0) {
        attributes["style"] = styleString;
      }
      var nextChild;
      if (transformIsMeaningful(transform)) {
        nextChild = callProvided("generateAbstractTransformGrouping", {
          main,
          transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }
      children.push(nextChild || main.icon);
      return {
        children,
        attributes
      };
    };
  }
};
var Layers = {
  mixout: function mixout3() {
    return {
      layer: function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: "layer"
        }, function() {
          callHooks("beforeDOMElementCreation", {
            assembler,
            params
          });
          var children = [];
          assembler(function(args) {
            Array.isArray(args) ? args.map(function(a2) {
              children = children.concat(a2.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: "span",
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(" ")
            },
            children
          }];
        });
      }
    };
  }
};
var LayersCounter = {
  mixout: function mixout4() {
    return {
      counter: function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        params.title;
        var _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: "counter",
          content
        }, function() {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  }
};
var LayersText = {
  mixout: function mixout5() {
    return {
      text: function text(content) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: "text",
          content
        }, function() {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersTextAbstract({
            content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides2(providers$$1) {
    providers$$1.generateLayersText = function(node, nodeMeta) {
      var transform = nodeMeta.transform, extra = nodeMeta.extra;
      var width = null;
      var height = null;
      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }
      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width,
        height,
        transform,
        extra,
        watchable: true
      })]);
    };
  }
};
var CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
var _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Kt), fo), hl);
var FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce(function(acc, key) {
  acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
  return acc;
}, {});
var FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce(function(acc, fontFamily) {
  var weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
  acc[fontFamily] = weights[900] || _toConsumableArray(Object.entries(weights))[0][1];
  return acc;
}, {});
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
  return toHex(_toConsumableArray(cleaned)[0] || "");
}
function isSecondaryLayer(styles2) {
  var hasStylisticSet = styles2.getPropertyValue("font-feature-settings").includes("ss01");
  var content = styles2.getPropertyValue("content");
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
  var codePoint = cleaned.codePointAt(0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return isPrependTen || isDoubled || hasStylisticSet;
}
function getPrefix(fontFamily, fontWeight) {
  var fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, "").toLowerCase();
  var fontWeightInteger = parseInt(fontWeight);
  var fontWeightSanitized = isNaN(fontWeightInteger) ? "normal" : fontWeightInteger;
  return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
}
function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
  return new Promise(function(resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      return resolve();
    }
    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function(c$$1) {
      return c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles2 = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles2.getPropertyValue("font-family");
    var fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
    var fontWeight = styles2.getPropertyValue("font-weight");
    var content = styles2.getPropertyValue("content");
    if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamilyMatch && content !== "none" && content !== "") {
      var _content = styles2.getPropertyValue("content");
      var prefix = getPrefix(fontFamily, fontWeight);
      var hexValue = hexValueFromContent(_content);
      var isV4 = fontFamilyMatch[0].startsWith("FontAwesome");
      var isSecondary = isSecondaryLayer(styles2);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;
      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          node.removeChild(alreadyProcessedPseudoElement);
        }
        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function(main) {
          var abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main,
              mask: emptyCanonicalIcon()
            },
            prefix,
            iconName: iconIdentifier,
            extra,
            watchable: true
          }));
          var element = DOCUMENT.createElementNS("http://www.w3.org/2000/svg", "svg");
          if (position === "::before") {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = abstract.map(function(a$$1) {
            return toHtml(a$$1);
          }).join("\n");
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function replace2(node) {
  return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
}
var hasPseudoElement = function hasPseudoElement2(selector) {
  return !!selector && PSEUDO_ELEMENTS.some(function(pseudoSelector) {
    return selector.includes(pseudoSelector);
  });
};
var parseCSSRuleForPseudos = function parseCSSRuleForPseudos2(selectorText) {
  if (!selectorText) return [];
  var selectorSet = /* @__PURE__ */ new Set();
  var selectors = selectorText.split(/,(?![^()]*\))/).map(function(s$$1) {
    return s$$1.trim();
  });
  selectors = selectors.flatMap(function(selector2) {
    return selector2.includes("(") ? selector2 : selector2.split(",").map(function(s$$1) {
      return s$$1.trim();
    });
  });
  var _iterator = _createForOfIteratorHelper(selectors), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var selector = _step.value;
      if (hasPseudoElement(selector)) {
        var selectorWithoutPseudo = PSEUDO_ELEMENTS.reduce(function(acc, pseudoSelector) {
          return acc.replace(pseudoSelector, "");
        }, selector);
        if (selectorWithoutPseudo !== "" && selectorWithoutPseudo !== "*") {
          selectorSet.add(selectorWithoutPseudo);
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return selectorSet;
};
function searchPseudoElements(root) {
  var useAsNodeList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (!IS_DOM) return;
  var nodeList;
  if (useAsNodeList) {
    nodeList = root;
  } else if (config.searchPseudoElementsFullScan) {
    nodeList = root.querySelectorAll("*");
  } else {
    var selectorSet = /* @__PURE__ */ new Set();
    var _iterator2 = _createForOfIteratorHelper(document.styleSheets), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var stylesheet = _step2.value;
        try {
          var _iterator3 = _createForOfIteratorHelper(stylesheet.cssRules), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var rule = _step3.value;
              var parsedSelectors = parseCSSRuleForPseudos(rule.selectorText);
              var _iterator4 = _createForOfIteratorHelper(parsedSelectors), _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  var selector = _step4.value;
                  selectorSet.add(selector);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } catch (e$$1) {
          if (config.searchPseudoElementsWarnings) {
            console.warn("Font Awesome: cannot parse stylesheet: ".concat(stylesheet.href, " (").concat(e$$1.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'));
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (!selectorSet.size) return;
    var cleanSelectors = Array.from(selectorSet).join(", ");
    try {
      nodeList = root.querySelectorAll(cleanSelectors);
    } catch (_unused) {
    }
  }
  return new Promise(function(resolve, reject) {
    var operations = toArray(nodeList).filter(processable).map(replace2);
    var end3 = perf.begin("searchPseudoElements");
    disableObservation();
    Promise.all(operations).then(function() {
      end3();
      enableObservation();
      resolve();
    }).catch(function() {
      end3();
      enableObservation();
      reject();
    });
  });
}
var PseudoElements = {
  hooks: function hooks3() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides3(providers2) {
    providers2.pseudoElements2svg = function(params) {
      var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node;
      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};
var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout6() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks4() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks("mutationObserverCallbacks", {}));
      },
      noAuto: function noAuto3() {
        disconnect();
      },
      watch: function watch2(params) {
        var observeMutationsRoot = params.observeMutationsRoot;
        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks("mutationObserverCallbacks", {
            observeMutationsRoot
          }));
        }
      }
    };
  }
};
var parseTransformString = function parseTransformString2(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(" ").reduce(function(acc, n2) {
    var parts = n2.toLowerCase().split("-");
    var first = parts[0];
    var rest = parts.slice(1).join("-");
    if (first && rest === "h") {
      acc.flipX = true;
      return acc;
    }
    if (first && rest === "v") {
      acc.flipY = true;
      return acc;
    }
    rest = parseFloat(rest);
    if (isNaN(rest)) {
      return acc;
    }
    switch (first) {
      case "grow":
        acc.size = acc.size + rest;
        break;
      case "shrink":
        acc.size = acc.size - rest;
        break;
      case "left":
        acc.x = acc.x - rest;
        break;
      case "right":
        acc.x = acc.x + rest;
        break;
      case "up":
        acc.y = acc.y - rest;
        break;
      case "down":
        acc.y = acc.y + rest;
        break;
      case "rotate":
        acc.rotate = acc.rotate + rest;
        break;
    }
    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout: function mixout7() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks5() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute("data-fa-transform");
        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }
        return accumulator;
      }
    };
  },
  provides: function provides4(providers2) {
    providers2.generateAbstractTransformGrouping = function(_ref2) {
      var main = _ref2.main, transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer,
        inner,
        path
      };
      return {
        tag: "g",
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: "g",
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};
var ALL_SPACE = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = "black";
  }
  return abstract;
}
function deGroup(abstract) {
  if (abstract.tag === "g") {
    return abstract.children;
  } else {
    return [abstract];
  }
}
var Masks = {
  hooks: function hooks6() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute("data-fa-mask");
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map(function(i2) {
          return i2.trim();
        }));
        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }
        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute("data-fa-mask-id");
        return accumulator;
      }
    };
  },
  provides: function provides5(providers2) {
    providers2.generateAbstractMask = function(_ref2) {
      var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, mask = _ref2.mask, explicitMaskId = _ref2.maskId, transform = _ref2.transform;
      var mainWidth = main.width, mainPath = main.icon;
      var maskWidth = mask.width, maskPath = mask.icon;
      var trans = transformForSvg({
        transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: "rect",
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: "white"
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: "g",
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: "g",
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: "mask",
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: "rect",
        attributes: _objectSpread2({
          "fill": "currentColor",
          "clip-path": "url(#".concat(clipId, ")"),
          "mask": "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children,
        attributes
      };
    };
  }
};
var MissingIconIndicator = {
  provides: function provides6(providers2) {
    var reduceMotion = false;
    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    providers2.missingIconAbstract = function() {
      var gChildren = [];
      var FILL = {
        fill: "currentColor"
      };
      var ANIMATION_BASE = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      gChildren.push({
        tag: "path",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: "opacity"
      });
      var dot = {
        tag: "circle",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      if (!reduceMotion) {
        dot.children.push({
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
          })
        }, {
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: "1;0;1;1;0;1;"
          })
        });
      }
      gChildren.push(dot);
      gChildren.push({
        tag: "path",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: reduceMotion ? [] : [{
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      });
      if (!reduceMotion) {
        gChildren.push({
          tag: "path",
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: "0",
            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
          }),
          children: [{
            tag: "animate",
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: "0;0;1;1;0;0;"
            })
          }]
        });
      }
      return {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: gChildren
      };
    };
  }
};
var SvgSymbols = {
  hooks: function hooks7() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute("data-fa-symbol");
        var symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
        accumulator["symbol"] = symbol;
        return accumulator;
      }
    };
  }
};
var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
registerPlugins(plugins, {
  mixoutsTo: api
});
api.noAuto;
var config$1 = api.config;
api.library;
api.dom;
var parse$1 = api.parse;
api.findIconDefinition;
api.toHtml;
var icon2 = api.icon;
api.layer;
api.text;
api.counter;
function _isNumerical(object) {
  object = object - 0;
  return object === object;
}
function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  }
  string = string.replace(/[_-]+(.)?/g, (_2, chr) => {
    return chr ? chr.toUpperCase() : "";
  });
  return string.charAt(0).toLowerCase() + string.slice(1);
}
function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}
var styleCache = /* @__PURE__ */ new Map();
var STYLE_CACHE_LIMIT = 1e3;
function styleToObject(style) {
  if (styleCache.has(style)) {
    return styleCache.get(style);
  }
  const result = {};
  let start = 0;
  const len = style.length;
  while (start < len) {
    const semicolonIndex = style.indexOf(";", start);
    const end3 = semicolonIndex === -1 ? len : semicolonIndex;
    const pair = style.slice(start, end3).trim();
    if (pair) {
      const colonIndex = pair.indexOf(":");
      if (colonIndex > 0) {
        const rawProp = pair.slice(0, colonIndex).trim();
        const value = pair.slice(colonIndex + 1).trim();
        if (rawProp && value) {
          const prop = camelize(rawProp);
          result[prop.startsWith("webkit") ? capitalize(prop) : prop] = value;
        }
      }
    }
    start = end3 + 1;
  }
  if (styleCache.size === STYLE_CACHE_LIMIT) {
    const oldestKey = styleCache.keys().next().value;
    if (oldestKey) {
      styleCache.delete(oldestKey);
    }
  }
  styleCache.set(style, result);
  return result;
}
function convert(createElement2, element, extraProps = {}) {
  if (typeof element === "string") {
    return element;
  }
  const children = (element.children || []).map((child) => {
    return convert(createElement2, child);
  });
  const elementAttributes = element.attributes || {};
  const attrs = {};
  for (const [key, val] of Object.entries(elementAttributes)) {
    switch (true) {
      case key === "class": {
        attrs.className = val;
        break;
      }
      case key === "style": {
        attrs.style = styleToObject(String(val));
        break;
      }
      case key.startsWith("aria-"):
      case key.startsWith("data-"): {
        attrs[key.toLowerCase()] = val;
        break;
      }
      default: {
        attrs[camelize(key)] = val;
      }
    }
  }
  const {
    style: existingStyle,
    role: existingRole,
    "aria-label": ariaLabel,
    ...remaining
  } = extraProps;
  if (existingStyle) {
    attrs.style = attrs.style ? { ...attrs.style, ...existingStyle } : existingStyle;
  }
  if (existingRole) {
    attrs.role = existingRole;
  }
  if (ariaLabel) {
    attrs["aria-label"] = ariaLabel;
    attrs["aria-hidden"] = "false";
  }
  return createElement2(element.tag, { ...attrs, ...remaining }, ...children);
}
var makeReactConverter = convert.bind(null, React.createElement);
var useAccessibilityId = (id, hasAccessibleProps) => {
  const generatedId = useId();
  return id || (hasAccessibleProps ? generatedId : void 0);
};
var Logger = class {
  constructor(scope = "react-fontawesome") {
    this.enabled = false;
    let IS_DEV = false;
    try {
      IS_DEV = typeof process !== "undefined" && process.env?.NODE_ENV === "development";
    } catch {
    }
    this.scope = scope;
    this.enabled = IS_DEV;
  }
  /**
   * Logs messages to the console if not in production.
   * @param args - The message and/or data to log.
   */
  log(...args) {
    if (!this.enabled) return;
    console.log(`[${this.scope}]`, ...args);
  }
  /**
   * Logs warnings to the console if not in production.
   * @param args - The warning message and/or data to log.
   */
  warn(...args) {
    if (!this.enabled) return;
    console.warn(`[${this.scope}]`, ...args);
  }
  /**
   * Logs errors to the console if not in production.
   * @param args - The error message and/or data to log.
   */
  error(...args) {
    if (!this.enabled) return;
    console.error(`[${this.scope}]`, ...args);
  }
};
typeof process !== "undefined" && process.env?.FA_VERSION || "7.0.0";
var SVG_CORE_VERSION = (
  // @ts-expect-error TS2872 - Expression is always truthy - This is true when v7 of SVGCore is used, but not when v6 is used.
  // This is the point of this check - if the property exists on config, we have v7, otherwise we have v6.
  // TS is checking this against the dev dependencies which uses v7, so it reports a false error here.
  "searchPseudoElementsFullScan" in config$1 ? "7.0.0" : "6.0.0"
);
var IS_VERSION_7_OR_LATER = Number.parseInt(SVG_CORE_VERSION) >= 7;
var DEFAULT_CLASSNAME_PREFIX = "fa";
var ANIMATION_CLASSES = {
  beat: "fa-beat",
  fade: "fa-fade",
  beatFade: "fa-beat-fade",
  bounce: "fa-bounce",
  shake: "fa-shake",
  spin: "fa-spin",
  spinPulse: "fa-spin-pulse",
  spinReverse: "fa-spin-reverse",
  pulse: "fa-pulse"
};
var PULL_CLASSES = {
  left: "fa-pull-left",
  right: "fa-pull-right"
};
var ROTATE_CLASSES = {
  "90": "fa-rotate-90",
  "180": "fa-rotate-180",
  "270": "fa-rotate-270"
};
var SIZE_CLASSES = {
  "2xs": "fa-2xs",
  xs: "fa-xs",
  sm: "fa-sm",
  lg: "fa-lg",
  xl: "fa-xl",
  "2xl": "fa-2xl",
  "1x": "fa-1x",
  "2x": "fa-2x",
  "3x": "fa-3x",
  "4x": "fa-4x",
  "5x": "fa-5x",
  "6x": "fa-6x",
  "7x": "fa-7x",
  "8x": "fa-8x",
  "9x": "fa-9x",
  "10x": "fa-10x"
};
var STYLE_CLASSES = {
  border: "fa-border",
  /** @deprecated */
  fixedWidth: "fa-fw",
  flip: "fa-flip",
  flipHorizontal: "fa-flip-horizontal",
  flipVertical: "fa-flip-vertical",
  inverse: "fa-inverse",
  rotateBy: "fa-rotate-by",
  swapOpacity: "fa-swap-opacity",
  widthAuto: "fa-width-auto"
};
function withPrefix(cls) {
  const prefix = config$1.cssPrefix || config$1.familyPrefix || DEFAULT_CLASSNAME_PREFIX;
  return prefix === DEFAULT_CLASSNAME_PREFIX ? cls : cls.replace(
    new RegExp(String.raw`(?<=^|\s)${DEFAULT_CLASSNAME_PREFIX}-`, "g"),
    `${prefix}-`
  );
}
function getClassListFromProps(props) {
  const {
    beat,
    fade,
    beatFade,
    bounce,
    shake,
    spin,
    spinPulse,
    spinReverse,
    pulse,
    fixedWidth,
    inverse,
    border,
    flip,
    size,
    rotation,
    pull,
    swapOpacity,
    rotateBy,
    widthAuto,
    className
  } = props;
  const result = [];
  if (className) result.push(...className.split(" "));
  if (beat) result.push(ANIMATION_CLASSES.beat);
  if (fade) result.push(ANIMATION_CLASSES.fade);
  if (beatFade) result.push(ANIMATION_CLASSES.beatFade);
  if (bounce) result.push(ANIMATION_CLASSES.bounce);
  if (shake) result.push(ANIMATION_CLASSES.shake);
  if (spin) result.push(ANIMATION_CLASSES.spin);
  if (spinReverse) result.push(ANIMATION_CLASSES.spinReverse);
  if (spinPulse) result.push(ANIMATION_CLASSES.spinPulse);
  if (pulse) result.push(ANIMATION_CLASSES.pulse);
  if (fixedWidth) result.push(STYLE_CLASSES.fixedWidth);
  if (inverse) result.push(STYLE_CLASSES.inverse);
  if (border) result.push(STYLE_CLASSES.border);
  if (flip === true) result.push(STYLE_CLASSES.flip);
  if (flip === "horizontal" || flip === "both") {
    result.push(STYLE_CLASSES.flipHorizontal);
  }
  if (flip === "vertical" || flip === "both") {
    result.push(STYLE_CLASSES.flipVertical);
  }
  if (size !== void 0 && size !== null) result.push(SIZE_CLASSES[size]);
  if (rotation !== void 0 && rotation !== null && rotation !== 0) {
    result.push(ROTATE_CLASSES[rotation]);
  }
  if (pull !== void 0 && pull !== null) result.push(PULL_CLASSES[pull]);
  if (swapOpacity) result.push(STYLE_CLASSES.swapOpacity);
  if (!IS_VERSION_7_OR_LATER) return result;
  if (rotateBy) result.push(STYLE_CLASSES.rotateBy);
  if (widthAuto) result.push(STYLE_CLASSES.widthAuto);
  const prefix = config$1.cssPrefix || config$1.familyPrefix || DEFAULT_CLASSNAME_PREFIX;
  return prefix === DEFAULT_CLASSNAME_PREFIX ? result : (
    // TODO: see if we can achieve custom prefix support without iterating
    // eslint-disable-next-line unicorn/no-array-callback-reference
    result.map(withPrefix)
  );
}
var isIconDefinition = (icon3) => typeof icon3 === "object" && "icon" in icon3 && !!icon3.icon;
function normalizeIconArgs(icon3) {
  if (!icon3) {
    return void 0;
  }
  if (isIconDefinition(icon3)) {
    return icon3;
  }
  return parse$1.icon(icon3);
}
function typedObjectKeys(obj) {
  return Object.keys(obj);
}
var logger = new Logger("FontAwesomeIcon");
var DEFAULT_PROPS = {
  border: false,
  className: "",
  mask: void 0,
  maskId: void 0,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: void 0,
  listItem: false,
  pull: void 0,
  pulse: false,
  rotation: void 0,
  rotateBy: false,
  size: void 0,
  spin: false,
  spinPulse: false,
  spinReverse: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: "",
  titleId: void 0,
  transform: void 0,
  swapOpacity: false,
  widthAuto: false
};
var DEFAULT_PROP_KEYS = new Set(Object.keys(DEFAULT_PROPS));
var FontAwesomeIcon = React.forwardRef((props, ref) => {
  const allProps = { ...DEFAULT_PROPS, ...props };
  const {
    icon: iconArgs,
    mask: maskArgs,
    symbol,
    title,
    titleId: titleIdFromProps,
    maskId: maskIdFromProps,
    transform
  } = allProps;
  const maskId = useAccessibilityId(maskIdFromProps, Boolean(maskArgs));
  const titleId = useAccessibilityId(titleIdFromProps, Boolean(title));
  const iconLookup = normalizeIconArgs(iconArgs);
  if (!iconLookup) {
    logger.error("Icon lookup is undefined", iconArgs);
    return null;
  }
  const classList = getClassListFromProps(allProps);
  const transformProps = typeof transform === "string" ? parse$1.transform(transform) : transform;
  const normalizedMaskArgs = normalizeIconArgs(maskArgs);
  const renderedIcon = icon2(iconLookup, {
    ...classList.length > 0 && { classes: classList },
    ...transformProps && { transform: transformProps },
    ...normalizedMaskArgs && { mask: normalizedMaskArgs },
    symbol,
    title,
    titleId,
    maskId
  });
  if (!renderedIcon) {
    logger.error("Could not find icon", iconLookup);
    return null;
  }
  const { abstract } = renderedIcon;
  const extraProps = { ref };
  for (const key of typedObjectKeys(allProps)) {
    if (DEFAULT_PROP_KEYS.has(key)) {
      continue;
    }
    extraProps[key] = allProps[key];
  }
  return makeReactConverter(abstract[0], extraProps);
});
FontAwesomeIcon.displayName = "FontAwesomeIcon";
var faPaste = {
  prefix: "fas",
  iconName: "paste",
  icon: [512, 512, ["file-clipboard"], "f0ea", "M64 0C28.7 0 0 28.7 0 64L0 384c0 35.3 28.7 64 64 64l112 0 0-224c0-61.9 50.1-112 112-112l64 0 0-48c0-35.3-28.7-64-64-64L64 0zM248 112l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm40 48c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-165.5c0-17-6.7-33.3-18.7-45.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7L288 160z"]
};
var faEnvelope = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]
};
var faPaperPlane = {
  prefix: "fas",
  iconName: "paper-plane",
  icon: [576, 512, [61913], "f1d8", "M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"]
};
var faComment = {
  prefix: "fas",
  iconName: "comment",
  icon: [512, 512, [128489, 61669], "f075", "M512 240c0 132.5-114.6 240-256 240-37.1 0-72.3-7.4-104.1-20.7L33.5 510.1c-9.4 4-20.2 1.7-27.1-5.8S-2 485.8 2.8 476.8l48.8-92.2C19.2 344.3 0 294.3 0 240 0 107.5 114.6 0 256 0S512 107.5 512 240z"]
};
var faVideo = {
  prefix: "fas",
  iconName: "video",
  icon: [576, 512, ["video-camera"], "f03d", "M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z"]
};
var faLink = {
  prefix: "fas",
  iconName: "link",
  icon: [576, 512, [128279, "chain"], "f0c1", "M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]
};
var faCircleQuestion = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
};
var faQuestionCircle = faCircleQuestion;
var faPlay = {
  prefix: "fas",
  iconName: "play",
  icon: [448, 512, [9654], "f04b", "M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"]
};
var faCheck = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]
};
var faUser = {
  prefix: "fas",
  iconName: "user",
  icon: [448, 512, [128100, 62144, 62470, "user-alt", "user-large"], "f007", "M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]
};
var faXmark = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]
};
var faCircleCheck = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]
};
var faCheckCircle = faCircleCheck;
var faDownload = {
  prefix: "fas",
  iconName: "download",
  icon: [448, 512, [], "f019", "M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]
};
var faShieldHalved = {
  prefix: "fas",
  iconName: "shield-halved",
  icon: [512, 512, ["shield-alt"], "f3ed", "M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"]
};
var faShieldAlt = faShieldHalved;
var faGlobe = {
  prefix: "fas",
  iconName: "globe",
  icon: [512, 512, [127760], "f0ac", "M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"]
};
var faMusic = {
  prefix: "fas",
  iconName: "music",
  icon: [512, 512, [127925], "f001", "M468 7c7.6 6.1 12 15.3 12 25l0 304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6l0-116.7-224 49.8 0 206.3c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6L128 96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4 .2 27 6.3z"]
};
var faFileContract = {
  prefix: "fas",
  iconName: "file-contract",
  icon: [384, 512, [], "f56c", "M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM88 64C74.7 64 64 74.7 64 88s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm70.3 160c-11.3 0-21.9 5.1-28.9 13.9L69.3 409c-8.3 10.3-6.6 25.5 3.7 33.7s25.5 6.6 33.7-3.8l47.1-58.8 15.2 50.7c3 10.2 12.4 17.1 23 17.1l104 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-86.1 0-16.1-53.6c-4.7-15.7-19.1-26.4-35.5-26.4z"]
};
var faPause = {
  prefix: "fas",
  iconName: "pause",
  icon: [384, 512, [9208], "f04c", "M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"]
};
var faArrowDown = {
  prefix: "fas",
  iconName: "arrow-down",
  icon: [384, 512, [8595], "f063", "M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]
};
function useDownloaderLogic(t2) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadLabel, setDownloadLabel] = useState("");
  const [downloadData, setDownloadData] = useState(null);
  const rawApiBase = "https://tiktokvideo-downloader-backend.vercel.app".replace(/\/$/, "");
  const apiBase = rawApiBase.endsWith("/api/tiktok") ? rawApiBase : `${rawApiBase}/api/tiktok`;
  const apiDownloadFileBase = rawApiBase.endsWith("/api/tiktok") ? `${rawApiBase}/download-file` : `${rawApiBase}/api/tiktok/download-file`;
  const buildDownloadUrls = (targetUrl) => {
    const encodedUrl = encodeURIComponent(targetUrl);
    return {
      primary: `${apiBase}?url=${encodedUrl}`,
      legacy: `${apiBase}/download?url=${encodedUrl}`
    };
  };
  const downloadDirectly = (fileUrl, filename) => {
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = filename;
    anchor.rel = "noopener noreferrer";
    anchor.target = "_blank";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text.trim());
      }
    } catch {
    }
  };
  const handleDownload = async (e2) => {
    e2.preventDefault();
    if (!url.trim()) {
      setMessage(t2.invalidUrl);
      return;
    }
    if (!url.includes("tiktok.com")) {
      setMessage(t2.invalidUrl);
      return;
    }
    setIsLoading(true);
    setMessage("");
    setDownloadData(null);
    try {
      const { primary, legacy } = buildDownloadUrls(url);
      const request = async (requestUrl) => {
        const response = await fetch(requestUrl);
        let payload = null;
        try {
          payload = await response.json();
        } catch {
          payload = null;
        }
        return { response, payload };
      };
      let result = await request(primary);
      if (!result.response.ok || !result.payload?.success) {
        result = await request(legacy);
      }
      if (!result.response.ok || !result.payload?.success) {
        throw new Error(result.payload?.error || t2.fetchFailed);
      }
      setDownloadData(result.payload.data);
      if (!result.payload.data?.downloads?.length) {
        setMessage(t2.noLinksFound);
      } else {
        setMessage(t2.ready);
      }
    } catch (error) {
      const messageText = error instanceof Error ? error.message : t2.fetchFailed;
      setMessage(`Error: ${messageText}`);
    } finally {
      setIsLoading(false);
    }
  };
  const handleFileDownload = async (fileUrl, label, typeOverride) => {
    try {
      if (!fileUrl) {
        return;
      }
      setIsDownloading(true);
      setDownloadLabel(label);
      const type = typeOverride || (/mp3|audio/i.test(label) ? "audio" : "video");
      const baseName = downloadData?.title || "tiktok-download";
      const requestUrl = `${apiDownloadFileBase}?url=${encodeURIComponent(
        fileUrl
      )}&type=${encodeURIComponent(type)}&filename=${encodeURIComponent(baseName)}`;
      const response = await fetch(requestUrl);
      if (!response.ok) {
        if (response.status === 404 || response.status === 405) {
          downloadDirectly(fileUrl, baseName);
          return;
        }
        let errorMessage = t2.fetchFailed;
        try {
          const payload = await response.json();
          errorMessage = payload?.error || errorMessage;
        } catch {
        }
        throw new Error(errorMessage);
      }
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = baseName;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      const messageText = error instanceof Error ? error.message : t2.fetchFailed;
      setMessage(`Error: ${messageText}`);
    } finally {
      setIsDownloading(false);
      setDownloadLabel("");
    }
  };
  return {
    url,
    setUrl,
    isLoading,
    message,
    isDownloading,
    downloadLabel,
    downloadData,
    handlePaste,
    handleDownload,
    handleFileDownload
  };
}
function DownloaderForm({
  t: t2,
  lockFormat,
  format,
  setFormat,
  logic
}) {
  const { url, setUrl, isLoading, handlePaste, handleDownload } = logic;
  return /* @__PURE__ */ jsxs("div", { className: "bg-white text-dark rounded-4 shadow-lg p-4 p-lg-5 text-start", children: [
    t2.cardTitle && /* @__PURE__ */ jsx("h3", { className: "fw-bold mb-2", children: t2.cardTitle }),
    t2.cardSubtitle && /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: t2.cardSubtitle }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleDownload, children: [
      /* @__PURE__ */ jsxs("div", { className: "input-group input-group-lg mb-3", children: [
        /* @__PURE__ */ jsx("span", { className: "input-group-text bg-white border-end-0", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLink, className: "text-muted" }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "form-control border-start-0 border-end-0",
            placeholder: t2.placeholder,
            value: url,
            onChange: (e2) => setUrl(e2.target.value),
            "aria-label": t2.placeholder
          }
        ),
        /* @__PURE__ */ jsxs("button", { type: "button", className: "btn btn-outline-secondary", onClick: handlePaste, children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPaste, className: "me-1" }),
          t2.pasteButton
        ] })
      ] }),
      !lockFormat && /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center justify-content-lg-start gap-4 mb-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "form-check form-check-inline", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "form-check-input",
              type: "radio",
              name: "format",
              id: "formatMp4",
              value: "mp4",
              checked: format === "mp4",
              onChange: (e2) => setFormat(e2.target.value)
            }
          ),
          /* @__PURE__ */ jsxs("label", { className: "form-check-label", htmlFor: "formatMp4", children: [
            /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faVideo, className: "me-1 text-primary" }),
            t2.mp4Label
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-check form-check-inline", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "form-check-input",
              type: "radio",
              name: "format",
              id: "formatMp3",
              value: "mp3",
              checked: format === "mp3",
              onChange: (e2) => setFormat(e2.target.value)
            }
          ),
          /* @__PURE__ */ jsxs("label", { className: "form-check-label", htmlFor: "formatMp3", children: [
            /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faMusic, className: "me-1 text-success" }),
            t2.mp3Label
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "d-grid", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-tiktok btn-lg", disabled: isLoading, children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "spinner-border spinner-border-sm me-2",
            role: "status",
            "aria-hidden": "true"
          }
        ),
        t2.processing
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faDownload, className: "me-2" }),
        t2.downloadButton
      ] }) }) })
    ] })
  ] });
}
function DownloadResults({
  t: t2,
  format,
  logic
}) {
  const { message, downloadData, isDownloading, downloadLabel, handleFileDownload } = logic;
  const resultsRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideoControl, setShowVideoControl] = useState(true);
  const videoControlTimer = useRef(null);
  const isMp3Mode = format === "mp3";
  const downloadOptions = useMemo(() => {
    if (!downloadData?.downloads?.length) {
      return [];
    }
    const isMp3 = (text) => /mp3|audio/i.test(text);
    return isMp3Mode ? downloadData.downloads.filter((item) => isMp3(item.text)) : downloadData.downloads.filter((item) => !isMp3(item.text));
  }, [downloadData, isMp3Mode]);
  const videoLink = useMemo(() => {
    if (!downloadData?.downloads?.length || isMp3Mode) {
      return "";
    }
    const videoCandidates = downloadData.downloads.filter(
      (item) => /mp4|video/i.test(item.text || "")
    );
    const noWatermark = videoCandidates.find((item) => /no\s*watermark/i.test(item.text || ""));
    return (noWatermark || videoCandidates[0])?.url || "";
  }, [downloadData, isMp3Mode]);
  const audioLink = useMemo(() => {
    if (!downloadData?.downloads?.length || !isMp3Mode) {
      return "";
    }
    return downloadData.downloads.find((item) => /mp3|audio/i.test(item.text || ""))?.url || "";
  }, [downloadData, isMp3Mode]);
  useEffect(() => {
    return () => {
      if (videoControlTimer.current) {
        window.clearTimeout(videoControlTimer.current);
      }
    };
  }, []);
  useEffect(() => {
    if (message || downloadData) {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [message, downloadData]);
  const toggleVideoPlayback = () => {
    if (!videoRef.current) {
      return;
    }
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    setShowVideoControl(true);
    if (videoControlTimer.current) {
      window.clearTimeout(videoControlTimer.current);
    }
    videoControlTimer.current = window.setTimeout(() => {
      setShowVideoControl(false);
    }, 1500);
  };
  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    setShowVideoControl(true);
    if (videoControlTimer.current) {
      window.clearTimeout(videoControlTimer.current);
      videoControlTimer.current = null;
    }
  };
  if (!message && !downloadData) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "section",
    {
      ref: resultsRef,
      id: "download-results",
      className: "download-results-section py-5",
      children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsxs("div", { className: "col-lg-8 col-xl-7 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-2", children: t2.resultsTitle }),
        /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: t2.resultsSubtitle }),
        message && /* @__PURE__ */ jsx(
          "div",
          {
            className: `alert ${message.toLowerCase().includes("error") || message === t2.invalidUrl ? "alert-warning" : "alert-info"}`,
            role: "alert",
            children: message
          }
        ),
        downloadData && /* @__PURE__ */ jsxs("div", { className: "download-results-card bg-white rounded-4 shadow-sm p-4 p-md-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-semibold mb-1", children: downloadData.title || t2.defaultTitle }),
          /* @__PURE__ */ jsx("p", { className: "text-muted small mb-4", children: t2.previewNote }),
          isMp3Mode ? /* @__PURE__ */ jsxs(Fragment, { children: [
            downloadData.thumbnail && /* @__PURE__ */ jsx("div", { className: "mb-4 d-flex justify-content-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: downloadData.thumbnail,
                alt: downloadData.title || t2.defaultTitle,
                className: "rounded-3 shadow-sm audio-cover-img"
              }
            ) }),
            audioLink ? /* @__PURE__ */ jsxs("div", { className: "audio-player-wrapper mb-4", children: [
              /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faMusic, className: "audio-player-icon text-success" }),
              /* @__PURE__ */ jsx("audio", { className: "audio-player-large w-100", controls: true, src: audioLink })
            ] }) : /* @__PURE__ */ jsx("div", { className: "alert alert-warning", role: "alert", children: t2.noLinksForFormat("MP3") }),
            audioLink && /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: "btn btn-tiktok btn-lg px-5",
                onClick: () => handleFileDownload(audioLink, t2.downloadAudio, "audio"),
                disabled: isDownloading,
                children: [
                  /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faDownload, className: "me-2" }),
                  t2.downloadAudio
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            videoLink ? /* @__PURE__ */ jsxs("div", { className: "position-relative mb-4 mx-auto video-preview-wrap", children: [
              /* @__PURE__ */ jsx(
                "video",
                {
                  ref: videoRef,
                  className: "rounded-3 shadow",
                  controls: true,
                  src: videoLink,
                  poster: downloadData.thumbnail || void 0,
                  onPlay: handleVideoPlay,
                  onPause: handleVideoPause,
                  onEnded: handleVideoPause,
                  style: {
                    maxHeight: "520px",
                    width: "100%",
                    opacity: isVideoPlaying ? 1 : 0.85,
                    transition: "opacity 200ms ease"
                  }
                }
              ),
              showVideoControl && /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-light rounded-circle shadow position-absolute top-50 start-50 translate-middle",
                  onClick: toggleVideoPlayback,
                  "aria-label": isVideoPlaying ? "Pause" : "Play",
                  style: { width: "56px", height: "56px" },
                  children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: isVideoPlaying ? faPause : faPlay })
                }
              )
            ] }) : downloadData.thumbnail ? /* @__PURE__ */ jsx("div", { className: "mb-4 d-flex justify-content-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: downloadData.thumbnail,
                alt: downloadData.title || t2.defaultTitle,
                className: "rounded-3 shadow-sm",
                style: { maxHeight: "420px", maxWidth: "100%", objectFit: "contain" }
              }
            ) }) : null,
            downloadOptions.length > 0 && /* @__PURE__ */ jsx("div", { className: "d-flex flex-wrap justify-content-center gap-2 mb-3", children: downloadOptions.map((item) => /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "btn btn-outline-dark",
                onClick: () => handleFileDownload(item.url, item.text || t2.downloadButton),
                disabled: isDownloading,
                children: item.text || t2.downloadButton
              },
              `${item.url}-${item.text}`
            )) }),
            videoLink && /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: "btn btn-tiktok btn-lg px-5",
                onClick: () => handleFileDownload(videoLink, t2.downloadVideo, "video"),
                disabled: isDownloading,
                children: [
                  /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faDownload, className: "me-2" }),
                  t2.downloadVideo
                ]
              }
            ),
            downloadOptions.length === 0 && !videoLink && /* @__PURE__ */ jsx("div", { className: "alert alert-warning mb-0", role: "alert", children: t2.noLinksForFormat("MP4") })
          ] }),
          isDownloading && /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-center gap-2 mt-4 text-muted small", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "spinner-border spinner-border-sm",
                role: "status",
                "aria-hidden": "true"
              }
            ),
            t2.downloadingPrefix,
            " ",
            downloadLabel || "file",
            "..."
          ] })
        ] })
      ] }) }) })
    }
  );
}
function Downloader({
  t: t2,
  lockFormat,
  children
}) {
  const [format, setFormat] = useState(lockFormat ?? "mp4");
  const logic = useDownloaderLogic(t2);
  const effectiveFormat = lockFormat ?? format;
  const hasResults = !!(logic.message || logic.downloadData);
  const Form = /* @__PURE__ */ jsx(
    DownloaderForm,
    {
      t: t2,
      lockFormat,
      format: effectiveFormat,
      setFormat,
      logic
    }
  );
  const Results = /* @__PURE__ */ jsx(DownloadResults, { t: t2, format: effectiveFormat, logic });
  return /* @__PURE__ */ jsx(Fragment, { children: children({ Form, Results, hasResults }) });
}
const t$3 = {
  cardTitle: "",
  cardSubtitle: "",
  placeholder: "https://www.tiktok.com/@user/video/...",
  pasteButton: "Paste TikTok Link",
  mp4Label: "MP4 (Video)",
  mp3Label: "MP3 (Audio)",
  downloadButton: "Download",
  processing: "Processing...",
  resultsTitle: "Download Results",
  resultsSubtitle: "Preview your video and use the download button below.",
  previewNote: "Preview and download your video.",
  downloadVideo: "Download Video",
  downloadAudio: "Download Audio",
  downloadingPrefix: "Downloading",
  noLinksForFormat: (format) => `No ${format} links found. Try a different TikTok URL.`,
  invalidUrl: "Please enter a valid TikTok URL",
  fetchFailed: "Failed to fetch TikTok download links.",
  noLinksFound: "No download links were found. Try a different TikTok URL.",
  ready: "Download links are ready.",
  defaultTitle: "TikTok Download"
};
const features$1 = [
  "Download TikTok videos without watermark",
  "Download TikTok videos with watermark",
  "Save TikTok videos as MP4",
  "Download TikTok MP3 audio if supported",
  "Save TikTok sound, audio, and music if available",
  "Download TikTok photos or slideshows if supported",
  "Download public TikTok stories when available",
  "Save TikTok profile pictures if supported",
  "Download TikTok thumbnails or cover images if available",
  "Works on iPhone, Android, iPad, PC, and Mac",
  "No app install required",
  "No TikTok login required"
];
const faqs$3 = [
  {
    q: "What is a TikTok Downloader?",
    a: "A TikTok Downloader is an online tool that helps you save TikTok videos, audio, photos, stories, profile pictures, or thumbnails from public TikTok links."
  },
  {
    q: "Can I download TikTok videos without watermark?",
    a: "Yes, if the option is available, you can download TikTok videos without watermark and save a cleaner MP4 file without the moving TikTok logo."
  },
  {
    q: "Can I download TikTok videos with watermark?",
    a: "Yes, use the with watermark option if you want to keep the TikTok logo and creator username on the video."
  },
  {
    q: "Can I convert TikTok videos to MP3?",
    a: "Yes, if MP3 is supported, you can extract audio from a TikTok video and save it as an MP3 file."
  },
  {
    q: "Can I download TikTok sound, audio, or music?",
    a: "Yes, the MP3 or audio feature can help you save TikTok sounds, music, voiceovers, or original audio from public videos when available."
  },
  {
    q: "Can I download TikTok photos or slideshows?",
    a: "Yes, if the TikTok post contains photos or a slideshow and the feature is supported, you can save the images from the public link."
  },
  {
    q: "Can I download TikTok stories?",
    a: "Public TikTok stories may be downloaded if they are still active and the link is available. Expired or private stories may not work."
  },
  {
    q: "Can I download TikTok profile pictures?",
    a: "Yes, if the profile picture feature is supported, you may be able to save a TikTok profile image using a username or profile link."
  },
  {
    q: "Can I download TikTok thumbnails?",
    a: "Yes, if thumbnail download is supported, you can use a TikTok video link to save the video cover image or preview image."
  },
  {
    q: "Does this TikTok downloader work on iPhone?",
    a: "Yes, it works in Safari or other mobile browsers. Downloaded files may appear in the Files app or Photos depending on your device settings."
  },
  {
    q: "Does this TikTok downloader work on PC?",
    a: "Yes, you can use it on PC or laptop through a browser such as Chrome, Edge, Firefox, or Safari."
  },
  {
    q: "Do I need to install an app?",
    a: "No. This is a browser-based TikTok Downloader, so you do not need to install an app, APK, software, or extension."
  },
  {
    q: "Is this TikTok downloader free?",
    a: "Yes, the tool is free to use if your website offers it that way. Users can paste a public TikTok link and download available formats without payment."
  },
  {
    q: "Is login required?",
    a: "No. You do not need to log in to TikTok or share your TikTok password to use the downloader."
  },
  {
    q: "Can I download private TikTok videos?",
    a: "No. This tool is meant for public TikTok links only. Private videos, deleted videos, and restricted content cannot be processed."
  },
  {
    q: "Can I download TikTok videos by username?",
    a: "For a specific video, a direct video link is more accurate than a username. A username may help with profile-related features, such as profile picture download, if supported."
  },
  {
    q: "Where are downloaded TikTok videos saved?",
    a: "On Android and PC, files usually go to the Downloads folder. On iPhone or iPad, files may appear in the Files app or Photos depending on the browser."
  },
  {
    q: "Is it legal to download TikTok videos?",
    a: "Download content only for personal use, study, backup, or reference. If you want to repost, edit, share, or use someone else’s content commercially, get permission from the creator and respect copyright rules."
  }
];
function HomeEn() {
  return /* @__PURE__ */ jsx(Downloader, { t: t$3, lockFormat: "mp4", children: ({ Form, Results }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { id: "download-section", className: "hero-gradient text-white py-5", children: /* @__PURE__ */ jsx("div", { className: "container py-5", children: /* @__PURE__ */ jsxs("div", { className: "row align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-lg-6 mb-5 mb-lg-0", children: [
        /* @__PURE__ */ jsxs("h1", { className: "display-5 fw-bold mb-4", children: [
          "TikTok Downloader — Download TikTok Videos",
          " ",
          /* @__PURE__ */ jsx("span", { className: "tiktok-text", children: "Without Watermark" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "lead mb-3 text-white-50", children: "Save TikTok videos without watermark in a fast and simple way. Copy the TikTok video link, paste it into the downloader, then download the MP4 video you need, such as a no-watermark video, with-watermark video, photo, story, profile picture, or thumbnail if the feature is available." }),
        /* @__PURE__ */ jsx("p", { className: "mb-0 text-white-50", children: "Many people just want to save a funny clip, a tutorial, or a photo slideshow without installing another app or logging in. This TikTok Downloader is built for users on iPhone, Android, iPad, PC, and Mac who want a clean browser-based tool that works with public TikTok links." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-lg-6", children: [
        Form,
        /* @__PURE__ */ jsx("p", { className: "text-center text-white-50 small mt-3 mb-0", children: "Free • No Login • No App Needed • Works on iPhone, Android, and PC" })
      ] })
    ] }) }) }),
    Results,
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-5", children: /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Main Features of This TikTok Downloader" }) }),
      /* @__PURE__ */ jsx("div", { className: "row g-3", children: features$1.map((feature) => /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-start gap-2 bg-light rounded-3 p-3 h-100", children: [
        /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheckCircle, className: "text-success mt-1" }),
        /* @__PURE__ */ jsx("span", { children: feature })
      ] }) }, feature)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok Video Without Watermark" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "With this TikTok Downloader, you can save TikTok videos without watermark or moving TikTok logos. The downloaded video looks cleaner because the TikTok logo and creator username do not cover the video." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "This option is useful when you want to save videos for personal viewing, offline watching, study notes, editing references, or private collections. After the link is processed, choose the no watermark option to download the TikTok video as an MP4 file in the best available quality." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok Video With Watermark" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Not every user wants to remove the watermark. Sometimes you may want to keep the TikTok logo and creator username visible so the original source stays clear." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Use the with watermark option when creator credit matters. This is helpful when you are saving a video for reference, keeping the original TikTok branding, or sharing content only after getting proper permission from the creator." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Without Watermark vs With Watermark" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Choose without watermark if you want a clean video. Choose with watermark if you want to keep the TikTok logo and creator username visible." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Option" }),
          /* @__PURE__ */ jsx("th", { children: "Best For" }),
          /* @__PURE__ */ jsx("th", { children: "TikTok Logo" }),
          /* @__PURE__ */ jsx("th", { children: "Creator Username" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Without Watermark" }),
            /* @__PURE__ */ jsx("td", { children: "Clean video saving, editing reference, offline watching" }),
            /* @__PURE__ */ jsx("td", { children: "No" }),
            /* @__PURE__ */ jsx("td", { children: "No" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "With Watermark" }),
            /* @__PURE__ */ jsx("td", { children: "Keeping creator credit and original TikTok branding" }),
            /* @__PURE__ */ jsx("td", { children: "Yes" }),
            /* @__PURE__ */ jsx("td", { children: "Usually yes" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok MP4 Videos in the Best Available Quality" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "If you want to save a TikTok as a regular video file, choose MP4. MP4 works on most devices, including iPhone, Android, Windows, Mac, tablets, and smart TVs." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "The tool will try to download the best available quality from the original TikTok link. The final result depends on the quality of the video that was uploaded to TikTok." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok MP3, Sound, Audio, and Music" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "TikTok is full of trending sounds, voiceovers, background music, and short audio clips. If you only need the sound, choose the MP3 or audio option when it is available." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "This feature can help you extract audio from a public TikTok video and save it as an MP3 file if supported. It is useful for saving a favorite sound, music clip, voiceover, or audio reference without downloading the full video." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Available Download Formats" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Use one TikTok Downloader to save videos, audio, photos, stories, profile pictures, and thumbnails from public TikTok links when these formats are supported." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Format" }),
          /* @__PURE__ */ jsx("th", { children: "What It Saves" }),
          /* @__PURE__ */ jsx("th", { children: "Best Use" }),
          /* @__PURE__ */ jsx("th", { children: "File Type" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "MP4 Video" }),
            /* @__PURE__ */ jsx("td", { children: "TikTok video" }),
            /* @__PURE__ */ jsx("td", { children: "Offline watching or personal reference" }),
            /* @__PURE__ */ jsx("td", { children: ".mp4" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "MP3 Audio" }),
            /* @__PURE__ */ jsx("td", { children: "Sound, music, voiceover, or audio" }),
            /* @__PURE__ */ jsx("td", { children: "Saving audio only" }),
            /* @__PURE__ */ jsx("td", { children: ".mp3" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Photo" }),
            /* @__PURE__ */ jsx("td", { children: "TikTok image or slideshow photo" }),
            /* @__PURE__ */ jsx("td", { children: "Saving images from photo posts" }),
            /* @__PURE__ */ jsx("td", { children: ".jpg / .png" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Story" }),
            /* @__PURE__ */ jsx("td", { children: "Public active TikTok story" }),
            /* @__PURE__ */ jsx("td", { children: "Saving temporary content before it expires" }),
            /* @__PURE__ */ jsx("td", { children: ".mp4" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Profile Picture" }),
            /* @__PURE__ */ jsx("td", { children: "TikTok avatar or profile image" }),
            /* @__PURE__ */ jsx("td", { children: "Viewing a profile photo more clearly" }),
            /* @__PURE__ */ jsx("td", { children: ".jpg / .png" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Thumbnail" }),
            /* @__PURE__ */ jsx("td", { children: "Video cover or preview image" }),
            /* @__PURE__ */ jsx("td", { children: "Saving the TikTok video cover image" }),
            /* @__PURE__ */ jsx("td", { children: ".jpg" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "TikTok Photo and Slideshow Downloader" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "TikTok is not only for videos. Many creators now post photos, slideshows, and carousel-style content. A TikTok photo downloader can help you save images from public TikTok photo posts when the feature is supported." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "This is helpful for saving visual ideas, educational slides, memes, image collections, or photo posts you want to view later without opening TikTok again." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok Story" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "TikTok stories can disappear after a short time, so users often want to save them before they are gone." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "If a TikTok story is public, still active, and the link is available, the downloader may help you save it when this feature is supported. Private stories, expired stories, or broken links may not work." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok Profile Picture and Thumbnail" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "If supported, you can use this tool to save a TikTok profile picture or video thumbnail from a public link or profile." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "A profile picture is useful when you want to view a TikTok avatar more clearly. A thumbnail or cover image is useful when you want to save the preview image from a TikTok video." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "For profile pictures, a username or profile link may be needed if the feature is available. For thumbnails, a direct TikTok video link usually works better because the tool needs to read the video cover image." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "TikTok Video Download With Username" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Some users search for a way to download TikTok videos with a username. For a specific video, a direct TikTok video link is usually more accurate than a username." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "A username may help with profile-related features, such as profile picture download, if supported. For video downloads, copy the video link from TikTok and paste it into the downloader." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3 text-center", children: "How to Download TikTok Videos Online" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted text-center mb-5", children: "Using this TikTok Downloader is simple. You do not need to create an account, install software, or add a browser extension." }),
      /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
        /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-4 p-4 h-100 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "step-number mb-3", children: "1" }),
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Step 1: Copy the TikTok Video Link" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Open TikTok and find the video, photo, story, or audio you want to save. Tap the Share button and choose Copy Link." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-4 p-4 h-100 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "step-number mb-3", children: "2" }),
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Step 2: Paste the URL Into the Downloader" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Paste the TikTok link into the downloader box. Make sure the link is public, active, and copied correctly." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-4 p-4 h-100 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "step-number mb-3", children: "3" }),
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Step 3: Choose MP4, MP3, or Watermark Option" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "After the link is processed, choose the format you need. You may see options such as video without watermark, video with watermark, MP4, MP3, photo, story, profile picture, or thumbnail depending on what the tool supports." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-4 p-4 h-100 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "step-number mb-3", children: "4" }),
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Step 4: Save the File to Your Device" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Click the download button and wait for the file to save. On PC and Android, files usually go to the Downloads folder. On iPhone or iPad, files may appear in the Files app or Photos, depending on your browser settings." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "TikTok Downloader for iPhone, Android, and PC" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "This TikTok Downloader works directly in your browser, so you can use it on phones, tablets, laptops, and desktop computers." }),
      /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
        /* @__PURE__ */ jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-light rounded-4 p-4 h-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Download TikTok Videos on iPhone or iPad" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "On iPhone or iPad, open TikTok, copy the video link, then paste it into the downloader using Safari or another browser. After downloading, check the Files app or Photos app." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-light rounded-4 p-4 h-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Download TikTok Videos on Android" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "On Android, copy the TikTok link from the app, paste it into the downloader, choose a format, and save the file. Most downloads appear in the Downloads folder or File Manager." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-light rounded-4 p-4 h-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Download TikTok Videos on PC or Mac" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "On PC or Mac, open the downloader in Chrome, Edge, Firefox, or Safari. Paste the TikTok URL, choose your download option, and save the file to your computer." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Works on iPhone, Android, and PC" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "This TikTok Downloader works directly in your browser, so you do not need to install an app, APK, software, or browser extension." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Device" }),
          /* @__PURE__ */ jsx("th", { children: "Browser" }),
          /* @__PURE__ */ jsx("th", { children: "How to Download" }),
          /* @__PURE__ */ jsx("th", { children: "Where Files Usually Save" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "iPhone / iPad" }),
            /* @__PURE__ */ jsx("td", { children: "Safari, Chrome" }),
            /* @__PURE__ */ jsx("td", { children: "Paste the TikTok link, choose a format, then download" }),
            /* @__PURE__ */ jsx("td", { children: "Files / Photos" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Android" }),
            /* @__PURE__ */ jsx("td", { children: "Chrome, Firefox, Samsung Internet" }),
            /* @__PURE__ */ jsx("td", { children: "Paste the TikTok link, choose a format, then download" }),
            /* @__PURE__ */ jsx("td", { children: "Downloads / File Manager" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "PC / Mac" }),
            /* @__PURE__ */ jsx("td", { children: "Chrome, Edge, Firefox, Safari" }),
            /* @__PURE__ */ jsx("td", { children: "Paste the TikTok URL, choose an option, then save the file" }),
            /* @__PURE__ */ jsx("td", { children: "Downloads folder" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Do You Need a TikTok Downloader App or APK?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "No, you do not need to install a TikTok downloader app, APK file, browser extension, or extra software to use this tool." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "A browser-based downloader is easier for most users because it saves space on your device and avoids unnecessary app installs. You only need a public TikTok link and an internet connection." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mt-4", children: "No App or APK Needed" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Use this TikTok Downloader directly in your browser. No APK, no app install, no browser extension, no extra software, and no TikTok login required." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Copy a public TikTok link, paste it into the downloader, choose your format, and save the file to your device when the download option is available." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Free TikTok Downloader With No Login" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "This TikTok Downloader is made to be simple and easy to use. You do not need to create an account, sign in to TikTok, or enter your TikTok password." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Just paste a public TikTok link, choose your format, and download the file if it is available. This makes the process faster and safer for users who only want to save public TikTok content." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Is This TikTok Downloader Safe?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "This tool does not ask for your TikTok password or require you to log in. You only need to paste the public TikTok link you want to process." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "For privacy and responsible use, only use the downloader for public content. Private videos, deleted videos, expired stories, or broken links may not work." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Responsible Use and Copyright" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Use downloaded files for personal viewing, study, backup, or reference. If you want to repost, share, edit, or use someone else’s TikTok content for business, make sure you have permission from the creator." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Respect creator rights and give proper credit when needed. This tool is meant to help users save public TikTok content responsibly, not to misuse someone else’s work." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-5", children: /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Frequently Asked Questions" }) }),
      /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-9", children: /* @__PURE__ */ jsx("div", { className: "accordion faq-accordion", id: "faqAccordionEn", children: faqs$3.map((faq, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "accordion-header", children: /* @__PURE__ */ jsx(
              "button",
              {
                className: `accordion-button ${index === 0 ? "" : "collapsed"}`,
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": `#faqEn${index}`,
                children: faq.q
              }
            ) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                id: `faqEn${index}`,
                className: `accordion-collapse collapse ${index === 0 ? "show" : ""}`,
                "data-bs-parent": "#faqAccordionEn",
                children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: faq.a })
              }
            )
          ]
        },
        faq.q
      )) }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "hero-gradient text-white py-5", children: /* @__PURE__ */ jsxs("div", { className: "container py-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok Videos Faster and Easier" }),
      /* @__PURE__ */ jsx("p", { className: "lead text-white-50 mb-0 mx-auto", style: { maxWidth: "900px" }, children: "This TikTok Downloader is built to make saving public TikTok content simple, clear, and less frustrating. From videos without watermark and MP3 audio to photos, stories, profile pictures, thumbnails, and device support, the best page is the one that helps users get what they need quickly while staying honest about privacy, quality, and creator rights." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-4 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "h5 fw-bold mb-2", children: "Disclaimer" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted small mb-0", children: "This tool is not affiliated with TikTok. Please respect creator rights and use downloaded content responsibly." })
    ] }) })
  ] }) });
}
const t$2 = {
  cardTitle: "",
  cardSubtitle: "",
  placeholder: "https://www.tiktok.com/@user/video/...",
  pasteButton: "Paste TikTok Link",
  mp4Label: "MP4 (Video)",
  mp3Label: "MP3 (Audio)",
  downloadButton: "Download",
  processing: "Memproses...",
  resultsTitle: "Hasil Download",
  resultsSubtitle: "Lihat preview video, lalu gunakan tombol download di bawah ini.",
  previewNote: "Preview dan download video kamu.",
  downloadVideo: "Download Video",
  downloadAudio: "Download Audio",
  downloadingPrefix: "Mengunduh",
  noLinksForFormat: (format) => `Link ${format} tidak ditemukan. Coba link TikTok lain.`,
  invalidUrl: "Masukkan link TikTok yang valid",
  fetchFailed: "Gagal mengambil link download TikTok.",
  noLinksFound: "Tidak ada link download yang ditemukan. Coba link TikTok lain.",
  ready: "Link download sudah siap.",
  defaultTitle: "Download TikTok"
};
const features = [
  "Download video without watermark",
  "Download video with watermark",
  "Download MP4 HD",
  "Convert TikTok to MP3 audio",
  "Download TikTok sound, audio, dan music",
  "Download TikTok photo atau slide",
  "Download TikTok story jika link publik tersedia",
  "Download TikTok profile picture jika fitur tersedia",
  "Download TikTok thumbnail atau cover image",
  "Bisa digunakan di Android, iPhone, iPad, dan PC",
  "Tidak perlu APK",
  "Tidak perlu login TikTok"
];
const faqs$2 = [
  {
    q: "What is a TikTok Downloader?",
    a: "TikTok Downloader adalah tool online untuk menyimpan video, audio, foto, story, profile picture, atau thumbnail dari TikTok menggunakan link publik."
  },
  {
    q: "Can I download TikTok videos without watermark?",
    a: "Ya, kamu bisa memilih opsi download video TikTok tanpa watermark jika tersedia. Hasilnya berupa video bersih tanpa logo TikTok yang bergerak."
  },
  {
    q: "Can I download TikTok videos with watermark?",
    a: "Ya, gunakan opsi with watermark jika kamu ingin video tetap menampilkan logo TikTok dan username kreator."
  },
  {
    q: "Does this TikTok downloader support HD quality?",
    a: "Tool akan mencoba mengambil kualitas terbaik yang tersedia dari link video. Hasil akhir tergantung kualitas video asli di TikTok."
  },
  {
    q: "Is this TikTok downloader free?",
    a: "Ya, tool ini gratis digunakan. Tidak perlu membayar, daftar, atau login untuk download video TikTok."
  },
  {
    q: "Do I need to install a TikTok Downloader APK?",
    a: "Tidak. Kamu bisa menggunakan downloader ini langsung dari browser tanpa APK, tanpa app, dan tanpa software tambahan."
  },
  {
    q: "Is this a TikTok video download app?",
    a: "Ini adalah online web tool, bukan aplikasi yang harus diinstall. Kamu bisa membukanya lewat browser di Android, iPhone, iPad, atau PC."
  },
  {
    q: "Can I download TikTok videos on PC?",
    a: "Ya. Buka downloader ini di browser PC atau laptop, paste link TikTok, lalu pilih format download."
  },
  {
    q: "Can I download TikTok videos on iPhone?",
    a: "Ya. Gunakan Safari atau browser lain di iPhone. File biasanya tersimpan di aplikasi Files, lalu bisa kamu pindahkan jika diperlukan."
  },
  {
    q: "Can I convert TikTok video to MP3?",
    a: "Ya, jika opsi MP3 tersedia, kamu bisa mengambil audio dari video TikTok dan menyimpannya sebagai file MP3."
  },
  {
    q: "Can I download TikTok sound, audio, or music?",
    a: "Ya. Gunakan fitur MP3/audio untuk menyimpan sound, musik, voiceover, atau original sound dari TikTok."
  },
  {
    q: "Can I use this as a TikTok photo downloader?",
    a: "Ya, jika konten TikTok berupa foto atau slideshow, kamu bisa menggunakan fitur photo downloader untuk menyimpan gambar."
  },
  {
    q: "Can I download TikTok stories?",
    a: "Ya, story publik yang masih aktif bisa diproses jika link tersedia dan dapat diakses."
  },
  {
    q: "Can I download TikTok profile picture?",
    a: "Ya, gunakan username atau link profil jika fitur profile picture downloader tersedia di tool."
  },
  {
    q: "Can I download TikTok video with username?",
    a: "Untuk download video tertentu, link video langsung lebih akurat daripada username. Username lebih cocok untuk fitur profil, seperti profile picture."
  },
  {
    q: "Where are downloaded TikTok videos saved?",
    a: "Di Android dan PC, file biasanya masuk ke folder Downloads. Di iPhone, file biasanya tersimpan di Files atau Photos, tergantung browser."
  },
  {
    q: "Can I download private TikTok videos?",
    a: "Tidak. Tool ini hanya bekerja untuk konten publik yang bisa diakses melalui link. Private videos tidak dapat diproses."
  },
  {
    q: "Is it legal to download TikTok videos?",
    a: "Gunakan file yang kamu download untuk kebutuhan pribadi, referensi, atau belajar. Jika ingin repost, membagikan ulang, atau memakai konten untuk bisnis, pastikan kamu punya izin dari kreator dan tetap menghormati hak cipta."
  }
];
function HomeId() {
  return /* @__PURE__ */ jsx(Downloader, { t: t$2, lockFormat: "mp4", children: ({ Form, Results }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { id: "download-section", className: "hero-gradient text-white py-5", children: /* @__PURE__ */ jsx("div", { className: "container py-5", children: /* @__PURE__ */ jsxs("div", { className: "row align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-lg-6 mb-5 mb-lg-0", children: [
        /* @__PURE__ */ jsxs("h1", { className: "display-5 fw-bold mb-4", children: [
          "TikTok Downloader — Download Video TikTok",
          " ",
          /* @__PURE__ */ jsx("span", { className: "tiktok-text", children: "Tanpa Watermark HD" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "lead mb-3 text-white-50", children: "Download video TikTok tanpa watermark dengan cepat, gratis, dan mudah. Cukup salin link video TikTok, tempel di kotak downloader, lalu download video MP4 yang kamu butuhkan seperti video tanpa watermark, video dengan watermark, foto, story, profile picture, atau thumbnail jika tersedia." }),
        /* @__PURE__ */ jsx("p", { className: "mb-0 text-white-50", children: "Kadang kita hanya ingin menyimpan video lucu, tutorial, atau slideshow foto dari TikTok tanpa ribet install aplikasi tambahan. Tool ini dibuat untuk pengguna Android, iPhone, iPad, dan PC yang ingin download konten TikTok langsung dari browser tanpa login dan tanpa APK." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-lg-6", children: [
        Form,
        /* @__PURE__ */ jsx("p", { className: "text-center text-white-50 small mt-3 mb-0", children: "Gratis • Tanpa Login • Tanpa APK • Support Android, iPhone, dan PC" })
      ] })
    ] }) }) }),
    Results,
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-5", children: /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Fitur Utama TikTok Downloader" }) }),
      /* @__PURE__ */ jsx("div", { className: "row g-3", children: features.map((feature) => /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-start gap-2 bg-light rounded-3 p-3 h-100", children: [
        /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheckCircle, className: "text-success mt-1" }),
        /* @__PURE__ */ jsx("span", { children: feature })
      ] }) }, feature)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok Video Without Watermark in HD" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Dengan TikTok Downloader ini, kamu bisa menyimpan video TikTok tanpa watermark atau tanpa tanda air. Video yang diunduh terlihat lebih bersih karena logo TikTok dan username yang bergerak tidak muncul di atas video." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Fitur ini cocok untuk menyimpan video pribadi, referensi editing, materi belajar, atau konten yang ingin kamu tonton lagi secara offline. Setelah link diproses, pilih opsi download without watermark untuk menyimpan video dalam format MP4 dengan kualitas terbaik yang tersedia." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok Video With Watermark" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Tidak semua pengguna ingin menghapus watermark. Beberapa orang tetap ingin menyimpan video dengan watermark karena ingin mempertahankan logo TikTok dan username kreator asli." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Gunakan opsi download with watermark jika kamu ingin video tetap menampilkan identitas kreator. Ini berguna saat kamu ingin menyimpan video sebagai referensi, membagikan ulang dengan kredit yang jelas, atau tetap menjaga tanda asli dari konten TikTok tersebut." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Without Watermark vs With Watermark" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Pilih download tanpa watermark jika kamu ingin video bersih tanpa logo TikTok. Pilih download dengan watermark jika kamu ingin tetap menyimpan logo TikTok dan username kreator." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Fitur / Perbedaan" }),
          /* @__PURE__ */ jsx("th", { children: "Without Watermark" }),
          /* @__PURE__ */ jsx("th", { children: "With Watermark" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Logo TikTok" }),
            /* @__PURE__ */ jsx("td", { children: "Tidak ada" }),
            /* @__PURE__ */ jsx("td", { children: "Ada" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Username Kreator" }),
            /* @__PURE__ */ jsx("td", { children: "Tidak ada" }),
            /* @__PURE__ */ jsx("td", { children: "Biasanya ada" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Tampilan Video" }),
            /* @__PURE__ */ jsx("td", { children: "Lebih bersih dan rapi" }),
            /* @__PURE__ */ jsx("td", { children: "Menampilkan identitas kreator" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Cocok Untuk" }),
            /* @__PURE__ */ jsx("td", { children: "Koleksi pribadi, editing, atau tontonan offline" }),
            /* @__PURE__ */ jsx("td", { children: "Referensi, repost dengan izin, atau menjaga kredit kreator" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "TikTok Downloader HD for MP4 Videos" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Jika kamu ingin menyimpan video TikTok sebagai file video biasa, pilih format MP4. Format ini mudah diputar di hampir semua perangkat, termasuk Android, iPhone, Windows, Mac, dan tablet." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Tool ini akan mencoba mengambil kualitas terbaik yang tersedia dari link video TikTok tersebut. Hasil akhir tetap tergantung pada kualitas video asli yang diunggah di TikTok." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok MP3, Sound, Audio, and Music" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Selain video, kamu juga bisa mengambil audio dari TikTok. Pilih opsi MP3 jika kamu hanya ingin menyimpan sound, musik, voiceover, atau lagu TikTok tanpa videonya." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Fitur ini cocok untuk pengguna yang suka menyimpan original sound, background music, atau audio viral dari TikTok. Cukup paste link video, lalu pilih format audio untuk mengubah video TikTok menjadi MP3 jika opsi tersedia." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Format Download yang Tersedia" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Gunakan satu TikTok Downloader untuk menyimpan video, audio, foto, story, profile picture, dan thumbnail dari link publik TikTok jika fitur tersedia di tool." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Format" }),
          /* @__PURE__ */ jsx("th", { children: "Apa yang Disimpan" }),
          /* @__PURE__ */ jsx("th", { children: "Cocok Untuk" }),
          /* @__PURE__ */ jsx("th", { children: "File Type" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "MP4 Video" }),
            /* @__PURE__ */ jsx("td", { children: "Video TikTok" }),
            /* @__PURE__ */ jsx("td", { children: "Menonton offline" }),
            /* @__PURE__ */ jsx("td", { children: ".mp4" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "MP3 Audio" }),
            /* @__PURE__ */ jsx("td", { children: "Sound, audio, atau musik TikTok" }),
            /* @__PURE__ */ jsx("td", { children: "Menyimpan lagu atau original sound" }),
            /* @__PURE__ */ jsx("td", { children: ".mp3" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Photo" }),
            /* @__PURE__ */ jsx("td", { children: "Foto atau slide TikTok" }),
            /* @__PURE__ */ jsx("td", { children: "Menyimpan gambar atau slideshow" }),
            /* @__PURE__ */ jsx("td", { children: ".jpg / .png" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Story" }),
            /* @__PURE__ */ jsx("td", { children: "Story TikTok publik" }),
            /* @__PURE__ */ jsx("td", { children: "Menyimpan story sebelum hilang" }),
            /* @__PURE__ */ jsx("td", { children: ".mp4" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Profile Picture" }),
            /* @__PURE__ */ jsx("td", { children: "Foto profil TikTok" }),
            /* @__PURE__ */ jsx("td", { children: "Melihat avatar dalam ukuran lebih jelas" }),
            /* @__PURE__ */ jsx("td", { children: ".jpg / .png" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Thumbnail" }),
            /* @__PURE__ */ jsx("td", { children: "Cover atau preview video TikTok" }),
            /* @__PURE__ */ jsx("td", { children: "Menyimpan cover image video" }),
            /* @__PURE__ */ jsx("td", { children: ".jpg" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "TikTok Photo Downloader" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "TikTok sekarang bukan hanya video. Banyak pengguna juga membagikan foto, slide, dan slideshow. Dengan TikTok Photo Downloader, kamu bisa menyimpan foto TikTok dari postingan slide dengan lebih mudah jika fitur tersedia." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Jika postingan berisi beberapa foto, kamu bisa memilih file yang ingin disimpan. Ini cocok untuk menyimpan gambar inspirasi, foto edukasi, meme, atau slideshow yang ingin dilihat lagi tanpa membuka aplikasi TikTok." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok Story" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "TikTok Story biasanya hanya tampil dalam waktu terbatas, jadi banyak pengguna ingin menyimpannya sebelum hilang." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Jika story masih aktif dan link publiknya tersedia, fitur story downloader dapat membantu kamu menyimpan story TikTok ke perangkat." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok Profile Picture and Thumbnail" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Jika fitur tersedia, kamu bisa menyimpan profile picture TikTok atau thumbnail video dari link publik." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Profile picture biasanya dipakai untuk melihat foto profil dalam ukuran lebih jelas, sedangkan thumbnail berguna untuk menyimpan cover atau preview dari video TikTok." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Untuk profile picture, gunakan username atau link profil jika tool mendukungnya. Untuk thumbnail, gunakan link video TikTok agar tool bisa mengambil cover image dari video tersebut." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "TikTok Video Download With Username" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Sebagian pengguna mencari cara download video TikTok dengan username. Namun, untuk hasil paling akurat, video biasanya lebih mudah diproses menggunakan link video langsung, bukan hanya username." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Username bisa berguna untuk fitur seperti profile picture atau pencarian profil. Tapi untuk download video tertentu, salin link video dari tombol share di TikTok, lalu paste link tersebut ke downloader." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3 text-center", children: "How to Download TikTok Videos" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted text-center mb-5", children: "Menggunakan TikTok Downloader ini sangat mudah. Kamu tidak perlu membuat akun, login, atau install aplikasi tambahan." }),
      /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
        /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-4 p-4 h-100 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "step-number mb-3", children: "1" }),
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Step 1: Copy the TikTok Video Link" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Buka aplikasi TikTok atau website TikTok. Pilih video, story, foto, atau konten yang ingin kamu simpan. Tekan tombol Share, lalu pilih Copy Link." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-4 p-4 h-100 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "step-number mb-3", children: "2" }),
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Step 2: Paste the Link in the Downloader" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Tempel link TikTok ke kotak downloader di halaman ini. Pastikan link yang kamu paste adalah link publik dan masih aktif." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-4 p-4 h-100 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "step-number mb-3", children: "3" }),
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Step 3: Choose MP4, MP3, Photo, Story, or Watermark Option" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Setelah link diproses, pilih format yang kamu butuhkan. Kamu bisa memilih video without watermark, video with watermark, MP3/audio, photo, story, profile picture, atau thumbnail jika tersedia." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-4 p-4 h-100 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "step-number mb-3", children: "4" }),
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Step 4: Save the File to Your Device" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Klik tombol download dan tunggu sampai file tersimpan. Di Android dan PC, file biasanya masuk ke folder Downloads. Di iPhone, file bisa tersimpan di Files atau Photos, tergantung browser dan pengaturan perangkat." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "TikTok Downloader for Android, iPhone, and PC" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Tool ini berjalan langsung dari browser, jadi kamu bisa menggunakannya di banyak perangkat tanpa install aplikasi tambahan." }),
      /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
        /* @__PURE__ */ jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-light rounded-4 p-4 h-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Download TikTok Videos on Android" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Di Android, buka TikTok, salin link video, lalu paste link di downloader. Setelah download selesai, file biasanya ada di folder Downloads atau File Manager." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-light rounded-4 p-4 h-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Download TikTok Videos on iPhone or iPad" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Di iPhone atau iPad, gunakan Safari atau browser lain. Setelah file diunduh, kamu bisa menemukannya di aplikasi Files. Beberapa file juga bisa dipindahkan ke Photos." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-light rounded-4 p-4 h-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold", children: "Download TikTok Videos on PC or Laptop" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Di PC, kamu hanya perlu browser seperti Chrome, Edge, Firefox, atau Safari. Tidak perlu software tambahan. Paste link TikTok, pilih format, lalu simpan file ke komputer." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Didukung di Android, iPhone, dan PC" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Tool ini bekerja langsung dari browser, jadi kamu tidak perlu install aplikasi, software, atau ekstensi tambahan." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Perangkat" }),
          /* @__PURE__ */ jsx("th", { children: "Browser" }),
          /* @__PURE__ */ jsx("th", { children: "Cara Download" }),
          /* @__PURE__ */ jsx("th", { children: "Lokasi File Tersimpan" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Android" }),
            /* @__PURE__ */ jsx("td", { children: "Chrome, Firefox, Samsung Internet" }),
            /* @__PURE__ */ jsx("td", { children: "Paste link, pilih format, klik download" }),
            /* @__PURE__ */ jsx("td", { children: "Downloads / File Manager" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "iPhone / iPad" }),
            /* @__PURE__ */ jsx("td", { children: "Safari, Chrome" }),
            /* @__PURE__ */ jsx("td", { children: "Paste link, pilih format, klik download" }),
            /* @__PURE__ */ jsx("td", { children: "Files / Photos" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "PC / Laptop" }),
            /* @__PURE__ */ jsx("td", { children: "Chrome, Edge, Firefox, Safari" }),
            /* @__PURE__ */ jsx("td", { children: "Paste link, pilih format, klik download" }),
            /* @__PURE__ */ jsx("td", { children: "Downloads Folder" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Do You Need a TikTok Downloader APK or App?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Tidak. Kamu tidak perlu download APK atau install TikTok video download app untuk menggunakan tool ini. Semuanya bisa dilakukan langsung dari browser." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Ini lebih praktis karena kamu tidak perlu memenuhi memori HP dengan aplikasi tambahan. Kamu juga tidak perlu login ke akun TikTok atau memberikan password." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mt-4", children: "Tidak Perlu APK atau Aplikasi" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Kamu tidak perlu menginstall APK, aplikasi tambahan, software, atau ekstensi browser. TikTok Downloader ini bisa digunakan langsung dari browser di Android, iPhone, iPad, PC, atau laptop." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Cukup salin link TikTok, tempel di kotak downloader, pilih format, lalu simpan file ke perangkat kamu. Tidak perlu login dan tidak perlu memasukkan password TikTok." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Free TikTok Downloader With No Login" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "TikTok Downloader ini bisa digunakan gratis. Kamu tidak perlu daftar akun, tidak perlu login, dan tidak perlu memasukkan password TikTok." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Cukup gunakan link video publik. Ini membuat proses download lebih cepat dan lebih aman untuk pengguna yang hanya ingin menyimpan video, audio, foto, atau story dari TikTok." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Is This TikTok Downloader Safe?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Tool ini tidak meminta password TikTok dan tidak membutuhkan login. Kamu hanya perlu menempelkan link konten TikTok yang ingin diunduh." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Untuk menjaga privasi dan penggunaan yang benar, gunakan tool ini hanya untuk konten publik. Video private, video yang sudah dihapus, atau link yang tidak bisa diakses mungkin tidak dapat diproses." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Responsible Use and Copyright" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Gunakan file yang kamu download untuk kebutuhan pribadi, referensi, atau belajar. Jika ingin repost, membagikan ulang, atau memakai konten untuk bisnis, pastikan kamu punya izin dari kreator dan tetap menghormati hak cipta." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Tool ini dibuat untuk membantu pengguna menyimpan konten TikTok dari link publik. Jangan gunakan konten orang lain untuk tujuan komersial tanpa izin." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-5", children: /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Frequently Asked Questions" }) }),
      /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-9", children: /* @__PURE__ */ jsx("div", { className: "accordion faq-accordion", id: "faqAccordionId", children: faqs$2.map((faq, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "accordion-header", children: /* @__PURE__ */ jsx(
              "button",
              {
                className: `accordion-button ${index === 0 ? "" : "collapsed"}`,
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": `#faqId${index}`,
                children: faq.q
              }
            ) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                id: `faqId${index}`,
                className: `accordion-collapse collapse ${index === 0 ? "show" : ""}`,
                "data-bs-parent": "#faqAccordionId",
                children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: faq.a })
              }
            )
          ]
        },
        faq.q
      )) }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "hero-gradient text-white py-5", children: /* @__PURE__ */ jsxs("div", { className: "container py-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Download TikTok Videos Faster and Easier" }),
      /* @__PURE__ */ jsx("p", { className: "lead text-white-50 mb-0 mx-auto", style: { maxWidth: "900px" }, children: "TikTok Downloader ini dibuat untuk satu hal: membantu kamu menyimpan konten TikTok dengan cara yang cepat, jelas, dan tidak ribet. Dari video without watermark HD, video with watermark, MP3/audio/music, photo, story, profile picture, sampai thumbnail, semuanya bisa diarahkan dari satu halaman tanpa APK, tanpa login, dan tanpa install aplikasi tambahan." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-4 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "h5 fw-bold mb-2", children: "Disclaimer" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted small mb-0", children: "This tool is not affiliated with TikTok. Please respect creator rights and use downloaded content responsibly." })
    ] }) })
  ] }) });
}
function YesMark({ label }) {
  return /* @__PURE__ */ jsxs("span", { className: "status-icon status-icon-yes", children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheck }),
    label ? /* @__PURE__ */ jsx("span", { className: "ms-1", children: label }) : null
  ] });
}
function NoMark({ label }) {
  return /* @__PURE__ */ jsxs("span", { className: "status-icon status-icon-no", children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faXmark }),
    label ? /* @__PURE__ */ jsx("span", { className: "ms-1", children: label }) : null
  ] });
}
function CheckListItem({
  children,
  className = "mb-2"
}) {
  return /* @__PURE__ */ jsxs("li", { className: `d-flex align-items-start gap-2 ${className}`, children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheckCircle, className: "text-success mt-1 flex-shrink-0" }),
    /* @__PURE__ */ jsx("span", { children })
  ] });
}
function StepFlow({ steps }) {
  return /* @__PURE__ */ jsx("div", { className: "step-flow bg-light rounded-4 p-4", children: steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "step-flow-block", children: [
    /* @__PURE__ */ jsxs("div", { className: "step-flow-item", children: [
      /* @__PURE__ */ jsx("span", { className: "step-flow-number", children: index + 1 }),
      /* @__PURE__ */ jsx("span", { children: step })
    ] }),
    index < steps.length - 1 ? /* @__PURE__ */ jsx("div", { className: "step-flow-arrow text-muted", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faArrowDown }) }) : null
  ] }, step)) });
}
const t$1 = {
  cardTitle: "",
  cardSubtitle: "",
  placeholder: "https://www.tiktok.com/@user/video/...",
  pasteButton: "Paste TikTok Link",
  mp4Label: "MP4 (Video)",
  mp3Label: "MP3 (Audio)",
  downloadButton: "Download",
  processing: "Processing...",
  resultsTitle: "Download Results",
  resultsSubtitle: "Preview your audio and use the download links below.",
  previewNote: "Preview and download your audio.",
  downloadVideo: "Download Video",
  downloadAudio: "Download Audio",
  downloadingPrefix: "Downloading",
  noLinksForFormat: (format) => `No ${format} links found. Try a different TikTok URL.`,
  invalidUrl: "Please enter a valid TikTok URL",
  fetchFailed: "Failed to fetch TikTok download links.",
  noLinksFound: "No download links were found. Try a different TikTok URL.",
  ready: "Download links are ready.",
  defaultTitle: "TikTok Download"
};
const faqs$1 = [
  {
    q: "Is this TikTok MP3 Downloader free?",
    a: "Yes. You can use our TikTok MP3 Downloader to convert audio from supported public TikTok videos without paying subscription fees. There are no sign-up requirements, making it easy to start downloading immediately."
  },
  {
    q: "Do I need to install an app or browser extension?",
    a: "No. Everything works directly in your web browser. Simply paste the TikTok video URL into the downloader, convert the audio, and save the MP3 file."
  },
  {
    q: "Can I download TikTok audio without downloading the video?",
    a: "Yes. This tool is designed to extract the audio track from supported public TikTok videos, allowing you to download only the MP3 file instead of the entire video."
  },
  {
    q: "Does this work on Android and iPhone?",
    a: "Yes. Our TikTok Audio Downloader works on Android phones, iPhones, iPads, Windows PCs, Macs, Linux devices, Chromebooks, and tablets using supported web browsers."
  },
  {
    q: "Which browsers are supported?",
    a: "The downloader is compatible with Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, Opera, Brave, Samsung Internet, and most modern browsers."
  },
  {
    q: "Can I convert TikTok videos into MP3 on my computer?",
    a: "Yes. Whether you're using Windows, macOS, Linux, or ChromeOS, you can convert supported public TikTok videos directly from your browser."
  },
  {
    q: "Why isn't my TikTok link working?",
    a: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { className: "mb-2", children: "The most common reasons include:" }),
      /* @__PURE__ */ jsxs("ul", { className: "mb-0", children: [
        /* @__PURE__ */ jsx("li", { children: "The video is private." }),
        /* @__PURE__ */ jsx("li", { children: "The video has been deleted." }),
        /* @__PURE__ */ jsx("li", { children: "The URL wasn't copied correctly." }),
        /* @__PURE__ */ jsx("li", { children: "The content isn't publicly accessible." }),
        /* @__PURE__ */ jsx("li", { children: "There is a temporary network issue." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mb-0 mt-2", children: "Try copying the original TikTok link again and make sure it points to a public video." })
    ] })
  },
  {
    q: "Can I download private TikTok videos?",
    a: "No. The downloader only works with publicly available TikTok videos. Private or restricted content cannot be processed."
  },
  {
    q: "Does the downloader support original TikTok sounds?",
    a: "Yes. If the original sound is part of a publicly accessible TikTok video and can be processed, you can download it as an MP3 file."
  },
  {
    q: "What audio quality will I receive?",
    a: "The downloaded MP3 reflects the quality of the original TikTok audio. Converting a file cannot improve audio that was already compressed or recorded at a lower quality."
  },
  {
    q: "Is there a daily download limit?",
    a: "For normal personal use, there are no fixed daily download limits. You can convert multiple supported public TikTok videos whenever needed."
  },
  {
    q: "Can I save TikTok audio for offline listening?",
    a: "Yes. After downloading the MP3, you can play it offline using your preferred music player without needing an internet connection."
  },
  {
    q: "Can I use downloaded TikTok audio as a ringtone?",
    a: "If you have the necessary rights or permission to use the audio, you can convert the downloaded MP3 into a ringtone supported by your device."
  },
  {
    q: "How long does the conversion process take?",
    a: "Most conversions only take a few moments. Processing time depends on factors such as your internet connection, server load, and the availability of the public TikTok video."
  },
  {
    q: "Is my personal information required?",
    a: "No. You don't need to create an account or provide unnecessary personal information to use the downloader."
  },
  {
    q: "Is the TikTok MP3 Downloader safe?",
    a: "The tool is browser-based and doesn't require software installation. For complete information about data handling, please review our Privacy Policy and Terms of Service."
  },
  {
    q: "Can I download my own TikTok audio?",
    a: "Yes. Many creators use the downloader to save backups of their own public voiceovers, music, interviews, podcasts, and original recordings."
  },
  {
    q: "Why is the MP3 unavailable for some videos?",
    a: "Some TikTok videos may have restricted audio, unavailable media, regional limitations, or privacy settings that prevent audio extraction."
  },
  {
    q: "Can I use this downloader on a tablet?",
    a: "Yes. Android tablets, iPads, and other tablet devices are fully supported through compatible web browsers."
  },
  {
    q: "Will this tool always work with future TikTok updates?",
    a: "We regularly improve the downloader to maintain compatibility with changes to publicly accessible TikTok content. If TikTok updates its platform, the tool may also require updates to continue providing reliable service."
  }
];
function Mp3En() {
  return /* @__PURE__ */ jsx(Downloader, { t: t$1, lockFormat: "mp3", children: ({ Form, Results }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { id: "download-section", className: "hero-gradient text-white py-5", children: /* @__PURE__ */ jsx("div", { className: "container py-5", children: /* @__PURE__ */ jsxs("div", { className: "row align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-lg-6 mb-5 mb-lg-0", children: [
        /* @__PURE__ */ jsx("h1", { className: "display-5 fw-bold mb-4", children: "TikTok MP3 Downloader – Free TikTok Audio & Sound Download Online" }),
        /* @__PURE__ */ jsx("p", { className: "lead mb-3 text-white-50", children: "Download TikTok audio as high-quality MP3 in just a few clicks. Our TikTok MP3 Downloader lets you convert public TikTok videos into MP3 files online without installing software, creating an account, or downloading the entire video." }),
        /* @__PURE__ */ jsx("p", { className: "mb-0 text-white-50", children: "Whether you want to save a trending TikTok sound, music clip, voiceover, podcast, or your own original recording, simply copy the TikTok link, paste the URL into the downloader, and download the audio directly from your browser. The tool works on Android, iPhone, Windows, macOS, Linux, tablets, and all major browsers, making it easy to enjoy TikTok audio offline whenever you need it." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-lg-6", children: [
        Form,
        /* @__PURE__ */ jsx("p", { className: "text-center text-white-50 small mt-3 mb-0", children: "Free • No Login • No App Needed • Works on iPhone, Android, and PC" })
      ] })
    ] }) }) }),
    Results,
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "How to Download TikTok MP3" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Downloading audio from a public TikTok video only takes a few moments. Follow these simple steps to convert TikTok videos into MP3 files without installing additional software." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Step 1: Copy the TikTok Video Link" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Open the TikTok app or website and find the video that contains the audio you want to save. Tap the Share button, then choose Copy Link. This copies the video's URL to your clipboard, ready to paste into the downloader." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Step 2: Paste the URL into the Downloader" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-2", children: "Return to this page and paste the copied TikTok link into the input field. If your browser supports clipboard access, you can also use the Paste TikTok Link button to save time." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Our TikTok Sound Downloader is browser-based, so it works without requiring software installation or browser extensions." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Step 3: Download Your MP3 File" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-2", children: "Click Download to begin processing the public TikTok video. After the audio is extracted, your MP3 file will be ready to save to your device. You can then listen offline whenever you like using your preferred music player." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "The downloaded audio quality depends on the quality of the original TikTok source, ensuring an accurate conversion rather than artificially altering the recording." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Why Choose Our TikTok MP3 Downloader?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "There are many websites that let you convert TikTok videos into MP3 files, but most follow the same formula without explaining how they help users. Our goal is simple: provide a clean, fast, and reliable experience that works across modern devices while keeping the download process easy to understand." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Whether you're saving your own original audio, a trending TikTok sound, or a public music clip for personal listening, you can complete the entire process directly from your browser." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Simple Copy-and-Paste Workflow" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "You don't need technical knowledge to use the downloader. Copy the TikTok link, paste it into the tool, and let the converter handle the rest. The streamlined process reduces unnecessary steps while making audio downloads accessible to everyone." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "No Software or Extensions Required" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Everything runs online through your browser. There's no need to install third-party applications, plugins, or browser extensions, helping keep your device uncluttered while making the tool available on multiple platforms." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Works Across Multiple Devices" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Whether you're using an Android phone, iPhone, Windows PC, Mac, Linux computer, tablet, or Chromebook, the downloader is designed to work wherever you have a modern web browser and an internet connection." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Designed for Everyday Use" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Some users save trending sounds to enjoy offline, while others archive their own voiceovers or original recordings. Whatever your reason, the downloader is built to provide a straightforward experience without unnecessary distractions." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "What Can You Download as MP3?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "TikTok is home to millions of creative audio clips. This tool allows you to extract audio from supported public TikTok videos, making it easier to save the sounds you enjoy most for personal, lawful use." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Trending TikTok Sounds" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Keep popular sounds and viral audio clips available for offline listening without searching for the same video again." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Original Creator Audio" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Creators often upload unique voice recordings and original sounds. If the video is publicly accessible, you can save the audio as an MP3 for your own reference or archive." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Voiceovers and Narration" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Educational videos, storytelling clips, motivational speeches, and spoken commentary can all include valuable audio worth saving for later listening." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Music Clips and Background Audio" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Many TikTok videos feature music or background soundtracks. When available through a supported public video, the audio can be extracted into an MP3 file for convenient offline playback." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted mb-0", children: [
        /* @__PURE__ */ jsx("strong", { children: "Important:" }),
        " This tool is intended for downloading audio from publicly accessible TikTok videos. Always respect copyright, creator rights, and TikTok's terms when using downloaded content."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Key Features" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Our TikTok MP3 Downloader is built to make saving audio from public TikTok videos simple, fast, and accessible across different devices. Instead of adding unnecessary steps, the tool focuses on providing a smooth experience from the moment you paste a TikTok link until your MP3 file is ready." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "High-Quality MP3 Audio" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "The downloader extracts the available audio from supported public TikTok videos while preserving the best quality provided by the original source. Whether you're downloading music, a voiceover, a podcast-style clip, or an original sound, the output reflects the quality of the source audio." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Browser-Based Conversion" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Everything happens directly in your browser. You don't need to install software, browser extensions, or mobile apps to convert TikTok to MP3. Simply paste the URL and start the conversion process." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Fast Audio Processing" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "After you submit a valid TikTok link, the downloader immediately begins processing the audio. The streamlined workflow helps reduce waiting time so you can save your MP3 quickly." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Compatible with Multiple Platforms" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Use the tool on Android phones, iPhones, Windows PCs, macOS, Linux computers, Chromebooks, and tablets. As long as your device has a modern browser and internet access, you can convert TikTok audio online." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Unlimited Personal Downloads" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Download audio from multiple supported public TikTok videos whenever you need it. Whether you're saving your own original recordings or keeping a copy of a favorite sound for personal listening, the process remains simple and consistent." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "No Registration Required" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "You can start converting TikTok audio immediately without creating an account or sharing unnecessary personal information." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Why These Features Matter" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Many TikTok downloaders list features without explaining how they benefit users. Here's why each capability improves your experience." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Feature" }),
          /* @__PURE__ */ jsx("th", { children: "Why It Matters" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Browser-Based Tool" }),
            /* @__PURE__ */ jsx("td", { children: "No software installation, works on almost any device." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "MP3 Output" }),
            /* @__PURE__ */ jsx("td", { children: "Compatible with nearly all music players and mobile devices." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Fast Processing" }),
            /* @__PURE__ */ jsx("td", { children: "Spend less time waiting between copying the link and downloading the file." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Cross-Platform Support" }),
            /* @__PURE__ */ jsx("td", { children: "Switch between phone, tablet, laptop, or desktop without changing tools." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "No Registration" }),
            /* @__PURE__ */ jsx("td", { children: "Start downloading immediately without creating another online account." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Unlimited Downloads" }),
            /* @__PURE__ */ jsx("td", { children: "Save multiple public TikTok audio files whenever needed for personal use." })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Audio Quality Explained" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "One of the most common questions users ask is whether converting a TikTok video into MP3 reduces sound quality. The answer depends on the original audio uploaded to TikTok." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Our TikTok Audio Downloader preserves the available audio during conversion, but it cannot create quality that wasn't present in the original recording. If a creator uploads clear, high-quality audio, your downloaded MP3 will closely reflect that source. Likewise, if the original video contains compressed or lower-quality sound, those characteristics will remain after conversion." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Original Source Quality Matters" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Every MP3 begins with the audio already available in the TikTok video. The downloader extracts that audio—it doesn't remix, enhance, or artificially increase the bitrate. This means the final file is an accurate representation of the original source." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Understanding MP3 Compression" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "MP3 is one of the world's most widely supported audio formats because it balances file size with listening quality. It works well on smartphones, tablets, laptops, desktop computers, smart speakers, car entertainment systems, and portable music players." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Can You Convert TikTok Audio to 320 kbps?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Some online tools advertise 320 kbps downloads for every file, but it's important to understand that a converter cannot improve the quality of the original source. If the original TikTok audio wasn't uploaded at that quality, converting it to a higher bitrate won't add missing detail. The best practice is to preserve the original audio as accurately as possible." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Best Results for Music and Voice Recordings" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Music, voiceovers, interviews, podcasts, educational clips, and original creator recordings generally produce the best listening experience when the source audio is clear and publicly available." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Best Ways to Use Downloaded TikTok Audio" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "People download TikTok MP3 files for many different reasons. While every use should respect copyright and creator rights, there are several practical situations where saving audio can be helpful." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Listen Offline" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "If you travel frequently or have limited internet access, downloading your favorite TikTok sounds lets you enjoy them without relying on a constant connection." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Archive Your Own Original Audio" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Many creators use TikTok to publish original voiceovers, commentary, music, or educational content. Saving a personal backup of your own public recordings can help with future projects and content organization." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Save Educational Voiceovers" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Tutorials, language lessons, motivational talks, interviews, and informational recordings often contain valuable insights. Downloading audio for personal reference makes it easier to revisit important content." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Create Personal Ringtones" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Some users like to turn their favorite original sounds or legally permitted audio clips into personal ringtones. Before doing so, make sure you have the necessary rights to use the audio." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Organize Creative Inspiration" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Writers, musicians, video editors, podcasters, and content creators often collect interesting sounds and voice recordings for inspiration. Keeping your favorite clips organized offline makes them easier to revisit later." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted mb-0", children: [
        /* @__PURE__ */ jsx("strong", { children: "Good Practice:" }),
        " Download audio only from publicly accessible TikTok videos, and always respect copyright laws, creator permissions, and TikTok's Terms of Service when using or sharing downloaded content."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Supported Devices" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Our TikTok MP3 Downloader is designed to work on almost any device with a modern web browser and internet connection. Whether you're using a smartphone, tablet, or computer, you can convert TikTok audio into MP3 without installing additional software." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Android Phones & Tablets" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Android users can download TikTok audio directly through browsers like Google Chrome, Samsung Internet, Firefox, Opera, or Brave. Simply copy the TikTok link, paste it into the downloader, and save the MP3 file." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "iPhone & iPad" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "The tool works on iPhones and iPads using Safari, Google Chrome, Microsoft Edge, and other supported browsers. There's no need to install an additional app to convert public TikTok videos into MP3." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Windows PCs" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Whether you're using Windows 10 or Windows 11, you can access the downloader from your preferred browser and convert TikTok videos into MP3 files in just a few clicks." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Mac Computers" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Mac users can use Safari, Chrome, Firefox, or Microsoft Edge to download TikTok audio online without additional software." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Linux & Chromebook" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Linux distributions and Chromebooks with modern browsers are fully supported, making the downloader accessible across a wide range of operating systems." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-4", children: "Device Compatibility Table" }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Device" }),
          /* @__PURE__ */ jsx("th", { children: "Supported" }),
          /* @__PURE__ */ jsx("th", { children: "Browser Required" }),
          /* @__PURE__ */ jsx("th", { children: "Software Installation" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Android" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, { label: "Yes" }) }),
            /* @__PURE__ */ jsx("td", { children: "Chrome, Firefox, Samsung Internet, Opera, Brave" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, { label: "No" }) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "iPhone" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, { label: "Yes" }) }),
            /* @__PURE__ */ jsx("td", { children: "Safari, Chrome, Edge" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, { label: "No" }) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "iPad" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, { label: "Yes" }) }),
            /* @__PURE__ */ jsx("td", { children: "Safari, Chrome" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, { label: "No" }) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Windows PC" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, { label: "Yes" }) }),
            /* @__PURE__ */ jsx("td", { children: "Chrome, Edge, Firefox" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, { label: "No" }) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "macOS" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, { label: "Yes" }) }),
            /* @__PURE__ */ jsx("td", { children: "Safari, Chrome, Firefox" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, { label: "No" }) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Linux" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, { label: "Yes" }) }),
            /* @__PURE__ */ jsx("td", { children: "Chrome, Firefox" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, { label: "No" }) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Chromebook" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, { label: "Yes" }) }),
            /* @__PURE__ */ jsx("td", { children: "Chrome" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, { label: "No" }) })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Supported Browsers" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Because the converter runs entirely online, you can use it with most modern browsers without downloading extensions or plugins." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Google Chrome" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Google Chrome offers one of the best experiences thanks to clipboard support and excellent compatibility with modern web technologies." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Safari" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Safari users on macOS and iOS can quickly convert TikTok videos into MP3 while staying within Apple's browser ecosystem." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Mozilla Firefox" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Firefox provides reliable performance for users who prefer privacy-focused browsing." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Microsoft Edge" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Edge offers fast performance and full compatibility with the downloader on Windows and macOS." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Opera & Brave" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Both Opera and Brave are fully compatible with the downloader, providing another option for users who prefer alternative browsers." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Samsung Internet" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Samsung Internet users on Android devices can also convert TikTok audio without downloading a separate application." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-4", children: "Browser Compatibility Table" }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle text-center", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Browser" }),
          /* @__PURE__ */ jsx("th", { children: "Android" }),
          /* @__PURE__ */ jsx("th", { children: "iPhone" }),
          /* @__PURE__ */ jsx("th", { children: "Windows" }),
          /* @__PURE__ */ jsx("th", { children: "macOS" }),
          /* @__PURE__ */ jsx("th", { children: "Linux" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Google Chrome" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Safari" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Mozilla Firefox" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Microsoft Edge" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Opera" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Brave" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Samsung Internet" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Tips for Better MP3 Downloads" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Following a few simple practices can help you avoid common issues and ensure a smoother download experience." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Copy the Complete TikTok URL" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Always copy the full TikTok video link directly from the Share menu. Incomplete or modified URLs may prevent the downloader from processing the request." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Download Public TikTok Videos" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "The downloader can only access publicly available TikTok content. Private, deleted, or restricted videos cannot be converted." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Wait for the Process to Finish" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "After clicking Download, allow the conversion to complete before refreshing the page or closing your browser tab." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Use a Stable Internet Connection" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "A reliable connection helps reduce interruptions during the conversion process and speeds up file generation." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Keep Your Browser Updated" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Using the latest version of your browser improves compatibility, security, and overall performance." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Common Download Errors & Solutions" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Most download problems are easy to solve. Here are the most common issues users encounter and how to fix them." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Problem" }),
          /* @__PURE__ */ jsx("th", { children: "Possible Cause" }),
          /* @__PURE__ */ jsx("th", { children: "Solution" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Invalid TikTok Link" }),
            /* @__PURE__ */ jsx("td", { children: "Incomplete or incorrect URL" }),
            /* @__PURE__ */ jsx("td", { children: "Copy the full public TikTok link again." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Private Video" }),
            /* @__PURE__ */ jsx("td", { children: "Video isn't publicly accessible" }),
            /* @__PURE__ */ jsx("td", { children: "Use only public TikTok videos." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Download Doesn't Start" }),
            /* @__PURE__ */ jsx("td", { children: "Temporary browser or network issue" }),
            /* @__PURE__ */ jsx("td", { children: "Refresh the page and try again." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Audio Not Available" }),
            /* @__PURE__ */ jsx("td", { children: "Source video has unavailable or restricted audio" }),
            /* @__PURE__ */ jsx("td", { children: "Try another supported public video." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Slow Processing" }),
            /* @__PURE__ */ jsx("td", { children: "Network congestion or temporary server load" }),
            /* @__PURE__ */ jsx("td", { children: "Wait a few moments and avoid refreshing the page." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Paste Button Doesn't Work" }),
            /* @__PURE__ */ jsx("td", { children: "Browser blocks clipboard access" }),
            /* @__PURE__ */ jsx("td", { children: "Paste the URL manually using your keyboard." })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Is It Safe to Use Our TikTok MP3 Downloader?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Security and privacy are important whenever you use an online tool. Our downloader is designed to work directly in your browser without requiring unnecessary downloads or software installation." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "No Software Installation" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Because everything runs online, you don't have to install third-party programs that could consume storage or introduce unnecessary security risks." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Browser-Based Experience" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Using a browser-based tool means you can access the downloader from different devices without configuring additional applications." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Privacy Matters" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Only publicly accessible TikTok links should be submitted for processing. For complete information about data handling, users should review your website's Privacy Policy and Terms of Service." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Respect Copyright and Creator Rights" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Downloaded audio should only be used in ways that comply with copyright laws, platform policies, and the permissions granted by the original creator. Responsible use helps support the creative community while ensuring content is used appropriately." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "TikTok MP3 vs TikTok MP4" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Sometimes users aren't sure whether they should download only the audio or the complete video. The table below highlights the differences." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive mb-4", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Feature" }),
          /* @__PURE__ */ jsx("th", { children: "MP3 Audio" }),
          /* @__PURE__ */ jsx("th", { children: "MP4 Video" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Audio Only" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Includes Video" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Smaller File Size" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Ideal for Offline Listening" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Suitable for Music Players" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Preserves Visual Content" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Faster to Transfer" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Lower Storage Usage" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(NoMark, {}) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Choosing MP3 is usually the better option if your goal is to save music, voiceovers, interviews, or original sounds without keeping the entire video. If you want both the visuals and the audio, downloading the MP4 version is the better choice." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-5", children: "Below are answers to the questions users ask most often when searching for a TikTok MP3 Downloader, TikTok Audio Downloader, or TikTok to MP3 Converter." }),
      /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-10", children: /* @__PURE__ */ jsx("div", { className: "accordion faq-accordion", id: "faqAccordionMp3En", children: faqs$1.map((faq, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "accordion-header", children: /* @__PURE__ */ jsx(
              "button",
              {
                className: `accordion-button ${index === 0 ? "" : "collapsed"}`,
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": `#faqMp3En${index}`,
                children: faq.q
              }
            ) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                id: `faqMp3En${index}`,
                className: `accordion-collapse collapse ${index === 0 ? "show" : ""}`,
                "data-bs-parent": "#faqAccordionMp3En",
                children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: typeof faq.a === "string" ? faq.a : faq.a })
              }
            )
          ]
        },
        faq.q
      )) }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Explore More TikTok Tools" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Looking for more ways to manage TikTok content? Explore our collection of free online TikTok tools designed to make downloading and managing content easier." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Tool" }),
          /* @__PURE__ */ jsx("th", { children: "Description" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(Link, { to: "/", children: "TikTok Video Downloader" }) }),
            /* @__PURE__ */ jsx("td", { children: "Download public TikTok videos while preserving the original video format." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "TikTok Story Downloader" }),
            /* @__PURE__ */ jsx("td", { children: "Save public TikTok Stories before they disappear." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "TikTok Photo Downloader" }),
            /* @__PURE__ */ jsx("td", { children: "Download photo posts shared on TikTok in their original quality." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "TikTok Caption Downloader" }),
            /* @__PURE__ */ jsx("td", { children: "Copy captions quickly without opening the TikTok app again." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "TikTok Thumbnail Downloader" }),
            /* @__PURE__ */ jsx("td", { children: "Save available TikTok thumbnail images for reference." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "TikTok Profile Picture Downloader" }),
            /* @__PURE__ */ jsx("td", { children: "View and download publicly available TikTok profile pictures." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "TikTok Username Generator" }),
            /* @__PURE__ */ jsx("td", { children: "Generate creative username ideas for new TikTok accounts." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "TikTok Bio Generator" }),
            /* @__PURE__ */ jsx("td", { children: "Create engaging profile bios for personal or business accounts." })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Copyright & Responsible Use" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "Our TikTok MP3 Downloader is intended to help users convert audio from publicly accessible TikTok videos for personal and lawful use. Before downloading, sharing, or republishing any content, make sure you have permission from the original creator or that your use complies with applicable copyright laws and platform policies." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Respecting intellectual property helps support creators and encourages responsible use of digital content. If you're downloading your own TikTok audio, the tool provides a convenient way to keep personal backups, archive original recordings, or listen offline whenever you need them." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Quick Start Checklist" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Ready to download TikTok audio? Follow these simple steps:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-unstyled text-muted mb-4", children: [
        /* @__PURE__ */ jsx(CheckListItem, { children: "Copy the link to a public TikTok video." }),
        /* @__PURE__ */ jsx(CheckListItem, { children: "Paste the URL into the TikTok MP3 Downloader above." }),
        /* @__PURE__ */ jsx(CheckListItem, { children: "Click Download to start the conversion." }),
        /* @__PURE__ */ jsx(CheckListItem, { children: "Save the MP3 file to your device." }),
        /* @__PURE__ */ jsx(CheckListItem, { className: "mb-2", children: "Enjoy your TikTok audio offline whenever you like." })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted mb-0", children: [
        /* @__PURE__ */ jsx("strong", { children: "Reminder:" }),
        " Download only content you have permission to use and respect the rights of content creators and applicable copyright laws."
      ] })
    ] }) })
  ] }) });
}
const t = {
  cardTitle: "",
  cardSubtitle: "",
  placeholder: "https://www.tiktok.com/@user/video/...",
  pasteButton: "Paste TikTok Link",
  mp4Label: "MP4 (Video)",
  mp3Label: "MP3 (Audio)",
  downloadButton: "Download",
  processing: "Memproses...",
  resultsTitle: "Hasil Download",
  resultsSubtitle: "Lihat preview audio, lalu gunakan link download di bawah ini.",
  previewNote: "Preview dan download audio kamu.",
  downloadVideo: "Download Video",
  downloadAudio: "Download Audio",
  downloadingPrefix: "Mengunduh",
  noLinksForFormat: (format) => `Link ${format} tidak ditemukan. Coba link TikTok lain.`,
  invalidUrl: "Masukkan link TikTok yang valid",
  fetchFailed: "Gagal mengambil link download TikTok.",
  noLinksFound: "Tidak ada link download yang ditemukan. Coba link TikTok lain.",
  ready: "Link download sudah siap.",
  defaultTitle: "Download TikTok"
};
const checklist = [
  "Download MP3 TikTok Gratis",
  "Tanpa Login atau Registrasi",
  "Tidak Perlu Instal Aplikasi",
  "Mendukung Android, iPhone, iPad, Windows & Mac",
  "Audio Berkualitas Tinggi",
  "Proses Download Cepat",
  "Gratis Tanpa Batas",
  "Mudah Digunakan Langsung dari Browser"
];
const faqs = [
  {
    q: "Apakah TikTok MP3 Downloader ini gratis?",
    a: "Ya. Anda dapat menggunakan layanan ini secara gratis tanpa biaya berlangganan maupun biaya tersembunyi."
  },
  {
    q: "Apakah saya perlu membuat akun?",
    a: "Tidak. Anda tidak perlu login atau membuat akun sebelum mengunduh audio TikTok."
  },
  {
    q: "Apakah saya harus menginstal aplikasi?",
    a: "Tidak. Seluruh proses dilakukan langsung melalui browser sehingga tidak memerlukan aplikasi tambahan."
  },
  {
    q: "Apakah layanan ini mendukung Android?",
    a: "Ya. TikTok MP3 Downloader dapat digunakan dengan baik pada perangkat Android menggunakan browser modern."
  },
  {
    q: "Apakah layanan ini mendukung iPhone?",
    a: "Ya. Pengguna iPhone maupun iPad juga dapat menggunakan layanan ini untuk mengunduh file MP3 dari video TikTok."
  },
  {
    q: "Apakah saya bisa menggunakannya di PC atau Laptop?",
    a: "Tentu. Anda dapat menggunakan Windows, Mac maupun Linux selama memiliki browser dan koneksi internet."
  },
  {
    q: "Mengapa file MP3 tidak bisa diunduh?",
    a: "Ada beberapa kemungkinan penyebabnya, seperti tautan video yang salah, video telah dihapus, video bersifat privat, atau audio asli sudah tidak tersedia di TikTok. Pastikan Anda menggunakan URL video yang benar dan video masih dapat diakses secara publik."
  },
  {
    q: "Apakah ada batas jumlah download?",
    a: "Tidak. Anda dapat menggunakan TikTok MP3 Downloader untuk mengunduh audio TikTok sebanyak yang Anda butuhkan selama layanan tersedia."
  },
  {
    q: "Di mana file MP3 disimpan setelah diunduh?",
    a: "Secara umum, file akan tersimpan di folder Download pada browser atau perangkat yang Anda gunakan. Jika tidak menemukannya, periksa riwayat unduhan browser Anda."
  },
  {
    q: "Apakah kualitas audio tetap jernih?",
    a: "Ya. File audio yang diunduh akan mengikuti kualitas audio yang tersedia dari sumber video TikTok. Jika audio asli memiliki kualitas yang baik, hasil unduhan juga akan tetap jernih."
  },
  {
    q: "Bisakah file MP3 dijadikan nada dering?",
    a: "Ya. Setelah file berhasil diunduh, Anda dapat menggunakannya sebagai nada dering telepon, nada dering WhatsApp, alarm, atau untuk kebutuhan pribadi lainnya."
  },
  {
    q: "Apakah TikTok MP3 Downloader aman digunakan?",
    a: "Ya. Anda tidak perlu menginstal aplikasi ataupun membuat akun. Seluruh proses dilakukan langsung melalui browser sehingga lebih praktis dan mudah digunakan. Tetap gunakan layanan ini secara bertanggung jawab dan hormati hak cipta pemilik konten."
  },
  {
    q: "Apakah saya bisa mengunduh audio dari video TikTok privat?",
    a: "Tidak. Layanan hanya dapat memproses video TikTok yang dapat diakses secara publik. Video privat tidak dapat diunduh."
  },
  {
    q: "Apakah saya bisa menggunakan layanan ini di semua browser?",
    a: "Ya. TikTok MP3 Downloader mendukung browser modern seperti Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, Opera, dan browser populer lainnya."
  }
];
function Mp3Id() {
  return /* @__PURE__ */ jsx(Downloader, { t, lockFormat: "mp3", children: ({ Form, Results }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { id: "download-section", className: "hero-gradient text-white py-5", children: /* @__PURE__ */ jsx("div", { className: "container py-5", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsxs("div", { className: "col-lg-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "display-5 fw-bold mb-4 text-center", children: "Download TikTok MP3 Gratis Tanpa Aplikasi" }),
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: Form }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "h5 fw-bold mb-3", children: "Kenapa Menggunakan TikTok MP3 Downloader Ini?" }),
        /* @__PURE__ */ jsx("ul", { className: "list-unstyled mb-0", children: checklist.map((item) => /* @__PURE__ */ jsx(CheckListItem, { className: "mb-2 text-white-50", children: item }, item)) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "lead mb-3 text-white-50", children: "Pernah menemukan lagu atau sound TikTok yang ingin disimpan, tetapi tidak tahu cara mengunduhnya sebagai file MP3? Banyak pengguna ingin mendengarkan audio TikTok secara offline, menjadikannya nada dering, atau menggunakannya sebagai referensi konten, namun TikTok tidak menyediakan fitur download audio secara langsung." }),
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-white-50", children: "Dengan TikTok MP3 Downloader, Anda dapat mengubah video TikTok menjadi file MP3 hanya dalam beberapa detik. Cukup salin tautan video TikTok, tempelkan ke kolom download di atas, lalu klik tombol Download. Layanan ini gratis, tidak memerlukan login, tidak perlu menginstal aplikasi tambahan, serta dapat digunakan di Android, iPhone, iPad, Windows, Mac, maupun perangkat lain melalui browser favorit Anda." }),
      /* @__PURE__ */ jsx("p", { className: "mb-0 text-white-50", children: "Audio diambil langsung dari sumber audio asli TikTok, bukan hasil konversi ulang dari file MP4. Dengan cara ini kualitas suara tetap jernih dan proses download menjadi lebih cepat." })
    ] }) }) }) }),
    Results,
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Cara Download MP3 TikTok" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "Mengunduh audio TikTok sangat mudah dan hanya membutuhkan beberapa langkah sederhana." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Cara download lagu TikTok jadi MP3 hanya membutuhkan beberapa langkah sederhana. Proses ini dapat dilakukan melalui Android, iPhone, tablet maupun komputer tanpa menginstal aplikasi tambahan." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Langkah 1 – Salin Tautan Video TikTok" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Buka aplikasi TikTok atau situs web TikTok kemudian cari video yang ingin Anda simpan audionya. Tekan tombol Bagikan lalu pilih Salin Tautan untuk menyalin URL video ke clipboard perangkat Anda." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Langkah 2 – Tempelkan Link ke Kolom Download" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Kembali ke halaman TikTok MP3 Downloader ini lalu tempelkan URL yang sudah disalin ke dalam kolom input yang tersedia di bagian atas halaman." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Langkah 3 – Klik Tombol Download MP3" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Tekan tombol Download, tunggu beberapa saat hingga proses selesai, kemudian pilih opsi Download MP3 untuk menyimpan file audio ke perangkat Anda." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-3", children: "Ringkasan Langkah" }),
      /* @__PURE__ */ jsx(
        StepFlow,
        {
          steps: [
            "Salin Link TikTok",
            "Tempel Link",
            "Klik Download",
            "Simpan File MP3"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Fitur TikTok MP3 Downloader" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "TikTok MP3 Downloader dirancang agar proses download menjadi cepat, sederhana, dan dapat digunakan oleh siapa saja tanpa memerlukan pengetahuan teknis." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Berbeda dengan banyak konverter TikTok ke MP3 lainnya, tool ini dirancang agar proses download tetap sederhana tanpa mengurangi kualitas audio yang tersedia dari video TikTok." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive mb-5", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Fitur" }),
          /* @__PURE__ */ jsx("th", { children: "Penjelasan" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Gratis Digunakan" }),
            /* @__PURE__ */ jsx("td", { children: "Download MP3 tanpa biaya." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Tanpa Login" }),
            /* @__PURE__ */ jsx("td", { children: "Tidak perlu membuat akun TikTok maupun akun baru." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Tanpa Aplikasi" }),
            /* @__PURE__ */ jsx("td", { children: "Semua proses dilakukan langsung melalui browser." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Download Cepat" }),
            /* @__PURE__ */ jsx("td", { children: "File diproses hanya dalam beberapa detik." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Audio Berkualitas Tinggi" }),
            /* @__PURE__ */ jsx("td", { children: "Menghasilkan kualitas audio yang tetap jernih sesuai sumber." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Semua Perangkat" }),
            /* @__PURE__ */ jsx("td", { children: "Mendukung Android, iPhone, iPad, Windows, Mac, dan Linux." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Browser Modern" }),
            /* @__PURE__ */ jsx("td", { children: "Berfungsi di Chrome, Safari, Firefox, Edge, Opera, dan browser lainnya." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Unlimited Download" }),
            /* @__PURE__ */ jsx("td", { children: "Download sebanyak yang Anda inginkan tanpa batas harian." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Gratis Digunakan" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Anda tidak perlu berpindah aplikasi atau membuat akun hanya untuk menyimpan satu lagu TikTok. Cukup salin tautan, tempelkan ke kolom download, dan file MP3 siap diunduh dalam beberapa detik." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Tanpa Login atau Registrasi" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Tidak perlu membuat akun ataupun masuk menggunakan akun TikTok. Anda hanya perlu menyalin tautan video dan memulai proses download." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Tidak Perlu Instal Aplikasi" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Seluruh proses dilakukan secara online melalui browser sehingga Anda tidak perlu menginstal software, aplikasi, ataupun ekstensi tambahan." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Download Cepat" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Server akan memproses tautan video TikTok dalam waktu singkat sehingga file MP3 dapat segera diunduh, tergantung pada kecepatan koneksi internet yang digunakan." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Audio Berkualitas Tinggi" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Berbeda dengan banyak konverter TikTok ke MP3 lainnya, tool ini dirancang agar proses download tetap sederhana tanpa mengurangi kualitas audio yang tersedia dari video TikTok." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Kompatibel dengan Semua Perangkat" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Layanan ini dapat digunakan melalui smartphone, tablet, laptop, maupun komputer desktop tanpa memandang sistem operasi yang digunakan." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Mengapa Memilih TikTok MP3 Downloader Kami" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "Ada banyak layanan download TikTok MP3 yang tersedia di internet, namun tidak semuanya menawarkan pengalaman yang mudah dan nyaman. TikTok MP3 Downloader ini dibuat dengan fokus pada kecepatan, kemudahan penggunaan, dan kompatibilitas di berbagai perangkat sehingga siapa pun dapat menggunakannya tanpa kesulitan." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "Anda cukup membuka halaman ini melalui browser, menyalin tautan video TikTok, lalu mengunduh file MP3 hanya dalam beberapa klik. Tidak diperlukan instalasi aplikasi, tidak ada proses registrasi yang memakan waktu, dan seluruh proses dapat dilakukan langsung secara online." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Selain itu, layanan ini dapat digunakan kapan saja selama Anda memiliki koneksi internet. Antarmuka yang sederhana membuat proses download menjadi lebih cepat baik di perangkat Android, iPhone, iPad, Windows, maupun Mac. Kami juga terus melakukan pembaruan agar layanan tetap kompatibel dengan perubahan yang dilakukan oleh TikTok sehingga pengguna mendapatkan pengalaman download yang stabil dan mudah digunakan." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Perangkat yang Didukung" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "TikTok MP3 Downloader dirancang agar dapat digunakan di hampir semua perangkat modern tanpa perlu menginstal aplikasi tambahan. Selama perangkat Anda memiliki browser dan koneksi internet yang stabil, proses download dapat dilakukan dengan mudah." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive mb-4", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle text-center", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Perangkat / Browser" }),
          /* @__PURE__ */ jsx("th", { children: "Didukung" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Android" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "iPhone" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "iPad" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Windows PC" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Mac" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Linux" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Tablet" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Google Chrome" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Safari" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Mozilla Firefox" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Microsoft Edge" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Opera" }),
            /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(YesMark, {}) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Baik menggunakan smartphone maupun komputer, seluruh proses download dilakukan langsung melalui browser sehingga Anda tidak perlu memasang aplikasi tambahan di perangkat." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Android" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Pengguna Android cukup membuka browser seperti Chrome atau Firefox, lalu gunakan TikTok MP3 Downloader untuk mengunduh audio favorit tanpa perlu memasang aplikasi tambahan." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "iPhone & iPad" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Layanan ini juga dapat digunakan pada perangkat iPhone maupun iPad. Untuk pengalaman terbaik, gunakan browser yang mendukung proses penyimpanan file di perangkat iOS." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Windows & Mac" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Baik menggunakan laptop maupun komputer desktop, Anda dapat mengakses layanan ini langsung melalui browser tanpa instalasi software tambahan." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-2", children: "Tablet & Perangkat Lain" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Selain smartphone dan komputer, layanan ini juga dapat digunakan melalui tablet maupun perangkat lain yang memiliki browser modern." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Format Link TikTok yang Didukung" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "TikTok MP3 Downloader mendukung berbagai format URL resmi TikTok sehingga Anda dapat menyalin tautan dari aplikasi maupun browser." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-2", children: "Contoh format link yang didukung:" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "Tool ini mendukung berbagai jenis URL resmi TikTok, baik yang berasal dari aplikasi maupun browser desktop. Pastikan Anda menyalin tautan video secara lengkap agar proses download berjalan dengan lancar." }),
      /* @__PURE__ */ jsxs("ul", { className: "text-muted mb-4", children: [
        /* @__PURE__ */ jsx("li", { children: "https://www.tiktok.com/@username/video/123456789" }),
        /* @__PURE__ */ jsx("li", { children: "https://vm.tiktok.com/XXXXXXXX/" }),
        /* @__PURE__ */ jsx("li", { children: "https://vt.tiktok.com/XXXXXXXX/" }),
        /* @__PURE__ */ jsx("li", { children: "https://m.tiktok.com/v/123456789.html" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Pastikan Anda menyalin URL asli dari video TikTok agar proses download berjalan dengan baik." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Mengapa Download MP3 TikTok Bisa Gagal?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "Dalam beberapa kondisi tertentu, proses download mungkin tidak berhasil. Hal tersebut biasanya bukan disebabkan oleh layanan, melainkan karena kondisi video atau tautan yang digunakan." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-2", children: "Beberapa penyebab umum antara lain:" }),
      /* @__PURE__ */ jsxs("ul", { className: "text-muted mb-4", children: [
        /* @__PURE__ */ jsx("li", { children: "Link TikTok tidak valid." }),
        /* @__PURE__ */ jsx("li", { children: "Video sudah dihapus oleh pemiliknya." }),
        /* @__PURE__ */ jsx("li", { children: "Video bersifat privat." }),
        /* @__PURE__ */ jsx("li", { children: "Audio asli sudah tidak tersedia." }),
        /* @__PURE__ */ jsx("li", { children: "Gangguan koneksi internet." }),
        /* @__PURE__ */ jsx("li", { children: "TikTok sedang melakukan pembaruan sistem." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Apabila proses download gagal, coba salin kembali tautan video dan ulangi proses beberapa saat kemudian." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Kapan Sebaiknya Menggunakan TikTok MP3 Downloader?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "TikTok MP3 Downloader dapat digunakan dalam berbagai situasi." }),
      /* @__PURE__ */ jsxs("ul", { className: "text-muted mb-4", children: [
        /* @__PURE__ */ jsx("li", { children: "Menyimpan lagu TikTok favorit." }),
        /* @__PURE__ */ jsx("li", { children: "Download sound viral." }),
        /* @__PURE__ */ jsx("li", { children: "Mendengarkan musik secara offline." }),
        /* @__PURE__ */ jsx("li", { children: "Menggunakan audio sebagai nada dering." }),
        /* @__PURE__ */ jsx("li", { children: "Menyimpan referensi audio untuk proses editing video." }),
        /* @__PURE__ */ jsx("li", { children: "Mengoleksi musik TikTok favorit." })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-3", children: "Solusi Masalah Umum" }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Masalah" }),
          /* @__PURE__ */ jsx("th", { children: "Solusi" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Link tidak valid" }),
            /* @__PURE__ */ jsx("td", { children: "Salin kembali URL video dari TikTok." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Video privat" }),
            /* @__PURE__ */ jsx("td", { children: "Gunakan video yang dapat diakses publik." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Audio tidak tersedia" }),
            /* @__PURE__ */ jsx("td", { children: "Coba gunakan video lain yang memiliki audio asli." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Download gagal" }),
            /* @__PURE__ */ jsx("td", { children: "Muat ulang halaman lalu coba kembali." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Proses terlalu lama" }),
            /* @__PURE__ */ jsx("td", { children: "Periksa koneksi internet Anda." })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "File tidak tersimpan" }),
            /* @__PURE__ */ jsx("td", { children: "Periksa folder Download pada perangkat Anda." })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Privasi dan Keamanan" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "Privasi pengguna merupakan salah satu prioritas utama. Oleh karena itu, Anda tidak perlu membuat akun ataupun memberikan informasi pribadi untuk menggunakan layanan ini." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "Seluruh proses dilakukan secara online melalui browser sehingga Anda dapat mengakses layanan dengan lebih praktis tanpa instalasi aplikasi tambahan." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Kami juga menyarankan agar layanan ini digunakan secara bertanggung jawab serta menghormati hak cipta dan ketentuan penggunaan yang berlaku pada platform TikTok." }),
      /* @__PURE__ */ jsx("h3", { className: "h5 fw-bold mb-3", children: "Ringkasan Privasi" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-unstyled text-muted mb-0", children: [
        /* @__PURE__ */ jsx(CheckListItem, { children: "Tidak perlu login" }),
        /* @__PURE__ */ jsx(CheckListItem, { children: "Tidak meminta data pribadi" }),
        /* @__PURE__ */ jsx(CheckListItem, { children: "Tidak perlu instal aplikasi" }),
        /* @__PURE__ */ jsx(CheckListItem, { children: "Mudah digunakan melalui browser" }),
        /* @__PURE__ */ jsx(CheckListItem, { className: "mb-0", children: "Gunakan hanya untuk konten yang memiliki izin untuk diunduh" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-5", children: "Pertanyaan yang Sering Diajukan (FAQ)" }),
      /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-10", children: /* @__PURE__ */ jsx("div", { className: "accordion faq-accordion", id: "faqAccordionMp3Id", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "accordion-header", children: /* @__PURE__ */ jsx(
              "button",
              {
                className: `accordion-button ${index === 0 ? "" : "collapsed"}`,
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": `#faqMp3Id${index}`,
                children: faq.q
              }
            ) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                id: `faqMp3Id${index}`,
                className: `accordion-collapse collapse ${index === 0 ? "show" : ""}`,
                "data-bs-parent": "#faqAccordionMp3Id",
                children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: faq.a })
              }
            )
          ]
        },
        faq.q
      )) }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Kualitas Audio MP3" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Kualitas file MP3 mengikuti kualitas audio yang tersedia pada video TikTok. Apabila video menggunakan audio berkualitas tinggi, hasil download juga akan tetap jernih. Tool ini memproses audio secara efisien sehingga Anda dapat menikmati file MP3 dengan kualitas terbaik yang tersedia." }),
      /* @__PURE__ */ jsx("div", { className: "table-responsive mb-4", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered bg-white align-middle", children: [
        /* @__PURE__ */ jsx("thead", { className: "table-dark", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "MP3" }),
          /* @__PURE__ */ jsx("th", { children: "MP4" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Hanya berisi audio" }),
            /* @__PURE__ */ jsx("td", { children: "Berisi video dan audio" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Ukuran file lebih kecil" }),
            /* @__PURE__ */ jsx("td", { children: "Ukuran file lebih besar" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Cocok untuk musik, podcast, dan nada dering" }),
            /* @__PURE__ */ jsx("td", { children: "Cocok untuk menonton video" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Lebih hemat ruang penyimpanan" }),
            /* @__PURE__ */ jsx("td", { children: "Membutuhkan ruang penyimpanan lebih besar" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "Mudah diputar di hampir semua perangkat" }),
            /* @__PURE__ */ jsx("td", { children: "Mendukung tampilan video" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Jika tujuan Anda hanya ingin menyimpan lagu, musik, atau sound TikTok, maka format MP3 merupakan pilihan yang paling praktis." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Alat TikTok Lainnya" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Selain mengunduh audio TikTok dalam format MP3, Anda juga dapat menggunakan berbagai alat lain untuk memenuhi kebutuhan download konten TikTok." }),
      /* @__PURE__ */ jsxs("ul", { className: "text-muted mb-4", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/id", children: "TikTok Video Downloader" }) }),
        /* @__PURE__ */ jsx("li", { children: "TikTok Downloader Tanpa Watermark" }),
        /* @__PURE__ */ jsx("li", { children: "TikTok Story Downloader" }),
        /* @__PURE__ */ jsx("li", { children: "TikTok Slide Photo Downloader" }),
        /* @__PURE__ */ jsx("li", { children: "TikTok Photo Downloader" }),
        /* @__PURE__ */ jsx("li", { children: "TikTok Profile Picture Downloader" }),
        /* @__PURE__ */ jsx("li", { children: "TikTok Thumbnail Downloader" }),
        /* @__PURE__ */ jsx("li", { children: "TikTok Caption Downloader" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Seluruh alat tersebut dirancang untuk mempermudah proses download konten TikTok secara cepat melalui browser tanpa perlu menginstal aplikasi tambahan." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Catatan Penting" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "TikTok MP3 Downloader merupakan alat yang membantu pengguna mengunduh audio dari video TikTok yang dapat diakses secara publik. Layanan ini tidak berafiliasi dengan TikTok maupun ByteDance Ltd." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Kami mendorong setiap pengguna untuk menghormati hak cipta, hak kekayaan intelektual, serta ketentuan penggunaan TikTok. Pastikan Anda hanya mengunduh dan menggunakan konten yang memang memiliki izin atau diperbolehkan oleh pemiliknya." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Mengapa Menggunakan TikTok MP3 Downloader Ini?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-3", children: "Jika Anda mencari cara yang cepat, mudah, dan gratis untuk mengunduh lagu, musik, atau sound TikTok ke format MP3, layanan ini dapat menjadi solusi yang praktis. Anda tidak perlu membuat akun, tidak perlu menginstal aplikasi, dan seluruh proses dapat dilakukan langsung melalui browser dalam beberapa langkah sederhana." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Dengan dukungan untuk Android, iPhone, iPad, Windows, Mac, Linux, serta berbagai browser modern, TikTok MP3 Downloader membantu Anda menyimpan audio favorit dengan lebih mudah kapan pun dibutuhkan." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-3", children: "Kesimpulan" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: "Menyimpan audio TikTok kini tidak lagi rumit. Cukup salin tautan video, tempelkan ke kolom download di atas, lalu unduh file MP3 hanya dalam beberapa detik. Baik untuk mendengarkan musik secara offline, mengumpulkan sound favorit, atau menjadikannya nada dering, layanan ini memberikan cara yang cepat dan praktis tanpa perlu instalasi aplikasi ataupun proses registrasi." })
    ] }) })
  ] }) });
}
function FAQ() {
  const faqs2 = [
    {
      question: "How to download TikTok videos?",
      answer: "Downloading TikTok videos is simple: 1) Open TikTok and find the video you want to download. 2) Tap the Share button and copy the link. 3) Paste the URL into our TikTok downloader. 4) Select MP4 or MP3 format. 5) Click Download and save your video!"
    },
    {
      question: "Can I download TikTok videos in HD?",
      answer: "Yes! Our TikTok video downloader supports HD quality downloads. We save videos in the highest available quality, typically 1080p or 720p depending on the original video quality uploaded to TikTok."
    },
    {
      question: "Are there any limitations to downloads?",
      answer: "No, there are no limitations! Our TikTok downloader offers unlimited free downloads. You can download as many TikTok videos as you want, whenever you want, without any daily or monthly limits."
    },
    {
      question: "Is the TikTok downloader service free?",
      answer: "Yes, our TikTok video downloader is 100% free to use. There are no hidden fees, no premium plans, and no registration required. Just paste the URL and download immediately."
    },
    {
      question: "Can I download TikTok videos without watermark?",
      answer: "Absolutely! Our tool specifically removes the TikTok watermark from videos. You get clean, watermark-free videos that you can use for personal projects, compilations, or sharing."
    },
    {
      question: "Does this work on mobile devices?",
      answer: "Yes! Our TikTok downloader is fully responsive and works on all devices including Android phones, iPhones, iPads, and desktop computers. No app installation is required."
    },
    {
      question: "Can I convert TikTok videos to MP3?",
      answer: "Yes, you can easily convert TikTok videos to MP3 audio format. Simply paste the video URL, select MP3 as your download format, and get the audio file. Perfect for saving TikTok sounds and music!"
    },
    {
      question: "Is it safe to use this TikTok downloader?",
      answer: "Yes, our service is completely safe. We don't store any personal information, don't require login, and don't install any software on your device. Your privacy is our priority."
    },
    {
      question: "Why isn't my download working?",
      answer: "If your download isn't working, check these: 1) Make sure the URL is correct and complete. 2) The video might be private or deleted. 3) Try refreshing the page and pasting the URL again. 4) Contact us if the issue persists."
    },
    {
      question: "Can I download private TikTok videos?",
      answer: "No, our downloader can only download public TikTok videos. Private videos require the owner's permission and cannot be accessed by third-party tools."
    },
    {
      question: "How long does it take to download a video?",
      answer: "Downloads are typically instant! Most TikTok videos are downloaded within 5-10 seconds, depending on your internet connection speed and the video length."
    },
    {
      question: "Is downloading TikTok videos legal?",
      answer: "Downloading TikTok videos for personal use is generally acceptable. However, you should respect copyright and not redistribute or use content commercially without the creator's permission."
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "hero-gradient text-white py-5", children: /* @__PURE__ */ jsx("div", { className: "container py-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faQuestionCircle, className: "mb-3", style: { fontSize: "48px" } }),
      /* @__PURE__ */ jsx("h1", { className: "display-5 fw-bold mb-3", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "lead text-white-50", children: "Find answers to common questions about our TikTok video downloader" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5", children: /* @__PURE__ */ jsx("div", { className: "container py-4", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsxs("div", { className: "col-lg-8", children: [
      /* @__PURE__ */ jsx("div", { className: "accordion faq-accordion", id: "faqFullAccordion", children: faqs2.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ jsx("h2", { className: "accordion-header", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: `accordion-button ${index !== 0 ? "collapsed" : ""}`,
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": `#faqItem${index}`,
            children: faq.question
          }
        ) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            id: `faqItem${index}`,
            className: `accordion-collapse collapse ${index === 0 ? "show" : ""}`,
            "data-bs-parent": "#faqFullAccordion",
            children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: faq.answer })
          }
        )
      ] }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center mt-5 p-5 bg-light rounded-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "fw-bold mb-3", children: "Still Have Questions?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Can't find the answer you're looking for? Feel free to reach out to our support team." }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-tiktok", children: "Contact Us" })
      ] })
    ] }) }) }) })
  ] });
}
var faFacebook = {
  prefix: "fab",
  iconName: "facebook",
  icon: [512, 512, [62e3], "f09a", "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"]
};
var faTiktok = {
  prefix: "fab",
  iconName: "tiktok",
  icon: [448, 512, [], "e07b", "M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"]
};
var faInstagram = {
  prefix: "fab",
  iconName: "instagram",
  icon: [448, 512, [], "f16d", "M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
};
var faTwitter = {
  prefix: "fab",
  iconName: "twitter",
  icon: [512, 512, [], "f099", "M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]
};
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e2) => {
    setFormData({
      ...formData,
      [e2.target.name]: e2.target.value
    });
  };
  const handleSubmit = (e2) => {
    e2.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "hero-gradient text-white py-5", children: /* @__PURE__ */ jsx("div", { className: "container py-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faEnvelope, className: "mb-3", style: { fontSize: "48px" } }),
      /* @__PURE__ */ jsx("h1", { className: "display-5 fw-bold mb-3", children: "Contact Us" }),
      /* @__PURE__ */ jsx("p", { className: "lead text-white-50", children: "Get in touch with our TikTok downloader support team" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5", children: /* @__PURE__ */ jsx("div", { className: "container py-4", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-8", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
      /* @__PURE__ */ jsx("div", { className: "col-md-7", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-4 shadow-sm p-4 p-md-5", children: [
        /* @__PURE__ */ jsx("h2", { className: "fw-bold mb-4", children: "Send Us a Message" }),
        submitted ? /* @__PURE__ */ jsxs("div", { className: "alert alert-success", role: "alert", children: [
          /* @__PURE__ */ jsx("h4", { className: "alert-heading", children: "Thank You!" }),
          /* @__PURE__ */ jsx("p", { children: "Your message has been received. We'll get back to you as soon as possible." })
        ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "name", className: "form-label fw-semibold", children: [
              /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faUser, className: "me-2 text-muted" }),
              "Your Name"
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "form-control form-control-lg",
                id: "name",
                name: "name",
                value: formData.name,
                onChange: handleChange,
                placeholder: "Enter your name",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: "form-label fw-semibold", children: [
              /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faEnvelope, className: "me-2 text-muted" }),
              "Email Address"
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                className: "form-control form-control-lg",
                id: "email",
                name: "email",
                value: formData.email,
                onChange: handleChange,
                placeholder: "Enter your email",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "message", className: "form-label fw-semibold", children: [
              /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faComment, className: "me-2 text-muted" }),
              "Your Message"
            ] }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                className: "form-control",
                id: "message",
                name: "message",
                rows: 5,
                value: formData.message,
                onChange: handleChange,
                placeholder: "How can we help you?",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "d-grid", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-tiktok btn-lg", disabled: isLoading, children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status" }),
            "Sending..."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPaperPlane, className: "me-2" }),
            "Send Message"
          ] }) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-md-5", children: /* @__PURE__ */ jsxs("div", { className: "bg-light rounded-4 p-4 h-100", children: [
        /* @__PURE__ */ jsx("h3", { className: "fw-bold mb-4", children: "Get in Touch" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "Have questions about our TikTok video downloader? Need help with a download? We're here to help! Fill out the form and we'll respond as quickly as possible." }),
        /* @__PURE__ */ jsx("h5", { className: "fw-bold mb-3", children: "Response Time" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted mb-4", children: "We typically respond to all inquiries within 24-48 hours during business days." }),
        /* @__PURE__ */ jsx("h5", { className: "fw-bold mb-3", children: "Follow Us" }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon bg-dark", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTiktok }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon bg-dark", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faInstagram }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon bg-dark", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTwitter }) })
        ] }),
        /* @__PURE__ */ jsx("hr", { className: "my-4" }),
        /* @__PURE__ */ jsx("div", { className: "small text-muted", children: /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
          /* @__PURE__ */ jsx("strong", { children: "Note:" }),
          " For copyright inquiries or DMCA takedown requests, please include relevant documentation in your message."
        ] }) })
      ] }) })
    ] }) }) }) }) })
  ] });
}
function PrivacyPolicy() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "hero-gradient text-white py-5", children: /* @__PURE__ */ jsx("div", { className: "container py-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faShieldAlt, className: "mb-3", style: { fontSize: "48px" } }),
      /* @__PURE__ */ jsx("h1", { className: "display-5 fw-bold mb-3", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("p", { className: "lead text-white-50", children: "Your privacy is important to us. Learn how we protect your data." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5", children: /* @__PURE__ */ jsx("div", { className: "container py-4", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-4 shadow-sm p-4 p-md-5", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-muted mb-4", children: [
        /* @__PURE__ */ jsx("strong", { children: "Last Updated:" }),
        " ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "1. Introduction" }),
      /* @__PURE__ */ jsx("p", { children: 'Welcome to TikTok Video Downloader ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of any information you provide while using our service. This Privacy Policy explains how we collect, use, and protect your information when you use our TikTok video downloading service.' }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "2. Information We Collect" }),
      /* @__PURE__ */ jsx("p", { children: "Our service is designed with your privacy in mind. We collect minimal information:" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Video URLs:" }),
          " When you paste a TikTok URL to download a video, we process this URL to provide our service. We do not store these URLs after the download is complete."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Usage Data:" }),
          " We may collect anonymous usage statistics such as page views, download counts, and general geographic location (country level) to improve our service."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Contact Information:" }),
          " If you contact us through our contact form, we collect your name, email address, and message content to respond to your inquiry."
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "3. How We Use Your Information" }),
      /* @__PURE__ */ jsx("p", { children: "We use the information we collect to:" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Provide and maintain our TikTok video downloading service" }),
        /* @__PURE__ */ jsx("li", { children: "Improve and optimize our service" }),
        /* @__PURE__ */ jsx("li", { children: "Respond to your inquiries and support requests" }),
        /* @__PURE__ */ jsx("li", { children: "Monitor and analyze usage patterns" }),
        /* @__PURE__ */ jsx("li", { children: "Prevent fraudulent or abusive use of our service" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "4. Cookies and Tracking Technologies" }),
      /* @__PURE__ */ jsx("p", { children: "We use cookies and similar tracking technologies to enhance your experience on our website. These may include:" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Essential Cookies:" }),
          " Required for the basic functionality of our website."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Analytics Cookies:" }),
          " Help us understand how visitors interact with our website."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Advertising Cookies:" }),
          " May be used by our advertising partners to show relevant advertisements."
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our service." }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "5. Data Security" }),
      /* @__PURE__ */ jsx("p", { children: "We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security." }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "6. Third-Party Services" }),
      /* @__PURE__ */ jsx("p", { children: "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you use." }),
      /* @__PURE__ */ jsx("p", { children: "We may use third-party services such as:" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Google Analytics for website analytics" }),
        /* @__PURE__ */ jsx("li", { children: "Google AdSense or similar advertising networks" }),
        /* @__PURE__ */ jsx("li", { children: "Content delivery networks (CDNs)" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "7. Children's Privacy" }),
      /* @__PURE__ */ jsx("p", { children: "Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us." }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "8. Your Rights" }),
      /* @__PURE__ */ jsx("p", { children: "Depending on your location, you may have the following rights:" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "The right to access your personal information" }),
        /* @__PURE__ */ jsx("li", { children: "The right to correct inaccurate information" }),
        /* @__PURE__ */ jsx("li", { children: "The right to delete your personal information" }),
        /* @__PURE__ */ jsx("li", { children: "The right to object to processing" }),
        /* @__PURE__ */ jsx("li", { children: "The right to data portability" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "9. Changes to This Privacy Policy" }),
      /* @__PURE__ */ jsx("p", { children: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.' }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "10. Contact Us" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "If you have any questions about this Privacy Policy or our data practices, please contact us through our ",
        /* @__PURE__ */ jsx("a", { href: "#/contact", children: "contact page" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "alert alert-info mt-4", children: [
        /* @__PURE__ */ jsx("strong", { children: "Disclaimer:" }),
        " Our service is not affiliated with TikTok or ByteDance. TikTok is a trademark of ByteDance Ltd. We simply provide a tool to download publicly available content for personal use."
      ] })
    ] }) }) }) }) })
  ] });
}
function TermsConditions() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "hero-gradient text-white py-5", children: /* @__PURE__ */ jsx("div", { className: "container py-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faFileContract, className: "mb-3", style: { fontSize: "48px" } }),
      /* @__PURE__ */ jsx("h1", { className: "display-5 fw-bold mb-3", children: "Terms and Conditions" }),
      /* @__PURE__ */ jsx("p", { className: "lead text-white-50", children: "Please read these terms carefully before using our service" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5", children: /* @__PURE__ */ jsx("div", { className: "container py-4", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-4 shadow-sm p-4 p-md-5", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-muted mb-4", children: [
        /* @__PURE__ */ jsx("strong", { children: "Last Updated:" }),
        " ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "1. Acceptance of Terms" }),
      /* @__PURE__ */ jsx("p", { children: 'By accessing or using TikTok Video Downloader ("the Service"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Service.' }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "2. Description of Service" }),
      /* @__PURE__ */ jsx("p", { children: 'TikTok Video Downloader provides a free online tool that allows users to download publicly available TikTok videos in various formats (MP4, MP3) without watermarks. The Service is provided "as is" and "as available" without warranties of any kind.' }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "3. User Responsibilities" }),
      /* @__PURE__ */ jsx("p", { children: "By using our Service, you agree to:" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Respect Copyright:" }),
          " Only download content you have the right to download. Do not download or distribute copyrighted material without proper authorization."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Personal Use Only:" }),
          " Downloaded content should be for personal, non-commercial use unless you have explicit permission from the content creator."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "No Misuse:" }),
          " Do not use the Service for any illegal purposes or in violation of any applicable laws or regulations."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "No Automated Access:" }),
          " Do not use bots, scrapers, or automated tools to access the Service."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Credit Creators:" }),
          " When sharing downloaded content, give proper credit to the original creator whenever possible."
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "4. Intellectual Property" }),
      /* @__PURE__ */ jsx("p", { children: "The content downloaded through our Service belongs to the original creators on TikTok. We do not claim ownership of any third-party content. Our Service simply provides a technical means to download publicly available content." }),
      /* @__PURE__ */ jsx("p", { children: "The TikTok Video Downloader website, including its design, logos, and code, is our intellectual property and is protected by copyright laws." }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "5. Copyright and DMCA" }),
      /* @__PURE__ */ jsx("p", { children: "We respect intellectual property rights and expect our users to do the same. If you believe that your copyrighted work has been infringed through our Service, please contact us with the following information:" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "A description of the copyrighted work" }),
        /* @__PURE__ */ jsx("li", { children: "The URL where the infringing content was accessed" }),
        /* @__PURE__ */ jsx("li", { children: "Your contact information" }),
        /* @__PURE__ */ jsx("li", { children: "A statement that you have a good faith belief that the use is not authorized" }),
        /* @__PURE__ */ jsx("li", { children: "A statement under penalty of perjury that the information is accurate" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "6. Disclaimer of Warranties" }),
      /* @__PURE__ */ jsx("p", { children: 'THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.' }),
      /* @__PURE__ */ jsx("p", { children: "We do not guarantee that:" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "The Service will be uninterrupted or error-free" }),
        /* @__PURE__ */ jsx("li", { children: "Downloads will always be successful" }),
        /* @__PURE__ */ jsx("li", { children: "The Service will meet your specific requirements" }),
        /* @__PURE__ */ jsx("li", { children: "Downloaded content quality will meet your expectations" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "7. Limitation of Liability" }),
      /* @__PURE__ */ jsx("p", { children: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE." }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "8. Indemnification" }),
      /* @__PURE__ */ jsx("p", { children: "You agree to indemnify and hold harmless TikTok Video Downloader and its operators from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service or violation of these Terms." }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "9. Third-Party Services" }),
      /* @__PURE__ */ jsx("p", { children: "Our Service is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance. TikTok is a trademark of ByteDance Ltd. We are an independent third-party service." }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "10. Modifications to Service" }),
      /* @__PURE__ */ jsx("p", { children: "We reserve the right to modify, suspend, or discontinue the Service at any time without notice. We may also update these Terms and Conditions at any time. Your continued use of the Service after changes constitutes acceptance of the new terms." }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "11. Governing Law" }),
      /* @__PURE__ */ jsx("p", { children: "These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or the use of the Service shall be resolved through appropriate legal channels." }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "12. Severability" }),
      /* @__PURE__ */ jsx("p", { children: "If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect." }),
      /* @__PURE__ */ jsx("h2", { className: "fw-bold mt-4 mb-3", children: "13. Contact Information" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "If you have any questions about these Terms and Conditions, please contact us through our ",
        /* @__PURE__ */ jsx("a", { href: "#/contact", children: "contact page" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "alert alert-warning mt-4", children: [
        /* @__PURE__ */ jsx("strong", { children: "Important Notice:" }),
        " By using our TikTok Video Downloader service, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our service immediately."
      ] })
    ] }) }) }) }) })
  ] });
}
const SITE_URL = "https://tiktokvideosdownloader.com";
function buildLocalizedPath(lang, section) {
  const prefix = lang === "id" ? "/id" : "";
  switch (section) {
    case "home":
      return prefix || "/";
    case "mp3":
      return `${prefix}/mp3`;
    case "faq":
      return `${prefix}/faq`;
    case "contact":
      return `${prefix}/contact`;
    case "privacy-policy":
      return `${prefix}/privacy-policy`;
    case "terms-conditions":
      return `${prefix}/terms-conditions`;
    default:
      return prefix || "/";
  }
}
function canonicalUrl(path) {
  return `${SITE_URL}${path === "/" ? "/" : `${path}/`}`;
}
function getSeoMeta(lang, section) {
  const metaBySection = {
    home: lang === "id" ? {
      title: "TikTok Downloader — Download Video TikTok Tanpa Watermark HD",
      description: "Gunakan TikTok Downloader gratis untuk download video TikTok tanpa watermark HD, Android, iPhone, dan PC tanpa APK atau login."
    } : {
      title: "TikTok Downloader — Download TikTok Videos Without Watermark",
      description: "Use a free TikTok Downloader to save TikTok videos without watermark on iPhone, Android, or PC."
    },
    mp3: lang === "id" ? {
      title: "TikTok MP3 Downloader – Download MP3 TikTok Gratis & Cepat",
      description: "Download MP3 TikTok gratis tanpa aplikasi atau login. Tempel link TikTok, unduh audio, lagu, dan sound berkualitas tinggi dengan cepat di Android, iPhone, PC, dan Mac."
    } : {
      title: "TikTok MP3 Downloader – Download TikTok Audio for Free",
      description: "Free TikTok MP3 Downloader to convert TikTok videos into MP3. Download TikTok audio online in seconds without apps or sign-up."
    },
    faq: lang === "id" ? {
      title: "FAQ TikTok Downloader",
      description: "Pertanyaan umum seputar TikTok Downloader dan cara menggunakannya."
    } : {
      title: "TikTok Downloader FAQ",
      description: "Common questions about using the TikTok downloader and downloads."
    },
    contact: lang === "id" ? {
      title: "Kontak TikTok Downloader",
      description: "Hubungi tim support TikTok Downloader."
    } : {
      title: "Contact TikTok Downloader",
      description: "Get in touch with the TikTok downloader support team."
    },
    "privacy-policy": lang === "id" ? {
      title: "Privacy Policy TikTok Downloader",
      description: "Kebijakan privasi untuk TikTok Downloader."
    } : {
      title: "TikTok Downloader Privacy Policy",
      description: "Privacy policy for TikTok Downloader."
    },
    "terms-conditions": lang === "id" ? {
      title: "Terms and Conditions TikTok Downloader",
      description: "Syarat dan ketentuan penggunaan TikTok Downloader."
    } : {
      title: "TikTok Downloader Terms and Conditions",
      description: "Terms and conditions for using TikTok Downloader."
    }
  };
  const current = metaBySection[section];
  const canonicalPath = buildLocalizedPath(lang, section);
  const alternateEn = buildLocalizedPath("en", section);
  const alternateId = buildLocalizedPath("id", section);
  return {
    lang,
    title: current.title,
    description: current.description,
    canonical: canonicalUrl(canonicalPath),
    alternateEn: canonicalUrl(alternateEn),
    alternateId: canonicalUrl(alternateId),
    xDefault: `${SITE_URL}/`,
    ogLocale: lang === "id" ? "id_ID" : "en_US",
    ogLocaleAlternate: lang === "id" ? "en_US" : "id_ID"
  };
}
function renderHeadHtml(lang, section) {
  const seo = getSeoMeta(lang, section);
  return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="TikTok Downloader" />
    <link rel="canonical" href="${seo.canonical}" />
    <link rel="alternate" hreflang="en" href="${seo.alternateEn}" />
    <link rel="alternate" hreflang="id" href="${seo.alternateId}" />
    <link rel="alternate" hreflang="x-default" href="${seo.xDefault}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="${seo.ogLocale}" />
    <meta property="og:locale:alternate" content="${seo.ogLocaleAlternate}" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${seo.canonical}" />
    <meta property="twitter:title" content="${seo.title}" />
    <meta property="twitter:description" content="${seo.description}" />
  `.trim();
}
const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "id", label: "ID" }
];
function Navigator({ lang, section = "home" }) {
  const page = section === "mp3" ? "mp3" : "home";
  const homeHref = buildLocalizedPath(lang, "home");
  const mp3Href = buildLocalizedPath(lang, "mp3");
  const current = LANGUAGES.find((l2) => l2.code === lang) ?? LANGUAGES[0];
  const pageLinks = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        className: `nav-link nav-pill-link d-inline-flex align-items-center gap-2 ${page === "home" ? "active" : ""}`,
        to: homeHref,
        children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faVideo, className: "small" }),
          "TikTok MP4 Downloader"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      Link,
      {
        className: `nav-link nav-pill-link d-inline-flex align-items-center gap-2 ${page === "mp3" ? "active" : ""}`,
        to: mp3Href,
        children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faMusic, className: "small" }),
          "TikTok MP3 Downloader"
        ]
      }
    )
  ] });
  return /* @__PURE__ */ jsx("nav", { className: "navbar navbar-expand-lg navbar-dark bg-dark sticky-top", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs(Link, { className: "navbar-brand navbar-brand-custom d-flex align-items-center gap-2", to: homeHref, children: [
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faMusic, className: "text-danger" }),
      /* @__PURE__ */ jsx("span", { className: "tiktok-text", children: "TikTok" }),
      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Downloader" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "d-none d-lg-flex flex-grow-1 justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "navbar-page-links d-flex align-items-center justify-content-center gap-2", children: pageLinks }) }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center gap-2 ms-auto order-lg-last", children: [
      /* @__PURE__ */ jsxs("div", { className: "dropdown", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "btn btn-sm btn-outline-light dropdown-toggle d-flex align-items-center gap-2",
            type: "button",
            "data-bs-toggle": "dropdown",
            "aria-expanded": "false",
            "aria-label": "Change language",
            children: [
              /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faGlobe }),
              /* @__PURE__ */ jsx("span", { className: "text-uppercase", children: current.label })
            ]
          }
        ),
        /* @__PURE__ */ jsx("ul", { className: "dropdown-menu dropdown-menu-end", children: LANGUAGES.map((l2) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            className: `dropdown-item ${l2.code === lang ? "active" : ""}`,
            to: buildLocalizedPath(l2.code, section),
            children: /* @__PURE__ */ jsx("span", { className: "text-uppercase", children: l2.label })
          }
        ) }, l2.code)) })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "navbar-toggler",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarNav",
          "aria-controls": "navbarNav",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: /* @__PURE__ */ jsx("span", { className: "navbar-toggler-icon" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "collapse navbar-collapse", id: "navbarNav", children: /* @__PURE__ */ jsxs("ul", { className: "navbar-nav me-lg-auto align-items-lg-center gap-lg-1 mt-3 mt-lg-0", children: [
      /* @__PURE__ */ jsx("li", { className: "nav-item d-lg-none", children: /* @__PURE__ */ jsx("div", { className: "d-flex flex-column gap-2 mb-2", children: pageLinks }) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { className: "nav-link", to: "/faq", children: "FAQ" }) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { className: "nav-link", to: "/contact", children: "Contact" }) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { className: "nav-link", to: "/privacy-policy", children: "Privacy Policy" }) }),
      /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { className: "nav-link", to: "/terms-conditions", children: "Terms" }) })
    ] }) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "footer-dark text-white py-5", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-lg-4 mb-4 mb-lg-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faMusic, className: "text-danger fs-4" }),
          /* @__PURE__ */ jsx("span", { className: "tiktok-text fs-4 fw-bold", children: "TikTok" }),
          /* @__PURE__ */ jsx("span", { className: "fs-4 fw-bold", children: "Downloader" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-white-50 mb-3", children: "Free TikTok video downloader. Download TikTok videos without watermark in MP4 or MP3 format. Fast, free, and unlimited downloads." }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon", "aria-label": "TikTok", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTiktok }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon", "aria-label": "Instagram", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faInstagram }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon", "aria-label": "Facebook", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faFacebook }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon", "aria-label": "Twitter", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTwitter }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-lg-2 col-md-4 mb-4 mb-lg-0", children: [
        /* @__PURE__ */ jsx("h5", { className: "mb-3 fw-bold", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-unstyled", children: [
          /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "text-white-50 text-decoration-none hover-white", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx(Link, { to: "/faq", className: "text-white-50 text-decoration-none hover-white", children: "FAQ" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-white-50 text-decoration-none hover-white", children: "Contact Us" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-lg-2 col-md-4 mb-4 mb-lg-0", children: [
        /* @__PURE__ */ jsx("h5", { className: "mb-3 fw-bold", children: "Legal" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-unstyled", children: [
          /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx(Link, { to: "/privacy-policy", className: "text-white-50 text-decoration-none hover-white", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsx(Link, { to: "/terms-conditions", className: "text-white-50 text-decoration-none hover-white", children: "Terms & Conditions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-lg-4 col-md-4", children: [
        /* @__PURE__ */ jsx("h5", { className: "mb-3 fw-bold", children: "Features" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-unstyled text-white-50", children: [
          /* @__PURE__ */ jsx(CheckListItem, { className: "mb-2 text-white-50", children: "Download TikTok Videos Without Watermark" }),
          /* @__PURE__ */ jsx(CheckListItem, { className: "mb-2 text-white-50", children: "High-Quality MP4 & MP3 Downloads" }),
          /* @__PURE__ */ jsx(CheckListItem, { className: "mb-2 text-white-50", children: "Free & Unlimited Downloads" }),
          /* @__PURE__ */ jsx(CheckListItem, { className: "mb-2 text-white-50", children: "Works on All Devices" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-4 border-secondary" }),
    /* @__PURE__ */ jsxs("div", { className: "row align-items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "col-md-6 text-center text-md-start", children: /* @__PURE__ */ jsxs("p", { className: "text-white-50 mb-0", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " TikTok Video Downloader. All rights reserved."
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-md-6 text-center text-md-end", children: /* @__PURE__ */ jsx("p", { className: "text-white-50 mb-0 small", children: "This service is not affiliated with TikTok. Use responsibly and respect copyright." }) })
    ] })
  ] }) });
}
function ensureMeta(selector, attrs) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}
function ensureLink(selector, attrs) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}
function useSeo(lang, section) {
  useEffect(() => {
    const seo = getSeoMeta(lang, section);
    document.title = seo.title;
    document.documentElement.lang = lang;
    ensureMeta('meta[name="description"]', {
      name: "description",
      content: seo.description
    });
    ensureLink('link[rel="canonical"]', {
      rel: "canonical",
      href: seo.canonical
    });
    ensureLink('link[rel="alternate"][hreflang="en"]', {
      rel: "alternate",
      hreflang: "en",
      href: seo.alternateEn
    });
    ensureLink('link[rel="alternate"][hreflang="id"]', {
      rel: "alternate",
      hreflang: "id",
      href: seo.alternateId
    });
    ensureLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: "alternate",
      hreflang: "x-default",
      href: seo.xDefault
    });
  }, [lang, section]);
}
function AppShell({
  lang,
  section,
  children
}) {
  useSeo(lang, section);
  return /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column min-vh-100", children: [
    /* @__PURE__ */ jsx(Navigator, { lang, section }),
    /* @__PURE__ */ jsx("main", { className: "flex-grow-1", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function AppRoutes() {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/",
        element: /* @__PURE__ */ jsx(AppShell, { lang: "en", section: "home", children: /* @__PURE__ */ jsx(HomeEn, {}) })
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/mp3",
        element: /* @__PURE__ */ jsx(AppShell, { lang: "en", section: "mp3", children: /* @__PURE__ */ jsx(Mp3En, {}) })
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/faq",
        element: /* @__PURE__ */ jsx(AppShell, { lang: "en", section: "faq", children: /* @__PURE__ */ jsx(FAQ, {}) })
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/contact",
        element: /* @__PURE__ */ jsx(AppShell, { lang: "en", section: "contact", children: /* @__PURE__ */ jsx(Contact, {}) })
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/privacy-policy",
        element: /* @__PURE__ */ jsx(AppShell, { lang: "en", section: "privacy-policy", children: /* @__PURE__ */ jsx(PrivacyPolicy, {}) })
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/terms-conditions",
        element: /* @__PURE__ */ jsx(AppShell, { lang: "en", section: "terms-conditions", children: /* @__PURE__ */ jsx(TermsConditions, {}) })
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/id",
        element: /* @__PURE__ */ jsx(AppShell, { lang: "id", section: "home", children: /* @__PURE__ */ jsx(HomeId, {}) })
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/id/mp3",
        element: /* @__PURE__ */ jsx(AppShell, { lang: "id", section: "mp3", children: /* @__PURE__ */ jsx(Mp3Id, {}) })
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/id/faq",
        element: /* @__PURE__ */ jsx(AppShell, { lang: "id", section: "faq", children: /* @__PURE__ */ jsx(FAQ, {}) })
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/id/contact",
        element: /* @__PURE__ */ jsx(AppShell, { lang: "id", section: "contact", children: /* @__PURE__ */ jsx(Contact, {}) })
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/id/privacy-policy",
        element: /* @__PURE__ */ jsx(AppShell, { lang: "id", section: "privacy-policy", children: /* @__PURE__ */ jsx(PrivacyPolicy, {}) })
      }
    ),
    /* @__PURE__ */ jsx(
      Route,
      {
        path: "/id/terms-conditions",
        element: /* @__PURE__ */ jsx(AppShell, { lang: "id", section: "terms-conditions", children: /* @__PURE__ */ jsx(TermsConditions, {}) })
      }
    ),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) })
  ] });
}
const STATIC_ROUTES = [
  { path: "/", lang: "en", section: "home" },
  { path: "/mp3", lang: "en", section: "mp3" },
  { path: "/faq", lang: "en", section: "faq" },
  { path: "/contact", lang: "en", section: "contact" },
  { path: "/privacy-policy", lang: "en", section: "privacy-policy" },
  { path: "/terms-conditions", lang: "en", section: "terms-conditions" },
  { path: "/id", lang: "id", section: "home" },
  { path: "/id/mp3", lang: "id", section: "mp3" },
  { path: "/id/faq", lang: "id", section: "faq" },
  { path: "/id/contact", lang: "id", section: "contact" },
  { path: "/id/privacy-policy", lang: "id", section: "privacy-policy" },
  { path: "/id/terms-conditions", lang: "id", section: "terms-conditions" }
];
function render2(url) {
  const normalized = url === "/" ? "/" : url.replace(/\/$/, "") || "/";
  return renderToString(
    /* @__PURE__ */ jsx(MemoryRouter, { initialEntries: [normalized], children: /* @__PURE__ */ jsx(AppRoutes, {}) })
  );
}
export {
  STATIC_ROUTES,
  render2 as render,
  renderHeadHtml
};
