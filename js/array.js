
const hong = { id: 1, name: 'Hongi' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Parki' };

const users = [hong, kim, lee, park];
const idxKim = users.indexOf(kim);
console.log('🚀  idxKim:', idxKim);

const find3 = a => a.id === 3;
const idxId2 = users.findIndex(find3);
console.log('🚀  idxId2:', idxId2);

const idxId3 = users.findLastIndex(a => a.id === 3);
const idxId1 = users.findLastIndex(find3);
console.log('🚀  idxId1:', idxId1);

const findId = id => a => a.id === id;
const idxId11 = users.findLastIndex(findId(1));
console.log('🚀  idxId11:', idxId11);

console.log('---------------');
users.forEach(a => console.log(a.id, a.name));

const arr = [1, 2, 3, 4, 5];
const isOdd = n => n % 2 !== 0;
// for (const val of arr) {
//   console.log(isOdd(val));
// }
arr.forEach(a => console.log(a, isOdd(a)));

const kim2 = users.find(user => user.name === 'Kim');
console.log('🚀  kim2:', kim2);
const hong2 = users.findLast(user => user.name === 'Hong');
console.log('🚀  hong2:', hong2);

console.log('--------------');
const hasIUsers = users.filter(user => user.name.includes('i'));
console.log('🚀  hasIUsers:', hasIUsers);

const names = users.map(user => user.name);
console.log('🚀  names:', names);

// check prime number
// 1) 소수를 가지고 있는지
const hasPrime = (arr) => 

// 2) 소수를 가지고 있다면, 추출
const getPrimeNumbers = arr => 