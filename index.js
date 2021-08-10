const inputNumber = parseInt(
  prompt(
    "Enter the number (greater than zero) upto which you want fibonacci sequence: "
  )
);

let n1 = 0,
  n2 = 1,
  nextNumber;

console.log("Fibonacci Sequence:");

for (let i = 1; i <= inputNumber; i++) {
  console.log(n1);
  nextNumber = n1 + n2;
  n1 = n2;
  n2 = nextNumber;
}
