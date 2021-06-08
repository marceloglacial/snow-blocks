(window["webpackJsonp_snowblocks"] = window["webpackJsonp_snowblocks"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp_snowblocks"] = window["webpackJsonp_snowblocks"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/dequal/lite/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/dequal/lite/index.mjs ***!
  \********************************************/
/*! exports provided: dequal */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dequal", function() { return dequal; });
var has = Object.prototype.hasOwnProperty;

function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}


/***/ }),

/***/ "./node_modules/postscribe/dist/postscribe.js":
/*!****************************************************!*\
  !*** ./node_modules/postscribe/dist/postscribe.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @file postscribe
 * @description Asynchronously write javascript, even with document.write.
 * @version v2.0.8
 * @see {@link https://krux.github.io/postscribe}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digital, Inc
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _postscribe = __webpack_require__(1);
	
	var _postscribe2 = _interopRequireDefault(_postscribe);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	module.exports = _postscribe2['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = postscribe;
	
	var _writeStream = __webpack_require__(2);
	
	var _writeStream2 = _interopRequireDefault(_writeStream);
	
	var _utils = __webpack_require__(4);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * A function that intentionally does nothing.
	 */
	function doNothing() {}
	
	/**
	 * Available options and defaults.
	 *
	 * @type {Object}
	 */
	var OPTIONS = {
	  /**
	   * Called when an async script has loaded.
	   */
	  afterAsync: doNothing,
	
	  /**
	   * Called immediately before removing from the write queue.
	   */
	  afterDequeue: doNothing,
	
	  /**
	   * Called sync after a stream's first thread release.
	   */
	  afterStreamStart: doNothing,
	
	  /**
	   * Called after writing buffered document.write calls.
	   */
	  afterWrite: doNothing,
	
	  /**
	   * Allows disabling the autoFix feature of prescribe
	   */
	  autoFix: true,
	
	  /**
	   * Called immediately before adding to the write queue.
	   */
	  beforeEnqueue: doNothing,
	
	  /**
	   * Called before writing a token.
	   *
	   * @param {Object} tok The token
	   */
	  beforeWriteToken: function beforeWriteToken(tok) {
	    return tok;
	  },
	
	  /**
	   * Called before writing buffered document.write calls.
	   *
	   * @param {String} str The string
	   */
	  beforeWrite: function beforeWrite(str) {
	    return str;
	  },
	
	  /**
	   * Called when evaluation is finished.
	   */
	  done: doNothing,
	
	  /**
	   * Called when a write results in an error.
	   *
	   * @param {Error} e The error
	   */
	  error: function error(e) {
	    throw new Error(e.msg);
	  },
	
	
	  /**
	   * Whether to let scripts w/ async attribute set fall out of the queue.
	   */
	  releaseAsync: false
	};
	
	var nextId = 0;
	var queue = [];
	var active = null;
	
	function nextStream() {
	  var args = queue.shift();
	  if (args) {
	    var options = utils.last(args);
	
	    options.afterDequeue();
	    args.stream = runStream.apply(undefined, args);
	    options.afterStreamStart();
	  }
	}
	
	function runStream(el, html, options) {
	  active = new _writeStream2['default'](el, options);
	
	  // Identify this stream.
	  active.id = nextId++;
	  active.name = options.name || active.id;
	  postscribe.streams[active.name] = active;
	
	  // Override document.write.
	  var doc = el.ownerDocument;
	
	  var stash = {
	    close: doc.close,
	    open: doc.open,
	    write: doc.write,
	    writeln: doc.writeln
	  };
	
	  function _write(str) {
	    str = options.beforeWrite(str);
	    active.write(str);
	    options.afterWrite(str);
	  }
	
	  _extends(doc, {
	    close: doNothing,
	    open: doNothing,
	    write: function write() {
	      for (var _len = arguments.length, str = Array(_len), _key = 0; _key < _len; _key++) {
	        str[_key] = arguments[_key];
	      }
	
	      return _write(str.join(''));
	    },
	    writeln: function writeln() {
	      for (var _len2 = arguments.length, str = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        str[_key2] = arguments[_key2];
	      }
	
	      return _write(str.join('') + '\n');
	    }
	  });
	
	  // Override window.onerror
	  var oldOnError = active.win.onerror || doNothing;
	
	  // This works together with the try/catch around WriteStream::insertScript
	  // In modern browsers, exceptions in tag scripts go directly to top level
	  active.win.onerror = function (msg, url, line) {
	    options.error({ msg: msg + ' - ' + url + ': ' + line });
	    oldOnError.apply(active.win, [msg, url, line]);
	  };
	
	  // Write to the stream
	  active.write(html, function () {
	    // restore document.write
	    _extends(doc, stash);
	
	    // restore window.onerror
	    active.win.onerror = oldOnError;
	
	    options.done();
	    active = null;
	    nextStream();
	  });
	
	  return active;
	}
	
	function postscribe(el, html, options) {
	  if (utils.isFunction(options)) {
	    options = { done: options };
	  } else if (options === 'clear') {
	    queue = [];
	    active = null;
	    nextId = 0;
	    return;
	  }
	
	  options = utils.defaults(options, OPTIONS);
	
	  // id selector
	  if (/^#/.test(el)) {
	    el = window.document.getElementById(el.substr(1));
	  } else {
	    el = el.jquery ? el[0] : el;
	  }
	
	  var args = [el, html, options];
	
	  el.postscribe = {
	    cancel: function cancel() {
	      if (args.stream) {
	        args.stream.abort();
	      } else {
	        args[1] = doNothing;
	      }
	    }
	  };
	
	  options.beforeEnqueue(args);
	  queue.push(args);
	
	  if (!active) {
	    nextStream();
	  }
	
	  return el.postscribe;
	}
	
	_extends(postscribe, {
	  // Streams by name.
	  streams: {},
	  // Queue of streams.
	  queue: queue,
	  // Expose internal classes.
	  WriteStream: _writeStream2['default']
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _prescribe = __webpack_require__(3);
	
	var _prescribe2 = _interopRequireDefault(_prescribe);
	
	var _utils = __webpack_require__(4);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Turn on to debug how each chunk affected the DOM.
	 * @type {boolean}
	 */
	var DEBUG_CHUNK = false;
	
	/**
	 * Prefix for data attributes on DOM elements.
	 * @type {string}
	 */
	var BASEATTR = 'data-ps-';
	
	/**
	 * ID for the style proxy
	 * @type {string}
	 */
	var PROXY_STYLE = 'ps-style';
	
	/**
	 * ID for the script proxy
	 * @type {string}
	 */
	var PROXY_SCRIPT = 'ps-script';
	
	/**
	 * Get data attributes
	 *
	 * @param {Object} el The DOM element.
	 * @param {String} name The attribute name.
	 * @returns {String}
	 */
	function getData(el, name) {
	  var attr = BASEATTR + name;
	
	  var val = el.getAttribute(attr);
	
	  // IE 8 returns a number if it's a number
	  return !utils.existy(val) ? val : String(val);
	}
	
	/**
	 * Set data attributes
	 *
	 * @param {Object} el The DOM element.
	 * @param {String} name The attribute name.
	 * @param {null|*} value The attribute value.
	 */
	function setData(el, name) {
	  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	  var attr = BASEATTR + name;
	
	  if (utils.existy(value) && value !== '') {
	    el.setAttribute(attr, value);
	  } else {
	    el.removeAttribute(attr);
	  }
	}
	
	/**
	 * Stream static html to an element, where "static html" denotes "html
	 * without scripts".
	 *
	 * This class maintains a *history of writes devoid of any attributes* or
	 * "proxy history".
	 *
	 * Injecting the proxy history into a temporary div has no side-effects,
	 * other than to create proxy elements for previously written elements.
	 *
	 * Given the `staticHtml` of a new write, a `tempDiv`'s innerHTML is set to
	 * `proxy_history + staticHtml`.
	 * The *structure* of `tempDiv`'s contents, (i.e., the placement of new nodes
	 * beside or inside of proxy elements), reflects the DOM structure that would
	 * have resulted if all writes had been squashed into a single write.
	 *
	 * For each descendent `node` of `tempDiv` whose parentNode is a *proxy*,
	 * `node` is appended to the corresponding *real* element within the DOM.
	 *
	 * Proxy elements are mapped to *actual* elements in the DOM by injecting a
	 * `data-id` attribute into each start tag in `staticHtml`.
	 *
	 */
	
	var WriteStream = function () {
	  /**
	   * Constructor.
	   *
	   * @param {Object} root The root element
	   * @param {?Object} options The options
	   */
	  function WriteStream(root) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, WriteStream);
	
	    this.root = root;
	    this.options = options;
	    this.doc = root.ownerDocument;
	    this.win = this.doc.defaultView || this.doc.parentWindow;
	    this.parser = new _prescribe2['default']('', { autoFix: options.autoFix });
	
	    // Actual elements by id.
	    this.actuals = [root];
	
	    // Embodies the "structure" of what's been written so far,
	    // devoid of attributes.
	    this.proxyHistory = '';
	
	    // Create a proxy of the root element.
	    this.proxyRoot = this.doc.createElement(root.nodeName);
	
	    this.scriptStack = [];
	    this.writeQueue = [];
	
	    setData(this.proxyRoot, 'proxyof', 0);
	  }
	
	  /**
	   * Writes the given strings.
	   *
	   * @param {...String} str The strings to write
	   */
	
	
	  WriteStream.prototype.write = function write() {
	    var _writeQueue;
	
	    (_writeQueue = this.writeQueue).push.apply(_writeQueue, arguments);
	
	    // Process writes
	    // When new script gets pushed or pending this will stop
	    // because new writeQueue gets pushed
	    while (!this.deferredRemote && this.writeQueue.length) {
	      var arg = this.writeQueue.shift();
	
	      if (utils.isFunction(arg)) {
	        this._callFunction(arg);
	      } else {
	        this._writeImpl(arg);
	      }
	    }
	  };
	
	  /**
	   * Calls the given function.
	   *
	   * @param {Function} fn The function to call
	   * @private
	   */
	
	
	  WriteStream.prototype._callFunction = function _callFunction(fn) {
	    var tok = { type: 'function', value: fn.name || fn.toString() };
	    this._onScriptStart(tok);
	    fn.call(this.win, this.doc);
	    this._onScriptDone(tok);
	  };
	
	  /**
	   * The write implementation
	   *
	   * @param {String} html The HTML to write.
	   * @private
	   */
	
	
	  WriteStream.prototype._writeImpl = function _writeImpl(html) {
	    this.parser.append(html);
	
	    var tok = void 0;
	    var script = void 0;
	    var style = void 0;
	    var tokens = [];
	
	    // stop if we see a script token
	    while ((tok = this.parser.readToken()) && !(script = utils.isScript(tok)) && !(style = utils.isStyle(tok))) {
	      tok = this.options.beforeWriteToken(tok);
	
	      if (tok) {
	        tokens.push(tok);
	      }
	    }
	
	    if (tokens.length > 0) {
	      this._writeStaticTokens(tokens);
	    }
	
	    if (script) {
	      this._handleScriptToken(tok);
	    }
	
	    if (style) {
	      this._handleStyleToken(tok);
	    }
	  };
	
	  /**
	   * Write contiguous non-script tokens (a chunk)
	   *
	   * @param {Array<Object>} tokens The tokens
	   * @returns {{tokens, raw, actual, proxy}|null}
	   * @private
	   */
	
	
	  WriteStream.prototype._writeStaticTokens = function _writeStaticTokens(tokens) {
	    var chunk = this._buildChunk(tokens);
	
	    if (!chunk.actual) {
	      // e.g., no tokens, or a noscript that got ignored
	      return null;
	    }
	
	    chunk.html = this.proxyHistory + chunk.actual;
	    this.proxyHistory += chunk.proxy;
	    this.proxyRoot.innerHTML = chunk.html;
	
	    if (DEBUG_CHUNK) {
	      chunk.proxyInnerHTML = this.proxyRoot.innerHTML;
	    }
	
	    this._walkChunk();
	
	    if (DEBUG_CHUNK) {
	      chunk.actualInnerHTML = this.root.innerHTML;
	    }
	
	    return chunk;
	  };
	
	  /**
	   * Build a chunk.
	   *
	   * @param {Array<Object>} tokens The tokens to use.
	   * @returns {{tokens: *, raw: string, actual: string, proxy: string}}
	   * @private
	   */
	
	
	  WriteStream.prototype._buildChunk = function _buildChunk(tokens) {
	    var nextId = this.actuals.length;
	
	    // The raw html of this chunk.
	    var raw = [];
	
	    // The html to create the nodes in the tokens (with id's injected).
	    var actual = [];
	
	    // Html that can later be used to proxy the nodes in the tokens.
	    var proxy = [];
	
	    var len = tokens.length;
	    for (var i = 0; i < len; i++) {
	      var tok = tokens[i];
	      var tokenRaw = tok.toString();
	
	      raw.push(tokenRaw);
	
	      if (tok.attrs) {
	        // tok.attrs <==> startTag or atomicTag or cursor
	        // Ignore noscript tags. They are atomic, so we don't have to worry about children.
	        if (!/^noscript$/i.test(tok.tagName)) {
	          var id = nextId++;
	
	          // Actual: inject id attribute: replace '>' at end of start tag with id attribute + '>'
	          actual.push(tokenRaw.replace(/(\/?>)/, ' ' + BASEATTR + 'id=' + id + ' $1'));
	
	          // Don't proxy scripts: they have no bearing on DOM structure.
	          if (tok.attrs.id !== PROXY_SCRIPT && tok.attrs.id !== PROXY_STYLE) {
	            // Proxy: strip all attributes and inject proxyof attribute
	            proxy.push(
	            // ignore atomic tags (e.g., style): they have no "structural" effect
	            tok.type === 'atomicTag' ? '' : '<' + tok.tagName + ' ' + BASEATTR + 'proxyof=' + id + (tok.unary ? ' />' : '>'));
	          }
	        }
	      } else {
	        // Visit any other type of token
	        // Actual: append.
	        actual.push(tokenRaw);
	
	        // Proxy: append endTags. Ignore everything else.
	        proxy.push(tok.type === 'endTag' ? tokenRaw : '');
	      }
	    }
	
	    return {
	      tokens: tokens,
	      raw: raw.join(''),
	      actual: actual.join(''),
	      proxy: proxy.join('')
	    };
	  };
	
	  /**
	   * Walk the chunks.
	   *
	   * @private
	   */
	
	
	  WriteStream.prototype._walkChunk = function _walkChunk() {
	    var node = void 0;
	    var stack = [this.proxyRoot];
	
	    // use shift/unshift so that children are walked in document order
	    while (utils.existy(node = stack.shift())) {
	      var isElement = node.nodeType === 1;
	      var isProxy = isElement && getData(node, 'proxyof');
	
	      // Ignore proxies
	      if (!isProxy) {
	        if (isElement) {
	          // New actual element: register it and remove the the id attr.
	          this.actuals[getData(node, 'id')] = node;
	          setData(node, 'id');
	        }
	
	        // Is node's parent a proxy?
	        var parentIsProxyOf = node.parentNode && getData(node.parentNode, 'proxyof');
	        if (parentIsProxyOf) {
	          // Move node under actual parent.
	          this.actuals[parentIsProxyOf].appendChild(node);
	        }
	      }
	
	      // prepend childNodes to stack
	      stack.unshift.apply(stack, utils.toArray(node.childNodes));
	    }
	  };
	
	  /**
	   * Handles Script tokens
	   *
	   * @param {Object} tok The token
	   */
	
	
	  WriteStream.prototype._handleScriptToken = function _handleScriptToken(tok) {
	    var _this = this;
	
	    var remainder = this.parser.clear();
	
	    if (remainder) {
	      // Write remainder immediately behind this script.
	      this.writeQueue.unshift(remainder);
	    }
	
	    tok.src = tok.attrs.src || tok.attrs.SRC;
	
	    tok = this.options.beforeWriteToken(tok);
	    if (!tok) {
	      // User has removed this token
	      return;
	    }
	
	    if (tok.src && this.scriptStack.length) {
	      // Defer this script until scriptStack is empty.
	      // Assumption 1: This script will not start executing until
	      // scriptStack is empty.
	      this.deferredRemote = tok;
	    } else {
	      this._onScriptStart(tok);
	    }
	
	    // Put the script node in the DOM.
	    this._writeScriptToken(tok, function () {
	      _this._onScriptDone(tok);
	    });
	  };
	
	  /**
	   * Handles style tokens
	   *
	   * @param {Object} tok The token
	   */
	
	
	  WriteStream.prototype._handleStyleToken = function _handleStyleToken(tok) {
	    var remainder = this.parser.clear();
	
	    if (remainder) {
	      // Write remainder immediately behind this style.
	      this.writeQueue.unshift(remainder);
	    }
	
	    tok.type = tok.attrs.type || tok.attrs.TYPE || 'text/css';
	
	    tok = this.options.beforeWriteToken(tok);
	
	    if (tok) {
	      // Put the style node in the DOM.
	      this._writeStyleToken(tok);
	    }
	
	    if (remainder) {
	      this.write();
	    }
	  };
	
	  /**
	   * Build a style and insert it into the DOM.
	   *
	   * @param {Object} tok The token
	   */
	
	
	  WriteStream.prototype._writeStyleToken = function _writeStyleToken(tok) {
	    var el = this._buildStyle(tok);
	
	    this._insertCursor(el, PROXY_STYLE);
	
	    // Set content
	    if (tok.content) {
	      if (el.styleSheet && !el.sheet) {
	        el.styleSheet.cssText = tok.content;
	      } else {
	        el.appendChild(this.doc.createTextNode(tok.content));
	      }
	    }
	  };
	
	  /**
	   * Build a style element from an atomic style token.
	   *
	   * @param {Object} tok The token
	   * @returns {Element}
	   */
	
	
	  WriteStream.prototype._buildStyle = function _buildStyle(tok) {
	    var el = this.doc.createElement(tok.tagName);
	
	    el.setAttribute('type', tok.type);
	
	    // Set attributes
	    utils.eachKey(tok.attrs, function (name, value) {
	      el.setAttribute(name, value);
	    });
	
	    return el;
	  };
	
	  /**
	   * Append a span to the stream. That span will act as a cursor
	   * (i.e. insertion point) for the element.
	   *
	   * @param {Object} el The element
	   * @param {string} which The type of proxy element
	   */
	
	
	  WriteStream.prototype._insertCursor = function _insertCursor(el, which) {
	    this._writeImpl('<span id="' + which + '"/>');
	
	    var cursor = this.doc.getElementById(which);
	
	    if (cursor) {
	      cursor.parentNode.replaceChild(el, cursor);
	    }
	  };
	
	  /**
	   * Called when a script is started.
	   *
	   * @param {Object} tok The token
	   * @private
	   */
	
	
	  WriteStream.prototype._onScriptStart = function _onScriptStart(tok) {
	    tok.outerWrites = this.writeQueue;
	    this.writeQueue = [];
	    this.scriptStack.unshift(tok);
	  };
	
	  /**
	   * Called when a script is done.
	   *
	   * @param {Object} tok The token
	   * @private
	   */
	
	
	  WriteStream.prototype._onScriptDone = function _onScriptDone(tok) {
	    // Pop script and check nesting.
	    if (tok !== this.scriptStack[0]) {
	      this.options.error({ msg: 'Bad script nesting or script finished twice' });
	      return;
	    }
	
	    this.scriptStack.shift();
	
	    // Append outer writes to queue and process them.
	    this.write.apply(this, tok.outerWrites);
	
	    // Check for pending remote
	
	    // Assumption 2: if remote_script1 writes remote_script2 then
	    // the we notice remote_script1 finishes before remote_script2 starts.
	    // I think this is equivalent to assumption 1
	    if (!this.scriptStack.length && this.deferredRemote) {
	      this._onScriptStart(this.deferredRemote);
	      this.deferredRemote = null;
	    }
	  };
	
	  /**
	   * Build a script and insert it into the DOM.
	   * Done is called once script has executed.
	   *
	   * @param {Object} tok The token
	   * @param {Function} done The callback when complete
	   */
	
	
	  WriteStream.prototype._writeScriptToken = function _writeScriptToken(tok, done) {
	    var el = this._buildScript(tok);
	    var asyncRelease = this._shouldRelease(el);
	    var afterAsync = this.options.afterAsync;
	
	    if (tok.src) {
	      // Fix for attribute "SRC" (capitalized). IE does not recognize it.
	      el.src = tok.src;
	      this._scriptLoadHandler(el, !asyncRelease ? function () {
	        done();
	        afterAsync();
	      } : afterAsync);
	    }
	
	    try {
	      this._insertCursor(el, PROXY_SCRIPT);
	      if (!el.src || asyncRelease) {
	        done();
	      }
	    } catch (e) {
	      this.options.error(e);
	      done();
	    }
	  };
	
	  /**
	   * Build a script element from an atomic script token.
	   *
	   * @param {Object} tok The token
	   * @returns {Element}
	   */
	
	
	  WriteStream.prototype._buildScript = function _buildScript(tok) {
	    var el = this.doc.createElement(tok.tagName);
	
	    // Set attributes
	    utils.eachKey(tok.attrs, function (name, value) {
	      el.setAttribute(name, value);
	    });
	
	    // Set content
	    if (tok.content) {
	      el.text = tok.content;
	    }
	
	    return el;
	  };
	
	  /**
	   * Setup the script load handler on an element.
	   *
	   * @param {Object} el The element
	   * @param {Function} done The callback
	   * @private
	   */
	
	
	  WriteStream.prototype._scriptLoadHandler = function _scriptLoadHandler(el, done) {
	    function cleanup() {
	      el = el.onload = el.onreadystatechange = el.onerror = null;
	    }
	
	    var error = this.options.error;
	
	    function success() {
	      cleanup();
	      if (done != null) {
	        done();
	      }
	      done = null;
	    }
	
	    function failure(err) {
	      cleanup();
	      error(err);
	      if (done != null) {
	        done();
	      }
	      done = null;
	    }
	
	    function reattachEventListener(el, evt) {
	      var handler = el['on' + evt];
	      if (handler != null) {
	        el['_on' + evt] = handler;
	      }
	    }
	
	    reattachEventListener(el, 'load');
	    reattachEventListener(el, 'error');
	
	    _extends(el, {
	      onload: function onload() {
	        if (el._onload) {
	          try {
	            el._onload.apply(this, Array.prototype.slice.call(arguments, 0));
	          } catch (err) {
	            failure({ msg: 'onload handler failed ' + err + ' @ ' + el.src });
	          }
	        }
	        success();
	      },
	      onerror: function onerror() {
	        if (el._onerror) {
	          try {
	            el._onerror.apply(this, Array.prototype.slice.call(arguments, 0));
	          } catch (err) {
	            failure({ msg: 'onerror handler failed ' + err + ' @ ' + el.src });
	            return;
	          }
	        }
	        failure({ msg: 'remote script failed ' + el.src });
	      },
	      onreadystatechange: function onreadystatechange() {
	        if (/^(loaded|complete)$/.test(el.readyState)) {
	          success();
	        }
	      }
	    });
	  };
	
	  /**
	   * Determines whether to release.
	   *
	   * @param {Object} el The element
	   * @returns {boolean}
	   * @private
	   */
	
	
	  WriteStream.prototype._shouldRelease = function _shouldRelease(el) {
	    var isScript = /^script$/i.test(el.nodeName);
	    return !isScript || !!(this.options.releaseAsync && el.src && el.hasAttribute('async'));
	  };
	
	  return WriteStream;
	}();
	
	exports['default'] = WriteStream;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file prescribe
	 * @description Tiny, forgiving HTML parser
	 * @version vundefined
	 * @see {@link https://github.com/krux/prescribe/}
	 * @license MIT
	 * @author Derek Brans
	 * @copyright 2016 Krux Digital, Inc
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else {}
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _HtmlParser = __webpack_require__(1);
	
		var _HtmlParser2 = _interopRequireDefault(_HtmlParser);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		module.exports = _HtmlParser2['default'];
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
	
		var _supports = __webpack_require__(2);
	
		var supports = _interopRequireWildcard(_supports);
	
		var _streamReaders = __webpack_require__(3);
	
		var streamReaders = _interopRequireWildcard(_streamReaders);
	
		var _fixedReadTokenFactory = __webpack_require__(6);
	
		var _fixedReadTokenFactory2 = _interopRequireDefault(_fixedReadTokenFactory);
	
		var _utils = __webpack_require__(5);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		/**
		 * Detection regular expressions.
		 *
		 * Order of detection matters: detection of one can only
		 * succeed if detection of previous didn't
	
		 * @type {Object}
		 */
		var detect = {
		  comment: /^<!--/,
		  endTag: /^<\//,
		  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
		  startTag: /^</,
		  chars: /^[^<]/
		};
	
		/**
		 * HtmlParser provides the capability to parse HTML and return tokens
		 * representing the tags and content.
		 */
	
		var HtmlParser = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} stream The initial parse stream contents.
		   * @param {Object} options The options
		   * @param {boolean} options.autoFix Set to true to automatically fix errors
		   */
		  function HtmlParser() {
		    var _this = this;
	
		    var stream = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
		    _classCallCheck(this, HtmlParser);
	
		    this.stream = stream;
	
		    var fix = false;
		    var fixedTokenOptions = {};
	
		    for (var key in supports) {
		      if (supports.hasOwnProperty(key)) {
		        if (options.autoFix) {
		          fixedTokenOptions[key + 'Fix'] = true; // !supports[key];
		        }
		        fix = fix || fixedTokenOptions[key + 'Fix'];
		      }
		    }
	
		    if (fix) {
		      this._readToken = (0, _fixedReadTokenFactory2['default'])(this, fixedTokenOptions, function () {
		        return _this._readTokenImpl();
		      });
		      this._peekToken = (0, _fixedReadTokenFactory2['default'])(this, fixedTokenOptions, function () {
		        return _this._peekTokenImpl();
		      });
		    } else {
		      this._readToken = this._readTokenImpl;
		      this._peekToken = this._peekTokenImpl;
		    }
		  }
	
		  /**
		   * Appends the given string to the parse stream.
		   *
		   * @param {string} str The string to append
		   */
	
	
		  HtmlParser.prototype.append = function append(str) {
		    this.stream += str;
		  };
	
		  /**
		   * Prepends the given string to the parse stream.
		   *
		   * @param {string} str The string to prepend
		   */
	
	
		  HtmlParser.prototype.prepend = function prepend(str) {
		    this.stream = str + this.stream;
		  };
	
		  /**
		   * The implementation of the token reading.
		   *
		   * @private
		   * @returns {?Token}
		   */
	
	
		  HtmlParser.prototype._readTokenImpl = function _readTokenImpl() {
		    var token = this._peekTokenImpl();
		    if (token) {
		      this.stream = this.stream.slice(token.length);
		      return token;
		    }
		  };
	
		  /**
		   * The implementation of token peeking.
		   *
		   * @returns {?Token}
		   */
	
	
		  HtmlParser.prototype._peekTokenImpl = function _peekTokenImpl() {
		    for (var type in detect) {
		      if (detect.hasOwnProperty(type)) {
		        if (detect[type].test(this.stream)) {
		          var token = streamReaders[type](this.stream);
	
		          if (token) {
		            if (token.type === 'startTag' && /script|style/i.test(token.tagName)) {
		              return null;
		            } else {
		              token.text = this.stream.substr(0, token.length);
		              return token;
		            }
		          }
		        }
		      }
		    }
		  };
	
		  /**
		   * The public token peeking interface.  Delegates to the basic token peeking
		   * or a version that performs fixups depending on the `autoFix` setting in
		   * options.
		   *
		   * @returns {object}
		   */
	
	
		  HtmlParser.prototype.peekToken = function peekToken() {
		    return this._peekToken();
		  };
	
		  /**
		   * The public token reading interface.  Delegates to the basic token reading
		   * or a version that performs fixups depending on the `autoFix` setting in
		   * options.
		   *
		   * @returns {object}
		   */
	
	
		  HtmlParser.prototype.readToken = function readToken() {
		    return this._readToken();
		  };
	
		  /**
		   * Read tokens and hand to the given handlers.
		   *
		   * @param {Object} handlers The handlers to use for the different tokens.
		   */
	
	
		  HtmlParser.prototype.readTokens = function readTokens(handlers) {
		    var tok = void 0;
		    while (tok = this.readToken()) {
		      // continue until we get an explicit "false" return
		      if (handlers[tok.type] && handlers[tok.type](tok) === false) {
		        return;
		      }
		    }
		  };
	
		  /**
		   * Clears the parse stream.
		   *
		   * @returns {string} The contents of the parse stream before clearing.
		   */
	
	
		  HtmlParser.prototype.clear = function clear() {
		    var rest = this.stream;
		    this.stream = '';
		    return rest;
		  };
	
		  /**
		   * Returns the rest of the parse stream.
		   *
		   * @returns {string} The contents of the parse stream.
		   */
	
	
		  HtmlParser.prototype.rest = function rest() {
		    return this.stream;
		  };
	
		  return HtmlParser;
		}();
	
		exports['default'] = HtmlParser;
	
	
		HtmlParser.tokenToString = function (tok) {
		  return tok.toString();
		};
	
		HtmlParser.escapeAttributes = function (attrs) {
		  var escapedAttrs = {};
	
		  for (var name in attrs) {
		    if (attrs.hasOwnProperty(name)) {
		      escapedAttrs[name] = (0, _utils.escapeQuotes)(attrs[name], null);
		    }
		  }
	
		  return escapedAttrs;
		};
	
		HtmlParser.supports = supports;
	
		for (var key in supports) {
		  if (supports.hasOwnProperty(key)) {
		    HtmlParser.browserHasFlaw = HtmlParser.browserHasFlaw || !supports[key] && key;
		  }
		}
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
		var tagSoup = false;
		var selfClose = false;
	
		var work = window.document.createElement('div');
	
		try {
		  var html = '<P><I></P></I>';
		  work.innerHTML = html;
		  exports.tagSoup = tagSoup = work.innerHTML !== html;
		} catch (e) {
		  exports.tagSoup = tagSoup = false;
		}
	
		try {
		  work.innerHTML = '<P><i><P></P></i></P>';
		  exports.selfClose = selfClose = work.childNodes.length === 2;
		} catch (e) {
		  exports.selfClose = selfClose = false;
		}
	
		work = null;
	
		exports.tagSoup = tagSoup;
		exports.selfClose = selfClose;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
	
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
		exports.comment = comment;
		exports.chars = chars;
		exports.startTag = startTag;
		exports.atomicTag = atomicTag;
		exports.endTag = endTag;
	
		var _tokens = __webpack_require__(4);
	
		/**
		 * Regular Expressions for parsing tags and attributes
		 *
		 * @type {Object}
		 */
		var REGEXES = {
		  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
		  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
		  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
		  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i
		};
	
		/**
		 * Reads a comment token
		 *
		 * @param {string} stream The input stream
		 * @returns {CommentToken}
		 */
		function comment(stream) {
		  var index = stream.indexOf('-->');
		  if (index >= 0) {
		    return new _tokens.CommentToken(stream.substr(4, index - 1), index + 3);
		  }
		}
	
		/**
		 * Reads non-tag characters.
		 *
		 * @param {string} stream The input stream
		 * @returns {CharsToken}
		 */
		function chars(stream) {
		  var index = stream.indexOf('<');
		  return new _tokens.CharsToken(index >= 0 ? index : stream.length);
		}
	
		/**
		 * Reads start tag token.
		 *
		 * @param {string} stream The input stream
		 * @returns {StartTagToken}
		 */
		function startTag(stream) {
		  var endTagIndex = stream.indexOf('>');
		  if (endTagIndex !== -1) {
		    var match = stream.match(REGEXES.startTag);
		    if (match) {
		      var _ret = function () {
		        var attrs = {};
		        var booleanAttrs = {};
		        var rest = match[2];
	
		        match[2].replace(REGEXES.attr, function (match, name) {
		          if (!(arguments[2] || arguments[3] || arguments[4] || arguments[5])) {
		            attrs[name] = '';
		          } else if (arguments[5]) {
		            attrs[arguments[5]] = '';
		            booleanAttrs[arguments[5]] = true;
		          } else {
		            attrs[name] = arguments[2] || arguments[3] || arguments[4] || REGEXES.fillAttr.test(name) && name || '';
		          }
	
		          rest = rest.replace(match, '');
		        });
	
		        return {
		          v: new _tokens.StartTagToken(match[1], match[0].length, attrs, booleanAttrs, !!match[3], rest.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
		        };
		      }();
	
		      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
		    }
		  }
		}
	
		/**
		 * Reads atomic tag token.
		 *
		 * @param {string} stream The input stream
		 * @returns {AtomicTagToken}
		 */
		function atomicTag(stream) {
		  var start = startTag(stream);
		  if (start) {
		    var rest = stream.slice(start.length);
		    // for optimization, we check first just for the end tag
		    if (rest.match(new RegExp('<\/\\s*' + start.tagName + '\\s*>', 'i'))) {
		      // capturing the content is inefficient, so we do it inside the if
		      var match = rest.match(new RegExp('([\\s\\S]*?)<\/\\s*' + start.tagName + '\\s*>', 'i'));
		      if (match) {
		        return new _tokens.AtomicTagToken(start.tagName, match[0].length + start.length, start.attrs, start.booleanAttrs, match[1]);
		      }
		    }
		  }
		}
	
		/**
		 * Reads an end tag token.
		 *
		 * @param {string} stream The input stream
		 * @returns {EndTagToken}
		 */
		function endTag(stream) {
		  var match = stream.match(REGEXES.endTag);
		  if (match) {
		    return new _tokens.EndTagToken(match[1], match[0].length);
		  }
		}
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
		exports.EndTagToken = exports.AtomicTagToken = exports.StartTagToken = exports.TagToken = exports.CharsToken = exports.CommentToken = exports.Token = undefined;
	
		var _utils = __webpack_require__(5);
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		/**
		 * Token is a base class for all token types parsed.  Note we don't actually
		 * use intheritance due to IE8's non-existent ES5 support.
		 */
		var Token =
		/**
		 * Constructor.
		 *
		 * @param {string} type The type of the Token.
		 * @param {Number} length The length of the Token text.
		 */
		exports.Token = function Token(type, length) {
		  _classCallCheck(this, Token);
	
		  this.type = type;
		  this.length = length;
		  this.text = '';
		};
	
		/**
		 * CommentToken represents comment tags.
		 */
	
	
		var CommentToken = exports.CommentToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} content The content of the comment
		   * @param {Number} length The length of the Token text.
		   */
		  function CommentToken(content, length) {
		    _classCallCheck(this, CommentToken);
	
		    this.type = 'comment';
		    this.length = length || (content ? content.length : 0);
		    this.text = '';
		    this.content = content;
		  }
	
		  CommentToken.prototype.toString = function toString() {
		    return '<!--' + this.content;
		  };
	
		  return CommentToken;
		}();
	
		/**
		 * CharsToken represents non-tag characters.
		 */
	
	
		var CharsToken = exports.CharsToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {Number} length The length of the Token text.
		   */
		  function CharsToken(length) {
		    _classCallCheck(this, CharsToken);
	
		    this.type = 'chars';
		    this.length = length;
		    this.text = '';
		  }
	
		  CharsToken.prototype.toString = function toString() {
		    return this.text;
		  };
	
		  return CharsToken;
		}();
	
		/**
		 * TagToken is a base class for all tag-based Tokens.
		 */
	
	
		var TagToken = exports.TagToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} type The type of the token.
		   * @param {string} tagName The tag name.
		   * @param {Number} length The length of the Token text.
		   * @param {Object} attrs The dictionary of attributes and values
		   * @param {Object} booleanAttrs If an entry has 'true' then the attribute
		   *                              is a boolean attribute
		   */
		  function TagToken(type, tagName, length, attrs, booleanAttrs) {
		    _classCallCheck(this, TagToken);
	
		    this.type = type;
		    this.length = length;
		    this.text = '';
		    this.tagName = tagName;
		    this.attrs = attrs;
		    this.booleanAttrs = booleanAttrs;
		    this.unary = false;
		    this.html5Unary = false;
		  }
	
		  /**
		   * Formats the given token tag.
		   *
		   * @param {TagToken} tok The TagToken to format.
		   * @param {?string} [content=null] The content of the token.
		   * @returns {string} The formatted tag.
		   */
	
	
		  TagToken.formatTag = function formatTag(tok) {
		    var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
		    var str = '<' + tok.tagName;
		    for (var key in tok.attrs) {
		      if (tok.attrs.hasOwnProperty(key)) {
		        str += ' ' + key;
	
		        var val = tok.attrs[key];
		        if (typeof tok.booleanAttrs === 'undefined' || typeof tok.booleanAttrs[key] === 'undefined') {
		          str += '="' + (0, _utils.escapeQuotes)(val) + '"';
		        }
		      }
		    }
	
		    if (tok.rest) {
		      str += ' ' + tok.rest;
		    }
	
		    if (tok.unary && !tok.html5Unary) {
		      str += '/>';
		    } else {
		      str += '>';
		    }
	
		    if (content !== undefined && content !== null) {
		      str += content + '</' + tok.tagName + '>';
		    }
	
		    return str;
		  };
	
		  return TagToken;
		}();
	
		/**
		 * StartTagToken represents a start token.
		 */
	
	
		var StartTagToken = exports.StartTagToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} tagName The tag name.
		   * @param {Number} length The length of the Token text
		   * @param {Object} attrs The dictionary of attributes and values
		   * @param {Object} booleanAttrs If an entry has 'true' then the attribute
		   *                              is a boolean attribute
		   * @param {boolean} unary True if the tag is a unary tag
		   * @param {string} rest The rest of the content.
		   */
		  function StartTagToken(tagName, length, attrs, booleanAttrs, unary, rest) {
		    _classCallCheck(this, StartTagToken);
	
		    this.type = 'startTag';
		    this.length = length;
		    this.text = '';
		    this.tagName = tagName;
		    this.attrs = attrs;
		    this.booleanAttrs = booleanAttrs;
		    this.html5Unary = false;
		    this.unary = unary;
		    this.rest = rest;
		  }
	
		  StartTagToken.prototype.toString = function toString() {
		    return TagToken.formatTag(this);
		  };
	
		  return StartTagToken;
		}();
	
		/**
		 * AtomicTagToken represents an atomic tag.
		 */
	
	
		var AtomicTagToken = exports.AtomicTagToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} tagName The name of the tag.
		   * @param {Number} length The length of the tag text.
		   * @param {Object} attrs The attributes.
		   * @param {Object} booleanAttrs If an entry has 'true' then the attribute
		   *                              is a boolean attribute
		   * @param {string} content The content of the tag.
		   */
		  function AtomicTagToken(tagName, length, attrs, booleanAttrs, content) {
		    _classCallCheck(this, AtomicTagToken);
	
		    this.type = 'atomicTag';
		    this.length = length;
		    this.text = '';
		    this.tagName = tagName;
		    this.attrs = attrs;
		    this.booleanAttrs = booleanAttrs;
		    this.unary = false;
		    this.html5Unary = false;
		    this.content = content;
		  }
	
		  AtomicTagToken.prototype.toString = function toString() {
		    return TagToken.formatTag(this, this.content);
		  };
	
		  return AtomicTagToken;
		}();
	
		/**
		 * EndTagToken represents an end tag.
		 */
	
	
		var EndTagToken = exports.EndTagToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} tagName The name of the tag.
		   * @param {Number} length The length of the tag text.
		   */
		  function EndTagToken(tagName, length) {
		    _classCallCheck(this, EndTagToken);
	
		    this.type = 'endTag';
		    this.length = length;
		    this.text = '';
		    this.tagName = tagName;
		  }
	
		  EndTagToken.prototype.toString = function toString() {
		    return '</' + this.tagName + '>';
		  };
	
		  return EndTagToken;
		}();
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
		exports.escapeQuotes = escapeQuotes;
	
		/**
		 * Escape quotes in the given value.
		 *
		 * @param {string} value The value to escape.
		 * @param {string} [defaultValue=''] The default value to return if value is falsy.
		 * @returns {string}
		 */
		function escapeQuotes(value) {
		  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
		  // There's no lookback in JS, so /(^|[^\\])"/ only matches the first of two `"`s.
		  // Instead, just match anything before a double-quote and escape if it's not already escaped.
		  return !value ? defaultValue : value.replace(/([^"]*)"/g, function (_, prefix) {
		    return (/\\/.test(prefix) ? prefix + '"' : prefix + '\\"'
		    );
		  });
		}
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
		exports['default'] = fixedReadTokenFactory;
		/**
		 * Empty Elements - HTML 4.01
		 *
		 * @type {RegExp}
		 */
		var EMPTY = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i;
	
		/**
		 * Elements that you can intentionally leave open (and which close themselves)
		 *
		 * @type {RegExp}
		 */
		var CLOSESELF = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
	
		/**
		 * Corrects a token.
		 *
		 * @param {Token} tok The token to correct
		 * @returns {Token} The corrected token
		 */
		function correct(tok) {
		  if (tok && tok.type === 'startTag') {
		    tok.unary = EMPTY.test(tok.tagName) || tok.unary;
		    tok.html5Unary = !/\/>$/.test(tok.text);
		  }
		  return tok;
		}
	
		/**
		 * Peeks at the next token in the parser.
		 *
		 * @param {HtmlParser} parser The parser
		 * @param {Function} readTokenImpl The underlying readToken implementation
		 * @returns {Token} The next token
		 */
		function peekToken(parser, readTokenImpl) {
		  var tmp = parser.stream;
		  var tok = correct(readTokenImpl());
		  parser.stream = tmp;
		  return tok;
		}
	
		/**
		 * Closes the last token.
		 *
		 * @param {HtmlParser} parser The parser
		 * @param {Array<Token>} stack The stack
		 */
		function closeLast(parser, stack) {
		  var tok = stack.pop();
	
		  // prepend close tag to stream.
		  parser.prepend('</' + tok.tagName + '>');
		}
	
		/**
		 * Create a new token stack.
		 *
		 * @returns {Array<Token>}
		 */
		function newStack() {
		  var stack = [];
	
		  stack.last = function () {
		    return this[this.length - 1];
		  };
	
		  stack.lastTagNameEq = function (tagName) {
		    var last = this.last();
		    return last && last.tagName && last.tagName.toUpperCase() === tagName.toUpperCase();
		  };
	
		  stack.containsTagName = function (tagName) {
		    for (var i = 0, tok; tok = this[i]; i++) {
		      if (tok.tagName === tagName) {
		        return true;
		      }
		    }
		    return false;
		  };
	
		  return stack;
		}
	
		/**
		 * Return a readToken implementation that fixes input.
		 *
		 * @param {HtmlParser} parser The parser
		 * @param {Object} options Options for fixing
		 * @param {boolean} options.tagSoupFix True to fix tag soup scenarios
		 * @param {boolean} options.selfCloseFix True to fix self-closing tags
		 * @param {Function} readTokenImpl The underlying readToken implementation
		 * @returns {Function}
		 */
		function fixedReadTokenFactory(parser, options, readTokenImpl) {
		  var stack = newStack();
	
		  var handlers = {
		    startTag: function startTag(tok) {
		      var tagName = tok.tagName;
	
		      if (tagName.toUpperCase() === 'TR' && stack.lastTagNameEq('TABLE')) {
		        parser.prepend('<TBODY>');
		        prepareNextToken();
		      } else if (options.selfCloseFix && CLOSESELF.test(tagName) && stack.containsTagName(tagName)) {
		        if (stack.lastTagNameEq(tagName)) {
		          closeLast(parser, stack);
		        } else {
		          parser.prepend('</' + tok.tagName + '>');
		          prepareNextToken();
		        }
		      } else if (!tok.unary) {
		        stack.push(tok);
		      }
		    },
		    endTag: function endTag(tok) {
		      var last = stack.last();
		      if (last) {
		        if (options.tagSoupFix && !stack.lastTagNameEq(tok.tagName)) {
		          // cleanup tag soup
		          closeLast(parser, stack);
		        } else {
		          stack.pop();
		        }
		      } else if (options.tagSoupFix) {
		        // cleanup tag soup part 2: skip this token
		        readTokenImpl();
		        prepareNextToken();
		      }
		    }
		  };
	
		  function prepareNextToken() {
		    var tok = peekToken(parser, readTokenImpl);
		    if (tok && handlers[tok.type]) {
		      handlers[tok.type](tok);
		    }
		  }
	
		  return function fixedReadToken() {
		    prepareNextToken();
		    return correct(readTokenImpl());
		  };
		}
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.existy = existy;
	exports.isFunction = isFunction;
	exports.each = each;
	exports.eachKey = eachKey;
	exports.defaults = defaults;
	exports.toArray = toArray;
	exports.last = last;
	exports.isTag = isTag;
	exports.isScript = isScript;
	exports.isStyle = isStyle;
	/**
	 * Determine if the thing is not undefined and not null.
	 *
	 * @param {*} thing The thing to test
	 * @returns {boolean} True if the thing is not undefined and not null.
	 */
	function existy(thing) {
	  return thing !== void 0 && thing !== null;
	}
	
	/**
	 * Is this a function?
	 *
	 * @param {*} x The variable to test
	 * @returns {boolean} True if the variable is a function
	 */
	function isFunction(x) {
	  return 'function' === typeof x;
	}
	
	/**
	 * Loop over each item in an array-like value.
	 *
	 * @param {Array<*>} arr The array to loop over
	 * @param {Function} fn The function to call
	 * @param {?Object} target The object to bind to the function
	 */
	function each(arr, fn, target) {
	  var i = void 0;
	  var len = arr && arr.length || 0;
	  for (i = 0; i < len; i++) {
	    fn.call(target, arr[i], i);
	  }
	}
	
	/**
	 * Loop over each key/value pair in a hash.
	 *
	 * @param {Object} obj The object
	 * @param {Function} fn The function to call
	 * @param {?Object} target The object to bind to the function
	 */
	function eachKey(obj, fn, target) {
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      fn.call(target, key, obj[key]);
	    }
	  }
	}
	
	/**
	 * Set default options where some option was not specified.
	 *
	 * @param {Object} options The destination
	 * @param {Object} _defaults The defaults
	 * @returns {Object}
	 */
	function defaults(options, _defaults) {
	  options = options || {};
	  eachKey(_defaults, function (key, val) {
	    if (!existy(options[key])) {
	      options[key] = val;
	    }
	  });
	  return options;
	}
	
	/**
	 * Convert value (e.g., a NodeList) to an array.
	 *
	 * @param {*} obj The object
	 * @returns {Array<*>}
	 */
	function toArray(obj) {
	  try {
	    return Array.prototype.slice.call(obj);
	  } catch (e) {
	    var _ret = function () {
	      var ret = [];
	      each(obj, function (val) {
	        ret.push(val);
	      });
	      return {
	        v: ret
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	
	/**
	 * Get the last item in an array
	 *
	 * @param {Array<*>} array The array
	 * @returns {*} The last item in the array
	 */
	function last(array) {
	  return array[array.length - 1];
	}
	
	/**
	 * Test if token is a script tag.
	 *
	 * @param {Object} tok The token
	 * @param {String} tag The tag name
	 * @returns {boolean} True if the token is a script tag
	 */
	function isTag(tok, tag) {
	  return !tok || !(tok.type === 'startTag' || tok.type === 'atomicTag') || !('tagName' in tok) ? !1 : !!~tok.tagName.toLowerCase().indexOf(tag);
	}
	
	/**
	 * Test if token is a script tag.
	 *
	 * @param {Object} tok The token
	 * @returns {boolean} True if the token is a script tag
	 */
	function isScript(tok) {
	  return isTag(tok, 'script');
	}
	
	/**
	 * Test if token is a style tag.
	 *
	 * @param {Object} tok The token
	 * @returns {boolean} True if the token is a style tag
	 */
	function isStyle(tok) {
	  return isTag(tok, 'style');
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=postscribe.js.map

/***/ }),

/***/ "./node_modules/swr/esm/cache.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/cache.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/hash */ "./node_modules/swr/esm/libs/hash.js");

var Cache = /** @class */ (function () {
    function Cache(initialData) {
        if (initialData === void 0) { initialData = {}; }
        this.cache = new Map(Object.entries(initialData));
        this.subs = [];
    }
    Cache.prototype.get = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.cache.get(_key);
    };
    Cache.prototype.set = function (key, value) {
        var _key = this.serializeKey(key)[0];
        this.cache.set(_key, value);
        this.notify();
    };
    Cache.prototype.keys = function () {
        return Array.from(this.cache.keys());
    };
    Cache.prototype.has = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.cache.has(_key);
    };
    Cache.prototype.clear = function () {
        this.cache.clear();
        this.notify();
    };
    Cache.prototype.delete = function (key) {
        var _key = this.serializeKey(key)[0];
        this.cache.delete(_key);
        this.notify();
    };
    // TODO: introduce namespace for the cache
    Cache.prototype.serializeKey = function (key) {
        var args = null;
        if (typeof key === 'function') {
            try {
                key = key();
            }
            catch (err) {
                // dependencies not ready
                key = '';
            }
        }
        if (Array.isArray(key)) {
            // args array
            args = key;
            key = Object(_libs_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
        }
        else {
            // convert null to ''
            key = String(key || '');
        }
        var errorKey = key ? 'err@' + key : '';
        var isValidatingKey = key ? 'validating@' + key : '';
        return [key, args, errorKey, isValidatingKey];
    };
    Cache.prototype.subscribe = function (listener) {
        var _this = this;
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        var isSubscribed = true;
        this.subs.push(listener);
        return function () {
            if (!isSubscribed)
                return;
            isSubscribed = false;
            var index = _this.subs.indexOf(listener);
            if (index > -1) {
                _this.subs[index] = _this.subs[_this.subs.length - 1];
                _this.subs.length--;
            }
        };
    };
    // Notify Cache subscribers about a change in the cache
    Cache.prototype.notify = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    return Cache;
}());
/* harmony default export */ __webpack_exports__["default"] = (Cache);


/***/ }),

/***/ "./node_modules/swr/esm/config.js":
/*!****************************************!*\
  !*** ./node_modules/swr/esm/config.js ***!
  \****************************************/
/*! exports provided: cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var dequal_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dequal/lite */ "./node_modules/dequal/lite/index.mjs");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./node_modules/swr/esm/cache.js");
/* harmony import */ var _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/web-preset */ "./node_modules/swr/esm/libs/web-preset.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// cache
var cache = new _cache__WEBPACK_IMPORTED_MODULE_1__["default"]();
// error retry
function onErrorRetry(_, __, config, revalidate, opts) {
    if (!config.isDocumentVisible()) {
        // if it's hidden, stop
        // it will auto revalidate when focus
        return;
    }
    if (typeof config.errorRetryCount === 'number' &&
        opts.retryCount > config.errorRetryCount) {
        return;
    }
    // exponential backoff
    var count = Math.min(opts.retryCount, 8);
    var timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
    setTimeout(revalidate, timeout, opts);
}
// client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)
var slowConnection = typeof window !== 'undefined' &&
    // @ts-ignore
    navigator['connection'] &&
    // @ts-ignore
    ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1;
// config
var defaultConfig = __assign({ 
    // events
    onLoadingSlow: function () { }, onSuccess: function () { }, onError: function () { }, onErrorRetry: onErrorRetry, errorRetryInterval: (slowConnection ? 10 : 5) * 1000, focusThrottleInterval: 5 * 1000, dedupingInterval: 2 * 1000, loadingTimeout: (slowConnection ? 5 : 3) * 1000, refreshInterval: 0, revalidateOnFocus: true, revalidateOnReconnect: true, refreshWhenHidden: false, refreshWhenOffline: false, shouldRetryOnError: true, suspense: false, compare: dequal_lite__WEBPACK_IMPORTED_MODULE_0__["dequal"], isPaused: function () { return false; } }, _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (defaultConfig);


/***/ }),

/***/ "./node_modules/swr/esm/env.js":
/*!*************************************!*\
  !*** ./node_modules/swr/esm/env.js ***!
  \*************************************/
/*! exports provided: IS_SERVER, rAF, useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_SERVER", function() { return IS_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rAF", function() { return rAF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var IS_SERVER = typeof window === 'undefined' ||
    // @ts-ignore
    !!(typeof Deno !== 'undefined' && Deno && Deno.version && Deno.version.deno);
// polyfill for requestAnimationFrame
var rAF = IS_SERVER
    ? null
    : window['requestAnimationFrame']
        ? function (f) { return window['requestAnimationFrame'](f); }
        : function (f) { return setTimeout(f, 1); };
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];


/***/ }),

/***/ "./node_modules/swr/esm/index.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/index.js ***!
  \***************************************/
/*! exports provided: default, trigger, mutate, SWRConfig, useSWRInfinite, cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["SWRConfig"]; });

/* harmony import */ var _use_swr_infinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-swr-infinite */ "./node_modules/swr/esm/use-swr-infinite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSWRInfinite", function() { return _use_swr_infinite__WEBPACK_IMPORTED_MODULE_1__["useSWRInfinite"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["cache"]; });

// `useSWR` and related APIs

/* harmony default export */ __webpack_exports__["default"] = (_use_swr__WEBPACK_IMPORTED_MODULE_0__["default"]);

// `useSWRInfinite`

// Cache related, to be replaced by the new APIs



/***/ }),

/***/ "./node_modules/swr/esm/libs/hash.js":
/*!*******************************************!*\
  !*** ./node_modules/swr/esm/libs/hash.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hash; });
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// hashes an array of objects and returns a string
function hash(args) {
    if (!args.length)
        return '';
    var key = 'arg';
    for (var i = 0; i < args.length; ++i) {
        if (args[i] === null) {
            key += '@null';
            continue;
        }
        var _hash = void 0;
        if (typeof args[i] !== 'object' && typeof args[i] !== 'function') {
            // need to consider the case that args[i] is a string:
            // args[i]        _hash
            // "undefined" -> '"undefined"'
            // undefined   -> 'undefined'
            // 123         -> '123'
            // "null"      -> '"null"'
            if (typeof args[i] === 'string') {
                _hash = '"' + args[i] + '"';
            }
            else {
                _hash = String(args[i]);
            }
        }
        else {
            if (!table.has(args[i])) {
                _hash = counter;
                table.set(args[i], counter++);
            }
            else {
                _hash = table.get(args[i]);
            }
        }
        key += '@' + _hash;
    }
    return key;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/web-preset.js":
/*!*************************************************!*\
  !*** ./node_modules/swr/esm/libs/web-preset.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Due to bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a work around, we always assume it's online on first load, and change
 * the status upon `online` or `offline` events.
 */
var online = true;
var isOnline = function () { return online; };
var isDocumentVisible = function () {
    if (typeof document !== 'undefined' &&
        document.visibilityState !== undefined) {
        return document.visibilityState !== 'hidden';
    }
    // always assume it's visible
    return true;
};
var fetcher = function (url) { return fetch(url).then(function (res) { return res.json(); }); };
var registerOnFocus = function (cb) {
    if (typeof window !== 'undefined' &&
        window.addEventListener !== undefined &&
        typeof document !== 'undefined' &&
        document.addEventListener !== undefined) {
        // focus revalidate
        document.addEventListener('visibilitychange', function () { return cb(); }, false);
        window.addEventListener('focus', function () { return cb(); }, false);
    }
};
var registerOnReconnect = function (cb) {
    if (typeof window !== 'undefined' && window.addEventListener !== undefined) {
        // reconnect revalidate
        window.addEventListener('online', function () {
            online = true;
            cb();
        }, false);
        // nothing to revalidate, just update the status
        window.addEventListener('offline', function () { return (online = false); }, false);
    }
};
/* harmony default export */ __webpack_exports__["default"] = ({
    isOnline: isOnline,
    isDocumentVisible: isDocumentVisible,
    fetcher: fetcher,
    registerOnFocus: registerOnFocus,
    registerOnReconnect: registerOnReconnect
});


/***/ }),

/***/ "./node_modules/swr/esm/swr-config-context.js":
/*!****************************************************!*\
  !*** ./node_modules/swr/esm/swr-config-context.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SWRConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
SWRConfigContext.displayName = 'SWRConfigContext';
/* harmony default export */ __webpack_exports__["default"] = (SWRConfigContext);


/***/ }),

/***/ "./node_modules/swr/esm/use-swr-infinite.js":
/*!**************************************************!*\
  !*** ./node_modules/swr/esm/use-swr-infinite.js ***!
  \**************************************************/
/*! exports provided: useSWRInfinite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSWRInfinite", function() { return useSWRInfinite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ "./node_modules/swr/esm/env.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// TODO: use @ts-expect-error





function useSWRInfinite() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var getKey = args[0];
    var config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"], Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_swr_config_context__WEBPACK_IMPORTED_MODULE_3__["default"]), args.length > 2
        ? args[2]
        : args.length === 2 && typeof args[1] === 'object'
            ? args[1]
            : {});
    // in typescript args.length > 2 is not same as args.lenth === 3
    // we do a safe type assertion here
    // args.length === 3
    var fn = (args.length > 2
        ? args[1]
        : args.length === 2 && typeof args[1] === 'function'
            ? args[1]
            : config.fetcher);
    var _a = config.initialSize, initialSize = _a === void 0 ? 1 : _a, _b = config.revalidateAll, revalidateAll = _b === void 0 ? false : _b, _c = config.persistSize, persistSize = _c === void 0 ? false : _c, extraConfig = __rest(config
    // get the serialized key of the first page
    , ["initialSize", "revalidateAll", "persistSize"]);
    // get the serialized key of the first page
    var firstPageKey = null;
    try {
        ;
        firstPageKey = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(getKey(0, null))[0];
    }
    catch (err) {
        // not ready
    }
    var rerender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({})[1];
    // we use cache to pass extra info (context) to fetcher so it can be globally shared
    // here we get the key of the fetcher context cache
    var contextCacheKey = null;
    if (firstPageKey) {
        contextCacheKey = 'ctx@' + firstPageKey;
    }
    // page size is also cached to share the page data between hooks having the same key
    var pageSizeCacheKey = null;
    if (firstPageKey) {
        pageSizeCacheKey = 'len@' + firstPageKey;
    }
    var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var resolvePageSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        var cachedPageSize = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageSizeCacheKey);
        return typeof cachedPageSize !== 'undefined' ? cachedPageSize : initialSize;
    }, [pageSizeCacheKey, initialSize]);
    // keep the last page size to restore it with the persistSize option
    var lastPageSizeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(resolvePageSize());
    // every time the key changes, we reset the page size if it's not persisted
    Object(_env__WEBPACK_IMPORTED_MODULE_2__["useIsomorphicLayoutEffect"])(function () {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }
        // If the key has been changed, we keep the current page size if persistSize is enabled
        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageSizeCacheKey, persistSize ? lastPageSizeRef.current : initialSize);
        // initialSize isn't allowed to change during the lifecycle
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstPageKey]);
    // keep the data inside a ref
    var dataRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    // actual swr of all pages
    var swr = Object(_use_swr__WEBPACK_IMPORTED_MODULE_4__["default"])(firstPageKey ? ['inf', firstPageKey] : null, function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, originalData, force, data, pageSize, previousPageData, i, _b, pageKey, pageArgs, pageData, shouldFetchPage;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(contextCacheKey) || {}, originalData = _a.data, force = _a.force;
                    data = [];
                    pageSize = resolvePageSize();
                    previousPageData = null;
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(i < pageSize)) return [3 /*break*/, 8];
                    _b = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(getKey(i, previousPageData)), pageKey = _b[0], pageArgs = _b[1];
                    if (!pageKey) {
                        // pageKey is falsy, stop fetching next pages
                        return [3 /*break*/, 8];
                    }
                    pageData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageKey);
                    shouldFetchPage = revalidateAll ||
                        force ||
                        typeof pageData === 'undefined' ||
                        (typeof force === 'undefined' &&
                            i === 0 &&
                            typeof dataRef.current !== 'undefined') ||
                        (originalData && !config.compare(originalData[i], pageData));
                    if (!shouldFetchPage) return [3 /*break*/, 6];
                    if (!(pageArgs !== null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fn.apply(void 0, pageArgs)];
                case 2:
                    pageData = _c.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, fn(pageKey)];
                case 4:
                    pageData = _c.sent();
                    _c.label = 5;
                case 5:
                    _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageKey, pageData);
                    _c.label = 6;
                case 6:
                    data.push(pageData);
                    previousPageData = pageData;
                    _c.label = 7;
                case 7:
                    ++i;
                    return [3 /*break*/, 1];
                case 8:
                    // once we executed the data fetching based on the context, clear the context
                    _config__WEBPACK_IMPORTED_MODULE_1__["cache"].delete(contextCacheKey);
                    // return the data
                    return [2 /*return*/, data];
            }
        });
    }); }, extraConfig);
    // update dataRef
    Object(_env__WEBPACK_IMPORTED_MODULE_2__["useIsomorphicLayoutEffect"])(function () {
        dataRef.current = swr.data;
    }, [swr.data]);
    var mutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data, shouldRevalidate) {
        if (shouldRevalidate === void 0) { shouldRevalidate = true; }
        if (shouldRevalidate && typeof data !== 'undefined') {
            // we only revalidate the pages that are changed
            var originalData = dataRef.current;
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(contextCacheKey, { data: originalData, force: false });
        }
        else if (shouldRevalidate) {
            // calling `mutate()`, we revalidate all pages
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(contextCacheKey, { force: true });
        }
        return swr.mutate(data, shouldRevalidate);
    }, 
    // swr.mutate is always the same reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [contextCacheKey]);
    // extend the SWR API
    var setSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (arg) {
        var size;
        if (typeof arg === 'function') {
            size = arg(resolvePageSize());
        }
        else if (typeof arg === 'number') {
            size = arg;
        }
        if (typeof size === 'number') {
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageSizeCacheKey, size);
            lastPageSizeRef.current = size;
        }
        rerender({});
        return mutate(function (v) { return v; });
    }, 
    // immutability of rerender is guaranteed by React, but react-hooks/exhaustive-deps doesn't recognize it
    // from `rerender = useState({})[1], so we put rerender here
    [pageSizeCacheKey, resolvePageSize, mutate, rerender]);
    // Use getter functions to avoid unnecessary re-renders caused by triggering all the getters of the returned swr object
    var swrInfinite = { size: resolvePageSize(), setSize: setSize, mutate: mutate };
    Object.defineProperties(swrInfinite, {
        error: {
            get: function () { return swr.error; },
            enumerable: true
        },
        data: {
            get: function () { return swr.data; },
            enumerable: true
        },
        // revalidate will be deprecated in the 1.x release
        // because mutate() covers the same use case of revalidate().
        // This remains only for backward compatibility
        revalidate: {
            get: function () { return swr.revalidate; },
            enumerable: true
        },
        isValidating: {
            get: function () { return swr.isValidating; },
            enumerable: true
        }
    });
    return swrInfinite;
}



/***/ }),

/***/ "./node_modules/swr/esm/use-swr.js":
/*!*****************************************!*\
  !*** ./node_modules/swr/esm/use-swr.js ***!
  \*****************************************/
/*! exports provided: trigger, mutate, SWRConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return mutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return SWRConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ "./node_modules/swr/esm/env.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// TODO: use @ts-expect-error




// global state managers
var CONCURRENT_PROMISES = {};
var CONCURRENT_PROMISES_TS = {};
var FOCUS_REVALIDATORS = {};
var RECONNECT_REVALIDATORS = {};
var CACHE_REVALIDATORS = {};
var MUTATION_TS = {};
var MUTATION_END_TS = {};
// generate strictly increasing timestamps
var now = (function () {
    var ts = 0;
    return function () { return ++ts; };
})();
// setup DOM events listeners for `focus` and `reconnect` actions
if (!_env__WEBPACK_IMPORTED_MODULE_2__["IS_SERVER"]) {
    var revalidate_1 = function (revalidators) {
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].isDocumentVisible() || !_config__WEBPACK_IMPORTED_MODULE_1__["default"].isOnline())
            return;
        for (var key in revalidators) {
            if (revalidators[key][0])
                revalidators[key][0]();
        }
    };
    if (typeof _config__WEBPACK_IMPORTED_MODULE_1__["default"].registerOnFocus === 'function') {
        _config__WEBPACK_IMPORTED_MODULE_1__["default"].registerOnFocus(function () { return revalidate_1(FOCUS_REVALIDATORS); });
    }
    if (typeof _config__WEBPACK_IMPORTED_MODULE_1__["default"].registerOnReconnect === 'function') {
        _config__WEBPACK_IMPORTED_MODULE_1__["default"].registerOnReconnect(function () { return revalidate_1(RECONNECT_REVALIDATORS); });
    }
}
var trigger = function (_key, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    // we are ignoring the second argument which correspond to the arguments
    // the fetcher will receive when key is an array
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], keyErr = _a[2], keyValidating = _a[3];
    if (!key)
        return Promise.resolve();
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        var currentData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        var currentError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        var currentIsValidating = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyValidating);
        var promises = [];
        for (var i = 0; i < updaters.length; ++i) {
            promises.push(updaters[i](shouldRevalidate, currentData, currentError, currentIsValidating, i > 0));
        }
        // return new updated value
        return Promise.all(promises).then(function () { return _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key); });
    }
    return Promise.resolve(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key));
};
var broadcastState = function (key, data, error, isValidating) {
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
            updaters[i](false, data, error, isValidating);
        }
    }
};
var mutate = function (_key, _data, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, key, keyErr, beforeMutationTs, beforeConcurrentPromisesTs, data, error, isAsyncMutation, err_1, shouldAbort, updaters, promises, i;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], keyErr = _a[2];
                    if (!key)
                        return [2 /*return*/];
                    // if there is no new data to update, let's just revalidate the key
                    if (typeof _data === 'undefined')
                        return [2 /*return*/, trigger(_key, shouldRevalidate)
                            // update global timestamps
                        ];
                    // update global timestamps
                    MUTATION_TS[key] = now() - 1;
                    MUTATION_END_TS[key] = 0;
                    beforeMutationTs = MUTATION_TS[key];
                    beforeConcurrentPromisesTs = CONCURRENT_PROMISES_TS[key];
                    isAsyncMutation = false;
                    if (_data && typeof _data === 'function') {
                        // `_data` is a function, call it passing current cache value
                        try {
                            _data = _data(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key));
                        }
                        catch (err) {
                            // if `_data` function throws an error synchronously, it shouldn't be cached
                            _data = undefined;
                            error = err;
                        }
                    }
                    if (!(_data && typeof _data.then === 'function')) return [3 /*break*/, 5];
                    // `_data` is a promise
                    isAsyncMutation = true;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _data];
                case 2:
                    data = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    error = err_1;
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    data = _data;
                    _b.label = 6;
                case 6:
                    shouldAbort = function () {
                        // check if other mutations have occurred since we've started this mutation
                        if (beforeMutationTs !== MUTATION_TS[key] ||
                            beforeConcurrentPromisesTs !== CONCURRENT_PROMISES_TS[key]) {
                            if (error)
                                throw error;
                            return true;
                        }
                    };
                    // if there's a race we don't update cache or broadcast change, just return the data
                    if (shouldAbort())
                        return [2 /*return*/, data];
                    if (typeof data !== 'undefined') {
                        // update cached data
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, data);
                    }
                    // always update or reset the error
                    _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, error);
                    // reset the timestamp to mark the mutation has ended
                    MUTATION_END_TS[key] = now() - 1;
                    if (!isAsyncMutation) {
                        // we skip broadcasting if there's another mutation happened synchronously
                        if (shouldAbort())
                            return [2 /*return*/, data];
                    }
                    updaters = CACHE_REVALIDATORS[key];
                    if (updaters) {
                        promises = [];
                        for (i = 0; i < updaters.length; ++i) {
                            promises.push(updaters[i](!!shouldRevalidate, data, error, undefined, i > 0));
                        }
                        // return new updated value
                        return [2 /*return*/, Promise.all(promises).then(function () {
                                if (error)
                                    throw error;
                                return _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
                            })];
                    }
                    // throw error or return data to be used by caller of mutate
                    if (error)
                        throw error;
                    return [2 /*return*/, data];
            }
        });
    });
};
function useSWR() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _key = args[0];
    var config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"], Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_swr_config_context__WEBPACK_IMPORTED_MODULE_3__["default"]), args.length > 2
        ? args[2]
        : args.length === 2 && typeof args[1] === 'object'
            ? args[1]
            : {});
    // in typescript args.length > 2 is not same as args.lenth === 3
    // we do a safe type assertion here
    // args.length === 3
    var fn = (args.length > 2
        ? args[1]
        : args.length === 2 && typeof args[1] === 'function'
            ? args[1]
            : /**
                  pass fn as null will disable revalidate
                  https://paco.sh/blog/shared-hook-state-with-swr
                */
                args[1] === null
                    ? args[1]
                    : config.fetcher);
    // we assume `key` as the identifier of the request
    // `key` can change but `fn` shouldn't
    // (because `revalidate` only depends on `key`)
    // `keyErr` is the cache key for error objects
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], fnArgs = _a[1], keyErr = _a[2], keyValidating = _a[3];
    var configRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(config);
    Object(_env__WEBPACK_IMPORTED_MODULE_2__["useIsomorphicLayoutEffect"])(function () {
        configRef.current = config;
    });
    var willRevalidateOnMount = function () {
        return (config.revalidateOnMount ||
            (!config.initialData && config.revalidateOnMount === undefined));
    };
    var resolveData = function () {
        var cachedData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        return typeof cachedData === 'undefined' ? config.initialData : cachedData;
    };
    var resolveIsValidating = function () {
        return !!_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyValidating) || (key && willRevalidateOnMount());
    };
    var initialData = resolveData();
    var initialError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
    var initialIsValidating = resolveIsValidating();
    // if a state is accessed (data, error or isValidating),
    // we add the state to dependencies so if the state is
    // updated in the future, we can trigger a rerender
    var stateDependencies = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: false,
        error: false,
        isValidating: false
    });
    var stateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: initialData,
        error: initialError,
        isValidating: initialIsValidating
    });
    // display the data label in the React DevTools next to SWR hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"])(stateRef.current.data);
    var rerender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({})[1];
    var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (payload) {
        var shouldUpdateState = false;
        for (var k in payload) {
            // @ts-ignore
            if (stateRef.current[k] === payload[k]) {
                continue;
            }
            // @ts-ignore
            stateRef.current[k] = payload[k];
            // @ts-ignore
            if (stateDependencies.current[k]) {
                shouldUpdateState = true;
            }
        }
        if (shouldUpdateState) {
            // if component is unmounted, should skip rerender
            // if component is not mounted, should skip rerender
            if (unmountedRef.current || !initialMountedRef.current)
                return;
            rerender({});
        }
    }, 
    // config.suspense isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // error ref inside revalidate (is last request errored?)
    var unmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var keyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(key);
    // check if component is mounted in suspense mode
    var initialMountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    // do unmount check for callbacks
    var eventsCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (unmountedRef.current)
            return;
        if (!initialMountedRef.current)
            return;
        if (key !== keyRef.current)
            return;
        // @ts-ignore
        (_a = configRef.current)[event].apply(_a, params);
    }, [key]);
    var boundMutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data, shouldRevalidate) {
        return mutate(keyRef.current, data, shouldRevalidate);
    }, []);
    var addRevalidator = function (revalidators, callback) {
        if (!revalidators[key]) {
            revalidators[key] = [callback];
        }
        else {
            revalidators[key].push(callback);
        }
        return function () {
            var keyedRevalidators = revalidators[key];
            var index = keyedRevalidators.indexOf(callback);
            if (index >= 0) {
                // O(1): faster than splice
                keyedRevalidators[index] =
                    keyedRevalidators[keyedRevalidators.length - 1];
                keyedRevalidators.pop();
            }
        };
    };
    // start a revalidation
    var revalidate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (revalidateOpts) {
        if (revalidateOpts === void 0) { revalidateOpts = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var _a, retryCount, _b, dedupe, loading, shouldDeduping, newData, startAt, newState, err_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!key || !fn)
                            return [2 /*return*/, false];
                        if (unmountedRef.current)
                            return [2 /*return*/, false];
                        if (configRef.current.isPaused())
                            return [2 /*return*/, false];
                        _a = revalidateOpts.retryCount, retryCount = _a === void 0 ? 0 : _a, _b = revalidateOpts.dedupe, dedupe = _b === void 0 ? false : _b;
                        loading = true;
                        shouldDeduping = typeof CONCURRENT_PROMISES[key] !== 'undefined' && dedupe;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, , 7]);
                        dispatch({
                            isValidating: true
                        });
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyValidating, true);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, stateRef.current.data, stateRef.current.error, true);
                        }
                        newData = void 0;
                        startAt = void 0;
                        if (!shouldDeduping) return [3 /*break*/, 3];
                        // there's already an ongoing request,
                        // this one needs to be deduplicated.
                        startAt = CONCURRENT_PROMISES_TS[key];
                        return [4 /*yield*/, CONCURRENT_PROMISES[key]];
                    case 2:
                        newData = _c.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        // if no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key)) {
                            setTimeout(function () {
                                if (loading)
                                    eventsCallback('onLoadingSlow', key, config);
                            }, config.loadingTimeout);
                        }
                        if (fnArgs !== null) {
                            CONCURRENT_PROMISES[key] = fn.apply(void 0, fnArgs);
                        }
                        else {
                            CONCURRENT_PROMISES[key] = fn(key);
                        }
                        CONCURRENT_PROMISES_TS[key] = startAt = now();
                        return [4 /*yield*/, CONCURRENT_PROMISES[key]];
                    case 4:
                        newData = _c.sent();
                        setTimeout(function () {
                            delete CONCURRENT_PROMISES[key];
                            delete CONCURRENT_PROMISES_TS[key];
                        }, config.dedupingInterval);
                        // trigger the success event,
                        // only do this for the original request.
                        eventsCallback('onSuccess', newData, key, config);
                        _c.label = 5;
                    case 5:
                        // if there're other ongoing request(s), started after the current one,
                        // we need to ignore the current one to avoid possible race conditions:
                        //   req1------------------>res1        (current one)
                        //        req2---------------->res2
                        // the request that fired later will always be kept.
                        if (CONCURRENT_PROMISES_TS[key] > startAt) {
                            return [2 /*return*/, false];
                        }
                        // if there're other mutations(s), overlapped with the current revalidation:
                        // case 1:
                        //   req------------------>res
                        //       mutate------>end
                        // case 2:
                        //         req------------>res
                        //   mutate------>end
                        // case 3:
                        //   req------------------>res
                        //       mutate-------...---------->
                        // we have to ignore the revalidation result (res) because it's no longer fresh.
                        // meanwhile, a new revalidation should be triggered when the mutation ends.
                        if (MUTATION_TS[key] &&
                            // case 1
                            (startAt <= MUTATION_TS[key] ||
                                // case 2
                                startAt <= MUTATION_END_TS[key] ||
                                // case 3
                                MUTATION_END_TS[key] === 0)) {
                            dispatch({ isValidating: false });
                            return [2 /*return*/, false];
                        }
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, undefined);
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyValidating, false);
                        newState = {
                            isValidating: false
                        };
                        if (typeof stateRef.current.error !== 'undefined') {
                            // we don't have an error
                            newState.error = undefined;
                        }
                        if (!config.compare(stateRef.current.data, newData)) {
                            // deep compare to avoid extra re-render
                            // data changed
                            newState.data = newData;
                        }
                        if (!config.compare(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key), newData)) {
                            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, newData);
                        }
                        // merge the new state
                        dispatch(newState);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, newData, newState.error, false);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _c.sent();
                        delete CONCURRENT_PROMISES[key];
                        delete CONCURRENT_PROMISES_TS[key];
                        if (configRef.current.isPaused()) {
                            dispatch({
                                isValidating: false
                            });
                            return [2 /*return*/, false];
                        }
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, err_2);
                        // get a new error
                        // don't use deep equal for errors
                        if (stateRef.current.error !== err_2) {
                            // we keep the stale data
                            dispatch({
                                isValidating: false,
                                error: err_2
                            });
                            if (!shouldDeduping) {
                                // also broadcast to update other hooks
                                broadcastState(key, undefined, err_2, false);
                            }
                        }
                        // events and retry
                        eventsCallback('onError', err_2, key, config);
                        if (config.shouldRetryOnError) {
                            // when retrying, we always enable deduping
                            eventsCallback('onErrorRetry', err_2, key, config, revalidate, {
                                retryCount: retryCount + 1,
                                dedupe: true
                            });
                        }
                        return [3 /*break*/, 7];
                    case 7:
                        loading = false;
                        return [2 /*return*/, true];
                }
            });
        });
    }, 
    // dispatch is immutable, and `eventsCallback`, `fnArgs`, `keyErr`, and `keyValidating` are based on `key`,
    // so we can them from the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // useSWR('key', () => fetch('/api/'), { suspense: true })
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]);
    // mounted (client side rendering)
    Object(_env__WEBPACK_IMPORTED_MODULE_2__["useIsomorphicLayoutEffect"])(function () {
        if (!key)
            return undefined;
        // after `key` updates, we need to mark it as mounted
        unmountedRef.current = false;
        var isUpdating = initialMountedRef.current;
        initialMountedRef.current = true;
        // after the component is mounted (hydrated),
        // we need to update the data from the cache
        // and trigger a revalidation
        var currentHookData = stateRef.current.data;
        var latestKeyedData = resolveData();
        // update the state if the key changed (not the inital render) or cache updated
        keyRef.current = key;
        if (!config.compare(currentHookData, latestKeyedData)) {
            dispatch({ data: latestKeyedData });
        }
        // revalidate with deduping
        var softRevalidate = function () { return revalidate({ dedupe: true }); };
        // trigger a revalidation
        if (isUpdating || willRevalidateOnMount()) {
            if (typeof latestKeyedData !== 'undefined' && !_env__WEBPACK_IMPORTED_MODULE_2__["IS_SERVER"]) {
                // delay revalidate if there's cache
                // to not block the rendering
                // @ts-ignore it's safe to use requestAnimationFrame in browser
                Object(_env__WEBPACK_IMPORTED_MODULE_2__["rAF"])(softRevalidate);
            }
            else {
                softRevalidate();
            }
        }
        var pending = false;
        var onFocus = function () {
            if (pending || !configRef.current.revalidateOnFocus)
                return;
            pending = true;
            softRevalidate();
            setTimeout(function () { return (pending = false); }, configRef.current.focusThrottleInterval);
        };
        var onReconnect = function () {
            if (configRef.current.revalidateOnReconnect) {
                softRevalidate();
            }
        };
        // register global cache update listener
        var onUpdate = function (shouldRevalidate, updatedData, updatedError, updatedIsValidating, dedupe) {
            if (shouldRevalidate === void 0) { shouldRevalidate = true; }
            if (dedupe === void 0) { dedupe = true; }
            // update hook state
            var newState = {};
            var needUpdate = false;
            if (typeof updatedData !== 'undefined' &&
                !config.compare(stateRef.current.data, updatedData)) {
                newState.data = updatedData;
                needUpdate = true;
            }
            // always update error
            // because it can be `undefined`
            if (stateRef.current.error !== updatedError) {
                newState.error = updatedError;
                needUpdate = true;
            }
            if (typeof updatedIsValidating !== 'undefined' &&
                stateRef.current.isValidating !== updatedIsValidating) {
                newState.isValidating = updatedIsValidating;
                needUpdate = true;
            }
            if (needUpdate) {
                dispatch(newState);
            }
            if (shouldRevalidate) {
                if (dedupe) {
                    return softRevalidate();
                }
                else {
                    return revalidate();
                }
            }
            return false;
        };
        var unsubFocus = addRevalidator(FOCUS_REVALIDATORS, onFocus);
        var unsubReconnect = addRevalidator(RECONNECT_REVALIDATORS, onReconnect);
        var unsubUpdate = addRevalidator(CACHE_REVALIDATORS, onUpdate);
        return function () {
            // cleanup
            dispatch = function () { return null; };
            // mark it as unmounted
            unmountedRef.current = true;
            unsubFocus();
            unsubReconnect();
            unsubUpdate();
        };
    }, [key, revalidate]);
    Object(_env__WEBPACK_IMPORTED_MODULE_2__["useIsomorphicLayoutEffect"])(function () {
        var timer = null;
        var tick = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!stateRef.current.error &&
                            (configRef.current.refreshWhenHidden ||
                                configRef.current.isDocumentVisible()) &&
                            (configRef.current.refreshWhenOffline || configRef.current.isOnline()))) return [3 /*break*/, 2];
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        return [4 /*yield*/, revalidate({ dedupe: true })];
                    case 1:
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Read the latest refreshInterval
                        if (configRef.current.refreshInterval && timer) {
                            timer = setTimeout(tick, configRef.current.refreshInterval);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        if (configRef.current.refreshInterval) {
            timer = setTimeout(tick, configRef.current.refreshInterval);
        }
        return function () {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        };
    }, [
        config.refreshInterval,
        config.refreshWhenHidden,
        config.refreshWhenOffline,
        revalidate
    ]);
    // suspense
    var latestData;
    var latestError;
    if (config.suspense) {
        // in suspense mode, we can't return empty state
        // (it should be suspended)
        // try to get data and error from cache
        latestData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        latestError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        if (typeof latestData === 'undefined') {
            latestData = initialData;
        }
        if (typeof latestError === 'undefined') {
            latestError = initialError;
        }
        if (typeof latestData === 'undefined' &&
            typeof latestError === 'undefined') {
            // need to start the request if it hasn't
            if (!CONCURRENT_PROMISES[key]) {
                // trigger revalidate immediately
                // to get the promise
                // in this revalidate, should not rerender
                revalidate();
            }
            if (CONCURRENT_PROMISES[key] &&
                typeof CONCURRENT_PROMISES[key].then === 'function') {
                // if it is a promise
                throw CONCURRENT_PROMISES[key];
            }
            // it's a value, return it directly (override)
            latestData = CONCURRENT_PROMISES[key];
        }
        if (typeof latestData === 'undefined' && latestError) {
            // in suspense mode, throw error if there's no content
            throw latestError;
        }
    }
    // define returned state
    // can be memorized since the state is a ref
    var memoizedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        // revalidate will be deprecated in the 1.x release
        // because mutate() covers the same use case of revalidate().
        // This remains only for backward compatibility
        var state = { revalidate: revalidate, mutate: boundMutate };
        Object.defineProperties(state, {
            error: {
                // `key` might be changed in the upcoming hook re-render,
                // but the previous state will stay
                // so we need to match the latest key and data (fallback to `initialData`)
                get: function () {
                    stateDependencies.current.error = true;
                    if (config.suspense) {
                        return latestError;
                    }
                    return keyRef.current === key ? stateRef.current.error : initialError;
                },
                enumerable: true
            },
            data: {
                get: function () {
                    stateDependencies.current.data = true;
                    if (config.suspense) {
                        return latestData;
                    }
                    return keyRef.current === key ? stateRef.current.data : initialData;
                },
                enumerable: true
            },
            isValidating: {
                get: function () {
                    stateDependencies.current.isValidating = true;
                    return key ? stateRef.current.isValidating : false;
                },
                enumerable: true
            }
        });
        return state;
        // `config.suspense` isn't allowed to change during the lifecycle.
        // `boundMutate` is immutable, and the immutability of `revalidate` depends on `key`
        // so we can omit them from the deps array,
        // but we put it to enable react-hooks/exhaustive-deps rule.
        // `initialData` and `initialError` are not initial values
        // because they are changed during the lifecycle
        // so we should add them in the deps array.
    }, [
        revalidate,
        initialData,
        initialError,
        boundMutate,
        key,
        config.suspense,
        latestError,
        latestData
    ]);
    return memoizedState;
}
Object.defineProperty(_swr_config_context__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, 'default', {
    value: _config__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var SWRConfig = _swr_config_context__WEBPACK_IMPORTED_MODULE_3__["default"].Provider;

/* harmony default export */ __webpack_exports__["default"] = (useSWR);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/esm-browser/nil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/esm-browser/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["default"] = (version);

/***/ }),

/***/ "./src/Blocks/Alert/Alert.js":
/*!***********************************!*\
  !*** ./src/Blocks/Alert/Alert.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Alert = function Alert(props) {
  var title = props.title;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "alert"
  }, title || '');
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./src/Blocks/Button/Button.js":
/*!*************************************!*\
  !*** ./src/Blocks/Button/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Button = function Button(props) {
  var title = props.title,
      type = props.type,
      link = props.link,
      className = props.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: link || '#',
    className: "btn btn--".concat(type || 'primary', " ").concat(className)
  }, title || 'Add Title');
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/Blocks/Forms/Forms.js":
/*!***********************************!*\
  !*** ./src/Blocks/Forms/Forms.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FormsSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FormsSelection */ "./src/Blocks/Forms/components/FormsSelection.js");
/* harmony import */ var _components_FormView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FormView */ "./src/Blocks/Forms/components/FormView.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useScript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useScript */ "./src/hooks/useScript.js");
/* harmony import */ var _Alert_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Alert/Alert */ "./src/Blocks/Alert/Alert.js");








var _require = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js"),
    uuidv4 = _require.v4;

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('snow-blocks/forms', {
  title: 'Forms',
  category: 'widgets',
  icon: 'feedback',
  supports: {
    html: false
  },
  attributes: {
    formUrl: {
      type: 'string',
      default: ''
    },
    formKey: {
      type: 'string',
      default: ''
    },
    formId: {
      type: 'string',
      default: uuidv4()
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var formUrl = attributes.formUrl,
        formId = attributes.formId;
    if (!formUrl) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_FormsSelection__WEBPACK_IMPORTED_MODULE_2__["default"], props);
    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      setAttributes({
        formId: uuidv4()
      });
    }, []);
    Object(_hooks_useScript__WEBPACK_IMPORTED_MODULE_5__["default"])(formId, "<script src=\"https://unpkg.com/formiojs@latest/dist/formio.embed.js?src=".concat(formUrl, "\"></script>"));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_FormView__WEBPACK_IMPORTED_MODULE_3__["default"], props);
  },
  save: function save(props) {
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Alert_Alert__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Dynamic Block. Please use a Headless App to render it."
    });
    return;
  }
});

/***/ }),

/***/ "./src/Blocks/Forms/components/FormView.js":
/*!*************************************************!*\
  !*** ./src/Blocks/Forms/components/FormView.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var FormView = function FormView(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "form",
    id: props.attributes.formId
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FormView);

/***/ }),

/***/ "./src/Blocks/Forms/components/FormsSelection.js":
/*!*******************************************************!*\
  !*** ./src/Blocks/Forms/components/FormsSelection.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var FormsSelection = function FormsSelection(props) {
  var setAttributes = props.setAttributes;

  var handleSelection = function handleSelection(e) {
    e.preventDefault();
    var url = e.target.formUrl.value;
    var domain = new URL(url).pathname;
    setAttributes({
      formKey: domain.split('/to/')[1]
    });
    setAttributes({
      formUrl: url
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
    className: "form-block form__container form__container--selection",
    onSubmit: function onSubmit(e) {
      return handleSelection(e);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "form-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    htmlFor: "formUrl",
    className: "form-label"
  }, "Form url"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "url",
    id: "formUrl",
    placeholder: "E.G.: https://username.typeform.com/to/XxXxXXX",
    className: "form-input"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    className: "form-button btn btn--primary",
    type: "submit",
    value: "Add form"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FormsSelection);

/***/ }),

/***/ "./src/Blocks/Hero/Hero.js":
/*!*********************************!*\
  !*** ./src/Blocks/Hero/Hero.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HeroInspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HeroInspector */ "./src/Blocks/Hero/components/HeroInspector.js");
/* harmony import */ var _components_HeroMediaLibrary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HeroMediaLibrary */ "./src/Blocks/Hero/components/HeroMediaLibrary.js");
/* harmony import */ var _components_HeroView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/HeroView */ "./src/Blocks/Hero/components/HeroView.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _functions_getSlug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../functions/getSlug */ "./src/functions/getSlug.js");









Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])('snow-blocks/hero', {
  title: 'Hero',
  category: 'widgets',
  icon: 'cover-image',
  supports: {
    html: false
  },
  attributes: {
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    buttonText: {
      type: 'string'
    },
    buttonLink: {
      type: 'string',
      default: '#'
    },
    imageUrl: {
      type: 'string'
    },
    imagePosition: {
      type: 'string',
      default: 'right'
    },
    imageStyle: {
      type: 'string',
      default: 'default'
    },
    hasButton: {
      type: 'string',
      default: 'no'
    },
    heroStyle: {
      type: 'string',
      default: 'full'
    },
    image: {
      type: 'object'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        imageUrl = _props$attributes.imageUrl,
        buttonLink = _props$attributes.buttonLink,
        buttonSlug = _props$attributes.buttonSlug;
    if (!imageUrl) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_HeroMediaLibrary__WEBPACK_IMPORTED_MODULE_5__["default"], props);

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(buttonSlug),
        _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
        slug = _useState2[0],
        setSlug = _useState2[1];

    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
      setSlug(Object(_functions_getSlug__WEBPACK_IMPORTED_MODULE_8__["default"])(buttonLink));
    }, [buttonLink]);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_HeroInspector__WEBPACK_IMPORTED_MODULE_4__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_HeroView__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      env: true
    }, props)));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_HeroView__WEBPACK_IMPORTED_MODULE_6__["default"], props);
  }
});

/***/ }),

/***/ "./src/Blocks/Hero/components/HeroButton.js":
/*!**************************************************!*\
  !*** ./src/Blocks/Hero/components/HeroButton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Button/Button */ "./src/Blocks/Button/Button.js");




var HeroButton = function HeroButton(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      env = props.env;
  var buttonText = attributes.buttonText,
      buttonLink = attributes.buttonLink;
  if (!buttonText && !env) return null;
  if (!env) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: buttonText,
    link: buttonLink || '#',
    type: 'primary',
    className: 'hero__button'
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero__button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero__link"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["URLInputButton"], {
    url: buttonLink,
    onChange: function onChange(buttonLink) {
      return setAttributes({
        buttonLink: buttonLink
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "btn btn--primary"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PlainText"], {
    placeholder: 'Add Title',
    value: buttonText,
    onChange: function onChange(val) {
      return setAttributes({
        buttonText: val
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroButton);

/***/ }),

/***/ "./src/Blocks/Hero/components/HeroCloseButton.js":
/*!*******************************************************!*\
  !*** ./src/Blocks/Hero/components/HeroCloseButton.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var HeroCloseButton = function HeroCloseButton(props) {
  var handleClick = function handleClick(e) {
    e.preventDefault();
    props.setAttributes({
      imageUrl: undefined
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero__close"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    type: "button",
    className: "hero__button hero__button--close",
    "aria-label": "Close",
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    "aria-hidden": "true"
  }, "\xD7")));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroCloseButton);

/***/ }),

/***/ "./src/Blocks/Hero/components/HeroDescription.js":
/*!*******************************************************!*\
  !*** ./src/Blocks/Hero/components/HeroDescription.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var HeroDescription = function HeroDescription(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      env = props.env;
  var description = attributes.description;
  if (!description && !env) return null;
  if (!env) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "hero__description"
  }, description);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "hero__description"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PlainText"], {
    placeholder: 'Add Description',
    value: description,
    onChange: function onChange(val) {
      return setAttributes({
        description: val
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroDescription);

/***/ }),

/***/ "./src/Blocks/Hero/components/HeroImage.js":
/*!*************************************************!*\
  !*** ./src/Blocks/Hero/components/HeroImage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var HeroImage = function HeroImage(props) {
  var _props$attributes = props.attributes,
      imageUrl = _props$attributes.imageUrl,
      imageStyle = _props$attributes.imageStyle,
      imageAlt = _props$attributes.imageAlt;
  if (!imageUrl) return null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: imageUrl,
    alt: imageAlt || '',
    className: "hero__image ".concat(imageStyle)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HeroImage);

/***/ }),

/***/ "./src/Blocks/Hero/components/HeroInspector.js":
/*!*****************************************************!*\
  !*** ./src/Blocks/Hero/components/HeroInspector.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





var HeroInspector = function HeroInspector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var hasButton = attributes.hasButton,
      heroStyle = attributes.heroStyle,
      imagePosition = attributes.imagePosition,
      imageStyle = attributes.imageStyle;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Style'),
    initialOpen: true,
    className: "hero__inspector hero__inspector--style"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RadioControl"], {
    selected: heroStyle,
    options: [{
      label: 'Full',
      value: 'full'
    }, {
      label: 'Split',
      value: 'split'
    }],
    onChange: function onChange(option) {
      setAttributes({
        heroStyle: option
      });
    }
  })), heroStyle === 'split' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Position'),
    initialOpen: true,
    className: "hero__inspector hero__inspector--image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RadioControl"], {
    selected: imagePosition,
    options: [{
      label: 'Right',
      value: 'right'
    }, {
      label: 'Left',
      value: 'left'
    }],
    onChange: function onChange(option) {
      setAttributes({
        imagePosition: option
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Type'),
    initialOpen: true,
    className: "hero__inspector hero__inspector--type"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RadioControl"], {
    selected: imageStyle,
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Rounded',
      value: 'rounded'
    }],
    onChange: function onChange(option) {
      setAttributes({
        imageStyle: option
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Action Button'),
    initialOpen: true,
    className: "hero__inspector hero__inspector--button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RadioControl"], {
    selected: hasButton,
    options: [{
      label: 'Hide',
      value: 'no'
    }, {
      label: 'Show',
      value: 'yes'
    }],
    onChange: function onChange(option) {
      setAttributes({
        hasButton: option
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroInspector);

/***/ }),

/***/ "./src/Blocks/Hero/components/HeroMediaLibrary.js":
/*!********************************************************!*\
  !*** ./src/Blocks/Hero/components/HeroMediaLibrary.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);




var HeroMediLibrary = function HeroMediLibrary(props) {
  var ALLOWED_MEDIA_TYPES = ['image'];
  var setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero__upload"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"] // onSelect={(media) => console.log(media)}
  , {
    onSelect: function onSelect(media) {
      return setAttributes({
        imageUrl: media.sizes.full.url,
        image: media
      });
    },
    allowedTypes: ALLOWED_MEDIA_TYPES,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "button",
        className: "btn btn--primary",
        onClick: open
      }, "Open Media Library");
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroMediLibrary);

/***/ }),

/***/ "./src/Blocks/Hero/components/HeroTitle.js":
/*!*************************************************!*\
  !*** ./src/Blocks/Hero/components/HeroTitle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var HeroTitle = function HeroTitle(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      env = props.env;
  var title = attributes.title;
  if (!title && !env) return null;
  if (!env) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
    className: "hero__title"
  }, title);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
    className: "hero__title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PlainText"], {
    placeholder: 'Add Title',
    value: title,
    onChange: function onChange(val) {
      return setAttributes({
        title: val
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroTitle);

/***/ }),

/***/ "./src/Blocks/Hero/components/HeroView.js":
/*!************************************************!*\
  !*** ./src/Blocks/Hero/components/HeroView.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeroDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroDescription */ "./src/Blocks/Hero/components/HeroDescription.js");
/* harmony import */ var _HeroTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroTitle */ "./src/Blocks/Hero/components/HeroTitle.js");
/* harmony import */ var _HeroImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroImage */ "./src/Blocks/Hero/components/HeroImage.js");
/* harmony import */ var _HeroCloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroCloseButton */ "./src/Blocks/Hero/components/HeroCloseButton.js");
/* harmony import */ var _HeroButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroButton */ "./src/Blocks/Hero/components/HeroButton.js");







var HeroView = function HeroView(props) {
  var env = props.env;
  var _props$attributes = props.attributes,
      hasButton = _props$attributes.hasButton,
      heroStyle = _props$attributes.heroStyle,
      imagePosition = _props$attributes.imagePosition,
      imageUrl = _props$attributes.imageUrl;
  if (!env && !imageUrl) return null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero hero--".concat(heroStyle, " hero--").concat(imagePosition)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroTitle__WEBPACK_IMPORTED_MODULE_2__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroDescription__WEBPACK_IMPORTED_MODULE_1__["default"], props), hasButton === 'yes' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroButton__WEBPACK_IMPORTED_MODULE_5__["default"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero__figure"
  }, env && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroCloseButton__WEBPACK_IMPORTED_MODULE_4__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroImage__WEBPACK_IMPORTED_MODULE_3__["default"], props))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroView);

/***/ }),

/***/ "./src/Blocks/HubSpot/Forms.js":
/*!*************************************!*\
  !*** ./src/Blocks/HubSpot/Forms.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useHubSpot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useHubSpot */ "./src/hooks/useHubSpot.js");
/* harmony import */ var _components_SiteSelecion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SiteSelecion */ "./src/Blocks/HubSpot/components/SiteSelecion.js");




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('snow-blocks/hubspot-forms', {
  title: 'HubSpot Forms',
  category: 'widgets',
  icon: 'cover-image',
  supports: {
    html: false
  },
  attributes: {
    formID: {
      type: 'string',
      default: ''
    },
    hubSpotApiKey: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(props) {
    var _data$results;

    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var hubSpotApiKey = attributes.hubSpotApiKey,
        hubSpotSite = attributes.hubSpotSite;

    var _useHubSpot = Object(_hooks_useHubSpot__WEBPACK_IMPORTED_MODULE_2__["default"])(hubSpotApiKey, hubSpotSite),
        data = _useHubSpot.data,
        isLoading = _useHubSpot.isLoading,
        isError = _useHubSpot.isError;

    if (isError) return 'ERROR!';
    if (isLoading) return 'loading ...';

    var handleSelect = function handleSelect(e) {
      e.preventDefault();
      setAttributes({
        formID: e.target.value
      });
    };

    if (!hubSpotApiKey && !hubSpotSite) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "hubspot"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_SiteSelecion__WEBPACK_IMPORTED_MODULE_3__["default"], props));
    if (hubSpotApiKey && data.status === 'error') return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "hubspot"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, data.message), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_SiteSelecion__WEBPACK_IMPORTED_MODULE_3__["default"], props));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "hubspot"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Please select your Form"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", {
      defaultValue: props.attributes.formID,
      onChange: function onChange(e) {
        return handleSelect(e);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null, "--------"), (_data$results = data.results) === null || _data$results === void 0 ? void 0 : _data$results.map(function (item) {
      var archived = item.archived,
          id = item.id,
          name = item.name;
      if (archived) return null;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
        key: id,
        value: id
      }, name);
    })));
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/Blocks/HubSpot/components/SiteSelecion.js":
/*!*******************************************************!*\
  !*** ./src/Blocks/HubSpot/components/SiteSelecion.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);






var SiteSelection = function SiteSelection(props) {
  var setAttributes = props.setAttributes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      typeKey = _useState2[0],
      setTypeKey = _useState2[1];

  var handleSave = function handleSave(e) {
    e.preventDefault();
    setAttributes({
      hubSpotApiKey: typeKey
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "hubspot__selection"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", null, "HubSpot Credentials"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PlainText"], {
    placeholder: 'Hubspot API key',
    onChange: function onChange(val) {
      return setTypeKey(val);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: function onClick(e) {
      return handleSave(e);
    },
    isPrimary: true
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (SiteSelection);

/***/ }),

/***/ "./src/Blocks/InstagramFeed/InstagramFeed.js":
/*!***************************************************!*\
  !*** ./src/Blocks/InstagramFeed/InstagramFeed.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_InstagramFeedInspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/InstagramFeedInspector */ "./src/Blocks/InstagramFeed/components/InstagramFeedInspector.js");
/* harmony import */ var _components_InstagramFeedSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/InstagramFeedSelection */ "./src/Blocks/InstagramFeed/components/InstagramFeedSelection.js");
/* harmony import */ var _components_InstagramFeedView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/InstagramFeedView */ "./src/Blocks/InstagramFeed/components/InstagramFeedView.js");





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('snow-blocks/instagram-feed', {
  title: 'Instagram Feed',
  category: 'widgets',
  icon: 'heart',
  supports: {
    html: false
  },
  attributes: {
    userID: {
      type: 'string'
    },
    itemsNumber: {
      type: 'string',
      default: '6'
    },
    imageType: {
      type: 'string',
      default: 'default'
    }
  },
  edit: function edit(props) {
    if (!props.attributes.userID) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_InstagramFeedSelection__WEBPACK_IMPORTED_MODULE_3__["default"], props);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_InstagramFeedInspector__WEBPACK_IMPORTED_MODULE_2__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_InstagramFeedView__WEBPACK_IMPORTED_MODULE_4__["default"], props));
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/Blocks/InstagramFeed/components/InstagramFeedInspector.js":
/*!***********************************************************************!*\
  !*** ./src/Blocks/InstagramFeed/components/InstagramFeedInspector.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




var InstagramFeedInspector = function InstagramFeedInspector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var itemsNumber = attributes.itemsNumber,
      imageType = attributes.imageType;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Number of Posts"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "number",
    min: 1,
    max: 20,
    defaultValue: itemsNumber,
    onChange: function onChange(e) {
      return setAttributes({
        itemsNumber: e.target.value
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Image Type"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
    selected: imageType,
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Thumbnail',
      value: 'thumbnail'
    }],
    onChange: function onChange(option) {
      setAttributes({
        imageType: option
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (InstagramFeedInspector);

/***/ }),

/***/ "./src/Blocks/InstagramFeed/components/InstagramFeedSelection.js":
/*!***********************************************************************!*\
  !*** ./src/Blocks/InstagramFeed/components/InstagramFeedSelection.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var InstagramFeedSelection = function InstagramFeedSelection(props) {
  var setAttributes = props.setAttributes;

  var handleSelection = function handleSelection(e) {
    e.preventDefault();
    var userID = e.target.formID.value;
    setAttributes({
      userID: userID
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "instagram-feed__selection"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
    className: "form__container",
    onSubmit: function onSubmit(e) {
      return handleSelection(e);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "form-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    htmlFor: "formID",
    className: "form-label instagram-feed__form-title"
  }, "Instagram User ID (", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://www.instafollowers.co/find-instagram-user-id",
    target: "_blank"
  }, "Find yours here"), ")"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text",
    id: "formID",
    placeholder: "Ex: 530654",
    className: "form-input",
    required: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "form-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    className: "form-submit btn btn--primary",
    type: "submit",
    value: "Add UserID"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (InstagramFeedSelection);

/***/ }),

/***/ "./src/Blocks/InstagramFeed/components/InstagramFeedView.js":
/*!******************************************************************!*\
  !*** ./src/Blocks/InstagramFeed/components/InstagramFeedView.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useRest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useRest */ "./src/hooks/useRest.js");



var InstagramFeedView = function InstagramFeedView(props) {
  var _props$attributes = props.attributes,
      userID = _props$attributes.userID,
      itemsNumber = _props$attributes.itemsNumber,
      imageType = _props$attributes.imageType;
  var url = "https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={\"id\":".concat(userID, ",\"first\":").concat(itemsNumber, "}");

  var _useRest = Object(_hooks_useRest__WEBPACK_IMPORTED_MODULE_1__["default"])(url),
      data = _useRest.data,
      isLoading = _useRest.isLoading,
      isError = _useRest.isError;

  if (isError) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Error!");
  if (isLoading) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Loading ...");
  if (!data.data) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "No items.");
  var array = data.data.user.edge_owner_to_timeline_media.edges;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "instagram-feed row row-cols-1 row-cols-md-2 g-4"
  }, array.map(function (item) {
    var _item$node = item.node,
        id = _item$node.id,
        display_url = _item$node.display_url,
        thumbnail_src = _item$node.thumbnail_src,
        edge_media_to_caption = _item$node.edge_media_to_caption,
        shortcode = _item$node.shortcode;
    var title = edge_media_to_caption.edges[0];
    var imageSrc = imageType !== 'default' ? thumbnail_src : display_url;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col",
      key: id
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "card__figure"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imageSrc,
      alt: "",
      className: "card__image"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card__body"
    }, title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card__title"
    }, title.node.text), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "https://www.instagram.com/p/".concat(shortcode),
      target: "_blank"
    }, "Original Post"))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InstagramFeedView);

/***/ }),

/***/ "./src/Blocks/PostsList/PostsList.js":
/*!*******************************************!*\
  !*** ./src/Blocks/PostsList/PostsList.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useApi */ "./src/hooks/useApi.js");
/* harmony import */ var _components_PostsListView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PostsListView */ "./src/Blocks/PostsList/components/PostsListView.js");
/* harmony import */ var _components_PostsListInspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PostsListInspector */ "./src/Blocks/PostsList/components/PostsListInspector.js");
/* harmony import */ var _Alert_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Alert/Alert */ "./src/Blocks/Alert/Alert.js");







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('snow-blocks/postslist', {
  title: 'Posts List',
  category: 'widgets',
  icon: 'excerpt-view',
  supports: {
    html: false
  },
  attributes: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
    title: {
      type: 'string'
    },
    categoryList: {
      type: 'array',
      default: []
    },
    showImage: {
      type: 'string',
      default: 'yes'
    },
    showDate: {
      type: 'string',
      default: 'yes'
    },
    showText: {
      type: 'string',
      default: 'yes'
    }
  }, "showDate", {
    type: 'string',
    default: 'yes'
  }),
  edit: function edit(props) {
    var _useApi = Object(_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__["default"])('posts', props.attributes.categoryList),
        data = _useApi.data,
        isLoading = _useApi.isLoading,
        isError = _useApi.isError;

    var postData = {
      data: data,
      isLoading: isLoading,
      isError: isError,
      props: props
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_PostsListInspector__WEBPACK_IMPORTED_MODULE_5__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_PostsListView__WEBPACK_IMPORTED_MODULE_4__["default"], postData));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Alert_Alert__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Dynamic Block. Please use a Headless App to render it."
    });
  }
});

/***/ }),

/***/ "./src/Blocks/PostsList/components/PostListEmpty.js":
/*!**********************************************************!*\
  !*** ./src/Blocks/PostsList/components/PostListEmpty.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostListImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostListImage */ "./src/Blocks/PostsList/components/PostListImage.js");



var PostListEmpty = function PostListEmpty(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cardgrid"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card__body"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", {
    className: "card__title"
  }, "No posts"))));
};

/* harmony default export */ __webpack_exports__["default"] = (_PostListImage__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/Blocks/PostsList/components/PostListImage.js":
/*!**********************************************************!*\
  !*** ./src/Blocks/PostsList/components/PostListImage.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useMedia */ "./src/hooks/useMedia.js");



var PostListImage = function PostListImage(props) {
  var _useMedia = Object(_hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__["default"])(props.featured_media),
      media = _useMedia.media,
      isLoading = _useMedia.isLoading;

  if (isLoading) return 'loading ...';
  var imageUrl = media.source_url;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: imageUrl,
    className: "card__image",
    alt: "...",
    width: "200",
    height: "100"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PostListImage);

/***/ }),

/***/ "./src/Blocks/PostsList/components/PostListLoading.js":
/*!************************************************************!*\
  !*** ./src/Blocks/PostsList/components/PostListLoading.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var PostListLoading = function PostListLoading(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cardgrid"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card"
  }, "Loading..."));
};

/* harmony default export */ __webpack_exports__["default"] = (PostListLoading);

/***/ }),

/***/ "./src/Blocks/PostsList/components/PostsListInspector.js":
/*!***************************************************************!*\
  !*** ./src/Blocks/PostsList/components/PostsListInspector.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useCategory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useCategory */ "./src/hooks/useCategory.js");








var PostsListInspector = function PostsListInspector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var showImage = attributes.showImage,
      showText = attributes.showText,
      showDate = attributes.showDate,
      categoryList = attributes.categoryList;

  var _useCategory = Object(_hooks_useCategory__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      categories = _useCategory.categories,
      isLoading = _useCategory.isLoading,
      isError = _useCategory.isError; // Loading States


  if (isLoading) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], null, "Loading ..."));
  if (isError) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], null, "Something is wrong!")); // Checkbox control

  var addCategory = function addCategory(id) {
    return setAttributes({
      categoryList: [id].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(categoryList))
    });
  };

  var removeCategory = function removeCategory(id) {
    return setAttributes({
      categoryList: categoryList.filter(function (item) {
        return item !== id;
      })
    });
  };

  var checkCategory = function checkCategory(id) {
    return categoryList.includes(id);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Filter by Category'),
    initialOpen: true
  }, categories.map(function (category) {
    var id = category.id,
        name = category.name;
    var isSelected = checkCategory(id);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["CheckboxControl"], {
      className: "postslist__checkbox",
      key: id,
      label: name,
      checked: isSelected,
      onChange: function onChange() {
        return isSelected ? removeCategory(id) : addCategory(id);
      }
    });
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Image'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RadioControl"], {
    selected: showImage,
    options: [{
      label: 'Yes',
      value: 'yes'
    }, {
      label: 'No',
      value: 'no'
    }],
    onChange: function onChange(option) {
      setAttributes({
        showImage: option
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Date'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RadioControl"], {
    selected: showDate,
    options: [{
      label: 'Yes',
      value: 'yes'
    }, {
      label: 'No',
      value: 'no'
    }],
    onChange: function onChange(option) {
      setAttributes({
        showDate: option
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Text'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RadioControl"], {
    selected: showText,
    options: [{
      label: 'Yes',
      value: 'yes'
    }, {
      label: 'No',
      value: 'no'
    }],
    onChange: function onChange(option) {
      setAttributes({
        showText: option
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PostsListInspector);

/***/ }),

/***/ "./src/Blocks/PostsList/components/PostsListTitle.js":
/*!***********************************************************!*\
  !*** ./src/Blocks/PostsList/components/PostsListTitle.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var PostsListTitle = function PostsListTitle(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var title = attributes.title;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "postslist__title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PlainText"], {
    placeholder: 'Add Title',
    value: title,
    onChange: function onChange(val) {
      return setAttributes({
        title: val
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PostsListTitle);

/***/ }),

/***/ "./src/Blocks/PostsList/components/PostsListView.js":
/*!**********************************************************!*\
  !*** ./src/Blocks/PostsList/components/PostsListView.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostsListTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostsListTitle */ "./src/Blocks/PostsList/components/PostsListTitle.js");
/* harmony import */ var _PostListLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostListLoading */ "./src/Blocks/PostsList/components/PostListLoading.js");
/* harmony import */ var _PostListImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostListImage */ "./src/Blocks/PostsList/components/PostListImage.js");
/* harmony import */ var _PostListEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostListEmpty */ "./src/Blocks/PostsList/components/PostListEmpty.js");
/* harmony import */ var _functions_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../functions/formatDate */ "./src/functions/formatDate.js");
/* harmony import */ var _Alert_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Alert/Alert */ "./src/Blocks/Alert/Alert.js");








var PostsListsView = function PostsListsView(props) {
  var data = props.data,
      isLoading = props.isLoading,
      isError = props.isError;
  var _props$props$attribut = props.props.attributes,
      showImage = _props$props$attribut.showImage,
      showText = _props$props$attribut.showText,
      showDate = _props$props$attribut.showDate;
  if (isLoading) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_PostListLoading__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  if (isError) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Alert_Alert__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Error! Please active your permalinks."
  });
  var hasData = data.length !== 0;

  if (!hasData) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "postslist"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_PostsListTitle__WEBPACK_IMPORTED_MODULE_1__["default"], props.props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_PostListEmpty__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "postslist"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_PostsListTitle__WEBPACK_IMPORTED_MODULE_1__["default"], props.props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cardgrid"
  }, data.map(function (item) {
    var id = item.id,
        date = item.date,
        title = item.title,
        excerpt = item.excerpt,
        featured_media = item.featured_media,
        link = item.link;
    var hasImage = featured_media !== 0;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: link,
      className: "card",
      key: id
    }, showImage === 'yes' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "card__figure ".concat(!hasImage && "card__figure--no-image")
    }, hasImage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_PostListImage__WEBPACK_IMPORTED_MODULE_3__["default"], item)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card__body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", {
      className: "card__title"
    }, title.rendered || ''), showDate === 'yes' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "card__date"
    }, Object(_functions_formatDate__WEBPACK_IMPORTED_MODULE_5__["default"])(date)), showText === 'yes' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card__text",
      dangerouslySetInnerHTML: {
        __html: excerpt.rendered || ''
      }
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PostsListsView);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/functions/fetcher.js":
/*!**********************************!*\
  !*** ./src/functions/fetcher.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fetcher = function fetcher() {
  return fetch.apply(void 0, arguments).then(function (res) {
    return res.json();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (fetcher);

/***/ }),

/***/ "./src/functions/formatDate.js":
/*!*************************************!*\
  !*** ./src/functions/formatDate.js ***!
  \*************************************/
/*! exports provided: formatDate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/**
 * @name formatDate()
 * @desc returns a formatted date based on options set within the function
 * @param { string } date date to format
 * @return { string } formatted date string
 **/
var formatDate = function formatDate(date, format) {
  var options = {
    weekday: {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    },
    short: {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    },
    date: {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    },
    year: {
      year: 'short'
    },
    month: {
      month: 'short'
    },
    day: {
      day: 'numeric'
    }
  };
  return new Date(date).toLocaleDateString('en-US', options[format || 'weekday']);
};
/* harmony default export */ __webpack_exports__["default"] = (formatDate);

/***/ }),

/***/ "./src/functions/getSlug.js":
/*!**********************************!*\
  !*** ./src/functions/getSlug.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getSlug = function getSlug(link) {
  if (!link.includes('http')) return '';
  var hasPort = new URL(link).port;

  if (hasPort) {
    var domain = new URL(link).host + '/';
    return link.split(domain)[1];
  } else {
    var _domain = new URL(link).hostname + '/';

    return link.split(_domain);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getSlug);

/***/ }),

/***/ "./src/hooks/useApi.js":
/*!*****************************!*\
  !*** ./src/hooks/useApi.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _functions_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/fetcher */ "./src/functions/fetcher.js");



var useApi = function useApi(type, categories) {
  var hasCategories = categories.length !== 0 ? "?categories=".concat(categories.map(function (item) {
    return item;
  })) : '';

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(window.location.origin, "/wp-json/wp/v2/").concat(type).concat(hasCategories), _functions_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"]),
      data = _useSWR.data,
      error = _useSWR.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useApi);

/***/ }),

/***/ "./src/hooks/useCategory.js":
/*!**********************************!*\
  !*** ./src/hooks/useCategory.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _functions_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/fetcher */ "./src/functions/fetcher.js");



var useCategory = function useCategory(id) {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(window.location.origin, "/wp-json/wp/v2/categories/").concat(id || ''), _functions_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"]),
      data = _useSWR.data,
      error = _useSWR.error;

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useCategory);

/***/ }),

/***/ "./src/hooks/useHubSpot.js":
/*!*********************************!*\
  !*** ./src/hooks/useHubSpot.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _functions_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/fetcher */ "./src/functions/fetcher.js");

 // TODO: Fix Cors for real

var useHubSpot = function useHubSpot(hubSpotApiKey) {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])("https://cors-anywhere.herokuapp.com/https://api.hubapi.com/marketing/v3/forms?hapikey=".concat(hubSpotApiKey, "&limit=100"), _functions_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"]),
      data = _useSWR.data,
      error = _useSWR.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useHubSpot);

/***/ }),

/***/ "./src/hooks/useMedia.js":
/*!*******************************!*\
  !*** ./src/hooks/useMedia.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _functions_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/fetcher */ "./src/functions/fetcher.js");



var useMedia = function useMedia(id) {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(window.location.origin, "/wp-json/wp/v2/media/").concat(id), _functions_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"]),
      data = _useSWR.data,
      error = _useSWR.error;

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useMedia);

/***/ }),

/***/ "./src/hooks/useRest.js":
/*!******************************!*\
  !*** ./src/hooks/useRest.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _functions_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/fetcher */ "./src/functions/fetcher.js");



var useRest = function useRest(url) {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(url, _functions_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"]),
      data = _useSWR.data,
      error = _useSWR.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useRest);

/***/ }),

/***/ "./src/hooks/useScript.js":
/*!********************************!*\
  !*** ./src/hooks/useScript.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var postscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postscribe */ "./node_modules/postscribe/dist/postscribe.js");
/* harmony import */ var postscribe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(postscribe__WEBPACK_IMPORTED_MODULE_1__);

 // TODO: Get a better way to render the script without a package

var useScript = function useScript(containerId, script) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    postscribe__WEBPACK_IMPORTED_MODULE_1___default()("#".concat(containerId), script);
  }, []);
};

/* harmony default export */ __webpack_exports__["default"] = (useScript);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blocks/Hero/Hero */ "./src/Blocks/Hero/Hero.js");
/* harmony import */ var _Blocks_PostsList_PostsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blocks/PostsList/PostsList */ "./src/Blocks/PostsList/PostsList.js");
/* harmony import */ var _Blocks_Forms_Forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blocks/Forms/Forms */ "./src/Blocks/Forms/Forms.js");
/* harmony import */ var _Blocks_InstagramFeed_InstagramFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Blocks/InstagramFeed/InstagramFeed */ "./src/Blocks/InstagramFeed/InstagramFeed.js");
/* harmony import */ var _Blocks_HubSpot_Forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Blocks/HubSpot/Forms */ "./src/Blocks/HubSpot/Forms.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
// Blocks




 // Styles




/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map