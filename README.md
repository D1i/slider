# slider
Слайдер-карусель для веб-страниц, принимает теги img и div.
## Функционал
* Тонкая настройка autoplay.
* Возможность создания кнопок контроля для переключения слайдов и отключения/включения autoplay.
* Возможность отключения/включения touchmove.
* Принимает в качестве слайдов img и div.
* Возможно подключение нескольких слайдов на одной странице.
* Автоматическое выравнивание img по центру.
## Настройка слайдера
`autoplay` (boolean) - включает автопроигрывание слайдов. *true* - включено | *false* - выключено.
Значение по умолчанию: true.
```JS
    createSlider("slider", { autoplay: true });
```

`timeOfChangingSlides` (number) - интервал, между автопереключением слайдов. Интервал измеряется в ms.
Значение по умолчанию: 5000.
```JS
    createSlider("slider", { timeOfChangingSlides: 5000 });
```

`timeToChangeSlides` (number) - время на переключения слайда слайдов. Измеряется в ms. Не рекомендуется указывать время на переключение слайда, больше интервала.
Значение по умолчанию: 1000.
```JS
    createSlider("slider", { timeToChangeSlides: 1000 });
```

`transitionTimingFunctionName` (string) - указывает интенсивность переключения слайда. Аналогично "transition-timing-function" из css, принимает те-же значения в виде строки.
Значение по умолчанию: "linear".
```JS
    createSlider("slider", { transitionTimingFunctionName: "linear" });
```

`buttonControl` (boolean) - указывает, создавать ли кнопки управления сладером и autoplay. Если "autoplay: false", то кнопка для управления autoplay, не создается.
Значение по умолчанию: true.
```JS
    createSlider("slider", { buttonControl: true });
```

`touchmove` (boolean) - создает touch-события для управления слайдером, свайпами мыши или тачпада телефона. Если true, то touch-events, будут созданы и "повешены" на слайдер.
Значение по умолчанию: true.
```JS
    createSlider("slider", { touchmove: true });
```

`buttonDefaultStyles` (boolean) - задает стили кнопок по умолчанию. Если true, то кнопкам контроля слайдера, задаются стили по умолчанию. Не задавайте стили по умолчанию, если собираетесь стилизовать кнопки контроля слайдера.
Значение по умолчанию: true.
```JS
    createSlider("slider", { buttonDefaultStyles: true });
```

## Использование слайдера.
Для работы слайдера, необходимо подключить слайдер по пути: "/src/slider.js" и стили по пути: "/src/style.css". Слайдеру необходимо задать размеры через ваши стили.
Для использования слайдера, необходимо создать контейнер div и поместить в него img и/или div.

```js
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
```

## Базовый макет.

```html
<!doctype html>
<html>
<head>
   <script src="../src/slider.js"></script>
</head>
<body>
<div id="firstSlider">
    <img src="...">
    <img src="...">
    <img src="...">
    <img src="...">
</div>
    <script >
        createSlider("secondSlider");
    </script>
</body>
</html>
```