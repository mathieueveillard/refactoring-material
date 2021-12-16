let fraction1 = "1/3";

let fraction2 = "1/2";

let divider = 1;

tempResult = 0;

let pgcdValue = 1;

function pgcd(a, b) {
  if (typeof a == "string") {
    a = Math.abs(a.split("/")[1]);

    b = Math.abs(b.split("/")[1]);
  } else {
    a = Math.abs(a);

    b = Math.abs(b);
  }

  if (b > a) {
    var tmp = a;

    a = b;

    b = tmp;
  }

  while (true) {
    if (b == 0) return a;

    a %= b;

    if (a == 0) return b;

    b %= a;
  }
}

function fractionCalc() {
  // let pgcdValue = pgcd(fraction1, fraction2)

  if (fraction1.split("/")[1] == fraction2.split("/")[1]) {
    tempResult =
      parseInt(fraction1.split("/")[0]) + parseInt(fraction2.split("/")[0]);

    divider = parseInt(fraction1.split("/")[1]);

    pgcdValue = pgcd(tempResult, divider);

    while (pgcdValue != 1) {
      tempResult = tempResult / pgcdValue;

      divider = divider / pgcdValue;

      pgcdValue = pgcd(tempResult, divider);
    }
  } else {
    frac1Up =
      parseInt(fraction1.split("/")[0]) * parseInt(fraction2.split("/")[1]);

    frac1down =
      parseInt(fraction1.split("/")[1]) * parseInt(fraction2.split("/")[1]);

    frac2Up =
      parseInt(fraction2.split("/")[0]) * parseInt(fraction1.split("/")[1]);

    frac2down =
      parseInt(fraction2.split("/")[1]) * parseInt(fraction1.split("/")[1]);

    tempResult = frac1Up + frac2Up;

    divider = frac1down;

    pgcdValue = pgcd(tempResult, divider);

    while (pgcdValue != 1) {
      tempResult = tempResult / pgcdValue;

      divider = divider / pgcdValue;

      pgcdValue = pgcd(tempResult, divider);
    }
  }

  if (divider == 1) {
    console.log(tempResult);
  } else {
    console.log(tempResult + " / " + divider);
  }
}

fractionCalc();
