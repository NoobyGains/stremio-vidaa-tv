/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 172
(module) {

function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 293
(module) {

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 994
(module) {

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 993
(module, __unused_webpack_exports, __webpack_require__) {

var regeneratorDefine = __webpack_require__(546);
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function () {
    return this;
  }), regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (module.exports = _regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 869
(module, __unused_webpack_exports, __webpack_require__) {

var regeneratorAsyncGen = __webpack_require__(887);
function _regeneratorAsync(n, e, r, t, o) {
  var a = regeneratorAsyncGen(n, e, r, t, o);
  return a.next().then(function (n) {
    return n.done ? n.value : a.next();
  });
}
module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 887
(module, __unused_webpack_exports, __webpack_require__) {

var regenerator = __webpack_require__(993);
var regeneratorAsyncIterator = __webpack_require__(791);
function _regeneratorAsyncGen(r, e, t, o, n) {
  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
}
module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 791
(module, __unused_webpack_exports, __webpack_require__) {

var OverloadYield = __webpack_require__(172);
var regeneratorDefine = __webpack_require__(546);
function AsyncIterator(t, e) {
  function n(r, o, i, f) {
    try {
      var c = t[r](o),
        u = c.value;
      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {
        n("next", t, i, f);
      }, function (t) {
        n("throw", t, i, f);
      }) : e.resolve(u).then(function (t) {
        c.value = t, i(c);
      }, function (t) {
        return n("throw", t, i, f);
      });
    } catch (t) {
      f(t);
    }
  }
  var r;
  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
    return this;
  })), regeneratorDefine(this, "_invoke", function (t, o, i) {
    function f() {
      return new e(function (e, r) {
        n(t, i, e, r);
      });
    }
    return r = r ? r.then(f, f) : f();
  }, !0);
}
module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 546
(module) {

function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
}
module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 373
(module) {

function _regeneratorKeys(e) {
  var n = Object(e),
    r = [];
  for (var t in n) r.unshift(t);
  return function e() {
    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
    return e.done = !0, e;
  };
}
module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 633
(module, __unused_webpack_exports, __webpack_require__) {

var OverloadYield = __webpack_require__(172);
var regenerator = __webpack_require__(993);
var regeneratorAsync = __webpack_require__(869);
var regeneratorAsyncGen = __webpack_require__(887);
var regeneratorAsyncIterator = __webpack_require__(791);
var regeneratorKeys = __webpack_require__(373);
var regeneratorValues = __webpack_require__(579);
function _regeneratorRuntime() {
  "use strict";

  var r = regenerator(),
    e = r.m(_regeneratorRuntime),
    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
  function n(r) {
    var e = "function" == typeof r && r.constructor;
    return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
  }
  var o = {
    "throw": 1,
    "return": 2,
    "break": 3,
    "continue": 3
  };
  function a(r) {
    var e, t;
    return function (n) {
      e || (e = {
        stop: function stop() {
          return t(n.a, 2);
        },
        "catch": function _catch() {
          return n.v;
        },
        abrupt: function abrupt(r, e) {
          return t(n.a, o[r], e);
        },
        delegateYield: function delegateYield(r, o, a) {
          return e.resultName = o, t(n.d, regeneratorValues(r), a);
        },
        finish: function finish(r) {
          return t(n.f, r);
        }
      }, t = function t(r, _t, o) {
        n.p = e.prev, n.n = e.next;
        try {
          return r(_t, o);
        } finally {
          e.next = n.n;
        }
      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
      try {
        return r.call(this, e);
      } finally {
        n.p = e.prev, n.n = e.next;
      }
    };
  }
  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return {
      wrap: function wrap(e, t, n, o) {
        return r.w(a(e), t, n, o && o.reverse());
      },
      isGeneratorFunction: n,
      mark: r.m,
      awrap: function awrap(r, e) {
        return new OverloadYield(r, e);
      },
      AsyncIterator: regeneratorAsyncIterator,
      async: function async(r, e, t, o, u) {
        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
      },
      keys: regeneratorKeys,
      values: regeneratorValues
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 579
(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(738)["default"]);
function _regeneratorValues(e) {
  if (null != e) {
    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
      r = 0;
    if (t) return t.call(e);
    if ("function" == typeof e.next) return e;
    if (!isNaN(e.length)) return {
      next: function next() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(_typeof(e) + " is not iterable");
}
module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 738
(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 756
(module, __unused_webpack_exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(633)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ },

/***/ 6
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(994);
var _regenerator = _interopRequireDefault(__webpack_require__(756));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(293));
function getId() {
  return Math.random().toString(32).slice(2);
}
function Bridge(scope, handler) {
  handler.addEventListener('message', /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
      var request, id, path, args, value, data, thisArg;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            request = _ref.data.request;
            if (request) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            id = request.id, path = request.path, args = request.args;
            _context.prev = 4;
            value = path.reduce(function (value, prop) {
              return value[prop];
            }, scope);
            if (!(typeof value === 'function')) {
              _context.next = 13;
              break;
            }
            thisArg = path.slice(0, path.length - 1).reduce(function (value, prop) {
              return value[prop];
            }, scope);
            _context.next = 10;
            return value.apply(thisArg, args);
          case 10:
            data = _context.sent;
            _context.next = 16;
            break;
          case 13:
            _context.next = 15;
            return value;
          case 15:
            data = _context.sent;
          case 16:
            handler.postMessage({
              response: {
                id: id,
                result: {
                  data: data
                }
              }
            });
            _context.next = 22;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](4);
            handler.postMessage({
              response: {
                id: id,
                result: {
                  error: _context.t0
                }
              }
            });
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 19]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  this.call = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(path, args) {
      var id;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            id = getId();
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              var onMessage = function onMessage(_ref4) {
                var response = _ref4.data.response;
                if (!response || response.id !== id) return;
                handler.removeEventListener('message', onMessage);
                if ('error' in response.result) {
                  reject(response.result.error);
                } else {
                  resolve(response.result.data);
                }
              };
              handler.addEventListener('message', onMessage);
              handler.postMessage({
                request: {
                  id: id,
                  path: path,
                  args: args
                }
              });
            }));
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();
}
module.exports = Bridge;


/***/ },

/***/ 363
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(994);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.analytics = analytics;
exports.decode_stream = decode_stream;
exports["default"] = void 0;
exports.dispatch = dispatch;
exports.get_state = get_state;
exports.initialize_runtime = initialize_runtime;
exports.start = start;
var _regenerator = _interopRequireDefault(__webpack_require__(756));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(293));
var _typeof2 = _interopRequireDefault(__webpack_require__(738));
var importMeta = {
  url: new URL('/stremio_core_web.js', document.baseURI).href
};
var wasm;
var heap = new Array(32).fill(undefined);
heap.push(undefined, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var WASM_VECTOR_LEN = 0;
var cachegetUint8Memory0 = null;
function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachegetUint8Memory0;
}
var cachedTextEncoder = new TextEncoder('utf-8');
var encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  var buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    var buf = cachedTextEncoder.encode(arg);
    var _ptr = malloc(buf.length);
    getUint8Memory0().subarray(_ptr, _ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return _ptr;
  }
  var len = arg.length;
  var ptr = malloc(len);
  var mem = getUint8Memory0();
  var offset = 0;
  for (; offset < len; offset++) {
    var code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    var view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    var ret = encodeString(arg, view);
    offset += ret.written;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function isLikeNone(x) {
  return x === undefined || x === null;
}
var cachegetInt32Memory0 = null;
function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachegetInt32Memory0;
}
var heap_next = heap.length;
function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  var ret = getObject(idx);
  dropObject(idx);
  return ret;
}
var cachedTextDecoder = new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  var idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function debugString(val) {
  // primitive types
  var type = (0, _typeof2["default"])(val);
  if (type == 'number' || type == 'boolean' || val == null) {
    return "".concat(val);
  }
  if (type == 'string') {
    return "\"".concat(val, "\"");
  }
  if (type == 'symbol') {
    var description = val.description;
    if (description == null) {
      return 'Symbol';
    } else {
      return "Symbol(".concat(description, ")");
    }
  }
  if (type == 'function') {
    var name = val.name;
    if (typeof name == 'string' && name.length > 0) {
      return "Function(".concat(name, ")");
    } else {
      return 'Function';
    }
  }
  // objects
  if (Array.isArray(val)) {
    var length = val.length;
    var debug = '[';
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (var i = 1; i < length; i++) {
      debug += ', ' + debugString(val[i]);
    }
    debug += ']';
    return debug;
  }
  // Test for built-in
  var builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  var className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    // Failed to match the standard '[object ClassName]'
    return toString.call(val);
  }
  if (className == 'Object') {
    // we're a user defined class or Object
    // JSON.stringify avoids problems with cycles, and is generally much
    // easier than looping through ownProperties of `val`.
    try {
      return 'Object(' + JSON.stringify(val) + ')';
    } catch (_) {
      return 'Object';
    }
  }
  // errors
  if (val instanceof Error) {
    return "".concat(val.name, ": ").concat(val.message, "\n").concat(val.stack);
  }
  // TODO we could test for more things here, like `Set`s and `Map`s.
  return className;
}
function makeMutClosure(arg0, arg1, dtor, f) {
  var state = {
    a: arg0,
    b: arg1,
    cnt: 1,
    dtor: dtor
  };
  var real = function real() {
    // First up with a closure we increment the internal reference
    // count. This ensures that the Rust closure environment won't
    // be deallocated while we're invoking it.
    state.cnt++;
    var a = state.a;
    state.a = 0;
    try {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return f.apply(void 0, [a, state.b].concat(args));
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
      } else {
        state.a = a;
      }
    }
  };
  real.original = state;
  return real;
}
function __wbg_adapter_30(arg0, arg1) {
  wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h24de1d724deaf191(arg0, arg1);
}
function __wbg_adapter_33(arg0, arg1, arg2) {
  wasm.wasm_bindgen__convert__closures__invoke1_mut__h287d35c01be7cb49(arg0, arg1, addHeapObject(arg2));
}

/**
*/
function start() {
  wasm.start();
}

/**
* @param {Function} emit_to_ui
* @returns {Promise<void>}
*/
function initialize_runtime(emit_to_ui) {
  var ret = wasm.initialize_runtime(addHeapObject(emit_to_ui));
  return takeObject(ret);
}

/**
* @param {any} field
* @returns {any}
*/
function get_state(field) {
  var ret = wasm.get_state(addHeapObject(field));
  return takeObject(ret);
}

/**
* @param {any} action
* @param {any} field
* @param {any} location_hash
*/
function dispatch(action, field, location_hash) {
  wasm.dispatch(addHeapObject(action), addHeapObject(field), addHeapObject(location_hash));
}

/**
* @param {any} event
* @param {any} location_hash
*/
function analytics(event, location_hash) {
  wasm.analytics(addHeapObject(event), addHeapObject(location_hash));
}

/**
* @param {any} stream
* @returns {any}
*/
function decode_stream(stream) {
  var ret = wasm.decode_stream(addHeapObject(stream));
  return takeObject(ret);
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}
function __wbg_adapter_118(arg0, arg1, arg2, arg3) {
  wasm.wasm_bindgen__convert__closures__invoke2_mut__hae5b9d44fd620b1a(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}
function load(_x, _x2) {
  return _load.apply(this, arguments);
}
function _load() {
  _load = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(module, imports) {
    var bytes, instance;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof Response === 'function' && module instanceof Response)) {
            _context.next = 23;
            break;
          }
          if (!(typeof WebAssembly.instantiateStreaming === 'function')) {
            _context.next = 15;
            break;
          }
          _context.prev = 2;
          _context.next = 5;
          return WebAssembly.instantiateStreaming(module, imports);
        case 5:
          return _context.abrupt("return", _context.sent);
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](2);
          if (!(module.headers.get('Content-Type') != 'application/wasm')) {
            _context.next = 14;
            break;
          }
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _context.t0);
          _context.next = 15;
          break;
        case 14:
          throw _context.t0;
        case 15:
          _context.next = 17;
          return module.arrayBuffer();
        case 17:
          bytes = _context.sent;
          _context.next = 20;
          return WebAssembly.instantiate(bytes, imports);
        case 20:
          return _context.abrupt("return", _context.sent);
        case 23:
          _context.next = 25;
          return WebAssembly.instantiate(module, imports);
        case 25:
          instance = _context.sent;
          if (!(instance instanceof WebAssembly.Instance)) {
            _context.next = 30;
            break;
          }
          return _context.abrupt("return", {
            instance: instance,
            module: module
          });
        case 30:
          return _context.abrupt("return", instance);
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 8]]);
  }));
  return _load.apply(this, arguments);
}
function init(_x3) {
  return _init.apply(this, arguments);
}
function _init() {
  _init = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(input) {
    var imports, _yield$load, instance, module;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (typeof input === 'undefined') {
            input = new URL('stremio_core_web_bg.wasm', importMeta.url);
          }
          imports = {};
          imports.wbg = {};
          imports.wbg.__wbindgen_string_get = function (arg0, arg1) {
            var obj = getObject(arg1);
            var ret = typeof obj === 'string' ? obj : undefined;
            var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
          };
          imports.wbg.__wbindgen_object_drop_ref = function (arg0) {
            takeObject(arg0);
          };
          imports.wbg.__wbindgen_is_undefined = function (arg0) {
            var ret = getObject(arg0) === undefined;
            return ret;
          };
          imports.wbg.__wbg_localstoragegetitem_f889a6b8d3100ef4 = function () {
            return handleError(function (arg0, arg1) {
              try {
                var ret = self.local_storage_get_item(getStringFromWasm0(arg0, arg1));
                return addHeapObject(ret);
              } finally {
                wasm.__wbindgen_free(arg0, arg1);
              }
            }, arguments);
          };
          imports.wbg.__wbg_getlocationhash_3f7594ef15034e54 = function () {
            return handleError(function () {
              var ret = self.get_location_hash();
              return addHeapObject(ret);
            }, arguments);
          };
          imports.wbg.__wbg_localstorageremoveitem_14a054ba39679677 = function () {
            return handleError(function (arg0, arg1) {
              try {
                var ret = self.local_storage_remove_item(getStringFromWasm0(arg0, arg1));
                return addHeapObject(ret);
              } finally {
                wasm.__wbindgen_free(arg0, arg1);
              }
            }, arguments);
          };
          imports.wbg.__wbg_localstoragesetitem_b419d8cd94aebda3 = function () {
            return handleError(function (arg0, arg1, arg2, arg3) {
              try {
                var ret = self.local_storage_set_item(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
                return addHeapObject(ret);
              } finally {
                wasm.__wbindgen_free(arg0, arg1);
                wasm.__wbindgen_free(arg2, arg3);
              }
            }, arguments);
          };
          imports.wbg.__wbindgen_string_new = function (arg0, arg1) {
            var ret = getStringFromWasm0(arg0, arg1);
            return addHeapObject(ret);
          };
          imports.wbg.__wbindgen_object_clone_ref = function (arg0) {
            var ret = getObject(arg0);
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_static_accessor_APP_VERSION_626ea850f08d4f7f = function (arg0) {
            var ret = self.app_version;
            var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
          };
          imports.wbg.__wbg_static_accessor_SHELL_VERSION_a78356a69c7fc646 = function (arg0) {
            var ret = self.shell_version;
            var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
          };
          imports.wbg.__wbg_new_693216e109162396 = function () {
            var ret = new Error();
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_stack_0ddaca5d1abfb52f = function (arg0, arg1) {
            var ret = getObject(arg1).stack;
            var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
          };
          imports.wbg.__wbg_error_09919627ac0992f5 = function (arg0, arg1) {
            try {
              console.error(getStringFromWasm0(arg0, arg1));
            } finally {
              wasm.__wbindgen_free(arg0, arg1);
            }
          };
          imports.wbg.__wbg_crypto_1dc1c51d9d27e0dd = function (arg0) {
            var ret = getObject(arg0).crypto;
            return addHeapObject(ret);
          };
          imports.wbg.__wbindgen_is_object = function (arg0) {
            var val = getObject(arg0);
            var ret = (0, _typeof2["default"])(val) === 'object' && val !== null;
            return ret;
          };
          imports.wbg.__wbg_process_65edac0b2f0a8427 = function (arg0) {
            var ret = getObject(arg0).process;
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_versions_0d0eed1c1b42b216 = function (arg0) {
            var ret = getObject(arg0).versions;
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_node_82761bdd6eaac7e7 = function (arg0) {
            var ret = getObject(arg0).node;
            return addHeapObject(ret);
          };
          imports.wbg.__wbindgen_is_string = function (arg0) {
            var ret = typeof getObject(arg0) === 'string';
            return ret;
          };
          imports.wbg.__wbg_require_3f60396135018b0f = function () {
            return handleError(function () {
              var ret = module.require;
              return addHeapObject(ret);
            }, arguments);
          };
          imports.wbg.__wbg_msCrypto_4ef1b0e1cd4cedbb = function (arg0) {
            var ret = getObject(arg0).msCrypto;
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_randomFillSync_d84d19ffc1d700ed = function () {
            return handleError(function (arg0, arg1) {
              getObject(arg0).randomFillSync(takeObject(arg1));
            }, arguments);
          };
          imports.wbg.__wbg_getRandomValues_3293819ebec805bc = function () {
            return handleError(function (arg0, arg1) {
              getObject(arg0).getRandomValues(getObject(arg1));
            }, arguments);
          };
          imports.wbg.__wbg_log_02e20a3c32305fb7 = function (arg0, arg1) {
            try {
              console.log(getStringFromWasm0(arg0, arg1));
            } finally {
              wasm.__wbindgen_free(arg0, arg1);
            }
          };
          imports.wbg.__wbg_log_5c7513aa8c164502 = function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            try {
              console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
            } finally {
              wasm.__wbindgen_free(arg0, arg1);
            }
          };
          imports.wbg.__wbg_mark_abc7631bdced64f0 = function (arg0, arg1) {
            performance.mark(getStringFromWasm0(arg0, arg1));
          };
          imports.wbg.__wbg_measure_c528ff64085b7146 = function () {
            return handleError(function (arg0, arg1, arg2, arg3) {
              try {
                performance.measure(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
              } finally {
                wasm.__wbindgen_free(arg0, arg1);
                wasm.__wbindgen_free(arg2, arg3);
              }
            }, arguments);
          };
          imports.wbg.__wbindgen_cb_drop = function (arg0) {
            var obj = takeObject(arg0).original;
            if (obj.cnt-- == 1) {
              obj.a = 0;
              return true;
            }
            var ret = false;
            return ret;
          };
          imports.wbg.__wbg_newwithstrandinit_9b0fa00478c37287 = function () {
            return handleError(function (arg0, arg1, arg2) {
              var ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
              return addHeapObject(ret);
            }, arguments);
          };
          imports.wbg.__wbg_instanceof_Response_e1b11afbefa5b563 = function (arg0) {
            var ret = getObject(arg0) instanceof Response;
            return ret;
          };
          imports.wbg.__wbg_status_6d8bb444ddc5a7b2 = function (arg0) {
            var ret = getObject(arg0).status;
            return ret;
          };
          imports.wbg.__wbg_text_8279d34d73e43c68 = function () {
            return handleError(function (arg0) {
              var ret = getObject(arg0).text();
              return addHeapObject(ret);
            }, arguments);
          };
          imports.wbg.__wbg_language_cd6e22892ba36a1f = function (arg0, arg1) {
            var ret = getObject(arg1).language;
            var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
          };
          imports.wbg.__wbg_instanceof_WorkerGlobalScope_f191ca0158f5637b = function (arg0) {
            var ret = getObject(arg0) instanceof WorkerGlobalScope;
            return ret;
          };
          imports.wbg.__wbg_navigator_8bc0889cda8f8500 = function (arg0) {
            var ret = getObject(arg0).navigator;
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_fetch_b4e81012e07ff95a = function (arg0, arg1) {
            var ret = getObject(arg0).fetch(getObject(arg1));
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_setInterval_a02797f5ab1c7eb1 = function () {
            return handleError(function (arg0, arg1, arg2) {
              var ret = getObject(arg0).setInterval(getObject(arg1), arg2);
              return ret;
            }, arguments);
          };
          imports.wbg.__wbindgen_number_new = function (arg0) {
            var ret = arg0;
            return addHeapObject(ret);
          };
          imports.wbg.__wbindgen_is_function = function (arg0) {
            var ret = typeof getObject(arg0) === 'function';
            return ret;
          };
          imports.wbg.__wbg_newnoargs_be86524d73f67598 = function (arg0, arg1) {
            var ret = new Function(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_call_888d259a5fefc347 = function () {
            return handleError(function (arg0, arg1) {
              var ret = getObject(arg0).call(getObject(arg1));
              return addHeapObject(ret);
            }, arguments);
          };
          imports.wbg.__wbg_new_0b83d3df67ecb33e = function () {
            var ret = new Object();
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_self_c6fbdfc2918d5e58 = function () {
            return handleError(function () {
              var ret = self.self;
              return addHeapObject(ret);
            }, arguments);
          };
          imports.wbg.__wbg_window_baec038b5ab35c54 = function () {
            return handleError(function () {
              var ret = window.window;
              return addHeapObject(ret);
            }, arguments);
          };
          imports.wbg.__wbg_globalThis_3f735a5746d41fbd = function () {
            return handleError(function () {
              var ret = globalThis.globalThis;
              return addHeapObject(ret);
            }, arguments);
          };
          imports.wbg.__wbg_global_1bc0b39582740e95 = function () {
            return handleError(function () {
              var ret = __webpack_require__.g.global;
              return addHeapObject(ret);
            }, arguments);
          };
          imports.wbg.__wbg_instanceof_Error_561efcb1265706d8 = function (arg0) {
            var ret = getObject(arg0) instanceof Error;
            return ret;
          };
          imports.wbg.__wbg_message_9f7d15ff97fc4102 = function (arg0) {
            var ret = getObject(arg0).message;
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_call_346669c262382ad7 = function () {
            return handleError(function (arg0, arg1, arg2) {
              var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
              return addHeapObject(ret);
            }, arguments);
          };
          imports.wbg.__wbg_getTimezoneOffset_d3e5a22a1b7fb1d8 = function (arg0) {
            var ret = getObject(arg0).getTimezoneOffset();
            return ret;
          };
          imports.wbg.__wbg_new_f11872bb9bb9d781 = function (arg0) {
            var ret = new Date(getObject(arg0));
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_now_af172eabe2e041ad = function () {
            var ret = Date.now();
            return ret;
          };
          imports.wbg.__wbg_new_b1d61b5687f5e73a = function (arg0, arg1) {
            try {
              var state0 = {
                a: arg0,
                b: arg1
              };
              var cb0 = function cb0(arg0, arg1) {
                var a = state0.a;
                state0.a = 0;
                try {
                  return __wbg_adapter_118(a, state0.b, arg0, arg1);
                } finally {
                  state0.a = a;
                }
              };
              var ret = new Promise(cb0);
              return addHeapObject(ret);
            } finally {
              state0.a = state0.b = 0;
            }
          };
          imports.wbg.__wbg_resolve_d23068002f584f22 = function (arg0) {
            var ret = Promise.resolve(getObject(arg0));
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_then_2fcac196782070cc = function (arg0, arg1) {
            var ret = getObject(arg0).then(getObject(arg1));
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_then_8c2d62e8ae5978f7 = function (arg0, arg1, arg2) {
            var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_buffer_397eaa4d72ee94dd = function (arg0) {
            var ret = getObject(arg0).buffer;
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff = function (arg0, arg1, arg2) {
            var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_new_a7ce447f15ff496f = function (arg0) {
            var ret = new Uint8Array(getObject(arg0));
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_set_969ad0a60e51d320 = function (arg0, arg1, arg2) {
            getObject(arg0).set(getObject(arg1), arg2 >>> 0);
          };
          imports.wbg.__wbg_newwithlength_929232475839a482 = function (arg0) {
            var ret = new Uint8Array(arg0 >>> 0);
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_subarray_8b658422a224f479 = function (arg0, arg1, arg2) {
            var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
          };
          imports.wbg.__wbg_set_82a4e8a85e31ac42 = function () {
            return handleError(function (arg0, arg1, arg2) {
              var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
              return ret;
            }, arguments);
          };
          imports.wbg.__wbg_parse_ccb2cd4fe8ead0cb = function () {
            return handleError(function (arg0, arg1) {
              var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
              return addHeapObject(ret);
            }, arguments);
          };
          imports.wbg.__wbg_stringify_d4507a59932eed0c = function () {
            return handleError(function (arg0) {
              var ret = JSON.stringify(getObject(arg0));
              return addHeapObject(ret);
            }, arguments);
          };
          imports.wbg.__wbindgen_debug_string = function (arg0, arg1) {
            var ret = debugString(getObject(arg1));
            var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
          };
          imports.wbg.__wbindgen_throw = function (arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
          };
          imports.wbg.__wbindgen_rethrow = function (arg0) {
            throw takeObject(arg0);
          };
          imports.wbg.__wbindgen_memory = function () {
            var ret = wasm.memory;
            return addHeapObject(ret);
          };
          imports.wbg.__wbindgen_closure_wrapper2454 = function (arg0, arg1, arg2) {
            var ret = makeMutClosure(arg0, arg1, 730, __wbg_adapter_30);
            return addHeapObject(ret);
          };
          imports.wbg.__wbindgen_closure_wrapper8126 = function (arg0, arg1, arg2) {
            var ret = makeMutClosure(arg0, arg1, 1014, __wbg_adapter_33);
            return addHeapObject(ret);
          };
          if (typeof input === 'string' || typeof Request === 'function' && input instanceof Request || typeof URL === 'function' && input instanceof URL) {
            input = fetch(input);
          }
          _context2.t0 = load;
          _context2.next = 79;
          return input;
        case 79:
          _context2.t1 = _context2.sent;
          _context2.t2 = imports;
          _context2.next = 83;
          return (0, _context2.t0)(_context2.t1, _context2.t2);
        case 83:
          _yield$load = _context2.sent;
          instance = _yield$load.instance;
          module = _yield$load.module;
          wasm = instance.exports;
          init.__wbindgen_wasm_module = module;
          wasm.__wbindgen_start();
          return _context2.abrupt("return", wasm);
        case 90:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _init.apply(this, arguments);
}
var _default = exports["default"] = init;


/***/ },

/***/ 236
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "stremio_core_web_bg.wasm";


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
var Bridge = __webpack_require__(6);
var bridge = new Bridge(self, self);

self.init = async function({ appVersion, shellVersion }) {
    self.document = { baseURI: self.location.href };
    self.app_version = appVersion;
    self.shell_version = shellVersion;
    
    self.get_location_hash = async function() {
        return bridge.call(['location', 'hash'], []);
    };
    self.local_storage_get_item = async function(key) {
        return bridge.call(['localStorage', 'getItem'], [key]);
    };
    self.local_storage_set_item = async function(key, value) {
        return bridge.call(['localStorage', 'setItem'], [key, value]);
    };
    self.local_storage_remove_item = async function(key) {
        return bridge.call(['localStorage', 'removeItem'], [key]);
    };
    
    var core = __webpack_require__(363);
    var initialize_api = core.default;
    var initialize_runtime = core.initialize_runtime;
    
    self.getState = core.get_state;
    self.getDebugState = core.get_debug_state;
    self.dispatch = core.dispatch;
    self.analytics = core.analytics;
    self.decodeStream = core.decode_stream;
    
    await initialize_api(__webpack_require__(236));
    await initialize_runtime(function(event) {
        return bridge.call(['onCoreEvent'], [event]);
    });
};

/******/ })()
;