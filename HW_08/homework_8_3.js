function analyzeArray(numbers) {
    let sum = 0;
    let average = 0;
    let min = numbers[0];
    let max = numbers[0];
      for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        average = sum/numbers.length;
      }
     
      for(j = 1; j < numbers.length; j++) {
        if (numbers[j] < min) {
          min = numbers[j];
        }
        if (numbers[j] > max) {
          max = numbers[j];
        }
      }
        
  // console.log(sum, average, min, max);
      return {
        sum: sum,
        average: average,
        min: min,
        max: max
      }
  }

  const numbers = [1, 2, 3, 4, 5];

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }