export function fraction(stringArray: string[]): string {
  const numerator = calculateNominator(
    stringArray.map((fraction) => fraction.split("/"))
  );

  const denominator = calculateDenominator(
    stringArray.map((fraction) => Number(fraction[2]))
  );

  return numerator + "/" + denominator;
}

export function calculateDenominator(numberArray: number[]): string {
  const multiplyValues = (
    previousValue: number,
    currentValue: number
  ): number => previousValue * currentValue;

  return numberArray.reduce(multiplyValues).toString();
}

export function calculateNominator(stringMatrice?: string[][]): string {
  let nominator = 0;

  for (let index = 0; index < stringMatrice.length; index++) {
    let virtualArray = [...stringMatrice];

    virtualArray.splice(index, 1);

    for (
      let virtualIndex = 0;
      virtualIndex < virtualArray.length;
      virtualIndex++
    ) {
      nominator +=
        Number(stringMatrice[index][0]) * Number(virtualArray[virtualIndex][1]);
    }
  }

  return nominator.toString();
}
