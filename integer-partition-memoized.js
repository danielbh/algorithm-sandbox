function sum(num) {
  const memo = [];

  function partition(n,m) {
    if(m === 0 || n < 0) return 0;
    if(n === 0) return 1;
    if (!memo[n]) memo[n] = [];
    let result = memo[n][m];
    if (typeof result !== 'number') {
      result = partition(n-m, m) + partition(n, m-1);
      memo[n][m] = result;
    }
    return result
  }

  return partition(num, num)
}

console.log(sum(10))