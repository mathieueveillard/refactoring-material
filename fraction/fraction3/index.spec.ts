test("Success - Fraction", () => {
  const first: fraction = {
    sup: 1,
    sub: 4,
  };
  const second: fraction = {
    sup: 1,
    sub: 4,
  };
  const res: fraction = {
    sup: 1,
    sub: 2,
  };
  expect(add(first, second)).toEqual(res);
});
