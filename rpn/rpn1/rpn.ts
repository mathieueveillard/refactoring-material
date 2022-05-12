export function rpn(calcul: string): number | string {
    const calcul_array = calcul.split(' ');
    const calcul_array_length = calcul_array.length;
    let stack_number = [];

    for (let i = 0; i < calcul_array_length; i++) {
        let element = calcul_array[i];

        // Element is -x, return error
        if (!Number.isNaN(element) && parseFloat(element) < 0) {
            return "Error";
        }

        // Element is a number, push it on the stack_number
        else if (!Number.isNaN(element) && parseFloat(element) > 0) {
            stack_number.push(parseFloat(element));
        }

        // Element is NEGATE, (number * -1) push it on the stack_number
        else if (element == "NEGATE") {
            if (stack_number.length < 1) {
                return "Error";
            }
            let nb_negate = stack_number.pop();
            stack_number.push(eval(nb_negate + ' * -1'));
        }

        // Element is operator
        else if (element == "+" || element == "-" || element == "*" || element == "/") {
            if (stack_number.length < 2) {
                return "Error";
            }
            let last_number_on_stack = stack_number.pop();
            let before_last_number_on_stack = stack_number.pop();
            stack_number.push(eval(before_last_number_on_stack + ' ' + element + ' ' + last_number_on_stack));
        }

        // Element is not operator and is not number and is not NEGATE
        else {
            return "Error";
        }
    }

    if (stack_number.length > 1) {
        return "Error";
    }

    return stack_number.pop();
}