function capitalizeStrings(words) {
   
    let word = [];
  
       for (let i = 0; i < words.length; i++) {
       
        word.push(words[i][0].toUpperCase() + words[i].slice(1).toLowerCase());
    }
       return word; 
  }
    
  const words = ["apple", "banaNA", "kiWi", "ORANGE"];
  console.log(words);
  
  console.log(capitalizeStrings(words));