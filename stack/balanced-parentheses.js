
const { push, container } = stack();

push("{");
push("[");
push("{");
push("}");
push("(");
push(")");
push("[");
push("}");

const { push: push1, pop: pop1, topItem: topItem1 } = stack();

const isIt = isParenthesisBalanced(container());
console.log(isIt);

function isParenthesisBalanced(parenthesis) {
    const closingParenthesis = ["}", "]", ")"];
    const openedParenthesis = ["{", "[", "("];
    let isParenthesisBalanced = true;
    for (let index = 0; index < parenthesis.length; index++) {
        if (openedParenthesis.indexOf(parenthesis[index]) !== -1) {
            push1(parenthesis[index]);
        } else if (closingParenthesis.indexOf(parenthesis[index]) !== -1) {
            if (topItem1() === openedParenthesis[closingParenthesis.indexOf(parenthesis[index])]) {
                pop1();
            } else {
                isParenthesisBalanced = false;
                break;
            }
        }
    }
    if (isParenthesisBalanced === true && topItem1() !== undefined) {
        isParenthesisBalanced = false;
    }
    return isParenthesisBalanced;
}

