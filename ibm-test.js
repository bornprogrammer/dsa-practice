// problem statement
// Write code two add two strings "5,190,203" and "6,200,121"
// 5190203 + 6200121
// 1,1,2,3,5,8,13 -> 7
// 

function sumTwoNumber(num1, num2) {
    let numb1 = num1.split(",").join("");
    let numb2 = num2.split(",").join("");
    return parseInt(numb1) + parseInt(numb2);
}

function getFibonacci(nPos) {
    let firstVal = 1;
    let secondVal = 1;
    for (let index = 2; index < nPos; index++) {
        let temp = secondVal;
        secondVal = sumTwoNumber(firstVal.toString(), secondVal.toString());
        firstVal = temp;
    }
    return secondVal;
}

console.log(getFibonacci(7));

