function camelCase(str, separator) {
   
    let word = str.split(separator);
    console.log(word);
 
       word[0] = word[0].toLowerCase();
 
       for (let i = 1; i < word.length; i++) {
       
        word[i] = word[i][0].toUpperCase() + word[i].slice(1).toLowerCase();
    }
       return word.join('');
 }
 console.log(camelCase("перетворюємо рядок до формату camelCase", " "));