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
`autoplay` (boolean) - включает авто переключением  слайдов. true - включено | false - выключено.
Значение по умолчанию: true.
```JS
    createSlider("slider", { autoplay: true });
```

`timeOfChangingSlides` (number) - интервал, между авто переключением слайдов. Интервал измеряется в ms.
Значение по умолчанию: 5000.
```JS
    createSlider("slider", { timeOfChangingSlides: 5000 });
```

`timeToChangeSlides` (number) - время на переключения слайда. Измеряется в ms. Не рекомендуется указывать время на переключение слайда, больше интервала.
Значение по умолчанию: 1000.
```JS
    createSlider("slider", { timeToChangeSlides: 1000 });
```

`transitionTimingFunctionName` (string) - указывает интенсивность переключения слайда. Аналогично "transition-timing-function" из css, принимает те-же значения в виде строки.
Значение по умолчанию: "linear".
```JS
    createSlider("slider", { transitionTimingFunctionName: "linear" });
```

`buttonControl` (boolean) - указывает, создавать ли кнопки управления слайдером и autoplay.
Значение по умолчанию: true.
```JS
    createSlider("slider", { buttonControl: true });
```

`touchmove` (boolean) - создает touch-события для управления слайдером, свайпами мыши или тачпада телефона. Если true, то touch-events, будут созданы и "повешены" на слайдер.
Значение по умолчанию: true.
```JS
    createSlider("slider", { touchmove: true });
```

`buttonDefaultStyles` (boolean) - задает стили кнопок по умолчанию. Если true, то кнопкам контроля слайдера, задаются стили по умолчанию.
Не задавайте стили по умолчанию, если собираетесь стилизовать кнопки контроля слайдера.
При значении false, помните, что у слайдером position: absolute;, так что кнопки находятся под слайдами и их не видно,
для решения этой проблемы задайте кнопкам, z-index или position: absolute;.
Значение по умолчанию: true.
```JS
    createSlider("slider", { buttonDefaultStyles: true });
```

`setDefaultMinimumSizes` (boolean) - указывает, стоит ли назначать css класс с минимальными размерами по умолчанию (min-width: 500px; min-height: 250px;).
Рекомендуется отключать, если вы собираетесь назначить слайдеру свои минимальные размеры и/или ваши размеры слайдера меньше (width: 500px; height: 250px;).
Значение по умолчанию: true.
```JS
    createSlider("slider", { setDefaultMinimumSizes: true });
```

## Важная информация:
* Слайдер использует z-index. (Слайды используют z-index: 1; | стили кнопок по умолчанию z-index: 2;)
* Если timeOfChangingSlides (интервал, между авто переключением слайдов), меньше timeToChangeSlides (время на переключения слайда), на 20% и более, то слайдер начинает работать не стабильно. Слайдер проводит проверку на разницу в значениях, не менее чем в 20%, если проверка не проходит, то timeToChangeSlides (время на переключения слайда) уменьшается до 80% от timeOfChangingSlides (интервал, между  авто переключением слайдов).

## Использование слайдера.
Для использования слайдера, необходимо создать контейнер div и поместить в него img и/или div.

```js
    createSlider("firstSlider", {
        autoplay: false,
        timeOfChangingSlides: 2000,
        timeToChangeSlides: 500,
        transitionTimingFunctionName: "ease-in",
        buttonControl: false,
        touchmove: true,
        buttonDefaultStyles: true,
        setDefaultMinimumSizes: true
    });
    createSlider("secondSlider");
```

## Базовый макет.

```html
<!doctype html>
<html>
<head>
   <script src="../src/index.js"></script>
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