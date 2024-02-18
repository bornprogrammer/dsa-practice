// 0,1,1,2,3,5,8,13 and so on


// run time complexity 
// space -> O(1) -> constant
// time -> O(n) -> linear
// 5! = 5 * 4 * 3 * 2 * 1
function factorial(number) {
  let factorialValue = 1;
  for (let i = number; i > 0; i--) {
    factorialValue *= i;
  }
  return factorialValue;
}

// run time complexity 
// space -> O(n) -> constant
// time -> O(n) -> linear
// 5! = 5 * 4 * 3 * 2 * 1
function factorialR(number) {
  if (number > 1) {
    return number * factorialR(number - 1);
  }
  return number;
}

console.log(factorialR(5));