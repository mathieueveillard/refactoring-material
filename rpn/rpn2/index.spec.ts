import { 
  calculateAddition, 
  calculateSoustraction, 
  calculateDivision, 
  calculateMultiplication,
  calculate, 
  polishReverse
} from ".";

it("Test with operator +", function () {
  expect(calculateAddition(1, 1)).toEqual(2);
});
it("Test with operator -", function () {
  expect(calculateSoustraction(4, 2)).toEqual(2);
});
it("Test with operator /", function () {
  expect(calculateDivision(4, 2)).toEqual(2);
});
it("Test with operator *", function () {
  expect(calculateMultiplication(4, 2)).toEqual(8);
});


it("Test a caclul with operator +", function () {
  expect(calculate(1, "+", 1)).toEqual(2);
});
it("Test a caclul with operator -", function () {
  expect(calculate(1, "-", 1)).toEqual(0);
});
it("Test a caclul with operator /", function () {
  expect(calculate(4, "/", 2)).toEqual(2);
});
it("Test a caclul with operator *", function () {
  expect(calculate(1, "*", 1)).toEqual(1);
});


it("Test a negative result", function () {
  expect(polishReverse("24-")).toEqual(-2);
});
it("Test a negative number", function () {
  expect(polishReverse("11NEGATE+")).toEqual(0);
});
it("Test a complexe calcul RNP", function () {
  expect(polishReverse("11+4*2/22++")).toEqual(8);
});
it("Test error case", function () {
  expect(polishReverse("2222-")).toEqual("#ERROR");
});
it("Test error NaN case", function () {
  expect(polishReverse("0/0")).toEqual("#ERROR");
});

