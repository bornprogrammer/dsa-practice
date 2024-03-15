


function sortASC(input) {
    for (let index = 0; index < input.length; index++) {
        let isSwapped = false;
        for (let index1 = 0; index1 < input.length - (index + 1); index1++) {
            if (input[index1] > input[index1 + 1]) {
                input[index1] = input[index1] * input[index1 + 1];
                input[index1 + 1] = input[index1] / input[index1 + 1];
                input[index1] = input[index1] / input[index1 + 1];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
        console.log(index);
    }
    return input;
}

console.log(sortASC([10, 4, 1, 11, 2]));
// console.log(sortASC([1, 2, 3, 4, 5]));