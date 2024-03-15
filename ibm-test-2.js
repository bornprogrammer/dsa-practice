
// atomic pattern
// [1,0,6,5,7,0,0,34,5,0,36] // 
// [0,1]
// 10 lines of code
// ajax call -> 1 mins
// 10 line code
// settimeout -> callback
// 
// 10 line code
var Employee = {
    company: 'xyz'
}
var emp1 = Object.create(Employee);
// delete emp1.company;
console.log(emp1);
console.log(emp1.company);

// function isStringCyclic(predefinedText, input) {
//     const predefinedTextArray = predefinedText.split(",");
//     const predefinedTextFirstElem = predefinedTextArray[0];
//     const predefinedTextLastElem = predefinedTextArray[predefinedTextArray.length - 1];
//     const inputArray = input.split(",");
//     const inputArrayLength = inputArray.length;
//     let isStringCyclic = false;
//     for (let index = 0; index < inputArrayLength - 1; index++) {
//         if (inputArray[index] === predefinedTextLastElem && inputArray[index + 1] === predefinedTextFirstElem) {
//             isStringCyclic = true;
//             break;
//         }
//     }
//     return isStringCyclic;
// }
// console.log(isStringCyclic("ABCDE", "CDEBA"));