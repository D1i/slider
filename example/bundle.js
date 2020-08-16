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

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teVNsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teVNsaWRlci9jcmVhdGVTbGlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvY3JlYXRlU2xpZGVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teVNsaWRlci9jcmVhdGVTbGlkZXIvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci9jcmVhdGVTbGlkZXIvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215U2xpZGVyL2NyZWF0ZVNsaWRlci9hZGRCdXR0b25Db250cm9sLmpzIiwid2VicGFjazovL215U2xpZGVyL2NyZWF0ZVNsaWRlci9hZGRpbmdNaXNzaW5nU2xpZGVzLmpzIiwid2VicGFjazovL215U2xpZGVyL2NyZWF0ZVNsaWRlci9hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvY3JlYXRlU2xpZGVyL2dldERPTURhdGUuanMiLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvY3JlYXRlU2xpZGVyL3NldFNsaWRlclN0eWxlcy5qcyIsIndlYnBhY2s6Ly9teVNsaWRlci9jcmVhdGVTbGlkZXIvc2V0U2xpZGVzU3R5bGVzLmpzIiwid2VicGFjazovL215U2xpZGVyL2NyZWF0ZVNsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vbXlTbGlkZXIvY3JlYXRlU2xpZGVyL3N0eWxlLmNzcz9hYTkwIiwid2VicGFjazovL215U2xpZGVyLy4vc2NyaXB0LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImxpc3QiLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsIml0ZW0iLCJtb2R1bGVzIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImkiLCJpZCIsIl9pIiwiZGVkdXBlIiwiY3NzTWFwcGluZyIsInVzZVNvdXJjZU1hcCIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwiYmFzZTY0IiwiYnRvYSIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsImRhdGEiLCJ0eXBlIiwiYnV0dG9uSW5uZXJOb2RlIiwibmFtZSIsImFsdCIsImNsYXNzTGlzdCIsImJ1dHRvbiIsImRvY3VtZW50IiwiYXJyb3dPZkJ1dHRvbiIsImJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QiLCJzdHlsZXMiLCJzbGlkZXIiLCJsZWZ0QnV0dG9uQ29udHJvbCIsInJpZ2h0QnV0dG9uQ29udHJvbCIsInBhdXNlQnV0dG9uQ29udHJvbCIsImNyYXRlQnV0dG9uQ29udHJvbCIsImFkZEJ1dHRvbkNvbnRyb2wiLCJzbGlkZXNFbGVtZW50c0FycmF5IiwiZmlyc3RDbG9uZUVsZW1lbnQiLCJzZWNvbmRDbG9uZUVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJ2YWx1ZSIsImFkZGluZ01pc3NpbmdTbGlkZXMiLCJjb25zb2xlIiwiaGFzRXJyb3IiLCJwYXJlbnQiLCJnZXRTbGlkZXNBcnJheSIsIm9iamVjdFNsaWRlclZpc2libGVTbGlkZXMiLCJfbmV4dFNsaWRlIiwiX2N1cnJlbnRTbGlkZSIsIl9wcmV2U2xpZGUiLCJzbGlkZXJXaWR0aCIsInNsaWRlckVsZW1lbnQiLCJzbGlkZXNFbGVtZW50c0FycmF5X25vdFByb2Nlc3NlZCIsImdldERPTURhdGUiLCJzZXRTbGlkZXJTdHlsZXMiLCJhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoIiwic2V0U2xpZGVzU3R5bGUiLCJhdXRvcGxheSIsInRpbWVPZkNoYW5naW5nU2xpZGVzIiwidGltZVRvQ2hhbmdlU2xpZGVzIiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZSIsImJ1dHRvbkNvbnRyb2wiLCJ0b3VjaG1vdmUiLCJidXR0b25EZWZhdWx0U3R5bGVzIiwic2V0RGVmYXVsdE1pbmltdW1TaXplcyIsInNldFNsaWRlc0Rpc3BsYXkiLCJwb3NpdGlvbmluZ1NsaWRlcyIsImNsaWVudFgiLCJldmVudCIsInN3aXBlTGVuZ3RoIiwibGVmdFNsaWRlclNoaWZ0IiwicmlnaHRTbGlkZXJTaGlmdCIsImF1dG9scGF5VGltZXIiLCJjbGVhckludGVydmFsIiwic3RvcEF1dG9wbGF5Iiwic3RhcnRBdXRvcGxheSIsImF1dG9wbGF5UmVzZXQiLCJwc2V1ZG9FdmVudCIsInRvdWNoZXMiLCJtb3ZlU2xpZGVyVG91Y2giLCJoYXNQc2V1ZG9Ub3VjaE1vdXNlIiwiZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YIiwic3dpdGNoU2xpZGVCbG9ja2VkIiwic3dpdGNoVG9SaWdodFNsaWRlIiwic2V0VGltZW91dCIsInN3aXRjaFRvTGVmdFNsaWRlIiwiaW5pdCIsImNyZWF0ZVNsaWRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFksQ0FBQTtBQUNBOztB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MkMsWUFBTTtBQUM3Q2tCO0FBQ0FPO0FBRkp6Qjs7QUFLQUE7O0FBRUFBO0FBQ0FBO0FBQ0FBO0FBQ0FBO0FBQ0g7O0FBRUQsK0JBQW1CO0FBQ2Z2Qix1RkFBdUUsWUFBTTtBQUN6RSx3QkFBSSxDQUFKLG9CQUF5QjtBQUNyQjBDO0FBQ0g7QUFITDFDO0FBS0FBLHNGQUFzRSxZQUFNO0FBQ3hFLHdCQUFJLENBQUosb0JBQXlCO0FBQ3JCMkM7QUFDSDtBQUhMM0M7QUFLQSw4QkFBYztBQUNWQTtBQUNIO0FBQ0o7QUFDSjs7MEJBRWMyRCxZOzs7Ozs7Ozs7Ozs7QUNwT2Ysa0JBQVUscUJBQVEsbUpBQVIsQ0FBVjtBQUNBLHNCQUEwQixxQkFBUSx5SEFBUixDQUExQjs7QUFFQTs7QUFFQTtBQUNBLHdCQUEwQixRQUExQixFQUFtQyxPQUFuQyxFQUFtQyxFQUFuQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJhOztBQUViOzs7Ozs7QUFFQSxvQkFBUyxhQUFULEVBQXdCO0FBQ3BCOUIsY0FBVSxLQURVO0FBRXBCQywwQkFBc0IsSUFGRjtBQUdwQkMsd0JBQW9CLEdBSEE7QUFJcEJDLGtDQUE4QixTQUpWO0FBS3BCQyxtQkFBZSxLQUxLO0FBTXBCQyxlQUFXLElBTlM7QUFPcEJDLHlCQUFxQixJQVBEO0FBUXBCQyw0QkFBd0I7QUFSSixDQUF4QjtBQVVBLG9CQUFTLGNBQVQsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NjcmlwdC5qc1wiKTtcbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2xpZGVyLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0JXQoNCQKi9cXG5cXG4uc2xpZGVyXzFTX24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1pbldpZHRoQW5kTWluSGVpZ2h0U2xpZGVyX1FYWDAge1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcbi8q0KHQotCY0JvQmCDQlNCb0K8g0JrQndCe0J/QntCaINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5idXR0b25fM3ctaCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uYnV0dG9uU2hpZnRTbGlkZXNfMWtvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnJpZ2h0QnV0dG9uX3RjRXgge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uaW5wdXRQYXVzZV9wWnMzIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiBhdXRvIDAgMTVweCAwO1xcbn1cXG5cXG4uaW5wdXRQYXVzZU5vdEFjdGl2ZV90cmVkIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggU29saWQgIzllOWU5ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbn1cXG5cXG4uaW5wdXRQYXVzZUFjdGl2ZV8ySVAzIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwIFNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjOWU5ZTllO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0J7QkiovXFxuXFxuLnNsaWRlc18zdTNZIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8q0K3RgtC+INC00LvRjyBkaXYqL1xcbn1cXG5cXG4uaGlkZVNsaWRlX3VTcGIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2VudGVyU2xpZGVfMVVOVSB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zbGlkZVNoaWZ0UmlnaHRfcHdQbCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG59XFxuXFxuLnNsaWRlU2hpZnRMZWZ0XzJDWWgge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7O0FBRXJCO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNEJBQTRCOztBQUU1QjtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsb0JBQW9COztBQUVwQjtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGdCQUFnQixFQUFFLGNBQWM7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBLDRCQUE0QlwiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8q0KHQotCY0JvQmCDQlNCb0K8g0KHQm9CQ0JnQlNCV0KDQkCovXFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXIge1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLypfX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcbi8q0KHQotCY0JvQmCDQlNCb0K8g0JrQndCe0J/QntCaINCh0JvQkNCZ0JTQldCg0JAqL1xcblxcbi5idXR0b24ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmJ1dHRvblNoaWZ0U2xpZGVzIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHRCdXR0b24ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uaW5wdXRQYXVzZSB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogYXV0byAwIDE1cHggMDtcXG59XFxuXFxuLmlucHV0UGF1c2VOb3RBY3RpdmUge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBTb2xpZCAjOWU5ZTllO1xcbiAgICBib3JkZXItbGVmdDogNXB4IFNvbGlkICM5ZTllOWU7XFxufVxcblxcbi5pbnB1dFBhdXNlQWN0aXZlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwIFNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjOWU5ZTllO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuLyrQodCi0JjQm9CYINCU0JvQryDQodCb0JDQmdCU0J7QkiovXFxuXFxuLnNsaWRlcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKtCt0YLQviDQtNC70Y8gZGl2Ki9cXG59XFxuXFxuLmhpZGVTbGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jZW50ZXJTbGlkZSB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zbGlkZVNoaWZ0UmlnaHQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxufVxcblxcbi5zbGlkZVNoaWZ0TGVmdCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbi8qX19fX19fX19fX19fX19fX19fX19fX19fXyovXCJdfV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNsaWRlclwiOiBcInNsaWRlcl8xU19uXCIsXG5cdFwibWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXJcIjogXCJtaW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlcl9RWFgwXCIsXG5cdFwiYnV0dG9uXCI6IFwiYnV0dG9uXzN3LWhcIixcblx0XCJidXR0b25TaGlmdFNsaWRlc1wiOiBcImJ1dHRvblNoaWZ0U2xpZGVzXzFrb25cIixcblx0XCJyaWdodEJ1dHRvblwiOiBcInJpZ2h0QnV0dG9uX3RjRXhcIixcblx0XCJpbnB1dFBhdXNlXCI6IFwiaW5wdXRQYXVzZV9wWnMzXCIsXG5cdFwiaW5wdXRQYXVzZU5vdEFjdGl2ZVwiOiBcImlucHV0UGF1c2VOb3RBY3RpdmVfdHJlZFwiLFxuXHRcImlucHV0UGF1c2VBY3RpdmVcIjogXCJpbnB1dFBhdXNlQWN0aXZlXzJJUDNcIixcblx0XCJzbGlkZXNcIjogXCJzbGlkZXNfM3UzWVwiLFxuXHRcImhpZGVTbGlkZVwiOiBcImhpZGVTbGlkZV91U3BiXCIsXG5cdFwiY2VudGVyU2xpZGVcIjogXCJjZW50ZXJTbGlkZV8xVU5VXCIsXG5cdFwic2xpZGVTaGlmdFJpZ2h0XCI6IFwic2xpZGVTaGlmdFJpZ2h0X3B3UGxcIixcblx0XCJzbGlkZVNoaWZ0TGVmdFwiOiBcInNsaWRlU2hpZnRMZWZ0XzJDWWhcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcclxuXHJcbmltcG9ydCBhcnJvd09mQnV0dG9uIGZyb20gJy4vYXJyb3cuc3ZnJ1xyXG5cclxuZnVuY3Rpb24gYWRkQnV0dG9uQ29udHJvbChzbGlkZXIsIGJ1dHRvbkNvbnRyb2wsIGJ1dHRvbkRlZmF1bHRTdHlsZXMpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b24oe3R5cGUsIGJ1dHRvbklubmVyTm9kZSA9IG51bGwsIG5hbWUsIGFsdCwgY2xhc3NMaXN0ID0gW119ID0ge30pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gbnVsbDtcclxuICAgICAgICBpZiAoYnV0dG9uSW5uZXJOb2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGBQU0VVRE9fQlVUVE9OICR7bmFtZX1gKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGFycm93T2ZCdXR0b247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzTGlzdC5mb3JFYWNoKHZhbHVlID0+IGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHZhbHVlKSk7XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmF0ZUJ1dHRvbkNvbnRyb2woYnV0dG9uRGVmYXVsdFN0eWxlcykge1xyXG4gICAgICAgIGlmIChidXR0b25EZWZhdWx0U3R5bGVzKSB7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbklubmVyTm9kZTogYXJyb3dPZkJ1dHRvbixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93UmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtzdHlsZXMucmlnaHRCdXR0b24sIHN0eWxlcy5idXR0b24sIHN0eWxlcy5idXR0b25TaGlmdFNsaWRlc11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJpbnB1dCBwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogW3N0eWxlcy5pbnB1dFBhdXNlTm90QWN0aXZlLCBzdHlsZXMuaW5wdXRQYXVzZSwgc3R5bGVzLmJ1dHRvbl1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25Jbm5lck5vZGU6IGFycm93T2ZCdXR0b24sXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd0xlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogW3N0eWxlcy5idXR0b24sIHN0eWxlcy5idXR0b25TaGlmdFNsaWRlc11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImlucHV0IHBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd0xlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QgPSB7XHJcbiAgICAgICAgbGVmdEJ1dHRvbkNvbnRyb2w6IG51bGwsXHJcbiAgICAgICAgcmlnaHRCdXR0b25Db250cm9sOiBudWxsLFxyXG4gICAgICAgIHBhdXNlQnV0dG9uQ29udHJvbDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoYnV0dG9uQ29udHJvbCkge1xyXG4gICAgICAgIGNyYXRlQnV0dG9uQ29udHJvbChidXR0b25EZWZhdWx0U3R5bGVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQnV0dG9uQ29udHJvbDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZGluZ01pc3NpbmdTbGlkZXMoc2xpZGVzRWxlbWVudHNBcnJheSkge1xyXG4gICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBsZXQgZmlyc3RDbG9uZUVsZW1lbnQgPSBzbGlkZXNFbGVtZW50c0FycmF5WzBdLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBsZXQgc2Vjb25kQ2xvbmVFbGVtZW50ID0gZmlyc3RDbG9uZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkucHVzaChmaXJzdENsb25lRWxlbWVudCk7XHJcbiAgICAgICAgc2xpZGVyLmFwcGVuZChmaXJzdENsb25lRWxlbWVudCk7XHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5wdXNoKHNlY29uZENsb25lRWxlbWVudCk7XHJcbiAgICAgICAgc2xpZGVyLmFwcGVuZChzZWNvbmRDbG9uZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgbGV0IGNsb25lRWxlbWVudCA9IHZhbHVlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5wdXNoKGNsb25lRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoY2xvbmVFbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzbGlkZXNFbGVtZW50c0FycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRpbmdNaXNzaW5nU2xpZGVzOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNiA1MFxcXCI+PGRlZnM+PGNsaXBQYXRoIGlkPVxcXCJjbGlwLWFycm93XFxcIj48cmVjdCB3aWR0aD1cXFwiMjZcXFwiIGhlaWdodD1cXFwiNTBcXFwiPjwvcmVjdD48L2NsaXBQYXRoPjwvZGVmcz48ZyBpZD1cXFwiYXJyb3dcXFwiIGNsaXAtcGF0aD1cXFwidXJsKCNjbGlwLWFycm93KVxcXCI+PHJlY3Qgd2lkdGg9XFxcIjI2XFxcIiBoZWlnaHQ9XFxcIjUwXFxcIiBmaWxsPVxcXCJyZ2JhKDI1NSwyNTUsMjU1LDApXFxcIj48L3JlY3Q+PHBhdGggaWQ9XFxcItCa0L7QvdGC0YPRgF8xXFxcIiBkYXRhLW5hbWU9XFxcItCa0L7QvdGC0YPRgCAxXFxcIiBkPVxcXCJNMTAuNjY1LDUuMDI2LDMzLjg3MywyOC4yMzQsMTAuNjY1LDUxLjQ0MlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTkuNTAyIC00KVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjNzA3MDcwXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMVxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0RE9NRGF0ZShpZEVsZW1lbnQpIHtcclxuXHJcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEVsZW1lbnQpO1xyXG4gICAgaWYgKHNsaWRlciA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCclYyVzJyxcclxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHJlZDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTdhMDsgcGFkZGluZzogMnB4IDVweDsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgbWFyZ2luOiAyMHB4IGF1dG87JyxcclxuICAgICAgICAgICAgYHNsaWRlciB8IGlkICR7aWRFbGVtZW50fSBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgICAgIHJldHVybiB7aGFzRXJyb3I6IHRydWV9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNsaWRlc0FycmF5KHBhcmVudCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikubWFwKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLnRhZ05hbWUgIT09IFwiSU5QVVRcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2xpZGVzRWxlbWVudHNBcnJheSA9IGdldFNsaWRlc0FycmF5KHNsaWRlcik7XHJcbiAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nICggJyVjJXMnLFxyXG4gICAgICAgICAgICAnZm9udC1zaXplOiAxNnB4OyBjb2xvcjogcmVkOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhN2EwOyBwYWRkaW5nOiAycHggNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBtYXJnaW46IDIwcHggYXV0bzsnLFxyXG4gICAgICAgICAgICBgc2xpZGVyIHwgY29udGFpbmVyICcjJHtpZEVsZW1lbnR9JyBpcyBlbXB0eWApO1xyXG4gICAgICAgIHJldHVybiB7aGFzRXJyb3I6IHRydWV9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMgID0ge1xyXG4gICAgICAgIF9uZXh0U2xpZGU6IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMSxcclxuICAgICAgICBfY3VycmVudFNsaWRlOiAwLFxyXG4gICAgICAgIF9wcmV2U2xpZGU6IDEsXHJcblxyXG4gICAgICAgIGdldCBnZXRDdXJyZW50KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFNsaWRlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldCBnZXROZXh0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmV4dFNsaWRlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldCBnZXRQcmV2KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJldlNsaWRlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdvTmV4dCgpIHtcclxuICAgICAgICAgICAgKyt0aGlzLl9uZXh0U2xpZGU7XHJcbiAgICAgICAgICAgICsrdGhpcy5fY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICArK3RoaXMuX3ByZXZTbGlkZTtcclxuICAgICAgICAgICAgc3dpdGNoIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9uZXh0U2xpZGUgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25leHRTbGlkZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX2N1cnJlbnRTbGlkZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFNsaWRlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fcHJldlNsaWRlIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmV2U2xpZGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ29QcmV2KCkge1xyXG4gICAgICAgICAgICAtLXRoaXMuX25leHRTbGlkZTtcclxuICAgICAgICAgICAgLS10aGlzLl9jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgICAgIC0tdGhpcy5fcHJldlNsaWRlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX25leHRTbGlkZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV4dFNsaWRlID0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9jdXJyZW50U2xpZGUgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTbGlkZSA9IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fcHJldlNsaWRlIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmV2U2xpZGUgPSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2xpZGVyV2lkdGggPSBzbGlkZXIuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgY29uc3QgaGFzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNsaWRlckVsZW1lbnQ6IHNsaWRlcixcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5X25vdFByb2Nlc3NlZDogc2xpZGVzRWxlbWVudHNBcnJheSxcclxuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzOiBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLFxyXG4gICAgICAgIHNsaWRlcldpZHRoOiBzbGlkZXJXaWR0aCxcclxuICAgICAgICBoYXNFcnJvcjogaGFzRXJyb3JcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0RE9NRGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gc2V0U2xpZGVyU3R5bGVzKHNsaWRlciwgc2V0RGVmYXVsdE1pbmltdW1TaXplcykge1xyXG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlcik7XHJcbiAgICBpZiAoc2V0RGVmYXVsdE1pbmltdW1TaXplcykge1xyXG4gICAgICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5taW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldFNsaWRlclN0eWxlcyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBzZXRTbGlkZXNTdHlsZShzbGlkZXNFbGVtZW50c0FycmF5KSB7XHJcbiAgICBmdW5jdGlvbiBhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoKCkge1xyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoKHNsaWRlc0VsZW1lbnRzQXJyYXkpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldFNsaWRlc1N0eWxlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZ2V0RE9NRGF0ZSBmcm9tICcuL2dldERPTURhdGUuanMnO1xuaW1wb3J0IGFkZGluZ01pc3NpbmdTbGlkZXMgZnJvbSAnLi9hZGRpbmdNaXNzaW5nU2xpZGVzLmpzJztcbmltcG9ydCBhZGRCdXR0b25Db250cm9sIGZyb20gJy4vYWRkQnV0dG9uQ29udHJvbC5qcyc7XG5pbXBvcnQgc2V0U2xpZGVyU3R5bGVzIGZyb20gJy4vc2V0U2xpZGVyU3R5bGVzLmpzJztcbmltcG9ydCBzZXRTbGlkZXNTdHlsZXMgZnJvbSAnLi9zZXRTbGlkZXNTdHlsZXMuanMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlU2xpZGVyKGlkRWxlbWVudCwge1xuICAgIGF1dG9wbGF5ID0gdHJ1ZSxcbiAgICB0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA9IDUwMDAsXG4gICAgdGltZVRvQ2hhbmdlU2xpZGVzID0gMTAwMCxcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25OYW1lID0gXCJsaW5lYXJcIixcbiAgICBidXR0b25Db250cm9sID0gdHJ1ZSxcbiAgICB0b3VjaG1vdmUgPSB0cnVlLFxuICAgIGJ1dHRvbkRlZmF1bHRTdHlsZXMgPSB0cnVlLFxuICAgIHNldERlZmF1bHRNaW5pbXVtU2l6ZXMgPSB0cnVlLFxufSA9IHt9KSB7XG5cbiAgICBmdW5jdGlvbiBzZXRTbGlkZXNEaXNwbGF5KCkge1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgLy8gdmFsdWUuY2xhc3NMaXN0LmFkZChzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNsaWRlc0VsZW1lbnRzQXJyYXkpXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXROZXh0XS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0Q3VycmVudF0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldFByZXZdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9zaXRpb25pbmdTbGlkZXMoKSB7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXROZXh0XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZVNoaWZ0UmlnaHQpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0TmV4dF0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuc2xpZGVTaGlmdExlZnQpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0Q3VycmVudF0uY2xhc3NMaXN0LmFkZChzdHlsZXMuY2VudGVyU2xpZGUpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0Q3VycmVudF0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuc2xpZGVTaGlmdFJpZ2h0LCBzdHlsZXMuc2xpZGVTaGlmdExlZnQpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0UHJldl0uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVTaGlmdExlZnQpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0UHJldl0uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVTaGlmdFJpZ2h0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hUb0xlZnRTbGlkZSgpIHtcbiAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nb05leHQoKTtcbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuICAgICAgICBwb3NpdGlvbmluZ1NsaWRlcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvUmlnaHRTbGlkZSgpIHtcbiAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nb1ByZXYoKTtcbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuICAgICAgICBwb3NpdGlvbmluZ1NsaWRlcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZXJUb3VjaChldmVudCkge1xuICAgICAgICBpZiAoc3dpdGNoU2xpZGVCbG9ja2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgc3dpcGVMZW5ndGggPSAwO1xuXG4gICAgICAgIHN3aXBlTGVuZ3RoICs9IGNsaWVudFggLSBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblg7XG4gICAgICAgIGlmIChzd2lwZUxlbmd0aCA+IHNsaWRlcldpZHRoIC8gMykge1xuICAgICAgICAgICAgbGVmdFNsaWRlclNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlTGVuZ3RoIDwgLXNsaWRlcldpZHRoIC8gMykge1xuICAgICAgICAgICAgcmlnaHRTbGlkZXJTaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG91Y2hTY3JvbGxCbG9ja2VyKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0QXV0b3BsYXkodGltZU9mQ2hhbmdpbmdTbGlkZXMpIHtcbiAgICAgICAgYXV0b2xwYXlUaW1lciA9IHNldEludGVydmFsKCgpID0+IHJpZ2h0U2xpZGVyU2hpZnQoKSwgdGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BBdXRvcGxheSgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChhdXRvbHBheVRpbWVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheShhdXRvbHBheVRpbWVyKTtcbiAgICAgICAgc3RhcnRBdXRvcGxheSh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGF1c2VTd2l0Y2goKSB7XG4gICAgICAgIGlmICghYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LmFkZChzdHlsZXMuaW5wdXRQYXVzZU5vdEFjdGl2ZSk7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5pbnB1dFBhdXNlQWN0aXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LmFkZChzdHlsZXMuaW5wdXRQYXVzZUFjdGl2ZSk7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5pbnB1dFBhdXNlTm90QWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgICBhdXRvcGxheSA9ICFhdXRvcGxheVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBzZXVkb1RvdWNoTW92ZShldmVudCkge1xuICAgICAgICBpZiAoaGFzUHNldWRvVG91Y2hNb3VzZSkge1xuICAgICAgICAgICAgbGV0IHBzZXVkb0V2ZW50ID0ge3RvdWNoZXM6IFt7Y2xpZW50WDogMH0sXX07XG4gICAgICAgICAgICBwc2V1ZG9FdmVudC50b3VjaGVzWzBdLmNsaWVudFggPSBldmVudC5jbGllbnRYO1xuICAgICAgICAgICAgbW92ZVNsaWRlclRvdWNoKHBzZXVkb0V2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBzZXVkb1RvdWNoTW92ZVN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGhhc1BzZXVkb1RvdWNoTW91c2UgPSB0cnVlO1xuICAgICAgICBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblggPSBldmVudC5jbGllbnRYO1xuICAgICAgICBzdG9wQXV0b3BsYXkoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBzZXVkb1RvdWNoTW92ZUVuZCgpIHtcbiAgICAgICAgaGFzUHNldWRvVG91Y2hNb3VzZSA9IGZhbHNlO1xuICAgICAgICBzd2lwZUxlbmd0aCA9IDA7XG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByaWdodFNsaWRlclNoaWZ0KCkge1xuICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgc3dpdGNoU2xpZGVCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgc3dpdGNoVG9SaWdodFNsaWRlKCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5nZXROZXh0XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5oaWRlU2xpZGUpO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldE5leHRdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DaGFuZ2VTbGlkZXMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGVmdFNsaWRlclNoaWZ0KCkge1xuICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgc3dpdGNoU2xpZGVCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgc3dpdGNoVG9MZWZ0U2xpZGUoKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmdldFByZXZdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmhpZGVTbGlkZSk7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICAgICAgc3dpdGNoU2xpZGVCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuZ2V0UHJldl0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaGlkZVNsaWRlKTtcbiAgICAgICAgfSwgdGltZVRvQ2hhbmdlU2xpZGVzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA8IDQpIHtcbiAgICAgICAgICAgIHRpbWVPZkNoYW5naW5nU2xpZGVzID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA8ICh0aW1lVG9DaGFuZ2VTbGlkZXMgLyAxMDApICogMTIwKSB7XG4gICAgICAgICAgICB0aW1lVG9DaGFuZ2VTbGlkZXMgPSAodGltZVRvQ2hhbmdlU2xpZGVzIC8gMTAwKSAqIDgwO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuXG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgc3RhcnRBdXRvcGxheSh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgdmFsdWUuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dGltZVRvQ2hhbmdlU2xpZGVzfW1zYDtcbiAgICAgICAgICAgIHZhbHVlLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbk5hbWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCA9IDA7XG4gICAgbGV0IHN3aXBlTGVuZ3RoID0gMDtcbiAgICBsZXQgc3dpdGNoU2xpZGVCbG9ja2VkID0gZmFsc2U7XG4gICAgbGV0IGF1dG9scGF5VGltZXIgPSBudWxsO1xuICAgIGxldCBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gZmFsc2U7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIHNsaWRlckVsZW1lbnQsXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkLFxuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLFxuICAgICAgICBzbGlkZXJXaWR0aCxcbiAgICAgICAgaGFzRXJyb3JcbiAgICB9ID0gZ2V0RE9NRGF0ZShpZEVsZW1lbnQpO1xuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNsaWRlc0VsZW1lbnRzQXJyYXkgPSBhZGRpbmdNaXNzaW5nU2xpZGVzKHNsaWRlc0VsZW1lbnRzQXJyYXlfbm90UHJvY2Vzc2VkKTtcbiAgICBwb3NpdGlvbmluZ1NsaWRlcygpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QgPSBhZGRCdXR0b25Db250cm9sKHNsaWRlckVsZW1lbnQsIGJ1dHRvbkNvbnRyb2wsIGJ1dHRvbkRlZmF1bHRTdHlsZXMpO1xuICAgIHNldFNsaWRlclN0eWxlcyhzbGlkZXJFbGVtZW50LCBzZXREZWZhdWx0TWluaW11bVNpemVzKTtcbiAgICBzZXRTbGlkZXNTdHlsZXMoc2xpZGVzRWxlbWVudHNBcnJheSk7XG5cblxuICAgIGluaXQoKTtcblxuICAgIGlmICh0b3VjaG1vdmUpIHtcbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBtb3ZlU2xpZGVyVG91Y2gpO1xuICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBzd2lwZUxlbmd0aCA9IDA7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRvdWNoU2Nyb2xsQmxvY2tlcik7XG5cbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHBzZXVkb1RvdWNoTW92ZVN0YXJ0KTtcbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHBzZXVkb1RvdWNoTW92ZSk7XG4gICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgcHNldWRvVG91Y2hNb3ZlRW5kKTtcbiAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBwc2V1ZG9Ub3VjaE1vdmVFbmQpO1xuICAgIH1cblxuICAgIGlmIChidXR0b25Db250cm9sKSB7XG4gICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN3aXRjaFNsaWRlQmxvY2tlZCkge1xuICAgICAgICAgICAgICAgIGxlZnRTbGlkZXJTaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzd2l0Y2hTbGlkZUJsb2NrZWQpIHtcbiAgICAgICAgICAgICAgICByaWdodFNsaWRlclNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwYXVzZVN3aXRjaCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNsaWRlcjsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBteVNsaWRlciBmcm9tIFwiRGlzdC9kaXN0XCI7XG5cbm15U2xpZGVyKFwiZmlyc3RTbGlkZXJcIiwge1xuICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICB0aW1lT2ZDaGFuZ2luZ1NsaWRlczogMjAwMCxcbiAgICB0aW1lVG9DaGFuZ2VTbGlkZXM6IDUwMCxcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25OYW1lOiBcImVhc2UtaW5cIixcbiAgICBidXR0b25Db250cm9sOiBmYWxzZSxcbiAgICB0b3VjaG1vdmU6IHRydWUsXG4gICAgYnV0dG9uRGVmYXVsdFN0eWxlczogdHJ1ZSxcbiAgICBzZXREZWZhdWx0TWluaW11bVNpemVzOiB0cnVlXG59KTtcbm15U2xpZGVyKFwic2Vjb25kU2xpZGVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=