// 0,1,1,2,3,5,8,13 and so on


// run time complexity 
// space -> O(n) -> linear
// time -> O(n) -> linear
function fibonacci(position) {
  let fibonacciNumber = [0, 1];
  for (let index = 2; index < position; index++) {
    fibonacciNumber[index] = fibonacciNumber[index - 1] + fibonacciNumber[index - 2];
  }
  console.log(fibonacciNumber);
  return fibonacciNumber;
}

fibonacci(5);
fibonacci(7);
fibonacci(3)