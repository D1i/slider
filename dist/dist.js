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

/***/ "./addButtonControl.js":
/*!*****************************!*\
  !*** ./addButtonControl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(/*! ./style.css */ "./style.css");

var _style2 = _interopRequireDefault(_style);

var _arrow = __webpack_require__(/*! ./arrow.svg */ "./arrow.svg");

var _arrow2 = _interopRequireDefault(_arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addButtonControl(slider, buttonControl, buttonDefaultStyles) {

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

    function crateButtonControl(buttonDefaultStyles) {
        if (buttonDefaultStyles) {

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

exports.default = addButtonControl;

/***/ }),

/***/ "./addingMissingSlides.js":
/*!********************************!*\
  !*** ./addingMissingSlides.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = addingMissingSlides;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function getDOMDate(idElement) {

    var slider = document.getElementById(idElement);
    if (slider === null) {
        console.log('%c%s', 'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;', 'slider | id ' + idElement + ' does not exist');
        return { hasError: true };
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
        console.log('%c%s', 'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;', 'slider | container \'#' + idElement + '\' is empty');
        return { hasError: true };
    }

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

exports.default = getDOMDate;

/***/ }),

/***/ "./setSliderStyles.js":
/*!****************************!*\
  !*** ./setSliderStyles.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(/*! ./style.css */ "./style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setSliderStyles(slider, setDefaultMinimumSizes) {
    slider.classList.add(_style2.default.slider);
    if (setDefaultMinimumSizes) {
        slider.classList.add(_style2.default.minWidthAndMinHeightSlider);
    }
}

exports.default = setSliderStyles;

/***/ }),

/***/ "./setSlidesStyles.js":
/*!****************************!*\
  !*** ./setSlidesStyles.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(/*! ./style.css */ "./style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setSlidesStyle(slidesElementsArray) {
    function automaticSettingPictureWidth() {
        slidesElementsArray.forEach(function (value) {
            value.classList.add(_style2.default.slides);
        });
    }
    automaticSettingPictureWidth(slidesElementsArray);
}

exports.default = setSlidesStyle;

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

var _getDOMDate2 = __webpack_require__(/*! ./getDOMDate.js */ "./getDOMDate.js");

var _getDOMDate3 = _interopRequireDefault(_getDOMDate2);

var _addingMissingSlides = __webpack_require__(/*! ./addingMissingSlides.js */ "./addingMissingSlides.js");

var _addingMissingSlides2 = _interopRequireDefault(_addingMissingSlides);

var _addButtonControl = __webpack_require__(/*! ./addButtonControl.js */ "./addButtonControl.js");

var _addButtonControl2 = _interopRequireDefault(_addButtonControl);

var _setSliderStyles = __webpack_require__(/*! ./setSliderStyles.js */ "./setSliderStyles.js");

var _setSliderStyles2 = _interopRequireDefault(_setSliderStyles);

var _setSlidesStyles = __webpack_require__(/*! ./setSlidesStyles.js */ "./setSlidesStyles.js");

var _setSlidesStyles2 = _interopRequireDefault(_setSlidesStyles);

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

    function setSlidesDisplay() {
        slidesElementsArray.forEach(function (value) {
            // value.classList.add(styles.hideSlide);
        });
        console.log(slidesElementsArray);
        slidesElementsArray[objectSliderVisibleSlides.getNext].classList.remove(_style2.default.hideSlide);
        slidesElementsArray[objectSliderVisibleSlides.getCurrent].classList.remove(_style2.default.hideSlide);
        slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.remove(_style2.default.hideSlide);
    }

    function positioningSlides() {
        slidesElementsArray[objectSliderVisibleSlides.getNext].classList.add(_style2.default.slideShiftRight);
        slidesElementsArray[objectSliderVisibleSlides.getNext].classList.remove(_style2.default.slideShiftLeft);
        slidesElementsArray[objectSliderVisibleSlides.getCurrent].classList.add(_style2.default.centerSlide);
        slidesElementsArray[objectSliderVisibleSlides.getCurrent].classList.remove(_style2.default.slideShiftRight, _style2.default.slideShiftLeft);
        slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.add(_style2.default.slideShiftLeft);
        slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.add(_style2.default.slideShiftRight);
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
        slidesElementsArray[objectSliderVisibleSlides.getNext].classList.add(_style2.default.hideSlide);
        setTimeout(function () {
            autoplayReset(timeOfChangingSlides);
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.getNext].classList.remove(_style2.default.hideSlide);
        }, timeToChangeSlides);
    }

    function leftSliderShift() {
        stopAutoplay();
        switchSlideBlocked = true;
        switchToLeftSlide();
        slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.add(_style2.default.hideSlide);
        setTimeout(function () {
            autoplayReset(timeOfChangingSlides);
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.remove(_style2.default.hideSlide);
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

    var _getDOMDate = (0, _getDOMDate3.default)(idElement),
        sliderElement = _getDOMDate.sliderElement,
        slidesElementsArray_notProcessed = _getDOMDate.slidesElementsArray_notProcessed,
        objectSliderVisibleSlides = _getDOMDate.objectSliderVisibleSlides,
        sliderWidth = _getDOMDate.sliderWidth,
        hasError = _getDOMDate.hasError;

    if (hasError) {
        return;
    }
    var slidesElementsArray = (0, _addingMissingSlides2.default)(slidesElementsArray_notProcessed);
    positioningSlides();
    var buttonControlElementsList = (0, _addButtonControl2.default)(sliderElement, buttonControl, buttonDefaultStyles);
    (0, _setSliderStyles2.default)(sliderElement, setDefaultMinimumSizes);
    (0, _setSlidesStyles2.default)(slidesElementsArray);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGVTbGlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3JlYXRlU2xpZGVyLy4vc3R5bGUuY3NzIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlU2xpZGVyLy4vYWRkQnV0dG9uQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9jcmVhdGVTbGlkZXIvLi9hZGRpbmdNaXNzaW5nU2xpZGVzLmpzIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uL2Fycm93LnN2ZyIsIndlYnBhY2s6Ly9jcmVhdGVTbGlkZXIvLi9nZXRET01EYXRlLmpzIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uL3NldFNsaWRlclN0eWxlcy5qcyIsIndlYnBhY2s6Ly9jcmVhdGVTbGlkZXIvLi9zZXRTbGlkZXNTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlU2xpZGVyLy4vc2xpZGVyLmpzIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uL3N0eWxlLmNzcz81M2U3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImFkZEJ1dHRvbkNvbnRyb2wiLCJzbGlkZXIiLCJidXR0b25Db250cm9sIiwiYnV0dG9uRGVmYXVsdFN0eWxlcyIsImNyZWF0ZUJ1dHRvbiIsInR5cGUiLCJidXR0b25Jbm5lck5vZGUiLCJuYW1lIiwiYWx0IiwiY2xhc3NMaXN0IiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYXJyb3dPZkJ1dHRvbiIsImZvckVhY2giLCJhZGQiLCJ2YWx1ZSIsImNyYXRlQnV0dG9uQ29udHJvbCIsImJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QiLCJyaWdodEJ1dHRvbkNvbnRyb2wiLCJzdHlsZXMiLCJyaWdodEJ1dHRvbiIsImJ1dHRvblNoaWZ0U2xpZGVzIiwiYXBwZW5kIiwicGF1c2VCdXR0b25Db250cm9sIiwiaW5wdXRQYXVzZU5vdEFjdGl2ZSIsImlucHV0UGF1c2UiLCJsZWZ0QnV0dG9uQ29udHJvbCIsImFkZGluZ01pc3NpbmdTbGlkZXMiLCJzbGlkZXNFbGVtZW50c0FycmF5IiwiZmlyc3RDbG9uZUVsZW1lbnQiLCJjbG9uZU5vZGUiLCJzZWNvbmRDbG9uZUVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJnZXRET01EYXRlIiwiaWRFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiaGFzRXJyb3IiLCJnZXRTbGlkZXNBcnJheSIsInBhcmVudCIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwidGFnTmFtZSIsIm9iamVjdFNsaWRlclZpc2libGVTbGlkZXMiLCJfbmV4dFNsaWRlIiwiX2N1cnJlbnRTbGlkZSIsIl9wcmV2U2xpZGUiLCJnZXRDdXJyZW50IiwiZ2V0TmV4dCIsImdldFByZXYiLCJnb05leHQiLCJnb1ByZXYiLCJzbGlkZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2xpZGVyRWxlbWVudCIsInNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkIiwic2V0U2xpZGVyU3R5bGVzIiwic2V0RGVmYXVsdE1pbmltdW1TaXplcyIsIm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyIiwic2V0U2xpZGVzU3R5bGUiLCJhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoIiwic2xpZGVzIiwiY3JlYXRlU2xpZGVyIiwiYXV0b3BsYXkiLCJ0aW1lT2ZDaGFuZ2luZ1NsaWRlcyIsInRpbWVUb0NoYW5nZVNsaWRlcyIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbk5hbWUiLCJ0b3VjaG1vdmUiLCJzZXRTbGlkZXNEaXNwbGF5IiwicmVtb3ZlIiwiaGlkZVNsaWRlIiwicG9zaXRpb25pbmdTbGlkZXMiLCJzbGlkZVNoaWZ0UmlnaHQiLCJzbGlkZVNoaWZ0TGVmdCIsImNlbnRlclNsaWRlIiwic3dpdGNoVG9MZWZ0U2xpZGUiLCJzd2l0Y2hUb1JpZ2h0U2xpZGUiLCJtb3ZlU2xpZGVyVG91Y2giLCJldmVudCIsInN3aXRjaFNsaWRlQmxvY2tlZCIsImNsaWVudFgiLCJ0b3VjaGVzIiwic3dpcGVMZW5ndGgiLCJnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblgiLCJsZWZ0U2xpZGVyU2hpZnQiLCJyaWdodFNsaWRlclNoaWZ0IiwidG91Y2hTY3JvbGxCbG9ja2VyIiwicHJldmVudERlZmF1bHQiLCJzdGFydEF1dG9wbGF5IiwiYXV0b2xwYXlUaW1lciIsInNldEludGVydmFsIiwic3RvcEF1dG9wbGF5IiwiY2xlYXJJbnRlcnZhbCIsImF1dG9wbGF5UmVzZXQiLCJwYXVzZVN3aXRjaCIsImlucHV0UGF1c2VBY3RpdmUiLCJwc2V1ZG9Ub3VjaE1vdmUiLCJoYXNQc2V1ZG9Ub3VjaE1vdXNlIiwicHNldWRvRXZlbnQiLCJwc2V1ZG9Ub3VjaE1vdmVTdGFydCIsInBzZXVkb1RvdWNoTW92ZUVuZCIsInNldFRpbWVvdXQiLCJpbml0Iiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUN6Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsMkNBQTJDLHlCQUF5Qix1QkFBdUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsZ0NBQWdDLDZCQUE2Qiw0QkFBNEIsd0JBQXdCLEdBQUcsc0NBQXNDLHVCQUF1Qix3QkFBd0IsR0FBRyxpSEFBaUgsb0JBQW9CLGtDQUFrQyxnQ0FBZ0MsNkJBQTZCLDRCQUE0Qix3QkFBd0Isc0JBQXNCLGlCQUFpQixHQUFHLDZCQUE2QixrQkFBa0IsbUJBQW1CLG1CQUFtQixHQUFHLHVCQUF1QixnQ0FBZ0MsR0FBRyxzQkFBc0IsbUJBQW1CLGdDQUFnQyxvQ0FBb0MsNEJBQTRC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QixVQUEvQixFQUEyQyxZQUFNO0FBQzdDeEIsMEJBQWMsQ0FBZDtBQUNBVywwQkFBYzdCLG9CQUFkO0FBQ0gsU0FIRDs7QUFLQVYsc0JBQWNvRCxnQkFBZCxDQUErQixXQUEvQixFQUE0Q3BCLGtCQUE1Qzs7QUFFQWhDLHNCQUFjb0QsZ0JBQWQsQ0FBK0IsV0FBL0IsRUFBNENQLG9CQUE1QztBQUNBN0Msc0JBQWNvRCxnQkFBZCxDQUErQixXQUEvQixFQUE0Q1YsZUFBNUM7QUFDQTFDLHNCQUFjb0QsZ0JBQWQsQ0FBK0IsU0FBL0IsRUFBMENOLGtCQUExQztBQUNBOUMsc0JBQWNvRCxnQkFBZCxDQUErQixZQUEvQixFQUE2Q04sa0JBQTdDO0FBQ0g7O0FBRUQsUUFBSXZHLGFBQUosRUFBbUI7QUFDZmtCLGtDQUEwQkMsa0JBQTFCLENBQTZDMEYsZ0JBQTdDLENBQThELE9BQTlELEVBQXVFLFlBQU07QUFDekUsZ0JBQUksQ0FBQzNCLGtCQUFMLEVBQXlCO0FBQ3JCSztBQUNIO0FBQ0osU0FKRDtBQUtBckUsa0NBQTBCUyxpQkFBMUIsQ0FBNENrRixnQkFBNUMsQ0FBNkQsT0FBN0QsRUFBc0UsWUFBTTtBQUN4RSxnQkFBSSxDQUFDM0Isa0JBQUwsRUFBeUI7QUFDckJNO0FBQ0g7QUFDSixTQUpEO0FBS0EsWUFBSXRCLFFBQUosRUFBYztBQUNWaEQsc0NBQTBCTSxrQkFBMUIsQ0FBNkNxRixnQkFBN0MsQ0FBOEQsT0FBOUQsRUFBdUVaLFdBQXZFO0FBQ0g7QUFDSjtBQUNKOztrQkFFY2hDLFk7Ozs7Ozs7Ozs7O0FDcE9mLFVBQVUsbUJBQU8sQ0FBQyxvSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsMEhBQWdFOztBQUVsRzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJkaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zbGlkZXIuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKtCh0KLQmNCb0Jgg0JTQm9CvINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5zbGlkZXJfMVNfbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXJfUVhYMCB7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQmtCd0J7Qn9Ce0Jog0KHQm9CQ0JnQlNCV0KDQkCovXFxuXFxuLmJ1dHRvbl8zdy1oIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5idXR0b25TaGlmdFNsaWRlc18xa29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHRCdXR0b25fdGNFeCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5pbnB1dFBhdXNlX3BaczMge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IGF1dG8gMCAxNXB4IDA7XFxufVxcblxcbi5pbnB1dFBhdXNlTm90QWN0aXZlX3RyZWQge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbiAgICBib3JkZXItbGVmdDogNXB4IFNvbGlkICM5ZTllOWU7XFxufVxcblxcbi5pbnB1dFBhdXNlQWN0aXZlXzJJUDMge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDAgU29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM5ZTllOWU7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG4vKtCh0KLQmNCb0Jgg0JTQm9CvINCh0JvQkNCZ0JTQntCSKi9cXG5cXG4uc2xpZGVzXzN1M1kge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyrQrdGC0L4g0LTQu9GPIGRpdiovXFxufVxcblxcbi5oaWRlU2xpZGVfdVNwYiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jZW50ZXJTbGlkZV8xVU5VIHtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnNsaWRlU2hpZnRSaWdodF9wd1BsIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbn1cXG5cXG4uc2xpZGVTaGlmdExlZnRfMkNZaCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFCQUFxQjs7QUFFckI7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUEsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7O0FBRTVCO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUEsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QixvQkFBb0I7O0FBRXBCO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUUsY0FBYztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUEsNEJBQTRCXCIsXCJmaWxlXCI6XCJzdHlsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0JXQoNCQKi9cXG5cXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5taW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlciB7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQmtCd0J7Qn9Ce0Jog0KHQm9CQ0JnQlNCV0KDQkCovXFxuXFxuLmJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uYnV0dG9uU2hpZnRTbGlkZXMge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5yaWdodEJ1dHRvbiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5pbnB1dFBhdXNlIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiBhdXRvIDAgMTVweCAwO1xcbn1cXG5cXG4uaW5wdXRQYXVzZU5vdEFjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IFNvbGlkICM5ZTllOWU7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggU29saWQgIzllOWU5ZTtcXG59XFxuXFxuLmlucHV0UGF1c2VBY3RpdmUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDAgU29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM5ZTllOWU7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG4vKtCh0KLQmNCb0Jgg0JTQm9CvINCh0JvQkNCZ0JTQntCSKi9cXG5cXG4uc2xpZGVzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8q0K3RgtC+INC00LvRjyBkaXYqL1xcbn1cXG5cXG4uaGlkZVNsaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNlbnRlclNsaWRlIHtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnNsaWRlU2hpZnRSaWdodCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG59XFxuXFxuLnNsaWRlU2hpZnRMZWZ0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cIl19XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2xpZGVyXCI6IFwic2xpZGVyXzFTX25cIixcblx0XCJtaW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlclwiOiBcIm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyX1FYWDBcIixcblx0XCJidXR0b25cIjogXCJidXR0b25fM3ctaFwiLFxuXHRcImJ1dHRvblNoaWZ0U2xpZGVzXCI6IFwiYnV0dG9uU2hpZnRTbGlkZXNfMWtvblwiLFxuXHRcInJpZ2h0QnV0dG9uXCI6IFwicmlnaHRCdXR0b25fdGNFeFwiLFxuXHRcImlucHV0UGF1c2VcIjogXCJpbnB1dFBhdXNlX3BaczNcIixcblx0XCJpbnB1dFBhdXNlTm90QWN0aXZlXCI6IFwiaW5wdXRQYXVzZU5vdEFjdGl2ZV90cmVkXCIsXG5cdFwiaW5wdXRQYXVzZUFjdGl2ZVwiOiBcImlucHV0UGF1c2VBY3RpdmVfMklQM1wiLFxuXHRcInNsaWRlc1wiOiBcInNsaWRlc18zdTNZXCIsXG5cdFwiaGlkZVNsaWRlXCI6IFwiaGlkZVNsaWRlX3VTcGJcIixcblx0XCJjZW50ZXJTbGlkZVwiOiBcImNlbnRlclNsaWRlXzFVTlVcIixcblx0XCJzbGlkZVNoaWZ0UmlnaHRcIjogXCJzbGlkZVNoaWZ0UmlnaHRfcHdQbFwiLFxuXHRcInNsaWRlU2hpZnRMZWZ0XCI6IFwic2xpZGVTaGlmdExlZnRfMkNZaFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5cclxuaW1wb3J0IGFycm93T2ZCdXR0b24gZnJvbSAnLi9hcnJvdy5zdmcnXHJcblxyXG5mdW5jdGlvbiBhZGRCdXR0b25Db250cm9sKHNsaWRlciwgYnV0dG9uQ29udHJvbCwgYnV0dG9uRGVmYXVsdFN0eWxlcykge1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih7dHlwZSwgYnV0dG9uSW5uZXJOb2RlID0gbnVsbCwgbmFtZSwgYWx0LCBjbGFzc0xpc3QgPSBbXX0gPSB7fSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBudWxsO1xyXG4gICAgICAgIGlmIChidXR0b25Jbm5lck5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYFBTRVVET19CVVRUT04gJHtuYW1lfWApO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYXJyb3dPZkJ1dHRvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3NMaXN0LmZvckVhY2godmFsdWUgPT4gYnV0dG9uLmNsYXNzTGlzdC5hZGQodmFsdWUpKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyYXRlQnV0dG9uQ29udHJvbChidXR0b25EZWZhdWx0U3R5bGVzKSB7XHJcbiAgICAgICAgaWYgKGJ1dHRvbkRlZmF1bHRTdHlsZXMpIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uSW5uZXJOb2RlOiBhcnJvd09mQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogW3N0eWxlcy5yaWdodEJ1dHRvbiwgc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmJ1dHRvblNoaWZ0U2xpZGVzXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImlucHV0IHBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbc3R5bGVzLmlucHV0UGF1c2VOb3RBY3RpdmUsIHN0eWxlcy5pbnB1dFBhdXNlLCBzdHlsZXMuYnV0dG9uXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbklubmVyTm9kZTogYXJyb3dPZkJ1dHRvbixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93TGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyBsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmJ1dHRvblNoaWZ0U2xpZGVzXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd1JpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiaW5wdXQgcGF1c2VcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93TGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyBsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdCA9IHtcclxuICAgICAgICBsZWZ0QnV0dG9uQ29udHJvbDogbnVsbCxcclxuICAgICAgICByaWdodEJ1dHRvbkNvbnRyb2w6IG51bGwsXHJcbiAgICAgICAgcGF1c2VCdXR0b25Db250cm9sOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChidXR0b25Db250cm9sKSB7XHJcbiAgICAgICAgY3JhdGVCdXR0b25Db250cm9sKGJ1dHRvbkRlZmF1bHRTdHlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBidXR0b25Db250cm9sRWxlbWVudHNMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRCdXR0b25Db250cm9sOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gYWRkaW5nTWlzc2luZ1NsaWRlcyhzbGlkZXNFbGVtZW50c0FycmF5KSB7XHJcbiAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGxldCBmaXJzdENsb25lRWxlbWVudCA9IHNsaWRlc0VsZW1lbnRzQXJyYXlbMF0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGxldCBzZWNvbmRDbG9uZUVsZW1lbnQgPSBmaXJzdENsb25lRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5wdXNoKGZpcnN0Q2xvbmVFbGVtZW50KTtcclxuICAgICAgICBzbGlkZXIuYXBwZW5kKGZpcnN0Q2xvbmVFbGVtZW50KTtcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LnB1c2goc2Vjb25kQ2xvbmVFbGVtZW50KTtcclxuICAgICAgICBzbGlkZXIuYXBwZW5kKHNlY29uZENsb25lRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVFbGVtZW50ID0gdmFsdWUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LnB1c2goY2xvbmVFbGVtZW50KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChjbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNsaWRlc0VsZW1lbnRzQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZGluZ01pc3NpbmdTbGlkZXM7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmlld0JveD1cXFwiMCAwIDI2IDUwXFxcIj48ZGVmcz48Y2xpcFBhdGggaWQ9XFxcImNsaXAtYXJyb3dcXFwiPjxyZWN0IHdpZHRoPVxcXCIyNlxcXCIgaGVpZ2h0PVxcXCI1MFxcXCI+PC9yZWN0PjwvY2xpcFBhdGg+PC9kZWZzPjxnIGlkPVxcXCJhcnJvd1xcXCIgY2xpcC1wYXRoPVxcXCJ1cmwoI2NsaXAtYXJyb3cpXFxcIj48cmVjdCB3aWR0aD1cXFwiMjZcXFwiIGhlaWdodD1cXFwiNTBcXFwiIGZpbGw9XFxcInJnYmEoMjU1LDI1NSwyNTUsMClcXFwiPjwvcmVjdD48cGF0aCBpZD1cXFwi0JrQvtC90YLRg9GAXzFcXFwiIGRhdGEtbmFtZT1cXFwi0JrQvtC90YLRg9GAIDFcXFwiIGQ9XFxcIk0xMC42NjUsNS4wMjYsMzMuODczLDI4LjIzNCwxMC42NjUsNTEuNDQyXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOS41MDIgLTQpXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiM3MDcwNzBcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRET01EYXRlKGlkRWxlbWVudCkge1xyXG5cclxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkRWxlbWVudCk7XHJcbiAgICBpZiAoc2xpZGVyID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyVjJXMnLFxyXG4gICAgICAgICAgICAnZm9udC1zaXplOiAxNnB4OyBjb2xvcjogcmVkOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhN2EwOyBwYWRkaW5nOiAycHggNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBtYXJnaW46IDIwcHggYXV0bzsnLFxyXG4gICAgICAgICAgICBgc2xpZGVyIHwgaWQgJHtpZEVsZW1lbnR9IGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICAgICAgcmV0dXJuIHtoYXNFcnJvcjogdHJ1ZX07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2xpZGVzQXJyYXkocGFyZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUudGFnTmFtZSAhPT0gXCJJTlBVVFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzbGlkZXNFbGVtZW50c0FycmF5ID0gZ2V0U2xpZGVzQXJyYXkoc2xpZGVyKTtcclxuICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5ID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cgKCAnJWMlcycsXHJcbiAgICAgICAgICAgICdmb250LXNpemU6IDE2cHg7IGNvbG9yOiByZWQ7IGJhY2tncm91bmQtY29sb3I6ICNmZmE3YTA7IHBhZGRpbmc6IDJweCA1cHg7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IG1hcmdpbjogMjBweCBhdXRvOycsXHJcbiAgICAgICAgICAgIGBzbGlkZXIgfCBjb250YWluZXIgJyMke2lkRWxlbWVudH0nIGlzIGVtcHR5YCk7XHJcbiAgICAgICAgcmV0dXJuIHtoYXNFcnJvcjogdHJ1ZX07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyAgPSB7XHJcbiAgICAgICAgX25leHRTbGlkZTogc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxLFxyXG4gICAgICAgIF9jdXJyZW50U2xpZGU6IDAsXHJcbiAgICAgICAgX3ByZXZTbGlkZTogMSxcclxuXHJcbiAgICAgICAgZ2V0IGdldEN1cnJlbnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0IGdldE5leHQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uZXh0U2xpZGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0IGdldFByZXYoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcmV2U2xpZGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ29OZXh0KCkge1xyXG4gICAgICAgICAgICArK3RoaXMuX25leHRTbGlkZTtcclxuICAgICAgICAgICAgKyt0aGlzLl9jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgICAgICsrdGhpcy5fcHJldlNsaWRlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX25leHRTbGlkZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV4dFNsaWRlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fY3VycmVudFNsaWRlIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9wcmV2U2xpZGUgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZTbGlkZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnb1ByZXYoKSB7XHJcbiAgICAgICAgICAgIC0tdGhpcy5fbmV4dFNsaWRlO1xyXG4gICAgICAgICAgICAtLXRoaXMuX2N1cnJlbnRTbGlkZTtcclxuICAgICAgICAgICAgLS10aGlzLl9wcmV2U2xpZGU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoLTEpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fbmV4dFNsaWRlIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZXh0U2xpZGUgPSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX2N1cnJlbnRTbGlkZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFNsaWRlID0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9wcmV2U2xpZGUgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZTbGlkZSA9IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBzbGlkZXJXaWR0aCA9IHNsaWRlci5jbGllbnRXaWR0aDtcclxuXHJcbiAgICBjb25zdCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2xpZGVyRWxlbWVudDogc2xpZGVyLFxyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkOiBzbGlkZXNFbGVtZW50c0FycmF5LFxyXG4gICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXM6IG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMsXHJcbiAgICAgICAgc2xpZGVyV2lkdGg6IHNsaWRlcldpZHRoLFxyXG4gICAgICAgIGhhc0Vycm9yOiBoYXNFcnJvclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRET01EYXRlOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBzZXRTbGlkZXJTdHlsZXMoc2xpZGVyLCBzZXREZWZhdWx0TWluaW11bVNpemVzKSB7XHJcbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVyKTtcclxuICAgIGlmIChzZXREZWZhdWx0TWluaW11bVNpemVzKSB7XHJcbiAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoc3R5bGVzLm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0U2xpZGVyU3R5bGVzIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIHNldFNsaWRlc1N0eWxlKHNsaWRlc0VsZW1lbnRzQXJyYXkpIHtcclxuICAgIGZ1bmN0aW9uIGF1dG9tYXRpY1NldHRpbmdQaWN0dXJlV2lkdGgoKSB7XHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGF1dG9tYXRpY1NldHRpbmdQaWN0dXJlV2lkdGgoc2xpZGVzRWxlbWVudHNBcnJheSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0U2xpZGVzU3R5bGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBnZXRET01EYXRlIGZyb20gJy4vZ2V0RE9NRGF0ZS5qcyc7XG5pbXBvcnQgYWRkaW5nTWlzc2luZ1NsaWRlcyBmcm9tICcuL2FkZGluZ01pc3NpbmdTbGlkZXMuanMnO1xuaW1wb3J0IGFkZEJ1dHRvbkNvbnRyb2wgZnJvbSAnLi9hZGRCdXR0b25Db250cm9sLmpzJztcbmltcG9ydCBzZXRTbGlkZXJTdHlsZXMgZnJvbSAnLi9zZXRTbGlkZXJTdHlsZXMuanMnO1xuaW1wb3J0IHNldFNsaWRlc1N0eWxlcyBmcm9tICcuL3NldFNsaWRlc1N0eWxlcy5qcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZXIoaWRFbGVtZW50LCB7XG4gICAgYXV0b3BsYXkgPSB0cnVlLFxuICAgIHRpbWVPZkNoYW5naW5nU2xpZGVzID0gNTAwMCxcbiAgICB0aW1lVG9DaGFuZ2VTbGlkZXMgPSAxMDAwLFxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbk5hbWUgPSBcImxpbmVhclwiLFxuICAgIGJ1dHRvbkNvbnRyb2wgPSB0cnVlLFxuICAgIHRvdWNobW92ZSA9IHRydWUsXG4gICAgYnV0dG9uRGVmYXVsdFN0eWxlcyA9IHRydWUsXG4gICAgc2V0RGVmYXVsdE1pbmltdW1TaXplcyA9IHRydWUsXG59ID0ge30pIHtcblxuICAgIGZ1bmN0aW9uIHNldFNsaWRlc0Rpc3BsYXkoKSB7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAvLyB2YWx1ZS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coc2xpZGVzRWxlbWVudHNBcnJheSlcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldE5leHRdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRDdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0UHJldl0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3NpdGlvbmluZ1NsaWRlcygpIHtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldE5leHRdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlU2hpZnRSaWdodCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXROZXh0XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5zbGlkZVNoaWZ0TGVmdCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRDdXJyZW50XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5jZW50ZXJTbGlkZSk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRDdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5zbGlkZVNoaWZ0UmlnaHQsIHN0eWxlcy5zbGlkZVNoaWZ0TGVmdCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZVNoaWZ0TGVmdCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZVNoaWZ0UmlnaHQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvTGVmdFNsaWRlKCkge1xuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdvTmV4dCgpO1xuICAgICAgICBzZXRTbGlkZXNEaXNwbGF5KCk7XG4gICAgICAgIHBvc2l0aW9uaW5nU2xpZGVzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoVG9SaWdodFNsaWRlKCkge1xuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdvUHJldigpO1xuICAgICAgICBzZXRTbGlkZXNEaXNwbGF5KCk7XG4gICAgICAgIHBvc2l0aW9uaW5nU2xpZGVzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVNsaWRlclRvdWNoKGV2ZW50KSB7XG4gICAgICAgIGlmIChzd2l0Y2hTbGlkZUJsb2NrZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBzd2lwZUxlbmd0aCA9IDA7XG5cbiAgICAgICAgc3dpcGVMZW5ndGggKz0gY2xpZW50WCAtIGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWDtcbiAgICAgICAgaWYgKHN3aXBlTGVuZ3RoID4gc2xpZGVyV2lkdGggLyAzKSB7XG4gICAgICAgICAgICBsZWZ0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVMZW5ndGggPCAtc2xpZGVyV2lkdGggLyAzKSB7XG4gICAgICAgICAgICByaWdodFNsaWRlclNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b3VjaFNjcm9sbEJsb2NrZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRBdXRvcGxheSh0aW1lT2ZDaGFuZ2luZ1NsaWRlcykge1xuICAgICAgICBhdXRvbHBheVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gcmlnaHRTbGlkZXJTaGlmdCgpLCB0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcEF1dG9wbGF5KCkge1xuICAgICAgICBjbGVhckludGVydmFsKGF1dG9scGF5VGltZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5KGF1dG9scGF5VGltZXIpO1xuICAgICAgICBzdGFydEF1dG9wbGF5KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXVzZVN3aXRjaCgpIHtcbiAgICAgICAgaWYgKCFhdXRvcGxheSkge1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5pbnB1dFBhdXNlTm90QWN0aXZlKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmlucHV0UGF1c2VBY3RpdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5pbnB1dFBhdXNlQWN0aXZlKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmlucHV0UGF1c2VOb3RBY3RpdmUpO1xuICAgICAgICB9XG4gICAgICAgIGF1dG9wbGF5ID0gIWF1dG9wbGF5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHNldWRvVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmIChoYXNQc2V1ZG9Ub3VjaE1vdXNlKSB7XG4gICAgICAgICAgICBsZXQgcHNldWRvRXZlbnQgPSB7dG91Y2hlczogW3tjbGllbnRYOiAwfSxdfTtcbiAgICAgICAgICAgIHBzZXVkb0V2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyVG91Y2gocHNldWRvRXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHNldWRvVG91Y2hNb3ZlU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaGFzUHNldWRvVG91Y2hNb3VzZSA9IHRydWU7XG4gICAgICAgIGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIHN0b3BBdXRvcGxheSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHNldWRvVG91Y2hNb3ZlRW5kKCkge1xuICAgICAgICBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gZmFsc2U7XG4gICAgICAgIHN3aXBlTGVuZ3RoID0gMDtcbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJpZ2h0U2xpZGVyU2hpZnQoKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSB0cnVlO1xuICAgICAgICBzd2l0Y2hUb1JpZ2h0U2xpZGUoKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldE5leHRdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICAgICAgc3dpdGNoU2xpZGVCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0TmV4dF0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NoYW5nZVNsaWRlcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZWZ0U2xpZGVyU2hpZnQoKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSB0cnVlO1xuICAgICAgICBzd2l0Y2hUb0xlZnRTbGlkZSgpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0UHJldl0uY2xhc3NMaXN0LmFkZChzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICB9LCB0aW1lVG9DaGFuZ2VTbGlkZXMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHRpbWVPZkNoYW5naW5nU2xpZGVzIDwgNCkge1xuICAgICAgICAgICAgdGltZU9mQ2hhbmdpbmdTbGlkZXMgPSA0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpbWVPZkNoYW5naW5nU2xpZGVzIDwgKHRpbWVUb0NoYW5nZVNsaWRlcyAvIDEwMCkgKiAxMjApIHtcbiAgICAgICAgICAgIHRpbWVUb0NoYW5nZVNsaWRlcyA9ICh0aW1lVG9DaGFuZ2VTbGlkZXMgLyAxMDApICogODA7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTbGlkZXNEaXNwbGF5KCk7XG5cbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICBzdGFydEF1dG9wbGF5KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt0aW1lVG9DaGFuZ2VTbGlkZXN9bXNgO1xuICAgICAgICAgICAgdmFsdWUuc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsZXQgZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YID0gMDtcbiAgICBsZXQgc3dpcGVMZW5ndGggPSAwO1xuICAgIGxldCBzd2l0Y2hTbGlkZUJsb2NrZWQgPSBmYWxzZTtcbiAgICBsZXQgYXV0b2xwYXlUaW1lciA9IG51bGw7XG4gICAgbGV0IGhhc1BzZXVkb1RvdWNoTW91c2UgPSBmYWxzZTtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgc2xpZGVyRWxlbWVudCxcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheV9ub3RQcm9jZXNzZWQsXG4gICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMsXG4gICAgICAgIHNsaWRlcldpZHRoLFxuICAgICAgICBoYXNFcnJvclxuICAgIH0gPSBnZXRET01EYXRlKGlkRWxlbWVudCk7XG4gICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVzRWxlbWVudHNBcnJheSA9IGFkZGluZ01pc3NpbmdTbGlkZXMoc2xpZGVzRWxlbWVudHNBcnJheV9ub3RQcm9jZXNzZWQpO1xuICAgIHBvc2l0aW9uaW5nU2xpZGVzKCk7XG4gICAgY29uc3QgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdCA9IGFkZEJ1dHRvbkNvbnRyb2woc2xpZGVyRWxlbWVudCwgYnV0dG9uQ29udHJvbCwgYnV0dG9uRGVmYXVsdFN0eWxlcyk7XG4gICAgc2V0U2xpZGVyU3R5bGVzKHNsaWRlckVsZW1lbnQsIHNldERlZmF1bHRNaW5pbXVtU2l6ZXMpO1xuICAgIHNldFNsaWRlc1N0eWxlcyhzbGlkZXNFbGVtZW50c0FycmF5KTtcblxuXG4gICAgaW5pdCgpO1xuXG4gICAgaWYgKHRvdWNobW92ZSkge1xuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG1vdmVTbGlkZXJUb3VjaCk7XG4gICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2hTY3JvbGxCbG9ja2VyKTtcblxuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcHNldWRvVG91Y2hNb3ZlU3RhcnQpO1xuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcHNldWRvVG91Y2hNb3ZlKTtcbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBwc2V1ZG9Ub3VjaE1vdmVFbmQpO1xuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHBzZXVkb1RvdWNoTW92ZUVuZCk7XG4gICAgfVxuXG4gICAgaWYgKGJ1dHRvbkNvbnRyb2wpIHtcbiAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghc3dpdGNoU2xpZGVCbG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgbGVmdFNsaWRlclNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN3aXRjaFNsaWRlQmxvY2tlZCkge1xuICAgICAgICAgICAgICAgIHJpZ2h0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhdXNlU3dpdGNoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2xpZGVyOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9