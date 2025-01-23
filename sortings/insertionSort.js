function insertionSort(input) {
    for (let index = 1; index < input.length; index++) {
        let currentElement = input[index];
        let tempIndex = index;
        while (tempIndex > 0 && input[tempIndex] < input[tempIndex - 1]) {
            input[tempIndex] = input[tempIndex - 1];
            input[tempIndex - 1] = currentElement;
            tempIndex--;
        }
        input[tempIndex] = currentElement;

    }
    return input;
}

console.log(insertionSort([7, 1, 9, 3, 10, 2, 8, 5, 4, 19, 17, 13, 27, 11]));