let error: boolean | string;

export function calculateRNP(expression: Array<any>): string {
    let operandList: Array<any> = [];
    let result: Array<any> = [];

    expression = checkNegate(expression);

    if(error || verifErrorExpression(expression)){
        return 'Syntax Error'
    }

    expression.forEach(function (value: number | string) {
        if (typeof value === 'number') {
            if (operandList.length === 2) {
                result.push(operandList[0]);
                operandList[0] = operandList[1];
                operandList[1] = value;
            } else {
                operandList.push(value);
            }
        } else {
            if (operandList.length === 2) {
                try {
                    result.push(caculateConvertedExpression(operandList[0], operandList[1], value));
                    operandList = [];
                } catch (errorMessage:any) {
                    error = errorMessage;
                }
            } else {
                result = [...result, ...operandList, value];
                operandList = [];
            }
        }
    });

    if (!error && result.length > 1) {
        return calculateRNP(result);
    }

    return <string>error ?? result[0];
}

export function caculateConvertedExpression(firstOperand: number, secondOperand: number, operator: string): number {
    if (secondOperand === 0 && operator === "/") {
        throw 'Cannot divide by zero';
    }

    let result = firstOperand + secondOperand;

    switch (operator) {
        case '-': {
            result = firstOperand - secondOperand;
            break;
        }
        case '*': {
            result = firstOperand * secondOperand;
            break;
        }
        case '/': {
            result = firstOperand / secondOperand;
        }
    }

    return result;
}

export function verifErrorExpression(expression: Array<any>) {
    let operator: number = 0;
    let operand: number = 0;
    expression.forEach(function (element) {
        typeof element === 'number' ? operand++:            operator++;
    });
    return operand != (operator + 1);
}

export function checkNegate(expressionToCheck: Array<number | string>) {
    // Negate
    expressionToCheck.forEach(function(item, index) {
        if (item === 'negate'){
            if (typeof expressionToCheck[index - 1] === 'number'){
                expressionToCheck.splice(index - 1, 2, -expressionToCheck[index - 1]);
            }
            else {
                error = true;
                return [];
            }
        }
    });
    return expressionToCheck;
}
