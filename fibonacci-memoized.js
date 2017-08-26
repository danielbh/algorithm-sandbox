const fibonacci = (function() {
  let memo = {};

  function f(n) {

    if (n < 0) throw new Error('Negative numbers are not aloud')

    let value;

    if (n in memo) value = memo[n];
    else {
      value = (n === 0 || n === 1) ? n : f(n - 1) + f(n - 2);
      memo[n] = value;
    }
    return value;
  }

  return f;
})();

console.log(fibonacci(8));