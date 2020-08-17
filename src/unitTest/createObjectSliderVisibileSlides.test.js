//ПОКА НЕ ГОТОВЫ. РАЗБИРАЮСЬ
let objectSliderVisibleSlides = createObjectSliderVisibleSlides([null,null,null,])
describe("createObjectSliderVisibleSlides", () => {
    test("1", () => {
        expect(objectSliderVisibleSlides.getPrev().toBe(2));
    })
});