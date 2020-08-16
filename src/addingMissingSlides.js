"use strict";

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

export default addingMissingSlides;