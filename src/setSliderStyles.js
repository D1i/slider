"use strict";

import styles from './style.css';

function setSliderStyles(slider, setDefaultMinimumSizes) {
    slider.classList.add(styles.slider);
    if (setDefaultMinimumSizes) {
        slider.classList.add(styles.minWidthAndMinHeightSlider);
    }
}

export default setSliderStyles