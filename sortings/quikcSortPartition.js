function partition(input) {
    const pivotValue = input[input.length - 1];

    for (let index = 0; index < input.length; index++) {

    }

}

// [1, 0, 6, 5, 7, 0, 0, 34, 5, 0, 36] // partitionIndex -> 0
// first iteration -> 1 -> // [0, 1, 6, 5, 7, 0, 0, 34, 5, 0, 36] // partitionIndex -> 1
// second iteration -> 2 -> // [0, 1, 6, 5, 7, 0, 0, 34, 5, 0, 36]
// third iteration -> 3 -> // [0, 1, 6, 5, 7, 0, 0, 34, 5, 0, 36]
// four iteration -> 2 -> // [0, 1, 6, 5, 7, 0, 0, 34, 5, 0, 36]
// fifth iteration -> 2 -> // [0, 1, 6, 5, 7, 0, 0, 34, 5, 0, 36]
// sixth iteration -> 2 -> // [0, 0, 6, 5, 7, 1, 0, 34, 5, 0, 36] // partitionIndex -> 2
// seventh iteration -> 2 -> // [0, 0, 6, 5, 7, 1, 0, 34, 5, 0, 36] // partitionIndex -> 2


