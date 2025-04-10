// Tasas de conversión basadas en 1 euro
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
}

// Función 1: de euro a dólar
const fromEuroToDollar = (valueInEuro) => {
    return valueInEuro * oneEuroIs.USD;
}

// Función 2: de dólar a yen
const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
}

// Función 3: de yen a libra
const fromYenToPound = (valueInYen) => {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };


