import { fraction, calculateDenominator, calculateNominator } from ".";

describe("Test calculateDenominator() function", function () {
  it("Test return value string", function () {
    expect(calculateDenominator([5])).toEqual("5");
  });

  it("Multiply and return string", function () {
    expect(calculateDenominator([5, 6])).toEqual("30");
  });

  it("Multiply with lot of values", function () {
    expect(calculateDenominator([5, 6, 8, 10, 15])).toEqual("36000");
  });
});

describe("Test calculatingNominator() function", function () {
  it("Test calculating small array", function () {
    expect(
      calculateNominator([
        ["1", "2"],
        ["1", "3"],
      ])
    ).toEqual("5");
  });

  it("Test calculating big array", function () {
    expect(
      calculateNominator([
        ["1", "2"],
        ["1", "3"],
        ["2", "4"],
        ["3", "5"],
      ])
    ).toEqual("70");
  });
});

describe("Test fraction() function", function () {
  it("Test return real values", function () {
    expect(fraction(["1/2", "1/3"])).toEqual("5/6");
  });

  it("Test with lot of values", function () {
    expect(fraction(["1/2", "1/3", "2/4", "3/5"])).toEqual("70/120");
  });
});
