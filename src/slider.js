"use strict";

function createSlider(idElement, {
    autoplay = false,
    timeOfChangingSlides = 5000,
    timeToChangeSlides = 1000,
    transitionTimingFunctionName = "linear",
    buttonControl = false,
    touchmove = false,
    buttonDefaultStyles = false,
} = {}) {


    if (timeOfChangingSlides < 4) {
        timeOfChangingSlides = 4;
    }

    function slidesAddingInArray(parent) {
        Array.from(parent.children).forEach(value => {
            if (value.tagName !== "INPUT") {
                value.style.pointerEvents = "none";
                slidesElementsArray.push(value);
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
            });
        }

        if (slidesElementsArray.length === 3) {
            let firstCloneElement = slidesElementsArray[0].cloneNode(true);
            let secondCloneElement = slidesElementsArray[1].cloneNode(true);
            let thirdCloneElement = slidesElementsArray[2].cloneNode(true);
            slidesElementsArray.push(firstCloneElement);
            slider.append(firstCloneElement);
            slidesElementsArray.push(secondCloneElement);
            slider.append(secondCloneElement);
            slidesElementsArray.push(thirdCloneElement);
            slider.append(thirdCloneElement);
        }


        objectSliderVisibleSlides.nextSlide = slidesElementsArray.length - 1;
        objectSliderVisibleSlides.currentSlide = 0;
        objectSliderVisibleSlides.prevSlide = 1;

        objectSliderVisibleSlides.prevSlide = 1;

        slidesElementsArray[objectSliderVisibleSlides.nextSlide].style.left = -sliderWidth + "px";
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = 0;
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = sliderWidth + "px";
        window.slidesElementsArray = slidesElementsArray;
    }

    function positioningSlides() {
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].style.left = `${sliderWidth}px`;
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.left = `0`;
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.left = `-${sliderWidth}px`;
        // К сожалению, от style.left полность отказаться пока не могу.
    }

    function hideExtraSlides() {
        slidesElementsArray.forEach(value => {value.style.display = "none";
            debugger
        });
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].style.display = "block";
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.display = "block";
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.display = "block";

    }

    function switchToLeftSlide() {
        ++objectSliderVisibleSlides.nextSlide;
        ++objectSliderVisibleSlides.currentSlide;
        ++objectSliderVisibleSlides.prevSlide;

        switch (slidesElementsArray.length) {
            case objectSliderVisibleSlides.nextSlide :
                objectSliderVisibleSlides.nextSlide = 0;
                break;
            case objectSliderVisibleSlides.currentSlide :
                objectSliderVisibleSlides.currentSlide = 0;
                break;
            case objectSliderVisibleSlides.prevSlide :
                objectSliderVisibleSlides.prevSlide = 0;
                break;
        }
        hideExtraSlides();
        positioningSlides();
    }

    function switchToRightSlide() {
        --objectSliderVisibleSlides.nextSlide;
        --objectSliderVisibleSlides.currentSlide;
        --objectSliderVisibleSlides.prevSlide;

        switch (-1) {
            case objectSliderVisibleSlides.nextSlide :
                objectSliderVisibleSlides.nextSlide = slidesElementsArray.length - 1;
                break;
            case objectSliderVisibleSlides.currentSlide :
                objectSliderVisibleSlides.currentSlide = slidesElementsArray.length - 1;
                break;
            case objectSliderVisibleSlides.prevSlide :
                objectSliderVisibleSlides.prevSlide = slidesElementsArray.length - 1;
                break;
        }
        hideExtraSlides();
        positioningSlides();
    }

    function clearTimerList() {
        timerList.forEach((value)=> clearInterval(value));
        timerList = [];
    }

    function moveSliderTouch(event) {
        if (switchSlideBlocked) {
            return;
        }

        const clientX = event.touches[0].clientX;
        distanceTraveled = 0;

        if (clientX > xStarting) {
            distanceTraveled += clientX - xStarting;
        } else {
            distanceTraveled += -(xStarting - clientX);
        }
        console.log(distanceTraveled)


        if (distanceTraveled > sliderWidth / 3) {
            leftSliderShift();
        }

        if (distanceTraveled < -sliderWidth / 3) {
            rightSliderShift();
        }

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
            inputLeft.style.zIndex = "10";
            slider.prepend(inputLeft);

            let inputRight = document.createElement("input");
            inputRight.setAttribute("type", "image");
            inputRight.setAttribute("src", "img/arrow.png");
            inputRight.setAttribute("class", "rightButton");
            inputRight.setAttribute("name", "arrowRight");
            inputRight.setAttribute("alt", "arrow right");
            inputRight.style.zIndex = "10";
            slider.prepend(inputRight);

            let inputPause = document.createElement("input");
            inputPause.setAttribute("type", "button");
            inputPause.setAttribute("class", "inputPauseNotActive");
            inputPause.setAttribute("name", "pause");
            inputPause.setAttribute("alt", "input pause");
            inputPause.style.zIndex = "10";
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
        autolpayTimer = setInterval(() => rightSliderShift(), timeOfChangingSlides);
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
        distanceTraveled = 0;


        autoplayReset(timeOfChangingSlides);
    }

    function rightSliderShift() {
        switchSlideBlocked = true;

        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.add("sliderShiftLeft");
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.add("sliderShiftLeft");
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add("sliderShiftLeft");

        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove("nextSlideShiftLeft");
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.remove("currentSlideShiftLeft");
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove("prevSlideShiftLeft");

        switchToRightSlide();

        setTimeout( () => {
            slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove("sliderShiftLeft");
            slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.remove("sliderShiftLeft");
            slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove("sliderShiftLeft");
            switchSlideBlocked = false;
            pseudoTouchMoveEnd();
            }, timeToChangeSlides)
    }

    function leftSliderShift() {
        switchSlideBlocked = true;
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.add("sliderShiftRight");
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.add("sliderShiftRight");
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add("sliderShiftRight");

        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove("nextSlideShiftLeft");
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.remove("currentSlideShiftLeft");
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove("prevSlideShiftLeft");

        switchToLeftSlide();

        setTimeout( () => {
            slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove("sliderShiftRight");
            slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.remove("sliderShiftRight");
            slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove("sliderShiftRight");
            switchSlideBlocked = false;
            pseudoTouchMoveEnd();
        }, timeToChangeSlides)
    }

    const slider = document.getElementById(idElement);
    if (slider === null) {
        throw `| id ${idElement} does not exist`
    }

    const sliderWidth = slider.clientWidth;
    const sliderHeight = slider.clientHeight;
    let xStarting = 0;
    let distanceTraveled = 0;
    let switchSlideBlocked = false;
    let pauseStatus = false;
    let autolpayTimer = null;
    let hasPseudoTouchMouse = false;
    let timerList = [];
    const objectSliderVisibleSlides = {
        "nextSlide": 0,
        "currentSlide": 1,
        "prevSlide": 2
    };
    let slidesElementsArray = [];

    slidesAddingInArray(slider);
    hideExtraSlides();

    slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.add("nextSlideShiftLeft");
    slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.add("currentSlideShiftLeft");
    slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add("prevSlideShiftLeft");
    slider.style.overflow = "hidden";
    slider.style.position = "relative";
    slider.style.boxSizing = "border-box";

    if (buttonControl) {
        crateButtonControl(buttonDefaultStyles);
    }

    //autoWidthSlides
    //###############

    automaticSettingPictureWidth();
    window.addEventListener("load", automaticSettingPictureHeight);

    //###############

    if (autoplay) {
        startAutoplay(timeOfChangingSlides);
    }

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

        slider.addEventListener("touchend", () => {
        distanceTraveled = 0
        });

        //PSEUDO TOUCHMOVE

        slider.addEventListener("mousedown", pseudoTouchMoveStart);

        slider.addEventListener("mousemove", pseudoTouchMove);

        slider.addEventListener("mouseup", pseudoTouchMoveEnd);

        slider.addEventListener("mouseleave", pseudoTouchMoveEnd);
    }

    //MOUSE

    if (buttonControl) {

        slider.querySelector("input[name='arrowRight']").addEventListener("click", () => {
            if (!switchSlideBlocked) {
                leftSliderShift();
            }
        });
        //Пока не придумал альтернативы. Можно перевести на классы думаю.
        slider.querySelector("input[name='arrowLeft']").addEventListener("click", () => {
            if (!switchSlideBlocked) {
                rightSliderShift();
            }
        });

        slider.querySelector("input[name='pause']").addEventListener("click", pauseSwitch);

    }

    //#########################################asyncCode######################################
    //########################################################################################
    //########################################################################################

    setTimeout(() => {slidesElementsArray.forEach(value => {
        value.style.transitionDuration = `${timeToChangeSlides}ms`;
        value.style.transitionTimingFunction = transitionTimingFunctionName;
    })}, 1);
}