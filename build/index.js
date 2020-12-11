/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
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

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HeroInspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HeroInspector */ "./src/Blocks/Hero/components/HeroInspector.js");
/* harmony import */ var _components_HeroMediaLibrary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/HeroMediaLibrary */ "./src/Blocks/Hero/components/HeroMediaLibrary.js");
/* harmony import */ var _components_HeroView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/HeroView */ "./src/Blocks/Hero/components/HeroView.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _functions_getSlug__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../functions/getSlug */ "./src/functions/getSlug.js");
/* harmony import */ var _Hero_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Hero.scss */ "./src/Blocks/Hero/Hero.scss");
/* harmony import */ var _Hero_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Hero_scss__WEBPACK_IMPORTED_MODULE_10__);











Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])('snow-blocks/hero', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Hero', 'hero'),
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
    if (!imageUrl) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_HeroMediaLibrary__WEBPACK_IMPORTED_MODULE_6__["default"], props);

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(buttonSlug),
        _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
        slug = _useState2[0],
        setSlug = _useState2[1];

    Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
      setSlug(Object(_functions_getSlug__WEBPACK_IMPORTED_MODULE_9__["default"])(buttonLink));
    }, [buttonLink]);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_HeroInspector__WEBPACK_IMPORTED_MODULE_5__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_HeroView__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      env: true
    }, props)));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_HeroView__WEBPACK_IMPORTED_MODULE_7__["default"], props);
  }
});

/***/ }),

/***/ "./src/Blocks/Hero/Hero.scss":
/*!***********************************!*\
  !*** ./src/Blocks/Hero/Hero.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["URLInputButton"], {
    className: "hero__link",
    url: buttonLink,
    onChange: function onChange(buttonLink) {
      return setAttributes({
        buttonLink: buttonLink
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PlainText"], {
    placeholder: 'Add Title',
    value: buttonText,
    className: "btn btn--primary",
    onChange: function onChange(val) {
      return setAttributes({
        buttonText: val
      });
    }
  }));
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
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Test"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroTitle__WEBPACK_IMPORTED_MODULE_2__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroDescription__WEBPACK_IMPORTED_MODULE_1__["default"], props), hasButton === 'yes' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroButton__WEBPACK_IMPORTED_MODULE_5__["default"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero__figure"
  }, env && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroCloseButton__WEBPACK_IMPORTED_MODULE_4__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroImage__WEBPACK_IMPORTED_MODULE_3__["default"], props))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroView);

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blocks/Hero/Hero */ "./src/Blocks/Hero/Hero.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map