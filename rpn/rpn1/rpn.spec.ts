import { rpn } from "./rpn";

it("1 = 1", function () {
  expect(rpn('1')).toEqual(1);
});

it("1 1 + = 2", function () {
  expect(rpn('1 1 +')).toEqual(2);
});

it("1 2 + 3 4 + + 5 + = 15", function () {
  expect(rpn('1 2 + 3 4 + + 5 +')).toEqual(15);
});

it("1.8 2.2 + = 4", function () {
  expect(rpn('1.8 2.2 +')).toEqual(4);
});

it("1 1 - = 0", function () {
  expect(rpn('1 1 -')).toEqual(0);
});

it("5 4 - 3 2 - - 1 - = -1", function () {
  expect(rpn('5 4 - 3 2 - - 1 -')).toEqual(-1);
});

it("1 2 * = 2", function () {
  expect(rpn('1 2 *')).toEqual(2);
});

it("1 2 * 1 3 * * 2 * = 12", function () {
  expect(rpn('1 2 * 1 3 * * 2 *')).toEqual(12);
});

it("2 2 / = 1", function () {
  expect(rpn('2 2 /')).toEqual(1);
});

it("24 2 / 24 6 / / 1 / = 3", function () {
  expect(rpn('24 2 / 24 6 / / 1 /')).toEqual(3);
});

it("1 NEGATE = -1", function () {
  expect(rpn('1 NEGATE')).toEqual(-1);
});

it("1 NEGATE NEGATE = 1", function () {
  expect(rpn('1 NEGATE NEGATE')).toEqual(1);
});

it("-1 1 + = Error", function () {
  expect(rpn('-1 1 +')).toEqual("Error");
});

it("4 4 / 6 * 4 + 8 - NEGATE = -2", function () {
  expect(rpn('4 4 / 6 * 4 + 8 - NEGATE')).toEqual(-2);
});

it("4 + = Error", function () {
  expect(rpn('4 +')).toEqual("Error");
});

it("4 1 + 1 = Error", function () {
  expect(rpn('4 1 + 1')).toEqual("Error");
});

it("4 - = Error", function () {
  expect(rpn('4 -')).toEqual("Error");
});

it("4 1 - 1 = Error", function () {
  expect(rpn('4 1 - 1')).toEqual("Error");
});

it("4 * = Error", function () {
  expect(rpn('4 *')).toEqual("Error");
});

it("4 1 * 1 = Error", function () {
  expect(rpn('4 1 * 1')).toEqual("Error");
});

it("4 / = Error", function () {
  expect(rpn('4 /')).toEqual("Error");
});

it("4 1 / 1 = Error", function () {
  expect(rpn('4 1 / 1')).toEqual("Error");
});

it("4 4 $ = Error", function () {
  expect(rpn('4 4 $')).toEqual("Error");
});

it(" = Error", function () {
  expect(rpn('')).toEqual("Error");
});