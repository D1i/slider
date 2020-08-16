"use strict";

import styles from './style.css';

import arrowOfButton from './arrow.svg'

function addButtonControl(slider, buttonControl, buttonDefaultStyles) {

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

    function crateButtonControl(buttonDefaultStyles) {
        if (buttonDefaultStyles) {

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

    const buttonControlElementsList = {
        leftButtonControl: null,
        rightButtonControl: null,
        pauseButtonControl: null
    };

    if (buttonControl) {
        crateButtonControl(buttonDefaultStyles);
    }

    return buttonControlElementsList;
}

export default addButtonControl;