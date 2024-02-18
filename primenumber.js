function isPrimeNumber(number) {
  let halfNumber = Math.round(number / 2);
  let isPrime = true;
  for (let i = halfNumber; i >= 2; i--) {
    isPrime = (number % i) !== 0;
    if (isPrime === false) {
      break;
    }
  }
  return isPrime;
}

console.log(isPrimeNumber(49));