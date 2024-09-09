const myName: string = 'Senior Coding';
console.log(`Hello, ${myName}!`);
const myAge: number = 33;
console.log(`${myAge} years old!`);

let x: number | string;
x = 1;
console.log('🚀  x:', x);
x = 'abc';
console.log('🚀  x:', x);

const len = x.length;

let y: number | undefined;
console.log('🚀  y:', y);

let john = {
  firstName: 'John',
  lastName: 'ahn',
};

// interface User {
//   id: number;
//   name: string;
//   age: number;
//   address: string;
// }
type User = {
  id: number;
  name: string;
  age: number;
  address: string;
};

let hong: User;

const something = ({ id, name, age, address }: User) => {
  // Do something...
  hong = {
    id,
    name,
    age,
    address,
  };

  console.log('🚀  hong:', hong);
};

const sltr = 'LITERAL';
let nltr = 100;
let literal: 'LITERAL';
literal = sltr;
let str: string;
str = `xxxx`;
str = sltr;

let grade: 'S' | 'A' | 'B' | 'C';
grade = 'C';
// ------------------------
type Member = {
  id: string;
  name: string;
  addr: string;
  discountRate: number;
};
type Guest = {
  id: number;
  name: string;
  age: number;
};

type Customer = Member | Guest;
let customer: Customer;
let m: Member;
let g: Guest;

customer = {
  id: '111',
  name: '홍길동',
  addr: '용산구',
  discountRate: 0.1,
};

customer = {
  id: 222,
  name: '홍길동',
  age: 26,
};

customer = {
  id: 333,
  name: '홍길동',
  age: 26,
  addr: '용산구',
};

// if (customer typeof Guest) {

// }

console.log('🚀  customer:', customer);
const xx: Member | Guest = {
  id: 123,
  name: '홍길동',
  age: 26,
  addr: '용산구',
};

if ('age' in xx) g = xx;
if ('addr' in xx) m = xx;

if (typeof xx.id === 'string' && 'discountRate' in xx) m = xx;
xx.id = 100;
// if (typeof xx.id === 'number') g = xx;
// if (xx.hasOwnProperty('discountRate') m = xx;

let ss: string = 'str';
let nn: number = 900;
let yy: string | number = 1;
yy = 'abc';

if (typeof yy === 'string') {
  // if (yy === 'abc') {
  ss = yy;
} else {
  nn = yy;
}
