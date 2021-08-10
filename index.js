const prompt = require("prompt-sync")();

const inputNumber = parseInt(prompt("Enter the number of terms in sequence: "));
if (inputNumber <= 0) {
  return console.log("Number should be positive & greater than 0");
}

let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");

for (let i = 1; i <= inputNumber; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
