"use strict";

createSlider("firstSlider", {
    autoplay: false,
    timeOfChangingSlides: 2000,
    timeToChangeSlides: 500,
    transitionTimingFunctionName: "easeInOutCubic",
    buttonControl: false,
    touchmove: true,
    buttonDefaultStyles: true,
});
createSlider("secondSlider");