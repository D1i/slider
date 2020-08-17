"use strict";

function getDOMDate(idElement) {

    const slider = document.getElementById(idElement);
    if (slider === null) {
        console.log('%c%s',
            'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;',
            `slider | id ${idElement} does not exist`);
        return {hasError: true};
    }

    function getSlidesArray(parent) {
        return Array.from(parent.children).map(value => {
            if (value.tagName !== "INPUT") {
                return value;
            }
        });
    }

    const slidesElementsArray = getSlidesArray(slider);
    if (slidesElementsArray.length === 0) {
        console.log ( '%c%s',
            'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;',
            `slider | container '#${idElement}' is empty`);
        return {hasError: true};
    }

    const sliderWidth = slider.clientWidth;

    const hasError = false;

    return {
        sliderElement: slider,
        slidesElementsArray_notProcessed: slidesElementsArray,
        sliderWidth: sliderWidth,
        hasError: hasError
    }
}

export default getDOMDate;