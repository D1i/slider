"use strict";

function createSlider(idElement, {
    autoplay = false,
    timeOfChangingSlides = 5000,
    transitionSpeedSlide = 50,
    buttonControl = false,
    touchmove = false,
    buttonDefaultStyles = false,
    autoWidthSlides = true,
} = {}) {


    if (timeOfChangingSlides < 4) {
        timeOfChangingSlides = 4;
    }

    function slidesAddingInArray(parent) {
        let slidesElementsArray = Array.from(parent.children).map(value => {
            if (value.tagName !== "INPUT") {
                value.style.pointerEvents = "none";
                return value;
            }
        });

        if (slidesElementsArray.length === 0) {
                throw `| container '#${idElement}' is empty`
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

            slidesElementsArray.map(value => {
                let cloneElement = value.cloneNode(true);
                slidesElementsArray.push(cloneElement);
                slider.append(cloneElement);
            })

        }


        objectSliderVisibleSlides.afterSlide = slidesElementsArray.length - 1;
        objectSliderVisibleSlides.currentSlide = 0;
        objectSliderVisibleSlides.prevSlide = 1;

        objectSliderVisibleSlides.prevSlide = 1;

        slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = 0;
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = sliderWidth + "px";
        window.slidesElementsArray = slidesElementsArray;
        return slidesElementsArray
    }

    function switchToRightSlide() {
        ++objectSliderVisibleSlides.afterSlide;
        ++objectSliderVisibleSlides.currentSlide;
        ++objectSliderVisibleSlides.prevSlide;

        switch (slidesElementsArray.length) {
            case objectSliderVisibleSlides.afterSlide :
                objectSliderVisibleSlides.afterSlide = 0;
                break;
            case objectSliderVisibleSlides.currentSlide :
                objectSliderVisibleSlides.currentSlide = 0;
                break;
            case objectSliderVisibleSlides.prevSlide :
                objectSliderVisibleSlides.prevSlide = 0;
                break;
        }
        hideExtraSlides();
    }

    function switchToLeftSlide() {
        --objectSliderVisibleSlides.afterSlide;
        --objectSliderVisibleSlides.currentSlide;
        --objectSliderVisibleSlides.prevSlide;

        switch (-1) {
            case objectSliderVisibleSlides.afterSlide :
                objectSliderVisibleSlides.afterSlide = slidesElementsArray.length - 1;
                break;
            case objectSliderVisibleSlides.currentSlide :
                objectSliderVisibleSlides.currentSlide = slidesElementsArray.length - 1;
                break;
            case objectSliderVisibleSlides.prevSlide :
                objectSliderVisibleSlides.prevSlide = slidesElementsArray.length - 1;
                break;
        }
        hideExtraSlides();
    }

    function hideExtraSlides() {
        slidesElementsArray.forEach(value => value.style.display = "none");

        slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.display = "block";
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.display = "block";
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.display = "block";
    }

    function clearTimerList() {
        timerList.forEach((value)=> clearInterval(value));
        timerList = [];
    }

    function prevSlide() {
        clearTimerList();

        let player = setInterval( () => {
            slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.afterSlide].offsetLeft + transitionSpeed + "px";
            slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.currentSlide].offsetLeft + transitionSpeed + "px";
            slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.prevSlide].offsetLeft + transitionSpeed + "px";
            if (slidesElementsArray[objectSliderVisibleSlides.afterSlide].offsetLeft >= 0) {
                clearInterval(player);
                switchToLeftSlide();
                slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
                slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = 0;
                slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = sliderWidth + "px";
            }
        }, 1);
        timerList.push(player);
    }

    function afterSlide() {
        clearTimerList();

        let player = setInterval( () => {
            slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.afterSlide].offsetLeft - transitionSpeed + "px";
            slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.currentSlide].offsetLeft - transitionSpeed + "px";
            slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.prevSlide].offsetLeft - transitionSpeed + "px";
            if (slidesElementsArray[objectSliderVisibleSlides.afterSlide].offsetLeft <= -sliderWidth * 2) {
                clearInterval(player);
                switchToRightSlide();
                slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
                slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = 0;
                slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = sliderWidth + "px";
            }
        }, 1);
        timerList.push(player);
    }

    function centerAlignSlide() {
        let player = null;
        if (slidesElementsArray[objectSliderVisibleSlides.currentSlide].offsetLeft > 0) {
            player = setInterval( () => {
                slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.afterSlide].offsetLeft - transitionSpeed + "px";
                slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.currentSlide].offsetLeft - transitionSpeed + "px";
                slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.prevSlide].offsetLeft - transitionSpeed + "px";
                if (slidesElementsArray[objectSliderVisibleSlides.afterSlide].offsetLeft <= -sliderWidth) {
                    clearInterval(player);

                    slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
                    slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = 0;
                    slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = sliderWidth + "px";
                }
            }, 1);
        }
        if (slidesElementsArray[objectSliderVisibleSlides.currentSlide].offsetLeft < 0) {
            player = setInterval( () => {
                slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.afterSlide].offsetLeft + transitionSpeed + "px";
                slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.currentSlide].offsetLeft + transitionSpeed + "px";
                slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.prevSlide].offsetLeft + transitionSpeed + "px";
                if (slidesElementsArray[objectSliderVisibleSlides.afterSlide].offsetLeft >= -sliderWidth) {
                    clearInterval(player);

                    slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
                    slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = 0;
                    slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = sliderWidth + "px";
                }
            }, 1);
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
        slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.afterSlide].offsetLeft + distanceTraveled + "px";
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.currentSlide].offsetLeft + distanceTraveled + "px";
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = slidesElementsArray[objectSliderVisibleSlides.prevSlide].offsetLeft + distanceTraveled + "px";
        turnSlide = event.timeStamp - lastTimeStamp < 10;
        lastTimeStamp = event.timeStamp;
        if (slidesElementsArray[objectSliderVisibleSlides.afterSlide].offsetLeft >= 0) {
            switchToLeftSlide();

            slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
            slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = 0;
            slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = sliderWidth + "px";
        }

        if (slidesElementsArray[objectSliderVisibleSlides.prevSlide].offsetLeft <= 0) {
            switchToRightSlide();
            hideExtraSlides();
            slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
            slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = 0;
            slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = sliderWidth + "px";
        }
    }

    function isSwitchcurrentSlide() {

        if (slidesElementsArray[objectSliderVisibleSlides.currentSlide].offsetLeft > sliderWidth / 2 && !turnSlide && stopTurned) {
            prevSlide();
        } else if (slidesElementsArray[objectSliderVisibleSlides.currentSlide].offsetLeft < -sliderWidth + sliderWidth / 2 && !turnSlide && stopTurned) {
            afterSlide();
        } else if (!turnSlide && stopTurned) {
            centerAlignSlide();
        }

        if (turnSlide) {
            stopTurned = true;
            if (directionSlideLeft) {
                prevSlide();
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
        prevSlide();
        autoplayReset(timeOfChangingSlides)
    }

    function automaticSettingPictureWidth() {
        slidesElementsArray.forEach(value => {
            value.style.position = "absolute";
            value.style.overflow = "hidden";
            value.style.width = sliderWidth + "px";
        });
        hideExtraSlides();
    }

    function automaticSettingPictureHeight() {
        slidesElementsArray.forEach(value => {
            value.style.display = "block";
            value.style.top = `${((Math.max(value.clientHeight, value.scrollHeight) - sliderHeight) / 2) * -1}px`;
            console.log(`${Math.max(value.clientHeight, value.scrollHeight)}`)
        });
        hideExtraSlides()
    }

    function crateButtonControl(defaultStyles) {
        if (defaultStyles) {
            let inputLeft = document.createElement("input");
            inputLeft.setAttribute("type", "image");
            inputLeft.setAttribute("src", "img/arrow.png");
            inputLeft.setAttribute("class", "leftButton");
            inputLeft.setAttribute("name", "arrowLeft");
            inputLeft.setAttribute("alt", "arrow left");
            slider.prepend(inputLeft);

            let inputRight = document.createElement("input");
            inputRight.setAttribute("type", "image");
            inputRight.setAttribute("src", "img/arrow.png");
            inputRight.setAttribute("class", "rightButton");
            inputRight.setAttribute("name", "arrowRight");
            inputRight.setAttribute("alt", "arrow right");
            slider.prepend(inputRight);

            let inputPause = document.createElement("input");
            inputPause.setAttribute("type", "button");
            inputPause.setAttribute("class", "inputPauseNotActive");
            inputPause.setAttribute("name", "pause");
            inputPause.setAttribute("alt", "input pause");
            slider.prepend(inputPause);

        } else {
            let inputLeft = document.createElement("input");
            inputLeft.setAttribute("name", "arrowLeft");
            inputLeft.setAttribute("alt", "arrow left");
            inputLeft.setAttribute("type", "button");

            let inputRight = document.createElement("input");
            inputRight.setAttribute("type", "button");
            inputRight.setAttribute("name", "arrowLeft");
            inputRight.setAttribute("alt", "arrow left");

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

    function pauseSwitch() {
        if (pauseStatus) {
            autoplay = true;
            stopAutoplay();
            startAutoplay(timeOfChangingSlides);
            slider.querySelector("input[name='pause']").setAttribute("class", "inputPauseNotActive");
        } else {
            stopAutoplay();
            autoplay = false;
            slider.querySelector("input[name='pause']").setAttribute("class", "inputPauseActive");
        }

        pauseStatus = !pauseStatus
    }

    function pseudoTouchMove(event) {
        event.preventDefault();
        if (hasPseudoTouchMouse) {
            let pseudoEvent = {touches: [{clientX: 0},]};
            pseudoEvent.touches[0].clientX = event.clientX;
            moveSliderTouch(pseudoEvent);
        }
    }

    function pseudoTouchMoveStart(event) {
        hasPseudoTouchMouse = true;
        xStarting = event.clientX;
        stopAutoplay()
    }

    function pseudoTouchMoveEnd() {
        hasPseudoTouchMouse = false;

        if (slidesElementsArray[objectSliderVisibleSlides.currentSlide].offsetLeft > sliderWidth / 2) {
            prevSlide();
        } else if (slidesElementsArray[objectSliderVisibleSlides.currentSlide].offsetLeft < -sliderWidth + sliderWidth / 2) {
            afterSlide();
        } else {
            centerAlignSlide();
        }

        autoplayReset(timeOfChangingSlides);
    }

    const slider = document.getElementById(idElement);
    if (slider === null) {
        throw `| id ${idElement} does not exist`
    }
    const sliderWidth = slider.clientWidth;
    const sliderHeight = slider.clientHeight;

    let xStarting = 0;
    let lastTimeStamp = 0;
    let turnSlide = false;
    let stopTurned = false;
    let pauseStatus = false;
    let directionSlideLeft = false;
    let autolpayTimer = null;
    let hasPseudoTouchMouse = false;
    let timerList = [];
    const transitionSpeed = transitionSpeedSlide;
    const objectSliderVisibleSlides = {
        "afterSlide": 0,
        "currentSlide": 1,
        "prevSlide": 2
    };
    let slidesElementsArray = slidesAddingInArray(slider);
    hideExtraSlides();

    if (buttonControl) {
        crateButtonControl(buttonDefaultStyles);
    }


    if (autoWidthSlides) {
        automaticSettingPictureWidth();
        window.addEventListener("load", automaticSettingPictureHeight);
    }
    window.addEventListener("load", () => {console.log('LOADED')});

    if (autoplay) {
        startAutoplay(timeOfChangingSlides);
    }

    hideExtraSlides();
    slidesElementsArray[objectSliderVisibleSlides.afterSlide].style.left = -sliderWidth + "px";
    slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = 0;
    slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = sliderWidth + "px";
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

        slider.addEventListener("touchend", isSwitchcurrentSlide);

        //PSEUDO TOUCHMOVE
        slider.addEventListener("mousedown", pseudoTouchMoveStart);

        slider.addEventListener("mousemove", pseudoTouchMove);

        slider.addEventListener("mouseup", pseudoTouchMoveEnd);

        slider.addEventListener("mouseleave", pseudoTouchMoveEnd);
    }

    //MOUSE

    if (buttonControl) {

        slider.querySelector("input[name='arrowRight']").addEventListener("click", switchToPreviousSlideMouse);
        //Пока не придумал альтернативы. Можно перевести на классы думаю.
        slider.querySelector("input[name='arrowLeft']").addEventListener("click", switchToNextSlideMouse);

        slider.querySelector("input[name='pause']").addEventListener("click", pauseSwitch);

    }
}