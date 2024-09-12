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
let xx: Guest | Member = {
  id: 123,
  name: '홍길동',
  age: 26,
  addr: '용산구',
  // discountRate: 1,
};

if ('age' in xx) g = xx;
if ('addr' in xx) m = xx;

if (typeof xx.id === 'number' && 'age' in xx) g = xx;
if (typeof xx.id === 'string' && 'addr' in xx) m = xx;

xx.id = 100;
// if (typeof xx.id === 'number') g = xx;
// if (xx.hasOwnProperty('discountRate') m = xx;

let xxx = {
  id: 123,
  name: '홍길동',
  age: 26,
  addr: '용산구',
  discountRate: 0.1,
};

// m = xxx;

g = xxx;
if ('age' in xxx) g = xxx;
else m = xxx;
console.log(xxx);

if (typeof xxx.id === 'number' && 'age' in xxx) g = xxx;
// if (typeof xxx.id === 'string' && 'addr' in xxx) m = xxx;

// ----------------------------------

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

// ----------------------
let gildong = Math.random() > 0.5 && 'HongGilDong';

if (gildong) {
  gildong.toUpperCase(); // string
} else {
  gildong; // false | string
}

let a: string | undefined;
a = Math.random() > 5 ? 'aa' : undefined;
a?.slice(1);

const songs = ['One More Time', 'I AM', 'Cry'];
// const songs = Array('One More Time', 'I AM', 'Cry');
// const songs = Array<string>('One More Time', 'I AM', 'Cry');

// song : string
// index : number

songs.forEach((song, index) => {
  console.log(`${song} is at index ${index}`);
});

function fxx(i: number): string {
  return i + 'aa';
}

let rxx = fxx(3);

type VoidReturn = () => void;
const test2: VoidReturn = () => 'abc'; // OK!
// test2().toString(); // ?

// ----------------------------------------
function logSong(song: string): void {
  if (!song) {
    return; // OK!  return undefined; 도 OK!
  }
  console.log(`${song}`);
  // return true;
}

const aaa = 1;
type AAA = typeof aaa;
type LogSong = typeof logSong;

let songLogger: (song: string) => void;
type SL = typeof songLogger;

songLogger = song => {
  console.log(`${song}`);
  return; // OK
};
songLogger('HeartBeat'); // OK

// if (songLogger('HeartBeat'))
//   // Error!
//   console.log('*******');

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(oneToTen[400]?.toFixed(2));

interface SomeInterface {
  [key: string]: number;
}

let is: SomeInterface = {
  one: 1,
  two: 2,
  // three: 'tree',
};

is['one']?.toFixed(2); // OK
is['four']?.toFixed(2); // false: OK, but Runtime Error in JS!
is['four']?.toFixed(2); // true: Error in TS Compiling!

const nums1 = [1, 2, 3, 4, 5];
const nums2 = [10, 20, 30, 40, 50];

const result1 = nums1.concat(nums2);
// 당연히 result1은 number[]

const strings1 = ['lim', 'eun', 'ha'];
// const result2 = result1.concat(strings1);

const lim = ['Lim', 26];
// let limTup: [string, number] = lim;

const aaaa: [number, string, boolean] = [1, 'lim', false];

// let bbbb: [number, string] = aaaa;

const greeting = (greet: 'Hi' | 'Hello', name: string, age: number) => {
  console.log(`${greet}~!    
                  ${name}(${age})`);
};

const tup1: ['Hi', string, number] = ['Hi', 'Lim', 26];
const tup: [string, number] = ['Lim', 26];
const arr = ['Park', 30];

greeting(...tup1); // OK
greeting('Hello', ...tup); // OK
// greeting('Hi', ...arr); // Error

const getPerson = () => {
  // do something...

  return ['Lim', 20] as const; // ②
};

const person1: [string, number] = ['Lim', 20]; // ①
const person2 = getPerson();

// person1, person2 모두 (string | number)[]

const getNameAgeTuple = (): [string, number] => {
  return ['Lim', 20]; // cf. as const는 원소들을 read-only!
};

const nameAndAge = getNameAgeTuple(); // nameAndAge의 타입: [string, number]

const [myNamex, age] = getNameAgeTuple();
// myName의 타입: string
// age의 타입: number

const myInfo = ['Lim', 20]; // (string|number)[]

const yourInfo: [string, number] = ['Park', 30];
// [string, number]

const dogInfo = ['Jama', 3] as const; //tuple + readonly
// readonly ["Jama", 3]

yourInfo[0] = 'Hong'; // OK
// dogInfo[0] = 'Cream'; // 수정 불가!

const getNameAgeArr = () => ['Lim', 30];

const getNameAgeTuplex = () => ['Jang', 20] as const;

const [name1, age1] = getNameAgeArr();
// name1: string | number
// age1: string | number

const [name2, age2] = getNameAgeTuplex();
// name2: "Jang"
// age2: 20

// let xyz = (age2 > 0 ? 'xyz' : 'zyx') as const;
let xyz = 'xyz' as const;
// xyz = 'zzz';

type A = [string, number];
type AA = (string | number)[];

type B = [boolean, ...A];
type BB = [boolean, ...AA];
let bb: BB = [false, ...['a', 1, 'b', 2, 3]];

console.log('------------------------');
