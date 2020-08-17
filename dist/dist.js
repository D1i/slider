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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
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

/***/ "./createObjectSliderVisibleSlides.js":
/*!********************************************!*\
  !*** ./createObjectSliderVisibleSlides.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function createObjectSliderVisibleSlides(slidesElementsArray) {
  var objectSliderVisibleSlides = {
    _currentSlide: 0,

    get getCurrent() {
      return this._currentSlide;
    },

    getNext: function getNext() {
      var nextSlide = this.getCurrent;
      nextSlide++;

      if (nextSlide >= slidesElementsArray.length) {
        nextSlide = 0;
      }

      return nextSlide;
    },
    getPrev: function getPrev() {
      var prevSlide = this.getCurrent;
      prevSlide--;

      if (0 > prevSlide) {
        prevSlide = slidesElementsArray.length - 1;
      }

      return prevSlide;
    },
    goNext: function goNext() {
      ++this._currentSlide;

      if (this._currentSlide >= slidesElementsArray.length) {
        this._currentSlide = 0;
      }
    },
    goPrev: function goPrev() {
      --this._currentSlide;

      if (0 > this._currentSlide) {
        this._currentSlide = slidesElementsArray.length - 1;
      }
    }
  };
  return objectSliderVisibleSlides;
}

/* harmony default export */ __webpack_exports__["default"] = (createObjectSliderVisibleSlides);

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

  if (slidesElementsArray.length === 0) {
    console.log('%c%s', 'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;', "slider | container '#".concat(idElement, "' is empty"));
    return {
      hasError: true
    };
  }

  var sliderWidth = slider.clientWidth;
  var hasError = false;
  return {
    sliderElement: slider,
    slidesElementsArray_notProcessed: slidesElementsArray,
    sliderWidth: sliderWidth,
    hasError: hasError
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getDOMDate);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getDOMDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDOMDate.js */ "./getDOMDate.js");
/* harmony import */ var _createObjectSliderVisibleSlides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createObjectSliderVisibleSlides.js */ "./createObjectSliderVisibleSlides.js");
/* harmony import */ var _addingMissingSlides_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addingMissingSlides.js */ "./addingMissingSlides.js");
/* harmony import */ var _addButtonControl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addButtonControl.js */ "./addButtonControl.js");
/* harmony import */ var _setSliderStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setSliderStyles.js */ "./setSliderStyles.js");
/* harmony import */ var _setSlidesStyles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setSlidesStyles.js */ "./setSlidesStyles.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
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
      value.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.hideSlide);
    });
    slidesElementsArray[objectSliderVisibleSlides.getNext()].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.hideSlide);
    slidesElementsArray[objectSliderVisibleSlides.getCurrent].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.hideSlide);
    slidesElementsArray[objectSliderVisibleSlides.getPrev()].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.hideSlide);
  }

  function positioningSlides() {
    slidesElementsArray[objectSliderVisibleSlides.getNext()].classList.add(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.slideShiftRight);
    slidesElementsArray[objectSliderVisibleSlides.getNext()].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.slideShiftLeft);
    slidesElementsArray[objectSliderVisibleSlides.getCurrent].classList.add(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.centerSlide);
    slidesElementsArray[objectSliderVisibleSlides.getCurrent].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.slideShiftRight, _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.slideShiftLeft);
    slidesElementsArray[objectSliderVisibleSlides.getPrev()].classList.add(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.slideShiftLeft);
    slidesElementsArray[objectSliderVisibleSlides.getPrev()].classList.add(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.slideShiftRight);
  }

  function switchToLeftSlide() {
    objectSliderVisibleSlides.goPrev();
    setSlidesDisplay();
    positioningSlides();
  }

  function switchToRightSlide() {
    objectSliderVisibleSlides.goNext();
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
      buttonControlElementsList.pauseButtonControl.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.inputPauseNotActive);
      buttonControlElementsList.pauseButtonControl.classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.inputPauseActive);
    } else {
      stopAutoplay();
      buttonControlElementsList.pauseButtonControl.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.inputPauseActive);
      buttonControlElementsList.pauseButtonControl.classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.inputPauseNotActive);
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
    slidesElementsArray[objectSliderVisibleSlides.getNext()].classList.add(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.hideSlide);
    setTimeout(function () {
      if (autoplay) {
        autoplayReset(timeOfChangingSlides);
      }

      switchSlideBlocked = false;
      slidesElementsArray[objectSliderVisibleSlides.getNext()].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.hideSlide);
    }, timeToChangeSlides);
  }

  function leftSliderShift() {
    stopAutoplay();
    switchSlideBlocked = true;
    switchToLeftSlide();
    slidesElementsArray[objectSliderVisibleSlides.getPrev()].classList.add(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.hideSlide);
    setTimeout(function () {
      if (autoplay) {
        autoplayReset(timeOfChangingSlides);
      }

      switchSlideBlocked = false;
      slidesElementsArray[objectSliderVisibleSlides.getPrev()].classList.remove(_style_css__WEBPACK_IMPORTED_MODULE_6___default.a.hideSlide);
    }, timeToChangeSlides);
  }

  function init() {
    if (timeOfChangingSlides < 4) {
      timeOfChangingSlides = 4;
    }

    if (timeOfChangingSlides < timeToChangeSlides / 100 * 120) {
      timeToChangeSlides = timeToChangeSlides / 100 * 80;
    }

    Object(_setSliderStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"])(sliderElement, setDefaultMinimumSizes);
    Object(_setSlidesStyles_js__WEBPACK_IMPORTED_MODULE_5__["default"])(slidesElementsArray);
    positioningSlides();
    setSlidesDisplay();

    if (autoplay) {
      startAutoplay(timeOfChangingSlides);
    }

    slidesElementsArray.forEach(function (value) {
      value.style.transitionDuration = "".concat(timeToChangeSlides, "ms");
      value.style.transitionTimingFunction = transitionTimingFunctionName;
    });

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

  var autolpayTimer = null;
  var hasPseudoTouchMouse = false;
  var swipeLength = 0;
  var gestureStartingPositionX = 0;
  var switchSlideBlocked = false;

  var _getDOMDate = Object(_getDOMDate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(idElement),
      sliderElement = _getDOMDate.sliderElement,
      slidesElementsArray_notProcessed = _getDOMDate.slidesElementsArray_notProcessed,
      sliderWidth = _getDOMDate.sliderWidth,
      hasError = _getDOMDate.hasError;

  if (hasError) {
    return;
  }

  var slidesElementsArray = Object(_addingMissingSlides_js__WEBPACK_IMPORTED_MODULE_2__["default"])(slidesElementsArray_notProcessed);
  var objectSliderVisibleSlides = Object(_createObjectSliderVisibleSlides_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slidesElementsArray);
  var buttonControlElementsList = Object(_addButtonControl_js__WEBPACK_IMPORTED_MODULE_3__["default"])(sliderElement, buttonControl, buttonDefaultStyles);
  init();
}

/* harmony default export */ __webpack_exports__["default"] = (createSlider);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teVNsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teVNsaWRlci8uL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215U2xpZGVyLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uL2FkZEJ1dHRvbkNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvLi9hZGRpbmdNaXNzaW5nU2xpZGVzLmpzIiwid2VicGFjazovL215U2xpZGVyLy4vYXJyb3cuc3ZnIiwid2VicGFjazovL215U2xpZGVyLy4vY3JlYXRlT2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uL2dldERPTURhdGUuanMiLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uL3NldFNsaWRlclN0eWxlcy5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uL3NldFNsaWRlc1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci8uL3N0eWxlLmNzcz81M2U3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImFkZEJ1dHRvbkNvbnRyb2wiLCJzbGlkZXIiLCJidXR0b25Db250cm9sIiwiYnV0dG9uRGVmYXVsdFN0eWxlcyIsImNyZWF0ZUJ1dHRvbiIsInR5cGUiLCJidXR0b25Jbm5lck5vZGUiLCJuYW1lIiwiYWx0IiwiY2xhc3NMaXN0IiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYXJyb3dPZkJ1dHRvbiIsImZvckVhY2giLCJ2YWx1ZSIsImFkZCIsImNyYXRlQnV0dG9uQ29udHJvbCIsImJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QiLCJyaWdodEJ1dHRvbkNvbnRyb2wiLCJzdHlsZXMiLCJyaWdodEJ1dHRvbiIsImJ1dHRvblNoaWZ0U2xpZGVzIiwiYXBwZW5kIiwicGF1c2VCdXR0b25Db250cm9sIiwiaW5wdXRQYXVzZU5vdEFjdGl2ZSIsImlucHV0UGF1c2UiLCJsZWZ0QnV0dG9uQ29udHJvbCIsImFkZGluZ01pc3NpbmdTbGlkZXMiLCJzbGlkZXNFbGVtZW50c0FycmF5IiwiZmlyc3RDbG9uZUVsZW1lbnQiLCJjbG9uZU5vZGUiLCJzZWNvbmRDbG9uZUVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVPYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzIiwib2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyIsIl9jdXJyZW50U2xpZGUiLCJnZXRDdXJyZW50IiwiZ2V0TmV4dCIsIm5leHRTbGlkZSIsImdldFByZXYiLCJwcmV2U2xpZGUiLCJnb05leHQiLCJnb1ByZXYiLCJnZXRET01EYXRlIiwiaWRFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiaGFzRXJyb3IiLCJnZXRTbGlkZXNBcnJheSIsInBhcmVudCIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwidGFnTmFtZSIsInNsaWRlcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzbGlkZXJFbGVtZW50Iiwic2xpZGVzRWxlbWVudHNBcnJheV9ub3RQcm9jZXNzZWQiLCJjcmVhdGVTbGlkZXIiLCJhdXRvcGxheSIsInRpbWVPZkNoYW5naW5nU2xpZGVzIiwidGltZVRvQ2hhbmdlU2xpZGVzIiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZSIsInRvdWNobW92ZSIsInNldERlZmF1bHRNaW5pbXVtU2l6ZXMiLCJzZXRTbGlkZXNEaXNwbGF5IiwiaGlkZVNsaWRlIiwicmVtb3ZlIiwicG9zaXRpb25pbmdTbGlkZXMiLCJzbGlkZVNoaWZ0UmlnaHQiLCJzbGlkZVNoaWZ0TGVmdCIsImNlbnRlclNsaWRlIiwic3dpdGNoVG9MZWZ0U2xpZGUiLCJzd2l0Y2hUb1JpZ2h0U2xpZGUiLCJtb3ZlU2xpZGVyVG91Y2giLCJldmVudCIsInN3aXRjaFNsaWRlQmxvY2tlZCIsImNsaWVudFgiLCJ0b3VjaGVzIiwic3dpcGVMZW5ndGgiLCJnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblgiLCJsZWZ0U2xpZGVyU2hpZnQiLCJyaWdodFNsaWRlclNoaWZ0IiwidG91Y2hTY3JvbGxCbG9ja2VyIiwicHJldmVudERlZmF1bHQiLCJzdGFydEF1dG9wbGF5IiwiYXV0b2xwYXlUaW1lciIsInNldEludGVydmFsIiwic3RvcEF1dG9wbGF5IiwiY2xlYXJJbnRlcnZhbCIsImF1dG9wbGF5UmVzZXQiLCJwYXVzZVN3aXRjaCIsImlucHV0UGF1c2VBY3RpdmUiLCJwc2V1ZG9Ub3VjaE1vdmUiLCJoYXNQc2V1ZG9Ub3VjaE1vdXNlIiwicHNldWRvRXZlbnQiLCJwc2V1ZG9Ub3VjaE1vdmVTdGFydCIsInBzZXVkb1RvdWNoTW92ZUVuZCIsInNldFRpbWVvdXQiLCJpbml0Iiwic2V0U2xpZGVyU3R5bGVzIiwic2V0U2xpZGVzU3R5bGVzIiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwibWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXIiLCJzZXRTbGlkZXNTdHlsZSIsImF1dG9tYXRpY1NldHRpbmdQaWN0dXJlV2lkdGgiLCJzbGlkZXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUywyQ0FBMkMseUJBQXlCLHVCQUF1QixvQkFBb0IscUNBQXFDLDBCQUEwQixnQ0FBZ0MsNkJBQTZCLDRCQUE0Qix3QkFBd0IsR0FBRyxzQ0FBc0MsdUJBQXVCLHdCQUF3QixHQUFHLGlIQUFpSCxvQkFBb0Isa0NBQWtDLGdDQUFnQyw2QkFBNkIsNEJBQTRCLHdCQUF3QixzQkFBc0IsaUJBQWlCLEdBQUcsNkJBQTZCLGtCQUFrQixtQkFBbUIsbUJBQW1C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Rzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJkaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8q0KHQotCY0JvQmCDQlNCb0K8g0KHQm9CQ0JnQlNCV0KDQkCovXFxuXFxuLnNsaWRlcl8xU19uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5taW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlcl9RWFgwIHtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG4vKtCh0KLQmNCb0Jgg0JTQm9CvINCa0J3QntCf0J7QmiDQodCb0JDQmdCU0JXQoNCQKi9cXG5cXG4uYnV0dG9uXzN3LWgge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmJ1dHRvblNoaWZ0U2xpZGVzXzFrb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5yaWdodEJ1dHRvbl90Y0V4IHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmlucHV0UGF1c2VfcFpzMyB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogYXV0byAwIDE1cHggMDtcXG59XFxuXFxuLmlucHV0UGF1c2VOb3RBY3RpdmVfdHJlZCB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IFNvbGlkICM5ZTllOWU7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggU29saWQgIzllOWU5ZTtcXG59XFxuXFxuLmlucHV0UGF1c2VBY3RpdmVfMklQMyB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogMCBTb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzllOWU5ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcbi8q0KHQotCY0JvQmCDQlNCb0K8g0KHQm9CQ0JnQlNCe0JIqL1xcblxcbi5zbGlkZXNfM3UzWSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKtCt0YLQviDQtNC70Y8gZGl2Ki9cXG59XFxuXFxuLmhpZGVTbGlkZV91U3BiIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNlbnRlclNsaWRlXzFVTlUge1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2xpZGVTaGlmdFJpZ2h0X3B3UGwge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxufVxcblxcbi5zbGlkZVNoaWZ0TGVmdF8yQ1loIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJzdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCOztBQUVyQjtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQSw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDRCQUE0Qjs7QUFFNUI7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksUUFBUTtJQUNSLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2Qjs7QUFFQSw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLG9CQUFvQjs7QUFFcEI7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQkFBZ0IsRUFBRSxjQUFjO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQSw0QkFBNEJcIixcImZpbGVcIjpcInN0eWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKtCh0KLQmNCb0Jgg0JTQm9CvINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyIHtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG4vKtCh0KLQmNCb0Jgg0JTQm9CvINCa0J3QntCf0J7QmiDQodCb0JDQmdCU0JXQoNCQKi9cXG5cXG4uYnV0dG9uIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5idXR0b25TaGlmdFNsaWRlcyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnJpZ2h0QnV0dG9uIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmlucHV0UGF1c2Uge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IGF1dG8gMCAxNXB4IDA7XFxufVxcblxcbi5pbnB1dFBhdXNlTm90QWN0aXZlIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggU29saWQgIzllOWU5ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbn1cXG5cXG4uaW5wdXRQYXVzZUFjdGl2ZSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogMCBTb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzllOWU5ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcbi8q0KHQotCY0JvQmCDQlNCb0K8g0KHQm9CQ0JnQlNCe0JIqL1xcblxcbi5zbGlkZXMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyrQrdGC0L4g0LTQu9GPIGRpdiovXFxufVxcblxcbi5oaWRlU2xpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2VudGVyU2xpZGUge1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2xpZGVTaGlmdFJpZ2h0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbn1cXG5cXG4uc2xpZGVTaGlmdExlZnQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1wiXX1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzbGlkZXJcIjogXCJzbGlkZXJfMVNfblwiLFxuXHRcIm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyXCI6IFwibWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXJfUVhYMFwiLFxuXHRcImJ1dHRvblwiOiBcImJ1dHRvbl8zdy1oXCIsXG5cdFwiYnV0dG9uU2hpZnRTbGlkZXNcIjogXCJidXR0b25TaGlmdFNsaWRlc18xa29uXCIsXG5cdFwicmlnaHRCdXR0b25cIjogXCJyaWdodEJ1dHRvbl90Y0V4XCIsXG5cdFwiaW5wdXRQYXVzZVwiOiBcImlucHV0UGF1c2VfcFpzM1wiLFxuXHRcImlucHV0UGF1c2VOb3RBY3RpdmVcIjogXCJpbnB1dFBhdXNlTm90QWN0aXZlX3RyZWRcIixcblx0XCJpbnB1dFBhdXNlQWN0aXZlXCI6IFwiaW5wdXRQYXVzZUFjdGl2ZV8ySVAzXCIsXG5cdFwic2xpZGVzXCI6IFwic2xpZGVzXzN1M1lcIixcblx0XCJoaWRlU2xpZGVcIjogXCJoaWRlU2xpZGVfdVNwYlwiLFxuXHRcImNlbnRlclNsaWRlXCI6IFwiY2VudGVyU2xpZGVfMVVOVVwiLFxuXHRcInNsaWRlU2hpZnRSaWdodFwiOiBcInNsaWRlU2hpZnRSaWdodF9wd1BsXCIsXG5cdFwic2xpZGVTaGlmdExlZnRcIjogXCJzbGlkZVNoaWZ0TGVmdF8yQ1loXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgYXJyb3dPZkJ1dHRvbiBmcm9tICcuL2Fycm93LnN2ZydcclxuXHJcbmZ1bmN0aW9uIGFkZEJ1dHRvbkNvbnRyb2woc2xpZGVyLCBidXR0b25Db250cm9sLCBidXR0b25EZWZhdWx0U3R5bGVzKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHt0eXBlLCBidXR0b25Jbm5lck5vZGUgPSBudWxsLCBuYW1lLCBhbHQsIGNsYXNzTGlzdCA9IFtdfSA9IHt9KSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgaWYgKGJ1dHRvbklubmVyTm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgUFNFVURPX0JVVFRPTiAke25hbWV9YCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBhcnJvd09mQnV0dG9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzc0xpc3QuZm9yRWFjaCh2YWx1ZSA9PiBidXR0b24uY2xhc3NMaXN0LmFkZCh2YWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JhdGVCdXR0b25Db250cm9sKGJ1dHRvbkRlZmF1bHRTdHlsZXMpIHtcclxuICAgICAgICBpZiAoYnV0dG9uRGVmYXVsdFN0eWxlcykge1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25Jbm5lck5vZGU6IGFycm93T2ZCdXR0b24sXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd1JpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbc3R5bGVzLnJpZ2h0QnV0dG9uLCBzdHlsZXMuYnV0dG9uLCBzdHlsZXMuYnV0dG9uU2hpZnRTbGlkZXNdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiaW5wdXQgcGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtzdHlsZXMuaW5wdXRQYXVzZU5vdEFjdGl2ZSwgc3R5bGVzLmlucHV0UGF1c2UsIHN0eWxlcy5idXR0b25dXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uSW5uZXJOb2RlOiBhcnJvd09mQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IGxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtzdHlsZXMuYnV0dG9uLCBzdHlsZXMuYnV0dG9uU2hpZnRTbGlkZXNdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93UmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJpbnB1dCBwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IGxlZnRcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXR0b25Db250cm9sRWxlbWVudHNMaXN0ID0ge1xyXG4gICAgICAgIGxlZnRCdXR0b25Db250cm9sOiBudWxsLFxyXG4gICAgICAgIHJpZ2h0QnV0dG9uQ29udHJvbDogbnVsbCxcclxuICAgICAgICBwYXVzZUJ1dHRvbkNvbnRyb2w6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGJ1dHRvbkNvbnRyb2wpIHtcclxuICAgICAgICBjcmF0ZUJ1dHRvbkNvbnRyb2woYnV0dG9uRGVmYXVsdFN0eWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEJ1dHRvbkNvbnRyb2w7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBhZGRpbmdNaXNzaW5nU2xpZGVzKHNsaWRlc0VsZW1lbnRzQXJyYXkpIHtcclxuICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0Q2xvbmVFbGVtZW50ID0gc2xpZGVzRWxlbWVudHNBcnJheVswXS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHNlY29uZENsb25lRWxlbWVudCA9IGZpcnN0Q2xvbmVFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LnB1c2goZmlyc3RDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgIHNsaWRlci5hcHBlbmQoZmlyc3RDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkucHVzaChzZWNvbmRDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgIHNsaWRlci5hcHBlbmQoc2Vjb25kQ2xvbmVFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZUVsZW1lbnQgPSB2YWx1ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkucHVzaChjbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGNsb25lRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2xpZGVzRWxlbWVudHNBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkaW5nTWlzc2luZ1NsaWRlczsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjYgNTBcXFwiPjxkZWZzPjxjbGlwUGF0aCBpZD1cXFwiY2xpcC1hcnJvd1xcXCI+PHJlY3Qgd2lkdGg9XFxcIjI2XFxcIiBoZWlnaHQ9XFxcIjUwXFxcIj48L3JlY3Q+PC9jbGlwUGF0aD48L2RlZnM+PGcgaWQ9XFxcImFycm93XFxcIiBjbGlwLXBhdGg9XFxcInVybCgjY2xpcC1hcnJvdylcXFwiPjxyZWN0IHdpZHRoPVxcXCIyNlxcXCIgaGVpZ2h0PVxcXCI1MFxcXCIgZmlsbD1cXFwicmdiYSgyNTUsMjU1LDI1NSwwKVxcXCI+PC9yZWN0PjxwYXRoIGlkPVxcXCLQmtC+0L3RgtGD0YBfMVxcXCIgZGF0YS1uYW1lPVxcXCLQmtC+0L3RgtGD0YAgMVxcXCIgZD1cXFwiTTEwLjY2NSw1LjAyNiwzMy44NzMsMjguMjM0LDEwLjY2NSw1MS40NDJcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05LjUwMiAtNClcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzcwNzA3MFxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2Utd2lkdGg9XFxcIjFcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9iamVjdFNsaWRlclZpc2libGVTbGlkZXMoc2xpZGVzRWxlbWVudHNBcnJheSkge1xyXG4gICAgY29uc3Qgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyA9IHtcclxuICAgICAgICBfY3VycmVudFNsaWRlOiAwLFxyXG5cclxuICAgICAgICBnZXQgZ2V0Q3VycmVudCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRTbGlkZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXROZXh0KCkge1xyXG4gICAgICAgICAgICBsZXQgbmV4dFNsaWRlID0gdGhpcy5nZXRDdXJyZW50O1xyXG4gICAgICAgICAgICBuZXh0U2xpZGUrKztcclxuICAgICAgICAgICAgaWYgKG5leHRTbGlkZSA+PSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5leHRTbGlkZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldFByZXYoKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2U2xpZGUgPSB0aGlzLmdldEN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHByZXZTbGlkZS0tO1xyXG4gICAgICAgICAgICBpZiAoMCA+IHByZXZTbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlID0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJldlNsaWRlXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ29OZXh0KCkge1xyXG4gICAgICAgICAgICArK3RoaXMuX2N1cnJlbnRTbGlkZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTbGlkZSA+PSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFNsaWRlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdvUHJldigpIHtcclxuICAgICAgICAgICAgLS10aGlzLl9jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgICAgIGlmICgwID4gdGhpcy5fY3VycmVudFNsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50U2xpZGUgPSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU9iamVjdFNsaWRlclZpc2libGVTbGlkZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRET01EYXRlKGlkRWxlbWVudCkge1xyXG5cclxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkRWxlbWVudCk7XHJcbiAgICBpZiAoc2xpZGVyID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyVjJXMnLFxyXG4gICAgICAgICAgICAnZm9udC1zaXplOiAxNnB4OyBjb2xvcjogcmVkOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhN2EwOyBwYWRkaW5nOiAycHggNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBtYXJnaW46IDIwcHggYXV0bzsnLFxyXG4gICAgICAgICAgICBgc2xpZGVyIHwgaWQgJHtpZEVsZW1lbnR9IGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICAgICAgcmV0dXJuIHtoYXNFcnJvcjogdHJ1ZX07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2xpZGVzQXJyYXkocGFyZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUudGFnTmFtZSAhPT0gXCJJTlBVVFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzbGlkZXNFbGVtZW50c0FycmF5ID0gZ2V0U2xpZGVzQXJyYXkoc2xpZGVyKTtcclxuICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nICggJyVjJXMnLFxyXG4gICAgICAgICAgICAnZm9udC1zaXplOiAxNnB4OyBjb2xvcjogcmVkOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhN2EwOyBwYWRkaW5nOiAycHggNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBtYXJnaW46IDIwcHggYXV0bzsnLFxyXG4gICAgICAgICAgICBgc2xpZGVyIHwgY29udGFpbmVyICcjJHtpZEVsZW1lbnR9JyBpcyBlbXB0eWApO1xyXG4gICAgICAgIHJldHVybiB7aGFzRXJyb3I6IHRydWV9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNsaWRlcldpZHRoID0gc2xpZGVyLmNsaWVudFdpZHRoO1xyXG5cclxuICAgIGNvbnN0IGhhc0Vycm9yID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzbGlkZXJFbGVtZW50OiBzbGlkZXIsXHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheV9ub3RQcm9jZXNzZWQ6IHNsaWRlc0VsZW1lbnRzQXJyYXksXHJcbiAgICAgICAgc2xpZGVyV2lkdGg6IHNsaWRlcldpZHRoLFxyXG4gICAgICAgIGhhc0Vycm9yOiBoYXNFcnJvclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRET01EYXRlOyIsIlwidXNlIHN0cmljdFwiO1xuLy/Qn9C10YDQuNC40LzQtdC90L7QstCw0YLRjCDRhNCw0LnQuywg0LIgaW5kZXguanNcbmltcG9ydCBnZXRET01EYXRlIGZyb20gJy4vZ2V0RE9NRGF0ZS5qcyc7XG5pbXBvcnQgY3JlYXRlT2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyBmcm9tIFwiLi9jcmVhdGVPYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmpzXCI7XG5pbXBvcnQgYWRkaW5nTWlzc2luZ1NsaWRlcyBmcm9tICcuL2FkZGluZ01pc3NpbmdTbGlkZXMuanMnO1xuaW1wb3J0IGFkZEJ1dHRvbkNvbnRyb2wgZnJvbSAnLi9hZGRCdXR0b25Db250cm9sLmpzJztcbmltcG9ydCBzZXRTbGlkZXJTdHlsZXMgZnJvbSAnLi9zZXRTbGlkZXJTdHlsZXMuanMnO1xuaW1wb3J0IHNldFNsaWRlc1N0eWxlcyBmcm9tICcuL3NldFNsaWRlc1N0eWxlcy5qcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZXIoaWRFbGVtZW50LCB7XG4gICAgYXV0b3BsYXkgPSB0cnVlLFxuICAgIHRpbWVPZkNoYW5naW5nU2xpZGVzID0gNTAwMCxcbiAgICB0aW1lVG9DaGFuZ2VTbGlkZXMgPSAxMDAwLFxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbk5hbWUgPSBcImxpbmVhclwiLFxuICAgIGJ1dHRvbkNvbnRyb2wgPSB0cnVlLFxuICAgIHRvdWNobW92ZSA9IHRydWUsXG4gICAgYnV0dG9uRGVmYXVsdFN0eWxlcyA9IHRydWUsXG4gICAgc2V0RGVmYXVsdE1pbmltdW1TaXplcyA9IHRydWUsXG59ID0ge30pIHtcblxuICAgIGZ1bmN0aW9uIHNldFNsaWRlc0Rpc3BsYXkoKSB7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldE5leHQoKV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldEN1cnJlbnRdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2KCldLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9zaXRpb25pbmdTbGlkZXMoKSB7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXROZXh0KCldLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlU2hpZnRSaWdodCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXROZXh0KCldLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnNsaWRlU2hpZnRMZWZ0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldEN1cnJlbnRdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmNlbnRlclNsaWRlKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldEN1cnJlbnRdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnNsaWRlU2hpZnRSaWdodCwgc3R5bGVzLnNsaWRlU2hpZnRMZWZ0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldFByZXYoKV0uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVTaGlmdExlZnQpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0UHJldigpXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZVNoaWZ0UmlnaHQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvTGVmdFNsaWRlKCkge1xuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdvUHJldigpO1xuICAgICAgICBzZXRTbGlkZXNEaXNwbGF5KCk7XG4gICAgICAgIHBvc2l0aW9uaW5nU2xpZGVzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoVG9SaWdodFNsaWRlKCkge1xuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdvTmV4dCgpO1xuICAgICAgICBzZXRTbGlkZXNEaXNwbGF5KCk7XG4gICAgICAgIHBvc2l0aW9uaW5nU2xpZGVzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVNsaWRlclRvdWNoKGV2ZW50KSB7XG4gICAgICAgIGlmIChzd2l0Y2hTbGlkZUJsb2NrZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBzd2lwZUxlbmd0aCA9IDA7XG5cbiAgICAgICAgc3dpcGVMZW5ndGggKz0gY2xpZW50WCAtIGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWDtcbiAgICAgICAgaWYgKHN3aXBlTGVuZ3RoID4gc2xpZGVyV2lkdGggLyAzKSB7XG4gICAgICAgICAgICBsZWZ0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVMZW5ndGggPCAtc2xpZGVyV2lkdGggLyAzKSB7XG4gICAgICAgICAgICByaWdodFNsaWRlclNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b3VjaFNjcm9sbEJsb2NrZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRBdXRvcGxheSh0aW1lT2ZDaGFuZ2luZ1NsaWRlcykge1xuICAgICAgICBhdXRvbHBheVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gcmlnaHRTbGlkZXJTaGlmdCgpLCB0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcEF1dG9wbGF5KCkge1xuICAgICAgICBjbGVhckludGVydmFsKGF1dG9scGF5VGltZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5KGF1dG9scGF5VGltZXIpO1xuICAgICAgICBzdGFydEF1dG9wbGF5KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXVzZVN3aXRjaCgpIHtcbiAgICAgICAgaWYgKCFhdXRvcGxheSkge1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5pbnB1dFBhdXNlTm90QWN0aXZlKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmlucHV0UGF1c2VBY3RpdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5pbnB1dFBhdXNlQWN0aXZlKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmlucHV0UGF1c2VOb3RBY3RpdmUpO1xuICAgICAgICB9XG4gICAgICAgIGF1dG9wbGF5ID0gIWF1dG9wbGF5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHNldWRvVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmIChoYXNQc2V1ZG9Ub3VjaE1vdXNlKSB7XG4gICAgICAgICAgICBsZXQgcHNldWRvRXZlbnQgPSB7dG91Y2hlczogW3tjbGllbnRYOiAwfSxdfTtcbiAgICAgICAgICAgIHBzZXVkb0V2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyVG91Y2gocHNldWRvRXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHNldWRvVG91Y2hNb3ZlU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaGFzUHNldWRvVG91Y2hNb3VzZSA9IHRydWU7XG4gICAgICAgIGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIHN0b3BBdXRvcGxheSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHNldWRvVG91Y2hNb3ZlRW5kKCkge1xuICAgICAgICBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gZmFsc2U7XG4gICAgICAgIHN3aXBlTGVuZ3RoID0gMDtcbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJpZ2h0U2xpZGVyU2hpZnQoKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSB0cnVlO1xuICAgICAgICBzd2l0Y2hUb1JpZ2h0U2xpZGUoKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldE5leHQoKV0uY2xhc3NMaXN0LmFkZChzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXROZXh0KCldLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DaGFuZ2VTbGlkZXMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGVmdFNsaWRlclNoaWZ0KCkge1xuICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgc3dpdGNoU2xpZGVCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgc3dpdGNoVG9MZWZ0U2xpZGUoKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldFByZXYoKV0uY2xhc3NMaXN0LmFkZChzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2KCldLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIH0sIHRpbWVUb0NoYW5nZVNsaWRlcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuXG4gICAgICAgIGlmICh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA8IDQpIHtcbiAgICAgICAgICAgIHRpbWVPZkNoYW5naW5nU2xpZGVzID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA8ICh0aW1lVG9DaGFuZ2VTbGlkZXMgLyAxMDApICogMTIwKSB7XG4gICAgICAgICAgICB0aW1lVG9DaGFuZ2VTbGlkZXMgPSAodGltZVRvQ2hhbmdlU2xpZGVzIC8gMTAwKSAqIDgwO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2xpZGVyU3R5bGVzKHNsaWRlckVsZW1lbnQsIHNldERlZmF1bHRNaW5pbXVtU2l6ZXMpO1xuICAgICAgICBzZXRTbGlkZXNTdHlsZXMoc2xpZGVzRWxlbWVudHNBcnJheSk7XG4gICAgICAgIHBvc2l0aW9uaW5nU2xpZGVzKCk7XG4gICAgICAgIHNldFNsaWRlc0Rpc3BsYXkoKTtcblxuICAgICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIHN0YXJ0QXV0b3BsYXkodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHZhbHVlLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke3RpbWVUb0NoYW5nZVNsaWRlc31tc2A7XG4gICAgICAgICAgICB2YWx1ZS5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25OYW1lO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodG91Y2htb3ZlKSB7XG4gICAgICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBtb3ZlU2xpZGVyVG91Y2gpO1xuICAgICAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2hTY3JvbGxCbG9ja2VyKTtcblxuICAgICAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHBzZXVkb1RvdWNoTW92ZVN0YXJ0KTtcbiAgICAgICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBwc2V1ZG9Ub3VjaE1vdmUpO1xuICAgICAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBwc2V1ZG9Ub3VjaE1vdmVFbmQpO1xuICAgICAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBwc2V1ZG9Ub3VjaE1vdmVFbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ1dHRvbkNvbnRyb2wpIHtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzd2l0Y2hTbGlkZUJsb2NrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdFNsaWRlclNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzd2l0Y2hTbGlkZUJsb2NrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRTbGlkZXJTaGlmdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhdXNlU3dpdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhdXRvbHBheVRpbWVyID0gbnVsbDtcbiAgICBsZXQgaGFzUHNldWRvVG91Y2hNb3VzZSA9IGZhbHNlO1xuICAgIGxldCBzd2lwZUxlbmd0aCA9IDA7XG4gICAgbGV0IGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCA9IDA7XG4gICAgbGV0IHN3aXRjaFNsaWRlQmxvY2tlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2xpZGVyRWxlbWVudCxcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheV9ub3RQcm9jZXNzZWQsXG4gICAgICAgIHNsaWRlcldpZHRoLFxuICAgICAgICBoYXNFcnJvclxuICAgIH0gPSBnZXRET01EYXRlKGlkRWxlbWVudCk7XG4gICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVzRWxlbWVudHNBcnJheSA9IGFkZGluZ01pc3NpbmdTbGlkZXMoc2xpZGVzRWxlbWVudHNBcnJheV9ub3RQcm9jZXNzZWQpO1xuICAgIGNvbnN0IG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMgPSBjcmVhdGVPYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzKHNsaWRlc0VsZW1lbnRzQXJyYXkpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QgPSBhZGRCdXR0b25Db250cm9sKHNsaWRlckVsZW1lbnQsIGJ1dHRvbkNvbnRyb2wsIGJ1dHRvbkRlZmF1bHRTdHlsZXMpO1xuXG4gICAgaW5pdCgpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNsaWRlcjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gc2V0U2xpZGVyU3R5bGVzKHNsaWRlciwgc2V0RGVmYXVsdE1pbmltdW1TaXplcykge1xyXG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlcik7XHJcbiAgICBpZiAoc2V0RGVmYXVsdE1pbmltdW1TaXplcykge1xyXG4gICAgICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5taW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldFNsaWRlclN0eWxlcyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBzZXRTbGlkZXNTdHlsZShzbGlkZXNFbGVtZW50c0FycmF5KSB7XHJcbiAgICBmdW5jdGlvbiBhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoKCkge1xyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoKHNsaWRlc0VsZW1lbnRzQXJyYXkpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldFNsaWRlc1N0eWxlOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9