"use strict";

//Проблемы, которые я ещё не решил.
//1) при скорости переключения слайдев, равной от 80%, от времени переключения слайдев,
//при переключении на левый, появляется пустое пространство между слайдеми.
//Причина не ясна )).

function createSlider(idElement, {
    autoplay = true,
    timeOfChangingSlides = 5000,
    timeToChangeSlides = 1000,
    transitionTimingFunctionName = "linear",
    buttonControl = true,
    touchmove = true,
    buttonDefaultStyles = true,
    setDefaultMinimumSizes = true,
} = {}) {

    function getSlidesArray(parent) {
        return Array.from(parent.children).map(value => {
            if (value.tagName !== "INPUT") {
                value.classList.add("slides");
                return value;
            }
        });
    }

    function checkRequiredQuantitySliderChildren(slidesElementsArray) {
        if (slidesElementsArray.length === 0) {
            return;
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

    function setSlidesDisplay() {
        slidesElementsArray.forEach(value => {
            value.classList.add("hideSlide");
        });
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove("hideSlide");
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.remove("hideSlide");
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove("hideSlide");
        //Строка функции rightSlideShift и leftSlideShift соответственно.
        //Если в функции etSlidesDisplay оставить classList.remove, только на currentSlide, то
        //Придется визуализировать 2 слайда в функциях rightSlideShift и leftSlideShift,
        //соответственно, разницы нет, а так сне кажется, даже читабельней.
    }

    function positioningSlides() {
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.add("slideShiftRight");
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove("slideShiftLeft");
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].classList.remove("slideShiftRight", "slideShiftLeft");
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add("slideShiftLeft");
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add("slideShiftRight");
    }

    function setStartingPositionsSlides() {
        objectSliderVisibleSlides.nextSlide = slidesElementsArray.length - 1;
        objectSliderVisibleSlides.currentSlide = 0;
        objectSliderVisibleSlides.prevSlide = 1;
        positioningSlides();
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
        setSlidesDisplay();
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
        setSlidesDisplay();
        positioningSlides();
    }

    function moveSliderTouch(event) {
        if (switchSlideBlocked) {
            return;
        }
        const clientX = event.touches[0].clientX;
        swipeLength = 0;

        swipeLength += clientX - gestureStartingPositionX;
        if (swipeLength > sliderWidth / 3) {
            leftSliderShift();
        }
        if (swipeLength < -sliderWidth / 3) {
            rightSliderShift();
        }
    }

    function automaticSettingPictureWidth() {
        slidesElementsArray.forEach(value => {
            value.classList.add("slides");
        });
    }

    function crateButtonControl(defaultStyles) {
        if (defaultStyles) {
            buttonControlElementsList.leftButtonControl = document.createElement("input");
            buttonControlElementsList.leftButtonControl.setAttribute("type", "image");
            buttonControlElementsList.leftButtonControl.setAttribute("src", "img/arrow.png");
            buttonControlElementsList.leftButtonControl.setAttribute("name", "arrowLeft");
            buttonControlElementsList.leftButtonControl.setAttribute("alt", "arrow left");
            buttonControlElementsList.leftButtonControl.classList.add("leftButton", "leftButtonContol");
            slider.append(buttonControlElementsList.leftButtonControl);

            buttonControlElementsList.rightButtonControl = document.createElement("input");
            buttonControlElementsList.rightButtonControl.setAttribute("type", "image");
            buttonControlElementsList.rightButtonControl.setAttribute("src", "img/arrow.png");
            buttonControlElementsList.rightButtonControl.setAttribute("name", "arrowRight");
            buttonControlElementsList.rightButtonControl.setAttribute("alt", "arrow right");
            buttonControlElementsList.rightButtonControl.classList.add("rightButton", "RightButtonContol");
            slider.append(buttonControlElementsList.rightButtonControl);

            buttonControlElementsList.pauseButtonControl = document.createElement("input");
            buttonControlElementsList.pauseButtonControl.setAttribute("type", "button");
            buttonControlElementsList.pauseButtonControl.setAttribute("name", "pause");
            buttonControlElementsList.pauseButtonControl.setAttribute("alt", "input pause");
            buttonControlElementsList.pauseButtonControl.classList.add("inputPauseNotActive");
            slider.append(buttonControlElementsList.pauseButtonControl);

        } else {
            buttonControlElementsList.leftButtonControl = document.createElement("input");
            buttonControlElementsList.leftButtonControl.setAttribute("name", "arrowLeft");
            buttonControlElementsList.leftButtonControl.setAttribute("alt", "arrow left");
            buttonControlElementsList.leftButtonControl.setAttribute("type", "button");
            slider.append(buttonControlElementsList.leftButtonControl);

            buttonControlElementsList.rightButtonControl = document.createElement("input");
            buttonControlElementsList.rightButtonControl.setAttribute("type", "button");
            buttonControlElementsList.rightButtonControl.setAttribute("name", "arrowLeft");
            buttonControlElementsList.rightButtonControl.setAttribute("alt", "arrow left");
            slider.append(buttonControlElementsList.rightButtonControl);

            buttonControlElementsList.pauseButtonControl = document.createElement("input");
            buttonControlElementsList.pauseButtonControl.setAttribute("type", "button");
            buttonControlElementsList.pauseButtonControl.setAttribute("name", "pause");
            buttonControlElementsList.pauseButtonControl.setAttribute("alt", "input pause");
            slider.append(buttonControlElementsList.pauseButtonControl);
        }
    }

    function startAutoplay(timeOfChangingSlides) {
        if (!autoplay) {
            return;
        }
        autolpayTimer = setInterval(() => rightSliderShift(), timeOfChangingSlides);
    }

    function stopAutoplay() {
        clearInterval(autolpayTimer);
    }

    function autoplayReset(timeOfChangingSlides) {
        clearInterval(autolpayTimer);
        startAutoplay(timeOfChangingSlides);
    }

    function pauseSwitch() {
        if (!autoplay) {
            autoplayReset(timeOfChangingSlides);
            buttonControlElementsList.pauseButtonControl.classList.add("inputPauseNotActive");
            buttonControlElementsList.pauseButtonControl.classList.remove("inputPauseActive");
        } else {
            stopAutoplay();
            buttonControlElementsList.pauseButtonControl.classList.add("inputPauseActive");
            buttonControlElementsList.pauseButtonControl.classList.remove("inputPauseNotActive");
        }
        autoplay = !autoplay
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
        gestureStartingPositionX = event.clientX;
        stopAutoplay()
    }

    function pseudoTouchMoveEnd() {
        hasPseudoTouchMouse = false;
        swipeLength = 0;
        if (autoplay) {
            autoplayReset(timeOfChangingSlides);
        }
    }

    function rightSliderShift() {
        switchSlideBlocked = true;
        switchToRightSlide();
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.add("hideSlide");
        setTimeout( () => {
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.nextSlide].classList.remove("hideSlide");
            }, timeToChangeSlides)
    }

    function leftSliderShift() {
        switchSlideBlocked = true;
        switchToLeftSlide();
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.add("hideSlide");
        setTimeout( () => {
            switchSlideBlocked = false;
            slidesElementsArray[objectSliderVisibleSlides.prevSlide].classList.remove("hideSlide");
        }, timeToChangeSlides)
    }

    function init() {
        if (timeOfChangingSlides < 4) {
            timeOfChangingSlides = 4;
        }
        slider.classList.add("slider");
        if (setDefaultMinimumSizes) {
            slider.classList.add("minWidthAndMinHeightSlider");
        }
        sliderWidth = slider.clientWidth;
        setStartingPositionsSlides();
        setSlidesDisplay();
        if (buttonControl) {
            crateButtonControl(buttonDefaultStyles);
        }
        automaticSettingPictureWidth();
        if (autoplay) {
            startAutoplay(timeOfChangingSlides);
        }
    }

    const slider = document.getElementById(idElement);
    if (slider === null) {
        return console.log(`
        #########################################
        ##### id ${idElement} does not exist ####
        #########################################
        `);
    }

    let gestureStartingPositionX = 0;
    let swipeLength = 0;
    let switchSlideBlocked = false;
    let autolpayTimer = null;
    let hasPseudoTouchMouse = false;
    let sliderWidth = 0;
    const objectSliderVisibleSlides = {
        nextSlide: 0,
        currentSlide: 1,
        prevSlide: 2
    };
    const buttonControlElementsList = {
        leftButtonControl: null,
        rightButtonControl: null,
        pauseButtonControl: null
    };

    const slidesElementsArray = checkRequiredQuantitySliderChildren(getSlidesArray(slider));
    init();
    if (slidesElementsArray.length === 0) {
        return console.log(`
        ##############################################
        ##### container '#${idElement}' is empty #####
        ##############################################
        `);
    }

    //####################################
    //###############EVENTS###############
    //####################################
    //TOUCHMOVE

    if (touchmove) {
        slider.addEventListener("touchstart", event => {
            gestureStartingPositionX = event.touches[0].clientX;
            stopAutoplay();
        });
        slider.addEventListener("touchmove", moveSliderTouch);
        slider.addEventListener("touchend", () => {
        swipeLength = 0
        });

        //PSEUDO TOUCHMOVE

        slider.addEventListener("mousedown", pseudoTouchMoveStart);
        slider.addEventListener("mousemove", pseudoTouchMove);
        slider.addEventListener("mouseup", pseudoTouchMoveEnd);
        slider.addEventListener("mouseleave", pseudoTouchMoveEnd);
    }

    //MOUSE

    if (buttonControl) {
        buttonControlElementsList.rightButtonControl.addEventListener("click", () => {
            if (!switchSlideBlocked) {
                leftSliderShift();
            }
        });
        buttonControlElementsList.leftButtonControl.addEventListener("click", () => {
            if (!switchSlideBlocked) {
                rightSliderShift();
            }
        });
        if (autoplay) {
            buttonControlElementsList.pauseButtonControl.addEventListener("click", pauseSwitch);
        }
    }

    //########################################################################################
    //######################################ASYNC_CODE########################################
    //########################################################################################

    setTimeout(() => {slidesElementsArray.forEach(value => {
        value.style.transitionDuration = `${timeToChangeSlides}ms`;
        value.style.transitionTimingFunction = transitionTimingFunctionName;
    })}, 1);
}