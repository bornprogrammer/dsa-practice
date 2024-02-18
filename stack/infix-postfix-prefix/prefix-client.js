
const { push, container: prefixExpression } = stack();

push("-"); push("+"); push("*"); push(2); push(3); push("*"); push(5); push(4); push(9);

const { push: push1, pop: pop1, container: calculatedResultOfPrefixExpression } = stack();

function evaluatePrefixInput(prefixExpression) {
    const operators = ["+", "-", "*", "/"];
    let calculatedResult = 0;
    for (let index = prefixExpression.length - 1; index >= 0; index--) {
        if (operators.indexOf(prefixExpression[index]) !== -1) {  // operator found
            const firstOperand = pop1();
            const secondOperand = pop1();
            calculatedResult = performOperation(firstOperand, secondOperand, prefixExpression[index]);
            push1(calculatedResult);
        } else {
            push1(prefixExpression[index]);
        }
    }
}

function performOperation(operand1, operand2, operator) {
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return operand1 / operand2;
    }
}

eval(prefixExpression());


console.log(calculatedResultOfPrefixExpression()[0]);