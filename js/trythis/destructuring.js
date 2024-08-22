// swap
let a = 1;
let b = 2;
let t = a;
a = b;
b = t;
console.log('🚀 old - a b:', a, b);
a = 1;
b = 2;
[b, a] = [a, b];
console.log('🚀 new - a b:', a, b);

console.log('------------------');
let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log('🚀  arr:', arr);

console.log('------------------');

// let rr = qq * 10;
// let qq = 1;

// let r;
// r = q * 10;
// let q;
// q = 1;
let q, r, s;
({ r = q * 10, q, s } = { q: 10, s: 20 });
// {
//   q = 9;
//   r = 1;
// }

const user = { name: 'Hong', passwd: 'xyz', addr: 'Seoul' };
function getValueExceptInitial(k) {
  const { [k]: val } = user;
  // const [, ...ret] = [...val];
  const [, ...ret] = val;
  return ret.join('');
}
console.log(getValueExceptInitial('name')); // 'ong'
console.log(getValueExceptInitial('passwd')); // 'yz'
console.log(getValueExceptInitial('addr')); // 'eoul'
