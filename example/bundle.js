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

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

undefined["createSlider"] =
/******/function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/__webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/if (mode & 8) return value;
        /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
        /******/var ns = Object.create(null);
        /******/__webpack_require__.r(ns);
        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
            __webpack_require__.d(ns, key, function (key) {
                return value[key];
            }.bind(null, key));
        } /******/return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = "./slider.js");
    /******/
}(
/************************************************************************/
/******/{

    /***/"../node_modules/css-loader/dist/cjs.js?!./style.css":
    /*!********************************************************************!*\
      !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css ***!
      \********************************************************************/
    /*! exports provided: default */
    /***/function node_modulesCssLoaderDistCjsJsStyleCss(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../node_modules/css-loader/dist/runtime/api.js */"../node_modules/css-loader/dist/runtime/api.js");
        /* harmony import */var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
        // Module
        ___CSS_LOADER_EXPORT___.push([module.i, "/*СТИЛИ ДЛЯ СЛАЙДЕРА*/\n\n.slider_1S_n {\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.minWidthAndMinHeightSlider_QXX0 {\n    min-width: 500px;\n    min-height: 250px;\n}\n\n/*_________________________*/\n/*#########################*/\n/*СТИЛИ ДЛЯ КНОПОК СЛАЙДЕРА*/\n\n.button_3w-h {\n    outline: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.buttonShiftSlides_1kon {\n    width: 30px;\n    height: 60px;\n    margin: 10px;\n}\n\n.rightButton_tcEx {\n    transform: rotate(180deg);\n}\n\n.inputPause_pZs3 {\n    height: 40px;\n    transition-duration: 0.2s;\n    background-color: transparent;\n    margin: auto 0 15px 0;\n}\n\n.inputPauseNotActive_tred {\n    width: 10px;\n    border: 0 solid transparent;\n    border-right: 5px Solid #9e9e9e;\n    border-left: 5px Solid #9e9e9e;\n}\n\n.inputPauseActive_2IP3 {\n    width: 0;\n    border: 20px solid transparent;\n    border-right: 0 Solid transparent;\n    border-left: 20px solid #9e9e9e;\n    margin-right: -10px;\n}\n\n/*_________________________*/\n/*#########################*/\n/*СТИЛИ ДЛЯ СЛАЙДОВ*/\n\n.slides_3u3Y {\n    position: absolute;\n    pointer-events: none;\n    width: 100%;\n    overflow: hidden; /*Это для div*/\n}\n\n.hideSlide_uSpb {\n    display: none;\n}\n\n.centerSlide_1UNU {\n    z-index: 1;\n}\n\n.slideShiftRight_pwPl {\n    transform: translateX(100%);\n}\n\n.slideShiftLeft_2CYh {\n    transform: translateX(-100%);\n}\n\n/*_________________________*/", "", { "version": 3, "sources": ["style.css"], "names": [], "mappings": "AAAA,qBAAqB;;AAErB;IACI,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA,4BAA4B;AAC5B,4BAA4B;AAC5B,4BAA4B;;AAE5B;IACI,aAAa;IACb,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,6BAA6B;IAC7B,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,2BAA2B;IAC3B,+BAA+B;IAC/B,8BAA8B;AAClC;;AAEA;IACI,QAAQ;IACR,8BAA8B;IAC9B,iCAAiC;IACjC,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA,4BAA4B;AAC5B,4BAA4B;AAC5B,oBAAoB;;AAEpB;IACI,kBAAkB;IAClB,oBAAoB;IACpB,WAAW;IACX,gBAAgB,EAAE,cAAc;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,4BAA4B;AAChC;;AAEA,4BAA4B", "file": "style.css", "sourcesContent": ["/*СТИЛИ ДЛЯ СЛАЙДЕРА*/\n\n.slider {\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.minWidthAndMinHeightSlider {\n    min-width: 500px;\n    min-height: 250px;\n}\n\n/*_________________________*/\n/*#########################*/\n/*СТИЛИ ДЛЯ КНОПОК СЛАЙДЕРА*/\n\n.button {\n    outline: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.buttonShiftSlides {\n    width: 30px;\n    height: 60px;\n    margin: 10px;\n}\n\n.rightButton {\n    transform: rotate(180deg);\n}\n\n.inputPause {\n    height: 40px;\n    transition-duration: 0.2s;\n    background-color: transparent;\n    margin: auto 0 15px 0;\n}\n\n.inputPauseNotActive {\n    width: 10px;\n    border: 0 solid transparent;\n    border-right: 5px Solid #9e9e9e;\n    border-left: 5px Solid #9e9e9e;\n}\n\n.inputPauseActive {\n    width: 0;\n    border: 20px solid transparent;\n    border-right: 0 Solid transparent;\n    border-left: 20px solid #9e9e9e;\n    margin-right: -10px;\n}\n\n/*_________________________*/\n/*#########################*/\n/*СТИЛИ ДЛЯ СЛАЙДОВ*/\n\n.slides {\n    position: absolute;\n    pointer-events: none;\n    width: 100%;\n    overflow: hidden; /*Это для div*/\n}\n\n.hideSlide {\n    display: none;\n}\n\n.centerSlide {\n    z-index: 1;\n}\n\n.slideShiftRight {\n    transform: translateX(100%);\n}\n\n.slideShiftLeft {\n    transform: translateX(-100%);\n}\n\n/*_________________________*/"] }]);
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
        /* harmony default export */__webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;

        /***/
    },

    /***/"../node_modules/css-loader/dist/runtime/api.js":
    /*!******************************************************!*\
      !*** ../node_modules/css-loader/dist/runtime/api.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {

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

    /***/"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
    /*!*****************************************************************************!*\
      !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \*****************************************************************************/
    /*! no static exports found */
    /***/function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {

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

    /***/"./addButtonControl.js":
    /*!*****************************!*\
      !*** ./addButtonControl.js ***!
      \*****************************/
    /*! no static exports found */
    /***/function addButtonControlJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _style = __webpack_require__( /*! ./style.css */"./style.css");

        var _style2 = _interopRequireDefault(_style);

        var _arrow = __webpack_require__( /*! ./arrow.svg */"./arrow.svg");

        var _arrow2 = _interopRequireDefault(_arrow);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./addingMissingSlides.js":
    /*!********************************!*\
      !*** ./addingMissingSlides.js ***!
      \********************************/
    /*! no static exports found */
    /***/function addingMissingSlidesJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./arrow.svg":
    /*!*******************!*\
      !*** ./arrow.svg ***!
      \*******************/
    /*! no static exports found */
    /***/function arrowSvg(module, exports) {

        module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 26 50\"><defs><clipPath id=\"clip-arrow\"><rect width=\"26\" height=\"50\"></rect></clipPath></defs><g id=\"arrow\" clip-path=\"url(#clip-arrow)\"><rect width=\"26\" height=\"50\" fill=\"rgba(255,255,255,0)\"></rect><path id=\"Контур_1\" data-name=\"Контур 1\" d=\"M10.665,5.026,33.873,28.234,10.665,51.442\" transform=\"translate(-9.502 -4)\" fill=\"none\" stroke=\"#707070\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"></path></g></svg>";

        /***/
    },

    /***/"./getDOMDate.js":
    /*!***********************!*\
      !*** ./getDOMDate.js ***!
      \***********************/
    /*! no static exports found */
    /***/function getDOMDateJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./setSliderStyles.js":
    /*!****************************!*\
      !*** ./setSliderStyles.js ***!
      \****************************/
    /*! no static exports found */
    /***/function setSliderStylesJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _style = __webpack_require__( /*! ./style.css */"./style.css");

        var _style2 = _interopRequireDefault(_style);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function setSliderStyles(slider, setDefaultMinimumSizes) {
            slider.classList.add(_style2.default.slider);
            if (setDefaultMinimumSizes) {
                slider.classList.add(_style2.default.minWidthAndMinHeightSlider);
            }
        }

        exports.default = setSliderStyles;

        /***/
    },

    /***/"./setSlidesStyles.js":
    /*!****************************!*\
      !*** ./setSlidesStyles.js ***!
      \****************************/
    /*! no static exports found */
    /***/function setSlidesStylesJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _style = __webpack_require__( /*! ./style.css */"./style.css");

        var _style2 = _interopRequireDefault(_style);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function setSlidesStyle(slidesElementsArray) {
            function automaticSettingPictureWidth() {
                slidesElementsArray.forEach(function (value) {
                    value.classList.add(_style2.default.slides);
                });
            }
            automaticSettingPictureWidth(slidesElementsArray);
        }

        exports.default = setSlidesStyle;

        /***/
    },

    /***/"./slider.js":
    /*!*******************!*\
      !*** ./slider.js ***!
      \*******************/
    /*! no static exports found */
    /***/function sliderJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _getDOMDate2 = __webpack_require__( /*! ./getDOMDate.js */"./getDOMDate.js");

        var _getDOMDate3 = _interopRequireDefault(_getDOMDate2);

        var _addingMissingSlides = __webpack_require__( /*! ./addingMissingSlides.js */"./addingMissingSlides.js");

        var _addingMissingSlides2 = _interopRequireDefault(_addingMissingSlides);

        var _addButtonControl = __webpack_require__( /*! ./addButtonControl.js */"./addButtonControl.js");

        var _addButtonControl2 = _interopRequireDefault(_addButtonControl);

        var _setSliderStyles = __webpack_require__( /*! ./setSliderStyles.js */"./setSliderStyles.js");

        var _setSliderStyles2 = _interopRequireDefault(_setSliderStyles);

        var _setSlidesStyles = __webpack_require__( /*! ./setSlidesStyles.js */"./setSlidesStyles.js");

        var _setSlidesStyles2 = _interopRequireDefault(_setSlidesStyles);

        var _style = __webpack_require__( /*! ./style.css */"./style.css");

        var _style2 = _interopRequireDefault(_style);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./style.css":
    /*!*******************!*\
      !*** ./style.css ***!
      \*******************/
    /*! no static exports found */
    /***/function styleCss(module, exports, __webpack_require__) {

        var api = __webpack_require__( /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
        var content = __webpack_require__( /*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */"../node_modules/css-loader/dist/cjs.js?!./style.css");

        content = content.__esModule ? content.default : content;

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

    /******/ })["default"];

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dist = __webpack_require__(/*! Dist/dist */ "../dist/dist.js");

var _dist2 = _interopRequireDefault(_dist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dist2.default)("firstSlider", {
    autoplay: false,
    timeOfChangingSlides: 2000,
    timeToChangeSlides: 500,
    transitionTimingFunctionName: "ease-in",
    buttonControl: false,
    touchmove: true,
    buttonDefaultStyles: true,
    setDefaultMinimumSizes: true
});
(0, _dist2.default)("secondSlider");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2NyZWF0ZVNsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vY3JlYXRlU2xpZGVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vY3JlYXRlU2xpZGVyL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vL2NyZWF0ZVNsaWRlci9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vL2NyZWF0ZVNsaWRlci9hZGRCdXR0b25Db250cm9sLmpzIiwid2VicGFjazovLy9jcmVhdGVTbGlkZXIvYWRkaW5nTWlzc2luZ1NsaWRlcy5qcyIsIndlYnBhY2s6Ly8vY3JlYXRlU2xpZGVyL2Fycm93LnN2ZyIsIndlYnBhY2s6Ly8vY3JlYXRlU2xpZGVyL2dldERPTURhdGUuanMiLCJ3ZWJwYWNrOi8vL2NyZWF0ZVNsaWRlci9zZXRTbGlkZXJTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2NyZWF0ZVNsaWRlci9zZXRTbGlkZXNTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2NyZWF0ZVNsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2NyZWF0ZVNsaWRlci9zdHlsZS5jc3M/YWE5MCIsIndlYnBhY2s6Ly8vLi9zY3JpcHQuanMiXSwibmFtZXMiOlsibW9kdWxlIiwibGlzdCIsImNvbnRlbnQiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwiaXRlbSIsIm1vZHVsZXMiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiaSIsImlkIiwiX2kiLCJkZWR1cGUiLCJjc3NNYXBwaW5nIiwidXNlU291cmNlTWFwIiwic291cmNlTWFwcGluZyIsInRvQ29tbWVudCIsInNvdXJjZVVSTHMiLCJiYXNlNjQiLCJidG9hIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwiZGF0YSIsInR5cGUiLCJidXR0b25Jbm5lck5vZGUiLCJuYW1lIiwiYWx0IiwiY2xhc3NMaXN0IiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJhcnJvd09mQnV0dG9uIiwiYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdCIsInN0eWxlcyIsInNsaWRlciIsImxlZnRCdXR0b25Db250cm9sIiwicmlnaHRCdXR0b25Db250cm9sIiwicGF1c2VCdXR0b25Db250cm9sIiwiY3JhdGVCdXR0b25Db250cm9sIiwiYWRkQnV0dG9uQ29udHJvbCIsInNsaWRlc0VsZW1lbnRzQXJyYXkiLCJmaXJzdENsb25lRWxlbWVudCIsInNlY29uZENsb25lRWxlbWVudCIsImNsb25lRWxlbWVudCIsInZhbHVlIiwiYWRkaW5nTWlzc2luZ1NsaWRlcyIsImNvbnNvbGUiLCJoYXNFcnJvciIsInBhcmVudCIsImdldFNsaWRlc0FycmF5Iiwib2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyIsIl9uZXh0U2xpZGUiLCJfY3VycmVudFNsaWRlIiwiX3ByZXZTbGlkZSIsInNsaWRlcldpZHRoIiwic2xpZGVyRWxlbWVudCIsInNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkIiwiZ2V0RE9NRGF0ZSIsInNldFNsaWRlclN0eWxlcyIsImF1dG9tYXRpY1NldHRpbmdQaWN0dXJlV2lkdGgiLCJzZXRTbGlkZXNTdHlsZSIsImF1dG9wbGF5IiwidGltZU9mQ2hhbmdpbmdTbGlkZXMiLCJ0aW1lVG9DaGFuZ2VTbGlkZXMiLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25OYW1lIiwiYnV0dG9uQ29udHJvbCIsInRvdWNobW92ZSIsImJ1dHRvbkRlZmF1bHRTdHlsZXMiLCJzZXREZWZhdWx0TWluaW11bVNpemVzIiwic2V0U2xpZGVzRGlzcGxheSIsInBvc2l0aW9uaW5nU2xpZGVzIiwiY2xpZW50WCIsImV2ZW50Iiwic3dpcGVMZW5ndGgiLCJsZWZ0U2xpZGVyU2hpZnQiLCJyaWdodFNsaWRlclNoaWZ0IiwiYXV0b2xwYXlUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJzdG9wQXV0b3BsYXkiLCJzdGFydEF1dG9wbGF5IiwiYXV0b3BsYXlSZXNldCIsInBzZXVkb0V2ZW50IiwidG91Y2hlcyIsIm1vdmVTbGlkZXJUb3VjaCIsImhhc1BzZXVkb1RvdWNoTW91c2UiLCJnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblgiLCJzd2l0Y2hTbGlkZUJsb2NrZWQiLCJzd2l0Y2hUb1JpZ2h0U2xpZGUiLCJzZXRUaW1lb3V0Iiwic3dpdGNoVG9MZWZ0U2xpZGUiLCJpbml0IiwiY3JlYXRlU2xpZGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxZLENBQUE7QUFDQTs7QUFFQSxZLENBQUE7QUFDQTs7QUFFQSxnQkFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQSxnQkFOQSxDQU1BO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDRCQUZBO0FBR0E7QUFDQSxvQkFKQTs7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SixvQkFBeUI7QUFDckIwQztBQUNIO0FBSEwxQztBQUtBQSxzRkFBc0UsWUFBTTtBQUN4RSx3QkFBSSxDQUFKLG9CQUF5QjtBQUNyQjJDO0FBQ0g7QUFITDNDO0FBS0EsOEJBQWM7QUFDVkE7QUFDSDtBQUNKO0FBQ0o7OzBCQUVjMkQsWTs7Ozs7Ozs7Ozs7O0FDcE9mLGtCQUFVLHFCQUFRLG1KQUFSLENBQVY7QUFDQSxzQkFBMEIscUJBQVEseUhBQVIsQ0FBMUI7O0FBRUE7O0FBRUE7QUFDQSx3QkFBMEIsUUFBMUIsRUFBbUMsT0FBbkMsRUFBbUMsRUFBbkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCYTs7QUFFYjs7Ozs7O0FBRUEsb0JBQVMsYUFBVCxFQUF3QjtBQUNwQjlCLGNBQVUsS0FEVTtBQUVwQkMsMEJBQXNCLElBRkY7QUFHcEJDLHdCQUFvQixHQUhBO0FBSXBCQyxrQ0FBOEIsU0FKVjtBQUtwQkMsbUJBQWUsS0FMSztBQU1wQkMsZUFBVyxJQU5TO0FBT3BCQyx5QkFBcUIsSUFQRDtBQVFwQkMsNEJBQXdCO0FBUkosQ0FBeEI7QUFVQSxvQkFBUyxjQUFULEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zY3JpcHQuanNcIik7XG4iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NsaWRlci5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8q0KHQotCY0JvQmCDQlNCb0K8g0KHQm9CQ0JnQlNCV0KDQkCovXFxuXFxuLnNsaWRlcl8xU19uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5taW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlcl9RWFgwIHtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG4vKtCh0KLQmNCb0Jgg0JTQm9CvINCa0J3QntCf0J7QmiDQodCb0JDQmdCU0JXQoNCQKi9cXG5cXG4uYnV0dG9uXzN3LWgge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmJ1dHRvblNoaWZ0U2xpZGVzXzFrb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5yaWdodEJ1dHRvbl90Y0V4IHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmlucHV0UGF1c2VfcFpzMyB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogYXV0byAwIDE1cHggMDtcXG59XFxuXFxuLmlucHV0UGF1c2VOb3RBY3RpdmVfdHJlZCB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IFNvbGlkICM5ZTllOWU7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggU29saWQgIzllOWU5ZTtcXG59XFxuXFxuLmlucHV0UGF1c2VBY3RpdmVfMklQMyB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogMCBTb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzllOWU5ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcbi8q0KHQotCY0JvQmCDQlNCb0K8g0KHQm9CQ0JnQlNCe0JIqL1xcblxcbi5zbGlkZXNfM3UzWSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKtCt0YLQviDQtNC70Y8gZGl2Ki9cXG59XFxuXFxuLmhpZGVTbGlkZV91U3BiIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNlbnRlclNsaWRlXzFVTlUge1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2xpZGVTaGlmdFJpZ2h0X3B3UGwge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxufVxcblxcbi5zbGlkZVNoaWZ0TGVmdF8yQ1loIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJzdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCOztBQUVyQjtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQSw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDRCQUE0Qjs7QUFFNUI7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksUUFBUTtJQUNSLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2Qjs7QUFFQSw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLG9CQUFvQjs7QUFFcEI7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQkFBZ0IsRUFBRSxjQUFjO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQSw0QkFBNEJcIixcImZpbGVcIjpcInN0eWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKtCh0KLQmNCb0Jgg0JTQm9CvINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyIHtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG4vKtCh0KLQmNCb0Jgg0JTQm9CvINCa0J3QntCf0J7QmiDQodCb0JDQmdCU0JXQoNCQKi9cXG5cXG4uYnV0dG9uIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5idXR0b25TaGlmdFNsaWRlcyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnJpZ2h0QnV0dG9uIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmlucHV0UGF1c2Uge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IGF1dG8gMCAxNXB4IDA7XFxufVxcblxcbi5pbnB1dFBhdXNlTm90QWN0aXZlIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggU29saWQgIzllOWU5ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbn1cXG5cXG4uaW5wdXRQYXVzZUFjdGl2ZSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogMCBTb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzllOWU5ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcbi8q0KHQotCY0JvQmCDQlNCb0K8g0KHQm9CQ0JnQlNCe0JIqL1xcblxcbi5zbGlkZXMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyrQrdGC0L4g0LTQu9GPIGRpdiovXFxufVxcblxcbi5oaWRlU2xpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2VudGVyU2xpZGUge1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2xpZGVTaGlmdFJpZ2h0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbn1cXG5cXG4uc2xpZGVTaGlmdExlZnQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1wiXX1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzbGlkZXJcIjogXCJzbGlkZXJfMVNfblwiLFxuXHRcIm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyXCI6IFwibWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXJfUVhYMFwiLFxuXHRcImJ1dHRvblwiOiBcImJ1dHRvbl8zdy1oXCIsXG5cdFwiYnV0dG9uU2hpZnRTbGlkZXNcIjogXCJidXR0b25TaGlmdFNsaWRlc18xa29uXCIsXG5cdFwicmlnaHRCdXR0b25cIjogXCJyaWdodEJ1dHRvbl90Y0V4XCIsXG5cdFwiaW5wdXRQYXVzZVwiOiBcImlucHV0UGF1c2VfcFpzM1wiLFxuXHRcImlucHV0UGF1c2VOb3RBY3RpdmVcIjogXCJpbnB1dFBhdXNlTm90QWN0aXZlX3RyZWRcIixcblx0XCJpbnB1dFBhdXNlQWN0aXZlXCI6IFwiaW5wdXRQYXVzZUFjdGl2ZV8ySVAzXCIsXG5cdFwic2xpZGVzXCI6IFwic2xpZGVzXzN1M1lcIixcblx0XCJoaWRlU2xpZGVcIjogXCJoaWRlU2xpZGVfdVNwYlwiLFxuXHRcImNlbnRlclNsaWRlXCI6IFwiY2VudGVyU2xpZGVfMVVOVVwiLFxuXHRcInNsaWRlU2hpZnRSaWdodFwiOiBcInNsaWRlU2hpZnRSaWdodF9wd1BsXCIsXG5cdFwic2xpZGVTaGlmdExlZnRcIjogXCJzbGlkZVNoaWZ0TGVmdF8yQ1loXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgYXJyb3dPZkJ1dHRvbiBmcm9tICcuL2Fycm93LnN2ZydcclxuXHJcbmZ1bmN0aW9uIGFkZEJ1dHRvbkNvbnRyb2woc2xpZGVyLCBidXR0b25Db250cm9sLCBidXR0b25EZWZhdWx0U3R5bGVzKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHt0eXBlLCBidXR0b25Jbm5lck5vZGUgPSBudWxsLCBuYW1lLCBhbHQsIGNsYXNzTGlzdCA9IFtdfSA9IHt9KSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgaWYgKGJ1dHRvbklubmVyTm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgUFNFVURPX0JVVFRPTiAke25hbWV9YCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBhcnJvd09mQnV0dG9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzc0xpc3QuZm9yRWFjaCh2YWx1ZSA9PiBidXR0b24uY2xhc3NMaXN0LmFkZCh2YWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JhdGVCdXR0b25Db250cm9sKGJ1dHRvbkRlZmF1bHRTdHlsZXMpIHtcclxuICAgICAgICBpZiAoYnV0dG9uRGVmYXVsdFN0eWxlcykge1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25Jbm5lck5vZGU6IGFycm93T2ZCdXR0b24sXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd1JpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbc3R5bGVzLnJpZ2h0QnV0dG9uLCBzdHlsZXMuYnV0dG9uLCBzdHlsZXMuYnV0dG9uU2hpZnRTbGlkZXNdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiaW5wdXQgcGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtzdHlsZXMuaW5wdXRQYXVzZU5vdEFjdGl2ZSwgc3R5bGVzLmlucHV0UGF1c2UsIHN0eWxlcy5idXR0b25dXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uSW5uZXJOb2RlOiBhcnJvd09mQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IGxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtzdHlsZXMuYnV0dG9uLCBzdHlsZXMuYnV0dG9uU2hpZnRTbGlkZXNdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93UmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJpbnB1dCBwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IGxlZnRcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXR0b25Db250cm9sRWxlbWVudHNMaXN0ID0ge1xyXG4gICAgICAgIGxlZnRCdXR0b25Db250cm9sOiBudWxsLFxyXG4gICAgICAgIHJpZ2h0QnV0dG9uQ29udHJvbDogbnVsbCxcclxuICAgICAgICBwYXVzZUJ1dHRvbkNvbnRyb2w6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGJ1dHRvbkNvbnRyb2wpIHtcclxuICAgICAgICBjcmF0ZUJ1dHRvbkNvbnRyb2woYnV0dG9uRGVmYXVsdFN0eWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEJ1dHRvbkNvbnRyb2w7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBhZGRpbmdNaXNzaW5nU2xpZGVzKHNsaWRlc0VsZW1lbnRzQXJyYXkpIHtcclxuICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0Q2xvbmVFbGVtZW50ID0gc2xpZGVzRWxlbWVudHNBcnJheVswXS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHNlY29uZENsb25lRWxlbWVudCA9IGZpcnN0Q2xvbmVFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LnB1c2goZmlyc3RDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgIHNsaWRlci5hcHBlbmQoZmlyc3RDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkucHVzaChzZWNvbmRDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgIHNsaWRlci5hcHBlbmQoc2Vjb25kQ2xvbmVFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZUVsZW1lbnQgPSB2YWx1ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkucHVzaChjbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGNsb25lRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2xpZGVzRWxlbWVudHNBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkaW5nTWlzc2luZ1NsaWRlczsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjYgNTBcXFwiPjxkZWZzPjxjbGlwUGF0aCBpZD1cXFwiY2xpcC1hcnJvd1xcXCI+PHJlY3Qgd2lkdGg9XFxcIjI2XFxcIiBoZWlnaHQ9XFxcIjUwXFxcIj48L3JlY3Q+PC9jbGlwUGF0aD48L2RlZnM+PGcgaWQ9XFxcImFycm93XFxcIiBjbGlwLXBhdGg9XFxcInVybCgjY2xpcC1hcnJvdylcXFwiPjxyZWN0IHdpZHRoPVxcXCIyNlxcXCIgaGVpZ2h0PVxcXCI1MFxcXCIgZmlsbD1cXFwicmdiYSgyNTUsMjU1LDI1NSwwKVxcXCI+PC9yZWN0PjxwYXRoIGlkPVxcXCLQmtC+0L3RgtGD0YBfMVxcXCIgZGF0YS1uYW1lPVxcXCLQmtC+0L3RgtGD0YAgMVxcXCIgZD1cXFwiTTEwLjY2NSw1LjAyNiwzMy44NzMsMjguMjM0LDEwLjY2NSw1MS40NDJcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05LjUwMiAtNClcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzcwNzA3MFxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2Utd2lkdGg9XFxcIjFcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGdldERPTURhdGUoaWRFbGVtZW50KSB7XHJcblxyXG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRFbGVtZW50KTtcclxuICAgIGlmIChzbGlkZXIgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnJWMlcycsXHJcbiAgICAgICAgICAgICdmb250LXNpemU6IDE2cHg7IGNvbG9yOiByZWQ7IGJhY2tncm91bmQtY29sb3I6ICNmZmE3YTA7IHBhZGRpbmc6IDJweCA1cHg7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IG1hcmdpbjogMjBweCBhdXRvOycsXHJcbiAgICAgICAgICAgIGBzbGlkZXIgfCBpZCAke2lkRWxlbWVudH0gZG9lcyBub3QgZXhpc3RgKTtcclxuICAgICAgICByZXR1cm4ge2hhc0Vycm9yOiB0cnVlfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTbGlkZXNBcnJheShwYXJlbnQpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLm1hcCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS50YWdOYW1lICE9PSBcIklOUFVUXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNsaWRlc0VsZW1lbnRzQXJyYXkgPSBnZXRTbGlkZXNBcnJheShzbGlkZXIpO1xyXG4gICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyAoICclYyVzJyxcclxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHJlZDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTdhMDsgcGFkZGluZzogMnB4IDVweDsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgbWFyZ2luOiAyMHB4IGF1dG87JyxcclxuICAgICAgICAgICAgYHNsaWRlciB8IGNvbnRhaW5lciAnIyR7aWRFbGVtZW50fScgaXMgZW1wdHlgKTtcclxuICAgICAgICByZXR1cm4ge2hhc0Vycm9yOiB0cnVlfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzICA9IHtcclxuICAgICAgICBfbmV4dFNsaWRlOiBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCAtIDEsXHJcbiAgICAgICAgX2N1cnJlbnRTbGlkZTogMCxcclxuICAgICAgICBfcHJldlNsaWRlOiAxLFxyXG5cclxuICAgICAgICBnZXQgZ2V0Q3VycmVudCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRTbGlkZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXQgZ2V0TmV4dCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25leHRTbGlkZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXQgZ2V0UHJldigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXZTbGlkZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnb05leHQoKSB7XHJcbiAgICAgICAgICAgICsrdGhpcy5fbmV4dFNsaWRlO1xyXG4gICAgICAgICAgICArK3RoaXMuX2N1cnJlbnRTbGlkZTtcclxuICAgICAgICAgICAgKyt0aGlzLl9wcmV2U2xpZGU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fbmV4dFNsaWRlIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZXh0U2xpZGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9jdXJyZW50U2xpZGUgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX3ByZXZTbGlkZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJldlNsaWRlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdvUHJldigpIHtcclxuICAgICAgICAgICAgLS10aGlzLl9uZXh0U2xpZGU7XHJcbiAgICAgICAgICAgIC0tdGhpcy5fY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICAtLXRoaXMuX3ByZXZTbGlkZTtcclxuICAgICAgICAgICAgc3dpdGNoICgtMSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9uZXh0U2xpZGUgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25leHRTbGlkZSA9IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fY3VycmVudFNsaWRlIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50U2xpZGUgPSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX3ByZXZTbGlkZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJldlNsaWRlID0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNsaWRlcldpZHRoID0gc2xpZGVyLmNsaWVudFdpZHRoO1xyXG5cclxuICAgIGNvbnN0IGhhc0Vycm9yID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzbGlkZXJFbGVtZW50OiBzbGlkZXIsXHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheV9ub3RQcm9jZXNzZWQ6IHNsaWRlc0VsZW1lbnRzQXJyYXksXHJcbiAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlczogb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyxcclxuICAgICAgICBzbGlkZXJXaWR0aDogc2xpZGVyV2lkdGgsXHJcbiAgICAgICAgaGFzRXJyb3I6IGhhc0Vycm9yXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldERPTURhdGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIHNldFNsaWRlclN0eWxlcyhzbGlkZXIsIHNldERlZmF1bHRNaW5pbXVtU2l6ZXMpIHtcclxuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXIpO1xyXG4gICAgaWYgKHNldERlZmF1bHRNaW5pbXVtU2l6ZXMpIHtcclxuICAgICAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZChzdHlsZXMubWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXRTbGlkZXJTdHlsZXMiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gc2V0U2xpZGVzU3R5bGUoc2xpZGVzRWxlbWVudHNBcnJheSkge1xyXG4gICAgZnVuY3Rpb24gYXV0b21hdGljU2V0dGluZ1BpY3R1cmVXaWR0aCgpIHtcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXV0b21hdGljU2V0dGluZ1BpY3R1cmVXaWR0aChzbGlkZXNFbGVtZW50c0FycmF5KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXRTbGlkZXNTdHlsZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGdldERPTURhdGUgZnJvbSAnLi9nZXRET01EYXRlLmpzJztcbmltcG9ydCBhZGRpbmdNaXNzaW5nU2xpZGVzIGZyb20gJy4vYWRkaW5nTWlzc2luZ1NsaWRlcy5qcyc7XG5pbXBvcnQgYWRkQnV0dG9uQ29udHJvbCBmcm9tICcuL2FkZEJ1dHRvbkNvbnRyb2wuanMnO1xuaW1wb3J0IHNldFNsaWRlclN0eWxlcyBmcm9tICcuL3NldFNsaWRlclN0eWxlcy5qcyc7XG5pbXBvcnQgc2V0U2xpZGVzU3R5bGVzIGZyb20gJy4vc2V0U2xpZGVzU3R5bGVzLmpzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlcihpZEVsZW1lbnQsIHtcbiAgICBhdXRvcGxheSA9IHRydWUsXG4gICAgdGltZU9mQ2hhbmdpbmdTbGlkZXMgPSA1MDAwLFxuICAgIHRpbWVUb0NoYW5nZVNsaWRlcyA9IDEwMDAsXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZSA9IFwibGluZWFyXCIsXG4gICAgYnV0dG9uQ29udHJvbCA9IHRydWUsXG4gICAgdG91Y2htb3ZlID0gdHJ1ZSxcbiAgICBidXR0b25EZWZhdWx0U3R5bGVzID0gdHJ1ZSxcbiAgICBzZXREZWZhdWx0TWluaW11bVNpemVzID0gdHJ1ZSxcbn0gPSB7fSkge1xuXG4gICAgZnVuY3Rpb24gc2V0U2xpZGVzRGlzcGxheSgpIHtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIC8vIHZhbHVlLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhzbGlkZXNFbGVtZW50c0FycmF5KVxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0TmV4dF0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldEN1cnJlbnRdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvc2l0aW9uaW5nU2xpZGVzKCkge1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0TmV4dF0uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVTaGlmdFJpZ2h0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldE5leHRdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnNsaWRlU2hpZnRMZWZ0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldEN1cnJlbnRdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmNlbnRlclNsaWRlKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldEN1cnJlbnRdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnNsaWRlU2hpZnRSaWdodCwgc3R5bGVzLnNsaWRlU2hpZnRMZWZ0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldFByZXZdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlU2hpZnRMZWZ0KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldFByZXZdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlU2hpZnRSaWdodCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoVG9MZWZ0U2xpZGUoKSB7XG4gICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ29OZXh0KCk7XG4gICAgICAgIHNldFNsaWRlc0Rpc3BsYXkoKTtcbiAgICAgICAgcG9zaXRpb25pbmdTbGlkZXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hUb1JpZ2h0U2xpZGUoKSB7XG4gICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ29QcmV2KCk7XG4gICAgICAgIHNldFNsaWRlc0Rpc3BsYXkoKTtcbiAgICAgICAgcG9zaXRpb25pbmdTbGlkZXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVyVG91Y2goZXZlbnQpIHtcbiAgICAgICAgaWYgKHN3aXRjaFNsaWRlQmxvY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHN3aXBlTGVuZ3RoID0gMDtcblxuICAgICAgICBzd2lwZUxlbmd0aCArPSBjbGllbnRYIC0gZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YO1xuICAgICAgICBpZiAoc3dpcGVMZW5ndGggPiBzbGlkZXJXaWR0aCAvIDMpIHtcbiAgICAgICAgICAgIGxlZnRTbGlkZXJTaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2lwZUxlbmd0aCA8IC1zbGlkZXJXaWR0aCAvIDMpIHtcbiAgICAgICAgICAgIHJpZ2h0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdWNoU2Nyb2xsQmxvY2tlcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEF1dG9wbGF5KHRpbWVPZkNoYW5naW5nU2xpZGVzKSB7XG4gICAgICAgIGF1dG9scGF5VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiByaWdodFNsaWRlclNoaWZ0KCksIHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wQXV0b3BsYXkoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b2xwYXlUaW1lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcykge1xuICAgICAgICBzdG9wQXV0b3BsYXkoYXV0b2xwYXlUaW1lcik7XG4gICAgICAgIHN0YXJ0QXV0b3BsYXkodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhdXNlU3dpdGNoKCkge1xuICAgICAgICBpZiAoIWF1dG9wbGF5KSB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmlucHV0UGF1c2VOb3RBY3RpdmUpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaW5wdXRQYXVzZUFjdGl2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmlucHV0UGF1c2VBY3RpdmUpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaW5wdXRQYXVzZU5vdEFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYXV0b3BsYXkgPSAhYXV0b3BsYXlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGhhc1BzZXVkb1RvdWNoTW91c2UpIHtcbiAgICAgICAgICAgIGxldCBwc2V1ZG9FdmVudCA9IHt0b3VjaGVzOiBbe2NsaWVudFg6IDB9LF19O1xuICAgICAgICAgICAgcHNldWRvRXZlbnQudG91Y2hlc1swXS5jbGllbnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgICAgIG1vdmVTbGlkZXJUb3VjaChwc2V1ZG9FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmVTdGFydChldmVudCkge1xuICAgICAgICBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gdHJ1ZTtcbiAgICAgICAgZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgc3RvcEF1dG9wbGF5KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmVFbmQoKSB7XG4gICAgICAgIGhhc1BzZXVkb1RvdWNoTW91c2UgPSBmYWxzZTtcbiAgICAgICAgc3dpcGVMZW5ndGggPSAwO1xuICAgICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmlnaHRTbGlkZXJTaGlmdCgpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IHRydWU7XG4gICAgICAgIHN3aXRjaFRvUmlnaHRTbGlkZSgpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0TmV4dF0uY2xhc3NMaXN0LmFkZChzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXROZXh0XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2hhbmdlU2xpZGVzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxlZnRTbGlkZXJTaGlmdCgpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IHRydWU7XG4gICAgICAgIHN3aXRjaFRvTGVmdFNsaWRlKCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXRQcmV2XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldFByZXZdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIH0sIHRpbWVUb0NoYW5nZVNsaWRlcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBpZiAodGltZU9mQ2hhbmdpbmdTbGlkZXMgPCA0KSB7XG4gICAgICAgICAgICB0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA9IDQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGltZU9mQ2hhbmdpbmdTbGlkZXMgPCAodGltZVRvQ2hhbmdlU2xpZGVzIC8gMTAwKSAqIDEyMCkge1xuICAgICAgICAgICAgdGltZVRvQ2hhbmdlU2xpZGVzID0gKHRpbWVUb0NoYW5nZVNsaWRlcyAvIDEwMCkgKiA4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFNsaWRlc0Rpc3BsYXkoKTtcblxuICAgICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIHN0YXJ0QXV0b3BsYXkodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHZhbHVlLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke3RpbWVUb0NoYW5nZVNsaWRlc31tc2A7XG4gICAgICAgICAgICB2YWx1ZS5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25OYW1lO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGxldCBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblggPSAwO1xuICAgIGxldCBzd2lwZUxlbmd0aCA9IDA7XG4gICAgbGV0IHN3aXRjaFNsaWRlQmxvY2tlZCA9IGZhbHNlO1xuICAgIGxldCBhdXRvbHBheVRpbWVyID0gbnVsbDtcbiAgICBsZXQgaGFzUHNldWRvVG91Y2hNb3VzZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBzbGlkZXJFbGVtZW50LFxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5X25vdFByb2Nlc3NlZCxcbiAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyxcbiAgICAgICAgc2xpZGVyV2lkdGgsXG4gICAgICAgIGhhc0Vycm9yXG4gICAgfSA9IGdldERPTURhdGUoaWRFbGVtZW50KTtcbiAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzbGlkZXNFbGVtZW50c0FycmF5ID0gYWRkaW5nTWlzc2luZ1NsaWRlcyhzbGlkZXNFbGVtZW50c0FycmF5X25vdFByb2Nlc3NlZCk7XG4gICAgcG9zaXRpb25pbmdTbGlkZXMoKTtcbiAgICBjb25zdCBidXR0b25Db250cm9sRWxlbWVudHNMaXN0ID0gYWRkQnV0dG9uQ29udHJvbChzbGlkZXJFbGVtZW50LCBidXR0b25Db250cm9sLCBidXR0b25EZWZhdWx0U3R5bGVzKTtcbiAgICBzZXRTbGlkZXJTdHlsZXMoc2xpZGVyRWxlbWVudCwgc2V0RGVmYXVsdE1pbmltdW1TaXplcyk7XG4gICAgc2V0U2xpZGVzU3R5bGVzKHNsaWRlc0VsZW1lbnRzQXJyYXkpO1xuXG5cbiAgICBpbml0KCk7XG5cbiAgICBpZiAodG91Y2htb3ZlKSB7XG4gICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgbW92ZVNsaWRlclRvdWNoKTtcbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc3dpcGVMZW5ndGggPSAwO1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0b3VjaFNjcm9sbEJsb2NrZXIpO1xuXG4gICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBwc2V1ZG9Ub3VjaE1vdmVTdGFydCk7XG4gICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBwc2V1ZG9Ub3VjaE1vdmUpO1xuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHBzZXVkb1RvdWNoTW92ZUVuZCk7XG4gICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgcHNldWRvVG91Y2hNb3ZlRW5kKTtcbiAgICB9XG5cbiAgICBpZiAoYnV0dG9uQ29udHJvbCkge1xuICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzd2l0Y2hTbGlkZUJsb2NrZWQpIHtcbiAgICAgICAgICAgICAgICBsZWZ0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghc3dpdGNoU2xpZGVCbG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgcmlnaHRTbGlkZXJTaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGF1c2VTd2l0Y2gpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbGlkZXI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbXlTbGlkZXIgZnJvbSBcIkRpc3QvZGlzdFwiO1xuXG5teVNsaWRlcihcImZpcnN0U2xpZGVyXCIsIHtcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgdGltZU9mQ2hhbmdpbmdTbGlkZXM6IDIwMDAsXG4gICAgdGltZVRvQ2hhbmdlU2xpZGVzOiA1MDAsXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZTogXCJlYXNlLWluXCIsXG4gICAgYnV0dG9uQ29udHJvbDogZmFsc2UsXG4gICAgdG91Y2htb3ZlOiB0cnVlLFxuICAgIGJ1dHRvbkRlZmF1bHRTdHlsZXM6IHRydWUsXG4gICAgc2V0RGVmYXVsdE1pbmltdW1TaXplczogdHJ1ZVxufSk7XG5teVNsaWRlcihcInNlY29uZFNsaWRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9