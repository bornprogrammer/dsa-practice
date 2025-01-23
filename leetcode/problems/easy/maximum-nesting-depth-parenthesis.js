

function findMaximumNestingDepthOfParenthesis(input) {
    const inputArray = input.split("");
    let maxDepth = 0;
    let parenthesisStack = [];
    let currentCycleDepth = 0;
    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] === "(") {
            parenthesisStack.push("(");
        } else if (inputArray[index] === ")" && parenthesisStack.length > 0) {
            parenthesisStack.pop();
            currentCycleDepth++;
        }
        if (parenthesisStack.length === 0 && currentCycleDepth > maxDepth) {
            maxDepth = currentCycleDepth;
            currentCycleDepth = 0;
        }
    }
    return maxDepth;
}

const vps = "(1+(2*3)+((8)/4))+1";
console.log(findMaximumNestingDepthOfParenthesis(vps));

"()()((()()))"; 3

"()()((()))"; 3

"(1+(2*3)+((8)/4))+1";

"(1+(2*3)+((8)/4))+1";