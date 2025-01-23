// problem statment -> given the array of n elements find the index of element t and -1 if not fond

// runtime complexity
// best case O(1)
// worst case O(logn)

function binarySearch(sortedInput, t) {
    let foundIndex = -1;
    let startingPoint = 0;
    let endingPoint = sortedInput.length - 1;
    let pointer = (endingPoint - startingPoint) / 2;
    // while (pointer >= 0) {
    //     console.log(pointer);
    //     if (sortedInput[pointer] === t) {
    //         foundIndex = pointer;
    //         break;
    //     } else if (sortedInput[pointer] > t) {
    //         endingPoint = pointer - 1;
    //     } else {
    //         startingPoint = pointer + 1;
    //     }
    //     pointer = (endingPoint - startingPoint) / 2;
    // }
    return foundIndex;
}

const input1 = [16, 19, 23, 35, 56, 78, 90, 105];
const output1 = binarySearch(input1, 35); // -1

const input2 = [12, 56, 90, 11, 34, 78, 34, 16].sort((a, b) => a - b);
// const output2 = linearSearch(input2, 78); // 5

const input3 = [98, 56, 18, 84, 76].sort((a, b) => a - b);
// const output3 = linearSearch(input3, 84); // 3
console.log(output1);