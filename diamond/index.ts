type DiamondRow = Array<" " | "*">;
type Diamond = Array<DiamondRow>;
const generateSymbolArray = <T extends string>(
  symbol: T,
  length: number
): T[] => {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(symbol);
  }
  return result;
};
export const generateRow = (
  dimension: number,
  rowIndex: number
): DiamondRow => {
  const numberOfStars = 1 + 2 * rowIndex;
  const numberOfSpaces = dimension - numberOfStars;
  let result = [];
  result.push(...generateSymbolArray(" ", numberOfSpaces / 2));
  result.push(...generateSymbolArray("*", numberOfStars));
  result.push(...generateSymbolArray(" ", numberOfSpaces / 2));
  return result;
};
export const drawDiamond = (n: number): Diamond => {
  let diamond = [];
  for (let i = 0; i <= (n - 1) / 2; i++) {
    diamond.push(generateRow(n, i));
  }
  diamond.push(...[...diamond].reverse().splice(1));
  return diamond;
};
