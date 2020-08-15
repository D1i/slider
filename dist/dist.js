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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function gettingStartedWithDOM(idElement, setDefaultMinimumSizes, buttonControl, buttonDefaultStyles) {

    const slider = document.getElementById(idElement);
    if (slider === null) {
        return console.log ( '%c%s',
            'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;',
            `slider | id ${idElement} does not exist` );
    }

    function getSlidesArray(parent) {
        return Array.from(parent.children).map(value => {
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
            let firstCloneElement = slidesElementsArray[0].cloneNode(true);
            let secondCloneElement = firstCloneElement.cloneNode(true);
            slidesElementsArray.push(firstCloneElement);
            slider.append(firstCloneElement);
            slidesElementsArray.push(secondCloneElement);
            slider.append(secondCloneElement);
        }
        if (slidesElementsArray.length === 2) {
            slidesElementsArray.forEach(value => {
                let cloneElement = value.cloneNode(true);
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

    function createButton({type, src = null, name, alt, classList = []} = {}) {//Сократить, до 6 строк
        /*src = null и проверка на null, делает так, что мы не присвоем паузе src. Так же можно
        дополнительныеклассы присваевать, вне функции, но пока решил сделать функцию универсальней*/
        const button = document.createElement("input");
        button.setAttribute("type", type);
        if (src !== null) {
            button.setAttribute("src", src);
        }
        button.setAttribute("name", name);
        button.setAttribute("alt", alt);
        classList.forEach(value => button.classList.add(value));
        return button;
    }

    function crateButtonControl(defaultStyles) {
        if (defaultStyles) {

            buttonControlElementsList.rightButtonControl = createButton(
                {
                    type: "image",
                    src: "img/arrow.png",
                    name: "arrowRight",
                    alt: "arrow right",
                    classList: ["rightButton", "button", "buttonShiftSlides"]
                });
            slider.append(buttonControlElementsList.rightButtonControl);

            buttonControlElementsList.pauseButtonControl = createButton(
                {
                    type: "button",
                    name: "pause",
                    alt: "input pause",
                    classList: ["inputPauseNotActive", "inputPause", "button"]
                });
            slider.append(buttonControlElementsList.pauseButtonControl);

            buttonControlElementsList.leftButtonControl = createButton(
                {
                    type: "image",
                    src: "img/arrow.png",
                    name: "arrowLeft",
                    alt: "arrow left",
                    classList: ["button", "buttonShiftSlides"]
                });
            slider.append(buttonControlElementsList.leftButtonControl);

        } else {
            buttonControlElementsList.rightButtonControl = createButton(
                {
                    type: "button",
                    name: "arrowRight",
                    alt: "arrow right",
                });
            slider.append(buttonControlElementsList.rightButtonControl);

            buttonControlElementsList.pauseButtonControl = createButton(
                {
                    type: "button",
                    name: "pause",
                    alt: "input pause",
                });
            slider.append(buttonControlElementsList.pauseButtonControl);

            buttonControlElementsList.leftButtonControl = createButton(
                {
                    type: "button",
                    name: "arrowLeft",
                    alt: "arrow left",
                });
            slider.append(buttonControlElementsList.leftButtonControl);
        }
    }

    function automaticSettingPictureWidth() {
        slidesElementsArray.forEach(value => {
            value.classList.add("slides");
        });
    }


    const slidesElementsArray = addingMissingSlides(getSlidesArray(slider));
    if (slidesElementsArray === null) {
        return console.log ( '%c%s',
            'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;',
            `slider | container '#${idElement}' is empty`);
    }

    slider.classList.add("slider");
    if (setDefaultMinimumSizes) {
        slider.classList.add("minWidthAndMinHeightSlider");
    }
    const sliderWidth = slider.clientWidth;

    const objectSliderVisibleSlides = {
        nextSlide: 0,
        currentSlide: 1,
        prevSlide: 2
    };

    const buttonControlElementsList = {
        leftButtonControl: null,
        rightButtonControl: null,
        pauseButtonControl: null
    };

    setStartingPositionsSlides(buttonDefaultStyles);

    if (buttonControl) {
        crateButtonControl(buttonDefaultStyles);
    }

    automaticSettingPictureWidth();

    return [
        slider,
        sliderWidth,
        slidesElementsArray,
        {
            nextSlide: objectSliderVisibleSlides.nextSlide,
            currentSlide: objectSliderVisibleSlides.currentSlide,
            prevSlide: objectSliderVisibleSlides.prevSlide
        },
        {
            leftButtonControl: buttonControlElementsList.leftButtonControl,
            rightButtonControl: buttonControlElementsList.rightButtonControl,
            pauseButtonControl: buttonControlElementsList.pauseButtonControl
        }
    ]
}

/* harmony default export */ __webpack_exports__["default"] = (gettingStartedWithDOM);

/***/ }),

/***/ "./slider.js":
/*!*******************!*\
  !*** ./slider.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gettingStartedWithDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gettingStartedWithDOM.js */ "./gettingStartedWithDOM.js");






function createSlider(idElement, {
    autoplay = true,
    timeOfChangingSlides = 5000,
    timeToChangeSlides = 1000,
    transitionTimingFunctionName = "linear",
    buttonControl = true,
    touchmove = true,
    buttonDefaultStyles = true,
    setDefaultMinimumSizes = true,
} = {}) {

    let [slider,
        sliderWidth,
        slidesElementsArray,
        objectSliderVisibleSlides,
        buttonControlElementsList,
    ] = Object(_gettingStartedWithDOM_js__WEBPACK_IMPORTED_MODULE_0__["default"])(idElement, setDefaultMinimumSizes, buttonControl, buttonDefaultStyles);
    positioningSlides();

    function setSlidesDisplay() {
        slidesElementsArray.forEach(value => {
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
            case objectSliderVisibleSlides.nextSlide :
                objectSliderVisibleSlides.nextSlide = 0;
                break;
            case objectSliderVisibleSlides.currentSlide :
                objectSliderVisibleSlides.currentSlide = 0;
                break;
            case objectSliderVisibleSlides.prevSlide :
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
            case objectSliderVisibleSlides.nextSlide :
                objectSliderVisibleSlides.nextSlide = slidesElementsArray.length - 1;
                break;
            case objectSliderVisibleSlides.currentSlide :
                objectSliderVisibleSlides.currentSlide = slidesElementsArray.length - 1;
                break;
            case objectSliderVisibleSlides.prevSlide :
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
        const clientX = event.touches[0].clientX;
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
        autolpayTimer = setInterval(() => rightSliderShift(), timeOfChangingSlides);
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
        autoplay = !autoplay
    }

    function pseudoTouchMove(event) {
        if (hasPseudoTouchMouse) {
            let pseudoEvent = {touches: [{clientX: 0},]};
            pseudoEvent.touches[0].clientX = event.clientX;
            moveSliderTouch(pseudoEvent);
        }
    }

    function pseudoTouchMoveStart(event) {
        hasPseudoTouchMouse = true;
        gestureStartingPositionX = event.clientX;
        stopAutoplay()
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
        setTimeout( () => {
            autoplayReset(timeOfChangingSlides);
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove("hideSlide");
            }, timeToChangeSlides)
    }

    function leftSliderShift() {
        stopAutoplay();
        switchSlideBlocked = true;
        switchToLeftSlide();
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add("hideSlide");
        setTimeout( () => {
            autoplayReset(timeOfChangingSlides);
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove("hideSlide");
        }, timeToChangeSlides)
    }

    function init() {
        if (timeOfChangingSlides < 4) {
            timeOfChangingSlides = 4;
        }

        if (timeOfChangingSlides < (timeToChangeSlides / 100) * 120) {
            timeToChangeSlides = (timeToChangeSlides / 100) * 80;
        }

        setSlidesDisplay();

        if (autoplay) {
            startAutoplay(timeOfChangingSlides);
        }

        slidesElementsArray.forEach(value => {
            value.style.transitionDuration = `${timeToChangeSlides}ms`;
            value.style.transitionTimingFunction = transitionTimingFunctionName;
        })
    }

    let gestureStartingPositionX = 0;
    let swipeLength = 0;
    let switchSlideBlocked = false;
    let autolpayTimer = null;
    let hasPseudoTouchMouse = false;

    init();

    if (touchmove) {
        slider.addEventListener("touchstart", event => {
            gestureStartingPositionX = event.touches[0].clientX;
            stopAutoplay();
        });
        slider.addEventListener("touchmove", moveSliderTouch);
        slider.addEventListener("touchend", () => {
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
        buttonControlElementsList.rightButtonControl.addEventListener("click", () => {
            if (!switchSlideBlocked) {
                leftSliderShift();
            }
        });
        buttonControlElementsList.leftButtonControl.addEventListener("click", () => {
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

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGVTbGlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3JlYXRlU2xpZGVyLy4vZ2V0dGluZ1N0YXJ0ZWRXaXRoRE9NLmpzIiwid2VicGFjazovL2NyZWF0ZVNsaWRlci8uL3NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixZQUFZLDJCQUEyQixrQkFBa0Isd0JBQXdCLG1CQUFtQjtBQUNqSSwyQkFBMkIsVUFBVTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsNENBQTRDLEtBQUssR0FBRztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixZQUFZLDJCQUEyQixrQkFBa0Isd0JBQXdCLG1CQUFtQjtBQUNqSSxvQ0FBb0MsVUFBVTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDbExwQztBQUFBO0FBQWE7O0FBRWtEOzs7O0FBSS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsS0FBSzs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5RUFBcUI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixXQUFXLFdBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0QsbUJBQW1CO0FBQ25FO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDJFQUFZLEUiLCJmaWxlIjoiZGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2xpZGVyLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXR0aW5nU3RhcnRlZFdpdGhET00oaWRFbGVtZW50LCBzZXREZWZhdWx0TWluaW11bVNpemVzLCBidXR0b25Db250cm9sLCBidXR0b25EZWZhdWx0U3R5bGVzKSB7XHJcblxyXG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRFbGVtZW50KTtcclxuICAgIGlmIChzbGlkZXIgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2cgKCAnJWMlcycsXHJcbiAgICAgICAgICAgICdmb250LXNpemU6IDE2cHg7IGNvbG9yOiByZWQ7IGJhY2tncm91bmQtY29sb3I6ICNmZmE3YTA7IHBhZGRpbmc6IDJweCA1cHg7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IG1hcmdpbjogMjBweCBhdXRvOycsXHJcbiAgICAgICAgICAgIGBzbGlkZXIgfCBpZCAke2lkRWxlbWVudH0gZG9lcyBub3QgZXhpc3RgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2xpZGVzQXJyYXkocGFyZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKS5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUudGFnTmFtZSAhPT0gXCJJTlBVVFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVzXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkaW5nTWlzc2luZ1NsaWRlcyhzbGlkZXNFbGVtZW50c0FycmF5KSB7XHJcbiAgICAgICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0Q2xvbmVFbGVtZW50ID0gc2xpZGVzRWxlbWVudHNBcnJheVswXS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGxldCBzZWNvbmRDbG9uZUVsZW1lbnQgPSBmaXJzdENsb25lRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkucHVzaChmaXJzdENsb25lRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoZmlyc3RDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LnB1c2goc2Vjb25kQ2xvbmVFbGVtZW50KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChzZWNvbmRDbG9uZUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjbG9uZUVsZW1lbnQgPSB2YWx1ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LnB1c2goY2xvbmVFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoY2xvbmVFbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbGlkZXNFbGVtZW50c0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFN0YXJ0aW5nUG9zaXRpb25zU2xpZGVzKCkge1xyXG4gICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlID0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxO1xyXG4gICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlID0gMDtcclxuICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHt0eXBlLCBzcmMgPSBudWxsLCBuYW1lLCBhbHQsIGNsYXNzTGlzdCA9IFtdfSA9IHt9KSB7Ly/QodC+0LrRgNCw0YLQuNGC0YwsINC00L4gNiDRgdGC0YDQvtC6XHJcbiAgICAgICAgLypzcmMgPSBudWxsINC4INC/0YDQvtCy0LXRgNC60LAg0L3QsCBudWxsLCDQtNC10LvQsNC10YIg0YLQsNC6LCDRh9GC0L4g0LzRiyDQvdC1INC/0YDQuNGB0LLQvtC10Lwg0L/QsNGD0LfQtSBzcmMuINCi0LDQuiDQttC1INC80L7QttC90L5cclxuICAgICAgICDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C10LrQu9Cw0YHRgdGLINC/0YDQuNGB0LLQsNC10LLQsNGC0YwsINCy0L3QtSDRhNGD0L3QutGG0LjQuCwg0L3QviDQv9C+0LrQsCDRgNC10YjQuNC7INGB0LTQtdC70LDRgtGMINGE0YPQvdC60YbQuNGOINGD0L3QuNCy0LXRgNGB0LDQu9GM0L3QtdC5Ki9cclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICAgICAgaWYgKHNyYyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwic3JjXCIsIHNyYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgYWx0KTtcclxuICAgICAgICBjbGFzc0xpc3QuZm9yRWFjaCh2YWx1ZSA9PiBidXR0b24uY2xhc3NMaXN0LmFkZCh2YWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JhdGVCdXR0b25Db250cm9sKGRlZmF1bHRTdHlsZXMpIHtcclxuICAgICAgICBpZiAoZGVmYXVsdFN0eWxlcykge1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCJpbWcvYXJyb3cucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvd1JpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbXCJyaWdodEJ1dHRvblwiLCBcImJ1dHRvblwiLCBcImJ1dHRvblNoaWZ0U2xpZGVzXCJdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnJpZ2h0QnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiaW5wdXQgcGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtcImlucHV0UGF1c2VOb3RBY3RpdmVcIiwgXCJpbnB1dFBhdXNlXCIsIFwiYnV0dG9uXCJdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LnBhdXNlQnV0dG9uQ29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IFwiaW1nL2Fycm93LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IGxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtcImJ1dHRvblwiLCBcImJ1dHRvblNoaWZ0U2xpZGVzXCJdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZChidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wgPSBjcmVhdGVCdXR0b24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93UmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiYXJyb3cgcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucmlnaHRCdXR0b25Db250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJpbnB1dCBwYXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5sZWZ0QnV0dG9uQ29udHJvbCA9IGNyZWF0ZUJ1dHRvbihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3dMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcImFycm93IGxlZnRcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoKCkge1xyXG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXNcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHNsaWRlc0VsZW1lbnRzQXJyYXkgPSBhZGRpbmdNaXNzaW5nU2xpZGVzKGdldFNsaWRlc0FycmF5KHNsaWRlcikpO1xyXG4gICAgaWYgKHNsaWRlc0VsZW1lbnRzQXJyYXkgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2cgKCAnJWMlcycsXHJcbiAgICAgICAgICAgICdmb250LXNpemU6IDE2cHg7IGNvbG9yOiByZWQ7IGJhY2tncm91bmQtY29sb3I6ICNmZmE3YTA7IHBhZGRpbmc6IDJweCA1cHg7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IG1hcmdpbjogMjBweCBhdXRvOycsXHJcbiAgICAgICAgICAgIGBzbGlkZXIgfCBjb250YWluZXIgJyMke2lkRWxlbWVudH0nIGlzIGVtcHR5YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XHJcbiAgICBpZiAoc2V0RGVmYXVsdE1pbmltdW1TaXplcykge1xyXG4gICAgICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwibWluV2lkdGhBbmRNaW5IZWlnaHRTbGlkZXJcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzbGlkZXJXaWR0aCA9IHNsaWRlci5jbGllbnRXaWR0aDtcclxuXHJcbiAgICBjb25zdCBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzID0ge1xyXG4gICAgICAgIG5leHRTbGlkZTogMCxcclxuICAgICAgICBjdXJyZW50U2xpZGU6IDEsXHJcbiAgICAgICAgcHJldlNsaWRlOiAyXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QgPSB7XHJcbiAgICAgICAgbGVmdEJ1dHRvbkNvbnRyb2w6IG51bGwsXHJcbiAgICAgICAgcmlnaHRCdXR0b25Db250cm9sOiBudWxsLFxyXG4gICAgICAgIHBhdXNlQnV0dG9uQ29udHJvbDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRTdGFydGluZ1Bvc2l0aW9uc1NsaWRlcyhidXR0b25EZWZhdWx0U3R5bGVzKTtcclxuXHJcbiAgICBpZiAoYnV0dG9uQ29udHJvbCkge1xyXG4gICAgICAgIGNyYXRlQnV0dG9uQ29udHJvbChidXR0b25EZWZhdWx0U3R5bGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRvbWF0aWNTZXR0aW5nUGljdHVyZVdpZHRoKCk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBzbGlkZXIsXHJcbiAgICAgICAgc2xpZGVyV2lkdGgsXHJcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5leHRTbGlkZTogb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5uZXh0U2xpZGUsXHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5jdXJyZW50U2xpZGUsXHJcbiAgICAgICAgICAgIHByZXZTbGlkZTogb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5wcmV2U2xpZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGVmdEJ1dHRvbkNvbnRyb2w6IGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QubGVmdEJ1dHRvbkNvbnRyb2wsXHJcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uQ29udHJvbDogYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wsXHJcbiAgICAgICAgICAgIHBhdXNlQnV0dG9uQ29udHJvbDogYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2xcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldHRpbmdTdGFydGVkV2l0aERPTTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGdldHRpbmdTdGFydGVkV2l0aERPTSBmcm9tICcuL2dldHRpbmdTdGFydGVkV2l0aERPTS5qcyc7XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZXIoaWRFbGVtZW50LCB7XG4gICAgYXV0b3BsYXkgPSB0cnVlLFxuICAgIHRpbWVPZkNoYW5naW5nU2xpZGVzID0gNTAwMCxcbiAgICB0aW1lVG9DaGFuZ2VTbGlkZXMgPSAxMDAwLFxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbk5hbWUgPSBcImxpbmVhclwiLFxuICAgIGJ1dHRvbkNvbnRyb2wgPSB0cnVlLFxuICAgIHRvdWNobW92ZSA9IHRydWUsXG4gICAgYnV0dG9uRGVmYXVsdFN0eWxlcyA9IHRydWUsXG4gICAgc2V0RGVmYXVsdE1pbmltdW1TaXplcyA9IHRydWUsXG59ID0ge30pIHtcblxuICAgIGxldCBbc2xpZGVyLFxuICAgICAgICBzbGlkZXJXaWR0aCxcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheSxcbiAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcyxcbiAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdCxcbiAgICBdID0gZ2V0dGluZ1N0YXJ0ZWRXaXRoRE9NKGlkRWxlbWVudCwgc2V0RGVmYXVsdE1pbmltdW1TaXplcywgYnV0dG9uQ29udHJvbCwgYnV0dG9uRGVmYXVsdFN0eWxlcyk7XG4gICAgcG9zaXRpb25pbmdTbGlkZXMoKTtcblxuICAgIGZ1bmN0aW9uIHNldFNsaWRlc0Rpc3BsYXkoKSB7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVNsaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVTbGlkZVwiKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVTbGlkZVwiKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVTbGlkZVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3NpdGlvbmluZ1NsaWRlcygpIHtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZV0uY2xhc3NMaXN0LmFkZChcInNsaWRlU2hpZnRSaWdodFwiKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlU2hpZnRMZWZ0XCIpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKFwiY2VudGVyU2xpZGVcIik7XG4gICAgICAgIHNsaWRlc0VsZW1lbnRzQXJyYXlbb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5jdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZVNoaWZ0UmlnaHRcIiwgXCJzbGlkZVNoaWZ0TGVmdFwiKTtcbiAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZV0uY2xhc3NMaXN0LmFkZChcInNsaWRlU2hpZnRMZWZ0XCIpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlXS5jbGFzc0xpc3QuYWRkKFwic2xpZGVTaGlmdFJpZ2h0XCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvTGVmdFNsaWRlKCkge1xuICAgICAgICArK29iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlO1xuICAgICAgICArK29iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlO1xuICAgICAgICArK29iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlO1xuICAgICAgICBzd2l0Y2ggKHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuICAgICAgICBwb3NpdGlvbmluZ1NsaWRlcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvUmlnaHRTbGlkZSgpIHtcbiAgICAgICAgLS1vYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZTtcbiAgICAgICAgLS1vYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgLS1vYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZTtcbiAgICAgICAgc3dpdGNoICgtMSkge1xuICAgICAgICAgICAgY2FzZSBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZSA6XG4gICAgICAgICAgICAgICAgb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5uZXh0U2xpZGUgPSBzbGlkZXNFbGVtZW50c0FycmF5Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMuY3VycmVudFNsaWRlIDpcbiAgICAgICAgICAgICAgICBvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLmN1cnJlbnRTbGlkZSA9IHNsaWRlc0VsZW1lbnRzQXJyYXkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0U2xpZGVyVmlzaWJsZVNsaWRlcy5wcmV2U2xpZGUgOlxuICAgICAgICAgICAgICAgIG9iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlID0gc2xpZGVzRWxlbWVudHNBcnJheS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHNldFNsaWRlc0Rpc3BsYXkoKTtcbiAgICAgICAgcG9zaXRpb25pbmdTbGlkZXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVyVG91Y2goZXZlbnQpIHtcbiAgICAgICAgaWYgKHN3aXRjaFNsaWRlQmxvY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHN3aXBlTGVuZ3RoID0gMDtcblxuICAgICAgICBzd2lwZUxlbmd0aCArPSBjbGllbnRYIC0gZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YO1xuICAgICAgICBpZiAoc3dpcGVMZW5ndGggPiBzbGlkZXJXaWR0aCAvIDMpIHtcbiAgICAgICAgICAgIGxlZnRTbGlkZXJTaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2lwZUxlbmd0aCA8IC1zbGlkZXJXaWR0aCAvIDMpIHtcbiAgICAgICAgICAgIHJpZ2h0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdWNoU2Nyb2xsQmxvY2tlcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEF1dG9wbGF5KHRpbWVPZkNoYW5naW5nU2xpZGVzKSB7XG4gICAgICAgIGF1dG9scGF5VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiByaWdodFNsaWRlclNoaWZ0KCksIHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wQXV0b3BsYXkoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b2xwYXlUaW1lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcykge1xuICAgICAgICBzdG9wQXV0b3BsYXkoYXV0b2xwYXlUaW1lcik7XG4gICAgICAgIHN0YXJ0QXV0b3BsYXkodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhdXNlU3dpdGNoKCkge1xuICAgICAgICBpZiAoIWF1dG9wbGF5KSB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5hZGQoXCJpbnB1dFBhdXNlTm90QWN0aXZlXCIpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZShcImlucHV0UGF1c2VBY3RpdmVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRyb2xFbGVtZW50c0xpc3QucGF1c2VCdXR0b25Db250cm9sLmNsYXNzTGlzdC5hZGQoXCJpbnB1dFBhdXNlQWN0aXZlXCIpO1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZShcImlucHV0UGF1c2VOb3RBY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgYXV0b3BsYXkgPSAhYXV0b3BsYXlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGhhc1BzZXVkb1RvdWNoTW91c2UpIHtcbiAgICAgICAgICAgIGxldCBwc2V1ZG9FdmVudCA9IHt0b3VjaGVzOiBbe2NsaWVudFg6IDB9LF19O1xuICAgICAgICAgICAgcHNldWRvRXZlbnQudG91Y2hlc1swXS5jbGllbnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgICAgIG1vdmVTbGlkZXJUb3VjaChwc2V1ZG9FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmVTdGFydChldmVudCkge1xuICAgICAgICBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gdHJ1ZTtcbiAgICAgICAgZ2VzdHVyZVN0YXJ0aW5nUG9zaXRpb25YID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgc3RvcEF1dG9wbGF5KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwc2V1ZG9Ub3VjaE1vdmVFbmQoKSB7XG4gICAgICAgIGhhc1BzZXVkb1RvdWNoTW91c2UgPSBmYWxzZTtcbiAgICAgICAgc3dpcGVMZW5ndGggPSAwO1xuICAgICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIGF1dG9wbGF5UmVzZXQodGltZU9mQ2hhbmdpbmdTbGlkZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmlnaHRTbGlkZXJTaGlmdCgpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IHRydWU7XG4gICAgICAgIHN3aXRjaFRvUmlnaHRTbGlkZSgpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMubmV4dFNsaWRlXS5jbGFzc0xpc3QuYWRkKFwiaGlkZVNsaWRlXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLm5leHRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVTbGlkZVwiKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NoYW5nZVNsaWRlcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZWZ0U2xpZGVyU2hpZnQoKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgICBzd2l0Y2hTbGlkZUJsb2NrZWQgPSB0cnVlO1xuICAgICAgICBzd2l0Y2hUb0xlZnRTbGlkZSgpO1xuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5W29iamVjdFNsaWRlclZpc2libGVTbGlkZXMucHJldlNsaWRlXS5jbGFzc0xpc3QuYWRkKFwiaGlkZVNsaWRlXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0KHRpbWVPZkNoYW5naW5nU2xpZGVzKTtcbiAgICAgICAgICAgIHN3aXRjaFNsaWRlQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2xpZGVzRWxlbWVudHNBcnJheVtvYmplY3RTbGlkZXJWaXNpYmxlU2xpZGVzLnByZXZTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVTbGlkZVwiKTtcbiAgICAgICAgfSwgdGltZVRvQ2hhbmdlU2xpZGVzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA8IDQpIHtcbiAgICAgICAgICAgIHRpbWVPZkNoYW5naW5nU2xpZGVzID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyA8ICh0aW1lVG9DaGFuZ2VTbGlkZXMgLyAxMDApICogMTIwKSB7XG4gICAgICAgICAgICB0aW1lVG9DaGFuZ2VTbGlkZXMgPSAodGltZVRvQ2hhbmdlU2xpZGVzIC8gMTAwKSAqIDgwO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2xpZGVzRGlzcGxheSgpO1xuXG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgc3RhcnRBdXRvcGxheSh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBzbGlkZXNFbGVtZW50c0FycmF5LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgdmFsdWUuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dGltZVRvQ2hhbmdlU2xpZGVzfW1zYDtcbiAgICAgICAgICAgIHZhbHVlLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbk5hbWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IGdlc3R1cmVTdGFydGluZ1Bvc2l0aW9uWCA9IDA7XG4gICAgbGV0IHN3aXBlTGVuZ3RoID0gMDtcbiAgICBsZXQgc3dpdGNoU2xpZGVCbG9ja2VkID0gZmFsc2U7XG4gICAgbGV0IGF1dG9scGF5VGltZXIgPSBudWxsO1xuICAgIGxldCBoYXNQc2V1ZG9Ub3VjaE1vdXNlID0gZmFsc2U7XG5cbiAgICBpbml0KCk7XG5cbiAgICBpZiAodG91Y2htb3ZlKSB7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBnZXN0dXJlU3RhcnRpbmdQb3NpdGlvblggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG1vdmVTbGlkZXJUb3VjaCk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc3dpcGVMZW5ndGggPSAwO1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldCh0aW1lT2ZDaGFuZ2luZ1NsaWRlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRvdWNoU2Nyb2xsQmxvY2tlcik7XG5cbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcHNldWRvVG91Y2hNb3ZlU3RhcnQpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBwc2V1ZG9Ub3VjaE1vdmUpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgcHNldWRvVG91Y2hNb3ZlRW5kKTtcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHBzZXVkb1RvdWNoTW92ZUVuZCk7XG4gICAgfVxuXG4gICAgaWYgKGJ1dHRvbkNvbnRyb2wpIHtcbiAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5yaWdodEJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghc3dpdGNoU2xpZGVCbG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgbGVmdFNsaWRlclNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b25Db250cm9sRWxlbWVudHNMaXN0LmxlZnRCdXR0b25Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN3aXRjaFNsaWRlQmxvY2tlZCkge1xuICAgICAgICAgICAgICAgIHJpZ2h0U2xpZGVyU2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgYnV0dG9uQ29udHJvbEVsZW1lbnRzTGlzdC5wYXVzZUJ1dHRvbkNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhdXNlU3dpdGNoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2xpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=