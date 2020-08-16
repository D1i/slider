this["mySlider"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./slider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!./style.css":
/*!********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*СТИЛИ ДЛЯ СЛАЙДЕРА*/\n\n.slider_1S_n {\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.minWidthAndMinHeightSlider_QXX0 {\n    min-width: 500px;\n    min-height: 250px;\n}\n\n/*_________________________*/\n/*#########################*/\n/*СТИЛИ ДЛЯ КНОПОК СЛАЙДЕРА*/\n\n.button_3w-h {\n    outline: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.buttonShiftSlides_1kon {\n    width: 30px;\n    height: 60px;\n    margin: 10px;\n}\n\n.rightButton_tcEx {\n    transform: rotate(180deg);\n}\n\n.inputPause_pZs3 {\n    height: 40px;\n    transition-duration: 0.2s;\n    background-color: transparent;\n    margin: auto 0 15px 0;\n}\n\n.inputPauseNotActive_tred {\n    width: 10px;\n    border: 0 solid transparent;\n    border-right: 5px Solid #9e9e9e;\n    border-left: 5px Solid #9e9e9e;\n}\n\n.inputPauseActive_2IP3 {\n    width: 0;\n    border: 20px solid transparent;\n    border-right: 0 Solid transparent;\n    border-left: 20px solid #9e9e9e;\n    margin-right: -10px;\n}\n\n/*_________________________*/\n/*#########################*/\n/*СТИЛИ ДЛЯ СЛАЙДОВ*/\n\n.slides_3u3Y {\n    position: absolute;\n    pointer-events: none;\n    width: 100%;\n    overflow: hidden; /*Это для div*/\n}\n\n.hideSlide_uSpb {\n    display: none;\n}\n\n.centerSlide_1UNU {\n    z-index: 1;\n}\n\n.slideShiftRight_pwPl {\n    transform: translateX(100%);\n}\n\n.slideShiftLeft_2CYh {\n    transform: translateX(-100%);\n}\n\n/*_________________________*/", "",{"version":3,"sources":["style.css"],"names":[],"mappings":"AAAA,qBAAqB;;AAErB;IACI,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA,4BAA4B;AAC5B,4BAA4B;AAC5B,4BAA4B;;AAE5B;IACI,aAAa;IACb,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,6BAA6B;IAC7B,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,2BAA2B;IAC3B,+BAA+B;IAC/B,8BAA8B;AAClC;;AAEA;IACI,QAAQ;IACR,8BAA8B;IAC9B,iCAAiC;IACjC,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA,4BAA4B;AAC5B,4BAA4B;AAC5B,oBAAoB;;AAEpB;IACI,kBAAkB;IAClB,oBAAoB;IACpB,WAAW;IACX,gBAAgB,EAAE,cAAc;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,4BAA4B;AAChC;;AAEA,4BAA4B","file":"style.css","sourcesContent":["/*СТИЛИ ДЛЯ СЛАЙДЕРА*/\n\n.slider {\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.minWidthAndMinHeightSlider {\n    min-width: 500px;\n    min-height: 250px;\n}\n\n/*_________________________*/\n/*#########################*/\n/*СТИЛИ ДЛЯ КНОПОК СЛАЙДЕРА*/\n\n.button {\n    outline: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.buttonShiftSlides {\n    width: 30px;\n    height: 60px;\n    margin: 10px;\n}\n\n.rightButton {\n    transform: rotate(180deg);\n}\n\n.inputPause {\n    height: 40px;\n    transition-duration: 0.2s;\n    background-color: transparent;\n    margin: auto 0 15px 0;\n}\n\n.inputPauseNotActive {\n    width: 10px;\n    border: 0 solid transparent;\n    border-right: 5px Solid #9e9e9e;\n    border-left: 5px Solid #9e9e9e;\n}\n\n.inputPauseActive {\n    width: 0;\n    border: 20px solid transparent;\n    border-right: 0 Solid transparent;\n    border-left: 20px solid #9e9e9e;\n    margin-right: -10px;\n}\n\n/*_________________________*/\n/*#########################*/\n/*СТИЛИ ДЛЯ СЛАЙДОВ*/\n\n.slides {\n    position: absolute;\n    pointer-events: none;\n    width: 100%;\n    overflow: hidden; /*Это для div*/\n}\n\n.hideSlide {\n    display: none;\n}\n\n.centerSlide {\n    z-index: 1;\n}\n\n.slideShiftRight {\n    transform: translateX(100%);\n}\n\n.slideShiftLeft {\n    transform: translateX(-100%);\n}\n\n/*_________________________*/"]}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"slider": "slider_1S_n",
	"minWidthAndMinHeightSlider": "minWidthAndMinHeightSlider_QXX0",
	"button": "button_3w-h",
	"buttonShiftSlides": "buttonShiftSlides_1kon",
	"rightButton": "rightButton_tcEx",
	"inputPause": "inputPause_pZs3",
	"inputPauseNotActive": "inputPauseNotActive_tred",
	"inputPauseActive": "inputPauseActive_2IP3",
	"slides": "slides_3u3Y",
	"hideSlide": "hideSlide_uSpb",
	"centerSlide": "centerSlide_1UNU",
	"slideShiftRight": "slideShiftRight_pwPl",
	"slideShiftLeft": "slideShiftLeft_2CYh"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/*!*********************************************************!*\
  !*** ../node_modules/webpack/buildin/harmony-module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./addButtonControl.js":
/*!*****************************!*\
  !*** ./addButtonControl.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.svg */ "./arrow.svg");
/* harmony import */ var _arrow_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_arrow_svg__WEBPACK_IMPORTED_MODULE_1__);





function addButtonControl(slider, buttonControl, buttonDefaultStyles) {
  function createButton() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        type = _ref.type,
        _ref$buttonInnerNode = _ref.buttonInnerNode,
        buttonInnerNode = _ref$buttonInnerNode === void 0 ? null : _ref$buttonInnerNode,
        name = _ref.name,
        alt = _ref.alt,
        _ref$classList = _ref.classList,
        classList = _ref$classList === void 0 ? [] : _ref$classList;

    var button = null;

    if (buttonInnerNode === null) {
      button = document.createElement("input");
      button.setAttribute("type", type);
      button.setAttribute("name", name);
    } else {
      button = document.createElement("div");
      button.setAttribute("name", "PSEUDO_BUTTON ".concat(name));
      button.innerHTML = _arrow_svg__WEBPACK_IMPORTED_MODULE_1___default.a;
    }

    classList.forEach(function (value) {
      return button.classList.add(value);
    });
    return button;
  }

  function crateButtonControl(buttonDefaultStyles) {
    if (buttonDefaultStyles) {
      buttonControlElementsList.rightButtonControl = createButton({
        type: "button",
        buttonInnerNode: _arrow_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
        name: "arrowRight",
        alt: "arrow right",
        classList: [_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.rightButton, _style_css__WEBPACK_IMPORTED_MODULE_0___default.a.button, _style_css__WEBPACK_IMPORTED_MODULE_0___default.a.buttonShiftSlides]
      });
      slider.append(buttonControlElementsList.rightButtonControl);
      buttonControlElementsList.pauseButtonControl = createButton({
        type: "button",
        name: "pause",
        alt: "input pause",
        classList: [_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.inputPauseNotActive, _style_css__WEBPACK_IMPORTED_MODULE_0___default.a.inputPause, _style_css__WEBPACK_IMPORTED_MODULE_0___default.a.button]
      });
      slider.append(buttonControlElementsList.pauseButtonControl);
      buttonControlElementsList.leftButtonControl = createButton({
        type: "button",
        buttonInnerNode: _arrow_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
        name: "arrowLeft",
        alt: "arrow left",
        classList: [_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.button, _style_css__WEBPACK_IMPORTED_MODULE_0___default.a.buttonShiftSlides]
      });
      slider.append(buttonControlElementsList.leftButtonControl);
    } else {
      buttonControlElementsList.rightButtonControl = createButton({
        type: "button",
        name: "arrowRight",
        alt: "arrow right"
      });
      slider.append(buttonControlElementsList.rightButtonControl);
      buttonControlElementsList.pauseButtonControl = createButton({
        type: "button",
        name: "pause",
        alt: "input pause"
      });
      slider.append(buttonControlElementsList.pauseButtonControl);
      buttonControlElementsList.leftButtonControl = createButton({
        type: "button",
        name: "arrowLeft",
        alt: "arrow left"
      });
      slider.append(buttonControlElementsList.leftButtonControl);
    }
  }

  var buttonControlElementsList = {
    leftButtonControl: null,
    rightButtonControl: null,
    pauseButtonControl: null
  };

  if (buttonControl) {
    crateButtonControl(buttonDefaultStyles);
  }

  return buttonControlElementsList;
}

/* harmony default export */ __webpack_exports__["default"] = (addButtonControl);

/***/ }),

/***/ "./addingMissingSlides.js":
/*!********************************!*\
  !*** ./addingMissingSlides.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function addingMissingSlides(slidesElementsArray) {
  if (slidesElementsArray.length === 0) {
    return null;
  }

  if (slidesElementsArray.length === 1) {
    var firstCloneElement = slidesElementsArray[0].cloneNode(true);
    var secondCloneElement = firstCloneElement.cloneNode(true);
    slidesElementsArray.push(firstCloneElement);
    slider.append(firstCloneElement);
    slidesElementsArray.push(secondCloneElement);
    slider.append(secondCloneElement);
  }

  if (slidesElementsArray.length === 2) {
    slidesElementsArray.forEach(function (value) {
      var cloneElement = value.cloneNode(true);
      slidesElementsArray.push(cloneElement);
      slider.append(cloneElement);
    });
  }

  return slidesElementsArray;
}

/* harmony default export */ __webpack_exports__["default"] = (addingMissingSlides);

/***/ }),

/***/ "./arrow.svg":
/*!*******************!*\
  !*** ./arrow.svg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 26 50\"><defs><clipPath id=\"clip-arrow\"><rect width=\"26\" height=\"50\"></rect></clipPath></defs><g id=\"arrow\" clip-path=\"url(#clip-arrow)\"><rect width=\"26\" height=\"50\" fill=\"rgba(255,255,255,0)\"></rect><path id=\"Контур_1\" data-name=\"Контур 1\" d=\"M10.665,5.026,33.873,28.234,10.665,51.442\" transform=\"translate(-9.502 -4)\" fill=\"none\" stroke=\"#707070\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"></path></g></svg>"

/***/ }),

/***/ "./getDOMDate.js":
/*!***********************!*\
  !*** ./getDOMDate.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function getDOMDate(idElement) {
  var slider = document.getElementById(idElement);

  if (slider === null) {
    console.log('%c%s', 'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;', "slider | id ".concat(idElement, " does not exist"));
    return {
      hasError: true
    };
  }

  function getSlidesArray(parent) {
    return Array.from(parent.children).map(function (value) {
      if (value.tagName !== "INPUT") {
        return value;
      }
    });
  }

  var slidesElementsArray = getSlidesArray(slider);

  if (slidesElementsArray === null) {
    console.log('%c%s', 'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;', "slider | container '#".concat(idElement, "' is empty"));
    return {
      hasError: true
    };
  } //В отдельный файл. Оставить, только _currentSlide


  var objectSliderVisibleSlides = {
    _nextSlide: slidesElementsArray.length - 1,
    _currentSlide: 0,
    _prevSlide: 1,

    get getCurrent() {
      return this._currentSlide;
    },

    get getNext() {
      return this._nextSlide;
    },

    get getPrev() {
      return this._prevSlide;
    },

    goNext: function goNext() {
      ++this._nextSlide;
      ++this._currentSlide;
      ++this._prevSlide;

      switch (slidesElementsArray.length) {
        case this._nextSlide:
          this._nextSlide = 0;
          break;

        case this._currentSlide:
          this._currentSlide = 0;
          break;

        case this._prevSlide:
          this._prevSlide = 0;
          break;
      }
    },
    goPrev: function goPrev() {
      --this._nextSlide;
      --this._currentSlide;
      --this._prevSlide;

      switch (-1) {
        case this._nextSlide:
          this._nextSlide = slidesElementsArray.length - 1;
          break;

        case this._currentSlide:
          this._currentSlide = slidesElementsArray.length - 1;
          break;

        case this._prevSlide:
          this._prevSlide = slidesElementsArray.length - 1;
          break;
      }
    }
  };
  var sliderWidth = slider.clientWidth;
  var hasError = false;
  return {
    sliderElement: slider,
    slidesElementsArray_notProcessed: slidesElementsArray,
    objectSliderVisibleSlides: objectSliderVisibleSlides,
    sliderWidth: sliderWidth,
    hasError: hasError
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getDOMDate);

/***/ }),

/***/ "./setSliderStyles.js":
/*!****************************!*\
  !*** ./setSliderStyles.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);




function setSliderStyles(slider, setDefaultMinimumSizes) {
  slider.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.slider);

  if (setDefaultMinimumSizes) {
    slider.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.minWidthAndMinHeightSlider);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (setSliderStyles);

/***/ }),

/***/ "./setSlidesStyles.js":
/*!****************************!*\
  !*** ./setSlidesStyles.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);




function setSlidesStyle(slidesElementsArray) {
  function automaticSettingPictureWidth() {
    slidesElementsArray.forEach(function (value) {
      value.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.slides);
    });
  }

  automaticSettingPictureWidth(slidesElementsArray);
}

/* harmony default export */ __webpack_exports__["default"] = (setSlidesStyle);

/***/ }),

/***/ "./slider.js":
/*!*******************!*\
  !*** ./slider.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _getDOMDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDOMDate.js */ "./getDOMDate.js");
/* harmony import */ var _addingMissingSlides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addingMissingSlides.js */ "./addingMissingSlides.js");
/* harmony import */ var _addButtonControl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addButtonControl.js */ "./addButtonControl.js");
/* harmony import */ var _setSliderStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setSliderStyles.js */ "./setSliderStyles.js");
/* harmony import */ var _setSlidesStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setSlidesStyles.js */ "./setSlidesStyles.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
 //Периименовать файл, в index.js








function createSlider(idElement) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === void 0 ? true : _ref$autoplay,
      _ref$timeOfChangingSl = _ref.timeOfChangingSlides,
      timeOfChangingSlides = _ref$timeOfChangingSl === void 0 ? 5000 : _ref$timeOfChangingSl,
      _ref$timeToChangeSlid = _ref.timeToChangeSlides,
      timeToChangeSlides = _ref$timeToChangeSlid === void 0 ? 1000 : _ref$timeToChangeSlid,
      _ref$transitionTiming = _ref.transitionTimingFunctionName,
      transitionTimingFunctionName = _ref$transitionTiming === void 0 ? "linear" : _ref$transitionTiming,
      _ref$buttonControl = _ref.buttonControl,
      buttonControl = _ref$buttonControl === void 0 ? true : _ref$buttonControl,
      _ref$touchmove = _ref.touchmove,
      touchmove = _ref$touchmove === void 0 ? true : _ref$touchmove,
      _ref$buttonDefaultSty = _ref.buttonDefaultStyles,
      buttonDefaultStyles = _ref$buttonDefaultSty === void 0 ? true : _ref$buttonDefaultSty,
      _ref$setDefaultMinimu = _ref.setDefaultMinimumSizes,
      setDefaultMinimumSizes = _ref$setDefaultMinimu === void 0 ? true : _ref$setDefaultMinimu;

  function setSlidesDisplay() {
    slidesElementsArray.forEach(function (value) {
      value.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.hideSlide);
    });
    slidesElementsArray[objectSliderVisibleSlides.getNext].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.hideSlide);
    slidesElementsArray[objectSliderVisibleSlides.getCurrent].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.hideSlide);
    slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.hideSlide);
  }

  function positioningSlides() {
    slidesElementsArray[objectSliderVisibleSlides.getNext].classList.add(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.slideShiftRight);
    slidesElementsArray[objectSliderVisibleSlides.getNext].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.slideShiftLeft);
    slidesElementsArray[objectSliderVisibleSlides.getCurrent].classList.add(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.centerSlide);
    slidesElementsArray[objectSliderVisibleSlides.getCurrent].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.slideShiftRight, _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.slideShiftLeft);
    slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.add(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.slideShiftLeft);
    slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.add(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.slideShiftRight);
  }

  function switchToLeftSlide() {
    objectSliderVisibleSlides.goNext();
    setSlidesDisplay();
    positioningSlides();
  }

  function switchToRightSlide() {
    objectSliderVisibleSlides.goPrev();
    setSlidesDisplay();
    positioningSlides();
  }

  function moveSliderTouch(event) {
    if (switchSlideBlocked) {
      return;
    }

    var clientX = event.touches[0].clientX;
    swipeLength = 0;
    swipeLength += clientX - gestureStartingPositionX;

    if (swipeLength > sliderWidth / 3) {
      leftSliderShift();
    }

    if (swipeLength < -sliderWidth / 3) {
      rightSliderShift();
    }
  }

  function touchScrollBlocker(event) {
    if (event.touches.length === 1) {
      event.preventDefault();
    }
  }

  function startAutoplay(timeOfChangingSlides) {
    autolpayTimer = setInterval(function () {
      return rightSliderShift();
    }, timeOfChangingSlides);
  }

  function stopAutoplay() {
    clearInterval(autolpayTimer);
  }

  function autoplayReset(timeOfChangingSlides) {
    stopAutoplay(autolpayTimer);
    startAutoplay(timeOfChangingSlides);
  }

  function pauseSwitch() {
    if (!autoplay) {
      autoplayReset(timeOfChangingSlides);
      buttonControlElementsList.pauseButtonControl.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.inputPauseNotActive);
      buttonControlElementsList.pauseButtonControl.classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.inputPauseActive);
    } else {
      stopAutoplay();
      buttonControlElementsList.pauseButtonControl.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.inputPauseActive);
      buttonControlElementsList.pauseButtonControl.classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.inputPauseNotActive);
    }

    autoplay = !autoplay;
  }

  function pseudoTouchMove(event) {
    if (hasPseudoTouchMouse) {
      var pseudoEvent = {
        touches: [{
          clientX: 0
        }]
      };
      pseudoEvent.touches[0].clientX = event.clientX;
      moveSliderTouch(pseudoEvent);
    }
  }

  function pseudoTouchMoveStart(event) {
    hasPseudoTouchMouse = true;
    gestureStartingPositionX = event.clientX;
    stopAutoplay();
  }

  function pseudoTouchMoveEnd() {
    hasPseudoTouchMouse = false;
    swipeLength = 0;

    if (autoplay) {
      autoplayReset(timeOfChangingSlides);
    }
  }

  function rightSliderShift() {
    stopAutoplay();
    switchSlideBlocked = true;
    switchToRightSlide();
    slidesElementsArray[objectSliderVisibleSlides.getNext].classList.add(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.hideSlide);
    setTimeout(function () {
      autoplayReset(timeOfChangingSlides);
      switchSlideBlocked = false;
      slidesElementsArray[objectSliderVisibleSlides.getNext].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.hideSlide);
    }, timeToChangeSlides);
  }

  function leftSliderShift() {
    stopAutoplay();
    switchSlideBlocked = true;
    switchToLeftSlide();
    slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.add(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.hideSlide);
    setTimeout(function () {
      autoplayReset(timeOfChangingSlides);
      switchSlideBlocked = false;
      slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.hideSlide);
    }, timeToChangeSlides);
  } //Убрать в init все, что запускается разу, в том числе и создание переменных.


  function init() {
    if (timeOfChangingSlides < 4) {
      timeOfChangingSlides = 4;
    }

    if (timeOfChangingSlides < timeToChangeSlides / 100 * 120) {
      timeToChangeSlides = timeToChangeSlides / 100 * 80;
    }

    setSlidesDisplay();

    if (autoplay) {
      startAutoplay(timeOfChangingSlides);
    }

    slidesElementsArray.forEach(function (value) {
      value.style.transitionDuration = "".concat(timeToChangeSlides, "ms");
      value.style.transitionTimingFunction = transitionTimingFunctionName;
    });
  }

  var gestureStartingPositionX = 0;
  var swipeLength = 0;
  var switchSlideBlocked = false;
  var autolpayTimer = null;
  var hasPseudoTouchMouse = false;

  var _getDOMDate = Object(_getDOMDate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(idElement),
      sliderElement = _getDOMDate.sliderElement,
      slidesElementsArray_notProcessed = _getDOMDate.slidesElementsArray_notProcessed,
      objectSliderVisibleSlides = _getDOMDate.objectSliderVisibleSlides,
      sliderWidth = _getDOMDate.sliderWidth,
      hasError = _getDOMDate.hasError;

  if (hasError) {
    return;
  }

  var slidesElementsArray = Object(_addingMissingSlides_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slidesElementsArray_notProcessed);
  positioningSlides();
  var buttonControlElementsList = Object(_addButtonControl_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sliderElement, buttonControl, buttonDefaultStyles);
  Object(_setSliderStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"])(sliderElement, setDefaultMinimumSizes);
  Object(_setSlidesStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"])(slidesElementsArray);
  init();

  if (touchmove) {
    sliderElement.addEventListener("touchstart", function (event) {
      gestureStartingPositionX = event.touches[0].clientX;
      stopAutoplay();
    });
    sliderElement.addEventListener("touchmove", moveSliderTouch);
    sliderElement.addEventListener("touchend", function () {
      swipeLength = 0;
      autoplayReset(timeOfChangingSlides);
    });
    sliderElement.addEventListener("touchmove", touchScrollBlocker);
    sliderElement.addEventListener("mousedown", pseudoTouchMoveStart);
    sliderElement.addEventListener("mousemove", pseudoTouchMove);
    sliderElement.addEventListener("mouseup", pseudoTouchMoveEnd);
    sliderElement.addEventListener("mouseleave", pseudoTouchMoveEnd);
  }

  if (buttonControl) {
    buttonControlElementsList.rightButtonControl.addEventListener("click", function () {
      if (!switchSlideBlocked) {
        leftSliderShift();
      }
    });
    buttonControlElementsList.leftButtonControl.addEventListener("click", function () {
      if (!switchSlideBlocked) {
        rightSliderShift();
      }
    });

    if (autoplay) {
      buttonControlElementsList.pauseButtonControl.addEventListener("click", pauseSwitch);
    }
  }
}

module.exports = createSlider;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ "../node_modules/css-loader/dist/cjs.js?!./style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teVNsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teVNsaWRlci8uL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215U2xpZGVyLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovL215U2xpZGVyLy4vYWRkQnV0dG9uQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uL2FkZGluZ01pc3NpbmdTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvLi9hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvLi9nZXRET01EYXRlLmpzIiwid2VicGFjazovL215U2xpZGVyLy4vc2V0U2xpZGVyU3R5bGVzLmpzIiwid2VicGFjazovL215U2xpZGVyLy4vc2V0U2xpZGVzU3R5bGVzLmpzIiwid2VicGFjazovL215U2xpZGVyLy4vc2xpZGVyLmpzIiwid2VicGFjazovL215U2xpZGVyLy4vc3R5bGUuY3NzPzUzZTciXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwib3JpZ2luYWxNb2R1bGUiLCJ3ZWJwYWNrUG9seWZpbGwiLCJPYmplY3QiLCJjcmVhdGUiLCJjaGlsZHJlbiIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImwiLCJhZGRCdXR0b25Db250cm9sIiwic2xpZGVyIiwiYnV0dG9uQ29udHJvbCIsImJ1dHRvbkRlZmF1bHRTdHlsZXMiLCJjcmVhdGVCdXR0b24iLCJ0eXBlIiwiYnV0dG9uSW5uZXJOb2RlIiwibmFtZSIsImFsdCIsImNsYXNzTGlzdCIsImJ1dHRvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFycm93T2ZCdXR0b24iLCJmb3JFYWNoIiwidmFsdWUiLCJhZGQiLCJjcmF0ZUJ1dHRvbkNvbnRyb2wiLCJidXR0b25Db250cm9sRWxlbWVudHNMaXN0IiwicmlnaHRCdXR0b25Db250cm9sIiwic3R5bGVzIiwicmlnaHRCdXR0b24iLCJidXR0b25TaGlmdFNsaWRlcyIsImFwcGVuZCIsInBhdXNlQnV0dG9uQ29udHJvbCIsImlucHV0UGF1c2VOb3RBY3RpdmUiLCJpbnB1dFBhdXNlIiwibGVmdEJ1dHRvbkNvbnRyb2wiLCJhZGRpbmdNaXNzaW5nU2xpZGVzIiwic2xpZGVzRWxlbWVudHNBcnJheSIsImZpcnN0Q2xvbmVFbGVtZW50IiwiY2xvbmVOb2RlIiwic2Vjb25kQ2xvbmVFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiZ2V0RE9NRGF0ZSIsImlkRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImhhc0Vycm9yIiwiZ2V0U2xpZGVzQXJyYXkiLCJwYXJlbnQiLCJBcnJheSIsImZyb20iLCJ0YWdOYW1lIiwib2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyIsIl9uZXh0U2xpZGUiLCJfY3VycmVudFNsaWRlIiwiX3ByZXZTbGlkZSIsImdldEN1cnJlbnQiLCJnZXROZXh0IiwiZ2V0UHJldiIsImdvTmV4dCIsImdvUHJldiIsInNsaWRlcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzbGlkZXJFbGVtZW50Iiwic2xpZGVzRWxlbWVudHNBcnJheV9ub3RQcm9jZXNzZWQiLCJzZXRTbGlkZXJTdHlsZXMiLCJzZXREZWZhdWx0TWluaW11bVNpemVzIiwibWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXIiLCJzZXRTbGlkZXNTdHlsZSIsImF1dG9tYXRpY1NldHRpbmdQaWN0dXJlV2lkdGgiLCJzbGlkZXMiLCJjcmVhdGVTbGlkZXIiLCJhdXRvcGxheSIsInRpbWVPZkNoYW5naW5nU2xpZGVzIiwidGltZVRvQ2hhbmdlU2xpZGVzIiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZSIsInRvdWNobW92ZSIsInNldFNsaWRlc0Rpc3BsYXkiLCJoaWRlU2xpZGUiLCJyZW1vdmUiLCJwb3NpdGlvbmluZ1NsaWRlcyIsInNsaWRlU2hpZnRSaWdodCIsInNsaWRlU2hpZnRMZWZ0IiwiY2VudGVyU2xpZGUiLCJzd2l0Y2hUb0xlZnRTbGlkZSIsInN3aXRjaFRvUmlnaHRTbGlkZSIsIm1vdmVTbGlkZXJUb3VjaCIsImV2ZW50Iiwic3dpdGNoU2xpZGVCbG9ja2VkIiwiY2xpZW50WCIsInRvdWNoZXMiLCJzd2lwZUxlbmd0aCIsImdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCIsImxlZnRTbGlkZXJTaGlmdCIsInJpZ2h0U2xpZGVyU2hpZnQiLCJ0b3VjaFNjcm9sbEJsb2NrZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXJ0QXV0b3BsYXkiLCJhdXRvbHBheVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJzdG9wQXV0b3BsYXkiLCJjbGVhckludGVydmFsIiwiYXV0b3BsYXlSZXNldCIsInBhdXNlU3dpdGNoIiwiaW5wdXRQYXVzZUFjdGl2ZSIsInBzZXVkb1RvdWNoTW92ZSIsImhhc1BzZXVkb1RvdWNoTW91c2UiLCJwc2V1ZG9FdmVudCIsInBzZXVkb1RvdWNoTW92ZVN0YXJ0IiwicHNldWRvVG91Y2hNb3ZlRW5kIiwic2V0VGltZW91dCIsImluaXQiLCJzdHlsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsInNldFNsaWRlc1N0eWxlcyIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUywyQ0FBMkMseUJBQXlCLHVCQUF1QixvQkFBb0IscUNBQXFDLDBCQUEwQixnQ0FBZ0MsNkJBQTZCLDRCQUE0Qix3QkFBd0IsR0FBRyxzQ0FBc0MsdUJBQXVCLHdCQUF3QixHQUFHLGlIQUFpSCxvQkFBb0Isa0NBQWtD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ZGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2xpZGVyLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0JXQoNCQKi9cXG5cXG4uc2xpZGVyXzFTX24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyX1FYWDAge1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcbi8q0KHQotCY0JvQmCDQlNCb0K8g0JrQndCe0J/QntCaINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5idXR0b25fM3ctaCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uYnV0dG9uU2hpZnRTbGlkZXNfMWtvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnJpZ2h0QnV0dG9uX3RjRXgge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uaW5wdXRQYXVzZV9wWnMzIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiBhdXRvIDAgMTVweCAwO1xcbn1cXG5cXG4uaW5wdXRQYXVzZU5vdEFjdGl2ZV90cmVkIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggU29saWQgIzllOWU5ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbn1cXG5cXG4uaW5wdXRQYXVzZUFjdGl2ZV8ySVAzIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwIFNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjOWU5ZTllO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0J7QkiovXFxuXFxuLnNsaWRlc18zdTNZIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8q0K3RgtC+INC00LvRjyBkaXYqL1xcbn1cXG5cXG4uaGlkZVNsaWRlX3VTcGIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2VudGVyU2xpZGVfMVVOVSB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zbGlkZVNoaWZ0UmlnaHRfcHdQbCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG59XFxuXFxuLnNsaWRlU2hpZnRMZWZ0XzJDWWgge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7O0FBRXJCO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNEJBQTRCOztBQUU1QjtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsb0JBQW9COztBQUVwQjtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGdCQUFnQixFQUFFLGNBQWM7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBLDRCQUE0QlwiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8q0KHQotCY0JvQmCDQlNCb0K8g0KHQm9CQ0JnQlNCV0KDQkCovXFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXIge1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcbi8q0KHQotCY0JvQmCDQlNCb0K8g0JrQndCe0J/QntCaINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5idXR0b24ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmJ1dHRvblNoaWZ0U2xpZGVzIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHRCdXR0b24ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uaW5wdXRQYXVzZSB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogYXV0byAwIDE1cHggMDtcXG59XFxuXFxuLmlucHV0UGF1c2VOb3RBY3RpdmUge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbiAgICBib3JkZXItbGVmdDogNXB4IFNvbGlkICM5ZTllOWU7XFxufVxcblxcbi5pbnB1dFBhdXNlQWN0aXZlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwIFNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjOWU5ZTllO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0J7QkiovXFxuXFxuLnNsaWRlcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKtCt0YLQviDQtNC70Y8gZGl2Ki9cXG59XFxuXFxuLmhpZGVTbGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jZW50ZXJTbGlkZSB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zbGlkZVNoaWZ0UmlnaHQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxufVxcblxcbi5zbGlkZVNoaWZ0TGVmdCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXCJdfV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNsaWRlclwiOiBcInNsaWRlcl8xU19uXCIsXG5cdFwibWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXJcIjogXCJtaW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlcl9RWFgwXCIsXG5cdFwiYnV0dG9uXCI6IFwiYnV0dG9uXzN3LWhcIixcblx0XCJidXR0b25TaGlmdFNsaWRlc1wiOiBcImJ1dHRvblNoaWZ0U2xpZGVzXzFrb25cIixcblx0XCJyaWdodEJ1dHRvblwiOiBcInJpZ2h0QnV0dG9uX3RjRXhcIixcblx0XCJpbnB1dFBhdXNlXCI6IFwiaW5wdXRQYXVzZV9wWnMzXCIsXG5cdFwiaW5wdXRQYXVzZU5vdEFjdGl2ZVwiOiBcImlucHV0UGF1c2VOb3RBY3RpdmVfdHJlZFwiLFxuXHRcImlucHV0UGF1c2VBY3RpdmVcIjogXCJpbnB1dFBhdXNlQWN0aXZlXzJJUDNcIixcblx0XCJzbGlkZXNcIjogXCJzbGlkZXNfM3UzWVwiLFxuXHRcImhpZGVTbGlkZVwiOiBcImhpZGVTbGlkZV91U3BiXCIsXG5cdFwiY2VudGVyU2xpZGVcIjogXCJjZW50ZXJTbGlkZV8xVU5VXCIsXG5cdFwic2xpZGVTaGlmdFJpZ2h0XCI6IFwic2xpZGVTaGlmdFJpZ2h0X3B3UGxcIixcblx0XCJzbGlkZVNoaWZ0TGVmdFwiOiBcInNsaWRlU2hpZnRMZWZ0XzJDWWhcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgYXJyb3dPZkJ1dHRvbiBmcm9tICcuL2Fycm93LnN2ZydcclxuXHJcbmZ1bmN0aW9uIGFkZEJ1dHRvbkNvbnRyb2woc2xpZGVyLCBidXR0b25Db250cm9sLCBidXR0b25EZWZhdWx0U3R5bGVzKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHt0eXBlLCBidXR0b25Jbm5lck5vZGUgPSBudWxsLCBuYW1lLCBhbHQsIGNsYXNzTGlzdCA9IFtdfSA9IHt9KSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgaWYgKGJ1dHRvbklubmVyTm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgUFNFVURPX0JVVFRPTiAke25hbWV9YCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBhcnJvd09mQnV0dG9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzc0xpc3QuZm9yRWFjaCh2YWx1ZSA9PiBidXR0b24uY2xhc3NMaXN0LmFkZCh2YWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JhdGVCdXR0b25Db250cm9sKGJ1dHRvbkRlZmF1bHRTdHlsZXMpIHtcclxuICAgICAgICBpZiAoYnV0dG9uRGVmYXVsdFN0eWxlcykge1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25Jbm5lck5vZGU6IGFycm93T2ZCdXR0b24sXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd1JpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbc3R5bGVzLnJpZ2h0QnV0dG9uLCBzdHlsZXMuYnV0dG9uLCBzdHlsZXMuYnV0dG9uU2hpZnRTbGlkZXNdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiaW5wdXQgcGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtzdHlsZXMuaW5wdXRQYXVzZU5vdEFjdGl2ZSwgc3R5bGVzLmlucHV0UGF1c2UsIHN0eWxlcy5idXR0b25dXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uSW5uZXJOb2RlOiBhcnJvd09mQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IGxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtzdHlsZXMuYnV0dG9uLCBzdHlsZXMuYnV0dG9uU2hpZnRTbGlkZXNdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93UmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJpbnB1dCBwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IGxlZnRcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXR0b25Db250cm9sRWxlbWVudHNMaXN0ID0ge1xyXG4gICAgICAgIGxlZnRCdXR0b25Db250cm9sOiBudWxsLFxyXG4gICAgICAgIHJpZ2h0QnV0dG9uQ29udHJvbDogbnVsbCxcclxuICAgICAgICBwYXVzZUJ1dHRvbkNvbnRyb2w6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGJ1dHRvbkNvbnRyb2wpIHtcclxuICAgICAgICBjcmF0ZUJ1dHRvbkNvbnRyb2woYnV0dG9uRGVmYXVsdFN0eWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEJ1dHRvbkNvbnRyb2w7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBhZGRpbmdNaXNzaW5nU2xpZGVzKHNsaWRlc0VsZW1lbnRzQXJyYXkpIHtcclxuICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0Q2xvbmVFbGVtZW50ID0gc2xpZGVzRWxlbWVudHNBcnJheVswXS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHNlY29uZENsb25lRWxlbWVudCA9IGZpcnN0Q2xvbmVFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LnB1c2goZmlyc3RDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgIHNsaWRlci5hcHBlbmQoZmlyc3RDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkucHVzaChzZWNvbmRDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgIHNsaWRlci5hcHBlbmQoc2Vjb25kQ2xvbmVFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZUVsZW1lbnQgPSB2YWx1ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkucHVzaChjbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGNsb25lRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2xpZGVzRWxlbWVudHNBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkaW5nTWlzc2luZ1NsaWRlczsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjYgNTBcXFwiPjxkZWZzPjxjbGlwUGF0aCBpZD1cXFwiY2xpcC1hcnJvd1xcXCI+PHJlY3Qgd2lkdGg9XFxcIjI2XFxcIiBoZWlnaHQ9XFxcIjUwXFxcIj48L3JlY3Q+PC9jbGlwUGF0aD48L2RlZnM+PGcgaWQ9XFxcImFycm93XFxcIiBjbGlwLXBhdGg9XFxcInVybCgjY2xpcC1hcnJvdylcXFwiPjxyZWN0IHdpZHRoPVxcXCIyNlxcXCIgaGVpZ2h0PVxcXCI1MFxcXCIgZmlsbD1cXFwicmdiYSgyNTUsMjU1LDI1NSwwKVxcXCI+PC9yZWN0PjxwYXRoIGlkPVxcXCLQmtC+0L3RgtGD0YBfMVxcXCIgZGF0YS1uYW1lPVxcXCLQmtC+0L3RgtGD0YAgMVxcXCIgZD1cXFwiTTEwLjY2NSw1LjAyNiwzMy44NzMsMjguMjM0LDEwLjY2NSw1MS40NDJcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05LjUwMiAtNClcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzcwNzA3MFxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2Utd2lkdGg9XFxcIjFcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGdldERPTURhdGUoaWRFbGVtZW50KSB7XHJcblxyXG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRFbGVtZW50KTtcclxuICAgIGlmIChzbGlkZXIgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnJWMlcycsXHJcbiAgICAgICAgICAgICdmb250LXNpemU6IDE2cHg7IGNvbG9yOiByZWQ7IGJhY2tncm91bmQtY29sb3I6ICNmZmE3YTA7IHBhZGRpbmc6IDJweCA1cHg7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IG1hcmdpbjogMjBweCBhdXRvOycsXHJcbiAgICAgICAgICAgIGBzbGlkZXIgfCBpZCAke2lkRWxlbWVudH0gZG9lcyBub3QgZXhpc3RgKTtcclxuICAgICAgICByZXR1cm4ge2hhc0Vycm9yOiB0cnVlfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTbGlkZXNBcnJheShwYXJlbnQpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLm1hcCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS50YWdOYW1lICE9PSBcIklOUFVUXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNsaWRlc0VsZW1lbnRzQXJyYXkgPSBnZXRTbGlkZXNBcnJheShzbGlkZXIpO1xyXG4gICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyAoICclYyVzJyxcclxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHJlZDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTdhMDsgcGFkZGluZzogMnB4IDVweDsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgbWFyZ2luOiAyMHB4IGF1dG87JyxcclxuICAgICAgICAgICAgYHNsaWRlciB8IGNvbnRhaW5lciAnIyR7aWRFbGVtZW50fScgaXMgZW1wdHlgKTtcclxuICAgICAgICByZXR1cm4ge2hhc0Vycm9yOiB0cnVlfTtcclxuICAgIH1cclxuXHJcbiAgICAvL9CSINC+0YLQtNC10LvRjNC90YvQuSDRhNCw0LnQuy4g0J7RgdGC0LDQstC40YLRjCwg0YLQvtC70YzQutC+IF9jdXJyZW50U2xpZGVcclxuICAgIGNvbnN0IG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMgID0ge1xyXG4gICAgICAgIF9uZXh0U2xpZGU6IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMSxcclxuICAgICAgICBfY3VycmVudFNsaWRlOiAwLFxyXG4gICAgICAgIF9wcmV2U2xpZGU6IDEsXHJcblxyXG4gICAgICAgIGdldCBnZXRDdXJyZW50KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFNsaWRlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldCBnZXROZXh0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmV4dFNsaWRlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldCBnZXRQcmV2KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJldlNsaWRlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdvTmV4dCgpIHtcclxuICAgICAgICAgICAgKyt0aGlzLl9uZXh0U2xpZGU7XHJcbiAgICAgICAgICAgICsrdGhpcy5fY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICArK3RoaXMuX3ByZXZTbGlkZTtcclxuICAgICAgICAgICAgc3dpdGNoIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9uZXh0U2xpZGUgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25leHRTbGlkZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX2N1cnJlbnRTbGlkZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFNsaWRlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fcHJldlNsaWRlIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmV2U2xpZGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ29QcmV2KCkge1xyXG4gICAgICAgICAgICAtLXRoaXMuX25leHRTbGlkZTtcclxuICAgICAgICAgICAgLS10aGlzLl9jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgICAgIC0tdGhpcy5fcHJldlNsaWRlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX25leHRTbGlkZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV4dFNsaWRlID0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9jdXJyZW50U2xpZGUgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTbGlkZSA9IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fcHJldlNsaWRlIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmV2U2xpZGUgPSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2xpZGVyV2lkdGggPSBzbGlkZXIuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgY29uc3QgaGFzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNsaWRlckVsZW1lbnQ6IHNsaWRlcixcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5X25vdFByb2Nlc3NlZDogc2xpZGVzRWxlbWVudHNBcnJheSxcclxuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzOiBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLFxyXG4gICAgICAgIHNsaWRlcldpZHRoOiBzbGlkZXJXaWR0aCxcclxuICAgICAgICBoYXNFcnJvcjogaGFzRXJyb3JcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0RE9NRGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gc2V0U2xpZGVyU3R5bGVzKHNsaWRlciwgc2V0RGVmYXVsdE1pbmltdW1TaXplcykge1xyXG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlcik7XHJcbiAgICBpZiAoc2V0RGVmYXVsdE1pbmltdW1TaXplcykge1xyXG4gICAgICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5taW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldFNsaWRlclN0eWxlcyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBzZXRTbGlkZXNTdHlsZShzbGlkZXNFbGVtZW50c0FycmF5KSB7XHJcbiAgICBmdW5jdGlvbiBhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoKCkge1xyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoKHNsaWRlc0VsZW1lbnRzQXJyYXkpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldFNsaWRlc1N0eWxlOyIsIlwidXNlIHN0cmljdFwiO1xuLy/Qn9C10YDQuNC40LzQtdC90L7QstCw0YLRjCDRhNCw0LnQuywg0LIgaW5kZXguanNcbmltcG9ydCBnZXRET01EYXRlIGZyb20gJy4vZ2V0RE9NRGF0ZS5qcyc7XG5pbXBvcnQgYWRkaW5nTWlzc2luZ1NsaWRlcyBmcm9tICcuL2FkZGluZ01pc3NpbmdTbGlkZXMuanMnO1xuaW1wb3J0IGFkZEJ1dHRvbkNvbnRyb2wgZnJvbSAnLi9hZGRCdXR0b25Db250cm9sLmpzJztcbmltcG9ydCBzZXRTbGlkZXJTdHlsZXMgZnJvbSAnLi9zZXRTbGlkZXJTdHlsZXMuanMnO1xuaW1wb3J0IHNldFNsaWRlc1N0eWxlcyBmcm9tICcuL3NldFNsaWRlc1N0eWxlcy5qcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZXIoaWRFbGVtZW50LCB7XG4gICAgYXV0b3BsYXkgPSB0cnVlLFxuICAgIHRpbWVPZkNoYW5naW5nU2xpZGVzID0gNTAwMCxcbiAgICB0aW1lVG9DaGFuZ2VTbGlkZXMgPSAxMDAwLFxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbk5hbWUgPSBcImxpbmVhclwiLFxuICAgIGJ1dHRvbkNvbnRyb2wgPSB0cnVlLFxuICAgIHRvdWNobW92ZSA9IHRydWUsXG4gICAgYnV0dG9uRGVmYXVsdFN0eWxlcyA9IHRydWUsXG4gICAgc2V0RGVmYXVsdE1pbmltdW1TaXplcyA9IHRydWUsXG59ID0ge30pIHtcblxuICAgIGZ1bmN0aW9uIHNldFNsaWRlc0Rpc3BsYXkoKSB7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldE5leHRdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRDdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0UHJldl0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3NpdGlvbmluZ1NsaWRlcygpIHtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldE5leHRdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlU2hpZnRSaWdodCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXROZXh0XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5zbGlkZVNoaWZ0TGVmdCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRDdXJyZW50XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5jZW50ZXJTbGlkZSk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRDdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5zbGlkZVNoaWZ0UmlnaHQsIHN0eWxlcy5zbGlkZVNoaWZ0TGVmdCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZVNoaWZ0TGVmdCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZVNoaWZ0UmlnaHQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvTGVmdFNsaWRlKCkge1xuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdvTmV4dCgpO1xuICAgICAgICBzZXRTbGlkZXNEaXNwbGF5KCk7XG4gICAgICAgIHBvc2l0aW9uaW5nU2xpZGVzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoVG9SaWdodFNsaWRlKCkge1xuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdvUHJldigpO1xuICAgICAgICBzZXRTbGlkZXNEaXNwbGF5KCk7XG4gICAgICAgIHBvc2l0aW9uaW5nU2xpZGVzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVNsaWRlclRvdWNoKGV2ZW50KSB7XG4gICAgICAgIGlmIChzd2l0Y2hTbGlkZUJsb2NrZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBzd2lwZUxlbmd0aCA9IDA7XG5cbiAgICAgICAgc3dpcGVMZW5ndGggKz0gY2xpZW50WCAtIGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWDtcbiAgICAgICAgaWYgKHN3aXBlTGVuZ3RoID4gc2xpZGVyV2lkdGggLyAzKSB7XG4gICAgICAgICAgICBsZWZ0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVMZW5ndGggPCAtc2xpZGVyV2lkdGggLyAzKSB7XG4gICAgICAgICAgICByaWdodFNsaWRlclNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b3VjaFNjcm9sbEJsb2NrZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRBdXRvcGxheSh0aW1lT2ZDaGFuZ2luZ1NsaWRlcykge1xuICAgICAgICBhdXRvbHBheVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gcmlnaHRTbGlkZXJTaGlmdCgpLCB0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcEF1dG9wbGF5KCkge1xuICAgICAgICBjbGVhckludGVydmFsKGF1dG9scGF5VGltZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5KGF1dG9scGF5VGltZXIpO1xuICAgICAgICBzdGFydEF1dG9wbGF5KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXVzZVN3aXRjaCgpIHtcbiAgICAgICAgaWYgKCFhdXRvcGxheSkge1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5pbnB1dFBhdXNlTm90QWN0aXZlKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmlucHV0UGF1c2VBY3RpdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5pbnB1dFBhdXNlQWN0aXZlKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmlucHV0UGF1c2VOb3RBY3RpdmUpO1xuICAgICAgICB9XG4gICAgICAgIGF1dG9wbGF5ID0gIWF1dG9wbGF5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHNldWRvVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmIChoYXNQc2V1ZG9Ub3VjaE1vdXNlKSB7XG4gICAgICAgICAgICBsZXQgcHNldWRvRXZlbnQgPSB7dG91Y2hlczogW3tjbGllbnRYOiAwfSxdfTtcbiAgICAgICAgICAgIHBzZXVkb0V2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyVG91Y2gocHNldWRvRXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHNldWRvVG91Y2hNb3ZlU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaGFzUHNldWRvVG91Y2hNb3VzZSA9IHRydWU7XG4gICAgICAgIGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIHN0b3BBdXRvcGxheSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHNldWRvVG91Y2hNb3ZlRW5kKCkge1xuICAgICAgICBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gZmFsc2U7XG4gICAgICAgIHN3aXBlTGVuZ3RoID0gMDtcbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJpZ2h0U2xpZGVyU2hpZnQoKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSB0cnVlO1xuICAgICAgICBzd2l0Y2hUb1JpZ2h0U2xpZGUoKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldE5leHRdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICAgICAgc3dpdGNoU2xpZGVCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0TmV4dF0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NoYW5nZVNsaWRlcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZWZ0U2xpZGVyU2hpZnQoKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSB0cnVlO1xuICAgICAgICBzd2l0Y2hUb0xlZnRTbGlkZSgpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0UHJldl0uY2xhc3NMaXN0LmFkZChzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICB9LCB0aW1lVG9DaGFuZ2VTbGlkZXMpXG4gICAgfVxuXG4gICAgLy/Qo9Cx0YDQsNGC0Ywg0LIgaW5pdCDQstGB0LUsINGH0YLQviDQt9Cw0L/Rg9GB0LrQsNC10YLRgdGPINGA0LDQt9GDLCDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQuCDRgdC+0LfQtNCw0L3QuNC1INC/0LXRgNC10LzQtdC90L3Ri9GFLlxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA8IDQpIHtcbiAgICAgICAgICAgIHRpbWVPZkNoYW5naW5nU2xpZGVzID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA8ICh0aW1lVG9DaGFuZ2VTbGlkZXMgLyAxMDApICogMTIwKSB7XG4gICAgICAgICAgICB0aW1lVG9DaGFuZ2VTbGlkZXMgPSAodGltZVRvQ2hhbmdlU2xpZGVzIC8gMTAwKSAqIDgwO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuXG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgc3RhcnRBdXRvcGxheSh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgdmFsdWUuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dGltZVRvQ2hhbmdlU2xpZGVzfW1zYDtcbiAgICAgICAgICAgIHZhbHVlLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbk5hbWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCA9IDA7XG4gICAgbGV0IHN3aXBlTGVuZ3RoID0gMDtcbiAgICBsZXQgc3dpdGNoU2xpZGVCbG9ja2VkID0gZmFsc2U7XG4gICAgbGV0IGF1dG9scGF5VGltZXIgPSBudWxsO1xuICAgIGxldCBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gZmFsc2U7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIHNsaWRlckVsZW1lbnQsXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkLFxuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLFxuICAgICAgICBzbGlkZXJXaWR0aCxcbiAgICAgICAgaGFzRXJyb3JcbiAgICB9ID0gZ2V0RE9NRGF0ZShpZEVsZW1lbnQpO1xuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNsaWRlc0VsZW1lbnRzQXJyYXkgPSBhZGRpbmdNaXNzaW5nU2xpZGVzKHNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkKTtcbiAgICBwb3NpdGlvbmluZ1NsaWRlcygpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QgPSBhZGRCdXR0b25Db250cm9sKHNsaWRlckVsZW1lbnQsIGJ1dHRvbkNvbnRyb2wsIGJ1dHRvbkRlZmF1bHRTdHlsZXMpO1xuICAgIHNldFNsaWRlclN0eWxlcyhzbGlkZXJFbGVtZW50LCBzZXREZWZhdWx0TWluaW11bVNpemVzKTtcbiAgICBzZXRTbGlkZXNTdHlsZXMoc2xpZGVzRWxlbWVudHNBcnJheSk7XG5cblxuICAgIGluaXQoKTtcblxuICAgIGlmICh0b3VjaG1vdmUpIHtcbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBtb3ZlU2xpZGVyVG91Y2gpO1xuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBzd2lwZUxlbmd0aCA9IDA7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRvdWNoU2Nyb2xsQmxvY2tlcik7XG5cbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHBzZXVkb1RvdWNoTW92ZVN0YXJ0KTtcbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHBzZXVkb1RvdWNoTW92ZSk7XG4gICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgcHNldWRvVG91Y2hNb3ZlRW5kKTtcbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBwc2V1ZG9Ub3VjaE1vdmVFbmQpO1xuICAgIH1cblxuICAgIGlmIChidXR0b25Db250cm9sKSB7XG4gICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN3aXRjaFNsaWRlQmxvY2tlZCkge1xuICAgICAgICAgICAgICAgIGxlZnRTbGlkZXJTaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzd2l0Y2hTbGlkZUJsb2NrZWQpIHtcbiAgICAgICAgICAgICAgICByaWdodFNsaWRlclNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwYXVzZVN3aXRjaCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2xpZGVyOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9