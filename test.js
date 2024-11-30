test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

test("Three dollars should be 469,5 yen", function() {
    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(3);
    const expected = 3 * 156.5;
    expect(fromDollarToYen(3)).toBe(469.5);
});

test("Three yens should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const yens = fromYenToPound(3);
    const expected = 3 * 0.87;
    expect(fromYenToPound(3)).toBe(2.61);
});


