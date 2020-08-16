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
    if (slidesElementsArray === null) {
        console.log ( '%c%s',
            'font-size: 16px; color: red; background-color: #ffa7a0; padding: 2px 5px; border: 1px solid #ccc; margin: 20px auto;',
            `slider | container '#${idElement}' is empty`);
        return {hasError: true};
    }

    const objectSliderVisibleSlides  = {
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

        goNext() {
            ++this._nextSlide;
            ++this._currentSlide;
            ++this._prevSlide;
            switch (slidesElementsArray.length) {
                case this._nextSlide :
                    this._nextSlide = 0;
                    break;
                case this._currentSlide :
                    this._currentSlide = 0;
                    break;
                case this._prevSlide :
                    this._prevSlide = 0;
                    break;
            }
        },

        goPrev() {
            --this._nextSlide;
            --this._currentSlide;
            --this._prevSlide;
            switch (-1) {
                case this._nextSlide :
                    this._nextSlide = slidesElementsArray.length - 1;
                    break;
                case this._currentSlide :
                    this._currentSlide = slidesElementsArray.length - 1;
                    break;
                case this._prevSlide :
                    this._prevSlide = slidesElementsArray.length - 1;
                    break;
            }
        }
    };
    const sliderWidth = slider.clientWidth;

    const hasError = false;

    return {
        sliderElement: slider,
        slidesElementsArray_notProcessed: slidesElementsArray,
        objectSliderVisibleSlides: objectSliderVisibleSlides,
        sliderWidth: sliderWidth,
        hasError: hasError
    }
}

export default getDOMDate;