"use strict";

function createObjectSliderVisibleSlides(slidesElementsArray) {
    const objectSliderVisibleSlides = {
        _currentSlide: 0,

        get getCurrent() {
            return this._currentSlide;
        },

        getNext() {
            let nextSlide = this.getCurrent;
            nextSlide++;
            if (nextSlide >= slidesElementsArray.length) {
                nextSlide = 0;
            }

            return nextSlide
        },

        getPrev() {
            let prevSlide = this.getCurrent;
            prevSlide--;
            if (0 > prevSlide) {
                prevSlide = slidesElementsArray.length - 1;
            }

            return prevSlide
        },

        goNext() {
            ++this._currentSlide;
            if (this._currentSlide >= slidesElementsArray.length) {
                this._currentSlide = 0;
            }
        },

        goPrev() {
            --this._currentSlide;
            if (0 > this._currentSlide) {
                this._currentSlide = slidesElementsArray.length - 1;
            }
        }
    };
    return objectSliderVisibleSlides;
}

export default createObjectSliderVisibleSlides;