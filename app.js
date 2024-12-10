const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * 1.07;
}

const fromDollarToYen = function(valueInDollar) {
    return valueInDollar * 156.5;
}

const fromYenToPound = function(valueInYen) {
    return valueInYen * 0.006;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};

