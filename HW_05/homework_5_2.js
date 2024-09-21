function isPalindrome (string) {
    let cleanString = string.replace(/\s/g, '');
 
       let turn = '';
       for (let i = cleanString.length - 1; i >= 0; i--) {
          turn += cleanString[i];
       
       }
 
          return cleanString === turn;
          
              
 }
 let textString = "я несу гусеня";
 console.log(isPalindrome (textString));