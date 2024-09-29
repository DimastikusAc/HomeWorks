function uniqueValues(array1, array2) {
 
    let mergedArrays = array1.concat(array2);
    
   
    let uniqueArray = [];
  
   
    for (let i = 0; i < mergedArrays.length; i++) {
        let value = mergedArrays[i];
  
    
        if (!uniqueArray.includes(value)) {
            uniqueArray.push(value);
        }
    }
  
    return uniqueArray;
  }
  
  let array1 = [1, 2, 3, 4, 5];
  let array2 = [3, 4, 5, 6, 7];
  
  let result = uniqueValues(array1, array2);
  console.log(result);