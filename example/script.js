"use strict";

import { mySlider } from "../dist/dist";

// console.log(mySlider);

mySlider.createSlider("firstSlider", {
    autoplay: false,
    timeOfChangingSlides: 2000,
    timeToChangeSlides: 500,
    transitionTimingFunctionName: "ease-in",
    buttonControl: false,
    touchmove: true,
    buttonDefaultStyles: true,
    setDefaultMinimumSizes: true
});
mySlider.createSlider("secondSlider");