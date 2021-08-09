const fibonacciSequence = (n) => {
  if (typeof n == "string" || typeof n == "number") {
    n = parseInt(n);
  } else {
    console.log(typeof n);
    console.log("Please enter an integer");
    return;
  }

  let n1 = 0,
    n2 = 1,
    nextTerm;

  if (n <= 0) {
    console.log("Please enter a number greater than 0");
  } else {
    console.log("Fibonacci Series upto n terms:");

    for (let i = 1; i <= n; i++) {
      console.log(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
  }
};

fibonacciSequence(null);
