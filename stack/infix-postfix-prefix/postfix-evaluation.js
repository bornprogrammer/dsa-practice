import stack from "../simple-stack.js";


export const { push: push1, pop: pop1, container: calculatedResultOfPostfixExpression } = stack();

export function evaluatePostfixInput(postfixExpression) {
    const operators = ["+", "-", "*", "/"];
    let calculatedResult = 0;
    for (let index = 0; index < postfixExpression.length; index++) {
        if (operators.indexOf(postfixExpression[index]) !== -1) {  // operator found
            const secondOperand = pop1();
            const firstOperand = pop1();
            calculatedResult = performOperation(firstOperand, secondOperand, postfixExpression[index]);
            push1(calculatedResult);
        } else {
            push1(postfixExpression[index]);
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
            return nu;
    }
}