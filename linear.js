// problem statment -> given the array of n elements find the index of element t and -1 if not fond

// runtime complexity
// best case O(1)
// worst case O(n)

function linearSearch(input, t) {
    let foundIndex = -1;
    for (let index = 0; index < input.length; index++) {
        if (input[index] === t) {
            foundIndex = index;
            break;
        }
    }
    return foundIndex;
}

const input1 = [12, 56, 90, 11, 34, 78, 34, 16];
const output1 = linearSearch(input1, 89); // -1

const input2 = [12, 56, 90, 11, 34, 78, 34, 16];
const output2 = linearSearch(input2, 78); // 5

const input3 = [98, 56, 18, 84, 76];
const output3 = linearSearch(input3, 84); // 3
console.log(output1, output2, output3);