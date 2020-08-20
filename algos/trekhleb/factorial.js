// simple method
function factorial(n) {
  let result = 1;
  for(let i=2; i<=n; i++) {
    result = result * i;
  }
  return result;
}

// factorial(15)

// Recursive formula n * (n-1)!
function factorialRecursive(number) {
  return number > 1 ? number * factorialRecursive(number - 1) : 1;
}

factorialRecursive(5)