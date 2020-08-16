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
        return console.log('%c%s', 'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;', 'slider | id ' + idElement + ' does not exist');
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
        return console.log('%c%s', 'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;', 'slider | container \'#' + idElement + '\' is empty');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGVTbGlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3JlYXRlU2xpZGVyLy4vc3R5bGUuY3NzIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlU2xpZGVyLy4vYXJyb3cuc3ZnIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uL2dldHRpbmdTdGFydGVkV2l0aERPTS5qcyIsIndlYnBhY2s6Ly9jcmVhdGVTbGlkZXIvLi9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlU2xpZGVyLy4vc3R5bGUuY3NzPzUzZTciXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiZ2V0dGluZ1N0YXJ0ZWRXaXRoRE9NIiwiaWRFbGVtZW50Iiwic2V0RGVmYXVsdE1pbmltdW1TaXplcyIsImJ1dHRvbkNvbnRyb2wiLCJidXR0b25EZWZhdWx0U3R5bGVzIiwic2xpZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRTbGlkZXNBcnJheSIsInBhcmVudCIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwidmFsdWUiLCJ0YWdOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGVzIiwic2xpZGVzIiwiYWRkaW5nTWlzc2luZ1NsaWRlcyIsInNsaWRlc0VsZW1lbnRzQXJyYXkiLCJmaXJzdENsb25lRWxlbWVudCIsImNsb25lTm9kZSIsInNlY29uZENsb25lRWxlbWVudCIsImFwcGVuZCIsImZvckVhY2giLCJjbG9uZUVsZW1lbnQiLCJzZXRTdGFydGluZ1Bvc2l0aW9uc1NsaWRlcyIsIm9iamVjdFNsaWRlclZpc2libGVTbGlkZXMiLCJuZXh0U2xpZGUiLCJjdXJyZW50U2xpZGUiLCJwcmV2U2xpZGUiLCJjcmVhdGVCdXR0b24iLCJ0eXBlIiwiYnV0dG9uSW5uZXJOb2RlIiwibmFtZSIsImFsdCIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhcnJvd09mQnV0dG9uIiwiY3JhdGVCdXR0b25Db250cm9sIiwiZGVmYXVsdFN0eWxlcyIsImJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QiLCJyaWdodEJ1dHRvbkNvbnRyb2wiLCJyaWdodEJ1dHRvbiIsImJ1dHRvblNoaWZ0U2xpZGVzIiwicGF1c2VCdXR0b25Db250cm9sIiwiaW5wdXRQYXVzZU5vdEFjdGl2ZSIsImlucHV0UGF1c2UiLCJsZWZ0QnV0dG9uQ29udHJvbCIsImF1dG9tYXRpY1NldHRpbmdQaWN0dXJlV2lkdGgiLCJtaW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlciIsInNsaWRlcldpZHRoIiwiY2xpZW50V2lkdGgiLCJjcmVhdGVTbGlkZXIiLCJhdXRvcGxheSIsInRpbWVPZkNoYW5naW5nU2xpZGVzIiwidGltZVRvQ2hhbmdlU2xpZGVzIiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZSIsInRvdWNobW92ZSIsInBvc2l0aW9uaW5nU2xpZGVzIiwic2V0U2xpZGVzRGlzcGxheSIsImhpZGVTbGlkZSIsInJlbW92ZSIsInNsaWRlU2hpZnRSaWdodCIsInNsaWRlU2hpZnRMZWZ0IiwiY2VudGVyU2xpZGUiLCJzd2l0Y2hUb0xlZnRTbGlkZSIsInN3aXRjaFRvUmlnaHRTbGlkZSIsIm1vdmVTbGlkZXJUb3VjaCIsImV2ZW50Iiwic3dpdGNoU2xpZGVCbG9ja2VkIiwiY2xpZW50WCIsInRvdWNoZXMiLCJzd2lwZUxlbmd0aCIsImdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCIsImxlZnRTbGlkZXJTaGlmdCIsInJpZ2h0U2xpZGVyU2hpZnQiLCJ0b3VjaFNjcm9sbEJsb2NrZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXJ0QXV0b3BsYXkiLCJhdXRvbHBheVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJzdG9wQXV0b3BsYXkiLCJjbGVhckludGVydmFsIiwiYXV0b3BsYXlSZXNldCIsInBhdXNlU3dpdGNoIiwiaW5wdXRQYXVzZUFjdGl2ZSIsInBzZXVkb1RvdWNoTW92ZSIsImhhc1BzZXVkb1RvdWNoTW91c2UiLCJwc2V1ZG9FdmVudCIsInBzZXVkb1RvdWNoTW92ZVN0YXJ0IiwicHNldWRvVG91Y2hNb3ZlRW5kIiwic2V0VGltZW91dCIsImluaXQiLCJzdHlsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdE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Ozs7O0FBSUEsc0MiLCJmaWxlIjoiZGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2xpZGVyLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0JXQoNCQKi9cXG5cXG4uc2xpZGVyXzFTX24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyX1FYWDAge1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcbi8q0KHQotCY0JvQmCDQlNCb0K8g0JrQndCe0J/QntCaINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5idXR0b25fM3ctaCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uYnV0dG9uU2hpZnRTbGlkZXNfMWtvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnJpZ2h0QnV0dG9uX3RjRXgge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uaW5wdXRQYXVzZV9wWnMzIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiBhdXRvIDAgMTVweCAwO1xcbn1cXG5cXG4uaW5wdXRQYXVzZU5vdEFjdGl2ZV90cmVkIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggU29saWQgIzllOWU5ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbn1cXG5cXG4uaW5wdXRQYXVzZUFjdGl2ZV8ySVAzIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwIFNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjOWU5ZTllO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0J7QkiovXFxuXFxuLnNsaWRlc18zdTNZIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8q0K3RgtC+INC00LvRjyBkaXYqL1xcbn1cXG5cXG4uaGlkZVNsaWRlX3VTcGIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2VudGVyU2xpZGVfMVVOVSB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zbGlkZVNoaWZ0UmlnaHRfcHdQbCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG59XFxuXFxuLnNsaWRlU2hpZnRMZWZ0XzJDWWgge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7O0FBRXJCO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNEJBQTRCOztBQUU1QjtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsb0JBQW9COztBQUVwQjtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGdCQUFnQixFQUFFLGNBQWM7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBLDRCQUE0QlwiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8q0KHQotCY0JvQmCDQlNCb0K8g0KHQm9CQ0JnQlNCV0KDQkCovXFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXIge1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcbi8q0KHQotCY0JvQmCDQlNCb0K8g0JrQndCe0J/QntCaINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5idXR0b24ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmJ1dHRvblNoaWZ0U2xpZGVzIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHRCdXR0b24ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uaW5wdXRQYXVzZSB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogYXV0byAwIDE1cHggMDtcXG59XFxuXFxuLmlucHV0UGF1c2VOb3RBY3RpdmUge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbiAgICBib3JkZXItbGVmdDogNXB4IFNvbGlkICM5ZTllOWU7XFxufVxcblxcbi5pbnB1dFBhdXNlQWN0aXZlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwIFNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjOWU5ZTllO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0J7QkiovXFxuXFxuLnNsaWRlcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKtCt0YLQviDQtNC70Y8gZGl2Ki9cXG59XFxuXFxuLmhpZGVTbGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jZW50ZXJTbGlkZSB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zbGlkZVNoaWZ0UmlnaHQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxufVxcblxcbi5zbGlkZVNoaWZ0TGVmdCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXCJdfV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNsaWRlclwiOiBcInNsaWRlcl8xU19uXCIsXG5cdFwibWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXJcIjogXCJtaW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlcl9RWFgwXCIsXG5cdFwiYnV0dG9uXCI6IFwiYnV0dG9uXzN3LWhcIixcblx0XCJidXR0b25TaGlmdFNsaWRlc1wiOiBcImJ1dHRvblNoaWZ0U2xpZGVzXzFrb25cIixcblx0XCJyaWdodEJ1dHRvblwiOiBcInJpZ2h0QnV0dG9uX3RjRXhcIixcblx0XCJpbnB1dFBhdXNlXCI6IFwiaW5wdXRQYXVzZV9wWnMzXCIsXG5cdFwiaW5wdXRQYXVzZU5vdEFjdGl2ZVwiOiBcImlucHV0UGF1c2VOb3RBY3RpdmVfdHJlZFwiLFxuXHRcImlucHV0UGF1c2VBY3RpdmVcIjogXCJpbnB1dFBhdXNlQWN0aXZlXzJJUDNcIixcblx0XCJzbGlkZXNcIjogXCJzbGlkZXNfM3UzWVwiLFxuXHRcImhpZGVTbGlkZVwiOiBcImhpZGVTbGlkZV91U3BiXCIsXG5cdFwiY2VudGVyU2xpZGVcIjogXCJjZW50ZXJTbGlkZV8xVU5VXCIsXG5cdFwic2xpZGVTaGlmdFJpZ2h0XCI6IFwic2xpZGVTaGlmdFJpZ2h0X3B3UGxcIixcblx0XCJzbGlkZVNoaWZ0TGVmdFwiOiBcInNsaWRlU2hpZnRMZWZ0XzJDWWhcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmlld0JveD1cXFwiMCAwIDI2IDUwXFxcIj48ZGVmcz48Y2xpcFBhdGggaWQ9XFxcImNsaXAtYXJyb3dcXFwiPjxyZWN0IHdpZHRoPVxcXCIyNlxcXCIgaGVpZ2h0PVxcXCI1MFxcXCI+PC9yZWN0PjwvY2xpcFBhdGg+PC9kZWZzPjxnIGlkPVxcXCJhcnJvd1xcXCIgY2xpcC1wYXRoPVxcXCJ1cmwoI2NsaXAtYXJyb3cpXFxcIj48cmVjdCB3aWR0aD1cXFwiMjZcXFwiIGhlaWdodD1cXFwiNTBcXFwiIGZpbGw9XFxcInJnYmEoMjU1LDI1NSwyNTUsMClcXFwiPjwvcmVjdD48cGF0aCBpZD1cXFwi0JrQvtC90YLRg9GAXzFcXFwiIGRhdGEtbmFtZT1cXFwi0JrQvtC90YLRg9GAIDFcXFwiIGQ9XFxcIk0xMC42NjUsNS4wMjYsMzMuODczLDI4LjIzNCwxMC42NjUsNTEuNDQyXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOS41MDIgLTQpXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiM3MDcwNzBcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgYXJyb3dPZkJ1dHRvbiBmcm9tICcuL2Fycm93LnN2ZydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gZ2V0dGluZ1N0YXJ0ZWRXaXRoRE9NKGlkRWxlbWVudCwgc2V0RGVmYXVsdE1pbmltdW1TaXplcywgYnV0dG9uQ29udHJvbCwgYnV0dG9uRGVmYXVsdFN0eWxlcykge1xyXG5cclxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkRWxlbWVudCk7XHJcbiAgICBpZiAoc2xpZGVyID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nICggJyVjJXMnLFxyXG4gICAgICAgICAgICAnZm9udC1zaXplOiAxNnB4OyBjb2xvcjogcmVkOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhN2EwOyBwYWRkaW5nOiAycHggNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBtYXJnaW46IDIwcHggYXV0bzsnLFxyXG4gICAgICAgICAgICBgc2xpZGVyIHwgaWQgJHtpZEVsZW1lbnR9IGRvZXMgbm90IGV4aXN0YCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNsaWRlc0FycmF5KHBhcmVudCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikubWFwKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLnRhZ05hbWUgIT09IFwiSU5QVVRcIikge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZGluZ01pc3NpbmdTbGlkZXMoc2xpZGVzRWxlbWVudHNBcnJheSkge1xyXG4gICAgICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdENsb25lRWxlbWVudCA9IHNsaWRlc0VsZW1lbnRzQXJyYXlbMF0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgc2Vjb25kQ2xvbmVFbGVtZW50ID0gZmlyc3RDbG9uZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LnB1c2goZmlyc3RDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGZpcnN0Q2xvbmVFbGVtZW50KTtcclxuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5wdXNoKHNlY29uZENsb25lRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoc2Vjb25kQ2xvbmVFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xvbmVFbGVtZW50ID0gdmFsdWUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5wdXNoKGNsb25lRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGNsb25lRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2xpZGVzRWxlbWVudHNBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdGFydGluZ1Bvc2l0aW9uc1NsaWRlcygpIHtcclxuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZSA9IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5wcmV2U2xpZGUgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih7dHlwZSwgYnV0dG9uSW5uZXJOb2RlID0gbnVsbCwgbmFtZSwgYWx0LCBjbGFzc0xpc3QgPSBbXX0gPSB7fSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBudWxsO1xyXG4gICAgICAgIGlmIChidXR0b25Jbm5lck5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYFBTRVVET19CVVRUT04gJHtuYW1lfWApO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYXJyb3dPZkJ1dHRvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3NMaXN0LmZvckVhY2godmFsdWUgPT4gYnV0dG9uLmNsYXNzTGlzdC5hZGQodmFsdWUpKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyYXRlQnV0dG9uQ29udHJvbChkZWZhdWx0U3R5bGVzKSB7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRTdHlsZXMpIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uSW5uZXJOb2RlOiBhcnJvd09mQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogW3N0eWxlcy5yaWdodEJ1dHRvbiwgc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmJ1dHRvblNoaWZ0U2xpZGVzXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImlucHV0IHBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbc3R5bGVzLmlucHV0UGF1c2VOb3RBY3RpdmUsIHN0eWxlcy5pbnB1dFBhdXNlLCBzdHlsZXMuYnV0dG9uXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbklubmVyTm9kZTogYXJyb3dPZkJ1dHRvbixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93TGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyBsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmJ1dHRvblNoaWZ0U2xpZGVzXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd1JpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiaW5wdXQgcGF1c2VcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93TGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyBsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXV0b21hdGljU2V0dGluZ1BpY3R1cmVXaWR0aCgpIHtcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBzbGlkZXNFbGVtZW50c0FycmF5ID0gYWRkaW5nTWlzc2luZ1NsaWRlcyhnZXRTbGlkZXNBcnJheShzbGlkZXIpKTtcclxuICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nICggJyVjJXMnLFxyXG4gICAgICAgICAgICAnZm9udC1zaXplOiAxNnB4OyBjb2xvcjogcmVkOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhN2EwOyBwYWRkaW5nOiAycHggNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBtYXJnaW46IDIwcHggYXV0bzsnLFxyXG4gICAgICAgICAgICBgc2xpZGVyIHwgY29udGFpbmVyICcjJHtpZEVsZW1lbnR9JyBpcyBlbXB0eWApO1xyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXIpO1xyXG4gICAgaWYgKHNldERlZmF1bHRNaW5pbXVtU2l6ZXMpIHtcclxuICAgICAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZChzdHlsZXMubWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2xpZGVyV2lkdGggPSBzbGlkZXIuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgY29uc3Qgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyA9IHtcclxuICAgICAgICBuZXh0U2xpZGU6IDAsXHJcbiAgICAgICAgY3VycmVudFNsaWRlOiAxLFxyXG4gICAgICAgIHByZXZTbGlkZTogMlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBidXR0b25Db250cm9sRWxlbWVudHNMaXN0ID0ge1xyXG4gICAgICAgIGxlZnRCdXR0b25Db250cm9sOiBudWxsLFxyXG4gICAgICAgIHJpZ2h0QnV0dG9uQ29udHJvbDogbnVsbCxcclxuICAgICAgICBwYXVzZUJ1dHRvbkNvbnRyb2w6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgc2V0U3RhcnRpbmdQb3NpdGlvbnNTbGlkZXMoYnV0dG9uRGVmYXVsdFN0eWxlcyk7XHJcblxyXG4gICAgaWYgKGJ1dHRvbkNvbnRyb2wpIHtcclxuICAgICAgICBjcmF0ZUJ1dHRvbkNvbnRyb2woYnV0dG9uRGVmYXVsdFN0eWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0b21hdGljU2V0dGluZ1BpY3R1cmVXaWR0aCgpO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgc2xpZGVyLFxyXG4gICAgICAgIHNsaWRlcldpZHRoLFxyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXksXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXh0U2xpZGU6IG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlLFxyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGU6IG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlLFxyXG4gICAgICAgICAgICBwcmV2U2xpZGU6IG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxlZnRCdXR0b25Db250cm9sOiBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sLFxyXG4gICAgICAgICAgICByaWdodEJ1dHRvbkNvbnRyb2w6IGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sLFxyXG4gICAgICAgICAgICBwYXVzZUJ1dHRvbkNvbnRyb2w6IGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXR0aW5nU3RhcnRlZFdpdGhET007IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBnZXR0aW5nU3RhcnRlZFdpdGhET00gZnJvbSAnLi9nZXR0aW5nU3RhcnRlZFdpdGhET00uanMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlU2xpZGVyKGlkRWxlbWVudCwge1xuICAgIGF1dG9wbGF5ID0gdHJ1ZSxcbiAgICB0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA9IDUwMDAsXG4gICAgdGltZVRvQ2hhbmdlU2xpZGVzID0gMTAwMCxcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25OYW1lID0gXCJsaW5lYXJcIixcbiAgICBidXR0b25Db250cm9sID0gdHJ1ZSxcbiAgICB0b3VjaG1vdmUgPSB0cnVlLFxuICAgIGJ1dHRvbkRlZmF1bHRTdHlsZXMgPSB0cnVlLFxuICAgIHNldERlZmF1bHRNaW5pbXVtU2l6ZXMgPSB0cnVlLFxufSA9IHt9KSB7XG5cbiAgICBjb25zdCBbc2xpZGVyLFxuICAgICAgICBzbGlkZXJXaWR0aCxcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheSxcbiAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyxcbiAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdCxcbiAgICBdID0gZ2V0dGluZ1N0YXJ0ZWRXaXRoRE9NKGlkRWxlbWVudCwgc2V0RGVmYXVsdE1pbmltdW1TaXplcywgYnV0dG9uQ29udHJvbCwgYnV0dG9uRGVmYXVsdFN0eWxlcyk7XG4gICAgcG9zaXRpb25pbmdTbGlkZXMoKTtcblxuICAgIGZ1bmN0aW9uIHNldFNsaWRlc0Rpc3BsYXkoKSB7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3NpdGlvbmluZ1NsaWRlcygpIHtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZV0uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVTaGlmdFJpZ2h0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuc2xpZGVTaGlmdExlZnQpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5jZW50ZXJTbGlkZSk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5jdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnNsaWRlU2hpZnRSaWdodCwgc3R5bGVzLnNsaWRlU2hpZnRMZWZ0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZV0uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVTaGlmdExlZnQpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZVNoaWZ0UmlnaHQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvTGVmdFNsaWRlKCkge1xuICAgICAgICArK29iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlO1xuICAgICAgICArK29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlO1xuICAgICAgICArK29iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlO1xuICAgICAgICBzd2l0Y2ggKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuICAgICAgICBwb3NpdGlvbmluZ1NsaWRlcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvUmlnaHRTbGlkZSgpIHtcbiAgICAgICAgLS1vYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZTtcbiAgICAgICAgLS1vYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgLS1vYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZTtcbiAgICAgICAgc3dpdGNoICgtMSkge1xuICAgICAgICAgICAgY2FzZSBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZSA6XG4gICAgICAgICAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5uZXh0U2xpZGUgPSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZSA9IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5wcmV2U2xpZGUgOlxuICAgICAgICAgICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlID0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHNldFNsaWRlc0Rpc3BsYXkoKTtcbiAgICAgICAgcG9zaXRpb25pbmdTbGlkZXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVyVG91Y2goZXZlbnQpIHtcbiAgICAgICAgaWYgKHN3aXRjaFNsaWRlQmxvY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHN3aXBlTGVuZ3RoID0gMDtcblxuICAgICAgICBzd2lwZUxlbmd0aCArPSBjbGllbnRYIC0gZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YO1xuICAgICAgICBpZiAoc3dpcGVMZW5ndGggPiBzbGlkZXJXaWR0aCAvIDMpIHtcbiAgICAgICAgICAgIGxlZnRTbGlkZXJTaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2lwZUxlbmd0aCA8IC1zbGlkZXJXaWR0aCAvIDMpIHtcbiAgICAgICAgICAgIHJpZ2h0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdWNoU2Nyb2xsQmxvY2tlcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEF1dG9wbGF5KHRpbWVPZkNoYW5naW5nU2xpZGVzKSB7XG4gICAgICAgIGF1dG9scGF5VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiByaWdodFNsaWRlclNoaWZ0KCksIHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wQXV0b3BsYXkoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b2xwYXlUaW1lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcykge1xuICAgICAgICBzdG9wQXV0b3BsYXkoYXV0b2xwYXlUaW1lcik7XG4gICAgICAgIHN0YXJ0QXV0b3BsYXkodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhdXNlU3dpdGNoKCkge1xuICAgICAgICBpZiAoIWF1dG9wbGF5KSB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmlucHV0UGF1c2VOb3RBY3RpdmUpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaW5wdXRQYXVzZUFjdGl2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmlucHV0UGF1c2VBY3RpdmUpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaW5wdXRQYXVzZU5vdEFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYXV0b3BsYXkgPSAhYXV0b3BsYXlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGhhc1BzZXVkb1RvdWNoTW91c2UpIHtcbiAgICAgICAgICAgIGxldCBwc2V1ZG9FdmVudCA9IHt0b3VjaGVzOiBbe2NsaWVudFg6IDB9LF19O1xuICAgICAgICAgICAgcHNldWRvRXZlbnQudG91Y2hlc1swXS5jbGllbnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgICAgIG1vdmVTbGlkZXJUb3VjaChwc2V1ZG9FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmVTdGFydChldmVudCkge1xuICAgICAgICBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gdHJ1ZTtcbiAgICAgICAgZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgc3RvcEF1dG9wbGF5KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmVFbmQoKSB7XG4gICAgICAgIGhhc1BzZXVkb1RvdWNoTW91c2UgPSBmYWxzZTtcbiAgICAgICAgc3dpcGVMZW5ndGggPSAwO1xuICAgICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmlnaHRTbGlkZXJTaGlmdCgpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IHRydWU7XG4gICAgICAgIHN3aXRjaFRvUmlnaHRTbGlkZSgpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NoYW5nZVNsaWRlcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZWZ0U2xpZGVyU2hpZnQoKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSB0cnVlO1xuICAgICAgICBzd2l0Y2hUb0xlZnRTbGlkZSgpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgfSwgdGltZVRvQ2hhbmdlU2xpZGVzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA8IDQpIHtcbiAgICAgICAgICAgIHRpbWVPZkNoYW5naW5nU2xpZGVzID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA8ICh0aW1lVG9DaGFuZ2VTbGlkZXMgLyAxMDApICogMTIwKSB7XG4gICAgICAgICAgICB0aW1lVG9DaGFuZ2VTbGlkZXMgPSAodGltZVRvQ2hhbmdlU2xpZGVzIC8gMTAwKSAqIDgwO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuXG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgc3RhcnRBdXRvcGxheSh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgdmFsdWUuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dGltZVRvQ2hhbmdlU2xpZGVzfW1zYDtcbiAgICAgICAgICAgIHZhbHVlLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbk5hbWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCA9IDA7XG4gICAgbGV0IHN3aXBlTGVuZ3RoID0gMDtcbiAgICBsZXQgc3dpdGNoU2xpZGVCbG9ja2VkID0gZmFsc2U7XG4gICAgbGV0IGF1dG9scGF5VGltZXIgPSBudWxsO1xuICAgIGxldCBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gZmFsc2U7XG5cbiAgICBpbml0KCk7XG5cbiAgICBpZiAodG91Y2htb3ZlKSB7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG1vdmVTbGlkZXJUb3VjaCk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc3dpcGVMZW5ndGggPSAwO1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRvdWNoU2Nyb2xsQmxvY2tlcik7XG5cbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcHNldWRvVG91Y2hNb3ZlU3RhcnQpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBwc2V1ZG9Ub3VjaE1vdmUpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgcHNldWRvVG91Y2hNb3ZlRW5kKTtcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHBzZXVkb1RvdWNoTW92ZUVuZCk7XG4gICAgfVxuXG4gICAgaWYgKGJ1dHRvbkNvbnRyb2wpIHtcbiAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghc3dpdGNoU2xpZGVCbG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgbGVmdFNsaWRlclNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN3aXRjaFNsaWRlQmxvY2tlZCkge1xuICAgICAgICAgICAgICAgIHJpZ2h0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhdXNlU3dpdGNoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2xpZGVyOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9