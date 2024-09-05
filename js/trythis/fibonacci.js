let runCnt = 0;

function loopFibonacci1(n) {
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    let t = prev;
    prev = curr;
    curr = t + curr;
  }

  return curr;
}

function loopFibonacci2(n) {
  if (n <= 1) return n;

  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  return arr[n];
}

function loopFibonacci(n) {
  if (n <= 1) return n;

  //         prev curr
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    runCnt += 1;
    [arr[0], arr[1]] = [arr[1], arr[0] + arr[1]];
  }

  return arr[1];
}

console.log('5=', loopFibonacci(5)); // 5
console.log('7=', loopFibonacci(7)); // 13
console.log('15=', loopFibonacci(15)); // 610
console.log('🚀  runCnt-loop:', runCnt);
console.log('-------------');

runCnt = 0;
function recursiveFibonacci(n) {
  runCnt += 1;
  if (n <= 1) return n;

  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

console.log('5=', recursiveFibonacci(5)); // 5
console.log('7=', recursiveFibonacci(7)); // 13
console.log('15=', recursiveFibonacci(15)); // 610
console.log('15=', recursiveFibonacci(50000)); // 610
console.log('🚀  runCnt-recur:', runCnt);

console.log('-------------');

runCnt = 0;
const memoizedFibonacci = memoized(function (n) {
  runCnt += 1;
  if (n <= 1) return n;

  return memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
});

console.log('5=', memoizedFibonacci(5)); // 5
console.log('7=', memoizedFibonacci(7)); // 13
console.log('15=', memoizedFibonacci(15)); // 610
console.log('🚀  runCnt-memo:', runCnt);

function memoized(fn) {
  const cache = {};

  return function (k) {
    return cache[k] ?? (cache[k] = fn(k));
  };
}

// const memoized = fn => {
//   const cache = {};
//   return k => cache[k] ?? (cache[k] = fn(k));
// };
