let N = 5;
 
let tree = "";
 

for (let i = 1; i <= N; i++) {
   
   for (let space = 1; space <= N - i; space++) {
      tree += " ";
   }
 
   for (let stars = 1; stars <= 2 * i - 1; stars++) {
      tree += "*";
   }
   tree += "\n";
}
console.log(tree);
console.log("Hello World");