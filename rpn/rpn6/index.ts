export const expression = (row) => {
  let result = 0;

  let multiExp = [];
  if (row.length > 4) {
    row.map((operator, i) => {
      if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
        if (row[i - 1] === "NEGATE") {
          multiExp.push(row.slice(i - 3, i + 1));
        } else {
          multiExp.push(row.slice(i - 1, i + 1));
        }
      }
    });
  } else {
    multiExp.push(row);
  }

  console.log("multiExp after rewrite", multiExp);

  multiExp.forEach((exp, i) => {
    const resultOfCurrentExp = calculate(ifHaveNegateExpression(exp));
    if (i + 1 < multiExp.length && i + 1 !== multiExp.length) {
      multiExp[i + 1].unshift(resultOfCurrentExp);
    } else {
      result = resultOfCurrentExp;
    }
  });
  return result;
};
export const availableExpressions = (exp) => {
  let yourExpressionsIsCheck = true;
  if (exp.length === 0) return (yourExpressionsIsCheck = false);

  exp.forEach((value, i) => {
    if (value < 0) yourExpressionsIsCheck = false;
    if (value === "/" && Number(exp[i - 1]) !== 0) yourExpressionsIsCheck = false;
  });

  return yourExpressionsIsCheck;
};
export const ifHaveNegateExpression = (exp) => {
  let rowCopy = [...exp];
  rowCopy.forEach((value, i) => {
    if (value === "NEGATE") {
      rowCopy[i - 1] = -rowCopy[i - 1];
      rowCopy.splice(i, 1);
    }
  });
  return rowCopy;
};

export const calculate = (exp) => {
  let result = 0;
  exp.map((value, i) => {
    switch (value) {
      case "+":
        result = Number(exp[i - 2] + exp[i - 1]);
        break;
      case "-":
        result = Number(exp[i - 2] - exp[i - 1]);
        break;
      case "*":
        result = Number(exp[i - 2] * exp[i - 1]);
        break;
      case "/":
        result = Number(exp[i - 2] / exp[i - 1]);
        break;
    }
  });
  return result;
};
