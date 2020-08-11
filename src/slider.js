"use strict";

function createSlider(idElement, {
    autoplay = true,
    timeOfChangingSlides = 5000,
    transitionSpeedSlide = 50,
    buttonControl = true,
    touchmove = true,
    buttonDefaultStyles = true,
    autoWidthSlides = true,
} = {}) {

    if (timeOfChangingSlides < 4) {
        timeOfChangingSlides = 4;
    }

    function itemIndexing(parent) {
        let idElemsArray = Array.from(parent.children).map(value => {
            if (value.tagName !== "INPUT") {
                return value;
            }
            value.style.position = "absolute";
            value.style.overflow = "hidden";
        });

        objectSliderVisibleSlides.afterSlide = idElemsArray.length - 1;
        objectSliderVisibleSlides.centerSlide = 0;
        if (parent.children.length < 3) {
            throw "Слайдер принимает, не менее 3х слайдов";
        } else {
            objectSliderVisibleSlides.beforeSlide = 1;
        }

        idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
        idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = 0;
        idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = sliderWidth + "px";
        return idElemsArray
    }

    function switchToRightSlide() {
        ++objectSliderVisibleSlides.afterSlide;
        ++objectSliderVisibleSlides.centerSlide;
        ++objectSliderVisibleSlides.beforeSlide;

        switch (idElemsArray.length) {
            case objectSliderVisibleSlides.afterSlide :
                objectSliderVisibleSlides.afterSlide = 0;
                break;
            case objectSliderVisibleSlides.centerSlide :
                objectSliderVisibleSlides.centerSlide = 0;
                break;
            case objectSliderVisibleSlides.beforeSlide :
                objectSliderVisibleSlides.beforeSlide = 0;
                break;
        }
        hideExtraSlides();
    }

    function switchToLeftSlide() {
        --objectSliderVisibleSlides.afterSlide;
        --objectSliderVisibleSlides.centerSlide;
        --objectSliderVisibleSlides.beforeSlide;

        switch (-1) {
            case objectSliderVisibleSlides.afterSlide :
                objectSliderVisibleSlides.afterSlide = idElemsArray.length - 1;
                break;
            case objectSliderVisibleSlides.centerSlide :
                objectSliderVisibleSlides.centerSlide = idElemsArray.length - 1;
                break;
            case objectSliderVisibleSlides.beforeSlide :
                objectSliderVisibleSlides.beforeSlide = idElemsArray.length - 1;
                break;
        }
        hideExtraSlides();
    }

    function hideExtraSlides() {
        idElemsArray.forEach(value => value.style.display = "none");

        idElemsArray[objectSliderVisibleSlides.afterSlide].style.display = "block";
        idElemsArray[objectSliderVisibleSlides.centerSlide].style.display = "block";
        idElemsArray[objectSliderVisibleSlides.beforeSlide].style.display = "block";
    }

    function clearTimerList() {
        timerList.forEach((value)=> clearInterval(value));
        timerList = [];
    }

    function beforeSlide() {
        clearTimerList();

        let player = setInterval( () => {
            idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = idElemsArray[objectSliderVisibleSlides.afterSlide].offsetLeft + transitionSpeed + "px";
            idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = idElemsArray[objectSliderVisibleSlides.centerSlide].offsetLeft + transitionSpeed + "px";
            idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = idElemsArray[objectSliderVisibleSlides.beforeSlide].offsetLeft + transitionSpeed + "px";
            if (idElemsArray[objectSliderVisibleSlides.afterSlide].offsetLeft >= 0) {
                clearInterval(player);
                switchToLeftSlide();
                idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
                idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = 0;
                idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = sliderWidth + "px";
            }
        }, 1);
        timerList.push(player);
    }

    function afterSlide() {
        clearTimerList();

        let player = setInterval( () => {
            idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = idElemsArray[objectSliderVisibleSlides.afterSlide].offsetLeft - transitionSpeed + "px";
            idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = idElemsArray[objectSliderVisibleSlides.centerSlide].offsetLeft - transitionSpeed + "px";
            idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = idElemsArray[objectSliderVisibleSlides.beforeSlide].offsetLeft - transitionSpeed + "px";
            if (idElemsArray[objectSliderVisibleSlides.afterSlide].offsetLeft <= -sliderWidth * 2) {
                clearInterval(player);
                switchToRightSlide();
                idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
                idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = 0;
                idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = sliderWidth + "px";
            }
        }, 1);
        timerList.push(player);
    }

    function centerAlignSlide() {

        let player = null;
        if (idElemsArray[objectSliderVisibleSlides.centerSlide].offsetLeft > 0) {
            player = setInterval( () => {
                idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = idElemsArray[objectSliderVisibleSlides.afterSlide].offsetLeft - transitionSpeed + "px";
                idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = idElemsArray[objectSliderVisibleSlides.centerSlide].offsetLeft - transitionSpeed + "px";
                idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = idElemsArray[objectSliderVisibleSlides.beforeSlide].offsetLeft - transitionSpeed + "px";
                if (idElemsArray[objectSliderVisibleSlides.afterSlide].offsetLeft <= -sliderWidth) {
                    clearInterval(player);

                    idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
                    idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = 0;
                    idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = sliderWidth + "px";
                }
            }, 1);

            if (idElemsArray[objectSliderVisibleSlides.centerSlide].offsetLeft < 0) {
                player = setInterval( () => {
                    idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = idElemsArray[objectSliderVisibleSlides.afterSlide].offsetLeft + transitionSpeed + "px";
                    idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = idElemsArray[objectSliderVisibleSlides.centerSlide].offsetLeft + transitionSpeed + "px";
                    idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = idElemsArray[objectSliderVisibleSlides.beforeSlide].offsetLeft + transitionSpeed + "px";
                    if (idElemsArray[objectSliderVisibleSlides.afterSlide].offsetLeft >= -sliderWidth) {
                        clearInterval(player);

                        idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
                        idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = 0;
                        idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = sliderWidth + "px";
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
        idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = idElemsArray[objectSliderVisibleSlides.afterSlide].offsetLeft + distanceTraveled + "px";
        idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = idElemsArray[objectSliderVisibleSlides.centerSlide].offsetLeft + distanceTraveled + "px";
        idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = idElemsArray[objectSliderVisibleSlides.beforeSlide].offsetLeft + distanceTraveled + "px";
        if (event.timeStamp - lastTimeStamp < 10) {
            turnSlide = true
        } else {
            turnSlide = false;
        }
        lastTimeStamp = event.timeStamp;
        if (idElemsArray[objectSliderVisibleSlides.afterSlide].offsetLeft >= 0) {
            switchToLeftSlide();

            idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
            idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = 0;
            idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = sliderWidth + "px";
        }

        if (idElemsArray[objectSliderVisibleSlides.beforeSlide].offsetLeft <= 0) {
            switchToRightSlide();
            hideExtraSlides();
            idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
            idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = 0;
            idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = sliderWidth + "px";
        }
    }

    function checkingStatusCentralSlide() {
        if (idElemsArray[objectSliderVisibleSlides.centerSlide].offsetLeft > sliderWidth / 2 && !turnSlide && stopTurned) {
            beforeSlide();
        } else if (idElemsArray[objectSliderVisibleSlides.centerSlide].offsetLeft < -sliderWidth + sliderWidth / 2 && !turnSlide && stopTurned) {
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
            //Пока не придумал как вычислить необходимый отступ, чтобы центровать изображение. Все что пробую, приводит к башам.
        })
    }

    function crateButtonControl(defaultStyles) {
        if (defaultStyles) {
            let inputLeft = document.createElement("input");
            inputLeft.setAttribute("src", "img/arrow.png");
            inputLeft.setAttribute("type", "image");
            inputLeft.setAttribute("class", "leftButton");
            inputLeft.setAttribute("name", "arrowLeft");
            inputLeft.setAttribute("alt", "arrow left");
            slider.prepend(inputLeft);

            let inputRight = document.createElement("input");
            inputRight.setAttribute("src", "img/arrow.png");
            inputRight.setAttribute("type", "image");
            inputRight.setAttribute("class", "rightButton");
            inputRight.setAttribute("name", "arrowRight");
            inputRight.setAttribute("alt", "arrow right");
            slider.prepend(inputRight);

        } else {
            let inputLeft = document.createElement("input");
            inputLeft.setAttribute("name", "arrowLeft");
            inputLeft.setAttribute("alt", "arrow left");
            inputLeft.setAttribute("type", "button");

            let inputRight = document.createElement("input");
            inputRight.setAttribute("name", "arrowLeft");
            inputRight.setAttribute("alt", "arrow left");
            inputRight.setAttribute("type", "button");

            slider.prepend(inputLeft);
            slider.prepend(inputRight);
        }
    }

    function startAutoplay(timeOfChangingSlides) {
        if (!autoplay) {
            return;
        }
        autolpayTimer = setInterval(() => afterSlide(), timeOfChangingSlides);
    }

    function stopAutoplay() {
        if (!autoplay) {
            return;
        }
        clearInterval(autolpayTimer);
    }

    function autoplayReset(timeOfChangingSlides) {
        if (!autoplay) {
            return;
        }
        clearInterval(autolpayTimer);
        startAutoplay(timeOfChangingSlides);
    }

    function scrollSliderMouseWheel(event) {
        event.preventDefault();
        if (event.wheelDeltaY > 0) {
            clearTimerList();
            beforeSlide();
        } else {
            clearTimerList();
            afterSlide();
        }
    }


    const slider = document.getElementById(idElement);
    const sliderWidth = slider.clientWidth;

    let xStarting = 0;
    let lastTimeStamp = 0;
    let turnSlide = false;
    let stopTurned = false;
    let directionSlideLeft = false;
    let autolpayTimer = null;
    let timerList = [];
    const transitionSpeed = transitionSpeedSlide;
    const objectSliderVisibleSlides = {
        "afterSlide": 0,
        "centerSlide": 1,
        "beforeSlide": 2
    };
    let idElemsArray = itemIndexing(slider);
    hideExtraSlides();

    if (buttonControl) {
        crateButtonControl(buttonDefaultStyles);
    }


    if (autoWidthSlides) {
        automaticSettingPictureWidth();
    }

    if (autoplay) {
        startAutoplay(timeOfChangingSlides);
    }

    hideExtraSlides();
    idElemsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
    idElemsArray[objectSliderVisibleSlides.centerSlide].style.left = 0;
    idElemsArray[objectSliderVisibleSlides.beforeSlide].style.left = sliderWidth + "px";
    slider.style.overflow = "hidden";
    slider.style.position = "relative";
    slider.style.boxSizing = "border-box";


    //###############EVENTS
    //#####################
    //TOUCHMOVE

    if (touchmove) {

        slider.addEventListener("touchstart", event => {
            xStarting = event.touches[0].clientX;
                clearTimerList();
            stopAutoplay();
        });

        slider.addEventListener("touchmove", moveSliderTouch);

        slider.addEventListener("touchend", checkingStatusCentralSlide);
    }

    //MOUSE

    if (buttonControl) {

        slider.querySelector("input[name='arrowRight']").addEventListener("click", switchToPreviousSlideMouse);
        //Пока не придумал альтернативы. Можно перевести на классы думаю.
        slider.querySelector("input[name='arrowLeft']").addEventListener("click", switchToNextSlideMouse);

        slider.addEventListener("wheel", scrollSliderMouseWheel);
    }
}