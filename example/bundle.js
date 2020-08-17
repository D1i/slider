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
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dist/dist.js":
/*!***********************!*\
  !*** ../dist/dist.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

this["mySlider"] =
/******/
function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./index.js");
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "../node_modules/css-loader/dist/cjs.js?!./style.css":
  /*!********************************************************************!*\
    !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesCssLoaderDistCjsJsStyleCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "../node_modules/css-loader/dist/runtime/api.js");
    /* harmony import */


    var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__); // Imports


    var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true); // Module


    ___CSS_LOADER_EXPORT___.push([module.i, "/*СТИЛИ ДЛЯ СЛАЙДЕРА*/\n\n.slider_1S_n {\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.minWidthAndMinHeightSlider_QXX0 {\n    min-width: 500px;\n    min-height: 250px;\n}\n\n/*_________________________*/\n/*#########################*/\n/*СТИЛИ ДЛЯ КНОПОК СЛАЙДЕРА*/\n\n.button_3w-h {\n    outline: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.buttonShiftSlides_1kon {\n    width: 30px;\n    height: 60px;\n    margin: 10px;\n}\n\n.rightButton_tcEx {\n    transform: rotate(180deg);\n}\n\n.inputPause_pZs3 {\n    height: 40px;\n    transition-duration: 0.2s;\n    background-color: transparent;\n    margin: auto 0 15px 0;\n}\n\n.inputPauseNotActive_tred {\n    width: 10px;\n    border: 0 solid transparent;\n    border-right: 5px Solid #9e9e9e;\n    border-left: 5px Solid #9e9e9e;\n}\n\n.inputPauseActive_2IP3 {\n    width: 0;\n    border: 20px solid transparent;\n    border-right: 0 Solid transparent;\n    border-left: 20px solid #9e9e9e;\n    margin-right: -10px;\n}\n\n/*_________________________*/\n/*#########################*/\n/*СТИЛИ ДЛЯ СЛАЙДОВ*/\n\n.slides_3u3Y {\n    position: absolute;\n    pointer-events: none;\n    width: 100%;\n    overflow: hidden; /*Это для div*/\n}\n\n.hideSlide_uSpb {\n    display: none;\n}\n\n.centerSlide_1UNU {\n    z-index: 1;\n}\n\n.slideShiftRight_pwPl {\n    transform: translateX(100%);\n}\n\n.slideShiftLeft_2CYh {\n    transform: translateX(-100%);\n}\n\n/*_________________________*/", "", {
      "version": 3,
      "sources": ["style.css"],
      "names": [],
      "mappings": "AAAA,qBAAqB;;AAErB;IACI,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA,4BAA4B;AAC5B,4BAA4B;AAC5B,4BAA4B;;AAE5B;IACI,aAAa;IACb,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,6BAA6B;IAC7B,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,2BAA2B;IAC3B,+BAA+B;IAC/B,8BAA8B;AAClC;;AAEA;IACI,QAAQ;IACR,8BAA8B;IAC9B,iCAAiC;IACjC,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA,4BAA4B;AAC5B,4BAA4B;AAC5B,oBAAoB;;AAEpB;IACI,kBAAkB;IAClB,oBAAoB;IACpB,WAAW;IACX,gBAAgB,EAAE,cAAc;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,4BAA4B;AAChC;;AAEA,4BAA4B",
      "file": "style.css",
      "sourcesContent": ["/*СТИЛИ ДЛЯ СЛАЙДЕРА*/\n\n.slider {\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.minWidthAndMinHeightSlider {\n    min-width: 500px;\n    min-height: 250px;\n}\n\n/*_________________________*/\n/*#########################*/\n/*СТИЛИ ДЛЯ КНОПОК СЛАЙДЕРА*/\n\n.button {\n    outline: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.buttonShiftSlides {\n    width: 30px;\n    height: 60px;\n    margin: 10px;\n}\n\n.rightButton {\n    transform: rotate(180deg);\n}\n\n.inputPause {\n    height: 40px;\n    transition-duration: 0.2s;\n    background-color: transparent;\n    margin: auto 0 15px 0;\n}\n\n.inputPauseNotActive {\n    width: 10px;\n    border: 0 solid transparent;\n    border-right: 5px Solid #9e9e9e;\n    border-left: 5px Solid #9e9e9e;\n}\n\n.inputPauseActive {\n    width: 0;\n    border: 20px solid transparent;\n    border-right: 0 Solid transparent;\n    border-left: 20px solid #9e9e9e;\n    margin-right: -10px;\n}\n\n/*_________________________*/\n/*#########################*/\n/*СТИЛИ ДЛЯ СЛАЙДОВ*/\n\n.slides {\n    position: absolute;\n    pointer-events: none;\n    width: 100%;\n    overflow: hidden; /*Это для div*/\n}\n\n.hideSlide {\n    display: none;\n}\n\n.centerSlide {\n    z-index: 1;\n}\n\n.slideShiftRight {\n    transform: translateX(100%);\n}\n\n.slideShiftLeft {\n    transform: translateX(-100%);\n}\n\n/*_________________________*/"]
    }]); // Exports


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
    /* harmony default export */

    __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
    /***/
  },

  /***/
  "../node_modules/css-loader/dist/runtime/api.js":
  /*!******************************************************!*\
    !*** ../node_modules/css-loader/dist/runtime/api.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
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
    /***/

  },

  /***/
  "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!*****************************************************************************!*\
    !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
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
        var nonce = true ? __webpack_require__.nc : undefined;

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
    /***/

  },

  /***/
  "./addButtonControl.js":
  /*!*****************************!*\
    !*** ./addButtonControl.js ***!
    \*****************************/

  /*! exports provided: default */

  /***/
  function addButtonControlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./style.css */
    "./style.css");
    /* harmony import */


    var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./arrow.svg */
    "./arrow.svg");
    /* harmony import */


    var _arrow_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_arrow_svg__WEBPACK_IMPORTED_MODULE_1__);

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
    /* harmony default export */


    __webpack_exports__["default"] = addButtonControl;
    /***/
  },

  /***/
  "./addingMissingSlides.js":
  /*!********************************!*\
    !*** ./addingMissingSlides.js ***!
    \********************************/

  /*! exports provided: default */

  /***/
  function addingMissingSlidesJs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony default export */


    __webpack_exports__["default"] = addingMissingSlides;
    /***/
  },

  /***/
  "./arrow.svg":
  /*!*******************!*\
    !*** ./arrow.svg ***!
    \*******************/

  /*! no static exports found */

  /***/
  function arrowSvg(module, exports) {
    module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 26 50\"><defs><clipPath id=\"clip-arrow\"><rect width=\"26\" height=\"50\"></rect></clipPath></defs><g id=\"arrow\" clip-path=\"url(#clip-arrow)\"><rect width=\"26\" height=\"50\" fill=\"rgba(255,255,255,0)\"></rect><path id=\"Контур_1\" data-name=\"Контур 1\" d=\"M10.665,5.026,33.873,28.234,10.665,51.442\" transform=\"translate(-9.502 -4)\" fill=\"none\" stroke=\"#707070\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"></path></g></svg>";
    /***/
  },

  /***/
  "./createObjectSliderVisibleSlides.js":
  /*!********************************************!*\
    !*** ./createObjectSliderVisibleSlides.js ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function createObjectSliderVisibleSlidesJs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony default export */


    __webpack_exports__["default"] = createObjectSliderVisibleSlides;
    /***/
  },

  /***/
  "./getDOMDate.js":
  /*!***********************!*\
    !*** ./getDOMDate.js ***!
    \***********************/

  /*! exports provided: default */

  /***/
  function getDOMDateJs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony default export */


    __webpack_exports__["default"] = getDOMDate;
    /***/
  },

  /***/
  "./index.js":
  /*!******************!*\
    !*** ./index.js ***!
    \******************/

  /*! exports provided: default */

  /***/
  function indexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _getDOMDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./getDOMDate.js */
    "./getDOMDate.js");
    /* harmony import */


    var _createObjectSliderVisibleSlides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./createObjectSliderVisibleSlides.js */
    "./createObjectSliderVisibleSlides.js");
    /* harmony import */


    var _addingMissingSlides_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./addingMissingSlides.js */
    "./addingMissingSlides.js");
    /* harmony import */


    var _addButtonControl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addButtonControl.js */
    "./addButtonControl.js");
    /* harmony import */


    var _setSliderStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./setSliderStyles.js */
    "./setSliderStyles.js");
    /* harmony import */


    var _setSlidesStyles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./setSlidesStyles.js */
    "./setSlidesStyles.js");
    /* harmony import */


    var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./style.css */
    "./style.css");
    /* harmony import */


    var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__); //Периименовать файл, в index.js


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
    /* harmony default export */


    __webpack_exports__["default"] = createSlider;
    /***/
  },

  /***/
  "./setSliderStyles.js":
  /*!****************************!*\
    !*** ./setSliderStyles.js ***!
    \****************************/

  /*! exports provided: default */

  /***/
  function setSliderStylesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./style.css */
    "./style.css");
    /* harmony import */


    var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);

    function setSliderStyles(slider, setDefaultMinimumSizes) {
      slider.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.slider);

      if (setDefaultMinimumSizes) {
        slider.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.minWidthAndMinHeightSlider);
      }
    }
    /* harmony default export */


    __webpack_exports__["default"] = setSliderStyles;
    /***/
  },

  /***/
  "./setSlidesStyles.js":
  /*!****************************!*\
    !*** ./setSlidesStyles.js ***!
    \****************************/

  /*! exports provided: default */

  /***/
  function setSlidesStylesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./style.css */
    "./style.css");
    /* harmony import */


    var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);

    function setSlidesStyle(slidesElementsArray) {
      function automaticSettingPictureWidth() {
        slidesElementsArray.forEach(function (value) {
          value.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.slides);
        });
      }

      automaticSettingPictureWidth(slidesElementsArray);
    }
    /* harmony default export */


    __webpack_exports__["default"] = setSlidesStyle;
    /***/
  },

  /***/
  "./style.css":
  /*!*******************!*\
    !*** ./style.css ***!
    \*******************/

  /*! no static exports found */

  /***/
  function styleCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */
    "../node_modules/css-loader/dist/cjs.js?!./style.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    module.exports = content.locals || {};
    /***/
  }
  /******/

})["default"];

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/dist */ "../dist/dist.js");
/* harmony import */ var _dist_dist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_dist__WEBPACK_IMPORTED_MODULE_0__);



Object(_dist_dist__WEBPACK_IMPORTED_MODULE_0__["mySlider"])("firstSlider", {
  autoplay: false,
  timeOfChangingSlides: 2000,
  timeToChangeSlides: 500,
  transitionTimingFunctionName: "ease-in",
  buttonControl: false,
  touchmove: true,
  buttonDefaultStyles: true,
  setDefaultMinimumSizes: true
});
Object(_dist_dist__WEBPACK_IMPORTED_MODULE_0__["mySlider"])("secondSlider");

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teVNsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teVNsaWRlci9teVNsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teVNsaWRlci9teVNsaWRlci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvbXlTbGlkZXIvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci9teVNsaWRlci9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvbXlTbGlkZXIvYWRkQnV0dG9uQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci9teVNsaWRlci9hZGRpbmdNaXNzaW5nU2xpZGVzLmpzIiwid2VicGFjazovL215U2xpZGVyL215U2xpZGVyL2Fycm93LnN2ZyIsIndlYnBhY2s6Ly9teVNsaWRlci9teVNsaWRlci9jcmVhdGVPYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmpzIiwid2VicGFjazovL215U2xpZGVyL215U2xpZGVyL2dldERPTURhdGUuanMiLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvbXlTbGlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvbXlTbGlkZXIvc2V0U2xpZGVyU3R5bGVzLmpzIiwid2VicGFjazovL215U2xpZGVyL215U2xpZGVyL3NldFNsaWRlc1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci9teVNsaWRlci9zdHlsZS5jc3M/ZmFkZCIsIndlYnBhY2s6Ly9teVNsaWRlci8uL3NjcmlwdC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJsaXN0IiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJpdGVtIiwibW9kdWxlcyIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJpIiwiaWQiLCJfaSIsImRlZHVwZSIsImNzc01hcHBpbmciLCJ1c2VTb3VyY2VNYXAiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsImJhc2U2NCIsImJ0b2EiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJkYXRhIiwidHlwZSIsImJ1dHRvbklubmVyTm9kZSIsIm5hbWUiLCJhbHQiLCJjbGFzc0xpc3QiLCJidXR0b24iLCJkb2N1bWVudCIsImFycm93T2ZCdXR0b24iLCJidXR0b25Db250cm9sRWxlbWVudHNMaXN0IiwiY3JlYXRlQnV0dG9uIiwic3R5bGVzIiwic2xpZGVyIiwibGVmdEJ1dHRvbkNvbnRyb2wiLCJyaWdodEJ1dHRvbkNvbnRyb2wiLCJwYXVzZUJ1dHRvbkNvbnRyb2wiLCJjcmF0ZUJ1dHRvbkNvbnRyb2wiLCJhZGRCdXR0b25Db250cm9sIiwic2xpZGVzRWxlbWVudHNBcnJheSIsImZpcnN0Q2xvbmVFbGVtZW50Iiwic2Vjb25kQ2xvbmVFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwidmFsdWUiLCJhZGRpbmdNaXNzaW5nU2xpZGVzIiwib2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyIsIl9jdXJyZW50U2xpZGUiLCJnZXROZXh0IiwibmV4dFNsaWRlIiwiZ2V0UHJldiIsInByZXZTbGlkZSIsImdvTmV4dCIsImdvUHJldiIsImNyZWF0ZU9iamVjdFNsaWRlclZpc2libGVTbGlkZXMiLCJjb25zb2xlIiwiaGFzRXJyb3IiLCJwYXJlbnQiLCJnZXRTbGlkZXNBcnJheSIsInNsaWRlcldpZHRoIiwic2xpZGVyRWxlbWVudCIsInNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkIiwiZ2V0RE9NRGF0ZSIsImF1dG9wbGF5IiwidGltZU9mQ2hhbmdpbmdTbGlkZXMiLCJ0aW1lVG9DaGFuZ2VTbGlkZXMiLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25OYW1lIiwiYnV0dG9uQ29udHJvbCIsInRvdWNobW92ZSIsImJ1dHRvbkRlZmF1bHRTdHlsZXMiLCJzZXREZWZhdWx0TWluaW11bVNpemVzIiwic2V0U2xpZGVzRGlzcGxheSIsInBvc2l0aW9uaW5nU2xpZGVzIiwiY2xpZW50WCIsImV2ZW50Iiwic3dpcGVMZW5ndGgiLCJsZWZ0U2xpZGVyU2hpZnQiLCJyaWdodFNsaWRlclNoaWZ0IiwiYXV0b2xwYXlUaW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0b3BBdXRvcGxheSIsInN0YXJ0QXV0b3BsYXkiLCJhdXRvcGxheVJlc2V0IiwicHNldWRvRXZlbnQiLCJ0b3VjaGVzIiwibW92ZVNsaWRlclRvdWNoIiwiaGFzUHNldWRvVG91Y2hNb3VzZSIsImdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCIsInN3aXRjaFNsaWRlQmxvY2tlZCIsInN3aXRjaFRvUmlnaHRTbGlkZSIsInNldFRpbWVvdXQiLCJzd2l0Y2hUb0xlZnRTbGlkZSIsInNldFNsaWRlclN0eWxlcyIsInNldFNsaWRlc1N0eWxlcyIsImluaXQiLCJjcmVhdGVTbGlkZXIiLCJhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoIiwic2V0U2xpZGVzU3R5bGUiLCJteVNsaWRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7O0FBSUEsaURBQTZDO0FBQ3pDLDhDQUF3QztBQUNwQ3JELDJCQUFtQixDQUFuQkEsUUFBNEIsaUJBQVM7QUFDakNJLGVBQUssQ0FBTEEsY0FBb0JYLGtEQUFwQlc7QUFESko7QUFHSDs7QUFDRHlELGtDQUE0QixDQUE1QkEsbUJBQTRCLENBQTVCQTtBQUNIO0FBRWNDOzs7QUFBQUEscUNBQWYsY0FBZUE7Ozs7Ozs7Ozs7Ozs7O0FDYmYsY0FBVSxtQkFBTztBQUFDO0FBQUEsMkVBQUQsQ0FBakI7O0FBQ0Esa0JBQTBCLG1CQUFPO0FBQUM7QUFBQSx5REFBRCxDQUFqQzs7QUFFQTs7QUFFQTtBQUNBLGtCQUEwQixRQUExQixFQUFtQyxPQUFuQyxFQUFtQyxFQUFuQztBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUVBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFhOztBQUViO0FBRUFDLDJEQUFRLENBQUMsYUFBRCxFQUFnQjtBQUNwQnBDLFVBQVEsRUFBRSxLQURVO0FBRXBCQyxzQkFBb0IsRUFBRSxJQUZGO0FBR3BCQyxvQkFBa0IsRUFBRSxHQUhBO0FBSXBCQyw4QkFBNEIsRUFBRSxTQUpWO0FBS3BCQyxlQUFhLEVBQUUsS0FMSztBQU1wQkMsV0FBUyxFQUFFLElBTlM7QUFPcEJDLHFCQUFtQixFQUFFLElBUEQ7QUFRcEJDLHdCQUFzQixFQUFFO0FBUkosQ0FBaEIsQ0FBUjtBQVVBNkIsMkRBQVEsQ0FBQyxjQUFELENBQVIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NjcmlwdC5qc1wiKTtcbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKtCh0KLQmNCb0Jgg0JTQm9CvINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5zbGlkZXJfMVNfbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXJfUVhYMCB7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQmtCd0J7Qn9Ce0Jog0KHQm9CQ0JnQlNCV0KDQkCovXFxuXFxuLmJ1dHRvbl8zdy1oIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5idXR0b25TaGlmdFNsaWRlc18xa29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHRCdXR0b25fdGNFeCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5pbnB1dFBhdXNlX3BaczMge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IGF1dG8gMCAxNXB4IDA7XFxufVxcblxcbi5pbnB1dFBhdXNlTm90QWN0aXZlX3RyZWQge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbiAgICBib3JkZXItbGVmdDogNXB4IFNvbGlkICM5ZTllOWU7XFxufVxcblxcbi5pbnB1dFBhdXNlQWN0aXZlXzJJUDMge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDAgU29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM5ZTllOWU7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG4vKtCh0KLQmNCb0Jgg0JTQm9CvINCh0JvQkNCZ0JTQntCSKi9cXG5cXG4uc2xpZGVzXzN1M1kge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyrQrdGC0L4g0LTQu9GPIGRpdiovXFxufVxcblxcbi5oaWRlU2xpZGVfdVNwYiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jZW50ZXJTbGlkZV8xVU5VIHtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnNsaWRlU2hpZnRSaWdodF9wd1BsIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbn1cXG5cXG4uc2xpZGVTaGlmdExlZnRfMkNZaCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFCQUFxQjs7QUFFckI7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUEsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7O0FBRTVCO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUEsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QixvQkFBb0I7O0FBRXBCO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUUsY0FBYztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUEsNEJBQTRCXCIsXCJmaWxlXCI6XCJzdHlsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0JXQoNCQKi9cXG5cXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5taW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlciB7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQmtCd0J7Qn9Ce0Jog0KHQm9CQ0JnQlNCV0KDQkCovXFxuXFxuLmJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uYnV0dG9uU2hpZnRTbGlkZXMge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5yaWdodEJ1dHRvbiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5pbnB1dFBhdXNlIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiBhdXRvIDAgMTVweCAwO1xcbn1cXG5cXG4uaW5wdXRQYXVzZU5vdEFjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IFNvbGlkICM5ZTllOWU7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggU29saWQgIzllOWU5ZTtcXG59XFxuXFxuLmlucHV0UGF1c2VBY3RpdmUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDAgU29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM5ZTllOWU7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG4vKtCh0KLQmNCb0Jgg0JTQm9CvINCh0JvQkNCZ0JTQntCSKi9cXG5cXG4uc2xpZGVzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8q0K3RgtC+INC00LvRjyBkaXYqL1xcbn1cXG5cXG4uaGlkZVNsaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNlbnRlclNsaWRlIHtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnNsaWRlU2hpZnRSaWdodCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG59XFxuXFxuLnNsaWRlU2hpZnRMZWZ0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cIl19XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2xpZGVyXCI6IFwic2xpZGVyXzFTX25cIixcblx0XCJtaW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlclwiOiBcIm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyX1FYWDBcIixcblx0XCJidXR0b25cIjogXCJidXR0b25fM3ctaFwiLFxuXHRcImJ1dHRvblNoaWZ0U2xpZGVzXCI6IFwiYnV0dG9uU2hpZnRTbGlkZXNfMWtvblwiLFxuXHRcInJpZ2h0QnV0dG9uXCI6IFwicmlnaHRCdXR0b25fdGNFeFwiLFxuXHRcImlucHV0UGF1c2VcIjogXCJpbnB1dFBhdXNlX3BaczNcIixcblx0XCJpbnB1dFBhdXNlTm90QWN0aXZlXCI6IFwiaW5wdXRQYXVzZU5vdEFjdGl2ZV90cmVkXCIsXG5cdFwiaW5wdXRQYXVzZUFjdGl2ZVwiOiBcImlucHV0UGF1c2VBY3RpdmVfMklQM1wiLFxuXHRcInNsaWRlc1wiOiBcInNsaWRlc18zdTNZXCIsXG5cdFwiaGlkZVNsaWRlXCI6IFwiaGlkZVNsaWRlX3VTcGJcIixcblx0XCJjZW50ZXJTbGlkZVwiOiBcImNlbnRlclNsaWRlXzFVTlVcIixcblx0XCJzbGlkZVNoaWZ0UmlnaHRcIjogXCJzbGlkZVNoaWZ0UmlnaHRfcHdQbFwiLFxuXHRcInNsaWRlU2hpZnRMZWZ0XCI6IFwic2xpZGVTaGlmdExlZnRfMkNZaFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5cclxuaW1wb3J0IGFycm93T2ZCdXR0b24gZnJvbSAnLi9hcnJvdy5zdmcnXHJcblxyXG5mdW5jdGlvbiBhZGRCdXR0b25Db250cm9sKHNsaWRlciwgYnV0dG9uQ29udHJvbCwgYnV0dG9uRGVmYXVsdFN0eWxlcykge1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih7dHlwZSwgYnV0dG9uSW5uZXJOb2RlID0gbnVsbCwgbmFtZSwgYWx0LCBjbGFzc0xpc3QgPSBbXX0gPSB7fSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBudWxsO1xyXG4gICAgICAgIGlmIChidXR0b25Jbm5lck5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYFBTRVVET19CVVRUT04gJHtuYW1lfWApO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYXJyb3dPZkJ1dHRvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3NMaXN0LmZvckVhY2godmFsdWUgPT4gYnV0dG9uLmNsYXNzTGlzdC5hZGQodmFsdWUpKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyYXRlQnV0dG9uQ29udHJvbChidXR0b25EZWZhdWx0U3R5bGVzKSB7XHJcbiAgICAgICAgaWYgKGJ1dHRvbkRlZmF1bHRTdHlsZXMpIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uSW5uZXJOb2RlOiBhcnJvd09mQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogW3N0eWxlcy5yaWdodEJ1dHRvbiwgc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmJ1dHRvblNoaWZ0U2xpZGVzXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImlucHV0IHBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbc3R5bGVzLmlucHV0UGF1c2VOb3RBY3RpdmUsIHN0eWxlcy5pbnB1dFBhdXNlLCBzdHlsZXMuYnV0dG9uXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbklubmVyTm9kZTogYXJyb3dPZkJ1dHRvbixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93TGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyBsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmJ1dHRvblNoaWZ0U2xpZGVzXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd1JpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiaW5wdXQgcGF1c2VcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93TGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyBsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdCA9IHtcclxuICAgICAgICBsZWZ0QnV0dG9uQ29udHJvbDogbnVsbCxcclxuICAgICAgICByaWdodEJ1dHRvbkNvbnRyb2w6IG51bGwsXHJcbiAgICAgICAgcGF1c2VCdXR0b25Db250cm9sOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChidXR0b25Db250cm9sKSB7XHJcbiAgICAgICAgY3JhdGVCdXR0b25Db250cm9sKGJ1dHRvbkRlZmF1bHRTdHlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBidXR0b25Db250cm9sRWxlbWVudHNMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRCdXR0b25Db250cm9sOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gYWRkaW5nTWlzc2luZ1NsaWRlcyhzbGlkZXNFbGVtZW50c0FycmF5KSB7XHJcbiAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGxldCBmaXJzdENsb25lRWxlbWVudCA9IHNsaWRlc0VsZW1lbnRzQXJyYXlbMF0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGxldCBzZWNvbmRDbG9uZUVsZW1lbnQgPSBmaXJzdENsb25lRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5wdXNoKGZpcnN0Q2xvbmVFbGVtZW50KTtcclxuICAgICAgICBzbGlkZXIuYXBwZW5kKGZpcnN0Q2xvbmVFbGVtZW50KTtcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LnB1c2goc2Vjb25kQ2xvbmVFbGVtZW50KTtcclxuICAgICAgICBzbGlkZXIuYXBwZW5kKHNlY29uZENsb25lRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVFbGVtZW50ID0gdmFsdWUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LnB1c2goY2xvbmVFbGVtZW50KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChjbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNsaWRlc0VsZW1lbnRzQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZGluZ01pc3NpbmdTbGlkZXM7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmlld0JveD1cXFwiMCAwIDI2IDUwXFxcIj48ZGVmcz48Y2xpcFBhdGggaWQ9XFxcImNsaXAtYXJyb3dcXFwiPjxyZWN0IHdpZHRoPVxcXCIyNlxcXCIgaGVpZ2h0PVxcXCI1MFxcXCI+PC9yZWN0PjwvY2xpcFBhdGg+PC9kZWZzPjxnIGlkPVxcXCJhcnJvd1xcXCIgY2xpcC1wYXRoPVxcXCJ1cmwoI2NsaXAtYXJyb3cpXFxcIj48cmVjdCB3aWR0aD1cXFwiMjZcXFwiIGhlaWdodD1cXFwiNTBcXFwiIGZpbGw9XFxcInJnYmEoMjU1LDI1NSwyNTUsMClcXFwiPjwvcmVjdD48cGF0aCBpZD1cXFwi0JrQvtC90YLRg9GAXzFcXFwiIGRhdGEtbmFtZT1cXFwi0JrQvtC90YLRg9GAIDFcXFwiIGQ9XFxcIk0xMC42NjUsNS4wMjYsMzMuODczLDI4LjIzNCwxMC42NjUsNTEuNDQyXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOS41MDIgLTQpXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiM3MDcwNzBcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzKHNsaWRlc0VsZW1lbnRzQXJyYXkpIHtcclxuICAgIGNvbnN0IG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMgPSB7XHJcbiAgICAgICAgX2N1cnJlbnRTbGlkZTogMCxcclxuXHJcbiAgICAgICAgZ2V0IGdldEN1cnJlbnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0TmV4dCgpIHtcclxuICAgICAgICAgICAgbGV0IG5leHRTbGlkZSA9IHRoaXMuZ2V0Q3VycmVudDtcclxuICAgICAgICAgICAgbmV4dFNsaWRlKys7XHJcbiAgICAgICAgICAgIGlmIChuZXh0U2xpZGUgPj0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0U2xpZGVcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXRQcmV2KCkge1xyXG4gICAgICAgICAgICBsZXQgcHJldlNsaWRlID0gdGhpcy5nZXRDdXJyZW50O1xyXG4gICAgICAgICAgICBwcmV2U2xpZGUtLTtcclxuICAgICAgICAgICAgaWYgKDAgPiBwcmV2U2xpZGUpIHtcclxuICAgICAgICAgICAgICAgIHByZXZTbGlkZSA9IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZTbGlkZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdvTmV4dCgpIHtcclxuICAgICAgICAgICAgKyt0aGlzLl9jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50U2xpZGUgPj0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnb1ByZXYoKSB7XHJcbiAgICAgICAgICAgIC0tdGhpcy5fY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICBpZiAoMCA+IHRoaXMuX2N1cnJlbnRTbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFNsaWRlID0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVPYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0RE9NRGF0ZShpZEVsZW1lbnQpIHtcclxuXHJcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEVsZW1lbnQpO1xyXG4gICAgaWYgKHNsaWRlciA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCclYyVzJyxcclxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHJlZDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTdhMDsgcGFkZGluZzogMnB4IDVweDsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgbWFyZ2luOiAyMHB4IGF1dG87JyxcclxuICAgICAgICAgICAgYHNsaWRlciB8IGlkICR7aWRFbGVtZW50fSBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgICAgIHJldHVybiB7aGFzRXJyb3I6IHRydWV9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNsaWRlc0FycmF5KHBhcmVudCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikubWFwKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLnRhZ05hbWUgIT09IFwiSU5QVVRcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2xpZGVzRWxlbWVudHNBcnJheSA9IGdldFNsaWRlc0FycmF5KHNsaWRlcik7XHJcbiAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyAoICclYyVzJyxcclxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHJlZDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTdhMDsgcGFkZGluZzogMnB4IDVweDsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgbWFyZ2luOiAyMHB4IGF1dG87JyxcclxuICAgICAgICAgICAgYHNsaWRlciB8IGNvbnRhaW5lciAnIyR7aWRFbGVtZW50fScgaXMgZW1wdHlgKTtcclxuICAgICAgICByZXR1cm4ge2hhc0Vycm9yOiB0cnVlfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzbGlkZXJXaWR0aCA9IHNsaWRlci5jbGllbnRXaWR0aDtcclxuXHJcbiAgICBjb25zdCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2xpZGVyRWxlbWVudDogc2xpZGVyLFxyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkOiBzbGlkZXNFbGVtZW50c0FycmF5LFxyXG4gICAgICAgIHNsaWRlcldpZHRoOiBzbGlkZXJXaWR0aCxcclxuICAgICAgICBoYXNFcnJvcjogaGFzRXJyb3JcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0RE9NRGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtcbi8v0J/QtdGA0LjQuNC80LXQvdC+0LLQsNGC0Ywg0YTQsNC50LssINCyIGluZGV4LmpzXG5pbXBvcnQgZ2V0RE9NRGF0ZSBmcm9tICcuL2dldERPTURhdGUuanMnO1xuaW1wb3J0IGNyZWF0ZU9iamVjdFNsaWRlclZpc2libGVTbGlkZXMgZnJvbSBcIi4vY3JlYXRlT2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5qc1wiO1xuaW1wb3J0IGFkZGluZ01pc3NpbmdTbGlkZXMgZnJvbSAnLi9hZGRpbmdNaXNzaW5nU2xpZGVzLmpzJztcbmltcG9ydCBhZGRCdXR0b25Db250cm9sIGZyb20gJy4vYWRkQnV0dG9uQ29udHJvbC5qcyc7XG5pbXBvcnQgc2V0U2xpZGVyU3R5bGVzIGZyb20gJy4vc2V0U2xpZGVyU3R5bGVzLmpzJztcbmltcG9ydCBzZXRTbGlkZXNTdHlsZXMgZnJvbSAnLi9zZXRTbGlkZXNTdHlsZXMuanMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlU2xpZGVyKGlkRWxlbWVudCwge1xuICAgIGF1dG9wbGF5ID0gdHJ1ZSxcbiAgICB0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA9IDUwMDAsXG4gICAgdGltZVRvQ2hhbmdlU2xpZGVzID0gMTAwMCxcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25OYW1lID0gXCJsaW5lYXJcIixcbiAgICBidXR0b25Db250cm9sID0gdHJ1ZSxcbiAgICB0b3VjaG1vdmUgPSB0cnVlLFxuICAgIGJ1dHRvbkRlZmF1bHRTdHlsZXMgPSB0cnVlLFxuICAgIHNldERlZmF1bHRNaW5pbXVtU2l6ZXMgPSB0cnVlLFxufSA9IHt9KSB7XG5cbiAgICBmdW5jdGlvbiBzZXRTbGlkZXNEaXNwbGF5KCkge1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgdmFsdWUuY2xhc3NMaXN0LmFkZChzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXROZXh0KCldLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRDdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0UHJldigpXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvc2l0aW9uaW5nU2xpZGVzKCkge1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0TmV4dCgpXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZVNoaWZ0UmlnaHQpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0TmV4dCgpXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5zbGlkZVNoaWZ0TGVmdCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRDdXJyZW50XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5jZW50ZXJTbGlkZSk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRDdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5zbGlkZVNoaWZ0UmlnaHQsIHN0eWxlcy5zbGlkZVNoaWZ0TGVmdCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2KCldLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlU2hpZnRMZWZ0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldFByZXYoKV0uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVTaGlmdFJpZ2h0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hUb0xlZnRTbGlkZSgpIHtcbiAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nb1ByZXYoKTtcbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuICAgICAgICBwb3NpdGlvbmluZ1NsaWRlcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvUmlnaHRTbGlkZSgpIHtcbiAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nb05leHQoKTtcbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuICAgICAgICBwb3NpdGlvbmluZ1NsaWRlcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZXJUb3VjaChldmVudCkge1xuICAgICAgICBpZiAoc3dpdGNoU2xpZGVCbG9ja2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgc3dpcGVMZW5ndGggPSAwO1xuXG4gICAgICAgIHN3aXBlTGVuZ3RoICs9IGNsaWVudFggLSBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblg7XG4gICAgICAgIGlmIChzd2lwZUxlbmd0aCA+IHNsaWRlcldpZHRoIC8gMykge1xuICAgICAgICAgICAgbGVmdFNsaWRlclNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlTGVuZ3RoIDwgLXNsaWRlcldpZHRoIC8gMykge1xuICAgICAgICAgICAgcmlnaHRTbGlkZXJTaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG91Y2hTY3JvbGxCbG9ja2VyKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0QXV0b3BsYXkodGltZU9mQ2hhbmdpbmdTbGlkZXMpIHtcbiAgICAgICAgYXV0b2xwYXlUaW1lciA9IHNldEludGVydmFsKCgpID0+IHJpZ2h0U2xpZGVyU2hpZnQoKSwgdGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BBdXRvcGxheSgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChhdXRvbHBheVRpbWVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheShhdXRvbHBheVRpbWVyKTtcbiAgICAgICAgc3RhcnRBdXRvcGxheSh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGF1c2VTd2l0Y2goKSB7XG4gICAgICAgIGlmICghYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LmFkZChzdHlsZXMuaW5wdXRQYXVzZU5vdEFjdGl2ZSk7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5pbnB1dFBhdXNlQWN0aXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LmFkZChzdHlsZXMuaW5wdXRQYXVzZUFjdGl2ZSk7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5pbnB1dFBhdXNlTm90QWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgICBhdXRvcGxheSA9ICFhdXRvcGxheVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBzZXVkb1RvdWNoTW92ZShldmVudCkge1xuICAgICAgICBpZiAoaGFzUHNldWRvVG91Y2hNb3VzZSkge1xuICAgICAgICAgICAgbGV0IHBzZXVkb0V2ZW50ID0ge3RvdWNoZXM6IFt7Y2xpZW50WDogMH0sXX07XG4gICAgICAgICAgICBwc2V1ZG9FdmVudC50b3VjaGVzWzBdLmNsaWVudFggPSBldmVudC5jbGllbnRYO1xuICAgICAgICAgICAgbW92ZVNsaWRlclRvdWNoKHBzZXVkb0V2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBzZXVkb1RvdWNoTW92ZVN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGhhc1BzZXVkb1RvdWNoTW91c2UgPSB0cnVlO1xuICAgICAgICBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblggPSBldmVudC5jbGllbnRYO1xuICAgICAgICBzdG9wQXV0b3BsYXkoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBzZXVkb1RvdWNoTW92ZUVuZCgpIHtcbiAgICAgICAgaGFzUHNldWRvVG91Y2hNb3VzZSA9IGZhbHNlO1xuICAgICAgICBzd2lwZUxlbmd0aCA9IDA7XG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByaWdodFNsaWRlclNoaWZ0KCkge1xuICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgc3dpdGNoU2xpZGVCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgc3dpdGNoVG9SaWdodFNsaWRlKCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXROZXh0KCldLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoU2xpZGVCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0TmV4dCgpXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2hhbmdlU2xpZGVzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxlZnRTbGlkZXJTaGlmdCgpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IHRydWU7XG4gICAgICAgIHN3aXRjaFRvTGVmdFNsaWRlKCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2KCldLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoU2xpZGVCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0UHJldigpXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICB9LCB0aW1lVG9DaGFuZ2VTbGlkZXMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcblxuICAgICAgICBpZiAodGltZU9mQ2hhbmdpbmdTbGlkZXMgPCA0KSB7XG4gICAgICAgICAgICB0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA9IDQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGltZU9mQ2hhbmdpbmdTbGlkZXMgPCAodGltZVRvQ2hhbmdlU2xpZGVzIC8gMTAwKSAqIDEyMCkge1xuICAgICAgICAgICAgdGltZVRvQ2hhbmdlU2xpZGVzID0gKHRpbWVUb0NoYW5nZVNsaWRlcyAvIDEwMCkgKiA4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFNsaWRlclN0eWxlcyhzbGlkZXJFbGVtZW50LCBzZXREZWZhdWx0TWluaW11bVNpemVzKTtcbiAgICAgICAgc2V0U2xpZGVzU3R5bGVzKHNsaWRlc0VsZW1lbnRzQXJyYXkpO1xuICAgICAgICBwb3NpdGlvbmluZ1NsaWRlcygpO1xuICAgICAgICBzZXRTbGlkZXNEaXNwbGF5KCk7XG5cbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICBzdGFydEF1dG9wbGF5KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt0aW1lVG9DaGFuZ2VTbGlkZXN9bXNgO1xuICAgICAgICAgICAgdmFsdWUuc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRvdWNobW92ZSkge1xuICAgICAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgbW92ZVNsaWRlclRvdWNoKTtcbiAgICAgICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzd2lwZUxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRvdWNoU2Nyb2xsQmxvY2tlcik7XG5cbiAgICAgICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBwc2V1ZG9Ub3VjaE1vdmVTdGFydCk7XG4gICAgICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcHNldWRvVG91Y2hNb3ZlKTtcbiAgICAgICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgcHNldWRvVG91Y2hNb3ZlRW5kKTtcbiAgICAgICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgcHNldWRvVG91Y2hNb3ZlRW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidXR0b25Db250cm9sKSB7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghc3dpdGNoU2xpZGVCbG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRTbGlkZXJTaGlmdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghc3dpdGNoU2xpZGVCbG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwYXVzZVN3aXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYXV0b2xwYXlUaW1lciA9IG51bGw7XG4gICAgbGV0IGhhc1BzZXVkb1RvdWNoTW91c2UgPSBmYWxzZTtcbiAgICBsZXQgc3dpcGVMZW5ndGggPSAwO1xuICAgIGxldCBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblggPSAwO1xuICAgIGxldCBzd2l0Y2hTbGlkZUJsb2NrZWQgPSBmYWxzZTtcbiAgICBjb25zdCB7XG4gICAgICAgIHNsaWRlckVsZW1lbnQsXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkLFxuICAgICAgICBzbGlkZXJXaWR0aCxcbiAgICAgICAgaGFzRXJyb3JcbiAgICB9ID0gZ2V0RE9NRGF0ZShpZEVsZW1lbnQpO1xuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNsaWRlc0VsZW1lbnRzQXJyYXkgPSBhZGRpbmdNaXNzaW5nU2xpZGVzKHNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkKTtcbiAgICBjb25zdCBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzID0gY3JlYXRlT2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyhzbGlkZXNFbGVtZW50c0FycmF5KTtcbiAgICBjb25zdCBidXR0b25Db250cm9sRWxlbWVudHNMaXN0ID0gYWRkQnV0dG9uQ29udHJvbChzbGlkZXJFbGVtZW50LCBidXR0b25Db250cm9sLCBidXR0b25EZWZhdWx0U3R5bGVzKTtcblxuICAgIGluaXQoKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbGlkZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIHNldFNsaWRlclN0eWxlcyhzbGlkZXIsIHNldERlZmF1bHRNaW5pbXVtU2l6ZXMpIHtcclxuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXIpO1xyXG4gICAgaWYgKHNldERlZmF1bHRNaW5pbXVtU2l6ZXMpIHtcclxuICAgICAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZChzdHlsZXMubWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXRTbGlkZXJTdHlsZXMiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gc2V0U2xpZGVzU3R5bGUoc2xpZGVzRWxlbWVudHNBcnJheSkge1xyXG4gICAgZnVuY3Rpb24gYXV0b21hdGljU2V0dGluZ1BpY3R1cmVXaWR0aCgpIHtcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXV0b21hdGljU2V0dGluZ1BpY3R1cmVXaWR0aChzbGlkZXNFbGVtZW50c0FycmF5KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXRTbGlkZXNTdHlsZTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG15U2xpZGVyIH0gZnJvbSBcIi4uL2Rpc3QvZGlzdFwiO1xuXG5teVNsaWRlcihcImZpcnN0U2xpZGVyXCIsIHtcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgdGltZU9mQ2hhbmdpbmdTbGlkZXM6IDIwMDAsXG4gICAgdGltZVRvQ2hhbmdlU2xpZGVzOiA1MDAsXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZTogXCJlYXNlLWluXCIsXG4gICAgYnV0dG9uQ29udHJvbDogZmFsc2UsXG4gICAgdG91Y2htb3ZlOiB0cnVlLFxuICAgIGJ1dHRvbkRlZmF1bHRTdHlsZXM6IHRydWUsXG4gICAgc2V0RGVmYXVsdE1pbmltdW1TaXplczogdHJ1ZVxufSk7XG5teVNsaWRlcihcInNlY29uZFNsaWRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9