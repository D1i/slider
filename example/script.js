"use strict";

import mySlider from "../dist/dist.js";

mySlider("firstSlider", {
    autoplay: false,
    timeOfChangingSlides: 2000,
    timeToChangeSlides: 500,
    transitionTimingFunctionName: "ease-in",
    buttonControl: false,
    touchmove: true,
    buttonDefaultStyles: true,
    setDefaultMinimumSizes: true
});
mySlider("secondSlider");