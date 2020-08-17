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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getDOMDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDOMDate.js */ "./getDOMDate.js");
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

/* harmony default export */ __webpack_exports__["default"] = (createSlider);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teVNsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teVNsaWRlci8uL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215U2xpZGVyLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uL2FkZEJ1dHRvbkNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvLi9hZGRpbmdNaXNzaW5nU2xpZGVzLmpzIiwid2VicGFjazovL215U2xpZGVyLy4vYXJyb3cuc3ZnIiwid2VicGFjazovL215U2xpZGVyLy4vZ2V0RE9NRGF0ZS5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uL3NldFNsaWRlclN0eWxlcy5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uL3NldFNsaWRlc1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uL3N0eWxlLmNzcz81M2U3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImFkZEJ1dHRvbkNvbnRyb2wiLCJzbGlkZXIiLCJidXR0b25Db250cm9sIiwiYnV0dG9uRGVmYXVsdFN0eWxlcyIsImNyZWF0ZUJ1dHRvbiIsInR5cGUiLCJidXR0b25Jbm5lck5vZGUiLCJuYW1lIiwiYWx0IiwiY2xhc3NMaXN0IiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYXJyb3dPZkJ1dHRvbiIsImZvckVhY2giLCJ2YWx1ZSIsImFkZCIsImNyYXRlQnV0dG9uQ29udHJvbCIsImJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QiLCJyaWdodEJ1dHRvbkNvbnRyb2wiLCJzdHlsZXMiLCJyaWdodEJ1dHRvbiIsImJ1dHRvblNoaWZ0U2xpZGVzIiwiYXBwZW5kIiwicGF1c2VCdXR0b25Db250cm9sIiwiaW5wdXRQYXVzZU5vdEFjdGl2ZSIsImlucHV0UGF1c2UiLCJsZWZ0QnV0dG9uQ29udHJvbCIsImFkZGluZ01pc3NpbmdTbGlkZXMiLCJzbGlkZXNFbGVtZW50c0FycmF5IiwiZmlyc3RDbG9uZUVsZW1lbnQiLCJjbG9uZU5vZGUiLCJzZWNvbmRDbG9uZUVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJnZXRET01EYXRlIiwiaWRFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiaGFzRXJyb3IiLCJnZXRTbGlkZXNBcnJheSIsInBhcmVudCIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwidGFnTmFtZSIsIm9iamVjdFNsaWRlclZpc2libGVTbGlkZXMiLCJfbmV4dFNsaWRlIiwiX2N1cnJlbnRTbGlkZSIsIl9wcmV2U2xpZGUiLCJnZXRDdXJyZW50IiwiZ2V0TmV4dCIsImdldFByZXYiLCJnb05leHQiLCJnb1ByZXYiLCJzbGlkZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2xpZGVyRWxlbWVudCIsInNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkIiwic2V0U2xpZGVyU3R5bGVzIiwic2V0RGVmYXVsdE1pbmltdW1TaXplcyIsIm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyIiwic2V0U2xpZGVzU3R5bGUiLCJhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoIiwic2xpZGVzIiwiY3JlYXRlU2xpZGVyIiwiYXV0b3BsYXkiLCJ0aW1lT2ZDaGFuZ2luZ1NsaWRlcyIsInRpbWVUb0NoYW5nZVNsaWRlcyIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbk5hbWUiLCJ0b3VjaG1vdmUiLCJzZXRTbGlkZXNEaXNwbGF5IiwiaGlkZVNsaWRlIiwicmVtb3ZlIiwicG9zaXRpb25pbmdTbGlkZXMiLCJzbGlkZVNoaWZ0UmlnaHQiLCJzbGlkZVNoaWZ0TGVmdCIsImNlbnRlclNsaWRlIiwic3dpdGNoVG9MZWZ0U2xpZGUiLCJzd2l0Y2hUb1JpZ2h0U2xpZGUiLCJtb3ZlU2xpZGVyVG91Y2giLCJldmVudCIsInN3aXRjaFNsaWRlQmxvY2tlZCIsImNsaWVudFgiLCJ0b3VjaGVzIiwic3dpcGVMZW5ndGgiLCJnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblgiLCJsZWZ0U2xpZGVyU2hpZnQiLCJyaWdodFNsaWRlclNoaWZ0IiwidG91Y2hTY3JvbGxCbG9ja2VyIiwicHJldmVudERlZmF1bHQiLCJzdGFydEF1dG9wbGF5IiwiYXV0b2xwYXlUaW1lciIsInNldEludGVydmFsIiwic3RvcEF1dG9wbGF5IiwiY2xlYXJJbnRlcnZhbCIsImF1dG9wbGF5UmVzZXQiLCJwYXVzZVN3aXRjaCIsImlucHV0UGF1c2VBY3RpdmUiLCJwc2V1ZG9Ub3VjaE1vdmUiLCJoYXNQc2V1ZG9Ub3VjaE1vdXNlIiwicHNldWRvRXZlbnQiLCJwc2V1ZG9Ub3VjaE1vdmVTdGFydCIsInBzZXVkb1RvdWNoTW92ZUVuZCIsInNldFRpbWVvdXQiLCJpbml0Iiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rp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Ozs7O0FBSUEsc0MiLCJmaWxlIjoiZGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2xpZGVyLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0JXQoNCQKi9cXG5cXG4uc2xpZGVyXzFTX24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyX1FYWDAge1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcbi8q0KHQotCY0JvQmCDQlNCb0K8g0JrQndCe0J/QntCaINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5idXR0b25fM3ctaCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uYnV0dG9uU2hpZnRTbGlkZXNfMWtvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnJpZ2h0QnV0dG9uX3RjRXgge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uaW5wdXRQYXVzZV9wWnMzIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiBhdXRvIDAgMTVweCAwO1xcbn1cXG5cXG4uaW5wdXRQYXVzZU5vdEFjdGl2ZV90cmVkIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggU29saWQgIzllOWU5ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbn1cXG5cXG4uaW5wdXRQYXVzZUFjdGl2ZV8ySVAzIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwIFNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjOWU5ZTllO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0J7QkiovXFxuXFxuLnNsaWRlc18zdTNZIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8q0K3RgtC+INC00LvRjyBkaXYqL1xcbn1cXG5cXG4uaGlkZVNsaWRlX3VTcGIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2VudGVyU2xpZGVfMVVOVSB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zbGlkZVNoaWZ0UmlnaHRfcHdQbCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG59XFxuXFxuLnNsaWRlU2hpZnRMZWZ0XzJDWWgge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7O0FBRXJCO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNEJBQTRCOztBQUU1QjtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsb0JBQW9COztBQUVwQjtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGdCQUFnQixFQUFFLGNBQWM7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBLDRCQUE0QlwiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8q0KHQotCY0JvQmCDQlNCb0K8g0KHQm9CQ0JnQlNCV0KDQkCovXFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXIge1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcbi8q0KHQotCY0JvQmCDQlNCb0K8g0JrQndCe0J/QntCaINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5idXR0b24ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmJ1dHRvblNoaWZ0U2xpZGVzIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHRCdXR0b24ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uaW5wdXRQYXVzZSB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogYXV0byAwIDE1cHggMDtcXG59XFxuXFxuLmlucHV0UGF1c2VOb3RBY3RpdmUge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbiAgICBib3JkZXItbGVmdDogNXB4IFNvbGlkICM5ZTllOWU7XFxufVxcblxcbi5pbnB1dFBhdXNlQWN0aXZlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwIFNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjOWU5ZTllO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0J7QkiovXFxuXFxuLnNsaWRlcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKtCt0YLQviDQtNC70Y8gZGl2Ki9cXG59XFxuXFxuLmhpZGVTbGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jZW50ZXJTbGlkZSB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zbGlkZVNoaWZ0UmlnaHQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxufVxcblxcbi5zbGlkZVNoaWZ0TGVmdCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXCJdfV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNsaWRlclwiOiBcInNsaWRlcl8xU19uXCIsXG5cdFwibWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXJcIjogXCJtaW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlcl9RWFgwXCIsXG5cdFwiYnV0dG9uXCI6IFwiYnV0dG9uXzN3LWhcIixcblx0XCJidXR0b25TaGlmdFNsaWRlc1wiOiBcImJ1dHRvblNoaWZ0U2xpZGVzXzFrb25cIixcblx0XCJyaWdodEJ1dHRvblwiOiBcInJpZ2h0QnV0dG9uX3RjRXhcIixcblx0XCJpbnB1dFBhdXNlXCI6IFwiaW5wdXRQYXVzZV9wWnMzXCIsXG5cdFwiaW5wdXRQYXVzZU5vdEFjdGl2ZVwiOiBcImlucHV0UGF1c2VOb3RBY3RpdmVfdHJlZFwiLFxuXHRcImlucHV0UGF1c2VBY3RpdmVcIjogXCJpbnB1dFBhdXNlQWN0aXZlXzJJUDNcIixcblx0XCJzbGlkZXNcIjogXCJzbGlkZXNfM3UzWVwiLFxuXHRcImhpZGVTbGlkZVwiOiBcImhpZGVTbGlkZV91U3BiXCIsXG5cdFwiY2VudGVyU2xpZGVcIjogXCJjZW50ZXJTbGlkZV8xVU5VXCIsXG5cdFwic2xpZGVTaGlmdFJpZ2h0XCI6IFwic2xpZGVTaGlmdFJpZ2h0X3B3UGxcIixcblx0XCJzbGlkZVNoaWZ0TGVmdFwiOiBcInNsaWRlU2hpZnRMZWZ0XzJDWWhcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcclxuXHJcbmltcG9ydCBhcnJvd09mQnV0dG9uIGZyb20gJy4vYXJyb3cuc3ZnJ1xyXG5cclxuZnVuY3Rpb24gYWRkQnV0dG9uQ29udHJvbChzbGlkZXIsIGJ1dHRvbkNvbnRyb2wsIGJ1dHRvbkRlZmF1bHRTdHlsZXMpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b24oe3R5cGUsIGJ1dHRvbklubmVyTm9kZSA9IG51bGwsIG5hbWUsIGFsdCwgY2xhc3NMaXN0ID0gW119ID0ge30pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gbnVsbDtcclxuICAgICAgICBpZiAoYnV0dG9uSW5uZXJOb2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGBQU0VVRE9fQlVUVE9OICR7bmFtZX1gKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGFycm93T2ZCdXR0b247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzTGlzdC5mb3JFYWNoKHZhbHVlID0+IGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHZhbHVlKSk7XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmF0ZUJ1dHRvbkNvbnRyb2woYnV0dG9uRGVmYXVsdFN0eWxlcykge1xyXG4gICAgICAgIGlmIChidXR0b25EZWZhdWx0U3R5bGVzKSB7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbklubmVyTm9kZTogYXJyb3dPZkJ1dHRvbixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93UmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtzdHlsZXMucmlnaHRCdXR0b24sIHN0eWxlcy5idXR0b24sIHN0eWxlcy5idXR0b25TaGlmdFNsaWRlc11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJpbnB1dCBwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogW3N0eWxlcy5pbnB1dFBhdXNlTm90QWN0aXZlLCBzdHlsZXMuaW5wdXRQYXVzZSwgc3R5bGVzLmJ1dHRvbl1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25Jbm5lck5vZGU6IGFycm93T2ZCdXR0b24sXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd0xlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogW3N0eWxlcy5idXR0b24sIHN0eWxlcy5idXR0b25TaGlmdFNsaWRlc11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImlucHV0IHBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd0xlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QgPSB7XHJcbiAgICAgICAgbGVmdEJ1dHRvbkNvbnRyb2w6IG51bGwsXHJcbiAgICAgICAgcmlnaHRCdXR0b25Db250cm9sOiBudWxsLFxyXG4gICAgICAgIHBhdXNlQnV0dG9uQ29udHJvbDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoYnV0dG9uQ29udHJvbCkge1xyXG4gICAgICAgIGNyYXRlQnV0dG9uQ29udHJvbChidXR0b25EZWZhdWx0U3R5bGVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQnV0dG9uQ29udHJvbDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZGluZ01pc3NpbmdTbGlkZXMoc2xpZGVzRWxlbWVudHNBcnJheSkge1xyXG4gICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBsZXQgZmlyc3RDbG9uZUVsZW1lbnQgPSBzbGlkZXNFbGVtZW50c0FycmF5WzBdLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBsZXQgc2Vjb25kQ2xvbmVFbGVtZW50ID0gZmlyc3RDbG9uZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkucHVzaChmaXJzdENsb25lRWxlbWVudCk7XHJcbiAgICAgICAgc2xpZGVyLmFwcGVuZChmaXJzdENsb25lRWxlbWVudCk7XHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5wdXNoKHNlY29uZENsb25lRWxlbWVudCk7XHJcbiAgICAgICAgc2xpZGVyLmFwcGVuZChzZWNvbmRDbG9uZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgbGV0IGNsb25lRWxlbWVudCA9IHZhbHVlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5wdXNoKGNsb25lRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoY2xvbmVFbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzbGlkZXNFbGVtZW50c0FycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRpbmdNaXNzaW5nU2xpZGVzOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNiA1MFxcXCI+PGRlZnM+PGNsaXBQYXRoIGlkPVxcXCJjbGlwLWFycm93XFxcIj48cmVjdCB3aWR0aD1cXFwiMjZcXFwiIGhlaWdodD1cXFwiNTBcXFwiPjwvcmVjdD48L2NsaXBQYXRoPjwvZGVmcz48ZyBpZD1cXFwiYXJyb3dcXFwiIGNsaXAtcGF0aD1cXFwidXJsKCNjbGlwLWFycm93KVxcXCI+PHJlY3Qgd2lkdGg9XFxcIjI2XFxcIiBoZWlnaHQ9XFxcIjUwXFxcIiBmaWxsPVxcXCJyZ2JhKDI1NSwyNTUsMjU1LDApXFxcIj48L3JlY3Q+PHBhdGggaWQ9XFxcItCa0L7QvdGC0YPRgF8xXFxcIiBkYXRhLW5hbWU9XFxcItCa0L7QvdGC0YPRgCAxXFxcIiBkPVxcXCJNMTAuNjY1LDUuMDI2LDMzLjg3MywyOC4yMzQsMTAuNjY1LDUxLjQ0MlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTkuNTAyIC00KVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjNzA3MDcwXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMVxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0RE9NRGF0ZShpZEVsZW1lbnQpIHtcclxuXHJcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEVsZW1lbnQpO1xyXG4gICAgaWYgKHNsaWRlciA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCclYyVzJyxcclxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHJlZDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTdhMDsgcGFkZGluZzogMnB4IDVweDsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgbWFyZ2luOiAyMHB4IGF1dG87JyxcclxuICAgICAgICAgICAgYHNsaWRlciB8IGlkICR7aWRFbGVtZW50fSBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgICAgIHJldHVybiB7aGFzRXJyb3I6IHRydWV9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNsaWRlc0FycmF5KHBhcmVudCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikubWFwKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLnRhZ05hbWUgIT09IFwiSU5QVVRcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2xpZGVzRWxlbWVudHNBcnJheSA9IGdldFNsaWRlc0FycmF5KHNsaWRlcik7XHJcbiAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nICggJyVjJXMnLFxyXG4gICAgICAgICAgICAnZm9udC1zaXplOiAxNnB4OyBjb2xvcjogcmVkOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhN2EwOyBwYWRkaW5nOiAycHggNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBtYXJnaW46IDIwcHggYXV0bzsnLFxyXG4gICAgICAgICAgICBgc2xpZGVyIHwgY29udGFpbmVyICcjJHtpZEVsZW1lbnR9JyBpcyBlbXB0eWApO1xyXG4gICAgICAgIHJldHVybiB7aGFzRXJyb3I6IHRydWV9O1xyXG4gICAgfVxyXG5cclxuICAgIC8v0JIg0L7RgtC00LXQu9GM0L3Ri9C5INGE0LDQudC7LiDQntGB0YLQsNCy0LjRgtGMLCDRgtC+0LvRjNC60L4gX2N1cnJlbnRTbGlkZVxyXG4gICAgY29uc3Qgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyAgPSB7XHJcbiAgICAgICAgX25leHRTbGlkZTogc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxLFxyXG4gICAgICAgIF9jdXJyZW50U2xpZGU6IDAsXHJcbiAgICAgICAgX3ByZXZTbGlkZTogMSxcclxuXHJcbiAgICAgICAgZ2V0IGdldEN1cnJlbnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0IGdldE5leHQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uZXh0U2xpZGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0IGdldFByZXYoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcmV2U2xpZGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ29OZXh0KCkge1xyXG4gICAgICAgICAgICArK3RoaXMuX25leHRTbGlkZTtcclxuICAgICAgICAgICAgKyt0aGlzLl9jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgICAgICsrdGhpcy5fcHJldlNsaWRlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX25leHRTbGlkZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV4dFNsaWRlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fY3VycmVudFNsaWRlIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9wcmV2U2xpZGUgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZTbGlkZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnb1ByZXYoKSB7XHJcbiAgICAgICAgICAgIC0tdGhpcy5fbmV4dFNsaWRlO1xyXG4gICAgICAgICAgICAtLXRoaXMuX2N1cnJlbnRTbGlkZTtcclxuICAgICAgICAgICAgLS10aGlzLl9wcmV2U2xpZGU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoLTEpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fbmV4dFNsaWRlIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZXh0U2xpZGUgPSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX2N1cnJlbnRTbGlkZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFNsaWRlID0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9wcmV2U2xpZGUgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZTbGlkZSA9IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBzbGlkZXJXaWR0aCA9IHNsaWRlci5jbGllbnRXaWR0aDtcclxuXHJcbiAgICBjb25zdCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2xpZGVyRWxlbWVudDogc2xpZGVyLFxyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkOiBzbGlkZXNFbGVtZW50c0FycmF5LFxyXG4gICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXM6IG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMsXHJcbiAgICAgICAgc2xpZGVyV2lkdGg6IHNsaWRlcldpZHRoLFxyXG4gICAgICAgIGhhc0Vycm9yOiBoYXNFcnJvclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRET01EYXRlOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBzZXRTbGlkZXJTdHlsZXMoc2xpZGVyLCBzZXREZWZhdWx0TWluaW11bVNpemVzKSB7XHJcbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVyKTtcclxuICAgIGlmIChzZXREZWZhdWx0TWluaW11bVNpemVzKSB7XHJcbiAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoc3R5bGVzLm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0U2xpZGVyU3R5bGVzIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIHNldFNsaWRlc1N0eWxlKHNsaWRlc0VsZW1lbnRzQXJyYXkpIHtcclxuICAgIGZ1bmN0aW9uIGF1dG9tYXRpY1NldHRpbmdQaWN0dXJlV2lkdGgoKSB7XHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGF1dG9tYXRpY1NldHRpbmdQaWN0dXJlV2lkdGgoc2xpZGVzRWxlbWVudHNBcnJheSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0U2xpZGVzU3R5bGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL9Cf0LXRgNC40LjQvNC10L3QvtCy0LDRgtGMINGE0LDQudC7LCDQsiBpbmRleC5qc1xuaW1wb3J0IGdldERPTURhdGUgZnJvbSAnLi9nZXRET01EYXRlLmpzJztcbmltcG9ydCBhZGRpbmdNaXNzaW5nU2xpZGVzIGZyb20gJy4vYWRkaW5nTWlzc2luZ1NsaWRlcy5qcyc7XG5pbXBvcnQgYWRkQnV0dG9uQ29udHJvbCBmcm9tICcuL2FkZEJ1dHRvbkNvbnRyb2wuanMnO1xuaW1wb3J0IHNldFNsaWRlclN0eWxlcyBmcm9tICcuL3NldFNsaWRlclN0eWxlcy5qcyc7XG5pbXBvcnQgc2V0U2xpZGVzU3R5bGVzIGZyb20gJy4vc2V0U2xpZGVzU3R5bGVzLmpzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlcihpZEVsZW1lbnQsIHtcbiAgICBhdXRvcGxheSA9IHRydWUsXG4gICAgdGltZU9mQ2hhbmdpbmdTbGlkZXMgPSA1MDAwLFxuICAgIHRpbWVUb0NoYW5nZVNsaWRlcyA9IDEwMDAsXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZSA9IFwibGluZWFyXCIsXG4gICAgYnV0dG9uQ29udHJvbCA9IHRydWUsXG4gICAgdG91Y2htb3ZlID0gdHJ1ZSxcbiAgICBidXR0b25EZWZhdWx0U3R5bGVzID0gdHJ1ZSxcbiAgICBzZXREZWZhdWx0TWluaW11bVNpemVzID0gdHJ1ZSxcbn0gPSB7fSkge1xuXG4gICAgZnVuY3Rpb24gc2V0U2xpZGVzRGlzcGxheSgpIHtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0TmV4dF0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldEN1cnJlbnRdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvc2l0aW9uaW5nU2xpZGVzKCkge1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0TmV4dF0uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVTaGlmdFJpZ2h0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldE5leHRdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnNsaWRlU2hpZnRMZWZ0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldEN1cnJlbnRdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmNlbnRlclNsaWRlKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldEN1cnJlbnRdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnNsaWRlU2hpZnRSaWdodCwgc3R5bGVzLnNsaWRlU2hpZnRMZWZ0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldFByZXZdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlU2hpZnRMZWZ0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldFByZXZdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlU2hpZnRSaWdodCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoVG9MZWZ0U2xpZGUoKSB7XG4gICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ29OZXh0KCk7XG4gICAgICAgIHNldFNsaWRlc0Rpc3BsYXkoKTtcbiAgICAgICAgcG9zaXRpb25pbmdTbGlkZXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hUb1JpZ2h0U2xpZGUoKSB7XG4gICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ29QcmV2KCk7XG4gICAgICAgIHNldFNsaWRlc0Rpc3BsYXkoKTtcbiAgICAgICAgcG9zaXRpb25pbmdTbGlkZXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVyVG91Y2goZXZlbnQpIHtcbiAgICAgICAgaWYgKHN3aXRjaFNsaWRlQmxvY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHN3aXBlTGVuZ3RoID0gMDtcblxuICAgICAgICBzd2lwZUxlbmd0aCArPSBjbGllbnRYIC0gZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YO1xuICAgICAgICBpZiAoc3dpcGVMZW5ndGggPiBzbGlkZXJXaWR0aCAvIDMpIHtcbiAgICAgICAgICAgIGxlZnRTbGlkZXJTaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2lwZUxlbmd0aCA8IC1zbGlkZXJXaWR0aCAvIDMpIHtcbiAgICAgICAgICAgIHJpZ2h0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdWNoU2Nyb2xsQmxvY2tlcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEF1dG9wbGF5KHRpbWVPZkNoYW5naW5nU2xpZGVzKSB7XG4gICAgICAgIGF1dG9scGF5VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiByaWdodFNsaWRlclNoaWZ0KCksIHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wQXV0b3BsYXkoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b2xwYXlUaW1lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcykge1xuICAgICAgICBzdG9wQXV0b3BsYXkoYXV0b2xwYXlUaW1lcik7XG4gICAgICAgIHN0YXJ0QXV0b3BsYXkodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhdXNlU3dpdGNoKCkge1xuICAgICAgICBpZiAoIWF1dG9wbGF5KSB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmlucHV0UGF1c2VOb3RBY3RpdmUpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaW5wdXRQYXVzZUFjdGl2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmlucHV0UGF1c2VBY3RpdmUpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaW5wdXRQYXVzZU5vdEFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYXV0b3BsYXkgPSAhYXV0b3BsYXlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGhhc1BzZXVkb1RvdWNoTW91c2UpIHtcbiAgICAgICAgICAgIGxldCBwc2V1ZG9FdmVudCA9IHt0b3VjaGVzOiBbe2NsaWVudFg6IDB9LF19O1xuICAgICAgICAgICAgcHNldWRvRXZlbnQudG91Y2hlc1swXS5jbGllbnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgICAgIG1vdmVTbGlkZXJUb3VjaChwc2V1ZG9FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmVTdGFydChldmVudCkge1xuICAgICAgICBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gdHJ1ZTtcbiAgICAgICAgZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgc3RvcEF1dG9wbGF5KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmVFbmQoKSB7XG4gICAgICAgIGhhc1BzZXVkb1RvdWNoTW91c2UgPSBmYWxzZTtcbiAgICAgICAgc3dpcGVMZW5ndGggPSAwO1xuICAgICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmlnaHRTbGlkZXJTaGlmdCgpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IHRydWU7XG4gICAgICAgIHN3aXRjaFRvUmlnaHRTbGlkZSgpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0TmV4dF0uY2xhc3NMaXN0LmFkZChzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXROZXh0XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2hhbmdlU2xpZGVzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxlZnRTbGlkZXJTaGlmdCgpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IHRydWU7XG4gICAgICAgIHN3aXRjaFRvTGVmdFNsaWRlKCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldFByZXZdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIH0sIHRpbWVUb0NoYW5nZVNsaWRlcylcbiAgICB9XG5cbiAgICAvL9Cj0LHRgNCw0YLRjCDQsiBpbml0INCy0YHQtSwg0YfRgtC+INC30LDQv9GD0YHQutCw0LXRgtGB0Y8g0YDQsNC30YMsINCyINGC0L7QvCDRh9C40YHQu9C1INC4INGB0L7Qt9C00LDQvdC40LUg0L/QtdGA0LXQvNC10L3QvdGL0YUuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHRpbWVPZkNoYW5naW5nU2xpZGVzIDwgNCkge1xuICAgICAgICAgICAgdGltZU9mQ2hhbmdpbmdTbGlkZXMgPSA0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpbWVPZkNoYW5naW5nU2xpZGVzIDwgKHRpbWVUb0NoYW5nZVNsaWRlcyAvIDEwMCkgKiAxMjApIHtcbiAgICAgICAgICAgIHRpbWVUb0NoYW5nZVNsaWRlcyA9ICh0aW1lVG9DaGFuZ2VTbGlkZXMgLyAxMDApICogODA7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTbGlkZXNEaXNwbGF5KCk7XG5cbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICBzdGFydEF1dG9wbGF5KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt0aW1lVG9DaGFuZ2VTbGlkZXN9bXNgO1xuICAgICAgICAgICAgdmFsdWUuc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsZXQgZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YID0gMDtcbiAgICBsZXQgc3dpcGVMZW5ndGggPSAwO1xuICAgIGxldCBzd2l0Y2hTbGlkZUJsb2NrZWQgPSBmYWxzZTtcbiAgICBsZXQgYXV0b2xwYXlUaW1lciA9IG51bGw7XG4gICAgbGV0IGhhc1BzZXVkb1RvdWNoTW91c2UgPSBmYWxzZTtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgc2xpZGVyRWxlbWVudCxcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheV9ub3RQcm9jZXNzZWQsXG4gICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMsXG4gICAgICAgIHNsaWRlcldpZHRoLFxuICAgICAgICBoYXNFcnJvclxuICAgIH0gPSBnZXRET01EYXRlKGlkRWxlbWVudCk7XG4gICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVzRWxlbWVudHNBcnJheSA9IGFkZGluZ01pc3NpbmdTbGlkZXMoc2xpZGVzRWxlbWVudHNBcnJheV9ub3RQcm9jZXNzZWQpO1xuICAgIHBvc2l0aW9uaW5nU2xpZGVzKCk7XG4gICAgY29uc3QgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdCA9IGFkZEJ1dHRvbkNvbnRyb2woc2xpZGVyRWxlbWVudCwgYnV0dG9uQ29udHJvbCwgYnV0dG9uRGVmYXVsdFN0eWxlcyk7XG4gICAgc2V0U2xpZGVyU3R5bGVzKHNsaWRlckVsZW1lbnQsIHNldERlZmF1bHRNaW5pbXVtU2l6ZXMpO1xuICAgIHNldFNsaWRlc1N0eWxlcyhzbGlkZXNFbGVtZW50c0FycmF5KTtcblxuXG4gICAgaW5pdCgpO1xuXG4gICAgaWYgKHRvdWNobW92ZSkge1xuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG1vdmVTbGlkZXJUb3VjaCk7XG4gICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2hTY3JvbGxCbG9ja2VyKTtcblxuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcHNldWRvVG91Y2hNb3ZlU3RhcnQpO1xuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcHNldWRvVG91Y2hNb3ZlKTtcbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBwc2V1ZG9Ub3VjaE1vdmVFbmQpO1xuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHBzZXVkb1RvdWNoTW92ZUVuZCk7XG4gICAgfVxuXG4gICAgaWYgKGJ1dHRvbkNvbnRyb2wpIHtcbiAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghc3dpdGNoU2xpZGVCbG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgbGVmdFNsaWRlclNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN3aXRjaFNsaWRlQmxvY2tlZCkge1xuICAgICAgICAgICAgICAgIHJpZ2h0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhdXNlU3dpdGNoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2xpZGVyOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9