const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBeCloseTo(expected, 5);
});

test("Three dollars should be 469.5 yen", function() {
    const expected = 3 * 156.5;
    expect(fromDollarToYen(3)).toBeCloseTo(expected, 5);
});

test("Three yens should be 0.018 pounds", function() {
    const expected = 3 * 0.006;
    expect(fromYenToPound(3)).toBeCloseTo(expected, 5);
});

