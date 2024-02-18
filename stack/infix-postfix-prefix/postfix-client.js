import stack from "../simple-stack.js";

import { evaluatePostfixInput, calculatedResultOfPostfixExpression } from "./postfix-evaluation.js";

const { push, container: postfixExpression } = stack();

push(2); push(3); push("*"); push(5); push(4); push("*"); push("+"); push(9); push("-");

evaluatePostfixInput(postfixExpression());

console.log(calculatedResultOfPostfixExpression()[0]);