"use strict";

import gettingStartedWithDOM from './gettingStartedWithDOM.js';

import styles from './style.css';

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

    const [slider,
        sliderWidth,
        slidesElementsArray,
        objectSliderVisibleSlides,
        buttonControlElementsList,
    ] = gettingStartedWithDOM(idElement, setDefaultMinimumSizes, buttonControl, buttonDefaultStyles);
    positioningSlides();

    function setSlidesDisplay() {
        slidesElementsArray.forEach(value => {
            value.classList.add(styles.hideSlide);
        });
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove(styles.hideSlide);
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.remove(styles.hideSlide);
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove(styles.hideSlide);
    }

    function positioningSlides() {
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.add(styles.slideShiftRight);
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove(styles.slideShiftLeft);
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.add(styles.centerSlide);
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.remove(styles.slideShiftRight, styles.slideShiftLeft);
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add(styles.slideShiftLeft);
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add(styles.slideShiftRight);
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
            buttonControlElementsList.pauseButtonControl.classList.add(styles.inputPauseNotActive);
            buttonControlElementsList.pauseButtonControl.classList.remove(styles.inputPauseActive);
        } else {
            stopAutoplay();
            buttonControlElementsList.pauseButtonControl.classList.add(styles.inputPauseActive);
            buttonControlElementsList.pauseButtonControl.classList.remove(styles.inputPauseNotActive);
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
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.add(styles.hideSlide);
        setTimeout( () => {
            autoplayReset(timeOfChangingSlides);
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove(styles.hideSlide);
            }, timeToChangeSlides)
    }

    function leftSliderShift() {
        stopAutoplay();
        switchSlideBlocked = true;
        switchToLeftSlide();
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add(styles.hideSlide);
        setTimeout( () => {
            autoplayReset(timeOfChangingSlides);
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove(styles.hideSlide);
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

export default createSlider;