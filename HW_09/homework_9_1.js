function isPrime (numbers) {
    if (numbers <= 1) {
      return false;
    }

    for (let i = 2; i < numbers; i++) {
      if (numbers % i === 0) {
        return false;
          
      }
    }
    return true;
  }
  function primeNumbers(arr) {
    return arr.filter(isPrime); 
  };
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(primeNumbers(numbers));