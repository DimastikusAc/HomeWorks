function padString(str, len, symbol, toLeft = false) {
   
    if (str.length - 1 > len) {
       return str;
    }
    let sym = len - str.length;
    let stringSymbol = symbol.repeat(sym);
 
    
    if (toLeft) {
       return str + stringSymbol;
 
    } else {
       return stringSymbol + str;
    }
 
 
 }
 
 console.log(padString("John", 10, "*", true));