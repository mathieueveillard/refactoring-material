export type fraction = {
  sup: number;
  sub: number;
};
export function addIfDividable(first: fraction, second: fraction): fraction {
  let returnFraction: fraction = { sub: 0, sup: 0 };
  returnFraction.sup = first.sup + second.sup;
  returnFraction.sub = first.sub;
  return returnFraction;
}
export function addIfNotDividable(first: fraction, second: fraction): fraction {
  let returnFraction: fraction = { sub: 0, sup: 0 };
  returnFraction.sub = first.sub * second.sub;
  returnFraction.sup = first.sup * second.sub + second.sup * first.sub;
  return returnFraction;
}
export function compress(fraction: fraction): fraction {
  let result: fraction = { sup: fraction.sup, sub: fraction.sub };
  if (fraction.sub === fraction.sup) {
    // [fraction.sub, fraction.sup] = [1, 1];
    fraction.sub = 1;
    fraction.sup = 1;
  } else if (fraction.sub % fraction.sup === 0) {
    fraction.sub /= fraction.sub / fraction.sup;
    fraction.sup /= fraction.sub / fraction.sup;
  }
  return result;
}
export function add(first: fraction, second: fraction): fraction {
  let returnFraction: fraction = { sub: 0, sup: 0 };
  if (first.sub != second.sub) {
    returnFraction = addIfNotDividable(first, second);
  } else {
    returnFraction = addIfDividable(first, second);
  }
  compress(returnFraction);
  return returnFraction;
}
