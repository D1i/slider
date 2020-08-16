this["createSlider"] =
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

/***/ "./arrow.svg":
/*!*******************!*\
  !*** ./arrow.svg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 26 50\"><defs><clipPath id=\"clip-arrow\"><rect width=\"26\" height=\"50\"></rect></clipPath></defs><g id=\"arrow\" clip-path=\"url(#clip-arrow)\"><rect width=\"26\" height=\"50\" fill=\"rgba(255,255,255,0)\"></rect><path id=\"Контур_1\" data-name=\"Контур 1\" d=\"M10.665,5.026,33.873,28.234,10.665,51.442\" transform=\"translate(-9.502 -4)\" fill=\"none\" stroke=\"#707070\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"></path></g></svg>"

/***/ }),

/***/ "./gettingStartedWithDOM.js":
/*!**********************************!*\
  !*** ./gettingStartedWithDOM.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _arrow = __webpack_require__(/*! ./arrow.svg */ "./arrow.svg");

var _arrow2 = _interopRequireDefault(_arrow);

var _style = __webpack_require__(/*! ./style.css */ "./style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gettingStartedWithDOM(idElement, setDefaultMinimumSizes, buttonControl, buttonDefaultStyles) {

    var slider = document.getElementById(idElement);
    if (slider === null) {
        console.log('%c%s', 'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;', 'slider | id ' + idElement + ' does not exist');
        return [null];
    }

    function getSlidesArray(parent) {
        return Array.from(parent.children).map(function (value) {
            if (value.tagName !== "INPUT") {
                value.classList.add(_style2.default.slides);
                return value;
            }
        });
    }

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

    function setStartingPositionsSlides() {
        objectSliderVisibleSlides.nextSlide = slidesElementsArray.length - 1;
        objectSliderVisibleSlides.currentSlide = 0;
        objectSliderVisibleSlides.prevSlide = 1;
    }

    function createButton() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            type = _ref.type,
            _ref$buttonInnerNode = _ref.buttonInnerNode,
            buttonInnerNode = _ref$buttonInnerNode === undefined ? null : _ref$buttonInnerNode,
            name = _ref.name,
            alt = _ref.alt,
            _ref$classList = _ref.classList,
            classList = _ref$classList === undefined ? [] : _ref$classList;

        var button = null;
        if (buttonInnerNode === null) {
            button = document.createElement("input");
            button.setAttribute("type", type);
            button.setAttribute("name", name);
        } else {
            button = document.createElement("div");
            button.setAttribute("name", 'PSEUDO_BUTTON ' + name);
            button.innerHTML = _arrow2.default;
        }
        classList.forEach(function (value) {
            return button.classList.add(value);
        });
        return button;
    }

    function crateButtonControl(defaultStyles) {
        if (defaultStyles) {

            buttonControlElementsList.rightButtonControl = createButton({
                type: "button",
                buttonInnerNode: _arrow2.default,
                name: "arrowRight",
                alt: "arrow right",
                classList: [_style2.default.rightButton, _style2.default.button, _style2.default.buttonShiftSlides]
            });
            slider.append(buttonControlElementsList.rightButtonControl);

            buttonControlElementsList.pauseButtonControl = createButton({
                type: "button",
                name: "pause",
                alt: "input pause",
                classList: [_style2.default.inputPauseNotActive, _style2.default.inputPause, _style2.default.button]
            });
            slider.append(buttonControlElementsList.pauseButtonControl);

            buttonControlElementsList.leftButtonControl = createButton({
                type: "button",
                buttonInnerNode: _arrow2.default,
                name: "arrowLeft",
                alt: "arrow left",
                classList: [_style2.default.button, _style2.default.buttonShiftSlides]
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

    function automaticSettingPictureWidth() {
        slidesElementsArray.forEach(function (value) {
            value.classList.add(_style2.default.slides);
        });
    }

    var slidesElementsArray = addingMissingSlides(getSlidesArray(slider));
    if (slidesElementsArray === null) {
        console.log('%c%s', 'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;', 'slider | container \'#' + idElement + '\' is empty');
        return [null];
    }

    slider.classList.add(_style2.default.slider);
    if (setDefaultMinimumSizes) {
        slider.classList.add(_style2.default.minWidthAndMinHeightSlider);
    }
    var sliderWidth = slider.clientWidth;

    var objectSliderVisibleSlides = {
        nextSlide: 0,
        currentSlide: 1,
        prevSlide: 2
    };

    var buttonControlElementsList = {
        leftButtonControl: null,
        rightButtonControl: null,
        pauseButtonControl: null
    };

    setStartingPositionsSlides(buttonDefaultStyles);

    if (buttonControl) {
        crateButtonControl(buttonDefaultStyles);
    }

    automaticSettingPictureWidth();

    return [slider, sliderWidth, slidesElementsArray, {
        nextSlide: objectSliderVisibleSlides.nextSlide,
        currentSlide: objectSliderVisibleSlides.currentSlide,
        prevSlide: objectSliderVisibleSlides.prevSlide
    }, {
        leftButtonControl: buttonControlElementsList.leftButtonControl,
        rightButtonControl: buttonControlElementsList.rightButtonControl,
        pauseButtonControl: buttonControlElementsList.pauseButtonControl
    }];
}

exports.default = gettingStartedWithDOM;

/***/ }),

/***/ "./slider.js":
/*!*******************!*\
  !*** ./slider.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _gettingStartedWithDOM = __webpack_require__(/*! ./gettingStartedWithDOM.js */ "./gettingStartedWithDOM.js");

var _gettingStartedWithDOM2 = _interopRequireDefault(_gettingStartedWithDOM);

var _style = __webpack_require__(/*! ./style.css */ "./style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSlider(idElement) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$autoplay = _ref.autoplay,
        autoplay = _ref$autoplay === undefined ? true : _ref$autoplay,
        _ref$timeOfChangingSl = _ref.timeOfChangingSlides,
        timeOfChangingSlides = _ref$timeOfChangingSl === undefined ? 5000 : _ref$timeOfChangingSl,
        _ref$timeToChangeSlid = _ref.timeToChangeSlides,
        timeToChangeSlides = _ref$timeToChangeSlid === undefined ? 1000 : _ref$timeToChangeSlid,
        _ref$transitionTiming = _ref.transitionTimingFunctionName,
        transitionTimingFunctionName = _ref$transitionTiming === undefined ? "linear" : _ref$transitionTiming,
        _ref$buttonControl = _ref.buttonControl,
        buttonControl = _ref$buttonControl === undefined ? true : _ref$buttonControl,
        _ref$touchmove = _ref.touchmove,
        touchmove = _ref$touchmove === undefined ? true : _ref$touchmove,
        _ref$buttonDefaultSty = _ref.buttonDefaultStyles,
        buttonDefaultStyles = _ref$buttonDefaultSty === undefined ? true : _ref$buttonDefaultSty,
        _ref$setDefaultMinimu = _ref.setDefaultMinimumSizes,
        setDefaultMinimumSizes = _ref$setDefaultMinimu === undefined ? true : _ref$setDefaultMinimu;

    var _gettingStartedWithDO = (0, _gettingStartedWithDOM2.default)(idElement, setDefaultMinimumSizes, buttonControl, buttonDefaultStyles),
        _gettingStartedWithDO2 = _slicedToArray(_gettingStartedWithDO, 5),
        slider = _gettingStartedWithDO2[0],
        sliderWidth = _gettingStartedWithDO2[1],
        slidesElementsArray = _gettingStartedWithDO2[2],
        objectSliderVisibleSlides = _gettingStartedWithDO2[3],
        buttonControlElementsList = _gettingStartedWithDO2[4];

    if (slider === null) {
        return;
    }
    positioningSlides();

    function setSlidesDisplay() {
        slidesElementsArray.forEach(function (value) {
            value.classList.add(_style2.default.hideSlide);
        });
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove(_style2.default.hideSlide);
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.remove(_style2.default.hideSlide);
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove(_style2.default.hideSlide);
    }

    function positioningSlides() {
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.add(_style2.default.slideShiftRight);
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove(_style2.default.slideShiftLeft);
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.add(_style2.default.centerSlide);
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.remove(_style2.default.slideShiftRight, _style2.default.slideShiftLeft);
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add(_style2.default.slideShiftLeft);
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add(_style2.default.slideShiftRight);
    }

    function switchToLeftSlide() {
        ++objectSliderVisibleSlides.nextSlide;
        ++objectSliderVisibleSlides.currentSlide;
        ++objectSliderVisibleSlides.prevSlide;
        switch (slidesElementsArray.length) {
            case objectSliderVisibleSlides.nextSlide:
                objectSliderVisibleSlides.nextSlide = 0;
                break;
            case objectSliderVisibleSlides.currentSlide:
                objectSliderVisibleSlides.currentSlide = 0;
                break;
            case objectSliderVisibleSlides.prevSlide:
                objectSliderVisibleSlides.prevSlide = 0;
                break;
        }
        setSlidesDisplay();
        positioningSlides();
    }

    function switchToRightSlide() {
        --objectSliderVisibleSlides.nextSlide;
        --objectSliderVisibleSlides.currentSlide;
        --objectSliderVisibleSlides.prevSlide;
        switch (-1) {
            case objectSliderVisibleSlides.nextSlide:
                objectSliderVisibleSlides.nextSlide = slidesElementsArray.length - 1;
                break;
            case objectSliderVisibleSlides.currentSlide:
                objectSliderVisibleSlides.currentSlide = slidesElementsArray.length - 1;
                break;
            case objectSliderVisibleSlides.prevSlide:
                objectSliderVisibleSlides.prevSlide = slidesElementsArray.length - 1;
                break;
        }
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
            buttonControlElementsList.pauseButtonControl.classList.add(_style2.default.inputPauseNotActive);
            buttonControlElementsList.pauseButtonControl.classList.remove(_style2.default.inputPauseActive);
        } else {
            stopAutoplay();
            buttonControlElementsList.pauseButtonControl.classList.add(_style2.default.inputPauseActive);
            buttonControlElementsList.pauseButtonControl.classList.remove(_style2.default.inputPauseNotActive);
        }
        autoplay = !autoplay;
    }

    function pseudoTouchMove(event) {
        if (hasPseudoTouchMouse) {
            var pseudoEvent = { touches: [{ clientX: 0 }] };
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
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.add(_style2.default.hideSlide);
        setTimeout(function () {
            autoplayReset(timeOfChangingSlides);
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove(_style2.default.hideSlide);
        }, timeToChangeSlides);
    }

    function leftSliderShift() {
        stopAutoplay();
        switchSlideBlocked = true;
        switchToLeftSlide();
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add(_style2.default.hideSlide);
        setTimeout(function () {
            autoplayReset(timeOfChangingSlides);
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove(_style2.default.hideSlide);
        }, timeToChangeSlides);
    }

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
            value.style.transitionDuration = timeToChangeSlides + 'ms';
            value.style.transitionTimingFunction = transitionTimingFunctionName;
        });
    }

    var gestureStartingPositionX = 0;
    var swipeLength = 0;
    var switchSlideBlocked = false;
    var autolpayTimer = null;
    var hasPseudoTouchMouse = false;

    init();

    if (touchmove) {
        slider.addEventListener("touchstart", function (event) {
            gestureStartingPositionX = event.touches[0].clientX;
            stopAutoplay();
        });
        slider.addEventListener("touchmove", moveSliderTouch);
        slider.addEventListener("touchend", function () {
            swipeLength = 0;
            autoplayReset(timeOfChangingSlides);
        });

        slider.addEventListener("touchmove", touchScrollBlocker);

        slider.addEventListener("mousedown", pseudoTouchMoveStart);
        slider.addEventListener("mousemove", pseudoTouchMove);
        slider.addEventListener("mouseup", pseudoTouchMoveEnd);
        slider.addEventListener("mouseleave", pseudoTouchMoveEnd);
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

exports.default = createSlider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGVTbGlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3JlYXRlU2xpZGVyLy4vc3R5bGUuY3NzIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlU2xpZGVyLy4vYXJyb3cuc3ZnIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uL2dldHRpbmdTdGFydGVkV2l0aERPTS5qcyIsIndlYnBhY2s6Ly9jcmVhdGVTbGlkZXIvLi9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlU2xpZGVyLy4vc3R5bGUuY3NzPzUzZTciXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiZ2V0dGluZ1N0YXJ0ZWRXaXRoRE9NIiwiaWRFbGVtZW50Iiwic2V0RGVmYXVsdE1pbmltdW1TaXplcyIsImJ1dHRvbkNvbnRyb2wiLCJidXR0b25EZWZhdWx0U3R5bGVzIiwic2xpZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRTbGlkZXNBcnJheSIsInBhcmVudCIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwidmFsdWUiLCJ0YWdOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGVzIiwic2xpZGVzIiwiYWRkaW5nTWlzc2luZ1NsaWRlcyIsInNsaWRlc0VsZW1lbnRzQXJyYXkiLCJmaXJzdENsb25lRWxlbWVudCIsImNsb25lTm9kZSIsInNlY29uZENsb25lRWxlbWVudCIsImFwcGVuZCIsImZvckVhY2giLCJjbG9uZUVsZW1lbnQiLCJzZXRTdGFydGluZ1Bvc2l0aW9uc1NsaWRlcyIsIm9iamVjdFNsaWRlclZpc2libGVTbGlkZXMiLCJuZXh0U2xpZGUiLCJjdXJyZW50U2xpZGUiLCJwcmV2U2xpZGUiLCJjcmVhdGVCdXR0b24iLCJ0eXBlIiwiYnV0dG9uSW5uZXJOb2RlIiwibmFtZSIsImFsdCIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhcnJvd09mQnV0dG9uIiwiY3JhdGVCdXR0b25Db250cm9sIiwiZGVmYXVsdFN0eWxlcyIsImJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QiLCJyaWdodEJ1dHRvbkNvbnRyb2wiLCJyaWdodEJ1dHRvbiIsImJ1dHRvblNoaWZ0U2xpZGVzIiwicGF1c2VCdXR0b25Db250cm9sIiwiaW5wdXRQYXVzZU5vdEFjdGl2ZSIsImlucHV0UGF1c2UiLCJsZWZ0QnV0dG9uQ29udHJvbCIsImF1dG9tYXRpY1NldHRpbmdQaWN0dXJlV2lkdGgiLCJtaW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlciIsInNsaWRlcldpZHRoIiwiY2xpZW50V2lkdGgiLCJjcmVhdGVTbGlkZXIiLCJhdXRvcGxheSIsInRpbWVPZkNoYW5naW5nU2xpZGVzIiwidGltZVRvQ2hhbmdlU2xpZGVzIiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZSIsInRvdWNobW92ZSIsInBvc2l0aW9uaW5nU2xpZGVzIiwic2V0U2xpZGVzRGlzcGxheSIsImhpZGVTbGlkZSIsInJlbW92ZSIsInNsaWRlU2hpZnRSaWdodCIsInNsaWRlU2hpZnRMZWZ0IiwiY2VudGVyU2xpZGUiLCJzd2l0Y2hUb0xlZnRTbGlkZSIsInN3aXRjaFRvUmlnaHRTbGlkZSIsIm1vdmVTbGlkZXJUb3VjaCIsImV2ZW50Iiwic3dpdGNoU2xpZGVCbG9ja2VkIiwiY2xpZW50WCIsInRvdWNoZXMiLCJzd2lwZUxlbmd0aCIsImdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCIsImxlZnRTbGlkZXJTaGlmdCIsInJpZ2h0U2xpZGVyU2hpZnQiLCJ0b3VjaFNjcm9sbEJsb2NrZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXJ0QXV0b3BsYXkiLCJhdXRvbHBheVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJzdG9wQXV0b3BsYXkiLCJjbGVhckludGVydmFsIiwiYXV0b3BsYXlSZXNldCIsInBhdXNlU3dpdGNoIiwiaW5wdXRQYXVzZUFjdGl2ZSIsInBzZXVkb1RvdWNoTW92ZSIsImhhc1BzZXVkb1RvdWNoTW91c2UiLCJwc2V1ZG9FdmVudCIsInBzZXVkb1RvdWNoTW92ZVN0YXJ0IiwicHNldWRvVG91Y2hNb3ZlRW5kIiwic2V0VGltZW91dCIsImluaXQiLCJzdHlsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdE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LENBQUMsMEhBQWdFOztBQUVsRzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJkaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zbGlkZXIuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKtCh0KLQmNCb0Jgg0JTQm9CvINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5zbGlkZXJfMVNfbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXJfUVhYMCB7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQmtCd0J7Qn9Ce0Jog0KHQm9CQ0JnQlNCV0KDQkCovXFxuXFxuLmJ1dHRvbl8zdy1oIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5idXR0b25TaGlmdFNsaWRlc18xa29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHRCdXR0b25fdGNFeCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5pbnB1dFBhdXNlX3BaczMge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IGF1dG8gMCAxNXB4IDA7XFxufVxcblxcbi5pbnB1dFBhdXNlTm90QWN0aXZlX3RyZWQge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbiAgICBib3JkZXItbGVmdDogNXB4IFNvbGlkICM5ZTllOWU7XFxufVxcblxcbi5pbnB1dFBhdXNlQWN0aXZlXzJJUDMge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDAgU29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM5ZTllOWU7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG4vKtCh0KLQmNCb0Jgg0JTQm9CvINCh0JvQkNCZ0JTQntCSKi9cXG5cXG4uc2xpZGVzXzN1M1kge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyrQrdGC0L4g0LTQu9GPIGRpdiovXFxufVxcblxcbi5oaWRlU2xpZGVfdVNwYiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jZW50ZXJTbGlkZV8xVU5VIHtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnNsaWRlU2hpZnRSaWdodF9wd1BsIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbn1cXG5cXG4uc2xpZGVTaGlmdExlZnRfMkNZaCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFCQUFxQjs7QUFFckI7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUEsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7O0FBRTVCO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUEsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QixvQkFBb0I7O0FBRXBCO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUUsY0FBYztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUEsNEJBQTRCXCIsXCJmaWxlXCI6XCJzdHlsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0JXQoNCQKi9cXG5cXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5taW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlciB7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQmtCd0J7Qn9Ce0Jog0KHQm9CQ0JnQlNCV0KDQkCovXFxuXFxuLmJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uYnV0dG9uU2hpZnRTbGlkZXMge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5yaWdodEJ1dHRvbiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5pbnB1dFBhdXNlIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiBhdXRvIDAgMTVweCAwO1xcbn1cXG5cXG4uaW5wdXRQYXVzZU5vdEFjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IFNvbGlkICM5ZTllOWU7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggU29saWQgIzllOWU5ZTtcXG59XFxuXFxuLmlucHV0UGF1c2VBY3RpdmUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDAgU29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM5ZTllOWU7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG4vKtCh0KLQmNCb0Jgg0JTQm9CvINCh0JvQkNCZ0JTQntCSKi9cXG5cXG4uc2xpZGVzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8q0K3RgtC+INC00LvRjyBkaXYqL1xcbn1cXG5cXG4uaGlkZVNsaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNlbnRlclNsaWRlIHtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnNsaWRlU2hpZnRSaWdodCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG59XFxuXFxuLnNsaWRlU2hpZnRMZWZ0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cIl19XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2xpZGVyXCI6IFwic2xpZGVyXzFTX25cIixcblx0XCJtaW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlclwiOiBcIm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyX1FYWDBcIixcblx0XCJidXR0b25cIjogXCJidXR0b25fM3ctaFwiLFxuXHRcImJ1dHRvblNoaWZ0U2xpZGVzXCI6IFwiYnV0dG9uU2hpZnRTbGlkZXNfMWtvblwiLFxuXHRcInJpZ2h0QnV0dG9uXCI6IFwicmlnaHRCdXR0b25fdGNFeFwiLFxuXHRcImlucHV0UGF1c2VcIjogXCJpbnB1dFBhdXNlX3BaczNcIixcblx0XCJpbnB1dFBhdXNlTm90QWN0aXZlXCI6IFwiaW5wdXRQYXVzZU5vdEFjdGl2ZV90cmVkXCIsXG5cdFwiaW5wdXRQYXVzZUFjdGl2ZVwiOiBcImlucHV0UGF1c2VBY3RpdmVfMklQM1wiLFxuXHRcInNsaWRlc1wiOiBcInNsaWRlc18zdTNZXCIsXG5cdFwiaGlkZVNsaWRlXCI6IFwiaGlkZVNsaWRlX3VTcGJcIixcblx0XCJjZW50ZXJTbGlkZVwiOiBcImNlbnRlclNsaWRlXzFVTlVcIixcblx0XCJzbGlkZVNoaWZ0UmlnaHRcIjogXCJzbGlkZVNoaWZ0UmlnaHRfcHdQbFwiLFxuXHRcInNsaWRlU2hpZnRMZWZ0XCI6IFwic2xpZGVTaGlmdExlZnRfMkNZaFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjYgNTBcXFwiPjxkZWZzPjxjbGlwUGF0aCBpZD1cXFwiY2xpcC1hcnJvd1xcXCI+PHJlY3Qgd2lkdGg9XFxcIjI2XFxcIiBoZWlnaHQ9XFxcIjUwXFxcIj48L3JlY3Q+PC9jbGlwUGF0aD48L2RlZnM+PGcgaWQ9XFxcImFycm93XFxcIiBjbGlwLXBhdGg9XFxcInVybCgjY2xpcC1hcnJvdylcXFwiPjxyZWN0IHdpZHRoPVxcXCIyNlxcXCIgaGVpZ2h0PVxcXCI1MFxcXCIgZmlsbD1cXFwicmdiYSgyNTUsMjU1LDI1NSwwKVxcXCI+PC9yZWN0PjxwYXRoIGlkPVxcXCLQmtC+0L3RgtGD0YBfMVxcXCIgZGF0YS1uYW1lPVxcXCLQmtC+0L3RgtGD0YAgMVxcXCIgZD1cXFwiTTEwLjY2NSw1LjAyNiwzMy44NzMsMjguMjM0LDEwLjY2NSw1MS40NDJcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05LjUwMiAtNClcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzcwNzA3MFxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2Utd2lkdGg9XFxcIjFcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBhcnJvd09mQnV0dG9uIGZyb20gJy4vYXJyb3cuc3ZnJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBnZXR0aW5nU3RhcnRlZFdpdGhET00oaWRFbGVtZW50LCBzZXREZWZhdWx0TWluaW11bVNpemVzLCBidXR0b25Db250cm9sLCBidXR0b25EZWZhdWx0U3R5bGVzKSB7XHJcblxyXG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRFbGVtZW50KTtcclxuICAgIGlmIChzbGlkZXIgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyAoICclYyVzJyxcclxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHJlZDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTdhMDsgcGFkZGluZzogMnB4IDVweDsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgbWFyZ2luOiAyMHB4IGF1dG87JyxcclxuICAgICAgICAgICAgYHNsaWRlciB8IGlkICR7aWRFbGVtZW50fSBkb2VzIG5vdCBleGlzdGAgKTtcclxuICAgICAgICByZXR1cm4gW251bGxdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNsaWRlc0FycmF5KHBhcmVudCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikubWFwKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLnRhZ05hbWUgIT09IFwiSU5QVVRcIikge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZGluZ01pc3NpbmdTbGlkZXMoc2xpZGVzRWxlbWVudHNBcnJheSkge1xyXG4gICAgICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdENsb25lRWxlbWVudCA9IHNsaWRlc0VsZW1lbnRzQXJyYXlbMF0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgc2Vjb25kQ2xvbmVFbGVtZW50ID0gZmlyc3RDbG9uZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LnB1c2goZmlyc3RDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGZpcnN0Q2xvbmVFbGVtZW50KTtcclxuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5wdXNoKHNlY29uZENsb25lRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoc2Vjb25kQ2xvbmVFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xvbmVFbGVtZW50ID0gdmFsdWUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5wdXNoKGNsb25lRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGNsb25lRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2xpZGVzRWxlbWVudHNBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdGFydGluZ1Bvc2l0aW9uc1NsaWRlcygpIHtcclxuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZSA9IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5wcmV2U2xpZGUgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih7dHlwZSwgYnV0dG9uSW5uZXJOb2RlID0gbnVsbCwgbmFtZSwgYWx0LCBjbGFzc0xpc3QgPSBbXX0gPSB7fSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBudWxsO1xyXG4gICAgICAgIGlmIChidXR0b25Jbm5lck5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYFBTRVVET19CVVRUT04gJHtuYW1lfWApO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYXJyb3dPZkJ1dHRvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3NMaXN0LmZvckVhY2godmFsdWUgPT4gYnV0dG9uLmNsYXNzTGlzdC5hZGQodmFsdWUpKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyYXRlQnV0dG9uQ29udHJvbChkZWZhdWx0U3R5bGVzKSB7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRTdHlsZXMpIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uSW5uZXJOb2RlOiBhcnJvd09mQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogW3N0eWxlcy5yaWdodEJ1dHRvbiwgc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmJ1dHRvblNoaWZ0U2xpZGVzXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImlucHV0IHBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbc3R5bGVzLmlucHV0UGF1c2VOb3RBY3RpdmUsIHN0eWxlcy5pbnB1dFBhdXNlLCBzdHlsZXMuYnV0dG9uXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbklubmVyTm9kZTogYXJyb3dPZkJ1dHRvbixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93TGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyBsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmJ1dHRvblNoaWZ0U2xpZGVzXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd1JpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiaW5wdXQgcGF1c2VcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93TGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyBsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXV0b21hdGljU2V0dGluZ1BpY3R1cmVXaWR0aCgpIHtcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBzbGlkZXNFbGVtZW50c0FycmF5ID0gYWRkaW5nTWlzc2luZ1NsaWRlcyhnZXRTbGlkZXNBcnJheShzbGlkZXIpKTtcclxuICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5ID09PSBudWxsKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nICggJyVjJXMnLFxyXG4gICAgICAgICAgICAnZm9udC1zaXplOiAxNnB4OyBjb2xvcjogcmVkOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhN2EwOyBwYWRkaW5nOiAycHggNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBtYXJnaW46IDIwcHggYXV0bzsnLFxyXG4gICAgICAgICAgICBgc2xpZGVyIHwgY29udGFpbmVyICcjJHtpZEVsZW1lbnR9JyBpcyBlbXB0eWApO1xyXG4gICAgICAgIHJldHVybiBbbnVsbF07XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlcik7XHJcbiAgICBpZiAoc2V0RGVmYXVsdE1pbmltdW1TaXplcykge1xyXG4gICAgICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5taW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzbGlkZXJXaWR0aCA9IHNsaWRlci5jbGllbnRXaWR0aDtcclxuXHJcbiAgICBjb25zdCBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzID0ge1xyXG4gICAgICAgIG5leHRTbGlkZTogMCxcclxuICAgICAgICBjdXJyZW50U2xpZGU6IDEsXHJcbiAgICAgICAgcHJldlNsaWRlOiAyXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QgPSB7XHJcbiAgICAgICAgbGVmdEJ1dHRvbkNvbnRyb2w6IG51bGwsXHJcbiAgICAgICAgcmlnaHRCdXR0b25Db250cm9sOiBudWxsLFxyXG4gICAgICAgIHBhdXNlQnV0dG9uQ29udHJvbDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRTdGFydGluZ1Bvc2l0aW9uc1NsaWRlcyhidXR0b25EZWZhdWx0U3R5bGVzKTtcclxuXHJcbiAgICBpZiAoYnV0dG9uQ29udHJvbCkge1xyXG4gICAgICAgIGNyYXRlQnV0dG9uQ29udHJvbChidXR0b25EZWZhdWx0U3R5bGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoKCk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBzbGlkZXIsXHJcbiAgICAgICAgc2xpZGVyV2lkdGgsXHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5leHRTbGlkZTogb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5uZXh0U2xpZGUsXHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5jdXJyZW50U2xpZGUsXHJcbiAgICAgICAgICAgIHByZXZTbGlkZTogb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5wcmV2U2xpZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGVmdEJ1dHRvbkNvbnRyb2w6IGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wsXHJcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uQ29udHJvbDogYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wsXHJcbiAgICAgICAgICAgIHBhdXNlQnV0dG9uQ29udHJvbDogYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2xcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldHRpbmdTdGFydGVkV2l0aERPTTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGdldHRpbmdTdGFydGVkV2l0aERPTSBmcm9tICcuL2dldHRpbmdTdGFydGVkV2l0aERPTS5qcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZXIoaWRFbGVtZW50LCB7XG4gICAgYXV0b3BsYXkgPSB0cnVlLFxuICAgIHRpbWVPZkNoYW5naW5nU2xpZGVzID0gNTAwMCxcbiAgICB0aW1lVG9DaGFuZ2VTbGlkZXMgPSAxMDAwLFxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbk5hbWUgPSBcImxpbmVhclwiLFxuICAgIGJ1dHRvbkNvbnRyb2wgPSB0cnVlLFxuICAgIHRvdWNobW92ZSA9IHRydWUsXG4gICAgYnV0dG9uRGVmYXVsdFN0eWxlcyA9IHRydWUsXG4gICAgc2V0RGVmYXVsdE1pbmltdW1TaXplcyA9IHRydWUsXG59ID0ge30pIHtcblxuICAgIGNvbnN0IFtzbGlkZXIsXG4gICAgICAgIHNsaWRlcldpZHRoLFxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LFxuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLFxuICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LFxuICAgIF0gPSBnZXR0aW5nU3RhcnRlZFdpdGhET00oaWRFbGVtZW50LCBzZXREZWZhdWx0TWluaW11bVNpemVzLCBidXR0b25Db250cm9sLCBidXR0b25EZWZhdWx0U3R5bGVzKTtcbiAgICBpZiAoc2xpZGVyID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcG9zaXRpb25pbmdTbGlkZXMoKTtcblxuICAgIGZ1bmN0aW9uIHNldFNsaWRlc0Rpc3BsYXkoKSB7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3NpdGlvbmluZ1NsaWRlcygpIHtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZV0uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVTaGlmdFJpZ2h0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuc2xpZGVTaGlmdExlZnQpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5jZW50ZXJTbGlkZSk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5jdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnNsaWRlU2hpZnRSaWdodCwgc3R5bGVzLnNsaWRlU2hpZnRMZWZ0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZV0uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVTaGlmdExlZnQpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZVNoaWZ0UmlnaHQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvTGVmdFNsaWRlKCkge1xuICAgICAgICArK29iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlO1xuICAgICAgICArK29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlO1xuICAgICAgICArK29iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlO1xuICAgICAgICBzd2l0Y2ggKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuICAgICAgICBwb3NpdGlvbmluZ1NsaWRlcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvUmlnaHRTbGlkZSgpIHtcbiAgICAgICAgLS1vYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZTtcbiAgICAgICAgLS1vYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgLS1vYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZTtcbiAgICAgICAgc3dpdGNoICgtMSkge1xuICAgICAgICAgICAgY2FzZSBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZSA6XG4gICAgICAgICAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5uZXh0U2xpZGUgPSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZSA9IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5wcmV2U2xpZGUgOlxuICAgICAgICAgICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlID0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHNldFNsaWRlc0Rpc3BsYXkoKTtcbiAgICAgICAgcG9zaXRpb25pbmdTbGlkZXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVyVG91Y2goZXZlbnQpIHtcbiAgICAgICAgaWYgKHN3aXRjaFNsaWRlQmxvY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHN3aXBlTGVuZ3RoID0gMDtcblxuICAgICAgICBzd2lwZUxlbmd0aCArPSBjbGllbnRYIC0gZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YO1xuICAgICAgICBpZiAoc3dpcGVMZW5ndGggPiBzbGlkZXJXaWR0aCAvIDMpIHtcbiAgICAgICAgICAgIGxlZnRTbGlkZXJTaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2lwZUxlbmd0aCA8IC1zbGlkZXJXaWR0aCAvIDMpIHtcbiAgICAgICAgICAgIHJpZ2h0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdWNoU2Nyb2xsQmxvY2tlcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEF1dG9wbGF5KHRpbWVPZkNoYW5naW5nU2xpZGVzKSB7XG4gICAgICAgIGF1dG9scGF5VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiByaWdodFNsaWRlclNoaWZ0KCksIHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wQXV0b3BsYXkoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b2xwYXlUaW1lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcykge1xuICAgICAgICBzdG9wQXV0b3BsYXkoYXV0b2xwYXlUaW1lcik7XG4gICAgICAgIHN0YXJ0QXV0b3BsYXkodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhdXNlU3dpdGNoKCkge1xuICAgICAgICBpZiAoIWF1dG9wbGF5KSB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmlucHV0UGF1c2VOb3RBY3RpdmUpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaW5wdXRQYXVzZUFjdGl2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmlucHV0UGF1c2VBY3RpdmUpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaW5wdXRQYXVzZU5vdEFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYXV0b3BsYXkgPSAhYXV0b3BsYXlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGhhc1BzZXVkb1RvdWNoTW91c2UpIHtcbiAgICAgICAgICAgIGxldCBwc2V1ZG9FdmVudCA9IHt0b3VjaGVzOiBbe2NsaWVudFg6IDB9LF19O1xuICAgICAgICAgICAgcHNldWRvRXZlbnQudG91Y2hlc1swXS5jbGllbnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgICAgIG1vdmVTbGlkZXJUb3VjaChwc2V1ZG9FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmVTdGFydChldmVudCkge1xuICAgICAgICBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gdHJ1ZTtcbiAgICAgICAgZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgc3RvcEF1dG9wbGF5KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmVFbmQoKSB7XG4gICAgICAgIGhhc1BzZXVkb1RvdWNoTW91c2UgPSBmYWxzZTtcbiAgICAgICAgc3dpcGVMZW5ndGggPSAwO1xuICAgICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmlnaHRTbGlkZXJTaGlmdCgpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IHRydWU7XG4gICAgICAgIHN3aXRjaFRvUmlnaHRTbGlkZSgpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NoYW5nZVNsaWRlcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZWZ0U2xpZGVyU2hpZnQoKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSB0cnVlO1xuICAgICAgICBzd2l0Y2hUb0xlZnRTbGlkZSgpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgfSwgdGltZVRvQ2hhbmdlU2xpZGVzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA8IDQpIHtcbiAgICAgICAgICAgIHRpbWVPZkNoYW5naW5nU2xpZGVzID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA8ICh0aW1lVG9DaGFuZ2VTbGlkZXMgLyAxMDApICogMTIwKSB7XG4gICAgICAgICAgICB0aW1lVG9DaGFuZ2VTbGlkZXMgPSAodGltZVRvQ2hhbmdlU2xpZGVzIC8gMTAwKSAqIDgwO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuXG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgc3RhcnRBdXRvcGxheSh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgdmFsdWUuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dGltZVRvQ2hhbmdlU2xpZGVzfW1zYDtcbiAgICAgICAgICAgIHZhbHVlLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbk5hbWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCA9IDA7XG4gICAgbGV0IHN3aXBlTGVuZ3RoID0gMDtcbiAgICBsZXQgc3dpdGNoU2xpZGVCbG9ja2VkID0gZmFsc2U7XG4gICAgbGV0IGF1dG9scGF5VGltZXIgPSBudWxsO1xuICAgIGxldCBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gZmFsc2U7XG5cbiAgICBpbml0KCk7XG5cbiAgICBpZiAodG91Y2htb3ZlKSB7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG1vdmVTbGlkZXJUb3VjaCk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc3dpcGVMZW5ndGggPSAwO1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRvdWNoU2Nyb2xsQmxvY2tlcik7XG5cbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcHNldWRvVG91Y2hNb3ZlU3RhcnQpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBwc2V1ZG9Ub3VjaE1vdmUpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgcHNldWRvVG91Y2hNb3ZlRW5kKTtcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHBzZXVkb1RvdWNoTW92ZUVuZCk7XG4gICAgfVxuXG4gICAgaWYgKGJ1dHRvbkNvbnRyb2wpIHtcbiAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghc3dpdGNoU2xpZGVCbG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgbGVmdFNsaWRlclNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN3aXRjaFNsaWRlQmxvY2tlZCkge1xuICAgICAgICAgICAgICAgIHJpZ2h0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhdXNlU3dpdGNoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2xpZGVyOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9