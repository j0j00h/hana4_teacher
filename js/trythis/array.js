'use strict';
const assert = require('assert');

const arr = [1, 2, 3, 4];
const push = (arr, ...args) => [...arr, ...args];
const pop1 = (arr, idx = 1) =>
  idx === -1 ? arr.slice(-idx)[0] : arr.slice(idx);

var ret;
const pop2 = (arr, idx = 1) => (
  (ret = arr.slice(-idx)), idx === 1 ? ret[0] : ret
);

const pop = (arr, idx = 1) => {
  const result = arr.slice(-idx);
  if (result.length === 1) return result[0];
  return result;
};

const unshift = (arr, ...args) => [...args, ...arr];

const shift = (arr, idx = 1) => arr.slice(idx);
const shift2 = (arr, idx = 1) => [arr.slice(0, idx), arr.slice(idx)];

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
// console.log(pop(arr), pop(arr, 2));
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝(꺼내 줘)!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
const [shifted, rest] = shift2(arr);
assert.deepStrictEqual(shifted, [1]);
assert.deepStrictEqual(rest, [2, 3, 4]);
assert.deepStrictEqual(shift2(arr, 2), [
  [1, 2],
  [3, 4],
]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
