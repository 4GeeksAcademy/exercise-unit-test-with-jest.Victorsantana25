const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

describe("Test para la función fromEuroToDollar", () => {
    test("One euro should be 1.07 dollars", () => {
        expect(fromEuroToDollar(3.5)).toBe(3.745);
    });
});

describe("Test para la función fromDollarToYen", () => {
    test("One dollar should be 146.26168224299065 yenes", () => {
        const result = fromDollarToYen(1);
        const expected = (1 / 1.07) * 156.5;
        expect(result).toBe(expected);
    });
});

describe("Test para la función fromYenToPound", () => {
    test("One yen should be 0.005561497326203209 pounds", () => {
        const result = fromYenToPound(1);
        const expected = (1 / 156.5) * 0.87;
        expect(result).toBe(expected);
    });
});