
// [5,2,4,1,9] 
// first parent iteration [5,2,4,1,9] 
// first iteration  ->  minIndex=0,minElem=5, after [2,5,4,1,9] 
// second iteration ->  minIndex=0,minElem=2, after [2,5,4,1,9] 
// thirs iteration ->  minIndex=0,minElem=2, after [2,5,4,1,9]
// fourth iteration ->  minIndex=3,minElem=1, after [1,5,4,2,9]
// fifth iteration ->  minIndex=3,minElem=1, after [1,5,4,2,9]

// second parent iteration [1,5,4,2,9]
// first iteration  ->  minIndex=0,minElem=1, after [1,5,4,2,9]
// second iteration  ->  minIndex=0,minElem=1, after [1,5,4,2,9]


// third parent iteration [1,5,4,2,9]
// first iteration  ->  minIndex=0,minElem=1, after [1,5,4,2,9]
// second iteration  ->  minIndex=0,minElem=1, after [1,5,4,2,9]


function sortASC(input) {
    for (let index = 0; index < input.length; index++) {
        let maxElem = input[index];
        for (let index1 = 0; index1 < input.length; index1++) {
            if (input[index1] >= maxElem) {
                let temp = input[index1];
                input[index1] = maxElem;
                input[index] = temp;
                maxElem = temp;
            }
        }
    }
    return input;
}

function sortDesc(input) {
    for (let index = 0; index < input.length; index++) {
        let minElem = input[index];
        for (let index1 = 0; index1 < input.length; index1++) {
            if (input[index1] <= minElem) {
                let temp = input[index1];
                input[index1] = minElem;
                input[index] = temp;
                minElem = temp;
            }
        }
    }
    return input;
}

console.log(sortASC([5, 4, 7, 2, 2]));
// sort([5, 2, 4, 1, 9]);
// sort([13, 17, 10, 44, 9]);
// sort([1, 2, 3, 4, 5]);

