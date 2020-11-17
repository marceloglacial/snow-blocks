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

/***/ "./node_modules/bootstrap/scss/bootstrap.scss":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/scss/bootstrap.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
    className: "btn btn-".concat(type || 'primary', " ").concat(className)
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HeroInspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroInspector */ "./src/Blocks/Hero/HeroInspector.js");
/* harmony import */ var _HeroMediaLibrary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroMediaLibrary */ "./src/Blocks/Hero/HeroMediaLibrary.js");
/* harmony import */ var _HeroView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeroView */ "./src/Blocks/Hero/HeroView.js");







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('snow-blocks/hero', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hero', 'hero'),
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
    buttonSlug: {
      type: 'string'
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
    var imageUrl = props.attributes.imageUrl;
    if (!imageUrl) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_HeroMediaLibrary__WEBPACK_IMPORTED_MODULE_5__["default"], props);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_HeroInspector__WEBPACK_IMPORTED_MODULE_4__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_HeroView__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      env: true
    }, props)));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_HeroView__WEBPACK_IMPORTED_MODULE_6__["default"], props);
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

/***/ "./src/Blocks/Hero/HeroButton.js":
/*!***************************************!*\
  !*** ./src/Blocks/Hero/HeroButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_getSlug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/getSlug */ "./src/functions/getSlug.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button */ "./src/Blocks/Button/Button.js");





var HeroButton = function HeroButton(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      env = props.env;
  var buttonText = attributes.buttonText,
      buttonLink = attributes.buttonLink,
      buttonSlug = attributes.buttonSlug;
  if (!buttonText && !env) return null;
  if (!env) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: buttonText,
    link: buttonSlug || buttonLink,
    type: 'primary',
    className: 'hero__button'
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero-button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["URLInputButton"], {
    className: "hero-button__link",
    url: buttonLink,
    onChange: function onChange(buttonLink) {
      return setAttributes({
        buttonLink: buttonLink,
        buttonSlug: Object(_functions_getSlug__WEBPACK_IMPORTED_MODULE_2__["default"])(buttonLink)
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    type: "button",
    className: "btn btn-primary hero-button__button"
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

/***/ "./src/Blocks/Hero/HeroCloseButton.js":
/*!********************************************!*\
  !*** ./src/Blocks/Hero/HeroCloseButton.js ***!
  \********************************************/
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
    className: "hero-close container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    type: "button",
    className: "hero-close__button close",
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

/***/ "./src/Blocks/Hero/HeroDescription.js":
/*!********************************************!*\
  !*** ./src/Blocks/Hero/HeroDescription.js ***!
  \********************************************/
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
    className: "lead"
  }, description);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "lead hero__description"
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

/***/ "./src/Blocks/Hero/HeroImage.js":
/*!**************************************!*\
  !*** ./src/Blocks/Hero/HeroImage.js ***!
  \**************************************/
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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: imageUrl,
    alt: imageAlt || '',
    className: imageStyle
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HeroImage);

/***/ }),

/***/ "./src/Blocks/Hero/HeroInspector.js":
/*!******************************************!*\
  !*** ./src/Blocks/Hero/HeroInspector.js ***!
  \******************************************/
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

/***/ "./src/Blocks/Hero/HeroMediaLibrary.js":
/*!*********************************************!*\
  !*** ./src/Blocks/Hero/HeroMediaLibrary.js ***!
  \*********************************************/
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
    className: "hero-upload py-5 d-flex justify-content-center  align-items-center"
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
        className: "btn btn-primary",
        onClick: open
      }, "Open Media Library");
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroMediLibrary);

/***/ }),

/***/ "./src/Blocks/Hero/HeroTitle.js":
/*!**************************************!*\
  !*** ./src/Blocks/Hero/HeroTitle.js ***!
  \**************************************/
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
    className: "hero__title display-4"
  }, title);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
    className: "hero__title display-4"
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

/***/ "./src/Blocks/Hero/HeroView.js":
/*!*************************************!*\
  !*** ./src/Blocks/Hero/HeroView.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeroDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroDescription */ "./src/Blocks/Hero/HeroDescription.js");
/* harmony import */ var _HeroTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroTitle */ "./src/Blocks/Hero/HeroTitle.js");
/* harmony import */ var _HeroImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroImage */ "./src/Blocks/Hero/HeroImage.js");
/* harmony import */ var _HeroCloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroCloseButton */ "./src/Blocks/Hero/HeroCloseButton.js");
/* harmony import */ var _HeroButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroButton */ "./src/Blocks/Hero/HeroButton.js");
/* harmony import */ var _Hero_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Hero.scss */ "./src/Blocks/Hero/Hero.scss");
/* harmony import */ var _Hero_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Hero_scss__WEBPACK_IMPORTED_MODULE_6__);








var HeroView = function HeroView(props) {
  var env = props.env;
  var _props$attributes = props.attributes,
      hasButton = _props$attributes.hasButton,
      heroStyle = _props$attributes.heroStyle,
      imagePosition = _props$attributes.imagePosition;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero hero--".concat(heroStyle, " hero--").concat(imagePosition, " jumbotron jumbotron-fluid")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroTitle__WEBPACK_IMPORTED_MODULE_2__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroDescription__WEBPACK_IMPORTED_MODULE_1__["default"], props), hasButton === 'yes' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroButton__WEBPACK_IMPORTED_MODULE_5__["default"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "hero-figure"
  }, env && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroCloseButton__WEBPACK_IMPORTED_MODULE_4__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HeroImage__WEBPACK_IMPORTED_MODULE_3__["default"], props)), ' ');
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
  var hasHost = new URL(link).host;

  if (hasHost.includes(':')) {
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
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map