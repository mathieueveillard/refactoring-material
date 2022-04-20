import { drawDiamond, generateRow } from ".";
describe("drawDiamond", () => {
  it("Should work with n=3", () => {
    const expected = [
      [" ", "*", " "],
      ["*", "*", "*"],
      [" ", "*", " "],
    ];
    expect(drawDiamond(3)).toEqual(expected);
  });
  it("Should work with n=5", () => {
    const expected = [
      [" ", " ", "*", " ", " "],
      [" ", "*", "*", "*", " "],
      ["*", "*", "*", "*", "*"],
      [" ", "*", "*", "*", " "],
      [" ", " ", "*", " ", " "],
    ];
    expect(drawDiamond(5)).toEqual(expected);
  });
});
describe("generateRow", () => {
  it("Should work with (3, 0)", () => {
    const expected = [" ", "*", " "];
    expect(generateRow(3, 0)).toEqual(expected);
  });
  it("Should work with (5, 1)", () => {
    const expected = [" ", "*", "*", "*", " "];
    expect(generateRow(5, 1)).toEqual(expected);
  });
});
