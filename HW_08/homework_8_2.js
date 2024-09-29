function findCommonElements(array1, array2) {
  
    let arrayElements = [];
      for (j = 0; j < array1.length; j++) {
        for (i = 0; i < array2.length; i++)

          if(array1[j] - array2[i] === 0) {
            arrayElements.push(array1[j]);
          }
      }
    return arrayElements;
  }
  
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  
  console.log(findCommonElements(array1, array2)); // [3, 4, 5]