"use strict";

import mySlider from "Dist/dist";

createSlider("firstSlider", {
    autoplay: false,
    timeOfChangingSlides: 2000,
    timeToChangeSlides: 500,
    transitionTimingFunctionName: "ease-in",
    buttonControl: false,
    touchmove: true,
    buttonDefaultStyles: true,
    setDefaultMinimumSizes: true
});
createSlider("secondSlider");