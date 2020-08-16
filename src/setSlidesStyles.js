"use strict";

import styles from './style.css';

function setSlidesStyle(slidesElementsArray) {
    function automaticSettingPictureWidth() {
        slidesElementsArray.forEach(value => {
            value.classList.add(styles.slides);
        });
    }
    automaticSettingPictureWidth(slidesElementsArray)
}

export default setSlidesStyle;