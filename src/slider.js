"use strict";

function createSlider(idElement, {
    autoplay = true,
    timeOfChangingSlides = 5000,
    timeToChangeSlides = 1000,
    transitionTimingFunctionName = "linear",
    buttonControl = true,
    touchmove = true,
    buttonDefaultStyles = true,
    minSliderWidth = 500,
    minSliderHeight = 250,
} = {}) {

    if (timeOfChangingSlides < 4) {
        timeOfChangingSlides = 4;
    }

    function getSlidesArray(parent) {
        const slidesElementsArray = Array.from(parent.children).map(value => {
            if (value.tagName !== "INPUT") {
                value.style.pointerEvents = "none";
                return value;
            }
        });

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
        if (slidesElementsArray.length === 3) {
            //Пока что другого решения не нашел, только если переписывать почти весь код
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
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].style.transform = `translateX(${sliderWidth}px)`;
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.transform = `translateX(${0}px)`;
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.transform = `translateX(${-sliderWidth }px)`;

        return slidesElementsArray;
    }

    function positioningSlides() {
        slidesElementsArray[objectSliderVisibleSlides.nextSlide].style.transform = `translateX(${sliderWidth}px)`;
        slidesElementsArray[objectSliderVisibleSlides.currentSlide].style.transform = `translateX(${0}px)`;
        slidesElementsArray[objectSliderVisibleSlides.prevSlide].style.transform = `translateX(${-sliderWidth }px)`;
    }

    function setSlidesDisplay() {
        slidesElementsArray.forEach(value => {value.style.display = "none";
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

    function clearTimerList() {
        timerList.forEach((value)=> clearInterval(value));
        timerList = [];
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
            value.style.width = sliderWidth + "px";
        });
        setSlidesDisplay();
    }

    function crateButtonControl(defaultStyles) {
        if (defaultStyles) {
            let inputLeft = document.createElement("input");
            inputLeft.setAttribute("type", "image");
            inputLeft.setAttribute("src", "img/arrow.png");
            inputLeft.setAttribute("name", "arrowLeft");
            inputLeft.setAttribute("alt", "arrow left");
            inputLeft.classList.add("leftButton");
            slider.prepend(inputLeft);

            let inputRight = document.createElement("input");
            inputRight.setAttribute("type", "image");
            inputRight.setAttribute("src", "img/arrow.png");
            inputRight.setAttribute("name", "arrowRight");
            inputRight.setAttribute("alt", "arrow right");
            inputRight.classList.add("rightButton");
            slider.prepend(inputRight);

            let inputPause = document.createElement("input");
            inputPause.setAttribute("type", "button");
            inputPause.setAttribute("name", "pause");
            inputPause.setAttribute("alt", "input pause");
            inputPause.classList.add("inputPauseNotActive");
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
        if (!autoplay) {
            stopAutoplay();
            startAutoplay(timeOfChangingSlides);
            slider.querySelector("input[name='pause']").classList.add("inputPauseNotActive");
            slider.querySelector("input[name='pause']").classList.remove("inputPauseActive");
        } else {
            stopAutoplay();
            slider.querySelector("input[name='pause']").classList.add("inputPauseActive");
            slider.querySelector("input[name='pause']").classList.remove("inputPauseNotActive");
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
        autoplayReset(timeOfChangingSlides);
    }

    function rightSliderShift() {
        switchSlideBlocked = true;
        switchToRightSlide();
        setTimeout( () => {
            switchSlideBlocked = false;
            pseudoTouchMoveEnd();
            }, timeToChangeSlides)
    }

    function leftSliderShift() {
        switchSlideBlocked = true;
        switchToLeftSlide();
        setTimeout( () => {
            switchSlideBlocked = false;
            pseudoTouchMoveEnd();
        }, timeToChangeSlides)
    }

    const slider = document.getElementById(idElement);
    if (slider === null) {
        return console.log(`
        #########################################
        ##### id ${idElement} does not exist ####
        #########################################
        `)
    }

    slider.style.minWidth = minSliderWidth + "px";
    slider.style.minHeight = minSliderHeight + "px";
    slider.classList.add("slider");

    const sliderWidth = slider.clientWidth;
    let gestureStartingPositionX = 0;
    let swipeLength = 0;
    let switchSlideBlocked = false;
    let autolpayTimer = null;
    let hasPseudoTouchMouse = false;
    let timerList = [];
    const objectSliderVisibleSlides = {
        nextSlide: 0,
        currentSlide: 1,
        prevSlide: 2
    };

    //ПРОВЕРИТЬ КОД НИЖЕ

    const slidesElementsArray = getSlidesArray(slider);
    if (slidesElementsArray.length === 0) {
        return console.log(`
        ##############################################
        ##### container '#${idElement}' is empty #####
        ##############################################
        `);
    }
    setSlidesDisplay();


    if (buttonControl) {
        crateButtonControl(buttonDefaultStyles);
    }

    //autoWidthSlides
    //###############

    automaticSettingPictureWidth();

    //###############

    if (autoplay) {
        startAutoplay(timeOfChangingSlides);
    }

    //###############EVENTS
    //#####################
    //TOUCHMOVE

    if (touchmove) {
        slider.addEventListener("touchstart", event => {
            gestureStartingPositionX = event.touches[0].clientX;
            clearTimerList();
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
        if (autoplay) {
            slider.querySelector("input[name='pause']").addEventListener("click", pauseSwitch);
        }
    }

    //#########################################asyncCode######################################
    //########################################################################################
    //########################################################################################

    setTimeout(() => {slidesElementsArray.forEach(value => {
        value.style.transitionDuration = `${timeToChangeSlides}ms`;
        value.style.transitionTimingFunction = transitionTimingFunctionName;
    })}, 1);
}