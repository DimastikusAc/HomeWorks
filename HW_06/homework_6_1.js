function doubleLetter(str) {

    let letter = '';
 
    for (i = 0; i <= str.length - 1; i++) {
       letter += str[i] + str[i];
    }
 return letter;
 }
 
 console.log(doubleLetter ("Hello"));