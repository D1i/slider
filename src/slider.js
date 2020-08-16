"use strict";
//Периименовать файл, в index.js
import getDOMDate from './getDOMDate.js';
import addingMissingSlides from './addingMissingSlides.js';
import addButtonControl from './addButtonControl.js';
import setSliderStyles from './setSliderStyles.js';
import setSlidesStyles from './setSlidesStyles.js';

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

    function setSlidesDisplay() {
        slidesElementsArray.forEach(value => {
            value.classList.add(styles.hideSlide);
        });
        slidesElementsArray[objectSliderVisibleSlides.getNext].classList.remove(styles.hideSlide);
        slidesElementsArray[objectSliderVisibleSlides.getCurrent].classList.remove(styles.hideSlide);
        slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.remove(styles.hideSlide);
    }

    function positioningSlides() {
        slidesElementsArray[objectSliderVisibleSlides.getNext].classList.add(styles.slideShiftRight);
        slidesElementsArray[objectSliderVisibleSlides.getNext].classList.remove(styles.slideShiftLeft);
        slidesElementsArray[objectSliderVisibleSlides.getCurrent].classList.add(styles.centerSlide);
        slidesElementsArray[objectSliderVisibleSlides.getCurrent].classList.remove(styles.slideShiftRight, styles.slideShiftLeft);
        slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.add(styles.slideShiftLeft);
        slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.add(styles.slideShiftRight);
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
        slidesElementsArray[objectSliderVisibleSlides.getNext].classList.add(styles.hideSlide);
        setTimeout( () => {
            autoplayReset(timeOfChangingSlides);
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.getNext].classList.remove(styles.hideSlide);
            }, timeToChangeSlides)
    }

    function leftSliderShift() {
        stopAutoplay();
        switchSlideBlocked = true;
        switchToLeftSlide();
        slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.add(styles.hideSlide);
        setTimeout( () => {
            autoplayReset(timeOfChangingSlides);
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.getPrev].classList.remove(styles.hideSlide);
        }, timeToChangeSlides)
    }

    //Убрать в init все, что запускается разу, в том числе и создание переменных.
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

    const {
        sliderElement,
        slidesElementsArray_notProcessed,
        objectSliderVisibleSlides,
        sliderWidth,
        hasError
    } = getDOMDate(idElement);
    if (hasError) {
        return;
    }
    const slidesElementsArray = addingMissingSlides(slidesElementsArray_notProcessed);
    positioningSlides();
    const buttonControlElementsList = addButtonControl(sliderElement, buttonControl, buttonDefaultStyles);
    setSliderStyles(sliderElement, setDefaultMinimumSizes);
    setSlidesStyles(slidesElementsArray);


    init();

    if (touchmove) {
        sliderElement.addEventListener("touchstart", event => {
            gestureStartingPositionX = event.touches[0].clientX;
            stopAutoplay();
        });
        sliderElement.addEventListener("touchmove", moveSliderTouch);
        sliderElement.addEventListener("touchend", () => {
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