// problem statment -> give an array a you have to push the all element k to either left or right.

// 
function pushElementToRight(input, elem) {
    for (let index = 0; index < input.length; index++) {
        if (input[index] === elem) {
            let newIndex = index;
            while (newIndex > 0) {
                input[newIndex] = input[newIndex - 1];
                newIndex--;
            }
            input[newIndex] = elem;
        }
    }
    return input;
}


console.log(pushElementToRight([1, 0, 6, 5, 7, 0, 0, 34, 5, 0, 36], 5));
