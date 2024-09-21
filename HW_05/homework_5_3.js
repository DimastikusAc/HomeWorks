function isGcd (a, b) {
    if (a < b) {
       smallNum = a;
    } else {
       smallNum = b;
    }
    // console.log (smallNum);
    
       let gcd = 1
 
       for (let i = 1; i <= smallNum; i++) {
          if (a % i === 0 && b % i === 0) {
             gcd = i;
          }
       }
    return gcd;
 }
 console.log(isGcd (25, 15));