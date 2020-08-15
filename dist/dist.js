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
function gettingStartedWithDOM(idElement, setDefaultMinimumSizes, buttonControl, buttonDefaultStyles) {

    var slider = document.getElementById(idElement);
    if (slider === null) {
        return console.log('%c%s', 'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;', 'slider | id ' + idElement + ' does not exist');
    }

    function getSlidesArray(parent) {
        return Array.from(parent.children).map(function (value) {
            if (value.tagName !== "INPUT") {
                value.classList.add("slides");
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
            _ref$src = _ref.src,
            src = _ref$src === undefined ? null : _ref$src,
            name = _ref.name,
            alt = _ref.alt,
            _ref$classList = _ref.classList,
            classList = _ref$classList === undefined ? [] : _ref$classList;

        //Сократить, до 6 строк
        /*src = null и проверка на null, делает так, что мы не присвоем паузе src. Так же можно
        дополнительныеклассы присваевать, вне функции, но пока решил сделать функцию универсальней*/
        var button = document.createElement("input");
        button.setAttribute("type", type);
        if (src !== null) {
            button.setAttribute("src", src);
        }
        button.setAttribute("name", name);
        button.setAttribute("alt", alt);
        classList.forEach(function (value) {
            return button.classList.add(value);
        });
        return button;
    }

    function crateButtonControl(defaultStyles) {
        if (defaultStyles) {

            buttonControlElementsList.rightButtonControl = createButton({
                type: "image",
                src: "img/arrow.png",
                name: "arrowRight",
                alt: "arrow right",
                classList: ["rightButton", "button", "buttonShiftSlides"]
            });
            slider.append(buttonControlElementsList.rightButtonControl);

            buttonControlElementsList.pauseButtonControl = createButton({
                type: "button",
                name: "pause",
                alt: "input pause",
                classList: ["inputPauseNotActive", "inputPause", "button"]
            });
            slider.append(buttonControlElementsList.pauseButtonControl);

            buttonControlElementsList.leftButtonControl = createButton({
                type: "image",
                src: "img/arrow.png",
                name: "arrowLeft",
                alt: "arrow left",
                classList: ["button", "buttonShiftSlides"]
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
            value.classList.add("slides");
        });
    }

    var slidesElementsArray = addingMissingSlides(getSlidesArray(slider));
    if (slidesElementsArray === null) {
        return console.log('%c%s', 'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;', 'slider | container \'#' + idElement + '\' is empty');
    }

    slider.classList.add("slider");
    if (setDefaultMinimumSizes) {
        slider.classList.add("minWidthAndMinHeightSlider");
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
            value.classList.add("hideSlide");
        });
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove("hideSlide");
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.remove("hideSlide");
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove("hideSlide");
    }

    function positioningSlides() {
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.add("slideShiftRight");
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove("slideShiftLeft");
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.add("centerSlide");
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.remove("slideShiftRight", "slideShiftLeft");
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add("slideShiftLeft");
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add("slideShiftRight");
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
            buttonControlElementsList.pauseButtonControl.classList.add("inputPauseNotActive");
            buttonControlElementsList.pauseButtonControl.classList.remove("inputPauseActive");
        } else {
            stopAutoplay();
            buttonControlElementsList.pauseButtonControl.classList.add("inputPauseActive");
            buttonControlElementsList.pauseButtonControl.classList.remove("inputPauseNotActive");
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
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.add("hideSlide");
        setTimeout(function () {
            autoplayReset(timeOfChangingSlides);
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove("hideSlide");
        }, timeToChangeSlides);
    }

    function leftSliderShift() {
        stopAutoplay();
        switchSlideBlocked = true;
        switchToLeftSlide();
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add("hideSlide");
        setTimeout(function () {
            autoplayReset(timeOfChangingSlides);
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove("hideSlide");
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
            value.style.transitionDuration = timeToChangeSlides + "ms";
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

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGVTbGlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3JlYXRlU2xpZGVyLy4vZ2V0dGluZ1N0YXJ0ZWRXaXRoRE9NLmpzIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uL3NsaWRlci5qcyJdLCJuYW1lcyI6WyJnZXR0aW5nU3RhcnRlZFdpdGhET00iLCJpZEVsZW1lbnQiLCJzZXREZWZhdWx0TWluaW11bVNpemVzIiwiYnV0dG9uQ29udHJvbCIsImJ1dHRvbkRlZmF1bHRTdHlsZXMiLCJzbGlkZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImdldFNsaWRlc0FycmF5IiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJtYXAiLCJ2YWx1ZSIsInRhZ05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRpbmdNaXNzaW5nU2xpZGVzIiwic2xpZGVzRWxlbWVudHNBcnJheSIsImxlbmd0aCIsImZpcnN0Q2xvbmVFbGVtZW50IiwiY2xvbmVOb2RlIiwic2Vjb25kQ2xvbmVFbGVtZW50IiwicHVzaCIsImFwcGVuZCIsImZvckVhY2giLCJjbG9uZUVsZW1lbnQiLCJzZXRTdGFydGluZ1Bvc2l0aW9uc1NsaWRlcyIsIm9iamVjdFNsaWRlclZpc2libGVTbGlkZXMiLCJuZXh0U2xpZGUiLCJjdXJyZW50U2xpZGUiLCJwcmV2U2xpZGUiLCJjcmVhdGVCdXR0b24iLCJ0eXBlIiwic3JjIiwibmFtZSIsImFsdCIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjcmF0ZUJ1dHRvbkNvbnRyb2wiLCJkZWZhdWx0U3R5bGVzIiwiYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdCIsInJpZ2h0QnV0dG9uQ29udHJvbCIsInBhdXNlQnV0dG9uQ29udHJvbCIsImxlZnRCdXR0b25Db250cm9sIiwiYXV0b21hdGljU2V0dGluZ1BpY3R1cmVXaWR0aCIsInNsaWRlcldpZHRoIiwiY2xpZW50V2lkdGgiLCJjcmVhdGVTbGlkZXIiLCJhdXRvcGxheSIsInRpbWVPZkNoYW5naW5nU2xpZGVzIiwidGltZVRvQ2hhbmdlU2xpZGVzIiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZSIsInRvdWNobW92ZSIsInBvc2l0aW9uaW5nU2xpZGVzIiwic2V0U2xpZGVzRGlzcGxheSIsInJlbW92ZSIsInN3aXRjaFRvTGVmdFNsaWRlIiwic3dpdGNoVG9SaWdodFNsaWRlIiwibW92ZVNsaWRlclRvdWNoIiwiZXZlbnQiLCJzd2l0Y2hTbGlkZUJsb2NrZWQiLCJjbGllbnRYIiwidG91Y2hlcyIsInN3aXBlTGVuZ3RoIiwiZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YIiwibGVmdFNsaWRlclNoaWZ0IiwicmlnaHRTbGlkZXJTaGlmdCIsInRvdWNoU2Nyb2xsQmxvY2tlciIsInByZXZlbnREZWZhdWx0Iiwic3RhcnRBdXRvcGxheSIsImF1dG9scGF5VGltZXIiLCJzZXRJbnRlcnZhbCIsInN0b3BBdXRvcGxheSIsImNsZWFySW50ZXJ2YWwiLCJhdXRvcGxheVJlc2V0IiwicGF1c2VTd2l0Y2giLCJwc2V1ZG9Ub3VjaE1vdmUiLCJoYXNQc2V1ZG9Ub3VjaE1vdXNlIiwicHNldWRvRXZlbnQiLCJwc2V1ZG9Ub3VjaE1vdmVTdGFydCIsInBzZXVkb1RvdWNoTW92ZUVuZCIsInNldFRpbWVvdXQiLCJpbml0Iiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNB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RCxlQUFPc0YsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsWUFBTTtBQUN0Q3ZCLDBCQUFjLENBQWQ7QUFDQVcsMEJBQWN6QixvQkFBZDtBQUNILFNBSEQ7O0FBS0FqRCxlQUFPc0YsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNuQixrQkFBckM7O0FBRUFuRSxlQUFPc0YsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNQLG9CQUFyQztBQUNBL0UsZUFBT3NGLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDVixlQUFyQztBQUNBNUUsZUFBT3NGLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DTixrQkFBbkM7QUFDQWhGLGVBQU9zRixnQkFBUCxDQUF3QixZQUF4QixFQUFzQ04sa0JBQXRDO0FBQ0g7O0FBRUQsUUFBSWxGLGFBQUosRUFBbUI7QUFDZjBDLGtDQUEwQkMsa0JBQTFCLENBQTZDNkMsZ0JBQTdDLENBQThELE9BQTlELEVBQXVFLFlBQU07QUFDekUsZ0JBQUksQ0FBQzFCLGtCQUFMLEVBQXlCO0FBQ3JCSztBQUNIO0FBQ0osU0FKRDtBQUtBekIsa0NBQTBCRyxpQkFBMUIsQ0FBNEMyQyxnQkFBNUMsQ0FBNkQsT0FBN0QsRUFBc0UsWUFBTTtBQUN4RSxnQkFBSSxDQUFDMUIsa0JBQUwsRUFBeUI7QUFDckJNO0FBQ0g7QUFDSixTQUpEO0FBS0EsWUFBSWxCLFFBQUosRUFBYztBQUNWUixzQ0FBMEJFLGtCQUExQixDQUE2QzRDLGdCQUE3QyxDQUE4RCxPQUE5RCxFQUF1RVgsV0FBdkU7QUFDSDtBQUNKO0FBQ0o7O2tCQUVjNUIsWSIsImZpbGUiOiJkaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zbGlkZXIuanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGdldHRpbmdTdGFydGVkV2l0aERPTShpZEVsZW1lbnQsIHNldERlZmF1bHRNaW5pbXVtU2l6ZXMsIGJ1dHRvbkNvbnRyb2wsIGJ1dHRvbkRlZmF1bHRTdHlsZXMpIHtcclxuXHJcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEVsZW1lbnQpO1xyXG4gICAgaWYgKHNsaWRlciA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyAoICclYyVzJyxcclxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHJlZDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTdhMDsgcGFkZGluZzogMnB4IDVweDsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgbWFyZ2luOiAyMHB4IGF1dG87JyxcclxuICAgICAgICAgICAgYHNsaWRlciB8IGlkICR7aWRFbGVtZW50fSBkb2VzIG5vdCBleGlzdGAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTbGlkZXNBcnJheShwYXJlbnQpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLm1hcCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS50YWdOYW1lICE9PSBcIklOUFVUXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXNcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRpbmdNaXNzaW5nU2xpZGVzKHNsaWRlc0VsZW1lbnRzQXJyYXkpIHtcclxuICAgICAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgZmlyc3RDbG9uZUVsZW1lbnQgPSBzbGlkZXNFbGVtZW50c0FycmF5WzBdLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgbGV0IHNlY29uZENsb25lRWxlbWVudCA9IGZpcnN0Q2xvbmVFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5wdXNoKGZpcnN0Q2xvbmVFbGVtZW50KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChmaXJzdENsb25lRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkucHVzaChzZWNvbmRDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKHNlY29uZENsb25lRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsb25lRWxlbWVudCA9IHZhbHVlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkucHVzaChjbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChjbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNsaWRlc0VsZW1lbnRzQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3RhcnRpbmdQb3NpdGlvbnNTbGlkZXMoKSB7XHJcbiAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5uZXh0U2xpZGUgPSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5jdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b24oe3R5cGUsIHNyYyA9IG51bGwsIG5hbWUsIGFsdCwgY2xhc3NMaXN0ID0gW119ID0ge30pIHsvL9Ch0L7QutGA0LDRgtC40YLRjCwg0LTQviA2INGB0YLRgNC+0LpcclxuICAgICAgICAvKnNyYyA9IG51bGwg0Lgg0L/RgNC+0LLQtdGA0LrQsCDQvdCwIG51bGwsINC00LXQu9Cw0LXRgiDRgtCw0LosINGH0YLQviDQvNGLINC90LUg0L/RgNC40YHQstC+0LXQvCDQv9Cw0YPQt9C1IHNyYy4g0KLQsNC6INC20LUg0LzQvtC20L3QvlxyXG4gICAgICAgINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LXQutC70LDRgdGB0Ysg0L/RgNC40YHQstCw0LXQstCw0YLRjCwg0LLQvdC1INGE0YPQvdC60YbQuNC4LCDQvdC+INC/0L7QutCwINGA0LXRiNC40Lsg0YHQtNC10LvQsNGC0Ywg0YTRg9C90LrRhtC40Y4g0YPQvdC40LLQtdGA0YHQsNC70YzQvdC10LkqL1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcclxuICAgICAgICBpZiAoc3JjICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3JjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBhbHQpO1xyXG4gICAgICAgIGNsYXNzTGlzdC5mb3JFYWNoKHZhbHVlID0+IGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHZhbHVlKSk7XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmF0ZUJ1dHRvbkNvbnRyb2woZGVmYXVsdFN0eWxlcykge1xyXG4gICAgICAgIGlmIChkZWZhdWx0U3R5bGVzKSB7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcImltZy9hcnJvdy5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93UmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtcInJpZ2h0QnV0dG9uXCIsIFwiYnV0dG9uXCIsIFwiYnV0dG9uU2hpZnRTbGlkZXNcIl1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJpbnB1dCBwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogW1wiaW5wdXRQYXVzZU5vdEFjdGl2ZVwiLCBcImlucHV0UGF1c2VcIiwgXCJidXR0b25cIl1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCJpbWcvYXJyb3cucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd0xlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogW1wiYnV0dG9uXCIsIFwiYnV0dG9uU2hpZnRTbGlkZXNcIl1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJhcnJvdyByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImlucHV0IHBhdXNlXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd0xlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGF1dG9tYXRpY1NldHRpbmdQaWN0dXJlV2lkdGgoKSB7XHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuY2xhc3NMaXN0LmFkZChcInNsaWRlc1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qgc2xpZGVzRWxlbWVudHNBcnJheSA9IGFkZGluZ01pc3NpbmdTbGlkZXMoZ2V0U2xpZGVzQXJyYXkoc2xpZGVyKSk7XHJcbiAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyAoICclYyVzJyxcclxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHJlZDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTdhMDsgcGFkZGluZzogMnB4IDVweDsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgbWFyZ2luOiAyMHB4IGF1dG87JyxcclxuICAgICAgICAgICAgYHNsaWRlciB8IGNvbnRhaW5lciAnIyR7aWRFbGVtZW50fScgaXMgZW1wdHlgKTtcclxuICAgIH1cclxuXHJcbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlclwiKTtcclxuICAgIGlmIChzZXREZWZhdWx0TWluaW11bVNpemVzKSB7XHJcbiAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJtaW5XaWR0aEFuZE1pbkhlaWdodFNsaWRlclwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNsaWRlcldpZHRoID0gc2xpZGVyLmNsaWVudFdpZHRoO1xyXG5cclxuICAgIGNvbnN0IG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMgPSB7XHJcbiAgICAgICAgbmV4dFNsaWRlOiAwLFxyXG4gICAgICAgIGN1cnJlbnRTbGlkZTogMSxcclxuICAgICAgICBwcmV2U2xpZGU6IDJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdCA9IHtcclxuICAgICAgICBsZWZ0QnV0dG9uQ29udHJvbDogbnVsbCxcclxuICAgICAgICByaWdodEJ1dHRvbkNvbnRyb2w6IG51bGwsXHJcbiAgICAgICAgcGF1c2VCdXR0b25Db250cm9sOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIHNldFN0YXJ0aW5nUG9zaXRpb25zU2xpZGVzKGJ1dHRvbkRlZmF1bHRTdHlsZXMpO1xyXG5cclxuICAgIGlmIChidXR0b25Db250cm9sKSB7XHJcbiAgICAgICAgY3JhdGVCdXR0b25Db250cm9sKGJ1dHRvbkRlZmF1bHRTdHlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dG9tYXRpY1NldHRpbmdQaWN0dXJlV2lkdGgoKTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHNsaWRlcixcclxuICAgICAgICBzbGlkZXJXaWR0aCxcclxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV4dFNsaWRlOiBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZSxcclxuICAgICAgICAgICAgY3VycmVudFNsaWRlOiBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZSxcclxuICAgICAgICAgICAgcHJldlNsaWRlOiBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZWZ0QnV0dG9uQ29udHJvbDogYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCxcclxuICAgICAgICAgICAgcmlnaHRCdXR0b25Db250cm9sOiBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCxcclxuICAgICAgICAgICAgcGF1c2VCdXR0b25Db250cm9sOiBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbFxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0dGluZ1N0YXJ0ZWRXaXRoRE9NOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZ2V0dGluZ1N0YXJ0ZWRXaXRoRE9NIGZyb20gJy4vZ2V0dGluZ1N0YXJ0ZWRXaXRoRE9NLmpzJztcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlcihpZEVsZW1lbnQsIHtcbiAgICBhdXRvcGxheSA9IHRydWUsXG4gICAgdGltZU9mQ2hhbmdpbmdTbGlkZXMgPSA1MDAwLFxuICAgIHRpbWVUb0NoYW5nZVNsaWRlcyA9IDEwMDAsXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZSA9IFwibGluZWFyXCIsXG4gICAgYnV0dG9uQ29udHJvbCA9IHRydWUsXG4gICAgdG91Y2htb3ZlID0gdHJ1ZSxcbiAgICBidXR0b25EZWZhdWx0U3R5bGVzID0gdHJ1ZSxcbiAgICBzZXREZWZhdWx0TWluaW11bVNpemVzID0gdHJ1ZSxcbn0gPSB7fSkge1xuXG4gICAgbGV0IFtzbGlkZXIsXG4gICAgICAgIHNsaWRlcldpZHRoLFxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LFxuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLFxuICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LFxuICAgIF0gPSBnZXR0aW5nU3RhcnRlZFdpdGhET00oaWRFbGVtZW50LCBzZXREZWZhdWx0TWluaW11bVNpemVzLCBidXR0b25Db250cm9sLCBidXR0b25EZWZhdWx0U3R5bGVzKTtcbiAgICBwb3NpdGlvbmluZ1NsaWRlcygpO1xuXG4gICAgZnVuY3Rpb24gc2V0U2xpZGVzRGlzcGxheSgpIHtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoXCJoaWRlU2xpZGVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVNsaWRlXCIpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVNsaWRlXCIpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVNsaWRlXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvc2l0aW9uaW5nU2xpZGVzKCkge1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlXS5jbGFzc0xpc3QuYWRkKFwic2xpZGVTaGlmdFJpZ2h0XCIpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVTaGlmdExlZnRcIik7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5jdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJTbGlkZVwiKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlU2hpZnRSaWdodFwiLCBcInNsaWRlU2hpZnRMZWZ0XCIpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlXS5jbGFzc0xpc3QuYWRkKFwic2xpZGVTaGlmdExlZnRcIik7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5wcmV2U2xpZGVdLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVNoaWZ0UmlnaHRcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoVG9MZWZ0U2xpZGUoKSB7XG4gICAgICAgICsrb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5uZXh0U2xpZGU7XG4gICAgICAgICsrb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5jdXJyZW50U2xpZGU7XG4gICAgICAgICsrb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5wcmV2U2xpZGU7XG4gICAgICAgIHN3aXRjaCAoc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5uZXh0U2xpZGUgOlxuICAgICAgICAgICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5jdXJyZW50U2xpZGUgOlxuICAgICAgICAgICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5wcmV2U2xpZGUgOlxuICAgICAgICAgICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzZXRTbGlkZXNEaXNwbGF5KCk7XG4gICAgICAgIHBvc2l0aW9uaW5nU2xpZGVzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoVG9SaWdodFNsaWRlKCkge1xuICAgICAgICAtLW9iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlO1xuICAgICAgICAtLW9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlO1xuICAgICAgICAtLW9iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlO1xuICAgICAgICBzd2l0Y2ggKC0xKSB7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZSA9IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5jdXJyZW50U2xpZGUgOlxuICAgICAgICAgICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlID0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZSA6XG4gICAgICAgICAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5wcmV2U2xpZGUgPSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuICAgICAgICBwb3NpdGlvbmluZ1NsaWRlcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZXJUb3VjaChldmVudCkge1xuICAgICAgICBpZiAoc3dpdGNoU2xpZGVCbG9ja2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgc3dpcGVMZW5ndGggPSAwO1xuXG4gICAgICAgIHN3aXBlTGVuZ3RoICs9IGNsaWVudFggLSBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblg7XG4gICAgICAgIGlmIChzd2lwZUxlbmd0aCA+IHNsaWRlcldpZHRoIC8gMykge1xuICAgICAgICAgICAgbGVmdFNsaWRlclNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlTGVuZ3RoIDwgLXNsaWRlcldpZHRoIC8gMykge1xuICAgICAgICAgICAgcmlnaHRTbGlkZXJTaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG91Y2hTY3JvbGxCbG9ja2VyKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0QXV0b3BsYXkodGltZU9mQ2hhbmdpbmdTbGlkZXMpIHtcbiAgICAgICAgYXV0b2xwYXlUaW1lciA9IHNldEludGVydmFsKCgpID0+IHJpZ2h0U2xpZGVyU2hpZnQoKSwgdGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BBdXRvcGxheSgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChhdXRvbHBheVRpbWVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheShhdXRvbHBheVRpbWVyKTtcbiAgICAgICAgc3RhcnRBdXRvcGxheSh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGF1c2VTd2l0Y2goKSB7XG4gICAgICAgIGlmICghYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LmFkZChcImlucHV0UGF1c2VOb3RBY3RpdmVcIik7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5wdXRQYXVzZUFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LmFkZChcImlucHV0UGF1c2VBY3RpdmVcIik7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5wdXRQYXVzZU5vdEFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBhdXRvcGxheSA9ICFhdXRvcGxheVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBzZXVkb1RvdWNoTW92ZShldmVudCkge1xuICAgICAgICBpZiAoaGFzUHNldWRvVG91Y2hNb3VzZSkge1xuICAgICAgICAgICAgbGV0IHBzZXVkb0V2ZW50ID0ge3RvdWNoZXM6IFt7Y2xpZW50WDogMH0sXX07XG4gICAgICAgICAgICBwc2V1ZG9FdmVudC50b3VjaGVzWzBdLmNsaWVudFggPSBldmVudC5jbGllbnRYO1xuICAgICAgICAgICAgbW92ZVNsaWRlclRvdWNoKHBzZXVkb0V2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBzZXVkb1RvdWNoTW92ZVN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGhhc1BzZXVkb1RvdWNoTW91c2UgPSB0cnVlO1xuICAgICAgICBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblggPSBldmVudC5jbGllbnRYO1xuICAgICAgICBzdG9wQXV0b3BsYXkoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBzZXVkb1RvdWNoTW92ZUVuZCgpIHtcbiAgICAgICAgaGFzUHNldWRvVG91Y2hNb3VzZSA9IGZhbHNlO1xuICAgICAgICBzd2lwZUxlbmd0aCA9IDA7XG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByaWdodFNsaWRlclNoaWZ0KCkge1xuICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgc3dpdGNoU2xpZGVCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgc3dpdGNoVG9SaWdodFNsaWRlKCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5uZXh0U2xpZGVdLmNsYXNzTGlzdC5hZGQoXCJoaWRlU2xpZGVcIik7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICAgICAgc3dpdGNoU2xpZGVCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVNsaWRlXCIpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2hhbmdlU2xpZGVzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxlZnRTbGlkZXJTaGlmdCgpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IHRydWU7XG4gICAgICAgIHN3aXRjaFRvTGVmdFNsaWRlKCk7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5wcmV2U2xpZGVdLmNsYXNzTGlzdC5hZGQoXCJoaWRlU2xpZGVcIik7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICAgICAgc3dpdGNoU2xpZGVCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVNsaWRlXCIpO1xuICAgICAgICB9LCB0aW1lVG9DaGFuZ2VTbGlkZXMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHRpbWVPZkNoYW5naW5nU2xpZGVzIDwgNCkge1xuICAgICAgICAgICAgdGltZU9mQ2hhbmdpbmdTbGlkZXMgPSA0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpbWVPZkNoYW5naW5nU2xpZGVzIDwgKHRpbWVUb0NoYW5nZVNsaWRlcyAvIDEwMCkgKiAxMjApIHtcbiAgICAgICAgICAgIHRpbWVUb0NoYW5nZVNsaWRlcyA9ICh0aW1lVG9DaGFuZ2VTbGlkZXMgLyAxMDApICogODA7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTbGlkZXNEaXNwbGF5KCk7XG5cbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICBzdGFydEF1dG9wbGF5KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt0aW1lVG9DaGFuZ2VTbGlkZXN9bXNgO1xuICAgICAgICAgICAgdmFsdWUuc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uTmFtZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsZXQgZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YID0gMDtcbiAgICBsZXQgc3dpcGVMZW5ndGggPSAwO1xuICAgIGxldCBzd2l0Y2hTbGlkZUJsb2NrZWQgPSBmYWxzZTtcbiAgICBsZXQgYXV0b2xwYXlUaW1lciA9IG51bGw7XG4gICAgbGV0IGhhc1BzZXVkb1RvdWNoTW91c2UgPSBmYWxzZTtcblxuICAgIGluaXQoKTtcblxuICAgIGlmICh0b3VjaG1vdmUpIHtcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgbW92ZVNsaWRlclRvdWNoKTtcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBzd2lwZUxlbmd0aCA9IDA7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2hTY3JvbGxCbG9ja2VyKTtcblxuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBwc2V1ZG9Ub3VjaE1vdmVTdGFydCk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHBzZXVkb1RvdWNoTW92ZSk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBwc2V1ZG9Ub3VjaE1vdmVFbmQpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgcHNldWRvVG91Y2hNb3ZlRW5kKTtcbiAgICB9XG5cbiAgICBpZiAoYnV0dG9uQ29udHJvbCkge1xuICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzd2l0Y2hTbGlkZUJsb2NrZWQpIHtcbiAgICAgICAgICAgICAgICBsZWZ0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghc3dpdGNoU2xpZGVCbG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgcmlnaHRTbGlkZXJTaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGF1c2VTd2l0Y2gpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbGlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==