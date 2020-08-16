"use strict";

import arrowOfButton from './arrow.svg'

import styles from './style.css';

function gettingStartedWithDOM(idElement, setDefaultMinimumSizes, buttonControl, buttonDefaultStyles) {

    const slider = document.getElementById(idElement);
    if (slider === null) {
        console.log ( '%c%s',
            'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;',
            `slider | id ${idElement} does not exist` );
        return [null];
    }

    function getSlidesArray(parent) {
        return Array.from(parent.children).map(value => {
            if (value.tagName !== "INPUT") {
                value.classList.add(styles.slides);
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

    function createButton({type, buttonInnerNode = null, name, alt, classList = []} = {}) {
        let button = null;
        if (buttonInnerNode === null) {
            button = document.createElement("input");
            button.setAttribute("type", type);
            button.setAttribute("name", name);
        } else {
            button = document.createElement("div");
            button.setAttribute("name", `PSEUDO_BUTTON ${name}`);
            button.innerHTML = arrowOfButton;
        }
        classList.forEach(value => button.classList.add(value));
        return button;
    }

    function crateButtonControl(defaultStyles) {
        if (defaultStyles) {

            buttonControlElementsList.rightButtonControl = createButton(
                {
                    type: "button",
                    buttonInnerNode: arrowOfButton,
                    name: "arrowRight",
                    alt: "arrow right",
                    classList: [styles.rightButton, styles.button, styles.buttonShiftSlides]
                });
            slider.append(buttonControlElementsList.rightButtonControl);

            buttonControlElementsList.pauseButtonControl = createButton(
                {
                    type: "button",
                    name: "pause",
                    alt: "input pause",
                    classList: [styles.inputPauseNotActive, styles.inputPause, styles.button]
                });
            slider.append(buttonControlElementsList.pauseButtonControl);

            buttonControlElementsList.leftButtonControl = createButton(
                {
                    type: "button",
                    buttonInnerNode: arrowOfButton,
                    name: "arrowLeft",
                    alt: "arrow left",
                    classList: [styles.button, styles.buttonShiftSlides]
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
            value.classList.add(styles.slides);
        });
    }


    const slidesElementsArray = addingMissingSlides(getSlidesArray(slider));
    if (slidesElementsArray === null) {
         console.log ( '%c%s',
            'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;',
            `slider | container '#${idElement}' is empty`);
        return [null];
    }

    slider.classList.add(styles.slider);
    if (setDefaultMinimumSizes) {
        slider.classList.add(styles.minWidthAndMinHeightSlider);
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

export default gettingStartedWithDOM;