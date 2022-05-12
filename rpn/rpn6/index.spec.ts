// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { expression, availableExpressions } from ".";
expect.extend(matchers);

test("That's a test!", function () {
  expect(1 + 1).toEqual(2);
});
describe("Test of expression() function  syntax", () => {
  test("test of operand + is work", () => {
    expect(expression([1, 2, "+"])).toEqual(3);
  });
  test("test of operand - is work", () => {
    expect(expression([1, 2, "-"])).toEqual(-1);
  });
  test("test of operand * is work", () => {
    expect(expression([1, 2, "*"])).toEqual(2);
  });
  test("test of operand / is work", () => {
    const row = [1, 2, "/"];
    expect(expression(row)).toEqual(1 / 2);
    expect(Number(row[1]) !== 0).toBeTrue();
  });
  test("test of operand - is work", () => {
    const row = [1, 2, "NEGATE", "+"];
    expect(expression(row)).toEqual(-1);
  });
  test("test multi  expression 1", () => {
    const row = [1, 2, "NEGATE", "+", 6, "+"];
    expect(expression(row)).toEqual(5);
  });
  test("test multi  expression 2", () => {
    const row = [1, 2, "NEGATE", "+", 6, "+", 3, "/"];
    expect(expression(row)).toEqual(5 / 3);
  });
});
describe("Test of availableExpressions() function ", () => {
  test("build empty expression", () => {
    expect(availableExpressions([])).toBeFalsy();
  });
  test("should have negative value", () => {
    expect(availableExpressions([23, -3])).toBeFalsy();
  });
});
