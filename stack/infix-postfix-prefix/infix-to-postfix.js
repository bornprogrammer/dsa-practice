/**
 * 
 * you must have two stack container
 * first will have the parenthesis and operator
 * second will have the operand
 */
import stack from '../simple-stack.js';

function convertInfixToPostfix(infixExpressionContainer) {
    const { push, pop, container: operatorContainer } = stack();
    const { push: push1, pop: pop1, container: postfixExpressionContainer } = stack();
    const operators = ["+", "-", "*", "/"];
    for (let index = 0; index < infixExpressionContainer.length; index++) {
        if (operators.indexOf(infixExpressionContainer[index]) !== -1) {

        }
    }
}
