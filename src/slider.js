"use strict";

function createSlider(idElement, objectParameter) {

    function itemIndexing(parent) {
        idElemsArray = Array.from(parent.children).filter(value => {
            if (value.tagName !== "INPUT") {
                return true;
            }
            value.style.position = "absolute";
            value.style.overflow = "hidden";
        });

        objectSlider.afterSlide = idElemsArray.length - 1;
        objectSlider.centerSlide = 0;
        if (parent.children.length < 3) {
            alert("Слайдер принимает, не менее 3х слайдов");
        } else {
            objectSlider.beforeSlide = 1;
        }

        hideExtraSlides();
        idElemsArray[objectSlider.afterSlide].style.left = -sliderWidth + "px";
        idElemsArray[objectSlider.centerSlide].style.left = 0 + "px";
        idElemsArray[objectSlider.beforeSlide].style.left = sliderWidth + "px";
    }

    function switchToRightSlide() {
        ++objectSlider.afterSlide;
        ++objectSlider.centerSlide;
        ++objectSlider.beforeSlide;

        switch (idElemsArray.length) {
            case objectSlider.afterSlide :
                objectSlider.afterSlide = 0;
                break;
            case objectSlider.centerSlide :
                objectSlider.centerSlide = 0;
                break;
            case objectSlider.beforeSlide :
                objectSlider.beforeSlide = 0;
                break;
        }
        hideExtraSlides();
    }

    function switchToLeftSlide() {
        --objectSlider.afterSlide;
        --objectSlider.centerSlide;
        --objectSlider.beforeSlide;

        switch (-1) {
            case objectSlider.afterSlide :
                objectSlider.afterSlide = idElemsArray.length - 1;
                break;
            case objectSlider.centerSlide :
                objectSlider.centerSlide = idElemsArray.length - 1;
                break;
            case objectSlider.beforeSlide :
                objectSlider.beforeSlide = idElemsArray.length - 1;
                break;
        }
        hideExtraSlides();
    }

    function hideExtraSlides() {
        idElemsArray.forEach(value => value.style.display = "none");

        idElemsArray[objectSlider.afterSlide].style.display = "block";
        idElemsArray[objectSlider.centerSlide].style.display = "block";
        idElemsArray[objectSlider.beforeSlide].style.display = "block";
    }

    function clearTimerList() {
        timerList.forEach((value)=> clearInterval(value));
        timerList = [];
    }

    function beforeSlide() {
        clearTimerList();

        let player = setInterval( () => {
            idElemsArray[objectSlider.afterSlide].style.left = idElemsArray[objectSlider.afterSlide].offsetLeft + transitionSpeed + "px";
            idElemsArray[objectSlider.centerSlide].style.left = idElemsArray[objectSlider.centerSlide].offsetLeft + transitionSpeed + "px";
            idElemsArray[objectSlider.beforeSlide].style.left = idElemsArray[objectSlider.beforeSlide].offsetLeft + transitionSpeed + "px";
            if (idElemsArray[objectSlider.afterSlide].offsetLeft >= 0) {
                clearInterval(player);
                switchToLeftSlide();
                idElemsArray[objectSlider.afterSlide].style.left = -sliderWidth + "px";
                idElemsArray[objectSlider.centerSlide].style.left = 0 + "px";
                idElemsArray[objectSlider.beforeSlide].style.left = sliderWidth + "px";
            }
        }, 1);
        timerList.push(player);
    }

    function afterSlide() {
        clearTimerList();

        let player = setInterval( () => {
            idElemsArray[objectSlider.afterSlide].style.left = idElemsArray[objectSlider.afterSlide].offsetLeft - transitionSpeed + "px";
            idElemsArray[objectSlider.centerSlide].style.left = idElemsArray[objectSlider.centerSlide].offsetLeft - transitionSpeed + "px";
            idElemsArray[objectSlider.beforeSlide].style.left = idElemsArray[objectSlider.beforeSlide].offsetLeft - transitionSpeed + "px";
            if (idElemsArray[objectSlider.afterSlide].offsetLeft <= -sliderWidth * 2) {
                clearInterval(player);
                switchToRightSlide();
                idElemsArray[objectSlider.afterSlide].style.left = -sliderWidth + "px";
                idElemsArray[objectSlider.centerSlide].style.left = 0 + "px";
                idElemsArray[objectSlider.beforeSlide].style.left = sliderWidth + "px";
            }
        }, 1);
        timerList.push(player);
    }

    function centerAlignSlide() {

        let player = null;
        if (idElemsArray[objectSlider.centerSlide].offsetLeft > 0) {
            player = setInterval( () => {
                idElemsArray[objectSlider.afterSlide].style.left = idElemsArray[objectSlider.afterSlide].offsetLeft - transitionSpeed + "px";
                idElemsArray[objectSlider.centerSlide].style.left = idElemsArray[objectSlider.centerSlide].offsetLeft - transitionSpeed + "px";
                idElemsArray[objectSlider.beforeSlide].style.left = idElemsArray[objectSlider.beforeSlide].offsetLeft - transitionSpeed + "px";
                if (idElemsArray[objectSlider.afterSlide].offsetLeft <= -sliderWidth) {
                    clearInterval(player);

                    idElemsArray[objectSlider.afterSlide].style.left = -sliderWidth + "px";
                    idElemsArray[objectSlider.centerSlide].style.left = 0 + "px";
                    idElemsArray[objectSlider.beforeSlide].style.left = sliderWidth + "px";
                }
            }, 1);

            if (idElemsArray[objectSlider.centerSlide].offsetLeft < 0) {
                player = setInterval( () => {
                    idElemsArray[objectSlider.afterSlide].style.left = idElemsArray[objectSlider.afterSlide].offsetLeft + transitionSpeed + "px";
                    idElemsArray[objectSlider.centerSlide].style.left = idElemsArray[objectSlider.centerSlide].offsetLeft + transitionSpeed + "px";
                    idElemsArray[objectSlider.beforeSlide].style.left = idElemsArray[objectSlider.beforeSlide].offsetLeft + transitionSpeed + "px";
                    if (idElemsArray[objectSlider.afterSlide].offsetLeft >= -sliderWidth) {
                        clearInterval(player);

                        idElemsArray[objectSlider.afterSlide].style.left = -sliderWidth + "px";
                        idElemsArray[objectSlider.centerSlide].style.left = 0 + "px";
                        idElemsArray[objectSlider.beforeSlide].style.left = sliderWidth + "px";
                    }
                }, 1);
            }
        }
    }

    function moveSliderTouch(event) {
        const clientX = event.touches[0].clientX;
        let distanceTraveled = 0;
        if (clientX > xStarting) {
            distanceTraveled = clientX - xStarting;
            directionSlideLeft = true
        } else {
            directionSlideLeft = false;
            distanceTraveled = -(xStarting - clientX);
        }
        xStarting += distanceTraveled;
        idElemsArray[objectSlider.afterSlide].style.left = idElemsArray[objectSlider.afterSlide].offsetLeft + distanceTraveled + "px";
        idElemsArray[objectSlider.centerSlide].style.left = idElemsArray[objectSlider.centerSlide].offsetLeft + distanceTraveled + "px";
        idElemsArray[objectSlider.beforeSlide].style.left = idElemsArray[objectSlider.beforeSlide].offsetLeft + distanceTraveled + "px";
        if (event.timeStamp - lastTimeStamp < 10) {
            turnSlide = true
        } else {
            turnSlide = false;
        }
        lastTimeStamp = event.timeStamp;
        if (idElemsArray[objectSlider.afterSlide].offsetLeft >= 0) {
            switchToLeftSlide();

            idElemsArray[objectSlider.afterSlide].style.left = -sliderWidth + "px";
            idElemsArray[objectSlider.centerSlide].style.left = 0 + "px";
            idElemsArray[objectSlider.beforeSlide].style.left = sliderWidth + "px";
        }

        if (idElemsArray[objectSlider.beforeSlide].offsetLeft <= 0) {
            switchToRightSlide();
            hideExtraSlides();
            idElemsArray[objectSlider.afterSlide].style.left = -sliderWidth + "px";
            idElemsArray[objectSlider.centerSlide].style.left = 0 + "px";
            idElemsArray[objectSlider.beforeSlide].style.left = sliderWidth + "px";
        }
    }

    function checkingStatusCentralSlide() {
        if (idElemsArray[objectSlider.centerSlide].offsetLeft > sliderWidth / 2 && !turnSlide && stopTurned) {
            beforeSlide();
        } else if (idElemsArray[objectSlider.centerSlide].offsetLeft < -sliderWidth + sliderWidth / 2 && !turnSlide && stopTurned) {
            afterSlide();
        } else if (!turnSlide && stopTurned) {
            centerAlignSlide();
        }

        if (turnSlide) {
            stopTurned = true;
            if (directionSlideLeft) {
                beforeSlide();
            } else {
                afterSlide();
            }
        }
        startAutoplay(timeOfChangingSlides);
    }

    function switchToNextSlideMouse() {
        afterSlide();
        autoplayReset(timeOfChangingSlides)
    }

    function switchToPreviousSlideMouse() {
        beforeSlide();
        autoplayReset(timeOfChangingSlides)
    }

    function automaticSettingPictureWidth() {
        idElemsArray.forEach(value => {
            value.style.position = "absolute";
            value.style.overflow = "hidden";
            value.style.width = sliderWidth + "px";
        })
    }

    function crateButtonControl(defaultStyles) {
        if (defaultStyles) {
            slider.innerHTML += `<input src="img/arrow.png" style='width: 30px; height: 60px; z-index: 1; position: absolute; right: 10px; top: calc(50% - 60px); outline: none;' name='arrowLeft' alt='arrow left' type='image'>
                             <input src="img/arrow.png" style='width: 30px; height: 60px; z-index: 1; position: absolute; left: 10px; top: calc(50% - 60px); outline: none; transform: rotateY(180deg);' name='arrowRight' alt='arrow right' type='image'>`;
        } else {
            slider.innerHTML += "<input name='arrowLeft' alt='arrow left' type='button'><input name='arrowRight' alt='arrow right' type='button'>";
        }
    }

    function startAutoplay(timeOfChangingSlides) {
        if (!objectParameter.autoplay) {
            return;
        }
        autolpayTimer = setInterval(() => afterSlide(), timeOfChangingSlides);
    }

    function stopAutoplay() {
        if (!objectParameter.autoplay) {
            return;
        }
        clearInterval(autolpayTimer);
    }

    function autoplayReset(timeOfChangingSlides) {
        if (!objectParameter.autoplay) {
            return;
        }
        clearInterval(autolpayTimer);
        startAutoplay(timeOfChangingSlides);
    }


    const slider = document.getElementById(idElement);
    const sliderWidth = slider.clientWidth;

    let xStarting = 0;
    let lastTimeStamp = 0;
    let turnSlide = false;
    let stopTurned = false;
    let directionSlideLeft = false;
    let idElemsArray = [];
    let autolpayTimer = null;
    let timerList = [];
    const timeOfChangingSlides = objectParameter.timeOfChangingSlides;
    const buttonDefaultStyles = objectParameter.buttonDefaultStyles;
    const transitionSpeed = objectParameter.transitionSpeedSlide;
    const objectSlider = {
        "afterSlide": 0,
        "centerSlide": 1,
        "beforeSlide": 2
    };

    if (objectParameter.buttonContol) {
        crateButtonControl(buttonDefaultStyles);
    }

    itemIndexing(slider);

    if (objectParameter.autoWidthSlides) {
        automaticSettingPictureWidth();
    }

    if (objectParameter.autoplay) {
        startAutoplay(timeOfChangingSlides);
    }

    hideExtraSlides();
    idElemsArray[objectSlider.afterSlide].style.left = -sliderWidth + "px";
    idElemsArray[objectSlider.centerSlide].style.left = 0 + "px";
    idElemsArray[objectSlider.beforeSlide].style.left = sliderWidth + "px";
    slider.style.overflow = "hidden";
    slider.style.position = "relative";
    slider.style.boxSizing = "border-box";


    //###############EVENTS
    //#####################
    //TOUCHMOVE

    if (objectParameter.touchmove) {

        slider.addEventListener("touchstart", event => {
            xStarting = event.touches[0].clientX;
            clearTimerList();
            stopAutoplay();
        });

        slider.addEventListener("touchmove", moveSliderTouch);

        slider.addEventListener("touchend", checkingStatusCentralSlide);
    }

    //MOUSE

    if (objectParameter.buttonContol) {

        slider.querySelector("input[name='arrowRight']").addEventListener("click", switchToPreviousSlideMouse);

        slider.querySelector("input[name='arrowLeft']").addEventListener("click", switchToNextSlideMouse);
    }
}