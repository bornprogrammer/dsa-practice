function bubbleSort(input) {
    for (let index = 0; index < input.length - 1; index++) {
        for (let index1 = 0; index1 < input.length - 1 - index; index1++) {
            if (input[index1] > input[index1 + 1]) {
                let temp = input[index1];
                input[index1] = input[index1 + 1];
                input[index1 + 1] = temp;
            }
        }
    }
    return input;
}

function bubbleSort(input) {
    for (let index = 0; index < input.length; index++) {
        for (let index1 = 0; index1 < input.length; index1++) {

        }
    }
}