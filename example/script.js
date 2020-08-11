"use strict";

const userSettingObject = {
    autoplay: true,
    timeOfChangingSlides: 5000,
    transitionSpeedSlide: 50,
    buttonContol: true,
    touchmove: true,
    buttonDefaultStyles: true,
    autoWidthSlides: true,
};

createSlider("slider", userSettingObject);

userSettingObject.buttonContol = false;
userSettingObject.touchmove = false;

createSlider("slider-second", {timeOfChangingSlides: 1000, transitionSpeedSlide: 10});